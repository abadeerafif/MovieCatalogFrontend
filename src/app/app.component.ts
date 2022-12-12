import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isloogedout:boolean;
  constructor(private router: Router) {
    if(localStorage.getItem("auth")==null)
    {
      this.isloogedout=true;
    }
    else
    {
      this.isloogedout=false;

    }
  }
  title = 'movie-catalog';
  
  
  logout()
  {
    localStorage.removeItem("auth");
    this.isloogedout=true;
    this.router.navigate([""]);
    
  }
  loginev(e:any)
  {
    
    this.isloogedout=false;
    console.log("event called");
    
    
  }
}
