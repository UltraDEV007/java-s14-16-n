package com.nocountry.foodlyfinds.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nocountry.foodlyfinds.model.entity.CategoryEntity;
import com.nocountry.foodlyfinds.model.entity.StoreEntity;
import jakarta.persistence.Column;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {
    @NotNull(message = "Product ID is required")
    private Long productId;

    @JsonProperty("store")
    @NotNull(message = "Store ID is required")
    private StoreEntity storeId;

    @NotEmpty(message = "Product name is required")
    private String name;

    @JsonProperty("category")
    @NotNull(message = "Category is required")
    private CategoryEntity categoryId;

    @NotEmpty(message = "Product image URL is required")
    private String productImageUrl;

    @NotEmpty(message = "Ingredients are required")
    private String ingredients;

    @NotEmpty(message = "Clarification is required")
    private String clarification;

    @NotNull(message = "Price is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than 0")
    private BigDecimal price;

    @NotNull(message = "Waiting time is required")
    @Min(value = 1, message = "Waiting time must be greater than 0")
    @Column(name = "waiting_time")
    private Integer waitingTimeMinutes;
}
