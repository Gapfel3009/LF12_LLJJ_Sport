import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

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

  constructor(private router: Router, public userService: UserService) {}
  WorkoutErstellenRedirect(){
    this.router.navigate(['/Workout-erstellen'], {
      queryParams: {returnTo: this.router.url}
    });
  }

  WorkoutsRedirect(){
    this.router.navigate(['/Workout-list'])
  }

  ProfileRedirect(){
    this.router.navigate(['/Profile'])
  }
}
