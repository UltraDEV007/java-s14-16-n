package com.nocountry.foodlyfinds.model.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserTblDTO {

    @NotEmpty
    private String name;

    @NotEmpty
    @Email
    private String email;

    @NotEmpty
    @Size(min =6, max = 10)
    private String password;

    @NotEmpty
    private String coords;

    @NotEmpty
    @Size(min = 10, max = 20, message = " debe contener entre {min} y {max} caracteres")
    private String phoneNumber;

    //private String userImageUrl;
}