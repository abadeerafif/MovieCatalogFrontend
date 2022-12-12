import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class service {
  constructor(private http: HttpClient) { }

  getmovies()
  {
    fetch("http://localhost:8080/Movies",{"method":"GET","headers":{}}).then(response=>{console.log(response);
    })
  }

  
}