(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/bootstrap.bundle */ "./assets/js/bootstrap.bundle.js");
/* harmony import */ var _js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application


// import bootstrap js


/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/bootstrap.bundle.js":
/*!***************************************!*\
  !*** ./assets/js/bootstrap.bundle.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
__webpack_require__(/*! core-js/modules/es.global-this.js */ "./node_modules/core-js/modules/es.global-this.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.number.parse-float.js */ "./node_modules/core-js/modules/es.number.parse-float.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
__webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
__webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
__webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-names.js */ "./node_modules/core-js/modules/es.object.get-own-property-names.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");
__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.array.every.js */ "./node_modules/core-js/modules/es.array.every.js");
__webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap v5.3.0-alpha2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function () {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var _KEY_TO_DIRECTION;
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000;
  var TRANSITION_END = 'transitionend';

  /**
   * Properly escape IDs selectors to handle weird IDs
   * @param {string} selector
   * @returns {string}
   */
  var parseSelector = function parseSelector(selector) {
    if (selector && window.CSS && window.CSS.escape) {
      // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
      selector = selector.replace(/#([^\s"#']+)/g, function (match, id) {
        return "#".concat(CSS.escape(id));
      });
    }
    return selector;
  };

  // Shout-out Angus Croll (https://goo.gl/pxwQGp)
  var toType = function toType(object) {
    if (object === null || object === undefined) {
      return "".concat(object);
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };

  /**
   * Public Util API
   */

  var getUID = function getUID(prefix) {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    }

    // Get transition-duration of the element
    var _window$getComputedSt = window.getComputedStyle(element),
      transitionDuration = _window$getComputedSt.transitionDuration,
      transitionDelay = _window$getComputedSt.transitionDelay;
    var floatTransitionDuration = Number.parseFloat(transitionDuration);
    var floatTransitionDelay = Number.parseFloat(transitionDelay);

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = function triggerTransitionEnd(element) {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement$1 = function isElement$1(object) {
    if (!object || _typeof(object) !== 'object') {
      return false;
    }
    if (typeof object.jquery !== 'undefined') {
      object = object[0];
    }
    return typeof object.nodeType !== 'undefined';
  };
  var getElement = function getElement(object) {
    // it's a jQuery object or a node element
    if (isElement$1(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === 'string' && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  var isVisible = function isVisible(element) {
    if (!isElement$1(element) || element.getClientRects().length === 0) {
      return false;
    }
    var elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
    // Handle `details` element as its content may falsie appear visible when it is closed
    var closedDetails = element.closest('details:not([open])');
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      var summary = element.closest('summary');
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = function isDisabled(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains('disabled')) {
      return true;
    }
    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }
    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };
  var findShadowRoot = function findShadowRoot(element) {
    if (!document.documentElement.attachShadow) {
      return null;
    }

    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
      var root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }

    // when we don't find a shadow root
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  var noop = function noop() {};

  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */
  var reflow = function reflow(element) {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };

  var getjQuery = function getjQuery() {
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = function onDOMContentLoaded(callback) {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', function () {
          for (var _i2 = 0, _DOMContentLoadedCall = DOMContentLoadedCallbacks; _i2 < _DOMContentLoadedCall.length; _i2++) {
            var _callback = _DOMContentLoadedCall[_i2];
            _callback();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = function isRTL() {
    return document.documentElement.dir === 'rtl';
  };
  var defineJQueryPlugin = function defineJQueryPlugin(plugin) {
    onDOMContentLoaded(function () {
      var $ = getjQuery();
      /* istanbul ignore if */
      if ($) {
        var name = plugin.NAME;
        var JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = function () {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = function execute(possibleCallback) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : possibleCallback;
    return typeof possibleCallback === 'function' ? possibleCallback.apply(void 0, _toConsumableArray(args)) : defaultValue;
  };
  var executeAfterTransition = function executeAfterTransition(callback, transitionElement) {
    var waitForTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    var durationPadding = 5;
    var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    var called = false;
    var handler = function handler(_ref6) {
      var target = _ref6.target;
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(function () {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };

  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */
  var getNextActiveElement = function getNextActiveElement(list, activeElement, shouldGetNext, isCycleAllowed) {
    var listLength = list.length;
    var index = list.indexOf(activeElement);

    // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {}; // Events storage
  var uidEvent = 1;
  var customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

  /**
   * Private methods
   */

  function makeEventUid(element, uid) {
    return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    var uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      var domElements = element.querySelectorAll(selector);
      for (var target = event.target; target && target !== this; target = target.parentNode) {
        var _iterator = _createForOfIteratorHelper(domElements),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var domElement = _step.value;
            if (domElement !== target) {
              continue;
            }
            hydrateObj(event, {
              delegateTarget: target
            });
            if (handler.oneOff) {
              EventHandler.off(element, event.type, selector, fn);
            }
            return fn.apply(target, [event]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    };
  }
  function findHandler(events, callable) {
    var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Object.values(events).find(function (event) {
      return event.callable === callable && event.delegationSelector === delegationSelector;
    });
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    var isDelegated = typeof handler === 'string';
    // todo: tooltip passes `false` instead of selector, so we need to check
    var callable = isDelegated ? delegationFunction : handler || delegationFunction;
    var typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    var _normalizeParameters = normalizeParameters(originalTypeEvent, handler, delegationFunction),
      _normalizeParameters2 = _slicedToArray(_normalizeParameters, 3),
      isDelegated = _normalizeParameters2[0],
      callable = _normalizeParameters2[1],
      typeEvent = _normalizeParameters2[2];

    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (originalTypeEvent in customEvents) {
      var wrapFunction = function wrapFunction(fn) {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    var events = getElementEvents(element);
    var handlers = events[typeEvent] || (events[typeEvent] = {});
    var previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    var uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
    var fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    var fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    var storeElementEvent = events[typeEvent] || {};
    for (var _i3 = 0, _Object$entries = Object.entries(storeElementEvent); _i3 < _Object$entries.length; _i3++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
        handlerKey = _Object$entries$_i[0],
        event = _Object$entries$_i[1];
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }
  var EventHandler = {
    on: function on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one: function one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off: function off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }
      var _normalizeParameters3 = normalizeParameters(originalTypeEvent, handler, delegationFunction),
        _normalizeParameters4 = _slicedToArray(_normalizeParameters3, 3),
        isDelegated = _normalizeParameters4[0],
        callable = _normalizeParameters4[1],
        typeEvent = _normalizeParameters4[2];
      var inNamespace = typeEvent !== originalTypeEvent;
      var events = getElementEvents(element);
      var storeElementEvent = events[typeEvent] || {};
      var isNamespace = originalTypeEvent.startsWith('.');
      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (var _i4 = 0, _Object$keys = Object.keys(events); _i4 < _Object$keys.length; _i4++) {
          var elementEvent = _Object$keys[_i4];
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (var _i5 = 0, _Object$entries2 = Object.entries(storeElementEvent); _i5 < _Object$entries2.length; _i5++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i5], 2),
          keyHandlers = _Object$entries2$_i[0],
          event = _Object$entries2$_i[1];
        var handlerKey = keyHandlers.replace(stripUidRegex, '');
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger: function trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }
      var $ = getjQuery();
      var typeEvent = getTypeEvent(event);
      var inNamespace = event !== typeEvent;
      var jQueryEvent = null;
      var bubbles = true;
      var nativeDispatch = true;
      var defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      var evt = new Event(event, {
        bubbles: bubbles,
        cancelable: true
      });
      evt = hydrateObj(evt, args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj) {
    var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _loop2 = function _loop2() {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i6], 2),
        key = _Object$entries3$_i[0],
        value = _Object$entries3$_i[1];
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get: function get() {
            return value;
          }
        });
      }
    };
    for (var _i6 = 0, _Object$entries3 = Object.entries(meta); _i6 < _Object$entries3.length; _i6++) {
      _loop2();
    }
    return obj;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var elementMap = new Map();
  var Data = {
    set: function set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }
      var instanceMap = elementMap.get(element);

      // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
        return;
      }
      instanceMap.set(key, instance);
    },
    get: function get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove: function remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      var instanceMap = elementMap.get(element);
      instanceMap["delete"](key);

      // free up element references if there are no instances left for an element
      if (instanceMap.size === 0) {
        elementMap["delete"](element);
      }
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  function normalizeData(value) {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === '' || value === 'null') {
      return null;
    }
    if (typeof value !== 'string') {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, function (chr) {
      return "-".concat(chr.toLowerCase());
    });
  }
  var Manipulator = {
    setDataAttribute: function setDataAttribute(element, key, value) {
      element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
    },
    removeDataAttribute: function removeDataAttribute(element, key) {
      element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
    },
    getDataAttributes: function getDataAttributes(element) {
      if (!element) {
        return {};
      }
      var attributes = {};
      var bsKeys = Object.keys(element.dataset).filter(function (key) {
        return key.startsWith('bs') && !key.startsWith('bsConfig');
      });
      var _iterator2 = _createForOfIteratorHelper(bsKeys),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var key = _step2.value;
          var pureKey = key.replace(/^bs/, '');
          pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
          attributes[pureKey] = normalizeData(element.dataset[key]);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return attributes;
    },
    getDataAttribute: function getDataAttribute(element, key) {
      return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Class definition
   */
  var Config = /*#__PURE__*/function () {
    function Config() {
      _classCallCheck(this, Config);
    }
    _createClass(Config, [{
      key: "_getConfig",
      value: function _getConfig(config) {
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(config) {
        return config;
      }
    }, {
      key: "_mergeConfigObj",
      value: function _mergeConfigObj(config, element) {
        var jsonConfig = isElement$1(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), _typeof(jsonConfig) === 'object' ? jsonConfig : {}), isElement$1(element) ? Manipulator.getDataAttributes(element) : {}), _typeof(config) === 'object' ? config : {});
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(config) {
        var configTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;
        for (var _i7 = 0, _Object$entries4 = Object.entries(configTypes); _i7 < _Object$entries4.length; _i7++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i7], 2),
            property = _Object$entries4$_i[0],
            expectedTypes = _Object$entries4$_i[1];
          var value = config[property];
          var valueType = isElement$1(value) ? 'element' : toType(value);
          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\"."));
          }
        }
      }
    }], [{
      key: "Default",
      get:
      // Getters
      function get() {
        return {};
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return {};
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }]);
    return Config;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */
  var VERSION = '5.3.0-alpha2';

  /**
   * Class definition
   */
  var BaseComponent = /*#__PURE__*/function (_Config) {
    _inherits(BaseComponent, _Config);
    var _super = _createSuper(BaseComponent);
    function BaseComponent(element, config) {
      var _this;
      _classCallCheck(this, BaseComponent);
      _this = _super.call(this);
      element = getElement(element);
      if (!element) {
        return _possibleConstructorReturn(_this);
      }
      _this._element = element;
      _this._config = _this._getConfig(config);
      Data.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this));
      return _this;
    }

    // Public
    _createClass(BaseComponent, [{
      key: "dispose",
      value: function dispose() {
        Data.remove(this._element, this.constructor.DATA_KEY);
        EventHandler.off(this._element, this.constructor.EVENT_KEY);
        var _iterator3 = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var propertyName = _step3.value;
            this[propertyName] = null;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(callback, element) {
        var isAnimated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        executeAfterTransition(callback, element, isAnimated);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = this._mergeConfigObj(config, this._element);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
      }

      // Static
    }], [{
      key: "getInstance",
      value: function getInstance(element) {
        return Data.get(getElement(element), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(element) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(element) || new this(element, _typeof(config) === 'object' ? config : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }, {
      key: "eventName",
      value: function eventName(name) {
        return "".concat(name).concat(this.EVENT_KEY);
      }
    }]);
    return BaseComponent;
  }(Config);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var getSelector = function getSelector(element) {
    var selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
      var hrefAttribute = element.getAttribute('href');

      // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273
      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
        return null;
      }

      // Just in case some CMS puts out a full URL with the anchor appended
      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
        hrefAttribute = "#".concat(hrefAttribute.split('#')[1]);
      }
      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
    }
    return parseSelector(selector);
  };
  var SelectorEngine = {
    find: function find(selector) {
      var _ref7;
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref7 = []).concat.apply(_ref7, _toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
    },
    findOne: function findOne(selector) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(element, selector);
    },
    children: function children(element, selector) {
      var _ref8;
      return (_ref8 = []).concat.apply(_ref8, _toConsumableArray(element.children)).filter(function (child) {
        return child.matches(selector);
      });
    },
    parents: function parents(element, selector) {
      var parents = [];
      var ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev: function prev(element, selector) {
      var previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next: function next(element, selector) {
      var next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren: function focusableChildren(element) {
      var focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(function (selector) {
        return "".concat(selector, ":not([tabindex^=\"-\"])");
      }).join(',');
      return this.find(focusables, element).filter(function (el) {
        return !isDisabled(el) && isVisible(el);
      });
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector: function getElementFromSelector(element) {
      var selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector: function getMultipleElementsFromSelector(element) {
      var selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var enableDismissTrigger = function enableDismissTrigger(component) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hide';
    var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
    var name = component.NAME;
    EventHandler.on(document, clickEvent, "[data-bs-dismiss=\"".concat(name, "\"]"), function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      var target = SelectorEngine.getElementFromSelector(this) || this.closest(".".concat(name));
      var instance = component.getOrCreateInstance(target);

      // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
      instance[method]();
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var NAME$f = 'alert';
  var DATA_KEY$a = 'bs.alert';
  var EVENT_KEY$b = ".".concat(DATA_KEY$a);
  var EVENT_CLOSE = "close".concat(EVENT_KEY$b);
  var EVENT_CLOSED = "closed".concat(EVENT_KEY$b);
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_SHOW$8 = 'show';

  /**
   * Class definition
   */
  var Alert = /*#__PURE__*/function (_BaseComponent) {
    _inherits(Alert, _BaseComponent);
    var _super2 = _createSuper(Alert);
    function Alert() {
      _classCallCheck(this, Alert);
      return _super2.apply(this, arguments);
    }
    _createClass(Alert, [{
      key: "close",
      value:
      // Public
      function close() {
        var _this2 = this;
        var closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
        if (closeEvent.defaultPrevented) {
          return;
        }
        this._element.classList.remove(CLASS_NAME_SHOW$8);
        var isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, isAnimated);
      }

      // Private
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove();
        EventHandler.trigger(this._element, EVENT_CLOSED);
        this.dispose();
      }

      // Static
    }], [{
      key: "NAME",
      get:
      // Getters
      function get() {
        return NAME$f;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Alert.getOrCreateInstance(this);
          if (typeof config !== 'string') {
            return;
          }
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config](this);
        });
      }
    }]);
    return Alert;
  }(BaseComponent);
  /**
   * Data API implementation
   */
  enableDismissTrigger(Alert, 'close');

  /**
   * jQuery
   */

  defineJQueryPlugin(Alert);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var NAME$e = 'button';
  var DATA_KEY$9 = 'bs.button';
  var EVENT_KEY$a = ".".concat(DATA_KEY$9);
  var DATA_API_KEY$6 = '.data-api';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API$6 = "click".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);

  /**
   * Class definition
   */
  var Button = /*#__PURE__*/function (_BaseComponent2) {
    _inherits(Button, _BaseComponent2);
    var _super3 = _createSuper(Button);
    function Button() {
      _classCallCheck(this, Button);
      return _super3.apply(this, arguments);
    }
    _createClass(Button, [{
      key: "toggle",
      value:
      // Public
      function toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
      }

      // Static
    }], [{
      key: "NAME",
      get:
      // Getters
      function get() {
        return NAME$e;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Button.getOrCreateInstance(this);
          if (config === 'toggle') {
            data[config]();
          }
        });
      }
    }]);
    return Button;
  }(BaseComponent);
  /**
   * Data API implementation
   */
  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (event) {
    event.preventDefault();
    var button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    var data = Button.getOrCreateInstance(button);
    data.toggle();
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Button);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/swipe.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var NAME$d = 'swipe';
  var EVENT_KEY$9 = '.bs.swipe';
  var EVENT_TOUCHSTART = "touchstart".concat(EVENT_KEY$9);
  var EVENT_TOUCHMOVE = "touchmove".concat(EVENT_KEY$9);
  var EVENT_TOUCHEND = "touchend".concat(EVENT_KEY$9);
  var EVENT_POINTERDOWN = "pointerdown".concat(EVENT_KEY$9);
  var EVENT_POINTERUP = "pointerup".concat(EVENT_KEY$9);
  var POINTER_TYPE_TOUCH = 'touch';
  var POINTER_TYPE_PEN = 'pen';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SWIPE_THRESHOLD = 40;
  var Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType$c = {
    endCallback: '(function|null)',
    leftCallback: '(function|null)',
    rightCallback: '(function|null)'
  };

  /**
   * Class definition
   */
  var Swipe = /*#__PURE__*/function (_Config2) {
    _inherits(Swipe, _Config2);
    var _super4 = _createSuper(Swipe);
    function Swipe(element, config) {
      var _this3;
      _classCallCheck(this, Swipe);
      _this3 = _super4.call(this);
      _this3._element = element;
      if (!element || !Swipe.isSupported()) {
        return _possibleConstructorReturn(_this3);
      }
      _this3._config = _this3._getConfig(config);
      _this3._deltaX = 0;
      _this3._supportPointerEvents = Boolean(window.PointerEvent);
      _this3._initEvents();
      return _this3;
    }

    // Getters
    _createClass(Swipe, [{
      key: "dispose",
      value:
      // Public
      function dispose() {
        EventHandler.off(this._element, EVENT_KEY$9);
      }

      // Private
    }, {
      key: "_start",
      value: function _start(event) {
        if (!this._supportPointerEvents) {
          this._deltaX = event.touches[0].clientX;
          return;
        }
        if (this._eventIsPointerPenTouch(event)) {
          this._deltaX = event.clientX;
        }
      }
    }, {
      key: "_end",
      value: function _end(event) {
        if (this._eventIsPointerPenTouch(event)) {
          this._deltaX = event.clientX - this._deltaX;
        }
        this._handleSwipe();
        execute(this._config.endCallback);
      }
    }, {
      key: "_move",
      value: function _move(event) {
        this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var absDeltaX = Math.abs(this._deltaX);
        if (absDeltaX <= SWIPE_THRESHOLD) {
          return;
        }
        var direction = absDeltaX / this._deltaX;
        this._deltaX = 0;
        if (!direction) {
          return;
        }
        execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this4 = this;
        if (this._supportPointerEvents) {
          EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
            return _this4._start(event);
          });
          EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
            return _this4._end(event);
          });
          this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
          EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
            return _this4._start(event);
          });
          EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
            return _this4._move(event);
          });
          EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
            return _this4._end(event);
          });
        }
      }
    }, {
      key: "_eventIsPointerPenTouch",
      value: function _eventIsPointerPenTouch(event) {
        return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
      }

      // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default$c;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$c;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$d;
      }
    }, {
      key: "isSupported",
      value: function isSupported() {
        return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }]);
    return Swipe;
  }(Config);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */
  var NAME$c = 'carousel';
  var DATA_KEY$8 = 'bs.carousel';
  var EVENT_KEY$8 = ".".concat(DATA_KEY$8);
  var DATA_API_KEY$5 = '.data-api';
  var ARROW_LEFT_KEY$1 = 'ArrowLeft';
  var ARROW_RIGHT_KEY$1 = 'ArrowRight';
  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var ORDER_NEXT = 'next';
  var ORDER_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide".concat(EVENT_KEY$8);
  var EVENT_SLID = "slid".concat(EVENT_KEY$8);
  var EVENT_KEYDOWN$1 = "keydown".concat(EVENT_KEY$8);
  var EVENT_MOUSEENTER$1 = "mouseenter".concat(EVENT_KEY$8);
  var EVENT_MOUSELEAVE$1 = "mouseleave".concat(EVENT_KEY$8);
  var EVENT_DRAG_START = "dragstart".concat(EVENT_KEY$8);
  var EVENT_LOAD_DATA_API$3 = "load".concat(EVENT_KEY$8).concat(DATA_API_KEY$5);
  var EVENT_CLICK_DATA_API$5 = "click".concat(EVENT_KEY$8).concat(DATA_API_KEY$5);
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_END = 'carousel-item-end';
  var CLASS_NAME_START = 'carousel-item-start';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = (_KEY_TO_DIRECTION = {}, _defineProperty(_KEY_TO_DIRECTION, ARROW_LEFT_KEY$1, DIRECTION_RIGHT), _defineProperty(_KEY_TO_DIRECTION, ARROW_RIGHT_KEY$1, DIRECTION_LEFT), _KEY_TO_DIRECTION);
  var Default$b = {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType$b = {
    interval: '(number|boolean)',
    // TODO:v6 remove boolean support
    keyboard: 'boolean',
    pause: '(string|boolean)',
    ride: '(boolean|string)',
    touch: 'boolean',
    wrap: 'boolean'
  };

  /**
   * Class definition
   */
  var Carousel = /*#__PURE__*/function (_BaseComponent3) {
    _inherits(Carousel, _BaseComponent3);
    var _super5 = _createSuper(Carousel);
    function Carousel(element, config) {
      var _this5;
      _classCallCheck(this, Carousel);
      _this5 = _super5.call(this, element, config);
      _this5._interval = null;
      _this5._activeElement = null;
      _this5._isSliding = false;
      _this5.touchTimeout = null;
      _this5._swipeHelper = null;
      _this5._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this5._element);
      _this5._addEventListeners();
      if (_this5._config.ride === CLASS_NAME_CAROUSEL) {
        _this5.cycle();
      }
      return _this5;
    }

    // Getters
    _createClass(Carousel, [{
      key: "next",
      value:
      // Public
      function next() {
        this._slide(ORDER_NEXT);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        // FIXME TODO use `document.visibilityState`
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && isVisible(this._element)) {
          this.next();
        }
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(ORDER_PREV);
      }
    }, {
      key: "pause",
      value: function pause() {
        if (this._isSliding) {
          triggerTransitionEnd(this._element);
        }
        this._clearInterval();
      }
    }, {
      key: "cycle",
      value: function cycle() {
        var _this6 = this;
        this._clearInterval();
        this._updateInterval();
        this._interval = setInterval(function () {
          return _this6.nextWhenVisible();
        }, this._config.interval);
      }
    }, {
      key: "_maybeEnableCycle",
      value: function _maybeEnableCycle() {
        var _this7 = this;
        if (!this._config.ride) {
          return;
        }
        if (this._isSliding) {
          EventHandler.one(this._element, EVENT_SLID, function () {
            return _this7.cycle();
          });
          return;
        }
        this.cycle();
      }
    }, {
      key: "to",
      value: function to(index) {
        var _this8 = this;
        var items = this._getItems();
        if (index > items.length - 1 || index < 0) {
          return;
        }
        if (this._isSliding) {
          EventHandler.one(this._element, EVENT_SLID, function () {
            return _this8.to(index);
          });
          return;
        }
        var activeIndex = this._getItemIndex(this._getActive());
        if (activeIndex === index) {
          return;
        }
        var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
        this._slide(order, items[index]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (this._swipeHelper) {
          this._swipeHelper.dispose();
        }
        _get(_getPrototypeOf(Carousel.prototype), "dispose", this).call(this);
      }

      // Private
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(config) {
        config.defaultInterval = config.interval;
        return config;
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this9 = this;
        if (this._config.keyboard) {
          EventHandler.on(this._element, EVENT_KEYDOWN$1, function (event) {
            return _this9._keydown(event);
          });
        }
        if (this._config.pause === 'hover') {
          EventHandler.on(this._element, EVENT_MOUSEENTER$1, function () {
            return _this9.pause();
          });
          EventHandler.on(this._element, EVENT_MOUSELEAVE$1, function () {
            return _this9._maybeEnableCycle();
          });
        }
        if (this._config.touch && Swipe.isSupported()) {
          this._addTouchEventListeners();
        }
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this10 = this;
        var _iterator4 = _createForOfIteratorHelper(SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var img = _step4.value;
            EventHandler.on(img, EVENT_DRAG_START, function (event) {
              return event.preventDefault();
            });
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var endCallBack = function endCallBack() {
          if (_this10._config.pause !== 'hover') {
            return;
          }

          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling

          _this10.pause();
          if (_this10.touchTimeout) {
            clearTimeout(_this10.touchTimeout);
          }
          _this10.touchTimeout = setTimeout(function () {
            return _this10._maybeEnableCycle();
          }, TOUCHEVENT_COMPAT_WAIT + _this10._config.interval);
        };
        var swipeConfig = {
          leftCallback: function leftCallback() {
            return _this10._slide(_this10._directionToOrder(DIRECTION_LEFT));
          },
          rightCallback: function rightCallback() {
            return _this10._slide(_this10._directionToOrder(DIRECTION_RIGHT));
          },
          endCallback: endCallBack
        };
        this._swipeHelper = new Swipe(this._element, swipeConfig);
      }
    }, {
      key: "_keydown",
      value: function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }
        var direction = KEY_TO_DIRECTION[event.key];
        if (direction) {
          event.preventDefault();
          this._slide(this._directionToOrder(direction));
        }
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(element) {
        return this._getItems().indexOf(element);
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(index) {
        if (!this._indicatorsElement) {
          return;
        }
        var activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute('aria-current');
        var newActiveIndicator = SelectorEngine.findOne("[data-bs-slide-to=\"".concat(index, "\"]"), this._indicatorsElement);
        if (newActiveIndicator) {
          newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
          newActiveIndicator.setAttribute('aria-current', 'true');
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var element = this._activeElement || this._getActive();
        if (!element) {
          return;
        }
        var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
        this._config.interval = elementInterval || this._config.defaultInterval;
      }
    }, {
      key: "_slide",
      value: function _slide(order) {
        var _this11 = this;
        var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (this._isSliding) {
          return;
        }
        var activeElement = this._getActive();
        var isNext = order === ORDER_NEXT;
        var nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
        if (nextElement === activeElement) {
          return;
        }
        var nextElementIndex = this._getItemIndex(nextElement);
        var triggerEvent = function triggerEvent(eventName) {
          return EventHandler.trigger(_this11._element, eventName, {
            relatedTarget: nextElement,
            direction: _this11._orderToDirection(order),
            from: _this11._getItemIndex(activeElement),
            to: nextElementIndex
          });
        };
        var slideEvent = triggerEvent(EVENT_SLIDE);
        if (slideEvent.defaultPrevented) {
          return;
        }
        if (!activeElement || !nextElement) {
          // Some weirdness is happening, so we bail
          // todo: change tests that use empty divs to avoid this check
          return;
        }
        var isCycling = Boolean(this._interval);
        this.pause();
        this._isSliding = true;
        this._setActiveIndicatorElement(nextElementIndex);
        this._activeElement = nextElement;
        var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);
        var completeCallBack = function completeCallBack() {
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add(CLASS_NAME_ACTIVE$2);
          activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
          _this11._isSliding = false;
          triggerEvent(EVENT_SLID);
        };
        this._queueCallback(completeCallBack, activeElement, this._isAnimated());
        if (isCycling) {
          this.cycle();
        }
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_SLIDE);
      }
    }, {
      key: "_getActive",
      value: function _getActive() {
        return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return SelectorEngine.find(SELECTOR_ITEM, this._element);
      }
    }, {
      key: "_clearInterval",
      value: function _clearInterval() {
        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(direction) {
        if (isRTL()) {
          return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        }
        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(order) {
        if (isRTL()) {
          return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }
        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
      }

      // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default$b;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$b;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$c;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Carousel.getOrCreateInstance(this, config);
          if (typeof config === 'number') {
            data.to(config);
            return;
          }
          if (typeof config === 'string') {
            if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }
            data[config]();
          }
        });
      }
    }]);
    return Carousel;
  }(BaseComponent);
  /**
   * Data API implementation
   */
  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
    var target = SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    var carousel = Carousel.getOrCreateInstance(target);
    var slideIndex = this.getAttribute('data-bs-slide-to');
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, function () {
    var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    var _iterator5 = _createForOfIteratorHelper(carousels),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var carousel = _step5.value;
        Carousel.getOrCreateInstance(carousel);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Carousel);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var NAME$b = 'collapse';
  var DATA_KEY$7 = 'bs.collapse';
  var EVENT_KEY$7 = ".".concat(DATA_KEY$7);
  var DATA_API_KEY$4 = '.data-api';
  var EVENT_SHOW$6 = "show".concat(EVENT_KEY$7);
  var EVENT_SHOWN$6 = "shown".concat(EVENT_KEY$7);
  var EVENT_HIDE$6 = "hide".concat(EVENT_KEY$7);
  var EVENT_HIDDEN$6 = "hidden".concat(EVENT_KEY$7);
  var EVENT_CLICK_DATA_API$4 = "click".concat(EVENT_KEY$7).concat(DATA_API_KEY$4);
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var CLASS_NAME_DEEPER_CHILDREN = ":scope .".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE);
  var CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  var WIDTH = 'width';
  var HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  var Default$a = {
    parent: null,
    toggle: true
  };
  var DefaultType$a = {
    parent: '(null|element)',
    toggle: 'boolean'
  };

  /**
   * Class definition
   */
  var Collapse = /*#__PURE__*/function (_BaseComponent4) {
    _inherits(Collapse, _BaseComponent4);
    var _super6 = _createSuper(Collapse);
    function Collapse(element, config) {
      var _this12;
      _classCallCheck(this, Collapse);
      _this12 = _super6.call(this, element, config);
      _this12._isTransitioning = false;
      _this12._triggerArray = [];
      var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
      var _iterator6 = _createForOfIteratorHelper(toggleList),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var elem = _step6.value;
          var selector = SelectorEngine.getSelectorFromElement(elem);
          var filterElement = SelectorEngine.find(selector).filter(function (foundElement) {
            return foundElement === _this12._element;
          });
          if (selector !== null && filterElement.length) {
            _this12._triggerArray.push(elem);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      _this12._initializeChildren();
      if (!_this12._config.parent) {
        _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown());
      }
      if (_this12._config.toggle) {
        _this12.toggle();
      }
      return _this12;
    }

    // Getters
    _createClass(Collapse, [{
      key: "toggle",
      value:
      // Public
      function toggle() {
        if (this._isShown()) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: "show",
      value: function show() {
        var _this13 = this;
        if (this._isTransitioning || this._isShown()) {
          return;
        }
        var activeChildren = [];

        // find active children
        if (this._config.parent) {
          activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(function (element) {
            return element !== _this13._element;
          }).map(function (element) {
            return Collapse.getOrCreateInstance(element, {
              toggle: false
            });
          });
        }
        if (activeChildren.length && activeChildren[0]._isTransitioning) {
          return;
        }
        var startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
        if (startEvent.defaultPrevented) {
          return;
        }
        var _iterator7 = _createForOfIteratorHelper(activeChildren),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var activeInstance = _step7.value;
            activeInstance.hide();
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        var dimension = this._getDimension();
        this._element.classList.remove(CLASS_NAME_COLLAPSE);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.style[dimension] = 0;
        this._addAriaAndCollapsedClass(this._triggerArray, true);
        this._isTransitioning = true;
        var complete = function complete() {
          _this13._isTransitioning = false;
          _this13._element.classList.remove(CLASS_NAME_COLLAPSING);
          _this13._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
          _this13._element.style[dimension] = '';
          EventHandler.trigger(_this13._element, EVENT_SHOWN$6);
        };
        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = "scroll".concat(capitalizedDimension);
        this._queueCallback(complete, this._element, true);
        this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this14 = this;
        if (this._isTransitioning || !this._isShown()) {
          return;
        }
        var startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
        if (startEvent.defaultPrevented) {
          return;
        }
        var dimension = this._getDimension();
        this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        var _iterator8 = _createForOfIteratorHelper(this._triggerArray),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var trigger = _step8.value;
            var element = SelectorEngine.getElementFromSelector(trigger);
            if (element && !this._isShown(element)) {
              this._addAriaAndCollapsedClass([trigger], false);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        this._isTransitioning = true;
        var complete = function complete() {
          _this14._isTransitioning = false;
          _this14._element.classList.remove(CLASS_NAME_COLLAPSING);
          _this14._element.classList.add(CLASS_NAME_COLLAPSE);
          EventHandler.trigger(_this14._element, EVENT_HIDDEN$6);
        };
        this._element.style[dimension] = '';
        this._queueCallback(complete, this._element, true);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return element.classList.contains(CLASS_NAME_SHOW$7);
      }

      // Private
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(config) {
        config.toggle = Boolean(config.toggle); // Coerce string values
        config.parent = getElement(config.parent);
        return config;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        if (!this._config.parent) {
          return;
        }
        var children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
        var _iterator9 = _createForOfIteratorHelper(children),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var element = _step9.value;
            var selected = SelectorEngine.getElementFromSelector(element);
            if (selected) {
              this._addAriaAndCollapsedClass([element], this._isShown(selected));
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
    }, {
      key: "_getFirstLevelChildren",
      value: function _getFirstLevelChildren(selector) {
        var children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        // remove children if greater depth
        return SelectorEngine.find(selector, this._config.parent).filter(function (element) {
          return !children.includes(element);
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) {
          return;
        }
        var _iterator10 = _createForOfIteratorHelper(triggerArray),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var element = _step10.value;
            element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
            element.setAttribute('aria-expanded', isOpen);
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }

      // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$a;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$b;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        var _config = {};
        if (typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }
        return this.each(function () {
          var data = Collapse.getOrCreateInstance(this, _config);
          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }
            data[config]();
          }
        });
      }
    }]);
    return Collapse;
  }(BaseComponent);
  /**
   * Data API implementation
   */
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }
    var _iterator11 = _createForOfIteratorHelper(SelectorEngine.getMultipleElementsFromSelector(this)),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var element = _step11.value;
        Collapse.getOrCreateInstance(element, {
          toggle: false
        }).toggle();
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Collapse);
  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];
        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }
  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules

  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$2,
    requires: ['computeStyles']
  };
  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands) {
      return uaData.brands.map(function (item) {
        return item.brand + "/" + item.version;
      }).join(' ');
    }
    return navigator.userAgent;
  }
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width: width,
      height: height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x: x,
      y: y
    };
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...

        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false

    return false;
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }
  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument :
    // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }
  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot ||
      // step into the shadow DOM of the parent of a slotted node
      element.parentNode || (
      // DOM Element detected
      isShadowRoot(element) ? element.host : null) ||
      // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback
    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) ||
    // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle$1(element).position === 'fixed') {
      return null;
    }
    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block

  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle$1(element);
      if (elementCss.position === 'fixed') {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.

  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
      return window;
    }
    return offsetParent || getContainingBlock(element) || window;
  }
  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }
  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
  }
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }
  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }
  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }
  function effect$1(_ref2) {
    var state = _ref2.state,
      options = _ref2.options;
    var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    if (arrowElement == null) {
      return;
    } // CSS selector

    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules

  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };
  function getVariation(placement) {
    return placement.split('-')[1];
  }
  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
      y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
      x: x,
      y: y
    }) : {
      x: x,
      y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';
      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);
        if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp];
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp];
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x: x,
      y: y
    }) : {
      x: x,
      y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state,
      options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration,
      isFixed: state.options.strategy === 'fixed'
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules

  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };
  var passive = {
    passive: true
  };
  function effect(_ref) {
    var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
    var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }
    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }
    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }
      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules

  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };
  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }
  var hash = {
    start: 'end',
    end: 'start'
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }
  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === 'fixed') {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle$1(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }
  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }
  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList :
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === 'fixed');
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`

  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents

  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }
  function computeOffsets(_ref) {
    var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }
    return offsets;
  }
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }
    return overflowOffsets;
  }
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);
          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break") break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules

  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state,
      name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules

  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };
  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
        placement: placement
      })) : offset,
      skidding = _ref[0],
      distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
    var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules

  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };
  function popperOffsets(_ref) {
    var state = _ref.state,
      name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules

  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };
  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }
  function preventOverflow(_ref) {
    var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
    var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = offset + overflow[mainSide];
      var max$1 = offset - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === 'x' ? top : left;
      var _altSide = mainAxis === 'x' ? bottom : right;
      var _offset = popperOffsets[altAxis];
      var _len = altAxis === 'y' ? 'height' : 'width';
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules

  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.

  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' ||
      // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }
  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }
  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }
      return pending;
    };
  }
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }
  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(setOptionsAction) {
          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            return;
          } // Store the reference and popper rects to be read by modifiers

          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;
            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference, popper)) {
        return instance;
      }
      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;
          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });
            var noopFn = function noopFn() {};
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  var createPopper$2 = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
  var createPopper$1 = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers$1
  }); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  var Popper = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    afterMain: afterMain,
    afterRead: afterRead,
    afterWrite: afterWrite,
    applyStyles: applyStyles$1,
    arrow: arrow$1,
    auto: auto,
    basePlacements: basePlacements,
    beforeMain: beforeMain,
    beforeRead: beforeRead,
    beforeWrite: beforeWrite,
    bottom: bottom,
    clippingParents: clippingParents,
    computeStyles: computeStyles$1,
    createPopper: createPopper,
    createPopperBase: createPopper$2,
    createPopperLite: createPopper$1,
    detectOverflow: detectOverflow,
    end: end,
    eventListeners: eventListeners,
    flip: flip$1,
    hide: hide$1,
    left: left,
    main: main,
    modifierPhases: modifierPhases,
    offset: offset$1,
    placements: placements,
    popper: popper,
    popperGenerator: popperGenerator,
    popperOffsets: popperOffsets$1,
    preventOverflow: preventOverflow$1,
    read: read,
    reference: reference,
    right: right,
    start: start,
    top: top,
    variationPlacements: variationPlacements,
    viewport: viewport,
    write: write
  }, Symbol.toStringTag, {
    value: 'Module'
  }));

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var NAME$a = 'dropdown';
  var DATA_KEY$6 = 'bs.dropdown';
  var EVENT_KEY$6 = ".".concat(DATA_KEY$6);
  var DATA_API_KEY$3 = '.data-api';
  var ESCAPE_KEY$2 = 'Escape';
  var TAB_KEY$1 = 'Tab';
  var ARROW_UP_KEY$1 = 'ArrowUp';
  var ARROW_DOWN_KEY$1 = 'ArrowDown';
  var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  var EVENT_HIDE$5 = "hide".concat(EVENT_KEY$6);
  var EVENT_HIDDEN$5 = "hidden".concat(EVENT_KEY$6);
  var EVENT_SHOW$5 = "show".concat(EVENT_KEY$6);
  var EVENT_SHOWN$5 = "shown".concat(EVENT_KEY$6);
  var EVENT_CLICK_DATA_API$3 = "click".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
  var EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
  var EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
  var CLASS_NAME_SHOW$6 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPEND = 'dropend';
  var CLASS_NAME_DROPSTART = 'dropstart';
  var CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  var CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = "".concat(SELECTOR_DATA_TOGGLE$3, ".").concat(CLASS_NAME_SHOW$6);
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR = '.navbar';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  var PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  var PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  var PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  var PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  var PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  var PLACEMENT_TOPCENTER = 'top';
  var PLACEMENT_BOTTOMCENTER = 'bottom';
  var Default$9 = {
    autoClose: true,
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
  };
  var DefaultType$9 = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
  };

  /**
   * Class definition
   */
  var Dropdown = /*#__PURE__*/function (_BaseComponent5) {
    _inherits(Dropdown, _BaseComponent5);
    var _super7 = _createSuper(Dropdown);
    function Dropdown(element, config) {
      var _this15;
      _classCallCheck(this, Dropdown);
      _this15 = _super7.call(this, element, config);
      _this15._popper = null;
      _this15._parent = _this15._element.parentNode; // dropdown wrapper
      // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
      _this15._menu = SelectorEngine.next(_this15._element, SELECTOR_MENU)[0] || SelectorEngine.prev(_this15._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, _this15._parent);
      _this15._inNavbar = _this15._detectNavbar();
      return _this15;
    }

    // Getters
    _createClass(Dropdown, [{
      key: "toggle",
      value:
      // Public
      function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (isDisabled(this._element) || this._isShown()) {
          return;
        }
        var relatedTarget = {
          relatedTarget: this._element
        };
        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
        if (showEvent.defaultPrevented) {
          return;
        }
        this._createPopper();

        // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
          var _ref9;
          var _iterator12 = _createForOfIteratorHelper((_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))),
            _step12;
          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var element = _step12.value;
              EventHandler.on(element, 'mouseover', noop);
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }
        this._element.focus();
        this._element.setAttribute('aria-expanded', true);
        this._menu.classList.add(CLASS_NAME_SHOW$6);
        this._element.classList.add(CLASS_NAME_SHOW$6);
        EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
      }
    }, {
      key: "hide",
      value: function hide() {
        if (isDisabled(this._element) || !this._isShown()) {
          return;
        }
        var relatedTarget = {
          relatedTarget: this._element
        };
        this._completeHide(relatedTarget);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (this._popper) {
          this._popper.destroy();
        }
        _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar();
        if (this._popper) {
          this._popper.update();
        }
      }

      // Private
    }, {
      key: "_completeHide",
      value: function _completeHide(relatedTarget) {
        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
        if (hideEvent.defaultPrevented) {
          return;
        }

        // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) {
          var _ref10;
          var _iterator13 = _createForOfIteratorHelper((_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))),
            _step13;
          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var element = _step13.value;
              EventHandler.off(element, 'mouseover', noop);
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
        }
        if (this._popper) {
          this._popper.destroy();
        }
        this._menu.classList.remove(CLASS_NAME_SHOW$6);
        this._element.classList.remove(CLASS_NAME_SHOW$6);
        this._element.setAttribute('aria-expanded', 'false');
        Manipulator.removeDataAttribute(this._menu, 'popper');
        EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _get(_getPrototypeOf(Dropdown.prototype), "_getConfig", this).call(this, config);
        if (_typeof(config.reference) === 'object' && !isElement$1(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
          // Popper virtual elements require a getBoundingClientRect method
          throw new TypeError("".concat(NAME$a.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        }
        return config;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper() {
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }
        var referenceElement = this._element;
        if (this._config.reference === 'parent') {
          referenceElement = this._parent;
        } else if (isElement$1(this._config.reference)) {
          referenceElement = getElement(this._config.reference);
        } else if (_typeof(this._config.reference) === 'object') {
          referenceElement = this._config.reference;
        }
        var popperConfig = this._getPopperConfig();
        this._popper = createPopper(referenceElement, this._menu, popperConfig);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this._menu.classList.contains(CLASS_NAME_SHOW$6);
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var parentDropdown = this._parent;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
          return PLACEMENT_RIGHT;
        }
        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
          return PLACEMENT_LEFT;
        }
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
          return PLACEMENT_TOPCENTER;
        }
        if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
          return PLACEMENT_BOTTOMCENTER;
        }

        // We need to trim the value because custom properties can also include spaces
        var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
          return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        }
        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return this._element.closest(SELECTOR_NAVBAR) !== null;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this16 = this;
        var offset = this._config.offset;
        if (typeof offset === 'string') {
          return offset.split(',').map(function (value) {
            return Number.parseInt(value, 10);
          });
        }
        if (typeof offset === 'function') {
          return function (popperData) {
            return offset(popperData, _this16._element);
          };
        }
        return offset;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var defaultBsPopperConfig = {
          placement: this._getPlacement(),
          modifiers: [{
            name: 'preventOverflow',
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }]
        };

        // Disable Popper if we have a static display or Dropdown is in Navbar
        if (this._inNavbar || this._config.display === 'static') {
          Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // todo:v6 remove
          defaultBsPopperConfig.modifiers = [{
            name: 'applyStyles',
            enabled: false
          }];
        }
        return _objectSpread(_objectSpread({}, defaultBsPopperConfig), execute(this._config.popperConfig, [defaultBsPopperConfig]));
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref11) {
        var key = _ref11.key,
          target = _ref11.target;
        var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(function (element) {
          return isVisible(element);
        });
        if (!items.length) {
          return;
        }

        // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY
        getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
      }

      // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default$9;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$9;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$a;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Dropdown.getOrCreateInstance(this, config);
          if (typeof config !== 'string') {
            return;
          }
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config]();
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(event) {
        if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
          return;
        }
        var openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
        var _iterator14 = _createForOfIteratorHelper(openToggles),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var toggle = _step14.value;
            var context = Dropdown.getInstance(toggle);
            if (!context || context._config.autoClose === false) {
              continue;
            }
            var composedPath = event.composedPath();
            var isMenuTarget = composedPath.includes(context._menu);
            if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
              continue;
            }

            // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
            if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
              continue;
            }
            var relatedTarget = {
              relatedTarget: context._element
            };
            if (event.type === 'click') {
              relatedTarget.clickEvent = event;
            }
            context._completeHide(relatedTarget);
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(event) {
        // If not an UP | DOWN | ESCAPE key => not a dropdown command
        // If input/textarea && if key is other than ESCAPE => not a dropdown command

        var isInput = /input|textarea/i.test(event.target.tagName);
        var isEscapeEvent = event.key === ESCAPE_KEY$2;
        var isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
        if (!isUpOrDownEvent && !isEscapeEvent) {
          return;
        }
        if (isInput && !isEscapeEvent) {
          return;
        }
        event.preventDefault();

        // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
        var getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
        var instance = Dropdown.getOrCreateInstance(getToggleButton);
        if (isUpOrDownEvent) {
          event.stopPropagation();
          instance.show();
          instance._selectMenuItem(event);
          return;
        }
        if (instance._isShown()) {
          // else is escape and we check if it is shown
          event.stopPropagation();
          instance.hide();
          getToggleButton.focus();
        }
      }
    }]);
    return Dropdown;
  }(BaseComponent);
  /**
   * Data API implementation
   */
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Dropdown);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  var PROPERTY_PADDING = 'padding-right';
  var PROPERTY_MARGIN = 'margin-right';

  /**
   * Class definition
   */
  var ScrollBarHelper = /*#__PURE__*/function () {
    function ScrollBarHelper() {
      _classCallCheck(this, ScrollBarHelper);
      this._element = document.body;
    }

    // Public
    _createClass(ScrollBarHelper, [{
      key: "getWidth",
      value: function getWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        var documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
      }
    }, {
      key: "hide",
      value: function hide() {
        var width = this.getWidth();
        this._disableOverFlow();
        // give padding to element to balance the hidden scrollbar width
        this._setElementAttributes(this._element, PROPERTY_PADDING, function (calculatedValue) {
          return calculatedValue + width;
        });
        // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
        this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, function (calculatedValue) {
          return calculatedValue + width;
        });
        this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, function (calculatedValue) {
          return calculatedValue - width;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, 'overflow');
        this._resetElementAttributes(this._element, PROPERTY_PADDING);
        this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
        this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }

      // Private
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, 'overflow');
        this._element.style.overflow = 'hidden';
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(selector, styleProperty, callback) {
        var _this17 = this;
        var scrollbarWidth = this.getWidth();
        var manipulationCallBack = function manipulationCallBack(element) {
          if (element !== _this17._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
            return;
          }
          _this17._saveInitialAttribute(element, styleProperty);
          var calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
          element.style.setProperty(styleProperty, "".concat(callback(Number.parseFloat(calculatedValue)), "px"));
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(element, styleProperty) {
        var actualValue = element.style.getPropertyValue(styleProperty);
        if (actualValue) {
          Manipulator.setDataAttribute(element, styleProperty, actualValue);
        }
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(selector, styleProperty) {
        var manipulationCallBack = function manipulationCallBack(element) {
          var value = Manipulator.getDataAttribute(element, styleProperty);
          // We only want to remove the property if the value is `null`; the value can also be zero
          if (value === null) {
            element.style.removeProperty(styleProperty);
            return;
          }
          Manipulator.removeDataAttribute(element, styleProperty);
          element.style.setProperty(styleProperty, value);
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(selector, callBack) {
        if (isElement$1(selector)) {
          callBack(selector);
          return;
        }
        var _iterator15 = _createForOfIteratorHelper(SelectorEngine.find(selector, this._element)),
          _step15;
        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var sel = _step15.value;
            callBack(sel);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }
    }]);
    return ScrollBarHelper;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */
  var NAME$9 = 'backdrop';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME$9);
  var Default$8 = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements
  };

  var DefaultType$8 = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };

  /**
   * Class definition
   */
  var Backdrop = /*#__PURE__*/function (_Config3) {
    _inherits(Backdrop, _Config3);
    var _super8 = _createSuper(Backdrop);
    function Backdrop(config) {
      var _this18;
      _classCallCheck(this, Backdrop);
      _this18 = _super8.call(this);
      _this18._config = _this18._getConfig(config);
      _this18._isAppended = false;
      _this18._element = null;
      return _this18;
    }

    // Getters
    _createClass(Backdrop, [{
      key: "show",
      value:
      // Public
      function show(callback) {
        if (!this._config.isVisible) {
          execute(callback);
          return;
        }
        this._append();
        var element = this._getElement();
        if (this._config.isAnimated) {
          reflow(element);
        }
        element.classList.add(CLASS_NAME_SHOW$5);
        this._emulateAnimation(function () {
          execute(callback);
        });
      }
    }, {
      key: "hide",
      value: function hide(callback) {
        var _this19 = this;
        if (!this._config.isVisible) {
          execute(callback);
          return;
        }
        this._getElement().classList.remove(CLASS_NAME_SHOW$5);
        this._emulateAnimation(function () {
          _this19.dispose();
          execute(callback);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (!this._isAppended) {
          return;
        }
        EventHandler.off(this._element, EVENT_MOUSEDOWN);
        this._element.remove();
        this._isAppended = false;
      }

      // Private
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var backdrop = document.createElement('div');
          backdrop.className = this._config.className;
          if (this._config.isAnimated) {
            backdrop.classList.add(CLASS_NAME_FADE$4);
          }
          this._element = backdrop;
        }
        return this._element;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(config) {
        // use getElement() with the default "body" to get a fresh Element on each instantiation
        config.rootElement = getElement(config.rootElement);
        return config;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this20 = this;
        if (this._isAppended) {
          return;
        }
        var element = this._getElement();
        this._config.rootElement.append(element);
        EventHandler.on(element, EVENT_MOUSEDOWN, function () {
          execute(_this20._config.clickCallback);
        });
        this._isAppended = true;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(callback) {
        executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Default$8;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$8;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$9;
      }
    }]);
    return Backdrop;
  }(Config);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */
  var NAME$8 = 'focustrap';
  var DATA_KEY$5 = 'bs.focustrap';
  var EVENT_KEY$5 = ".".concat(DATA_KEY$5);
  var EVENT_FOCUSIN$2 = "focusin".concat(EVENT_KEY$5);
  var EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY$5);
  var TAB_KEY = 'Tab';
  var TAB_NAV_FORWARD = 'forward';
  var TAB_NAV_BACKWARD = 'backward';
  var Default$7 = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
  };

  var DefaultType$7 = {
    autofocus: 'boolean',
    trapElement: 'element'
  };

  /**
   * Class definition
   */
  var FocusTrap = /*#__PURE__*/function (_Config4) {
    _inherits(FocusTrap, _Config4);
    var _super9 = _createSuper(FocusTrap);
    function FocusTrap(config) {
      var _this21;
      _classCallCheck(this, FocusTrap);
      _this21 = _super9.call(this);
      _this21._config = _this21._getConfig(config);
      _this21._isActive = false;
      _this21._lastTabNavDirection = null;
      return _this21;
    }

    // Getters
    _createClass(FocusTrap, [{
      key: "activate",
      value:
      // Public
      function activate() {
        var _this22 = this;
        if (this._isActive) {
          return;
        }
        if (this._config.autofocus) {
          this._config.trapElement.focus();
        }
        EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
        EventHandler.on(document, EVENT_FOCUSIN$2, function (event) {
          return _this22._handleFocusin(event);
        });
        EventHandler.on(document, EVENT_KEYDOWN_TAB, function (event) {
          return _this22._handleKeydown(event);
        });
        this._isActive = true;
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        if (!this._isActive) {
          return;
        }
        this._isActive = false;
        EventHandler.off(document, EVENT_KEY$5);
      }

      // Private
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(event) {
        var trapElement = this._config.trapElement;
        if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
          return;
        }
        var elements = SelectorEngine.focusableChildren(trapElement);
        if (elements.length === 0) {
          trapElement.focus();
        } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
          elements[elements.length - 1].focus();
        } else {
          elements[0].focus();
        }
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(event) {
        if (event.key !== TAB_KEY) {
          return;
        }
        this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
      }
    }], [{
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$8;
      }
    }]);
    return FocusTrap;
  }(Config);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */
  var NAME$7 = 'modal';
  var DATA_KEY$4 = 'bs.modal';
  var EVENT_KEY$4 = ".".concat(DATA_KEY$4);
  var DATA_API_KEY$2 = '.data-api';
  var ESCAPE_KEY$1 = 'Escape';
  var EVENT_HIDE$4 = "hide".concat(EVENT_KEY$4);
  var EVENT_HIDE_PREVENTED$1 = "hidePrevented".concat(EVENT_KEY$4);
  var EVENT_HIDDEN$4 = "hidden".concat(EVENT_KEY$4);
  var EVENT_SHOW$4 = "show".concat(EVENT_KEY$4);
  var EVENT_SHOWN$4 = "shown".concat(EVENT_KEY$4);
  var EVENT_RESIZE$1 = "resize".concat(EVENT_KEY$4);
  var EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY$4);
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY$4);
  var EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss".concat(EVENT_KEY$4);
  var EVENT_CLICK_DATA_API$2 = "click".concat(EVENT_KEY$4).concat(DATA_API_KEY$2);
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var OPEN_SELECTOR$1 = '.modal.show';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  var Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  var DefaultType$6 = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };

  /**
   * Class definition
   */
  var Modal = /*#__PURE__*/function (_BaseComponent6) {
    _inherits(Modal, _BaseComponent6);
    var _super10 = _createSuper(Modal);
    function Modal(element, config) {
      var _this23;
      _classCallCheck(this, Modal);
      _this23 = _super10.call(this, element, config);
      _this23._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, _this23._element);
      _this23._backdrop = _this23._initializeBackDrop();
      _this23._focustrap = _this23._initializeFocusTrap();
      _this23._isShown = false;
      _this23._isTransitioning = false;
      _this23._scrollBar = new ScrollBarHelper();
      _this23._addEventListeners();
      return _this23;
    }

    // Getters
    _createClass(Modal, [{
      key: "toggle",
      value:
      // Public
      function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: "show",
      value: function show(relatedTarget) {
        var _this24 = this;
        if (this._isShown || this._isTransitioning) {
          return;
        }
        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
          relatedTarget: relatedTarget
        });
        if (showEvent.defaultPrevented) {
          return;
        }
        this._isShown = true;
        this._isTransitioning = true;
        this._scrollBar.hide();
        document.body.classList.add(CLASS_NAME_OPEN);
        this._adjustDialog();
        this._backdrop.show(function () {
          return _this24._showElement(relatedTarget);
        });
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this25 = this;
        if (!this._isShown || this._isTransitioning) {
          return;
        }
        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
        if (hideEvent.defaultPrevented) {
          return;
        }
        this._isShown = false;
        this._isTransitioning = true;
        this._focustrap.deactivate();
        this._element.classList.remove(CLASS_NAME_SHOW$4);
        this._queueCallback(function () {
          return _this25._hideModal();
        }, this._element, this._isAnimated());
      }
    }, {
      key: "dispose",
      value: function dispose() {
        for (var _i8 = 0, _arr2 = [window, this._dialog]; _i8 < _arr2.length; _i8++) {
          var htmlElement = _arr2[_i8];
          EventHandler.off(htmlElement, EVENT_KEY$4);
        }
        this._backdrop.dispose();
        this._focustrap.deactivate();
        _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }

      // Private
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new Backdrop({
          isVisible: Boolean(this._config.backdrop),
          // 'static' option will be translated to true, and booleans will keep their value,
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new FocusTrap({
          trapElement: this._element
        });
      }
    }, {
      key: "_showElement",
      value: function _showElement(relatedTarget) {
        var _this26 = this;
        // try to append dynamic modal
        if (!document.body.contains(this._element)) {
          document.body.append(this._element);
        }
        this._element.style.display = 'block';
        this._element.removeAttribute('aria-hidden');
        this._element.setAttribute('aria-modal', true);
        this._element.setAttribute('role', 'dialog');
        this._element.scrollTop = 0;
        var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
        if (modalBody) {
          modalBody.scrollTop = 0;
        }
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW$4);
        var transitionComplete = function transitionComplete() {
          if (_this26._config.focus) {
            _this26._focustrap.activate();
          }
          _this26._isTransitioning = false;
          EventHandler.trigger(_this26._element, EVENT_SHOWN$4, {
            relatedTarget: relatedTarget
          });
        };
        this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this27 = this;
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (event) {
          if (event.key !== ESCAPE_KEY$1) {
            return;
          }
          if (_this27._config.keyboard) {
            _this27.hide();
            return;
          }
          _this27._triggerBackdropTransition();
        });
        EventHandler.on(window, EVENT_RESIZE$1, function () {
          if (_this27._isShown && !_this27._isTransitioning) {
            _this27._adjustDialog();
          }
        });
        EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, function (event) {
          // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
          EventHandler.one(_this27._element, EVENT_CLICK_DISMISS, function (event2) {
            if (_this27._element !== event.target || _this27._element !== event2.target) {
              return;
            }
            if (_this27._config.backdrop === 'static') {
              _this27._triggerBackdropTransition();
              return;
            }
            if (_this27._config.backdrop) {
              _this27.hide();
            }
          });
        });
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this28 = this;
        this._element.style.display = 'none';
        this._element.setAttribute('aria-hidden', true);
        this._element.removeAttribute('aria-modal');
        this._element.removeAttribute('role');
        this._isTransitioning = false;
        this._backdrop.hide(function () {
          document.body.classList.remove(CLASS_NAME_OPEN);
          _this28._resetAdjustments();
          _this28._scrollBar.reset();
          EventHandler.trigger(_this28._element, EVENT_HIDDEN$4);
        });
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_FADE$3);
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this29 = this;
        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
        if (hideEvent.defaultPrevented) {
          return;
        }
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        var initialOverflowY = this._element.style.overflowY;
        // return if the following background transition hasn't yet completed
        if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
          return;
        }
        if (!isModalOverflowing) {
          this._element.style.overflowY = 'hidden';
        }
        this._element.classList.add(CLASS_NAME_STATIC);
        this._queueCallback(function () {
          _this29._element.classList.remove(CLASS_NAME_STATIC);
          _this29._queueCallback(function () {
            _this29._element.style.overflowY = initialOverflowY;
          }, _this29._dialog);
        }, this._dialog);
        this._element.focus();
      }

      /**
       * The following methods are used to handle overflowing modals
       */
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        var scrollbarWidth = this._scrollBar.getWidth();
        var isBodyOverflowing = scrollbarWidth > 0;
        if (isBodyOverflowing && !isModalOverflowing) {
          var property = isRTL() ? 'paddingLeft' : 'paddingRight';
          this._element.style[property] = "".concat(scrollbarWidth, "px");
        }
        if (!isBodyOverflowing && isModalOverflowing) {
          var _property = isRTL() ? 'paddingRight' : 'paddingLeft';
          this._element.style[_property] = "".concat(scrollbarWidth, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      }

      // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$6;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = Modal.getOrCreateInstance(this, config);
          if (typeof config !== 'string') {
            return;
          }
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config](relatedTarget);
        });
      }
    }]);
    return Modal;
  }(BaseComponent);
  /**
   * Data API implementation
   */
  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    var _this30 = this;
    var target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW$4, function (showEvent) {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN$4, function () {
        if (isVisible(_this30)) {
          _this30.focus();
        }
      });
    });

    // avoid conflict when clicking modal toggler while another one is open
    var alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    var data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);

  /**
   * jQuery
   */

  defineJQueryPlugin(Modal);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var NAME$6 = 'offcanvas';
  var DATA_KEY$3 = 'bs.offcanvas';
  var EVENT_KEY$3 = ".".concat(DATA_KEY$3);
  var DATA_API_KEY$1 = '.data-api';
  var EVENT_LOAD_DATA_API$2 = "load".concat(EVENT_KEY$3).concat(DATA_API_KEY$1);
  var ESCAPE_KEY = 'Escape';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_SHOWING$1 = 'showing';
  var CLASS_NAME_HIDING = 'hiding';
  var CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  var OPEN_SELECTOR = '.offcanvas.show';
  var EVENT_SHOW$3 = "show".concat(EVENT_KEY$3);
  var EVENT_SHOWN$3 = "shown".concat(EVENT_KEY$3);
  var EVENT_HIDE$3 = "hide".concat(EVENT_KEY$3);
  var EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY$3);
  var EVENT_HIDDEN$3 = "hidden".concat(EVENT_KEY$3);
  var EVENT_RESIZE = "resize".concat(EVENT_KEY$3);
  var EVENT_CLICK_DATA_API$1 = "click".concat(EVENT_KEY$3).concat(DATA_API_KEY$1);
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY$3);
  var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  var Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    scroll: 'boolean'
  };

  /**
   * Class definition
   */
  var Offcanvas = /*#__PURE__*/function (_BaseComponent7) {
    _inherits(Offcanvas, _BaseComponent7);
    var _super11 = _createSuper(Offcanvas);
    function Offcanvas(element, config) {
      var _this31;
      _classCallCheck(this, Offcanvas);
      _this31 = _super11.call(this, element, config);
      _this31._isShown = false;
      _this31._backdrop = _this31._initializeBackDrop();
      _this31._focustrap = _this31._initializeFocusTrap();
      _this31._addEventListeners();
      return _this31;
    }

    // Getters
    _createClass(Offcanvas, [{
      key: "toggle",
      value:
      // Public
      function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: "show",
      value: function show(relatedTarget) {
        var _this32 = this;
        if (this._isShown) {
          return;
        }
        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
          relatedTarget: relatedTarget
        });
        if (showEvent.defaultPrevented) {
          return;
        }
        this._isShown = true;
        this._backdrop.show();
        if (!this._config.scroll) {
          new ScrollBarHelper().hide();
        }
        this._element.setAttribute('aria-modal', true);
        this._element.setAttribute('role', 'dialog');
        this._element.classList.add(CLASS_NAME_SHOWING$1);
        var completeCallBack = function completeCallBack() {
          if (!_this32._config.scroll || _this32._config.backdrop) {
            _this32._focustrap.activate();
          }
          _this32._element.classList.add(CLASS_NAME_SHOW$3);
          _this32._element.classList.remove(CLASS_NAME_SHOWING$1);
          EventHandler.trigger(_this32._element, EVENT_SHOWN$3, {
            relatedTarget: relatedTarget
          });
        };
        this._queueCallback(completeCallBack, this._element, true);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this33 = this;
        if (!this._isShown) {
          return;
        }
        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
        if (hideEvent.defaultPrevented) {
          return;
        }
        this._focustrap.deactivate();
        this._element.blur();
        this._isShown = false;
        this._element.classList.add(CLASS_NAME_HIDING);
        this._backdrop.hide();
        var completeCallback = function completeCallback() {
          _this33._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
          _this33._element.removeAttribute('aria-modal');
          _this33._element.removeAttribute('role');
          if (!_this33._config.scroll) {
            new ScrollBarHelper().reset();
          }
          EventHandler.trigger(_this33._element, EVENT_HIDDEN$3);
        };
        this._queueCallback(completeCallback, this._element, true);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose();
        this._focustrap.deactivate();
        _get(_getPrototypeOf(Offcanvas.prototype), "dispose", this).call(this);
      }

      // Private
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this34 = this;
        var clickCallback = function clickCallback() {
          if (_this34._config.backdrop === 'static') {
            EventHandler.trigger(_this34._element, EVENT_HIDE_PREVENTED);
            return;
          }
          _this34.hide();
        };

        // 'static' option will be translated to true, and booleans will keep their value
        var isVisible = Boolean(this._config.backdrop);
        return new Backdrop({
          className: CLASS_NAME_BACKDROP,
          isVisible: isVisible,
          isAnimated: true,
          rootElement: this._element.parentNode,
          clickCallback: isVisible ? clickCallback : null
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new FocusTrap({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this35 = this;
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
          if (event.key !== ESCAPE_KEY) {
            return;
          }
          if (_this35._config.keyboard) {
            _this35.hide();
            return;
          }
          EventHandler.trigger(_this35._element, EVENT_HIDE_PREVENTED);
        });
      }

      // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Offcanvas.getOrCreateInstance(this, config);
          if (typeof config !== 'string') {
            return;
          }
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config](this);
        });
      }
    }]);
    return Offcanvas;
  }(BaseComponent);
  /**
   * Data API implementation
   */
  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    var _this36 = this;
    var target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$3, function () {
      // focus on trigger when it is closed
      if (isVisible(_this36)) {
        _this36.focus();
      }
    });

    // avoid conflict when clicking a toggler of an offcanvas, while another is open
    var alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    var data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
    var _iterator16 = _createForOfIteratorHelper(SelectorEngine.find(OPEN_SELECTOR)),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var selector = _step16.value;
        Offcanvas.getOrCreateInstance(selector).show();
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, function () {
    var _iterator17 = _createForOfIteratorHelper(SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var element = _step17.value;
        if (getComputedStyle(element).position !== 'fixed') {
          Offcanvas.getOrCreateInstance(element).hide();
        }
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
  });
  enableDismissTrigger(Offcanvas);

  /**
   * jQuery
   */

  defineJQueryPlugin(Offcanvas);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;

  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */
  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;

  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */
  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  var allowedAttribute = function allowedAttribute(attribute, allowedAttributeList) {
    var attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    }

    // Check if a regular expression validates the attribute.
    return allowedAttributeList.filter(function (attributeRegex) {
      return attributeRegex instanceof RegExp;
    }).some(function (regex) {
      return regex.test(attributeName);
    });
  };
  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    var _ref12;
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === 'function') {
      return sanitizeFunction(unsafeHtml);
    }
    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var elements = (_ref12 = []).concat.apply(_ref12, _toConsumableArray(createdDocument.body.querySelectorAll('*')));
    var _iterator18 = _createForOfIteratorHelper(elements),
      _step18;
    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var _ref13;
        var element = _step18.value;
        var elementName = element.nodeName.toLowerCase();
        if (!Object.keys(allowList).includes(elementName)) {
          element.remove();
          continue;
        }
        var attributeList = (_ref13 = []).concat.apply(_ref13, _toConsumableArray(element.attributes));
        var allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
        var _iterator19 = _createForOfIteratorHelper(attributeList),
          _step19;
        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var attribute = _step19.value;
            if (!allowedAttribute(attribute, allowedAttributes)) {
              element.removeAttribute(attribute.nodeName);
            }
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
    return createdDocument.body.innerHTML;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/template-factory.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var NAME$5 = 'TemplateFactory';
  var Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: '',
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: '<div></div>'
  };
  var DefaultType$4 = {
    allowList: 'object',
    content: 'object',
    extraClass: '(string|function)',
    html: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    template: 'string'
  };
  var DefaultContentType = {
    entry: '(string|element|function|null)',
    selector: '(string|element)'
  };

  /**
   * Class definition
   */
  var TemplateFactory = /*#__PURE__*/function (_Config5) {
    _inherits(TemplateFactory, _Config5);
    var _super12 = _createSuper(TemplateFactory);
    function TemplateFactory(config) {
      var _this37;
      _classCallCheck(this, TemplateFactory);
      _this37 = _super12.call(this);
      _this37._config = _this37._getConfig(config);
      return _this37;
    }

    // Getters
    _createClass(TemplateFactory, [{
      key: "getContent",
      value:
      // Public
      function getContent() {
        var _this38 = this;
        return Object.values(this._config.content).map(function (config) {
          return _this38._resolvePossibleFunction(config);
        }).filter(Boolean);
      }
    }, {
      key: "hasContent",
      value: function hasContent() {
        return this.getContent().length > 0;
      }
    }, {
      key: "changeContent",
      value: function changeContent(content) {
        this._checkContent(content);
        this._config.content = _objectSpread(_objectSpread({}, this._config.content), content);
        return this;
      }
    }, {
      key: "toHtml",
      value: function toHtml() {
        var templateWrapper = document.createElement('div');
        templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
        for (var _i9 = 0, _Object$entries5 = Object.entries(this._config.content); _i9 < _Object$entries5.length; _i9++) {
          var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i9], 2),
            selector = _Object$entries5$_i[0],
            text = _Object$entries5$_i[1];
          this._setContent(templateWrapper, text, selector);
        }
        var template = templateWrapper.children[0];
        var extraClass = this._resolvePossibleFunction(this._config.extraClass);
        if (extraClass) {
          var _template$classList;
          (_template$classList = template.classList).add.apply(_template$classList, _toConsumableArray(extraClass.split(' ')));
        }
        return template;
      }

      // Private
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(config) {
        _get(_getPrototypeOf(TemplateFactory.prototype), "_typeCheckConfig", this).call(this, config);
        this._checkContent(config.content);
      }
    }, {
      key: "_checkContent",
      value: function _checkContent(arg) {
        for (var _i10 = 0, _Object$entries6 = Object.entries(arg); _i10 < _Object$entries6.length; _i10++) {
          var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i10], 2),
            selector = _Object$entries6$_i[0],
            content = _Object$entries6$_i[1];
          _get(_getPrototypeOf(TemplateFactory.prototype), "_typeCheckConfig", this).call(this, {
            selector: selector,
            entry: content
          }, DefaultContentType);
        }
      }
    }, {
      key: "_setContent",
      value: function _setContent(template, content, selector) {
        var templateElement = SelectorEngine.findOne(selector, template);
        if (!templateElement) {
          return;
        }
        content = this._resolvePossibleFunction(content);
        if (!content) {
          templateElement.remove();
          return;
        }
        if (isElement$1(content)) {
          this._putElementInTemplate(getElement(content), templateElement);
          return;
        }
        if (this._config.html) {
          templateElement.innerHTML = this._maybeSanitize(content);
          return;
        }
        templateElement.textContent = content;
      }
    }, {
      key: "_maybeSanitize",
      value: function _maybeSanitize(arg) {
        return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(arg) {
        return execute(arg, [this]);
      }
    }, {
      key: "_putElementInTemplate",
      value: function _putElementInTemplate(element, templateElement) {
        if (this._config.html) {
          templateElement.innerHTML = '';
          templateElement.append(element);
          return;
        }
        templateElement.textContent = element.textContent;
      }
    }], [{
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$5;
      }
    }]);
    return TemplateFactory;
  }(Config);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */
  var NAME$4 = 'tooltip';
  var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_MODAL = 'modal';
  var CLASS_NAME_SHOW$2 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_MODAL = ".".concat(CLASS_NAME_MODAL);
  var EVENT_MODAL_HIDE = 'hide.bs.modal';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  var EVENT_HIDE$2 = 'hide';
  var EVENT_HIDDEN$2 = 'hidden';
  var EVENT_SHOW$2 = 'show';
  var EVENT_SHOWN$2 = 'shown';
  var EVENT_INSERTED = 'inserted';
  var EVENT_CLICK$1 = 'click';
  var EVENT_FOCUSIN$1 = 'focusin';
  var EVENT_FOCUSOUT$1 = 'focusout';
  var EVENT_MOUSEENTER = 'mouseenter';
  var EVENT_MOUSELEAVE = 'mouseleave';
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  var Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: 'clippingParents',
    container: false,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: false,
    offset: [0, 0],
    placement: 'top',
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    title: '',
    trigger: 'hover focus'
  };
  var DefaultType$3 = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
  };

  /**
   * Class definition
   */
  var Tooltip = /*#__PURE__*/function (_BaseComponent8) {
    _inherits(Tooltip, _BaseComponent8);
    var _super13 = _createSuper(Tooltip);
    function Tooltip(element, config) {
      var _this39;
      _classCallCheck(this, Tooltip);
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }
      _this39 = _super13.call(this, element, config);

      // Private
      _this39._isEnabled = true;
      _this39._timeout = 0;
      _this39._isHovered = null;
      _this39._activeTrigger = {};
      _this39._popper = null;
      _this39._templateFactory = null;
      _this39._newContent = null;

      // Protected
      _this39.tip = null;
      _this39._setListeners();
      if (!_this39._config.selector) {
        _this39._fixTitle();
      }
      return _this39;
    }

    // Getters
    _createClass(Tooltip, [{
      key: "enable",
      value:
      // Public
      function enable() {
        this._isEnabled = true;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = false;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (!this._isEnabled) {
          return;
        }
        this._activeTrigger.click = !this._activeTrigger.click;
        if (this._isShown()) {
          this._leave();
          return;
        }
        this._enter();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout);
        EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
        if (this._element.getAttribute('data-bs-original-title')) {
          this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
        }
        this._disposePopper();
        _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this40 = this;
        if (this._element.style.display === 'none') {
          throw new Error('Please use show on visible elements');
        }
        if (!(this._isWithContent() && this._isEnabled)) {
          return;
        }
        var showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
        var shadowRoot = findShadowRoot(this._element);
        var isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
        if (showEvent.defaultPrevented || !isInTheDom) {
          return;
        }

        // todo v6 remove this OR make it optional
        this._disposePopper();
        var tip = this._getTipElement();
        this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
        var container = this._config.container;
        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
          container.append(tip);
          EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
        }
        this._popper = this._createPopper(tip);
        tip.classList.add(CLASS_NAME_SHOW$2);

        // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement) {
          var _ref14;
          var _iterator20 = _createForOfIteratorHelper((_ref14 = []).concat.apply(_ref14, _toConsumableArray(document.body.children))),
            _step20;
          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var element = _step20.value;
              EventHandler.on(element, 'mouseover', noop);
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }
        }
        var complete = function complete() {
          EventHandler.trigger(_this40._element, _this40.constructor.eventName(EVENT_SHOWN$2));
          if (_this40._isHovered === false) {
            _this40._leave();
          }
          _this40._isHovered = false;
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this41 = this;
        if (!this._isShown()) {
          return;
        }
        var hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
        if (hideEvent.defaultPrevented) {
          return;
        }
        var tip = this._getTipElement();
        tip.classList.remove(CLASS_NAME_SHOW$2);

        // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) {
          var _ref15;
          var _iterator21 = _createForOfIteratorHelper((_ref15 = []).concat.apply(_ref15, _toConsumableArray(document.body.children))),
            _step21;
          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var element = _step21.value;
              EventHandler.off(element, 'mouseover', noop);
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
        }
        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;
        this._isHovered = null; // it is a trick to support manual triggering

        var complete = function complete() {
          if (_this41._isWithActiveTrigger()) {
            return;
          }
          if (!_this41._isHovered) {
            _this41._disposePopper();
          }
          _this41._element.removeAttribute('aria-describedby');
          EventHandler.trigger(_this41._element, _this41.constructor.eventName(EVENT_HIDDEN$2));
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
      }
    }, {
      key: "update",
      value: function update() {
        if (this._popper) {
          this._popper.update();
        }
      }

      // Protected
    }, {
      key: "_isWithContent",
      value: function _isWithContent() {
        return Boolean(this._getTitle());
      }
    }, {
      key: "_getTipElement",
      value: function _getTipElement() {
        if (!this.tip) {
          this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
        }
        return this.tip;
      }
    }, {
      key: "_createTipElement",
      value: function _createTipElement(content) {
        var tip = this._getTemplateFactory(content).toHtml();

        // todo: remove this check on v6
        if (!tip) {
          return null;
        }
        tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
        // todo: on v6 the following can be achieved with CSS only
        tip.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
        var tipId = getUID(this.constructor.NAME).toString();
        tip.setAttribute('id', tipId);
        if (this._isAnimated()) {
          tip.classList.add(CLASS_NAME_FADE$2);
        }
        return tip;
      }
    }, {
      key: "setContent",
      value: function setContent(content) {
        this._newContent = content;
        if (this._isShown()) {
          this._disposePopper();
          this.show();
        }
      }
    }, {
      key: "_getTemplateFactory",
      value: function _getTemplateFactory(content) {
        if (this._templateFactory) {
          this._templateFactory.changeContent(content);
        } else {
          this._templateFactory = new TemplateFactory(_objectSpread(_objectSpread({}, this._config), {}, {
            // the `content` var has to be after `this._config`
            // to override config.content in case of popover
            content: content,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
          }));
        }
        return this._templateFactory;
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return _defineProperty({}, SELECTOR_TOOLTIP_INNER, this._getTitle());
      }
    }, {
      key: "_getTitle",
      value: function _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
      }

      // Private
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(event) {
        return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(tip) {
        var placement = execute(this._config.placement, [this, tip, this._element]);
        var attachment = AttachmentMap[placement.toUpperCase()];
        return createPopper(this._element, tip, this._getPopperConfig(attachment));
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this42 = this;
        var offset = this._config.offset;
        if (typeof offset === 'string') {
          return offset.split(',').map(function (value) {
            return Number.parseInt(value, 10);
          });
        }
        if (typeof offset === 'function') {
          return function (popperData) {
            return offset(popperData, _this42._element);
          };
        }
        return offset;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(arg) {
        return execute(arg, [this._element]);
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(attachment) {
        var _this43 = this;
        var defaultBsPopperConfig = {
          placement: attachment,
          modifiers: [{
            name: 'flip',
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }, {
            name: 'preventOverflow',
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: 'arrow',
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: 'preSetPlacement',
            enabled: true,
            phase: 'beforeMain',
            fn: function fn(data) {
              // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
              // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
              _this43._getTipElement().setAttribute('data-popper-placement', data.state.placement);
            }
          }]
        };
        return _objectSpread(_objectSpread({}, defaultBsPopperConfig), execute(this._config.popperConfig, [defaultBsPopperConfig]));
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this44 = this;
        var triggers = this._config.trigger.split(' ');
        var _iterator22 = _createForOfIteratorHelper(triggers),
          _step22;
        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
            var trigger = _step22.value;
            if (trigger === 'click') {
              EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, function (event) {
                var context = _this44._initializeOnDelegatedTarget(event);
                context.toggle();
              });
            } else if (trigger !== TRIGGER_MANUAL) {
              var eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
              var eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
              EventHandler.on(this._element, eventIn, this._config.selector, function (event) {
                var context = _this44._initializeOnDelegatedTarget(event);
                context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                context._enter();
              });
              EventHandler.on(this._element, eventOut, this._config.selector, function (event) {
                var context = _this44._initializeOnDelegatedTarget(event);
                context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                context._leave();
              });
            }
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
        this._hideModalHandler = function () {
          if (_this44._element) {
            _this44.hide();
          }
        };
        EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var title = this._element.getAttribute('title');
        if (!title) {
          return;
        }
        if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
          this._element.setAttribute('aria-label', title);
        }
        this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility
        this._element.removeAttribute('title');
      }
    }, {
      key: "_enter",
      value: function _enter() {
        var _this45 = this;
        if (this._isShown() || this._isHovered) {
          this._isHovered = true;
          return;
        }
        this._isHovered = true;
        this._setTimeout(function () {
          if (_this45._isHovered) {
            _this45.show();
          }
        }, this._config.delay.show);
      }
    }, {
      key: "_leave",
      value: function _leave() {
        var _this46 = this;
        if (this._isWithActiveTrigger()) {
          return;
        }
        this._isHovered = false;
        this._setTimeout(function () {
          if (!_this46._isHovered) {
            _this46.hide();
          }
        }, this._config.delay.hide);
      }
    }, {
      key: "_setTimeout",
      value: function _setTimeout(handler, timeout) {
        clearTimeout(this._timeout);
        this._timeout = setTimeout(handler, timeout);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(true);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        var dataAttributes = Manipulator.getDataAttributes(this._element);
        for (var _i11 = 0, _Object$keys2 = Object.keys(dataAttributes); _i11 < _Object$keys2.length; _i11++) {
          var dataAttribute = _Object$keys2[_i11];
          if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
            delete dataAttributes[dataAttribute];
          }
        }
        config = _objectSpread(_objectSpread({}, dataAttributes), _typeof(config) === 'object' && config ? config : {});
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(config) {
        config.container = config.container === false ? document.body : getElement(config.container);
        if (typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }
        if (typeof config.title === 'number') {
          config.title = config.title.toString();
        }
        if (typeof config.content === 'number') {
          config.content = config.content.toString();
        }
        return config;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var config = {};
        for (var _i12 = 0, _Object$entries7 = Object.entries(this._config); _i12 < _Object$entries7.length; _i12++) {
          var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i12], 2),
            key = _Object$entries7$_i[0],
            value = _Object$entries7$_i[1];
          if (this.constructor.Default[key] !== value) {
            config[key] = value;
          }
        }
        config.selector = false;
        config.trigger = 'manual';

        // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`
        return config;
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        if (this._popper) {
          this._popper.destroy();
          this._popper = null;
        }
        if (this.tip) {
          this.tip.remove();
          this.tip = null;
        }
      }

      // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$3;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$4;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Tooltip.getOrCreateInstance(this, config);
          if (typeof config !== 'string') {
            return;
          }
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config]();
        });
      }
    }]);
    return Tooltip;
  }(BaseComponent);
  /**
   * jQuery
   */
  defineJQueryPlugin(Tooltip);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var NAME$3 = 'popover';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Default$2 = _objectSpread(_objectSpread({}, Tooltip.Default), {}, {
    content: '',
    offset: [0, 8],
    placement: 'right',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
    trigger: 'click'
  });
  var DefaultType$2 = _objectSpread(_objectSpread({}, Tooltip.DefaultType), {}, {
    content: '(null|string|element|function)'
  });

  /**
   * Class definition
   */
  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inherits(Popover, _Tooltip);
    var _super14 = _createSuper(Popover);
    function Popover() {
      _classCallCheck(this, Popover);
      return _super14.apply(this, arguments);
    }
    _createClass(Popover, [{
      key: "_isWithContent",
      value:
      // Overrides
      function _isWithContent() {
        return this._getTitle() || this._getContent();
      }

      // Private
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        var _ref17;
        return _ref17 = {}, _defineProperty(_ref17, SELECTOR_TITLE, this._getTitle()), _defineProperty(_ref17, SELECTOR_CONTENT, this._getContent()), _ref17;
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }

      // Static
    }], [{
      key: "Default",
      get:
      // Getters
      function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$3;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Popover.getOrCreateInstance(this, config);
          if (typeof config !== 'string') {
            return;
          }
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config]();
        });
      }
    }]);
    return Popover;
  }(Tooltip);
  /**
   * jQuery
   */
  defineJQueryPlugin(Popover);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var NAME$2 = 'scrollspy';
  var DATA_KEY$2 = 'bs.scrollspy';
  var EVENT_KEY$2 = ".".concat(DATA_KEY$2);
  var DATA_API_KEY = '.data-api';
  var EVENT_ACTIVATE = "activate".concat(EVENT_KEY$2);
  var EVENT_CLICK = "click".concat(EVENT_KEY$2);
  var EVENT_LOAD_DATA_API$1 = "load".concat(EVENT_KEY$2).concat(DATA_API_KEY);
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_TARGET_LINKS = '[href]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_LINK_ITEMS = "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_NAV_ITEMS, " > ").concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS);
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: '0px 0px -25%',
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  var DefaultType$1 = {
    offset: '(number|null)',
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: 'string',
    smoothScroll: 'boolean',
    target: 'element',
    threshold: 'array'
  };

  /**
   * Class definition
   */
  var ScrollSpy = /*#__PURE__*/function (_BaseComponent9) {
    _inherits(ScrollSpy, _BaseComponent9);
    var _super15 = _createSuper(ScrollSpy);
    function ScrollSpy(element, config) {
      var _this47;
      _classCallCheck(this, ScrollSpy);
      _this47 = _super15.call(this, element, config);

      // this._element is the observablesContainer and config.target the menu links wrapper
      _this47._targetLinks = new Map();
      _this47._observableSections = new Map();
      _this47._rootElement = getComputedStyle(_this47._element).overflowY === 'visible' ? null : _this47._element;
      _this47._activeTarget = null;
      _this47._observer = null;
      _this47._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      _this47.refresh(); // initialize
      return _this47;
    }

    // Getters
    _createClass(ScrollSpy, [{
      key: "refresh",
      value:
      // Public
      function refresh() {
        this._initializeTargetsAndObservables();
        this._maybeEnableSmoothScroll();
        if (this._observer) {
          this._observer.disconnect();
        } else {
          this._observer = this._getNewObserver();
        }
        var _iterator23 = _createForOfIteratorHelper(this._observableSections.values()),
          _step23;
        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var section = _step23.value;
            this._observer.observe(section);
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._observer.disconnect();
        _get(_getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this);
      }

      // Private
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(config) {
        // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
        config.target = getElement(config.target) || document.body;

        // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
        config.rootMargin = config.offset ? "".concat(config.offset, "px 0px -30%") : config.rootMargin;
        if (typeof config.threshold === 'string') {
          config.threshold = config.threshold.split(',').map(function (value) {
            return Number.parseFloat(value);
          });
        }
        return config;
      }
    }, {
      key: "_maybeEnableSmoothScroll",
      value: function _maybeEnableSmoothScroll() {
        var _this48 = this;
        if (!this._config.smoothScroll) {
          return;
        }

        // unregister any previous listeners
        EventHandler.off(this._config.target, EVENT_CLICK);
        EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, function (event) {
          var observableSection = _this48._observableSections.get(event.target.hash);
          if (observableSection) {
            event.preventDefault();
            var root = _this48._rootElement || window;
            var height = observableSection.offsetTop - _this48._element.offsetTop;
            if (root.scrollTo) {
              root.scrollTo({
                top: height,
                behavior: 'smooth'
              });
              return;
            }

            // Chrome 60 doesn't support `scrollTo`
            root.scrollTop = height;
          }
        });
      }
    }, {
      key: "_getNewObserver",
      value: function _getNewObserver() {
        var _this49 = this;
        var options = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver(function (entries) {
          return _this49._observerCallback(entries);
        }, options);
      }

      // The logic of selection
    }, {
      key: "_observerCallback",
      value: function _observerCallback(entries) {
        var _this50 = this;
        var targetElement = function targetElement(entry) {
          return _this50._targetLinks.get("#".concat(entry.target.id));
        };
        var activate = function activate(entry) {
          _this50._previousScrollData.visibleEntryTop = entry.target.offsetTop;
          _this50._process(targetElement(entry));
        };
        var parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
        var userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = parentScrollTop;
        var _iterator24 = _createForOfIteratorHelper(entries),
          _step24;
        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var entry = _step24.value;
            if (!entry.isIntersecting) {
              this._activeTarget = null;
              this._clearActiveClass(targetElement(entry));
              continue;
            }
            var entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            // if we are scrolling down, pick the bigger offsetTop
            if (userScrollsDown && entryIsLowerThanPrevious) {
              activate(entry);
              // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
              if (!parentScrollTop) {
                return;
              }
              continue;
            }

            // if we are scrolling up, pick the smallest offsetTop
            if (!userScrollsDown && !entryIsLowerThanPrevious) {
              activate(entry);
            }
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
    }, {
      key: "_initializeTargetsAndObservables",
      value: function _initializeTargetsAndObservables() {
        this._targetLinks = new Map();
        this._observableSections = new Map();
        var targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
        var _iterator25 = _createForOfIteratorHelper(targetLinks),
          _step25;
        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var anchor = _step25.value;
            // ensure that the anchor has an id and is not disabled
            if (!anchor.hash || isDisabled(anchor)) {
              continue;
            }
            var observableSection = SelectorEngine.findOne(anchor.hash, this._element);

            // ensure that the observableSection exists & is visible
            if (isVisible(observableSection)) {
              this._targetLinks.set(anchor.hash, anchor);
              this._observableSections.set(anchor.hash, observableSection);
            }
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }
    }, {
      key: "_process",
      value: function _process(target) {
        if (this._activeTarget === target) {
          return;
        }
        this._clearActiveClass(this._config.target);
        this._activeTarget = target;
        target.classList.add(CLASS_NAME_ACTIVE$1);
        this._activateParents(target);
        EventHandler.trigger(this._element, EVENT_ACTIVATE, {
          relatedTarget: target
        });
      }
    }, {
      key: "_activateParents",
      value: function _activateParents(target) {
        // Activate dropdown parents
        if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
          SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
          return;
        }
        var _iterator26 = _createForOfIteratorHelper(SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)),
          _step26;
        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var listGroup = _step26.value;
            // Set triggered links parents as active
            // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
            var _iterator27 = _createForOfIteratorHelper(SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)),
              _step27;
            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var item = _step27.value;
                item.classList.add(CLASS_NAME_ACTIVE$1);
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }
      }
    }, {
      key: "_clearActiveClass",
      value: function _clearActiveClass(parent) {
        parent.classList.remove(CLASS_NAME_ACTIVE$1);
        var activeNodes = SelectorEngine.find("".concat(SELECTOR_TARGET_LINKS, ".").concat(CLASS_NAME_ACTIVE$1), parent);
        var _iterator28 = _createForOfIteratorHelper(activeNodes),
          _step28;
        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var node = _step28.value;
            node.classList.remove(CLASS_NAME_ACTIVE$1);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      }

      // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$1;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$2;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = ScrollSpy.getOrCreateInstance(this, config);
          if (typeof config !== 'string') {
            return;
          }
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config]();
        });
      }
    }]);
    return ScrollSpy;
  }(BaseComponent);
  /**
   * Data API implementation
   */
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
    var _iterator29 = _createForOfIteratorHelper(SelectorEngine.find(SELECTOR_DATA_SPY)),
      _step29;
    try {
      for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
        var spy = _step29.value;
        ScrollSpy.getOrCreateInstance(spy);
      }
    } catch (err) {
      _iterator29.e(err);
    } finally {
      _iterator29.f();
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(ScrollSpy);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var NAME$1 = 'tab';
  var DATA_KEY$1 = 'bs.tab';
  var EVENT_KEY$1 = ".".concat(DATA_KEY$1);
  var EVENT_HIDE$1 = "hide".concat(EVENT_KEY$1);
  var EVENT_HIDDEN$1 = "hidden".concat(EVENT_KEY$1);
  var EVENT_SHOW$1 = "show".concat(EVENT_KEY$1);
  var EVENT_SHOWN$1 = "shown".concat(EVENT_KEY$1);
  var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY$1);
  var EVENT_KEYDOWN = "keydown".concat(EVENT_KEY$1);
  var EVENT_LOAD_DATA_API = "load".concat(EVENT_KEY$1);
  var ARROW_LEFT_KEY = 'ArrowLeft';
  var ARROW_RIGHT_KEY = 'ArrowRight';
  var ARROW_UP_KEY = 'ArrowUp';
  var ARROW_DOWN_KEY = 'ArrowDown';
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_DROPDOWN = 'dropdown';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
  var NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)';
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = '.nav-item, .list-group-item';
  var SELECTOR_INNER = ".nav-link".concat(NOT_SELECTOR_DROPDOWN_TOGGLE, ", .list-group-item").concat(NOT_SELECTOR_DROPDOWN_TOGGLE, ", [role=\"tab\"]").concat(NOT_SELECTOR_DROPDOWN_TOGGLE);
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // todo:v6: could be only `tab`
  var SELECTOR_INNER_ELEM = "".concat(SELECTOR_INNER, ", ").concat(SELECTOR_DATA_TOGGLE);
  var SELECTOR_DATA_TOGGLE_ACTIVE = ".".concat(CLASS_NAME_ACTIVE, "[data-bs-toggle=\"tab\"], .").concat(CLASS_NAME_ACTIVE, "[data-bs-toggle=\"pill\"], .").concat(CLASS_NAME_ACTIVE, "[data-bs-toggle=\"list\"]");

  /**
   * Class definition
   */
  var Tab = /*#__PURE__*/function (_BaseComponent10) {
    _inherits(Tab, _BaseComponent10);
    var _super16 = _createSuper(Tab);
    function Tab(element) {
      var _this51;
      _classCallCheck(this, Tab);
      _this51 = _super16.call(this, element);
      _this51._parent = _this51._element.closest(SELECTOR_TAB_PANEL);
      if (!_this51._parent) {
        return _possibleConstructorReturn(_this51);
        // todo: should Throw exception on v6
        // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
      }

      // Set up initial aria attributes
      _this51._setInitialAttributes(_this51._parent, _this51._getChildren());
      EventHandler.on(_this51._element, EVENT_KEYDOWN, function (event) {
        return _this51._keydown(event);
      });
      return _this51;
    }

    // Getters
    _createClass(Tab, [{
      key: "show",
      value:
      // Public
      function show() {
        // Shows this elem and deactivate the active sibling if exists
        var innerElem = this._element;
        if (this._elemIsActive(innerElem)) {
          return;
        }

        // Search for active tab on same parent to deactivate it
        var active = this._getActiveElem();
        var hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
          relatedTarget: innerElem
        }) : null;
        var showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
          relatedTarget: active
        });
        if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
          return;
        }
        this._deactivate(active, innerElem);
        this._activate(innerElem, active);
      }

      // Private
    }, {
      key: "_activate",
      value: function _activate(element, relatedElem) {
        var _this52 = this;
        if (!element) {
          return;
        }
        element.classList.add(CLASS_NAME_ACTIVE);
        this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section

        var complete = function complete() {
          if (element.getAttribute('role') !== 'tab') {
            element.classList.add(CLASS_NAME_SHOW$1);
            return;
          }
          element.removeAttribute('tabindex');
          element.setAttribute('aria-selected', true);
          _this52._toggleDropDown(element, true);
          EventHandler.trigger(element, EVENT_SHOWN$1, {
            relatedTarget: relatedElem
          });
        };
        this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
      }
    }, {
      key: "_deactivate",
      value: function _deactivate(element, relatedElem) {
        var _this53 = this;
        if (!element) {
          return;
        }
        element.classList.remove(CLASS_NAME_ACTIVE);
        element.blur();
        this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too

        var complete = function complete() {
          if (element.getAttribute('role') !== 'tab') {
            element.classList.remove(CLASS_NAME_SHOW$1);
            return;
          }
          element.setAttribute('aria-selected', false);
          element.setAttribute('tabindex', '-1');
          _this53._toggleDropDown(element, false);
          EventHandler.trigger(element, EVENT_HIDDEN$1, {
            relatedTarget: relatedElem
          });
        };
        this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
      }
    }, {
      key: "_keydown",
      value: function _keydown(event) {
        if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
          return;
        }
        event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
        event.preventDefault();
        var isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        var nextActiveElement = getNextActiveElement(this._getChildren().filter(function (element) {
          return !isDisabled(element);
        }), event.target, isNext, true);
        if (nextActiveElement) {
          nextActiveElement.focus({
            preventScroll: true
          });
          Tab.getOrCreateInstance(nextActiveElement).show();
        }
      }
    }, {
      key: "_getChildren",
      value: function _getChildren() {
        // collection of inner elements
        return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
      }
    }, {
      key: "_getActiveElem",
      value: function _getActiveElem() {
        var _this54 = this;
        return this._getChildren().find(function (child) {
          return _this54._elemIsActive(child);
        }) || null;
      }
    }, {
      key: "_setInitialAttributes",
      value: function _setInitialAttributes(parent, children) {
        this._setAttributeIfNotExists(parent, 'role', 'tablist');
        var _iterator30 = _createForOfIteratorHelper(children),
          _step30;
        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            var child = _step30.value;
            this._setInitialAttributesOnChild(child);
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }
      }
    }, {
      key: "_setInitialAttributesOnChild",
      value: function _setInitialAttributesOnChild(child) {
        child = this._getInnerElement(child);
        var isActive = this._elemIsActive(child);
        var outerElem = this._getOuterElement(child);
        child.setAttribute('aria-selected', isActive);
        if (outerElem !== child) {
          this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
        }
        if (!isActive) {
          child.setAttribute('tabindex', '-1');
        }
        this._setAttributeIfNotExists(child, 'role', 'tab');

        // set attributes to the related panel too
        this._setInitialAttributesOnTargetPanel(child);
      }
    }, {
      key: "_setInitialAttributesOnTargetPanel",
      value: function _setInitialAttributesOnTargetPanel(child) {
        var target = SelectorEngine.getElementFromSelector(child);
        if (!target) {
          return;
        }
        this._setAttributeIfNotExists(target, 'role', 'tabpanel');
        if (child.id) {
          this._setAttributeIfNotExists(target, 'aria-labelledby', "".concat(child.id));
        }
      }
    }, {
      key: "_toggleDropDown",
      value: function _toggleDropDown(element, open) {
        var outerElem = this._getOuterElement(element);
        if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
          return;
        }
        var toggle = function toggle(selector, className) {
          var element = SelectorEngine.findOne(selector, outerElem);
          if (element) {
            element.classList.toggle(className, open);
          }
        };
        toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
        toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
        outerElem.setAttribute('aria-expanded', open);
      }
    }, {
      key: "_setAttributeIfNotExists",
      value: function _setAttributeIfNotExists(element, attribute, value) {
        if (!element.hasAttribute(attribute)) {
          element.setAttribute(attribute, value);
        }
      }
    }, {
      key: "_elemIsActive",
      value: function _elemIsActive(elem) {
        return elem.classList.contains(CLASS_NAME_ACTIVE);
      }

      // Try to get the inner element (usually the .nav-link)
    }, {
      key: "_getInnerElement",
      value: function _getInnerElement(elem) {
        return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
      }

      // Try to get the outer element (usually the .nav-item)
    }, {
      key: "_getOuterElement",
      value: function _getOuterElement(elem) {
        return elem.closest(SELECTOR_OUTER) || elem;
      }

      // Static
    }], [{
      key: "NAME",
      get: function get() {
        return NAME$1;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Tab.getOrCreateInstance(this);
          if (typeof config !== 'string') {
            return;
          }
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config]();
        });
      }
    }]);
    return Tab;
  }(BaseComponent);
  /**
   * Data API implementation
   */
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });

  /**
   * Initialize on focus
   */
  EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
    var _iterator31 = _createForOfIteratorHelper(SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)),
      _step31;
    try {
      for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
        var element = _step31.value;
        Tab.getOrCreateInstance(element);
      }
    } catch (err) {
      _iterator31.e(err);
    } finally {
      _iterator31.f();
    }
  });
  /**
   * jQuery
   */

  defineJQueryPlugin(Tab);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var NAME = 'toast';
  var DATA_KEY = 'bs.toast';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var EVENT_MOUSEOVER = "mouseover".concat(EVENT_KEY);
  var EVENT_MOUSEOUT = "mouseout".concat(EVENT_KEY);
  var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
  var EVENT_FOCUSOUT = "focusout".concat(EVENT_KEY);
  var EVENT_HIDE = "hide".concat(EVENT_KEY);
  var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
  var EVENT_SHOW = "show".concat(EVENT_KEY);
  var EVENT_SHOWN = "shown".concat(EVENT_KEY);
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };

  /**
   * Class definition
   */
  var Toast = /*#__PURE__*/function (_BaseComponent11) {
    _inherits(Toast, _BaseComponent11);
    var _super17 = _createSuper(Toast);
    function Toast(element, config) {
      var _this55;
      _classCallCheck(this, Toast);
      _this55 = _super17.call(this, element, config);
      _this55._timeout = null;
      _this55._hasMouseInteraction = false;
      _this55._hasKeyboardInteraction = false;
      _this55._setListeners();
      return _this55;
    }

    // Getters
    _createClass(Toast, [{
      key: "show",
      value:
      // Public
      function show() {
        var _this56 = this;
        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
        if (showEvent.defaultPrevented) {
          return;
        }
        this._clearTimeout();
        if (this._config.animation) {
          this._element.classList.add(CLASS_NAME_FADE);
        }
        var complete = function complete() {
          _this56._element.classList.remove(CLASS_NAME_SHOWING);
          EventHandler.trigger(_this56._element, EVENT_SHOWN);
          _this56._maybeScheduleHide();
        };
        this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this57 = this;
        if (!this.isShown()) {
          return;
        }
        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
        if (hideEvent.defaultPrevented) {
          return;
        }
        var complete = function complete() {
          _this57._element.classList.add(CLASS_NAME_HIDE); // @deprecated
          _this57._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
          EventHandler.trigger(_this57._element, EVENT_HIDDEN);
        };
        this._element.classList.add(CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout();
        if (this.isShown()) {
          this._element.classList.remove(CLASS_NAME_SHOW);
        }
        _get(_getPrototypeOf(Toast.prototype), "dispose", this).call(this);
      }
    }, {
      key: "isShown",
      value: function isShown() {
        return this._element.classList.contains(CLASS_NAME_SHOW);
      }

      // Private
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this58 = this;
        if (!this._config.autohide) {
          return;
        }
        if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
          return;
        }
        this._timeout = setTimeout(function () {
          _this58.hide();
        }, this._config.delay);
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(event, isInteracting) {
        switch (event.type) {
          case 'mouseover':
          case 'mouseout':
            {
              this._hasMouseInteraction = isInteracting;
              break;
            }
          case 'focusin':
          case 'focusout':
            {
              this._hasKeyboardInteraction = isInteracting;
              break;
            }
        }
        if (isInteracting) {
          this._clearTimeout();
          return;
        }
        var nextElement = event.relatedTarget;
        if (this._element === nextElement || this._element.contains(nextElement)) {
          return;
        }
        this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this59 = this;
        EventHandler.on(this._element, EVENT_MOUSEOVER, function (event) {
          return _this59._onInteraction(event, true);
        });
        EventHandler.on(this._element, EVENT_MOUSEOUT, function (event) {
          return _this59._onInteraction(event, false);
        });
        EventHandler.on(this._element, EVENT_FOCUSIN, function (event) {
          return _this59._onInteraction(event, true);
        });
        EventHandler.on(this._element, EVENT_FOCUSOUT, function (event) {
          return _this59._onInteraction(event, false);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
      }

      // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Toast.getOrCreateInstance(this, config);
          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }
            data[config](this);
          }
        });
      }
    }]);
    return Toast;
  }(BaseComponent);
  /**
   * Data API implementation
   */
  enableDismissTrigger(Toast);

  /**
   * jQuery
   */

  defineJQueryPlugin(Toast);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var index_umd = {
    Alert: Alert,
    Button: Button,
    Carousel: Carousel,
    Collapse: Collapse,
    Dropdown: Dropdown,
    Modal: Modal,
    Offcanvas: Offcanvas,
    Popover: Popover,
    ScrollSpy: ScrollSpy,
    Tab: Tab,
    Toast: Toast,
    Tooltip: Tooltip
  };
  return index_umd;
});

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-4976d8"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRCtDOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQUFBQyxRQUFBLDBCQUFBQyxXQUFBO0VBQUFDLFNBQUEsQ0FBQUYsUUFBQSxFQUFBQyxXQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLFFBQUE7RUFBQSxTQUFBQSxTQUFBO0lBQUFLLGVBQUEsT0FBQUwsUUFBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBUixRQUFBO0lBQUFTLEdBQUE7SUFBQUMsS0FBQSxFQVVJLFNBQUFDLFFBQUEsRUFBVTtNQUNOLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLEdBQUcsbUVBQW1FO0lBQ2xHO0VBQUM7RUFBQSxPQUFBYixRQUFBO0FBQUEsRUFId0JELDJEQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1h2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDMEI7O0FBRTFCO0FBQ3FCOztBQUVyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiNEQ7O0FBRTVEO0FBQ08sSUFBTWlCLEdBQUcsR0FBR0QsMEVBQWdCLENBQUNFLHlJQUluQyxDQUFDOztBQUVGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFVBQVVFLE1BQU0sRUFBRUMsT0FBTyxFQUFFO0VBQzFCLE9BQWMsT0FBQUUsT0FBQSxDQUFQRCxPQUFPLE9BQUssUUFBUSxJQUFJLFFBQWEsS0FBSyxXQUFXLEdBQUdFLE1BQU0sQ0FBQ0YsT0FBTyxHQUFHRCxPQUFPLEVBQUUsR0FDekYsS0FBMEMsR0FBR0ksb0NBQU9KLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxrR0FBQyxJQUMzREQsQ0FBc0csQ0FBQztBQUMxRyxDQUFDLEVBQUUsSUFBSSxFQUFHLFlBQVk7RUFBRSxZQUFZOztFQUVsQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRSxJQUFBVSxpQkFBQTtFQU9BLElBQU1DLE9BQU8sR0FBRyxPQUFPO0VBQ3ZCLElBQU1DLHVCQUF1QixHQUFHLElBQUk7RUFDcEMsSUFBTUMsY0FBYyxHQUFHLGVBQWU7O0VBRXRDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFDRSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUdDLFFBQVEsRUFBSTtJQUNoQyxJQUFJQSxRQUFRLElBQUlDLE1BQU0sQ0FBQ0MsR0FBRyxJQUFJRCxNQUFNLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTSxFQUFFO01BQy9DO01BQ0FILFFBQVEsR0FBR0EsUUFBUSxDQUFDSSxPQUFPLENBQUMsZUFBZSxFQUFFLFVBQUNDLEtBQUssRUFBRUMsRUFBRTtRQUFBLFdBQUFDLE1BQUEsQ0FBU0wsR0FBRyxDQUFDQyxNQUFNLENBQUNHLEVBQUUsQ0FBQztNQUFBLENBQUUsQ0FBQztJQUNuRjtJQUNBLE9BQU9OLFFBQVE7RUFDakIsQ0FBQzs7RUFFRDtFQUNBLElBQU1RLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFHQyxNQUFNLEVBQUk7SUFDdkIsSUFBSUEsTUFBTSxLQUFLLElBQUksSUFBSUEsTUFBTSxLQUFLQyxTQUFTLEVBQUU7TUFDM0MsVUFBQUgsTUFBQSxDQUFVRSxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0UsTUFBTSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDTCxNQUFNLENBQUMsQ0FBQ0osS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVSxXQUFXLEVBQUU7RUFDckYsQ0FBQzs7RUFFRDtBQUNGO0FBQ0E7O0VBRUUsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUdDLE1BQU0sRUFBSTtJQUN2QixHQUFHO01BQ0RBLE1BQU0sSUFBSUMsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUd4QixPQUFPLENBQUM7SUFDL0MsQ0FBQyxRQUFReUIsUUFBUSxDQUFDQyxjQUFjLENBQUNMLE1BQU0sQ0FBQztJQUN4QyxPQUFPQSxNQUFNO0VBQ2YsQ0FBQztFQUNELElBQU1NLGdDQUFnQyxHQUFHLFNBQW5DQSxnQ0FBZ0NBLENBQUc3QyxPQUFPLEVBQUk7SUFDbEQsSUFBSSxDQUFDQSxPQUFPLEVBQUU7TUFDWixPQUFPLENBQUM7SUFDVjs7SUFFQTtJQUNBLElBQUE4QyxxQkFBQSxHQUdJdkIsTUFBTSxDQUFDd0IsZ0JBQWdCLENBQUMvQyxPQUFPLENBQUM7TUFGbENnRCxrQkFBa0IsR0FBQUYscUJBQUEsQ0FBbEJFLGtCQUFrQjtNQUNsQkMsZUFBZSxHQUFBSCxxQkFBQSxDQUFmRyxlQUFlO0lBRWpCLElBQU1DLHVCQUF1QixHQUFHQyxNQUFNLENBQUNDLFVBQVUsQ0FBQ0osa0JBQWtCLENBQUM7SUFDckUsSUFBTUssb0JBQW9CLEdBQUdGLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDSCxlQUFlLENBQUM7O0lBRS9EO0lBQ0EsSUFBSSxDQUFDQyx1QkFBdUIsSUFBSSxDQUFDRyxvQkFBb0IsRUFBRTtNQUNyRCxPQUFPLENBQUM7SUFDVjs7SUFFQTtJQUNBTCxrQkFBa0IsR0FBR0Esa0JBQWtCLENBQUNNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckRMLGVBQWUsR0FBR0EsZUFBZSxDQUFDSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLE9BQU8sQ0FBQ0gsTUFBTSxDQUFDQyxVQUFVLENBQUNKLGtCQUFrQixDQUFDLEdBQUdHLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDSCxlQUFlLENBQUMsSUFBSTlCLHVCQUF1QjtFQUMvRyxDQUFDO0VBQ0QsSUFBTW9DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUd2RCxPQUFPLEVBQUk7SUFDdENBLE9BQU8sQ0FBQ3dELGFBQWEsQ0FBQyxJQUFJQyxLQUFLLENBQUNyQyxjQUFjLENBQUMsQ0FBQztFQUNsRCxDQUFDO0VBQ0QsSUFBTXNDLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFHM0IsTUFBTSxFQUFJO0lBQzVCLElBQUksQ0FBQ0EsTUFBTSxJQUFJckIsT0FBQSxDQUFPcUIsTUFBTSxNQUFLLFFBQVEsRUFBRTtNQUN6QyxPQUFPLEtBQUs7SUFDZDtJQUNBLElBQUksT0FBT0EsTUFBTSxDQUFDNEIsTUFBTSxLQUFLLFdBQVcsRUFBRTtNQUN4QzVCLE1BQU0sR0FBR0EsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwQjtJQUNBLE9BQU8sT0FBT0EsTUFBTSxDQUFDNkIsUUFBUSxLQUFLLFdBQVc7RUFDL0MsQ0FBQztFQUNELElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFHOUIsTUFBTSxFQUFJO0lBQzNCO0lBQ0EsSUFBSTJCLFdBQVcsQ0FBQzNCLE1BQU0sQ0FBQyxFQUFFO01BQ3ZCLE9BQU9BLE1BQU0sQ0FBQzRCLE1BQU0sR0FBRzVCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBR0EsTUFBTTtJQUMzQztJQUNBLElBQUksT0FBT0EsTUFBTSxLQUFLLFFBQVEsSUFBSUEsTUFBTSxDQUFDK0IsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUNuRCxPQUFPbkIsUUFBUSxDQUFDb0IsYUFBYSxDQUFDMUMsYUFBYSxDQUFDVSxNQUFNLENBQUMsQ0FBQztJQUN0RDtJQUNBLE9BQU8sSUFBSTtFQUNiLENBQUM7RUFDRCxJQUFNaUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUdoRSxPQUFPLEVBQUk7SUFDM0IsSUFBSSxDQUFDMEQsV0FBVyxDQUFDMUQsT0FBTyxDQUFDLElBQUlBLE9BQU8sQ0FBQ2lFLGNBQWMsRUFBRSxDQUFDSCxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ2xFLE9BQU8sS0FBSztJQUNkO0lBQ0EsSUFBTUksZ0JBQWdCLEdBQUduQixnQkFBZ0IsQ0FBQy9DLE9BQU8sQ0FBQyxDQUFDbUUsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUztJQUMvRjtJQUNBLElBQU1DLGFBQWEsR0FBR3BFLE9BQU8sQ0FBQ3FFLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztJQUM1RCxJQUFJLENBQUNELGFBQWEsRUFBRTtNQUNsQixPQUFPRixnQkFBZ0I7SUFDekI7SUFDQSxJQUFJRSxhQUFhLEtBQUtwRSxPQUFPLEVBQUU7TUFDN0IsSUFBTXNFLE9BQU8sR0FBR3RFLE9BQU8sQ0FBQ3FFLE9BQU8sQ0FBQyxTQUFTLENBQUM7TUFDMUMsSUFBSUMsT0FBTyxJQUFJQSxPQUFPLENBQUNDLFVBQVUsS0FBS0gsYUFBYSxFQUFFO1FBQ25ELE9BQU8sS0FBSztNQUNkO01BQ0EsSUFBSUUsT0FBTyxLQUFLLElBQUksRUFBRTtRQUNwQixPQUFPLEtBQUs7TUFDZDtJQUNGO0lBQ0EsT0FBT0osZ0JBQWdCO0VBQ3pCLENBQUM7RUFDRCxJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBR3hFLE9BQU8sRUFBSTtJQUM1QixJQUFJLENBQUNBLE9BQU8sSUFBSUEsT0FBTyxDQUFDNEQsUUFBUSxLQUFLYSxJQUFJLENBQUNDLFlBQVksRUFBRTtNQUN0RCxPQUFPLElBQUk7SUFDYjtJQUNBLElBQUkxRSxPQUFPLENBQUMyRSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUMxQyxPQUFPLElBQUk7SUFDYjtJQUNBLElBQUksT0FBTzVFLE9BQU8sQ0FBQzZFLFFBQVEsS0FBSyxXQUFXLEVBQUU7TUFDM0MsT0FBTzdFLE9BQU8sQ0FBQzZFLFFBQVE7SUFDekI7SUFDQSxPQUFPN0UsT0FBTyxDQUFDOEUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJOUUsT0FBTyxDQUFDK0UsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLE9BQU87RUFDekYsQ0FBQztFQUNELElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBR2hGLE9BQU8sRUFBSTtJQUNoQyxJQUFJLENBQUMyQyxRQUFRLENBQUNzQyxlQUFlLENBQUNDLFlBQVksRUFBRTtNQUMxQyxPQUFPLElBQUk7SUFDYjs7SUFFQTtJQUNBLElBQUksT0FBT2xGLE9BQU8sQ0FBQ21GLFdBQVcsS0FBSyxVQUFVLEVBQUU7TUFDN0MsSUFBTUMsSUFBSSxHQUFHcEYsT0FBTyxDQUFDbUYsV0FBVyxFQUFFO01BQ2xDLE9BQU9DLElBQUksWUFBWUMsVUFBVSxHQUFHRCxJQUFJLEdBQUcsSUFBSTtJQUNqRDtJQUNBLElBQUlwRixPQUFPLFlBQVlxRixVQUFVLEVBQUU7TUFDakMsT0FBT3JGLE9BQU87SUFDaEI7O0lBRUE7SUFDQSxJQUFJLENBQUNBLE9BQU8sQ0FBQ3VFLFVBQVUsRUFBRTtNQUN2QixPQUFPLElBQUk7SUFDYjtJQUNBLE9BQU9TLGNBQWMsQ0FBQ2hGLE9BQU8sQ0FBQ3VFLFVBQVUsQ0FBQztFQUMzQyxDQUFDO0VBQ0QsSUFBTWUsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBUyxDQUFDLENBQUM7O0VBRXJCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBR3ZGLE9BQU8sRUFBSTtJQUN4QkEsT0FBTyxDQUFDd0YsWUFBWSxDQUFDLENBQUM7RUFDeEIsQ0FBQzs7RUFFRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3RCLElBQUlsRSxNQUFNLENBQUNtRSxNQUFNLElBQUksQ0FBQy9DLFFBQVEsQ0FBQ2dELElBQUksQ0FBQ2IsWUFBWSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7TUFDckUsT0FBT3ZELE1BQU0sQ0FBQ21FLE1BQU07SUFDdEI7SUFDQSxPQUFPLElBQUk7RUFDYixDQUFDO0VBQ0QsSUFBTUUseUJBQXlCLEdBQUcsRUFBRTtFQUNwQyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRLEVBQUk7SUFDckMsSUFBSW5ELFFBQVEsQ0FBQ29ELFVBQVUsS0FBSyxTQUFTLEVBQUU7TUFDckM7TUFDQSxJQUFJLENBQUNILHlCQUF5QixDQUFDOUIsTUFBTSxFQUFFO1FBQ3JDbkIsUUFBUSxDQUFDcUQsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtVQUNsRCxTQUFBQyxHQUFBLE1BQUFDLHFCQUFBLEdBQXVCTix5QkFBeUIsRUFBQUssR0FBQSxHQUFBQyxxQkFBQSxDQUFBcEMsTUFBQSxFQUFBbUMsR0FBQSxJQUFFO1lBQTdDLElBQU1ILFNBQVEsR0FBQUkscUJBQUEsQ0FBQUQsR0FBQTtZQUNqQkgsU0FBUSxFQUFFO1VBQ1o7UUFDRixDQUFDLENBQUM7TUFDSjtNQUNBRix5QkFBeUIsQ0FBQ08sSUFBSSxDQUFDTCxRQUFRLENBQUM7SUFDMUMsQ0FBQyxNQUFNO01BQ0xBLFFBQVEsRUFBRTtJQUNaO0VBQ0YsQ0FBQztFQUNELElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFLQSxDQUFBO0lBQUEsT0FBU3pELFFBQVEsQ0FBQ3NDLGVBQWUsQ0FBQ29CLEdBQUcsS0FBSyxLQUFLO0VBQUE7RUFDMUQsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsTUFBTSxFQUFJO0lBQ25DVixrQkFBa0IsQ0FBQyxZQUFNO01BQ3ZCLElBQU1XLENBQUMsR0FBR2YsU0FBUyxFQUFFO01BQ3JCO01BQ0EsSUFBSWUsQ0FBQyxFQUFFO1FBQ0wsSUFBTUMsSUFBSSxHQUFHRixNQUFNLENBQUNHLElBQUk7UUFDeEIsSUFBTUMsa0JBQWtCLEdBQUdILENBQUMsQ0FBQ0ksRUFBRSxDQUFDSCxJQUFJLENBQUM7UUFDckNELENBQUMsQ0FBQ0ksRUFBRSxDQUFDSCxJQUFJLENBQUMsR0FBR0YsTUFBTSxDQUFDTSxlQUFlO1FBQ25DTCxDQUFDLENBQUNJLEVBQUUsQ0FBQ0gsSUFBSSxDQUFDLENBQUNLLFdBQVcsR0FBR1AsTUFBTTtRQUMvQkMsQ0FBQyxDQUFDSSxFQUFFLENBQUNILElBQUksQ0FBQyxDQUFDTSxVQUFVLEdBQUcsWUFBTTtVQUM1QlAsQ0FBQyxDQUFDSSxFQUFFLENBQUNILElBQUksQ0FBQyxHQUFHRSxrQkFBa0I7VUFDL0IsT0FBT0osTUFBTSxDQUFDTSxlQUFlO1FBQy9CLENBQUM7TUFDSDtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDRCxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsZ0JBQWdCLEVBQWlEO0lBQUEsSUFBL0NDLElBQUksR0FBQXZILFNBQUEsQ0FBQW1FLE1BQUEsUUFBQW5FLFNBQUEsUUFBQXFDLFNBQUEsR0FBQXJDLFNBQUEsTUFBRyxFQUFFO0lBQUEsSUFBRXdILFlBQVksR0FBQXhILFNBQUEsQ0FBQW1FLE1BQUEsUUFBQW5FLFNBQUEsUUFBQXFDLFNBQUEsR0FBQXJDLFNBQUEsTUFBR3NILGdCQUFnQjtJQUMzRSxPQUFPLE9BQU9BLGdCQUFnQixLQUFLLFVBQVUsR0FBR0EsZ0JBQWdCLENBQUF2SCxLQUFBLFNBQUEwSCxrQkFBQSxDQUFJRixJQUFJLEVBQUMsR0FBR0MsWUFBWTtFQUMxRixDQUFDO0VBQ0QsSUFBTUUsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUFzQkEsQ0FBSXZCLFFBQVEsRUFBRXdCLGlCQUFpQixFQUErQjtJQUFBLElBQTdCQyxpQkFBaUIsR0FBQTVILFNBQUEsQ0FBQW1FLE1BQUEsUUFBQW5FLFNBQUEsUUFBQXFDLFNBQUEsR0FBQXJDLFNBQUEsTUFBRyxJQUFJO0lBQ25GLElBQUksQ0FBQzRILGlCQUFpQixFQUFFO01BQ3RCUCxPQUFPLENBQUNsQixRQUFRLENBQUM7TUFDakI7SUFDRjtJQUNBLElBQU0wQixlQUFlLEdBQUcsQ0FBQztJQUN6QixJQUFNQyxnQkFBZ0IsR0FBRzVFLGdDQUFnQyxDQUFDeUUsaUJBQWlCLENBQUMsR0FBR0UsZUFBZTtJQUM5RixJQUFJRSxNQUFNLEdBQUcsS0FBSztJQUNsQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsS0FBQSxFQUVQO01BQUEsSUFESkMsTUFBTSxHQUFBRCxLQUFBLENBQU5DLE1BQU07TUFFTixJQUFJQSxNQUFNLEtBQUtQLGlCQUFpQixFQUFFO1FBQ2hDO01BQ0Y7TUFDQUksTUFBTSxHQUFHLElBQUk7TUFDYkosaUJBQWlCLENBQUNRLG1CQUFtQixDQUFDMUcsY0FBYyxFQUFFdUcsT0FBTyxDQUFDO01BQzlEWCxPQUFPLENBQUNsQixRQUFRLENBQUM7SUFDbkIsQ0FBQztJQUNEd0IsaUJBQWlCLENBQUN0QixnQkFBZ0IsQ0FBQzVFLGNBQWMsRUFBRXVHLE9BQU8sQ0FBQztJQUMzREksVUFBVSxDQUFDLFlBQU07TUFDZixJQUFJLENBQUNMLE1BQU0sRUFBRTtRQUNYbkUsb0JBQW9CLENBQUMrRCxpQkFBaUIsQ0FBQztNQUN6QztJQUNGLENBQUMsRUFBRUcsZ0JBQWdCLENBQUM7RUFDdEIsQ0FBQzs7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRSxJQUFNTyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQW9CQSxDQUFJQyxJQUFJLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUs7SUFDbkYsSUFBTUMsVUFBVSxHQUFHSixJQUFJLENBQUNuRSxNQUFNO0lBQzlCLElBQUl3RSxLQUFLLEdBQUdMLElBQUksQ0FBQ00sT0FBTyxDQUFDTCxhQUFhLENBQUM7O0lBRXZDO0lBQ0E7SUFDQSxJQUFJSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7TUFDaEIsT0FBTyxDQUFDSCxhQUFhLElBQUlDLGNBQWMsR0FBR0gsSUFBSSxDQUFDSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUdKLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUU7SUFDQUssS0FBSyxJQUFJSCxhQUFhLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixJQUFJQyxjQUFjLEVBQUU7TUFDbEJFLEtBQUssR0FBRyxDQUFDQSxLQUFLLEdBQUdELFVBQVUsSUFBSUEsVUFBVTtJQUMzQztJQUNBLE9BQU9KLElBQUksQ0FBQ3pGLElBQUksQ0FBQ2dHLEdBQUcsQ0FBQyxDQUFDLEVBQUVoRyxJQUFJLENBQUNpRyxHQUFHLENBQUNILEtBQUssRUFBRUQsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDM0QsQ0FBQzs7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLElBQU1LLGNBQWMsR0FBRyxvQkFBb0I7RUFDM0MsSUFBTUMsY0FBYyxHQUFHLE1BQU07RUFDN0IsSUFBTUMsYUFBYSxHQUFHLFFBQVE7RUFDOUIsSUFBTUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDMUIsSUFBSUMsUUFBUSxHQUFHLENBQUM7RUFDaEIsSUFBTUMsWUFBWSxHQUFHO0lBQ25CQyxVQUFVLEVBQUUsV0FBVztJQUN2QkMsVUFBVSxFQUFFO0VBQ2QsQ0FBQztFQUNELElBQU1DLFlBQVksR0FBRyxJQUFJQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDOztFQUV6bUI7QUFDRjtBQUNBOztFQUVFLFNBQVNDLFlBQVlBLENBQUNwSixPQUFPLEVBQUVxSixHQUFHLEVBQUU7SUFDbEMsT0FBT0EsR0FBRyxPQUFBeEgsTUFBQSxDQUFPd0gsR0FBRyxRQUFBeEgsTUFBQSxDQUFLaUgsUUFBUSxFQUFFLENBQUUsSUFBSTlJLE9BQU8sQ0FBQzhJLFFBQVEsSUFBSUEsUUFBUSxFQUFFO0VBQ3pFO0VBQ0EsU0FBU1EsZ0JBQWdCQSxDQUFDdEosT0FBTyxFQUFFO0lBQ2pDLElBQU1xSixHQUFHLEdBQUdELFlBQVksQ0FBQ3BKLE9BQU8sQ0FBQztJQUNqQ0EsT0FBTyxDQUFDOEksUUFBUSxHQUFHTyxHQUFHO0lBQ3RCUixhQUFhLENBQUNRLEdBQUcsQ0FBQyxHQUFHUixhQUFhLENBQUNRLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxPQUFPUixhQUFhLENBQUNRLEdBQUcsQ0FBQztFQUMzQjtFQUNBLFNBQVNFLGdCQUFnQkEsQ0FBQ3ZKLE9BQU8sRUFBRTRHLEVBQUUsRUFBRTtJQUNyQyxPQUFPLFNBQVNlLE9BQU9BLENBQUM2QixLQUFLLEVBQUU7TUFDN0JDLFVBQVUsQ0FBQ0QsS0FBSyxFQUFFO1FBQ2hCRSxjQUFjLEVBQUUxSjtNQUNsQixDQUFDLENBQUM7TUFDRixJQUFJMkgsT0FBTyxDQUFDZ0MsTUFBTSxFQUFFO1FBQ2xCQyxZQUFZLENBQUNDLEdBQUcsQ0FBQzdKLE9BQU8sRUFBRXdKLEtBQUssQ0FBQ00sSUFBSSxFQUFFbEQsRUFBRSxDQUFDO01BQzNDO01BQ0EsT0FBT0EsRUFBRSxDQUFDbEgsS0FBSyxDQUFDTSxPQUFPLEVBQUUsQ0FBQ3dKLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7RUFDSDtFQUNBLFNBQVNPLDBCQUEwQkEsQ0FBQy9KLE9BQU8sRUFBRXNCLFFBQVEsRUFBRXNGLEVBQUUsRUFBRTtJQUN6RCxPQUFPLFNBQVNlLE9BQU9BLENBQUM2QixLQUFLLEVBQUU7TUFDN0IsSUFBTVEsV0FBVyxHQUFHaEssT0FBTyxDQUFDaUssZ0JBQWdCLENBQUMzSSxRQUFRLENBQUM7TUFDdEQsS0FBSyxJQUNIdUcsTUFBTSxHQUNKMkIsS0FBSyxDQURQM0IsTUFDTyxFQUFFQSxNQUFNLElBQUlBLE1BQU0sS0FBSyxJQUFJLEVBQUVBLE1BQU0sR0FBR0EsTUFBTSxDQUFDdEQsVUFBVSxFQUFFO1FBQUEsSUFBQTJGLFNBQUEsR0FBQUMsMEJBQUEsQ0FDdkNILFdBQVc7VUFBQUksS0FBQTtRQUFBO1VBQXBDLEtBQUFGLFNBQUEsQ0FBQUcsQ0FBQSxNQUFBRCxLQUFBLEdBQUFGLFNBQUEsQ0FBQUksQ0FBQSxJQUFBQyxJQUFBLEdBQXNDO1lBQUEsSUFBM0JDLFVBQVUsR0FBQUosS0FBQSxDQUFBdEssS0FBQTtZQUNuQixJQUFJMEssVUFBVSxLQUFLM0MsTUFBTSxFQUFFO2NBQ3pCO1lBQ0Y7WUFDQTRCLFVBQVUsQ0FBQ0QsS0FBSyxFQUFFO2NBQ2hCRSxjQUFjLEVBQUU3QjtZQUNsQixDQUFDLENBQUM7WUFDRixJQUFJRixPQUFPLENBQUNnQyxNQUFNLEVBQUU7Y0FDbEJDLFlBQVksQ0FBQ0MsR0FBRyxDQUFDN0osT0FBTyxFQUFFd0osS0FBSyxDQUFDTSxJQUFJLEVBQUV4SSxRQUFRLEVBQUVzRixFQUFFLENBQUM7WUFDckQ7WUFDQSxPQUFPQSxFQUFFLENBQUNsSCxLQUFLLENBQUNtSSxNQUFNLEVBQUUsQ0FBQzJCLEtBQUssQ0FBQyxDQUFDO1VBQ2xDO1FBQUMsU0FBQWlCLEdBQUE7VUFBQVAsU0FBQSxDQUFBUSxDQUFBLENBQUFELEdBQUE7UUFBQTtVQUFBUCxTQUFBLENBQUFTLENBQUE7UUFBQTtNQUNIO0lBQ0YsQ0FBQztFQUNIO0VBQ0EsU0FBU0MsV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFQyxRQUFRLEVBQTZCO0lBQUEsSUFBM0JDLGtCQUFrQixHQUFBcEwsU0FBQSxDQUFBbUUsTUFBQSxRQUFBbkUsU0FBQSxRQUFBcUMsU0FBQSxHQUFBckMsU0FBQSxNQUFHLElBQUk7SUFDOUQsT0FBT3NDLE1BQU0sQ0FBQytJLE1BQU0sQ0FBQ0gsTUFBTSxDQUFDLENBQUNJLElBQUksQ0FBQyxVQUFBekIsS0FBSztNQUFBLE9BQUlBLEtBQUssQ0FBQ3NCLFFBQVEsS0FBS0EsUUFBUSxJQUFJdEIsS0FBSyxDQUFDdUIsa0JBQWtCLEtBQUtBLGtCQUFrQjtJQUFBLEVBQUM7RUFDNUg7RUFDQSxTQUFTRyxtQkFBbUJBLENBQUNDLGlCQUFpQixFQUFFeEQsT0FBTyxFQUFFeUQsa0JBQWtCLEVBQUU7SUFDM0UsSUFBTUMsV0FBVyxHQUFHLE9BQU8xRCxPQUFPLEtBQUssUUFBUTtJQUMvQztJQUNBLElBQU1tRCxRQUFRLEdBQUdPLFdBQVcsR0FBR0Qsa0JBQWtCLEdBQUd6RCxPQUFPLElBQUl5RCxrQkFBa0I7SUFDakYsSUFBSUUsU0FBUyxHQUFHQyxZQUFZLENBQUNKLGlCQUFpQixDQUFDO0lBQy9DLElBQUksQ0FBQ2pDLFlBQVksQ0FBQ3NDLEdBQUcsQ0FBQ0YsU0FBUyxDQUFDLEVBQUU7TUFDaENBLFNBQVMsR0FBR0gsaUJBQWlCO0lBQy9CO0lBQ0EsT0FBTyxDQUFDRSxXQUFXLEVBQUVQLFFBQVEsRUFBRVEsU0FBUyxDQUFDO0VBQzNDO0VBQ0EsU0FBU0csVUFBVUEsQ0FBQ3pMLE9BQU8sRUFBRW1MLGlCQUFpQixFQUFFeEQsT0FBTyxFQUFFeUQsa0JBQWtCLEVBQUV6QixNQUFNLEVBQUU7SUFDbkYsSUFBSSxPQUFPd0IsaUJBQWlCLEtBQUssUUFBUSxJQUFJLENBQUNuTCxPQUFPLEVBQUU7TUFDckQ7SUFDRjtJQUNBLElBQUEwTCxvQkFBQSxHQUF5Q1IsbUJBQW1CLENBQUNDLGlCQUFpQixFQUFFeEQsT0FBTyxFQUFFeUQsa0JBQWtCLENBQUM7TUFBQU8scUJBQUEsR0FBQUMsY0FBQSxDQUFBRixvQkFBQTtNQUF2R0wsV0FBVyxHQUFBTSxxQkFBQTtNQUFFYixRQUFRLEdBQUFhLHFCQUFBO01BQUVMLFNBQVMsR0FBQUsscUJBQUE7O0lBRXJDO0lBQ0E7SUFDQSxJQUFJUixpQkFBaUIsSUFBSXBDLFlBQVksRUFBRTtNQUNyQyxJQUFNOEMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUdqRixFQUFFLEVBQUk7UUFDekIsT0FBTyxVQUFVNEMsS0FBSyxFQUFFO1VBQ3RCLElBQUksQ0FBQ0EsS0FBSyxDQUFDc0MsYUFBYSxJQUFJdEMsS0FBSyxDQUFDc0MsYUFBYSxLQUFLdEMsS0FBSyxDQUFDRSxjQUFjLElBQUksQ0FBQ0YsS0FBSyxDQUFDRSxjQUFjLENBQUM5RSxRQUFRLENBQUM0RSxLQUFLLENBQUNzQyxhQUFhLENBQUMsRUFBRTtZQUMvSCxPQUFPbEYsRUFBRSxDQUFDeEUsSUFBSSxDQUFDLElBQUksRUFBRW9ILEtBQUssQ0FBQztVQUM3QjtRQUNGLENBQUM7TUFDSCxDQUFDO01BQ0RzQixRQUFRLEdBQUdlLFlBQVksQ0FBQ2YsUUFBUSxDQUFDO0lBQ25DO0lBQ0EsSUFBTUQsTUFBTSxHQUFHdkIsZ0JBQWdCLENBQUN0SixPQUFPLENBQUM7SUFDeEMsSUFBTStMLFFBQVEsR0FBR2xCLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDLEtBQUtULE1BQU0sQ0FBQ1MsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsSUFBTVUsZ0JBQWdCLEdBQUdwQixXQUFXLENBQUNtQixRQUFRLEVBQUVqQixRQUFRLEVBQUVPLFdBQVcsR0FBRzFELE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEYsSUFBSXFFLGdCQUFnQixFQUFFO01BQ3BCQSxnQkFBZ0IsQ0FBQ3JDLE1BQU0sR0FBR3FDLGdCQUFnQixDQUFDckMsTUFBTSxJQUFJQSxNQUFNO01BQzNEO0lBQ0Y7SUFDQSxJQUFNTixHQUFHLEdBQUdELFlBQVksQ0FBQzBCLFFBQVEsRUFBRUssaUJBQWlCLENBQUN6SixPQUFPLENBQUNnSCxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakYsSUFBTTlCLEVBQUUsR0FBR3lFLFdBQVcsR0FBR3RCLDBCQUEwQixDQUFDL0osT0FBTyxFQUFFMkgsT0FBTyxFQUFFbUQsUUFBUSxDQUFDLEdBQUd2QixnQkFBZ0IsQ0FBQ3ZKLE9BQU8sRUFBRThLLFFBQVEsQ0FBQztJQUNySGxFLEVBQUUsQ0FBQ21FLGtCQUFrQixHQUFHTSxXQUFXLEdBQUcxRCxPQUFPLEdBQUcsSUFBSTtJQUNwRGYsRUFBRSxDQUFDa0UsUUFBUSxHQUFHQSxRQUFRO0lBQ3RCbEUsRUFBRSxDQUFDK0MsTUFBTSxHQUFHQSxNQUFNO0lBQ2xCL0MsRUFBRSxDQUFDa0MsUUFBUSxHQUFHTyxHQUFHO0lBQ2pCMEMsUUFBUSxDQUFDMUMsR0FBRyxDQUFDLEdBQUd6QyxFQUFFO0lBQ2xCNUcsT0FBTyxDQUFDZ0csZ0JBQWdCLENBQUNzRixTQUFTLEVBQUUxRSxFQUFFLEVBQUV5RSxXQUFXLENBQUM7RUFDdEQ7RUFDQSxTQUFTWSxhQUFhQSxDQUFDak0sT0FBTyxFQUFFNkssTUFBTSxFQUFFUyxTQUFTLEVBQUUzRCxPQUFPLEVBQUVvRCxrQkFBa0IsRUFBRTtJQUM5RSxJQUFNbkUsRUFBRSxHQUFHZ0UsV0FBVyxDQUFDQyxNQUFNLENBQUNTLFNBQVMsQ0FBQyxFQUFFM0QsT0FBTyxFQUFFb0Qsa0JBQWtCLENBQUM7SUFDdEUsSUFBSSxDQUFDbkUsRUFBRSxFQUFFO01BQ1A7SUFDRjtJQUNBNUcsT0FBTyxDQUFDOEgsbUJBQW1CLENBQUN3RCxTQUFTLEVBQUUxRSxFQUFFLEVBQUVzRixPQUFPLENBQUNuQixrQkFBa0IsQ0FBQyxDQUFDO0lBQ3ZFLE9BQU9GLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDLENBQUMxRSxFQUFFLENBQUNrQyxRQUFRLENBQUM7RUFDdkM7RUFDQSxTQUFTcUQsd0JBQXdCQSxDQUFDbk0sT0FBTyxFQUFFNkssTUFBTSxFQUFFUyxTQUFTLEVBQUVjLFNBQVMsRUFBRTtJQUN2RSxJQUFNQyxpQkFBaUIsR0FBR3hCLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELFNBQUFnQixHQUFBLE1BQUFDLGVBQUEsR0FBa0N0SyxNQUFNLENBQUN1SyxPQUFPLENBQUNILGlCQUFpQixDQUFDLEVBQUFDLEdBQUEsR0FBQUMsZUFBQSxDQUFBekksTUFBQSxFQUFBd0ksR0FBQSxJQUFFO01BQWhFLElBQUFHLGtCQUFBLEdBQUFiLGNBQUEsQ0FBQVcsZUFBQSxDQUFBRCxHQUFBO1FBQU9JLFVBQVUsR0FBQUQsa0JBQUE7UUFBRWpELEtBQUssR0FBQWlELGtCQUFBO01BQzNCLElBQUlDLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDUCxTQUFTLENBQUMsRUFBRTtRQUNsQ0gsYUFBYSxDQUFDak0sT0FBTyxFQUFFNkssTUFBTSxFQUFFUyxTQUFTLEVBQUU5QixLQUFLLENBQUNzQixRQUFRLEVBQUV0QixLQUFLLENBQUN1QixrQkFBa0IsQ0FBQztNQUNyRjtJQUNGO0VBQ0Y7RUFDQSxTQUFTUSxZQUFZQSxDQUFDL0IsS0FBSyxFQUFFO0lBQzNCO0lBQ0FBLEtBQUssR0FBR0EsS0FBSyxDQUFDOUgsT0FBTyxDQUFDaUgsY0FBYyxFQUFFLEVBQUUsQ0FBQztJQUN6QyxPQUFPSSxZQUFZLENBQUNTLEtBQUssQ0FBQyxJQUFJQSxLQUFLO0VBQ3JDO0VBQ0EsSUFBTUksWUFBWSxHQUFHO0lBQ25CZ0QsRUFBRSxXQUFBQSxHQUFDNU0sT0FBTyxFQUFFd0osS0FBSyxFQUFFN0IsT0FBTyxFQUFFeUQsa0JBQWtCLEVBQUU7TUFDOUNLLFVBQVUsQ0FBQ3pMLE9BQU8sRUFBRXdKLEtBQUssRUFBRTdCLE9BQU8sRUFBRXlELGtCQUFrQixFQUFFLEtBQUssQ0FBQztJQUNoRSxDQUFDO0lBQ0R5QixHQUFHLFdBQUFBLElBQUM3TSxPQUFPLEVBQUV3SixLQUFLLEVBQUU3QixPQUFPLEVBQUV5RCxrQkFBa0IsRUFBRTtNQUMvQ0ssVUFBVSxDQUFDekwsT0FBTyxFQUFFd0osS0FBSyxFQUFFN0IsT0FBTyxFQUFFeUQsa0JBQWtCLEVBQUUsSUFBSSxDQUFDO0lBQy9ELENBQUM7SUFDRHZCLEdBQUcsV0FBQUEsSUFBQzdKLE9BQU8sRUFBRW1MLGlCQUFpQixFQUFFeEQsT0FBTyxFQUFFeUQsa0JBQWtCLEVBQUU7TUFDM0QsSUFBSSxPQUFPRCxpQkFBaUIsS0FBSyxRQUFRLElBQUksQ0FBQ25MLE9BQU8sRUFBRTtRQUNyRDtNQUNGO01BQ0EsSUFBQThNLHFCQUFBLEdBQTJDNUIsbUJBQW1CLENBQUNDLGlCQUFpQixFQUFFeEQsT0FBTyxFQUFFeUQsa0JBQWtCLENBQUM7UUFBQTJCLHFCQUFBLEdBQUFuQixjQUFBLENBQUFrQixxQkFBQTtRQUF2R3pCLFdBQVcsR0FBQTBCLHFCQUFBO1FBQUVqQyxRQUFRLEdBQUFpQyxxQkFBQTtRQUFFekIsU0FBUyxHQUFBeUIscUJBQUE7TUFDdkMsSUFBTUMsV0FBVyxHQUFHMUIsU0FBUyxLQUFLSCxpQkFBaUI7TUFDbkQsSUFBTU4sTUFBTSxHQUFHdkIsZ0JBQWdCLENBQUN0SixPQUFPLENBQUM7TUFDeEMsSUFBTXFNLGlCQUFpQixHQUFHeEIsTUFBTSxDQUFDUyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDakQsSUFBTTJCLFdBQVcsR0FBRzlCLGlCQUFpQixDQUFDK0IsVUFBVSxDQUFDLEdBQUcsQ0FBQztNQUNyRCxJQUFJLE9BQU9wQyxRQUFRLEtBQUssV0FBVyxFQUFFO1FBQ25DO1FBQ0EsSUFBSSxDQUFDN0ksTUFBTSxDQUFDa0wsSUFBSSxDQUFDZCxpQkFBaUIsQ0FBQyxDQUFDdkksTUFBTSxFQUFFO1VBQzFDO1FBQ0Y7UUFDQW1JLGFBQWEsQ0FBQ2pNLE9BQU8sRUFBRTZLLE1BQU0sRUFBRVMsU0FBUyxFQUFFUixRQUFRLEVBQUVPLFdBQVcsR0FBRzFELE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakY7TUFDRjtNQUNBLElBQUlzRixXQUFXLEVBQUU7UUFDZixTQUFBRyxHQUFBLE1BQUFDLFlBQUEsR0FBMkJwTCxNQUFNLENBQUNrTCxJQUFJLENBQUN0QyxNQUFNLENBQUMsRUFBQXVDLEdBQUEsR0FBQUMsWUFBQSxDQUFBdkosTUFBQSxFQUFBc0osR0FBQSxJQUFFO1VBQTNDLElBQU1FLFlBQVksR0FBQUQsWUFBQSxDQUFBRCxHQUFBO1VBQ3JCakIsd0JBQXdCLENBQUNuTSxPQUFPLEVBQUU2SyxNQUFNLEVBQUV5QyxZQUFZLEVBQUVuQyxpQkFBaUIsQ0FBQ29DLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRjtNQUNGO01BQ0EsU0FBQUMsR0FBQSxNQUFBQyxnQkFBQSxHQUFtQ3hMLE1BQU0sQ0FBQ3VLLE9BQU8sQ0FBQ0gsaUJBQWlCLENBQUMsRUFBQW1CLEdBQUEsR0FBQUMsZ0JBQUEsQ0FBQTNKLE1BQUEsRUFBQTBKLEdBQUEsSUFBRTtRQUFqRSxJQUFBRSxtQkFBQSxHQUFBOUIsY0FBQSxDQUFBNkIsZ0JBQUEsQ0FBQUQsR0FBQTtVQUFPRyxXQUFXLEdBQUFELG1CQUFBO1VBQUVsRSxLQUFLLEdBQUFrRSxtQkFBQTtRQUM1QixJQUFNaEIsVUFBVSxHQUFHaUIsV0FBVyxDQUFDak0sT0FBTyxDQUFDa0gsYUFBYSxFQUFFLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUNvRSxXQUFXLElBQUk3QixpQkFBaUIsQ0FBQ3dCLFFBQVEsQ0FBQ0QsVUFBVSxDQUFDLEVBQUU7VUFDMURULGFBQWEsQ0FBQ2pNLE9BQU8sRUFBRTZLLE1BQU0sRUFBRVMsU0FBUyxFQUFFOUIsS0FBSyxDQUFDc0IsUUFBUSxFQUFFdEIsS0FBSyxDQUFDdUIsa0JBQWtCLENBQUM7UUFDckY7TUFDRjtJQUNGLENBQUM7SUFDRDZDLE9BQU8sV0FBQUEsUUFBQzVOLE9BQU8sRUFBRXdKLEtBQUssRUFBRXRDLElBQUksRUFBRTtNQUM1QixJQUFJLE9BQU9zQyxLQUFLLEtBQUssUUFBUSxJQUFJLENBQUN4SixPQUFPLEVBQUU7UUFDekMsT0FBTyxJQUFJO01BQ2I7TUFDQSxJQUFNd0csQ0FBQyxHQUFHZixTQUFTLEVBQUU7TUFDckIsSUFBTTZGLFNBQVMsR0FBR0MsWUFBWSxDQUFDL0IsS0FBSyxDQUFDO01BQ3JDLElBQU13RCxXQUFXLEdBQUd4RCxLQUFLLEtBQUs4QixTQUFTO01BQ3ZDLElBQUl1QyxXQUFXLEdBQUcsSUFBSTtNQUN0QixJQUFJQyxPQUFPLEdBQUcsSUFBSTtNQUNsQixJQUFJQyxjQUFjLEdBQUcsSUFBSTtNQUN6QixJQUFJQyxnQkFBZ0IsR0FBRyxLQUFLO01BQzVCLElBQUloQixXQUFXLElBQUl4RyxDQUFDLEVBQUU7UUFDcEJxSCxXQUFXLEdBQUdySCxDQUFDLENBQUMvQyxLQUFLLENBQUMrRixLQUFLLEVBQUV0QyxJQUFJLENBQUM7UUFDbENWLENBQUMsQ0FBQ3hHLE9BQU8sQ0FBQyxDQUFDNE4sT0FBTyxDQUFDQyxXQUFXLENBQUM7UUFDL0JDLE9BQU8sR0FBRyxDQUFDRCxXQUFXLENBQUNJLG9CQUFvQixFQUFFO1FBQzdDRixjQUFjLEdBQUcsQ0FBQ0YsV0FBVyxDQUFDSyw2QkFBNkIsRUFBRTtRQUM3REYsZ0JBQWdCLEdBQUdILFdBQVcsQ0FBQ00sa0JBQWtCLEVBQUU7TUFDckQ7TUFDQSxJQUFJQyxHQUFHLEdBQUcsSUFBSTNLLEtBQUssQ0FBQytGLEtBQUssRUFBRTtRQUN6QnNFLE9BQU8sRUFBUEEsT0FBTztRQUNQTyxVQUFVLEVBQUU7TUFDZCxDQUFDLENBQUM7TUFDRkQsR0FBRyxHQUFHM0UsVUFBVSxDQUFDMkUsR0FBRyxFQUFFbEgsSUFBSSxDQUFDO01BQzNCLElBQUk4RyxnQkFBZ0IsRUFBRTtRQUNwQkksR0FBRyxDQUFDRSxjQUFjLEVBQUU7TUFDdEI7TUFDQSxJQUFJUCxjQUFjLEVBQUU7UUFDbEIvTixPQUFPLENBQUN3RCxhQUFhLENBQUM0SyxHQUFHLENBQUM7TUFDNUI7TUFDQSxJQUFJQSxHQUFHLENBQUNKLGdCQUFnQixJQUFJSCxXQUFXLEVBQUU7UUFDdkNBLFdBQVcsQ0FBQ1MsY0FBYyxFQUFFO01BQzlCO01BQ0EsT0FBT0YsR0FBRztJQUNaO0VBQ0YsQ0FBQztFQUNELFNBQVMzRSxVQUFVQSxDQUFDOEUsR0FBRyxFQUFhO0lBQUEsSUFBWEMsSUFBSSxHQUFBN08sU0FBQSxDQUFBbUUsTUFBQSxRQUFBbkUsU0FBQSxRQUFBcUMsU0FBQSxHQUFBckMsU0FBQSxNQUFHLENBQUMsQ0FBQztJQUFBLElBQUE4TyxNQUFBLFlBQUFBLE9BQUEsRUFDaUI7TUFBNUMsSUFBQUMsbUJBQUEsR0FBQTlDLGNBQUEsQ0FBQStDLGdCQUFBLENBQUFDLEdBQUE7UUFBTy9PLEdBQUcsR0FBQTZPLG1CQUFBO1FBQUU1TyxLQUFLLEdBQUE0TyxtQkFBQTtNQUNwQixJQUFJO1FBQ0ZILEdBQUcsQ0FBQzFPLEdBQUcsQ0FBQyxHQUFHQyxLQUFLO01BQ2xCLENBQUMsQ0FBQyxPQUFPK08sT0FBTyxFQUFFO1FBQ2hCNU0sTUFBTSxDQUFDNk0sY0FBYyxDQUFDUCxHQUFHLEVBQUUxTyxHQUFHLEVBQUU7VUFDOUJrUCxZQUFZLEVBQUUsSUFBSTtVQUNsQkMsR0FBRyxXQUFBQSxJQUFBLEVBQUc7WUFDSixPQUFPbFAsS0FBSztVQUNkO1FBQ0YsQ0FBQyxDQUFDO01BQ0o7SUFDRixDQUFDO0lBWEQsU0FBQThPLEdBQUEsTUFBQUQsZ0JBQUEsR0FBMkIxTSxNQUFNLENBQUN1SyxPQUFPLENBQUNnQyxJQUFJLENBQUMsRUFBQUksR0FBQSxHQUFBRCxnQkFBQSxDQUFBN0ssTUFBQSxFQUFBOEssR0FBQTtNQUFBSCxNQUFBO0lBQUE7SUFZL0MsT0FBT0YsR0FBRztFQUNaOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsSUFBTVUsVUFBVSxHQUFHLElBQUlDLEdBQUcsRUFBRTtFQUM1QixJQUFNQyxJQUFJLEdBQUc7SUFDWEMsR0FBRyxXQUFBQSxJQUFDcFAsT0FBTyxFQUFFSCxHQUFHLEVBQUV3UCxRQUFRLEVBQUU7TUFDMUIsSUFBSSxDQUFDSixVQUFVLENBQUN6RCxHQUFHLENBQUN4TCxPQUFPLENBQUMsRUFBRTtRQUM1QmlQLFVBQVUsQ0FBQ0csR0FBRyxDQUFDcFAsT0FBTyxFQUFFLElBQUlrUCxHQUFHLEVBQUUsQ0FBQztNQUNwQztNQUNBLElBQU1JLFdBQVcsR0FBR0wsVUFBVSxDQUFDRCxHQUFHLENBQUNoUCxPQUFPLENBQUM7O01BRTNDO01BQ0E7TUFDQSxJQUFJLENBQUNzUCxXQUFXLENBQUM5RCxHQUFHLENBQUMzTCxHQUFHLENBQUMsSUFBSXlQLFdBQVcsQ0FBQ0MsSUFBSSxLQUFLLENBQUMsRUFBRTtRQUNuRDtRQUNBQyxPQUFPLENBQUNDLEtBQUssZ0ZBQUE1TixNQUFBLENBQWdGNk4sS0FBSyxDQUFDQyxJQUFJLENBQUNMLFdBQVcsQ0FBQ25DLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQUk7UUFDbEk7TUFDRjtNQUNBbUMsV0FBVyxDQUFDRixHQUFHLENBQUN2UCxHQUFHLEVBQUV3UCxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNETCxHQUFHLFdBQUFBLElBQUNoUCxPQUFPLEVBQUVILEdBQUcsRUFBRTtNQUNoQixJQUFJb1AsVUFBVSxDQUFDekQsR0FBRyxDQUFDeEwsT0FBTyxDQUFDLEVBQUU7UUFDM0IsT0FBT2lQLFVBQVUsQ0FBQ0QsR0FBRyxDQUFDaFAsT0FBTyxDQUFDLENBQUNnUCxHQUFHLENBQUNuUCxHQUFHLENBQUMsSUFBSSxJQUFJO01BQ2pEO01BQ0EsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNEK1AsTUFBTSxXQUFBQSxPQUFDNVAsT0FBTyxFQUFFSCxHQUFHLEVBQUU7TUFDbkIsSUFBSSxDQUFDb1AsVUFBVSxDQUFDekQsR0FBRyxDQUFDeEwsT0FBTyxDQUFDLEVBQUU7UUFDNUI7TUFDRjtNQUNBLElBQU1zUCxXQUFXLEdBQUdMLFVBQVUsQ0FBQ0QsR0FBRyxDQUFDaFAsT0FBTyxDQUFDO01BQzNDc1AsV0FBVyxVQUFPLENBQUN6UCxHQUFHLENBQUM7O01BRXZCO01BQ0EsSUFBSXlQLFdBQVcsQ0FBQ0MsSUFBSSxLQUFLLENBQUMsRUFBRTtRQUMxQk4sVUFBVSxVQUFPLENBQUNqUCxPQUFPLENBQUM7TUFDNUI7SUFDRjtFQUNGLENBQUM7O0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFLFNBQVM2UCxhQUFhQSxDQUFDL1AsS0FBSyxFQUFFO0lBQzVCLElBQUlBLEtBQUssS0FBSyxNQUFNLEVBQUU7TUFDcEIsT0FBTyxJQUFJO0lBQ2I7SUFDQSxJQUFJQSxLQUFLLEtBQUssT0FBTyxFQUFFO01BQ3JCLE9BQU8sS0FBSztJQUNkO0lBQ0EsSUFBSUEsS0FBSyxLQUFLcUQsTUFBTSxDQUFDckQsS0FBSyxDQUFDLENBQUNxQyxRQUFRLEVBQUUsRUFBRTtNQUN0QyxPQUFPZ0IsTUFBTSxDQUFDckQsS0FBSyxDQUFDO0lBQ3RCO0lBQ0EsSUFBSUEsS0FBSyxLQUFLLEVBQUUsSUFBSUEsS0FBSyxLQUFLLE1BQU0sRUFBRTtNQUNwQyxPQUFPLElBQUk7SUFDYjtJQUNBLElBQUksT0FBT0EsS0FBSyxLQUFLLFFBQVEsRUFBRTtNQUM3QixPQUFPQSxLQUFLO0lBQ2Q7SUFDQSxJQUFJO01BQ0YsT0FBT2dRLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxrQkFBa0IsQ0FBQ2xRLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxPQUFPK08sT0FBTyxFQUFFO01BQ2hCLE9BQU8vTyxLQUFLO0lBQ2Q7RUFDRjtFQUNBLFNBQVNtUSxnQkFBZ0JBLENBQUNwUSxHQUFHLEVBQUU7SUFDN0IsT0FBT0EsR0FBRyxDQUFDNkIsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFBd08sR0FBRztNQUFBLFdBQUFyTyxNQUFBLENBQVFxTyxHQUFHLENBQUM3TixXQUFXLEVBQUU7SUFBQSxDQUFFLENBQUM7RUFDOUQ7RUFDQSxJQUFNOE4sV0FBVyxHQUFHO0lBQ2xCQyxnQkFBZ0IsV0FBQUEsaUJBQUNwUSxPQUFPLEVBQUVILEdBQUcsRUFBRUMsS0FBSyxFQUFFO01BQ3BDRSxPQUFPLENBQUNxUSxZQUFZLFlBQUF4TyxNQUFBLENBQVlvTyxnQkFBZ0IsQ0FBQ3BRLEdBQUcsQ0FBQyxHQUFJQyxLQUFLLENBQUM7SUFDakUsQ0FBQztJQUNEd1EsbUJBQW1CLFdBQUFBLG9CQUFDdFEsT0FBTyxFQUFFSCxHQUFHLEVBQUU7TUFDaENHLE9BQU8sQ0FBQ3VRLGVBQWUsWUFBQTFPLE1BQUEsQ0FBWW9PLGdCQUFnQixDQUFDcFEsR0FBRyxDQUFDLEVBQUc7SUFDN0QsQ0FBQztJQUNEMlEsaUJBQWlCLFdBQUFBLGtCQUFDeFEsT0FBTyxFQUFFO01BQ3pCLElBQUksQ0FBQ0EsT0FBTyxFQUFFO1FBQ1osT0FBTyxDQUFDLENBQUM7TUFDWDtNQUNBLElBQU15USxVQUFVLEdBQUcsQ0FBQyxDQUFDO01BQ3JCLElBQU1DLE1BQU0sR0FBR3pPLE1BQU0sQ0FBQ2tMLElBQUksQ0FBQ25OLE9BQU8sQ0FBQzJRLE9BQU8sQ0FBQyxDQUFDQyxNQUFNLENBQUMsVUFBQS9RLEdBQUc7UUFBQSxPQUFJQSxHQUFHLENBQUNxTixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQ3JOLEdBQUcsQ0FBQ3FOLFVBQVUsQ0FBQyxVQUFVLENBQUM7TUFBQSxFQUFDO01BQUMsSUFBQTJELFVBQUEsR0FBQTFHLDBCQUFBLENBQzdGdUcsTUFBTTtRQUFBSSxNQUFBO01BQUE7UUFBeEIsS0FBQUQsVUFBQSxDQUFBeEcsQ0FBQSxNQUFBeUcsTUFBQSxHQUFBRCxVQUFBLENBQUF2RyxDQUFBLElBQUFDLElBQUEsR0FBMEI7VUFBQSxJQUFmMUssR0FBRyxHQUFBaVIsTUFBQSxDQUFBaFIsS0FBQTtVQUNaLElBQUlpUixPQUFPLEdBQUdsUixHQUFHLENBQUM2QixPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztVQUNwQ3FQLE9BQU8sR0FBR0EsT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMzTyxXQUFXLEVBQUUsR0FBRzBPLE9BQU8sQ0FBQ3hELEtBQUssQ0FBQyxDQUFDLEVBQUV3RCxPQUFPLENBQUNqTixNQUFNLENBQUM7VUFDNUUyTSxVQUFVLENBQUNNLE9BQU8sQ0FBQyxHQUFHbEIsYUFBYSxDQUFDN1AsT0FBTyxDQUFDMlEsT0FBTyxDQUFDOVEsR0FBRyxDQUFDLENBQUM7UUFDM0Q7TUFBQyxTQUFBNEssR0FBQTtRQUFBb0csVUFBQSxDQUFBbkcsQ0FBQSxDQUFBRCxHQUFBO01BQUE7UUFBQW9HLFVBQUEsQ0FBQWxHLENBQUE7TUFBQTtNQUNELE9BQU84RixVQUFVO0lBQ25CLENBQUM7SUFDRFEsZ0JBQWdCLFdBQUFBLGlCQUFDalIsT0FBTyxFQUFFSCxHQUFHLEVBQUU7TUFDN0IsT0FBT2dRLGFBQWEsQ0FBQzdQLE9BQU8sQ0FBQytFLFlBQVksWUFBQWxELE1BQUEsQ0FBWW9PLGdCQUFnQixDQUFDcFEsR0FBRyxDQUFDLEVBQUcsQ0FBQztJQUNoRjtFQUNGLENBQUM7O0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFO0FBQ0Y7QUFDQTtFQUZFLElBSU1xUixNQUFNO0lBQUEsU0FBQUEsT0FBQTtNQUFBelIsZUFBQSxPQUFBeVIsTUFBQTtJQUFBO0lBQUF0UixZQUFBLENBQUFzUixNQUFBO01BQUFyUixHQUFBO01BQUFDLEtBQUEsRUFXVixTQUFBcVIsV0FBV0MsTUFBTSxFQUFFO1FBQ2pCQSxNQUFNLEdBQUcsSUFBSSxDQUFDQyxlQUFlLENBQUNELE1BQU0sQ0FBQztRQUNyQ0EsTUFBTSxHQUFHLElBQUksQ0FBQ0UsaUJBQWlCLENBQUNGLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUNHLGdCQUFnQixDQUFDSCxNQUFNLENBQUM7UUFDN0IsT0FBT0EsTUFBTTtNQUNmO0lBQUM7TUFBQXZSLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF3UixrQkFBa0JGLE1BQU0sRUFBRTtRQUN4QixPQUFPQSxNQUFNO01BQ2Y7SUFBQztNQUFBdlIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXVSLGdCQUFnQkQsTUFBTSxFQUFFcFIsT0FBTyxFQUFFO1FBQy9CLElBQU13UixVQUFVLEdBQUc5TixXQUFXLENBQUMxRCxPQUFPLENBQUMsR0FBR21RLFdBQVcsQ0FBQ2MsZ0JBQWdCLENBQUNqUixPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFaEcsT0FBQXlSLGFBQUEsQ0FBQUEsYUFBQSxDQUFBQSxhQUFBLENBQUFBLGFBQUEsS0FDSyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsT0FBTyxHQUN2QmpSLE9BQUEsQ0FBTzhRLFVBQVUsTUFBSyxRQUFRLEdBQUdBLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FDaEQ5TixXQUFXLENBQUMxRCxPQUFPLENBQUMsR0FBR21RLFdBQVcsQ0FBQ0ssaUJBQWlCLENBQUN4USxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FDbEVVLE9BQUEsQ0FBTzBRLE1BQU0sTUFBSyxRQUFRLEdBQUdBLE1BQU0sR0FBRyxDQUFDLENBQUM7TUFFaEQ7SUFBQztNQUFBdlIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXlSLGlCQUFpQkgsTUFBTSxFQUE4QztRQUFBLElBQTVDUSxXQUFXLEdBQUFqUyxTQUFBLENBQUFtRSxNQUFBLFFBQUFuRSxTQUFBLFFBQUFxQyxTQUFBLEdBQUFyQyxTQUFBLE1BQUcsSUFBSSxDQUFDK1IsV0FBVyxDQUFDRyxXQUFXO1FBQ2pFLFNBQUFDLEdBQUEsTUFBQUMsZ0JBQUEsR0FBd0M5UCxNQUFNLENBQUN1SyxPQUFPLENBQUNvRixXQUFXLENBQUMsRUFBQUUsR0FBQSxHQUFBQyxnQkFBQSxDQUFBak8sTUFBQSxFQUFBZ08sR0FBQSxJQUFFO1VBQWhFLElBQUFFLG1CQUFBLEdBQUFwRyxjQUFBLENBQUFtRyxnQkFBQSxDQUFBRCxHQUFBO1lBQU9HLFFBQVEsR0FBQUQsbUJBQUE7WUFBRUUsYUFBYSxHQUFBRixtQkFBQTtVQUNqQyxJQUFNbFMsS0FBSyxHQUFHc1IsTUFBTSxDQUFDYSxRQUFRLENBQUM7VUFDOUIsSUFBTUUsU0FBUyxHQUFHek8sV0FBVyxDQUFDNUQsS0FBSyxDQUFDLEdBQUcsU0FBUyxHQUFHZ0MsTUFBTSxDQUFDaEMsS0FBSyxDQUFDO1VBQ2hFLElBQUksQ0FBQyxJQUFJc1MsTUFBTSxDQUFDRixhQUFhLENBQUMsQ0FBQ0csSUFBSSxDQUFDRixTQUFTLENBQUMsRUFBRTtZQUM5QyxNQUFNLElBQUlHLFNBQVMsSUFBQXpRLE1BQUEsQ0FBSSxJQUFJLENBQUM2UCxXQUFXLENBQUNoTCxJQUFJLENBQUM2TCxXQUFXLEVBQUUsaUJBQUExUSxNQUFBLENBQWFvUSxRQUFRLHlCQUFBcFEsTUFBQSxDQUFvQnNRLFNBQVMsNkJBQUF0USxNQUFBLENBQXdCcVEsYUFBYSxTQUFLO1VBQ3hKO1FBQ0Y7TUFDRjtJQUFDO01BQUFyUyxHQUFBO01BQUFtUCxHQUFBO01BckNEO01BQ0EsU0FBQUEsSUFBQSxFQUFxQjtRQUNuQixPQUFPLENBQUMsQ0FBQztNQUNYO0lBQUM7TUFBQW5QLEdBQUE7TUFBQW1QLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQXlCO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDO01BQ1g7SUFBQztNQUFBblAsR0FBQTtNQUFBbVAsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBa0I7UUFDaEIsTUFBTSxJQUFJd0QsS0FBSyxDQUFDLHFFQUFxRSxDQUFDO01BQ3hGO0lBQUM7SUFBQSxPQUFBdEIsTUFBQTtFQUFBO0VBK0JIO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUVFO0FBQ0Y7QUFDQTtFQUVFLElBQU11QixPQUFPLEdBQUcsY0FBYzs7RUFFOUI7QUFDRjtBQUNBO0VBRkUsSUFJTUMsYUFBYSwwQkFBQUMsT0FBQTtJQUFBclQsU0FBQSxDQUFBb1QsYUFBQSxFQUFBQyxPQUFBO0lBQUEsSUFBQXBULE1BQUEsR0FBQUMsWUFBQSxDQUFBa1QsYUFBQTtJQUNqQixTQUFBQSxjQUFZMVMsT0FBTyxFQUFFb1IsTUFBTSxFQUFFO01BQUEsSUFBQXdCLEtBQUE7TUFBQW5ULGVBQUEsT0FBQWlULGFBQUE7TUFDM0JFLEtBQUEsR0FBQXJULE1BQUEsQ0FBQTZDLElBQUE7TUFDQXBDLE9BQU8sR0FBRzZELFVBQVUsQ0FBQzdELE9BQU8sQ0FBQztNQUM3QixJQUFJLENBQUNBLE9BQU8sRUFBRTtRQUNaLE9BQUE2UywwQkFBQSxDQUFBRCxLQUFBO01BQ0Y7TUFDQUEsS0FBQSxDQUFLRSxRQUFRLEdBQUc5UyxPQUFPO01BQ3ZCNFMsS0FBQSxDQUFLRyxPQUFPLEdBQUdILEtBQUEsQ0FBS3pCLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDO01BQ3RDakMsSUFBSSxDQUFDQyxHQUFHLENBQUN3RCxLQUFBLENBQUtFLFFBQVEsRUFBRUYsS0FBQSxDQUFLbEIsV0FBVyxDQUFDc0IsUUFBUSxFQUFBQyxzQkFBQSxDQUFBTCxLQUFBLEVBQU87TUFBQyxPQUFBQSxLQUFBO0lBQzNEOztJQUVBO0lBQUFoVCxZQUFBLENBQUE4UyxhQUFBO01BQUE3UyxHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBb1QsUUFBQSxFQUFVO1FBQ1IvRCxJQUFJLENBQUNTLE1BQU0sQ0FBQyxJQUFJLENBQUNrRCxRQUFRLEVBQUUsSUFBSSxDQUFDcEIsV0FBVyxDQUFDc0IsUUFBUSxDQUFDO1FBQ3JEcEosWUFBWSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDaUosUUFBUSxFQUFFLElBQUksQ0FBQ3BCLFdBQVcsQ0FBQ3lCLFNBQVMsQ0FBQztRQUFDLElBQUFDLFVBQUEsR0FBQWpKLDBCQUFBLENBQ2pDbEksTUFBTSxDQUFDb1IsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1VBQUFDLE1BQUE7UUFBQTtVQUEzRCxLQUFBRixVQUFBLENBQUEvSSxDQUFBLE1BQUFpSixNQUFBLEdBQUFGLFVBQUEsQ0FBQTlJLENBQUEsSUFBQUMsSUFBQSxHQUE2RDtZQUFBLElBQWxEZ0osWUFBWSxHQUFBRCxNQUFBLENBQUF4VCxLQUFBO1lBQ3JCLElBQUksQ0FBQ3lULFlBQVksQ0FBQyxHQUFHLElBQUk7VUFDM0I7UUFBQyxTQUFBOUksR0FBQTtVQUFBMkksVUFBQSxDQUFBMUksQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQTJJLFVBQUEsQ0FBQXpJLENBQUE7UUFBQTtNQUNIO0lBQUM7TUFBQTlLLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUEwVCxlQUFlMU4sUUFBUSxFQUFFOUYsT0FBTyxFQUFxQjtRQUFBLElBQW5CeVQsVUFBVSxHQUFBOVQsU0FBQSxDQUFBbUUsTUFBQSxRQUFBbkUsU0FBQSxRQUFBcUMsU0FBQSxHQUFBckMsU0FBQSxNQUFHLElBQUk7UUFDakQwSCxzQkFBc0IsQ0FBQ3ZCLFFBQVEsRUFBRTlGLE9BQU8sRUFBRXlULFVBQVUsQ0FBQztNQUN2RDtJQUFDO01BQUE1VCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBcVIsV0FBV0MsTUFBTSxFQUFFO1FBQ2pCQSxNQUFNLEdBQUcsSUFBSSxDQUFDQyxlQUFlLENBQUNELE1BQU0sRUFBRSxJQUFJLENBQUMwQixRQUFRLENBQUM7UUFDcEQxQixNQUFNLEdBQUcsSUFBSSxDQUFDRSxpQkFBaUIsQ0FBQ0YsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQ0csZ0JBQWdCLENBQUNILE1BQU0sQ0FBQztRQUM3QixPQUFPQSxNQUFNO01BQ2Y7O01BRUE7SUFBQTtNQUFBdlIsR0FBQTtNQUFBQyxLQUFBLEVBQ0EsU0FBQTRULFlBQW1CMVQsT0FBTyxFQUFFO1FBQzFCLE9BQU9tUCxJQUFJLENBQUNILEdBQUcsQ0FBQ25MLFVBQVUsQ0FBQzdELE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQ2dULFFBQVEsQ0FBQztNQUNyRDtJQUFDO01BQUFuVCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBNlQsb0JBQTJCM1QsT0FBTyxFQUFlO1FBQUEsSUFBYm9SLE1BQU0sR0FBQXpSLFNBQUEsQ0FBQW1FLE1BQUEsUUFBQW5FLFNBQUEsUUFBQXFDLFNBQUEsR0FBQXJDLFNBQUEsTUFBRyxDQUFDLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUMrVCxXQUFXLENBQUMxVCxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQ0EsT0FBTyxFQUFFVSxPQUFBLENBQU8wUSxNQUFNLE1BQUssUUFBUSxHQUFHQSxNQUFNLEdBQUcsSUFBSSxDQUFDO01BQ25HO0lBQUM7TUFBQXZSLEdBQUE7TUFBQW1QLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQXFCO1FBQ25CLE9BQU95RCxPQUFPO01BQ2hCO0lBQUM7TUFBQTVTLEdBQUE7TUFBQW1QLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQXNCO1FBQ3BCLGFBQUFuTixNQUFBLENBQWEsSUFBSSxDQUFDNkUsSUFBSTtNQUN4QjtJQUFDO01BQUE3RyxHQUFBO01BQUFtUCxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUF1QjtRQUNyQixXQUFBbk4sTUFBQSxDQUFXLElBQUksQ0FBQ21SLFFBQVE7TUFDMUI7SUFBQztNQUFBblQsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQThULFVBQWlCbk4sSUFBSSxFQUFFO1FBQ3JCLFVBQUE1RSxNQUFBLENBQVU0RSxJQUFJLEVBQUE1RSxNQUFBLENBQUcsSUFBSSxDQUFDc1IsU0FBUztNQUNqQztJQUFDO0lBQUEsT0FBQVQsYUFBQTtFQUFBLEVBaER5QnhCLE1BQU07RUFtRGxDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFLElBQU0yQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBRzdULE9BQU8sRUFBSTtJQUM3QixJQUFJc0IsUUFBUSxHQUFHdEIsT0FBTyxDQUFDK0UsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0lBQ3JELElBQUksQ0FBQ3pELFFBQVEsSUFBSUEsUUFBUSxLQUFLLEdBQUcsRUFBRTtNQUNqQyxJQUFJd1MsYUFBYSxHQUFHOVQsT0FBTyxDQUFDK0UsWUFBWSxDQUFDLE1BQU0sQ0FBQzs7TUFFaEQ7TUFDQTtNQUNBO01BQ0E7TUFDQSxJQUFJLENBQUMrTyxhQUFhLElBQUksQ0FBQ0EsYUFBYSxDQUFDbkgsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUNtSCxhQUFhLENBQUM1RyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEYsT0FBTyxJQUFJO01BQ2I7O01BRUE7TUFDQSxJQUFJNEcsYUFBYSxDQUFDbkgsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUNtSCxhQUFhLENBQUM1RyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDakU0RyxhQUFhLE9BQUFqUyxNQUFBLENBQU9pUyxhQUFhLENBQUN4USxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUU7TUFDbkQ7TUFDQWhDLFFBQVEsR0FBR3dTLGFBQWEsSUFBSUEsYUFBYSxLQUFLLEdBQUcsR0FBR0EsYUFBYSxDQUFDQyxJQUFJLEVBQUUsR0FBRyxJQUFJO0lBQ2pGO0lBQ0EsT0FBTzFTLGFBQWEsQ0FBQ0MsUUFBUSxDQUFDO0VBQ2hDLENBQUM7RUFDRCxJQUFNMFMsY0FBYyxHQUFHO0lBQ3JCL0ksSUFBSSxXQUFBQSxLQUFDM0osUUFBUSxFQUFzQztNQUFBLElBQUEyUyxLQUFBO01BQUEsSUFBcENqVSxPQUFPLEdBQUFMLFNBQUEsQ0FBQW1FLE1BQUEsUUFBQW5FLFNBQUEsUUFBQXFDLFNBQUEsR0FBQXJDLFNBQUEsTUFBR2dELFFBQVEsQ0FBQ3NDLGVBQWU7TUFDL0MsT0FBTyxDQUFBZ1AsS0FBQSxLQUFFLEVBQUNwUyxNQUFNLENBQUFuQyxLQUFBLENBQUF1VSxLQUFBLEVBQUE3TSxrQkFBQSxDQUFJOE0sT0FBTyxDQUFDaFMsU0FBUyxDQUFDK0gsZ0JBQWdCLENBQUM3SCxJQUFJLENBQUNwQyxPQUFPLEVBQUVzQixRQUFRLENBQUMsRUFBQztJQUNqRixDQUFDO0lBQ0Q2UyxPQUFPLFdBQUFBLFFBQUM3UyxRQUFRLEVBQXNDO01BQUEsSUFBcEN0QixPQUFPLEdBQUFMLFNBQUEsQ0FBQW1FLE1BQUEsUUFBQW5FLFNBQUEsUUFBQXFDLFNBQUEsR0FBQXJDLFNBQUEsTUFBR2dELFFBQVEsQ0FBQ3NDLGVBQWU7TUFDbEQsT0FBT2lQLE9BQU8sQ0FBQ2hTLFNBQVMsQ0FBQzZCLGFBQWEsQ0FBQzNCLElBQUksQ0FBQ3BDLE9BQU8sRUFBRXNCLFFBQVEsQ0FBQztJQUNoRSxDQUFDO0lBQ0Q4UyxRQUFRLFdBQUFBLFNBQUNwVSxPQUFPLEVBQUVzQixRQUFRLEVBQUU7TUFBQSxJQUFBK1MsS0FBQTtNQUMxQixPQUFPLENBQUFBLEtBQUEsS0FBRSxFQUFDeFMsTUFBTSxDQUFBbkMsS0FBQSxDQUFBMlUsS0FBQSxFQUFBak4sa0JBQUEsQ0FBSXBILE9BQU8sQ0FBQ29VLFFBQVEsRUFBQyxDQUFDeEQsTUFBTSxDQUFDLFVBQUEwRCxLQUFLO1FBQUEsT0FBSUEsS0FBSyxDQUFDQyxPQUFPLENBQUNqVCxRQUFRLENBQUM7TUFBQSxFQUFDO0lBQ2hGLENBQUM7SUFDRGtULE9BQU8sV0FBQUEsUUFBQ3hVLE9BQU8sRUFBRXNCLFFBQVEsRUFBRTtNQUN6QixJQUFNa1QsT0FBTyxHQUFHLEVBQUU7TUFDbEIsSUFBSUMsUUFBUSxHQUFHelUsT0FBTyxDQUFDdUUsVUFBVSxDQUFDRixPQUFPLENBQUMvQyxRQUFRLENBQUM7TUFDbkQsT0FBT21ULFFBQVEsRUFBRTtRQUNmRCxPQUFPLENBQUNyTyxJQUFJLENBQUNzTyxRQUFRLENBQUM7UUFDdEJBLFFBQVEsR0FBR0EsUUFBUSxDQUFDbFEsVUFBVSxDQUFDRixPQUFPLENBQUMvQyxRQUFRLENBQUM7TUFDbEQ7TUFDQSxPQUFPa1QsT0FBTztJQUNoQixDQUFDO0lBQ0RFLElBQUksV0FBQUEsS0FBQzFVLE9BQU8sRUFBRXNCLFFBQVEsRUFBRTtNQUN0QixJQUFJcVQsUUFBUSxHQUFHM1UsT0FBTyxDQUFDNFUsc0JBQXNCO01BQzdDLE9BQU9ELFFBQVEsRUFBRTtRQUNmLElBQUlBLFFBQVEsQ0FBQ0osT0FBTyxDQUFDalQsUUFBUSxDQUFDLEVBQUU7VUFDOUIsT0FBTyxDQUFDcVQsUUFBUSxDQUFDO1FBQ25CO1FBQ0FBLFFBQVEsR0FBR0EsUUFBUSxDQUFDQyxzQkFBc0I7TUFDNUM7TUFDQSxPQUFPLEVBQUU7SUFDWCxDQUFDO0lBQ0Q7SUFDQUMsSUFBSSxXQUFBQSxLQUFDN1UsT0FBTyxFQUFFc0IsUUFBUSxFQUFFO01BQ3RCLElBQUl1VCxJQUFJLEdBQUc3VSxPQUFPLENBQUM4VSxrQkFBa0I7TUFDckMsT0FBT0QsSUFBSSxFQUFFO1FBQ1gsSUFBSUEsSUFBSSxDQUFDTixPQUFPLENBQUNqVCxRQUFRLENBQUMsRUFBRTtVQUMxQixPQUFPLENBQUN1VCxJQUFJLENBQUM7UUFDZjtRQUNBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0Msa0JBQWtCO01BQ2hDO01BQ0EsT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUNEQyxpQkFBaUIsV0FBQUEsa0JBQUMvVSxPQUFPLEVBQUU7TUFDekIsSUFBTWdWLFVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSwwQkFBMEIsQ0FBQyxDQUFDQyxHQUFHLENBQUMsVUFBQTNULFFBQVE7UUFBQSxVQUFBTyxNQUFBLENBQU9QLFFBQVE7TUFBQSxDQUF1QixDQUFDLENBQUM0VCxJQUFJLENBQUMsR0FBRyxDQUFDO01BQ3BMLE9BQU8sSUFBSSxDQUFDakssSUFBSSxDQUFDK0osVUFBVSxFQUFFaFYsT0FBTyxDQUFDLENBQUM0USxNQUFNLENBQUMsVUFBQXVFLEVBQUU7UUFBQSxPQUFJLENBQUMzUSxVQUFVLENBQUMyUSxFQUFFLENBQUMsSUFBSW5SLFNBQVMsQ0FBQ21SLEVBQUUsQ0FBQztNQUFBLEVBQUM7SUFDdEYsQ0FBQztJQUNEQyxzQkFBc0IsV0FBQUEsdUJBQUNwVixPQUFPLEVBQUU7TUFDOUIsSUFBTXNCLFFBQVEsR0FBR3VTLFdBQVcsQ0FBQzdULE9BQU8sQ0FBQztNQUNyQyxJQUFJc0IsUUFBUSxFQUFFO1FBQ1osT0FBTzBTLGNBQWMsQ0FBQ0csT0FBTyxDQUFDN1MsUUFBUSxDQUFDLEdBQUdBLFFBQVEsR0FBRyxJQUFJO01BQzNEO01BQ0EsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNEK1Qsc0JBQXNCLFdBQUFBLHVCQUFDclYsT0FBTyxFQUFFO01BQzlCLElBQU1zQixRQUFRLEdBQUd1UyxXQUFXLENBQUM3VCxPQUFPLENBQUM7TUFDckMsT0FBT3NCLFFBQVEsR0FBRzBTLGNBQWMsQ0FBQ0csT0FBTyxDQUFDN1MsUUFBUSxDQUFDLEdBQUcsSUFBSTtJQUMzRCxDQUFDO0lBQ0RnVSwrQkFBK0IsV0FBQUEsZ0NBQUN0VixPQUFPLEVBQUU7TUFDdkMsSUFBTXNCLFFBQVEsR0FBR3VTLFdBQVcsQ0FBQzdULE9BQU8sQ0FBQztNQUNyQyxPQUFPc0IsUUFBUSxHQUFHMFMsY0FBYyxDQUFDL0ksSUFBSSxDQUFDM0osUUFBUSxDQUFDLEdBQUcsRUFBRTtJQUN0RDtFQUNGLENBQUM7O0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsSUFBTWlVLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUlDLFNBQVMsRUFBc0I7SUFBQSxJQUFwQkMsTUFBTSxHQUFBOVYsU0FBQSxDQUFBbUUsTUFBQSxRQUFBbkUsU0FBQSxRQUFBcUMsU0FBQSxHQUFBckMsU0FBQSxNQUFHLE1BQU07SUFDdEQsSUFBTStWLFVBQVUsbUJBQUE3VCxNQUFBLENBQW1CMlQsU0FBUyxDQUFDckMsU0FBUyxDQUFFO0lBQ3hELElBQU0xTSxJQUFJLEdBQUcrTyxTQUFTLENBQUM5TyxJQUFJO0lBQzNCa0QsWUFBWSxDQUFDZ0QsRUFBRSxDQUFDakssUUFBUSxFQUFFK1MsVUFBVSx3QkFBQTdULE1BQUEsQ0FBdUI0RSxJQUFJLFVBQU0sVUFBVStDLEtBQUssRUFBRTtNQUNwRixJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDbUQsUUFBUSxDQUFDLElBQUksQ0FBQ2dKLE9BQU8sQ0FBQyxFQUFFO1FBQ3hDbk0sS0FBSyxDQUFDOEUsY0FBYyxFQUFFO01BQ3hCO01BQ0EsSUFBSTlKLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNwQjtNQUNGO01BQ0EsSUFBTXFELE1BQU0sR0FBR21NLGNBQWMsQ0FBQ3FCLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQ2hSLE9BQU8sS0FBQXhDLE1BQUEsQ0FBSzRFLElBQUksRUFBRztNQUN0RixJQUFNNEksUUFBUSxHQUFHbUcsU0FBUyxDQUFDN0IsbUJBQW1CLENBQUM5TCxNQUFNLENBQUM7O01BRXREO01BQ0F3SCxRQUFRLENBQUNvRyxNQUFNLENBQUMsRUFBRTtJQUNwQixDQUFDLENBQUM7RUFDSixDQUFDOztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsSUFBTUcsTUFBTSxHQUFHLE9BQU87RUFDdEIsSUFBTUMsVUFBVSxHQUFHLFVBQVU7RUFDN0IsSUFBTUMsV0FBVyxPQUFBalUsTUFBQSxDQUFPZ1UsVUFBVSxDQUFFO0VBQ3BDLElBQU1FLFdBQVcsV0FBQWxVLE1BQUEsQ0FBV2lVLFdBQVcsQ0FBRTtFQUN6QyxJQUFNRSxZQUFZLFlBQUFuVSxNQUFBLENBQVlpVSxXQUFXLENBQUU7RUFDM0MsSUFBTUcsaUJBQWlCLEdBQUcsTUFBTTtFQUNoQyxJQUFNQyxpQkFBaUIsR0FBRyxNQUFNOztFQUVoQztBQUNGO0FBQ0E7RUFGRSxJQUlNQyxLQUFLLDBCQUFBQyxjQUFBO0lBQUE5VyxTQUFBLENBQUE2VyxLQUFBLEVBQUFDLGNBQUE7SUFBQSxJQUFBQyxPQUFBLEdBQUE3VyxZQUFBLENBQUEyVyxLQUFBO0lBQUEsU0FBQUEsTUFBQTtNQUFBMVcsZUFBQSxPQUFBMFcsS0FBQTtNQUFBLE9BQUFFLE9BQUEsQ0FBQTNXLEtBQUEsT0FBQUMsU0FBQTtJQUFBO0lBQUFDLFlBQUEsQ0FBQXVXLEtBQUE7TUFBQXRXLEdBQUE7TUFBQUMsS0FBQTtNQU1UO01BQ0EsU0FBQXdXLE1BQUEsRUFBUTtRQUFBLElBQUFDLE1BQUE7UUFDTixJQUFNQyxVQUFVLEdBQUc1TSxZQUFZLENBQUNnRSxPQUFPLENBQUMsSUFBSSxDQUFDa0YsUUFBUSxFQUFFaUQsV0FBVyxDQUFDO1FBQ25FLElBQUlTLFVBQVUsQ0FBQ3hJLGdCQUFnQixFQUFFO1VBQy9CO1FBQ0Y7UUFDQSxJQUFJLENBQUM4RSxRQUFRLENBQUNuTyxTQUFTLENBQUNpTCxNQUFNLENBQUNzRyxpQkFBaUIsQ0FBQztRQUNqRCxJQUFNekMsVUFBVSxHQUFHLElBQUksQ0FBQ1gsUUFBUSxDQUFDbk8sU0FBUyxDQUFDQyxRQUFRLENBQUNxUixpQkFBaUIsQ0FBQztRQUN0RSxJQUFJLENBQUN6QyxjQUFjLENBQUM7VUFBQSxPQUFNK0MsTUFBSSxDQUFDRSxlQUFlLEVBQUU7UUFBQSxHQUFFLElBQUksQ0FBQzNELFFBQVEsRUFBRVcsVUFBVSxDQUFDO01BQzlFOztNQUVBO0lBQUE7TUFBQTVULEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUEyVyxnQkFBQSxFQUFrQjtRQUNoQixJQUFJLENBQUMzRCxRQUFRLENBQUNsRCxNQUFNLEVBQUU7UUFDdEJoRyxZQUFZLENBQUNnRSxPQUFPLENBQUMsSUFBSSxDQUFDa0YsUUFBUSxFQUFFa0QsWUFBWSxDQUFDO1FBQ2pELElBQUksQ0FBQzlDLE9BQU8sRUFBRTtNQUNoQjs7TUFFQTtJQUFBO01BQUFyVCxHQUFBO01BQUFtUCxHQUFBO01BdkJBO01BQ0EsU0FBQUEsSUFBQSxFQUFrQjtRQUNoQixPQUFPNEcsTUFBTTtNQUNmO0lBQUM7TUFBQS9WLEdBQUE7TUFBQUMsS0FBQSxFQXFCRCxTQUFBK0csZ0JBQXVCdUssTUFBTSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxDQUFDc0YsSUFBSSxDQUFDLFlBQVk7VUFDM0IsSUFBTUMsSUFBSSxHQUFHUixLQUFLLENBQUN4QyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7VUFDNUMsSUFBSSxPQUFPdkMsTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM5QjtVQUNGO1VBQ0EsSUFBSXVGLElBQUksQ0FBQ3ZGLE1BQU0sQ0FBQyxLQUFLcFAsU0FBUyxJQUFJb1AsTUFBTSxDQUFDbEUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJa0UsTUFBTSxLQUFLLGFBQWEsRUFBRTtZQUNwRixNQUFNLElBQUlrQixTQUFTLHNCQUFBelEsTUFBQSxDQUFxQnVQLE1BQU0sUUFBSTtVQUNwRDtVQUNBdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3BCLENBQUMsQ0FBQztNQUNKO0lBQUM7SUFBQSxPQUFBK0UsS0FBQTtFQUFBLEVBcENpQnpELGFBQWE7RUF1Q2pDO0FBQ0Y7QUFDQTtFQUVFNkMsb0JBQW9CLENBQUNZLEtBQUssRUFBRSxPQUFPLENBQUM7O0VBRXBDO0FBQ0Y7QUFDQTs7RUFFRTdQLGtCQUFrQixDQUFDNlAsS0FBSyxDQUFDOztFQUV6QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLElBQU1TLE1BQU0sR0FBRyxRQUFRO0VBQ3ZCLElBQU1DLFVBQVUsR0FBRyxXQUFXO0VBQzlCLElBQU1DLFdBQVcsT0FBQWpWLE1BQUEsQ0FBT2dWLFVBQVUsQ0FBRTtFQUNwQyxJQUFNRSxjQUFjLEdBQUcsV0FBVztFQUNsQyxJQUFNQyxtQkFBbUIsR0FBRyxRQUFRO0VBQ3BDLElBQU1DLHNCQUFzQixHQUFHLDJCQUEyQjtFQUMxRCxJQUFNQyxzQkFBc0IsV0FBQXJWLE1BQUEsQ0FBV2lWLFdBQVcsRUFBQWpWLE1BQUEsQ0FBR2tWLGNBQWMsQ0FBRTs7RUFFckU7QUFDRjtBQUNBO0VBRkUsSUFJTUksTUFBTSwwQkFBQUMsZUFBQTtJQUFBOVgsU0FBQSxDQUFBNlgsTUFBQSxFQUFBQyxlQUFBO0lBQUEsSUFBQUMsT0FBQSxHQUFBN1gsWUFBQSxDQUFBMlgsTUFBQTtJQUFBLFNBQUFBLE9BQUE7TUFBQTFYLGVBQUEsT0FBQTBYLE1BQUE7TUFBQSxPQUFBRSxPQUFBLENBQUEzWCxLQUFBLE9BQUFDLFNBQUE7SUFBQTtJQUFBQyxZQUFBLENBQUF1WCxNQUFBO01BQUF0WCxHQUFBO01BQUFDLEtBQUE7TUFNVjtNQUNBLFNBQUF3WCxPQUFBLEVBQVM7UUFDUDtRQUNBLElBQUksQ0FBQ3hFLFFBQVEsQ0FBQ3pDLFlBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDeUMsUUFBUSxDQUFDbk8sU0FBUyxDQUFDMlMsTUFBTSxDQUFDTixtQkFBbUIsQ0FBQyxDQUFDO01BQ2pHOztNQUVBO0lBQUE7TUFBQW5YLEdBQUE7TUFBQW1QLEdBQUE7TUFYQTtNQUNBLFNBQUFBLElBQUEsRUFBa0I7UUFDaEIsT0FBTzRILE1BQU07TUFDZjtJQUFDO01BQUEvVyxHQUFBO01BQUFDLEtBQUEsRUFTRCxTQUFBK0csZ0JBQXVCdUssTUFBTSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxDQUFDc0YsSUFBSSxDQUFDLFlBQVk7VUFDM0IsSUFBTUMsSUFBSSxHQUFHUSxNQUFNLENBQUN4RCxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7VUFDN0MsSUFBSXZDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDdkJ1RixJQUFJLENBQUN2RixNQUFNLENBQUMsRUFBRTtVQUNoQjtRQUNGLENBQUMsQ0FBQztNQUNKO0lBQUM7SUFBQSxPQUFBK0YsTUFBQTtFQUFBLEVBcEJrQnpFLGFBQWE7RUF1QmxDO0FBQ0Y7QUFDQTtFQUVFOUksWUFBWSxDQUFDZ0QsRUFBRSxDQUFDakssUUFBUSxFQUFFdVUsc0JBQXNCLEVBQUVELHNCQUFzQixFQUFFLFVBQUF6TixLQUFLLEVBQUk7SUFDakZBLEtBQUssQ0FBQzhFLGNBQWMsRUFBRTtJQUN0QixJQUFNaUosTUFBTSxHQUFHL04sS0FBSyxDQUFDM0IsTUFBTSxDQUFDeEQsT0FBTyxDQUFDNFMsc0JBQXNCLENBQUM7SUFDM0QsSUFBTU4sSUFBSSxHQUFHUSxNQUFNLENBQUN4RCxtQkFBbUIsQ0FBQzRELE1BQU0sQ0FBQztJQUMvQ1osSUFBSSxDQUFDVyxNQUFNLEVBQUU7RUFDZixDQUFDLENBQUM7O0VBRUY7QUFDRjtBQUNBOztFQUVFaFIsa0JBQWtCLENBQUM2USxNQUFNLENBQUM7O0VBRTFCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsSUFBTUssTUFBTSxHQUFHLE9BQU87RUFDdEIsSUFBTUMsV0FBVyxHQUFHLFdBQVc7RUFDL0IsSUFBTUMsZ0JBQWdCLGdCQUFBN1YsTUFBQSxDQUFnQjRWLFdBQVcsQ0FBRTtFQUNuRCxJQUFNRSxlQUFlLGVBQUE5VixNQUFBLENBQWU0VixXQUFXLENBQUU7RUFDakQsSUFBTUcsY0FBYyxjQUFBL1YsTUFBQSxDQUFjNFYsV0FBVyxDQUFFO0VBQy9DLElBQU1JLGlCQUFpQixpQkFBQWhXLE1BQUEsQ0FBaUI0VixXQUFXLENBQUU7RUFDckQsSUFBTUssZUFBZSxlQUFBalcsTUFBQSxDQUFlNFYsV0FBVyxDQUFFO0VBQ2pELElBQU1NLGtCQUFrQixHQUFHLE9BQU87RUFDbEMsSUFBTUMsZ0JBQWdCLEdBQUcsS0FBSztFQUM5QixJQUFNQyx3QkFBd0IsR0FBRyxlQUFlO0VBQ2hELElBQU1DLGVBQWUsR0FBRyxFQUFFO0VBQzFCLElBQU1DLFNBQVMsR0FBRztJQUNoQkMsV0FBVyxFQUFFLElBQUk7SUFDakJDLFlBQVksRUFBRSxJQUFJO0lBQ2xCQyxhQUFhLEVBQUU7RUFDakIsQ0FBQztFQUNELElBQU1DLGFBQWEsR0FBRztJQUNwQkgsV0FBVyxFQUFFLGlCQUFpQjtJQUM5QkMsWUFBWSxFQUFFLGlCQUFpQjtJQUMvQkMsYUFBYSxFQUFFO0VBQ2pCLENBQUM7O0VBRUQ7QUFDRjtBQUNBO0VBRkUsSUFJTUUsS0FBSywwQkFBQUMsUUFBQTtJQUFBblosU0FBQSxDQUFBa1osS0FBQSxFQUFBQyxRQUFBO0lBQUEsSUFBQUMsT0FBQSxHQUFBbFosWUFBQSxDQUFBZ1osS0FBQTtJQUNULFNBQUFBLE1BQVl4WSxPQUFPLEVBQUVvUixNQUFNLEVBQUU7TUFBQSxJQUFBdUgsTUFBQTtNQUFBbFosZUFBQSxPQUFBK1ksS0FBQTtNQUMzQkcsTUFBQSxHQUFBRCxPQUFBLENBQUF0VyxJQUFBO01BQ0F1VyxNQUFBLENBQUs3RixRQUFRLEdBQUc5UyxPQUFPO01BQ3ZCLElBQUksQ0FBQ0EsT0FBTyxJQUFJLENBQUN3WSxLQUFLLENBQUNJLFdBQVcsRUFBRSxFQUFFO1FBQ3BDLE9BQUEvRiwwQkFBQSxDQUFBOEYsTUFBQTtNQUNGO01BQ0FBLE1BQUEsQ0FBSzVGLE9BQU8sR0FBRzRGLE1BQUEsQ0FBS3hILFVBQVUsQ0FBQ0MsTUFBTSxDQUFDO01BQ3RDdUgsTUFBQSxDQUFLRSxPQUFPLEdBQUcsQ0FBQztNQUNoQkYsTUFBQSxDQUFLRyxxQkFBcUIsR0FBRzVNLE9BQU8sQ0FBQzNLLE1BQU0sQ0FBQ3dYLFlBQVksQ0FBQztNQUN6REosTUFBQSxDQUFLSyxXQUFXLEVBQUU7TUFBQyxPQUFBTCxNQUFBO0lBQ3JCOztJQUVBO0lBQUEvWSxZQUFBLENBQUE0WSxLQUFBO01BQUEzWSxHQUFBO01BQUFDLEtBQUE7TUFXQTtNQUNBLFNBQUFvVCxRQUFBLEVBQVU7UUFDUnRKLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ2lKLFFBQVEsRUFBRTJFLFdBQVcsQ0FBQztNQUM5Qzs7TUFFQTtJQUFBO01BQUE1WCxHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBbVosT0FBT3pQLEtBQUssRUFBRTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUNzUCxxQkFBcUIsRUFBRTtVQUMvQixJQUFJLENBQUNELE9BQU8sR0FBR3JQLEtBQUssQ0FBQzBQLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTztVQUN2QztRQUNGO1FBQ0EsSUFBSSxJQUFJLENBQUNDLHVCQUF1QixDQUFDNVAsS0FBSyxDQUFDLEVBQUU7VUFDdkMsSUFBSSxDQUFDcVAsT0FBTyxHQUFHclAsS0FBSyxDQUFDMlAsT0FBTztRQUM5QjtNQUNGO0lBQUM7TUFBQXRaLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF1WixLQUFLN1AsS0FBSyxFQUFFO1FBQ1YsSUFBSSxJQUFJLENBQUM0UCx1QkFBdUIsQ0FBQzVQLEtBQUssQ0FBQyxFQUFFO1VBQ3ZDLElBQUksQ0FBQ3FQLE9BQU8sR0FBR3JQLEtBQUssQ0FBQzJQLE9BQU8sR0FBRyxJQUFJLENBQUNOLE9BQU87UUFDN0M7UUFDQSxJQUFJLENBQUNTLFlBQVksRUFBRTtRQUNuQnRTLE9BQU8sQ0FBQyxJQUFJLENBQUMrTCxPQUFPLENBQUNxRixXQUFXLENBQUM7TUFDbkM7SUFBQztNQUFBdlksR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXlaLE1BQU0vUCxLQUFLLEVBQUU7UUFDWCxJQUFJLENBQUNxUCxPQUFPLEdBQUdyUCxLQUFLLENBQUMwUCxPQUFPLElBQUkxUCxLQUFLLENBQUMwUCxPQUFPLENBQUNwVixNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRzBGLEtBQUssQ0FBQzBQLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ04sT0FBTztNQUN4RztJQUFDO01BQUFoWixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBd1osYUFBQSxFQUFlO1FBQ2IsSUFBTUUsU0FBUyxHQUFHaFgsSUFBSSxDQUFDaVgsR0FBRyxDQUFDLElBQUksQ0FBQ1osT0FBTyxDQUFDO1FBQ3hDLElBQUlXLFNBQVMsSUFBSXRCLGVBQWUsRUFBRTtVQUNoQztRQUNGO1FBQ0EsSUFBTXdCLFNBQVMsR0FBR0YsU0FBUyxHQUFHLElBQUksQ0FBQ1gsT0FBTztRQUMxQyxJQUFJLENBQUNBLE9BQU8sR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQ2EsU0FBUyxFQUFFO1VBQ2Q7UUFDRjtRQUNBMVMsT0FBTyxDQUFDMFMsU0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMzRyxPQUFPLENBQUN1RixhQUFhLEdBQUcsSUFBSSxDQUFDdkYsT0FBTyxDQUFDc0YsWUFBWSxDQUFDO01BQ2pGO0lBQUM7TUFBQXhZLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFrWixZQUFBLEVBQWM7UUFBQSxJQUFBVyxNQUFBO1FBQ1osSUFBSSxJQUFJLENBQUNiLHFCQUFxQixFQUFFO1VBQzlCbFAsWUFBWSxDQUFDZ0QsRUFBRSxDQUFDLElBQUksQ0FBQ2tHLFFBQVEsRUFBRStFLGlCQUFpQixFQUFFLFVBQUFyTyxLQUFLO1lBQUEsT0FBSW1RLE1BQUksQ0FBQ1YsTUFBTSxDQUFDelAsS0FBSyxDQUFDO1VBQUEsRUFBQztVQUM5RUksWUFBWSxDQUFDZ0QsRUFBRSxDQUFDLElBQUksQ0FBQ2tHLFFBQVEsRUFBRWdGLGVBQWUsRUFBRSxVQUFBdE8sS0FBSztZQUFBLE9BQUltUSxNQUFJLENBQUNOLElBQUksQ0FBQzdQLEtBQUssQ0FBQztVQUFBLEVBQUM7VUFDMUUsSUFBSSxDQUFDc0osUUFBUSxDQUFDbk8sU0FBUyxDQUFDaVYsR0FBRyxDQUFDM0Isd0JBQXdCLENBQUM7UUFDdkQsQ0FBQyxNQUFNO1VBQ0xyTyxZQUFZLENBQUNnRCxFQUFFLENBQUMsSUFBSSxDQUFDa0csUUFBUSxFQUFFNEUsZ0JBQWdCLEVBQUUsVUFBQWxPLEtBQUs7WUFBQSxPQUFJbVEsTUFBSSxDQUFDVixNQUFNLENBQUN6UCxLQUFLLENBQUM7VUFBQSxFQUFDO1VBQzdFSSxZQUFZLENBQUNnRCxFQUFFLENBQUMsSUFBSSxDQUFDa0csUUFBUSxFQUFFNkUsZUFBZSxFQUFFLFVBQUFuTyxLQUFLO1lBQUEsT0FBSW1RLE1BQUksQ0FBQ0osS0FBSyxDQUFDL1AsS0FBSyxDQUFDO1VBQUEsRUFBQztVQUMzRUksWUFBWSxDQUFDZ0QsRUFBRSxDQUFDLElBQUksQ0FBQ2tHLFFBQVEsRUFBRThFLGNBQWMsRUFBRSxVQUFBcE8sS0FBSztZQUFBLE9BQUltUSxNQUFJLENBQUNOLElBQUksQ0FBQzdQLEtBQUssQ0FBQztVQUFBLEVBQUM7UUFDM0U7TUFDRjtJQUFDO01BQUEzSixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBc1osd0JBQXdCNVAsS0FBSyxFQUFFO1FBQzdCLE9BQU8sSUFBSSxDQUFDc1AscUJBQXFCLEtBQUt0UCxLQUFLLENBQUNxUSxXQUFXLEtBQUs3QixnQkFBZ0IsSUFBSXhPLEtBQUssQ0FBQ3FRLFdBQVcsS0FBSzlCLGtCQUFrQixDQUFDO01BQzNIOztNQUVBO0lBQUE7TUFBQWxZLEdBQUE7TUFBQW1QLEdBQUEsRUE5REEsU0FBQUEsSUFBQSxFQUFxQjtRQUNuQixPQUFPbUosU0FBUztNQUNsQjtJQUFDO01BQUF0WSxHQUFBO01BQUFtUCxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUF5QjtRQUN2QixPQUFPdUosYUFBYTtNQUN0QjtJQUFDO01BQUExWSxHQUFBO01BQUFtUCxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUFrQjtRQUNoQixPQUFPd0ksTUFBTTtNQUNmO0lBQUM7TUFBQTNYLEdBQUE7TUFBQUMsS0FBQSxFQXVERCxTQUFBOFksWUFBQSxFQUFxQjtRQUNuQixPQUFPLGNBQWMsSUFBSWpXLFFBQVEsQ0FBQ3NDLGVBQWUsSUFBSTZVLFNBQVMsQ0FBQ0MsY0FBYyxHQUFHLENBQUM7TUFDbkY7SUFBQztJQUFBLE9BQUF2QixLQUFBO0VBQUEsRUEvRWlCdEgsTUFBTTtFQWtGMUI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBRUU7QUFDRjtBQUNBO0VBRUUsSUFBTThJLE1BQU0sR0FBRyxVQUFVO0VBQ3pCLElBQU1DLFVBQVUsR0FBRyxhQUFhO0VBQ2hDLElBQU1DLFdBQVcsT0FBQXJZLE1BQUEsQ0FBT29ZLFVBQVUsQ0FBRTtFQUNwQyxJQUFNRSxjQUFjLEdBQUcsV0FBVztFQUNsQyxJQUFNQyxnQkFBZ0IsR0FBRyxXQUFXO0VBQ3BDLElBQU1DLGlCQUFpQixHQUFHLFlBQVk7RUFDdEMsSUFBTUMsc0JBQXNCLEdBQUcsR0FBRyxDQUFDLENBQUM7O0VBRXBDLElBQU1DLFVBQVUsR0FBRyxNQUFNO0VBQ3pCLElBQU1DLFVBQVUsR0FBRyxNQUFNO0VBQ3pCLElBQU1DLGNBQWMsR0FBRyxNQUFNO0VBQzdCLElBQU1DLGVBQWUsR0FBRyxPQUFPO0VBQy9CLElBQU1DLFdBQVcsV0FBQTlZLE1BQUEsQ0FBV3FZLFdBQVcsQ0FBRTtFQUN6QyxJQUFNVSxVQUFVLFVBQUEvWSxNQUFBLENBQVVxWSxXQUFXLENBQUU7RUFDdkMsSUFBTVcsZUFBZSxhQUFBaFosTUFBQSxDQUFhcVksV0FBVyxDQUFFO0VBQy9DLElBQU1ZLGtCQUFrQixnQkFBQWpaLE1BQUEsQ0FBZ0JxWSxXQUFXLENBQUU7RUFDckQsSUFBTWEsa0JBQWtCLGdCQUFBbFosTUFBQSxDQUFnQnFZLFdBQVcsQ0FBRTtFQUNyRCxJQUFNYyxnQkFBZ0IsZUFBQW5aLE1BQUEsQ0FBZXFZLFdBQVcsQ0FBRTtFQUNsRCxJQUFNZSxxQkFBcUIsVUFBQXBaLE1BQUEsQ0FBVXFZLFdBQVcsRUFBQXJZLE1BQUEsQ0FBR3NZLGNBQWMsQ0FBRTtFQUNuRSxJQUFNZSxzQkFBc0IsV0FBQXJaLE1BQUEsQ0FBV3FZLFdBQVcsRUFBQXJZLE1BQUEsQ0FBR3NZLGNBQWMsQ0FBRTtFQUNyRSxJQUFNZ0IsbUJBQW1CLEdBQUcsVUFBVTtFQUN0QyxJQUFNQyxtQkFBbUIsR0FBRyxRQUFRO0VBQ3BDLElBQU1DLGdCQUFnQixHQUFHLE9BQU87RUFDaEMsSUFBTUMsY0FBYyxHQUFHLG1CQUFtQjtFQUMxQyxJQUFNQyxnQkFBZ0IsR0FBRyxxQkFBcUI7RUFDOUMsSUFBTUMsZUFBZSxHQUFHLG9CQUFvQjtFQUM1QyxJQUFNQyxlQUFlLEdBQUcsb0JBQW9CO0VBQzVDLElBQU1DLGVBQWUsR0FBRyxTQUFTO0VBQ2pDLElBQU1DLGFBQWEsR0FBRyxnQkFBZ0I7RUFDdEMsSUFBTUMsb0JBQW9CLEdBQUdGLGVBQWUsR0FBR0MsYUFBYTtFQUM1RCxJQUFNRSxpQkFBaUIsR0FBRyxvQkFBb0I7RUFDOUMsSUFBTUMsbUJBQW1CLEdBQUcsc0JBQXNCO0VBQ2xELElBQU1DLG1CQUFtQixHQUFHLHFDQUFxQztFQUNqRSxJQUFNQyxrQkFBa0IsR0FBRywyQkFBMkI7RUFDdEQsSUFBTUMsZ0JBQWdCLElBQUFoYixpQkFBQSxPQUFBaWIsZUFBQSxDQUFBamIsaUJBQUEsRUFDbkJtWixnQkFBZ0IsRUFBR00sZUFBZSxHQUFBd0IsZUFBQSxDQUFBamIsaUJBQUEsRUFDbENvWixpQkFBaUIsRUFBR0ksY0FBYyxHQUFBeFosaUJBQUEsQ0FDcEM7RUFDRCxJQUFNa2IsU0FBUyxHQUFHO0lBQ2hCQyxRQUFRLEVBQUUsSUFBSTtJQUNkQyxRQUFRLEVBQUUsSUFBSTtJQUNkQyxLQUFLLEVBQUUsT0FBTztJQUNkQyxJQUFJLEVBQUUsS0FBSztJQUNYQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxJQUFJLEVBQUU7RUFDUixDQUFDO0VBQ0QsSUFBTUMsYUFBYSxHQUFHO0lBQ3BCTixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCO0lBQ0FDLFFBQVEsRUFBRSxTQUFTO0lBQ25CQyxLQUFLLEVBQUUsa0JBQWtCO0lBQ3pCQyxJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCQyxLQUFLLEVBQUUsU0FBUztJQUNoQkMsSUFBSSxFQUFFO0VBQ1IsQ0FBQzs7RUFFRDtBQUNGO0FBQ0E7RUFGRSxJQUlNRSxRQUFRLDBCQUFBQyxlQUFBO0lBQUF0ZCxTQUFBLENBQUFxZCxRQUFBLEVBQUFDLGVBQUE7SUFBQSxJQUFBQyxPQUFBLEdBQUFyZCxZQUFBLENBQUFtZCxRQUFBO0lBQ1osU0FBQUEsU0FBWTNjLE9BQU8sRUFBRW9SLE1BQU0sRUFBRTtNQUFBLElBQUEwTCxNQUFBO01BQUFyZCxlQUFBLE9BQUFrZCxRQUFBO01BQzNCRyxNQUFBLEdBQUFELE9BQUEsQ0FBQXphLElBQUEsT0FBTXBDLE9BQU8sRUFBRW9SLE1BQU07TUFDckIwTCxNQUFBLENBQUtDLFNBQVMsR0FBRyxJQUFJO01BQ3JCRCxNQUFBLENBQUtFLGNBQWMsR0FBRyxJQUFJO01BQzFCRixNQUFBLENBQUtHLFVBQVUsR0FBRyxLQUFLO01BQ3ZCSCxNQUFBLENBQUtJLFlBQVksR0FBRyxJQUFJO01BQ3hCSixNQUFBLENBQUtLLFlBQVksR0FBRyxJQUFJO01BQ3hCTCxNQUFBLENBQUtNLGtCQUFrQixHQUFHcEosY0FBYyxDQUFDRyxPQUFPLENBQUMySCxtQkFBbUIsRUFBRWdCLE1BQUEsQ0FBS2hLLFFBQVEsQ0FBQztNQUNwRmdLLE1BQUEsQ0FBS08sa0JBQWtCLEVBQUU7TUFDekIsSUFBSVAsTUFBQSxDQUFLL0osT0FBTyxDQUFDd0osSUFBSSxLQUFLcEIsbUJBQW1CLEVBQUU7UUFDN0MyQixNQUFBLENBQUtRLEtBQUssRUFBRTtNQUNkO01BQUMsT0FBQVIsTUFBQTtJQUNIOztJQUVBO0lBQUFsZCxZQUFBLENBQUErYyxRQUFBO01BQUE5YyxHQUFBO01BQUFDLEtBQUE7TUFXQTtNQUNBLFNBQUErVSxLQUFBLEVBQU87UUFDTCxJQUFJLENBQUMwSSxNQUFNLENBQUNoRCxVQUFVLENBQUM7TUFDekI7SUFBQztNQUFBMWEsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTBkLGdCQUFBLEVBQWtCO1FBQ2hCO1FBQ0E7UUFDQTtRQUNBLElBQUksQ0FBQzdhLFFBQVEsQ0FBQzhhLE1BQU0sSUFBSXpaLFNBQVMsQ0FBQyxJQUFJLENBQUM4TyxRQUFRLENBQUMsRUFBRTtVQUNoRCxJQUFJLENBQUMrQixJQUFJLEVBQUU7UUFDYjtNQUNGO0lBQUM7TUFBQWhWLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUE0VSxLQUFBLEVBQU87UUFDTCxJQUFJLENBQUM2SSxNQUFNLENBQUMvQyxVQUFVLENBQUM7TUFDekI7SUFBQztNQUFBM2EsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXdjLE1BQUEsRUFBUTtRQUNOLElBQUksSUFBSSxDQUFDVyxVQUFVLEVBQUU7VUFDbkIxWixvQkFBb0IsQ0FBQyxJQUFJLENBQUN1UCxRQUFRLENBQUM7UUFDckM7UUFDQSxJQUFJLENBQUM0SyxjQUFjLEVBQUU7TUFDdkI7SUFBQztNQUFBN2QsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXdkLE1BQUEsRUFBUTtRQUFBLElBQUFLLE1BQUE7UUFDTixJQUFJLENBQUNELGNBQWMsRUFBRTtRQUNyQixJQUFJLENBQUNFLGVBQWUsRUFBRTtRQUN0QixJQUFJLENBQUNiLFNBQVMsR0FBR2MsV0FBVyxDQUFDO1VBQUEsT0FBTUYsTUFBSSxDQUFDSCxlQUFlLEVBQUU7UUFBQSxHQUFFLElBQUksQ0FBQ3pLLE9BQU8sQ0FBQ3FKLFFBQVEsQ0FBQztNQUNuRjtJQUFDO01BQUF2YyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBZ2Usa0JBQUEsRUFBb0I7UUFBQSxJQUFBQyxNQUFBO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUNoTCxPQUFPLENBQUN3SixJQUFJLEVBQUU7VUFDdEI7UUFDRjtRQUNBLElBQUksSUFBSSxDQUFDVSxVQUFVLEVBQUU7VUFDbkJyVCxZQUFZLENBQUNpRCxHQUFHLENBQUMsSUFBSSxDQUFDaUcsUUFBUSxFQUFFOEgsVUFBVSxFQUFFO1lBQUEsT0FBTW1ELE1BQUksQ0FBQ1QsS0FBSyxFQUFFO1VBQUEsRUFBQztVQUMvRDtRQUNGO1FBQ0EsSUFBSSxDQUFDQSxLQUFLLEVBQUU7TUFDZDtJQUFDO01BQUF6ZCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBa2UsR0FBRzFWLEtBQUssRUFBRTtRQUFBLElBQUEyVixNQUFBO1FBQ1IsSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsU0FBUyxFQUFFO1FBQzlCLElBQUk3VixLQUFLLEdBQUc0VixLQUFLLENBQUNwYSxNQUFNLEdBQUcsQ0FBQyxJQUFJd0UsS0FBSyxHQUFHLENBQUMsRUFBRTtVQUN6QztRQUNGO1FBQ0EsSUFBSSxJQUFJLENBQUMyVSxVQUFVLEVBQUU7VUFDbkJyVCxZQUFZLENBQUNpRCxHQUFHLENBQUMsSUFBSSxDQUFDaUcsUUFBUSxFQUFFOEgsVUFBVSxFQUFFO1lBQUEsT0FBTXFELE1BQUksQ0FBQ0QsRUFBRSxDQUFDMVYsS0FBSyxDQUFDO1VBQUEsRUFBQztVQUNqRTtRQUNGO1FBQ0EsSUFBTThWLFdBQVcsR0FBRyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNDLFVBQVUsRUFBRSxDQUFDO1FBQ3pELElBQUlGLFdBQVcsS0FBSzlWLEtBQUssRUFBRTtVQUN6QjtRQUNGO1FBQ0EsSUFBTWlXLEtBQUssR0FBR2pXLEtBQUssR0FBRzhWLFdBQVcsR0FBRzdELFVBQVUsR0FBR0MsVUFBVTtRQUMzRCxJQUFJLENBQUMrQyxNQUFNLENBQUNnQixLQUFLLEVBQUVMLEtBQUssQ0FBQzVWLEtBQUssQ0FBQyxDQUFDO01BQ2xDO0lBQUM7TUFBQXpJLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFvVCxRQUFBLEVBQVU7UUFDUixJQUFJLElBQUksQ0FBQ2lLLFlBQVksRUFBRTtVQUNyQixJQUFJLENBQUNBLFlBQVksQ0FBQ2pLLE9BQU8sRUFBRTtRQUM3QjtRQUNBc0wsSUFBQSxDQUFBQyxlQUFBLENBQUE5QixRQUFBLENBQUF6YSxTQUFBLG9CQUFBRSxJQUFBO01BQ0Y7O01BRUE7SUFBQTtNQUFBdkMsR0FBQTtNQUFBQyxLQUFBLEVBQ0EsU0FBQXdSLGtCQUFrQkYsTUFBTSxFQUFFO1FBQ3hCQSxNQUFNLENBQUNzTixlQUFlLEdBQUd0TixNQUFNLENBQUNnTCxRQUFRO1FBQ3hDLE9BQU9oTCxNQUFNO01BQ2Y7SUFBQztNQUFBdlIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXVkLG1CQUFBLEVBQXFCO1FBQUEsSUFBQXNCLE1BQUE7UUFDbkIsSUFBSSxJQUFJLENBQUM1TCxPQUFPLENBQUNzSixRQUFRLEVBQUU7VUFDekJ6UyxZQUFZLENBQUNnRCxFQUFFLENBQUMsSUFBSSxDQUFDa0csUUFBUSxFQUFFK0gsZUFBZSxFQUFFLFVBQUFyUixLQUFLO1lBQUEsT0FBSW1WLE1BQUksQ0FBQ0MsUUFBUSxDQUFDcFYsS0FBSyxDQUFDO1VBQUEsRUFBQztRQUNoRjtRQUNBLElBQUksSUFBSSxDQUFDdUosT0FBTyxDQUFDdUosS0FBSyxLQUFLLE9BQU8sRUFBRTtVQUNsQzFTLFlBQVksQ0FBQ2dELEVBQUUsQ0FBQyxJQUFJLENBQUNrRyxRQUFRLEVBQUVnSSxrQkFBa0IsRUFBRTtZQUFBLE9BQU02RCxNQUFJLENBQUNyQyxLQUFLLEVBQUU7VUFBQSxFQUFDO1VBQ3RFMVMsWUFBWSxDQUFDZ0QsRUFBRSxDQUFDLElBQUksQ0FBQ2tHLFFBQVEsRUFBRWlJLGtCQUFrQixFQUFFO1lBQUEsT0FBTTRELE1BQUksQ0FBQ2IsaUJBQWlCLEVBQUU7VUFBQSxFQUFDO1FBQ3BGO1FBQ0EsSUFBSSxJQUFJLENBQUMvSyxPQUFPLENBQUN5SixLQUFLLElBQUloRSxLQUFLLENBQUNJLFdBQVcsRUFBRSxFQUFFO1VBQzdDLElBQUksQ0FBQ2lHLHVCQUF1QixFQUFFO1FBQ2hDO01BQ0Y7SUFBQztNQUFBaGYsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQStlLHdCQUFBLEVBQTBCO1FBQUEsSUFBQUMsT0FBQTtRQUFBLElBQUFDLFVBQUEsR0FBQTVVLDBCQUFBLENBQ042SixjQUFjLENBQUMvSSxJQUFJLENBQUM0USxpQkFBaUIsRUFBRSxJQUFJLENBQUMvSSxRQUFRLENBQUM7VUFBQWtNLE1BQUE7UUFBQTtVQUF2RSxLQUFBRCxVQUFBLENBQUExVSxDQUFBLE1BQUEyVSxNQUFBLEdBQUFELFVBQUEsQ0FBQXpVLENBQUEsSUFBQUMsSUFBQSxHQUF5RTtZQUFBLElBQTlEMFUsR0FBRyxHQUFBRCxNQUFBLENBQUFsZixLQUFBO1lBQ1o4SixZQUFZLENBQUNnRCxFQUFFLENBQUNxUyxHQUFHLEVBQUVqRSxnQkFBZ0IsRUFBRSxVQUFBeFIsS0FBSztjQUFBLE9BQUlBLEtBQUssQ0FBQzhFLGNBQWMsRUFBRTtZQUFBLEVBQUM7VUFDekU7UUFBQyxTQUFBN0QsR0FBQTtVQUFBc1UsVUFBQSxDQUFBclUsQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQXNVLFVBQUEsQ0FBQXBVLENBQUE7UUFBQTtRQUNELElBQU11VSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO1VBQ3hCLElBQUlKLE9BQUksQ0FBQy9MLE9BQU8sQ0FBQ3VKLEtBQUssS0FBSyxPQUFPLEVBQUU7WUFDbEM7VUFDRjs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQXdDLE9BQUksQ0FBQ3hDLEtBQUssRUFBRTtVQUNaLElBQUl3QyxPQUFJLENBQUM1QixZQUFZLEVBQUU7WUFDckJpQyxZQUFZLENBQUNMLE9BQUksQ0FBQzVCLFlBQVksQ0FBQztVQUNqQztVQUNBNEIsT0FBSSxDQUFDNUIsWUFBWSxHQUFHblYsVUFBVSxDQUFDO1lBQUEsT0FBTStXLE9BQUksQ0FBQ2hCLGlCQUFpQixFQUFFO1VBQUEsR0FBRXhELHNCQUFzQixHQUFHd0UsT0FBSSxDQUFDL0wsT0FBTyxDQUFDcUosUUFBUSxDQUFDO1FBQ2hILENBQUM7UUFDRCxJQUFNZ0QsV0FBVyxHQUFHO1VBQ2xCL0csWUFBWSxFQUFFLFNBQUFBLGFBQUE7WUFBQSxPQUFNeUcsT0FBSSxDQUFDdkIsTUFBTSxDQUFDdUIsT0FBSSxDQUFDTyxpQkFBaUIsQ0FBQzVFLGNBQWMsQ0FBQyxDQUFDO1VBQUE7VUFDdkVuQyxhQUFhLEVBQUUsU0FBQUEsY0FBQTtZQUFBLE9BQU13RyxPQUFJLENBQUN2QixNQUFNLENBQUN1QixPQUFJLENBQUNPLGlCQUFpQixDQUFDM0UsZUFBZSxDQUFDLENBQUM7VUFBQTtVQUN6RXRDLFdBQVcsRUFBRThHO1FBQ2YsQ0FBQztRQUNELElBQUksQ0FBQy9CLFlBQVksR0FBRyxJQUFJM0UsS0FBSyxDQUFDLElBQUksQ0FBQzFGLFFBQVEsRUFBRXNNLFdBQVcsQ0FBQztNQUMzRDtJQUFDO01BQUF2ZixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBOGUsU0FBU3BWLEtBQUssRUFBRTtRQUNkLElBQUksaUJBQWlCLENBQUM2SSxJQUFJLENBQUM3SSxLQUFLLENBQUMzQixNQUFNLENBQUM4TixPQUFPLENBQUMsRUFBRTtVQUNoRDtRQUNGO1FBQ0EsSUFBTStELFNBQVMsR0FBR3VDLGdCQUFnQixDQUFDelMsS0FBSyxDQUFDM0osR0FBRyxDQUFDO1FBQzdDLElBQUk2WixTQUFTLEVBQUU7VUFDYmxRLEtBQUssQ0FBQzhFLGNBQWMsRUFBRTtVQUN0QixJQUFJLENBQUNpUCxNQUFNLENBQUMsSUFBSSxDQUFDOEIsaUJBQWlCLENBQUMzRixTQUFTLENBQUMsQ0FBQztRQUNoRDtNQUNGO0lBQUM7TUFBQTdaLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF1ZSxjQUFjcmUsT0FBTyxFQUFFO1FBQ3JCLE9BQU8sSUFBSSxDQUFDbWUsU0FBUyxFQUFFLENBQUM1VixPQUFPLENBQUN2SSxPQUFPLENBQUM7TUFDMUM7SUFBQztNQUFBSCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBd2YsMkJBQTJCaFgsS0FBSyxFQUFFO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUM4VSxrQkFBa0IsRUFBRTtVQUM1QjtRQUNGO1FBQ0EsSUFBTW1DLGVBQWUsR0FBR3ZMLGNBQWMsQ0FBQ0csT0FBTyxDQUFDdUgsZUFBZSxFQUFFLElBQUksQ0FBQzBCLGtCQUFrQixDQUFDO1FBQ3hGbUMsZUFBZSxDQUFDNWEsU0FBUyxDQUFDaUwsTUFBTSxDQUFDd0wsbUJBQW1CLENBQUM7UUFDckRtRSxlQUFlLENBQUNoUCxlQUFlLENBQUMsY0FBYyxDQUFDO1FBQy9DLElBQU1pUCxrQkFBa0IsR0FBR3hMLGNBQWMsQ0FBQ0csT0FBTyx3QkFBQXRTLE1BQUEsQ0FBdUJ5RyxLQUFLLFVBQU0sSUFBSSxDQUFDOFUsa0JBQWtCLENBQUM7UUFDM0csSUFBSW9DLGtCQUFrQixFQUFFO1VBQ3RCQSxrQkFBa0IsQ0FBQzdhLFNBQVMsQ0FBQ2lWLEdBQUcsQ0FBQ3dCLG1CQUFtQixDQUFDO1VBQ3JEb0Usa0JBQWtCLENBQUNuUCxZQUFZLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQztRQUN6RDtNQUNGO0lBQUM7TUFBQXhRLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUE4ZCxnQkFBQSxFQUFrQjtRQUNoQixJQUFNNWQsT0FBTyxHQUFHLElBQUksQ0FBQ2dkLGNBQWMsSUFBSSxJQUFJLENBQUNzQixVQUFVLEVBQUU7UUFDeEQsSUFBSSxDQUFDdGUsT0FBTyxFQUFFO1VBQ1o7UUFDRjtRQUNBLElBQU15ZixlQUFlLEdBQUd0YyxNQUFNLENBQUN1YyxRQUFRLENBQUMxZixPQUFPLENBQUMrRSxZQUFZLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDckYsSUFBSSxDQUFDZ08sT0FBTyxDQUFDcUosUUFBUSxHQUFHcUQsZUFBZSxJQUFJLElBQUksQ0FBQzFNLE9BQU8sQ0FBQzJMLGVBQWU7TUFDekU7SUFBQztNQUFBN2UsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXlkLE9BQU9nQixLQUFLLEVBQWtCO1FBQUEsSUFBQW9CLE9BQUE7UUFBQSxJQUFoQjNmLE9BQU8sR0FBQUwsU0FBQSxDQUFBbUUsTUFBQSxRQUFBbkUsU0FBQSxRQUFBcUMsU0FBQSxHQUFBckMsU0FBQSxNQUFHLElBQUk7UUFDMUIsSUFBSSxJQUFJLENBQUNzZCxVQUFVLEVBQUU7VUFDbkI7UUFDRjtRQUNBLElBQU0vVSxhQUFhLEdBQUcsSUFBSSxDQUFDb1csVUFBVSxFQUFFO1FBQ3ZDLElBQU1zQixNQUFNLEdBQUdyQixLQUFLLEtBQUtoRSxVQUFVO1FBQ25DLElBQU1zRixXQUFXLEdBQUc3ZixPQUFPLElBQUlnSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUNtVyxTQUFTLEVBQUUsRUFBRWpXLGFBQWEsRUFBRTBYLE1BQU0sRUFBRSxJQUFJLENBQUM3TSxPQUFPLENBQUMwSixJQUFJLENBQUM7UUFDL0csSUFBSW9ELFdBQVcsS0FBSzNYLGFBQWEsRUFBRTtVQUNqQztRQUNGO1FBQ0EsSUFBTTRYLGdCQUFnQixHQUFHLElBQUksQ0FBQ3pCLGFBQWEsQ0FBQ3dCLFdBQVcsQ0FBQztRQUN4RCxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBR25NLFNBQVMsRUFBSTtVQUNoQyxPQUFPaEssWUFBWSxDQUFDZ0UsT0FBTyxDQUFDK1IsT0FBSSxDQUFDN00sUUFBUSxFQUFFYyxTQUFTLEVBQUU7WUFDcEQ5SCxhQUFhLEVBQUUrVCxXQUFXO1lBQzFCbkcsU0FBUyxFQUFFaUcsT0FBSSxDQUFDSyxpQkFBaUIsQ0FBQ3pCLEtBQUssQ0FBQztZQUN4QzVPLElBQUksRUFBRWdRLE9BQUksQ0FBQ3RCLGFBQWEsQ0FBQ25XLGFBQWEsQ0FBQztZQUN2QzhWLEVBQUUsRUFBRThCO1VBQ04sQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUNELElBQU1HLFVBQVUsR0FBR0YsWUFBWSxDQUFDcEYsV0FBVyxDQUFDO1FBQzVDLElBQUlzRixVQUFVLENBQUNqUyxnQkFBZ0IsRUFBRTtVQUMvQjtRQUNGO1FBQ0EsSUFBSSxDQUFDOUYsYUFBYSxJQUFJLENBQUMyWCxXQUFXLEVBQUU7VUFDbEM7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxJQUFNSyxTQUFTLEdBQUdoVSxPQUFPLENBQUMsSUFBSSxDQUFDNlEsU0FBUyxDQUFDO1FBQ3pDLElBQUksQ0FBQ1QsS0FBSyxFQUFFO1FBQ1osSUFBSSxDQUFDVyxVQUFVLEdBQUcsSUFBSTtRQUN0QixJQUFJLENBQUNxQywwQkFBMEIsQ0FBQ1EsZ0JBQWdCLENBQUM7UUFDakQsSUFBSSxDQUFDOUMsY0FBYyxHQUFHNkMsV0FBVztRQUNqQyxJQUFNTSxvQkFBb0IsR0FBR1AsTUFBTSxHQUFHckUsZ0JBQWdCLEdBQUdELGNBQWM7UUFDdkUsSUFBTThFLGNBQWMsR0FBR1IsTUFBTSxHQUFHcEUsZUFBZSxHQUFHQyxlQUFlO1FBQ2pFb0UsV0FBVyxDQUFDbGIsU0FBUyxDQUFDaVYsR0FBRyxDQUFDd0csY0FBYyxDQUFDO1FBQ3pDN2EsTUFBTSxDQUFDc2EsV0FBVyxDQUFDO1FBQ25CM1gsYUFBYSxDQUFDdkQsU0FBUyxDQUFDaVYsR0FBRyxDQUFDdUcsb0JBQW9CLENBQUM7UUFDakROLFdBQVcsQ0FBQ2xiLFNBQVMsQ0FBQ2lWLEdBQUcsQ0FBQ3VHLG9CQUFvQixDQUFDO1FBQy9DLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUEsRUFBUztVQUM3QlIsV0FBVyxDQUFDbGIsU0FBUyxDQUFDaUwsTUFBTSxDQUFDdVEsb0JBQW9CLEVBQUVDLGNBQWMsQ0FBQztVQUNsRVAsV0FBVyxDQUFDbGIsU0FBUyxDQUFDaVYsR0FBRyxDQUFDd0IsbUJBQW1CLENBQUM7VUFDOUNsVCxhQUFhLENBQUN2RCxTQUFTLENBQUNpTCxNQUFNLENBQUN3TCxtQkFBbUIsRUFBRWdGLGNBQWMsRUFBRUQsb0JBQW9CLENBQUM7VUFDekZSLE9BQUksQ0FBQzFDLFVBQVUsR0FBRyxLQUFLO1VBQ3ZCOEMsWUFBWSxDQUFDbkYsVUFBVSxDQUFDO1FBQzFCLENBQUM7UUFDRCxJQUFJLENBQUNwSCxjQUFjLENBQUM2TSxnQkFBZ0IsRUFBRW5ZLGFBQWEsRUFBRSxJQUFJLENBQUNvWSxXQUFXLEVBQUUsQ0FBQztRQUN4RSxJQUFJSixTQUFTLEVBQUU7VUFDYixJQUFJLENBQUM1QyxLQUFLLEVBQUU7UUFDZDtNQUNGO0lBQUM7TUFBQXpkLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF3Z0IsWUFBQSxFQUFjO1FBQ1osT0FBTyxJQUFJLENBQUN4TixRQUFRLENBQUNuTyxTQUFTLENBQUNDLFFBQVEsQ0FBQ3lXLGdCQUFnQixDQUFDO01BQzNEO0lBQUM7TUFBQXhiLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF3ZSxXQUFBLEVBQWE7UUFDWCxPQUFPdEssY0FBYyxDQUFDRyxPQUFPLENBQUN5SCxvQkFBb0IsRUFBRSxJQUFJLENBQUM5SSxRQUFRLENBQUM7TUFDcEU7SUFBQztNQUFBalQsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXFlLFVBQUEsRUFBWTtRQUNWLE9BQU9uSyxjQUFjLENBQUMvSSxJQUFJLENBQUMwUSxhQUFhLEVBQUUsSUFBSSxDQUFDN0ksUUFBUSxDQUFDO01BQzFEO0lBQUM7TUFBQWpULEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUE0ZCxlQUFBLEVBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUNYLFNBQVMsRUFBRTtVQUNsQndELGFBQWEsQ0FBQyxJQUFJLENBQUN4RCxTQUFTLENBQUM7VUFDN0IsSUFBSSxDQUFDQSxTQUFTLEdBQUcsSUFBSTtRQUN2QjtNQUNGO0lBQUM7TUFBQWxkLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF1ZixrQkFBa0IzRixTQUFTLEVBQUU7UUFDM0IsSUFBSXRULEtBQUssRUFBRSxFQUFFO1VBQ1gsT0FBT3NULFNBQVMsS0FBS2UsY0FBYyxHQUFHRCxVQUFVLEdBQUdELFVBQVU7UUFDL0Q7UUFDQSxPQUFPYixTQUFTLEtBQUtlLGNBQWMsR0FBR0YsVUFBVSxHQUFHQyxVQUFVO01BQy9EO0lBQUM7TUFBQTNhLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFrZ0Isa0JBQWtCekIsS0FBSyxFQUFFO1FBQ3ZCLElBQUluWSxLQUFLLEVBQUUsRUFBRTtVQUNYLE9BQU9tWSxLQUFLLEtBQUsvRCxVQUFVLEdBQUdDLGNBQWMsR0FBR0MsZUFBZTtRQUNoRTtRQUNBLE9BQU82RCxLQUFLLEtBQUsvRCxVQUFVLEdBQUdFLGVBQWUsR0FBR0QsY0FBYztNQUNoRTs7TUFFQTtJQUFBO01BQUE1YSxHQUFBO01BQUFtUCxHQUFBLEVBck9BLFNBQUFBLElBQUEsRUFBcUI7UUFDbkIsT0FBT21OLFNBQVM7TUFDbEI7SUFBQztNQUFBdGMsR0FBQTtNQUFBbVAsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBeUI7UUFDdkIsT0FBTzBOLGFBQWE7TUFDdEI7SUFBQztNQUFBN2MsR0FBQTtNQUFBbVAsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBa0I7UUFDaEIsT0FBT2dMLE1BQU07TUFDZjtJQUFDO01BQUFuYSxHQUFBO01BQUFDLEtBQUEsRUE4TkQsU0FBQStHLGdCQUF1QnVLLE1BQU0sRUFBRTtRQUM3QixPQUFPLElBQUksQ0FBQ3NGLElBQUksQ0FBQyxZQUFZO1VBQzNCLElBQU1DLElBQUksR0FBR2dHLFFBQVEsQ0FBQ2hKLG1CQUFtQixDQUFDLElBQUksRUFBRXZDLE1BQU0sQ0FBQztVQUN2RCxJQUFJLE9BQU9BLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUJ1RixJQUFJLENBQUNxSCxFQUFFLENBQUM1TSxNQUFNLENBQUM7WUFDZjtVQUNGO1VBQ0EsSUFBSSxPQUFPQSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCLElBQUl1RixJQUFJLENBQUN2RixNQUFNLENBQUMsS0FBS3BQLFNBQVMsSUFBSW9QLE1BQU0sQ0FBQ2xFLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSWtFLE1BQU0sS0FBSyxhQUFhLEVBQUU7Y0FDcEYsTUFBTSxJQUFJa0IsU0FBUyxzQkFBQXpRLE1BQUEsQ0FBcUJ1UCxNQUFNLFFBQUk7WUFDcEQ7WUFDQXVGLElBQUksQ0FBQ3ZGLE1BQU0sQ0FBQyxFQUFFO1VBQ2hCO1FBQ0YsQ0FBQyxDQUFDO01BQ0o7SUFBQztJQUFBLE9BQUF1TCxRQUFBO0VBQUEsRUFwUW9CakssYUFBYTtFQXVRcEM7QUFDRjtBQUNBO0VBRUU5SSxZQUFZLENBQUNnRCxFQUFFLENBQUNqSyxRQUFRLEVBQUV1WSxzQkFBc0IsRUFBRWEsbUJBQW1CLEVBQUUsVUFBVXZTLEtBQUssRUFBRTtJQUN0RixJQUFNM0IsTUFBTSxHQUFHbU0sY0FBYyxDQUFDcUIsc0JBQXNCLENBQUMsSUFBSSxDQUFDO0lBQzFELElBQUksQ0FBQ3hOLE1BQU0sSUFBSSxDQUFDQSxNQUFNLENBQUNsRCxTQUFTLENBQUNDLFFBQVEsQ0FBQ3VXLG1CQUFtQixDQUFDLEVBQUU7TUFDOUQ7SUFDRjtJQUNBM1IsS0FBSyxDQUFDOEUsY0FBYyxFQUFFO0lBQ3RCLElBQU1rUyxRQUFRLEdBQUc3RCxRQUFRLENBQUNoSixtQkFBbUIsQ0FBQzlMLE1BQU0sQ0FBQztJQUNyRCxJQUFNNFksVUFBVSxHQUFHLElBQUksQ0FBQzFiLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztJQUN4RCxJQUFJMGIsVUFBVSxFQUFFO01BQ2RELFFBQVEsQ0FBQ3hDLEVBQUUsQ0FBQ3lDLFVBQVUsQ0FBQztNQUN2QkQsUUFBUSxDQUFDMUMsaUJBQWlCLEVBQUU7TUFDNUI7SUFDRjtJQUNBLElBQUkzTixXQUFXLENBQUNjLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxNQUFNLEVBQUU7TUFDMUR1UCxRQUFRLENBQUMzTCxJQUFJLEVBQUU7TUFDZjJMLFFBQVEsQ0FBQzFDLGlCQUFpQixFQUFFO01BQzVCO0lBQ0Y7SUFDQTBDLFFBQVEsQ0FBQzlMLElBQUksRUFBRTtJQUNmOEwsUUFBUSxDQUFDMUMsaUJBQWlCLEVBQUU7RUFDOUIsQ0FBQyxDQUFDO0VBQ0ZsVSxZQUFZLENBQUNnRCxFQUFFLENBQUNyTCxNQUFNLEVBQUUwWixxQkFBcUIsRUFBRSxZQUFNO0lBQ25ELElBQU15RixTQUFTLEdBQUcxTSxjQUFjLENBQUMvSSxJQUFJLENBQUMrUSxrQkFBa0IsQ0FBQztJQUFDLElBQUEyRSxVQUFBLEdBQUF4VywwQkFBQSxDQUNuQ3VXLFNBQVM7TUFBQUUsTUFBQTtJQUFBO01BQWhDLEtBQUFELFVBQUEsQ0FBQXRXLENBQUEsTUFBQXVXLE1BQUEsR0FBQUQsVUFBQSxDQUFBclcsQ0FBQSxJQUFBQyxJQUFBLEdBQWtDO1FBQUEsSUFBdkJpVyxRQUFRLEdBQUFJLE1BQUEsQ0FBQTlnQixLQUFBO1FBQ2pCNmMsUUFBUSxDQUFDaEosbUJBQW1CLENBQUM2TSxRQUFRLENBQUM7TUFDeEM7SUFBQyxTQUFBL1YsR0FBQTtNQUFBa1csVUFBQSxDQUFBalcsQ0FBQSxDQUFBRCxHQUFBO0lBQUE7TUFBQWtXLFVBQUEsQ0FBQWhXLENBQUE7SUFBQTtFQUNILENBQUMsQ0FBQzs7RUFFRjtBQUNGO0FBQ0E7O0VBRUVyRSxrQkFBa0IsQ0FBQ3FXLFFBQVEsQ0FBQzs7RUFFNUI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRSxJQUFNa0UsTUFBTSxHQUFHLFVBQVU7RUFDekIsSUFBTUMsVUFBVSxHQUFHLGFBQWE7RUFDaEMsSUFBTUMsV0FBVyxPQUFBbGYsTUFBQSxDQUFPaWYsVUFBVSxDQUFFO0VBQ3BDLElBQU1FLGNBQWMsR0FBRyxXQUFXO0VBQ2xDLElBQU1DLFlBQVksVUFBQXBmLE1BQUEsQ0FBVWtmLFdBQVcsQ0FBRTtFQUN6QyxJQUFNRyxhQUFhLFdBQUFyZixNQUFBLENBQVdrZixXQUFXLENBQUU7RUFDM0MsSUFBTUksWUFBWSxVQUFBdGYsTUFBQSxDQUFVa2YsV0FBVyxDQUFFO0VBQ3pDLElBQU1LLGNBQWMsWUFBQXZmLE1BQUEsQ0FBWWtmLFdBQVcsQ0FBRTtFQUM3QyxJQUFNTSxzQkFBc0IsV0FBQXhmLE1BQUEsQ0FBV2tmLFdBQVcsRUFBQWxmLE1BQUEsQ0FBR21mLGNBQWMsQ0FBRTtFQUNyRSxJQUFNTSxpQkFBaUIsR0FBRyxNQUFNO0VBQ2hDLElBQU1DLG1CQUFtQixHQUFHLFVBQVU7RUFDdEMsSUFBTUMscUJBQXFCLEdBQUcsWUFBWTtFQUMxQyxJQUFNQyxvQkFBb0IsR0FBRyxXQUFXO0VBQ3hDLElBQU1DLDBCQUEwQixjQUFBN2YsTUFBQSxDQUFjMGYsbUJBQW1CLFFBQUExZixNQUFBLENBQUswZixtQkFBbUIsQ0FBRTtFQUMzRixJQUFNSSxxQkFBcUIsR0FBRyxxQkFBcUI7RUFDbkQsSUFBTUMsS0FBSyxHQUFHLE9BQU87RUFDckIsSUFBTUMsTUFBTSxHQUFHLFFBQVE7RUFDdkIsSUFBTUMsZ0JBQWdCLEdBQUcsc0NBQXNDO0VBQy9ELElBQU1DLHNCQUFzQixHQUFHLDZCQUE2QjtFQUM1RCxJQUFNQyxTQUFTLEdBQUc7SUFDaEJDLE1BQU0sRUFBRSxJQUFJO0lBQ1ozSyxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0QsSUFBTTRLLGFBQWEsR0FBRztJQUNwQkQsTUFBTSxFQUFFLGdCQUFnQjtJQUN4QjNLLE1BQU0sRUFBRTtFQUNWLENBQUM7O0VBRUQ7QUFDRjtBQUNBO0VBRkUsSUFJTTZLLFFBQVEsMEJBQUFDLGVBQUE7SUFBQTlpQixTQUFBLENBQUE2aUIsUUFBQSxFQUFBQyxlQUFBO0lBQUEsSUFBQUMsT0FBQSxHQUFBN2lCLFlBQUEsQ0FBQTJpQixRQUFBO0lBQ1osU0FBQUEsU0FBWW5pQixPQUFPLEVBQUVvUixNQUFNLEVBQUU7TUFBQSxJQUFBa1IsT0FBQTtNQUFBN2lCLGVBQUEsT0FBQTBpQixRQUFBO01BQzNCRyxPQUFBLEdBQUFELE9BQUEsQ0FBQWpnQixJQUFBLE9BQU1wQyxPQUFPLEVBQUVvUixNQUFNO01BQ3JCa1IsT0FBQSxDQUFLQyxnQkFBZ0IsR0FBRyxLQUFLO01BQzdCRCxPQUFBLENBQUtFLGFBQWEsR0FBRyxFQUFFO01BQ3ZCLElBQU1DLFVBQVUsR0FBR3pPLGNBQWMsQ0FBQy9JLElBQUksQ0FBQzhXLHNCQUFzQixDQUFDO01BQUMsSUFBQVcsVUFBQSxHQUFBdlksMEJBQUEsQ0FDNUNzWSxVQUFVO1FBQUFFLE1BQUE7TUFBQTtRQUE3QixLQUFBRCxVQUFBLENBQUFyWSxDQUFBLE1BQUFzWSxNQUFBLEdBQUFELFVBQUEsQ0FBQXBZLENBQUEsSUFBQUMsSUFBQSxHQUErQjtVQUFBLElBQXBCcVksSUFBSSxHQUFBRCxNQUFBLENBQUE3aUIsS0FBQTtVQUNiLElBQU13QixRQUFRLEdBQUcwUyxjQUFjLENBQUNvQixzQkFBc0IsQ0FBQ3dOLElBQUksQ0FBQztVQUM1RCxJQUFNQyxhQUFhLEdBQUc3TyxjQUFjLENBQUMvSSxJQUFJLENBQUMzSixRQUFRLENBQUMsQ0FBQ3NQLE1BQU0sQ0FBQyxVQUFBa1MsWUFBWTtZQUFBLE9BQUlBLFlBQVksS0FBS1IsT0FBQSxDQUFLeFAsUUFBUTtVQUFBLEVBQUM7VUFDMUcsSUFBSXhSLFFBQVEsS0FBSyxJQUFJLElBQUl1aEIsYUFBYSxDQUFDL2UsTUFBTSxFQUFFO1lBQzdDd2UsT0FBQSxDQUFLRSxhQUFhLENBQUNyYyxJQUFJLENBQUN5YyxJQUFJLENBQUM7VUFDL0I7UUFDRjtNQUFDLFNBQUFuWSxHQUFBO1FBQUFpWSxVQUFBLENBQUFoWSxDQUFBLENBQUFELEdBQUE7TUFBQTtRQUFBaVksVUFBQSxDQUFBL1gsQ0FBQTtNQUFBO01BQ0QyWCxPQUFBLENBQUtTLG1CQUFtQixFQUFFO01BQzFCLElBQUksQ0FBQ1QsT0FBQSxDQUFLdlAsT0FBTyxDQUFDa1AsTUFBTSxFQUFFO1FBQ3hCSyxPQUFBLENBQUtVLHlCQUF5QixDQUFDVixPQUFBLENBQUtFLGFBQWEsRUFBRUYsT0FBQSxDQUFLVyxRQUFRLEVBQUUsQ0FBQztNQUNyRTtNQUNBLElBQUlYLE9BQUEsQ0FBS3ZQLE9BQU8sQ0FBQ3VFLE1BQU0sRUFBRTtRQUN2QmdMLE9BQUEsQ0FBS2hMLE1BQU0sRUFBRTtNQUNmO01BQUMsT0FBQWdMLE9BQUE7SUFDSDs7SUFFQTtJQUFBMWlCLFlBQUEsQ0FBQXVpQixRQUFBO01BQUF0aUIsR0FBQTtNQUFBQyxLQUFBO01BV0E7TUFDQSxTQUFBd1gsT0FBQSxFQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMyTCxRQUFRLEVBQUUsRUFBRTtVQUNuQixJQUFJLENBQUNDLElBQUksRUFBRTtRQUNiLENBQUMsTUFBTTtVQUNMLElBQUksQ0FBQ0MsSUFBSSxFQUFFO1FBQ2I7TUFDRjtJQUFDO01BQUF0akIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXFqQixLQUFBLEVBQU87UUFBQSxJQUFBQyxPQUFBO1FBQ0wsSUFBSSxJQUFJLENBQUNiLGdCQUFnQixJQUFJLElBQUksQ0FBQ1UsUUFBUSxFQUFFLEVBQUU7VUFDNUM7UUFDRjtRQUNBLElBQUlJLGNBQWMsR0FBRyxFQUFFOztRQUV2QjtRQUNBLElBQUksSUFBSSxDQUFDdFEsT0FBTyxDQUFDa1AsTUFBTSxFQUFFO1VBQ3ZCb0IsY0FBYyxHQUFHLElBQUksQ0FBQ0Msc0JBQXNCLENBQUN4QixnQkFBZ0IsQ0FBQyxDQUFDbFIsTUFBTSxDQUFDLFVBQUE1USxPQUFPO1lBQUEsT0FBSUEsT0FBTyxLQUFLb2pCLE9BQUksQ0FBQ3RRLFFBQVE7VUFBQSxFQUFDLENBQUNtQyxHQUFHLENBQUMsVUFBQWpWLE9BQU87WUFBQSxPQUFJbWlCLFFBQVEsQ0FBQ3hPLG1CQUFtQixDQUFDM1QsT0FBTyxFQUFFO2NBQy9Kc1gsTUFBTSxFQUFFO1lBQ1YsQ0FBQyxDQUFDO1VBQUEsRUFBQztRQUNMO1FBQ0EsSUFBSStMLGNBQWMsQ0FBQ3ZmLE1BQU0sSUFBSXVmLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2QsZ0JBQWdCLEVBQUU7VUFDL0Q7UUFDRjtRQUNBLElBQU1nQixVQUFVLEdBQUczWixZQUFZLENBQUNnRSxPQUFPLENBQUMsSUFBSSxDQUFDa0YsUUFBUSxFQUFFbU8sWUFBWSxDQUFDO1FBQ3BFLElBQUlzQyxVQUFVLENBQUN2VixnQkFBZ0IsRUFBRTtVQUMvQjtRQUNGO1FBQUMsSUFBQXdWLFVBQUEsR0FBQXJaLDBCQUFBLENBQzRCa1osY0FBYztVQUFBSSxNQUFBO1FBQUE7VUFBM0MsS0FBQUQsVUFBQSxDQUFBblosQ0FBQSxNQUFBb1osTUFBQSxHQUFBRCxVQUFBLENBQUFsWixDQUFBLElBQUFDLElBQUEsR0FBNkM7WUFBQSxJQUFsQ21aLGNBQWMsR0FBQUQsTUFBQSxDQUFBM2pCLEtBQUE7WUFDdkI0akIsY0FBYyxDQUFDUixJQUFJLEVBQUU7VUFDdkI7UUFBQyxTQUFBelksR0FBQTtVQUFBK1ksVUFBQSxDQUFBOVksQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQStZLFVBQUEsQ0FBQTdZLENBQUE7UUFBQTtRQUNELElBQU1nWixTQUFTLEdBQUcsSUFBSSxDQUFDQyxhQUFhLEVBQUU7UUFDdEMsSUFBSSxDQUFDOVEsUUFBUSxDQUFDbk8sU0FBUyxDQUFDaUwsTUFBTSxDQUFDMlIsbUJBQW1CLENBQUM7UUFDbkQsSUFBSSxDQUFDek8sUUFBUSxDQUFDbk8sU0FBUyxDQUFDaVYsR0FBRyxDQUFDNEgscUJBQXFCLENBQUM7UUFDbEQsSUFBSSxDQUFDMU8sUUFBUSxDQUFDK1EsS0FBSyxDQUFDRixTQUFTLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQ1gseUJBQXlCLENBQUMsSUFBSSxDQUFDUixhQUFhLEVBQUUsSUFBSSxDQUFDO1FBQ3hELElBQUksQ0FBQ0QsZ0JBQWdCLEdBQUcsSUFBSTtRQUM1QixJQUFNdUIsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztVQUNyQlYsT0FBSSxDQUFDYixnQkFBZ0IsR0FBRyxLQUFLO1VBQzdCYSxPQUFJLENBQUN0USxRQUFRLENBQUNuTyxTQUFTLENBQUNpTCxNQUFNLENBQUM0UixxQkFBcUIsQ0FBQztVQUNyRDRCLE9BQUksQ0FBQ3RRLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ2lWLEdBQUcsQ0FBQzJILG1CQUFtQixFQUFFRCxpQkFBaUIsQ0FBQztVQUNuRThCLE9BQUksQ0FBQ3RRLFFBQVEsQ0FBQytRLEtBQUssQ0FBQ0YsU0FBUyxDQUFDLEdBQUcsRUFBRTtVQUNuQy9aLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQ3dWLE9BQUksQ0FBQ3RRLFFBQVEsRUFBRW9PLGFBQWEsQ0FBQztRQUNwRCxDQUFDO1FBQ0QsSUFBTTZDLG9CQUFvQixHQUFHSixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNwUixXQUFXLEVBQUUsR0FBR29SLFNBQVMsQ0FBQ3BXLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBTXlXLFVBQVUsWUFBQW5pQixNQUFBLENBQVlraUIsb0JBQW9CLENBQUU7UUFDbEQsSUFBSSxDQUFDdlEsY0FBYyxDQUFDc1EsUUFBUSxFQUFFLElBQUksQ0FBQ2hSLFFBQVEsRUFBRSxJQUFJLENBQUM7UUFDbEQsSUFBSSxDQUFDQSxRQUFRLENBQUMrUSxLQUFLLENBQUNGLFNBQVMsQ0FBQyxNQUFBOWhCLE1BQUEsQ0FBTSxJQUFJLENBQUNpUixRQUFRLENBQUNrUixVQUFVLENBQUMsT0FBSTtNQUNuRTtJQUFDO01BQUFua0IsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW9qQixLQUFBLEVBQU87UUFBQSxJQUFBZSxPQUFBO1FBQ0wsSUFBSSxJQUFJLENBQUMxQixnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQ1UsUUFBUSxFQUFFLEVBQUU7VUFDN0M7UUFDRjtRQUNBLElBQU1NLFVBQVUsR0FBRzNaLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQyxJQUFJLENBQUNrRixRQUFRLEVBQUVxTyxZQUFZLENBQUM7UUFDcEUsSUFBSW9DLFVBQVUsQ0FBQ3ZWLGdCQUFnQixFQUFFO1VBQy9CO1FBQ0Y7UUFDQSxJQUFNMlYsU0FBUyxHQUFHLElBQUksQ0FBQ0MsYUFBYSxFQUFFO1FBQ3RDLElBQUksQ0FBQzlRLFFBQVEsQ0FBQytRLEtBQUssQ0FBQ0YsU0FBUyxDQUFDLE1BQUE5aEIsTUFBQSxDQUFNLElBQUksQ0FBQ2lSLFFBQVEsQ0FBQ29SLHFCQUFxQixFQUFFLENBQUNQLFNBQVMsQ0FBQyxPQUFJO1FBQ3hGcGUsTUFBTSxDQUFDLElBQUksQ0FBQ3VOLFFBQVEsQ0FBQztRQUNyQixJQUFJLENBQUNBLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ2lWLEdBQUcsQ0FBQzRILHFCQUFxQixDQUFDO1FBQ2xELElBQUksQ0FBQzFPLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ2lMLE1BQU0sQ0FBQzJSLG1CQUFtQixFQUFFRCxpQkFBaUIsQ0FBQztRQUFDLElBQUE2QyxVQUFBLEdBQUFoYSwwQkFBQSxDQUNqRCxJQUFJLENBQUNxWSxhQUFhO1VBQUE0QixNQUFBO1FBQUE7VUFBeEMsS0FBQUQsVUFBQSxDQUFBOVosQ0FBQSxNQUFBK1osTUFBQSxHQUFBRCxVQUFBLENBQUE3WixDQUFBLElBQUFDLElBQUEsR0FBMEM7WUFBQSxJQUEvQnFELE9BQU8sR0FBQXdXLE1BQUEsQ0FBQXRrQixLQUFBO1lBQ2hCLElBQU1FLE9BQU8sR0FBR2dVLGNBQWMsQ0FBQ3FCLHNCQUFzQixDQUFDekgsT0FBTyxDQUFDO1lBQzlELElBQUk1TixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUNpakIsUUFBUSxDQUFDampCLE9BQU8sQ0FBQyxFQUFFO2NBQ3RDLElBQUksQ0FBQ2dqQix5QkFBeUIsQ0FBQyxDQUFDcFYsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2xEO1VBQ0Y7UUFBQyxTQUFBbkQsR0FBQTtVQUFBMFosVUFBQSxDQUFBelosQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQTBaLFVBQUEsQ0FBQXhaLENBQUE7UUFBQTtRQUNELElBQUksQ0FBQzRYLGdCQUFnQixHQUFHLElBQUk7UUFDNUIsSUFBTXVCLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7VUFDckJHLE9BQUksQ0FBQzFCLGdCQUFnQixHQUFHLEtBQUs7VUFDN0IwQixPQUFJLENBQUNuUixRQUFRLENBQUNuTyxTQUFTLENBQUNpTCxNQUFNLENBQUM0UixxQkFBcUIsQ0FBQztVQUNyRHlDLE9BQUksQ0FBQ25SLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ2lWLEdBQUcsQ0FBQzJILG1CQUFtQixDQUFDO1VBQ2hEM1gsWUFBWSxDQUFDZ0UsT0FBTyxDQUFDcVcsT0FBSSxDQUFDblIsUUFBUSxFQUFFc08sY0FBYyxDQUFDO1FBQ3JELENBQUM7UUFDRCxJQUFJLENBQUN0TyxRQUFRLENBQUMrUSxLQUFLLENBQUNGLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDbkMsSUFBSSxDQUFDblEsY0FBYyxDQUFDc1EsUUFBUSxFQUFFLElBQUksQ0FBQ2hSLFFBQVEsRUFBRSxJQUFJLENBQUM7TUFDcEQ7SUFBQztNQUFBalQsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW1qQixTQUFBLEVBQWtDO1FBQUEsSUFBekJqakIsT0FBTyxHQUFBTCxTQUFBLENBQUFtRSxNQUFBLFFBQUFuRSxTQUFBLFFBQUFxQyxTQUFBLEdBQUFyQyxTQUFBLE1BQUcsSUFBSSxDQUFDbVQsUUFBUTtRQUM5QixPQUFPOVMsT0FBTyxDQUFDMkUsU0FBUyxDQUFDQyxRQUFRLENBQUMwYyxpQkFBaUIsQ0FBQztNQUN0RDs7TUFFQTtJQUFBO01BQUF6aEIsR0FBQTtNQUFBQyxLQUFBLEVBQ0EsU0FBQXdSLGtCQUFrQkYsTUFBTSxFQUFFO1FBQ3hCQSxNQUFNLENBQUNrRyxNQUFNLEdBQUdwTCxPQUFPLENBQUNrRixNQUFNLENBQUNrRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hDbEcsTUFBTSxDQUFDNlEsTUFBTSxHQUFHcGUsVUFBVSxDQUFDdU4sTUFBTSxDQUFDNlEsTUFBTSxDQUFDO1FBQ3pDLE9BQU83USxNQUFNO01BQ2Y7SUFBQztNQUFBdlIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQThqQixjQUFBLEVBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUM5USxRQUFRLENBQUNuTyxTQUFTLENBQUNDLFFBQVEsQ0FBQytjLHFCQUFxQixDQUFDLEdBQUdDLEtBQUssR0FBR0MsTUFBTTtNQUNqRjtJQUFDO01BQUFoaUIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWlqQixvQkFBQSxFQUFzQjtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDaFEsT0FBTyxDQUFDa1AsTUFBTSxFQUFFO1VBQ3hCO1FBQ0Y7UUFDQSxJQUFNN04sUUFBUSxHQUFHLElBQUksQ0FBQ2tQLHNCQUFzQixDQUFDdkIsc0JBQXNCLENBQUM7UUFBQyxJQUFBc0MsVUFBQSxHQUFBbGEsMEJBQUEsQ0FDL0NpSyxRQUFRO1VBQUFrUSxNQUFBO1FBQUE7VUFBOUIsS0FBQUQsVUFBQSxDQUFBaGEsQ0FBQSxNQUFBaWEsTUFBQSxHQUFBRCxVQUFBLENBQUEvWixDQUFBLElBQUFDLElBQUEsR0FBZ0M7WUFBQSxJQUFyQnZLLE9BQU8sR0FBQXNrQixNQUFBLENBQUF4a0IsS0FBQTtZQUNoQixJQUFNeWtCLFFBQVEsR0FBR3ZRLGNBQWMsQ0FBQ3FCLHNCQUFzQixDQUFDclYsT0FBTyxDQUFDO1lBQy9ELElBQUl1a0IsUUFBUSxFQUFFO2NBQ1osSUFBSSxDQUFDdkIseUJBQXlCLENBQUMsQ0FBQ2hqQixPQUFPLENBQUMsRUFBRSxJQUFJLENBQUNpakIsUUFBUSxDQUFDc0IsUUFBUSxDQUFDLENBQUM7WUFDcEU7VUFDRjtRQUFDLFNBQUE5WixHQUFBO1VBQUE0WixVQUFBLENBQUEzWixDQUFBLENBQUFELEdBQUE7UUFBQTtVQUFBNFosVUFBQSxDQUFBMVosQ0FBQTtRQUFBO01BQ0g7SUFBQztNQUFBOUssR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXdqQix1QkFBdUJoaUIsUUFBUSxFQUFFO1FBQy9CLElBQU04UyxRQUFRLEdBQUdKLGNBQWMsQ0FBQy9JLElBQUksQ0FBQ3lXLDBCQUEwQixFQUFFLElBQUksQ0FBQzNPLE9BQU8sQ0FBQ2tQLE1BQU0sQ0FBQztRQUNyRjtRQUNBLE9BQU9qTyxjQUFjLENBQUMvSSxJQUFJLENBQUMzSixRQUFRLEVBQUUsSUFBSSxDQUFDeVIsT0FBTyxDQUFDa1AsTUFBTSxDQUFDLENBQUNyUixNQUFNLENBQUMsVUFBQTVRLE9BQU87VUFBQSxPQUFJLENBQUNvVSxRQUFRLENBQUN6SCxRQUFRLENBQUMzTSxPQUFPLENBQUM7UUFBQSxFQUFDO01BQzFHO0lBQUM7TUFBQUgsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWtqQiwwQkFBMEJ3QixZQUFZLEVBQUVDLE1BQU0sRUFBRTtRQUM5QyxJQUFJLENBQUNELFlBQVksQ0FBQzFnQixNQUFNLEVBQUU7VUFDeEI7UUFDRjtRQUFDLElBQUE0Z0IsV0FBQSxHQUFBdmEsMEJBQUEsQ0FDcUJxYSxZQUFZO1VBQUFHLE9BQUE7UUFBQTtVQUFsQyxLQUFBRCxXQUFBLENBQUFyYSxDQUFBLE1BQUFzYSxPQUFBLEdBQUFELFdBQUEsQ0FBQXBhLENBQUEsSUFBQUMsSUFBQSxHQUFvQztZQUFBLElBQXpCdkssT0FBTyxHQUFBMmtCLE9BQUEsQ0FBQTdrQixLQUFBO1lBQ2hCRSxPQUFPLENBQUMyRSxTQUFTLENBQUMyUyxNQUFNLENBQUNtSyxvQkFBb0IsRUFBRSxDQUFDZ0QsTUFBTSxDQUFDO1lBQ3ZEemtCLE9BQU8sQ0FBQ3FRLFlBQVksQ0FBQyxlQUFlLEVBQUVvVSxNQUFNLENBQUM7VUFDL0M7UUFBQyxTQUFBaGEsR0FBQTtVQUFBaWEsV0FBQSxDQUFBaGEsQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQWlhLFdBQUEsQ0FBQS9aLENBQUE7UUFBQTtNQUNIOztNQUVBO0lBQUE7TUFBQTlLLEdBQUE7TUFBQW1QLEdBQUEsRUEvSEEsU0FBQUEsSUFBQSxFQUFxQjtRQUNuQixPQUFPZ1QsU0FBUztNQUNsQjtJQUFDO01BQUFuaUIsR0FBQTtNQUFBbVAsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBeUI7UUFDdkIsT0FBT2tULGFBQWE7TUFDdEI7SUFBQztNQUFBcmlCLEdBQUE7TUFBQW1QLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQWtCO1FBQ2hCLE9BQU82UixNQUFNO01BQ2Y7SUFBQztNQUFBaGhCLEdBQUE7TUFBQUMsS0FBQSxFQXdIRCxTQUFBK0csZ0JBQXVCdUssTUFBTSxFQUFFO1FBQzdCLElBQU0yQixPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksT0FBTzNCLE1BQU0sS0FBSyxRQUFRLElBQUksV0FBVyxDQUFDaUIsSUFBSSxDQUFDakIsTUFBTSxDQUFDLEVBQUU7VUFDMUQyQixPQUFPLENBQUN1RSxNQUFNLEdBQUcsS0FBSztRQUN4QjtRQUNBLE9BQU8sSUFBSSxDQUFDWixJQUFJLENBQUMsWUFBWTtVQUMzQixJQUFNQyxJQUFJLEdBQUd3TCxRQUFRLENBQUN4TyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUVaLE9BQU8sQ0FBQztVQUN4RCxJQUFJLE9BQU8zQixNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCLElBQUksT0FBT3VGLElBQUksQ0FBQ3ZGLE1BQU0sQ0FBQyxLQUFLLFdBQVcsRUFBRTtjQUN2QyxNQUFNLElBQUlrQixTQUFTLHNCQUFBelEsTUFBQSxDQUFxQnVQLE1BQU0sUUFBSTtZQUNwRDtZQUNBdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLEVBQUU7VUFDaEI7UUFDRixDQUFDLENBQUM7TUFDSjtJQUFDO0lBQUEsT0FBQStRLFFBQUE7RUFBQSxFQXJLb0J6UCxhQUFhO0VBd0twQztBQUNGO0FBQ0E7RUFFRTlJLFlBQVksQ0FBQ2dELEVBQUUsQ0FBQ2pLLFFBQVEsRUFBRTBlLHNCQUFzQixFQUFFVSxzQkFBc0IsRUFBRSxVQUFVdlksS0FBSyxFQUFFO0lBQ3pGO0lBQ0EsSUFBSUEsS0FBSyxDQUFDM0IsTUFBTSxDQUFDOE4sT0FBTyxLQUFLLEdBQUcsSUFBSW5NLEtBQUssQ0FBQ0UsY0FBYyxJQUFJRixLQUFLLENBQUNFLGNBQWMsQ0FBQ2lNLE9BQU8sS0FBSyxHQUFHLEVBQUU7TUFDaEduTSxLQUFLLENBQUM4RSxjQUFjLEVBQUU7SUFDeEI7SUFBQyxJQUFBc1csV0FBQSxHQUFBemEsMEJBQUEsQ0FDcUI2SixjQUFjLENBQUNzQiwrQkFBK0IsQ0FBQyxJQUFJLENBQUM7TUFBQXVQLE9BQUE7SUFBQTtNQUExRSxLQUFBRCxXQUFBLENBQUF2YSxDQUFBLE1BQUF3YSxPQUFBLEdBQUFELFdBQUEsQ0FBQXRhLENBQUEsSUFBQUMsSUFBQSxHQUE0RTtRQUFBLElBQWpFdkssT0FBTyxHQUFBNmtCLE9BQUEsQ0FBQS9rQixLQUFBO1FBQ2hCcWlCLFFBQVEsQ0FBQ3hPLG1CQUFtQixDQUFDM1QsT0FBTyxFQUFFO1VBQ3BDc1gsTUFBTSxFQUFFO1FBQ1YsQ0FBQyxDQUFDLENBQUNBLE1BQU0sRUFBRTtNQUNiO0lBQUMsU0FBQTdNLEdBQUE7TUFBQW1hLFdBQUEsQ0FBQWxhLENBQUEsQ0FBQUQsR0FBQTtJQUFBO01BQUFtYSxXQUFBLENBQUFqYSxDQUFBO0lBQUE7RUFDSCxDQUFDLENBQUM7O0VBRUY7QUFDRjtBQUNBOztFQUVFckUsa0JBQWtCLENBQUM2YixRQUFRLENBQUM7RUFFNUIsSUFBSTJDLEdBQUcsR0FBRyxLQUFLO0VBQ2YsSUFBSUMsTUFBTSxHQUFHLFFBQVE7RUFDckIsSUFBSUMsS0FBSyxHQUFHLE9BQU87RUFDbkIsSUFBSUMsSUFBSSxHQUFHLE1BQU07RUFDakIsSUFBSUMsSUFBSSxHQUFHLE1BQU07RUFDakIsSUFBSUMsY0FBYyxHQUFHLENBQUNMLEdBQUcsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLElBQUksQ0FBQztFQUMvQyxJQUFJRyxLQUFLLEdBQUcsT0FBTztFQUNuQixJQUFJQyxHQUFHLEdBQUcsS0FBSztFQUNmLElBQUlDLGVBQWUsR0FBRyxpQkFBaUI7RUFDdkMsSUFBSUMsUUFBUSxHQUFHLFVBQVU7RUFDekIsSUFBSUMsTUFBTSxHQUFHLFFBQVE7RUFDckIsSUFBSUMsU0FBUyxHQUFHLFdBQVc7RUFDM0IsSUFBSUMsbUJBQW1CLEdBQUcsYUFBYVAsY0FBYyxDQUFDUSxNQUFNLENBQUMsVUFBVUMsR0FBRyxFQUFFQyxTQUFTLEVBQUU7SUFDckYsT0FBT0QsR0FBRyxDQUFDL2pCLE1BQU0sQ0FBQyxDQUFDZ2tCLFNBQVMsR0FBRyxHQUFHLEdBQUdULEtBQUssRUFBRVMsU0FBUyxHQUFHLEdBQUcsR0FBR1IsR0FBRyxDQUFDLENBQUM7RUFDckUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLElBQUlTLFVBQVUsR0FBRyxhQUFhLEVBQUUsQ0FBQ2prQixNQUFNLENBQUNzakIsY0FBYyxFQUFFLENBQUNELElBQUksQ0FBQyxDQUFDLENBQUNTLE1BQU0sQ0FBQyxVQUFVQyxHQUFHLEVBQUVDLFNBQVMsRUFBRTtJQUMvRixPQUFPRCxHQUFHLENBQUMvakIsTUFBTSxDQUFDLENBQUNna0IsU0FBUyxFQUFFQSxTQUFTLEdBQUcsR0FBRyxHQUFHVCxLQUFLLEVBQUVTLFNBQVMsR0FBRyxHQUFHLEdBQUdSLEdBQUcsQ0FBQyxDQUFDO0VBQ2hGLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDOztFQUVSLElBQUlVLFVBQVUsR0FBRyxZQUFZO0VBQzdCLElBQUlDLElBQUksR0FBRyxNQUFNO0VBQ2pCLElBQUlDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQzs7RUFFN0IsSUFBSUMsVUFBVSxHQUFHLFlBQVk7RUFDN0IsSUFBSUMsSUFBSSxHQUFHLE1BQU07RUFDakIsSUFBSUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDOztFQUU3QixJQUFJQyxXQUFXLEdBQUcsYUFBYTtFQUMvQixJQUFJQyxLQUFLLEdBQUcsT0FBTztFQUNuQixJQUFJQyxVQUFVLEdBQUcsWUFBWTtFQUM3QixJQUFJQyxjQUFjLEdBQUcsQ0FBQ1QsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsQ0FBQztFQUUvRyxTQUFTRSxXQUFXQSxDQUFDem1CLE9BQU8sRUFBRTtJQUM1QixPQUFPQSxPQUFPLEdBQUcsQ0FBQ0EsT0FBTyxDQUFDMG1CLFFBQVEsSUFBSSxFQUFFLEVBQUVya0IsV0FBVyxFQUFFLEdBQUcsSUFBSTtFQUNoRTtFQUVBLFNBQVNza0IsU0FBU0EsQ0FBQ0MsSUFBSSxFQUFFO0lBQ3ZCLElBQUlBLElBQUksSUFBSSxJQUFJLEVBQUU7TUFDaEIsT0FBT3JsQixNQUFNO0lBQ2Y7SUFFQSxJQUFJcWxCLElBQUksQ0FBQ3prQixRQUFRLEVBQUUsS0FBSyxpQkFBaUIsRUFBRTtNQUN6QyxJQUFJMGtCLGFBQWEsR0FBR0QsSUFBSSxDQUFDQyxhQUFhO01BQ3RDLE9BQU9BLGFBQWEsR0FBR0EsYUFBYSxDQUFDQyxXQUFXLElBQUl2bEIsTUFBTSxHQUFHQSxNQUFNO0lBQ3JFO0lBRUEsT0FBT3FsQixJQUFJO0VBQ2I7RUFFQSxTQUFTRyxTQUFTQSxDQUFDSCxJQUFJLEVBQUU7SUFDdkIsSUFBSUksVUFBVSxHQUFHTCxTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFDMVMsT0FBTztJQUN4QyxPQUFPMFMsSUFBSSxZQUFZSSxVQUFVLElBQUlKLElBQUksWUFBWTFTLE9BQU87RUFDOUQ7RUFFQSxTQUFTK1MsYUFBYUEsQ0FBQ0wsSUFBSSxFQUFFO0lBQzNCLElBQUlJLFVBQVUsR0FBR0wsU0FBUyxDQUFDQyxJQUFJLENBQUMsQ0FBQ00sV0FBVztJQUM1QyxPQUFPTixJQUFJLFlBQVlJLFVBQVUsSUFBSUosSUFBSSxZQUFZTSxXQUFXO0VBQ2xFO0VBRUEsU0FBU0MsWUFBWUEsQ0FBQ1AsSUFBSSxFQUFFO0lBQzFCO0lBQ0EsSUFBSSxPQUFPdmhCLFVBQVUsS0FBSyxXQUFXLEVBQUU7TUFDckMsT0FBTyxLQUFLO0lBQ2Q7SUFFQSxJQUFJMmhCLFVBQVUsR0FBR0wsU0FBUyxDQUFDQyxJQUFJLENBQUMsQ0FBQ3ZoQixVQUFVO0lBQzNDLE9BQU91aEIsSUFBSSxZQUFZSSxVQUFVLElBQUlKLElBQUksWUFBWXZoQixVQUFVO0VBQ2pFOztFQUVBOztFQUVBLFNBQVMraEIsV0FBV0EsQ0FBQ0MsSUFBSSxFQUFFO0lBQ3pCLElBQUlDLEtBQUssR0FBR0QsSUFBSSxDQUFDQyxLQUFLO0lBQ3RCcmxCLE1BQU0sQ0FBQ2tMLElBQUksQ0FBQ21hLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFVL2dCLElBQUksRUFBRTtNQUNsRCxJQUFJb2QsS0FBSyxHQUFHeUQsS0FBSyxDQUFDRyxNQUFNLENBQUNoaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQ3BDLElBQUlnSyxVQUFVLEdBQUc2VyxLQUFLLENBQUM3VyxVQUFVLENBQUNoSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDN0MsSUFBSXpHLE9BQU8sR0FBR3NuQixLQUFLLENBQUNDLFFBQVEsQ0FBQzlnQixJQUFJLENBQUMsQ0FBQyxDQUFDOztNQUVwQyxJQUFJLENBQUN3Z0IsYUFBYSxDQUFDam5CLE9BQU8sQ0FBQyxJQUFJLENBQUN5bUIsV0FBVyxDQUFDem1CLE9BQU8sQ0FBQyxFQUFFO1FBQ3BEO01BQ0YsQ0FBQyxDQUFDO01BQ0Y7TUFDQTs7TUFHQWlDLE1BQU0sQ0FBQ3lsQixNQUFNLENBQUMxbkIsT0FBTyxDQUFDNmpCLEtBQUssRUFBRUEsS0FBSyxDQUFDO01BQ25DNWhCLE1BQU0sQ0FBQ2tMLElBQUksQ0FBQ3NELFVBQVUsQ0FBQyxDQUFDK1csT0FBTyxDQUFDLFVBQVUvZ0IsSUFBSSxFQUFFO1FBQzlDLElBQUkzRyxLQUFLLEdBQUcyUSxVQUFVLENBQUNoSyxJQUFJLENBQUM7UUFFNUIsSUFBSTNHLEtBQUssS0FBSyxLQUFLLEVBQUU7VUFDbkJFLE9BQU8sQ0FBQ3VRLGVBQWUsQ0FBQzlKLElBQUksQ0FBQztRQUMvQixDQUFDLE1BQU07VUFDTHpHLE9BQU8sQ0FBQ3FRLFlBQVksQ0FBQzVKLElBQUksRUFBRTNHLEtBQUssS0FBSyxJQUFJLEdBQUcsRUFBRSxHQUFHQSxLQUFLLENBQUM7UUFDekQ7TUFDRixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSjtFQUVBLFNBQVM2bkIsUUFBUUEsQ0FBQ0MsS0FBSyxFQUFFO0lBQ3ZCLElBQUlOLEtBQUssR0FBR00sS0FBSyxDQUFDTixLQUFLO0lBQ3ZCLElBQUlPLGFBQWEsR0FBRztNQUNsQnJDLE1BQU0sRUFBRTtRQUNOc0MsUUFBUSxFQUFFUixLQUFLLENBQUNTLE9BQU8sQ0FBQ0MsUUFBUTtRQUNoQy9DLElBQUksRUFBRSxHQUFHO1FBQ1RILEdBQUcsRUFBRSxHQUFHO1FBQ1JtRCxNQUFNLEVBQUU7TUFDVixDQUFDO01BQ0RDLEtBQUssRUFBRTtRQUNMSixRQUFRLEVBQUU7TUFDWixDQUFDO01BQ0RyQyxTQUFTLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDRHhqQixNQUFNLENBQUN5bEIsTUFBTSxDQUFDSixLQUFLLENBQUNDLFFBQVEsQ0FBQy9CLE1BQU0sQ0FBQzNCLEtBQUssRUFBRWdFLGFBQWEsQ0FBQ3JDLE1BQU0sQ0FBQztJQUNoRThCLEtBQUssQ0FBQ0csTUFBTSxHQUFHSSxhQUFhO0lBRTVCLElBQUlQLEtBQUssQ0FBQ0MsUUFBUSxDQUFDVyxLQUFLLEVBQUU7TUFDeEJqbUIsTUFBTSxDQUFDeWxCLE1BQU0sQ0FBQ0osS0FBSyxDQUFDQyxRQUFRLENBQUNXLEtBQUssQ0FBQ3JFLEtBQUssRUFBRWdFLGFBQWEsQ0FBQ0ssS0FBSyxDQUFDO0lBQ2hFO0lBRUEsT0FBTyxZQUFZO01BQ2pCam1CLE1BQU0sQ0FBQ2tMLElBQUksQ0FBQ21hLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFVL2dCLElBQUksRUFBRTtRQUNsRCxJQUFJekcsT0FBTyxHQUFHc25CLEtBQUssQ0FBQ0MsUUFBUSxDQUFDOWdCLElBQUksQ0FBQztRQUNsQyxJQUFJZ0ssVUFBVSxHQUFHNlcsS0FBSyxDQUFDN1csVUFBVSxDQUFDaEssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUkwaEIsZUFBZSxHQUFHbG1CLE1BQU0sQ0FBQ2tMLElBQUksQ0FBQ21hLEtBQUssQ0FBQ0csTUFBTSxDQUFDVyxjQUFjLENBQUMzaEIsSUFBSSxDQUFDLEdBQUc2Z0IsS0FBSyxDQUFDRyxNQUFNLENBQUNoaEIsSUFBSSxDQUFDLEdBQUdvaEIsYUFBYSxDQUFDcGhCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFakgsSUFBSW9kLEtBQUssR0FBR3NFLGVBQWUsQ0FBQ3hDLE1BQU0sQ0FBQyxVQUFVOUIsS0FBSyxFQUFFNVIsUUFBUSxFQUFFO1VBQzVENFIsS0FBSyxDQUFDNVIsUUFBUSxDQUFDLEdBQUcsRUFBRTtVQUNwQixPQUFPNFIsS0FBSztRQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRVIsSUFBSSxDQUFDb0QsYUFBYSxDQUFDam5CLE9BQU8sQ0FBQyxJQUFJLENBQUN5bUIsV0FBVyxDQUFDem1CLE9BQU8sQ0FBQyxFQUFFO1VBQ3BEO1FBQ0Y7UUFFQWlDLE1BQU0sQ0FBQ3lsQixNQUFNLENBQUMxbkIsT0FBTyxDQUFDNmpCLEtBQUssRUFBRUEsS0FBSyxDQUFDO1FBQ25DNWhCLE1BQU0sQ0FBQ2tMLElBQUksQ0FBQ3NELFVBQVUsQ0FBQyxDQUFDK1csT0FBTyxDQUFDLFVBQVVhLFNBQVMsRUFBRTtVQUNuRHJvQixPQUFPLENBQUN1USxlQUFlLENBQUM4WCxTQUFTLENBQUM7UUFDcEMsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQztFQUNILENBQUMsQ0FBQzs7RUFHRixJQUFNQyxhQUFhLEdBQUc7SUFDcEI3aEIsSUFBSSxFQUFFLGFBQWE7SUFDbkI4aEIsT0FBTyxFQUFFLElBQUk7SUFDYkMsS0FBSyxFQUFFLE9BQU87SUFDZDVoQixFQUFFLEVBQUV3Z0IsV0FBVztJQUNmcUIsTUFBTSxFQUFFZCxRQUFRO0lBQ2hCZSxRQUFRLEVBQUUsQ0FBQyxlQUFlO0VBQzVCLENBQUM7RUFFRCxTQUFTQyxnQkFBZ0JBLENBQUM5QyxTQUFTLEVBQUU7SUFDbkMsT0FBT0EsU0FBUyxDQUFDdmlCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDaEM7RUFFQSxJQUFJa0YsR0FBRyxHQUFHaEcsSUFBSSxDQUFDZ0csR0FBRztFQUNsQixJQUFJQyxHQUFHLEdBQUdqRyxJQUFJLENBQUNpRyxHQUFHO0VBQ2xCLElBQUltZ0IsS0FBSyxHQUFHcG1CLElBQUksQ0FBQ29tQixLQUFLO0VBRXRCLFNBQVNDLFdBQVdBLENBQUEsRUFBRztJQUNyQixJQUFJQyxNQUFNLEdBQUdoUCxTQUFTLENBQUNpUCxhQUFhO0lBRXBDLElBQUlELE1BQU0sSUFBSSxJQUFJLElBQUlBLE1BQU0sQ0FBQ0UsTUFBTSxFQUFFO01BQ25DLE9BQU9GLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDL1QsR0FBRyxDQUFDLFVBQVVnVSxJQUFJLEVBQUU7UUFDdkMsT0FBT0EsSUFBSSxDQUFDQyxLQUFLLEdBQUcsR0FBRyxHQUFHRCxJQUFJLENBQUNFLE9BQU87TUFDeEMsQ0FBQyxDQUFDLENBQUNqVSxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2Q7SUFFQSxPQUFPNEUsU0FBUyxDQUFDc1AsU0FBUztFQUM1QjtFQUVBLFNBQVNDLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQzFCLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQ2hYLElBQUksQ0FBQ3dXLFdBQVcsRUFBRSxDQUFDO0VBQzlEO0VBRUEsU0FBUzNFLHFCQUFxQkEsQ0FBQ2xrQixPQUFPLEVBQUVzcEIsWUFBWSxFQUFFQyxlQUFlLEVBQUU7SUFDckUsSUFBSUQsWUFBWSxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQzNCQSxZQUFZLEdBQUcsS0FBSztJQUN0QjtJQUVBLElBQUlDLGVBQWUsS0FBSyxLQUFLLENBQUMsRUFBRTtNQUM5QkEsZUFBZSxHQUFHLEtBQUs7SUFDekI7SUFFQSxJQUFJQyxVQUFVLEdBQUd4cEIsT0FBTyxDQUFDa2tCLHFCQUFxQixFQUFFO0lBQ2hELElBQUl1RixNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUlDLE1BQU0sR0FBRyxDQUFDO0lBRWQsSUFBSUosWUFBWSxJQUFJckMsYUFBYSxDQUFDam5CLE9BQU8sQ0FBQyxFQUFFO01BQzFDeXBCLE1BQU0sR0FBR3pwQixPQUFPLENBQUMycEIsV0FBVyxHQUFHLENBQUMsR0FBR2YsS0FBSyxDQUFDWSxVQUFVLENBQUNJLEtBQUssQ0FBQyxHQUFHNXBCLE9BQU8sQ0FBQzJwQixXQUFXLElBQUksQ0FBQyxHQUFHLENBQUM7TUFDekZELE1BQU0sR0FBRzFwQixPQUFPLENBQUN3RixZQUFZLEdBQUcsQ0FBQyxHQUFHb2pCLEtBQUssQ0FBQ1ksVUFBVSxDQUFDSyxNQUFNLENBQUMsR0FBRzdwQixPQUFPLENBQUN3RixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDOUY7SUFFQSxJQUFJNmhCLElBQUksR0FBR04sU0FBUyxDQUFDL21CLE9BQU8sQ0FBQyxHQUFHMm1CLFNBQVMsQ0FBQzNtQixPQUFPLENBQUMsR0FBR3VCLE1BQU07TUFDdkR1b0IsY0FBYyxHQUFHekMsSUFBSSxDQUFDeUMsY0FBYztJQUV4QyxJQUFJQyxnQkFBZ0IsR0FBRyxDQUFDVixnQkFBZ0IsRUFBRSxJQUFJRSxlQUFlO0lBQzdELElBQUlTLENBQUMsR0FBRyxDQUFDUixVQUFVLENBQUN2RSxJQUFJLElBQUk4RSxnQkFBZ0IsSUFBSUQsY0FBYyxHQUFHQSxjQUFjLENBQUNHLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSVIsTUFBTTtJQUN6RyxJQUFJUyxDQUFDLEdBQUcsQ0FBQ1YsVUFBVSxDQUFDMUUsR0FBRyxJQUFJaUYsZ0JBQWdCLElBQUlELGNBQWMsR0FBR0EsY0FBYyxDQUFDSyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUlULE1BQU07SUFDdkcsSUFBSUUsS0FBSyxHQUFHSixVQUFVLENBQUNJLEtBQUssR0FBR0gsTUFBTTtJQUNyQyxJQUFJSSxNQUFNLEdBQUdMLFVBQVUsQ0FBQ0ssTUFBTSxHQUFHSCxNQUFNO0lBQ3ZDLE9BQU87TUFDTEUsS0FBSyxFQUFFQSxLQUFLO01BQ1pDLE1BQU0sRUFBRUEsTUFBTTtNQUNkL0UsR0FBRyxFQUFFb0YsQ0FBQztNQUNObEYsS0FBSyxFQUFFZ0YsQ0FBQyxHQUFHSixLQUFLO01BQ2hCN0UsTUFBTSxFQUFFbUYsQ0FBQyxHQUFHTCxNQUFNO01BQ2xCNUUsSUFBSSxFQUFFK0UsQ0FBQztNQUNQQSxDQUFDLEVBQUVBLENBQUM7TUFDSkUsQ0FBQyxFQUFFQTtJQUNMLENBQUM7RUFDSDs7RUFFQTs7RUFFQSxTQUFTRSxhQUFhQSxDQUFDcHFCLE9BQU8sRUFBRTtJQUM5QixJQUFJd3BCLFVBQVUsR0FBR3RGLHFCQUFxQixDQUFDbGtCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakQ7O0lBRUEsSUFBSTRwQixLQUFLLEdBQUc1cEIsT0FBTyxDQUFDMnBCLFdBQVc7SUFDL0IsSUFBSUUsTUFBTSxHQUFHN3BCLE9BQU8sQ0FBQ3dGLFlBQVk7SUFFakMsSUFBSWhELElBQUksQ0FBQ2lYLEdBQUcsQ0FBQytQLFVBQVUsQ0FBQ0ksS0FBSyxHQUFHQSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDM0NBLEtBQUssR0FBR0osVUFBVSxDQUFDSSxLQUFLO0lBQzFCO0lBRUEsSUFBSXBuQixJQUFJLENBQUNpWCxHQUFHLENBQUMrUCxVQUFVLENBQUNLLE1BQU0sR0FBR0EsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO01BQzdDQSxNQUFNLEdBQUdMLFVBQVUsQ0FBQ0ssTUFBTTtJQUM1QjtJQUVBLE9BQU87TUFDTEcsQ0FBQyxFQUFFaHFCLE9BQU8sQ0FBQ2lxQixVQUFVO01BQ3JCQyxDQUFDLEVBQUVscUIsT0FBTyxDQUFDbXFCLFNBQVM7TUFDcEJQLEtBQUssRUFBRUEsS0FBSztNQUNaQyxNQUFNLEVBQUVBO0lBQ1YsQ0FBQztFQUNIO0VBRUEsU0FBU2psQixRQUFRQSxDQUFDcWQsTUFBTSxFQUFFM04sS0FBSyxFQUFFO0lBQy9CLElBQUkrVixRQUFRLEdBQUcvVixLQUFLLENBQUNuUCxXQUFXLElBQUltUCxLQUFLLENBQUNuUCxXQUFXLEVBQUUsQ0FBQyxDQUFDOztJQUV6RCxJQUFJOGMsTUFBTSxDQUFDcmQsUUFBUSxDQUFDMFAsS0FBSyxDQUFDLEVBQUU7TUFDMUIsT0FBTyxJQUFJO0lBQ2IsQ0FBQyxDQUFDO0lBQUEsS0FDRyxJQUFJK1YsUUFBUSxJQUFJbEQsWUFBWSxDQUFDa0QsUUFBUSxDQUFDLEVBQUU7TUFDekMsSUFBSXhWLElBQUksR0FBR1AsS0FBSztNQUVoQixHQUFHO1FBQ0QsSUFBSU8sSUFBSSxJQUFJb04sTUFBTSxDQUFDcUksVUFBVSxDQUFDelYsSUFBSSxDQUFDLEVBQUU7VUFDbkMsT0FBTyxJQUFJO1FBQ2IsQ0FBQyxDQUFDOztRQUdGQSxJQUFJLEdBQUdBLElBQUksQ0FBQ3RRLFVBQVUsSUFBSXNRLElBQUksQ0FBQzBWLElBQUk7TUFDckMsQ0FBQyxRQUFRMVYsSUFBSTtJQUNmLENBQUMsQ0FBQzs7SUFHSixPQUFPLEtBQUs7RUFDZDtFQUVBLFNBQVMyVixrQkFBa0JBLENBQUN4cUIsT0FBTyxFQUFFO0lBQ25DLE9BQU8ybUIsU0FBUyxDQUFDM21CLE9BQU8sQ0FBQyxDQUFDK0MsZ0JBQWdCLENBQUMvQyxPQUFPLENBQUM7RUFDckQ7RUFFQSxTQUFTeXFCLGNBQWNBLENBQUN6cUIsT0FBTyxFQUFFO0lBQy9CLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDdUksT0FBTyxDQUFDa2UsV0FBVyxDQUFDem1CLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztFQUNqRTtFQUVBLFNBQVMwcUIsa0JBQWtCQSxDQUFDMXFCLE9BQU8sRUFBRTtJQUNuQztJQUNBLE9BQU8sQ0FBQyxDQUFDK21CLFNBQVMsQ0FBQy9tQixPQUFPLENBQUMsR0FBR0EsT0FBTyxDQUFDNm1CLGFBQWE7SUFBRztJQUN0RDdtQixPQUFPLENBQUMyQyxRQUFRLEtBQUtwQixNQUFNLENBQUNvQixRQUFRLEVBQUVzQyxlQUFlO0VBQ3ZEO0VBRUEsU0FBUzBsQixhQUFhQSxDQUFDM3FCLE9BQU8sRUFBRTtJQUM5QixJQUFJeW1CLFdBQVcsQ0FBQ3ptQixPQUFPLENBQUMsS0FBSyxNQUFNLEVBQUU7TUFDbkMsT0FBT0EsT0FBTztJQUNoQjtJQUVBO01BQVE7TUFDTjtNQUNBO01BQ0FBLE9BQU8sQ0FBQzRxQixZQUFZO01BQUk7TUFDeEI1cUIsT0FBTyxDQUFDdUUsVUFBVTtNQUFNO01BQ3hCNGlCLFlBQVksQ0FBQ25uQixPQUFPLENBQUMsR0FBR0EsT0FBTyxDQUFDdXFCLElBQUksR0FBRyxJQUFJLENBQUM7TUFBSTtNQUNoRDtNQUNBRyxrQkFBa0IsQ0FBQzFxQixPQUFPLENBQUMsQ0FBQztJQUFBO0VBR2hDOztFQUVBLFNBQVM2cUIsbUJBQW1CQSxDQUFDN3FCLE9BQU8sRUFBRTtJQUNwQyxJQUFJLENBQUNpbkIsYUFBYSxDQUFDam5CLE9BQU8sQ0FBQztJQUFJO0lBQy9Cd3FCLGtCQUFrQixDQUFDeHFCLE9BQU8sQ0FBQyxDQUFDOG5CLFFBQVEsS0FBSyxPQUFPLEVBQUU7TUFDaEQsT0FBTyxJQUFJO0lBQ2I7SUFFQSxPQUFPOW5CLE9BQU8sQ0FBQzhxQixZQUFZO0VBQzdCLENBQUMsQ0FBQztFQUNGOztFQUdBLFNBQVNDLGtCQUFrQkEsQ0FBQy9xQixPQUFPLEVBQUU7SUFDbkMsSUFBSWdyQixTQUFTLEdBQUcsVUFBVSxDQUFDM1ksSUFBSSxDQUFDd1csV0FBVyxFQUFFLENBQUM7SUFDOUMsSUFBSW9DLElBQUksR0FBRyxVQUFVLENBQUM1WSxJQUFJLENBQUN3VyxXQUFXLEVBQUUsQ0FBQztJQUV6QyxJQUFJb0MsSUFBSSxJQUFJaEUsYUFBYSxDQUFDam5CLE9BQU8sQ0FBQyxFQUFFO01BQ2xDO01BQ0EsSUFBSWtyQixVQUFVLEdBQUdWLGtCQUFrQixDQUFDeHFCLE9BQU8sQ0FBQztNQUU1QyxJQUFJa3JCLFVBQVUsQ0FBQ3BELFFBQVEsS0FBSyxPQUFPLEVBQUU7UUFDbkMsT0FBTyxJQUFJO01BQ2I7SUFDRjtJQUVBLElBQUlxRCxXQUFXLEdBQUdSLGFBQWEsQ0FBQzNxQixPQUFPLENBQUM7SUFFeEMsSUFBSW1uQixZQUFZLENBQUNnRSxXQUFXLENBQUMsRUFBRTtNQUM3QkEsV0FBVyxHQUFHQSxXQUFXLENBQUNaLElBQUk7SUFDaEM7SUFFQSxPQUFPdEQsYUFBYSxDQUFDa0UsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM1aUIsT0FBTyxDQUFDa2UsV0FBVyxDQUFDMEUsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDM0YsSUFBSUMsR0FBRyxHQUFHWixrQkFBa0IsQ0FBQ1csV0FBVyxDQUFDLENBQUMsQ0FBQztNQUMzQztNQUNBOztNQUVBLElBQUlDLEdBQUcsQ0FBQ0MsU0FBUyxLQUFLLE1BQU0sSUFBSUQsR0FBRyxDQUFDRSxXQUFXLEtBQUssTUFBTSxJQUFJRixHQUFHLENBQUNHLE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUNoakIsT0FBTyxDQUFDNmlCLEdBQUcsQ0FBQ0ksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUlSLFNBQVMsSUFBSUksR0FBRyxDQUFDSSxVQUFVLEtBQUssUUFBUSxJQUFJUixTQUFTLElBQUlJLEdBQUcsQ0FBQ3hhLE1BQU0sSUFBSXdhLEdBQUcsQ0FBQ3hhLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDcFAsT0FBT3VhLFdBQVc7TUFDcEIsQ0FBQyxNQUFNO1FBQ0xBLFdBQVcsR0FBR0EsV0FBVyxDQUFDNW1CLFVBQVU7TUFDdEM7SUFDRjtJQUVBLE9BQU8sSUFBSTtFQUNiLENBQUMsQ0FBQztFQUNGOztFQUdBLFNBQVNrbkIsZUFBZUEsQ0FBQ3pyQixPQUFPLEVBQUU7SUFDaEMsSUFBSXVCLE1BQU0sR0FBR29sQixTQUFTLENBQUMzbUIsT0FBTyxDQUFDO0lBQy9CLElBQUk4cUIsWUFBWSxHQUFHRCxtQkFBbUIsQ0FBQzdxQixPQUFPLENBQUM7SUFFL0MsT0FBTzhxQixZQUFZLElBQUlMLGNBQWMsQ0FBQ0ssWUFBWSxDQUFDLElBQUlOLGtCQUFrQixDQUFDTSxZQUFZLENBQUMsQ0FBQ2hELFFBQVEsS0FBSyxRQUFRLEVBQUU7TUFDN0dnRCxZQUFZLEdBQUdELG1CQUFtQixDQUFDQyxZQUFZLENBQUM7SUFDbEQ7SUFFQSxJQUFJQSxZQUFZLEtBQUtyRSxXQUFXLENBQUNxRSxZQUFZLENBQUMsS0FBSyxNQUFNLElBQUlyRSxXQUFXLENBQUNxRSxZQUFZLENBQUMsS0FBSyxNQUFNLElBQUlOLGtCQUFrQixDQUFDTSxZQUFZLENBQUMsQ0FBQ2hELFFBQVEsS0FBSyxRQUFRLENBQUMsRUFBRTtNQUM1SixPQUFPdm1CLE1BQU07SUFDZjtJQUVBLE9BQU91cEIsWUFBWSxJQUFJQyxrQkFBa0IsQ0FBQy9xQixPQUFPLENBQUMsSUFBSXVCLE1BQU07RUFDOUQ7RUFFQSxTQUFTbXFCLHdCQUF3QkEsQ0FBQzdGLFNBQVMsRUFBRTtJQUMzQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDdGQsT0FBTyxDQUFDc2QsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHO0VBQzlEO0VBRUEsU0FBUzhGLE1BQU1BLENBQUNDLEtBQUssRUFBRTlyQixLQUFLLEVBQUUrckIsS0FBSyxFQUFFO0lBQ25DLE9BQU9yakIsR0FBRyxDQUFDb2pCLEtBQUssRUFBRW5qQixHQUFHLENBQUMzSSxLQUFLLEVBQUUrckIsS0FBSyxDQUFDLENBQUM7RUFDdEM7RUFDQSxTQUFTQyxjQUFjQSxDQUFDcmpCLEdBQUcsRUFBRTNJLEtBQUssRUFBRTBJLEdBQUcsRUFBRTtJQUN2QyxJQUFJdWpCLENBQUMsR0FBR0osTUFBTSxDQUFDbGpCLEdBQUcsRUFBRTNJLEtBQUssRUFBRTBJLEdBQUcsQ0FBQztJQUMvQixPQUFPdWpCLENBQUMsR0FBR3ZqQixHQUFHLEdBQUdBLEdBQUcsR0FBR3VqQixDQUFDO0VBQzFCO0VBRUEsU0FBU0Msa0JBQWtCQSxDQUFBLEVBQUc7SUFDNUIsT0FBTztNQUNMbEgsR0FBRyxFQUFFLENBQUM7TUFDTkUsS0FBSyxFQUFFLENBQUM7TUFDUkQsTUFBTSxFQUFFLENBQUM7TUFDVEUsSUFBSSxFQUFFO0lBQ1IsQ0FBQztFQUNIO0VBRUEsU0FBU2dILGtCQUFrQkEsQ0FBQ0MsYUFBYSxFQUFFO0lBQ3pDLE9BQU9qcUIsTUFBTSxDQUFDeWxCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRXNFLGtCQUFrQixFQUFFLEVBQUVFLGFBQWEsQ0FBQztFQUMvRDtFQUVBLFNBQVNDLGVBQWVBLENBQUNyc0IsS0FBSyxFQUFFcU4sSUFBSSxFQUFFO0lBQ3BDLE9BQU9BLElBQUksQ0FBQ3dZLE1BQU0sQ0FBQyxVQUFVeUcsT0FBTyxFQUFFdnNCLEdBQUcsRUFBRTtNQUN6Q3VzQixPQUFPLENBQUN2c0IsR0FBRyxDQUFDLEdBQUdDLEtBQUs7TUFDcEIsT0FBT3NzQixPQUFPO0lBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNSO0VBRUEsSUFBSUMsZUFBZSxHQUFHLFNBQVNBLGVBQWVBLENBQUNDLE9BQU8sRUFBRWhGLEtBQUssRUFBRTtJQUM3RGdGLE9BQU8sR0FBRyxPQUFPQSxPQUFPLEtBQUssVUFBVSxHQUFHQSxPQUFPLENBQUNycUIsTUFBTSxDQUFDeWxCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRUosS0FBSyxDQUFDaUYsS0FBSyxFQUFFO01BQy9FMUcsU0FBUyxFQUFFeUIsS0FBSyxDQUFDekI7SUFDbkIsQ0FBQyxDQUFDLENBQUMsR0FBR3lHLE9BQU87SUFDYixPQUFPTCxrQkFBa0IsQ0FBQyxPQUFPSyxPQUFPLEtBQUssUUFBUSxHQUFHQSxPQUFPLEdBQUdILGVBQWUsQ0FBQ0csT0FBTyxFQUFFbkgsY0FBYyxDQUFDLENBQUM7RUFDN0csQ0FBQztFQUVELFNBQVMrQyxLQUFLQSxDQUFDYixJQUFJLEVBQUU7SUFDbkIsSUFBSW1GLHFCQUFxQjtJQUV6QixJQUFJbEYsS0FBSyxHQUFHRCxJQUFJLENBQUNDLEtBQUs7TUFDbEI3Z0IsSUFBSSxHQUFHNGdCLElBQUksQ0FBQzVnQixJQUFJO01BQ2hCc2hCLE9BQU8sR0FBR1YsSUFBSSxDQUFDVSxPQUFPO0lBQzFCLElBQUkwRSxZQUFZLEdBQUduRixLQUFLLENBQUNDLFFBQVEsQ0FBQ1csS0FBSztJQUN2QyxJQUFJd0UsYUFBYSxHQUFHcEYsS0FBSyxDQUFDcUYsYUFBYSxDQUFDRCxhQUFhO0lBQ3JELElBQUlFLGFBQWEsR0FBR2pFLGdCQUFnQixDQUFDckIsS0FBSyxDQUFDekIsU0FBUyxDQUFDO0lBQ3JELElBQUlnSCxJQUFJLEdBQUduQix3QkFBd0IsQ0FBQ2tCLGFBQWEsQ0FBQztJQUNsRCxJQUFJRSxVQUFVLEdBQUcsQ0FBQzdILElBQUksRUFBRUQsS0FBSyxDQUFDLENBQUN6YyxPQUFPLENBQUNxa0IsYUFBYSxDQUFDLElBQUksQ0FBQztJQUMxRCxJQUFJRyxHQUFHLEdBQUdELFVBQVUsR0FBRyxRQUFRLEdBQUcsT0FBTztJQUV6QyxJQUFJLENBQUNMLFlBQVksSUFBSSxDQUFDQyxhQUFhLEVBQUU7TUFDbkM7SUFDRjtJQUVBLElBQUlSLGFBQWEsR0FBR0csZUFBZSxDQUFDdEUsT0FBTyxDQUFDdUUsT0FBTyxFQUFFaEYsS0FBSyxDQUFDO0lBQzNELElBQUkwRixTQUFTLEdBQUc1QyxhQUFhLENBQUNxQyxZQUFZLENBQUM7SUFDM0MsSUFBSVEsT0FBTyxHQUFHSixJQUFJLEtBQUssR0FBRyxHQUFHL0gsR0FBRyxHQUFHRyxJQUFJO0lBQ3ZDLElBQUlpSSxPQUFPLEdBQUdMLElBQUksS0FBSyxHQUFHLEdBQUc5SCxNQUFNLEdBQUdDLEtBQUs7SUFDM0MsSUFBSW1JLE9BQU8sR0FBRzdGLEtBQUssQ0FBQ2lGLEtBQUssQ0FBQzlHLFNBQVMsQ0FBQ3NILEdBQUcsQ0FBQyxHQUFHekYsS0FBSyxDQUFDaUYsS0FBSyxDQUFDOUcsU0FBUyxDQUFDb0gsSUFBSSxDQUFDLEdBQUdILGFBQWEsQ0FBQ0csSUFBSSxDQUFDLEdBQUd2RixLQUFLLENBQUNpRixLQUFLLENBQUMvRyxNQUFNLENBQUN1SCxHQUFHLENBQUM7SUFDdEgsSUFBSUssU0FBUyxHQUFHVixhQUFhLENBQUNHLElBQUksQ0FBQyxHQUFHdkYsS0FBSyxDQUFDaUYsS0FBSyxDQUFDOUcsU0FBUyxDQUFDb0gsSUFBSSxDQUFDO0lBQ2pFLElBQUlRLGlCQUFpQixHQUFHNUIsZUFBZSxDQUFDZ0IsWUFBWSxDQUFDO0lBQ3JELElBQUlhLFVBQVUsR0FBR0QsaUJBQWlCLEdBQUdSLElBQUksS0FBSyxHQUFHLEdBQUdRLGlCQUFpQixDQUFDRSxZQUFZLElBQUksQ0FBQyxHQUFHRixpQkFBaUIsQ0FBQ0csV0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2hJLElBQUlDLGlCQUFpQixHQUFHTixPQUFPLEdBQUcsQ0FBQyxHQUFHQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckQ7O0lBRUEsSUFBSTNrQixHQUFHLEdBQUd5akIsYUFBYSxDQUFDZSxPQUFPLENBQUM7SUFDaEMsSUFBSXprQixHQUFHLEdBQUc4a0IsVUFBVSxHQUFHTixTQUFTLENBQUNELEdBQUcsQ0FBQyxHQUFHYixhQUFhLENBQUNnQixPQUFPLENBQUM7SUFDOUQsSUFBSVEsTUFBTSxHQUFHSixVQUFVLEdBQUcsQ0FBQyxHQUFHTixTQUFTLENBQUNELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBR1UsaUJBQWlCO0lBQ3BFLElBQUlFLE1BQU0sR0FBR2hDLE1BQU0sQ0FBQ2xqQixHQUFHLEVBQUVpbEIsTUFBTSxFQUFFbGxCLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBRXZDLElBQUlvbEIsUUFBUSxHQUFHZixJQUFJO0lBQ25CdkYsS0FBSyxDQUFDcUYsYUFBYSxDQUFDbG1CLElBQUksQ0FBQyxJQUFJK2xCLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxFQUFFQSxxQkFBcUIsQ0FBQ29CLFFBQVEsQ0FBQyxHQUFHRCxNQUFNLEVBQUVuQixxQkFBcUIsQ0FBQ3FCLFlBQVksR0FBR0YsTUFBTSxHQUFHRCxNQUFNLEVBQUVsQixxQkFBcUIsQ0FBQztFQUNqTDtFQUVBLFNBQVNzQixRQUFRQSxDQUFDbEcsS0FBSyxFQUFFO0lBQ3ZCLElBQUlOLEtBQUssR0FBR00sS0FBSyxDQUFDTixLQUFLO01BQ25CUyxPQUFPLEdBQUdILEtBQUssQ0FBQ0csT0FBTztJQUMzQixJQUFJZ0csZ0JBQWdCLEdBQUdoRyxPQUFPLENBQUMvbkIsT0FBTztNQUNsQ3lzQixZQUFZLEdBQUdzQixnQkFBZ0IsS0FBSyxLQUFLLENBQUMsR0FBRyxxQkFBcUIsR0FBR0EsZ0JBQWdCO0lBRXpGLElBQUl0QixZQUFZLElBQUksSUFBSSxFQUFFO01BQ3hCO0lBQ0YsQ0FBQyxDQUFDOztJQUdGLElBQUksT0FBT0EsWUFBWSxLQUFLLFFBQVEsRUFBRTtNQUNwQ0EsWUFBWSxHQUFHbkYsS0FBSyxDQUFDQyxRQUFRLENBQUMvQixNQUFNLENBQUN6aEIsYUFBYSxDQUFDMG9CLFlBQVksQ0FBQztNQUVoRSxJQUFJLENBQUNBLFlBQVksRUFBRTtRQUNqQjtNQUNGO0lBQ0Y7SUFFQSxJQUFJLENBQUM3bkIsUUFBUSxDQUFDMGlCLEtBQUssQ0FBQ0MsUUFBUSxDQUFDL0IsTUFBTSxFQUFFaUgsWUFBWSxDQUFDLEVBQUU7TUFFbEQ7SUFDRjtJQUVBbkYsS0FBSyxDQUFDQyxRQUFRLENBQUNXLEtBQUssR0FBR3VFLFlBQVk7RUFDckMsQ0FBQyxDQUFDOztFQUdGLElBQU11QixPQUFPLEdBQUc7SUFDZHZuQixJQUFJLEVBQUUsT0FBTztJQUNiOGhCLE9BQU8sRUFBRSxJQUFJO0lBQ2JDLEtBQUssRUFBRSxNQUFNO0lBQ2I1aEIsRUFBRSxFQUFFc2hCLEtBQUs7SUFDVE8sTUFBTSxFQUFFcUYsUUFBUTtJQUNoQnBGLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUMzQnVGLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCO0VBQ3RDLENBQUM7RUFFRCxTQUFTQyxZQUFZQSxDQUFDckksU0FBUyxFQUFFO0lBQy9CLE9BQU9BLFNBQVMsQ0FBQ3ZpQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2hDO0VBRUEsSUFBSTZxQixVQUFVLEdBQUc7SUFDZnJKLEdBQUcsRUFBRSxNQUFNO0lBQ1hFLEtBQUssRUFBRSxNQUFNO0lBQ2JELE1BQU0sRUFBRSxNQUFNO0lBQ2RFLElBQUksRUFBRTtFQUNSLENBQUMsQ0FBQyxDQUFDO0VBQ0g7RUFDQTs7RUFFQSxTQUFTbUosaUJBQWlCQSxDQUFDL0csSUFBSSxFQUFFO0lBQy9CLElBQUkyQyxDQUFDLEdBQUczQyxJQUFJLENBQUMyQyxDQUFDO01BQ1ZFLENBQUMsR0FBRzdDLElBQUksQ0FBQzZDLENBQUM7SUFDZCxJQUFJbUUsR0FBRyxHQUFHOXNCLE1BQU07SUFDaEIsSUFBSStzQixHQUFHLEdBQUdELEdBQUcsQ0FBQ0UsZ0JBQWdCLElBQUksQ0FBQztJQUNuQyxPQUFPO01BQ0x2RSxDQUFDLEVBQUVwQixLQUFLLENBQUNvQixDQUFDLEdBQUdzRSxHQUFHLENBQUMsR0FBR0EsR0FBRyxJQUFJLENBQUM7TUFDNUJwRSxDQUFDLEVBQUV0QixLQUFLLENBQUNzQixDQUFDLEdBQUdvRSxHQUFHLENBQUMsR0FBR0EsR0FBRyxJQUFJO0lBQzdCLENBQUM7RUFDSDtFQUVBLFNBQVNFLFdBQVdBLENBQUM1RyxLQUFLLEVBQUU7SUFDMUIsSUFBSTZHLGVBQWU7SUFFbkIsSUFBSWpKLE1BQU0sR0FBR29DLEtBQUssQ0FBQ3BDLE1BQU07TUFDckJrSixVQUFVLEdBQUc5RyxLQUFLLENBQUM4RyxVQUFVO01BQzdCN0ksU0FBUyxHQUFHK0IsS0FBSyxDQUFDL0IsU0FBUztNQUMzQjhJLFNBQVMsR0FBRy9HLEtBQUssQ0FBQytHLFNBQVM7TUFDM0JDLE9BQU8sR0FBR2hILEtBQUssQ0FBQ2dILE9BQU87TUFDdkI5RyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0UsUUFBUTtNQUN6QitHLGVBQWUsR0FBR2pILEtBQUssQ0FBQ2lILGVBQWU7TUFDdkNDLFFBQVEsR0FBR2xILEtBQUssQ0FBQ2tILFFBQVE7TUFDekJDLFlBQVksR0FBR25ILEtBQUssQ0FBQ21ILFlBQVk7TUFDakNDLE9BQU8sR0FBR3BILEtBQUssQ0FBQ29ILE9BQU87SUFDM0IsSUFBSUMsVUFBVSxHQUFHTCxPQUFPLENBQUM1RSxDQUFDO01BQ3RCQSxDQUFDLEdBQUdpRixVQUFVLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxVQUFVO01BQzFDQyxVQUFVLEdBQUdOLE9BQU8sQ0FBQzFFLENBQUM7TUFDdEJBLENBQUMsR0FBR2dGLFVBQVUsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUdBLFVBQVU7SUFFOUMsSUFBSUMsS0FBSyxHQUFHLE9BQU9KLFlBQVksS0FBSyxVQUFVLEdBQUdBLFlBQVksQ0FBQztNQUM1RC9FLENBQUMsRUFBRUEsQ0FBQztNQUNKRSxDQUFDLEVBQUVBO0lBQ0wsQ0FBQyxDQUFDLEdBQUc7TUFDSEYsQ0FBQyxFQUFFQSxDQUFDO01BQ0pFLENBQUMsRUFBRUE7SUFDTCxDQUFDO0lBRURGLENBQUMsR0FBR21GLEtBQUssQ0FBQ25GLENBQUM7SUFDWEUsQ0FBQyxHQUFHaUYsS0FBSyxDQUFDakYsQ0FBQztJQUNYLElBQUlrRixJQUFJLEdBQUdSLE9BQU8sQ0FBQ3hHLGNBQWMsQ0FBQyxHQUFHLENBQUM7SUFDdEMsSUFBSWlILElBQUksR0FBR1QsT0FBTyxDQUFDeEcsY0FBYyxDQUFDLEdBQUcsQ0FBQztJQUN0QyxJQUFJa0gsS0FBSyxHQUFHckssSUFBSTtJQUNoQixJQUFJc0ssS0FBSyxHQUFHekssR0FBRztJQUNmLElBQUl1SixHQUFHLEdBQUc5c0IsTUFBTTtJQUVoQixJQUFJdXRCLFFBQVEsRUFBRTtNQUNaLElBQUloRSxZQUFZLEdBQUdXLGVBQWUsQ0FBQ2pHLE1BQU0sQ0FBQztNQUMxQyxJQUFJZ0ssVUFBVSxHQUFHLGNBQWM7TUFDL0IsSUFBSUMsU0FBUyxHQUFHLGFBQWE7TUFFN0IsSUFBSTNFLFlBQVksS0FBS25FLFNBQVMsQ0FBQ25CLE1BQU0sQ0FBQyxFQUFFO1FBQ3RDc0YsWUFBWSxHQUFHSixrQkFBa0IsQ0FBQ2xGLE1BQU0sQ0FBQztRQUV6QyxJQUFJZ0Ysa0JBQWtCLENBQUNNLFlBQVksQ0FBQyxDQUFDaEQsUUFBUSxLQUFLLFFBQVEsSUFBSUEsUUFBUSxLQUFLLFVBQVUsRUFBRTtVQUNyRjBILFVBQVUsR0FBRyxjQUFjO1VBQzNCQyxTQUFTLEdBQUcsYUFBYTtRQUMzQjtNQUNGLENBQUMsQ0FBQzs7TUFHRjNFLFlBQVksR0FBR0EsWUFBWTtNQUUzQixJQUFJakYsU0FBUyxLQUFLZixHQUFHLElBQUksQ0FBQ2UsU0FBUyxLQUFLWixJQUFJLElBQUlZLFNBQVMsS0FBS2IsS0FBSyxLQUFLMkosU0FBUyxLQUFLdEosR0FBRyxFQUFFO1FBQ3pGa0ssS0FBSyxHQUFHeEssTUFBTTtRQUNkLElBQUkySyxPQUFPLEdBQUdWLE9BQU8sSUFBSWxFLFlBQVksS0FBS3VELEdBQUcsSUFBSUEsR0FBRyxDQUFDdkUsY0FBYyxHQUFHdUUsR0FBRyxDQUFDdkUsY0FBYyxDQUFDRCxNQUFNO1FBQUc7UUFDbEdpQixZQUFZLENBQUMwRSxVQUFVLENBQUM7UUFDeEJ0RixDQUFDLElBQUl3RixPQUFPLEdBQUdoQixVQUFVLENBQUM3RSxNQUFNO1FBQ2hDSyxDQUFDLElBQUkyRSxlQUFlLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUMvQjtNQUVBLElBQUloSixTQUFTLEtBQUtaLElBQUksSUFBSSxDQUFDWSxTQUFTLEtBQUtmLEdBQUcsSUFBSWUsU0FBUyxLQUFLZCxNQUFNLEtBQUs0SixTQUFTLEtBQUt0SixHQUFHLEVBQUU7UUFDMUZpSyxLQUFLLEdBQUd0SyxLQUFLO1FBQ2IsSUFBSTJLLE9BQU8sR0FBR1gsT0FBTyxJQUFJbEUsWUFBWSxLQUFLdUQsR0FBRyxJQUFJQSxHQUFHLENBQUN2RSxjQUFjLEdBQUd1RSxHQUFHLENBQUN2RSxjQUFjLENBQUNGLEtBQUs7UUFBRztRQUNqR2tCLFlBQVksQ0FBQzJFLFNBQVMsQ0FBQztRQUN2QnpGLENBQUMsSUFBSTJGLE9BQU8sR0FBR2pCLFVBQVUsQ0FBQzlFLEtBQUs7UUFDL0JJLENBQUMsSUFBSTZFLGVBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQy9CO0lBQ0Y7SUFFQSxJQUFJZSxZQUFZLEdBQUczdEIsTUFBTSxDQUFDeWxCLE1BQU0sQ0FBQztNQUMvQkksUUFBUSxFQUFFQTtJQUNaLENBQUMsRUFBRWdILFFBQVEsSUFBSVgsVUFBVSxDQUFDO0lBRTFCLElBQUkwQixLQUFLLEdBQUdkLFlBQVksS0FBSyxJQUFJLEdBQUdYLGlCQUFpQixDQUFDO01BQ3BEcEUsQ0FBQyxFQUFFQSxDQUFDO01BQ0pFLENBQUMsRUFBRUE7SUFDTCxDQUFDLENBQUMsR0FBRztNQUNIRixDQUFDLEVBQUVBLENBQUM7TUFDSkUsQ0FBQyxFQUFFQTtJQUNMLENBQUM7SUFFREYsQ0FBQyxHQUFHNkYsS0FBSyxDQUFDN0YsQ0FBQztJQUNYRSxDQUFDLEdBQUcyRixLQUFLLENBQUMzRixDQUFDO0lBRVgsSUFBSTJFLGVBQWUsRUFBRTtNQUNuQixJQUFJaUIsY0FBYztNQUVsQixPQUFPN3RCLE1BQU0sQ0FBQ3lsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVrSSxZQUFZLEdBQUdFLGNBQWMsR0FBRyxDQUFDLENBQUMsRUFBRUEsY0FBYyxDQUFDUCxLQUFLLENBQUMsR0FBR0YsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUVTLGNBQWMsQ0FBQ1IsS0FBSyxDQUFDLEdBQUdGLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFVSxjQUFjLENBQUN6RSxTQUFTLEdBQUcsQ0FBQ2dELEdBQUcsQ0FBQ0UsZ0JBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxZQUFZLEdBQUd2RSxDQUFDLEdBQUcsTUFBTSxHQUFHRSxDQUFDLEdBQUcsS0FBSyxHQUFHLGNBQWMsR0FBR0YsQ0FBQyxHQUFHLE1BQU0sR0FBR0UsQ0FBQyxHQUFHLFFBQVEsRUFBRTRGLGNBQWMsRUFBRTtJQUNuVDtJQUVBLE9BQU83dEIsTUFBTSxDQUFDeWxCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRWtJLFlBQVksR0FBR25CLGVBQWUsR0FBRyxDQUFDLENBQUMsRUFBRUEsZUFBZSxDQUFDYyxLQUFLLENBQUMsR0FBR0YsSUFBSSxHQUFHbkYsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUV1RSxlQUFlLENBQUNhLEtBQUssQ0FBQyxHQUFHRixJQUFJLEdBQUdwRixDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRXlFLGVBQWUsQ0FBQ3BELFNBQVMsR0FBRyxFQUFFLEVBQUVvRCxlQUFlLEVBQUU7RUFDL007RUFFQSxTQUFTc0IsYUFBYUEsQ0FBQ0MsS0FBSyxFQUFFO0lBQzVCLElBQUkxSSxLQUFLLEdBQUcwSSxLQUFLLENBQUMxSSxLQUFLO01BQ25CUyxPQUFPLEdBQUdpSSxLQUFLLENBQUNqSSxPQUFPO0lBQzNCLElBQUlrSSxxQkFBcUIsR0FBR2xJLE9BQU8sQ0FBQzhHLGVBQWU7TUFDL0NBLGVBQWUsR0FBR29CLHFCQUFxQixLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBR0EscUJBQXFCO01BQ2pGQyxpQkFBaUIsR0FBR25JLE9BQU8sQ0FBQytHLFFBQVE7TUFDcENBLFFBQVEsR0FBR29CLGlCQUFpQixLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBR0EsaUJBQWlCO01BQ2xFQyxxQkFBcUIsR0FBR3BJLE9BQU8sQ0FBQ2dILFlBQVk7TUFDNUNBLFlBQVksR0FBR29CLHFCQUFxQixLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBR0EscUJBQXFCO0lBRWxGLElBQUlQLFlBQVksR0FBRztNQUNqQi9KLFNBQVMsRUFBRThDLGdCQUFnQixDQUFDckIsS0FBSyxDQUFDekIsU0FBUyxDQUFDO01BQzVDOEksU0FBUyxFQUFFVCxZQUFZLENBQUM1RyxLQUFLLENBQUN6QixTQUFTLENBQUM7TUFDeENMLE1BQU0sRUFBRThCLEtBQUssQ0FBQ0MsUUFBUSxDQUFDL0IsTUFBTTtNQUM3QmtKLFVBQVUsRUFBRXBILEtBQUssQ0FBQ2lGLEtBQUssQ0FBQy9HLE1BQU07TUFDOUJxSixlQUFlLEVBQUVBLGVBQWU7TUFDaENHLE9BQU8sRUFBRTFILEtBQUssQ0FBQ1MsT0FBTyxDQUFDQyxRQUFRLEtBQUs7SUFDdEMsQ0FBQztJQUVELElBQUlWLEtBQUssQ0FBQ3FGLGFBQWEsQ0FBQ0QsYUFBYSxJQUFJLElBQUksRUFBRTtNQUM3Q3BGLEtBQUssQ0FBQ0csTUFBTSxDQUFDakMsTUFBTSxHQUFHdmpCLE1BQU0sQ0FBQ3lsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVKLEtBQUssQ0FBQ0csTUFBTSxDQUFDakMsTUFBTSxFQUFFZ0osV0FBVyxDQUFDdnNCLE1BQU0sQ0FBQ3lsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVrSSxZQUFZLEVBQUU7UUFDdkdoQixPQUFPLEVBQUV0SCxLQUFLLENBQUNxRixhQUFhLENBQUNELGFBQWE7UUFDMUM1RSxRQUFRLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTyxDQUFDQyxRQUFRO1FBQ2hDOEcsUUFBUSxFQUFFQSxRQUFRO1FBQ2xCQyxZQUFZLEVBQUVBO01BQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTjtJQUVBLElBQUl6SCxLQUFLLENBQUNxRixhQUFhLENBQUN6RSxLQUFLLElBQUksSUFBSSxFQUFFO01BQ3JDWixLQUFLLENBQUNHLE1BQU0sQ0FBQ1MsS0FBSyxHQUFHam1CLE1BQU0sQ0FBQ3lsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVKLEtBQUssQ0FBQ0csTUFBTSxDQUFDUyxLQUFLLEVBQUVzRyxXQUFXLENBQUN2c0IsTUFBTSxDQUFDeWxCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRWtJLFlBQVksRUFBRTtRQUNyR2hCLE9BQU8sRUFBRXRILEtBQUssQ0FBQ3FGLGFBQWEsQ0FBQ3pFLEtBQUs7UUFDbENKLFFBQVEsRUFBRSxVQUFVO1FBQ3BCZ0gsUUFBUSxFQUFFLEtBQUs7UUFDZkMsWUFBWSxFQUFFQTtNQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ047SUFFQXpILEtBQUssQ0FBQzdXLFVBQVUsQ0FBQytVLE1BQU0sR0FBR3ZqQixNQUFNLENBQUN5bEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFSixLQUFLLENBQUM3VyxVQUFVLENBQUMrVSxNQUFNLEVBQUU7TUFDbkUsdUJBQXVCLEVBQUU4QixLQUFLLENBQUN6QjtJQUNqQyxDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7O0VBR0YsSUFBTXVLLGVBQWUsR0FBRztJQUN0QjNwQixJQUFJLEVBQUUsZUFBZTtJQUNyQjhoQixPQUFPLEVBQUUsSUFBSTtJQUNiQyxLQUFLLEVBQUUsYUFBYTtJQUNwQjVoQixFQUFFLEVBQUVtcEIsYUFBYTtJQUNqQnBaLElBQUksRUFBRSxDQUFDO0VBQ1QsQ0FBQztFQUVELElBQUkwWixPQUFPLEdBQUc7SUFDWkEsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUVELFNBQVM1SCxNQUFNQSxDQUFDcEIsSUFBSSxFQUFFO0lBQ3BCLElBQUlDLEtBQUssR0FBR0QsSUFBSSxDQUFDQyxLQUFLO01BQ2xCalksUUFBUSxHQUFHZ1ksSUFBSSxDQUFDaFksUUFBUTtNQUN4QjBZLE9BQU8sR0FBR1YsSUFBSSxDQUFDVSxPQUFPO0lBQzFCLElBQUl1SSxlQUFlLEdBQUd2SSxPQUFPLENBQUN3SSxNQUFNO01BQ2hDQSxNQUFNLEdBQUdELGVBQWUsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUdBLGVBQWU7TUFDNURFLGVBQWUsR0FBR3pJLE9BQU8sQ0FBQzBJLE1BQU07TUFDaENBLE1BQU0sR0FBR0QsZUFBZSxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBR0EsZUFBZTtJQUNoRSxJQUFJanZCLE1BQU0sR0FBR29sQixTQUFTLENBQUNXLEtBQUssQ0FBQ0MsUUFBUSxDQUFDL0IsTUFBTSxDQUFDO0lBQzdDLElBQUlrTCxhQUFhLEdBQUcsRUFBRSxDQUFDN3VCLE1BQU0sQ0FBQ3lsQixLQUFLLENBQUNvSixhQUFhLENBQUNqTCxTQUFTLEVBQUU2QixLQUFLLENBQUNvSixhQUFhLENBQUNsTCxNQUFNLENBQUM7SUFFeEYsSUFBSStLLE1BQU0sRUFBRTtNQUNWRyxhQUFhLENBQUNsSixPQUFPLENBQUMsVUFBVW1KLFlBQVksRUFBRTtRQUM1Q0EsWUFBWSxDQUFDM3FCLGdCQUFnQixDQUFDLFFBQVEsRUFBRXFKLFFBQVEsQ0FBQ3VoQixNQUFNLEVBQUVQLE9BQU8sQ0FBQztNQUNuRSxDQUFDLENBQUM7SUFDSjtJQUVBLElBQUlJLE1BQU0sRUFBRTtNQUNWbHZCLE1BQU0sQ0FBQ3lFLGdCQUFnQixDQUFDLFFBQVEsRUFBRXFKLFFBQVEsQ0FBQ3VoQixNQUFNLEVBQUVQLE9BQU8sQ0FBQztJQUM3RDtJQUVBLE9BQU8sWUFBWTtNQUNqQixJQUFJRSxNQUFNLEVBQUU7UUFDVkcsYUFBYSxDQUFDbEosT0FBTyxDQUFDLFVBQVVtSixZQUFZLEVBQUU7VUFDNUNBLFlBQVksQ0FBQzdvQixtQkFBbUIsQ0FBQyxRQUFRLEVBQUV1SCxRQUFRLENBQUN1aEIsTUFBTSxFQUFFUCxPQUFPLENBQUM7UUFDdEUsQ0FBQyxDQUFDO01BQ0o7TUFFQSxJQUFJSSxNQUFNLEVBQUU7UUFDVmx2QixNQUFNLENBQUN1RyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUV1SCxRQUFRLENBQUN1aEIsTUFBTSxFQUFFUCxPQUFPLENBQUM7TUFDaEU7SUFDRixDQUFDO0VBQ0gsQ0FBQyxDQUFDOztFQUdGLElBQU1RLGNBQWMsR0FBRztJQUNyQnBxQixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCOGhCLE9BQU8sRUFBRSxJQUFJO0lBQ2JDLEtBQUssRUFBRSxPQUFPO0lBQ2Q1aEIsRUFBRSxFQUFFLFNBQVNBLEVBQUVBLENBQUEsRUFBRyxDQUFDLENBQUM7SUFDcEI2aEIsTUFBTSxFQUFFQSxNQUFNO0lBQ2Q5UixJQUFJLEVBQUUsQ0FBQztFQUNULENBQUM7RUFFRCxJQUFJbWEsTUFBTSxHQUFHO0lBQ1g3TCxJQUFJLEVBQUUsT0FBTztJQUNiRCxLQUFLLEVBQUUsTUFBTTtJQUNiRCxNQUFNLEVBQUUsS0FBSztJQUNiRCxHQUFHLEVBQUU7RUFDUCxDQUFDO0VBQ0QsU0FBU2lNLG9CQUFvQkEsQ0FBQ2xMLFNBQVMsRUFBRTtJQUN2QyxPQUFPQSxTQUFTLENBQUNua0IsT0FBTyxDQUFDLHdCQUF3QixFQUFFLFVBQVVzdkIsT0FBTyxFQUFFO01BQ3BFLE9BQU9GLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDO0lBQ3hCLENBQUMsQ0FBQztFQUNKO0VBRUEsSUFBSUMsSUFBSSxHQUFHO0lBQ1Q3TCxLQUFLLEVBQUUsS0FBSztJQUNaQyxHQUFHLEVBQUU7RUFDUCxDQUFDO0VBQ0QsU0FBUzZMLDZCQUE2QkEsQ0FBQ3JMLFNBQVMsRUFBRTtJQUNoRCxPQUFPQSxTQUFTLENBQUNua0IsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFVc3ZCLE9BQU8sRUFBRTtNQUN4RCxPQUFPQyxJQUFJLENBQUNELE9BQU8sQ0FBQztJQUN0QixDQUFDLENBQUM7RUFDSjtFQUVBLFNBQVNHLGVBQWVBLENBQUN2SyxJQUFJLEVBQUU7SUFDN0IsSUFBSXlILEdBQUcsR0FBRzFILFNBQVMsQ0FBQ0MsSUFBSSxDQUFDO0lBQ3pCLElBQUl3SyxVQUFVLEdBQUcvQyxHQUFHLENBQUNnRCxXQUFXO0lBQ2hDLElBQUlDLFNBQVMsR0FBR2pELEdBQUcsQ0FBQ2tELFdBQVc7SUFDL0IsT0FBTztNQUNMSCxVQUFVLEVBQUVBLFVBQVU7TUFDdEJFLFNBQVMsRUFBRUE7SUFDYixDQUFDO0VBQ0g7RUFFQSxTQUFTRSxtQkFBbUJBLENBQUN4eEIsT0FBTyxFQUFFO0lBQ3BDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsT0FBT2trQixxQkFBcUIsQ0FBQ3dHLGtCQUFrQixDQUFDMXFCLE9BQU8sQ0FBQyxDQUFDLENBQUNpbEIsSUFBSSxHQUFHa00sZUFBZSxDQUFDbnhCLE9BQU8sQ0FBQyxDQUFDb3hCLFVBQVU7RUFDdEc7RUFFQSxTQUFTSyxlQUFlQSxDQUFDenhCLE9BQU8sRUFBRWdvQixRQUFRLEVBQUU7SUFDMUMsSUFBSXFHLEdBQUcsR0FBRzFILFNBQVMsQ0FBQzNtQixPQUFPLENBQUM7SUFDNUIsSUFBSTB4QixJQUFJLEdBQUdoSCxrQkFBa0IsQ0FBQzFxQixPQUFPLENBQUM7SUFDdEMsSUFBSThwQixjQUFjLEdBQUd1RSxHQUFHLENBQUN2RSxjQUFjO0lBQ3ZDLElBQUlGLEtBQUssR0FBRzhILElBQUksQ0FBQ2xFLFdBQVc7SUFDNUIsSUFBSTNELE1BQU0sR0FBRzZILElBQUksQ0FBQ25FLFlBQVk7SUFDOUIsSUFBSXZELENBQUMsR0FBRyxDQUFDO0lBQ1QsSUFBSUUsQ0FBQyxHQUFHLENBQUM7SUFFVCxJQUFJSixjQUFjLEVBQUU7TUFDbEJGLEtBQUssR0FBR0UsY0FBYyxDQUFDRixLQUFLO01BQzVCQyxNQUFNLEdBQUdDLGNBQWMsQ0FBQ0QsTUFBTTtNQUM5QixJQUFJOEgsY0FBYyxHQUFHdEksZ0JBQWdCLEVBQUU7TUFFdkMsSUFBSXNJLGNBQWMsSUFBSSxDQUFDQSxjQUFjLElBQUkzSixRQUFRLEtBQUssT0FBTyxFQUFFO1FBQzdEZ0MsQ0FBQyxHQUFHRixjQUFjLENBQUNHLFVBQVU7UUFDN0JDLENBQUMsR0FBR0osY0FBYyxDQUFDSyxTQUFTO01BQzlCO0lBQ0Y7SUFFQSxPQUFPO01BQ0xQLEtBQUssRUFBRUEsS0FBSztNQUNaQyxNQUFNLEVBQUVBLE1BQU07TUFDZEcsQ0FBQyxFQUFFQSxDQUFDLEdBQUd3SCxtQkFBbUIsQ0FBQ3h4QixPQUFPLENBQUM7TUFDbkNrcUIsQ0FBQyxFQUFFQTtJQUNMLENBQUM7RUFDSDs7RUFFQTs7RUFFQSxTQUFTMEgsZUFBZUEsQ0FBQzV4QixPQUFPLEVBQUU7SUFDaEMsSUFBSTZ4QixxQkFBcUI7SUFFekIsSUFBSUgsSUFBSSxHQUFHaEgsa0JBQWtCLENBQUMxcUIsT0FBTyxDQUFDO0lBQ3RDLElBQUk4eEIsU0FBUyxHQUFHWCxlQUFlLENBQUNueEIsT0FBTyxDQUFDO0lBQ3hDLElBQUkyRixJQUFJLEdBQUcsQ0FBQ2tzQixxQkFBcUIsR0FBRzd4QixPQUFPLENBQUM2bUIsYUFBYSxLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsR0FBR2dMLHFCQUFxQixDQUFDbHNCLElBQUk7SUFDeEcsSUFBSWlrQixLQUFLLEdBQUdwaEIsR0FBRyxDQUFDa3BCLElBQUksQ0FBQ0ssV0FBVyxFQUFFTCxJQUFJLENBQUNsRSxXQUFXLEVBQUU3bkIsSUFBSSxHQUFHQSxJQUFJLENBQUNvc0IsV0FBVyxHQUFHLENBQUMsRUFBRXBzQixJQUFJLEdBQUdBLElBQUksQ0FBQzZuQixXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQzdHLElBQUkzRCxNQUFNLEdBQUdyaEIsR0FBRyxDQUFDa3BCLElBQUksQ0FBQ00sWUFBWSxFQUFFTixJQUFJLENBQUNuRSxZQUFZLEVBQUU1bkIsSUFBSSxHQUFHQSxJQUFJLENBQUNxc0IsWUFBWSxHQUFHLENBQUMsRUFBRXJzQixJQUFJLEdBQUdBLElBQUksQ0FBQzRuQixZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ2xILElBQUl2RCxDQUFDLEdBQUcsQ0FBQzhILFNBQVMsQ0FBQ1YsVUFBVSxHQUFHSSxtQkFBbUIsQ0FBQ3h4QixPQUFPLENBQUM7SUFDNUQsSUFBSWtxQixDQUFDLEdBQUcsQ0FBQzRILFNBQVMsQ0FBQ1IsU0FBUztJQUU1QixJQUFJOUcsa0JBQWtCLENBQUM3a0IsSUFBSSxJQUFJK3JCLElBQUksQ0FBQyxDQUFDaFksU0FBUyxLQUFLLEtBQUssRUFBRTtNQUN4RHNRLENBQUMsSUFBSXhoQixHQUFHLENBQUNrcEIsSUFBSSxDQUFDbEUsV0FBVyxFQUFFN25CLElBQUksR0FBR0EsSUFBSSxDQUFDNm5CLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRzVELEtBQUs7SUFDakU7SUFFQSxPQUFPO01BQ0xBLEtBQUssRUFBRUEsS0FBSztNQUNaQyxNQUFNLEVBQUVBLE1BQU07TUFDZEcsQ0FBQyxFQUFFQSxDQUFDO01BQ0pFLENBQUMsRUFBRUE7SUFDTCxDQUFDO0VBQ0g7RUFFQSxTQUFTK0gsY0FBY0EsQ0FBQ2p5QixPQUFPLEVBQUU7SUFDL0I7SUFDQSxJQUFJa3lCLGlCQUFpQixHQUFHMUgsa0JBQWtCLENBQUN4cUIsT0FBTyxDQUFDO01BQy9DbXlCLFFBQVEsR0FBR0QsaUJBQWlCLENBQUNDLFFBQVE7TUFDckNDLFNBQVMsR0FBR0YsaUJBQWlCLENBQUNFLFNBQVM7TUFDdkNDLFNBQVMsR0FBR0gsaUJBQWlCLENBQUNHLFNBQVM7SUFFM0MsT0FBTyw0QkFBNEIsQ0FBQ2hnQixJQUFJLENBQUM4ZixRQUFRLEdBQUdFLFNBQVMsR0FBR0QsU0FBUyxDQUFDO0VBQzVFO0VBRUEsU0FBU0UsZUFBZUEsQ0FBQzFMLElBQUksRUFBRTtJQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQ3JlLE9BQU8sQ0FBQ2tlLFdBQVcsQ0FBQ0csSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDakU7TUFDQSxPQUFPQSxJQUFJLENBQUNDLGFBQWEsQ0FBQ2xoQixJQUFJO0lBQ2hDO0lBRUEsSUFBSXNoQixhQUFhLENBQUNMLElBQUksQ0FBQyxJQUFJcUwsY0FBYyxDQUFDckwsSUFBSSxDQUFDLEVBQUU7TUFDL0MsT0FBT0EsSUFBSTtJQUNiO0lBRUEsT0FBTzBMLGVBQWUsQ0FBQzNILGFBQWEsQ0FBQy9ELElBQUksQ0FBQyxDQUFDO0VBQzdDOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRSxTQUFTMkwsaUJBQWlCQSxDQUFDdnlCLE9BQU8sRUFBRWlJLElBQUksRUFBRTtJQUN4QyxJQUFJNHBCLHFCQUFxQjtJQUV6QixJQUFJNXBCLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtNQUNuQkEsSUFBSSxHQUFHLEVBQUU7SUFDWDtJQUVBLElBQUkwb0IsWUFBWSxHQUFHMkIsZUFBZSxDQUFDdHlCLE9BQU8sQ0FBQztJQUMzQyxJQUFJd3lCLE1BQU0sR0FBRzdCLFlBQVksTUFBTSxDQUFDa0IscUJBQXFCLEdBQUc3eEIsT0FBTyxDQUFDNm1CLGFBQWEsS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUdnTCxxQkFBcUIsQ0FBQ2xzQixJQUFJLENBQUM7SUFDN0gsSUFBSTBvQixHQUFHLEdBQUcxSCxTQUFTLENBQUNnSyxZQUFZLENBQUM7SUFDakMsSUFBSTlvQixNQUFNLEdBQUcycUIsTUFBTSxHQUFHLENBQUNuRSxHQUFHLENBQUMsQ0FBQ3hzQixNQUFNLENBQUN3c0IsR0FBRyxDQUFDdkUsY0FBYyxJQUFJLEVBQUUsRUFBRW1JLGNBQWMsQ0FBQ3RCLFlBQVksQ0FBQyxHQUFHQSxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUdBLFlBQVk7SUFDN0gsSUFBSThCLFdBQVcsR0FBR3hxQixJQUFJLENBQUNwRyxNQUFNLENBQUNnRyxNQUFNLENBQUM7SUFDckMsT0FBTzJxQixNQUFNLEdBQUdDLFdBQVc7SUFBRztJQUM5QkEsV0FBVyxDQUFDNXdCLE1BQU0sQ0FBQzB3QixpQkFBaUIsQ0FBQzVILGFBQWEsQ0FBQzlpQixNQUFNLENBQUMsQ0FBQyxDQUFDO0VBQzlEO0VBRUEsU0FBUzZxQixnQkFBZ0JBLENBQUNDLElBQUksRUFBRTtJQUM5QixPQUFPMXdCLE1BQU0sQ0FBQ3lsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVpTCxJQUFJLEVBQUU7TUFDN0IxTixJQUFJLEVBQUUwTixJQUFJLENBQUMzSSxDQUFDO01BQ1psRixHQUFHLEVBQUU2TixJQUFJLENBQUN6SSxDQUFDO01BQ1hsRixLQUFLLEVBQUUyTixJQUFJLENBQUMzSSxDQUFDLEdBQUcySSxJQUFJLENBQUMvSSxLQUFLO01BQzFCN0UsTUFBTSxFQUFFNE4sSUFBSSxDQUFDekksQ0FBQyxHQUFHeUksSUFBSSxDQUFDOUk7SUFDeEIsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxTQUFTK0ksMEJBQTBCQSxDQUFDNXlCLE9BQU8sRUFBRWdvQixRQUFRLEVBQUU7SUFDckQsSUFBSTJLLElBQUksR0FBR3pPLHFCQUFxQixDQUFDbGtCLE9BQU8sRUFBRSxLQUFLLEVBQUVnb0IsUUFBUSxLQUFLLE9BQU8sQ0FBQztJQUN0RTJLLElBQUksQ0FBQzdOLEdBQUcsR0FBRzZOLElBQUksQ0FBQzdOLEdBQUcsR0FBRzlrQixPQUFPLENBQUM2eUIsU0FBUztJQUN2Q0YsSUFBSSxDQUFDMU4sSUFBSSxHQUFHME4sSUFBSSxDQUFDMU4sSUFBSSxHQUFHamxCLE9BQU8sQ0FBQzh5QixVQUFVO0lBQzFDSCxJQUFJLENBQUM1TixNQUFNLEdBQUc0TixJQUFJLENBQUM3TixHQUFHLEdBQUc5a0IsT0FBTyxDQUFDdXRCLFlBQVk7SUFDN0NvRixJQUFJLENBQUMzTixLQUFLLEdBQUcyTixJQUFJLENBQUMxTixJQUFJLEdBQUdqbEIsT0FBTyxDQUFDd3RCLFdBQVc7SUFDNUNtRixJQUFJLENBQUMvSSxLQUFLLEdBQUc1cEIsT0FBTyxDQUFDd3RCLFdBQVc7SUFDaENtRixJQUFJLENBQUM5SSxNQUFNLEdBQUc3cEIsT0FBTyxDQUFDdXRCLFlBQVk7SUFDbENvRixJQUFJLENBQUMzSSxDQUFDLEdBQUcySSxJQUFJLENBQUMxTixJQUFJO0lBQ2xCME4sSUFBSSxDQUFDekksQ0FBQyxHQUFHeUksSUFBSSxDQUFDN04sR0FBRztJQUNqQixPQUFPNk4sSUFBSTtFQUNiO0VBRUEsU0FBU0ksMEJBQTBCQSxDQUFDL3lCLE9BQU8sRUFBRWd6QixjQUFjLEVBQUVoTCxRQUFRLEVBQUU7SUFDckUsT0FBT2dMLGNBQWMsS0FBS3pOLFFBQVEsR0FBR21OLGdCQUFnQixDQUFDakIsZUFBZSxDQUFDenhCLE9BQU8sRUFBRWdvQixRQUFRLENBQUMsQ0FBQyxHQUFHakIsU0FBUyxDQUFDaU0sY0FBYyxDQUFDLEdBQUdKLDBCQUEwQixDQUFDSSxjQUFjLEVBQUVoTCxRQUFRLENBQUMsR0FBRzBLLGdCQUFnQixDQUFDZCxlQUFlLENBQUNsSCxrQkFBa0IsQ0FBQzFxQixPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQy9PLENBQUMsQ0FBQztFQUNGO0VBQ0E7O0VBR0EsU0FBU2l6QixrQkFBa0JBLENBQUNqekIsT0FBTyxFQUFFO0lBQ25DLElBQUlzbEIsZUFBZSxHQUFHaU4saUJBQWlCLENBQUM1SCxhQUFhLENBQUMzcUIsT0FBTyxDQUFDLENBQUM7SUFDL0QsSUFBSWt6QixpQkFBaUIsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQzNxQixPQUFPLENBQUNpaUIsa0JBQWtCLENBQUN4cUIsT0FBTyxDQUFDLENBQUM4bkIsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNoRyxJQUFJcUwsY0FBYyxHQUFHRCxpQkFBaUIsSUFBSWpNLGFBQWEsQ0FBQ2puQixPQUFPLENBQUMsR0FBR3lyQixlQUFlLENBQUN6ckIsT0FBTyxDQUFDLEdBQUdBLE9BQU87SUFFckcsSUFBSSxDQUFDK21CLFNBQVMsQ0FBQ29NLGNBQWMsQ0FBQyxFQUFFO01BQzlCLE9BQU8sRUFBRTtJQUNYLENBQUMsQ0FBQzs7SUFHRixPQUFPN04sZUFBZSxDQUFDMVUsTUFBTSxDQUFDLFVBQVVvaUIsY0FBYyxFQUFFO01BQ3RELE9BQU9qTSxTQUFTLENBQUNpTSxjQUFjLENBQUMsSUFBSXB1QixRQUFRLENBQUNvdUIsY0FBYyxFQUFFRyxjQUFjLENBQUMsSUFBSTFNLFdBQVcsQ0FBQ3VNLGNBQWMsQ0FBQyxLQUFLLE1BQU07SUFDeEgsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0VBQ0Y7O0VBR0EsU0FBU0ksZUFBZUEsQ0FBQ3B6QixPQUFPLEVBQUVxekIsUUFBUSxFQUFFQyxZQUFZLEVBQUV0TCxRQUFRLEVBQUU7SUFDbEUsSUFBSXVMLG1CQUFtQixHQUFHRixRQUFRLEtBQUssaUJBQWlCLEdBQUdKLGtCQUFrQixDQUFDanpCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQzZCLE1BQU0sQ0FBQ3d4QixRQUFRLENBQUM7SUFDNUcsSUFBSS9OLGVBQWUsR0FBRyxFQUFFLENBQUN6akIsTUFBTSxDQUFDMHhCLG1CQUFtQixFQUFFLENBQUNELFlBQVksQ0FBQyxDQUFDO0lBQ3BFLElBQUlFLG1CQUFtQixHQUFHbE8sZUFBZSxDQUFDLENBQUMsQ0FBQztJQUM1QyxJQUFJbU8sWUFBWSxHQUFHbk8sZUFBZSxDQUFDSyxNQUFNLENBQUMsVUFBVStOLE9BQU8sRUFBRVYsY0FBYyxFQUFFO01BQzNFLElBQUlMLElBQUksR0FBR0ksMEJBQTBCLENBQUMveUIsT0FBTyxFQUFFZ3pCLGNBQWMsRUFBRWhMLFFBQVEsQ0FBQztNQUN4RTBMLE9BQU8sQ0FBQzVPLEdBQUcsR0FBR3RjLEdBQUcsQ0FBQ21xQixJQUFJLENBQUM3TixHQUFHLEVBQUU0TyxPQUFPLENBQUM1TyxHQUFHLENBQUM7TUFDeEM0TyxPQUFPLENBQUMxTyxLQUFLLEdBQUd2YyxHQUFHLENBQUNrcUIsSUFBSSxDQUFDM04sS0FBSyxFQUFFME8sT0FBTyxDQUFDMU8sS0FBSyxDQUFDO01BQzlDME8sT0FBTyxDQUFDM08sTUFBTSxHQUFHdGMsR0FBRyxDQUFDa3FCLElBQUksQ0FBQzVOLE1BQU0sRUFBRTJPLE9BQU8sQ0FBQzNPLE1BQU0sQ0FBQztNQUNqRDJPLE9BQU8sQ0FBQ3pPLElBQUksR0FBR3pjLEdBQUcsQ0FBQ21xQixJQUFJLENBQUMxTixJQUFJLEVBQUV5TyxPQUFPLENBQUN6TyxJQUFJLENBQUM7TUFDM0MsT0FBT3lPLE9BQU87SUFDaEIsQ0FBQyxFQUFFWCwwQkFBMEIsQ0FBQy95QixPQUFPLEVBQUV3ekIsbUJBQW1CLEVBQUV4TCxRQUFRLENBQUMsQ0FBQztJQUN0RXlMLFlBQVksQ0FBQzdKLEtBQUssR0FBRzZKLFlBQVksQ0FBQ3pPLEtBQUssR0FBR3lPLFlBQVksQ0FBQ3hPLElBQUk7SUFDM0R3TyxZQUFZLENBQUM1SixNQUFNLEdBQUc0SixZQUFZLENBQUMxTyxNQUFNLEdBQUcwTyxZQUFZLENBQUMzTyxHQUFHO0lBQzVEMk8sWUFBWSxDQUFDekosQ0FBQyxHQUFHeUosWUFBWSxDQUFDeE8sSUFBSTtJQUNsQ3dPLFlBQVksQ0FBQ3ZKLENBQUMsR0FBR3VKLFlBQVksQ0FBQzNPLEdBQUc7SUFDakMsT0FBTzJPLFlBQVk7RUFDckI7RUFFQSxTQUFTRSxjQUFjQSxDQUFDdE0sSUFBSSxFQUFFO0lBQzVCLElBQUk1QixTQUFTLEdBQUc0QixJQUFJLENBQUM1QixTQUFTO01BQzFCemxCLE9BQU8sR0FBR3FuQixJQUFJLENBQUNybkIsT0FBTztNQUN0QjZsQixTQUFTLEdBQUd3QixJQUFJLENBQUN4QixTQUFTO0lBQzlCLElBQUkrRyxhQUFhLEdBQUcvRyxTQUFTLEdBQUc4QyxnQkFBZ0IsQ0FBQzlDLFNBQVMsQ0FBQyxHQUFHLElBQUk7SUFDbEUsSUFBSThJLFNBQVMsR0FBRzlJLFNBQVMsR0FBR3FJLFlBQVksQ0FBQ3JJLFNBQVMsQ0FBQyxHQUFHLElBQUk7SUFDMUQsSUFBSStOLE9BQU8sR0FBR25PLFNBQVMsQ0FBQ3VFLENBQUMsR0FBR3ZFLFNBQVMsQ0FBQ21FLEtBQUssR0FBRyxDQUFDLEdBQUc1cEIsT0FBTyxDQUFDNHBCLEtBQUssR0FBRyxDQUFDO0lBQ25FLElBQUlpSyxPQUFPLEdBQUdwTyxTQUFTLENBQUN5RSxDQUFDLEdBQUd6RSxTQUFTLENBQUNvRSxNQUFNLEdBQUcsQ0FBQyxHQUFHN3BCLE9BQU8sQ0FBQzZwQixNQUFNLEdBQUcsQ0FBQztJQUNyRSxJQUFJK0UsT0FBTztJQUVYLFFBQVFoQyxhQUFhO01BQ25CLEtBQUs5SCxHQUFHO1FBQ044SixPQUFPLEdBQUc7VUFDUjVFLENBQUMsRUFBRTRKLE9BQU87VUFDVjFKLENBQUMsRUFBRXpFLFNBQVMsQ0FBQ3lFLENBQUMsR0FBR2xxQixPQUFPLENBQUM2cEI7UUFDM0IsQ0FBQztRQUNEO01BRUYsS0FBSzlFLE1BQU07UUFDVDZKLE9BQU8sR0FBRztVQUNSNUUsQ0FBQyxFQUFFNEosT0FBTztVQUNWMUosQ0FBQyxFQUFFekUsU0FBUyxDQUFDeUUsQ0FBQyxHQUFHekUsU0FBUyxDQUFDb0U7UUFDN0IsQ0FBQztRQUNEO01BRUYsS0FBSzdFLEtBQUs7UUFDUjRKLE9BQU8sR0FBRztVQUNSNUUsQ0FBQyxFQUFFdkUsU0FBUyxDQUFDdUUsQ0FBQyxHQUFHdkUsU0FBUyxDQUFDbUUsS0FBSztVQUNoQ00sQ0FBQyxFQUFFMko7UUFDTCxDQUFDO1FBQ0Q7TUFFRixLQUFLNU8sSUFBSTtRQUNQMkosT0FBTyxHQUFHO1VBQ1I1RSxDQUFDLEVBQUV2RSxTQUFTLENBQUN1RSxDQUFDLEdBQUdocUIsT0FBTyxDQUFDNHBCLEtBQUs7VUFDOUJNLENBQUMsRUFBRTJKO1FBQ0wsQ0FBQztRQUNEO01BRUY7UUFDRWpGLE9BQU8sR0FBRztVQUNSNUUsQ0FBQyxFQUFFdkUsU0FBUyxDQUFDdUUsQ0FBQztVQUNkRSxDQUFDLEVBQUV6RSxTQUFTLENBQUN5RTtRQUNmLENBQUM7SUFBQztJQUdOLElBQUk0SixRQUFRLEdBQUdsSCxhQUFhLEdBQUdsQix3QkFBd0IsQ0FBQ2tCLGFBQWEsQ0FBQyxHQUFHLElBQUk7SUFFN0UsSUFBSWtILFFBQVEsSUFBSSxJQUFJLEVBQUU7TUFDcEIsSUFBSS9HLEdBQUcsR0FBRytHLFFBQVEsS0FBSyxHQUFHLEdBQUcsUUFBUSxHQUFHLE9BQU87TUFFL0MsUUFBUW5GLFNBQVM7UUFDZixLQUFLdkosS0FBSztVQUNSd0osT0FBTyxDQUFDa0YsUUFBUSxDQUFDLEdBQUdsRixPQUFPLENBQUNrRixRQUFRLENBQUMsSUFBSXJPLFNBQVMsQ0FBQ3NILEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRy9zQixPQUFPLENBQUMrc0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQy9FO1FBRUYsS0FBSzFILEdBQUc7VUFDTnVKLE9BQU8sQ0FBQ2tGLFFBQVEsQ0FBQyxHQUFHbEYsT0FBTyxDQUFDa0YsUUFBUSxDQUFDLElBQUlyTyxTQUFTLENBQUNzSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcvc0IsT0FBTyxDQUFDK3NCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUMvRTtNQUFNO0lBRVo7SUFFQSxPQUFPNkIsT0FBTztFQUNoQjtFQUVBLFNBQVNtRixjQUFjQSxDQUFDek0sS0FBSyxFQUFFUyxPQUFPLEVBQUU7SUFDdEMsSUFBSUEsT0FBTyxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQ3RCQSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2Q7SUFFQSxJQUFJaU0sUUFBUSxHQUFHak0sT0FBTztNQUNsQmtNLGtCQUFrQixHQUFHRCxRQUFRLENBQUNuTyxTQUFTO01BQ3ZDQSxTQUFTLEdBQUdvTyxrQkFBa0IsS0FBSyxLQUFLLENBQUMsR0FBRzNNLEtBQUssQ0FBQ3pCLFNBQVMsR0FBR29PLGtCQUFrQjtNQUNoRkMsaUJBQWlCLEdBQUdGLFFBQVEsQ0FBQ2hNLFFBQVE7TUFDckNBLFFBQVEsR0FBR2tNLGlCQUFpQixLQUFLLEtBQUssQ0FBQyxHQUFHNU0sS0FBSyxDQUFDVSxRQUFRLEdBQUdrTSxpQkFBaUI7TUFDNUVDLGlCQUFpQixHQUFHSCxRQUFRLENBQUNYLFFBQVE7TUFDckNBLFFBQVEsR0FBR2MsaUJBQWlCLEtBQUssS0FBSyxDQUFDLEdBQUc3TyxlQUFlLEdBQUc2TyxpQkFBaUI7TUFDN0VDLHFCQUFxQixHQUFHSixRQUFRLENBQUNWLFlBQVk7TUFDN0NBLFlBQVksR0FBR2MscUJBQXFCLEtBQUssS0FBSyxDQUFDLEdBQUc3TyxRQUFRLEdBQUc2TyxxQkFBcUI7TUFDbEZDLHFCQUFxQixHQUFHTCxRQUFRLENBQUNNLGNBQWM7TUFDL0NBLGNBQWMsR0FBR0QscUJBQXFCLEtBQUssS0FBSyxDQUFDLEdBQUc3TyxNQUFNLEdBQUc2TyxxQkFBcUI7TUFDbEZFLG9CQUFvQixHQUFHUCxRQUFRLENBQUNRLFdBQVc7TUFDM0NBLFdBQVcsR0FBR0Qsb0JBQW9CLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHQSxvQkFBb0I7TUFDNUVFLGdCQUFnQixHQUFHVCxRQUFRLENBQUMxSCxPQUFPO01BQ25DQSxPQUFPLEdBQUdtSSxnQkFBZ0IsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUdBLGdCQUFnQjtJQUNoRSxJQUFJdkksYUFBYSxHQUFHRCxrQkFBa0IsQ0FBQyxPQUFPSyxPQUFPLEtBQUssUUFBUSxHQUFHQSxPQUFPLEdBQUdILGVBQWUsQ0FBQ0csT0FBTyxFQUFFbkgsY0FBYyxDQUFDLENBQUM7SUFDeEgsSUFBSXVQLFVBQVUsR0FBR0osY0FBYyxLQUFLOU8sTUFBTSxHQUFHQyxTQUFTLEdBQUdELE1BQU07SUFDL0QsSUFBSWtKLFVBQVUsR0FBR3BILEtBQUssQ0FBQ2lGLEtBQUssQ0FBQy9HLE1BQU07SUFDbkMsSUFBSXhsQixPQUFPLEdBQUdzbkIsS0FBSyxDQUFDQyxRQUFRLENBQUNpTixXQUFXLEdBQUdFLFVBQVUsR0FBR0osY0FBYyxDQUFDO0lBQ3ZFLElBQUlLLGtCQUFrQixHQUFHdkIsZUFBZSxDQUFDck0sU0FBUyxDQUFDL21CLE9BQU8sQ0FBQyxHQUFHQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQzQwQixjQUFjLElBQUlsSyxrQkFBa0IsQ0FBQ3BELEtBQUssQ0FBQ0MsUUFBUSxDQUFDL0IsTUFBTSxDQUFDLEVBQUU2TixRQUFRLEVBQUVDLFlBQVksRUFBRXRMLFFBQVEsQ0FBQztJQUM5SyxJQUFJNk0sbUJBQW1CLEdBQUczUSxxQkFBcUIsQ0FBQ29ELEtBQUssQ0FBQ0MsUUFBUSxDQUFDOUIsU0FBUyxDQUFDO0lBQ3pFLElBQUlpSCxhQUFhLEdBQUdpSCxjQUFjLENBQUM7TUFDakNsTyxTQUFTLEVBQUVvUCxtQkFBbUI7TUFDOUI3MEIsT0FBTyxFQUFFMHVCLFVBQVU7TUFDbkIxRyxRQUFRLEVBQUUsVUFBVTtNQUNwQm5DLFNBQVMsRUFBRUE7SUFDYixDQUFDLENBQUM7SUFDRixJQUFJaVAsZ0JBQWdCLEdBQUdwQyxnQkFBZ0IsQ0FBQ3p3QixNQUFNLENBQUN5bEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFZ0gsVUFBVSxFQUFFaEMsYUFBYSxDQUFDLENBQUM7SUFDckYsSUFBSXFJLGlCQUFpQixHQUFHVCxjQUFjLEtBQUs5TyxNQUFNLEdBQUdzUCxnQkFBZ0IsR0FBR0QsbUJBQW1CLENBQUMsQ0FBQztJQUM1Rjs7SUFFQSxJQUFJRyxlQUFlLEdBQUc7TUFDcEJsUSxHQUFHLEVBQUU2UCxrQkFBa0IsQ0FBQzdQLEdBQUcsR0FBR2lRLGlCQUFpQixDQUFDalEsR0FBRyxHQUFHb0gsYUFBYSxDQUFDcEgsR0FBRztNQUN2RUMsTUFBTSxFQUFFZ1EsaUJBQWlCLENBQUNoUSxNQUFNLEdBQUc0UCxrQkFBa0IsQ0FBQzVQLE1BQU0sR0FBR21ILGFBQWEsQ0FBQ25ILE1BQU07TUFDbkZFLElBQUksRUFBRTBQLGtCQUFrQixDQUFDMVAsSUFBSSxHQUFHOFAsaUJBQWlCLENBQUM5UCxJQUFJLEdBQUdpSCxhQUFhLENBQUNqSCxJQUFJO01BQzNFRCxLQUFLLEVBQUUrUCxpQkFBaUIsQ0FBQy9QLEtBQUssR0FBRzJQLGtCQUFrQixDQUFDM1AsS0FBSyxHQUFHa0gsYUFBYSxDQUFDbEg7SUFDNUUsQ0FBQztJQUNELElBQUlpUSxVQUFVLEdBQUczTixLQUFLLENBQUNxRixhQUFhLENBQUNnQixNQUFNLENBQUMsQ0FBQzs7SUFFN0MsSUFBSTJHLGNBQWMsS0FBSzlPLE1BQU0sSUFBSXlQLFVBQVUsRUFBRTtNQUMzQyxJQUFJdEgsTUFBTSxHQUFHc0gsVUFBVSxDQUFDcFAsU0FBUyxDQUFDO01BQ2xDNWpCLE1BQU0sQ0FBQ2tMLElBQUksQ0FBQzZuQixlQUFlLENBQUMsQ0FBQ3hOLE9BQU8sQ0FBQyxVQUFVM25CLEdBQUcsRUFBRTtRQUNsRCxJQUFJcTFCLFFBQVEsR0FBRyxDQUFDbFEsS0FBSyxFQUFFRCxNQUFNLENBQUMsQ0FBQ3hjLE9BQU8sQ0FBQzFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELElBQUlndEIsSUFBSSxHQUFHLENBQUMvSCxHQUFHLEVBQUVDLE1BQU0sQ0FBQyxDQUFDeGMsT0FBTyxDQUFDMUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBQ3REbTFCLGVBQWUsQ0FBQ24xQixHQUFHLENBQUMsSUFBSTh0QixNQUFNLENBQUNkLElBQUksQ0FBQyxHQUFHcUksUUFBUTtNQUNqRCxDQUFDLENBQUM7SUFDSjtJQUVBLE9BQU9GLGVBQWU7RUFDeEI7RUFFQSxTQUFTRyxvQkFBb0JBLENBQUM3TixLQUFLLEVBQUVTLE9BQU8sRUFBRTtJQUM1QyxJQUFJQSxPQUFPLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFDdEJBLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDZDtJQUVBLElBQUlpTSxRQUFRLEdBQUdqTSxPQUFPO01BQ2xCbEMsU0FBUyxHQUFHbU8sUUFBUSxDQUFDbk8sU0FBUztNQUM5QndOLFFBQVEsR0FBR1csUUFBUSxDQUFDWCxRQUFRO01BQzVCQyxZQUFZLEdBQUdVLFFBQVEsQ0FBQ1YsWUFBWTtNQUNwQ2hILE9BQU8sR0FBRzBILFFBQVEsQ0FBQzFILE9BQU87TUFDMUI4SSxjQUFjLEdBQUdwQixRQUFRLENBQUNvQixjQUFjO01BQ3hDQyxxQkFBcUIsR0FBR3JCLFFBQVEsQ0FBQ3NCLHFCQUFxQjtNQUN0REEscUJBQXFCLEdBQUdELHFCQUFxQixLQUFLLEtBQUssQ0FBQyxHQUFHdlAsVUFBVSxHQUFHdVAscUJBQXFCO0lBQ2pHLElBQUkxRyxTQUFTLEdBQUdULFlBQVksQ0FBQ3JJLFNBQVMsQ0FBQztJQUN2QyxJQUFJMFAsWUFBWSxHQUFHNUcsU0FBUyxHQUFHeUcsY0FBYyxHQUFHMVAsbUJBQW1CLEdBQUdBLG1CQUFtQixDQUFDOVUsTUFBTSxDQUFDLFVBQVVpVixTQUFTLEVBQUU7TUFDcEgsT0FBT3FJLFlBQVksQ0FBQ3JJLFNBQVMsQ0FBQyxLQUFLOEksU0FBUztJQUM5QyxDQUFDLENBQUMsR0FBR3hKLGNBQWM7SUFDbkIsSUFBSXFRLGlCQUFpQixHQUFHRCxZQUFZLENBQUMza0IsTUFBTSxDQUFDLFVBQVVpVixTQUFTLEVBQUU7TUFDL0QsT0FBT3lQLHFCQUFxQixDQUFDL3NCLE9BQU8sQ0FBQ3NkLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDdEQsQ0FBQyxDQUFDO0lBRUYsSUFBSTJQLGlCQUFpQixDQUFDMXhCLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDbEMweEIsaUJBQWlCLEdBQUdELFlBQVk7SUFDbEMsQ0FBQyxDQUFDOztJQUdGLElBQUlFLFNBQVMsR0FBR0QsaUJBQWlCLENBQUM3UCxNQUFNLENBQUMsVUFBVUMsR0FBRyxFQUFFQyxTQUFTLEVBQUU7TUFDakVELEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLEdBQUdrTyxjQUFjLENBQUN6TSxLQUFLLEVBQUU7UUFDckN6QixTQUFTLEVBQUVBLFNBQVM7UUFDcEJ3TixRQUFRLEVBQUVBLFFBQVE7UUFDbEJDLFlBQVksRUFBRUEsWUFBWTtRQUMxQmhILE9BQU8sRUFBRUE7TUFDWCxDQUFDLENBQUMsQ0FBQzNELGdCQUFnQixDQUFDOUMsU0FBUyxDQUFDLENBQUM7TUFDL0IsT0FBT0QsR0FBRztJQUNaLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNOLE9BQU8zakIsTUFBTSxDQUFDa0wsSUFBSSxDQUFDc29CLFNBQVMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBVUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFDakQsT0FBT0gsU0FBUyxDQUFDRSxDQUFDLENBQUMsR0FBR0YsU0FBUyxDQUFDRyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxTQUFTQyw2QkFBNkJBLENBQUNoUSxTQUFTLEVBQUU7SUFDaEQsSUFBSThDLGdCQUFnQixDQUFDOUMsU0FBUyxDQUFDLEtBQUtYLElBQUksRUFBRTtNQUN4QyxPQUFPLEVBQUU7SUFDWDtJQUVBLElBQUk0USxpQkFBaUIsR0FBRy9FLG9CQUFvQixDQUFDbEwsU0FBUyxDQUFDO0lBQ3ZELE9BQU8sQ0FBQ3FMLDZCQUE2QixDQUFDckwsU0FBUyxDQUFDLEVBQUVpUSxpQkFBaUIsRUFBRTVFLDZCQUE2QixDQUFDNEUsaUJBQWlCLENBQUMsQ0FBQztFQUN4SDtFQUVBLFNBQVNDLElBQUlBLENBQUMxTyxJQUFJLEVBQUU7SUFDbEIsSUFBSUMsS0FBSyxHQUFHRCxJQUFJLENBQUNDLEtBQUs7TUFDbEJTLE9BQU8sR0FBR1YsSUFBSSxDQUFDVSxPQUFPO01BQ3RCdGhCLElBQUksR0FBRzRnQixJQUFJLENBQUM1Z0IsSUFBSTtJQUVwQixJQUFJNmdCLEtBQUssQ0FBQ3FGLGFBQWEsQ0FBQ2xtQixJQUFJLENBQUMsQ0FBQ3V2QixLQUFLLEVBQUU7TUFDbkM7SUFDRjtJQUVBLElBQUlDLGlCQUFpQixHQUFHbE8sT0FBTyxDQUFDK0wsUUFBUTtNQUNwQ29DLGFBQWEsR0FBR0QsaUJBQWlCLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHQSxpQkFBaUI7TUFDdkVFLGdCQUFnQixHQUFHcE8sT0FBTyxDQUFDcU8sT0FBTztNQUNsQ0MsWUFBWSxHQUFHRixnQkFBZ0IsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUdBLGdCQUFnQjtNQUNwRUcsMkJBQTJCLEdBQUd2TyxPQUFPLENBQUN3TyxrQkFBa0I7TUFDeERqSyxPQUFPLEdBQUd2RSxPQUFPLENBQUN1RSxPQUFPO01BQ3pCK0csUUFBUSxHQUFHdEwsT0FBTyxDQUFDc0wsUUFBUTtNQUMzQkMsWUFBWSxHQUFHdkwsT0FBTyxDQUFDdUwsWUFBWTtNQUNuQ2tCLFdBQVcsR0FBR3pNLE9BQU8sQ0FBQ3lNLFdBQVc7TUFDakNnQyxxQkFBcUIsR0FBR3pPLE9BQU8sQ0FBQ3FOLGNBQWM7TUFDOUNBLGNBQWMsR0FBR29CLHFCQUFxQixLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBR0EscUJBQXFCO01BQ2hGbEIscUJBQXFCLEdBQUd2TixPQUFPLENBQUN1TixxQkFBcUI7SUFDekQsSUFBSW1CLGtCQUFrQixHQUFHblAsS0FBSyxDQUFDUyxPQUFPLENBQUNsQyxTQUFTO0lBQ2hELElBQUkrRyxhQUFhLEdBQUdqRSxnQkFBZ0IsQ0FBQzhOLGtCQUFrQixDQUFDO0lBQ3hELElBQUlDLGVBQWUsR0FBRzlKLGFBQWEsS0FBSzZKLGtCQUFrQjtJQUMxRCxJQUFJRixrQkFBa0IsR0FBR0QsMkJBQTJCLEtBQUtJLGVBQWUsSUFBSSxDQUFDdEIsY0FBYyxHQUFHLENBQUNyRSxvQkFBb0IsQ0FBQzBGLGtCQUFrQixDQUFDLENBQUMsR0FBR1osNkJBQTZCLENBQUNZLGtCQUFrQixDQUFDLENBQUM7SUFDN0wsSUFBSTNRLFVBQVUsR0FBRyxDQUFDMlEsa0JBQWtCLENBQUMsQ0FBQzUwQixNQUFNLENBQUMwMEIsa0JBQWtCLENBQUMsQ0FBQzVRLE1BQU0sQ0FBQyxVQUFVQyxHQUFHLEVBQUVDLFNBQVMsRUFBRTtNQUNoRyxPQUFPRCxHQUFHLENBQUMvakIsTUFBTSxDQUFDOG1CLGdCQUFnQixDQUFDOUMsU0FBUyxDQUFDLEtBQUtYLElBQUksR0FBR2lRLG9CQUFvQixDQUFDN04sS0FBSyxFQUFFO1FBQ25GekIsU0FBUyxFQUFFQSxTQUFTO1FBQ3BCd04sUUFBUSxFQUFFQSxRQUFRO1FBQ2xCQyxZQUFZLEVBQUVBLFlBQVk7UUFDMUJoSCxPQUFPLEVBQUVBLE9BQU87UUFDaEI4SSxjQUFjLEVBQUVBLGNBQWM7UUFDOUJFLHFCQUFxQixFQUFFQTtNQUN6QixDQUFDLENBQUMsR0FBR3pQLFNBQVMsQ0FBQztJQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ04sSUFBSThRLGFBQWEsR0FBR3JQLEtBQUssQ0FBQ2lGLEtBQUssQ0FBQzlHLFNBQVM7SUFDekMsSUFBSWlKLFVBQVUsR0FBR3BILEtBQUssQ0FBQ2lGLEtBQUssQ0FBQy9HLE1BQU07SUFDbkMsSUFBSW9SLFNBQVMsR0FBRyxJQUFJMW5CLEdBQUcsRUFBRTtJQUN6QixJQUFJMm5CLGtCQUFrQixHQUFHLElBQUk7SUFDN0IsSUFBSUMscUJBQXFCLEdBQUdoUixVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRXpDLEtBQUssSUFBSWlSLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2pSLFVBQVUsQ0FBQ2hpQixNQUFNLEVBQUVpekIsQ0FBQyxFQUFFLEVBQUU7TUFDMUMsSUFBSWxSLFNBQVMsR0FBR0MsVUFBVSxDQUFDaVIsQ0FBQyxDQUFDO01BRTdCLElBQUlDLGNBQWMsR0FBR3JPLGdCQUFnQixDQUFDOUMsU0FBUyxDQUFDO01BRWhELElBQUlvUixnQkFBZ0IsR0FBRy9JLFlBQVksQ0FBQ3JJLFNBQVMsQ0FBQyxLQUFLVCxLQUFLO01BQ3hELElBQUkwSCxVQUFVLEdBQUcsQ0FBQ2hJLEdBQUcsRUFBRUMsTUFBTSxDQUFDLENBQUN4YyxPQUFPLENBQUN5dUIsY0FBYyxDQUFDLElBQUksQ0FBQztNQUMzRCxJQUFJakssR0FBRyxHQUFHRCxVQUFVLEdBQUcsT0FBTyxHQUFHLFFBQVE7TUFDekMsSUFBSXFGLFFBQVEsR0FBRzRCLGNBQWMsQ0FBQ3pNLEtBQUssRUFBRTtRQUNuQ3pCLFNBQVMsRUFBRUEsU0FBUztRQUNwQndOLFFBQVEsRUFBRUEsUUFBUTtRQUNsQkMsWUFBWSxFQUFFQSxZQUFZO1FBQzFCa0IsV0FBVyxFQUFFQSxXQUFXO1FBQ3hCbEksT0FBTyxFQUFFQTtNQUNYLENBQUMsQ0FBQztNQUNGLElBQUk0SyxpQkFBaUIsR0FBR3BLLFVBQVUsR0FBR21LLGdCQUFnQixHQUFHalMsS0FBSyxHQUFHQyxJQUFJLEdBQUdnUyxnQkFBZ0IsR0FBR2xTLE1BQU0sR0FBR0QsR0FBRztNQUV0RyxJQUFJNlIsYUFBYSxDQUFDNUosR0FBRyxDQUFDLEdBQUcyQixVQUFVLENBQUMzQixHQUFHLENBQUMsRUFBRTtRQUN4Q21LLGlCQUFpQixHQUFHbkcsb0JBQW9CLENBQUNtRyxpQkFBaUIsQ0FBQztNQUM3RDtNQUVBLElBQUlDLGdCQUFnQixHQUFHcEcsb0JBQW9CLENBQUNtRyxpQkFBaUIsQ0FBQztNQUM5RCxJQUFJRSxNQUFNLEdBQUcsRUFBRTtNQUVmLElBQUlsQixhQUFhLEVBQUU7UUFDakJrQixNQUFNLENBQUNqeEIsSUFBSSxDQUFDZ3NCLFFBQVEsQ0FBQzZFLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUM1QztNQUVBLElBQUlYLFlBQVksRUFBRTtRQUNoQmUsTUFBTSxDQUFDanhCLElBQUksQ0FBQ2dzQixRQUFRLENBQUMrRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRS9FLFFBQVEsQ0FBQ2dGLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO01BQ2hGO01BRUEsSUFBSUMsTUFBTSxDQUFDQyxLQUFLLENBQUMsVUFBVUMsS0FBSyxFQUFFO1FBQ2hDLE9BQU9BLEtBQUs7TUFDZCxDQUFDLENBQUMsRUFBRTtRQUNGUixxQkFBcUIsR0FBR2pSLFNBQVM7UUFDakNnUixrQkFBa0IsR0FBRyxLQUFLO1FBQzFCO01BQ0Y7TUFFQUQsU0FBUyxDQUFDeG5CLEdBQUcsQ0FBQ3lXLFNBQVMsRUFBRXVSLE1BQU0sQ0FBQztJQUNsQztJQUVBLElBQUlQLGtCQUFrQixFQUFFO01BQ3RCO01BQ0EsSUFBSVUsY0FBYyxHQUFHbkMsY0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDO01BRTNDLElBQUlvQyxLQUFLLEdBQUcsU0FBU0EsS0FBS0EsQ0FBQ0MsRUFBRSxFQUFFO1FBQzdCLElBQUlDLGdCQUFnQixHQUFHNVIsVUFBVSxDQUFDN2EsSUFBSSxDQUFDLFVBQVU0YSxTQUFTLEVBQUU7VUFDMUQsSUFBSXVSLE1BQU0sR0FBR1IsU0FBUyxDQUFDNW5CLEdBQUcsQ0FBQzZXLFNBQVMsQ0FBQztVQUVyQyxJQUFJdVIsTUFBTSxFQUFFO1lBQ1YsT0FBT0EsTUFBTSxDQUFDN3BCLEtBQUssQ0FBQyxDQUFDLEVBQUVrcUIsRUFBRSxDQUFDLENBQUNKLEtBQUssQ0FBQyxVQUFVQyxLQUFLLEVBQUU7Y0FDaEQsT0FBT0EsS0FBSztZQUNkLENBQUMsQ0FBQztVQUNKO1FBQ0YsQ0FBQyxDQUFDO1FBRUYsSUFBSUksZ0JBQWdCLEVBQUU7VUFDcEJaLHFCQUFxQixHQUFHWSxnQkFBZ0I7VUFDeEMsT0FBTyxPQUFPO1FBQ2hCO01BQ0YsQ0FBQztNQUVELEtBQUssSUFBSUQsRUFBRSxHQUFHRixjQUFjLEVBQUVFLEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsRUFBRSxFQUFFO1FBQzFDLElBQUlFLElBQUksR0FBR0gsS0FBSyxDQUFDQyxFQUFFLENBQUM7UUFFcEIsSUFBSUUsSUFBSSxLQUFLLE9BQU8sRUFBRTtNQUN4QjtJQUNGO0lBRUEsSUFBSXJRLEtBQUssQ0FBQ3pCLFNBQVMsS0FBS2lSLHFCQUFxQixFQUFFO01BQzdDeFAsS0FBSyxDQUFDcUYsYUFBYSxDQUFDbG1CLElBQUksQ0FBQyxDQUFDdXZCLEtBQUssR0FBRyxJQUFJO01BQ3RDMU8sS0FBSyxDQUFDekIsU0FBUyxHQUFHaVIscUJBQXFCO01BQ3ZDeFAsS0FBSyxDQUFDc1EsS0FBSyxHQUFHLElBQUk7SUFDcEI7RUFDRixDQUFDLENBQUM7O0VBR0YsSUFBTUMsTUFBTSxHQUFHO0lBQ2JweEIsSUFBSSxFQUFFLE1BQU07SUFDWjhoQixPQUFPLEVBQUUsSUFBSTtJQUNiQyxLQUFLLEVBQUUsTUFBTTtJQUNiNWhCLEVBQUUsRUFBRW12QixJQUFJO0lBQ1I5SCxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUM1QnRYLElBQUksRUFBRTtNQUNKcWYsS0FBSyxFQUFFO0lBQ1Q7RUFDRixDQUFDO0VBRUQsU0FBUzhCLGNBQWNBLENBQUMzRixRQUFRLEVBQUVRLElBQUksRUFBRW9GLGdCQUFnQixFQUFFO0lBQ3hELElBQUlBLGdCQUFnQixLQUFLLEtBQUssQ0FBQyxFQUFFO01BQy9CQSxnQkFBZ0IsR0FBRztRQUNqQi9OLENBQUMsRUFBRSxDQUFDO1FBQ0pFLENBQUMsRUFBRTtNQUNMLENBQUM7SUFDSDtJQUVBLE9BQU87TUFDTHBGLEdBQUcsRUFBRXFOLFFBQVEsQ0FBQ3JOLEdBQUcsR0FBRzZOLElBQUksQ0FBQzlJLE1BQU0sR0FBR2tPLGdCQUFnQixDQUFDN04sQ0FBQztNQUNwRGxGLEtBQUssRUFBRW1OLFFBQVEsQ0FBQ25OLEtBQUssR0FBRzJOLElBQUksQ0FBQy9JLEtBQUssR0FBR21PLGdCQUFnQixDQUFDL04sQ0FBQztNQUN2RGpGLE1BQU0sRUFBRW9OLFFBQVEsQ0FBQ3BOLE1BQU0sR0FBRzROLElBQUksQ0FBQzlJLE1BQU0sR0FBR2tPLGdCQUFnQixDQUFDN04sQ0FBQztNQUMxRGpGLElBQUksRUFBRWtOLFFBQVEsQ0FBQ2xOLElBQUksR0FBRzBOLElBQUksQ0FBQy9JLEtBQUssR0FBR21PLGdCQUFnQixDQUFDL047SUFDdEQsQ0FBQztFQUNIO0VBRUEsU0FBU2dPLHFCQUFxQkEsQ0FBQzdGLFFBQVEsRUFBRTtJQUN2QyxPQUFPLENBQUNyTixHQUFHLEVBQUVFLEtBQUssRUFBRUQsTUFBTSxFQUFFRSxJQUFJLENBQUMsQ0FBQ2dULElBQUksQ0FBQyxVQUFVQyxJQUFJLEVBQUU7TUFDckQsT0FBTy9GLFFBQVEsQ0FBQytGLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxTQUFTaFYsSUFBSUEsQ0FBQ21FLElBQUksRUFBRTtJQUNsQixJQUFJQyxLQUFLLEdBQUdELElBQUksQ0FBQ0MsS0FBSztNQUNsQjdnQixJQUFJLEdBQUc0Z0IsSUFBSSxDQUFDNWdCLElBQUk7SUFDcEIsSUFBSWt3QixhQUFhLEdBQUdyUCxLQUFLLENBQUNpRixLQUFLLENBQUM5RyxTQUFTO0lBQ3pDLElBQUlpSixVQUFVLEdBQUdwSCxLQUFLLENBQUNpRixLQUFLLENBQUMvRyxNQUFNO0lBQ25DLElBQUl1UyxnQkFBZ0IsR0FBR3pRLEtBQUssQ0FBQ3FGLGFBQWEsQ0FBQ3dMLGVBQWU7SUFDMUQsSUFBSUMsaUJBQWlCLEdBQUdyRSxjQUFjLENBQUN6TSxLQUFLLEVBQUU7TUFDNUNnTixjQUFjLEVBQUU7SUFDbEIsQ0FBQyxDQUFDO0lBQ0YsSUFBSStELGlCQUFpQixHQUFHdEUsY0FBYyxDQUFDek0sS0FBSyxFQUFFO01BQzVDa04sV0FBVyxFQUFFO0lBQ2YsQ0FBQyxDQUFDO0lBQ0YsSUFBSThELHdCQUF3QixHQUFHUixjQUFjLENBQUNNLGlCQUFpQixFQUFFekIsYUFBYSxDQUFDO0lBQy9FLElBQUk0QixtQkFBbUIsR0FBR1QsY0FBYyxDQUFDTyxpQkFBaUIsRUFBRTNKLFVBQVUsRUFBRXFKLGdCQUFnQixDQUFDO0lBQ3pGLElBQUlTLGlCQUFpQixHQUFHUixxQkFBcUIsQ0FBQ00sd0JBQXdCLENBQUM7SUFDdkUsSUFBSUcsZ0JBQWdCLEdBQUdULHFCQUFxQixDQUFDTyxtQkFBbUIsQ0FBQztJQUNqRWpSLEtBQUssQ0FBQ3FGLGFBQWEsQ0FBQ2xtQixJQUFJLENBQUMsR0FBRztNQUMxQjZ4Qix3QkFBd0IsRUFBRUEsd0JBQXdCO01BQ2xEQyxtQkFBbUIsRUFBRUEsbUJBQW1CO01BQ3hDQyxpQkFBaUIsRUFBRUEsaUJBQWlCO01BQ3BDQyxnQkFBZ0IsRUFBRUE7SUFDcEIsQ0FBQztJQUNEblIsS0FBSyxDQUFDN1csVUFBVSxDQUFDK1UsTUFBTSxHQUFHdmpCLE1BQU0sQ0FBQ3lsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVKLEtBQUssQ0FBQzdXLFVBQVUsQ0FBQytVLE1BQU0sRUFBRTtNQUNuRSw4QkFBOEIsRUFBRWdULGlCQUFpQjtNQUNqRCxxQkFBcUIsRUFBRUM7SUFDekIsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDOztFQUdGLElBQU1DLE1BQU0sR0FBRztJQUNianlCLElBQUksRUFBRSxNQUFNO0lBQ1o4aEIsT0FBTyxFQUFFLElBQUk7SUFDYkMsS0FBSyxFQUFFLE1BQU07SUFDYnlGLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCLENBQUM7SUFDckNybkIsRUFBRSxFQUFFc2M7RUFDTixDQUFDO0VBRUQsU0FBU3lWLHVCQUF1QkEsQ0FBQzlTLFNBQVMsRUFBRTBHLEtBQUssRUFBRW9CLE1BQU0sRUFBRTtJQUN6RCxJQUFJZixhQUFhLEdBQUdqRSxnQkFBZ0IsQ0FBQzlDLFNBQVMsQ0FBQztJQUMvQyxJQUFJK1MsY0FBYyxHQUFHLENBQUMzVCxJQUFJLEVBQUVILEdBQUcsQ0FBQyxDQUFDdmMsT0FBTyxDQUFDcWtCLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBRXJFLElBQUl2RixJQUFJLEdBQUcsT0FBT3NHLE1BQU0sS0FBSyxVQUFVLEdBQUdBLE1BQU0sQ0FBQzFyQixNQUFNLENBQUN5bEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFNkUsS0FBSyxFQUFFO1FBQ3hFMUcsU0FBUyxFQUFFQTtNQUNiLENBQUMsQ0FBQyxDQUFDLEdBQUc4SCxNQUFNO01BQ1JrTCxRQUFRLEdBQUd4UixJQUFJLENBQUMsQ0FBQyxDQUFDO01BQ2xCeVIsUUFBUSxHQUFHelIsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUV0QndSLFFBQVEsR0FBR0EsUUFBUSxJQUFJLENBQUM7SUFDeEJDLFFBQVEsR0FBRyxDQUFDQSxRQUFRLElBQUksQ0FBQyxJQUFJRixjQUFjO0lBQzNDLE9BQU8sQ0FBQzNULElBQUksRUFBRUQsS0FBSyxDQUFDLENBQUN6YyxPQUFPLENBQUNxa0IsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHO01BQ2pENUMsQ0FBQyxFQUFFOE8sUUFBUTtNQUNYNU8sQ0FBQyxFQUFFMk87SUFDTCxDQUFDLEdBQUc7TUFDRjdPLENBQUMsRUFBRTZPLFFBQVE7TUFDWDNPLENBQUMsRUFBRTRPO0lBQ0wsQ0FBQztFQUNIO0VBRUEsU0FBU25MLE1BQU1BLENBQUMvRixLQUFLLEVBQUU7SUFDckIsSUFBSU4sS0FBSyxHQUFHTSxLQUFLLENBQUNOLEtBQUs7TUFDbkJTLE9BQU8sR0FBR0gsS0FBSyxDQUFDRyxPQUFPO01BQ3ZCdGhCLElBQUksR0FBR21oQixLQUFLLENBQUNuaEIsSUFBSTtJQUNyQixJQUFJc3lCLGVBQWUsR0FBR2hSLE9BQU8sQ0FBQzRGLE1BQU07TUFDaENBLE1BQU0sR0FBR29MLGVBQWUsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBR0EsZUFBZTtJQUNsRSxJQUFJcGlCLElBQUksR0FBR21QLFVBQVUsQ0FBQ0gsTUFBTSxDQUFDLFVBQVVDLEdBQUcsRUFBRUMsU0FBUyxFQUFFO01BQ3JERCxHQUFHLENBQUNDLFNBQVMsQ0FBQyxHQUFHOFMsdUJBQXVCLENBQUM5UyxTQUFTLEVBQUV5QixLQUFLLENBQUNpRixLQUFLLEVBQUVvQixNQUFNLENBQUM7TUFDeEUsT0FBTy9ILEdBQUc7SUFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDTixJQUFJb1QscUJBQXFCLEdBQUdyaUIsSUFBSSxDQUFDMlEsS0FBSyxDQUFDekIsU0FBUyxDQUFDO01BQzdDbUUsQ0FBQyxHQUFHZ1AscUJBQXFCLENBQUNoUCxDQUFDO01BQzNCRSxDQUFDLEdBQUc4TyxxQkFBcUIsQ0FBQzlPLENBQUM7SUFFL0IsSUFBSTVDLEtBQUssQ0FBQ3FGLGFBQWEsQ0FBQ0QsYUFBYSxJQUFJLElBQUksRUFBRTtNQUM3Q3BGLEtBQUssQ0FBQ3FGLGFBQWEsQ0FBQ0QsYUFBYSxDQUFDMUMsQ0FBQyxJQUFJQSxDQUFDO01BQ3hDMUMsS0FBSyxDQUFDcUYsYUFBYSxDQUFDRCxhQUFhLENBQUN4QyxDQUFDLElBQUlBLENBQUM7SUFDMUM7SUFFQTVDLEtBQUssQ0FBQ3FGLGFBQWEsQ0FBQ2xtQixJQUFJLENBQUMsR0FBR2tRLElBQUk7RUFDbEMsQ0FBQyxDQUFDOztFQUdGLElBQU1zaUIsUUFBUSxHQUFHO0lBQ2Z4eUIsSUFBSSxFQUFFLFFBQVE7SUFDZDhoQixPQUFPLEVBQUUsSUFBSTtJQUNiQyxLQUFLLEVBQUUsTUFBTTtJQUNiRSxRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUM7SUFDM0I5aEIsRUFBRSxFQUFFK21CO0VBQ04sQ0FBQztFQUVELFNBQVNqQixhQUFhQSxDQUFDckYsSUFBSSxFQUFFO0lBQzNCLElBQUlDLEtBQUssR0FBR0QsSUFBSSxDQUFDQyxLQUFLO01BQ2xCN2dCLElBQUksR0FBRzRnQixJQUFJLENBQUM1Z0IsSUFBSTtJQUNwQjtJQUNBO0lBQ0E7SUFDQTtJQUNBNmdCLEtBQUssQ0FBQ3FGLGFBQWEsQ0FBQ2xtQixJQUFJLENBQUMsR0FBR2t0QixjQUFjLENBQUM7TUFDekNsTyxTQUFTLEVBQUU2QixLQUFLLENBQUNpRixLQUFLLENBQUM5RyxTQUFTO01BQ2hDemxCLE9BQU8sRUFBRXNuQixLQUFLLENBQUNpRixLQUFLLENBQUMvRyxNQUFNO01BQzNCd0MsUUFBUSxFQUFFLFVBQVU7TUFDcEJuQyxTQUFTLEVBQUV5QixLQUFLLENBQUN6QjtJQUNuQixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7O0VBR0YsSUFBTXFULGVBQWUsR0FBRztJQUN0Qnp5QixJQUFJLEVBQUUsZUFBZTtJQUNyQjhoQixPQUFPLEVBQUUsSUFBSTtJQUNiQyxLQUFLLEVBQUUsTUFBTTtJQUNiNWhCLEVBQUUsRUFBRThsQixhQUFhO0lBQ2pCL1YsSUFBSSxFQUFFLENBQUM7RUFDVCxDQUFDO0VBRUQsU0FBU3dpQixVQUFVQSxDQUFDdE0sSUFBSSxFQUFFO0lBQ3hCLE9BQU9BLElBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7RUFDakM7RUFFQSxTQUFTc0wsZUFBZUEsQ0FBQzlRLElBQUksRUFBRTtJQUM3QixJQUFJQyxLQUFLLEdBQUdELElBQUksQ0FBQ0MsS0FBSztNQUNsQlMsT0FBTyxHQUFHVixJQUFJLENBQUNVLE9BQU87TUFDdEJ0aEIsSUFBSSxHQUFHNGdCLElBQUksQ0FBQzVnQixJQUFJO0lBQ3BCLElBQUl3dkIsaUJBQWlCLEdBQUdsTyxPQUFPLENBQUMrTCxRQUFRO01BQ3BDb0MsYUFBYSxHQUFHRCxpQkFBaUIsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUdBLGlCQUFpQjtNQUN2RUUsZ0JBQWdCLEdBQUdwTyxPQUFPLENBQUNxTyxPQUFPO01BQ2xDQyxZQUFZLEdBQUdGLGdCQUFnQixLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBR0EsZ0JBQWdCO01BQ3JFOUMsUUFBUSxHQUFHdEwsT0FBTyxDQUFDc0wsUUFBUTtNQUMzQkMsWUFBWSxHQUFHdkwsT0FBTyxDQUFDdUwsWUFBWTtNQUNuQ2tCLFdBQVcsR0FBR3pNLE9BQU8sQ0FBQ3lNLFdBQVc7TUFDakNsSSxPQUFPLEdBQUd2RSxPQUFPLENBQUN1RSxPQUFPO01BQ3pCOE0sZUFBZSxHQUFHclIsT0FBTyxDQUFDc1IsTUFBTTtNQUNoQ0EsTUFBTSxHQUFHRCxlQUFlLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHQSxlQUFlO01BQzVERSxxQkFBcUIsR0FBR3ZSLE9BQU8sQ0FBQ3dSLFlBQVk7TUFDNUNBLFlBQVksR0FBR0QscUJBQXFCLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxxQkFBcUI7SUFDL0UsSUFBSW5ILFFBQVEsR0FBRzRCLGNBQWMsQ0FBQ3pNLEtBQUssRUFBRTtNQUNuQytMLFFBQVEsRUFBRUEsUUFBUTtNQUNsQkMsWUFBWSxFQUFFQSxZQUFZO01BQzFCaEgsT0FBTyxFQUFFQSxPQUFPO01BQ2hCa0ksV0FBVyxFQUFFQTtJQUNmLENBQUMsQ0FBQztJQUNGLElBQUk1SCxhQUFhLEdBQUdqRSxnQkFBZ0IsQ0FBQ3JCLEtBQUssQ0FBQ3pCLFNBQVMsQ0FBQztJQUNyRCxJQUFJOEksU0FBUyxHQUFHVCxZQUFZLENBQUM1RyxLQUFLLENBQUN6QixTQUFTLENBQUM7SUFDN0MsSUFBSTZRLGVBQWUsR0FBRyxDQUFDL0gsU0FBUztJQUNoQyxJQUFJbUYsUUFBUSxHQUFHcEksd0JBQXdCLENBQUNrQixhQUFhLENBQUM7SUFDdEQsSUFBSXdKLE9BQU8sR0FBRytDLFVBQVUsQ0FBQ3JGLFFBQVEsQ0FBQztJQUNsQyxJQUFJcEgsYUFBYSxHQUFHcEYsS0FBSyxDQUFDcUYsYUFBYSxDQUFDRCxhQUFhO0lBQ3JELElBQUlpSyxhQUFhLEdBQUdyUCxLQUFLLENBQUNpRixLQUFLLENBQUM5RyxTQUFTO0lBQ3pDLElBQUlpSixVQUFVLEdBQUdwSCxLQUFLLENBQUNpRixLQUFLLENBQUMvRyxNQUFNO0lBQ25DLElBQUlnVSxpQkFBaUIsR0FBRyxPQUFPRCxZQUFZLEtBQUssVUFBVSxHQUFHQSxZQUFZLENBQUN0M0IsTUFBTSxDQUFDeWxCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRUosS0FBSyxDQUFDaUYsS0FBSyxFQUFFO01BQ3ZHMUcsU0FBUyxFQUFFeUIsS0FBSyxDQUFDekI7SUFDbkIsQ0FBQyxDQUFDLENBQUMsR0FBRzBULFlBQVk7SUFDbEIsSUFBSUUsMkJBQTJCLEdBQUcsT0FBT0QsaUJBQWlCLEtBQUssUUFBUSxHQUFHO01BQ3hFMUYsUUFBUSxFQUFFMEYsaUJBQWlCO01BQzNCcEQsT0FBTyxFQUFFb0Q7SUFDWCxDQUFDLEdBQUd2M0IsTUFBTSxDQUFDeWxCLE1BQU0sQ0FBQztNQUNoQm9NLFFBQVEsRUFBRSxDQUFDO01BQ1hzQyxPQUFPLEVBQUU7SUFDWCxDQUFDLEVBQUVvRCxpQkFBaUIsQ0FBQztJQUNyQixJQUFJRSxtQkFBbUIsR0FBR3BTLEtBQUssQ0FBQ3FGLGFBQWEsQ0FBQ2dCLE1BQU0sR0FBR3JHLEtBQUssQ0FBQ3FGLGFBQWEsQ0FBQ2dCLE1BQU0sQ0FBQ3JHLEtBQUssQ0FBQ3pCLFNBQVMsQ0FBQyxHQUFHLElBQUk7SUFDekcsSUFBSWxQLElBQUksR0FBRztNQUNUcVQsQ0FBQyxFQUFFLENBQUM7TUFDSkUsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUVELElBQUksQ0FBQ3dDLGFBQWEsRUFBRTtNQUNsQjtJQUNGO0lBRUEsSUFBSXdKLGFBQWEsRUFBRTtNQUNqQixJQUFJeUQscUJBQXFCO01BRXpCLElBQUlDLFFBQVEsR0FBRzlGLFFBQVEsS0FBSyxHQUFHLEdBQUdoUCxHQUFHLEdBQUdHLElBQUk7TUFDNUMsSUFBSTRVLE9BQU8sR0FBRy9GLFFBQVEsS0FBSyxHQUFHLEdBQUcvTyxNQUFNLEdBQUdDLEtBQUs7TUFDL0MsSUFBSStILEdBQUcsR0FBRytHLFFBQVEsS0FBSyxHQUFHLEdBQUcsUUFBUSxHQUFHLE9BQU87TUFDL0MsSUFBSW5HLE1BQU0sR0FBR2pCLGFBQWEsQ0FBQ29ILFFBQVEsQ0FBQztNQUNwQyxJQUFJbEksS0FBSyxHQUFHK0IsTUFBTSxHQUFHd0UsUUFBUSxDQUFDeUgsUUFBUSxDQUFDO01BQ3ZDLElBQUkvTixLQUFLLEdBQUc4QixNQUFNLEdBQUd3RSxRQUFRLENBQUMwSCxPQUFPLENBQUM7TUFDdEMsSUFBSUMsUUFBUSxHQUFHVCxNQUFNLEdBQUcsQ0FBQzNLLFVBQVUsQ0FBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO01BQ2hELElBQUlnTixNQUFNLEdBQUdwTCxTQUFTLEtBQUt2SixLQUFLLEdBQUd1UixhQUFhLENBQUM1SixHQUFHLENBQUMsR0FBRzJCLFVBQVUsQ0FBQzNCLEdBQUcsQ0FBQztNQUN2RSxJQUFJaU4sTUFBTSxHQUFHckwsU0FBUyxLQUFLdkosS0FBSyxHQUFHLENBQUNzSixVQUFVLENBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDNEosYUFBYSxDQUFDNUosR0FBRyxDQUFDLENBQUMsQ0FBQztNQUMzRTs7TUFFQSxJQUFJTixZQUFZLEdBQUduRixLQUFLLENBQUNDLFFBQVEsQ0FBQ1csS0FBSztNQUN2QyxJQUFJOEUsU0FBUyxHQUFHcU0sTUFBTSxJQUFJNU0sWUFBWSxHQUFHckMsYUFBYSxDQUFDcUMsWUFBWSxDQUFDLEdBQUc7UUFDckU3QyxLQUFLLEVBQUUsQ0FBQztRQUNSQyxNQUFNLEVBQUU7TUFDVixDQUFDO01BQ0QsSUFBSW9RLGtCQUFrQixHQUFHM1MsS0FBSyxDQUFDcUYsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEdBQUdyRixLQUFLLENBQUNxRixhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0wsT0FBTyxHQUFHTixrQkFBa0IsRUFBRTtNQUN6SSxJQUFJa08sZUFBZSxHQUFHRCxrQkFBa0IsQ0FBQ0wsUUFBUSxDQUFDO01BQ2xELElBQUlPLGVBQWUsR0FBR0Ysa0JBQWtCLENBQUNKLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDbkQ7TUFDQTtNQUNBO01BQ0E7O01BRUEsSUFBSU8sUUFBUSxHQUFHek8sTUFBTSxDQUFDLENBQUMsRUFBRWdMLGFBQWEsQ0FBQzVKLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLENBQUNELEdBQUcsQ0FBQyxDQUFDO01BQzVELElBQUlzTixTQUFTLEdBQUczRCxlQUFlLEdBQUdDLGFBQWEsQ0FBQzVKLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRytNLFFBQVEsR0FBR00sUUFBUSxHQUFHRixlQUFlLEdBQUdULDJCQUEyQixDQUFDM0YsUUFBUSxHQUFHaUcsTUFBTSxHQUFHSyxRQUFRLEdBQUdGLGVBQWUsR0FBR1QsMkJBQTJCLENBQUMzRixRQUFRO01BQ3BOLElBQUl3RyxTQUFTLEdBQUc1RCxlQUFlLEdBQUcsQ0FBQ0MsYUFBYSxDQUFDNUosR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHK00sUUFBUSxHQUFHTSxRQUFRLEdBQUdELGVBQWUsR0FBR1YsMkJBQTJCLENBQUMzRixRQUFRLEdBQUdrRyxNQUFNLEdBQUdJLFFBQVEsR0FBR0QsZUFBZSxHQUFHViwyQkFBMkIsQ0FBQzNGLFFBQVE7TUFDck4sSUFBSXpHLGlCQUFpQixHQUFHL0YsS0FBSyxDQUFDQyxRQUFRLENBQUNXLEtBQUssSUFBSXVELGVBQWUsQ0FBQ25FLEtBQUssQ0FBQ0MsUUFBUSxDQUFDVyxLQUFLLENBQUM7TUFDckYsSUFBSXFTLFlBQVksR0FBR2xOLGlCQUFpQixHQUFHeUcsUUFBUSxLQUFLLEdBQUcsR0FBR3pHLGlCQUFpQixDQUFDd0YsU0FBUyxJQUFJLENBQUMsR0FBR3hGLGlCQUFpQixDQUFDeUYsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDO01BQ2xJLElBQUkwSCxtQkFBbUIsR0FBRyxDQUFDYixxQkFBcUIsR0FBR0QsbUJBQW1CLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHQSxtQkFBbUIsQ0FBQzVGLFFBQVEsQ0FBQyxLQUFLLElBQUksR0FBRzZGLHFCQUFxQixHQUFHLENBQUM7TUFDNUosSUFBSWMsU0FBUyxHQUFHOU0sTUFBTSxHQUFHME0sU0FBUyxHQUFHRyxtQkFBbUIsR0FBR0QsWUFBWTtNQUN2RSxJQUFJRyxTQUFTLEdBQUcvTSxNQUFNLEdBQUcyTSxTQUFTLEdBQUdFLG1CQUFtQjtNQUN4RCxJQUFJRyxlQUFlLEdBQUdoUCxNQUFNLENBQUMwTixNQUFNLEdBQUc1d0IsR0FBRyxDQUFDbWpCLEtBQUssRUFBRTZPLFNBQVMsQ0FBQyxHQUFHN08sS0FBSyxFQUFFK0IsTUFBTSxFQUFFMEwsTUFBTSxHQUFHN3dCLEdBQUcsQ0FBQ3FqQixLQUFLLEVBQUU2TyxTQUFTLENBQUMsR0FBRzdPLEtBQUssQ0FBQztNQUNwSGEsYUFBYSxDQUFDb0gsUUFBUSxDQUFDLEdBQUc2RyxlQUFlO01BQ3pDaGtCLElBQUksQ0FBQ21kLFFBQVEsQ0FBQyxHQUFHNkcsZUFBZSxHQUFHaE4sTUFBTTtJQUMzQztJQUVBLElBQUkwSSxZQUFZLEVBQUU7TUFDaEIsSUFBSXVFLHNCQUFzQjtNQUUxQixJQUFJQyxTQUFTLEdBQUcvRyxRQUFRLEtBQUssR0FBRyxHQUFHaFAsR0FBRyxHQUFHRyxJQUFJO01BRTdDLElBQUk2VixRQUFRLEdBQUdoSCxRQUFRLEtBQUssR0FBRyxHQUFHL08sTUFBTSxHQUFHQyxLQUFLO01BRWhELElBQUkrVixPQUFPLEdBQUdyTyxhQUFhLENBQUMwSixPQUFPLENBQUM7TUFFcEMsSUFBSTRFLElBQUksR0FBRzVFLE9BQU8sS0FBSyxHQUFHLEdBQUcsUUFBUSxHQUFHLE9BQU87TUFFL0MsSUFBSTZFLElBQUksR0FBR0YsT0FBTyxHQUFHNUksUUFBUSxDQUFDMEksU0FBUyxDQUFDO01BRXhDLElBQUlLLElBQUksR0FBR0gsT0FBTyxHQUFHNUksUUFBUSxDQUFDMkksUUFBUSxDQUFDO01BRXZDLElBQUlLLFlBQVksR0FBRyxDQUFDclcsR0FBRyxFQUFFRyxJQUFJLENBQUMsQ0FBQzFjLE9BQU8sQ0FBQ3FrQixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7TUFFNUQsSUFBSXdPLG9CQUFvQixHQUFHLENBQUNSLHNCQUFzQixHQUFHbEIsbUJBQW1CLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHQSxtQkFBbUIsQ0FBQ3RELE9BQU8sQ0FBQyxLQUFLLElBQUksR0FBR3dFLHNCQUFzQixHQUFHLENBQUM7TUFFOUosSUFBSVMsVUFBVSxHQUFHRixZQUFZLEdBQUdGLElBQUksR0FBR0YsT0FBTyxHQUFHcEUsYUFBYSxDQUFDcUUsSUFBSSxDQUFDLEdBQUd0TSxVQUFVLENBQUNzTSxJQUFJLENBQUMsR0FBR0ksb0JBQW9CLEdBQUczQiwyQkFBMkIsQ0FBQ3JELE9BQU87TUFFcEosSUFBSWtGLFVBQVUsR0FBR0gsWUFBWSxHQUFHSixPQUFPLEdBQUdwRSxhQUFhLENBQUNxRSxJQUFJLENBQUMsR0FBR3RNLFVBQVUsQ0FBQ3NNLElBQUksQ0FBQyxHQUFHSSxvQkFBb0IsR0FBRzNCLDJCQUEyQixDQUFDckQsT0FBTyxHQUFHOEUsSUFBSTtNQUVwSixJQUFJSyxnQkFBZ0IsR0FBR2xDLE1BQU0sSUFBSThCLFlBQVksR0FBR3JQLGNBQWMsQ0FBQ3VQLFVBQVUsRUFBRU4sT0FBTyxFQUFFTyxVQUFVLENBQUMsR0FBRzNQLE1BQU0sQ0FBQzBOLE1BQU0sR0FBR2dDLFVBQVUsR0FBR0osSUFBSSxFQUFFRixPQUFPLEVBQUUxQixNQUFNLEdBQUdpQyxVQUFVLEdBQUdKLElBQUksQ0FBQztNQUV6S3hPLGFBQWEsQ0FBQzBKLE9BQU8sQ0FBQyxHQUFHbUYsZ0JBQWdCO01BQ3pDNWtCLElBQUksQ0FBQ3lmLE9BQU8sQ0FBQyxHQUFHbUYsZ0JBQWdCLEdBQUdSLE9BQU87SUFDNUM7SUFFQXpULEtBQUssQ0FBQ3FGLGFBQWEsQ0FBQ2xtQixJQUFJLENBQUMsR0FBR2tRLElBQUk7RUFDbEMsQ0FBQyxDQUFDOztFQUdGLElBQU02a0IsaUJBQWlCLEdBQUc7SUFDeEIvMEIsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QjhoQixPQUFPLEVBQUUsSUFBSTtJQUNiQyxLQUFLLEVBQUUsTUFBTTtJQUNiNWhCLEVBQUUsRUFBRXV4QixlQUFlO0lBQ25CbEssZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRO0VBQzdCLENBQUM7RUFFRCxTQUFTd04sb0JBQW9CQSxDQUFDejdCLE9BQU8sRUFBRTtJQUNyQyxPQUFPO01BQ0xveEIsVUFBVSxFQUFFcHhCLE9BQU8sQ0FBQ294QixVQUFVO01BQzlCRSxTQUFTLEVBQUV0eEIsT0FBTyxDQUFDc3hCO0lBQ3JCLENBQUM7RUFDSDtFQUVBLFNBQVNvSyxhQUFhQSxDQUFDOVUsSUFBSSxFQUFFO0lBQzNCLElBQUlBLElBQUksS0FBS0QsU0FBUyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDSyxhQUFhLENBQUNMLElBQUksQ0FBQyxFQUFFO01BQ3BELE9BQU91SyxlQUFlLENBQUN2SyxJQUFJLENBQUM7SUFDOUIsQ0FBQyxNQUFNO01BQ0wsT0FBTzZVLG9CQUFvQixDQUFDN1UsSUFBSSxDQUFDO0lBQ25DO0VBQ0Y7RUFFQSxTQUFTK1UsZUFBZUEsQ0FBQzM3QixPQUFPLEVBQUU7SUFDaEMsSUFBSTJ5QixJQUFJLEdBQUczeUIsT0FBTyxDQUFDa2tCLHFCQUFxQixFQUFFO0lBQzFDLElBQUl1RixNQUFNLEdBQUdiLEtBQUssQ0FBQytKLElBQUksQ0FBQy9JLEtBQUssQ0FBQyxHQUFHNXBCLE9BQU8sQ0FBQzJwQixXQUFXLElBQUksQ0FBQztJQUN6RCxJQUFJRCxNQUFNLEdBQUdkLEtBQUssQ0FBQytKLElBQUksQ0FBQzlJLE1BQU0sQ0FBQyxHQUFHN3BCLE9BQU8sQ0FBQ3dGLFlBQVksSUFBSSxDQUFDO0lBQzNELE9BQU9pa0IsTUFBTSxLQUFLLENBQUMsSUFBSUMsTUFBTSxLQUFLLENBQUM7RUFDckMsQ0FBQyxDQUFDO0VBQ0Y7O0VBR0EsU0FBU2tTLGdCQUFnQkEsQ0FBQ0MsdUJBQXVCLEVBQUUvUSxZQUFZLEVBQUVrRSxPQUFPLEVBQUU7SUFDeEUsSUFBSUEsT0FBTyxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQ3RCQSxPQUFPLEdBQUcsS0FBSztJQUNqQjtJQUVBLElBQUk4TSx1QkFBdUIsR0FBRzdVLGFBQWEsQ0FBQzZELFlBQVksQ0FBQztJQUN6RCxJQUFJaVIsb0JBQW9CLEdBQUc5VSxhQUFhLENBQUM2RCxZQUFZLENBQUMsSUFBSTZRLGVBQWUsQ0FBQzdRLFlBQVksQ0FBQztJQUN2RixJQUFJN2xCLGVBQWUsR0FBR3lsQixrQkFBa0IsQ0FBQ0ksWUFBWSxDQUFDO0lBQ3RELElBQUk2SCxJQUFJLEdBQUd6TyxxQkFBcUIsQ0FBQzJYLHVCQUF1QixFQUFFRSxvQkFBb0IsRUFBRS9NLE9BQU8sQ0FBQztJQUN4RixJQUFJdUIsTUFBTSxHQUFHO01BQ1hhLFVBQVUsRUFBRSxDQUFDO01BQ2JFLFNBQVMsRUFBRTtJQUNiLENBQUM7SUFDRCxJQUFJMUMsT0FBTyxHQUFHO01BQ1o1RSxDQUFDLEVBQUUsQ0FBQztNQUNKRSxDQUFDLEVBQUU7SUFDTCxDQUFDO0lBRUQsSUFBSTRSLHVCQUF1QixJQUFJLENBQUNBLHVCQUF1QixJQUFJLENBQUM5TSxPQUFPLEVBQUU7TUFDbkUsSUFBSXZJLFdBQVcsQ0FBQ3FFLFlBQVksQ0FBQyxLQUFLLE1BQU07TUFBSTtNQUM1Q21ILGNBQWMsQ0FBQ2h0QixlQUFlLENBQUMsRUFBRTtRQUMvQnNyQixNQUFNLEdBQUdtTCxhQUFhLENBQUM1USxZQUFZLENBQUM7TUFDdEM7TUFFQSxJQUFJN0QsYUFBYSxDQUFDNkQsWUFBWSxDQUFDLEVBQUU7UUFDL0I4RCxPQUFPLEdBQUcxSyxxQkFBcUIsQ0FBQzRHLFlBQVksRUFBRSxJQUFJLENBQUM7UUFDbkQ4RCxPQUFPLENBQUM1RSxDQUFDLElBQUljLFlBQVksQ0FBQ2dJLFVBQVU7UUFDcENsRSxPQUFPLENBQUMxRSxDQUFDLElBQUlZLFlBQVksQ0FBQytILFNBQVM7TUFDckMsQ0FBQyxNQUFNLElBQUk1dEIsZUFBZSxFQUFFO1FBQzFCMnBCLE9BQU8sQ0FBQzVFLENBQUMsR0FBR3dILG1CQUFtQixDQUFDdnNCLGVBQWUsQ0FBQztNQUNsRDtJQUNGO0lBRUEsT0FBTztNQUNMK2tCLENBQUMsRUFBRTJJLElBQUksQ0FBQzFOLElBQUksR0FBR3NMLE1BQU0sQ0FBQ2EsVUFBVSxHQUFHeEMsT0FBTyxDQUFDNUUsQ0FBQztNQUM1Q0UsQ0FBQyxFQUFFeUksSUFBSSxDQUFDN04sR0FBRyxHQUFHeUwsTUFBTSxDQUFDZSxTQUFTLEdBQUcxQyxPQUFPLENBQUMxRSxDQUFDO01BQzFDTixLQUFLLEVBQUUrSSxJQUFJLENBQUMvSSxLQUFLO01BQ2pCQyxNQUFNLEVBQUU4SSxJQUFJLENBQUM5STtJQUNmLENBQUM7RUFDSDtFQUVBLFNBQVN0TCxLQUFLQSxDQUFDeWQsU0FBUyxFQUFFO0lBQ3hCLElBQUkvbUIsR0FBRyxHQUFHLElBQUkvRixHQUFHLEVBQUU7SUFDbkIsSUFBSStzQixPQUFPLEdBQUcsSUFBSTl5QixHQUFHLEVBQUU7SUFDdkIsSUFBSSt5QixNQUFNLEdBQUcsRUFBRTtJQUNmRixTQUFTLENBQUN4VSxPQUFPLENBQUMsVUFBVTJVLFFBQVEsRUFBRTtNQUNwQ2xuQixHQUFHLENBQUM3RixHQUFHLENBQUMrc0IsUUFBUSxDQUFDMTFCLElBQUksRUFBRTAxQixRQUFRLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFFSixTQUFTekcsSUFBSUEsQ0FBQ3lHLFFBQVEsRUFBRTtNQUN0QkYsT0FBTyxDQUFDcmlCLEdBQUcsQ0FBQ3VpQixRQUFRLENBQUMxMUIsSUFBSSxDQUFDO01BQzFCLElBQUlpaUIsUUFBUSxHQUFHLEVBQUUsQ0FBQzdtQixNQUFNLENBQUNzNkIsUUFBUSxDQUFDelQsUUFBUSxJQUFJLEVBQUUsRUFBRXlULFFBQVEsQ0FBQ2xPLGdCQUFnQixJQUFJLEVBQUUsQ0FBQztNQUNsRnZGLFFBQVEsQ0FBQ2xCLE9BQU8sQ0FBQyxVQUFVNFUsR0FBRyxFQUFFO1FBQzlCLElBQUksQ0FBQ0gsT0FBTyxDQUFDendCLEdBQUcsQ0FBQzR3QixHQUFHLENBQUMsRUFBRTtVQUNyQixJQUFJQyxXQUFXLEdBQUdwbkIsR0FBRyxDQUFDakcsR0FBRyxDQUFDb3RCLEdBQUcsQ0FBQztVQUU5QixJQUFJQyxXQUFXLEVBQUU7WUFDZjNHLElBQUksQ0FBQzJHLFdBQVcsQ0FBQztVQUNuQjtRQUNGO01BQ0YsQ0FBQyxDQUFDO01BQ0ZILE1BQU0sQ0FBQy8xQixJQUFJLENBQUNnMkIsUUFBUSxDQUFDO0lBQ3ZCO0lBRUFILFNBQVMsQ0FBQ3hVLE9BQU8sQ0FBQyxVQUFVMlUsUUFBUSxFQUFFO01BQ3BDLElBQUksQ0FBQ0YsT0FBTyxDQUFDendCLEdBQUcsQ0FBQzJ3QixRQUFRLENBQUMxMUIsSUFBSSxDQUFDLEVBQUU7UUFDL0I7UUFDQWl2QixJQUFJLENBQUN5RyxRQUFRLENBQUM7TUFDaEI7SUFDRixDQUFDLENBQUM7SUFDRixPQUFPRCxNQUFNO0VBQ2Y7RUFFQSxTQUFTSSxjQUFjQSxDQUFDTixTQUFTLEVBQUU7SUFDakM7SUFDQSxJQUFJTyxnQkFBZ0IsR0FBR2hlLEtBQUssQ0FBQ3lkLFNBQVMsQ0FBQyxDQUFDLENBQUM7O0lBRXpDLE9BQU94VixjQUFjLENBQUNiLE1BQU0sQ0FBQyxVQUFVQyxHQUFHLEVBQUU0QyxLQUFLLEVBQUU7TUFDakQsT0FBTzVDLEdBQUcsQ0FBQy9qQixNQUFNLENBQUMwNkIsZ0JBQWdCLENBQUMzckIsTUFBTSxDQUFDLFVBQVV1ckIsUUFBUSxFQUFFO1FBQzVELE9BQU9BLFFBQVEsQ0FBQzNULEtBQUssS0FBS0EsS0FBSztNQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDUjtFQUVBLFNBQVNnVSxRQUFRQSxDQUFDNTFCLEVBQUUsRUFBRTtJQUNwQixJQUFJNjFCLE9BQU87SUFDWCxPQUFPLFlBQVk7TUFDakIsSUFBSSxDQUFDQSxPQUFPLEVBQUU7UUFDWkEsT0FBTyxHQUFHLElBQUlDLE9BQU8sQ0FBQyxVQUFVQyxPQUFPLEVBQUU7VUFDdkNELE9BQU8sQ0FBQ0MsT0FBTyxFQUFFLENBQUNDLElBQUksQ0FBQyxZQUFZO1lBQ2pDSCxPQUFPLEdBQUd6NkIsU0FBUztZQUNuQjI2QixPQUFPLENBQUMvMUIsRUFBRSxFQUFFLENBQUM7VUFDZixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7TUFDSjtNQUVBLE9BQU82MUIsT0FBTztJQUNoQixDQUFDO0VBQ0g7RUFFQSxTQUFTSSxXQUFXQSxDQUFDYixTQUFTLEVBQUU7SUFDOUIsSUFBSWMsTUFBTSxHQUFHZCxTQUFTLENBQUNyVyxNQUFNLENBQUMsVUFBVW1YLE1BQU0sRUFBRUMsT0FBTyxFQUFFO01BQ3ZELElBQUlDLFFBQVEsR0FBR0YsTUFBTSxDQUFDQyxPQUFPLENBQUN0MkIsSUFBSSxDQUFDO01BQ25DcTJCLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDdDJCLElBQUksQ0FBQyxHQUFHdTJCLFFBQVEsR0FBRy82QixNQUFNLENBQUN5bEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFc1YsUUFBUSxFQUFFRCxPQUFPLEVBQUU7UUFDckVoVixPQUFPLEVBQUU5bEIsTUFBTSxDQUFDeWxCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRXNWLFFBQVEsQ0FBQ2pWLE9BQU8sRUFBRWdWLE9BQU8sQ0FBQ2hWLE9BQU8sQ0FBQztRQUM3RHBSLElBQUksRUFBRTFVLE1BQU0sQ0FBQ3lsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVzVixRQUFRLENBQUNybUIsSUFBSSxFQUFFb21CLE9BQU8sQ0FBQ3BtQixJQUFJO01BQ3JELENBQUMsQ0FBQyxHQUFHb21CLE9BQU87TUFDWixPQUFPRCxNQUFNO0lBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFFUixPQUFPNzZCLE1BQU0sQ0FBQ2tMLElBQUksQ0FBQzJ2QixNQUFNLENBQUMsQ0FBQzduQixHQUFHLENBQUMsVUFBVXBWLEdBQUcsRUFBRTtNQUM1QyxPQUFPaTlCLE1BQU0sQ0FBQ2o5QixHQUFHLENBQUM7SUFDcEIsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxJQUFJbzlCLGVBQWUsR0FBRztJQUNwQnBYLFNBQVMsRUFBRSxRQUFRO0lBQ25CbVcsU0FBUyxFQUFFLEVBQUU7SUFDYmhVLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFFRCxTQUFTa1YsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDMUIsS0FBSyxJQUFJbEMsSUFBSSxHQUFHcjdCLFNBQVMsQ0FBQ21FLE1BQU0sRUFBRW9ELElBQUksR0FBRyxJQUFJd0ksS0FBSyxDQUFDc3JCLElBQUksQ0FBQyxFQUFFbUMsSUFBSSxHQUFHLENBQUMsRUFBRUEsSUFBSSxHQUFHbkMsSUFBSSxFQUFFbUMsSUFBSSxFQUFFLEVBQUU7TUFDdkZqMkIsSUFBSSxDQUFDaTJCLElBQUksQ0FBQyxHQUFHeDlCLFNBQVMsQ0FBQ3c5QixJQUFJLENBQUM7SUFDOUI7SUFFQSxPQUFPLENBQUNqMkIsSUFBSSxDQUFDK3dCLElBQUksQ0FBQyxVQUFVajRCLE9BQU8sRUFBRTtNQUNuQyxPQUFPLEVBQUVBLE9BQU8sSUFBSSxPQUFPQSxPQUFPLENBQUNra0IscUJBQXFCLEtBQUssVUFBVSxDQUFDO0lBQzFFLENBQUMsQ0FBQztFQUNKO0VBRUEsU0FBU2taLGVBQWVBLENBQUNDLGdCQUFnQixFQUFFO0lBQ3pDLElBQUlBLGdCQUFnQixLQUFLLEtBQUssQ0FBQyxFQUFFO01BQy9CQSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDdkI7SUFFQSxJQUFJQyxpQkFBaUIsR0FBR0QsZ0JBQWdCO01BQ3BDRSxxQkFBcUIsR0FBR0QsaUJBQWlCLENBQUNFLGdCQUFnQjtNQUMxREEsZ0JBQWdCLEdBQUdELHFCQUFxQixLQUFLLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBR0EscUJBQXFCO01BQ2hGRSxzQkFBc0IsR0FBR0gsaUJBQWlCLENBQUNJLGNBQWM7TUFDekRBLGNBQWMsR0FBR0Qsc0JBQXNCLEtBQUssS0FBSyxDQUFDLEdBQUdSLGVBQWUsR0FBR1Esc0JBQXNCO0lBQ2pHLE9BQU8sU0FBU0UsWUFBWUEsQ0FBQ2xZLFNBQVMsRUFBRUQsTUFBTSxFQUFFdUMsT0FBTyxFQUFFO01BQ3ZELElBQUlBLE9BQU8sS0FBSyxLQUFLLENBQUMsRUFBRTtRQUN0QkEsT0FBTyxHQUFHMlYsY0FBYztNQUMxQjtNQUVBLElBQUlwVyxLQUFLLEdBQUc7UUFDVnpCLFNBQVMsRUFBRSxRQUFRO1FBQ25CMFcsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQnhVLE9BQU8sRUFBRTlsQixNQUFNLENBQUN5bEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFdVYsZUFBZSxFQUFFUyxjQUFjLENBQUM7UUFDM0QvUSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCcEYsUUFBUSxFQUFFO1VBQ1I5QixTQUFTLEVBQUVBLFNBQVM7VUFDcEJELE1BQU0sRUFBRUE7UUFDVixDQUFDO1FBQ0QvVSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ2RnWCxNQUFNLEVBQUUsQ0FBQztNQUNYLENBQUM7TUFDRCxJQUFJbVcsZ0JBQWdCLEdBQUcsRUFBRTtNQUN6QixJQUFJQyxXQUFXLEdBQUcsS0FBSztNQUN2QixJQUFJeHVCLFFBQVEsR0FBRztRQUNiaVksS0FBSyxFQUFFQSxLQUFLO1FBQ1p3VyxVQUFVLEVBQUUsU0FBU0EsVUFBVUEsQ0FBQ0MsZ0JBQWdCLEVBQUU7VUFDaEQsSUFBSWhXLE9BQU8sR0FBRyxPQUFPZ1csZ0JBQWdCLEtBQUssVUFBVSxHQUFHQSxnQkFBZ0IsQ0FBQ3pXLEtBQUssQ0FBQ1MsT0FBTyxDQUFDLEdBQUdnVyxnQkFBZ0I7VUFDekdDLHNCQUFzQixFQUFFO1VBQ3hCMVcsS0FBSyxDQUFDUyxPQUFPLEdBQUc5bEIsTUFBTSxDQUFDeWxCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRWdXLGNBQWMsRUFBRXBXLEtBQUssQ0FBQ1MsT0FBTyxFQUFFQSxPQUFPLENBQUM7VUFDekVULEtBQUssQ0FBQ29KLGFBQWEsR0FBRztZQUNwQmpMLFNBQVMsRUFBRXNCLFNBQVMsQ0FBQ3RCLFNBQVMsQ0FBQyxHQUFHOE0saUJBQWlCLENBQUM5TSxTQUFTLENBQUMsR0FBR0EsU0FBUyxDQUFDbVAsY0FBYyxHQUFHckMsaUJBQWlCLENBQUM5TSxTQUFTLENBQUNtUCxjQUFjLENBQUMsR0FBRyxFQUFFO1lBQzVJcFAsTUFBTSxFQUFFK00saUJBQWlCLENBQUMvTSxNQUFNO1VBQ2xDLENBQUMsQ0FBQyxDQUFDO1VBQ0g7O1VBRUEsSUFBSStXLGdCQUFnQixHQUFHRCxjQUFjLENBQUNPLFdBQVcsQ0FBQyxFQUFFLENBQUNoN0IsTUFBTSxDQUFDMjdCLGdCQUFnQixFQUFFbFcsS0FBSyxDQUFDUyxPQUFPLENBQUNpVSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7VUFFMUcxVSxLQUFLLENBQUNpVixnQkFBZ0IsR0FBR0EsZ0JBQWdCLENBQUMzckIsTUFBTSxDQUFDLFVBQVVxdEIsQ0FBQyxFQUFFO1lBQzVELE9BQU9BLENBQUMsQ0FBQzFWLE9BQU87VUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7VUFFSjJWLGtCQUFrQixFQUFFO1VBQ3BCLE9BQU83dUIsUUFBUSxDQUFDdWhCLE1BQU0sRUFBRTtRQUMxQixDQUFDO1FBQ0Q7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBdU4sV0FBVyxFQUFFLFNBQVNBLFdBQVdBLENBQUEsRUFBRztVQUNsQyxJQUFJTixXQUFXLEVBQUU7WUFDZjtVQUNGO1VBRUEsSUFBSU8sZUFBZSxHQUFHOVcsS0FBSyxDQUFDQyxRQUFRO1lBQ2hDOUIsU0FBUyxHQUFHMlksZUFBZSxDQUFDM1ksU0FBUztZQUNyQ0QsTUFBTSxHQUFHNFksZUFBZSxDQUFDNVksTUFBTSxDQUFDLENBQUM7VUFDckM7O1VBRUEsSUFBSSxDQUFDMFgsZ0JBQWdCLENBQUN6WCxTQUFTLEVBQUVELE1BQU0sQ0FBQyxFQUFFO1lBRXhDO1VBQ0YsQ0FBQyxDQUFDOztVQUdGOEIsS0FBSyxDQUFDaUYsS0FBSyxHQUFHO1lBQ1o5RyxTQUFTLEVBQUVtVyxnQkFBZ0IsQ0FBQ25XLFNBQVMsRUFBRWdHLGVBQWUsQ0FBQ2pHLE1BQU0sQ0FBQyxFQUFFOEIsS0FBSyxDQUFDUyxPQUFPLENBQUNDLFFBQVEsS0FBSyxPQUFPLENBQUM7WUFDbkd4QyxNQUFNLEVBQUU0RSxhQUFhLENBQUM1RSxNQUFNO1VBQzlCLENBQUMsQ0FBQyxDQUFDO1VBQ0g7VUFDQTtVQUNBO1VBQ0E7O1VBRUE4QixLQUFLLENBQUNzUSxLQUFLLEdBQUcsS0FBSztVQUNuQnRRLEtBQUssQ0FBQ3pCLFNBQVMsR0FBR3lCLEtBQUssQ0FBQ1MsT0FBTyxDQUFDbEMsU0FBUyxDQUFDLENBQUM7VUFDM0M7VUFDQTtVQUNBOztVQUVBeUIsS0FBSyxDQUFDaVYsZ0JBQWdCLENBQUMvVSxPQUFPLENBQUMsVUFBVTJVLFFBQVEsRUFBRTtZQUNqRCxPQUFPN1UsS0FBSyxDQUFDcUYsYUFBYSxDQUFDd1AsUUFBUSxDQUFDMTFCLElBQUksQ0FBQyxHQUFHeEUsTUFBTSxDQUFDeWxCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRXlVLFFBQVEsQ0FBQ3hsQixJQUFJLENBQUM7VUFDOUUsQ0FBQyxDQUFDO1VBRUYsS0FBSyxJQUFJck8sS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxHQUFHZ2YsS0FBSyxDQUFDaVYsZ0JBQWdCLENBQUN6NEIsTUFBTSxFQUFFd0UsS0FBSyxFQUFFLEVBQUU7WUFFbEUsSUFBSWdmLEtBQUssQ0FBQ3NRLEtBQUssS0FBSyxJQUFJLEVBQUU7Y0FDeEJ0USxLQUFLLENBQUNzUSxLQUFLLEdBQUcsS0FBSztjQUNuQnR2QixLQUFLLEdBQUcsQ0FBQyxDQUFDO2NBQ1Y7WUFDRjtZQUVBLElBQUkrMUIscUJBQXFCLEdBQUcvVyxLQUFLLENBQUNpVixnQkFBZ0IsQ0FBQ2owQixLQUFLLENBQUM7Y0FDckQxQixFQUFFLEdBQUd5M0IscUJBQXFCLENBQUN6M0IsRUFBRTtjQUM3QjAzQixzQkFBc0IsR0FBR0QscUJBQXFCLENBQUN0VyxPQUFPO2NBQ3REaU0sUUFBUSxHQUFHc0ssc0JBQXNCLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdBLHNCQUFzQjtjQUMxRTczQixJQUFJLEdBQUc0M0IscUJBQXFCLENBQUM1M0IsSUFBSTtZQUVyQyxJQUFJLE9BQU9HLEVBQUUsS0FBSyxVQUFVLEVBQUU7Y0FDNUIwZ0IsS0FBSyxHQUFHMWdCLEVBQUUsQ0FBQztnQkFDVDBnQixLQUFLLEVBQUVBLEtBQUs7Z0JBQ1pTLE9BQU8sRUFBRWlNLFFBQVE7Z0JBQ2pCdnRCLElBQUksRUFBRUEsSUFBSTtnQkFDVjRJLFFBQVEsRUFBRUE7Y0FDWixDQUFDLENBQUMsSUFBSWlZLEtBQUs7WUFDYjtVQUNGO1FBQ0YsQ0FBQztRQUNEO1FBQ0E7UUFDQXNKLE1BQU0sRUFBRTRMLFFBQVEsQ0FBQyxZQUFZO1VBQzNCLE9BQU8sSUFBSUUsT0FBTyxDQUFDLFVBQVVDLE9BQU8sRUFBRTtZQUNwQ3R0QixRQUFRLENBQUM4dUIsV0FBVyxFQUFFO1lBQ3RCeEIsT0FBTyxDQUFDclYsS0FBSyxDQUFDO1VBQ2hCLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUNGaVgsT0FBTyxFQUFFLFNBQVNBLE9BQU9BLENBQUEsRUFBRztVQUMxQlAsc0JBQXNCLEVBQUU7VUFDeEJILFdBQVcsR0FBRyxJQUFJO1FBQ3BCO01BQ0YsQ0FBQztNQUVELElBQUksQ0FBQ1gsZ0JBQWdCLENBQUN6WCxTQUFTLEVBQUVELE1BQU0sQ0FBQyxFQUFFO1FBRXhDLE9BQU9uVyxRQUFRO01BQ2pCO01BRUFBLFFBQVEsQ0FBQ3l1QixVQUFVLENBQUMvVixPQUFPLENBQUMsQ0FBQzZVLElBQUksQ0FBQyxVQUFVdFYsS0FBSyxFQUFFO1FBQ2pELElBQUksQ0FBQ3VXLFdBQVcsSUFBSTlWLE9BQU8sQ0FBQ3lXLGFBQWEsRUFBRTtVQUN6Q3pXLE9BQU8sQ0FBQ3lXLGFBQWEsQ0FBQ2xYLEtBQUssQ0FBQztRQUM5QjtNQUNGLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDSjtNQUNBO01BQ0E7TUFDQTs7TUFFQSxTQUFTNFcsa0JBQWtCQSxDQUFBLEVBQUc7UUFDNUI1VyxLQUFLLENBQUNpVixnQkFBZ0IsQ0FBQy9VLE9BQU8sQ0FBQyxVQUFVMkgsS0FBSyxFQUFFO1VBQzlDLElBQUkxb0IsSUFBSSxHQUFHMG9CLEtBQUssQ0FBQzFvQixJQUFJO1lBQ2pCZzRCLGFBQWEsR0FBR3RQLEtBQUssQ0FBQ3BILE9BQU87WUFDN0JBLE9BQU8sR0FBRzBXLGFBQWEsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR0EsYUFBYTtZQUN2RGhXLE1BQU0sR0FBRzBHLEtBQUssQ0FBQzFHLE1BQU07VUFFekIsSUFBSSxPQUFPQSxNQUFNLEtBQUssVUFBVSxFQUFFO1lBQ2hDLElBQUlpVyxTQUFTLEdBQUdqVyxNQUFNLENBQUM7Y0FDckJuQixLQUFLLEVBQUVBLEtBQUs7Y0FDWjdnQixJQUFJLEVBQUVBLElBQUk7Y0FDVjRJLFFBQVEsRUFBRUEsUUFBUTtjQUNsQjBZLE9BQU8sRUFBRUE7WUFDWCxDQUFDLENBQUM7WUFFRixJQUFJNFcsTUFBTSxHQUFHLFNBQVNBLE1BQU1BLENBQUEsRUFBRyxDQUFDLENBQUM7WUFFakNmLGdCQUFnQixDQUFDejNCLElBQUksQ0FBQ3U0QixTQUFTLElBQUlDLE1BQU0sQ0FBQztVQUM1QztRQUNGLENBQUMsQ0FBQztNQUNKO01BRUEsU0FBU1gsc0JBQXNCQSxDQUFBLEVBQUc7UUFDaENKLGdCQUFnQixDQUFDcFcsT0FBTyxDQUFDLFVBQVU1Z0IsRUFBRSxFQUFFO1VBQ3JDLE9BQU9BLEVBQUUsRUFBRTtRQUNiLENBQUMsQ0FBQztRQUNGZzNCLGdCQUFnQixHQUFHLEVBQUU7TUFDdkI7TUFFQSxPQUFPdnVCLFFBQVE7SUFDakIsQ0FBQztFQUNIO0VBQ0EsSUFBSXV2QixjQUFjLEdBQUcsYUFBYXhCLGVBQWUsRUFBRSxDQUFDLENBQUM7O0VBRXJELElBQUl5QixrQkFBa0IsR0FBRyxDQUFDaE8sY0FBYyxFQUFFcUksZUFBZSxFQUFFOUksZUFBZSxFQUFFOUgsYUFBYSxDQUFDO0VBQzFGLElBQUl3VyxjQUFjLEdBQUcsYUFBYTFCLGVBQWUsQ0FBQztJQUNoREksZ0JBQWdCLEVBQUVxQjtFQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDOztFQUVKLElBQUlyQixnQkFBZ0IsR0FBRyxDQUFDM00sY0FBYyxFQUFFcUksZUFBZSxFQUFFOUksZUFBZSxFQUFFOUgsYUFBYSxFQUFFMlEsUUFBUSxFQUFFcEIsTUFBTSxFQUFFMkQsaUJBQWlCLEVBQUV4TixPQUFPLEVBQUUwSyxNQUFNLENBQUM7RUFDOUksSUFBSWlGLFlBQVksR0FBRyxhQUFhUCxlQUFlLENBQUM7SUFDOUNJLGdCQUFnQixFQUFFQTtFQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDOztFQUVKLElBQU11QixNQUFNLEdBQUcsYUFBYTk4QixNQUFNLENBQUMrOEIsTUFBTSxFQUFDLGFBQWEvOEIsTUFBTSxDQUFDNk0sY0FBYyxDQUFDO0lBQzNFbXdCLFNBQVMsRUFBRSxJQUFJO0lBQ2Y3WSxTQUFTLEVBQVRBLFNBQVM7SUFDVEgsU0FBUyxFQUFUQSxTQUFTO0lBQ1RNLFVBQVUsRUFBVkEsVUFBVTtJQUNWYSxXQUFXLEVBQUVrQixhQUFhO0lBQzFCSixLQUFLLEVBQUU4RixPQUFPO0lBQ2Q5SSxJQUFJLEVBQUpBLElBQUk7SUFDSkMsY0FBYyxFQUFkQSxjQUFjO0lBQ2RlLFVBQVUsRUFBVkEsVUFBVTtJQUNWSCxVQUFVLEVBQVZBLFVBQVU7SUFDVk0sV0FBVyxFQUFYQSxXQUFXO0lBQ1h0QixNQUFNLEVBQU5BLE1BQU07SUFDTk8sZUFBZSxFQUFmQSxlQUFlO0lBQ2Z5SyxhQUFhLEVBQUVLLGVBQWU7SUFDOUJ1TixZQUFZLEVBQVpBLFlBQVk7SUFDWnVCLGdCQUFnQixFQUFFTixjQUFjO0lBQ2hDTyxnQkFBZ0IsRUFBRUwsY0FBYztJQUNoQy9LLGNBQWMsRUFBZEEsY0FBYztJQUNkMU8sR0FBRyxFQUFIQSxHQUFHO0lBQ0h3TCxjQUFjLEVBQWRBLGNBQWM7SUFDZGtGLElBQUksRUFBRThCLE1BQU07SUFDWjNVLElBQUksRUFBRXdWLE1BQU07SUFDWnpULElBQUksRUFBSkEsSUFBSTtJQUNKa0IsSUFBSSxFQUFKQSxJQUFJO0lBQ0pLLGNBQWMsRUFBZEEsY0FBYztJQUNkbUgsTUFBTSxFQUFFc0wsUUFBUTtJQUNoQm5ULFVBQVUsRUFBVkEsVUFBVTtJQUNWTixNQUFNLEVBQU5BLE1BQU07SUFDTjRYLGVBQWUsRUFBZkEsZUFBZTtJQUNmMVEsYUFBYSxFQUFFd00sZUFBZTtJQUM5QmYsZUFBZSxFQUFFcUQsaUJBQWlCO0lBQ2xDeFYsSUFBSSxFQUFKQSxJQUFJO0lBQ0pQLFNBQVMsRUFBVEEsU0FBUztJQUNUVCxLQUFLLEVBQUxBLEtBQUs7SUFDTEksS0FBSyxFQUFMQSxLQUFLO0lBQ0xOLEdBQUcsRUFBSEEsR0FBRztJQUNIWSxtQkFBbUIsRUFBbkJBLG1CQUFtQjtJQUNuQkgsUUFBUSxFQUFSQSxRQUFRO0lBQ1JlLEtBQUssRUFBTEE7RUFDRixDQUFDLEVBQUU4WSxNQUFNLENBQUNDLFdBQVcsRUFBRTtJQUFFdi9CLEtBQUssRUFBRTtFQUFTLENBQUMsQ0FBQyxDQUFDOztFQUU1QztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLElBQU13L0IsTUFBTSxHQUFHLFVBQVU7RUFDekIsSUFBTUMsVUFBVSxHQUFHLGFBQWE7RUFDaEMsSUFBTUMsV0FBVyxPQUFBMzlCLE1BQUEsQ0FBTzA5QixVQUFVLENBQUU7RUFDcEMsSUFBTUUsY0FBYyxHQUFHLFdBQVc7RUFDbEMsSUFBTUMsWUFBWSxHQUFHLFFBQVE7RUFDN0IsSUFBTUMsU0FBUyxHQUFHLEtBQUs7RUFDdkIsSUFBTUMsY0FBYyxHQUFHLFNBQVM7RUFDaEMsSUFBTUMsZ0JBQWdCLEdBQUcsV0FBVztFQUNwQyxJQUFNQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQzs7RUFFOUIsSUFBTUMsWUFBWSxVQUFBbCtCLE1BQUEsQ0FBVTI5QixXQUFXLENBQUU7RUFDekMsSUFBTVEsY0FBYyxZQUFBbitCLE1BQUEsQ0FBWTI5QixXQUFXLENBQUU7RUFDN0MsSUFBTVMsWUFBWSxVQUFBcCtCLE1BQUEsQ0FBVTI5QixXQUFXLENBQUU7RUFDekMsSUFBTVUsYUFBYSxXQUFBcitCLE1BQUEsQ0FBVzI5QixXQUFXLENBQUU7RUFDM0MsSUFBTVcsc0JBQXNCLFdBQUF0K0IsTUFBQSxDQUFXMjlCLFdBQVcsRUFBQTM5QixNQUFBLENBQUc0OUIsY0FBYyxDQUFFO0VBQ3JFLElBQU1XLHNCQUFzQixhQUFBditCLE1BQUEsQ0FBYTI5QixXQUFXLEVBQUEzOUIsTUFBQSxDQUFHNDlCLGNBQWMsQ0FBRTtFQUN2RSxJQUFNWSxvQkFBb0IsV0FBQXgrQixNQUFBLENBQVcyOUIsV0FBVyxFQUFBMzlCLE1BQUEsQ0FBRzQ5QixjQUFjLENBQUU7RUFDbkUsSUFBTWEsaUJBQWlCLEdBQUcsTUFBTTtFQUNoQyxJQUFNQyxpQkFBaUIsR0FBRyxRQUFRO0VBQ2xDLElBQU1DLGtCQUFrQixHQUFHLFNBQVM7RUFDcEMsSUFBTUMsb0JBQW9CLEdBQUcsV0FBVztFQUN4QyxJQUFNQyx3QkFBd0IsR0FBRyxlQUFlO0VBQ2hELElBQU1DLDBCQUEwQixHQUFHLGlCQUFpQjtFQUNwRCxJQUFNQyxzQkFBc0IsR0FBRywyREFBMkQ7RUFDMUYsSUFBTUMsMEJBQTBCLE1BQUFoL0IsTUFBQSxDQUFNKytCLHNCQUFzQixPQUFBLytCLE1BQUEsQ0FBSXkrQixpQkFBaUIsQ0FBRTtFQUNuRixJQUFNUSxhQUFhLEdBQUcsZ0JBQWdCO0VBQ3RDLElBQU1DLGVBQWUsR0FBRyxTQUFTO0VBQ2pDLElBQU1DLG1CQUFtQixHQUFHLGFBQWE7RUFDekMsSUFBTUMsc0JBQXNCLEdBQUcsNkRBQTZEO0VBQzVGLElBQU1DLGFBQWEsR0FBRzk2QixLQUFLLEVBQUUsR0FBRyxTQUFTLEdBQUcsV0FBVztFQUN2RCxJQUFNKzZCLGdCQUFnQixHQUFHLzZCLEtBQUssRUFBRSxHQUFHLFdBQVcsR0FBRyxTQUFTO0VBQzFELElBQU1nN0IsZ0JBQWdCLEdBQUdoN0IsS0FBSyxFQUFFLEdBQUcsWUFBWSxHQUFHLGNBQWM7RUFDaEUsSUFBTWk3QixtQkFBbUIsR0FBR2o3QixLQUFLLEVBQUUsR0FBRyxjQUFjLEdBQUcsWUFBWTtFQUNuRSxJQUFNazdCLGVBQWUsR0FBR2w3QixLQUFLLEVBQUUsR0FBRyxZQUFZLEdBQUcsYUFBYTtFQUM5RCxJQUFNbTdCLGNBQWMsR0FBR243QixLQUFLLEVBQUUsR0FBRyxhQUFhLEdBQUcsWUFBWTtFQUM3RCxJQUFNbzdCLG1CQUFtQixHQUFHLEtBQUs7RUFDakMsSUFBTUMsc0JBQXNCLEdBQUcsUUFBUTtFQUN2QyxJQUFNQyxTQUFTLEdBQUc7SUFDaEJDLFNBQVMsRUFBRSxJQUFJO0lBQ2Z0TyxRQUFRLEVBQUUsaUJBQWlCO0lBQzNCdU8sT0FBTyxFQUFFLFNBQVM7SUFDbEJqVSxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2RrVSxZQUFZLEVBQUUsSUFBSTtJQUNsQnBjLFNBQVMsRUFBRTtFQUNiLENBQUM7RUFDRCxJQUFNcWMsYUFBYSxHQUFHO0lBQ3BCSCxTQUFTLEVBQUUsa0JBQWtCO0lBQzdCdE8sUUFBUSxFQUFFLGtCQUFrQjtJQUM1QnVPLE9BQU8sRUFBRSxRQUFRO0lBQ2pCalUsTUFBTSxFQUFFLHlCQUF5QjtJQUNqQ2tVLFlBQVksRUFBRSx3QkFBd0I7SUFDdENwYyxTQUFTLEVBQUU7RUFDYixDQUFDOztFQUVEO0FBQ0Y7QUFDQTtFQUZFLElBSU1zYyxRQUFRLDBCQUFBQyxlQUFBO0lBQUExaUMsU0FBQSxDQUFBeWlDLFFBQUEsRUFBQUMsZUFBQTtJQUFBLElBQUFDLE9BQUEsR0FBQXppQyxZQUFBLENBQUF1aUMsUUFBQTtJQUNaLFNBQUFBLFNBQVkvaEMsT0FBTyxFQUFFb1IsTUFBTSxFQUFFO01BQUEsSUFBQTh3QixPQUFBO01BQUF6aUMsZUFBQSxPQUFBc2lDLFFBQUE7TUFDM0JHLE9BQUEsR0FBQUQsT0FBQSxDQUFBNy9CLElBQUEsT0FBTXBDLE9BQU8sRUFBRW9SLE1BQU07TUFDckI4d0IsT0FBQSxDQUFLQyxPQUFPLEdBQUcsSUFBSTtNQUNuQkQsT0FBQSxDQUFLRSxPQUFPLEdBQUdGLE9BQUEsQ0FBS3B2QixRQUFRLENBQUN2TyxVQUFVLENBQUMsQ0FBQztNQUN6QztNQUNBMjlCLE9BQUEsQ0FBS0csS0FBSyxHQUFHcnVCLGNBQWMsQ0FBQ2EsSUFBSSxDQUFDcXRCLE9BQUEsQ0FBS3B2QixRQUFRLEVBQUVndUIsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk5c0IsY0FBYyxDQUFDVSxJQUFJLENBQUN3dEIsT0FBQSxDQUFLcHZCLFFBQVEsRUFBRWd1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTlzQixjQUFjLENBQUNHLE9BQU8sQ0FBQzJzQixhQUFhLEVBQUVvQixPQUFBLENBQUtFLE9BQU8sQ0FBQztNQUNoTEYsT0FBQSxDQUFLSSxTQUFTLEdBQUdKLE9BQUEsQ0FBS0ssYUFBYSxFQUFFO01BQUMsT0FBQUwsT0FBQTtJQUN4Qzs7SUFFQTtJQUFBdGlDLFlBQUEsQ0FBQW1pQyxRQUFBO01BQUFsaUMsR0FBQTtNQUFBQyxLQUFBO01BV0E7TUFDQSxTQUFBd1gsT0FBQSxFQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMyTCxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUNDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQ0MsSUFBSSxFQUFFO01BQ3BEO0lBQUM7TUFBQXRqQixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBcWpCLEtBQUEsRUFBTztRQUNMLElBQUkzZSxVQUFVLENBQUMsSUFBSSxDQUFDc08sUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDbVEsUUFBUSxFQUFFLEVBQUU7VUFDaEQ7UUFDRjtRQUNBLElBQU1uWCxhQUFhLEdBQUc7VUFDcEJBLGFBQWEsRUFBRSxJQUFJLENBQUNnSDtRQUN0QixDQUFDO1FBQ0QsSUFBTTB2QixTQUFTLEdBQUc1NEIsWUFBWSxDQUFDZ0UsT0FBTyxDQUFDLElBQUksQ0FBQ2tGLFFBQVEsRUFBRW10QixZQUFZLEVBQUVuMEIsYUFBYSxDQUFDO1FBQ2xGLElBQUkwMkIsU0FBUyxDQUFDeDBCLGdCQUFnQixFQUFFO1VBQzlCO1FBQ0Y7UUFDQSxJQUFJLENBQUN5MEIsYUFBYSxFQUFFOztRQUVwQjtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUksY0FBYyxJQUFJOS9CLFFBQVEsQ0FBQ3NDLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQ205QixPQUFPLENBQUMvOUIsT0FBTyxDQUFDMjhCLG1CQUFtQixDQUFDLEVBQUU7VUFBQSxJQUFBMEIsS0FBQTtVQUFBLElBQUFDLFdBQUEsR0FBQXg0QiwwQkFBQSxDQUN0RSxDQUFBdTRCLEtBQUEsS0FBRSxFQUFDN2dDLE1BQU0sQ0FBQW5DLEtBQUEsQ0FBQWdqQyxLQUFBLEVBQUF0N0Isa0JBQUEsQ0FBSXpFLFFBQVEsQ0FBQ2dELElBQUksQ0FBQ3lPLFFBQVEsRUFBQztZQUFBd3VCLE9BQUE7VUFBQTtZQUExRCxLQUFBRCxXQUFBLENBQUF0NEIsQ0FBQSxNQUFBdTRCLE9BQUEsR0FBQUQsV0FBQSxDQUFBcjRCLENBQUEsSUFBQUMsSUFBQSxHQUE0RDtjQUFBLElBQWpEdkssT0FBTyxHQUFBNGlDLE9BQUEsQ0FBQTlpQyxLQUFBO2NBQ2hCOEosWUFBWSxDQUFDZ0QsRUFBRSxDQUFDNU0sT0FBTyxFQUFFLFdBQVcsRUFBRXNGLElBQUksQ0FBQztZQUM3QztVQUFDLFNBQUFtRixHQUFBO1lBQUFrNEIsV0FBQSxDQUFBajRCLENBQUEsQ0FBQUQsR0FBQTtVQUFBO1lBQUFrNEIsV0FBQSxDQUFBaDRCLENBQUE7VUFBQTtRQUNIO1FBQ0EsSUFBSSxDQUFDbUksUUFBUSxDQUFDK3ZCLEtBQUssRUFBRTtRQUNyQixJQUFJLENBQUMvdkIsUUFBUSxDQUFDekMsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDZ3lCLEtBQUssQ0FBQzE5QixTQUFTLENBQUNpVixHQUFHLENBQUMwbUIsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDeHRCLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ2lWLEdBQUcsQ0FBQzBtQixpQkFBaUIsQ0FBQztRQUM5QzEyQixZQUFZLENBQUNnRSxPQUFPLENBQUMsSUFBSSxDQUFDa0YsUUFBUSxFQUFFb3RCLGFBQWEsRUFBRXAwQixhQUFhLENBQUM7TUFDbkU7SUFBQztNQUFBak0sR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW9qQixLQUFBLEVBQU87UUFDTCxJQUFJMWUsVUFBVSxDQUFDLElBQUksQ0FBQ3NPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDbVEsUUFBUSxFQUFFLEVBQUU7VUFDakQ7UUFDRjtRQUNBLElBQU1uWCxhQUFhLEdBQUc7VUFDcEJBLGFBQWEsRUFBRSxJQUFJLENBQUNnSDtRQUN0QixDQUFDO1FBQ0QsSUFBSSxDQUFDZ3dCLGFBQWEsQ0FBQ2gzQixhQUFhLENBQUM7TUFDbkM7SUFBQztNQUFBak0sR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW9ULFFBQUEsRUFBVTtRQUNSLElBQUksSUFBSSxDQUFDaXZCLE9BQU8sRUFBRTtVQUNoQixJQUFJLENBQUNBLE9BQU8sQ0FBQzVELE9BQU8sRUFBRTtRQUN4QjtRQUNBL2YsSUFBQSxDQUFBQyxlQUFBLENBQUFzakIsUUFBQSxDQUFBNy9CLFNBQUEsb0JBQUFFLElBQUE7TUFDRjtJQUFDO01BQUF2QyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBOHdCLE9BQUEsRUFBUztRQUNQLElBQUksQ0FBQzBSLFNBQVMsR0FBRyxJQUFJLENBQUNDLGFBQWEsRUFBRTtRQUNyQyxJQUFJLElBQUksQ0FBQ0osT0FBTyxFQUFFO1VBQ2hCLElBQUksQ0FBQ0EsT0FBTyxDQUFDdlIsTUFBTSxFQUFFO1FBQ3ZCO01BQ0Y7O01BRUE7SUFBQTtNQUFBL3dCLEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUFnakMsY0FBY2gzQixhQUFhLEVBQUU7UUFDM0IsSUFBTWkzQixTQUFTLEdBQUduNUIsWUFBWSxDQUFDZ0UsT0FBTyxDQUFDLElBQUksQ0FBQ2tGLFFBQVEsRUFBRWl0QixZQUFZLEVBQUVqMEIsYUFBYSxDQUFDO1FBQ2xGLElBQUlpM0IsU0FBUyxDQUFDLzBCLGdCQUFnQixFQUFFO1VBQzlCO1FBQ0Y7O1FBRUE7UUFDQTtRQUNBLElBQUksY0FBYyxJQUFJckwsUUFBUSxDQUFDc0MsZUFBZSxFQUFFO1VBQUEsSUFBQSs5QixNQUFBO1VBQUEsSUFBQUMsV0FBQSxHQUFBOTRCLDBCQUFBLENBQ3hCLENBQUE2NEIsTUFBQSxLQUFFLEVBQUNuaEMsTUFBTSxDQUFBbkMsS0FBQSxDQUFBc2pDLE1BQUEsRUFBQTU3QixrQkFBQSxDQUFJekUsUUFBUSxDQUFDZ0QsSUFBSSxDQUFDeU8sUUFBUSxFQUFDO1lBQUE4dUIsT0FBQTtVQUFBO1lBQTFELEtBQUFELFdBQUEsQ0FBQTU0QixDQUFBLE1BQUE2NEIsT0FBQSxHQUFBRCxXQUFBLENBQUEzNEIsQ0FBQSxJQUFBQyxJQUFBLEdBQTREO2NBQUEsSUFBakR2SyxPQUFPLEdBQUFrakMsT0FBQSxDQUFBcGpDLEtBQUE7Y0FDaEI4SixZQUFZLENBQUNDLEdBQUcsQ0FBQzdKLE9BQU8sRUFBRSxXQUFXLEVBQUVzRixJQUFJLENBQUM7WUFDOUM7VUFBQyxTQUFBbUYsR0FBQTtZQUFBdzRCLFdBQUEsQ0FBQXY0QixDQUFBLENBQUFELEdBQUE7VUFBQTtZQUFBdzRCLFdBQUEsQ0FBQXQ0QixDQUFBO1VBQUE7UUFDSDtRQUNBLElBQUksSUFBSSxDQUFDdzNCLE9BQU8sRUFBRTtVQUNoQixJQUFJLENBQUNBLE9BQU8sQ0FBQzVELE9BQU8sRUFBRTtRQUN4QjtRQUNBLElBQUksQ0FBQzhELEtBQUssQ0FBQzE5QixTQUFTLENBQUNpTCxNQUFNLENBQUMwd0IsaUJBQWlCLENBQUM7UUFDOUMsSUFBSSxDQUFDeHRCLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ2lMLE1BQU0sQ0FBQzB3QixpQkFBaUIsQ0FBQztRQUNqRCxJQUFJLENBQUN4dEIsUUFBUSxDQUFDekMsWUFBWSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUM7UUFDcERGLFdBQVcsQ0FBQ0csbUJBQW1CLENBQUMsSUFBSSxDQUFDK3hCLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDckR6NEIsWUFBWSxDQUFDZ0UsT0FBTyxDQUFDLElBQUksQ0FBQ2tGLFFBQVEsRUFBRWt0QixjQUFjLEVBQUVsMEIsYUFBYSxDQUFDO01BQ3BFO0lBQUM7TUFBQWpNLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFxUixXQUFXQyxNQUFNLEVBQUU7UUFDakJBLE1BQU0sR0FBQW9OLElBQUEsQ0FBQUMsZUFBQSxDQUFBc2pCLFFBQUEsQ0FBQTcvQixTQUFBLHVCQUFBRSxJQUFBLE9BQW9CZ1AsTUFBTSxDQUFDO1FBQ2pDLElBQUkxUSxPQUFBLENBQU8wUSxNQUFNLENBQUNxVSxTQUFTLE1BQUssUUFBUSxJQUFJLENBQUMvaEIsV0FBVyxDQUFDME4sTUFBTSxDQUFDcVUsU0FBUyxDQUFDLElBQUksT0FBT3JVLE1BQU0sQ0FBQ3FVLFNBQVMsQ0FBQ3ZCLHFCQUFxQixLQUFLLFVBQVUsRUFBRTtVQUMxSTtVQUNBLE1BQU0sSUFBSTVSLFNBQVMsSUFBQXpRLE1BQUEsQ0FBSXk5QixNQUFNLENBQUMvc0IsV0FBVyxFQUFFLDBHQUFpRztRQUM5STtRQUNBLE9BQU9uQixNQUFNO01BQ2Y7SUFBQztNQUFBdlIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTJpQyxjQUFBLEVBQWdCO1FBQ2QsSUFBSSxPQUFPMUQsTUFBTSxLQUFLLFdBQVcsRUFBRTtVQUNqQyxNQUFNLElBQUl6c0IsU0FBUyxDQUFDLCtEQUErRCxDQUFDO1FBQ3RGO1FBQ0EsSUFBSTZ3QixnQkFBZ0IsR0FBRyxJQUFJLENBQUNyd0IsUUFBUTtRQUNwQyxJQUFJLElBQUksQ0FBQ0MsT0FBTyxDQUFDMFMsU0FBUyxLQUFLLFFBQVEsRUFBRTtVQUN2QzBkLGdCQUFnQixHQUFHLElBQUksQ0FBQ2YsT0FBTztRQUNqQyxDQUFDLE1BQU0sSUFBSTErQixXQUFXLENBQUMsSUFBSSxDQUFDcVAsT0FBTyxDQUFDMFMsU0FBUyxDQUFDLEVBQUU7VUFDOUMwZCxnQkFBZ0IsR0FBR3QvQixVQUFVLENBQUMsSUFBSSxDQUFDa1AsT0FBTyxDQUFDMFMsU0FBUyxDQUFDO1FBQ3ZELENBQUMsTUFBTSxJQUFJL2tCLE9BQUEsQ0FBTyxJQUFJLENBQUNxUyxPQUFPLENBQUMwUyxTQUFTLE1BQUssUUFBUSxFQUFFO1VBQ3JEMGQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDcHdCLE9BQU8sQ0FBQzBTLFNBQVM7UUFDM0M7UUFDQSxJQUFNb2MsWUFBWSxHQUFHLElBQUksQ0FBQ3VCLGdCQUFnQixFQUFFO1FBQzVDLElBQUksQ0FBQ2pCLE9BQU8sR0FBR3hFLFlBQVksQ0FBQ3dGLGdCQUFnQixFQUFFLElBQUksQ0FBQ2QsS0FBSyxFQUFFUixZQUFZLENBQUM7TUFDekU7SUFBQztNQUFBaGlDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFtakIsU0FBQSxFQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNvZixLQUFLLENBQUMxOUIsU0FBUyxDQUFDQyxRQUFRLENBQUMwN0IsaUJBQWlCLENBQUM7TUFDekQ7SUFBQztNQUFBemdDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF1akMsY0FBQSxFQUFnQjtRQUNkLElBQU1DLGNBQWMsR0FBRyxJQUFJLENBQUNsQixPQUFPO1FBQ25DLElBQUlrQixjQUFjLENBQUMzK0IsU0FBUyxDQUFDQyxRQUFRLENBQUM0N0Isa0JBQWtCLENBQUMsRUFBRTtVQUN6RCxPQUFPYyxlQUFlO1FBQ3hCO1FBQ0EsSUFBSWdDLGNBQWMsQ0FBQzMrQixTQUFTLENBQUNDLFFBQVEsQ0FBQzY3QixvQkFBb0IsQ0FBQyxFQUFFO1VBQzNELE9BQU9jLGNBQWM7UUFDdkI7UUFDQSxJQUFJK0IsY0FBYyxDQUFDMytCLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDODdCLHdCQUF3QixDQUFDLEVBQUU7VUFDL0QsT0FBT2MsbUJBQW1CO1FBQzVCO1FBQ0EsSUFBSThCLGNBQWMsQ0FBQzMrQixTQUFTLENBQUNDLFFBQVEsQ0FBQys3QiwwQkFBMEIsQ0FBQyxFQUFFO1VBQ2pFLE9BQU9jLHNCQUFzQjtRQUMvQjs7UUFFQTtRQUNBLElBQU04QixLQUFLLEdBQUd4Z0MsZ0JBQWdCLENBQUMsSUFBSSxDQUFDcy9CLEtBQUssQ0FBQyxDQUFDbCtCLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDNFAsSUFBSSxFQUFFLEtBQUssS0FBSztRQUM3RixJQUFJdXZCLGNBQWMsQ0FBQzMrQixTQUFTLENBQUNDLFFBQVEsQ0FBQzI3QixpQkFBaUIsQ0FBQyxFQUFFO1VBQ3hELE9BQU9nRCxLQUFLLEdBQUdwQyxnQkFBZ0IsR0FBR0QsYUFBYTtRQUNqRDtRQUNBLE9BQU9xQyxLQUFLLEdBQUdsQyxtQkFBbUIsR0FBR0QsZ0JBQWdCO01BQ3ZEO0lBQUM7TUFBQXZoQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBeWlDLGNBQUEsRUFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ3p2QixRQUFRLENBQUN6TyxPQUFPLENBQUMwOEIsZUFBZSxDQUFDLEtBQUssSUFBSTtNQUN4RDtJQUFDO01BQUFsaEMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTBqQyxXQUFBLEVBQWE7UUFBQSxJQUFBQyxPQUFBO1FBQ1gsSUFDRTlWLE1BQU0sR0FDSixJQUFJLENBQUM1YSxPQUFPLENBRGQ0YSxNQUFNO1FBRVIsSUFBSSxPQUFPQSxNQUFNLEtBQUssUUFBUSxFQUFFO1VBQzlCLE9BQU9BLE1BQU0sQ0FBQ3JxQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMyUixHQUFHLENBQUMsVUFBQW5WLEtBQUs7WUFBQSxPQUFJcUQsTUFBTSxDQUFDdWMsUUFBUSxDQUFDNWYsS0FBSyxFQUFFLEVBQUUsQ0FBQztVQUFBLEVBQUM7UUFDbkU7UUFDQSxJQUFJLE9BQU82dEIsTUFBTSxLQUFLLFVBQVUsRUFBRTtVQUNoQyxPQUFPLFVBQUErVixVQUFVO1lBQUEsT0FBSS9WLE1BQU0sQ0FBQytWLFVBQVUsRUFBRUQsT0FBSSxDQUFDM3dCLFFBQVEsQ0FBQztVQUFBO1FBQ3hEO1FBQ0EsT0FBTzZhLE1BQU07TUFDZjtJQUFDO01BQUE5dEIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXNqQyxpQkFBQSxFQUFtQjtRQUNqQixJQUFNTyxxQkFBcUIsR0FBRztVQUM1QjlkLFNBQVMsRUFBRSxJQUFJLENBQUN3ZCxhQUFhLEVBQUU7VUFDL0JySCxTQUFTLEVBQUUsQ0FBQztZQUNWdjFCLElBQUksRUFBRSxpQkFBaUI7WUFDdkJzaEIsT0FBTyxFQUFFO2NBQ1BzTCxRQUFRLEVBQUUsSUFBSSxDQUFDdGdCLE9BQU8sQ0FBQ3NnQjtZQUN6QjtVQUNGLENBQUMsRUFBRTtZQUNENXNCLElBQUksRUFBRSxRQUFRO1lBQ2RzaEIsT0FBTyxFQUFFO2NBQ1A0RixNQUFNLEVBQUUsSUFBSSxDQUFDNlYsVUFBVTtZQUN6QjtVQUNGLENBQUM7UUFDSCxDQUFDOztRQUVEO1FBQ0EsSUFBSSxJQUFJLENBQUNsQixTQUFTLElBQUksSUFBSSxDQUFDdnZCLE9BQU8sQ0FBQzZ1QixPQUFPLEtBQUssUUFBUSxFQUFFO1VBQ3ZEenhCLFdBQVcsQ0FBQ0MsZ0JBQWdCLENBQUMsSUFBSSxDQUFDaXlCLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztVQUM5RHNCLHFCQUFxQixDQUFDM0gsU0FBUyxHQUFHLENBQUM7WUFDakN2MUIsSUFBSSxFQUFFLGFBQWE7WUFDbkI4aEIsT0FBTyxFQUFFO1VBQ1gsQ0FBQyxDQUFDO1FBQ0o7UUFDQSxPQUFBOVcsYUFBQSxDQUFBQSxhQUFBLEtBQ0treUIscUJBQXFCLEdBQ3JCMzhCLE9BQU8sQ0FBQyxJQUFJLENBQUMrTCxPQUFPLENBQUM4dUIsWUFBWSxFQUFFLENBQUM4QixxQkFBcUIsQ0FBQyxDQUFDO01BRWxFO0lBQUM7TUFBQTlqQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBOGpDLGdCQUFBQyxNQUFBLEVBR0c7UUFBQSxJQUZEaGtDLEdBQUcsR0FBQWdrQyxNQUFBLENBQUhoa0MsR0FBRztVQUNIZ0ksTUFBTSxHQUFBZzhCLE1BQUEsQ0FBTmg4QixNQUFNO1FBRU4sSUFBTXFXLEtBQUssR0FBR2xLLGNBQWMsQ0FBQy9JLElBQUksQ0FBQ2cyQixzQkFBc0IsRUFBRSxJQUFJLENBQUNvQixLQUFLLENBQUMsQ0FBQ3p4QixNQUFNLENBQUMsVUFBQTVRLE9BQU87VUFBQSxPQUFJZ0UsU0FBUyxDQUFDaEUsT0FBTyxDQUFDO1FBQUEsRUFBQztRQUMzRyxJQUFJLENBQUNrZSxLQUFLLENBQUNwYSxNQUFNLEVBQUU7VUFDakI7UUFDRjs7UUFFQTtRQUNBO1FBQ0FrRSxvQkFBb0IsQ0FBQ2tXLEtBQUssRUFBRXJXLE1BQU0sRUFBRWhJLEdBQUcsS0FBS2dnQyxnQkFBZ0IsRUFBRSxDQUFDM2hCLEtBQUssQ0FBQ3ZSLFFBQVEsQ0FBQzlFLE1BQU0sQ0FBQyxDQUFDLENBQUNnN0IsS0FBSyxFQUFFO01BQ2hHOztNQUVBO0lBQUE7TUFBQWhqQyxHQUFBO01BQUFtUCxHQUFBLEVBak1BLFNBQUFBLElBQUEsRUFBcUI7UUFDbkIsT0FBTzB5QixTQUFTO01BQ2xCO0lBQUM7TUFBQTdoQyxHQUFBO01BQUFtUCxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUF5QjtRQUN2QixPQUFPOHlCLGFBQWE7TUFDdEI7SUFBQztNQUFBamlDLEdBQUE7TUFBQW1QLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQWtCO1FBQ2hCLE9BQU9zd0IsTUFBTTtNQUNmO0lBQUM7TUFBQXovQixHQUFBO01BQUFDLEtBQUEsRUEwTEQsU0FBQStHLGdCQUF1QnVLLE1BQU0sRUFBRTtRQUM3QixPQUFPLElBQUksQ0FBQ3NGLElBQUksQ0FBQyxZQUFZO1VBQzNCLElBQU1DLElBQUksR0FBR29yQixRQUFRLENBQUNwdUIsbUJBQW1CLENBQUMsSUFBSSxFQUFFdkMsTUFBTSxDQUFDO1VBQ3ZELElBQUksT0FBT0EsTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM5QjtVQUNGO1VBQ0EsSUFBSSxPQUFPdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQ3ZDLE1BQU0sSUFBSWtCLFNBQVMsc0JBQUF6USxNQUFBLENBQXFCdVAsTUFBTSxRQUFJO1VBQ3BEO1VBQ0F1RixJQUFJLENBQUN2RixNQUFNLENBQUMsRUFBRTtRQUNoQixDQUFDLENBQUM7TUFDSjtJQUFDO01BQUF2UixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBZ2tDLFdBQWtCdDZCLEtBQUssRUFBRTtRQUN2QixJQUFJQSxLQUFLLENBQUMrTixNQUFNLEtBQUt1b0Isa0JBQWtCLElBQUl0MkIsS0FBSyxDQUFDTSxJQUFJLEtBQUssT0FBTyxJQUFJTixLQUFLLENBQUMzSixHQUFHLEtBQUs4L0IsU0FBUyxFQUFFO1VBQzVGO1FBQ0Y7UUFDQSxJQUFNb0UsV0FBVyxHQUFHL3ZCLGNBQWMsQ0FBQy9JLElBQUksQ0FBQzQxQiwwQkFBMEIsQ0FBQztRQUFDLElBQUFtRCxXQUFBLEdBQUE3NUIsMEJBQUEsQ0FDL0M0NUIsV0FBVztVQUFBRSxPQUFBO1FBQUE7VUFBaEMsS0FBQUQsV0FBQSxDQUFBMzVCLENBQUEsTUFBQTQ1QixPQUFBLEdBQUFELFdBQUEsQ0FBQTE1QixDQUFBLElBQUFDLElBQUEsR0FBa0M7WUFBQSxJQUF2QitNLE1BQU0sR0FBQTJzQixPQUFBLENBQUFua0MsS0FBQTtZQUNmLElBQU1RLE9BQU8sR0FBR3loQyxRQUFRLENBQUNydUIsV0FBVyxDQUFDNEQsTUFBTSxDQUFDO1lBQzVDLElBQUksQ0FBQ2hYLE9BQU8sSUFBSUEsT0FBTyxDQUFDeVMsT0FBTyxDQUFDNHVCLFNBQVMsS0FBSyxLQUFLLEVBQUU7Y0FDbkQ7WUFDRjtZQUNBLElBQU11QyxZQUFZLEdBQUcxNkIsS0FBSyxDQUFDMDZCLFlBQVksRUFBRTtZQUN6QyxJQUFNQyxZQUFZLEdBQUdELFlBQVksQ0FBQ3YzQixRQUFRLENBQUNyTSxPQUFPLENBQUMraEMsS0FBSyxDQUFDO1lBQ3pELElBQUk2QixZQUFZLENBQUN2M0IsUUFBUSxDQUFDck0sT0FBTyxDQUFDd1MsUUFBUSxDQUFDLElBQUl4UyxPQUFPLENBQUN5UyxPQUFPLENBQUM0dUIsU0FBUyxLQUFLLFFBQVEsSUFBSSxDQUFDd0MsWUFBWSxJQUFJN2pDLE9BQU8sQ0FBQ3lTLE9BQU8sQ0FBQzR1QixTQUFTLEtBQUssU0FBUyxJQUFJd0MsWUFBWSxFQUFFO2NBQ2pLO1lBQ0Y7O1lBRUE7WUFDQSxJQUFJN2pDLE9BQU8sQ0FBQytoQyxLQUFLLENBQUN6OUIsUUFBUSxDQUFDNEUsS0FBSyxDQUFDM0IsTUFBTSxDQUFDLEtBQUsyQixLQUFLLENBQUNNLElBQUksS0FBSyxPQUFPLElBQUlOLEtBQUssQ0FBQzNKLEdBQUcsS0FBSzgvQixTQUFTLElBQUksb0NBQW9DLENBQUN0dEIsSUFBSSxDQUFDN0ksS0FBSyxDQUFDM0IsTUFBTSxDQUFDOE4sT0FBTyxDQUFDLENBQUMsRUFBRTtjQUNsSztZQUNGO1lBQ0EsSUFBTTdKLGFBQWEsR0FBRztjQUNwQkEsYUFBYSxFQUFFeEwsT0FBTyxDQUFDd1M7WUFDekIsQ0FBQztZQUNELElBQUl0SixLQUFLLENBQUNNLElBQUksS0FBSyxPQUFPLEVBQUU7Y0FDMUJnQyxhQUFhLENBQUM0SixVQUFVLEdBQUdsTSxLQUFLO1lBQ2xDO1lBQ0FsSixPQUFPLENBQUN3aUMsYUFBYSxDQUFDaDNCLGFBQWEsQ0FBQztVQUN0QztRQUFDLFNBQUFyQixHQUFBO1VBQUF1NUIsV0FBQSxDQUFBdDVCLENBQUEsQ0FBQUQsR0FBQTtRQUFBO1VBQUF1NUIsV0FBQSxDQUFBcjVCLENBQUE7UUFBQTtNQUNIO0lBQUM7TUFBQTlLLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFza0Msc0JBQTZCNTZCLEtBQUssRUFBRTtRQUNsQztRQUNBOztRQUVBLElBQU02NkIsT0FBTyxHQUFHLGlCQUFpQixDQUFDaHlCLElBQUksQ0FBQzdJLEtBQUssQ0FBQzNCLE1BQU0sQ0FBQzhOLE9BQU8sQ0FBQztRQUM1RCxJQUFNMnVCLGFBQWEsR0FBRzk2QixLQUFLLENBQUMzSixHQUFHLEtBQUs2L0IsWUFBWTtRQUNoRCxJQUFNNkUsZUFBZSxHQUFHLENBQUMzRSxjQUFjLEVBQUVDLGdCQUFnQixDQUFDLENBQUNsekIsUUFBUSxDQUFDbkQsS0FBSyxDQUFDM0osR0FBRyxDQUFDO1FBQzlFLElBQUksQ0FBQzBrQyxlQUFlLElBQUksQ0FBQ0QsYUFBYSxFQUFFO1VBQ3RDO1FBQ0Y7UUFDQSxJQUFJRCxPQUFPLElBQUksQ0FBQ0MsYUFBYSxFQUFFO1VBQzdCO1FBQ0Y7UUFDQTk2QixLQUFLLENBQUM4RSxjQUFjLEVBQUU7O1FBRXRCO1FBQ0EsSUFBTWsyQixlQUFlLEdBQUcsSUFBSSxDQUFDandCLE9BQU8sQ0FBQ3FzQixzQkFBc0IsQ0FBQyxHQUFHLElBQUksR0FBRzVzQixjQUFjLENBQUNVLElBQUksQ0FBQyxJQUFJLEVBQUVrc0Isc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTVzQixjQUFjLENBQUNhLElBQUksQ0FBQyxJQUFJLEVBQUUrckIsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTVzQixjQUFjLENBQUNHLE9BQU8sQ0FBQ3lzQixzQkFBc0IsRUFBRXAzQixLQUFLLENBQUNFLGNBQWMsQ0FBQ25GLFVBQVUsQ0FBQztRQUNyUSxJQUFNOEssUUFBUSxHQUFHMHlCLFFBQVEsQ0FBQ3B1QixtQkFBbUIsQ0FBQzZ3QixlQUFlLENBQUM7UUFDOUQsSUFBSUQsZUFBZSxFQUFFO1VBQ25CLzZCLEtBQUssQ0FBQ2k3QixlQUFlLEVBQUU7VUFDdkJwMUIsUUFBUSxDQUFDOFQsSUFBSSxFQUFFO1VBQ2Y5VCxRQUFRLENBQUN1MEIsZUFBZSxDQUFDcDZCLEtBQUssQ0FBQztVQUMvQjtRQUNGO1FBQ0EsSUFBSTZGLFFBQVEsQ0FBQzRULFFBQVEsRUFBRSxFQUFFO1VBQ3ZCO1VBQ0F6WixLQUFLLENBQUNpN0IsZUFBZSxFQUFFO1VBQ3ZCcDFCLFFBQVEsQ0FBQzZULElBQUksRUFBRTtVQUNmc2hCLGVBQWUsQ0FBQzNCLEtBQUssRUFBRTtRQUN6QjtNQUNGO0lBQUM7SUFBQSxPQUFBZCxRQUFBO0VBQUEsRUFwUm9CcnZCLGFBQWE7RUF1UnBDO0FBQ0Y7QUFDQTtFQUVFOUksWUFBWSxDQUFDZ0QsRUFBRSxDQUFDakssUUFBUSxFQUFFeTlCLHNCQUFzQixFQUFFUSxzQkFBc0IsRUFBRW1CLFFBQVEsQ0FBQ3FDLHFCQUFxQixDQUFDO0VBQ3pHeDZCLFlBQVksQ0FBQ2dELEVBQUUsQ0FBQ2pLLFFBQVEsRUFBRXk5QixzQkFBc0IsRUFBRVUsYUFBYSxFQUFFaUIsUUFBUSxDQUFDcUMscUJBQXFCLENBQUM7RUFDaEd4NkIsWUFBWSxDQUFDZ0QsRUFBRSxDQUFDakssUUFBUSxFQUFFdzlCLHNCQUFzQixFQUFFNEIsUUFBUSxDQUFDK0IsVUFBVSxDQUFDO0VBQ3RFbDZCLFlBQVksQ0FBQ2dELEVBQUUsQ0FBQ2pLLFFBQVEsRUFBRTA5QixvQkFBb0IsRUFBRTBCLFFBQVEsQ0FBQytCLFVBQVUsQ0FBQztFQUNwRWw2QixZQUFZLENBQUNnRCxFQUFFLENBQUNqSyxRQUFRLEVBQUV3OUIsc0JBQXNCLEVBQUVTLHNCQUFzQixFQUFFLFVBQVVwM0IsS0FBSyxFQUFFO0lBQ3pGQSxLQUFLLENBQUM4RSxjQUFjLEVBQUU7SUFDdEJ5ekIsUUFBUSxDQUFDcHVCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDMkQsTUFBTSxFQUFFO0VBQzdDLENBQUMsQ0FBQzs7RUFFRjtBQUNGO0FBQ0E7O0VBRUVoUixrQkFBa0IsQ0FBQ3k3QixRQUFRLENBQUM7O0VBRTVCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsSUFBTTJDLHNCQUFzQixHQUFHLG1EQUFtRDtFQUNsRixJQUFNQyx1QkFBdUIsR0FBRyxhQUFhO0VBQzdDLElBQU1DLGdCQUFnQixHQUFHLGVBQWU7RUFDeEMsSUFBTUMsZUFBZSxHQUFHLGNBQWM7O0VBRXRDO0FBQ0Y7QUFDQTtFQUZFLElBSU1DLGVBQWU7SUFDbkIsU0FBQUEsZ0JBQUEsRUFBYztNQUFBcmxDLGVBQUEsT0FBQXFsQyxlQUFBO01BQ1osSUFBSSxDQUFDaHlCLFFBQVEsR0FBR25RLFFBQVEsQ0FBQ2dELElBQUk7SUFDL0I7O0lBRUE7SUFBQS9GLFlBQUEsQ0FBQWtsQyxlQUFBO01BQUFqbEMsR0FBQTtNQUFBQyxLQUFBLEVBQ0EsU0FBQWlsQyxTQUFBLEVBQVc7UUFDVDtRQUNBLElBQU1DLGFBQWEsR0FBR3JpQyxRQUFRLENBQUNzQyxlQUFlLENBQUN1b0IsV0FBVztRQUMxRCxPQUFPaHJCLElBQUksQ0FBQ2lYLEdBQUcsQ0FBQ2xZLE1BQU0sQ0FBQzBqQyxVQUFVLEdBQUdELGFBQWEsQ0FBQztNQUNwRDtJQUFDO01BQUFubEMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW9qQixLQUFBLEVBQU87UUFDTCxJQUFNMEcsS0FBSyxHQUFHLElBQUksQ0FBQ21iLFFBQVEsRUFBRTtRQUM3QixJQUFJLENBQUNHLGdCQUFnQixFQUFFO1FBQ3ZCO1FBQ0EsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNyeUIsUUFBUSxFQUFFOHhCLGdCQUFnQixFQUFFLFVBQUFRLGVBQWU7VUFBQSxPQUFJQSxlQUFlLEdBQUd4YixLQUFLO1FBQUEsRUFBQztRQUN2RztRQUNBLElBQUksQ0FBQ3ViLHFCQUFxQixDQUFDVCxzQkFBc0IsRUFBRUUsZ0JBQWdCLEVBQUUsVUFBQVEsZUFBZTtVQUFBLE9BQUlBLGVBQWUsR0FBR3hiLEtBQUs7UUFBQSxFQUFDO1FBQ2hILElBQUksQ0FBQ3ViLHFCQUFxQixDQUFDUix1QkFBdUIsRUFBRUUsZUFBZSxFQUFFLFVBQUFPLGVBQWU7VUFBQSxPQUFJQSxlQUFlLEdBQUd4YixLQUFLO1FBQUEsRUFBQztNQUNsSDtJQUFDO01BQUEvcEIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTgzQixNQUFBLEVBQVE7UUFDTixJQUFJLENBQUN5Tix1QkFBdUIsQ0FBQyxJQUFJLENBQUN2eUIsUUFBUSxFQUFFLFVBQVUsQ0FBQztRQUN2RCxJQUFJLENBQUN1eUIsdUJBQXVCLENBQUMsSUFBSSxDQUFDdnlCLFFBQVEsRUFBRTh4QixnQkFBZ0IsQ0FBQztRQUM3RCxJQUFJLENBQUNTLHVCQUF1QixDQUFDWCxzQkFBc0IsRUFBRUUsZ0JBQWdCLENBQUM7UUFDdEUsSUFBSSxDQUFDUyx1QkFBdUIsQ0FBQ1YsdUJBQXVCLEVBQUVFLGVBQWUsQ0FBQztNQUN4RTtJQUFDO01BQUFobEMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXdsQyxjQUFBLEVBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNQLFFBQVEsRUFBRSxHQUFHLENBQUM7TUFDNUI7O01BRUE7SUFBQTtNQUFBbGxDLEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUFvbEMsaUJBQUEsRUFBbUI7UUFDakIsSUFBSSxDQUFDSyxxQkFBcUIsQ0FBQyxJQUFJLENBQUN6eUIsUUFBUSxFQUFFLFVBQVUsQ0FBQztRQUNyRCxJQUFJLENBQUNBLFFBQVEsQ0FBQytRLEtBQUssQ0FBQ3NPLFFBQVEsR0FBRyxRQUFRO01BQ3pDO0lBQUM7TUFBQXR5QixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBcWxDLHNCQUFzQjdqQyxRQUFRLEVBQUVra0MsYUFBYSxFQUFFMS9CLFFBQVEsRUFBRTtRQUFBLElBQUEyL0IsT0FBQTtRQUN2RCxJQUFNQyxjQUFjLEdBQUcsSUFBSSxDQUFDWCxRQUFRLEVBQUU7UUFDdEMsSUFBTVksb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBRzNsQyxPQUFPLEVBQUk7VUFDdEMsSUFBSUEsT0FBTyxLQUFLeWxDLE9BQUksQ0FBQzN5QixRQUFRLElBQUl2UixNQUFNLENBQUMwakMsVUFBVSxHQUFHamxDLE9BQU8sQ0FBQ3d0QixXQUFXLEdBQUdrWSxjQUFjLEVBQUU7WUFDekY7VUFDRjtVQUNBRCxPQUFJLENBQUNGLHFCQUFxQixDQUFDdmxDLE9BQU8sRUFBRXdsQyxhQUFhLENBQUM7VUFDbEQsSUFBTUosZUFBZSxHQUFHN2pDLE1BQU0sQ0FBQ3dCLGdCQUFnQixDQUFDL0MsT0FBTyxDQUFDLENBQUNtRSxnQkFBZ0IsQ0FBQ3FoQyxhQUFhLENBQUM7VUFDeEZ4bEMsT0FBTyxDQUFDNmpCLEtBQUssQ0FBQytoQixXQUFXLENBQUNKLGFBQWEsS0FBQTNqQyxNQUFBLENBQUtpRSxRQUFRLENBQUMzQyxNQUFNLENBQUNDLFVBQVUsQ0FBQ2dpQyxlQUFlLENBQUMsQ0FBQyxRQUFLO1FBQy9GLENBQUM7UUFDRCxJQUFJLENBQUNTLDBCQUEwQixDQUFDdmtDLFFBQVEsRUFBRXFrQyxvQkFBb0IsQ0FBQztNQUNqRTtJQUFDO01BQUE5bEMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXlsQyxzQkFBc0J2bEMsT0FBTyxFQUFFd2xDLGFBQWEsRUFBRTtRQUM1QyxJQUFNTSxXQUFXLEdBQUc5bEMsT0FBTyxDQUFDNmpCLEtBQUssQ0FBQzFmLGdCQUFnQixDQUFDcWhDLGFBQWEsQ0FBQztRQUNqRSxJQUFJTSxXQUFXLEVBQUU7VUFDZjMxQixXQUFXLENBQUNDLGdCQUFnQixDQUFDcFEsT0FBTyxFQUFFd2xDLGFBQWEsRUFBRU0sV0FBVyxDQUFDO1FBQ25FO01BQ0Y7SUFBQztNQUFBam1DLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF1bEMsd0JBQXdCL2pDLFFBQVEsRUFBRWtrQyxhQUFhLEVBQUU7UUFDL0MsSUFBTUcsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBRzNsQyxPQUFPLEVBQUk7VUFDdEMsSUFBTUYsS0FBSyxHQUFHcVEsV0FBVyxDQUFDYyxnQkFBZ0IsQ0FBQ2pSLE9BQU8sRUFBRXdsQyxhQUFhLENBQUM7VUFDbEU7VUFDQSxJQUFJMWxDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDbEJFLE9BQU8sQ0FBQzZqQixLQUFLLENBQUNraUIsY0FBYyxDQUFDUCxhQUFhLENBQUM7WUFDM0M7VUFDRjtVQUNBcjFCLFdBQVcsQ0FBQ0csbUJBQW1CLENBQUN0USxPQUFPLEVBQUV3bEMsYUFBYSxDQUFDO1VBQ3ZEeGxDLE9BQU8sQ0FBQzZqQixLQUFLLENBQUMraEIsV0FBVyxDQUFDSixhQUFhLEVBQUUxbEMsS0FBSyxDQUFDO1FBQ2pELENBQUM7UUFDRCxJQUFJLENBQUMrbEMsMEJBQTBCLENBQUN2a0MsUUFBUSxFQUFFcWtDLG9CQUFvQixDQUFDO01BQ2pFO0lBQUM7TUFBQTlsQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBK2xDLDJCQUEyQnZrQyxRQUFRLEVBQUUwa0MsUUFBUSxFQUFFO1FBQzdDLElBQUl0aUMsV0FBVyxDQUFDcEMsUUFBUSxDQUFDLEVBQUU7VUFDekIwa0MsUUFBUSxDQUFDMWtDLFFBQVEsQ0FBQztVQUNsQjtRQUNGO1FBQUMsSUFBQTJrQyxXQUFBLEdBQUE5N0IsMEJBQUEsQ0FDaUI2SixjQUFjLENBQUMvSSxJQUFJLENBQUMzSixRQUFRLEVBQUUsSUFBSSxDQUFDd1IsUUFBUSxDQUFDO1VBQUFvekIsT0FBQTtRQUFBO1VBQTlELEtBQUFELFdBQUEsQ0FBQTU3QixDQUFBLE1BQUE2N0IsT0FBQSxHQUFBRCxXQUFBLENBQUEzN0IsQ0FBQSxJQUFBQyxJQUFBLEdBQWdFO1lBQUEsSUFBckQ0N0IsR0FBRyxHQUFBRCxPQUFBLENBQUFwbUMsS0FBQTtZQUNaa21DLFFBQVEsQ0FBQ0csR0FBRyxDQUFDO1VBQ2Y7UUFBQyxTQUFBMTdCLEdBQUE7VUFBQXc3QixXQUFBLENBQUF2N0IsQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQXc3QixXQUFBLENBQUF0N0IsQ0FBQTtRQUFBO01BQ0g7SUFBQztJQUFBLE9BQUFtNkIsZUFBQTtFQUFBO0VBR0g7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBRUU7QUFDRjtBQUNBO0VBRUUsSUFBTXNCLE1BQU0sR0FBRyxVQUFVO0VBQ3pCLElBQU1DLGlCQUFpQixHQUFHLE1BQU07RUFDaEMsSUFBTUMsaUJBQWlCLEdBQUcsTUFBTTtFQUNoQyxJQUFNQyxlQUFlLG1CQUFBMWtDLE1BQUEsQ0FBbUJ1a0MsTUFBTSxDQUFFO0VBQ2hELElBQU1JLFNBQVMsR0FBRztJQUNoQkMsU0FBUyxFQUFFLGdCQUFnQjtJQUMzQkMsYUFBYSxFQUFFLElBQUk7SUFDbkJqekIsVUFBVSxFQUFFLEtBQUs7SUFDakJ6UCxTQUFTLEVBQUUsSUFBSTtJQUNmO0lBQ0EyaUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztFQUN0QixDQUFDOztFQUVELElBQU1DLGFBQWEsR0FBRztJQUNwQkgsU0FBUyxFQUFFLFFBQVE7SUFDbkJDLGFBQWEsRUFBRSxpQkFBaUI7SUFDaENqekIsVUFBVSxFQUFFLFNBQVM7SUFDckJ6UCxTQUFTLEVBQUUsU0FBUztJQUNwQjJpQyxXQUFXLEVBQUU7RUFDZixDQUFDOztFQUVEO0FBQ0Y7QUFDQTtFQUZFLElBSU1FLFFBQVEsMEJBQUFDLFFBQUE7SUFBQXhuQyxTQUFBLENBQUF1bkMsUUFBQSxFQUFBQyxRQUFBO0lBQUEsSUFBQUMsT0FBQSxHQUFBdm5DLFlBQUEsQ0FBQXFuQyxRQUFBO0lBQ1osU0FBQUEsU0FBWXoxQixNQUFNLEVBQUU7TUFBQSxJQUFBNDFCLE9BQUE7TUFBQXZuQyxlQUFBLE9BQUFvbkMsUUFBQTtNQUNsQkcsT0FBQSxHQUFBRCxPQUFBLENBQUEza0MsSUFBQTtNQUNBNGtDLE9BQUEsQ0FBS2owQixPQUFPLEdBQUdpMEIsT0FBQSxDQUFLNzFCLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDO01BQ3RDNDFCLE9BQUEsQ0FBS0MsV0FBVyxHQUFHLEtBQUs7TUFDeEJELE9BQUEsQ0FBS2wwQixRQUFRLEdBQUcsSUFBSTtNQUFDLE9BQUFrMEIsT0FBQTtJQUN2Qjs7SUFFQTtJQUFBcG5DLFlBQUEsQ0FBQWluQyxRQUFBO01BQUFobkMsR0FBQTtNQUFBQyxLQUFBO01BV0E7TUFDQSxTQUFBcWpCLEtBQUtyZCxRQUFRLEVBQUU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDaU4sT0FBTyxDQUFDL08sU0FBUyxFQUFFO1VBQzNCZ0QsT0FBTyxDQUFDbEIsUUFBUSxDQUFDO1VBQ2pCO1FBQ0Y7UUFDQSxJQUFJLENBQUNvaEMsT0FBTyxFQUFFO1FBQ2QsSUFBTWxuQyxPQUFPLEdBQUcsSUFBSSxDQUFDbW5DLFdBQVcsRUFBRTtRQUNsQyxJQUFJLElBQUksQ0FBQ3AwQixPQUFPLENBQUNVLFVBQVUsRUFBRTtVQUMzQmxPLE1BQU0sQ0FBQ3ZGLE9BQU8sQ0FBQztRQUNqQjtRQUNBQSxPQUFPLENBQUMyRSxTQUFTLENBQUNpVixHQUFHLENBQUMwc0IsaUJBQWlCLENBQUM7UUFDeEMsSUFBSSxDQUFDYyxpQkFBaUIsQ0FBQyxZQUFNO1VBQzNCcGdDLE9BQU8sQ0FBQ2xCLFFBQVEsQ0FBQztRQUNuQixDQUFDLENBQUM7TUFDSjtJQUFDO01BQUFqRyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBb2pCLEtBQUtwZCxRQUFRLEVBQUU7UUFBQSxJQUFBdWhDLE9BQUE7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDdDBCLE9BQU8sQ0FBQy9PLFNBQVMsRUFBRTtVQUMzQmdELE9BQU8sQ0FBQ2xCLFFBQVEsQ0FBQztVQUNqQjtRQUNGO1FBQ0EsSUFBSSxDQUFDcWhDLFdBQVcsRUFBRSxDQUFDeGlDLFNBQVMsQ0FBQ2lMLE1BQU0sQ0FBQzAyQixpQkFBaUIsQ0FBQztRQUN0RCxJQUFJLENBQUNjLGlCQUFpQixDQUFDLFlBQU07VUFDM0JDLE9BQUksQ0FBQ24wQixPQUFPLEVBQUU7VUFDZGxNLE9BQU8sQ0FBQ2xCLFFBQVEsQ0FBQztRQUNuQixDQUFDLENBQUM7TUFDSjtJQUFDO01BQUFqRyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBb1QsUUFBQSxFQUFVO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyt6QixXQUFXLEVBQUU7VUFDckI7UUFDRjtRQUNBcjlCLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ2lKLFFBQVEsRUFBRXl6QixlQUFlLENBQUM7UUFDaEQsSUFBSSxDQUFDenpCLFFBQVEsQ0FBQ2xELE1BQU0sRUFBRTtRQUN0QixJQUFJLENBQUNxM0IsV0FBVyxHQUFHLEtBQUs7TUFDMUI7O01BRUE7SUFBQTtNQUFBcG5DLEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUFxbkMsWUFBQSxFQUFjO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQ3IwQixRQUFRLEVBQUU7VUFDbEIsSUFBTXcwQixRQUFRLEdBQUcza0MsUUFBUSxDQUFDNGtDLGFBQWEsQ0FBQyxLQUFLLENBQUM7VUFDOUNELFFBQVEsQ0FBQ2IsU0FBUyxHQUFHLElBQUksQ0FBQzF6QixPQUFPLENBQUMwekIsU0FBUztVQUMzQyxJQUFJLElBQUksQ0FBQzF6QixPQUFPLENBQUNVLFVBQVUsRUFBRTtZQUMzQjZ6QixRQUFRLENBQUMzaUMsU0FBUyxDQUFDaVYsR0FBRyxDQUFDeXNCLGlCQUFpQixDQUFDO1VBQzNDO1VBQ0EsSUFBSSxDQUFDdnpCLFFBQVEsR0FBR3cwQixRQUFRO1FBQzFCO1FBQ0EsT0FBTyxJQUFJLENBQUN4MEIsUUFBUTtNQUN0QjtJQUFDO01BQUFqVCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBd1Isa0JBQWtCRixNQUFNLEVBQUU7UUFDeEI7UUFDQUEsTUFBTSxDQUFDdTFCLFdBQVcsR0FBRzlpQyxVQUFVLENBQUN1TixNQUFNLENBQUN1MUIsV0FBVyxDQUFDO1FBQ25ELE9BQU92MUIsTUFBTTtNQUNmO0lBQUM7TUFBQXZSLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFvbkMsUUFBQSxFQUFVO1FBQUEsSUFBQU0sT0FBQTtRQUNSLElBQUksSUFBSSxDQUFDUCxXQUFXLEVBQUU7VUFDcEI7UUFDRjtRQUNBLElBQU1qbkMsT0FBTyxHQUFHLElBQUksQ0FBQ21uQyxXQUFXLEVBQUU7UUFDbEMsSUFBSSxDQUFDcDBCLE9BQU8sQ0FBQzR6QixXQUFXLENBQUNjLE1BQU0sQ0FBQ3puQyxPQUFPLENBQUM7UUFDeEM0SixZQUFZLENBQUNnRCxFQUFFLENBQUM1TSxPQUFPLEVBQUV1bUMsZUFBZSxFQUFFLFlBQU07VUFDOUN2L0IsT0FBTyxDQUFDd2dDLE9BQUksQ0FBQ3owQixPQUFPLENBQUMyekIsYUFBYSxDQUFDO1FBQ3JDLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQ08sV0FBVyxHQUFHLElBQUk7TUFDekI7SUFBQztNQUFBcG5DLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFzbkMsa0JBQWtCdGhDLFFBQVEsRUFBRTtRQUMxQnVCLHNCQUFzQixDQUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQ3FoQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUNwMEIsT0FBTyxDQUFDVSxVQUFVLENBQUM7TUFDL0U7SUFBQztNQUFBNVQsR0FBQTtNQUFBbVAsR0FBQSxFQTVFRCxTQUFBQSxJQUFBLEVBQXFCO1FBQ25CLE9BQU93M0IsU0FBUztNQUNsQjtJQUFDO01BQUEzbUMsR0FBQTtNQUFBbVAsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBeUI7UUFDdkIsT0FBTzQzQixhQUFhO01BQ3RCO0lBQUM7TUFBQS9tQyxHQUFBO01BQUFtUCxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUFrQjtRQUNoQixPQUFPbzNCLE1BQU07TUFDZjtJQUFDO0lBQUEsT0FBQVMsUUFBQTtFQUFBLEVBakJvQjMxQixNQUFNO0VBd0Y3QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFFRTtBQUNGO0FBQ0E7RUFFRSxJQUFNdzJCLE1BQU0sR0FBRyxXQUFXO0VBQzFCLElBQU1DLFVBQVUsR0FBRyxjQUFjO0VBQ2pDLElBQU1DLFdBQVcsT0FBQS9sQyxNQUFBLENBQU84bEMsVUFBVSxDQUFFO0VBQ3BDLElBQU1FLGVBQWUsYUFBQWhtQyxNQUFBLENBQWErbEMsV0FBVyxDQUFFO0VBQy9DLElBQU1FLGlCQUFpQixpQkFBQWptQyxNQUFBLENBQWlCK2xDLFdBQVcsQ0FBRTtFQUNyRCxJQUFNRyxPQUFPLEdBQUcsS0FBSztFQUNyQixJQUFNQyxlQUFlLEdBQUcsU0FBUztFQUNqQyxJQUFNQyxnQkFBZ0IsR0FBRyxVQUFVO0VBQ25DLElBQU1DLFNBQVMsR0FBRztJQUNoQkMsU0FBUyxFQUFFLElBQUk7SUFDZkMsV0FBVyxFQUFFLElBQUksQ0FBQztFQUNwQixDQUFDOztFQUVELElBQU1DLGFBQWEsR0FBRztJQUNwQkYsU0FBUyxFQUFFLFNBQVM7SUFDcEJDLFdBQVcsRUFBRTtFQUNmLENBQUM7O0VBRUQ7QUFDRjtBQUNBO0VBRkUsSUFJTUUsU0FBUywwQkFBQUMsUUFBQTtJQUFBanBDLFNBQUEsQ0FBQWdwQyxTQUFBLEVBQUFDLFFBQUE7SUFBQSxJQUFBQyxPQUFBLEdBQUFocEMsWUFBQSxDQUFBOG9DLFNBQUE7SUFDYixTQUFBQSxVQUFZbDNCLE1BQU0sRUFBRTtNQUFBLElBQUFxM0IsT0FBQTtNQUFBaHBDLGVBQUEsT0FBQTZvQyxTQUFBO01BQ2xCRyxPQUFBLEdBQUFELE9BQUEsQ0FBQXBtQyxJQUFBO01BQ0FxbUMsT0FBQSxDQUFLMTFCLE9BQU8sR0FBRzAxQixPQUFBLENBQUt0M0IsVUFBVSxDQUFDQyxNQUFNLENBQUM7TUFDdENxM0IsT0FBQSxDQUFLQyxTQUFTLEdBQUcsS0FBSztNQUN0QkQsT0FBQSxDQUFLRSxvQkFBb0IsR0FBRyxJQUFJO01BQUMsT0FBQUYsT0FBQTtJQUNuQzs7SUFFQTtJQUFBN29DLFlBQUEsQ0FBQTBvQyxTQUFBO01BQUF6b0MsR0FBQTtNQUFBQyxLQUFBO01BV0E7TUFDQSxTQUFBOG9DLFNBQUEsRUFBVztRQUFBLElBQUFDLE9BQUE7UUFDVCxJQUFJLElBQUksQ0FBQ0gsU0FBUyxFQUFFO1VBQ2xCO1FBQ0Y7UUFDQSxJQUFJLElBQUksQ0FBQzMxQixPQUFPLENBQUNvMUIsU0FBUyxFQUFFO1VBQzFCLElBQUksQ0FBQ3AxQixPQUFPLENBQUNxMUIsV0FBVyxDQUFDdkYsS0FBSyxFQUFFO1FBQ2xDO1FBQ0FqNUIsWUFBWSxDQUFDQyxHQUFHLENBQUNsSCxRQUFRLEVBQUVpbEMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6Q2grQixZQUFZLENBQUNnRCxFQUFFLENBQUNqSyxRQUFRLEVBQUVrbEMsZUFBZSxFQUFFLFVBQUFyK0IsS0FBSztVQUFBLE9BQUlxL0IsT0FBSSxDQUFDQyxjQUFjLENBQUN0L0IsS0FBSyxDQUFDO1FBQUEsRUFBQztRQUMvRUksWUFBWSxDQUFDZ0QsRUFBRSxDQUFDakssUUFBUSxFQUFFbWxDLGlCQUFpQixFQUFFLFVBQUF0K0IsS0FBSztVQUFBLE9BQUlxL0IsT0FBSSxDQUFDRSxjQUFjLENBQUN2L0IsS0FBSyxDQUFDO1FBQUEsRUFBQztRQUNqRixJQUFJLENBQUNrL0IsU0FBUyxHQUFHLElBQUk7TUFDdkI7SUFBQztNQUFBN29DLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFrcEMsV0FBQSxFQUFhO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQ04sU0FBUyxFQUFFO1VBQ25CO1FBQ0Y7UUFDQSxJQUFJLENBQUNBLFNBQVMsR0FBRyxLQUFLO1FBQ3RCOStCLFlBQVksQ0FBQ0MsR0FBRyxDQUFDbEgsUUFBUSxFQUFFaWxDLFdBQVcsQ0FBQztNQUN6Qzs7TUFFQTtJQUFBO01BQUEvbkMsR0FBQTtNQUFBQyxLQUFBLEVBQ0EsU0FBQWdwQyxlQUFldC9CLEtBQUssRUFBRTtRQUNwQixJQUNFNCtCLFdBQVcsR0FDVCxJQUFJLENBQUNyMUIsT0FBTyxDQURkcTFCLFdBQVc7UUFFYixJQUFJNStCLEtBQUssQ0FBQzNCLE1BQU0sS0FBS2xGLFFBQVEsSUFBSTZHLEtBQUssQ0FBQzNCLE1BQU0sS0FBS3VnQyxXQUFXLElBQUlBLFdBQVcsQ0FBQ3hqQyxRQUFRLENBQUM0RSxLQUFLLENBQUMzQixNQUFNLENBQUMsRUFBRTtVQUNuRztRQUNGO1FBQ0EsSUFBTTBmLFFBQVEsR0FBR3ZULGNBQWMsQ0FBQ2UsaUJBQWlCLENBQUNxekIsV0FBVyxDQUFDO1FBQzlELElBQUk3Z0IsUUFBUSxDQUFDempCLE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDekJza0MsV0FBVyxDQUFDdkYsS0FBSyxFQUFFO1FBQ3JCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQzhGLG9CQUFvQixLQUFLVixnQkFBZ0IsRUFBRTtVQUN6RDFnQixRQUFRLENBQUNBLFFBQVEsQ0FBQ3pqQixNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMrK0IsS0FBSyxFQUFFO1FBQ3ZDLENBQUMsTUFBTTtVQUNMdGIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDc2IsS0FBSyxFQUFFO1FBQ3JCO01BQ0Y7SUFBQztNQUFBaGpDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFpcEMsZUFBZXYvQixLQUFLLEVBQUU7UUFDcEIsSUFBSUEsS0FBSyxDQUFDM0osR0FBRyxLQUFLa29DLE9BQU8sRUFBRTtVQUN6QjtRQUNGO1FBQ0EsSUFBSSxDQUFDWSxvQkFBb0IsR0FBR24vQixLQUFLLENBQUN5L0IsUUFBUSxHQUFHaEIsZ0JBQWdCLEdBQUdELGVBQWU7TUFDakY7SUFBQztNQUFBbm9DLEdBQUE7TUFBQW1QLEdBQUEsRUFyREQsU0FBQUEsSUFBQSxFQUFxQjtRQUNuQixPQUFPazVCLFNBQVM7TUFDbEI7SUFBQztNQUFBcm9DLEdBQUE7TUFBQW1QLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQXlCO1FBQ3ZCLE9BQU9xNUIsYUFBYTtNQUN0QjtJQUFDO01BQUF4b0MsR0FBQTtNQUFBbVAsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBa0I7UUFDaEIsT0FBTzA0QixNQUFNO01BQ2Y7SUFBQztJQUFBLE9BQUFZLFNBQUE7RUFBQSxFQWpCcUJwM0IsTUFBTTtFQWlFOUI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBRUU7QUFDRjtBQUNBO0VBRUUsSUFBTWc0QixNQUFNLEdBQUcsT0FBTztFQUN0QixJQUFNQyxVQUFVLEdBQUcsVUFBVTtFQUM3QixJQUFNQyxXQUFXLE9BQUF2bkMsTUFBQSxDQUFPc25DLFVBQVUsQ0FBRTtFQUNwQyxJQUFNRSxjQUFjLEdBQUcsV0FBVztFQUNsQyxJQUFNQyxZQUFZLEdBQUcsUUFBUTtFQUM3QixJQUFNQyxZQUFZLFVBQUExbkMsTUFBQSxDQUFVdW5DLFdBQVcsQ0FBRTtFQUN6QyxJQUFNSSxzQkFBc0IsbUJBQUEzbkMsTUFBQSxDQUFtQnVuQyxXQUFXLENBQUU7RUFDNUQsSUFBTUssY0FBYyxZQUFBNW5DLE1BQUEsQ0FBWXVuQyxXQUFXLENBQUU7RUFDN0MsSUFBTU0sWUFBWSxVQUFBN25DLE1BQUEsQ0FBVXVuQyxXQUFXLENBQUU7RUFDekMsSUFBTU8sYUFBYSxXQUFBOW5DLE1BQUEsQ0FBV3VuQyxXQUFXLENBQUU7RUFDM0MsSUFBTVEsY0FBYyxZQUFBL25DLE1BQUEsQ0FBWXVuQyxXQUFXLENBQUU7RUFDN0MsSUFBTVMsbUJBQW1CLG1CQUFBaG9DLE1BQUEsQ0FBbUJ1bkMsV0FBVyxDQUFFO0VBQ3pELElBQU1VLHVCQUF1Qix1QkFBQWpvQyxNQUFBLENBQXVCdW5DLFdBQVcsQ0FBRTtFQUNqRSxJQUFNVyx1QkFBdUIscUJBQUFsb0MsTUFBQSxDQUFxQnVuQyxXQUFXLENBQUU7RUFDL0QsSUFBTVksc0JBQXNCLFdBQUFub0MsTUFBQSxDQUFXdW5DLFdBQVcsRUFBQXZuQyxNQUFBLENBQUd3bkMsY0FBYyxDQUFFO0VBQ3JFLElBQU1ZLGVBQWUsR0FBRyxZQUFZO0VBQ3BDLElBQU1DLGlCQUFpQixHQUFHLE1BQU07RUFDaEMsSUFBTUMsaUJBQWlCLEdBQUcsTUFBTTtFQUNoQyxJQUFNQyxpQkFBaUIsR0FBRyxjQUFjO0VBQ3hDLElBQU1DLGVBQWUsR0FBRyxhQUFhO0VBQ3JDLElBQU1DLGVBQWUsR0FBRyxlQUFlO0VBQ3ZDLElBQU1DLG1CQUFtQixHQUFHLGFBQWE7RUFDekMsSUFBTUMsc0JBQXNCLEdBQUcsMEJBQTBCO0VBQ3pELElBQU1DLFNBQVMsR0FBRztJQUNoQm5ELFFBQVEsRUFBRSxJQUFJO0lBQ2R6RSxLQUFLLEVBQUUsSUFBSTtJQUNYeG1CLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDRCxJQUFNcXVCLGFBQWEsR0FBRztJQUNwQnBELFFBQVEsRUFBRSxrQkFBa0I7SUFDNUJ6RSxLQUFLLEVBQUUsU0FBUztJQUNoQnhtQixRQUFRLEVBQUU7RUFDWixDQUFDOztFQUVEO0FBQ0Y7QUFDQTtFQUZFLElBSU1zdUIsS0FBSywwQkFBQUMsZUFBQTtJQUFBdHJDLFNBQUEsQ0FBQXFyQyxLQUFBLEVBQUFDLGVBQUE7SUFBQSxJQUFBQyxRQUFBLEdBQUFyckMsWUFBQSxDQUFBbXJDLEtBQUE7SUFDVCxTQUFBQSxNQUFZM3FDLE9BQU8sRUFBRW9SLE1BQU0sRUFBRTtNQUFBLElBQUEwNUIsT0FBQTtNQUFBcnJDLGVBQUEsT0FBQWtyQyxLQUFBO01BQzNCRyxPQUFBLEdBQUFELFFBQUEsQ0FBQXpvQyxJQUFBLE9BQU1wQyxPQUFPLEVBQUVvUixNQUFNO01BQ3JCMDVCLE9BQUEsQ0FBS0MsT0FBTyxHQUFHLzJCLGNBQWMsQ0FBQ0csT0FBTyxDQUFDbTJCLGVBQWUsRUFBRVEsT0FBQSxDQUFLaDRCLFFBQVEsQ0FBQztNQUNyRWc0QixPQUFBLENBQUtFLFNBQVMsR0FBR0YsT0FBQSxDQUFLRyxtQkFBbUIsRUFBRTtNQUMzQ0gsT0FBQSxDQUFLSSxVQUFVLEdBQUdKLE9BQUEsQ0FBS0ssb0JBQW9CLEVBQUU7TUFDN0NMLE9BQUEsQ0FBSzduQixRQUFRLEdBQUcsS0FBSztNQUNyQjZuQixPQUFBLENBQUt2b0IsZ0JBQWdCLEdBQUcsS0FBSztNQUM3QnVvQixPQUFBLENBQUtNLFVBQVUsR0FBRyxJQUFJdEcsZUFBZSxFQUFFO01BQ3ZDZ0csT0FBQSxDQUFLenRCLGtCQUFrQixFQUFFO01BQUMsT0FBQXl0QixPQUFBO0lBQzVCOztJQUVBO0lBQUFsckMsWUFBQSxDQUFBK3FDLEtBQUE7TUFBQTlxQyxHQUFBO01BQUFDLEtBQUE7TUFXQTtNQUNBLFNBQUF3WCxPQUFPeEwsYUFBYSxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxDQUFDbVgsUUFBUSxHQUFHLElBQUksQ0FBQ0MsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDQyxJQUFJLENBQUNyWCxhQUFhLENBQUM7TUFDL0Q7SUFBQztNQUFBak0sR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXFqQixLQUFLclgsYUFBYSxFQUFFO1FBQUEsSUFBQXUvQixPQUFBO1FBQ2xCLElBQUksSUFBSSxDQUFDcG9CLFFBQVEsSUFBSSxJQUFJLENBQUNWLGdCQUFnQixFQUFFO1VBQzFDO1FBQ0Y7UUFDQSxJQUFNaWdCLFNBQVMsR0FBRzU0QixZQUFZLENBQUNnRSxPQUFPLENBQUMsSUFBSSxDQUFDa0YsUUFBUSxFQUFFNDJCLFlBQVksRUFBRTtVQUNsRTU5QixhQUFhLEVBQWJBO1FBQ0YsQ0FBQyxDQUFDO1FBQ0YsSUFBSTAyQixTQUFTLENBQUN4MEIsZ0JBQWdCLEVBQUU7VUFDOUI7UUFDRjtRQUNBLElBQUksQ0FBQ2lWLFFBQVEsR0FBRyxJQUFJO1FBQ3BCLElBQUksQ0FBQ1YsZ0JBQWdCLEdBQUcsSUFBSTtRQUM1QixJQUFJLENBQUM2b0IsVUFBVSxDQUFDbG9CLElBQUksRUFBRTtRQUN0QnZnQixRQUFRLENBQUNnRCxJQUFJLENBQUNoQixTQUFTLENBQUNpVixHQUFHLENBQUNxd0IsZUFBZSxDQUFDO1FBQzVDLElBQUksQ0FBQ3FCLGFBQWEsRUFBRTtRQUNwQixJQUFJLENBQUNOLFNBQVMsQ0FBQzduQixJQUFJLENBQUM7VUFBQSxPQUFNa29CLE9BQUksQ0FBQ0UsWUFBWSxDQUFDei9CLGFBQWEsQ0FBQztRQUFBLEVBQUM7TUFDN0Q7SUFBQztNQUFBak0sR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW9qQixLQUFBLEVBQU87UUFBQSxJQUFBc29CLE9BQUE7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDdm9CLFFBQVEsSUFBSSxJQUFJLENBQUNWLGdCQUFnQixFQUFFO1VBQzNDO1FBQ0Y7UUFDQSxJQUFNd2dCLFNBQVMsR0FBR241QixZQUFZLENBQUNnRSxPQUFPLENBQUMsSUFBSSxDQUFDa0YsUUFBUSxFQUFFeTJCLFlBQVksQ0FBQztRQUNuRSxJQUFJeEcsU0FBUyxDQUFDLzBCLGdCQUFnQixFQUFFO1VBQzlCO1FBQ0Y7UUFDQSxJQUFJLENBQUNpVixRQUFRLEdBQUcsS0FBSztRQUNyQixJQUFJLENBQUNWLGdCQUFnQixHQUFHLElBQUk7UUFDNUIsSUFBSSxDQUFDMm9CLFVBQVUsQ0FBQ2xDLFVBQVUsRUFBRTtRQUM1QixJQUFJLENBQUNsMkIsUUFBUSxDQUFDbk8sU0FBUyxDQUFDaUwsTUFBTSxDQUFDdTZCLGlCQUFpQixDQUFDO1FBQ2pELElBQUksQ0FBQzMyQixjQUFjLENBQUM7VUFBQSxPQUFNZzRCLE9BQUksQ0FBQ0MsVUFBVSxFQUFFO1FBQUEsR0FBRSxJQUFJLENBQUMzNEIsUUFBUSxFQUFFLElBQUksQ0FBQ3dOLFdBQVcsRUFBRSxDQUFDO01BQ2pGO0lBQUM7TUFBQXpnQixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBb1QsUUFBQSxFQUFVO1FBQ1IsU0FBQXc0QixHQUFBLE1BQUFDLEtBQUEsR0FBMEIsQ0FBQ3BxQyxNQUFNLEVBQUUsSUFBSSxDQUFDd3BDLE9BQU8sQ0FBQyxFQUFBVyxHQUFBLEdBQUFDLEtBQUEsQ0FBQTduQyxNQUFBLEVBQUE0bkMsR0FBQSxJQUFFO1VBQTdDLElBQU1FLFdBQVcsR0FBQUQsS0FBQSxDQUFBRCxHQUFBO1VBQ3BCOWhDLFlBQVksQ0FBQ0MsR0FBRyxDQUFDK2hDLFdBQVcsRUFBRXhDLFdBQVcsQ0FBQztRQUM1QztRQUNBLElBQUksQ0FBQzRCLFNBQVMsQ0FBQzkzQixPQUFPLEVBQUU7UUFDeEIsSUFBSSxDQUFDZzRCLFVBQVUsQ0FBQ2xDLFVBQVUsRUFBRTtRQUM1QnhxQixJQUFBLENBQUFDLGVBQUEsQ0FBQWtzQixLQUFBLENBQUF6b0MsU0FBQSxvQkFBQUUsSUFBQTtNQUNGO0lBQUM7TUFBQXZDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUErckMsYUFBQSxFQUFlO1FBQ2IsSUFBSSxDQUFDUCxhQUFhLEVBQUU7TUFDdEI7O01BRUE7SUFBQTtNQUFBenJDLEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUFtckMsb0JBQUEsRUFBc0I7UUFDcEIsT0FBTyxJQUFJcEUsUUFBUSxDQUFDO1VBQ2xCN2lDLFNBQVMsRUFBRWtJLE9BQU8sQ0FBQyxJQUFJLENBQUM2RyxPQUFPLENBQUN1MEIsUUFBUSxDQUFDO1VBQ3pDO1VBQ0E3ekIsVUFBVSxFQUFFLElBQUksQ0FBQzZNLFdBQVc7UUFDOUIsQ0FBQyxDQUFDO01BQ0o7SUFBQztNQUFBemdCLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFxckMscUJBQUEsRUFBdUI7UUFDckIsT0FBTyxJQUFJN0MsU0FBUyxDQUFDO1VBQ25CRixXQUFXLEVBQUUsSUFBSSxDQUFDdDFCO1FBQ3BCLENBQUMsQ0FBQztNQUNKO0lBQUM7TUFBQWpULEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF5ckMsYUFBYXovQixhQUFhLEVBQUU7UUFBQSxJQUFBZ2dDLE9BQUE7UUFDMUI7UUFDQSxJQUFJLENBQUNucEMsUUFBUSxDQUFDZ0QsSUFBSSxDQUFDZixRQUFRLENBQUMsSUFBSSxDQUFDa08sUUFBUSxDQUFDLEVBQUU7VUFDMUNuUSxRQUFRLENBQUNnRCxJQUFJLENBQUM4aEMsTUFBTSxDQUFDLElBQUksQ0FBQzMwQixRQUFRLENBQUM7UUFDckM7UUFDQSxJQUFJLENBQUNBLFFBQVEsQ0FBQytRLEtBQUssQ0FBQytkLE9BQU8sR0FBRyxPQUFPO1FBQ3JDLElBQUksQ0FBQzl1QixRQUFRLENBQUN2QyxlQUFlLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksQ0FBQ3VDLFFBQVEsQ0FBQ3pDLFlBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQ3lDLFFBQVEsQ0FBQ3pDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1FBQzVDLElBQUksQ0FBQ3lDLFFBQVEsQ0FBQ3dlLFNBQVMsR0FBRyxDQUFDO1FBQzNCLElBQU15YSxTQUFTLEdBQUcvM0IsY0FBYyxDQUFDRyxPQUFPLENBQUNvMkIsbUJBQW1CLEVBQUUsSUFBSSxDQUFDUSxPQUFPLENBQUM7UUFDM0UsSUFBSWdCLFNBQVMsRUFBRTtVQUNiQSxTQUFTLENBQUN6YSxTQUFTLEdBQUcsQ0FBQztRQUN6QjtRQUNBL3JCLE1BQU0sQ0FBQyxJQUFJLENBQUN1TixRQUFRLENBQUM7UUFDckIsSUFBSSxDQUFDQSxRQUFRLENBQUNuTyxTQUFTLENBQUNpVixHQUFHLENBQUN1d0IsaUJBQWlCLENBQUM7UUFDOUMsSUFBTTZCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEsRUFBUztVQUMvQixJQUFJRixPQUFJLENBQUMvNEIsT0FBTyxDQUFDOHZCLEtBQUssRUFBRTtZQUN0QmlKLE9BQUksQ0FBQ1osVUFBVSxDQUFDdEMsUUFBUSxFQUFFO1VBQzVCO1VBQ0FrRCxPQUFJLENBQUN2cEIsZ0JBQWdCLEdBQUcsS0FBSztVQUM3QjNZLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQ2srQixPQUFJLENBQUNoNUIsUUFBUSxFQUFFNjJCLGFBQWEsRUFBRTtZQUNqRDc5QixhQUFhLEVBQWJBO1VBQ0YsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUNELElBQUksQ0FBQzBILGNBQWMsQ0FBQ3c0QixrQkFBa0IsRUFBRSxJQUFJLENBQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDenFCLFdBQVcsRUFBRSxDQUFDO01BQzNFO0lBQUM7TUFBQXpnQixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBdWQsbUJBQUEsRUFBcUI7UUFBQSxJQUFBNHVCLE9BQUE7UUFDbkJyaUMsWUFBWSxDQUFDZ0QsRUFBRSxDQUFDLElBQUksQ0FBQ2tHLFFBQVEsRUFBRWkzQix1QkFBdUIsRUFBRSxVQUFBdmdDLEtBQUssRUFBSTtVQUMvRCxJQUFJQSxLQUFLLENBQUMzSixHQUFHLEtBQUt5cEMsWUFBWSxFQUFFO1lBQzlCO1VBQ0Y7VUFDQSxJQUFJMkMsT0FBSSxDQUFDbDVCLE9BQU8sQ0FBQ3NKLFFBQVEsRUFBRTtZQUN6QjR2QixPQUFJLENBQUMvb0IsSUFBSSxFQUFFO1lBQ1g7VUFDRjtVQUNBK29CLE9BQUksQ0FBQ0MsMEJBQTBCLEVBQUU7UUFDbkMsQ0FBQyxDQUFDO1FBQ0Z0aUMsWUFBWSxDQUFDZ0QsRUFBRSxDQUFDckwsTUFBTSxFQUFFcW9DLGNBQWMsRUFBRSxZQUFNO1VBQzVDLElBQUlxQyxPQUFJLENBQUNocEIsUUFBUSxJQUFJLENBQUNncEIsT0FBSSxDQUFDMXBCLGdCQUFnQixFQUFFO1lBQzNDMHBCLE9BQUksQ0FBQ1gsYUFBYSxFQUFFO1VBQ3RCO1FBQ0YsQ0FBQyxDQUFDO1FBQ0YxaEMsWUFBWSxDQUFDZ0QsRUFBRSxDQUFDLElBQUksQ0FBQ2tHLFFBQVEsRUFBRWczQix1QkFBdUIsRUFBRSxVQUFBdGdDLEtBQUssRUFBSTtVQUMvRDtVQUNBSSxZQUFZLENBQUNpRCxHQUFHLENBQUNvL0IsT0FBSSxDQUFDbjVCLFFBQVEsRUFBRSsyQixtQkFBbUIsRUFBRSxVQUFBc0MsTUFBTSxFQUFJO1lBQzdELElBQUlGLE9BQUksQ0FBQ241QixRQUFRLEtBQUt0SixLQUFLLENBQUMzQixNQUFNLElBQUlva0MsT0FBSSxDQUFDbjVCLFFBQVEsS0FBS3E1QixNQUFNLENBQUN0a0MsTUFBTSxFQUFFO2NBQ3JFO1lBQ0Y7WUFDQSxJQUFJb2tDLE9BQUksQ0FBQ2w1QixPQUFPLENBQUN1MEIsUUFBUSxLQUFLLFFBQVEsRUFBRTtjQUN0QzJFLE9BQUksQ0FBQ0MsMEJBQTBCLEVBQUU7Y0FDakM7WUFDRjtZQUNBLElBQUlELE9BQUksQ0FBQ2w1QixPQUFPLENBQUN1MEIsUUFBUSxFQUFFO2NBQ3pCMkUsT0FBSSxDQUFDL29CLElBQUksRUFBRTtZQUNiO1VBQ0YsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO01BQ0o7SUFBQztNQUFBcmpCLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUEyckMsV0FBQSxFQUFhO1FBQUEsSUFBQVcsT0FBQTtRQUNYLElBQUksQ0FBQ3Q1QixRQUFRLENBQUMrUSxLQUFLLENBQUMrZCxPQUFPLEdBQUcsTUFBTTtRQUNwQyxJQUFJLENBQUM5dUIsUUFBUSxDQUFDekMsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM7UUFDL0MsSUFBSSxDQUFDeUMsUUFBUSxDQUFDdkMsZUFBZSxDQUFDLFlBQVksQ0FBQztRQUMzQyxJQUFJLENBQUN1QyxRQUFRLENBQUN2QyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQ2dTLGdCQUFnQixHQUFHLEtBQUs7UUFDN0IsSUFBSSxDQUFDeW9CLFNBQVMsQ0FBQzluQixJQUFJLENBQUMsWUFBTTtVQUN4QnZnQixRQUFRLENBQUNnRCxJQUFJLENBQUNoQixTQUFTLENBQUNpTCxNQUFNLENBQUNxNkIsZUFBZSxDQUFDO1VBQy9DbUMsT0FBSSxDQUFDQyxpQkFBaUIsRUFBRTtVQUN4QkQsT0FBSSxDQUFDaEIsVUFBVSxDQUFDeFQsS0FBSyxFQUFFO1VBQ3ZCaHVCLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQ3crQixPQUFJLENBQUN0NUIsUUFBUSxFQUFFMjJCLGNBQWMsQ0FBQztRQUNyRCxDQUFDLENBQUM7TUFDSjtJQUFDO01BQUE1cEMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXdnQixZQUFBLEVBQWM7UUFDWixPQUFPLElBQUksQ0FBQ3hOLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDc2xDLGlCQUFpQixDQUFDO01BQzVEO0lBQUM7TUFBQXJxQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBb3NDLDJCQUFBLEVBQTZCO1FBQUEsSUFBQUksT0FBQTtRQUMzQixJQUFNdkosU0FBUyxHQUFHbjVCLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQyxJQUFJLENBQUNrRixRQUFRLEVBQUUwMkIsc0JBQXNCLENBQUM7UUFDN0UsSUFBSXpHLFNBQVMsQ0FBQy8wQixnQkFBZ0IsRUFBRTtVQUM5QjtRQUNGO1FBQ0EsSUFBTXUrQixrQkFBa0IsR0FBRyxJQUFJLENBQUN6NUIsUUFBUSxDQUFDa2YsWUFBWSxHQUFHcnZCLFFBQVEsQ0FBQ3NDLGVBQWUsQ0FBQ3NvQixZQUFZO1FBQzdGLElBQU1pZixnQkFBZ0IsR0FBRyxJQUFJLENBQUMxNUIsUUFBUSxDQUFDK1EsS0FBSyxDQUFDd08sU0FBUztRQUN0RDtRQUNBLElBQUltYSxnQkFBZ0IsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDMTVCLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDd2xDLGlCQUFpQixDQUFDLEVBQUU7VUFDeEY7UUFDRjtRQUNBLElBQUksQ0FBQ21DLGtCQUFrQixFQUFFO1VBQ3ZCLElBQUksQ0FBQ3o1QixRQUFRLENBQUMrUSxLQUFLLENBQUN3TyxTQUFTLEdBQUcsUUFBUTtRQUMxQztRQUNBLElBQUksQ0FBQ3ZmLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ2lWLEdBQUcsQ0FBQ3d3QixpQkFBaUIsQ0FBQztRQUM5QyxJQUFJLENBQUM1MkIsY0FBYyxDQUFDLFlBQU07VUFDeEI4NEIsT0FBSSxDQUFDeDVCLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ2lMLE1BQU0sQ0FBQ3c2QixpQkFBaUIsQ0FBQztVQUNqRGtDLE9BQUksQ0FBQzk0QixjQUFjLENBQUMsWUFBTTtZQUN4Qjg0QixPQUFJLENBQUN4NUIsUUFBUSxDQUFDK1EsS0FBSyxDQUFDd08sU0FBUyxHQUFHbWEsZ0JBQWdCO1VBQ2xELENBQUMsRUFBRUYsT0FBSSxDQUFDdkIsT0FBTyxDQUFDO1FBQ2xCLENBQUMsRUFBRSxJQUFJLENBQUNBLE9BQU8sQ0FBQztRQUNoQixJQUFJLENBQUNqNEIsUUFBUSxDQUFDK3ZCLEtBQUssRUFBRTtNQUN2Qjs7TUFFQTtBQUNKO0FBQ0E7SUFGSTtNQUFBaGpDLEdBQUE7TUFBQUMsS0FBQSxFQUlBLFNBQUF3ckMsY0FBQSxFQUFnQjtRQUNkLElBQU1pQixrQkFBa0IsR0FBRyxJQUFJLENBQUN6NUIsUUFBUSxDQUFDa2YsWUFBWSxHQUFHcnZCLFFBQVEsQ0FBQ3NDLGVBQWUsQ0FBQ3NvQixZQUFZO1FBQzdGLElBQU1tWSxjQUFjLEdBQUcsSUFBSSxDQUFDMEYsVUFBVSxDQUFDckcsUUFBUSxFQUFFO1FBQ2pELElBQU0wSCxpQkFBaUIsR0FBRy9HLGNBQWMsR0FBRyxDQUFDO1FBQzVDLElBQUkrRyxpQkFBaUIsSUFBSSxDQUFDRixrQkFBa0IsRUFBRTtVQUM1QyxJQUFNdDZCLFFBQVEsR0FBRzdMLEtBQUssRUFBRSxHQUFHLGFBQWEsR0FBRyxjQUFjO1VBQ3pELElBQUksQ0FBQzBNLFFBQVEsQ0FBQytRLEtBQUssQ0FBQzVSLFFBQVEsQ0FBQyxNQUFBcFEsTUFBQSxDQUFNNmpDLGNBQWMsT0FBSTtRQUN2RDtRQUNBLElBQUksQ0FBQytHLGlCQUFpQixJQUFJRixrQkFBa0IsRUFBRTtVQUM1QyxJQUFNdDZCLFNBQVEsR0FBRzdMLEtBQUssRUFBRSxHQUFHLGNBQWMsR0FBRyxhQUFhO1VBQ3pELElBQUksQ0FBQzBNLFFBQVEsQ0FBQytRLEtBQUssQ0FBQzVSLFNBQVEsQ0FBQyxNQUFBcFEsTUFBQSxDQUFNNmpDLGNBQWMsT0FBSTtRQUN2RDtNQUNGO0lBQUM7TUFBQTdsQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBdXNDLGtCQUFBLEVBQW9CO1FBQ2xCLElBQUksQ0FBQ3Y1QixRQUFRLENBQUMrUSxLQUFLLENBQUM2b0IsV0FBVyxHQUFHLEVBQUU7UUFDcEMsSUFBSSxDQUFDNTVCLFFBQVEsQ0FBQytRLEtBQUssQ0FBQzhvQixZQUFZLEdBQUcsRUFBRTtNQUN2Qzs7TUFFQTtJQUFBO01BQUE5c0MsR0FBQTtNQUFBbVAsR0FBQSxFQS9MQSxTQUFBQSxJQUFBLEVBQXFCO1FBQ25CLE9BQU95N0IsU0FBUztNQUNsQjtJQUFDO01BQUE1cUMsR0FBQTtNQUFBbVAsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBeUI7UUFDdkIsT0FBTzA3QixhQUFhO01BQ3RCO0lBQUM7TUFBQTdxQyxHQUFBO01BQUFtUCxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUFrQjtRQUNoQixPQUFPazZCLE1BQU07TUFDZjtJQUFDO01BQUFycEMsR0FBQTtNQUFBQyxLQUFBLEVBd0xELFNBQUErRyxnQkFBdUJ1SyxNQUFNLEVBQUV0RixhQUFhLEVBQUU7UUFDNUMsT0FBTyxJQUFJLENBQUM0SyxJQUFJLENBQUMsWUFBWTtVQUMzQixJQUFNQyxJQUFJLEdBQUdnMEIsS0FBSyxDQUFDaDNCLG1CQUFtQixDQUFDLElBQUksRUFBRXZDLE1BQU0sQ0FBQztVQUNwRCxJQUFJLE9BQU9BLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUI7VUFDRjtVQUNBLElBQUksT0FBT3VGLElBQUksQ0FBQ3ZGLE1BQU0sQ0FBQyxLQUFLLFdBQVcsRUFBRTtZQUN2QyxNQUFNLElBQUlrQixTQUFTLHNCQUFBelEsTUFBQSxDQUFxQnVQLE1BQU0sUUFBSTtVQUNwRDtVQUNBdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLENBQUN0RixhQUFhLENBQUM7UUFDN0IsQ0FBQyxDQUFDO01BQ0o7SUFBQztJQUFBLE9BQUE2K0IsS0FBQTtFQUFBLEVBeE5pQmo0QixhQUFhO0VBMk5qQztBQUNGO0FBQ0E7RUFFRTlJLFlBQVksQ0FBQ2dELEVBQUUsQ0FBQ2pLLFFBQVEsRUFBRXFuQyxzQkFBc0IsRUFBRVEsc0JBQXNCLEVBQUUsVUFBVWhoQyxLQUFLLEVBQUU7SUFBQSxJQUFBb2pDLE9BQUE7SUFDekYsSUFBTS9rQyxNQUFNLEdBQUdtTSxjQUFjLENBQUNxQixzQkFBc0IsQ0FBQyxJQUFJLENBQUM7SUFDMUQsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQzFJLFFBQVEsQ0FBQyxJQUFJLENBQUNnSixPQUFPLENBQUMsRUFBRTtNQUN4Q25NLEtBQUssQ0FBQzhFLGNBQWMsRUFBRTtJQUN4QjtJQUNBMUUsWUFBWSxDQUFDaUQsR0FBRyxDQUFDaEYsTUFBTSxFQUFFNmhDLFlBQVksRUFBRSxVQUFBbEgsU0FBUyxFQUFJO01BQ2xELElBQUlBLFNBQVMsQ0FBQ3gwQixnQkFBZ0IsRUFBRTtRQUM5QjtRQUNBO01BQ0Y7TUFDQXBFLFlBQVksQ0FBQ2lELEdBQUcsQ0FBQ2hGLE1BQU0sRUFBRTRoQyxjQUFjLEVBQUUsWUFBTTtRQUM3QyxJQUFJemxDLFNBQVMsQ0FBQzRvQyxPQUFJLENBQUMsRUFBRTtVQUNuQkEsT0FBSSxDQUFDL0osS0FBSyxFQUFFO1FBQ2Q7TUFDRixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7O0lBRUY7SUFDQSxJQUFNZ0ssV0FBVyxHQUFHNzRCLGNBQWMsQ0FBQ0csT0FBTyxDQUFDazJCLGVBQWUsQ0FBQztJQUMzRCxJQUFJd0MsV0FBVyxFQUFFO01BQ2ZsQyxLQUFLLENBQUNqM0IsV0FBVyxDQUFDbTVCLFdBQVcsQ0FBQyxDQUFDM3BCLElBQUksRUFBRTtJQUN2QztJQUNBLElBQU12TSxJQUFJLEdBQUdnMEIsS0FBSyxDQUFDaDNCLG1CQUFtQixDQUFDOUwsTUFBTSxDQUFDO0lBQzlDOE8sSUFBSSxDQUFDVyxNQUFNLENBQUMsSUFBSSxDQUFDO0VBQ25CLENBQUMsQ0FBQztFQUNGL0Isb0JBQW9CLENBQUNvMUIsS0FBSyxDQUFDOztFQUUzQjtBQUNGO0FBQ0E7O0VBRUVya0Msa0JBQWtCLENBQUNxa0MsS0FBSyxDQUFDOztFQUV6QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLElBQU1tQyxNQUFNLEdBQUcsV0FBVztFQUMxQixJQUFNQyxVQUFVLEdBQUcsY0FBYztFQUNqQyxJQUFNQyxXQUFXLE9BQUFuckMsTUFBQSxDQUFPa3JDLFVBQVUsQ0FBRTtFQUNwQyxJQUFNRSxjQUFjLEdBQUcsV0FBVztFQUNsQyxJQUFNQyxxQkFBcUIsVUFBQXJyQyxNQUFBLENBQVVtckMsV0FBVyxFQUFBbnJDLE1BQUEsQ0FBR29yQyxjQUFjLENBQUU7RUFDbkUsSUFBTUUsVUFBVSxHQUFHLFFBQVE7RUFDM0IsSUFBTUMsaUJBQWlCLEdBQUcsTUFBTTtFQUNoQyxJQUFNQyxvQkFBb0IsR0FBRyxTQUFTO0VBQ3RDLElBQU1DLGlCQUFpQixHQUFHLFFBQVE7RUFDbEMsSUFBTUMsbUJBQW1CLEdBQUcsb0JBQW9CO0VBQ2hELElBQU1DLGFBQWEsR0FBRyxpQkFBaUI7RUFDdkMsSUFBTUMsWUFBWSxVQUFBNXJDLE1BQUEsQ0FBVW1yQyxXQUFXLENBQUU7RUFDekMsSUFBTVUsYUFBYSxXQUFBN3JDLE1BQUEsQ0FBV21yQyxXQUFXLENBQUU7RUFDM0MsSUFBTVcsWUFBWSxVQUFBOXJDLE1BQUEsQ0FBVW1yQyxXQUFXLENBQUU7RUFDekMsSUFBTVksb0JBQW9CLG1CQUFBL3JDLE1BQUEsQ0FBbUJtckMsV0FBVyxDQUFFO0VBQzFELElBQU1hLGNBQWMsWUFBQWhzQyxNQUFBLENBQVltckMsV0FBVyxDQUFFO0VBQzdDLElBQU1jLFlBQVksWUFBQWpzQyxNQUFBLENBQVltckMsV0FBVyxDQUFFO0VBQzNDLElBQU1lLHNCQUFzQixXQUFBbHNDLE1BQUEsQ0FBV21yQyxXQUFXLEVBQUFuckMsTUFBQSxDQUFHb3JDLGNBQWMsQ0FBRTtFQUNyRSxJQUFNZSxxQkFBcUIscUJBQUFuc0MsTUFBQSxDQUFxQm1yQyxXQUFXLENBQUU7RUFDN0QsSUFBTWlCLHNCQUFzQixHQUFHLDhCQUE4QjtFQUM3RCxJQUFNQyxTQUFTLEdBQUc7SUFDaEI1RyxRQUFRLEVBQUUsSUFBSTtJQUNkanJCLFFBQVEsRUFBRSxJQUFJO0lBQ2RrVSxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0QsSUFBTTRkLGFBQWEsR0FBRztJQUNwQjdHLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUJqckIsUUFBUSxFQUFFLFNBQVM7SUFDbkJrVSxNQUFNLEVBQUU7RUFDVixDQUFDOztFQUVEO0FBQ0Y7QUFDQTtFQUZFLElBSU02ZCxTQUFTLDBCQUFBQyxlQUFBO0lBQUEvdUMsU0FBQSxDQUFBOHVDLFNBQUEsRUFBQUMsZUFBQTtJQUFBLElBQUFDLFFBQUEsR0FBQTl1QyxZQUFBLENBQUE0dUMsU0FBQTtJQUNiLFNBQUFBLFVBQVlwdUMsT0FBTyxFQUFFb1IsTUFBTSxFQUFFO01BQUEsSUFBQW05QixPQUFBO01BQUE5dUMsZUFBQSxPQUFBMnVDLFNBQUE7TUFDM0JHLE9BQUEsR0FBQUQsUUFBQSxDQUFBbHNDLElBQUEsT0FBTXBDLE9BQU8sRUFBRW9SLE1BQU07TUFDckJtOUIsT0FBQSxDQUFLdHJCLFFBQVEsR0FBRyxLQUFLO01BQ3JCc3JCLE9BQUEsQ0FBS3ZELFNBQVMsR0FBR3VELE9BQUEsQ0FBS3RELG1CQUFtQixFQUFFO01BQzNDc0QsT0FBQSxDQUFLckQsVUFBVSxHQUFHcUQsT0FBQSxDQUFLcEQsb0JBQW9CLEVBQUU7TUFDN0NvRCxPQUFBLENBQUtseEIsa0JBQWtCLEVBQUU7TUFBQyxPQUFBa3hCLE9BQUE7SUFDNUI7O0lBRUE7SUFBQTN1QyxZQUFBLENBQUF3dUMsU0FBQTtNQUFBdnVDLEdBQUE7TUFBQUMsS0FBQTtNQVdBO01BQ0EsU0FBQXdYLE9BQU94TCxhQUFhLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUNtWCxRQUFRLEdBQUcsSUFBSSxDQUFDQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUNDLElBQUksQ0FBQ3JYLGFBQWEsQ0FBQztNQUMvRDtJQUFDO01BQUFqTSxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBcWpCLEtBQUtyWCxhQUFhLEVBQUU7UUFBQSxJQUFBMGlDLE9BQUE7UUFDbEIsSUFBSSxJQUFJLENBQUN2ckIsUUFBUSxFQUFFO1VBQ2pCO1FBQ0Y7UUFDQSxJQUFNdWYsU0FBUyxHQUFHNTRCLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQyxJQUFJLENBQUNrRixRQUFRLEVBQUUyNkIsWUFBWSxFQUFFO1VBQ2xFM2hDLGFBQWEsRUFBYkE7UUFDRixDQUFDLENBQUM7UUFDRixJQUFJMDJCLFNBQVMsQ0FBQ3gwQixnQkFBZ0IsRUFBRTtVQUM5QjtRQUNGO1FBQ0EsSUFBSSxDQUFDaVYsUUFBUSxHQUFHLElBQUk7UUFDcEIsSUFBSSxDQUFDK25CLFNBQVMsQ0FBQzduQixJQUFJLEVBQUU7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQ3BRLE9BQU8sQ0FBQ3dkLE1BQU0sRUFBRTtVQUN4QixJQUFJdVUsZUFBZSxFQUFFLENBQUM1aEIsSUFBSSxFQUFFO1FBQzlCO1FBQ0EsSUFBSSxDQUFDcFEsUUFBUSxDQUFDekMsWUFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUM7UUFDOUMsSUFBSSxDQUFDeUMsUUFBUSxDQUFDekMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7UUFDNUMsSUFBSSxDQUFDeUMsUUFBUSxDQUFDbk8sU0FBUyxDQUFDaVYsR0FBRyxDQUFDeXpCLG9CQUFvQixDQUFDO1FBQ2pELElBQU1odEIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFTO1VBQzdCLElBQUksQ0FBQ211QixPQUFJLENBQUN6N0IsT0FBTyxDQUFDd2QsTUFBTSxJQUFJaWUsT0FBSSxDQUFDejdCLE9BQU8sQ0FBQ3UwQixRQUFRLEVBQUU7WUFDakRrSCxPQUFJLENBQUN0RCxVQUFVLENBQUN0QyxRQUFRLEVBQUU7VUFDNUI7VUFDQTRGLE9BQUksQ0FBQzE3QixRQUFRLENBQUNuTyxTQUFTLENBQUNpVixHQUFHLENBQUN3ekIsaUJBQWlCLENBQUM7VUFDOUNvQixPQUFJLENBQUMxN0IsUUFBUSxDQUFDbk8sU0FBUyxDQUFDaUwsTUFBTSxDQUFDeTlCLG9CQUFvQixDQUFDO1VBQ3BEempDLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQzRnQyxPQUFJLENBQUMxN0IsUUFBUSxFQUFFNDZCLGFBQWEsRUFBRTtZQUNqRDVoQyxhQUFhLEVBQWJBO1VBQ0YsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUNELElBQUksQ0FBQzBILGNBQWMsQ0FBQzZNLGdCQUFnQixFQUFFLElBQUksQ0FBQ3ZOLFFBQVEsRUFBRSxJQUFJLENBQUM7TUFDNUQ7SUFBQztNQUFBalQsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW9qQixLQUFBLEVBQU87UUFBQSxJQUFBdXJCLE9BQUE7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDeHJCLFFBQVEsRUFBRTtVQUNsQjtRQUNGO1FBQ0EsSUFBTThmLFNBQVMsR0FBR241QixZQUFZLENBQUNnRSxPQUFPLENBQUMsSUFBSSxDQUFDa0YsUUFBUSxFQUFFNjZCLFlBQVksQ0FBQztRQUNuRSxJQUFJNUssU0FBUyxDQUFDLzBCLGdCQUFnQixFQUFFO1VBQzlCO1FBQ0Y7UUFDQSxJQUFJLENBQUNrOUIsVUFBVSxDQUFDbEMsVUFBVSxFQUFFO1FBQzVCLElBQUksQ0FBQ2wyQixRQUFRLENBQUM0N0IsSUFBSSxFQUFFO1FBQ3BCLElBQUksQ0FBQ3pyQixRQUFRLEdBQUcsS0FBSztRQUNyQixJQUFJLENBQUNuUSxRQUFRLENBQUNuTyxTQUFTLENBQUNpVixHQUFHLENBQUMwekIsaUJBQWlCLENBQUM7UUFDOUMsSUFBSSxDQUFDdEMsU0FBUyxDQUFDOW5CLElBQUksRUFBRTtRQUNyQixJQUFNeXJCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUEsRUFBUztVQUM3QkYsT0FBSSxDQUFDMzdCLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ2lMLE1BQU0sQ0FBQ3c5QixpQkFBaUIsRUFBRUUsaUJBQWlCLENBQUM7VUFDcEVtQixPQUFJLENBQUMzN0IsUUFBUSxDQUFDdkMsZUFBZSxDQUFDLFlBQVksQ0FBQztVQUMzQ2srQixPQUFJLENBQUMzN0IsUUFBUSxDQUFDdkMsZUFBZSxDQUFDLE1BQU0sQ0FBQztVQUNyQyxJQUFJLENBQUNrK0IsT0FBSSxDQUFDMTdCLE9BQU8sQ0FBQ3dkLE1BQU0sRUFBRTtZQUN4QixJQUFJdVUsZUFBZSxFQUFFLENBQUNsTixLQUFLLEVBQUU7VUFDL0I7VUFDQWh1QixZQUFZLENBQUNnRSxPQUFPLENBQUM2Z0MsT0FBSSxDQUFDMzdCLFFBQVEsRUFBRSs2QixjQUFjLENBQUM7UUFDckQsQ0FBQztRQUNELElBQUksQ0FBQ3I2QixjQUFjLENBQUNtN0IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDNzdCLFFBQVEsRUFBRSxJQUFJLENBQUM7TUFDNUQ7SUFBQztNQUFBalQsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW9ULFFBQUEsRUFBVTtRQUNSLElBQUksQ0FBQzgzQixTQUFTLENBQUM5M0IsT0FBTyxFQUFFO1FBQ3hCLElBQUksQ0FBQ2c0QixVQUFVLENBQUNsQyxVQUFVLEVBQUU7UUFDNUJ4cUIsSUFBQSxDQUFBQyxlQUFBLENBQUEydkIsU0FBQSxDQUFBbHNDLFNBQUEsb0JBQUFFLElBQUE7TUFDRjs7TUFFQTtJQUFBO01BQUF2QyxHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBbXJDLG9CQUFBLEVBQXNCO1FBQUEsSUFBQTJELE9BQUE7UUFDcEIsSUFBTWxJLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQSxFQUFTO1VBQzFCLElBQUlrSSxPQUFJLENBQUM3N0IsT0FBTyxDQUFDdTBCLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDdEMxOUIsWUFBWSxDQUFDZ0UsT0FBTyxDQUFDZ2hDLE9BQUksQ0FBQzk3QixRQUFRLEVBQUU4NkIsb0JBQW9CLENBQUM7WUFDekQ7VUFDRjtVQUNBZ0IsT0FBSSxDQUFDMXJCLElBQUksRUFBRTtRQUNiLENBQUM7O1FBRUQ7UUFDQSxJQUFNbGYsU0FBUyxHQUFHa0ksT0FBTyxDQUFDLElBQUksQ0FBQzZHLE9BQU8sQ0FBQ3UwQixRQUFRLENBQUM7UUFDaEQsT0FBTyxJQUFJVCxRQUFRLENBQUM7VUFDbEJKLFNBQVMsRUFBRThHLG1CQUFtQjtVQUM5QnZwQyxTQUFTLEVBQVRBLFNBQVM7VUFDVHlQLFVBQVUsRUFBRSxJQUFJO1VBQ2hCa3pCLFdBQVcsRUFBRSxJQUFJLENBQUM3ekIsUUFBUSxDQUFDdk8sVUFBVTtVQUNyQ21pQyxhQUFhLEVBQUUxaUMsU0FBUyxHQUFHMGlDLGFBQWEsR0FBRztRQUM3QyxDQUFDLENBQUM7TUFDSjtJQUFDO01BQUE3bUMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXFyQyxxQkFBQSxFQUF1QjtRQUNyQixPQUFPLElBQUk3QyxTQUFTLENBQUM7VUFDbkJGLFdBQVcsRUFBRSxJQUFJLENBQUN0MUI7UUFDcEIsQ0FBQyxDQUFDO01BQ0o7SUFBQztNQUFBalQsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXVkLG1CQUFBLEVBQXFCO1FBQUEsSUFBQXd4QixPQUFBO1FBQ25CamxDLFlBQVksQ0FBQ2dELEVBQUUsQ0FBQyxJQUFJLENBQUNrRyxRQUFRLEVBQUVrN0IscUJBQXFCLEVBQUUsVUFBQXhrQyxLQUFLLEVBQUk7VUFDN0QsSUFBSUEsS0FBSyxDQUFDM0osR0FBRyxLQUFLc3RDLFVBQVUsRUFBRTtZQUM1QjtVQUNGO1VBQ0EsSUFBSTBCLE9BQUksQ0FBQzk3QixPQUFPLENBQUNzSixRQUFRLEVBQUU7WUFDekJ3eUIsT0FBSSxDQUFDM3JCLElBQUksRUFBRTtZQUNYO1VBQ0Y7VUFDQXRaLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQ2loQyxPQUFJLENBQUMvN0IsUUFBUSxFQUFFODZCLG9CQUFvQixDQUFDO1FBQzNELENBQUMsQ0FBQztNQUNKOztNQUVBO0lBQUE7TUFBQS90QyxHQUFBO01BQUFtUCxHQUFBLEVBaEhBLFNBQUFBLElBQUEsRUFBcUI7UUFDbkIsT0FBT2svQixTQUFTO01BQ2xCO0lBQUM7TUFBQXJ1QyxHQUFBO01BQUFtUCxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUF5QjtRQUN2QixPQUFPbS9CLGFBQWE7TUFDdEI7SUFBQztNQUFBdHVDLEdBQUE7TUFBQW1QLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQWtCO1FBQ2hCLE9BQU84OUIsTUFBTTtNQUNmO0lBQUM7TUFBQWp0QyxHQUFBO01BQUFDLEtBQUEsRUF5R0QsU0FBQStHLGdCQUF1QnVLLE1BQU0sRUFBRTtRQUM3QixPQUFPLElBQUksQ0FBQ3NGLElBQUksQ0FBQyxZQUFZO1VBQzNCLElBQU1DLElBQUksR0FBR3kzQixTQUFTLENBQUN6NkIsbUJBQW1CLENBQUMsSUFBSSxFQUFFdkMsTUFBTSxDQUFDO1VBQ3hELElBQUksT0FBT0EsTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM5QjtVQUNGO1VBQ0EsSUFBSXVGLElBQUksQ0FBQ3ZGLE1BQU0sQ0FBQyxLQUFLcFAsU0FBUyxJQUFJb1AsTUFBTSxDQUFDbEUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJa0UsTUFBTSxLQUFLLGFBQWEsRUFBRTtZQUNwRixNQUFNLElBQUlrQixTQUFTLHNCQUFBelEsTUFBQSxDQUFxQnVQLE1BQU0sUUFBSTtVQUNwRDtVQUNBdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3BCLENBQUMsQ0FBQztNQUNKO0lBQUM7SUFBQSxPQUFBZzlCLFNBQUE7RUFBQSxFQXRJcUIxN0IsYUFBYTtFQXlJckM7QUFDRjtBQUNBO0VBRUU5SSxZQUFZLENBQUNnRCxFQUFFLENBQUNqSyxRQUFRLEVBQUVvckMsc0JBQXNCLEVBQUVFLHNCQUFzQixFQUFFLFVBQVV6a0MsS0FBSyxFQUFFO0lBQUEsSUFBQXNsQyxPQUFBO0lBQ3pGLElBQU1qbkMsTUFBTSxHQUFHbU0sY0FBYyxDQUFDcUIsc0JBQXNCLENBQUMsSUFBSSxDQUFDO0lBQzFELElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMxSSxRQUFRLENBQUMsSUFBSSxDQUFDZ0osT0FBTyxDQUFDLEVBQUU7TUFDeENuTSxLQUFLLENBQUM4RSxjQUFjLEVBQUU7SUFDeEI7SUFDQSxJQUFJOUosVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO01BQ3BCO0lBQ0Y7SUFDQW9GLFlBQVksQ0FBQ2lELEdBQUcsQ0FBQ2hGLE1BQU0sRUFBRWdtQyxjQUFjLEVBQUUsWUFBTTtNQUM3QztNQUNBLElBQUk3cEMsU0FBUyxDQUFDOHFDLE9BQUksQ0FBQyxFQUFFO1FBQ25CQSxPQUFJLENBQUNqTSxLQUFLLEVBQUU7TUFDZDtJQUNGLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQU1nSyxXQUFXLEdBQUc3NEIsY0FBYyxDQUFDRyxPQUFPLENBQUNxNUIsYUFBYSxDQUFDO0lBQ3pELElBQUlYLFdBQVcsSUFBSUEsV0FBVyxLQUFLaGxDLE1BQU0sRUFBRTtNQUN6Q3VtQyxTQUFTLENBQUMxNkIsV0FBVyxDQUFDbTVCLFdBQVcsQ0FBQyxDQUFDM3BCLElBQUksRUFBRTtJQUMzQztJQUNBLElBQU12TSxJQUFJLEdBQUd5M0IsU0FBUyxDQUFDejZCLG1CQUFtQixDQUFDOUwsTUFBTSxDQUFDO0lBQ2xEOE8sSUFBSSxDQUFDVyxNQUFNLENBQUMsSUFBSSxDQUFDO0VBQ25CLENBQUMsQ0FBQztFQUNGMU4sWUFBWSxDQUFDZ0QsRUFBRSxDQUFDckwsTUFBTSxFQUFFMnJDLHFCQUFxQixFQUFFLFlBQU07SUFBQSxJQUFBNkIsV0FBQSxHQUFBNWtDLDBCQUFBLENBQzVCNkosY0FBYyxDQUFDL0ksSUFBSSxDQUFDdWlDLGFBQWEsQ0FBQztNQUFBd0IsT0FBQTtJQUFBO01BQXpELEtBQUFELFdBQUEsQ0FBQTFrQyxDQUFBLE1BQUEya0MsT0FBQSxHQUFBRCxXQUFBLENBQUF6a0MsQ0FBQSxJQUFBQyxJQUFBLEdBQTJEO1FBQUEsSUFBaERqSixRQUFRLEdBQUEwdEMsT0FBQSxDQUFBbHZDLEtBQUE7UUFDakJzdUMsU0FBUyxDQUFDejZCLG1CQUFtQixDQUFDclMsUUFBUSxDQUFDLENBQUM2aEIsSUFBSSxFQUFFO01BQ2hEO0lBQUMsU0FBQTFZLEdBQUE7TUFBQXNrQyxXQUFBLENBQUFya0MsQ0FBQSxDQUFBRCxHQUFBO0lBQUE7TUFBQXNrQyxXQUFBLENBQUFwa0MsQ0FBQTtJQUFBO0VBQ0gsQ0FBQyxDQUFDO0VBQ0ZmLFlBQVksQ0FBQ2dELEVBQUUsQ0FBQ3JMLE1BQU0sRUFBRXVzQyxZQUFZLEVBQUUsWUFBTTtJQUFBLElBQUFtQixXQUFBLEdBQUE5a0MsMEJBQUEsQ0FDcEI2SixjQUFjLENBQUMvSSxJQUFJLENBQUMsOENBQThDLENBQUM7TUFBQWlrQyxPQUFBO0lBQUE7TUFBekYsS0FBQUQsV0FBQSxDQUFBNWtDLENBQUEsTUFBQTZrQyxPQUFBLEdBQUFELFdBQUEsQ0FBQTNrQyxDQUFBLElBQUFDLElBQUEsR0FBMkY7UUFBQSxJQUFoRnZLLE9BQU8sR0FBQWt2QyxPQUFBLENBQUFwdkMsS0FBQTtRQUNoQixJQUFJaUQsZ0JBQWdCLENBQUMvQyxPQUFPLENBQUMsQ0FBQzhuQixRQUFRLEtBQUssT0FBTyxFQUFFO1VBQ2xEc21CLFNBQVMsQ0FBQ3o2QixtQkFBbUIsQ0FBQzNULE9BQU8sQ0FBQyxDQUFDa2pCLElBQUksRUFBRTtRQUMvQztNQUNGO0lBQUMsU0FBQXpZLEdBQUE7TUFBQXdrQyxXQUFBLENBQUF2a0MsQ0FBQSxDQUFBRCxHQUFBO0lBQUE7TUFBQXdrQyxXQUFBLENBQUF0a0MsQ0FBQTtJQUFBO0VBQ0gsQ0FBQyxDQUFDO0VBQ0Y0SyxvQkFBb0IsQ0FBQzY0QixTQUFTLENBQUM7O0VBRS9CO0FBQ0Y7QUFDQTs7RUFFRTluQyxrQkFBa0IsQ0FBQzhuQyxTQUFTLENBQUM7O0VBRTdCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRSxJQUFNZSxhQUFhLEdBQUcsSUFBSWhtQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7RUFDcEgsSUFBTWltQyxzQkFBc0IsR0FBRyxnQkFBZ0I7O0VBRS9DO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFDRSxJQUFNQyxnQkFBZ0IsR0FBRyxnRUFBZ0U7O0VBRXpGO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFDRSxJQUFNQyxnQkFBZ0IsR0FBRyxvSUFBb0k7RUFDN0osSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSWxuQixTQUFTLEVBQUVtbkIsb0JBQW9CLEVBQUs7SUFDNUQsSUFBTUMsYUFBYSxHQUFHcG5CLFNBQVMsQ0FBQzNCLFFBQVEsQ0FBQ3JrQixXQUFXLEVBQUU7SUFDdEQsSUFBSW10QyxvQkFBb0IsQ0FBQzdpQyxRQUFRLENBQUM4aUMsYUFBYSxDQUFDLEVBQUU7TUFDaEQsSUFBSU4sYUFBYSxDQUFDM2pDLEdBQUcsQ0FBQ2lrQyxhQUFhLENBQUMsRUFBRTtRQUNwQyxPQUFPdmpDLE9BQU8sQ0FBQ21qQyxnQkFBZ0IsQ0FBQ2g5QixJQUFJLENBQUNnVyxTQUFTLENBQUNxbkIsU0FBUyxDQUFDLElBQUlKLGdCQUFnQixDQUFDajlCLElBQUksQ0FBQ2dXLFNBQVMsQ0FBQ3FuQixTQUFTLENBQUMsQ0FBQztNQUMxRztNQUNBLE9BQU8sSUFBSTtJQUNiOztJQUVBO0lBQ0EsT0FBT0Ysb0JBQW9CLENBQUM1K0IsTUFBTSxDQUFDLFVBQUErK0IsY0FBYztNQUFBLE9BQUlBLGNBQWMsWUFBWXY5QixNQUFNO0lBQUEsRUFBQyxDQUFDNmxCLElBQUksQ0FBQyxVQUFBMlgsS0FBSztNQUFBLE9BQUlBLEtBQUssQ0FBQ3Y5QixJQUFJLENBQUNvOUIsYUFBYSxDQUFDO0lBQUEsRUFBQztFQUNqSSxDQUFDO0VBQ0QsSUFBTUksZ0JBQWdCLEdBQUc7SUFDdkI7SUFDQSxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFVCxzQkFBc0IsQ0FBQztJQUNuRXpaLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUNyQ21hLElBQUksRUFBRSxFQUFFO0lBQ1JsYSxDQUFDLEVBQUUsRUFBRTtJQUNMbWEsRUFBRSxFQUFFLEVBQUU7SUFDTkMsR0FBRyxFQUFFLEVBQUU7SUFDUEMsSUFBSSxFQUFFLEVBQUU7SUFDUkMsR0FBRyxFQUFFLEVBQUU7SUFDUEMsRUFBRSxFQUFFLEVBQUU7SUFDTkMsRUFBRSxFQUFFLEVBQUU7SUFDTkMsRUFBRSxFQUFFLEVBQUU7SUFDTkMsRUFBRSxFQUFFLEVBQUU7SUFDTkMsRUFBRSxFQUFFLEVBQUU7SUFDTkMsRUFBRSxFQUFFLEVBQUU7SUFDTkMsRUFBRSxFQUFFLEVBQUU7SUFDTkMsRUFBRSxFQUFFLEVBQUU7SUFDTjNaLENBQUMsRUFBRSxFQUFFO0lBQ0w5WCxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUN6RDB4QixFQUFFLEVBQUUsRUFBRTtJQUNOQyxFQUFFLEVBQUUsRUFBRTtJQUNOQyxDQUFDLEVBQUUsRUFBRTtJQUNMQyxHQUFHLEVBQUUsRUFBRTtJQUNQem1DLENBQUMsRUFBRSxFQUFFO0lBQ0wwbUMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsSUFBSSxFQUFFLEVBQUU7SUFDUkMsR0FBRyxFQUFFLEVBQUU7SUFDUEMsR0FBRyxFQUFFLEVBQUU7SUFDUEMsTUFBTSxFQUFFLEVBQUU7SUFDVkMsQ0FBQyxFQUFFLEVBQUU7SUFDTEMsRUFBRSxFQUFFO0VBQ04sQ0FBQztFQUNELFNBQVNDLFlBQVlBLENBQUNDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxnQkFBZ0IsRUFBRTtJQUFBLElBQUFDLE1BQUE7SUFDN0QsSUFBSSxDQUFDSCxVQUFVLENBQUN6dEMsTUFBTSxFQUFFO01BQ3RCLE9BQU95dEMsVUFBVTtJQUNuQjtJQUNBLElBQUlFLGdCQUFnQixJQUFJLE9BQU9BLGdCQUFnQixLQUFLLFVBQVUsRUFBRTtNQUM5RCxPQUFPQSxnQkFBZ0IsQ0FBQ0YsVUFBVSxDQUFDO0lBQ3JDO0lBQ0EsSUFBTUksU0FBUyxHQUFHLElBQUlwd0MsTUFBTSxDQUFDcXdDLFNBQVMsRUFBRTtJQUN4QyxJQUFNQyxlQUFlLEdBQUdGLFNBQVMsQ0FBQ0csZUFBZSxDQUFDUCxVQUFVLEVBQUUsV0FBVyxDQUFDO0lBQzFFLElBQU1ocUIsUUFBUSxHQUFHLENBQUFtcUIsTUFBQSxLQUFFLEVBQUM3dkMsTUFBTSxDQUFBbkMsS0FBQSxDQUFBZ3lDLE1BQUEsRUFBQXRxQyxrQkFBQSxDQUFJeXFDLGVBQWUsQ0FBQ2xzQyxJQUFJLENBQUNzRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsRUFBQztJQUFDLElBQUE4bkMsV0FBQSxHQUFBNW5DLDBCQUFBLENBQ3BEb2QsUUFBUTtNQUFBeXFCLE9BQUE7SUFBQTtNQUE5QixLQUFBRCxXQUFBLENBQUExbkMsQ0FBQSxNQUFBMm5DLE9BQUEsR0FBQUQsV0FBQSxDQUFBem5DLENBQUEsSUFBQUMsSUFBQSxHQUFnQztRQUFBLElBQUEwbkMsTUFBQTtRQUFBLElBQXJCanlDLE9BQU8sR0FBQWd5QyxPQUFBLENBQUFseUMsS0FBQTtRQUNoQixJQUFNb3lDLFdBQVcsR0FBR2x5QyxPQUFPLENBQUMwbUIsUUFBUSxDQUFDcmtCLFdBQVcsRUFBRTtRQUNsRCxJQUFJLENBQUNKLE1BQU0sQ0FBQ2tMLElBQUksQ0FBQ3FrQyxTQUFTLENBQUMsQ0FBQzdrQyxRQUFRLENBQUN1bEMsV0FBVyxDQUFDLEVBQUU7VUFDakRseUMsT0FBTyxDQUFDNFAsTUFBTSxFQUFFO1VBQ2hCO1FBQ0Y7UUFDQSxJQUFNdWlDLGFBQWEsR0FBRyxDQUFBRixNQUFBLEtBQUUsRUFBQ3B3QyxNQUFNLENBQUFuQyxLQUFBLENBQUF1eUMsTUFBQSxFQUFBN3FDLGtCQUFBLENBQUlwSCxPQUFPLENBQUN5USxVQUFVLEVBQUM7UUFDdEQsSUFBTTJoQyxpQkFBaUIsR0FBRyxFQUFFLENBQUN2d0MsTUFBTSxDQUFDMnZDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUVBLFNBQVMsQ0FBQ1UsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQUMsSUFBQUcsV0FBQSxHQUFBbG9DLDBCQUFBLENBQ2hFZ29DLGFBQWE7VUFBQUcsT0FBQTtRQUFBO1VBQXJDLEtBQUFELFdBQUEsQ0FBQWhvQyxDQUFBLE1BQUFpb0MsT0FBQSxHQUFBRCxXQUFBLENBQUEvbkMsQ0FBQSxJQUFBQyxJQUFBLEdBQXVDO1lBQUEsSUFBNUI4ZCxTQUFTLEdBQUFpcUIsT0FBQSxDQUFBeHlDLEtBQUE7WUFDbEIsSUFBSSxDQUFDeXZDLGdCQUFnQixDQUFDbG5CLFNBQVMsRUFBRStwQixpQkFBaUIsQ0FBQyxFQUFFO2NBQ25EcHlDLE9BQU8sQ0FBQ3VRLGVBQWUsQ0FBQzhYLFNBQVMsQ0FBQzNCLFFBQVEsQ0FBQztZQUM3QztVQUNGO1FBQUMsU0FBQWpjLEdBQUE7VUFBQTRuQyxXQUFBLENBQUEzbkMsQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQTRuQyxXQUFBLENBQUExbkMsQ0FBQTtRQUFBO01BQ0g7SUFBQyxTQUFBRixHQUFBO01BQUFzbkMsV0FBQSxDQUFBcm5DLENBQUEsQ0FBQUQsR0FBQTtJQUFBO01BQUFzbkMsV0FBQSxDQUFBcG5DLENBQUE7SUFBQTtJQUNELE9BQU9rbkMsZUFBZSxDQUFDbHNDLElBQUksQ0FBQzRzQyxTQUFTO0VBQ3ZDOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsSUFBTUMsTUFBTSxHQUFHLGlCQUFpQjtFQUNoQyxJQUFNQyxTQUFTLEdBQUc7SUFDaEJqQixTQUFTLEVBQUUzQixnQkFBZ0I7SUFDM0I2QyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ1g7SUFDQUMsVUFBVSxFQUFFLEVBQUU7SUFDZGpoQixJQUFJLEVBQUUsS0FBSztJQUNYa2hCLFFBQVEsRUFBRSxJQUFJO0lBQ2RDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0QsSUFBTUMsYUFBYSxHQUFHO0lBQ3BCdkIsU0FBUyxFQUFFLFFBQVE7SUFDbkJrQixPQUFPLEVBQUUsUUFBUTtJQUNqQkMsVUFBVSxFQUFFLG1CQUFtQjtJQUMvQmpoQixJQUFJLEVBQUUsU0FBUztJQUNma2hCLFFBQVEsRUFBRSxTQUFTO0lBQ25CQyxVQUFVLEVBQUUsaUJBQWlCO0lBQzdCQyxRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0QsSUFBTUUsa0JBQWtCLEdBQUc7SUFDekJDLEtBQUssRUFBRSxnQ0FBZ0M7SUFDdkMzeEMsUUFBUSxFQUFFO0VBQ1osQ0FBQzs7RUFFRDtBQUNGO0FBQ0E7RUFGRSxJQUlNNHhDLGVBQWUsMEJBQUFDLFFBQUE7SUFBQTd6QyxTQUFBLENBQUE0ekMsZUFBQSxFQUFBQyxRQUFBO0lBQUEsSUFBQUMsUUFBQSxHQUFBNXpDLFlBQUEsQ0FBQTB6QyxlQUFBO0lBQ25CLFNBQUFBLGdCQUFZOWhDLE1BQU0sRUFBRTtNQUFBLElBQUFpaUMsT0FBQTtNQUFBNXpDLGVBQUEsT0FBQXl6QyxlQUFBO01BQ2xCRyxPQUFBLEdBQUFELFFBQUEsQ0FBQWh4QyxJQUFBO01BQ0FpeEMsT0FBQSxDQUFLdGdDLE9BQU8sR0FBR3NnQyxPQUFBLENBQUtsaUMsVUFBVSxDQUFDQyxNQUFNLENBQUM7TUFBQyxPQUFBaWlDLE9BQUE7SUFDekM7O0lBRUE7SUFBQXp6QyxZQUFBLENBQUFzekMsZUFBQTtNQUFBcnpDLEdBQUE7TUFBQUMsS0FBQTtNQVdBO01BQ0EsU0FBQXd6QyxXQUFBLEVBQWE7UUFBQSxJQUFBQyxPQUFBO1FBQ1gsT0FBT3R4QyxNQUFNLENBQUMrSSxNQUFNLENBQUMsSUFBSSxDQUFDK0gsT0FBTyxDQUFDMi9CLE9BQU8sQ0FBQyxDQUFDejlCLEdBQUcsQ0FBQyxVQUFBN0QsTUFBTTtVQUFBLE9BQUltaUMsT0FBSSxDQUFDQyx3QkFBd0IsQ0FBQ3BpQyxNQUFNLENBQUM7UUFBQSxFQUFDLENBQUNSLE1BQU0sQ0FBQzFFLE9BQU8sQ0FBQztNQUNqSDtJQUFDO01BQUFyTSxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBMnpDLFdBQUEsRUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSCxVQUFVLEVBQUUsQ0FBQ3h2QyxNQUFNLEdBQUcsQ0FBQztNQUNyQztJQUFDO01BQUFqRSxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBNHpDLGNBQWNoQixPQUFPLEVBQUU7UUFDckIsSUFBSSxDQUFDaUIsYUFBYSxDQUFDakIsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQzMvQixPQUFPLENBQUMyL0IsT0FBTyxHQUFBamhDLGFBQUEsQ0FBQUEsYUFBQSxLQUNmLElBQUksQ0FBQ3NCLE9BQU8sQ0FBQzIvQixPQUFPLEdBQ3BCQSxPQUFPLENBQ1g7UUFDRCxPQUFPLElBQUk7TUFDYjtJQUFDO01BQUE3eUMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTh6QyxPQUFBLEVBQVM7UUFDUCxJQUFNQyxlQUFlLEdBQUdseEMsUUFBUSxDQUFDNGtDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDckRzTSxlQUFlLENBQUN0QixTQUFTLEdBQUcsSUFBSSxDQUFDdUIsY0FBYyxDQUFDLElBQUksQ0FBQy9nQyxPQUFPLENBQUMrL0IsUUFBUSxDQUFDO1FBQ3RFLFNBQUFpQixHQUFBLE1BQUFDLGdCQUFBLEdBQStCL3hDLE1BQU0sQ0FBQ3VLLE9BQU8sQ0FBQyxJQUFJLENBQUN1RyxPQUFPLENBQUMyL0IsT0FBTyxDQUFDLEVBQUFxQixHQUFBLEdBQUFDLGdCQUFBLENBQUFsd0MsTUFBQSxFQUFBaXdDLEdBQUEsSUFBRTtVQUFoRSxJQUFBRSxtQkFBQSxHQUFBcm9DLGNBQUEsQ0FBQW9vQyxnQkFBQSxDQUFBRCxHQUFBO1lBQU96eUMsUUFBUSxHQUFBMnlDLG1CQUFBO1lBQUVDLElBQUksR0FBQUQsbUJBQUE7VUFDeEIsSUFBSSxDQUFDRSxXQUFXLENBQUNOLGVBQWUsRUFBRUssSUFBSSxFQUFFNXlDLFFBQVEsQ0FBQztRQUNuRDtRQUNBLElBQU13eEMsUUFBUSxHQUFHZSxlQUFlLENBQUN6L0IsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFNdStCLFVBQVUsR0FBRyxJQUFJLENBQUNhLHdCQUF3QixDQUFDLElBQUksQ0FBQ3pnQyxPQUFPLENBQUM0L0IsVUFBVSxDQUFDO1FBQ3pFLElBQUlBLFVBQVUsRUFBRTtVQUFBLElBQUF5QixtQkFBQTtVQUNkLENBQUFBLG1CQUFBLEdBQUF0QixRQUFRLENBQUNudUMsU0FBUyxFQUFDaVYsR0FBRyxDQUFBbGEsS0FBQSxDQUFBMDBDLG1CQUFBLEVBQUFodEMsa0JBQUEsQ0FBSXVyQyxVQUFVLENBQUNydkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDO1FBQ2xEO1FBQ0EsT0FBT3d2QyxRQUFRO01BQ2pCOztNQUVBO0lBQUE7TUFBQWp6QyxHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBeVIsaUJBQWlCSCxNQUFNLEVBQUU7UUFDdkJvTixJQUFBLENBQUFDLGVBQUEsQ0FBQXkwQixlQUFBLENBQUFoeEMsU0FBQSw2QkFBQUUsSUFBQSxPQUF1QmdQLE1BQU07UUFDN0IsSUFBSSxDQUFDdWlDLGFBQWEsQ0FBQ3ZpQyxNQUFNLENBQUNzaEMsT0FBTyxDQUFDO01BQ3BDO0lBQUM7TUFBQTd5QyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBNnpDLGNBQWNVLEdBQUcsRUFBRTtRQUNqQixTQUFBQyxJQUFBLE1BQUFDLGdCQUFBLEdBQWtDdHlDLE1BQU0sQ0FBQ3VLLE9BQU8sQ0FBQzZuQyxHQUFHLENBQUMsRUFBQUMsSUFBQSxHQUFBQyxnQkFBQSxDQUFBendDLE1BQUEsRUFBQXd3QyxJQUFBLElBQUU7VUFBbEQsSUFBQUUsbUJBQUEsR0FBQTVvQyxjQUFBLENBQUEyb0MsZ0JBQUEsQ0FBQUQsSUFBQTtZQUFPaHpDLFFBQVEsR0FBQWt6QyxtQkFBQTtZQUFFOUIsT0FBTyxHQUFBOEIsbUJBQUE7VUFDM0JoMkIsSUFBQSxDQUFBQyxlQUFBLENBQUF5MEIsZUFBQSxDQUFBaHhDLFNBQUEsNkJBQUFFLElBQUEsT0FBdUI7WUFDckJkLFFBQVEsRUFBUkEsUUFBUTtZQUNSMnhDLEtBQUssRUFBRVA7VUFDVCxDQUFDLEVBQUVNLGtCQUFrQjtRQUN2QjtNQUNGO0lBQUM7TUFBQW56QyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBcTBDLFlBQVlyQixRQUFRLEVBQUVKLE9BQU8sRUFBRXB4QyxRQUFRLEVBQUU7UUFDdkMsSUFBTW16QyxlQUFlLEdBQUd6Z0MsY0FBYyxDQUFDRyxPQUFPLENBQUM3UyxRQUFRLEVBQUV3eEMsUUFBUSxDQUFDO1FBQ2xFLElBQUksQ0FBQzJCLGVBQWUsRUFBRTtVQUNwQjtRQUNGO1FBQ0EvQixPQUFPLEdBQUcsSUFBSSxDQUFDYyx3QkFBd0IsQ0FBQ2QsT0FBTyxDQUFDO1FBQ2hELElBQUksQ0FBQ0EsT0FBTyxFQUFFO1VBQ1orQixlQUFlLENBQUM3a0MsTUFBTSxFQUFFO1VBQ3hCO1FBQ0Y7UUFDQSxJQUFJbE0sV0FBVyxDQUFDZ3ZDLE9BQU8sQ0FBQyxFQUFFO1VBQ3hCLElBQUksQ0FBQ2dDLHFCQUFxQixDQUFDN3dDLFVBQVUsQ0FBQzZ1QyxPQUFPLENBQUMsRUFBRStCLGVBQWUsQ0FBQztVQUNoRTtRQUNGO1FBQ0EsSUFBSSxJQUFJLENBQUMxaEMsT0FBTyxDQUFDMmUsSUFBSSxFQUFFO1VBQ3JCK2lCLGVBQWUsQ0FBQ2xDLFNBQVMsR0FBRyxJQUFJLENBQUN1QixjQUFjLENBQUNwQixPQUFPLENBQUM7VUFDeEQ7UUFDRjtRQUNBK0IsZUFBZSxDQUFDeDBDLFdBQVcsR0FBR3l5QyxPQUFPO01BQ3ZDO0lBQUM7TUFBQTd5QyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBZzBDLGVBQWVPLEdBQUcsRUFBRTtRQUNsQixPQUFPLElBQUksQ0FBQ3RoQyxPQUFPLENBQUM2L0IsUUFBUSxHQUFHdEIsWUFBWSxDQUFDK0MsR0FBRyxFQUFFLElBQUksQ0FBQ3RoQyxPQUFPLENBQUN5K0IsU0FBUyxFQUFFLElBQUksQ0FBQ3orQixPQUFPLENBQUM4L0IsVUFBVSxDQUFDLEdBQUd3QixHQUFHO01BQ3pHO0lBQUM7TUFBQXgwQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBMHpDLHlCQUF5QmEsR0FBRyxFQUFFO1FBQzVCLE9BQU9ydEMsT0FBTyxDQUFDcXRDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQzdCO0lBQUM7TUFBQXgwQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBNDBDLHNCQUFzQjEwQyxPQUFPLEVBQUV5MEMsZUFBZSxFQUFFO1FBQzlDLElBQUksSUFBSSxDQUFDMWhDLE9BQU8sQ0FBQzJlLElBQUksRUFBRTtVQUNyQitpQixlQUFlLENBQUNsQyxTQUFTLEdBQUcsRUFBRTtVQUM5QmtDLGVBQWUsQ0FBQ2hOLE1BQU0sQ0FBQ3puQyxPQUFPLENBQUM7VUFDL0I7UUFDRjtRQUNBeTBDLGVBQWUsQ0FBQ3gwQyxXQUFXLEdBQUdELE9BQU8sQ0FBQ0MsV0FBVztNQUNuRDtJQUFDO01BQUFKLEdBQUE7TUFBQW1QLEdBQUEsRUFyRkQsU0FBQUEsSUFBQSxFQUFxQjtRQUNuQixPQUFPeWpDLFNBQVM7TUFDbEI7SUFBQztNQUFBNXlDLEdBQUE7TUFBQW1QLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQXlCO1FBQ3ZCLE9BQU8rakMsYUFBYTtNQUN0QjtJQUFDO01BQUFsekMsR0FBQTtNQUFBbVAsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBa0I7UUFDaEIsT0FBT3dqQyxNQUFNO01BQ2Y7SUFBQztJQUFBLE9BQUFVLGVBQUE7RUFBQSxFQWYyQmhpQyxNQUFNO0VBK0ZwQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFFRTtBQUNGO0FBQ0E7RUFFRSxJQUFNeWpDLE1BQU0sR0FBRyxTQUFTO0VBQ3hCLElBQU1DLHFCQUFxQixHQUFHLElBQUl6ckMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztFQUM5RSxJQUFNMHJDLGlCQUFpQixHQUFHLE1BQU07RUFDaEMsSUFBTUMsZ0JBQWdCLEdBQUcsT0FBTztFQUNoQyxJQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0VBQ2hDLElBQU1DLHNCQUFzQixHQUFHLGdCQUFnQjtFQUMvQyxJQUFNQyxjQUFjLE9BQUFwekMsTUFBQSxDQUFPaXpDLGdCQUFnQixDQUFFO0VBQzdDLElBQU1JLGdCQUFnQixHQUFHLGVBQWU7RUFDeEMsSUFBTUMsYUFBYSxHQUFHLE9BQU87RUFDN0IsSUFBTUMsYUFBYSxHQUFHLE9BQU87RUFDN0IsSUFBTUMsYUFBYSxHQUFHLE9BQU87RUFDN0IsSUFBTUMsY0FBYyxHQUFHLFFBQVE7RUFDL0IsSUFBTUMsWUFBWSxHQUFHLE1BQU07RUFDM0IsSUFBTUMsY0FBYyxHQUFHLFFBQVE7RUFDL0IsSUFBTUMsWUFBWSxHQUFHLE1BQU07RUFDM0IsSUFBTUMsYUFBYSxHQUFHLE9BQU87RUFDN0IsSUFBTUMsY0FBYyxHQUFHLFVBQVU7RUFDakMsSUFBTUMsYUFBYSxHQUFHLE9BQU87RUFDN0IsSUFBTUMsZUFBZSxHQUFHLFNBQVM7RUFDakMsSUFBTUMsZ0JBQWdCLEdBQUcsVUFBVTtFQUNuQyxJQUFNQyxnQkFBZ0IsR0FBRyxZQUFZO0VBQ3JDLElBQU1DLGdCQUFnQixHQUFHLFlBQVk7RUFDckMsSUFBTUMsYUFBYSxHQUFHO0lBQ3BCQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxHQUFHLEVBQUUsS0FBSztJQUNWQyxLQUFLLEVBQUVod0MsS0FBSyxFQUFFLEdBQUcsTUFBTSxHQUFHLE9BQU87SUFDakNpd0MsTUFBTSxFQUFFLFFBQVE7SUFDaEJDLElBQUksRUFBRWx3QyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUc7RUFDNUIsQ0FBQztFQUNELElBQU1td0MsU0FBUyxHQUFHO0lBQ2hCL0UsU0FBUyxFQUFFM0IsZ0JBQWdCO0lBQzNCMkcsU0FBUyxFQUFFLElBQUk7SUFDZm5qQixRQUFRLEVBQUUsaUJBQWlCO0lBQzNCb2pCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCQyxXQUFXLEVBQUUsRUFBRTtJQUNmQyxLQUFLLEVBQUUsQ0FBQztJQUNScGdCLGtCQUFrQixFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO0lBQ3REN0UsSUFBSSxFQUFFLEtBQUs7SUFDWC9ELE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZDlILFNBQVMsRUFBRSxLQUFLO0lBQ2hCZ2MsWUFBWSxFQUFFLElBQUk7SUFDbEIrUSxRQUFRLEVBQUUsSUFBSTtJQUNkQyxVQUFVLEVBQUUsSUFBSTtJQUNoQnZ4QyxRQUFRLEVBQUUsS0FBSztJQUNmd3hDLFFBQVEsRUFBRSxzQ0FBc0MsR0FBRyxtQ0FBbUMsR0FBRyxtQ0FBbUMsR0FBRyxRQUFRO0lBQ3ZJOEQsS0FBSyxFQUFFLEVBQUU7SUFDVGhwQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0QsSUFBTWlwQyxhQUFhLEdBQUc7SUFDcEJyRixTQUFTLEVBQUUsUUFBUTtJQUNuQmdGLFNBQVMsRUFBRSxTQUFTO0lBQ3BCbmpCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUJvakIsU0FBUyxFQUFFLDBCQUEwQjtJQUNyQ0MsV0FBVyxFQUFFLG1CQUFtQjtJQUNoQ0MsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QnBnQixrQkFBa0IsRUFBRSxPQUFPO0lBQzNCN0UsSUFBSSxFQUFFLFNBQVM7SUFDZi9ELE1BQU0sRUFBRSx5QkFBeUI7SUFDakM5SCxTQUFTLEVBQUUsbUJBQW1CO0lBQzlCZ2MsWUFBWSxFQUFFLHdCQUF3QjtJQUN0QytRLFFBQVEsRUFBRSxTQUFTO0lBQ25CQyxVQUFVLEVBQUUsaUJBQWlCO0lBQzdCdnhDLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUJ3eEMsUUFBUSxFQUFFLFFBQVE7SUFDbEI4RCxLQUFLLEVBQUUsMkJBQTJCO0lBQ2xDaHBDLE9BQU8sRUFBRTtFQUNYLENBQUM7O0VBRUQ7QUFDRjtBQUNBO0VBRkUsSUFJTWtwQyxPQUFPLDBCQUFBQyxlQUFBO0lBQUF6M0MsU0FBQSxDQUFBdzNDLE9BQUEsRUFBQUMsZUFBQTtJQUFBLElBQUFDLFFBQUEsR0FBQXgzQyxZQUFBLENBQUFzM0MsT0FBQTtJQUNYLFNBQUFBLFFBQVk5MkMsT0FBTyxFQUFFb1IsTUFBTSxFQUFFO01BQUEsSUFBQTZsQyxPQUFBO01BQUF4M0MsZUFBQSxPQUFBcTNDLE9BQUE7TUFDM0IsSUFBSSxPQUFPL1gsTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxNQUFNLElBQUl6c0IsU0FBUyxDQUFDLDhEQUE4RCxDQUFDO01BQ3JGO01BQ0Eya0MsT0FBQSxHQUFBRCxRQUFBLENBQUE1MEMsSUFBQSxPQUFNcEMsT0FBTyxFQUFFb1IsTUFBTTs7TUFFckI7TUFDQTZsQyxPQUFBLENBQUtDLFVBQVUsR0FBRyxJQUFJO01BQ3RCRCxPQUFBLENBQUtFLFFBQVEsR0FBRyxDQUFDO01BQ2pCRixPQUFBLENBQUtHLFVBQVUsR0FBRyxJQUFJO01BQ3RCSCxPQUFBLENBQUtJLGNBQWMsR0FBRyxDQUFDLENBQUM7TUFDeEJKLE9BQUEsQ0FBSzlVLE9BQU8sR0FBRyxJQUFJO01BQ25COFUsT0FBQSxDQUFLSyxnQkFBZ0IsR0FBRyxJQUFJO01BQzVCTCxPQUFBLENBQUtNLFdBQVcsR0FBRyxJQUFJOztNQUV2QjtNQUNBTixPQUFBLENBQUtPLEdBQUcsR0FBRyxJQUFJO01BQ2ZQLE9BQUEsQ0FBS1EsYUFBYSxFQUFFO01BQ3BCLElBQUksQ0FBQ1IsT0FBQSxDQUFLbGtDLE9BQU8sQ0FBQ3pSLFFBQVEsRUFBRTtRQUMxQjIxQyxPQUFBLENBQUtTLFNBQVMsRUFBRTtNQUNsQjtNQUFDLE9BQUFULE9BQUE7SUFDSDs7SUFFQTtJQUFBcjNDLFlBQUEsQ0FBQWszQyxPQUFBO01BQUFqM0MsR0FBQTtNQUFBQyxLQUFBO01BV0E7TUFDQSxTQUFBNjNDLE9BQUEsRUFBUztRQUNQLElBQUksQ0FBQ1QsVUFBVSxHQUFHLElBQUk7TUFDeEI7SUFBQztNQUFBcjNDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUE4M0MsUUFBQSxFQUFVO1FBQ1IsSUFBSSxDQUFDVixVQUFVLEdBQUcsS0FBSztNQUN6QjtJQUFDO01BQUFyM0MsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQSszQyxjQUFBLEVBQWdCO1FBQ2QsSUFBSSxDQUFDWCxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUNBLFVBQVU7TUFDcEM7SUFBQztNQUFBcjNDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF3WCxPQUFBLEVBQVM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDNC9CLFVBQVUsRUFBRTtVQUNwQjtRQUNGO1FBQ0EsSUFBSSxDQUFDRyxjQUFjLENBQUNTLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQ1QsY0FBYyxDQUFDUyxLQUFLO1FBQ3RELElBQUksSUFBSSxDQUFDNzBCLFFBQVEsRUFBRSxFQUFFO1VBQ25CLElBQUksQ0FBQzgwQixNQUFNLEVBQUU7VUFDYjtRQUNGO1FBQ0EsSUFBSSxDQUFDQyxNQUFNLEVBQUU7TUFDZjtJQUFDO01BQUFuNEMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW9ULFFBQUEsRUFBVTtRQUNSaU0sWUFBWSxDQUFDLElBQUksQ0FBQ2c0QixRQUFRLENBQUM7UUFDM0J2dEMsWUFBWSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDaUosUUFBUSxDQUFDek8sT0FBTyxDQUFDNHdDLGNBQWMsQ0FBQyxFQUFFQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMrQyxpQkFBaUIsQ0FBQztRQUNqRyxJQUFJLElBQUksQ0FBQ25sQyxRQUFRLENBQUMvTixZQUFZLENBQUMsd0JBQXdCLENBQUMsRUFBRTtVQUN4RCxJQUFJLENBQUMrTixRQUFRLENBQUN6QyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ3lDLFFBQVEsQ0FBQy9OLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzNGO1FBQ0EsSUFBSSxDQUFDbXpDLGNBQWMsRUFBRTtRQUNyQjE1QixJQUFBLENBQUFDLGVBQUEsQ0FBQXE0QixPQUFBLENBQUE1MEMsU0FBQSxvQkFBQUUsSUFBQTtNQUNGO0lBQUM7TUFBQXZDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFxakIsS0FBQSxFQUFPO1FBQUEsSUFBQWcxQixPQUFBO1FBQ0wsSUFBSSxJQUFJLENBQUNybEMsUUFBUSxDQUFDK1EsS0FBSyxDQUFDK2QsT0FBTyxLQUFLLE1BQU0sRUFBRTtVQUMxQyxNQUFNLElBQUlwdkIsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO1FBQ3hEO1FBQ0EsSUFBSSxFQUFFLElBQUksQ0FBQzRsQyxjQUFjLEVBQUUsSUFBSSxJQUFJLENBQUNsQixVQUFVLENBQUMsRUFBRTtVQUMvQztRQUNGO1FBQ0EsSUFBTTFVLFNBQVMsR0FBRzU0QixZQUFZLENBQUNnRSxPQUFPLENBQUMsSUFBSSxDQUFDa0YsUUFBUSxFQUFFLElBQUksQ0FBQ3BCLFdBQVcsQ0FBQ2tDLFNBQVMsQ0FBQzZoQyxZQUFZLENBQUMsQ0FBQztRQUMvRixJQUFNNEMsVUFBVSxHQUFHcnpDLGNBQWMsQ0FBQyxJQUFJLENBQUM4TixRQUFRLENBQUM7UUFDaEQsSUFBTXdsQyxVQUFVLEdBQUcsQ0FBQ0QsVUFBVSxJQUFJLElBQUksQ0FBQ3ZsQyxRQUFRLENBQUMrVCxhQUFhLENBQUM1aEIsZUFBZSxFQUFFTCxRQUFRLENBQUMsSUFBSSxDQUFDa08sUUFBUSxDQUFDO1FBQ3RHLElBQUkwdkIsU0FBUyxDQUFDeDBCLGdCQUFnQixJQUFJLENBQUNzcUMsVUFBVSxFQUFFO1VBQzdDO1FBQ0Y7O1FBRUE7UUFDQSxJQUFJLENBQUNKLGNBQWMsRUFBRTtRQUNyQixJQUFNVixHQUFHLEdBQUcsSUFBSSxDQUFDZSxjQUFjLEVBQUU7UUFDakMsSUFBSSxDQUFDemxDLFFBQVEsQ0FBQ3pDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRW1uQyxHQUFHLENBQUN6eUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQ0UweEMsU0FBUyxHQUNQLElBQUksQ0FBQzFqQyxPQUFPLENBRGQwakMsU0FBUztRQUVYLElBQUksQ0FBQyxJQUFJLENBQUMzakMsUUFBUSxDQUFDK1QsYUFBYSxDQUFDNWhCLGVBQWUsQ0FBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQzR5QyxHQUFHLENBQUMsRUFBRTtVQUNuRWYsU0FBUyxDQUFDaFAsTUFBTSxDQUFDK1AsR0FBRyxDQUFDO1VBQ3JCNXRDLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQyxJQUFJLENBQUNrRixRQUFRLEVBQUUsSUFBSSxDQUFDcEIsV0FBVyxDQUFDa0MsU0FBUyxDQUFDK2hDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pGO1FBQ0EsSUFBSSxDQUFDeFQsT0FBTyxHQUFHLElBQUksQ0FBQ00sYUFBYSxDQUFDK1UsR0FBRyxDQUFDO1FBQ3RDQSxHQUFHLENBQUM3eUMsU0FBUyxDQUFDaVYsR0FBRyxDQUFDbTdCLGlCQUFpQixDQUFDOztRQUVwQztRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUksY0FBYyxJQUFJcHlDLFFBQVEsQ0FBQ3NDLGVBQWUsRUFBRTtVQUFBLElBQUF1ekMsTUFBQTtVQUFBLElBQUFDLFdBQUEsR0FBQXR1QywwQkFBQSxDQUN4QixDQUFBcXVDLE1BQUEsS0FBRSxFQUFDMzJDLE1BQU0sQ0FBQW5DLEtBQUEsQ0FBQTg0QyxNQUFBLEVBQUFweEMsa0JBQUEsQ0FBSXpFLFFBQVEsQ0FBQ2dELElBQUksQ0FBQ3lPLFFBQVEsRUFBQztZQUFBc2tDLE9BQUE7VUFBQTtZQUExRCxLQUFBRCxXQUFBLENBQUFwdUMsQ0FBQSxNQUFBcXVDLE9BQUEsR0FBQUQsV0FBQSxDQUFBbnVDLENBQUEsSUFBQUMsSUFBQSxHQUE0RDtjQUFBLElBQWpEdkssT0FBTyxHQUFBMDRDLE9BQUEsQ0FBQTU0QyxLQUFBO2NBQ2hCOEosWUFBWSxDQUFDZ0QsRUFBRSxDQUFDNU0sT0FBTyxFQUFFLFdBQVcsRUFBRXNGLElBQUksQ0FBQztZQUM3QztVQUFDLFNBQUFtRixHQUFBO1lBQUFndUMsV0FBQSxDQUFBL3RDLENBQUEsQ0FBQUQsR0FBQTtVQUFBO1lBQUFndUMsV0FBQSxDQUFBOXRDLENBQUE7VUFBQTtRQUNIO1FBQ0EsSUFBTW1aLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7VUFDckJsYSxZQUFZLENBQUNnRSxPQUFPLENBQUN1cUMsT0FBSSxDQUFDcmxDLFFBQVEsRUFBRXFsQyxPQUFJLENBQUN6bUMsV0FBVyxDQUFDa0MsU0FBUyxDQUFDOGhDLGFBQWEsQ0FBQyxDQUFDO1VBQzlFLElBQUl5QyxPQUFJLENBQUNmLFVBQVUsS0FBSyxLQUFLLEVBQUU7WUFDN0JlLE9BQUksQ0FBQ0osTUFBTSxFQUFFO1VBQ2Y7VUFDQUksT0FBSSxDQUFDZixVQUFVLEdBQUcsS0FBSztRQUN6QixDQUFDO1FBQ0QsSUFBSSxDQUFDNWpDLGNBQWMsQ0FBQ3NRLFFBQVEsRUFBRSxJQUFJLENBQUMwekIsR0FBRyxFQUFFLElBQUksQ0FBQ2wzQixXQUFXLEVBQUUsQ0FBQztNQUM3RDtJQUFDO01BQUF6Z0IsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW9qQixLQUFBLEVBQU87UUFBQSxJQUFBeTFCLE9BQUE7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDMTFCLFFBQVEsRUFBRSxFQUFFO1VBQ3BCO1FBQ0Y7UUFDQSxJQUFNOGYsU0FBUyxHQUFHbjVCLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQyxJQUFJLENBQUNrRixRQUFRLEVBQUUsSUFBSSxDQUFDcEIsV0FBVyxDQUFDa0MsU0FBUyxDQUFDMmhDLFlBQVksQ0FBQyxDQUFDO1FBQy9GLElBQUl4UyxTQUFTLENBQUMvMEIsZ0JBQWdCLEVBQUU7VUFDOUI7UUFDRjtRQUNBLElBQU13cEMsR0FBRyxHQUFHLElBQUksQ0FBQ2UsY0FBYyxFQUFFO1FBQ2pDZixHQUFHLENBQUM3eUMsU0FBUyxDQUFDaUwsTUFBTSxDQUFDbWxDLGlCQUFpQixDQUFDOztRQUV2QztRQUNBO1FBQ0EsSUFBSSxjQUFjLElBQUlweUMsUUFBUSxDQUFDc0MsZUFBZSxFQUFFO1VBQUEsSUFBQTJ6QyxNQUFBO1VBQUEsSUFBQUMsV0FBQSxHQUFBMXVDLDBCQUFBLENBQ3hCLENBQUF5dUMsTUFBQSxLQUFFLEVBQUMvMkMsTUFBTSxDQUFBbkMsS0FBQSxDQUFBazVDLE1BQUEsRUFBQXh4QyxrQkFBQSxDQUFJekUsUUFBUSxDQUFDZ0QsSUFBSSxDQUFDeU8sUUFBUSxFQUFDO1lBQUEwa0MsT0FBQTtVQUFBO1lBQTFELEtBQUFELFdBQUEsQ0FBQXh1QyxDQUFBLE1BQUF5dUMsT0FBQSxHQUFBRCxXQUFBLENBQUF2dUMsQ0FBQSxJQUFBQyxJQUFBLEdBQTREO2NBQUEsSUFBakR2SyxPQUFPLEdBQUE4NEMsT0FBQSxDQUFBaDVDLEtBQUE7Y0FDaEI4SixZQUFZLENBQUNDLEdBQUcsQ0FBQzdKLE9BQU8sRUFBRSxXQUFXLEVBQUVzRixJQUFJLENBQUM7WUFDOUM7VUFBQyxTQUFBbUYsR0FBQTtZQUFBb3VDLFdBQUEsQ0FBQW51QyxDQUFBLENBQUFELEdBQUE7VUFBQTtZQUFBb3VDLFdBQUEsQ0FBQWx1QyxDQUFBO1VBQUE7UUFDSDtRQUNBLElBQUksQ0FBQzBzQyxjQUFjLENBQUNoQyxhQUFhLENBQUMsR0FBRyxLQUFLO1FBQzFDLElBQUksQ0FBQ2dDLGNBQWMsQ0FBQ2pDLGFBQWEsQ0FBQyxHQUFHLEtBQUs7UUFDMUMsSUFBSSxDQUFDaUMsY0FBYyxDQUFDbEMsYUFBYSxDQUFDLEdBQUcsS0FBSztRQUMxQyxJQUFJLENBQUNpQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUM7O1FBRXhCLElBQU10ekIsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztVQUNyQixJQUFJNjBCLE9BQUksQ0FBQ0ksb0JBQW9CLEVBQUUsRUFBRTtZQUMvQjtVQUNGO1VBQ0EsSUFBSSxDQUFDSixPQUFJLENBQUN2QixVQUFVLEVBQUU7WUFDcEJ1QixPQUFJLENBQUNULGNBQWMsRUFBRTtVQUN2QjtVQUNBUyxPQUFJLENBQUM3bEMsUUFBUSxDQUFDdkMsZUFBZSxDQUFDLGtCQUFrQixDQUFDO1VBQ2pEM0csWUFBWSxDQUFDZ0UsT0FBTyxDQUFDK3FDLE9BQUksQ0FBQzdsQyxRQUFRLEVBQUU2bEMsT0FBSSxDQUFDam5DLFdBQVcsQ0FBQ2tDLFNBQVMsQ0FBQzRoQyxjQUFjLENBQUMsQ0FBQztRQUNqRixDQUFDO1FBQ0QsSUFBSSxDQUFDaGlDLGNBQWMsQ0FBQ3NRLFFBQVEsRUFBRSxJQUFJLENBQUMwekIsR0FBRyxFQUFFLElBQUksQ0FBQ2wzQixXQUFXLEVBQUUsQ0FBQztNQUM3RDtJQUFDO01BQUF6Z0IsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTh3QixPQUFBLEVBQVM7UUFDUCxJQUFJLElBQUksQ0FBQ3VSLE9BQU8sRUFBRTtVQUNoQixJQUFJLENBQUNBLE9BQU8sQ0FBQ3ZSLE1BQU0sRUFBRTtRQUN2QjtNQUNGOztNQUVBO0lBQUE7TUFBQS93QixHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBczRDLGVBQUEsRUFBaUI7UUFDZixPQUFPbHNDLE9BQU8sQ0FBQyxJQUFJLENBQUM4c0MsU0FBUyxFQUFFLENBQUM7TUFDbEM7SUFBQztNQUFBbjVDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF5NEMsZUFBQSxFQUFpQjtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUNmLEdBQUcsRUFBRTtVQUNiLElBQUksQ0FBQ0EsR0FBRyxHQUFHLElBQUksQ0FBQ3lCLGlCQUFpQixDQUFDLElBQUksQ0FBQzFCLFdBQVcsSUFBSSxJQUFJLENBQUMyQixzQkFBc0IsRUFBRSxDQUFDO1FBQ3RGO1FBQ0EsT0FBTyxJQUFJLENBQUMxQixHQUFHO01BQ2pCO0lBQUM7TUFBQTMzQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBbTVDLGtCQUFrQnZHLE9BQU8sRUFBRTtRQUN6QixJQUFNOEUsR0FBRyxHQUFHLElBQUksQ0FBQzJCLG1CQUFtQixDQUFDekcsT0FBTyxDQUFDLENBQUNrQixNQUFNLEVBQUU7O1FBRXREO1FBQ0EsSUFBSSxDQUFDNEQsR0FBRyxFQUFFO1VBQ1IsT0FBTyxJQUFJO1FBQ2I7UUFDQUEsR0FBRyxDQUFDN3lDLFNBQVMsQ0FBQ2lMLE1BQU0sQ0FBQ2lsQyxpQkFBaUIsRUFBRUUsaUJBQWlCLENBQUM7UUFDMUQ7UUFDQXlDLEdBQUcsQ0FBQzd5QyxTQUFTLENBQUNpVixHQUFHLE9BQUEvWCxNQUFBLENBQU8sSUFBSSxDQUFDNlAsV0FBVyxDQUFDaEwsSUFBSSxXQUFRO1FBQ3JELElBQU0weUMsS0FBSyxHQUFHOTJDLE1BQU0sQ0FBQyxJQUFJLENBQUNvUCxXQUFXLENBQUNoTCxJQUFJLENBQUMsQ0FBQ3ZFLFFBQVEsRUFBRTtRQUN0RHExQyxHQUFHLENBQUNubkMsWUFBWSxDQUFDLElBQUksRUFBRStvQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUM5NEIsV0FBVyxFQUFFLEVBQUU7VUFDdEJrM0IsR0FBRyxDQUFDN3lDLFNBQVMsQ0FBQ2lWLEdBQUcsQ0FBQ2k3QixpQkFBaUIsQ0FBQztRQUN0QztRQUNBLE9BQU8yQyxHQUFHO01BQ1o7SUFBQztNQUFBMzNDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF1NUMsV0FBVzNHLE9BQU8sRUFBRTtRQUNsQixJQUFJLENBQUM2RSxXQUFXLEdBQUc3RSxPQUFPO1FBQzFCLElBQUksSUFBSSxDQUFDenZCLFFBQVEsRUFBRSxFQUFFO1VBQ25CLElBQUksQ0FBQ2kxQixjQUFjLEVBQUU7VUFDckIsSUFBSSxDQUFDLzBCLElBQUksRUFBRTtRQUNiO01BQ0Y7SUFBQztNQUFBdGpCLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFxNUMsb0JBQW9CekcsT0FBTyxFQUFFO1FBQzNCLElBQUksSUFBSSxDQUFDNEUsZ0JBQWdCLEVBQUU7VUFDekIsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQzVELGFBQWEsQ0FBQ2hCLE9BQU8sQ0FBQztRQUM5QyxDQUFDLE1BQU07VUFDTCxJQUFJLENBQUM0RSxnQkFBZ0IsR0FBRyxJQUFJcEUsZUFBZSxDQUFBemhDLGFBQUEsQ0FBQUEsYUFBQSxLQUN0QyxJQUFJLENBQUNzQixPQUFPO1lBQ2Y7WUFDQTtZQUNBMi9CLE9BQU8sRUFBUEEsT0FBTztZQUNQQyxVQUFVLEVBQUUsSUFBSSxDQUFDYSx3QkFBd0IsQ0FBQyxJQUFJLENBQUN6Z0MsT0FBTyxDQUFDMmpDLFdBQVc7VUFBQyxHQUNuRTtRQUNKO1FBQ0EsT0FBTyxJQUFJLENBQUNZLGdCQUFnQjtNQUM5QjtJQUFDO01BQUF6M0MsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW81Qyx1QkFBQSxFQUF5QjtRQUN2QixPQUFBaDlCLGVBQUEsS0FDRzg0QixzQkFBc0IsRUFBRyxJQUFJLENBQUNnRSxTQUFTLEVBQUU7TUFFOUM7SUFBQztNQUFBbjVDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFrNUMsVUFBQSxFQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUN4Rix3QkFBd0IsQ0FBQyxJQUFJLENBQUN6Z0MsT0FBTyxDQUFDNmpDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQzlqQyxRQUFRLENBQUMvTixZQUFZLENBQUMsd0JBQXdCLENBQUM7TUFDbEg7O01BRUE7SUFBQTtNQUFBbEYsR0FBQTtNQUFBQyxLQUFBLEVBQ0EsU0FBQXc1Qyw2QkFBNkI5dkMsS0FBSyxFQUFFO1FBQ2xDLE9BQU8sSUFBSSxDQUFDa0ksV0FBVyxDQUFDaUMsbUJBQW1CLENBQUNuSyxLQUFLLENBQUNFLGNBQWMsRUFBRSxJQUFJLENBQUM2dkMsa0JBQWtCLEVBQUUsQ0FBQztNQUM5RjtJQUFDO01BQUExNUMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXdnQixZQUFBLEVBQWM7UUFDWixPQUFPLElBQUksQ0FBQ3ZOLE9BQU8sQ0FBQ3lqQyxTQUFTLElBQUksSUFBSSxDQUFDZ0IsR0FBRyxJQUFJLElBQUksQ0FBQ0EsR0FBRyxDQUFDN3lDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDaXdDLGlCQUFpQixDQUFDO01BQzdGO0lBQUM7TUFBQWgxQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBbWpCLFNBQUEsRUFBVztRQUNULE9BQU8sSUFBSSxDQUFDdTBCLEdBQUcsSUFBSSxJQUFJLENBQUNBLEdBQUcsQ0FBQzd5QyxTQUFTLENBQUNDLFFBQVEsQ0FBQ213QyxpQkFBaUIsQ0FBQztNQUNuRTtJQUFDO01BQUFsMUMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTJpQyxjQUFjK1UsR0FBRyxFQUFFO1FBQ2pCLElBQU0zeEIsU0FBUyxHQUFHN2UsT0FBTyxDQUFDLElBQUksQ0FBQytMLE9BQU8sQ0FBQzhTLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRTJ4QixHQUFHLEVBQUUsSUFBSSxDQUFDMWtDLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLElBQU0wbUMsVUFBVSxHQUFHdkQsYUFBYSxDQUFDcHdCLFNBQVMsQ0FBQ3RULFdBQVcsRUFBRSxDQUFDO1FBQ3pELE9BQU9vckIsWUFBWSxDQUFDLElBQUksQ0FBQzdxQixRQUFRLEVBQUUwa0MsR0FBRyxFQUFFLElBQUksQ0FBQ3BVLGdCQUFnQixDQUFDb1csVUFBVSxDQUFDLENBQUM7TUFDNUU7SUFBQztNQUFBMzVDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUEwakMsV0FBQSxFQUFhO1FBQUEsSUFBQWlXLE9BQUE7UUFDWCxJQUNFOXJCLE1BQU0sR0FDSixJQUFJLENBQUM1YSxPQUFPLENBRGQ0YSxNQUFNO1FBRVIsSUFBSSxPQUFPQSxNQUFNLEtBQUssUUFBUSxFQUFFO1VBQzlCLE9BQU9BLE1BQU0sQ0FBQ3JxQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMyUixHQUFHLENBQUMsVUFBQW5WLEtBQUs7WUFBQSxPQUFJcUQsTUFBTSxDQUFDdWMsUUFBUSxDQUFDNWYsS0FBSyxFQUFFLEVBQUUsQ0FBQztVQUFBLEVBQUM7UUFDbkU7UUFDQSxJQUFJLE9BQU82dEIsTUFBTSxLQUFLLFVBQVUsRUFBRTtVQUNoQyxPQUFPLFVBQUErVixVQUFVO1lBQUEsT0FBSS9WLE1BQU0sQ0FBQytWLFVBQVUsRUFBRStWLE9BQUksQ0FBQzNtQyxRQUFRLENBQUM7VUFBQTtRQUN4RDtRQUNBLE9BQU82YSxNQUFNO01BQ2Y7SUFBQztNQUFBOXRCLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUEwekMseUJBQXlCYSxHQUFHLEVBQUU7UUFDNUIsT0FBT3J0QyxPQUFPLENBQUNxdEMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDdmhDLFFBQVEsQ0FBQyxDQUFDO01BQ3RDO0lBQUM7TUFBQWpULEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFzakMsaUJBQWlCb1csVUFBVSxFQUFFO1FBQUEsSUFBQUUsT0FBQTtRQUMzQixJQUFNL1YscUJBQXFCLEdBQUc7VUFDNUI5ZCxTQUFTLEVBQUUyekIsVUFBVTtVQUNyQnhkLFNBQVMsRUFBRSxDQUFDO1lBQ1Z2MUIsSUFBSSxFQUFFLE1BQU07WUFDWnNoQixPQUFPLEVBQUU7Y0FDUHdPLGtCQUFrQixFQUFFLElBQUksQ0FBQ3hqQixPQUFPLENBQUN3akI7WUFDbkM7VUFDRixDQUFDLEVBQUU7WUFDRDl2QixJQUFJLEVBQUUsUUFBUTtZQUNkc2hCLE9BQU8sRUFBRTtjQUNQNEYsTUFBTSxFQUFFLElBQUksQ0FBQzZWLFVBQVU7WUFDekI7VUFDRixDQUFDLEVBQUU7WUFDRC84QixJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCc2hCLE9BQU8sRUFBRTtjQUNQc0wsUUFBUSxFQUFFLElBQUksQ0FBQ3RnQixPQUFPLENBQUNzZ0I7WUFDekI7VUFDRixDQUFDLEVBQUU7WUFDRDVzQixJQUFJLEVBQUUsT0FBTztZQUNic2hCLE9BQU8sRUFBRTtjQUNQL25CLE9BQU8sTUFBQTZCLE1BQUEsQ0FBTSxJQUFJLENBQUM2UCxXQUFXLENBQUNoTCxJQUFJO1lBQ3BDO1VBQ0YsQ0FBQyxFQUFFO1lBQ0RELElBQUksRUFBRSxpQkFBaUI7WUFDdkI4aEIsT0FBTyxFQUFFLElBQUk7WUFDYkMsS0FBSyxFQUFFLFlBQVk7WUFDbkI1aEIsRUFBRSxFQUFFLFNBQUFBLEdBQUErUCxJQUFJLEVBQUk7Y0FDVjtjQUNBO2NBQ0EraUMsT0FBSSxDQUFDbkIsY0FBYyxFQUFFLENBQUNsb0MsWUFBWSxDQUFDLHVCQUF1QixFQUFFc0csSUFBSSxDQUFDMlEsS0FBSyxDQUFDekIsU0FBUyxDQUFDO1lBQ25GO1VBQ0YsQ0FBQztRQUNILENBQUM7UUFDRCxPQUFBcFUsYUFBQSxDQUFBQSxhQUFBLEtBQ0treUIscUJBQXFCLEdBQ3JCMzhCLE9BQU8sQ0FBQyxJQUFJLENBQUMrTCxPQUFPLENBQUM4dUIsWUFBWSxFQUFFLENBQUM4QixxQkFBcUIsQ0FBQyxDQUFDO01BRWxFO0lBQUM7TUFBQTlqQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBMjNDLGNBQUEsRUFBZ0I7UUFBQSxJQUFBa0MsT0FBQTtRQUNkLElBQU1DLFFBQVEsR0FBRyxJQUFJLENBQUM3bUMsT0FBTyxDQUFDbkYsT0FBTyxDQUFDdEssS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUFDLElBQUF1MkMsV0FBQSxHQUFBMXZDLDBCQUFBLENBQzNCeXZDLFFBQVE7VUFBQUUsT0FBQTtRQUFBO1VBQTlCLEtBQUFELFdBQUEsQ0FBQXh2QyxDQUFBLE1BQUF5dkMsT0FBQSxHQUFBRCxXQUFBLENBQUF2dkMsQ0FBQSxJQUFBQyxJQUFBLEdBQWdDO1lBQUEsSUFBckJxRCxPQUFPLEdBQUFrc0MsT0FBQSxDQUFBaDZDLEtBQUE7WUFDaEIsSUFBSThOLE9BQU8sS0FBSyxPQUFPLEVBQUU7Y0FDdkJoRSxZQUFZLENBQUNnRCxFQUFFLENBQUMsSUFBSSxDQUFDa0csUUFBUSxFQUFFLElBQUksQ0FBQ3BCLFdBQVcsQ0FBQ2tDLFNBQVMsQ0FBQ2dpQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUM3aUMsT0FBTyxDQUFDelIsUUFBUSxFQUFFLFVBQUFrSSxLQUFLLEVBQUk7Z0JBQ3hHLElBQU1sSixPQUFPLEdBQUdxNUMsT0FBSSxDQUFDTCw0QkFBNEIsQ0FBQzl2QyxLQUFLLENBQUM7Z0JBQ3hEbEosT0FBTyxDQUFDZ1gsTUFBTSxFQUFFO2NBQ2xCLENBQUMsQ0FBQztZQUNKLENBQUMsTUFBTSxJQUFJMUosT0FBTyxLQUFLMG5DLGNBQWMsRUFBRTtjQUNyQyxJQUFNeUUsT0FBTyxHQUFHbnNDLE9BQU8sS0FBS3VuQyxhQUFhLEdBQUcsSUFBSSxDQUFDempDLFdBQVcsQ0FBQ2tDLFNBQVMsQ0FBQ21pQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQ3JrQyxXQUFXLENBQUNrQyxTQUFTLENBQUNpaUMsZUFBZSxDQUFDO2NBQ3RJLElBQU1tRSxRQUFRLEdBQUdwc0MsT0FBTyxLQUFLdW5DLGFBQWEsR0FBRyxJQUFJLENBQUN6akMsV0FBVyxDQUFDa0MsU0FBUyxDQUFDb2lDLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDdGtDLFdBQVcsQ0FBQ2tDLFNBQVMsQ0FBQ2tpQyxnQkFBZ0IsQ0FBQztjQUN4SWxzQyxZQUFZLENBQUNnRCxFQUFFLENBQUMsSUFBSSxDQUFDa0csUUFBUSxFQUFFaW5DLE9BQU8sRUFBRSxJQUFJLENBQUNobkMsT0FBTyxDQUFDelIsUUFBUSxFQUFFLFVBQUFrSSxLQUFLLEVBQUk7Z0JBQ3RFLElBQU1sSixPQUFPLEdBQUdxNUMsT0FBSSxDQUFDTCw0QkFBNEIsQ0FBQzl2QyxLQUFLLENBQUM7Z0JBQ3hEbEosT0FBTyxDQUFDKzJDLGNBQWMsQ0FBQzd0QyxLQUFLLENBQUNNLElBQUksS0FBSyxTQUFTLEdBQUdzckMsYUFBYSxHQUFHRCxhQUFhLENBQUMsR0FBRyxJQUFJO2dCQUN2RjcwQyxPQUFPLENBQUMwM0MsTUFBTSxFQUFFO2NBQ2xCLENBQUMsQ0FBQztjQUNGcHVDLFlBQVksQ0FBQ2dELEVBQUUsQ0FBQyxJQUFJLENBQUNrRyxRQUFRLEVBQUVrbkMsUUFBUSxFQUFFLElBQUksQ0FBQ2puQyxPQUFPLENBQUN6UixRQUFRLEVBQUUsVUFBQWtJLEtBQUssRUFBSTtnQkFDdkUsSUFBTWxKLE9BQU8sR0FBR3E1QyxPQUFJLENBQUNMLDRCQUE0QixDQUFDOXZDLEtBQUssQ0FBQztnQkFDeERsSixPQUFPLENBQUMrMkMsY0FBYyxDQUFDN3RDLEtBQUssQ0FBQ00sSUFBSSxLQUFLLFVBQVUsR0FBR3NyQyxhQUFhLEdBQUdELGFBQWEsQ0FBQyxHQUFHNzBDLE9BQU8sQ0FBQ3dTLFFBQVEsQ0FBQ2xPLFFBQVEsQ0FBQzRFLEtBQUssQ0FBQ3NDLGFBQWEsQ0FBQztnQkFDbEl4TCxPQUFPLENBQUN5M0MsTUFBTSxFQUFFO2NBQ2xCLENBQUMsQ0FBQztZQUNKO1VBQ0Y7UUFBQyxTQUFBdHRDLEdBQUE7VUFBQW92QyxXQUFBLENBQUFudkMsQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQW92QyxXQUFBLENBQUFsdkMsQ0FBQTtRQUFBO1FBQ0QsSUFBSSxDQUFDc3RDLGlCQUFpQixHQUFHLFlBQU07VUFDN0IsSUFBSTBCLE9BQUksQ0FBQzdtQyxRQUFRLEVBQUU7WUFDakI2bUMsT0FBSSxDQUFDejJCLElBQUksRUFBRTtVQUNiO1FBQ0YsQ0FBQztRQUNEdFosWUFBWSxDQUFDZ0QsRUFBRSxDQUFDLElBQUksQ0FBQ2tHLFFBQVEsQ0FBQ3pPLE9BQU8sQ0FBQzR3QyxjQUFjLENBQUMsRUFBRUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDK0MsaUJBQWlCLENBQUM7TUFDbEc7SUFBQztNQUFBcDRDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUE0M0MsVUFBQSxFQUFZO1FBQ1YsSUFBTWQsS0FBSyxHQUFHLElBQUksQ0FBQzlqQyxRQUFRLENBQUMvTixZQUFZLENBQUMsT0FBTyxDQUFDO1FBQ2pELElBQUksQ0FBQzZ4QyxLQUFLLEVBQUU7VUFDVjtRQUNGO1FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQzlqQyxRQUFRLENBQUMvTixZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMrTixRQUFRLENBQUM3UyxXQUFXLENBQUM4VCxJQUFJLEVBQUUsRUFBRTtVQUNsRixJQUFJLENBQUNqQixRQUFRLENBQUN6QyxZQUFZLENBQUMsWUFBWSxFQUFFdW1DLEtBQUssQ0FBQztRQUNqRDtRQUNBLElBQUksQ0FBQzlqQyxRQUFRLENBQUN6QyxZQUFZLENBQUMsd0JBQXdCLEVBQUV1bUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUM5akMsUUFBUSxDQUFDdkMsZUFBZSxDQUFDLE9BQU8sQ0FBQztNQUN4QztJQUFDO01BQUExUSxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBazRDLE9BQUEsRUFBUztRQUFBLElBQUFpQyxPQUFBO1FBQ1AsSUFBSSxJQUFJLENBQUNoM0IsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDbTBCLFVBQVUsRUFBRTtVQUN0QyxJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJO1VBQ3RCO1FBQ0Y7UUFDQSxJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJO1FBQ3RCLElBQUksQ0FBQzhDLFdBQVcsQ0FBQyxZQUFNO1VBQ3JCLElBQUlELE9BQUksQ0FBQzdDLFVBQVUsRUFBRTtZQUNuQjZDLE9BQUksQ0FBQzkyQixJQUFJLEVBQUU7VUFDYjtRQUNGLENBQUMsRUFBRSxJQUFJLENBQUNwUSxPQUFPLENBQUM0akMsS0FBSyxDQUFDeHpCLElBQUksQ0FBQztNQUM3QjtJQUFDO01BQUF0akIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWk0QyxPQUFBLEVBQVM7UUFBQSxJQUFBb0MsT0FBQTtRQUNQLElBQUksSUFBSSxDQUFDcEIsb0JBQW9CLEVBQUUsRUFBRTtVQUMvQjtRQUNGO1FBQ0EsSUFBSSxDQUFDM0IsVUFBVSxHQUFHLEtBQUs7UUFDdkIsSUFBSSxDQUFDOEMsV0FBVyxDQUFDLFlBQU07VUFDckIsSUFBSSxDQUFDQyxPQUFJLENBQUMvQyxVQUFVLEVBQUU7WUFDcEIrQyxPQUFJLENBQUNqM0IsSUFBSSxFQUFFO1VBQ2I7UUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDblEsT0FBTyxDQUFDNGpDLEtBQUssQ0FBQ3p6QixJQUFJLENBQUM7TUFDN0I7SUFBQztNQUFBcmpCLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFvNkMsWUFBWXZ5QyxPQUFPLEVBQUV5eUMsT0FBTyxFQUFFO1FBQzVCajdCLFlBQVksQ0FBQyxJQUFJLENBQUNnNEIsUUFBUSxDQUFDO1FBQzNCLElBQUksQ0FBQ0EsUUFBUSxHQUFHcHZDLFVBQVUsQ0FBQ0osT0FBTyxFQUFFeXlDLE9BQU8sQ0FBQztNQUM5QztJQUFDO01BQUF2NkMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWk1QyxxQkFBQSxFQUF1QjtRQUNyQixPQUFPOTJDLE1BQU0sQ0FBQytJLE1BQU0sQ0FBQyxJQUFJLENBQUNxc0MsY0FBYyxDQUFDLENBQUMxcUMsUUFBUSxDQUFDLElBQUksQ0FBQztNQUMxRDtJQUFDO01BQUE5TSxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBcVIsV0FBV0MsTUFBTSxFQUFFO1FBQ2pCLElBQU1pcEMsY0FBYyxHQUFHbHFDLFdBQVcsQ0FBQ0ssaUJBQWlCLENBQUMsSUFBSSxDQUFDc0MsUUFBUSxDQUFDO1FBQ25FLFNBQUF3bkMsSUFBQSxNQUFBQyxhQUFBLEdBQTRCdDRDLE1BQU0sQ0FBQ2tMLElBQUksQ0FBQ2t0QyxjQUFjLENBQUMsRUFBQUMsSUFBQSxHQUFBQyxhQUFBLENBQUF6MkMsTUFBQSxFQUFBdzJDLElBQUEsSUFBRTtVQUFwRCxJQUFNRSxhQUFhLEdBQUFELGFBQUEsQ0FBQUQsSUFBQTtVQUN0QixJQUFJMUYscUJBQXFCLENBQUNwcEMsR0FBRyxDQUFDZ3ZDLGFBQWEsQ0FBQyxFQUFFO1lBQzVDLE9BQU9ILGNBQWMsQ0FBQ0csYUFBYSxDQUFDO1VBQ3RDO1FBQ0Y7UUFDQXBwQyxNQUFNLEdBQUFLLGFBQUEsQ0FBQUEsYUFBQSxLQUNENG9DLGNBQWMsR0FDYjM1QyxPQUFBLENBQU8wUSxNQUFNLE1BQUssUUFBUSxJQUFJQSxNQUFNLEdBQUdBLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FDdkQ7UUFDREEsTUFBTSxHQUFHLElBQUksQ0FBQ0MsZUFBZSxDQUFDRCxNQUFNLENBQUM7UUFDckNBLE1BQU0sR0FBRyxJQUFJLENBQUNFLGlCQUFpQixDQUFDRixNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDRyxnQkFBZ0IsQ0FBQ0gsTUFBTSxDQUFDO1FBQzdCLE9BQU9BLE1BQU07TUFDZjtJQUFDO01BQUF2UixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBd1Isa0JBQWtCRixNQUFNLEVBQUU7UUFDeEJBLE1BQU0sQ0FBQ3FsQyxTQUFTLEdBQUdybEMsTUFBTSxDQUFDcWxDLFNBQVMsS0FBSyxLQUFLLEdBQUc5ekMsUUFBUSxDQUFDZ0QsSUFBSSxHQUFHOUIsVUFBVSxDQUFDdU4sTUFBTSxDQUFDcWxDLFNBQVMsQ0FBQztRQUM1RixJQUFJLE9BQU9ybEMsTUFBTSxDQUFDdWxDLEtBQUssS0FBSyxRQUFRLEVBQUU7VUFDcEN2bEMsTUFBTSxDQUFDdWxDLEtBQUssR0FBRztZQUNieHpCLElBQUksRUFBRS9SLE1BQU0sQ0FBQ3VsQyxLQUFLO1lBQ2xCenpCLElBQUksRUFBRTlSLE1BQU0sQ0FBQ3VsQztVQUNmLENBQUM7UUFDSDtRQUNBLElBQUksT0FBT3ZsQyxNQUFNLENBQUN3bEMsS0FBSyxLQUFLLFFBQVEsRUFBRTtVQUNwQ3hsQyxNQUFNLENBQUN3bEMsS0FBSyxHQUFHeGxDLE1BQU0sQ0FBQ3dsQyxLQUFLLENBQUN6MEMsUUFBUSxFQUFFO1FBQ3hDO1FBQ0EsSUFBSSxPQUFPaVAsTUFBTSxDQUFDc2hDLE9BQU8sS0FBSyxRQUFRLEVBQUU7VUFDdEN0aEMsTUFBTSxDQUFDc2hDLE9BQU8sR0FBR3RoQyxNQUFNLENBQUNzaEMsT0FBTyxDQUFDdndDLFFBQVEsRUFBRTtRQUM1QztRQUNBLE9BQU9pUCxNQUFNO01BQ2Y7SUFBQztNQUFBdlIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXk1QyxtQkFBQSxFQUFxQjtRQUNuQixJQUFNbm9DLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDakIsU0FBQXFwQyxJQUFBLE1BQUFDLGdCQUFBLEdBQTJCejRDLE1BQU0sQ0FBQ3VLLE9BQU8sQ0FBQyxJQUFJLENBQUN1RyxPQUFPLENBQUMsRUFBQTBuQyxJQUFBLEdBQUFDLGdCQUFBLENBQUE1MkMsTUFBQSxFQUFBMjJDLElBQUEsSUFBRTtVQUFwRCxJQUFBRSxtQkFBQSxHQUFBL3VDLGNBQUEsQ0FBQTh1QyxnQkFBQSxDQUFBRCxJQUFBO1lBQU81NkMsR0FBRyxHQUFBODZDLG1CQUFBO1lBQUU3NkMsS0FBSyxHQUFBNjZDLG1CQUFBO1VBQ3BCLElBQUksSUFBSSxDQUFDanBDLFdBQVcsQ0FBQ0MsT0FBTyxDQUFDOVIsR0FBRyxDQUFDLEtBQUtDLEtBQUssRUFBRTtZQUMzQ3NSLE1BQU0sQ0FBQ3ZSLEdBQUcsQ0FBQyxHQUFHQyxLQUFLO1VBQ3JCO1FBQ0Y7UUFDQXNSLE1BQU0sQ0FBQzlQLFFBQVEsR0FBRyxLQUFLO1FBQ3ZCOFAsTUFBTSxDQUFDeEQsT0FBTyxHQUFHLFFBQVE7O1FBRXpCO1FBQ0E7UUFDQTtRQUNBLE9BQU93RCxNQUFNO01BQ2Y7SUFBQztNQUFBdlIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW80QyxlQUFBLEVBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMvVixPQUFPLEVBQUU7VUFDaEIsSUFBSSxDQUFDQSxPQUFPLENBQUM1RCxPQUFPLEVBQUU7VUFDdEIsSUFBSSxDQUFDNEQsT0FBTyxHQUFHLElBQUk7UUFDckI7UUFDQSxJQUFJLElBQUksQ0FBQ3FWLEdBQUcsRUFBRTtVQUNaLElBQUksQ0FBQ0EsR0FBRyxDQUFDNW5DLE1BQU0sRUFBRTtVQUNqQixJQUFJLENBQUM0bkMsR0FBRyxHQUFHLElBQUk7UUFDakI7TUFDRjs7TUFFQTtJQUFBO01BQUEzM0MsR0FBQTtNQUFBbVAsR0FBQSxFQTlYQSxTQUFBQSxJQUFBLEVBQXFCO1FBQ25CLE9BQU91bkMsU0FBUztNQUNsQjtJQUFDO01BQUExMkMsR0FBQTtNQUFBbVAsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBeUI7UUFDdkIsT0FBTzZuQyxhQUFhO01BQ3RCO0lBQUM7TUFBQWgzQyxHQUFBO01BQUFtUCxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUFrQjtRQUNoQixPQUFPMmxDLE1BQU07TUFDZjtJQUFDO01BQUE5MEMsR0FBQTtNQUFBQyxLQUFBLEVBdVhELFNBQUErRyxnQkFBdUJ1SyxNQUFNLEVBQUU7UUFDN0IsT0FBTyxJQUFJLENBQUNzRixJQUFJLENBQUMsWUFBWTtVQUMzQixJQUFNQyxJQUFJLEdBQUdtZ0MsT0FBTyxDQUFDbmpDLG1CQUFtQixDQUFDLElBQUksRUFBRXZDLE1BQU0sQ0FBQztVQUN0RCxJQUFJLE9BQU9BLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUI7VUFDRjtVQUNBLElBQUksT0FBT3VGLElBQUksQ0FBQ3ZGLE1BQU0sQ0FBQyxLQUFLLFdBQVcsRUFBRTtZQUN2QyxNQUFNLElBQUlrQixTQUFTLHNCQUFBelEsTUFBQSxDQUFxQnVQLE1BQU0sUUFBSTtVQUNwRDtVQUNBdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLEVBQUU7UUFDaEIsQ0FBQyxDQUFDO01BQ0o7SUFBQztJQUFBLE9BQUEwbEMsT0FBQTtFQUFBLEVBbmFtQnBrQyxhQUFhO0VBc2FuQztBQUNGO0FBQ0E7RUFFRXBNLGtCQUFrQixDQUFDd3dDLE9BQU8sQ0FBQzs7RUFFM0I7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRSxJQUFNOEQsTUFBTSxHQUFHLFNBQVM7RUFDeEIsSUFBTUMsY0FBYyxHQUFHLGlCQUFpQjtFQUN4QyxJQUFNQyxnQkFBZ0IsR0FBRyxlQUFlO0VBQ3hDLElBQU1DLFNBQVMsR0FBQXRwQyxhQUFBLENBQUFBLGFBQUEsS0FDVnFsQyxPQUFPLENBQUNubEMsT0FBTztJQUNsQitnQyxPQUFPLEVBQUUsRUFBRTtJQUNYL2tCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZDlILFNBQVMsRUFBRSxPQUFPO0lBQ2xCaXRCLFFBQVEsRUFBRSxzQ0FBc0MsR0FBRyxtQ0FBbUMsR0FBRyxrQ0FBa0MsR0FBRyxrQ0FBa0MsR0FBRyxRQUFRO0lBQzNLbGxDLE9BQU8sRUFBRTtFQUFPLEVBQ2pCO0VBQ0QsSUFBTW90QyxhQUFhLEdBQUF2cEMsYUFBQSxDQUFBQSxhQUFBLEtBQ2RxbEMsT0FBTyxDQUFDamxDLFdBQVc7SUFDdEI2Z0MsT0FBTyxFQUFFO0VBQWdDLEVBQzFDOztFQUVEO0FBQ0Y7QUFDQTtFQUZFLElBSU11SSxPQUFPLDBCQUFBQyxRQUFBO0lBQUE1N0MsU0FBQSxDQUFBMjdDLE9BQUEsRUFBQUMsUUFBQTtJQUFBLElBQUFDLFFBQUEsR0FBQTM3QyxZQUFBLENBQUF5N0MsT0FBQTtJQUFBLFNBQUFBLFFBQUE7TUFBQXg3QyxlQUFBLE9BQUF3N0MsT0FBQTtNQUFBLE9BQUFFLFFBQUEsQ0FBQXo3QyxLQUFBLE9BQUFDLFNBQUE7SUFBQTtJQUFBQyxZQUFBLENBQUFxN0MsT0FBQTtNQUFBcDdDLEdBQUE7TUFBQUMsS0FBQTtNQVlYO01BQ0EsU0FBQXM0QyxlQUFBLEVBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNZLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQ29DLFdBQVcsRUFBRTtNQUMvQzs7TUFFQTtJQUFBO01BQUF2N0MsR0FBQTtNQUFBQyxLQUFBLEVBQ0EsU0FBQW81Qyx1QkFBQSxFQUF5QjtRQUFBLElBQUFtQyxNQUFBO1FBQ3ZCLE9BQUFBLE1BQUEsT0FBQW4vQixlQUFBLENBQUFtL0IsTUFBQSxFQUNHUixjQUFjLEVBQUcsSUFBSSxDQUFDN0IsU0FBUyxFQUFFLEdBQUE5OEIsZUFBQSxDQUFBbS9CLE1BQUEsRUFDakNQLGdCQUFnQixFQUFHLElBQUksQ0FBQ00sV0FBVyxFQUFFLEdBQUFDLE1BQUE7TUFFMUM7SUFBQztNQUFBeDdDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFzN0MsWUFBQSxFQUFjO1FBQ1osT0FBTyxJQUFJLENBQUM1SCx3QkFBd0IsQ0FBQyxJQUFJLENBQUN6Z0MsT0FBTyxDQUFDMi9CLE9BQU8sQ0FBQztNQUM1RDs7TUFFQTtJQUFBO01BQUE3eUMsR0FBQTtNQUFBbVAsR0FBQTtNQTNCQTtNQUNBLFNBQUFBLElBQUEsRUFBcUI7UUFDbkIsT0FBTytyQyxTQUFTO01BQ2xCO0lBQUM7TUFBQWw3QyxHQUFBO01BQUFtUCxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUF5QjtRQUN2QixPQUFPZ3NDLGFBQWE7TUFDdEI7SUFBQztNQUFBbjdDLEdBQUE7TUFBQW1QLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQWtCO1FBQ2hCLE9BQU80ckMsTUFBTTtNQUNmO0lBQUM7TUFBQS82QyxHQUFBO01BQUFDLEtBQUEsRUFtQkQsU0FBQStHLGdCQUF1QnVLLE1BQU0sRUFBRTtRQUM3QixPQUFPLElBQUksQ0FBQ3NGLElBQUksQ0FBQyxZQUFZO1VBQzNCLElBQU1DLElBQUksR0FBR3NrQyxPQUFPLENBQUN0bkMsbUJBQW1CLENBQUMsSUFBSSxFQUFFdkMsTUFBTSxDQUFDO1VBQ3RELElBQUksT0FBT0EsTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM5QjtVQUNGO1VBQ0EsSUFBSSxPQUFPdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQ3ZDLE1BQU0sSUFBSWtCLFNBQVMsc0JBQUF6USxNQUFBLENBQXFCdVAsTUFBTSxRQUFJO1VBQ3BEO1VBQ0F1RixJQUFJLENBQUN2RixNQUFNLENBQUMsRUFBRTtRQUNoQixDQUFDLENBQUM7TUFDSjtJQUFDO0lBQUEsT0FBQTZwQyxPQUFBO0VBQUEsRUF4Q21CbkUsT0FBTztFQTJDN0I7QUFDRjtBQUNBO0VBRUV4d0Msa0JBQWtCLENBQUMyMEMsT0FBTyxDQUFDOztFQUUzQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLElBQU1LLE1BQU0sR0FBRyxXQUFXO0VBQzFCLElBQU1DLFVBQVUsR0FBRyxjQUFjO0VBQ2pDLElBQU1DLFdBQVcsT0FBQTM1QyxNQUFBLENBQU8wNUMsVUFBVSxDQUFFO0VBQ3BDLElBQU1FLFlBQVksR0FBRyxXQUFXO0VBQ2hDLElBQU1DLGNBQWMsY0FBQTc1QyxNQUFBLENBQWMyNUMsV0FBVyxDQUFFO0VBQy9DLElBQU1HLFdBQVcsV0FBQTk1QyxNQUFBLENBQVcyNUMsV0FBVyxDQUFFO0VBQ3pDLElBQU1JLHFCQUFxQixVQUFBLzVDLE1BQUEsQ0FBVTI1QyxXQUFXLEVBQUEzNUMsTUFBQSxDQUFHNDVDLFlBQVksQ0FBRTtFQUNqRSxJQUFNSSx3QkFBd0IsR0FBRyxlQUFlO0VBQ2hELElBQU1DLG1CQUFtQixHQUFHLFFBQVE7RUFDcEMsSUFBTUMsaUJBQWlCLEdBQUcsd0JBQXdCO0VBQ2xELElBQU1DLHFCQUFxQixHQUFHLFFBQVE7RUFDdEMsSUFBTUMsdUJBQXVCLEdBQUcsbUJBQW1CO0VBQ25ELElBQU1DLGtCQUFrQixHQUFHLFdBQVc7RUFDdEMsSUFBTUMsa0JBQWtCLEdBQUcsV0FBVztFQUN0QyxJQUFNQyxtQkFBbUIsR0FBRyxrQkFBa0I7RUFDOUMsSUFBTUMsbUJBQW1CLE1BQUF4NkMsTUFBQSxDQUFNcTZDLGtCQUFrQixRQUFBcjZDLE1BQUEsQ0FBS3M2QyxrQkFBa0IsU0FBQXQ2QyxNQUFBLENBQU1xNkMsa0JBQWtCLFFBQUFyNkMsTUFBQSxDQUFLdTZDLG1CQUFtQixDQUFFO0VBQzFILElBQU1FLGlCQUFpQixHQUFHLFdBQVc7RUFDckMsSUFBTUMsMEJBQTBCLEdBQUcsa0JBQWtCO0VBQ3JELElBQU1DLFNBQVMsR0FBRztJQUNoQjd1QixNQUFNLEVBQUUsSUFBSTtJQUNaO0lBQ0E4dUIsVUFBVSxFQUFFLGNBQWM7SUFDMUJDLFlBQVksRUFBRSxLQUFLO0lBQ25CNzBDLE1BQU0sRUFBRSxJQUFJO0lBQ1o4MEMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0VBQ3pCLENBQUM7RUFDRCxJQUFNQyxhQUFhLEdBQUc7SUFDcEJqdkIsTUFBTSxFQUFFLGVBQWU7SUFDdkI7SUFDQTh1QixVQUFVLEVBQUUsUUFBUTtJQUNwQkMsWUFBWSxFQUFFLFNBQVM7SUFDdkI3MEMsTUFBTSxFQUFFLFNBQVM7SUFDakI4MEMsU0FBUyxFQUFFO0VBQ2IsQ0FBQzs7RUFFRDtBQUNGO0FBQ0E7RUFGRSxJQUlNRSxTQUFTLDBCQUFBQyxlQUFBO0lBQUF4OUMsU0FBQSxDQUFBdTlDLFNBQUEsRUFBQUMsZUFBQTtJQUFBLElBQUFDLFFBQUEsR0FBQXY5QyxZQUFBLENBQUFxOUMsU0FBQTtJQUNiLFNBQUFBLFVBQVk3OEMsT0FBTyxFQUFFb1IsTUFBTSxFQUFFO01BQUEsSUFBQTRyQyxPQUFBO01BQUF2OUMsZUFBQSxPQUFBbzlDLFNBQUE7TUFDM0JHLE9BQUEsR0FBQUQsUUFBQSxDQUFBMzZDLElBQUEsT0FBTXBDLE9BQU8sRUFBRW9SLE1BQU07O01BRXJCO01BQ0E0ckMsT0FBQSxDQUFLQyxZQUFZLEdBQUcsSUFBSS90QyxHQUFHLEVBQUU7TUFDN0I4dEMsT0FBQSxDQUFLRSxtQkFBbUIsR0FBRyxJQUFJaHVDLEdBQUcsRUFBRTtNQUNwQzh0QyxPQUFBLENBQUtHLFlBQVksR0FBR3A2QyxnQkFBZ0IsQ0FBQ2k2QyxPQUFBLENBQUtscUMsUUFBUSxDQUFDLENBQUN1ZixTQUFTLEtBQUssU0FBUyxHQUFHLElBQUksR0FBRzJxQixPQUFBLENBQUtscUMsUUFBUTtNQUNsR2txQyxPQUFBLENBQUtJLGFBQWEsR0FBRyxJQUFJO01BQ3pCSixPQUFBLENBQUtLLFNBQVMsR0FBRyxJQUFJO01BQ3JCTCxPQUFBLENBQUtNLG1CQUFtQixHQUFHO1FBQ3pCQyxlQUFlLEVBQUUsQ0FBQztRQUNsQkMsZUFBZSxFQUFFO01BQ25CLENBQUM7TUFDRFIsT0FBQSxDQUFLUyxPQUFPLEVBQUUsQ0FBQyxDQUFDO01BQUEsT0FBQVQsT0FBQTtJQUNsQjs7SUFFQTtJQUFBcDlDLFlBQUEsQ0FBQWk5QyxTQUFBO01BQUFoOUMsR0FBQTtNQUFBQyxLQUFBO01BV0E7TUFDQSxTQUFBMjlDLFFBQUEsRUFBVTtRQUNSLElBQUksQ0FBQ0MsZ0NBQWdDLEVBQUU7UUFDdkMsSUFBSSxDQUFDQyx3QkFBd0IsRUFBRTtRQUMvQixJQUFJLElBQUksQ0FBQ04sU0FBUyxFQUFFO1VBQ2xCLElBQUksQ0FBQ0EsU0FBUyxDQUFDTyxVQUFVLEVBQUU7UUFDN0IsQ0FBQyxNQUFNO1VBQ0wsSUFBSSxDQUFDUCxTQUFTLEdBQUcsSUFBSSxDQUFDUSxlQUFlLEVBQUU7UUFDekM7UUFBQyxJQUFBQyxXQUFBLEdBQUEzekMsMEJBQUEsQ0FDcUIsSUFBSSxDQUFDK3lDLG1CQUFtQixDQUFDbHlDLE1BQU0sRUFBRTtVQUFBK3lDLE9BQUE7UUFBQTtVQUF2RCxLQUFBRCxXQUFBLENBQUF6ekMsQ0FBQSxNQUFBMHpDLE9BQUEsR0FBQUQsV0FBQSxDQUFBeHpDLENBQUEsSUFBQUMsSUFBQSxHQUF5RDtZQUFBLElBQTlDeXpDLE9BQU8sR0FBQUQsT0FBQSxDQUFBaitDLEtBQUE7WUFDaEIsSUFBSSxDQUFDdTlDLFNBQVMsQ0FBQ1ksT0FBTyxDQUFDRCxPQUFPLENBQUM7VUFDakM7UUFBQyxTQUFBdnpDLEdBQUE7VUFBQXF6QyxXQUFBLENBQUFwekMsQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQXF6QyxXQUFBLENBQUFuekMsQ0FBQTtRQUFBO01BQ0g7SUFBQztNQUFBOUssR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW9ULFFBQUEsRUFBVTtRQUNSLElBQUksQ0FBQ21xQyxTQUFTLENBQUNPLFVBQVUsRUFBRTtRQUMzQnAvQixJQUFBLENBQUFDLGVBQUEsQ0FBQW8rQixTQUFBLENBQUEzNkMsU0FBQSxvQkFBQUUsSUFBQTtNQUNGOztNQUVBO0lBQUE7TUFBQXZDLEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUF3UixrQkFBa0JGLE1BQU0sRUFBRTtRQUN4QjtRQUNBQSxNQUFNLENBQUN2SixNQUFNLEdBQUdoRSxVQUFVLENBQUN1TixNQUFNLENBQUN2SixNQUFNLENBQUMsSUFBSWxGLFFBQVEsQ0FBQ2dELElBQUk7O1FBRTFEO1FBQ0F5TCxNQUFNLENBQUNxckMsVUFBVSxHQUFHcnJDLE1BQU0sQ0FBQ3VjLE1BQU0sTUFBQTlyQixNQUFBLENBQU11UCxNQUFNLENBQUN1YyxNQUFNLG1CQUFnQnZjLE1BQU0sQ0FBQ3FyQyxVQUFVO1FBQ3JGLElBQUksT0FBT3JyQyxNQUFNLENBQUN1ckMsU0FBUyxLQUFLLFFBQVEsRUFBRTtVQUN4Q3ZyQyxNQUFNLENBQUN1ckMsU0FBUyxHQUFHdnJDLE1BQU0sQ0FBQ3VyQyxTQUFTLENBQUNyNUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDMlIsR0FBRyxDQUFDLFVBQUFuVixLQUFLO1lBQUEsT0FBSXFELE1BQU0sQ0FBQ0MsVUFBVSxDQUFDdEQsS0FBSyxDQUFDO1VBQUEsRUFBQztRQUN2RjtRQUNBLE9BQU9zUixNQUFNO01BQ2Y7SUFBQztNQUFBdlIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTY5Qyx5QkFBQSxFQUEyQjtRQUFBLElBQUFPLE9BQUE7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQ25yQyxPQUFPLENBQUMycEMsWUFBWSxFQUFFO1VBQzlCO1FBQ0Y7O1FBRUE7UUFDQTl5QyxZQUFZLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNrSixPQUFPLENBQUNsTCxNQUFNLEVBQUU4ekMsV0FBVyxDQUFDO1FBQ2xEL3hDLFlBQVksQ0FBQ2dELEVBQUUsQ0FBQyxJQUFJLENBQUNtRyxPQUFPLENBQUNsTCxNQUFNLEVBQUU4ekMsV0FBVyxFQUFFSyxxQkFBcUIsRUFBRSxVQUFBeHlDLEtBQUssRUFBSTtVQUNoRixJQUFNMjBDLGlCQUFpQixHQUFHRCxPQUFJLENBQUNoQixtQkFBbUIsQ0FBQ2x1QyxHQUFHLENBQUN4RixLQUFLLENBQUMzQixNQUFNLENBQUNvcEIsSUFBSSxDQUFDO1VBQ3pFLElBQUlrdEIsaUJBQWlCLEVBQUU7WUFDckIzMEMsS0FBSyxDQUFDOEUsY0FBYyxFQUFFO1lBQ3RCLElBQU1sSixJQUFJLEdBQUc4NEMsT0FBSSxDQUFDZixZQUFZLElBQUk1N0MsTUFBTTtZQUN4QyxJQUFNc29CLE1BQU0sR0FBR3MwQixpQkFBaUIsQ0FBQ2gwQixTQUFTLEdBQUcrekIsT0FBSSxDQUFDcHJDLFFBQVEsQ0FBQ3FYLFNBQVM7WUFDcEUsSUFBSS9rQixJQUFJLENBQUNnNUMsUUFBUSxFQUFFO2NBQ2pCaDVDLElBQUksQ0FBQ2c1QyxRQUFRLENBQUM7Z0JBQ1p0NUIsR0FBRyxFQUFFK0UsTUFBTTtnQkFDWHcwQixRQUFRLEVBQUU7Y0FDWixDQUFDLENBQUM7Y0FDRjtZQUNGOztZQUVBO1lBQ0FqNUMsSUFBSSxDQUFDa3NCLFNBQVMsR0FBR3pILE1BQU07VUFDekI7UUFDRixDQUFDLENBQUM7TUFDSjtJQUFDO01BQUFocUIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQSs5QyxnQkFBQSxFQUFrQjtRQUFBLElBQUFTLE9BQUE7UUFDaEIsSUFBTXYyQixPQUFPLEdBQUc7VUFDZDNpQixJQUFJLEVBQUUsSUFBSSxDQUFDKzNDLFlBQVk7VUFDdkJSLFNBQVMsRUFBRSxJQUFJLENBQUM1cEMsT0FBTyxDQUFDNHBDLFNBQVM7VUFDakNGLFVBQVUsRUFBRSxJQUFJLENBQUMxcEMsT0FBTyxDQUFDMHBDO1FBQzNCLENBQUM7UUFDRCxPQUFPLElBQUk4QixvQkFBb0IsQ0FBQyxVQUFBL3hDLE9BQU87VUFBQSxPQUFJOHhDLE9BQUksQ0FBQ0UsaUJBQWlCLENBQUNoeUMsT0FBTyxDQUFDO1FBQUEsR0FBRXViLE9BQU8sQ0FBQztNQUN0Rjs7TUFFQTtJQUFBO01BQUFsb0IsR0FBQTtNQUFBQyxLQUFBLEVBQ0EsU0FBQTArQyxrQkFBa0JoeUMsT0FBTyxFQUFFO1FBQUEsSUFBQWl5QyxPQUFBO1FBQ3pCLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBR3pMLEtBQUs7VUFBQSxPQUFJd0wsT0FBSSxDQUFDeEIsWUFBWSxDQUFDanVDLEdBQUcsS0FBQW5OLE1BQUEsQ0FBS294QyxLQUFLLENBQUNwckMsTUFBTSxDQUFDakcsRUFBRSxFQUFHO1FBQUE7UUFDM0UsSUFBTWduQyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBR3FLLEtBQUssRUFBSTtVQUN4QndMLE9BQUksQ0FBQ25CLG1CQUFtQixDQUFDQyxlQUFlLEdBQUd0SyxLQUFLLENBQUNwckMsTUFBTSxDQUFDc2lCLFNBQVM7VUFDakVzMEIsT0FBSSxDQUFDRSxRQUFRLENBQUNELGFBQWEsQ0FBQ3pMLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFDRCxJQUFNdUssZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDTCxZQUFZLElBQUl4NkMsUUFBUSxDQUFDc0MsZUFBZSxFQUFFcXNCLFNBQVM7UUFDakYsSUFBTXN0QixlQUFlLEdBQUdwQixlQUFlLElBQUksSUFBSSxDQUFDRixtQkFBbUIsQ0FBQ0UsZUFBZTtRQUNuRixJQUFJLENBQUNGLG1CQUFtQixDQUFDRSxlQUFlLEdBQUdBLGVBQWU7UUFBQyxJQUFBcUIsV0FBQSxHQUFBMTBDLDBCQUFBLENBQ3ZDcUMsT0FBTztVQUFBc3lDLE9BQUE7UUFBQTtVQUEzQixLQUFBRCxXQUFBLENBQUF4MEMsQ0FBQSxNQUFBeTBDLE9BQUEsR0FBQUQsV0FBQSxDQUFBdjBDLENBQUEsSUFBQUMsSUFBQSxHQUE2QjtZQUFBLElBQWxCMG9DLEtBQUssR0FBQTZMLE9BQUEsQ0FBQWgvQyxLQUFBO1lBQ2QsSUFBSSxDQUFDbXpDLEtBQUssQ0FBQzhMLGNBQWMsRUFBRTtjQUN6QixJQUFJLENBQUMzQixhQUFhLEdBQUcsSUFBSTtjQUN6QixJQUFJLENBQUM0QixpQkFBaUIsQ0FBQ04sYUFBYSxDQUFDekwsS0FBSyxDQUFDLENBQUM7Y0FDNUM7WUFDRjtZQUNBLElBQU1nTSx3QkFBd0IsR0FBR2hNLEtBQUssQ0FBQ3ByQyxNQUFNLENBQUNzaUIsU0FBUyxJQUFJLElBQUksQ0FBQ216QixtQkFBbUIsQ0FBQ0MsZUFBZTtZQUNuRztZQUNBLElBQUlxQixlQUFlLElBQUlLLHdCQUF3QixFQUFFO2NBQy9DclcsUUFBUSxDQUFDcUssS0FBSyxDQUFDO2NBQ2Y7Y0FDQSxJQUFJLENBQUN1SyxlQUFlLEVBQUU7Z0JBQ3BCO2NBQ0Y7Y0FDQTtZQUNGOztZQUVBO1lBQ0EsSUFBSSxDQUFDb0IsZUFBZSxJQUFJLENBQUNLLHdCQUF3QixFQUFFO2NBQ2pEclcsUUFBUSxDQUFDcUssS0FBSyxDQUFDO1lBQ2pCO1VBQ0Y7UUFBQyxTQUFBeG9DLEdBQUE7VUFBQW8wQyxXQUFBLENBQUFuMEMsQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQW8wQyxXQUFBLENBQUFsMEMsQ0FBQTtRQUFBO01BQ0g7SUFBQztNQUFBOUssR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTQ5QyxpQ0FBQSxFQUFtQztRQUNqQyxJQUFJLENBQUNULFlBQVksR0FBRyxJQUFJL3RDLEdBQUcsRUFBRTtRQUM3QixJQUFJLENBQUNndUMsbUJBQW1CLEdBQUcsSUFBSWh1QyxHQUFHLEVBQUU7UUFDcEMsSUFBTWd3QyxXQUFXLEdBQUdsckMsY0FBYyxDQUFDL0ksSUFBSSxDQUFDK3dDLHFCQUFxQixFQUFFLElBQUksQ0FBQ2pwQyxPQUFPLENBQUNsTCxNQUFNLENBQUM7UUFBQyxJQUFBczNDLFdBQUEsR0FBQWgxQywwQkFBQSxDQUMvRCswQyxXQUFXO1VBQUFFLE9BQUE7UUFBQTtVQUFoQyxLQUFBRCxXQUFBLENBQUE5MEMsQ0FBQSxNQUFBKzBDLE9BQUEsR0FBQUQsV0FBQSxDQUFBNzBDLENBQUEsSUFBQUMsSUFBQSxHQUFrQztZQUFBLElBQXZCODBDLE1BQU0sR0FBQUQsT0FBQSxDQUFBdC9DLEtBQUE7WUFDZjtZQUNBLElBQUksQ0FBQ3UvQyxNQUFNLENBQUNwdUIsSUFBSSxJQUFJenNCLFVBQVUsQ0FBQzY2QyxNQUFNLENBQUMsRUFBRTtjQUN0QztZQUNGO1lBQ0EsSUFBTWxCLGlCQUFpQixHQUFHbnFDLGNBQWMsQ0FBQ0csT0FBTyxDQUFDa3JDLE1BQU0sQ0FBQ3B1QixJQUFJLEVBQUUsSUFBSSxDQUFDbmUsUUFBUSxDQUFDOztZQUU1RTtZQUNBLElBQUk5TyxTQUFTLENBQUNtNkMsaUJBQWlCLENBQUMsRUFBRTtjQUNoQyxJQUFJLENBQUNsQixZQUFZLENBQUM3dEMsR0FBRyxDQUFDaXdDLE1BQU0sQ0FBQ3B1QixJQUFJLEVBQUVvdUIsTUFBTSxDQUFDO2NBQzFDLElBQUksQ0FBQ25DLG1CQUFtQixDQUFDOXRDLEdBQUcsQ0FBQ2l3QyxNQUFNLENBQUNwdUIsSUFBSSxFQUFFa3RCLGlCQUFpQixDQUFDO1lBQzlEO1VBQ0Y7UUFBQyxTQUFBMXpDLEdBQUE7VUFBQTAwQyxXQUFBLENBQUF6MEMsQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQTAwQyxXQUFBLENBQUF4MEMsQ0FBQTtRQUFBO01BQ0g7SUFBQztNQUFBOUssR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTYrQyxTQUFTOTJDLE1BQU0sRUFBRTtRQUNmLElBQUksSUFBSSxDQUFDdTFDLGFBQWEsS0FBS3YxQyxNQUFNLEVBQUU7VUFDakM7UUFDRjtRQUNBLElBQUksQ0FBQ20zQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUNqc0MsT0FBTyxDQUFDbEwsTUFBTSxDQUFDO1FBQzNDLElBQUksQ0FBQ3UxQyxhQUFhLEdBQUd2MUMsTUFBTTtRQUMzQkEsTUFBTSxDQUFDbEQsU0FBUyxDQUFDaVYsR0FBRyxDQUFDa2lDLG1CQUFtQixDQUFDO1FBQ3pDLElBQUksQ0FBQ3dELGdCQUFnQixDQUFDejNDLE1BQU0sQ0FBQztRQUM3QitCLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQyxJQUFJLENBQUNrRixRQUFRLEVBQUU0b0MsY0FBYyxFQUFFO1VBQ2xENXZDLGFBQWEsRUFBRWpFO1FBQ2pCLENBQUMsQ0FBQztNQUNKO0lBQUM7TUFBQWhJLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF3L0MsaUJBQWlCejNDLE1BQU0sRUFBRTtRQUN2QjtRQUNBLElBQUlBLE1BQU0sQ0FBQ2xELFNBQVMsQ0FBQ0MsUUFBUSxDQUFDaTNDLHdCQUF3QixDQUFDLEVBQUU7VUFDdkQ3bkMsY0FBYyxDQUFDRyxPQUFPLENBQUNvb0MsMEJBQTBCLEVBQUUxMEMsTUFBTSxDQUFDeEQsT0FBTyxDQUFDaTRDLGlCQUFpQixDQUFDLENBQUMsQ0FBQzMzQyxTQUFTLENBQUNpVixHQUFHLENBQUNraUMsbUJBQW1CLENBQUM7VUFDeEg7UUFDRjtRQUFDLElBQUF5RCxXQUFBLEdBQUFwMUMsMEJBQUEsQ0FDdUI2SixjQUFjLENBQUNRLE9BQU8sQ0FBQzNNLE1BQU0sRUFBRW8wQyx1QkFBdUIsQ0FBQztVQUFBdUQsT0FBQTtRQUFBO1VBQS9FLEtBQUFELFdBQUEsQ0FBQWwxQyxDQUFBLE1BQUFtMUMsT0FBQSxHQUFBRCxXQUFBLENBQUFqMUMsQ0FBQSxJQUFBQyxJQUFBLEdBQWlGO1lBQUEsSUFBdEVrMUMsU0FBUyxHQUFBRCxPQUFBLENBQUExL0MsS0FBQTtZQUNsQjtZQUNBO1lBQUEsSUFBQTQvQyxXQUFBLEdBQUF2MUMsMEJBQUEsQ0FDbUI2SixjQUFjLENBQUNVLElBQUksQ0FBQytxQyxTQUFTLEVBQUVwRCxtQkFBbUIsQ0FBQztjQUFBc0QsT0FBQTtZQUFBO2NBQXRFLEtBQUFELFdBQUEsQ0FBQXIxQyxDQUFBLE1BQUFzMUMsT0FBQSxHQUFBRCxXQUFBLENBQUFwMUMsQ0FBQSxJQUFBQyxJQUFBLEdBQXdFO2dCQUFBLElBQTdEMGUsSUFBSSxHQUFBMDJCLE9BQUEsQ0FBQTcvQyxLQUFBO2dCQUNibXBCLElBQUksQ0FBQ3RrQixTQUFTLENBQUNpVixHQUFHLENBQUNraUMsbUJBQW1CLENBQUM7Y0FDekM7WUFBQyxTQUFBcnhDLEdBQUE7Y0FBQWkxQyxXQUFBLENBQUFoMUMsQ0FBQSxDQUFBRCxHQUFBO1lBQUE7Y0FBQWkxQyxXQUFBLENBQUEvMEMsQ0FBQTtZQUFBO1VBQ0g7UUFBQyxTQUFBRixHQUFBO1VBQUE4MEMsV0FBQSxDQUFBNzBDLENBQUEsQ0FBQUQsR0FBQTtRQUFBO1VBQUE4MEMsV0FBQSxDQUFBNTBDLENBQUE7UUFBQTtNQUNIO0lBQUM7TUFBQTlLLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFrL0Msa0JBQWtCLzhCLE1BQU0sRUFBRTtRQUN4QkEsTUFBTSxDQUFDdGQsU0FBUyxDQUFDaUwsTUFBTSxDQUFDa3NDLG1CQUFtQixDQUFDO1FBQzVDLElBQU04RCxXQUFXLEdBQUc1ckMsY0FBYyxDQUFDL0ksSUFBSSxJQUFBcEosTUFBQSxDQUFJbTZDLHFCQUFxQixPQUFBbjZDLE1BQUEsQ0FBSWk2QyxtQkFBbUIsR0FBSTc1QixNQUFNLENBQUM7UUFBQyxJQUFBNDlCLFdBQUEsR0FBQTExQywwQkFBQSxDQUNoRnkxQyxXQUFXO1VBQUFFLE9BQUE7UUFBQTtVQUE5QixLQUFBRCxXQUFBLENBQUF4MUMsQ0FBQSxNQUFBeTFDLE9BQUEsR0FBQUQsV0FBQSxDQUFBdjFDLENBQUEsSUFBQUMsSUFBQSxHQUFnQztZQUFBLElBQXJCcWMsSUFBSSxHQUFBazVCLE9BQUEsQ0FBQWhnRCxLQUFBO1lBQ2I4bUIsSUFBSSxDQUFDamlCLFNBQVMsQ0FBQ2lMLE1BQU0sQ0FBQ2tzQyxtQkFBbUIsQ0FBQztVQUM1QztRQUFDLFNBQUFyeEMsR0FBQTtVQUFBbzFDLFdBQUEsQ0FBQW4xQyxDQUFBLENBQUFELEdBQUE7UUFBQTtVQUFBbzFDLFdBQUEsQ0FBQWwxQyxDQUFBO1FBQUE7TUFDSDs7TUFFQTtJQUFBO01BQUE5SyxHQUFBO01BQUFtUCxHQUFBLEVBaEtBLFNBQUFBLElBQUEsRUFBcUI7UUFDbkIsT0FBT3d0QyxTQUFTO01BQ2xCO0lBQUM7TUFBQTM4QyxHQUFBO01BQUFtUCxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUF5QjtRQUN2QixPQUFPNHRDLGFBQWE7TUFDdEI7SUFBQztNQUFBLzhDLEdBQUE7TUFBQW1QLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQWtCO1FBQ2hCLE9BQU9zc0MsTUFBTTtNQUNmO0lBQUM7TUFBQXo3QyxHQUFBO01BQUFDLEtBQUEsRUF5SkQsU0FBQStHLGdCQUF1QnVLLE1BQU0sRUFBRTtRQUM3QixPQUFPLElBQUksQ0FBQ3NGLElBQUksQ0FBQyxZQUFZO1VBQzNCLElBQU1DLElBQUksR0FBR2ttQyxTQUFTLENBQUNscEMsbUJBQW1CLENBQUMsSUFBSSxFQUFFdkMsTUFBTSxDQUFDO1VBQ3hELElBQUksT0FBT0EsTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM5QjtVQUNGO1VBQ0EsSUFBSXVGLElBQUksQ0FBQ3ZGLE1BQU0sQ0FBQyxLQUFLcFAsU0FBUyxJQUFJb1AsTUFBTSxDQUFDbEUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJa0UsTUFBTSxLQUFLLGFBQWEsRUFBRTtZQUNwRixNQUFNLElBQUlrQixTQUFTLHNCQUFBelEsTUFBQSxDQUFxQnVQLE1BQU0sUUFBSTtVQUNwRDtVQUNBdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLEVBQUU7UUFDaEIsQ0FBQyxDQUFDO01BQ0o7SUFBQztJQUFBLE9BQUF5ckMsU0FBQTtFQUFBLEVBOUxxQm5xQyxhQUFhO0VBaU1yQztBQUNGO0FBQ0E7RUFFRTlJLFlBQVksQ0FBQ2dELEVBQUUsQ0FBQ3JMLE1BQU0sRUFBRXE2QyxxQkFBcUIsRUFBRSxZQUFNO0lBQUEsSUFBQW1FLFdBQUEsR0FBQTUxQywwQkFBQSxDQUNqQzZKLGNBQWMsQ0FBQy9JLElBQUksQ0FBQzh3QyxpQkFBaUIsQ0FBQztNQUFBaUUsT0FBQTtJQUFBO01BQXhELEtBQUFELFdBQUEsQ0FBQTExQyxDQUFBLE1BQUEyMUMsT0FBQSxHQUFBRCxXQUFBLENBQUF6MUMsQ0FBQSxJQUFBQyxJQUFBLEdBQTBEO1FBQUEsSUFBL0MwMUMsR0FBRyxHQUFBRCxPQUFBLENBQUFsZ0QsS0FBQTtRQUNaKzhDLFNBQVMsQ0FBQ2xwQyxtQkFBbUIsQ0FBQ3NzQyxHQUFHLENBQUM7TUFDcEM7SUFBQyxTQUFBeDFDLEdBQUE7TUFBQXMxQyxXQUFBLENBQUFyMUMsQ0FBQSxDQUFBRCxHQUFBO0lBQUE7TUFBQXMxQyxXQUFBLENBQUFwMUMsQ0FBQTtJQUFBO0VBQ0gsQ0FBQyxDQUFDOztFQUVGO0FBQ0Y7QUFDQTs7RUFFRXJFLGtCQUFrQixDQUFDdTJDLFNBQVMsQ0FBQzs7RUFFN0I7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRSxJQUFNcUQsTUFBTSxHQUFHLEtBQUs7RUFDcEIsSUFBTUMsVUFBVSxHQUFHLFFBQVE7RUFDM0IsSUFBTUMsV0FBVyxPQUFBditDLE1BQUEsQ0FBT3MrQyxVQUFVLENBQUU7RUFDcEMsSUFBTUUsWUFBWSxVQUFBeCtDLE1BQUEsQ0FBVXUrQyxXQUFXLENBQUU7RUFDekMsSUFBTUUsY0FBYyxZQUFBeitDLE1BQUEsQ0FBWXUrQyxXQUFXLENBQUU7RUFDN0MsSUFBTUcsWUFBWSxVQUFBMStDLE1BQUEsQ0FBVXUrQyxXQUFXLENBQUU7RUFDekMsSUFBTUksYUFBYSxXQUFBMytDLE1BQUEsQ0FBV3UrQyxXQUFXLENBQUU7RUFDM0MsSUFBTUssb0JBQW9CLFdBQUE1K0MsTUFBQSxDQUFXdStDLFdBQVcsQ0FBRTtFQUNsRCxJQUFNTSxhQUFhLGFBQUE3K0MsTUFBQSxDQUFhdStDLFdBQVcsQ0FBRTtFQUM3QyxJQUFNTyxtQkFBbUIsVUFBQTkrQyxNQUFBLENBQVV1K0MsV0FBVyxDQUFFO0VBQ2hELElBQU1RLGNBQWMsR0FBRyxXQUFXO0VBQ2xDLElBQU1DLGVBQWUsR0FBRyxZQUFZO0VBQ3BDLElBQU1DLFlBQVksR0FBRyxTQUFTO0VBQzlCLElBQU1DLGNBQWMsR0FBRyxXQUFXO0VBQ2xDLElBQU1DLGlCQUFpQixHQUFHLFFBQVE7RUFDbEMsSUFBTUMsaUJBQWlCLEdBQUcsTUFBTTtFQUNoQyxJQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0VBQ2hDLElBQU1DLGNBQWMsR0FBRyxVQUFVO0VBQ2pDLElBQU1DLHdCQUF3QixHQUFHLGtCQUFrQjtFQUNuRCxJQUFNQyxzQkFBc0IsR0FBRyxnQkFBZ0I7RUFDL0MsSUFBTUMsNEJBQTRCLEdBQUcsd0JBQXdCO0VBQzdELElBQU1DLGtCQUFrQixHQUFHLHFDQUFxQztFQUNoRSxJQUFNQyxjQUFjLEdBQUcsNkJBQTZCO0VBQ3BELElBQU1DLGNBQWMsZUFBQTUvQyxNQUFBLENBQWV5L0MsNEJBQTRCLHdCQUFBei9DLE1BQUEsQ0FBcUJ5L0MsNEJBQTRCLHNCQUFBei9DLE1BQUEsQ0FBaUJ5L0MsNEJBQTRCLENBQUU7RUFDL0osSUFBTUksb0JBQW9CLEdBQUcsMEVBQTBFLENBQUMsQ0FBQztFQUN6RyxJQUFNQyxtQkFBbUIsTUFBQTkvQyxNQUFBLENBQU00L0MsY0FBYyxRQUFBNS9DLE1BQUEsQ0FBSzYvQyxvQkFBb0IsQ0FBRTtFQUN4RSxJQUFNRSwyQkFBMkIsT0FBQS8vQyxNQUFBLENBQU9tL0MsaUJBQWlCLGlDQUFBbi9DLE1BQUEsQ0FBNEJtL0MsaUJBQWlCLGtDQUFBbi9DLE1BQUEsQ0FBNkJtL0MsaUJBQWlCLDhCQUF5Qjs7RUFFN0s7QUFDRjtBQUNBO0VBRkUsSUFJTWEsR0FBRywwQkFBQUMsZ0JBQUE7SUFBQXhpRCxTQUFBLENBQUF1aUQsR0FBQSxFQUFBQyxnQkFBQTtJQUFBLElBQUFDLFFBQUEsR0FBQXZpRCxZQUFBLENBQUFxaUQsR0FBQTtJQUNQLFNBQUFBLElBQVk3aEQsT0FBTyxFQUFFO01BQUEsSUFBQWdpRCxPQUFBO01BQUF2aUQsZUFBQSxPQUFBb2lELEdBQUE7TUFDbkJHLE9BQUEsR0FBQUQsUUFBQSxDQUFBMy9DLElBQUEsT0FBTXBDLE9BQU87TUFDYmdpRCxPQUFBLENBQUs1ZixPQUFPLEdBQUc0ZixPQUFBLENBQUtsdkMsUUFBUSxDQUFDek8sT0FBTyxDQUFDazlDLGtCQUFrQixDQUFDO01BQ3hELElBQUksQ0FBQ1MsT0FBQSxDQUFLNWYsT0FBTyxFQUFFO1FBQ2pCLE9BQUF2dkIsMEJBQUEsQ0FBQW12QyxPQUFBO1FBQ0E7UUFDQTtNQUNGOztNQUVBO01BQ0FBLE9BQUEsQ0FBS0MscUJBQXFCLENBQUNELE9BQUEsQ0FBSzVmLE9BQU8sRUFBRTRmLE9BQUEsQ0FBS0UsWUFBWSxFQUFFLENBQUM7TUFDN0R0NEMsWUFBWSxDQUFDZ0QsRUFBRSxDQUFDbzFDLE9BQUEsQ0FBS2x2QyxRQUFRLEVBQUU0dEMsYUFBYSxFQUFFLFVBQUFsM0MsS0FBSztRQUFBLE9BQUl3NEMsT0FBQSxDQUFLcGpDLFFBQVEsQ0FBQ3BWLEtBQUssQ0FBQztNQUFBLEVBQUM7TUFBQyxPQUFBdzRDLE9BQUE7SUFDL0U7O0lBRUE7SUFBQXBpRCxZQUFBLENBQUFpaUQsR0FBQTtNQUFBaGlELEdBQUE7TUFBQUMsS0FBQTtNQUtBO01BQ0EsU0FBQXFqQixLQUFBLEVBQU87UUFDTDtRQUNBLElBQU1nL0IsU0FBUyxHQUFHLElBQUksQ0FBQ3J2QyxRQUFRO1FBQy9CLElBQUksSUFBSSxDQUFDc3ZDLGFBQWEsQ0FBQ0QsU0FBUyxDQUFDLEVBQUU7VUFDakM7UUFDRjs7UUFFQTtRQUNBLElBQU1FLE1BQU0sR0FBRyxJQUFJLENBQUNDLGNBQWMsRUFBRTtRQUNwQyxJQUFNdmYsU0FBUyxHQUFHc2YsTUFBTSxHQUFHejRDLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQ3kwQyxNQUFNLEVBQUVoQyxZQUFZLEVBQUU7VUFDcEV2MEMsYUFBYSxFQUFFcTJDO1FBQ2pCLENBQUMsQ0FBQyxHQUFHLElBQUk7UUFDVCxJQUFNM2YsU0FBUyxHQUFHNTRCLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQ3UwQyxTQUFTLEVBQUU1QixZQUFZLEVBQUU7VUFDOUR6MEMsYUFBYSxFQUFFdTJDO1FBQ2pCLENBQUMsQ0FBQztRQUNGLElBQUk3ZixTQUFTLENBQUN4MEIsZ0JBQWdCLElBQUkrMEIsU0FBUyxJQUFJQSxTQUFTLENBQUMvMEIsZ0JBQWdCLEVBQUU7VUFDekU7UUFDRjtRQUNBLElBQUksQ0FBQ3UwQyxXQUFXLENBQUNGLE1BQU0sRUFBRUYsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQ0ssU0FBUyxDQUFDTCxTQUFTLEVBQUVFLE1BQU0sQ0FBQztNQUNuQzs7TUFFQTtJQUFBO01BQUF4aUQsR0FBQTtNQUFBQyxLQUFBLEVBQ0EsU0FBQTBpRCxVQUFVeGlELE9BQU8sRUFBRXlpRCxXQUFXLEVBQUU7UUFBQSxJQUFBQyxPQUFBO1FBQzlCLElBQUksQ0FBQzFpRCxPQUFPLEVBQUU7VUFDWjtRQUNGO1FBQ0FBLE9BQU8sQ0FBQzJFLFNBQVMsQ0FBQ2lWLEdBQUcsQ0FBQ29uQyxpQkFBaUIsQ0FBQztRQUN4QyxJQUFJLENBQUN3QixTQUFTLENBQUN4dUMsY0FBYyxDQUFDcUIsc0JBQXNCLENBQUNyVixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRWhFLElBQU04akIsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztVQUNyQixJQUFJOWpCLE9BQU8sQ0FBQytFLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDMUMvRSxPQUFPLENBQUMyRSxTQUFTLENBQUNpVixHQUFHLENBQUNzbkMsaUJBQWlCLENBQUM7WUFDeEM7VUFDRjtVQUNBbGhELE9BQU8sQ0FBQ3VRLGVBQWUsQ0FBQyxVQUFVLENBQUM7VUFDbkN2USxPQUFPLENBQUNxUSxZQUFZLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQztVQUMzQ3F5QyxPQUFJLENBQUNDLGVBQWUsQ0FBQzNpRCxPQUFPLEVBQUUsSUFBSSxDQUFDO1VBQ25DNEosWUFBWSxDQUFDZ0UsT0FBTyxDQUFDNU4sT0FBTyxFQUFFd2dELGFBQWEsRUFBRTtZQUMzQzEwQyxhQUFhLEVBQUUyMkM7VUFDakIsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUNELElBQUksQ0FBQ2p2QyxjQUFjLENBQUNzUSxRQUFRLEVBQUU5akIsT0FBTyxFQUFFQSxPQUFPLENBQUMyRSxTQUFTLENBQUNDLFFBQVEsQ0FBQ3E4QyxpQkFBaUIsQ0FBQyxDQUFDO01BQ3ZGO0lBQUM7TUFBQXBoRCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBeWlELFlBQVl2aUQsT0FBTyxFQUFFeWlELFdBQVcsRUFBRTtRQUFBLElBQUFHLE9BQUE7UUFDaEMsSUFBSSxDQUFDNWlELE9BQU8sRUFBRTtVQUNaO1FBQ0Y7UUFDQUEsT0FBTyxDQUFDMkUsU0FBUyxDQUFDaUwsTUFBTSxDQUFDb3hDLGlCQUFpQixDQUFDO1FBQzNDaGhELE9BQU8sQ0FBQzB1QyxJQUFJLEVBQUU7UUFDZCxJQUFJLENBQUM2VCxXQUFXLENBQUN2dUMsY0FBYyxDQUFDcUIsc0JBQXNCLENBQUNyVixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRWxFLElBQU04akIsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztVQUNyQixJQUFJOWpCLE9BQU8sQ0FBQytFLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDMUMvRSxPQUFPLENBQUMyRSxTQUFTLENBQUNpTCxNQUFNLENBQUNzeEMsaUJBQWlCLENBQUM7WUFDM0M7VUFDRjtVQUNBbGhELE9BQU8sQ0FBQ3FRLFlBQVksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDO1VBQzVDclEsT0FBTyxDQUFDcVEsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7VUFDdEN1eUMsT0FBSSxDQUFDRCxlQUFlLENBQUMzaUQsT0FBTyxFQUFFLEtBQUssQ0FBQztVQUNwQzRKLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQzVOLE9BQU8sRUFBRXNnRCxjQUFjLEVBQUU7WUFDNUN4MEMsYUFBYSxFQUFFMjJDO1VBQ2pCLENBQUMsQ0FBQztRQUNKLENBQUM7UUFDRCxJQUFJLENBQUNqdkMsY0FBYyxDQUFDc1EsUUFBUSxFQUFFOWpCLE9BQU8sRUFBRUEsT0FBTyxDQUFDMkUsU0FBUyxDQUFDQyxRQUFRLENBQUNxOEMsaUJBQWlCLENBQUMsQ0FBQztNQUN2RjtJQUFDO01BQUFwaEQsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQThlLFNBQVNwVixLQUFLLEVBQUU7UUFDZCxJQUFJLENBQUMsQ0FBQ28zQyxjQUFjLEVBQUVDLGVBQWUsRUFBRUMsWUFBWSxFQUFFQyxjQUFjLENBQUMsQ0FBQ3AwQyxRQUFRLENBQUNuRCxLQUFLLENBQUMzSixHQUFHLENBQUMsRUFBRTtVQUN4RjtRQUNGO1FBQ0EySixLQUFLLENBQUNpN0IsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN6Qmo3QixLQUFLLENBQUM4RSxjQUFjLEVBQUU7UUFDdEIsSUFBTXNSLE1BQU0sR0FBRyxDQUFDaWhDLGVBQWUsRUFBRUUsY0FBYyxDQUFDLENBQUNwMEMsUUFBUSxDQUFDbkQsS0FBSyxDQUFDM0osR0FBRyxDQUFDO1FBQ3BFLElBQU1nakQsaUJBQWlCLEdBQUc3NkMsb0JBQW9CLENBQUMsSUFBSSxDQUFDazZDLFlBQVksRUFBRSxDQUFDdHhDLE1BQU0sQ0FBQyxVQUFBNVEsT0FBTztVQUFBLE9BQUksQ0FBQ3dFLFVBQVUsQ0FBQ3hFLE9BQU8sQ0FBQztRQUFBLEVBQUMsRUFBRXdKLEtBQUssQ0FBQzNCLE1BQU0sRUFBRStYLE1BQU0sRUFBRSxJQUFJLENBQUM7UUFDdkksSUFBSWlqQyxpQkFBaUIsRUFBRTtVQUNyQkEsaUJBQWlCLENBQUNoZ0IsS0FBSyxDQUFDO1lBQ3RCaWdCLGFBQWEsRUFBRTtVQUNqQixDQUFDLENBQUM7VUFDRmpCLEdBQUcsQ0FBQ2x1QyxtQkFBbUIsQ0FBQ2t2QyxpQkFBaUIsQ0FBQyxDQUFDMS9CLElBQUksRUFBRTtRQUNuRDtNQUNGO0lBQUM7TUFBQXRqQixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBb2lELGFBQUEsRUFBZTtRQUNiO1FBQ0EsT0FBT2x1QyxjQUFjLENBQUMvSSxJQUFJLENBQUMwMkMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDdmYsT0FBTyxDQUFDO01BQy9EO0lBQUM7TUFBQXZpQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBd2lELGVBQUEsRUFBaUI7UUFBQSxJQUFBUyxPQUFBO1FBQ2YsT0FBTyxJQUFJLENBQUNiLFlBQVksRUFBRSxDQUFDajNDLElBQUksQ0FBQyxVQUFBcUosS0FBSztVQUFBLE9BQUl5dUMsT0FBSSxDQUFDWCxhQUFhLENBQUM5dEMsS0FBSyxDQUFDO1FBQUEsRUFBQyxJQUFJLElBQUk7TUFDN0U7SUFBQztNQUFBelUsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW1pRCxzQkFBc0JoZ0MsTUFBTSxFQUFFN04sUUFBUSxFQUFFO1FBQ3RDLElBQUksQ0FBQzR1Qyx3QkFBd0IsQ0FBQy9nQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztRQUFDLElBQUFnaEMsV0FBQSxHQUFBOTRDLDBCQUFBLENBQ3JDaUssUUFBUTtVQUFBOHVDLE9BQUE7UUFBQTtVQUE1QixLQUFBRCxXQUFBLENBQUE1NEMsQ0FBQSxNQUFBNjRDLE9BQUEsR0FBQUQsV0FBQSxDQUFBMzRDLENBQUEsSUFBQUMsSUFBQSxHQUE4QjtZQUFBLElBQW5CK0osS0FBSyxHQUFBNHVDLE9BQUEsQ0FBQXBqRCxLQUFBO1lBQ2QsSUFBSSxDQUFDcWpELDRCQUE0QixDQUFDN3VDLEtBQUssQ0FBQztVQUMxQztRQUFDLFNBQUE3SixHQUFBO1VBQUF3NEMsV0FBQSxDQUFBdjRDLENBQUEsQ0FBQUQsR0FBQTtRQUFBO1VBQUF3NEMsV0FBQSxDQUFBdDRDLENBQUE7UUFBQTtNQUNIO0lBQUM7TUFBQTlLLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFxakQsNkJBQTZCN3VDLEtBQUssRUFBRTtRQUNsQ0EsS0FBSyxHQUFHLElBQUksQ0FBQzh1QyxnQkFBZ0IsQ0FBQzl1QyxLQUFLLENBQUM7UUFDcEMsSUFBTSt1QyxRQUFRLEdBQUcsSUFBSSxDQUFDakIsYUFBYSxDQUFDOXRDLEtBQUssQ0FBQztRQUMxQyxJQUFNZ3ZDLFNBQVMsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixDQUFDanZDLEtBQUssQ0FBQztRQUM5Q0EsS0FBSyxDQUFDakUsWUFBWSxDQUFDLGVBQWUsRUFBRWd6QyxRQUFRLENBQUM7UUFDN0MsSUFBSUMsU0FBUyxLQUFLaHZDLEtBQUssRUFBRTtVQUN2QixJQUFJLENBQUMwdUMsd0JBQXdCLENBQUNNLFNBQVMsRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDO1FBQ2xFO1FBQ0EsSUFBSSxDQUFDRCxRQUFRLEVBQUU7VUFDYi91QyxLQUFLLENBQUNqRSxZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztRQUN0QztRQUNBLElBQUksQ0FBQzJ5Qyx3QkFBd0IsQ0FBQzF1QyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQzs7UUFFbkQ7UUFDQSxJQUFJLENBQUNrdkMsa0NBQWtDLENBQUNsdkMsS0FBSyxDQUFDO01BQ2hEO0lBQUM7TUFBQXpVLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUEwakQsbUNBQW1DbHZDLEtBQUssRUFBRTtRQUN4QyxJQUFNek0sTUFBTSxHQUFHbU0sY0FBYyxDQUFDcUIsc0JBQXNCLENBQUNmLEtBQUssQ0FBQztRQUMzRCxJQUFJLENBQUN6TSxNQUFNLEVBQUU7VUFDWDtRQUNGO1FBQ0EsSUFBSSxDQUFDbTdDLHdCQUF3QixDQUFDbjdDLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO1FBQ3pELElBQUl5TSxLQUFLLENBQUMxUyxFQUFFLEVBQUU7VUFDWixJQUFJLENBQUNvaEQsd0JBQXdCLENBQUNuN0MsTUFBTSxFQUFFLGlCQUFpQixLQUFBaEcsTUFBQSxDQUFLeVMsS0FBSyxDQUFDMVMsRUFBRSxFQUFHO1FBQ3pFO01BQ0Y7SUFBQztNQUFBL0IsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTZpRCxnQkFBZ0IzaUQsT0FBTyxFQUFFeWpELElBQUksRUFBRTtRQUM3QixJQUFNSCxTQUFTLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ3ZqRCxPQUFPLENBQUM7UUFDaEQsSUFBSSxDQUFDc2pELFNBQVMsQ0FBQzMrQyxTQUFTLENBQUNDLFFBQVEsQ0FBQ3U4QyxjQUFjLENBQUMsRUFBRTtVQUNqRDtRQUNGO1FBQ0EsSUFBTTdwQyxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBSWhXLFFBQVEsRUFBRW1sQyxTQUFTLEVBQUs7VUFDdEMsSUFBTXptQyxPQUFPLEdBQUdnVSxjQUFjLENBQUNHLE9BQU8sQ0FBQzdTLFFBQVEsRUFBRWdpRCxTQUFTLENBQUM7VUFDM0QsSUFBSXRqRCxPQUFPLEVBQUU7WUFDWEEsT0FBTyxDQUFDMkUsU0FBUyxDQUFDMlMsTUFBTSxDQUFDbXZCLFNBQVMsRUFBRWdkLElBQUksQ0FBQztVQUMzQztRQUNGLENBQUM7UUFDRG5zQyxNQUFNLENBQUM4cEMsd0JBQXdCLEVBQUVKLGlCQUFpQixDQUFDO1FBQ25EMXBDLE1BQU0sQ0FBQytwQyxzQkFBc0IsRUFBRUgsaUJBQWlCLENBQUM7UUFDakRvQyxTQUFTLENBQUNqekMsWUFBWSxDQUFDLGVBQWUsRUFBRW96QyxJQUFJLENBQUM7TUFDL0M7SUFBQztNQUFBNWpELEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFrakQseUJBQXlCaGpELE9BQU8sRUFBRXFvQixTQUFTLEVBQUV2b0IsS0FBSyxFQUFFO1FBQ2xELElBQUksQ0FBQ0UsT0FBTyxDQUFDOEUsWUFBWSxDQUFDdWpCLFNBQVMsQ0FBQyxFQUFFO1VBQ3BDcm9CLE9BQU8sQ0FBQ3FRLFlBQVksQ0FBQ2dZLFNBQVMsRUFBRXZvQixLQUFLLENBQUM7UUFDeEM7TUFDRjtJQUFDO01BQUFELEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFzaUQsY0FBY3gvQixJQUFJLEVBQUU7UUFDbEIsT0FBT0EsSUFBSSxDQUFDamUsU0FBUyxDQUFDQyxRQUFRLENBQUNvOEMsaUJBQWlCLENBQUM7TUFDbkQ7O01BRUE7SUFBQTtNQUFBbmhELEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUFzakQsaUJBQWlCeGdDLElBQUksRUFBRTtRQUNyQixPQUFPQSxJQUFJLENBQUNyTyxPQUFPLENBQUNvdEMsbUJBQW1CLENBQUMsR0FBRy8rQixJQUFJLEdBQUc1TyxjQUFjLENBQUNHLE9BQU8sQ0FBQ3d0QyxtQkFBbUIsRUFBRS8rQixJQUFJLENBQUM7TUFDckc7O01BRUE7SUFBQTtNQUFBL2lCLEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUF5akQsaUJBQWlCM2dDLElBQUksRUFBRTtRQUNyQixPQUFPQSxJQUFJLENBQUN2ZSxPQUFPLENBQUNtOUMsY0FBYyxDQUFDLElBQUk1K0IsSUFBSTtNQUM3Qzs7TUFFQTtJQUFBO01BQUEvaUIsR0FBQTtNQUFBbVAsR0FBQSxFQS9KQSxTQUFBQSxJQUFBLEVBQWtCO1FBQ2hCLE9BQU9reEMsTUFBTTtNQUNmO0lBQUM7TUFBQXJnRCxHQUFBO01BQUFDLEtBQUEsRUE4SkQsU0FBQStHLGdCQUF1QnVLLE1BQU0sRUFBRTtRQUM3QixPQUFPLElBQUksQ0FBQ3NGLElBQUksQ0FBQyxZQUFZO1VBQzNCLElBQU1DLElBQUksR0FBR2tyQyxHQUFHLENBQUNsdUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1VBQzFDLElBQUksT0FBT3ZDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUI7VUFDRjtVQUNBLElBQUl1RixJQUFJLENBQUN2RixNQUFNLENBQUMsS0FBS3BQLFNBQVMsSUFBSW9QLE1BQU0sQ0FBQ2xFLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSWtFLE1BQU0sS0FBSyxhQUFhLEVBQUU7WUFDcEYsTUFBTSxJQUFJa0IsU0FBUyxzQkFBQXpRLE1BQUEsQ0FBcUJ1UCxNQUFNLFFBQUk7VUFDcEQ7VUFDQXVGLElBQUksQ0FBQ3ZGLE1BQU0sQ0FBQyxFQUFFO1FBQ2hCLENBQUMsQ0FBQztNQUNKO0lBQUM7SUFBQSxPQUFBeXdDLEdBQUE7RUFBQSxFQTNMZW52QyxhQUFhO0VBOEwvQjtBQUNGO0FBQ0E7RUFFRTlJLFlBQVksQ0FBQ2dELEVBQUUsQ0FBQ2pLLFFBQVEsRUFBRTg5QyxvQkFBb0IsRUFBRWlCLG9CQUFvQixFQUFFLFVBQVVsNEMsS0FBSyxFQUFFO0lBQ3JGLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUNtRCxRQUFRLENBQUMsSUFBSSxDQUFDZ0osT0FBTyxDQUFDLEVBQUU7TUFDeENuTSxLQUFLLENBQUM4RSxjQUFjLEVBQUU7SUFDeEI7SUFDQSxJQUFJOUosVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO01BQ3BCO0lBQ0Y7SUFDQXE5QyxHQUFHLENBQUNsdUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUN3UCxJQUFJLEVBQUU7RUFDdEMsQ0FBQyxDQUFDOztFQUVGO0FBQ0Y7QUFDQTtFQUNFdlosWUFBWSxDQUFDZ0QsRUFBRSxDQUFDckwsTUFBTSxFQUFFby9DLG1CQUFtQixFQUFFLFlBQU07SUFBQSxJQUFBK0MsV0FBQSxHQUFBdjVDLDBCQUFBLENBQzNCNkosY0FBYyxDQUFDL0ksSUFBSSxDQUFDMjJDLDJCQUEyQixDQUFDO01BQUErQixPQUFBO0lBQUE7TUFBdEUsS0FBQUQsV0FBQSxDQUFBcjVDLENBQUEsTUFBQXM1QyxPQUFBLEdBQUFELFdBQUEsQ0FBQXA1QyxDQUFBLElBQUFDLElBQUEsR0FBd0U7UUFBQSxJQUE3RHZLLE9BQU8sR0FBQTJqRCxPQUFBLENBQUE3akQsS0FBQTtRQUNoQitoRCxHQUFHLENBQUNsdUMsbUJBQW1CLENBQUMzVCxPQUFPLENBQUM7TUFDbEM7SUFBQyxTQUFBeUssR0FBQTtNQUFBaTVDLFdBQUEsQ0FBQWg1QyxDQUFBLENBQUFELEdBQUE7SUFBQTtNQUFBaTVDLFdBQUEsQ0FBQS80QyxDQUFBO0lBQUE7RUFDSCxDQUFDLENBQUM7RUFDRjtBQUNGO0FBQ0E7O0VBRUVyRSxrQkFBa0IsQ0FBQ3U3QyxHQUFHLENBQUM7O0VBRXZCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsSUFBTW43QyxJQUFJLEdBQUcsT0FBTztFQUNwQixJQUFNc00sUUFBUSxHQUFHLFVBQVU7RUFDM0IsSUFBTUcsU0FBUyxPQUFBdFIsTUFBQSxDQUFPbVIsUUFBUSxDQUFFO0VBQ2hDLElBQU00d0MsZUFBZSxlQUFBL2hELE1BQUEsQ0FBZXNSLFNBQVMsQ0FBRTtFQUMvQyxJQUFNMHdDLGNBQWMsY0FBQWhpRCxNQUFBLENBQWNzUixTQUFTLENBQUU7RUFDN0MsSUFBTTJ3QyxhQUFhLGFBQUFqaUQsTUFBQSxDQUFhc1IsU0FBUyxDQUFFO0VBQzNDLElBQU00d0MsY0FBYyxjQUFBbGlELE1BQUEsQ0FBY3NSLFNBQVMsQ0FBRTtFQUM3QyxJQUFNNndDLFVBQVUsVUFBQW5pRCxNQUFBLENBQVVzUixTQUFTLENBQUU7RUFDckMsSUFBTTh3QyxZQUFZLFlBQUFwaUQsTUFBQSxDQUFZc1IsU0FBUyxDQUFFO0VBQ3pDLElBQU0rd0MsVUFBVSxVQUFBcmlELE1BQUEsQ0FBVXNSLFNBQVMsQ0FBRTtFQUNyQyxJQUFNZ3hDLFdBQVcsV0FBQXRpRCxNQUFBLENBQVdzUixTQUFTLENBQUU7RUFDdkMsSUFBTWl4QyxlQUFlLEdBQUcsTUFBTTtFQUM5QixJQUFNQyxlQUFlLEdBQUcsTUFBTSxDQUFDLENBQUM7RUFDaEMsSUFBTUMsZUFBZSxHQUFHLE1BQU07RUFDOUIsSUFBTUMsa0JBQWtCLEdBQUcsU0FBUztFQUNwQyxJQUFNMXlDLFdBQVcsR0FBRztJQUNsQjJrQyxTQUFTLEVBQUUsU0FBUztJQUNwQmdPLFFBQVEsRUFBRSxTQUFTO0lBQ25CN04sS0FBSyxFQUFFO0VBQ1QsQ0FBQztFQUNELElBQU1obEMsT0FBTyxHQUFHO0lBQ2Q2a0MsU0FBUyxFQUFFLElBQUk7SUFDZmdPLFFBQVEsRUFBRSxJQUFJO0lBQ2Q3TixLQUFLLEVBQUU7RUFDVCxDQUFDOztFQUVEO0FBQ0Y7QUFDQTtFQUZFLElBSU04TixLQUFLLDBCQUFBQyxnQkFBQTtJQUFBcGxELFNBQUEsQ0FBQW1sRCxLQUFBLEVBQUFDLGdCQUFBO0lBQUEsSUFBQUMsUUFBQSxHQUFBbmxELFlBQUEsQ0FBQWlsRCxLQUFBO0lBQ1QsU0FBQUEsTUFBWXprRCxPQUFPLEVBQUVvUixNQUFNLEVBQUU7TUFBQSxJQUFBd3pDLE9BQUE7TUFBQW5sRCxlQUFBLE9BQUFnbEQsS0FBQTtNQUMzQkcsT0FBQSxHQUFBRCxRQUFBLENBQUF2aUQsSUFBQSxPQUFNcEMsT0FBTyxFQUFFb1IsTUFBTTtNQUNyQnd6QyxPQUFBLENBQUt6TixRQUFRLEdBQUcsSUFBSTtNQUNwQnlOLE9BQUEsQ0FBS0Msb0JBQW9CLEdBQUcsS0FBSztNQUNqQ0QsT0FBQSxDQUFLRSx1QkFBdUIsR0FBRyxLQUFLO01BQ3BDRixPQUFBLENBQUtuTixhQUFhLEVBQUU7TUFBQyxPQUFBbU4sT0FBQTtJQUN2Qjs7SUFFQTtJQUFBaGxELFlBQUEsQ0FBQTZrRCxLQUFBO01BQUE1a0QsR0FBQTtNQUFBQyxLQUFBO01BV0E7TUFDQSxTQUFBcWpCLEtBQUEsRUFBTztRQUFBLElBQUE0aEMsT0FBQTtRQUNMLElBQU12aUIsU0FBUyxHQUFHNTRCLFlBQVksQ0FBQ2dFLE9BQU8sQ0FBQyxJQUFJLENBQUNrRixRQUFRLEVBQUVveEMsVUFBVSxDQUFDO1FBQ2pFLElBQUkxaEIsU0FBUyxDQUFDeDBCLGdCQUFnQixFQUFFO1VBQzlCO1FBQ0Y7UUFDQSxJQUFJLENBQUNnM0MsYUFBYSxFQUFFO1FBQ3BCLElBQUksSUFBSSxDQUFDanlDLE9BQU8sQ0FBQ3lqQyxTQUFTLEVBQUU7VUFDMUIsSUFBSSxDQUFDMWpDLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ2lWLEdBQUcsQ0FBQ3dxQyxlQUFlLENBQUM7UUFDOUM7UUFDQSxJQUFNdGdDLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7VUFDckJpaEMsT0FBSSxDQUFDanlDLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ2lMLE1BQU0sQ0FBQzIwQyxrQkFBa0IsQ0FBQztVQUNsRDM2QyxZQUFZLENBQUNnRSxPQUFPLENBQUNtM0MsT0FBSSxDQUFDanlDLFFBQVEsRUFBRXF4QyxXQUFXLENBQUM7VUFDaERZLE9BQUksQ0FBQ0Usa0JBQWtCLEVBQUU7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQ255QyxRQUFRLENBQUNuTyxTQUFTLENBQUNpTCxNQUFNLENBQUN5MEMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNqRDkrQyxNQUFNLENBQUMsSUFBSSxDQUFDdU4sUUFBUSxDQUFDO1FBQ3JCLElBQUksQ0FBQ0EsUUFBUSxDQUFDbk8sU0FBUyxDQUFDaVYsR0FBRyxDQUFDMHFDLGVBQWUsRUFBRUMsa0JBQWtCLENBQUM7UUFDaEUsSUFBSSxDQUFDL3dDLGNBQWMsQ0FBQ3NRLFFBQVEsRUFBRSxJQUFJLENBQUNoUixRQUFRLEVBQUUsSUFBSSxDQUFDQyxPQUFPLENBQUN5akMsU0FBUyxDQUFDO01BQ3RFO0lBQUM7TUFBQTMyQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBb2pCLEtBQUEsRUFBTztRQUFBLElBQUFnaUMsT0FBQTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUNDLE9BQU8sRUFBRSxFQUFFO1VBQ25CO1FBQ0Y7UUFDQSxJQUFNcGlCLFNBQVMsR0FBR241QixZQUFZLENBQUNnRSxPQUFPLENBQUMsSUFBSSxDQUFDa0YsUUFBUSxFQUFFa3hDLFVBQVUsQ0FBQztRQUNqRSxJQUFJamhCLFNBQVMsQ0FBQy8wQixnQkFBZ0IsRUFBRTtVQUM5QjtRQUNGO1FBQ0EsSUFBTThWLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7VUFDckJvaEMsT0FBSSxDQUFDcHlDLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ2lWLEdBQUcsQ0FBQ3lxQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1VBQzlDYSxPQUFJLENBQUNweUMsUUFBUSxDQUFDbk8sU0FBUyxDQUFDaUwsTUFBTSxDQUFDMjBDLGtCQUFrQixFQUFFRCxlQUFlLENBQUM7VUFDbkUxNkMsWUFBWSxDQUFDZ0UsT0FBTyxDQUFDczNDLE9BQUksQ0FBQ3B5QyxRQUFRLEVBQUVteEMsWUFBWSxDQUFDO1FBQ25ELENBQUM7UUFDRCxJQUFJLENBQUNueEMsUUFBUSxDQUFDbk8sU0FBUyxDQUFDaVYsR0FBRyxDQUFDMnFDLGtCQUFrQixDQUFDO1FBQy9DLElBQUksQ0FBQy93QyxjQUFjLENBQUNzUSxRQUFRLEVBQUUsSUFBSSxDQUFDaFIsUUFBUSxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDeWpDLFNBQVMsQ0FBQztNQUN0RTtJQUFDO01BQUEzMkMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW9ULFFBQUEsRUFBVTtRQUNSLElBQUksQ0FBQzh4QyxhQUFhLEVBQUU7UUFDcEIsSUFBSSxJQUFJLENBQUNHLE9BQU8sRUFBRSxFQUFFO1VBQ2xCLElBQUksQ0FBQ3J5QyxRQUFRLENBQUNuTyxTQUFTLENBQUNpTCxNQUFNLENBQUMwMEMsZUFBZSxDQUFDO1FBQ2pEO1FBQ0E5bEMsSUFBQSxDQUFBQyxlQUFBLENBQUFnbUMsS0FBQSxDQUFBdmlELFNBQUEsb0JBQUFFLElBQUE7TUFDRjtJQUFDO01BQUF2QyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBcWxELFFBQUEsRUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDcnlDLFFBQVEsQ0FBQ25PLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDMC9DLGVBQWUsQ0FBQztNQUMxRDs7TUFFQTtJQUFBO01BQUF6a0QsR0FBQTtNQUFBQyxLQUFBLEVBRUEsU0FBQW1sRCxtQkFBQSxFQUFxQjtRQUFBLElBQUFHLE9BQUE7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQ3J5QyxPQUFPLENBQUN5eEMsUUFBUSxFQUFFO1VBQzFCO1FBQ0Y7UUFDQSxJQUFJLElBQUksQ0FBQ0ssb0JBQW9CLElBQUksSUFBSSxDQUFDQyx1QkFBdUIsRUFBRTtVQUM3RDtRQUNGO1FBQ0EsSUFBSSxDQUFDM04sUUFBUSxHQUFHcHZDLFVBQVUsQ0FBQyxZQUFNO1VBQy9CcTlDLE9BQUksQ0FBQ2xpQyxJQUFJLEVBQUU7UUFDYixDQUFDLEVBQUUsSUFBSSxDQUFDblEsT0FBTyxDQUFDNGpDLEtBQUssQ0FBQztNQUN4QjtJQUFDO01BQUE5MkMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXVsRCxlQUFlNzdDLEtBQUssRUFBRTg3QyxhQUFhLEVBQUU7UUFDbkMsUUFBUTk3QyxLQUFLLENBQUNNLElBQUk7VUFDaEIsS0FBSyxXQUFXO1VBQ2hCLEtBQUssVUFBVTtZQUNiO2NBQ0UsSUFBSSxDQUFDKzZDLG9CQUFvQixHQUFHUyxhQUFhO2NBQ3pDO1lBQ0Y7VUFDRixLQUFLLFNBQVM7VUFDZCxLQUFLLFVBQVU7WUFDYjtjQUNFLElBQUksQ0FBQ1IsdUJBQXVCLEdBQUdRLGFBQWE7Y0FDNUM7WUFDRjtRQUFDO1FBRUwsSUFBSUEsYUFBYSxFQUFFO1VBQ2pCLElBQUksQ0FBQ04sYUFBYSxFQUFFO1VBQ3BCO1FBQ0Y7UUFDQSxJQUFNbmxDLFdBQVcsR0FBR3JXLEtBQUssQ0FBQ3NDLGFBQWE7UUFDdkMsSUFBSSxJQUFJLENBQUNnSCxRQUFRLEtBQUsrTSxXQUFXLElBQUksSUFBSSxDQUFDL00sUUFBUSxDQUFDbE8sUUFBUSxDQUFDaWIsV0FBVyxDQUFDLEVBQUU7VUFDeEU7UUFDRjtRQUNBLElBQUksQ0FBQ29sQyxrQkFBa0IsRUFBRTtNQUMzQjtJQUFDO01BQUFwbEQsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTIzQyxjQUFBLEVBQWdCO1FBQUEsSUFBQThOLE9BQUE7UUFDZDM3QyxZQUFZLENBQUNnRCxFQUFFLENBQUMsSUFBSSxDQUFDa0csUUFBUSxFQUFFOHdDLGVBQWUsRUFBRSxVQUFBcDZDLEtBQUs7VUFBQSxPQUFJKzdDLE9BQUksQ0FBQ0YsY0FBYyxDQUFDNzdDLEtBQUssRUFBRSxJQUFJLENBQUM7UUFBQSxFQUFDO1FBQzFGSSxZQUFZLENBQUNnRCxFQUFFLENBQUMsSUFBSSxDQUFDa0csUUFBUSxFQUFFK3dDLGNBQWMsRUFBRSxVQUFBcjZDLEtBQUs7VUFBQSxPQUFJKzdDLE9BQUksQ0FBQ0YsY0FBYyxDQUFDNzdDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFBQSxFQUFDO1FBQzFGSSxZQUFZLENBQUNnRCxFQUFFLENBQUMsSUFBSSxDQUFDa0csUUFBUSxFQUFFZ3hDLGFBQWEsRUFBRSxVQUFBdDZDLEtBQUs7VUFBQSxPQUFJKzdDLE9BQUksQ0FBQ0YsY0FBYyxDQUFDNzdDLEtBQUssRUFBRSxJQUFJLENBQUM7UUFBQSxFQUFDO1FBQ3hGSSxZQUFZLENBQUNnRCxFQUFFLENBQUMsSUFBSSxDQUFDa0csUUFBUSxFQUFFaXhDLGNBQWMsRUFBRSxVQUFBdjZDLEtBQUs7VUFBQSxPQUFJKzdDLE9BQUksQ0FBQ0YsY0FBYyxDQUFDNzdDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFBQSxFQUFDO01BQzVGO0lBQUM7TUFBQTNKLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFrbEQsY0FBQSxFQUFnQjtRQUNkN2xDLFlBQVksQ0FBQyxJQUFJLENBQUNnNEIsUUFBUSxDQUFDO1FBQzNCLElBQUksQ0FBQ0EsUUFBUSxHQUFHLElBQUk7TUFDdEI7O01BRUE7SUFBQTtNQUFBdDNDLEdBQUE7TUFBQW1QLEdBQUEsRUExR0EsU0FBQUEsSUFBQSxFQUFxQjtRQUNuQixPQUFPMkMsT0FBTztNQUNoQjtJQUFDO01BQUE5UixHQUFBO01BQUFtUCxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUF5QjtRQUN2QixPQUFPNkMsV0FBVztNQUNwQjtJQUFDO01BQUFoUyxHQUFBO01BQUFtUCxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUFrQjtRQUNoQixPQUFPdEksSUFBSTtNQUNiO0lBQUM7TUFBQTdHLEdBQUE7TUFBQUMsS0FBQSxFQW1HRCxTQUFBK0csZ0JBQXVCdUssTUFBTSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxDQUFDc0YsSUFBSSxDQUFDLFlBQVk7VUFDM0IsSUFBTUMsSUFBSSxHQUFHOHRDLEtBQUssQ0FBQzl3QyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUV2QyxNQUFNLENBQUM7VUFDcEQsSUFBSSxPQUFPQSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCLElBQUksT0FBT3VGLElBQUksQ0FBQ3ZGLE1BQU0sQ0FBQyxLQUFLLFdBQVcsRUFBRTtjQUN2QyxNQUFNLElBQUlrQixTQUFTLHNCQUFBelEsTUFBQSxDQUFxQnVQLE1BQU0sUUFBSTtZQUNwRDtZQUNBdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO1VBQ3BCO1FBQ0YsQ0FBQyxDQUFDO01BQ0o7SUFBQztJQUFBLE9BQUFxekMsS0FBQTtFQUFBLEVBL0hpQi94QyxhQUFhO0VBa0lqQztBQUNGO0FBQ0E7RUFFRTZDLG9CQUFvQixDQUFDa3ZDLEtBQUssQ0FBQzs7RUFFM0I7QUFDRjtBQUNBOztFQUVFbitDLGtCQUFrQixDQUFDbStDLEtBQUssQ0FBQzs7RUFFekI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsSUFBTWUsU0FBUyxHQUFHO0lBQ2hCcnZDLEtBQUssRUFBTEEsS0FBSztJQUNMZ0IsTUFBTSxFQUFOQSxNQUFNO0lBQ053RixRQUFRLEVBQVJBLFFBQVE7SUFDUndGLFFBQVEsRUFBUkEsUUFBUTtJQUNSNGYsUUFBUSxFQUFSQSxRQUFRO0lBQ1I0SSxLQUFLLEVBQUxBLEtBQUs7SUFDTHlELFNBQVMsRUFBVEEsU0FBUztJQUNUNk0sT0FBTyxFQUFQQSxPQUFPO0lBQ1A0QixTQUFTLEVBQVRBLFNBQVM7SUFDVGdGLEdBQUcsRUFBSEEsR0FBRztJQUNINEMsS0FBSyxFQUFMQSxLQUFLO0lBQ0wzTixPQUFPLEVBQVBBO0VBQ0YsQ0FBQztFQUVELE9BQU8wTyxTQUFTO0FBRWxCLENBQUMsQ0FBRTs7Ozs7Ozs7Ozs7O0FDcHBNSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYm9vdHN0cmFwLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG4vLyBpbXBvcnQgYm9vdHN0cmFwIGpzXG5pbXBvcnQgJy4vanMvYm9vdHN0cmFwLmJ1bmRsZSc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8qIVxuICAqIEJvb3RzdHJhcCB2NS4zLjAtYWxwaGEyIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICAqIENvcHlyaWdodCAyMDExLTIwMjMgVGhlIEJvb3RzdHJhcCBBdXRob3JzIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvZ3JhcGhzL2NvbnRyaWJ1dG9ycylcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLmJvb3RzdHJhcCA9IGZhY3RvcnkoKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL2luZGV4LmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBNQVhfVUlEID0gMTAwMDAwMDtcbiAgY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwO1xuICBjb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJztcblxuICAvKipcbiAgICogUHJvcGVybHkgZXNjYXBlIElEcyBzZWxlY3RvcnMgdG8gaGFuZGxlIHdlaXJkIElEc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGNvbnN0IHBhcnNlU2VsZWN0b3IgPSBzZWxlY3RvciA9PiB7XG4gICAgaWYgKHNlbGVjdG9yICYmIHdpbmRvdy5DU1MgJiYgd2luZG93LkNTUy5lc2NhcGUpIHtcbiAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgbmVlZHMgZXNjYXBpbmcgdG8gaGFuZGxlIElEcyAoaHRtbDUrKSBjb250YWluaW5nIGZvciBpbnN0YW5jZSAvXG4gICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoLyMoW15cXHNcIiMnXSspL2csIChtYXRjaCwgaWQpID0+IGAjJHtDU1MuZXNjYXBlKGlkKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9O1xuXG4gIC8vIFNob3V0LW91dCBBbmd1cyBDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuICBjb25zdCB0b1R5cGUgPSBvYmplY3QgPT4ge1xuICAgIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBgJHtvYmplY3R9YDtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgVXRpbCBBUElcbiAgICovXG5cbiAgY29uc3QgZ2V0VUlEID0gcHJlZml4ID0+IHtcbiAgICBkbyB7XG4gICAgICBwcmVmaXggKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUFYX1VJRCk7XG4gICAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSk7XG4gICAgcmV0dXJuIHByZWZpeDtcbiAgfTtcbiAgY29uc3QgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gICAgbGV0IHtcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHRyYW5zaXRpb25EZWxheVxuICAgIH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICBjb25zdCBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpO1xuXG4gICAgLy8gUmV0dXJuIDAgaWYgZWxlbWVudCBvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGlzIG5vdCBmb3VuZFxuICAgIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF07XG4gICAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF07XG4gICAgcmV0dXJuIChOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUjtcbiAgfTtcbiAgY29uc3QgdHJpZ2dlclRyYW5zaXRpb25FbmQgPSBlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFRSQU5TSVRJT05fRU5EKSk7XG4gIH07XG4gIGNvbnN0IGlzRWxlbWVudCQxID0gb2JqZWN0ID0+IHtcbiAgICBpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iamVjdC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvYmplY3QgPSBvYmplY3RbMF07XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0Lm5vZGVUeXBlICE9PSAndW5kZWZpbmVkJztcbiAgfTtcbiAgY29uc3QgZ2V0RWxlbWVudCA9IG9iamVjdCA9PiB7XG4gICAgLy8gaXQncyBhIGpRdWVyeSBvYmplY3Qgb3IgYSBub2RlIGVsZW1lbnRcbiAgICBpZiAoaXNFbGVtZW50JDEob2JqZWN0KSkge1xuICAgICAgcmV0dXJuIG9iamVjdC5qcXVlcnkgPyBvYmplY3RbMF0gOiBvYmplY3Q7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnc3RyaW5nJyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyc2VTZWxlY3RvcihvYmplY3QpKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIGNvbnN0IGlzVmlzaWJsZSA9IGVsZW1lbnQgPT4ge1xuICAgIGlmICghaXNFbGVtZW50JDEoZWxlbWVudCkgfHwgZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50SXNWaXNpYmxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCd2aXNpYmlsaXR5JykgPT09ICd2aXNpYmxlJztcbiAgICAvLyBIYW5kbGUgYGRldGFpbHNgIGVsZW1lbnQgYXMgaXRzIGNvbnRlbnQgbWF5IGZhbHNpZSBhcHBlYXIgdmlzaWJsZSB3aGVuIGl0IGlzIGNsb3NlZFxuICAgIGNvbnN0IGNsb3NlZERldGFpbHMgPSBlbGVtZW50LmNsb3Nlc3QoJ2RldGFpbHM6bm90KFtvcGVuXSknKTtcbiAgICBpZiAoIWNsb3NlZERldGFpbHMpIHtcbiAgICAgIHJldHVybiBlbGVtZW50SXNWaXNpYmxlO1xuICAgIH1cbiAgICBpZiAoY2xvc2VkRGV0YWlscyAhPT0gZWxlbWVudCkge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGVsZW1lbnQuY2xvc2VzdCgnc3VtbWFyeScpO1xuICAgICAgaWYgKHN1bW1hcnkgJiYgc3VtbWFyeS5wYXJlbnROb2RlICE9PSBjbG9zZWREZXRhaWxzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChzdW1tYXJ5ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRJc1Zpc2libGU7XG4gIH07XG4gIGNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50ID0+IHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGVsZW1lbnQuZGlzYWJsZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSAnZmFsc2UnO1xuICB9O1xuICBjb25zdCBmaW5kU2hhZG93Um9vdCA9IGVsZW1lbnQgPT4ge1xuICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xuICAgICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGw7XG4gICAgfVxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBmaW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpO1xuICB9O1xuICBjb25zdCBub29wID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIFRyaWNrIHRvIHJlc3RhcnQgYW4gZWxlbWVudCdzIGFuaW1hdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LmNoYXJpc3RoZW8uaW8vYmxvZy8yMDIxLzAyL3Jlc3RhcnQtYS1jc3MtYW5pbWF0aW9uLXdpdGgtamF2YXNjcmlwdC8jcmVzdGFydGluZy1hLWNzcy1hbmltYXRpb25cbiAgICovXG4gIGNvbnN0IHJlZmxvdyA9IGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQub2Zmc2V0SGVpZ2h0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICB9O1xuXG4gIGNvbnN0IGdldGpRdWVyeSA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtbm8tanF1ZXJ5JykpIHtcbiAgICAgIHJldHVybiB3aW5kb3cualF1ZXJ5O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgY29uc3QgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcyA9IFtdO1xuICBjb25zdCBvbkRPTUNvbnRlbnRMb2FkZWQgPSBjYWxsYmFjayA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgLy8gYWRkIGxpc3RlbmVyIG9uIHRoZSBmaXJzdCBjYWxsIHdoZW4gdGhlIGRvY3VtZW50IGlzIGluIGxvYWRpbmcgc3RhdGVcbiAgICAgIGlmICghRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBpc1JUTCA9ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPT09ICdydGwnO1xuICBjb25zdCBkZWZpbmVKUXVlcnlQbHVnaW4gPSBwbHVnaW4gPT4ge1xuICAgIG9uRE9NQ29udGVudExvYWRlZCgoKSA9PiB7XG4gICAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KCk7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICgkKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBwbHVnaW4uTkFNRTtcbiAgICAgICAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltuYW1lXTtcbiAgICAgICAgJC5mbltuYW1lXSA9IHBsdWdpbi5qUXVlcnlJbnRlcmZhY2U7XG4gICAgICAgICQuZm5bbmFtZV0uQ29uc3RydWN0b3IgPSBwbHVnaW47XG4gICAgICAgICQuZm5bbmFtZV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgICAgICAgICAkLmZuW25hbWVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgICAgIHJldHVybiBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBleGVjdXRlID0gKHBvc3NpYmxlQ2FsbGJhY2ssIGFyZ3MgPSBbXSwgZGVmYXVsdFZhbHVlID0gcG9zc2libGVDYWxsYmFjaykgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgcG9zc2libGVDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IHBvc3NpYmxlQ2FsbGJhY2soLi4uYXJncykgOiBkZWZhdWx0VmFsdWU7XG4gIH07XG4gIGNvbnN0IGV4ZWN1dGVBZnRlclRyYW5zaXRpb24gPSAoY2FsbGJhY2ssIHRyYW5zaXRpb25FbGVtZW50LCB3YWl0Rm9yVHJhbnNpdGlvbiA9IHRydWUpID0+IHtcbiAgICBpZiAoIXdhaXRGb3JUcmFuc2l0aW9uKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZHVyYXRpb25QYWRkaW5nID0gNTtcbiAgICBjb25zdCBlbXVsYXRlZER1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodHJhbnNpdGlvbkVsZW1lbnQpICsgZHVyYXRpb25QYWRkaW5nO1xuICAgIGxldCBjYWxsZWQgPSBmYWxzZTtcbiAgICBjb25zdCBoYW5kbGVyID0gKHtcbiAgICAgIHRhcmdldFxuICAgIH0pID0+IHtcbiAgICAgIGlmICh0YXJnZXQgIT09IHRyYW5zaXRpb25FbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICB0cmFuc2l0aW9uRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBoYW5kbGVyKTtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgIH07XG4gICAgdHJhbnNpdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSwgZW11bGF0ZWREdXJhdGlvbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgcHJldmlvdXMvbmV4dCBlbGVtZW50IG9mIGEgbGlzdC5cbiAgICpcbiAgICogQHBhcmFtIHthcnJheX0gbGlzdCAgICBUaGUgbGlzdCBvZiBlbGVtZW50c1xuICAgKiBAcGFyYW0gYWN0aXZlRWxlbWVudCAgIFRoZSBhY3RpdmUgZWxlbWVudFxuICAgKiBAcGFyYW0gc2hvdWxkR2V0TmV4dCAgIENob29zZSB0byBnZXQgbmV4dCBvciBwcmV2aW91cyBlbGVtZW50XG4gICAqIEBwYXJhbSBpc0N5Y2xlQWxsb3dlZFxuICAgKiBAcmV0dXJuIHtFbGVtZW50fGVsZW19IFRoZSBwcm9wZXIgZWxlbWVudFxuICAgKi9cbiAgY29uc3QgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQgPSAobGlzdCwgYWN0aXZlRWxlbWVudCwgc2hvdWxkR2V0TmV4dCwgaXNDeWNsZUFsbG93ZWQpID0+IHtcbiAgICBjb25zdCBsaXN0TGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gICAgbGV0IGluZGV4ID0gbGlzdC5pbmRleE9mKGFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgLy8gaWYgdGhlIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGxpc3QgcmV0dXJuIGFuIGVsZW1lbnRcbiAgICAvLyBkZXBlbmRpbmcgb24gdGhlIGRpcmVjdGlvbiBhbmQgaWYgY3ljbGUgaXMgYWxsb3dlZFxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiAhc2hvdWxkR2V0TmV4dCAmJiBpc0N5Y2xlQWxsb3dlZCA/IGxpc3RbbGlzdExlbmd0aCAtIDFdIDogbGlzdFswXTtcbiAgICB9XG4gICAgaW5kZXggKz0gc2hvdWxkR2V0TmV4dCA/IDEgOiAtMTtcbiAgICBpZiAoaXNDeWNsZUFsbG93ZWQpIHtcbiAgICAgIGluZGV4ID0gKGluZGV4ICsgbGlzdExlbmd0aCkgJSBsaXN0TGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdFtNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgbGlzdExlbmd0aCAtIDEpKV07XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBkb20vZXZlbnQtaGFuZGxlci5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBuYW1lc3BhY2VSZWdleCA9IC9bXi5dKig/PVxcLi4qKVxcLnwuKi87XG4gIGNvbnN0IHN0cmlwTmFtZVJlZ2V4ID0gL1xcLi4qLztcbiAgY29uc3Qgc3RyaXBVaWRSZWdleCA9IC86OlxcZCskLztcbiAgY29uc3QgZXZlbnRSZWdpc3RyeSA9IHt9OyAvLyBFdmVudHMgc3RvcmFnZVxuICBsZXQgdWlkRXZlbnQgPSAxO1xuICBjb25zdCBjdXN0b21FdmVudHMgPSB7XG4gICAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gICAgbW91c2VsZWF2ZTogJ21vdXNlb3V0J1xuICB9O1xuICBjb25zdCBuYXRpdmVFdmVudHMgPSBuZXcgU2V0KFsnY2xpY2snLCAnZGJsY2xpY2snLCAnbW91c2V1cCcsICdtb3VzZWRvd24nLCAnY29udGV4dG1lbnUnLCAnbW91c2V3aGVlbCcsICdET01Nb3VzZVNjcm9sbCcsICdtb3VzZW92ZXInLCAnbW91c2VvdXQnLCAnbW91c2Vtb3ZlJywgJ3NlbGVjdHN0YXJ0JywgJ3NlbGVjdGVuZCcsICdrZXlkb3duJywgJ2tleXByZXNzJywgJ2tleXVwJywgJ29yaWVudGF0aW9uY2hhbmdlJywgJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJywgJ3RvdWNoY2FuY2VsJywgJ3BvaW50ZXJkb3duJywgJ3BvaW50ZXJtb3ZlJywgJ3BvaW50ZXJ1cCcsICdwb2ludGVybGVhdmUnLCAncG9pbnRlcmNhbmNlbCcsICdnZXN0dXJlc3RhcnQnLCAnZ2VzdHVyZWNoYW5nZScsICdnZXN0dXJlZW5kJywgJ2ZvY3VzJywgJ2JsdXInLCAnY2hhbmdlJywgJ3Jlc2V0JywgJ3NlbGVjdCcsICdzdWJtaXQnLCAnZm9jdXNpbicsICdmb2N1c291dCcsICdsb2FkJywgJ3VubG9hZCcsICdiZWZvcmV1bmxvYWQnLCAncmVzaXplJywgJ21vdmUnLCAnRE9NQ29udGVudExvYWRlZCcsICdyZWFkeXN0YXRlY2hhbmdlJywgJ2Vycm9yJywgJ2Fib3J0JywgJ3Njcm9sbCddKTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBtZXRob2RzXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG1ha2VFdmVudFVpZChlbGVtZW50LCB1aWQpIHtcbiAgICByZXR1cm4gdWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gIHx8IGVsZW1lbnQudWlkRXZlbnQgfHwgdWlkRXZlbnQrKztcbiAgfVxuICBmdW5jdGlvbiBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpIHtcbiAgICBjb25zdCB1aWQgPSBtYWtlRXZlbnRVaWQoZWxlbWVudCk7XG4gICAgZWxlbWVudC51aWRFdmVudCA9IHVpZDtcbiAgICBldmVudFJlZ2lzdHJ5W3VpZF0gPSBldmVudFJlZ2lzdHJ5W3VpZF0gfHwge307XG4gICAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXTtcbiAgfVxuICBmdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGh5ZHJhdGVPYmooZXZlbnQsIHtcbiAgICAgICAgZGVsZWdhdGVUYXJnZXQ6IGVsZW1lbnRcbiAgICAgIH0pO1xuICAgICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIFtldmVudF0pO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgc2VsZWN0b3IsIGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgIGZvciAobGV0IHtcbiAgICAgICAgdGFyZ2V0XG4gICAgICB9ID0gZXZlbnQ7IHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXM7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGZvciAoY29uc3QgZG9tRWxlbWVudCBvZiBkb21FbGVtZW50cykge1xuICAgICAgICAgIGlmIChkb21FbGVtZW50ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoeWRyYXRlT2JqKGV2ZW50LCB7XG4gICAgICAgICAgICBkZWxlZ2F0ZVRhcmdldDogdGFyZ2V0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIHNlbGVjdG9yLCBmbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0YXJnZXQsIFtldmVudF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGNhbGxhYmxlLCBkZWxlZ2F0aW9uU2VsZWN0b3IgPSBudWxsKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZXZlbnRzKS5maW5kKGV2ZW50ID0+IGV2ZW50LmNhbGxhYmxlID09PSBjYWxsYWJsZSAmJiBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IgPT09IGRlbGVnYXRpb25TZWxlY3Rvcik7XG4gIH1cbiAgZnVuY3Rpb24gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgY29uc3QgaXNEZWxlZ2F0ZWQgPSB0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZyc7XG4gICAgLy8gdG9kbzogdG9vbHRpcCBwYXNzZXMgYGZhbHNlYCBpbnN0ZWFkIG9mIHNlbGVjdG9yLCBzbyB3ZSBuZWVkIHRvIGNoZWNrXG4gICAgY29uc3QgY2FsbGFibGUgPSBpc0RlbGVnYXRlZCA/IGRlbGVnYXRpb25GdW5jdGlvbiA6IGhhbmRsZXIgfHwgZGVsZWdhdGlvbkZ1bmN0aW9uO1xuICAgIGxldCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQob3JpZ2luYWxUeXBlRXZlbnQpO1xuICAgIGlmICghbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpKSB7XG4gICAgICB0eXBlRXZlbnQgPSBvcmlnaW5hbFR5cGVFdmVudDtcbiAgICB9XG4gICAgcmV0dXJuIFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF07XG4gIH1cbiAgZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCBvbmVPZmYpIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbik7XG5cbiAgICAvLyBpbiBjYXNlIG9mIG1vdXNlZW50ZXIgb3IgbW91c2VsZWF2ZSB3cmFwIHRoZSBoYW5kbGVyIHdpdGhpbiBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGZvciBpdHMgRE9NIHBvc2l0aW9uXG4gICAgLy8gdGhpcyBwcmV2ZW50cyB0aGUgaGFuZGxlciBmcm9tIGJlaW5nIGRpc3BhdGNoZWQgdGhlIHNhbWUgd2F5IGFzIG1vdXNlb3ZlciBvciBtb3VzZW91dCBkb2VzXG4gICAgaWYgKG9yaWdpbmFsVHlwZUV2ZW50IGluIGN1c3RvbUV2ZW50cykge1xuICAgICAgY29uc3Qgd3JhcEZ1bmN0aW9uID0gZm4gPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmICFldmVudC5kZWxlZ2F0ZVRhcmdldC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICBjYWxsYWJsZSA9IHdyYXBGdW5jdGlvbihjYWxsYWJsZSk7XG4gICAgfVxuICAgIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudCk7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBldmVudHNbdHlwZUV2ZW50XSB8fCAoZXZlbnRzW3R5cGVFdmVudF0gPSB7fSk7XG4gICAgY29uc3QgcHJldmlvdXNGdW5jdGlvbiA9IGZpbmRIYW5kbGVyKGhhbmRsZXJzLCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbCk7XG4gICAgaWYgKHByZXZpb3VzRnVuY3Rpb24pIHtcbiAgICAgIHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmID0gcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgJiYgb25lT2ZmO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1aWQgPSBtYWtlRXZlbnRVaWQoY2FsbGFibGUsIG9yaWdpbmFsVHlwZUV2ZW50LnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSk7XG4gICAgY29uc3QgZm4gPSBpc0RlbGVnYXRlZCA/IGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGNhbGxhYmxlKSA6IGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgY2FsbGFibGUpO1xuICAgIGZuLmRlbGVnYXRpb25TZWxlY3RvciA9IGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGw7XG4gICAgZm4uY2FsbGFibGUgPSBjYWxsYWJsZTtcbiAgICBmbi5vbmVPZmYgPSBvbmVPZmY7XG4gICAgZm4udWlkRXZlbnQgPSB1aWQ7XG4gICAgaGFuZGxlcnNbdWlkXSA9IGZuO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBpc0RlbGVnYXRlZCk7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gICAgY29uc3QgZm4gPSBmaW5kSGFuZGxlcihldmVudHNbdHlwZUV2ZW50XSwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKTtcbiAgICBpZiAoIWZuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBCb29sZWFuKGRlbGVnYXRpb25TZWxlY3RvcikpO1xuICAgIGRlbGV0ZSBldmVudHNbdHlwZUV2ZW50XVtmbi51aWRFdmVudF07XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBuYW1lc3BhY2UpIHtcbiAgICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9O1xuICAgIGZvciAoY29uc3QgW2hhbmRsZXJLZXksIGV2ZW50XSBvZiBPYmplY3QuZW50cmllcyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICAgIGlmIChoYW5kbGVyS2V5LmluY2x1ZGVzKG5hbWVzcGFjZSkpIHtcbiAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQuY2FsbGFibGUsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdldFR5cGVFdmVudChldmVudCkge1xuICAgIC8vIGFsbG93IHRvIGdldCB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIG5hbWVzcGFjZWQgZXZlbnRzICgnY2xpY2suYnMuYnV0dG9uJyAtLT4gJ2NsaWNrJylcbiAgICBldmVudCA9IGV2ZW50LnJlcGxhY2Uoc3RyaXBOYW1lUmVnZXgsICcnKTtcbiAgICByZXR1cm4gY3VzdG9tRXZlbnRzW2V2ZW50XSB8fCBldmVudDtcbiAgfVxuICBjb25zdCBFdmVudEhhbmRsZXIgPSB7XG4gICAgb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCBmYWxzZSk7XG4gICAgfSxcbiAgICBvbmUoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCB0cnVlKTtcbiAgICB9LFxuICAgIG9mZihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKTtcbiAgICAgIGNvbnN0IGluTmFtZXNwYWNlID0gdHlwZUV2ZW50ICE9PSBvcmlnaW5hbFR5cGVFdmVudDtcbiAgICAgIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudCk7XG4gICAgICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9O1xuICAgICAgY29uc3QgaXNOYW1lc3BhY2UgPSBvcmlnaW5hbFR5cGVFdmVudC5zdGFydHNXaXRoKCcuJyk7XG4gICAgICBpZiAodHlwZW9mIGNhbGxhYmxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBTaW1wbGVzdCBjYXNlOiBoYW5kbGVyIGlzIHBhc3NlZCwgcmVtb3ZlIHRoYXQgbGlzdGVuZXIgT05MWS5cbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGlzTmFtZXNwYWNlKSB7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudEV2ZW50IG9mIE9iamVjdC5rZXlzKGV2ZW50cykpIHtcbiAgICAgICAgICByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCBlbGVtZW50RXZlbnQsIG9yaWdpbmFsVHlwZUV2ZW50LnNsaWNlKDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBba2V5SGFuZGxlcnMsIGV2ZW50XSBvZiBPYmplY3QuZW50cmllcyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlcktleSA9IGtleUhhbmRsZXJzLnJlcGxhY2Uoc3RyaXBVaWRSZWdleCwgJycpO1xuICAgICAgICBpZiAoIWluTmFtZXNwYWNlIHx8IG9yaWdpbmFsVHlwZUV2ZW50LmluY2x1ZGVzKGhhbmRsZXJLZXkpKSB7XG4gICAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQuY2FsbGFibGUsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQsIGFyZ3MpIHtcbiAgICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3QgJCA9IGdldGpRdWVyeSgpO1xuICAgICAgY29uc3QgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KGV2ZW50KTtcbiAgICAgIGNvbnN0IGluTmFtZXNwYWNlID0gZXZlbnQgIT09IHR5cGVFdmVudDtcbiAgICAgIGxldCBqUXVlcnlFdmVudCA9IG51bGw7XG4gICAgICBsZXQgYnViYmxlcyA9IHRydWU7XG4gICAgICBsZXQgbmF0aXZlRGlzcGF0Y2ggPSB0cnVlO1xuICAgICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgICAgIGlmIChpbk5hbWVzcGFjZSAmJiAkKSB7XG4gICAgICAgIGpRdWVyeUV2ZW50ID0gJC5FdmVudChldmVudCwgYXJncyk7XG4gICAgICAgICQoZWxlbWVudCkudHJpZ2dlcihqUXVlcnlFdmVudCk7XG4gICAgICAgIGJ1YmJsZXMgPSAhalF1ZXJ5RXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKTtcbiAgICAgICAgbmF0aXZlRGlzcGF0Y2ggPSAhalF1ZXJ5RXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKTtcbiAgICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IGpRdWVyeUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xuICAgICAgfVxuICAgICAgbGV0IGV2dCA9IG5ldyBFdmVudChldmVudCwge1xuICAgICAgICBidWJibGVzLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGV2dCA9IGh5ZHJhdGVPYmooZXZ0LCBhcmdzKTtcbiAgICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKG5hdGl2ZURpc3BhdGNoKSB7XG4gICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgICAgfVxuICAgICAgaWYgKGV2dC5kZWZhdWx0UHJldmVudGVkICYmIGpRdWVyeUV2ZW50KSB7XG4gICAgICAgIGpRdWVyeUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXZ0O1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gaHlkcmF0ZU9iaihvYmosIG1ldGEgPSB7fSkge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1ldGEpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgfSBjYXRjaCAoX3VudXNlZCkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGRvbS9kYXRhLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IGVsZW1lbnRNYXAgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IERhdGEgPSB7XG4gICAgc2V0KGVsZW1lbnQsIGtleSwgaW5zdGFuY2UpIHtcbiAgICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgZWxlbWVudE1hcC5zZXQoZWxlbWVudCwgbmV3IE1hcCgpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudCk7XG5cbiAgICAgIC8vIG1ha2UgaXQgY2xlYXIgd2Ugb25seSB3YW50IG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudFxuICAgICAgLy8gY2FuIGJlIHJlbW92ZWQgbGF0ZXIgd2hlbiBtdWx0aXBsZSBrZXkvaW5zdGFuY2VzIGFyZSBmaW5lIHRvIGJlIHVzZWRcbiAgICAgIGlmICghaW5zdGFuY2VNYXAuaGFzKGtleSkgJiYgaW5zdGFuY2VNYXAuc2l6ZSAhPT0gMCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKGluc3RhbmNlTWFwLmtleXMoKSlbMF19LmApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnN0YW5jZU1hcC5zZXQoa2V5LCBpbnN0YW5jZSk7XG4gICAgfSxcbiAgICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgICBpZiAoZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpLmdldChrZXkpIHx8IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZShlbGVtZW50LCBrZXkpIHtcbiAgICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KTtcbiAgICAgIGluc3RhbmNlTWFwLmRlbGV0ZShrZXkpO1xuXG4gICAgICAvLyBmcmVlIHVwIGVsZW1lbnQgcmVmZXJlbmNlcyBpZiB0aGVyZSBhcmUgbm8gaW5zdGFuY2VzIGxlZnQgZm9yIGFuIGVsZW1lbnRcbiAgICAgIGlmIChpbnN0YW5jZU1hcC5zaXplID09PSAwKSB7XG4gICAgICAgIGVsZW1lbnRNYXAuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGRvbS9tYW5pcHVsYXRvci5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplRGF0YSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gTnVtYmVyKHZhbHVlKS50b1N0cmluZygpKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJ251bGwnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbm9ybWFsaXplRGF0YUtleShrZXkpIHtcbiAgICByZXR1cm4ga2V5LnJlcGxhY2UoL1tBLVpdL2csIGNociA9PiBgLSR7Y2hyLnRvTG93ZXJDYXNlKCl9YCk7XG4gIH1cbiAgY29uc3QgTWFuaXB1bGF0b3IgPSB7XG4gICAgc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gLCB2YWx1ZSk7XG4gICAgfSxcbiAgICByZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCk7XG4gICAgfSxcbiAgICBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHt9O1xuICAgICAgY29uc3QgYnNLZXlzID0gT2JqZWN0LmtleXMoZWxlbWVudC5kYXRhc2V0KS5maWx0ZXIoa2V5ID0+IGtleS5zdGFydHNXaXRoKCdicycpICYmICFrZXkuc3RhcnRzV2l0aCgnYnNDb25maWcnKSk7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBic0tleXMpIHtcbiAgICAgICAgbGV0IHB1cmVLZXkgPSBrZXkucmVwbGFjZSgvXmJzLywgJycpO1xuICAgICAgICBwdXJlS2V5ID0gcHVyZUtleS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHB1cmVLZXkuc2xpY2UoMSwgcHVyZUtleS5sZW5ndGgpO1xuICAgICAgICBhdHRyaWJ1dGVzW3B1cmVLZXldID0gbm9ybWFsaXplRGF0YShlbGVtZW50LmRhdGFzZXRba2V5XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXR0cmlidXRlcztcbiAgICB9LFxuICAgIGdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplRGF0YShlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9jb25maWcuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIENvbmZpZyB7XG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIHN0YXRpYyBtZXRob2QgXCJOQU1FXCIsIGZvciBlYWNoIGNvbXBvbmVudCEnKTtcbiAgICB9XG4gICAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZyk7XG4gICAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZyk7XG4gICAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgZWxlbWVudCkge1xuICAgICAgY29uc3QganNvbkNvbmZpZyA9IGlzRWxlbWVudCQxKGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCAnY29uZmlnJykgOiB7fTsgLy8gdHJ5IHRvIHBhcnNlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgICAgLi4uKHR5cGVvZiBqc29uQ29uZmlnID09PSAnb2JqZWN0JyA/IGpzb25Db25maWcgOiB7fSksXG4gICAgICAgIC4uLihpc0VsZW1lbnQkMShlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIDoge30pLFxuICAgICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcbiAgICAgIH07XG4gICAgfVxuICAgIF90eXBlQ2hlY2tDb25maWcoY29uZmlnLCBjb25maWdUeXBlcyA9IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpIHtcbiAgICAgIGZvciAoY29uc3QgW3Byb3BlcnR5LCBleHBlY3RlZFR5cGVzXSBvZiBPYmplY3QuZW50cmllcyhjb25maWdUeXBlcykpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb25maWdbcHJvcGVydHldO1xuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSBpc0VsZW1lbnQkMSh2YWx1ZSkgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpO1xuICAgICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBiYXNlLWNvbXBvbmVudC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBWRVJTSU9OID0gJzUuMy4wLWFscGhhMic7XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIERhdGEuc2V0KHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBEYXRhLnJlbW92ZSh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpO1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eU5hbWUgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcbiAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgX3F1ZXVlQ2FsbGJhY2soY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQgPSB0cnVlKSB7XG4gICAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkKTtcbiAgICB9XG4gICAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgdGhpcy5fZWxlbWVudCk7XG4gICAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZyk7XG4gICAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBEYXRhLmdldChnZXRFbGVtZW50KGVsZW1lbnQpLCB0aGlzLkRBVEFfS0VZKTtcbiAgICB9XG4gICAgc3RhdGljIGdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgY29uZmlnID0ge30pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKGVsZW1lbnQpIHx8IG5ldyB0aGlzKGVsZW1lbnQsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgICAgcmV0dXJuIGBicy4ke3RoaXMuTkFNRX1gO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICAgIHJldHVybiBgLiR7dGhpcy5EQVRBX0tFWX1gO1xuICAgIH1cbiAgICBzdGF0aWMgZXZlbnROYW1lKG5hbWUpIHtcbiAgICAgIHJldHVybiBgJHtuYW1lfSR7dGhpcy5FVkVOVF9LRVl9YDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGRvbS9zZWxlY3Rvci1lbmdpbmUuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICBjb25zdCBnZXRTZWxlY3RvciA9IGVsZW1lbnQgPT4ge1xuICAgIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcpO1xuICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgICAgbGV0IGhyZWZBdHRyaWJ1dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXG4gICAgICAvLyBUaGUgb25seSB2YWxpZCBjb250ZW50IHRoYXQgY291bGQgZG91YmxlIGFzIGEgc2VsZWN0b3IgYXJlIElEcyBvciBjbGFzc2VzLFxuICAgICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgICAgLy8gYGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JgIHdpbGwgcmlnaHRmdWxseSBjb21wbGFpbiBpdCBpcyBpbnZhbGlkLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMzIyNzNcbiAgICAgIGlmICghaHJlZkF0dHJpYnV0ZSB8fCAhaHJlZkF0dHJpYnV0ZS5pbmNsdWRlcygnIycpICYmICFocmVmQXR0cmlidXRlLnN0YXJ0c1dpdGgoJy4nKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gSnVzdCBpbiBjYXNlIHNvbWUgQ01TIHB1dHMgb3V0IGEgZnVsbCBVUkwgd2l0aCB0aGUgYW5jaG9yIGFwcGVuZGVkXG4gICAgICBpZiAoaHJlZkF0dHJpYnV0ZS5pbmNsdWRlcygnIycpICYmICFocmVmQXR0cmlidXRlLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICBocmVmQXR0cmlidXRlID0gYCMke2hyZWZBdHRyaWJ1dGUuc3BsaXQoJyMnKVsxXX1gO1xuICAgICAgfVxuICAgICAgc2VsZWN0b3IgPSBocmVmQXR0cmlidXRlICYmIGhyZWZBdHRyaWJ1dGUgIT09ICcjJyA/IGhyZWZBdHRyaWJ1dGUudHJpbSgpIDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9O1xuICBjb25zdCBTZWxlY3RvckVuZ2luZSA9IHtcbiAgICBmaW5kKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpO1xuICAgIH0sXG4gICAgZmluZE9uZShzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3IuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XG4gICAgfSxcbiAgICBjaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdCguLi5lbGVtZW50LmNoaWxkcmVuKS5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubWF0Y2hlcyhzZWxlY3RvcikpO1xuICAgIH0sXG4gICAgcGFyZW50cyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgbGV0IGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgICAgd2hpbGUgKGFuY2VzdG9yKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChhbmNlc3Rvcik7XG4gICAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgIH0sXG4gICAgcHJldihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgd2hpbGUgKHByZXZpb3VzKSB7XG4gICAgICAgIGlmIChwcmV2aW91cy5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBbcHJldmlvdXNdO1xuICAgICAgICB9XG4gICAgICAgIHByZXZpb3VzID0gcHJldmlvdXMucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuICAgIC8vIFRPRE86IHRoaXMgaXMgbm93IHVudXNlZDsgcmVtb3ZlIGxhdGVyIGFsb25nIHdpdGggcHJldigpXG4gICAgbmV4dChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgbGV0IG5leHQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICAgIGlmIChuZXh0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIFtuZXh0XTtcbiAgICAgICAgfVxuICAgICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gW107XG4gICAgfSxcbiAgICBmb2N1c2FibGVDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgICBjb25zdCBmb2N1c2FibGVzID0gWydhJywgJ2J1dHRvbicsICdpbnB1dCcsICd0ZXh0YXJlYScsICdzZWxlY3QnLCAnZGV0YWlscycsICdbdGFiaW5kZXhdJywgJ1tjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdJ10ubWFwKHNlbGVjdG9yID0+IGAke3NlbGVjdG9yfTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pYCkuam9pbignLCcpO1xuICAgICAgcmV0dXJuIHRoaXMuZmluZChmb2N1c2FibGVzLCBlbGVtZW50KS5maWx0ZXIoZWwgPT4gIWlzRGlzYWJsZWQoZWwpICYmIGlzVmlzaWJsZShlbCkpO1xuICAgIH0sXG4gICAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgcmV0dXJuIHNlbGVjdG9yID8gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvcikgOiBudWxsO1xuICAgIH0sXG4gICAgZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3RvcihlbGVtZW50KSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgcmV0dXJuIHNlbGVjdG9yID8gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikgOiBbXTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICBjb25zdCBlbmFibGVEaXNtaXNzVHJpZ2dlciA9IChjb21wb25lbnQsIG1ldGhvZCA9ICdoaWRlJykgPT4ge1xuICAgIGNvbnN0IGNsaWNrRXZlbnQgPSBgY2xpY2suZGlzbWlzcyR7Y29tcG9uZW50LkVWRU5UX0tFWX1gO1xuICAgIGNvbnN0IG5hbWUgPSBjb21wb25lbnQuTkFNRTtcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIGNsaWNrRXZlbnQsIGBbZGF0YS1icy1kaXNtaXNzPVwiJHtuYW1lfVwiXWAsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKSB8fCB0aGlzLmNsb3Nlc3QoYC4ke25hbWV9YCk7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldCk7XG5cbiAgICAgIC8vIE1ldGhvZCBhcmd1bWVudCBpcyBsZWZ0LCBmb3IgQWxlcnQgYW5kIG9ubHksIGFzIGl0IGRvZXNuJ3QgaW1wbGVtZW50IHRoZSAnaGlkZScgbWV0aG9kXG4gICAgICBpbnN0YW5jZVttZXRob2RdKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBhbGVydC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJGYgPSAnYWxlcnQnO1xuICBjb25zdCBEQVRBX0tFWSRhID0gJ2JzLmFsZXJ0JztcbiAgY29uc3QgRVZFTlRfS0VZJGIgPSBgLiR7REFUQV9LRVkkYX1gO1xuICBjb25zdCBFVkVOVF9DTE9TRSA9IGBjbG9zZSR7RVZFTlRfS0VZJGJ9YDtcbiAgY29uc3QgRVZFTlRfQ0xPU0VEID0gYGNsb3NlZCR7RVZFTlRfS0VZJGJ9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9GQURFJDUgPSAnZmFkZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQ4ID0gJ3Nob3cnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIEFsZXJ0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJGY7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgY2xvc2UoKSB7XG4gICAgICBjb25zdCBjbG9zZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xPU0UpO1xuICAgICAgaWYgKGNsb3NlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDgpO1xuICAgICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQ1KTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5fZGVzdHJveUVsZW1lbnQoKSwgdGhpcy5fZWxlbWVudCwgaXNBbmltYXRlZCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9kZXN0cm95RWxlbWVudCgpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTE9TRUQpO1xuICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gQWxlcnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyKEFsZXJ0LCAnY2xvc2UnKTtcblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihBbGVydCk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBidXR0b24uanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSRlID0gJ2J1dHRvbic7XG4gIGNvbnN0IERBVEFfS0VZJDkgPSAnYnMuYnV0dG9uJztcbiAgY29uc3QgRVZFTlRfS0VZJGEgPSBgLiR7REFUQV9LRVkkOX1gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkkNiA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBDTEFTU19OQU1FX0FDVElWRSQzID0gJ2FjdGl2ZSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFJDUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiYnV0dG9uXCJdJztcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNiA9IGBjbGljayR7RVZFTlRfS0VZJGF9JHtEQVRBX0FQSV9LRVkkNn1gO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIEJ1dHRvbiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRlO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgIC8vIFRvZ2dsZSBjbGFzcyBhbmQgc3luYyB0aGUgYGFyaWEtcHJlc3NlZGAgYXR0cmlidXRlIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYC50b2dnbGUoKWAgbWV0aG9kXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfQUNUSVZFJDMpKTtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBCdXR0b24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKTtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNiwgU0VMRUNUT1JfREFUQV9UT0dHTEUkNSwgZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfREFUQV9UT0dHTEUkNSk7XG4gICAgY29uc3QgZGF0YSA9IEJ1dHRvbi5nZXRPckNyZWF0ZUluc3RhbmNlKGJ1dHRvbik7XG4gICAgZGF0YS50b2dnbGUoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oQnV0dG9uKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvc3dpcGUuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSRkID0gJ3N3aXBlJztcbiAgY29uc3QgRVZFTlRfS0VZJDkgPSAnLmJzLnN3aXBlJztcbiAgY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVkkOX1gO1xuICBjb25zdCBFVkVOVF9UT1VDSE1PVkUgPSBgdG91Y2htb3ZlJHtFVkVOVF9LRVkkOX1gO1xuICBjb25zdCBFVkVOVF9UT1VDSEVORCA9IGB0b3VjaGVuZCR7RVZFTlRfS0VZJDl9YDtcbiAgY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWSQ5fWA7XG4gIGNvbnN0IEVWRU5UX1BPSU5URVJVUCA9IGBwb2ludGVydXAke0VWRU5UX0tFWSQ5fWA7XG4gIGNvbnN0IFBPSU5URVJfVFlQRV9UT1VDSCA9ICd0b3VjaCc7XG4gIGNvbnN0IFBPSU5URVJfVFlQRV9QRU4gPSAncGVuJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UID0gJ3BvaW50ZXItZXZlbnQnO1xuICBjb25zdCBTV0lQRV9USFJFU0hPTEQgPSA0MDtcbiAgY29uc3QgRGVmYXVsdCRjID0ge1xuICAgIGVuZENhbGxiYWNrOiBudWxsLFxuICAgIGxlZnRDYWxsYmFjazogbnVsbCxcbiAgICByaWdodENhbGxiYWNrOiBudWxsXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJGMgPSB7XG4gICAgZW5kQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICAgIGxlZnRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gICAgcmlnaHRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBTd2lwZSBleHRlbmRzIENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIVN3aXBlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl9kZWx0YVggPSAwO1xuICAgICAgdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQpO1xuICAgICAgdGhpcy5faW5pdEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCRjO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJGM7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJGQ7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZJDkpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfc3RhcnQoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgIH1cbiAgICB9XG4gICAgX2VuZChldmVudCkge1xuICAgICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLl9kZWx0YVg7XG4gICAgICB9XG4gICAgICB0aGlzLl9oYW5kbGVTd2lwZSgpO1xuICAgICAgZXhlY3V0ZSh0aGlzLl9jb25maWcuZW5kQ2FsbGJhY2spO1xuICAgIH1cbiAgICBfbW92ZShldmVudCkge1xuICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA+IDEgPyAwIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5fZGVsdGFYO1xuICAgIH1cbiAgICBfaGFuZGxlU3dpcGUoKSB7XG4gICAgICBjb25zdCBhYnNEZWx0YVggPSBNYXRoLmFicyh0aGlzLl9kZWx0YVgpO1xuICAgICAgaWYgKGFic0RlbHRhWCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gYWJzRGVsdGFYIC8gdGhpcy5fZGVsdGFYO1xuICAgICAgdGhpcy5fZGVsdGFYID0gMDtcbiAgICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV4ZWN1dGUoZGlyZWN0aW9uID4gMCA/IHRoaXMuX2NvbmZpZy5yaWdodENhbGxiYWNrIDogdGhpcy5fY29uZmlnLmxlZnRDYWxsYmFjayk7XG4gICAgfVxuICAgIF9pbml0RXZlbnRzKCkge1xuICAgICAgaWYgKHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSRE9XTiwgZXZlbnQgPT4gdGhpcy5fc3RhcnQoZXZlbnQpKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJVUCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIU1RBUlQsIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSE1PVkUsIGV2ZW50ID0+IHRoaXMuX21vdmUoZXZlbnQpKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIRU5ELCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyAmJiAoZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9QRU4gfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9UT1VDSCk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGlzU3VwcG9ydGVkKCkge1xuICAgICAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgY2Fyb3VzZWwuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSRjID0gJ2Nhcm91c2VsJztcbiAgY29uc3QgREFUQV9LRVkkOCA9ICdicy5jYXJvdXNlbCc7XG4gIGNvbnN0IEVWRU5UX0tFWSQ4ID0gYC4ke0RBVEFfS0VZJDh9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZJDUgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgQVJST1dfTEVGVF9LRVkkMSA9ICdBcnJvd0xlZnQnO1xuICBjb25zdCBBUlJPV19SSUdIVF9LRVkkMSA9ICdBcnJvd1JpZ2h0JztcbiAgY29uc3QgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMDsgLy8gVGltZSBmb3IgbW91c2UgY29tcGF0IGV2ZW50cyB0byBmaXJlIGFmdGVyIHRvdWNoXG5cbiAgY29uc3QgT1JERVJfTkVYVCA9ICduZXh0JztcbiAgY29uc3QgT1JERVJfUFJFViA9ICdwcmV2JztcbiAgY29uc3QgRElSRUNUSU9OX0xFRlQgPSAnbGVmdCc7XG4gIGNvbnN0IERJUkVDVElPTl9SSUdIVCA9ICdyaWdodCc7XG4gIGNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVkkOH1gO1xuICBjb25zdCBFVkVOVF9TTElEID0gYHNsaWQke0VWRU5UX0tFWSQ4fWA7XG4gIGNvbnN0IEVWRU5UX0tFWURPV04kMSA9IGBrZXlkb3duJHtFVkVOVF9LRVkkOH1gO1xuICBjb25zdCBFVkVOVF9NT1VTRUVOVEVSJDEgPSBgbW91c2VlbnRlciR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfTU9VU0VMRUFWRSQxID0gYG1vdXNlbGVhdmUke0VWRU5UX0tFWSQ4fWA7XG4gIGNvbnN0IEVWRU5UX0RSQUdfU1RBUlQgPSBgZHJhZ3N0YXJ0JHtFVkVOVF9LRVkkOH1gO1xuICBjb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJJDMgPSBgbG9hZCR7RVZFTlRfS0VZJDh9JHtEQVRBX0FQSV9LRVkkNX1gO1xuICBjb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSQ1ID0gYGNsaWNrJHtFVkVOVF9LRVkkOH0ke0RBVEFfQVBJX0tFWSQ1fWA7XG4gIGNvbnN0IENMQVNTX05BTUVfQ0FST1VTRUwgPSAnY2Fyb3VzZWwnO1xuICBjb25zdCBDTEFTU19OQU1FX0FDVElWRSQyID0gJ2FjdGl2ZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX0VORCA9ICdjYXJvdXNlbC1pdGVtLWVuZCc7XG4gIGNvbnN0IENMQVNTX05BTUVfU1RBUlQgPSAnY2Fyb3VzZWwtaXRlbS1zdGFydCc7XG4gIGNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnO1xuICBjb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2JztcbiAgY29uc3QgU0VMRUNUT1JfQUNUSVZFID0gJy5hY3RpdmUnO1xuICBjb25zdCBTRUxFQ1RPUl9JVEVNID0gJy5jYXJvdXNlbC1pdGVtJztcbiAgY29uc3QgU0VMRUNUT1JfQUNUSVZFX0lURU0gPSBTRUxFQ1RPUl9BQ1RJVkUgKyBTRUxFQ1RPUl9JVEVNO1xuICBjb25zdCBTRUxFQ1RPUl9JVEVNX0lNRyA9ICcuY2Fyb3VzZWwtaXRlbSBpbWcnO1xuICBjb25zdCBTRUxFQ1RPUl9JTkRJQ0FUT1JTID0gJy5jYXJvdXNlbC1pbmRpY2F0b3JzJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9TTElERSA9ICdbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfUklERSA9ICdbZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIl0nO1xuICBjb25zdCBLRVlfVE9fRElSRUNUSU9OID0ge1xuICAgIFtBUlJPV19MRUZUX0tFWSQxXTogRElSRUNUSU9OX1JJR0hULFxuICAgIFtBUlJPV19SSUdIVF9LRVkkMV06IERJUkVDVElPTl9MRUZUXG4gIH07XG4gIGNvbnN0IERlZmF1bHQkYiA9IHtcbiAgICBpbnRlcnZhbDogNTAwMCxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICBwYXVzZTogJ2hvdmVyJyxcbiAgICByaWRlOiBmYWxzZSxcbiAgICB0b3VjaDogdHJ1ZSxcbiAgICB3cmFwOiB0cnVlXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJGIgPSB7XG4gICAgaW50ZXJ2YWw6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAgICAvLyBUT0RPOnY2IHJlbW92ZSBib29sZWFuIHN1cHBvcnRcbiAgICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICAgIHBhdXNlOiAnKHN0cmluZ3xib29sZWFuKScsXG4gICAgcmlkZTogJyhib29sZWFufHN0cmluZyknLFxuICAgIHRvdWNoOiAnYm9vbGVhbicsXG4gICAgd3JhcDogJ2Jvb2xlYW4nXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBudWxsO1xuICAgICAgdGhpcy5fc3dpcGVIZWxwZXIgPSBudWxsO1xuICAgICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpO1xuICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIGlmICh0aGlzLl9jb25maWcucmlkZSA9PT0gQ0xBU1NfTkFNRV9DQVJPVVNFTCkge1xuICAgICAgICB0aGlzLmN5Y2xlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JGI7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkYjtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkYztcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBuZXh0KCkge1xuICAgICAgdGhpcy5fc2xpZGUoT1JERVJfTkVYVCk7XG4gICAgfVxuICAgIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAgIC8vIEZJWE1FIFRPRE8gdXNlIGBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVgXG4gICAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJiBpc1Zpc2libGUodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHByZXYoKSB7XG4gICAgICB0aGlzLl9zbGlkZShPUkRFUl9QUkVWKTtcbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpO1xuICAgIH1cbiAgICBjeWNsZSgpIHtcbiAgICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUludGVydmFsKCk7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMubmV4dFdoZW5WaXNpYmxlKCksIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCk7XG4gICAgfVxuICAgIF9tYXliZUVuYWJsZUN5Y2xlKCkge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcucmlkZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy5jeWNsZSgpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jeWNsZSgpO1xuICAgIH1cbiAgICB0byhpbmRleCkge1xuICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLl9nZXRJdGVtcygpO1xuICAgICAgaWYgKGluZGV4ID4gaXRlbXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZ2V0QWN0aXZlKCkpO1xuICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBvcmRlciA9IGluZGV4ID4gYWN0aXZlSW5kZXggPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVjtcbiAgICAgIHRoaXMuX3NsaWRlKG9yZGVyLCBpdGVtc1tpbmRleF0pO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgaWYgKHRoaXMuX3N3aXBlSGVscGVyKSB7XG4gICAgICAgIHRoaXMuX3N3aXBlSGVscGVyLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgICBjb25maWcuZGVmYXVsdEludGVydmFsID0gY29uZmlnLmludGVydmFsO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiQxLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUVOVEVSJDEsICgpID0+IHRoaXMucGF1c2UoKSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUxFQVZFJDEsICgpID0+IHRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoICYmIFN3aXBlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH1cbiAgICBfYWRkVG91Y2hFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGZvciAoY29uc3QgaW1nIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTV9JTUcsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihpbWcsIEVWRU5UX0RSQUdfU1RBUlQsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuICAgICAgfVxuICAgICAgY29uc3QgZW5kQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgIT09ICdob3ZlcicpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgaWYgKHRoaXMudG91Y2hUaW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpLCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgdGhpcy5fY29uZmlnLmludGVydmFsKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBzd2lwZUNvbmZpZyA9IHtcbiAgICAgICAgbGVmdENhbGxiYWNrOiAoKSA9PiB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKERJUkVDVElPTl9MRUZUKSksXG4gICAgICAgIHJpZ2h0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX1JJR0hUKSksXG4gICAgICAgIGVuZENhbGxiYWNrOiBlbmRDYWxsQmFja1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbmV3IFN3aXBlKHRoaXMuX2VsZW1lbnQsIHN3aXBlQ29uZmlnKTtcbiAgICB9XG4gICAgX2tleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBLRVlfVE9fRElSRUNUSU9OW2V2ZW50LmtleV07XG4gICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9nZXRJdGVtSW5kZXgoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1zKCkuaW5kZXhPZihlbGVtZW50KTtcbiAgICB9XG4gICAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoaW5kZXgpIHtcbiAgICAgIGlmICghdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgYWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkUsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KTtcbiAgICAgIGFjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDIpO1xuICAgICAgYWN0aXZlSW5kaWNhdG9yLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50Jyk7XG4gICAgICBjb25zdCBuZXdBY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKGBbZGF0YS1icy1zbGlkZS10bz1cIiR7aW5kZXh9XCJdYCwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpO1xuICAgICAgaWYgKG5ld0FjdGl2ZUluZGljYXRvcikge1xuICAgICAgICBuZXdBY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQyKTtcbiAgICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3RydWUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3VwZGF0ZUludGVydmFsKCkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2FjdGl2ZUVsZW1lbnQgfHwgdGhpcy5fZ2V0QWN0aXZlKCk7XG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZWxlbWVudEludGVydmFsID0gTnVtYmVyLnBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLWludGVydmFsJyksIDEwKTtcbiAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsO1xuICAgIH1cbiAgICBfc2xpZGUob3JkZXIsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9nZXRBY3RpdmUoKTtcbiAgICAgIGNvbnN0IGlzTmV4dCA9IG9yZGVyID09PSBPUkRFUl9ORVhUO1xuICAgICAgY29uc3QgbmV4dEVsZW1lbnQgPSBlbGVtZW50IHx8IGdldE5leHRBY3RpdmVFbGVtZW50KHRoaXMuX2dldEl0ZW1zKCksIGFjdGl2ZUVsZW1lbnQsIGlzTmV4dCwgdGhpcy5fY29uZmlnLndyYXApO1xuICAgICAgaWYgKG5leHRFbGVtZW50ID09PSBhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpO1xuICAgICAgY29uc3QgdHJpZ2dlckV2ZW50ID0gZXZlbnROYW1lID0+IHtcbiAgICAgICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIGV2ZW50TmFtZSwge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgICAgIGRpcmVjdGlvbjogdGhpcy5fb3JkZXJUb0RpcmVjdGlvbihvcmRlciksXG4gICAgICAgICAgZnJvbTogdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpLFxuICAgICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJREUpO1xuICAgICAgaWYgKHNsaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAgIC8vIFNvbWUgd2VpcmRuZXNzIGlzIGhhcHBlbmluZywgc28gd2UgYmFpbFxuICAgICAgICAvLyB0b2RvOiBjaGFuZ2UgdGVzdHMgdGhhdCB1c2UgZW1wdHkgZGl2cyB0byBhdm9pZCB0aGlzIGNoZWNrXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpO1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnRJbmRleCk7XG4gICAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbmV4dEVsZW1lbnQ7XG4gICAgICBjb25zdCBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfU1RBUlQgOiBDTEFTU19OQU1FX0VORDtcbiAgICAgIGNvbnN0IG9yZGVyQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9ORVhUIDogQ0xBU1NfTkFNRV9QUkVWO1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcmRlckNsYXNzTmFtZSk7XG4gICAgICByZWZsb3cobmV4dEVsZW1lbnQpO1xuICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKTtcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShkaXJlY3Rpb25hbENsYXNzTmFtZSwgb3JkZXJDbGFzc05hbWUpO1xuICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDIpO1xuICAgICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUkMiwgb3JkZXJDbGFzc05hbWUsIGRpcmVjdGlvbmFsQ2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICAgIHRyaWdnZXJFdmVudChFVkVOVF9TTElEKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIGFjdGl2ZUVsZW1lbnQsIHRoaXMuX2lzQW5pbWF0ZWQoKSk7XG4gICAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TTElERSk7XG4gICAgfVxuICAgIF9nZXRBY3RpdmUoKSB7XG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudCk7XG4gICAgfVxuICAgIF9nZXRJdGVtcygpIHtcbiAgICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU0sIHRoaXMuX2VsZW1lbnQpO1xuICAgIH1cbiAgICBfY2xlYXJJbnRlcnZhbCgpIHtcbiAgICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBfZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pIHtcbiAgICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfUFJFViA6IE9SREVSX05FWFQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX05FWFQgOiBPUkRFUl9QUkVWO1xuICAgIH1cbiAgICBfb3JkZXJUb0RpcmVjdGlvbihvcmRlcikge1xuICAgICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX0xFRlQgOiBESVJFQ1RJT05fUklHSFQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVDtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGRhdGEudG8oY29uZmlnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNSwgU0VMRUNUT1JfREFUQV9TTElERSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKTtcbiAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0NBUk9VU0VMKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNhcm91c2VsID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpO1xuICAgIGNvbnN0IHNsaWRlSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1zbGlkZS10bycpO1xuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICBjYXJvdXNlbC50byhzbGlkZUluZGV4KTtcbiAgICAgIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKHRoaXMsICdzbGlkZScpID09PSAnbmV4dCcpIHtcbiAgICAgIGNhcm91c2VsLm5leHQoKTtcbiAgICAgIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhcm91c2VsLnByZXYoKTtcbiAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpO1xuICB9KTtcbiAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSQzLCAoKSA9PiB7XG4gICAgY29uc3QgY2Fyb3VzZWxzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1JJREUpO1xuICAgIGZvciAoY29uc3QgY2Fyb3VzZWwgb2YgY2Fyb3VzZWxzKSB7XG4gICAgICBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKGNhcm91c2VsKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKENhcm91c2VsKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGNvbGxhcHNlLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkYiA9ICdjb2xsYXBzZSc7XG4gIGNvbnN0IERBVEFfS0VZJDcgPSAnYnMuY29sbGFwc2UnO1xuICBjb25zdCBFVkVOVF9LRVkkNyA9IGAuJHtEQVRBX0tFWSQ3fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQ0ID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVWRU5UX1NIT1ckNiA9IGBzaG93JHtFVkVOVF9LRVkkN31gO1xuICBjb25zdCBFVkVOVF9TSE9XTiQ2ID0gYHNob3duJHtFVkVOVF9LRVkkN31gO1xuICBjb25zdCBFVkVOVF9ISURFJDYgPSBgaGlkZSR7RVZFTlRfS0VZJDd9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOJDYgPSBgaGlkZGVuJHtFVkVOVF9LRVkkN31gO1xuICBjb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSQ0ID0gYGNsaWNrJHtFVkVOVF9LRVkkN30ke0RBVEFfQVBJX0tFWSQ0fWA7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQ3ID0gJ3Nob3cnO1xuICBjb25zdCBDTEFTU19OQU1FX0NPTExBUFNFID0gJ2NvbGxhcHNlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnO1xuICBjb25zdCBDTEFTU19OQU1FX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQnO1xuICBjb25zdCBDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiA9IGA6c2NvcGUgLiR7Q0xBU1NfTkFNRV9DT0xMQVBTRX0gLiR7Q0xBU1NfTkFNRV9DT0xMQVBTRX1gO1xuICBjb25zdCBDTEFTU19OQU1FX0hPUklaT05UQUwgPSAnY29sbGFwc2UtaG9yaXpvbnRhbCc7XG4gIGNvbnN0IFdJRFRIID0gJ3dpZHRoJztcbiAgY29uc3QgSEVJR0hUID0gJ2hlaWdodCc7XG4gIGNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUkNCA9ICdbZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXSc7XG4gIGNvbnN0IERlZmF1bHQkYSA9IHtcbiAgICBwYXJlbnQ6IG51bGwsXG4gICAgdG9nZ2xlOiB0cnVlXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJGEgPSB7XG4gICAgcGFyZW50OiAnKG51bGx8ZWxlbWVudCknLFxuICAgIHRvZ2dsZTogJ2Jvb2xlYW4nXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgQ29sbGFwc2UgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IFtdO1xuICAgICAgY29uc3QgdG9nZ2xlTGlzdCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEUkNCk7XG4gICAgICBmb3IgKGNvbnN0IGVsZW0gb2YgdG9nZ2xlTGlzdCkge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IFNlbGVjdG9yRW5naW5lLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSk7XG4gICAgICAgIGNvbnN0IGZpbHRlckVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKS5maWx0ZXIoZm91bmRFbGVtZW50ID0+IGZvdW5kRWxlbWVudCA9PT0gdGhpcy5fZWxlbWVudCk7XG4gICAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCAmJiBmaWx0ZXJFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9pbml0aWFsaXplQ2hpbGRyZW4oKTtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fdHJpZ2dlckFycmF5LCB0aGlzLl9pc1Nob3duKCkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkYTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSRhO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRiO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2hvdygpIHtcbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBhY3RpdmVDaGlsZHJlbiA9IFtdO1xuXG4gICAgICAvLyBmaW5kIGFjdGl2ZSBjaGlsZHJlblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgYWN0aXZlQ2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfQUNUSVZFUykuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudCAhPT0gdGhpcy5fZWxlbWVudCkubWFwKGVsZW1lbnQgPT4gQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7XG4gICAgICAgICAgdG9nZ2xlOiBmYWxzZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICBpZiAoYWN0aXZlQ2hpbGRyZW4ubGVuZ3RoICYmIGFjdGl2ZUNoaWxkcmVuWzBdLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1ckNik7XG4gICAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgYWN0aXZlSW5zdGFuY2Ugb2YgYWN0aXZlQ2hpbGRyZW4pIHtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2UuaGlkZSgpO1xuICAgICAgfVxuICAgICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKCk7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSk7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDA7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fdHJpZ2dlckFycmF5LCB0cnVlKTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XJDcpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJztcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04kNik7XG4gICAgICB9O1xuICAgICAgY29uc3QgY2FwaXRhbGl6ZWREaW1lbnNpb24gPSBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKTtcbiAgICAgIGNvbnN0IHNjcm9sbFNpemUgPSBgc2Nyb2xsJHtjYXBpdGFsaXplZERpbWVuc2lvbn1gO1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSk7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YDtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSQ2KTtcbiAgICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKCk7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgO1xuICAgICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XJDcpO1xuICAgICAgZm9yIChjb25zdCB0cmlnZ2VyIG9mIHRoaXMuX3RyaWdnZXJBcnJheSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKTtcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgIXRoaXMuX2lzU2hvd24oZWxlbWVudCkpIHtcbiAgICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW3RyaWdnZXJdLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiQ2KTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJztcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpO1xuICAgIH1cbiAgICBfaXNTaG93bihlbGVtZW50ID0gdGhpcy5fZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVyQ3KTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKTsgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICAgIGNvbmZpZy5wYXJlbnQgPSBnZXRFbGVtZW50KGNvbmZpZy5wYXJlbnQpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX2dldERpbWVuc2lvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0hPUklaT05UQUwpID8gV0lEVEggOiBIRUlHSFQ7XG4gICAgfVxuICAgIF9pbml0aWFsaXplQ2hpbGRyZW4oKSB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfREFUQV9UT0dHTEUkNCk7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW2VsZW1lbnRdLCB0aGlzLl9pc1Nob3duKHNlbGVjdGVkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihzZWxlY3Rvcikge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kKENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOLCB0aGlzLl9jb25maWcucGFyZW50KTtcbiAgICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBpZiBncmVhdGVyIGRlcHRoXG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgdGhpcy5fY29uZmlnLnBhcmVudCkuZmlsdGVyKGVsZW1lbnQgPT4gIWNoaWxkcmVuLmluY2x1ZGVzKGVsZW1lbnQpKTtcbiAgICB9XG4gICAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0cmlnZ2VyQXJyYXksIGlzT3Blbikge1xuICAgICAgaWYgKCF0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfQ09MTEFQU0VELCAhaXNPcGVuKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICBjb25zdCBfY29uZmlnID0ge307XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgX2NvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDQsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCBldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiBldmVudC5kZWxlZ2F0ZVRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5nZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKHRoaXMpKSB7XG4gICAgICBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHtcbiAgICAgICAgdG9nZ2xlOiBmYWxzZVxuICAgICAgfSkudG9nZ2xlKCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihDb2xsYXBzZSk7XG5cbiAgdmFyIHRvcCA9ICd0b3AnO1xuICB2YXIgYm90dG9tID0gJ2JvdHRvbSc7XG4gIHZhciByaWdodCA9ICdyaWdodCc7XG4gIHZhciBsZWZ0ID0gJ2xlZnQnO1xuICB2YXIgYXV0byA9ICdhdXRvJztcbiAgdmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG4gIHZhciBzdGFydCA9ICdzdGFydCc7XG4gIHZhciBlbmQgPSAnZW5kJztcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xuICB2YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xuICB2YXIgcG9wcGVyID0gJ3BvcHBlcic7XG4gIHZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbiAgdmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xuICB9LCBbXSk7XG4gIHZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCwgcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbiAgfSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG4gIHZhciBiZWZvcmVSZWFkID0gJ2JlZm9yZVJlYWQnO1xuICB2YXIgcmVhZCA9ICdyZWFkJztcbiAgdmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG4gIHZhciBiZWZvcmVNYWluID0gJ2JlZm9yZU1haW4nO1xuICB2YXIgbWFpbiA9ICdtYWluJztcbiAgdmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbiAgdmFyIGJlZm9yZVdyaXRlID0gJ2JlZm9yZVdyaXRlJztcbiAgdmFyIHdyaXRlID0gJ3dyaXRlJztcbiAgdmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG4gIHZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTtcblxuICBmdW5jdGlvbiBnZXROb2RlTmFtZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgICAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdyA6IHdpbmRvdztcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gICAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbiAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxuICAgIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbiAgfVxuXG4gIC8vIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIEhUTUxFbGVtZW50cyBzdWNoIGFzIHBvcHBlciBhbmQgYXJyb3dcblxuICBmdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgICAvLyAkRmxvd0ZpeE1lW2Nhbm5vdC13cml0ZV1cblxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBlZmZlY3QkMihfcmVmMikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICAgIHZhciBpbml0aWFsU3R5bGVzID0ge1xuICAgICAgcG9wcGVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgIHRvcDogJzAnLFxuICAgICAgICBtYXJnaW46ICcwJ1xuICAgICAgfSxcbiAgICAgIGFycm93OiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICB9LFxuICAgICAgcmVmZXJlbmNlOiB7fVxuICAgIH07XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gICAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgICB2YXIgc3R5bGVQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoc3RhdGUuc3R5bGVzLmhhc093blByb3BlcnR5KG5hbWUpID8gc3RhdGUuc3R5bGVzW25hbWVdIDogaW5pdGlhbFN0eWxlc1tuYW1lXSk7IC8vIFNldCBhbGwgdmFsdWVzIHRvIGFuIGVtcHR5IHN0cmluZyB0byB1bnNldCB0aGVtXG5cbiAgICAgICAgdmFyIHN0eWxlID0gc3R5bGVQcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbiAoc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9LCB7fSk7IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IGFwcGx5U3R5bGVzJDEgPSB7XG4gICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnd3JpdGUnLFxuICAgIGZuOiBhcHBseVN0eWxlcyxcbiAgICBlZmZlY3Q6IGVmZmVjdCQyLFxuICAgIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB9XG5cbiAgdmFyIG1heCA9IE1hdGgubWF4O1xuICB2YXIgbWluID0gTWF0aC5taW47XG4gIHZhciByb3VuZCA9IE1hdGgucm91bmQ7XG5cbiAgZnVuY3Rpb24gZ2V0VUFTdHJpbmcoKSB7XG4gICAgdmFyIHVhRGF0YSA9IG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xuXG4gICAgaWYgKHVhRGF0YSAhPSBudWxsICYmIHVhRGF0YS5icmFuZHMpIHtcbiAgICAgIHJldHVybiB1YURhdGEuYnJhbmRzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5icmFuZCArIFwiL1wiICsgaXRlbS52ZXJzaW9uO1xuICAgICAgfSkuam9pbignICcpO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMYXlvdXRWaWV3cG9ydCgpIHtcbiAgICByZXR1cm4gIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgaW5jbHVkZVNjYWxlLCBpc0ZpeGVkU3RyYXRlZ3kpIHtcbiAgICBpZiAoaW5jbHVkZVNjYWxlID09PSB2b2lkIDApIHtcbiAgICAgIGluY2x1ZGVTY2FsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc0ZpeGVkU3RyYXRlZ3kgPT09IHZvaWQgMCkge1xuICAgICAgaXNGaXhlZFN0cmF0ZWd5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBzY2FsZVggPSAxO1xuICAgIHZhciBzY2FsZVkgPSAxO1xuXG4gICAgaWYgKGluY2x1ZGVTY2FsZSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICBzY2FsZVggPSBlbGVtZW50Lm9mZnNldFdpZHRoID4gMCA/IHJvdW5kKGNsaWVudFJlY3Qud2lkdGgpIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxIDogMTtcbiAgICAgIHNjYWxlWSA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID4gMCA/IHJvdW5kKGNsaWVudFJlY3QuaGVpZ2h0KSAvIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDEgOiAxO1xuICAgIH1cblxuICAgIHZhciBfcmVmID0gaXNFbGVtZW50KGVsZW1lbnQpID8gZ2V0V2luZG93KGVsZW1lbnQpIDogd2luZG93LFxuICAgICAgICB2aXN1YWxWaWV3cG9ydCA9IF9yZWYudmlzdWFsVmlld3BvcnQ7XG5cbiAgICB2YXIgYWRkVmlzdWFsT2Zmc2V0cyA9ICFpc0xheW91dFZpZXdwb3J0KCkgJiYgaXNGaXhlZFN0cmF0ZWd5O1xuICAgIHZhciB4ID0gKGNsaWVudFJlY3QubGVmdCArIChhZGRWaXN1YWxPZmZzZXRzICYmIHZpc3VhbFZpZXdwb3J0ID8gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCA6IDApKSAvIHNjYWxlWDtcbiAgICB2YXIgeSA9IChjbGllbnRSZWN0LnRvcCArIChhZGRWaXN1YWxPZmZzZXRzICYmIHZpc3VhbFZpZXdwb3J0ID8gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wIDogMCkpIC8gc2NhbGVZO1xuICAgIHZhciB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGggLyBzY2FsZVg7XG4gICAgdmFyIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0IC8gc2NhbGVZO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHRvcDogeSxcbiAgICAgIHJpZ2h0OiB4ICsgd2lkdGgsXG4gICAgICBib3R0b206IHkgKyBoZWlnaHQsXG4gICAgICBsZWZ0OiB4LFxuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9O1xuICB9XG5cbiAgLy8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxuXG4gIGZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICAgIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgICAvLyBGaXhlcyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEyMjNcblxuICAgIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3Qud2lkdGggLSB3aWR0aCkgPD0gMSkge1xuICAgICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LmhlaWdodCAtIGhlaWdodCkgPD0gMSkge1xuICAgICAgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICAgIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICAgIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gICAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuICAgICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ106IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG5cblxuICAgICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICAgIH0gLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxuXG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkge1xuICAgIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpID49IDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICAgIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gKC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8IC8vIHN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlXG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgICAgaXNTaGFkb3dSb290KGVsZW1lbnQpID8gZWxlbWVudC5ob3N0IDogbnVsbCkgfHwgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuICAgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gICAgZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gIH0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbiAgLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuICBmdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICAgIHZhciBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG4gICAgdmFyIGlzSUUgPSAvVHJpZGVudC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG5cbiAgICBpZiAoaXNJRSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAvLyBJbiBJRSA5LCAxMCBhbmQgMTEgZml4ZWQgZWxlbWVudHMgY29udGFpbmluZyBibG9jayBpcyBhbHdheXMgZXN0YWJsaXNoZWQgYnkgdGhlIHZpZXdwb3J0XG4gICAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KTtcblxuICAgICAgaWYgKGVsZW1lbnRDc3MucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICAgIGlmIChpc1NoYWRvd1Jvb3QoY3VycmVudE5vZGUpKSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmhvc3Q7XG4gICAgfVxuXG4gICAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUkMShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG5cbiAgICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbiAgLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cblxuXG4gIGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gICAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICAgIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlJDEob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ICYmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnaHRtbCcgfHwgZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2JvZHknICYmIGdldENvbXB1dGVkU3R5bGUkMShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgPj0gMCA/ICd4JyA6ICd5JztcbiAgfVxuXG4gIGZ1bmN0aW9uIHdpdGhpbihtaW4kMSwgdmFsdWUsIG1heCQxKSB7XG4gICAgcmV0dXJuIG1heChtaW4kMSwgbWluKHZhbHVlLCBtYXgkMSkpO1xuICB9XG4gIGZ1bmN0aW9uIHdpdGhpbk1heENsYW1wKG1pbiwgdmFsdWUsIG1heCkge1xuICAgIHZhciB2ID0gd2l0aGluKG1pbiwgdmFsdWUsIG1heCk7XG4gICAgcmV0dXJuIHYgPiBtYXggPyBtYXggOiB2O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJlc2hTaWRlT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDBcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gICAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICAgIGhhc2hNYXBba2V5XSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGhhc2hNYXA7XG4gICAgfSwge30pO1xuICB9XG5cbiAgdmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xuICAgIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gICAgfSkpIDogcGFkZGluZztcbiAgICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgfTtcblxuICBmdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gICAgdmFyIF9zdGF0ZSRtb2RpZmllcnNEYXRhJDtcblxuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICAgIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICAgIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICAgIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gICAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cbiAgICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG4gIH1cblxuICBmdW5jdGlvbiBlZmZlY3QkMShfcmVmMikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgICAgYXJyb3dFbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gJ1tkYXRhLXBvcHBlci1hcnJvd10nIDogX29wdGlvbnMkZWxlbWVudDtcblxuICAgIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gQ1NTIHNlbGVjdG9yXG5cblxuICAgIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBhcnJvdyQxID0ge1xuICAgIG5hbWU6ICdhcnJvdycsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ21haW4nLFxuICAgIGZuOiBhcnJvdyxcbiAgICBlZmZlY3Q6IGVmZmVjdCQxLFxuICAgIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbiAgfVxuXG4gIHZhciB1bnNldFNpZGVzID0ge1xuICAgIHRvcDogJ2F1dG8nLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgbGVmdDogJ2F1dG8nXG4gIH07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4gIC8vIFpvb21pbmcgY2FuIGNoYW5nZSB0aGUgRFBSLCBidXQgaXQgc2VlbXMgdG8gcmVwb3J0IGEgdmFsdWUgdGhhdCB3aWxsXG4gIC8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG4gIGZ1bmN0aW9uIHJvdW5kT2Zmc2V0c0J5RFBSKF9yZWYpIHtcbiAgICB2YXIgeCA9IF9yZWYueCxcbiAgICAgICAgeSA9IF9yZWYueTtcbiAgICB2YXIgd2luID0gd2luZG93O1xuICAgIHZhciBkcHIgPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIHJldHVybiB7XG4gICAgICB4OiByb3VuZCh4ICogZHByKSAvIGRwciB8fCAwLFxuICAgICAgeTogcm91bmQoeSAqIGRwcikgLyBkcHIgfHwgMFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcbiAgICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgICB2YXJpYXRpb24gPSBfcmVmMi52YXJpYXRpb24sXG4gICAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxuICAgICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmUsXG4gICAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cyxcbiAgICAgICAgaXNGaXhlZCA9IF9yZWYyLmlzRml4ZWQ7XG4gICAgdmFyIF9vZmZzZXRzJHggPSBvZmZzZXRzLngsXG4gICAgICAgIHggPSBfb2Zmc2V0cyR4ID09PSB2b2lkIDAgPyAwIDogX29mZnNldHMkeCxcbiAgICAgICAgX29mZnNldHMkeSA9IG9mZnNldHMueSxcbiAgICAgICAgeSA9IF9vZmZzZXRzJHkgPT09IHZvaWQgMCA/IDAgOiBfb2Zmc2V0cyR5O1xuXG4gICAgdmFyIF9yZWYzID0gdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyh7XG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH0pIDoge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9O1xuXG4gICAgeCA9IF9yZWYzLng7XG4gICAgeSA9IF9yZWYzLnk7XG4gICAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gICAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gICAgdmFyIHNpZGVYID0gbGVmdDtcbiAgICB2YXIgc2lkZVkgPSB0b3A7XG4gICAgdmFyIHdpbiA9IHdpbmRvdztcblxuICAgIGlmIChhZGFwdGl2ZSkge1xuICAgICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuICAgICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcbiAgICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgICBvZmZzZXRQYXJlbnQgPSBnZXREb2N1bWVudEVsZW1lbnQocG9wcGVyKTtcblxuICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSQxKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnICYmIHBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblxuICAgICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgICBpZiAocGxhY2VtZW50ID09PSB0b3AgfHwgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCBwbGFjZW1lbnQgPT09IHJpZ2h0KSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgICBzaWRlWSA9IGJvdHRvbTtcbiAgICAgICAgdmFyIG9mZnNldFkgPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC5oZWlnaHQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgICAgb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdO1xuICAgICAgICB5IC09IG9mZnNldFkgLSBwb3BwZXJSZWN0LmhlaWdodDtcbiAgICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbGFjZW1lbnQgPT09IGxlZnQgfHwgKHBsYWNlbWVudCA9PT0gdG9wIHx8IHBsYWNlbWVudCA9PT0gYm90dG9tKSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgICBzaWRlWCA9IHJpZ2h0O1xuICAgICAgICB2YXIgb2Zmc2V0WCA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LndpZHRoIDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICAgIG9mZnNldFBhcmVudFt3aWR0aFByb3BdO1xuICAgICAgICB4IC09IG9mZnNldFggLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICAgIHZhciBfcmVmNCA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfSkgOiB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH07XG5cbiAgICB4ID0gX3JlZjQueDtcbiAgICB5ID0gX3JlZjQueTtcblxuICAgIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPD0gMSA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY1KSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZjUuc3RhdGUsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmNS5vcHRpb25zO1xuICAgIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgICBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsXG4gICAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICAgIHJvdW5kT2Zmc2V0cyA9IF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJvdW5kT2Zmc2V0cztcblxuICAgIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICAgIHZhcmlhdGlvbjogZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCksXG4gICAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgaXNGaXhlZDogc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJ1xuICAgIH07XG5cbiAgICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlLFxuICAgICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgICAgfSkpKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgYWRhcHRpdmU6IGZhbHNlLFxuICAgICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgICAgfSkpKTtcbiAgICB9XG5cbiAgICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gICAgfSk7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgY29tcHV0ZVN0eWxlcyQxID0ge1xuICAgIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICAgIGZuOiBjb21wdXRlU3R5bGVzLFxuICAgIGRhdGE6IHt9XG4gIH07XG5cbiAgdmFyIHBhc3NpdmUgPSB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9O1xuXG4gIGZ1bmN0aW9uIGVmZmVjdChfcmVmKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICAgIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgICAgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLFxuICAgICAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcbiAgICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICAgIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc2l6ZSkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0ge1xuICAgIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ3dyaXRlJyxcbiAgICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgICBlZmZlY3Q6IGVmZmVjdCxcbiAgICBkYXRhOiB7fVxuICB9O1xuXG4gIHZhciBoYXNoJDEgPSB7XG4gICAgbGVmdDogJ3JpZ2h0JyxcbiAgICByaWdodDogJ2xlZnQnLFxuICAgIGJvdHRvbTogJ3RvcCcsXG4gICAgdG9wOiAnYm90dG9tJ1xuICB9O1xuICBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgICAgcmV0dXJuIGhhc2gkMVttYXRjaGVkXTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBoYXNoID0ge1xuICAgIHN0YXJ0OiAnZW5kJyxcbiAgICBlbmQ6ICdzdGFydCdcbiAgfTtcbiAgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICAgIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuICAgIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gICAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG4gICAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcbiAgICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gICAgLy8gYW55d2F5LlxuICAgIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG4gICAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gICAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gICAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gICAgdmFyIHggPSAwO1xuICAgIHZhciB5ID0gMDtcblxuICAgIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDtcbiAgICAgIHZhciBsYXlvdXRWaWV3cG9ydCA9IGlzTGF5b3V0Vmlld3BvcnQoKTtcblxuICAgICAgaWYgKGxheW91dFZpZXdwb3J0IHx8ICFsYXlvdXRWaWV3cG9ydCAmJiBzdHJhdGVneSA9PT0gJ2ZpeGVkJykge1xuICAgICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICAgIHk6IHlcbiAgICB9O1xuICB9XG5cbiAgLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG4gIGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gICAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICAgIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICAgIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gICAgdmFyIGJvZHkgPSAoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHk7XG4gICAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gICAgdmFyIHggPSAtd2luU2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICAgIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSQxKGJvZHkgfHwgaHRtbCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gICAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpLFxuICAgICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgICBvdmVyZmxvd1ggPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gsXG4gICAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICAgIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50KG5vZGUpICYmIGlzU2Nyb2xsUGFyZW50KG5vZGUpKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUobm9kZSkpO1xuICB9XG5cbiAgLypcbiAgZ2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcbiAgdW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbiAgdG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxuICByZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuICAqL1xuXG4gIGZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gICAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgICAgbGlzdCA9IFtdO1xuICAgIH1cblxuICAgIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gICAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gKChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSk7XG4gICAgdmFyIHdpbiA9IGdldFdpbmRvdyhzY3JvbGxQYXJlbnQpO1xuICAgIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICAgIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gICAgcmV0dXJuIGlzQm9keSA/IHVwZGF0ZWRMaXN0IDogLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IGlzQm9keSB0ZWxscyB1cyB0YXJnZXQgd2lsbCBiZSBhbiBIVE1MRWxlbWVudCBoZXJlXG4gICAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICAgIGxlZnQ6IHJlY3QueCxcbiAgICAgIHRvcDogcmVjdC55LFxuICAgICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICAgIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGZhbHNlLCBzdHJhdGVneSA9PT0gJ2ZpeGVkJyk7XG4gICAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICAgIHJlY3QubGVmdCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgcmVjdC53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICByZWN0LnggPSByZWN0LmxlZnQ7XG4gICAgcmVjdC55ID0gcmVjdC50b3A7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpIHtcbiAgICByZXR1cm4gY2xpcHBpbmdQYXJlbnQgPT09IHZpZXdwb3J0ID8gcmVjdFRvQ2xpZW50UmVjdChnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpKSA6IGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgPyBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG4gIH0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2ZcbiAgLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4gIC8vIGBpbml0aWFsYFxuXG5cbiAgZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gICAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICAgIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gICAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcbiAgICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keSc7XG4gICAgfSk7XG4gIH0gLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuICAvLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuICBmdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSwgc3RyYXRlZ3kpIHtcbiAgICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gICAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gICAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gICAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSk7XG4gICAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgICAgcmV0dXJuIGFjY1JlY3Q7XG4gICAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpKTtcbiAgICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gICAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gICAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXG4gICAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICAgIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcbiAgICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICAgIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XG4gICAgdmFyIGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZWxlbWVudC5oZWlnaHQgLyAyO1xuICAgIHZhciBvZmZzZXRzO1xuXG4gICAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgICBjYXNlIHRvcDpcbiAgICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICAgIHk6IHJlZmVyZW5jZS55IC0gZWxlbWVudC5oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgYm90dG9tOlxuICAgICAgICBvZmZzZXRzID0ge1xuICAgICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgICAgeTogcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIHJpZ2h0OlxuICAgICAgICBvZmZzZXRzID0ge1xuICAgICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICAgIHk6IGNvbW1vbllcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgbGVmdDpcbiAgICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgICAgeTogY29tbW9uWVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xuXG4gICAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgICBzd2l0Y2ggKHZhcmlhdGlvbikge1xuICAgICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gLSAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBlbmQ6XG4gICAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICAgIF9vcHRpb25zJHN0cmF0ZWd5ID0gX29wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICAgIHN0cmF0ZWd5ID0gX29wdGlvbnMkc3RyYXRlZ3kgPT09IHZvaWQgMCA/IHN0YXRlLnN0cmF0ZWd5IDogX29wdGlvbnMkc3RyYXRlZ3ksXG4gICAgICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG4gICAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuICAgIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gICAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gICAgdmFyIGNsaXBwaW5nQ2xpZW50UmVjdCA9IGdldENsaXBwaW5nUmVjdChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCBnZXREb2N1bWVudEVsZW1lbnQoc3RhdGUuZWxlbWVudHMucG9wcGVyKSwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSwgc3RyYXRlZ3kpO1xuICAgIHZhciByZWZlcmVuY2VDbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZSk7XG4gICAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICAgIH0pO1xuICAgIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gICAgdmFyIGVsZW1lbnRDbGllbnRSZWN0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHBvcHBlckNsaWVudFJlY3QgOiByZWZlcmVuY2VDbGllbnRSZWN0OyAvLyBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyByZWN0XG4gICAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gICAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICAgIHRvcDogY2xpcHBpbmdDbGllbnRSZWN0LnRvcCAtIGVsZW1lbnRDbGllbnRSZWN0LnRvcCArIHBhZGRpbmdPYmplY3QudG9wLFxuICAgICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgICByaWdodDogZWxlbWVudENsaWVudFJlY3QucmlnaHQgLSBjbGlwcGluZ0NsaWVudFJlY3QucmlnaHQgKyBwYWRkaW5nT2JqZWN0LnJpZ2h0XG4gICAgfTtcbiAgICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgICBpZiAoZWxlbWVudENvbnRleHQgPT09IHBvcHBlciAmJiBvZmZzZXREYXRhKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIG11bHRpcGx5ID0gW3JpZ2h0LCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gMSA6IC0xO1xuICAgICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IHBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gICAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuICAgIHZhciBwbGFjZW1lbnRzJDEgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICAgIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMS5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgICB9KTtcblxuICAgIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cyQxO1xuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV06IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cblxuXG4gICAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gICAgaWYgKGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHZhciBvcHBvc2l0ZVBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gICAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsaXAoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG5cbiAgICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IG9wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzO1xuICAgIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gYmFzZVBsYWNlbWVudCA9PT0gcHJlZmVycmVkUGxhY2VtZW50O1xuICAgIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0byA/IGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCB7XG4gICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50czogYWxsb3dlZEF1dG9QbGFjZW1lbnRzXG4gICAgICB9KSA6IHBsYWNlbWVudCk7XG4gICAgfSwgW10pO1xuICAgIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICAgIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICAgIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gICAgdmFyIG1ha2VGYWxsYmFja0NoZWNrcyA9IHRydWU7XG4gICAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2ldO1xuXG4gICAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgICAgdmFyIGlzVmVydGljYWwgPSBbdG9wLCBib3R0b21dLmluZGV4T2YoX2Jhc2VQbGFjZW1lbnQpID49IDA7XG4gICAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnksXG4gICAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICAgIH0pO1xuICAgICAgdmFyIG1haW5WYXJpYXRpb25TaWRlID0gaXNWZXJ0aWNhbCA/IGlzU3RhcnRWYXJpYXRpb24gPyByaWdodCA6IGxlZnQgOiBpc1N0YXJ0VmFyaWF0aW9uID8gYm90dG9tIDogdG9wO1xuXG4gICAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoZWNrcy5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgfSkpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICAgIH1cblxuICAgIGlmIChtYWtlRmFsbGJhY2tDaGVja3MpIHtcbiAgICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIOKAkyByZXNlYXJjaCBsYXRlclxuICAgICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcbiAgICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgICBpZiAoY2hlY2tzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZml0dGluZ1BsYWNlbWVudCkge1xuICAgICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICAgIHZhciBfcmV0ID0gX2xvb3AoX2kpO1xuXG4gICAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gICAgfVxuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IGZsaXAkMSA9IHtcbiAgICBuYW1lOiAnZmxpcCcsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ21haW4nLFxuICAgIGZuOiBmbGlwLFxuICAgIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J10sXG4gICAgZGF0YToge1xuICAgICAgX3NraXA6IGZhbHNlXG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gICAgaWYgKHByZXZlbnRlZE9mZnNldHMgPT09IHZvaWQgMCkge1xuICAgICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0ICsgcHJldmVudGVkT2Zmc2V0cy55LFxuICAgICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gICAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgIHJldHVybiBvdmVyZmxvd1tzaWRlXSA+PSAwO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZShfcmVmKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICAgIHZhciByZWZlcmVuY2VPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgICB9KTtcbiAgICB2YXIgcG9wcGVyQWx0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgICB9KTtcbiAgICB2YXIgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocmVmZXJlbmNlT3ZlcmZsb3csIHJlZmVyZW5jZVJlY3QpO1xuICAgIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICAgIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICAgIHZhciBoYXNQb3BwZXJFc2NhcGVkID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHBvcHBlckVzY2FwZU9mZnNldHMpO1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICAgIHBvcHBlckVzY2FwZU9mZnNldHM6IHBvcHBlckVzY2FwZU9mZnNldHMsXG4gICAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gICAgfTtcbiAgICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICAgJ2RhdGEtcG9wcGVyLWVzY2FwZWQnOiBoYXNQb3BwZXJFc2NhcGVkXG4gICAgfSk7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgaGlkZSQxID0ge1xuICAgIG5hbWU6ICdoaWRlJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnbWFpbicsXG4gICAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgICBmbjogaGlkZVxuICB9O1xuXG4gIGZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICAgIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICAgIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICAgIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgICB9KSkgOiBvZmZzZXQsXG4gICAgICAgIHNraWRkaW5nID0gX3JlZlswXSxcbiAgICAgICAgZGlzdGFuY2UgPSBfcmVmWzFdO1xuXG4gICAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICAgIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gICAgcmV0dXJuIFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8ge1xuICAgICAgeDogZGlzdGFuY2UsXG4gICAgICB5OiBza2lkZGluZ1xuICAgIH0gOiB7XG4gICAgICB4OiBza2lkZGluZyxcbiAgICAgIHk6IGRpc3RhbmNlXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XG4gICAgdmFyIF9vcHRpb25zJG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0LFxuICAgICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgICAgYWNjW3BsYWNlbWVudF0gPSBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHN0YXRlLnJlY3RzLCBvZmZzZXQpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgdmFyIF9kYXRhJHN0YXRlJHBsYWNlbWVudCA9IGRhdGFbc3RhdGUucGxhY2VtZW50XSxcbiAgICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG5cbiAgICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICAgIH1cblxuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IG9mZnNldCQxID0ge1xuICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdtYWluJyxcbiAgICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gICAgZm46IG9mZnNldFxuICB9O1xuXG4gIGZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgLy8gT2Zmc2V0cyBhcmUgdGhlIGFjdHVhbCBwb3NpdGlvbiB0aGUgcG9wcGVyIG5lZWRzIHRvIGhhdmUgdG8gYmVcbiAgICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gICAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gICAgLy8gdGhlIG1vZGlmaWVycyBpbiB0aGUgbmV4dCBzdGVwXG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICAgIH0pO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IHBvcHBlck9mZnNldHMkMSA9IHtcbiAgICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ3JlYWQnLFxuICAgIGZuOiBwb3BwZXJPZmZzZXRzLFxuICAgIGRhdGE6IHt9XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gICAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4JztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICAgIF9vcHRpb25zJHRldGhlck9mZnNldCA9IG9wdGlvbnMudGV0aGVyT2Zmc2V0LFxuICAgICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gICAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeVxuICAgIH0pO1xuICAgIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICAgIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KTtcbiAgICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gICAgdmFyIGFsdEF4aXMgPSBnZXRBbHRBeGlzKG1haW5BeGlzKTtcbiAgICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICAgIH0pKSA6IHRldGhlck9mZnNldDtcbiAgICB2YXIgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldFZhbHVlID09PSAnbnVtYmVyJyA/IHtcbiAgICAgIG1haW5BeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZSxcbiAgICAgIGFsdEF4aXM6IHRldGhlck9mZnNldFZhbHVlXG4gICAgfSA6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgbWFpbkF4aXM6IDAsXG4gICAgICBhbHRBeGlzOiAwXG4gICAgfSwgdGV0aGVyT2Zmc2V0VmFsdWUpO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclN0YXRlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdIDogbnVsbDtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcblxuICAgIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkO1xuXG4gICAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgICB2YXIgbWluJDEgPSBvZmZzZXQgKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgICB2YXIgbWF4JDEgPSBvZmZzZXQgLSBvdmVyZmxvd1thbHRTaWRlXTtcbiAgICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgICAgdmFyIG1heExlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyAtcG9wcGVyUmVjdFtsZW5dIDogLXJlZmVyZW5jZVJlY3RbbGVuXTsgLy8gV2UgbmVlZCB0byBpbmNsdWRlIHRoZSBhcnJvdyBpbiB0aGUgY2FsY3VsYXRpb24gc28gdGhlIGFycm93IGRvZXNuJ3QgZ29cbiAgICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgICAgdmFyIGFycm93UmVjdCA9IHRldGhlciAmJiBhcnJvd0VsZW1lbnQgPyBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCkgOiB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDBcbiAgICAgIH07XG4gICAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgICAgdmFyIGFycm93UGFkZGluZ01heCA9IGFycm93UGFkZGluZ09iamVjdFthbHRTaWRlXTsgLy8gSWYgdGhlIHJlZmVyZW5jZSBsZW5ndGggaXMgc21hbGxlciB0aGFuIHRoZSBhcnJvdyBsZW5ndGgsIHdlIGRvbid0IHdhbnRcbiAgICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgICAvLyByZWZlcmVuY2UgaXMgbm90IG92ZXJmbG93aW5nIGFzIHdlbGwgKGUuZy4gdmlydHVhbCBlbGVtZW50cyB3aXRoIG5vXG4gICAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICAgIHZhciBtaW5PZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gLyAyIC0gYWRkaXRpdmUgLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgICB2YXIgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW21haW5BeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJCA6IDA7XG4gICAgICB2YXIgdGV0aGVyTWluID0gb2Zmc2V0ICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICAgIHZhciB0ZXRoZXJNYXggPSBvZmZzZXQgKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuICAgICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtaW4obWluJDEsIHRldGhlck1pbikgOiBtaW4kMSwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXgobWF4JDEsIHRldGhlck1heCkgOiBtYXgkMSk7XG4gICAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyO1xuXG4gICAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgICB2YXIgX2xlbiA9IGFsdEF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgICAgdmFyIF9taW4gPSBfb2Zmc2V0ICsgb3ZlcmZsb3dbX21haW5TaWRlXTtcblxuICAgICAgdmFyIF9tYXggPSBfb2Zmc2V0IC0gb3ZlcmZsb3dbX2FsdFNpZGVdO1xuXG4gICAgICB2YXIgaXNPcmlnaW5TaWRlID0gW3RvcCwgbGVmdF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVthbHRBeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJDIgOiAwO1xuXG4gICAgICB2YXIgX3RldGhlck1pbiA9IGlzT3JpZ2luU2lkZSA/IF9taW4gOiBfb2Zmc2V0IC0gcmVmZXJlbmNlUmVjdFtfbGVuXSAtIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzO1xuXG4gICAgICB2YXIgX3RldGhlck1heCA9IGlzT3JpZ2luU2lkZSA/IF9vZmZzZXQgKyByZWZlcmVuY2VSZWN0W19sZW5dICsgcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXMgOiBfbWF4O1xuXG4gICAgICB2YXIgX3ByZXZlbnRlZE9mZnNldCA9IHRldGhlciAmJiBpc09yaWdpblNpZGUgPyB3aXRoaW5NYXhDbGFtcChfdGV0aGVyTWluLCBfb2Zmc2V0LCBfdGV0aGVyTWF4KSA6IHdpdGhpbih0ZXRoZXIgPyBfdGV0aGVyTWluIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gX3RldGhlck1heCA6IF9tYXgpO1xuXG4gICAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgICB9XG5cbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBwcmV2ZW50T3ZlcmZsb3ckMSA9IHtcbiAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnbWFpbicsXG4gICAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICAgIGlmIChub2RlID09PSBnZXRXaW5kb3cobm9kZSkgfHwgIWlzSFRNTEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXRIVE1MRWxlbWVudFNjcm9sbChub2RlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc0VsZW1lbnRTY2FsZWQoZWxlbWVudCkge1xuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgc2NhbGVYID0gcm91bmQocmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDE7XG4gICAgdmFyIHNjYWxlWSA9IHJvdW5kKHJlY3QuaGVpZ2h0KSAvIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDE7XG4gICAgcmV0dXJuIHNjYWxlWCAhPT0gMSB8fCBzY2FsZVkgIT09IDE7XG4gIH0gLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuICAvLyBDb21wb3NpdGUgbWVhbnMgaXQgdGFrZXMgaW50byBhY2NvdW50IHRyYW5zZm9ybXMgYXMgd2VsbCBhcyBsYXlvdXQuXG5cblxuICBmdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcbiAgICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgICBpc0ZpeGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICAgIHZhciBvZmZzZXRQYXJlbnRJc1NjYWxlZCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBpc0VsZW1lbnRTY2FsZWQob2Zmc2V0UGFyZW50KTtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gICAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudElzU2NhbGVkLCBpc0ZpeGVkKTtcbiAgICB2YXIgc2Nyb2xsID0ge1xuICAgICAgc2Nyb2xsTGVmdDogMCxcbiAgICAgIHNjcm9sbFRvcDogMFxuICAgIH07XG4gICAgdmFyIG9mZnNldHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG5cbiAgICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxuICAgICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUpO1xuICAgICAgICBvZmZzZXRzLnggKz0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICAgIG9mZnNldHMueSArPSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICAgIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICAgIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgICBmdW5jdGlvbiBzb3J0KG1vZGlmaWVyKSB7XG4gICAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcbiAgICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgICByZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XG4gICAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICAgIH1cblxuICAgIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAvLyBjaGVjayBmb3IgdmlzaXRlZCBvYmplY3RcbiAgICAgICAgc29ydChtb2RpZmllcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICAgIC8vIG9yZGVyIGJhc2VkIG9uIGRlcGVuZGVuY2llc1xuICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICAgIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGhhc2UpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgICAgfSkpO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gICAgdmFyIHBlbmRpbmc7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghcGVuZGluZykge1xuICAgICAgICBwZW5kaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXNvbHZlKGZuKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBlbmRpbmc7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlQnlOYW1lKG1vZGlmaWVycykge1xuICAgIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgICAgbWVyZ2VkW2N1cnJlbnQubmFtZV0gPSBleGlzdGluZyA/IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLCBjdXJyZW50LCB7XG4gICAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICAgIH0pIDogY3VycmVudDtcbiAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICBtb2RpZmllcnM6IFtdLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG4gIH07XG5cbiAgZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAhKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gICAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRNb2RpZmllcnMsXG4gICAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICAgIGRlZmF1bHRPcHRpb25zID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9PT0gdm9pZCAwID8gREVGQVVMVF9PUFRJT05TIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmMjtcbiAgICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICAgIG1vZGlmaWVyc0RhdGE6IHt9LFxuICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICAgIHBvcHBlcjogcG9wcGVyXG4gICAgICAgIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICBzdHlsZXM6IHt9XG4gICAgICB9O1xuICAgICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIHNldE9wdGlvbnMoc2V0T3B0aW9uc0FjdGlvbikge1xuICAgICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHNldE9wdGlvbnNBY3Rpb24gPT09ICdmdW5jdGlvbicgPyBzZXRPcHRpb25zQWN0aW9uKHN0YXRlLm9wdGlvbnMpIDogc2V0T3B0aW9uc0FjdGlvbjtcbiAgICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICAgIH0pOyAvLyBWYWxpZGF0ZSB0aGUgcHJvdmlkZWQgbW9kaWZpZXJzIHNvIHRoYXQgdGhlIGNvbnN1bWVyIHdpbGwgZ2V0IHdhcm5lZFxuXG4gICAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBTeW5jIHVwZGF0ZSDigJMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAgIC8vIGxvZ2ljLlxuICAgICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlID0gX3N0YXRlJGVsZW1lbnRzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcbiAgICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgc3RhdGUgPSBmbih7XG4gICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gQXN5bmMgYW5kIG9wdGltaXN0aWNhbGx5IG9wdGltaXplZCB1cGRhdGUg4oCTIGl0IHdpbGwgbm90IGJlIGV4ZWN1dGVkIGlmXG4gICAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICBpZiAoIWlzRGVzdHJveWVkICYmIG9wdGlvbnMub25GaXJzdFVwZGF0ZSkge1xuICAgICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgICAgLy8gb25lLlxuXG4gICAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgICAgICAgIF9yZWYzJG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuICAgICAgICAgICAgICBvcHRpb25zID0gX3JlZjMkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRvcHRpb25zLFxuICAgICAgICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3Q7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgIHJldHVybiBmbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuICB2YXIgY3JlYXRlUG9wcGVyJDIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuICB2YXIgZGVmYXVsdE1vZGlmaWVycyQxID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzJDEsIGNvbXB1dGVTdHlsZXMkMSwgYXBwbHlTdHlsZXMkMV07XG4gIHZhciBjcmVhdGVQb3BwZXIkMSA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICAgIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnMkMVxuICB9KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG4gIHZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzJDEsIGNvbXB1dGVTdHlsZXMkMSwgYXBwbHlTdHlsZXMkMSwgb2Zmc2V0JDEsIGZsaXAkMSwgcHJldmVudE92ZXJmbG93JDEsIGFycm93JDEsIGhpZGUkMV07XG4gIHZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG4gIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbiAgY29uc3QgUG9wcGVyID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoLyojX19QVVJFX18qL09iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGFmdGVyTWFpbixcbiAgICBhZnRlclJlYWQsXG4gICAgYWZ0ZXJXcml0ZSxcbiAgICBhcHBseVN0eWxlczogYXBwbHlTdHlsZXMkMSxcbiAgICBhcnJvdzogYXJyb3ckMSxcbiAgICBhdXRvLFxuICAgIGJhc2VQbGFjZW1lbnRzLFxuICAgIGJlZm9yZU1haW4sXG4gICAgYmVmb3JlUmVhZCxcbiAgICBiZWZvcmVXcml0ZSxcbiAgICBib3R0b20sXG4gICAgY2xpcHBpbmdQYXJlbnRzLFxuICAgIGNvbXB1dGVTdHlsZXM6IGNvbXB1dGVTdHlsZXMkMSxcbiAgICBjcmVhdGVQb3BwZXIsXG4gICAgY3JlYXRlUG9wcGVyQmFzZTogY3JlYXRlUG9wcGVyJDIsXG4gICAgY3JlYXRlUG9wcGVyTGl0ZTogY3JlYXRlUG9wcGVyJDEsXG4gICAgZGV0ZWN0T3ZlcmZsb3csXG4gICAgZW5kLFxuICAgIGV2ZW50TGlzdGVuZXJzLFxuICAgIGZsaXA6IGZsaXAkMSxcbiAgICBoaWRlOiBoaWRlJDEsXG4gICAgbGVmdCxcbiAgICBtYWluLFxuICAgIG1vZGlmaWVyUGhhc2VzLFxuICAgIG9mZnNldDogb2Zmc2V0JDEsXG4gICAgcGxhY2VtZW50cyxcbiAgICBwb3BwZXIsXG4gICAgcG9wcGVyR2VuZXJhdG9yLFxuICAgIHBvcHBlck9mZnNldHM6IHBvcHBlck9mZnNldHMkMSxcbiAgICBwcmV2ZW50T3ZlcmZsb3c6IHByZXZlbnRPdmVyZmxvdyQxLFxuICAgIHJlYWQsXG4gICAgcmVmZXJlbmNlLFxuICAgIHJpZ2h0LFxuICAgIHN0YXJ0LFxuICAgIHRvcCxcbiAgICB2YXJpYXRpb25QbGFjZW1lbnRzLFxuICAgIHZpZXdwb3J0LFxuICAgIHdyaXRlXG4gIH0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSkpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgZHJvcGRvd24uanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSRhID0gJ2Ryb3Bkb3duJztcbiAgY29uc3QgREFUQV9LRVkkNiA9ICdicy5kcm9wZG93bic7XG4gIGNvbnN0IEVWRU5UX0tFWSQ2ID0gYC4ke0RBVEFfS0VZJDZ9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZJDMgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgRVNDQVBFX0tFWSQyID0gJ0VzY2FwZSc7XG4gIGNvbnN0IFRBQl9LRVkkMSA9ICdUYWInO1xuICBjb25zdCBBUlJPV19VUF9LRVkkMSA9ICdBcnJvd1VwJztcbiAgY29uc3QgQVJST1dfRE9XTl9LRVkkMSA9ICdBcnJvd0Rvd24nO1xuICBjb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyOyAvLyBNb3VzZUV2ZW50LmJ1dHRvbiB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBidXR0b24sIHVzdWFsbHkgdGhlIHJpZ2h0IGJ1dHRvblxuXG4gIGNvbnN0IEVWRU5UX0hJREUkNSA9IGBoaWRlJHtFVkVOVF9LRVkkNn1gO1xuICBjb25zdCBFVkVOVF9ISURERU4kNSA9IGBoaWRkZW4ke0VWRU5UX0tFWSQ2fWA7XG4gIGNvbnN0IEVWRU5UX1NIT1ckNSA9IGBzaG93JHtFVkVOVF9LRVkkNn1gO1xuICBjb25zdCBFVkVOVF9TSE9XTiQ1ID0gYHNob3duJHtFVkVOVF9LRVkkNn1gO1xuICBjb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSQzID0gYGNsaWNrJHtFVkVOVF9LRVkkNn0ke0RBVEFfQVBJX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0tFWURPV05fREFUQV9BUEkgPSBga2V5ZG93biR7RVZFTlRfS0VZJDZ9JHtEQVRBX0FQSV9LRVkkM31gO1xuICBjb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IGBrZXl1cCR7RVZFTlRfS0VZJDZ9JHtEQVRBX0FQSV9LRVkkM31gO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckNiA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVAgPSAnZHJvcHVwJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QRU5EID0gJ2Ryb3BlbmQnO1xuICBjb25zdCBDTEFTU19OQU1FX0RST1BTVEFSVCA9ICdkcm9wc3RhcnQnO1xuICBjb25zdCBDTEFTU19OQU1FX0RST1BVUF9DRU5URVIgPSAnZHJvcHVwLWNlbnRlcic7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSID0gJ2Ryb3Bkb3duLWNlbnRlcic7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTiA9IGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFJDN9LiR7Q0xBU1NfTkFNRV9TSE9XJDZ9YDtcbiAgY29uc3QgU0VMRUNUT1JfTUVOVSA9ICcuZHJvcGRvd24tbWVudSc7XG4gIGNvbnN0IFNFTEVDVE9SX05BVkJBUiA9ICcubmF2YmFyJztcbiAgY29uc3QgU0VMRUNUT1JfTkFWQkFSX05BViA9ICcubmF2YmFyLW5hdic7XG4gIGNvbnN0IFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMgPSAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknO1xuICBjb25zdCBQTEFDRU1FTlRfVE9QID0gaXNSVEwoKSA/ICd0b3AtZW5kJyA6ICd0b3Atc3RhcnQnO1xuICBjb25zdCBQTEFDRU1FTlRfVE9QRU5EID0gaXNSVEwoKSA/ICd0b3Atc3RhcnQnIDogJ3RvcC1lbmQnO1xuICBjb25zdCBQTEFDRU1FTlRfQk9UVE9NID0gaXNSVEwoKSA/ICdib3R0b20tZW5kJyA6ICdib3R0b20tc3RhcnQnO1xuICBjb25zdCBQTEFDRU1FTlRfQk9UVE9NRU5EID0gaXNSVEwoKSA/ICdib3R0b20tc3RhcnQnIDogJ2JvdHRvbS1lbmQnO1xuICBjb25zdCBQTEFDRU1FTlRfUklHSFQgPSBpc1JUTCgpID8gJ2xlZnQtc3RhcnQnIDogJ3JpZ2h0LXN0YXJ0JztcbiAgY29uc3QgUExBQ0VNRU5UX0xFRlQgPSBpc1JUTCgpID8gJ3JpZ2h0LXN0YXJ0JyA6ICdsZWZ0LXN0YXJ0JztcbiAgY29uc3QgUExBQ0VNRU5UX1RPUENFTlRFUiA9ICd0b3AnO1xuICBjb25zdCBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSID0gJ2JvdHRvbSc7XG4gIGNvbnN0IERlZmF1bHQkOSA9IHtcbiAgICBhdXRvQ2xvc2U6IHRydWUsXG4gICAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICAgIGRpc3BsYXk6ICdkeW5hbWljJyxcbiAgICBvZmZzZXQ6IFswLCAyXSxcbiAgICBwb3BwZXJDb25maWc6IG51bGwsXG4gICAgcmVmZXJlbmNlOiAndG9nZ2xlJ1xuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQ5ID0ge1xuICAgIGF1dG9DbG9zZTogJyhib29sZWFufHN0cmluZyknLFxuICAgIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gICAgZGlzcGxheTogJ3N0cmluZycsXG4gICAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknLFxuICAgIHJlZmVyZW5jZTogJyhzdHJpbmd8ZWxlbWVudHxvYmplY3QpJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcbiAgICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZTsgLy8gZHJvcGRvd24gd3JhcHBlclxuICAgICAgLy8gdG9kbzogdjYgcmV2ZXJ0ICMzNzAxMSAmIGNoYW5nZSBtYXJrdXAgaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4zL2Zvcm1zL2lucHV0LWdyb3VwL1xuICAgICAgdGhpcy5fbWVudSA9IFNlbGVjdG9yRW5naW5lLm5leHQodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF0gfHwgU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fCBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01FTlUsIHRoaXMuX3BhcmVudCk7XG4gICAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ5O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJGE7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgdG9nZ2xlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvd24oKSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCB0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1ckNSwgcmVsYXRlZFRhcmdldCk7XG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY3JlYXRlUG9wcGVyKCk7XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmICF0aGlzLl9wYXJlbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVJfTkFWKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckNik7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04kNSwgcmVsYXRlZFRhcmdldCk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH07XG4gICAgICB0aGlzLl9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKCk7XG4gICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDUsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ2KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckNik7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJyk7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4kNSwgcmVsYXRlZFRhcmdldCk7XG4gICAgfVxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSBzdXBlci5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQkMShjb25maWcucmVmZXJlbmNlKSAmJiB0eXBlb2YgY29uZmlnLnJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gUG9wcGVyIHZpcnR1YWwgZWxlbWVudHMgcmVxdWlyZSBhIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2RcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtOQU1FJGEudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcInJlZmVyZW5jZVwiIHByb3ZpZGVkIHR5cGUgXCJvYmplY3RcIiB3aXRob3V0IGEgcmVxdWlyZWQgXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIiBtZXRob2QuYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfY3JlYXRlUG9wcGVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJyk7XG4gICAgICB9XG4gICAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX3BhcmVudDtcbiAgICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50JDEodGhpcy5fY29uZmlnLnJlZmVyZW5jZSkpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IGdldEVsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHRoaXMuX2dldFBvcHBlckNvbmZpZygpO1xuICAgICAgdGhpcy5fcG9wcGVyID0gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuX21lbnUsIHBvcHBlckNvbmZpZyk7XG4gICAgfVxuICAgIF9pc1Nob3duKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVyQ2KTtcbiAgICB9XG4gICAgX2dldFBsYWNlbWVudCgpIHtcbiAgICAgIGNvbnN0IHBhcmVudERyb3Bkb3duID0gdGhpcy5fcGFyZW50O1xuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BFTkQpKSB7XG4gICAgICAgIHJldHVybiBQTEFDRU1FTlRfUklHSFQ7XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFNUQVJUKSkge1xuICAgICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlQ7XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUikpIHtcbiAgICAgICAgcmV0dXJuIFBMQUNFTUVOVF9UT1BDRU5URVI7XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSKSkge1xuICAgICAgICByZXR1cm4gUExBQ0VNRU5UX0JPVFRPTUNFTlRFUjtcbiAgICAgIH1cblxuICAgICAgLy8gV2UgbmVlZCB0byB0cmltIHRoZSB2YWx1ZSBiZWNhdXNlIGN1c3RvbSBwcm9wZXJ0aWVzIGNhbiBhbHNvIGluY2x1ZGUgc3BhY2VzXG4gICAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCc7XG4gICAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQKSkge1xuICAgICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NO1xuICAgIH1cbiAgICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVIpICE9PSBudWxsO1xuICAgIH1cbiAgICBfZ2V0T2Zmc2V0KCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBvZmZzZXRcbiAgICAgIH0gPSB0aGlzLl9jb25maWc7XG4gICAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VJbnQodmFsdWUsIDEwKSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH1cbiAgICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgICBwbGFjZW1lbnQ6IHRoaXMuX2dldFBsYWNlbWVudCgpLFxuICAgICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9O1xuXG4gICAgICAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXkgb3IgRHJvcGRvd24gaXMgaW4gTmF2YmFyXG4gICAgICBpZiAodGhpcy5faW5OYXZiYXIgfHwgdGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicsICdzdGF0aWMnKTsgLy8gdG9kbzp2NiByZW1vdmVcbiAgICAgICAgZGVmYXVsdEJzUG9wcGVyQ29uZmlnLm1vZGlmaWVycyA9IFt7XG4gICAgICAgICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgICAgLi4uZXhlY3V0ZSh0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnLCBbZGVmYXVsdEJzUG9wcGVyQ29uZmlnXSlcbiAgICAgIH07XG4gICAgfVxuICAgIF9zZWxlY3RNZW51SXRlbSh7XG4gICAgICBrZXksXG4gICAgICB0YXJnZXRcbiAgICB9KSB7XG4gICAgICBjb25zdCBpdGVtcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVklTSUJMRV9JVEVNUywgdGhpcy5fbWVudSkuZmlsdGVyKGVsZW1lbnQgPT4gaXNWaXNpYmxlKGVsZW1lbnQpKTtcbiAgICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgdGFyZ2V0IGlzbid0IGluY2x1ZGVkIGluIGl0ZW1zIChlLmcuIHdoZW4gZXhwYW5kaW5nIHRoZSBkcm9wZG93bilcbiAgICAgIC8vIGFsbG93IGN5Y2xpbmcgdG8gZ2V0IHRoZSBsYXN0IGl0ZW0gaW4gY2FzZSBrZXkgZXF1YWxzIEFSUk9XX1VQX0tFWVxuICAgICAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoaXRlbXMsIHRhcmdldCwga2V5ID09PSBBUlJPV19ET1dOX0tFWSQxLCAhaXRlbXMuaW5jbHVkZXModGFyZ2V0KSkuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSBSSUdIVF9NT1VTRV9CVVRUT04gfHwgZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgIT09IFRBQl9LRVkkMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBvcGVuVG9nZ2xlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04pO1xuICAgICAgZm9yIChjb25zdCB0b2dnbGUgb2Ygb3BlblRvZ2dsZXMpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IERyb3Bkb3duLmdldEluc3RhbmNlKHRvZ2dsZSk7XG4gICAgICAgIGlmICghY29udGV4dCB8fCBjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgICBjb25zdCBpc01lbnVUYXJnZXQgPSBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fbWVudSk7XG4gICAgICAgIGlmIChjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fZWxlbWVudCkgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ2luc2lkZScgJiYgIWlzTWVudVRhcmdldCB8fCBjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnb3V0c2lkZScgJiYgaXNNZW51VGFyZ2V0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUYWIgbmF2aWdhdGlvbiB0aHJvdWdoIHRoZSBkcm9wZG93biBtZW51IG9yIGV2ZW50cyBmcm9tIGNvbnRhaW5lZCBpbnB1dHMgc2hvdWxkbid0IGNsb3NlIHRoZSBtZW51XG4gICAgICAgIGlmIChjb250ZXh0Ll9tZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ID09PSBUQUJfS0VZJDEgfHwgL2lucHV0fHNlbGVjdHxvcHRpb258dGV4dGFyZWF8Zm9ybS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogY29udGV4dC5fZWxlbWVudFxuICAgICAgICB9O1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQuY2xpY2tFdmVudCA9IGV2ZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGRhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgICAgLy8gSWYgbm90IGFuIFVQIHwgRE9XTiB8IEVTQ0FQRSBrZXkgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgICAgLy8gSWYgaW5wdXQvdGV4dGFyZWEgJiYgaWYga2V5IGlzIG90aGVyIHRoYW4gRVNDQVBFID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcblxuICAgICAgY29uc3QgaXNJbnB1dCA9IC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpO1xuICAgICAgY29uc3QgaXNFc2NhcGVFdmVudCA9IGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSQyO1xuICAgICAgY29uc3QgaXNVcE9yRG93bkV2ZW50ID0gW0FSUk9XX1VQX0tFWSQxLCBBUlJPV19ET1dOX0tFWSQxXS5pbmNsdWRlcyhldmVudC5rZXkpO1xuICAgICAgaWYgKCFpc1VwT3JEb3duRXZlbnQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGlzSW5wdXQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gdG9kbzogdjYgcmV2ZXJ0ICMzNzAxMSAmIGNoYW5nZSBtYXJrdXAgaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4zL2Zvcm1zL2lucHV0LWdyb3VwL1xuICAgICAgY29uc3QgZ2V0VG9nZ2xlQnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMpID8gdGhpcyA6IFNlbGVjdG9yRW5naW5lLnByZXYodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUkMylbMF0gfHwgU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzKVswXSB8fCBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMsIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKGdldFRvZ2dsZUJ1dHRvbik7XG4gICAgICBpZiAoaXNVcE9yRG93bkV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpbnN0YW5jZS5zaG93KCk7XG4gICAgICAgIGluc3RhbmNlLl9zZWxlY3RNZW51SXRlbShldmVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0YW5jZS5faXNTaG93bigpKSB7XG4gICAgICAgIC8vIGVsc2UgaXMgZXNjYXBlIGFuZCB3ZSBjaGVjayBpZiBpdCBpcyBzaG93blxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgICAgICBnZXRUb2dnbGVCdXR0b24uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpO1xuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcik7XG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMywgRHJvcGRvd24uY2xlYXJNZW51cyk7XG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZVVBfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpO1xuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS50b2dnbGUoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oRHJvcGRvd24pO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9zY3JvbGxCYXIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJztcbiAgY29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnO1xuICBjb25zdCBQUk9QRVJUWV9QQURESU5HID0gJ3BhZGRpbmctcmlnaHQnO1xuICBjb25zdCBQUk9QRVJUWV9NQVJHSU4gPSAnbWFyZ2luLXJpZ2h0JztcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBTY3JvbGxCYXJIZWxwZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgZ2V0V2lkdGgoKSB7XG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2lubmVyV2lkdGgjdXNhZ2Vfbm90ZXNcbiAgICAgIGNvbnN0IGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudFdpZHRoKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuICAgICAgdGhpcy5fZGlzYWJsZU92ZXJGbG93KCk7XG4gICAgICAvLyBnaXZlIHBhZGRpbmcgdG8gZWxlbWVudCB0byBiYWxhbmNlIHRoZSBoaWRkZW4gc2Nyb2xsYmFyIHdpZHRoXG4gICAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpO1xuICAgICAgLy8gdHJpY2s6IFdlIGFkanVzdCBwb3NpdGl2ZSBwYWRkaW5nUmlnaHQgYW5kIG5lZ2F0aXZlIG1hcmdpblJpZ2h0IHRvIHN0aWNreS10b3AgZWxlbWVudHMgdG8ga2VlcCBzaG93aW5nIGZ1bGx3aWR0aFxuICAgICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKTtcbiAgICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4sIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgLSB3aWR0aCk7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCAnb3ZlcmZsb3cnKTtcbiAgICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgUFJPUEVSVFlfUEFERElORyk7XG4gICAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcpO1xuICAgICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOKTtcbiAgICB9XG4gICAgaXNPdmVyZmxvd2luZygpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFdpZHRoKCkgPiAwO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfZGlzYWJsZU92ZXJGbG93KCkge1xuICAgICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodGhpcy5fZWxlbWVudCwgJ292ZXJmbG93Jyk7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgfVxuICAgIF9zZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSwgY2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuICAgICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQgJiYgd2luZG93LmlubmVyV2lkdGggPiBlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSk7XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgYCR7Y2FsbGJhY2soTnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFZhbHVlKSl9cHhgKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjayk7XG4gICAgfVxuICAgIF9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KSB7XG4gICAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KTtcbiAgICAgIGlmIChhY3R1YWxWYWx1ZSkge1xuICAgICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHksIGFjdHVhbFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHkpIHtcbiAgICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KTtcbiAgICAgICAgLy8gV2Ugb25seSB3YW50IHRvIHJlbW92ZSB0aGUgcHJvcGVydHkgaWYgdGhlIHZhbHVlIGlzIGBudWxsYDsgdGhlIHZhbHVlIGNhbiBhbHNvIGJlIHplcm9cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZVByb3BlcnR5KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spO1xuICAgIH1cbiAgICBfYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgY2FsbEJhY2spIHtcbiAgICAgIGlmIChpc0VsZW1lbnQkMShzZWxlY3RvcikpIHtcbiAgICAgICAgY2FsbEJhY2soc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHNlbCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgICBjYWxsQmFjayhzZWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9iYWNrZHJvcC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDkgPSAnYmFja2Ryb3AnO1xuICBjb25zdCBDTEFTU19OQU1FX0ZBREUkNCA9ICdmYWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDUgPSAnc2hvdyc7XG4gIGNvbnN0IEVWRU5UX01PVVNFRE9XTiA9IGBtb3VzZWRvd24uYnMuJHtOQU1FJDl9YDtcbiAgY29uc3QgRGVmYXVsdCQ4ID0ge1xuICAgIGNsYXNzTmFtZTogJ21vZGFsLWJhY2tkcm9wJyxcbiAgICBjbGlja0NhbGxiYWNrOiBudWxsLFxuICAgIGlzQW5pbWF0ZWQ6IGZhbHNlLFxuICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICAvLyBpZiBmYWxzZSwgd2UgdXNlIHRoZSBiYWNrZHJvcCBoZWxwZXIgd2l0aG91dCBhZGRpbmcgYW55IGVsZW1lbnQgdG8gdGhlIGRvbVxuICAgIHJvb3RFbGVtZW50OiAnYm9keScgLy8gZ2l2ZSB0aGUgY2hvaWNlIHRvIHBsYWNlIGJhY2tkcm9wIHVuZGVyIGRpZmZlcmVudCBlbGVtZW50c1xuICB9O1xuXG4gIGNvbnN0IERlZmF1bHRUeXBlJDggPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBjbGlja0NhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgICBpc0FuaW1hdGVkOiAnYm9vbGVhbicsXG4gICAgaXNWaXNpYmxlOiAnYm9vbGVhbicsXG4gICAgcm9vdEVsZW1lbnQ6ICcoZWxlbWVudHxzdHJpbmcpJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIEJhY2tkcm9wIGV4dGVuZHMgQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ4O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDg7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgc2hvdyhjYWxsYmFjaykge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9hcHBlbmQoKTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KCk7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgcmVmbG93KGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQ1KTtcbiAgICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ1KTtcbiAgICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRE9XTik7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfZ2V0RWxlbWVudCgpIHtcbiAgICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiYWNrZHJvcC5jbGFzc05hbWUgPSB0aGlzLl9jb25maWcuY2xhc3NOYW1lO1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSQ0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gYmFja2Ryb3A7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgICB9XG4gICAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgICAvLyB1c2UgZ2V0RWxlbWVudCgpIHdpdGggdGhlIGRlZmF1bHQgXCJib2R5XCIgdG8gZ2V0IGEgZnJlc2ggRWxlbWVudCBvbiBlYWNoIGluc3RhbnRpYXRpb25cbiAgICAgIGNvbmZpZy5yb290RWxlbWVudCA9IGdldEVsZW1lbnQoY29uZmlnLnJvb3RFbGVtZW50KTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9hcHBlbmQoKSB7XG4gICAgICBpZiAodGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpO1xuICAgICAgdGhpcy5fY29uZmlnLnJvb3RFbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCBFVkVOVF9NT1VTRURPV04sICgpID0+IHtcbiAgICAgICAgZXhlY3V0ZSh0aGlzLl9jb25maWcuY2xpY2tDYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2lzQXBwZW5kZWQgPSB0cnVlO1xuICAgIH1cbiAgICBfZW11bGF0ZUFuaW1hdGlvbihjYWxsYmFjaykge1xuICAgICAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbihjYWxsYmFjaywgdGhpcy5fZ2V0RWxlbWVudCgpLCB0aGlzLl9jb25maWcuaXNBbmltYXRlZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL2ZvY3VzdHJhcC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDggPSAnZm9jdXN0cmFwJztcbiAgY29uc3QgREFUQV9LRVkkNSA9ICdicy5mb2N1c3RyYXAnO1xuICBjb25zdCBFVkVOVF9LRVkkNSA9IGAuJHtEQVRBX0tFWSQ1fWA7XG4gIGNvbnN0IEVWRU5UX0ZPQ1VTSU4kMiA9IGBmb2N1c2luJHtFVkVOVF9LRVkkNX1gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOX1RBQiA9IGBrZXlkb3duLnRhYiR7RVZFTlRfS0VZJDV9YDtcbiAgY29uc3QgVEFCX0tFWSA9ICdUYWInO1xuICBjb25zdCBUQUJfTkFWX0ZPUldBUkQgPSAnZm9yd2FyZCc7XG4gIGNvbnN0IFRBQl9OQVZfQkFDS1dBUkQgPSAnYmFja3dhcmQnO1xuICBjb25zdCBEZWZhdWx0JDcgPSB7XG4gICAgYXV0b2ZvY3VzOiB0cnVlLFxuICAgIHRyYXBFbGVtZW50OiBudWxsIC8vIFRoZSBlbGVtZW50IHRvIHRyYXAgZm9jdXMgaW5zaWRlIG9mXG4gIH07XG5cbiAgY29uc3QgRGVmYXVsdFR5cGUkNyA9IHtcbiAgICBhdXRvZm9jdXM6ICdib29sZWFuJyxcbiAgICB0cmFwRWxlbWVudDogJ2VsZW1lbnQnXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgRm9jdXNUcmFwIGV4dGVuZHMgQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkNztcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ3O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQ4O1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGFjdGl2YXRlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYXV0b2ZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy50cmFwRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZJDUpOyAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTiQyLCBldmVudCA9PiB0aGlzLl9oYW5kbGVGb2N1c2luKGV2ZW50KSk7XG4gICAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fVEFCLCBldmVudCA9PiB0aGlzLl9oYW5kbGVLZXlkb3duKGV2ZW50KSk7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkkNSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9oYW5kbGVGb2N1c2luKGV2ZW50KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHRyYXBFbGVtZW50XG4gICAgICB9ID0gdGhpcy5fY29uZmlnO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZG9jdW1lbnQgfHwgZXZlbnQudGFyZ2V0ID09PSB0cmFwRWxlbWVudCB8fCB0cmFwRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZm9jdXNhYmxlQ2hpbGRyZW4odHJhcEVsZW1lbnQpO1xuICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0cmFwRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID09PSBUQUJfTkFWX0JBQ0tXQVJEKSB7XG4gICAgICAgIGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50c1swXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgICBfaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleSAhPT0gVEFCX0tFWSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gZXZlbnQuc2hpZnRLZXkgPyBUQUJfTkFWX0JBQ0tXQVJEIDogVEFCX05BVl9GT1JXQVJEO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgbW9kYWwuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQ3ID0gJ21vZGFsJztcbiAgY29uc3QgREFUQV9LRVkkNCA9ICdicy5tb2RhbCc7XG4gIGNvbnN0IEVWRU5UX0tFWSQ0ID0gYC4ke0RBVEFfS0VZJDR9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZJDIgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgRVNDQVBFX0tFWSQxID0gJ0VzY2FwZSc7XG4gIGNvbnN0IEVWRU5UX0hJREUkNCA9IGBoaWRlJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCQxID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQ0ID0gYGhpZGRlbiR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfU0hPVyQ0ID0gYHNob3cke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX1NIT1dOJDQgPSBgc2hvd24ke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX1JFU0laRSQxID0gYHJlc2l6ZSR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9NT1VTRURPV05fRElTTUlTUyA9IGBtb3VzZWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTJDEgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSQyID0gYGNsaWNrJHtFVkVOVF9LRVkkNH0ke0RBVEFfQVBJX0tFWSQyfWA7XG4gIGNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdtb2RhbC1vcGVuJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9GQURFJDMgPSAnZmFkZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQ0ID0gJ3Nob3cnO1xuICBjb25zdCBDTEFTU19OQU1FX1NUQVRJQyA9ICdtb2RhbC1zdGF0aWMnO1xuICBjb25zdCBPUEVOX1NFTEVDVE9SJDEgPSAnLm1vZGFsLnNob3cnO1xuICBjb25zdCBTRUxFQ1RPUl9ESUFMT0cgPSAnLm1vZGFsLWRpYWxvZyc7XG4gIGNvbnN0IFNFTEVDVE9SX01PREFMX0JPRFkgPSAnLm1vZGFsLWJvZHknO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQyID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJdJztcbiAgY29uc3QgRGVmYXVsdCQ2ID0ge1xuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGZvY3VzOiB0cnVlLFxuICAgIGtleWJvYXJkOiB0cnVlXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDYgPSB7XG4gICAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBmb2N1czogJ2Jvb2xlYW4nLFxuICAgIGtleWJvYXJkOiAnYm9vbGVhbidcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBNb2RhbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuX2RpYWxvZyA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRElBTE9HLCB0aGlzLl9lbGVtZW50KTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKCk7XG4gICAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKCk7XG4gICAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Njcm9sbEJhciA9IG5ldyBTY3JvbGxCYXJIZWxwZXIoKTtcbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDY7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkNjtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkNztcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KTtcbiAgICB9XG4gICAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICBpZiAodGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVyQ0LCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pO1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3Njcm9sbEJhci5oaWRlKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9PUEVOKTtcbiAgICAgIHRoaXMuX2FkanVzdERpYWxvZygpO1xuICAgICAgdGhpcy5fYmFja2Ryb3Auc2hvdygoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUkNCk7XG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDQpO1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9oaWRlTW9kYWwoKSwgdGhpcy5fZWxlbWVudCwgdGhpcy5faXNBbmltYXRlZCgpKTtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIGZvciAoY29uc3QgaHRtbEVsZW1lbnQgb2YgW3dpbmRvdywgdGhpcy5fZGlhbG9nXSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGh0bWxFbGVtZW50LCBFVkVOVF9LRVkkNCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cbiAgICBoYW5kbGVVcGRhdGUoKSB7XG4gICAgICB0aGlzLl9hZGp1c3REaWFsb2coKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICAgIHJldHVybiBuZXcgQmFja2Ryb3Aoe1xuICAgICAgICBpc1Zpc2libGU6IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKSxcbiAgICAgICAgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlLFxuICAgICAgICBpc0FuaW1hdGVkOiB0aGlzLl9pc0FuaW1hdGVkKClcbiAgICAgIH0pO1xuICAgIH1cbiAgICBfaW5pdGlhbGl6ZUZvY3VzVHJhcCgpIHtcbiAgICAgIHJldHVybiBuZXcgRm9jdXNUcmFwKHtcbiAgICAgICAgdHJhcEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBfc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkge1xuICAgICAgLy8gdHJ5IHRvIGFwcGVuZCBkeW5hbWljIG1vZGFsXG4gICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5fZWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgICBjb25zdCBtb2RhbEJvZHkgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01PREFMX0JPRFksIHRoaXMuX2RpYWxvZyk7XG4gICAgICBpZiAobW9kYWxCb2R5KSB7XG4gICAgICAgIG1vZGFsQm9keS5zY3JvbGxUb3AgPSAwO1xuICAgICAgfVxuICAgICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQ0KTtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiQ0LCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKHRyYW5zaXRpb25Db21wbGV0ZSwgdGhpcy5fZGlhbG9nLCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuICAgIH1cbiAgICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTJDEsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSQxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpO1xuICAgICAgfSk7XG4gICAgICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUkMSwgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faXNTaG93biAmJiAhdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIC8vIGEgYmFkIHRyaWNrIHRvIHNlZ3JlZ2F0ZSBjbGlja3MgdGhhdCBtYXkgc3RhcnQgaW5zaWRlIGRpYWxvZyBidXQgZW5kIG91dHNpZGUsIGFuZCBhdm9pZCBsaXN0ZW4gdG8gc2Nyb2xsYmFyIGNsaWNrc1xuICAgICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIGV2ZW50MiA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCB8fCB0aGlzLl9lbGVtZW50ICE9PSBldmVudDIudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgX2hpZGVNb2RhbCgpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9PUEVOKTtcbiAgICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpO1xuICAgICAgICB0aGlzLl9zY3JvbGxCYXIucmVzZXQoKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOJDQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIF9pc0FuaW1hdGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQzKTtcbiAgICB9XG4gICAgX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSB7XG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRCQxKTtcbiAgICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBpbml0aWFsT3ZlcmZsb3dZID0gdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1k7XG4gICAgICAvLyByZXR1cm4gaWYgdGhlIGZvbGxvd2luZyBiYWNrZ3JvdW5kIHRyYW5zaXRpb24gaGFzbid0IHlldCBjb21wbGV0ZWRcbiAgICAgIGlmIChpbml0aWFsT3ZlcmZsb3dZID09PSAnaGlkZGVuJyB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NUQVRJQykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NUQVRJQyk7XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU1RBVElDKTtcbiAgICAgICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSBpbml0aWFsT3ZlcmZsb3dZO1xuICAgICAgICB9LCB0aGlzLl9kaWFsb2cpO1xuICAgICAgfSwgdGhpcy5fZGlhbG9nKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAgICAqL1xuXG4gICAgX2FkanVzdERpYWxvZygpIHtcbiAgICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5fc2Nyb2xsQmFyLmdldFdpZHRoKCk7XG4gICAgICBjb25zdCBpc0JvZHlPdmVyZmxvd2luZyA9IHNjcm9sbGJhcldpZHRoID4gMDtcbiAgICAgIGlmIChpc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gaXNSVEwoKSA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XG4gICAgICB9XG4gICAgICBpZiAoIWlzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGlzUlRMKCkgPyAncGFkZGluZ1JpZ2h0JyA6ICdwYWRkaW5nTGVmdCc7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgICAgfVxuICAgIH1cbiAgICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJztcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJyc7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10ocmVsYXRlZFRhcmdldCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQyLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQyLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpO1xuICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9TSE9XJDQsIHNob3dFdmVudCA9PiB7XG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgLy8gb25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfSElEREVOJDQsICgpID0+IHtcbiAgICAgICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBhdm9pZCBjb25mbGljdCB3aGVuIGNsaWNraW5nIG1vZGFsIHRvZ2dsZXIgd2hpbGUgYW5vdGhlciBvbmUgaXMgb3BlblxuICAgIGNvbnN0IGFscmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SJDEpO1xuICAgIGlmIChhbHJlYWR5T3Blbikge1xuICAgICAgTW9kYWwuZ2V0SW5zdGFuY2UoYWxyZWFkeU9wZW4pLmhpZGUoKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KTtcbiAgICBkYXRhLnRvZ2dsZSh0aGlzKTtcbiAgfSk7XG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyKE1vZGFsKTtcblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihNb2RhbCk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBvZmZjYW52YXMuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQ2ID0gJ29mZmNhbnZhcyc7XG4gIGNvbnN0IERBVEFfS0VZJDMgPSAnYnMub2ZmY2FudmFzJztcbiAgY29uc3QgRVZFTlRfS0VZJDMgPSBgLiR7REFUQV9LRVkkM31gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkkMSA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJJDIgPSBgbG9hZCR7RVZFTlRfS0VZJDN9JHtEQVRBX0FQSV9LRVkkMX1gO1xuICBjb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQzID0gJ3Nob3cnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1dJTkckMSA9ICdzaG93aW5nJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9ISURJTkcgPSAnaGlkaW5nJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdvZmZjYW52YXMtYmFja2Ryb3AnO1xuICBjb25zdCBPUEVOX1NFTEVDVE9SID0gJy5vZmZjYW52YXMuc2hvdyc7XG4gIGNvbnN0IEVWRU5UX1NIT1ckMyA9IGBzaG93JHtFVkVOVF9LRVkkM31gO1xuICBjb25zdCBFVkVOVF9TSE9XTiQzID0gYHNob3duJHtFVkVOVF9LRVkkM31gO1xuICBjb25zdCBFVkVOVF9ISURFJDMgPSBgaGlkZSR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOJDMgPSBgaGlkZGVuJHtFVkVOVF9LRVkkM31gO1xuICBjb25zdCBFVkVOVF9SRVNJWkUgPSBgcmVzaXplJHtFVkVOVF9LRVkkM31gO1xuICBjb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSQxID0gYGNsaWNrJHtFVkVOVF9LRVkkM30ke0RBVEFfQVBJX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFJDEgPSAnW2RhdGEtYnMtdG9nZ2xlPVwib2ZmY2FudmFzXCJdJztcbiAgY29uc3QgRGVmYXVsdCQ1ID0ge1xuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGtleWJvYXJkOiB0cnVlLFxuICAgIHNjcm9sbDogZmFsc2VcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkNSA9IHtcbiAgICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICAgIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gICAgc2Nyb2xsOiAnYm9vbGVhbidcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBPZmZjYW52YXMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XG4gICAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpO1xuICAgICAgdGhpcy5fZm9jdXN0cmFwID0gdGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpO1xuICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkNTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ1O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQ2O1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpO1xuICAgIH1cbiAgICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1ckMywge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9KTtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKTtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkuaGlkZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORyQxKTtcbiAgICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCB8fCB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDMpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HJDEpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiQzLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUkMyk7XG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuYmx1cigpO1xuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfSElESU5HKTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKTtcbiAgICAgIGNvbnN0IGNvbXBsZXRlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckMywgQ0xBU1NfTkFNRV9ISURJTkcpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4kMyk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxiYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKTtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgICBjb25zdCBjbGlja0NhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9O1xuXG4gICAgICAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWVcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKTtcbiAgICAgIHJldHVybiBuZXcgQmFja2Ryb3Aoe1xuICAgICAgICBjbGFzc05hbWU6IENMQVNTX05BTUVfQkFDS0RST1AsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgaXNBbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgcm9vdEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgY2xpY2tDYWxsYmFjazogaXNWaXNpYmxlID8gY2xpY2tDYWxsYmFjayA6IG51bGxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBfaW5pdGlhbGl6ZUZvY3VzVHJhcCgpIHtcbiAgICAgIHJldHVybiBuZXcgRm9jdXNUcmFwKHtcbiAgICAgICAgdHJhcEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQxLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQxLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpO1xuICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4kMywgKCkgPT4ge1xuICAgICAgLy8gZm9jdXMgb24gdHJpZ2dlciB3aGVuIGl0IGlzIGNsb3NlZFxuICAgICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBhdm9pZCBjb25mbGljdCB3aGVuIGNsaWNraW5nIGEgdG9nZ2xlciBvZiBhbiBvZmZjYW52YXMsIHdoaWxlIGFub3RoZXIgaXMgb3BlblxuICAgIGNvbnN0IGFscmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKTtcbiAgICBpZiAoYWxyZWFkeU9wZW4gJiYgYWxyZWFkeU9wZW4gIT09IHRhcmdldCkge1xuICAgICAgT2ZmY2FudmFzLmdldEluc3RhbmNlKGFscmVhZHlPcGVuKS5oaWRlKCk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpO1xuICAgIGRhdGEudG9nZ2xlKHRoaXMpO1xuICB9KTtcbiAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSQyLCAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBTZWxlY3RvckVuZ2luZS5maW5kKE9QRU5fU0VMRUNUT1IpKSB7XG4gICAgICBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShzZWxlY3Rvcikuc2hvdygpO1xuICAgIH1cbiAgfSk7XG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSwgKCkgPT4ge1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKCdbYXJpYS1tb2RhbF1bY2xhc3MqPXNob3ddW2NsYXNzKj1vZmZjYW52YXMtXScpKSB7XG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgICBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KS5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgZW5hYmxlRGlzbWlzc1RyaWdnZXIoT2ZmY2FudmFzKTtcblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihPZmZjYW52YXMpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9zYW5pdGl6ZXIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNvbnN0IHVyaUF0dHJpYnV0ZXMgPSBuZXcgU2V0KFsnYmFja2dyb3VuZCcsICdjaXRlJywgJ2hyZWYnLCAnaXRlbXR5cGUnLCAnbG9uZ2Rlc2MnLCAncG9zdGVyJywgJ3NyYycsICd4bGluazpocmVmJ10pO1xuICBjb25zdCBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2k7XG5cbiAgLyoqXG4gICAqIEEgcGF0dGVybiB0aGF0IHJlY29nbml6ZXMgYSBjb21tb25seSB1c2VmdWwgc3Vic2V0IG9mIFVSTHMgdGhhdCBhcmUgc2FmZS5cbiAgICpcbiAgICogU2hvdXQtb3V0IHRvIEFuZ3VsYXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzEyLjIueC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICAgKi9cbiAgY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGV8c21zKTp8W14jJi86P10qKD86WyMvP118JCkpL2k7XG5cbiAgLyoqXG4gICAqIEEgcGF0dGVybiB0aGF0IG1hdGNoZXMgc2FmZSBkYXRhIFVSTHMuIE9ubHkgbWF0Y2hlcyBpbWFnZSwgdmlkZW8gYW5kIGF1ZGlvIHR5cGVzLlxuICAgKlxuICAgKiBTaG91dC1vdXQgdG8gQW5ndWxhciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvMTIuMi54L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gICAqL1xuICBjb25zdCBEQVRBX1VSTF9QQVRURVJOID0gL15kYXRhOig/OmltYWdlXFwvKD86Ym1wfGdpZnxqcGVnfGpwZ3xwbmd8dGlmZnx3ZWJwKXx2aWRlb1xcLyg/Om1wZWd8bXA0fG9nZ3x3ZWJtKXxhdWRpb1xcLyg/Om1wM3xvZ2F8b2dnfG9wdXMpKTtiYXNlNjQsW1xcZCsvYS16XSs9KiQvaTtcbiAgY29uc3QgYWxsb3dlZEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGUsIGFsbG93ZWRBdHRyaWJ1dGVMaXN0KSA9PiB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgaWYgKHVyaUF0dHJpYnV0ZXMuaGFzKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKFNBRkVfVVJMX1BBVFRFUk4udGVzdChhdHRyaWJ1dGUubm9kZVZhbHVlKSB8fCBEQVRBX1VSTF9QQVRURVJOLnRlc3QoYXR0cmlidXRlLm5vZGVWYWx1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYSByZWd1bGFyIGV4cHJlc3Npb24gdmFsaWRhdGVzIHRoZSBhdHRyaWJ1dGUuXG4gICAgcmV0dXJuIGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmZpbHRlcihhdHRyaWJ1dGVSZWdleCA9PiBhdHRyaWJ1dGVSZWdleCBpbnN0YW5jZW9mIFJlZ0V4cCkuc29tZShyZWdleCA9PiByZWdleC50ZXN0KGF0dHJpYnV0ZU5hbWUpKTtcbiAgfTtcbiAgY29uc3QgRGVmYXVsdEFsbG93bGlzdCA9IHtcbiAgICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAgICcqJzogWydjbGFzcycsICdkaXInLCAnaWQnLCAnbGFuZycsICdyb2xlJywgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTl0sXG4gICAgYTogWyd0YXJnZXQnLCAnaHJlZicsICd0aXRsZScsICdyZWwnXSxcbiAgICBhcmVhOiBbXSxcbiAgICBiOiBbXSxcbiAgICBicjogW10sXG4gICAgY29sOiBbXSxcbiAgICBjb2RlOiBbXSxcbiAgICBkaXY6IFtdLFxuICAgIGVtOiBbXSxcbiAgICBocjogW10sXG4gICAgaDE6IFtdLFxuICAgIGgyOiBbXSxcbiAgICBoMzogW10sXG4gICAgaDQ6IFtdLFxuICAgIGg1OiBbXSxcbiAgICBoNjogW10sXG4gICAgaTogW10sXG4gICAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICAgIGxpOiBbXSxcbiAgICBvbDogW10sXG4gICAgcDogW10sXG4gICAgcHJlOiBbXSxcbiAgICBzOiBbXSxcbiAgICBzbWFsbDogW10sXG4gICAgc3BhbjogW10sXG4gICAgc3ViOiBbXSxcbiAgICBzdXA6IFtdLFxuICAgIHN0cm9uZzogW10sXG4gICAgdTogW10sXG4gICAgdWw6IFtdXG4gIH07XG4gIGZ1bmN0aW9uIHNhbml0aXplSHRtbCh1bnNhZmVIdG1sLCBhbGxvd0xpc3QsIHNhbml0aXplRnVuY3Rpb24pIHtcbiAgICBpZiAoIXVuc2FmZUh0bWwubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdW5zYWZlSHRtbDtcbiAgICB9XG4gICAgaWYgKHNhbml0aXplRnVuY3Rpb24gJiYgdHlwZW9mIHNhbml0aXplRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzYW5pdGl6ZUZ1bmN0aW9uKHVuc2FmZUh0bWwpO1xuICAgIH1cbiAgICBjb25zdCBkb21QYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xuICAgIGNvbnN0IGNyZWF0ZWREb2N1bWVudCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcodW5zYWZlSHRtbCwgJ3RleHQvaHRtbCcpO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gW10uY29uY2F0KC4uLmNyZWF0ZWREb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSk7XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICBjb25zdCBlbGVtZW50TmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICghT2JqZWN0LmtleXMoYWxsb3dMaXN0KS5pbmNsdWRlcyhlbGVtZW50TmFtZSkpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCBhdHRyaWJ1dGVMaXN0ID0gW10uY29uY2F0KC4uLmVsZW1lbnQuYXR0cmlidXRlcyk7XG4gICAgICBjb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IFtdLmNvbmNhdChhbGxvd0xpc3RbJyonXSB8fCBbXSwgYWxsb3dMaXN0W2VsZW1lbnROYW1lXSB8fCBbXSk7XG4gICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVMaXN0KSB7XG4gICAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGFsbG93ZWRBdHRyaWJ1dGVzKSkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTDtcbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC90ZW1wbGF0ZS1mYWN0b3J5LmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkNSA9ICdUZW1wbGF0ZUZhY3RvcnknO1xuICBjb25zdCBEZWZhdWx0JDQgPSB7XG4gICAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICAgIGNvbnRlbnQ6IHt9LFxuICAgIC8vIHsgc2VsZWN0b3IgOiB0ZXh0ICwgIHNlbGVjdG9yMiA6IHRleHQyICwgfVxuICAgIGV4dHJhQ2xhc3M6ICcnLFxuICAgIGh0bWw6IGZhbHNlLFxuICAgIHNhbml0aXplOiB0cnVlLFxuICAgIHNhbml0aXplRm46IG51bGwsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjwvZGl2PidcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkNCA9IHtcbiAgICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuICAgIGNvbnRlbnQ6ICdvYmplY3QnLFxuICAgIGV4dHJhQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgaHRtbDogJ2Jvb2xlYW4nLFxuICAgIHNhbml0aXplOiAnYm9vbGVhbicsXG4gICAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gICAgdGVtcGxhdGU6ICdzdHJpbmcnXG4gIH07XG4gIGNvbnN0IERlZmF1bHRDb250ZW50VHlwZSA9IHtcbiAgICBlbnRyeTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbnxudWxsKScsXG4gICAgc2VsZWN0b3I6ICcoc3RyaW5nfGVsZW1lbnQpJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFRlbXBsYXRlRmFjdG9yeSBleHRlbmRzIENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDQ7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkNDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkNTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBnZXRDb250ZW50KCkge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fY29uZmlnLmNvbnRlbnQpLm1hcChjb25maWcgPT4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oY29uZmlnKSkuZmlsdGVyKEJvb2xlYW4pO1xuICAgIH1cbiAgICBoYXNDb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGVudCgpLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIGNoYW5nZUNvbnRlbnQoY29udGVudCkge1xuICAgICAgdGhpcy5fY2hlY2tDb250ZW50KGNvbnRlbnQpO1xuICAgICAgdGhpcy5fY29uZmlnLmNvbnRlbnQgPSB7XG4gICAgICAgIC4uLnRoaXMuX2NvbmZpZy5jb250ZW50LFxuICAgICAgICAuLi5jb250ZW50XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvSHRtbCgpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVtcGxhdGVXcmFwcGVyLmlubmVySFRNTCA9IHRoaXMuX21heWJlU2FuaXRpemUodGhpcy5fY29uZmlnLnRlbXBsYXRlKTtcbiAgICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCB0ZXh0XSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcuY29udGVudCkpIHtcbiAgICAgICAgdGhpcy5fc2V0Q29udGVudCh0ZW1wbGF0ZVdyYXBwZXIsIHRleHQsIHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGVtcGxhdGVXcmFwcGVyLmNoaWxkcmVuWzBdO1xuICAgICAgY29uc3QgZXh0cmFDbGFzcyA9IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5leHRyYUNsYXNzKTtcbiAgICAgIGlmIChleHRyYUNsYXNzKSB7XG4gICAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoLi4uZXh0cmFDbGFzcy5zcGxpdCgnICcpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX3R5cGVDaGVja0NvbmZpZyhjb25maWcpIHtcbiAgICAgIHN1cGVyLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX2NoZWNrQ29udGVudChjb25maWcuY29udGVudCk7XG4gICAgfVxuICAgIF9jaGVja0NvbnRlbnQoYXJnKSB7XG4gICAgICBmb3IgKGNvbnN0IFtzZWxlY3RvciwgY29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoYXJnKSkge1xuICAgICAgICBzdXBlci5fdHlwZUNoZWNrQ29uZmlnKHtcbiAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICBlbnRyeTogY29udGVudFxuICAgICAgICB9LCBEZWZhdWx0Q29udGVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBfc2V0Q29udGVudCh0ZW1wbGF0ZSwgY29udGVudCwgc2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IsIHRlbXBsYXRlKTtcbiAgICAgIGlmICghdGVtcGxhdGVFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPSB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihjb250ZW50KTtcbiAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpc0VsZW1lbnQkMShjb250ZW50KSkge1xuICAgICAgICB0aGlzLl9wdXRFbGVtZW50SW5UZW1wbGF0ZShnZXRFbGVtZW50KGNvbnRlbnQpLCB0ZW1wbGF0ZUVsZW1lbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgICAgdGVtcGxhdGVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX21heWJlU2FuaXRpemUoY29udGVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRlbXBsYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgfVxuICAgIF9tYXliZVNhbml0aXplKGFyZykge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zYW5pdGl6ZSA/IHNhbml0aXplSHRtbChhcmcsIHRoaXMuX2NvbmZpZy5hbGxvd0xpc3QsIHRoaXMuX2NvbmZpZy5zYW5pdGl6ZUZuKSA6IGFyZztcbiAgICB9XG4gICAgX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIGV4ZWN1dGUoYXJnLCBbdGhpc10pO1xuICAgIH1cbiAgICBfcHV0RWxlbWVudEluVGVtcGxhdGUoZWxlbWVudCwgdGVtcGxhdGVFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgICAgdGVtcGxhdGVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdG9vbHRpcC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDQgPSAndG9vbHRpcCc7XG4gIGNvbnN0IERJU0FMTE9XRURfQVRUUklCVVRFUyA9IG5ldyBTZXQoWydzYW5pdGl6ZScsICdhbGxvd0xpc3QnLCAnc2FuaXRpemVGbiddKTtcbiAgY29uc3QgQ0xBU1NfTkFNRV9GQURFJDIgPSAnZmFkZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfTU9EQUwgPSAnbW9kYWwnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckMiA9ICdzaG93JztcbiAgY29uc3QgU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiA9ICcudG9vbHRpcC1pbm5lcic7XG4gIGNvbnN0IFNFTEVDVE9SX01PREFMID0gYC4ke0NMQVNTX05BTUVfTU9EQUx9YDtcbiAgY29uc3QgRVZFTlRfTU9EQUxfSElERSA9ICdoaWRlLmJzLm1vZGFsJztcbiAgY29uc3QgVFJJR0dFUl9IT1ZFUiA9ICdob3Zlcic7XG4gIGNvbnN0IFRSSUdHRVJfRk9DVVMgPSAnZm9jdXMnO1xuICBjb25zdCBUUklHR0VSX0NMSUNLID0gJ2NsaWNrJztcbiAgY29uc3QgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJztcbiAgY29uc3QgRVZFTlRfSElERSQyID0gJ2hpZGUnO1xuICBjb25zdCBFVkVOVF9ISURERU4kMiA9ICdoaWRkZW4nO1xuICBjb25zdCBFVkVOVF9TSE9XJDIgPSAnc2hvdyc7XG4gIGNvbnN0IEVWRU5UX1NIT1dOJDIgPSAnc2hvd24nO1xuICBjb25zdCBFVkVOVF9JTlNFUlRFRCA9ICdpbnNlcnRlZCc7XG4gIGNvbnN0IEVWRU5UX0NMSUNLJDEgPSAnY2xpY2snO1xuICBjb25zdCBFVkVOVF9GT0NVU0lOJDEgPSAnZm9jdXNpbic7XG4gIGNvbnN0IEVWRU5UX0ZPQ1VTT1VUJDEgPSAnZm9jdXNvdXQnO1xuICBjb25zdCBFVkVOVF9NT1VTRUVOVEVSID0gJ21vdXNlZW50ZXInO1xuICBjb25zdCBFVkVOVF9NT1VTRUxFQVZFID0gJ21vdXNlbGVhdmUnO1xuICBjb25zdCBBdHRhY2htZW50TWFwID0ge1xuICAgIEFVVE86ICdhdXRvJyxcbiAgICBUT1A6ICd0b3AnLFxuICAgIFJJR0hUOiBpc1JUTCgpID8gJ2xlZnQnIDogJ3JpZ2h0JyxcbiAgICBCT1RUT006ICdib3R0b20nLFxuICAgIExFRlQ6IGlzUlRMKCkgPyAncmlnaHQnIDogJ2xlZnQnXG4gIH07XG4gIGNvbnN0IERlZmF1bHQkMyA9IHtcbiAgICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgICBjb250YWluZXI6IGZhbHNlLFxuICAgIGN1c3RvbUNsYXNzOiAnJyxcbiAgICBkZWxheTogMCxcbiAgICBmYWxsYmFja1BsYWNlbWVudHM6IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sXG4gICAgaHRtbDogZmFsc2UsXG4gICAgb2Zmc2V0OiBbMCwgMF0sXG4gICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICBwb3BwZXJDb25maWc6IG51bGwsXG4gICAgc2FuaXRpemU6IHRydWUsXG4gICAgc2FuaXRpemVGbjogbnVsbCxcbiAgICBzZWxlY3RvcjogZmFsc2UsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PicgKyAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj4nICsgJzwvZGl2PicsXG4gICAgdGl0bGU6ICcnLFxuICAgIHRyaWdnZXI6ICdob3ZlciBmb2N1cydcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkMyA9IHtcbiAgICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuICAgIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICAgIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gICAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgICBjdXN0b21DbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnRzOiAnYXJyYXknLFxuICAgIGh0bWw6ICdib29sZWFuJyxcbiAgICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknLFxuICAgIHNhbml0aXplOiAnYm9vbGVhbicsXG4gICAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gICAgc2VsZWN0b3I6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgICB0ZW1wbGF0ZTogJ3N0cmluZycsXG4gICAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgICB0cmlnZ2VyOiAnc3RyaW5nJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJyk7XG4gICAgICB9XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuXG4gICAgICAvLyBQcml2YXRlXG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fdGltZW91dCA9IDA7XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBudWxsO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9O1xuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcbiAgICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeSA9IG51bGw7XG4gICAgICB0aGlzLl9uZXdDb250ZW50ID0gbnVsbDtcblxuICAgICAgLy8gUHJvdGVjdGVkXG4gICAgICB0aGlzLnRpcCA9IG51bGw7XG4gICAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKTtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuX2ZpeFRpdGxlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDM7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkMztcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkNDtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBlbmFibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBkaXNhYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkO1xuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIXRoaXMuX2FjdGl2ZVRyaWdnZXIuY2xpY2s7XG4gICAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHRoaXMuX2xlYXZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VudGVyKCk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9NT0RBTCksIEVWRU5UX01PREFMX0hJREUsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpO1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJykpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKCk7XG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpO1xuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5faXNXaXRoQ29udGVudCgpICYmIHRoaXMuX2lzRW5hYmxlZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfU0hPVyQyKSk7XG4gICAgICBjb25zdCBzaGFkb3dSb290ID0gZmluZFNoYWRvd1Jvb3QodGhpcy5fZWxlbWVudCk7XG4gICAgICBjb25zdCBpc0luVGhlRG9tID0gKHNoYWRvd1Jvb3QgfHwgdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuY29udGFpbnModGhpcy5fZWxlbWVudCk7XG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB0b2RvIHY2IHJlbW92ZSB0aGlzIE9SIG1ha2UgaXQgb3B0aW9uYWxcbiAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKTtcbiAgICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRpcEVsZW1lbnQoKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwLmdldEF0dHJpYnV0ZSgnaWQnKSk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNvbnRhaW5lclxuICAgICAgfSA9IHRoaXMuX2NvbmZpZztcbiAgICAgIGlmICghdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0aGlzLnRpcCkpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0aXApO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9JTlNFUlRFRCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcG9wcGVyID0gdGhpcy5fY3JlYXRlUG9wcGVyKHRpcCk7XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckMik7XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfU0hPV04kMikpO1xuICAgICAgICBpZiAodGhpcy5faXNIb3ZlcmVkID09PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuX2xlYXZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNIb3ZlcmVkID0gZmFsc2U7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIHRoaXMuX2lzQW5pbWF0ZWQoKSk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9ISURFJDIpKTtcbiAgICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUaXBFbGVtZW50KCk7XG4gICAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckMik7XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9DTElDS10gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9GT0NVU10gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9IT1ZFUl0gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IG51bGw7IC8vIGl0IGlzIGEgdHJpY2sgdG8gc3VwcG9ydCBtYW51YWwgdHJpZ2dlcmluZ1xuXG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9ISURERU4kMikpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcm90ZWN0ZWRcbiAgICBfaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuX2dldFRpdGxlKCkpO1xuICAgIH1cbiAgICBfZ2V0VGlwRWxlbWVudCgpIHtcbiAgICAgIGlmICghdGhpcy50aXApIHtcbiAgICAgICAgdGhpcy50aXAgPSB0aGlzLl9jcmVhdGVUaXBFbGVtZW50KHRoaXMuX25ld0NvbnRlbnQgfHwgdGhpcy5fZ2V0Q29udGVudEZvclRlbXBsYXRlKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudGlwO1xuICAgIH1cbiAgICBfY3JlYXRlVGlwRWxlbWVudChjb250ZW50KSB7XG4gICAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUZW1wbGF0ZUZhY3RvcnkoY29udGVudCkudG9IdG1sKCk7XG5cbiAgICAgIC8vIHRvZG86IHJlbW92ZSB0aGlzIGNoZWNrIG9uIHY2XG4gICAgICBpZiAoIXRpcCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRkFERSQyLCBDTEFTU19OQU1FX1NIT1ckMik7XG4gICAgICAvLyB0b2RvOiBvbiB2NiB0aGUgZm9sbG93aW5nIGNhbiBiZSBhY2hpZXZlZCB3aXRoIENTUyBvbmx5XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZChgYnMtJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWF1dG9gKTtcbiAgICAgIGNvbnN0IHRpcElkID0gZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSkudG9TdHJpbmcoKTtcbiAgICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpO1xuICAgICAgaWYgKHRoaXMuX2lzQW5pbWF0ZWQoKSkge1xuICAgICAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUkMik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGlwO1xuICAgIH1cbiAgICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICAgIHRoaXMuX25ld0NvbnRlbnQgPSBjb250ZW50O1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKCk7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgICBfZ2V0VGVtcGxhdGVGYWN0b3J5KGNvbnRlbnQpIHtcbiAgICAgIGlmICh0aGlzLl90ZW1wbGF0ZUZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5LmNoYW5nZUNvbnRlbnQoY29udGVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkgPSBuZXcgVGVtcGxhdGVGYWN0b3J5KHtcbiAgICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgICAgLy8gdGhlIGBjb250ZW50YCB2YXIgaGFzIHRvIGJlIGFmdGVyIGB0aGlzLl9jb25maWdgXG4gICAgICAgICAgLy8gdG8gb3ZlcnJpZGUgY29uZmlnLmNvbnRlbnQgaW4gY2FzZSBvZiBwb3BvdmVyXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICBleHRyYUNsYXNzOiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3MpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlRmFjdG9yeTtcbiAgICB9XG4gICAgX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtTRUxFQ1RPUl9UT09MVElQX0lOTkVSXTogdGhpcy5fZ2V0VGl0bGUoKVxuICAgICAgfTtcbiAgICB9XG4gICAgX2dldFRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy50aXRsZSkgfHwgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZ2V0T3JDcmVhdGVJbnN0YW5jZShldmVudC5kZWxlZ2F0ZVRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgfVxuICAgIF9pc0FuaW1hdGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5hbmltYXRpb24gfHwgdGhpcy50aXAgJiYgdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQyKTtcbiAgICB9XG4gICAgX2lzU2hvd24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXAgJiYgdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVyQyKTtcbiAgICB9XG4gICAgX2NyZWF0ZVBvcHBlcih0aXApIHtcbiAgICAgIGNvbnN0IHBsYWNlbWVudCA9IGV4ZWN1dGUodGhpcy5fY29uZmlnLnBsYWNlbWVudCwgW3RoaXMsIHRpcCwgdGhpcy5fZWxlbWVudF0pO1xuICAgICAgY29uc3QgYXR0YWNobWVudCA9IEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldO1xuICAgICAgcmV0dXJuIGNyZWF0ZVBvcHBlcih0aGlzLl9lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSk7XG4gICAgfVxuICAgIF9nZXRPZmZzZXQoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG9mZnNldFxuICAgICAgfSA9IHRoaXMuX2NvbmZpZztcbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgfVxuICAgIF9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBleGVjdXRlKGFyZywgW3RoaXMuX2VsZW1lbnRdKTtcbiAgICB9XG4gICAgX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSB7XG4gICAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgICAgbW9kaWZpZXJzOiBbe1xuICAgICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IHRoaXMuX2NvbmZpZy5mYWxsYmFja1BsYWNlbWVudHNcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdhcnJvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZWxlbWVudDogYC4ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXJyb3dgXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJ3ByZVNldFBsYWNlbWVudCcsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBwaGFzZTogJ2JlZm9yZU1haW4nLFxuICAgICAgICAgIGZuOiBkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIFByZS1zZXQgUG9wcGVyJ3MgcGxhY2VtZW50IGF0dHJpYnV0ZSBpbiBvcmRlciB0byByZWFkIHRoZSBhcnJvdyBzaXplcyBwcm9wZXJseS5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgUG9wcGVyIG1peGVzIHVwIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGRpbWVuc2lvbnMgc2luY2UgdGhlIGluaXRpYWwgYXJyb3cgc3R5bGUgaXMgZm9yIHRvcCBwbGFjZW1lbnRcbiAgICAgICAgICAgIHRoaXMuX2dldFRpcEVsZW1lbnQoKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCcsIGRhdGEuc3RhdGUucGxhY2VtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuICAgICAgICAuLi5leGVjdXRlKHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcsIFtkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuICAgICAgfTtcbiAgICB9XG4gICAgX3NldExpc3RlbmVycygpIHtcbiAgICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5fY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKTtcbiAgICAgIGZvciAoY29uc3QgdHJpZ2dlciBvZiB0cmlnZ2Vycykge1xuICAgICAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9DTElDSyQxKSwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KTtcbiAgICAgICAgICAgIGNvbnRleHQudG9nZ2xlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPT0gVFJJR0dFUl9NQU5VQUwpIHtcbiAgICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/IHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX01PVVNFRU5URVIpIDogdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfRk9DVVNJTiQxKTtcbiAgICAgICAgICBjb25zdCBldmVudE91dCA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgPyB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9NT1VTRUxFQVZFKSA6IHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTT1VUJDEpO1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudEluLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpO1xuICAgICAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUl0gPSB0cnVlO1xuICAgICAgICAgICAgY29udGV4dC5fZW50ZXIoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRPdXQsIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCk7XG4gICAgICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW2V2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUl0gPSBjb250ZXh0Ll9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICAgICAgY29udGV4dC5fbGVhdmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTU9EQUwpLCBFVkVOVF9NT0RBTF9ISURFLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKTtcbiAgICB9XG4gICAgX2ZpeFRpdGxlKCkge1xuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICYmICF0aGlzLl9lbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRpdGxlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJywgdGl0bGUpOyAvLyBETyBOT1QgVVNFIElULiBJcyBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gICAgfVxuICAgIF9lbnRlcigpIHtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duKCkgfHwgdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWU7XG4gICAgICB0aGlzLl9zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkuc2hvdyk7XG4gICAgfVxuICAgIF9sZWF2ZSgpIHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5LmhpZGUpO1xuICAgIH1cbiAgICBfc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KTtcbiAgICB9XG4gICAgX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9hY3RpdmVUcmlnZ2VyKS5pbmNsdWRlcyh0cnVlKTtcbiAgICB9XG4gICAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGVzID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCk7XG4gICAgICBmb3IgKGNvbnN0IGRhdGFBdHRyaWJ1dGUgb2YgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaGFzKGRhdGFBdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyaWJ1dGVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25maWcgPSB7XG4gICAgICAgIC4uLmRhdGFBdHRyaWJ1dGVzLFxuICAgICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgICB9O1xuICAgICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnKTtcbiAgICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKTtcbiAgICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgICBjb25maWcuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UgPyBkb2N1bWVudC5ib2R5IDogZ2V0RWxlbWVudChjb25maWcuY29udGFpbmVyKTtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuICAgICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjb25maWcuY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmNvbnRlbnQgPSBjb25maWcuY29udGVudC50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgICAgY29uc3QgY29uZmlnID0ge307XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcpKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBjb25maWdba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25maWcuc2VsZWN0b3IgPSBmYWxzZTtcbiAgICAgIGNvbmZpZy50cmlnZ2VyID0gJ21hbnVhbCc7XG5cbiAgICAgIC8vIEluIHRoZSBmdXR1cmUgY2FuIGJlIHJlcGxhY2VkIHdpdGg6XG4gICAgICAvLyBjb25zdCBrZXlzV2l0aERpZmZlcmVudFZhbHVlcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykuZmlsdGVyKGVudHJ5ID0+IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtlbnRyeVswXV0gIT09IHRoaXMuX2NvbmZpZ1tlbnRyeVswXV0pXG4gICAgICAvLyBgT2JqZWN0LmZyb21FbnRyaWVzKGtleXNXaXRoRGlmZmVyZW50VmFsdWVzKWBcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9kaXNwb3NlUG9wcGVyKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICAgIHRoaXMudGlwLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLnRpcCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gVG9vbHRpcC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oVG9vbHRpcCk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBwb3BvdmVyLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkMyA9ICdwb3BvdmVyJztcbiAgY29uc3QgU0VMRUNUT1JfVElUTEUgPSAnLnBvcG92ZXItaGVhZGVyJztcbiAgY29uc3QgU0VMRUNUT1JfQ09OVEVOVCA9ICcucG9wb3Zlci1ib2R5JztcbiAgY29uc3QgRGVmYXVsdCQyID0ge1xuICAgIC4uLlRvb2x0aXAuRGVmYXVsdCxcbiAgICBjb250ZW50OiAnJyxcbiAgICBvZmZzZXQ6IFswLCA4XSxcbiAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvd1wiPjwvZGl2PicgKyAnPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPicgKyAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PicgKyAnPC9kaXY+JyxcbiAgICB0cmlnZ2VyOiAnY2xpY2snXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDIgPSB7XG4gICAgLi4uVG9vbHRpcC5EZWZhdWx0VHlwZSxcbiAgICBjb250ZW50OiAnKG51bGx8c3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkMjtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQyO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQzO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlc1xuICAgIF9pc1dpdGhDb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfZ2V0Q29udGVudEZvclRlbXBsYXRlKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW1NFTEVDVE9SX1RJVExFXTogdGhpcy5fZ2V0VGl0bGUoKSxcbiAgICAgICAgW1NFTEVDVE9SX0NPTlRFTlRdOiB0aGlzLl9nZXRDb250ZW50KClcbiAgICAgIH07XG4gICAgfVxuICAgIF9nZXRDb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jb250ZW50KTtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBQb3BvdmVyLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihQb3BvdmVyKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHNjcm9sbHNweS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDIgPSAnc2Nyb2xsc3B5JztcbiAgY29uc3QgREFUQV9LRVkkMiA9ICdicy5zY3JvbGxzcHknO1xuICBjb25zdCBFVkVOVF9LRVkkMiA9IGAuJHtEQVRBX0tFWSQyfWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBFVkVOVF9BQ1RJVkFURSA9IGBhY3RpdmF0ZSR7RVZFTlRfS0VZJDJ9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0sgPSBgY2xpY2ske0VWRU5UX0tFWSQyfWA7XG4gIGNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkkMSA9IGBsb2FkJHtFVkVOVF9LRVkkMn0ke0RBVEFfQVBJX0tFWX1gO1xuICBjb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0lURU0gPSAnZHJvcGRvd24taXRlbSc7XG4gIGNvbnN0IENMQVNTX05BTUVfQUNUSVZFJDEgPSAnYWN0aXZlJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9TUFkgPSAnW2RhdGEtYnMtc3B5PVwic2Nyb2xsXCJdJztcbiAgY29uc3QgU0VMRUNUT1JfVEFSR0VUX0xJTktTID0gJ1tocmVmXSc7XG4gIGNvbnN0IFNFTEVDVE9SX05BVl9MSVNUX0dST1VQID0gJy5uYXYsIC5saXN0LWdyb3VwJztcbiAgY29uc3QgU0VMRUNUT1JfTkFWX0xJTktTID0gJy5uYXYtbGluayc7XG4gIGNvbnN0IFNFTEVDVE9SX05BVl9JVEVNUyA9ICcubmF2LWl0ZW0nO1xuICBjb25zdCBTRUxFQ1RPUl9MSVNUX0lURU1TID0gJy5saXN0LWdyb3VwLWl0ZW0nO1xuICBjb25zdCBTRUxFQ1RPUl9MSU5LX0lURU1TID0gYCR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9OQVZfSVRFTVN9ID4gJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX0xJU1RfSVRFTVN9YDtcbiAgY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJztcbiAgY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFJDEgPSAnLmRyb3Bkb3duLXRvZ2dsZSc7XG4gIGNvbnN0IERlZmF1bHQkMSA9IHtcbiAgICBvZmZzZXQ6IG51bGwsXG4gICAgLy8gVE9ETzogdjYgQGRlcHJlY2F0ZWQsIGtlZXAgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnNcbiAgICByb290TWFyZ2luOiAnMHB4IDBweCAtMjUlJyxcbiAgICBzbW9vdGhTY3JvbGw6IGZhbHNlLFxuICAgIHRhcmdldDogbnVsbCxcbiAgICB0aHJlc2hvbGQ6IFswLjEsIDAuNSwgMV1cbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkMSA9IHtcbiAgICBvZmZzZXQ6ICcobnVtYmVyfG51bGwpJyxcbiAgICAvLyBUT0RPIHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gICAgcm9vdE1hcmdpbjogJ3N0cmluZycsXG4gICAgc21vb3RoU2Nyb2xsOiAnYm9vbGVhbicsXG4gICAgdGFyZ2V0OiAnZWxlbWVudCcsXG4gICAgdGhyZXNob2xkOiAnYXJyYXknXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgU2Nyb2xsU3B5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuXG4gICAgICAvLyB0aGlzLl9lbGVtZW50IGlzIHRoZSBvYnNlcnZhYmxlc0NvbnRhaW5lciBhbmQgY29uZmlnLnRhcmdldCB0aGUgbWVudSBsaW5rcyB3cmFwcGVyXG4gICAgICB0aGlzLl90YXJnZXRMaW5rcyA9IG5ldyBNYXAoKTtcbiAgICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtZW50KS5vdmVyZmxvd1kgPT09ICd2aXNpYmxlJyA/IG51bGwgOiB0aGlzLl9lbGVtZW50O1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIHRoaXMuX29ic2VydmVyID0gbnVsbDtcbiAgICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YSA9IHtcbiAgICAgICAgdmlzaWJsZUVudHJ5VG9wOiAwLFxuICAgICAgICBwYXJlbnRTY3JvbGxUb3A6IDBcbiAgICAgIH07XG4gICAgICB0aGlzLnJlZnJlc2goKTsgLy8gaW5pdGlhbGl6ZVxuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQxO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDE7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDI7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKTtcbiAgICAgIHRoaXMuX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCk7XG4gICAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSB0aGlzLl9nZXROZXdPYnNlcnZlcigpO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBzZWN0aW9uIG9mIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy52YWx1ZXMoKSkge1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIC8vIFRPRE86IG9uIHY2IHRhcmdldCBzaG91bGQgYmUgZ2l2ZW4gZXhwbGljaXRseSAmIHJlbW92ZSB0aGUge3RhcmdldDogJ3NzLXRhcmdldCd9IGNhc2VcbiAgICAgIGNvbmZpZy50YXJnZXQgPSBnZXRFbGVtZW50KGNvbmZpZy50YXJnZXQpIHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgICAgIC8vIFRPRE86IHY2IE9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnMuIFVzZSByb290TWFyZ2luIG9ubHlcbiAgICAgIGNvbmZpZy5yb290TWFyZ2luID0gY29uZmlnLm9mZnNldCA/IGAke2NvbmZpZy5vZmZzZXR9cHggMHB4IC0zMCVgIDogY29uZmlnLnJvb3RNYXJnaW47XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy50aHJlc2hvbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbmZpZy50aHJlc2hvbGQgPSBjb25maWcudGhyZXNob2xkLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKSB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zbW9vdGhTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB1bnJlZ2lzdGVyIGFueSBwcmV2aW91cyBsaXN0ZW5lcnNcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fY29uZmlnLnRhcmdldCwgRVZFTlRfQ0xJQ0spO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLLCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZVNlY3Rpb24gPSB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuZ2V0KGV2ZW50LnRhcmdldC5oYXNoKTtcbiAgICAgICAgaWYgKG9ic2VydmFibGVTZWN0aW9uKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCByb290ID0gdGhpcy5fcm9vdEVsZW1lbnQgfHwgd2luZG93O1xuICAgICAgICAgIGNvbnN0IGhlaWdodCA9IG9ic2VydmFibGVTZWN0aW9uLm9mZnNldFRvcCAtIHRoaXMuX2VsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgICAgIGlmIChyb290LnNjcm9sbFRvKSB7XG4gICAgICAgICAgICByb290LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgdG9wOiBoZWlnaHQsXG4gICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hyb21lIDYwIGRvZXNuJ3Qgc3VwcG9ydCBgc2Nyb2xsVG9gXG4gICAgICAgICAgcm9vdC5zY3JvbGxUb3AgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0TmV3T2JzZXJ2ZXIoKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICByb290OiB0aGlzLl9yb290RWxlbWVudCxcbiAgICAgICAgdGhyZXNob2xkOiB0aGlzLl9jb25maWcudGhyZXNob2xkLFxuICAgICAgICByb290TWFyZ2luOiB0aGlzLl9jb25maWcucm9vdE1hcmdpblxuICAgICAgfTtcbiAgICAgIHJldHVybiBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB0aGlzLl9vYnNlcnZlckNhbGxiYWNrKGVudHJpZXMpLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgbG9naWMgb2Ygc2VsZWN0aW9uXG4gICAgX29ic2VydmVyQ2FsbGJhY2soZW50cmllcykge1xuICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGVudHJ5ID0+IHRoaXMuX3RhcmdldExpbmtzLmdldChgIyR7ZW50cnkudGFyZ2V0LmlkfWApO1xuICAgICAgY29uc3QgYWN0aXZhdGUgPSBlbnRyeSA9PiB7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3AgPSBlbnRyeS50YXJnZXQub2Zmc2V0VG9wO1xuICAgICAgICB0aGlzLl9wcm9jZXNzKHRhcmdldEVsZW1lbnQoZW50cnkpKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBwYXJlbnRTY3JvbGxUb3AgPSAodGhpcy5fcm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5zY3JvbGxUb3A7XG4gICAgICBjb25zdCB1c2VyU2Nyb2xsc0Rvd24gPSBwYXJlbnRTY3JvbGxUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcDtcbiAgICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3AgPSBwYXJlbnRTY3JvbGxUb3A7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGw7XG4gICAgICAgICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0YXJnZXRFbGVtZW50KGVudHJ5KSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcCA+PSB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wO1xuICAgICAgICAvLyBpZiB3ZSBhcmUgc2Nyb2xsaW5nIGRvd24sIHBpY2sgdGhlIGJpZ2dlciBvZmZzZXRUb3BcbiAgICAgICAgaWYgKHVzZXJTY3JvbGxzRG93biAmJiBlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMpIHtcbiAgICAgICAgICBhY3RpdmF0ZShlbnRyeSk7XG4gICAgICAgICAgLy8gaWYgcGFyZW50IGlzbid0IHNjcm9sbGVkLCBsZXQncyBrZWVwIHRoZSBmaXJzdCB2aXNpYmxlIGl0ZW0sIGJyZWFraW5nIHRoZSBpdGVyYXRpb25cbiAgICAgICAgICBpZiAoIXBhcmVudFNjcm9sbFRvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHdlIGFyZSBzY3JvbGxpbmcgdXAsIHBpY2sgdGhlIHNtYWxsZXN0IG9mZnNldFRvcFxuICAgICAgICBpZiAoIXVzZXJTY3JvbGxzRG93biAmJiAhZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgICAgYWN0aXZhdGUoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIF9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKCkge1xuICAgICAgdGhpcy5fdGFyZ2V0TGlua3MgPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICBjb25zdCB0YXJnZXRMaW5rcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVEFSR0VUX0xJTktTLCB0aGlzLl9jb25maWcudGFyZ2V0KTtcbiAgICAgIGZvciAoY29uc3QgYW5jaG9yIG9mIHRhcmdldExpbmtzKSB7XG4gICAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBhbmNob3IgaGFzIGFuIGlkIGFuZCBpcyBub3QgZGlzYWJsZWRcbiAgICAgICAgaWYgKCFhbmNob3IuaGFzaCB8fCBpc0Rpc2FibGVkKGFuY2hvcikpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoYW5jaG9yLmhhc2gsIHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBvYnNlcnZhYmxlU2VjdGlvbiBleGlzdHMgJiBpcyB2aXNpYmxlXG4gICAgICAgIGlmIChpc1Zpc2libGUob2JzZXJ2YWJsZVNlY3Rpb24pKSB7XG4gICAgICAgICAgdGhpcy5fdGFyZ2V0TGlua3Muc2V0KGFuY2hvci5oYXNoLCBhbmNob3IpO1xuICAgICAgICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5zZXQoYW5jaG9yLmhhc2gsIG9ic2VydmFibGVTZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBfcHJvY2Vzcyh0YXJnZXQpIHtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRoaXMuX2NvbmZpZy50YXJnZXQpO1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMSk7XG4gICAgICB0aGlzLl9hY3RpdmF0ZVBhcmVudHModGFyZ2V0KTtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0FDVElWQVRFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRhcmdldFxuICAgICAgfSk7XG4gICAgfVxuICAgIF9hY3RpdmF0ZVBhcmVudHModGFyZ2V0KSB7XG4gICAgICAvLyBBY3RpdmF0ZSBkcm9wZG93biBwYXJlbnRzXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0lURU0pKSB7XG4gICAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFJDEsIHRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKSkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBsaXN0R3JvdXAgb2YgU2VsZWN0b3JFbmdpbmUucGFyZW50cyh0YXJnZXQsIFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKSkge1xuICAgICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAgIC8vIFdpdGggYm90aCA8dWw+IGFuZCA8bmF2PiBtYXJrdXAgYSBwYXJlbnQgaXMgdGhlIHByZXZpb3VzIHNpYmxpbmcgb2YgYW55IG5hdiBhbmNlc3RvclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIFNFTEVDVE9SX0xJTktfSVRFTVMpKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIF9jbGVhckFjdGl2ZUNsYXNzKHBhcmVudCkge1xuICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUkMSk7XG4gICAgICBjb25zdCBhY3RpdmVOb2RlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoYCR7U0VMRUNUT1JfVEFSR0VUX0xJTktTfS4ke0NMQVNTX05BTUVfQUNUSVZFJDF9YCwgcGFyZW50KTtcbiAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBhY3RpdmVOb2Rlcykge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUkMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gU2Nyb2xsU3B5LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSQxLCAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBzcHkgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1NQWSkpIHtcbiAgICAgIFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHNweSk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihTY3JvbGxTcHkpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdGFiLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkMSA9ICd0YWInO1xuICBjb25zdCBEQVRBX0tFWSQxID0gJ2JzLnRhYic7XG4gIGNvbnN0IEVWRU5UX0tFWSQxID0gYC4ke0RBVEFfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfSElERSQxID0gYGhpZGUke0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQxID0gYGhpZGRlbiR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfU0hPVyQxID0gYHNob3cke0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX1NIT1dOJDEgPSBgc2hvd24ke0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0JztcbiAgY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnO1xuICBjb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCc7XG4gIGNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bic7XG4gIGNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQxID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckMSA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfRFJPUERPV04gPSAnZHJvcGRvd24nO1xuICBjb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RST1BET1dOX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnO1xuICBjb25zdCBOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJzpub3QoLmRyb3Bkb3duLXRvZ2dsZSknO1xuICBjb25zdCBTRUxFQ1RPUl9UQUJfUEFORUwgPSAnLmxpc3QtZ3JvdXAsIC5uYXYsIFtyb2xlPVwidGFibGlzdFwiXSc7XG4gIGNvbnN0IFNFTEVDVE9SX09VVEVSID0gJy5uYXYtaXRlbSwgLmxpc3QtZ3JvdXAtaXRlbSc7XG4gIGNvbnN0IFNFTEVDVE9SX0lOTkVSID0gYC5uYXYtbGluayR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIC5saXN0LWdyb3VwLWl0ZW0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCBbcm9sZT1cInRhYlwiXSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX1gO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nOyAvLyB0b2RvOnY2OiBjb3VsZCBiZSBvbmx5IGB0YWJgXG4gIGNvbnN0IFNFTEVDVE9SX0lOTkVSX0VMRU0gPSBgJHtTRUxFQ1RPUl9JTk5FUn0sICR7U0VMRUNUT1JfREFUQV9UT0dHTEV9YDtcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFID0gYC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXWA7XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgVGFiIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgc3VwZXIoZWxlbWVudCk7XG4gICAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfVEFCX1BBTkVMKTtcbiAgICAgIGlmICghdGhpcy5fcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gdG9kbzogc2hvdWxkIFRocm93IGV4Y2VwdGlvbiBvbiB2NlxuICAgICAgICAvLyB0aHJvdyBuZXcgVHlwZUVycm9yKGAke2VsZW1lbnQub3V0ZXJIVE1MfSBoYXMgbm90IGEgdmFsaWQgcGFyZW50ICR7U0VMRUNUT1JfSU5ORVJfRUxFTX1gKVxuICAgICAgfVxuXG4gICAgICAvLyBTZXQgdXAgaW5pdGlhbCBhcmlhIGF0dHJpYnV0ZXNcbiAgICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzKHRoaXMuX3BhcmVudCwgdGhpcy5fZ2V0Q2hpbGRyZW4oKSk7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQxO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHNob3coKSB7XG4gICAgICAvLyBTaG93cyB0aGlzIGVsZW0gYW5kIGRlYWN0aXZhdGUgdGhlIGFjdGl2ZSBzaWJsaW5nIGlmIGV4aXN0c1xuICAgICAgY29uc3QgaW5uZXJFbGVtID0gdGhpcy5fZWxlbWVudDtcbiAgICAgIGlmICh0aGlzLl9lbGVtSXNBY3RpdmUoaW5uZXJFbGVtKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFNlYXJjaCBmb3IgYWN0aXZlIHRhYiBvbiBzYW1lIHBhcmVudCB0byBkZWFjdGl2YXRlIGl0XG4gICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLl9nZXRBY3RpdmVFbGVtKCk7XG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBhY3RpdmUgPyBFdmVudEhhbmRsZXIudHJpZ2dlcihhY3RpdmUsIEVWRU5UX0hJREUkMSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBpbm5lckVsZW1cbiAgICAgIH0pIDogbnVsbDtcbiAgICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKGlubmVyRWxlbSwgRVZFTlRfU0hPVyQxLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGFjdGl2ZVxuICAgICAgfSk7XG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgaGlkZUV2ZW50ICYmIGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2RlYWN0aXZhdGUoYWN0aXZlLCBpbm5lckVsZW0pO1xuICAgICAgdGhpcy5fYWN0aXZhdGUoaW5uZXJFbGVtLCBhY3RpdmUpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpO1xuICAgICAgdGhpcy5fYWN0aXZhdGUoU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSk7IC8vIFNlYXJjaCBhbmQgYWN0aXZhdGUvc2hvdyB0aGUgcHJvcGVyIHNlY3Rpb25cblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckMSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCB0cnVlKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfU0hPV04kMSwge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRFbGVtXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQxKSk7XG4gICAgfVxuICAgIF9kZWFjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICAgIGVsZW1lbnQuYmx1cigpO1xuICAgICAgdGhpcy5fZGVhY3RpdmF0ZShTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKTsgLy8gU2VhcmNoIGFuZCBkZWFjdGl2YXRlIHRoZSBzaG93biBzZWN0aW9uIHRvb1xuXG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgIT09ICd0YWInKSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQxKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0hJRERFTiQxLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZEVsZW1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFJDEpKTtcbiAgICB9XG4gICAgX2tleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmICghW0FSUk9XX0xFRlRfS0VZLCBBUlJPV19SSUdIVF9LRVksIEFSUk9XX1VQX0tFWSwgQVJST1dfRE9XTl9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIHN0b3BQcm9wYWdhdGlvbi9wcmV2ZW50RGVmYXVsdCBib3RoIGFkZGVkIHRvIHN1cHBvcnQgdXAvZG93biBrZXlzIHdpdGhvdXQgc2Nyb2xsaW5nIHRoZSBwYWdlXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgaXNOZXh0ID0gW0FSUk9XX1JJR0hUX0tFWSwgQVJST1dfRE9XTl9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSk7XG4gICAgICBjb25zdCBuZXh0QWN0aXZlRWxlbWVudCA9IGdldE5leHRBY3RpdmVFbGVtZW50KHRoaXMuX2dldENoaWxkcmVuKCkuZmlsdGVyKGVsZW1lbnQgPT4gIWlzRGlzYWJsZWQoZWxlbWVudCkpLCBldmVudC50YXJnZXQsIGlzTmV4dCwgdHJ1ZSk7XG4gICAgICBpZiAobmV4dEFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQuZm9jdXMoe1xuICAgICAgICAgIHByZXZlbnRTY3JvbGw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKG5leHRBY3RpdmVFbGVtZW50KS5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICAgIF9nZXRDaGlsZHJlbigpIHtcbiAgICAgIC8vIGNvbGxlY3Rpb24gb2YgaW5uZXIgZWxlbWVudHNcbiAgICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lOTkVSX0VMRU0sIHRoaXMuX3BhcmVudCk7XG4gICAgfVxuICAgIF9nZXRBY3RpdmVFbGVtKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldENoaWxkcmVuKCkuZmluZChjaGlsZCA9PiB0aGlzLl9lbGVtSXNBY3RpdmUoY2hpbGQpKSB8fCBudWxsO1xuICAgIH1cbiAgICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXMocGFyZW50LCBjaGlsZHJlbikge1xuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMocGFyZW50LCAncm9sZScsICd0YWJsaXN0Jyk7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZChjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICAgIF9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpIHtcbiAgICAgIGNoaWxkID0gdGhpcy5fZ2V0SW5uZXJFbGVtZW50KGNoaWxkKTtcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKTtcbiAgICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChjaGlsZCk7XG4gICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBpc0FjdGl2ZSk7XG4gICAgICBpZiAob3V0ZXJFbGVtICE9PSBjaGlsZCkge1xuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhvdXRlckVsZW0sICdyb2xlJywgJ3ByZXNlbnRhdGlvbicpO1xuICAgICAgfVxuICAgICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhjaGlsZCwgJ3JvbGUnLCAndGFiJyk7XG5cbiAgICAgIC8vIHNldCBhdHRyaWJ1dGVzIHRvIHRoZSByZWxhdGVkIHBhbmVsIHRvb1xuICAgICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKTtcbiAgICB9XG4gICAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbChjaGlsZCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihjaGlsZCk7XG4gICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0YXJnZXQsICdyb2xlJywgJ3RhYnBhbmVsJyk7XG4gICAgICBpZiAoY2hpbGQuaWQpIHtcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAnYXJpYS1sYWJlbGxlZGJ5JywgYCR7Y2hpbGQuaWR9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIF90b2dnbGVEcm9wRG93bihlbGVtZW50LCBvcGVuKSB7XG4gICAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBpZiAoIW91dGVyRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfRFJPUERPV04pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRvZ2dsZSA9IChzZWxlY3RvciwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCBvdXRlckVsZW0pO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUsIG9wZW4pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgQ0xBU1NfTkFNRV9BQ1RJVkUpO1xuICAgICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX01FTlUsIENMQVNTX05BTUVfU0hPVyQxKTtcbiAgICAgIG91dGVyRWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBvcGVuKTtcbiAgICB9XG4gICAgX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2VsZW1Jc0FjdGl2ZShlbGVtKSB7XG4gICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpO1xuICAgIH1cblxuICAgIC8vIFRyeSB0byBnZXQgdGhlIGlubmVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtbGluaylcbiAgICBfZ2V0SW5uZXJFbGVtZW50KGVsZW0pIHtcbiAgICAgIHJldHVybiBlbGVtLm1hdGNoZXMoU0VMRUNUT1JfSU5ORVJfRUxFTSkgPyBlbGVtIDogU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTk5FUl9FTEVNLCBlbGVtKTtcbiAgICB9XG5cbiAgICAvLyBUcnkgdG8gZ2V0IHRoZSBvdXRlciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWl0ZW0pXG4gICAgX2dldE91dGVyRWxlbWVudChlbGVtKSB7XG4gICAgICByZXR1cm4gZWxlbS5jbG9zZXN0KFNFTEVDVE9SX09VVEVSKSB8fCBlbGVtO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykuc2hvdygpO1xuICB9KTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBvbiBmb2N1c1xuICAgKi9cbiAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSkpIHtcbiAgICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKFRhYik7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB0b2FzdC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FID0gJ3RvYXN0JztcbiAgY29uc3QgREFUQV9LRVkgPSAnYnMudG9hc3QnO1xuICBjb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YDtcbiAgY29uc3QgRVZFTlRfTU9VU0VPVkVSID0gYG1vdXNlb3ZlciR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFT1VUID0gYG1vdXNlb3V0JHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfRk9DVVNPVVQgPSBgZm9jdXNvdXQke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gO1xuICBjb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfSElERSA9ICdoaWRlJzsgLy8gQGRlcHJlY2F0ZWQgLSBrZXB0IGhlcmUgb25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZyc7XG4gIGNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAgIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICAgIGF1dG9oaWRlOiAnYm9vbGVhbicsXG4gICAgZGVsYXk6ICdudW1iZXInXG4gIH07XG4gIGNvbnN0IERlZmF1bHQgPSB7XG4gICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgIGF1dG9oaWRlOiB0cnVlLFxuICAgIGRlbGF5OiA1MDAwXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgVG9hc3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcbiAgICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NldExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUU7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgc2hvdygpIHtcbiAgICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpO1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpO1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSk7XG4gICAgICB9XG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORyk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKTtcbiAgICAgICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9ISURFKTsgLy8gQGRlcHJlY2F0ZWRcbiAgICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1csIENMQVNTX05BTUVfU0hPV0lORyk7XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgIGlmICghdGhpcy5pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSk7XG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJREUpOyAvLyBAZGVwcmVjYXRlZFxuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HLCBDTEFTU19OQU1FX1NIT1cpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpO1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbik7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICB0aGlzLl9jbGVhclRpbWVvdXQoKTtcbiAgICAgIGlmICh0aGlzLmlzU2hvd24oKSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKTtcbiAgICAgIH1cbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgaXNTaG93bigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcblxuICAgIF9tYXliZVNjaGVkdWxlSGlkZSgpIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLmF1dG9oaWRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uIHx8IHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheSk7XG4gICAgfVxuICAgIF9vbkludGVyYWN0aW9uKGV2ZW50LCBpc0ludGVyYWN0aW5nKSB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbW91c2VvdmVyJzpcbiAgICAgICAgY2FzZSAnbW91c2VvdXQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBpc0ludGVyYWN0aW5nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlICdmb2N1c2luJzpcbiAgICAgICAgY2FzZSAnZm9jdXNvdXQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24gPSBpc0ludGVyYWN0aW5nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzSW50ZXJhY3RpbmcpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZXZlbnQucmVsYXRlZFRhcmdldDtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50ID09PSBuZXh0RWxlbWVudCB8fCB0aGlzLl9lbGVtZW50LmNvbnRhaW5zKG5leHRFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpO1xuICAgIH1cbiAgICBfc2V0TGlzdGVuZXJzKCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1ZFUiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU09VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKTtcbiAgICB9XG4gICAgX2NsZWFyVGltZW91dCgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFRvYXN0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2NvbmZpZ10odGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBlbmFibGVEaXNtaXNzVHJpZ2dlcihUb2FzdCk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oVG9hc3QpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgaW5kZXgudW1kLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgY29uc3QgaW5kZXhfdW1kID0ge1xuICAgIEFsZXJ0LFxuICAgIEJ1dHRvbixcbiAgICBDYXJvdXNlbCxcbiAgICBDb2xsYXBzZSxcbiAgICBEcm9wZG93bixcbiAgICBNb2RhbCxcbiAgICBPZmZjYW52YXMsXG4gICAgUG9wb3ZlcixcbiAgICBTY3JvbGxTcHksXG4gICAgVGFiLFxuICAgIFRvYXN0LFxuICAgIFRvb2x0aXBcbiAgfTtcblxuICByZXR1cm4gaW5kZXhfdW1kO1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib290c3RyYXAuYnVuZGxlLmpzLm1hcFxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJfdHlwZW9mIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiZ2xvYmFsVGhpcyIsInNlbGYiLCJib290c3RyYXAiLCJfS0VZX1RPX0RJUkVDVElPTiIsIk1BWF9VSUQiLCJNSUxMSVNFQ09ORFNfTVVMVElQTElFUiIsIlRSQU5TSVRJT05fRU5EIiwicGFyc2VTZWxlY3RvciIsInNlbGVjdG9yIiwid2luZG93IiwiQ1NTIiwiZXNjYXBlIiwicmVwbGFjZSIsIm1hdGNoIiwiaWQiLCJjb25jYXQiLCJ0b1R5cGUiLCJvYmplY3QiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJ0b0xvd2VyQ2FzZSIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsIl93aW5kb3ckZ2V0Q29tcHV0ZWRTdCIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJmbG9hdFRyYW5zaXRpb25EZWxheSIsInNwbGl0IiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJpc0VsZW1lbnQkMSIsImpxdWVyeSIsIm5vZGVUeXBlIiwiZ2V0RWxlbWVudCIsImxlbmd0aCIsInF1ZXJ5U2VsZWN0b3IiLCJpc1Zpc2libGUiLCJnZXRDbGllbnRSZWN0cyIsImVsZW1lbnRJc1Zpc2libGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiY2xvc2VkRGV0YWlscyIsImNsb3Nlc3QiLCJzdW1tYXJ5IiwicGFyZW50Tm9kZSIsImlzRGlzYWJsZWQiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkaXNhYmxlZCIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsImZpbmRTaGFkb3dSb290IiwiZG9jdW1lbnRFbGVtZW50IiwiYXR0YWNoU2hhZG93IiwiZ2V0Um9vdE5vZGUiLCJyb290IiwiU2hhZG93Um9vdCIsIm5vb3AiLCJyZWZsb3ciLCJvZmZzZXRIZWlnaHQiLCJnZXRqUXVlcnkiLCJqUXVlcnkiLCJib2R5IiwiRE9NQ29udGVudExvYWRlZENhbGxiYWNrcyIsIm9uRE9NQ29udGVudExvYWRlZCIsImNhbGxiYWNrIiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaTIiLCJfRE9NQ29udGVudExvYWRlZENhbGwiLCJwdXNoIiwiaXNSVEwiLCJkaXIiLCJkZWZpbmVKUXVlcnlQbHVnaW4iLCJwbHVnaW4iLCIkIiwibmFtZSIsIk5BTUUiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJmbiIsImpRdWVyeUludGVyZmFjZSIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsImV4ZWN1dGUiLCJwb3NzaWJsZUNhbGxiYWNrIiwiYXJncyIsImRlZmF1bHRWYWx1ZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImV4ZWN1dGVBZnRlclRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uRWxlbWVudCIsIndhaXRGb3JUcmFuc2l0aW9uIiwiZHVyYXRpb25QYWRkaW5nIiwiZW11bGF0ZWREdXJhdGlvbiIsImNhbGxlZCIsImhhbmRsZXIiLCJfcmVmNiIsInRhcmdldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiZ2V0TmV4dEFjdGl2ZUVsZW1lbnQiLCJsaXN0IiwiYWN0aXZlRWxlbWVudCIsInNob3VsZEdldE5leHQiLCJpc0N5Y2xlQWxsb3dlZCIsImxpc3RMZW5ndGgiLCJpbmRleCIsImluZGV4T2YiLCJtYXgiLCJtaW4iLCJuYW1lc3BhY2VSZWdleCIsInN0cmlwTmFtZVJlZ2V4Iiwic3RyaXBVaWRSZWdleCIsImV2ZW50UmVnaXN0cnkiLCJ1aWRFdmVudCIsImN1c3RvbUV2ZW50cyIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwibmF0aXZlRXZlbnRzIiwiU2V0IiwibWFrZUV2ZW50VWlkIiwidWlkIiwiZ2V0RWxlbWVudEV2ZW50cyIsImJvb3RzdHJhcEhhbmRsZXIiLCJldmVudCIsImh5ZHJhdGVPYmoiLCJkZWxlZ2F0ZVRhcmdldCIsIm9uZU9mZiIsIkV2ZW50SGFuZGxlciIsIm9mZiIsInR5cGUiLCJib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlciIsImRvbUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJkb21FbGVtZW50IiwiZXJyIiwiZSIsImYiLCJmaW5kSGFuZGxlciIsImV2ZW50cyIsImNhbGxhYmxlIiwiZGVsZWdhdGlvblNlbGVjdG9yIiwidmFsdWVzIiwiZmluZCIsIm5vcm1hbGl6ZVBhcmFtZXRlcnMiLCJvcmlnaW5hbFR5cGVFdmVudCIsImRlbGVnYXRpb25GdW5jdGlvbiIsImlzRGVsZWdhdGVkIiwidHlwZUV2ZW50IiwiZ2V0VHlwZUV2ZW50IiwiaGFzIiwiYWRkSGFuZGxlciIsIl9ub3JtYWxpemVQYXJhbWV0ZXJzIiwiX25vcm1hbGl6ZVBhcmFtZXRlcnMyIiwiX3NsaWNlZFRvQXJyYXkiLCJ3cmFwRnVuY3Rpb24iLCJyZWxhdGVkVGFyZ2V0IiwiaGFuZGxlcnMiLCJwcmV2aW91c0Z1bmN0aW9uIiwicmVtb3ZlSGFuZGxlciIsIkJvb2xlYW4iLCJyZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMiLCJuYW1lc3BhY2UiLCJzdG9yZUVsZW1lbnRFdmVudCIsIl9pMyIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJoYW5kbGVyS2V5IiwiaW5jbHVkZXMiLCJvbiIsIm9uZSIsIl9ub3JtYWxpemVQYXJhbWV0ZXJzMyIsIl9ub3JtYWxpemVQYXJhbWV0ZXJzNCIsImluTmFtZXNwYWNlIiwiaXNOYW1lc3BhY2UiLCJzdGFydHNXaXRoIiwia2V5cyIsIl9pNCIsIl9PYmplY3Qka2V5cyIsImVsZW1lbnRFdmVudCIsInNsaWNlIiwiX2k1IiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJrZXlIYW5kbGVycyIsInRyaWdnZXIiLCJqUXVlcnlFdmVudCIsImJ1YmJsZXMiLCJuYXRpdmVEaXNwYXRjaCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZXZ0IiwiY2FuY2VsYWJsZSIsInByZXZlbnREZWZhdWx0Iiwib2JqIiwibWV0YSIsIl9sb29wMiIsIl9PYmplY3QkZW50cmllczMkX2kiLCJfT2JqZWN0JGVudHJpZXMzIiwiX2k2IiwiX3VudXNlZCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZ2V0IiwiZWxlbWVudE1hcCIsIk1hcCIsIkRhdGEiLCJzZXQiLCJpbnN0YW5jZSIsImluc3RhbmNlTWFwIiwic2l6ZSIsImNvbnNvbGUiLCJlcnJvciIsIkFycmF5IiwiZnJvbSIsInJlbW92ZSIsIm5vcm1hbGl6ZURhdGEiLCJKU09OIiwicGFyc2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJub3JtYWxpemVEYXRhS2V5IiwiY2hyIiwiTWFuaXB1bGF0b3IiLCJzZXREYXRhQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlRGF0YUF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImdldERhdGFBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsImJzS2V5cyIsImRhdGFzZXQiLCJmaWx0ZXIiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwicHVyZUtleSIsImNoYXJBdCIsImdldERhdGFBdHRyaWJ1dGUiLCJDb25maWciLCJfZ2V0Q29uZmlnIiwiY29uZmlnIiwiX21lcmdlQ29uZmlnT2JqIiwiX2NvbmZpZ0FmdGVyTWVyZ2UiLCJfdHlwZUNoZWNrQ29uZmlnIiwianNvbkNvbmZpZyIsIl9vYmplY3RTcHJlYWQiLCJjb25zdHJ1Y3RvciIsIkRlZmF1bHQiLCJjb25maWdUeXBlcyIsIkRlZmF1bHRUeXBlIiwiX2k3IiwiX09iamVjdCRlbnRyaWVzNCIsIl9PYmplY3QkZW50cmllczQkX2kiLCJwcm9wZXJ0eSIsImV4cGVjdGVkVHlwZXMiLCJ2YWx1ZVR5cGUiLCJSZWdFeHAiLCJ0ZXN0IiwiVHlwZUVycm9yIiwidG9VcHBlckNhc2UiLCJFcnJvciIsIlZFUlNJT04iLCJCYXNlQ29tcG9uZW50IiwiX0NvbmZpZyIsIl90aGlzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfZWxlbWVudCIsIl9jb25maWciLCJEQVRBX0tFWSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJkaXNwb3NlIiwiRVZFTlRfS0VZIiwiX2l0ZXJhdG9yMyIsImdldE93blByb3BlcnR5TmFtZXMiLCJfc3RlcDMiLCJwcm9wZXJ0eU5hbWUiLCJfcXVldWVDYWxsYmFjayIsImlzQW5pbWF0ZWQiLCJnZXRJbnN0YW5jZSIsImdldE9yQ3JlYXRlSW5zdGFuY2UiLCJldmVudE5hbWUiLCJnZXRTZWxlY3RvciIsImhyZWZBdHRyaWJ1dGUiLCJ0cmltIiwiU2VsZWN0b3JFbmdpbmUiLCJfcmVmNyIsIkVsZW1lbnQiLCJmaW5kT25lIiwiY2hpbGRyZW4iLCJfcmVmOCIsImNoaWxkIiwibWF0Y2hlcyIsInBhcmVudHMiLCJhbmNlc3RvciIsInByZXYiLCJwcmV2aW91cyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJuZXh0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZm9jdXNhYmxlQ2hpbGRyZW4iLCJmb2N1c2FibGVzIiwibWFwIiwiam9pbiIsImVsIiwiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsImdldEVsZW1lbnRGcm9tU2VsZWN0b3IiLCJnZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yIiwiZW5hYmxlRGlzbWlzc1RyaWdnZXIiLCJjb21wb25lbnQiLCJtZXRob2QiLCJjbGlja0V2ZW50IiwidGFnTmFtZSIsIk5BTUUkZiIsIkRBVEFfS0VZJGEiLCJFVkVOVF9LRVkkYiIsIkVWRU5UX0NMT1NFIiwiRVZFTlRfQ0xPU0VEIiwiQ0xBU1NfTkFNRV9GQURFJDUiLCJDTEFTU19OQU1FX1NIT1ckOCIsIkFsZXJ0IiwiX0Jhc2VDb21wb25lbnQiLCJfc3VwZXIyIiwiY2xvc2UiLCJfdGhpczIiLCJjbG9zZUV2ZW50IiwiX2Rlc3Ryb3lFbGVtZW50IiwiZWFjaCIsImRhdGEiLCJOQU1FJGUiLCJEQVRBX0tFWSQ5IiwiRVZFTlRfS0VZJGEiLCJEQVRBX0FQSV9LRVkkNiIsIkNMQVNTX05BTUVfQUNUSVZFJDMiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ1IiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNiIsIkJ1dHRvbiIsIl9CYXNlQ29tcG9uZW50MiIsIl9zdXBlcjMiLCJ0b2dnbGUiLCJidXR0b24iLCJOQU1FJGQiLCJFVkVOVF9LRVkkOSIsIkVWRU5UX1RPVUNIU1RBUlQiLCJFVkVOVF9UT1VDSE1PVkUiLCJFVkVOVF9UT1VDSEVORCIsIkVWRU5UX1BPSU5URVJET1dOIiwiRVZFTlRfUE9JTlRFUlVQIiwiUE9JTlRFUl9UWVBFX1RPVUNIIiwiUE9JTlRFUl9UWVBFX1BFTiIsIkNMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCIsIlNXSVBFX1RIUkVTSE9MRCIsIkRlZmF1bHQkYyIsImVuZENhbGxiYWNrIiwibGVmdENhbGxiYWNrIiwicmlnaHRDYWxsYmFjayIsIkRlZmF1bHRUeXBlJGMiLCJTd2lwZSIsIl9Db25maWcyIiwiX3N1cGVyNCIsIl90aGlzMyIsImlzU3VwcG9ydGVkIiwiX2RlbHRhWCIsIl9zdXBwb3J0UG9pbnRlckV2ZW50cyIsIlBvaW50ZXJFdmVudCIsIl9pbml0RXZlbnRzIiwiX3N0YXJ0IiwidG91Y2hlcyIsImNsaWVudFgiLCJfZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaCIsIl9lbmQiLCJfaGFuZGxlU3dpcGUiLCJfbW92ZSIsImFic0RlbHRhWCIsImFicyIsImRpcmVjdGlvbiIsIl90aGlzNCIsImFkZCIsInBvaW50ZXJUeXBlIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJOQU1FJGMiLCJEQVRBX0tFWSQ4IiwiRVZFTlRfS0VZJDgiLCJEQVRBX0FQSV9LRVkkNSIsIkFSUk9XX0xFRlRfS0VZJDEiLCJBUlJPV19SSUdIVF9LRVkkMSIsIlRPVUNIRVZFTlRfQ09NUEFUX1dBSVQiLCJPUkRFUl9ORVhUIiwiT1JERVJfUFJFViIsIkRJUkVDVElPTl9MRUZUIiwiRElSRUNUSU9OX1JJR0hUIiwiRVZFTlRfU0xJREUiLCJFVkVOVF9TTElEIiwiRVZFTlRfS0VZRE9XTiQxIiwiRVZFTlRfTU9VU0VFTlRFUiQxIiwiRVZFTlRfTU9VU0VMRUFWRSQxIiwiRVZFTlRfRFJBR19TVEFSVCIsIkVWRU5UX0xPQURfREFUQV9BUEkkMyIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJJDUiLCJDTEFTU19OQU1FX0NBUk9VU0VMIiwiQ0xBU1NfTkFNRV9BQ1RJVkUkMiIsIkNMQVNTX05BTUVfU0xJREUiLCJDTEFTU19OQU1FX0VORCIsIkNMQVNTX05BTUVfU1RBUlQiLCJDTEFTU19OQU1FX05FWFQiLCJDTEFTU19OQU1FX1BSRVYiLCJTRUxFQ1RPUl9BQ1RJVkUiLCJTRUxFQ1RPUl9JVEVNIiwiU0VMRUNUT1JfQUNUSVZFX0lURU0iLCJTRUxFQ1RPUl9JVEVNX0lNRyIsIlNFTEVDVE9SX0lORElDQVRPUlMiLCJTRUxFQ1RPUl9EQVRBX1NMSURFIiwiU0VMRUNUT1JfREFUQV9SSURFIiwiS0VZX1RPX0RJUkVDVElPTiIsIl9kZWZpbmVQcm9wZXJ0eSIsIkRlZmF1bHQkYiIsImludGVydmFsIiwia2V5Ym9hcmQiLCJwYXVzZSIsInJpZGUiLCJ0b3VjaCIsIndyYXAiLCJEZWZhdWx0VHlwZSRiIiwiQ2Fyb3VzZWwiLCJfQmFzZUNvbXBvbmVudDMiLCJfc3VwZXI1IiwiX3RoaXM1IiwiX2ludGVydmFsIiwiX2FjdGl2ZUVsZW1lbnQiLCJfaXNTbGlkaW5nIiwidG91Y2hUaW1lb3V0IiwiX3N3aXBlSGVscGVyIiwiX2luZGljYXRvcnNFbGVtZW50IiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiY3ljbGUiLCJfc2xpZGUiLCJuZXh0V2hlblZpc2libGUiLCJoaWRkZW4iLCJfY2xlYXJJbnRlcnZhbCIsIl90aGlzNiIsIl91cGRhdGVJbnRlcnZhbCIsInNldEludGVydmFsIiwiX21heWJlRW5hYmxlQ3ljbGUiLCJfdGhpczciLCJ0byIsIl90aGlzOCIsIml0ZW1zIiwiX2dldEl0ZW1zIiwiYWN0aXZlSW5kZXgiLCJfZ2V0SXRlbUluZGV4IiwiX2dldEFjdGl2ZSIsIm9yZGVyIiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsImRlZmF1bHRJbnRlcnZhbCIsIl90aGlzOSIsIl9rZXlkb3duIiwiX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMiLCJfdGhpczEwIiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsImltZyIsImVuZENhbGxCYWNrIiwiY2xlYXJUaW1lb3V0Iiwic3dpcGVDb25maWciLCJfZGlyZWN0aW9uVG9PcmRlciIsIl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50IiwiYWN0aXZlSW5kaWNhdG9yIiwibmV3QWN0aXZlSW5kaWNhdG9yIiwiZWxlbWVudEludGVydmFsIiwicGFyc2VJbnQiLCJfdGhpczExIiwiaXNOZXh0IiwibmV4dEVsZW1lbnQiLCJuZXh0RWxlbWVudEluZGV4IiwidHJpZ2dlckV2ZW50IiwiX29yZGVyVG9EaXJlY3Rpb24iLCJzbGlkZUV2ZW50IiwiaXNDeWNsaW5nIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsImNvbXBsZXRlQ2FsbEJhY2siLCJfaXNBbmltYXRlZCIsImNsZWFySW50ZXJ2YWwiLCJjYXJvdXNlbCIsInNsaWRlSW5kZXgiLCJjYXJvdXNlbHMiLCJfaXRlcmF0b3I1IiwiX3N0ZXA1IiwiTkFNRSRiIiwiREFUQV9LRVkkNyIsIkVWRU5UX0tFWSQ3IiwiREFUQV9BUElfS0VZJDQiLCJFVkVOVF9TSE9XJDYiLCJFVkVOVF9TSE9XTiQ2IiwiRVZFTlRfSElERSQ2IiwiRVZFTlRfSElEREVOJDYiLCJFVkVOVF9DTElDS19EQVRBX0FQSSQ0IiwiQ0xBU1NfTkFNRV9TSE9XJDciLCJDTEFTU19OQU1FX0NPTExBUFNFIiwiQ0xBU1NfTkFNRV9DT0xMQVBTSU5HIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRUQiLCJDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiIsIkNMQVNTX05BTUVfSE9SSVpPTlRBTCIsIldJRFRIIiwiSEVJR0hUIiwiU0VMRUNUT1JfQUNUSVZFUyIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFJDQiLCJEZWZhdWx0JGEiLCJwYXJlbnQiLCJEZWZhdWx0VHlwZSRhIiwiQ29sbGFwc2UiLCJfQmFzZUNvbXBvbmVudDQiLCJfc3VwZXI2IiwiX3RoaXMxMiIsIl9pc1RyYW5zaXRpb25pbmciLCJfdHJpZ2dlckFycmF5IiwidG9nZ2xlTGlzdCIsIl9pdGVyYXRvcjYiLCJfc3RlcDYiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZvdW5kRWxlbWVudCIsIl9pbml0aWFsaXplQ2hpbGRyZW4iLCJfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiX2lzU2hvd24iLCJoaWRlIiwic2hvdyIsIl90aGlzMTMiLCJhY3RpdmVDaGlsZHJlbiIsIl9nZXRGaXJzdExldmVsQ2hpbGRyZW4iLCJzdGFydEV2ZW50IiwiX2l0ZXJhdG9yNyIsIl9zdGVwNyIsImFjdGl2ZUluc3RhbmNlIiwiZGltZW5zaW9uIiwiX2dldERpbWVuc2lvbiIsInN0eWxlIiwiY29tcGxldGUiLCJjYXBpdGFsaXplZERpbWVuc2lvbiIsInNjcm9sbFNpemUiLCJfdGhpczE0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiX2l0ZXJhdG9yOCIsIl9zdGVwOCIsIl9pdGVyYXRvcjkiLCJfc3RlcDkiLCJzZWxlY3RlZCIsInRyaWdnZXJBcnJheSIsImlzT3BlbiIsIl9pdGVyYXRvcjEwIiwiX3N0ZXAxMCIsIl9pdGVyYXRvcjExIiwiX3N0ZXAxMSIsInRvcCIsImJvdHRvbSIsInJpZ2h0IiwibGVmdCIsImF1dG8iLCJiYXNlUGxhY2VtZW50cyIsInN0YXJ0IiwiZW5kIiwiY2xpcHBpbmdQYXJlbnRzIiwidmlld3BvcnQiLCJwb3BwZXIiLCJyZWZlcmVuY2UiLCJ2YXJpYXRpb25QbGFjZW1lbnRzIiwicmVkdWNlIiwiYWNjIiwicGxhY2VtZW50IiwicGxhY2VtZW50cyIsImJlZm9yZVJlYWQiLCJyZWFkIiwiYWZ0ZXJSZWFkIiwiYmVmb3JlTWFpbiIsIm1haW4iLCJhZnRlck1haW4iLCJiZWZvcmVXcml0ZSIsIndyaXRlIiwiYWZ0ZXJXcml0ZSIsIm1vZGlmaWVyUGhhc2VzIiwiZ2V0Tm9kZU5hbWUiLCJub2RlTmFtZSIsImdldFdpbmRvdyIsIm5vZGUiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJpc0VsZW1lbnQiLCJPd25FbGVtZW50IiwiaXNIVE1MRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiaXNTaGFkb3dSb290IiwiYXBwbHlTdHlsZXMiLCJfcmVmIiwic3RhdGUiLCJlbGVtZW50cyIsImZvckVhY2giLCJzdHlsZXMiLCJhc3NpZ24iLCJlZmZlY3QkMiIsIl9yZWYyIiwiaW5pdGlhbFN0eWxlcyIsInBvc2l0aW9uIiwib3B0aW9ucyIsInN0cmF0ZWd5IiwibWFyZ2luIiwiYXJyb3ciLCJzdHlsZVByb3BlcnRpZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImF0dHJpYnV0ZSIsImFwcGx5U3R5bGVzJDEiLCJlbmFibGVkIiwicGhhc2UiLCJlZmZlY3QiLCJyZXF1aXJlcyIsImdldEJhc2VQbGFjZW1lbnQiLCJyb3VuZCIsImdldFVBU3RyaW5nIiwidWFEYXRhIiwidXNlckFnZW50RGF0YSIsImJyYW5kcyIsIml0ZW0iLCJicmFuZCIsInZlcnNpb24iLCJ1c2VyQWdlbnQiLCJpc0xheW91dFZpZXdwb3J0IiwiaW5jbHVkZVNjYWxlIiwiaXNGaXhlZFN0cmF0ZWd5IiwiY2xpZW50UmVjdCIsInNjYWxlWCIsInNjYWxlWSIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJ2aXN1YWxWaWV3cG9ydCIsImFkZFZpc3VhbE9mZnNldHMiLCJ4Iiwib2Zmc2V0TGVmdCIsInkiLCJvZmZzZXRUb3AiLCJnZXRMYXlvdXRSZWN0Iiwicm9vdE5vZGUiLCJpc1NhbWVOb2RlIiwiaG9zdCIsImdldENvbXB1dGVkU3R5bGUkMSIsImlzVGFibGVFbGVtZW50IiwiZ2V0RG9jdW1lbnRFbGVtZW50IiwiZ2V0UGFyZW50Tm9kZSIsImFzc2lnbmVkU2xvdCIsImdldFRydWVPZmZzZXRQYXJlbnQiLCJvZmZzZXRQYXJlbnQiLCJnZXRDb250YWluaW5nQmxvY2siLCJpc0ZpcmVmb3giLCJpc0lFIiwiZWxlbWVudENzcyIsImN1cnJlbnROb2RlIiwiY3NzIiwidHJhbnNmb3JtIiwicGVyc3BlY3RpdmUiLCJjb250YWluIiwid2lsbENoYW5nZSIsImdldE9mZnNldFBhcmVudCIsImdldE1haW5BeGlzRnJvbVBsYWNlbWVudCIsIndpdGhpbiIsIm1pbiQxIiwibWF4JDEiLCJ3aXRoaW5NYXhDbGFtcCIsInYiLCJnZXRGcmVzaFNpZGVPYmplY3QiLCJtZXJnZVBhZGRpbmdPYmplY3QiLCJwYWRkaW5nT2JqZWN0IiwiZXhwYW5kVG9IYXNoTWFwIiwiaGFzaE1hcCIsInRvUGFkZGluZ09iamVjdCIsInBhZGRpbmciLCJyZWN0cyIsIl9zdGF0ZSRtb2RpZmllcnNEYXRhJCIsImFycm93RWxlbWVudCIsInBvcHBlck9mZnNldHMiLCJtb2RpZmllcnNEYXRhIiwiYmFzZVBsYWNlbWVudCIsImF4aXMiLCJpc1ZlcnRpY2FsIiwibGVuIiwiYXJyb3dSZWN0IiwibWluUHJvcCIsIm1heFByb3AiLCJlbmREaWZmIiwic3RhcnREaWZmIiwiYXJyb3dPZmZzZXRQYXJlbnQiLCJjbGllbnRTaXplIiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJjZW50ZXJUb1JlZmVyZW5jZSIsImNlbnRlciIsIm9mZnNldCIsImF4aXNQcm9wIiwiY2VudGVyT2Zmc2V0IiwiZWZmZWN0JDEiLCJfb3B0aW9ucyRlbGVtZW50IiwiYXJyb3ckMSIsInJlcXVpcmVzSWZFeGlzdHMiLCJnZXRWYXJpYXRpb24iLCJ1bnNldFNpZGVzIiwicm91bmRPZmZzZXRzQnlEUFIiLCJ3aW4iLCJkcHIiLCJkZXZpY2VQaXhlbFJhdGlvIiwibWFwVG9TdHlsZXMiLCJfT2JqZWN0JGFzc2lnbjIiLCJwb3BwZXJSZWN0IiwidmFyaWF0aW9uIiwib2Zmc2V0cyIsImdwdUFjY2VsZXJhdGlvbiIsImFkYXB0aXZlIiwicm91bmRPZmZzZXRzIiwiaXNGaXhlZCIsIl9vZmZzZXRzJHgiLCJfb2Zmc2V0cyR5IiwiX3JlZjMiLCJoYXNYIiwiaGFzWSIsInNpZGVYIiwic2lkZVkiLCJoZWlnaHRQcm9wIiwid2lkdGhQcm9wIiwib2Zmc2V0WSIsIm9mZnNldFgiLCJjb21tb25TdHlsZXMiLCJfcmVmNCIsIl9PYmplY3QkYXNzaWduIiwiY29tcHV0ZVN0eWxlcyIsIl9yZWY1IiwiX29wdGlvbnMkZ3B1QWNjZWxlcmF0IiwiX29wdGlvbnMkYWRhcHRpdmUiLCJfb3B0aW9ucyRyb3VuZE9mZnNldHMiLCJjb21wdXRlU3R5bGVzJDEiLCJwYXNzaXZlIiwiX29wdGlvbnMkc2Nyb2xsIiwic2Nyb2xsIiwiX29wdGlvbnMkcmVzaXplIiwicmVzaXplIiwic2Nyb2xsUGFyZW50cyIsInNjcm9sbFBhcmVudCIsInVwZGF0ZSIsImV2ZW50TGlzdGVuZXJzIiwiaGFzaCQxIiwiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCJtYXRjaGVkIiwiaGFzaCIsImdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IiwiZ2V0V2luZG93U2Nyb2xsIiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJnZXRXaW5kb3dTY3JvbGxCYXJYIiwiZ2V0Vmlld3BvcnRSZWN0IiwiaHRtbCIsImxheW91dFZpZXdwb3J0IiwiZ2V0RG9jdW1lbnRSZWN0IiwiX2VsZW1lbnQkb3duZXJEb2N1bWVuIiwid2luU2Nyb2xsIiwic2Nyb2xsV2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJpc1Njcm9sbFBhcmVudCIsIl9nZXRDb21wdXRlZFN0eWxlIiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJnZXRTY3JvbGxQYXJlbnQiLCJsaXN0U2Nyb2xsUGFyZW50cyIsImlzQm9keSIsInVwZGF0ZWRMaXN0IiwicmVjdFRvQ2xpZW50UmVjdCIsInJlY3QiLCJnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZSIsImNsaXBwaW5nUGFyZW50IiwiZ2V0Q2xpcHBpbmdQYXJlbnRzIiwiY2FuRXNjYXBlQ2xpcHBpbmciLCJjbGlwcGVyRWxlbWVudCIsImdldENsaXBwaW5nUmVjdCIsImJvdW5kYXJ5Iiwicm9vdEJvdW5kYXJ5IiwibWFpbkNsaXBwaW5nUGFyZW50cyIsImZpcnN0Q2xpcHBpbmdQYXJlbnQiLCJjbGlwcGluZ1JlY3QiLCJhY2NSZWN0IiwiY29tcHV0ZU9mZnNldHMiLCJjb21tb25YIiwiY29tbW9uWSIsIm1haW5BeGlzIiwiZGV0ZWN0T3ZlcmZsb3ciLCJfb3B0aW9ucyIsIl9vcHRpb25zJHBsYWNlbWVudCIsIl9vcHRpb25zJHN0cmF0ZWd5IiwiX29wdGlvbnMkYm91bmRhcnkiLCJfb3B0aW9ucyRyb290Qm91bmRhcnkiLCJfb3B0aW9ucyRlbGVtZW50Q29udGUiLCJlbGVtZW50Q29udGV4dCIsIl9vcHRpb25zJGFsdEJvdW5kYXJ5IiwiYWx0Qm91bmRhcnkiLCJfb3B0aW9ucyRwYWRkaW5nIiwiYWx0Q29udGV4dCIsImNsaXBwaW5nQ2xpZW50UmVjdCIsImNvbnRleHRFbGVtZW50IiwicmVmZXJlbmNlQ2xpZW50UmVjdCIsInBvcHBlckNsaWVudFJlY3QiLCJlbGVtZW50Q2xpZW50UmVjdCIsIm92ZXJmbG93T2Zmc2V0cyIsIm9mZnNldERhdGEiLCJtdWx0aXBseSIsImNvbXB1dGVBdXRvUGxhY2VtZW50IiwiZmxpcFZhcmlhdGlvbnMiLCJfb3B0aW9ucyRhbGxvd2VkQXV0b1AiLCJhbGxvd2VkQXV0b1BsYWNlbWVudHMiLCJwbGFjZW1lbnRzJDEiLCJhbGxvd2VkUGxhY2VtZW50cyIsIm92ZXJmbG93cyIsInNvcnQiLCJhIiwiYiIsImdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzIiwib3Bwb3NpdGVQbGFjZW1lbnQiLCJmbGlwIiwiX3NraXAiLCJfb3B0aW9ucyRtYWluQXhpcyIsImNoZWNrTWFpbkF4aXMiLCJfb3B0aW9ucyRhbHRBeGlzIiwiYWx0QXhpcyIsImNoZWNrQWx0QXhpcyIsInNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyIsImZhbGxiYWNrUGxhY2VtZW50cyIsIl9vcHRpb25zJGZsaXBWYXJpYXRpbyIsInByZWZlcnJlZFBsYWNlbWVudCIsImlzQmFzZVBsYWNlbWVudCIsInJlZmVyZW5jZVJlY3QiLCJjaGVja3NNYXAiLCJtYWtlRmFsbGJhY2tDaGVja3MiLCJmaXJzdEZpdHRpbmdQbGFjZW1lbnQiLCJpIiwiX2Jhc2VQbGFjZW1lbnQiLCJpc1N0YXJ0VmFyaWF0aW9uIiwibWFpblZhcmlhdGlvblNpZGUiLCJhbHRWYXJpYXRpb25TaWRlIiwiY2hlY2tzIiwiZXZlcnkiLCJjaGVjayIsIm51bWJlck9mQ2hlY2tzIiwiX2xvb3AiLCJfaSIsImZpdHRpbmdQbGFjZW1lbnQiLCJfcmV0IiwicmVzZXQiLCJmbGlwJDEiLCJnZXRTaWRlT2Zmc2V0cyIsInByZXZlbnRlZE9mZnNldHMiLCJpc0FueVNpZGVGdWxseUNsaXBwZWQiLCJzb21lIiwic2lkZSIsInByZXZlbnRPdmVyZmxvdyIsInJlZmVyZW5jZU92ZXJmbG93IiwicG9wcGVyQWx0T3ZlcmZsb3ciLCJyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMiLCJwb3BwZXJFc2NhcGVPZmZzZXRzIiwiaXNSZWZlcmVuY2VIaWRkZW4iLCJoYXNQb3BwZXJFc2NhcGVkIiwiaGlkZSQxIiwiZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkiLCJpbnZlcnREaXN0YW5jZSIsInNraWRkaW5nIiwiZGlzdGFuY2UiLCJfb3B0aW9ucyRvZmZzZXQiLCJfZGF0YSRzdGF0ZSRwbGFjZW1lbnQiLCJvZmZzZXQkMSIsInBvcHBlck9mZnNldHMkMSIsImdldEFsdEF4aXMiLCJfb3B0aW9ucyR0ZXRoZXIiLCJ0ZXRoZXIiLCJfb3B0aW9ucyR0ZXRoZXJPZmZzZXQiLCJ0ZXRoZXJPZmZzZXQiLCJ0ZXRoZXJPZmZzZXRWYWx1ZSIsIm5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZSIsIm9mZnNldE1vZGlmaWVyU3RhdGUiLCJfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQiLCJtYWluU2lkZSIsImFsdFNpZGUiLCJhZGRpdGl2ZSIsIm1pbkxlbiIsIm1heExlbiIsImFycm93UGFkZGluZ09iamVjdCIsImFycm93UGFkZGluZ01pbiIsImFycm93UGFkZGluZ01heCIsImFycm93TGVuIiwibWluT2Zmc2V0IiwibWF4T2Zmc2V0IiwiY2xpZW50T2Zmc2V0Iiwib2Zmc2V0TW9kaWZpZXJWYWx1ZSIsInRldGhlck1pbiIsInRldGhlck1heCIsInByZXZlbnRlZE9mZnNldCIsIl9vZmZzZXRNb2RpZmllclN0YXRlJDIiLCJfbWFpblNpZGUiLCJfYWx0U2lkZSIsIl9vZmZzZXQiLCJfbGVuIiwiX21pbiIsIl9tYXgiLCJpc09yaWdpblNpZGUiLCJfb2Zmc2V0TW9kaWZpZXJWYWx1ZSIsIl90ZXRoZXJNaW4iLCJfdGV0aGVyTWF4IiwiX3ByZXZlbnRlZE9mZnNldCIsInByZXZlbnRPdmVyZmxvdyQxIiwiZ2V0SFRNTEVsZW1lbnRTY3JvbGwiLCJnZXROb2RlU2Nyb2xsIiwiaXNFbGVtZW50U2NhbGVkIiwiZ2V0Q29tcG9zaXRlUmVjdCIsImVsZW1lbnRPclZpcnR1YWxFbGVtZW50IiwiaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQiLCJvZmZzZXRQYXJlbnRJc1NjYWxlZCIsIm1vZGlmaWVycyIsInZpc2l0ZWQiLCJyZXN1bHQiLCJtb2RpZmllciIsImRlcCIsImRlcE1vZGlmaWVyIiwib3JkZXJNb2RpZmllcnMiLCJvcmRlcmVkTW9kaWZpZXJzIiwiZGVib3VuY2UiLCJwZW5kaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwibWVyZ2VCeU5hbWUiLCJtZXJnZWQiLCJjdXJyZW50IiwiZXhpc3RpbmciLCJERUZBVUxUX09QVElPTlMiLCJhcmVWYWxpZEVsZW1lbnRzIiwiX2tleSIsInBvcHBlckdlbmVyYXRvciIsImdlbmVyYXRvck9wdGlvbnMiLCJfZ2VuZXJhdG9yT3B0aW9ucyIsIl9nZW5lcmF0b3JPcHRpb25zJGRlZiIsImRlZmF1bHRNb2RpZmllcnMiLCJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyIiwiZGVmYXVsdE9wdGlvbnMiLCJjcmVhdGVQb3BwZXIiLCJlZmZlY3RDbGVhbnVwRm5zIiwiaXNEZXN0cm95ZWQiLCJzZXRPcHRpb25zIiwic2V0T3B0aW9uc0FjdGlvbiIsImNsZWFudXBNb2RpZmllckVmZmVjdHMiLCJtIiwicnVuTW9kaWZpZXJFZmZlY3RzIiwiZm9yY2VVcGRhdGUiLCJfc3RhdGUkZWxlbWVudHMiLCJfc3RhdGUkb3JkZXJlZE1vZGlmaWUiLCJfc3RhdGUkb3JkZXJlZE1vZGlmaWUyIiwiZGVzdHJveSIsIm9uRmlyc3RVcGRhdGUiLCJfcmVmMyRvcHRpb25zIiwiY2xlYW51cEZuIiwibm9vcEZuIiwiY3JlYXRlUG9wcGVyJDIiLCJkZWZhdWx0TW9kaWZpZXJzJDEiLCJjcmVhdGVQb3BwZXIkMSIsIlBvcHBlciIsImZyZWV6ZSIsIl9fcHJvdG9fXyIsImNyZWF0ZVBvcHBlckJhc2UiLCJjcmVhdGVQb3BwZXJMaXRlIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJOQU1FJGEiLCJEQVRBX0tFWSQ2IiwiRVZFTlRfS0VZJDYiLCJEQVRBX0FQSV9LRVkkMyIsIkVTQ0FQRV9LRVkkMiIsIlRBQl9LRVkkMSIsIkFSUk9XX1VQX0tFWSQxIiwiQVJST1dfRE9XTl9LRVkkMSIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIkVWRU5UX0hJREUkNSIsIkVWRU5UX0hJRERFTiQ1IiwiRVZFTlRfU0hPVyQ1IiwiRVZFTlRfU0hPV04kNSIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJJDMiLCJFVkVOVF9LRVlET1dOX0RBVEFfQVBJIiwiRVZFTlRfS0VZVVBfREFUQV9BUEkiLCJDTEFTU19OQU1FX1NIT1ckNiIsIkNMQVNTX05BTUVfRFJPUFVQIiwiQ0xBU1NfTkFNRV9EUk9QRU5EIiwiQ0xBU1NfTkFNRV9EUk9QU1RBUlQiLCJDTEFTU19OQU1FX0RST1BVUF9DRU5URVIiLCJDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUiIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFJDMiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTiIsIlNFTEVDVE9SX01FTlUiLCJTRUxFQ1RPUl9OQVZCQVIiLCJTRUxFQ1RPUl9OQVZCQVJfTkFWIiwiU0VMRUNUT1JfVklTSUJMRV9JVEVNUyIsIlBMQUNFTUVOVF9UT1AiLCJQTEFDRU1FTlRfVE9QRU5EIiwiUExBQ0VNRU5UX0JPVFRPTSIsIlBMQUNFTUVOVF9CT1RUT01FTkQiLCJQTEFDRU1FTlRfUklHSFQiLCJQTEFDRU1FTlRfTEVGVCIsIlBMQUNFTUVOVF9UT1BDRU5URVIiLCJQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSIiwiRGVmYXVsdCQ5IiwiYXV0b0Nsb3NlIiwiZGlzcGxheSIsInBvcHBlckNvbmZpZyIsIkRlZmF1bHRUeXBlJDkiLCJEcm9wZG93biIsIl9CYXNlQ29tcG9uZW50NSIsIl9zdXBlcjciLCJfdGhpczE1IiwiX3BvcHBlciIsIl9wYXJlbnQiLCJfbWVudSIsIl9pbk5hdmJhciIsIl9kZXRlY3ROYXZiYXIiLCJzaG93RXZlbnQiLCJfY3JlYXRlUG9wcGVyIiwiX3JlZjkiLCJfaXRlcmF0b3IxMiIsIl9zdGVwMTIiLCJmb2N1cyIsIl9jb21wbGV0ZUhpZGUiLCJoaWRlRXZlbnQiLCJfcmVmMTAiLCJfaXRlcmF0b3IxMyIsIl9zdGVwMTMiLCJyZWZlcmVuY2VFbGVtZW50IiwiX2dldFBvcHBlckNvbmZpZyIsIl9nZXRQbGFjZW1lbnQiLCJwYXJlbnREcm9wZG93biIsImlzRW5kIiwiX2dldE9mZnNldCIsIl90aGlzMTYiLCJwb3BwZXJEYXRhIiwiZGVmYXVsdEJzUG9wcGVyQ29uZmlnIiwiX3NlbGVjdE1lbnVJdGVtIiwiX3JlZjExIiwiY2xlYXJNZW51cyIsIm9wZW5Ub2dnbGVzIiwiX2l0ZXJhdG9yMTQiLCJfc3RlcDE0IiwiY29tcG9zZWRQYXRoIiwiaXNNZW51VGFyZ2V0IiwiZGF0YUFwaUtleWRvd25IYW5kbGVyIiwiaXNJbnB1dCIsImlzRXNjYXBlRXZlbnQiLCJpc1VwT3JEb3duRXZlbnQiLCJnZXRUb2dnbGVCdXR0b24iLCJzdG9wUHJvcGFnYXRpb24iLCJTRUxFQ1RPUl9GSVhFRF9DT05URU5UIiwiU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQiLCJQUk9QRVJUWV9QQURESU5HIiwiUFJPUEVSVFlfTUFSR0lOIiwiU2Nyb2xsQmFySGVscGVyIiwiZ2V0V2lkdGgiLCJkb2N1bWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsIl9kaXNhYmxlT3ZlckZsb3ciLCJfc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJjYWxjdWxhdGVkVmFsdWUiLCJfcmVzZXRFbGVtZW50QXR0cmlidXRlcyIsImlzT3ZlcmZsb3dpbmciLCJfc2F2ZUluaXRpYWxBdHRyaWJ1dGUiLCJzdHlsZVByb3BlcnR5IiwiX3RoaXMxNyIsInNjcm9sbGJhcldpZHRoIiwibWFuaXB1bGF0aW9uQ2FsbEJhY2siLCJzZXRQcm9wZXJ0eSIsIl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrIiwiYWN0dWFsVmFsdWUiLCJyZW1vdmVQcm9wZXJ0eSIsImNhbGxCYWNrIiwiX2l0ZXJhdG9yMTUiLCJfc3RlcDE1Iiwic2VsIiwiTkFNRSQ5IiwiQ0xBU1NfTkFNRV9GQURFJDQiLCJDTEFTU19OQU1FX1NIT1ckNSIsIkVWRU5UX01PVVNFRE9XTiIsIkRlZmF1bHQkOCIsImNsYXNzTmFtZSIsImNsaWNrQ2FsbGJhY2siLCJyb290RWxlbWVudCIsIkRlZmF1bHRUeXBlJDgiLCJCYWNrZHJvcCIsIl9Db25maWczIiwiX3N1cGVyOCIsIl90aGlzMTgiLCJfaXNBcHBlbmRlZCIsIl9hcHBlbmQiLCJfZ2V0RWxlbWVudCIsIl9lbXVsYXRlQW5pbWF0aW9uIiwiX3RoaXMxOSIsImJhY2tkcm9wIiwiY3JlYXRlRWxlbWVudCIsIl90aGlzMjAiLCJhcHBlbmQiLCJOQU1FJDgiLCJEQVRBX0tFWSQ1IiwiRVZFTlRfS0VZJDUiLCJFVkVOVF9GT0NVU0lOJDIiLCJFVkVOVF9LRVlET1dOX1RBQiIsIlRBQl9LRVkiLCJUQUJfTkFWX0ZPUldBUkQiLCJUQUJfTkFWX0JBQ0tXQVJEIiwiRGVmYXVsdCQ3IiwiYXV0b2ZvY3VzIiwidHJhcEVsZW1lbnQiLCJEZWZhdWx0VHlwZSQ3IiwiRm9jdXNUcmFwIiwiX0NvbmZpZzQiLCJfc3VwZXI5IiwiX3RoaXMyMSIsIl9pc0FjdGl2ZSIsIl9sYXN0VGFiTmF2RGlyZWN0aW9uIiwiYWN0aXZhdGUiLCJfdGhpczIyIiwiX2hhbmRsZUZvY3VzaW4iLCJfaGFuZGxlS2V5ZG93biIsImRlYWN0aXZhdGUiLCJzaGlmdEtleSIsIk5BTUUkNyIsIkRBVEFfS0VZJDQiLCJFVkVOVF9LRVkkNCIsIkRBVEFfQVBJX0tFWSQyIiwiRVNDQVBFX0tFWSQxIiwiRVZFTlRfSElERSQ0IiwiRVZFTlRfSElERV9QUkVWRU5URUQkMSIsIkVWRU5UX0hJRERFTiQ0IiwiRVZFTlRfU0hPVyQ0IiwiRVZFTlRfU0hPV04kNCIsIkVWRU5UX1JFU0laRSQxIiwiRVZFTlRfQ0xJQ0tfRElTTUlTUyIsIkVWRU5UX01PVVNFRE9XTl9ESVNNSVNTIiwiRVZFTlRfS0VZRE9XTl9ESVNNSVNTJDEiLCJFVkVOVF9DTElDS19EQVRBX0FQSSQyIiwiQ0xBU1NfTkFNRV9PUEVOIiwiQ0xBU1NfTkFNRV9GQURFJDMiLCJDTEFTU19OQU1FX1NIT1ckNCIsIkNMQVNTX05BTUVfU1RBVElDIiwiT1BFTl9TRUxFQ1RPUiQxIiwiU0VMRUNUT1JfRElBTE9HIiwiU0VMRUNUT1JfTU9EQUxfQk9EWSIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFJDIiLCJEZWZhdWx0JDYiLCJEZWZhdWx0VHlwZSQ2IiwiTW9kYWwiLCJfQmFzZUNvbXBvbmVudDYiLCJfc3VwZXIxMCIsIl90aGlzMjMiLCJfZGlhbG9nIiwiX2JhY2tkcm9wIiwiX2luaXRpYWxpemVCYWNrRHJvcCIsIl9mb2N1c3RyYXAiLCJfaW5pdGlhbGl6ZUZvY3VzVHJhcCIsIl9zY3JvbGxCYXIiLCJfdGhpczI0IiwiX2FkanVzdERpYWxvZyIsIl9zaG93RWxlbWVudCIsIl90aGlzMjUiLCJfaGlkZU1vZGFsIiwiX2k4IiwiX2FycjIiLCJodG1sRWxlbWVudCIsImhhbmRsZVVwZGF0ZSIsIl90aGlzMjYiLCJtb2RhbEJvZHkiLCJ0cmFuc2l0aW9uQ29tcGxldGUiLCJfdGhpczI3IiwiX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24iLCJldmVudDIiLCJfdGhpczI4IiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJfdGhpczI5IiwiaXNNb2RhbE92ZXJmbG93aW5nIiwiaW5pdGlhbE92ZXJmbG93WSIsImlzQm9keU92ZXJmbG93aW5nIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJfdGhpczMwIiwiYWxyZWFkeU9wZW4iLCJOQU1FJDYiLCJEQVRBX0tFWSQzIiwiRVZFTlRfS0VZJDMiLCJEQVRBX0FQSV9LRVkkMSIsIkVWRU5UX0xPQURfREFUQV9BUEkkMiIsIkVTQ0FQRV9LRVkiLCJDTEFTU19OQU1FX1NIT1ckMyIsIkNMQVNTX05BTUVfU0hPV0lORyQxIiwiQ0xBU1NfTkFNRV9ISURJTkciLCJDTEFTU19OQU1FX0JBQ0tEUk9QIiwiT1BFTl9TRUxFQ1RPUiIsIkVWRU5UX1NIT1ckMyIsIkVWRU5UX1NIT1dOJDMiLCJFVkVOVF9ISURFJDMiLCJFVkVOVF9ISURFX1BSRVZFTlRFRCIsIkVWRU5UX0hJRERFTiQzIiwiRVZFTlRfUkVTSVpFIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMSIsIkVWRU5UX0tFWURPV05fRElTTUlTUyIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFJDEiLCJEZWZhdWx0JDUiLCJEZWZhdWx0VHlwZSQ1IiwiT2ZmY2FudmFzIiwiX0Jhc2VDb21wb25lbnQ3IiwiX3N1cGVyMTEiLCJfdGhpczMxIiwiX3RoaXMzMiIsIl90aGlzMzMiLCJibHVyIiwiY29tcGxldGVDYWxsYmFjayIsIl90aGlzMzQiLCJfdGhpczM1IiwiX3RoaXMzNiIsIl9pdGVyYXRvcjE2IiwiX3N0ZXAxNiIsIl9pdGVyYXRvcjE3IiwiX3N0ZXAxNyIsInVyaUF0dHJpYnV0ZXMiLCJBUklBX0FUVFJJQlVURV9QQVRURVJOIiwiU0FGRV9VUkxfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJhbGxvd2VkQXR0cmlidXRlIiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJhdHRyaWJ1dGVOYW1lIiwibm9kZVZhbHVlIiwiYXR0cmlidXRlUmVnZXgiLCJyZWdleCIsIkRlZmF1bHRBbGxvd2xpc3QiLCJhcmVhIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImxpIiwib2wiLCJwIiwicHJlIiwic21hbGwiLCJzcGFuIiwic3ViIiwic3VwIiwic3Ryb25nIiwidSIsInVsIiwic2FuaXRpemVIdG1sIiwidW5zYWZlSHRtbCIsImFsbG93TGlzdCIsInNhbml0aXplRnVuY3Rpb24iLCJfcmVmMTIiLCJkb21QYXJzZXIiLCJET01QYXJzZXIiLCJjcmVhdGVkRG9jdW1lbnQiLCJwYXJzZUZyb21TdHJpbmciLCJfaXRlcmF0b3IxOCIsIl9zdGVwMTgiLCJfcmVmMTMiLCJlbGVtZW50TmFtZSIsImF0dHJpYnV0ZUxpc3QiLCJhbGxvd2VkQXR0cmlidXRlcyIsIl9pdGVyYXRvcjE5IiwiX3N0ZXAxOSIsImlubmVySFRNTCIsIk5BTUUkNSIsIkRlZmF1bHQkNCIsImNvbnRlbnQiLCJleHRyYUNsYXNzIiwic2FuaXRpemUiLCJzYW5pdGl6ZUZuIiwidGVtcGxhdGUiLCJEZWZhdWx0VHlwZSQ0IiwiRGVmYXVsdENvbnRlbnRUeXBlIiwiZW50cnkiLCJUZW1wbGF0ZUZhY3RvcnkiLCJfQ29uZmlnNSIsIl9zdXBlcjEyIiwiX3RoaXMzNyIsImdldENvbnRlbnQiLCJfdGhpczM4IiwiX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uIiwiaGFzQ29udGVudCIsImNoYW5nZUNvbnRlbnQiLCJfY2hlY2tDb250ZW50IiwidG9IdG1sIiwidGVtcGxhdGVXcmFwcGVyIiwiX21heWJlU2FuaXRpemUiLCJfaTkiLCJfT2JqZWN0JGVudHJpZXM1IiwiX09iamVjdCRlbnRyaWVzNSRfaSIsInRleHQiLCJfc2V0Q29udGVudCIsIl90ZW1wbGF0ZSRjbGFzc0xpc3QiLCJhcmciLCJfaTEwIiwiX09iamVjdCRlbnRyaWVzNiIsIl9PYmplY3QkZW50cmllczYkX2kiLCJ0ZW1wbGF0ZUVsZW1lbnQiLCJfcHV0RWxlbWVudEluVGVtcGxhdGUiLCJOQU1FJDQiLCJESVNBTExPV0VEX0FUVFJJQlVURVMiLCJDTEFTU19OQU1FX0ZBREUkMiIsIkNMQVNTX05BTUVfTU9EQUwiLCJDTEFTU19OQU1FX1NIT1ckMiIsIlNFTEVDVE9SX1RPT0xUSVBfSU5ORVIiLCJTRUxFQ1RPUl9NT0RBTCIsIkVWRU5UX01PREFMX0hJREUiLCJUUklHR0VSX0hPVkVSIiwiVFJJR0dFUl9GT0NVUyIsIlRSSUdHRVJfQ0xJQ0siLCJUUklHR0VSX01BTlVBTCIsIkVWRU5UX0hJREUkMiIsIkVWRU5UX0hJRERFTiQyIiwiRVZFTlRfU0hPVyQyIiwiRVZFTlRfU0hPV04kMiIsIkVWRU5UX0lOU0VSVEVEIiwiRVZFTlRfQ0xJQ0skMSIsIkVWRU5UX0ZPQ1VTSU4kMSIsIkVWRU5UX0ZPQ1VTT1VUJDEiLCJFVkVOVF9NT1VTRUVOVEVSIiwiRVZFTlRfTU9VU0VMRUFWRSIsIkF0dGFjaG1lbnRNYXAiLCJBVVRPIiwiVE9QIiwiUklHSFQiLCJCT1RUT00iLCJMRUZUIiwiRGVmYXVsdCQzIiwiYW5pbWF0aW9uIiwiY29udGFpbmVyIiwiY3VzdG9tQ2xhc3MiLCJkZWxheSIsInRpdGxlIiwiRGVmYXVsdFR5cGUkMyIsIlRvb2x0aXAiLCJfQmFzZUNvbXBvbmVudDgiLCJfc3VwZXIxMyIsIl90aGlzMzkiLCJfaXNFbmFibGVkIiwiX3RpbWVvdXQiLCJfaXNIb3ZlcmVkIiwiX2FjdGl2ZVRyaWdnZXIiLCJfdGVtcGxhdGVGYWN0b3J5IiwiX25ld0NvbnRlbnQiLCJ0aXAiLCJfc2V0TGlzdGVuZXJzIiwiX2ZpeFRpdGxlIiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJjbGljayIsIl9sZWF2ZSIsIl9lbnRlciIsIl9oaWRlTW9kYWxIYW5kbGVyIiwiX2Rpc3Bvc2VQb3BwZXIiLCJfdGhpczQwIiwiX2lzV2l0aENvbnRlbnQiLCJzaGFkb3dSb290IiwiaXNJblRoZURvbSIsIl9nZXRUaXBFbGVtZW50IiwiX3JlZjE0IiwiX2l0ZXJhdG9yMjAiLCJfc3RlcDIwIiwiX3RoaXM0MSIsIl9yZWYxNSIsIl9pdGVyYXRvcjIxIiwiX3N0ZXAyMSIsIl9pc1dpdGhBY3RpdmVUcmlnZ2VyIiwiX2dldFRpdGxlIiwiX2NyZWF0ZVRpcEVsZW1lbnQiLCJfZ2V0Q29udGVudEZvclRlbXBsYXRlIiwiX2dldFRlbXBsYXRlRmFjdG9yeSIsInRpcElkIiwic2V0Q29udGVudCIsIl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQiLCJfZ2V0RGVsZWdhdGVDb25maWciLCJhdHRhY2htZW50IiwiX3RoaXM0MiIsIl90aGlzNDMiLCJfdGhpczQ0IiwidHJpZ2dlcnMiLCJfaXRlcmF0b3IyMiIsIl9zdGVwMjIiLCJldmVudEluIiwiZXZlbnRPdXQiLCJfdGhpczQ1IiwiX3NldFRpbWVvdXQiLCJfdGhpczQ2IiwidGltZW91dCIsImRhdGFBdHRyaWJ1dGVzIiwiX2kxMSIsIl9PYmplY3Qka2V5czIiLCJkYXRhQXR0cmlidXRlIiwiX2kxMiIsIl9PYmplY3QkZW50cmllczciLCJfT2JqZWN0JGVudHJpZXM3JF9pIiwiTkFNRSQzIiwiU0VMRUNUT1JfVElUTEUiLCJTRUxFQ1RPUl9DT05URU5UIiwiRGVmYXVsdCQyIiwiRGVmYXVsdFR5cGUkMiIsIlBvcG92ZXIiLCJfVG9vbHRpcCIsIl9zdXBlcjE0IiwiX2dldENvbnRlbnQiLCJfcmVmMTciLCJOQU1FJDIiLCJEQVRBX0tFWSQyIiwiRVZFTlRfS0VZJDIiLCJEQVRBX0FQSV9LRVkiLCJFVkVOVF9BQ1RJVkFURSIsIkVWRU5UX0NMSUNLIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSQxIiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNIiwiQ0xBU1NfTkFNRV9BQ1RJVkUkMSIsIlNFTEVDVE9SX0RBVEFfU1BZIiwiU0VMRUNUT1JfVEFSR0VUX0xJTktTIiwiU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAiLCJTRUxFQ1RPUl9OQVZfTElOS1MiLCJTRUxFQ1RPUl9OQVZfSVRFTVMiLCJTRUxFQ1RPUl9MSVNUX0lURU1TIiwiU0VMRUNUT1JfTElOS19JVEVNUyIsIlNFTEVDVE9SX0RST1BET1dOIiwiU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFJDEiLCJEZWZhdWx0JDEiLCJyb290TWFyZ2luIiwic21vb3RoU2Nyb2xsIiwidGhyZXNob2xkIiwiRGVmYXVsdFR5cGUkMSIsIlNjcm9sbFNweSIsIl9CYXNlQ29tcG9uZW50OSIsIl9zdXBlcjE1IiwiX3RoaXM0NyIsIl90YXJnZXRMaW5rcyIsIl9vYnNlcnZhYmxlU2VjdGlvbnMiLCJfcm9vdEVsZW1lbnQiLCJfYWN0aXZlVGFyZ2V0IiwiX29ic2VydmVyIiwiX3ByZXZpb3VzU2Nyb2xsRGF0YSIsInZpc2libGVFbnRyeVRvcCIsInBhcmVudFNjcm9sbFRvcCIsInJlZnJlc2giLCJfaW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcyIsIl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCIsImRpc2Nvbm5lY3QiLCJfZ2V0TmV3T2JzZXJ2ZXIiLCJfaXRlcmF0b3IyMyIsIl9zdGVwMjMiLCJzZWN0aW9uIiwib2JzZXJ2ZSIsIl90aGlzNDgiLCJvYnNlcnZhYmxlU2VjdGlvbiIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJfdGhpczQ5IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJfb2JzZXJ2ZXJDYWxsYmFjayIsIl90aGlzNTAiLCJ0YXJnZXRFbGVtZW50IiwiX3Byb2Nlc3MiLCJ1c2VyU2Nyb2xsc0Rvd24iLCJfaXRlcmF0b3IyNCIsIl9zdGVwMjQiLCJpc0ludGVyc2VjdGluZyIsIl9jbGVhckFjdGl2ZUNsYXNzIiwiZW50cnlJc0xvd2VyVGhhblByZXZpb3VzIiwidGFyZ2V0TGlua3MiLCJfaXRlcmF0b3IyNSIsIl9zdGVwMjUiLCJhbmNob3IiLCJfYWN0aXZhdGVQYXJlbnRzIiwiX2l0ZXJhdG9yMjYiLCJfc3RlcDI2IiwibGlzdEdyb3VwIiwiX2l0ZXJhdG9yMjciLCJfc3RlcDI3IiwiYWN0aXZlTm9kZXMiLCJfaXRlcmF0b3IyOCIsIl9zdGVwMjgiLCJfaXRlcmF0b3IyOSIsIl9zdGVwMjkiLCJzcHkiLCJOQU1FJDEiLCJEQVRBX0tFWSQxIiwiRVZFTlRfS0VZJDEiLCJFVkVOVF9ISURFJDEiLCJFVkVOVF9ISURERU4kMSIsIkVWRU5UX1NIT1ckMSIsIkVWRU5UX1NIT1dOJDEiLCJFVkVOVF9DTElDS19EQVRBX0FQSSIsIkVWRU5UX0tFWURPV04iLCJFVkVOVF9MT0FEX0RBVEFfQVBJIiwiQVJST1dfTEVGVF9LRVkiLCJBUlJPV19SSUdIVF9LRVkiLCJBUlJPV19VUF9LRVkiLCJBUlJPV19ET1dOX0tFWSIsIkNMQVNTX05BTUVfQUNUSVZFIiwiQ0xBU1NfTkFNRV9GQURFJDEiLCJDTEFTU19OQU1FX1NIT1ckMSIsIkNMQVNTX0RST1BET1dOIiwiU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwiU0VMRUNUT1JfRFJPUERPV05fTUVOVSIsIk5PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUiLCJTRUxFQ1RPUl9UQUJfUEFORUwiLCJTRUxFQ1RPUl9PVVRFUiIsIlNFTEVDVE9SX0lOTkVSIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCJTRUxFQ1RPUl9JTk5FUl9FTEVNIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFIiwiVGFiIiwiX0Jhc2VDb21wb25lbnQxMCIsIl9zdXBlcjE2IiwiX3RoaXM1MSIsIl9zZXRJbml0aWFsQXR0cmlidXRlcyIsIl9nZXRDaGlsZHJlbiIsImlubmVyRWxlbSIsIl9lbGVtSXNBY3RpdmUiLCJhY3RpdmUiLCJfZ2V0QWN0aXZlRWxlbSIsIl9kZWFjdGl2YXRlIiwiX2FjdGl2YXRlIiwicmVsYXRlZEVsZW0iLCJfdGhpczUyIiwiX3RvZ2dsZURyb3BEb3duIiwiX3RoaXM1MyIsIm5leHRBY3RpdmVFbGVtZW50IiwicHJldmVudFNjcm9sbCIsIl90aGlzNTQiLCJfc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMiLCJfaXRlcmF0b3IzMCIsIl9zdGVwMzAiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkIiwiX2dldElubmVyRWxlbWVudCIsImlzQWN0aXZlIiwib3V0ZXJFbGVtIiwiX2dldE91dGVyRWxlbWVudCIsIl9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwiLCJvcGVuIiwiX2l0ZXJhdG9yMzEiLCJfc3RlcDMxIiwiRVZFTlRfTU9VU0VPVkVSIiwiRVZFTlRfTU9VU0VPVVQiLCJFVkVOVF9GT0NVU0lOIiwiRVZFTlRfRk9DVVNPVVQiLCJFVkVOVF9ISURFIiwiRVZFTlRfSElEREVOIiwiRVZFTlRfU0hPVyIsIkVWRU5UX1NIT1dOIiwiQ0xBU1NfTkFNRV9GQURFIiwiQ0xBU1NfTkFNRV9ISURFIiwiQ0xBU1NfTkFNRV9TSE9XIiwiQ0xBU1NfTkFNRV9TSE9XSU5HIiwiYXV0b2hpZGUiLCJUb2FzdCIsIl9CYXNlQ29tcG9uZW50MTEiLCJfc3VwZXIxNyIsIl90aGlzNTUiLCJfaGFzTW91c2VJbnRlcmFjdGlvbiIsIl9oYXNLZXlib2FyZEludGVyYWN0aW9uIiwiX3RoaXM1NiIsIl9jbGVhclRpbWVvdXQiLCJfbWF5YmVTY2hlZHVsZUhpZGUiLCJfdGhpczU3IiwiaXNTaG93biIsIl90aGlzNTgiLCJfb25JbnRlcmFjdGlvbiIsImlzSW50ZXJhY3RpbmciLCJfdGhpczU5IiwiaW5kZXhfdW1kIl0sInNvdXJjZVJvb3QiOiIifQ==