(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movie-movie-module"],{

/***/ "./src/app/movie/components/movie-page/movie-description/movie-description.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/movie/components/movie-page/movie-description/movie-description.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n  <h3>{{title}}</h3>\r\n  <h6>OverView</h6>\r\n  <div class=\"description\" fxLayout=\"row wrap\">\r\n    {{overview}}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/movie/components/movie-page/movie-description/movie-description.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/movie/components/movie-page/movie-description/movie-description.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllL2NvbXBvbmVudHMvbW92aWUtcGFnZS9tb3ZpZS1kZXNjcmlwdGlvbi9tb3ZpZS1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/movie/components/movie-page/movie-description/movie-description.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/movie/components/movie-page/movie-description/movie-description.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MovieDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDescriptionComponent", function() { return MovieDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieDescriptionComponent = /** @class */ (function () {
    function MovieDescriptionComponent() {
    }
    MovieDescriptionComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieDescriptionComponent.prototype, "overview", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieDescriptionComponent.prototype, "title", void 0);
    MovieDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-description',
            template: __webpack_require__(/*! ./movie-description.component.html */ "./src/app/movie/components/movie-page/movie-description/movie-description.component.html"),
            styles: [__webpack_require__(/*! ./movie-description.component.scss */ "./src/app/movie/components/movie-page/movie-description/movie-description.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieDescriptionComponent);
    return MovieDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/movie/components/movie-page/movie-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/movie/components/movie-page/movie-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div fxLayout=\"  wrap\" class=\"firstRow\" fxLayoutGap=\"3%\" fxLayoutAlign=\"center start\">\r\n    <div class=\"imageContainer\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <img src=\"{{imagesPath}}{{movieDescription.poster_path}}\" class=\"poster\"\r\n        onerror=\"this.src='/assets/images/noImage.jpg';\" alt=\"movie description poster\">\r\n    </div>\r\n    <div fxLayout=\"column\" class=\"centerCol\">\r\n      <app-movie-description [overview]=\"movieDescription.overview\" [title]=\"movieDescription.title\">\r\n      </app-movie-description>\r\n      <h3>Social</h3>\r\n      <div fxLayout=\"row\" class=\"rating\">\r\n        <div *ngFor=\"let star of rating\">\r\n          <mat-icon *ngIf=\"star\">star_rate</mat-icon>\r\n          <mat-icon *ngIf=\"!star\">star_border</mat-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"column\" class=\"rightCol\" fxLayoutGap=\"5%\">\r\n      <iframe\r\n        src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62216.75944509767!2d77.5234913215693!3d12.936781119009453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoplan+mall!5e0!3m2!1sen!2sin!4v1544424546453\"\r\n        width=\"320px\" alt=\"google map\"></iframe>\r\n      <!-- <div fxLayout=\"row wrap\" class=\"options\" fxLayoutGap=\"10%\" fxLayoutAlign=\"center center\">\r\n        <button mat-mini-fab>\r\n          <mat-icon>star_rate</mat-icon>\r\n        </button>\r\n        <button mat-mini-fab>\r\n          <mat-icon>favorite</mat-icon>\r\n        </button>\r\n        <button mat-mini-fab>\r\n          <mat-icon>bookmark_border</mat-icon>\r\n        </button>\r\n      </div> -->\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n        <app-movie-booking>\r\n          <div class=\"theater-picker\">\r\n            <mat-form-field class=\"datePicker\">\r\n              <input matInput [matDatepicker]=\"picker1\" placeholder=\"Select Date\" [min]=\"minDate\" [formControl]=\"date\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker1></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"select-theater\">\r\n              <mat-select required [formControl]=\"selectTheater\">\r\n                <mat-option *ngFor=\"let theater of theaterList\" [value]=\"theater\">\r\n                  {{theater.name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div fxLayout=\"row wrap\" *ngIf=\"theaterList && theaterList.length !== 0\" fxLayoutAlign=\"center center\"\r\n              fxLayoutGap=\"3%\">\r\n\r\n              <!-- <button mat-button *ngFor=\"let time of selectedTheater.shows \">{{time}}</button> -->\r\n              <button mat-raised-button color=\"primary\" (click)=\"checKToDialog()\" style=\"color: white\"\r\n                [disabled]=\"isInvalid()\">\r\n                {{ category === 'nowPlaying' ? 'BOOK' : 'PRE-BOOK' }}</button>\r\n            </div>\r\n          </div>\r\n        </app-movie-booking>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"secondRow\" fxLayout=\"column wrap\" fxLayoutAlign=\"center center\">\r\n      <h3>Featured Cast & Crew</h3>\r\n      <div class=\"people\" fxLayout=\"row wrap\" fxLayoutGap=\"3%\" fxLayoutAlign=\"center center\">\r\n        <div *ngFor=\"let cast of movieDescription.casts | slice:0:2;trackBy:trackCastandCrew\">\r\n          <mat-card>\r\n            <img src=\"{{castCrew}}{{cast.profile_path}}\" title=\"{{cast.name}} / {{cast.job}}\"\r\n              onerror=\"this.src='/assets/images/noImage.jpg'\" alt=\"cast profile photo\">\r\n            <mat-card-content>\r\n              <p>\r\n                {{cast.name}}\r\n              </p>\r\n              <p>\r\n                {{cast.character}}\r\n              </p>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n        <div *ngFor=\"let crew of movieDescription.crews | slice:0:2;trackBy:trackCastandCrew\">\r\n          <mat-card>\r\n            <img src=\"{{castCrew}}{{crew.profile_path}}\" title=\"{{crew.name}} / {{crew.job}}\"\r\n              onerror=\"this.src='/assets/images/noImage.jpg'\" alt=\"crew profile photo\">\r\n            <mat-card-content>\r\n              <p>\r\n                {{crew.name}}\r\n              </p>\r\n              <p class=\"role\">\r\n                {{crew.department}}\r\n              </p>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"secondRow\" fxLayout=\"column wrap\" fxLayoutAlign=\"center center\">\r\n      <h3>Cast</h3>\r\n      <div class=\"people\" fxLayout=\"row wrap\" fxLayoutGap=\"1%\" fxLayoutAlign=\"center center\">\r\n        <div *ngFor=\"let cast of movieDescription.casts;trackBy:trackCastandCrew\">\r\n          <mat-card>\r\n            <img src=\"{{castCrew}}{{cast.profile_path}}\" title=\"{{cast.name}} / {{cast.job}}\"\r\n              onerror=\"this.src='/assets/images/noImage.jpg'\" alt=\"cast profile photo\">\r\n            <mat-card-content>\r\n              <p>\r\n                {{cast.name}}\r\n              </p>\r\n              <p>\r\n                {{cast.character}}\r\n              </p>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"thirdRow\" fxLayout=\"column wrap\" fxLayoutAlign=\"center center\">\r\n      <h3>Crew</h3>\r\n      <div class=\"people\" fxLayout=\"row wrap\" fxLayoutGap=\"1%\" fxLayoutAlign=\"center center\">\r\n        <div *ngFor=\"let crew of movieDescription.crews ;trackBy:trackCastandCrew\">\r\n          <mat-card>\r\n            <img src=\"{{castCrew}}{{crew.profile_path}}\" title=\"{{crew.name}} / {{crew.job}}\"\r\n              onerror=\"this.src='/assets/images/noImage.jpg'\" alt=\"crew profile photo\">\r\n            <mat-card-content>\r\n              <p>\r\n                {{crew.name}}\r\n              </p>\r\n              <p>\r\n                {{crew.department}}\r\n              </p>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/movie/components/movie-page/movie-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/movie/components/movie-page/movie-page.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".firstRow {\n  align-self: center;\n  flex-wrap: wrap;\n  align-content: center; }\n\n.container {\n  width: 100%;\n  height: 100vh;\n  margin: 20px 20px 20px 0px;\n  align-content: center;\n  justify-content: center;\n  overflow-y: scroll; }\n\n.poster {\n  height: 300px;\n  width: 180px; }\n\n.centerCol {\n  height: 100%;\n  width: 50%;\n  flex-wrap: wrap;\n  align-content: center; }\n\n.rating {\n  color: gold; }\n\n.secondRow {\n  align-self: center;\n  height: 20%;\n  width: 90%; }\n\n.thirdRow {\n  margin-bottom: 10%;\n  align-self: center;\n  height: 40%;\n  width: 90%; }\n\n.mat-card {\n  max-width: 180px;\n  width: 180px;\n  margin: 10px 0px; }\n\n.mat-card img {\n  width: 182px;\n  height: 150px; }\n\n.people {\n  width: 100%; }\n\n.theater-picker {\n  flex-direction: row; }\n\n.theater-picker .datePicker {\n    width: 150px;\n    padding-right: 20px;\n    min-width: 150px; }\n\n.theater-picker .select-theater {\n    width: 150px;\n    min-width: 150px; }\n\n.role {\n  word-wrap: break-word; }\n\n.toggleGroup {\n  height: 30px;\n  align-items: center; }\n\n:host /deep/ .mat-select-value {\n  color: white; }\n\n:host /deep/ .mat-datepicker-toggle-default-icon {\n  color: #3892ce; }\n\n:host /deep/ .mat-select-arrow {\n  color: #3892ce; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUvY29tcG9uZW50cy9tb3ZpZS1wYWdlL0M6XFxjZHJpdmVcXGNhcHN0b25lM1xcYm9va215bW92aWVcXGFuZ3VsYXIzMDFtb3ZpZXByb2plY3Qvc3JjXFxhcHBcXG1vdmllXFxjb21wb25lbnRzXFxtb3ZpZS1wYWdlXFxtb3ZpZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2Ysc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGNBQWE7RUFDYiwyQkFBMEI7RUFDMUIsc0JBQXFCO0VBQ3JCLHdCQUF1QjtFQUN2QixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsYUFBWSxFQUNiOztBQUVEO0VBQ0UsYUFBWTtFQUNaLFdBQVU7RUFDVixnQkFBZTtFQUNmLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFNRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsV0FBVSxFQUNYOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsV0FBVSxFQUNYOztBQUtEO0VBQ0UsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFFSSxhQUFZO0VBQ1osY0FBYSxFQUNkOztBQUdIO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0Usb0JBQW1CLEVBWXBCOztBQWJEO0lBSUksYUFBWTtJQUNaLG9CQUFtQjtJQUNuQixpQkFBZ0IsRUFDakI7O0FBUEg7SUFVSSxhQUFZO0lBQ1osaUJBQWdCLEVBQ2pCOztBQUdIO0VBQ0Usc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL21vdmllL2NvbXBvbmVudHMvbW92aWUtcGFnZS9tb3ZpZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0Um93IHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDBweDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ucG9zdGVyIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAxODBweDtcclxufVxyXG5cclxuLmNlbnRlckNvbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnJhdGluZyB7XHJcbiAgY29sb3I6IGdvbGQ7XHJcbn1cclxuXHJcbi8vIC5pbWFnZUNvbnRhaW5lcntcclxuLy8gICAgIHdpZHRoOiAyMCU7XHJcbi8vICAgICBoZWlnaHQ6IDYwJTtcclxuLy8gfVxyXG4uc2Vjb25kUm93IHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLnRoaXJkUm93IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi8vIC5tYXQtY2FyZC1jb250ZW50PjpmaXJzdC1jaGlsZCwgLm1hdC1jYXJkPjpmaXJzdC1jaGlsZHtcclxuLy8gICAgIGNvbG9yOiByZWQ7XHJcbi8vIH1cclxuLm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTgycHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBlb3BsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aGVhdGVyLXBpY2tlciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgLmRhdGVQaWNrZXIge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0LXRoZWF0ZXIge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5yb2xlIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi50b2dnbGVHcm91cCB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1kZWZhdWx0LWljb24ge1xyXG4gIGNvbG9yOiAjMzg5MmNlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gIGNvbG9yOiAjMzg5MmNlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/movie/components/movie-page/movie-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/movie/components/movie-page/movie-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: MoviePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviePageComponent", function() { return MoviePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_components_modals_seat_reservation_modal_seat_reservation_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/modals/seat-reservation-modal/seat-reservation-modal.component */ "./src/app/shared/components/modals/seat-reservation-modal/seat-reservation-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/config */ "./src/app/shared/config.ts");
/* harmony import */ var _shared_components_modals_pre_booking_pre_booking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/modals/pre-booking/pre-booking.component */ "./src/app/shared/components/modals/pre-booking/pre-booking.component.ts");







var MoviePageComponent = /** @class */ (function () {
    function MoviePageComponent(dialog) {
        this.dialog = dialog;
        this.imagesPath = _shared_config__WEBPACK_IMPORTED_MODULE_5__["TMDB_URLS"].IMAGE_URL;
        this.castCrew = _shared_config__WEBPACK_IMPORTED_MODULE_5__["TMDB_URLS"].CAST_CREW_BIG;
        this.minDate = new Date();
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.minDate);
        this.rating = new Array(5);
        for (var i = 0; i <= 4; i++) {
            this.rating[i] = i <= 3 ? true : false;
        }
        this.selectTheater = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    MoviePageComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    MoviePageComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.selectTheater = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.selectTheater.setValue(this.theaterList[0]);
        this.selectedTheater = this.theaterList[0];
        this.selectTheater.valueChanges.subscribe(function (selectedTheater) {
            _this.selectedTheater = selectedTheater;
        });
        this.date.valueChanges.subscribe(function (value) {
            _this.selectedDate = value.toJSON();
        });
        console.log(this.movieDescription);
    };
    MoviePageComponent.prototype.checKToDialog = function () {
        this.category === 'nowPlaying' ? this.openDialog() : this.preBookDialog();
    };
    MoviePageComponent.prototype.preBookDialog = function () {
        var dialogRef = this.dialog.open(_shared_components_modals_pre_booking_pre_booking_component__WEBPACK_IMPORTED_MODULE_6__["PreBookingComponent"], {
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function () { });
    };
    MoviePageComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_shared_components_modals_seat_reservation_modal_seat_reservation_modal_component__WEBPACK_IMPORTED_MODULE_3__["SeatReservationModalComponent"], {
            width: sessionStorage.getItem('authDetails') ? window.innerWidth + 'px' : 'auto',
            height: sessionStorage.getItem('authDetails') ? '599px' : 'auto',
            data: 'test'
        });
        var bookingInstance = dialogRef.componentInstance;
        bookingInstance.movieTitle = this.movieDescription.title;
        bookingInstance.screen = this.selectedTheater.name;
        bookingInstance.time = this.selectedTime;
        bookingInstance.movieList = this.movieDescription;
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log(`Dialog closed: ${result}`);
            // this.dialogResult = result;
        });
    };
    MoviePageComponent.prototype.onValChange = function (val) {
        this.selectedTime = val;
    };
    MoviePageComponent.prototype.isInvalid = function () {
        if (this.selectedTheater && this.selectedTheater.name) {
            return false;
        }
        return true;
    };
    MoviePageComponent.prototype.trackCastandCrew = function (index, cast) {
        if (cast) {
            return cast.id;
        }
        else {
            return -1;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoviePageComponent.prototype, "movieDescription", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoviePageComponent.prototype, "theaterList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoviePageComponent.prototype, "category", void 0);
    MoviePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-page',
            template: __webpack_require__(/*! ./movie-page.component.html */ "./src/app/movie/components/movie-page/movie-page.component.html"),
            styles: [__webpack_require__(/*! ./movie-page.component.scss */ "./src/app/movie/components/movie-page/movie-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], MoviePageComponent);
    return MoviePageComponent;
}());



/***/ }),

/***/ "./src/app/movie/components/movie-page/social-feeds/social-feeds.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/movie/components/movie-page/social-feeds/social-feeds.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  social-feeds works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/movie/components/movie-page/social-feeds/social-feeds.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/movie/components/movie-page/social-feeds/social-feeds.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllL2NvbXBvbmVudHMvbW92aWUtcGFnZS9zb2NpYWwtZmVlZHMvc29jaWFsLWZlZWRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/movie/components/movie-page/social-feeds/social-feeds.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/movie/components/movie-page/social-feeds/social-feeds.component.ts ***!
  \************************************************************************************/
/*! exports provided: SocialFeedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialFeedsComponent", function() { return SocialFeedsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SocialFeedsComponent = /** @class */ (function () {
    function SocialFeedsComponent() {
    }
    SocialFeedsComponent.prototype.ngOnInit = function () {
    };
    SocialFeedsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-social-feeds',
            template: __webpack_require__(/*! ./social-feeds.component.html */ "./src/app/movie/components/movie-page/social-feeds/social-feeds.component.html"),
            styles: [__webpack_require__(/*! ./social-feeds.component.scss */ "./src/app/movie/components/movie-page/social-feeds/social-feeds.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocialFeedsComponent);
    return SocialFeedsComponent;
}());



/***/ }),

/***/ "./src/app/movie/containers/movie/movie.component.html":
/*!*************************************************************!*\
  !*** ./src/app/movie/containers/movie/movie.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-movie-page [movieDescription]=\"movieData\" [theaterList]=\"theaterList\" [category]=\"category\"></app-movie-page>\r\n"

/***/ }),

/***/ "./src/app/movie/containers/movie/movie.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/movie/containers/movie/movie.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllL2NvbnRhaW5lcnMvbW92aWUvbW92aWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/movie/containers/movie/movie.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/movie/containers/movie/movie.component.ts ***!
  \***********************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers/index */ "./src/app/reducers/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/movie.service */ "./src/app/movie/services/movie.service.ts");






var MovieComponent = /** @class */ (function () {
    function MovieComponent(store, route, movieService) {
        this.store = store;
        this.route = route;
        this.movieService = movieService;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = parseInt(params.id, 10);
            _this.category = params.category;
        });
        this.defaultData = {
            id: this.id,
            title: 'Waiting for content',
            overview: 'Waiting for content'
        };
        if (this.category === 'nowPlaying') {
            this.store.select(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["nowPlayingMoviesSelector"]).subscribe(function (result) {
                _this.movieDetails = result.find(function (movie) { return movie.id === _this.id; });
            });
        }
        else if (this.category === 'upComing') {
            this.store.select(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["upcomingMovieSelector"]).subscribe(function (result) {
                _this.movieDetails = result.find(function (movie) { return movie.id === _this.id; });
            });
        }
        this.store.select(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["theaterList"]).subscribe(function (result) {
            _this.theaterList = Object.values(result);
        });
    };
    MovieComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (!this.movieDetails) {
            this.movieData = this.defaultData;
            this.movieService.getMovie(this.id).subscribe(function (value) {
                _this.movieData.title = value.title;
                _this.movieData.overview = value.overview;
                _this.movieData.poster_path = value.poster_path;
            });
            this.movieService.getCastAndCrew(this.id).subscribe(function (res) {
                console.log(res);
                _this.movieData.casts = res['cast'].splice(0, 5);
                _this.movieData.crews = res['crew'].splice(0, 5);
            });
        }
        else {
            this.movieData = this.movieDetails;
        }
    };
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/movie/containers/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.scss */ "./src/app/movie/containers/movie/movie.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_movie_service__WEBPACK_IMPORTED_MODULE_5__["MovieService"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/movie/movie-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/movie/movie-routing.module.ts ***!
  \***********************************************/
