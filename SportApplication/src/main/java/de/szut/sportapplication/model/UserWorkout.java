package de.szut.sportapplication.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "user_workout")
@IdClass(UserWorkoutId.class)
@Getter
@Setter
public class UserWorkout {

    @Id
    @JoinColumn(name = "userid")
    private Integer userId;

    @Id
    @JoinColumn(name = "workoutid")
    private Integer workoutId;

}
