webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"lesson-list-container\">\n  <mat-sidenav [mode]=\"sidenavMode\"\n               [opened]=\"!isSmallScreen\"\n               [fixedInViewport]=\"true\"\n               class=\"lesson-list-sidenav\"\n               #lessonSidenav>\n    <mat-toolbar color=\"primary\">Egghead Material</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item\n         *ngFor=\"let lesson of lessons; let i = index\"\n         [routerLink]=\"lesson.path\"\n         routerLinkActive=\"active-lesson\">\n        {{i + 1}} - {{ lesson.data.shortName }}\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-toolbar color=\"accent\"\n               *ngIf=\"lessonConfig.shouldUseStandardStyles | async\"> {{ header$ | async }} </mat-toolbar>\n  <div class=\"mat-typography\"\n       [class.lesson-wrapper]=\"lessonConfig.shouldUseStandardStyles | async\">\n    <router-outlet></router-outlet>\n  </div>\n</mat-sidenav-container>\n<button *ngIf=\"isSmallScreen\"\n        mat-mini-fab\n        color=\"primary\"\n        class=\"sidenav-toggle\"\n        [@growInOut]=\"'in'\"\n        (click)=\"lessonSidenav.toggle()\">\n  <mat-icon>view_list</mat-icon>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-nav-list {\n  padding-top: 0; }\n  mat-nav-list a {\n    border-bottom: 1px solid #f3f3f3; }\n    mat-nav-list a.active-lesson {\n      background: rgba(255, 64, 129, 0.6);\n      color: white; }\n\nmat-sidenav-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  height: 100%; }\n\n.lesson-wrapper {\n  padding: 0 16px; }\n\n.lesson-list-sidenav {\n  width: 300px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24); }\n\n.sidenav-toggle {\n  position: fixed;\n  right: 20px;\n  bottom: 10px;\n  z-index: 4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* unused harmony export createRouteMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_lesson_config_service__ = __webpack_require__("../../../../../src/app/shared/lesson-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lessons_lessons_routes__ = __webpack_require__("../../../../../src/app/lessons/lessons.routes.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(lessonConfig, _router, _activatedRoute, _breakpointObserver) {
        var _this = this;
        this.lessonConfig = lessonConfig;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._breakpointObserver = _breakpointObserver;
        this.lessons = __WEBPACK_IMPORTED_MODULE_6__lessons_lessons_routes__["a" /* LESSON_ROUTES */];
        this.routeMap = createRouteMap(__WEBPACK_IMPORTED_MODULE_6__lessons_lessons_routes__["a" /* LESSON_ROUTES */]);
        this.header$ = _router.events.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* filter */])(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]; }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* map */])(function (_) { return _this.routeMap[_router.url.replace('/', '')] || 'Tabs Lesson'; }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* shareReplay */])(1));
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._breakpointObserver
            .observe(['(max-width: 901px)'])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["d" /* pluck */])('matches'))
            .subscribe(function (m) { return (_this.isSmallScreen = m); });
    };
    Object.defineProperty(AppComponent.prototype, "sidenavMode", {
        get: function () {
            return this.isSmallScreen ? 'over' : 'side';
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('growInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                            opacity: 0,
                            transform: 'scale3d(.3, .3, .3)'
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("150ms ease-in")
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("150ms ease-out", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                            opacity: 0,
                            transform: 'scale3d(.3, .3, .3)'
                        }))
                    ])
                ])
            ],
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__shared_lesson_config_service__["a" /* LessonConfigService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_cdk_layout__["a" /* BreakpointObserver */]])
    ], AppComponent);
    return AppComponent;
}());

