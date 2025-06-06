import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import * as CryptoJS from 'crypto-js';
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
    event.preventDefault();
    this.regPassword = CryptoJS.SHA256(this.regPassword).toString();
    this.regPassword2 = CryptoJS.SHA256(this.regPassword2).toString();
    this.passwordNichtGleich = this.regPassword !== this.regPassword2;

    if (this.passwordNichtGleich) {
      return;
    }

    this.userService.registerUser(this.regMail,this.regPassword).subscribe(
      {
        next: (response) => {
          this.userService.authenticateUser(this.regMail, this.regPassword).subscribe({
            next: () => {
              this.RegRedirect()
            }
          })
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
    this.userService.authenticateUser(this.loginMail, CryptoJS.SHA256(this.loginPassword).toString()).subscribe({
      next: (response) => {
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
    const isFirstLogin = true;
    this.userService.setFirstLogin(isFirstLogin);
    this.router.navigate(['/Profile']);
  }
}
