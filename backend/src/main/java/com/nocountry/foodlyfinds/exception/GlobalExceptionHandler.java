package com.nocountry.foodlyfinds.exception;

import com.nocountry.foodlyfinds.model.dto.response.ApiErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.UnexpectedTypeException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingPathVariableException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handlerResourceNotFoundException(ResourceNotFoundException ex, HttpServletRequest request) {
        return createErrorResponse("ResourceNotFoundException", ex.getMessage(), request, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(InvalidImageException.class)
    public ResponseEntity<?> handlerInvalidImageException(InvalidImageException ex, HttpServletRequest request) {
        return createErrorResponse("InvalidImageException", ex.getMessage(), request, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(BabCredentialsException.class)
    public ResponseEntity<?> handlerBabCredentialsException(BabCredentialsException ex, HttpServletRequest request) {
        return createErrorResponse("BabCredentialsException", ex.getMessage(), request, HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handlerMethodArgumentNotValidException(HttpServletRequest request, BindingResult result) {

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
    public ResponseEntity<?> handlerMethodArgumentTypeMismatchException(MethodArgumentTypeMismatchException ex, HttpServletRequest request) {
        String paramName = ex.getName();
        String expectedType = Objects.requireNonNull(ex.getRequiredType()).getSimpleName();
        String errorMessage = "Invalid value for parameter '" + paramName + "'. Expected a value of type '" + expectedType + "'.";
        return createErrorResponse("MethodArgumentTypeMismatchException", errorMessage, request, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handlerGenericException(HttpServletRequest request, Exception ex) {
        return createErrorResponse("GenericException", ex.getMessage(), request, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<?> handlerMethodNotAllowedException(HttpServletRequest request, HttpRequestMethodNotSupportedException ex) {
        return createErrorResponse("HttpRequestMethodNotSupportedException", ex.getMessage(), request, HttpStatus.METHOD_NOT_ALLOWED);
    }


    @ExceptionHandler(NumberFormatException.class)
    public ResponseEntity<?> handlerNumberFormatException(HttpServletRequest request, NumberFormatException ex) {
        String inputString = ex.getMessage();
        inputString = inputString.substring(inputString.indexOf("\"") + 1, inputString.lastIndexOf("\""));
        String errorMessage = "The value provided " + inputString + " is not a valid number. Please make sure to enter a numeric value.";
        return createErrorResponse("NumberFormatException", errorMessage, request, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MissingPathVariableException.class)
    public ResponseEntity<String> handleMissingPathVariable(MissingPathVariableException ex) {
        return ResponseEntity.badRequest().body("ID in the URL cannot be empty");
    }

    public ResponseEntity<String> handleTypeMismatch(MethodArgumentTypeMismatchException ex) {
        String message = "Only numbers are allowed for the parameter: " + ex.getName() + " with value: " + ex.getValue() + ". Please, try again.";
        return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
    }

    private ResponseEntity<?> createErrorResponse(String type, String message, HttpServletRequest request, HttpStatus status) {
        ApiErrorResponse errorResponse = new ApiErrorResponse();
        errorResponse.setType(type);
        errorResponse.setErrors(message);
        errorResponse.setUrl(request.getRequestURL().toString());
        errorResponse.setMethod(request.getMethod());
        errorResponse.setStatus(status.toString());
        errorResponse.setTimestamp(LocalDateTime.now());
        return ResponseEntity.status(status).body(errorResponse);
    }
}
