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
          if(this.workout?.exercises)
            this.checkedSets = Array(this.workout.exercises[this.currentIndex].numSets).fill(false);
        }, 5);
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

    let user : AppUser | null = this.userService.getCurrentUser();
    if(user){
      const today = new Date();
      const lastWorkoutDate = new Date(user.lastWorkout);
      if(!(lastWorkoutDate.setHours(0,0,0,0) == today.setHours(0,0,0,0))){
        user.streak = user.streak + 1;
      }
        user.lastWorkout = new Date(Date.now());
        user.xpTotal += this.getTotalXpTotal(this.exercises);
        user.xpChest += this.getTotalXpChest(this.exercises);
        user.xpBack += this.getTotalXpBack(this.exercises);
        user.xpShoulders += this.getTotalXpShoulders(this.exercises);
        user.xpLegs += this.getTotalXpLegs(this.exercises);
        user.xpTriceps += this.getTotalXpTriceps(this.exercises);
        user.xpAbs += this.getTotalXpAbs(this.exercises);
        user.xpGlutes += this.getTotalXpGlutes(this.exercises);
        user.xpBiceps += this.getTotalXpBiceps(this.exercises);
        user.xpFlexibility += this.getTotalXpFlexibility(this.exercises);
        this.userService.updateUser(user).subscribe();
    }

    this.MainRedirect();
  }

  receiveShowGame(showGame:boolean){
    this.showGame = showGame;
  }

  getTotalXpTotal(exercises: Exercise[]): number {
    return exercises.reduce((sum, ex) => sum + ex.xpTotal, 0);
  }

  getTotalXpChest(exercises: Exercise[]): number {
    return exercises.reduce((sum, ex) => sum + ex.xpChest, 0);
  }

  getTotalXpBack(exercises: Exercise[]): number {
    return exercises.reduce((sum, ex) => sum + ex.xpBack, 0);
  }

  getTotalXpShoulders(exercises: Exercise[]): number {
    return exercises.reduce((sum, ex) => sum + ex.xpShoulders, 0);
  }

  getTotalXpLegs(exercises: Exercise[]): number {
    return exercises.reduce((sum, ex) => sum + ex.xpLegs, 0);
  }

  getTotalXpTriceps(exercises: Exercise[]): number {
    return exercises.reduce((sum, ex) => sum + ex.xpTriceps, 0);
  }

  getTotalXpAbs(exercises: Exercise[]): number {
    return exercises.reduce((sum, ex) => sum + ex.xpAbs, 0);
  }

  getTotalXpGlutes(exercises: Exercise[]): number {
    return exercises.reduce((sum, ex) => sum + ex.xpGlutes, 0);
  }

  getTotalXpBiceps(exercises: Exercise[]): number {
    return exercises.reduce((sum, ex) => sum + ex.xpBiceps, 0);
  }

  getTotalXpFlexibility(exercises: Exercise[]): number {
    return exercises.reduce((sum, ex) => sum + ex.xpFlexibility, 0);
  }
}
