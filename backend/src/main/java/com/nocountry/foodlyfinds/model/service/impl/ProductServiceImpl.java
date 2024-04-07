package com.nocountry.foodlyfinds.model.service.impl;

import com.nocountry.foodlyfinds.model.dto.response.ProductResponse;
import com.nocountry.foodlyfinds.model.entity.ProductEntity;
import com.nocountry.foodlyfinds.model.repository.ProductRepository;
import com.nocountry.foodlyfinds.model.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    @Override
    public List<ProductResponse> findAll() {
        List<ProductEntity> productsDB = productRepository.findAll();
        List<ProductResponse> productResponses = new ArrayList<>();

        for (ProductEntity productEntity : productsDB) {
            ProductResponse productResponse = new ProductResponse();

            productResponse.setProductId(productEntity.getProductId());
            productResponse.setClarification(productEntity.getClarification());
            productResponse.setIngredients(productEntity.getIngredients());
            productResponse.setName(productEntity.getName());
            productResponse.setPrice(productEntity.getPrice());
            productResponse.setProductImageUrl(productEntity.getProductImageUrl());
            productResponse.setWaitingTime(productEntity.getWaitingTime());
            productResponse.setStoreId(productEntity.getStoreId().getStoreId());
            productResponse.setCategoryId(productEntity.getCategoryId().getCategoryId());

            productResponses.add(productResponse);
        }

        return productResponses;
    }
}
