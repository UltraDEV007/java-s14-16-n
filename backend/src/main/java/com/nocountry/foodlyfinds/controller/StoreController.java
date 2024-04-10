package com.nocountry.foodlyfinds.controller;

import com.nocountry.foodlyfinds.exception.BadRequestException;
import com.nocountry.foodlyfinds.exception.NotFoundException;
import com.nocountry.foodlyfinds.model.dto.StoreDTO;
import com.nocountry.foodlyfinds.model.entity.StoreEntity;
import com.nocountry.foodlyfinds.model.service.impl.StoreServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stores")
public class StoreController {

    private final StoreServiceImpl storeService;

    @Autowired
    public StoreController(StoreServiceImpl storeService) {
        this.storeService = storeService;
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody StoreEntity store) {
        try{
            storeService.create(store);
            return ResponseEntity.status(HttpStatus.CREATED).body("The Store was successfully created");
        }catch (BadRequestException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        try{
            StoreDTO storeDTO = storeService.getById(id);
            return ResponseEntity.status(HttpStatus.OK).body(storeDTO);
        }catch (NotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PutMapping
    public ResponseEntity<?> update(@RequestBody StoreEntity store) {
        try{
            storeService.update(store);
            return ResponseEntity.status(HttpStatus.OK).body("The store was successfully updated");
        }catch (BadRequestException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }catch (NotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try{
            storeService.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body("The store with id: " + id + " was successfully deleted");
        }catch (NotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<StoreDTO>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(storeService.findAll());
    }
}
