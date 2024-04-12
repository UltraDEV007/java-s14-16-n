package com.nocountry.foodlyfinds.model.service.impl;

import com.nocountry.foodlyfinds.exception.ResourceNotFoundException;
import com.nocountry.foodlyfinds.model.dto.response.ProductResponse;
import com.nocountry.foodlyfinds.model.dto.response.ProductWithIdResponse;
import com.nocountry.foodlyfinds.model.entity.ProductEntity;
import com.nocountry.foodlyfinds.model.repository.ProductRepository;
import com.nocountry.foodlyfinds.model.service.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final ModelMapper modelMapper;

    public ProductServiceImpl(ProductRepository productRepository, ModelMapper modelMapper) {
        this.productRepository = productRepository;
        this.modelMapper = modelMapper;
    }

    //Buscar todos los productos
    @Override
    public List<ProductResponse> findAll() {
        return productRepository.findAll().stream().map(product -> modelMapper.map(product, ProductResponse.class)).toList();
    }

    //Buscar por id de producto
    @Override
    public ProductEntity findById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The product with ID " + id + " was not found or the ID is invalid. Please try again."));
    }

    //Buscar por id de categoria
    @Override
    public List<ProductWithIdResponse> findByCategoryIdCategoryId(Long categoryId) {
        List<ProductEntity> products = productRepository.findByCategoryIdCategoryId(categoryId);
        if (products.isEmpty()) {
            throw new ResourceNotFoundException("Not products found for the category with ID " + categoryId + " or the ID is invalid. Please try again.");
        }
        return products.stream()
                .map(product -> modelMapper.map(product, ProductWithIdResponse.class))
                .toList();
    }

    //Buscar por nombre de producto
    @Override
    public List<ProductResponse> findByNameIgnoreCaseContaining(String name) {
        return productRepository.findByNameIgnoreCaseContaining(name.replace("%20", " ")).stream().map(product -> modelMapper.map(product, ProductResponse.class)).toList();
    }

    //Buscar por id de tienda
    @Override
    public List<ProductWithIdResponse> findByStoreIdStoreId(Long id) {
        return productRepository.findByStoreIdStoreId(id).stream().map(product -> modelMapper.map(product, ProductWithIdResponse.class)).toList();
    }

    //Buscar por ingredientes
    @Override
    public List<ProductResponse> findByIngredientsIgnoreCaseContaining(String ingredients) {
        return productRepository.findByIngredientsIgnoreCaseContaining(ingredients.replace("%20", " ")).stream().map(product -> modelMapper.map(product, ProductResponse.class)).toList();
    }
}