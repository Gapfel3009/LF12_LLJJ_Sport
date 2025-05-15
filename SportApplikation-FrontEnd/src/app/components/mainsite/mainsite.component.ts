import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {Router} from '@angular/router';

@Component({
  selector: 'app-mainsite',
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './mainsite.component.html',
  standalone: true,
  styleUrl: './mainsite.component.css'
})
export class MainsiteComponent {

  showSummaryInfo:boolean = false;
  showStatsInfo:boolean = false;

  constructor(private route: Router){}
  WorkoutErstellenRedirect(){
    this.route.navigate(['/Workout-erstellen']);
  }

  WorkoutsRedirect(){
    this.route.navigate(['/Workouts'])
  }

}
