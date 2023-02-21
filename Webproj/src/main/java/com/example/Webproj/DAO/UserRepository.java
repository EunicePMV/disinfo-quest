package com.example.Webproj.DAO;

import com.example.Webproj.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, Long> {
}
