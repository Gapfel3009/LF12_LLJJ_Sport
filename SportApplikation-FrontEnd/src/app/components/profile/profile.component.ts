import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {AppUser} from '../../../models/AppUser';
import {FormsModule} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
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
  FirstLogin: boolean = false;
  ngOnInit() {
this.userService.firstLogin$.subscribe(isFirstLogin => {
  if (isFirstLogin) {
    this.FirstLogin = isFirstLogin;
  }
})
    this.getUser()
    this.AvaId = this.currentUser?.avatarID!
  }

  getUser(){
    this.currentUser = this.userService.getCurrentUser();
  }
  setAvatarId(avatarID:number){
    this.currentUser!.avatarID = avatarID;
    this.AvaId = avatarID;
    this.userService.updateUser(this.currentUser!).subscribe();
  }
  UpdateUser(username: string){
    if (!username || username.trim().length === 0) {
      alert('Ungültiger Benutzername.')
      return;
    }
    this.newUsername = username;
    this.currentUser!.username = this.newUsername;
    this.userService.updateUser(this.currentUser!).subscribe();
    this.userService.setFirstLogin(false);
    this.FirstLogin = false;
    this.MainRedirect();
  }
  MainRedirect(){
    this.router.navigate(['/Mainsite']);
  }
}
