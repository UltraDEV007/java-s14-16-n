package com.nocountry.foodlyfinds.controller;

import com.nocountry.foodlyfinds.exception.BadRequestException;
import com.nocountry.foodlyfinds.exception.NotFoundException;
import com.nocountry.foodlyfinds.model.dto.StoreDTO;
import com.nocountry.foodlyfinds.model.entity.StoreEntity;
import com.nocountry.foodlyfinds.model.service.impl.StoreServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin
@RequestMapping("api/v1/stores")
public class StoreController {

    private final StoreServiceImpl storeService;

    @Autowired
    public StoreController(StoreServiceImpl storeService) {
        this.storeService = storeService;
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody StoreEntity store) {
        storeService.save(store);
        return ResponseEntity.status(HttpStatus.CREATED).body("The Store was successfully created");
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        try {
            StoreEntity storeEntity = storeService.getById(id);
            StoreDTO storeDTO = StoreDTO.convertTo(storeEntity);
            return ResponseEntity.status(HttpStatus.OK).body(storeDTO);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try{
            storeService.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body("The store with ID: " + id + " was deleted successfully.");
        }catch (IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        catch (NotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id ,@Valid @RequestBody StoreEntity storeEntity) {
        try{
            StoreEntity store = storeService.getById(id);
            store.setName(storeEntity.getName());
            store.setStoreImageUrl(storeEntity.getStoreImageUrl());
            store.setPhoneNumber(storeEntity.getPhoneNumber());
            store.setAddress(storeEntity.getAddress());
            storeService.save(store);
            return ResponseEntity.status(HttpStatus.OK).body("The store with ID: " + id + " was successfully updated");
        }catch (IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }catch (NotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<StoreDTO>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(storeService.findAll());
    }
}
