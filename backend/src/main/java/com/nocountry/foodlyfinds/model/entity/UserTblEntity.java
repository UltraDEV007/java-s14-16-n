package com.nocountry.foodlyfinds.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Arrays;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
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

    private String phoneNumber;

    @Lob
//    @Column(columnDefinition = "LONGBLOB")  /// esta dando error en la base de datos por eso la elimine (Joel Fiare)
    @JsonIgnore
    private byte[] photo;

    private String userImageUrl;

}