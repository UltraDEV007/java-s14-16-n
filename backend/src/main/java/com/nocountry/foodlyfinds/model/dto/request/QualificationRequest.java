package com.nocountry.foodlyfinds.model.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class QualificationRequest {

        private Long qualificationId;
        @NotNull(message = "Value is required")
        private  Integer value;
}
