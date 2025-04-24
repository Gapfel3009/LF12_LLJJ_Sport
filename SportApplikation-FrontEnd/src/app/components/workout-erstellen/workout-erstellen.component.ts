import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-workout-erstellen',
    imports: [
        NgOptimizedImage,
        NgIf
    ],
  templateUrl: './workout-erstellen.component.html',
  styleUrl: './workout-erstellen.component.css'
})
export class WorkoutErstellenComponent {

  ExerciseOverlay:boolean = true;
}
