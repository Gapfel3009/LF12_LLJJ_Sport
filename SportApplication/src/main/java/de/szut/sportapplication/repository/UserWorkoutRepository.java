package de.szut.sportapplication.repository;

import de.szut.sportapplication.model.UserWorkout;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserWorkoutRepository extends JpaRepository<UserWorkout, Integer> {
    //List<UserWorkout> findByUser_UserId(Integer userId);
}
