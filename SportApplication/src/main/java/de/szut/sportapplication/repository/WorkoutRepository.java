package de.szut.sportapplication.repository;

import de.szut.sportapplication.model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout, Integer> {
    List<Workout> findByUserid_UserID(Integer userId);

}
