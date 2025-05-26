package de.szut.sportapplication.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exercise_id")
    private Integer exerciseID;

    private String name;
    private String description;
    //TODO:gif und has weight noch hinzufügen/sowie spaltenname -- funktioniert in postman aber bis jetzt auch so
    // create und update?
    @Column(name = "has_weights")
    private boolean hasWeights;
    private String gifLink;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isHasWeight() {
        return hasWeights;
    }

    public void setHasWeight(boolean hasWeight) {
        this.hasWeights = hasWeight;
    }

    public String getGifLink() {
        return gifLink;
    }

    public void setGifLink(String gifLink) {
        this.gifLink = gifLink;
    }

   // @OneToMany(mappedBy = "exercise", cascade = CascadeType.ALL, orphanRemoval = true)
   // private List<WorkoutExercise> workoutExercises = new ArrayList<>();

    public Integer getExerciseID() {return exerciseID;}

    public void setExerciseID (Integer exerciseID) {this.exerciseID = exerciseID;}

    public String getName() {
        return name;
    }
    public void setName(String name) {this.name = name;}
    public Integer getXpTotal() {return xpTotal;}
    public void setXpTotal(Integer xpTotal) {this.xpTotal = xpTotal;}
    public Integer getXpChest() {return xpChest;}

    public void setXpChest(Integer xpChest) {
        this.xpChest = xpChest;
    }
    public Integer getXpBack() {return xpBack;}
    public void setXpBack(Integer xpBack) {this.xpBack = xpBack;}
    public Integer getXpShoulders() {return xpShoulders;}
    public void setXpShoulders(Integer xpShoulders) {this.xpShoulders = xpShoulders;}
    public Integer getXpLegs() {return xpLegs;}
    public void setXpLegs(Integer xpLegs) {this.xpLegs = xpLegs;}
    public Integer getXpTriceps() {return xpTriceps;}
    public void setXpTriceps(Integer xpTriceps) {this.xpTriceps = xpTriceps;}
    public Integer getXpAbs() {return xpAbs;}

    public void setXpAbs(Integer xpAbs) {
        this.xpAbs = xpAbs;
    }
    public Integer getXpGlutes() {return xpGlutes;}
    public void setXpGlutes(Integer xpGlutes) {this.xpGlutes = xpGlutes;}
    public Integer getXpBiceps() {return xpBiceps;}
    public void setXpBiceps(Integer xpBiceps) {this.xpBiceps = xpBiceps;}
    public Integer getXpFlexibility() {return xpFlexibility;}
    public void setXpFlexibility(Integer xpFlexibility) {this.xpFlexibility = xpFlexibility;}

}

