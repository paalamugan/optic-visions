(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/models/boxes.ts":
/*!*********************************!*\
  !*** ./src/app/models/boxes.ts ***!
  \*********************************/
/*! exports provided: Boxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boxes", function() { return Boxes; });
var Boxes = /** @class */ (function () {
    function Boxes(uuid, name, box_model, quantity, retailerPrice, wholesalerPrice, fk_companyid) {
        this.uuid = uuid;
        this.name = name;
        this.box_model = box_model;
        this.quantity = quantity;
        this.retailerPrice = retailerPrice;
        this.wholesalerPrice = wholesalerPrice;
        this.fk_companyid = fk_companyid;
    }
    return Boxes;
}());



/***/ }),

/***/ "./src/app/models/brand.ts":
/*!*********************************!*\
  !*** ./src/app/models/brand.ts ***!
  \*********************************/
/*! exports provided: Brand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return Brand; });
var Brand = /** @class */ (function () {
    function Brand(uuid, name, code, fk_companyid) {
        this.uuid = uuid;
        this.name = name;
        this.code = code;
        this.fk_companyid = fk_companyid;
    }
    return Brand;
}());



/***/ }),

/***/ "./src/app/models/enums/frame-material-model.ts":
/*!******************************************************!*\
  !*** ./src/app/models/enums/frame-material-model.ts ***!
  \******************************************************/
/*! exports provided: FrameMaterialModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameMaterialModel", function() { return FrameMaterialModel; });
var FrameMaterialModel;
(function (FrameMaterialModel) {
    FrameMaterialModel[FrameMaterialModel["ROUND"] = 1] = "ROUND";
    FrameMaterialModel[FrameMaterialModel["SQUARE"] = 2] = "SQUARE";
    FrameMaterialModel[FrameMaterialModel["RECTANGLE"] = 3] = "RECTANGLE";
    FrameMaterialModel[FrameMaterialModel["OVAL"] = 4] = "OVAL";
})(FrameMaterialModel || (FrameMaterialModel = {}));


/***/ }),

/***/ "./src/app/models/enums/frame-type.ts":
/*!********************************************!*\
  !*** ./src/app/models/enums/frame-type.ts ***!
  \********************************************/
/*! exports provided: FrameType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameType", function() { return FrameType; });
var FrameType;
(function (FrameType) {
    FrameType[FrameType["FULL RIM"] = 1] = "FULL RIM";
    FrameType[FrameType["HALF RIM"] = 2] = "HALF RIM";
    FrameType[FrameType["RIM LESS"] = 3] = "RIM LESS";
})(FrameType || (FrameType = {}));


/***/ }),

/***/ "./src/app/models/enums/power-lens-type.ts":
/*!*************************************************!*\
  !*** ./src/app/models/enums/power-lens-type.ts ***!
  \*************************************************/
/*! exports provided: PowerLensType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerLensType", function() { return PowerLensType; });
var PowerLensType;
(function (PowerLensType) {
    PowerLensType[PowerLensType["Singular"] = 1] = "Singular";
    PowerLensType[PowerLensType["Bifocal"] = 2] = "Bifocal";
    PowerLensType[PowerLensType["Progressive"] = 3] = "Progressive";
    PowerLensType[PowerLensType["Trifocal"] = 4] = "Trifocal";
})(PowerLensType || (PowerLensType = {}));


/***/ }),

/***/ "./src/app/models/frame-material.ts":
/*!******************************************!*\
  !*** ./src/app/models/frame-material.ts ***!
  \******************************************/
/*! exports provided: FrameMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameMaterial", function() { return FrameMaterial; });
var FrameMaterial = /** @class */ (function () {
    function FrameMaterial(uuid, name, size, model, quantity, retailerPrice, wholesalerPrice, companyId) {
        this.uuid = uuid;
        this.name = name;
        this.size = size;
        this.model = model;
        this.quantity = quantity;
        this.retailerPrice = retailerPrice;
        this.wholesalerPrice = wholesalerPrice;
        this.companyId = companyId;
    }
    return FrameMaterial;
}());



/***/ }),

/***/ "./src/app/models/frame-model.ts":
/*!***************************************!*\
  !*** ./src/app/models/frame-model.ts ***!
  \***************************************/
/*! exports provided: FrameModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameModel", function() { return FrameModel; });
var FrameModel = /** @class */ (function () {
    function FrameModel(uuid, brand, model, frametype, size, quantity, retailerPrice, wholesalerPrice, fk_companyid) {
        this.uuid = uuid;
        this.brand = brand;
        this.model = model;
        this.frametype = frametype;
        this.size = size;
        this.quantity = quantity;
        this.retailerPrice = retailerPrice;
        this.wholesalerPrice = wholesalerPrice;
        this.fk_companyid = fk_companyid;
    }
    return FrameModel;
}());



/***/ }),

/***/ "./src/app/models/frame-type.ts":
/*!**************************************!*\
  !*** ./src/app/models/frame-type.ts ***!
  \**************************************/
/*! exports provided: FrameType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameType", function() { return FrameType; });
var FrameType = /** @class */ (function () {
    function FrameType() {
    }
    return FrameType;
}());



/***/ }),

/***/ "./src/app/models/lens-type.ts":
/*!*************************************!*\
  !*** ./src/app/models/lens-type.ts ***!
  \*************************************/
/*! exports provided: LensType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LensType", function() { return LensType; });
var LensType = /** @class */ (function () {
    function LensType(uuid, powerlenstype, name, lensmaterial, quantity, retailerPrice, wholesalerPrice, fk_companyid) {
        this.uuid = uuid;
        this.powerlenstype = powerlenstype;
        this.name = name;
        this.lensmaterial = lensmaterial;
        this.quantity = quantity;
        this.retailerPrice = retailerPrice;
        this.wholesalerPrice = wholesalerPrice;
        this.fk_companyid = fk_companyid;
    }
    return LensType;
}());



/***/ }),

/***/ "./src/app/products/boxes/box-model-add/box-model-add.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/products/boxes/box-model-add/box-model-add.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"form-component-holder mat-elevation-z4\">\n    <mat-toolbar class=\"form-header\">\n      <h1 class=\"mat-headline\">Add Boxes</h1>\n    </mat-toolbar>\n    <div  class=\"addmargin\" style=\"background-color: white;\">\n      <form fxLayout=\"column\"  class=\"example-container\" #addBoxes=\"ngForm\" >\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\" >\n                  <div fxFlex=\"20\">\n                      <label class=\"example-margin\">Name:</label>\n                    </div>\n                    <div fxFlex=\"50\">\n        <mat-form-field class=\"example-full-width\">\n  \n            <input matInput type=\"text\" placeholder=\"Name\" #nameInput=\"matInput\" #nameSelect [(ngModel)]=\"boxes.name\"  name=\"name\" #name=\"ngModel\" autofocus required>\n      \n          </mat-form-field>\n  \n          <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"mat-body-1 center-align\">\n  \n            <div *ngIf=\"name.errors.required\">\n              Name is required.\n            </div>\n           \n          </div>\n          </div>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\" >\n            <div fxFlex=\"20\">\n                <label class=\"example-margin\">Box Model:</label>\n              </div>\n              <div fxFlex=\"50\">\n  <mat-form-field class=\"example-full-width\">\n\n      <input matInput type=\"text\" placeholder=\"Box Model\" [(ngModel)]=\"boxes.box_model\"  name=\"box_model\" #boxmodel=\"ngModel\" required>\n\n    </mat-form-field>\n\n    <div *ngIf=\"boxmodel.invalid && (boxmodel.dirty || boxmodel.touched)\" class=\"mat-body-1 center-align\">\n\n      <div *ngIf=\"boxmodel.errors.required\">\n        Box Model is required.\n      </div>\n     \n    </div>\n    </div>\n    </div>\n               \n                \n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <div fxFlex=\"20\">\n                    <label class=\"example-margin\">Quantity:</label>\n                  </div>\n                  <div fxFlex=\"50\">\n      <mat-form-field class=\"example-full-width\">\n  \n          <!-- <input matInput  type=\"number\" placeholder=\"Quantity\" pattern=\"^\\d+(\\.\\d+)*$\" [(ngModel)]=\"boxes.quantity\" name=\"quantity\" #quantity=\"ngModel\" minlength=\"10\" required> -->\n          <input matInput  type=\"number\" placeholder=\"Quantity\" pattern=\"[0-9]*\" [(ngModel)]=\"boxes.quantity\" name=\"quantity\" #quantity=\"ngModel\" minlength=\"10\" required>\n    \n        </mat-form-field>\n  \n        <div *ngIf=\"quantity.invalid && (quantity.dirty || quantity.touched)\" class=\"mat-body-1 center-align\">\n    \n            <div *ngIf=\"quantity.errors.required\">\n                Quantity is required.\n            </div>\n            <div *ngIf=\"quantity.errors.minlength\">\n                Quantity is Greater than Zero.\n            </div>\n            <div *ngIf=\"quantity.errors.pattern\">\n                Quantity Rate is Not Valid.\n            </div>\n          </div>\n          \n        </div>\n        </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <div fxFlex=\"20\">\n                    <label class=\"example-margin\">Price:</label>\n                  </div>\n                  <div fxFlex=\"50\">\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\n                      <div fxFlex=\"50\">\n      <mat-form-field class=\"example-full-width\">\n\n          <input matInput type=\"number\" placeholder=\"Retailer Price\" pattern=\"[0-9]*\" [(ngModel)]=\"boxes.retailerPrice\" name=\"retailerPrice\" #retailerPrice=\"ngModel\" required minlength=\"10\">\n    \n        </mat-form-field>\n        <div *ngIf=\"retailerPrice.invalid && (retailerPrice.dirty || retailerPrice.touched)\" class=\"mat-body-1 center-align\">\n    \n            <div *ngIf=\"retailerPrice.errors.required\">\n                Retailer Price is required.\n            </div>\n            <div *ngIf=\"retailerPrice.errors.minlength\">\n                Retailer Price is Greater than Zero.\n            </div>\n            <div *ngIf=\"retailerPrice.errors.pattern\">\n                Retailer Price Rate is Not Valid .\n            </div>\n          </div>\n        </div>\n        <div fxFlex=\"50\">\n        <mat-form-field class=\"example-full-width\">\n\n            <input matInput type=\"number\" placeholder=\"WholeSaler Price\" [(ngModel)]=\"boxes.wholesalerPrice\"  name=\"wholesalerPrice\">\n      \n          </mat-form-field>\n          </div>\n       \n        </div>\n      </div>\n        </div>\n       \n   \n<div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n    <div fxFlex=\"20\"></div>\n    <div fxFlex=\"50\">\n<button mat-raised-button class=\"mat-subheading-2 button-style example-full-width\" type=\"reset\" [(disabled)]=\"addBoxes.invalid\" (click)=\"OnSubmit()\">Save</button>\n  </div>\n</div>\n            </form>\n            </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/products/boxes/box-model-add/box-model-add.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/products/boxes/box-model-add/box-model-add.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/boxes/box-model-add/box-model-add.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/products/boxes/box-model-add/box-model-add.component.ts ***!
  \*************************************************************************/
/*! exports provided: BoxModelAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxModelAddComponent", function() { return BoxModelAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_boxes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/boxes */ "./src/app/models/boxes.ts");
/* harmony import */ var src_app_services_boxes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/boxes.service */ "./src/app/services/boxes.service.ts");
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







var BoxModelAddComponent = /** @class */ (function () {
    function BoxModelAddComponent(boxesService, loginservice, router, snackBar) {
        this.boxesService = boxesService;
        this.loginservice = loginservice;
        this.router = router;
        this.snackBar = snackBar;
        this.boxes = new src_app_models_boxes__WEBPACK_IMPORTED_MODULE_3__["Boxes"]('', '', '', 1, 1, 1, '');
    }
    BoxModelAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginservice.getUserName().subscribe(function (data) {
            if (data.Identifier === "employee") {
                _this.router.navigateByUrl('login');
            }
        });
    };
    BoxModelAddComponent.prototype.OnSubmit = function () {
        var _this = this;
        this.boxesService.addBoxes(this.boxes).subscribe(function (data) {
            _this.snackBar.open("Box Added", "Success", {
                duration: 4000
            });
            _this.nameInput.focus();
            _this.boxes = new src_app_models_boxes__WEBPACK_IMPORTED_MODULE_3__["Boxes"]('', '', '', 1, 1, 1, '');
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
                else if (err.status === 300) {
                    _this.snackBar.open(err.error.error, "Alert", {
                        duration: 3000
                    });
                    _this.boxes = err.error.data;
                    _this.nameInput.focus();
                    var nameselect_1 = _this.nameSelect.nativeElement;
                    setTimeout(function () { nameselect_1.select(); }, 50);
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameInput'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInput"])
    ], BoxModelAddComponent.prototype, "nameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameSelect'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BoxModelAddComponent.prototype, "nameSelect", void 0);
    BoxModelAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-box-model-add',
            template: __webpack_require__(/*! ./box-model-add.component.html */ "./src/app/products/boxes/box-model-add/box-model-add.component.html"),
            styles: [__webpack_require__(/*! ./box-model-add.component.scss */ "./src/app/products/boxes/box-model-add/box-model-add.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_boxes_service__WEBPACK_IMPORTED_MODULE_4__["BoxesService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], BoxModelAddComponent);
    return BoxModelAddComponent;
}());



/***/ }),