function createRouteMap(routes) {
    return routes.reduce(function (acc, route) {
        return __assign({}, acc, (_a = {}, _a[route.path] = route.data.lessonName, _a));
        var _a;
    }, {});
}


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_material_module__ = __webpack_require__("../../../../../src/app/app-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_lesson_config_service__ = __webpack_require__("../../../../../src/app/shared/lesson-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lessons_lists_list_lesson_module__ = __webpack_require__("../../../../../src/app/lessons/lists/list-lesson.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lessons_icons_icons_lesson_module__ = __webpack_require__("../../../../../src/app/lessons/icons/icons-lesson.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lessons_inputs_inputs_lesson_module__ = __webpack_require__("../../../../../src/app/lessons/inputs/inputs-lesson.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lessons_toolbars_toolbar_lesson_module__ = __webpack_require__("../../../../../src/app/lessons/toolbars/toolbar-lesson.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lessons_loading_loading_lesson_module__ = __webpack_require__("../../../../../src/app/lessons/loading/loading-lesson.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lessons_tabs_tabs_lesson_module__ = __webpack_require__("../../../../../src/app/lessons/tabs/tabs-lesson.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lessons_snackbar_snackbar_lesson_module__ = __webpack_require__("../../../../../src/app/lessons/snackbar/snackbar-lesson.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lessons_datatable_datatable_lesson_module__ = __webpack_require__("../../../../../src/app/lessons/datatable/datatable-lesson.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lessons_datepicker_datepicker_lesson_module__ = __webpack_require__("../../../../../src/app/lessons/datepicker/datepicker-lesson.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lessons_dialogs_dialog_lesson_module__ = __webpack_require__("../../../../../src/app/lessons/dialogs/dialog-lesson.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__lessons_theming_theming_lesson_module__ = __webpack_require__("../../../../../src/app/lessons/theming/theming-lesson.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__lessons_dialogs_dialog_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/dialogs/dialog-lesson.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_cdk_layout__["c" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* EGGHEAD_MATERIAL_ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_7__app_material_module__["a" /* AppMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_11__lessons_icons_icons_lesson_module__["a" /* IconsLessonModule */],
                __WEBPACK_IMPORTED_MODULE_10__lessons_lists_list_lesson_module__["a" /* ListLessonModule */],
                __WEBPACK_IMPORTED_MODULE_12__lessons_inputs_inputs_lesson_module__["a" /* InputsLessonModule */],
                __WEBPACK_IMPORTED_MODULE_13__lessons_toolbars_toolbar_lesson_module__["a" /* ToolbarLessonModule */],
                __WEBPACK_IMPORTED_MODULE_14__lessons_loading_loading_lesson_module__["a" /* LoadingLessonModule */],
                __WEBPACK_IMPORTED_MODULE_15__lessons_tabs_tabs_lesson_module__["a" /* TabsLessonModule */],
                __WEBPACK_IMPORTED_MODULE_16__lessons_snackbar_snackbar_lesson_module__["a" /* SnackbarLessonModule */],
                __WEBPACK_IMPORTED_MODULE_17__lessons_datatable_datatable_lesson_module__["a" /* DataTableLessonModule */],
                __WEBPACK_IMPORTED_MODULE_18__lessons_datepicker_datepicker_lesson_module__["a" /* DatepickerLessonModule */],
                __WEBPACK_IMPORTED_MODULE_19__lessons_dialogs_dialog_lesson_module__["a" /* DialogLessonModule */],
                __WEBPACK_IMPORTED_MODULE_20__lessons_theming_theming_lesson_module__["a" /* ThemingLessonModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_21__lessons_dialogs_dialog_lesson_component__["a" /* DialogComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__shared_lesson_config_service__["a" /* LessonConfigService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EGGHEAD_MATERIAL_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lessons_lessons_routes__ = __webpack_require__("../../../../../src/app/lessons/lessons.routes.ts");

var EGGHEAD_MATERIAL_ROUTES = __WEBPACK_IMPORTED_MODULE_0__lessons_lessons_routes__["a" /* LESSON_ROUTES */].concat([
    { path: '**', redirectTo: __WEBPACK_IMPORTED_MODULE_0__lessons_lessons_routes__["a" /* LESSON_ROUTES */][0].path }
]);


/***/ }),

/***/ "../../../../../src/app/lessons/datatable/datatable-lesson.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z4 m-t-24\">\n  <mat-table [dataSource]=\"dataSource\"\n             matSort>\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef\n                       mat-sort-header>\n        Name\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let operator\">\n        {{operator.name}}\n      </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"category\">\n      <mat-header-cell *matHeaderCellDef\n                       mat-sort-header>\n        Category\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let operator\">\n        {{operator.category}}\n      </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"views\">\n      <mat-header-cell *matHeaderCellDef\n                       mat-sort-header>\n        Views\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let operator\">\n        {{operator.views}}\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"['name', 'category', 'views']\">\n\n    </mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: ['name', 'category', 'views']\">\n\n    </mat-row>\n\n  </mat-table>\n  <mat-paginator [pageSize]=\"10\"\n                 [pageSizeOptions]=\"[5,10,25]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lessons/datatable/datatable-lesson.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lessons/datatable/datatable-lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableLessonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fake_data__ = __webpack_require__("../../../../../src/app/lessons/datatable/fake-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataTableLessonComponent = (function () {
    function DataTableLessonComponent() {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatTableDataSource */](__WEBPACK_IMPORTED_MODULE_2__fake_data__["a" /* OPERATOR_INFO */]);
    }
    DataTableLessonComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatPaginator */])
    ], DataTableLessonComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSort */])
    ], DataTableLessonComponent.prototype, "sort", void 0);
    DataTableLessonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-datatable-lesson',
            template: __webpack_require__("../../../../../src/app/lessons/datatable/datatable-lesson.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lessons/datatable/datatable-lesson.component.scss")]
        })
    ], DataTableLessonComponent);
    return DataTableLessonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/datatable/datatable-lesson.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableLessonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datatable_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/datatable/datatable-lesson.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DataTableLessonModule = (function () {
    function DataTableLessonModule() {
    }
    DataTableLessonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__datatable_lesson_component__["a" /* DataTableLessonComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatSortModule */]]
        })
    ], DataTableLessonModule);
    return DataTableLessonModule;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/datatable/fake-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OPERATOR_INFO; });
var OPERATOR_INFO = [
    { name: 'combineAll', category: 'combination', views: 233245 },
    { name: 'combineLatest', category: 'combination', views: 422142 },
    { name: 'concat', category: 'combination', views: 965335 },
    { name: 'concatAll', category: 'combination', views: 222112 },
    { name: 'forkJoin', category: 'combination', views: 1232688 },
    { name: 'filter', category: 'filtering', views: 743368 },
    { name: 'take', category: 'filtering', views: 544323 },
    { name: 'skip', category: 'filtering', views: 233799 },
    { name: 'distinctUntilChanged', category: 'filtering', views: 134345 },
    { name: 'takeUntil', category: 'filtering', views: 433579 },
    { name: 'catch', category: 'error handling', views: 766433 },
    { name: 'retryWhen', category: 'error handling', views: 322567 },
    { name: 'interval', category: 'creation', views: 467785 },
    { name: 'of', category: 'creation', views: 774533 },
    { name: 'empty', category: 'creation', views: 646435 },
    { name: 'throw', category: 'creation', views: 233245 },
    { name: 'publish', category: 'multicasting', views: 76543 },
    { name: 'share', category: 'multicasting', views: 43321 },
    { name: 'concatMap', category: 'transformation', views: 32232 },
    { name: 'map', category: 'transformation', views: 2987657 },
    { name: 'mapTo', category: 'transformation', views: 1346754 },
    { name: 'mergeMap', category: 'transformation', views: 855434 },
    { name: 'scan', category: 'transformation', views: 223456 },
    { name: 'switchMap', category: 'transformation', views: 553359 },
    { name: 'pluck', category: 'transformation', views: 985642 },
    { name: 'buffer', category: 'transformation', views: 985324 },
    { name: 'do', category: 'utility', views: 422357 },
    { name: 'delay', category: 'utility', views: 653280 },
    { name: 'let', category: 'utility', views: 874324 },
    { name: 'timeout', category: 'utility', views: 643256 }
];


