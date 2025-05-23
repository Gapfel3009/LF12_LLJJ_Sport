package de.szut.sportapplication.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class WorkoutExercise {

    @Id
    @JoinColumn(name = "workout_exercise_id", insertable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer workoutExerciseId;

    @ManyToOne
    @JoinColumn(name = "workout_id")
    private Workout workout;

    @ManyToOne
    @JoinColumn(name = "exercise_id")
    private Exercise exercise;
    @Column(name = "exercise_order")
    private Integer exerciseOrder;
    @Column(name = "number_of_sets")
    private Integer numSets;
    @Column(name = "number_of_reps")
    private Integer numReps;
    @Column(name = "weight_amount")
    private Integer weightAmount;

    public int getWorkoutExerciseId() {
        return workoutExerciseId;
    }

    public void setWorkoutExerciseId(int workoutExerciseId) {
        this.workoutExerciseId = workoutExerciseId;
    }

    public Workout getWorkoutID() {
        return workout;
    }

    public void setWorkoutID(Workout workout) {
        this.workout = workout;
    }

    public Exercise getExerciseID() {
        return exercise;
    }

    public void setExerciseID(Exercise exercise) {
        this.exercise = exercise;
    }

    public Integer getExerciseOrder() {
        return exerciseOrder;
    }

    public void setExerciseOrder(Integer exerciseOrder) {
        this.exerciseOrder = exerciseOrder;
    }

    public Integer getNumSets() {
        return numSets;
    }

    public void setNumSets(Integer numSets) {
        this.numSets = numSets;
    }

    public Integer getNumReps() {
        return numReps;
    }

    public void setNumReps(Integer numReps) {
        this.numReps = numReps;
    }

    public Integer getWeightAmount() {
        return weightAmount;
    }

    public void setWeightAmount(Integer weightAmount) {
        this.weightAmount = weightAmount;
    }
}