/*! exports provided: MovieRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieRoutingModule", function() { return MovieRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_movie_movie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/movie/movie.component */ "./src/app/movie/containers/movie/movie.component.ts");




var routes = [
    {
        path: ':category/:id',
        component: _containers_movie_movie_component__WEBPACK_IMPORTED_MODULE_3__["MovieComponent"]
    }
];
var MovieRoutingModule = /** @class */ (function () {
    function MovieRoutingModule() {
    }
    MovieRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MovieRoutingModule);
    return MovieRoutingModule;
}());



/***/ }),

/***/ "./src/app/movie/movie.module.ts":
/*!***************************************!*\
  !*** ./src/app/movie/movie.module.ts ***!
  \***************************************/
/*! exports provided: MovieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModule", function() { return MovieModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_movie_page_movie_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/movie-page/movie-page.component */ "./src/app/movie/components/movie-page/movie-page.component.ts");
/* harmony import */ var _containers_movie_movie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/movie/movie.component */ "./src/app/movie/containers/movie/movie.component.ts");
/* harmony import */ var _movie_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie-routing.module */ "./src/app/movie/movie-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_movie_page_social_feeds_social_feeds_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/movie-page/social-feeds/social-feeds.component */ "./src/app/movie/components/movie-page/social-feeds/social-feeds.component.ts");
/* harmony import */ var _components_movie_page_movie_description_movie_description_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/movie-page/movie-description/movie-description.component */ "./src/app/movie/components/movie-page/movie-description/movie-description.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_components_modals_seat_reservation_modal_seat_reservation_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/components/modals/seat-reservation-modal/seat-reservation-modal.component */ "./src/app/shared/components/modals/seat-reservation-modal/seat-reservation-modal.component.ts");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/movie.service */ "./src/app/movie/services/movie.service.ts");
/* harmony import */ var _shared_components_modals_pre_booking_pre_booking_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/components/modals/pre-booking/pre-booking.component */ "./src/app/shared/components/modals/pre-booking/pre-booking.component.ts");
















