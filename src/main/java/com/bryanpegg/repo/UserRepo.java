package com.bryanpegg.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bryanpegg.entity.User;

public interface UserRepo extends JpaRepository<User, Long> {

	List<User> findUserByUsername(String username);
	
}
