import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  loginId = 0;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginId = this.loginService.getLoginId();
  }

}
