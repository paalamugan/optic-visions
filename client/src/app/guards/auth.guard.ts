import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Utils } from '../utils';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {
    
    constructor(private _router:Router) {}

    isLoggedIn(): boolean {

        if(Utils.isLoggedIn()) {
            return true;
        }

        Utils.isLoggedOut();
        this._router.navigate(['/login']);
        return false;
    }

    canActivate(): boolean {
        return this.isLoggedIn();
    }

    canActivateChild(): boolean {
        return this.isLoggedIn();
    }

    // canLoad(): boolean {
    //     return this.isLoggedIn();
    // }
}