package de.szut.sportapplication.controller;

import de.szut.sportapplication.model.AppUser;
import de.szut.sportapplication.model.Workout;
import de.szut.sportapplication.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/appUser")
public class AppUserController {
    //getestet: getUser, post, put - kein delete?
    @Autowired
    private UsersRepository usersRepository;

    @GetMapping("/{id}")
    public ResponseEntity<AppUser> getUser(@PathVariable int id) {
        return usersRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @PostMapping
    public ResponseEntity<AppUser> createUser(@RequestBody AppUser appUser) {
        AppUser saved = usersRepository.save(appUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
    @PutMapping("/{id}")
    public ResponseEntity<AppUser> updateUser (@PathVariable Integer id, @RequestBody AppUser updatedUser) {
        return usersRepository.findById(id)
                .map(existingUser -> {
                    existingUser.setEmail(updatedUser.getEmail());
                    existingUser.setPasswordHash(updatedUser.getPasswordHash());
                    existingUser.setUsername(updatedUser.getUsername());
                    existingUser.setStreak(updatedUser.getStreak());
                    existingUser.setXpTotal(updatedUser.getXpTotal());
                    existingUser.setXpChest(updatedUser.getXpChest());
                    existingUser.setXpShoulders(updatedUser.getXpShoulders());
                    existingUser.setXpLegs(updatedUser.getXpLegs());
                    existingUser.setXpTriceps(updatedUser.getXpTriceps());
                    existingUser.setXpAbs(updatedUser.getXpAbs());
                    existingUser.setXpGlutes(updatedUser.getXpGlutes());
                    existingUser.setXpBiceps(updatedUser.getXpBiceps());
                    existingUser.setXpFlexibility(updatedUser.getXpFlexibility());
                    existingUser.setAvatarID(updatedUser.getAvatarID());
                   // existingUser.setAvatar(updatedUser.getAvatar());
                    AppUser saved = usersRepository.save(existingUser);
                    return ResponseEntity.ok(saved);
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
