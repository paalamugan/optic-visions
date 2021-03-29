(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"background-color:#e0e0e0;\">\n\n\t\t<mat-card fxFlex=\"50\"  class=\"mat-elevation-z4 visionheight\">\n      <div class=\"example-loading-shade\" *ngIf=\"isLoading\">\n        <mat-spinner></mat-spinner>\n      </div>\n\n\t\t\t\t<mat-card-title style=\"text-align:center\" class=\"opticvision\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<img src=\"assets/camera.png\" width=\"50px\"> \n\t\t\t\t\t\t\t<span>ptic Visions</span>\n\t\t\t\t\t\t\n\t\t\t\t\t</mat-card-title>\n\t\t\t\t\t<mat-card-content class=\"opticvision_1\">\n\t\t\t\t\t\t\t<mat-tab-group >\n\t\t\t\t\t\t<!-- <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t\t\t\t<div fxFlex=\"20\">\n\t\t\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" class=\"login\" (click)=\"admin()\">Admin</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div fxFlex=\"20\">\n\t\t\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" class=\"login\" (click)=\"employee()\">Employee</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t<mat-tab label=\"Admin\"> \n\t\t\t\t\t\n\t\t\t\t\t\t\t<h3 class=\"heading_1\">ADMIN BLOCK</h3>\n\t\t\t\t\t\t\t\t<form class=\"example-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" #userForm=\"ngForm\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Email\" #adminloginemail=\"ngModel\"  [(ngModel)]=\"adminlogin.email\"  name =\"email\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" required >\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t<mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"adminloginemail.touched && !adminloginemail.valid\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-error  *ngIf=\"adminloginemail.errors.required\">Email is Required</mat-error>\n\t\t\t\t\t\t\t\t\t\t\t<mat-error *ngIf=\"adminloginemail.errors.pattern\">Not a Valid Email</mat-error>\n\t\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" name=\"password\" #adminloginpass=\"ngModel\" [(ngModel)]=\"adminlogin.password\" required>\n\t\t\t\t\t\t\t\t\t\t\t <mat-icon class=\"cursor\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon> \n\t\t\t\t\t\t\t\t\t\t  </mat-form-field>\n\n\t\t\t\t\t\t\t\t\t\t  <mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"adminloginpass.touched && !adminloginpass.valid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error *ngIf=\"adminloginpass.errors.required\">Password is Required</mat-error>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div fxFlexOffset=\"50\" fxFlex=\"50\" class=\"forget\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 style=\"cursor:pointer\" (click)=\"forgetPassword()\">Forget Password?</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\" class=\"login\" (click)=\"loginAdmin($event)\" [disabled]=\"userForm.invalid\">SIGN IN</button>\n\t\t\t\t\t\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<h3 style=\" color: #3f6aa7;\">Or Sign Up For Admin</h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"center stretch\" class=\"example-container\">\n\t\t\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" class=\"login\" [disabled]=\"userForm.valid\" (click)=\"signup()\">Sign Up</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<mat-tab label=\"Employee\"> \n\t\t\t\t\t\t\t\t\t<h3 class=\"heading_1\">EMPLOYEE BLOCK</h3>\n\t\t\t\t\t\t\t\t\t<form class=\"example-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" #userempForm=\"ngForm\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Email\" #employeeloginemail=\"ngModel\"  [(ngModel)]=\"employeelogin.email\"  name =\"email\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" required >\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"employeeloginemail.touched && !employeeloginemail.valid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error *ngIf=\"employeeloginemail.errors.required\">Email is Required</mat-error>\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error *ngIf=\"employeeloginemail.errors.pattern\">Not a Valid Email</mat-error>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" name=\"password\" #employeeloginpass=\"ngModel\" [(ngModel)]=\"employeelogin.password\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t  <mat-icon class=\"cursor\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon> \n\t\t\t\t\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t  <mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"employeeloginpass.touched && !employeeloginpass.valid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-error *ngIf=\"employeeloginpass.errors.required\">Password is Required</mat-error>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div fxLayout=\"row\" fxLayoutAlign=\"start none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div fxFlex=\"50\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div fxFlex=\"50\" class=\"forget\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 style=\"cursor:pointer\">Forget Password?</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\" class=\"login\" (click)=\"loginEmployee()\" [disabled]=\"userempForm.invalid\">SIGN IN</button>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t </mat-tab>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t  </mat-tab-group>\n\t\t\t\t\t\t</mat-card-content>\n\t\t\t\n\t\t\t\n\t\t</mat-card>\n</div>\n<!-- <div fxLayout=\"column\" fxFlexFill fxLayoutAlign=\"center center\" style=\"background-color:whitesmoke\">\n\t\n\t<mat-card>\n\t\t<div>\n\t\t\t<mat-card-title>\n\t\t\t\t\t<div class=\"opticvision\">\n\t\t\t\t\t\t<img src=\"assets/camera.png\" width=\"30px\"> \n\t\t\t\t\t\t<span>ptic Visions</span>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-card-title>\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t<form class=\"example-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" (submit)=\"loginUser($event)\" #userForm=\"ngForm\">\n\t\t\t\t\t\t\t\t<mat-form-field class=\"form_bottom\">\n\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Email\" #email=\"ngModel\"  [ngModel]=\"emailname\"  name =\"email\" required>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t\t\t<span style=\"color:red\" *ngIf=\"email.touched && !email.valid\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"email.errors.required\">Email is Required</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<mat-form-field class=\"form_bottom\">\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Password\" type=\"password\" name=\"password\" #password1=\"ngModel\" [ngModel]=\"passwordname\" required>\n\t\t\t\t\t\t\t\t\t  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon> \n\t\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t\t  <span style=\"color:red\" *ngIf=\"password1.touched && !password1.valid\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"password1.errors.required\">Password is Required</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\" class=\"login\" [disabled]=\"userForm.invalid\">Log In</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<div style=\"text-align:right\">\n\t\t\t\t\t\t\t\t<h3><a  class=\"redirect\" [routerLink]=\"['/register']\">Signup For Admin</a></h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t</div>\n\t</mat-card>\n\t\n</div>\n\t\t -->\n\n\n\n\n\n<!-- <div fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"center\" style=\"background-color:#677069;\">\n\n\t\t\t\t<div class=\" mat-elevation-z4\" >\n\t\t\t\t\t\t<mat-card class=\"card\">\n\t\t\t\t\t\t\t\t<mat-card-title>\n\t\t\t\t\t\t\t\t\t<h2>SIGN IN</h2>\n\t\t\t\t\t\t\t\t</mat-card-title>\n\t\t\t\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t\t\t\t\t<form fxLayout=\"column\" fxLayoutAlign=\"start stretch\" (submit)=\"loginUser($event)\" #userForm=\"ngForm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter your email\" #email=\"ngModel\"  [ngModel]=\"emailname\"  name =\"email\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"color:red\" *ngIf=\"email.touched && !email.valid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"email.errors.required\">Email is Required</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter your password\" type=\"password\" name=\"password\" #password1=\"ngModel\" [ngModel]=\"passwordname\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t  <span style=\"color:red\" *ngIf=\"password1.touched && !password1.valid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"password1.errors.required\">Password is Required</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"userForm.invalid\">log in</button>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t\t\t\t\t<a class=\"redirect\" [routerLink]=\"['/register']\">Register an account</a>\n\t\t\t\t\t\t\t\t</mat-card>\n\t        \n\n\t</div>\n\n</div> -->"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".redirect {\n  color: #607d8b; }\n\n.login {\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n  font-family: -webkit-body; }\n\n.forget {\n  color: dodgerblue;\n  text-align: right; }\n\n.opticvision {\n  font-size: 60px;\n  font-family: -webkit-body; }\n\n.opticvision span {\n  color: dodgerblue; }\n\n.mat-form-field {\n  font-size: 17px; }\n\n.form_bottom {\n  margin: 20px 0px; }\n\n.visionheight {\n  background-color: #ffffff; }\n\n@media only screen and (min-width: 1281px) {\n  .opticvision_1 {\n    font-size: 18px;\n    font-family: -webkit-body; } }\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .opticvision {\n    font-size: 30px;\n    font-family: -webkit-body; } }\n\n.heading_1 {\n  text-align: center;\n  color: #ffffff;\n  background-color: dodgerblue; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/login */ "./src/app/models/login.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginservice, snackBar) {
        this.router = router;
        this.loginservice = loginservice;
        this.snackBar = snackBar;
        this.hide = true;
        this.adminlogin = new _models_login__WEBPACK_IMPORTED_MODULE_2__["AdminLogin"]('', '');
        this.employeelogin = new _models_login__WEBPACK_IMPORTED_MODULE_2__["EmployeeLogin"]('', '');
        this.adminhide = true;
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].isLoggedIn()) {
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.admin = function () {
        this.adminhide = true;
    };
    LoginComponent.prototype.employee = function () {
        this.adminhide = false;
    };
    LoginComponent.prototype.loginAdmin = function () {
        var _this = this;
        this.isLoading = true;
        this.loginservice.adminLogin(this.adminlogin)
            .subscribe(function (res) {
            _this.isLoading = false;
            _this.router.navigate(['/dashboard']);
            localStorage.setItem('token', res.token);
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                if (err.status) {
                    _this.isLoading = false;
                    _this.snackBar.open(err.error, 'Alert', {
                        duration: 3000
                    });
                }
            }
        });
    };
    LoginComponent.prototype.loginEmployee = function () {
        var _this = this;
        this.loginservice.employeeLogin(this.employeelogin)
            .subscribe(function (res) {
            if (res.Identifier === "employee-admin") {
                _this.router.navigate(['/dashboard']);
                localStorage.setItem('token', res.token);
                // localStorage.setItem('Identifier',res.Identifier_User);
            }
            else {
                _this.router.navigate(['/employees']);
                localStorage.setItem('token', res.token);
                // this.auth.setLoggedIn(res.Identifier);
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                if (err.status === 300) {
                    _this.snackBar.open(err.error, 'Alert', {
                        duration: 3000
                    });
                }
            }
        });
    };
    LoginComponent.prototype.signup = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent.prototype.showNotification = function (from, align) {
        var type = ['primary'];
        // const color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Email has been sent to ur mail, Check ur Mail.."
        }, {
            type: type[0],
            timer: 3000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon backgroundcolor" role="alert">' +
                '<i data-notify="dismiss" class="material-icons cursor" style="margin: 8px;">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message" style="position: relative;bottom:6px;">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    LoginComponent.prototype.forgetPassword = function () {
        var _this = this;
        if (this.adminlogin.email != "") {
            this.loginservice.forgetPassword(this.adminlogin)
                .subscribe(function (data) {
                if (data.success === true) {
                    _this.showNotification('top', 'center');
                }
                _this.adminlogin.email = null;
                _this.adminlogin.password = null;
            }, function (err) {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                    if (err.status === 300) {
                        _this.snackBar.open(err.error, 'Alert', {
                            duration: 3000
                        });
                    }
                }
            });
        }
        else {
            this.snackBar.open('Email Field is Not Empty', 'Alert', {
                duration: 3000
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(appRoutes),
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
            providers: []
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/models/login.ts":
/*!*********************************!*\
  !*** ./src/app/models/login.ts ***!
  \*********************************/
/*! exports provided: AdminLogin, EmployeeLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLogin", function() { return AdminLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeLogin", function() { return EmployeeLogin; });
var AdminLogin = /** @class */ (function () {
    function AdminLogin(email, password) {
        this.email = email;
        this.password = password;
    }
    return AdminLogin;
}());

var EmployeeLogin = /** @class */ (function () {
    function EmployeeLogin(email, password) {
        this.email = email;
        this.password = password;
    }
    return EmployeeLogin;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map