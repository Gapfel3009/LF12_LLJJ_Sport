import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Workout} from '../../../models/workout';
import {interval, Subscription} from 'rxjs';
import {WorkoutService} from '../../services/workout.service';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Exercise} from '../../../models/exercise';
import {FormsModule} from '@angular/forms';
import {FlappyBirdComponent} from '../flappybird/flappybird.component';
import {UserService} from '../../services/user.service';
import {AppUser} from '../../../models/AppUser';

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
  exercises: Exercise[] = [];
  workout: Workout | null = null;
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

  constructor(private route: ActivatedRoute,private router:Router, private workoutService:WorkoutService, private userService:UserService) {
    this.route.queryParams.subscribe(params => {
      this.workoutId = params['workoutID'];
    });

  };

  ngOnInit(){
    this.workoutService.getWorkoutById(this.workoutId).subscribe(
      {next: (workout) =>{
          this.workout = workout
          this.workoutService.getExercisesByWorkoutId(this.workoutId).subscribe({
            next: (data)=>{
              this.exercises = data.map((json:any) => Exercise.fromWorkoutExerciseJson(json))
              if(this.workout)
                this.workout.exercises = this.exercises;
              // @ts-ignore
              this.checkedSets = Array(this.workout.exercises[this.currentIndex].numSets).fill(false);
            }
          })
        }
      })
  }

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
        this.showGame = true;
        setTimeout(() => {
          // @ts-ignore
          this.checkedSets = Array(this.workout.exercises[this.currentIndex].sets).fill(false);
        }, 10);
      }else{
        this.stopTimer()
        this.showWorkoutFinished = true;
      }
    }
    if(this.checkedSets.some(value => value === false)){
      this.showGame = true
    }
  }

  get formattedTime(): string {
    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  WorkoutAbbrechen(){
    this.showAbbrechKontext = true;
  }

  MainRedirect(){
    this.router.navigate(['/Mainsite']);
  }

  FinishWorkout(){
    //TODO:
    /*let user : AppUser | null = this.userService.getCurrentUser();
    if(user){
      user.lastWorkout = new Date(Date.now());
      user.addXpTotal()
    }*/

    this.MainRedirect();
  }

  receiveShowGame(showGame:boolean){
    this.showGame = showGame;
  }
}
