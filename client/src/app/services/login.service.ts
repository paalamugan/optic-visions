import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AdminLogin, EmployeeLogin } from '../models/login';
import { Utils } from '../utils';
import { ForgetPassword } from '../models/forgetpassword';
import { Observable } from 'rxjs';
import { observeOn } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    currentUser: any = null;
    constructor(private httpClient: HttpClient, private router: Router) {
        this.getUserName();
    }

  adminLogin(adminlogin:AdminLogin){
    return this.httpClient.post(`${Utils.adminLoginURL()}`,adminlogin);
  }

  employeeLogin(employeelogin:EmployeeLogin){
    return this.httpClient.post(`${Utils.employeeLoginURL()}`,employeelogin);
  }

  resetUserName() {
    this.currentUser = null;
  }
  
  getUserName() {

      if (this.currentUser) {
        return new Observable((observer) => observer.next(this.currentUser));
      }
      return new Observable((observer) => {
        this.httpClient.get(`${Utils.getUserNameURL()}`).subscribe((data) => {
            this.currentUser = data;
            observer.next(this.currentUser);
        }, (err) =>{
            if(err instanceof HttpErrorResponse){
                if(err.status===401){
                    Utils.isLoggedOut();
                    this.router.navigateByUrl('login');
                }
            }
            observer.error(err)
        }, () => {observer.complete()});
      });

  }
  forgetPassword(adminlogin:any){
    return this.httpClient.post(`${Utils.forgetPasswordURL()}`,adminlogin);
  }
  getforgetPassword(id:string){
    return this.httpClient.get(`${Utils.getforgetPasswordURL()}`+`/${id}`);
  }
  updateforgetPassword(forgetpassword:ForgetPassword){
    return this.httpClient.put(`${Utils.UpdateforgetPasswordURL()}`+`/${forgetpassword.fk_companyid}`,forgetpassword);
  }
}
