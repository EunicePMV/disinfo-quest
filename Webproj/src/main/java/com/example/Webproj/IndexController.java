package com.example.Webproj;

import com.example.Webproj.DAO.UserRepository;
import com.example.Webproj.Service.SequenceGeneratorService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.validation.BindingResult;

import com.example.Webproj.Entity.User;

@Controller
public class IndexController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    @GetMapping("/")
    String getIndex(Model model) { // add the parameter Model model if in need to use in template
        model.addAttribute("userForm", new User());
        return "/index/index";
    }

    @PostMapping("/register")
    String registerUser(@ModelAttribute @Valid User user, BindingResult result, Model model, HttpSession session) {

        if(result.hasErrors())
            return this.getIndex(model);

        model.addAttribute("username", user.getUsername());
        model.addAttribute("userChar", user.getUsernameChar());

        // generate the id
        user.setId(sequenceGeneratorService.generateSequence(User.SEQUENCE_NAME));

        // save the user entity to the database
        userRepository.save(user);

        session.setAttribute("username", user.getUsername());
        session.setAttribute("userChar", user.getUsernameChar());
        return "/page/stage1";
    }

    @GetMapping("/stage1")
    String getFirstStage(@ModelAttribute User user, Model model) {
        return "/page/stage1";
    }

    @GetMapping("/stage2")
    String getSecondStage() {
        return "/page/stage2";
    }

    @GetMapping("/stage3")
    String getThirdStage() {
        return "/page/stage3";
    }

    @GetMapping("/stage4")
    String getFourthStage() {
        return "/page/stage4";
    }
}