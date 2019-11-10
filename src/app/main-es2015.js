(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _notification_manager_notification_manager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-manager/notification-manager.component */ "./src/app/notification-manager/notification-manager.component.ts");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "notification-manager");
    } }, directives: [_notification_manager_notification_manager_component__WEBPACK_IMPORTED_MODULE_1__["NotificationManagerComponent"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/app.effects.ts":
/*!********************************!*\
  !*** ./src/app/app.effects.ts ***!
  \********************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./src/app/state.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal.service.ts");







class AppEffects {
    // To use effects we will always need the action stream injected; in
    // some cases it is also helpful to inject the Store itself, with a
    // parameter like:
    // private store: Store<AppState>
    constructor(actions$, modalSvc) {
        this.actions$ = actions$;
        this.modalSvc = modalSvc;
        // This confirmation step could have been added at dispatch
        // instead, but it's cleaner to keep as little business logic
        // in the component as possible. Note that the output is a
        // different type of action; this is necessary to avoid an
        // infinite loop.
        this.ackAll$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_state__WEBPACK_IMPORTED_MODULE_3__["ackAll"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(() => this.modalSvc.confirm('Are you sure?')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => Object(_state__WEBPACK_IMPORTED_MODULE_3__["ackAllSuccess"])())));
    }
}
AppEffects.ɵfac = function AppEffects_Factory(t) { return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"])); };
AppEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppEffects, factory: function (t) { return AppEffects.ɵfac(t); }, providedIn: null });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"] }]; }, null);


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.effects */ "./src/app/app.effects.ts");
/* harmony import */ var _employees_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employees.effects */ "./src/app/employees.effects.ts");
/* harmony import */ var _notification_manager_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notification-manager/employee-list/employee-list.component */ "./src/app/notification-manager/employee-list/employee-list.component.ts");
/* harmony import */ var _notification_manager_notification_manager_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notification-manager/notification-manager.component */ "./src/app/notification-manager/notification-manager.component.ts");
/* harmony import */ var _notification_manager_position_list_position_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification-manager/position-list/position-list.component */ "./src/app/notification-manager/position-list/position-list.component.ts");
/* harmony import */ var _positions_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./positions.effects */ "./src/app/positions.effects.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers.ts");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared-module/shared.module */ "./src/app/shared-module/shared.module.ts");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_13__["ROOT_REDUCERS"], {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictStateSerializability: true,
                    strictActionImmutability: true,
                    strictActionSerializability: true
                }
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot([
                _app_effects__WEBPACK_IMPORTED_MODULE_7__["AppEffects"],
                _employees_effects__WEBPACK_IMPORTED_MODULE_8__["EmployeesEffects"],
                _positions_effects__WEBPACK_IMPORTED_MODULE_12__["PositionsEffects"]
            ]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ maxAge: 50 }),
            _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
        ]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _notification_manager_notification_manager_component__WEBPACK_IMPORTED_MODULE_10__["NotificationManagerComponent"],
        _notification_manager_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeListComponent"],
        _notification_manager_position_list_position_list_component__WEBPACK_IMPORTED_MODULE_11__["PositionListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _notification_manager_notification_manager_component__WEBPACK_IMPORTED_MODULE_10__["NotificationManagerComponent"],
                    _notification_manager_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeListComponent"],
                    _notification_manager_position_list_position_list_component__WEBPACK_IMPORTED_MODULE_11__["PositionListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_13__["ROOT_REDUCERS"], {
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictStateSerializability: true,
                            strictActionImmutability: true,
                            strictActionSerializability: true
                        }
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot([
                        _app_effects__WEBPACK_IMPORTED_MODULE_7__["AppEffects"],
                        _employees_effects__WEBPACK_IMPORTED_MODULE_8__["EmployeesEffects"],
                        _positions_effects__WEBPACK_IMPORTED_MODULE_12__["PositionsEffects"]
                    ]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ maxAge: 50 }),
                    _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/employee-loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/employee-loader.service.ts ***!
  \********************************************/
/*! exports provided: EmployeeLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeLoader", function() { return EmployeeLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



const apiUrl = '/api';
class EmployeeLoader {
    constructor(http) {
        this.http = http;
    }
    getList() {
        return this.http.get(apiUrl + '/employees');
    }
}
EmployeeLoader.ɵfac = function EmployeeLoader_Factory(t) { return new (t || EmployeeLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmployeeLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeLoader, factory: function (t) { return EmployeeLoader.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null);


/***/ }),

