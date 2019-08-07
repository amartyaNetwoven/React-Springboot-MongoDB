package com.djamware.react.repositories;

import org.springframework.data.repository.CrudRepository;

import com.djamware.react.models.Contact;

public interface ContactRepository extends CrudRepository<Contact, String> {
	@Override
	void delete(Contact deleted);
}
