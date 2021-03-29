(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employees-employees-module"],{

/***/ "./src/app/employees/add-employees/add-employees.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/employees/add-employees/add-employees.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n    <div fxFlex class=\"form-component-holder mat-elevation-z4\">\n      <mat-toolbar class=\"form-header\">\n        <h1 class=\"mat-headline\"> Add Employee</h1>\n      </mat-toolbar>\n      <div  class=\"addempmargin\" style=\"background-color: white;\">\n  \n        <form fxLayout=\"column\"  class=\"example-container\" #addEmployee=\"ngForm\" >\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n          <div fxFlex=\"20\">\n              <label class=\"example-margin\">Employee Name:</label>\n            </div>\n            <div fxFlex=\"50\">\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"text\" #nameInput=\"matInput\" #nameSelect placeholder=\"EmployeeName\" pattern=\"^[a-zA-Z_ ]*$\" [(ngModel)]=\"employee.employeeName\" name=\"employeeName\" #name=\"ngModel\" required minlength=\"4\">\n                  </mat-form-field>\n              \n                  <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"mat-body-1 center-align\">\n          \n                    <div *ngIf=\"name.errors.required\">\n                      Name is required.\n                    </div>\n                    <div *ngIf=\"name.errors.minlength\">\n                      Name must be at least 4 characters long.\n                    </div>\n                    <div *ngIf=\"name.errors.pattern\">\n                        Name must be a characters long.\n                      </div>\n                  </div>\n               \n             \n                </div>\n             \n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <div fxFlex=\"20\">\n                        <label class=\"example-margin\">Mobile Number:</label>\n                      </div>\n                      <div fxFlex=\"50\">\n          <mat-form-field class=\"example-full-width\">\n              <span matPrefix>+91 &nbsp;</span>\n              <input matInput type=\"tel\" placeholder=\"MobileNumber\" [(ngModel)]=\"employee.mobileNumber\" pattern=\"[0-9]*\" maxlength=\"10\" name=\"mobilenumber\" #mobilenumber=\"ngModel\" required minlength=\"10\">\n              <mat-icon matSuffix>mode_edit</mat-icon>\n            </mat-form-field>\n    \n            <div *ngIf=\"mobilenumber.invalid && (mobilenumber.dirty || mobilenumber.touched)\" class=\"mat-body-1 center-align\">\n    \n              <div *ngIf=\"mobilenumber.errors.required\">\n                Mobile Number is required.\n              </div>\n              <div *ngIf=\"mobilenumber.errors.minlength\">\n                  Mobile Number must be at least 10 characters long.\n              </div>\n              <div *ngIf=\"mobilenumber.errors.pattern\">\n                  Mobile Number is not Valid.\n                </div>\n            </div>\n            </div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <div fxFlex=\"20\">\n                    <label class=\"example-margin\">Email:</label>\n                  </div>\n                  <div fxFlex=\"50\">\n             <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"Email\" [(ngModel)]=\"employee.employeeEmail\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" name=\"employeeEmail\" #email=\"ngModel\" required>\n              </mat-form-field>\n      \n              <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"mat-body-1 center-align\" >\n      \n                <div *ngIf=\"email.errors.required\">\n                  Email is required.\n                </div>\n                <div *ngIf=\"email.errors.pattern\">\n                    Not a Valid Email.\n                  </div>\n              </div> \n          \n         </div>\n         </div>\n         <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n            <div fxFlex=\"20\">\n                <label class=\"example-margin\">Password:</label>\n              </div>\n              <div fxFlex=\"50\">\n            <mat-form-field class=\"example-full-width\">\n               <input matInput placeholder=\"Enter your EmployeePassword\" [(ngModel)]=\"employee.employeePassword\" name=\"password\" #password=\"ngModel\" [type]=\"hide ? 'password' : 'text'\" required>\n               <mat-icon matSuffix  class=\"cursor\" (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n             </mat-form-field>\n             <div  *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"mat-body-1 center-align\">\n      \n              <div *ngIf=\"password.errors.required\">\n                Password is required.\n              </div>\n             \n            </div>\n            </div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <div fxFlex=\"20\">\n                    <label class=\"example-margin\">Address:</label>\n                  </div>\n                  <div fxFlex=\"50\">\n             <mat-form-field class=\"example-full-width\">\n              <textarea matInput type=\"number\" placeholder=\"Address\"  [(ngModel)]=\"employee.address\"  name=\"address\" #address=\"ngModel\" required minlength=\"5\"></textarea>\n            </mat-form-field>\n            <div  *ngIf=\"address.invalid && (address.dirty || address.touched)\" class=\"mat-body-1 center-align\">\n              <div *ngIf=\"address.errors.required\">\n                Address is required.\n              </div>\n              <div *ngIf=\"address.errors.minlength\">\n                Address must be at least 5 characters long.\n              </div>\n          \n            </div>\n            </div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <div fxFlex=\"20\">\n                    <label class=\"example-margin\">Date Of Birth:</label>\n                  </div>\n                  <div fxFlex=\"50\">\n             <mat-form-field class=\"example-full-width\">\n                <input matInput [matDatepicker]=\"picker3\" placeholder=\"D.O.B\" (dateChange)=\"addEvent($event)\" [(ngModel)]=\"employee.DOB\" name=\"dob\" #dob=\"ngModel\" disabled required>\n                <mat-datepicker-toggle matSuffix [for]=\"picker3\" ></mat-datepicker-toggle>\n                <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n              <div  *ngIf=\"dob.invalid && (dob.dirty || dob.touched)\" class=\"mat-body-1 center-align\">\n                  <div *ngIf=\"dob.errors.required\">\n                      Date Of Birth is required.\n                  </div>\n              \n                </div>\n              </div>\n              </div>\n              <div fxLayout=\"row\" [hidden]=\"hiddenDOJ\" fxLayoutAlign=\"start start\">\n                  <div fxFlex=\"20\">\n                      <label class=\"example-margin\">Date Of Joining:</label>\n                    </div>\n                    <div fxFlex=\"50\">\n              <mat-form-field class=\"example-full-width\">\n                  <input matInput [matDatepicker]=\"picker4\" placeholder=\"D.O.J\" [min]=\"minDate\"  [(ngModel)]=\"employee.DOJ\" #doj=\"ngModel\" name=\"doj\" disabled required>\n                  <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker4 disabled=\"false\"></mat-datepicker>\n                </mat-form-field>\n                <div  *ngIf=\"doj.invalid && (doj.dirty || doj.touched)\" class=\"mat-body-1 center-align\">\n                    <div *ngIf=\"doj.errors.required\">\n                        Date Of Joining is required.\n                    </div>\n                \n                  </div>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\" required>\n                    <section  class=\"example-section example-full-width\">\n                    <div fxFlex=\"20\">\n                        <label class=\"example-margin\">Admin Access:</label>\n                      </div>\n                    \n               \n                 \n                  <div fxFlex=\"50\">\n                  <mat-radio-group [(ngModel)]=\"employee.adminAccess\" #adminaccess=\"ngModel\" name=\"adminAccess\" required>\n                    <mat-radio-button class=\"example-margin\" value=\"Yes\">\n                      Yes\n                    </mat-radio-button>\n                    <mat-radio-button class=\"example-margin\" value=\"No\">\n                      No\n                    </mat-radio-button>\n                   \n                  </mat-radio-group>\n                  <div  *ngIf=\"adminaccess.invalid && (adminaccess.dirty || adminaccess.touched)\" class=\"mat-body-1 center-align\" style=\"position: relative;bottom: 24px;\">\n                      <div *ngIf=\"adminaccess.errors.required\">\n                          Select an One Button\n                      </div>\n                  \n                    </div>\n                  </div>\n                </section>\n              </div>\n              <!-- <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                  <div fxFlex=\"20\">\n                      <label class=\"example-margin\">Upload Image:</label>\n                    </div>\n                    <div fxFlex=\"50\">\n                        <input type=\"file\"  (change)=\"onFileChange($event)\" style=\"display:none\" name=\"file-7[]\" id=\"file-7\" class=\"inputfile inputfile-6\" data-multiple-caption=\"{count} files selected\" multiple required />\n                        <label class=\"box\" for=\"file-7\"><span [ngStyle]=\"styleOne?{'color': 'black'} : {'color': 'white'}\"></span> <strong><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"17\" viewBox=\"0 0 20 17\"><path d=\"M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z\"/></svg> Upload a Image&hellip;</strong></label>\n                        \n                </div>\n            </div> -->\n              \n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <div fxFlex=\"20\"></div>\n                <div fxFlex=\"50\">\n          <button mat-raised-button type=\"reset\" [disabled]=\"addEmployee.invalid\" class=\"mat-subheading-2 button-style example-full-width\" (click)=\"OnSubmit()\">Save</button>\n              </div>\n            </div>\n        </form>\n        \n      </div>\n  \n      <!-- <div [hidden]=\"!submitted\" style=\"background-color: white;\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" >\n          <h2 class=\"mat-subheading-2 center-align\">You submitted the following:</h2>\n          <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"mat-body center-align\">\n            <div >Name</div>\n            <div>{{ model.name }}</div>\n          </div>\n          <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"mat-body center-align\">\n            <div>Number</div>\n            <div>{{ model.number }}</div>\n          </div>\n          <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"mat-body center-align\">\n            <div >Password</div>\n            <div>{{ model.pwd}}</div>\n          </div>\n          <br>\n          <button mat-raised-button  type=\"submit\" class=\"button-style\" (click)=\"submitted=false\">Edit</button>\n        </div>\n      </div> -->\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/employees/add-employees/add-employees.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/employees/add-employees/add-employees.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  padding-left: 10px; }\n\n.container {\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.form-container {\n  padding: 5px 15px 15px 15px; }\n\n.form-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.button-style {\n  background-color: #327ebd;\n  font-weight: bold; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.example-margin {\n  /* margin: 0 10px; */\n  padding: 26px; }\n\n.center-align {\n  color: red;\n  padding-left: 10px; }\n\n.addempmargin {\n  margin: 10px 0px;\n  font-size: .875rem; }\n\n.inputfile-6 + label span {\n  width: 325px; }\n"

/***/ }),

