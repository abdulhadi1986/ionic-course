import { Injectable } from '@angular/core';
import { CanLoad, Router, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
//the auth guard then can be added to the links in the router. for each link we add property 'canLoad' and assign array of guards to it.
//we can implements CanActivate but it will not work properly with lazy loading. therefore we will implement CanLoad
export class AuthGuard implements  CanLoad {
  constructor(private authService: AuthService, private router: Router) {

  }
  canLoad(
      route: Route,
      segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
        if (!this.authService.getAuthenticated()) {
          console.log(' User is not Auted');
          this.router.navigateByUrl('/auth');
        }
        console.log('user authed? ' + this.authService.getAuthenticated());
        return this.authService.getAuthenticated();
  }

}
