import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs';
import {HeaderComponent} from './components/header/header.component';
import {NgIf} from '@angular/common';

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

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      const noHeaderRoutes = ['/Login','/Workout?'];
      this.showHeader = !noHeaderRoutes.some(item => this.router.url.startsWith(item) || item === this.router.url);
    })
  }
}
