import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  loginId = 0;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginId = this.loginService.getLoginId();
  }

}
