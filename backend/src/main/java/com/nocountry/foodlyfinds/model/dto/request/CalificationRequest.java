package com.nocountry.foodlyfinds.model.dto.request;

import com.nocountry.foodlyfinds.model.entity.StoreEntity;
import com.nocountry.foodlyfinds.model.entity.UserTblEntity;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CalificationRequest {

    private Long calificationId;
    @NotNull(message = "User is required")
    private UserTblEntity user;
    @NotNull(message = "Store is required")
    private StoreEntity store;
    @NotNull(message = "Value is required")
    private  Integer value;

}
