package com.bryanpegg.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bryanpegg.entity.User;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

//	@GetMapping("/user/{username}")
	
	
	@PostMapping("/user")
	public User postUserInDataBase(@RequestBody User user) {
		return user;
	}
	
}
