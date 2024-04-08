package com.nocountry.foodlyfinds.model.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileRequest {

    @NotEmpty
    private String name;

    @NotEmpty
    @Size(min = 10, max = 20, message = " debe contener entre {min} y {max} caracteres")
    private String phoneNumber;

}
