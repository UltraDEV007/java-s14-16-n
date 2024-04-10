package com.nocountry.foodlyfinds.model.dto.response;


import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class IssuesResponse {
    private Long issueId;
    private String storeName;
    private String issuesType;
    private String compensation;

}
