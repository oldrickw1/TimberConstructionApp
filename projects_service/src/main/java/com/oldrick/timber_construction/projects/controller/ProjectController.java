package com.oldrick.timber_construction.projects.controller;

import com.oldrick.timber_construction.projects.model.Project;
import com.oldrick.timber_construction.projects.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/project")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:5174", "http://localhost:5173"})
public class ProjectController {

    private final ProjectService projectService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Project createProject(@RequestBody Project projectRequest) {
        return projectService.createProject(projectRequest);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Project> getAllProjects() {
        return projectService.getAllProducts();
    }


    @PostMapping("/bulk")
    @ResponseStatus(HttpStatus.CREATED)
    public List<Project> createProjects(@RequestBody List<Project> projectRequests) {
        return projectService.saveProjects(projectRequests);
    }
}
