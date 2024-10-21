package com.oldrick.timber_construction.projects.repository;

import com.oldrick.timber_construction.projects.model.Project;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRepository extends MongoRepository<Project, String> {
}
