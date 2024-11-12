package com.oldrick.timber_construction.projects.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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

    @Override
    public String toString() {
        return String.format(
                "Project Information:\n" +
                        "----------------------------\n" +
                        "ID: %s\n" +
                        "Name: %s\n" +
                        "Image: %s\n" +
                        "Continent: %s\n" +
                        "Country: %s\n" +
                        "City: %s\n" +
                        "Location: \n%s" +
                        "Proposed Year: %s\n" +
                        "Status: %s\n" +
                        "Function: %s\n" +
                        "Link: %s\n",
                id, name, image, continent, country, city, location, proposedYear, status, function, link
        );
    }

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

        @Override
        public String toString() {
            return String.format(
                    "  Address: %s\n" +
                            "  Latitude: %.6f\n" +
                            "  Longitude: %.6f\n" +
                            "  Zoom: %d\n" +
                            "  Place ID: %s\n" +
                            "  Street Number: %s\n" +
                            "  Street Name: %s\n" +
                            "  Street Name Short: %s\n" +
                            "  City: %s\n" +
                            "  State: %s\n" +
                            "  Post Code: %s\n" +
                            "  Country: %s\n" +
                            "  Country Short: %s\n",
                    address, lat, lng, zoom, placeId, streetNumber, streetName, streetNameShort, city, state, postCode, country, countryShort
            );
        }
    }
}
