import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AppUser} from '../../../models/AppUser';
import {UserService} from '../../services/user.service';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf, FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showWrongPassword = false;
  regMail: string ="";
  loginMail: string ="";
  regPassword: string="";
  regPassword2: string = '';
  loginPassword : string ="";
  passwordNichtGleich: boolean = false;
  constructor(private router: Router, private userService: UserService) { }

  Register(event:Event){
    // Todo: password pre-hashen -- nicht lesbar übergeben!
    event.preventDefault();
    this.passwordNichtGleich = this.regPassword !== this.regPassword2;

    if (this.passwordNichtGleich) {
      return;
    }

    this.userService.registerUser(this.regMail,this.regPassword).subscribe(
      {
        next: (response) => {
          // todo:loggt hier den token und user und password also rausnehmen nach der entwicklung
        //  console.log("Registrierung erfolgreich", response.message);
          this.RegRedirect()
        },
        error: (error) => {
          console.error("Registrierungsfehler:", error);
          alert("Registrierungsfehler")
        }
      }
    );
  }

  Login(event:Event){
    event.preventDefault();
    this.userService.authenticateUser(this.loginMail, this.loginPassword).subscribe({
      next: (response) => {
        // todo:loggt hier den token und user und password also rausnehmen nach der entwicklung
     //  console.log("Login erfolgreich", response);
        this.LoginRedirect();
      },
      error: (error) => {
        console.error("Login fehlgeschlagen:", error);
        this.showWrongPassword = true;
      }
    });
  }
  LoginRedirect(){
    this.router.navigate(['/Mainsite']);
  }
  RegRedirect(){
    const loginTab = document.querySelector('#login-tab') as HTMLElement;
    loginTab?.click();
  }
}
