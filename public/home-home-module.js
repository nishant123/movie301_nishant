(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/components/home-page/home-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/home/components/home-page/home-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"3%\">\r\n  <div class=\"dropDowns\">\r\n    <app-movie-dropdowns [languageList]=\"languageList\" (languageChange$)=\"getLanguage($event)\"\r\n      (genreChange$)=\"getGenre($event)\" [layout]=\" 'row' \" fxHide.xs=\"true\"></app-movie-dropdowns>\r\n    <button mat-button [matMenuTriggerFor]=\"filter\" fxHide.xs=\"false\" fxHide.gt-xs=\"true\" class=\"filter\" name=\"filter\">\r\n      <mat-icon>filter_list</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div>\r\n    <mat-tab-group (selectedIndexChange)=\"tabChanged($event)\" class=\"tabsGroup\">\r\n      <mat-tab label=\"Now Showing\">\r\n        <ng-template matTabContent class=\"movieList\">\r\n\r\n          <div class=\"cards-container\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-evenly center\" fxLayoutGap=\"2%\">\r\n            <ng-container *ngFor=\"let movie of upcomingList\">\r\n              <app-movie-card class=\" seach-movies-cards\" [movie]=\"movie\" [theaterList]=\"theaterList\"\r\n                [category]=\"'nowPlaying'\">\r\n              </app-movie-card>\r\n            </ng-container>\r\n          </div>\r\n\r\n        </ng-template>\r\n      </mat-tab>\r\n      <mat-tab label=\"Next Change\" class=\"labelFont\">\r\n        <ng-template matTabContent>\r\n\r\n          <div class=\"cards-container\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-evenly center\">\r\n            <ng-container *ngFor=\"let movie of moviesList\">\r\n              <app-movie-card class=\"seach-movies-cards\" [movie]=\"movie\" [theaterList]=\"theaterList\"\r\n                [category]=\"'upComing'\"></app-movie-card>\r\n            </ng-container>\r\n          </div>\r\n\r\n        </ng-template>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n\r\n<mat-menu #filter=\"matMenu\" xPosition=\"before\">\r\n  <app-movie-dropdowns [languageList]=\"languageList\" (languageChange$)=\"getLanguage($event)\"\r\n    (genreChange$)=\"getGenre($event)\" [layout]=\" 'column' \"></app-movie-dropdowns>\r\n</mat-menu>"

/***/ }),

