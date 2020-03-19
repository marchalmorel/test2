import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FireBaseAuthResponse, User} from "../interfaces";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {tap} from "rxjs/operators";
import {httpWrapperService} from "./httpWrapper.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated$ = new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient,
    private httpWrapperService: httpWrapperService

  ) {}

  get token(): string {
    const expDate = new Date(localStorage.getItem('fireBase-token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null
    }
    return localStorage.getItem('fireBase-token')
  }

  login(user: User): Observable<User> {
    return this.httpWrapperService.httpWrapper(
      this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.bdApiKey}`, user)
      .pipe(
        tap(this.setToken)
      )
    );
  }

  logout() {
    this.setToken(null);
    this.isAuthenticated$.next(false);
  }

  isAuthenticated() {
    this.isAuthenticated$.next(!!this.token);
    return !!this.token

  }

  private setToken(response: FireBaseAuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 500);
      localStorage.setItem('fireBase-token', response.idToken);
      localStorage.setItem('fireBase-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }


}
