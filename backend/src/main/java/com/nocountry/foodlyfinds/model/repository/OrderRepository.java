package com.nocountry.foodlyfinds.model.repository;

import com.nocountry.foodlyfinds.model.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
    @Query("SELECT o FROM OrderEntity o WHERE o.user.userId = ?1 ")
    List<OrderEntity> findOrderByUserId(Long userId);
}
