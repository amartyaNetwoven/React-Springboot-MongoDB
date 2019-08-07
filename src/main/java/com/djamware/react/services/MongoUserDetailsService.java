package com.djamware.react.services;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.djamware.react.models.Users;
import com.djamware.react.repositories.UsersRepository;

@Component
public class MongoUserDetailsService implements UserDetailsService {

	@Autowired
	private UsersRepository repository;
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
			
		
		System.out.println("loadUserByUsername(String username) " );
		Users user = repository.findByUsername(username);
		
		if(user == null) {
			throw new UsernameNotFoundException("User Not Found");
		}
		
		List<SimpleGrantedAuthority> authorities = Arrays.asList(new SimpleGrantedAuthority("user"));
		
		return new User(user.getUsername(), user.getPassword(), authorities);
	}
	
}
