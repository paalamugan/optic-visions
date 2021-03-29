(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/models/admin.ts":
/*!*********************************!*\
  !*** ./src/app/models/admin.ts ***!
  \*********************************/
/*! exports provided: Admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return Admin; });
var Admin = /** @class */ (function () {
    function Admin(username, avatar, Identifier, companyname, companyId, company, Identifier_User) {
        this.username = username;
        this.avatar = avatar;
        this.Identifier = Identifier;
        this.companyname = companyname;
        this.companyId = companyId;
        this.company = company;
        this.Identifier_User = Identifier_User;
    }
    return Admin;
}());



/***/ }),

/***/ "./src/app/models/companysignup.ts":
/*!*****************************************!*\
  !*** ./src/app/models/companysignup.ts ***!
  \*****************************************/
/*! exports provided: CompanySignup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanySignup", function() { return CompanySignup; });
var CompanySignup = /** @class */ (function () {
    function CompanySignup(uuid, companyname, customid, tin, username, email, password, address, phonenumber, userImage) {
        this.uuid = uuid;
        this.companyname = companyname;
        this.customid = customid;
        this.tin = tin;
        this.username = username;
        this.email = email;
        this.password = password;
        this.address = address;
        this.phonenumber = phonenumber;
        this.userImage = userImage;
    }
    return CompanySignup;
}());



/***/ }),

