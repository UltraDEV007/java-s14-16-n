package com.nocountry.foodlyfinds.model.service;


import com.nocountry.foodlyfinds.model.dto.UserTblDTO;
import com.nocountry.foodlyfinds.model.dto.request.ProfileRequest;
import com.nocountry.foodlyfinds.model.dto.response.UserResponse;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.List;

public interface UserService {
    List<UserTblDTO> findAll();

    void save(UserTblDTO userRequest);
    void addPhoto(ProfileRequest userRequest, Long userId, MultipartFile archivo) throws IOException;
    UserResponse findById(Long userId);
    Resource getUserPhoto(Long userId);
    void deleteById(Long userId);
}