/***/ }),

/***/ "../../../../../src/app/lessons/datepicker/datepicker-lesson.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Basic Datepicker</h2>\n\n<mat-form-field>\n  <input matInput\n         [matDatepicker]=\"myDatepicker\">\n  <mat-datepicker-toggle matSuffix\n                         [for]=\"myDatepicker\"></mat-datepicker-toggle>\n  <mat-datepicker #myDatepicker></mat-datepicker>\n</mat-form-field>\n\n<h2>Start Date</h2>\n\n<mat-form-field>\n  <input matInput\n         [matDatepicker]=\"startDateDatepicker\">\n  <mat-datepicker-toggle matSuffix\n                         [for]=\"startDateDatepicker\"></mat-datepicker-toggle>\n  <mat-datepicker #startDateDatepicker\n                  [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n\n<h2>Starting View</h2>\n\n<mat-form-field>\n  <input matInput\n         [matDatepicker]=\"startViewDatepicker\">\n  <mat-datepicker-toggle matSuffix\n                         [for]=\"startViewDatepicker\"></mat-datepicker-toggle>\n  <mat-datepicker #startViewDatepicker\n                  startView=\"year\"\n                  [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n\n\n<h2>Touch UI</h2>\n\n<mat-form-field>\n  <input matInput\n         [matDatepicker]=\"touchUIDatepicker\">\n  <mat-datepicker-toggle matSuffix\n                         [for]=\"touchUIDatepicker\"></mat-datepicker-toggle>\n  <mat-datepicker #touchUIDatepicker\n                  [touchUi]=\"true\"\n                  [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n\n\n<h2>Min / Max</h2>\n\n<mat-form-field>\n  <input matInput\n         [matDatepicker]=\"validationDatepicker\"\n         [min]=\"minDate\"\n         [max]=\"maxDate\">\n  <mat-datepicker-toggle matSuffix\n                         [for]=\"validationDatepicker\"></mat-datepicker-toggle>\n  <mat-datepicker #validationDatepicker\n                  [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "../../../../../src/app/lessons/datepicker/datepicker-lesson.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  margin-top: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lessons/datepicker/datepicker-lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerLessonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as moment from 'moment';
var DatepickerLessonComponent = (function () {
    function DatepickerLessonComponent(_platform) {
        this._platform = _platform;
        this.startDate = new Date(2017, 10, 26);
        this.minDate = new Date(2017, 9, 1);
        this.maxDate = new Date(2017, 11, 24);
    }
    Object.defineProperty(DatepickerLessonComponent.prototype, "isMobile", {
        get: function () {
            return this._platform.ANDROID || this._platform.IOS;
        },
        enumerable: true,
        configurable: true
    });
    DatepickerLessonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-datepicker-lesson',
            template: __webpack_require__("../../../../../src/app/lessons/datepicker/datepicker-lesson.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lessons/datepicker/datepicker-lesson.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_cdk_platform__["a" /* Platform */]])
    ], DatepickerLessonComponent);
    return DatepickerLessonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/datepicker/datepicker-lesson.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerLessonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datepicker_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/datepicker/datepicker-lesson.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { MatMomentDateModule } from '@angular/material-moment-adapter';


var DatepickerLessonModule = (function () {
    function DatepickerLessonModule() {
    }
    DatepickerLessonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__datepicker_lesson_component__["a" /* DatepickerLessonComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_cdk_platform__["b" /* PlatformModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */]
                /*
                 * If you wish to use momentjs dates rather than native JS dates
                 * include the below module:
                 */
                // MatMomentDateModule
            ]
        })
    ], DatepickerLessonModule);
    return DatepickerLessonModule;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/dialogs/dialog-lesson.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  margin-top: 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lessons/dialogs/dialog-lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogLessonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_filter__ = __webpack_require__("../../../../rxjs/_esm5/operators/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DialogLessonComponent = (function () {
    function DialogLessonComponent(dialog) {
        this.dialog = dialog;
    }
    DialogLessonComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(DialogComponent, {
            data: 'email'
        });
        dialogRef
            .afterClosed()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_filter__["a" /* filter */])(function (r) { return !!r; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_mergeMap__["a" /* mergeMap */])(function (_) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])('network request here'); }))
            .subscribe(console.log);
    };
    DialogLessonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-dialog-lesson',
            template: "\n    <button mat-button (click)=\"openDialog()\"> Open Dialog </button>\n  ",
            styles: [__webpack_require__("../../../../../src/app/lessons/dialogs/dialog-lesson.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]])
    ], DialogLessonComponent);
    return DialogLessonComponent;
}());

