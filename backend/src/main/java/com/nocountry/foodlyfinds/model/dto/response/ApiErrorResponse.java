package com.nocountry.foodlyfinds.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApiErrorResponse {

     private String type;
     private Object errors;
     private String url;
     private String method;
     private String status;
     private LocalDateTime timestamp;

}