/***/ "./src/app/products/boxes/box-model-edit/box-model-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/products/boxes/box-model-edit/box-model-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-toolbar color=\"primary\" class=\"toolbar\">\n  <mat-card-title class=\"mat-card-title\">Edit Boxes Details</mat-card-title>\n  <span class=\"toolbar-spacer\"></span>\n  <mat-icon (click)=\"onNoClick()\" class=\"cursor\">cancel</mat-icon>\n</mat-toolbar>\n<form  #editboxes=\"ngForm\">\n<mat-dialog-content class=\"mat-typography\">\n      <div class=\"form-group\">\n      <div fxLayout=\"column\">\n      \n      \n        <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n          <mat-form-field class=\"example-full-width\">\n  \n            <input matInput type=\"text\" placeholder=\"Name\" [(ngModel)]=\"data.name\"  name=\"name\" #name=\"ngModel\" autofocus required>\n      \n          </mat-form-field>\n  \n          <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"mat-body-1 center-align\">\n  \n            <div *ngIf=\"name.errors.required\">\n              Name is required.\n            </div>\n           \n          </div>\n        </div>\n        <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n          <mat-form-field class=\"example-full-width\">\n\n            <input matInput type=\"text\" placeholder=\"Box Model\" [(ngModel)]=\"data.box_model\"  name=\"box_model\" #boxmodel=\"ngModel\" required>\n      \n          </mat-form-field>\n      \n          <div *ngIf=\"boxmodel.invalid && (boxmodel.dirty || boxmodel.touched)\" class=\"mat-body-1 center-align\">\n      \n            <div *ngIf=\"boxmodel.errors.required\">\n              Box Model is required.\n            </div>\n           \n          </div>\n          </div>\n          <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n            <mat-form-field class=\"example-full-width\">\n    \n              <input matInput  type=\"number\" placeholder=\"Quantity\" pattern=\"[0-9]*\" [(ngModel)]=\"data.quantity\" name=\"quantity\" #quantity=\"ngModel\" minlength=\"10\" required>\n        \n            </mat-form-field>\n      \n            <div *ngIf=\"quantity.invalid && (quantity.dirty || quantity.touched)\" class=\"mat-body-1 center-align\">\n        \n                <div *ngIf=\"quantity.errors.required\">\n                    Quantity is required.\n                </div>\n                <div *ngIf=\"quantity.errors.minlength\">\n                    Quantity is Greater than Zero.\n                </div>\n                <div *ngIf=\"quantity.errors.pattern\">\n                    Quantity Rate is Not Valid.\n                </div>\n              </div>\n            </div>\n            <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n              <mat-form-field class=\"example-full-width\">\n  \n                <input matInput type=\"number\" placeholder=\"Retailer Price\" pattern=\"[0-9]*\" [(ngModel)]=\"data.retailerPrice\" name=\"retailerPrice\" #retailerPrice=\"ngModel\" required minlength=\"10\">\n          \n              </mat-form-field>\n              <div *ngIf=\"retailerPrice.invalid && (retailerPrice.dirty || retailerPrice.touched)\" class=\"mat-body-1 center-align\">\n          \n                  <div *ngIf=\"retailerPrice.errors.required\">\n                      Retailer Price is required.\n                  </div>\n                  <div *ngIf=\"retailerPrice.errors.minlength\">\n                      Retailer Price is Greater than Zero.\n                  </div>\n                  <div *ngIf=\"retailerPrice.errors.pattern\">\n                      RetailerPrice Rate is Not Valid .\n                  </div>\n                </div>\n              </div>\n              <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n                <mat-form-field class=\"example-full-width\">\n  \n                  <input matInput type=\"number\" placeholder=\"WholeSaler Price\" [(ngModel)]=\"data.wholesalerPrice\"  name=\"wholesalerPrice\">\n            \n                </mat-form-field>\n                </div>\n      </div>\n   </div>\n\n \n</mat-dialog-content>\n<mat-dialog-actions align=\"start\">\n<button mat-raised-button color=\"primary\" [disabled]=\"editboxes.invalid\" (click)=\"onSubmit()\" >Save</button>\n<button mat-button mat-dialog-close>Cancel</button>\n<!-- <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\n</mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./src/app/products/boxes/box-model-edit/box-model-edit.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/products/boxes/box-model-edit/box-model-edit.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/boxes/box-model-edit/box-model-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/products/boxes/box-model-edit/box-model-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: BoxModelEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxModelEditComponent", function() { return BoxModelEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_boxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/boxes */ "./src/app/models/boxes.ts");
/* harmony import */ var src_app_services_boxes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/boxes.service */ "./src/app/services/boxes.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var BoxModelEditComponent = /** @class */ (function () {
    function BoxModelEditComponent(dialogRef, boxesservice, router, snackBar, data) {
        this.dialogRef = dialogRef;
        this.boxesservice = boxesservice;
        this.router = router;
        this.snackBar = snackBar;
        this.data = data;
    }
    BoxModelEditComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    BoxModelEditComponent.prototype.ngOnInit = function () {
    };
    BoxModelEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.boxesservice.updateBoxes(this.data).subscribe(function () {
            _this.dialogRef.close();
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
                else {
                    _this.snackBar.open("Updated Failed", "Alert", {
                        duration: 4000
                    });
                }
            }
        });
    };
    BoxModelEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-box-model-edit',
            template: __webpack_require__(/*! ./box-model-edit.component.html */ "./src/app/products/boxes/box-model-edit/box-model-edit.component.html"),
            styles: [__webpack_require__(/*! ./box-model-edit.component.scss */ "./src/app/products/boxes/box-model-edit/box-model-edit.component.scss")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], src_app_services_boxes_service__WEBPACK_IMPORTED_MODULE_3__["BoxesService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], src_app_models_boxes__WEBPACK_IMPORTED_MODULE_2__["Boxes"]])
    ], BoxModelEditComponent);
    return BoxModelEditComponent;
}());



/***/ }),

/***/ "./src/app/products/boxes/box-model/box-model.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/products/boxes/box-model/box-model.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"form-component-holder mat-elevation-z4\">\n    <mat-toolbar class=\"form-header\">\n      <h1 class=\"mat-headline\">Boxes List</h1>\n    </mat-toolbar>\n    <div style=\"margin: 10px;\">\n        <button mat-raised-button [hidden]=\"addHidden\" class=\"mat-subheading-2 button-style\" routerLink=\"add\"><mat-icon>add</mat-icon><span style=\"margin: 5px;\">New</span></button>\n    </div>\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\" style=\"overflow-y:auto\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let i=index\"> {{i+1}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"boxmodel\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Box Model </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.box_model}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"quantity\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Quantity </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"retailerprice\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> RetailerPrice </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.retailerPrice | currency:'INR'}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"wholesalerprice\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> WholesalerPrice </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.wholesalerPrice | currency:'INR'}} </td>\n      </ng-container>\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef [hidden]=\"editHidden\"> </th>\n      <td mat-cell *matCellDef=\"let element\" [hidden]=\"editHidden\"><mat-icon class=\"cursor\" (click)=\"editboxes(element)\">edit</mat-icon> </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/products/boxes/box-model/box-model.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/products/boxes/box-model/box-model.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/boxes/box-model/box-model.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/boxes/box-model/box-model.component.ts ***!
  \*****************************************************************/
/*! exports provided: BoxModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxModelComponent", function() { return BoxModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _box_model_edit_box_model_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../box-model-edit/box-model-edit.component */ "./src/app/products/boxes/box-model-edit/box-model-edit.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_boxes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/boxes.service */ "./src/app/services/boxes.service.ts");
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







var BoxModelComponent = /** @class */ (function () {
    function BoxModelComponent(boxesService, loginservice, router, dialog) {
        this.boxesService = boxesService;
        this.loginservice = loginservice;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'name', 'boxmodel', 'quantity', 'retailerprice', 'wholesalerprice', 'edit'];
        this.boxes = [];
        this.editHidden = false;
        this.addHidden = false;
    }
    BoxModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginservice.getUserName().subscribe(function (data) {
            if (data.Identifier === "employee") {
                _this.editHidden = true;
                _this.addHidden = true;
            }
        });
        this.boxesService.getallBoxes().subscribe(function (data) {
            _this.boxes = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.boxes);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
            }
        });
    };
    BoxModelComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    BoxModelComponent.prototype.editboxes = function (boxes) {
        var dialogRef = this.dialog.open(_box_model_edit_box_model_edit_component__WEBPACK_IMPORTED_MODULE_1__["BoxModelEditComponent"], {
            width: "600px",
            data: boxes
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log(`Dialog result: ${result}`);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], BoxModelComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], BoxModelComponent.prototype, "sort", void 0);
    BoxModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-box-model',
            template: __webpack_require__(/*! ./box-model.component.html */ "./src/app/products/boxes/box-model/box-model.component.html"),
            styles: [__webpack_require__(/*! ./box-model.component.scss */ "./src/app/products/boxes/box-model/box-model.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_boxes_service__WEBPACK_IMPORTED_MODULE_5__["BoxesService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], BoxModelComponent);
    return BoxModelComponent;
}());



/***/ }),

/***/ "./src/app/products/brands/brand-add/brand-add.component.html":
/*!********************************************************************!*\
  !*** ./src/app/products/brands/brand-add/brand-add.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n    <div fxFlex class=\"form-component-holder mat-elevation-z4\">\n      <mat-toolbar class=\"form-header\">\n        <h1 class=\"mat-headline\">Add Brand</h1>\n      </mat-toolbar>\n      <div  class=\"addmargin\" style=\"background-color: white;\">\n        <form fxLayout=\"column\"  class=\"example-container\" #addBrand=\"ngForm\" >\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n            <div fxFlex=\"20\">\n                <label class=\"example-margin\">Name:</label>\n              </div>\n              <div fxFlex=\"50\">\n                  <mat-form-field class=\"example-full-width\">\n                      <input matInput type=\"text\" #nameInput=\"matInput\" #nameSelect (focus)=\"$event.target.select()\" placeholder=\"Brand Name\" [(ngModel)]=\"brand.name\" name=\"name\" #name=\"ngModel\" autofocus required>\n                    </mat-form-field>\n                \n                    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"mat-body-1 center-align\">\n            \n                      <div *ngIf=\"name.errors.required\">\n                        Name is required.\n                      </div>\n                     \n                    </div>\n                 \n               \n                  </div>\n               \n                  </div>\n                  \n                 <div fxLayout=\"row\" fxLayoutAlign=\"start start\" >\n                      <div fxFlex=\"20\">\n                          <label class=\"example-margin\">Code:</label>\n                        </div>\n                        <div fxFlex=\"50\">\n            <mat-form-field class=\"example-full-width\">\n      \n                <input matInput type=\"text\" placeholder=\"Brand Code\" [(ngModel)]=\"brand.code\"  name=\"code\" #code=\"ngModel\">\n          \n              </mat-form-field>\n      \n              <!-- <div *ngIf=\"size.invalid && (size.dirty || size.touched)\" class=\"mat-body-1 center-align\">\n      \n                <div *ngIf=\"size.errors.required\">\n                    Size is required.\n                </div>\n               \n              </div> -->\n              </div>\n              </div>\n            \n         \n        \n         \n     \n  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n      <div fxFlex=\"20\"></div>\n      <div fxFlex=\"50\">\n<button mat-raised-button class=\"mat-subheading-2 button-style example-full-width\" type=\"reset\" [disabled]=\"addBrand.invalid\" (click)=\"OnSubmit(addBrand)\">Save</button>\n    </div>\n  </div>\n              </form>\n              </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/brands/brand-add/brand-add.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/products/brands/brand-add/brand-add.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/brands/brand-add/brand-add.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/products/brands/brand-add/brand-add.component.ts ***!
  \******************************************************************/
/*! exports provided: BrandAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandAddComponent", function() { return BrandAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/brand.service */ "./src/app/services/brand.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/brand */ "./src/app/models/brand.ts");
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







var BrandAddComponent = /** @class */ (function () {
    function BrandAddComponent(brandService, loginservice, router, snackBar) {
        this.brandService = brandService;
        this.loginservice = loginservice;
        this.router = router;
        this.snackBar = snackBar;
        this.brand = new src_app_models_brand__WEBPACK_IMPORTED_MODULE_4__["Brand"]('', '', '', '');
    }
    BrandAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginservice.getUserName().subscribe(function (data) {
            if (data.Identifier === "employee") {
                _this.router.navigateByUrl('login');
            }
        });
    };
    BrandAddComponent.prototype.OnSubmit = function (form) {
        var _this = this;
        this.brandService.addBrand(this.brand).subscribe(function (data) {
            _this.snackBar.open("Brand Added", "Success", {
                duration: 4000
            });
            _this.nameInput.focus();
            _this.brand = new src_app_models_brand__WEBPACK_IMPORTED_MODULE_4__["Brand"]('', '', '', '');
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
                else if (err.status === 300) {
                    _this.snackBar.open(err.error.error, "Alert", {
                        duration: 3000
                    });
                    _this.brand = err.error.data;
                    _this.nameInput.focus();
                    var nameselect_1 = _this.nameSelect.nativeElement;
                    setTimeout(function () { nameselect_1.select(); }, 50);
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameInput'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInput"])
    ], BrandAddComponent.prototype, "nameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameSelect'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BrandAddComponent.prototype, "nameSelect", void 0);
    BrandAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brand-add',
            template: __webpack_require__(/*! ./brand-add.component.html */ "./src/app/products/brands/brand-add/brand-add.component.html"),
            styles: [__webpack_require__(/*! ./brand-add.component.scss */ "./src/app/products/brands/brand-add/brand-add.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_1__["BrandService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], BrandAddComponent);
    return BrandAddComponent;
}());



/***/ }),

/***/ "./src/app/products/brands/brand-edit/brand-edit.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/products/brands/brand-edit/brand-edit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2 mat-dialog-title>Install Angular</h2> -->\n\n<mat-toolbar color=\"primary\" class=\"toolbar\">\n    <mat-card-title class=\"mat-card-title\">Edit Brand Details</mat-card-title>\n    <span class=\"toolbar-spacer\"></span>\n    <mat-icon (click)=\"onNoClick()\" class=\"cursor\">cancel</mat-icon>\n  </mat-toolbar>\n  <form  #editBrand=\"ngForm\">\n  <mat-dialog-content class=\"mat-typography\">\n        <div class=\"form-group\">\n        <div fxLayout=\"column\">\n          <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n            <mat-form-field class=\"example-full-width\">\n                <input matInput [(ngModel)]=\"data.name\" placeholder=\"Brand Name\" name=\"name\" autofocus>\n              </mat-form-field>\n          </div>\n        \n      \n          <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n              <mat-form-field class=\"example-full-width\">\n                  <input matInput [(ngModel)]=\"data.code\" placeholder=\"Brand Code\" name=\"code\">\n                </mat-form-field>\n            </div>\n           \n             \n        </div>\n     </div>\n  \n   \n</mat-dialog-content>\n<mat-dialog-actions align=\"start\">\n  <button mat-raised-button color=\"primary\" [disabled]=\"editBrand.invalid\" (click)=\"onSubmit()\" >Save</button>\n<button mat-button mat-dialog-close>Cancel</button>\n</mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./src/app/products/brands/brand-edit/brand-edit.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/products/brands/brand-edit/brand-edit.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/brands/brand-edit/brand-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/products/brands/brand-edit/brand-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: BrandEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandEditComponent", function() { return BrandEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/brand */ "./src/app/models/brand.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/brand.service */ "./src/app/services/brand.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var BrandEditComponent = /** @class */ (function () {
    function BrandEditComponent(dialogRef, brandService, router, snackBar, data) {
        this.dialogRef = dialogRef;
        this.brandService = brandService;
        this.router = router;
        this.snackBar = snackBar;
        this.data = data;
    }
    BrandEditComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    BrandEditComponent.prototype.ngOnInit = function () {
    };
    BrandEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.brandService.updateBrand(this.data).subscribe(function () {
            _this.dialogRef.close();
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
                else {
                    _this.snackBar.open("Updated Failed", "Alert", {
                        duration: 4000
                    });
                }
            }
        });
    };
    BrandEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brand-edit',
            template: __webpack_require__(/*! ./brand-edit.component.html */ "./src/app/products/brands/brand-edit/brand-edit.component.html"),
            styles: [__webpack_require__(/*! ./brand-edit.component.scss */ "./src/app/products/brands/brand-edit/brand-edit.component.scss")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_4__["BrandService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], src_app_models_brand__WEBPACK_IMPORTED_MODULE_1__["Brand"]])
    ], BrandEditComponent);
    return BrandEditComponent;
}());



