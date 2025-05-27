package de.szut.sportapplication.controller;

import de.szut.sportapplication.model.AppUser;
import de.szut.sportapplication.model.Avatar;
import de.szut.sportapplication.repository.AvatarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/avatars")
public class AvatarController {
    //getestet: getAll und get
    @Autowired
    private AvatarRepository avatarRepository;

    @GetMapping
    public ResponseEntity<List<Avatar>> getAllAvatars() {
        List<Avatar> avatars = avatarRepository.findAll();
        return ResponseEntity.ok(avatars);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Avatar> getAvatar(@PathVariable int id) {
        return avatarRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
