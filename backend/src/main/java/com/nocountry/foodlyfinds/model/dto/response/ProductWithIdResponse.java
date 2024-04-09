package com.nocountry.foodlyfinds.model.dto.response;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductWithIdResponse {
    @NotNull(message = "Product ID is required")
    private Long productId;

    @NotEmpty(message = "Product name is required")
    private String name;

    @NotNull(message = "Store ID is required")
    private Long storeId;

    @NotNull(message = "Category is required")
    private Long categoryId;

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
    @Min(1)
    private Integer waitingTime;
}