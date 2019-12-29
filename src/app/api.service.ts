import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from './model/employee';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Employee[]> {

    return this.http.get<Employee[]>("http://dummy.restapiexample.com/api/v1/employees")
       .pipe(tap(employee => console.log("")),
             catchError(this.handleError("",[]))
      );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
