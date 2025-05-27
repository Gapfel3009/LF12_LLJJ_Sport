package de.szut.sportapplication.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Table(name = "workout")
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Workout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "workout_id")
    private Integer workoutID;

    private String title;

    @ManyToOne
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JsonIgnore
    @JoinColumn(name = "userid")
    private AppUser userid;

    @JoinColumn(name = "userid")
    @Transient
    private Integer userID;

    private String description;

   // @OneToMany(mappedBy = "workout", cascade = CascadeType.ALL, orphanRemoval = true)
    //private List<WorkoutExercise> workoutExercises = new ArrayList<>();

    public Integer getWorkoutId() {
        return workoutID;
    }

    public void setWorkoutId(Integer workoutID) {
        this.workoutID = workoutID;
    }

    public Integer getUserID() {
        return  (userid != null) ? userid.getUserID() : null;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
        if (userID != null){
            this.userid = new AppUser();
            this.userid.setUserID(userID);
        }
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public AppUser getUserid() {
        return userid;
    }

    public void setUserid(AppUser userid) {
        this.userid = userid;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
