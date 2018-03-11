import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LoginInfo } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logins: LoginInfo[];
  

  constructor(private router:Router, private loginService:LoginService) {   }

  getLogins(): void{
    this.loginService.getLogins()
      .subscribe(logins => this.logins=logins);
    console.log("getting logins");
  }

  ngOnInit() {
    this.getLogins();
  }

  loginUser(e) {
  	e.preventDefault();
  	var email = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log(email, password)
    for(let i in this.logins){
      console.log(this.logins[i].email,this.logins[i].password);
    };
    this.checkLogin(email, password);
  }


  private checkLogin(email: string, password: string) {
    for (let i in this.logins) {
      if (email == this.logins[i].email && password == this.logins[i].password) {
        this.loginService.setLoginId(this.logins[i].login_id);
        
        if (this.logins[i].role == 'patient') {
          this.loginService.setUserLoggedIn();
          this.router.navigate(['patient']);
        }
        if (this.logins[i].role == 'doctor') {
          this.loginService.setUserLoggedIn();
          this.router.navigate(['doctor']);
        }
        if (this.logins[i].role == 'admin') {
          this.loginService.setUserLoggedIn();
          this.router.navigate(['admin']);
        }
      }
    }
  }


}