/***/ "./src/app/profile/admin-profile/admin-profile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/profile/admin-profile/admin-profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\n          <div fxFlex=\"30\">\n              <div class=\"card card-profile\">\n                  <div class=\"card-avatar\">\n                     \n                          <img class=\"img\" [src]=\"'assets/images/avatar.png' \"/>\n                     \n                  </div>\n                  <div class=\"card-body\">\n                      <h6 class=\"card-category text-gray\">Owner \\ {{profile?.Identifier | uppercase}}</h6>\n                      <h4 class=\"card-title\">{{profile?.userName | uppercase}}</h4>\n                      <p class=\"card-description\">\n                          <span style=\"font-weight: bold;\">{{profile?.companyName | uppercase}}</span> is the Optical Vision Inc offers a collection of frames, both sun- and ophthalmic. Offering many different styles from a classic look to modern day styles...\n                      </p>\n                  </div>\n              </div>\n          </div>\n          <div fxFlex=\"70\" [hidden]=\"adminshow_1\" style=\"position: sticky; width: 100%;\" fxFlex.xs=\"100\" fxLayout.xs=\"column\">\n            <div class=\"card\">\n                <div class=\"card-header card-header-danger\">\n                    <h4 class=\"card-title\">{{profiledetails}}</h4>\n                </div>\n                <div class=\"card-body\">\n                    <form>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                            <div fxFlex=\"30\">\n                                <label class=\"example-margin\">Company Name:</label>\n                              </div>\n                              <div fxFlex=\"50\">\n                                 \n                                      <label class=\"example-full-width\" style=\"padding-top: 26px;\">{{profile.company.companyName}}</label>\n                                 \n                                \n                                 \n                               \n                                  </div>\n                               \n                                  </div>\n                                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                      <div fxFlex=\"30\">\n                                          <label class=\"example-margin\">UserName:</label>\n                                        </div>\n                                        <div fxFlex=\"50\">\n                            <label class=\"example-full-width\" style=\"padding-top: 26px;\">{{profile.company.userName}}</label>\n                               \n                      \n                              \n                              </div>\n                              </div>\n                              <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                  <div fxFlex=\"30\">\n                                      <label class=\"example-margin\">Tin:</label>\n                                    </div>\n                                    <div fxFlex=\"50\">\n                             \n                                 <label class=\"example-full-width\" style=\"padding-top: 26px;\">{{profile.company.tin}}</label>\n                              \n                               \n                        \n                               \n                            \n                           </div>\n                           </div>\n                         \n                              \n                              <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                  <div fxFlex=\"30\">\n                                      <label class=\"example-margin\">Email:</label>\n                                    </div>\n                                    <div fxFlex=\"50\">\n                                      <label class=\"example-full-width\" style=\"padding-top: 26px;\">{{profile.company.email}}</label>\n                              \n                             \n                              </div>\n                              </div>\n                              <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                  <div fxFlex=\"30\">\n                                      <label class=\"example-margin\">Address:</label>\n                                    </div>\n                                    <div fxFlex=\"50\">\n                                      <label class=\"example-full-width\" style=\"padding-top: 26px;\">{{profile.company.address}}</label>\n                             \n                              \n                                </div>\n                                </div>\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                    <div fxFlex=\"30\">\n                                        <label class=\"example-margin\">Phone Number:</label>\n                                      </div>\n                                      <div fxFlex=\"50\">\n                                          <label class=\"example-full-width\" style=\"padding-top: 26px;\">{{profile.company.phoneNumber}}</label>\n                               \n                                 \n                                  </div>\n                              </div>\n                              <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                <div fxFlex=\"30\">\n                                  </div>\n                                  <div fxFlex=\"50\">\n                                    <button mat-raised-button type=\"submit\" style=\"margin: 0px 10px 5px 0px;\" color=\"primary\" (click)=\"editProfile()\">Edit Profile</button>\n                                    <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"deleteProfile()\">Delete Profile</button>\n                           \n                             \n                              </div>\n                          </div>\n                             \n                              \n                       \n                    </form>\n                </div>\n            </div>\n        </div>\n       \n          <div fxFlex=\"70\" [hidden]=\"adminshow_2\" style=\"position: sticky; width: 100%;\" fxFlex.xs=\"100\" fxLayout.xs=\"column\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title\">{{profiledetails}}</h4>\n                       <p class=\"card-category\">Complete your profile</p> \n                  </div>\n                  <div class=\"card-body\">\n                      <form #userForm=\"ngForm\">\n                          <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayout.xs=\"column\" >\n                              <div fxFlex=\"40\" class=\"example-container\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Company Name\" type=\"text\" name=\"companyname\" #companyName=\"ngModel\" [(ngModel)]=\"currentCompany.companyName\" required>\n                                  </mat-form-field>\n                                  <mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"companyName.touched && !companyName.valid\">\n                                      <mat-error *ngIf=\"companyName.errors.required\">Company Name is Required</mat-error>\n                                \n                                      </mat-error>\n                              </div>\n                             \n                              <div fxFlex=\"40\" class=\"example-container\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"User Name\" type=\"text\" name=\"username\" #userName=\"ngModel\" [(ngModel)]=\"currentCompany.userName\" required>\n                                  </mat-form-field>\n                                  <mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"userName.touched && !userName.valid\">\n                                      <mat-error *ngIf=\"userName.errors.required\">User Name is Required</mat-error>\n                                \n                                      </mat-error>\n                              </div>\n                              <div fxFlex=\"20\" class=\"example-container\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Tin Number\" type=\"text\" name=\"tin\" [(ngModel)]=\"currentCompany.tin\">\n                                  </mat-form-field>\n                              </div>\n                          </div>\n                          <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayout.xs=\"column\">\n                              <div fxFlex=\"40\" class=\"example-container\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Email Address\" type=\"email\" name=\"email\" #Email=\"ngModel\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" [(ngModel)]=\"currentCompany.email\" required>\n                                 \n                                </mat-form-field>\n                                <mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"Email.touched && !Email.valid\">\n                                    <mat-error *ngIf=\"Email.errors.required\">Email is Required</mat-error>\n                                    <mat-error *ngIf=\"Email.errors.pattern\">Not Valid Email</mat-error>\n                              </mat-error>\n                              </div>\n                              <div fxFlex=\"60\"  class=\"example-container\">\n                              <div fxLayout.xs=\"row\" fxLayoutGap=\"10px\">\n                              <div fxFlex=\"60\" fxFlex.xs=\"50\" class=\"example-container\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Password\" (keyup)=\"passwordtextchanged($event)\" [type]=\"hide ? 'password' : 'text'\" name=\"password\" [(ngModel)]=\"currentCompany.password\" [disabled]=\"passwordDisabled\" required>\n                                  <mat-icon class=\"cursor\" [hidden]=\"eyeicon\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon> \n                                </mat-form-field>\n                                <mat-error *ngIf=\"password_error\" class=\"error-message mat-body-1 center-align\">\n                                   Password is Required\n                              </mat-error>\n                              </div>\n                              <div fxFlex=\"40\" fxFlex.xs=\"50\" class=\"example-container\">\n                                  \n                                      <button mat-raised-button color=\"primary\" class=\"mat-subheading-2 button-style\" (click)=\"OnChangePassword()\">Change Password</button>\n                                \n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayout.xs=\"column\">\n                              <div fxFlex=\"50\" class=\"example-container\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Address\" type=\"text\" name=\"address\" [(ngModel)]=\"currentCompany.address\" #Address=\"ngModel\" required>\n                                </mat-form-field>\n                                <mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"Address.touched && !Address.valid\">\n                                    <mat-error *ngIf=\"Address.errors.required\">Address is Required</mat-error>\n                              </mat-error>\n                              </div>\n                              <div fxFlex=\"50\" class=\"example-container\">\n                                  <mat-form-field class=\"example-full-width\">\n                                      <span matPrefix>+91 &nbsp;</span>\n                                    <input matInput placeholder=\"Phone Number\" type=\"tel\" name=\"phonenumber\" maxlength=\"10\" [(ngModel)]=\"currentCompany.phoneNumber\" #phoneNumber=\"ngModel\" required>\n                                    <mat-icon matSuffix>mode_edit</mat-icon>\n                                  </mat-form-field>\n                                  <mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"phoneNumber.touched && !phoneNumber.valid\">\n                                      <mat-error *ngIf=\"phoneNumber.errors.required\">phoneNumber is Required</mat-error>\n                                </mat-error>\n                                </div>\n                          </div>\n                          <!-- <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                              <div fxFlex=\"100\" class=\"example-container file_margin\">\n                               \n                                  <input type=\"file\" (change)=\"onFileChange($event)\" name=\"file\" id=\"file\">\n        \n                              </div>\n                          </div> -->\n                          <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                            \n                              <div fxFlex=\"50\">\n                                    <div fxFlex=\"100\">\n                                            <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"UpdateProfile()\" [disabled]=\"userForm.invalid\">Update Profile</button>\n                                    </div>\n                                    <div fxFlex=\"100\">\n                                            <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"back()\">Back</button>\n                                    </div>\n                       \n                         \n                          </div>\n                          \n                      </div>\n                         \n                          <div class=\"clearfix\"></div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n         \n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/admin-profile/admin-profile.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/profile/admin-profile/admin-profile.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  margin-top: 10px;\n  padding: 30px 15px;\n  min-height: calc(100vh - 123px); }\n\n.card {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14); }\n\n.card {\n  border: 0;\n  margin-bottom: 30px;\n  margin-top: 30px;\n  border-radius: 6px;\n  color: #333333;\n  background: #fff;\n  width: 100%;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid #eeeeee;\n  border-radius: 0.25rem; }\n\n.card {\n  font-size: .875rem; }\n\n.card [class*=\"card-header-\"]:not(.card-header-icon):not(.card-header-text):not(.card-header-image) {\n  border-radius: 3px;\n  margin-top: 0px;\n  padding: 15px; }\n\n.card .card-header-danger .card-icon, .card .card-header-danger .card-text, .card .card-header-danger:not(.card-header-icon):not(.card-header-text), .card.bg-danger, .card.card-rotate.bg-danger .front, .card.card-rotate.bg-danger .back {\n  background: linear-gradient(60deg, #2196f3, #42a5f5); }\n\n.card [class*=\"card-header-\"] {\n  padding: 0;\n  position: relative; }\n\n.card .card-header {\n  z-index: 3 !important; }\n\n.card [class*=\"card-header-\"], .card[class*=\"bg-\"] {\n  color: #fff; }\n\n.card .card-header {\n  border-bottom: none;\n  background: transparent; }\n\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #fff;\n  border-bottom: 1px solid #eeeeee; }\n\n.card .card-header .card-title {\n  margin-bottom: 3px; }\n\n.card [class*=\"card-header-\"] .card-title a, .card [class*=\"card-header-\"] .card-title, .card [class*=\"card-header-\"] .icon i, .card[class*=\"bg-\"] .card-title a, .card[class*=\"bg-\"] .card-title, .card[class*=\"bg-\"] .icon i {\n  color: #fff; }\n\n.card .card-title {\n  margin-top: 0;\n  margin-bottom: 15px; }\n\n.card .card-title {\n  margin-top: 0.625rem; }\n\n.title, .title a, .card-title, .card-title a, .info-title, .info-title a, .footer-brand, .footer-brand a, .footer-big h5, .footer-big h5 a, .footer-big h4, .footer-big h4 a, .media .media-heading, .media .media-heading a {\n  color: #3C4858;\n  text-decoration: none; }\n\nh4, .h4 {\n  font-size: 1.125rem;\n  line-height: 1.4em;\n  font-weight: 300; }\n\n.card [class*=\"card-header-\"] .card-title + .card-category {\n  color: rgba(255, 255, 255, 0.62); }\n\n.card .card-header .card-category {\n  margin: 0; }\n\n.card-profile {\n  margin-top: 30px;\n  text-align: center; }\n\n.card-profile .card-avatar {\n  max-width: 154px;\n  max-height: 154px; }\n\n.card-profile .card-avatar {\n  margin: -50px auto 0;\n  border-radius: 50%;\n  overflow: hidden;\n  padding: 0;\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); }\n\n.card-profile .card-avatar img {\n  width: 100%;\n  height: auto;\n  background: white; }\n\n.card-profile .card-avatar + .card-body {\n  margin-top: 15px; }\n\n.card .card-body {\n  padding: 0.9375rem 20px;\n  position: relative; }\n\n.card .card-category {\n  margin-top: 10px; }\n\n.text-gray {\n  color: #999999 !important; }\n\nh6, .h6 {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  font-weight: 500; }\n\n.card .card-title {\n  margin-top: 0;\n  margin-bottom: 15px; }\n\n.card-description {\n  color: #999999; }\n\n.file_margin {\n  margin: 12px 0px;\n  border-bottom: 1px #9a9797 solid;\n  padding: 0px 0px 5px 0px; }\n"

