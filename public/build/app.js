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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBQztJQUFBLE9BQUFxekMsS0FBQTtFQUFBLEVBL0hpQi94QyxhQUFhO0VBa0lqQztBQUNGO0FBQ0E7RUFFRTZDLG9CQUFvQixDQUFDa3ZDLEtBQUssQ0FBQzs7RUFFM0I7QUFDRjtBQUNBOztFQUVFbitDLGtCQUFrQixDQUFDbStDLEtBQUssQ0FBQzs7RUFFekI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsSUFBTWUsU0FBUyxHQUFHO0lBQ2hCcnZDLEtBQUssRUFBTEEsS0FBSztJQUNMZ0IsTUFBTSxFQUFOQSxNQUFNO0lBQ053RixRQUFRLEVBQVJBLFFBQVE7SUFDUndGLFFBQVEsRUFBUkEsUUFBUTtJQUNSNGYsUUFBUSxFQUFSQSxRQUFRO0lBQ1I0SSxLQUFLLEVBQUxBLEtBQUs7SUFDTHlELFNBQVMsRUFBVEEsU0FBUztJQUNUNk0sT0FBTyxFQUFQQSxPQUFPO0lBQ1A0QixTQUFTLEVBQVRBLFNBQVM7SUFDVGdGLEdBQUcsRUFBSEEsR0FBRztJQUNINEMsS0FBSyxFQUFMQSxLQUFLO0lBQ0wzTixPQUFPLEVBQVBBO0VBQ0YsQ0FBQztFQUVELE9BQU8wTyxTQUFTO0FBRWxCLENBQUMsQ0FBRTs7Ozs7Ozs7Ozs7O0FDcHBNSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYm9vdHN0cmFwLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuLy8gaW1wb3J0IGJvb3RzdHJhcCBqc1xuaW1wb3J0ICcuL2pzL2Jvb3RzdHJhcC5idW5kbGUnO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvKiFcbiAgKiBCb290c3RyYXAgdjUuMy4wLWFscGhhMiAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcbiAgKiBDb3B5cmlnaHQgMjAxMS0yMDIzIFRoZSBCb290c3RyYXAgQXV0aG9ycyAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2dyYXBocy9jb250cmlidXRvcnMpXG4gICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5ib290c3RyYXAgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9pbmRleC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTUFYX1VJRCA9IDEwMDAwMDA7XG4gIGNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMDtcbiAgY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCc7XG5cbiAgLyoqXG4gICAqIFByb3Blcmx5IGVzY2FwZSBJRHMgc2VsZWN0b3JzIHRvIGhhbmRsZSB3ZWlyZCBJRHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBjb25zdCBwYXJzZVNlbGVjdG9yID0gc2VsZWN0b3IgPT4ge1xuICAgIGlmIChzZWxlY3RvciAmJiB3aW5kb3cuQ1NTICYmIHdpbmRvdy5DU1MuZXNjYXBlKSB7XG4gICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIG5lZWRzIGVzY2FwaW5nIHRvIGhhbmRsZSBJRHMgKGh0bWw1KykgY29udGFpbmluZyBmb3IgaW5zdGFuY2UgL1xuICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC8jKFteXFxzXCIjJ10rKS9nLCAobWF0Y2gsIGlkKSA9PiBgIyR7Q1NTLmVzY2FwZShpZCl9YCk7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfTtcblxuICAvLyBTaG91dC1vdXQgQW5ndXMgQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbiAgY29uc3QgdG9UeXBlID0gb2JqZWN0ID0+IHtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYCR7b2JqZWN0fWA7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIFV0aWwgQVBJXG4gICAqL1xuXG4gIGNvbnN0IGdldFVJRCA9IHByZWZpeCA9PiB7XG4gICAgZG8ge1xuICAgICAgcHJlZml4ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpO1xuICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpO1xuICAgIHJldHVybiBwcmVmaXg7XG4gIH07XG4gIGNvbnN0IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICAgIGxldCB7XG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICB0cmFuc2l0aW9uRGVsYXlcbiAgICB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KTtcblxuICAgIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdO1xuICAgIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdO1xuICAgIHJldHVybiAoTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVI7XG4gIH07XG4gIGNvbnN0IHRyaWdnZXJUcmFuc2l0aW9uRW5kID0gZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChUUkFOU0lUSU9OX0VORCkpO1xuICB9O1xuICBjb25zdCBpc0VsZW1lbnQkMSA9IG9iamVjdCA9PiB7XG4gICAgaWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmplY3QuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgb2JqZWN0ID0gb2JqZWN0WzBdO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdC5ub2RlVHlwZSAhPT0gJ3VuZGVmaW5lZCc7XG4gIH07XG4gIGNvbnN0IGdldEVsZW1lbnQgPSBvYmplY3QgPT4ge1xuICAgIC8vIGl0J3MgYSBqUXVlcnkgb2JqZWN0IG9yIGEgbm9kZSBlbGVtZW50XG4gICAgaWYgKGlzRWxlbWVudCQxKG9iamVjdCkpIHtcbiAgICAgIHJldHVybiBvYmplY3QuanF1ZXJ5ID8gb2JqZWN0WzBdIDogb2JqZWN0O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ3N0cmluZycgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcnNlU2VsZWN0b3Iob2JqZWN0KSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICBjb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcbiAgICBpZiAoIWlzRWxlbWVudCQxKGVsZW1lbnQpIHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudElzVmlzaWJsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAndmlzaWJsZSc7XG4gICAgLy8gSGFuZGxlIGBkZXRhaWxzYCBlbGVtZW50IGFzIGl0cyBjb250ZW50IG1heSBmYWxzaWUgYXBwZWFyIHZpc2libGUgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICBjb25zdCBjbG9zZWREZXRhaWxzID0gZWxlbWVudC5jbG9zZXN0KCdkZXRhaWxzOm5vdChbb3Blbl0pJyk7XG4gICAgaWYgKCFjbG9zZWREZXRhaWxzKSB7XG4gICAgICByZXR1cm4gZWxlbWVudElzVmlzaWJsZTtcbiAgICB9XG4gICAgaWYgKGNsb3NlZERldGFpbHMgIT09IGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBlbGVtZW50LmNsb3Nlc3QoJ3N1bW1hcnknKTtcbiAgICAgIGlmIChzdW1tYXJ5ICYmIHN1bW1hcnkucGFyZW50Tm9kZSAhPT0gY2xvc2VkRGV0YWlscykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoc3VtbWFyeSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50SXNWaXNpYmxlO1xuICB9O1xuICBjb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudCA9PiB7XG4gICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50LmRpc2FibGVkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gJ2ZhbHNlJztcbiAgfTtcbiAgY29uc3QgZmluZFNoYWRvd1Jvb3QgPSBlbGVtZW50ID0+IHtcbiAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICAgIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcbiAgICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gICAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgfTtcbiAgY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBUcmljayB0byByZXN0YXJ0IGFuIGVsZW1lbnQncyBhbmltYXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICpcbiAgICogQHNlZSBodHRwczovL3d3dy5jaGFyaXN0aGVvLmlvL2Jsb2cvMjAyMS8wMi9yZXN0YXJ0LWEtY3NzLWFuaW1hdGlvbi13aXRoLWphdmFzY3JpcHQvI3Jlc3RhcnRpbmctYS1jc3MtYW5pbWF0aW9uXG4gICAqL1xuICBjb25zdCByZWZsb3cgPSBlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50Lm9mZnNldEhlaWdodDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgfTtcblxuICBjb25zdCBnZXRqUXVlcnkgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5qUXVlcnkgJiYgIWRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLWJzLW5vLWpxdWVyeScpKSB7XG4gICAgICByZXR1cm4gd2luZG93LmpRdWVyeTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIGNvbnN0IERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MgPSBbXTtcbiAgY29uc3Qgb25ET01Db250ZW50TG9hZGVkID0gY2FsbGJhY2sgPT4ge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgIC8vIGFkZCBsaXN0ZW5lciBvbiB0aGUgZmlyc3QgY2FsbCB3aGVuIHRoZSBkb2N1bWVudCBpcyBpbiBsb2FkaW5nIHN0YXRlXG4gICAgICBpZiAoIURPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaXNSVEwgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09PSAncnRsJztcbiAgY29uc3QgZGVmaW5lSlF1ZXJ5UGx1Z2luID0gcGx1Z2luID0+IHtcbiAgICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgICAgY29uc3QgJCA9IGdldGpRdWVyeSgpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoJCkge1xuICAgICAgICBjb25zdCBuYW1lID0gcGx1Z2luLk5BTUU7XG4gICAgICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bbmFtZV07XG4gICAgICAgICQuZm5bbmFtZV0gPSBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlO1xuICAgICAgICAkLmZuW25hbWVdLkNvbnN0cnVjdG9yID0gcGx1Z2luO1xuICAgICAgICAkLmZuW25hbWVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAgICAgJC5mbltuYW1lXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgICAgICByZXR1cm4gcGx1Z2luLmpRdWVyeUludGVyZmFjZTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgZXhlY3V0ZSA9IChwb3NzaWJsZUNhbGxiYWNrLCBhcmdzID0gW10sIGRlZmF1bHRWYWx1ZSA9IHBvc3NpYmxlQ2FsbGJhY2spID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHBvc3NpYmxlQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBwb3NzaWJsZUNhbGxiYWNrKC4uLmFyZ3MpIDogZGVmYXVsdFZhbHVlO1xuICB9O1xuICBjb25zdCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uID0gKGNhbGxiYWNrLCB0cmFuc2l0aW9uRWxlbWVudCwgd2FpdEZvclRyYW5zaXRpb24gPSB0cnVlKSA9PiB7XG4gICAgaWYgKCF3YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDU7XG4gICAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRyYW5zaXRpb25FbGVtZW50KSArIGR1cmF0aW9uUGFkZGluZztcbiAgICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gICAgY29uc3QgaGFuZGxlciA9ICh7XG4gICAgICB0YXJnZXRcbiAgICB9KSA9PiB7XG4gICAgICBpZiAodGFyZ2V0ICE9PSB0cmFuc2l0aW9uRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgdHJhbnNpdGlvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcik7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHRyYW5zaXRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0sIGVtdWxhdGVkRHVyYXRpb24pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHByZXZpb3VzL25leHQgZWxlbWVudCBvZiBhIGxpc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXl9IGxpc3QgICAgVGhlIGxpc3Qgb2YgZWxlbWVudHNcbiAgICogQHBhcmFtIGFjdGl2ZUVsZW1lbnQgICBUaGUgYWN0aXZlIGVsZW1lbnRcbiAgICogQHBhcmFtIHNob3VsZEdldE5leHQgICBDaG9vc2UgdG8gZ2V0IG5leHQgb3IgcHJldmlvdXMgZWxlbWVudFxuICAgKiBAcGFyYW0gaXNDeWNsZUFsbG93ZWRcbiAgICogQHJldHVybiB7RWxlbWVudHxlbGVtfSBUaGUgcHJvcGVyIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0IGdldE5leHRBY3RpdmVFbGVtZW50ID0gKGxpc3QsIGFjdGl2ZUVsZW1lbnQsIHNob3VsZEdldE5leHQsIGlzQ3ljbGVBbGxvd2VkKSA9PiB7XG4gICAgY29uc3QgbGlzdExlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpbmRleCA9IGxpc3QuaW5kZXhPZihhY3RpdmVFbGVtZW50KTtcblxuICAgIC8vIGlmIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0IGluIHRoZSBsaXN0IHJldHVybiBhbiBlbGVtZW50XG4gICAgLy8gZGVwZW5kaW5nIG9uIHRoZSBkaXJlY3Rpb24gYW5kIGlmIGN5Y2xlIGlzIGFsbG93ZWRcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gIXNob3VsZEdldE5leHQgJiYgaXNDeWNsZUFsbG93ZWQgPyBsaXN0W2xpc3RMZW5ndGggLSAxXSA6IGxpc3RbMF07XG4gICAgfVxuICAgIGluZGV4ICs9IHNob3VsZEdldE5leHQgPyAxIDogLTE7XG4gICAgaWYgKGlzQ3ljbGVBbGxvd2VkKSB7XG4gICAgICBpbmRleCA9IChpbmRleCArIGxpc3RMZW5ndGgpICUgbGlzdExlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RbTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGxpc3RMZW5ndGggLSAxKSldO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgbmFtZXNwYWNlUmVnZXggPSAvW14uXSooPz1cXC4uKilcXC58LiovO1xuICBjb25zdCBzdHJpcE5hbWVSZWdleCA9IC9cXC4uKi87XG4gIGNvbnN0IHN0cmlwVWlkUmVnZXggPSAvOjpcXGQrJC87XG4gIGNvbnN0IGV2ZW50UmVnaXN0cnkgPSB7fTsgLy8gRXZlbnRzIHN0b3JhZ2VcbiAgbGV0IHVpZEV2ZW50ID0gMTtcbiAgY29uc3QgY3VzdG9tRXZlbnRzID0ge1xuICAgIG1vdXNlZW50ZXI6ICdtb3VzZW92ZXInLFxuICAgIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbiAgfTtcbiAgY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ21vdXNldXAnLCAnbW91c2Vkb3duJywgJ2NvbnRleHRtZW51JywgJ21vdXNld2hlZWwnLCAnRE9NTW91c2VTY3JvbGwnLCAnbW91c2VvdmVyJywgJ21vdXNlb3V0JywgJ21vdXNlbW92ZScsICdzZWxlY3RzdGFydCcsICdzZWxlY3RlbmQnLCAna2V5ZG93bicsICdrZXlwcmVzcycsICdrZXl1cCcsICdvcmllbnRhdGlvbmNoYW5nZScsICd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcsICdwb2ludGVyZG93bicsICdwb2ludGVybW92ZScsICdwb2ludGVydXAnLCAncG9pbnRlcmxlYXZlJywgJ3BvaW50ZXJjYW5jZWwnLCAnZ2VzdHVyZXN0YXJ0JywgJ2dlc3R1cmVjaGFuZ2UnLCAnZ2VzdHVyZWVuZCcsICdmb2N1cycsICdibHVyJywgJ2NoYW5nZScsICdyZXNldCcsICdzZWxlY3QnLCAnc3VibWl0JywgJ2ZvY3VzaW4nLCAnZm9jdXNvdXQnLCAnbG9hZCcsICd1bmxvYWQnLCAnYmVmb3JldW5sb2FkJywgJ3Jlc2l6ZScsICdtb3ZlJywgJ0RPTUNvbnRlbnRMb2FkZWQnLCAncmVhZHlzdGF0ZWNoYW5nZScsICdlcnJvcicsICdhYm9ydCcsICdzY3JvbGwnXSk7XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgbWV0aG9kc1xuICAgKi9cblxuICBmdW5jdGlvbiBtYWtlRXZlbnRVaWQoZWxlbWVudCwgdWlkKSB7XG4gICAgcmV0dXJuIHVpZCAmJiBgJHt1aWR9Ojoke3VpZEV2ZW50Kyt9YCB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kys7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KSB7XG4gICAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQudWlkRXZlbnQgPSB1aWQ7XG4gICAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9O1xuICAgIHJldHVybiBldmVudFJlZ2lzdHJ5W3VpZF07XG4gIH1cbiAgZnVuY3Rpb24gYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICBoeWRyYXRlT2JqKGV2ZW50LCB7XG4gICAgICAgIGRlbGVnYXRlVGFyZ2V0OiBlbGVtZW50XG4gICAgICB9KTtcbiAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIHNlbGVjdG9yLCBmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICBmb3IgKGxldCB7XG4gICAgICAgIHRhcmdldFxuICAgICAgfSA9IGV2ZW50OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGRvbUVsZW1lbnQgb2YgZG9tRWxlbWVudHMpIHtcbiAgICAgICAgICBpZiAoZG9tRWxlbWVudCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHlkcmF0ZU9iaihldmVudCwge1xuICAgICAgICAgICAgZGVsZWdhdGVUYXJnZXQ6IHRhcmdldFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBzZWxlY3RvciwgZm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZmluZEhhbmRsZXIoZXZlbnRzLCBjYWxsYWJsZSwgZGVsZWdhdGlvblNlbGVjdG9yID0gbnVsbCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKGV2ZW50cykuZmluZChldmVudCA9PiBldmVudC5jYWxsYWJsZSA9PT0gY2FsbGFibGUgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpO1xuICB9XG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGNvbnN0IGlzRGVsZWdhdGVkID0gdHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnO1xuICAgIC8vIHRvZG86IHRvb2x0aXAgcGFzc2VzIGBmYWxzZWAgaW5zdGVhZCBvZiBzZWxlY3Rvciwgc28gd2UgbmVlZCB0byBjaGVja1xuICAgIGNvbnN0IGNhbGxhYmxlID0gaXNEZWxlZ2F0ZWQgPyBkZWxlZ2F0aW9uRnVuY3Rpb24gOiBoYW5kbGVyIHx8IGRlbGVnYXRpb25GdW5jdGlvbjtcbiAgICBsZXQgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KG9yaWdpbmFsVHlwZUV2ZW50KTtcbiAgICBpZiAoIW5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KSkge1xuICAgICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnQ7XG4gICAgfVxuICAgIHJldHVybiBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgb25lT2ZmKSB7XG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pO1xuXG4gICAgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAgIC8vIHRoaXMgcHJldmVudHMgdGhlIGhhbmRsZXIgZnJvbSBiZWluZyBkaXNwYXRjaGVkIHRoZSBzYW1lIHdheSBhcyBtb3VzZW92ZXIgb3IgbW91c2VvdXQgZG9lc1xuICAgIGlmIChvcmlnaW5hbFR5cGVFdmVudCBpbiBjdXN0b21FdmVudHMpIHtcbiAgICAgIGNvbnN0IHdyYXBGdW5jdGlvbiA9IGZuID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCB8fCBldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSBldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiAhZXZlbnQuZGVsZWdhdGVUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgY2FsbGFibGUgPSB3cmFwRnVuY3Rpb24oY2FsbGFibGUpO1xuICAgIH1cbiAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpO1xuICAgIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVFdmVudF0gfHwgKGV2ZW50c1t0eXBlRXZlbnRdID0ge30pO1xuICAgIGNvbnN0IHByZXZpb3VzRnVuY3Rpb24gPSBmaW5kSGFuZGxlcihoYW5kbGVycywgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpO1xuICAgIGlmIChwcmV2aW91c0Z1bmN0aW9uKSB7XG4gICAgICBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiA9IHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmICYmIG9uZU9mZjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGNhbGxhYmxlLCBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpO1xuICAgIGNvbnN0IGZuID0gaXNEZWxlZ2F0ZWQgPyBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjYWxsYWJsZSkgOiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGNhbGxhYmxlKTtcbiAgICBmbi5kZWxlZ2F0aW9uU2VsZWN0b3IgPSBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsO1xuICAgIGZuLmNhbGxhYmxlID0gY2FsbGFibGU7XG4gICAgZm4ub25lT2ZmID0gb25lT2ZmO1xuICAgIGZuLnVpZEV2ZW50ID0gdWlkO1xuICAgIGhhbmRsZXJzW3VpZF0gPSBmbjtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgaXNEZWxlZ2F0ZWQpO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICAgIGNvbnN0IGZuID0gZmluZEhhbmRsZXIoZXZlbnRzW3R5cGVFdmVudF0sIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcik7XG4gICAgaWYgKCFmbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgQm9vbGVhbihkZWxlZ2F0aW9uU2VsZWN0b3IpKTtcbiAgICBkZWxldGUgZXZlbnRzW3R5cGVFdmVudF1bZm4udWlkRXZlbnRdO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgbmFtZXNwYWNlKSB7XG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fTtcbiAgICBmb3IgKGNvbnN0IFtoYW5kbGVyS2V5LCBldmVudF0gb2YgT2JqZWN0LmVudHJpZXMoc3RvcmVFbGVtZW50RXZlbnQpKSB7XG4gICAgICBpZiAoaGFuZGxlcktleS5pbmNsdWRlcyhuYW1lc3BhY2UpKSB7XG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRUeXBlRXZlbnQoZXZlbnQpIHtcbiAgICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gICAgZXZlbnQgPSBldmVudC5yZXBsYWNlKHN0cmlwTmFtZVJlZ2V4LCAnJyk7XG4gICAgcmV0dXJuIGN1c3RvbUV2ZW50c1tldmVudF0gfHwgZXZlbnQ7XG4gIH1cbiAgY29uc3QgRXZlbnRIYW5kbGVyID0ge1xuICAgIG9uKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgZmFsc2UpO1xuICAgIH0sXG4gICAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgdHJ1ZSk7XG4gICAgfSxcbiAgICBvZmYoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbik7XG4gICAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnQ7XG4gICAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpO1xuICAgICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fTtcbiAgICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpO1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gU2ltcGxlc3QgY2FzZTogaGFuZGxlciBpcyBwYXNzZWQsIHJlbW92ZSB0aGF0IGxpc3RlbmVyIE9OTFkuXG4gICAgICAgIGlmICghT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpc05hbWVzcGFjZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnRFdmVudCBvZiBPYmplY3Qua2V5cyhldmVudHMpKSB7XG4gICAgICAgICAgcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgZWxlbWVudEV2ZW50LCBvcmlnaW5hbFR5cGVFdmVudC5zbGljZSgxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgW2tleUhhbmRsZXJzLCBldmVudF0gb2YgT2JqZWN0LmVudHJpZXMoc3RvcmVFbGVtZW50RXZlbnQpKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKTtcbiAgICAgICAgaWYgKCFpbk5hbWVzcGFjZSB8fCBvcmlnaW5hbFR5cGVFdmVudC5pbmNsdWRlcyhoYW5kbGVyS2V5KSkge1xuICAgICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0cmlnZ2VyKGVsZW1lbnQsIGV2ZW50LCBhcmdzKSB7XG4gICAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKTtcbiAgICAgIGNvbnN0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChldmVudCk7XG4gICAgICBjb25zdCBpbk5hbWVzcGFjZSA9IGV2ZW50ICE9PSB0eXBlRXZlbnQ7XG4gICAgICBsZXQgalF1ZXJ5RXZlbnQgPSBudWxsO1xuICAgICAgbGV0IGJ1YmJsZXMgPSB0cnVlO1xuICAgICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZTtcbiAgICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XG4gICAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xuICAgICAgICBqUXVlcnlFdmVudCA9ICQuRXZlbnQoZXZlbnQsIGFyZ3MpO1xuICAgICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpO1xuICAgICAgICBidWJibGVzID0gIWpRdWVyeUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCk7XG4gICAgICAgIG5hdGl2ZURpc3BhdGNoID0gIWpRdWVyeUV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCk7XG4gICAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcbiAgICAgIH1cbiAgICAgIGxldCBldnQgPSBuZXcgRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBldnQgPSBoeWRyYXRlT2JqKGV2dCwgYXJncyk7XG4gICAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgIH1cbiAgICAgIGlmIChldnQuZGVmYXVsdFByZXZlbnRlZCAmJiBqUXVlcnlFdmVudCkge1xuICAgICAgICBqUXVlcnlFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV2dDtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIGh5ZHJhdGVPYmoob2JqLCBtZXRhID0ge30pIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXRhKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBkb20vZGF0YS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpO1xuICBjb25zdCBEYXRhID0ge1xuICAgIHNldChlbGVtZW50LCBrZXksIGluc3RhbmNlKSB7XG4gICAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIGVsZW1lbnRNYXAuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpO1xuXG4gICAgICAvLyBtYWtlIGl0IGNsZWFyIHdlIG9ubHkgd2FudCBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnRcbiAgICAgIC8vIGNhbiBiZSByZW1vdmVkIGxhdGVyIHdoZW4gbXVsdGlwbGUga2V5L2luc3RhbmNlcyBhcmUgZmluZSB0byBiZSB1c2VkXG4gICAgICBpZiAoIWluc3RhbmNlTWFwLmhhcyhrZXkpICYmIGluc3RhbmNlTWFwLnNpemUgIT09IDApIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5lcnJvcihgQm9vdHN0cmFwIGRvZXNuJ3QgYWxsb3cgbW9yZSB0aGFuIG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudC4gQm91bmQgaW5zdGFuY2U6ICR7QXJyYXkuZnJvbShpbnN0YW5jZU1hcC5rZXlzKCkpWzBdfS5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5zdGFuY2VNYXAuc2V0KGtleSwgaW5zdGFuY2UpO1xuICAgIH0sXG4gICAgZ2V0KGVsZW1lbnQsIGtleSkge1xuICAgICAgaWYgKGVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50TWFwLmdldChlbGVtZW50KS5nZXQoa2V5KSB8fCBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICByZW1vdmUoZWxlbWVudCwga2V5KSB7XG4gICAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudCk7XG4gICAgICBpbnN0YW5jZU1hcC5kZWxldGUoa2V5KTtcblxuICAgICAgLy8gZnJlZSB1cCBlbGVtZW50IHJlZmVyZW5jZXMgaWYgdGhlcmUgYXJlIG5vIGluc3RhbmNlcyBsZWZ0IGZvciBhbiBlbGVtZW50XG4gICAgICBpZiAoaW5zdGFuY2VNYXAuc2l6ZSA9PT0gMCkge1xuICAgICAgICBlbGVtZW50TWFwLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBkb20vbWFuaXB1bGF0b3IuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IE51bWJlcih2YWx1ZSkudG9TdHJpbmcoKSkge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICB9IGNhdGNoIChfdW51c2VkKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleS5yZXBsYWNlKC9bQS1aXS9nLCBjaHIgPT4gYC0ke2Noci50b0xvd2VyQ2FzZSgpfWApO1xuICB9XG4gIGNvbnN0IE1hbmlwdWxhdG9yID0ge1xuICAgIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCwgdmFsdWUpO1xuICAgIH0sXG4gICAgcmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApO1xuICAgIH0sXG4gICAgZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgIGNvbnN0IGJzS2V5cyA9IE9iamVjdC5rZXlzKGVsZW1lbnQuZGF0YXNldCkuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnYnMnKSAmJiAha2V5LnN0YXJ0c1dpdGgoJ2JzQ29uZmlnJykpO1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgYnNLZXlzKSB7XG4gICAgICAgIGxldCBwdXJlS2V5ID0ga2V5LnJlcGxhY2UoL15icy8sICcnKTtcbiAgICAgICAgcHVyZUtleSA9IHB1cmVLZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwdXJlS2V5LnNsaWNlKDEsIHB1cmVLZXkubGVuZ3RoKTtcbiAgICAgICAgYXR0cmlidXRlc1twdXJlS2V5XSA9IG5vcm1hbGl6ZURhdGEoZWxlbWVudC5kYXRhc2V0W2tleV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfSxcbiAgICBnZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZURhdGEoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvY29uZmlnLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBDb25maWcge1xuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBzdGF0aWMgbWV0aG9kIFwiTkFNRVwiLCBmb3IgZWFjaCBjb21wb25lbnQhJyk7XG4gICAgfVxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpO1xuICAgICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpO1xuICAgICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZyk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9tZXJnZUNvbmZpZ09iaihjb25maWcsIGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGpzb25Db25maWcgPSBpc0VsZW1lbnQkMShlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgJ2NvbmZpZycpIDoge307IC8vIHRyeSB0byBwYXJzZVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAgIC4uLih0eXBlb2YganNvbkNvbmZpZyA9PT0gJ29iamVjdCcgPyBqc29uQ29uZmlnIDoge30pLFxuICAgICAgICAuLi4oaXNFbGVtZW50JDEoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSA6IHt9KSxcbiAgICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgICB9O1xuICAgIH1cbiAgICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZywgY29uZmlnVHlwZXMgPSB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKSB7XG4gICAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgZXhwZWN0ZWRUeXBlc10gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnVHlwZXMpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gaXNFbGVtZW50JDEodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgYmFzZS1jb21wb25lbnQuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgVkVSU0lPTiA9ICc1LjMuMC1hbHBoYTInO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIGVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICBEYXRhLnNldCh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBkaXNwb3NlKCkge1xuICAgICAgRGF0YS5yZW1vdmUodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSk7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKTtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHlOYW1lIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIF9xdWV1ZUNhbGxiYWNrKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkID0gdHJ1ZSkge1xuICAgICAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbihjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZCk7XG4gICAgfVxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcsIHRoaXMuX2VsZW1lbnQpO1xuICAgICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpO1xuICAgICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZyk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgICByZXR1cm4gRGF0YS5nZXQoZ2V0RWxlbWVudChlbGVtZW50KSwgdGhpcy5EQVRBX0tFWSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIGNvbmZpZyA9IHt9KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZShlbGVtZW50KSB8fCBuZXcgdGhpcyhlbGVtZW50LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGwpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICAgIHJldHVybiBgYnMuJHt0aGlzLk5BTUV9YDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgICByZXR1cm4gYC4ke3RoaXMuREFUQV9LRVl9YDtcbiAgICB9XG4gICAgc3RhdGljIGV2ZW50TmFtZShuYW1lKSB7XG4gICAgICByZXR1cm4gYCR7bmFtZX0ke3RoaXMuRVZFTlRfS0VZfWA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgY29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKTtcbiAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICAgIGxldCBocmVmQXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgICAgLy8gVGhlIG9ubHkgdmFsaWQgY29udGVudCB0aGF0IGNvdWxkIGRvdWJsZSBhcyBhIHNlbGVjdG9yIGFyZSBJRHMgb3IgY2xhc3NlcyxcbiAgICAgIC8vIHNvIGV2ZXJ5dGhpbmcgc3RhcnRpbmcgd2l0aCBgI2Agb3IgYC5gLiBJZiBhIFwicmVhbFwiIFVSTCBpcyB1c2VkIGFzIHRoZSBzZWxlY3RvcixcbiAgICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzMyMjczXG4gICAgICBpZiAoIWhyZWZBdHRyaWJ1dGUgfHwgIWhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcuJykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgICAgaWYgKGhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgaHJlZkF0dHJpYnV0ZSA9IGAjJHtocmVmQXR0cmlidXRlLnNwbGl0KCcjJylbMV19YDtcbiAgICAgIH1cbiAgICAgIHNlbGVjdG9yID0gaHJlZkF0dHJpYnV0ZSAmJiBocmVmQXR0cmlidXRlICE9PSAnIycgPyBocmVmQXR0cmlidXRlLnRyaW0oKSA6IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfTtcbiAgY29uc3QgU2VsZWN0b3JFbmdpbmUgPSB7XG4gICAgZmluZChzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdCguLi5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKTtcbiAgICB9LFxuICAgIGZpbmRPbmUoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xuICAgIH0sXG4gICAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbikuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKTtcbiAgICB9LFxuICAgIHBhcmVudHMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgIGxldCBhbmNlc3RvciA9IGVsZW1lbnQucGFyZW50Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgICBwYXJlbnRzLnB1c2goYW5jZXN0b3IpO1xuICAgICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyZW50cztcbiAgICB9LFxuICAgIHByZXYoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIGxldCBwcmV2aW91cyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgIHdoaWxlIChwcmV2aW91cykge1xuICAgICAgICBpZiAocHJldmlvdXMubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gW3ByZXZpb3VzXTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gW107XG4gICAgfSxcbiAgICAvLyBUT0RPOiB0aGlzIGlzIG5vdyB1bnVzZWQ7IHJlbW92ZSBsYXRlciBhbG9uZyB3aXRoIHByZXYoKVxuICAgIG5leHQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIGxldCBuZXh0ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB3aGlsZSAobmV4dCkge1xuICAgICAgICBpZiAobmV4dC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBbbmV4dF07XG4gICAgICAgIH1cbiAgICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgZm9jdXNhYmxlQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgICAgY29uc3QgZm9jdXNhYmxlcyA9IFsnYScsICdidXR0b24nLCAnaW5wdXQnLCAndGV4dGFyZWEnLCAnc2VsZWN0JywgJ2RldGFpbHMnLCAnW3RhYmluZGV4XScsICdbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSddLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn06bm90KFt0YWJpbmRleF49XCItXCJdKWApLmpvaW4oJywnKTtcbiAgICAgIHJldHVybiB0aGlzLmZpbmQoZm9jdXNhYmxlcywgZWxlbWVudCkuZmlsdGVyKGVsID0+ICFpc0Rpc2FibGVkKGVsKSAmJiBpc1Zpc2libGUoZWwpKTtcbiAgICB9LFxuICAgIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IpIDogbnVsbDtcbiAgICB9LFxuICAgIGdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpIDogW107XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgY29uc3QgZW5hYmxlRGlzbWlzc1RyaWdnZXIgPSAoY29tcG9uZW50LCBtZXRob2QgPSAnaGlkZScpID0+IHtcbiAgICBjb25zdCBjbGlja0V2ZW50ID0gYGNsaWNrLmRpc21pc3Mke2NvbXBvbmVudC5FVkVOVF9LRVl9YDtcbiAgICBjb25zdCBuYW1lID0gY29tcG9uZW50Lk5BTUU7XG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBjbGlja0V2ZW50LCBgW2RhdGEtYnMtZGlzbWlzcz1cIiR7bmFtZX1cIl1gLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcykgfHwgdGhpcy5jbG9zZXN0KGAuJHtuYW1lfWApO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpO1xuXG4gICAgICAvLyBNZXRob2QgYXJndW1lbnQgaXMgbGVmdCwgZm9yIEFsZXJ0IGFuZCBvbmx5LCBhcyBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgJ2hpZGUnIG1ldGhvZFxuICAgICAgaW5zdGFuY2VbbWV0aG9kXSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgYWxlcnQuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSRmID0gJ2FsZXJ0JztcbiAgY29uc3QgREFUQV9LRVkkYSA9ICdicy5hbGVydCc7XG4gIGNvbnN0IEVWRU5UX0tFWSRiID0gYC4ke0RBVEFfS0VZJGF9YDtcbiAgY29uc3QgRVZFTlRfQ0xPU0UgPSBgY2xvc2Uke0VWRU5UX0tFWSRifWA7XG4gIGNvbnN0IEVWRU5UX0NMT1NFRCA9IGBjbG9zZWQke0VWRU5UX0tFWSRifWA7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQ1ID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckOCA9ICdzaG93JztcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBBbGVydCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRmO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGNsb3NlKCkge1xuICAgICAgY29uc3QgY2xvc2VFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFKTtcbiAgICAgIGlmIChjbG9zZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ4KTtcbiAgICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkNSk7XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KCksIHRoaXMuX2VsZW1lbnQsIGlzQW5pbWF0ZWQpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfZGVzdHJveUVsZW1lbnQoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xPU0VEKTtcbiAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEFsZXJ0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBlbmFibGVEaXNtaXNzVHJpZ2dlcihBbGVydCwgJ2Nsb3NlJyk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oQWxlcnQpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgYnV0dG9uLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkZSA9ICdidXR0b24nO1xuICBjb25zdCBEQVRBX0tFWSQ5ID0gJ2JzLmJ1dHRvbic7XG4gIGNvbnN0IEVWRU5UX0tFWSRhID0gYC4ke0RBVEFfS0VZJDl9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZJDYgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUkMyA9ICdhY3RpdmUnO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ1ID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImJ1dHRvblwiXSc7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDYgPSBgY2xpY2ske0VWRU5UX0tFWSRhfSR7REFUQV9BUElfS0VZJDZ9YDtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkZTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICB0b2dnbGUoKSB7XG4gICAgICAvLyBUb2dnbGUgY2xhc3MgYW5kIHN5bmMgdGhlIGBhcmlhLXByZXNzZWRgIGF0dHJpYnV0ZSB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGAudG9nZ2xlKClgIG1ldGhvZFxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSQzKSk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gQnV0dG9uLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7XG4gICAgICAgIGlmIChjb25maWcgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDYsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDUsIGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RBVEFfVE9HR0xFJDUpO1xuICAgIGNvbnN0IGRhdGEgPSBCdXR0b24uZ2V0T3JDcmVhdGVJbnN0YW5jZShidXR0b24pO1xuICAgIGRhdGEudG9nZ2xlKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKEJ1dHRvbik7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL3N3aXBlLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkZCA9ICdzd2lwZSc7XG4gIGNvbnN0IEVWRU5UX0tFWSQ5ID0gJy5icy5zd2lwZSc7XG4gIGNvbnN0IEVWRU5UX1RPVUNIU1RBUlQgPSBgdG91Y2hzdGFydCR7RVZFTlRfS0VZJDl9YDtcbiAgY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZJDl9YDtcbiAgY29uc3QgRVZFTlRfVE9VQ0hFTkQgPSBgdG91Y2hlbmQke0VWRU5UX0tFWSQ5fWA7XG4gIGNvbnN0IEVWRU5UX1BPSU5URVJET1dOID0gYHBvaW50ZXJkb3duJHtFVkVOVF9LRVkkOX1gO1xuICBjb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVkkOX1gO1xuICBjb25zdCBQT0lOVEVSX1RZUEVfVE9VQ0ggPSAndG91Y2gnO1xuICBjb25zdCBQT0lOVEVSX1RZUEVfUEVOID0gJ3Blbic7XG4gIGNvbnN0IENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCA9ICdwb2ludGVyLWV2ZW50JztcbiAgY29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNDA7XG4gIGNvbnN0IERlZmF1bHQkYyA9IHtcbiAgICBlbmRDYWxsYmFjazogbnVsbCxcbiAgICBsZWZ0Q2FsbGJhY2s6IG51bGwsXG4gICAgcmlnaHRDYWxsYmFjazogbnVsbFxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSRjID0ge1xuICAgIGVuZENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgICBsZWZ0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICAgIHJpZ2h0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgU3dpcGUgZXh0ZW5kcyBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fZGVsdGFYID0gMDtcbiAgICAgIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50KTtcbiAgICAgIHRoaXMuX2luaXRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkYztcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSRjO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRkO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWSQ5KTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX3N0YXJ0KGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICB9XG4gICAgfVxuICAgIF9lbmQoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy5fZGVsdGFYO1xuICAgICAgfVxuICAgICAgdGhpcy5faGFuZGxlU3dpcGUoKTtcbiAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmVuZENhbGxiYWNrKTtcbiAgICB9XG4gICAgX21vdmUoZXZlbnQpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxID8gMCA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX2RlbHRhWDtcbiAgICB9XG4gICAgX2hhbmRsZVN3aXBlKCkge1xuICAgICAgY29uc3QgYWJzRGVsdGFYID0gTWF0aC5hYnModGhpcy5fZGVsdGFYKTtcbiAgICAgIGlmIChhYnNEZWx0YVggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRhWCAvIHRoaXMuX2RlbHRhWDtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IDA7XG4gICAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBleGVjdXRlKGRpcmVjdGlvbiA+IDAgPyB0aGlzLl9jb25maWcucmlnaHRDYWxsYmFjayA6IHRoaXMuX2NvbmZpZy5sZWZ0Q2FsbGJhY2spO1xuICAgIH1cbiAgICBfaW5pdEV2ZW50cygpIHtcbiAgICAgIGlmICh0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cykge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUkRPV04sIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpO1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiB0aGlzLl9tb3ZlKGV2ZW50KSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgJiYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfUEVOIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfVE9VQ0gpO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICAgIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGNhcm91c2VsLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkYyA9ICdjYXJvdXNlbCc7XG4gIGNvbnN0IERBVEFfS0VZJDggPSAnYnMuY2Fyb3VzZWwnO1xuICBjb25zdCBFVkVOVF9LRVkkOCA9IGAuJHtEQVRBX0tFWSQ4fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQ1ID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEFSUk9XX0xFRlRfS0VZJDEgPSAnQXJyb3dMZWZ0JztcbiAgY29uc3QgQVJST1dfUklHSFRfS0VZJDEgPSAnQXJyb3dSaWdodCc7XG4gIGNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDA7IC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuXG4gIGNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCc7XG4gIGNvbnN0IE9SREVSX1BSRVYgPSAncHJldic7XG4gIGNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnO1xuICBjb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnO1xuICBjb25zdCBFVkVOVF9TTElERSA9IGBzbGlkZSR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVkkOH1gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOJDEgPSBga2V5ZG93biR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfTU9VU0VFTlRFUiQxID0gYG1vdXNlZW50ZXIke0VWRU5UX0tFWSQ4fWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFTEVBVkUkMSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVkkOH1gO1xuICBjb25zdCBFVkVOVF9EUkFHX1NUQVJUID0gYGRyYWdzdGFydCR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSQzID0gYGxvYWQke0VWRU5UX0tFWSQ4fSR7REFUQV9BUElfS0VZJDV9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNSA9IGBjbGljayR7RVZFTlRfS0VZJDh9JHtEQVRBX0FQSV9LRVkkNX1gO1xuICBjb25zdCBDTEFTU19OQU1FX0NBUk9VU0VMID0gJ2Nhcm91c2VsJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUkMiA9ICdhY3RpdmUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NMSURFID0gJ3NsaWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9FTkQgPSAnY2Fyb3VzZWwtaXRlbS1lbmQnO1xuICBjb25zdCBDTEFTU19OQU1FX1NUQVJUID0gJ2Nhcm91c2VsLWl0ZW0tc3RhcnQnO1xuICBjb25zdCBDTEFTU19OQU1FX05FWFQgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9QUkVWID0gJ2Nhcm91c2VsLWl0ZW0tcHJldic7XG4gIGNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJztcbiAgY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSc7XG4gIGNvbnN0IFNFTEVDVE9SX0FDVElWRV9JVEVNID0gU0VMRUNUT1JfQUNUSVZFICsgU0VMRUNUT1JfSVRFTTtcbiAgY29uc3QgU0VMRUNUT1JfSVRFTV9JTUcgPSAnLmNhcm91c2VsLWl0ZW0gaW1nJztcbiAgY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycyc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfU0xJREUgPSAnW2RhdGEtYnMtc2xpZGVdLCBbZGF0YS1icy1zbGlkZS10b10nO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1JJREUgPSAnW2RhdGEtYnMtcmlkZT1cImNhcm91c2VsXCJdJztcbiAgY29uc3QgS0VZX1RPX0RJUkVDVElPTiA9IHtcbiAgICBbQVJST1dfTEVGVF9LRVkkMV06IERJUkVDVElPTl9SSUdIVCxcbiAgICBbQVJST1dfUklHSFRfS0VZJDFdOiBESVJFQ1RJT05fTEVGVFxuICB9O1xuICBjb25zdCBEZWZhdWx0JGIgPSB7XG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgcGF1c2U6ICdob3ZlcicsXG4gICAgcmlkZTogZmFsc2UsXG4gICAgdG91Y2g6IHRydWUsXG4gICAgd3JhcDogdHJ1ZVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSRiID0ge1xuICAgIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsXG4gICAgLy8gVE9ETzp2NiByZW1vdmUgYm9vbGVhbiBzdXBwb3J0XG4gICAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgICBwYXVzZTogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHJpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICB0b3VjaDogJ2Jvb2xlYW4nLFxuICAgIHdyYXA6ICdib29sZWFuJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbDtcbiAgICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbnVsbDtcbiAgICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTkRJQ0FUT1JTLCB0aGlzLl9lbGVtZW50KTtcbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnJpZGUgPT09IENMQVNTX05BTUVfQ0FST1VTRUwpIHtcbiAgICAgICAgdGhpcy5jeWNsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCRiO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJGI7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJGM7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgbmV4dCgpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX05FWFQpO1xuICAgIH1cbiAgICBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgICAvLyBGSVhNRSBUT0RPIHVzZSBgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlYFxuICAgICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBwcmV2KCkge1xuICAgICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVik7XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKTtcbiAgICB9XG4gICAgY3ljbGUoKSB7XG4gICAgICB0aGlzLl9jbGVhckludGVydmFsKCk7XG4gICAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLm5leHRXaGVuVmlzaWJsZSgpLCB0aGlzLl9jb25maWcuaW50ZXJ2YWwpO1xuICAgIH1cbiAgICBfbWF5YmVFbmFibGVDeWNsZSgpIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnJpZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMuY3ljbGUoKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICB9XG4gICAgdG8oaW5kZXgpIHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXMoKTtcbiAgICAgIGlmIChpbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2dldEFjdGl2ZSgpKTtcbiAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVY7XG4gICAgICB0aGlzLl9zbGlkZShvcmRlciwgaXRlbXNbaW5kZXhdKTtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIGlmICh0aGlzLl9zd2lwZUhlbHBlcikge1xuICAgICAgICB0aGlzLl9zd2lwZUhlbHBlci5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IGNvbmZpZy5pbnRlcnZhbDtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04kMSwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VFTlRFUiQxLCAoKSA9PiB0aGlzLnBhdXNlKCkpO1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSQxLCAoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCAmJiBTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBmb3IgKGNvbnN0IGltZyBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU1fSU1HLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub24oaW1nLCBFVkVOVF9EUkFHX1NUQVJULCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVuZENhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlICE9PSAnaG92ZXInKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgc3dpcGVDb25maWcgPSB7XG4gICAgICAgIGxlZnRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fTEVGVCkpLFxuICAgICAgICByaWdodENhbGxiYWNrOiAoKSA9PiB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKERJUkVDVElPTl9SSUdIVCkpLFxuICAgICAgICBlbmRDYWxsYmFjazogZW5kQ2FsbEJhY2tcbiAgICAgIH07XG4gICAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG5ldyBTd2lwZSh0aGlzLl9lbGVtZW50LCBzd2lwZUNvbmZpZyk7XG4gICAgfVxuICAgIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gS0VZX1RPX0RJUkVDVElPTltldmVudC5rZXldO1xuICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikpO1xuICAgICAgfVxuICAgIH1cbiAgICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRJdGVtcygpLmluZGV4T2YoZWxlbWVudCk7XG4gICAgfVxuICAgIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGluZGV4KSB7XG4gICAgICBpZiAoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCk7XG4gICAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSQyKTtcbiAgICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpO1xuICAgICAgY29uc3QgbmV3QWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShgW2RhdGEtYnMtc2xpZGUtdG89XCIke2luZGV4fVwiXWAsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KTtcbiAgICAgIGlmIChuZXdBY3RpdmVJbmRpY2F0b3IpIHtcbiAgICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMik7XG4gICAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICd0cnVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IHRoaXMuX2dldEFjdGl2ZSgpO1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMCk7XG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSBlbGVtZW50SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbDtcbiAgICB9XG4gICAgX3NsaWRlKG9yZGVyLCBlbGVtZW50ID0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZ2V0QWN0aXZlKCk7XG4gICAgICBjb25zdCBpc05leHQgPSBvcmRlciA9PT0gT1JERVJfTkVYVDtcbiAgICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCBnZXROZXh0QWN0aXZlRWxlbWVudCh0aGlzLl9nZXRJdGVtcygpLCBhY3RpdmVFbGVtZW50LCBpc05leHQsIHRoaXMuX2NvbmZpZy53cmFwKTtcbiAgICAgIGlmIChuZXh0RWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KTtcbiAgICAgIGNvbnN0IHRyaWdnZXJFdmVudCA9IGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIHJldHVybiBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBldmVudE5hbWUsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgICBkaXJlY3Rpb246IHRoaXMuX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpLFxuICAgICAgICAgIGZyb206IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KSxcbiAgICAgICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBjb25zdCBzbGlkZUV2ZW50ID0gdHJpZ2dlckV2ZW50KEVWRU5UX1NMSURFKTtcbiAgICAgIGlmIChzbGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgICAgLy8gdG9kbzogY2hhbmdlIHRlc3RzIHRoYXQgdXNlIGVtcHR5IGRpdnMgdG8gYXZvaWQgdGhpcyBjaGVja1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKTtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50SW5kZXgpO1xuICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50O1xuICAgICAgY29uc3QgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX1NUQVJUIDogQ0xBU1NfTkFNRV9FTkQ7XG4gICAgICBjb25zdCBvcmRlckNsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfTkVYVCA6IENMQVNTX05BTUVfUFJFVjtcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQob3JkZXJDbGFzc05hbWUpO1xuICAgICAgcmVmbG93KG5leHRFbGVtZW50KTtcbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKTtcbiAgICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZGlyZWN0aW9uYWxDbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKTtcbiAgICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQyKTtcbiAgICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDIsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJRCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuICAgICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgICB0aGlzLmN5Y2xlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIF9pc0FuaW1hdGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0xJREUpO1xuICAgIH1cbiAgICBfZ2V0QWN0aXZlKCkge1xuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpO1xuICAgIH1cbiAgICBfZ2V0SXRlbXMoKSB7XG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNLCB0aGlzLl9lbGVtZW50KTtcbiAgICB9XG4gICAgX2NsZWFySW50ZXJ2YWwoKSB7XG4gICAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSB7XG4gICAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVjtcbiAgICB9XG4gICAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9MRUZUIDogRElSRUNUSU9OX1JJR0hUO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX1JJR0hUIDogRElSRUNUSU9OX0xFRlQ7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBkYXRhLnRvKGNvbmZpZyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDUsIFNFTEVDVE9SX0RBVEFfU0xJREUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7XG4gICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjYXJvdXNlbCA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KTtcbiAgICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKTtcbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgY2Fyb3VzZWwudG8oc2xpZGVJbmRleCk7XG4gICAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZSh0aGlzLCAnc2xpZGUnKSA9PT0gJ25leHQnKSB7XG4gICAgICBjYXJvdXNlbC5uZXh0KCk7XG4gICAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYXJvdXNlbC5wcmV2KCk7XG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKTtcbiAgfSk7XG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEkkMywgKCkgPT4ge1xuICAgIGNvbnN0IGNhcm91c2VscyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKTtcbiAgICBmb3IgKGNvbnN0IGNhcm91c2VsIG9mIGNhcm91c2Vscykge1xuICAgICAgQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShjYXJvdXNlbCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbCk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBjb2xsYXBzZS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJGIgPSAnY29sbGFwc2UnO1xuICBjb25zdCBEQVRBX0tFWSQ3ID0gJ2JzLmNvbGxhcHNlJztcbiAgY29uc3QgRVZFTlRfS0VZJDcgPSBgLiR7REFUQV9LRVkkN31gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkkNCA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBFVkVOVF9TSE9XJDYgPSBgc2hvdyR7RVZFTlRfS0VZJDd9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kNiA9IGBzaG93biR7RVZFTlRfS0VZJDd9YDtcbiAgY29uc3QgRVZFTlRfSElERSQ2ID0gYGhpZGUke0VWRU5UX0tFWSQ3fWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQ2ID0gYGhpZGRlbiR7RVZFTlRfS0VZJDd9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNCA9IGBjbGljayR7RVZFTlRfS0VZJDd9JHtEQVRBX0FQSV9LRVkkNH1gO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckNyA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRSA9ICdjb2xsYXBzZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgPSAnY29sbGFwc2VkJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4gPSBgOnNjb3BlIC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9IC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9IT1JJWk9OVEFMID0gJ2NvbGxhcHNlLWhvcml6b250YWwnO1xuICBjb25zdCBXSURUSCA9ICd3aWR0aCc7XG4gIGNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnO1xuICBjb25zdCBTRUxFQ1RPUl9BQ1RJVkVTID0gJy5jb2xsYXBzZS5zaG93LCAuY29sbGFwc2UuY29sbGFwc2luZyc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nO1xuICBjb25zdCBEZWZhdWx0JGEgPSB7XG4gICAgcGFyZW50OiBudWxsLFxuICAgIHRvZ2dsZTogdHJ1ZVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSRhID0ge1xuICAgIHBhcmVudDogJyhudWxsfGVsZW1lbnQpJyxcbiAgICB0b2dnbGU6ICdib29sZWFuJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBbXTtcbiAgICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQpO1xuICAgICAgZm9yIChjb25zdCBlbGVtIG9mIHRvZ2dsZUxpc3QpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBTZWxlY3RvckVuZ2luZS5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pO1xuICAgICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikuZmlsdGVyKGZvdW5kRWxlbWVudCA9PiBmb3VuZEVsZW1lbnQgPT09IHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKCk7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JGE7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkYTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkYjtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8IHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXTtcblxuICAgICAgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICAgIGFjdGl2ZUNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0FDVElWRVMpLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpLm1hcChlbGVtZW50ID0+IENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwge1xuICAgICAgICAgIHRvZ2dsZTogZmFsc2VcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgaWYgKGFjdGl2ZUNoaWxkcmVuLmxlbmd0aCAmJiBhY3RpdmVDaGlsZHJlblswXS5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XJDYpO1xuICAgICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGFjdGl2ZUluc3RhbmNlIG9mIGFjdGl2ZUNoaWxkcmVuKSB7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwO1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSk7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVyQ3KTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOJDYpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSk7XG4gICAgICBjb25zdCBzY3JvbGxTaXplID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YDtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGA7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUkNik7XG4gICAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YDtcbiAgICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVyQ3KTtcbiAgICAgIGZvciAoY29uc3QgdHJpZ2dlciBvZiB0aGlzLl90cmlnZ2VyQXJyYXkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodHJpZ2dlcik7XG4gICAgICAgIGlmIChlbGVtZW50ICYmICF0aGlzLl9pc1Nob3duKGVsZW1lbnQpKSB7XG4gICAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFt0cmlnZ2VyXSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4kNik7XG4gICAgICB9O1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKTtcbiAgICB9XG4gICAgX2lzU2hvd24oZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckNyk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSk7IC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgICBjb25maWcucGFyZW50ID0gZ2V0RWxlbWVudChjb25maWcucGFyZW50KTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9nZXREaW1lbnNpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9IT1JJWk9OVEFMKSA/IFdJRFRIIDogSEVJR0hUO1xuICAgIH1cbiAgICBfaW5pdGlhbGl6ZUNoaWxkcmVuKCkge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQpO1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFtlbGVtZW50XSwgdGhpcy5faXNTaG93bihzZWxlY3RlZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIF9nZXRGaXJzdExldmVsQ2hpbGRyZW4oc2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gU2VsZWN0b3JFbmdpbmUuZmluZChDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiwgdGhpcy5fY29uZmlnLnBhcmVudCk7XG4gICAgICAvLyByZW1vdmUgY2hpbGRyZW4gaWYgZ3JlYXRlciBkZXB0aFxuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtZW50ID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtZW50KSk7XG4gICAgfVxuICAgIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICAgIGlmICghdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdHJpZ2dlckFycmF5KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3Blbik7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgY29uc3QgX2NvbmZpZyA9IHt9O1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ0LCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgfHwgZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3Rvcih0aGlzKSkge1xuICAgICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7XG4gICAgICAgIHRvZ2dsZTogZmFsc2VcbiAgICAgIH0pLnRvZ2dsZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpO1xuXG4gIHZhciB0b3AgPSAndG9wJztcbiAgdmFyIGJvdHRvbSA9ICdib3R0b20nO1xuICB2YXIgcmlnaHQgPSAncmlnaHQnO1xuICB2YXIgbGVmdCA9ICdsZWZ0JztcbiAgdmFyIGF1dG8gPSAnYXV0byc7XG4gIHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuICB2YXIgc3RhcnQgPSAnc3RhcnQnO1xuICB2YXIgZW5kID0gJ2VuZCc7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbiAgdmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcbiAgdmFyIHBvcHBlciA9ICdwb3BwZXInO1xuICB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG4gIHZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbiAgfSwgW10pO1xuICB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG4gIH0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxuICB2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbiAgdmFyIHJlYWQgPSAncmVhZCc7XG4gIHZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxuICB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbiAgdmFyIG1haW4gPSAnbWFpbic7XG4gIHZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG4gIHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG4gIHZhciB3cml0ZSA9ICd3cml0ZSc7XG4gIHZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xuICB2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07XG5cbiAgZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cblxuICAgIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICAgIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gICAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gICAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG4gIH1cblxuICAvLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cbiAgZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRmxvdyBkb2Vzbid0IHN1cHBvcnQgdG8gZXh0ZW5kIHRoaXMgcHJvcGVydHksIGJ1dCBpdCdzIHRoZSBtb3N0XG4gICAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZWZmZWN0JDIoX3JlZjIpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcbiAgICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICAgIHBvcHBlcjoge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgbWFyZ2luOiAnMCdcbiAgICAgIH0sXG4gICAgICBhcnJvdzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgfSxcbiAgICAgIHJlZmVyZW5jZToge31cbiAgICB9O1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gICAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcblxuICAgIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICAgIHZhciBzdHlsZSA9IHN0eWxlUHJvcGVydGllcy5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlLCBwcm9wZXJ0eSkge1xuICAgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfSwge30pOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBhcHBseVN0eWxlcyQxID0ge1xuICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ3dyaXRlJyxcbiAgICBmbjogYXBwbHlTdHlsZXMsXG4gICAgZWZmZWN0OiBlZmZlY3QkMixcbiAgICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgfVxuXG4gIHZhciBtYXggPSBNYXRoLm1heDtcbiAgdmFyIG1pbiA9IE1hdGgubWluO1xuICB2YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xuXG4gIGZ1bmN0aW9uIGdldFVBU3RyaW5nKCkge1xuICAgIHZhciB1YURhdGEgPSBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcblxuICAgIGlmICh1YURhdGEgIT0gbnVsbCAmJiB1YURhdGEuYnJhbmRzKSB7XG4gICAgICByZXR1cm4gdWFEYXRhLmJyYW5kcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uYnJhbmQgKyBcIi9cIiArIGl0ZW0udmVyc2lvbjtcbiAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTGF5b3V0Vmlld3BvcnQoKSB7XG4gICAgcmV0dXJuICEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSwgaXNGaXhlZFN0cmF0ZWd5KSB7XG4gICAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNGaXhlZFN0cmF0ZWd5ID09PSB2b2lkIDApIHtcbiAgICAgIGlzRml4ZWRTdHJhdGVneSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgc2NhbGVYID0gMTtcbiAgICB2YXIgc2NhbGVZID0gMTtcblxuICAgIGlmIChpbmNsdWRlU2NhbGUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgc2NhbGVYID0gZWxlbWVudC5vZmZzZXRXaWR0aCA+IDAgPyByb3VuZChjbGllbnRSZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMSA6IDE7XG4gICAgICBzY2FsZVkgPSBlbGVtZW50Lm9mZnNldEhlaWdodCA+IDAgPyByb3VuZChjbGllbnRSZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxIDogMTtcbiAgICB9XG5cbiAgICB2YXIgX3JlZiA9IGlzRWxlbWVudChlbGVtZW50KSA/IGdldFdpbmRvdyhlbGVtZW50KSA6IHdpbmRvdyxcbiAgICAgICAgdmlzdWFsVmlld3BvcnQgPSBfcmVmLnZpc3VhbFZpZXdwb3J0O1xuXG4gICAgdmFyIGFkZFZpc3VhbE9mZnNldHMgPSAhaXNMYXlvdXRWaWV3cG9ydCgpICYmIGlzRml4ZWRTdHJhdGVneTtcbiAgICB2YXIgeCA9IChjbGllbnRSZWN0LmxlZnQgKyAoYWRkVmlzdWFsT2Zmc2V0cyAmJiB2aXN1YWxWaWV3cG9ydCA/IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQgOiAwKSkgLyBzY2FsZVg7XG4gICAgdmFyIHkgPSAoY2xpZW50UmVjdC50b3AgKyAoYWRkVmlzdWFsT2Zmc2V0cyAmJiB2aXN1YWxWaWV3cG9ydCA/IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcCA6IDApKSAvIHNjYWxlWTtcbiAgICB2YXIgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoIC8gc2NhbGVYO1xuICAgIHZhciBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodCAvIHNjYWxlWTtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB0b3A6IHksXG4gICAgICByaWdodDogeCArIHdpZHRoLFxuICAgICAgYm90dG9tOiB5ICsgaGVpZ2h0LFxuICAgICAgbGVmdDogeCxcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTtcbiAgfVxuXG4gIC8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuICBmdW5jdGlvbiBnZXRMYXlvdXRSZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gICAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgICB9XG5cbiAgICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICAgIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzgzN1xuICAgIGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICB9IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG4gIC8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbiAgZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgICB2YXIgaXNGaXJlZm94ID0gL2ZpcmVmb3gvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuICAgIHZhciBpc0lFID0gL1RyaWRlbnQvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuXG4gICAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgLy8gSW4gSUUgOSwgMTAgYW5kIDExIGZpeGVkIGVsZW1lbnRzIGNvbnRhaW5pbmcgYmxvY2sgaXMgYWx3YXlzIGVzdGFibGlzaGVkIGJ5IHRoZSB2aWV3cG9ydFxuICAgICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCk7XG5cbiAgICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgICBpZiAoaXNTaGFkb3dSb290KGN1cnJlbnROb2RlKSkge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5ob3N0O1xuICAgIH1cblxuICAgIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlJDEoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4gIC8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuICBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAgIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZSQxKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlJDEob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG4gIH1cblxuICBmdW5jdGlvbiB3aXRoaW4obWluJDEsIHZhbHVlLCBtYXgkMSkge1xuICAgIHJldHVybiBtYXgobWluJDEsIG1pbih2YWx1ZSwgbWF4JDEpKTtcbiAgfVxuICBmdW5jdGlvbiB3aXRoaW5NYXhDbGFtcChtaW4sIHZhbHVlLCBtYXgpIHtcbiAgICB2YXIgdiA9IHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpO1xuICAgIHJldHVybiB2ID4gbWF4ID8gbWF4IDogdjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xuICAgIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBoYXNoTWFwO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIHZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICAgIH0pKSA6IHBhZGRpbmc7XG4gICAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICAgIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICAgIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gICAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gICAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gICAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gICAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gICAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gICAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gICAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gICAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gICAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWZmZWN0JDEoX3JlZjIpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gICAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgYXJyb3ckMSA9IHtcbiAgICBuYW1lOiAnYXJyb3cnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdtYWluJyxcbiAgICBmbjogYXJyb3csXG4gICAgZWZmZWN0OiBlZmZlY3QkMSxcbiAgICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gICAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG4gIH1cblxuICB2YXIgdW5zZXRTaWRlcyA9IHtcbiAgICB0b3A6ICdhdXRvJyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIGxlZnQ6ICdhdXRvJ1xuICB9OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuICAvLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuICAvLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuICBmdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gICAgdmFyIHggPSBfcmVmLngsXG4gICAgICAgIHkgPSBfcmVmLnk7XG4gICAgdmFyIHdpbiA9IHdpbmRvdztcbiAgICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogcm91bmQoeCAqIGRwcikgLyBkcHIgfHwgMCxcbiAgICAgIHk6IHJvdW5kKHkgKiBkcHIpIC8gZHByIHx8IDBcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gICAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgICAgdmFyaWF0aW9uID0gX3JlZjIudmFyaWF0aW9uLFxuICAgICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHMsXG4gICAgICAgIGlzRml4ZWQgPSBfcmVmMi5pc0ZpeGVkO1xuICAgIHZhciBfb2Zmc2V0cyR4ID0gb2Zmc2V0cy54LFxuICAgICAgICB4ID0gX29mZnNldHMkeCA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHgsXG4gICAgICAgIF9vZmZzZXRzJHkgPSBvZmZzZXRzLnksXG4gICAgICAgIHkgPSBfb2Zmc2V0cyR5ID09PSB2b2lkIDAgPyAwIDogX29mZnNldHMkeTtcblxuICAgIHZhciBfcmVmMyA9IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMoe1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9KSA6IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTtcblxuICAgIHggPSBfcmVmMy54O1xuICAgIHkgPSBfcmVmMy55O1xuICAgIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICAgIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICAgIHZhciBzaWRlWCA9IGxlZnQ7XG4gICAgdmFyIHNpZGVZID0gdG9wO1xuICAgIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgICBpZiAoYWRhcHRpdmUpIHtcbiAgICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUkMShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJyAmJiBwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJykge1xuICAgICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgICB9XG4gICAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wIHx8IChwbGFjZW1lbnQgPT09IGxlZnQgfHwgcGxhY2VtZW50ID09PSByaWdodCkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgICAgc2lkZVkgPSBib3R0b207XG4gICAgICAgIHZhciBvZmZzZXRZID0gaXNGaXhlZCAmJiBvZmZzZXRQYXJlbnQgPT09IHdpbiAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQuaGVpZ2h0IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICAgIG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXTtcbiAgICAgICAgeSAtPSBvZmZzZXRZIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0IHx8IChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgICAgc2lkZVggPSByaWdodDtcbiAgICAgICAgdmFyIG9mZnNldFggPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC53aWR0aCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgICBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXTtcbiAgICAgICAgeCAtPSBvZmZzZXRYIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcG9zaXRpb246IHBvc2l0aW9uXG4gICAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgICB2YXIgX3JlZjQgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUih7XG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH0pIDoge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9O1xuXG4gICAgeCA9IF9yZWY0Lng7XG4gICAgeSA9IF9yZWY0Lnk7XG5cbiAgICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDw9IDEgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNSkge1xuICAgIHZhciBzdGF0ZSA9IF9yZWY1LnN0YXRlLFxuICAgICAgICBvcHRpb25zID0gX3JlZjUub3B0aW9ucztcbiAgICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG5cbiAgICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgICB2YXJpYXRpb246IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpLFxuICAgICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGlzRml4ZWQ6IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCdcbiAgICB9O1xuXG4gICAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICAgIH0pO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IGNvbXB1dGVTdHlsZXMkMSA9IHtcbiAgICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgICBkYXRhOiB7fVxuICB9O1xuXG4gIHZhciBwYXNzaXZlID0ge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gICAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNpemUpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBldmVudExpc3RlbmVycyA9IHtcbiAgICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICd3cml0ZScsXG4gICAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gICAgZWZmZWN0OiBlZmZlY3QsXG4gICAgZGF0YToge31cbiAgfTtcblxuICB2YXIgaGFzaCQxID0ge1xuICAgIGxlZnQ6ICdyaWdodCcsXG4gICAgcmlnaHQ6ICdsZWZ0JyxcbiAgICBib3R0b206ICd0b3AnLFxuICAgIHRvcDogJ2JvdHRvbSdcbiAgfTtcbiAgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICAgIHJldHVybiBoYXNoJDFbbWF0Y2hlZF07XG4gICAgfSk7XG4gIH1cblxuICB2YXIgaGFzaCA9IHtcbiAgICBzdGFydDogJ2VuZCcsXG4gICAgZW5kOiAnc3RhcnQnXG4gIH07XG4gIGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gICAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICAgIHJldHVybiB7XG4gICAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gICAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAgIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAgIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gICAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAgIC8vIGFueXdheS5cbiAgICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAgIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gICAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICAgIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gICAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICAgIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICAgIHZhciB4ID0gMDtcbiAgICB2YXIgeSA9IDA7XG5cbiAgICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG4gICAgICB2YXIgbGF5b3V0Vmlld3BvcnQgPSBpc0xheW91dFZpZXdwb3J0KCk7XG5cbiAgICAgIGlmIChsYXlvdXRWaWV3cG9ydCB8fCAhbGF5b3V0Vmlld3BvcnQgJiYgc3RyYXRlZ3kgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgICB5OiB5XG4gICAgfTtcbiAgfVxuXG4gIC8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuICBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICAgIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICAgIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICAgIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gICAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICAgIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUkMShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gICAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICAgIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KSxcbiAgICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlKSB7XG4gICAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbiAgfVxuXG4gIC8qXG4gIGdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG4gIHVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG4gIHRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbiAgcmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiAgKi9cblxuICBmdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gICAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICAgIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICAgIGxpc3QgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICAgIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICAgIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICAgIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICAgIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgICBsZWZ0OiByZWN0LngsXG4gICAgICB0b3A6IHJlY3QueSxcbiAgICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBmYWxzZSwgc3RyYXRlZ3kgPT09ICdmaXhlZCcpO1xuICAgIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gICAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICAgIHJlY3QueSA9IHJlY3QudG9wO1xuICAgIHJldHVybiByZWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSB7XG4gICAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSkgOiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xuICB9IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4gIC8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuICAvLyBgaW5pdGlhbGBcblxuXG4gIGZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gICAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICAgIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICAgIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gICAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xuICAgIH0pO1xuICB9IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2ZcbiAgLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbiAgZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnksIHN0cmF0ZWd5KSB7XG4gICAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICAgIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICAgIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICAgIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpO1xuICAgICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICAgIHJldHVybiBhY2NSZWN0O1xuICAgIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSk7XG4gICAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gICAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICAgIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gICAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICAgIHJldHVybiBjbGlwcGluZ1JlY3Q7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gICAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gICAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICAgIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgICB2YXIgb2Zmc2V0cztcblxuICAgIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgICAgY2FzZSB0b3A6XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGJvdHRvbTpcbiAgICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSByaWdodDpcbiAgICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgICB5OiBjb21tb25ZXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGxlZnQ6XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICAgIHk6IGNvbW1vbllcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICAgIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgZW5kOlxuICAgICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldHM7XG4gIH1cblxuICBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgICBfb3B0aW9ucyRzdHJhdGVneSA9IF9vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgICBzdHJhdGVneSA9IF9vcHRpb25zJHN0cmF0ZWd5ID09PSB2b2lkIDAgPyBzdGF0ZS5zdHJhdGVneSA6IF9vcHRpb25zJHN0cmF0ZWd5LFxuICAgICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gICAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICAgIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICAgIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnksIHN0cmF0ZWd5KTtcbiAgICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChzdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2UpO1xuICAgIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgICAgZWxlbWVudDogcG9wcGVyUmVjdCxcbiAgICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgICB9KTtcbiAgICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICAgIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAgIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcblxuICAgIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICAgIGJvdHRvbTogZWxlbWVudENsaWVudFJlY3QuYm90dG9tIC0gY2xpcHBpbmdDbGllbnRSZWN0LmJvdHRvbSArIHBhZGRpbmdPYmplY3QuYm90dG9tLFxuICAgICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICAgIH07XG4gICAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gICAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgICAgdmFyIG9mZnNldCA9IG9mZnNldERhdGFbcGxhY2VtZW50XTtcbiAgICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgICAgdmFyIGF4aXMgPSBbdG9wLCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gJ3knIDogJ3gnO1xuICAgICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBwbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICAgIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgICB2YXIgcGxhY2VtZW50cyQxID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gICAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzJDEuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gICAgfSk7XG5cbiAgICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMTtcbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICAgIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICAgIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICAgIHJldHVybiBbZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG4gIH1cblxuICBmdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gICAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICAgIF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9IG9wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgICB2YXIgcHJlZmVycmVkUGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gICAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgICB2YXIgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBWYXJpYXRpb25zID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocHJlZmVycmVkUGxhY2VtZW50KSk7XG4gICAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgICAgfSkgOiBwbGFjZW1lbnQpO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICAgIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICAgIHZhciBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzWzBdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgICAgdmFyIF9iYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG4gICAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgICB9KTtcbiAgICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgICAgaWYgKHJlZmVyZW5jZVJlY3RbbGVuXSA+IHBvcHBlclJlY3RbbGVuXSkge1xuICAgICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFsdFZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W19iYXNlUGxhY2VtZW50XSA8PSAwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgICBjaGVja3MucHVzaChvdmVyZmxvd1ttYWluVmFyaWF0aW9uU2lkZV0gPD0gMCwgb3ZlcmZsb3dbYWx0VmFyaWF0aW9uU2lkZV0gPD0gMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgIH0pKSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgICAgbWFrZUZhbGxiYWNrQ2hlY2tzID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcbiAgICB9XG5cbiAgICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgICAvLyBgMmAgbWF5IGJlIGRlc2lyZWQgaW4gc29tZSBjYXNlcyDigJMgcmVzZWFyY2ggbGF0ZXJcbiAgICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICAgIHZhciBmaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50cy5maW5kKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrcy5zbGljZSgwLCBfaSkuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBmaXR0aW5nUGxhY2VtZW50O1xuICAgICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgICBpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGUucGxhY2VtZW50ICE9PSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgICAgc3RhdGUucmVzZXQgPSB0cnVlO1xuICAgIH1cbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBmbGlwJDEgPSB7XG4gICAgbmFtZTogJ2ZsaXAnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdtYWluJyxcbiAgICBmbjogZmxpcCxcbiAgICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICAgIGRhdGE6IHtcbiAgICAgIF9za2lwOiBmYWxzZVxuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICAgIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICAgIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gICAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gICAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gICAgfSk7XG4gICAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gICAgfSk7XG4gICAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICAgIH07XG4gICAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICAgIH0pO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IGhpZGUkMSA9IHtcbiAgICBuYW1lOiAnaGlkZScsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ21haW4nLFxuICAgIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG4gICAgZm46IGhpZGVcbiAgfTtcblxuICBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICB2YXIgaW52ZXJ0RGlzdGFuY2UgPSBbbGVmdCwgdG9wXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyAtMSA6IDE7XG5cbiAgICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgfSkpIDogb2Zmc2V0LFxuICAgICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICAgIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcbiAgICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICAgIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICAgIHg6IGRpc3RhbmNlLFxuICAgICAgeTogc2tpZGRpbmdcbiAgICB9IDoge1xuICAgICAgeDogc2tpZGRpbmcsXG4gICAgICB5OiBkaXN0YW5jZVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICAgIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgICAgb2Zmc2V0ID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gICAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICAgIHggPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueCxcbiAgICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gICAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCArPSB4O1xuICAgICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgICB9XG5cbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBvZmZzZXQkMSA9IHtcbiAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnbWFpbicsXG4gICAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICAgIGZuOiBvZmZzZXRcbiAgfTtcblxuICBmdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAgIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gICAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAgIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAgIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgICB9KTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBwb3BwZXJPZmZzZXRzJDEgPSB7XG4gICAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdyZWFkJyxcbiAgICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgICBkYXRhOiB7fVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICAgIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgICBfb3B0aW9ucyR0ZXRoZXIgPSBvcHRpb25zLnRldGhlcixcbiAgICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgICAgdGV0aGVyT2Zmc2V0ID0gX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkdGV0aGVyT2Zmc2V0O1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgICB9KTtcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gICAgdmFyIGlzQmFzZVBsYWNlbWVudCA9ICF2YXJpYXRpb247XG4gICAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICAgIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gICAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gICAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gICAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gICAgdmFyIHRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IHRldGhlck9mZnNldChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gICAgdmFyIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXRWYWx1ZSA9PT0gJ251bWJlcicgPyB7XG4gICAgICBtYWluQXhpczogdGV0aGVyT2Zmc2V0VmFsdWUsXG4gICAgICBhbHRBeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZVxuICAgIH0gOiBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1haW5BeGlzOiAwLFxuICAgICAgYWx0QXhpczogMFxuICAgIH0sIHRldGhlck9mZnNldFZhbHVlKTtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0ID8gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXRbc3RhdGUucGxhY2VtZW50XSA6IG51bGw7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG5cbiAgICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDtcblxuICAgICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgICAgdmFyIG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuICAgICAgdmFyIG1pbiQxID0gb2Zmc2V0ICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgICAgdmFyIG1heCQxID0gb2Zmc2V0IC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgICB2YXIgYWRkaXRpdmUgPSB0ZXRoZXIgPyAtcG9wcGVyUmVjdFtsZW5dIC8gMiA6IDA7XG4gICAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgICAvLyBvdXRzaWRlIHRoZSByZWZlcmVuY2UgYm91bmRzXG5cbiAgICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwXG4gICAgICB9O1xuICAgICAgdmFyIGFycm93UGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXSA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XG4gICAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXG4gICAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxuXG4gICAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtYXhMZW4gKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVttYWluQXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgOiAwO1xuICAgICAgdmFyIHRldGhlck1pbiA9IG9mZnNldCArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgICB2YXIgdGV0aGVyTWF4ID0gb2Zmc2V0ICsgbWF4T2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZTtcbiAgICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWluKG1pbiQxLCB0ZXRoZXJNaW4pIDogbWluJDEsIG9mZnNldCwgdGV0aGVyID8gbWF4KG1heCQxLCB0ZXRoZXJNYXgpIDogbWF4JDEpO1xuICAgICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkMjtcblxuICAgICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXG4gICAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICAgIHZhciBfb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1thbHRBeGlzXTtcblxuICAgICAgdmFyIF9sZW4gPSBhbHRBeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgICAgdmFyIGlzT3JpZ2luU2lkZSA9IFt0b3AsIGxlZnRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgICB2YXIgX29mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkMiA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbYWx0QXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIDogMDtcblxuICAgICAgdmFyIF90ZXRoZXJNaW4gPSBpc09yaWdpblNpZGUgPyBfbWluIDogX29mZnNldCAtIHJlZmVyZW5jZVJlY3RbX2xlbl0gLSBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcztcblxuICAgICAgdmFyIF90ZXRoZXJNYXggPSBpc09yaWdpblNpZGUgPyBfb2Zmc2V0ICsgcmVmZXJlbmNlUmVjdFtfbGVuXSArIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzIDogX21heDtcblxuICAgICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB0ZXRoZXIgJiYgaXNPcmlnaW5TaWRlID8gd2l0aGluTWF4Q2xhbXAoX3RldGhlck1pbiwgX29mZnNldCwgX3RldGhlck1heCkgOiB3aXRoaW4odGV0aGVyID8gX3RldGhlck1pbiA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IF90ZXRoZXJNYXggOiBfbWF4KTtcblxuICAgICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldCAtIF9vZmZzZXQ7XG4gICAgfVxuXG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgcHJldmVudE92ZXJmbG93JDEgPSB7XG4gICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ21haW4nLFxuICAgIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gICAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQpIHtcbiAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHNjYWxlWCA9IHJvdW5kKHJlY3Qud2lkdGgpIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxO1xuICAgIHZhciBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xuICAgIHJldHVybiBzY2FsZVggIT09IDEgfHwgc2NhbGVZICE9PSAxO1xuICB9IC8vIFJldHVybnMgdGhlIGNvbXBvc2l0ZSByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC5cbiAgLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5cbiAgZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gICAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgICAgaXNGaXhlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICAgIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnRJc1NjYWxlZCwgaXNGaXhlZCk7XG4gICAgdmFyIHNjcm9sbCA9IHtcbiAgICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgICBzY3JvbGxUb3A6IDBcbiAgICB9O1xuICAgIHZhciBvZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuXG4gICAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50LCB0cnVlKTtcbiAgICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gICAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gICAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgICB9XG5cbiAgICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICAgIH0pKTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICAgIHZhciBwZW5kaW5nO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwZW5kaW5nO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgICB9KSA6IGN1cnJlbnQ7XG4gICAgICByZXR1cm4gbWVyZ2VkO1xuICAgIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gbWVyZ2VkW2tleV07XG4gICAgfSk7XG4gIH1cblxuICB2YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgbW9kaWZpZXJzOiBbXSxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJ1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICAgIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgICB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgc3R5bGVzOiB7fVxuICAgICAgfTtcbiAgICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKHNldE9wdGlvbnNBY3Rpb24pIHtcbiAgICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzZXRPcHRpb25zQWN0aW9uID09PSAnZnVuY3Rpb24nID8gc2V0T3B0aW9uc0FjdGlvbihzdGF0ZS5vcHRpb25zKSA6IHNldE9wdGlvbnNBY3Rpb247XG4gICAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgICB9KTsgLy8gVmFsaWRhdGUgdGhlIHByb3ZpZGVkIG1vZGlmaWVycyBzbyB0aGF0IHRoZSBjb25zdW1lciB3aWxsIGdldCB3YXJuZWRcblxuICAgICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgICAvLyBsb2dpYy5cbiAgICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuXG4gICAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAgIC8vIG9uZS5cblxuICAgICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkb3B0aW9ucyxcbiAgICAgICAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0O1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cbiAgdmFyIGNyZWF0ZVBvcHBlciQyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbiAgdmFyIGRlZmF1bHRNb2RpZmllcnMkMSA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cyQxLCBjb21wdXRlU3R5bGVzJDEsIGFwcGx5U3R5bGVzJDFdO1xuICB2YXIgY3JlYXRlUG9wcGVyJDEgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzJDFcbiAgfSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuICB2YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cyQxLCBjb21wdXRlU3R5bGVzJDEsIGFwcGx5U3R5bGVzJDEsIG9mZnNldCQxLCBmbGlwJDEsIHByZXZlbnRPdmVyZmxvdyQxLCBhcnJvdyQxLCBoaWRlJDFdO1xuICB2YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gICAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xuICB9KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG4gIGNvbnN0IFBvcHBlciA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKC8qI19fUFVSRV9fKi9PYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBhZnRlck1haW4sXG4gICAgYWZ0ZXJSZWFkLFxuICAgIGFmdGVyV3JpdGUsXG4gICAgYXBwbHlTdHlsZXM6IGFwcGx5U3R5bGVzJDEsXG4gICAgYXJyb3c6IGFycm93JDEsXG4gICAgYXV0byxcbiAgICBiYXNlUGxhY2VtZW50cyxcbiAgICBiZWZvcmVNYWluLFxuICAgIGJlZm9yZVJlYWQsXG4gICAgYmVmb3JlV3JpdGUsXG4gICAgYm90dG9tLFxuICAgIGNsaXBwaW5nUGFyZW50cyxcbiAgICBjb21wdXRlU3R5bGVzOiBjb21wdXRlU3R5bGVzJDEsXG4gICAgY3JlYXRlUG9wcGVyLFxuICAgIGNyZWF0ZVBvcHBlckJhc2U6IGNyZWF0ZVBvcHBlciQyLFxuICAgIGNyZWF0ZVBvcHBlckxpdGU6IGNyZWF0ZVBvcHBlciQxLFxuICAgIGRldGVjdE92ZXJmbG93LFxuICAgIGVuZCxcbiAgICBldmVudExpc3RlbmVycyxcbiAgICBmbGlwOiBmbGlwJDEsXG4gICAgaGlkZTogaGlkZSQxLFxuICAgIGxlZnQsXG4gICAgbWFpbixcbiAgICBtb2RpZmllclBoYXNlcyxcbiAgICBvZmZzZXQ6IG9mZnNldCQxLFxuICAgIHBsYWNlbWVudHMsXG4gICAgcG9wcGVyLFxuICAgIHBvcHBlckdlbmVyYXRvcixcbiAgICBwb3BwZXJPZmZzZXRzOiBwb3BwZXJPZmZzZXRzJDEsXG4gICAgcHJldmVudE92ZXJmbG93OiBwcmV2ZW50T3ZlcmZsb3ckMSxcbiAgICByZWFkLFxuICAgIHJlZmVyZW5jZSxcbiAgICByaWdodCxcbiAgICBzdGFydCxcbiAgICB0b3AsXG4gICAgdmFyaWF0aW9uUGxhY2VtZW50cyxcbiAgICB2aWV3cG9ydCxcbiAgICB3cml0ZVxuICB9LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGRyb3Bkb3duLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkYSA9ICdkcm9wZG93bic7XG4gIGNvbnN0IERBVEFfS0VZJDYgPSAnYnMuZHJvcGRvd24nO1xuICBjb25zdCBFVkVOVF9LRVkkNiA9IGAuJHtEQVRBX0tFWSQ2fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQzID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVTQ0FQRV9LRVkkMiA9ICdFc2NhcGUnO1xuICBjb25zdCBUQUJfS0VZJDEgPSAnVGFiJztcbiAgY29uc3QgQVJST1dfVVBfS0VZJDEgPSAnQXJyb3dVcCc7XG4gIGNvbnN0IEFSUk9XX0RPV05fS0VZJDEgPSAnQXJyb3dEb3duJztcbiAgY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMjsgLy8gTW91c2VFdmVudC5idXR0b24gdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYnV0dG9uLCB1c3VhbGx5IHRoZSByaWdodCBidXR0b25cblxuICBjb25zdCBFVkVOVF9ISURFJDUgPSBgaGlkZSR7RVZFTlRfS0VZJDZ9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOJDUgPSBgaGlkZGVuJHtFVkVOVF9LRVkkNn1gO1xuICBjb25zdCBFVkVOVF9TSE9XJDUgPSBgc2hvdyR7RVZFTlRfS0VZJDZ9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kNSA9IGBzaG93biR7RVZFTlRfS0VZJDZ9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMyA9IGBjbGljayR7RVZFTlRfS0VZJDZ9JHtEQVRBX0FQSV9LRVkkM31gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWSQ2fSR7REFUQV9BUElfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfS0VZVVBfREFUQV9BUEkgPSBga2V5dXAke0VWRU5UX0tFWSQ2fSR7REFUQV9BUElfS0VZJDN9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDYgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUFVQID0gJ2Ryb3B1cCc7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUEVORCA9ICdkcm9wZW5kJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QU1RBUlQgPSAnZHJvcHN0YXJ0JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSID0gJ2Ryb3B1cC1jZW50ZXInO1xuICBjb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUiA9ICdkcm9wZG93bi1jZW50ZXInO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJdOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04gPSBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzfS4ke0NMQVNTX05BTUVfU0hPVyQ2fWA7XG4gIGNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZCQVIgPSAnLm5hdmJhcic7XG4gIGNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnO1xuICBjb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJztcbiAgY29uc3QgUExBQ0VNRU5UX1RPUCA9IGlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0JztcbiAgY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0JztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJztcbiAgY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9UT1BDRU5URVIgPSAndG9wJztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiA9ICdib3R0b20nO1xuICBjb25zdCBEZWZhdWx0JDkgPSB7XG4gICAgYXV0b0Nsb3NlOiB0cnVlLFxuICAgIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgICBkaXNwbGF5OiAnZHluYW1pYycsXG4gICAgb2Zmc2V0OiBbMCwgMl0sXG4gICAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICAgIHJlZmVyZW5jZTogJ3RvZ2dsZSdcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkOSA9IHtcbiAgICBhdXRvQ2xvc2U6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICAgIGRpc3BsYXk6ICdzdHJpbmcnLFxuICAgIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGU7IC8vIGRyb3Bkb3duIHdyYXBwZXJcbiAgICAgIC8vIHRvZG86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICAgIHRoaXMuX21lbnUgPSBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8IFNlbGVjdG9yRW5naW5lLnByZXYodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF0gfHwgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NRU5VLCB0aGlzLl9wYXJlbnQpO1xuICAgICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkOTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ5O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRhO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc1Nob3duKCkgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpO1xuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH07XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XJDUsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NyZWF0ZVBvcHBlcigpO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAhdGhpcy5fcGFyZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSX05BVikpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQ2KTtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOJDUsIHJlbGF0ZWRUYXJnZXQpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9O1xuICAgICAgdGhpcy5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpO1xuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSQ1LCByZWxhdGVkVGFyZ2V0KTtcbiAgICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckNik7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicpO1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOJDUsIHJlbGF0ZWRUYXJnZXQpO1xuICAgIH1cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gc3VwZXIuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50JDEoY29uZmlnLnJlZmVyZW5jZSkgJiYgdHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFBvcHBlciB2aXJ0dWFsIGVsZW1lbnRzIHJlcXVpcmUgYSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRSRhLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCJyZWZlcmVuY2VcIiBwcm92aWRlZCB0eXBlIFwib2JqZWN0XCIgd2l0aG91dCBhIHJlcXVpcmVkIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIgbWV0aG9kLmApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX2NyZWF0ZVBvcHBlcigpIHtcbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpO1xuICAgICAgfVxuICAgICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9wYXJlbnQ7XG4gICAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCQxKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBnZXRFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2U7XG4gICAgICB9XG4gICAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IGNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpO1xuICAgIH1cbiAgICBfaXNTaG93bigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckNik7XG4gICAgfVxuICAgIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgICBjb25zdCBwYXJlbnREcm9wZG93biA9IHRoaXMuX3BhcmVudDtcbiAgICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgICByZXR1cm4gUExBQ0VNRU5UX1JJR0hUO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BTVEFSVCkpIHtcbiAgICAgICAgcmV0dXJuIFBMQUNFTUVOVF9MRUZUO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUF9DRU5URVIpKSB7XG4gICAgICAgIHJldHVybiBQTEFDRU1FTlRfVE9QQ0VOVEVSO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUikpIHtcbiAgICAgICAgcmV0dXJuIFBMQUNFTUVOVF9CT1RUT01DRU5URVI7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIG5lZWQgdG8gdHJpbSB0aGUgdmFsdWUgYmVjYXVzZSBjdXN0b20gcHJvcGVydGllcyBjYW4gYWxzbyBpbmNsdWRlIHNwYWNlc1xuICAgICAgY29uc3QgaXNFbmQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX21lbnUpLmdldFByb3BlcnR5VmFsdWUoJy0tYnMtcG9zaXRpb24nKS50cmltKCkgPT09ICdlbmQnO1xuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUCkpIHtcbiAgICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX1RPUEVORCA6IFBMQUNFTUVOVF9UT1A7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfQk9UVE9NRU5EIDogUExBQ0VNRU5UX0JPVFRPTTtcbiAgICB9XG4gICAgX2RldGVjdE5hdmJhcigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSKSAhPT0gbnVsbDtcbiAgICB9XG4gICAgX2dldE9mZnNldCgpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9ID0gdGhpcy5fY29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCkpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9XG4gICAgX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgICAgbW9kaWZpZXJzOiBbe1xuICAgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfTtcblxuICAgICAgLy8gRGlzYWJsZSBQb3BwZXIgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5IG9yIERyb3Bkb3duIGlzIGluIE5hdmJhclxuICAgICAgaWYgKHRoaXMuX2luTmF2YmFyIHx8IHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJyk7IC8vIHRvZG86djYgcmVtb3ZlXG4gICAgICAgIGRlZmF1bHRCc1BvcHBlckNvbmZpZy5tb2RpZmllcnMgPSBbe1xuICAgICAgICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfV07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAgIC4uLmV4ZWN1dGUodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZywgW2RlZmF1bHRCc1BvcHBlckNvbmZpZ10pXG4gICAgICB9O1xuICAgIH1cbiAgICBfc2VsZWN0TWVudUl0ZW0oe1xuICAgICAga2V5LFxuICAgICAgdGFyZ2V0XG4gICAgfSkge1xuICAgICAgY29uc3QgaXRlbXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMsIHRoaXMuX21lbnUpLmZpbHRlcihlbGVtZW50ID0+IGlzVmlzaWJsZShlbGVtZW50KSk7XG4gICAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG4gICAgICAvLyBhbGxvdyBjeWNsaW5nIHRvIGdldCB0aGUgbGFzdCBpdGVtIGluIGNhc2Uga2V5IGVxdWFscyBBUlJPV19VUF9LRVlcbiAgICAgIGdldE5leHRBY3RpdmVFbGVtZW50KGl0ZW1zLCB0YXJnZXQsIGtleSA9PT0gQVJST1dfRE9XTl9LRVkkMSwgIWl0ZW1zLmluY2x1ZGVzKHRhcmdldCkpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgY2xlYXJNZW51cyhldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ICE9PSBUQUJfS0VZJDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3BlblRvZ2dsZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOKTtcbiAgICAgIGZvciAoY29uc3QgdG9nZ2xlIG9mIG9wZW5Ub2dnbGVzKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBEcm9wZG93bi5nZXRJbnN0YW5jZSh0b2dnbGUpO1xuICAgICAgICBpZiAoIWNvbnRleHQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgY29uc3QgaXNNZW51VGFyZ2V0ID0gY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX21lbnUpO1xuICAgICAgICBpZiAoY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX2VsZW1lbnQpIHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdpbnNpZGUnICYmICFpc01lbnVUYXJnZXQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ291dHNpZGUnICYmIGlzTWVudVRhcmdldCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFiIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgZHJvcGRvd24gbWVudSBvciBldmVudHMgZnJvbSBjb250YWluZWQgaW5wdXRzIHNob3VsZG4ndCBjbG9zZSB0aGUgbWVudVxuICAgICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmIChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSA9PT0gVEFCX0tFWSQxIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGNvbnRleHQuX2VsZW1lbnRcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudDtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0Ll9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIC8vIElmIG5vdCBhbiBVUCB8IERPV04gfCBFU0NBUEUga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAgIC8vIElmIGlucHV0L3RleHRhcmVhICYmIGlmIGtleSBpcyBvdGhlciB0aGFuIEVTQ0FQRSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG5cbiAgICAgIGNvbnN0IGlzSW5wdXQgPSAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKTtcbiAgICAgIGNvbnN0IGlzRXNjYXBlRXZlbnQgPSBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkkMjtcbiAgICAgIGNvbnN0IGlzVXBPckRvd25FdmVudCA9IFtBUlJPV19VUF9LRVkkMSwgQVJST1dfRE9XTl9LRVkkMV0uaW5jbHVkZXMoZXZlbnQua2V5KTtcbiAgICAgIGlmICghaXNVcE9yRG93bkV2ZW50ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpc0lucHV0ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIHRvZG86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICAgIGNvbnN0IGdldFRvZ2dsZUJ1dHRvbiA9IHRoaXMubWF0Y2hlcyhTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzKSA/IHRoaXMgOiBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMpWzBdIHx8IFNlbGVjdG9yRW5naW5lLm5leHQodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUkMylbMF0gfHwgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzLCBldmVudC5kZWxlZ2F0ZVRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24pO1xuICAgICAgaWYgKGlzVXBPckRvd25FdmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UuX2lzU2hvd24oKSkge1xuICAgICAgICAvLyBlbHNlIGlzIGVzY2FwZSBhbmQgd2UgY2hlY2sgaWYgaXQgaXMgc2hvd25cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICAgICAgZ2V0VG9nZ2xlQnV0dG9uLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUkMywgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKTtcbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpO1xuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDMsIERyb3Bkb3duLmNsZWFyTWVudXMpO1xuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKTtcbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykudG9nZ2xlKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvc2Nyb2xsQmFyLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCc7XG4gIGNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJztcbiAgY29uc3QgUFJPUEVSVFlfUEFERElORyA9ICdwYWRkaW5nLXJpZ2h0JztcbiAgY29uc3QgUFJPUEVSVFlfTUFSR0lOID0gJ21hcmdpbi1yaWdodCc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgU2Nyb2xsQmFySGVscGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGdldFdpZHRoKCkge1xuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9pbm5lcldpZHRoI3VzYWdlX25vdGVzXG4gICAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnRXaWR0aCk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgIHRoaXMuX2Rpc2FibGVPdmVyRmxvdygpO1xuICAgICAgLy8gZ2l2ZSBwYWRkaW5nIHRvIGVsZW1lbnQgdG8gYmFsYW5jZSB0aGUgaGlkZGVuIHNjcm9sbGJhciB3aWR0aFxuICAgICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKTtcbiAgICAgIC8vIHRyaWNrOiBXZSBhZGp1c3QgcG9zaXRpdmUgcGFkZGluZ1JpZ2h0IGFuZCBuZWdhdGl2ZSBtYXJnaW5SaWdodCB0byBzdGlja3ktdG9wIGVsZW1lbnRzIHRvIGtlZXAgc2hvd2luZyBmdWxsd2lkdGhcbiAgICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aCk7XG4gICAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlIC0gd2lkdGgpO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgJ292ZXJmbG93Jyk7XG4gICAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcpO1xuICAgICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCBQUk9QRVJUWV9QQURESU5HKTtcbiAgICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTik7XG4gICAgfVxuICAgIGlzT3ZlcmZsb3dpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRXaWR0aCgpID4gMDtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2Rpc2FibGVPdmVyRmxvdygpIHtcbiAgICAgIHRoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH1cbiAgICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHksIGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpO1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIGAke2NhbGxiYWNrKE51bWJlci5wYXJzZUZsb2F0KGNhbGN1bGF0ZWRWYWx1ZSkpfXB4YCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spO1xuICAgIH1cbiAgICBfc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSkge1xuICAgICAgY29uc3QgYWN0dWFsVmFsdWUgPSBlbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSk7XG4gICAgICBpZiAoYWN0dWFsVmFsdWUpIHtcbiAgICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5LCBhY3R1YWxWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5KSB7XG4gICAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSk7XG4gICAgICAgIC8vIFdlIG9ubHkgd2FudCB0byByZW1vdmUgdGhlIHByb3BlcnR5IGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGA7IHRoZSB2YWx1ZSBjYW4gYWxzbyBiZSB6ZXJvXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVQcm9wZXJ0eSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKTtcbiAgICB9XG4gICAgX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIGNhbGxCYWNrKSB7XG4gICAgICBpZiAoaXNFbGVtZW50JDEoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNhbGxCYWNrKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBzZWwgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgY2FsbEJhY2soc2VsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvYmFja2Ryb3AuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQ5ID0gJ2JhY2tkcm9wJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9GQURFJDQgPSAnZmFkZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQ1ID0gJ3Nob3cnO1xuICBjb25zdCBFVkVOVF9NT1VTRURPV04gPSBgbW91c2Vkb3duLmJzLiR7TkFNRSQ5fWA7XG4gIGNvbnN0IERlZmF1bHQkOCA9IHtcbiAgICBjbGFzc05hbWU6ICdtb2RhbC1iYWNrZHJvcCcsXG4gICAgY2xpY2tDYWxsYmFjazogbnVsbCxcbiAgICBpc0FuaW1hdGVkOiBmYWxzZSxcbiAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgLy8gaWYgZmFsc2UsIHdlIHVzZSB0aGUgYmFja2Ryb3AgaGVscGVyIHdpdGhvdXQgYWRkaW5nIGFueSBlbGVtZW50IHRvIHRoZSBkb21cbiAgICByb290RWxlbWVudDogJ2JvZHknIC8vIGdpdmUgdGhlIGNob2ljZSB0byBwbGFjZSBiYWNrZHJvcCB1bmRlciBkaWZmZXJlbnQgZWxlbWVudHNcbiAgfTtcblxuICBjb25zdCBEZWZhdWx0VHlwZSQ4ID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgY2xpY2tDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gICAgaXNBbmltYXRlZDogJ2Jvb2xlYW4nLFxuICAgIGlzVmlzaWJsZTogJ2Jvb2xlYW4nLFxuICAgIHJvb3RFbGVtZW50OiAnKGVsZW1lbnR8c3RyaW5nKSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBCYWNrZHJvcCBleHRlbmRzIENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkODtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ4O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQ5O1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHNob3coY2FsbGJhY2spIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXBwZW5kKCk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpO1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgIHJlZmxvdyhlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckNSk7XG4gICAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaGlkZShjYWxsYmFjaykge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckNSk7XG4gICAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV04pO1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2dldEVsZW1lbnQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NOYW1lID0gdGhpcy5fY29uZmlnLmNsYXNzTmFtZTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUkNCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGJhY2tkcm9wO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gICAgfVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgLy8gdXNlIGdldEVsZW1lbnQoKSB3aXRoIHRoZSBkZWZhdWx0IFwiYm9keVwiIHRvIGdldCBhIGZyZXNoIEVsZW1lbnQgb24gZWFjaCBpbnN0YW50aWF0aW9uXG4gICAgICBjb25maWcucm9vdEVsZW1lbnQgPSBnZXRFbGVtZW50KGNvbmZpZy5yb290RWxlbWVudCk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfYXBwZW5kKCkge1xuICAgICAgaWYgKHRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKTtcbiAgICAgIHRoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOLCAoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9pc0FwcGVuZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgX2VtdWxhdGVBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIHRoaXMuX2dldEVsZW1lbnQoKSwgdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9mb2N1c3RyYXAuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQ4ID0gJ2ZvY3VzdHJhcCc7XG4gIGNvbnN0IERBVEFfS0VZJDUgPSAnYnMuZm9jdXN0cmFwJztcbiAgY29uc3QgRVZFTlRfS0VZJDUgPSBgLiR7REFUQV9LRVkkNX1gO1xuICBjb25zdCBFVkVOVF9GT0NVU0lOJDIgPSBgZm9jdXNpbiR7RVZFTlRfS0VZJDV9YDtcbiAgY29uc3QgRVZFTlRfS0VZRE9XTl9UQUIgPSBga2V5ZG93bi50YWIke0VWRU5UX0tFWSQ1fWA7XG4gIGNvbnN0IFRBQl9LRVkgPSAnVGFiJztcbiAgY29uc3QgVEFCX05BVl9GT1JXQVJEID0gJ2ZvcndhcmQnO1xuICBjb25zdCBUQUJfTkFWX0JBQ0tXQVJEID0gJ2JhY2t3YXJkJztcbiAgY29uc3QgRGVmYXVsdCQ3ID0ge1xuICAgIGF1dG9mb2N1czogdHJ1ZSxcbiAgICB0cmFwRWxlbWVudDogbnVsbCAvLyBUaGUgZWxlbWVudCB0byB0cmFwIGZvY3VzIGluc2lkZSBvZlxuICB9O1xuXG4gIGNvbnN0IERlZmF1bHRUeXBlJDcgPSB7XG4gICAgYXV0b2ZvY3VzOiAnYm9vbGVhbicsXG4gICAgdHJhcEVsZW1lbnQ6ICdlbGVtZW50J1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIEZvY3VzVHJhcCBleHRlbmRzIENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDc7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkNztcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkODtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9mb2N1cykge1xuICAgICAgICB0aGlzLl9jb25maWcudHJhcEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSQ1KTsgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4kMiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlRm9jdXNpbihldmVudCkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX1RBQiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlS2V5ZG93bihldmVudCkpO1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZJDUpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfaGFuZGxlRm9jdXNpbihldmVudCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB0cmFwRWxlbWVudFxuICAgICAgfSA9IHRoaXMuX2NvbmZpZztcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGRvY3VtZW50IHx8IGV2ZW50LnRhcmdldCA9PT0gdHJhcEVsZW1lbnQgfHwgdHJhcEVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZvY3VzYWJsZUNoaWxkcmVuKHRyYXBFbGVtZW50KTtcbiAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdHJhcEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9PT0gVEFCX05BVl9CQUNLV0FSRCkge1xuICAgICAgICBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHNbMF0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2hhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXkgIT09IFRBQl9LRVkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9IGV2ZW50LnNoaWZ0S2V5ID8gVEFCX05BVl9CQUNLV0FSRCA6IFRBQl9OQVZfRk9SV0FSRDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIG1vZGFsLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkNyA9ICdtb2RhbCc7XG4gIGNvbnN0IERBVEFfS0VZJDQgPSAnYnMubW9kYWwnO1xuICBjb25zdCBFVkVOVF9LRVkkNCA9IGAuJHtEQVRBX0tFWSQ0fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQyID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVTQ0FQRV9LRVkkMSA9ICdFc2NhcGUnO1xuICBjb25zdCBFVkVOVF9ISURFJDQgPSBgaGlkZSR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQkMSA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9ISURERU4kNCA9IGBoaWRkZW4ke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX1NIT1ckNCA9IGBzaG93JHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9TSE9XTiQ0ID0gYHNob3duJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9SRVNJWkUkMSA9IGByZXNpemUke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MgPSBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyQxID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMiA9IGBjbGljayR7RVZFTlRfS0VZJDR9JHtEQVRBX0FQSV9LRVkkMn1gO1xuICBjb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtb3Blbic7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQzID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckNCA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TVEFUSUMgPSAnbW9kYWwtc3RhdGljJztcbiAgY29uc3QgT1BFTl9TRUxFQ1RPUiQxID0gJy5tb2RhbC5zaG93JztcbiAgY29uc3QgU0VMRUNUT1JfRElBTE9HID0gJy5tb2RhbC1kaWFsb2cnO1xuICBjb25zdCBTRUxFQ1RPUl9NT0RBTF9CT0RZID0gJy5tb2RhbC1ib2R5JztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUkMiA9ICdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXSc7XG4gIGNvbnN0IERlZmF1bHQkNiA9IHtcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBmb2N1czogdHJ1ZSxcbiAgICBrZXlib2FyZDogdHJ1ZVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQ2ID0ge1xuICAgIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAgZm9jdXM6ICdib29sZWFuJyxcbiAgICBrZXlib2FyZDogJ2Jvb2xlYW4nXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgTW9kYWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgdGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpO1xuICAgICAgdGhpcy5fZm9jdXN0cmFwID0gdGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpO1xuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9zY3JvbGxCYXIgPSBuZXcgU2Nyb2xsQmFySGVscGVyKCk7XG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ2O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDY7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDc7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldCk7XG4gICAgfVxuICAgIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1ckNCwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9KTtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICB0aGlzLl9zY3JvbGxCYXIuaGlkZSgpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfT1BFTik7XG4gICAgICB0aGlzLl9hZGp1c3REaWFsb2coKTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDQpO1xuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ0KTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5faGlkZU1vZGFsKCksIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2lzQW5pbWF0ZWQoKSk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBmb3IgKGNvbnN0IGh0bWxFbGVtZW50IG9mIFt3aW5kb3csIHRoaXMuX2RpYWxvZ10pIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihodG1sRWxlbWVudCwgRVZFTlRfS0VZJDQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgaGFuZGxlVXBkYXRlKCkge1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgICAgaXNWaXNpYmxlOiBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCksXG4gICAgICAgIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZSxcbiAgICAgICAgaXNBbmltYXRlZDogdGhpcy5faXNBbmltYXRlZCgpXG4gICAgICB9KTtcbiAgICB9XG4gICAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KTtcbiAgICB9XG4gICAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIC8vIHRyeSB0byBhcHBlbmQgZHluYW1pYyBtb2RhbFxuICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgY29uc3QgbW9kYWxCb2R5ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NT0RBTF9CT0RZLCB0aGlzLl9kaWFsb2cpO1xuICAgICAgaWYgKG1vZGFsQm9keSkge1xuICAgICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgIH1cbiAgICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckNCk7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04kNCwge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayh0cmFuc2l0aW9uQ29tcGxldGUsIHRoaXMuX2RpYWxvZywgdGhpcy5faXNBbmltYXRlZCgpKTtcbiAgICB9XG4gICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUyQxLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkkMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKTtcbiAgICAgIH0pO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFJDEsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgIXRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICAgIHRoaXMuX2FkanVzdERpYWxvZygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICAvLyBhIGJhZCB0cmljayB0byBzZWdyZWdhdGUgY2xpY2tzIHRoYXQgbWF5IHN0YXJ0IGluc2lkZSBkaWFsb2cgYnV0IGVuZCBvdXRzaWRlLCBhbmQgYXZvaWQgbGlzdGVuIHRvIHNjcm9sbGJhciBjbGlja3NcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBldmVudDIgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgfHwgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQyLnRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIF9oaWRlTW9kYWwoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJyk7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfT1BFTik7XG4gICAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsQmFyLnJlc2V0KCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiQ0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBfaXNBbmltYXRlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkMyk7XG4gICAgfVxuICAgIF90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkge1xuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQkMSk7XG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3QgaW5pdGlhbE92ZXJmbG93WSA9IHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZO1xuICAgICAgLy8gcmV0dXJuIGlmIHRoZSBmb2xsb3dpbmcgYmFja2dyb3VuZCB0cmFuc2l0aW9uIGhhc24ndCB5ZXQgY29tcGxldGVkXG4gICAgICBpZiAoaW5pdGlhbE92ZXJmbG93WSA9PT0gJ2hpZGRlbicgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TVEFUSUMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TVEFUSUMpO1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NUQVRJQyk7XG4gICAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gaW5pdGlhbE92ZXJmbG93WTtcbiAgICAgICAgfSwgdGhpcy5fZGlhbG9nKTtcbiAgICAgIH0sIHRoaXMuX2RpYWxvZyk7XG4gICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgICAgKi9cblxuICAgIF9hZGp1c3REaWFsb2coKSB7XG4gICAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuX3Njcm9sbEJhci5nZXRXaWR0aCgpO1xuICAgICAgY29uc3QgaXNCb2R5T3ZlcmZsb3dpbmcgPSBzY3JvbGxiYXJXaWR0aCA+IDA7XG4gICAgICBpZiAoaXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGlzUlRMKCkgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgICAgfVxuICAgICAgaWYgKCFpc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdSaWdodCcgOiAncGFkZGluZ0xlZnQnO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcbiAgICAgIH1cbiAgICB9XG4gICAgX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJyc7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMiwgU0VMRUNUT1JfREFUQV9UT0dHTEUkMiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKTtcbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfU0hPVyQ0LCBzaG93RXZlbnQgPT4ge1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiQ0LCAoKSA9PiB7XG4gICAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBtb2RhbCB0b2dnbGVyIHdoaWxlIGFub3RoZXIgb25lIGlzIG9wZW5cbiAgICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUiQxKTtcbiAgICBpZiAoYWxyZWFkeU9wZW4pIHtcbiAgICAgIE1vZGFsLmdldEluc3RhbmNlKGFscmVhZHlPcGVuKS5oaWRlKCk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldCk7XG4gICAgZGF0YS50b2dnbGUodGhpcyk7XG4gIH0pO1xuICBlbmFibGVEaXNtaXNzVHJpZ2dlcihNb2RhbCk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oTW9kYWwpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgb2ZmY2FudmFzLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkNiA9ICdvZmZjYW52YXMnO1xuICBjb25zdCBEQVRBX0tFWSQzID0gJ2JzLm9mZmNhbnZhcyc7XG4gIGNvbnN0IEVWRU5UX0tFWSQzID0gYC4ke0RBVEFfS0VZJDN9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZJDEgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSQyID0gYGxvYWQke0VWRU5UX0tFWSQzfSR7REFUQV9BUElfS0VZJDF9YDtcbiAgY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckMyA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HJDEgPSAnc2hvd2luZyc7XG4gIGNvbnN0IENMQVNTX05BTUVfSElESU5HID0gJ2hpZGluZyc7XG4gIGNvbnN0IENMQVNTX05BTUVfQkFDS0RST1AgPSAnb2ZmY2FudmFzLWJhY2tkcm9wJztcbiAgY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcub2ZmY2FudmFzLnNob3cnO1xuICBjb25zdCBFVkVOVF9TSE9XJDMgPSBgc2hvdyR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kMyA9IGBzaG93biR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfSElERSQzID0gYGhpZGUke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQzID0gYGhpZGRlbiR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMSA9IGBjbGljayR7RVZFTlRfS0VZJDN9JHtEQVRBX0FQSV9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVkkM31gO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQxID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXSc7XG4gIGNvbnN0IERlZmF1bHQkNSA9IHtcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICBzY3JvbGw6IGZhbHNlXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDUgPSB7XG4gICAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICAgIHNjcm9sbDogJ2Jvb2xlYW4nXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgT2ZmY2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKTtcbiAgICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKTtcbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkNTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkNjtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KTtcbiAgICB9XG4gICAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XJDMsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSk7XG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNTaG93biA9IHRydWU7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5zaG93KCk7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSk7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkckMSk7XG4gICAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwgfHwgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQzKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORyQxKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04kMywge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDMpO1xuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICB0aGlzLl9lbGVtZW50LmJsdXIoKTtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJRElORyk7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKCk7XG4gICAgICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDMsIENMQVNTX05BTUVfSElESU5HKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOJDMpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsYmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgICAgY29uc3QgY2xpY2tDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfTtcblxuICAgICAgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCk7XG4gICAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgICAgY2xhc3NOYW1lOiBDTEFTU19OQU1FX0JBQ0tEUk9QLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGlzQW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHJvb3RFbGVtZW50OiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgIGNsaWNrQ2FsbGJhY2s6IGlzVmlzaWJsZSA/IGNsaWNrQ2FsbGJhY2sgOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gICAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KTtcbiAgICB9XG4gICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMSwgU0VMRUNUT1JfREFUQV9UT0dHTEUkMSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKTtcbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfSElEREVOJDMsICgpID0+IHtcbiAgICAgIC8vIGZvY3VzIG9uIHRyaWdnZXIgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBhIHRvZ2dsZXIgb2YgYW4gb2ZmY2FudmFzLCB3aGlsZSBhbm90aGVyIGlzIG9wZW5cbiAgICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUik7XG4gICAgaWYgKGFscmVhZHlPcGVuICYmIGFscmVhZHlPcGVuICE9PSB0YXJnZXQpIHtcbiAgICAgIE9mZmNhbnZhcy5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KTtcbiAgICBkYXRhLnRvZ2dsZSh0aGlzKTtcbiAgfSk7XG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEkkMiwgKCkgPT4ge1xuICAgIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgU2VsZWN0b3JFbmdpbmUuZmluZChPUEVOX1NFTEVDVE9SKSkge1xuICAgICAgT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2Uoc2VsZWN0b3IpLnNob3coKTtcbiAgICB9XG4gIH0pO1xuICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZCgnW2FyaWEtbW9kYWxdW2NsYXNzKj1zaG93XVtjbGFzcyo9b2ZmY2FudmFzLV0nKSkge1xuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCkuaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyKE9mZmNhbnZhcyk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oT2ZmY2FudmFzKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvc2FuaXRpemVyLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCB1cmlBdHRyaWJ1dGVzID0gbmV3IFNldChbJ2JhY2tncm91bmQnLCAnY2l0ZScsICdocmVmJywgJ2l0ZW10eXBlJywgJ2xvbmdkZXNjJywgJ3Bvc3RlcicsICdzcmMnLCAneGxpbms6aHJlZiddKTtcbiAgY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pO1xuXG4gIC8qKlxuICAgKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIGEgY29tbW9ubHkgdXNlZnVsIHN1YnNldCBvZiBVUkxzIHRoYXQgYXJlIHNhZmUuXG4gICAqXG4gICAqIFNob3V0LW91dCB0byBBbmd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi8xMi4yLngvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAgICovXG4gIGNvbnN0IFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/Oig/Omh0dHBzP3xtYWlsdG98ZnRwfHRlbHxmaWxlfHNtcyk6fFteIyYvOj9dKig/OlsjLz9dfCQpKS9pO1xuXG4gIC8qKlxuICAgKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAgICpcbiAgICogU2hvdXQtb3V0IHRvIEFuZ3VsYXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzEyLjIueC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICAgKi9cbiAgY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFtcXGQrL2Etel0rPSokL2k7XG4gIGNvbnN0IGFsbG93ZWRBdHRyaWJ1dGUgPSAoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkgPT4ge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoYWxsb3dlZEF0dHJpYnV0ZUxpc3QuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgIGlmICh1cmlBdHRyaWJ1dGVzLmhhcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihTQUZFX1VSTF9QQVRURVJOLnRlc3QoYXR0cmlidXRlLm5vZGVWYWx1ZSkgfHwgREFUQV9VUkxfUEFUVEVSTi50ZXN0KGF0dHJpYnV0ZS5ub2RlVmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICAgIHJldHVybiBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoYXR0cmlidXRlUmVnZXggPT4gYXR0cmlidXRlUmVnZXggaW5zdGFuY2VvZiBSZWdFeHApLnNvbWUocmVnZXggPT4gcmVnZXgudGVzdChhdHRyaWJ1dGVOYW1lKSk7XG4gIH07XG4gIGNvbnN0IERlZmF1bHRBbGxvd2xpc3QgPSB7XG4gICAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICAgIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gICAgYXJlYTogW10sXG4gICAgYjogW10sXG4gICAgYnI6IFtdLFxuICAgIGNvbDogW10sXG4gICAgY29kZTogW10sXG4gICAgZGl2OiBbXSxcbiAgICBlbTogW10sXG4gICAgaHI6IFtdLFxuICAgIGgxOiBbXSxcbiAgICBoMjogW10sXG4gICAgaDM6IFtdLFxuICAgIGg0OiBbXSxcbiAgICBoNTogW10sXG4gICAgaDY6IFtdLFxuICAgIGk6IFtdLFxuICAgIGltZzogWydzcmMnLCAnc3Jjc2V0JywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgICBsaTogW10sXG4gICAgb2w6IFtdLFxuICAgIHA6IFtdLFxuICAgIHByZTogW10sXG4gICAgczogW10sXG4gICAgc21hbGw6IFtdLFxuICAgIHNwYW46IFtdLFxuICAgIHN1YjogW10sXG4gICAgc3VwOiBbXSxcbiAgICBzdHJvbmc6IFtdLFxuICAgIHU6IFtdLFxuICAgIHVsOiBbXVxuICB9O1xuICBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgYWxsb3dMaXN0LCBzYW5pdGl6ZUZ1bmN0aW9uKSB7XG4gICAgaWYgKCF1bnNhZmVIdG1sLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHVuc2FmZUh0bWw7XG4gICAgfVxuICAgIGlmIChzYW5pdGl6ZUZ1bmN0aW9uICYmIHR5cGVvZiBzYW5pdGl6ZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2FuaXRpemVGdW5jdGlvbih1bnNhZmVIdG1sKTtcbiAgICB9XG4gICAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKTtcbiAgICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKTtcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdLmNvbmNhdCguLi5jcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpO1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgY29uc3QgZWxlbWVudE5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKGFsbG93TGlzdCkuaW5jbHVkZXMoZWxlbWVudE5hbWUpKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdLmNvbmNhdCguLi5lbGVtZW50LmF0dHJpYnV0ZXMpO1xuICAgICAgY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoYWxsb3dMaXN0WycqJ10gfHwgW10sIGFsbG93TGlzdFtlbGVtZW50TmFtZV0gfHwgW10pO1xuICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlTGlzdCkge1xuICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlcykpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUw7XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvdGVtcGxhdGUtZmFjdG9yeS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDUgPSAnVGVtcGxhdGVGYWN0b3J5JztcbiAgY29uc3QgRGVmYXVsdCQ0ID0ge1xuICAgIGFsbG93TGlzdDogRGVmYXVsdEFsbG93bGlzdCxcbiAgICBjb250ZW50OiB7fSxcbiAgICAvLyB7IHNlbGVjdG9yIDogdGV4dCAsICBzZWxlY3RvcjIgOiB0ZXh0MiAsIH1cbiAgICBleHRyYUNsYXNzOiAnJyxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBzYW5pdGl6ZTogdHJ1ZSxcbiAgICBzYW5pdGl6ZUZuOiBudWxsLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48L2Rpdj4nXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDQgPSB7XG4gICAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgICBjb250ZW50OiAnb2JqZWN0JyxcbiAgICBleHRyYUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIGh0bWw6ICdib29sZWFuJyxcbiAgICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICAgIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICAgIHRlbXBsYXRlOiAnc3RyaW5nJ1xuICB9O1xuICBjb25zdCBEZWZhdWx0Q29udGVudFR5cGUgPSB7XG4gICAgZW50cnk6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb258bnVsbCknLFxuICAgIHNlbGVjdG9yOiAnKHN0cmluZ3xlbGVtZW50KSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBUZW1wbGF0ZUZhY3RvcnkgZXh0ZW5kcyBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ0O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDQ7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDU7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgZ2V0Q29udGVudCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KS5tYXAoY29uZmlnID0+IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGNvbmZpZykpLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG4gICAgaGFzQ29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldENvbnRlbnQoKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBjaGFuZ2VDb250ZW50KGNvbnRlbnQpIHtcbiAgICAgIHRoaXMuX2NoZWNrQ29udGVudChjb250ZW50KTtcbiAgICAgIHRoaXMuX2NvbmZpZy5jb250ZW50ID0ge1xuICAgICAgICAuLi50aGlzLl9jb25maWcuY29udGVudCxcbiAgICAgICAgLi4uY29udGVudFxuICAgICAgfTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b0h0bWwoKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRlbXBsYXRlV3JhcHBlci5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKHRoaXMuX2NvbmZpZy50ZW1wbGF0ZSk7XG4gICAgICBmb3IgKGNvbnN0IFtzZWxlY3RvciwgdGV4dF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnLmNvbnRlbnQpKSB7XG4gICAgICAgIHRoaXMuX3NldENvbnRlbnQodGVtcGxhdGVXcmFwcGVyLCB0ZXh0LCBzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRlbXBsYXRlV3JhcHBlci5jaGlsZHJlblswXTtcbiAgICAgIGNvbnN0IGV4dHJhQ2xhc3MgPSB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuZXh0cmFDbGFzcyk7XG4gICAgICBpZiAoZXh0cmFDbGFzcykge1xuICAgICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKC4uLmV4dHJhQ2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF90eXBlQ2hlY2tDb25maWcoY29uZmlnKSB7XG4gICAgICBzdXBlci5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl9jaGVja0NvbnRlbnQoY29uZmlnLmNvbnRlbnQpO1xuICAgIH1cbiAgICBfY2hlY2tDb250ZW50KGFyZykge1xuICAgICAgZm9yIChjb25zdCBbc2VsZWN0b3IsIGNvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGFyZykpIHtcbiAgICAgICAgc3VwZXIuX3R5cGVDaGVja0NvbmZpZyh7XG4gICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgZW50cnk6IGNvbnRlbnRcbiAgICAgICAgfSwgRGVmYXVsdENvbnRlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3NldENvbnRlbnQodGVtcGxhdGUsIGNvbnRlbnQsIHNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCB0ZW1wbGF0ZSk7XG4gICAgICBpZiAoIXRlbXBsYXRlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb250ZW50ID0gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oY29udGVudCk7XG4gICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgdGVtcGxhdGVFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaXNFbGVtZW50JDEoY29udGVudCkpIHtcbiAgICAgICAgdGhpcy5fcHV0RWxlbWVudEluVGVtcGxhdGUoZ2V0RWxlbWVudChjb250ZW50KSwgdGVtcGxhdGVFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKGNvbnRlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIH1cbiAgICBfbWF5YmVTYW5pdGl6ZShhcmcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25maWcuc2FuaXRpemUgPyBzYW5pdGl6ZUh0bWwoYXJnLCB0aGlzLl9jb25maWcuYWxsb3dMaXN0LCB0aGlzLl9jb25maWcuc2FuaXRpemVGbikgOiBhcmc7XG4gICAgfVxuICAgIF9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBleGVjdXRlKGFyZywgW3RoaXNdKTtcbiAgICB9XG4gICAgX3B1dEVsZW1lbnRJblRlbXBsYXRlKGVsZW1lbnQsIHRlbXBsYXRlRWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGVtcGxhdGVFbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGVtcGxhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHRvb2x0aXAuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQ0ID0gJ3Rvb2x0aXAnO1xuICBjb25zdCBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBuZXcgU2V0KFsnc2FuaXRpemUnLCAnYWxsb3dMaXN0JywgJ3Nhbml0aXplRm4nXSk7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQyID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX01PREFMID0gJ21vZGFsJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDIgPSAnc2hvdyc7XG4gIGNvbnN0IFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIgPSAnLnRvb2x0aXAtaW5uZXInO1xuICBjb25zdCBTRUxFQ1RPUl9NT0RBTCA9IGAuJHtDTEFTU19OQU1FX01PREFMfWA7XG4gIGNvbnN0IEVWRU5UX01PREFMX0hJREUgPSAnaGlkZS5icy5tb2RhbCc7XG4gIGNvbnN0IFRSSUdHRVJfSE9WRVIgPSAnaG92ZXInO1xuICBjb25zdCBUUklHR0VSX0ZPQ1VTID0gJ2ZvY3VzJztcbiAgY29uc3QgVFJJR0dFUl9DTElDSyA9ICdjbGljayc7XG4gIGNvbnN0IFRSSUdHRVJfTUFOVUFMID0gJ21hbnVhbCc7XG4gIGNvbnN0IEVWRU5UX0hJREUkMiA9ICdoaWRlJztcbiAgY29uc3QgRVZFTlRfSElEREVOJDIgPSAnaGlkZGVuJztcbiAgY29uc3QgRVZFTlRfU0hPVyQyID0gJ3Nob3cnO1xuICBjb25zdCBFVkVOVF9TSE9XTiQyID0gJ3Nob3duJztcbiAgY29uc3QgRVZFTlRfSU5TRVJURUQgPSAnaW5zZXJ0ZWQnO1xuICBjb25zdCBFVkVOVF9DTElDSyQxID0gJ2NsaWNrJztcbiAgY29uc3QgRVZFTlRfRk9DVVNJTiQxID0gJ2ZvY3VzaW4nO1xuICBjb25zdCBFVkVOVF9GT0NVU09VVCQxID0gJ2ZvY3Vzb3V0JztcbiAgY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9ICdtb3VzZWVudGVyJztcbiAgY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9ICdtb3VzZWxlYXZlJztcbiAgY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgICBBVVRPOiAnYXV0bycsXG4gICAgVE9QOiAndG9wJyxcbiAgICBSSUdIVDogaXNSVEwoKSA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gICAgQk9UVE9NOiAnYm90dG9tJyxcbiAgICBMRUZUOiBpc1JUTCgpID8gJ3JpZ2h0JyA6ICdsZWZ0J1xuICB9O1xuICBjb25zdCBEZWZhdWx0JDMgPSB7XG4gICAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gICAgY29udGFpbmVyOiBmYWxzZSxcbiAgICBjdXN0b21DbGFzczogJycsXG4gICAgZGVsYXk6IDAsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnRzOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLFxuICAgIGh0bWw6IGZhbHNlLFxuICAgIG9mZnNldDogWzAsIDBdLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICAgIHNhbml0aXplOiB0cnVlLFxuICAgIHNhbml0aXplRm46IG51bGwsXG4gICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+JyArICc8L2Rpdj4nLFxuICAgIHRpdGxlOiAnJyxcbiAgICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDMgPSB7XG4gICAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICAgIGNvbnRhaW5lcjogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gICAgY3VzdG9tQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgZGVsYXk6ICcobnVtYmVyfG9iamVjdCknLFxuICAgIGZhbGxiYWNrUGxhY2VtZW50czogJ2FycmF5JyxcbiAgICBodG1sOiAnYm9vbGVhbicsXG4gICAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICAgIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICAgIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gICAgdGVtcGxhdGU6ICdzdHJpbmcnLFxuICAgIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gICAgdHJpZ2dlcjogJ3N0cmluZydcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBUb29sdGlwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpO1xuICAgICAgfVxuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcblxuICAgICAgLy8gUHJpdmF0ZVxuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSAwO1xuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkgPSBudWxsO1xuICAgICAgdGhpcy5fbmV3Q29udGVudCA9IG51bGw7XG5cbiAgICAgIC8vIFByb3RlY3RlZFxuICAgICAgdGhpcy50aXAgPSBudWxsO1xuICAgICAgdGhpcy5fc2V0TGlzdGVuZXJzKCk7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9maXhUaXRsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQzO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDM7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDQ7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgZW5hYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0b2dnbGVFbmFibGVkKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZDtcbiAgICB9XG4gICAgdG9nZ2xlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICF0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrO1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICB0aGlzLl9sZWF2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9lbnRlcigpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTU9EQUwpLCBFVkVOVF9NT0RBTF9ISURFLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKTtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJykpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuX2lzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1ckMikpO1xuICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGZpbmRTaGFkb3dSb290KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgY29uc3QgaXNJblRoZURvbSA9IChzaGFkb3dSb290IHx8IHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gdG9kbyB2NiByZW1vdmUgdGhpcyBPUiBtYWtlIGl0IG9wdGlvbmFsXG4gICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKCk7XG4gICAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUaXBFbGVtZW50KCk7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcC5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb250YWluZXJcbiAgICAgIH0gPSB0aGlzLl9jb25maWc7XG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGlwKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSU5TRVJURUQpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BvcHBlciA9IHRoaXMuX2NyZWF0ZVBvcHBlcih0aXApO1xuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1dOJDIpKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLl9sZWF2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSElERSQyKSk7XG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfQ0xJQ0tdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfRk9DVVNdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfSE9WRVJdID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBudWxsOyAvLyBpdCBpcyBhIHRyaWNrIHRvIHN1cHBvcnQgbWFudWFsIHRyaWdnZXJpbmdcblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSElEREVOJDIpKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgdGhpcy5faXNBbmltYXRlZCgpKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLl9nZXRUaXRsZSgpKTtcbiAgICB9XG4gICAgX2dldFRpcEVsZW1lbnQoKSB7XG4gICAgICBpZiAoIXRoaXMudGlwKSB7XG4gICAgICAgIHRoaXMudGlwID0gdGhpcy5fY3JlYXRlVGlwRWxlbWVudCh0aGlzLl9uZXdDb250ZW50IHx8IHRoaXMuX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRpcDtcbiAgICB9XG4gICAgX2NyZWF0ZVRpcEVsZW1lbnQoY29udGVudCkge1xuICAgICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGVtcGxhdGVGYWN0b3J5KGNvbnRlbnQpLnRvSHRtbCgpO1xuXG4gICAgICAvLyB0b2RvOiByZW1vdmUgdGhpcyBjaGVjayBvbiB2NlxuICAgICAgaWYgKCF0aXApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUkMiwgQ0xBU1NfTkFNRV9TSE9XJDIpO1xuICAgICAgLy8gdG9kbzogb24gdjYgdGhlIGZvbGxvd2luZyBjYW4gYmUgYWNoaWV2ZWQgd2l0aCBDU1Mgb25seVxuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoYGJzLSR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hdXRvYCk7XG4gICAgICBjb25zdCB0aXBJZCA9IGdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpLnRvU3RyaW5nKCk7XG4gICAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKTtcbiAgICAgIGlmICh0aGlzLl9pc0FuaW1hdGVkKCkpIHtcbiAgICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFJDIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRpcDtcbiAgICB9XG4gICAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgICB0aGlzLl9uZXdDb250ZW50ID0gY29udGVudDtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2dldFRlbXBsYXRlRmFjdG9yeShjb250ZW50KSB7XG4gICAgICBpZiAodGhpcy5fdGVtcGxhdGVGYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeS5jaGFuZ2VDb250ZW50KGNvbnRlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5ID0gbmV3IFRlbXBsYXRlRmFjdG9yeSh7XG4gICAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAgIC8vIHRoZSBgY29udGVudGAgdmFyIGhhcyB0byBiZSBhZnRlciBgdGhpcy5fY29uZmlnYFxuICAgICAgICAgIC8vIHRvIG92ZXJyaWRlIGNvbmZpZy5jb250ZW50IGluIGNhc2Ugb2YgcG9wb3ZlclxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgZXh0cmFDbGFzczogdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmN1c3RvbUNsYXNzKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZUZhY3Rvcnk7XG4gICAgfVxuICAgIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbU0VMRUNUT1JfVE9PTFRJUF9JTk5FUl06IHRoaXMuX2dldFRpdGxlKClcbiAgICAgIH07XG4gICAgfVxuICAgIF9nZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcudGl0bGUpIHx8IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJyk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldE9yQ3JlYXRlSW5zdGFuY2UoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgIH1cbiAgICBfaXNBbmltYXRlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25maWcuYW5pbWF0aW9uIHx8IHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkMik7XG4gICAgfVxuICAgIF9pc1Nob3duKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckMik7XG4gICAgfVxuICAgIF9jcmVhdGVQb3BwZXIodGlwKSB7XG4gICAgICBjb25zdCBwbGFjZW1lbnQgPSBleGVjdXRlKHRoaXMuX2NvbmZpZy5wbGFjZW1lbnQsIFt0aGlzLCB0aXAsIHRoaXMuX2VsZW1lbnRdKTtcbiAgICAgIGNvbnN0IGF0dGFjaG1lbnQgPSBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXTtcbiAgICAgIHJldHVybiBjcmVhdGVQb3BwZXIodGhpcy5fZWxlbWVudCwgdGlwLCB0aGlzLl9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkpO1xuICAgIH1cbiAgICBfZ2V0T2Zmc2V0KCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBvZmZzZXRcbiAgICAgIH0gPSB0aGlzLl9jb25maWc7XG4gICAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VJbnQodmFsdWUsIDEwKSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH1cbiAgICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gZXhlY3V0ZShhcmcsIFt0aGlzLl9lbGVtZW50XSk7XG4gICAgfVxuICAgIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiB0aGlzLl9jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRzXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnYXJyb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGAuJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWFycm93YFxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdwcmVTZXRQbGFjZW1lbnQnLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGhhc2U6ICdiZWZvcmVNYWluJyxcbiAgICAgICAgICBmbjogZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBQcmUtc2V0IFBvcHBlcidzIHBsYWNlbWVudCBhdHRyaWJ1dGUgaW4gb3JkZXIgdG8gcmVhZCB0aGUgYXJyb3cgc2l6ZXMgcHJvcGVybHkuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIFBvcHBlciBtaXhlcyB1cCB0aGUgd2lkdGggYW5kIGhlaWdodCBkaW1lbnNpb25zIHNpbmNlIHRoZSBpbml0aWFsIGFycm93IHN0eWxlIGlzIGZvciB0b3AgcGxhY2VtZW50XG4gICAgICAgICAgICB0aGlzLl9nZXRUaXBFbGVtZW50KCkuc2V0QXR0cmlidXRlKCdkYXRhLXBvcHBlci1wbGFjZW1lbnQnLCBkYXRhLnN0YXRlLnBsYWNlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgICAgLi4uZXhlY3V0ZSh0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnLCBbZGVmYXVsdEJzUG9wcGVyQ29uZmlnXSlcbiAgICAgIH07XG4gICAgfVxuICAgIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuX2NvbmZpZy50cmlnZ2VyLnNwbGl0KCcgJyk7XG4gICAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdHJpZ2dlcnMpIHtcbiAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfQ0xJQ0skMSksIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCk7XG4gICAgICAgICAgICBjb250ZXh0LnRvZ2dsZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRSSUdHRVJfTUFOVUFMKSB7XG4gICAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgPyB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9NT1VTRUVOVEVSKSA6IHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTSU4kMSk7XG4gICAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID8gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VMRUFWRSkgOiB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9GT0NVU09VVCQxKTtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRJbiwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KTtcbiAgICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnRleHQuX2VudGVyKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50T3V0LCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpO1xuICAgICAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gY29udGV4dC5fZWxlbWVudC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnRleHQuX2xlYXZlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcik7XG4gICAgfVxuICAgIF9maXhUaXRsZSgpIHtcbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSAmJiAhdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aXRsZSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScsIHRpdGxlKTsgLy8gRE8gTk9UIFVTRSBJVC4gSXMgb25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xuICAgIH1cbiAgICBfZW50ZXIoKSB7XG4gICAgICBpZiAodGhpcy5faXNTaG93bigpIHx8IHRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICB0aGlzLl9pc0hvdmVyZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5LnNob3cpO1xuICAgIH1cbiAgICBfbGVhdmUoKSB7XG4gICAgICBpZiAodGhpcy5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheS5oaWRlKTtcbiAgICB9XG4gICAgX3NldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCk7XG4gICAgfVxuICAgIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fYWN0aXZlVHJpZ2dlcikuaW5jbHVkZXModHJ1ZSk7XG4gICAgfVxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25zdCBkYXRhQXR0cmlidXRlcyA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgZm9yIChjb25zdCBkYXRhQXR0cmlidXRlIG9mIE9iamVjdC5rZXlzKGRhdGFBdHRyaWJ1dGVzKSkge1xuICAgICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmhhcyhkYXRhQXR0cmlidXRlKSkge1xuICAgICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cmlidXRlXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uZmlnID0ge1xuICAgICAgICAuLi5kYXRhQXR0cmlidXRlcyxcbiAgICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgICAgfTtcbiAgICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZyk7XG4gICAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZyk7XG4gICAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgY29uZmlnLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlID8gZG9jdW1lbnQuYm9keSA6IGdldEVsZW1lbnQoY29uZmlnLmNvbnRhaW5lcik7XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHt9O1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnKSkge1xuICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgY29uZmlnW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uZmlnLnNlbGVjdG9yID0gZmFsc2U7XG4gICAgICBjb25maWcudHJpZ2dlciA9ICdtYW51YWwnO1xuXG4gICAgICAvLyBJbiB0aGUgZnV0dXJlIGNhbiBiZSByZXBsYWNlZCB3aXRoOlxuICAgICAgLy8gY29uc3Qga2V5c1dpdGhEaWZmZXJlbnRWYWx1ZXMgPSBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcpLmZpbHRlcihlbnRyeSA9PiB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRbZW50cnlbMF1dICE9PSB0aGlzLl9jb25maWdbZW50cnlbMF1dKVxuICAgICAgLy8gYE9iamVjdC5mcm9tRW50cmllcyhrZXlzV2l0aERpZmZlcmVudFZhbHVlcylgXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfZGlzcG9zZVBvcHBlcigpIHtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgICB0aGlzLnRpcC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy50aXAgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFRvb2x0aXAuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvb2x0aXApO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgcG9wb3Zlci5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDMgPSAncG9wb3Zlcic7XG4gIGNvbnN0IFNFTEVDVE9SX1RJVExFID0gJy5wb3BvdmVyLWhlYWRlcic7XG4gIGNvbnN0IFNFTEVDVE9SX0NPTlRFTlQgPSAnLnBvcG92ZXItYm9keSc7XG4gIGNvbnN0IERlZmF1bHQkMiA9IHtcbiAgICAuLi5Ub29sdGlwLkRlZmF1bHQsXG4gICAgY29udGVudDogJycsXG4gICAgb2Zmc2V0OiBbMCwgOF0sXG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48L2Rpdj4nICsgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICsgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj4nICsgJzwvZGl2PicsXG4gICAgdHJpZ2dlcjogJ2NsaWNrJ1xuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQyID0ge1xuICAgIC4uLlRvb2x0aXAuRGVmYXVsdFR5cGUsXG4gICAgY29udGVudDogJyhudWxsfHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDI7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkMjtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkMztcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZXNcbiAgICBfaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRUaXRsZSgpIHx8IHRoaXMuX2dldENvbnRlbnQoKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtTRUxFQ1RPUl9USVRMRV06IHRoaXMuX2dldFRpdGxlKCksXG4gICAgICAgIFtTRUxFQ1RPUl9DT05URU5UXTogdGhpcy5fZ2V0Q29udGVudCgpXG4gICAgICB9O1xuICAgIH1cbiAgICBfZ2V0Q29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY29udGVudCk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gUG9wb3Zlci5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oUG9wb3Zlcik7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBzY3JvbGxzcHkuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQyID0gJ3Njcm9sbHNweSc7XG4gIGNvbnN0IERBVEFfS0VZJDIgPSAnYnMuc2Nyb2xsc3B5JztcbiAgY29uc3QgRVZFTlRfS0VZJDIgPSBgLiR7REFUQV9LRVkkMn1gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBgYWN0aXZhdGUke0VWRU5UX0tFWSQyfWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLID0gYGNsaWNrJHtFVkVOVF9LRVkkMn1gO1xuICBjb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJJDEgPSBgbG9hZCR7RVZFTlRfS0VZJDJ9JHtEQVRBX0FQSV9LRVl9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNID0gJ2Ryb3Bkb3duLWl0ZW0nO1xuICBjb25zdCBDTEFTU19OQU1FX0FDVElWRSQxID0gJ2FjdGl2ZSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfU1BZID0gJ1tkYXRhLWJzLXNweT1cInNjcm9sbFwiXSc7XG4gIGNvbnN0IFNFTEVDVE9SX1RBUkdFVF9MSU5LUyA9ICdbaHJlZl0nO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCc7XG4gIGNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJztcbiAgY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJztcbiAgY29uc3QgU0VMRUNUT1JfTElOS19JVEVNUyA9IGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTkFWX0lURU1TfSA+ICR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9MSVNUX0lURU1TfWA7XG4gIGNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bic7XG4gIGNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSQxID0gJy5kcm9wZG93bi10b2dnbGUnO1xuICBjb25zdCBEZWZhdWx0JDEgPSB7XG4gICAgb2Zmc2V0OiBudWxsLFxuICAgIC8vIFRPRE86IHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gICAgcm9vdE1hcmdpbjogJzBweCAwcHggLTI1JScsXG4gICAgc21vb3RoU2Nyb2xsOiBmYWxzZSxcbiAgICB0YXJnZXQ6IG51bGwsXG4gICAgdGhyZXNob2xkOiBbMC4xLCAwLjUsIDFdXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDEgPSB7XG4gICAgb2Zmc2V0OiAnKG51bWJlcnxudWxsKScsXG4gICAgLy8gVE9ETyB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICAgIHJvb3RNYXJnaW46ICdzdHJpbmcnLFxuICAgIHNtb290aFNjcm9sbDogJ2Jvb2xlYW4nLFxuICAgIHRhcmdldDogJ2VsZW1lbnQnLFxuICAgIHRocmVzaG9sZDogJ2FycmF5J1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFNjcm9sbFNweSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcblxuICAgICAgLy8gdGhpcy5fZWxlbWVudCBpcyB0aGUgb2JzZXJ2YWJsZXNDb250YWluZXIgYW5kIGNvbmZpZy50YXJnZXQgdGhlIG1lbnUgbGlua3Mgd3JhcHBlclxuICAgICAgdGhpcy5fdGFyZ2V0TGlua3MgPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLl9yb290RWxlbWVudCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWxlbWVudCkub3ZlcmZsb3dZID09PSAndmlzaWJsZScgPyBudWxsIDogdGhpcy5fZWxlbWVudDtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGw7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEgPSB7XG4gICAgICAgIHZpc2libGVFbnRyeVRvcDogMCxcbiAgICAgICAgcGFyZW50U2Nyb2xsVG9wOiAwXG4gICAgICB9O1xuICAgICAgdGhpcy5yZWZyZXNoKCk7IC8vIGluaXRpYWxpemVcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkMTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQxO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQyO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHJlZnJlc2goKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKCk7XG4gICAgICB0aGlzLl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpO1xuICAgICAgaWYgKHRoaXMuX29ic2VydmVyKSB7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gdGhpcy5fZ2V0TmV3T2JzZXJ2ZXIoKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMudmFsdWVzKCkpIHtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgICAvLyBUT0RPOiBvbiB2NiB0YXJnZXQgc2hvdWxkIGJlIGdpdmVuIGV4cGxpY2l0bHkgJiByZW1vdmUgdGhlIHt0YXJnZXQ6ICdzcy10YXJnZXQnfSBjYXNlXG4gICAgICBjb25maWcudGFyZ2V0ID0gZ2V0RWxlbWVudChjb25maWcudGFyZ2V0KSB8fCBkb2N1bWVudC5ib2R5O1xuXG4gICAgICAvLyBUT0RPOiB2NiBPbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zLiBVc2Ugcm9vdE1hcmdpbiBvbmx5XG4gICAgICBjb25maWcucm9vdE1hcmdpbiA9IGNvbmZpZy5vZmZzZXQgPyBgJHtjb25maWcub2Zmc2V0fXB4IDBweCAtMzAlYCA6IGNvbmZpZy5yb290TWFyZ2luO1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcudGhyZXNob2xkID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25maWcudGhyZXNob2xkID0gY29uZmlnLnRocmVzaG9sZC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCkge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc21vb3RoU2Nyb2xsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gdW5yZWdpc3RlciBhbnkgcHJldmlvdXMgbGlzdGVuZXJzXG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSywgU0VMRUNUT1JfVEFSR0VUX0xJTktTLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLmdldChldmVudC50YXJnZXQuaGFzaCk7XG4gICAgICAgIGlmIChvYnNlcnZhYmxlU2VjdGlvbikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuX3Jvb3RFbGVtZW50IHx8IHdpbmRvdztcbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSBvYnNlcnZhYmxlU2VjdGlvbi5vZmZzZXRUb3AgLSB0aGlzLl9lbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgICAgICBpZiAocm9vdC5zY3JvbGxUbykge1xuICAgICAgICAgICAgcm9vdC5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgIHRvcDogaGVpZ2h0LFxuICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENocm9tZSA2MCBkb2Vzbid0IHN1cHBvcnQgYHNjcm9sbFRvYFxuICAgICAgICAgIHJvb3Quc2Nyb2xsVG9wID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgX2dldE5ld09ic2VydmVyKCkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgcm9vdDogdGhpcy5fcm9vdEVsZW1lbnQsXG4gICAgICAgIHRocmVzaG9sZDogdGhpcy5fY29uZmlnLnRocmVzaG9sZCxcbiAgICAgICAgcm9vdE1hcmdpbjogdGhpcy5fY29uZmlnLnJvb3RNYXJnaW5cbiAgICAgIH07XG4gICAgICByZXR1cm4gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4gdGhpcy5fb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gVGhlIGxvZ2ljIG9mIHNlbGVjdGlvblxuICAgIF9vYnNlcnZlckNhbGxiYWNrKGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlbnRyeSA9PiB0aGlzLl90YXJnZXRMaW5rcy5nZXQoYCMke2VudHJ5LnRhcmdldC5pZH1gKTtcbiAgICAgIGNvbnN0IGFjdGl2YXRlID0gZW50cnkgPT4ge1xuICAgICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcDtcbiAgICAgICAgdGhpcy5fcHJvY2Vzcyh0YXJnZXRFbGVtZW50KGVudHJ5KSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcGFyZW50U2Nyb2xsVG9wID0gKHRoaXMuX3Jvb3RFbGVtZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuc2Nyb2xsVG9wO1xuICAgICAgY29uc3QgdXNlclNjcm9sbHNEb3duID0gcGFyZW50U2Nyb2xsVG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3A7XG4gICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wID0gcGFyZW50U2Nyb2xsVG9wO1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsO1xuICAgICAgICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcDtcbiAgICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyBkb3duLCBwaWNrIHRoZSBiaWdnZXIgb2Zmc2V0VG9wXG4gICAgICAgIGlmICh1c2VyU2Nyb2xsc0Rvd24gJiYgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgICAgYWN0aXZhdGUoZW50cnkpO1xuICAgICAgICAgIC8vIGlmIHBhcmVudCBpc24ndCBzY3JvbGxlZCwgbGV0J3Mga2VlcCB0aGUgZmlyc3QgdmlzaWJsZSBpdGVtLCBicmVha2luZyB0aGUgaXRlcmF0aW9uXG4gICAgICAgICAgaWYgKCFwYXJlbnRTY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB3ZSBhcmUgc2Nyb2xsaW5nIHVwLCBwaWNrIHRoZSBzbWFsbGVzdCBvZmZzZXRUb3BcbiAgICAgICAgaWYgKCF1c2VyU2Nyb2xsc0Rvd24gJiYgIWVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICAgIGFjdGl2YXRlKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBfaW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpIHtcbiAgICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpO1xuICAgICAgY29uc3QgdGFyZ2V0TGlua3MgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgdGhpcy5fY29uZmlnLnRhcmdldCk7XG4gICAgICBmb3IgKGNvbnN0IGFuY2hvciBvZiB0YXJnZXRMaW5rcykge1xuICAgICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYW5jaG9yIGhhcyBhbiBpZCBhbmQgaXMgbm90IGRpc2FibGVkXG4gICAgICAgIGlmICghYW5jaG9yLmhhc2ggfHwgaXNEaXNhYmxlZChhbmNob3IpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZVNlY3Rpb24gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKGFuY2hvci5oYXNoLCB0aGlzLl9lbGVtZW50KTtcblxuICAgICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgb2JzZXJ2YWJsZVNlY3Rpb24gZXhpc3RzICYgaXMgdmlzaWJsZVxuICAgICAgICBpZiAoaXNWaXNpYmxlKG9ic2VydmFibGVTZWN0aW9uKSkge1xuICAgICAgICAgIHRoaXMuX3RhcmdldExpbmtzLnNldChhbmNob3IuaGFzaCwgYW5jaG9yKTtcbiAgICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuc2V0KGFuY2hvci5oYXNoLCBvYnNlcnZhYmxlU2VjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgX3Byb2Nlc3ModGFyZ2V0KSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0aGlzLl9jb25maWcudGFyZ2V0KTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldDtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgdGhpcy5fYWN0aXZhdGVQYXJlbnRzKHRhcmdldCk7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0YXJnZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBfYWN0aXZhdGVQYXJlbnRzKHRhcmdldCkge1xuICAgICAgLy8gQWN0aXZhdGUgZHJvcGRvd24gcGFyZW50c1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSQxLCB0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgbGlzdEdyb3VwIG9mIFNlbGVjdG9yRW5naW5lLnBhcmVudHModGFyZ2V0LCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCkpIHtcbiAgICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBTRUxFQ1RPUl9MSU5LX0lURU1TKSkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBfY2xlYXJBY3RpdmVDbGFzcyhwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgY29uc3QgYWN0aXZlTm9kZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKGAke1NFTEVDVE9SX1RBUkdFVF9MSU5LU30uJHtDTEFTU19OQU1FX0FDVElWRSQxfWAsIHBhcmVudCk7XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYWN0aXZlTm9kZXMpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEkkMSwgKCkgPT4ge1xuICAgIGZvciAoY29uc3Qgc3B5IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9TUFkpKSB7XG4gICAgICBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZShzcHkpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oU2Nyb2xsU3B5KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHRhYi5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDEgPSAndGFiJztcbiAgY29uc3QgREFUQV9LRVkkMSA9ICdicy50YWInO1xuICBjb25zdCBFVkVOVF9LRVkkMSA9IGAuJHtEQVRBX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX0hJREUkMSA9IGBoaWRlJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9ISURERU4kMSA9IGBoaWRkZW4ke0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX1NIT1ckMSA9IGBzaG93JHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9TSE9XTiQxID0gYHNob3duJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCc7XG4gIGNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0JztcbiAgY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnO1xuICBjb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nO1xuICBjb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnO1xuICBjb25zdCBDTEFTU19OQU1FX0ZBREUkMSA9ICdmYWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDEgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX0RST1BET1dOID0gJ2Ryb3Bkb3duJztcbiAgY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnO1xuICBjb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VID0gJy5kcm9wZG93bi1tZW51JztcbiAgY29uc3QgTk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICc6bm90KC5kcm9wZG93bi10b2dnbGUpJztcbiAgY29uc3QgU0VMRUNUT1JfVEFCX1BBTkVMID0gJy5saXN0LWdyb3VwLCAubmF2LCBbcm9sZT1cInRhYmxpc3RcIl0nO1xuICBjb25zdCBTRUxFQ1RPUl9PVVRFUiA9ICcubmF2LWl0ZW0sIC5saXN0LWdyb3VwLWl0ZW0nO1xuICBjb25zdCBTRUxFQ1RPUl9JTk5FUiA9IGAubmF2LWxpbmske05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCAubGlzdC1ncm91cC1pdGVtJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgW3JvbGU9XCJ0YWJcIl0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9YDtcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdJzsgLy8gdG9kbzp2NjogY291bGQgYmUgb25seSBgdGFiYFxuICBjb25zdCBTRUxFQ1RPUl9JTk5FUl9FTEVNID0gYCR7U0VMRUNUT1JfSU5ORVJ9LCAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfWA7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSA9IGAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl1gO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFRhYiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX1RBQl9QQU5FTCk7XG4gICAgICBpZiAoIXRoaXMuX3BhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIHRvZG86IHNob3VsZCBUaHJvdyBleGNlcHRpb24gb24gdjZcbiAgICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtlbGVtZW50Lm91dGVySFRNTH0gaGFzIG5vdCBhIHZhbGlkIHBhcmVudCAke1NFTEVDVE9SX0lOTkVSX0VMRU19YClcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHVwIGluaXRpYWwgYXJpYSBhdHRyaWJ1dGVzXG4gICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlcyh0aGlzLl9wYXJlbnQsIHRoaXMuX2dldENoaWxkcmVuKCkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkMTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBzaG93KCkge1xuICAgICAgLy8gU2hvd3MgdGhpcyBlbGVtIGFuZCBkZWFjdGl2YXRlIHRoZSBhY3RpdmUgc2libGluZyBpZiBleGlzdHNcbiAgICAgIGNvbnN0IGlubmVyRWxlbSA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5fZWxlbUlzQWN0aXZlKGlubmVyRWxlbSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWFyY2ggZm9yIGFjdGl2ZSB0YWIgb24gc2FtZSBwYXJlbnQgdG8gZGVhY3RpdmF0ZSBpdFxuICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5fZ2V0QWN0aXZlRWxlbSgpO1xuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gYWN0aXZlID8gRXZlbnRIYW5kbGVyLnRyaWdnZXIoYWN0aXZlLCBFVkVOVF9ISURFJDEsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogaW5uZXJFbGVtXG4gICAgICB9KSA6IG51bGw7XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcihpbm5lckVsZW0sIEVWRU5UX1NIT1ckMSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBhY3RpdmVcbiAgICAgIH0pO1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8IGhpZGVFdmVudCAmJiBoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9kZWFjdGl2YXRlKGFjdGl2ZSwgaW5uZXJFbGVtKTtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKGlubmVyRWxlbSwgYWN0aXZlKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2FjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkpOyAvLyBTZWFyY2ggYW5kIGFjdGl2YXRlL3Nob3cgdGhlIHByb3BlciBzZWN0aW9uXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX1NIT1dOJDEsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkMSkpO1xuICAgIH1cbiAgICBfZGVhY3RpdmF0ZShlbGVtZW50LCByZWxhdGVkRWxlbSkge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgICBlbGVtZW50LmJsdXIoKTtcbiAgICAgIHRoaXMuX2RlYWN0aXZhdGUoU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSk7IC8vIFNlYXJjaCBhbmQgZGVhY3RpdmF0ZSB0aGUgc2hvd24gc2VjdGlvbiB0b29cblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckMSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9ISURERU4kMSwge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRFbGVtXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQxKSk7XG4gICAgfVxuICAgIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgICBpZiAoIVtBUlJPV19MRUZUX0tFWSwgQVJST1dfUklHSFRfS0VZLCBBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBzdG9wUHJvcGFnYXRpb24vcHJldmVudERlZmF1bHQgYm90aCBhZGRlZCB0byBzdXBwb3J0IHVwL2Rvd24ga2V5cyB3aXRob3V0IHNjcm9sbGluZyB0aGUgcGFnZVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGlzTmV4dCA9IFtBUlJPV19SSUdIVF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpO1xuICAgICAgY29uc3QgbmV4dEFjdGl2ZUVsZW1lbnQgPSBnZXROZXh0QWN0aXZlRWxlbWVudCh0aGlzLl9nZXRDaGlsZHJlbigpLmZpbHRlcihlbGVtZW50ID0+ICFpc0Rpc2FibGVkKGVsZW1lbnQpKSwgZXZlbnQudGFyZ2V0LCBpc05leHQsIHRydWUpO1xuICAgICAgaWYgKG5leHRBY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIG5leHRBY3RpdmVFbGVtZW50LmZvY3VzKHtcbiAgICAgICAgICBwcmV2ZW50U2Nyb2xsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShuZXh0QWN0aXZlRWxlbWVudCkuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgICBfZ2V0Q2hpbGRyZW4oKSB7XG4gICAgICAvLyBjb2xsZWN0aW9uIG9mIGlubmVyIGVsZW1lbnRzXG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JTk5FUl9FTEVNLCB0aGlzLl9wYXJlbnQpO1xuICAgIH1cbiAgICBfZ2V0QWN0aXZlRWxlbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbmQoY2hpbGQgPT4gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKSkgfHwgbnVsbDtcbiAgICB9XG4gICAgX3NldEluaXRpYWxBdHRyaWJ1dGVzKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHBhcmVudCwgJ3JvbGUnLCAndGFibGlzdCcpO1xuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX2dldElubmVyRWxlbWVudChjaGlsZCk7XG4gICAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2VsZW1Jc0FjdGl2ZShjaGlsZCk7XG4gICAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoY2hpbGQpO1xuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgaXNBY3RpdmUpO1xuICAgICAgaWYgKG91dGVyRWxlbSAhPT0gY2hpbGQpIHtcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMob3V0ZXJFbGVtLCAncm9sZScsICdwcmVzZW50YXRpb24nKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoY2hpbGQsICdyb2xlJywgJ3RhYicpO1xuXG4gICAgICAvLyBzZXQgYXR0cmlidXRlcyB0byB0aGUgcmVsYXRlZCBwYW5lbCB0b29cbiAgICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbChjaGlsZCk7XG4gICAgfVxuICAgIF9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoY2hpbGQpO1xuICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAncm9sZScsICd0YWJwYW5lbCcpO1xuICAgICAgaWYgKGNoaWxkLmlkKSB7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ2FyaWEtbGFiZWxsZWRieScsIGAke2NoaWxkLmlkfWApO1xuICAgICAgfVxuICAgIH1cbiAgICBfdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgb3Blbikge1xuICAgICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgaWYgKCFvdXRlckVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX0RST1BET1dOKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0b2dnbGUgPSAoc2VsZWN0b3IsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3Rvciwgb3V0ZXJFbGVtKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lLCBvcGVuKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRvZ2dsZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICAgIHRvZ2dsZShTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VLCBDTEFTU19OQU1FX1NIT1ckMSk7XG4gICAgICBvdXRlckVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgb3Blbik7XG4gICAgfVxuICAgIF9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9lbGVtSXNBY3RpdmUoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICB9XG5cbiAgICAvLyBUcnkgdG8gZ2V0IHRoZSBpbm5lciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWxpbmspXG4gICAgX2dldElubmVyRWxlbWVudChlbGVtKSB7XG4gICAgICByZXR1cm4gZWxlbS5tYXRjaGVzKFNFTEVDVE9SX0lOTkVSX0VMRU0pID8gZWxlbSA6IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ORVJfRUxFTSwgZWxlbSk7XG4gICAgfVxuXG4gICAgLy8gVHJ5IHRvIGdldCB0aGUgb3V0ZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1pdGVtKVxuICAgIF9nZXRPdXRlckVsZW1lbnQoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW0uY2xvc2VzdChTRUxFQ1RPUl9PVVRFUikgfHwgZWxlbTtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnNob3coKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgb24gZm9jdXNcbiAgICovXG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUpKSB7XG4gICAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihUYWIpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdG9hc3QuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSA9ICd0b2FzdCc7XG4gIGNvbnN0IERBVEFfS0VZID0gJ2JzLnRvYXN0JztcbiAgY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFT1ZFUiA9IGBtb3VzZW92ZXIke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9NT1VTRU9VVCA9IGBtb3VzZW91dCR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0ZPQ1VTT1VUID0gYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX0hJREUgPSAnaGlkZSc7IC8vIEBkZXByZWNhdGVkIC0ga2VwdCBoZXJlIG9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HID0gJ3Nob3dpbmcnO1xuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICAgIGRlbGF5OiAnbnVtYmVyJ1xuICB9O1xuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICBhdXRvaGlkZTogdHJ1ZSxcbiAgICBkZWxheTogNTAwMFxuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFRvYXN0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gICAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHNob3coKSB7XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKTtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jbGVhclRpbWVvdXQoKTtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpO1xuICAgICAgfVxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTik7XG4gICAgICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfSElERSk7IC8vIEBkZXByZWNhdGVkXG4gICAgICByZWZsb3codGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XLCBDTEFTU19OQU1FX1NIT1dJTkcpO1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbik7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpO1xuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURFKTsgLy8gQGRlcHJlY2F0ZWRcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORywgQ0xBU1NfTkFNRV9TSE9XKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2NvbmZpZy5hbmltYXRpb24pO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KCk7XG4gICAgICBpZiAodGhpcy5pc1Nob3duKCkpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyk7XG4gICAgICB9XG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuICAgIGlzU2hvd24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG5cbiAgICBfbWF5YmVTY2hlZHVsZUhpZGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiB8fCB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpO1xuICAgIH1cbiAgICBfb25JbnRlcmFjdGlvbihldmVudCwgaXNJbnRlcmFjdGluZykge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XG4gICAgICAgIGNhc2UgJ21vdXNlb3V0JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnZm9jdXNpbic6XG4gICAgICAgIGNhc2UgJ2ZvY3Vzb3V0JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0ludGVyYWN0aW5nKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0RWxlbWVudCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudCA9PT0gbmV4dEVsZW1lbnQgfHwgdGhpcy5fZWxlbWVudC5jb250YWlucyhuZXh0RWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKTtcbiAgICB9XG4gICAgX3NldExpc3RlbmVycygpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRU9WRVIsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRU9VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSk7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSk7XG4gICAgfVxuICAgIF9jbGVhclRpbWVvdXQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBUb2FzdC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgZW5hYmxlRGlzbWlzc1RyaWdnZXIoVG9hc3QpO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvYXN0KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGluZGV4LnVtZC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIGNvbnN0IGluZGV4X3VtZCA9IHtcbiAgICBBbGVydCxcbiAgICBCdXR0b24sXG4gICAgQ2Fyb3VzZWwsXG4gICAgQ29sbGFwc2UsXG4gICAgRHJvcGRvd24sXG4gICAgTW9kYWwsXG4gICAgT2ZmY2FudmFzLFxuICAgIFBvcG92ZXIsXG4gICAgU2Nyb2xsU3B5LFxuICAgIFRhYixcbiAgICBUb2FzdCxcbiAgICBUb29sdGlwXG4gIH07XG5cbiAgcmV0dXJuIGluZGV4X3VtZDtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLmJ1bmRsZS5qcy5tYXBcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiZGVmYXVsdCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwiX3R5cGVvZiIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsImdsb2JhbFRoaXMiLCJzZWxmIiwiYm9vdHN0cmFwIiwiX0tFWV9UT19ESVJFQ1RJT04iLCJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJUUkFOU0lUSU9OX0VORCIsInBhcnNlU2VsZWN0b3IiLCJzZWxlY3RvciIsIndpbmRvdyIsIkNTUyIsImVzY2FwZSIsInJlcGxhY2UiLCJtYXRjaCIsImlkIiwiY29uY2F0IiwidG9UeXBlIiwib2JqZWN0IiwidW5kZWZpbmVkIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwidG9Mb3dlckNhc2UiLCJnZXRVSUQiLCJwcmVmaXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJfd2luZG93JGdldENvbXB1dGVkU3QiLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJzcGxpdCIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiaXNFbGVtZW50JDEiLCJqcXVlcnkiLCJub2RlVHlwZSIsImdldEVsZW1lbnQiLCJsZW5ndGgiLCJxdWVyeVNlbGVjdG9yIiwiaXNWaXNpYmxlIiwiZ2V0Q2xpZW50UmVjdHMiLCJlbGVtZW50SXNWaXNpYmxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImNsb3NlZERldGFpbHMiLCJjbG9zZXN0Iiwic3VtbWFyeSIsInBhcmVudE5vZGUiLCJpc0Rpc2FibGVkIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZGlzYWJsZWQiLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJmaW5kU2hhZG93Um9vdCIsImRvY3VtZW50RWxlbWVudCIsImF0dGFjaFNoYWRvdyIsImdldFJvb3ROb2RlIiwicm9vdCIsIlNoYWRvd1Jvb3QiLCJub29wIiwicmVmbG93Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0alF1ZXJ5IiwialF1ZXJ5IiwiYm9keSIsIkRPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MiLCJvbkRPTUNvbnRlbnRMb2FkZWQiLCJjYWxsYmFjayIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiX2kyIiwiX0RPTUNvbnRlbnRMb2FkZWRDYWxsIiwicHVzaCIsImlzUlRMIiwiZGlyIiwiZGVmaW5lSlF1ZXJ5UGx1Z2luIiwicGx1Z2luIiwiJCIsIm5hbWUiLCJOQU1FIiwiSlFVRVJZX05PX0NPTkZMSUNUIiwiZm4iLCJqUXVlcnlJbnRlcmZhY2UiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCJleGVjdXRlIiwicG9zc2libGVDYWxsYmFjayIsImFyZ3MiLCJkZWZhdWx0VmFsdWUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uIiwidHJhbnNpdGlvbkVsZW1lbnQiLCJ3YWl0Rm9yVHJhbnNpdGlvbiIsImR1cmF0aW9uUGFkZGluZyIsImVtdWxhdGVkRHVyYXRpb24iLCJjYWxsZWQiLCJoYW5kbGVyIiwiX3JlZjYiLCJ0YXJnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImdldE5leHRBY3RpdmVFbGVtZW50IiwibGlzdCIsImFjdGl2ZUVsZW1lbnQiLCJzaG91bGRHZXROZXh0IiwiaXNDeWNsZUFsbG93ZWQiLCJsaXN0TGVuZ3RoIiwiaW5kZXgiLCJpbmRleE9mIiwibWF4IiwibWluIiwibmFtZXNwYWNlUmVnZXgiLCJzdHJpcE5hbWVSZWdleCIsInN0cmlwVWlkUmVnZXgiLCJldmVudFJlZ2lzdHJ5IiwidWlkRXZlbnQiLCJjdXN0b21FdmVudHMiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm5hdGl2ZUV2ZW50cyIsIlNldCIsIm1ha2VFdmVudFVpZCIsInVpZCIsImdldEVsZW1lbnRFdmVudHMiLCJib290c3RyYXBIYW5kbGVyIiwiZXZlbnQiLCJoeWRyYXRlT2JqIiwiZGVsZWdhdGVUYXJnZXQiLCJvbmVPZmYiLCJFdmVudEhhbmRsZXIiLCJvZmYiLCJ0eXBlIiwiYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIiLCJkb21FbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiZG9tRWxlbWVudCIsImVyciIsImUiLCJmIiwiZmluZEhhbmRsZXIiLCJldmVudHMiLCJjYWxsYWJsZSIsImRlbGVnYXRpb25TZWxlY3RvciIsInZhbHVlcyIsImZpbmQiLCJub3JtYWxpemVQYXJhbWV0ZXJzIiwib3JpZ2luYWxUeXBlRXZlbnQiLCJkZWxlZ2F0aW9uRnVuY3Rpb24iLCJpc0RlbGVnYXRlZCIsInR5cGVFdmVudCIsImdldFR5cGVFdmVudCIsImhhcyIsImFkZEhhbmRsZXIiLCJfbm9ybWFsaXplUGFyYW1ldGVycyIsIl9ub3JtYWxpemVQYXJhbWV0ZXJzMiIsIl9zbGljZWRUb0FycmF5Iiwid3JhcEZ1bmN0aW9uIiwicmVsYXRlZFRhcmdldCIsImhhbmRsZXJzIiwicHJldmlvdXNGdW5jdGlvbiIsInJlbW92ZUhhbmRsZXIiLCJCb29sZWFuIiwicmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzIiwibmFtZXNwYWNlIiwic3RvcmVFbGVtZW50RXZlbnQiLCJfaTMiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiaGFuZGxlcktleSIsImluY2x1ZGVzIiwib24iLCJvbmUiLCJfbm9ybWFsaXplUGFyYW1ldGVyczMiLCJfbm9ybWFsaXplUGFyYW1ldGVyczQiLCJpbk5hbWVzcGFjZSIsImlzTmFtZXNwYWNlIiwic3RhcnRzV2l0aCIsImtleXMiLCJfaTQiLCJfT2JqZWN0JGtleXMiLCJlbGVtZW50RXZlbnQiLCJzbGljZSIsIl9pNSIsIl9PYmplY3QkZW50cmllczIiLCJfT2JqZWN0JGVudHJpZXMyJF9pIiwia2V5SGFuZGxlcnMiLCJ0cmlnZ2VyIiwialF1ZXJ5RXZlbnQiLCJidWJibGVzIiwibmF0aXZlRGlzcGF0Y2giLCJkZWZhdWx0UHJldmVudGVkIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCIsImlzRGVmYXVsdFByZXZlbnRlZCIsImV2dCIsImNhbmNlbGFibGUiLCJwcmV2ZW50RGVmYXVsdCIsIm9iaiIsIm1ldGEiLCJfbG9vcDIiLCJfT2JqZWN0JGVudHJpZXMzJF9pIiwiX09iamVjdCRlbnRyaWVzMyIsIl9pNiIsIl91bnVzZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImdldCIsImVsZW1lbnRNYXAiLCJNYXAiLCJEYXRhIiwic2V0IiwiaW5zdGFuY2UiLCJpbnN0YW5jZU1hcCIsInNpemUiLCJjb25zb2xlIiwiZXJyb3IiLCJBcnJheSIsImZyb20iLCJyZW1vdmUiLCJub3JtYWxpemVEYXRhIiwiSlNPTiIsInBhcnNlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwibm9ybWFsaXplRGF0YUtleSIsImNociIsIk1hbmlwdWxhdG9yIiwic2V0RGF0YUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZURhdGFBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJnZXREYXRhQXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJic0tleXMiLCJkYXRhc2V0IiwiZmlsdGVyIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInB1cmVLZXkiLCJjaGFyQXQiLCJnZXREYXRhQXR0cmlidXRlIiwiQ29uZmlnIiwiX2dldENvbmZpZyIsImNvbmZpZyIsIl9tZXJnZUNvbmZpZ09iaiIsIl9jb25maWdBZnRlck1lcmdlIiwiX3R5cGVDaGVja0NvbmZpZyIsImpzb25Db25maWciLCJfb2JqZWN0U3ByZWFkIiwiY29uc3RydWN0b3IiLCJEZWZhdWx0IiwiY29uZmlnVHlwZXMiLCJEZWZhdWx0VHlwZSIsIl9pNyIsIl9PYmplY3QkZW50cmllczQiLCJfT2JqZWN0JGVudHJpZXM0JF9pIiwicHJvcGVydHkiLCJleHBlY3RlZFR5cGVzIiwidmFsdWVUeXBlIiwiUmVnRXhwIiwidGVzdCIsIlR5cGVFcnJvciIsInRvVXBwZXJDYXNlIiwiRXJyb3IiLCJWRVJTSU9OIiwiQmFzZUNvbXBvbmVudCIsIl9Db25maWciLCJfdGhpcyIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2VsZW1lbnQiLCJfY29uZmlnIiwiREFUQV9LRVkiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiZGlzcG9zZSIsIkVWRU5UX0tFWSIsIl9pdGVyYXRvcjMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiX3N0ZXAzIiwicHJvcGVydHlOYW1lIiwiX3F1ZXVlQ2FsbGJhY2siLCJpc0FuaW1hdGVkIiwiZ2V0SW5zdGFuY2UiLCJnZXRPckNyZWF0ZUluc3RhbmNlIiwiZXZlbnROYW1lIiwiZ2V0U2VsZWN0b3IiLCJocmVmQXR0cmlidXRlIiwidHJpbSIsIlNlbGVjdG9yRW5naW5lIiwiX3JlZjciLCJFbGVtZW50IiwiZmluZE9uZSIsImNoaWxkcmVuIiwiX3JlZjgiLCJjaGlsZCIsIm1hdGNoZXMiLCJwYXJlbnRzIiwiYW5jZXN0b3IiLCJwcmV2IiwicHJldmlvdXMiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsImZvY3VzYWJsZUNoaWxkcmVuIiwiZm9jdXNhYmxlcyIsIm1hcCIsImpvaW4iLCJlbCIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJnZXRFbGVtZW50RnJvbVNlbGVjdG9yIiwiZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3RvciIsImVuYWJsZURpc21pc3NUcmlnZ2VyIiwiY29tcG9uZW50IiwibWV0aG9kIiwiY2xpY2tFdmVudCIsInRhZ05hbWUiLCJOQU1FJGYiLCJEQVRBX0tFWSRhIiwiRVZFTlRfS0VZJGIiLCJFVkVOVF9DTE9TRSIsIkVWRU5UX0NMT1NFRCIsIkNMQVNTX05BTUVfRkFERSQ1IiwiQ0xBU1NfTkFNRV9TSE9XJDgiLCJBbGVydCIsIl9CYXNlQ29tcG9uZW50IiwiX3N1cGVyMiIsImNsb3NlIiwiX3RoaXMyIiwiY2xvc2VFdmVudCIsIl9kZXN0cm95RWxlbWVudCIsImVhY2giLCJkYXRhIiwiTkFNRSRlIiwiREFUQV9LRVkkOSIsIkVWRU5UX0tFWSRhIiwiREFUQV9BUElfS0VZJDYiLCJDTEFTU19OQU1FX0FDVElWRSQzIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUkNSIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJJDYiLCJCdXR0b24iLCJfQmFzZUNvbXBvbmVudDIiLCJfc3VwZXIzIiwidG9nZ2xlIiwiYnV0dG9uIiwiTkFNRSRkIiwiRVZFTlRfS0VZJDkiLCJFVkVOVF9UT1VDSFNUQVJUIiwiRVZFTlRfVE9VQ0hNT1ZFIiwiRVZFTlRfVE9VQ0hFTkQiLCJFVkVOVF9QT0lOVEVSRE9XTiIsIkVWRU5UX1BPSU5URVJVUCIsIlBPSU5URVJfVFlQRV9UT1VDSCIsIlBPSU5URVJfVFlQRV9QRU4iLCJDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQiLCJTV0lQRV9USFJFU0hPTEQiLCJEZWZhdWx0JGMiLCJlbmRDYWxsYmFjayIsImxlZnRDYWxsYmFjayIsInJpZ2h0Q2FsbGJhY2siLCJEZWZhdWx0VHlwZSRjIiwiU3dpcGUiLCJfQ29uZmlnMiIsIl9zdXBlcjQiLCJfdGhpczMiLCJpc1N1cHBvcnRlZCIsIl9kZWx0YVgiLCJfc3VwcG9ydFBvaW50ZXJFdmVudHMiLCJQb2ludGVyRXZlbnQiLCJfaW5pdEV2ZW50cyIsIl9zdGFydCIsInRvdWNoZXMiLCJjbGllbnRYIiwiX2V2ZW50SXNQb2ludGVyUGVuVG91Y2giLCJfZW5kIiwiX2hhbmRsZVN3aXBlIiwiX21vdmUiLCJhYnNEZWx0YVgiLCJhYnMiLCJkaXJlY3Rpb24iLCJfdGhpczQiLCJhZGQiLCJwb2ludGVyVHlwZSIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwiTkFNRSRjIiwiREFUQV9LRVkkOCIsIkVWRU5UX0tFWSQ4IiwiREFUQV9BUElfS0VZJDUiLCJBUlJPV19MRUZUX0tFWSQxIiwiQVJST1dfUklHSFRfS0VZJDEiLCJUT1VDSEVWRU5UX0NPTVBBVF9XQUlUIiwiT1JERVJfTkVYVCIsIk9SREVSX1BSRVYiLCJESVJFQ1RJT05fTEVGVCIsIkRJUkVDVElPTl9SSUdIVCIsIkVWRU5UX1NMSURFIiwiRVZFTlRfU0xJRCIsIkVWRU5UX0tFWURPV04kMSIsIkVWRU5UX01PVVNFRU5URVIkMSIsIkVWRU5UX01PVVNFTEVBVkUkMSIsIkVWRU5UX0RSQUdfU1RBUlQiLCJFVkVOVF9MT0FEX0RBVEFfQVBJJDMiLCJFVkVOVF9DTElDS19EQVRBX0FQSSQ1IiwiQ0xBU1NfTkFNRV9DQVJPVVNFTCIsIkNMQVNTX05BTUVfQUNUSVZFJDIiLCJDTEFTU19OQU1FX1NMSURFIiwiQ0xBU1NfTkFNRV9FTkQiLCJDTEFTU19OQU1FX1NUQVJUIiwiQ0xBU1NfTkFNRV9ORVhUIiwiQ0xBU1NfTkFNRV9QUkVWIiwiU0VMRUNUT1JfQUNUSVZFIiwiU0VMRUNUT1JfSVRFTSIsIlNFTEVDVE9SX0FDVElWRV9JVEVNIiwiU0VMRUNUT1JfSVRFTV9JTUciLCJTRUxFQ1RPUl9JTkRJQ0FUT1JTIiwiU0VMRUNUT1JfREFUQV9TTElERSIsIlNFTEVDVE9SX0RBVEFfUklERSIsIktFWV9UT19ESVJFQ1RJT04iLCJfZGVmaW5lUHJvcGVydHkiLCJEZWZhdWx0JGIiLCJpbnRlcnZhbCIsImtleWJvYXJkIiwicGF1c2UiLCJyaWRlIiwidG91Y2giLCJ3cmFwIiwiRGVmYXVsdFR5cGUkYiIsIkNhcm91c2VsIiwiX0Jhc2VDb21wb25lbnQzIiwiX3N1cGVyNSIsIl90aGlzNSIsIl9pbnRlcnZhbCIsIl9hY3RpdmVFbGVtZW50IiwiX2lzU2xpZGluZyIsInRvdWNoVGltZW91dCIsIl9zd2lwZUhlbHBlciIsIl9pbmRpY2F0b3JzRWxlbWVudCIsIl9hZGRFdmVudExpc3RlbmVycyIsImN5Y2xlIiwiX3NsaWRlIiwibmV4dFdoZW5WaXNpYmxlIiwiaGlkZGVuIiwiX2NsZWFySW50ZXJ2YWwiLCJfdGhpczYiLCJfdXBkYXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIl9tYXliZUVuYWJsZUN5Y2xlIiwiX3RoaXM3IiwidG8iLCJfdGhpczgiLCJpdGVtcyIsIl9nZXRJdGVtcyIsImFjdGl2ZUluZGV4IiwiX2dldEl0ZW1JbmRleCIsIl9nZXRBY3RpdmUiLCJvcmRlciIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJkZWZhdWx0SW50ZXJ2YWwiLCJfdGhpczkiLCJfa2V5ZG93biIsIl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzIiwiX3RoaXMxMCIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJpbWciLCJlbmRDYWxsQmFjayIsImNsZWFyVGltZW91dCIsInN3aXBlQ29uZmlnIiwiX2RpcmVjdGlvblRvT3JkZXIiLCJfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudCIsImFjdGl2ZUluZGljYXRvciIsIm5ld0FjdGl2ZUluZGljYXRvciIsImVsZW1lbnRJbnRlcnZhbCIsInBhcnNlSW50IiwiX3RoaXMxMSIsImlzTmV4dCIsIm5leHRFbGVtZW50IiwibmV4dEVsZW1lbnRJbmRleCIsInRyaWdnZXJFdmVudCIsIl9vcmRlclRvRGlyZWN0aW9uIiwic2xpZGVFdmVudCIsImlzQ3ljbGluZyIsImRpcmVjdGlvbmFsQ2xhc3NOYW1lIiwib3JkZXJDbGFzc05hbWUiLCJjb21wbGV0ZUNhbGxCYWNrIiwiX2lzQW5pbWF0ZWQiLCJjbGVhckludGVydmFsIiwiY2Fyb3VzZWwiLCJzbGlkZUluZGV4IiwiY2Fyb3VzZWxzIiwiX2l0ZXJhdG9yNSIsIl9zdGVwNSIsIk5BTUUkYiIsIkRBVEFfS0VZJDciLCJFVkVOVF9LRVkkNyIsIkRBVEFfQVBJX0tFWSQ0IiwiRVZFTlRfU0hPVyQ2IiwiRVZFTlRfU0hPV04kNiIsIkVWRU5UX0hJREUkNiIsIkVWRU5UX0hJRERFTiQ2IiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNCIsIkNMQVNTX05BTUVfU0hPVyQ3IiwiQ0xBU1NfTkFNRV9DT0xMQVBTRSIsIkNMQVNTX05BTUVfQ09MTEFQU0lORyIsIkNMQVNTX05BTUVfQ09MTEFQU0VEIiwiQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4iLCJDTEFTU19OQU1FX0hPUklaT05UQUwiLCJXSURUSCIsIkhFSUdIVCIsIlNFTEVDVE9SX0FDVElWRVMiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0IiwiRGVmYXVsdCRhIiwicGFyZW50IiwiRGVmYXVsdFR5cGUkYSIsIkNvbGxhcHNlIiwiX0Jhc2VDb21wb25lbnQ0IiwiX3N1cGVyNiIsIl90aGlzMTIiLCJfaXNUcmFuc2l0aW9uaW5nIiwiX3RyaWdnZXJBcnJheSIsInRvZ2dsZUxpc3QiLCJfaXRlcmF0b3I2IiwiX3N0ZXA2IiwiZWxlbSIsImZpbHRlckVsZW1lbnQiLCJmb3VuZEVsZW1lbnQiLCJfaW5pdGlhbGl6ZUNoaWxkcmVuIiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsIl9pc1Nob3duIiwiaGlkZSIsInNob3ciLCJfdGhpczEzIiwiYWN0aXZlQ2hpbGRyZW4iLCJfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuIiwic3RhcnRFdmVudCIsIl9pdGVyYXRvcjciLCJfc3RlcDciLCJhY3RpdmVJbnN0YW5jZSIsImRpbWVuc2lvbiIsIl9nZXREaW1lbnNpb24iLCJzdHlsZSIsImNvbXBsZXRlIiwiY2FwaXRhbGl6ZWREaW1lbnNpb24iLCJzY3JvbGxTaXplIiwiX3RoaXMxNCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIl9pdGVyYXRvcjgiLCJfc3RlcDgiLCJfaXRlcmF0b3I5IiwiX3N0ZXA5Iiwic2VsZWN0ZWQiLCJ0cmlnZ2VyQXJyYXkiLCJpc09wZW4iLCJfaXRlcmF0b3IxMCIsIl9zdGVwMTAiLCJfaXRlcmF0b3IxMSIsIl9zdGVwMTEiLCJ0b3AiLCJib3R0b20iLCJyaWdodCIsImxlZnQiLCJhdXRvIiwiYmFzZVBsYWNlbWVudHMiLCJzdGFydCIsImVuZCIsImNsaXBwaW5nUGFyZW50cyIsInZpZXdwb3J0IiwicG9wcGVyIiwicmVmZXJlbmNlIiwidmFyaWF0aW9uUGxhY2VtZW50cyIsInJlZHVjZSIsImFjYyIsInBsYWNlbWVudCIsInBsYWNlbWVudHMiLCJiZWZvcmVSZWFkIiwicmVhZCIsImFmdGVyUmVhZCIsImJlZm9yZU1haW4iLCJtYWluIiwiYWZ0ZXJNYWluIiwiYmVmb3JlV3JpdGUiLCJ3cml0ZSIsImFmdGVyV3JpdGUiLCJtb2RpZmllclBoYXNlcyIsImdldE5vZGVOYW1lIiwibm9kZU5hbWUiLCJnZXRXaW5kb3ciLCJub2RlIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiaXNFbGVtZW50IiwiT3duRWxlbWVudCIsImlzSFRNTEVsZW1lbnQiLCJIVE1MRWxlbWVudCIsImlzU2hhZG93Um9vdCIsImFwcGx5U3R5bGVzIiwiX3JlZiIsInN0YXRlIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwic3R5bGVzIiwiYXNzaWduIiwiZWZmZWN0JDIiLCJfcmVmMiIsImluaXRpYWxTdHlsZXMiLCJwb3NpdGlvbiIsIm9wdGlvbnMiLCJzdHJhdGVneSIsIm1hcmdpbiIsImFycm93Iiwic3R5bGVQcm9wZXJ0aWVzIiwiaGFzT3duUHJvcGVydHkiLCJhdHRyaWJ1dGUiLCJhcHBseVN0eWxlcyQxIiwiZW5hYmxlZCIsInBoYXNlIiwiZWZmZWN0IiwicmVxdWlyZXMiLCJnZXRCYXNlUGxhY2VtZW50Iiwicm91bmQiLCJnZXRVQVN0cmluZyIsInVhRGF0YSIsInVzZXJBZ2VudERhdGEiLCJicmFuZHMiLCJpdGVtIiwiYnJhbmQiLCJ2ZXJzaW9uIiwidXNlckFnZW50IiwiaXNMYXlvdXRWaWV3cG9ydCIsImluY2x1ZGVTY2FsZSIsImlzRml4ZWRTdHJhdGVneSIsImNsaWVudFJlY3QiLCJzY2FsZVgiLCJzY2FsZVkiLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwidmlzdWFsVmlld3BvcnQiLCJhZGRWaXN1YWxPZmZzZXRzIiwieCIsIm9mZnNldExlZnQiLCJ5Iiwib2Zmc2V0VG9wIiwiZ2V0TGF5b3V0UmVjdCIsInJvb3ROb2RlIiwiaXNTYW1lTm9kZSIsImhvc3QiLCJnZXRDb21wdXRlZFN0eWxlJDEiLCJpc1RhYmxlRWxlbWVudCIsImdldERvY3VtZW50RWxlbWVudCIsImdldFBhcmVudE5vZGUiLCJhc3NpZ25lZFNsb3QiLCJnZXRUcnVlT2Zmc2V0UGFyZW50Iiwib2Zmc2V0UGFyZW50IiwiZ2V0Q29udGFpbmluZ0Jsb2NrIiwiaXNGaXJlZm94IiwiaXNJRSIsImVsZW1lbnRDc3MiLCJjdXJyZW50Tm9kZSIsImNzcyIsInRyYW5zZm9ybSIsInBlcnNwZWN0aXZlIiwiY29udGFpbiIsIndpbGxDaGFuZ2UiLCJnZXRPZmZzZXRQYXJlbnQiLCJnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQiLCJ3aXRoaW4iLCJtaW4kMSIsIm1heCQxIiwid2l0aGluTWF4Q2xhbXAiLCJ2IiwiZ2V0RnJlc2hTaWRlT2JqZWN0IiwibWVyZ2VQYWRkaW5nT2JqZWN0IiwicGFkZGluZ09iamVjdCIsImV4cGFuZFRvSGFzaE1hcCIsImhhc2hNYXAiLCJ0b1BhZGRpbmdPYmplY3QiLCJwYWRkaW5nIiwicmVjdHMiLCJfc3RhdGUkbW9kaWZpZXJzRGF0YSQiLCJhcnJvd0VsZW1lbnQiLCJwb3BwZXJPZmZzZXRzIiwibW9kaWZpZXJzRGF0YSIsImJhc2VQbGFjZW1lbnQiLCJheGlzIiwiaXNWZXJ0aWNhbCIsImxlbiIsImFycm93UmVjdCIsIm1pblByb3AiLCJtYXhQcm9wIiwiZW5kRGlmZiIsInN0YXJ0RGlmZiIsImFycm93T2Zmc2V0UGFyZW50IiwiY2xpZW50U2l6ZSIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwiY2VudGVyVG9SZWZlcmVuY2UiLCJjZW50ZXIiLCJvZmZzZXQiLCJheGlzUHJvcCIsImNlbnRlck9mZnNldCIsImVmZmVjdCQxIiwiX29wdGlvbnMkZWxlbWVudCIsImFycm93JDEiLCJyZXF1aXJlc0lmRXhpc3RzIiwiZ2V0VmFyaWF0aW9uIiwidW5zZXRTaWRlcyIsInJvdW5kT2Zmc2V0c0J5RFBSIiwid2luIiwiZHByIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm1hcFRvU3R5bGVzIiwiX09iamVjdCRhc3NpZ24yIiwicG9wcGVyUmVjdCIsInZhcmlhdGlvbiIsIm9mZnNldHMiLCJncHVBY2NlbGVyYXRpb24iLCJhZGFwdGl2ZSIsInJvdW5kT2Zmc2V0cyIsImlzRml4ZWQiLCJfb2Zmc2V0cyR4IiwiX29mZnNldHMkeSIsIl9yZWYzIiwiaGFzWCIsImhhc1kiLCJzaWRlWCIsInNpZGVZIiwiaGVpZ2h0UHJvcCIsIndpZHRoUHJvcCIsIm9mZnNldFkiLCJvZmZzZXRYIiwiY29tbW9uU3R5bGVzIiwiX3JlZjQiLCJfT2JqZWN0JGFzc2lnbiIsImNvbXB1dGVTdHlsZXMiLCJfcmVmNSIsIl9vcHRpb25zJGdwdUFjY2VsZXJhdCIsIl9vcHRpb25zJGFkYXB0aXZlIiwiX29wdGlvbnMkcm91bmRPZmZzZXRzIiwiY29tcHV0ZVN0eWxlcyQxIiwicGFzc2l2ZSIsIl9vcHRpb25zJHNjcm9sbCIsInNjcm9sbCIsIl9vcHRpb25zJHJlc2l6ZSIsInJlc2l6ZSIsInNjcm9sbFBhcmVudHMiLCJzY3JvbGxQYXJlbnQiLCJ1cGRhdGUiLCJldmVudExpc3RlbmVycyIsImhhc2gkMSIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwibWF0Y2hlZCIsImhhc2giLCJnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCIsImdldFdpbmRvd1Njcm9sbCIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZ2V0V2luZG93U2Nyb2xsQmFyWCIsImdldFZpZXdwb3J0UmVjdCIsImh0bWwiLCJsYXlvdXRWaWV3cG9ydCIsImdldERvY3VtZW50UmVjdCIsIl9lbGVtZW50JG93bmVyRG9jdW1lbiIsIndpblNjcm9sbCIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0IiwiaXNTY3JvbGxQYXJlbnQiLCJfZ2V0Q29tcHV0ZWRTdHlsZSIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiZ2V0U2Nyb2xsUGFyZW50IiwibGlzdFNjcm9sbFBhcmVudHMiLCJpc0JvZHkiLCJ1cGRhdGVkTGlzdCIsInJlY3RUb0NsaWVudFJlY3QiLCJyZWN0IiwiZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUiLCJjbGlwcGluZ1BhcmVudCIsImdldENsaXBwaW5nUGFyZW50cyIsImNhbkVzY2FwZUNsaXBwaW5nIiwiY2xpcHBlckVsZW1lbnQiLCJnZXRDbGlwcGluZ1JlY3QiLCJib3VuZGFyeSIsInJvb3RCb3VuZGFyeSIsIm1haW5DbGlwcGluZ1BhcmVudHMiLCJmaXJzdENsaXBwaW5nUGFyZW50IiwiY2xpcHBpbmdSZWN0IiwiYWNjUmVjdCIsImNvbXB1dGVPZmZzZXRzIiwiY29tbW9uWCIsImNvbW1vblkiLCJtYWluQXhpcyIsImRldGVjdE92ZXJmbG93IiwiX29wdGlvbnMiLCJfb3B0aW9ucyRwbGFjZW1lbnQiLCJfb3B0aW9ucyRzdHJhdGVneSIsIl9vcHRpb25zJGJvdW5kYXJ5IiwiX29wdGlvbnMkcm9vdEJvdW5kYXJ5IiwiX29wdGlvbnMkZWxlbWVudENvbnRlIiwiZWxlbWVudENvbnRleHQiLCJfb3B0aW9ucyRhbHRCb3VuZGFyeSIsImFsdEJvdW5kYXJ5IiwiX29wdGlvbnMkcGFkZGluZyIsImFsdENvbnRleHQiLCJjbGlwcGluZ0NsaWVudFJlY3QiLCJjb250ZXh0RWxlbWVudCIsInJlZmVyZW5jZUNsaWVudFJlY3QiLCJwb3BwZXJDbGllbnRSZWN0IiwiZWxlbWVudENsaWVudFJlY3QiLCJvdmVyZmxvd09mZnNldHMiLCJvZmZzZXREYXRhIiwibXVsdGlwbHkiLCJjb21wdXRlQXV0b1BsYWNlbWVudCIsImZsaXBWYXJpYXRpb25zIiwiX29wdGlvbnMkYWxsb3dlZEF1dG9QIiwiYWxsb3dlZEF1dG9QbGFjZW1lbnRzIiwicGxhY2VtZW50cyQxIiwiYWxsb3dlZFBsYWNlbWVudHMiLCJvdmVyZmxvd3MiLCJzb3J0IiwiYSIsImIiLCJnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyIsIm9wcG9zaXRlUGxhY2VtZW50IiwiZmxpcCIsIl9za2lwIiwiX29wdGlvbnMkbWFpbkF4aXMiLCJjaGVja01haW5BeGlzIiwiX29wdGlvbnMkYWx0QXhpcyIsImFsdEF4aXMiLCJjaGVja0FsdEF4aXMiLCJzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMiLCJmYWxsYmFja1BsYWNlbWVudHMiLCJfb3B0aW9ucyRmbGlwVmFyaWF0aW8iLCJwcmVmZXJyZWRQbGFjZW1lbnQiLCJpc0Jhc2VQbGFjZW1lbnQiLCJyZWZlcmVuY2VSZWN0IiwiY2hlY2tzTWFwIiwibWFrZUZhbGxiYWNrQ2hlY2tzIiwiZmlyc3RGaXR0aW5nUGxhY2VtZW50IiwiaSIsIl9iYXNlUGxhY2VtZW50IiwiaXNTdGFydFZhcmlhdGlvbiIsIm1haW5WYXJpYXRpb25TaWRlIiwiYWx0VmFyaWF0aW9uU2lkZSIsImNoZWNrcyIsImV2ZXJ5IiwiY2hlY2siLCJudW1iZXJPZkNoZWNrcyIsIl9sb29wIiwiX2kiLCJmaXR0aW5nUGxhY2VtZW50IiwiX3JldCIsInJlc2V0IiwiZmxpcCQxIiwiZ2V0U2lkZU9mZnNldHMiLCJwcmV2ZW50ZWRPZmZzZXRzIiwiaXNBbnlTaWRlRnVsbHlDbGlwcGVkIiwic29tZSIsInNpZGUiLCJwcmV2ZW50T3ZlcmZsb3ciLCJyZWZlcmVuY2VPdmVyZmxvdyIsInBvcHBlckFsdE92ZXJmbG93IiwicmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzIiwicG9wcGVyRXNjYXBlT2Zmc2V0cyIsImlzUmVmZXJlbmNlSGlkZGVuIiwiaGFzUG9wcGVyRXNjYXBlZCIsImhpZGUkMSIsImRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZIiwiaW52ZXJ0RGlzdGFuY2UiLCJza2lkZGluZyIsImRpc3RhbmNlIiwiX29wdGlvbnMkb2Zmc2V0IiwiX2RhdGEkc3RhdGUkcGxhY2VtZW50Iiwib2Zmc2V0JDEiLCJwb3BwZXJPZmZzZXRzJDEiLCJnZXRBbHRBeGlzIiwiX29wdGlvbnMkdGV0aGVyIiwidGV0aGVyIiwiX29wdGlvbnMkdGV0aGVyT2Zmc2V0IiwidGV0aGVyT2Zmc2V0IiwidGV0aGVyT2Zmc2V0VmFsdWUiLCJub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUiLCJvZmZzZXRNb2RpZmllclN0YXRlIiwiX29mZnNldE1vZGlmaWVyU3RhdGUkIiwibWFpblNpZGUiLCJhbHRTaWRlIiwiYWRkaXRpdmUiLCJtaW5MZW4iLCJtYXhMZW4iLCJhcnJvd1BhZGRpbmdPYmplY3QiLCJhcnJvd1BhZGRpbmdNaW4iLCJhcnJvd1BhZGRpbmdNYXgiLCJhcnJvd0xlbiIsIm1pbk9mZnNldCIsIm1heE9mZnNldCIsImNsaWVudE9mZnNldCIsIm9mZnNldE1vZGlmaWVyVmFsdWUiLCJ0ZXRoZXJNaW4iLCJ0ZXRoZXJNYXgiLCJwcmV2ZW50ZWRPZmZzZXQiLCJfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIiwiX21haW5TaWRlIiwiX2FsdFNpZGUiLCJfb2Zmc2V0IiwiX2xlbiIsIl9taW4iLCJfbWF4IiwiaXNPcmlnaW5TaWRlIiwiX29mZnNldE1vZGlmaWVyVmFsdWUiLCJfdGV0aGVyTWluIiwiX3RldGhlck1heCIsIl9wcmV2ZW50ZWRPZmZzZXQiLCJwcmV2ZW50T3ZlcmZsb3ckMSIsImdldEhUTUxFbGVtZW50U2Nyb2xsIiwiZ2V0Tm9kZVNjcm9sbCIsImlzRWxlbWVudFNjYWxlZCIsImdldENvbXBvc2l0ZVJlY3QiLCJlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCIsImlzT2Zmc2V0UGFyZW50QW5FbGVtZW50Iiwib2Zmc2V0UGFyZW50SXNTY2FsZWQiLCJtb2RpZmllcnMiLCJ2aXNpdGVkIiwicmVzdWx0IiwibW9kaWZpZXIiLCJkZXAiLCJkZXBNb2RpZmllciIsIm9yZGVyTW9kaWZpZXJzIiwib3JkZXJlZE1vZGlmaWVycyIsImRlYm91bmNlIiwicGVuZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIm1lcmdlQnlOYW1lIiwibWVyZ2VkIiwiY3VycmVudCIsImV4aXN0aW5nIiwiREVGQVVMVF9PUFRJT05TIiwiYXJlVmFsaWRFbGVtZW50cyIsIl9rZXkiLCJwb3BwZXJHZW5lcmF0b3IiLCJnZW5lcmF0b3JPcHRpb25zIiwiX2dlbmVyYXRvck9wdGlvbnMiLCJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYiLCJkZWZhdWx0TW9kaWZpZXJzIiwiX2dlbmVyYXRvck9wdGlvbnMkZGVmMiIsImRlZmF1bHRPcHRpb25zIiwiY3JlYXRlUG9wcGVyIiwiZWZmZWN0Q2xlYW51cEZucyIsImlzRGVzdHJveWVkIiwic2V0T3B0aW9ucyIsInNldE9wdGlvbnNBY3Rpb24iLCJjbGVhbnVwTW9kaWZpZXJFZmZlY3RzIiwibSIsInJ1bk1vZGlmaWVyRWZmZWN0cyIsImZvcmNlVXBkYXRlIiwiX3N0YXRlJGVsZW1lbnRzIiwiX3N0YXRlJG9yZGVyZWRNb2RpZmllIiwiX3N0YXRlJG9yZGVyZWRNb2RpZmllMiIsImRlc3Ryb3kiLCJvbkZpcnN0VXBkYXRlIiwiX3JlZjMkb3B0aW9ucyIsImNsZWFudXBGbiIsIm5vb3BGbiIsImNyZWF0ZVBvcHBlciQyIiwiZGVmYXVsdE1vZGlmaWVycyQxIiwiY3JlYXRlUG9wcGVyJDEiLCJQb3BwZXIiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJjcmVhdGVQb3BwZXJCYXNlIiwiY3JlYXRlUG9wcGVyTGl0ZSIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiTkFNRSRhIiwiREFUQV9LRVkkNiIsIkVWRU5UX0tFWSQ2IiwiREFUQV9BUElfS0VZJDMiLCJFU0NBUEVfS0VZJDIiLCJUQUJfS0VZJDEiLCJBUlJPV19VUF9LRVkkMSIsIkFSUk9XX0RPV05fS0VZJDEiLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJFVkVOVF9ISURFJDUiLCJFVkVOVF9ISURERU4kNSIsIkVWRU5UX1NIT1ckNSIsIkVWRU5UX1NIT1dOJDUiLCJFVkVOVF9DTElDS19EQVRBX0FQSSQzIiwiRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSIsIkVWRU5UX0tFWVVQX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9TSE9XJDYiLCJDTEFTU19OQU1FX0RST1BVUCIsIkNMQVNTX05BTUVfRFJPUEVORCIsIkNMQVNTX05BTUVfRFJPUFNUQVJUIiwiQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSIiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04iLCJTRUxFQ1RPUl9NRU5VIiwiU0VMRUNUT1JfTkFWQkFSIiwiU0VMRUNUT1JfTkFWQkFSX05BViIsIlNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMiLCJQTEFDRU1FTlRfVE9QIiwiUExBQ0VNRU5UX1RPUEVORCIsIlBMQUNFTUVOVF9CT1RUT00iLCJQTEFDRU1FTlRfQk9UVE9NRU5EIiwiUExBQ0VNRU5UX1JJR0hUIiwiUExBQ0VNRU5UX0xFRlQiLCJQTEFDRU1FTlRfVE9QQ0VOVEVSIiwiUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiIsIkRlZmF1bHQkOSIsImF1dG9DbG9zZSIsImRpc3BsYXkiLCJwb3BwZXJDb25maWciLCJEZWZhdWx0VHlwZSQ5IiwiRHJvcGRvd24iLCJfQmFzZUNvbXBvbmVudDUiLCJfc3VwZXI3IiwiX3RoaXMxNSIsIl9wb3BwZXIiLCJfcGFyZW50IiwiX21lbnUiLCJfaW5OYXZiYXIiLCJfZGV0ZWN0TmF2YmFyIiwic2hvd0V2ZW50IiwiX2NyZWF0ZVBvcHBlciIsIl9yZWY5IiwiX2l0ZXJhdG9yMTIiLCJfc3RlcDEyIiwiZm9jdXMiLCJfY29tcGxldGVIaWRlIiwiaGlkZUV2ZW50IiwiX3JlZjEwIiwiX2l0ZXJhdG9yMTMiLCJfc3RlcDEzIiwicmVmZXJlbmNlRWxlbWVudCIsIl9nZXRQb3BwZXJDb25maWciLCJfZ2V0UGxhY2VtZW50IiwicGFyZW50RHJvcGRvd24iLCJpc0VuZCIsIl9nZXRPZmZzZXQiLCJfdGhpczE2IiwicG9wcGVyRGF0YSIsImRlZmF1bHRCc1BvcHBlckNvbmZpZyIsIl9zZWxlY3RNZW51SXRlbSIsIl9yZWYxMSIsImNsZWFyTWVudXMiLCJvcGVuVG9nZ2xlcyIsIl9pdGVyYXRvcjE0IiwiX3N0ZXAxNCIsImNvbXBvc2VkUGF0aCIsImlzTWVudVRhcmdldCIsImRhdGFBcGlLZXlkb3duSGFuZGxlciIsImlzSW5wdXQiLCJpc0VzY2FwZUV2ZW50IiwiaXNVcE9yRG93bkV2ZW50IiwiZ2V0VG9nZ2xlQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwiU0VMRUNUT1JfRklYRURfQ09OVEVOVCIsIlNFTEVDVE9SX1NUSUNLWV9DT05URU5UIiwiUFJPUEVSVFlfUEFERElORyIsIlBST1BFUlRZX01BUkdJTiIsIlNjcm9sbEJhckhlbHBlciIsImdldFdpZHRoIiwiZG9jdW1lbnRXaWR0aCIsImlubmVyV2lkdGgiLCJfZGlzYWJsZU92ZXJGbG93IiwiX3NldEVsZW1lbnRBdHRyaWJ1dGVzIiwiY2FsY3VsYXRlZFZhbHVlIiwiX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJpc092ZXJmbG93aW5nIiwiX3NhdmVJbml0aWFsQXR0cmlidXRlIiwic3R5bGVQcm9wZXJ0eSIsIl90aGlzMTciLCJzY3JvbGxiYXJXaWR0aCIsIm1hbmlwdWxhdGlvbkNhbGxCYWNrIiwic2V0UHJvcGVydHkiLCJfYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayIsImFjdHVhbFZhbHVlIiwicmVtb3ZlUHJvcGVydHkiLCJjYWxsQmFjayIsIl9pdGVyYXRvcjE1IiwiX3N0ZXAxNSIsInNlbCIsIk5BTUUkOSIsIkNMQVNTX05BTUVfRkFERSQ0IiwiQ0xBU1NfTkFNRV9TSE9XJDUiLCJFVkVOVF9NT1VTRURPV04iLCJEZWZhdWx0JDgiLCJjbGFzc05hbWUiLCJjbGlja0NhbGxiYWNrIiwicm9vdEVsZW1lbnQiLCJEZWZhdWx0VHlwZSQ4IiwiQmFja2Ryb3AiLCJfQ29uZmlnMyIsIl9zdXBlcjgiLCJfdGhpczE4IiwiX2lzQXBwZW5kZWQiLCJfYXBwZW5kIiwiX2dldEVsZW1lbnQiLCJfZW11bGF0ZUFuaW1hdGlvbiIsIl90aGlzMTkiLCJiYWNrZHJvcCIsImNyZWF0ZUVsZW1lbnQiLCJfdGhpczIwIiwiYXBwZW5kIiwiTkFNRSQ4IiwiREFUQV9LRVkkNSIsIkVWRU5UX0tFWSQ1IiwiRVZFTlRfRk9DVVNJTiQyIiwiRVZFTlRfS0VZRE9XTl9UQUIiLCJUQUJfS0VZIiwiVEFCX05BVl9GT1JXQVJEIiwiVEFCX05BVl9CQUNLV0FSRCIsIkRlZmF1bHQkNyIsImF1dG9mb2N1cyIsInRyYXBFbGVtZW50IiwiRGVmYXVsdFR5cGUkNyIsIkZvY3VzVHJhcCIsIl9Db25maWc0IiwiX3N1cGVyOSIsIl90aGlzMjEiLCJfaXNBY3RpdmUiLCJfbGFzdFRhYk5hdkRpcmVjdGlvbiIsImFjdGl2YXRlIiwiX3RoaXMyMiIsIl9oYW5kbGVGb2N1c2luIiwiX2hhbmRsZUtleWRvd24iLCJkZWFjdGl2YXRlIiwic2hpZnRLZXkiLCJOQU1FJDciLCJEQVRBX0tFWSQ0IiwiRVZFTlRfS0VZJDQiLCJEQVRBX0FQSV9LRVkkMiIsIkVTQ0FQRV9LRVkkMSIsIkVWRU5UX0hJREUkNCIsIkVWRU5UX0hJREVfUFJFVkVOVEVEJDEiLCJFVkVOVF9ISURERU4kNCIsIkVWRU5UX1NIT1ckNCIsIkVWRU5UX1NIT1dOJDQiLCJFVkVOVF9SRVNJWkUkMSIsIkVWRU5UX0NMSUNLX0RJU01JU1MiLCJFVkVOVF9NT1VTRURPV05fRElTTUlTUyIsIkVWRU5UX0tFWURPV05fRElTTUlTUyQxIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMiIsIkNMQVNTX05BTUVfT1BFTiIsIkNMQVNTX05BTUVfRkFERSQzIiwiQ0xBU1NfTkFNRV9TSE9XJDQiLCJDTEFTU19OQU1FX1NUQVRJQyIsIk9QRU5fU0VMRUNUT1IkMSIsIlNFTEVDVE9SX0RJQUxPRyIsIlNFTEVDVE9SX01PREFMX0JPRFkiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQyIiwiRGVmYXVsdCQ2IiwiRGVmYXVsdFR5cGUkNiIsIk1vZGFsIiwiX0Jhc2VDb21wb25lbnQ2IiwiX3N1cGVyMTAiLCJfdGhpczIzIiwiX2RpYWxvZyIsIl9iYWNrZHJvcCIsIl9pbml0aWFsaXplQmFja0Ryb3AiLCJfZm9jdXN0cmFwIiwiX2luaXRpYWxpemVGb2N1c1RyYXAiLCJfc2Nyb2xsQmFyIiwiX3RoaXMyNCIsIl9hZGp1c3REaWFsb2ciLCJfc2hvd0VsZW1lbnQiLCJfdGhpczI1IiwiX2hpZGVNb2RhbCIsIl9pOCIsIl9hcnIyIiwiaHRtbEVsZW1lbnQiLCJoYW5kbGVVcGRhdGUiLCJfdGhpczI2IiwibW9kYWxCb2R5IiwidHJhbnNpdGlvbkNvbXBsZXRlIiwiX3RoaXMyNyIsIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwiZXZlbnQyIiwiX3RoaXMyOCIsIl9yZXNldEFkanVzdG1lbnRzIiwiX3RoaXMyOSIsImlzTW9kYWxPdmVyZmxvd2luZyIsImluaXRpYWxPdmVyZmxvd1kiLCJpc0JvZHlPdmVyZmxvd2luZyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiX3RoaXMzMCIsImFscmVhZHlPcGVuIiwiTkFNRSQ2IiwiREFUQV9LRVkkMyIsIkVWRU5UX0tFWSQzIiwiREFUQV9BUElfS0VZJDEiLCJFVkVOVF9MT0FEX0RBVEFfQVBJJDIiLCJFU0NBUEVfS0VZIiwiQ0xBU1NfTkFNRV9TSE9XJDMiLCJDTEFTU19OQU1FX1NIT1dJTkckMSIsIkNMQVNTX05BTUVfSElESU5HIiwiQ0xBU1NfTkFNRV9CQUNLRFJPUCIsIk9QRU5fU0VMRUNUT1IiLCJFVkVOVF9TSE9XJDMiLCJFVkVOVF9TSE9XTiQzIiwiRVZFTlRfSElERSQzIiwiRVZFTlRfSElERV9QUkVWRU5URUQiLCJFVkVOVF9ISURERU4kMyIsIkVWRU5UX1JFU0laRSIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJJDEiLCJFVkVOVF9LRVlET1dOX0RJU01JU1MiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQxIiwiRGVmYXVsdCQ1IiwiRGVmYXVsdFR5cGUkNSIsIk9mZmNhbnZhcyIsIl9CYXNlQ29tcG9uZW50NyIsIl9zdXBlcjExIiwiX3RoaXMzMSIsIl90aGlzMzIiLCJfdGhpczMzIiwiYmx1ciIsImNvbXBsZXRlQ2FsbGJhY2siLCJfdGhpczM0IiwiX3RoaXMzNSIsIl90aGlzMzYiLCJfaXRlcmF0b3IxNiIsIl9zdGVwMTYiLCJfaXRlcmF0b3IxNyIsIl9zdGVwMTciLCJ1cmlBdHRyaWJ1dGVzIiwiQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwiYWxsb3dlZEF0dHJpYnV0ZSIsImFsbG93ZWRBdHRyaWJ1dGVMaXN0IiwiYXR0cmlidXRlTmFtZSIsIm5vZGVWYWx1ZSIsImF0dHJpYnV0ZVJlZ2V4IiwicmVnZXgiLCJEZWZhdWx0QWxsb3dsaXN0IiwiYXJlYSIsImJyIiwiY29sIiwiY29kZSIsImRpdiIsImVtIiwiaHIiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJsaSIsIm9sIiwicCIsInByZSIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsInNhbml0aXplSHRtbCIsInVuc2FmZUh0bWwiLCJhbGxvd0xpc3QiLCJzYW5pdGl6ZUZ1bmN0aW9uIiwiX3JlZjEyIiwiZG9tUGFyc2VyIiwiRE9NUGFyc2VyIiwiY3JlYXRlZERvY3VtZW50IiwicGFyc2VGcm9tU3RyaW5nIiwiX2l0ZXJhdG9yMTgiLCJfc3RlcDE4IiwiX3JlZjEzIiwiZWxlbWVudE5hbWUiLCJhdHRyaWJ1dGVMaXN0IiwiYWxsb3dlZEF0dHJpYnV0ZXMiLCJfaXRlcmF0b3IxOSIsIl9zdGVwMTkiLCJpbm5lckhUTUwiLCJOQU1FJDUiLCJEZWZhdWx0JDQiLCJjb250ZW50IiwiZXh0cmFDbGFzcyIsInNhbml0aXplIiwic2FuaXRpemVGbiIsInRlbXBsYXRlIiwiRGVmYXVsdFR5cGUkNCIsIkRlZmF1bHRDb250ZW50VHlwZSIsImVudHJ5IiwiVGVtcGxhdGVGYWN0b3J5IiwiX0NvbmZpZzUiLCJfc3VwZXIxMiIsIl90aGlzMzciLCJnZXRDb250ZW50IiwiX3RoaXMzOCIsIl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbiIsImhhc0NvbnRlbnQiLCJjaGFuZ2VDb250ZW50IiwiX2NoZWNrQ29udGVudCIsInRvSHRtbCIsInRlbXBsYXRlV3JhcHBlciIsIl9tYXliZVNhbml0aXplIiwiX2k5IiwiX09iamVjdCRlbnRyaWVzNSIsIl9PYmplY3QkZW50cmllczUkX2kiLCJ0ZXh0IiwiX3NldENvbnRlbnQiLCJfdGVtcGxhdGUkY2xhc3NMaXN0IiwiYXJnIiwiX2kxMCIsIl9PYmplY3QkZW50cmllczYiLCJfT2JqZWN0JGVudHJpZXM2JF9pIiwidGVtcGxhdGVFbGVtZW50IiwiX3B1dEVsZW1lbnRJblRlbXBsYXRlIiwiTkFNRSQ0IiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiQ0xBU1NfTkFNRV9GQURFJDIiLCJDTEFTU19OQU1FX01PREFMIiwiQ0xBU1NfTkFNRV9TSE9XJDIiLCJTRUxFQ1RPUl9UT09MVElQX0lOTkVSIiwiU0VMRUNUT1JfTU9EQUwiLCJFVkVOVF9NT0RBTF9ISURFIiwiVFJJR0dFUl9IT1ZFUiIsIlRSSUdHRVJfRk9DVVMiLCJUUklHR0VSX0NMSUNLIiwiVFJJR0dFUl9NQU5VQUwiLCJFVkVOVF9ISURFJDIiLCJFVkVOVF9ISURERU4kMiIsIkVWRU5UX1NIT1ckMiIsIkVWRU5UX1NIT1dOJDIiLCJFVkVOVF9JTlNFUlRFRCIsIkVWRU5UX0NMSUNLJDEiLCJFVkVOVF9GT0NVU0lOJDEiLCJFVkVOVF9GT0NVU09VVCQxIiwiRVZFTlRfTU9VU0VFTlRFUiIsIkVWRU5UX01PVVNFTEVBVkUiLCJBdHRhY2htZW50TWFwIiwiQVVUTyIsIlRPUCIsIlJJR0hUIiwiQk9UVE9NIiwiTEVGVCIsIkRlZmF1bHQkMyIsImFuaW1hdGlvbiIsImNvbnRhaW5lciIsImN1c3RvbUNsYXNzIiwiZGVsYXkiLCJ0aXRsZSIsIkRlZmF1bHRUeXBlJDMiLCJUb29sdGlwIiwiX0Jhc2VDb21wb25lbnQ4IiwiX3N1cGVyMTMiLCJfdGhpczM5IiwiX2lzRW5hYmxlZCIsIl90aW1lb3V0IiwiX2lzSG92ZXJlZCIsIl9hY3RpdmVUcmlnZ2VyIiwiX3RlbXBsYXRlRmFjdG9yeSIsIl9uZXdDb250ZW50IiwidGlwIiwiX3NldExpc3RlbmVycyIsIl9maXhUaXRsZSIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiY2xpY2siLCJfbGVhdmUiLCJfZW50ZXIiLCJfaGlkZU1vZGFsSGFuZGxlciIsIl9kaXNwb3NlUG9wcGVyIiwiX3RoaXM0MCIsIl9pc1dpdGhDb250ZW50Iiwic2hhZG93Um9vdCIsImlzSW5UaGVEb20iLCJfZ2V0VGlwRWxlbWVudCIsIl9yZWYxNCIsIl9pdGVyYXRvcjIwIiwiX3N0ZXAyMCIsIl90aGlzNDEiLCJfcmVmMTUiLCJfaXRlcmF0b3IyMSIsIl9zdGVwMjEiLCJfaXNXaXRoQWN0aXZlVHJpZ2dlciIsIl9nZXRUaXRsZSIsIl9jcmVhdGVUaXBFbGVtZW50IiwiX2dldENvbnRlbnRGb3JUZW1wbGF0ZSIsIl9nZXRUZW1wbGF0ZUZhY3RvcnkiLCJ0aXBJZCIsInNldENvbnRlbnQiLCJfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0IiwiX2dldERlbGVnYXRlQ29uZmlnIiwiYXR0YWNobWVudCIsIl90aGlzNDIiLCJfdGhpczQzIiwiX3RoaXM0NCIsInRyaWdnZXJzIiwiX2l0ZXJhdG9yMjIiLCJfc3RlcDIyIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX3RoaXM0NSIsIl9zZXRUaW1lb3V0IiwiX3RoaXM0NiIsInRpbWVvdXQiLCJkYXRhQXR0cmlidXRlcyIsIl9pMTEiLCJfT2JqZWN0JGtleXMyIiwiZGF0YUF0dHJpYnV0ZSIsIl9pMTIiLCJfT2JqZWN0JGVudHJpZXM3IiwiX09iamVjdCRlbnRyaWVzNyRfaSIsIk5BTUUkMyIsIlNFTEVDVE9SX1RJVExFIiwiU0VMRUNUT1JfQ09OVEVOVCIsIkRlZmF1bHQkMiIsIkRlZmF1bHRUeXBlJDIiLCJQb3BvdmVyIiwiX1Rvb2x0aXAiLCJfc3VwZXIxNCIsIl9nZXRDb250ZW50IiwiX3JlZjE3IiwiTkFNRSQyIiwiREFUQV9LRVkkMiIsIkVWRU5UX0tFWSQyIiwiREFUQV9BUElfS0VZIiwiRVZFTlRfQUNUSVZBVEUiLCJFVkVOVF9DTElDSyIsIkVWRU5UX0xPQURfREFUQV9BUEkkMSIsIkNMQVNTX05BTUVfRFJPUERPV05fSVRFTSIsIkNMQVNTX05BTUVfQUNUSVZFJDEiLCJTRUxFQ1RPUl9EQVRBX1NQWSIsIlNFTEVDVE9SX1RBUkdFVF9MSU5LUyIsIlNFTEVDVE9SX05BVl9MSVNUX0dST1VQIiwiU0VMRUNUT1JfTkFWX0xJTktTIiwiU0VMRUNUT1JfTkFWX0lURU1TIiwiU0VMRUNUT1JfTElTVF9JVEVNUyIsIlNFTEVDVE9SX0xJTktfSVRFTVMiLCJTRUxFQ1RPUl9EUk9QRE9XTiIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSQxIiwiRGVmYXVsdCQxIiwicm9vdE1hcmdpbiIsInNtb290aFNjcm9sbCIsInRocmVzaG9sZCIsIkRlZmF1bHRUeXBlJDEiLCJTY3JvbGxTcHkiLCJfQmFzZUNvbXBvbmVudDkiLCJfc3VwZXIxNSIsIl90aGlzNDciLCJfdGFyZ2V0TGlua3MiLCJfb2JzZXJ2YWJsZVNlY3Rpb25zIiwiX3Jvb3RFbGVtZW50IiwiX2FjdGl2ZVRhcmdldCIsIl9vYnNlcnZlciIsIl9wcmV2aW91c1Njcm9sbERhdGEiLCJ2aXNpYmxlRW50cnlUb3AiLCJwYXJlbnRTY3JvbGxUb3AiLCJyZWZyZXNoIiwiX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMiLCJfbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwiLCJkaXNjb25uZWN0IiwiX2dldE5ld09ic2VydmVyIiwiX2l0ZXJhdG9yMjMiLCJfc3RlcDIzIiwic2VjdGlvbiIsIm9ic2VydmUiLCJfdGhpczQ4Iiwib2JzZXJ2YWJsZVNlY3Rpb24iLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiX3RoaXM0OSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiX29ic2VydmVyQ2FsbGJhY2siLCJfdGhpczUwIiwidGFyZ2V0RWxlbWVudCIsIl9wcm9jZXNzIiwidXNlclNjcm9sbHNEb3duIiwiX2l0ZXJhdG9yMjQiLCJfc3RlcDI0IiwiaXNJbnRlcnNlY3RpbmciLCJfY2xlYXJBY3RpdmVDbGFzcyIsImVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyIsInRhcmdldExpbmtzIiwiX2l0ZXJhdG9yMjUiLCJfc3RlcDI1IiwiYW5jaG9yIiwiX2FjdGl2YXRlUGFyZW50cyIsIl9pdGVyYXRvcjI2IiwiX3N0ZXAyNiIsImxpc3RHcm91cCIsIl9pdGVyYXRvcjI3IiwiX3N0ZXAyNyIsImFjdGl2ZU5vZGVzIiwiX2l0ZXJhdG9yMjgiLCJfc3RlcDI4IiwiX2l0ZXJhdG9yMjkiLCJfc3RlcDI5Iiwic3B5IiwiTkFNRSQxIiwiREFUQV9LRVkkMSIsIkVWRU5UX0tFWSQxIiwiRVZFTlRfSElERSQxIiwiRVZFTlRfSElEREVOJDEiLCJFVkVOVF9TSE9XJDEiLCJFVkVOVF9TSE9XTiQxIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCJFVkVOVF9LRVlET1dOIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSIsIkFSUk9XX0xFRlRfS0VZIiwiQVJST1dfUklHSFRfS0VZIiwiQVJST1dfVVBfS0VZIiwiQVJST1dfRE9XTl9LRVkiLCJDTEFTU19OQU1FX0FDVElWRSIsIkNMQVNTX05BTUVfRkFERSQxIiwiQ0xBU1NfTkFNRV9TSE9XJDEiLCJDTEFTU19EUk9QRE9XTiIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsIlNFTEVDVE9SX0RST1BET1dOX01FTlUiLCJOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwiU0VMRUNUT1JfVEFCX1BBTkVMIiwiU0VMRUNUT1JfT1VURVIiLCJTRUxFQ1RPUl9JTk5FUiIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwiU0VMRUNUT1JfSU5ORVJfRUxFTSIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSIsIlRhYiIsIl9CYXNlQ29tcG9uZW50MTAiLCJfc3VwZXIxNiIsIl90aGlzNTEiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXMiLCJfZ2V0Q2hpbGRyZW4iLCJpbm5lckVsZW0iLCJfZWxlbUlzQWN0aXZlIiwiYWN0aXZlIiwiX2dldEFjdGl2ZUVsZW0iLCJfZGVhY3RpdmF0ZSIsIl9hY3RpdmF0ZSIsInJlbGF0ZWRFbGVtIiwiX3RoaXM1MiIsIl90b2dnbGVEcm9wRG93biIsIl90aGlzNTMiLCJuZXh0QWN0aXZlRWxlbWVudCIsInByZXZlbnRTY3JvbGwiLCJfdGhpczU0IiwiX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzIiwiX2l0ZXJhdG9yMzAiLCJfc3RlcDMwIiwiX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZCIsIl9nZXRJbm5lckVsZW1lbnQiLCJpc0FjdGl2ZSIsIm91dGVyRWxlbSIsIl9nZXRPdXRlckVsZW1lbnQiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsIiwib3BlbiIsIl9pdGVyYXRvcjMxIiwiX3N0ZXAzMSIsIkVWRU5UX01PVVNFT1ZFUiIsIkVWRU5UX01PVVNFT1VUIiwiRVZFTlRfRk9DVVNJTiIsIkVWRU5UX0ZPQ1VTT1VUIiwiRVZFTlRfSElERSIsIkVWRU5UX0hJRERFTiIsIkVWRU5UX1NIT1ciLCJFVkVOVF9TSE9XTiIsIkNMQVNTX05BTUVfRkFERSIsIkNMQVNTX05BTUVfSElERSIsIkNMQVNTX05BTUVfU0hPVyIsIkNMQVNTX05BTUVfU0hPV0lORyIsImF1dG9oaWRlIiwiVG9hc3QiLCJfQmFzZUNvbXBvbmVudDExIiwiX3N1cGVyMTciLCJfdGhpczU1IiwiX2hhc01vdXNlSW50ZXJhY3Rpb24iLCJfaGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiIsIl90aGlzNTYiLCJfY2xlYXJUaW1lb3V0IiwiX21heWJlU2NoZWR1bGVIaWRlIiwiX3RoaXM1NyIsImlzU2hvd24iLCJfdGhpczU4IiwiX29uSW50ZXJhY3Rpb24iLCJpc0ludGVyYWN0aW5nIiwiX3RoaXM1OSIsImluZGV4X3VtZCJdLCJzb3VyY2VSb290IjoiIn0=