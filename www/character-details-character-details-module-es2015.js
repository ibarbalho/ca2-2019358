(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-details-character-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"dark\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/characters\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{ character?.name }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"unfavouriteCharacter()\" *ngIf=\"isFavourite\">\n\t\t\t\t<ion-icon name=\"heart\" slot=\"icon-only\" color=\"secondary\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"favouriteCharacter()\" *ngIf=\"!isFavourite\">\n\t\t\t\t<ion-icon name=\"heart-outline\" slot=\"icon-only\" color=\"secondary\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\t<ion-card *ngIf=\"character\" class=\"movie-card\">\n\n\n\t\t<ion-img style=\"align-items: center width: 250px; height: 250px;\" src=\"{{character.img}}\"></ion-img>\n\n\n\n\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"person\" slot=\"start\"></ion-icon>\n\t\t\tName: {{ character.name }}\n\t\t</ion-item>\n\n\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"gift\" slot=\"start\"></ion-icon>\n\t\t\tBirthday: {{ character.birthday }}\n\t\t</ion-item>\n\n\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"briefcase\" slot=\"start\"></ion-icon>\n\t\t\tOccupation: {{ character.occupation }}\n\t\t</ion-item>\n\n\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"pulse\" slot=\"start\"></ion-icon>\n\t\t\tStatus: {{ character.status }}\n\t\t</ion-item>\n\n\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"film\" slot=\"start\"></ion-icon>\n\t\t\tAppearances in Season: {{ character.appearance }}\n\t\t</ion-item>\n\n\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"body\" slot=\"start\"></ion-icon>\n\t\t\tPortrayed by: {{ character.portrayed }}\n\t\t</ion-item>\n\n\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"videocam\" slot=\"start\"></ion-icon>\n\t\t\tSeries: {{ character.category }}\n\t\t</ion-item>\n\n\t</ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/character-details/character-details-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/character-details/character-details-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CharacterDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageRoutingModule", function() { return CharacterDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");




const routes = [
    {
        path: '',
        component: _character_details_page__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailsPage"]
    }
];
let CharacterDetailsPageRoutingModule = class CharacterDetailsPageRoutingModule {
};
CharacterDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharacterDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: CharacterDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageModule", function() { return CharacterDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./character-details-routing.module */ "./src/app/pages/character-details/character-details-routing.module.ts");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");







let CharacterDetailsPageModule = class CharacterDetailsPageModule {
};
CharacterDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharacterDetailsPageRoutingModule"]
        ],
        declarations: [_character_details_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsPage"]]
    })
], CharacterDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#DCDCDC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvY2EyLTIwMTkzNTgvc3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXItZGV0YWlscy9jaGFyYWN0ZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXJhY3Rlci1kZXRhaWxzL2NoYXJhY3Rlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXItZGV0YWlscy9jaGFyYWN0ZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNEQ0RDREM7ICAgIFxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojRENEQ0RDO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: CharacterDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPage", function() { return CharacterDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/favourite.service */ "./src/app/services/favourite.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CharacterDetailsPage = class CharacterDetailsPage {
    constructor(activatedRoute, api, favouriteService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteService = favouriteService;
        this.characterId = null;
        this.isFavourite = false;
    }
    //Load characteres
    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
        });
        this.favouriteService.isFavouriteChar(this.characterId).then(isFav => {
            this.isFavourite = isFav;
        });
    }
    //Function favourite character by clik on the top bar
    favouriteCharacter() {
        this.favouriteService.favouriteCharacter(this.characterId).then(() => {
            this.isFavourite = true;
        });
    }
    //Function unfavourite character by clik on the top bar
    unfavouriteCharacter() {
        this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavourite = false;
        });
    }
};
CharacterDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"] }
];
CharacterDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-character-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./character-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./character-details.page.scss */ "./src/app/pages/character-details/character-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"]])
], CharacterDetailsPage);



/***/ })

}]);
//# sourceMappingURL=character-details-character-details-module-es2015.js.map