package com.nocountry.foodlyfinds.model.repository;

import com.nocountry.foodlyfinds.model.entity.QualificationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QualificationRepository extends JpaRepository<QualificationEntity, Long> {

    @Query("SELECT q FROM QualificationEntity q WHERE q.store.storeId = ?1")
    List<QualificationEntity> findByStoreId(Long storeId);
}
