package com.nocountry.foodlyfinds.model.service.impl;

import com.nocountry.foodlyfinds.exception.IllegalArgumentException;
import com.nocountry.foodlyfinds.model.entity.QualificationEntity;
import com.nocountry.foodlyfinds.model.entity.StoreEntity;
import com.nocountry.foodlyfinds.model.entity.UserTblEntity;
import com.nocountry.foodlyfinds.model.repository.QualificationRepository;
import com.nocountry.foodlyfinds.model.repository.StoreRepository;
import com.nocountry.foodlyfinds.model.repository.UserRepository;
import com.nocountry.foodlyfinds.model.service.QualificationService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QualificationServiceImpl implements QualificationService {

    private final QualificationRepository qualificationRepository;
    private final UserRepository userRepository;
    private final StoreRepository storeRepository;

    public QualificationServiceImpl(QualificationRepository qualificationRepository, UserRepository userRepository, StoreRepository storeRepository) {
        this.qualificationRepository = qualificationRepository;
        this.userRepository = userRepository;
        this.storeRepository = storeRepository;
    }

    @Transactional
    @Override
    public void createQualification(Long userId, Long storeId, Integer value) throws IllegalArgumentException {
        UserTblEntity user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found with id "+ userId));
        StoreEntity store = storeRepository.findById(storeId).orElseThrow(() -> new EntityNotFoundException("Store not found with id " + storeId));

        if (value < 0 || value > 1) {
            throw new IllegalArgumentException("La puntuación debe ser 0 o 1 .");
        }

        QualificationEntity qualification = new QualificationEntity();
        qualification.setUser(user);
        qualification.setStore(store);
        qualification.setValue(value);

        qualificationRepository.save(qualification);
    }

    @Override
    public Double getAverageRatingForStore(Long storeId) {
        List<QualificationEntity> qualifications = qualificationRepository.findByStoreId(storeId);
        if (qualifications.isEmpty()) {
            return 0.0; // O algún valor por defecto si no hay calificaciones
        }
        int sum = 0;
        for (QualificationEntity qualification : qualifications) {
            sum += qualification.getValue();
        }
        return (double) sum / qualifications.size();
    }

}
