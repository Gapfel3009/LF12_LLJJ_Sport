import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

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
  constructor(private router: Router){}

  MainRedirect(){
    this.router.navigate(['/Mainsite']);
  }

  WorkoutsRedirect(){
    this.router.navigate(['/Workout-list'])
  }

}
