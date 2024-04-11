package com.nocountry.foodlyfinds.controller;

import com.nocountry.foodlyfinds.model.dto.UserTblDTO;
import com.nocountry.foodlyfinds.model.dto.request.ProfileRequest;
import com.nocountry.foodlyfinds.model.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterStyle;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
public class UserController {

   private final UserService userService;
   @Operation(summary = "save user")
   @PostMapping
   public ResponseEntity<?> saveUser(@Valid @RequestBody UserTblDTO userRequest){
        userService.save(userRequest);
        return ResponseEntity.status(HttpStatus.CREATED).build();
   }

   @Operation(summary = "add image")
   @PutMapping(value = "{userId}/add-img", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
   public ResponseEntity<?> addImageToUser(@Valid ProfileRequest userRequest,
                                           @PathVariable Long userId,
                                           @RequestParam MultipartFile archivo) throws IOException {
        userService.addPhoto(userRequest, userId, archivo);
        return ResponseEntity.ok().build();
   }
   @Operation(summary = "get image")
   @GetMapping("{userId}/uploads/img")
   public ResponseEntity<?> addImageToUser(@PathVariable Long userId){
       return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(userService.getUserPhoto(userId));
   }

    @Operation(summary = "get user")
    @GetMapping("{userId}")
    public ResponseEntity<?> findUserById(@PathVariable Long userId){
        return ResponseEntity.ok(userService.findById(userId));
    }
    @Operation(summary = "delete user")
    @DeleteMapping("{userId}")
    public ResponseEntity<?> deleteUserById(@PathVariable Long userId){
        userService.deleteById(userId);
        return ResponseEntity.noContent().build();
    }

}
