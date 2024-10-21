package com.oldrick.timber_construction.projects.service;

import com.oldrick.timber_construction.projects.model.Project;
import com.oldrick.timber_construction.projects.repository.ProjectRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class ProjectService {
    private final ProjectRepository projectRepository;

    public Project createProject(Project project) {
        projectRepository.save(project);
        log.info("Product created successfully");
        return project;
    }


    public List<Project> getAllProducts() {
        return projectRepository.findAll();
    }

    public List<Project> saveProjects(List<Project> projects) {
        return projectRepository.saveAll(projects);
    }
}
