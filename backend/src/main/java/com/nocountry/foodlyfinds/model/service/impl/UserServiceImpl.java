package com.nocountry.foodlyfinds.model.service.impl;

import com.nocountry.foodlyfinds.model.dto.UserDTO;
import com.nocountry.foodlyfinds.model.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    @Override
    public List<UserDTO> findAll() {
        return null;
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
