import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-mainsite',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './mainsite.component.html',
  standalone: true,
  styleUrl: './mainsite.component.css'
})
export class MainsiteComponent {

}
