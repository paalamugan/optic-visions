(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router) {
        this._router = _router;
    }
    AuthGuard.prototype.isLoggedIn = function () {
        if (_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isLoggedIn()) {
            return true;
        }
        _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isLoggedOut();
        this._router.navigate(['/login']);
        return false;
    };
    AuthGuard.prototype.canActivate = function () {
        return this.isLoggedIn();
    };
    AuthGuard.prototype.canActivateChild = function () {
        return this.isLoggedIn();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/employee.ts":
/*!************************************!*\
  !*** ./src/app/models/employee.ts ***!
  \************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee(uuid, employeeId, employeeName, mobileNumber, employeeEmail, employeePassword, address, DOB, DOJ, adminAccess, userImage, fk_companyid, companySignUp) {
        this.uuid = uuid;
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.mobileNumber = mobileNumber;
        this.employeeEmail = employeeEmail;
        this.employeePassword = employeePassword;
        this.address = address;
        this.DOB = DOB;
        this.DOJ = DOJ;
        this.adminAccess = adminAccess;
        this.userImage = userImage;
        this.fk_companyid = fk_companyid;
        this.companySignUp = companySignUp;
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/services/signup.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/signup.service.ts ***!
  \********************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
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



var SignupService = /** @class */ (function () {
    function SignupService(httpClient) {
        this.httpClient = httpClient;
    }
    SignupService.prototype.getAll = function () {
        return this.httpClient.get("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getSignupURL());
    };
    SignupService.prototype.getOne = function (company) {
        return this.httpClient.get("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getOneSignupURL() + ("/" + company.uuid));
    };
    SignupService.prototype.submitRegister = function (body) {
        return this.httpClient.post("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getSignupURL(), body);
    };
    SignupService.prototype.UpdateFormDataCompany = function (formData, uuid) {
        return this.httpClient.put("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].updateCompanyURL() + ("/" + uuid), formData);
    };
    SignupService.prototype.UpdateCompany = function (company) {
        return this.httpClient.put("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].updateCompanyURL() + ("/" + company.uuid), company);
    };
    SignupService.prototype.deleteCompany = function (uuid) {
        return this.httpClient.delete("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].deleteSignupURL() + ("/" + uuid));
    };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupService);
    return SignupService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map