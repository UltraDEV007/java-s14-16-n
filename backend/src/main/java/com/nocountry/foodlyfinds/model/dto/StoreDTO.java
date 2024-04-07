package com.nocountry.foodlyfinds.model.dto;

import com.nocountry.foodlyfinds.model.entity.StoreEntity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class StoreDTO {
    @NotNull(message = "Store ID cannot be null")
    private Long storeId;

    @NotBlank(message = "Store name cannot be blank")
    private String name;

    @NotBlank(message = "Store address cannot be blank")
    private String address;

    @NotBlank(message = "Store phone number cannot be blank")
    @Size(min =10, max = 20)
    private String phoneNumber;

    private String storeImageUrl;

    public static StoreDTO convertTo(StoreEntity entity) {
        StoreDTO dto = new StoreDTO();
        dto.setStoreId(entity.getStoreId());
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
