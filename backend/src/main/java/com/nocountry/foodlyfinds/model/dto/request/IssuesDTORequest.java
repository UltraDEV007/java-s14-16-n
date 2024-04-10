package com.nocountry.foodlyfinds.model.dto.request;

import com.nocountry.foodlyfinds.model.enums.EIssueType;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class IssuesDTORequest {

    @NotEmpty(message = "is required")
    private String issueType;
    @NotEmpty(message = "is required")
    private String compensation;
}
