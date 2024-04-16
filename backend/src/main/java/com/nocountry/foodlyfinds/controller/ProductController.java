package com.nocountry.foodlyfinds.controller;

import com.nocountry.foodlyfinds.model.dto.response.ProductResponse;
import com.nocountry.foodlyfinds.model.dto.response.ProductWithIdResponse;
import com.nocountry.foodlyfinds.model.entity.ProductEntity;
import com.nocountry.foodlyfinds.model.service.impl.ProductServiceImpl;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductServiceImpl productService;
    private final ModelMapper modelMapper;

    @GetMapping(value = "/findall")
    public ResponseEntity<List<ProductResponse>> findAll() {
        return ResponseEntity.ok().body(productService.findAll());
    }

    //Buscar por id de producto
    @GetMapping(value = "/findbyid/{id}")
    public ResponseEntity<ProductEntity> findByProductId(@PathVariable Long id) {
        return ResponseEntity.ok().body(productService.findById(id));
    }

    //Buscar por id de categoria
    @GetMapping(value = "/findbycategoryid/{id}")
    public ResponseEntity<List<ProductWithIdResponse>> findByCategoryId(@PathVariable Long id) {
        return ResponseEntity.ok().body(productService.findByCategoryIdCategoryId(id));
    }

    //Buscar por nombre de producto
    @GetMapping(value = "/findbyname/{name}")
    public ResponseEntity<List<ProductResponse>> findByNameIgnoreCaseContaining(@PathVariable String name) {
        return ResponseEntity.ok().body(productService.findByNameIgnoreCaseContaining(name));
    }

    //Buscar por id de tienda
    @GetMapping(value = "/findbystore/{id}")
    public ResponseEntity<List<ProductWithIdResponse>> findByStoreId(@PathVariable Long id) {
        return ResponseEntity.ok().body(productService.findByStoreIdStoreId(id));
    }

    //Buscar por ingredientes
    @GetMapping(value = "/findbyingredient/{ingredients}")
    public ResponseEntity<List<ProductResponse>> findByIngredientsIgnoreCaseContaining(@PathVariable String ingredients) {
        return ResponseEntity.ok().body(productService.findByIngredientsIgnoreCaseContaining(ingredients));
    }

    @GetMapping(value = "/search")
    public ResponseEntity<List<ProductResponse>> searchProducts(
            @RequestParam(required = false) Long id,
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Long storeId,
            @RequestParam(required = false) String ingredients) {

        // Realizar la lógica de búsqueda aquí
        List<ProductResponse> products = productService.searchProducts(id, categoryId, name, storeId, ingredients);

        // Verificar si se encontraron productos
        if (!products.isEmpty()) {
            return ResponseEntity.ok().body(products);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}