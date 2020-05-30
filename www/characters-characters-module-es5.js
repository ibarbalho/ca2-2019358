function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-characters-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCharactersCharactersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"dark\">\n\t\t<ion-title>Characters</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n\t\t<ion-item name=\"\" *ngFor=\"let character of characters\" (click)=\"openDetails(character)\">\n\t\t\t<ion-label>\t<h2>{{ character.name }}</h2></ion-label>\n            <ion-avatar slot=\"end\">\n\t\t\t\t<img src=\"{{ character.img }}\">\n            </ion-avatar>\n            <ion-icon name=\"chevron-forward-circle\" size=\"small\" color=\"medium\" slot=\"end\"></ion-icon>\n\t\t</ion-item>\n\t</ion-list>\n\t<ion-infinite-scroll threshold=\"100%\" id=\"infinite-scroll\" (ionInfinite)=\"loadData($event)\">\n\t\t<ion-infinite-scroll-content loading-spinner=\"crescent\" loading-text=\"Loading...\">\n\t\t</ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/characters/characters-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/characters/characters-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CharactersPageRoutingModule */

  /***/
  function srcAppPagesCharactersCharactersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersPageRoutingModule", function () {
      return CharactersPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _characters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./characters.page */
    "./src/app/pages/characters/characters.page.ts");

    var routes = [{
      path: '',
      component: _characters_page__WEBPACK_IMPORTED_MODULE_3__["CharactersPage"]
    }];

    var CharactersPageRoutingModule = function CharactersPageRoutingModule() {
      _classCallCheck(this, CharactersPageRoutingModule);
    };

    CharactersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CharactersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/characters/characters.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/characters/characters.module.ts ***!
    \*******************************************************/

  /*! exports provided: CharactersPageModule */

  /***/
  function srcAppPagesCharactersCharactersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersPageModule", function () {
      return CharactersPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./characters-routing.module */
    "./src/app/pages/characters/characters-routing.module.ts");
    /* harmony import */


    var _characters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./characters.page */
    "./src/app/pages/characters/characters.page.ts");

    var CharactersPageModule = function CharactersPageModule() {
      _classCallCheck(this, CharactersPageModule);
    };

    CharactersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharactersPageRoutingModule"]],
      declarations: [_characters_page__WEBPACK_IMPORTED_MODULE_6__["CharactersPage"]]
    })], CharactersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/characters/characters.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/characters/characters.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCharactersCharactersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#DCDCDC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvY2EyLTIwMTkzNTgvc3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNEQ0RDREM7ICAgIFxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojRENEQ0RDO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/characters/characters.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/characters/characters.page.ts ***!
    \*****************************************************/

  /*! exports provided: CharactersPage */

  /***/
  function srcAppPagesCharactersCharactersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersPage", function () {
      return CharactersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");

    var CharactersPage = /*#__PURE__*/function () {
      function CharactersPage(router, api) {
        _classCallCheck(this, CharactersPage);

        this.router = router;
        this.api = api;
        this.characters = [];
        this.offset = 0;
        this.limit = 15;
        this.maxCharacters = 63;
      } //Load characters


      _createClass(CharactersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadCharacters();
        }
      }, {
        key: "openDetails",
        value: function openDetails(character) {
          var characterID = character.char_id;
          this.router.navigateByUrl("/tabs/characters/".concat(characterID));
        }
      }, {
        key: "loadCharacters",
        value: function loadCharacters(event) {
          var _this = this;

          this.api.getCharacters(this.limit, this.offset).subscribe(function (res) {
            _this.characters = _this.characters.concat(res);

            if (event) {
              event.target.complete();
            }
          });
        } //Infinite Scroll

      }, {
        key: "loadData",
        value: function loadData(event) {
          this.offset += 15;
          this.loadCharacters(event);

          if (this.offset > this.maxCharacters - 1) {
            event.target.disable = true;
          }
        }
      }]);

      return CharactersPage;
    }();

    CharactersPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    CharactersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-characters',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./characters.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./characters.page.scss */
      "./src/app/pages/characters/characters.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], CharactersPage);
    /***/
  }
}]);
//# sourceMappingURL=characters-characters-module-es5.js.map