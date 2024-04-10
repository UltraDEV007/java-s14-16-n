package com.nocountry.foodlyfinds.model.repository;

import com.nocountry.foodlyfinds.model.entity.IssuesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IssuesRepository extends JpaRepository<IssuesEntity, Long> {
    @Query("SELECT i FROM IssuesEntity i WHERE i.user.userId = ?1")
    List<IssuesEntity> findByUserId(Long userId);
}
