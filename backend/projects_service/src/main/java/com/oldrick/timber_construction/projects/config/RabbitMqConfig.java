package com.oldrick.timber_construction.projects.config;


import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMqConfig {

    public static final String QUEUE_NAME = "mailQueue";

    @Bean
    public Queue mailQueue() {
        return new Queue(QUEUE_NAME, false);
    }
}
