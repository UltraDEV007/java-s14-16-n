package com.nocountry.foodlyfinds.model.entity;

import com.nocountry.foodlyfinds.model.enums.ECompensation;
import com.nocountry.foodlyfinds.model.enums.EIssueType;
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
@Table(name = "issues")
public class IssuesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long issuesId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserTblEntity user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id")
    private StoreEntity store;

    @Enumerated(EnumType.STRING)
    private EIssueType issueType;

    @Enumerated(EnumType.STRING)
    private ECompensation compensation;
}