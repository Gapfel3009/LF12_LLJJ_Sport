import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Workout} from '../../models/workout';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private ApiUrl:string = "http://localhost:8081";
  constructor(private http: HttpClient) { }

  getAllWorkouts(): Observable<any>{
    return this.http.get<Workout[]>(`${this.ApiUrl}/api/workouts`,{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }
}
