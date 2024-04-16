package com.nocountry.foodlyfinds.model.service;

import com.nocountry.foodlyfinds.model.dto.response.ProductResponse;
import com.nocountry.foodlyfinds.model.dto.response.ProductWithIdResponse;
import com.nocountry.foodlyfinds.model.entity.ProductEntity;

import java.util.List;

public interface ProductService {
    //Buscar todos los productos
    List<ProductResponse> findAll();

    //Buscar por id de producto
    ProductEntity findById(Long id);

    //Buscar por id de categoria
    List<ProductWithIdResponse> findByCategoryIdCategoryId(Long categoryId);

    //Buscar por nombre de producto
    List<ProductResponse> findByNameIgnoreCaseContaining(String name);

    //Buscar por id de tienda
    List<ProductWithIdResponse> findByStoreIdStoreId(Long id);

    //Buscar por ingredientes
    List<ProductResponse> findByIngredientsIgnoreCaseContaining(String ingredients);

    //Buscar por id de producto, id de categoria, nombre de producto, id de tienda e ingredientes
    List<ProductResponse> searchProducts(Long id, Long categoryId, String name, Long storeId, String ingredients);
}

