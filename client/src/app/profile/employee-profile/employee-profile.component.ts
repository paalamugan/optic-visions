import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { Utils } from 'src/app/utils';
import { CompanySignup } from 'src/app/models/companysignup';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

  
  company:CompanySignup = null;
  doj:Date = new Date();
  dob:Date = new Date();
employee:Employee=new Employee('','','','','','',this.doj,this.dob,'','','',this.company);
Identifier:string;
userName:string;
companyName:string;
isLoading: boolean = false;
constructor(private loginservice:LoginService,private router:Router) { }
  ngOnInit() {
      this.isLoading = true;
    this.loginservice.getUserName().subscribe((data:any)=>{
        this.isLoading = false;
      if(data.Identifier=="employee" || data.Identifier=="employee-admin"){
        this.Identifier=data.Identifier;
        this.userName=data.userName;
        this.companyName=data.companyName;
        this.employee=data.employee;
      }else{
          this.router.navigateByUrl('login');
      }
     
    },
    (err)=>{
        this.isLoading = false;
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.router.navigateByUrl('login');
         }
      }
    }
    );
  }

}
