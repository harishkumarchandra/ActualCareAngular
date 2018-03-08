import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginId = 0;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginId = this.loginService.getLoginId();
  }

}
