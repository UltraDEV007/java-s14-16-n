package com.nocountry.foodlyfinds.model.repository;

import com.nocountry.foodlyfinds.model.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {

    List<ProductEntity> findByCategoryIdCategoryId(Long categoryId);
    List<ProductEntity> findByNameIgnoreCaseContaining(String name);
    List<ProductEntity> findByStoreIdStoreId(Long id);
}