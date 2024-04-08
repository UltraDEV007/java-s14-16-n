package com.nocountry.foodlyfinds.model.dto;

import com.nocountry.foodlyfinds.model.entity.CategoryEntity;
import com.nocountry.foodlyfinds.model.entity.StoreEntity;
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
    @NotNull(message = "Store ID is required")
    private StoreEntity storeId;
    @NotBlank(message = "Product name is required")
    private String name;
    @NotNull(message = "Category is required")
    private CategoryEntity categoryId;
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
