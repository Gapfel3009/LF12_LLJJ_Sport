import { Component} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isfront: boolean =true;

  FlipThePage(){
    if(this.isfront){
      this.isfront = false;
    }
    else{
      this.isfront = true;
    }
  }
}