/***/ }),

/***/ "./src/app/profile/admin-profile/admin-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/profile/admin-profile/admin-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfileComponent", function() { return AdminProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_models_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/admin */ "./src/app/models/admin.ts");
/* harmony import */ var src_app_models_companysignup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/companysignup */ "./src/app/models/companysignup.ts");
/* harmony import */ var src_app_services_signup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/signup.service */ "./src/app/services/signup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminProfileComponent = /** @class */ (function () {
    function AdminProfileComponent(signupService, loginservice, router, snackBar) {
        this.signupService = signupService;
        this.loginservice = loginservice;
        this.router = router;
        this.snackBar = snackBar;
        this.company = new src_app_models_companysignup__WEBPACK_IMPORTED_MODULE_3__["CompanySignup"]('', '', 1, '', '', '', '', '', '', '');
        this.currentCompany = new src_app_models_companysignup__WEBPACK_IMPORTED_MODULE_3__["CompanySignup"]('', '', 1, '', '', '', '', '', '', '');
        this.profile = new src_app_models_admin__WEBPACK_IMPORTED_MODULE_2__["Admin"]('', '', '', '', '', this.company, '');
        this.hide = true;
        this.eyeicon = true;
        this.profiledetails = "Admin Profile Details";
        this.passwordDisabled = true;
        this.adminshow_1 = false;
        this.adminshow_2 = true;
        this.selectedfile = null;
        this.password_error = false;
    }
    AdminProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginservice.getUserName().subscribe(function (data) {
            if (data.Identifier === "admin") {
                _this.Identifier = data.Identifier;
                _this.profile = data;
                _this.currentpassword = _this.profile.company.password;
            }
            else {
                _this.router.navigateByUrl('login');
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
            }
        });
    };
    AdminProfileComponent.prototype.editProfile = function () {
        var _this = this;
        this.signupService.getOne(this.profile.company).subscribe(function (resultData) {
            _this.currentCompany = resultData;
            _this.adminshow_2 = false;
            _this.adminshow_1 = true;
            _this.profiledetails = "Edit Profile Details";
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpErrorResponse"]) {
                if (err.status == 300 || err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
            }
        });
    };
    AdminProfileComponent.prototype.OnChangePassword = function () {
        this.passwordDisabled = !this.passwordDisabled;
        if (this.passwordDisabled == true) {
            this.currentCompany.password = this.currentpassword;
            this.eyeicon = true;
            this.password_error = false;
        }
        else {
            this.currentCompany.password = "";
            this.eyeicon = false;
            this.password_error = true;
        }
    };
    AdminProfileComponent.prototype.passwordtextchanged = function (event) {
        if (this.currentCompany.password === "") {
            this.password_error = true;
        }
        else {
            this.password_error = false;
        }
    };
    AdminProfileComponent.prototype.onFileChange = function (event) {
        this.countfilelength = event.target.files.length;
        this.selectedfile = event.target.files[0];
    };
    AdminProfileComponent.prototype.UpdateProfile = function () {
        var _this = this;
        this.signupService.UpdateCompany(this.currentCompany).subscribe(function (resultData) {
            _this.router.navigateByUrl('login');
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpErrorResponse"]) {
                if (err.status == 300 || err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
            }
        });
    };
    AdminProfileComponent.prototype.back = function () {
        this.adminshow_2 = true;
        this.adminshow_1 = false;
        this.profiledetails = "Admin Profile Details";
    };
    AdminProfileComponent.prototype.deleteProfile = function () {
        var _this = this;
        if (confirm('Are You Sure to Delete this Company ?') === true) {
            this.signupService.deleteCompany(this.profile.companyId).subscribe(function (data) {
                _this.router.navigateByUrl('login');
            }, function (err) {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpErrorResponse"]) {
                    if (err.status === 401) {
                        _this.router.navigateByUrl('login');
                    }
                }
            });
        }
    };
    AdminProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-profile',
            template: __webpack_require__(/*! ./admin-profile.component.html */ "./src/app/profile/admin-profile/admin-profile.component.html"),
            styles: [__webpack_require__(/*! ./admin-profile.component.scss */ "./src/app/profile/admin-profile/admin-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_signup_service__WEBPACK_IMPORTED_MODULE_4__["SignupService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], AdminProfileComponent);
    return AdminProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/employee-profile/employee-profile.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/profile/employee-profile/employee-profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\n            <div fxFlex=\"30\">\n                <div class=\"card card-profile\">\n                    <div class=\"card-avatar\">\n                       \n                            <img class=\"img\" [src]=\"'assets/images/avatar.png' \"/>\n                       \n                    </div>\n                    <div class=\"card-body\">\n                        <h6 class=\"card-category text-gray\">Worker \\ {{Identifier | uppercase}}</h6>\n                        <h4 class=\"card-title\">{{userName | uppercase}}</h4>\n                        <p class=\"card-description\">\n                            <span style=\"font-weight: bold;\">{{companyName | uppercase}}</span> is the Optical Vision Inc offers a collection of frames, both sun- and ophthalmic. Offering many different styles from a classic look to modern day styles...\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div fxFlex=\"70\" style=\"position: sticky; width: 100%;\" fxFlex.xs=\"100\" fxLayout.xs=\"column\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Employee Details</h4>\n                        <!-- <p class=\"card-category\">Complete your profile</p> -->\n                    </div>\n                    <div class=\"card-body\">\n                        <form #userForm=\"ngForm\">\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                <div fxFlex=\"30\">\n                                    <label class=\"example-margin\">Employee Name:</label>\n                                  </div>\n                                  <div fxFlex=\"50\">\n                                     \n                                          <label class=\"example-full-width\" style=\"padding: 25px 0px 0px 0px;\">{{employee.employeeName}}</label>\n                                     \n                                    \n                                     \n                                   \n                                      </div>\n                                   \n                                      </div>\n                                      <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                          <div fxFlex=\"30\">\n                                              <label class=\"example-margin\">Mobile Number:</label>\n                                            </div>\n                                            <div fxFlex=\"50\">\n                                <label class=\"example-full-width\" style=\"padding: 25px 0px 0px 0px;\">{{employee.mobileNumber}}</label>\n                                   \n                          \n                                  \n                                  </div>\n                                  </div>\n                                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                      <div fxFlex=\"30\">\n                                          <label class=\"example-margin\">Email:</label>\n                                        </div>\n                                        <div fxFlex=\"50\">\n                                 \n                                     <label class=\"example-full-width\" style=\"padding: 25px 0px 0px 0px;\">{{employee.employeeEmail}}</label>\n                                  \n                                   \n                            \n                                   \n                                \n                               </div>\n                               </div>\n                             \n                                  \n                                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                      <div fxFlex=\"30\">\n                                          <label class=\"example-margin\">Address:</label>\n                                        </div>\n                                        <div fxFlex=\"50\">\n                                          <label class=\"example-full-width\" style=\"padding: 25px 0px 0px 0px; word-wrap: break-word;\">{{employee.address}}</label>\n                                  \n                                 \n                                  </div>\n                                  </div>\n                                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                      <div fxFlex=\"30\">\n                                          <label class=\"example-margin\">Date Of Birth:</label>\n                                        </div>\n                                        <div fxFlex=\"50\">\n                                          <label class=\"example-full-width\" style=\"padding: 25px 0px 0px 0px;\">{{employee.DOB}}</label>\n                                 \n                                  \n                                    </div>\n                                    </div>\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                        <div fxFlex=\"30\">\n                                            <label class=\"example-margin\">Date Of Joining:</label>\n                                          </div>\n                                          <div fxFlex=\"50\">\n                                              <label class=\"example-full-width\" style=\"padding: 25px 0px 0px 0px;\">{{employee.DOJ}}</label>\n                                   \n                                     \n                                      </div>\n                                  </div>\n                                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\" required>\n                                    \n                                          <div fxFlex=\"30\">\n                                              <label class=\"example-margin\">Admin Access:</label>\n                                            </div>\n                                          \n                                     \n                                       \n                                        <div fxFlex=\"50\">\n                                            <label class=\"example-full-width\" style=\"padding: 25px 0px 0px 0px;\">{{employee.adminAccess | uppercase}}</label>\n                                       \n                                        </div>\n                                    \n                                    </div>\n                                  \n                            <!-- <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayout.xs=\"column\" >\n                                <div fxFlex=\"40\" class=\"example-container\">\n                                  <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Company Name\" type=\"text\" name=\"companyname\" #companyName=\"ngModel\" [(ngModel)]=\"profile.company.companyname\" required>\n                                    </mat-form-field>\n                                    <mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"companyName.touched && !companyName.valid\">\n                                        <mat-error *ngIf=\"companyName.errors.required\">Company Name is Required</mat-error>\n                                  \n                                        </mat-error>\n                                </div>\n                               \n                                <div fxFlex=\"40\" class=\"example-container\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"User Name\" type=\"text\" name=\"username\" #userName=\"ngModel\" [(ngModel)]=\"profile.company.username\" required>\n                                    </mat-form-field>\n                                    <mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"userName.touched && !userName.valid\">\n                                        <mat-error *ngIf=\"userName.errors.required\">User Name is Required</mat-error>\n                                  \n                                        </mat-error>\n                                </div>\n                                <div fxFlex=\"20\" class=\"example-container\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Tin Number\" type=\"text\" name=\"tin\" [(ngModel)]=\"profile.company.tin\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayout.xs=\"column\">\n                                <div fxFlex=\"40\" class=\"example-container\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Email Address\" type=\"email\" name=\"email\" #Email=\"ngModel\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" [(ngModel)]=\"profile.company.email\" required>\n                                   \n                                  </mat-form-field>\n                                  <mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"Email.touched && !Email.valid\">\n                                      <mat-error *ngIf=\"Email.errors.required\">Email is Required</mat-error>\n                                      <mat-error *ngIf=\"Email.errors.pattern\">Not Valid Email</mat-error>\n                                </mat-error>\n                                </div>\n                                <div fxFlex=\"60\"  class=\"example-container\">\n                                <div fxLayout.xs=\"row\" fxLayoutGap=\"10px\">\n                                <div fxFlex=\"60\" fxFlex.xs=\"50\" class=\"example-container\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" name=\"password\" [(ngModel)]=\"profile.company.password\" #Password=\"ngModel\" [disabled]=\"passwordDisabled\" required>\n                                    <mat-icon class=\"cursor\" [hidden]=\"eyeicon\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon> \n                                  </mat-form-field>\n                                  <mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"Password.touched && !Password.valid\">\n                                      <mat-error *ngIf=\"Password.errors.required\">Password is Required</mat-error>\n                                </mat-error>\n                                </div>\n                                <div fxFlex=\"40\" fxFlex.xs=\"50\" class=\"example-container\">\n                                    \n                                        <button mat-raised-button color=\"primary\" class=\"mat-subheading-2 button-style\" (click)=\"OnChangePassword()\">Change Password</button>\n                                  \n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayout.xs=\"column\">\n                                <div fxFlex=\"50\" class=\"example-container\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Address\" type=\"text\" name=\"address\" [(ngModel)]=\"profile.company.address\" #Address=\"ngModel\" required>\n                                  </mat-form-field>\n                                  <mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"Address.touched && !Address.valid\">\n                                      <mat-error *ngIf=\"Address.errors.required\">Address is Required</mat-error>\n                                </mat-error>\n                                </div>\n                                <div fxFlex=\"50\" class=\"example-container\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <span matPrefix>+91 &nbsp;</span>\n                                      <input matInput placeholder=\"Phone Number\" type=\"tel\" name=\"phonenumber\" maxlength=\"10\" [(ngModel)]=\"profile.company.phonenumber\" #phoneNumber=\"ngModel\" required>\n                                      <mat-icon matSuffix>mode_edit</mat-icon>\n                                    </mat-form-field>\n                                    <mat-error class=\"error-message mat-body-1 center-align\" *ngIf=\"phoneNumber.touched && !phoneNumber.valid\">\n                                        <mat-error *ngIf=\"phoneNumber.errors.required\">phoneNumber is Required</mat-error>\n                                  </mat-error>\n                                  </div>\n                            </div>\n                            <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                                <div fxFlex=\"100\" class=\"example-container file_margin\">\n                                 \n                                    <input type=\"file\" (change)=\"onFileChange($event)\" name=\"file\" id=\"file\">\n          \n                                </div>\n                            </div>\n                           \n                            <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"UpdateProfile()\" [disabled]=\"userForm.invalid\">Update Profile</button>\n                            <div class=\"clearfix\"></div> -->\n                        </form>\n                    </div>\n                </div>\n            </div>\n           \n        </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/profile/employee-profile/employee-profile.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/profile/employee-profile/employee-profile.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  margin-top: 10px;\n  padding: 30px 15px;\n  min-height: calc(100vh - 123px); }\n\n.card {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14); }\n\n.card {\n  border: 0;\n  margin-bottom: 30px;\n  margin-top: 30px;\n  border-radius: 6px;\n  color: #333333;\n  background: #fff;\n  width: 100%;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid #eeeeee;\n  border-radius: 0.25rem; }\n\n.card {\n  font-size: .875rem; }\n\n.card [class*=\"card-header-\"]:not(.card-header-icon):not(.card-header-text):not(.card-header-image) {\n  border-radius: 3px;\n  margin-top: 0px;\n  padding: 15px; }\n\n.card .card-header-danger .card-icon, .card .card-header-danger .card-text, .card .card-header-danger:not(.card-header-icon):not(.card-header-text), .card.bg-danger, .card.card-rotate.bg-danger .front, .card.card-rotate.bg-danger .back {\n  background: linear-gradient(60deg, #2196f3, #42a5f5); }\n\n.card [class*=\"card-header-\"] {\n  padding: 0;\n  position: relative; }\n\n.card .card-header {\n  z-index: 3 !important; }\n\n.card [class*=\"card-header-\"], .card[class*=\"bg-\"] {\n  color: #fff; }\n\n.card .card-header {\n  border-bottom: none;\n  background: transparent; }\n\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #fff;\n  border-bottom: 1px solid #eeeeee; }\n\n.card .card-header .card-title {\n  margin-bottom: 3px; }\n\n.card [class*=\"card-header-\"] .card-title a, .card [class*=\"card-header-\"] .card-title, .card [class*=\"card-header-\"] .icon i, .card[class*=\"bg-\"] .card-title a, .card[class*=\"bg-\"] .card-title, .card[class*=\"bg-\"] .icon i {\n  color: #fff; }\n\n.card .card-title {\n  margin-top: 0;\n  margin-bottom: 15px; }\n\n.card .card-title {\n  margin-top: 0.625rem; }\n\n.title, .title a, .card-title, .card-title a, .info-title, .info-title a, .footer-brand, .footer-brand a, .footer-big h5, .footer-big h5 a, .footer-big h4, .footer-big h4 a, .media .media-heading, .media .media-heading a {\n  color: #3C4858;\n  text-decoration: none; }\n\nh4, .h4 {\n  font-size: 1.125rem;\n  line-height: 1.4em;\n  font-weight: 300; }\n\n.card [class*=\"card-header-\"] .card-title + .card-category {\n  color: rgba(255, 255, 255, 0.62); }\n\n.card .card-header .card-category {\n  margin: 0; }\n\n.card-profile {\n  margin-top: 30px;\n  text-align: center; }\n\n.card-profile .card-avatar {\n  max-width: 154px;\n  max-height: 154px; }\n\n.card-profile .card-avatar {\n  margin: -50px auto 0;\n  border-radius: 50%;\n  overflow: hidden;\n  padding: 0;\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); }\n\n.card-profile .card-avatar img {\n  width: 100%;\n  height: 140px;\n  background: white; }\n\n.card-profile .card-avatar + .card-body {\n  margin-top: 15px; }\n\n.card .card-body {\n  padding: 0.9375rem 20px;\n  position: relative; }\n\n.card .card-category {\n  margin-top: 10px; }\n\n.text-gray {\n  color: #999999 !important; }\n\nh6, .h6 {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  font-weight: 500; }\n\n.card .card-title {\n  margin-top: 0;\n  margin-bottom: 15px; }\n\n.card-description {\n  color: #999999; }\n\n.file_margin {\n  margin: 12px 0px;\n  border-bottom: 1px #9a9797 solid;\n  padding: 0px 0px 5px 0px; }\n\n.mat-form-field {\n  padding-left: 10px; }\n\n.container {\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.form-container {\n  padding: 5px 15px 15px 15px; }\n\n.form-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.button-style {\n  background-color: #327ebd;\n  font-weight: bold; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.example-margin {\n  /* margin: 0 10px; */\n  padding: 26px; }\n\n.center-align {\n  color: red;\n  padding-left: 10px; }\n\n.addempmargin {\n  margin: 10px 0px;\n  font-size: .875rem; }\n\n.inputfile-6 + label span {\n  width: 325px; }\n"

