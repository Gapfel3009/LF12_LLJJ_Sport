package de.szut.sportapplication.repository;

import de.szut.sportapplication.model.WorkoutExercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkoutExerciseRepository extends JpaRepository<WorkoutExercise, Integer> {
    List<WorkoutExercise> findByWorkout_WorkoutID(Integer workoutId);
}