/***/ }),

/***/ "./src/app/products/brands/brand/brand.component.html":
/*!************************************************************!*\
  !*** ./src/app/products/brands/brand/brand.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n    <div fxFlex class=\"form-component-holder mat-elevation-z4\">\n      <mat-toolbar class=\"form-header\">\n        <h1 class=\"mat-headline\">Brand List</h1>\n      </mat-toolbar>\n      <div style=\"margin: 10px;\">\n          <button [hidden]=\"addHidden\" mat-raised-button class=\"mat-subheading-2 button-style\" routerLink=\"add\"><mat-icon>add</mat-icon><span style=\"margin: 5px;\">New</span></button>\n      </div>\n<mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n  \n  <div class=\"mat-elevation-z8\" style=\"overflow-y:auto\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n  \n      <!-- ID Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> ID </th>\n        <td mat-cell *matCellDef=\"let i=index\"> {{i+1}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Brand Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n    \n      <ng-container matColumnDef=\"code\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Brand Code </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.code}} </td>\n        </ng-container>\n     \n      <ng-container matColumnDef=\"edit\">\n        <th mat-header-cell *matHeaderCellDef [hidden]=\"editHidden\"> </th>\n        <td mat-cell *matCellDef=\"let element\" [hidden]=\"editHidden\"><mat-icon class=\"cursor\" (click)=\"editBrand(element)\">edit</mat-icon> </td>\n      </ng-container>\n     \n      <ng-container matColumnDef=\"delete\">\n        <th mat-header-cell *matHeaderCellDef [hidden]=\"deleteHidden\"> </th>\n        <td mat-cell *matCellDef=\"let element\" [hidden]=\"deleteHidden\"><mat-icon class=\"cursor\" (click)=\"deleteBrand(element)\">delete</mat-icon> </td>\n      </ng-container>\n   \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n  \n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/products/brands/brand/brand.component.scss":
/*!************************************************************!*\
  !*** ./src/app/products/brands/brand/brand.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/brands/brand/brand.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/products/brands/brand/brand.component.ts ***!
  \**********************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _brand_edit_brand_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../brand-edit/brand-edit.component */ "./src/app/products/brands/brand-edit/brand-edit.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/brand.service */ "./src/app/services/brand.service.ts");
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







var BrandComponent = /** @class */ (function () {
    function BrandComponent(brandService, loginservice, router, dialog) {
        this.brandService = brandService;
        this.loginservice = loginservice;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'name', 'code', 'edit', 'delete'];
        this.editHidden = false;
        this.addHidden = false;
        this.deleteHidden = false;
        this.brands = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.brands);
    }
    BrandComponent.prototype.ngOnInit = function () {
        this.onload();
        // this.brandService.getallBrand().subscribe(
        //   (data:Array<Brand>)=>{
        //     this.brands=data;
        //     this.dataSource = new MatTableDataSource(this.brands);
        //     this.dataSource.paginator = this.paginator;
        //     this.dataSource.sort = this.sort;
        // },
        // (err)=>{
        //   if(err instanceof HttpErrorResponse){
        //     if(err.status===401){
        //       this.router.navigateByUrl('login');
        //      }
        //   }
        // }
        // )
    };
    BrandComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    BrandComponent.prototype.editBrand = function (brand) {
        var dialogRef = this.dialog.open(_brand_edit_brand_edit_component__WEBPACK_IMPORTED_MODULE_1__["BrandEditComponent"], {
            width: "600px",
            data: brand
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log(`Dialog result: ${result}`);
        });
    };
    BrandComponent.prototype.deleteBrand = function (brand) {
        var _this = this;
        if (confirm('Are You Sure to Delete this Brand ?') === true) {
            this.brandService.deleteBrand(brand.uuid).subscribe(function (response) {
                _this.onload();
            });
        }
    };
    BrandComponent.prototype.onload = function () {
        var _this = this;
        this.loginservice.getUserName().subscribe(function (data) {
            if (data.Identifier === "employee") {
                _this.editHidden = true;
                _this.addHidden = true;
                _this.deleteHidden = true;
            }
            _this.brandService.getallBrand().subscribe(function (data) {
                _this.brands = data;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.brands);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }, function (err) {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                    if (err.status === 401) {
                        _this.router.navigateByUrl('login');
                    }
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], BrandComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], BrandComponent.prototype, "sort", void 0);
    BrandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brand',
            template: __webpack_require__(/*! ./brand.component.html */ "./src/app/products/brands/brand/brand.component.html"),
            styles: [__webpack_require__(/*! ./brand.component.scss */ "./src/app/products/brands/brand/brand.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_5__["BrandService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], BrandComponent);
    return BrandComponent;
}());



/***/ }),

/***/ "./src/app/products/glasses/frame-material-add/frame-material-add.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/products/glasses/frame-material-add/frame-material-add.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n    <div fxFlex class=\"form-component-holder mat-elevation-z4\">\n      <mat-toolbar class=\"form-header\">\n        <h1 class=\"mat-headline\">Add Frame Material</h1>\n      </mat-toolbar>\n      <div  class=\"addmargin\" style=\"background-color: white;\">\n        <form fxLayout=\"column\"  class=\"example-container\" #addFrameMaterial=\"ngForm\" >\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n            <div fxFlex=\"20\">\n                <label class=\"example-margin\">Name:</label>\n              </div>\n              <div fxFlex=\"50\">\n                  <mat-form-field class=\"example-full-width\">\n                      <input matInput type=\"text\" #nameInput=\"matInput\" #nameSelect (focus)=\"$event.target.select()\" placeholder=\"Frame Material Name\" [(ngModel)]=\"framematerial.name\" name=\"name\" #name=\"ngModel\" required autofocus>\n                    </mat-form-field>\n                \n                    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"mat-body-1 center-align\">\n            \n                      <div *ngIf=\"name.errors.required\">\n                        Name is required.\n                      </div>\n                     \n                    </div>\n                 \n               \n                  </div>\n               \n                  </div>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <div fxFlex=\"20\">\n                        <label class=\"example-margin\">Model:</label>\n                      </div>\n                      <div fxFlex=\"50\">\n                        <mat-form-field class=\"example-full-width\">\n                          <mat-select  placeholder=\"Frame Material Model\" [(ngModel)]=\"framematerial.model\" #model=\"ngModel\" name=\"model\" required>\n                            <!-- <mat-option>None</mat-option> -->\n                            <mat-option *ngFor=\"let model of models\" [value]=\"model\">{{model}}</mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                        <div *ngIf=\"model.invalid && (model.dirty || model.touched)\" class=\"mat-body-1 center-align\">\n            \n                            <div *ngIf=\"model.errors.required\">\n                              Model is required.\n                            </div>\n                           \n                          </div>\n                       \n                          </div>\n                       \n                          </div>\n                 \n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\" >\n                      <div fxFlex=\"20\">\n                          <label class=\"example-margin\">Size:</label>\n                        </div>\n                        <div fxFlex=\"50\">\n            <mat-form-field class=\"example-full-width\">\n      \n                <input matInput type=\"number\" placeholder=\"Size\" [(ngModel)]=\"framematerial.size\"  name=\"size\" #size=\"ngModel\" required>\n          \n              </mat-form-field>\n      \n              <div *ngIf=\"size.invalid && (size.dirty || size.touched)\" class=\"mat-body-1 center-align\">\n      \n                <div *ngIf=\"size.errors.required\">\n                    Size is required.\n                </div>\n               \n              </div>\n              </div>\n              </div>\n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                  <div fxFlex=\"20\">\n                      <label class=\"example-margin\">Quantity:</label>\n                    </div>\n                    <div fxFlex=\"50\">\n        <mat-form-field class=\"example-full-width\">\n    \n            <input matInput  type=\"number\" #QuantitySelect #quantityInput=\"matInput\" placeholder=\"Quantity\" pattern=\"^\\d+(\\.\\d+)*$\" [(ngModel)]=\"framematerial.quantity\" name=\"quantity\" #quantity=\"ngModel\" minlength=\"10\" required>\n      \n          </mat-form-field>\n    \n          <div *ngIf=\"quantity.invalid && (quantity.dirty || quantity.touched)\" class=\"mat-body-1 center-align\">\n      \n              <div *ngIf=\"quantity.errors.required\">\n                  Quantity is required.\n              </div>\n              <div *ngIf=\"quantity.errors.minlength\">\n                  Quantity is Greater than Zero.\n              </div>\n              <div *ngIf=\"quantity.errors.pattern\">\n                  Quantity Rate is Not Valid.\n              </div>\n            </div>\n            <div class=\"mat-body-1 center-align\">{{addframematerial}}</div>\n            \n          </div>\n          </div>\n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                  <div fxFlex=\"20\">\n                      <label class=\"example-margin\">Price:</label>\n                    </div>\n                    <div fxFlex=\"50\">\n                      <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\n                        <div fxFlex=\"50\">\n        <mat-form-field class=\"example-full-width\">\n  \n            <input matInput type=\"number\" #retailerpriceSelect #retailerpriceInput=\"matInput\" placeholder=\"Retailer Price\" pattern=\"[0-9]*\" [(ngModel)]=\"framematerial.retailerPrice\" name=\"retailerPrice\" #retailerPrice=\"ngModel\" required minlength=\"10\">\n      \n          </mat-form-field>\n          <div *ngIf=\"retailerPrice.invalid && (retailerPrice.dirty || retailerPrice.touched)\" class=\"mat-body-1 center-align\">\n      \n              <div *ngIf=\"retailerPrice.errors.required\">\n                  Retailer Price is required.\n              </div>\n              <div *ngIf=\"retailerPrice.errors.minlength\">\n                  Retailer Price is Greater than Zero.\n              </div>\n              <div *ngIf=\"retailerPrice.errors.pattern\">\n                  RetailerPrice Rate is Not Valid .\n              </div>\n            </div>\n          </div>\n          <div fxFlex=\"50\">\n          <mat-form-field class=\"example-full-width\">\n  \n              <input matInput type=\"number\" placeholder=\"WholeSaler Price\" [(ngModel)]=\"framematerial.wholesalerPrice\"  name=\"wholesalerPrice\">\n        \n            </mat-form-field>\n            </div>\n         \n          </div>\n        </div>\n          </div>\n         \n     \n  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n      <div fxFlex=\"20\"></div>\n      <div fxFlex=\"50\">\n<button mat-raised-button class=\"mat-subheading-2 button-style example-full-width\" type=\"reset\" [disabled]=\"addFrameMaterial.invalid\" (click)=\"OnSubmit(addFrameMaterial)\">Save</button>\n    </div>\n  </div>\n              </form>\n              </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/products/glasses/frame-material-add/frame-material-add.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/products/glasses/frame-material-add/frame-material-add.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/glasses/frame-material-add/frame-material-add.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/products/glasses/frame-material-add/frame-material-add.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FrameMaterialAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameMaterialAddComponent", function() { return FrameMaterialAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_frame_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/frame-material */ "./src/app/models/frame-material.ts");
/* harmony import */ var src_app_services_frame_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/frame-material.service */ "./src/app/services/frame-material.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_enums_frame_material_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/enums/frame-material-model */ "./src/app/models/enums/frame-material-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FrameMaterialAddComponent = /** @class */ (function () {
    function FrameMaterialAddComponent(frameMaterialService, router, snackBar) {
        this.frameMaterialService = frameMaterialService;
        this.router = router;
        this.snackBar = snackBar;
        this.selected = "";
        this.FrameMaterialModel = src_app_models_enums_frame_material_model__WEBPACK_IMPORTED_MODULE_6__["FrameMaterialModel"];
        this.framematerial = new src_app_models_frame_material__WEBPACK_IMPORTED_MODULE_1__["FrameMaterial"]('', '', 1, this.selected, 1, 1, 1, '');
    }
    FrameMaterialAddComponent.prototype.ngOnInit = function () {
        var x = src_app_models_enums_frame_material_model__WEBPACK_IMPORTED_MODULE_6__["FrameMaterialModel"];
        var options = Object.keys(x);
        this.models = options.slice(options.length / 2);
        this.selected = this.models[0];
        this.nameInput.focus();
        this.framematerial.model = this.models[0];
    };
    FrameMaterialAddComponent.prototype.OnSubmit = function (form) {
        var _this = this;
        // if(this.framematerial.quantity <= 0){
        //     this.framematerial=this.framematerial;
        //     this.Quantity.focus();
        //     const select=<HTMLInputElement>this.QuantitySelect.nativeElement;
        //     setTimeout(function() {  select.select(); }, 50);
        //     this.snackBar.open("Quantity is Greater Zero","Alert",{
        //      duration:3000
        //    });
        //   }else if(this.framematerial.retailerPrice <= 0){
        //         this.framematerial=this.framematerial;
        //         this.RetailerPrice.focus();
        //         const select=<HTMLInputElement>this.retailerpriceSelect.nativeElement;
        //         setTimeout(function() {  select.select(); }, 50);
        //         this.snackBar.open("RetailerPrice is Greater Zero","Alert",{
        //          duration:3000
        //        });
        //   }
        //   else{
        this.frameMaterialService.addFrameMaterial(this.framematerial).subscribe(function (data) {
            _this.snackBar.open("Frame Material Added", "Success", {
                duration: 4000
            });
            _this.nameInput.focus();
            _this.framematerial = new src_app_models_frame_material__WEBPACK_IMPORTED_MODULE_1__["FrameMaterial"]('', '', 1, _this.selected, 1, 1, 1, '');
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
                else if (err.status === 300) {
                    _this.snackBar.open(err.error.error, "Alert", {
                        duration: 3000
                    });
                    _this.framematerial = err.error.data;
                    _this.nameInput.focus();
                    var nameselect_1 = _this.nameSelect.nativeElement;
                    setTimeout(function () { nameselect_1.select(); }, 50);
                }
            }
        });
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('quantityInput'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInput"])
    ], FrameMaterialAddComponent.prototype, "Quantity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('retailerpriceInput'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInput"])
    ], FrameMaterialAddComponent.prototype, "RetailerPrice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameInput'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInput"])
    ], FrameMaterialAddComponent.prototype, "nameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameSelect'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FrameMaterialAddComponent.prototype, "nameSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('QuantitySelect'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FrameMaterialAddComponent.prototype, "QuantitySelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('retailerpriceSelect'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FrameMaterialAddComponent.prototype, "retailerpriceSelect", void 0);
    FrameMaterialAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frame-material-add',
            template: __webpack_require__(/*! ./frame-material-add.component.html */ "./src/app/products/glasses/frame-material-add/frame-material-add.component.html"),
            styles: [__webpack_require__(/*! ./frame-material-add.component.scss */ "./src/app/products/glasses/frame-material-add/frame-material-add.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_frame_material_service__WEBPACK_IMPORTED_MODULE_2__["FrameMaterialService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], FrameMaterialAddComponent);
    return FrameMaterialAddComponent;
}());



