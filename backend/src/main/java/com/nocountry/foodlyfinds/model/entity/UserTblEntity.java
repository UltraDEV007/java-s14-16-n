package com.nocountry.foodlyfinds.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.ArrayList;
import java.util.List;


@Entity
@Data
@AllArgsConstructor
@Builder
@Table(name = "user_tbl")
public class UserTblEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String name;

    private String email;

    private String password;

    private String coords;

    @NotNull(message = "is required, must be between 10 and 15 digits")
    @Digits(integer = 15, fraction = 0, message = "must be a numeric value with up to 15 digits")
    private Long phoneNumber;

    @Lob
    @Column(columnDefinition = "LONGBLOB")  /// esta dando error en la base de datos por eso la elimine (Joel Fiare)
    @JsonIgnore
    private byte[] photo;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderEntity> orders;

    public UserTblEntity() {
        this.orders = new ArrayList<>();
    }

    public void addOrder(OrderEntity order){
        this.orders.add(order);
        order.setUser(this);
    }

    public void removeOrder(OrderEntity order){
        this.orders.remove(order);
        order.setUser(null);
    }

}