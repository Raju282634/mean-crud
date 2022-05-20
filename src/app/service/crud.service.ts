import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';

  // HTTP Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Add Book
  AddBook(data: Book): Observable<any> {
    let API_URL = `${this.REST_API}/add-book`;
    return this.http
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Get All Books
  GetBooks(): Observable<any> {
    return this.http.get(`${this.REST_API}`);
  }

  // Get a book by Id
  GetBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-book/${id}`;
    return this.http
      .get(API_URL, id)
      .pipe(
        map((res: any) => { return res || {}}),
        catchError(this.handleError));
  }

  // Update Book
  UpdateBook(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-book/${id}`;
    return this.http
      .put(API_URL, data, {headers: this.httpHeaders})
      .pipe(catchError(this.handleError));
  }

  // Delete Book
  DeleteBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-book/${id}`;
    return this.http
      .delete(API_URL, {headers: this.httpHeaders})
      .pipe(catchError(this.handleError));
  }

  // Handle Errors
  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Handle Client Side Error
      errorMessage = error.error.message;
    } else {
      // Handle Server Side Error
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => { new Error(errorMessage)});
  }
}
