import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Patient } from './patient';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class RegisterService {

   
  addPatient (patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.registerUrl, patient, httpOptions);
  }

  private registerUrl = 'http://localhost:8085/ActualCare/rest/patient/post';
  //18.217.216.74

  constructor(private http: HttpClient) { }

}
