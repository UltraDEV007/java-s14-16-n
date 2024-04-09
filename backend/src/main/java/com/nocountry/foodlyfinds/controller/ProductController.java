package com.nocountry.foodlyfinds.controller;

import com.nocountry.foodlyfinds.model.dto.response.ProductResponse;
import com.nocountry.foodlyfinds.model.dto.response.ProductWithIdResponse;
import com.nocountry.foodlyfinds.model.entity.ProductEntity;
import com.nocountry.foodlyfinds.model.service.impl.ProductServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductServiceImpl productService;

    @GetMapping(value = "/findall")
    public ResponseEntity<List<ProductResponse>> findAll() {
        return ResponseEntity.ok().body(productService.findAll());
    }

    @GetMapping(value = "/findbyid/{id}")
    public ResponseEntity<ProductEntity> findByProductId(@PathVariable Long id) {
        return ResponseEntity.ok().body(productService.findById(id));
    }

    @GetMapping(value = "/findbycategoryid/{id}")
    public ResponseEntity<List<ProductWithIdResponse>> findByCategoryId(@PathVariable Long id) {
        return ResponseEntity.ok().body(productService.findByCategoryIdCategoryId(id));
    }

    @GetMapping(value = "/findbyname/{name}")
    public ResponseEntity<List<ProductResponse>> findByNameIgnoreCaseContaining(@PathVariable String name) {
        return ResponseEntity.ok().body(productService.findByNameIgnoreCaseContaining(name));
    }

    //findByStore
    @GetMapping(value = "/findbystore/{id}")
    public ResponseEntity<List<ProductWithIdResponse>> findByStoreId(@PathVariable Long id) {
        return ResponseEntity.ok().body(productService.findByStoreIdStoreId(id));
    }

    //findByIngredients
    @GetMapping(value = "/findbyingredient/{ingredients}")
    public ResponseEntity<List<ProductResponse>> findByIngredientsIgnoreCaseContaining(@PathVariable String ingredients) {
        return ResponseEntity.ok().body(productService.findByIngredientsIgnoreCaseContaining(ingredients));
    }
}