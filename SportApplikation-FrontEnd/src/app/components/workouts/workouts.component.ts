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
  exercises: Exercise[]= [new Exercise(1,"Übung 1", "Werbung", "https://fitnessprogramer.com/wp-content/uploads/2023/09/shadow-boxing-workout.gif", true, 10, 5, 30),
    new Exercise(2,"Übung 2", "Werbung", "https://fitnessprogramer.com/wp-content/uploads/2023/09/shadow-boxing-workout.gif", true, 10, 5, 30),
    new Exercise(3,"Übung 3", "Werbung", "https://fitnessprogramer.com/wp-content/uploads/2023/09/shadow-boxing-workout.gif", true, 10, 5, 30),
    new Exercise(4,"Übung 4", "Werbung", "https://fitnessprogramer.com/wp-content/uploads/2023/09/shadow-boxing-workout.gif", true, 10, 5, 30)];
  standardWorkouts: Workout[] = [new Workout(1,"Test Workout","Total tolles test Training", "Fikse Hartmann", this.exercises)];

  userWorkouts: Workout[] = [];
  selectedWorkout:Workout | null = null;

  constructor(private router:Router, private workoutService:WorkoutService, private userService:UserService ) {
  }
  ngOnInit(){
    this.workoutService.getAllStandardWorkouts().subscribe({
      next: (data)=>{
        console.log(data);
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

  ShowWorkout(workout:Workout){
    //TODO: Wieder reinpacken, sobald get Exercise da ist
    //this.selectedWorkout = workout;
    this.showWorkout = true;

  }

  getCounter(n: number): any[] {
    return Array(n);
  }
}
