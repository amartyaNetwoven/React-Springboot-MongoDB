package com.djamware.react.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.gridfs.GridFSBucket;
import com.mongodb.client.gridfs.GridFSBuckets;

@Configuration
public class MongoGridFsTemplate extends AbstractMongoConfiguration {

	@Value("${spring.data.mongodb.address}")
	private String mongoAddress; 

	@Value("${spring.data.mongodb.database}")
	private String mongoDatabase;

	@Bean
	public GridFsTemplate gridFsTemplate() throws Exception {
		return new GridFsTemplate(mongoDbFactory(), mappingMongoConverter());
	}

	@Bean public GridFSBucket getGridFSBuckets() {
		MongoDatabase db = mongoDbFactory().getDb();
		return GridFSBuckets.create(db);
	}

	@Override
	protected String getDatabaseName() {
		return mongoDatabase;
	}

	public Mongo mongo() throws Exception {
		return new MongoClient(mongoAddress);
	}

	@Override
	public MongoClient mongoClient() {
		return new MongoClient(mongoAddress);
	}
}