/***/ "./src/app/home/components/home-page/home-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/home/components/home-page/home-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-container {\n  margin-top: 25px;\n  justify-content: space-around;\n  align-items: space-evenly; }\n\n.seach-movies-cards {\n  margin-bottom: 20px; }\n\n.virtualScrollContainer {\n  height: 100vh; }\n\n.mat-tab-label-active {\n  color: #f1f6f8; }\n\n.mat-tab-label-inactive {\n  color: #f8f1f1; }\n\n.dropDowns {\n  background-color: #3892ce;\n  height: 30px;\n  width: 100%;\n  position: fixed; }\n\n.tabsGroup {\n  margin-top: 35px; }\n\n.mat-tab-label,\n.mat-tab-link {\n  color: #fff; }\n\napp-movie-dropdowns {\n  width: 60%; }\n\n.filterMenu {\n  margin-top: 10px; }\n\n.mat-menu-content:not(:empty) {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  background-color: #303030; }\n\n.userOptions {\n  color: white; }\n\n.mat-menu-item {\n  color: white; }\n\n.filter {\n  margin-left: 80%;\n  background-color: #303030; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2hvbWUtcGFnZS9DOlxcY2RyaXZlXFxjYXBzdG9uZTNcXGJvb2tteW1vdmllXFxhbmd1bGFyMzAxbW92aWVwcm9qZWN0L3NyY1xcYXBwXFxob21lXFxjb21wb25lbnRzXFxob21lLXBhZ2VcXGhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFnQjtFQUNoQiw4QkFBNkI7RUFDN0IsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsZUFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxlQUF5QixFQUMxQjs7QUFFRDtFQUNFLDBCQUFtQztFQUNuQyxhQUFZO0VBQ1osWUFBVztFQUNYLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEOztFQUVFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLFdBQVUsRUFDWDs7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsMEJBQWlDLEVBQ2xDOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLDBCQUFpQyxFQUNsQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4uc2VhY2gtbW92aWVzLWNhcmRzIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udmlydHVhbFNjcm9sbENvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICBjb2xvcjogcmdiKDI0MSwgMjQ2LCAyNDgpO1xyXG59XHJcblxyXG4ubWF0LXRhYi1sYWJlbC1pbmFjdGl2ZSB7XHJcbiAgY29sb3I6IHJnYigyNDgsIDI0MSwgMjQxKTtcclxufVxyXG5cclxuLmRyb3BEb3ducyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCAxNDYsIDIwNik7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLnRhYnNHcm91cCB7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxufVxyXG5cclxuLm1hdC10YWItbGFiZWwsXHJcbi5tYXQtdGFiLWxpbmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5hcHAtbW92aWUtZHJvcGRvd25zIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4uZmlsdGVyTWVudSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1hdC1tZW51LWNvbnRlbnQ6bm90KDplbXB0eSkge1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ4LCA0OCk7XHJcbn1cclxuXHJcbi51c2VyT3B0aW9ucyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWF0LW1lbnUtaXRlbSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICBtYXJnaW4tbGVmdDogODAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDgsIDQ4KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/components/home-page/home-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/components/home-page/home-page.component.ts ***!
  \******************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home.service */ "./src/app/home/services/home.service.ts");



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(homeService) {
        this.homeService = homeService;
        this.getNewNowPlayingMovies = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getNewUpcomingMovies = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeTabIndex = 0;
        this.nowPlayingMovieFetchedPageNum = 1;
        this.upcomingMoviesFetchedPageNum = 0;
        this.selectedLanguage = '';
        this.selectedGenre = '';
        this.languageList = [{ id: 'en', name: 'English' }, { id: 'ja', name: 'Japanese' }, { id: 'zh', name: 'Chinese' }];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.getNewNowPlayingMovies.emit(1);
        this.getNewUpcomingMovies.emit(1);
    };
    HomePageComponent.prototype.trackMovie = function (index, movie) {
        if (movie) {
            return movie.id;
        }
        else {
            return -1;
        }
    };
    HomePageComponent.prototype.getMovies = function () { };
    HomePageComponent.prototype.tabChanged = function (event) {
        this.activeTabIndex = event;
    };
    HomePageComponent.prototype.getLanguage = function (lang) {
        this.selectedLanguage = lang;
    };
    HomePageComponent.prototype.getGenre = function (g) {
        this.selectedGenre = g;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomePageComponent.prototype, "moviesList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomePageComponent.prototype, "upcomingList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomePageComponent.prototype, "theaterList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomePageComponent.prototype, "userPreference", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], HomePageComponent.prototype, "getNewNowPlayingMovies", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], HomePageComponent.prototype, "getNewUpcomingMovies", void 0);
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home/components/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home/components/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/home/components/home-page/movie-card/movie-card.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/components/home-page/movie-card/movie-card.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"movieCard\">\r\n  <span>\r\n    <div mat-card-avatar class=\"example-header-image\" title=\"IMDB rating\">\r\n      <h4 class=\"rating\">{{ movie.vote_average * 10 }}%</h4>\r\n    </div>\r\n    <img mat-card-image src=\"{{ imagesPath }}{{ movie.poster_path }}\" onerror=\"this.src='/assets/images/noImage.jpg';\"\r\n      alt=\"poster image\" />\r\n  </span>\r\n  <mat-card-header class=\"header\">\r\n    <mat-card-title>\r\n      <div class=\"hideOverflowText\" title=\"{{ movie.title }}\">{{ movie.title }}</div>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"credits\">\r\n      <ng-container *ngFor=\"let cast of (movie.casts | slice: 1:5); trackBy: trackCastandCrew\">\r\n        <span>\r\n          <img src=\"{{ castCrewPath }}{{ cast.profile_path }}\" class=\"castImage\"\r\n            title=\"{{ cast.name }} / {{ cast.character }}\" onerror=\"this.src='/assets/download.png'\"\r\n            alt=\"cast profile photo\" />\r\n        </span>\r\n      </ng-container>\r\n      <ng-container *ngFor=\"let crew of (movie.crews | slice: 1:5); trackBy: trackCastandCrew\">\r\n        <span>\r\n          <img src=\"{{ castCrewPath }}{{ crew.profile_path }}\" class=\"castImage\"\r\n            title=\"{{ crew.name }} / {{ crew.job }}\" onerror=\"this.src='/assets/download.png'\"\r\n            alt=\"crew profile photo\" />\r\n        </span>\r\n      </ng-container>\r\n    </div>\r\n    <hr />\r\n    <app-movie-booking>\r\n      <div class=\"theater-picker\">\r\n        <mat-form-field class=\"dateContainer\">\r\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"Select Date\" [min]=\"minDate\" [formControl]=\"date\" />\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker1></mat-datepicker>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"theaterList\">\r\n          <mat-select required [formControl]=\"selectTheater\">\r\n            <mat-option *ngFor=\"let theater of theaterList\" [value]=\"theater\"> {{ theater.name }} </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n    </app-movie-booking>\r\n  </mat-card-content>\r\n  <mat-card-actions class=\"card-bookbutton-div\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"checKToDialog()\" [disabled]=\"isInvalid()\">\r\n      {{ category === 'nowPlaying' ? 'BOOK' : 'PRE-BOOK' }}\r\n    </button>\r\n    <a mat-button class=\"forwardlink\" [routerLink]=\"['/movie', category, movie.id]\"\r\n      routerLinkActive=\"router-link-active\" name=\"movieDescriptionLink\">\r\n      <mat-icon>arrow_forward</mat-icon>\r\n    </a>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/home/components/home-page/movie-card/movie-card.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/home/components/home-page/movie-card/movie-card.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movieCard {\n  max-width: 270px;\n  max-height: 560px;\n  background-color: white;\n  color: black;\n  border-radius: 12px; }\n\n.goldColor {\n  color: goldenrod; }\n\n.header {\n  display: inline;\n  margin: 0px; }\n\n.dist {\n  float: right;\n  font-size: small;\n  font-weight: 200;\n  color: gray; }\n\n.castImage {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  margin-left: 8%; }\n\n.marginLeft5px {\n  margin-left: 5px; }\n\n.bookHeading {\n  margin-top: 7px;\n  margin-bottom: 7px; }\n\n.forwardlink {\n  float: right; }\n\n.card-time a {\n  border: none; }\n\n.card-time {\n  color: #bdbdbd; }\n\n.mat-card-header .mat-card-title {\n  font-size: 16px;\n  margin-bottom: 6px; }\n\n.mat-card-actions,\n.mat-card-content,\n.mat-card-subtitle {\n  margin-bottom: 6px; }\n\n.mat-card-image {\n  margin-bottom: 0px; }\n\n.mat-card-content,\n.mat-card-subtitle {\n  font-size: 11px; }\n\n.mat-card-image {\n  height: 300px; }\n\n.dateContainer {\n  width: 30%; }\n\n.selectContainer {\n  width: 100%; }\n\nimg.mat-card-image {\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  margin-top: -16px; }\n\n.theaterList {\n  width: 60%;\n  margin-left: 10%; }\n\n.card-bookbutton-div {\n  padding: 0; }\n\n.hideOverflowText {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.credits {\n  width: 300px;\n  height: 90px;\n  overflow: auto; }\n\n.toggleGroup {\n  height: 30px;\n  align-items: center; }\n\n.example-margin {\n  margin: 0 10px; }\n\n.rating {\n  margin-left: 5px;\n  margin-top: 10px; }\n\n.example-header-image {\n  position: absolute;\n  background-color: #3892ce;\n  margin-left: 230px;\n  border: 2px solid white;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2hvbWUtcGFnZS9tb3ZpZS1jYXJkL0M6XFxjZHJpdmVcXGNhcHN0b25lM1xcYm9va215bW92aWVcXGFuZ3VsYXIzMDFtb3ZpZXByb2plY3Qvc3JjXFxhcHBcXGhvbWVcXGNvbXBvbmVudHNcXGhvbWUtcGFnZVxcbW92aWUtY2FyZFxcbW92aWUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsd0JBQXVCO0VBQ3ZCLGFBQVk7RUFDWixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLG1CQUFrQixFQUNuQjs7QUFFRDs7O0VBR0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEOztFQUVFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsNkJBQTRCO0VBQzVCLDRCQUEyQjtFQUMzQixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2QixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osYUFBWTtFQUNaLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGFBQVk7RUFDWixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLDBCQUFtQztFQUNuQyxtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9ob21lLXBhZ2UvbW92aWUtY2FyZC9tb3ZpZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllQ2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAyNzBweDtcclxuICBtYXgtaGVpZ2h0OiA1NjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLmdvbGRDb2xvciB7XHJcbiAgY29sb3I6IGdvbGRlbnJvZDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uZGlzdCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmNhc3RJbWFnZSB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogOCU7XHJcbn1cclxuXHJcbi5tYXJnaW5MZWZ0NXB4IHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uYm9va0hlYWRpbmcge1xyXG4gIG1hcmdpbi10b3A6IDdweDtcclxuICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbi5mb3J3YXJkbGluayB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2FyZC10aW1lIGEge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNhcmQtdGltZSB7XHJcbiAgY29sb3I6ICNiZGJkYmQ7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtYWN0aW9ucyxcclxuLm1hdC1jYXJkLWNvbnRlbnQsXHJcbi5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaW1hZ2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnQsXHJcbi5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaW1hZ2Uge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5kYXRlQ29udGFpbmVyIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uc2VsZWN0Q29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW1nLm1hdC1jYXJkLWltYWdlIHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tdG9wOiAtMTZweDtcclxufVxyXG5cclxuLnRoZWF0ZXJMaXN0IHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5jYXJkLWJvb2tidXR0b24tZGl2IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaGlkZU92ZXJmbG93VGV4dCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uY3JlZGl0cyB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnRvZ2dsZUdyb3VwIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtbWFyZ2luIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLnJhdGluZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDE0NiwgMjA2KTtcclxuICBtYXJnaW4tbGVmdDogMjMwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/components/home-page/movie-card/movie-card.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/components/home-page/movie-card/movie-card.component.ts ***!
  \******************************************************************************/
/*! exports provided: MovieCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCardComponent", function() { return MovieCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_components_modals_seat_reservation_modal_seat_reservation_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/modals/seat-reservation-modal/seat-reservation-modal.component */ "./src/app/shared/components/modals/seat-reservation-modal/seat-reservation-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/config */ "./src/app/shared/config.ts");
/* harmony import */ var _shared_components_modals_pre_booking_pre_booking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/modals/pre-booking/pre-booking.component */ "./src/app/shared/components/modals/pre-booking/pre-booking.component.ts");



