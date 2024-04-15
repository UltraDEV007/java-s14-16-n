package com.nocountry.foodlyfinds.model.service.impl;

import com.nocountry.foodlyfinds.exception.InvalidImageException;
import com.nocountry.foodlyfinds.exception.ResourceNotFoundException;
import com.nocountry.foodlyfinds.model.dto.UserTblDTO;
import com.nocountry.foodlyfinds.model.dto.request.ProfileRequest;
import com.nocountry.foodlyfinds.model.dto.response.UserResponse;
import com.nocountry.foodlyfinds.model.entity.UserTblEntity;
import com.nocountry.foodlyfinds.model.repository.UserRepository;
import com.nocountry.foodlyfinds.model.service.UserService;
import com.nocountry.foodlyfinds.util.ImageValidationUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.MimeType;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.filechooser.FileNameExtensionFilter;
import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    @Override
    public List<UserTblDTO> findAll() {
        return null;
    }
    @Transactional
    @Override
    public void save(UserTblDTO userRequest) {
        userRepository.save(UserTblEntity.builder()
                        .name(userRequest.getName())
                        .email(userRequest.getEmail())
                        .password(userRequest.getPassword())
                        .coords(userRequest.getCoords())
                        .phoneNumber(Long.valueOf(userRequest.getPhoneNumber()))
                .build());
    }

    @Transactional
    @Override
    public void addPhoto(ProfileRequest userRequest, Long userId, MultipartFile archivo) throws IOException {
        UserTblEntity userDB = userRepository.findById(userId)
                .orElseThrow( ()-> new ResourceNotFoundException("User not found with ID " + userId + ". The user with the provided ID does not exist in the database."));

       userDB.setUserId(userId);
       userDB.setName(userRequest.getName());
       userDB.setPhoneNumber(Long.valueOf(userRequest.getPhoneNumber()));

        if (archivo.isEmpty()) {
            throw new InvalidImageException("No file was provided. Please provide an image file (JPEG, PNG, WEBP, AVIF).");
        }
        ImageValidationUtil.validateImageType(archivo);
        userDB.setPhoto(archivo.getBytes());
        userRepository.save(userDB);
    }

    @Transactional(readOnly = true)
    @Override
    public UserResponse findById(Long userId) {
        UserTblEntity userDB = userRepository.findById(userId)
                .orElseThrow( ()-> new ResourceNotFoundException("User not found with id " + userId + " Sorry, no record found in the database."));
        byte[] photo = userDB.getPhoto();
        Integer photoHashCode = null;
        if (photo != null && photo.length > 0) {
            photoHashCode = Arrays.hashCode(photo);
        }
        return UserResponse.builder()
                .id(userDB.getUserId())
                .name(userDB.getName())
                .email(userDB.getEmail())
                .coords(userDB.getCoords())
                .phoneNumber(String.valueOf(userDB.getPhoneNumber()))
                .photo(photoHashCode != null ? photoHashCode : 0)
                .build();
    }

    @Transactional(readOnly = true)
    @Override
    public Resource getUserPhoto(Long userId) {
        UserTblEntity userDB = userRepository.findById(userId)
                .orElseThrow( ()-> new ResourceNotFoundException("User not found with ID " + userId + ". The user with the provided ID does not exist in the database."));
        if(userDB.getPhoto() == null){
            throw new InvalidImageException("The user with id " + userId + " does not have an associated image.");
        }
        return new ByteArrayResource(userDB.getPhoto());
    }

    @Override
    public void deleteById(Long userId) {
        UserTblEntity userDB = userRepository.findById(userId)
                .orElseThrow( ()-> new ResourceNotFoundException("User not found with ID " + userId + ". The user with the provided ID does not exist in the database."));
        userRepository.delete(userDB);
    }


}
