import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route: Router){}
  LoginRedirect(){
    this.route.navigate(['/Mainsite']);
  }
}
