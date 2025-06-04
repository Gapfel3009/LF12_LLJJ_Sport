package de.szut.sportapplication.controller;

import de.szut.sportapplication.model.AppUser;
import de.szut.sportapplication.repository.UsersRepository;
import de.szut.sportapplication.service.JWTAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private JWTAuthService jwtAuthService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public record LoginResponse(String token, AppUser user) {}

    @Autowired
    private UsersRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AppUser user) {
        System.out.println("Register request: " + user.getEmail() + user.getPasswordHash());
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Email bereits vorhanden."));
        }
        user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));
        String randomUsername = "user_" + UUID.randomUUID().toString().substring(0, 8);
        user.setUsername(randomUsername);
        user.setAvatarID(1);
        userRepository.save(user);
        return ResponseEntity.ok(Map.of("message", "User angelegt"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AppUser user) {
        Optional<AppUser> optionalUser = userRepository.findByEmail(user.getEmail());
        AppUser timeUser = new AppUser();
        timeUser = optionalUser.get();
        if (timeUser.getLastWorkout() != null){
            Date lastWOrkoutDate = timeUser.getLastWorkout();
            LocalDate today = LocalDate.now().minusDays(2);
            LocalDate localDateTime = lastWOrkoutDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();


            if (localDateTime.atStartOfDay().isBefore(today.atStartOfDay())){
                timeUser.setStreak(0);
                userRepository.save(timeUser);
            }}

        if (optionalUser.isPresent() && passwordEncoder.matches(user.getPasswordHash(), optionalUser.get().getPasswordHash())) {
            String jwt = jwtAuthService.generateToken(optionalUser.get().getEmail());
            return ResponseEntity.ok(new LoginResponse(jwt,optionalUser.get()));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
}
