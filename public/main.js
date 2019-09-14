(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	],
	"./movie/movie.module": [
		"./src/app/movie/movie.module.ts",
		"movie-movie-module"
	],
	"./search/search.module": [
		"./src/app/search/search.module.ts",
		"search-search-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/admin/admin.component */ "./src/app/admin/containers/admin/admin.component.ts");
/* harmony import */ var _core_auth_service_adminguard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth/service/adminguard.service */ "./src/app/core/auth/service/adminguard.service.ts");





var routes = [
    {
        path: '',
        component: _containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        canActivate: [_core_auth_service_adminguard_service__WEBPACK_IMPORTED_MODULE_4__["AdminguardService"]]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/admin/admin.component */ "./src/app/admin/containers/admin/admin.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_add_theater_add_theater_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-theater/add-theater.component */ "./src/app/admin/components/add-theater/add-theater.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/admin.service */ "./src/app/admin/services/admin.service.ts");
/* harmony import */ var _components_change_show_change_show_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/change-show/change-show.component */ "./src/app/admin/components/change-show/change-show.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");












var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _components_add_theater_add_theater_component__WEBPACK_IMPORTED_MODULE_7__["AddTheaterComponent"], _components_change_show_change_show_component__WEBPACK_IMPORTED_MODULE_10__["ChangeShowComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_11__["AdminRoutingModule"]
            ],
            providers: [_services_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/components/add-theater/add-theater.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/add-theater/add-theater.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form fxLayout=\"column\" fxLayoutAlign=\"center center\" [formGroup]=\"newTheater\">\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Theater ID\" formControlName=\"tid\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Theater Name\" formControlName=\"name\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"City\" formControlName=\"city\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"G-Location path\" formControlName=\"gLocation\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"capacity\" type=\"number\" formControlName=\"capacity\">\r\n  </mat-form-field>\r\n  <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"onSubmit()\">Submit</button>\r\n</form>\r\n\r\n\r\n<ng-template #successDialog>\r\n  <div>New Theater added sucessfully </div>\r\n  <button mat-raised-button class=\"accept\" color=\"primary\" (click)=\"dialogOk()\">OK</button>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/admin/components/add-theater/add-theater.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/add-theater/add-theater.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .mat-select-value {\n  color: #fff !important; }\n\n:host /deep/ .mat-form-field-label {\n  color: #fff; }\n\n.accept {\n  margin-left: 40%;\n  margin-top: 8%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hZGQtdGhlYXRlci9DOlxcY2RyaXZlXFxjYXBzdG9uZTNcXGJvb2tteW1vdmllXFxhbmd1bGFyMzAxbW92aWVwcm9qZWN0L3NyY1xcYXBwXFxhZG1pblxcY29tcG9uZW50c1xcYWRkLXRoZWF0ZXJcXGFkZC10aGVhdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYWRkLXRoZWF0ZXIvYWRkLXRoZWF0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8gLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLy5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5hY2NlcHQge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgbWFyZ2luLXRvcDogOCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/components/add-theater/add-theater.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/add-theater/add-theater.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddTheaterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTheaterComponent", function() { return AddTheaterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AddTheaterComponent = /** @class */ (function () {
    function AddTheaterComponent(fb, matDialog) {
        this.fb = fb;
        this.matDialog = matDialog;
        this.newTheater = this.fb.group({
            tid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gLocation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            capacity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.addTheater = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddTheaterComponent.prototype.ngOnInit = function () {
    };
    AddTheaterComponent.prototype.onSubmit = function () {
        if (this.newTheater.valid) {
            this.matDialog.open(this.successDialog);
            this.addTheater.emit(this.newTheater.value);
        }
    };
    AddTheaterComponent.prototype.dialogOk = function () {
        this.newTheater.reset();
        this.matDialog.closeAll();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddTheaterComponent.prototype, "addTheater", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('successDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], AddTheaterComponent.prototype, "successDialog", void 0);
    AddTheaterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-theater',
            template: __webpack_require__(/*! ./add-theater.component.html */ "./src/app/admin/components/add-theater/add-theater.component.html"),
            styles: [__webpack_require__(/*! ./add-theater.component.scss */ "./src/app/admin/components/add-theater/add-theater.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AddTheaterComponent);
    return AddTheaterComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/change-show/change-show.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/change-show/change-show.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"1%\" fxLayoutAlign=\"center center\">\r\n  <div fxLayout=\"row Wrap\" fxLayoutGap=\"3%\">\r\n    <mat-form-field>\r\n      <mat-select required [formControl]=\"selectTheater\" placeholder=\"Select Theater\">\r\n        <mat-option *ngFor=\"let theater of theaterList\" [value]=\"theater\">\r\n          {{theater.name}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Enter Movie Name\" type=\"text\" [formControl]=\"movieInput\">\r\n    </mat-form-field>\r\n  </div>\r\n  <h4 *ngIf=\"nowShowing.length > 0\">Now Playing in {{selectedTheater.name}}</h4>\r\n  <div *ngIf=\"nowShowing.length > 0\" fxLayout=\"row\" fxLayoutGap=\"3%\">\r\n    <button mat-raised-button *ngFor=\"let movies of nowShowing\">\r\n      {{movies}}\r\n    </button>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutGap=\"1%\" *ngIf=\"nowShowing.length > 0\" fxLayoutAlign=\"center center\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"save()\">\r\n      <mat-icon>save</mat-icon>\r\n    </button>\r\n    <button mat-raised-button color=\"warn\" (click)=\"cancel()\">\r\n      <mat-icon>cancel</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"3%\" fxLayoutAlign=\"center center\">\r\n    <mat-card *ngFor=\"let movie of movieResult\" class=\"cardContent\">\r\n      <div fxLayout=\"row\">\r\n        <mat-card-content>\r\n          <button mat-button (click)=\"addMovie(movie)\">\r\n            {{movie.title}}\r\n            <mat-icon>add</mat-icon>\r\n          </button>\r\n        </mat-card-content>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<ng-template #successDialog>\r\n  <div>New Movies added sucessfully </div>\r\n  <button mat-raised-button class=\"accept\" color=\"primary\" (click)=\"dialogOk()\">OK</button>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/admin/components/change-show/change-show.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/change-show/change-show.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardContent {\n  width: 150px;\n  min-width: 10px;\n  max-width: 250px;\n  margin-top: 20px; }\n\n:host /deep/ .mat-select-value {\n  color: #fff !important; }\n\n:host /deep/ .mat-form-field-label {\n  color: #fff; }\n\n.accept {\n  margin-left: 40%;\n  margin-top: 8%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jaGFuZ2Utc2hvdy9DOlxcY2RyaXZlXFxjYXBzdG9uZTNcXGJvb2tteW1vdmllXFxhbmd1bGFyMzAxbW92aWVwcm9qZWN0L3NyY1xcYXBwXFxhZG1pblxcY29tcG9uZW50c1xcY2hhbmdlLXNob3dcXGNoYW5nZS1zaG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2NoYW5nZS1zaG93L2NoYW5nZS1zaG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRDb250ZW50IHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWluLXdpZHRoOiAxMHB4O1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYWNjZXB0IHtcclxuICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gIG1hcmdpbi10b3A6IDglO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/components/change-show/change-show.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/change-show/change-show.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChangeShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeShowComponent", function() { return ChangeShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/admin/services/admin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var ChangeShowComponent = /** @class */ (function () {
    function ChangeShowComponent(adminService, matDialog) {
        this.adminService = adminService;
        this.matDialog = matDialog;
        this.nowShowing = [];
        this.nowPlaying = [];
        this.movieInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.selectTheater = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ChangeShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieInput.valueChanges.subscribe(function (value) {
            if (value) {
                _this.adminService.searchMovie(value).subscribe(function (movies) {
                    _this.movieResult = movies['results'];
                });
            }
        });
        this.selectTheater.valueChanges.subscribe(function (value) {
            _this.selectedTheater = value;
            _this.nowShowing = [];
        });
    };
    ChangeShowComponent.prototype.addMovie = function (movie) {
        this.nowShowing.push(movie.name);
        this.nowPlaying.push(movie.id);
    };
    ChangeShowComponent.prototype.save = function () {
        this.matDialog.open(this.successDialog);
        this.adminService.saveNowPlaying(this.nowPlaying, this.selectTheater['tid']);
    };
    ChangeShowComponent.prototype.cancel = function () {
        this.nowShowing = [];
    };
    ChangeShowComponent.prototype.dialogOk = function () {
        this.nowShowing = [];
        this.movieInput.reset();
        this.selectTheater.reset();
        this.matDialog.closeAll();
        this.movieResult = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChangeShowComponent.prototype, "theaterList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('successDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ChangeShowComponent.prototype, "successDialog", void 0);
    ChangeShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-show',
            template: __webpack_require__(/*! ./change-show.component.html */ "./src/app/admin/components/change-show/change-show.component.html"),
            styles: [__webpack_require__(/*! ./change-show.component.scss */ "./src/app/admin/components/change-show/change-show.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ChangeShowComponent);
    return ChangeShowComponent;
}());



/***/ }),

/***/ "./src/app/admin/containers/admin/admin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/containers/admin/admin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-tab-group>\r\n    <mat-tab label=\"Add movie\">\r\n      <div class=\"admin-container\">\r\n        <app-change-show [theaterList]=\"theaterList\"></app-change-show>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Add Theatre\">\r\n      <div class=\"admin-container\">\r\n        <app-add-theater (addTheater)=\"addTheater($event)\"></app-add-theater>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/containers/admin/admin.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/containers/admin/admin.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100vh;\n  margin-top: 10px; }\n\n.mat-tab-label-active {\n  color: #f1f6f8; }\n\n.mat-tab-label-inactive {\n  color: #f8f1f1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29udGFpbmVycy9hZG1pbi9DOlxcY2RyaXZlXFxjYXBzdG9uZTNcXGJvb2tteW1vdmllXFxhbmd1bGFyMzAxbW92aWVwcm9qZWN0L3NyY1xcYXBwXFxhZG1pblxcY29udGFpbmVyc1xcYWRtaW5cXGFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGVBQXlCLEVBQzFCOztBQUVEO0VBQ0UsZUFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb250YWluZXJzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluLWNvbnRhaW5lciB7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICBjb2xvcjogcmdiKDI0MSwgMjQ2LCAyNDgpO1xyXG59XHJcblxyXG4ubWF0LXRhYi1sYWJlbC1pbmFjdGl2ZSB7XHJcbiAgY29sb3I6IHJnYigyNDgsIDI0MSwgMjQxKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/containers/admin/admin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/containers/admin/admin.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/admin/services/admin.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../reducers/index */ "./src/app/reducers/index.ts");





var AdminComponent = /** @class */ (function () {
    function AdminComponent(adminService, store) {
        this.adminService = adminService;
        this.store = store;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_reducers_index__WEBPACK_IMPORTED_MODULE_4__["theaterList"]).subscribe(function (result) {
            _this.theaterList = Object.values(result);
        });
    };
    AdminComponent.prototype.addTheater = function (formData) {
        this.adminService.newTheater(formData);
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/containers/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/containers/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/services/admin.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/services/admin.service.ts ***!
  \*************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular//common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/config */ "./src/app/shared/config.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var SEARCH_URL = _shared_config__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"].TMDB_API + _shared_config__WEBPACK_IMPORTED_MODULE_3__["TMDB_URLS"].SEARCH_URL;
var THEATERS_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].JSONSERVER + _shared_config__WEBPACK_IMPORTED_MODULE_3__["JSON_SERVER_URLS"].THEATER_URL;
var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.newTheater = function (data) {
        var _this = this;
        var newTheaters, newObject;
        this.http.get(THEATERS_URL).subscribe(function (value) {
            newObject = value;
            newTheaters = newObject['theaters'];
            newTheaters.push(data);
            _this.http.put(THEATERS_URL, newObject).subscribe(function (res) {
                // console.log('Sucess', res);
            }, function (e) { return console.log(e, 'while updating data'); });
        }, function (e) {
            //console.log(e, 'while fetching data');
        }, function () {
            // console.log(newObject);
        });
    };
    AdminService.prototype.searchMovie = function (term) {
        return this.http.get(SEARCH_URL + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY + '&query=' + term);
    };
    AdminService.prototype.saveNowPlaying = function (nowPlaying, theaterId) {
        var _this = this;
        var newObject;
        if (nowPlaying.length > 0) {
            this.http.get(THEATERS_URL).subscribe(function (value) {
                newObject = value;
                newObject['theaters'].forEach(function (theater) {
                    if (theater.id === theaterId) {
                        theater.movies = nowPlaying;
                    }
                });
                _this.http.put(THEATERS_URL, newObject).subscribe(function (xyz) {
                    // console.log('Sucess', xyz);
                });
            });
        }
    };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _shared_components_payment_booking_payment_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/payment-booking/payment-booking.component */ "./src/app/shared/components/payment-booking/payment-booking.component.ts");
/* harmony import */ var _core_auth_service_authguard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/auth/service/authguard.service */ "./src/app/core/auth/service/authguard.service.ts");






var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home', loadChildren: './home/home.module#HomeModule'
    },
    { path: 'movie', loadChildren: './movie/movie.module#MovieModule' },
    { path: 'search', loadChildren: './search/search.module#SearchModule' },
    { path: 'profile', component: src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], canActivate: [_core_auth_service_authguard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'payment/:movieTitle/:theatre/:time/:seat/:total', component: _shared_components_payment_booking_payment_booking_component__WEBPACK_IMPORTED_MODULE_4__["PaymentBookingComponent"], canActivate: [_core_auth_service_authguard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: '**', redirectTo: '/home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n  <app-header></app-header>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n.container {\n  margin-top: 45px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGNkcml2ZVxcY2Fwc3RvbmUzXFxib29rbXltb3ZpZVxcYW5ndWxhcjMwMW1vdmllcHJvamVjdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWU7RUFDZixPQUFNO0VBQ04sUUFBTztFQUNQLFNBQVEsRUFDVDs7QUFFRDtFQUNFLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_home_services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/home/services/home.service */ "./src/app/home/services/home.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_core_services_userDetails_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/userDetails.service */ "./src/app/core/services/userDetails.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(swUpdate, snackBar, userDetailsService, homeService) {
        this.swUpdate = swUpdate;
        this.snackBar = snackBar;
        this.userDetailsService = userDetailsService;
        this.homeService = homeService;
        this.title = 'book-my-movie';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(function () {
                var message = 'New version available. Update to new Version ?';
                var action = 'UPDATE';
                var snackbarRef = _this.snackBar.open(message, action, { duration: 15000, });
                snackbarRef.onAction().subscribe(function () {
                    window.location.reload();
                });
            });
        }
        this.homeService.getNowshowing();
        this.homeService.getTheaterList();
        this.homeService.fetchGenres();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            src_app_core_services_userDetails_service__WEBPACK_IMPORTED_MODULE_5__["UserDetailService"],
            src_app_home_services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_8__["metaReducers"] }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
                }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('/ngsw-worker.js', {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
                }),
                _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_14__["CoreModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_16__["AdminModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth/service/adminguard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/auth/service/adminguard.service.ts ***!
  \*********************************************************/
/*! exports provided: AdminguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminguardService", function() { return AdminguardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app/reducers/index */ "./src/app/reducers/index.ts");





var AdminguardService = /** @class */ (function () {
    function AdminguardService(router, store) {
        this.router = router;
        this.store = store;
    }
    AdminguardService.prototype.canActivate = function (route, state) {
        var _this = this;
        this.store.select(_app_reducers_index__WEBPACK_IMPORTED_MODULE_4__["userSelector"]).subscribe(function (result) {
            _this.userDetails = result;
            console.log('userDetails auth check', _this.userDetails);
        });
        var authValid = this.userDetails;
        if (authValid && authValid.id !== '' && authValid.role === 'Admin') {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/home']);
        return false;
    };
    AdminguardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AdminguardService);
    return AdminguardService;
}());



/***/ }),

/***/ "./src/app/core/auth/service/authguard.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/auth/service/authguard.service.ts ***!
  \********************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app/reducers/index */ "./src/app/reducers/index.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        this.store.select(_app_reducers_index__WEBPACK_IMPORTED_MODULE_4__["userSelector"]).subscribe(function (result) {
            _this.userDetails = result;
            console.log('userDetails auth check', _this.userDetails);
        });
        var authValid = this.userDetails;
        if (authValid && authValid.id !== '') {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard.prototype.canLoad = function (route) {
        var _this = this;
        this.store.select(_app_reducers_index__WEBPACK_IMPORTED_MODULE_4__["userSelector"]).subscribe(function (result) {
            _this.userDetails = result;
            console.log('userDetails auth check', _this.userDetails);
        });
        var authValid = this.userDetails;
        if (authValid) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: getAuthServiceConfigs, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/core/shell/shell.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var src_app_core_services_userDetails_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/userDetails.service */ "./src/app/core/services/userDetails.service.ts");
/* harmony import */ var _shell_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shell/header/header.component */ "./src/app/core/shell/header/header.component.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _core_shell_header_service_signin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/shell/header/service/signin.service */ "./src/app/core/shell/header/service/signin.service.ts");












function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLoginProvider"]('211481144823-tvupluah139i5bdcqdpnaeqdmeu9rfbd.apps.googleusercontent.com')
        }
    ]);
    return config;
}
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_shell_shell_component__WEBPACK_IMPORTED_MODULE_3__["ShellComponent"], _shell_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"]
            ],
            providers: [src_app_core_services_userDetails_service__WEBPACK_IMPORTED_MODULE_6__["UserDetailService"],
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                },
                _core_shell_header_service_signin_service__WEBPACK_IMPORTED_MODULE_10__["SignInService"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
            ],
            exports: [_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _shell_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/services/login.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/config */ "./src/app/shared/config.ts");





var LoginService = /** @class */ (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
    }
    LoginService.prototype.getUserData = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].JSONSERVER + _shared_config__WEBPACK_IMPORTED_MODULE_4__["JSON_SERVER_URLS"].USER_DETAILS);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/core/services/userDetails.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/userDetails.service.ts ***!
  \******************************************************/