// Basic example of dynamic dialog
var DialogComponent = (function () {
    function DialogComponent(itemType) {
        this.itemType = itemType;
    }
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-dialog',
            template: "\n    <h2 mat-dialog-title> Delete {{itemType}} </h2>\n    <mat-dialog-content>\n      Are you sure you want to delete this {{itemType}}?\n    </mat-dialog-content>\n    <mat-dialog-actions>\n      <button mat-button mat-dialog-close> Cancel </button>\n      <button mat-button [mat-dialog-close]=\"true\"> Yes </button>\n    </mat-dialog-actions>\n  "
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [String])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/dialogs/dialog-lesson.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogLessonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_dialog_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/dialogs/dialog-lesson.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DialogLessonModule = (function () {
    function DialogLessonModule() {
    }
    DialogLessonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dialogs_dialog_lesson_component__["b" /* DialogLessonComponent */], __WEBPACK_IMPORTED_MODULE_3__dialogs_dialog_lesson_component__["a" /* DialogComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */]]
        })
    ], DialogLessonModule);
    return DialogLessonModule;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/icons/icons-lesson.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Basic Icons</h2>\n<mat-icon>check_circle</mat-icon>\n<mat-icon>list</mat-icon>\n<mat-icon>close</mat-icon>\n\n<h2>Icon Color</h2>\n<mat-icon color=\"primary\">check_circle</mat-icon>\n<mat-icon color=\"accent\">list</mat-icon>\n<mat-icon color=\"warn\">close</mat-icon>\n\n<h2>Icon Buttons</h2>\n<button mat-icon-button>\n  <mat-icon color=\"primary\">check_circle</mat-icon>\n</button>\n<button mat-icon-button>\n  <mat-icon color=\"accent\">list</mat-icon>\n</button>\n<button mat-icon-button>\n  <mat-icon color=\"warn\">close</mat-icon>\n</button>\n\n<h2>Icon FAB</h2>\n<button mat-fab color=\"primary\">\n  <mat-icon>check_circle</mat-icon>\n</button>\n<button mat-fab color=\"accent\">\n  <mat-icon>list</mat-icon>\n</button>\n<button mat-fab color=\"warn\">\n  <mat-icon>close</mat-icon>\n</button>\n\n<h2>Custom Icons</h2>\n<button mat-fab color=\"primary\">\n  <mat-icon svgIcon=\"custom-camera\"></mat-icon>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/lessons/icons/icons-lesson.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  margin-top: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lessons/icons/icons-lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsLessonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconsLessonComponent = (function () {
    function IconsLessonComponent(_iconRegistry, _sanitizer) {
        this._iconRegistry = _iconRegistry;
        this._sanitizer = _sanitizer;
        _iconRegistry.addSvgIcon('custom-camera', _sanitizer.bypassSecurityTrustResourceUrl('assets/custom-icons/custom-camera.svg'));
    }
    IconsLessonComponent.prototype.ngOnInit = function () { };
    IconsLessonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-icons-lesson',
            template: __webpack_require__("../../../../../src/app/lessons/icons/icons-lesson.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lessons/icons/icons-lesson.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], IconsLessonComponent);
    return IconsLessonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/icons/icons-lesson.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsLessonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/icons/icons-lesson.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IconsLessonModule = (function () {
    function IconsLessonModule() {
    }
    IconsLessonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__icons_lesson_component__["a" /* IconsLessonComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */]]
        })
    ], IconsLessonModule);
    return IconsLessonModule;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/inputs/inputs-lesson.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Basic Input</h2>\n<mat-form-field>\n  <input matInput\n         placeholder=\"Hello World\">\n</mat-form-field>\n\n<h2>FloatPlaceholder Always</h2>\n<mat-form-field floatPlaceholder=\"always\">\n  <input matInput\n         placeholder=\"Hello World\">\n</mat-form-field>\n\n<h2>FloatPlaceholder Never</h2>\n<mat-form-field floatPlaceholder=\"never\">\n  <input matInput\n         type=\"email\"\n         placeholder=\"Hello World\">\n</mat-form-field>\n\n<h2>With TextArea</h2>\n<mat-form-field>\n  <textarea matInput\n            placeholder=\"Hello World\"></textarea>\n</mat-form-field>\n\n<h2>Inputs with hints</h2>\n<mat-form-field>\n  <input matInput\n         ngModel\n         #demoInput=\"ngModel\"\n         placeholder=\"Hello World\">\n  <mat-hint>{{demoInput.value?.length}}/30</mat-hint>\n</mat-form-field>\n\n<h2>Inputs with multiple hints</h2>\n<mat-form-field>\n  <input matInput\n         placeholder=\"Hello World\">\n  <mat-hint align=\"start\">No special characters allowed.</mat-hint>\n  <mat-hint align=\"end\">{{demoInput.value?.length}}/30</mat-hint>\n</mat-form-field>\n\n\n<h2>Inputs with errors</h2>\n<mat-form-field>\n  <input matInput\n         [(ngModel)]=\"password\"\n         #passwordInput=\"ngModel\"\n         placeholder=\"Password\"\n         minlength=\"6\"\n         maxlength=\"16\"\n         required>\n  <mat-hint align=\"start\">Password must be atleast 6 characters</mat-hint>\n  <mat-hint align=\"end\">{{password.length}}/16</mat-hint>\n  <mat-error *ngIf=\"passwordInput.errors?.required\">Password is required.</mat-error>\n  <mat-error *ngIf=\"passwordInput.errors?.minlength\">6 characters minimum.</mat-error>\n</mat-form-field>\n\n<h2>Custom Error Strategies</h2>\n<mat-form-field>\n  <input matInput\n         [(ngModel)]=\"name\"\n         [errorStateMatcher]=\"customErrorStateMatcher\"\n         #nameInput=\"ngModel\"\n         placeholder=\"User name\"\n         minlength=\"6\"\n         maxlength=\"16\"\n         required>\n  <mat-hint align=\"start\">Name must be atleast 6 characters</mat-hint>\n  <mat-hint align=\"end\">{{name.length}}/16</mat-hint>\n  <mat-error *ngIf=\"nameInput.errors?.required\">Name is required.</mat-error>\n  <mat-error *ngIf=\"nameInput.errors?.minlength\">6 characters minimum.</mat-error>\n</mat-form-field>\n"

/***/ }),

/***/ "../../../../../src/app/lessons/inputs/inputs-lesson.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  margin-top: 12px; }\n\nmat-form-field {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lessons/inputs/inputs-lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CustomErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsLessonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomErrorStateMatcher = (function () {
    function CustomErrorStateMatcher() {
    }
    CustomErrorStateMatcher.prototype.isErrorState = function (control, form) {
        return !!(control && control.invalid && control.dirty);
    };
    return CustomErrorStateMatcher;
}());

