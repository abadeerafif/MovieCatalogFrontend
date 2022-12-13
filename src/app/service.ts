import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class service {
  constructor(private http: HttpClient) { }

  getmovies()
  {
    // TODO use service for api calls instead of calling apis in components
    // TODO try using angular's HttpClient
    fetch("http://localhost:8080/Movies",{"method":"GET","headers":{}}).then(response=>{console.log(response);
    })
  }

  
}