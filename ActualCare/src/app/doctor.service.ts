import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DoctorService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  /** Log a DoctorService message with the MessageService */
  private log(message: string) {
    this.messageService.add('DoctorService: ' + message);
  }

  private doctorsUrl = 'http://localhost:8085/ActualCare/rest/insurance/get';// URL to web api
  //18.217.216.74

  getDoctors(ins: string): Observable<Doctor[]> {
    const url = `${this.doctorsUrl}/${ins}`;
    return this.http.get<Doctor[]>(url) .pipe(
      tap(doctors => this.log(`fetched doctors`)),
      catchError(this.handleError('getDoctors', []))
    );
    
  }

  // getDoctor(id: number): Observable<Doctor> {
  //   const url = `${this.doctorsUrl}/${id}`;
  //   return this.http.get<Doctor>(url).pipe(
  //     tap(_ => this.log(`fetched doctor id=${id}`)),
  //     catchError(this.handleError<Doctor>(`getDoctor id=${id}`))
  //   );
  // }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
  }

}
