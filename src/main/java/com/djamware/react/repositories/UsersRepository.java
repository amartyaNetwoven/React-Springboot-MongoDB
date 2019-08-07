package com.djamware.react.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.djamware.react.models.Users;

public interface UsersRepository extends MongoRepository<Users, String> {
	
	Users findByUsername(String username);

}