var InputsLessonComponent = (function () {
    function InputsLessonComponent(customErrorStateMatcher) {
        this.customErrorStateMatcher = customErrorStateMatcher;
        this.password = '';
        this.name = '';
    }
    InputsLessonComponent.prototype.ngOnInit = function () { };
    InputsLessonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-inputs-lesson',
            template: __webpack_require__("../../../../../src/app/lessons/inputs/inputs-lesson.component.html"),
            providers: [CustomErrorStateMatcher],
            styles: [__webpack_require__("../../../../../src/app/lessons/inputs/inputs-lesson.component.scss")]
        }),
        __metadata("design:paramtypes", [CustomErrorStateMatcher])
    ], InputsLessonComponent);
    return InputsLessonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/inputs/inputs-lesson.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsLessonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputs_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/inputs/inputs-lesson.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var InputsLessonModule = (function () {
    function InputsLessonModule() {
    }
    InputsLessonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__inputs_lesson_component__["a" /* InputsLessonComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatInputModule */]]
            // If you wish to globally configure placeholder options
            // providers: [
            //   { provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'never' } }
            // ]
        })
    ], InputsLessonModule);
    return InputsLessonModule;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/lessons.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LESSON_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lists_list_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/lists/list-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons_icons_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/icons/icons-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputs_inputs_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/inputs/inputs-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbars_toolbar_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/toolbars/toolbar-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_loading_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/loading/loading-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theming_theming_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/theming/theming-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__snackbar_snackbar_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/snackbar/snackbar-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datatable_datatable_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/datatable/datatable-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialogs_dialog_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/dialogs/dialog-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__datepicker_datepicker_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/datepicker/datepicker-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tabs_tabs_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/tabs/tabs-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tabs_tab_routes_tab_route_one_component__ = __webpack_require__("../../../../../src/app/lessons/tabs/tab-routes/tab-route-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabs_tab_routes_tab_route_two_component__ = __webpack_require__("../../../../../src/app/lessons/tabs/tab-routes/tab-route-two.component.ts");













var LESSON_ROUTES = [
    {
        path: 'icons',
        component: __WEBPACK_IMPORTED_MODULE_1__icons_icons_lesson_component__["a" /* IconsLessonComponent */],
        data: {
            shortName: 'Icons',
            lessonName: 'Utilize Material Design Icons for App Icons and Buttons'
        }
    },
    {
        path: 'toolbars',
        component: __WEBPACK_IMPORTED_MODULE_3__toolbars_toolbar_lesson_component__["a" /* ToolbarLessonComponent */],
        data: {
            shortName: 'Toolbars',
            lessonName: 'Utilize Material Design Toolbars for Application Headers'
        }
    },
    {
        path: 'inputs',
        component: __WEBPACK_IMPORTED_MODULE_2__inputs_inputs_lesson_component__["a" /* InputsLessonComponent */],
        data: {
            shortName: 'Inputs',
            lessonName: 'Manage User Input with Material Design Inputs and AutoComplete'
        }
    },
    {
        path: 'lists',
        component: __WEBPACK_IMPORTED_MODULE_0__lists_list_lesson_component__["a" /* ListLessonComponent */],
        data: {
            shortName: 'Lists',
            lessonName: 'Lists'
        }
    },
    {
        path: 'loading',
        component: __WEBPACK_IMPORTED_MODULE_4__loading_loading_lesson_component__["a" /* LoadingLessonComponent */],
        data: {
            shortName: 'Loading',
            lessonName: 'Loading Lesson'
        }
    },
    {
        path: 'snackbar',
        component: __WEBPACK_IMPORTED_MODULE_6__snackbar_snackbar_lesson_component__["a" /* SnackbarLessonComponent */],
        data: {
            shortName: 'Snackbar',
            lessonName: 'Snackbar Lesson'
        }
    },
    {
        path: 'dialog',
        component: __WEBPACK_IMPORTED_MODULE_8__dialogs_dialog_lesson_component__["b" /* DialogLessonComponent */],
        data: {
            shortName: 'Dialog',
            lessonName: 'Dialog Lesson'
        }
    },
    {
        path: 'datepicker',
        component: __WEBPACK_IMPORTED_MODULE_9__datepicker_datepicker_lesson_component__["a" /* DatepickerLessonComponent */],
        data: {
            shortName: 'Datepicker',
            lessonName: 'Datepicker Lesson'
        }
    },
    {
        path: 'datatable',
        component: __WEBPACK_IMPORTED_MODULE_7__datatable_datatable_lesson_component__["a" /* DataTableLessonComponent */],
        data: {
            shortName: 'Data Table',
            lessonName: 'Data Table Lesson'
        }
    },
    {
        path: 'theming',
        component: __WEBPACK_IMPORTED_MODULE_5__theming_theming_lesson_component__["a" /* ThemingLessonComponent */],
        data: {
            shortName: 'Theming',
            lessonName: 'Theming Lesson'
        }
    },
    {
        path: 'tabs',
        component: __WEBPACK_IMPORTED_MODULE_10__tabs_tabs_lesson_component__["a" /* TabsLessonComponent */],
        data: {
            shortName: 'Tabs',
            lessonName: 'Tabs Lesson'
        },
        children: [
            {
                path: 'tab-route-one',
                component: __WEBPACK_IMPORTED_MODULE_11__tabs_tab_routes_tab_route_one_component__["a" /* TabRouteOneComponent */]
            },
            {
                path: 'tab-route-two',
                component: __WEBPACK_IMPORTED_MODULE_12__tabs_tab_routes_tab_route_two_component__["a" /* TabRouteTwoComponent */]
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'tab-route-one'
            }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/lessons/lists/list-lesson.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <h4 matSubheader> List 1 </h4>\n  <mat-list-item *ngFor=\"let item of items\">\n    <h4 matLine> {{ item.name }} </h4>\n    <p matLine> {{ item.description }} </p>\n  </mat-list-item>\n  <mat-divider> </mat-divider>\n  <h4 matSubheader> List 2 </h4>\n  <mat-list-item *ngFor=\"let item of items\">\n    <h4 matLine> {{ item.name }} </h4>\n    <p matLine> {{ item.description }} </p>\n  </mat-list-item>\n</mat-list>\n<mat-selection-list #selectList>\n  <mat-list-option *ngFor=\"let item of items\"\n                   checkboxPosition=\"left\"\n                   (click)=\"logChange(selectList.selectedOptions.selected)\">\n    {{ item.name }}\n  </mat-list-option>\n</mat-selection-list>\n"

/***/ }),

/***/ "../../../../../src/app/lessons/lists/list-lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListLessonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListLessonComponent = (function () {
    function ListLessonComponent() {
        this.items = [
            { name: 'Item 1', description: 'This is a description' },
            { name: 'Item 2', description: 'Another description!' }
        ];
    }
    ListLessonComponent.prototype.logChange = function (event) {
        console.log(event);
    };
    ListLessonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-list-lesson',
            template: __webpack_require__("../../../../../src/app/lessons/lists/list-lesson.component.html")
        })
    ], ListLessonComponent);
    return ListLessonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/lists/list-lesson.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListLessonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/lists/list-lesson.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListLessonModule = (function () {
    function ListLessonModule() {
    }
    ListLessonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__list_lesson_component__["a" /* ListLessonComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */]]
        })
    ], ListLessonModule);
    return ListLessonModule;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/loading/loading-lesson.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Progress Bars</h2>\n\n<h3>Determinate (Default)</h3>\n<mat-progress-bar [value]=\"loadingPercent\"></mat-progress-bar>\n<mat-progress-bar [value]=\"loadingPercent\"\n                  color=\"accent\">\n</mat-progress-bar>\n<mat-progress-bar [value]=\"loadingPercent\"\n                  color=\"warn\">\n</mat-progress-bar>\n\n<h3>Indeterminate</h3>\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\n<h3>Query</h3>\n<mat-progress-bar [mode]=\"queryMode\"\n                  [value]=\"queryValue\"></mat-progress-bar>\n\n<h3>Buffer</h3>\n<mat-progress-bar mode=\"buffer\"\n                  [value]=\"loadingPercent\"\n                  [bufferValue]=\"currentPlayback\">\n</mat-progress-bar>\n\n<h2>Spinners</h2>\n\n<h3>Indeterminate (Default)</h3>\n<mat-spinner></mat-spinner>\n<mat-spinner color=\"accent\"></mat-spinner>\n<mat-spinner color=\"warn\"></mat-spinner>\n\n<h3>Determinate</h3>\n<mat-progress-spinner [value]=\"loadingPercent\">\n</mat-progress-spinner>\n\n<h3>Determinate (fade out)</h3>\n<mat-progress-spinner *ngIf=\"loadingPercent < 100\"\n                      [@fadeOut]=\"'in'\"\n                      [value]=\"loadingPercent\">\n</mat-progress-spinner>\n"

