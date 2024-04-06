package com.nocountry.foodlyfinds.controller;

//import com.nocountry.backend.model.dto.request.PasswordRequest;
//import com.nocountry.backend.model.dto.request.ProfileRequest;
//import com.nocountry.backend.model.dto.response.UserResponse;
//import com.nocountry.backend.model.entity.Image;
//import com.nocountry.backend.model.entity.UserEntity;
//import com.nocountry.backend.model.repository.UserRepository;
//import com.nocountry.backend.model.service.CloudinaryService;
//import com.nocountry.backend.model.service.ImageService;
//import com.nocountry.backend.model.service.UserService;
import com.nocountry.foodlyfinds.model.dto.UserTblDTO;
import com.nocountry.foodlyfinds.model.dto.request.ProfileRequest;
import com.nocountry.foodlyfinds.model.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.Authentication;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.util.concurrent.CompletableFuture;
//import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
public class UserController {

   private final UserService userService;

   @PostMapping
   public ResponseEntity<?> saveUser(@Valid @RequestBody UserTblDTO userRequest){
        userService.save(userRequest);
        return ResponseEntity.status(HttpStatus.CREATED).build();
   }

   @PutMapping("{userId}/add-img")
   public ResponseEntity<?> addImageToUser(@Valid ProfileRequest userRequest, @PathVariable Long userId, @RequestParam MultipartFile archivo) throws IOException {
        userService.addPhoto(userRequest, userId, archivo);
        return ResponseEntity.ok().build();
   }

   @GetMapping("{userId}/uploads/img")
   public ResponseEntity<?> addImageToUser(@PathVariable Long userId){
       return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(userService.getUserPhoto(userId));
   }

    @GetMapping("{userId}")
    public ResponseEntity<?> findUserById(@PathVariable Long userId){
        return ResponseEntity.ok(userService.findById(userId));
    }

    @DeleteMapping("{userId}")
    public ResponseEntity<?> deleteUserById(@PathVariable Long userId){
        userService.deleteById(userId);
        return ResponseEntity.noContent().build();
    }

//    private final ImageService imageService;
//    private final CloudinaryService cloudinaryService;
//    private final UserRepository UR;
//
//    // traer usuario local USER
//    @GetMapping(value = "/user")
//    public ResponseEntity<UserResponse> findUser(Authentication auth) {
//        return ResponseEntity.ok().body(US.getCurrentUser(auth));
//    }
//
//    // modificar password USER
//    @PutMapping(value = "/updatepassword")
//    public ResponseEntity<?> updatePassword(@RequestBody PasswordRequest request) {
//        US.updatePassword(request);
//        return ResponseEntity.ok().body(null);
//    }
//
//    @PostMapping("/updateImage/{id}")
//    public ResponseEntity<?> updateImage(@RequestParam("image") MultipartFile imagen, @PathVariable Long id) throws IOException, InterruptedException, ExecutionException {
//        CompletableFuture<String> futureImageUrl = CompletableFuture.supplyAsync(() -> {
//            try {
//                // Cargar la imagen en Cloudinary y obtener la URL
//                Image uploadedImage = cloudinaryService.upload(imagen);
//                // Guardar la imagen en la base de datos
//                Image savedImage = imageService.save(uploadedImage);
//                return savedImage.getUrl();
//            } catch (IOException e) {
//                e.printStackTrace();
//                return null;
//            }
//        });
//
//        // Esperar hasta que se complete la carga de la imagen y obtener la URL
//        String imageUrl = futureImageUrl.get();
//
//        if (imageUrl != null) {
//            // Actualizar la URL de la imagen en la entidad de usuario
//            UserEntity usuario = UR.findById(id).orElseThrow();
//            usuario.setImageUrl(imageUrl);
//            UR.save(usuario);
//            Image img = new Image();
//            img.setId(id);
//            img.setUrl(imageUrl);
//            return ResponseEntity.ok().body(img);
//        } else {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al cargar la imagen");
//        }
//    }
//
//    @PutMapping(value = "/profileUpdate")
//    public ResponseEntity<?> profileUpdate(@RequestBody ProfileRequest request) {
//        US.profileUpdate(request);
//        return ResponseEntity.ok().body(null);
//    }

}
