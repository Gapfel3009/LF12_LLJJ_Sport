package de.szut.sportapplication.repository;

import de.szut.sportapplication.model.UserWorkout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface UserWorkoutRepository extends JpaRepository<UserWorkout, Integer> {
   List<UserWorkout> findByAppUser_userID(Integer userId);
}
