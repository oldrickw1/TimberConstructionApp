package com.oldrick.mail_service.listener;


import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Component;

@Component
public class EmailListener {

    @Autowired
    private JavaMailSender emailSender;

    @Retryable(maxAttempts = 1, backoff = @Backoff(delay = 5000))
    @RabbitListener(queues = "mailQueue")
    public void sendEmail(String emailContent) {
        // Here, we're assuming emailContent is a formatted string
        // For example: "recipient@example.com;Subject;Body"
//        String[] parts = emailContent.split(";");
//        String to = parts[0];
//        String subject = parts[1];
//        String body = parts[2];
        try {
            String to = "o.weenink@hotmail.com";
            String subject = "A project has been added to the Timber Construction App!";
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to);
            message.setSubject(subject);
            message.setText(emailContent);

            emailSender.send(message);

            System.out.println("(dummy) ## ------------------------------  Email is send!");
        } catch (Exception e) {
            System.out.println("Failed to send mail...");
            e.printStackTrace();
        }
    }
}
