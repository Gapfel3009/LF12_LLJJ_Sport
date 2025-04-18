import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent:()=>import('./components/login/login.component').then(c=> c.LoginComponent)},
  {path: 'Mainsite', loadComponent:()=>import('./components/mainsite/mainsite.component').then(c=> c.MainsiteComponent)},
  {path: 'Workout-erstellen', loadComponent:() => import('./components/workout-erstellen/workout-erstellen.component').then(c =>c.WorkoutErstellenComponent)}
];
