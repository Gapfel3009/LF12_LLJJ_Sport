import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-mainsite',
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './mainsite.component.html',
  standalone: true,
  styleUrl: './mainsite.component.css'
})
export class MainsiteComponent {

  showSummaryInfo:boolean = false;

}
