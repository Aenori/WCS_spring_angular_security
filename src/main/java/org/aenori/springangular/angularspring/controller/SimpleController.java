package org.aenori.springangular.angularspring.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class SimpleController {
    @GetMapping("/open")
    Map<String, String> open() {
        return message("Cette url est open");
    }

    @GetMapping("/needAuthentication")
    Map<String, String> needAuthentication() {
        return message("Félicitation, vous avez terminé ce tp, si vous avez accéder sous angular");
    }

    Map<String, String> message(String messageContent) {
        Map<String, String> result = new HashMap<>();
        result.put("message", messageContent);

        return result;
    }
}
