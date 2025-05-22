package de.szut.sportapplication.repository;

import de.szut.sportapplication.model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout, Long> {
    List<Workout> findByUserid_UserID(Integer userId);

    @Query("SELECT w FROM Workout w LEFT JOIN FETCH w.exercises WHERE w.workoutID = :id")
    Optional<Workout> findByIdWithExercises(@Param("id") long id);

    /* @Query("SELECT w FROM Workout as w " +
            "JOIN FETCH w.workoutExercises we " +
            "JOIN FETCH we.exercise " +
            "WHERE w.workout_id = :id")
    Optional<Workout> findByIdWithExercisesDetailed(@Param("id") Long id);*/
}
