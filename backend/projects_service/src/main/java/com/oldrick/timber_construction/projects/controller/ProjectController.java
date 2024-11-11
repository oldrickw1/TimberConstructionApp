package com.oldrick.timber_construction.projects.controller;

import com.oldrick.timber_construction.projects.config.RabbitMqConfig;
import com.oldrick.timber_construction.projects.model.Project;
import com.oldrick.timber_construction.projects.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/project")
@RequiredArgsConstructor
public class ProjectController {
    private final RabbitTemplate rabbitTemplate;

    // Todo: For simplicity, I omitted a DTO layer (ProjectRequest + ProjectResponse records). I should implement that for better separation of concern.
    private final ProjectService projectService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Project createProject(@RequestBody Project projectRequest) {
        System.out.println("--------------------------         trying to send message to rabbitmq!!!!");
        try {
            rabbitTemplate.convertAndSend(RabbitMqConfig.QUEUE_NAME, "message send to rabbitmq");
        } catch (Exception e) {
            System.out.println("Failed to send message to rabbitmq" );
            e.getMessage();
        }
        System.out.println("--------------------------         message send to rabbitmq!!!!");

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
