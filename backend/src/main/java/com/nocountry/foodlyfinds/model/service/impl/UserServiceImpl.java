package com.nocountry.foodlyfinds.model.service.impl;

import com.nocountry.foodlyfinds.exception.ResourceNotFoundException;
import com.nocountry.foodlyfinds.model.dto.UserTblDTO;
import com.nocountry.foodlyfinds.model.dto.request.ProfileRequest;
import com.nocountry.foodlyfinds.model.entity.UserTblEntity;
import com.nocountry.foodlyfinds.model.repository.UserRepository;
import com.nocountry.foodlyfinds.model.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

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
                        .phoneNumber(userRequest.getPhoneNumber())
                .build());
    }

    @Transactional
    @Override
    public void addPhoto(ProfileRequest userRequest, Long userId, MultipartFile archivo) throws IOException {
        UserTblEntity userDB = userRepository.findById(userId)
                .orElseThrow( ()-> new ResourceNotFoundException("User not found with id " + userId));

       userDB.setUserId(userId);
       userDB.setName(userRequest.getName());
       userDB.setPhoneNumber(userRequest.getPhoneNumber());

       if(!archivo.isEmpty()){
           userDB.setPhoto(archivo.getBytes());
       }

       userRepository.save(userDB);
    }

    @Override
    public Resource getUserPhoto(Long userId) {
        UserTblEntity userDB = userRepository.findById(userId)
                .orElseThrow( ()-> new ResourceNotFoundException("User not found with id " + userId));
        if(userDB.getPhoto() == null){
            throw new ResourceNotFoundException("The user with id " + userId + " does not have an associated image.");
        }
        return new ByteArrayResource(userDB.getPhoto());
    }

//    private final UserRepository UR;
//    private final ModelMapper modelMapper;
//    private final PasswordEncoder passwordEncoder;
//
//    @Override // ADMIN
//    public List<UserDTO> findAll() {
//        List<UserEntity> usersDB = UR.findAll();
//        // mapeamos cada UserEntity a un UserDTO
//        return usersDB.stream().map(user -> modelMapper.map(user, UserDTO.class)).toList();
//    }
//
//    @Override // ADMIN
//    public UserDTO findByUsername(String username) {
//        UserEntity userDB = UR.findByUsername(username);
//        return modelMapper.map(userDB, UserDTO.class);
//    }
//
//    @Override // ADMIN
//    public UserDTO findByEmail(String email) {
//        UserEntity userDB = UR.findByEmail(email);
//        return modelMapper.map(userDB, UserDTO.class);
//    }
//
//    @Override // USER
//    public UserResponse getCurrentUser(Authentication auth) {
//        UserEntity userDB = UR.findByUsername(auth.getName());
//        return new UserResponse().builder()
//            .id(userDB.getId())
//            .email(userDB.getEmail())
//            .cellphone(userDB.getCellphone())
//            .address(userDB.getAddress())
//            .name(userDB.getName())
//            .imageUrl(userDB.getImageUrl())
//            .build();
//    }
//
//    // actualizar datos del usuario
//
//    @Override
//    @Transactional // USER
//    public void updatePassword(PasswordRequest request) {
//        UserEntity usuario = UR.findById(request.getId()).orElseThrow();
//        usuario.setPassword(passwordEncoder.encode(request.getPassword()));
//        UR.save(usuario);
//    }
//
//    // eliminación del usuario
//    @Override
//    @Transactional // ADMIN
//    public void deleteUser(@NonNull Long id) {
//        Optional<UserEntity> usuario = UR.findById(id);
//        UR.delete(usuario.get());
//    }
//
//    @Override
//    @Transactional
//    public void profileUpdate(ProfileRequest request) {
//        UserEntity usuario = UR.findById(request.getId()).orElseThrow();
//        usuario.setAddress(request.getAddress());
//        usuario.setCellphone(request.getCellphone());
//        usuario.setName(request.getName());
//        UR.save(usuario);
//    }

}