// tslint:disable-next-line:max-line-length




var MovieCardComponent = /** @class */ (function () {
    function MovieCardComponent(dialog) {
        this.dialog = dialog;
        this.imagesPath = _shared_config__WEBPACK_IMPORTED_MODULE_5__["TMDB_URLS"].IMAGE_URL;
        this.castCrewPath = _shared_config__WEBPACK_IMPORTED_MODULE_5__["TMDB_URLS"].CAST_CREW_SMALL;
        this.movieName = 'Robot 2.O';
        this.rating = 4.7;
        this.totalReviews = 51;
        this.minDate = new Date();
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.minDate);
    }
    MovieCardComponent.prototype.ngOnInit = function () { };
    MovieCardComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.selectTheater = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.selectTheater.setValue(this.theaterList[0]);
        this.selectedTheater = this.theaterList[0];
        this.selectTheater.valueChanges.subscribe(function (selectedTheater) {
            _this.selectedTheater = selectedTheater;
        });
    };
    MovieCardComponent.prototype.onValChange = function (val) {
        this.selectedTime = val;
    };
    MovieCardComponent.prototype.isInvalid = function () {
        if (this.selectedTheater && this.selectedTheater.name) {
            return false;
        }
        return true;
    };
    MovieCardComponent.prototype.checKToDialog = function () {
        this.category === 'nowPlaying' ? this.openDialog() : this.preBookDialog();
    };
    MovieCardComponent.prototype.preBookDialog = function () {
        var dialogRef = this.dialog.open(_shared_components_modals_pre_booking_pre_booking_component__WEBPACK_IMPORTED_MODULE_6__["PreBookingComponent"], {
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function () { });
    };
    MovieCardComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_shared_components_modals_seat_reservation_modal_seat_reservation_modal_component__WEBPACK_IMPORTED_MODULE_3__["SeatReservationModalComponent"], {
            width: sessionStorage.getItem('authDetails') ? window.innerWidth + 'px' : 'auto',
            height: sessionStorage.getItem('authDetails') ? '599px' : 'auto',
            data: { category: this.category },
            disableClose: true
        });
        var bookingInstance = dialogRef.componentInstance;
        if (this.movie !== undefined) {
            bookingInstance.movieTitle = this.movie.title;
            bookingInstance.movieList = this.movie;
        }
        bookingInstance.screen = this.selectedTheater && this.selectedTheater.name;
        bookingInstance.time = this.selectedTime;
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log(`Dialog closed: ${result}`);
            //  this.dialogResult = result;
        });
    };
    MovieCardComponent.prototype.trackCastandCrew = function (index, cast) {
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
    ], MovieCardComponent.prototype, "movie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieCardComponent.prototype, "theaterList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieCardComponent.prototype, "category", void 0);
    MovieCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-card',
            template: __webpack_require__(/*! ./movie-card.component.html */ "./src/app/home/components/home-page/movie-card/movie-card.component.html"),
            styles: [__webpack_require__(/*! ./movie-card.component.scss */ "./src/app/home/components/home-page/movie-card/movie-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], MovieCardComponent);
    return MovieCardComponent;
}());



