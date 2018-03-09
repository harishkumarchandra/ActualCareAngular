import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
  }

  constructor() { }

  ngOnInit() {
  }

}
