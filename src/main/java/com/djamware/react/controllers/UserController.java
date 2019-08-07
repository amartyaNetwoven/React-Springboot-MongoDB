package com.djamware.react.controllers;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.djamware.react.models.Users;
import com.djamware.react.service.UserService;

@RestController
public class UserController {


	@RequestMapping(method=RequestMethod.POST, value="/users")
	public Users save(@RequestBody Users users) {
		
		UserService userService = new UserService();	

		return userService.save(users);
	}


	
}