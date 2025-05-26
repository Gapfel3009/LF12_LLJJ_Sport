import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Workout} from '../../models/workout';
import {Observable} from 'rxjs';
import {AppUser} from '../../models/AppUser';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private ApiUrl:string = "http://localhost:8081";
  constructor(private http: HttpClient) { }


  getAllStandardWorkouts():Observable<any>{
    return this.http.get<Workout[]>(`${this.ApiUrl}/api/workouts/standard`,{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    })
  }

  getAllUserWorkouts(userId:number | null):Observable<any>{
    return this.http.get<Workout[]>(`${this.ApiUrl}/api/workouts/byUser/${userId}`,{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    })
  }

  getWorkoutById(workoutID:number):Observable<any>{
    return this.http.get<Workout>(`${this.ApiUrl}/api/workouts/${workoutID}`,{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    })
  }
}