/***/ }),

/***/ "./src/app/products/glasses/frame-material-edit/frame-material-edit.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/products/glasses/frame-material-edit/frame-material-edit.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2 mat-dialog-title>Install Angular</h2> -->\n\n    <mat-toolbar color=\"primary\" class=\"toolbar\">\n      <mat-card-title class=\"mat-card-title\">Edit Frame Material Details</mat-card-title>\n      <span class=\"toolbar-spacer\"></span>\n      <mat-icon (click)=\"onNoClick()\" class=\"cursor\">cancel</mat-icon>\n    </mat-toolbar>\n    <form  #editFrameMaterial=\"ngForm\">\n    <mat-dialog-content class=\"mat-typography\">\n          <div class=\"form-group\">\n          <div fxLayout=\"column\">\n            <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n              <mat-form-field class=\"example-full-width\">\n                  <input matInput [(ngModel)]=\"data.name\" placeholder=\" Flavour Name\" name=\"name\" autofocus>\n                </mat-form-field>\n            </div>\n          \n          \n            <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n              <mat-form-field class=\"example-full-width\">\n                  <mat-select  placeholder=\"Frame Material Model\" [(ngModel)]=\"data.model\" name=\"model\" required>\n                      <!-- <mat-option>None</mat-option> -->\n                      <mat-option *ngFor=\"let model of models\" [value]=\"model\">{{model}}</mat-option>\n                    </mat-select>\n                  <!-- <input matInput [disabled]=\"false\" [(ngModel)]=\"data.model\" [value]=\"data.model\" placeholder=\"Flavour Code\" name=\"data.code\"> -->\n                </mat-form-field>\n            </div>\n            <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput [(ngModel)]=\"data.size\" placeholder=\"Size\" name=\"size\" required>\n                  </mat-form-field>\n              </div>\n              <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n                  <mat-form-field class=\"example-full-width\">\n                      <input matInput [(ngModel)]=\"data.quantity\" placeholder=\"Quantity\" name=\"quantity\" required>\n                    </mat-form-field>\n                </div>\n                <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput [(ngModel)]=\"data.retailerPrice\" placeholder=\"Retailer Price\" name=\"retailerPrice\" required>\n                      </mat-form-field>\n                  </div>\n                  <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n                      <mat-form-field class=\"example-full-width\">\n                          <input matInput [(ngModel)]=\"data.wholesalerPrice\" placeholder=\"WholeSaler Price\" name=\"wholesalerPrice\">\n                        </mat-form-field>\n                    </div>\n          </div>\n       </div>\n    \n     \n</mat-dialog-content>\n<mat-dialog-actions align=\"start\">\n    <button mat-raised-button color=\"primary\" [disabled]=\"editFrameMaterial.invalid\" (click)=\"onSubmit()\" >Save</button>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <!-- <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\n  </mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./src/app/products/glasses/frame-material-edit/frame-material-edit.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/products/glasses/frame-material-edit/frame-material-edit.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/glasses/frame-material-edit/frame-material-edit.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/products/glasses/frame-material-edit/frame-material-edit.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FrameMaterialEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameMaterialEditComponent", function() { return FrameMaterialEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_frame_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/frame-material */ "./src/app/models/frame-material.ts");
/* harmony import */ var src_app_models_enums_frame_material_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/enums/frame-material-model */ "./src/app/models/enums/frame-material-model.ts");
/* harmony import */ var src_app_services_frame_material_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/frame-material.service */ "./src/app/services/frame-material.service.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var FrameMaterialEditComponent = /** @class */ (function () {
    function FrameMaterialEditComponent(dialogRef, framematerialService, router, snackBar, data) {
        this.dialogRef = dialogRef;
        this.framematerialService = framematerialService;
        this.router = router;
        this.snackBar = snackBar;
        this.data = data;
        this.FrameMaterialModel = src_app_models_enums_frame_material_model__WEBPACK_IMPORTED_MODULE_3__["FrameMaterialModel"];
    }
    FrameMaterialEditComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FrameMaterialEditComponent.prototype.ngOnInit = function () {
        var x = src_app_models_enums_frame_material_model__WEBPACK_IMPORTED_MODULE_3__["FrameMaterialModel"];
        var options = Object.keys(x);
        this.models = options.slice(options.length / 2);
    };
    FrameMaterialEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.framematerialService.updateFrameMaterial(this.data).subscribe(function () {
            _this.dialogRef.close();
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
                else {
                    _this.snackBar.open("Updated Failed", "Alert", {
                        duration: 4000
                    });
                }
            }
        });
    };
    FrameMaterialEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frame-material-edit',
            template: __webpack_require__(/*! ./frame-material-edit.component.html */ "./src/app/products/glasses/frame-material-edit/frame-material-edit.component.html"),
            styles: [__webpack_require__(/*! ./frame-material-edit.component.scss */ "./src/app/products/glasses/frame-material-edit/frame-material-edit.component.scss")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], src_app_services_frame_material_service__WEBPACK_IMPORTED_MODULE_4__["FrameMaterialService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], src_app_models_frame_material__WEBPACK_IMPORTED_MODULE_2__["FrameMaterial"]])
    ], FrameMaterialEditComponent);
    return FrameMaterialEditComponent;
}());



/***/ }),

/***/ "./src/app/products/glasses/frame-material/frame-material.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/products/glasses/frame-material/frame-material.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n    <div fxFlex class=\"form-component-holder mat-elevation-z4\">\n      <mat-toolbar class=\"form-header\">\n        <h1 class=\"mat-headline\">Frame Material List</h1>\n      </mat-toolbar>\n      <div style=\"margin: 10px;\">\n          <button mat-raised-button class=\"mat-subheading-2 button-style\" routerLink=\"add\"><mat-icon>add</mat-icon><span style=\"margin: 5px;\">New</span></button>\n      </div>\n<mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n  \n  <div class=\"mat-elevation-z8\" style=\"overflow-y:auto\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n  \n      <!-- ID Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n        <td mat-cell *matCellDef=\"let i=index\"> {{i+1}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n    \n      <ng-container matColumnDef=\"model\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Model </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.model}} </td>\n        </ng-container>\n      <ng-container matColumnDef=\"size\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Size </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.size}} </td>\n      </ng-container>\n  \n   \n      <ng-container matColumnDef=\"quantity\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Quantity </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n      </ng-container>\n  \n\n      <ng-container matColumnDef=\"retailerPrice\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Retailer Price </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.retailerPrice}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"wholesalerPrice\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> WholeSaler Price </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.wholesalerPrice}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"edit\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n        <td mat-cell *matCellDef=\"let element\"><mat-icon class=\"cursor\" (click)=\"editFrameMaterial(element)\">edit</mat-icon> </td>\n      </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n  \n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/products/glasses/frame-material/frame-material.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/products/glasses/frame-material/frame-material.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/glasses/frame-material/frame-material.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/products/glasses/frame-material/frame-material.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FrameMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameMaterialComponent", function() { return FrameMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_frame_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/frame-material.service */ "./src/app/services/frame-material.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _frame_material_edit_frame_material_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frame-material-edit/frame-material-edit.component */ "./src/app/products/glasses/frame-material-edit/frame-material-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FrameMaterialComponent = /** @class */ (function () {
    function FrameMaterialComponent(frameMaterialService, router, dialog) {
        // Create 100 users
        // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
        this.frameMaterialService = frameMaterialService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'name', 'model', 'size', 'quantity', 'retailerPrice', 'wholesalerPrice', 'edit'];
        // dataSource: MatTableDataSource<FrameMaterial>;
        this.framematerials = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.framematerials);
        // Assign the data to the data source for the table to render
    }
    FrameMaterialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.frameMaterialService.getallFrameMaterial().subscribe(function (data) {
            _this.framematerials = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.framematerials);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
            }
        });
    };
    FrameMaterialComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    FrameMaterialComponent.prototype.editFrameMaterial = function (framematerial) {
        // console.log(framematerial);
        var dialogRef = this.dialog.open(_frame_material_edit_frame_material_edit_component__WEBPACK_IMPORTED_MODULE_5__["FrameMaterialEditComponent"], {
            width: "600px",
            data: framematerial
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log(`Dialog result: ${result}`);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], FrameMaterialComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], FrameMaterialComponent.prototype, "sort", void 0);
    FrameMaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frame-material',
            template: __webpack_require__(/*! ./frame-material.component.html */ "./src/app/products/glasses/frame-material/frame-material.component.html"),
            styles: [__webpack_require__(/*! ./frame-material.component.scss */ "./src/app/products/glasses/frame-material/frame-material.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_frame_material_service__WEBPACK_IMPORTED_MODULE_2__["FrameMaterialService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], FrameMaterialComponent);
    return FrameMaterialComponent;
}());



/***/ }),

