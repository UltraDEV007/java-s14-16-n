package com.nocountry.foodlyfinds.model.service;

import com.nocountry.foodlyfinds.exception.IllegalArgumentException;
import jakarta.transaction.Transactional;

public interface QualificationService {
    @Transactional
    void createQualification(Long userId, Long storeId, Integer value) throws IllegalArgumentException;
}