var MovieModule = /** @class */ (function () {
    function MovieModule() {
    }
    MovieModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_movie_page_movie_page_component__WEBPACK_IMPORTED_MODULE_6__["MoviePageComponent"], _containers_movie_movie_component__WEBPACK_IMPORTED_MODULE_7__["MovieComponent"], _components_movie_page_social_feeds_social_feeds_component__WEBPACK_IMPORTED_MODULE_10__["SocialFeedsComponent"], _components_movie_page_movie_description_movie_description_component__WEBPACK_IMPORTED_MODULE_11__["MovieDescriptionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _movie_routing_module__WEBPACK_IMPORTED_MODULE_8__["MovieRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]],
            entryComponents: [_shared_components_modals_seat_reservation_modal_seat_reservation_modal_component__WEBPACK_IMPORTED_MODULE_13__["SeatReservationModalComponent"], _shared_components_modals_pre_booking_pre_booking_component__WEBPACK_IMPORTED_MODULE_15__["PreBookingComponent"]],
            providers: [_services_movie_service__WEBPACK_IMPORTED_MODULE_14__["MovieService"]]
        })
    ], MovieModule);
    return MovieModule;
}());



/***/ }),

/***/ "./src/app/movie/services/movie.service.ts":
/*!*************************************************!*\
  !*** ./src/app/movie/services/movie.service.ts ***!
  \*************************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/config */ "./src/app/shared/config.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.MOVIE_URL = _shared_config__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"].TMDB_API + _shared_config__WEBPACK_IMPORTED_MODULE_3__["TMDB_URLS"].GET_CREDITS;
    }
    MovieService.prototype.getMovie = function (id) {
        return this.http.get(this.MOVIE_URL + id + '?' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY);
    };
    MovieService.prototype.getCastAndCrew = function (id) {
        var getCreditsUrl = _shared_config__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"].TMDB_API + _shared_config__WEBPACK_IMPORTED_MODULE_3__["TMDB_URLS"].GET_CREDITS + id + '/credits?' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY;
        return this.http.get(getCreditsUrl);
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ })

}]);
//# sourceMappingURL=movie-movie-module.js.map