/***/ "./src/app/products/glasses/frame-model-add/frame-model-add.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/products/glasses/frame-model-add/frame-model-add.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n    <div fxFlex class=\"form-component-holder mat-elevation-z4\">\n      <mat-toolbar class=\"form-header\">\n        <h1 class=\"mat-headline\">Add Frame Model</h1>\n      </mat-toolbar>\n      <div  class=\"addmargin\" style=\"background-color: white;\">\n        <form fxLayout=\"column\"  class=\"example-container\" #addFrameMaterial=\"ngForm\" >\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n            <div fxFlex=\"20\">\n                <label class=\"example-margin\">Brand:</label>\n              </div>\n              <div fxFlex=\"50\">\n                  <mat-form-field class=\"example-full-width\">\n                      <input type=\"text\" #nameInput=\"matInput\" #nameSelect placeholder=\"Pick Brand one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" name=\"brand\" [matAutocomplete]=\"auto\" autofocus required>\n                      <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                        <mat-option (onSelectionChange)=\"onSelectionChange($event,option)\" *ngFor=\"let option of filteredOptions | async\" [value]=\"option.name\">\n                          {{option.name}}\n                        </mat-option>\n                      </mat-autocomplete>\n                    </mat-form-field>\n                 \n                    <div *ngIf=\"myControl.invalid && (myControl.dirty || myControl.touched)\" class=\"mat-body-1 center-align\">\n    \n                      <div *ngIf=\"myControl.errors.required\">\n                        Brand is required.\n                      </div>\n                     \n                    </div>\n                  </div>\n               \n                  </div>\n                  <span [hidden]=brandhidden>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\" >\n                    <div fxFlex=\"20\">\n                        <label class=\"example-margin\">Model:</label>\n                      </div>\n                      <div fxFlex=\"50\">\n          <mat-form-field class=\"example-full-width\">\n    \n              <input matInput type=\"text\" placeholder=\"Model\" [(ngModel)]=\"framemodel.model\" id=\"findModel\" (focusout)=\"findmodel()\"  name=\"model\" #model=\"ngModel\" required>\n        \n            </mat-form-field>\n    \n            <div *ngIf=\"model.invalid && (model.dirty || model.touched)\" class=\"mat-body-1 center-align\">\n    \n              <div *ngIf=\"model.errors.required\">\n                Model is required.\n              </div>\n             \n            </div>\n            </div>\n            </div>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <div fxFlex=\"20\">\n                        <label class=\"example-margin\">FrameType:</label>\n                      </div>\n                      <div fxFlex=\"50\">\n                        <mat-form-field class=\"example-full-width\">\n                          <mat-select  placeholder=\"Frame Type\" [(ngModel)]=\"framemodel.frametype\" #frametype=\"ngModel\" name=\"frametype\" required>\n                            <!-- <mat-option>None</mat-option> -->\n                            <mat-option *ngFor=\"let frametype of frametypes\" [value]=\"frametype\">{{frametype}}</mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                        <div *ngIf=\"frametype.invalid && (frametype.dirty || frametype.touched)\" class=\"mat-body-1 center-align\">\n            \n                            <div *ngIf=\"frametype.errors.required\">\n                              Frametype is required.\n                            </div>\n                           \n                          </div>\n                       \n                          </div>\n                       \n                          </div>\n                 \n                  <!-- <div fxLayout=\"row\" fxLayoutAlign=\"start start\" >\n                      <div fxFlex=\"20\">\n                          <label class=\"example-margin\">Size:</label>\n                        </div>\n                        <div fxFlex=\"50\">\n            <mat-form-field class=\"example-full-width\">\n      \n                <input matInput type=\"number\" placeholder=\"Size\" [(ngModel)]=\"framemodel.size\"  name=\"size\" #size=\"ngModel\" required>\n          \n              </mat-form-field>\n      \n              <div *ngIf=\"size.invalid && (size.dirty || size.touched)\" class=\"mat-body-1 center-align\">\n      \n                <div *ngIf=\"size.errors.required\">\n                    Size is required.\n                </div>\n               \n              </div>\n              </div>\n              </div> -->\n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                  <div fxFlex=\"20\">\n                      <label class=\"example-margin\">Quantity:</label>\n                    </div>\n                    <div fxFlex=\"50\">\n        <mat-form-field class=\"example-full-width\">\n    \n            <input matInput  type=\"number\" #QuantitySelect #quantityInput=\"matInput\" placeholder=\"Quantity\" pattern=\"[0-9]*\" [(ngModel)]=\"framemodel.quantity\" name=\"quantity\" #quantity=\"ngModel\" minlength=\"10\" required>\n      \n          </mat-form-field>\n    \n          <div *ngIf=\"quantity.invalid && (quantity.dirty || quantity.touched)\" class=\"mat-body-1 center-align\">\n      \n              <div *ngIf=\"quantity.errors.required\">\n                  Quantity is required.\n              </div>\n              <div *ngIf=\"quantity.errors.minlength\">\n                  Quantity is Greater than Zero.\n              </div>\n              <div *ngIf=\"quantity.errors.pattern\">\n                  Quantity Rate is Not Valid.\n              </div>\n            </div>\n            \n          </div>\n          </div>\n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                  <div fxFlex=\"20\">\n                      <label class=\"example-margin\">Price:</label>\n                    </div>\n                    <div fxFlex=\"50\">\n                      <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\n                        <div fxFlex=\"50\">\n        <mat-form-field class=\"example-full-width\">\n  \n            <input matInput type=\"number\" #retailerpriceSelect #retailerpriceInput=\"matInput\" placeholder=\"Retailer Price\" pattern=\"[0-9]*\" [(ngModel)]=\"framemodel.retailerPrice\" name=\"retailerPrice\" #retailerPrice=\"ngModel\" required minlength=\"10\">\n      \n          </mat-form-field>\n          <div *ngIf=\"retailerPrice.invalid && (retailerPrice.dirty || retailerPrice.touched)\" class=\"mat-body-1 center-align\">\n      \n              <div *ngIf=\"retailerPrice.errors.required\">\n                  Retailer Price is required.\n              </div>\n              <div *ngIf=\"retailerPrice.errors.minlength\">\n                  Retailer Price is Greater than Zero.\n              </div>\n              <div *ngIf=\"retailerPrice.errors.pattern\">\n                  RetailerPrice Rate is Not Valid .\n              </div>\n            </div>\n          </div>\n          <div fxFlex=\"50\">\n          <mat-form-field class=\"example-full-width\">\n  \n              <input matInput type=\"number\" placeholder=\"WholeSaler Price\" [(ngModel)]=\"framemodel.wholesalerPrice\"  name=\"wholesalerPrice\">\n        \n            </mat-form-field>\n            </div>\n         \n          </div>\n        </div>\n          </div>\n         \n     \n  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n      <div fxFlex=\"20\"></div>\n      <div fxFlex=\"50\">\n<button mat-raised-button class=\"mat-subheading-2 button-style example-full-width\" type=\"reset\" [(disabled)]=\"addFrameMaterial.invalid || myControl.invalid\" (click)=\"OnSubmit(myControl)\">Save</button>\n    </div>\n  </div>\n</span>\n              </form>\n              </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/products/glasses/frame-model-add/frame-model-add.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/products/glasses/frame-model-add/frame-model-add.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/glasses/frame-model-add/frame-model-add.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/products/glasses/frame-model-add/frame-model-add.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FrameModelAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameModelAddComponent", function() { return FrameModelAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/brand.service */ "./src/app/services/brand.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_frame_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/frame-model */ "./src/app/models/frame-model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_models_enums_frame_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/enums/frame-type */ "./src/app/models/enums/frame-type.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_frame_model_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/frame-model.service */ "./src/app/services/frame-model.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FrameModelAddComponent = /** @class */ (function () {
    function FrameModelAddComponent(brandService, loginservice, framemodelService, router, snackBar) {
        this.brandService = brandService;
        this.loginservice = loginservice;
        this.framemodelService = framemodelService;
        this.router = router;
        this.snackBar = snackBar;
        this.brands = [];
        this.FrameType = src_app_models_enums_frame_type__WEBPACK_IMPORTED_MODULE_7__["FrameType"];
        this.framemodel = new src_app_models_frame_model__WEBPACK_IMPORTED_MODULE_4__["FrameModel"]('', this.brand, '', '', 1, 1, 1, 1, '');
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.brandhidden = true;
    }
    FrameModelAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginservice.getUserName().subscribe(function (data) {
            if (data.Identifier === "employee") {
                _this.router.navigateByUrl('login');
            }
        });
        var x = src_app_models_enums_frame_type__WEBPACK_IMPORTED_MODULE_7__["FrameType"];
        var options = Object.keys(x);
        this.frametypes = options.slice(options.length / 2);
        this.framemodel.frametype = this.frametypes[0];
        this.brandService.getallBrand().subscribe(function (data) {
            _this.brands = data;
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
            }
        });
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) { return _this._filter(value); }));
    };
    FrameModelAddComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.brands.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    FrameModelAddComponent.prototype.onSelectionChange = function (event, brand) {
        if (event.isUserInput) {
            this.framemodel.brand = brand;
            this.brandhidden = false;
        }
    };
    FrameModelAddComponent.prototype.findmodel = function () {
        var _this = this;
        // var x =(<HTMLInputElement>(document.getElementById("findModel")));
        // x.value =x.value,
        this.framemodelService.findByModel(this.framemodel.model, this.framemodel.brand.uuid)
            .subscribe(function (framemodel) {
            if (framemodel != null) {
                _this.framemodel = framemodel;
                _this.framemodel.fk_companyid = "";
                _this.framemodel.uuid = "";
                // this.framemodel = new FrameModel('',this.brand,'','',1,1,1,1,'');
            }
        });
    };
    FrameModelAddComponent.prototype.OnSubmit = function (myControl) {
        var _this = this;
        this.framemodelService.addFrameModel(this.framemodel).subscribe(function (data) {
            _this.snackBar.open("Frame Model Added", "Success", {
                duration: 4000
            });
            _this.nameInput.focus();
            _this.brandhidden = true;
            _this.framemodel = new src_app_models_frame_model__WEBPACK_IMPORTED_MODULE_4__["FrameModel"]('', _this.brand, '', '', 1, 1, 1, 1, '');
            var x = src_app_models_enums_frame_type__WEBPACK_IMPORTED_MODULE_7__["FrameType"];
            var options = Object.keys(x);
            _this.frametypes = options.slice(options.length / 2);
            _this.framemodel.frametype = _this.frametypes[0];
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
                else if (err.status === 300) {
                    _this.snackBar.open(err.error.error, "Alert", {
                        duration: 3000
                    });
                    _this.framemodel = err.error.data;
                    _this.myControl.setValue(_this.framemodel.brand.name);
                    _this.nameInput.focus();
                    var nameselect_1 = _this.nameSelect.nativeElement;
                    setTimeout(function () { nameselect_1.select(); }, 50);
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameInput'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInput"])
    ], FrameModelAddComponent.prototype, "nameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameSelect'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FrameModelAddComponent.prototype, "nameSelect", void 0);
    FrameModelAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frame-model-add',
            template: __webpack_require__(/*! ./frame-model-add.component.html */ "./src/app/products/glasses/frame-model-add/frame-model-add.component.html"),
            styles: [__webpack_require__(/*! ./frame-model-add.component.scss */ "./src/app/products/glasses/frame-model-add/frame-model-add.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_1__["BrandService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"], src_app_services_frame_model_service__WEBPACK_IMPORTED_MODULE_9__["FrameModelService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], FrameModelAddComponent);
    return FrameModelAddComponent;
}());



/***/ }),

/***/ "./src/app/products/glasses/frame-model-edit/frame-model-edit.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/products/glasses/frame-model-edit/frame-model-edit.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-toolbar color=\"primary\" class=\"toolbar\">\n  <mat-card-title class=\"mat-card-title\">Edit Frame Model Details</mat-card-title>\n  <span class=\"toolbar-spacer\"></span>\n  <mat-icon (click)=\"onNoClick()\" class=\"cursor\">cancel</mat-icon>\n</mat-toolbar>\n<form  #editFrameModel=\"ngForm\">\n<mat-dialog-content class=\"mat-typography\">\n      <div class=\"form-group\">\n      <div fxLayout=\"column\">\n        <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n          <mat-form-field class=\"example-full-width\">\n            <input type=\"text\" #nameInput=\"matInput\" #nameSelect placeholder=\"Brand Name\" aria-label=\"Number\" matInput [formControl]=\"myControl\" name=\"brand\" [matAutocomplete]=\"auto\" autofocus required>\n            <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n              <mat-option (onSelectionChange)=\"onSelectionChange($event,option)\" *ngFor=\"let option of filteredOptions | async\" [value]=\"option.name\">\n                {{option.name}}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n       \n          <div *ngIf=\"myControl.invalid && (myControl.dirty || myControl.touched)\" class=\"mat-body-1 center-align\">\n\n            <div *ngIf=\"myControl.errors.required\">\n              Brand is required.\n            </div>\n           \n          </div>\n        </div>\n      \n      \n        <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n          <mat-form-field class=\"example-full-width\">\n    \n            <input matInput type=\"text\" placeholder=\"Model\" [(ngModel)]=\"data.model\"  name=\"model\" #model=\"ngModel\" required>\n      \n          </mat-form-field>\n  \n          <div *ngIf=\"model.invalid && (model.dirty || model.touched)\" class=\"mat-body-1 center-align\">\n  \n            <div *ngIf=\"model.errors.required\">\n              Model is required.\n            </div>\n           \n          </div>\n        </div>\n        <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n          <mat-form-field class=\"example-full-width\">\n            <mat-select  placeholder=\"Frame Type\" [(ngModel)]=\"data.frametype\" #frametype=\"ngModel\" name=\"frametype\" required>\n              <!-- <mat-option>None</mat-option> -->\n              <mat-option *ngFor=\"let frametype of frametypes\" [value]=\"frametype\">{{frametype}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div *ngIf=\"frametype.invalid && (frametype.dirty || frametype.touched)\" class=\"mat-body-1 center-align\">\n\n              <div *ngIf=\"frametype.errors.required\">\n                Frametype is required.\n              </div>\n             \n            </div>\n          </div>\n          <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n            <mat-form-field class=\"example-full-width\">\n    \n              <input matInput  type=\"number\" #QuantitySelect #quantityInput=\"matInput\" placeholder=\"Quantity\" pattern=\"[0-9]*\" [(ngModel)]=\"data.quantity\" name=\"quantity\" #quantity=\"ngModel\" minlength=\"10\" required>\n        \n            </mat-form-field>\n      \n            <div *ngIf=\"quantity.invalid && (quantity.dirty || quantity.touched)\" class=\"mat-body-1 center-align\">\n        \n                <div *ngIf=\"quantity.errors.required\">\n                    Quantity is required.\n                </div>\n                <div *ngIf=\"quantity.errors.minlength\">\n                    Quantity is Greater than Zero.\n                </div>\n                <div *ngIf=\"quantity.errors.pattern\">\n                    Quantity Rate is Not Valid.\n                </div>\n              </div>\n            </div>\n            <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n              <mat-form-field class=\"example-full-width\">\n  \n                <input matInput type=\"number\" placeholder=\"Retailer Price\" pattern=\"[0-9]*\" [(ngModel)]=\"data.retailerPrice\" name=\"retailerPrice\" #retailerPrice=\"ngModel\" required minlength=\"10\">\n          \n              </mat-form-field>\n              <div *ngIf=\"retailerPrice.invalid && (retailerPrice.dirty || retailerPrice.touched)\" class=\"mat-body-1 center-align\">\n          \n                  <div *ngIf=\"retailerPrice.errors.required\">\n                      Retailer Price is required.\n                  </div>\n                  <div *ngIf=\"retailerPrice.errors.minlength\">\n                      Retailer Price is Greater than Zero.\n                  </div>\n                  <div *ngIf=\"retailerPrice.errors.pattern\">\n                      RetailerPrice Rate is Not Valid .\n                  </div>\n                </div>\n              </div>\n              <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n                <mat-form-field class=\"example-full-width\">\n  \n                  <input matInput type=\"number\" placeholder=\"WholeSaler Price\" [(ngModel)]=\"data.wholesalerPrice\"  name=\"wholesalerPrice\">\n            \n                </mat-form-field>\n                </div>\n      </div>\n   </div>\n\n \n</mat-dialog-content>\n<mat-dialog-actions align=\"start\">\n<button mat-raised-button color=\"primary\" [disabled]=\"editFrameModel.invalid || myControl.invalid\" (click)=\"onSubmit()\" >Save</button>\n<button mat-button mat-dialog-close>Cancel</button>\n<!-- <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\n</mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./src/app/products/glasses/frame-model-edit/frame-model-edit.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/products/glasses/frame-model-edit/frame-model-edit.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/glasses/frame-model-edit/frame-model-edit.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/products/glasses/frame-model-edit/frame-model-edit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FrameModelEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameModelEditComponent", function() { return FrameModelEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_frame_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/frame-model */ "./src/app/models/frame-model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_frame_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/frame-model.service */ "./src/app/services/frame-model.service.ts");
/* harmony import */ var src_app_models_enums_frame_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/enums/frame-type */ "./src/app/models/enums/frame-type.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/brand.service */ "./src/app/services/brand.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var FrameModelEditComponent = /** @class */ (function () {
    function FrameModelEditComponent(dialogRef, framemodelService, brandService, router, snackBar, data) {
        this.dialogRef = dialogRef;
        this.framemodelService = framemodelService;
        this.brandService = brandService;
        this.router = router;
        this.snackBar = snackBar;
        this.data = data;
        this.brands = [];
        this.FrameType = src_app_models_enums_frame_type__WEBPACK_IMPORTED_MODULE_5__["FrameType"];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
    }
    FrameModelEditComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FrameModelEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = src_app_models_enums_frame_type__WEBPACK_IMPORTED_MODULE_5__["FrameType"];
        var options = Object.keys(x);
        this.frametypes = options.slice(options.length / 2);
        this.brandService.getallBrand().subscribe(function (data) {
            _this.brands = data;
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
            }
        });
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) { return _this._filter(value); }));
        this.myControl.setValue(this.data.brand.name);
    };
    FrameModelEditComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.brands.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    FrameModelEditComponent.prototype.onSelectionChange = function (event, brand) {
        if (event.isUserInput) {
            this.data.brand = brand;
        }
    };
    FrameModelEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.framemodelService.updateFrameModel(this.data).subscribe(function () {
            _this.dialogRef.close();
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
                else {
                    _this.snackBar.open("Updated Failed", "Alert", {
                        duration: 4000
                    });
                }
            }
        });
    };
    FrameModelEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frame-model-edit',
            template: __webpack_require__(/*! ./frame-model-edit.component.html */ "./src/app/products/glasses/frame-model-edit/frame-model-edit.component.html"),
            styles: [__webpack_require__(/*! ./frame-model-edit.component.scss */ "./src/app/products/glasses/frame-model-edit/frame-model-edit.component.scss")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], src_app_services_frame_model_service__WEBPACK_IMPORTED_MODULE_4__["FrameModelService"], src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_7__["BrandService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], src_app_models_frame_model__WEBPACK_IMPORTED_MODULE_2__["FrameModel"]])
    ], FrameModelEditComponent);
    return FrameModelEditComponent;
}());



/***/ }),

/***/ "./src/app/products/glasses/frame-model/frame-model.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/products/glasses/frame-model/frame-model.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"form-component-holder mat-elevation-z4\">\n    <mat-toolbar class=\"form-header\">\n      <h1 class=\"mat-headline\">Frame Model List</h1>\n    </mat-toolbar>\n    <div style=\"margin: 10px;\">\n        <button mat-raised-button [hidden]=\"addHidden\" class=\"mat-subheading-2 button-style\" routerLink=\"add\"><mat-icon>add</mat-icon><span style=\"margin: 5px;\">New</span></button>\n    </div>\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\" style=\"overflow-y:auto\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let i=index\"> {{i+1}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"brand\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Brand </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.brand.name}} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"model\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Model </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.model}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"frametype\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> FrameType </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.frametype}} </td>\n      </ng-container>\n    <!-- <ng-container matColumnDef=\"size\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Size </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.size}} </td>\n    </ng-container> -->\n    \n \n    <ng-container matColumnDef=\"quantity\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Quantity </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"retailerPrice\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Retailer Price </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.retailerPrice | currency:'INR'}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"wholesalerPrice\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> WholeSaler Price </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.wholesalerPrice | currency:'INR'}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef [hidden]=\"editHidden\"> </th>\n      <td mat-cell *matCellDef=\"let element\" [hidden]=\"editHidden\"><mat-icon class=\"cursor\" (click)=\"editFrameModel(element)\">edit</mat-icon> </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/products/glasses/frame-model/frame-model.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/products/glasses/frame-model/frame-model.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/glasses/frame-model/frame-model.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/products/glasses/frame-model/frame-model.component.ts ***!
  \***********************************************************************/
