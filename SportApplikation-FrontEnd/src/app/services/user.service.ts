import { Injectable } from '@angular/core';
import {AppUser} from '../../models/AppUser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Workout} from '../../models/workout';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private appUser:AppUser | null = null;

  private ApiUrl:string = "http://localhost:8081";
  constructor(private http: HttpClient) { }


  authenticateUser(email: string, passwordHash: string):boolean {
    //TODO: Enpunkt einbinden, sobald existiert

    this.appUser = new AppUser(1,"test@mail","password", new Date(Date.now()),"Bizeps Brecher Bernd", 3,3,3,3,3,3,3,3,3,3,3)
    return true;
  }



  getCurrentUser(): AppUser | null {
    return this.appUser;
  }

  getUserId(): number | null {
    return this.appUser ? this.appUser.userID : null;
  }

  isAuthenticated(): boolean {
    return !!this.appUser;
  }

  logout(): void {
    this.appUser = null;
  }
}
