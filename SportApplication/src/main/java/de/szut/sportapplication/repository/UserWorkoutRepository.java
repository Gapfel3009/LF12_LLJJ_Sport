package de.szut.sportapplication.repository;

import de.szut.sportapplication.model.UserWorkout;
import de.szut.sportapplication.model.UserWorkoutId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserWorkoutRepository extends JpaRepository<UserWorkout, UserWorkoutId> {
    List<UserWorkout> findByUserId(Integer userId);
}
