package de.szut.sportapplication.service;

import de.szut.sportapplication.model.AppUser;
import de.szut.sportapplication.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AppUserService implements UserDetailsService {
    @Autowired
    private UsersRepository usersRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        AppUser user = usersRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Nutzer nicht gefunden!"));
       return new org.springframework.security.core.userdetails.User(
                user.getEmail(), user.getPasswordHash(), new ArrayList<>());
    }
}
