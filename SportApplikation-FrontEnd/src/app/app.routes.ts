import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent:()=>import('./components/login/login.component').then(c=> c.LoginComponent)},
  {path: 'Mainsite', loadComponent:()=>import('./components/mainsite/mainsite.component').then(c=> c.MainsiteComponent)},
  {path: 'Workout-erstellen', loadComponent:() => import('./components/workout-erstellen/workout-erstellen.component').then(c =>c.WorkoutErstellenComponent)},
  {path: 'Workout-list', loadComponent:()=> import('./components/workouts/workouts.component').then(c=>c.WorkoutsComponent)},
  {path: 'Profile', loadComponent:()=> import('./components/profile/profile.component').then(c=>c.ProfileComponent)},
  {path: 'Workout', loadComponent:() => import('./components/workout-durchfuehren/workout-durchfuehren.component').then(c=>c.WorkoutDurchfuehrenComponent)},
];
