package com.nocountry.foodlyfinds.model.entity;

import com.nocountry.foodlyfinds.model.enums.EOrder_type;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;
import java.util.Objects;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "order")
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserTblEntity user;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "product_id")
//    private ProductEntity product;

//    @ManyToMany(fetch = FetchType.EAGER, targetEntity = Product.class, cascade = CascadeType.PERSIST)
//    @JoinTable(name = "order_product", joinColumns = @JoinColumn(name = "order_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "product_id", referencedColumnName = "id"))
//    private List<Product> product;

    private BigDecimal totalAmount;

    @Enumerated(EnumType.STRING)
    private EOrder_type orderType;

    private Timestamp orderDate;
}