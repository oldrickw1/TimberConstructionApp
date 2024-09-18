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
    private String image;
    private String continent;
    private String country;
    private String city;
    private Location location;
    private String proposedYear;
    private String status;
    private String function;
    private String link;

    // Getters and Setters

    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class Location {
        private String address;
        private double lat;
        private double lng;
        private int zoom;
        private String placeId;
        private String streetNumber;
        private String streetName;
        private String streetNameShort;
        private String city;
        private String cityShort;
        private String state;
        private String stateShort;
        private String postCode;
        private String country;
        private String countryShort;


        // Getters and Setters
    }


}
