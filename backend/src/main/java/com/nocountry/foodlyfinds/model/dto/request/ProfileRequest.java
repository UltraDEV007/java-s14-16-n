package com.nocountry.foodlyfinds.model.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.SchemaProperties;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileRequest {

    @NotEmpty(message = "is required, must be between 4 and 30 characters")
    @Size(min = 4, max = 30)
    private String name;

    @NotEmpty(message = "is required, must be between 10 and 15 digits")
    @Size(min = 10, max = 15)
    private String phoneNumber;



}
