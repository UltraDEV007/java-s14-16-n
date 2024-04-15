package com.nocountry.foodlyfinds.model.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "store")
public class StoreEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    private Long storeId;

    @NotEmpty(message = "Name cannot be empty")
    @NotNull(message = "Name cannot be null")
    @Pattern(regexp = "^(?=.*[a-zA-Z]{2})[a-zA-Z ]+$", message = "Name must contain at least 2 letters and cannot consist of only spaces")
    @Size(max = 30, message = "Name must be at most 30 characters long")
    private String name;

    @NotEmpty(message = "Address cannot be empty")
    @NotNull(message = "Address cannot be null")
    @Pattern(regexp = "^[0-9]+ [a-zA-Z0-9 ]+, [a-zA-Z ]+, [a-zA-Z ]+$", message = "Invalid address format. Example: 123 Main St, City, Country")
    private String address;

    @NotEmpty(message = "Phone number cannot be empty")
    @NotNull(message = "Phone number cannot be null")
    @Pattern(regexp = "^[0-9]*$", message = "Phone number must contain only digits")
    @Size(min = 10, max = 20, message = "Phone number must be between 10 and 20 digits long")
    private String phoneNumber;

    @NotEmpty(message = "Store Image url cannot be empty")
    @NotNull(message = "Store Image url cannot be null")
    @Pattern(regexp = "^https://img\\.mesa\\d+\\.pe/archivos/webpages/\\d+-[\\w-]+\\.png$", message = "Invalid store image URL format. Example: https://img.mesa123.pe/archivos/webpages/123-example.png")
    private String storeImageUrl;
}