package com.example.Webproj.Controller;

import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import com.example.Webproj.Entity.User;
import com.example.Webproj.Service.SequenceGeneratorService;
import com.example.Webproj.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    @GetMapping
    public Collection<User> getUser() {
        return userService.getUser();
    }

    @PostMapping(value = "/content", produces = MediaType.APPLICATION_JSON_VALUE)
    public User postUser(@RequestBody User user) {
        // automatic generated sequence here
        user.setId(sequenceGeneratorService.generateSequence(User.SEQUENCE_NAME));
        return userService.createUser(user);
    }

    // to get a json response @PostMapping(value = "/content", produces = MediaType.APPLICATION_JSON_VALUE)
}
