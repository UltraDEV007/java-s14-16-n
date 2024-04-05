package com.nocountry.foodlyfinds.model.repository;


import com.nocountry.foodlyfinds.model.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findByUsername(String username);
    UserEntity findByEmail(String email);

//    @Query(value = "SELECT COALESCE(ROUND(AVG(c.calification), 1), 0) FROM calification c WHERE c.product_id = :productId", nativeQuery = true)
//    Double calificationAverage(Long productId);

}
