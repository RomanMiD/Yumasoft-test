import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StateService } from "../services/state.service";

@Injectable({
  providedIn: 'root'
})
export class StateDataGuard implements CanActivate {

  constructor(private stateService: StateService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.stateService.isEmpty()) {
      this.router.navigate(['/']);
    }
    return !this.stateService.isEmpty();
  }


}
