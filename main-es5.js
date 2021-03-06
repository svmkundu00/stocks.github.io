(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\stockApplication\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "8CEF":
    /*!**********************************************!*\
      !*** ./src/app/login/user/user.component.ts ***!
      \**********************************************/

    /*! exports provided: UserComponent */

    /***/
    function CEF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
        return UserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var UserComponent = /*#__PURE__*/function () {
        function UserComponent(router) {
          _classCallCheck(this, UserComponent);

          this.router = router;
        }

        _createClass(UserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "authenticate",
          value: function authenticate(cred) {
            debugger;

            if (cred.value.in_userName == "user" && cred.value.in_password == "1234") {
              this.router.navigate(['/home']);
            }
          }
        }]);

        return UserComponent;
      }();

      UserComponent.??fac = function UserComponent_Factory(t) {
        return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      UserComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UserComponent,
        selectors: [["app-user"]],
        decls: 15,
        vars: 3,
        consts: [[1, "simple-login-container"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "row"], [1, "col-md-12", "form-group"], ["type", "text", "required", "", "name", "in_userName", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "in_password", "required", "", "placeholder", "Enter your Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-block", "btn-login", 2, "background-color", "#79bf78!important", 3, "disabled", "click"]],
        template: function UserComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Stock Application");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function UserComponent_Template_form_ngSubmit_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

              return ctx.authenticate(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.in_userName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.in_password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_Template_button_click_13_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

              return ctx.authenticate(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Log In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.in_userName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.in_password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r0.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        styles: ["body[_ngcontent-%COMP%]{\r\n    background-color:#5286F3;\r\n    font-size:14px;\r\n    color:#fff;\r\n}\r\n.simple-login-container[_ngcontent-%COMP%]{\r\n    width:300px;\r\n    max-width:100%;\r\n    margin:50px auto;\r\n}\r\n.simple-login-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    text-align:center;\r\n    font-size:20px;\r\n}\r\n.simple-login-container[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%]{\r\n    background-color:#FF5964;\r\n    color:#fff;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    color:#fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNTI4NkYzO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbi5zaW1wbGUtbG9naW4tY29udGFpbmVye1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbjo1MHB4IGF1dG87XHJcbn1cclxuLnNpbXBsZS1sb2dpbi1jb250YWluZXIgaDJ7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG59XHJcblxyXG4uc2ltcGxlLWxvZ2luLWNvbnRhaW5lciAuYnRuLWxvZ2lue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkY1OTY0O1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG5he1xyXG4gICAgY29sb3I6I2ZmZjtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: homeRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "homeRoutingModule", function () {
        return homeRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "X6c3");
      /* harmony import */


      var _listing_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./listing/listing.component */
      "rfar");
      /* harmony import */


      var _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detail-view/detail-view.component */
      "YDtg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'home',
        children: [{
          path: '',
          component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"],
          children: [{
            path: 'detail/:symbol',
            component: _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_3__["DetailViewComponent"]
          }, {
            path: '',
            component: _listing_listing_component__WEBPACK_IMPORTED_MODULE_2__["ListingComponent"]
          }]
        }]
      }];

      var homeRoutingModule = function homeRoutingModule() {
        _classCallCheck(this, homeRoutingModule);
      };

      homeRoutingModule.??fac = function homeRoutingModule_Factory(t) {
        return new (t || homeRoutingModule)();
      };

      homeRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: homeRoutingModule
      });
      homeRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](homeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "OlR4":
    /*!********************************************!*\
      !*** ./src/app/services/common.service.ts ***!
      \********************************************/

    /*! exports provided: CommonService */

    /***/
    function OlR4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonService", function () {
        return CommonService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CommonService = /*#__PURE__*/function () {
        function CommonService(_http) {
          _classCallCheck(this, CommonService);

          this._http = _http;
        }

        _createClass(CommonService, [{
          key: "addSymbol",
          value: function addSymbol(user) {
            return this._http.post('http://localhost:3000/stocks', user.value);
          }
        }, {
          key: "getStockListing",
          value: function getStockListing() {
            return this._http.get('http://localhost:3000/stocks');
          }
        }, {
          key: "deleteSymbol",
          value: function deleteSymbol(id) {
            return this._http["delete"]('http://localhost:3000/stocks/' + id);
          }
        }, {
          key: "viewDetails",
          value: function viewDetails(id) {
            return this._http.get('http://localhost:3000/stocks/' + id);
          }
        }]);

        return CommonService;
      }();

      CommonService.??fac = function CommonService_Factory(t) {
        return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      CommonService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: CommonService,
        factory: CommonService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "RKzz":
    /*!***************************************************!*\
      !*** ./src/app/home/cellbtn/cellbtn.component.ts ***!
      \***************************************************/

    /*! exports provided: CellbtnComponent */

    /***/
    function RKzz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CellbtnComponent", function () {
        return CellbtnComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CellbtnComponent = /*#__PURE__*/function () {
        function CellbtnComponent() {
          _classCallCheck(this, CellbtnComponent);
        }

        _createClass(CellbtnComponent, [{
          key: "refresh",
          value: function refresh(params) {
            this.cellValue = params.value;
            return true;
          } // afterGuiAttached?(params?: any): void {
          //   throw new Error('Method not implemented.');
          // }

        }, {
          key: "delete",
          value: function _delete(sd) {
            this.para.api.dispatchEvent('delete', sd);
          }
        }, {
          key: "agInit",
          value: function agInit(params) {
            debugger;
            this.para = params;
            this.cellValue = params.data;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CellbtnComponent;
      }();

      CellbtnComponent.??fac = function CellbtnComponent_Factory(t) {
        return new (t || CellbtnComponent)();
      };

      CellbtnComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CellbtnComponent,
        selectors: [["app-cellbtn"]],
        decls: 2,
        vars: 0,
        consts: [[1, "btn", "btn-outline-primary"]],
        template: function CellbtnComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "DELETE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZWxsYnRuLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'stockApplication';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "TIUA":
    /*!*************************************************!*\
      !*** ./src/app/home/header/header.component.ts ***!
      \*************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function TIUA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.??fac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 12,
        vars: 0,
        consts: [["id", "mainNav", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-hdr", "fixed-top"], [1, "container"], ["href", "", 1, "navbar-brand", "js-scroll-trigger"], ["type", "button", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "", 1, "nav-link", "js-scroll-trigger"], [1, "text-white", 2, "padding", "10px 0 67px !important"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Stock Application");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "header", 9);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"]],
        styles: ["header[_ngcontent-%COMP%] {\r\n    padding: 156px 0 100px;\r\n  }\r\n  \r\n  section[_ngcontent-%COMP%] {\r\n    padding: 150px 0;\r\n  }\r\n  \r\n  .bg-hdr[_ngcontent-%COMP%]{\r\n    background-color: #79bf78!important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLG1DQUFtQztFQUNyQyIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTU2cHggMCAxMDBweDtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxNTBweCAwO1xyXG4gIH1cclxuICAuYmctaGRye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5YmY3OCFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
        return LoginModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user/user.component */
      "8CEF");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoginModule = function LoginModule() {
        _classCallCheck(this, LoginModule);
      };

      LoginModule.??fac = function LoginModule_Factory(t) {
        return new (t || LoginModule)();
      };

      LoginModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: LoginModule
      });
      LoginModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](LoginModule, {
          declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [_user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"]]
        });
      })();
      /***/

    },

    /***/
    "X6c3":
    /*!*****************************************************!*\
      !*** ./src/app/home/homepage/homepage.component.ts ***!
      \*****************************************************/

    /*! exports provided: HomepageComponent */

    /***/
    function X6c3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
        return HomepageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "TIUA");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomepageComponent = /*#__PURE__*/function () {
        function HomepageComponent() {
          _classCallCheck(this, HomepageComponent);
        }

        _createClass(HomepageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomepageComponent;
      }();

      HomepageComponent.??fac = function HomepageComponent_Factory(t) {
        return new (t || HomepageComponent)();
      };

      HomepageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HomepageComponent,
        selectors: [["app-homepage"]],
        decls: 6,
        vars: 0,
        consts: [["id", "about"], [1, "container"], [1, "row"], [1, "col-lg-8", "mx-auto"]],
        template: function HomepageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "YDtg":
    /*!***********************************************************!*\
      !*** ./src/app/home/detail-view/detail-view.component.ts ***!
      \***********************************************************/

    /*! exports provided: DetailViewComponent */

    /***/
    function YDtg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailViewComponent", function () {
        return DetailViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/common.service */
      "OlR4");
      /* harmony import */


      var _detailviewheader_detailviewheader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../detailviewheader/detailviewheader.component */
      "cK/P");
      /* harmony import */


      var _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-charts */
      "0jTc");

      var _c0 = ["ColorSampleComponent"];

      var DetailViewComponent = /*#__PURE__*/function () {
        function DetailViewComponent(activatedRoute, location, commonService) {
          _classCallCheck(this, DetailViewComponent);

          this.activatedRoute = activatedRoute;
          this.location = location;
          this.commonService = commonService;
          this.toolTipSettings = {
            enable: true
          };
          this.crossSettings = {
            enable: true,
            lineType: 'vertical'
          };
          this.xAxis = {
            title: 'Date',
            valueType: 'DateTime',
            labelFormat: 'ddMMM',
            crosshairTooltip: {
              enable: true
            }
          };
          this.title = 'OHLC analysis';
          this.YAxis = {
            title: 'Price in Dollar'
          };
          this.chartData = [{
            date: new Date('2012-04-02'),
            open: 320.70,
            high: 324.07,
            low: 317.73,
            close: 323.73,
            volume: 45676324
          }, {
            date: new Date('2012-04-03'),
            open: 323.028015,
            high: 324.299286,
            low: 319.639648,
            close: 321.631622,
            volume: 23432423
          }, {
            date: new Date('2012-04-04'),
            open: 319.544556,
            high: 319.819824,
            low: 315.865875,
            close: 317.892883,
            volume: 3435235432
          }, {
            date: new Date('2012-04-05'),
            open: 316.436432,
            high: 320.533539,
            low: 311.599609,
            close: 312.476471,
            volume: 2324345456
          }, {
            date: new Date('2012-04-06'),
            open: 320.436432,
            high: 321.533539,
            low: 318.599609,
            close: 321.476471,
            volume: 2324345456
          }, {
            date: new Date('2012-04-07'),
            open: 319.234324,
            high: 320.24324,
            low: 314.21321,
            close: 320.32432,
            volume: 2324345456
          }, {
            date: new Date('2012-04-08'),
            open: 311.436432,
            high: 314.533539,
            low: 310.599609,
            close: 313.7868,
            volume: 2324345456
          }, {
            date: new Date('2012-04-09'),
            open: 320.76123,
            high: 321.09887,
            low: 318.312334,
            close: 318.476471,
            volume: 2324345456
          }, {
            date: new Date('2012-04-10'),
            open: 318.0934,
            high: 326.21345,
            low: 313.234,
            close: 325.1231,
            volume: 2324345456
          }, {
            date: new Date('2012-04-11'),
            open: 330.436432,
            high: 334.533539,
            low: 319.599609,
            close: 334.476471,
            volume: 2324345456
          }, {
            date: new Date('2012-04-12'),
            open: 319.436432,
            high: 320.533539,
            low: 318.599609,
            close: 320.476471,
            volume: 2324345456
          }];
        }

        _createClass(DetailViewComponent, [{
          key: "routeBack",
          value: function routeBack() {
            this.location.back();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dataID = this.activatedRoute.snapshot.params['symbol'];
            debugger;
            this.commonService.viewDetails(this.dataID).subscribe(function (resp) {
              _this.stockDetail = resp;
            });
          }
        }]);

        return DetailViewComponent;
      }();

      DetailViewComponent.??fac = function DetailViewComponent_Factory(t) {
        return new (t || DetailViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      DetailViewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DetailViewComponent,
        selectors: [["app-detail-view"]],
        viewQuery: function DetailViewComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.mytxt = _t.first);
          }
        },
        decls: 10,
        vars: 8,
        consts: [[1, "back"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "card"], [1, "card-header", 2, "margin-top", "0 !important"], [3, "stockDetail"], [1, "card-block"], [3, "primaryXAxis", "primaryYAxis", "title", "tooltip", "crosshair"], ["type", "HiloOpenClose", "xName", "date", "high", "high", "low", "low", "open", "open", "close", "close", "volume", "volume", 3, "dataSource", "name"]],
        template: function DetailViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DetailViewComponent_Template_button_click_1_listener() {
              return ctx.routeBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-detailviewheader", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ejs-chart", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "e-series-collection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "e-series", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stockDetail", ctx.stockDetail);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("primaryXAxis", ctx.xAxis)("primaryYAxis", ctx.YAxis)("title", ctx.title)("tooltip", ctx.toolTipSettings)("crosshair", ctx.crossSettings);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("name", ctx.stockDetail.company);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.chartData);
          }
        },
        directives: [_detailviewheader_detailviewheader_component__WEBPACK_IMPORTED_MODULE_4__["DetailviewheaderComponent"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_5__["SeriesCollectionDirective"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_5__["SeriesDirective"]],
        styles: [".back[_ngcontent-%COMP%]{\r\n    margin: 3px 0px 8px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoiZGV0YWlsLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNre1xyXG4gICAgbWFyZ2luOiAzcHggMHB4IDhweCAwcHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _login_login_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.module */
      "X3zk");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??fac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_3__["LoginModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_3__["LoginModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]
        });
      })();
      /***/

    },

    /***/
    "cK/P":
    /*!*********************************************************************!*\
      !*** ./src/app/home/detailviewheader/detailviewheader.component.ts ***!
      \*********************************************************************/

    /*! exports provided: DetailviewheaderComponent */

    /***/
    function cKP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailviewheaderComponent", function () {
        return DetailviewheaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DetailviewheaderComponent = /*#__PURE__*/function () {
        function DetailviewheaderComponent() {
          _classCallCheck(this, DetailviewheaderComponent);
        }

        _createClass(DetailviewheaderComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.symbol = changes.stockDetail.currentValue;
          }
        }]);

        return DetailviewheaderComponent;
      }();

      DetailviewheaderComponent.??fac = function DetailviewheaderComponent_Factory(t) {
        return new (t || DetailviewheaderComponent)();
      };

      DetailviewheaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DetailviewheaderComponent,
        selectors: [["app-detailviewheader"]],
        inputs: {
          stockDetail: "stockDetail"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]],
        decls: 5,
        vars: 2,
        consts: [[1, "col-md-12"], [1, "headerCol"]],
        template: function DetailviewheaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Symbol : ", ctx.stockDetail.symbol, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Company : ", ctx.stockDetail.company, "");
          }
        },
        styles: [".headerCol[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    font-size: 0.5em;\r\n    width: 50%;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHZpZXdoZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJkZXRhaWx2aWV3aGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyQ29se1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomeModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./header/header.component */
      "TIUA");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "X6c3");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ag-grid-angular */
      "cWTo");
      /* harmony import */


      var _listing_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./listing/listing.component */
      "rfar");
      /* harmony import */


      var _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./detail-view/detail-view.component */
      "YDtg");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-charts */
      "0jTc");
      /* harmony import */


      var _cellbtn_cellbtn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./cellbtn/cellbtn.component */
      "RKzz");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _detailviewheader_detailviewheader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./detailviewheader/detailviewheader.component */
      "cK/P");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // import { CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
      // import { IgxGridModule } from "igniteui-angular";


      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.??fac = function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      };

      HomeModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["????defineNgModule"]({
        type: HomeModule,
        bootstrap: [_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]]
      });
      HomeModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["????defineInjector"]({
        providers: [_syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_9__["HiloOpenCloseSeriesService"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_9__["DateTimeService"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_9__["TooltipService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["homeRoutingModule"], // IgxGridModule
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([_cellbtn_cellbtn_component__WEBPACK_IMPORTED_MODULE_10__["CellbtnComponent"]]), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_9__["ChartModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["????setNgModuleScope"](HomeModule, {
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"], _listing_listing_component__WEBPACK_IMPORTED_MODULE_6__["ListingComponent"], _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_7__["DetailViewComponent"], _cellbtn_cellbtn_component__WEBPACK_IMPORTED_MODULE_10__["CellbtnComponent"], _detailviewheader_detailviewheader_component__WEBPACK_IMPORTED_MODULE_14__["DetailviewheaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["homeRoutingModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_9__["ChartModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"]]
        });
      })();
      /***/

    },

    /***/
    "rfar":
    /*!***************************************************!*\
      !*** ./src/app/home/listing/listing.component.ts ***!
      \***************************************************/

    /*! exports provided: ListingComponent */

    /***/
    function rfar(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListingComponent", function () {
        return ListingComponent;
      });
      /* harmony import */


      var _cellbtn_cellbtn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../cellbtn/cellbtn.component */
      "RKzz");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/common.service */
      "OlR4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ag-grid-angular */
      "cWTo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["confirm"];

      function ListingComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "New Stock Entry");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ListingComponent_ng_template_5_Template_button_click_3_listener() {
            var modal_r4 = ctx.$implicit;
            return modal_r4.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "form", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngSubmit", function ListingComponent_ng_template_5_Template_form_ngSubmit_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r8);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r7.savetoJSON(_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, "Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function ListingComponent_ng_template_5_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r9.company = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "Symbol");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function ListingComponent_ng_template_5_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r10.symbol = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "Initial Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function ListingComponent_ng_template_5_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r11.initial_price = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23, "Price 2002");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function ListingComponent_ng_template_5_Template_input_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r8);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r12.price_2002 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27, "Price 2007");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function ListingComponent_ng_template_5_Template_input_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r8);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r13.price_2007 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](31, "Add Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](8);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx_r1.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx_r1.symbol);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx_r1.initial_price);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx_r1.price_2002);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx_r1.price_2007);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", !_r5.valid);
        }
      }

      function ListingComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "ALERT");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ListingComponent_ng_template_7_Template_button_click_3_listener() {
            var modal_r14 = ctx.$implicit;
            return modal_r14.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "Do you want to delete this Stock Data?");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ListingComponent_ng_template_7_Template_button_click_11_listener() {
            var modal_r14 = ctx.$implicit;
            return modal_r14.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ListingComponent_ng_template_7_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r17["delete"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      var ListingComponent = /*#__PURE__*/function () {
        function ListingComponent(CommonService, router, modalService, toaster) {
          _classCallCheck(this, ListingComponent);

          this.CommonService = CommonService;
          this.router = router;
          this.modalService = modalService;
          this.toaster = toaster;
          this.title = 'AddNewStock';
          this.stocks = [];
          this.columnDefs = [{
            headerName: 'Company',
            field: 'company',
            sortable: true,
            filter: true,
            width: '120px'
          }, {
            headerName: 'Symbol',
            field: 'symbol',
            sortable: true,
            filter: true,
            width: '120px'
          }, {
            headerName: 'Initial Price',
            field: 'initial_price',
            sortable: true,
            filter: true,
            width: '120px'
          }, {
            headerName: 'price 2002',
            field: 'price_2002',
            sortable: true,
            filter: true,
            width: '120px'
          }, {
            headerName: 'price 2007',
            field: 'price_2007',
            sortable: true,
            filter: true,
            width: '100px'
          }, {
            headerName: 'Action',
            field: 'action',
            width: '144px',
            cellRenderer: "customizedCell"
          }];
        }

        _createClass(ListingComponent, [{
          key: "open",
          value: function open(content) {
            var _this2 = this;

            this.modalRef = this.modalService.open(content);
            this.modalRef.result.then(function (result) {
              _this2.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this2.closeResult = "Dismissed ".concat(_this2.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "savetoJSON",
          value: function savetoJSON(saveStock) {
            var _this3 = this;

            var symbol = this.rowData.find(function (t) {
              return t.symbol == saveStock.value.symbol;
            });

            if (!symbol) {
              this.CommonService.addSymbol(saveStock).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (stockVal) {
                return _this3.CommonService.getStockListing();
              })).subscribe(function (resp) {
                _this3.res = resp;
                _this3.rowData = _this3.res;

                _this3.modalRef.close();

                _this3.toaster.success("Symbol added successfully");
              });
            } else {
              this.toaster.error('Try different symbol', 'Symbol Exists!');
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.rowHeight = 50;
            this.rowStyle = {
              padding: '4px'
            };
            this.CommonService.getStockListing().subscribe(function (res) {
              _this4.rowData = res;
            });
            this.frameworkComponents = {
              customizedCell: _cellbtn_cellbtn_component__WEBPACK_IMPORTED_MODULE_0__["CellbtnComponent"]
            };
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this5 = this;

            this.CommonService.deleteSymbol(this.dataTodelete.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (stockVal) {
              return _this5.CommonService.getStockListing();
            })).subscribe(function (resp) {
              _this5.res = resp;
              _this5.rowData = _this5.res;

              _this5.modalRef.close();

              _this5.toaster.success("Symbol deleted successfully");
            });
          }
        }, {
          key: "cancelAction",
          value: function cancelAction() {
            this.modalRef.close();
            this.dataTodelete = '';
          }
        }, {
          key: "onRowClick",
          value: function onRowClick(event) {
            debugger;
            this.selectedRow = event.data;

            if (event.event.target.nodeName == "BUTTON") {
              this.dataTodelete = this.selectedRow;
              this.open(this.confirm);
            } else {
              this.router.navigate(['home/detail', this.selectedRow.id]);
            }
          }
        }]);

        return ListingComponent;
      }();

      ListingComponent.??fac = function ListingComponent_Factory(t) {
        return new (t || ListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
      };

      ListingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: ListingComponent,
        selectors: [["app-listing"]],
        viewQuery: function ListingComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.confirm = _t.first);
          }
        },
        decls: 9,
        vars: 5,
        consts: [[1, "newBtn"], [1, "btn", "btn-lg", "btn-outline-secondary", 3, "click"], [1, "ag-theme-balham", 2, "width", "750px", "height", "500px", 3, "rowHeight", "rowStyle", "rowData", "frameworkComponents", "columnDefs", "rowClicked"], ["mymodal", ""], ["confirm", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["stockForm", "ngForm"], [1, "md-form"], ["for", "form1", 1, ""], ["mdbInput", "", "type", "text", "name", "company", "required", "", "id", "company", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mdbInput", "", "type", "text", "name", "symbol", "required", "", "id", "symbol", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mdbInput", "", "type", "number", "required", "", "name", "initial_price", "id", "initial_price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mdbInput", "", "type", "number", "required", "", "name", "price_2002", "id", "price_2002", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mdbInput", "", "type", "number", "required", "", "name", "price_2007", "id", "price_2007", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "md-form", 2, "text-align", "center"], ["type", "submit", 1, "btn", "btn-outline-dark", 2, "margin", "27px 10px 0px 10px", 3, "disabled"], [1, "form-group"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
        template: function ListingComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ListingComponent_Template_button_click_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r19);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](6);

              return ctx.open(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Add a New Symbol");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "ag-grid-angular", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("rowClicked", function ListingComponent_Template_ag_grid_angular_rowClicked_4_listener($event) {
              return ctx.onRowClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, ListingComponent_ng_template_5_Template, 32, 6, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, ListingComponent_ng_template_7_Template, 15, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("rowHeight", ctx.rowHeight)("rowStyle", ctx.rowStyle)("rowData", ctx.rowData)("frameworkComponents", ctx.frameworkComponents)("columnDefs", ctx.columnDefs);
          }
        },
        directives: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridAngular"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"]],
        styles: [".newBtn[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-bottom: 10px;;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld0J0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home/home.module */
      "ct+p");
      /* harmony import */


      var _login_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/user/user.component */
      "8CEF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [// 
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      }, {
        path: 'login',
        component: _login_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??fac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes), _home_home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports, __webpack_require__) {
      var map = {
        "./home/home.module": "ct+p"
      };

      function webpackAsyncContext(req) {
        return Promise.resolve().then(function () {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          }

          var id = map[req];
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "zn8P";
      module.exports = webpackAsyncContext;
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map