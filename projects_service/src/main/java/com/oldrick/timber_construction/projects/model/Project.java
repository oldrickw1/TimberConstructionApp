package com.oldrick.timber_construction.projects.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Project {
    @Id
    private String id;
    private String name;
    private String description;
    private Architect architect;
//    private double latitude;
//    private double longitude;
//    private String type; // to enum
//    private String clientName; // to Client class?
//    private String status; // enum
//    private LocalDate startDate;
//    private LocalDate endDate;
//    private LocalDate actualStartDate;
//    private LocalDate actualEndDate;
//    private BigDecimal totalBudget;
//    private List<Contractor> contractors;
//    private List<SubContractor> subContractors;
//    private List<Architect> architects;




}
