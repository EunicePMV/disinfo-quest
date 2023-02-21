package com.example.Webproj.DAO;

import com.example.Webproj.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class UserDAO {

    @Autowired
    private UserRepository repository;

    public Collection<User> getUser() {
        return repository.findAll();
    }

    public User createUser(User user) {
        return repository.insert(user);
    }
}