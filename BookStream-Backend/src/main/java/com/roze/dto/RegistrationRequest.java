package com.roze.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RegistrationRequest {
    @NotEmpty(message = "First Name is mandatory")
    @NotBlank(message = "First name is mandatory")
    private String firstName;
    @NotEmpty(message = "Last Name is mandatory")
    @NotBlank(message = "Last name is mandatory")
    private String lastName;
    @Email(message = "Email is not well formatted")
    @NotEmpty(message = "Email is mandatory")
    @NotBlank(message = "Email is mandatory")
    private String email;
    @NotEmpty(message = "Password is mandatory")
    @NotBlank(message = "Password is mandatory")
    @Size(min = 4, message = "Password should be 4 characters minimum")
    private String password;
}
