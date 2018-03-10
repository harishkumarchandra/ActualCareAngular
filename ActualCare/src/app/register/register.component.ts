import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DoctorsComponent } from '../doctors/doctors.component';
import{Insurance} from '../insurance'
import{Doctor} from '../doctor'
import{LoginInfo} from '../login'
import{PersonalInfo} from '../personalInfo'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myInsurance: Insurance;

  register(e){
    e.preventDefault();
    console.log("register");
    console.log(e.target.elements[0].value);
    var F_NAME = e.target.elements[0].value;
    console.log(e.target.elements[1].value);
    var L_NAME = e.target.elements[1].value
    console.log(e.target.elements[2].value);
    var SEX = e.target.elements[2].value;
    console.log(e.target.elements[3].value);
    var AGE = e.target.elements[3].value;
    console.log(e.target.elements[4].value);
    var DOOR_NO = e.target.elements[4].value;
    console.log(e.target.elements[5].value);
    var STREET = e.target.elements[5].value;
    console.log(e.target.elements[6].value);
    var CITY = e.target.elements[6].value;
    console.log(e.target.elements[7].value);
    var STATE = e.target.elements[7].value;
    console.log(e.target.elements[8].value);
    var EMAIL = e.target.elements[8].value;
    console.log(e.target.elements[9].value);
    var PASSWORD = e.target.elements[9].value;
    console.log(e.target.elements[10].value);
    var INSURANCE = e.target.elements[10].value;
    console.log(this.pcp);
  }

  constructor() { }

  pcp:string;

  receiveMessage($event) {
    this.pcp = 'Dr.' + $event
  }
  

  ngOnInit() {
    
  }

}
