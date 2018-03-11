import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Patient } from '../patient';
import {PatientService} from '../patient.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {


  loginId = 0;
  patient: Patient;
  
  showPatient(){
    console.log(this.patient);
  }

  updateAllergy(): void{
    this.patientService.updateAllergy(this.loginId,this.patient.myAllgeries.a_name)
    .subscribe();
  }

  constructor(private loginService: LoginService, private patientService: PatientService) { }

  getPatient(): Patient{
      this.patientService.getPatient(this.loginId)
      .subscribe(patient => this.patient=patient);
      return this.patient;
  }

  ngOnInit() {
    this.loginId = this.loginService.getLoginId();
    this.getPatient();
  }

}
