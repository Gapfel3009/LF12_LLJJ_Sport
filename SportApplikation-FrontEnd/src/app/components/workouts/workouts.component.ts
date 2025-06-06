import {Component, OnInit} from '@angular/core';
import {Workout} from '../../../models/workout';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {WorkoutService} from '../../services/workout.service';
import {UserService} from '../../services/user.service';
import {Exercise} from '../../../models/exercise';

@Component({
  selector: 'app-workouts',
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.css'
})
export class WorkoutsComponent implements OnInit {
  showWorkout: boolean = false;
  deletePossible: boolean = false;
  confirmDelete: boolean = false;
  standardWorkouts: Workout[] = [];
  exercises:Exercise[] = [];
  userWorkouts: Workout[] = [];
  selectedWorkout:Workout | null = null;

  constructor(private router:Router, private workoutService:WorkoutService, private userService:UserService ) {}
  ngOnInit(){
    this.workoutService.getAllStandardWorkouts().subscribe({
      next: (data)=>{
        this.standardWorkouts = data
      }
    });
    this.workoutService.getAllUserWorkouts(this.userService.getUserId()).subscribe({
      next: (data)=>{
        this.userWorkouts = data
      }
    });
  }

  WorkoutErstellenRedirect(){
    this.router.navigate(['/Workout-erstellen'],{
      queryParams: {returnTo: this.router.url}
    });
  }
  WorkoutDurchfuehrenRedirect(workout:Workout | null){
    if(workout)
    this.router.navigate(['/Workout'],{
      queryParams: {workoutID: workout.workoutId}
    });
  }

  ShowWorkout(workout:Workout, deletePossible:boolean){
    if(workout.workoutId)
    this.workoutService.getExercisesByWorkoutId(workout.workoutId).subscribe({
      next: (data)=>{
        this.exercises = data.map((json:any) => Exercise.fromWorkoutExerciseJson(json))
        workout.exercises = this.exercises
        this.selectedWorkout = workout;
        this.showWorkout = true;
        this.deletePossible = deletePossible;
      }
    })


  }

  getCounter(n: number): any[] {
    return Array(n);
  }

  deleteWorkout(){
    if(this.selectedWorkout && this.selectedWorkout.workoutId)
      this.workoutService.deleteWorkoutById(this.selectedWorkout.workoutId).subscribe();
    this.confirmDelete = false;
    this.showWorkout = false;
  }
}
