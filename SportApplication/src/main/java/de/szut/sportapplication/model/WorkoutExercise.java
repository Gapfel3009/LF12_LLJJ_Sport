package de.szut.sportapplication.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    @JoinColumn(name = "workout_id")
    private Workout workout;

    @Transient
    private Integer workoutId;

    @ManyToOne
    @JoinColumn(name = "exercise_id")
    private Exercise exercise;

    public Exercise getExercise() {
        return exercise;
    }

    public void setExercise(Exercise exercise) {
        this.exercise = exercise;
    }

    @Transient
    private Integer exerciseId;

    @Column(name = "exercise_order")
    private Integer exerciseOrder;

    @Column(name = "number_of_sets")
    private Integer numSets;

    @Column(name = "number_of_reps")
    private Integer numReps;

    @Column(name = "weight_amount")
    private Integer weightAmount;



    public void setWorkoutExerciseId(Integer workoutExerciseId) {
        this.workoutExerciseId = workoutExerciseId;
    }

    public Integer getWorkoutId() {
       return (workout != null) ? workout.getWorkoutId() : workoutId;
    }

    public void setWorkoutId(Integer workoutId) {
        this.workoutId = workoutId;
        if (workoutId != null) {
            this.workout = new Workout();
            this.workout.setWorkoutId(workoutId);
        }
    }

    public Integer getExerciseId() {
      return (exercise != null) ? exercise.getExerciseID() : exerciseId;
    }

    public void setExerciseId(Integer exerciseId) {
        this.exerciseId = exerciseId;
        if (exerciseId != null) {
            this.exercise = new Exercise();
            this.exercise.setExerciseID(exerciseId);
        }
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
