package com.bryanpegg.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bryanpegg.entity.User;
import com.bryanpegg.repo.UserRepo;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	UserRepo userRepo;
	
	public UserController(UserRepo userRepo) {
		this.userRepo = userRepo;
	}

	@GetMapping("/user/{username}")
	public List<User> getUserFromDataBase(@PathVariable String username) {
		return userRepo.findUserByUsername(username);
	}
	
	@PostMapping("/user")
	public User postUserInDataBase(@RequestBody User user) {
		return userRepo.saveAndFlush(user);
	}
	
}