/***/ "./src/app/employees/add-employees/add-employees.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/employees/add-employees/add-employees.component.ts ***!
  \********************************************************************/
/*! exports provided: AddEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeesComponent", function() { return AddEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/employee */ "./src/app/models/employee.ts");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddEmployeesComponent = /** @class */ (function () {
    function AddEmployeesComponent(employeeservice, loginservice, router, snackBar) {
        this.employeeservice = employeeservice;
        this.loginservice = loginservice;
        this.router = router;
        this.snackBar = snackBar;
        this.dob = new Date();
        this.doj = new Date();
        this.hiddenDOJ = true;
        this.hide = true;
        this.selectedfile = null;
        this.companysignup = null;
        this.employee = new src_app_models_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]("", "", '', '', '', '', '', this.dob, this.doj, '', '', '', this.companysignup);
        this.today = new Date();
        this.minDate = new Date(this.today);
    }
    AddEmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.loginservice.getUserName().subscribe(function (data) {
            if (data.Identifier === "admin" || data.Identifier === "employee-admin") {
                _this.companysignup = data.company;
                _this.employee.adminAccess = "No";
            }
            else {
                _this.router.navigateByUrl('login');
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
            }
        });
    };
    AddEmployeesComponent.prototype.addEvent = function (event) {
        var dobdate = event.value.getFullYear() + 18;
        this.minDate = new Date(dobdate, 0, 1);
        this.hiddenDOJ = false;
    };
    AddEmployeesComponent.prototype.onFileChange = function (event) {
        this.styleOne = true;
        this.countfilelength = event.target.files.length;
        this.selectedfile = event.target.files[0];
    };
    AddEmployeesComponent.prototype.OnSubmit = function () {
        var _this = this;
        if (this.employee.DOB === undefined) {
            this.snackBar.open("Fill DOB Date Field", 'Alert', {
                duration: 4000
            });
        }
        else if (this.employee.DOJ === undefined) {
            this.snackBar.open("Fill DOJ Date Field", 'Alert', {
                duration: 4000
            });
        }
        else {
            this.employee.companySignUp = this.companysignup;
            var formData = new FormData;
            formData.append('avatar', this.selectedfile);
            formData.append('employeeName', this.employee.employeeName);
            formData.append('mobileNumber', this.employee.mobileNumber);
            formData.append('employeeEmail', this.employee.employeeEmail);
            formData.append('employeePassword', this.employee.employeePassword);
            formData.append('address', this.employee.address);
            formData.append('DOB', this.employee.DOB.toUTCString());
            formData.append('DOJ', this.employee.DOJ.toUTCString());
            formData.append('adminAccess', this.employee.adminAccess);
            formData.append('uuid', this.employee.companySignUp.uuid);
            this.employeeservice.addEmployee(formData)
                .subscribe(function (response) {
                _this.styleOne = false;
                _this.selectedfile = null;
                _this.snackBar.open("Employee successfully Added", 'Ok', {
                    duration: 3000
                });
                _this.nameInput.focus();
                _this.employee = new src_app_models_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]("", "", '', '', '', '', '', _this.dob, _this.doj, '', '', '', _this.companysignup);
                // this.employee=this.employee;
            }, function (err) {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                    if (err.status === 300) {
                        _this.snackBar.open(err.error.error, 'Alert', {
                            duration: 3000
                        });
                        _this.employee = err.error.data;
                        var DOBDate = new Date(err.error.data.DOB);
                        var DOJDate = new Date(err.error.data.DOJ);
                        _this.employee.DOB = DOBDate;
                        _this.employee.DOJ = DOJDate;
                        _this.nameInput.focus();
                        var nameselect_1 = _this.nameSelect.nativeElement;
                        setTimeout(function () { nameselect_1.select(); }, 50);
                    }
                    else if (err.status === 401) {
                        _this.router.navigateByUrl('login');
                    }
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameInput'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInput"])
    ], AddEmployeesComponent.prototype, "nameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameSelect'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddEmployeesComponent.prototype, "nameSelect", void 0);
    AddEmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-employees',
            template: __webpack_require__(/*! ./add-employees.component.html */ "./src/app/employees/add-employees/add-employees.component.html"),
            styles: [__webpack_require__(/*! ./add-employees.component.scss */ "./src/app/employees/add-employees/add-employees.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], AddEmployeesComponent);
    return AddEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/employees/edit-employees/edit-employees.component.html":
/*!************************************************************************!*\
  !*** ./src/app/employees/edit-employees/edit-employees.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n    <div fxFlex class=\"form-component-holder mat-elevation-z4\">\n      <mat-toolbar class=\"form-header\">\n        <h1 class=\"mat-headline\"> Edit Employee</h1>\n      </mat-toolbar>\n      <div  class=\"addempmargin\" style=\"background-color: white;\">\n  \n        <form fxLayout=\"column\"  class=\"example-container\" #addEmployee=\"ngForm\" >\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n          <div fxFlex=\"20\">\n              <label class=\"example-margin\">Employee Name:</label>\n            </div>\n            <div fxFlex=\"50\">\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"text\" placeholder=\"EmployeeName\" pattern=\"^[a-zA-Z_ ]*$\" [(ngModel)]=\"employee.employeeName\" name=\"employeeName\" #name=\"ngModel\" required minlength=\"4\">\n                  </mat-form-field>\n              \n                  <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"mat-body-1 center-align\">\n          \n                    <div *ngIf=\"name.errors.required\">\n                      Name is required.\n                    </div>\n                    <div *ngIf=\"name.errors.minlength\">\n                      Name must be at least 4 characters long.\n                    </div>\n                    <div *ngIf=\"name.errors.pattern\">\n                        Name must be a characters long.\n                      </div>\n                  </div>\n               \n             \n                </div>\n             \n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <div fxFlex=\"20\">\n                        <label class=\"example-margin\">Mobile Number:</label>\n                      </div>\n                      <div fxFlex=\"50\">\n          <mat-form-field class=\"example-full-width\">\n              <span matPrefix>+91 &nbsp;</span>\n              <input matInput type=\"tel\" placeholder=\"MobileNumber\" [(ngModel)]=\"employee.mobileNumber\" pattern=\"[0-9]*\" maxlength=\"10\" name=\"mobilenumber\" #mobilenumber=\"ngModel\" required minlength=\"10\">\n              <mat-icon matSuffix>mode_edit</mat-icon>\n            </mat-form-field>\n    \n            <div *ngIf=\"mobilenumber.invalid && (mobilenumber.dirty || mobilenumber.touched)\" class=\"mat-body-1 center-align\">\n    \n              <div *ngIf=\"mobilenumber.errors.required\">\n                Mobile Number is required.\n              </div>\n              <div *ngIf=\"mobilenumber.errors.minlength\">\n                  Mobile Number must be at least 10 characters long.\n              </div>\n              <div *ngIf=\"mobilenumber.errors.pattern\">\n                  Mobile Number is not Valid.\n                </div>\n            </div>\n            </div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <div fxFlex=\"20\">\n                    <label class=\"example-margin\">Email:</label>\n                  </div>\n                  <div fxFlex=\"50\">\n             <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"Email\" [(ngModel)]=\"employee.employeeEmail\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" name=\"employeeEmail\" #email=\"ngModel\" required>\n              </mat-form-field>\n      \n              <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"mat-body-1 center-align\" >\n      \n                <div *ngIf=\"email.errors.required\">\n                  Email is required.\n                </div>\n                <div *ngIf=\"email.errors.pattern\">\n                    Not a Valid Email.\n                  </div>\n              </div> \n          \n         </div>\n         </div>\n         <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n            <div fxFlex=\"20\">\n                <label class=\"example-margin\">Password:</label>\n              </div>\n             \n              <div fxFlex=\"50\">\n                  <span fxLayout=\"column\">\n            <mat-form-field class=\"example-full-width\">\n               <input matInput placeholder=\"Password\" [(ngModel)]=\"employee.employeePassword\" name=\"password\" type=\"password\" required disabled>\n             </mat-form-field>\n\n             <mat-form-field [hidden]=\"newpassword\" class=\"example-full-width\">\n              <input matInput placeholder=\"Enter New password\" [(ngModel)]=\"newpasswordvalue\" [type]=\"hide ? 'password' : 'text'\" name=\"newpassword\">\n              <mat-icon matSuffix  class=\"cursor\" (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n          </span>\n            </div>\n         \n            <div fxFlex=\"30\">\n              <button mat-raised-button class=\"mat-subheading-2 button-style\" (click)=\"OnChangePassword()\">Change Password</button>\n            </div>\n            </div>\n            \n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <div fxFlex=\"20\">\n                    <label class=\"example-margin\">Address:</label>\n                  </div>\n                  <div fxFlex=\"50\">\n             <mat-form-field class=\"example-full-width\">\n              <textarea matInput type=\"number\" placeholder=\"Address\"  [(ngModel)]=\"employee.address\"  name=\"address\" #address=\"ngModel\" required minlength=\"10\"></textarea>\n            </mat-form-field>\n            <div  *ngIf=\"address.invalid && (address.dirty || address.touched)\" class=\"mat-body-1 center-align\">\n              <div *ngIf=\"address.errors.required\">\n                Address is required.\n              </div>\n          \n            </div>\n            </div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <div fxFlex=\"20\">\n                    <label class=\"example-margin\">Date Of Birth:</label>\n                  </div>\n                  <div fxFlex=\"50\">\n             <mat-form-field class=\"example-full-width\">\n                <input matInput [matDatepicker]=\"picker3\" placeholder=\"D.O.B\" [(ngModel)]=\"employee.DOB\" name=\"dob\" #dob=\"ngModel\" required disabled>\n                <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n              <div  *ngIf=\"dob.invalid && (dob.dirty || dob.touched)\" class=\"mat-body-1 center-align\">\n                  <div *ngIf=\"dob.errors.required\">\n                      Date Of Birth is required.\n                  </div>\n              \n                </div>\n              </div>\n              </div>\n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                  <div fxFlex=\"20\">\n                      <label class=\"example-margin\">Date Of Joining:</label>\n                    </div>\n                    <div fxFlex=\"50\">\n              <mat-form-field class=\"example-full-width\">\n                  <input matInput [matDatepicker]=\"picker4\" placeholder=\"D.O.J\"  [(ngModel)]=\"employee.DOJ\" #doj=\"ngModel\" name=\"doj\" required disabled>\n                  <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker4 disabled=\"false\"></mat-datepicker>\n                </mat-form-field>\n                <div  *ngIf=\"doj.invalid && (doj.dirty || doj.touched)\" class=\"mat-body-1 center-align\">\n                    <div *ngIf=\"doj.errors.required\">\n                        Date Of Joining is required.\n                    </div>\n                \n                  </div>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\" required>\n                    <section  class=\"example-section example-full-width\">\n                    <div fxFlex=\"20\">\n                        <label class=\"example-margin\">Admin Access:</label>\n                      </div>\n                    \n               \n                 \n                  <div fxFlex=\"50\">\n                  <mat-radio-group [(ngModel)]=\"employee.adminAccess\" #adminaccess=\"ngModel\" name=\"adminAccess\" required>\n                    <mat-radio-button class=\"example-margin\" value=\"yes\">\n                      Yes\n                    </mat-radio-button>\n                    <mat-radio-button class=\"example-margin\" value=\"no\">\n                      No\n                    </mat-radio-button>\n                  </mat-radio-group>\n                  <div  *ngIf=\"adminaccess.invalid && (adminaccess.dirty || adminaccess.touched)\" class=\"mat-body-1 center-align\">\n                      <div *ngIf=\"adminaccess.errors.required\">\n                          Select a One Button\n                      </div>\n                  \n                    </div>\n                  </div>\n                </section>\n              </div>\n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                  <div fxFlex=\"20\">\n                      <label class=\"example-margin\">Upload Image:</label>\n                    </div>\n                    <div fxFlex=\"50\">\n                        <input type=\"file\"  (change)=\"onFileChange($event)\" style=\"display:none\" name=\"file-7[]\" id=\"file-7\" class=\"inputfile inputfile-6\" data-multiple-caption=\"{count} files selected\" multiple required />\n                        <label class=\"box\" for=\"file-7\"><span [ngStyle]=\"styleOne?{'color': 'black'} : {'color': 'white'}\"></span> <strong><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"17\" viewBox=\"0 0 20 17\"><path d=\"M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z\"/></svg> Upload a Image&hellip;</strong></label>\n                        \n                </div>\n            </div>\n              \n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <div fxFlex=\"20\"></div>\n                <div fxFlex=\"50\">\n          <button mat-raised-button class=\"mat-subheading-2 button-style example-full-width\" (click)=\"OnSubmit()\">Update</button>\n              </div>\n            </div>\n        </form>\n        \n      </div>\n  \n      \n    </div>\n  </div>\n   "

/***/ }),

/***/ "./src/app/employees/edit-employees/edit-employees.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/employees/edit-employees/edit-employees.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  padding-left: 10px; }\n\n.container {\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.form-container {\n  padding: 5px 15px 15px 15px; }\n\n.form-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.button-style {\n  background-color: #327ebd;\n  font-weight: bold; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.example-margin {\n  /* margin: 0 10px; */\n  padding: 26px; }\n\n.center-align {\n  color: red;\n  padding-left: 10px; }\n\n.addempmargin {\n  margin: 10px 0px;\n  font-size: .875rem; }\n\n.inputfile-6 + label span {\n  width: 325px; }\n"

/***/ }),

