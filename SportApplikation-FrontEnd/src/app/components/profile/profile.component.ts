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
  ngOnInit() {
    this.getUser()
  }
  isfront: boolean =true;
  currentUser: AppUser | null = null;
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
