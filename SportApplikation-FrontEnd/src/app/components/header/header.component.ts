import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    RouterModule
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private userService: UserService) { }

  MainRedirect(){
    this.router.navigate(['/Mainsite']);
  }

  WorkoutsRedirect(){
    this.router.navigate(['/Workout-list'])
  }

  ProfileRedirect(){
    this.router.navigate(['/Profile']);
  }

  UserLogout(){
    console.log('User logged out');
    this.router.navigate(['/']);
    this.userService.logout();
  }
}
