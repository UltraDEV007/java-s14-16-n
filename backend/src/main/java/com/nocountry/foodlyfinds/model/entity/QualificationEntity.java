package com.nocountry.foodlyfinds.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "qualification_tbl")
public class QualificationEntity {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long qualificationId;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "user_id")
        private UserTblEntity user;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "store_id")
        private StoreEntity store;
        @Column(name = "value_qualification")
        private Integer value;

}