/*! exports provided: UserDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailService", function() { return UserDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_core_store_action_userDetails_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/store/action/userDetails.action */ "./src/app/core/store/action/userDetails.action.ts");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/config */ "./src/app/shared/config.ts");







var USERS_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].JSONSERVER + _shared_config__WEBPACK_IMPORTED_MODULE_6__["JSON_SERVER_URLS"].USER_DETAILS;
var UserDetailService = /** @class */ (function () {
    function UserDetailService(http, store) {
        this.http = http;
        this.store = store;
        this.getUserDetailData();
    }
    UserDetailService.prototype.getUserDetailData = function () {
        this.authDetails = JSON.parse(sessionStorage.getItem('authDetails'));
        if (this.authDetails) {
            this.store.dispatch(new src_app_core_store_action_userDetails_action__WEBPACK_IMPORTED_MODULE_5__["SetUser"](this.authDetails));
        }
    };
    UserDetailService.prototype.addNewUser = function (data) {
        var _this = this;
        var newUsers, newObject;
        var currentData;
        this.http.get(USERS_URL).subscribe(function (value) {
            newObject = value;
            newUsers = newObject['users'];
            currentData = {
                uid: data.id,
                name: data.name,
                image: data.image,
                email: data.email,
                role: 'Standard',
                preferences: {
                    lang: 'en',
                    generes: [],
                    theaters: []
                },
                ratings: {
                    movieId: '',
                    rating: ''
                }
            };
            newUsers.push(currentData);
            _this.http.put(USERS_URL, newObject).subscribe(function (_value) {
                sessionStorage.setItem('authDetails', JSON.stringify(currentData));
                _this.store.dispatch(new src_app_core_store_action_userDetails_action__WEBPACK_IMPORTED_MODULE_5__["SetUser"](currentData));
            });
        }, function (err) {
            console.log(err);
        });
    };
    UserDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], UserDetailService);
    return UserDetailService;
}());



/***/ }),

