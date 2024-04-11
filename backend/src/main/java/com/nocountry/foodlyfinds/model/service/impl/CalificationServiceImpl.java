package com.nocountry.foodlyfinds.model.service.impl;

import com.nocountry.foodlyfinds.model.dto.response.CalificationResponse;
import com.nocountry.foodlyfinds.model.entity.CalificationEntity;
import com.nocountry.foodlyfinds.model.entity.StoreEntity;
import com.nocountry.foodlyfinds.model.entity.UserTblEntity;
import com.nocountry.foodlyfinds.model.repository.CalificationRepository;
import com.nocountry.foodlyfinds.model.repository.StoreRepository;
import com.nocountry.foodlyfinds.model.repository.UserRepository;
import com.nocountry.foodlyfinds.model.service.CalificationService;
import jakarta.persistence.EntityNotFoundException;
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

    @Override
    public CalificationResponse createCalification(Long userId, Long storeId, Integer value){
        UserTblEntity user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado"));
        StoreEntity store = storeRepository.findById(storeId).orElseThrow(() -> new EntityNotFoundException("Tienda no encontrada"));

        // Crear una nueva calificación y establecer las relaciones con el usuario y la tienda
        CalificationEntity calification = new CalificationEntity();
        calification.setUser(user);
        calification.setStore(store);
        calification.setValue(value);

        // Validar que la puntuación esté dentro del rango permitido (1-10)
        if (calification.getValue() < 1 || calification.getValue() > 10) {
            // Manejar el caso de puntuación fuera de rango, lanzar una excepción o retornar un mensaje de error apropiado
            // Por ejemplo, puedes lanzar una excepción de Validación personalizada
            throw new IllegalArgumentException("La puntuación debe estar en el rango de 1 a 10.");
        }

        // Guardar la calificación en la base de datos
        calification = calificationRepository.save(calification);

        // Convertir la entidad Calificacion a un DTO de respuesta
        CalificationResponse responseDTO = new CalificationResponse();
        responseDTO.setCalificationId(calification.getCalificationId());
        responseDTO.setUser(calification.getUser());
        responseDTO.setStore(calification.getStore());
        responseDTO.setValue(calification.getValue());

        return responseDTO;
    }

}
