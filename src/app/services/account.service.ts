import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private authentication: AuthenticationService,
    private http: HttpClient) { }

  // login(userName, password) {
  //   this.authenticationService.auth(userName, password);
  // }

  login(credentails): Observable<IUser> {
    return this.http.post<IUser>('http://api.lipikaar.org/users/login', credentails);
  }

  getCurrentUser(): Observable<IUser> {
    return this.http.get<IUser>('http://api.lipikaar.org/users/getCurrentUser');
  }
  createUser(user): Observable<IUser> {
    return this.http.post<IUser>('http://api.lipikaar.org/users/create', user);
  }
}
