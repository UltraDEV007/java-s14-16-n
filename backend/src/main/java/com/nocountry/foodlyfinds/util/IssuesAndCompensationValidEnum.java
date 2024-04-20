package com.nocountry.foodlyfinds.util;

import com.nocountry.foodlyfinds.exception.EnumsResourceNotFoundException;

public class IssuesAndCompensationValidEnum {
    public static String issuesValid(String issues){
        // Normalizar y validar el tipo de problema
        String normalizedIssues = issues.trim().toUpperCase();

        // Verificar si el tipo de problema es uno de los valores esperados
        if (normalizedIssues.equals("WAITING_TIME") ||
                normalizedIssues.equals("INCORRECT_ORDER") ||
                normalizedIssues.equals("FOOD_QUALITY")) {
            return normalizedIssues; // Devuelve el tipo de problema normalizado en mayúsculas
        } else {
            // Si el tipo de problema no es válido, arrojar una excepción
            throw new IllegalArgumentException("Invalid issue type: " + issues);
        }
    }

    public static String compensationValid(String compensation){
        if(compensation.equalsIgnoreCase("REFUND") ||
                compensation.equalsIgnoreCase("DISCOUNT") ||
                compensation.equalsIgnoreCase("REPLACE")){
            return compensation.toLowerCase();
        }
        else {
            throw new EnumsResourceNotFoundException("Invalid compensation");
        }
    }
}
