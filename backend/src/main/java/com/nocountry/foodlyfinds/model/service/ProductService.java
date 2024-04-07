package com.nocountry.foodlyfinds.model.service;

import com.nocountry.foodlyfinds.model.dto.response.ProductResponse;

import java.util.List;

public interface ProductService {
    List<ProductResponse> findAll();
}