/***/ "./src/app/employees/edit-employees/edit-employees.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/employees/edit-employees/edit-employees.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmployeesComponent", function() { return EditEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/employee */ "./src/app/models/employee.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditEmployeesComponent = /** @class */ (function () {
    // constructor( private dialogRef: MatDialogRef<EditEmployeesComponent>, @Inject(MAT_DIALOG_DATA) public data: Employee) { }
    function EditEmployeesComponent(route, loginservice, employeeservice, router, snackBar) {
        this.route = route;
        this.loginservice = loginservice;
        this.employeeservice = employeeservice;
        this.router = router;
        this.snackBar = snackBar;
        this.hide = true;
        this.selectedfile = null;
        this.newpassword = true;
        this.newpasswordvalue = "";
        this.currentpassword = "";
        this.employee = new src_app_models_employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]("", "", '', '', '', '', '', this.dob, this.doj, '', '', '', this.companysignup);
    }
    EditEmployeesComponent.prototype.onFileChange = function (event) {
        // let count=<File>event.target.files
        this.styleOne = true;
        this.countfilelength = event.target.files.length;
        this.selectedfile = event.target.files[0];
    };
    EditEmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        var id = this.route.snapshot.params['id'];
        this.loginservice.getUserName().subscribe(function (data) {
            if (data.Identifier === "admin" || data.Identifier === "employee-admin") {
                _this.employeeservice.getemployee(id).subscribe(function (data) {
                    _this.employee = data;
                    _this.currentpassword = _this.employee.employeePassword;
                    var CDOB = new Date(data.DOB);
                    _this.employee.DOB = CDOB;
                    var CDOJ = new Date(data.DOJ);
                    _this.employee.DOJ = CDOJ;
                }, function (err) {
                    if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                        if (err.status === 401) {
                            _this.router.navigateByUrl('login');
                        }
                    }
                });
            }
            else {
                _this.router.navigateByUrl('login');
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
            }
        });
    };
    EditEmployeesComponent.prototype.OnChangePassword = function () {
        this.newpassword = !this.newpassword;
    };
    EditEmployeesComponent.prototype.OnSubmit = function () {
        var _this = this;
        var formData = new FormData;
        if (this.newpasswordvalue === "") {
            this.employee.employeePassword = this.currentpassword;
        }
        else {
            this.employee.employeePassword = this.newpasswordvalue;
        }
        //     if(this.dob!=this.employee.DOB){
        // this.DOBtoString=this.employee.DOB.toLocaleDateString();
        //     }else{
        //       this.DOBtoString=JSON.stringify(this.employee.DOB);
        //     }
        //     if(this.doj!=this.employee.DOJ){
        //       this.DOJtoString=this.employee.DOJ.toLocaleDateString();
        //           }else{
        //             this.DOJtoString=JSON.stringify(this.employee.DOJ);
        //           }
        if (this.countfilelength > 0) {
            if (this.selectedfile.type === "image/jpeg" || this.selectedfile.type === "image/png") {
                formData.append('userImage', this.selectedfile);
                formData.append('employeeName', this.employee.employeeName);
                formData.append('mobileNumber', this.employee.mobileNumber);
                formData.append('employeeEmail', this.employee.employeeEmail);
                formData.append('employeePassword', this.employee.employeePassword);
                formData.append('address', this.employee.address);
                formData.append('DOB', this.employee.DOB.toUTCString());
                formData.append('DOJ', this.employee.DOJ.toUTCString());
                formData.append('adminAccess', this.employee.adminAccess);
                formData.append('fk_companyid', this.employee.fk_companyid);
                formData.append('employeeId', this.employee.employeeId);
                this.employeeservice.updateformdataEmployee(formData, this.employee.uuid).subscribe(function (resultData) {
                    _this.router.navigate(['employees/listemployees']);
                }, function (err) {
                    if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                        if (err.status === 401) {
                            _this.router.navigateByUrl('login');
                        }
                    }
                });
            }
            else {
                this.snackBar.open("Select Only Jpeg and Png format Image", "Alert", {
                    duration: 10000
                });
            }
        }
        else {
            this.employeeservice.updateemployee(this.employee).subscribe(function (resultData) {
                _this.router.navigate(['employees/listemployees']);
            }, function (err) {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                    if (err.status === 401) {
                        _this.router.navigateByUrl('login');
                    }
                }
            });
        }
    };
    EditEmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-employees',
            template: __webpack_require__(/*! ./edit-employees.component.html */ "./src/app/employees/edit-employees/edit-employees.component.html"),
            styles: [__webpack_require__(/*! ./edit-employees.component.scss */ "./src/app/employees/edit-employees/edit-employees.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], EditEmployeesComponent);
    return EditEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.module.ts":
/*!***********************************************!*\
  !*** ./src/app/employees/employees.module.ts ***!
  \***********************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employees_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employees.router */ "./src/app/employees/employees.router.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _add_employees_add_employees_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-employees/add-employees.component */ "./src/app/employees/add-employees/add-employees.component.ts");
/* harmony import */ var _list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-employees/list-employees.component */ "./src/app/employees/list-employees/list-employees.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _edit_employees_edit_employees_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-employees/edit-employees.component */ "./src/app/employees/edit-employees/edit-employees.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _employees_router__WEBPACK_IMPORTED_MODULE_2__["EmployeesRouterModule"],
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
                _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"]
            ],
            declarations: [_add_employees_add_employees_component__WEBPACK_IMPORTED_MODULE_8__["AddEmployeesComponent"], _list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_9__["ListEmployeesComponent"], _edit_employees_edit_employees_component__WEBPACK_IMPORTED_MODULE_13__["EditEmployeesComponent"]],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
            entryComponents: []
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "./src/app/employees/employees.router.ts":
/*!***********************************************!*\
  !*** ./src/app/employees/employees.router.ts ***!
  \***********************************************/
/*! exports provided: EmployeesRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesRouterModule", function() { return EmployeesRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_employees_add_employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-employees/add-employees.component */ "./src/app/employees/add-employees/add-employees.component.ts");
/* harmony import */ var _list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-employees/list-employees.component */ "./src/app/employees/list-employees/list-employees.component.ts");
/* harmony import */ var _edit_employees_edit_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-employees/edit-employees.component */ "./src/app/employees/edit-employees/edit-employees.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var employeeroutes = [
    { path: 'addemployees', component: _add_employees_add_employees_component__WEBPACK_IMPORTED_MODULE_2__["AddEmployeesComponent"] },
    { path: 'listemployees', component: _list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_3__["ListEmployeesComponent"] },
    { path: 'editemployees/:id', component: _edit_employees_edit_employees_component__WEBPACK_IMPORTED_MODULE_4__["EditEmployeesComponent"] },
];
var EmployeesRouterModule = /** @class */ (function () {
    function EmployeesRouterModule() {
    }
    EmployeesRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(employeeroutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EmployeesRouterModule);
    return EmployeesRouterModule;
}());



