import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {UserService} from '../../services/user.service';
import {AppUser} from '../../../models/AppUser';

@Component({
  selector: 'app-profile',
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService) {
  }
  isfront: boolean =true;
  currentUser: AppUser | null = null;
  hoveredMuscle: string | null = null;

  muscleLines: Record<string, { x1: number; y1: number; x2: number; y2: number }> = {
    xpTotal: { x1: 10, y1: 10, x2: 150, y2: 10 },
    xpBack: { x1: 10, y1: 100, x2: 150, y2: 100 },
    xpShoulders: { x1: 10, y1: 60, x2: 150, y2: 60 },
    xpLegs: { x1: 10, y1: 250, x2: 150, y2: 250 },
    xpTriceps: { x1: 10, y1: 80, x2: 150, y2: 80 },
    xpAbs: { x1: 10, y1: 140, x2: 150, y2: 140 },
    xpGlutes: { x1: 10, y1: 300, x2: 150, y2: 300 },
    xpBiceps: { x1: 10, y1: 50, x2: 150, y2: 50 }
  };

  ngOnInit() {
    this.getUser()
  }

  FlipThePage(){
    if(this.isfront){
      this.isfront = false;
    }
    else{
      this.isfront = true;
    }
  }
  getUser(){
    this.currentUser = this.userService.getCurrentUser();
  }
}