/*! exports provided: FrameModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameModelComponent", function() { return FrameModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _frame_model_edit_frame_model_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frame-model-edit/frame-model-edit.component */ "./src/app/products/glasses/frame-model-edit/frame-model-edit.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_frame_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/frame-model.service */ "./src/app/services/frame-model.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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







var FrameModelComponent = /** @class */ (function () {
    function FrameModelComponent(frameModelService, loginservice, router, dialog) {
        this.frameModelService = frameModelService;
        this.loginservice = loginservice;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'brand', 'model', 'frametype', 'quantity', 'retailerPrice', 'wholesalerPrice', 'edit'];
        this.framemodels = [];
        this.editHidden = false;
        this.addHidden = false;
    }
    FrameModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginservice.getUserName().subscribe(function (data) {
            if (data.Identifier === "employee") {
                _this.editHidden = true;
                _this.addHidden = true;
            }
        });
        this.frameModelService.getallFrameModel().subscribe(function (data) {
            _this.framemodels = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.framemodels);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
            }
        });
    };
    FrameModelComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    FrameModelComponent.prototype.editFrameModel = function (framemodel) {
        var dialogRef = this.dialog.open(_frame_model_edit_frame_model_edit_component__WEBPACK_IMPORTED_MODULE_1__["FrameModelEditComponent"], {
            width: "600px",
            data: framemodel
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log(`Dialog result: ${result}`);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], FrameModelComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], FrameModelComponent.prototype, "sort", void 0);
    FrameModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frame-model',
            template: __webpack_require__(/*! ./frame-model.component.html */ "./src/app/products/glasses/frame-model/frame-model.component.html"),
            styles: [__webpack_require__(/*! ./frame-model.component.scss */ "./src/app/products/glasses/frame-model/frame-model.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_frame_model_service__WEBPACK_IMPORTED_MODULE_4__["FrameModelService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], FrameModelComponent);
    return FrameModelComponent;
}());



/***/ }),

/***/ "./src/app/products/glasses/frame-type-add/frame-type-add.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/products/glasses/frame-type-add/frame-type-add.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  frame-type-add works!\n</p>\n"

/***/ }),

/***/ "./src/app/products/glasses/frame-type-add/frame-type-add.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/products/glasses/frame-type-add/frame-type-add.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/glasses/frame-type-add/frame-type-add.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/products/glasses/frame-type-add/frame-type-add.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FrameTypeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameTypeAddComponent", function() { return FrameTypeAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrameTypeAddComponent = /** @class */ (function () {
    function FrameTypeAddComponent() {
    }
    FrameTypeAddComponent.prototype.ngOnInit = function () {
    };
    FrameTypeAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frame-type-add',
            template: __webpack_require__(/*! ./frame-type-add.component.html */ "./src/app/products/glasses/frame-type-add/frame-type-add.component.html"),
            styles: [__webpack_require__(/*! ./frame-type-add.component.scss */ "./src/app/products/glasses/frame-type-add/frame-type-add.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FrameTypeAddComponent);
    return FrameTypeAddComponent;
}());



/***/ }),

/***/ "./src/app/products/glasses/frame-type-edit/frame-type-edit.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/products/glasses/frame-type-edit/frame-type-edit.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2 mat-dialog-title>Install Angular</h2> -->\n\n<mat-toolbar color=\"primary\" class=\"toolbar\">\n    <mat-card-title class=\"mat-card-title\">Edit Frame Type Details</mat-card-title>\n    <span class=\"toolbar-spacer\"></span>\n    <mat-icon (click)=\"onNoClick()\" class=\"cursor\">cancel</mat-icon>\n  </mat-toolbar>\n<mat-dialog-content class=\"mat-typography\">\n  <form (submit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <div fxLayout=\"column\">\n          <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n            <mat-form-field class=\"example-full-width\">\n                <input matInput [disabled]=\"false\" [(ngModel)]=\"data.name\" [value]=\"data.name\" placeholder=\" Flavour Name\" name=\"data.name\" autofocus>\n              </mat-form-field>\n          </div>\n        \n        \n          <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n            <mat-form-field class=\"example-full-width\">\n                <input matInput [disabled]=\"false\" [(ngModel)]=\"data.model\" [value]=\"data.model\" placeholder=\"Flavour Code\" name=\"data.code\">\n              </mat-form-field>\n          </div>\n        </div>\n     </div>\n  \n    </form>\n</mat-dialog-content>\n<mat-dialog-actions align=\"start\">\n  <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Save</button>\n<button mat-button mat-dialog-close>Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/products/glasses/frame-type-edit/frame-type-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/products/glasses/frame-type-edit/frame-type-edit.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/glasses/frame-type-edit/frame-type-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/products/glasses/frame-type-edit/frame-type-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FrameTypeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameTypeEditComponent", function() { return FrameTypeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_frame_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/frame-type */ "./src/app/models/frame-type.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var FrameTypeEditComponent = /** @class */ (function () {
    function FrameTypeEditComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FrameTypeEditComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FrameTypeEditComponent.prototype.ngOnInit = function () {
    };
    FrameTypeEditComponent.prototype.onSubmit = function () {
        console.log(this.data);
    };
    FrameTypeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frame-type-edit',
            template: __webpack_require__(/*! ./frame-type-edit.component.html */ "./src/app/products/glasses/frame-type-edit/frame-type-edit.component.html"),
            styles: [__webpack_require__(/*! ./frame-type-edit.component.scss */ "./src/app/products/glasses/frame-type-edit/frame-type-edit.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], src_app_models_frame_type__WEBPACK_IMPORTED_MODULE_2__["FrameType"]])
    ], FrameTypeEditComponent);
    return FrameTypeEditComponent;
}());



/***/ }),

/***/ "./src/app/products/glasses/frame-type/frame-type.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/products/glasses/frame-type/frame-type.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  frame-type works!\n</p>\n"

/***/ }),

/***/ "./src/app/products/glasses/frame-type/frame-type.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/products/glasses/frame-type/frame-type.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/glasses/frame-type/frame-type.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products/glasses/frame-type/frame-type.component.ts ***!
  \*********************************************************************/
/*! exports provided: FrameTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameTypeComponent", function() { return FrameTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrameTypeComponent = /** @class */ (function () {
    function FrameTypeComponent() {
    }
    FrameTypeComponent.prototype.ngOnInit = function () {
    };
    FrameTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frame-type',
            template: __webpack_require__(/*! ./frame-type.component.html */ "./src/app/products/glasses/frame-type/frame-type.component.html"),
            styles: [__webpack_require__(/*! ./frame-type.component.scss */ "./src/app/products/glasses/frame-type/frame-type.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FrameTypeComponent);
    return FrameTypeComponent;
}());



/***/ }),

/***/ "./src/app/products/glasses/lens-type-add/lens-type-add.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/products/glasses/lens-type-add/lens-type-add.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"form-component-holder mat-elevation-z4\">\n    <mat-toolbar class=\"form-header\">\n      <h1 class=\"mat-headline\">Add Lens Type</h1>\n    </mat-toolbar>\n    <div  class=\"addmargin\" style=\"background-color: white;\">\n      <form fxLayout=\"column\"  class=\"example-container\" #addLensType=\"ngForm\" >\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n          <div fxFlex=\"20\">\n              <label class=\"example-margin\">Power LensType:</label>\n            </div>\n            <div fxFlex=\"50\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select  placeholder=\"Power LensType\" #powerlensInput [(ngModel)]=\"lenstype.powerlenstype\" #powerlenstype=\"ngModel\" name=\"powerlenstype\" required>\n                  <!-- <mat-option>None</mat-option> -->\n                  <mat-option *ngFor=\"let powerlens of powerlenstypes\" [value]=\"powerlens\">{{powerlens}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n              <div *ngIf=\"powerlenstype.invalid && (powerlenstype.dirty || powerlenstype.touched)\" class=\"mat-body-1 center-align\">\n  \n                  <div *ngIf=\"powerlenstype.errors.required\">\n                    PowerLensType is required.\n                  </div>\n                 \n                </div>\n             \n                </div>\n             \n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\" >\n                  <div fxFlex=\"20\">\n                      <label class=\"example-margin\">Name:</label>\n                    </div>\n                    <div fxFlex=\"50\">\n        <mat-form-field class=\"example-full-width\">\n  \n            <input matInput type=\"text\" placeholder=\"Name\" [(ngModel)]=\"lenstype.name\" (focusout)=\"findname()\"  name=\"name\" #name=\"ngModel\" required>\n      \n          </mat-form-field>\n  \n          <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"mat-body-1 center-align\">\n  \n            <div *ngIf=\"name.errors.required\">\n              Name is required.\n            </div>\n           \n          </div>\n          </div>\n          </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                  <div fxFlex=\"20\">\n                      <label class=\"example-margin\">LensMaterial:</label>\n                    </div>\n                    <div fxFlex=\"50\">\n                      <mat-radio-group [(ngModel)]=\"lenstype.lensmaterial\" name=\"lensmaterial\" #lensmaterial=\"ngModel\" required>\n                  <mat-radio-button class=\"example-radio-button\"  value=\"Fiber\">Fiber</mat-radio-button>\n                  <mat-radio-button class=\"example-radio-button\"  value=\"Glasses\">Glasses</mat-radio-button>\n                </mat-radio-group>\n                      \n                      <div *ngIf=\"lensmaterial.invalid && (lensmaterial.dirty || lensmaterial.touched)\" class=\"mat-body-1 center-align\">\n          \n                          <div *ngIf=\"lensmaterial.errors.required\">\n                            Lens Material is required.\n                          </div>\n                         \n                        </div>\n                     \n                        </div>\n                     \n                        </div>\n               \n                \n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <div fxFlex=\"20\">\n                    <label class=\"example-margin\">Quantity:</label>\n                  </div>\n                  <div fxFlex=\"50\">\n      <mat-form-field class=\"example-full-width\">\n  \n          <input matInput  type=\"number\" placeholder=\"Quantity\" pattern=\"[0-9]*\" [(ngModel)]=\"lenstype.quantity\" name=\"quantity\" #quantity=\"ngModel\" minlength=\"10\" required>\n    \n        </mat-form-field>\n  \n        <div *ngIf=\"quantity.invalid && (quantity.dirty || quantity.touched)\" class=\"mat-body-1 center-align\">\n    \n            <div *ngIf=\"quantity.errors.required\">\n                Quantity is required.\n            </div>\n            <div *ngIf=\"quantity.errors.minlength\">\n                Quantity is Greater than Zero.\n            </div>\n            <div *ngIf=\"quantity.errors.pattern\">\n                Quantity Rate is Not Valid.\n            </div>\n          </div>\n          \n        </div>\n        </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <div fxFlex=\"20\">\n                    <label class=\"example-margin\">Price:</label>\n                  </div>\n                  <div fxFlex=\"50\">\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\n                      <div fxFlex=\"50\">\n      <mat-form-field class=\"example-full-width\">\n\n          <input matInput type=\"number\" #retailerpriceSelect #retailerpriceInput=\"matInput\" placeholder=\"Retailer Price\" pattern=\"[0-9]*\" [(ngModel)]=\"lenstype.retailerPrice\" name=\"retailerPrice\" #retailerPrice=\"ngModel\" required minlength=\"10\">\n    \n        </mat-form-field>\n        <div *ngIf=\"retailerPrice.invalid && (retailerPrice.dirty || retailerPrice.touched)\" class=\"mat-body-1 center-align\">\n    \n            <div *ngIf=\"retailerPrice.errors.required\">\n                Retailer Price is required.\n            </div>\n            <div *ngIf=\"retailerPrice.errors.minlength\">\n                Retailer Price is Greater than Zero.\n            </div>\n            <div *ngIf=\"retailerPrice.errors.pattern\">\n                Retailer Price Rate is Not Valid .\n            </div>\n          </div>\n        </div>\n        <div fxFlex=\"50\">\n        <mat-form-field class=\"example-full-width\">\n\n            <input matInput type=\"number\" placeholder=\"WholeSaler Price\" [(ngModel)]=\"lenstype.wholesalerPrice\"  name=\"wholesalerPrice\">\n      \n          </mat-form-field>\n          </div>\n       \n        </div>\n      </div>\n        </div>\n       \n   \n<div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n    <div fxFlex=\"20\"></div>\n    <div fxFlex=\"50\">\n<button mat-raised-button class=\"mat-subheading-2 button-style example-full-width\" type=\"reset\" [(disabled)]=\"addLensType.invalid\" (click)=\"OnSubmit()\">Save</button>\n  </div>\n</div>\n            </form>\n            </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/products/glasses/lens-type-add/lens-type-add.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/products/glasses/lens-type-add/lens-type-add.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-button {\n  margin-top: 18px; }\n"

/***/ }),

/***/ "./src/app/products/glasses/lens-type-add/lens-type-add.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/products/glasses/lens-type-add/lens-type-add.component.ts ***!
  \***************************************************************************/
