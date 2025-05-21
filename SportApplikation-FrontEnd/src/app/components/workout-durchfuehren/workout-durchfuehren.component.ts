import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Workout} from '../../../models/workout';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-workout-durchfuehren',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './workout-durchfuehren.component.html',
  styleUrl: './workout-durchfuehren.component.css'
})
export class WorkoutDurchfuehrenComponent {
  workout: Workout= new Workout();

  constructor(private route: ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe(params => {
      this.workout = params['workout'] || '/';
    });
  }


}
