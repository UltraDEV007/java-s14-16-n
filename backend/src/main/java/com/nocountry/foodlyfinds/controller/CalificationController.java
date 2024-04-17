//package com.nocountry.foodlyfinds.controller;
//
//
//import com.nocountry.foodlyfinds.model.dto.request.CalificationRequest;
//import com.nocountry.foodlyfinds.model.dto.response.CalificationResponse;
//import com.nocountry.foodlyfinds.model.entity.CalificationEntity;
//import com.nocountry.foodlyfinds.model.entity.StoreEntity;
//import com.nocountry.foodlyfinds.model.entity.UserTblEntity;
//import com.nocountry.foodlyfinds.model.service.CalificationService;
//import jakarta.validation.Valid;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.HttpStatusCode;
//import org.springframework.http.ProblemDetail;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.ErrorResponse;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("api/v1/calification")
//@RequiredArgsConstructor
//public class CalificationController {
//
//    @Autowired
//    private CalificationService calificationService;
//    @PostMapping("/user/{userId}/store/{storeId}")
//    public ResponseEntity<?> createCalification(
//            @PathVariable Long userId,
//            @PathVariable Long storeId,
//            @Valid @RequestBody Integer value) {
//        calificationService.createCalification(userId, storeId, value);
//        return ResponseEntity.status(HttpStatus.CREATED).build();
//    }
//
//}
