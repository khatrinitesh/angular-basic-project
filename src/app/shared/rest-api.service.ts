import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Emp } from '../shared/emp';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:3000';


  constructor(private http: HttpClient) {
    // http options 
    httpOptions: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

}
