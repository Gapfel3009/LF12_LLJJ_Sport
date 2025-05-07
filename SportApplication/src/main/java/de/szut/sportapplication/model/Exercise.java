package de.szut.sportapplication.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long exerciseID;

    private String name;

    private Integer xpTotal = 0;
    private Integer xpChest = 0;
    private Integer xpBack = 0;
    private Integer xpShoulders = 0;
    private Integer xpLegs = 0;
    private Integer xpTriceps = 0;
    private Integer xpAbs = 0;
    private Integer xpGlutes = 0;
    private Integer xpBiceps = 0;
    private Integer xpFlexibility = 0;
}

