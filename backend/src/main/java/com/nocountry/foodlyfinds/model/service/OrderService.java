package com.nocountry.foodlyfinds.model.service;

import com.nocountry.foodlyfinds.model.dto.request.OrderDTORequest;
import com.nocountry.foodlyfinds.model.dto.response.OrderDTOResponse;

import java.util.List;

public interface OrderService {

    void save(Long userId, OrderDTORequest orderRequest);
    OrderDTOResponse findById(Long orderId);
    List<OrderDTOResponse> findByUserId(Long userId);
}
