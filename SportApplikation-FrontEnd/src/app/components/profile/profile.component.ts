import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {AppUser} from '../../../models/AppUser';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {
  }
  currentUser: AppUser | null = null;
  AvaId: number = 1;
  newUsername: string = '';

  ngOnInit() {
    this.getUser()
    this.AvaId = this.currentUser?.avatarID!
    console.log('currentUser', this.currentUser)
    console.log(this.userService.getCurrentUser())
  }

  getUser(){
    this.currentUser = this.userService.getCurrentUser();
  }
  setAvatarId(avatarID:number){
    this.currentUser!.avatarID = avatarID;
    this.AvaId = avatarID;
    console.log(this.currentUser);
    this.userService.updateUser(this.currentUser!).subscribe();
  }
  UpdateUser(username: string){
    this.newUsername = username;
    this.currentUser!.username = this.newUsername;
    console.log(this.currentUser!);
    this.userService.updateUser(this.currentUser!).subscribe();
    console.log(this.userService.getCurrentUser())
    this.MainRedirect();
  }
  MainRedirect(){
    this.router.navigate(['/Mainsite']);
  }
}
