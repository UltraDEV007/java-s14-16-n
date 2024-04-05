package com.nocountry.foodlyfinds.model.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Long id;
    @NotNull(message = "El nombre de usuario no puede ser nulo")
    @NotBlank(message = "El nombre de usuario no puede estar en blanco")
    private String username;

    @NotBlank(message = "El correo no puede ser en blanco")
    @Email(message = "Correo no valido")
    private String email;

    @NotNull(message = "La contrasenia no puede ser nulo")
    @NotBlank(message = "La contrasenia no puede ser en blanco")
    private String password;

    private String address;
    private String cellphone;
    private String name;
    private String imageUrl;
}
