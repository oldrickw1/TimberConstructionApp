package com.oldrick.timber_construction.projects.service;

import com.oldrick.timber_construction.projects.dto.ArchitectureResponse;
import com.oldrick.timber_construction.projects.dto.ProjectRequest;
import com.oldrick.timber_construction.projects.dto.ProjectResponse;
import com.oldrick.timber_construction.projects.model.Architect;
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

    public ProjectResponse createProject(ProjectRequest projectRequest) {
        System.out.println(projectRequest);
        Architect architect = Architect.builder().
                name(projectRequest.architect().name())
                .build();
        Project project = Project.builder()
                .name(projectRequest.name())
                .description(projectRequest.description())
                .architect(architect)
                .build();
        projectRepository.save(project);
        log.info("Product created successfully");
        return new ProjectResponse(project.getId(), project.getName(), project.getDescription(), new ArchitectureResponse(architect.getId(), architect.getName()));
    }


    public List<ProjectResponse> getAllProducts() {
        return projectRepository.findAll()
                .stream()
                .map(project -> {
                    Architect architect = project.getArchitect();
                    return new ProjectResponse(project.getId(), project.getName(), project.getDescription(), new ArchitectureResponse(architect.getId(), architect.getName()));
                })
                .toList();
    }

}
