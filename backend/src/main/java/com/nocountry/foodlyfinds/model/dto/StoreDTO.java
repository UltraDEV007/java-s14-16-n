package com.nocountry.foodlyfinds.model.dto;

import com.nocountry.foodlyfinds.model.entity.StoreEntity;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class StoreDTO {

    private Long storeId;
    private String name;
    private String address;
    private String phoneNumber;
    private String storeImageUrl;

    public static StoreDTO convertTo(StoreEntity entity) {
        StoreDTO dto = new StoreDTO();
        dto.setStoreId(entity.getId());
        dto.setName(entity.getName());
        dto.setAddress(entity.getAddress());
        dto.setPhoneNumber(entity.getPhoneNumber());
        dto.setStoreImageUrl(entity.getStoreImageUrl());
        return dto;
    }

    public static List<StoreDTO> convertList(List<StoreEntity> entityList) {
        return entityList.stream()
                .map(StoreDTO::convertTo)
                .collect(Collectors.toList());
    }
}