/*! exports provided: LensTypeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LensTypeAddComponent", function() { return LensTypeAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_enums_power_lens_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/enums/power-lens-type */ "./src/app/models/enums/power-lens-type.ts");
/* harmony import */ var src_app_services_lens_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/lens-type.service */ "./src/app/services/lens-type.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_lens_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/lens-type */ "./src/app/models/lens-type.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LensTypeAddComponent = /** @class */ (function () {
    function LensTypeAddComponent(lenstypeService, loginservice, router, snackBar) {
        this.lenstypeService = lenstypeService;
        this.loginservice = loginservice;
        this.router = router;
        this.snackBar = snackBar;
        this.PowerLensType = src_app_models_enums_power_lens_type__WEBPACK_IMPORTED_MODULE_1__["PowerLensType"];
        this.lenstype = new src_app_models_lens_type__WEBPACK_IMPORTED_MODULE_5__["LensType"]('', '', '', '', 1, 1, 1, '');
    }
    LensTypeAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginservice.getUserName().subscribe(function (data) {
            if (data.Identifier === "employee") {
                _this.router.navigateByUrl('login');
            }
        });
        var x = src_app_models_enums_power_lens_type__WEBPACK_IMPORTED_MODULE_1__["PowerLensType"];
        var options = Object.keys(x);
        this.powerlenstypes = options.slice(options.length / 2);
        this.lenstype.powerlenstype = this.powerlenstypes[0];
        this.lenstype.lensmaterial = "Fiber";
    };
    LensTypeAddComponent.prototype.findname = function () {
        var _this = this;
        this.lenstypeService.findByName(this.lenstype.powerlenstype, this.lenstype.name)
            .subscribe(function (lenstype) {
            if (lenstype != null) {
                _this.lenstype = lenstype;
                _this.lenstype.fk_companyid = "";
                _this.lenstype.uuid = "";
            }
        });
    };
    LensTypeAddComponent.prototype.OnSubmit = function () {
        var _this = this;
        this.lenstypeService.addLensType(this.lenstype).subscribe(function (data) {
            _this.snackBar.open("LensType Added", "Success", {
                duration: 4000
            });
            _this.powerlensInput.focus();
            _this.lenstype = new src_app_models_lens_type__WEBPACK_IMPORTED_MODULE_5__["LensType"]('', '', '', '', 1, 1, 1, '');
            var x = src_app_models_enums_power_lens_type__WEBPACK_IMPORTED_MODULE_1__["PowerLensType"];
            var options = Object.keys(x);
            _this.powerlenstypes = options.slice(options.length / 2);
            _this.lenstype.powerlenstype = _this.powerlenstypes[0];
            _this.lenstype.lensmaterial = "Fiber";
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
                else if (err.status === 300) {
                    _this.snackBar.open(err.error.error, "Alert", {
                        duration: 3000
                    });
                    _this.lenstype = err.error.data;
                    _this.powerlensInput.focus();
                    // const nameselect=<HTMLInputElement>this.nameSelect.nativeElement;
                    // setTimeout(function() {  nameselect.select(); }, 50);
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('powerlensInput'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInput"])
    ], LensTypeAddComponent.prototype, "powerlensInput", void 0);
    LensTypeAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lens-type-add',
            template: __webpack_require__(/*! ./lens-type-add.component.html */ "./src/app/products/glasses/lens-type-add/lens-type-add.component.html"),
            styles: [__webpack_require__(/*! ./lens-type-add.component.scss */ "./src/app/products/glasses/lens-type-add/lens-type-add.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_lens_type_service__WEBPACK_IMPORTED_MODULE_2__["LensTypeService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], LensTypeAddComponent);
    return LensTypeAddComponent;
}());



/***/ }),

/***/ "./src/app/products/glasses/lens-type-edit/lens-type-edit.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/products/glasses/lens-type-edit/lens-type-edit.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-toolbar color=\"primary\" class=\"toolbar\">\n    <mat-card-title class=\"mat-card-title\">Edit Lens Type Details</mat-card-title>\n    <span class=\"toolbar-spacer\"></span>\n    <mat-icon (click)=\"onNoClick()\" class=\"cursor\">cancel</mat-icon>\n  </mat-toolbar>\n  <form  #editlenstype=\"ngForm\">\n  <mat-dialog-content class=\"mat-typography\">\n        <div class=\"form-group\">\n        <div fxLayout=\"column\">\n          <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n            <mat-form-field class=\"example-full-width\">\n                <mat-select  placeholder=\"Power LensType\" #powerlensInput [(ngModel)]=\"data.powerlenstype\" #powerlenstype=\"ngModel\" name=\"powerlenstype\" required>\n                  <mat-option *ngFor=\"let powerlens of powerlenstypes\" [value]=\"powerlens\">{{powerlens}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n              <div *ngIf=\"powerlenstype.invalid && (powerlenstype.dirty || powerlenstype.touched)\" class=\"mat-body-1 center-align\">\n  \n                  <div *ngIf=\"powerlenstype.errors.required\">\n                    PowerLensType is required.\n                  </div>\n                 \n                </div>\n          </div>\n        \n        \n          <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n            <mat-form-field class=\"example-full-width\">\n  \n                <input matInput type=\"text\" placeholder=\"Name\" [(ngModel)]=\"data.name\" (focusout)=\"findname()\"  name=\"name\" #name=\"ngModel\" required>\n          \n              </mat-form-field>\n      \n              <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"mat-body-1 center-align\">\n      \n                <div *ngIf=\"name.errors.required\">\n                  Name is required.\n                </div>\n               \n              </div>\n          </div>\n          <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n                <div fxFlex=\"20\">\n                        <label style=\"margin-left: 10px; color: #9a9797;\">Lens Material:</label>\n                    </div>\n                    <div fxFlex=\"50\">\n            <mat-radio-group [(ngModel)]=\"data.lensmaterial\" name=\"lensmaterial\" #lensmaterial=\"ngModel\" required>\n                <mat-radio-button class=\"example-radio-button\"  value=\"Fiber\">Fiber</mat-radio-button>\n                <mat-radio-button class=\"example-radio-button\"  value=\"Glasses\">Glasses</mat-radio-button>\n              </mat-radio-group>\n                    \n                    <div *ngIf=\"lensmaterial.invalid && (lensmaterial.dirty || lensmaterial.touched)\" class=\"mat-body-1 center-align\">\n        \n                        <div *ngIf=\"lensmaterial.errors.required\">\n                          Lens Material is required.\n                        </div>\n                       \n                      </div>\n                    </div>\n                    </div>\n            </div>\n            <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n              <mat-form-field class=\"example-full-width\">\n      \n                <input matInput  type=\"number\" placeholder=\"Quantity\" pattern=\"[0-9]*\" [(ngModel)]=\"data.quantity\" name=\"quantity\" #quantity=\"ngModel\" minlength=\"10\" required>\n          \n              </mat-form-field>\n        \n              <div *ngIf=\"quantity.invalid && (quantity.dirty || quantity.touched)\" class=\"mat-body-1 center-align\">\n          \n                  <div *ngIf=\"quantity.errors.required\">\n                      Quantity is required.\n                  </div>\n                  <div *ngIf=\"quantity.errors.minlength\">\n                      Quantity is Greater than Zero.\n                  </div>\n                  <div *ngIf=\"quantity.errors.pattern\">\n                      Quantity Rate is Not Valid.\n                  </div>\n                </div>\n              </div>\n              <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n                <mat-form-field class=\"example-full-width\">\n    \n                  <input matInput type=\"number\" placeholder=\"Retailer Price\" pattern=\"[0-9]*\" [(ngModel)]=\"data.retailerPrice\" name=\"retailerPrice\" #retailerPrice=\"ngModel\" required minlength=\"10\">\n            \n                </mat-form-field>\n                <div *ngIf=\"retailerPrice.invalid && (retailerPrice.dirty || retailerPrice.touched)\" class=\"mat-body-1 center-align\">\n            \n                    <div *ngIf=\"retailerPrice.errors.required\">\n                        Retailer Price is required.\n                    </div>\n                    <div *ngIf=\"retailerPrice.errors.minlength\">\n                        Retailer Price is Greater than Zero.\n                    </div>\n                    <div *ngIf=\"retailerPrice.errors.pattern\">\n                        RetailerPrice Rate is Not Valid .\n                    </div>\n                  </div>\n                </div>\n                <div fxFlex=\"100\" style=\"margin-bottom: 10px;\">\n                  <mat-form-field class=\"example-full-width\">\n    \n                    <input matInput type=\"number\" placeholder=\"WholeSaler Price\" [(ngModel)]=\"data.wholesalerPrice\"  name=\"wholesalerPrice\">\n              \n                  </mat-form-field>\n                  </div>\n        </div>\n     </div>\n  \n   \n  </mat-dialog-content>\n  <mat-dialog-actions align=\"start\">\n  <button mat-raised-button color=\"primary\" [disabled]=\"editlenstype.invalid\" (click)=\"onSubmit()\" >Save</button>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <!-- <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\n  </mat-dialog-actions>\n  </form>"

/***/ }),

/***/ "./src/app/products/glasses/lens-type-edit/lens-type-edit.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/products/glasses/lens-type-edit/lens-type-edit.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-button {\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/products/glasses/lens-type-edit/lens-type-edit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/products/glasses/lens-type-edit/lens-type-edit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LensTypeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LensTypeEditComponent", function() { return LensTypeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_lens_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/lens-type */ "./src/app/models/lens-type.ts");
/* harmony import */ var src_app_models_enums_power_lens_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/enums/power-lens-type */ "./src/app/models/enums/power-lens-type.ts");
/* harmony import */ var src_app_services_lens_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/lens-type.service */ "./src/app/services/lens-type.service.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var LensTypeEditComponent = /** @class */ (function () {
    function LensTypeEditComponent(dialogRef, lenstypeService, router, snackBar, data) {
        this.dialogRef = dialogRef;
        this.lenstypeService = lenstypeService;
        this.router = router;
        this.snackBar = snackBar;
        this.data = data;
        this.PowerLensType = src_app_models_enums_power_lens_type__WEBPACK_IMPORTED_MODULE_3__["PowerLensType"];
    }
    LensTypeEditComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LensTypeEditComponent.prototype.ngOnInit = function () {
        var x = src_app_models_enums_power_lens_type__WEBPACK_IMPORTED_MODULE_3__["PowerLensType"];
        var options = Object.keys(x);
        this.powerlenstypes = options.slice(options.length / 2);
    };
    LensTypeEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.lenstypeService.updateLensType(this.data).subscribe(function () {
            _this.dialogRef.close();
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
                else {
                    _this.snackBar.open("Updated Failed", "Alert", {
                        duration: 4000
                    });
                }
            }
        });
    };
    LensTypeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lens-type-edit',
            template: __webpack_require__(/*! ./lens-type-edit.component.html */ "./src/app/products/glasses/lens-type-edit/lens-type-edit.component.html"),
            styles: [__webpack_require__(/*! ./lens-type-edit.component.scss */ "./src/app/products/glasses/lens-type-edit/lens-type-edit.component.scss")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], src_app_services_lens_type_service__WEBPACK_IMPORTED_MODULE_4__["LensTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], src_app_models_lens_type__WEBPACK_IMPORTED_MODULE_2__["LensType"]])
    ], LensTypeEditComponent);
    return LensTypeEditComponent;
}());



/***/ }),

/***/ "./src/app/products/glasses/lens-type/lens-type.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/products/glasses/lens-type/lens-type.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n  <div fxFlex class=\"form-component-holder mat-elevation-z4\">\n    <mat-toolbar class=\"form-header\">\n      <h1 class=\"mat-headline\">LensType List</h1>\n    </mat-toolbar>\n    <div style=\"margin: 10px;\">\n        <button mat-raised-button [hidden]=\"addHidden\" class=\"mat-subheading-2 button-style\" routerLink=\"add\"><mat-icon>add</mat-icon><span style=\"margin: 5px;\">New</span></button>\n    </div>\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\" style=\"overflow-y:auto\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> ID </th>\n      <td mat-cell *matCellDef=\"let i=index\"> {{i+1}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"powerlens\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> PowerLensType </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.powerlenstype}} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"lensmaterial\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> LensMaterial </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.lensmaterial}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"quantity\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Quantity </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"retailerprice\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> RetailerPrice </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.retailerPrice | currency:'INR' }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"wholesalerprice\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> WholesalerPrice </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.wholesalerPrice | currency:'INR'}} </td>\n      </ng-container>\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef [hidden]=\"editHidden\"> </th>\n      <td mat-cell *matCellDef=\"let element\" [hidden]=\"editHidden\"><mat-icon class=\"cursor\" (click)=\"editlensType(element)\">edit</mat-icon> </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/products/glasses/lens-type/lens-type.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/products/glasses/lens-type/lens-type.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/glasses/lens-type/lens-type.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/products/glasses/lens-type/lens-type.component.ts ***!
  \*******************************************************************/
/*! exports provided: LensTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LensTypeComponent", function() { return LensTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_lens_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/lens-type.service */ "./src/app/services/lens-type.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _lens_type_edit_lens_type_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lens-type-edit/lens-type-edit.component */ "./src/app/products/glasses/lens-type-edit/lens-type-edit.component.ts");
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







