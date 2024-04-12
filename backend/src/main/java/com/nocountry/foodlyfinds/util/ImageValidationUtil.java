package com.nocountry.foodlyfinds.util;

import com.nocountry.foodlyfinds.exception.InvalidImageException;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.List;

public class ImageValidationUtil {
    private static final List<String> SUPPORTED_EXTENSIONS = Arrays.asList("jpg", "jpeg", "png", "webp", "avif");

    public static void validateImageType(MultipartFile file) {
        String originalFilename = file.getOriginalFilename();
        if (originalFilename == null || !isSupportedExtension(originalFilename)) {
            throw new InvalidImageException("Unsupported file format: " + originalFilename +
                    ". Only image files (JPEG, PNG, WEBP, AVIF) are allowed.");
        }
    }

    private static boolean isSupportedExtension(String filename) {
        String extension = filename.substring(filename.lastIndexOf(".") + 1).toLowerCase();
        return SUPPORTED_EXTENSIONS.contains(extension);
    }
}
