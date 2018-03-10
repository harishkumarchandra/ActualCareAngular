import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DoctorsComponent } from '../doctors/doctors.component';
import{Insurance} from '../insurance'
import{Doctor} from '../doctor'
import{LoginInfo} from '../login'
import{PersonalInfo} from '../personalInfo'
import { Patient } from '../patient';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addPatient(patient:Patient):void{
    this.registerService.addPatient(patient)
    .subscribe();
  }
  

  register(e){
    e.preventDefault();
    console.log("register");
    console.log('F_NAME'+e.target.elements[0].value);
    var F_NAME = e.target.elements[0].value;
    console.log('L_NAME'+e.target.elements[1].value);
    var L_NAME = e.target.elements[1].value
    console.log('SEX'+e.target.elements[3].value);
    var SEX = e.target.elements[3].value;
    console.log('AGE'+e.target.elements[2].value);
    var AGE = e.target.elements[2].value;
    console.log('DOOR_NO'+e.target.elements[4].value);
    var DOOR_NO = e.target.elements[4].value;
    console.log('STREET'+e.target.elements[5].value);
    var STREET = e.target.elements[5].value;
    console.log('CITY'+e.target.elements[6].value);
    var CITY = e.target.elements[6].value;
    console.log('STATE'+e.target.elements[7].value);
    var STATE = e.target.elements[7].value;
    console.log('EMAIL'+e.target.elements[8].value);
    var EMAIL = e.target.elements[8].value;
    console.log('PASSWORD'+e.target.elements[9].value);
    var PASSWORD = e.target.elements[9].value;
    console.log('INSURANCE'+e.target.elements[10].value);
    var INSURANCE = e.target.elements[10].value;
    console.log(this.pcp);

    const login: LoginInfo = new LoginInfo(EMAIL, PASSWORD, 'patient');
    const myPersonalInfo: PersonalInfo = new PersonalInfo(F_NAME,L_NAME,AGE,SEX,DOOR_NO,STREET,CITY,STATE);

    const patient: Patient = new Patient(
      INSURANCE,
      this.pcp.name,
      login,
      myPersonalInfo,
      );
    
    console.log(patient);
    this.addPatient(patient);
    this.router.navigate(['login']);
  }

  constructor(private router:Router,private registerService:RegisterService) { }

  pcp:Doctor;

  receiveMessage($event) {
    this.pcp =  $event;
  }
  
  ngOnInit() {
    
  }

}