/***/ }),

/***/ "./src/app/employees/list-employees/list-employees.component.html":
/*!************************************************************************!*\
  !*** ./src/app/employees/list-employees/list-employees.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"form-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"form-header\">\n\t\t\t<h1 class=\"mat-headline\">List Employeee</h1>\n\t\t</mat-toolbar>\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <div class=\"mat-elevation-z8\" style=\"overflow-y:auto\">\n    <table mat-table [dataSource]=\"dataSource\">\n    \n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let i=index\"> {{i+1}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"image\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Image </th>\n        <td mat-cell *matCellDef=\"let element\"> \n          <img width=\"50\" height=\"50\" [style.borderRadius]=\"'50%'\" [src]=\"Apiurl+element.userImage || 'assets/images/avatars/noavatar.png'\">\n          <!-- {{element.userImage}}  -->\n        </td>\n      </ng-container>\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"employeeid\">\n        <th mat-header-cell *matHeaderCellDef> EmployeeId </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.employeeId}} </td>\n      </ng-container>\n    \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"employeeName\">\n        <th mat-header-cell *matHeaderCellDef> EmployeeName </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.employeeName}} </td>\n      </ng-container>\n    \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"employeeEmail\">\n        <th mat-header-cell *matHeaderCellDef> EmployeeEmail </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.employeeEmail}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"address\">\n        <th mat-header-cell *matHeaderCellDef> Address </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"mobileNumber\">\n        <th mat-header-cell *matHeaderCellDef> Mobile No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.mobileNumber}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"DOB\">\n        <th mat-header-cell *matHeaderCellDef> DOB </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.DOB}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"DOJ\">\n        <th mat-header-cell *matHeaderCellDef> DOJ </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.DOJ}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"adminAccess\">\n        <th mat-header-cell *matHeaderCellDef> AdminAccess </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.adminAccess}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"edit\">\n          <th mat-header-cell *matHeaderCellDef>  </th>\n          <td mat-cell *matCellDef=\"let element\" [hidden]=\"editHidden\"> <mat-icon class=\"cursor\" (click)=\"employeeEdit(element)\">edit</mat-icon> </td>\n        </ng-container>\n    \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n     \n    </table>\n    <mat-paginator [pageSizeOptions]=\"[10, 15, 20]\" showFirstLastButtons></mat-paginator>\n\n  </div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/employees/list-employees/list-employees.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/employees/list-employees/list-employees.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd, th {\n  padding-right: 10px !important; }\n"

/***/ }),

