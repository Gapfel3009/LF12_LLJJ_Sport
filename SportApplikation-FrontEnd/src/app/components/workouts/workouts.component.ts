import {Component, OnInit} from '@angular/core';
import {Workout} from '../../../models/workout';
import {Exercise} from '../../../models/exercise';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {WorkoutService} from '../../services/workout.service';
import {Observable} from 'rxjs';

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

  public workouts: any =  [];
  selectedWorkout: Workout = new Workout(1,"Test Workout","Total tolles test Training", "Fikse Hartmann", this.exercises);

  constructor(private route:Router, private service:WorkoutService) {
  }
  ngOnInit(){
    this.service.getAllWorkouts().subscribe(
      {next: (data)=>{this.workouts = data}}
    );
  }

  WorkoutErstellenRedirect(){
    this.route.navigate(['/Workout-erstellen'],{
      queryParams: {returnTo: this.route.url}
    });
  }
  WorkoutDurchfuehrenRedirect(workout:Workout){
    this.route.navigate(['/Workout'],{
      queryParams: {workoutID: workout.workoutId}
    });
  }

  ShowWorkout(workout:Workout){
    //this.selectedWorkout = workout;
    this.showWorkout = true;
    console.log(this.selectedWorkout);
  }

  getCounter(n: number): any[] {
    return Array(n);
  }
}
