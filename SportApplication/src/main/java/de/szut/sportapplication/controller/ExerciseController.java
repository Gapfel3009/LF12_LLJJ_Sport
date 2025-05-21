package de.szut.sportapplication.controller;

import de.szut.sportapplication.model.Exercise;
import de.szut.sportapplication.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exercise")
public class ExerciseController {
private final ExerciseRepository exerciseRepository;
@Autowired
    public ExerciseController(ExerciseRepository exerciseRepository) {this.exerciseRepository = exerciseRepository;}
  @GetMapping
  public ResponseEntity<List<Exercise>> getAll() {
        List<Exercise> exercises = exerciseRepository.findAll();
        return ResponseEntity.ok(exercises);
  }

}