/***/ }),

/***/ "../../../../../src/app/lessons/loading/loading-lesson.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  margin-top: 12px; }\n\nmat-progress-bar {\n  margin-bottom: 20px; }\n\nmat-spinner {\n  margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lessons/loading/loading-lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingLessonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_concat__ = __webpack_require__("../../../../rxjs/_esm5/observable/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoadingLessonComponent = (function () {
    function LoadingLessonComponent() {
        this.loadingPercent = 0;
        this.currentPlayback = 0;
        this.queryValue = 0;
        this.queryMode = 'query';
    }
    LoadingLessonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingProgress(500).subscribe(function (i) { return (_this.loadingPercent = i); });
        this.loadingProgress(250).subscribe(function (i) { return (_this.currentPlayback = i); });
        // wait 5 seconds then switch mode to determinate, simulating waiting for response then download
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_concat__["a" /* concat */])(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_interval__["a" /* interval */])(5000).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["f" /* take */])(1), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["i" /* tap */])(function (_) { return (_this.queryMode = 'determinate'); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* ignoreElements */])()), this.loadingProgress(500)).subscribe(function (i) { return (_this.queryValue = i); });
    };
    LoadingLessonComponent.prototype.loadingProgress = function (speed) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_interval__["a" /* interval */])(speed).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* map */])(function (i) { return i * 10; }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["h" /* takeWhile */])(function (i) { return i <= 100; }));
    };
    LoadingLessonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-loading-lesson',
            template: __webpack_require__("../../../../../src/app/lessons/loading/loading-lesson.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('fadeOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("1s .5s ease-out", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                            opacity: 0
                        }))
                    ])
                ])
            ],
            styles: [__webpack_require__("../../../../../src/app/lessons/loading/loading-lesson.component.scss")]
        })
    ], LoadingLessonComponent);
    return LoadingLessonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/loading/loading-lesson.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingLessonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/loading/loading-lesson.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoadingLessonModule = (function () {
    function LoadingLessonModule() {
    }
    LoadingLessonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__loading_lesson_component__["a" /* LoadingLessonComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatProgressSpinnerModule */]]
        })
    ], LoadingLessonModule);
    return LoadingLessonModule;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/snackbar/custom-snackbar-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomSnackBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CustomSnackBarComponent = (function () {
    function CustomSnackBarComponent(message) {
        this.message = message;
    }
    CustomSnackBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-custom-snackbar',
            template: "<span>{{message}}</span>"
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_SNACK_BAR_DATA */])),
        __metadata("design:paramtypes", [String])
    ], CustomSnackBarComponent);
    return CustomSnackBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/snackbar/snackbar-lesson.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input #messageInput\n         placeholder=\"Enter Message\"\n         matInput>\n</mat-form-field>\n\n<button mat-raised-button\n        (click)=\"openSnackbar(messageInput.value)\">\n  Open Snackbar\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/lessons/snackbar/snackbar-lesson.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  margin-top: 12px; }\n\nmat-form-field {\n  margin-top: 12px;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lessons/snackbar/snackbar-lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackbarLessonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_snackbar_element_component__ = __webpack_require__("../../../../../src/app/lessons/snackbar/custom-snackbar-element.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SnackbarLessonComponent = (function () {
    function SnackbarLessonComponent(_snackBar) {
        this._snackBar = _snackBar;
    }
    SnackbarLessonComponent.prototype.openSnackbar = function (message) {
        var snackBar = this._snackBar.openFromComponent(__WEBPACK_IMPORTED_MODULE_2__custom_snackbar_element_component__["a" /* CustomSnackBarComponent */], {
            data: message,
            duration: 3000
        });
        snackBar.afterDismissed().subscribe(function (_) {
            console.log('AFTER DISMISS!');
        });
        snackBar.onAction().subscribe(function (_) {
            console.log('AFTER ACTION!');
        });
    };
    SnackbarLessonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-snackbar-lesson',
            template: __webpack_require__("../../../../../src/app/lessons/snackbar/snackbar-lesson.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lessons/snackbar/snackbar-lesson.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */]])
    ], SnackbarLessonComponent);
    return SnackbarLessonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/snackbar/snackbar-lesson.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackbarLessonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__snackbar_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/snackbar/snackbar-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_snackbar_element_component__ = __webpack_require__("../../../../../src/app/lessons/snackbar/custom-snackbar-element.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SnackbarLessonModule = (function () {
    function SnackbarLessonModule() {
    }
    SnackbarLessonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__snackbar_lesson_component__["a" /* SnackbarLessonComponent */], __WEBPACK_IMPORTED_MODULE_4__custom_snackbar_element_component__["a" /* CustomSnackBarComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatInputModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__custom_snackbar_element_component__["a" /* CustomSnackBarComponent */]]
        })
    ], SnackbarLessonModule);
    return SnackbarLessonModule;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/tabs/tab-routes/tab-route-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabRouteOneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabRouteOneComponent = (function () {
    function TabRouteOneComponent() {
    }
    TabRouteOneComponent.prototype.ngOnInit = function () { };
    TabRouteOneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-tab-route-one',
            template: "\n    <h2> First Tab Content </h2>\n    <p>\n    Lorem ipsum dolor sit amet,\n    consectetur adipiscing elit.\n    Donec erat elit, hendrerit quis ex sed, tincidunt imperdiet purus.\n    Ut quis lacinia urna. Nam et ex vitae metus tincidunt tempus.\n    </p>\n "
        })
    ], TabRouteOneComponent);
    return TabRouteOneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/tabs/tab-routes/tab-route-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabRouteTwoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabRouteTwoComponent = (function () {
    function TabRouteTwoComponent() {
    }
    TabRouteTwoComponent.prototype.ngOnInit = function () { };
    TabRouteTwoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-tab-route-two',
            template: "\n    <h2> Second Tab Content </h2>\n    <p>\n    Nam sit amet tempor magna, quis rhoncus erat.\n    Aenean varius risus aliquam risus ullamcorper faucibus ac imperdiet ante.\n    </p>\n  "
        })
    ], TabRouteTwoComponent);
    return TabRouteTwoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/tabs/tabs-lesson.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Tabs with routes -->\n<nav mat-tab-nav-bar>\n  <a *ngFor=\"let tab of tabRoutes; let i = index;\"\n     mat-tab-link\n     [routerLink]=\"tab.path\"\n     routerLinkActive\n     #rla=\"routerLinkActive\"\n     [active]=\"rla.isActive\">\n    Tab {{ i + 1 }}\n  </a>\n</nav>\n\n<router-outlet></router-outlet>\n\n<!-- <h2>Basic Tabs</h2>\n<mat-tab-group>\n  <mat-tab label=\"First Tab\"> Some Content </mat-tab>\n  <mat-tab label=\"Second Tab\"> More Content </mat-tab>\n</mat-tab-group>\n\n<h2>Tabs with Templates</h2>\n<mat-tab-group>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      Custom\n      <strong>Tab</strong>\n    </ng-template>\n    <p> Some Content </p>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon>check_circle</mat-icon>\n    </ng-template>\n    <p> More Content </p>\n  </mat-tab>\n</mat-tab-group> -->\n"

