package de.szut.sportapplication.repository;

import de.szut.sportapplication.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<AppUser, Integer> {

}


