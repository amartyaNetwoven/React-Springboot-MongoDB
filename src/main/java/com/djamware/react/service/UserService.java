package com.djamware.react.service;

import com.djamware.react.dao.UserDao;
import com.djamware.react.models.Users;

public class UserService {

	
	public Users save(Users users) {
		
		UserDao userDao = new UserDao();
		
		return userDao.save(users);
	}
	
}