/***/ "./src/app/core/shell/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/shell/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z6 app-navbar\" fxLayout=\"row\">\r\n  <nav _ngcontent-c1>\r\n    <img routerLink=\"home\" src=\"../../../../assets/images/logo.jpg\" class=\"logo\" alt=\"logo\">\r\n  </nav>\r\n  <div class=\"extraSpace\"></div>\r\n  <div fxLayout=\"column\" class=\"searchContainer\">\r\n    <input type=\"text\" (click)=\"openSearchPage()\" placeholder=\"Search..\" label=\"Search\">\r\n  </div>\r\n  <div class=\"extraSpace\"></div>\r\n  <button mat-icon-button class=\"user-button\" aria-label=\"Toggle menu\" >\r\n    <span *ngIf=\"userDetails && userDetails.image !== null\">\r\n    <img src=\"{{userDetails.image}}\" class=\"profileImage\" title=\"{{userDetails.name}}\" onerror=\"this.src='/assets/download.png'\" alt=\"User profile Pic\" />\r\n  </span>\r\n  <span *ngIf=\"!userDetails || userDetails.image === null\">\r\n    <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\r\n  </span>\r\n  </button>\r\n  <mat-menu #user=\"matMenu\" xPosition=\"before\">\r\n    <button *ngIf=\"!authFlag\" mat-menu-item (click)=\"socialSignIn('google')\">Sign in</button>\r\n    <button *ngIf=\"authFlag\" mat-menu-item (click)=\"socialSignOut('google')\">Sign out</button>\r\n    <button *ngIf=\"authFlag\" mat-menu-item (click)=\"loadProfile()\">Profile</button>\r\n    <button routerLink=\"admin\" *ngIf=\"adminFlag\" mat-menu-item>Admin</button>\r\n  </mat-menu>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/shell/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/shell/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  background-color: #2d2d31;\n  color: white; }\n\n.grid-container .mat-h1 {\n  margin: 0; }\n\n.has-search .form-control-search {\n  padding-right: 10px;\n  color: #ccc; }\n\n.search-width {\n  width: 80%; }\n\n.user-button {\n  font-size: 35px;\n  margin-right: 10px; }\n\n.user-profile-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n\n.header-search-box {\n  width: 100%; }\n\nmat-placeholder {\n  color: white; }\n\n.logo {\n  align-self: center;\n  height: 30px;\n  width: 80px;\n  margin: 8px;\n  cursor: pointer; }\n\n.extraSpace {\n  flex: 1 1 auto; }\n\n.searchContainer {\n  height: 20px;\n  width: 60%;\n  margin-top: 10px; }\n\n.searchContainer input {\n    height: 80px;\n    border-radius: 10px;\n    border-color: #ff000000; }\n\n.app-navbar {\n  height: 50px;\n  background-color: #3892ce;\n  color: #303030;\n  width: 100%; }\n\n.profileImage {\n  width: 40px;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaGVsbC9oZWFkZXIvQzpcXGNkcml2ZVxcY2Fwc3RvbmUzXFxib29rbXltb3ZpZVxcYW5ndWxhcjMwMW1vdmllcHJvamVjdC9zcmNcXGFwcFxcY29yZVxcc2hlbGxcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQXlCO0VBQ3pCLGFBQVksRUFDYjs7QUFFRDtFQUVJLFVBQVMsRUFDVjs7QUFHSDtFQUNFLG9CQUFtQjtFQUNuQixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixZQUFXO0VBQ1gsWUFBVztFQUNYLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UsYUFBWTtFQUNaLFdBQVU7RUFDVixpQkFBZ0IsRUFPakI7O0FBVkQ7SUFNSSxhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLHdCQUF1QixFQUN4Qjs7QUFHSDtFQUNFLGFBQVk7RUFDWiwwQkFBbUM7RUFDbkMsZUFBc0I7RUFDdEIsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVztFQUNYLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2hlbGwvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQzMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgLm1hdC1oMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLXNlYXJjaCB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG5cclxuLnNlYXJjaC13aWR0aCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnVzZXItYnV0dG9uIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udXNlci1wcm9maWxlLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItc2VhcmNoLWJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogODBweDtcclxuICBtYXJnaW46IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5leHRyYVNwYWNlIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLnNlYXJjaENvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmMDAwMDAwO1xyXG4gIH1cclxufVxyXG5cclxuLmFwcC1uYXZiYXIge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDE0NiwgMjA2KTtcclxuICBjb2xvcjogcmdiKDQ4LCA0OCwgNDgpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZmlsZUltYWdlIHtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/core/shell/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/shell/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var _services_userDetails_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/userDetails.service */ "./src/app/core/services/userDetails.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../reducers/index */ "./src/app/reducers/index.ts");
/* harmony import */ var src_app_core_store_action_userDetails_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/store/action/userDetails.action */ "./src/app/core/store/action/userDetails.action.ts");
/* harmony import */ var _shared_ui_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/ui-service.service */ "./src/app/shared/ui-service.service.ts");












var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog, socialAuthService, loginService, userDetailService, router, store, uiService) {
        this.dialog = dialog;
        this.socialAuthService = socialAuthService;
        this.loginService = loginService;
        this.userDetailService = userDetailService;
        this.router = router;
        this.store = store;
        this.uiService = uiService;
        this.authFlag = false;
        this.signUpFlag = false;
        this.adminFlag = false;
    }
    HeaderComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform === 'google') {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService
            .signIn(socialPlatformProvider)
            .then(function (userData) {
            _this.loginService.getUserData().subscribe(function (data) {
                var users = data;
                var userDetails;
                for (var _i = 0, _a = data.users; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (user.uid === userData.id) {
                        _this.signUpFlag = true;
                        userDetails = {
                            id: userData.id,
                            name: userData.name,
                            email: userData.email,
                            image: userData.image,
                            token: userData.token,
                            role: user.role,
                            preference: {
                                language: user.preferences.lang,
                                genre: user.preferences.generes,
                                theater: user.preferences.theaters
                            },
                            rating: {
                                movieId: user.ratings.movieId,
                                rating: user.ratings.rating
                            }
                        };
                        sessionStorage.setItem('authDetails', JSON.stringify(userDetails));
                        _this.store.dispatch(new src_app_core_store_action_userDetails_action__WEBPACK_IMPORTED_MODULE_9__["SetUser"](userDetails));
                        _this.validate();
                        // this.router.navigate(['/home']);
                    }
                }
                if (_this.signUpFlag === false) {
                    _this.userDetailService.addNewUser(userData);
                    _this.validate();
                }
            });
        })
            .catch(function (err) {
            _this.uiService.showMessage('Oh gosh, SOMETHING WENT WRONG !!!!', '', 3000);
        });
    };
    HeaderComponent.prototype.socialSignOut = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform === 'google') {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signOut().then(function (data) {
            // window.open('https://accounts.google.com/Logout');
            sessionStorage.clear();
            _this.store.dispatch(new src_app_core_store_action_userDetails_action__WEBPACK_IMPORTED_MODULE_9__["RemoveUser"]());
            _this.router.navigate(['/home']);
            _this.validate();
        });
    };
    HeaderComponent.prototype.loadProfile = function () {
        this.router.navigate(['/profile']);
    };
    HeaderComponent.prototype.validate = function () {
        var authDetails = sessionStorage.getItem('authDetails');
        this.userDetails = JSON.parse(authDetails);
        if (authDetails) {
            this.authFlag = true;
            if (this.userDetails.role === 'Admin') {
                this.adminFlag = true;
            }
        }
        else {
            this.authFlag = false;
            this.adminFlag = false;
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_reducers_index__WEBPACK_IMPORTED_MODULE_8__["userSelector"]).subscribe(function (user) {
            _this.validate();
        });
    };
    HeaderComponent.prototype.openSearchPage = function () {
        this.router.navigate(['/search']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInput"])
    ], HeaderComponent.prototype, "input", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/shell/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/shell/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _services_userDetails_service__WEBPACK_IMPORTED_MODULE_5__["UserDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"],
            _shared_ui_service_service__WEBPACK_IMPORTED_MODULE_10__["UiService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/shell/header/service/signin.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/shell/header/service/signin.service.ts ***!
  \*************************************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return SignInService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SignInService = /** @class */ (function () {
    function SignInService(httpClient) {
        this.httpClient = httpClient;
    }
    SignInService.prototype.getUserData = function () {
        return this.httpClient.get('http://localhost:3002/userDetails/');
    };
    SignInService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SignInService);
    return SignInService;
}());



/***/ }),

/***/ "./src/app/core/shell/shell.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/shell/shell.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  shell works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/shell/shell.component.scss":
/*!*************************************************!*\
  !*** ./src/app/core/shell/shell.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2hlbGwvc2hlbGwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/shell/shell.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/shell/shell.component.ts ***!
  \***********************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShellComponent = /** @class */ (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () {
    };
    ShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shell',
            template: __webpack_require__(/*! ./shell.component.html */ "./src/app/core/shell/shell.component.html"),
            styles: [__webpack_require__(/*! ./shell.component.scss */ "./src/app/core/shell/shell.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShellComponent);
    return ShellComponent;
}());



/***/ }),

/***/ "./src/app/core/store/action/userDetails.action.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/store/action/userDetails.action.ts ***!
  \*********************************************************/
/*! exports provided: UserLogged, SetUser, RemoveUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogged", function() { return UserLogged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUser", function() { return SetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveUser", function() { return RemoveUser; });
var UserLogged;
(function (UserLogged) {
    UserLogged["SET_USER"] = "[ User ] Set now logged in user";
    UserLogged["REMOVE_USER"] = "[ User ] Delete logged in user";
})(UserLogged || (UserLogged = {}));
var SetUser = /** @class */ (function () {
    function SetUser(payload) {
        this.payload = payload;
        this.type = UserLogged.SET_USER;
    }
    return SetUser;
}());

var RemoveUser = /** @class */ (function () {
    function RemoveUser() {
        this.type = UserLogged.REMOVE_USER;
    }
    return RemoveUser;
}());



/***/ }),

/***/ "./src/app/core/store/reducers/userDetails.reducer.ts":
/*!************************************************************!*\
  !*** ./src/app/core/store/reducers/userDetails.reducer.ts ***!
  \************************************************************/
/*! exports provided: initialUserState, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialUserState", function() { return initialUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _action_userDetails_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action/userDetails.action */ "./src/app/core/store/action/userDetails.action.ts");


var initialUserState = {
    user: {
        id: '',
        name: '',
        email: '',
        image: '',
        token: '',
        role: '',
        preference: {
            language: '',
            genre: [],
            theater: [],
        },
        rating: {
            movieId: '',
            rating: ''
        }
    }
};
function userReducer(state, action) {
    if (state === void 0) { state = initialUserState; }
    switch (action.type) {
        case _action_userDetails_action__WEBPACK_IMPORTED_MODULE_1__["UserLogged"].SET_USER: {
            var newUserState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.user);
            newUserState = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user: newUserState });
        }
        case _action_userDetails_action__WEBPACK_IMPORTED_MODULE_1__["UserLogged"].REMOVE_USER: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user: initialUserState.user });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/home/services/home.service.ts":
/*!***********************************************!*\
  !*** ./src/app/home/services/home.service.ts ***!
  \***********************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_home_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/home.action */ "./src/app/home/store/actions/home.action.ts");
/* harmony import */ var src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/config */ "./src/app/shared/config.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_core_store_action_userDetails_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/store/action/userDetails.action */ "./src/app/core/store/action/userDetails.action.ts");








