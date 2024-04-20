package com.nocountry.foodlyfinds.exception;

import org.springframework.http.HttpStatus;

public class EnumsResourceNotFoundException extends RuntimeException{
    public EnumsResourceNotFoundException(String message) {
        super(message);
    }
}