/***/ "./src/app/employees.effects.ts":
/*!**************************************!*\
  !*** ./src/app/employees.effects.ts ***!
  \**************************************/
/*! exports provided: EmployeesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesEffects", function() { return EmployeesEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _employees_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees.state */ "./src/app/employees.state.ts");
/* harmony import */ var _employee_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-loader.service */ "./src/app/employee-loader.service.ts");







function toName(employee) {
    return `${employee.first_name} ${employee.last_name}`;
}
class EmployeesEffects {
    constructor(actions$, loader) {
        this.actions$ = actions$;
        this.loader = loader;
        // ROOT_EFFECTS_INIT is a special action that is dispatched at the end of
        // NgRx's initialization process, so this effect executes at application
        // initialization.
        this.init$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ROOT_EFFECTS_INIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.loader.getList()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(employees => Object(_employees_state__WEBPACK_IMPORTED_MODULE_3__["employeesReceived"])({
            employees: {
                currentEmployees: employees.slice(0, 4).map(toName),
                newEmployees: employees.slice(4, 6).map(toName)
            }
        }))));
    }
}
EmployeesEffects.ɵfac = function EmployeesEffects_Factory(t) { return new (t || EmployeesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_employee_loader_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeLoader"])); };
EmployeesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeesEffects, factory: function (t) { return EmployeesEffects.ɵfac(t); }, providedIn: null });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeesEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _employee_loader_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeLoader"] }]; }, null);


/***/ }),

/***/ "./src/app/employees.state.ts":
/*!************************************!*\
  !*** ./src/app/employees.state.ts ***!
  \************************************/
/*! exports provided: ackEmployee, employeesReceived, employeeReducer, getNewEmployees, getCurrentEmployees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ackEmployee", function() { return ackEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employeesReceived", function() { return employeesReceived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employeeReducer", function() { return employeeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewEmployees", function() { return getNewEmployees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentEmployees", function() { return getCurrentEmployees; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/state.ts");


const ackEmployee = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ACK_EMPLOYEE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const employeesReceived = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('EMPLOYEES_RECEIVED', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const defaultEmployeeState = {
    newEmployees: [],
    currentEmployees: []
};
const employeeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(defaultEmployeeState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(ackEmployee, (state, action) => acknowledgeEmployee(state, action.employee)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state__WEBPACK_IMPORTED_MODULE_1__["ackAllSuccess"], state => {
    return {
        currentEmployees: [
            ...state.currentEmployees,
            ...state.newEmployees
        ],
        newEmployees: []
    };
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(employeesReceived, (_state, action) => action.employees));
function acknowledgeEmployee(currentState, employee) {
    const newEmployees = currentState.newEmployees.filter(x => x !== employee);
    const currentEmployees = [
        ...currentState.currentEmployees,
        employee
    ];
    return { newEmployees, currentEmployees };
}
// defensive copy of the data coming out of the store
// createSelector will memoize (cache) the result, meaning it will
// give the same object until the state changes
const getEmployeeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('employees');
const getNewEmployees = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmployeeState, state => [...state.newEmployees]);
const getCurrentEmployees = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmployeeState, state => [...state.currentEmployees]);


/***/ }),

/***/ "./src/app/modal.service.ts":
/*!**********************************!*\
  !*** ./src/app/modal.service.ts ***!
  \**********************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ModalService {
    confirm(message) {
        return window.confirm(message);
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: function (t) { return ModalService.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/notification-manager/employee-list/employee-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/notification-manager/employee-list/employee-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _employees_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../employees.state */ "./src/app/employees.state.ts");
/* harmony import */ var _shared_module_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-module/current-employees/current-employees.component */ "./src/app/shared-module/current-employees/current-employees.component.ts");
/* harmony import */ var _shared_module_new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-module/new-employees/new-employees.component */ "./src/app/shared-module/new-employees/new-employees.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