var LensTypeComponent = /** @class */ (function () {
    function LensTypeComponent(lenstypeService, loginservice, router, dialog) {
        this.lenstypeService = lenstypeService;
        this.loginservice = loginservice;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'powerlens', 'name', 'lensmaterial', 'quantity', 'retailerprice', 'wholesalerprice', 'edit'];
        this.lenstypes = [];
        this.editHidden = false;
        this.addHidden = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.lenstypes);
    }
    LensTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginservice.getUserName().subscribe(function (data) {
            if (data.Identifier === "employee") {
                _this.editHidden = true;
                _this.addHidden = true;
            }
        });
        this.lenstypeService.getallLensType().subscribe(function (data) {
            _this.lenstypes = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.lenstypes);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('login');
                }
            }
        });
    };
    LensTypeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    LensTypeComponent.prototype.editlensType = function (lenstype) {
        var dialogRef = this.dialog.open(_lens_type_edit_lens_type_edit_component__WEBPACK_IMPORTED_MODULE_5__["LensTypeEditComponent"], {
            width: "600px",
            data: lenstype
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log(`Dialog result: ${result}`);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], LensTypeComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], LensTypeComponent.prototype, "sort", void 0);
    LensTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lens-type',
            template: __webpack_require__(/*! ./lens-type.component.html */ "./src/app/products/glasses/lens-type/lens-type.component.html"),
            styles: [__webpack_require__(/*! ./lens-type.component.scss */ "./src/app/products/glasses/lens-type/lens-type.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_lens_type_service__WEBPACK_IMPORTED_MODULE_2__["LensTypeService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], LensTypeComponent);
    return LensTypeComponent;
}());



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _products_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.router */ "./src/app/products/products.router.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _glasses_frame_material_frame_material_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./glasses/frame-material/frame-material.component */ "./src/app/products/glasses/frame-material/frame-material.component.ts");
/* harmony import */ var _glasses_frame_type_frame_type_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./glasses/frame-type/frame-type.component */ "./src/app/products/glasses/frame-type/frame-type.component.ts");
/* harmony import */ var _glasses_lens_type_lens_type_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./glasses/lens-type/lens-type.component */ "./src/app/products/glasses/lens-type/lens-type.component.ts");
/* harmony import */ var _boxes_box_model_box_model_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./boxes/box-model/box-model.component */ "./src/app/products/boxes/box-model/box-model.component.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _boxes_box_model_add_box_model_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./boxes/box-model-add/box-model-add.component */ "./src/app/products/boxes/box-model-add/box-model-add.component.ts");
/* harmony import */ var _boxes_box_model_edit_box_model_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./boxes/box-model-edit/box-model-edit.component */ "./src/app/products/boxes/box-model-edit/box-model-edit.component.ts");
/* harmony import */ var _glasses_lens_type_add_lens_type_add_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./glasses/lens-type-add/lens-type-add.component */ "./src/app/products/glasses/lens-type-add/lens-type-add.component.ts");
/* harmony import */ var _glasses_lens_type_edit_lens_type_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./glasses/lens-type-edit/lens-type-edit.component */ "./src/app/products/glasses/lens-type-edit/lens-type-edit.component.ts");
/* harmony import */ var _glasses_frame_material_add_frame_material_add_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./glasses/frame-material-add/frame-material-add.component */ "./src/app/products/glasses/frame-material-add/frame-material-add.component.ts");
/* harmony import */ var _glasses_frame_material_edit_frame_material_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./glasses/frame-material-edit/frame-material-edit.component */ "./src/app/products/glasses/frame-material-edit/frame-material-edit.component.ts");
/* harmony import */ var _glasses_frame_type_add_frame_type_add_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./glasses/frame-type-add/frame-type-add.component */ "./src/app/products/glasses/frame-type-add/frame-type-add.component.ts");
/* harmony import */ var _glasses_frame_type_edit_frame_type_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./glasses/frame-type-edit/frame-type-edit.component */ "./src/app/products/glasses/frame-type-edit/frame-type-edit.component.ts");
/* harmony import */ var _glasses_frame_model_frame_model_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./glasses/frame-model/frame-model.component */ "./src/app/products/glasses/frame-model/frame-model.component.ts");
/* harmony import */ var _glasses_frame_model_add_frame_model_add_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./glasses/frame-model-add/frame-model-add.component */ "./src/app/products/glasses/frame-model-add/frame-model-add.component.ts");
/* harmony import */ var _glasses_frame_model_edit_frame_model_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./glasses/frame-model-edit/frame-model-edit.component */ "./src/app/products/glasses/frame-model-edit/frame-model-edit.component.ts");
/* harmony import */ var _brands_brand_brand_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./brands/brand/brand.component */ "./src/app/products/brands/brand/brand.component.ts");
/* harmony import */ var _brands_brand_add_brand_add_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./brands/brand-add/brand-add.component */ "./src/app/products/brands/brand-add/brand-add.component.ts");
/* harmony import */ var _brands_brand_edit_brand_edit_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./brands/brand-edit/brand-edit.component */ "./src/app/products/brands/brand-edit/brand-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _products_router__WEBPACK_IMPORTED_MODULE_2__["ProductRouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"]
            ],
            declarations: [_glasses_frame_material_frame_material_component__WEBPACK_IMPORTED_MODULE_12__["FrameMaterialComponent"], _glasses_frame_type_frame_type_component__WEBPACK_IMPORTED_MODULE_13__["FrameTypeComponent"], _glasses_lens_type_lens_type_component__WEBPACK_IMPORTED_MODULE_14__["LensTypeComponent"], _boxes_box_model_box_model_component__WEBPACK_IMPORTED_MODULE_15__["BoxModelComponent"], _boxes_box_model_add_box_model_add_component__WEBPACK_IMPORTED_MODULE_17__["BoxModelAddComponent"], _boxes_box_model_edit_box_model_edit_component__WEBPACK_IMPORTED_MODULE_18__["BoxModelEditComponent"], _glasses_lens_type_add_lens_type_add_component__WEBPACK_IMPORTED_MODULE_19__["LensTypeAddComponent"], _glasses_lens_type_edit_lens_type_edit_component__WEBPACK_IMPORTED_MODULE_20__["LensTypeEditComponent"], _glasses_frame_material_add_frame_material_add_component__WEBPACK_IMPORTED_MODULE_21__["FrameMaterialAddComponent"], _glasses_frame_material_edit_frame_material_edit_component__WEBPACK_IMPORTED_MODULE_22__["FrameMaterialEditComponent"], _glasses_frame_type_add_frame_type_add_component__WEBPACK_IMPORTED_MODULE_23__["FrameTypeAddComponent"], _glasses_frame_type_edit_frame_type_edit_component__WEBPACK_IMPORTED_MODULE_24__["FrameTypeEditComponent"], _glasses_frame_model_frame_model_component__WEBPACK_IMPORTED_MODULE_25__["FrameModelComponent"], _glasses_frame_model_add_frame_model_add_component__WEBPACK_IMPORTED_MODULE_26__["FrameModelAddComponent"], _glasses_frame_model_edit_frame_model_edit_component__WEBPACK_IMPORTED_MODULE_27__["FrameModelEditComponent"], _brands_brand_brand_component__WEBPACK_IMPORTED_MODULE_28__["BrandComponent"], _brands_brand_add_brand_add_component__WEBPACK_IMPORTED_MODULE_29__["BrandAddComponent"], _brands_brand_edit_brand_edit_component__WEBPACK_IMPORTED_MODULE_30__["BrandEditComponent"]],
            providers: [],
            entryComponents: [_glasses_frame_material_edit_frame_material_edit_component__WEBPACK_IMPORTED_MODULE_22__["FrameMaterialEditComponent"], _glasses_frame_type_edit_frame_type_edit_component__WEBPACK_IMPORTED_MODULE_24__["FrameTypeEditComponent"], _glasses_lens_type_edit_lens_type_edit_component__WEBPACK_IMPORTED_MODULE_20__["LensTypeEditComponent"], _boxes_box_model_edit_box_model_edit_component__WEBPACK_IMPORTED_MODULE_18__["BoxModelEditComponent"], _brands_brand_edit_brand_edit_component__WEBPACK_IMPORTED_MODULE_30__["BrandEditComponent"], _glasses_frame_model_edit_frame_model_edit_component__WEBPACK_IMPORTED_MODULE_27__["FrameModelEditComponent"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/products/products.router.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.router.ts ***!
  \*********************************************/
/*! exports provided: ProductRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRouterModule", function() { return ProductRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _glasses_frame_material_frame_material_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glasses/frame-material/frame-material.component */ "./src/app/products/glasses/frame-material/frame-material.component.ts");
/* harmony import */ var _glasses_frame_type_frame_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glasses/frame-type/frame-type.component */ "./src/app/products/glasses/frame-type/frame-type.component.ts");
/* harmony import */ var _glasses_lens_type_lens_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glasses/lens-type/lens-type.component */ "./src/app/products/glasses/lens-type/lens-type.component.ts");
/* harmony import */ var _boxes_box_model_box_model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boxes/box-model/box-model.component */ "./src/app/products/boxes/box-model/box-model.component.ts");
/* harmony import */ var _glasses_frame_material_add_frame_material_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glasses/frame-material-add/frame-material-add.component */ "./src/app/products/glasses/frame-material-add/frame-material-add.component.ts");
/* harmony import */ var _glasses_frame_type_add_frame_type_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./glasses/frame-type-add/frame-type-add.component */ "./src/app/products/glasses/frame-type-add/frame-type-add.component.ts");
/* harmony import */ var _glasses_lens_type_add_lens_type_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./glasses/lens-type-add/lens-type-add.component */ "./src/app/products/glasses/lens-type-add/lens-type-add.component.ts");
/* harmony import */ var _boxes_box_model_add_box_model_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./boxes/box-model-add/box-model-add.component */ "./src/app/products/boxes/box-model-add/box-model-add.component.ts");
/* harmony import */ var _brands_brand_brand_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./brands/brand/brand.component */ "./src/app/products/brands/brand/brand.component.ts");
/* harmony import */ var _brands_brand_add_brand_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./brands/brand-add/brand-add.component */ "./src/app/products/brands/brand-add/brand-add.component.ts");
/* harmony import */ var _glasses_frame_model_frame_model_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./glasses/frame-model/frame-model.component */ "./src/app/products/glasses/frame-model/frame-model.component.ts");
/* harmony import */ var _glasses_frame_model_add_frame_model_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./glasses/frame-model-add/frame-model-add.component */ "./src/app/products/glasses/frame-model-add/frame-model-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var productroutes = [
    { path: 'glasses/frame_material', component: _glasses_frame_material_frame_material_component__WEBPACK_IMPORTED_MODULE_2__["FrameMaterialComponent"] },
    { path: 'glasses/frame_material/add', component: _glasses_frame_material_add_frame_material_add_component__WEBPACK_IMPORTED_MODULE_6__["FrameMaterialAddComponent"] },
    { path: 'glasses/frame_model', component: _glasses_frame_model_frame_model_component__WEBPACK_IMPORTED_MODULE_12__["FrameModelComponent"] },
    { path: 'glasses/frame_model/add', component: _glasses_frame_model_add_frame_model_add_component__WEBPACK_IMPORTED_MODULE_13__["FrameModelAddComponent"] },
    { path: 'glasses/frame_type', component: _glasses_frame_type_frame_type_component__WEBPACK_IMPORTED_MODULE_3__["FrameTypeComponent"] },
    { path: 'glasses/frame_type/add', component: _glasses_frame_type_add_frame_type_add_component__WEBPACK_IMPORTED_MODULE_7__["FrameTypeAddComponent"] },
    { path: 'glasses/lens_type', component: _glasses_lens_type_lens_type_component__WEBPACK_IMPORTED_MODULE_4__["LensTypeComponent"] },
    { path: 'glasses/lens_type/add', component: _glasses_lens_type_add_lens_type_add_component__WEBPACK_IMPORTED_MODULE_8__["LensTypeAddComponent"] },
    { path: 'boxes/box_model', component: _boxes_box_model_box_model_component__WEBPACK_IMPORTED_MODULE_5__["BoxModelComponent"] },
    { path: 'boxes/box_model/add', component: _boxes_box_model_add_box_model_add_component__WEBPACK_IMPORTED_MODULE_9__["BoxModelAddComponent"] },
    { path: 'brands/brand', component: _brands_brand_brand_component__WEBPACK_IMPORTED_MODULE_10__["BrandComponent"] },
    { path: 'brands/brand/add', component: _brands_brand_add_brand_add_component__WEBPACK_IMPORTED_MODULE_11__["BrandAddComponent"] },
];
var ProductRouterModule = /** @class */ (function () {
    function ProductRouterModule() {
    }
    ProductRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(productroutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ProductRouterModule);
    return ProductRouterModule;
}());



/***/ }),

/***/ "./src/app/services/boxes.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/boxes.service.ts ***!
  \*******************************************/
/*! exports provided: BoxesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxesService", function() { return BoxesService; });
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



var BoxesService = /** @class */ (function () {
    function BoxesService(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
    }
    BoxesService.prototype.addBoxes = function (boxes) {
        return this.httpClient.post("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].addBoxesURL(), boxes, (this.headers));
    };
    BoxesService.prototype.getallBoxes = function () {
        return this.httpClient.get("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getallBoxesURL());
    };
    BoxesService.prototype.updateBoxes = function (boxes) {
        return this.httpClient.put("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].updateBoxesURL() + ("/" + boxes.uuid), boxes);
    };
    BoxesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BoxesService);
    return BoxesService;
}());



/***/ }),

/***/ "./src/app/services/brand.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/brand.service.ts ***!
  \*******************************************/
/*! exports provided: BrandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandService", function() { return BrandService; });
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



var BrandService = /** @class */ (function () {
    function BrandService(httpClient) {
        this.httpClient = httpClient;
    }
    BrandService.prototype.addBrand = function (brand) {
        return this.httpClient.post("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].addBrandURL(), brand);
    };
    BrandService.prototype.getallBrand = function () {
        return this.httpClient.get("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getallBrandURL());
    };
    BrandService.prototype.updateBrand = function (brand) {
        return this.httpClient.put("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].updateBrandURL() + ("/" + brand.uuid), brand);
    };
    BrandService.prototype.deleteBrand = function (uuid) {
        return this.httpClient.delete("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].deleteBrandURL() + ("/" + uuid));
    };
    BrandService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BrandService);
    return BrandService;
}());



/***/ }),

/***/ "./src/app/services/frame-material.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/frame-material.service.ts ***!
  \****************************************************/
/*! exports provided: FrameMaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameMaterialService", function() { return FrameMaterialService; });
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



var FrameMaterialService = /** @class */ (function () {
    function FrameMaterialService(httpClient) {
        this.httpClient = httpClient;
    }
    FrameMaterialService.prototype.addFrameMaterial = function (framematerial) {
        return this.httpClient.post("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].addframematerialURL(), framematerial);
    };
    FrameMaterialService.prototype.getallFrameMaterial = function () {
        return this.httpClient.get("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getallframematerialURL());
    };
    FrameMaterialService.prototype.updateFrameMaterial = function (framematerial) {
        return this.httpClient.put("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].updateframematerialURL() + ("/" + framematerial.uuid), framematerial);
    };
    FrameMaterialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FrameMaterialService);
    return FrameMaterialService;
}());



/***/ }),

/***/ "./src/app/services/frame-model.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/frame-model.service.ts ***!
  \*************************************************/
/*! exports provided: FrameModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameModelService", function() { return FrameModelService; });
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



var FrameModelService = /** @class */ (function () {
    function FrameModelService(httpClient) {
        this.httpClient = httpClient;
    }
    FrameModelService.prototype.addFrameModel = function (framemodel) {
        return this.httpClient.post("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].addframemodelURL(), framemodel);
    };
    FrameModelService.prototype.getallFrameModel = function () {
        return this.httpClient.get("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getallframemodelURL());
    };
    FrameModelService.prototype.updateFrameModel = function (framemodel) {
        return this.httpClient.put("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].updateframemodelURL() + ("/" + framemodel.uuid), framemodel);
    };
    // public findByModel(model: string,brand:Brand) {
    //   let httpHeaders = new HttpHeaders()
    //     .set('Accept', 'application/json');
    //   let httpParams = new HttpParams()
    //     .set('mobile', model);
    //   return this.httpClient.get(`${Utils.findByModelURL()}`, {
    //     headers: httpHeaders,
    //     params: httpParams,
    //     responseType: 'json'
    //   });
    // }
    FrameModelService.prototype.findByModel = function (model, brandUuid) {
        return this.httpClient.get("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].findByModelURL() + ("?model=" + model + "&brand=" + brandUuid), {
            responseType: 'json'
        });
    };
    FrameModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FrameModelService);
    return FrameModelService;
}());



/***/ }),

/***/ "./src/app/services/lens-type.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/lens-type.service.ts ***!
  \***********************************************/
/*! exports provided: LensTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LensTypeService", function() { return LensTypeService; });
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



var LensTypeService = /** @class */ (function () {
    function LensTypeService(httpClient) {
        this.httpClient = httpClient;
    }
    LensTypeService.prototype.addLensType = function (lenstype) {
        return this.httpClient.post("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].addLensTypeURL(), lenstype);
    };
    LensTypeService.prototype.getallLensType = function () {
        return this.httpClient.get("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getallLensTypeURL());
    };
    LensTypeService.prototype.updateLensType = function (lenstype) {
        return this.httpClient.put("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].updateLensTypeURL() + ("/" + lenstype.uuid), lenstype);
    };
    LensTypeService.prototype.findByName = function (powerlenstype, name) {
        return this.httpClient.get("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].findByNameURL() + ("?powerlenstype=" + powerlenstype + "&name=" + name), {
            responseType: 'json'
        });
    };
    LensTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LensTypeService);
    return LensTypeService;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map