package de.szut.sportapplication.repository;

import de.szut.sportapplication.model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkoutRepository extends JpaRepository<Workout, Integer> {
}
