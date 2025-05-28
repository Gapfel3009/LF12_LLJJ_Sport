package de.szut.sportapplication.controller;

import de.szut.sportapplication.model.Workout;
import de.szut.sportapplication.repository.WorkoutRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workouts")
public class WorkoutController{

    @Autowired
    private WorkoutRepository workoutRepository;

//Todo: findall brauchen wir nicht gehen über userid und standard
// getestet: post, getAllWorkouts, put, delete, getWorkoutById, getStandardWorkouts,getWorkoutsByUser
    @GetMapping
    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Workout> createWorkout(@RequestBody Workout newWorkout) {
        Workout workout = new Workout();
        if (!newWorkout.getTitle().isEmpty()){
            workout.setTitle(newWorkout.getTitle());
        }
        if (!newWorkout.getDescription().isEmpty()){
            workout.setDescription(newWorkout.getDescription());
        }
        if (newWorkout.getUserID() != null){
            workout.setUserID(newWorkout.getUserID());
        }
        workoutRepository.save(workout);
        return ResponseEntity.status(HttpStatus.CREATED).body(workout);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Workout> updateWorkout(@PathVariable Integer id, @RequestBody Workout updatedWorkout) {
        return workoutRepository.findById(id)
                .map(existingWorkout -> {
                    existingWorkout.setTitle(updatedWorkout.getTitle());
                    //existingWorkout.setUserid(updatedWorkout.getUserid());
                    existingWorkout.setDescription(updatedWorkout.getDescription());
                    Workout saved = workoutRepository.save(existingWorkout);
                    return ResponseEntity.ok(saved);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWorkout(@PathVariable Integer id) {
        if (workoutRepository.existsById(id)) {
            workoutRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Workout> getWorkoutById(@PathVariable Integer id) {
        return workoutRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @Transactional
    @GetMapping("/byUser/{userId}")
    public List<Workout> getWorkoutsByUser(@PathVariable int userId) {
        return workoutRepository.findByUserid_UserID(userId);
    }

    @Transactional
    @GetMapping("/standard")
    public List<Workout> getStandardWorkouts() {

        return workoutRepository.findByUserid_UserID(1);
    }

}