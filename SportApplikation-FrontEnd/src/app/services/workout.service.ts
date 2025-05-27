import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Workout} from '../../models/workout';
import {Observable} from 'rxjs';
import {AppUser} from '../../models/AppUser';
import {Exercise} from '../../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private ApiUrl:string = "http://localhost:8081";
  constructor(private http: HttpClient) { }

  private setHeaderToken(): HttpHeaders {
    const token = localStorage.getItem("token");
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}`:""
    })
  }

  getAllStandardWorkouts():Observable<any>{
    return this.http.get<Workout[]>(`${this.ApiUrl}/api/workouts/standard`,{
      headers: this.setHeaderToken()
    })
  }

  getAllUserWorkouts(userId:number | null):Observable<any>{
    return this.http.get<Workout[]>(`${this.ApiUrl}/api/workouts/byUser/${userId}`,{
      headers: this.setHeaderToken()
    })
  }

  getWorkoutById(workoutID:number):Observable<any>{
    return this.http.get<Workout>(`${this.ApiUrl}/api/workouts/${workoutID}`,{
      headers: this.setHeaderToken()
    })
  }

  getExercisesByWorkoutId(workoutID:number):Observable<any>{
    return this.http.get<Exercise[]>(`${this.ApiUrl}/api/workout-exercises/byWorkout/${workoutID}`,{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    })
  }

  getAllExercises():Observable<any>{
    return this.http.get<Exercise[]>(`${this.ApiUrl}/api/exercise`,{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    })
  }
}



