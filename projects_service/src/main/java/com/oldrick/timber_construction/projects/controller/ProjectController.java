package com.oldrick.timber_construction.projects.controller;

import com.oldrick.timber_construction.projects.dto.ProjectRequest;
import com.oldrick.timber_construction.projects.dto.ProjectResponse;
import com.oldrick.timber_construction.projects.model.Project;
import com.oldrick.timber_construction.projects.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/project")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5174")
public class ProjectController {

    private final ProjectService projectService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProjectResponse createProject(@RequestBody ProjectRequest projectRequest) {
        return projectService.createProject(projectRequest);
    }
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ProjectResponse> getAllProjects() {
        return projectService.getAllProducts();
    }
}
