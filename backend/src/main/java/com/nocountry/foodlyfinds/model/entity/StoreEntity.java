package com.nocountry.foodlyfinds.model.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

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

    @NotBlank(message = "Name cannot be blank")
    @Pattern(regexp = "^[a-zA-Z ]+$", message = "Name must contain only letters and spaces")
    private String name;

    @NotBlank(message = "Address cannot be blank")
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Address must contain only letters, numbers, and spaces")
    private String address;

    @NotBlank(message = "Phone number cannot be blank")
    @Pattern(regexp = "^[0-9]*$", message = "Phone number must contain only digits")
    @Size(min = 10, max = 20, message = "Phone number must be between 10 and 15 digits long")
    private String phoneNumber;

    @NotBlank(message = "Store image URL cannot be blank")
    @URL(message = "Invalid URL format for store image")
    private String storeImageUrl;
}