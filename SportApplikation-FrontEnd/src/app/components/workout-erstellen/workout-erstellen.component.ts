import {Component,OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Exercise} from '../../../models/exercise';
import {ExpansionCase} from '@angular/compiler';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {WorkoutService} from '../../services/workout.service';
import {Workout} from '../../../models/workout';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-workout-erstellen',
  imports: [
    NgOptimizedImage,
    NgIf,
    NgForOf,
    DragDropModule,
    FormsModule
  ],
  templateUrl: './workout-erstellen.component.html',
  styleUrl: './workout-erstellen.component.css'
})
export class WorkoutErstellenComponent implements OnInit {
  FilteredExercises: Exercise[] = [];
  searchText: string= "";
  ExerciseOverlay:boolean = false;
  addToWorkout:boolean = false;
  showConfirmation:boolean = false;
  selectedExercise:Exercise = new Exercise();
  selectedExerciseID:number | null = null;
  workout:Exercise[] = [];
  wasdragged:boolean = false;
  returnTo: string = '/Mainsite';
  ExerciseList:Exercise[] = [];
  protected readonly Exercise = Exercise;
  protected readonly ExpansionCase = ExpansionCase;

  constructor(private route: ActivatedRoute,private router:Router, private workoutService:WorkoutService, private userService:UserService) {
    this.route.queryParams.subscribe(params => {
      this.returnTo = params['returnTo'] || '/'; // Fallback
    });
  }
  ngOnInit() {
    this.workoutService.getAllExercises().subscribe({
      next: (data) =>{
        this.ExerciseList = data.map((json:any) => Exercise.fromJson(json));
        this.FilteredExercises = this.ExerciseList
      }
    });
  }

  filterExercises(SearchString: string){
    const lowersearch = SearchString.toLowerCase().trim();
    this.FilteredExercises = this.ExerciseList.filter(exe =>
    exe.name.toLowerCase().includes(lowersearch) || exe.description.toLowerCase().includes(lowersearch));
  }

  openOverlay(selectedExercise:Exercise, addToWorkout:boolean, index:number | null = null):void{
    if(this.wasdragged){
      return;
    }
    //Legt eine Kopie des Opbjektes in selectedExercise, damit das Originalobjekt nicht verändert wird
    this.selectedExercise = {...selectedExercise};
    this.addToWorkout = addToWorkout;
    if(index != null){
      this.selectedExerciseID = index;
    }
    this.ExerciseOverlay = true;
  }

  addExerciseToWorkout(exercise:Exercise):void{
    this.ExerciseOverlay = false;
    this.workout.push(exercise);
  }

  saveExerciseToWorkout(exercise:Exercise):void{
    if(this.selectedExerciseID != null){
      this.workout[this.selectedExerciseID] = exercise;
    }
    this.selectedExerciseID = null;
    this.ExerciseOverlay = false;
  }

  removeExerciseFromWorkout(index:number):void{
    this.workout.splice(index, 1);
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.workout, event.previousIndex, event.currentIndex);
  }

  CancelButton(workoutTitle:string, workoutDescription: string):void{
    if(this.workout.length == 0 && workoutTitle == "" && workoutDescription == ""){
      this.CancelButtonRedirect()
    }else{
      this.showConfirmation = true;
    }
  }

  CancelButtonRedirect(){
    this.router.navigateByUrl(this.returnTo);
  }

  SaveButton(workoutTitle:string, workoutDescription:string){
    const workout:Workout = new Workout(workoutTitle,workoutDescription,this.userService.getUserId())
    this.workoutService.createWokrout(workout).subscribe((workoutID) =>{
      workout.workoutId = workoutID;
      console.log(workout);
    });
  }
}