var HomeService = /** @class */ (function () {
    function HomeService(http, store) {
        this.http = http;
        this.store = store;
        this.nowPlayingMoviesUrl = src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["BASE_URL"].TMDB_API + src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["TMDB_URLS"].NOW_PLAYING_MOVIES + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_KEY + '&page=';
        this.upcomingMoviesUrl = src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["BASE_URL"].TMDB_API + src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["TMDB_URLS"].UPCOMING_MOVIES + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_KEY + '&page=';
        this.genresUrl = src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["BASE_URL"].TMDB_API + src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["TMDB_URLS"].GENRES + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_KEY + '&language=en-US';
        this.sortPreferenceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].JSONSERVER + src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["JSON_SERVER_URLS"].USER_DETAILS;
        this.genres = [];
    }
    HomeService.prototype.getNowshowing = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this.http.get(this.nowPlayingMoviesUrl + page).subscribe(function (movies) {
            movies['results'].forEach(function (element) {
                var getCreditsUrl = src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["BASE_URL"].TMDB_API + src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["TMDB_URLS"].GET_CREDITS + element.id + '/credits?' + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_KEY;
                _this.http.get(getCreditsUrl).subscribe(function (res) {
                    element.casts = res['cast'].splice(0, 5);
                    element.crews = res['crew'].splice(0, 5);
                });
            });
            _this.store.dispatch(new _store_actions_home_action__WEBPACK_IMPORTED_MODULE_4__["SetNowPlayingMovies"](movies['results']));
            // this.getCastAndCrew(movies['results']);
        }, function (error) {
            console.error(error);
        });
    };
    HomeService.prototype.getUpcomingMovies = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this.http.get(this.upcomingMoviesUrl + page).subscribe(function (movies) {
            movies['results'].forEach(function (element) {
                var getCreditsUrl = src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["BASE_URL"].TMDB_API + src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["TMDB_URLS"].GET_CREDITS + element.id + '/credits?' + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_KEY;
                _this.http.get(getCreditsUrl).subscribe(function (res) {
                    element.casts = res['cast'].splice(0, 5);
                    element.crews = res['crew'].splice(0, 5);
                });
            });
            _this.store.dispatch(new _store_actions_home_action__WEBPACK_IMPORTED_MODULE_4__["SetUpcomingMovies"](movies['results']));
            // this.getCastAndCrew(movies['results']);
        }, function (error) {
            console.error(error);
        });
    };
    HomeService.prototype.getGenres = function () {
        return this.genres;
    };
    HomeService.prototype.fetchGenres = function () {
        var _this = this;
        this.http.get(this.genresUrl).subscribe(function (res) {
            _this.genres = res['genres'];
        });
    };
    HomeService.prototype.getCastAndCrew = function (movies) {
        var _this = this;
        movies.forEach(function (element) {
            var getCreditsUrl = src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["BASE_URL"].TMDB_API + src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["TMDB_URLS"].GET_CREDITS + element.id + '/credits?' + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_KEY;
            _this.http.get(getCreditsUrl).subscribe(function (res) {
                res['cast'].splice(5);
                res['crew'].splice(5);
                _this.store.dispatch(new _store_actions_home_action__WEBPACK_IMPORTED_MODULE_4__["SetCastAndCrew"](res));
            });
        });
    };
    HomeService.prototype.getTheaterList = function () {
        var _this = this;
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].JSONSERVER + src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["JSON_SERVER_URLS"].THEATER_URL).subscribe(function (res) {
            if (res !== undefined) {
                _this.store.dispatch(new _store_actions_home_action__WEBPACK_IMPORTED_MODULE_4__["SetTheaters"](res['theaters']));
            }
        });
    };
    HomeService.prototype.getUserPreference = function () {
        return this.http.get(this.sortPreferenceUrl);
    };
    HomeService.prototype.setPreference = function (newPreference, currentUserId) {
        var _this = this;
        var objectRef, currentUserData;
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].JSONSERVER + src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["JSON_SERVER_URLS"].USER_DETAILS).subscribe(function (res) {
            objectRef = res;
            res['users'].forEach(function (user) {
                if (user.uid === currentUserId) {
                    user.preferences = newPreference;
                    currentUserData = user;
                }
            });
            _this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].JSONSERVER + src_app_shared_config__WEBPACK_IMPORTED_MODULE_5__["JSON_SERVER_URLS"].USER_DETAILS, objectRef).subscribe(function (resp) {
                _this.store.dispatch(new src_app_core_store_action_userDetails_action__WEBPACK_IMPORTED_MODULE_7__["SetUser"](currentUserData));
            });
        });
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/home/store/actions/home.action.ts":
/*!***************************************************!*\
  !*** ./src/app/home/store/actions/home.action.ts ***!
  \***************************************************/
/*! exports provided: EMovieActionTypes, SetNowPlayingMovies, SetUpcomingMovies, SetCastAndCrew, SetTheaters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMovieActionTypes", function() { return EMovieActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetNowPlayingMovies", function() { return SetNowPlayingMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUpcomingMovies", function() { return SetUpcomingMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCastAndCrew", function() { return SetCastAndCrew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTheaters", function() { return SetTheaters; });
var EMovieActionTypes;
(function (EMovieActionTypes) {
    EMovieActionTypes["SET_NOW_PLAYING_MOVIES"] = "[ Movie ] Set now playing movies";
    EMovieActionTypes["SET_UPCOMING_MOVIES"] = "[ Movie ] Set up coming movies";
    EMovieActionTypes["SET_CAST_AND_CREW"] = "[ Movie ] Set Credits";
    EMovieActionTypes["SET_THEATERS"] = "[ Theaters ] Set Theaters";
})(EMovieActionTypes || (EMovieActionTypes = {}));
var SetNowPlayingMovies = /** @class */ (function () {
    function SetNowPlayingMovies(payload) {
        this.payload = payload;
        this.type = EMovieActionTypes.SET_NOW_PLAYING_MOVIES;
    }
    return SetNowPlayingMovies;
}());

var SetUpcomingMovies = /** @class */ (function () {
    function SetUpcomingMovies(payload) {
        this.payload = payload;
        this.type = EMovieActionTypes.SET_UPCOMING_MOVIES;
    }
    return SetUpcomingMovies;
}());

var SetCastAndCrew = /** @class */ (function () {
    function SetCastAndCrew(payload) {
        this.payload = payload;
        this.type = EMovieActionTypes.SET_CAST_AND_CREW;
    }
    return SetCastAndCrew;
}());

var SetTheaters = /** @class */ (function () {
    function SetTheaters(payload) {
        this.payload = payload;
        this.type = EMovieActionTypes.SET_THEATERS;
    }
    return SetTheaters;
}());



/***/ }),

/***/ "./src/app/home/store/reducers/home.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/store/reducers/home.reducer.ts ***!
  \*****************************************************/
/*! exports provided: initialMovieState, moviesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialMovieState", function() { return initialMovieState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moviesReducer", function() { return moviesReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_home_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/home.action */ "./src/app/home/store/actions/home.action.ts");


var initialMovieState = {
    nowPlayingMovies: [],
    upcomingMovies: [],
    setTheaters: []
};
function moviesReducer(state, action) {
    if (state === void 0) { state = initialMovieState; }
    switch (action.type) {
        case _actions_home_action__WEBPACK_IMPORTED_MODULE_1__["EMovieActionTypes"].SET_NOW_PLAYING_MOVIES: {
            // const objOfMovies = action.payload.reduce((o, movie) => ({ ...o, [movie.id]: movie }), {});
            // const newMovies: { [key: number]: Movie } = { ...state.nowPlayingMovies, ...objOfMovies };
            var newNowPlayingMovies = state.nowPlayingMovies.slice();
            newNowPlayingMovies.push.apply(newNowPlayingMovies, action.payload);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { nowPlayingMovies: newNowPlayingMovies });
        }
        case _actions_home_action__WEBPACK_IMPORTED_MODULE_1__["EMovieActionTypes"].SET_UPCOMING_MOVIES: {
            // const objOfMovies = action.payload.reduce((o, movie) => ({ ...o, [movie.id]: movie }), {});
            // const newUpcomingMovies: { [key: number]: Movie } = { ...state.upcomingMovies, ...objOfMovies };
            var newUpcomingMovies = state.upcomingMovies.slice();
            newUpcomingMovies.push.apply(newUpcomingMovies, action.payload);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { upcomingMovies: newUpcomingMovies });
        }
        case _actions_home_action__WEBPACK_IMPORTED_MODULE_1__["EMovieActionTypes"].SET_CAST_AND_CREW: {
            var newNowPlayingMovieState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.nowPlayingMovies);
            var newUpcomingMovieState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.upcomingMovies);
            if (state.nowPlayingMovies[action.payload.id]) {
                newNowPlayingMovieState[action.payload.id].casts = action.payload.cast;
                newNowPlayingMovieState[action.payload.id].crews = action.payload.crew;
            }
            if (state.upcomingMovies[action.payload.id]) {
                newUpcomingMovieState[action.payload.id].casts = action.payload.cast;
                newUpcomingMovieState[action.payload.id].crews = action.payload.crew;
            }
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { nowPlayingMovies: newNowPlayingMovieState, upcomingMovies: newUpcomingMovieState });
        }
        case _actions_home_action__WEBPACK_IMPORTED_MODULE_1__["EMovieActionTypes"].SET_THEATERS: {
            var newSetTheatersState = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { setTheaters: newSetTheatersState });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");





var materialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [materialModules],
            exports: [materialModules],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"profile-image\">\r\n    <img class=\"img-circle\" src=\"{{userDetails.image}}\" alt=\"user_image\">\r\n  </div>\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"profile-image\">\r\n    <h3> Hello {{userDetails.name}} </h3>\r\n  </div>\r\n\r\n  <div class=\"add-preference-dropdown\">\r\n    <form fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" [formGroup]=\"newPreference\">\r\n      <mat-form-field>\r\n        <mat-label>Language</mat-label>\r\n        <mat-select matNativeControl formControlName=\"lang\">\r\n          <mat-option *ngFor=\"let language of languageList\" value=\"{{language.value}}\">{{language.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-label>Genre</mat-label>\r\n        <mat-select matNativeControl formControlName=\"generes\">\r\n          <mat-option *ngFor=\"let genre of genresList\" value=\"{{genre.id}}\">{{genre.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-label>Theater</mat-label>\r\n        <mat-select matNativeControl formControlName=\"theaters\">\r\n          <mat-option *ngFor=\"let theater of theaterList\" value=\"{{theater.name}}\">{{theater.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </form>\r\n  </div>\r\n\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"submitPreferences()\">Submit</button>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #successDialog>\r\n  <div>Your Preference are saved sucessfully </div>\r\n  <button mat-raised-button class=\"accept\" color=\"primary\" (click)=\"sucess()\">OK</button>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\n  margin-top: 10px; }\n\n.img-circle {\n  border-radius: 50%; }\n\n.add-preference-dropdown form mat-form-field {\n  margin-left: 30px; }\n\n:host /deep/ .mat-select-value {\n  color: white; }\n\n:host /deep/ .mat-form-field-infix {\n  color: white; }\n\n:host /deep/ .mat-form-field-label {\n  color: #fff; }\n\n.accept {\n  margin-left: 40%;\n  margin-top: 8%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcY2RyaXZlXFxjYXBzdG9uZTNcXGJvb2tteW1vdmllXFxhbmd1bGFyMzAxbW92aWVwcm9qZWN0L3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWltYWdlIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaW1nLWNpcmNsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uYWRkLXByZWZlcmVuY2UtZHJvcGRvd24gZm9ybSBtYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLy5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5hY2NlcHQge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgbWFyZ2luLXRvcDogOCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/services/home.service */ "./src/app/home/services/home.service.ts");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/index */ "./src/app/reducers/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