/***/ }),

/***/ "../../../../../src/app/lessons/tabs/tabs-lesson.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lessons/tabs/tabs-lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsLessonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lessons_routes__ = __webpack_require__("../../../../../src/app/lessons/lessons.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TabsLessonComponent = (function () {
    function TabsLessonComponent() {
        this.tabRoutes = __WEBPACK_IMPORTED_MODULE_1__lessons_routes__["a" /* LESSON_ROUTES */].filter(function (r) { return r.path === 'tabs'; })
            .map(function (_a) {
            var children = _a.children;
            return children;
        })
            .reduce(function (acc, curr) { return acc.concat(curr); }, [])
            .filter(function (_a) {
            var path = _a.path;
            return !!path;
        });
    }
    TabsLessonComponent.prototype.ngOnInit = function () { };
    TabsLessonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-tabs-lesson',
            template: __webpack_require__("../../../../../src/app/lessons/tabs/tabs-lesson.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lessons/tabs/tabs-lesson.component.scss")]
        })
    ], TabsLessonComponent);
    return TabsLessonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/tabs/tabs-lesson.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsLessonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/tabs/tabs-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tab_routes_tab_route_one_component__ = __webpack_require__("../../../../../src/app/lessons/tabs/tab-routes/tab-route-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tab_routes_tab_route_two_component__ = __webpack_require__("../../../../../src/app/lessons/tabs/tab-routes/tab-route-two.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TabsLessonModule = (function () {
    function TabsLessonModule() {
    }
    TabsLessonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__tabs_lesson_component__["a" /* TabsLessonComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tab_routes_tab_route_one_component__["a" /* TabRouteOneComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tab_routes_tab_route_two_component__["a" /* TabRouteTwoComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatIconModule */]]
        })
    ], TabsLessonModule);
    return TabsLessonModule;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/theming/theming-lesson.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Themable components accept an input of 'primary', 'accent', or 'warn'.\n  These colors correspond to those chosen when you created your app theme.\n  See 'styles.scss' for more details.\n-->\n<mat-toolbar color=\"primary\">\n  Primary\n</mat-toolbar>\n\n<mat-toolbar color=\"accent\">Accent</mat-toolbar>\n<mat-toolbar color=\"warn\">Warn</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/lessons/theming/theming-lesson.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-toolbar {\n  margin-top: 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lessons/theming/theming-lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemingLessonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThemingLessonComponent = (function () {
    function ThemingLessonComponent() {
    }
    ThemingLessonComponent.prototype.ngOnInit = function () { };
    ThemingLessonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-theming-lesson',
            template: __webpack_require__("../../../../../src/app/lessons/theming/theming-lesson.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lessons/theming/theming-lesson.component.scss")]
        })
    ], ThemingLessonComponent);
    return ThemingLessonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/theming/theming-lesson.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemingLessonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theming_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/theming/theming-lesson.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ThemingLessonModule = (function () {
    function ThemingLessonModule() {
    }
    ThemingLessonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__theming_lesson_component__["a" /* ThemingLessonComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatToolbarModule */]]
        })
    ], ThemingLessonModule);
    return ThemingLessonModule;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/toolbars/toolbar-lesson.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Angular material offers elevation helper classes within a range of 0-24,\n  corresponding to the projected height. These can also be applied through\n  the mat-elevation(z) mixin, exposed through '~@angular/material/theming'.\n  This also includes transition mixins should you wish to animate interactions\n  like hover, or mouse clicks on custom components.\n\n  For more: https://material.angular.io/guide/elevation\n  Elevation guide: https://material.io/guidelines/material-design/elevation-shadows.html\n-->\n<mat-toolbar color=\"accent\"\n             class=\"primary-header\"\n             [class.mat-elevation-z4]=\"applyShadow\">\n  <span *ngIf=\"popText\">\n    Structuring Angular Apps with Angular Material Components\n  </span>\n</mat-toolbar>\n<mat-toolbar color=\"accent\"\n             class=\"extended-header\">\n  <span *ngIf=\"!popText\">Material Design Toolbars</span>\n</mat-toolbar>\n<div class=\"lesson-content\">\n  <h2>Toolbar Color Options</h2>\n  <mat-toolbar>No Setting</mat-toolbar>\n  <mat-toolbar color=\"primary\">Primary</mat-toolbar>\n  <mat-toolbar color=\"accent\">Accent</mat-toolbar>\n  <mat-toolbar color=\"warn\">Warn</mat-toolbar>\n\n  <h2>Toolbar Rows</h2>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row color=\"primary\">Primary</mat-toolbar-row>\n    <mat-toolbar-row color=\"accent\">Accent</mat-toolbar-row>\n    <mat-toolbar-row color=\"warn\">Warn</mat-toolbar-row>\n  </mat-toolbar>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lessons/toolbars/toolbar-lesson.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lesson-content {\n  min-height: 1000px;\n  padding: 32px; }\n  .lesson-content h2 {\n    margin-top: 26px; }\n\n.primary-header {\n  position: fixed;\n  top: 0; }\n\n.extended-header {\n  font-size: 34px;\n  padding: 100px 0 48px 32px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lessons/toolbars/toolbar-lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SCROLL_CONTAINER */
