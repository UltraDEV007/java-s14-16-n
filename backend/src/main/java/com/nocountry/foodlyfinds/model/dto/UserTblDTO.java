package com.nocountry.foodlyfinds.model.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.SchemaProperties;
import jakarta.persistence.Column;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Configuration;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserTblDTO {

    @NotEmpty(message = "must not be empty")
    @Size(min = 4, max = 50, message = "is required, must be between {min} and {max} characters")
    private String name;

    @Schema(example = "example@example.com")
    @Email(message = "must be a valid email address format")
    @Pattern(regexp = "^[a-zA-Z0-9_-]{5,}@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", message = "invalid email format")
    @Column(unique = true)
    private String email;

    @NotEmpty(message = "must not be empty")
    @Size(min = 8, max = 15, message = "is required, must be between {min} and {max} characters")
    private String password;

    @Schema(example = "example 41.3547, -157.6954")
    @Pattern(regexp = "^(-?\\d+(\\.\\d+)?),\\s*(-?\\d+(\\.\\d+)?)$", message = "Invalid coordinates")
    private String coords;

    @NotEmpty(message = "must not be empty")
    @Size(min = 10, max = 20, message = "is required, must be between {min} and {max} characters")
    private String phoneNumber;


}