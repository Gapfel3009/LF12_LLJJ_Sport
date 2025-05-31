import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {AppUser} from '../../../models/AppUser';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [
    FormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService) {
  }
  currentUser: AppUser | null = null;

  newUsername: string = '';

  ngOnInit() {
    this.getUser()
    console.log('currentUser', this.currentUser)
    console.log(this.userService.getCurrentUser())
  }

  getUser(){
    this.currentUser = this.userService.getCurrentUser();
  }
  setAvatarId(avatarID:number){
    this.currentUser!.avatarID = avatarID;
    console.log(this.currentUser);
    this.userService.updateUser(this.currentUser!);
  }
  UpdateUser(username: string){
    this.newUsername = username;
    this.currentUser!.username = this.newUsername;
    console.log(this.currentUser!);
    this.userService.updateUser(this.currentUser!);
    console.log(this.userService.getCurrentUser())
  }
}
