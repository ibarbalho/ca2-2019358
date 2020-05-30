(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotes-quotes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"dark\">\n\t\t<ion-title>Quotes</ion-title>\n\t</ion-toolbar>\t\n</ion-header>\n<ion-content>\n\t<ion-list>\n\n\t\t<ion-card *ngFor=\"let quote of quotes | async\" (click)=\"openDetails(quote)\">\n\t\t\t<ion-item>\t\t\t\t\n\t\t\t\tBy: {{ quote.author }}\n\t\t\t\t<ion-icon name=\"chevron-forward-circle\" size=\"small\" color=\"medium\" slot=\"end\"></ion-icon>\n\t\t\t</ion-item>\n\n\t\t\t<ion-card-content>\n\t\t\t\t{{ quote.quote }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\n\t</ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/quotes/quotes-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/quotes/quotes-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: QuotesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPageRoutingModule", function() { return QuotesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quotes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotes.page */ "./src/app/pages/quotes/quotes.page.ts");




const routes = [
    {
        path: '',
        component: _quotes_page__WEBPACK_IMPORTED_MODULE_3__["QuotesPage"]
    }
];
let QuotesPageRoutingModule = class QuotesPageRoutingModule {
};
QuotesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuotesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/quotes/quotes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/quotes/quotes.module.ts ***!
  \***********************************************/
/*! exports provided: QuotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPageModule", function() { return QuotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _quotes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotes-routing.module */ "./src/app/pages/quotes/quotes-routing.module.ts");
/* harmony import */ var _quotes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotes.page */ "./src/app/pages/quotes/quotes.page.ts");







let QuotesPageModule = class QuotesPageModule {
};
QuotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quotes_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuotesPageRoutingModule"]
        ],
        declarations: [_quotes_page__WEBPACK_IMPORTED_MODULE_6__["QuotesPage"]]
    })
], QuotesPageModule);



/***/ }),

/***/ "./src/app/pages/quotes/quotes.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/quotes/quotes.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#DCDCDC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvY2EyLTIwMTkzNTgvc3JjL2FwcC9wYWdlcy9xdW90ZXMvcXVvdGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcXVvdGVzL3F1b3Rlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVvdGVzL3F1b3Rlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNEQ0RDREM7ICAgIFxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojRENEQ0RDO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/quotes/quotes.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/quotes/quotes.page.ts ***!
  \*********************************************/
/*! exports provided: QuotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPage", function() { return QuotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




let QuotesPage = class QuotesPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
    }
    ngOnInit() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => { console.log('my data', data); });
    }
    openDetails(quote) {
        let quoteID = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteID}`);
    }
};
QuotesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
QuotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quotes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quotes.page.scss */ "./src/app/pages/quotes/quotes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], QuotesPage);



/***/ })

}]);
//# sourceMappingURL=quotes-quotes-module-es2015.js.map