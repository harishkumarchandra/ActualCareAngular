import { Injectable } from '@angular/core';
import { LoginInfo } from './login';
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

  getLogins(): Observable<LoginInfo[]> {
    return this.http.get<LoginInfo[]>(this.loginsUrl);
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
