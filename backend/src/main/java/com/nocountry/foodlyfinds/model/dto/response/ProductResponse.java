package com.nocountry.foodlyfinds.model.dto.response;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductResponse {
    @NotNull(message = "Product ID is required")
    private Long productId;
    @NotNull(message = "Store ID is required")
    private Long storeId;
    @NotBlank(message = "Product name is required")
    private String name;
    @NotNull(message = "Category is required")
    private Long categoryId;
    @NotBlank(message = "Product image URL is required")
    private String productImageUrl;
    @NotBlank(message = "Ingredients are required")
    private String ingredients;
    @NotBlank(message = "Clarification is required")
    private String clarification;
    @NotNull(message = "Price is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than 0")
    @Positive(message = "Price must be greater than 0")
    private BigDecimal price;
    @NotNull(message = "Waiting time is required")
    @Min(1)
    @Positive(message = "Waiting time must be greater than 0")
    private Integer waitingTime;
}
