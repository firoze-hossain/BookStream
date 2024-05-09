package com.roze;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class BookStreamBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookStreamBackendApplication.class, args);
    }

}
