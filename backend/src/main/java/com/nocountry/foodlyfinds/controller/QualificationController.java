package com.nocountry.foodlyfinds.controller;


import com.nocountry.foodlyfinds.exception.IllegalArgumentException;
import com.nocountry.foodlyfinds.model.service.QualificationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/qualification")
@RequiredArgsConstructor
public class QualificationController {
    @Autowired
    private QualificationService qualificationService;

    @PostMapping("/user/{userId}/store/{storeId}")
    public ResponseEntity<?> createQualification(
            @PathVariable Long userId,
            @PathVariable Long storeId,
            @Valid @RequestBody Integer value) throws IllegalArgumentException {
        qualificationService.createQualification(userId, storeId, value);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/store/{storeId}/average")
    public ResponseEntity<Double> getAverageRatingForStore(@PathVariable Long storeId) {
        Double averageRating = qualificationService.getAverageRatingForStore(storeId);
        return ResponseEntity.ok(averageRating);
    }

}
