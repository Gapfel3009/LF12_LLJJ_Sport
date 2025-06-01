import { Injectable } from '@angular/core';
import {AppUser} from '../../models/AppUser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, tap, BehaviorSubject} from 'rxjs';
import {parseJson} from '@angular/cli/src/utilities/json-file';
import {Exercise} from '../../models/exercise';

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
  private readonly userKey = "user"
  private ApiUrl:string = "http://localhost:8081";
  private firstLognSubject = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }
  firstLogin$ = this.firstLognSubject.asObservable();

  authenticateUser(email: string, passwordHash: string): Observable<loginResponse> {
    return this.http.post<loginResponse>(`${this.ApiUrl}/api/auth/login`, { email, passwordHash }).pipe(
      tap(response => {

        localStorage.setItem(this.tokenKey, response.token);
        if (response.user) {
          localStorage.setItem(this.userKey,JSON.stringify(response.user));
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

  setUser(user: AppUser){
    this.getUserByID(user.userID).subscribe({
      next: (data)=>{
        this.appUser = data
      }
  })
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
    localStorage.removeItem(this.userKey);
  }

  setHighscore(highScore:number):void{
    if(this.appUser && this.appUser.flappyHighScore < highScore){
      this.appUser.flappyHighScore = highScore;
      console.log(this.appUser.flappyHighScore);
    }
    if(this.appUser){
    }

  }
  getHighscore():number{
    if(this.appUser){
      return this.appUser.flappyHighScore
    }
    return 0;
  }

  updateUser(user:AppUser){
    return this.http.put<AppUser>(`${this.ApiUrl}/api/appUser/${user.userID}`, user,{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

  getUserByID(id:number)  {
    return this.http.get<AppUser>(`${this.ApiUrl}/api/appUser/${id}`,{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

  setFirstLogin(isFirst:boolean){
    this.firstLognSubject.next(isFirst);
  }
}
