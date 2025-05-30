import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {AVATARS} from '../../../models/Avatar';

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
  xpTable:number[] = [0, 250, 500, 750, 1000, 1500, 2500, 3000, 3500, 4000, 5500, 6000, 7000, 6000, 9000, 10000];

  constructor(private router: Router, public userService: UserService) {}
  WorkoutErstellenRedirect(){
    this.router.navigate(['/Workout-erstellen'], {
      queryParams: {returnTo: this.router.url}
    });
  }
  getavatar(AvatarID: number){
    return AVATARS[AvatarID];
  }

  WorkoutsRedirect(){
    this.router.navigate(['/Workout-list'])
  }

  ProfileRedirect(){
    this.router.navigate(['/Profile'])
  }

  calculateLevel(xp: number): number {
    for (let i = this.xpTable.length - 1; i >= 0; i--) {
      console.log(xp)
      if (xp >= this.xpTable[i]) {
        return i + 1; // Level 1 startet bei xpTable[0]
      }
    }
    return 1;
  }

}
