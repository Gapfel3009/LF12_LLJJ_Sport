package de.szut.sportapplication.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
//@IdClass(WorkoutExerciseId.class)
public class WorkoutExercise {
    @Id
    @JoinColumn(name = "workout_exercise_id", insertable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int workoutExerciseId;

    @ManyToOne
    private Workout workoutID;

    @ManyToOne
    private Exercise exerciseID;

    private Integer sequence;
    private Integer numSets;
    private Integer numReps;


    @ManyToOne
    @JoinColumn(name = "workoutID", insertable = false, updatable = false)
    private Workout workout;

    @ManyToOne
    @JoinColumn(name = "exerciseID", insertable = false, updatable = false)
    private Exercise exercise;
}
