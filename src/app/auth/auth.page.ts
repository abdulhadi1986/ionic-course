import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isNewUser = true;
  constructor(private authService: AuthService, 
              private router: Router,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  onLogin() {
    this.isLoading = true;
    this.authService.loggin();
    this.loadingCtrl
                    .create({ keyboardClose: true, message: 'Logging in ...'})
                    .then ( loadingEl => {
                                          loadingEl.present();
                                          setTimeout(() => {
                                            this.isLoading = false;
                                            this.router.navigateByUrl('/places');
                                            loadingEl.dismiss();
                                          }, 2000);
                    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isNewUser) {
      console.log('registering new user:', email, password);
    } else {
      console.log('login with the user ', email, password);
    }
    this.onLogin();
  }

  onSwitchAuth() {
    this.isNewUser = !this.isNewUser;
  }
}