/***/ }),

/***/ "./src/app/home/containers/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/home/containers/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home-page [moviesList]=\"nowPlayingMoviesList\" [upcomingList]=\"upcomingMoviesList\" [theaterList]=\"theaterList\"\r\n  [userPreference]=\"userPreference\" (getNewNowPlayingMovies)=\"getNewSetofNowPlayingMovies($event)\"\r\n  (getNewUpcomingMovies)=\"getNewSetofComingMovies($event)\"></app-home-page>"

/***/ }),

/***/ "./src/app/home/containers/home/home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/home/containers/home/home.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29udGFpbmVycy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/containers/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/containers/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers/index */ "./src/app/reducers/index.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/home.service */ "./src/app/home/services/home.service.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(store, userStore, homeService) {
        this.store = store;
        this.userStore = userStore;
        this.homeService = homeService;
        this.nowPlayingMoviesList = [];
        this.upcomingMoviesList = [];
        this.genresList = [];
        this.theaterList = [];
        this.userPreference = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNewSetofNowPlayingMovies(1);
        this.store.select(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["nowPlayingMoviesSelector"]).subscribe(function (result) { return (_this.nowPlayingMoviesList = result); });
        this.store.select(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["upcomingMovieSelector"]).subscribe(function (result) {
            _this.upcomingMoviesList = result;
        });
        this.store.select(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["theaterList"]).subscribe(function (result) {
            _this.theaterList = Object.values(result);
        });
        this.userStore.select(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["userSelector"]).subscribe(function (result) {
            _this.userPreference = result.preference;
        });
        this.genresList = this.homeService.getGenres();
    };
    HomeComponent.prototype.getNewSetofNowPlayingMovies = function (page) {
        this.homeService.getNowshowing(page);
    };
    HomeComponent.prototype.getNewSetofComingMovies = function (page) {
        this.homeService.getUpcomingMovies(page);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/containers/home/home.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/containers/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/home/home.component */ "./src/app/home/containers/home/home.component.ts");




