package de.szut.sportapplication.controller;
import de.szut.sportapplication.model.Exercise;
import de.szut.sportapplication.model.Workout;
import de.szut.sportapplication.model.WorkoutExercise;
import de.szut.sportapplication.repository.ExerciseRepository;
import de.szut.sportapplication.repository.WorkoutExerciseRepository;
import de.szut.sportapplication.repository.WorkoutRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/api/workout-exercises")
@CrossOrigin(origins = "http://localhost:4200")
public class WorkoutExerciseController {

    @Autowired
    private WorkoutExerciseRepository workoutExerciseRepository;

    @Autowired
    private WorkoutRepository workoutRepository;

    @Autowired
    private ExerciseRepository exerciseRepository;

    @PostMapping
    public ResponseEntity<WorkoutExercise> addExerciseToWorkout(@RequestBody WorkoutExercise we) {
        Workout workout = workoutRepository.findById(we.getWorkoutId()).orElse(null);
        Exercise exercise = exerciseRepository.findById(we.getExerciseId()).orElse(null);

        if (workout == null || exercise == null) {
            return ResponseEntity.badRequest().build();
        }

        we.setWorkoutId(workout.getWorkoutId());
        we.setExerciseId(exercise.getExerciseID());
        return ResponseEntity.status(HttpStatus.CREATED).body(workoutExerciseRepository.save(we));
    }
// Todo: brauchen wir erstmal nicht da nachträglich kein workout bearbeitbar ist.
//  die anderen beiden endpunkte sind getestet und funkionieren.
//  der get gibt aber immer alle objekte mit
 /*   @PutMapping("/{id}")
    public ResponseEntity<WorkoutExercise> updateWorkoutExercise(@PathVariable Integer id, @RequestBody WorkoutExercise updated) {
        return workoutExerciseRepository.findById(id).map(existing -> {
            existing.setNumSets(updated.getNumSets());
            existing.setNumReps(updated.getNumReps());
            existing.setWeightAmount(updated.getWeightAmount());
            existing.setExerciseOrder(updated.getExerciseOrder());
            return ResponseEntity.ok(workoutExerciseRepository.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWorkoutExercise(@PathVariable Integer id) {
        if (workoutExerciseRepository.existsById(id)) {
            workoutExerciseRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }*/

    @GetMapping("/byWorkout/{workoutId}")
    public ResponseEntity<List<WorkoutExercise>> getExercisesByWorkout(@PathVariable Integer workoutId) {
        List<WorkoutExercise> list = workoutExerciseRepository.findByWorkout_WorkoutID(workoutId);
        return ResponseEntity.ok(list);
    }
}

