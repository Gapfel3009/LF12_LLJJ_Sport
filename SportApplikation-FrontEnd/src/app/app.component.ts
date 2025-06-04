import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs';
import {HeaderComponent} from './components/header/header.component';
import {NgIf} from '@angular/common';
import {UserService} from './services/user.service';
import {AppUser} from '../models/AppUser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NgIf],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'SportApplikation-FrontEnd';
  showHeader = true;

  private readonly userString = localStorage.getItem('user');
  private readonly user: AppUser = this.userString ? JSON.parse(this.userString) : null;
  FirstLogin: boolean = false;
  constructor(private router: Router, private userService: UserService) {
    if (this.user) {
      this.userService.setUser(this.user);
    }
  }

  ngOnInit() {
    this.userService.firstLogin$.subscribe(isFirstLogin => {
      this.FirstLogin = isFirstLogin;
      this.updateHeaderVisibility();
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateHeaderVisibility();
      });
  }
  updateHeaderVisibility() {
    const noHeaderRoutes = this.FirstLogin
      ? ['/Login', '/Workout?', '/Profile']
      : ['/Login', '/Workout?'];

    this.showHeader = !noHeaderRoutes.some(
      item => this.router.url.startsWith(item) || item === this.router.url
    );
  }
}
