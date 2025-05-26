import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AppUser} from '../../../models/AppUser';
import {UserService} from '../../services/user.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    NgIf
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showWrongPassword = false;
  constructor(private router: Router, private userService: UserService) { }

  Login(event:Event){
    event.preventDefault();
    if(this.userService.authenticateUser("test@mail","password")){
      this.LoginRedirect()
    }else{

      this.showWrongPassword = true;
      console.log(this.showWrongPassword)
    }
  }
  LoginRedirect(){
    this.router.navigate(['/Mainsite']);
  }
}