/***/ }),

/***/ "./src/app/profile/employee-profile/employee-profile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/profile/employee-profile/employee-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: EmployeeProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeProfileComponent", function() { return EmployeeProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_employee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/employee */ "./src/app/models/employee.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeProfileComponent = /** @class */ (function () {
    function EmployeeProfileComponent(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
        this.company = null;
        this.doj = new Date();
        this.dob = new Date();
        this.employee = new src_app_models_employee__WEBPACK_IMPORTED_MODULE_3__["Employee"]('', '', '', '', '', '', '', this.doj, this.dob, '', '', '', this.company);
    }
    EmployeeProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginservice.getUserName().subscribe(function (data) {
            if (data.Identifier == "employee" || data.Identifier == "employee-admin") {
                _this.Identifier = data.Identifier;
                _this.userName = data.userName;
                _this.companyName = data.companyName;
                _this.employee = data.employee;
            }
            else {
                _this.router.navigateByUrl('login');
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
            }
        });
    };
    EmployeeProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-profile',
            template: __webpack_require__(/*! ./employee-profile.component.html */ "./src/app/profile/employee-profile/employee-profile.component.html"),
            styles: [__webpack_require__(/*! ./employee-profile.component.scss */ "./src/app/profile/employee-profile/employee-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeeProfileComponent);
    return EmployeeProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.routes */ "./src/app/profile/profile.routes.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-profile/admin-profile.component */ "./src/app/profile/admin-profile/admin-profile.component.ts");
/* harmony import */ var _employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employee-profile/employee-profile.component */ "./src/app/profile/employee-profile/employee-profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _profile_routes__WEBPACK_IMPORTED_MODULE_2__["ProfileRouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]
            ],
            declarations: [_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_10__["AdminProfileComponent"], _employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeProfileComponent"]],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
            entryComponents: []
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.routes.ts ***!
  \*******************************************/
/*! exports provided: ProfileRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRouterModule", function() { return ProfileRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-profile/admin-profile.component */ "./src/app/profile/admin-profile/admin-profile.component.ts");
/* harmony import */ var _employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-profile/employee-profile.component */ "./src/app/profile/employee-profile/employee-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var profileroutes = [
    { path: 'adminprofile', component: _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_3__["AdminProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'employeeprofile', component: _employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeProfileComponent"], canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
];
var ProfileRouterModule = /** @class */ (function () {
    function ProfileRouterModule() {
    }
    ProfileRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(profileroutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ProfileRouterModule);
    return ProfileRouterModule;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map