import { Injectable } from '@angular/core';
import {AppUser} from '../../models/AppUser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Workout} from '../../models/workout';

interface loginResponse{
  token: string;
 user: AppUser;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private appUser:AppUser | null = null;
  private readonly tokenKey ="";
  private ApiUrl:string = "http://localhost:8081";
  constructor(private http: HttpClient) { }


  authenticateUser(email: string, passwordHash: string): Observable<loginResponse> {
    //TODO: Enpunkt einbinden, sobald existiert
    return this.http.post<loginResponse>(`${this.ApiUrl}/api/auth/login`, { email, passwordHash }).pipe(
      tap(response => {

        localStorage.setItem(this.tokenKey, response.token);
        if (response.user) {
          this.appUser = response.user;
   // this.appUser = new AppUser(1,"test@mail","password", new Date(Date.now()),"Bizeps Brecher Bernd", 3,3,3,3,3,3,3,3,3,3,3)
    //return true;
          }
      })
    );
  }

  registerUser(email: string, password: String): Observable<any> {
    const body = {
      email: email,
      passwordHash: password
    };
    console.log("Register-Request:", body);
    return this.http.post<any>(`${this.ApiUrl}/api/auth/register`, body);
  }

  getToken(): string|null{
  return localStorage.getItem(this.tokenKey);
}

  getCurrentUser(): AppUser | null {
    return this.appUser;
  }

  getUserId(): number{
    return this.appUser ? this.appUser.userID : 0;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.appUser = null;
    localStorage.removeItem(this.tokenKey);
  }

  setHighscore(highScore:number):void{
    if(this.appUser && this.appUser.flappyHighScore < highScore){
      this.appUser.flappyHighScore = highScore;
      console.log(this.appUser.flappyHighScore);
    }
    if(this.appUser){
      console.log(this.appUser.flappyHighScore < highScore);
      console.log(this.appUser.flappyHighScore);
      console.log(highScore);
    }

  }
  getHighscore():number{
    if(this.appUser){
      return this.appUser.flappyHighScore
    }
    return 0;
  }
}
