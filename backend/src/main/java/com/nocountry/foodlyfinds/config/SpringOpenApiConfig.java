package com.nocountry.foodlyfinds.config;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringOpenApiConfig {

    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
                .group("demo-app-foodly")
                .pathsToMatch("v1", "/api/v1/user/**" , "/api/v1/issues/**", "api/v1/order", "api/v1/product", "api/v1/stores")
                .packagesToScan("com.nocountry.foodlyfinds.controller")
                .build();
    }

    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("Demo FoodLy")
                        .description("App Food")
                        .version("v1")
                        .license(new License().name("FoodLyFinds 1.0").url("https://github.com/No-Country/s14-16-n-java")))
                .externalDocs(new ExternalDocumentation()
                        .description("API Documentación App FoodLy")
                        .url("Hola"));
    }

}
