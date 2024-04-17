package com.nocountry.foodlyfinds.model.repository;

import com.nocountry.foodlyfinds.model.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {

    @Query("SELECT p FROM ProductEntity p JOIN FETCH p.categoryId JOIN FETCH p.storeId")
    List<ProductEntity> findAll();

    List<ProductEntity> findByCategoryIdCategoryId(Long categoryId);
    List<ProductEntity> findByNameIgnoreCaseContaining(String name);
    List<ProductEntity> findByStoreIdStoreId(Long id);
    List<ProductEntity> findByIngredientsIgnoreCaseContaining(String replace);

    @Query("SELECT p FROM ProductEntity p WHERE p.productId IN :ids")
    List<ProductEntity> findAllByIdIn(List<Long> ids);

    @Query("SELECT p FROM ProductEntity p " +
            "WHERE (:id IS NULL OR p.productId = :id) " +
            "AND (:categoryId IS NULL OR p.categoryId.categoryId = :categoryId) " +
            "AND (:name IS NULL OR LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%'))) " +
            "AND (:storeId IS NULL OR p.storeId.storeId = :storeId) " +
            "AND (:ingredients IS NULL OR LOWER(p.ingredients) LIKE LOWER(CONCAT('%', :ingredients, '%')))")
    List<ProductEntity> searchProducts(@Param("id") Long id,
                                       @Param("categoryId") Long categoryId,
                                       @Param("name") String name,
                                       @Param("storeId") Long storeId,
                                       @Param("ingredients") String ingredients);
}