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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int workoutExerciseId;

    @ManyToOne
    @JoinColumn(name = "workout_id")
    private Workout workoutID;

    @ManyToOne
    @JoinColumn(name = "exercise_id")
    private Exercise exerciseID;

    //private Integer sequence;
    private Integer number_of_sets;
    private Integer number_of_reps;


    @ManyToOne
    @JoinColumn(name = "workout_ID", insertable = false, updatable = false)
    private Workout workout;

    @ManyToOne
    @JoinColumn(name = "exercise_ID", insertable = false, updatable = false)
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

//    public Integer getSequence() {
//        return sequence;
//    }
//
//    public void setSequence(Integer sequence) {
//        this.sequence = sequence;
//    }

    public Integer getNumSets() {
        return number_of_sets;
    }

    public void setNumSets(Integer numSets) {
        this.number_of_sets = numSets;
    }

    public Integer getNumReps() {
        return number_of_reps;
    }

    public void setNumReps(Integer numReps) {
        this.number_of_reps = numReps;
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
