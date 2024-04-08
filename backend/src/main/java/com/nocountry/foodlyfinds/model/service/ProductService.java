package com.nocountry.foodlyfinds.model.service;

import com.nocountry.foodlyfinds.model.dto.response.ProductResponse;
import com.nocountry.foodlyfinds.model.entity.ProductEntity;

import java.util.List;

public interface ProductService {
    List<ProductResponse> findAll();

    ProductEntity findById(Long id);
}
