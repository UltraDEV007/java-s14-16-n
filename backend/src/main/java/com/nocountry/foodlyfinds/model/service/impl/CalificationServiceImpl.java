package com.nocountry.foodlyfinds.model.service.impl;

import com.nocountry.foodlyfinds.model.entity.CalificationEntity;
import com.nocountry.foodlyfinds.model.entity.StoreEntity;
import com.nocountry.foodlyfinds.model.entity.UserTblEntity;
import com.nocountry.foodlyfinds.model.repository.CalificationRepository;
import com.nocountry.foodlyfinds.model.repository.StoreRepository;
import com.nocountry.foodlyfinds.model.repository.UserRepository;
import com.nocountry.foodlyfinds.model.service.CalificationService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class CalificationServiceImpl implements CalificationService {

    private final CalificationRepository calificationRepository;
    private final  UserRepository userRepository;
    private final StoreRepository storeRepository;
    public CalificationServiceImpl(CalificationRepository calificationRepository, UserRepository userRepository, StoreRepository storeRepository) {
        this.calificationRepository = calificationRepository;
        this.userRepository = userRepository;
        this.storeRepository = storeRepository;
    }

    @Transactional
    @Override
    public void createCalification(Long userId, Long storeId, Integer value){
        UserTblEntity user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found with id "+ userId));
        StoreEntity store = storeRepository.findById(storeId).orElseThrow(() -> new EntityNotFoundException("Store not found with id " + storeId));

        if (value < 0 || value > 1) {
            throw new IllegalArgumentException("La puntuación debe ser 0 o 1 .");
        }

        CalificationEntity calification = new CalificationEntity();
        calification.setUser(user);
        calification.setStore(store);
        calification.setValue(value);

        calificationRepository.save(calification);
    }
}
