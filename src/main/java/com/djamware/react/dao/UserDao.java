package com.djamware.react.dao;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;

import com.djamware.react.models.Users;
import com.djamware.react.repositories.UsersRepository;
import com.djamware.react.util.UtilService;

public class UserDao {

	@Autowired
	UsersRepository usersRepository;

	Logger logger = UtilService.getLoggerObject(this.getClass().getName());

	public Users save(Users users) {

		try {

			logger.log(Level.INFO, "Saving Users - ",users);

			users.setPassword(UtilService.getEncryptedPassword(users.getPassword()));

			usersRepository.save(users);



		} catch (Exception e) {

			logger.log(Level.SEVERE, "Exception while Saving Users - "+e.getMessage(),e);
		}

		return users;
	}

}
