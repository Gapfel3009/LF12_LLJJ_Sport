import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AppUser} from '../../../models/AppUser';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showWrongPassword = false;
  constructor(private router: Router, private userService: UserService) { }

  Login(){
    if(this.userService.authenticateUser("test@mail","password")){
      console.log("Authenticated")
      console.log(this.userService.isAuthenticated())
      this.LoginRedirect()
    }else{
      this.showWrongPassword = true;
      console.log("Looser")
    }
  }
  LoginRedirect(){
    console.log("vor Routing")
    this.router.navigate(['/Mainsite']);
    console.log("nach Routing")
  }
}
