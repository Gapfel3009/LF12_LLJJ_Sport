package de.szut.sportapplication.controller;

import de.szut.sportapplication.model.UserWorkout;
import de.szut.sportapplication.model.Workout;
import de.szut.sportapplication.repository.UserWorkoutRepository;
import de.szut.sportapplication.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api/workouts")
public class WorkoutController {

    @Autowired
    private UserWorkoutRepository userWorkoutRepository;

    @Autowired
    private WorkoutRepository workoutRepository;

    // GET /api/workouts/user/{userId}
    @GetMapping("/user/{userId}")
    public List<Workout> getWorkoutsByUser(@PathVariable Integer userId) {
    List<UserWorkout> userWorkouts = userWorkoutRepository.findByUserId(userId);
    return userWorkouts.stream()
            .map(userWorkout -> workoutRepository.findById(userWorkout.getWorkoutId()).orElse(null))
            .filter(Objects::nonNull)
            .collect(Collectors.toList());


    }
}
