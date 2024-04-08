package com.nocountry.foodlyfinds.model.service;


import com.nocountry.foodlyfinds.model.dto.UserTblDTO;



import java.util.List;

public interface UserService {
    List<UserTblDTO> findAll();


}
