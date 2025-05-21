package de.szut.sportapplication.controller;

import de.szut.sportapplication.model.Avatar;
import de.szut.sportapplication.repository.AvatarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/avatars")
public class AvatarController {
    private final AvatarRepository avatarRepository;

    @Autowired
    public AvatarController(AvatarRepository avatarRepository) {
        this.avatarRepository = avatarRepository;
    }

    @GetMapping
    public ResponseEntity<List<Avatar>> getAllAvatars() {
        List<Avatar> avatars = avatarRepository.findAll();
        return ResponseEntity.ok(avatars);
    }
}
