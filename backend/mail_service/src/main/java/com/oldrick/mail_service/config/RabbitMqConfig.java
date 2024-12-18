package com.oldrick.mail_service.config;

import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMqConfig {

    public static final String QUEUE_NAME = "mailQueue";

    @Bean
    public Queue emailQueue() {
        return new Queue(QUEUE_NAME, false);
    }
}
