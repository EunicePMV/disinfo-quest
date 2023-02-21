package com.example.Webproj.Service;

import com.example.Webproj.DAO.UserDAO;
import com.example.Webproj.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class UserService {

    @Autowired
    private UserDAO userDAO;

    public Collection<User> getUser() {
        return userDAO.getUser();
    }

    public User createUser(User user) {
        return userDAO.createUser(user);
    }
}
