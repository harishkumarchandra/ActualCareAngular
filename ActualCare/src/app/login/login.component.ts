import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private login:LoginService) {   }

  ngOnInit() {
    console.log('hit');
  }

  loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var email = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log(email, password);
    
    if(email == 'admin@admin' && password == 'admin'){
      this.login.setUserLoggedIn();
      this.router.navigate(['dashboard'])
    }

  }

}
