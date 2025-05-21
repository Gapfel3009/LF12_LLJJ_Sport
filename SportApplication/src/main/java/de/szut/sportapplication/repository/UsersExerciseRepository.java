package de.szut.sportapplication.repository;

import de.szut.sportapplication.model.UsersExercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersExerciseRepository extends JpaRepository<UsersExercise, Integer> {
}