class EmployeeListComponent {
    constructor(store) {
        this.store = store;
        this.curEmployees = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_employees_state__WEBPACK_IMPORTED_MODULE_2__["getCurrentEmployees"]));
        this.newEmployees = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_employees_state__WEBPACK_IMPORTED_MODULE_2__["getNewEmployees"]));
    }
    ackEmp(employee) {
        this.store.dispatch(Object(_employees_state__WEBPACK_IMPORTED_MODULE_2__["ackEmployee"])({ employee }));
    }
}
EmployeeListComponent.ɵfac = function EmployeeListComponent_Factory(t) { return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
EmployeeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeListComponent, selectors: [["employee-list"]], decls: 12, vars: 6, consts: [[1, "card"], [1, "card-content"], [1, "card-title"], [3, "employeeList"], [3, "newEmpList", "ackEmployee"]], template: function EmployeeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Current Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "current-employees", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "new-employees", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ackEmployee", function EmployeeListComponent_Template_new_employees_ackEmployee_10_listener($event) { return ctx.ackEmp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employeeList", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.curEmployees));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newEmpList", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx.newEmployees));
    } }, directives: [_shared_module_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_3__["CurrentEmployeesComponent"], _shared_module_new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__["NewEmployeesComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'employee-list',
                templateUrl: './employee-list.component.html'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null);


/***/ }),

/***/ "./src/app/notification-manager/notification-manager.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/notification-manager/notification-manager.component.ts ***!
  \************************************************************************/
/*! exports provided: NotificationManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationManagerComponent", function() { return NotificationManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/app/state.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/notification-manager/employee-list/employee-list.component.ts");
/* harmony import */ var _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./position-list/position-list.component */ "./src/app/notification-manager/position-list/position-list.component.ts");






class NotificationManagerComponent {
    constructor(store) {
        this.store = store;
    }
    ackAll() {
        this.store.dispatch(Object(_state__WEBPACK_IMPORTED_MODULE_1__["ackAll"])());
    }
}
NotificationManagerComponent.ɵfac = function NotificationManagerComponent_Factory(t) { return new (t || NotificationManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
NotificationManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationManagerComponent, selectors: [["notification-manager"]], decls: 5, vars: 0, consts: [[1, "two-across"], [1, "btn", 3, "click"]], template: function NotificationManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "employee-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "position-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationManagerComponent_Template_button_click_3_listener($event) { return ctx.ackAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Acknowledge All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"], _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_4__["PositionListComponent"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'notification-manager',
                templateUrl: './notification-manager.component.html'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null);


/***/ }),

/***/ "./src/app/notification-manager/position-list/position-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/notification-manager/position-list/position-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PositionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionListComponent", function() { return PositionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _positions_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../positions.state */ "./src/app/positions.state.ts");
/* harmony import */ var _shared_module_current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-module/current-positions/current-positions.component */ "./src/app/shared-module/current-positions/current-positions.component.ts");
/* harmony import */ var _shared_module_new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-module/new-positions/new-positions.component */ "./src/app/shared-module/new-positions/new-positions.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








class PositionListComponent {
    constructor(store) {
        this.store = store;
        this.curPositions = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_positions_state__WEBPACK_IMPORTED_MODULE_2__["getCurrentPositions"]));
        this.newPositions = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_positions_state__WEBPACK_IMPORTED_MODULE_2__["getNewPositions"]));
    }
    ackPos(position) {
        this.store.dispatch(Object(_positions_state__WEBPACK_IMPORTED_MODULE_2__["ackPosition"])({ position }));
    }
}
PositionListComponent.ɵfac = function PositionListComponent_Factory(t) { return new (t || PositionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
PositionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PositionListComponent, selectors: [["position-list"]], decls: 12, vars: 6, consts: [[1, "card"], [1, "card-content"], [1, "card-title"], [3, "positionList"], [3, "newPosList", "ackPositions"]], template: function PositionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Current Positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "current-positions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New Positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "new-positions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ackPositions", function PositionListComponent_Template_new_positions_ackPositions_10_listener($event) { return ctx.ackPos($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("positionList", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.curPositions));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newPosList", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx.newPositions));
    } }, directives: [_shared_module_current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__["CurrentPositionsComponent"], _shared_module_new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_4__["NewPositionsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PositionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'position-list',
                templateUrl: './position-list.component.html'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null);


/***/ }),

/***/ "./src/app/positions.effects.ts":
/*!**************************************!*\
  !*** ./src/app/positions.effects.ts ***!
  \**************************************/
/*! exports provided: PositionsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsEffects", function() { return PositionsEffects; });
/* harmony import */ var _positions_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positions.state */ "./src/app/positions.state.ts");

