import { Component, NgModule,Input } from '@angular/core';
import {MatCardModule } from '@angular/material/card';




@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css'],
  
})


export class MoviecardComponent {
  @Input() Moviename = ''; 
  @Input() description = ''; 
  @Input() posterurl = ''; 

}
