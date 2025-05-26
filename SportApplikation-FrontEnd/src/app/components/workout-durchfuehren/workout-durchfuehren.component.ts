import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Workout} from '../../../models/workout';
import {interval, Subscription} from 'rxjs';
import {WorkoutService} from '../../services/workout.service';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Exercise} from '../../../models/exercise';
import {FormsModule} from '@angular/forms';
import {FlappyBirdComponent} from '../flappybird/flappybird.component';

@Component({
  selector: 'app-workout-durchfuehren',
  imports: [
    NgIf,
    NgForOf,
    NgOptimizedImage,
    NgClass,
    FormsModule,
    FlappyBirdComponent,
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
  showAbbrechKontext:boolean = false;
  showGame:boolean = false;
  showWorkoutFinished:boolean = false;
  GamingTimerSecondsLeft: number = 90;
  GamingTimerEnded: boolean = false;
  GamingTimer: any;

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


  nextExercise():boolean {
    // @ts-ignore
    if(this.currentIndex < this.workout.exercises.length - 1){
      this.currentIndex++;
      return true;
    }else{
      return false;
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
    if(this.checkedSets.every(value => value === true)){
      if(this.nextExercise()){
        //this.showGame = true;
        //this.GameTimer()
        setTimeout(() => {
          // @ts-ignore
          this.checkedSets = Array(this.workout.exercises[this.currentIndex].sets).fill(false);
        }, 10);
      }else{
        this.showWorkoutFinished = true;
      }
    }
    //this.showGame = true
    //this.GameTimer()
  }

  get formattedTime(): string {
    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  GameTimer(){
    this.GamingTimerEnded = false;
    this.GamingTimerSecondsLeft = 90;

    this.GamingTimer = setInterval(() => {
      this.GamingTimerSecondsLeft--;

      if (this.GamingTimerSecondsLeft <= 0) {
        this.showGame = false;
      }
    }, 1000);
  }

  WorkoutAbbrechen(){
    this.showAbbrechKontext = true;
  }

  MainRedirect(){
    this.router.navigate(['/Mainsite']);
  }
}
