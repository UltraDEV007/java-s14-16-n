package com.nocountry.foodlyfinds.model.service.impl;

import com.nocountry.foodlyfinds.exception.NotFoundException;
import com.nocountry.foodlyfinds.model.dto.StoreDTO;
import com.nocountry.foodlyfinds.model.entity.StoreEntity;
import com.nocountry.foodlyfinds.model.repository.StoreRepository;
import com.nocountry.foodlyfinds.model.service.StoreService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StoreServiceImpl implements StoreService {

    private final StoreRepository storeRepository;

    public StoreServiceImpl(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }

    @Override
    public void save(StoreEntity store) {
        storeRepository.save(store);
    }

    @Override
    public StoreEntity getById(Long id) throws NotFoundException {
        if(id <= 0){
            throw new IllegalArgumentException("The ID must be a positive number: ID " +id);
        }
        Optional<StoreEntity> optionalStore = storeRepository.findById(id);
        if(optionalStore.isEmpty()){
            throw new NotFoundException("The store with ID: " + id + "NOT FOUND");
        }else{
            return optionalStore.get();
        }
    }

    @Override
    public void deleteById(Long id) throws NotFoundException {
        if(id <= 0){
            throw new IllegalArgumentException("The ID must be a positive number: ID " +id);
        }
        Optional<StoreEntity> optionalStore = storeRepository.findById(id);
        if(optionalStore.isEmpty()){
            throw new NotFoundException("The store with ID: " + id + " NOT FOUND");
        }else{
            storeRepository.deleteById(id);
        }
    }

    @Override
    public List<StoreDTO> findAll() {
        return StoreDTO.convertList(storeRepository.findAll());
    }
}