// import { UserState } from "src/app/core/store/reducers/userDetails.reducer";

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(homeService, loginService, fb, store, matDialog) {
        this.homeService = homeService;
        this.loginService = loginService;
        this.fb = fb;
        this.store = store;
        this.matDialog = matDialog;
        this.genresList = [];
        this.theaterList = [];
        this.languageList = [
            { name: 'English', value: 'en' },
            { name: 'Hindi', value: 'hi' },
            { name: 'Tamil', value: 'ta' },
            { name: 'Kannada', value: 'kn' }
        ];
        this.newPreference = this.fb.group({
            lang: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            generes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            theaters: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
    }
    // after clicking submit button adding preference option is here
    ProfileComponent.prototype.submitPreferences = function () {
        var currentSeesion;
        currentSeesion = JSON.parse(sessionStorage.getItem('authDetails'));
        if (currentSeesion !== null) {
            this.homeService.setPreference(this.newPreference.value, currentSeesion['id']);
        }
        this.matDialog.open(this.successDialog);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_reducers_index__WEBPACK_IMPORTED_MODULE_5__["userSelector"]).subscribe(function (result) {
            _this.userDetails = result;
        });
        this.genresList = this.homeService.getGenres();
        this.loginService.getUserData().subscribe(function (data) { return (_this.name = data.users[0].name); });
        this.store.select(_reducers_index__WEBPACK_IMPORTED_MODULE_5__["theaterList"]).subscribe(function (result) {
            _this.theaterList = Object.values(result);
            console.log('updated', result, _this.theaterList);
        });
    };
    ProfileComponent.prototype.sucess = function () {
        this.newPreference.reset();
        this.matDialog.closeAll();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('successDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ProfileComponent.prototype, "successDialog", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"],
            _core_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers, getMovieState, nowPlayingMoviesSelector, upcomingMovieSelector, theaterList, getUserState, userSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieState", function() { return getMovieState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nowPlayingMoviesSelector", function() { return nowPlayingMoviesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upcomingMovieSelector", function() { return upcomingMovieSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theaterList", function() { return theaterList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return getUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSelector", function() { return userSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/store/reducers/home.reducer */ "./src/app/home/store/reducers/home.reducer.ts");
/* harmony import */ var _core_store_reducers_userDetails_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/store/reducers/userDetails.reducer */ "./src/app/core/store/reducers/userDetails.reducer.ts");




// export const initialState: State = {
//     movies: initialMovieState
// };
var reducers = {
    movies: _home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_2__["moviesReducer"],
    user: _core_store_reducers_userDetails_reducer__WEBPACK_IMPORTED_MODULE_3__["userReducer"]
};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];
var getMovieState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('movies');
var nowPlayingMoviesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMovieState, function (state) { return state.nowPlayingMovies; });
var upcomingMovieSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMovieState, function (state) { return state.upcomingMovies; });
var theaterList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMovieState, function (state) { return state.setTheaters; });
var getUserState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('user');
var userSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, function (state) { return state.user; });


/***/ }),