const initialPositions = {
    currentPositions: [
        'Copier',
        'Secretary to Customer Design Spec Engineer',
        'Tester',
        'Phone Bank Worker'
    ],
    newPositions: ['Manager', 'Break Room Attendant']
};
class PositionsEffects {
    ngrxOnInitEffects() {
        return Object(_positions_state__WEBPACK_IMPORTED_MODULE_0__["positionsReceived"])({ positions: initialPositions });
    }
}


/***/ }),

/***/ "./src/app/positions.state.ts":
/*!************************************!*\
  !*** ./src/app/positions.state.ts ***!
  \************************************/
/*! exports provided: ackPosition, positionsReceived, positionReducer, getNewPositions, getCurrentPositions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ackPosition", function() { return ackPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionsReceived", function() { return positionsReceived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionReducer", function() { return positionReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewPositions", function() { return getNewPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPositions", function() { return getCurrentPositions; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/state.ts");


const ackPosition = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ACK_POSITION', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const positionsReceived = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('POSITION_RECEIVED', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const defaultPositionState = {
    newPositions: [],
    currentPositions: []
};
const positionReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(defaultPositionState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(ackPosition, (state, action) => acknowledgePosition(action.position, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state__WEBPACK_IMPORTED_MODULE_1__["ackAllSuccess"], state => {
    return {
        currentPositions: [
            ...state.currentPositions,
            ...state.newPositions
        ],
        newPositions: []
    };
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(positionsReceived, (_state, action) => action.positions));
function acknowledgePosition(position, currentState) {
    const newPositions = currentState.newPositions.filter(x => x !== position);
    const currentPositions = [
        ...currentState.currentPositions,
        position
    ];
    return { newPositions, currentPositions };
}
// createSelector will memoize (cache) the result, meaning it will
// give the same object until the state changes
const getPositionState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('positions');
const getNewPositions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPositionState, state => state.newPositions);
const getCurrentPositions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPositionState, state => state.currentPositions);


/***/ }),

/***/ "./src/app/reducers.ts":
/*!*****************************!*\
  !*** ./src/app/reducers.ts ***!
  \*****************************/
/*! exports provided: ROOT_REDUCERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT_REDUCERS", function() { return ROOT_REDUCERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _employees_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees.state */ "./src/app/employees.state.ts");
/* harmony import */ var _positions_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positions.state */ "./src/app/positions.state.ts");



// Register your reducers with NgRx framework in an AOT-compatible way
const ROOT_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Root reducers token', {
    factory: () => ({
        employees: _employees_state__WEBPACK_IMPORTED_MODULE_1__["employeeReducer"],
        positions: _positions_state__WEBPACK_IMPORTED_MODULE_2__["positionReducer"]
    })
});


/***/ }),

/***/ "./src/app/shared-module/current-employees/current-employees.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared-module/current-employees/current-employees.component.ts ***!
  \********************************************************************************/
/*! exports provided: CurrentEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentEmployeesComponent", function() { return CurrentEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function CurrentEmployeesComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r1, " ");
} }
class CurrentEmployeesComponent {
    constructor() {
        this.employeeList = [];
    }
}
CurrentEmployeesComponent.ɵfac = function CurrentEmployeesComponent_Factory(t) { return new (t || CurrentEmployeesComponent)(); };
CurrentEmployeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentEmployeesComponent, selectors: [["current-employees"]], inputs: { employeeList: "employeeList" }, decls: 2, vars: 1, consts: [[1, "collection"], ["class", "collection-item", 4, "ngFor", "ngForOf"], [1, "collection-item"]], template: function CurrentEmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentEmployeesComponent_li_1_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employeeList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentEmployeesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'current-employees',
                templateUrl: './current-employees.component.html'
            }]
    }], null, { employeeList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] });


/***/ }),

/***/ "./src/app/shared-module/current-positions/current-positions.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared-module/current-positions/current-positions.component.ts ***!
  \********************************************************************************/
/*! exports provided: CurrentPositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPositionsComponent", function() { return CurrentPositionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function CurrentPositionsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", position_r3, " ");
} }
class CurrentPositionsComponent {
    constructor() {
        this.positionList = [];
    }
}
CurrentPositionsComponent.ɵfac = function CurrentPositionsComponent_Factory(t) { return new (t || CurrentPositionsComponent)(); };
CurrentPositionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentPositionsComponent, selectors: [["current-positions"]], inputs: { positionList: "positionList" }, decls: 2, vars: 1, consts: [[1, "collection"], ["class", "collection-item", 4, "ngFor", "ngForOf"], [1, "collection-item"]], template: function CurrentPositionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentPositionsComponent_li_1_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.positionList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentPositionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'current-positions',
                templateUrl: './current-positions.component.html'
            }]
    }], null, { positionList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] });


/***/ }),

