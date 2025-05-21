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

    public int getWorkoutExerciseId() {
        return workoutExerciseId;
    }

    public void setWorkoutExerciseId(int workoutExerciseId) {
        this.workoutExerciseId = workoutExerciseId;
    }

    public Workout getWorkoutID() {
        return workoutID;
    }

    public void setWorkoutID(Workout workoutID) {
        this.workoutID = workoutID;
    }

    public Exercise getExerciseID() {
        return exerciseID;
    }

    public void setExerciseID(Exercise exerciseID) {
        this.exerciseID = exerciseID;
    }

    public Integer getSequence() {
        return sequence;
    }

    public void setSequence(Integer sequence) {
        this.sequence = sequence;
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

    public Workout getWorkout() {
        return workout;
    }

    public void setWorkout(Workout workout) {
        this.workout = workout;
    }

    public Exercise getExercise() {
        return exercise;
    }

    public void setExercise(Exercise exercise) {
        this.exercise = exercise;
    }
}
