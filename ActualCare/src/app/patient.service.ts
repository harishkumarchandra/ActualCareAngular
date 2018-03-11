import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Doctor } from './doctor';



@Injectable()
export class PatientService {

  private patientUrl = 'http://localhost:8085/ActualCare/rest/patient';
 //18.217.216.74 


  getPatient(login_id: number): Observable<Patient> {
    const url = `${this.patientUrl}/getpatient/${login_id}`;
    return this.http.get<Patient>(url);
  }

  updateAllergy(Id:number,a_name:string): Observable<any> {
    const url = `${this.patientUrl}/updatea/${Id}/${a_name}`;
    return this.http.get(url);
  }

  constructor(private http: HttpClient,private messageService: MessageService) { }

}
