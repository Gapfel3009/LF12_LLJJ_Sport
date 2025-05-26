import { Routes } from '@angular/router';
import {authGuard} from './guard/auth.guard';

export const routes: Routes = [
  {path: 'Login', loadComponent:()=>import('./components/login/login.component').then(c=> c.LoginComponent)},
  {path: 'Mainsite', canActivate:[authGuard], loadComponent:()=>import('./components/mainsite/mainsite.component').then(c=> c.MainsiteComponent)},
  {path: 'Workout-erstellen', canActivate:[authGuard], loadComponent:() => import('./components/workout-erstellen/workout-erstellen.component').then(c =>c.WorkoutErstellenComponent)},
  {path: 'Workout-list', canActivate:[authGuard], loadComponent:()=> import('./components/workouts/workouts.component').then(c=>c.WorkoutsComponent)},
  {path: 'Profile', canActivate:[authGuard], loadComponent:()=> import('./components/profile/profile.component').then(c=>c.ProfileComponent)},
  {path: 'Workout', canActivate:[authGuard], loadComponent:() => import('./components/workout-durchfuehren/workout-durchfuehren.component').then(c=>c.WorkoutDurchfuehrenComponent)},
  {path: '', redirectTo: '/Login', pathMatch: 'full'},
];
