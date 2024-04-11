package com.nocountry.foodlyfinds.model.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "product")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @ToString.Exclude
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonProperty("store")
    @JoinColumn(name = "store_id")
    private StoreEntity storeId;

    @Column(nullable = false)
    private String name;

    @ToString.Exclude
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonProperty("category")
    @JoinColumn(name = "category_id")
    private CategoryEntity categoryId;

    private String productImageUrl;

    private String ingredients;

    private String clarification;

    private BigDecimal price;

    @Column(name = "waiting_time")
    private Integer waitingTimeMinutes;
}