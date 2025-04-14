import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private route: Router){}
  MainRedirect(){
    this.route.navigate(['/Mainsite']);
  }

}
