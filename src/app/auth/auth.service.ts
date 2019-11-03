import { Injectable } from '@angular/core';
import { logging } from 'protractor';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private  _userIsAuthenticated = true;

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
