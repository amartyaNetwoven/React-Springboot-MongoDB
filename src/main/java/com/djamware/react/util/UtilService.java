package com.djamware.react.util;

import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.djamware.react.models.Contact;
import com.djamware.react.repositories.ContactRepository;

public class UtilService {

	public static String getEncryptedPassword(String easyPassword) {
		
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		
		return passwordEncoder.encode(easyPassword);
	}
	
	public static Logger getLoggerObject(String className) {
		
		return Logger.getLogger(className);
		
	}
	
	public static Contact getContactObject(String id, ContactRepository contactRepository) {
		
		Optional<Contact> optcontact = contactRepository.findById(id);
		if (optcontact.isPresent()) {
			return optcontact.get();
		}
		return null;
		
	}
	
}