/***/ "./src/app/shared/components/modals/confirmation-modal/confirmation-modal.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/components/modals/confirmation-modal/confirmation-modal.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>Confirmation Booking Successfully </h2>\r\n<hr>\r\n<mat-dialog-content>\r\n  <div class=\"print\">\r\n    <i class=\"material-icons\">outline-print </i>\r\n  </div><br>\r\n  <table style=\"width:100%\">\r\n    <tr>\r\n      <td class=\"font_lbl\">Movie</td>\r\n      <td>: {{data.name}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"font_lbl\">Theater</td>\r\n      <td>: {{data.theater}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"font_lbl\">Time</td>\r\n      <td>: {{data.time}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"font_lbl\">Seat Number</td>\r\n      <td>: {{data.seat}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"font_lbl\">Total Amount</td>\r\n      <td>: {{data.total}}</td>\r\n    </tr>\r\n  </table>\r\n</mat-dialog-content>\r\n<br>\r\n<hr>\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-button color=\"primary\" (click)=\"onCloseConfirm()\">GOT IT,Ok</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/shared/components/modals/confirmation-modal/confirmation-modal.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/components/modals/confirmation-modal/confirmation-modal.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".print {\n  float: right;\n  cursor: pointer; }\n\n.font_lbl {\n  font-weight: 600;\n  padding-right: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC9DOlxcY2RyaXZlXFxjYXBzdG9uZTNcXGJvb2tteW1vdmllXFxhbmd1bGFyMzAxbW92aWVwcm9qZWN0L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXG1vZGFsc1xcY29uZmlybWF0aW9uLW1vZGFsXFxjb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC9jb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbnQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb250X2xibCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/modals/confirmation-modal/confirmation-modal.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/components/modals/confirmation-modal/confirmation-modal.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ConfirmationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModalComponent", function() { return ConfirmationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ConfirmationModalComponent = /** @class */ (function () {
    function ConfirmationModalComponent(dialogRef, data, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        console.log('confirmation booking', data);
    }
    ConfirmationModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmationModalComponent.prototype.onCloseConfirm = function () {
        this.dialogRef.close('Confirm');
        this.router.navigate(['/home']);
    };
    ConfirmationModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation-modal',
            template: __webpack_require__(/*! ./confirmation-modal.component.html */ "./src/app/shared/components/modals/confirmation-modal/confirmation-modal.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./confirmation-modal.component.scss */ "./src/app/shared/components/modals/confirmation-modal/confirmation-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ConfirmationModalComponent);
    return ConfirmationModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/modals/pre-booking/pre-booking.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/modals/pre-booking/pre-booking.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <hr />\r\n  <md-dialog-content>\r\n    <label>Movie has been successfully prebooked. Further notification will be sent.</label>\r\n  </md-dialog-content>\r\n  <hr />\r\n  <md-dialog-actions>\r\n    <!-- Action buttons -->\r\n    <div class=\"example-button-row\">\r\n      <button mat-raised-button=\"\" class=\"mat-raised-button mat-primary btn-book\" (click)=\"onNoClick()\">OK</button>\r\n    </div>\r\n  </md-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/modals/pre-booking/pre-booking.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/modals/pre-booking/pre-booking.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vZGFscy9wcmUtYm9va2luZy9wcmUtYm9va2luZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/modals/pre-booking/pre-booking.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/modals/pre-booking/pre-booking.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PreBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreBookingComponent", function() { return PreBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var PreBookingComponent = /** @class */ (function () {
    function PreBookingComponent(dialog, dialogRef, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PreBookingComponent.prototype.ngOnInit = function () {
    };
    PreBookingComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PreBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pre-booking',
            template: __webpack_require__(/*! ./pre-booking.component.html */ "./src/app/shared/components/modals/pre-booking/pre-booking.component.html"),
            styles: [__webpack_require__(/*! ./pre-booking.component.scss */ "./src/app/shared/components/modals/pre-booking/pre-booking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], PreBookingComponent);
    return PreBookingComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/modals/seat-reservation-modal/seat-reservation-modal.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/modals/seat-reservation-modal/seat-reservation-modal.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"seat-book\" *ngIf=\"showBook; else navToLogin\">\r\n  <span md-dialog-title class=\"title-header\">\r\n    <span class=\"title-header__lbl\">Title: </span>\r\n    <span class=\"title-header__title\">{{movieTitle}}</span>&nbsp;\r\n    <span class=\"title-header__lbl\">No of seats: </span>\r\n    <span class=\"title-header__title\">40</span>&nbsp;\r\n    <span class=\"title-header__lbl\">Cinema: </span>\r\n    <span class=\"title-header__title\">{{screen}}</span>\r\n  </span>\r\n  <hr class=\"space__hr\">\r\n  <md-dialog-content>\r\n    <div class=\"container\">\r\n      <main class=\"innerContainer\">\r\n        <!-- Showing a static legend bar -->\r\n        <div class=\"legend\">\r\n          <span class=\"freeSeat padding-left\">\r\n            <i class=\"material-icons\">check_box_outline_blank </i>\r\n          </span> <span class=\"rowSpan check-log\">FREE</span>\r\n          <span class=\"reservedSeat padding-left\">\r\n            <i class=\"material-icons\">not_interested </i>\r\n          </span><span class=\"rowSpan\"> TAKEN</span>\r\n          <span class=\"selectedSeat padding-left\">\r\n            <i class=\"material-icons\">\r\n              check_box\r\n            </i>\r\n          </span><span class=\"rowSpan\"> SELECTED</span>\r\n        </div>\r\n        <br>\r\n        <!-- Generate the seating grid -->\r\n        <div *ngFor=\"let row of rows\" class=\"grid__DIV\">\r\n          <span class=\"seat\" *ngFor=\"let col of cols;index as i;\" (click)=\"seatClicked(row + col)\" [ngSwitch]=\"getStatus(row + col)\">\r\n            <span class=\"rowSpan\">{{row+col}}</span>\r\n            <span>\r\n              <span *ngSwitchCase=\"'selected'\" class=\"selectedSeat\">\r\n                <i class=\"material-icons\"> check_box </i>\r\n              </span>\r\n              <span *ngSwitchCase=\"'reserved'\" class=\" reservedSeat\">\r\n                <i class=\"material-icons\">not_interested </i>\r\n              </span>\r\n              <span *ngSwitchDefault class=\"freeSeat \">\r\n                <i class=\"material-icons\">check_box_outline_blank </i>\r\n              </span>\r\n            </span>\r\n          </span>\r\n        </div>\r\n\r\n        <!-- Structural directive - only visible on selection -->\r\n        <div *ngIf=\"selected.length > 0\">\r\n          <div class=\"wordWrap\">SEATS RESERVED : {{selected.length}}\r\n            <span class=\"count\" *ngFor=\"let rowSelect of selected\">({{rowSelect}})</span>\r\n          </div>\r\n          <div>PRICE : {{ticketPrice}} * {{selected.length}} = {{currency}}.{{ticketPrice*selected.length}} </div>\r\n          <div>CONVENIENCE FEE : {{currency}}.{{convFee}}</div>\r\n          <div>TOTAL : {{currency}}.{{ticketPrice * selected.length + convFee}}</div>\r\n        </div>\r\n        <br>\r\n        <div class=\"screen-img screen\">\r\n          <!-- <img src=\"http://placehold.it/350x150\" class=\"screen-image__holder\" alt=\"image caption\" /> -->\r\n          <img src=\"{{imagesPath}}{{movieList.poster_path}}\" class=\"screen-image__holder\" onerror=\"this.src='/assets/images/noImage.jpg';\"\r\n            alt=\"movie poster\">\r\n        </div>\r\n      </main>\r\n    </div>\r\n  </md-dialog-content>\r\n\r\n  <hr class=\"space__hr\">\r\n  <md-dialog-actions>\r\n    <!-- Action buttons -->\r\n    <div class=\"example-button-row\">\r\n      <button mat-raised-button=\"\" class=\"mat-raised-button\" (click)=\"onCloseCancel()\">CANCEL</button>&nbsp;\r\n      <button mat-raised-button=\"\" class=\"mat-raised-button mat-primary btn-book\" [disabled]=\"selected.length === 0\"\r\n        (click)=\"onCloseConfirm()\">BOOK</button>\r\n    </div>\r\n\r\n  </md-dialog-actions>\r\n</div>\r\n\r\n<ng-template #navToLogin>\r\n  <div class=\"container login\">\r\n    <md-dialog-content>\r\n      <p class=\"login__para\">Please login to continue booking..</p>\r\n    </md-dialog-content>\r\n    <md-dialog-actions>\r\n      <!-- Action buttons -->\r\n      <div class=\"example-button-row\">\r\n        <button mat-raised-button=\"\" class=\"mat-raised-button mat-primary btn-book\" (click)=\"onNoClick()\">OK</button>\r\n      </div>\r\n    </md-dialog-actions>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/shared/components/modals/seat-reservation-modal/seat-reservation-modal.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/modals/seat-reservation-modal/seat-reservation-modal.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".seat-book {\n  /* End CSS Helpers */ }\n  .seat-book .container {\n    width: auto; }\n  .seat-book .wordWrap {\n    word-break: break-all; }\n  .seat-book .btn-book {\n    float: right; }\n  .seat-book .grid__DIV {\n    margin: 10px; }\n  .seat-book .check-log {\n    color: #000; }\n  .seat-book .title-header {\n    justify-content: space-between; }\n  @media (min-width: 481px) and (max-width: 767px) {\n      .seat-book .title-header {\n        display: grid; } }\n  @media (min-width: 320px) and (max-width: 480px) {\n      .seat-book .title-header {\n        display: inline-grid; } }\n  @media (max-width: 768px) {\n      .seat-book .title-header {\n        display: inline-grid; } }\n  .seat-book .title-header .title-header__lbl {\n      font-weight: 600; }\n  .seat-book .space__hr {\n    margin-top: 25px;\n    margin-bottom: 25px; }\n  .seat-book .innerContainer {\n    text-align: center; }\n  .seat-book .seat {\n    padding-right: 5px; }\n  .seat-book .legend {\n    font-size: 14px; }\n  .seat-book .legend > .padding-left {\n    padding-left: 15px; }\n  .seat-book .screen {\n    margin: 20px; }\n  .seat-book .screen .screen-image__holder {\n      border-radius: 15px;\n      box-shadow: 0px 3px 6px #fff; }\n  @media (min-width: 481px) and (max-width: 767px) {\n        .seat-book .screen .screen-image__holder {\n          width: 100%; } }\n  @media (min-width: 320px) and (max-width: 480px) {\n        .seat-book .screen .screen-image__holder {\n          width: 100%; } }\n  .seat-book .reservedSeat {\n    color: #ce4844;\n    cursor: pointer; }\n  .seat-book .selectedSeat {\n    color: #5cb85c;\n    cursor: pointer; }\n  .seat-book .freeSeat {\n    color: #333333;\n    cursor: pointer; }\n  .seat-book .rowSpan {\n    vertical-align: super;\n    padding-left: 15px; }\n  .screen-img img {\n  width: 350px;\n  height: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWxzL3NlYXQtcmVzZXJ2YXRpb24tbW9kYWwvQzpcXGNkcml2ZVxcY2Fwc3RvbmUzXFxib29rbXltb3ZpZVxcYW5ndWxhcjMwMW1vdmllcHJvamVjdC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxtb2RhbHNcXHNlYXQtcmVzZXJ2YXRpb24tbW9kYWxcXHNlYXQtcmVzZXJ2YXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFxQkUscUJBQXFCLEVBa0Z0QjtFQXZHRDtJQUVJLFlBQVcsRUFDWjtFQUhIO0lBTUksc0JBQXFCLEVBQ3RCO0VBUEg7SUFVSSxhQUFZLEVBQ2I7RUFYSDtJQWNJLGFBQVksRUFDYjtFQWZIO0lBa0JJLFlBQVcsRUFDWjtFQW5CSDtJQXVCSSwrQkFBOEIsRUFvQi9CO0VBakJDO01BMUJKO1FBMkJNLGNBQWEsRUFnQmhCLEVBQUE7RUFaQztNQS9CSjtRQWdDTSxxQkFBb0IsRUFXdkIsRUFBQTtFQVBDO01BcENKO1FBcUNNLHFCQUFvQixFQU12QixFQUFBO0VBM0NIO01BeUNNLGlCQUFnQixFQUNqQjtFQTFDTDtJQThDSSxpQkFBZ0I7SUFDaEIsb0JBQW1CLEVBQ3BCO0VBaERIO0lBb0RJLG1CQUFrQixFQUNuQjtFQXJESDtJQXdESSxtQkFBa0IsRUFDbkI7RUF6REg7SUE0REksZ0JBQWUsRUFDaEI7RUE3REg7SUFnRUksbUJBQWtCLEVBQ25CO0VBakVIO0lBb0VJLGFBQVksRUFjYjtFQWxGSDtNQXVFTSxvQkFBbUI7TUFDbkIsNkJBQTRCLEVBUzdCO0VBUEM7UUExRU47VUEyRVEsWUFBVyxFQU1kLEVBQUE7RUFIQztRQTlFTjtVQStFUSxZQUFXLEVBRWQsRUFBQTtFQWpGTDtJQXFGSSxlQUFjO0lBQ2QsZ0JBQWUsRUFDaEI7RUF2Rkg7SUEwRkksZUFBYztJQUNkLGdCQUFlLEVBQ2hCO0VBNUZIO0lBK0ZJLGVBQWM7SUFDZCxnQkFBZSxFQUNoQjtFQWpHSDtJQW9HSSxzQkFBcUI7SUFDckIsbUJBQWtCLEVBQ25CO0VBR0g7RUFFSSxhQUFZO0VBQ1osY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWxzL3NlYXQtcmVzZXJ2YXRpb24tbW9kYWwvc2VhdC1yZXNlcnZhdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWF0LWJvb2sge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAud29yZFdyYXAge1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1ib29rIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIC5ncmlkX19ESVYge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNoZWNrLWxvZyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcblxyXG4gIC8qIEVuZCBDU1MgSGVscGVycyAqL1xyXG4gIC50aXRsZS1oZWFkZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIC8vIERldmljZSA9IExvdyBSZXNvbHV0aW9uIFRhYmxldHMsIE1vYmlsZXMgKExhbmRzY2FwZSlcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV2aWNlID0gTW9zdCBvZiB0aGUgU21hcnRwaG9uZXMgTW9iaWxlcyAoUG9ydHJhaXQpXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXZpY2UgPSBJcGFkcyAocG9ydHJhaXQtIG1vYmlsZSlcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUtaGVhZGVyX19sYmwge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNwYWNlX19ociB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcblxyXG4gIC5pbm5lckNvbnRhaW5lciB7XHJcbiAgICAvLyBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zZWF0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5sZWdlbmQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLmxlZ2VuZCA+IC5wYWRkaW5nLWxlZnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNjcmVlbiB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcblxyXG4gICAgLnNjcmVlbi1pbWFnZV9faG9sZGVyIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggI2ZmZjtcclxuXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZXNlcnZlZFNlYXQge1xyXG4gICAgY29sb3I6ICNjZTQ4NDQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0ZWRTZWF0IHtcclxuICAgIGNvbG9yOiAjNWNiODVjO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmZyZWVTZWF0IHtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnJvd1NwYW4ge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNjcmVlbi1pbWcge1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/modals/seat-reservation-modal/seat-reservation-modal.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/modals/seat-reservation-modal/seat-reservation-modal.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SeatReservationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeatReservationModalComponent", function() { return SeatReservationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/app/shared/config.ts");





var SeatReservationModalComponent = /** @class */ (function () {
    function SeatReservationModalComponent(dialog, dialogRef, data, router) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.imagesPath = _config__WEBPACK_IMPORTED_MODULE_4__["TMDB_URLS"].IMAGE_URL;
        // rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        this.rows = ['A', 'B', 'C', 'D'];
        this.cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2','F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
        this.reserved = ['A2', 'A3', 'B5', 'C1', 'C2', 'D4'];
        this.selected = [];
        this.ticketPrice = 120;
        this.convFee = 30;
        this.totalPrice = 0;
        this.currency = 'Rs';
        console.log('data---', data);
    }
    SeatReservationModalComponent.prototype.ngOnInit = function () {
        var authValid = sessionStorage.getItem('authDetails');
        if (authValid) {
            this.showBook = true;
        }
        else {
            this.showBook = false;
        }
    };
    SeatReservationModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SeatReservationModalComponent.prototype.onCloseConfirm = function () {
        this.dialogRef.close('Confirm');
        var total = this.ticketPrice * this.selected.length + this.convFee;
        var theater = this.screen || '';
        this.router.navigate(['/payment', this.movieTitle, theater, '10:00', this.selected.join(','), total]);
    };
    SeatReservationModalComponent.prototype.onCloseCancel = function () {
        this.dialogRef.close('Cancel');
    };
    // return status of each seat
    SeatReservationModalComponent.prototype.getStatus = function (seatPos) {
        if (this.reserved.indexOf(seatPos) !== -1) {
            return 'reserved';
        }
        else if (this.selected.indexOf(seatPos) !== -1) {
            return 'selected';
        }
    };
    // click handler
    SeatReservationModalComponent.prototype.seatClicked = function (seatPos) {
        console.log('test', seatPos);
        var index = this.selected.indexOf(seatPos);
        if (index !== -1) {
            // seat already selected, remove
            this.selected.splice(index, 1);
        }
        else {
            // push to selected array only if it is not reserved
            if (this.reserved.indexOf(seatPos) === -1) {
                this.selected.push(seatPos);
            }
        }
    };
    SeatReservationModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seat-reservation-modal',
            template: __webpack_require__(/*! ./seat-reservation-modal.component.html */ "./src/app/shared/components/modals/seat-reservation-modal/seat-reservation-modal.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./seat-reservation-modal.component.scss */ "./src/app/shared/components/modals/seat-reservation-modal/seat-reservation-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SeatReservationModalComponent);
    return SeatReservationModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/payment-booking/payment-booking.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/payment-booking/payment-booking.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <h1> Payment</h1>\r\n  <form class=\"example-container\" role=\"form\">\r\n    <div>\r\n      <label>Card Holder's Name </label> &nbsp;&nbsp;\r\n      <mat-form-field>\r\n        <input matInput name=\"card-holder-name\" id=\"card-holder-name\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <label>Debit/Credit Card Number </label> &nbsp;&nbsp;\r\n      <mat-form-field>\r\n        <input matInput name=\"card-number\" id=\"card-number\" placeholder=\"\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <label>Expiration Date </label> &nbsp;&nbsp;\r\n      <mat-form-field>\r\n        <mat-select>\r\n          <mat-option value=\"option\">Month</mat-option>\r\n          <mat-option value=\"01\">Jan (01)</mat-option>\r\n          <mat-option value=\"02\">Feb (02)</mat-option>\r\n          <mat-option value=\"03\">Mar (03)</mat-option>\r\n          <mat-option value=\"04\">Apr (04)</mat-option>\r\n          <mat-option value=\"05\">May (05)</mat-option>\r\n          <mat-option value=\"06\">June (06)</mat-option>\r\n          <mat-option value=\"07\">July (07)</mat-option>\r\n          <mat-option value=\"08\">Aug (08)</mat-option>\r\n          <mat-option value=\"09\">Sep (09)</mat-option>\r\n          <mat-option value=\"10\">Oct (10)</mat-option>\r\n          <mat-option value=\"11\">Nov (11)</mat-option>\r\n          <mat-option value=\"12\">Dec (12)</mat-option>\r\n        </mat-select>\r\n      </mat-form-field> &nbsp;&nbsp;\r\n      <mat-form-field>\r\n        <mat-select required>\r\n          <mat-option value=\"13\">2013</mat-option>\r\n          <mat-option value=\"14\">2014</mat-option>\r\n          <mat-option value=\"15\">2015</mat-option>\r\n          <mat-option value=\"16\">2016</mat-option>\r\n          <mat-option value=\"17\">2017</mat-option>\r\n          <mat-option value=\"18\">2018</mat-option>\r\n          <mat-option value=\"19\">2019</mat-option>\r\n          <mat-option value=\"20\">2020</mat-option>\r\n          <mat-option value=\"21\">2021</mat-option>\r\n          <mat-option value=\"22\">2022</mat-option>\r\n          <mat-option value=\"23\">2023</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <label>Card CVV </label> &nbsp;&nbsp;\r\n      <mat-form-field>\r\n        <input matInput name=\"cvv\" id=\"cvv\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n    <mat-button-toggle-group class=\"btn-width\">\r\n      <mat-button-toggle (click)=\"openConfirmDialog()\">Pay Now</mat-button-toggle>\r\n    </mat-button-toggle-group>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/payment-booking/payment-booking.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/payment-booking/payment-booking.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-width {\n  width: 80px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGF5bWVudC1ib29raW5nL0M6XFxjZHJpdmVcXGNhcHN0b25lM1xcYm9va215bW92aWVcXGFuZ3VsYXIzMDFtb3ZpZXByb2plY3Qvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xccGF5bWVudC1ib29raW5nXFxwYXltZW50LWJvb2tpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wYXltZW50LWJvb2tpbmcvcGF5bWVudC1ib29raW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi13aWR0aCB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/payment-booking/payment-booking.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/payment-booking/payment-booking.component.ts ***!
  \********************************************************************************/
/*! exports provided: PaymentBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentBookingComponent", function() { return PaymentBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_modals_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modals/confirmation-modal/confirmation-modal.component */ "./src/app/shared/components/modals/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PaymentBookingComponent = /** @class */ (function () {
    function PaymentBookingComponent(dialog, route) {
        this.dialog = dialog;
        this.route = route;
        this.firstParam = this.route.snapshot.params.movieTitle;
        this.secondParam = this.route.snapshot.params.theatre;
        this.thirdParam = this.route.snapshot.params.time;
        this.fourthParam = this.route.snapshot.params.seat;
        this.fiveParam = this.route.snapshot.params.total;
    }
    PaymentBookingComponent.prototype.ngOnInit = function () { };
    PaymentBookingComponent.prototype.openConfirmDialog = function () {
        var dialogRef = this.dialog.open(_components_modals_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationModalComponent"], {
            disableClose: true,
            data: {
                name: this.firstParam, theater: this.secondParam,
                time: this.thirdParam, seat: this.fourthParam, total: this.fiveParam
            }
        });
        // dialogRef.afterClosed().subscribe(result => {
        // });
    };
    PaymentBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-booking',
            template: __webpack_require__(/*! ./payment-booking.component.html */ "./src/app/shared/components/payment-booking/payment-booking.component.html"),
            styles: [__webpack_require__(/*! ./payment-booking.component.scss */ "./src/app/shared/components/payment-booking/payment-booking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PaymentBookingComponent);
    return PaymentBookingComponent;
}());



/***/ }),

/***/ "./src/app/shared/config.ts":
/*!**********************************!*\
  !*** ./src/app/shared/config.ts ***!
  \**********************************/
/*! exports provided: BASE_URL, TMDB_URLS, JSON_SERVER_URLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TMDB_URLS", function() { return TMDB_URLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSON_SERVER_URLS", function() { return JSON_SERVER_URLS; });
var BASE_URL = {
    TMDB_API: 'https://api.themoviedb.org/'
};
var TMDB_URLS = {
    GET_CREDITS: '3/movie/',
    NOW_PLAYING_MOVIES: '3/movie/now_playing?',
    UPCOMING_MOVIES: '3/movie/upcoming?',
    GENRES: '3/genre/movie/list?',
    SEARCH_URL: '3/search/movie?',
    SEARCH_MOVIE: '3/search/movie',
    IMAGE_URL: 'https://image.tmdb.org/t/p/w300',
    CAST_CREW_SMALL: 'https://image.tmdb.org/t/p/w45',
    CAST_CREW_BIG: 'https://image.tmdb.org/t/p/w92'
};
var JSON_SERVER_URLS = {
    THEATER_URL: '/theater',
    USER_DETAILS: '/userDetails',
    USER_RATING: '/userRatings',
    BOOKING_DETAILS: '/bookingDetails'
};


/***/ }),

/***/ "./src/app/shared/movie-booking/movie-booking.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/movie-booking/movie-booking.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <ng-content select=\".theater-picker\"></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/movie-booking/movie-booking.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/movie-booking/movie-booking.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datepicker-container {\n  flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vdmllLWJvb2tpbmcvQzpcXGNkcml2ZVxcY2Fwc3RvbmUzXFxib29rbXltb3ZpZVxcYW5ndWxhcjMwMW1vdmllcHJvamVjdC9zcmNcXGFwcFxcc2hhcmVkXFxtb3ZpZS1ib29raW5nXFxtb3ZpZS1ib29raW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXNCLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vdmllLWJvb2tpbmcvbW92aWUtYm9va2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlcGlja2VyLWNvbnRhaW5lciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/movie-booking/movie-booking.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/movie-booking/movie-booking.component.ts ***!
  \*****************************************************************/
/*! exports provided: MovieBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieBookingComponent", function() { return MovieBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieBookingComponent = /** @class */ (function () {
    function MovieBookingComponent() {
        // dateSelector = new  FormControl(new Date());
        this.theaters = [{
                'name': 'ABC',
                'location': 'asdas',
                'timings': ['2:00', '6:00', '9:00', '11:00']
            }];
        this.minDate = new Date();
    }
    MovieBookingComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieBookingComponent.prototype, "movieId", void 0);
    MovieBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-booking',
            template: __webpack_require__(/*! ./movie-booking.component.html */ "./src/app/shared/movie-booking/movie-booking.component.html"),
            styles: [__webpack_require__(/*! ./movie-booking.component.scss */ "./src/app/shared/movie-booking/movie-booking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieBookingComponent);
    return MovieBookingComponent;
}());



/***/ }),

/***/ "./src/app/shared/movie-dropdowns/movie-dropdowns.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/movie-dropdowns/movie-dropdowns.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-filter-dropdowns\" fxLayout=\"{{layout}}\" fxLayoutGap=\"2%\" fxLayoutAlign=\"center\">\r\n  <mat-form-field>\r\n    <mat-label *ngIf=\"!languageSelected\">Language</mat-label>\r\n    <mat-select [formControl]=\"languageSelector\">\r\n      <mat-option *ngFor=\"let language of languageList\" value=\"{{language.id}}\">{{language.name}}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <mat-label *ngIf=\"!genreSelected\">Genre</mat-label>\r\n    <mat-select [formControl]=\"generSelector\">\r\n      <mat-option *ngFor=\"let genre of genresList\" value=\"{{genre.id}}\">{{genre.name}}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/movie-dropdowns/movie-dropdowns.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/movie-dropdowns/movie-dropdowns.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-filter-dropdowns {\n  margin-top: 0px 0px;\n  color: white; }\n  .search-filter-dropdowns mat-form-field,\n  .search-filter-dropdowns .mat-input-element option {\n    margin-top: -10px;\n    font-size: 14px; }\n  :host /deep/ .mat-select-value {\n  color: #fff !important; }\n  :host /deep/ .mat-form-field-label {\n  color: #fff; }\n  .extraSpace {\n  flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vdmllLWRyb3Bkb3ducy9DOlxcY2RyaXZlXFxjYXBzdG9uZTNcXGJvb2tteW1vdmllXFxhbmd1bGFyMzAxbW92aWVwcm9qZWN0L3NyY1xcYXBwXFxzaGFyZWRcXG1vdmllLWRyb3Bkb3duc1xcbW92aWUtZHJvcGRvd25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW1CO0VBQ25CLGFBQVksRUFPYjtFQVREOztJQU1JLGtCQUFpQjtJQUNqQixnQkFBZSxFQUNoQjtFQUdIO0VBQ0UsdUJBQXNCLEVBQ3ZCO0VBRUQ7RUFDRSxZQUFXLEVBQ1o7RUFFRDtFQUNFLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb3ZpZS1kcm9wZG93bnMvbW92aWUtZHJvcGRvd25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1maWx0ZXItZHJvcGRvd25zIHtcclxuICBtYXJnaW4tdG9wOiAwcHggMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgbWF0LWZvcm0tZmllbGQsXHJcbiAgLm1hdC1pbnB1dC1lbGVtZW50IG9wdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmV4dHJhU3BhY2Uge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/movie-dropdowns/movie-dropdowns.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/movie-dropdowns/movie-dropdowns.component.ts ***!
  \*********************************************************************/
/*! exports provided: MovieDropdownsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDropdownsComponent", function() { return MovieDropdownsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_home_services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/home/services/home.service */ "./src/app/home/services/home.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var MovieDropdownsComponent = /** @class */ (function () {
    function MovieDropdownsComponent(homeService) {
        this.homeService = homeService;
        this.genresList = [];
        this.languageSelected = false;
        this.genreSelected = false;
        this.genreObj = { value: '' };
        this.languageChange$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.genreChange$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.distanceChange$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.languageSelector = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.generSelector = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
    }
    MovieDropdownsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.genresList = this.homeService.getGenres();
        this.languageSelector.valueChanges.subscribe(function (value) {
            _this.languageSelected = value ? true : false;
            _this.languageChange$.emit(value);
        });
        this.generSelector.valueChanges.subscribe(function (value) {
            _this.genreSelected = value ? true : false;
            _this.genreObj.value = value;
            _this.genreObj = Object.assign({}, _this.genreObj);
            _this.genreChange$.emit(_this.genreObj);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieDropdownsComponent.prototype, "layout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieDropdownsComponent.prototype, "languageList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MovieDropdownsComponent.prototype, "languageChange$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MovieDropdownsComponent.prototype, "genreChange$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MovieDropdownsComponent.prototype, "distanceChange$", void 0);
    MovieDropdownsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-dropdowns',
            template: __webpack_require__(/*! ./movie-dropdowns.component.html */ "./src/app/shared/movie-dropdowns/movie-dropdowns.component.html"),
            styles: [__webpack_require__(/*! ./movie-dropdowns.component.scss */ "./src/app/shared/movie-dropdowns/movie-dropdowns.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_home_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
    ], MovieDropdownsComponent);
    return MovieDropdownsComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/home-filter.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/home-filter.pipe.ts ***!
  \**************************************************/
/*! exports provided: HomeFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFilterPipe", function() { return HomeFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeFilterPipe = /** @class */ (function () {
    /*
    This pipe could take list of movies as value and filter it based on
    genre or language preferences.
    */
    function HomeFilterPipe() {
    }
    HomeFilterPipe.prototype.transform = function (movieList, genreInput, languagePref) {
        if (movieList) {
            var filteredMovieList = [];
            var check = 4;
            var breaker = 1;
            // no input
            if ((genreInput.value === '' || genreInput === '') && languagePref === '' && breaker) {
                check = 1;
                breaker = 0;
            }
            else if ((genreInput.value === '' || genreInput === '') && breaker) {
                check = 2;
                breaker = 0;
            }
            else if (languagePref === '' && breaker) {
                check = 3;
                breaker = 0;
            }
            switch (check) {
                case 1:
                    return movieList;
                case 2:
                    for (var _i = 0, movieList_1 = movieList; _i < movieList_1.length; _i++) {
                        var movie = movieList_1[_i];
                        if (languagePref === movie.original_language) {
                            filteredMovieList.push(movie);
                        }
                    }
                    return filteredMovieList;
                case 3:
                    for (var _a = 0, movieList_2 = movieList; _a < movieList_2.length; _a++) {
                        var movie = movieList_2[_a];
                        if (movie.genre_ids.includes(parseInt(genreInput.value, 10)) ||
                            movie.genre_ids.includes(parseInt(genreInput, 10))) {
                            filteredMovieList.push(movie);
                        }
                    }
                    return filteredMovieList;
                case 4:
                    for (var _b = 0, movieList_3 = movieList; _b < movieList_3.length; _b++) {
                        var movie = movieList_3[_b];
                        if ((movie.genre_ids.includes(parseInt(genreInput.value, 10)) ||
                            movie.genre_ids.includes(parseInt(genreInput, 10))) &&
                            languagePref === movie.original_language) {
                            filteredMovieList.push(movie);
                        }
                    }
                    return filteredMovieList;
            }
        }
    };
    HomeFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'homeFilter'
        })
        /*
        This pipe could take list of movies as value and filter it based on
        genre or language preferences.
        */
    ], HomeFilterPipe);
    return HomeFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/sort-movie.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/sort-movie.pipe.ts ***!
  \*************************************************/
/*! exports provided: SortMoviePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortMoviePipe", function() { return SortMoviePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortMoviePipe = /** @class */ (function () {
    function SortMoviePipe() {
    }
    SortMoviePipe.prototype.transform = function (moviesList, userPref) {
        if (moviesList && moviesList.length > 0) {
            var preferedList = [];
            var remainingList = [];
            if (userPref) {
                var genres_1 = userPref.genre;
                var language = userPref.language;
                for (var _i = 0, moviesList_1 = moviesList; _i < moviesList_1.length; _i++) {
                    var movie = moviesList_1[_i];
                    if (language || (genres_1 && genres_1.length > 0)) {
                        if (language && (genres_1 && genres_1.length > 0)) {
                            if (movie.original_language === language) {
                                preferedList.push(movie);
                            }
                            else if (movie.genre_ids.some(function (genre) { return genres_1.includes(genre); })) {
                                preferedList.push(movie);
                            }
                            else {
                                remainingList.push(movie);
                            }
                        }
                        else {
                            if (language) {
                                if (movie.original_language === language) {
                                    preferedList.push(movie);
                                }
                            }
                            else if (genres_1 && genres_1.length > 0) {
                                if (movie.genre_ids.some(function (genre) { return genres_1.includes(genre); })) {
                                    preferedList.push(movie);
                                }
                            }
                            else {
                                remainingList.push(movie);
                            }
                        }
                    }
                    else {
                        remainingList.push(movie);
                    }
                }
                return preferedList.concat(remainingList);
            }
            else {
                return moviesList;
            }
        }
    };
    SortMoviePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sortMovie'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SortMoviePipe);
    return SortMoviePipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _movie_booking_movie_booking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-booking/movie-booking.component */ "./src/app/shared/movie-booking/movie-booking.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _components_modals_seat_reservation_modal_seat_reservation_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modals/seat-reservation-modal/seat-reservation-modal.component */ "./src/app/shared/components/modals/seat-reservation-modal/seat-reservation-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _movie_dropdowns_movie_dropdowns_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie-dropdowns/movie-dropdowns.component */ "./src/app/shared/movie-dropdowns/movie-dropdowns.component.ts");
/* harmony import */ var _components_modals_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modals/confirmation-modal/confirmation-modal.component */ "./src/app/shared/components/modals/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var _components_payment_booking_payment_booking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/payment-booking/payment-booking.component */ "./src/app/shared/components/payment-booking/payment-booking.component.ts");
/* harmony import */ var _pipes_sort_movie_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/sort-movie.pipe */ "./src/app/shared/pipes/sort-movie.pipe.ts");
/* harmony import */ var _pipes_home_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/home-filter.pipe */ "./src/app/shared/pipes/home-filter.pipe.ts");
/* harmony import */ var _components_modals_pre_booking_pre_booking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/modals/pre-booking/pre-booking.component */ "./src/app/shared/components/modals/pre-booking/pre-booking.component.ts");















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _movie_booking_movie_booking_component__WEBPACK_IMPORTED_MODULE_3__["MovieBookingComponent"],
                _components_modals_seat_reservation_modal_seat_reservation_modal_component__WEBPACK_IMPORTED_MODULE_7__["SeatReservationModalComponent"],
                _movie_dropdowns_movie_dropdowns_component__WEBPACK_IMPORTED_MODULE_9__["MovieDropdownsComponent"],
                _components_modals_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationModalComponent"],
                _components_payment_booking_payment_booking_component__WEBPACK_IMPORTED_MODULE_11__["PaymentBookingComponent"],
                _pipes_sort_movie_pipe__WEBPACK_IMPORTED_MODULE_12__["SortMoviePipe"],
                _pipes_home_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["HomeFilterPipe"],
                _components_modals_pre_booking_pre_booking_component__WEBPACK_IMPORTED_MODULE_14__["PreBookingComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]
            ],
            exports: [
                _movie_booking_movie_booking_component__WEBPACK_IMPORTED_MODULE_3__["MovieBookingComponent"],
                _components_modals_seat_reservation_modal_seat_reservation_modal_component__WEBPACK_IMPORTED_MODULE_7__["SeatReservationModalComponent"],
                _movie_dropdowns_movie_dropdowns_component__WEBPACK_IMPORTED_MODULE_9__["MovieDropdownsComponent"],
                _pipes_sort_movie_pipe__WEBPACK_IMPORTED_MODULE_12__["SortMoviePipe"],
                _pipes_home_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["HomeFilterPipe"],
                _components_modals_pre_booking_pre_booking_component__WEBPACK_IMPORTED_MODULE_14__["PreBookingComponent"]
            ],
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], useValue: {} }, { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"], useValue: [] }],
            entryComponents: [_components_modals_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationModalComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/ui-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/ui-service.service.ts ***!
  \**********************************************/
/*! exports provided: UiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiService", function() { return UiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var UiService = /** @class */ (function () {
    function UiService(snackBar) {
        this.snackBar = snackBar;
    }
    UiService.prototype.showMessage = function (message, action, duration) {
        this.snackBar.open(message, action, { duration: duration });
    };
    UiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], UiService);
    return UiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_KEY: 'api_key=c4f351490cb39722773a30b3347f2e0d',
    // movie API usage exapmle: https://api.themoviedb.org/3/movie/{movie_id}/changes?api_key=<<api_key>>&page=1
    JSONSERVER: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\cdrive\capstone3\bookmymovie\angular301movieproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map