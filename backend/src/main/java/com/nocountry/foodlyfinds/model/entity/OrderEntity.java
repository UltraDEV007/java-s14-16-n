package com.nocountry.foodlyfinds.model.entity;

import com.nocountry.foodlyfinds.model.enums.EOrder_type;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@Builder
@Table(name = "order_tbl")
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserTblEntity user;

    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ProductEntity.class, cascade = CascadeType.PERSIST)
    @JoinTable(
            name = "order_product",
            joinColumns = @JoinColumn(name = "order_id", referencedColumnName = "orderId"), inverseJoinColumns = @JoinColumn(name = "product_id", referencedColumnName = "productId"))
    private List<ProductEntity> products;

    private BigDecimal totalAmount;

    @Enumerated(EnumType.STRING)
    private EOrder_type orderType;

    @CreationTimestamp
    private Timestamp orderDate;

    public OrderEntity() {
        this.products = new ArrayList<>();
    }

    public void addProduct(ProductEntity product){
        this.products.add(product);
    }

    public void deleteProduct(ProductEntity product){
        this.products.remove(product);
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof OrderEntity o)) {
            return false;
        }

        return this.orderId != null && this.orderId.equals(o.getOrderId());
    }
}