/* unused harmony export PRIMARY_TEXT_THRESHOLD */
/* unused harmony export PRIMARY_SHADOW_THRESHOLD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarLessonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_lesson_config_service__ = __webpack_require__("../../../../../src/app/shared/lesson-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SCROLL_CONTAINER = '.mat-drawer-content';
var PRIMARY_TEXT_THRESHOLD = 22;
var PRIMARY_SHADOW_THRESHOLD = 78;
var ToolbarLessonComponent = (function () {
    function ToolbarLessonComponent(_lessonConfigService) {
        this._lessonConfigService = _lessonConfigService;
        this._onDestroy = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this._lessonConfigService.removeStandardRecordingStyles();
    }
    ToolbarLessonComponent.prototype.ngOnInit = function () {
        var _this = this;
        var container = document.querySelector(SCROLL_CONTAINER);
        Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromEvent__["a" /* fromEvent */])(container, 'scroll')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["g" /* takeUntil */])(this._onDestroy))
            .subscribe(function (_) { return _this.determineHeader(container.scrollTop); });
    };
    ToolbarLessonComponent.prototype.determineHeader = function (top) {
        if (top >= PRIMARY_TEXT_THRESHOLD) {
            this.popText = true;
        }
        else {
            this.popText = false;
        }
        if (top >= PRIMARY_SHADOW_THRESHOLD) {
            this.applyShadow = true;
        }
        else {
            this.applyShadow = false;
        }
    };
    ToolbarLessonComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._lessonConfigService.addStandardRecordingStyles();
    };
    ToolbarLessonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egm-toolbar-lesson',
            template: __webpack_require__("../../../../../src/app/lessons/toolbars/toolbar-lesson.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lessons/toolbars/toolbar-lesson.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_lesson_config_service__["a" /* LessonConfigService */]])
    ], ToolbarLessonComponent);
    return ToolbarLessonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lessons/toolbars/toolbar-lesson.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarLessonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbar_lesson_component__ = __webpack_require__("../../../../../src/app/lessons/toolbars/toolbar-lesson.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ToolbarLessonModule = (function () {
    function ToolbarLessonModule() {
    }
    ToolbarLessonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__toolbar_lesson_component__["a" /* ToolbarLessonComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatToolbarModule */]]
        })
    ], ToolbarLessonModule);
    return ToolbarLessonModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/lesson-config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LessonConfigService = (function () {
    function LessonConfigService() {
        this.useStandardRecordingStyles = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](true);
    }
    LessonConfigService.prototype.removeStandardRecordingStyles = function () {
        this.useStandardRecordingStyles.next(false);
    };
    LessonConfigService.prototype.addStandardRecordingStyles = function () {
        this.useStandardRecordingStyles.next(true);
    };
    Object.defineProperty(LessonConfigService.prototype, "shouldUseStandardStyles", {
        get: function () {
            return this.useStandardRecordingStyles.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LessonConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], LessonConfigService);
    return LessonConfigService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map