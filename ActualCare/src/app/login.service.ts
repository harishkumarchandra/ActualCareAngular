import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class LoginService {

  private isUserLoggedIn;
  private loginId;

  private loginsUrl = 'http://18.217.216.74:8085/ActualCare/rest/login/get';

  getLogins(): Observable<Login[]> {
    return this.http.get<Login[]>(this.loginsUrl);
  }

  constructor(private http: HttpClient) { 
  	this.isUserLoggedIn = false;
  }

  setLoginId(id: number){
    this.loginId = id;
  }

  getLoginId(){
    return this.loginId;
  }

  setUserLoggedIn() {
  	this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
  	return this.isUserLoggedIn;
  }

}
