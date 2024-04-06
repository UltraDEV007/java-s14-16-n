package com.nocountry.foodlyfinds.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class StoreDTO {
    @NotNull(message = "Store ID cannot be null")
    private Long storeId;

    @NotBlank(message = "Store name cannot be blank")
    private String name;

    @NotBlank(message = "Store address cannot be blank")
    private String address;

    @NotBlank(message = "Store phone number cannot be blank")
    @Size(min =10, max = 20)
    private String phoneNumber;

    private String storeImageUrl;
}
