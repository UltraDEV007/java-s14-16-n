package com.nocountry.foodlyfinds.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDTOResponse {
    private Long orderId;
    private List<ProductResponse> products;
}
