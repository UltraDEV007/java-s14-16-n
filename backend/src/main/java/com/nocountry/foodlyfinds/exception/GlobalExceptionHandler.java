package com.nocountry.foodlyfinds.exception;

import com.nocountry.foodlyfinds.model.dto.response.ApiErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handlerResourceNotFoundException(ResourceNotFoundException ex, HttpServletRequest request){

        ApiErrorResponse errorResponse = new ApiErrorResponse();
        errorResponse.setType("ResourceNotFoundException");
        errorResponse.setErrors(ex.getMessage());
        errorResponse.setUrl(request.getRequestURL().toString());
        errorResponse.setMethod(request.getMethod());
        errorResponse.setStatus(HttpStatus.NOT_FOUND.toString());
        errorResponse.setTimestamp(LocalDateTime.now());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handlerMethodArgumentNotValidException(HttpServletRequest request, BindingResult result){

        Map<String, Object> errors = new HashMap<>();
        result.getFieldErrors().forEach( error -> errors.put(error.getField(), "The field " + error.getField() + " " + error.getDefaultMessage()));

        ApiErrorResponse errorResponse = new ApiErrorResponse();
        errorResponse.setType("MethodArgumentNotValidException");
        errorResponse.setErrors(errors);
        errorResponse.setUrl(request.getRequestURL().toString());
        errorResponse.setMethod(request.getMethod());
        errorResponse.setStatus(HttpStatus.BAD_REQUEST.toString());
        errorResponse.setTimestamp(LocalDateTime.now());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<String> handleTypeMismatch(MethodArgumentTypeMismatchException ex) {
        String message = "Only numbers are allowed for the parameter: " + ex.getName() + " with value: " + ex.getValue() + ". Please, try again.";
        return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
    }
}
