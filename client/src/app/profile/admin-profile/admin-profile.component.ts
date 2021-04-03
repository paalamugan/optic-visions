import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Admin } from 'src/app/models/admin';
import { CompanySignup } from 'src/app/models/companysignup';
import { Utils } from 'src/app/utils';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  constructor(private signupService:SignupService,private loginservice:LoginService,private router:Router,private snackBar:MatSnackBar) { }
company:CompanySignup=new CompanySignup('','',1,'','','','','','','');
currentCompany:CompanySignup=new CompanySignup('','',1,'','','','','','','');
profile:Admin=new Admin('','','','','',this.company,'');
currentpassword:string;
Identifier:string;
hide:boolean=true;
eyeicon:boolean=true;
profiledetails:string="Admin Profile Details";
passwordDisabled:boolean=true;
countfilelength:number;
adminshow_1:boolean=false;
adminshow_2:boolean=true;
  selectedfile:File=null;
  isLoading: boolean = false;
  ngOnInit() {
    this.loginservice.getUserName().subscribe((data:Admin)=>{
      if(data.Identifier==="admin"){
        this.Identifier=data.Identifier;
        this.profile=data;
          this.currentpassword=this.profile.company.password;
      }else{
        this.router.navigateByUrl('login');
      }
     
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.router.navigateByUrl('login');
         }
      }
    }
    );
   
  }
  editProfile(){
      this.isLoading = true;
    this.signupService.getOne(this.profile.company).subscribe((resultData:CompanySignup)=>{
      this.currentCompany=resultData;
      this.adminshow_2=false;
    this.adminshow_1=true;
    this.profiledetails="Edit Profile Details";
    this.isLoading = false;
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        this.isLoading = false;
        this.snackBar.open(err.error.error, "Error", {
            duration: 5000,
        });
        if(err.status===401){
        this.router.navigateByUrl('login');
        }
      }
    }
    )
    
    
  }

  onFileChange(event){
    this.countfilelength=event.target.files.length;
    this.selectedfile=<File>event.target.files[0];
  }

  UpdateProfile(){

      if (this.currentCompany.newPassword !== this.currentCompany.cnfNewPassword) {
        this.snackBar.open("New Password and Confirm new password should match!", "Error", {
            duration: 2000,
        });
        return;
      }
      this.isLoading = true;
      this.signupService.UpdateCompany(this.currentCompany).subscribe(
        (resultData:any)=>{
            this.isLoading = false;
        this.router.navigateByUrl('login');
        },
        (err)=>{
          if(err instanceof HttpErrorResponse){
            this.isLoading = false;
            this.snackBar.open(err.error.error, "Error", {
                duration: 5000,
            });
            if(err.status===401){
            this.router.navigateByUrl('login');
            }
          }
        }
        );
    
  }
  back(){
    this.adminshow_2=true;
    this.adminshow_1=false;
    this.profiledetails="Admin Profile Details";
  }
  deleteProfile(){
    if(confirm('Are You Sure to Delete this Company ?') === true){
      this.signupService.deleteCompany(this.profile.companyId).subscribe(data=>{
        this.router.navigateByUrl('login');
       },
       
       (err)=>{
        if(err instanceof HttpErrorResponse){
            this.snackBar.open(err.error.error, "Error", {
                duration: 5000,
            });
          if(err.status===401){
          this.router.navigateByUrl('login');
          }
        }
       })
    }

   
  }
}
