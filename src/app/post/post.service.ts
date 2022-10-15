import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  //  Ini Header Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Ini contstructor buat jalanin method
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient
      .get(this.apiUrl + '/posts/')

      .pipe(catchError(this.errorHandler));
  }

  // Create Method
  create(post: Post): Observable<any> {
    return this.httpClient.post(
      this.apiUrl + 'posts/',
      JSON.stringify(post),
      this.httpOptions
    );
  }

  // Find Method
  find(id: number): Observable<any> {
    return this.httpClient
      .get(this.apiUrl + '/post/' + id)
      .pipe(catchError(this.errorHandler));
  }

  // Update Method
  update(id: number, post: Post): Observable<any> {
    return this.httpClient
      .put(this.apiUrl + '/posts/' + id, JSON.stringify(post), this.httpOptions)

      .pipe(catchError(this.errorHandler));
  }

  // Delete Method
  delete(id: number) {
    return this.httpClient
      .delete(this.apiUrl + '/posts/' + id, this.httpOptions)

      .pipe(catchError(this.errorHandler));
  }

  // Error Handler Method
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
