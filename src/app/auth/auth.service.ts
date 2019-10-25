import { Injectable } from '@angular/core';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private  _userIsAuthenticated = false;

    constructor() { }


  loggin() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }

  setAuthenticated(isAuthenticated) {
    this._userIsAuthenticated = isAuthenticated;
  }
  getAuthenticated() {
    return this._userIsAuthenticated;
  }
}