import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Workout} from '../../../models/workout';
import {interval, Subscription} from 'rxjs';
import {WorkoutService} from '../../services/workout.service';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Exercise} from '../../../models/exercise';
import {FormsModule} from '@angular/forms';
import {GameComponent} from '../flappy-bird/flappy-bird.component';

@Component({
  selector: 'app-workout-durchfuehren',
  imports: [
    NgIf,
    NgForOf,
    NgOptimizedImage,
    NgClass,
    FormsModule,
    GameComponent

  ],
  templateUrl: './workout-durchfuehren.component.html',
  styleUrl: './workout-durchfuehren.component.css'
})
export class WorkoutDurchfuehrenComponent {
  exercises: Exercise[]= [new Exercise(1,"Übung 1", "Werbung", "https://fitnessprogramer.com/wp-content/uploads/2023/09/shadow-boxing-workout.gif", true, 10, 5, 30),
                          new Exercise(2,"Übung 2", "Werbung", "https://fitnessprogramer.com/wp-content/uploads/2023/09/shadow-boxing-workout.gif", true, 10, 5, 30),
                          new Exercise(3,"Übung 3", "Werbung", "https://fitnessprogramer.com/wp-content/uploads/2023/09/shadow-boxing-workout.gif", true, 10, 5, 30),
                          new Exercise(4,"Übung 4", "Werbung", "https://fitnessprogramer.com/wp-content/uploads/2023/09/shadow-boxing-workout.gif", true, 10, 5, 30)];
  workout: Workout= new Workout(1,"Test Workout","Total tolles test Training", "Fikse Hartmann", this.exercises);
  workoutId:number = 0;
  time:number = 0;
  workoutStarted:boolean = false;
  private timerSubscription: Subscription | null = null;
  currentIndex:number = 0;
  checkedSets:boolean[] = [];
  showGame:boolean = false;

  constructor(private route: ActivatedRoute,private router:Router, service:WorkoutService) {
    this.route.queryParams.subscribe(params => {
      this.workoutId = params['workoutID'];
    });
    //service.getWorkoutById(this.workoutId).subscribe(
    //  {next: (workout) =>{this.workout = workout}}
    //)
    // @ts-ignore
    this.checkedSets = Array(this.workout.exercises[this.currentIndex].sets).fill(false);
  };

  workoutStarten(){
    this.workoutStarted = true;
    this.startTimer()
  }

  get currentExercise(){
    // @ts-ignore
    //TODO:Bessere Lösung als ignore
    return this.workout.exercises[this.currentIndex];
  }


  nextExercise(){
    // @ts-ignore
    if(this.currentIndex < this.workout.exercises.length - 1){
      this.currentIndex++;
    }
  }
  getCounter(n: number): any[] {
    return Array(n);
  }

  startTimer() {
    if (!this.timerSubscription) {
      this.timerSubscription = interval(1000).subscribe(() => {
        this.time++;
      });
    }
  }

  stopTimer() {
    this.timerSubscription?.unsubscribe();
    this.timerSubscription = null;
  }

  CheckboxChange(){
    //this.showGame = true
    console.log(this.checkedSets);
    if(this.checkedSets.every(value => value === true)){
      this.nextExercise()
      setTimeout(() => {
        // @ts-ignore
        this.checkedSets = Array(this.workout.exercises[this.currentIndex].sets).fill(false);
      }, 10);
    }
  }

  get formattedTime(): string {
    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

}