var routes = [
    {
        path: '',
        component: _containers_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/home/components/home-page/home-page.component.ts");
/* harmony import */ var _containers_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/home/home.component */ "./src/app/home/containers/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_home_page_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home-page/movie-card/movie-card.component */ "./src/app/home/components/home-page/movie-card/movie-card.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _shared_components_modals_seat_reservation_modal_seat_reservation_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/modals/seat-reservation-modal/seat-reservation-modal.component */ "./src/app/shared/components/modals/seat-reservation-modal/seat-reservation-modal.component.ts");
/* harmony import */ var _shared_components_modals_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/modals/confirmation-modal/confirmation-modal.component */ "./src/app/shared/components/modals/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_components_modals_pre_booking_pre_booking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/components/modals/pre-booking/pre-booking.component */ "./src/app/shared/components/modals/pre-booking/pre-booking.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");














var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"], _containers_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _components_home_page_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_7__["MovieCardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [],
            exports: [_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            entryComponents: [_shared_components_modals_seat_reservation_modal_seat_reservation_modal_component__WEBPACK_IMPORTED_MODULE_9__["SeatReservationModalComponent"], _shared_components_modals_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationModalComponent"], _shared_components_modals_pre_booking_pre_booking_component__WEBPACK_IMPORTED_MODULE_12__["PreBookingComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map