/***/ "./src/app/employees/list-employees/list-employees.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/employees/list-employees/list-employees.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmployeesComponent", function() { return ListEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListEmployeesComponent = /** @class */ (function () {
    function ListEmployeesComponent(employeeservice, loginservice, router, dialog) {
        this.employeeservice = employeeservice;
        this.loginservice = loginservice;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['position', 'image', 'employeeid', 'employeeName', 'employeeEmail', 'address', 'mobileNumber', 'DOB', 'DOJ', 'adminAccess', 'edit'];
        this.employees = [];
        this.editHidden = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.employees);
        this.Apiurl = "";
    }
    ListEmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginservice.getUserName().subscribe(function (data) {
            if (data.Identifier === "employee") {
                _this.editHidden = true;
            }
            _this.employeeservice.getAllemployee().subscribe(function (resultData) {
                _this.employees = resultData;
                _this.Apiurl = src_app_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].APIURL;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.employees);
                _this.dataSource.paginator = _this.paginator;
            }, function (err) {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                    if (err.status === 401) {
                        _this.router.navigateByUrl('login');
                    }
                }
            });
        });
    };
    ListEmployeesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ListEmployeesComponent.prototype.employeeEdit = function (employee) {
        this.router.navigate(['employees/editemployees', employee.uuid]);
        // this.isPopupOpened = true;
        // const dialogRef = this.dialog.open(EditEmployeesComponent, {
        //   data: employee
        // });
        // dialogRef.afterClosed().subscribe(product => {
        //   this.isPopupOpened = false;
        // });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ListEmployeesComponent.prototype, "paginator", void 0);
    ListEmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-employees',
            template: __webpack_require__(/*! ./list-employees.component.html */ "./src/app/employees/list-employees/list-employees.component.html"),
            styles: [__webpack_require__(/*! ./list-employees.component.scss */ "./src/app/employees/list-employees/list-employees.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ListEmployeesComponent);
    return ListEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = /** @class */ (function () {
    function EmployeeService(httpClient) {
        this.httpClient = httpClient;
    }
    EmployeeService.prototype.addEmployee = function (employee) {
        return this.httpClient.post("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].addemployeeURL(), employee);
    };
    EmployeeService.prototype.getAllemployee = function () {
        return this.httpClient.get("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getAllemployeeURL());
    };
    EmployeeService.prototype.getemployee = function (id) {
        return this.httpClient.get("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getemployeeURL() + ("/" + id));
    };
    EmployeeService.prototype.updateemployee = function (employee) {
        return this.httpClient.put("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].updateemployeeURL() + ("/" + employee.uuid), employee);
    };
    EmployeeService.prototype.updateformdataEmployee = function (formData, uuid) {
        return this.httpClient.put("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].updateemployeeURL() + ("/" + uuid), formData);
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ })

}]);
//# sourceMappingURL=employees-employees-module.js.map