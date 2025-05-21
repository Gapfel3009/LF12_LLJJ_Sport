import {Component,OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Exercise} from '../../../models/exercise';
import {ExpansionCase} from '@angular/compiler';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

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
  ExerciseList:Exercise[] = [new Exercise(1,"Push-Up","The push-up is one of the most effective bodyweight exercises for building upper body strength, endurance, and stability. It engages multiple muscle groups, including the chest, shoulders, triceps, and core. Suitable for all fitness levels, push-ups can be modified or progressed to match individual goals. It requires no equipment and is a fundamental movement used in calisthenic, strength training, sports conditioning, and rehabilitation programs.","https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif", true),
                          new Exercise(2,"Straddle Planche", "The Straddle Planche is an advanced bodyweight exercise that demonstrates extreme core strength, shoulder stability, and total body control. It involves suspending your body parallel to the ground, supported only by your hands, while your legs are spread wide apart in a straddle position. It is popular in calisthenics, gymnastics, and street workout routines, requiring months or years of consistent training to achieve.", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Straddle-Planche.gif", true),
                          new Exercise(3,"Single Arm Raise Push-up", "The Single Arm Raise Push-Up is a push-up variation in which one arm briefly leaves the ground at the top of the movement. This brief one-arm support increases load on the working side and challenges your balance and rotational control. It is often used to improve unilateral strength, coordination, and postural integrity.", "https://fitnessprogramer.com/wp-content/uploads/2022/08/Single-Arm-Raise-Push-up.gif", false),
                          new Exercise(4,"Archer Push-Up","The Archer Push-Up is a horizontal pushing exercise where one arm performs the majority of the work while the other extends outward for balance and support. It targets the same muscles as a standard push-up but increases the load on one side. This movement is frequently used in calisthenics and functional training as a stepping stone toward single-arm push-ups.","https://fitnessprogramer.com/wp-content/uploads/2022/07/Archer-Push-Up.gif", false),
                          new Exercise(5,"Chest Tap Push-up","Gibt nix","https://fitnessprogramer.com/wp-content/uploads/2022/07/Chest-Tap-Push-up.gif", false),
                          new Exercise(6,"Lean Planche","The Lean Planche is a bodyweight exercise where the body is held at a forward lean while balancing on the hands. This movement builds strength in the shoulders, core, and arms, and is often used as a precursor to the more difficult Straddle and Full Planche. By leaning your body forward while maintaining support on your hands, the Lean Planche provides a foundation to build strength and control for mastering more advanced calisthenic moves.","https://fitnessprogramer.com/wp-content/uploads/2025/04/lean-planche.png", false),];
  protected readonly Exercise = Exercise;
  protected readonly ExpansionCase = ExpansionCase;

  constructor(private route: ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe(params => {
      this.returnTo = params['returnTo'] || '/'; // Fallback
    });
  }
  ngOnInit() {
    this.FilteredExercises = this.ExerciseList
  }

  filterExercises(SearchString: string){
    const lowersearch = SearchString.toLowerCase().trim();
    this.FilteredExercises = this.ExerciseList.filter(exe =>
    exe.Name.toLowerCase().includes(lowersearch) || exe.Description.toLowerCase().includes(lowersearch));
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
    console.log(this.workout)
    moveItemInArray(this.workout, event.previousIndex, event.currentIndex);
    console.log(this.workout)
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
}