/***/ "./src/app/shared-module/new-employees/new-employees.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared-module/new-employees/new-employees.component.ts ***!
  \************************************************************************/
/*! exports provided: NewEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmployeesComponent", function() { return NewEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function NewEmployeesComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewEmployeesComponent_li_1_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const employee_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.ack(employee_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Acknowledge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r5, " ");
} }
class NewEmployeesComponent {
    constructor() {
        this.newEmpList = [];
        this.ackEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ack(employee) {
        this.ackEmployee.emit(employee);
    }
}
NewEmployeesComponent.ɵfac = function NewEmployeesComponent_Factory(t) { return new (t || NewEmployeesComponent)(); };
NewEmployeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewEmployeesComponent, selectors: [["new-employees"]], inputs: { newEmpList: "newEmpList" }, outputs: { ackEmployee: "ackEmployee" }, decls: 2, vars: 1, consts: [[1, "collection"], ["class", "collection-item", 4, "ngFor", "ngForOf"], [1, "collection-item"], [1, "btn", 3, "click"]], template: function NewEmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewEmployeesComponent_li_1_Template, 4, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newEmpList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewEmployeesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'new-employees',
                templateUrl: './new-employees.component.html'
            }]
    }], null, { newEmpList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ackEmployee: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] });


/***/ }),

/***/ "./src/app/shared-module/new-positions/new-positions.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared-module/new-positions/new-positions.component.ts ***!
  \************************************************************************/
/*! exports provided: NewPositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPositionsComponent", function() { return NewPositionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function NewPositionsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPositionsComponent_li_1_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const position_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.ack(position_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Acknowledge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", position_r9, " ");
} }
class NewPositionsComponent {
    constructor() {
        this.newPosList = [];
        this.ackPositions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ack(position) {
        this.ackPositions.emit(position);
    }
}
NewPositionsComponent.ɵfac = function NewPositionsComponent_Factory(t) { return new (t || NewPositionsComponent)(); };
NewPositionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewPositionsComponent, selectors: [["new-positions"]], inputs: { newPosList: "newPosList" }, outputs: { ackPositions: "ackPositions" }, decls: 2, vars: 1, consts: [[1, "collection"], ["class", "collection-item", 4, "ngFor", "ngForOf"], [1, "collection-item"], [1, "btn", 3, "click"]], template: function NewPositionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewPositionsComponent_li_1_Template, 4, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newPosList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewPositionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'new-positions',
                templateUrl: './new-positions.component.html'
            }]
    }], null, { newPosList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ackPositions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] });


/***/ }),

/***/ "./src/app/shared-module/shared.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared-module/shared.module.ts ***!
  \************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current-employees/current-employees.component */ "./src/app/shared-module/current-employees/current-employees.component.ts");
/* harmony import */ var _current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./current-positions/current-positions.component */ "./src/app/shared-module/current-positions/current-positions.component.ts");
/* harmony import */ var _new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-employees/new-employees.component */ "./src/app/shared-module/new-employees/new-employees.component.ts");
/* harmony import */ var _new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-positions/new-positions.component */ "./src/app/shared-module/new-positions/new-positions.component.ts");







const components = [
    _current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_2__["CurrentEmployeesComponent"],
    _current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__["CurrentPositionsComponent"],
    _new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__["NewEmployeesComponent"],
    _new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_5__["NewPositionsComponent"]
];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_2__["CurrentEmployeesComponent"],
        _current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__["CurrentPositionsComponent"],
        _new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__["NewEmployeesComponent"],
        _new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_5__["NewPositionsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_2__["CurrentEmployeesComponent"],
        _current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__["CurrentPositionsComponent"],
        _new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__["NewEmployeesComponent"],
        _new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_5__["NewPositionsComponent"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                declarations: components,
                exports: components
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/state.ts":
/*!**************************!*\
  !*** ./src/app/state.ts ***!
  \**************************/
/*! exports provided: ackAll, ackAllSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ackAll", function() { return ackAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ackAllSuccess", function() { return ackAllSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const ackAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ACK_ALL');
const ackAllSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ACK_ALL_SUCCESS');


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
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kcordes/projects/Ang/angular-class-material/abc/AOT-SKIP-cli/sandbox/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map