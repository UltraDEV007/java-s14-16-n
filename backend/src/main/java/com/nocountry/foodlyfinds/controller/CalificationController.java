package com.nocountry.foodlyfinds.controller;


import com.nocountry.foodlyfinds.model.dto.request.CalificationRequest;
import com.nocountry.foodlyfinds.model.dto.response.CalificationResponse;
import com.nocountry.foodlyfinds.model.entity.CalificationEntity;
import com.nocountry.foodlyfinds.model.service.CalificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/calification")
@RequiredArgsConstructor
public class CalificationController {

    @Autowired
    private CalificationService calificationService;

    @PostMapping("/user/{userId}/store/{storeId}")
    public ResponseEntity<CalificationResponse> createCalification(
            @PathVariable Long userId,
            @PathVariable Long storeId,
            @RequestBody CalificationRequest request) {
        CalificationResponse calification = calificationService.createCalification(userId, storeId, request.getValue());
        return new ResponseEntity<>(calification, HttpStatus.CREATED);
    }
}
