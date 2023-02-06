package com.example.Webproj;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class IndexController {

    @GetMapping("/")
    String getIndex(Model model) { // add the parameter Model model if in need to use in template
        return "/index/index";
    }

//    @PostMapping("/")
//    public String sendUsername(@ModelAttribute User username) {
//        return "/page/stage1";
//    }

    @GetMapping("/stage1")
    String getFirstStage(Model model) {
        return "/page/stage1";
    }
}
