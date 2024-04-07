package com.nocountry.foodlyfinds.model.service.impl;

import com.nocountry.foodlyfinds.exception.BadRequestException;
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
    public void create(StoreEntity store) throws BadRequestException {
        if(isValid(store)){
            storeRepository.save(store);
        }
    }

    @Override
    public StoreDTO getById(Long id) throws NotFoundException {

        Optional<StoreEntity> optionalStore = storeRepository.findById(id);

        if(optionalStore.isEmpty()){
            throw new NotFoundException("The store with id: " + id + "does not exist");
        }else{
            return StoreDTO.convertTo(optionalStore.get());
        }
    }

    @Override
    public void update(StoreEntity store) throws BadRequestException, NotFoundException {
        Long storeId = store.getStoreId();

        Optional<StoreEntity> optionalStore = storeRepository.findById(storeId);

        if(optionalStore.isEmpty()){
            throw new NotFoundException("The store with id: " + storeId + "does not exist");
        }

        if(isValid(store)){
            storeRepository.save(store);
        }
    }

    @Override
    public void deleteById(Long id) throws NotFoundException {
        Optional<StoreEntity> optionalStore = storeRepository.findById(id);
        if(optionalStore.isEmpty()){
            throw new NotFoundException("The store with: " + id + " does not exist");
        }else{
            storeRepository.deleteById(id);
        }
    }

    @Override
    public List<StoreDTO> findAll() {
        return StoreDTO.convertList(storeRepository.findAll());
    }

    private boolean isValid(StoreEntity store){
        if(store.getName()==null){
            throw new BadRequestException("Store name cannot be null.");
        }
        if(store.getAddress()==null){
            throw new BadRequestException("Store address cannot be null.");
        }

        String phoneNumber = store.getPhoneNumber();

        if(phoneNumber == null ){
            throw new BadRequestException("Store phoneNumber cannot be null.");
        }
        if(phoneNumber.length() < 10 || phoneNumber.length() > 20){
            throw new BadRequestException("The store phoneNumber must be between 10 and 20 characters long.");
        }
        return true;
    }
}