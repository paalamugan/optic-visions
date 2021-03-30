(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"background-color:#e0e0e0;\">\n\n    <mat-card fxFlex=\"50\" class=\"mat-elevation-z4 visionheight\">\n        <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n          <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n        </div>\n      <mat-card-title style=\"text-align:center\" class=\"opticvision\">\n  \n        <img src=\"assets/camera.png\" width=\"50px\">\n        <span>ptic Visions</span>\n  \n      </mat-card-title>\n      <mat-card-content class=\"opticvision_1\">\n        <div class=\"backgroundcolor\">\n          <h3 style=\"text-align:center; padding: 5px;\">Sign Up For Admin</h3>\n        </div>\n  \n        <form  [formGroup]=\"RegistrationForm\" class=\"example-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\"\n          #userForm=\"ngForm\">\n          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\n            <div fxFlex=\"50\" class=\"example-container\">\n                <mat-form-field class=\"full-width\">\n                  <input matInput type=\"text\" placeholder=\"CompanyName\" formControlName=\"companyName\" required>\n                  <mat-error *ngFor=\"let validation of account_validation_messages.companyname\">\n                    <mat-error class=\"error-message\" *ngIf=\"RegistrationForm.get('companyName').hasError(validation.type) && (RegistrationForm.get('companyName').dirty || RegistrationForm.get('companyName').touched)\">{{validation.message}}</mat-error>\n                  </mat-error>\n                </mat-form-field>\n            </div>\n            <div fxFlex=\"50\" class=\"example-container\">\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Tin Number\" formControlName=\"tinNumber\" id=\"tinNumber\">\n  \n              </mat-form-field>\n            </div>\n          </div>\n          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\n            <div fxFlex=\"50\" class=\"example-container\">\n                <mat-form-field class=\"full-width\">\n                    <input matInput type=\"text\" placeholder=\"UserName\" formControlName=\"userName\" required>\n                    <mat-error *ngFor=\"let validation of account_validation_messages.username\">\n                      <mat-error class=\"error-message\" *ngIf=\"RegistrationForm.get('userName').hasError(validation.type) && (RegistrationForm.get('userName').dirty || RegistrationForm.get('userName').touched)\">{{validation.message}}</mat-error>\n                    </mat-error>\n                  </mat-form-field>\n              <!-- <mat-form-field class=\"example-container\" fxFlex=\"100\">\n                <input matInput placeholder=\"UserName\" formControlName=\"userName\" id=\"userName\"\n                  required>\n  \n              </mat-form-field>\n              <span *ngIf=\"isValid('userName')\">userName is required</span> -->\n            </div>\n            <div fxFlex=\"50\" class=\"example-container\">\n                <mat-form-field class=\"full-width\">\n                    <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" required>\n                    <mat-error *ngFor=\"let validation of account_validation_messages.email\">\n                      <mat-error class=\"error-message\" *ngIf=\"RegistrationForm.get('email').hasError(validation.type) && (RegistrationForm.get('email').dirty || RegistrationForm.get('email').touched)\">{{validation.message}}</mat-error>\n                    </mat-error>\n                  </mat-form-field>\n                <!-- <mat-form-field>\n                  <input matInput placeholder=\"Email\" formControlName=\"email\"  id=\"email\"\n                    required>\n    \n                </mat-form-field>\n                <span *ngIf=\"isValid('email')\">Entered email is invalid</span> -->\n              </div>\n          \n          </div>\n         \n  \n          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\n              <div fxFlex=\"100\" class=\"example-container\">\n                  <mat-form-field class=\"full-width\">\n                      <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" required>\n                      <mat-icon matSuffix class=\"cursor\" (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                      <mat-error *ngFor=\"let validation of account_validation_messages.password\">\n                        <mat-error class=\"error-message\" *ngIf=\"RegistrationForm.get('password').hasError(validation.type) && (RegistrationForm.get('password').dirty || RegistrationForm.get('password').touched)\">{{validation.message}}</mat-error>\n                      </mat-error>\n                    </mat-form-field>\n                  <!-- <mat-form-field>\n                    <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" id=\"pass\">\n                     <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>  \n                  </mat-form-field>\n                  <span *ngIf=\"isValid('password')\">Password is a mandatory field</span> -->\n                </div>\n            <!-- <div fxFlex=\"50\" class=\"example-container\">\n                <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Confirm Password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"cnfPassword\"  [errorStateMatcher]=\"parentErrorStateMatcher\" required>\n                    <mat-icon matSuffix class=\"cursor\" (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                    <mat-error *ngFor=\"let validation of account_validation_messages.confirm_password\">\n                      <mat-error class=\"error-message\" *ngIf=\"(RegistrationForm.get('cnfPassword').hasError(validation.type)|| RegistrationForm.get('password').hasError(validation.type)) && (RegistrationForm.get('cnfPassword').dirty || RegistrationForm.get('cnfPassword').touched)\">{{validation.message}}</mat-error>\n                    </mat-error>\n                  </mat-form-field>\n                <mat-form-field class=\"example-container\" fxFlex=\"100\">\n                  <input matInput placeholder=\"Re-enter Password\" type=\"password\"  formControlName=\"cnfPassword\"  id=\"cnfPass\">\n    \n                </mat-form-field>\n                <span *ngIf=\"isValid('cnfPassword')\">Password and confirm password should match</span>\n              </div> -->\n           \n          </div>\n  \n          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\n            <div fxFlex=\"50\" class=\"example-container\">\n                <mat-form-field class=\"full-width\" hintLabel=\"Max 256 characters\">\n                    <input matInput type=\"text\" #input maxlength=\"256\" placeholder=\"Address\" formControlName=\"address\" required>\n                    <mat-hint align=\"end\">{{input.value?.length || 0}}/256</mat-hint>\n                    <mat-error *ngFor=\"let validation of account_validation_messages.address\">\n                      <mat-error class=\"error-message\" *ngIf=\"RegistrationForm.get('address').hasError(validation.type) && (RegistrationForm.get('address').dirty || RegistrationForm.get('address').touched)\">{{validation.message}}</mat-error>\n                    </mat-error>\n                  </mat-form-field>\n              <!-- <mat-form-field class=\"example-container\" fxFlex=\"100\">\n                \n                <input matInput placeholder=\"Address\" formControlName=\"address\"  id=\"address\"\n                  required>\n  \n              </mat-form-field>\n              <span *ngIf=\"isValid('address')\">address is required</span> -->\n            </div>\n            <div fxFlex=\"50\" class=\"example-container\">\n                <mat-form-field class=\"full-width\" hintLabel=\"Max 10 numbers\">\n                    <span matPrefix>+91 &nbsp;</span>\n                    <input matInput type=\"text\" #input1 maxlength=\"10\" placeholder=\"PhoneNumber\" formControlName=\"phoneNumber\">\n                    <!-- <mat-icon matSuffix>mode_edit</mat-icon> -->\n                    <!-- <mat-hint align=\"end\">{{input1.value?.length || 0}}/10</mat-hint>\n                    <mat-error *ngFor=\"let validation of account_validation_messages.phonenumber\">\n                      <mat-error class=\"error-message\" *ngIf=\"RegistrationForm.get('phoneNumber').hasError(validation.type) && (RegistrationForm.get('phoneNumber').dirty || RegistrationForm.get('phoneNumber').touched)\">{{validation.message}}</mat-error>\n                    </mat-error> -->\n                  </mat-form-field>\n              <!-- <mat-form-field class=\"example-container\" fxFlex=\"100\">\n                <input matInput placeholder=\"Phone Number\" type=\"number\" formControlName=\"phoneNumber\" id=\"phoneNumber\"\n                  required>\n  \n              </mat-form-field>\n              <span *ngIf=\"isValid('phoneNumber')\">phoneNumber is required</span> -->\n            </div>\n          </div>\n         <!-- <div fxLayout=\"row\">\n           <div fxFlex=\"100\">\n             \n                  <input type=\"file\"  (change)=\"onFileChange($event)\" style=\"display:none\" name=\"file-7[]\" id=\"file-7\" class=\"inputfile inputfile-6\" data-multiple-caption=\"{count} files selected\" multiple />\n                  <label class=\"box\" for=\"file-7\"><span [ngStyle]=\"styleOne?{'color': 'black'} : {'color': 'white'}\"></span> <strong><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"17\" viewBox=\"0 0 20 17\"><path d=\"M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z\"/></svg> Upload a Image&hellip;</strong></label>\n              \n              <label for=\"file-upload\" class=\"custom-file-upload\">\n                  Custom Upload\n              </label>\n              <div class=\"file-field\">\n                  <div class=\"btn btn-primary btn-sm float-left\">\n                      <span>Choose file</span>\n                      <input type=\"file\">\n                  </div>\n                  <div class=\"file-path-wrapper\">\n                      <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload your file\">\n                  </div>\n              </div>\n              <input id=\"file-upload\"style=\"width:200px\" size=\"60\" value=\"upload\" type=\"file\"/>\n              <input id=\"photo\" type=\"file\" /> \n            </div>\n            </div> -->\n         \n  \n  \n  \n  \n          <button mat-raised-button type=\"reset\" color=\"primary\" type=\"submit\" class=\"login register_margin\" [disabled]=\"userForm.invalid\" (click)=\"signUp()\">REGISTER</button>\n       \n        </form>\n  \n      </mat-card-content>\n      <div style=\"text-align: center;\">\n        <button mat-raised-button color=\"primary\" class=\"login register_margin\" (click)=\"movetologin()\">Back to LoginPage</button>                \n      </div>\n  \n    </mat-card>\n   \n    \n  </div>\n  <!-- <div fxLayout=\"column\" fxFlexFill fxLayoutAlign=\"center center\" style=\"background-color:whitesmoke\">\n    \n    <mat-card>\n      <div>\n        <mat-card-title>\n            <div class=\"opticvision\">\n              <img src=\"assets/camera.png\" width=\"30px\"> \n              <span>ptic Visions</span>\n            </div>\n          </mat-card-title>\n          <mat-card-content>\n              <form class=\"example-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" (submit)=\"loginUser($event)\" #userForm=\"ngForm\">\n                  <mat-form-field class=\"form_bottom\">\n                      <input matInput placeholder=\"Email\" #email=\"ngModel\"  [ngModel]=\"emailname\"  name =\"email\" required>\n                    \n                      </mat-form-field>\n                    <span style=\"color:red\" *ngIf=\"email.touched && !email.valid\">\n                    <div *ngIf=\"email.errors.required\">Email is Required</div>\n              \n                    </span>\n                  <mat-form-field class=\"form_bottom\">\n                    <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" #password1=\"ngModel\" [ngModel]=\"passwordname\" required>\n                      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon> \n                    </mat-form-field>\n                    <span style=\"color:red\" *ngIf=\"password1.touched && !password1.valid\">\n                      <div *ngIf=\"password1.errors.required\">Password is Required</div>\n                \n                      </span>\n                <button mat-raised-button color=\"primary\" type=\"submit\" class=\"login\" [disabled]=\"userForm.invalid\">Log In</button>\n              </form>\n              <div style=\"text-align:right\">\n                  <h3><a  class=\"redirect\" [routerLink]=\"['/register']\">Signup For Admin</a></h3>\n              </div>\n              \n            </mat-card-content>\n          </div>\n    </mat-card>\n    \n  </div>\n       -->\n  \n  \n  \n  \n  \n  <!-- <div fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"center\" style=\"background-color:#677069;\">\n  \n          <div class=\" mat-elevation-z4\" >\n              <mat-card class=\"card\">\n                  <mat-card-title>\n                    <h2>SIGN IN</h2>\n                  </mat-card-title>\n                  <mat-card-content>\n                      <form fxLayout=\"column\" fxLayoutAlign=\"start stretch\" (submit)=\"loginUser($event)\" #userForm=\"ngForm\">\n                          <mat-form-field>\n                              <input matInput placeholder=\"Enter your email\" #email=\"ngModel\"  [ngModel]=\"emailname\"  name =\"email\" required>\n                            \n                              </mat-form-field>\n                            <span style=\"color:red\" *ngIf=\"email.touched && !email.valid\">\n                            <div *ngIf=\"email.errors.required\">Email is Required</div>\n                      \n                            </span>\n                        <mat-form-field>\n                            <input matInput placeholder=\"Enter your password\" type=\"password\" name=\"password\" #password1=\"ngModel\" [ngModel]=\"passwordname\" required>\n                             <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                            </mat-form-field>\n                            <span style=\"color:red\" *ngIf=\"password1.touched && !password1.valid\">\n                              <div *ngIf=\"password1.errors.required\">Password is Required</div>\n                        \n                              </span>\n                        <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"userForm.invalid\">log in</button>\n                      </form>\n                    </mat-card-content>\n                    <a class=\"redirect\" [routerLink]=\"['/register']\">Register an account</a>\n                  </mat-card>\n            \n  \n    </div>\n  \n  </div> -->\n\n\n<!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"background-color:#e0e0e0;\">\n\n  <mat-card fxFlex=\"50\" class=\"mat-elevation-z4 visionheight\">\n    <mat-card-title style=\"text-align:center\" class=\"opticvision\">\n\n      <img src=\"assets/camera.png\" width=\"50px\">\n      <span>ptic Visions</span>\n\n    </mat-card-title>\n    <mat-card-content class=\"opticvision_1\">\n      <div class=\"backgroundcolor\">\n        <h3 style=\"text-align:center; padding: 5px;\">Sign Up For Admin</h3>\n      </div>\n\n      <form  [formGroup]=\"Registeration\" class=\"example-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\"\n        #userForm=\"ngForm\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\n          <div fxFlex=\"50\" class=\"example-container\">\n            <mat-form-field>\n              <input matInput placeholder=\"CompanyName\" #companyname=\"ngModel\" [ngModel]=\"companyName\" name=\"companyname\"\n                required>\n\n            </mat-form-field>\n            <span style=\"color:red\" *ngIf=\"companyname.touched && !companyname.valid\">\n                <div *ngIf=\"companyname.errors.required\">CompanyName is Required</div>\n  \n              </span>\n          </div>\n          <div fxFlex=\"50\" class=\"example-container\">\n            <mat-form-field>\n              <input matInput placeholder=\"Tin Number\" #tinnumber=\"ngModel\" [ngModel]=\"tinNumber\" name=\"tinnumber\"\n                required>\n\n            </mat-form-field>\n            <span style=\"color:red\" *ngIf=\"tinnumber.touched && !tinnumber.valid\">\n                <div *ngIf=\"tinnumber.errors.required\">Tin.No is Required</div>\n  \n              </span>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\n          <div fxFlex=\"50\" class=\"example-container\">\n            <mat-form-field class=\"example-container\" fxFlex=\"100\">\n              <input matInput placeholder=\"UserName\" #userName=\"ngModel\" [ngModel]=\"username\" name=\"username\"\n                required>\n\n            </mat-form-field>\n            <span style=\"color:red\" *ngIf=\"userName.touched && !userName.valid\">\n              <div *ngIf=\"userName.errors.required\">FirstName is Required</div>\n\n            </span>\n          </div>\n          <div fxFlex=\"50\" class=\"example-container\">\n              <mat-form-field>\n                <input matInput placeholder=\"Email\" #email=\"ngModel\" [ngModel]=\"emailname\" name=\"email\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n                  required>\n  \n              </mat-form-field>\n              <span style=\"color:red\" *ngIf=\"email.touched && !email.valid\">\n                <div *ngIf=\"email.errors.required\">Email is Required</div>\n                <div *ngIf=\"email.errors.pattern\">Not a Valid Email</div>\n              </span>\n            </div>\n        \n        </div>\n       \n\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\n            <div fxFlex=\"50\" class=\"example-container\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" #password1=\"ngModel\" [ngModel]=\"passwordname\"\n                    required>\n                  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>  \n                </mat-form-field>\n                <span style=\"color:red\" *ngIf=\"password1.touched && !password1.valid\">\n                  <div *ngIf=\"password1.errors.required\">Password is Required</div>\n    \n                </span>\n              </div>\n          <div fxFlex=\"50\" class=\"example-container\">\n              <mat-form-field class=\"example-container\" fxFlex=\"100\">\n                <input matInput placeholder=\"ConfirmPassword\" #cnfPassword=\"ngModel\" [ngModel]=\"cnfpassword\" name=\"cnfpassword\" required>\n  \n              </mat-form-field>\n              <span style=\"color:red\" *ngIf=\"cnfPassword.touched && !cnfPassword.valid\">\n                <div *ngIf=\"cnfPassword.errors.required\">LastName is Required</div>\n              </span>\n            </div>\n         \n        </div>\n\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\n          <div fxFlex=\"50\" class=\"example-container\">\n            <mat-form-field class=\"example-container\" fxFlex=\"100\">\n              \n              <input matInput placeholder=\"Address\" #address=\"ngModel\" [ngModel]=\"Address\" name=\"address\"\n                required>\n\n            </mat-form-field>\n            <span style=\"color:red\" *ngIf=\"address.touched && !address.valid\">\n                <div *ngIf=\"address.errors.required\">Address is Required</div>\n  \n              </span>\n          </div>\n          <div fxFlex=\"50\" class=\"example-container\">\n            <mat-form-field class=\"example-container\" fxFlex=\"100\">\n              <input matInput placeholder=\"Phone Number\" #phonenumber=\"ngModel\" [ngModel]=\"Phonenumber\" name=\"phonenumber\"\n                required>\n\n            </mat-form-field>\n            <span style=\"color:red\" *ngIf=\"phonenumber.touched && !phonenumber.valid\">\n                <div *ngIf=\"phonenumber.errors.required\">Phone Number is Required</div>\n  \n              </span>\n          </div>\n        </div>\n\n\n\n\n        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"login\" [disabled]=\"userForm.invalid\" (click)=\"signUp()\">REGISTER</button>\n\n      </form>\n\n    </mat-card-content>\n\n\n  </mat-card>\n</div>\n <div fxLayout=\"column\" fxFlexFill fxLayoutAlign=\"center center\" style=\"background-color:whitesmoke\">\n\t\n\t<mat-card>\n\t\t<div>\n\t\t\t<mat-card-title>\n\t\t\t\t\t<div class=\"opticvision\">\n\t\t\t\t\t\t<img src=\"assets/camera.png\" width=\"30px\"> \n\t\t\t\t\t\t<span>ptic Visions</span>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-card-title>\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t<form class=\"example-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" (submit)=\"loginUser($event)\" #userForm=\"ngForm\">\n\t\t\t\t\t\t\t\t<mat-form-field class=\"form_bottom\">\n\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Email\" #email=\"ngModel\"  [ngModel]=\"emailname\"  name =\"email\" required>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t\t\t<span style=\"color:red\" *ngIf=\"email.touched && !email.valid\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"email.errors.required\">Email is Required</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<mat-form-field class=\"form_bottom\">\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Password\" type=\"password\" name=\"password\" #password1=\"ngModel\" [ngModel]=\"passwordname\" required>\n\t\t\t\t\t\t\t\t\t  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon> \n\t\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t\t  <span style=\"color:red\" *ngIf=\"password1.touched && !password1.valid\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"password1.errors.required\">Password is Required</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\" class=\"login\" [disabled]=\"userForm.invalid\">Log In</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<div style=\"text-align:right\">\n\t\t\t\t\t\t\t\t<h3><a  class=\"redirect\" [routerLink]=\"['/register']\">Signup For Admin</a></h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t</div>\n\t</mat-card>\n\t\n</div>\n\t\t -->\n\n\n\n\n\n<!-- <div fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"center\" style=\"background-color:#677069;\">\n\n\t\t\t\t<div class=\" mat-elevation-z4\" >\n\t\t\t\t\t\t<mat-card class=\"card\">\n\t\t\t\t\t\t\t\t<mat-card-title>\n\t\t\t\t\t\t\t\t\t<h2>SIGN IN</h2>\n\t\t\t\t\t\t\t\t</mat-card-title>\n\t\t\t\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t\t\t\t\t<form fxLayout=\"column\" fxLayoutAlign=\"start stretch\" (submit)=\"loginUser($event)\" #userForm=\"ngForm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter your email\" #email=\"ngModel\"  [ngModel]=\"emailname\"  name =\"email\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"color:red\" *ngIf=\"email.touched && !email.valid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"email.errors.required\">Email is Required</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter your password\" type=\"password\" name=\"password\" #password1=\"ngModel\" [ngModel]=\"passwordname\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t  <span style=\"color:red\" *ngIf=\"password1.touched && !password1.valid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"password1.errors.required\">Password is Required</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"userForm.invalid\">log in</button>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t\t\t\t\t<a class=\"redirect\" [routerLink]=\"['/register']\">Register an account</a>\n\t\t\t\t\t\t\t\t</mat-card>\n\t        \n\n\t</div>\n\n</div> --> "

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n  font-family: -webkit-body; }\n\n.forget {\n  color: dodgerblue;\n  text-align: right; }\n\n.opticvision {\n  font-size: 50px;\n  font-family: -webkit-body; }\n\n.opticvision span {\n  color: dodgerblue; }\n\ndiv > span {\n  font-size: 0.75rem;\n  color: firebrick; }\n\n.is-invalid {\n  font-size: 0.75rem;\n  color: firebrick; }\n\n.form_bottom {\n  margin: 20px 0px; }\n\n.visionheight {\n  background-color: #ffffff; }\n\n.cursor {\n  cursor: pointer; }\n\n@media only screen and (min-width: 1281px) {\n  .opticvision_1 {\n    font-size: 18px;\n    font-family: -webkit-body; } }\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-validators/custom-validator */ "./src/app/custom-validators/custom-validator.ts");
/* harmony import */ var _services_signup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/signup.service */ "./src/app/services/signup.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = /** @class */ (function () {
    //RegistrationForm: FormBuilder;
    function RegisterComponent(router, elem, fb, signupservice, snackbar, cd) {
        this.router = router;
        this.elem = elem;
        this.fb = fb;
        this.signupservice = signupservice;
        this.snackbar = snackbar;
        this.cd = cd;
        this.email = "^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$";
        this.hide = true;
        this.account_validation_messages = _custom_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__["account_validation_messages"];
        this.selectedfile = null;
        this.isLoadingResults = false;
        this.RegistrationForm = this.fb.group({
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tinNumber: [''],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z_ ]*$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ])
            ],
            //   cnfPassword: ['',Validators.compose([
            //     Validators.required,
            //     passValidator
            //  ])],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$') //this is for the number with  validation
                ])],
        });
        // this.Registeration = new FormGroup({
        //   companyName: new FormControl(null, Validators.required),
        //   tinNumber: new FormControl(null, Validators.required),
        //   userName: new FormControl(null, Validators.required),
        //   email: new FormControl(null, Validators.email),
        //   password: new FormControl(null, Validators.required),
        //   cnfPassword: new FormControl(null, this.passValidator),
        //   address: new FormControl(null, Validators.required),
        //   phoneNumber: new FormControl(null, Validators.required)
        // });
        // this.Registeration.controls.password.valueChanges
        //   .subscribe(
        //     x => this.Registeration.controls.cnfPassword.updateValueAndValidity()
        //   );
    }
    RegisterComponent.prototype.ngOnInit = function () {
        ;
        (function (document, window, index) {
            var inputs = document.querySelectorAll('.inputfile');
            Array.prototype.forEach.call(inputs, function (input) {
                var label = input.nextElementSibling, labelVal = label.innerHTML;
                input.addEventListener('change', function (e) {
                    var fileName = '';
                    if (this.files && this.files.length > 1)
                        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                    else
                        fileName = e.target.value.split('\\').pop();
                    if (fileName)
                        label.querySelector('span').innerHTML = fileName;
                    else
                        label.innerHTML = labelVal;
                });
                // Firefox bug fix
                input.addEventListener('focus', function () { input.classList.add('has-focus'); });
                input.addEventListener('blur', function () { input.classList.remove('has-focus'); });
            });
        }(document, window, 0));
    };
    RegisterComponent.prototype.onFileChange = function (event) {
        // let count=<File>event.target.files
        this.styleOne = true;
        this.countfilelength = event.target.files.length;
        this.selectedfile = event.target.files[0];
        // console.log(this.selectedFile)
        // let inputEl: HTMLInputElement = this.elem.nativeElement.querySelector('#file-7');
        // console.log(inputEl.files.item(0));
        // this.RegistrationForm.getValue('photo').value
        // const reader = new FileReader();
        // if(event.target.files && event.target.files.length) {
        //   const [file] = event.target.files;
        //   reader.readAsDataURL(file);
        //   reader.onload = () => {
        //     this.RegistrationForm.patchValue({
        //       file: reader.result
        //    });
        //     // need to run CD since file load runs outside of zone
        //     this.cd.markForCheck();
        //   };
        // }
    };
    RegisterComponent.prototype.signUp = function () {
        var _this = this;
        var formData = new FormData();
        this.isLoadingResults = true;
        //   formData.append('avatar', this.selectedfile);
        formData.append('companyName', this.RegistrationForm.value.companyName);
        formData.append('tin', this.RegistrationForm.value.tinNumber);
        formData.append('userName', this.RegistrationForm.value.userName);
        formData.append('email', this.RegistrationForm.value.email);
        formData.append('password', this.RegistrationForm.value.password);
        formData.append('address', this.RegistrationForm.value.address);
        formData.append('phoneNumber', this.RegistrationForm.value.phoneNumber);
        this.signupservice.submitRegister(formData)
            .subscribe(function (response) {
            _this.isLoadingResults = false;
            _this.styleOne = false;
            // this.RegistrationForm.reset(true);
            //  this.selectedfile=null;
            _this.snackbar.open("Registration Success", "Success", {
                duration: 2000,
            });
            _this.router.navigate(['/login']);
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"]) {
                _this.isLoadingResults = false;
                _this.snackbar.open(err.error.error, 'Alert', {
                    duration: 3000
                });
            }
        }, function () {
            _this.isLoadingResults = false;
        });
    };
    RegisterComponent.prototype.movetologin = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_signup_service__WEBPACK_IMPORTED_MODULE_4__["SignupService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
];
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appRoutes),
            ],
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map