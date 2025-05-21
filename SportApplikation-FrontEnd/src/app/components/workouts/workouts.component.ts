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
  testExercise:Exercise[] = [new Exercise(1,"Push-Up","The push-up is one of the most effective bodyweight exercises for building upper body strength, endurance, and stability. It engages multiple muscle groups, including the chest, shoulders, triceps, and core. Suitable for all fitness levels, push-ups can be modified or progressed to match individual goals. It requires no equipment and is a fundamental movement used in calisthenic, strength training, sports conditioning, and rehabilitation programs.","https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif", true, 10,4,6),
    new Exercise(2,"Straddle Planche", "The Straddle Planche is an advanced bodyweight exercise that demonstrates extreme core strength, shoulder stability, and total body control. It involves suspending your body parallel to the ground, supported only by your hands, while your legs are spread wide apart in a straddle position. It is popular in calisthenics, gymnastics, and street workout routines, requiring months or years of consistent training to achieve.", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Straddle-Planche.gif", true, 50,5,80),
    new Exercise(3,"Single Arm Raise Push-up", "The Single Arm Raise Push-Up is a push-up variation in which one arm briefly leaves the ground at the top of the movement. This brief one-arm support increases load on the working side and challenges your balance and rotational control. It is often used to improve unilateral strength, coordination, and postural integrity.", "https://fitnessprogramer.com/wp-content/uploads/2022/08/Single-Arm-Raise-Push-up.gif", false, 23, 6,0),
    new Exercise(4,"Archer Push-Up","The Archer Push-Up is a horizontal pushing exercise where one arm performs the majority of the work while the other extends outward for balance and support. It targets the same muscles as a standard push-up but increases the load on one side. This movement is frequently used in calisthenics and functional training as a stepping stone toward single-arm push-ups.","https://fitnessprogramer.com/wp-content/uploads/2022/07/Archer-Push-Up.gif", false, 23, 6,0),
    new Exercise(5,"Chest Tap Push-up","Gibt nix","https://fitnessprogramer.com/wp-content/uploads/2022/07/Chest-Tap-Push-up.gif", false),
    new Exercise(6,"Lean Planche","The Lean Planche is a bodyweight exercise where the body is held at a forward lean while balancing on the hands. This movement builds strength in the shoulders, core, and arms, and is often used as a precursor to the more difficult Straddle and Full Planche. By leaning your body forward while maintaining support on your hands, the Lean Planche provides a foundation to build strength and control for mastering more advanced calisthenic moves.","https://fitnessprogramer.com/wp-content/uploads/2025/04/lean-planche.png", false, 23, 6,0),]

    public workouts: any =  [];
  selectedWorkout: Workout = new Workout();

  constructor(private route:Router, private service:WorkoutService) {
  }
  ngOnInit(){
    this.service.getAllWorkouts().subscribe(
      {next: (data)=>{console.log('Received workouts:', data);this.workouts = data}}
    );
  }

  WorkoutErstellenRedirect(){
    this.route.navigate(['/Workout-erstellen'],{
      queryParams: {returnTo: this.route.url}
    });
  }
  WorkoutDurchfuehrenRedirect(workout:Workout){
    this.route.navigate(['/Workout'],{
      queryParams: {workout: workout}
    });
  }

  ShowWorkout(workout:Workout){
    this.selectedWorkout = workout;
    this.showWorkout = true;
  }

  getCounter(n: number): any[] {
    return Array(n);
  }
}
