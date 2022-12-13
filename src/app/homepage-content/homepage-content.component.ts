import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage-content',
  templateUrl: './homepage-content.component.html',
  styleUrls: ['./homepage-content.component.css']
})
export class HomepageContentComponent {
  movies: Array<any>=[];

  


  ngOnInit() {    
    console.log(localStorage.getItem('auth'));
    
    this.getmovies()
    console.log(this.movies);
    
  }
  
  getmovies()
  {
    // TODO use formatter to break down long lines
    fetch("http://localhost:8080/getMovies",{method:"POST",headers: {"Content-Type": "application/json"},body:localStorage.getItem('auth'),redirect: 'follow'}).then(response=>{response.json().then(json=>{
      console.log(json);
      if(json.error!=undefined)
        alert(json.error);
      for (let i = 0; i < json.length; i++) {
       this.movies.push( json[i])
       
      }
    });
    
    })
  }
  

}
