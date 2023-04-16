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
/* harmony import */ var _js_blackjack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/blackjack */ "./assets/js/blackjack.js");
/* harmony import */ var _js_blackjack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_blackjack__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application


// import bootstrap js


// import own js


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

/***/ "./assets/js/blackjack.js":
/*!********************************!*\
  !*** ./assets/js/blackjack.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
var cardContainers = document.querySelectorAll(".blackjack-card-container");
cardContainers.forEach(function (container) {
  var cards = container.querySelectorAll(".card-sprite");
  var addLeft = 100 / (cards.length + 1);
  var rotate = 8 / (cards.length - 1);
  console.log(rotate);
  var rotateStyle = -4;
  var classLeft = addLeft;
  cards.forEach(function (card) {
    card.style.left = "".concat(classLeft, "%");
    card.style.transform = "translate(-50%, 0) rotate(".concat(rotateStyle, "deg)");
    classLeft += addLeft;
    rotateStyle += rotate;
  });
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRCtDOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQUFBQyxRQUFBLDBCQUFBQyxXQUFBO0VBQUFDLFNBQUEsQ0FBQUYsUUFBQSxFQUFBQyxXQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLFFBQUE7RUFBQSxTQUFBQSxTQUFBO0lBQUFLLGVBQUEsT0FBQUwsUUFBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBUixRQUFBO0lBQUFTLEdBQUE7SUFBQUMsS0FBQSxFQVVJLFNBQUFDLFFBQUEsRUFBVTtNQUNOLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLEdBQUcsbUVBQW1FO0lBQ2xHO0VBQUM7RUFBQSxPQUFBYixRQUFBO0FBQUEsRUFId0JELDJEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUMwQjs7QUFFMUI7QUFDcUI7O0FBRXJCO0FBQytCOztBQUUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQjREOztBQUU1RDtBQUNPLElBQU1pQixHQUFHLEdBQUdELDBFQUFnQixDQUFDRSx5SUFJbkMsQ0FBQzs7QUFFRjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVkEsSUFBTUUsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDO0FBQzdFRixjQUFjLENBQUNHLE9BQU8sQ0FBQyxVQUFBQyxTQUFTLEVBQUk7RUFDaEMsSUFBTUMsS0FBSyxHQUFHRCxTQUFTLENBQUNGLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztFQUN4RCxJQUFNSSxPQUFPLEdBQUcsR0FBRyxJQUFJRCxLQUFLLENBQUNFLE1BQU0sR0FBRyxDQUFDLENBQUM7RUFDeEMsSUFBTUMsTUFBTSxHQUFHLENBQUMsSUFBSUgsS0FBSyxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0VBQ3JDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDO0VBQ25CLElBQUlHLFdBQVcsR0FBRyxDQUFDLENBQUM7RUFDcEIsSUFBSUMsU0FBUyxHQUFHTixPQUFPO0VBQ3ZCRCxLQUFLLENBQUNGLE9BQU8sQ0FBQyxVQUFBVSxJQUFJLEVBQUk7SUFDbEJBLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLE1BQUFDLE1BQUEsQ0FBTUosU0FBUyxNQUFHO0lBQ2pDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0csU0FBUyxnQ0FBQUQsTUFBQSxDQUFnQ0wsV0FBVyxTQUFNO0lBQ3JFQyxTQUFTLElBQUlOLE9BQU87SUFDcEJLLFdBQVcsSUFBSUgsTUFBTTtFQUN6QixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFVBQVVVLE1BQU0sRUFBRUMsT0FBTyxFQUFFO0VBQzFCLE9BQWMsT0FBQUUsT0FBQSxDQUFQRCxPQUFPLE9BQUssUUFBUSxJQUFJLFFBQWEsS0FBSyxXQUFXLEdBQUdFLE1BQU0sQ0FBQ0YsT0FBTyxHQUFHRCxPQUFPLEVBQUUsR0FDekYsS0FBMEMsR0FBR0ksb0NBQU9KLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxrR0FBQyxJQUMzREQsQ0FBc0csQ0FBQztBQUMxRyxDQUFDLEVBQUUsSUFBSSxFQUFHLFlBQVk7RUFBRSxZQUFZOztFQUVsQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRSxJQUFBVSxpQkFBQTtFQU9BLElBQU1DLE9BQU8sR0FBRyxPQUFPO0VBQ3ZCLElBQU1DLHVCQUF1QixHQUFHLElBQUk7RUFDcEMsSUFBTUMsY0FBYyxHQUFHLGVBQWU7O0VBRXRDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFDRSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUdDLFFBQVEsRUFBSTtJQUNoQyxJQUFJQSxRQUFRLElBQUlDLE1BQU0sQ0FBQ0MsR0FBRyxJQUFJRCxNQUFNLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTSxFQUFFO01BQy9DO01BQ0FILFFBQVEsR0FBR0EsUUFBUSxDQUFDSSxPQUFPLENBQUMsZUFBZSxFQUFFLFVBQUNDLEtBQUssRUFBRUMsRUFBRTtRQUFBLFdBQUF2QixNQUFBLENBQVNtQixHQUFHLENBQUNDLE1BQU0sQ0FBQ0csRUFBRSxDQUFDO01BQUEsQ0FBRSxDQUFDO0lBQ25GO0lBQ0EsT0FBT04sUUFBUTtFQUNqQixDQUFDOztFQUVEO0VBQ0EsSUFBTU8sTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUdDLE1BQU0sRUFBSTtJQUN2QixJQUFJQSxNQUFNLEtBQUssSUFBSSxJQUFJQSxNQUFNLEtBQUtDLFNBQVMsRUFBRTtNQUMzQyxVQUFBMUIsTUFBQSxDQUFVeUIsTUFBTTtJQUNsQjtJQUNBLE9BQU9FLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0wsTUFBTSxDQUFDLENBQUNILEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1MsV0FBVyxFQUFFO0VBQ3JGLENBQUM7O0VBRUQ7QUFDRjtBQUNBOztFQUVFLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFHQyxNQUFNLEVBQUk7SUFDdkIsR0FBRztNQUNEQSxNQUFNLElBQUlDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHdkIsT0FBTyxDQUFDO0lBQy9DLENBQUMsUUFBUTVCLFFBQVEsQ0FBQ29ELGNBQWMsQ0FBQ0osTUFBTSxDQUFDO0lBQ3hDLE9BQU9BLE1BQU07RUFDZixDQUFDO0VBQ0QsSUFBTUssZ0NBQWdDLEdBQUcsU0FBbkNBLGdDQUFnQ0EsQ0FBRzdELE9BQU8sRUFBSTtJQUNsRCxJQUFJLENBQUNBLE9BQU8sRUFBRTtNQUNaLE9BQU8sQ0FBQztJQUNWOztJQUVBO0lBQ0EsSUFBQThELHFCQUFBLEdBR0lyQixNQUFNLENBQUNzQixnQkFBZ0IsQ0FBQy9ELE9BQU8sQ0FBQztNQUZsQ2dFLGtCQUFrQixHQUFBRixxQkFBQSxDQUFsQkUsa0JBQWtCO01BQ2xCQyxlQUFlLEdBQUFILHFCQUFBLENBQWZHLGVBQWU7SUFFakIsSUFBTUMsdUJBQXVCLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDSixrQkFBa0IsQ0FBQztJQUNyRSxJQUFNSyxvQkFBb0IsR0FBR0YsTUFBTSxDQUFDQyxVQUFVLENBQUNILGVBQWUsQ0FBQzs7SUFFL0Q7SUFDQSxJQUFJLENBQUNDLHVCQUF1QixJQUFJLENBQUNHLG9CQUFvQixFQUFFO01BQ3JELE9BQU8sQ0FBQztJQUNWOztJQUVBO0lBQ0FMLGtCQUFrQixHQUFHQSxrQkFBa0IsQ0FBQ00sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyREwsZUFBZSxHQUFHQSxlQUFlLENBQUNLLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsT0FBTyxDQUFDSCxNQUFNLENBQUNDLFVBQVUsQ0FBQ0osa0JBQWtCLENBQUMsR0FBR0csTUFBTSxDQUFDQyxVQUFVLENBQUNILGVBQWUsQ0FBQyxJQUFJNUIsdUJBQXVCO0VBQy9HLENBQUM7RUFDRCxJQUFNa0Msb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBR3ZFLE9BQU8sRUFBSTtJQUN0Q0EsT0FBTyxDQUFDd0UsYUFBYSxDQUFDLElBQUlDLEtBQUssQ0FBQ25DLGNBQWMsQ0FBQyxDQUFDO0VBQ2xELENBQUM7RUFDRCxJQUFNb0MsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUcxQixNQUFNLEVBQUk7SUFDNUIsSUFBSSxDQUFDQSxNQUFNLElBQUlwQixPQUFBLENBQU9vQixNQUFNLE1BQUssUUFBUSxFQUFFO01BQ3pDLE9BQU8sS0FBSztJQUNkO0lBQ0EsSUFBSSxPQUFPQSxNQUFNLENBQUMyQixNQUFNLEtBQUssV0FBVyxFQUFFO01BQ3hDM0IsTUFBTSxHQUFHQSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BCO0lBQ0EsT0FBTyxPQUFPQSxNQUFNLENBQUM0QixRQUFRLEtBQUssV0FBVztFQUMvQyxDQUFDO0VBQ0QsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUc3QixNQUFNLEVBQUk7SUFDM0I7SUFDQSxJQUFJMEIsV0FBVyxDQUFDMUIsTUFBTSxDQUFDLEVBQUU7TUFDdkIsT0FBT0EsTUFBTSxDQUFDMkIsTUFBTSxHQUFHM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHQSxNQUFNO0lBQzNDO0lBQ0EsSUFBSSxPQUFPQSxNQUFNLEtBQUssUUFBUSxJQUFJQSxNQUFNLENBQUNsQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ25ELE9BQU9OLFFBQVEsQ0FBQ3NFLGFBQWEsQ0FBQ3ZDLGFBQWEsQ0FBQ1MsTUFBTSxDQUFDLENBQUM7SUFDdEQ7SUFDQSxPQUFPLElBQUk7RUFDYixDQUFDO0VBQ0QsSUFBTStCLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFHL0UsT0FBTyxFQUFJO0lBQzNCLElBQUksQ0FBQzBFLFdBQVcsQ0FBQzFFLE9BQU8sQ0FBQyxJQUFJQSxPQUFPLENBQUNnRixjQUFjLEVBQUUsQ0FBQ2xFLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDbEUsT0FBTyxLQUFLO0lBQ2Q7SUFDQSxJQUFNbUUsZ0JBQWdCLEdBQUdsQixnQkFBZ0IsQ0FBQy9ELE9BQU8sQ0FBQyxDQUFDa0YsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUztJQUMvRjtJQUNBLElBQU1DLGFBQWEsR0FBR25GLE9BQU8sQ0FBQ29GLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztJQUM1RCxJQUFJLENBQUNELGFBQWEsRUFBRTtNQUNsQixPQUFPRixnQkFBZ0I7SUFDekI7SUFDQSxJQUFJRSxhQUFhLEtBQUtuRixPQUFPLEVBQUU7TUFDN0IsSUFBTXFGLE9BQU8sR0FBR3JGLE9BQU8sQ0FBQ29GLE9BQU8sQ0FBQyxTQUFTLENBQUM7TUFDMUMsSUFBSUMsT0FBTyxJQUFJQSxPQUFPLENBQUNDLFVBQVUsS0FBS0gsYUFBYSxFQUFFO1FBQ25ELE9BQU8sS0FBSztNQUNkO01BQ0EsSUFBSUUsT0FBTyxLQUFLLElBQUksRUFBRTtRQUNwQixPQUFPLEtBQUs7TUFDZDtJQUNGO0lBQ0EsT0FBT0osZ0JBQWdCO0VBQ3pCLENBQUM7RUFDRCxJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBR3ZGLE9BQU8sRUFBSTtJQUM1QixJQUFJLENBQUNBLE9BQU8sSUFBSUEsT0FBTyxDQUFDNEUsUUFBUSxLQUFLWSxJQUFJLENBQUNDLFlBQVksRUFBRTtNQUN0RCxPQUFPLElBQUk7SUFDYjtJQUNBLElBQUl6RixPQUFPLENBQUMwRixTQUFTLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUMxQyxPQUFPLElBQUk7SUFDYjtJQUNBLElBQUksT0FBTzNGLE9BQU8sQ0FBQzRGLFFBQVEsS0FBSyxXQUFXLEVBQUU7TUFDM0MsT0FBTzVGLE9BQU8sQ0FBQzRGLFFBQVE7SUFDekI7SUFDQSxPQUFPNUYsT0FBTyxDQUFDNkYsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJN0YsT0FBTyxDQUFDOEYsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLE9BQU87RUFDekYsQ0FBQztFQUNELElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBRy9GLE9BQU8sRUFBSTtJQUNoQyxJQUFJLENBQUNRLFFBQVEsQ0FBQ3dGLGVBQWUsQ0FBQ0MsWUFBWSxFQUFFO01BQzFDLE9BQU8sSUFBSTtJQUNiOztJQUVBO0lBQ0EsSUFBSSxPQUFPakcsT0FBTyxDQUFDa0csV0FBVyxLQUFLLFVBQVUsRUFBRTtNQUM3QyxJQUFNQyxJQUFJLEdBQUduRyxPQUFPLENBQUNrRyxXQUFXLEVBQUU7TUFDbEMsT0FBT0MsSUFBSSxZQUFZQyxVQUFVLEdBQUdELElBQUksR0FBRyxJQUFJO0lBQ2pEO0lBQ0EsSUFBSW5HLE9BQU8sWUFBWW9HLFVBQVUsRUFBRTtNQUNqQyxPQUFPcEcsT0FBTztJQUNoQjs7SUFFQTtJQUNBLElBQUksQ0FBQ0EsT0FBTyxDQUFDc0YsVUFBVSxFQUFFO01BQ3ZCLE9BQU8sSUFBSTtJQUNiO0lBQ0EsT0FBT1MsY0FBYyxDQUFDL0YsT0FBTyxDQUFDc0YsVUFBVSxDQUFDO0VBQzNDLENBQUM7RUFDRCxJQUFNZSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTLENBQUMsQ0FBQzs7RUFFckI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFHdEcsT0FBTyxFQUFJO0lBQ3hCQSxPQUFPLENBQUN1RyxZQUFZLENBQUMsQ0FBQztFQUN4QixDQUFDOztFQUVELElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQVM7SUFDdEIsSUFBSS9ELE1BQU0sQ0FBQ2dFLE1BQU0sSUFBSSxDQUFDakcsUUFBUSxDQUFDa0csSUFBSSxDQUFDYixZQUFZLENBQUMsbUJBQW1CLENBQUMsRUFBRTtNQUNyRSxPQUFPcEQsTUFBTSxDQUFDZ0UsTUFBTTtJQUN0QjtJQUNBLE9BQU8sSUFBSTtFQUNiLENBQUM7RUFDRCxJQUFNRSx5QkFBeUIsR0FBRyxFQUFFO0VBQ3BDLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUdDLFFBQVEsRUFBSTtJQUNyQyxJQUFJckcsUUFBUSxDQUFDc0csVUFBVSxLQUFLLFNBQVMsRUFBRTtNQUNyQztNQUNBLElBQUksQ0FBQ0gseUJBQXlCLENBQUM3RixNQUFNLEVBQUU7UUFDckNOLFFBQVEsQ0FBQ3VHLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07VUFDbEQsU0FBQUMsR0FBQSxNQUFBQyxxQkFBQSxHQUF1Qk4seUJBQXlCLEVBQUFLLEdBQUEsR0FBQUMscUJBQUEsQ0FBQW5HLE1BQUEsRUFBQWtHLEdBQUEsSUFBRTtZQUE3QyxJQUFNSCxTQUFRLEdBQUFJLHFCQUFBLENBQUFELEdBQUE7WUFDakJILFNBQVEsRUFBRTtVQUNaO1FBQ0YsQ0FBQyxDQUFDO01BQ0o7TUFDQUYseUJBQXlCLENBQUNPLElBQUksQ0FBQ0wsUUFBUSxDQUFDO0lBQzFDLENBQUMsTUFBTTtNQUNMQSxRQUFRLEVBQUU7SUFDWjtFQUNGLENBQUM7RUFDRCxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQTtJQUFBLE9BQVMzRyxRQUFRLENBQUN3RixlQUFlLENBQUNvQixHQUFHLEtBQUssS0FBSztFQUFBO0VBQzFELElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUdDLE1BQU0sRUFBSTtJQUNuQ1Ysa0JBQWtCLENBQUMsWUFBTTtNQUN2QixJQUFNVyxDQUFDLEdBQUdmLFNBQVMsRUFBRTtNQUNyQjtNQUNBLElBQUllLENBQUMsRUFBRTtRQUNMLElBQU1DLElBQUksR0FBR0YsTUFBTSxDQUFDRyxJQUFJO1FBQ3hCLElBQU1DLGtCQUFrQixHQUFHSCxDQUFDLENBQUNJLEVBQUUsQ0FBQ0gsSUFBSSxDQUFDO1FBQ3JDRCxDQUFDLENBQUNJLEVBQUUsQ0FBQ0gsSUFBSSxDQUFDLEdBQUdGLE1BQU0sQ0FBQ00sZUFBZTtRQUNuQ0wsQ0FBQyxDQUFDSSxFQUFFLENBQUNILElBQUksQ0FBQyxDQUFDSyxXQUFXLEdBQUdQLE1BQU07UUFDL0JDLENBQUMsQ0FBQ0ksRUFBRSxDQUFDSCxJQUFJLENBQUMsQ0FBQ00sVUFBVSxHQUFHLFlBQU07VUFDNUJQLENBQUMsQ0FBQ0ksRUFBRSxDQUFDSCxJQUFJLENBQUMsR0FBR0Usa0JBQWtCO1VBQy9CLE9BQU9KLE1BQU0sQ0FBQ00sZUFBZTtRQUMvQixDQUFDO01BQ0g7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0QsSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlDLGdCQUFnQixFQUFpRDtJQUFBLElBQS9DQyxJQUFJLEdBQUF0SSxTQUFBLENBQUFtQixNQUFBLFFBQUFuQixTQUFBLFFBQUFzRCxTQUFBLEdBQUF0RCxTQUFBLE1BQUcsRUFBRTtJQUFBLElBQUV1SSxZQUFZLEdBQUF2SSxTQUFBLENBQUFtQixNQUFBLFFBQUFuQixTQUFBLFFBQUFzRCxTQUFBLEdBQUF0RCxTQUFBLE1BQUdxSSxnQkFBZ0I7SUFDM0UsT0FBTyxPQUFPQSxnQkFBZ0IsS0FBSyxVQUFVLEdBQUdBLGdCQUFnQixDQUFBdEksS0FBQSxTQUFBeUksa0JBQUEsQ0FBSUYsSUFBSSxFQUFDLEdBQUdDLFlBQVk7RUFDMUYsQ0FBQztFQUNELElBQU1FLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUl2QixRQUFRLEVBQUV3QixpQkFBaUIsRUFBK0I7SUFBQSxJQUE3QkMsaUJBQWlCLEdBQUEzSSxTQUFBLENBQUFtQixNQUFBLFFBQUFuQixTQUFBLFFBQUFzRCxTQUFBLEdBQUF0RCxTQUFBLE1BQUcsSUFBSTtJQUNuRixJQUFJLENBQUMySSxpQkFBaUIsRUFBRTtNQUN0QlAsT0FBTyxDQUFDbEIsUUFBUSxDQUFDO01BQ2pCO0lBQ0Y7SUFDQSxJQUFNMEIsZUFBZSxHQUFHLENBQUM7SUFDekIsSUFBTUMsZ0JBQWdCLEdBQUczRSxnQ0FBZ0MsQ0FBQ3dFLGlCQUFpQixDQUFDLEdBQUdFLGVBQWU7SUFDOUYsSUFBSUUsTUFBTSxHQUFHLEtBQUs7SUFDbEIsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUFDLEtBQUEsRUFFUDtNQUFBLElBREpDLE1BQU0sR0FBQUQsS0FBQSxDQUFOQyxNQUFNO01BRU4sSUFBSUEsTUFBTSxLQUFLUCxpQkFBaUIsRUFBRTtRQUNoQztNQUNGO01BQ0FJLE1BQU0sR0FBRyxJQUFJO01BQ2JKLGlCQUFpQixDQUFDUSxtQkFBbUIsQ0FBQ3ZHLGNBQWMsRUFBRW9HLE9BQU8sQ0FBQztNQUM5RFgsT0FBTyxDQUFDbEIsUUFBUSxDQUFDO0lBQ25CLENBQUM7SUFDRHdCLGlCQUFpQixDQUFDdEIsZ0JBQWdCLENBQUN6RSxjQUFjLEVBQUVvRyxPQUFPLENBQUM7SUFDM0RJLFVBQVUsQ0FBQyxZQUFNO01BQ2YsSUFBSSxDQUFDTCxNQUFNLEVBQUU7UUFDWGxFLG9CQUFvQixDQUFDOEQsaUJBQWlCLENBQUM7TUFDekM7SUFDRixDQUFDLEVBQUVHLGdCQUFnQixDQUFDO0VBQ3RCLENBQUM7O0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsSUFBTU8sb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBSUMsSUFBSSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFLO0lBQ25GLElBQU1DLFVBQVUsR0FBR0osSUFBSSxDQUFDbEksTUFBTTtJQUM5QixJQUFJdUksS0FBSyxHQUFHTCxJQUFJLENBQUNNLE9BQU8sQ0FBQ0wsYUFBYSxDQUFDOztJQUV2QztJQUNBO0lBQ0EsSUFBSUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO01BQ2hCLE9BQU8sQ0FBQ0gsYUFBYSxJQUFJQyxjQUFjLEdBQUdILElBQUksQ0FBQ0ksVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHSixJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFFO0lBQ0FLLEtBQUssSUFBSUgsYUFBYSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsSUFBSUMsY0FBYyxFQUFFO01BQ2xCRSxLQUFLLEdBQUcsQ0FBQ0EsS0FBSyxHQUFHRCxVQUFVLElBQUlBLFVBQVU7SUFDM0M7SUFDQSxPQUFPSixJQUFJLENBQUN2RixJQUFJLENBQUM4RixHQUFHLENBQUMsQ0FBQyxFQUFFOUYsSUFBSSxDQUFDK0YsR0FBRyxDQUFDSCxLQUFLLEVBQUVELFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzNELENBQUM7O0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRSxJQUFNSyxjQUFjLEdBQUcsb0JBQW9CO0VBQzNDLElBQU1DLGNBQWMsR0FBRyxNQUFNO0VBQzdCLElBQU1DLGFBQWEsR0FBRyxRQUFRO0VBQzlCLElBQU1DLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzFCLElBQUlDLFFBQVEsR0FBRyxDQUFDO0VBQ2hCLElBQU1DLFlBQVksR0FBRztJQUNuQkMsVUFBVSxFQUFFLFdBQVc7SUFDdkJDLFVBQVUsRUFBRTtFQUNkLENBQUM7RUFDRCxJQUFNQyxZQUFZLEdBQUcsSUFBSUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzs7RUFFem1CO0FBQ0Y7QUFDQTs7RUFFRSxTQUFTQyxZQUFZQSxDQUFDbkssT0FBTyxFQUFFb0ssR0FBRyxFQUFFO0lBQ2xDLE9BQU9BLEdBQUcsT0FBQTdJLE1BQUEsQ0FBTzZJLEdBQUcsUUFBQTdJLE1BQUEsQ0FBS3NJLFFBQVEsRUFBRSxDQUFFLElBQUk3SixPQUFPLENBQUM2SixRQUFRLElBQUlBLFFBQVEsRUFBRTtFQUN6RTtFQUNBLFNBQVNRLGdCQUFnQkEsQ0FBQ3JLLE9BQU8sRUFBRTtJQUNqQyxJQUFNb0ssR0FBRyxHQUFHRCxZQUFZLENBQUNuSyxPQUFPLENBQUM7SUFDakNBLE9BQU8sQ0FBQzZKLFFBQVEsR0FBR08sR0FBRztJQUN0QlIsYUFBYSxDQUFDUSxHQUFHLENBQUMsR0FBR1IsYUFBYSxDQUFDUSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsT0FBT1IsYUFBYSxDQUFDUSxHQUFHLENBQUM7RUFDM0I7RUFDQSxTQUFTRSxnQkFBZ0JBLENBQUN0SyxPQUFPLEVBQUUySCxFQUFFLEVBQUU7SUFDckMsT0FBTyxTQUFTZSxPQUFPQSxDQUFDNkIsS0FBSyxFQUFFO01BQzdCQyxVQUFVLENBQUNELEtBQUssRUFBRTtRQUNoQkUsY0FBYyxFQUFFeks7TUFDbEIsQ0FBQyxDQUFDO01BQ0YsSUFBSTBJLE9BQU8sQ0FBQ2dDLE1BQU0sRUFBRTtRQUNsQkMsWUFBWSxDQUFDQyxHQUFHLENBQUM1SyxPQUFPLEVBQUV1SyxLQUFLLENBQUNNLElBQUksRUFBRWxELEVBQUUsQ0FBQztNQUMzQztNQUNBLE9BQU9BLEVBQUUsQ0FBQ2pJLEtBQUssQ0FBQ00sT0FBTyxFQUFFLENBQUN1SyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0VBQ0g7RUFDQSxTQUFTTywwQkFBMEJBLENBQUM5SyxPQUFPLEVBQUV3QyxRQUFRLEVBQUVtRixFQUFFLEVBQUU7SUFDekQsT0FBTyxTQUFTZSxPQUFPQSxDQUFDNkIsS0FBSyxFQUFFO01BQzdCLElBQU1RLFdBQVcsR0FBRy9LLE9BQU8sQ0FBQ1MsZ0JBQWdCLENBQUMrQixRQUFRLENBQUM7TUFDdEQsS0FBSyxJQUNIb0csTUFBTSxHQUNKMkIsS0FBSyxDQURQM0IsTUFDTyxFQUFFQSxNQUFNLElBQUlBLE1BQU0sS0FBSyxJQUFJLEVBQUVBLE1BQU0sR0FBR0EsTUFBTSxDQUFDdEQsVUFBVSxFQUFFO1FBQUEsSUFBQTBGLFNBQUEsR0FBQUMsMEJBQUEsQ0FDdkNGLFdBQVc7VUFBQUcsS0FBQTtRQUFBO1VBQXBDLEtBQUFGLFNBQUEsQ0FBQUcsQ0FBQSxNQUFBRCxLQUFBLEdBQUFGLFNBQUEsQ0FBQUksQ0FBQSxJQUFBQyxJQUFBLEdBQXNDO1lBQUEsSUFBM0JDLFVBQVUsR0FBQUosS0FBQSxDQUFBcEwsS0FBQTtZQUNuQixJQUFJd0wsVUFBVSxLQUFLMUMsTUFBTSxFQUFFO2NBQ3pCO1lBQ0Y7WUFDQTRCLFVBQVUsQ0FBQ0QsS0FBSyxFQUFFO2NBQ2hCRSxjQUFjLEVBQUU3QjtZQUNsQixDQUFDLENBQUM7WUFDRixJQUFJRixPQUFPLENBQUNnQyxNQUFNLEVBQUU7Y0FDbEJDLFlBQVksQ0FBQ0MsR0FBRyxDQUFDNUssT0FBTyxFQUFFdUssS0FBSyxDQUFDTSxJQUFJLEVBQUVySSxRQUFRLEVBQUVtRixFQUFFLENBQUM7WUFDckQ7WUFDQSxPQUFPQSxFQUFFLENBQUNqSSxLQUFLLENBQUNrSixNQUFNLEVBQUUsQ0FBQzJCLEtBQUssQ0FBQyxDQUFDO1VBQ2xDO1FBQUMsU0FBQWdCLEdBQUE7VUFBQVAsU0FBQSxDQUFBUSxDQUFBLENBQUFELEdBQUE7UUFBQTtVQUFBUCxTQUFBLENBQUFTLENBQUE7UUFBQTtNQUNIO0lBQ0YsQ0FBQztFQUNIO0VBQ0EsU0FBU0MsV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFQyxRQUFRLEVBQTZCO0lBQUEsSUFBM0JDLGtCQUFrQixHQUFBbE0sU0FBQSxDQUFBbUIsTUFBQSxRQUFBbkIsU0FBQSxRQUFBc0QsU0FBQSxHQUFBdEQsU0FBQSxNQUFHLElBQUk7SUFDOUQsT0FBT3VELE1BQU0sQ0FBQzRJLE1BQU0sQ0FBQ0gsTUFBTSxDQUFDLENBQUNJLElBQUksQ0FBQyxVQUFBeEIsS0FBSztNQUFBLE9BQUlBLEtBQUssQ0FBQ3FCLFFBQVEsS0FBS0EsUUFBUSxJQUFJckIsS0FBSyxDQUFDc0Isa0JBQWtCLEtBQUtBLGtCQUFrQjtJQUFBLEVBQUM7RUFDNUg7RUFDQSxTQUFTRyxtQkFBbUJBLENBQUNDLGlCQUFpQixFQUFFdkQsT0FBTyxFQUFFd0Qsa0JBQWtCLEVBQUU7SUFDM0UsSUFBTUMsV0FBVyxHQUFHLE9BQU96RCxPQUFPLEtBQUssUUFBUTtJQUMvQztJQUNBLElBQU1rRCxRQUFRLEdBQUdPLFdBQVcsR0FBR0Qsa0JBQWtCLEdBQUd4RCxPQUFPLElBQUl3RCxrQkFBa0I7SUFDakYsSUFBSUUsU0FBUyxHQUFHQyxZQUFZLENBQUNKLGlCQUFpQixDQUFDO0lBQy9DLElBQUksQ0FBQ2hDLFlBQVksQ0FBQ3FDLEdBQUcsQ0FBQ0YsU0FBUyxDQUFDLEVBQUU7TUFDaENBLFNBQVMsR0FBR0gsaUJBQWlCO0lBQy9CO0lBQ0EsT0FBTyxDQUFDRSxXQUFXLEVBQUVQLFFBQVEsRUFBRVEsU0FBUyxDQUFDO0VBQzNDO0VBQ0EsU0FBU0csVUFBVUEsQ0FBQ3ZNLE9BQU8sRUFBRWlNLGlCQUFpQixFQUFFdkQsT0FBTyxFQUFFd0Qsa0JBQWtCLEVBQUV4QixNQUFNLEVBQUU7SUFDbkYsSUFBSSxPQUFPdUIsaUJBQWlCLEtBQUssUUFBUSxJQUFJLENBQUNqTSxPQUFPLEVBQUU7TUFDckQ7SUFDRjtJQUNBLElBQUF3TSxvQkFBQSxHQUF5Q1IsbUJBQW1CLENBQUNDLGlCQUFpQixFQUFFdkQsT0FBTyxFQUFFd0Qsa0JBQWtCLENBQUM7TUFBQU8scUJBQUEsR0FBQUMsY0FBQSxDQUFBRixvQkFBQTtNQUF2R0wsV0FBVyxHQUFBTSxxQkFBQTtNQUFFYixRQUFRLEdBQUFhLHFCQUFBO01BQUVMLFNBQVMsR0FBQUsscUJBQUE7O0lBRXJDO0lBQ0E7SUFDQSxJQUFJUixpQkFBaUIsSUFBSW5DLFlBQVksRUFBRTtNQUNyQyxJQUFNNkMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUdoRixFQUFFLEVBQUk7UUFDekIsT0FBTyxVQUFVNEMsS0FBSyxFQUFFO1VBQ3RCLElBQUksQ0FBQ0EsS0FBSyxDQUFDcUMsYUFBYSxJQUFJckMsS0FBSyxDQUFDcUMsYUFBYSxLQUFLckMsS0FBSyxDQUFDRSxjQUFjLElBQUksQ0FBQ0YsS0FBSyxDQUFDRSxjQUFjLENBQUM5RSxRQUFRLENBQUM0RSxLQUFLLENBQUNxQyxhQUFhLENBQUMsRUFBRTtZQUMvSCxPQUFPakYsRUFBRSxDQUFDdEUsSUFBSSxDQUFDLElBQUksRUFBRWtILEtBQUssQ0FBQztVQUM3QjtRQUNGLENBQUM7TUFDSCxDQUFDO01BQ0RxQixRQUFRLEdBQUdlLFlBQVksQ0FBQ2YsUUFBUSxDQUFDO0lBQ25DO0lBQ0EsSUFBTUQsTUFBTSxHQUFHdEIsZ0JBQWdCLENBQUNySyxPQUFPLENBQUM7SUFDeEMsSUFBTTZNLFFBQVEsR0FBR2xCLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDLEtBQUtULE1BQU0sQ0FBQ1MsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsSUFBTVUsZ0JBQWdCLEdBQUdwQixXQUFXLENBQUNtQixRQUFRLEVBQUVqQixRQUFRLEVBQUVPLFdBQVcsR0FBR3pELE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEYsSUFBSW9FLGdCQUFnQixFQUFFO01BQ3BCQSxnQkFBZ0IsQ0FBQ3BDLE1BQU0sR0FBR29DLGdCQUFnQixDQUFDcEMsTUFBTSxJQUFJQSxNQUFNO01BQzNEO0lBQ0Y7SUFDQSxJQUFNTixHQUFHLEdBQUdELFlBQVksQ0FBQ3lCLFFBQVEsRUFBRUssaUJBQWlCLENBQUNySixPQUFPLENBQUM2RyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakYsSUFBTTlCLEVBQUUsR0FBR3dFLFdBQVcsR0FBR3JCLDBCQUEwQixDQUFDOUssT0FBTyxFQUFFMEksT0FBTyxFQUFFa0QsUUFBUSxDQUFDLEdBQUd0QixnQkFBZ0IsQ0FBQ3RLLE9BQU8sRUFBRTRMLFFBQVEsQ0FBQztJQUNySGpFLEVBQUUsQ0FBQ2tFLGtCQUFrQixHQUFHTSxXQUFXLEdBQUd6RCxPQUFPLEdBQUcsSUFBSTtJQUNwRGYsRUFBRSxDQUFDaUUsUUFBUSxHQUFHQSxRQUFRO0lBQ3RCakUsRUFBRSxDQUFDK0MsTUFBTSxHQUFHQSxNQUFNO0lBQ2xCL0MsRUFBRSxDQUFDa0MsUUFBUSxHQUFHTyxHQUFHO0lBQ2pCeUMsUUFBUSxDQUFDekMsR0FBRyxDQUFDLEdBQUd6QyxFQUFFO0lBQ2xCM0gsT0FBTyxDQUFDK0csZ0JBQWdCLENBQUNxRixTQUFTLEVBQUV6RSxFQUFFLEVBQUV3RSxXQUFXLENBQUM7RUFDdEQ7RUFDQSxTQUFTWSxhQUFhQSxDQUFDL00sT0FBTyxFQUFFMkwsTUFBTSxFQUFFUyxTQUFTLEVBQUUxRCxPQUFPLEVBQUVtRCxrQkFBa0IsRUFBRTtJQUM5RSxJQUFNbEUsRUFBRSxHQUFHK0QsV0FBVyxDQUFDQyxNQUFNLENBQUNTLFNBQVMsQ0FBQyxFQUFFMUQsT0FBTyxFQUFFbUQsa0JBQWtCLENBQUM7SUFDdEUsSUFBSSxDQUFDbEUsRUFBRSxFQUFFO01BQ1A7SUFDRjtJQUNBM0gsT0FBTyxDQUFDNkksbUJBQW1CLENBQUN1RCxTQUFTLEVBQUV6RSxFQUFFLEVBQUVxRixPQUFPLENBQUNuQixrQkFBa0IsQ0FBQyxDQUFDO0lBQ3ZFLE9BQU9GLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDLENBQUN6RSxFQUFFLENBQUNrQyxRQUFRLENBQUM7RUFDdkM7RUFDQSxTQUFTb0Qsd0JBQXdCQSxDQUFDak4sT0FBTyxFQUFFMkwsTUFBTSxFQUFFUyxTQUFTLEVBQUVjLFNBQVMsRUFBRTtJQUN2RSxJQUFNQyxpQkFBaUIsR0FBR3hCLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELFNBQUFnQixHQUFBLE1BQUFDLGVBQUEsR0FBa0NuSyxNQUFNLENBQUNvSyxPQUFPLENBQUNILGlCQUFpQixDQUFDLEVBQUFDLEdBQUEsR0FBQUMsZUFBQSxDQUFBdk0sTUFBQSxFQUFBc00sR0FBQSxJQUFFO01BQWhFLElBQUFHLGtCQUFBLEdBQUFiLGNBQUEsQ0FBQVcsZUFBQSxDQUFBRCxHQUFBO1FBQU9JLFVBQVUsR0FBQUQsa0JBQUE7UUFBRWhELEtBQUssR0FBQWdELGtCQUFBO01BQzNCLElBQUlDLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDUCxTQUFTLENBQUMsRUFBRTtRQUNsQ0gsYUFBYSxDQUFDL00sT0FBTyxFQUFFMkwsTUFBTSxFQUFFUyxTQUFTLEVBQUU3QixLQUFLLENBQUNxQixRQUFRLEVBQUVyQixLQUFLLENBQUNzQixrQkFBa0IsQ0FBQztNQUNyRjtJQUNGO0VBQ0Y7RUFDQSxTQUFTUSxZQUFZQSxDQUFDOUIsS0FBSyxFQUFFO0lBQzNCO0lBQ0FBLEtBQUssR0FBR0EsS0FBSyxDQUFDM0gsT0FBTyxDQUFDOEcsY0FBYyxFQUFFLEVBQUUsQ0FBQztJQUN6QyxPQUFPSSxZQUFZLENBQUNTLEtBQUssQ0FBQyxJQUFJQSxLQUFLO0VBQ3JDO0VBQ0EsSUFBTUksWUFBWSxHQUFHO0lBQ25CK0MsRUFBRSxXQUFBQSxHQUFDMU4sT0FBTyxFQUFFdUssS0FBSyxFQUFFN0IsT0FBTyxFQUFFd0Qsa0JBQWtCLEVBQUU7TUFDOUNLLFVBQVUsQ0FBQ3ZNLE9BQU8sRUFBRXVLLEtBQUssRUFBRTdCLE9BQU8sRUFBRXdELGtCQUFrQixFQUFFLEtBQUssQ0FBQztJQUNoRSxDQUFDO0lBQ0R5QixHQUFHLFdBQUFBLElBQUMzTixPQUFPLEVBQUV1SyxLQUFLLEVBQUU3QixPQUFPLEVBQUV3RCxrQkFBa0IsRUFBRTtNQUMvQ0ssVUFBVSxDQUFDdk0sT0FBTyxFQUFFdUssS0FBSyxFQUFFN0IsT0FBTyxFQUFFd0Qsa0JBQWtCLEVBQUUsSUFBSSxDQUFDO0lBQy9ELENBQUM7SUFDRHRCLEdBQUcsV0FBQUEsSUFBQzVLLE9BQU8sRUFBRWlNLGlCQUFpQixFQUFFdkQsT0FBTyxFQUFFd0Qsa0JBQWtCLEVBQUU7TUFDM0QsSUFBSSxPQUFPRCxpQkFBaUIsS0FBSyxRQUFRLElBQUksQ0FBQ2pNLE9BQU8sRUFBRTtRQUNyRDtNQUNGO01BQ0EsSUFBQTROLHFCQUFBLEdBQTJDNUIsbUJBQW1CLENBQUNDLGlCQUFpQixFQUFFdkQsT0FBTyxFQUFFd0Qsa0JBQWtCLENBQUM7UUFBQTJCLHFCQUFBLEdBQUFuQixjQUFBLENBQUFrQixxQkFBQTtRQUF2R3pCLFdBQVcsR0FBQTBCLHFCQUFBO1FBQUVqQyxRQUFRLEdBQUFpQyxxQkFBQTtRQUFFekIsU0FBUyxHQUFBeUIscUJBQUE7TUFDdkMsSUFBTUMsV0FBVyxHQUFHMUIsU0FBUyxLQUFLSCxpQkFBaUI7TUFDbkQsSUFBTU4sTUFBTSxHQUFHdEIsZ0JBQWdCLENBQUNySyxPQUFPLENBQUM7TUFDeEMsSUFBTW1OLGlCQUFpQixHQUFHeEIsTUFBTSxDQUFDUyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDakQsSUFBTTJCLFdBQVcsR0FBRzlCLGlCQUFpQixDQUFDK0IsVUFBVSxDQUFDLEdBQUcsQ0FBQztNQUNyRCxJQUFJLE9BQU9wQyxRQUFRLEtBQUssV0FBVyxFQUFFO1FBQ25DO1FBQ0EsSUFBSSxDQUFDMUksTUFBTSxDQUFDK0ssSUFBSSxDQUFDZCxpQkFBaUIsQ0FBQyxDQUFDck0sTUFBTSxFQUFFO1VBQzFDO1FBQ0Y7UUFDQWlNLGFBQWEsQ0FBQy9NLE9BQU8sRUFBRTJMLE1BQU0sRUFBRVMsU0FBUyxFQUFFUixRQUFRLEVBQUVPLFdBQVcsR0FBR3pELE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakY7TUFDRjtNQUNBLElBQUlxRixXQUFXLEVBQUU7UUFDZixTQUFBRyxHQUFBLE1BQUFDLFlBQUEsR0FBMkJqTCxNQUFNLENBQUMrSyxJQUFJLENBQUN0QyxNQUFNLENBQUMsRUFBQXVDLEdBQUEsR0FBQUMsWUFBQSxDQUFBck4sTUFBQSxFQUFBb04sR0FBQSxJQUFFO1VBQTNDLElBQU1FLFlBQVksR0FBQUQsWUFBQSxDQUFBRCxHQUFBO1VBQ3JCakIsd0JBQXdCLENBQUNqTixPQUFPLEVBQUUyTCxNQUFNLEVBQUV5QyxZQUFZLEVBQUVuQyxpQkFBaUIsQ0FBQ29DLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRjtNQUNGO01BQ0EsU0FBQUMsR0FBQSxNQUFBQyxnQkFBQSxHQUFtQ3JMLE1BQU0sQ0FBQ29LLE9BQU8sQ0FBQ0gsaUJBQWlCLENBQUMsRUFBQW1CLEdBQUEsR0FBQUMsZ0JBQUEsQ0FBQXpOLE1BQUEsRUFBQXdOLEdBQUEsSUFBRTtRQUFqRSxJQUFBRSxtQkFBQSxHQUFBOUIsY0FBQSxDQUFBNkIsZ0JBQUEsQ0FBQUQsR0FBQTtVQUFPRyxXQUFXLEdBQUFELG1CQUFBO1VBQUVqRSxLQUFLLEdBQUFpRSxtQkFBQTtRQUM1QixJQUFNaEIsVUFBVSxHQUFHaUIsV0FBVyxDQUFDN0wsT0FBTyxDQUFDK0csYUFBYSxFQUFFLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUNtRSxXQUFXLElBQUk3QixpQkFBaUIsQ0FBQ3dCLFFBQVEsQ0FBQ0QsVUFBVSxDQUFDLEVBQUU7VUFDMURULGFBQWEsQ0FBQy9NLE9BQU8sRUFBRTJMLE1BQU0sRUFBRVMsU0FBUyxFQUFFN0IsS0FBSyxDQUFDcUIsUUFBUSxFQUFFckIsS0FBSyxDQUFDc0Isa0JBQWtCLENBQUM7UUFDckY7TUFDRjtJQUNGLENBQUM7SUFDRDZDLE9BQU8sV0FBQUEsUUFBQzFPLE9BQU8sRUFBRXVLLEtBQUssRUFBRXRDLElBQUksRUFBRTtNQUM1QixJQUFJLE9BQU9zQyxLQUFLLEtBQUssUUFBUSxJQUFJLENBQUN2SyxPQUFPLEVBQUU7UUFDekMsT0FBTyxJQUFJO01BQ2I7TUFDQSxJQUFNdUgsQ0FBQyxHQUFHZixTQUFTLEVBQUU7TUFDckIsSUFBTTRGLFNBQVMsR0FBR0MsWUFBWSxDQUFDOUIsS0FBSyxDQUFDO01BQ3JDLElBQU11RCxXQUFXLEdBQUd2RCxLQUFLLEtBQUs2QixTQUFTO01BQ3ZDLElBQUl1QyxXQUFXLEdBQUcsSUFBSTtNQUN0QixJQUFJQyxPQUFPLEdBQUcsSUFBSTtNQUNsQixJQUFJQyxjQUFjLEdBQUcsSUFBSTtNQUN6QixJQUFJQyxnQkFBZ0IsR0FBRyxLQUFLO01BQzVCLElBQUloQixXQUFXLElBQUl2RyxDQUFDLEVBQUU7UUFDcEJvSCxXQUFXLEdBQUdwSCxDQUFDLENBQUM5QyxLQUFLLENBQUM4RixLQUFLLEVBQUV0QyxJQUFJLENBQUM7UUFDbENWLENBQUMsQ0FBQ3ZILE9BQU8sQ0FBQyxDQUFDME8sT0FBTyxDQUFDQyxXQUFXLENBQUM7UUFDL0JDLE9BQU8sR0FBRyxDQUFDRCxXQUFXLENBQUNJLG9CQUFvQixFQUFFO1FBQzdDRixjQUFjLEdBQUcsQ0FBQ0YsV0FBVyxDQUFDSyw2QkFBNkIsRUFBRTtRQUM3REYsZ0JBQWdCLEdBQUdILFdBQVcsQ0FBQ00sa0JBQWtCLEVBQUU7TUFDckQ7TUFDQSxJQUFJQyxHQUFHLEdBQUcsSUFBSXpLLEtBQUssQ0FBQzhGLEtBQUssRUFBRTtRQUN6QnFFLE9BQU8sRUFBUEEsT0FBTztRQUNQTyxVQUFVLEVBQUU7TUFDZCxDQUFDLENBQUM7TUFDRkQsR0FBRyxHQUFHMUUsVUFBVSxDQUFDMEUsR0FBRyxFQUFFakgsSUFBSSxDQUFDO01BQzNCLElBQUk2RyxnQkFBZ0IsRUFBRTtRQUNwQkksR0FBRyxDQUFDRSxjQUFjLEVBQUU7TUFDdEI7TUFDQSxJQUFJUCxjQUFjLEVBQUU7UUFDbEI3TyxPQUFPLENBQUN3RSxhQUFhLENBQUMwSyxHQUFHLENBQUM7TUFDNUI7TUFDQSxJQUFJQSxHQUFHLENBQUNKLGdCQUFnQixJQUFJSCxXQUFXLEVBQUU7UUFDdkNBLFdBQVcsQ0FBQ1MsY0FBYyxFQUFFO01BQzlCO01BQ0EsT0FBT0YsR0FBRztJQUNaO0VBQ0YsQ0FBQztFQUNELFNBQVMxRSxVQUFVQSxDQUFDNkUsR0FBRyxFQUFhO0lBQUEsSUFBWEMsSUFBSSxHQUFBM1AsU0FBQSxDQUFBbUIsTUFBQSxRQUFBbkIsU0FBQSxRQUFBc0QsU0FBQSxHQUFBdEQsU0FBQSxNQUFHLENBQUMsQ0FBQztJQUFBLElBQUE0UCxNQUFBLFlBQUFBLE9BQUEsRUFDaUI7TUFBNUMsSUFBQUMsbUJBQUEsR0FBQTlDLGNBQUEsQ0FBQStDLGdCQUFBLENBQUFDLEdBQUE7UUFBTzdQLEdBQUcsR0FBQTJQLG1CQUFBO1FBQUUxUCxLQUFLLEdBQUEwUCxtQkFBQTtNQUNwQixJQUFJO1FBQ0ZILEdBQUcsQ0FBQ3hQLEdBQUcsQ0FBQyxHQUFHQyxLQUFLO01BQ2xCLENBQUMsQ0FBQyxPQUFPNlAsT0FBTyxFQUFFO1FBQ2hCek0sTUFBTSxDQUFDME0sY0FBYyxDQUFDUCxHQUFHLEVBQUV4UCxHQUFHLEVBQUU7VUFDOUJnUSxZQUFZLEVBQUUsSUFBSTtVQUNsQkMsR0FBRyxXQUFBQSxJQUFBLEVBQUc7WUFDSixPQUFPaFEsS0FBSztVQUNkO1FBQ0YsQ0FBQyxDQUFDO01BQ0o7SUFDRixDQUFDO0lBWEQsU0FBQTRQLEdBQUEsTUFBQUQsZ0JBQUEsR0FBMkJ2TSxNQUFNLENBQUNvSyxPQUFPLENBQUNnQyxJQUFJLENBQUMsRUFBQUksR0FBQSxHQUFBRCxnQkFBQSxDQUFBM08sTUFBQSxFQUFBNE8sR0FBQTtNQUFBSCxNQUFBO0lBQUE7SUFZL0MsT0FBT0YsR0FBRztFQUNaOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsSUFBTVUsVUFBVSxHQUFHLElBQUlDLEdBQUcsRUFBRTtFQUM1QixJQUFNQyxJQUFJLEdBQUc7SUFDWEMsR0FBRyxXQUFBQSxJQUFDbFEsT0FBTyxFQUFFSCxHQUFHLEVBQUVzUSxRQUFRLEVBQUU7TUFDMUIsSUFBSSxDQUFDSixVQUFVLENBQUN6RCxHQUFHLENBQUN0TSxPQUFPLENBQUMsRUFBRTtRQUM1QitQLFVBQVUsQ0FBQ0csR0FBRyxDQUFDbFEsT0FBTyxFQUFFLElBQUlnUSxHQUFHLEVBQUUsQ0FBQztNQUNwQztNQUNBLElBQU1JLFdBQVcsR0FBR0wsVUFBVSxDQUFDRCxHQUFHLENBQUM5UCxPQUFPLENBQUM7O01BRTNDO01BQ0E7TUFDQSxJQUFJLENBQUNvUSxXQUFXLENBQUM5RCxHQUFHLENBQUN6TSxHQUFHLENBQUMsSUFBSXVRLFdBQVcsQ0FBQ0MsSUFBSSxLQUFLLENBQUMsRUFBRTtRQUNuRDtRQUNBclAsT0FBTyxDQUFDc1AsS0FBSyxnRkFBQS9PLE1BQUEsQ0FBZ0ZnUCxLQUFLLENBQUNDLElBQUksQ0FBQ0osV0FBVyxDQUFDbkMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBSTtRQUNsSTtNQUNGO01BQ0FtQyxXQUFXLENBQUNGLEdBQUcsQ0FBQ3JRLEdBQUcsRUFBRXNRLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBQ0RMLEdBQUcsV0FBQUEsSUFBQzlQLE9BQU8sRUFBRUgsR0FBRyxFQUFFO01BQ2hCLElBQUlrUSxVQUFVLENBQUN6RCxHQUFHLENBQUN0TSxPQUFPLENBQUMsRUFBRTtRQUMzQixPQUFPK1AsVUFBVSxDQUFDRCxHQUFHLENBQUM5UCxPQUFPLENBQUMsQ0FBQzhQLEdBQUcsQ0FBQ2pRLEdBQUcsQ0FBQyxJQUFJLElBQUk7TUFDakQ7TUFDQSxPQUFPLElBQUk7SUFDYixDQUFDO0lBQ0Q0USxNQUFNLFdBQUFBLE9BQUN6USxPQUFPLEVBQUVILEdBQUcsRUFBRTtNQUNuQixJQUFJLENBQUNrUSxVQUFVLENBQUN6RCxHQUFHLENBQUN0TSxPQUFPLENBQUMsRUFBRTtRQUM1QjtNQUNGO01BQ0EsSUFBTW9RLFdBQVcsR0FBR0wsVUFBVSxDQUFDRCxHQUFHLENBQUM5UCxPQUFPLENBQUM7TUFDM0NvUSxXQUFXLFVBQU8sQ0FBQ3ZRLEdBQUcsQ0FBQzs7TUFFdkI7TUFDQSxJQUFJdVEsV0FBVyxDQUFDQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1FBQzFCTixVQUFVLFVBQU8sQ0FBQy9QLE9BQU8sQ0FBQztNQUM1QjtJQUNGO0VBQ0YsQ0FBQzs7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUUsU0FBUzBRLGFBQWFBLENBQUM1USxLQUFLLEVBQUU7SUFDNUIsSUFBSUEsS0FBSyxLQUFLLE1BQU0sRUFBRTtNQUNwQixPQUFPLElBQUk7SUFDYjtJQUNBLElBQUlBLEtBQUssS0FBSyxPQUFPLEVBQUU7TUFDckIsT0FBTyxLQUFLO0lBQ2Q7SUFDQSxJQUFJQSxLQUFLLEtBQUtxRSxNQUFNLENBQUNyRSxLQUFLLENBQUMsQ0FBQ3NELFFBQVEsRUFBRSxFQUFFO01BQ3RDLE9BQU9lLE1BQU0sQ0FBQ3JFLEtBQUssQ0FBQztJQUN0QjtJQUNBLElBQUlBLEtBQUssS0FBSyxFQUFFLElBQUlBLEtBQUssS0FBSyxNQUFNLEVBQUU7TUFDcEMsT0FBTyxJQUFJO0lBQ2I7SUFDQSxJQUFJLE9BQU9BLEtBQUssS0FBSyxRQUFRLEVBQUU7TUFDN0IsT0FBT0EsS0FBSztJQUNkO0lBQ0EsSUFBSTtNQUNGLE9BQU82USxJQUFJLENBQUNDLEtBQUssQ0FBQ0Msa0JBQWtCLENBQUMvUSxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUMsT0FBTzZQLE9BQU8sRUFBRTtNQUNoQixPQUFPN1AsS0FBSztJQUNkO0VBQ0Y7RUFDQSxTQUFTZ1IsZ0JBQWdCQSxDQUFDalIsR0FBRyxFQUFFO0lBQzdCLE9BQU9BLEdBQUcsQ0FBQytDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBQW1PLEdBQUc7TUFBQSxXQUFBeFAsTUFBQSxDQUFRd1AsR0FBRyxDQUFDek4sV0FBVyxFQUFFO0lBQUEsQ0FBRSxDQUFDO0VBQzlEO0VBQ0EsSUFBTTBOLFdBQVcsR0FBRztJQUNsQkMsZ0JBQWdCLFdBQUFBLGlCQUFDalIsT0FBTyxFQUFFSCxHQUFHLEVBQUVDLEtBQUssRUFBRTtNQUNwQ0UsT0FBTyxDQUFDa1IsWUFBWSxZQUFBM1AsTUFBQSxDQUFZdVAsZ0JBQWdCLENBQUNqUixHQUFHLENBQUMsR0FBSUMsS0FBSyxDQUFDO0lBQ2pFLENBQUM7SUFDRHFSLG1CQUFtQixXQUFBQSxvQkFBQ25SLE9BQU8sRUFBRUgsR0FBRyxFQUFFO01BQ2hDRyxPQUFPLENBQUNvUixlQUFlLFlBQUE3UCxNQUFBLENBQVl1UCxnQkFBZ0IsQ0FBQ2pSLEdBQUcsQ0FBQyxFQUFHO0lBQzdELENBQUM7SUFDRHdSLGlCQUFpQixXQUFBQSxrQkFBQ3JSLE9BQU8sRUFBRTtNQUN6QixJQUFJLENBQUNBLE9BQU8sRUFBRTtRQUNaLE9BQU8sQ0FBQyxDQUFDO01BQ1g7TUFDQSxJQUFNc1IsVUFBVSxHQUFHLENBQUMsQ0FBQztNQUNyQixJQUFNQyxNQUFNLEdBQUdyTyxNQUFNLENBQUMrSyxJQUFJLENBQUNqTyxPQUFPLENBQUN3UixPQUFPLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFVBQUE1UixHQUFHO1FBQUEsT0FBSUEsR0FBRyxDQUFDbU8sVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUNuTyxHQUFHLENBQUNtTyxVQUFVLENBQUMsVUFBVSxDQUFDO01BQUEsRUFBQztNQUFDLElBQUEwRCxVQUFBLEdBQUF6RywwQkFBQSxDQUM3RnNHLE1BQU07UUFBQUksTUFBQTtNQUFBO1FBQXhCLEtBQUFELFVBQUEsQ0FBQXZHLENBQUEsTUFBQXdHLE1BQUEsR0FBQUQsVUFBQSxDQUFBdEcsQ0FBQSxJQUFBQyxJQUFBLEdBQTBCO1VBQUEsSUFBZnhMLEdBQUcsR0FBQThSLE1BQUEsQ0FBQTdSLEtBQUE7VUFDWixJQUFJOFIsT0FBTyxHQUFHL1IsR0FBRyxDQUFDK0MsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7VUFDcENnUCxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDdk8sV0FBVyxFQUFFLEdBQUdzTyxPQUFPLENBQUN2RCxLQUFLLENBQUMsQ0FBQyxFQUFFdUQsT0FBTyxDQUFDOVEsTUFBTSxDQUFDO1VBQzVFd1EsVUFBVSxDQUFDTSxPQUFPLENBQUMsR0FBR2xCLGFBQWEsQ0FBQzFRLE9BQU8sQ0FBQ3dSLE9BQU8sQ0FBQzNSLEdBQUcsQ0FBQyxDQUFDO1FBQzNEO01BQUMsU0FBQTBMLEdBQUE7UUFBQW1HLFVBQUEsQ0FBQWxHLENBQUEsQ0FBQUQsR0FBQTtNQUFBO1FBQUFtRyxVQUFBLENBQUFqRyxDQUFBO01BQUE7TUFDRCxPQUFPNkYsVUFBVTtJQUNuQixDQUFDO0lBQ0RRLGdCQUFnQixXQUFBQSxpQkFBQzlSLE9BQU8sRUFBRUgsR0FBRyxFQUFFO01BQzdCLE9BQU82USxhQUFhLENBQUMxUSxPQUFPLENBQUM4RixZQUFZLFlBQUF2RSxNQUFBLENBQVl1UCxnQkFBZ0IsQ0FBQ2pSLEdBQUcsQ0FBQyxFQUFHLENBQUM7SUFDaEY7RUFDRixDQUFDOztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7RUFGRSxJQUlNa1MsTUFBTTtJQUFBLFNBQUFBLE9BQUE7TUFBQXRTLGVBQUEsT0FBQXNTLE1BQUE7SUFBQTtJQUFBblMsWUFBQSxDQUFBbVMsTUFBQTtNQUFBbFMsR0FBQTtNQUFBQyxLQUFBLEVBV1YsU0FBQWtTLFdBQVdDLE1BQU0sRUFBRTtRQUNqQkEsTUFBTSxHQUFHLElBQUksQ0FBQ0MsZUFBZSxDQUFDRCxNQUFNLENBQUM7UUFDckNBLE1BQU0sR0FBRyxJQUFJLENBQUNFLGlCQUFpQixDQUFDRixNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDRyxnQkFBZ0IsQ0FBQ0gsTUFBTSxDQUFDO1FBQzdCLE9BQU9BLE1BQU07TUFDZjtJQUFDO01BQUFwUyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBcVMsa0JBQWtCRixNQUFNLEVBQUU7UUFDeEIsT0FBT0EsTUFBTTtNQUNmO0lBQUM7TUFBQXBTLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFvUyxnQkFBZ0JELE1BQU0sRUFBRWpTLE9BQU8sRUFBRTtRQUMvQixJQUFNcVMsVUFBVSxHQUFHM04sV0FBVyxDQUFDMUUsT0FBTyxDQUFDLEdBQUdnUixXQUFXLENBQUNjLGdCQUFnQixDQUFDOVIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRWhHLE9BQUFzUyxhQUFBLENBQUFBLGFBQUEsQ0FBQUEsYUFBQSxDQUFBQSxhQUFBLEtBQ0ssSUFBSSxDQUFDQyxXQUFXLENBQUNDLE9BQU8sR0FDdkI1USxPQUFBLENBQU95USxVQUFVLE1BQUssUUFBUSxHQUFHQSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQ2hEM04sV0FBVyxDQUFDMUUsT0FBTyxDQUFDLEdBQUdnUixXQUFXLENBQUNLLGlCQUFpQixDQUFDclIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQ2xFNEIsT0FBQSxDQUFPcVEsTUFBTSxNQUFLLFFBQVEsR0FBR0EsTUFBTSxHQUFHLENBQUMsQ0FBQztNQUVoRDtJQUFDO01BQUFwUyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBc1MsaUJBQWlCSCxNQUFNLEVBQThDO1FBQUEsSUFBNUNRLFdBQVcsR0FBQTlTLFNBQUEsQ0FBQW1CLE1BQUEsUUFBQW5CLFNBQUEsUUFBQXNELFNBQUEsR0FBQXRELFNBQUEsTUFBRyxJQUFJLENBQUM0UyxXQUFXLENBQUNHLFdBQVc7UUFDakUsU0FBQUMsR0FBQSxNQUFBQyxnQkFBQSxHQUF3QzFQLE1BQU0sQ0FBQ29LLE9BQU8sQ0FBQ21GLFdBQVcsQ0FBQyxFQUFBRSxHQUFBLEdBQUFDLGdCQUFBLENBQUE5UixNQUFBLEVBQUE2UixHQUFBLElBQUU7VUFBaEUsSUFBQUUsbUJBQUEsR0FBQW5HLGNBQUEsQ0FBQWtHLGdCQUFBLENBQUFELEdBQUE7WUFBT0csUUFBUSxHQUFBRCxtQkFBQTtZQUFFRSxhQUFhLEdBQUFGLG1CQUFBO1VBQ2pDLElBQU0vUyxLQUFLLEdBQUdtUyxNQUFNLENBQUNhLFFBQVEsQ0FBQztVQUM5QixJQUFNRSxTQUFTLEdBQUd0TyxXQUFXLENBQUM1RSxLQUFLLENBQUMsR0FBRyxTQUFTLEdBQUdpRCxNQUFNLENBQUNqRCxLQUFLLENBQUM7VUFDaEUsSUFBSSxDQUFDLElBQUltVCxNQUFNLENBQUNGLGFBQWEsQ0FBQyxDQUFDRyxJQUFJLENBQUNGLFNBQVMsQ0FBQyxFQUFFO1lBQzlDLE1BQU0sSUFBSUcsU0FBUyxJQUFBNVIsTUFBQSxDQUFJLElBQUksQ0FBQ2dSLFdBQVcsQ0FBQzlLLElBQUksQ0FBQzJMLFdBQVcsRUFBRSxpQkFBQTdSLE1BQUEsQ0FBYXVSLFFBQVEseUJBQUF2UixNQUFBLENBQW9CeVIsU0FBUyw2QkFBQXpSLE1BQUEsQ0FBd0J3UixhQUFhLFNBQUs7VUFDeEo7UUFDRjtNQUNGO0lBQUM7TUFBQWxULEdBQUE7TUFBQWlRLEdBQUE7TUFyQ0Q7TUFDQSxTQUFBQSxJQUFBLEVBQXFCO1FBQ25CLE9BQU8sQ0FBQyxDQUFDO01BQ1g7SUFBQztNQUFBalEsR0FBQTtNQUFBaVEsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBeUI7UUFDdkIsT0FBTyxDQUFDLENBQUM7TUFDWDtJQUFDO01BQUFqUSxHQUFBO01BQUFpUSxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUFrQjtRQUNoQixNQUFNLElBQUl1RCxLQUFLLENBQUMscUVBQXFFLENBQUM7TUFDeEY7SUFBQztJQUFBLE9BQUF0QixNQUFBO0VBQUE7RUErQkg7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBRUU7QUFDRjtBQUNBO0VBRUUsSUFBTXVCLE9BQU8sR0FBRyxjQUFjOztFQUU5QjtBQUNGO0FBQ0E7RUFGRSxJQUlNQyxhQUFhLDBCQUFBQyxPQUFBO0lBQUFsVSxTQUFBLENBQUFpVSxhQUFBLEVBQUFDLE9BQUE7SUFBQSxJQUFBalUsTUFBQSxHQUFBQyxZQUFBLENBQUErVCxhQUFBO0lBQ2pCLFNBQUFBLGNBQVl2VCxPQUFPLEVBQUVpUyxNQUFNLEVBQUU7TUFBQSxJQUFBd0IsS0FBQTtNQUFBaFUsZUFBQSxPQUFBOFQsYUFBQTtNQUMzQkUsS0FBQSxHQUFBbFUsTUFBQSxDQUFBOEQsSUFBQTtNQUNBckQsT0FBTyxHQUFHNkUsVUFBVSxDQUFDN0UsT0FBTyxDQUFDO01BQzdCLElBQUksQ0FBQ0EsT0FBTyxFQUFFO1FBQ1osT0FBQTBULDBCQUFBLENBQUFELEtBQUE7TUFDRjtNQUNBQSxLQUFBLENBQUtFLFFBQVEsR0FBRzNULE9BQU87TUFDdkJ5VCxLQUFBLENBQUtHLE9BQU8sR0FBR0gsS0FBQSxDQUFLekIsVUFBVSxDQUFDQyxNQUFNLENBQUM7TUFDdENoQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ3VELEtBQUEsQ0FBS0UsUUFBUSxFQUFFRixLQUFBLENBQUtsQixXQUFXLENBQUNzQixRQUFRLEVBQUFDLHNCQUFBLENBQUFMLEtBQUEsRUFBTztNQUFDLE9BQUFBLEtBQUE7SUFDM0Q7O0lBRUE7SUFBQTdULFlBQUEsQ0FBQTJULGFBQUE7TUFBQTFULEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUFpVSxRQUFBLEVBQVU7UUFDUjlELElBQUksQ0FBQ1EsTUFBTSxDQUFDLElBQUksQ0FBQ2tELFFBQVEsRUFBRSxJQUFJLENBQUNwQixXQUFXLENBQUNzQixRQUFRLENBQUM7UUFDckRsSixZQUFZLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMrSSxRQUFRLEVBQUUsSUFBSSxDQUFDcEIsV0FBVyxDQUFDeUIsU0FBUyxDQUFDO1FBQUMsSUFBQUMsVUFBQSxHQUFBaEosMEJBQUEsQ0FDakMvSCxNQUFNLENBQUNnUixtQkFBbUIsQ0FBQyxJQUFJLENBQUM7VUFBQUMsTUFBQTtRQUFBO1VBQTNELEtBQUFGLFVBQUEsQ0FBQTlJLENBQUEsTUFBQWdKLE1BQUEsR0FBQUYsVUFBQSxDQUFBN0ksQ0FBQSxJQUFBQyxJQUFBLEdBQTZEO1lBQUEsSUFBbEQrSSxZQUFZLEdBQUFELE1BQUEsQ0FBQXJVLEtBQUE7WUFDckIsSUFBSSxDQUFDc1UsWUFBWSxDQUFDLEdBQUcsSUFBSTtVQUMzQjtRQUFDLFNBQUE3SSxHQUFBO1VBQUEwSSxVQUFBLENBQUF6SSxDQUFBLENBQUFELEdBQUE7UUFBQTtVQUFBMEksVUFBQSxDQUFBeEksQ0FBQTtRQUFBO01BQ0g7SUFBQztNQUFBNUwsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXVVLGVBQWV4TixRQUFRLEVBQUU3RyxPQUFPLEVBQXFCO1FBQUEsSUFBbkJzVSxVQUFVLEdBQUEzVSxTQUFBLENBQUFtQixNQUFBLFFBQUFuQixTQUFBLFFBQUFzRCxTQUFBLEdBQUF0RCxTQUFBLE1BQUcsSUFBSTtRQUNqRHlJLHNCQUFzQixDQUFDdkIsUUFBUSxFQUFFN0csT0FBTyxFQUFFc1UsVUFBVSxDQUFDO01BQ3ZEO0lBQUM7TUFBQXpVLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFrUyxXQUFXQyxNQUFNLEVBQUU7UUFDakJBLE1BQU0sR0FBRyxJQUFJLENBQUNDLGVBQWUsQ0FBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQzBCLFFBQVEsQ0FBQztRQUNwRDFCLE1BQU0sR0FBRyxJQUFJLENBQUNFLGlCQUFpQixDQUFDRixNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDRyxnQkFBZ0IsQ0FBQ0gsTUFBTSxDQUFDO1FBQzdCLE9BQU9BLE1BQU07TUFDZjs7TUFFQTtJQUFBO01BQUFwUyxHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBeVUsWUFBbUJ2VSxPQUFPLEVBQUU7UUFDMUIsT0FBT2lRLElBQUksQ0FBQ0gsR0FBRyxDQUFDakwsVUFBVSxDQUFDN0UsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDNlQsUUFBUSxDQUFDO01BQ3JEO0lBQUM7TUFBQWhVLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUEwVSxvQkFBMkJ4VSxPQUFPLEVBQWU7UUFBQSxJQUFiaVMsTUFBTSxHQUFBdFMsU0FBQSxDQUFBbUIsTUFBQSxRQUFBbkIsU0FBQSxRQUFBc0QsU0FBQSxHQUFBdEQsU0FBQSxNQUFHLENBQUMsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQzRVLFdBQVcsQ0FBQ3ZVLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDQSxPQUFPLEVBQUU0QixPQUFBLENBQU9xUSxNQUFNLE1BQUssUUFBUSxHQUFHQSxNQUFNLEdBQUcsSUFBSSxDQUFDO01BQ25HO0lBQUM7TUFBQXBTLEdBQUE7TUFBQWlRLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQXFCO1FBQ25CLE9BQU93RCxPQUFPO01BQ2hCO0lBQUM7TUFBQXpULEdBQUE7TUFBQWlRLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQXNCO1FBQ3BCLGFBQUF2TyxNQUFBLENBQWEsSUFBSSxDQUFDa0csSUFBSTtNQUN4QjtJQUFDO01BQUE1SCxHQUFBO01BQUFpUSxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUF1QjtRQUNyQixXQUFBdk8sTUFBQSxDQUFXLElBQUksQ0FBQ3NTLFFBQVE7TUFDMUI7SUFBQztNQUFBaFUsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTJVLFVBQWlCak4sSUFBSSxFQUFFO1FBQ3JCLFVBQUFqRyxNQUFBLENBQVVpRyxJQUFJLEVBQUFqRyxNQUFBLENBQUcsSUFBSSxDQUFDeVMsU0FBUztNQUNqQztJQUFDO0lBQUEsT0FBQVQsYUFBQTtFQUFBLEVBaER5QnhCLE1BQU07RUFtRGxDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFLElBQU0yQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBRzFVLE9BQU8sRUFBSTtJQUM3QixJQUFJd0MsUUFBUSxHQUFHeEMsT0FBTyxDQUFDOEYsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0lBQ3JELElBQUksQ0FBQ3RELFFBQVEsSUFBSUEsUUFBUSxLQUFLLEdBQUcsRUFBRTtNQUNqQyxJQUFJbVMsYUFBYSxHQUFHM1UsT0FBTyxDQUFDOEYsWUFBWSxDQUFDLE1BQU0sQ0FBQzs7TUFFaEQ7TUFDQTtNQUNBO01BQ0E7TUFDQSxJQUFJLENBQUM2TyxhQUFhLElBQUksQ0FBQ0EsYUFBYSxDQUFDbEgsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUNrSCxhQUFhLENBQUMzRyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEYsT0FBTyxJQUFJO01BQ2I7O01BRUE7TUFDQSxJQUFJMkcsYUFBYSxDQUFDbEgsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUNrSCxhQUFhLENBQUMzRyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDakUyRyxhQUFhLE9BQUFwVCxNQUFBLENBQU9vVCxhQUFhLENBQUNyUSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUU7TUFDbkQ7TUFDQTlCLFFBQVEsR0FBR21TLGFBQWEsSUFBSUEsYUFBYSxLQUFLLEdBQUcsR0FBR0EsYUFBYSxDQUFDQyxJQUFJLEVBQUUsR0FBRyxJQUFJO0lBQ2pGO0lBQ0EsT0FBT3JTLGFBQWEsQ0FBQ0MsUUFBUSxDQUFDO0VBQ2hDLENBQUM7RUFDRCxJQUFNcVMsY0FBYyxHQUFHO0lBQ3JCOUksSUFBSSxXQUFBQSxLQUFDdkosUUFBUSxFQUFzQztNQUFBLElBQUFzUyxLQUFBO01BQUEsSUFBcEM5VSxPQUFPLEdBQUFMLFNBQUEsQ0FBQW1CLE1BQUEsUUFBQW5CLFNBQUEsUUFBQXNELFNBQUEsR0FBQXRELFNBQUEsTUFBR2EsUUFBUSxDQUFDd0YsZUFBZTtNQUMvQyxPQUFPLENBQUE4TyxLQUFBLEtBQUUsRUFBQ3ZULE1BQU0sQ0FBQTdCLEtBQUEsQ0FBQW9WLEtBQUEsRUFBQTNNLGtCQUFBLENBQUk0TSxPQUFPLENBQUM1UixTQUFTLENBQUMxQyxnQkFBZ0IsQ0FBQzRDLElBQUksQ0FBQ3JELE9BQU8sRUFBRXdDLFFBQVEsQ0FBQyxFQUFDO0lBQ2pGLENBQUM7SUFDRHdTLE9BQU8sV0FBQUEsUUFBQ3hTLFFBQVEsRUFBc0M7TUFBQSxJQUFwQ3hDLE9BQU8sR0FBQUwsU0FBQSxDQUFBbUIsTUFBQSxRQUFBbkIsU0FBQSxRQUFBc0QsU0FBQSxHQUFBdEQsU0FBQSxNQUFHYSxRQUFRLENBQUN3RixlQUFlO01BQ2xELE9BQU8rTyxPQUFPLENBQUM1UixTQUFTLENBQUMyQixhQUFhLENBQUN6QixJQUFJLENBQUNyRCxPQUFPLEVBQUV3QyxRQUFRLENBQUM7SUFDaEUsQ0FBQztJQUNEeVMsUUFBUSxXQUFBQSxTQUFDalYsT0FBTyxFQUFFd0MsUUFBUSxFQUFFO01BQUEsSUFBQTBTLEtBQUE7TUFDMUIsT0FBTyxDQUFBQSxLQUFBLEtBQUUsRUFBQzNULE1BQU0sQ0FBQTdCLEtBQUEsQ0FBQXdWLEtBQUEsRUFBQS9NLGtCQUFBLENBQUluSSxPQUFPLENBQUNpVixRQUFRLEVBQUMsQ0FBQ3hELE1BQU0sQ0FBQyxVQUFBMEQsS0FBSztRQUFBLE9BQUlBLEtBQUssQ0FBQ0MsT0FBTyxDQUFDNVMsUUFBUSxDQUFDO01BQUEsRUFBQztJQUNoRixDQUFDO0lBQ0Q2UyxPQUFPLFdBQUFBLFFBQUNyVixPQUFPLEVBQUV3QyxRQUFRLEVBQUU7TUFDekIsSUFBTTZTLE9BQU8sR0FBRyxFQUFFO01BQ2xCLElBQUlDLFFBQVEsR0FBR3RWLE9BQU8sQ0FBQ3NGLFVBQVUsQ0FBQ0YsT0FBTyxDQUFDNUMsUUFBUSxDQUFDO01BQ25ELE9BQU84UyxRQUFRLEVBQUU7UUFDZkQsT0FBTyxDQUFDbk8sSUFBSSxDQUFDb08sUUFBUSxDQUFDO1FBQ3RCQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ2hRLFVBQVUsQ0FBQ0YsT0FBTyxDQUFDNUMsUUFBUSxDQUFDO01BQ2xEO01BQ0EsT0FBTzZTLE9BQU87SUFDaEIsQ0FBQztJQUNERSxJQUFJLFdBQUFBLEtBQUN2VixPQUFPLEVBQUV3QyxRQUFRLEVBQUU7TUFDdEIsSUFBSWdULFFBQVEsR0FBR3hWLE9BQU8sQ0FBQ3lWLHNCQUFzQjtNQUM3QyxPQUFPRCxRQUFRLEVBQUU7UUFDZixJQUFJQSxRQUFRLENBQUNKLE9BQU8sQ0FBQzVTLFFBQVEsQ0FBQyxFQUFFO1VBQzlCLE9BQU8sQ0FBQ2dULFFBQVEsQ0FBQztRQUNuQjtRQUNBQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0Msc0JBQXNCO01BQzVDO01BQ0EsT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUNEO0lBQ0FDLElBQUksV0FBQUEsS0FBQzFWLE9BQU8sRUFBRXdDLFFBQVEsRUFBRTtNQUN0QixJQUFJa1QsSUFBSSxHQUFHMVYsT0FBTyxDQUFDMlYsa0JBQWtCO01BQ3JDLE9BQU9ELElBQUksRUFBRTtRQUNYLElBQUlBLElBQUksQ0FBQ04sT0FBTyxDQUFDNVMsUUFBUSxDQUFDLEVBQUU7VUFDMUIsT0FBTyxDQUFDa1QsSUFBSSxDQUFDO1FBQ2Y7UUFDQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNDLGtCQUFrQjtNQUNoQztNQUNBLE9BQU8sRUFBRTtJQUNYLENBQUM7SUFDREMsaUJBQWlCLFdBQUFBLGtCQUFDNVYsT0FBTyxFQUFFO01BQ3pCLElBQU02VixVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsMEJBQTBCLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFVBQUF0VCxRQUFRO1FBQUEsVUFBQWpCLE1BQUEsQ0FBT2lCLFFBQVE7TUFBQSxDQUF1QixDQUFDLENBQUN1VCxJQUFJLENBQUMsR0FBRyxDQUFDO01BQ3BMLE9BQU8sSUFBSSxDQUFDaEssSUFBSSxDQUFDOEosVUFBVSxFQUFFN1YsT0FBTyxDQUFDLENBQUN5UixNQUFNLENBQUMsVUFBQXVFLEVBQUU7UUFBQSxPQUFJLENBQUN6USxVQUFVLENBQUN5USxFQUFFLENBQUMsSUFBSWpSLFNBQVMsQ0FBQ2lSLEVBQUUsQ0FBQztNQUFBLEVBQUM7SUFDdEYsQ0FBQztJQUNEQyxzQkFBc0IsV0FBQUEsdUJBQUNqVyxPQUFPLEVBQUU7TUFDOUIsSUFBTXdDLFFBQVEsR0FBR2tTLFdBQVcsQ0FBQzFVLE9BQU8sQ0FBQztNQUNyQyxJQUFJd0MsUUFBUSxFQUFFO1FBQ1osT0FBT3FTLGNBQWMsQ0FBQ0csT0FBTyxDQUFDeFMsUUFBUSxDQUFDLEdBQUdBLFFBQVEsR0FBRyxJQUFJO01BQzNEO01BQ0EsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNEMFQsc0JBQXNCLFdBQUFBLHVCQUFDbFcsT0FBTyxFQUFFO01BQzlCLElBQU13QyxRQUFRLEdBQUdrUyxXQUFXLENBQUMxVSxPQUFPLENBQUM7TUFDckMsT0FBT3dDLFFBQVEsR0FBR3FTLGNBQWMsQ0FBQ0csT0FBTyxDQUFDeFMsUUFBUSxDQUFDLEdBQUcsSUFBSTtJQUMzRCxDQUFDO0lBQ0QyVCwrQkFBK0IsV0FBQUEsZ0NBQUNuVyxPQUFPLEVBQUU7TUFDdkMsSUFBTXdDLFFBQVEsR0FBR2tTLFdBQVcsQ0FBQzFVLE9BQU8sQ0FBQztNQUNyQyxPQUFPd0MsUUFBUSxHQUFHcVMsY0FBYyxDQUFDOUksSUFBSSxDQUFDdkosUUFBUSxDQUFDLEdBQUcsRUFBRTtJQUN0RDtFQUNGLENBQUM7O0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsSUFBTTRULG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUlDLFNBQVMsRUFBc0I7SUFBQSxJQUFwQkMsTUFBTSxHQUFBM1csU0FBQSxDQUFBbUIsTUFBQSxRQUFBbkIsU0FBQSxRQUFBc0QsU0FBQSxHQUFBdEQsU0FBQSxNQUFHLE1BQU07SUFDdEQsSUFBTTRXLFVBQVUsbUJBQUFoVixNQUFBLENBQW1COFUsU0FBUyxDQUFDckMsU0FBUyxDQUFFO0lBQ3hELElBQU14TSxJQUFJLEdBQUc2TyxTQUFTLENBQUM1TyxJQUFJO0lBQzNCa0QsWUFBWSxDQUFDK0MsRUFBRSxDQUFDbE4sUUFBUSxFQUFFK1YsVUFBVSx3QkFBQWhWLE1BQUEsQ0FBdUJpRyxJQUFJLFVBQU0sVUFBVStDLEtBQUssRUFBRTtNQUNwRixJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDa0QsUUFBUSxDQUFDLElBQUksQ0FBQytJLE9BQU8sQ0FBQyxFQUFFO1FBQ3hDak0sS0FBSyxDQUFDNkUsY0FBYyxFQUFFO01BQ3hCO01BQ0EsSUFBSTdKLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNwQjtNQUNGO01BQ0EsSUFBTXFELE1BQU0sR0FBR2lNLGNBQWMsQ0FBQ3FCLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQzlRLE9BQU8sS0FBQTdELE1BQUEsQ0FBS2lHLElBQUksRUFBRztNQUN0RixJQUFNMkksUUFBUSxHQUFHa0csU0FBUyxDQUFDN0IsbUJBQW1CLENBQUM1TCxNQUFNLENBQUM7O01BRXREO01BQ0F1SCxRQUFRLENBQUNtRyxNQUFNLENBQUMsRUFBRTtJQUNwQixDQUFDLENBQUM7RUFDSixDQUFDOztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsSUFBTUcsTUFBTSxHQUFHLE9BQU87RUFDdEIsSUFBTUMsVUFBVSxHQUFHLFVBQVU7RUFDN0IsSUFBTUMsV0FBVyxPQUFBcFYsTUFBQSxDQUFPbVYsVUFBVSxDQUFFO0VBQ3BDLElBQU1FLFdBQVcsV0FBQXJWLE1BQUEsQ0FBV29WLFdBQVcsQ0FBRTtFQUN6QyxJQUFNRSxZQUFZLFlBQUF0VixNQUFBLENBQVlvVixXQUFXLENBQUU7RUFDM0MsSUFBTUcsaUJBQWlCLEdBQUcsTUFBTTtFQUNoQyxJQUFNQyxpQkFBaUIsR0FBRyxNQUFNOztFQUVoQztBQUNGO0FBQ0E7RUFGRSxJQUlNQyxLQUFLLDBCQUFBQyxjQUFBO0lBQUEzWCxTQUFBLENBQUEwWCxLQUFBLEVBQUFDLGNBQUE7SUFBQSxJQUFBQyxPQUFBLEdBQUExWCxZQUFBLENBQUF3WCxLQUFBO0lBQUEsU0FBQUEsTUFBQTtNQUFBdlgsZUFBQSxPQUFBdVgsS0FBQTtNQUFBLE9BQUFFLE9BQUEsQ0FBQXhYLEtBQUEsT0FBQUMsU0FBQTtJQUFBO0lBQUFDLFlBQUEsQ0FBQW9YLEtBQUE7TUFBQW5YLEdBQUE7TUFBQUMsS0FBQTtNQU1UO01BQ0EsU0FBQXFYLE1BQUEsRUFBUTtRQUFBLElBQUFDLE1BQUE7UUFDTixJQUFNQyxVQUFVLEdBQUcxTSxZQUFZLENBQUMrRCxPQUFPLENBQUMsSUFBSSxDQUFDaUYsUUFBUSxFQUFFaUQsV0FBVyxDQUFDO1FBQ25FLElBQUlTLFVBQVUsQ0FBQ3ZJLGdCQUFnQixFQUFFO1VBQy9CO1FBQ0Y7UUFDQSxJQUFJLENBQUM2RSxRQUFRLENBQUNqTyxTQUFTLENBQUMrSyxNQUFNLENBQUNzRyxpQkFBaUIsQ0FBQztRQUNqRCxJQUFNekMsVUFBVSxHQUFHLElBQUksQ0FBQ1gsUUFBUSxDQUFDak8sU0FBUyxDQUFDQyxRQUFRLENBQUNtUixpQkFBaUIsQ0FBQztRQUN0RSxJQUFJLENBQUN6QyxjQUFjLENBQUM7VUFBQSxPQUFNK0MsTUFBSSxDQUFDRSxlQUFlLEVBQUU7UUFBQSxHQUFFLElBQUksQ0FBQzNELFFBQVEsRUFBRVcsVUFBVSxDQUFDO01BQzlFOztNQUVBO0lBQUE7TUFBQXpVLEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUF3WCxnQkFBQSxFQUFrQjtRQUNoQixJQUFJLENBQUMzRCxRQUFRLENBQUNsRCxNQUFNLEVBQUU7UUFDdEI5RixZQUFZLENBQUMrRCxPQUFPLENBQUMsSUFBSSxDQUFDaUYsUUFBUSxFQUFFa0QsWUFBWSxDQUFDO1FBQ2pELElBQUksQ0FBQzlDLE9BQU8sRUFBRTtNQUNoQjs7TUFFQTtJQUFBO01BQUFsVSxHQUFBO01BQUFpUSxHQUFBO01BdkJBO01BQ0EsU0FBQUEsSUFBQSxFQUFrQjtRQUNoQixPQUFPMkcsTUFBTTtNQUNmO0lBQUM7TUFBQTVXLEdBQUE7TUFBQUMsS0FBQSxFQXFCRCxTQUFBOEgsZ0JBQXVCcUssTUFBTSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxDQUFDc0YsSUFBSSxDQUFDLFlBQVk7VUFDM0IsSUFBTUMsSUFBSSxHQUFHUixLQUFLLENBQUN4QyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7VUFDNUMsSUFBSSxPQUFPdkMsTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM5QjtVQUNGO1VBQ0EsSUFBSXVGLElBQUksQ0FBQ3ZGLE1BQU0sQ0FBQyxLQUFLaFAsU0FBUyxJQUFJZ1AsTUFBTSxDQUFDakUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJaUUsTUFBTSxLQUFLLGFBQWEsRUFBRTtZQUNwRixNQUFNLElBQUlrQixTQUFTLHNCQUFBNVIsTUFBQSxDQUFxQjBRLE1BQU0sUUFBSTtVQUNwRDtVQUNBdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3BCLENBQUMsQ0FBQztNQUNKO0lBQUM7SUFBQSxPQUFBK0UsS0FBQTtFQUFBLEVBcENpQnpELGFBQWE7RUF1Q2pDO0FBQ0Y7QUFDQTtFQUVFNkMsb0JBQW9CLENBQUNZLEtBQUssRUFBRSxPQUFPLENBQUM7O0VBRXBDO0FBQ0Y7QUFDQTs7RUFFRTNQLGtCQUFrQixDQUFDMlAsS0FBSyxDQUFDOztFQUV6QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLElBQU1TLE1BQU0sR0FBRyxRQUFRO0VBQ3ZCLElBQU1DLFVBQVUsR0FBRyxXQUFXO0VBQzlCLElBQU1DLFdBQVcsT0FBQXBXLE1BQUEsQ0FBT21XLFVBQVUsQ0FBRTtFQUNwQyxJQUFNRSxjQUFjLEdBQUcsV0FBVztFQUNsQyxJQUFNQyxtQkFBbUIsR0FBRyxRQUFRO0VBQ3BDLElBQU1DLHNCQUFzQixHQUFHLDJCQUEyQjtFQUMxRCxJQUFNQyxzQkFBc0IsV0FBQXhXLE1BQUEsQ0FBV29XLFdBQVcsRUFBQXBXLE1BQUEsQ0FBR3FXLGNBQWMsQ0FBRTs7RUFFckU7QUFDRjtBQUNBO0VBRkUsSUFJTUksTUFBTSwwQkFBQUMsZUFBQTtJQUFBM1ksU0FBQSxDQUFBMFksTUFBQSxFQUFBQyxlQUFBO0lBQUEsSUFBQUMsT0FBQSxHQUFBMVksWUFBQSxDQUFBd1ksTUFBQTtJQUFBLFNBQUFBLE9BQUE7TUFBQXZZLGVBQUEsT0FBQXVZLE1BQUE7TUFBQSxPQUFBRSxPQUFBLENBQUF4WSxLQUFBLE9BQUFDLFNBQUE7SUFBQTtJQUFBQyxZQUFBLENBQUFvWSxNQUFBO01BQUFuWSxHQUFBO01BQUFDLEtBQUE7TUFNVjtNQUNBLFNBQUFxWSxPQUFBLEVBQVM7UUFDUDtRQUNBLElBQUksQ0FBQ3hFLFFBQVEsQ0FBQ3pDLFlBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDeUMsUUFBUSxDQUFDak8sU0FBUyxDQUFDeVMsTUFBTSxDQUFDTixtQkFBbUIsQ0FBQyxDQUFDO01BQ2pHOztNQUVBO0lBQUE7TUFBQWhZLEdBQUE7TUFBQWlRLEdBQUE7TUFYQTtNQUNBLFNBQUFBLElBQUEsRUFBa0I7UUFDaEIsT0FBTzJILE1BQU07TUFDZjtJQUFDO01BQUE1WCxHQUFBO01BQUFDLEtBQUEsRUFTRCxTQUFBOEgsZ0JBQXVCcUssTUFBTSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxDQUFDc0YsSUFBSSxDQUFDLFlBQVk7VUFDM0IsSUFBTUMsSUFBSSxHQUFHUSxNQUFNLENBQUN4RCxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7VUFDN0MsSUFBSXZDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDdkJ1RixJQUFJLENBQUN2RixNQUFNLENBQUMsRUFBRTtVQUNoQjtRQUNGLENBQUMsQ0FBQztNQUNKO0lBQUM7SUFBQSxPQUFBK0YsTUFBQTtFQUFBLEVBcEJrQnpFLGFBQWE7RUF1QmxDO0FBQ0Y7QUFDQTtFQUVFNUksWUFBWSxDQUFDK0MsRUFBRSxDQUFDbE4sUUFBUSxFQUFFdVgsc0JBQXNCLEVBQUVELHNCQUFzQixFQUFFLFVBQUF2TixLQUFLLEVBQUk7SUFDakZBLEtBQUssQ0FBQzZFLGNBQWMsRUFBRTtJQUN0QixJQUFNZ0osTUFBTSxHQUFHN04sS0FBSyxDQUFDM0IsTUFBTSxDQUFDeEQsT0FBTyxDQUFDMFMsc0JBQXNCLENBQUM7SUFDM0QsSUFBTU4sSUFBSSxHQUFHUSxNQUFNLENBQUN4RCxtQkFBbUIsQ0FBQzRELE1BQU0sQ0FBQztJQUMvQ1osSUFBSSxDQUFDVyxNQUFNLEVBQUU7RUFDZixDQUFDLENBQUM7O0VBRUY7QUFDRjtBQUNBOztFQUVFOVEsa0JBQWtCLENBQUMyUSxNQUFNLENBQUM7O0VBRTFCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsSUFBTUssTUFBTSxHQUFHLE9BQU87RUFDdEIsSUFBTUMsV0FBVyxHQUFHLFdBQVc7RUFDL0IsSUFBTUMsZ0JBQWdCLGdCQUFBaFgsTUFBQSxDQUFnQitXLFdBQVcsQ0FBRTtFQUNuRCxJQUFNRSxlQUFlLGVBQUFqWCxNQUFBLENBQWUrVyxXQUFXLENBQUU7RUFDakQsSUFBTUcsY0FBYyxjQUFBbFgsTUFBQSxDQUFjK1csV0FBVyxDQUFFO0VBQy9DLElBQU1JLGlCQUFpQixpQkFBQW5YLE1BQUEsQ0FBaUIrVyxXQUFXLENBQUU7RUFDckQsSUFBTUssZUFBZSxlQUFBcFgsTUFBQSxDQUFlK1csV0FBVyxDQUFFO0VBQ2pELElBQU1NLGtCQUFrQixHQUFHLE9BQU87RUFDbEMsSUFBTUMsZ0JBQWdCLEdBQUcsS0FBSztFQUM5QixJQUFNQyx3QkFBd0IsR0FBRyxlQUFlO0VBQ2hELElBQU1DLGVBQWUsR0FBRyxFQUFFO0VBQzFCLElBQU1DLFNBQVMsR0FBRztJQUNoQkMsV0FBVyxFQUFFLElBQUk7SUFDakJDLFlBQVksRUFBRSxJQUFJO0lBQ2xCQyxhQUFhLEVBQUU7RUFDakIsQ0FBQztFQUNELElBQU1DLGFBQWEsR0FBRztJQUNwQkgsV0FBVyxFQUFFLGlCQUFpQjtJQUM5QkMsWUFBWSxFQUFFLGlCQUFpQjtJQUMvQkMsYUFBYSxFQUFFO0VBQ2pCLENBQUM7O0VBRUQ7QUFDRjtBQUNBO0VBRkUsSUFJTUUsS0FBSywwQkFBQUMsUUFBQTtJQUFBaGEsU0FBQSxDQUFBK1osS0FBQSxFQUFBQyxRQUFBO0lBQUEsSUFBQUMsT0FBQSxHQUFBL1osWUFBQSxDQUFBNlosS0FBQTtJQUNULFNBQUFBLE1BQVlyWixPQUFPLEVBQUVpUyxNQUFNLEVBQUU7TUFBQSxJQUFBdUgsTUFBQTtNQUFBL1osZUFBQSxPQUFBNFosS0FBQTtNQUMzQkcsTUFBQSxHQUFBRCxPQUFBLENBQUFsVyxJQUFBO01BQ0FtVyxNQUFBLENBQUs3RixRQUFRLEdBQUczVCxPQUFPO01BQ3ZCLElBQUksQ0FBQ0EsT0FBTyxJQUFJLENBQUNxWixLQUFLLENBQUNJLFdBQVcsRUFBRSxFQUFFO1FBQ3BDLE9BQUEvRiwwQkFBQSxDQUFBOEYsTUFBQTtNQUNGO01BQ0FBLE1BQUEsQ0FBSzVGLE9BQU8sR0FBRzRGLE1BQUEsQ0FBS3hILFVBQVUsQ0FBQ0MsTUFBTSxDQUFDO01BQ3RDdUgsTUFBQSxDQUFLRSxPQUFPLEdBQUcsQ0FBQztNQUNoQkYsTUFBQSxDQUFLRyxxQkFBcUIsR0FBRzNNLE9BQU8sQ0FBQ3ZLLE1BQU0sQ0FBQ21YLFlBQVksQ0FBQztNQUN6REosTUFBQSxDQUFLSyxXQUFXLEVBQUU7TUFBQyxPQUFBTCxNQUFBO0lBQ3JCOztJQUVBO0lBQUE1WixZQUFBLENBQUF5WixLQUFBO01BQUF4WixHQUFBO01BQUFDLEtBQUE7TUFXQTtNQUNBLFNBQUFpVSxRQUFBLEVBQVU7UUFDUnBKLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQytJLFFBQVEsRUFBRTJFLFdBQVcsQ0FBQztNQUM5Qzs7TUFFQTtJQUFBO01BQUF6WSxHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBZ2EsT0FBT3ZQLEtBQUssRUFBRTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUNvUCxxQkFBcUIsRUFBRTtVQUMvQixJQUFJLENBQUNELE9BQU8sR0FBR25QLEtBQUssQ0FBQ3dQLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTztVQUN2QztRQUNGO1FBQ0EsSUFBSSxJQUFJLENBQUNDLHVCQUF1QixDQUFDMVAsS0FBSyxDQUFDLEVBQUU7VUFDdkMsSUFBSSxDQUFDbVAsT0FBTyxHQUFHblAsS0FBSyxDQUFDeVAsT0FBTztRQUM5QjtNQUNGO0lBQUM7TUFBQW5hLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFvYSxLQUFLM1AsS0FBSyxFQUFFO1FBQ1YsSUFBSSxJQUFJLENBQUMwUCx1QkFBdUIsQ0FBQzFQLEtBQUssQ0FBQyxFQUFFO1VBQ3ZDLElBQUksQ0FBQ21QLE9BQU8sR0FBR25QLEtBQUssQ0FBQ3lQLE9BQU8sR0FBRyxJQUFJLENBQUNOLE9BQU87UUFDN0M7UUFDQSxJQUFJLENBQUNTLFlBQVksRUFBRTtRQUNuQnBTLE9BQU8sQ0FBQyxJQUFJLENBQUM2TCxPQUFPLENBQUNxRixXQUFXLENBQUM7TUFDbkM7SUFBQztNQUFBcFosR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXNhLE1BQU03UCxLQUFLLEVBQUU7UUFDWCxJQUFJLENBQUNtUCxPQUFPLEdBQUduUCxLQUFLLENBQUN3UCxPQUFPLElBQUl4UCxLQUFLLENBQUN3UCxPQUFPLENBQUNqWixNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBR3lKLEtBQUssQ0FBQ3dQLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ04sT0FBTztNQUN4RztJQUFDO01BQUE3WixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBcWEsYUFBQSxFQUFlO1FBQ2IsSUFBTUUsU0FBUyxHQUFHNVcsSUFBSSxDQUFDNlcsR0FBRyxDQUFDLElBQUksQ0FBQ1osT0FBTyxDQUFDO1FBQ3hDLElBQUlXLFNBQVMsSUFBSXRCLGVBQWUsRUFBRTtVQUNoQztRQUNGO1FBQ0EsSUFBTXdCLFNBQVMsR0FBR0YsU0FBUyxHQUFHLElBQUksQ0FBQ1gsT0FBTztRQUMxQyxJQUFJLENBQUNBLE9BQU8sR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQ2EsU0FBUyxFQUFFO1VBQ2Q7UUFDRjtRQUNBeFMsT0FBTyxDQUFDd1MsU0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMzRyxPQUFPLENBQUN1RixhQUFhLEdBQUcsSUFBSSxDQUFDdkYsT0FBTyxDQUFDc0YsWUFBWSxDQUFDO01BQ2pGO0lBQUM7TUFBQXJaLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUErWixZQUFBLEVBQWM7UUFBQSxJQUFBVyxNQUFBO1FBQ1osSUFBSSxJQUFJLENBQUNiLHFCQUFxQixFQUFFO1VBQzlCaFAsWUFBWSxDQUFDK0MsRUFBRSxDQUFDLElBQUksQ0FBQ2lHLFFBQVEsRUFBRStFLGlCQUFpQixFQUFFLFVBQUFuTyxLQUFLO1lBQUEsT0FBSWlRLE1BQUksQ0FBQ1YsTUFBTSxDQUFDdlAsS0FBSyxDQUFDO1VBQUEsRUFBQztVQUM5RUksWUFBWSxDQUFDK0MsRUFBRSxDQUFDLElBQUksQ0FBQ2lHLFFBQVEsRUFBRWdGLGVBQWUsRUFBRSxVQUFBcE8sS0FBSztZQUFBLE9BQUlpUSxNQUFJLENBQUNOLElBQUksQ0FBQzNQLEtBQUssQ0FBQztVQUFBLEVBQUM7VUFDMUUsSUFBSSxDQUFDb0osUUFBUSxDQUFDak8sU0FBUyxDQUFDK1UsR0FBRyxDQUFDM0Isd0JBQXdCLENBQUM7UUFDdkQsQ0FBQyxNQUFNO1VBQ0xuTyxZQUFZLENBQUMrQyxFQUFFLENBQUMsSUFBSSxDQUFDaUcsUUFBUSxFQUFFNEUsZ0JBQWdCLEVBQUUsVUFBQWhPLEtBQUs7WUFBQSxPQUFJaVEsTUFBSSxDQUFDVixNQUFNLENBQUN2UCxLQUFLLENBQUM7VUFBQSxFQUFDO1VBQzdFSSxZQUFZLENBQUMrQyxFQUFFLENBQUMsSUFBSSxDQUFDaUcsUUFBUSxFQUFFNkUsZUFBZSxFQUFFLFVBQUFqTyxLQUFLO1lBQUEsT0FBSWlRLE1BQUksQ0FBQ0osS0FBSyxDQUFDN1AsS0FBSyxDQUFDO1VBQUEsRUFBQztVQUMzRUksWUFBWSxDQUFDK0MsRUFBRSxDQUFDLElBQUksQ0FBQ2lHLFFBQVEsRUFBRThFLGNBQWMsRUFBRSxVQUFBbE8sS0FBSztZQUFBLE9BQUlpUSxNQUFJLENBQUNOLElBQUksQ0FBQzNQLEtBQUssQ0FBQztVQUFBLEVBQUM7UUFDM0U7TUFDRjtJQUFDO01BQUExSyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBbWEsd0JBQXdCMVAsS0FBSyxFQUFFO1FBQzdCLE9BQU8sSUFBSSxDQUFDb1AscUJBQXFCLEtBQUtwUCxLQUFLLENBQUNtUSxXQUFXLEtBQUs3QixnQkFBZ0IsSUFBSXRPLEtBQUssQ0FBQ21RLFdBQVcsS0FBSzlCLGtCQUFrQixDQUFDO01BQzNIOztNQUVBO0lBQUE7TUFBQS9ZLEdBQUE7TUFBQWlRLEdBQUEsRUE5REEsU0FBQUEsSUFBQSxFQUFxQjtRQUNuQixPQUFPa0osU0FBUztNQUNsQjtJQUFDO01BQUFuWixHQUFBO01BQUFpUSxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUF5QjtRQUN2QixPQUFPc0osYUFBYTtNQUN0QjtJQUFDO01BQUF2WixHQUFBO01BQUFpUSxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUFrQjtRQUNoQixPQUFPdUksTUFBTTtNQUNmO0lBQUM7TUFBQXhZLEdBQUE7TUFBQUMsS0FBQSxFQXVERCxTQUFBMlosWUFBQSxFQUFxQjtRQUNuQixPQUFPLGNBQWMsSUFBSWpaLFFBQVEsQ0FBQ3dGLGVBQWUsSUFBSTJVLFNBQVMsQ0FBQ0MsY0FBYyxHQUFHLENBQUM7TUFDbkY7SUFBQztJQUFBLE9BQUF2QixLQUFBO0VBQUEsRUEvRWlCdEgsTUFBTTtFQWtGMUI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBRUU7QUFDRjtBQUNBO0VBRUUsSUFBTThJLE1BQU0sR0FBRyxVQUFVO0VBQ3pCLElBQU1DLFVBQVUsR0FBRyxhQUFhO0VBQ2hDLElBQU1DLFdBQVcsT0FBQXhaLE1BQUEsQ0FBT3VaLFVBQVUsQ0FBRTtFQUNwQyxJQUFNRSxjQUFjLEdBQUcsV0FBVztFQUNsQyxJQUFNQyxnQkFBZ0IsR0FBRyxXQUFXO0VBQ3BDLElBQU1DLGlCQUFpQixHQUFHLFlBQVk7RUFDdEMsSUFBTUMsc0JBQXNCLEdBQUcsR0FBRyxDQUFDLENBQUM7O0VBRXBDLElBQU1DLFVBQVUsR0FBRyxNQUFNO0VBQ3pCLElBQU1DLFVBQVUsR0FBRyxNQUFNO0VBQ3pCLElBQU1DLGNBQWMsR0FBRyxNQUFNO0VBQzdCLElBQU1DLGVBQWUsR0FBRyxPQUFPO0VBQy9CLElBQU1DLFdBQVcsV0FBQWphLE1BQUEsQ0FBV3daLFdBQVcsQ0FBRTtFQUN6QyxJQUFNVSxVQUFVLFVBQUFsYSxNQUFBLENBQVV3WixXQUFXLENBQUU7RUFDdkMsSUFBTVcsZUFBZSxhQUFBbmEsTUFBQSxDQUFhd1osV0FBVyxDQUFFO0VBQy9DLElBQU1ZLGtCQUFrQixnQkFBQXBhLE1BQUEsQ0FBZ0J3WixXQUFXLENBQUU7RUFDckQsSUFBTWEsa0JBQWtCLGdCQUFBcmEsTUFBQSxDQUFnQndaLFdBQVcsQ0FBRTtFQUNyRCxJQUFNYyxnQkFBZ0IsZUFBQXRhLE1BQUEsQ0FBZXdaLFdBQVcsQ0FBRTtFQUNsRCxJQUFNZSxxQkFBcUIsVUFBQXZhLE1BQUEsQ0FBVXdaLFdBQVcsRUFBQXhaLE1BQUEsQ0FBR3laLGNBQWMsQ0FBRTtFQUNuRSxJQUFNZSxzQkFBc0IsV0FBQXhhLE1BQUEsQ0FBV3daLFdBQVcsRUFBQXhaLE1BQUEsQ0FBR3laLGNBQWMsQ0FBRTtFQUNyRSxJQUFNZ0IsbUJBQW1CLEdBQUcsVUFBVTtFQUN0QyxJQUFNQyxtQkFBbUIsR0FBRyxRQUFRO0VBQ3BDLElBQU1DLGdCQUFnQixHQUFHLE9BQU87RUFDaEMsSUFBTUMsY0FBYyxHQUFHLG1CQUFtQjtFQUMxQyxJQUFNQyxnQkFBZ0IsR0FBRyxxQkFBcUI7RUFDOUMsSUFBTUMsZUFBZSxHQUFHLG9CQUFvQjtFQUM1QyxJQUFNQyxlQUFlLEdBQUcsb0JBQW9CO0VBQzVDLElBQU1DLGVBQWUsR0FBRyxTQUFTO0VBQ2pDLElBQU1DLGFBQWEsR0FBRyxnQkFBZ0I7RUFDdEMsSUFBTUMsb0JBQW9CLEdBQUdGLGVBQWUsR0FBR0MsYUFBYTtFQUM1RCxJQUFNRSxpQkFBaUIsR0FBRyxvQkFBb0I7RUFDOUMsSUFBTUMsbUJBQW1CLEdBQUcsc0JBQXNCO0VBQ2xELElBQU1DLG1CQUFtQixHQUFHLHFDQUFxQztFQUNqRSxJQUFNQyxrQkFBa0IsR0FBRywyQkFBMkI7RUFDdEQsSUFBTUMsZ0JBQWdCLElBQUEzYSxpQkFBQSxPQUFBNGEsZUFBQSxDQUFBNWEsaUJBQUEsRUFDbkI4WSxnQkFBZ0IsRUFBR00sZUFBZSxHQUFBd0IsZUFBQSxDQUFBNWEsaUJBQUEsRUFDbEMrWSxpQkFBaUIsRUFBR0ksY0FBYyxHQUFBblosaUJBQUEsQ0FDcEM7RUFDRCxJQUFNNmEsU0FBUyxHQUFHO0lBQ2hCQyxRQUFRLEVBQUUsSUFBSTtJQUNkQyxRQUFRLEVBQUUsSUFBSTtJQUNkQyxLQUFLLEVBQUUsT0FBTztJQUNkQyxJQUFJLEVBQUUsS0FBSztJQUNYQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxJQUFJLEVBQUU7RUFDUixDQUFDO0VBQ0QsSUFBTUMsYUFBYSxHQUFHO0lBQ3BCTixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCO0lBQ0FDLFFBQVEsRUFBRSxTQUFTO0lBQ25CQyxLQUFLLEVBQUUsa0JBQWtCO0lBQ3pCQyxJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCQyxLQUFLLEVBQUUsU0FBUztJQUNoQkMsSUFBSSxFQUFFO0VBQ1IsQ0FBQzs7RUFFRDtBQUNGO0FBQ0E7RUFGRSxJQUlNRSxRQUFRLDBCQUFBQyxlQUFBO0lBQUFuZSxTQUFBLENBQUFrZSxRQUFBLEVBQUFDLGVBQUE7SUFBQSxJQUFBQyxPQUFBLEdBQUFsZSxZQUFBLENBQUFnZSxRQUFBO0lBQ1osU0FBQUEsU0FBWXhkLE9BQU8sRUFBRWlTLE1BQU0sRUFBRTtNQUFBLElBQUEwTCxNQUFBO01BQUFsZSxlQUFBLE9BQUErZCxRQUFBO01BQzNCRyxNQUFBLEdBQUFELE9BQUEsQ0FBQXJhLElBQUEsT0FBTXJELE9BQU8sRUFBRWlTLE1BQU07TUFDckIwTCxNQUFBLENBQUtDLFNBQVMsR0FBRyxJQUFJO01BQ3JCRCxNQUFBLENBQUtFLGNBQWMsR0FBRyxJQUFJO01BQzFCRixNQUFBLENBQUtHLFVBQVUsR0FBRyxLQUFLO01BQ3ZCSCxNQUFBLENBQUtJLFlBQVksR0FBRyxJQUFJO01BQ3hCSixNQUFBLENBQUtLLFlBQVksR0FBRyxJQUFJO01BQ3hCTCxNQUFBLENBQUtNLGtCQUFrQixHQUFHcEosY0FBYyxDQUFDRyxPQUFPLENBQUMySCxtQkFBbUIsRUFBRWdCLE1BQUEsQ0FBS2hLLFFBQVEsQ0FBQztNQUNwRmdLLE1BQUEsQ0FBS08sa0JBQWtCLEVBQUU7TUFDekIsSUFBSVAsTUFBQSxDQUFLL0osT0FBTyxDQUFDd0osSUFBSSxLQUFLcEIsbUJBQW1CLEVBQUU7UUFDN0MyQixNQUFBLENBQUtRLEtBQUssRUFBRTtNQUNkO01BQUMsT0FBQVIsTUFBQTtJQUNIOztJQUVBO0lBQUEvZCxZQUFBLENBQUE0ZCxRQUFBO01BQUEzZCxHQUFBO01BQUFDLEtBQUE7TUFXQTtNQUNBLFNBQUE0VixLQUFBLEVBQU87UUFDTCxJQUFJLENBQUMwSSxNQUFNLENBQUNoRCxVQUFVLENBQUM7TUFDekI7SUFBQztNQUFBdmIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXVlLGdCQUFBLEVBQWtCO1FBQ2hCO1FBQ0E7UUFDQTtRQUNBLElBQUksQ0FBQzdkLFFBQVEsQ0FBQzhkLE1BQU0sSUFBSXZaLFNBQVMsQ0FBQyxJQUFJLENBQUM0TyxRQUFRLENBQUMsRUFBRTtVQUNoRCxJQUFJLENBQUMrQixJQUFJLEVBQUU7UUFDYjtNQUNGO0lBQUM7TUFBQTdWLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF5VixLQUFBLEVBQU87UUFDTCxJQUFJLENBQUM2SSxNQUFNLENBQUMvQyxVQUFVLENBQUM7TUFDekI7SUFBQztNQUFBeGIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXFkLE1BQUEsRUFBUTtRQUNOLElBQUksSUFBSSxDQUFDVyxVQUFVLEVBQUU7VUFDbkJ2WixvQkFBb0IsQ0FBQyxJQUFJLENBQUNvUCxRQUFRLENBQUM7UUFDckM7UUFDQSxJQUFJLENBQUM0SyxjQUFjLEVBQUU7TUFDdkI7SUFBQztNQUFBMWUsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXFlLE1BQUEsRUFBUTtRQUFBLElBQUFLLE1BQUE7UUFDTixJQUFJLENBQUNELGNBQWMsRUFBRTtRQUNyQixJQUFJLENBQUNFLGVBQWUsRUFBRTtRQUN0QixJQUFJLENBQUNiLFNBQVMsR0FBR2MsV0FBVyxDQUFDO1VBQUEsT0FBTUYsTUFBSSxDQUFDSCxlQUFlLEVBQUU7UUFBQSxHQUFFLElBQUksQ0FBQ3pLLE9BQU8sQ0FBQ3FKLFFBQVEsQ0FBQztNQUNuRjtJQUFDO01BQUFwZCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBNmUsa0JBQUEsRUFBb0I7UUFBQSxJQUFBQyxNQUFBO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUNoTCxPQUFPLENBQUN3SixJQUFJLEVBQUU7VUFDdEI7UUFDRjtRQUNBLElBQUksSUFBSSxDQUFDVSxVQUFVLEVBQUU7VUFDbkJuVCxZQUFZLENBQUNnRCxHQUFHLENBQUMsSUFBSSxDQUFDZ0csUUFBUSxFQUFFOEgsVUFBVSxFQUFFO1lBQUEsT0FBTW1ELE1BQUksQ0FBQ1QsS0FBSyxFQUFFO1VBQUEsRUFBQztVQUMvRDtRQUNGO1FBQ0EsSUFBSSxDQUFDQSxLQUFLLEVBQUU7TUFDZDtJQUFDO01BQUF0ZSxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBK2UsR0FBR3hWLEtBQUssRUFBRTtRQUFBLElBQUF5VixNQUFBO1FBQ1IsSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsU0FBUyxFQUFFO1FBQzlCLElBQUkzVixLQUFLLEdBQUcwVixLQUFLLENBQUNqZSxNQUFNLEdBQUcsQ0FBQyxJQUFJdUksS0FBSyxHQUFHLENBQUMsRUFBRTtVQUN6QztRQUNGO1FBQ0EsSUFBSSxJQUFJLENBQUN5VSxVQUFVLEVBQUU7VUFDbkJuVCxZQUFZLENBQUNnRCxHQUFHLENBQUMsSUFBSSxDQUFDZ0csUUFBUSxFQUFFOEgsVUFBVSxFQUFFO1lBQUEsT0FBTXFELE1BQUksQ0FBQ0QsRUFBRSxDQUFDeFYsS0FBSyxDQUFDO1VBQUEsRUFBQztVQUNqRTtRQUNGO1FBQ0EsSUFBTTRWLFdBQVcsR0FBRyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNDLFVBQVUsRUFBRSxDQUFDO1FBQ3pELElBQUlGLFdBQVcsS0FBSzVWLEtBQUssRUFBRTtVQUN6QjtRQUNGO1FBQ0EsSUFBTStWLEtBQUssR0FBRy9WLEtBQUssR0FBRzRWLFdBQVcsR0FBRzdELFVBQVUsR0FBR0MsVUFBVTtRQUMzRCxJQUFJLENBQUMrQyxNQUFNLENBQUNnQixLQUFLLEVBQUVMLEtBQUssQ0FBQzFWLEtBQUssQ0FBQyxDQUFDO01BQ2xDO0lBQUM7TUFBQXhKLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFpVSxRQUFBLEVBQVU7UUFDUixJQUFJLElBQUksQ0FBQ2lLLFlBQVksRUFBRTtVQUNyQixJQUFJLENBQUNBLFlBQVksQ0FBQ2pLLE9BQU8sRUFBRTtRQUM3QjtRQUNBc0wsSUFBQSxDQUFBQyxlQUFBLENBQUE5QixRQUFBLENBQUFyYSxTQUFBLG9CQUFBRSxJQUFBO01BQ0Y7O01BRUE7SUFBQTtNQUFBeEQsR0FBQTtNQUFBQyxLQUFBLEVBQ0EsU0FBQXFTLGtCQUFrQkYsTUFBTSxFQUFFO1FBQ3hCQSxNQUFNLENBQUNzTixlQUFlLEdBQUd0TixNQUFNLENBQUNnTCxRQUFRO1FBQ3hDLE9BQU9oTCxNQUFNO01BQ2Y7SUFBQztNQUFBcFMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW9lLG1CQUFBLEVBQXFCO1FBQUEsSUFBQXNCLE1BQUE7UUFDbkIsSUFBSSxJQUFJLENBQUM1TCxPQUFPLENBQUNzSixRQUFRLEVBQUU7VUFDekJ2UyxZQUFZLENBQUMrQyxFQUFFLENBQUMsSUFBSSxDQUFDaUcsUUFBUSxFQUFFK0gsZUFBZSxFQUFFLFVBQUFuUixLQUFLO1lBQUEsT0FBSWlWLE1BQUksQ0FBQ0MsUUFBUSxDQUFDbFYsS0FBSyxDQUFDO1VBQUEsRUFBQztRQUNoRjtRQUNBLElBQUksSUFBSSxDQUFDcUosT0FBTyxDQUFDdUosS0FBSyxLQUFLLE9BQU8sRUFBRTtVQUNsQ3hTLFlBQVksQ0FBQytDLEVBQUUsQ0FBQyxJQUFJLENBQUNpRyxRQUFRLEVBQUVnSSxrQkFBa0IsRUFBRTtZQUFBLE9BQU02RCxNQUFJLENBQUNyQyxLQUFLLEVBQUU7VUFBQSxFQUFDO1VBQ3RFeFMsWUFBWSxDQUFDK0MsRUFBRSxDQUFDLElBQUksQ0FBQ2lHLFFBQVEsRUFBRWlJLGtCQUFrQixFQUFFO1lBQUEsT0FBTTRELE1BQUksQ0FBQ2IsaUJBQWlCLEVBQUU7VUFBQSxFQUFDO1FBQ3BGO1FBQ0EsSUFBSSxJQUFJLENBQUMvSyxPQUFPLENBQUN5SixLQUFLLElBQUloRSxLQUFLLENBQUNJLFdBQVcsRUFBRSxFQUFFO1VBQzdDLElBQUksQ0FBQ2lHLHVCQUF1QixFQUFFO1FBQ2hDO01BQ0Y7SUFBQztNQUFBN2YsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTRmLHdCQUFBLEVBQTBCO1FBQUEsSUFBQUMsT0FBQTtRQUFBLElBQUFDLFVBQUEsR0FBQTNVLDBCQUFBLENBQ040SixjQUFjLENBQUM5SSxJQUFJLENBQUMyUSxpQkFBaUIsRUFBRSxJQUFJLENBQUMvSSxRQUFRLENBQUM7VUFBQWtNLE1BQUE7UUFBQTtVQUF2RSxLQUFBRCxVQUFBLENBQUF6VSxDQUFBLE1BQUEwVSxNQUFBLEdBQUFELFVBQUEsQ0FBQXhVLENBQUEsSUFBQUMsSUFBQSxHQUF5RTtZQUFBLElBQTlEeVUsR0FBRyxHQUFBRCxNQUFBLENBQUEvZixLQUFBO1lBQ1o2SyxZQUFZLENBQUMrQyxFQUFFLENBQUNvUyxHQUFHLEVBQUVqRSxnQkFBZ0IsRUFBRSxVQUFBdFIsS0FBSztjQUFBLE9BQUlBLEtBQUssQ0FBQzZFLGNBQWMsRUFBRTtZQUFBLEVBQUM7VUFDekU7UUFBQyxTQUFBN0QsR0FBQTtVQUFBcVUsVUFBQSxDQUFBcFUsQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQXFVLFVBQUEsQ0FBQW5VLENBQUE7UUFBQTtRQUNELElBQU1zVSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO1VBQ3hCLElBQUlKLE9BQUksQ0FBQy9MLE9BQU8sQ0FBQ3VKLEtBQUssS0FBSyxPQUFPLEVBQUU7WUFDbEM7VUFDRjs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQXdDLE9BQUksQ0FBQ3hDLEtBQUssRUFBRTtVQUNaLElBQUl3QyxPQUFJLENBQUM1QixZQUFZLEVBQUU7WUFDckJpQyxZQUFZLENBQUNMLE9BQUksQ0FBQzVCLFlBQVksQ0FBQztVQUNqQztVQUNBNEIsT0FBSSxDQUFDNUIsWUFBWSxHQUFHalYsVUFBVSxDQUFDO1lBQUEsT0FBTTZXLE9BQUksQ0FBQ2hCLGlCQUFpQixFQUFFO1VBQUEsR0FBRXhELHNCQUFzQixHQUFHd0UsT0FBSSxDQUFDL0wsT0FBTyxDQUFDcUosUUFBUSxDQUFDO1FBQ2hILENBQUM7UUFDRCxJQUFNZ0QsV0FBVyxHQUFHO1VBQ2xCL0csWUFBWSxFQUFFLFNBQUFBLGFBQUE7WUFBQSxPQUFNeUcsT0FBSSxDQUFDdkIsTUFBTSxDQUFDdUIsT0FBSSxDQUFDTyxpQkFBaUIsQ0FBQzVFLGNBQWMsQ0FBQyxDQUFDO1VBQUE7VUFDdkVuQyxhQUFhLEVBQUUsU0FBQUEsY0FBQTtZQUFBLE9BQU13RyxPQUFJLENBQUN2QixNQUFNLENBQUN1QixPQUFJLENBQUNPLGlCQUFpQixDQUFDM0UsZUFBZSxDQUFDLENBQUM7VUFBQTtVQUN6RXRDLFdBQVcsRUFBRThHO1FBQ2YsQ0FBQztRQUNELElBQUksQ0FBQy9CLFlBQVksR0FBRyxJQUFJM0UsS0FBSyxDQUFDLElBQUksQ0FBQzFGLFFBQVEsRUFBRXNNLFdBQVcsQ0FBQztNQUMzRDtJQUFDO01BQUFwZ0IsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTJmLFNBQVNsVixLQUFLLEVBQUU7UUFDZCxJQUFJLGlCQUFpQixDQUFDMkksSUFBSSxDQUFDM0ksS0FBSyxDQUFDM0IsTUFBTSxDQUFDNE4sT0FBTyxDQUFDLEVBQUU7VUFDaEQ7UUFDRjtRQUNBLElBQU0rRCxTQUFTLEdBQUd1QyxnQkFBZ0IsQ0FBQ3ZTLEtBQUssQ0FBQzFLLEdBQUcsQ0FBQztRQUM3QyxJQUFJMGEsU0FBUyxFQUFFO1VBQ2JoUSxLQUFLLENBQUM2RSxjQUFjLEVBQUU7VUFDdEIsSUFBSSxDQUFDZ1AsTUFBTSxDQUFDLElBQUksQ0FBQzhCLGlCQUFpQixDQUFDM0YsU0FBUyxDQUFDLENBQUM7UUFDaEQ7TUFDRjtJQUFDO01BQUExYSxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBb2YsY0FBY2xmLE9BQU8sRUFBRTtRQUNyQixPQUFPLElBQUksQ0FBQ2dmLFNBQVMsRUFBRSxDQUFDMVYsT0FBTyxDQUFDdEosT0FBTyxDQUFDO01BQzFDO0lBQUM7TUFBQUgsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXFnQiwyQkFBMkI5VyxLQUFLLEVBQUU7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQzRVLGtCQUFrQixFQUFFO1VBQzVCO1FBQ0Y7UUFDQSxJQUFNbUMsZUFBZSxHQUFHdkwsY0FBYyxDQUFDRyxPQUFPLENBQUN1SCxlQUFlLEVBQUUsSUFBSSxDQUFDMEIsa0JBQWtCLENBQUM7UUFDeEZtQyxlQUFlLENBQUMxYSxTQUFTLENBQUMrSyxNQUFNLENBQUN3TCxtQkFBbUIsQ0FBQztRQUNyRG1FLGVBQWUsQ0FBQ2hQLGVBQWUsQ0FBQyxjQUFjLENBQUM7UUFDL0MsSUFBTWlQLGtCQUFrQixHQUFHeEwsY0FBYyxDQUFDRyxPQUFPLHdCQUFBelQsTUFBQSxDQUF1QjhILEtBQUssVUFBTSxJQUFJLENBQUM0VSxrQkFBa0IsQ0FBQztRQUMzRyxJQUFJb0Msa0JBQWtCLEVBQUU7VUFDdEJBLGtCQUFrQixDQUFDM2EsU0FBUyxDQUFDK1UsR0FBRyxDQUFDd0IsbUJBQW1CLENBQUM7VUFDckRvRSxrQkFBa0IsQ0FBQ25QLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDO1FBQ3pEO01BQ0Y7SUFBQztNQUFBclIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTJlLGdCQUFBLEVBQWtCO1FBQ2hCLElBQU16ZSxPQUFPLEdBQUcsSUFBSSxDQUFDNmQsY0FBYyxJQUFJLElBQUksQ0FBQ3NCLFVBQVUsRUFBRTtRQUN4RCxJQUFJLENBQUNuZixPQUFPLEVBQUU7VUFDWjtRQUNGO1FBQ0EsSUFBTXNnQixlQUFlLEdBQUduYyxNQUFNLENBQUNvYyxRQUFRLENBQUN2Z0IsT0FBTyxDQUFDOEYsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3JGLElBQUksQ0FBQzhOLE9BQU8sQ0FBQ3FKLFFBQVEsR0FBR3FELGVBQWUsSUFBSSxJQUFJLENBQUMxTSxPQUFPLENBQUMyTCxlQUFlO01BQ3pFO0lBQUM7TUFBQTFmLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFzZSxPQUFPZ0IsS0FBSyxFQUFrQjtRQUFBLElBQUFvQixPQUFBO1FBQUEsSUFBaEJ4Z0IsT0FBTyxHQUFBTCxTQUFBLENBQUFtQixNQUFBLFFBQUFuQixTQUFBLFFBQUFzRCxTQUFBLEdBQUF0RCxTQUFBLE1BQUcsSUFBSTtRQUMxQixJQUFJLElBQUksQ0FBQ21lLFVBQVUsRUFBRTtVQUNuQjtRQUNGO1FBQ0EsSUFBTTdVLGFBQWEsR0FBRyxJQUFJLENBQUNrVyxVQUFVLEVBQUU7UUFDdkMsSUFBTXNCLE1BQU0sR0FBR3JCLEtBQUssS0FBS2hFLFVBQVU7UUFDbkMsSUFBTXNGLFdBQVcsR0FBRzFnQixPQUFPLElBQUkrSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUNpVyxTQUFTLEVBQUUsRUFBRS9WLGFBQWEsRUFBRXdYLE1BQU0sRUFBRSxJQUFJLENBQUM3TSxPQUFPLENBQUMwSixJQUFJLENBQUM7UUFDL0csSUFBSW9ELFdBQVcsS0FBS3pYLGFBQWEsRUFBRTtVQUNqQztRQUNGO1FBQ0EsSUFBTTBYLGdCQUFnQixHQUFHLElBQUksQ0FBQ3pCLGFBQWEsQ0FBQ3dCLFdBQVcsQ0FBQztRQUN4RCxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBR25NLFNBQVMsRUFBSTtVQUNoQyxPQUFPOUosWUFBWSxDQUFDK0QsT0FBTyxDQUFDOFIsT0FBSSxDQUFDN00sUUFBUSxFQUFFYyxTQUFTLEVBQUU7WUFDcEQ3SCxhQUFhLEVBQUU4VCxXQUFXO1lBQzFCbkcsU0FBUyxFQUFFaUcsT0FBSSxDQUFDSyxpQkFBaUIsQ0FBQ3pCLEtBQUssQ0FBQztZQUN4QzVPLElBQUksRUFBRWdRLE9BQUksQ0FBQ3RCLGFBQWEsQ0FBQ2pXLGFBQWEsQ0FBQztZQUN2QzRWLEVBQUUsRUFBRThCO1VBQ04sQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUNELElBQU1HLFVBQVUsR0FBR0YsWUFBWSxDQUFDcEYsV0FBVyxDQUFDO1FBQzVDLElBQUlzRixVQUFVLENBQUNoUyxnQkFBZ0IsRUFBRTtVQUMvQjtRQUNGO1FBQ0EsSUFBSSxDQUFDN0YsYUFBYSxJQUFJLENBQUN5WCxXQUFXLEVBQUU7VUFDbEM7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxJQUFNSyxTQUFTLEdBQUcvVCxPQUFPLENBQUMsSUFBSSxDQUFDNFEsU0FBUyxDQUFDO1FBQ3pDLElBQUksQ0FBQ1QsS0FBSyxFQUFFO1FBQ1osSUFBSSxDQUFDVyxVQUFVLEdBQUcsSUFBSTtRQUN0QixJQUFJLENBQUNxQywwQkFBMEIsQ0FBQ1EsZ0JBQWdCLENBQUM7UUFDakQsSUFBSSxDQUFDOUMsY0FBYyxHQUFHNkMsV0FBVztRQUNqQyxJQUFNTSxvQkFBb0IsR0FBR1AsTUFBTSxHQUFHckUsZ0JBQWdCLEdBQUdELGNBQWM7UUFDdkUsSUFBTThFLGNBQWMsR0FBR1IsTUFBTSxHQUFHcEUsZUFBZSxHQUFHQyxlQUFlO1FBQ2pFb0UsV0FBVyxDQUFDaGIsU0FBUyxDQUFDK1UsR0FBRyxDQUFDd0csY0FBYyxDQUFDO1FBQ3pDM2EsTUFBTSxDQUFDb2EsV0FBVyxDQUFDO1FBQ25CelgsYUFBYSxDQUFDdkQsU0FBUyxDQUFDK1UsR0FBRyxDQUFDdUcsb0JBQW9CLENBQUM7UUFDakROLFdBQVcsQ0FBQ2hiLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQ3VHLG9CQUFvQixDQUFDO1FBQy9DLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUEsRUFBUztVQUM3QlIsV0FBVyxDQUFDaGIsU0FBUyxDQUFDK0ssTUFBTSxDQUFDdVEsb0JBQW9CLEVBQUVDLGNBQWMsQ0FBQztVQUNsRVAsV0FBVyxDQUFDaGIsU0FBUyxDQUFDK1UsR0FBRyxDQUFDd0IsbUJBQW1CLENBQUM7VUFDOUNoVCxhQUFhLENBQUN2RCxTQUFTLENBQUMrSyxNQUFNLENBQUN3TCxtQkFBbUIsRUFBRWdGLGNBQWMsRUFBRUQsb0JBQW9CLENBQUM7VUFDekZSLE9BQUksQ0FBQzFDLFVBQVUsR0FBRyxLQUFLO1VBQ3ZCOEMsWUFBWSxDQUFDbkYsVUFBVSxDQUFDO1FBQzFCLENBQUM7UUFDRCxJQUFJLENBQUNwSCxjQUFjLENBQUM2TSxnQkFBZ0IsRUFBRWpZLGFBQWEsRUFBRSxJQUFJLENBQUNrWSxXQUFXLEVBQUUsQ0FBQztRQUN4RSxJQUFJSixTQUFTLEVBQUU7VUFDYixJQUFJLENBQUM1QyxLQUFLLEVBQUU7UUFDZDtNQUNGO0lBQUM7TUFBQXRlLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFxaEIsWUFBQSxFQUFjO1FBQ1osT0FBTyxJQUFJLENBQUN4TixRQUFRLENBQUNqTyxTQUFTLENBQUNDLFFBQVEsQ0FBQ3VXLGdCQUFnQixDQUFDO01BQzNEO0lBQUM7TUFBQXJjLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFxZixXQUFBLEVBQWE7UUFDWCxPQUFPdEssY0FBYyxDQUFDRyxPQUFPLENBQUN5SCxvQkFBb0IsRUFBRSxJQUFJLENBQUM5SSxRQUFRLENBQUM7TUFDcEU7SUFBQztNQUFBOVQsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWtmLFVBQUEsRUFBWTtRQUNWLE9BQU9uSyxjQUFjLENBQUM5SSxJQUFJLENBQUN5USxhQUFhLEVBQUUsSUFBSSxDQUFDN0ksUUFBUSxDQUFDO01BQzFEO0lBQUM7TUFBQTlULEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF5ZSxlQUFBLEVBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUNYLFNBQVMsRUFBRTtVQUNsQndELGFBQWEsQ0FBQyxJQUFJLENBQUN4RCxTQUFTLENBQUM7VUFDN0IsSUFBSSxDQUFDQSxTQUFTLEdBQUcsSUFBSTtRQUN2QjtNQUNGO0lBQUM7TUFBQS9kLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFvZ0Isa0JBQWtCM0YsU0FBUyxFQUFFO1FBQzNCLElBQUlwVCxLQUFLLEVBQUUsRUFBRTtVQUNYLE9BQU9vVCxTQUFTLEtBQUtlLGNBQWMsR0FBR0QsVUFBVSxHQUFHRCxVQUFVO1FBQy9EO1FBQ0EsT0FBT2IsU0FBUyxLQUFLZSxjQUFjLEdBQUdGLFVBQVUsR0FBR0MsVUFBVTtNQUMvRDtJQUFDO01BQUF4YixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBK2dCLGtCQUFrQnpCLEtBQUssRUFBRTtRQUN2QixJQUFJalksS0FBSyxFQUFFLEVBQUU7VUFDWCxPQUFPaVksS0FBSyxLQUFLL0QsVUFBVSxHQUFHQyxjQUFjLEdBQUdDLGVBQWU7UUFDaEU7UUFDQSxPQUFPNkQsS0FBSyxLQUFLL0QsVUFBVSxHQUFHRSxlQUFlLEdBQUdELGNBQWM7TUFDaEU7O01BRUE7SUFBQTtNQUFBemIsR0FBQTtNQUFBaVEsR0FBQSxFQXJPQSxTQUFBQSxJQUFBLEVBQXFCO1FBQ25CLE9BQU9rTixTQUFTO01BQ2xCO0lBQUM7TUFBQW5kLEdBQUE7TUFBQWlRLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQXlCO1FBQ3ZCLE9BQU95TixhQUFhO01BQ3RCO0lBQUM7TUFBQTFkLEdBQUE7TUFBQWlRLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQWtCO1FBQ2hCLE9BQU8rSyxNQUFNO01BQ2Y7SUFBQztNQUFBaGIsR0FBQTtNQUFBQyxLQUFBLEVBOE5ELFNBQUE4SCxnQkFBdUJxSyxNQUFNLEVBQUU7UUFDN0IsT0FBTyxJQUFJLENBQUNzRixJQUFJLENBQUMsWUFBWTtVQUMzQixJQUFNQyxJQUFJLEdBQUdnRyxRQUFRLENBQUNoSixtQkFBbUIsQ0FBQyxJQUFJLEVBQUV2QyxNQUFNLENBQUM7VUFDdkQsSUFBSSxPQUFPQSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCdUYsSUFBSSxDQUFDcUgsRUFBRSxDQUFDNU0sTUFBTSxDQUFDO1lBQ2Y7VUFDRjtVQUNBLElBQUksT0FBT0EsTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM5QixJQUFJdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLEtBQUtoUCxTQUFTLElBQUlnUCxNQUFNLENBQUNqRSxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUlpRSxNQUFNLEtBQUssYUFBYSxFQUFFO2NBQ3BGLE1BQU0sSUFBSWtCLFNBQVMsc0JBQUE1UixNQUFBLENBQXFCMFEsTUFBTSxRQUFJO1lBQ3BEO1lBQ0F1RixJQUFJLENBQUN2RixNQUFNLENBQUMsRUFBRTtVQUNoQjtRQUNGLENBQUMsQ0FBQztNQUNKO0lBQUM7SUFBQSxPQUFBdUwsUUFBQTtFQUFBLEVBcFFvQmpLLGFBQWE7RUF1UXBDO0FBQ0Y7QUFDQTtFQUVFNUksWUFBWSxDQUFDK0MsRUFBRSxDQUFDbE4sUUFBUSxFQUFFdWIsc0JBQXNCLEVBQUVhLG1CQUFtQixFQUFFLFVBQVVyUyxLQUFLLEVBQUU7SUFDdEYsSUFBTTNCLE1BQU0sR0FBR2lNLGNBQWMsQ0FBQ3FCLHNCQUFzQixDQUFDLElBQUksQ0FBQztJQUMxRCxJQUFJLENBQUN0TixNQUFNLElBQUksQ0FBQ0EsTUFBTSxDQUFDbEQsU0FBUyxDQUFDQyxRQUFRLENBQUNxVyxtQkFBbUIsQ0FBQyxFQUFFO01BQzlEO0lBQ0Y7SUFDQXpSLEtBQUssQ0FBQzZFLGNBQWMsRUFBRTtJQUN0QixJQUFNaVMsUUFBUSxHQUFHN0QsUUFBUSxDQUFDaEosbUJBQW1CLENBQUM1TCxNQUFNLENBQUM7SUFDckQsSUFBTTBZLFVBQVUsR0FBRyxJQUFJLENBQUN4YixZQUFZLENBQUMsa0JBQWtCLENBQUM7SUFDeEQsSUFBSXdiLFVBQVUsRUFBRTtNQUNkRCxRQUFRLENBQUN4QyxFQUFFLENBQUN5QyxVQUFVLENBQUM7TUFDdkJELFFBQVEsQ0FBQzFDLGlCQUFpQixFQUFFO01BQzVCO0lBQ0Y7SUFDQSxJQUFJM04sV0FBVyxDQUFDYyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssTUFBTSxFQUFFO01BQzFEdVAsUUFBUSxDQUFDM0wsSUFBSSxFQUFFO01BQ2YyTCxRQUFRLENBQUMxQyxpQkFBaUIsRUFBRTtNQUM1QjtJQUNGO0lBQ0EwQyxRQUFRLENBQUM5TCxJQUFJLEVBQUU7SUFDZjhMLFFBQVEsQ0FBQzFDLGlCQUFpQixFQUFFO0VBQzlCLENBQUMsQ0FBQztFQUNGaFUsWUFBWSxDQUFDK0MsRUFBRSxDQUFDakwsTUFBTSxFQUFFcVoscUJBQXFCLEVBQUUsWUFBTTtJQUNuRCxJQUFNeUYsU0FBUyxHQUFHMU0sY0FBYyxDQUFDOUksSUFBSSxDQUFDOFEsa0JBQWtCLENBQUM7SUFBQyxJQUFBMkUsVUFBQSxHQUFBdlcsMEJBQUEsQ0FDbkNzVyxTQUFTO01BQUFFLE1BQUE7SUFBQTtNQUFoQyxLQUFBRCxVQUFBLENBQUFyVyxDQUFBLE1BQUFzVyxNQUFBLEdBQUFELFVBQUEsQ0FBQXBXLENBQUEsSUFBQUMsSUFBQSxHQUFrQztRQUFBLElBQXZCZ1csUUFBUSxHQUFBSSxNQUFBLENBQUEzaEIsS0FBQTtRQUNqQjBkLFFBQVEsQ0FBQ2hKLG1CQUFtQixDQUFDNk0sUUFBUSxDQUFDO01BQ3hDO0lBQUMsU0FBQTlWLEdBQUE7TUFBQWlXLFVBQUEsQ0FBQWhXLENBQUEsQ0FBQUQsR0FBQTtJQUFBO01BQUFpVyxVQUFBLENBQUEvVixDQUFBO0lBQUE7RUFDSCxDQUFDLENBQUM7O0VBRUY7QUFDRjtBQUNBOztFQUVFcEUsa0JBQWtCLENBQUNtVyxRQUFRLENBQUM7O0VBRTVCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsSUFBTWtFLE1BQU0sR0FBRyxVQUFVO0VBQ3pCLElBQU1DLFVBQVUsR0FBRyxhQUFhO0VBQ2hDLElBQU1DLFdBQVcsT0FBQXJnQixNQUFBLENBQU9vZ0IsVUFBVSxDQUFFO0VBQ3BDLElBQU1FLGNBQWMsR0FBRyxXQUFXO0VBQ2xDLElBQU1DLFlBQVksVUFBQXZnQixNQUFBLENBQVVxZ0IsV0FBVyxDQUFFO0VBQ3pDLElBQU1HLGFBQWEsV0FBQXhnQixNQUFBLENBQVdxZ0IsV0FBVyxDQUFFO0VBQzNDLElBQU1JLFlBQVksVUFBQXpnQixNQUFBLENBQVVxZ0IsV0FBVyxDQUFFO0VBQ3pDLElBQU1LLGNBQWMsWUFBQTFnQixNQUFBLENBQVlxZ0IsV0FBVyxDQUFFO0VBQzdDLElBQU1NLHNCQUFzQixXQUFBM2dCLE1BQUEsQ0FBV3FnQixXQUFXLEVBQUFyZ0IsTUFBQSxDQUFHc2dCLGNBQWMsQ0FBRTtFQUNyRSxJQUFNTSxpQkFBaUIsR0FBRyxNQUFNO0VBQ2hDLElBQU1DLG1CQUFtQixHQUFHLFVBQVU7RUFDdEMsSUFBTUMscUJBQXFCLEdBQUcsWUFBWTtFQUMxQyxJQUFNQyxvQkFBb0IsR0FBRyxXQUFXO0VBQ3hDLElBQU1DLDBCQUEwQixjQUFBaGhCLE1BQUEsQ0FBYzZnQixtQkFBbUIsUUFBQTdnQixNQUFBLENBQUs2Z0IsbUJBQW1CLENBQUU7RUFDM0YsSUFBTUkscUJBQXFCLEdBQUcscUJBQXFCO0VBQ25ELElBQU1DLEtBQUssR0FBRyxPQUFPO0VBQ3JCLElBQU1DLE1BQU0sR0FBRyxRQUFRO0VBQ3ZCLElBQU1DLGdCQUFnQixHQUFHLHNDQUFzQztFQUMvRCxJQUFNQyxzQkFBc0IsR0FBRyw2QkFBNkI7RUFDNUQsSUFBTUMsU0FBUyxHQUFHO0lBQ2hCQyxNQUFNLEVBQUUsSUFBSTtJQUNaM0ssTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUNELElBQU00SyxhQUFhLEdBQUc7SUFDcEJELE1BQU0sRUFBRSxnQkFBZ0I7SUFDeEIzSyxNQUFNLEVBQUU7RUFDVixDQUFDOztFQUVEO0FBQ0Y7QUFDQTtFQUZFLElBSU02SyxRQUFRLDBCQUFBQyxlQUFBO0lBQUEzakIsU0FBQSxDQUFBMGpCLFFBQUEsRUFBQUMsZUFBQTtJQUFBLElBQUFDLE9BQUEsR0FBQTFqQixZQUFBLENBQUF3akIsUUFBQTtJQUNaLFNBQUFBLFNBQVloakIsT0FBTyxFQUFFaVMsTUFBTSxFQUFFO01BQUEsSUFBQWtSLE9BQUE7TUFBQTFqQixlQUFBLE9BQUF1akIsUUFBQTtNQUMzQkcsT0FBQSxHQUFBRCxPQUFBLENBQUE3ZixJQUFBLE9BQU1yRCxPQUFPLEVBQUVpUyxNQUFNO01BQ3JCa1IsT0FBQSxDQUFLQyxnQkFBZ0IsR0FBRyxLQUFLO01BQzdCRCxPQUFBLENBQUtFLGFBQWEsR0FBRyxFQUFFO01BQ3ZCLElBQU1DLFVBQVUsR0FBR3pPLGNBQWMsQ0FBQzlJLElBQUksQ0FBQzZXLHNCQUFzQixDQUFDO01BQUMsSUFBQVcsVUFBQSxHQUFBdFksMEJBQUEsQ0FDNUNxWSxVQUFVO1FBQUFFLE1BQUE7TUFBQTtRQUE3QixLQUFBRCxVQUFBLENBQUFwWSxDQUFBLE1BQUFxWSxNQUFBLEdBQUFELFVBQUEsQ0FBQW5ZLENBQUEsSUFBQUMsSUFBQSxHQUErQjtVQUFBLElBQXBCb1ksSUFBSSxHQUFBRCxNQUFBLENBQUExakIsS0FBQTtVQUNiLElBQU0wQyxRQUFRLEdBQUdxUyxjQUFjLENBQUNvQixzQkFBc0IsQ0FBQ3dOLElBQUksQ0FBQztVQUM1RCxJQUFNQyxhQUFhLEdBQUc3TyxjQUFjLENBQUM5SSxJQUFJLENBQUN2SixRQUFRLENBQUMsQ0FBQ2lQLE1BQU0sQ0FBQyxVQUFBa1MsWUFBWTtZQUFBLE9BQUlBLFlBQVksS0FBS1IsT0FBQSxDQUFLeFAsUUFBUTtVQUFBLEVBQUM7VUFDMUcsSUFBSW5SLFFBQVEsS0FBSyxJQUFJLElBQUlraEIsYUFBYSxDQUFDNWlCLE1BQU0sRUFBRTtZQUM3Q3FpQixPQUFBLENBQUtFLGFBQWEsQ0FBQ25jLElBQUksQ0FBQ3VjLElBQUksQ0FBQztVQUMvQjtRQUNGO01BQUMsU0FBQWxZLEdBQUE7UUFBQWdZLFVBQUEsQ0FBQS9YLENBQUEsQ0FBQUQsR0FBQTtNQUFBO1FBQUFnWSxVQUFBLENBQUE5WCxDQUFBO01BQUE7TUFDRDBYLE9BQUEsQ0FBS1MsbUJBQW1CLEVBQUU7TUFDMUIsSUFBSSxDQUFDVCxPQUFBLENBQUt2UCxPQUFPLENBQUNrUCxNQUFNLEVBQUU7UUFDeEJLLE9BQUEsQ0FBS1UseUJBQXlCLENBQUNWLE9BQUEsQ0FBS0UsYUFBYSxFQUFFRixPQUFBLENBQUtXLFFBQVEsRUFBRSxDQUFDO01BQ3JFO01BQ0EsSUFBSVgsT0FBQSxDQUFLdlAsT0FBTyxDQUFDdUUsTUFBTSxFQUFFO1FBQ3ZCZ0wsT0FBQSxDQUFLaEwsTUFBTSxFQUFFO01BQ2Y7TUFBQyxPQUFBZ0wsT0FBQTtJQUNIOztJQUVBO0lBQUF2akIsWUFBQSxDQUFBb2pCLFFBQUE7TUFBQW5qQixHQUFBO01BQUFDLEtBQUE7TUFXQTtNQUNBLFNBQUFxWSxPQUFBLEVBQVM7UUFDUCxJQUFJLElBQUksQ0FBQzJMLFFBQVEsRUFBRSxFQUFFO1VBQ25CLElBQUksQ0FBQ0MsSUFBSSxFQUFFO1FBQ2IsQ0FBQyxNQUFNO1VBQ0wsSUFBSSxDQUFDQyxJQUFJLEVBQUU7UUFDYjtNQUNGO0lBQUM7TUFBQW5rQixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBa2tCLEtBQUEsRUFBTztRQUFBLElBQUFDLE9BQUE7UUFDTCxJQUFJLElBQUksQ0FBQ2IsZ0JBQWdCLElBQUksSUFBSSxDQUFDVSxRQUFRLEVBQUUsRUFBRTtVQUM1QztRQUNGO1FBQ0EsSUFBSUksY0FBYyxHQUFHLEVBQUU7O1FBRXZCO1FBQ0EsSUFBSSxJQUFJLENBQUN0USxPQUFPLENBQUNrUCxNQUFNLEVBQUU7VUFDdkJvQixjQUFjLEdBQUcsSUFBSSxDQUFDQyxzQkFBc0IsQ0FBQ3hCLGdCQUFnQixDQUFDLENBQUNsUixNQUFNLENBQUMsVUFBQXpSLE9BQU87WUFBQSxPQUFJQSxPQUFPLEtBQUtpa0IsT0FBSSxDQUFDdFEsUUFBUTtVQUFBLEVBQUMsQ0FBQ21DLEdBQUcsQ0FBQyxVQUFBOVYsT0FBTztZQUFBLE9BQUlnakIsUUFBUSxDQUFDeE8sbUJBQW1CLENBQUN4VSxPQUFPLEVBQUU7Y0FDL0ptWSxNQUFNLEVBQUU7WUFDVixDQUFDLENBQUM7VUFBQSxFQUFDO1FBQ0w7UUFDQSxJQUFJK0wsY0FBYyxDQUFDcGpCLE1BQU0sSUFBSW9qQixjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUNkLGdCQUFnQixFQUFFO1VBQy9EO1FBQ0Y7UUFDQSxJQUFNZ0IsVUFBVSxHQUFHelosWUFBWSxDQUFDK0QsT0FBTyxDQUFDLElBQUksQ0FBQ2lGLFFBQVEsRUFBRW1PLFlBQVksQ0FBQztRQUNwRSxJQUFJc0MsVUFBVSxDQUFDdFYsZ0JBQWdCLEVBQUU7VUFDL0I7UUFDRjtRQUFDLElBQUF1VixVQUFBLEdBQUFwWiwwQkFBQSxDQUM0QmlaLGNBQWM7VUFBQUksTUFBQTtRQUFBO1VBQTNDLEtBQUFELFVBQUEsQ0FBQWxaLENBQUEsTUFBQW1aLE1BQUEsR0FBQUQsVUFBQSxDQUFBalosQ0FBQSxJQUFBQyxJQUFBLEdBQTZDO1lBQUEsSUFBbENrWixjQUFjLEdBQUFELE1BQUEsQ0FBQXhrQixLQUFBO1lBQ3ZCeWtCLGNBQWMsQ0FBQ1IsSUFBSSxFQUFFO1VBQ3ZCO1FBQUMsU0FBQXhZLEdBQUE7VUFBQThZLFVBQUEsQ0FBQTdZLENBQUEsQ0FBQUQsR0FBQTtRQUFBO1VBQUE4WSxVQUFBLENBQUE1WSxDQUFBO1FBQUE7UUFDRCxJQUFNK1ksU0FBUyxHQUFHLElBQUksQ0FBQ0MsYUFBYSxFQUFFO1FBQ3RDLElBQUksQ0FBQzlRLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQytLLE1BQU0sQ0FBQzJSLG1CQUFtQixDQUFDO1FBQ25ELElBQUksQ0FBQ3pPLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQzRILHFCQUFxQixDQUFDO1FBQ2xELElBQUksQ0FBQzFPLFFBQVEsQ0FBQ3RTLEtBQUssQ0FBQ21qQixTQUFTLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQ1gseUJBQXlCLENBQUMsSUFBSSxDQUFDUixhQUFhLEVBQUUsSUFBSSxDQUFDO1FBQ3hELElBQUksQ0FBQ0QsZ0JBQWdCLEdBQUcsSUFBSTtRQUM1QixJQUFNc0IsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztVQUNyQlQsT0FBSSxDQUFDYixnQkFBZ0IsR0FBRyxLQUFLO1VBQzdCYSxPQUFJLENBQUN0USxRQUFRLENBQUNqTyxTQUFTLENBQUMrSyxNQUFNLENBQUM0UixxQkFBcUIsQ0FBQztVQUNyRDRCLE9BQUksQ0FBQ3RRLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQzJILG1CQUFtQixFQUFFRCxpQkFBaUIsQ0FBQztVQUNuRThCLE9BQUksQ0FBQ3RRLFFBQVEsQ0FBQ3RTLEtBQUssQ0FBQ21qQixTQUFTLENBQUMsR0FBRyxFQUFFO1VBQ25DN1osWUFBWSxDQUFDK0QsT0FBTyxDQUFDdVYsT0FBSSxDQUFDdFEsUUFBUSxFQUFFb08sYUFBYSxDQUFDO1FBQ3BELENBQUM7UUFDRCxJQUFNNEMsb0JBQW9CLEdBQUdILFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3BSLFdBQVcsRUFBRSxHQUFHb1IsU0FBUyxDQUFDblcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFNdVcsVUFBVSxZQUFBcmpCLE1BQUEsQ0FBWW9qQixvQkFBb0IsQ0FBRTtRQUNsRCxJQUFJLENBQUN0USxjQUFjLENBQUNxUSxRQUFRLEVBQUUsSUFBSSxDQUFDL1EsUUFBUSxFQUFFLElBQUksQ0FBQztRQUNsRCxJQUFJLENBQUNBLFFBQVEsQ0FBQ3RTLEtBQUssQ0FBQ21qQixTQUFTLENBQUMsTUFBQWpqQixNQUFBLENBQU0sSUFBSSxDQUFDb1MsUUFBUSxDQUFDaVIsVUFBVSxDQUFDLE9BQUk7TUFDbkU7SUFBQztNQUFBL2tCLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFpa0IsS0FBQSxFQUFPO1FBQUEsSUFBQWMsT0FBQTtRQUNMLElBQUksSUFBSSxDQUFDekIsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUNVLFFBQVEsRUFBRSxFQUFFO1VBQzdDO1FBQ0Y7UUFDQSxJQUFNTSxVQUFVLEdBQUd6WixZQUFZLENBQUMrRCxPQUFPLENBQUMsSUFBSSxDQUFDaUYsUUFBUSxFQUFFcU8sWUFBWSxDQUFDO1FBQ3BFLElBQUlvQyxVQUFVLENBQUN0VixnQkFBZ0IsRUFBRTtVQUMvQjtRQUNGO1FBQ0EsSUFBTTBWLFNBQVMsR0FBRyxJQUFJLENBQUNDLGFBQWEsRUFBRTtRQUN0QyxJQUFJLENBQUM5USxRQUFRLENBQUN0UyxLQUFLLENBQUNtakIsU0FBUyxDQUFDLE1BQUFqakIsTUFBQSxDQUFNLElBQUksQ0FBQ29TLFFBQVEsQ0FBQ21SLHFCQUFxQixFQUFFLENBQUNOLFNBQVMsQ0FBQyxPQUFJO1FBQ3hGbGUsTUFBTSxDQUFDLElBQUksQ0FBQ3FOLFFBQVEsQ0FBQztRQUNyQixJQUFJLENBQUNBLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQzRILHFCQUFxQixDQUFDO1FBQ2xELElBQUksQ0FBQzFPLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQytLLE1BQU0sQ0FBQzJSLG1CQUFtQixFQUFFRCxpQkFBaUIsQ0FBQztRQUFDLElBQUE0QyxVQUFBLEdBQUE5WiwwQkFBQSxDQUNqRCxJQUFJLENBQUNvWSxhQUFhO1VBQUEyQixNQUFBO1FBQUE7VUFBeEMsS0FBQUQsVUFBQSxDQUFBNVosQ0FBQSxNQUFBNlosTUFBQSxHQUFBRCxVQUFBLENBQUEzWixDQUFBLElBQUFDLElBQUEsR0FBMEM7WUFBQSxJQUEvQnFELE9BQU8sR0FBQXNXLE1BQUEsQ0FBQWxsQixLQUFBO1lBQ2hCLElBQU1FLE9BQU8sR0FBRzZVLGNBQWMsQ0FBQ3FCLHNCQUFzQixDQUFDeEgsT0FBTyxDQUFDO1lBQzlELElBQUkxTyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM4akIsUUFBUSxDQUFDOWpCLE9BQU8sQ0FBQyxFQUFFO2NBQ3RDLElBQUksQ0FBQzZqQix5QkFBeUIsQ0FBQyxDQUFDblYsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2xEO1VBQ0Y7UUFBQyxTQUFBbkQsR0FBQTtVQUFBd1osVUFBQSxDQUFBdlosQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQXdaLFVBQUEsQ0FBQXRaLENBQUE7UUFBQTtRQUNELElBQUksQ0FBQzJYLGdCQUFnQixHQUFHLElBQUk7UUFDNUIsSUFBTXNCLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7VUFDckJHLE9BQUksQ0FBQ3pCLGdCQUFnQixHQUFHLEtBQUs7VUFDN0J5QixPQUFJLENBQUNsUixRQUFRLENBQUNqTyxTQUFTLENBQUMrSyxNQUFNLENBQUM0UixxQkFBcUIsQ0FBQztVQUNyRHdDLE9BQUksQ0FBQ2xSLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQzJILG1CQUFtQixDQUFDO1VBQ2hEelgsWUFBWSxDQUFDK0QsT0FBTyxDQUFDbVcsT0FBSSxDQUFDbFIsUUFBUSxFQUFFc08sY0FBYyxDQUFDO1FBQ3JELENBQUM7UUFDRCxJQUFJLENBQUN0TyxRQUFRLENBQUN0UyxLQUFLLENBQUNtakIsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNuQyxJQUFJLENBQUNuUSxjQUFjLENBQUNxUSxRQUFRLEVBQUUsSUFBSSxDQUFDL1EsUUFBUSxFQUFFLElBQUksQ0FBQztNQUNwRDtJQUFDO01BQUE5VCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBZ2tCLFNBQUEsRUFBa0M7UUFBQSxJQUF6QjlqQixPQUFPLEdBQUFMLFNBQUEsQ0FBQW1CLE1BQUEsUUFBQW5CLFNBQUEsUUFBQXNELFNBQUEsR0FBQXRELFNBQUEsTUFBRyxJQUFJLENBQUNnVSxRQUFRO1FBQzlCLE9BQU8zVCxPQUFPLENBQUMwRixTQUFTLENBQUNDLFFBQVEsQ0FBQ3djLGlCQUFpQixDQUFDO01BQ3REOztNQUVBO0lBQUE7TUFBQXRpQixHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBcVMsa0JBQWtCRixNQUFNLEVBQUU7UUFDeEJBLE1BQU0sQ0FBQ2tHLE1BQU0sR0FBR25MLE9BQU8sQ0FBQ2lGLE1BQU0sQ0FBQ2tHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeENsRyxNQUFNLENBQUM2USxNQUFNLEdBQUdqZSxVQUFVLENBQUNvTixNQUFNLENBQUM2USxNQUFNLENBQUM7UUFDekMsT0FBTzdRLE1BQU07TUFDZjtJQUFDO01BQUFwUyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBMmtCLGNBQUEsRUFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQzlRLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDNmMscUJBQXFCLENBQUMsR0FBR0MsS0FBSyxHQUFHQyxNQUFNO01BQ2pGO0lBQUM7TUFBQTdpQixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBOGpCLG9CQUFBLEVBQXNCO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUNoUSxPQUFPLENBQUNrUCxNQUFNLEVBQUU7VUFDeEI7UUFDRjtRQUNBLElBQU03TixRQUFRLEdBQUcsSUFBSSxDQUFDa1Asc0JBQXNCLENBQUN2QixzQkFBc0IsQ0FBQztRQUFDLElBQUFxQyxVQUFBLEdBQUFoYSwwQkFBQSxDQUMvQ2dLLFFBQVE7VUFBQWlRLE1BQUE7UUFBQTtVQUE5QixLQUFBRCxVQUFBLENBQUE5WixDQUFBLE1BQUErWixNQUFBLEdBQUFELFVBQUEsQ0FBQTdaLENBQUEsSUFBQUMsSUFBQSxHQUFnQztZQUFBLElBQXJCckwsT0FBTyxHQUFBa2xCLE1BQUEsQ0FBQXBsQixLQUFBO1lBQ2hCLElBQU1xbEIsUUFBUSxHQUFHdFEsY0FBYyxDQUFDcUIsc0JBQXNCLENBQUNsVyxPQUFPLENBQUM7WUFDL0QsSUFBSW1sQixRQUFRLEVBQUU7Y0FDWixJQUFJLENBQUN0Qix5QkFBeUIsQ0FBQyxDQUFDN2pCLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQzhqQixRQUFRLENBQUNxQixRQUFRLENBQUMsQ0FBQztZQUNwRTtVQUNGO1FBQUMsU0FBQTVaLEdBQUE7VUFBQTBaLFVBQUEsQ0FBQXpaLENBQUEsQ0FBQUQsR0FBQTtRQUFBO1VBQUEwWixVQUFBLENBQUF4WixDQUFBO1FBQUE7TUFDSDtJQUFDO01BQUE1TCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBcWtCLHVCQUF1QjNoQixRQUFRLEVBQUU7UUFDL0IsSUFBTXlTLFFBQVEsR0FBR0osY0FBYyxDQUFDOUksSUFBSSxDQUFDd1csMEJBQTBCLEVBQUUsSUFBSSxDQUFDM08sT0FBTyxDQUFDa1AsTUFBTSxDQUFDO1FBQ3JGO1FBQ0EsT0FBT2pPLGNBQWMsQ0FBQzlJLElBQUksQ0FBQ3ZKLFFBQVEsRUFBRSxJQUFJLENBQUNvUixPQUFPLENBQUNrUCxNQUFNLENBQUMsQ0FBQ3JSLE1BQU0sQ0FBQyxVQUFBelIsT0FBTztVQUFBLE9BQUksQ0FBQ2lWLFFBQVEsQ0FBQ3hILFFBQVEsQ0FBQ3pOLE9BQU8sQ0FBQztRQUFBLEVBQUM7TUFDMUc7SUFBQztNQUFBSCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBK2pCLDBCQUEwQnVCLFlBQVksRUFBRUMsTUFBTSxFQUFFO1FBQzlDLElBQUksQ0FBQ0QsWUFBWSxDQUFDdGtCLE1BQU0sRUFBRTtVQUN4QjtRQUNGO1FBQUMsSUFBQXdrQixXQUFBLEdBQUFyYSwwQkFBQSxDQUNxQm1hLFlBQVk7VUFBQUcsT0FBQTtRQUFBO1VBQWxDLEtBQUFELFdBQUEsQ0FBQW5hLENBQUEsTUFBQW9hLE9BQUEsR0FBQUQsV0FBQSxDQUFBbGEsQ0FBQSxJQUFBQyxJQUFBLEdBQW9DO1lBQUEsSUFBekJyTCxPQUFPLEdBQUF1bEIsT0FBQSxDQUFBemxCLEtBQUE7WUFDaEJFLE9BQU8sQ0FBQzBGLFNBQVMsQ0FBQ3lTLE1BQU0sQ0FBQ21LLG9CQUFvQixFQUFFLENBQUMrQyxNQUFNLENBQUM7WUFDdkRybEIsT0FBTyxDQUFDa1IsWUFBWSxDQUFDLGVBQWUsRUFBRW1VLE1BQU0sQ0FBQztVQUMvQztRQUFDLFNBQUE5WixHQUFBO1VBQUErWixXQUFBLENBQUE5WixDQUFBLENBQUFELEdBQUE7UUFBQTtVQUFBK1osV0FBQSxDQUFBN1osQ0FBQTtRQUFBO01BQ0g7O01BRUE7SUFBQTtNQUFBNUwsR0FBQTtNQUFBaVEsR0FBQSxFQS9IQSxTQUFBQSxJQUFBLEVBQXFCO1FBQ25CLE9BQU8rUyxTQUFTO01BQ2xCO0lBQUM7TUFBQWhqQixHQUFBO01BQUFpUSxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUF5QjtRQUN2QixPQUFPaVQsYUFBYTtNQUN0QjtJQUFDO01BQUFsakIsR0FBQTtNQUFBaVEsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBa0I7UUFDaEIsT0FBTzRSLE1BQU07TUFDZjtJQUFDO01BQUE3aEIsR0FBQTtNQUFBQyxLQUFBLEVBd0hELFNBQUE4SCxnQkFBdUJxSyxNQUFNLEVBQUU7UUFDN0IsSUFBTTJCLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxPQUFPM0IsTUFBTSxLQUFLLFFBQVEsSUFBSSxXQUFXLENBQUNpQixJQUFJLENBQUNqQixNQUFNLENBQUMsRUFBRTtVQUMxRDJCLE9BQU8sQ0FBQ3VFLE1BQU0sR0FBRyxLQUFLO1FBQ3hCO1FBQ0EsT0FBTyxJQUFJLENBQUNaLElBQUksQ0FBQyxZQUFZO1VBQzNCLElBQU1DLElBQUksR0FBR3dMLFFBQVEsQ0FBQ3hPLG1CQUFtQixDQUFDLElBQUksRUFBRVosT0FBTyxDQUFDO1VBQ3hELElBQUksT0FBTzNCLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxPQUFPdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLEtBQUssV0FBVyxFQUFFO2NBQ3ZDLE1BQU0sSUFBSWtCLFNBQVMsc0JBQUE1UixNQUFBLENBQXFCMFEsTUFBTSxRQUFJO1lBQ3BEO1lBQ0F1RixJQUFJLENBQUN2RixNQUFNLENBQUMsRUFBRTtVQUNoQjtRQUNGLENBQUMsQ0FBQztNQUNKO0lBQUM7SUFBQSxPQUFBK1EsUUFBQTtFQUFBLEVBcktvQnpQLGFBQWE7RUF3S3BDO0FBQ0Y7QUFDQTtFQUVFNUksWUFBWSxDQUFDK0MsRUFBRSxDQUFDbE4sUUFBUSxFQUFFMGhCLHNCQUFzQixFQUFFVSxzQkFBc0IsRUFBRSxVQUFVclksS0FBSyxFQUFFO0lBQ3pGO0lBQ0EsSUFBSUEsS0FBSyxDQUFDM0IsTUFBTSxDQUFDNE4sT0FBTyxLQUFLLEdBQUcsSUFBSWpNLEtBQUssQ0FBQ0UsY0FBYyxJQUFJRixLQUFLLENBQUNFLGNBQWMsQ0FBQytMLE9BQU8sS0FBSyxHQUFHLEVBQUU7TUFDaEdqTSxLQUFLLENBQUM2RSxjQUFjLEVBQUU7SUFDeEI7SUFBQyxJQUFBb1csV0FBQSxHQUFBdmEsMEJBQUEsQ0FDcUI0SixjQUFjLENBQUNzQiwrQkFBK0IsQ0FBQyxJQUFJLENBQUM7TUFBQXNQLE9BQUE7SUFBQTtNQUExRSxLQUFBRCxXQUFBLENBQUFyYSxDQUFBLE1BQUFzYSxPQUFBLEdBQUFELFdBQUEsQ0FBQXBhLENBQUEsSUFBQUMsSUFBQSxHQUE0RTtRQUFBLElBQWpFckwsT0FBTyxHQUFBeWxCLE9BQUEsQ0FBQTNsQixLQUFBO1FBQ2hCa2pCLFFBQVEsQ0FBQ3hPLG1CQUFtQixDQUFDeFUsT0FBTyxFQUFFO1VBQ3BDbVksTUFBTSxFQUFFO1FBQ1YsQ0FBQyxDQUFDLENBQUNBLE1BQU0sRUFBRTtNQUNiO0lBQUMsU0FBQTVNLEdBQUE7TUFBQWlhLFdBQUEsQ0FBQWhhLENBQUEsQ0FBQUQsR0FBQTtJQUFBO01BQUFpYSxXQUFBLENBQUEvWixDQUFBO0lBQUE7RUFDSCxDQUFDLENBQUM7O0VBRUY7QUFDRjtBQUNBOztFQUVFcEUsa0JBQWtCLENBQUMyYixRQUFRLENBQUM7RUFFNUIsSUFBSTBDLEdBQUcsR0FBRyxLQUFLO0VBQ2YsSUFBSUMsTUFBTSxHQUFHLFFBQVE7RUFDckIsSUFBSUMsS0FBSyxHQUFHLE9BQU87RUFDbkIsSUFBSXRrQixJQUFJLEdBQUcsTUFBTTtFQUNqQixJQUFJdWtCLElBQUksR0FBRyxNQUFNO0VBQ2pCLElBQUlDLGNBQWMsR0FBRyxDQUFDSixHQUFHLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFdGtCLElBQUksQ0FBQztFQUMvQyxJQUFJeWtCLEtBQUssR0FBRyxPQUFPO0VBQ25CLElBQUlDLEdBQUcsR0FBRyxLQUFLO0VBQ2YsSUFBSUMsZUFBZSxHQUFHLGlCQUFpQjtFQUN2QyxJQUFJQyxRQUFRLEdBQUcsVUFBVTtFQUN6QixJQUFJQyxNQUFNLEdBQUcsUUFBUTtFQUNyQixJQUFJQyxTQUFTLEdBQUcsV0FBVztFQUMzQixJQUFJQyxtQkFBbUIsR0FBRyxhQUFhUCxjQUFjLENBQUNRLE1BQU0sQ0FBQyxVQUFVQyxHQUFHLEVBQUVDLFNBQVMsRUFBRTtJQUNyRixPQUFPRCxHQUFHLENBQUNobEIsTUFBTSxDQUFDLENBQUNpbEIsU0FBUyxHQUFHLEdBQUcsR0FBR1QsS0FBSyxFQUFFUyxTQUFTLEdBQUcsR0FBRyxHQUFHUixHQUFHLENBQUMsQ0FBQztFQUNyRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sSUFBSVMsVUFBVSxHQUFHLGFBQWEsRUFBRSxDQUFDbGxCLE1BQU0sQ0FBQ3VrQixjQUFjLEVBQUUsQ0FBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQ1MsTUFBTSxDQUFDLFVBQVVDLEdBQUcsRUFBRUMsU0FBUyxFQUFFO0lBQy9GLE9BQU9ELEdBQUcsQ0FBQ2hsQixNQUFNLENBQUMsQ0FBQ2lsQixTQUFTLEVBQUVBLFNBQVMsR0FBRyxHQUFHLEdBQUdULEtBQUssRUFBRVMsU0FBUyxHQUFHLEdBQUcsR0FBR1IsR0FBRyxDQUFDLENBQUM7RUFDaEYsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0VBRVIsSUFBSVUsVUFBVSxHQUFHLFlBQVk7RUFDN0IsSUFBSUMsSUFBSSxHQUFHLE1BQU07RUFDakIsSUFBSUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDOztFQUU3QixJQUFJQyxVQUFVLEdBQUcsWUFBWTtFQUM3QixJQUFJQyxJQUFJLEdBQUcsTUFBTTtFQUNqQixJQUFJQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUM7O0VBRTdCLElBQUlDLFdBQVcsR0FBRyxhQUFhO0VBQy9CLElBQUlDLEtBQUssR0FBRyxPQUFPO0VBQ25CLElBQUlDLFVBQVUsR0FBRyxZQUFZO0VBQzdCLElBQUlDLGNBQWMsR0FBRyxDQUFDVCxVQUFVLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxDQUFDO0VBRS9HLFNBQVNFLFdBQVdBLENBQUNwbkIsT0FBTyxFQUFFO0lBQzVCLE9BQU9BLE9BQU8sR0FBRyxDQUFDQSxPQUFPLENBQUNxbkIsUUFBUSxJQUFJLEVBQUUsRUFBRS9qQixXQUFXLEVBQUUsR0FBRyxJQUFJO0VBQ2hFO0VBRUEsU0FBU2drQixTQUFTQSxDQUFDQyxJQUFJLEVBQUU7SUFDdkIsSUFBSUEsSUFBSSxJQUFJLElBQUksRUFBRTtNQUNoQixPQUFPOWtCLE1BQU07SUFDZjtJQUVBLElBQUk4a0IsSUFBSSxDQUFDbmtCLFFBQVEsRUFBRSxLQUFLLGlCQUFpQixFQUFFO01BQ3pDLElBQUlva0IsYUFBYSxHQUFHRCxJQUFJLENBQUNDLGFBQWE7TUFDdEMsT0FBT0EsYUFBYSxHQUFHQSxhQUFhLENBQUNDLFdBQVcsSUFBSWhsQixNQUFNLEdBQUdBLE1BQU07SUFDckU7SUFFQSxPQUFPOGtCLElBQUk7RUFDYjtFQUVBLFNBQVNHLFNBQVNBLENBQUNILElBQUksRUFBRTtJQUN2QixJQUFJSSxVQUFVLEdBQUdMLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLENBQUN4UyxPQUFPO0lBQ3hDLE9BQU93UyxJQUFJLFlBQVlJLFVBQVUsSUFBSUosSUFBSSxZQUFZeFMsT0FBTztFQUM5RDtFQUVBLFNBQVM2UyxhQUFhQSxDQUFDTCxJQUFJLEVBQUU7SUFDM0IsSUFBSUksVUFBVSxHQUFHTCxTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFDTSxXQUFXO0lBQzVDLE9BQU9OLElBQUksWUFBWUksVUFBVSxJQUFJSixJQUFJLFlBQVlNLFdBQVc7RUFDbEU7RUFFQSxTQUFTQyxZQUFZQSxDQUFDUCxJQUFJLEVBQUU7SUFDMUI7SUFDQSxJQUFJLE9BQU9uaEIsVUFBVSxLQUFLLFdBQVcsRUFBRTtNQUNyQyxPQUFPLEtBQUs7SUFDZDtJQUVBLElBQUl1aEIsVUFBVSxHQUFHTCxTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFDbmhCLFVBQVU7SUFDM0MsT0FBT21oQixJQUFJLFlBQVlJLFVBQVUsSUFBSUosSUFBSSxZQUFZbmhCLFVBQVU7RUFDakU7O0VBRUE7O0VBRUEsU0FBUzJoQixXQUFXQSxDQUFDQyxJQUFJLEVBQUU7SUFDekIsSUFBSUMsS0FBSyxHQUFHRCxJQUFJLENBQUNDLEtBQUs7SUFDdEIva0IsTUFBTSxDQUFDK0ssSUFBSSxDQUFDZ2EsS0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQ3huQixPQUFPLENBQUMsVUFBVThHLElBQUksRUFBRTtNQUNsRCxJQUFJbkcsS0FBSyxHQUFHNG1CLEtBQUssQ0FBQ0UsTUFBTSxDQUFDM2dCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUNwQyxJQUFJOEosVUFBVSxHQUFHMlcsS0FBSyxDQUFDM1csVUFBVSxDQUFDOUosSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQzdDLElBQUl4SCxPQUFPLEdBQUdpb0IsS0FBSyxDQUFDQyxRQUFRLENBQUMxZ0IsSUFBSSxDQUFDLENBQUMsQ0FBQzs7TUFFcEMsSUFBSSxDQUFDb2dCLGFBQWEsQ0FBQzVuQixPQUFPLENBQUMsSUFBSSxDQUFDb25CLFdBQVcsQ0FBQ3BuQixPQUFPLENBQUMsRUFBRTtRQUNwRDtNQUNGLENBQUMsQ0FBQztNQUNGO01BQ0E7O01BR0FrRCxNQUFNLENBQUNrbEIsTUFBTSxDQUFDcG9CLE9BQU8sQ0FBQ3FCLEtBQUssRUFBRUEsS0FBSyxDQUFDO01BQ25DNkIsTUFBTSxDQUFDK0ssSUFBSSxDQUFDcUQsVUFBVSxDQUFDLENBQUM1USxPQUFPLENBQUMsVUFBVThHLElBQUksRUFBRTtRQUM5QyxJQUFJMUgsS0FBSyxHQUFHd1IsVUFBVSxDQUFDOUosSUFBSSxDQUFDO1FBRTVCLElBQUkxSCxLQUFLLEtBQUssS0FBSyxFQUFFO1VBQ25CRSxPQUFPLENBQUNvUixlQUFlLENBQUM1SixJQUFJLENBQUM7UUFDL0IsQ0FBQyxNQUFNO1VBQ0x4SCxPQUFPLENBQUNrUixZQUFZLENBQUMxSixJQUFJLEVBQUUxSCxLQUFLLEtBQUssSUFBSSxHQUFHLEVBQUUsR0FBR0EsS0FBSyxDQUFDO1FBQ3pEO01BQ0YsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7RUFFQSxTQUFTdW9CLFFBQVFBLENBQUNDLEtBQUssRUFBRTtJQUN2QixJQUFJTCxLQUFLLEdBQUdLLEtBQUssQ0FBQ0wsS0FBSztJQUN2QixJQUFJTSxhQUFhLEdBQUc7TUFDbEJwQyxNQUFNLEVBQUU7UUFDTnFDLFFBQVEsRUFBRVAsS0FBSyxDQUFDUSxPQUFPLENBQUNDLFFBQVE7UUFDaENwbkIsSUFBSSxFQUFFLEdBQUc7UUFDVG9rQixHQUFHLEVBQUUsR0FBRztRQUNSaUQsTUFBTSxFQUFFO01BQ1YsQ0FBQztNQUNEQyxLQUFLLEVBQUU7UUFDTEosUUFBUSxFQUFFO01BQ1osQ0FBQztNQUNEcEMsU0FBUyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ0RsakIsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDQyxRQUFRLENBQUMvQixNQUFNLENBQUM5a0IsS0FBSyxFQUFFa25CLGFBQWEsQ0FBQ3BDLE1BQU0sQ0FBQztJQUNoRThCLEtBQUssQ0FBQ0UsTUFBTSxHQUFHSSxhQUFhO0lBRTVCLElBQUlOLEtBQUssQ0FBQ0MsUUFBUSxDQUFDVSxLQUFLLEVBQUU7TUFDeEIxbEIsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDQyxRQUFRLENBQUNVLEtBQUssQ0FBQ3ZuQixLQUFLLEVBQUVrbkIsYUFBYSxDQUFDSyxLQUFLLENBQUM7SUFDaEU7SUFFQSxPQUFPLFlBQVk7TUFDakIxbEIsTUFBTSxDQUFDK0ssSUFBSSxDQUFDZ2EsS0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQ3huQixPQUFPLENBQUMsVUFBVThHLElBQUksRUFBRTtRQUNsRCxJQUFJeEgsT0FBTyxHQUFHaW9CLEtBQUssQ0FBQ0MsUUFBUSxDQUFDMWdCLElBQUksQ0FBQztRQUNsQyxJQUFJOEosVUFBVSxHQUFHMlcsS0FBSyxDQUFDM1csVUFBVSxDQUFDOUosSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUlxaEIsZUFBZSxHQUFHM2xCLE1BQU0sQ0FBQytLLElBQUksQ0FBQ2dhLEtBQUssQ0FBQ0UsTUFBTSxDQUFDVyxjQUFjLENBQUN0aEIsSUFBSSxDQUFDLEdBQUd5Z0IsS0FBSyxDQUFDRSxNQUFNLENBQUMzZ0IsSUFBSSxDQUFDLEdBQUcrZ0IsYUFBYSxDQUFDL2dCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFakgsSUFBSW5HLEtBQUssR0FBR3duQixlQUFlLENBQUN2QyxNQUFNLENBQUMsVUFBVWpsQixLQUFLLEVBQUV5UixRQUFRLEVBQUU7VUFDNUR6UixLQUFLLENBQUN5UixRQUFRLENBQUMsR0FBRyxFQUFFO1VBQ3BCLE9BQU96UixLQUFLO1FBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFUixJQUFJLENBQUN1bUIsYUFBYSxDQUFDNW5CLE9BQU8sQ0FBQyxJQUFJLENBQUNvbkIsV0FBVyxDQUFDcG5CLE9BQU8sQ0FBQyxFQUFFO1VBQ3BEO1FBQ0Y7UUFFQWtELE1BQU0sQ0FBQ2tsQixNQUFNLENBQUNwb0IsT0FBTyxDQUFDcUIsS0FBSyxFQUFFQSxLQUFLLENBQUM7UUFDbkM2QixNQUFNLENBQUMrSyxJQUFJLENBQUNxRCxVQUFVLENBQUMsQ0FBQzVRLE9BQU8sQ0FBQyxVQUFVcW9CLFNBQVMsRUFBRTtVQUNuRC9vQixPQUFPLENBQUNvUixlQUFlLENBQUMyWCxTQUFTLENBQUM7UUFDcEMsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQztFQUNILENBQUMsQ0FBQzs7RUFHRixJQUFNQyxhQUFhLEdBQUc7SUFDcEJ4aEIsSUFBSSxFQUFFLGFBQWE7SUFDbkJ5aEIsT0FBTyxFQUFFLElBQUk7SUFDYkMsS0FBSyxFQUFFLE9BQU87SUFDZHZoQixFQUFFLEVBQUVvZ0IsV0FBVztJQUNmb0IsTUFBTSxFQUFFZCxRQUFRO0lBQ2hCZSxRQUFRLEVBQUUsQ0FBQyxlQUFlO0VBQzVCLENBQUM7RUFFRCxTQUFTQyxnQkFBZ0JBLENBQUM3QyxTQUFTLEVBQUU7SUFDbkMsT0FBT0EsU0FBUyxDQUFDbGlCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDaEM7RUFFQSxJQUFJaUYsR0FBRyxHQUFHOUYsSUFBSSxDQUFDOEYsR0FBRztFQUNsQixJQUFJQyxHQUFHLEdBQUcvRixJQUFJLENBQUMrRixHQUFHO0VBQ2xCLElBQUk4ZixLQUFLLEdBQUc3bEIsSUFBSSxDQUFDNmxCLEtBQUs7RUFFdEIsU0FBU0MsV0FBV0EsQ0FBQSxFQUFHO0lBQ3JCLElBQUlDLE1BQU0sR0FBRzdPLFNBQVMsQ0FBQzhPLGFBQWE7SUFFcEMsSUFBSUQsTUFBTSxJQUFJLElBQUksSUFBSUEsTUFBTSxDQUFDRSxNQUFNLEVBQUU7TUFDbkMsT0FBT0YsTUFBTSxDQUFDRSxNQUFNLENBQUM1VCxHQUFHLENBQUMsVUFBVTZULElBQUksRUFBRTtRQUN2QyxPQUFPQSxJQUFJLENBQUNDLEtBQUssR0FBRyxHQUFHLEdBQUdELElBQUksQ0FBQ0UsT0FBTztNQUN4QyxDQUFDLENBQUMsQ0FBQzlULElBQUksQ0FBQyxHQUFHLENBQUM7SUFDZDtJQUVBLE9BQU80RSxTQUFTLENBQUNtUCxTQUFTO0VBQzVCO0VBRUEsU0FBU0MsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDMUIsT0FBTyxDQUFDLGdDQUFnQyxDQUFDN1csSUFBSSxDQUFDcVcsV0FBVyxFQUFFLENBQUM7RUFDOUQ7RUFFQSxTQUFTekUscUJBQXFCQSxDQUFDOWtCLE9BQU8sRUFBRWdxQixZQUFZLEVBQUVDLGVBQWUsRUFBRTtJQUNyRSxJQUFJRCxZQUFZLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFDM0JBLFlBQVksR0FBRyxLQUFLO0lBQ3RCO0lBRUEsSUFBSUMsZUFBZSxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQzlCQSxlQUFlLEdBQUcsS0FBSztJQUN6QjtJQUVBLElBQUlDLFVBQVUsR0FBR2xxQixPQUFPLENBQUM4a0IscUJBQXFCLEVBQUU7SUFDaEQsSUFBSXFGLE1BQU0sR0FBRyxDQUFDO0lBQ2QsSUFBSUMsTUFBTSxHQUFHLENBQUM7SUFFZCxJQUFJSixZQUFZLElBQUlwQyxhQUFhLENBQUM1bkIsT0FBTyxDQUFDLEVBQUU7TUFDMUNtcUIsTUFBTSxHQUFHbnFCLE9BQU8sQ0FBQ3FxQixXQUFXLEdBQUcsQ0FBQyxHQUFHZixLQUFLLENBQUNZLFVBQVUsQ0FBQ0ksS0FBSyxDQUFDLEdBQUd0cUIsT0FBTyxDQUFDcXFCLFdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQztNQUN6RkQsTUFBTSxHQUFHcHFCLE9BQU8sQ0FBQ3VHLFlBQVksR0FBRyxDQUFDLEdBQUcraUIsS0FBSyxDQUFDWSxVQUFVLENBQUNLLE1BQU0sQ0FBQyxHQUFHdnFCLE9BQU8sQ0FBQ3VHLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUM5RjtJQUVBLElBQUl5aEIsSUFBSSxHQUFHTixTQUFTLENBQUMxbkIsT0FBTyxDQUFDLEdBQUdzbkIsU0FBUyxDQUFDdG5CLE9BQU8sQ0FBQyxHQUFHeUMsTUFBTTtNQUN2RCtuQixjQUFjLEdBQUd4QyxJQUFJLENBQUN3QyxjQUFjO0lBRXhDLElBQUlDLGdCQUFnQixHQUFHLENBQUNWLGdCQUFnQixFQUFFLElBQUlFLGVBQWU7SUFDN0QsSUFBSVMsQ0FBQyxHQUFHLENBQUNSLFVBQVUsQ0FBQzVvQixJQUFJLElBQUltcEIsZ0JBQWdCLElBQUlELGNBQWMsR0FBR0EsY0FBYyxDQUFDRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUlSLE1BQU07SUFDekcsSUFBSVMsQ0FBQyxHQUFHLENBQUNWLFVBQVUsQ0FBQ3hFLEdBQUcsSUFBSStFLGdCQUFnQixJQUFJRCxjQUFjLEdBQUdBLGNBQWMsQ0FBQ0ssU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJVCxNQUFNO0lBQ3ZHLElBQUlFLEtBQUssR0FBR0osVUFBVSxDQUFDSSxLQUFLLEdBQUdILE1BQU07SUFDckMsSUFBSUksTUFBTSxHQUFHTCxVQUFVLENBQUNLLE1BQU0sR0FBR0gsTUFBTTtJQUN2QyxPQUFPO01BQ0xFLEtBQUssRUFBRUEsS0FBSztNQUNaQyxNQUFNLEVBQUVBLE1BQU07TUFDZDdFLEdBQUcsRUFBRWtGLENBQUM7TUFDTmhGLEtBQUssRUFBRThFLENBQUMsR0FBR0osS0FBSztNQUNoQjNFLE1BQU0sRUFBRWlGLENBQUMsR0FBR0wsTUFBTTtNQUNsQmpwQixJQUFJLEVBQUVvcEIsQ0FBQztNQUNQQSxDQUFDLEVBQUVBLENBQUM7TUFDSkUsQ0FBQyxFQUFFQTtJQUNMLENBQUM7RUFDSDs7RUFFQTs7RUFFQSxTQUFTRSxhQUFhQSxDQUFDOXFCLE9BQU8sRUFBRTtJQUM5QixJQUFJa3FCLFVBQVUsR0FBR3BGLHFCQUFxQixDQUFDOWtCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakQ7O0lBRUEsSUFBSXNxQixLQUFLLEdBQUd0cUIsT0FBTyxDQUFDcXFCLFdBQVc7SUFDL0IsSUFBSUUsTUFBTSxHQUFHdnFCLE9BQU8sQ0FBQ3VHLFlBQVk7SUFFakMsSUFBSTlDLElBQUksQ0FBQzZXLEdBQUcsQ0FBQzRQLFVBQVUsQ0FBQ0ksS0FBSyxHQUFHQSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDM0NBLEtBQUssR0FBR0osVUFBVSxDQUFDSSxLQUFLO0lBQzFCO0lBRUEsSUFBSTdtQixJQUFJLENBQUM2VyxHQUFHLENBQUM0UCxVQUFVLENBQUNLLE1BQU0sR0FBR0EsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO01BQzdDQSxNQUFNLEdBQUdMLFVBQVUsQ0FBQ0ssTUFBTTtJQUM1QjtJQUVBLE9BQU87TUFDTEcsQ0FBQyxFQUFFMXFCLE9BQU8sQ0FBQzJxQixVQUFVO01BQ3JCQyxDQUFDLEVBQUU1cUIsT0FBTyxDQUFDNnFCLFNBQVM7TUFDcEJQLEtBQUssRUFBRUEsS0FBSztNQUNaQyxNQUFNLEVBQUVBO0lBQ1YsQ0FBQztFQUNIO0VBRUEsU0FBUzVrQixRQUFRQSxDQUFDbWQsTUFBTSxFQUFFM04sS0FBSyxFQUFFO0lBQy9CLElBQUk0VixRQUFRLEdBQUc1VixLQUFLLENBQUNqUCxXQUFXLElBQUlpUCxLQUFLLENBQUNqUCxXQUFXLEVBQUUsQ0FBQyxDQUFDOztJQUV6RCxJQUFJNGMsTUFBTSxDQUFDbmQsUUFBUSxDQUFDd1AsS0FBSyxDQUFDLEVBQUU7TUFDMUIsT0FBTyxJQUFJO0lBQ2IsQ0FBQyxDQUFDO0lBQUEsS0FDRyxJQUFJNFYsUUFBUSxJQUFJakQsWUFBWSxDQUFDaUQsUUFBUSxDQUFDLEVBQUU7TUFDekMsSUFBSXJWLElBQUksR0FBR1AsS0FBSztNQUVoQixHQUFHO1FBQ0QsSUFBSU8sSUFBSSxJQUFJb04sTUFBTSxDQUFDa0ksVUFBVSxDQUFDdFYsSUFBSSxDQUFDLEVBQUU7VUFDbkMsT0FBTyxJQUFJO1FBQ2IsQ0FBQyxDQUFDOztRQUdGQSxJQUFJLEdBQUdBLElBQUksQ0FBQ3BRLFVBQVUsSUFBSW9RLElBQUksQ0FBQ3VWLElBQUk7TUFDckMsQ0FBQyxRQUFRdlYsSUFBSTtJQUNmLENBQUMsQ0FBQzs7SUFHSixPQUFPLEtBQUs7RUFDZDtFQUVBLFNBQVN3VixrQkFBa0JBLENBQUNsckIsT0FBTyxFQUFFO0lBQ25DLE9BQU9zbkIsU0FBUyxDQUFDdG5CLE9BQU8sQ0FBQyxDQUFDK0QsZ0JBQWdCLENBQUMvRCxPQUFPLENBQUM7RUFDckQ7RUFFQSxTQUFTbXJCLGNBQWNBLENBQUNuckIsT0FBTyxFQUFFO0lBQy9CLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDc0osT0FBTyxDQUFDOGQsV0FBVyxDQUFDcG5CLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztFQUNqRTtFQUVBLFNBQVNvckIsa0JBQWtCQSxDQUFDcHJCLE9BQU8sRUFBRTtJQUNuQztJQUNBLE9BQU8sQ0FBQyxDQUFDMG5CLFNBQVMsQ0FBQzFuQixPQUFPLENBQUMsR0FBR0EsT0FBTyxDQUFDd25CLGFBQWE7SUFBRztJQUN0RHhuQixPQUFPLENBQUNRLFFBQVEsS0FBS2lDLE1BQU0sQ0FBQ2pDLFFBQVEsRUFBRXdGLGVBQWU7RUFDdkQ7RUFFQSxTQUFTcWxCLGFBQWFBLENBQUNyckIsT0FBTyxFQUFFO0lBQzlCLElBQUlvbkIsV0FBVyxDQUFDcG5CLE9BQU8sQ0FBQyxLQUFLLE1BQU0sRUFBRTtNQUNuQyxPQUFPQSxPQUFPO0lBQ2hCO0lBRUE7TUFBUTtNQUNOO01BQ0E7TUFDQUEsT0FBTyxDQUFDc3JCLFlBQVk7TUFBSTtNQUN4QnRyQixPQUFPLENBQUNzRixVQUFVO01BQU07TUFDeEJ3aUIsWUFBWSxDQUFDOW5CLE9BQU8sQ0FBQyxHQUFHQSxPQUFPLENBQUNpckIsSUFBSSxHQUFHLElBQUksQ0FBQztNQUFJO01BQ2hEO01BQ0FHLGtCQUFrQixDQUFDcHJCLE9BQU8sQ0FBQyxDQUFDO0lBQUE7RUFHaEM7O0VBRUEsU0FBU3VyQixtQkFBbUJBLENBQUN2ckIsT0FBTyxFQUFFO0lBQ3BDLElBQUksQ0FBQzRuQixhQUFhLENBQUM1bkIsT0FBTyxDQUFDO0lBQUk7SUFDL0JrckIsa0JBQWtCLENBQUNsckIsT0FBTyxDQUFDLENBQUN3b0IsUUFBUSxLQUFLLE9BQU8sRUFBRTtNQUNoRCxPQUFPLElBQUk7SUFDYjtJQUVBLE9BQU94b0IsT0FBTyxDQUFDd3JCLFlBQVk7RUFDN0IsQ0FBQyxDQUFDO0VBQ0Y7O0VBR0EsU0FBU0Msa0JBQWtCQSxDQUFDenJCLE9BQU8sRUFBRTtJQUNuQyxJQUFJMHJCLFNBQVMsR0FBRyxVQUFVLENBQUN4WSxJQUFJLENBQUNxVyxXQUFXLEVBQUUsQ0FBQztJQUM5QyxJQUFJb0MsSUFBSSxHQUFHLFVBQVUsQ0FBQ3pZLElBQUksQ0FBQ3FXLFdBQVcsRUFBRSxDQUFDO0lBRXpDLElBQUlvQyxJQUFJLElBQUkvRCxhQUFhLENBQUM1bkIsT0FBTyxDQUFDLEVBQUU7TUFDbEM7TUFDQSxJQUFJNHJCLFVBQVUsR0FBR1Ysa0JBQWtCLENBQUNsckIsT0FBTyxDQUFDO01BRTVDLElBQUk0ckIsVUFBVSxDQUFDcEQsUUFBUSxLQUFLLE9BQU8sRUFBRTtRQUNuQyxPQUFPLElBQUk7TUFDYjtJQUNGO0lBRUEsSUFBSXFELFdBQVcsR0FBR1IsYUFBYSxDQUFDcnJCLE9BQU8sQ0FBQztJQUV4QyxJQUFJOG5CLFlBQVksQ0FBQytELFdBQVcsQ0FBQyxFQUFFO01BQzdCQSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ1osSUFBSTtJQUNoQztJQUVBLE9BQU9yRCxhQUFhLENBQUNpRSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQ3ZpQixPQUFPLENBQUM4ZCxXQUFXLENBQUN5RSxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtNQUMzRixJQUFJQyxHQUFHLEdBQUdaLGtCQUFrQixDQUFDVyxXQUFXLENBQUMsQ0FBQyxDQUFDO01BQzNDO01BQ0E7O01BRUEsSUFBSUMsR0FBRyxDQUFDdHFCLFNBQVMsS0FBSyxNQUFNLElBQUlzcUIsR0FBRyxDQUFDQyxXQUFXLEtBQUssTUFBTSxJQUFJRCxHQUFHLENBQUNFLE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUMxaUIsT0FBTyxDQUFDd2lCLEdBQUcsQ0FBQ0csVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUlQLFNBQVMsSUFBSUksR0FBRyxDQUFDRyxVQUFVLEtBQUssUUFBUSxJQUFJUCxTQUFTLElBQUlJLEdBQUcsQ0FBQ3JhLE1BQU0sSUFBSXFhLEdBQUcsQ0FBQ3JhLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDcFAsT0FBT29hLFdBQVc7TUFDcEIsQ0FBQyxNQUFNO1FBQ0xBLFdBQVcsR0FBR0EsV0FBVyxDQUFDdm1CLFVBQVU7TUFDdEM7SUFDRjtJQUVBLE9BQU8sSUFBSTtFQUNiLENBQUMsQ0FBQztFQUNGOztFQUdBLFNBQVM0bUIsZUFBZUEsQ0FBQ2xzQixPQUFPLEVBQUU7SUFDaEMsSUFBSXlDLE1BQU0sR0FBRzZrQixTQUFTLENBQUN0bkIsT0FBTyxDQUFDO0lBQy9CLElBQUl3ckIsWUFBWSxHQUFHRCxtQkFBbUIsQ0FBQ3ZyQixPQUFPLENBQUM7SUFFL0MsT0FBT3dyQixZQUFZLElBQUlMLGNBQWMsQ0FBQ0ssWUFBWSxDQUFDLElBQUlOLGtCQUFrQixDQUFDTSxZQUFZLENBQUMsQ0FBQ2hELFFBQVEsS0FBSyxRQUFRLEVBQUU7TUFDN0dnRCxZQUFZLEdBQUdELG1CQUFtQixDQUFDQyxZQUFZLENBQUM7SUFDbEQ7SUFFQSxJQUFJQSxZQUFZLEtBQUtwRSxXQUFXLENBQUNvRSxZQUFZLENBQUMsS0FBSyxNQUFNLElBQUlwRSxXQUFXLENBQUNvRSxZQUFZLENBQUMsS0FBSyxNQUFNLElBQUlOLGtCQUFrQixDQUFDTSxZQUFZLENBQUMsQ0FBQ2hELFFBQVEsS0FBSyxRQUFRLENBQUMsRUFBRTtNQUM1SixPQUFPL2xCLE1BQU07SUFDZjtJQUVBLE9BQU8rb0IsWUFBWSxJQUFJQyxrQkFBa0IsQ0FBQ3pyQixPQUFPLENBQUMsSUFBSXlDLE1BQU07RUFDOUQ7RUFFQSxTQUFTMHBCLHdCQUF3QkEsQ0FBQzNGLFNBQVMsRUFBRTtJQUMzQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDbGQsT0FBTyxDQUFDa2QsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHO0VBQzlEO0VBRUEsU0FBUzRGLE1BQU1BLENBQUNDLEtBQUssRUFBRXZzQixLQUFLLEVBQUV3c0IsS0FBSyxFQUFFO0lBQ25DLE9BQU8vaUIsR0FBRyxDQUFDOGlCLEtBQUssRUFBRTdpQixHQUFHLENBQUMxSixLQUFLLEVBQUV3c0IsS0FBSyxDQUFDLENBQUM7RUFDdEM7RUFDQSxTQUFTQyxjQUFjQSxDQUFDL2lCLEdBQUcsRUFBRTFKLEtBQUssRUFBRXlKLEdBQUcsRUFBRTtJQUN2QyxJQUFJaWpCLENBQUMsR0FBR0osTUFBTSxDQUFDNWlCLEdBQUcsRUFBRTFKLEtBQUssRUFBRXlKLEdBQUcsQ0FBQztJQUMvQixPQUFPaWpCLENBQUMsR0FBR2pqQixHQUFHLEdBQUdBLEdBQUcsR0FBR2lqQixDQUFDO0VBQzFCO0VBRUEsU0FBU0Msa0JBQWtCQSxDQUFBLEVBQUc7SUFDNUIsT0FBTztNQUNML0csR0FBRyxFQUFFLENBQUM7TUFDTkUsS0FBSyxFQUFFLENBQUM7TUFDUkQsTUFBTSxFQUFFLENBQUM7TUFDVHJrQixJQUFJLEVBQUU7SUFDUixDQUFDO0VBQ0g7RUFFQSxTQUFTb3JCLGtCQUFrQkEsQ0FBQ0MsYUFBYSxFQUFFO0lBQ3pDLE9BQU96cEIsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRXFFLGtCQUFrQixFQUFFLEVBQUVFLGFBQWEsQ0FBQztFQUMvRDtFQUVBLFNBQVNDLGVBQWVBLENBQUM5c0IsS0FBSyxFQUFFbU8sSUFBSSxFQUFFO0lBQ3BDLE9BQU9BLElBQUksQ0FBQ3FZLE1BQU0sQ0FBQyxVQUFVdUcsT0FBTyxFQUFFaHRCLEdBQUcsRUFBRTtNQUN6Q2d0QixPQUFPLENBQUNodEIsR0FBRyxDQUFDLEdBQUdDLEtBQUs7TUFDcEIsT0FBTytzQixPQUFPO0lBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNSO0VBRUEsSUFBSUMsZUFBZSxHQUFHLFNBQVNBLGVBQWVBLENBQUNDLE9BQU8sRUFBRTlFLEtBQUssRUFBRTtJQUM3RDhFLE9BQU8sR0FBRyxPQUFPQSxPQUFPLEtBQUssVUFBVSxHQUFHQSxPQUFPLENBQUM3cEIsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRUgsS0FBSyxDQUFDK0UsS0FBSyxFQUFFO01BQy9FeEcsU0FBUyxFQUFFeUIsS0FBSyxDQUFDekI7SUFDbkIsQ0FBQyxDQUFDLENBQUMsR0FBR3VHLE9BQU87SUFDYixPQUFPTCxrQkFBa0IsQ0FBQyxPQUFPSyxPQUFPLEtBQUssUUFBUSxHQUFHQSxPQUFPLEdBQUdILGVBQWUsQ0FBQ0csT0FBTyxFQUFFakgsY0FBYyxDQUFDLENBQUM7RUFDN0csQ0FBQztFQUVELFNBQVM4QyxLQUFLQSxDQUFDWixJQUFJLEVBQUU7SUFDbkIsSUFBSWlGLHFCQUFxQjtJQUV6QixJQUFJaEYsS0FBSyxHQUFHRCxJQUFJLENBQUNDLEtBQUs7TUFDbEJ6Z0IsSUFBSSxHQUFHd2dCLElBQUksQ0FBQ3hnQixJQUFJO01BQ2hCaWhCLE9BQU8sR0FBR1QsSUFBSSxDQUFDUyxPQUFPO0lBQzFCLElBQUl5RSxZQUFZLEdBQUdqRixLQUFLLENBQUNDLFFBQVEsQ0FBQ1UsS0FBSztJQUN2QyxJQUFJdUUsYUFBYSxHQUFHbEYsS0FBSyxDQUFDbUYsYUFBYSxDQUFDRCxhQUFhO0lBQ3JELElBQUlFLGFBQWEsR0FBR2hFLGdCQUFnQixDQUFDcEIsS0FBSyxDQUFDekIsU0FBUyxDQUFDO0lBQ3JELElBQUk4RyxJQUFJLEdBQUduQix3QkFBd0IsQ0FBQ2tCLGFBQWEsQ0FBQztJQUNsRCxJQUFJRSxVQUFVLEdBQUcsQ0FBQ2pzQixJQUFJLEVBQUVza0IsS0FBSyxDQUFDLENBQUN0YyxPQUFPLENBQUMrakIsYUFBYSxDQUFDLElBQUksQ0FBQztJQUMxRCxJQUFJRyxHQUFHLEdBQUdELFVBQVUsR0FBRyxRQUFRLEdBQUcsT0FBTztJQUV6QyxJQUFJLENBQUNMLFlBQVksSUFBSSxDQUFDQyxhQUFhLEVBQUU7TUFDbkM7SUFDRjtJQUVBLElBQUlSLGFBQWEsR0FBR0csZUFBZSxDQUFDckUsT0FBTyxDQUFDc0UsT0FBTyxFQUFFOUUsS0FBSyxDQUFDO0lBQzNELElBQUl3RixTQUFTLEdBQUczQyxhQUFhLENBQUNvQyxZQUFZLENBQUM7SUFDM0MsSUFBSVEsT0FBTyxHQUFHSixJQUFJLEtBQUssR0FBRyxHQUFHNUgsR0FBRyxHQUFHcGtCLElBQUk7SUFDdkMsSUFBSXFzQixPQUFPLEdBQUdMLElBQUksS0FBSyxHQUFHLEdBQUczSCxNQUFNLEdBQUdDLEtBQUs7SUFDM0MsSUFBSWdJLE9BQU8sR0FBRzNGLEtBQUssQ0FBQytFLEtBQUssQ0FBQzVHLFNBQVMsQ0FBQ29ILEdBQUcsQ0FBQyxHQUFHdkYsS0FBSyxDQUFDK0UsS0FBSyxDQUFDNUcsU0FBUyxDQUFDa0gsSUFBSSxDQUFDLEdBQUdILGFBQWEsQ0FBQ0csSUFBSSxDQUFDLEdBQUdyRixLQUFLLENBQUMrRSxLQUFLLENBQUM3RyxNQUFNLENBQUNxSCxHQUFHLENBQUM7SUFDdEgsSUFBSUssU0FBUyxHQUFHVixhQUFhLENBQUNHLElBQUksQ0FBQyxHQUFHckYsS0FBSyxDQUFDK0UsS0FBSyxDQUFDNUcsU0FBUyxDQUFDa0gsSUFBSSxDQUFDO0lBQ2pFLElBQUlRLGlCQUFpQixHQUFHNUIsZUFBZSxDQUFDZ0IsWUFBWSxDQUFDO0lBQ3JELElBQUlhLFVBQVUsR0FBR0QsaUJBQWlCLEdBQUdSLElBQUksS0FBSyxHQUFHLEdBQUdRLGlCQUFpQixDQUFDRSxZQUFZLElBQUksQ0FBQyxHQUFHRixpQkFBaUIsQ0FBQ0csV0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2hJLElBQUlDLGlCQUFpQixHQUFHTixPQUFPLEdBQUcsQ0FBQyxHQUFHQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckQ7O0lBRUEsSUFBSXJrQixHQUFHLEdBQUdtakIsYUFBYSxDQUFDZSxPQUFPLENBQUM7SUFDaEMsSUFBSW5rQixHQUFHLEdBQUd3a0IsVUFBVSxHQUFHTixTQUFTLENBQUNELEdBQUcsQ0FBQyxHQUFHYixhQUFhLENBQUNnQixPQUFPLENBQUM7SUFDOUQsSUFBSVEsTUFBTSxHQUFHSixVQUFVLEdBQUcsQ0FBQyxHQUFHTixTQUFTLENBQUNELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBR1UsaUJBQWlCO0lBQ3BFLElBQUlFLE1BQU0sR0FBR2hDLE1BQU0sQ0FBQzVpQixHQUFHLEVBQUUya0IsTUFBTSxFQUFFNWtCLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBRXZDLElBQUk4a0IsUUFBUSxHQUFHZixJQUFJO0lBQ25CckYsS0FBSyxDQUFDbUYsYUFBYSxDQUFDNWxCLElBQUksQ0FBQyxJQUFJeWxCLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxFQUFFQSxxQkFBcUIsQ0FBQ29CLFFBQVEsQ0FBQyxHQUFHRCxNQUFNLEVBQUVuQixxQkFBcUIsQ0FBQ3FCLFlBQVksR0FBR0YsTUFBTSxHQUFHRCxNQUFNLEVBQUVsQixxQkFBcUIsQ0FBQztFQUNqTDtFQUVBLFNBQVNzQixRQUFRQSxDQUFDakcsS0FBSyxFQUFFO0lBQ3ZCLElBQUlMLEtBQUssR0FBR0ssS0FBSyxDQUFDTCxLQUFLO01BQ25CUSxPQUFPLEdBQUdILEtBQUssQ0FBQ0csT0FBTztJQUMzQixJQUFJK0YsZ0JBQWdCLEdBQUcvRixPQUFPLENBQUN6b0IsT0FBTztNQUNsQ2t0QixZQUFZLEdBQUdzQixnQkFBZ0IsS0FBSyxLQUFLLENBQUMsR0FBRyxxQkFBcUIsR0FBR0EsZ0JBQWdCO0lBRXpGLElBQUl0QixZQUFZLElBQUksSUFBSSxFQUFFO01BQ3hCO0lBQ0YsQ0FBQyxDQUFDOztJQUdGLElBQUksT0FBT0EsWUFBWSxLQUFLLFFBQVEsRUFBRTtNQUNwQ0EsWUFBWSxHQUFHakYsS0FBSyxDQUFDQyxRQUFRLENBQUMvQixNQUFNLENBQUNyaEIsYUFBYSxDQUFDb29CLFlBQVksQ0FBQztNQUVoRSxJQUFJLENBQUNBLFlBQVksRUFBRTtRQUNqQjtNQUNGO0lBQ0Y7SUFFQSxJQUFJLENBQUN2bkIsUUFBUSxDQUFDc2lCLEtBQUssQ0FBQ0MsUUFBUSxDQUFDL0IsTUFBTSxFQUFFK0csWUFBWSxDQUFDLEVBQUU7TUFFbEQ7SUFDRjtJQUVBakYsS0FBSyxDQUFDQyxRQUFRLENBQUNVLEtBQUssR0FBR3NFLFlBQVk7RUFDckMsQ0FBQyxDQUFDOztFQUdGLElBQU11QixPQUFPLEdBQUc7SUFDZGpuQixJQUFJLEVBQUUsT0FBTztJQUNieWhCLE9BQU8sRUFBRSxJQUFJO0lBQ2JDLEtBQUssRUFBRSxNQUFNO0lBQ2J2aEIsRUFBRSxFQUFFaWhCLEtBQUs7SUFDVE8sTUFBTSxFQUFFb0YsUUFBUTtJQUNoQm5GLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUMzQnNGLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCO0VBQ3RDLENBQUM7RUFFRCxTQUFTQyxZQUFZQSxDQUFDbkksU0FBUyxFQUFFO0lBQy9CLE9BQU9BLFNBQVMsQ0FBQ2xpQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2hDO0VBRUEsSUFBSXNxQixVQUFVLEdBQUc7SUFDZmxKLEdBQUcsRUFBRSxNQUFNO0lBQ1hFLEtBQUssRUFBRSxNQUFNO0lBQ2JELE1BQU0sRUFBRSxNQUFNO0lBQ2Rya0IsSUFBSSxFQUFFO0VBQ1IsQ0FBQyxDQUFDLENBQUM7RUFDSDtFQUNBOztFQUVBLFNBQVN1dEIsaUJBQWlCQSxDQUFDN0csSUFBSSxFQUFFO0lBQy9CLElBQUkwQyxDQUFDLEdBQUcxQyxJQUFJLENBQUMwQyxDQUFDO01BQ1ZFLENBQUMsR0FBRzVDLElBQUksQ0FBQzRDLENBQUM7SUFDZCxJQUFJa0UsR0FBRyxHQUFHcnNCLE1BQU07SUFDaEIsSUFBSXNzQixHQUFHLEdBQUdELEdBQUcsQ0FBQ0UsZ0JBQWdCLElBQUksQ0FBQztJQUNuQyxPQUFPO01BQ0x0RSxDQUFDLEVBQUVwQixLQUFLLENBQUNvQixDQUFDLEdBQUdxRSxHQUFHLENBQUMsR0FBR0EsR0FBRyxJQUFJLENBQUM7TUFDNUJuRSxDQUFDLEVBQUV0QixLQUFLLENBQUNzQixDQUFDLEdBQUdtRSxHQUFHLENBQUMsR0FBR0EsR0FBRyxJQUFJO0lBQzdCLENBQUM7RUFDSDtFQUVBLFNBQVNFLFdBQVdBLENBQUMzRyxLQUFLLEVBQUU7SUFDMUIsSUFBSTRHLGVBQWU7SUFFbkIsSUFBSS9JLE1BQU0sR0FBR21DLEtBQUssQ0FBQ25DLE1BQU07TUFDckJnSixVQUFVLEdBQUc3RyxLQUFLLENBQUM2RyxVQUFVO01BQzdCM0ksU0FBUyxHQUFHOEIsS0FBSyxDQUFDOUIsU0FBUztNQUMzQjRJLFNBQVMsR0FBRzlHLEtBQUssQ0FBQzhHLFNBQVM7TUFDM0JDLE9BQU8sR0FBRy9HLEtBQUssQ0FBQytHLE9BQU87TUFDdkI3RyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0UsUUFBUTtNQUN6QjhHLGVBQWUsR0FBR2hILEtBQUssQ0FBQ2dILGVBQWU7TUFDdkNDLFFBQVEsR0FBR2pILEtBQUssQ0FBQ2lILFFBQVE7TUFDekJDLFlBQVksR0FBR2xILEtBQUssQ0FBQ2tILFlBQVk7TUFDakNDLE9BQU8sR0FBR25ILEtBQUssQ0FBQ21ILE9BQU87SUFDM0IsSUFBSUMsVUFBVSxHQUFHTCxPQUFPLENBQUMzRSxDQUFDO01BQ3RCQSxDQUFDLEdBQUdnRixVQUFVLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxVQUFVO01BQzFDQyxVQUFVLEdBQUdOLE9BQU8sQ0FBQ3pFLENBQUM7TUFDdEJBLENBQUMsR0FBRytFLFVBQVUsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUdBLFVBQVU7SUFFOUMsSUFBSUMsS0FBSyxHQUFHLE9BQU9KLFlBQVksS0FBSyxVQUFVLEdBQUdBLFlBQVksQ0FBQztNQUM1RDlFLENBQUMsRUFBRUEsQ0FBQztNQUNKRSxDQUFDLEVBQUVBO0lBQ0wsQ0FBQyxDQUFDLEdBQUc7TUFDSEYsQ0FBQyxFQUFFQSxDQUFDO01BQ0pFLENBQUMsRUFBRUE7SUFDTCxDQUFDO0lBRURGLENBQUMsR0FBR2tGLEtBQUssQ0FBQ2xGLENBQUM7SUFDWEUsQ0FBQyxHQUFHZ0YsS0FBSyxDQUFDaEYsQ0FBQztJQUNYLElBQUlpRixJQUFJLEdBQUdSLE9BQU8sQ0FBQ3ZHLGNBQWMsQ0FBQyxHQUFHLENBQUM7SUFDdEMsSUFBSWdILElBQUksR0FBR1QsT0FBTyxDQUFDdkcsY0FBYyxDQUFDLEdBQUcsQ0FBQztJQUN0QyxJQUFJaUgsS0FBSyxHQUFHenVCLElBQUk7SUFDaEIsSUFBSTB1QixLQUFLLEdBQUd0SyxHQUFHO0lBQ2YsSUFBSW9KLEdBQUcsR0FBR3JzQixNQUFNO0lBRWhCLElBQUk4c0IsUUFBUSxFQUFFO01BQ1osSUFBSS9ELFlBQVksR0FBR1UsZUFBZSxDQUFDL0YsTUFBTSxDQUFDO01BQzFDLElBQUk4SixVQUFVLEdBQUcsY0FBYztNQUMvQixJQUFJQyxTQUFTLEdBQUcsYUFBYTtNQUU3QixJQUFJMUUsWUFBWSxLQUFLbEUsU0FBUyxDQUFDbkIsTUFBTSxDQUFDLEVBQUU7UUFDdENxRixZQUFZLEdBQUdKLGtCQUFrQixDQUFDakYsTUFBTSxDQUFDO1FBRXpDLElBQUkrRSxrQkFBa0IsQ0FBQ00sWUFBWSxDQUFDLENBQUNoRCxRQUFRLEtBQUssUUFBUSxJQUFJQSxRQUFRLEtBQUssVUFBVSxFQUFFO1VBQ3JGeUgsVUFBVSxHQUFHLGNBQWM7VUFDM0JDLFNBQVMsR0FBRyxhQUFhO1FBQzNCO01BQ0YsQ0FBQyxDQUFDOztNQUdGMUUsWUFBWSxHQUFHQSxZQUFZO01BRTNCLElBQUloRixTQUFTLEtBQUtkLEdBQUcsSUFBSSxDQUFDYyxTQUFTLEtBQUtsbEIsSUFBSSxJQUFJa2xCLFNBQVMsS0FBS1osS0FBSyxLQUFLd0osU0FBUyxLQUFLcEosR0FBRyxFQUFFO1FBQ3pGZ0ssS0FBSyxHQUFHckssTUFBTTtRQUNkLElBQUl3SyxPQUFPLEdBQUdWLE9BQU8sSUFBSWpFLFlBQVksS0FBS3NELEdBQUcsSUFBSUEsR0FBRyxDQUFDdEUsY0FBYyxHQUFHc0UsR0FBRyxDQUFDdEUsY0FBYyxDQUFDRCxNQUFNO1FBQUc7UUFDbEdpQixZQUFZLENBQUN5RSxVQUFVLENBQUM7UUFDeEJyRixDQUFDLElBQUl1RixPQUFPLEdBQUdoQixVQUFVLENBQUM1RSxNQUFNO1FBQ2hDSyxDQUFDLElBQUkwRSxlQUFlLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUMvQjtNQUVBLElBQUk5SSxTQUFTLEtBQUtsbEIsSUFBSSxJQUFJLENBQUNrbEIsU0FBUyxLQUFLZCxHQUFHLElBQUljLFNBQVMsS0FBS2IsTUFBTSxLQUFLeUosU0FBUyxLQUFLcEosR0FBRyxFQUFFO1FBQzFGK0osS0FBSyxHQUFHbkssS0FBSztRQUNiLElBQUl3SyxPQUFPLEdBQUdYLE9BQU8sSUFBSWpFLFlBQVksS0FBS3NELEdBQUcsSUFBSUEsR0FBRyxDQUFDdEUsY0FBYyxHQUFHc0UsR0FBRyxDQUFDdEUsY0FBYyxDQUFDRixLQUFLO1FBQUc7UUFDakdrQixZQUFZLENBQUMwRSxTQUFTLENBQUM7UUFDdkJ4RixDQUFDLElBQUkwRixPQUFPLEdBQUdqQixVQUFVLENBQUM3RSxLQUFLO1FBQy9CSSxDQUFDLElBQUk0RSxlQUFlLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUMvQjtJQUNGO0lBRUEsSUFBSWUsWUFBWSxHQUFHbnRCLE1BQU0sQ0FBQ2tsQixNQUFNLENBQUM7TUFDL0JJLFFBQVEsRUFBRUE7SUFDWixDQUFDLEVBQUUrRyxRQUFRLElBQUlYLFVBQVUsQ0FBQztJQUUxQixJQUFJMEIsS0FBSyxHQUFHZCxZQUFZLEtBQUssSUFBSSxHQUFHWCxpQkFBaUIsQ0FBQztNQUNwRG5FLENBQUMsRUFBRUEsQ0FBQztNQUNKRSxDQUFDLEVBQUVBO0lBQ0wsQ0FBQyxDQUFDLEdBQUc7TUFDSEYsQ0FBQyxFQUFFQSxDQUFDO01BQ0pFLENBQUMsRUFBRUE7SUFDTCxDQUFDO0lBRURGLENBQUMsR0FBRzRGLEtBQUssQ0FBQzVGLENBQUM7SUFDWEUsQ0FBQyxHQUFHMEYsS0FBSyxDQUFDMUYsQ0FBQztJQUVYLElBQUkwRSxlQUFlLEVBQUU7TUFDbkIsSUFBSWlCLGNBQWM7TUFFbEIsT0FBT3J0QixNQUFNLENBQUNrbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFaUksWUFBWSxHQUFHRSxjQUFjLEdBQUcsQ0FBQyxDQUFDLEVBQUVBLGNBQWMsQ0FBQ1AsS0FBSyxDQUFDLEdBQUdGLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFUyxjQUFjLENBQUNSLEtBQUssQ0FBQyxHQUFHRixJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRVUsY0FBYyxDQUFDL3VCLFNBQVMsR0FBRyxDQUFDc3RCLEdBQUcsQ0FBQ0UsZ0JBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxZQUFZLEdBQUd0RSxDQUFDLEdBQUcsTUFBTSxHQUFHRSxDQUFDLEdBQUcsS0FBSyxHQUFHLGNBQWMsR0FBR0YsQ0FBQyxHQUFHLE1BQU0sR0FBR0UsQ0FBQyxHQUFHLFFBQVEsRUFBRTJGLGNBQWMsRUFBRTtJQUNuVDtJQUVBLE9BQU9ydEIsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRWlJLFlBQVksR0FBR25CLGVBQWUsR0FBRyxDQUFDLENBQUMsRUFBRUEsZUFBZSxDQUFDYyxLQUFLLENBQUMsR0FBR0YsSUFBSSxHQUFHbEYsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUVzRSxlQUFlLENBQUNhLEtBQUssQ0FBQyxHQUFHRixJQUFJLEdBQUduRixDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRXdFLGVBQWUsQ0FBQzF0QixTQUFTLEdBQUcsRUFBRSxFQUFFMHRCLGVBQWUsRUFBRTtFQUMvTTtFQUVBLFNBQVNzQixhQUFhQSxDQUFDQyxLQUFLLEVBQUU7SUFDNUIsSUFBSXhJLEtBQUssR0FBR3dJLEtBQUssQ0FBQ3hJLEtBQUs7TUFDbkJRLE9BQU8sR0FBR2dJLEtBQUssQ0FBQ2hJLE9BQU87SUFDM0IsSUFBSWlJLHFCQUFxQixHQUFHakksT0FBTyxDQUFDNkcsZUFBZTtNQUMvQ0EsZUFBZSxHQUFHb0IscUJBQXFCLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHQSxxQkFBcUI7TUFDakZDLGlCQUFpQixHQUFHbEksT0FBTyxDQUFDOEcsUUFBUTtNQUNwQ0EsUUFBUSxHQUFHb0IsaUJBQWlCLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHQSxpQkFBaUI7TUFDbEVDLHFCQUFxQixHQUFHbkksT0FBTyxDQUFDK0csWUFBWTtNQUM1Q0EsWUFBWSxHQUFHb0IscUJBQXFCLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHQSxxQkFBcUI7SUFFbEYsSUFBSVAsWUFBWSxHQUFHO01BQ2pCN0osU0FBUyxFQUFFNkMsZ0JBQWdCLENBQUNwQixLQUFLLENBQUN6QixTQUFTLENBQUM7TUFDNUM0SSxTQUFTLEVBQUVULFlBQVksQ0FBQzFHLEtBQUssQ0FBQ3pCLFNBQVMsQ0FBQztNQUN4Q0wsTUFBTSxFQUFFOEIsS0FBSyxDQUFDQyxRQUFRLENBQUMvQixNQUFNO01BQzdCZ0osVUFBVSxFQUFFbEgsS0FBSyxDQUFDK0UsS0FBSyxDQUFDN0csTUFBTTtNQUM5Qm1KLGVBQWUsRUFBRUEsZUFBZTtNQUNoQ0csT0FBTyxFQUFFeEgsS0FBSyxDQUFDUSxPQUFPLENBQUNDLFFBQVEsS0FBSztJQUN0QyxDQUFDO0lBRUQsSUFBSVQsS0FBSyxDQUFDbUYsYUFBYSxDQUFDRCxhQUFhLElBQUksSUFBSSxFQUFFO01BQzdDbEYsS0FBSyxDQUFDRSxNQUFNLENBQUNoQyxNQUFNLEdBQUdqakIsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRUgsS0FBSyxDQUFDRSxNQUFNLENBQUNoQyxNQUFNLEVBQUU4SSxXQUFXLENBQUMvckIsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRWlJLFlBQVksRUFBRTtRQUN2R2hCLE9BQU8sRUFBRXBILEtBQUssQ0FBQ21GLGFBQWEsQ0FBQ0QsYUFBYTtRQUMxQzNFLFFBQVEsRUFBRVAsS0FBSyxDQUFDUSxPQUFPLENBQUNDLFFBQVE7UUFDaEM2RyxRQUFRLEVBQUVBLFFBQVE7UUFDbEJDLFlBQVksRUFBRUE7TUFDaEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOO0lBRUEsSUFBSXZILEtBQUssQ0FBQ21GLGFBQWEsQ0FBQ3hFLEtBQUssSUFBSSxJQUFJLEVBQUU7TUFDckNYLEtBQUssQ0FBQ0UsTUFBTSxDQUFDUyxLQUFLLEdBQUcxbEIsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRUgsS0FBSyxDQUFDRSxNQUFNLENBQUNTLEtBQUssRUFBRXFHLFdBQVcsQ0FBQy9yQixNQUFNLENBQUNrbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFaUksWUFBWSxFQUFFO1FBQ3JHaEIsT0FBTyxFQUFFcEgsS0FBSyxDQUFDbUYsYUFBYSxDQUFDeEUsS0FBSztRQUNsQ0osUUFBUSxFQUFFLFVBQVU7UUFDcEIrRyxRQUFRLEVBQUUsS0FBSztRQUNmQyxZQUFZLEVBQUVBO01BQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTjtJQUVBdkgsS0FBSyxDQUFDM1csVUFBVSxDQUFDNlUsTUFBTSxHQUFHampCLE1BQU0sQ0FBQ2tsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVILEtBQUssQ0FBQzNXLFVBQVUsQ0FBQzZVLE1BQU0sRUFBRTtNQUNuRSx1QkFBdUIsRUFBRThCLEtBQUssQ0FBQ3pCO0lBQ2pDLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQzs7RUFHRixJQUFNcUssZUFBZSxHQUFHO0lBQ3RCcnBCLElBQUksRUFBRSxlQUFlO0lBQ3JCeWhCLE9BQU8sRUFBRSxJQUFJO0lBQ2JDLEtBQUssRUFBRSxhQUFhO0lBQ3BCdmhCLEVBQUUsRUFBRTZvQixhQUFhO0lBQ2pCaFosSUFBSSxFQUFFLENBQUM7RUFDVCxDQUFDO0VBRUQsSUFBSXNaLE9BQU8sR0FBRztJQUNaQSxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBRUQsU0FBUzNILE1BQU1BLENBQUNuQixJQUFJLEVBQUU7SUFDcEIsSUFBSUMsS0FBSyxHQUFHRCxJQUFJLENBQUNDLEtBQUs7TUFDbEI5WCxRQUFRLEdBQUc2WCxJQUFJLENBQUM3WCxRQUFRO01BQ3hCc1ksT0FBTyxHQUFHVCxJQUFJLENBQUNTLE9BQU87SUFDMUIsSUFBSXNJLGVBQWUsR0FBR3RJLE9BQU8sQ0FBQ3VJLE1BQU07TUFDaENBLE1BQU0sR0FBR0QsZUFBZSxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBR0EsZUFBZTtNQUM1REUsZUFBZSxHQUFHeEksT0FBTyxDQUFDeUksTUFBTTtNQUNoQ0EsTUFBTSxHQUFHRCxlQUFlLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHQSxlQUFlO0lBQ2hFLElBQUl4dUIsTUFBTSxHQUFHNmtCLFNBQVMsQ0FBQ1csS0FBSyxDQUFDQyxRQUFRLENBQUMvQixNQUFNLENBQUM7SUFDN0MsSUFBSWdMLGFBQWEsR0FBRyxFQUFFLENBQUM1dkIsTUFBTSxDQUFDMG1CLEtBQUssQ0FBQ2tKLGFBQWEsQ0FBQy9LLFNBQVMsRUFBRTZCLEtBQUssQ0FBQ2tKLGFBQWEsQ0FBQ2hMLE1BQU0sQ0FBQztJQUV4RixJQUFJNkssTUFBTSxFQUFFO01BQ1ZHLGFBQWEsQ0FBQ3p3QixPQUFPLENBQUMsVUFBVTB3QixZQUFZLEVBQUU7UUFDNUNBLFlBQVksQ0FBQ3JxQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVvSixRQUFRLENBQUNraEIsTUFBTSxFQUFFUCxPQUFPLENBQUM7TUFDbkUsQ0FBQyxDQUFDO0lBQ0o7SUFFQSxJQUFJSSxNQUFNLEVBQUU7TUFDVnp1QixNQUFNLENBQUNzRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVvSixRQUFRLENBQUNraEIsTUFBTSxFQUFFUCxPQUFPLENBQUM7SUFDN0Q7SUFFQSxPQUFPLFlBQVk7TUFDakIsSUFBSUUsTUFBTSxFQUFFO1FBQ1ZHLGFBQWEsQ0FBQ3p3QixPQUFPLENBQUMsVUFBVTB3QixZQUFZLEVBQUU7VUFDNUNBLFlBQVksQ0FBQ3ZvQixtQkFBbUIsQ0FBQyxRQUFRLEVBQUVzSCxRQUFRLENBQUNraEIsTUFBTSxFQUFFUCxPQUFPLENBQUM7UUFDdEUsQ0FBQyxDQUFDO01BQ0o7TUFFQSxJQUFJSSxNQUFNLEVBQUU7UUFDVnp1QixNQUFNLENBQUNvRyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVzSCxRQUFRLENBQUNraEIsTUFBTSxFQUFFUCxPQUFPLENBQUM7TUFDaEU7SUFDRixDQUFDO0VBQ0gsQ0FBQyxDQUFDOztFQUdGLElBQU1RLGNBQWMsR0FBRztJQUNyQjlwQixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCeWhCLE9BQU8sRUFBRSxJQUFJO0lBQ2JDLEtBQUssRUFBRSxPQUFPO0lBQ2R2aEIsRUFBRSxFQUFFLFNBQVNBLEVBQUVBLENBQUEsRUFBRyxDQUFDLENBQUM7SUFDcEJ3aEIsTUFBTSxFQUFFQSxNQUFNO0lBQ2QzUixJQUFJLEVBQUUsQ0FBQztFQUNULENBQUM7RUFFRCxJQUFJK1osTUFBTSxHQUFHO0lBQ1hqd0IsSUFBSSxFQUFFLE9BQU87SUFDYnNrQixLQUFLLEVBQUUsTUFBTTtJQUNiRCxNQUFNLEVBQUUsS0FBSztJQUNiRCxHQUFHLEVBQUU7RUFDUCxDQUFDO0VBQ0QsU0FBUzhMLG9CQUFvQkEsQ0FBQ2hMLFNBQVMsRUFBRTtJQUN2QyxPQUFPQSxTQUFTLENBQUM1akIsT0FBTyxDQUFDLHdCQUF3QixFQUFFLFVBQVU2dUIsT0FBTyxFQUFFO01BQ3BFLE9BQU9GLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDO0lBQ3hCLENBQUMsQ0FBQztFQUNKO0VBRUEsSUFBSUMsSUFBSSxHQUFHO0lBQ1QzTCxLQUFLLEVBQUUsS0FBSztJQUNaQyxHQUFHLEVBQUU7RUFDUCxDQUFDO0VBQ0QsU0FBUzJMLDZCQUE2QkEsQ0FBQ25MLFNBQVMsRUFBRTtJQUNoRCxPQUFPQSxTQUFTLENBQUM1akIsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFVNnVCLE9BQU8sRUFBRTtNQUN4RCxPQUFPQyxJQUFJLENBQUNELE9BQU8sQ0FBQztJQUN0QixDQUFDLENBQUM7RUFDSjtFQUVBLFNBQVNHLGVBQWVBLENBQUNySyxJQUFJLEVBQUU7SUFDN0IsSUFBSXVILEdBQUcsR0FBR3hILFNBQVMsQ0FBQ0MsSUFBSSxDQUFDO0lBQ3pCLElBQUlzSyxVQUFVLEdBQUcvQyxHQUFHLENBQUNnRCxXQUFXO0lBQ2hDLElBQUlDLFNBQVMsR0FBR2pELEdBQUcsQ0FBQ2tELFdBQVc7SUFDL0IsT0FBTztNQUNMSCxVQUFVLEVBQUVBLFVBQVU7TUFDdEJFLFNBQVMsRUFBRUE7SUFDYixDQUFDO0VBQ0g7RUFFQSxTQUFTRSxtQkFBbUJBLENBQUNqeUIsT0FBTyxFQUFFO0lBQ3BDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsT0FBTzhrQixxQkFBcUIsQ0FBQ3NHLGtCQUFrQixDQUFDcHJCLE9BQU8sQ0FBQyxDQUFDLENBQUNzQixJQUFJLEdBQUdzd0IsZUFBZSxDQUFDNXhCLE9BQU8sQ0FBQyxDQUFDNnhCLFVBQVU7RUFDdEc7RUFFQSxTQUFTSyxlQUFlQSxDQUFDbHlCLE9BQU8sRUFBRTBvQixRQUFRLEVBQUU7SUFDMUMsSUFBSW9HLEdBQUcsR0FBR3hILFNBQVMsQ0FBQ3RuQixPQUFPLENBQUM7SUFDNUIsSUFBSW15QixJQUFJLEdBQUcvRyxrQkFBa0IsQ0FBQ3ByQixPQUFPLENBQUM7SUFDdEMsSUFBSXdxQixjQUFjLEdBQUdzRSxHQUFHLENBQUN0RSxjQUFjO0lBQ3ZDLElBQUlGLEtBQUssR0FBRzZILElBQUksQ0FBQ2xFLFdBQVc7SUFDNUIsSUFBSTFELE1BQU0sR0FBRzRILElBQUksQ0FBQ25FLFlBQVk7SUFDOUIsSUFBSXRELENBQUMsR0FBRyxDQUFDO0lBQ1QsSUFBSUUsQ0FBQyxHQUFHLENBQUM7SUFFVCxJQUFJSixjQUFjLEVBQUU7TUFDbEJGLEtBQUssR0FBR0UsY0FBYyxDQUFDRixLQUFLO01BQzVCQyxNQUFNLEdBQUdDLGNBQWMsQ0FBQ0QsTUFBTTtNQUM5QixJQUFJNkgsY0FBYyxHQUFHckksZ0JBQWdCLEVBQUU7TUFFdkMsSUFBSXFJLGNBQWMsSUFBSSxDQUFDQSxjQUFjLElBQUkxSixRQUFRLEtBQUssT0FBTyxFQUFFO1FBQzdEZ0MsQ0FBQyxHQUFHRixjQUFjLENBQUNHLFVBQVU7UUFDN0JDLENBQUMsR0FBR0osY0FBYyxDQUFDSyxTQUFTO01BQzlCO0lBQ0Y7SUFFQSxPQUFPO01BQ0xQLEtBQUssRUFBRUEsS0FBSztNQUNaQyxNQUFNLEVBQUVBLE1BQU07TUFDZEcsQ0FBQyxFQUFFQSxDQUFDLEdBQUd1SCxtQkFBbUIsQ0FBQ2p5QixPQUFPLENBQUM7TUFDbkM0cUIsQ0FBQyxFQUFFQTtJQUNMLENBQUM7RUFDSDs7RUFFQTs7RUFFQSxTQUFTeUgsZUFBZUEsQ0FBQ3J5QixPQUFPLEVBQUU7SUFDaEMsSUFBSXN5QixxQkFBcUI7SUFFekIsSUFBSUgsSUFBSSxHQUFHL0csa0JBQWtCLENBQUNwckIsT0FBTyxDQUFDO0lBQ3RDLElBQUl1eUIsU0FBUyxHQUFHWCxlQUFlLENBQUM1eEIsT0FBTyxDQUFDO0lBQ3hDLElBQUkwRyxJQUFJLEdBQUcsQ0FBQzRyQixxQkFBcUIsR0FBR3R5QixPQUFPLENBQUN3bkIsYUFBYSxLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRzhLLHFCQUFxQixDQUFDNXJCLElBQUk7SUFDeEcsSUFBSTRqQixLQUFLLEdBQUcvZ0IsR0FBRyxDQUFDNG9CLElBQUksQ0FBQ0ssV0FBVyxFQUFFTCxJQUFJLENBQUNsRSxXQUFXLEVBQUV2bkIsSUFBSSxHQUFHQSxJQUFJLENBQUM4ckIsV0FBVyxHQUFHLENBQUMsRUFBRTlyQixJQUFJLEdBQUdBLElBQUksQ0FBQ3VuQixXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQzdHLElBQUkxRCxNQUFNLEdBQUdoaEIsR0FBRyxDQUFDNG9CLElBQUksQ0FBQ00sWUFBWSxFQUFFTixJQUFJLENBQUNuRSxZQUFZLEVBQUV0bkIsSUFBSSxHQUFHQSxJQUFJLENBQUMrckIsWUFBWSxHQUFHLENBQUMsRUFBRS9yQixJQUFJLEdBQUdBLElBQUksQ0FBQ3NuQixZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ2xILElBQUl0RCxDQUFDLEdBQUcsQ0FBQzZILFNBQVMsQ0FBQ1YsVUFBVSxHQUFHSSxtQkFBbUIsQ0FBQ2p5QixPQUFPLENBQUM7SUFDNUQsSUFBSTRxQixDQUFDLEdBQUcsQ0FBQzJILFNBQVMsQ0FBQ1IsU0FBUztJQUU1QixJQUFJN0csa0JBQWtCLENBQUN4a0IsSUFBSSxJQUFJeXJCLElBQUksQ0FBQyxDQUFDNVgsU0FBUyxLQUFLLEtBQUssRUFBRTtNQUN4RG1RLENBQUMsSUFBSW5oQixHQUFHLENBQUM0b0IsSUFBSSxDQUFDbEUsV0FBVyxFQUFFdm5CLElBQUksR0FBR0EsSUFBSSxDQUFDdW5CLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRzNELEtBQUs7SUFDakU7SUFFQSxPQUFPO01BQ0xBLEtBQUssRUFBRUEsS0FBSztNQUNaQyxNQUFNLEVBQUVBLE1BQU07TUFDZEcsQ0FBQyxFQUFFQSxDQUFDO01BQ0pFLENBQUMsRUFBRUE7SUFDTCxDQUFDO0VBQ0g7RUFFQSxTQUFTOEgsY0FBY0EsQ0FBQzF5QixPQUFPLEVBQUU7SUFDL0I7SUFDQSxJQUFJMnlCLGlCQUFpQixHQUFHekgsa0JBQWtCLENBQUNsckIsT0FBTyxDQUFDO01BQy9DNHlCLFFBQVEsR0FBR0QsaUJBQWlCLENBQUNDLFFBQVE7TUFDckNDLFNBQVMsR0FBR0YsaUJBQWlCLENBQUNFLFNBQVM7TUFDdkNDLFNBQVMsR0FBR0gsaUJBQWlCLENBQUNHLFNBQVM7SUFFM0MsT0FBTyw0QkFBNEIsQ0FBQzVmLElBQUksQ0FBQzBmLFFBQVEsR0FBR0UsU0FBUyxHQUFHRCxTQUFTLENBQUM7RUFDNUU7RUFFQSxTQUFTRSxlQUFlQSxDQUFDeEwsSUFBSSxFQUFFO0lBQzdCLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDamUsT0FBTyxDQUFDOGQsV0FBVyxDQUFDRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUNqRTtNQUNBLE9BQU9BLElBQUksQ0FBQ0MsYUFBYSxDQUFDOWdCLElBQUk7SUFDaEM7SUFFQSxJQUFJa2hCLGFBQWEsQ0FBQ0wsSUFBSSxDQUFDLElBQUltTCxjQUFjLENBQUNuTCxJQUFJLENBQUMsRUFBRTtNQUMvQyxPQUFPQSxJQUFJO0lBQ2I7SUFFQSxPQUFPd0wsZUFBZSxDQUFDMUgsYUFBYSxDQUFDOUQsSUFBSSxDQUFDLENBQUM7RUFDN0M7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFLFNBQVN5TCxpQkFBaUJBLENBQUNoekIsT0FBTyxFQUFFZ0osSUFBSSxFQUFFO0lBQ3hDLElBQUlzcEIscUJBQXFCO0lBRXpCLElBQUl0cEIsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQ25CQSxJQUFJLEdBQUcsRUFBRTtJQUNYO0lBRUEsSUFBSW9vQixZQUFZLEdBQUcyQixlQUFlLENBQUMveUIsT0FBTyxDQUFDO0lBQzNDLElBQUlpekIsTUFBTSxHQUFHN0IsWUFBWSxNQUFNLENBQUNrQixxQkFBcUIsR0FBR3R5QixPQUFPLENBQUN3bkIsYUFBYSxLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRzhLLHFCQUFxQixDQUFDNXJCLElBQUksQ0FBQztJQUM3SCxJQUFJb29CLEdBQUcsR0FBR3hILFNBQVMsQ0FBQzhKLFlBQVksQ0FBQztJQUNqQyxJQUFJeG9CLE1BQU0sR0FBR3FxQixNQUFNLEdBQUcsQ0FBQ25FLEdBQUcsQ0FBQyxDQUFDdnRCLE1BQU0sQ0FBQ3V0QixHQUFHLENBQUN0RSxjQUFjLElBQUksRUFBRSxFQUFFa0ksY0FBYyxDQUFDdEIsWUFBWSxDQUFDLEdBQUdBLFlBQVksR0FBRyxFQUFFLENBQUMsR0FBR0EsWUFBWTtJQUM3SCxJQUFJOEIsV0FBVyxHQUFHbHFCLElBQUksQ0FBQ3pILE1BQU0sQ0FBQ3FILE1BQU0sQ0FBQztJQUNyQyxPQUFPcXFCLE1BQU0sR0FBR0MsV0FBVztJQUFHO0lBQzlCQSxXQUFXLENBQUMzeEIsTUFBTSxDQUFDeXhCLGlCQUFpQixDQUFDM0gsYUFBYSxDQUFDemlCLE1BQU0sQ0FBQyxDQUFDLENBQUM7RUFDOUQ7RUFFQSxTQUFTdXFCLGdCQUFnQkEsQ0FBQ0MsSUFBSSxFQUFFO0lBQzlCLE9BQU9sd0IsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRWdMLElBQUksRUFBRTtNQUM3Qjl4QixJQUFJLEVBQUU4eEIsSUFBSSxDQUFDMUksQ0FBQztNQUNaaEYsR0FBRyxFQUFFME4sSUFBSSxDQUFDeEksQ0FBQztNQUNYaEYsS0FBSyxFQUFFd04sSUFBSSxDQUFDMUksQ0FBQyxHQUFHMEksSUFBSSxDQUFDOUksS0FBSztNQUMxQjNFLE1BQU0sRUFBRXlOLElBQUksQ0FBQ3hJLENBQUMsR0FBR3dJLElBQUksQ0FBQzdJO0lBQ3hCLENBQUMsQ0FBQztFQUNKO0VBRUEsU0FBUzhJLDBCQUEwQkEsQ0FBQ3J6QixPQUFPLEVBQUUwb0IsUUFBUSxFQUFFO0lBQ3JELElBQUkwSyxJQUFJLEdBQUd0TyxxQkFBcUIsQ0FBQzlrQixPQUFPLEVBQUUsS0FBSyxFQUFFMG9CLFFBQVEsS0FBSyxPQUFPLENBQUM7SUFDdEUwSyxJQUFJLENBQUMxTixHQUFHLEdBQUcwTixJQUFJLENBQUMxTixHQUFHLEdBQUcxbEIsT0FBTyxDQUFDc3pCLFNBQVM7SUFDdkNGLElBQUksQ0FBQzl4QixJQUFJLEdBQUc4eEIsSUFBSSxDQUFDOXhCLElBQUksR0FBR3RCLE9BQU8sQ0FBQ3V6QixVQUFVO0lBQzFDSCxJQUFJLENBQUN6TixNQUFNLEdBQUd5TixJQUFJLENBQUMxTixHQUFHLEdBQUcxbEIsT0FBTyxDQUFDZ3VCLFlBQVk7SUFDN0NvRixJQUFJLENBQUN4TixLQUFLLEdBQUd3TixJQUFJLENBQUM5eEIsSUFBSSxHQUFHdEIsT0FBTyxDQUFDaXVCLFdBQVc7SUFDNUNtRixJQUFJLENBQUM5SSxLQUFLLEdBQUd0cUIsT0FBTyxDQUFDaXVCLFdBQVc7SUFDaENtRixJQUFJLENBQUM3SSxNQUFNLEdBQUd2cUIsT0FBTyxDQUFDZ3VCLFlBQVk7SUFDbENvRixJQUFJLENBQUMxSSxDQUFDLEdBQUcwSSxJQUFJLENBQUM5eEIsSUFBSTtJQUNsQjh4QixJQUFJLENBQUN4SSxDQUFDLEdBQUd3SSxJQUFJLENBQUMxTixHQUFHO0lBQ2pCLE9BQU8wTixJQUFJO0VBQ2I7RUFFQSxTQUFTSSwwQkFBMEJBLENBQUN4ekIsT0FBTyxFQUFFeXpCLGNBQWMsRUFBRS9LLFFBQVEsRUFBRTtJQUNyRSxPQUFPK0ssY0FBYyxLQUFLdk4sUUFBUSxHQUFHaU4sZ0JBQWdCLENBQUNqQixlQUFlLENBQUNseUIsT0FBTyxFQUFFMG9CLFFBQVEsQ0FBQyxDQUFDLEdBQUdoQixTQUFTLENBQUMrTCxjQUFjLENBQUMsR0FBR0osMEJBQTBCLENBQUNJLGNBQWMsRUFBRS9LLFFBQVEsQ0FBQyxHQUFHeUssZ0JBQWdCLENBQUNkLGVBQWUsQ0FBQ2pILGtCQUFrQixDQUFDcHJCLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDL08sQ0FBQyxDQUFDO0VBQ0Y7RUFDQTs7RUFHQSxTQUFTMHpCLGtCQUFrQkEsQ0FBQzF6QixPQUFPLEVBQUU7SUFDbkMsSUFBSWltQixlQUFlLEdBQUcrTSxpQkFBaUIsQ0FBQzNILGFBQWEsQ0FBQ3JyQixPQUFPLENBQUMsQ0FBQztJQUMvRCxJQUFJMnpCLGlCQUFpQixHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDcnFCLE9BQU8sQ0FBQzRoQixrQkFBa0IsQ0FBQ2xyQixPQUFPLENBQUMsQ0FBQ3dvQixRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2hHLElBQUlvTCxjQUFjLEdBQUdELGlCQUFpQixJQUFJL0wsYUFBYSxDQUFDNW5CLE9BQU8sQ0FBQyxHQUFHa3NCLGVBQWUsQ0FBQ2xzQixPQUFPLENBQUMsR0FBR0EsT0FBTztJQUVyRyxJQUFJLENBQUMwbkIsU0FBUyxDQUFDa00sY0FBYyxDQUFDLEVBQUU7TUFDOUIsT0FBTyxFQUFFO0lBQ1gsQ0FBQyxDQUFDOztJQUdGLE9BQU8zTixlQUFlLENBQUN4VSxNQUFNLENBQUMsVUFBVWdpQixjQUFjLEVBQUU7TUFDdEQsT0FBTy9MLFNBQVMsQ0FBQytMLGNBQWMsQ0FBQyxJQUFJOXRCLFFBQVEsQ0FBQzh0QixjQUFjLEVBQUVHLGNBQWMsQ0FBQyxJQUFJeE0sV0FBVyxDQUFDcU0sY0FBYyxDQUFDLEtBQUssTUFBTTtJQUN4SCxDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7RUFDRjs7RUFHQSxTQUFTSSxlQUFlQSxDQUFDN3pCLE9BQU8sRUFBRTh6QixRQUFRLEVBQUVDLFlBQVksRUFBRXJMLFFBQVEsRUFBRTtJQUNsRSxJQUFJc0wsbUJBQW1CLEdBQUdGLFFBQVEsS0FBSyxpQkFBaUIsR0FBR0osa0JBQWtCLENBQUMxekIsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDdUIsTUFBTSxDQUFDdXlCLFFBQVEsQ0FBQztJQUM1RyxJQUFJN04sZUFBZSxHQUFHLEVBQUUsQ0FBQzFrQixNQUFNLENBQUN5eUIsbUJBQW1CLEVBQUUsQ0FBQ0QsWUFBWSxDQUFDLENBQUM7SUFDcEUsSUFBSUUsbUJBQW1CLEdBQUdoTyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVDLElBQUlpTyxZQUFZLEdBQUdqTyxlQUFlLENBQUNLLE1BQU0sQ0FBQyxVQUFVNk4sT0FBTyxFQUFFVixjQUFjLEVBQUU7TUFDM0UsSUFBSUwsSUFBSSxHQUFHSSwwQkFBMEIsQ0FBQ3h6QixPQUFPLEVBQUV5ekIsY0FBYyxFQUFFL0ssUUFBUSxDQUFDO01BQ3hFeUwsT0FBTyxDQUFDek8sR0FBRyxHQUFHbmMsR0FBRyxDQUFDNnBCLElBQUksQ0FBQzFOLEdBQUcsRUFBRXlPLE9BQU8sQ0FBQ3pPLEdBQUcsQ0FBQztNQUN4Q3lPLE9BQU8sQ0FBQ3ZPLEtBQUssR0FBR3BjLEdBQUcsQ0FBQzRwQixJQUFJLENBQUN4TixLQUFLLEVBQUV1TyxPQUFPLENBQUN2TyxLQUFLLENBQUM7TUFDOUN1TyxPQUFPLENBQUN4TyxNQUFNLEdBQUduYyxHQUFHLENBQUM0cEIsSUFBSSxDQUFDek4sTUFBTSxFQUFFd08sT0FBTyxDQUFDeE8sTUFBTSxDQUFDO01BQ2pEd08sT0FBTyxDQUFDN3lCLElBQUksR0FBR2lJLEdBQUcsQ0FBQzZwQixJQUFJLENBQUM5eEIsSUFBSSxFQUFFNnlCLE9BQU8sQ0FBQzd5QixJQUFJLENBQUM7TUFDM0MsT0FBTzZ5QixPQUFPO0lBQ2hCLENBQUMsRUFBRVgsMEJBQTBCLENBQUN4ekIsT0FBTyxFQUFFaTBCLG1CQUFtQixFQUFFdkwsUUFBUSxDQUFDLENBQUM7SUFDdEV3TCxZQUFZLENBQUM1SixLQUFLLEdBQUc0SixZQUFZLENBQUN0TyxLQUFLLEdBQUdzTyxZQUFZLENBQUM1eUIsSUFBSTtJQUMzRDR5QixZQUFZLENBQUMzSixNQUFNLEdBQUcySixZQUFZLENBQUN2TyxNQUFNLEdBQUd1TyxZQUFZLENBQUN4TyxHQUFHO0lBQzVEd08sWUFBWSxDQUFDeEosQ0FBQyxHQUFHd0osWUFBWSxDQUFDNXlCLElBQUk7SUFDbEM0eUIsWUFBWSxDQUFDdEosQ0FBQyxHQUFHc0osWUFBWSxDQUFDeE8sR0FBRztJQUNqQyxPQUFPd08sWUFBWTtFQUNyQjtFQUVBLFNBQVNFLGNBQWNBLENBQUNwTSxJQUFJLEVBQUU7SUFDNUIsSUFBSTVCLFNBQVMsR0FBRzRCLElBQUksQ0FBQzVCLFNBQVM7TUFDMUJwbUIsT0FBTyxHQUFHZ29CLElBQUksQ0FBQ2hvQixPQUFPO01BQ3RCd21CLFNBQVMsR0FBR3dCLElBQUksQ0FBQ3hCLFNBQVM7SUFDOUIsSUFBSTZHLGFBQWEsR0FBRzdHLFNBQVMsR0FBRzZDLGdCQUFnQixDQUFDN0MsU0FBUyxDQUFDLEdBQUcsSUFBSTtJQUNsRSxJQUFJNEksU0FBUyxHQUFHNUksU0FBUyxHQUFHbUksWUFBWSxDQUFDbkksU0FBUyxDQUFDLEdBQUcsSUFBSTtJQUMxRCxJQUFJNk4sT0FBTyxHQUFHak8sU0FBUyxDQUFDc0UsQ0FBQyxHQUFHdEUsU0FBUyxDQUFDa0UsS0FBSyxHQUFHLENBQUMsR0FBR3RxQixPQUFPLENBQUNzcUIsS0FBSyxHQUFHLENBQUM7SUFDbkUsSUFBSWdLLE9BQU8sR0FBR2xPLFNBQVMsQ0FBQ3dFLENBQUMsR0FBR3hFLFNBQVMsQ0FBQ21FLE1BQU0sR0FBRyxDQUFDLEdBQUd2cUIsT0FBTyxDQUFDdXFCLE1BQU0sR0FBRyxDQUFDO0lBQ3JFLElBQUk4RSxPQUFPO0lBRVgsUUFBUWhDLGFBQWE7TUFDbkIsS0FBSzNILEdBQUc7UUFDTjJKLE9BQU8sR0FBRztVQUNSM0UsQ0FBQyxFQUFFMkosT0FBTztVQUNWekosQ0FBQyxFQUFFeEUsU0FBUyxDQUFDd0UsQ0FBQyxHQUFHNXFCLE9BQU8sQ0FBQ3VxQjtRQUMzQixDQUFDO1FBQ0Q7TUFFRixLQUFLNUUsTUFBTTtRQUNUMEosT0FBTyxHQUFHO1VBQ1IzRSxDQUFDLEVBQUUySixPQUFPO1VBQ1Z6SixDQUFDLEVBQUV4RSxTQUFTLENBQUN3RSxDQUFDLEdBQUd4RSxTQUFTLENBQUNtRTtRQUM3QixDQUFDO1FBQ0Q7TUFFRixLQUFLM0UsS0FBSztRQUNSeUosT0FBTyxHQUFHO1VBQ1IzRSxDQUFDLEVBQUV0RSxTQUFTLENBQUNzRSxDQUFDLEdBQUd0RSxTQUFTLENBQUNrRSxLQUFLO1VBQ2hDTSxDQUFDLEVBQUUwSjtRQUNMLENBQUM7UUFDRDtNQUVGLEtBQUtoekIsSUFBSTtRQUNQK3RCLE9BQU8sR0FBRztVQUNSM0UsQ0FBQyxFQUFFdEUsU0FBUyxDQUFDc0UsQ0FBQyxHQUFHMXFCLE9BQU8sQ0FBQ3NxQixLQUFLO1VBQzlCTSxDQUFDLEVBQUUwSjtRQUNMLENBQUM7UUFDRDtNQUVGO1FBQ0VqRixPQUFPLEdBQUc7VUFDUjNFLENBQUMsRUFBRXRFLFNBQVMsQ0FBQ3NFLENBQUM7VUFDZEUsQ0FBQyxFQUFFeEUsU0FBUyxDQUFDd0U7UUFDZixDQUFDO0lBQUM7SUFHTixJQUFJMkosUUFBUSxHQUFHbEgsYUFBYSxHQUFHbEIsd0JBQXdCLENBQUNrQixhQUFhLENBQUMsR0FBRyxJQUFJO0lBRTdFLElBQUlrSCxRQUFRLElBQUksSUFBSSxFQUFFO01BQ3BCLElBQUkvRyxHQUFHLEdBQUcrRyxRQUFRLEtBQUssR0FBRyxHQUFHLFFBQVEsR0FBRyxPQUFPO01BRS9DLFFBQVFuRixTQUFTO1FBQ2YsS0FBS3JKLEtBQUs7VUFDUnNKLE9BQU8sQ0FBQ2tGLFFBQVEsQ0FBQyxHQUFHbEYsT0FBTyxDQUFDa0YsUUFBUSxDQUFDLElBQUluTyxTQUFTLENBQUNvSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUd4dEIsT0FBTyxDQUFDd3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUMvRTtRQUVGLEtBQUt4SCxHQUFHO1VBQ05xSixPQUFPLENBQUNrRixRQUFRLENBQUMsR0FBR2xGLE9BQU8sQ0FBQ2tGLFFBQVEsQ0FBQyxJQUFJbk8sU0FBUyxDQUFDb0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHeHRCLE9BQU8sQ0FBQ3d0QixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7VUFDL0U7TUFBTTtJQUVaO0lBRUEsT0FBTzZCLE9BQU87RUFDaEI7RUFFQSxTQUFTbUYsY0FBY0EsQ0FBQ3ZNLEtBQUssRUFBRVEsT0FBTyxFQUFFO0lBQ3RDLElBQUlBLE9BQU8sS0FBSyxLQUFLLENBQUMsRUFBRTtNQUN0QkEsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNkO0lBRUEsSUFBSWdNLFFBQVEsR0FBR2hNLE9BQU87TUFDbEJpTSxrQkFBa0IsR0FBR0QsUUFBUSxDQUFDak8sU0FBUztNQUN2Q0EsU0FBUyxHQUFHa08sa0JBQWtCLEtBQUssS0FBSyxDQUFDLEdBQUd6TSxLQUFLLENBQUN6QixTQUFTLEdBQUdrTyxrQkFBa0I7TUFDaEZDLGlCQUFpQixHQUFHRixRQUFRLENBQUMvTCxRQUFRO01BQ3JDQSxRQUFRLEdBQUdpTSxpQkFBaUIsS0FBSyxLQUFLLENBQUMsR0FBRzFNLEtBQUssQ0FBQ1MsUUFBUSxHQUFHaU0saUJBQWlCO01BQzVFQyxpQkFBaUIsR0FBR0gsUUFBUSxDQUFDWCxRQUFRO01BQ3JDQSxRQUFRLEdBQUdjLGlCQUFpQixLQUFLLEtBQUssQ0FBQyxHQUFHM08sZUFBZSxHQUFHMk8saUJBQWlCO01BQzdFQyxxQkFBcUIsR0FBR0osUUFBUSxDQUFDVixZQUFZO01BQzdDQSxZQUFZLEdBQUdjLHFCQUFxQixLQUFLLEtBQUssQ0FBQyxHQUFHM08sUUFBUSxHQUFHMk8scUJBQXFCO01BQ2xGQyxxQkFBcUIsR0FBR0wsUUFBUSxDQUFDTSxjQUFjO01BQy9DQSxjQUFjLEdBQUdELHFCQUFxQixLQUFLLEtBQUssQ0FBQyxHQUFHM08sTUFBTSxHQUFHMk8scUJBQXFCO01BQ2xGRSxvQkFBb0IsR0FBR1AsUUFBUSxDQUFDUSxXQUFXO01BQzNDQSxXQUFXLEdBQUdELG9CQUFvQixLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBR0Esb0JBQW9CO01BQzVFRSxnQkFBZ0IsR0FBR1QsUUFBUSxDQUFDMUgsT0FBTztNQUNuQ0EsT0FBTyxHQUFHbUksZ0JBQWdCLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxnQkFBZ0I7SUFDaEUsSUFBSXZJLGFBQWEsR0FBR0Qsa0JBQWtCLENBQUMsT0FBT0ssT0FBTyxLQUFLLFFBQVEsR0FBR0EsT0FBTyxHQUFHSCxlQUFlLENBQUNHLE9BQU8sRUFBRWpILGNBQWMsQ0FBQyxDQUFDO0lBQ3hILElBQUlxUCxVQUFVLEdBQUdKLGNBQWMsS0FBSzVPLE1BQU0sR0FBR0MsU0FBUyxHQUFHRCxNQUFNO0lBQy9ELElBQUlnSixVQUFVLEdBQUdsSCxLQUFLLENBQUMrRSxLQUFLLENBQUM3RyxNQUFNO0lBQ25DLElBQUlubUIsT0FBTyxHQUFHaW9CLEtBQUssQ0FBQ0MsUUFBUSxDQUFDK00sV0FBVyxHQUFHRSxVQUFVLEdBQUdKLGNBQWMsQ0FBQztJQUN2RSxJQUFJSyxrQkFBa0IsR0FBR3ZCLGVBQWUsQ0FBQ25NLFNBQVMsQ0FBQzFuQixPQUFPLENBQUMsR0FBR0EsT0FBTyxHQUFHQSxPQUFPLENBQUNxMUIsY0FBYyxJQUFJakssa0JBQWtCLENBQUNuRCxLQUFLLENBQUNDLFFBQVEsQ0FBQy9CLE1BQU0sQ0FBQyxFQUFFMk4sUUFBUSxFQUFFQyxZQUFZLEVBQUVyTCxRQUFRLENBQUM7SUFDOUssSUFBSTRNLG1CQUFtQixHQUFHeFEscUJBQXFCLENBQUNtRCxLQUFLLENBQUNDLFFBQVEsQ0FBQzlCLFNBQVMsQ0FBQztJQUN6RSxJQUFJK0csYUFBYSxHQUFHaUgsY0FBYyxDQUFDO01BQ2pDaE8sU0FBUyxFQUFFa1AsbUJBQW1CO01BQzlCdDFCLE9BQU8sRUFBRW12QixVQUFVO01BQ25CekcsUUFBUSxFQUFFLFVBQVU7TUFDcEJsQyxTQUFTLEVBQUVBO0lBQ2IsQ0FBQyxDQUFDO0lBQ0YsSUFBSStPLGdCQUFnQixHQUFHcEMsZ0JBQWdCLENBQUNqd0IsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRStHLFVBQVUsRUFBRWhDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JGLElBQUlxSSxpQkFBaUIsR0FBR1QsY0FBYyxLQUFLNU8sTUFBTSxHQUFHb1AsZ0JBQWdCLEdBQUdELG1CQUFtQixDQUFDLENBQUM7SUFDNUY7O0lBRUEsSUFBSUcsZUFBZSxHQUFHO01BQ3BCL1AsR0FBRyxFQUFFMFAsa0JBQWtCLENBQUMxUCxHQUFHLEdBQUc4UCxpQkFBaUIsQ0FBQzlQLEdBQUcsR0FBR2lILGFBQWEsQ0FBQ2pILEdBQUc7TUFDdkVDLE1BQU0sRUFBRTZQLGlCQUFpQixDQUFDN1AsTUFBTSxHQUFHeVAsa0JBQWtCLENBQUN6UCxNQUFNLEdBQUdnSCxhQUFhLENBQUNoSCxNQUFNO01BQ25GcmtCLElBQUksRUFBRTh6QixrQkFBa0IsQ0FBQzl6QixJQUFJLEdBQUdrMEIsaUJBQWlCLENBQUNsMEIsSUFBSSxHQUFHcXJCLGFBQWEsQ0FBQ3JyQixJQUFJO01BQzNFc2tCLEtBQUssRUFBRTRQLGlCQUFpQixDQUFDNVAsS0FBSyxHQUFHd1Asa0JBQWtCLENBQUN4UCxLQUFLLEdBQUcrRyxhQUFhLENBQUMvRztJQUM1RSxDQUFDO0lBQ0QsSUFBSThQLFVBQVUsR0FBR3pOLEtBQUssQ0FBQ21GLGFBQWEsQ0FBQ2dCLE1BQU0sQ0FBQyxDQUFDOztJQUU3QyxJQUFJMkcsY0FBYyxLQUFLNU8sTUFBTSxJQUFJdVAsVUFBVSxFQUFFO01BQzNDLElBQUl0SCxNQUFNLEdBQUdzSCxVQUFVLENBQUNsUCxTQUFTLENBQUM7TUFDbEN0akIsTUFBTSxDQUFDK0ssSUFBSSxDQUFDd25CLGVBQWUsQ0FBQyxDQUFDLzBCLE9BQU8sQ0FBQyxVQUFVYixHQUFHLEVBQUU7UUFDbEQsSUFBSTgxQixRQUFRLEdBQUcsQ0FBQy9QLEtBQUssRUFBRUQsTUFBTSxDQUFDLENBQUNyYyxPQUFPLENBQUN6SixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6RCxJQUFJeXRCLElBQUksR0FBRyxDQUFDNUgsR0FBRyxFQUFFQyxNQUFNLENBQUMsQ0FBQ3JjLE9BQU8sQ0FBQ3pKLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRztRQUN0RDQxQixlQUFlLENBQUM1MUIsR0FBRyxDQUFDLElBQUl1dUIsTUFBTSxDQUFDZCxJQUFJLENBQUMsR0FBR3FJLFFBQVE7TUFDakQsQ0FBQyxDQUFDO0lBQ0o7SUFFQSxPQUFPRixlQUFlO0VBQ3hCO0VBRUEsU0FBU0csb0JBQW9CQSxDQUFDM04sS0FBSyxFQUFFUSxPQUFPLEVBQUU7SUFDNUMsSUFBSUEsT0FBTyxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQ3RCQSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2Q7SUFFQSxJQUFJZ00sUUFBUSxHQUFHaE0sT0FBTztNQUNsQmpDLFNBQVMsR0FBR2lPLFFBQVEsQ0FBQ2pPLFNBQVM7TUFDOUJzTixRQUFRLEdBQUdXLFFBQVEsQ0FBQ1gsUUFBUTtNQUM1QkMsWUFBWSxHQUFHVSxRQUFRLENBQUNWLFlBQVk7TUFDcENoSCxPQUFPLEdBQUcwSCxRQUFRLENBQUMxSCxPQUFPO01BQzFCOEksY0FBYyxHQUFHcEIsUUFBUSxDQUFDb0IsY0FBYztNQUN4Q0MscUJBQXFCLEdBQUdyQixRQUFRLENBQUNzQixxQkFBcUI7TUFDdERBLHFCQUFxQixHQUFHRCxxQkFBcUIsS0FBSyxLQUFLLENBQUMsR0FBR3JQLFVBQVUsR0FBR3FQLHFCQUFxQjtJQUNqRyxJQUFJMUcsU0FBUyxHQUFHVCxZQUFZLENBQUNuSSxTQUFTLENBQUM7SUFDdkMsSUFBSXdQLFlBQVksR0FBRzVHLFNBQVMsR0FBR3lHLGNBQWMsR0FBR3hQLG1CQUFtQixHQUFHQSxtQkFBbUIsQ0FBQzVVLE1BQU0sQ0FBQyxVQUFVK1UsU0FBUyxFQUFFO01BQ3BILE9BQU9tSSxZQUFZLENBQUNuSSxTQUFTLENBQUMsS0FBSzRJLFNBQVM7SUFDOUMsQ0FBQyxDQUFDLEdBQUd0SixjQUFjO0lBQ25CLElBQUltUSxpQkFBaUIsR0FBR0QsWUFBWSxDQUFDdmtCLE1BQU0sQ0FBQyxVQUFVK1UsU0FBUyxFQUFFO01BQy9ELE9BQU91UCxxQkFBcUIsQ0FBQ3pzQixPQUFPLENBQUNrZCxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUMsQ0FBQztJQUVGLElBQUl5UCxpQkFBaUIsQ0FBQ24xQixNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ2xDbTFCLGlCQUFpQixHQUFHRCxZQUFZO0lBQ2xDLENBQUMsQ0FBQzs7SUFHRixJQUFJRSxTQUFTLEdBQUdELGlCQUFpQixDQUFDM1AsTUFBTSxDQUFDLFVBQVVDLEdBQUcsRUFBRUMsU0FBUyxFQUFFO01BQ2pFRCxHQUFHLENBQUNDLFNBQVMsQ0FBQyxHQUFHZ08sY0FBYyxDQUFDdk0sS0FBSyxFQUFFO1FBQ3JDekIsU0FBUyxFQUFFQSxTQUFTO1FBQ3BCc04sUUFBUSxFQUFFQSxRQUFRO1FBQ2xCQyxZQUFZLEVBQUVBLFlBQVk7UUFDMUJoSCxPQUFPLEVBQUVBO01BQ1gsQ0FBQyxDQUFDLENBQUMxRCxnQkFBZ0IsQ0FBQzdDLFNBQVMsQ0FBQyxDQUFDO01BQy9CLE9BQU9ELEdBQUc7SUFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDTixPQUFPcmpCLE1BQU0sQ0FBQytLLElBQUksQ0FBQ2lvQixTQUFTLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQVVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQ2pELE9BQU9ILFNBQVMsQ0FBQ0UsQ0FBQyxDQUFDLEdBQUdGLFNBQVMsQ0FBQ0csQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQztFQUNKO0VBRUEsU0FBU0MsNkJBQTZCQSxDQUFDOVAsU0FBUyxFQUFFO0lBQ2hELElBQUk2QyxnQkFBZ0IsQ0FBQzdDLFNBQVMsQ0FBQyxLQUFLWCxJQUFJLEVBQUU7TUFDeEMsT0FBTyxFQUFFO0lBQ1g7SUFFQSxJQUFJMFEsaUJBQWlCLEdBQUcvRSxvQkFBb0IsQ0FBQ2hMLFNBQVMsQ0FBQztJQUN2RCxPQUFPLENBQUNtTCw2QkFBNkIsQ0FBQ25MLFNBQVMsQ0FBQyxFQUFFK1AsaUJBQWlCLEVBQUU1RSw2QkFBNkIsQ0FBQzRFLGlCQUFpQixDQUFDLENBQUM7RUFDeEg7RUFFQSxTQUFTQyxJQUFJQSxDQUFDeE8sSUFBSSxFQUFFO0lBQ2xCLElBQUlDLEtBQUssR0FBR0QsSUFBSSxDQUFDQyxLQUFLO01BQ2xCUSxPQUFPLEdBQUdULElBQUksQ0FBQ1MsT0FBTztNQUN0QmpoQixJQUFJLEdBQUd3Z0IsSUFBSSxDQUFDeGdCLElBQUk7SUFFcEIsSUFBSXlnQixLQUFLLENBQUNtRixhQUFhLENBQUM1bEIsSUFBSSxDQUFDLENBQUNpdkIsS0FBSyxFQUFFO01BQ25DO0lBQ0Y7SUFFQSxJQUFJQyxpQkFBaUIsR0FBR2pPLE9BQU8sQ0FBQzhMLFFBQVE7TUFDcENvQyxhQUFhLEdBQUdELGlCQUFpQixLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBR0EsaUJBQWlCO01BQ3ZFRSxnQkFBZ0IsR0FBR25PLE9BQU8sQ0FBQ29PLE9BQU87TUFDbENDLFlBQVksR0FBR0YsZ0JBQWdCLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHQSxnQkFBZ0I7TUFDcEVHLDJCQUEyQixHQUFHdE8sT0FBTyxDQUFDdU8sa0JBQWtCO01BQ3hEakssT0FBTyxHQUFHdEUsT0FBTyxDQUFDc0UsT0FBTztNQUN6QitHLFFBQVEsR0FBR3JMLE9BQU8sQ0FBQ3FMLFFBQVE7TUFDM0JDLFlBQVksR0FBR3RMLE9BQU8sQ0FBQ3NMLFlBQVk7TUFDbkNrQixXQUFXLEdBQUd4TSxPQUFPLENBQUN3TSxXQUFXO01BQ2pDZ0MscUJBQXFCLEdBQUd4TyxPQUFPLENBQUNvTixjQUFjO01BQzlDQSxjQUFjLEdBQUdvQixxQkFBcUIsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUdBLHFCQUFxQjtNQUNoRmxCLHFCQUFxQixHQUFHdE4sT0FBTyxDQUFDc04scUJBQXFCO0lBQ3pELElBQUltQixrQkFBa0IsR0FBR2pQLEtBQUssQ0FBQ1EsT0FBTyxDQUFDakMsU0FBUztJQUNoRCxJQUFJNkcsYUFBYSxHQUFHaEUsZ0JBQWdCLENBQUM2TixrQkFBa0IsQ0FBQztJQUN4RCxJQUFJQyxlQUFlLEdBQUc5SixhQUFhLEtBQUs2SixrQkFBa0I7SUFDMUQsSUFBSUYsa0JBQWtCLEdBQUdELDJCQUEyQixLQUFLSSxlQUFlLElBQUksQ0FBQ3RCLGNBQWMsR0FBRyxDQUFDckUsb0JBQW9CLENBQUMwRixrQkFBa0IsQ0FBQyxDQUFDLEdBQUdaLDZCQUE2QixDQUFDWSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzdMLElBQUl6USxVQUFVLEdBQUcsQ0FBQ3lRLGtCQUFrQixDQUFDLENBQUMzMUIsTUFBTSxDQUFDeTFCLGtCQUFrQixDQUFDLENBQUMxUSxNQUFNLENBQUMsVUFBVUMsR0FBRyxFQUFFQyxTQUFTLEVBQUU7TUFDaEcsT0FBT0QsR0FBRyxDQUFDaGxCLE1BQU0sQ0FBQzhuQixnQkFBZ0IsQ0FBQzdDLFNBQVMsQ0FBQyxLQUFLWCxJQUFJLEdBQUcrUCxvQkFBb0IsQ0FBQzNOLEtBQUssRUFBRTtRQUNuRnpCLFNBQVMsRUFBRUEsU0FBUztRQUNwQnNOLFFBQVEsRUFBRUEsUUFBUTtRQUNsQkMsWUFBWSxFQUFFQSxZQUFZO1FBQzFCaEgsT0FBTyxFQUFFQSxPQUFPO1FBQ2hCOEksY0FBYyxFQUFFQSxjQUFjO1FBQzlCRSxxQkFBcUIsRUFBRUE7TUFDekIsQ0FBQyxDQUFDLEdBQUd2UCxTQUFTLENBQUM7SUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNOLElBQUk0USxhQUFhLEdBQUduUCxLQUFLLENBQUMrRSxLQUFLLENBQUM1RyxTQUFTO0lBQ3pDLElBQUkrSSxVQUFVLEdBQUdsSCxLQUFLLENBQUMrRSxLQUFLLENBQUM3RyxNQUFNO0lBQ25DLElBQUlrUixTQUFTLEdBQUcsSUFBSXJuQixHQUFHLEVBQUU7SUFDekIsSUFBSXNuQixrQkFBa0IsR0FBRyxJQUFJO0lBQzdCLElBQUlDLHFCQUFxQixHQUFHOVEsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUV6QyxLQUFLLElBQUkrUSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcvUSxVQUFVLENBQUMzbEIsTUFBTSxFQUFFMDJCLENBQUMsRUFBRSxFQUFFO01BQzFDLElBQUloUixTQUFTLEdBQUdDLFVBQVUsQ0FBQytRLENBQUMsQ0FBQztNQUU3QixJQUFJQyxjQUFjLEdBQUdwTyxnQkFBZ0IsQ0FBQzdDLFNBQVMsQ0FBQztNQUVoRCxJQUFJa1IsZ0JBQWdCLEdBQUcvSSxZQUFZLENBQUNuSSxTQUFTLENBQUMsS0FBS1QsS0FBSztNQUN4RCxJQUFJd0gsVUFBVSxHQUFHLENBQUM3SCxHQUFHLEVBQUVDLE1BQU0sQ0FBQyxDQUFDcmMsT0FBTyxDQUFDbXVCLGNBQWMsQ0FBQyxJQUFJLENBQUM7TUFDM0QsSUFBSWpLLEdBQUcsR0FBR0QsVUFBVSxHQUFHLE9BQU8sR0FBRyxRQUFRO01BQ3pDLElBQUlxRixRQUFRLEdBQUc0QixjQUFjLENBQUN2TSxLQUFLLEVBQUU7UUFDbkN6QixTQUFTLEVBQUVBLFNBQVM7UUFDcEJzTixRQUFRLEVBQUVBLFFBQVE7UUFDbEJDLFlBQVksRUFBRUEsWUFBWTtRQUMxQmtCLFdBQVcsRUFBRUEsV0FBVztRQUN4QmxJLE9BQU8sRUFBRUE7TUFDWCxDQUFDLENBQUM7TUFDRixJQUFJNEssaUJBQWlCLEdBQUdwSyxVQUFVLEdBQUdtSyxnQkFBZ0IsR0FBRzlSLEtBQUssR0FBR3RrQixJQUFJLEdBQUdvMkIsZ0JBQWdCLEdBQUcvUixNQUFNLEdBQUdELEdBQUc7TUFFdEcsSUFBSTBSLGFBQWEsQ0FBQzVKLEdBQUcsQ0FBQyxHQUFHMkIsVUFBVSxDQUFDM0IsR0FBRyxDQUFDLEVBQUU7UUFDeENtSyxpQkFBaUIsR0FBR25HLG9CQUFvQixDQUFDbUcsaUJBQWlCLENBQUM7TUFDN0Q7TUFFQSxJQUFJQyxnQkFBZ0IsR0FBR3BHLG9CQUFvQixDQUFDbUcsaUJBQWlCLENBQUM7TUFDOUQsSUFBSUUsTUFBTSxHQUFHLEVBQUU7TUFFZixJQUFJbEIsYUFBYSxFQUFFO1FBQ2pCa0IsTUFBTSxDQUFDM3dCLElBQUksQ0FBQzByQixRQUFRLENBQUM2RSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDNUM7TUFFQSxJQUFJWCxZQUFZLEVBQUU7UUFDaEJlLE1BQU0sQ0FBQzN3QixJQUFJLENBQUMwckIsUUFBUSxDQUFDK0UsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUvRSxRQUFRLENBQUNnRixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUNoRjtNQUVBLElBQUlDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLFVBQVVDLEtBQUssRUFBRTtRQUNoQyxPQUFPQSxLQUFLO01BQ2QsQ0FBQyxDQUFDLEVBQUU7UUFDRlIscUJBQXFCLEdBQUcvUSxTQUFTO1FBQ2pDOFEsa0JBQWtCLEdBQUcsS0FBSztRQUMxQjtNQUNGO01BRUFELFNBQVMsQ0FBQ25uQixHQUFHLENBQUNzVyxTQUFTLEVBQUVxUixNQUFNLENBQUM7SUFDbEM7SUFFQSxJQUFJUCxrQkFBa0IsRUFBRTtNQUN0QjtNQUNBLElBQUlVLGNBQWMsR0FBR25DLGNBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQztNQUUzQyxJQUFJb0MsS0FBSyxHQUFHLFNBQVNBLEtBQUtBLENBQUNDLEVBQUUsRUFBRTtRQUM3QixJQUFJQyxnQkFBZ0IsR0FBRzFSLFVBQVUsQ0FBQzFhLElBQUksQ0FBQyxVQUFVeWEsU0FBUyxFQUFFO1VBQzFELElBQUlxUixNQUFNLEdBQUdSLFNBQVMsQ0FBQ3ZuQixHQUFHLENBQUMwVyxTQUFTLENBQUM7VUFFckMsSUFBSXFSLE1BQU0sRUFBRTtZQUNWLE9BQU9BLE1BQU0sQ0FBQ3hwQixLQUFLLENBQUMsQ0FBQyxFQUFFNnBCLEVBQUUsQ0FBQyxDQUFDSixLQUFLLENBQUMsVUFBVUMsS0FBSyxFQUFFO2NBQ2hELE9BQU9BLEtBQUs7WUFDZCxDQUFDLENBQUM7VUFDSjtRQUNGLENBQUMsQ0FBQztRQUVGLElBQUlJLGdCQUFnQixFQUFFO1VBQ3BCWixxQkFBcUIsR0FBR1ksZ0JBQWdCO1VBQ3hDLE9BQU8sT0FBTztRQUNoQjtNQUNGLENBQUM7TUFFRCxLQUFLLElBQUlELEVBQUUsR0FBR0YsY0FBYyxFQUFFRSxFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEVBQUUsRUFBRTtRQUMxQyxJQUFJRSxJQUFJLEdBQUdILEtBQUssQ0FBQ0MsRUFBRSxDQUFDO1FBRXBCLElBQUlFLElBQUksS0FBSyxPQUFPLEVBQUU7TUFDeEI7SUFDRjtJQUVBLElBQUluUSxLQUFLLENBQUN6QixTQUFTLEtBQUsrUSxxQkFBcUIsRUFBRTtNQUM3Q3RQLEtBQUssQ0FBQ21GLGFBQWEsQ0FBQzVsQixJQUFJLENBQUMsQ0FBQ2l2QixLQUFLLEdBQUcsSUFBSTtNQUN0Q3hPLEtBQUssQ0FBQ3pCLFNBQVMsR0FBRytRLHFCQUFxQjtNQUN2Q3RQLEtBQUssQ0FBQ29RLEtBQUssR0FBRyxJQUFJO0lBQ3BCO0VBQ0YsQ0FBQyxDQUFDOztFQUdGLElBQU1DLE1BQU0sR0FBRztJQUNiOXdCLElBQUksRUFBRSxNQUFNO0lBQ1p5aEIsT0FBTyxFQUFFLElBQUk7SUFDYkMsS0FBSyxFQUFFLE1BQU07SUFDYnZoQixFQUFFLEVBQUU2dUIsSUFBSTtJQUNSOUgsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFDNUJsWCxJQUFJLEVBQUU7TUFDSmlmLEtBQUssRUFBRTtJQUNUO0VBQ0YsQ0FBQztFQUVELFNBQVM4QixjQUFjQSxDQUFDM0YsUUFBUSxFQUFFUSxJQUFJLEVBQUVvRixnQkFBZ0IsRUFBRTtJQUN4RCxJQUFJQSxnQkFBZ0IsS0FBSyxLQUFLLENBQUMsRUFBRTtNQUMvQkEsZ0JBQWdCLEdBQUc7UUFDakI5TixDQUFDLEVBQUUsQ0FBQztRQUNKRSxDQUFDLEVBQUU7TUFDTCxDQUFDO0lBQ0g7SUFFQSxPQUFPO01BQ0xsRixHQUFHLEVBQUVrTixRQUFRLENBQUNsTixHQUFHLEdBQUcwTixJQUFJLENBQUM3SSxNQUFNLEdBQUdpTyxnQkFBZ0IsQ0FBQzVOLENBQUM7TUFDcERoRixLQUFLLEVBQUVnTixRQUFRLENBQUNoTixLQUFLLEdBQUd3TixJQUFJLENBQUM5SSxLQUFLLEdBQUdrTyxnQkFBZ0IsQ0FBQzlOLENBQUM7TUFDdkQvRSxNQUFNLEVBQUVpTixRQUFRLENBQUNqTixNQUFNLEdBQUd5TixJQUFJLENBQUM3SSxNQUFNLEdBQUdpTyxnQkFBZ0IsQ0FBQzVOLENBQUM7TUFDMUR0cEIsSUFBSSxFQUFFc3hCLFFBQVEsQ0FBQ3R4QixJQUFJLEdBQUc4eEIsSUFBSSxDQUFDOUksS0FBSyxHQUFHa08sZ0JBQWdCLENBQUM5TjtJQUN0RCxDQUFDO0VBQ0g7RUFFQSxTQUFTK04scUJBQXFCQSxDQUFDN0YsUUFBUSxFQUFFO0lBQ3ZDLE9BQU8sQ0FBQ2xOLEdBQUcsRUFBRUUsS0FBSyxFQUFFRCxNQUFNLEVBQUVya0IsSUFBSSxDQUFDLENBQUNvM0IsSUFBSSxDQUFDLFVBQVVDLElBQUksRUFBRTtNQUNyRCxPQUFPL0YsUUFBUSxDQUFDK0YsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDLENBQUM7RUFDSjtFQUVBLFNBQVM1VSxJQUFJQSxDQUFDaUUsSUFBSSxFQUFFO0lBQ2xCLElBQUlDLEtBQUssR0FBR0QsSUFBSSxDQUFDQyxLQUFLO01BQ2xCemdCLElBQUksR0FBR3dnQixJQUFJLENBQUN4Z0IsSUFBSTtJQUNwQixJQUFJNHZCLGFBQWEsR0FBR25QLEtBQUssQ0FBQytFLEtBQUssQ0FBQzVHLFNBQVM7SUFDekMsSUFBSStJLFVBQVUsR0FBR2xILEtBQUssQ0FBQytFLEtBQUssQ0FBQzdHLE1BQU07SUFDbkMsSUFBSXFTLGdCQUFnQixHQUFHdlEsS0FBSyxDQUFDbUYsYUFBYSxDQUFDd0wsZUFBZTtJQUMxRCxJQUFJQyxpQkFBaUIsR0FBR3JFLGNBQWMsQ0FBQ3ZNLEtBQUssRUFBRTtNQUM1QzhNLGNBQWMsRUFBRTtJQUNsQixDQUFDLENBQUM7SUFDRixJQUFJK0QsaUJBQWlCLEdBQUd0RSxjQUFjLENBQUN2TSxLQUFLLEVBQUU7TUFDNUNnTixXQUFXLEVBQUU7SUFDZixDQUFDLENBQUM7SUFDRixJQUFJOEQsd0JBQXdCLEdBQUdSLGNBQWMsQ0FBQ00saUJBQWlCLEVBQUV6QixhQUFhLENBQUM7SUFDL0UsSUFBSTRCLG1CQUFtQixHQUFHVCxjQUFjLENBQUNPLGlCQUFpQixFQUFFM0osVUFBVSxFQUFFcUosZ0JBQWdCLENBQUM7SUFDekYsSUFBSVMsaUJBQWlCLEdBQUdSLHFCQUFxQixDQUFDTSx3QkFBd0IsQ0FBQztJQUN2RSxJQUFJRyxnQkFBZ0IsR0FBR1QscUJBQXFCLENBQUNPLG1CQUFtQixDQUFDO0lBQ2pFL1EsS0FBSyxDQUFDbUYsYUFBYSxDQUFDNWxCLElBQUksQ0FBQyxHQUFHO01BQzFCdXhCLHdCQUF3QixFQUFFQSx3QkFBd0I7TUFDbERDLG1CQUFtQixFQUFFQSxtQkFBbUI7TUFDeENDLGlCQUFpQixFQUFFQSxpQkFBaUI7TUFDcENDLGdCQUFnQixFQUFFQTtJQUNwQixDQUFDO0lBQ0RqUixLQUFLLENBQUMzVyxVQUFVLENBQUM2VSxNQUFNLEdBQUdqakIsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRUgsS0FBSyxDQUFDM1csVUFBVSxDQUFDNlUsTUFBTSxFQUFFO01BQ25FLDhCQUE4QixFQUFFOFMsaUJBQWlCO01BQ2pELHFCQUFxQixFQUFFQztJQUN6QixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7O0VBR0YsSUFBTUMsTUFBTSxHQUFHO0lBQ2IzeEIsSUFBSSxFQUFFLE1BQU07SUFDWnloQixPQUFPLEVBQUUsSUFBSTtJQUNiQyxLQUFLLEVBQUUsTUFBTTtJQUNid0YsZ0JBQWdCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztJQUNyQy9tQixFQUFFLEVBQUVvYztFQUNOLENBQUM7RUFFRCxTQUFTcVYsdUJBQXVCQSxDQUFDNVMsU0FBUyxFQUFFd0csS0FBSyxFQUFFb0IsTUFBTSxFQUFFO0lBQ3pELElBQUlmLGFBQWEsR0FBR2hFLGdCQUFnQixDQUFDN0MsU0FBUyxDQUFDO0lBQy9DLElBQUk2UyxjQUFjLEdBQUcsQ0FBQy8zQixJQUFJLEVBQUVva0IsR0FBRyxDQUFDLENBQUNwYyxPQUFPLENBQUMrakIsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFFckUsSUFBSXJGLElBQUksR0FBRyxPQUFPb0csTUFBTSxLQUFLLFVBQVUsR0FBR0EsTUFBTSxDQUFDbHJCLE1BQU0sQ0FBQ2tsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU0RSxLQUFLLEVBQUU7UUFDeEV4RyxTQUFTLEVBQUVBO01BQ2IsQ0FBQyxDQUFDLENBQUMsR0FBRzRILE1BQU07TUFDUmtMLFFBQVEsR0FBR3RSLElBQUksQ0FBQyxDQUFDLENBQUM7TUFDbEJ1UixRQUFRLEdBQUd2UixJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRXRCc1IsUUFBUSxHQUFHQSxRQUFRLElBQUksQ0FBQztJQUN4QkMsUUFBUSxHQUFHLENBQUNBLFFBQVEsSUFBSSxDQUFDLElBQUlGLGNBQWM7SUFDM0MsT0FBTyxDQUFDLzNCLElBQUksRUFBRXNrQixLQUFLLENBQUMsQ0FBQ3RjLE9BQU8sQ0FBQytqQixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUc7TUFDakQzQyxDQUFDLEVBQUU2TyxRQUFRO01BQ1gzTyxDQUFDLEVBQUUwTztJQUNMLENBQUMsR0FBRztNQUNGNU8sQ0FBQyxFQUFFNE8sUUFBUTtNQUNYMU8sQ0FBQyxFQUFFMk87SUFDTCxDQUFDO0VBQ0g7RUFFQSxTQUFTbkwsTUFBTUEsQ0FBQzlGLEtBQUssRUFBRTtJQUNyQixJQUFJTCxLQUFLLEdBQUdLLEtBQUssQ0FBQ0wsS0FBSztNQUNuQlEsT0FBTyxHQUFHSCxLQUFLLENBQUNHLE9BQU87TUFDdkJqaEIsSUFBSSxHQUFHOGdCLEtBQUssQ0FBQzlnQixJQUFJO0lBQ3JCLElBQUlneUIsZUFBZSxHQUFHL1EsT0FBTyxDQUFDMkYsTUFBTTtNQUNoQ0EsTUFBTSxHQUFHb0wsZUFBZSxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHQSxlQUFlO0lBQ2xFLElBQUloaUIsSUFBSSxHQUFHaVAsVUFBVSxDQUFDSCxNQUFNLENBQUMsVUFBVUMsR0FBRyxFQUFFQyxTQUFTLEVBQUU7TUFDckRELEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLEdBQUc0Uyx1QkFBdUIsQ0FBQzVTLFNBQVMsRUFBRXlCLEtBQUssQ0FBQytFLEtBQUssRUFBRW9CLE1BQU0sQ0FBQztNQUN4RSxPQUFPN0gsR0FBRztJQUNaLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNOLElBQUlrVCxxQkFBcUIsR0FBR2ppQixJQUFJLENBQUN5USxLQUFLLENBQUN6QixTQUFTLENBQUM7TUFDN0NrRSxDQUFDLEdBQUcrTyxxQkFBcUIsQ0FBQy9PLENBQUM7TUFDM0JFLENBQUMsR0FBRzZPLHFCQUFxQixDQUFDN08sQ0FBQztJQUUvQixJQUFJM0MsS0FBSyxDQUFDbUYsYUFBYSxDQUFDRCxhQUFhLElBQUksSUFBSSxFQUFFO01BQzdDbEYsS0FBSyxDQUFDbUYsYUFBYSxDQUFDRCxhQUFhLENBQUN6QyxDQUFDLElBQUlBLENBQUM7TUFDeEN6QyxLQUFLLENBQUNtRixhQUFhLENBQUNELGFBQWEsQ0FBQ3ZDLENBQUMsSUFBSUEsQ0FBQztJQUMxQztJQUVBM0MsS0FBSyxDQUFDbUYsYUFBYSxDQUFDNWxCLElBQUksQ0FBQyxHQUFHZ1EsSUFBSTtFQUNsQyxDQUFDLENBQUM7O0VBR0YsSUFBTWtpQixRQUFRLEdBQUc7SUFDZmx5QixJQUFJLEVBQUUsUUFBUTtJQUNkeWhCLE9BQU8sRUFBRSxJQUFJO0lBQ2JDLEtBQUssRUFBRSxNQUFNO0lBQ2JFLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUMzQnpoQixFQUFFLEVBQUV5bUI7RUFDTixDQUFDO0VBRUQsU0FBU2pCLGFBQWFBLENBQUNuRixJQUFJLEVBQUU7SUFDM0IsSUFBSUMsS0FBSyxHQUFHRCxJQUFJLENBQUNDLEtBQUs7TUFDbEJ6Z0IsSUFBSSxHQUFHd2dCLElBQUksQ0FBQ3hnQixJQUFJO0lBQ3BCO0lBQ0E7SUFDQTtJQUNBO0lBQ0F5Z0IsS0FBSyxDQUFDbUYsYUFBYSxDQUFDNWxCLElBQUksQ0FBQyxHQUFHNHNCLGNBQWMsQ0FBQztNQUN6Q2hPLFNBQVMsRUFBRTZCLEtBQUssQ0FBQytFLEtBQUssQ0FBQzVHLFNBQVM7TUFDaENwbUIsT0FBTyxFQUFFaW9CLEtBQUssQ0FBQytFLEtBQUssQ0FBQzdHLE1BQU07TUFDM0J1QyxRQUFRLEVBQUUsVUFBVTtNQUNwQmxDLFNBQVMsRUFBRXlCLEtBQUssQ0FBQ3pCO0lBQ25CLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQzs7RUFHRixJQUFNbVQsZUFBZSxHQUFHO0lBQ3RCbnlCLElBQUksRUFBRSxlQUFlO0lBQ3JCeWhCLE9BQU8sRUFBRSxJQUFJO0lBQ2JDLEtBQUssRUFBRSxNQUFNO0lBQ2J2aEIsRUFBRSxFQUFFd2xCLGFBQWE7SUFDakIzVixJQUFJLEVBQUUsQ0FBQztFQUNULENBQUM7RUFFRCxTQUFTb2lCLFVBQVVBLENBQUN0TSxJQUFJLEVBQUU7SUFDeEIsT0FBT0EsSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztFQUNqQztFQUVBLFNBQVNzTCxlQUFlQSxDQUFDNVEsSUFBSSxFQUFFO0lBQzdCLElBQUlDLEtBQUssR0FBR0QsSUFBSSxDQUFDQyxLQUFLO01BQ2xCUSxPQUFPLEdBQUdULElBQUksQ0FBQ1MsT0FBTztNQUN0QmpoQixJQUFJLEdBQUd3Z0IsSUFBSSxDQUFDeGdCLElBQUk7SUFDcEIsSUFBSWt2QixpQkFBaUIsR0FBR2pPLE9BQU8sQ0FBQzhMLFFBQVE7TUFDcENvQyxhQUFhLEdBQUdELGlCQUFpQixLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBR0EsaUJBQWlCO01BQ3ZFRSxnQkFBZ0IsR0FBR25PLE9BQU8sQ0FBQ29PLE9BQU87TUFDbENDLFlBQVksR0FBR0YsZ0JBQWdCLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHQSxnQkFBZ0I7TUFDckU5QyxRQUFRLEdBQUdyTCxPQUFPLENBQUNxTCxRQUFRO01BQzNCQyxZQUFZLEdBQUd0TCxPQUFPLENBQUNzTCxZQUFZO01BQ25Da0IsV0FBVyxHQUFHeE0sT0FBTyxDQUFDd00sV0FBVztNQUNqQ2xJLE9BQU8sR0FBR3RFLE9BQU8sQ0FBQ3NFLE9BQU87TUFDekI4TSxlQUFlLEdBQUdwUixPQUFPLENBQUNxUixNQUFNO01BQ2hDQSxNQUFNLEdBQUdELGVBQWUsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUdBLGVBQWU7TUFDNURFLHFCQUFxQixHQUFHdFIsT0FBTyxDQUFDdVIsWUFBWTtNQUM1Q0EsWUFBWSxHQUFHRCxxQkFBcUIsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUdBLHFCQUFxQjtJQUMvRSxJQUFJbkgsUUFBUSxHQUFHNEIsY0FBYyxDQUFDdk0sS0FBSyxFQUFFO01BQ25DNkwsUUFBUSxFQUFFQSxRQUFRO01BQ2xCQyxZQUFZLEVBQUVBLFlBQVk7TUFDMUJoSCxPQUFPLEVBQUVBLE9BQU87TUFDaEJrSSxXQUFXLEVBQUVBO0lBQ2YsQ0FBQyxDQUFDO0lBQ0YsSUFBSTVILGFBQWEsR0FBR2hFLGdCQUFnQixDQUFDcEIsS0FBSyxDQUFDekIsU0FBUyxDQUFDO0lBQ3JELElBQUk0SSxTQUFTLEdBQUdULFlBQVksQ0FBQzFHLEtBQUssQ0FBQ3pCLFNBQVMsQ0FBQztJQUM3QyxJQUFJMlEsZUFBZSxHQUFHLENBQUMvSCxTQUFTO0lBQ2hDLElBQUltRixRQUFRLEdBQUdwSSx3QkFBd0IsQ0FBQ2tCLGFBQWEsQ0FBQztJQUN0RCxJQUFJd0osT0FBTyxHQUFHK0MsVUFBVSxDQUFDckYsUUFBUSxDQUFDO0lBQ2xDLElBQUlwSCxhQUFhLEdBQUdsRixLQUFLLENBQUNtRixhQUFhLENBQUNELGFBQWE7SUFDckQsSUFBSWlLLGFBQWEsR0FBR25QLEtBQUssQ0FBQytFLEtBQUssQ0FBQzVHLFNBQVM7SUFDekMsSUFBSStJLFVBQVUsR0FBR2xILEtBQUssQ0FBQytFLEtBQUssQ0FBQzdHLE1BQU07SUFDbkMsSUFBSThULGlCQUFpQixHQUFHLE9BQU9ELFlBQVksS0FBSyxVQUFVLEdBQUdBLFlBQVksQ0FBQzkyQixNQUFNLENBQUNrbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFSCxLQUFLLENBQUMrRSxLQUFLLEVBQUU7TUFDdkd4RyxTQUFTLEVBQUV5QixLQUFLLENBQUN6QjtJQUNuQixDQUFDLENBQUMsQ0FBQyxHQUFHd1QsWUFBWTtJQUNsQixJQUFJRSwyQkFBMkIsR0FBRyxPQUFPRCxpQkFBaUIsS0FBSyxRQUFRLEdBQUc7TUFDeEUxRixRQUFRLEVBQUUwRixpQkFBaUI7TUFDM0JwRCxPQUFPLEVBQUVvRDtJQUNYLENBQUMsR0FBRy8yQixNQUFNLENBQUNrbEIsTUFBTSxDQUFDO01BQ2hCbU0sUUFBUSxFQUFFLENBQUM7TUFDWHNDLE9BQU8sRUFBRTtJQUNYLENBQUMsRUFBRW9ELGlCQUFpQixDQUFDO0lBQ3JCLElBQUlFLG1CQUFtQixHQUFHbFMsS0FBSyxDQUFDbUYsYUFBYSxDQUFDZ0IsTUFBTSxHQUFHbkcsS0FBSyxDQUFDbUYsYUFBYSxDQUFDZ0IsTUFBTSxDQUFDbkcsS0FBSyxDQUFDekIsU0FBUyxDQUFDLEdBQUcsSUFBSTtJQUN6RyxJQUFJaFAsSUFBSSxHQUFHO01BQ1RrVCxDQUFDLEVBQUUsQ0FBQztNQUNKRSxDQUFDLEVBQUU7SUFDTCxDQUFDO0lBRUQsSUFBSSxDQUFDdUMsYUFBYSxFQUFFO01BQ2xCO0lBQ0Y7SUFFQSxJQUFJd0osYUFBYSxFQUFFO01BQ2pCLElBQUl5RCxxQkFBcUI7TUFFekIsSUFBSUMsUUFBUSxHQUFHOUYsUUFBUSxLQUFLLEdBQUcsR0FBRzdPLEdBQUcsR0FBR3BrQixJQUFJO01BQzVDLElBQUlnNUIsT0FBTyxHQUFHL0YsUUFBUSxLQUFLLEdBQUcsR0FBRzVPLE1BQU0sR0FBR0MsS0FBSztNQUMvQyxJQUFJNEgsR0FBRyxHQUFHK0csUUFBUSxLQUFLLEdBQUcsR0FBRyxRQUFRLEdBQUcsT0FBTztNQUMvQyxJQUFJbkcsTUFBTSxHQUFHakIsYUFBYSxDQUFDb0gsUUFBUSxDQUFDO01BQ3BDLElBQUlsSSxLQUFLLEdBQUcrQixNQUFNLEdBQUd3RSxRQUFRLENBQUN5SCxRQUFRLENBQUM7TUFDdkMsSUFBSS9OLEtBQUssR0FBRzhCLE1BQU0sR0FBR3dFLFFBQVEsQ0FBQzBILE9BQU8sQ0FBQztNQUN0QyxJQUFJQyxRQUFRLEdBQUdULE1BQU0sR0FBRyxDQUFDM0ssVUFBVSxDQUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7TUFDaEQsSUFBSWdOLE1BQU0sR0FBR3BMLFNBQVMsS0FBS3JKLEtBQUssR0FBR3FSLGFBQWEsQ0FBQzVKLEdBQUcsQ0FBQyxHQUFHMkIsVUFBVSxDQUFDM0IsR0FBRyxDQUFDO01BQ3ZFLElBQUlpTixNQUFNLEdBQUdyTCxTQUFTLEtBQUtySixLQUFLLEdBQUcsQ0FBQ29KLFVBQVUsQ0FBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUM0SixhQUFhLENBQUM1SixHQUFHLENBQUMsQ0FBQyxDQUFDO01BQzNFOztNQUVBLElBQUlOLFlBQVksR0FBR2pGLEtBQUssQ0FBQ0MsUUFBUSxDQUFDVSxLQUFLO01BQ3ZDLElBQUk2RSxTQUFTLEdBQUdxTSxNQUFNLElBQUk1TSxZQUFZLEdBQUdwQyxhQUFhLENBQUNvQyxZQUFZLENBQUMsR0FBRztRQUNyRTVDLEtBQUssRUFBRSxDQUFDO1FBQ1JDLE1BQU0sRUFBRTtNQUNWLENBQUM7TUFDRCxJQUFJbVEsa0JBQWtCLEdBQUd6UyxLQUFLLENBQUNtRixhQUFhLENBQUMsa0JBQWtCLENBQUMsR0FBR25GLEtBQUssQ0FBQ21GLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDTCxPQUFPLEdBQUdOLGtCQUFrQixFQUFFO01BQ3pJLElBQUlrTyxlQUFlLEdBQUdELGtCQUFrQixDQUFDTCxRQUFRLENBQUM7TUFDbEQsSUFBSU8sZUFBZSxHQUFHRixrQkFBa0IsQ0FBQ0osT0FBTyxDQUFDLENBQUMsQ0FBQztNQUNuRDtNQUNBO01BQ0E7TUFDQTs7TUFFQSxJQUFJTyxRQUFRLEdBQUd6TyxNQUFNLENBQUMsQ0FBQyxFQUFFZ0wsYUFBYSxDQUFDNUosR0FBRyxDQUFDLEVBQUVDLFNBQVMsQ0FBQ0QsR0FBRyxDQUFDLENBQUM7TUFDNUQsSUFBSXNOLFNBQVMsR0FBRzNELGVBQWUsR0FBR0MsYUFBYSxDQUFDNUosR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHK00sUUFBUSxHQUFHTSxRQUFRLEdBQUdGLGVBQWUsR0FBR1QsMkJBQTJCLENBQUMzRixRQUFRLEdBQUdpRyxNQUFNLEdBQUdLLFFBQVEsR0FBR0YsZUFBZSxHQUFHVCwyQkFBMkIsQ0FBQzNGLFFBQVE7TUFDcE4sSUFBSXdHLFNBQVMsR0FBRzVELGVBQWUsR0FBRyxDQUFDQyxhQUFhLENBQUM1SixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcrTSxRQUFRLEdBQUdNLFFBQVEsR0FBR0QsZUFBZSxHQUFHViwyQkFBMkIsQ0FBQzNGLFFBQVEsR0FBR2tHLE1BQU0sR0FBR0ksUUFBUSxHQUFHRCxlQUFlLEdBQUdWLDJCQUEyQixDQUFDM0YsUUFBUTtNQUNyTixJQUFJekcsaUJBQWlCLEdBQUc3RixLQUFLLENBQUNDLFFBQVEsQ0FBQ1UsS0FBSyxJQUFJc0QsZUFBZSxDQUFDakUsS0FBSyxDQUFDQyxRQUFRLENBQUNVLEtBQUssQ0FBQztNQUNyRixJQUFJb1MsWUFBWSxHQUFHbE4saUJBQWlCLEdBQUd5RyxRQUFRLEtBQUssR0FBRyxHQUFHekcsaUJBQWlCLENBQUN3RixTQUFTLElBQUksQ0FBQyxHQUFHeEYsaUJBQWlCLENBQUN5RixVQUFVLElBQUksQ0FBQyxHQUFHLENBQUM7TUFDbEksSUFBSTBILG1CQUFtQixHQUFHLENBQUNiLHFCQUFxQixHQUFHRCxtQkFBbUIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUdBLG1CQUFtQixDQUFDNUYsUUFBUSxDQUFDLEtBQUssSUFBSSxHQUFHNkYscUJBQXFCLEdBQUcsQ0FBQztNQUM1SixJQUFJYyxTQUFTLEdBQUc5TSxNQUFNLEdBQUcwTSxTQUFTLEdBQUdHLG1CQUFtQixHQUFHRCxZQUFZO01BQ3ZFLElBQUlHLFNBQVMsR0FBRy9NLE1BQU0sR0FBRzJNLFNBQVMsR0FBR0UsbUJBQW1CO01BQ3hELElBQUlHLGVBQWUsR0FBR2hQLE1BQU0sQ0FBQzBOLE1BQU0sR0FBR3R3QixHQUFHLENBQUM2aUIsS0FBSyxFQUFFNk8sU0FBUyxDQUFDLEdBQUc3TyxLQUFLLEVBQUUrQixNQUFNLEVBQUUwTCxNQUFNLEdBQUd2d0IsR0FBRyxDQUFDK2lCLEtBQUssRUFBRTZPLFNBQVMsQ0FBQyxHQUFHN08sS0FBSyxDQUFDO01BQ3BIYSxhQUFhLENBQUNvSCxRQUFRLENBQUMsR0FBRzZHLGVBQWU7TUFDekM1akIsSUFBSSxDQUFDK2MsUUFBUSxDQUFDLEdBQUc2RyxlQUFlLEdBQUdoTixNQUFNO0lBQzNDO0lBRUEsSUFBSTBJLFlBQVksRUFBRTtNQUNoQixJQUFJdUUsc0JBQXNCO01BRTFCLElBQUlDLFNBQVMsR0FBRy9HLFFBQVEsS0FBSyxHQUFHLEdBQUc3TyxHQUFHLEdBQUdwa0IsSUFBSTtNQUU3QyxJQUFJaTZCLFFBQVEsR0FBR2hILFFBQVEsS0FBSyxHQUFHLEdBQUc1TyxNQUFNLEdBQUdDLEtBQUs7TUFFaEQsSUFBSTRWLE9BQU8sR0FBR3JPLGFBQWEsQ0FBQzBKLE9BQU8sQ0FBQztNQUVwQyxJQUFJNEUsSUFBSSxHQUFHNUUsT0FBTyxLQUFLLEdBQUcsR0FBRyxRQUFRLEdBQUcsT0FBTztNQUUvQyxJQUFJNkUsSUFBSSxHQUFHRixPQUFPLEdBQUc1SSxRQUFRLENBQUMwSSxTQUFTLENBQUM7TUFFeEMsSUFBSUssSUFBSSxHQUFHSCxPQUFPLEdBQUc1SSxRQUFRLENBQUMySSxRQUFRLENBQUM7TUFFdkMsSUFBSUssWUFBWSxHQUFHLENBQUNsVyxHQUFHLEVBQUVwa0IsSUFBSSxDQUFDLENBQUNnSSxPQUFPLENBQUMrakIsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO01BRTVELElBQUl3TyxvQkFBb0IsR0FBRyxDQUFDUixzQkFBc0IsR0FBR2xCLG1CQUFtQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBR0EsbUJBQW1CLENBQUN0RCxPQUFPLENBQUMsS0FBSyxJQUFJLEdBQUd3RSxzQkFBc0IsR0FBRyxDQUFDO01BRTlKLElBQUlTLFVBQVUsR0FBR0YsWUFBWSxHQUFHRixJQUFJLEdBQUdGLE9BQU8sR0FBR3BFLGFBQWEsQ0FBQ3FFLElBQUksQ0FBQyxHQUFHdE0sVUFBVSxDQUFDc00sSUFBSSxDQUFDLEdBQUdJLG9CQUFvQixHQUFHM0IsMkJBQTJCLENBQUNyRCxPQUFPO01BRXBKLElBQUlrRixVQUFVLEdBQUdILFlBQVksR0FBR0osT0FBTyxHQUFHcEUsYUFBYSxDQUFDcUUsSUFBSSxDQUFDLEdBQUd0TSxVQUFVLENBQUNzTSxJQUFJLENBQUMsR0FBR0ksb0JBQW9CLEdBQUczQiwyQkFBMkIsQ0FBQ3JELE9BQU8sR0FBRzhFLElBQUk7TUFFcEosSUFBSUssZ0JBQWdCLEdBQUdsQyxNQUFNLElBQUk4QixZQUFZLEdBQUdyUCxjQUFjLENBQUN1UCxVQUFVLEVBQUVOLE9BQU8sRUFBRU8sVUFBVSxDQUFDLEdBQUczUCxNQUFNLENBQUMwTixNQUFNLEdBQUdnQyxVQUFVLEdBQUdKLElBQUksRUFBRUYsT0FBTyxFQUFFMUIsTUFBTSxHQUFHaUMsVUFBVSxHQUFHSixJQUFJLENBQUM7TUFFekt4TyxhQUFhLENBQUMwSixPQUFPLENBQUMsR0FBR21GLGdCQUFnQjtNQUN6Q3hrQixJQUFJLENBQUNxZixPQUFPLENBQUMsR0FBR21GLGdCQUFnQixHQUFHUixPQUFPO0lBQzVDO0lBRUF2VCxLQUFLLENBQUNtRixhQUFhLENBQUM1bEIsSUFBSSxDQUFDLEdBQUdnUSxJQUFJO0VBQ2xDLENBQUMsQ0FBQzs7RUFHRixJQUFNeWtCLGlCQUFpQixHQUFHO0lBQ3hCejBCLElBQUksRUFBRSxpQkFBaUI7SUFDdkJ5aEIsT0FBTyxFQUFFLElBQUk7SUFDYkMsS0FBSyxFQUFFLE1BQU07SUFDYnZoQixFQUFFLEVBQUVpeEIsZUFBZTtJQUNuQmxLLGdCQUFnQixFQUFFLENBQUMsUUFBUTtFQUM3QixDQUFDO0VBRUQsU0FBU3dOLG9CQUFvQkEsQ0FBQ2w4QixPQUFPLEVBQUU7SUFDckMsT0FBTztNQUNMNnhCLFVBQVUsRUFBRTd4QixPQUFPLENBQUM2eEIsVUFBVTtNQUM5QkUsU0FBUyxFQUFFL3hCLE9BQU8sQ0FBQyt4QjtJQUNyQixDQUFDO0VBQ0g7RUFFQSxTQUFTb0ssYUFBYUEsQ0FBQzVVLElBQUksRUFBRTtJQUMzQixJQUFJQSxJQUFJLEtBQUtELFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ0ssYUFBYSxDQUFDTCxJQUFJLENBQUMsRUFBRTtNQUNwRCxPQUFPcUssZUFBZSxDQUFDckssSUFBSSxDQUFDO0lBQzlCLENBQUMsTUFBTTtNQUNMLE9BQU8yVSxvQkFBb0IsQ0FBQzNVLElBQUksQ0FBQztJQUNuQztFQUNGO0VBRUEsU0FBUzZVLGVBQWVBLENBQUNwOEIsT0FBTyxFQUFFO0lBQ2hDLElBQUlvekIsSUFBSSxHQUFHcHpCLE9BQU8sQ0FBQzhrQixxQkFBcUIsRUFBRTtJQUMxQyxJQUFJcUYsTUFBTSxHQUFHYixLQUFLLENBQUM4SixJQUFJLENBQUM5SSxLQUFLLENBQUMsR0FBR3RxQixPQUFPLENBQUNxcUIsV0FBVyxJQUFJLENBQUM7SUFDekQsSUFBSUQsTUFBTSxHQUFHZCxLQUFLLENBQUM4SixJQUFJLENBQUM3SSxNQUFNLENBQUMsR0FBR3ZxQixPQUFPLENBQUN1RyxZQUFZLElBQUksQ0FBQztJQUMzRCxPQUFPNGpCLE1BQU0sS0FBSyxDQUFDLElBQUlDLE1BQU0sS0FBSyxDQUFDO0VBQ3JDLENBQUMsQ0FBQztFQUNGOztFQUdBLFNBQVNpUyxnQkFBZ0JBLENBQUNDLHVCQUF1QixFQUFFOVEsWUFBWSxFQUFFaUUsT0FBTyxFQUFFO0lBQ3hFLElBQUlBLE9BQU8sS0FBSyxLQUFLLENBQUMsRUFBRTtNQUN0QkEsT0FBTyxHQUFHLEtBQUs7SUFDakI7SUFFQSxJQUFJOE0sdUJBQXVCLEdBQUczVSxhQUFhLENBQUM0RCxZQUFZLENBQUM7SUFDekQsSUFBSWdSLG9CQUFvQixHQUFHNVUsYUFBYSxDQUFDNEQsWUFBWSxDQUFDLElBQUk0USxlQUFlLENBQUM1USxZQUFZLENBQUM7SUFDdkYsSUFBSXhsQixlQUFlLEdBQUdvbEIsa0JBQWtCLENBQUNJLFlBQVksQ0FBQztJQUN0RCxJQUFJNEgsSUFBSSxHQUFHdE8scUJBQXFCLENBQUN3WCx1QkFBdUIsRUFBRUUsb0JBQW9CLEVBQUUvTSxPQUFPLENBQUM7SUFDeEYsSUFBSXVCLE1BQU0sR0FBRztNQUNYYSxVQUFVLEVBQUUsQ0FBQztNQUNiRSxTQUFTLEVBQUU7SUFDYixDQUFDO0lBQ0QsSUFBSTFDLE9BQU8sR0FBRztNQUNaM0UsQ0FBQyxFQUFFLENBQUM7TUFDSkUsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUVELElBQUkyUix1QkFBdUIsSUFBSSxDQUFDQSx1QkFBdUIsSUFBSSxDQUFDOU0sT0FBTyxFQUFFO01BQ25FLElBQUlySSxXQUFXLENBQUNvRSxZQUFZLENBQUMsS0FBSyxNQUFNO01BQUk7TUFDNUNrSCxjQUFjLENBQUMxc0IsZUFBZSxDQUFDLEVBQUU7UUFDL0JnckIsTUFBTSxHQUFHbUwsYUFBYSxDQUFDM1EsWUFBWSxDQUFDO01BQ3RDO01BRUEsSUFBSTVELGFBQWEsQ0FBQzRELFlBQVksQ0FBQyxFQUFFO1FBQy9CNkQsT0FBTyxHQUFHdksscUJBQXFCLENBQUMwRyxZQUFZLEVBQUUsSUFBSSxDQUFDO1FBQ25ENkQsT0FBTyxDQUFDM0UsQ0FBQyxJQUFJYyxZQUFZLENBQUMrSCxVQUFVO1FBQ3BDbEUsT0FBTyxDQUFDekUsQ0FBQyxJQUFJWSxZQUFZLENBQUM4SCxTQUFTO01BQ3JDLENBQUMsTUFBTSxJQUFJdHRCLGVBQWUsRUFBRTtRQUMxQnFwQixPQUFPLENBQUMzRSxDQUFDLEdBQUd1SCxtQkFBbUIsQ0FBQ2pzQixlQUFlLENBQUM7TUFDbEQ7SUFDRjtJQUVBLE9BQU87TUFDTDBrQixDQUFDLEVBQUUwSSxJQUFJLENBQUM5eEIsSUFBSSxHQUFHMHZCLE1BQU0sQ0FBQ2EsVUFBVSxHQUFHeEMsT0FBTyxDQUFDM0UsQ0FBQztNQUM1Q0UsQ0FBQyxFQUFFd0ksSUFBSSxDQUFDMU4sR0FBRyxHQUFHc0wsTUFBTSxDQUFDZSxTQUFTLEdBQUcxQyxPQUFPLENBQUN6RSxDQUFDO01BQzFDTixLQUFLLEVBQUU4SSxJQUFJLENBQUM5SSxLQUFLO01BQ2pCQyxNQUFNLEVBQUU2SSxJQUFJLENBQUM3STtJQUNmLENBQUM7RUFDSDtFQUVBLFNBQVNuTCxLQUFLQSxDQUFDcWQsU0FBUyxFQUFFO0lBQ3hCLElBQUkzbUIsR0FBRyxHQUFHLElBQUk5RixHQUFHLEVBQUU7SUFDbkIsSUFBSTBzQixPQUFPLEdBQUcsSUFBSXh5QixHQUFHLEVBQUU7SUFDdkIsSUFBSXl5QixNQUFNLEdBQUcsRUFBRTtJQUNmRixTQUFTLENBQUMvN0IsT0FBTyxDQUFDLFVBQVVrOEIsUUFBUSxFQUFFO01BQ3BDOW1CLEdBQUcsQ0FBQzVGLEdBQUcsQ0FBQzBzQixRQUFRLENBQUNwMUIsSUFBSSxFQUFFbzFCLFFBQVEsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUVKLFNBQVN6RyxJQUFJQSxDQUFDeUcsUUFBUSxFQUFFO01BQ3RCRixPQUFPLENBQUNqaUIsR0FBRyxDQUFDbWlCLFFBQVEsQ0FBQ3AxQixJQUFJLENBQUM7TUFDMUIsSUFBSTRoQixRQUFRLEdBQUcsRUFBRSxDQUFDN25CLE1BQU0sQ0FBQ3E3QixRQUFRLENBQUN4VCxRQUFRLElBQUksRUFBRSxFQUFFd1QsUUFBUSxDQUFDbE8sZ0JBQWdCLElBQUksRUFBRSxDQUFDO01BQ2xGdEYsUUFBUSxDQUFDMW9CLE9BQU8sQ0FBQyxVQUFVbThCLEdBQUcsRUFBRTtRQUM5QixJQUFJLENBQUNILE9BQU8sQ0FBQ3B3QixHQUFHLENBQUN1d0IsR0FBRyxDQUFDLEVBQUU7VUFDckIsSUFBSUMsV0FBVyxHQUFHaG5CLEdBQUcsQ0FBQ2hHLEdBQUcsQ0FBQytzQixHQUFHLENBQUM7VUFFOUIsSUFBSUMsV0FBVyxFQUFFO1lBQ2YzRyxJQUFJLENBQUMyRyxXQUFXLENBQUM7VUFDbkI7UUFDRjtNQUNGLENBQUMsQ0FBQztNQUNGSCxNQUFNLENBQUN6MUIsSUFBSSxDQUFDMDFCLFFBQVEsQ0FBQztJQUN2QjtJQUVBSCxTQUFTLENBQUMvN0IsT0FBTyxDQUFDLFVBQVVrOEIsUUFBUSxFQUFFO01BQ3BDLElBQUksQ0FBQ0YsT0FBTyxDQUFDcHdCLEdBQUcsQ0FBQ3N3QixRQUFRLENBQUNwMUIsSUFBSSxDQUFDLEVBQUU7UUFDL0I7UUFDQTJ1QixJQUFJLENBQUN5RyxRQUFRLENBQUM7TUFDaEI7SUFDRixDQUFDLENBQUM7SUFDRixPQUFPRCxNQUFNO0VBQ2Y7RUFFQSxTQUFTSSxjQUFjQSxDQUFDTixTQUFTLEVBQUU7SUFDakM7SUFDQSxJQUFJTyxnQkFBZ0IsR0FBRzVkLEtBQUssQ0FBQ3FkLFNBQVMsQ0FBQyxDQUFDLENBQUM7O0lBRXpDLE9BQU90VixjQUFjLENBQUNiLE1BQU0sQ0FBQyxVQUFVQyxHQUFHLEVBQUUyQyxLQUFLLEVBQUU7TUFDakQsT0FBTzNDLEdBQUcsQ0FBQ2hsQixNQUFNLENBQUN5N0IsZ0JBQWdCLENBQUN2ckIsTUFBTSxDQUFDLFVBQVVtckIsUUFBUSxFQUFFO1FBQzVELE9BQU9BLFFBQVEsQ0FBQzFULEtBQUssS0FBS0EsS0FBSztNQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDUjtFQUVBLFNBQVMrVCxRQUFRQSxDQUFDdDFCLEVBQUUsRUFBRTtJQUNwQixJQUFJdTFCLE9BQU87SUFDWCxPQUFPLFlBQVk7TUFDakIsSUFBSSxDQUFDQSxPQUFPLEVBQUU7UUFDWkEsT0FBTyxHQUFHLElBQUlDLE9BQU8sQ0FBQyxVQUFVQyxPQUFPLEVBQUU7VUFDdkNELE9BQU8sQ0FBQ0MsT0FBTyxFQUFFLENBQUNDLElBQUksQ0FBQyxZQUFZO1lBQ2pDSCxPQUFPLEdBQUdqNkIsU0FBUztZQUNuQm02QixPQUFPLENBQUN6MUIsRUFBRSxFQUFFLENBQUM7VUFDZixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7TUFDSjtNQUVBLE9BQU91MUIsT0FBTztJQUNoQixDQUFDO0VBQ0g7RUFFQSxTQUFTSSxXQUFXQSxDQUFDYixTQUFTLEVBQUU7SUFDOUIsSUFBSWMsTUFBTSxHQUFHZCxTQUFTLENBQUNuVyxNQUFNLENBQUMsVUFBVWlYLE1BQU0sRUFBRUMsT0FBTyxFQUFFO01BQ3ZELElBQUlDLFFBQVEsR0FBR0YsTUFBTSxDQUFDQyxPQUFPLENBQUNoMkIsSUFBSSxDQUFDO01BQ25DKzFCLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDaDJCLElBQUksQ0FBQyxHQUFHaTJCLFFBQVEsR0FBR3Y2QixNQUFNLENBQUNrbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFcVYsUUFBUSxFQUFFRCxPQUFPLEVBQUU7UUFDckUvVSxPQUFPLEVBQUV2bEIsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRXFWLFFBQVEsQ0FBQ2hWLE9BQU8sRUFBRStVLE9BQU8sQ0FBQy9VLE9BQU8sQ0FBQztRQUM3RGpSLElBQUksRUFBRXRVLE1BQU0sQ0FBQ2tsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVxVixRQUFRLENBQUNqbUIsSUFBSSxFQUFFZ21CLE9BQU8sQ0FBQ2htQixJQUFJO01BQ3JELENBQUMsQ0FBQyxHQUFHZ21CLE9BQU87TUFDWixPQUFPRCxNQUFNO0lBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFFUixPQUFPcjZCLE1BQU0sQ0FBQytLLElBQUksQ0FBQ3N2QixNQUFNLENBQUMsQ0FBQ3puQixHQUFHLENBQUMsVUFBVWpXLEdBQUcsRUFBRTtNQUM1QyxPQUFPMDlCLE1BQU0sQ0FBQzE5QixHQUFHLENBQUM7SUFDcEIsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxJQUFJNjlCLGVBQWUsR0FBRztJQUNwQmxYLFNBQVMsRUFBRSxRQUFRO0lBQ25CaVcsU0FBUyxFQUFFLEVBQUU7SUFDYi9ULFFBQVEsRUFBRTtFQUNaLENBQUM7RUFFRCxTQUFTaVYsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDMUIsS0FBSyxJQUFJbEMsSUFBSSxHQUFHOTdCLFNBQVMsQ0FBQ21CLE1BQU0sRUFBRW1ILElBQUksR0FBRyxJQUFJc0ksS0FBSyxDQUFDa3JCLElBQUksQ0FBQyxFQUFFbUMsSUFBSSxHQUFHLENBQUMsRUFBRUEsSUFBSSxHQUFHbkMsSUFBSSxFQUFFbUMsSUFBSSxFQUFFLEVBQUU7TUFDdkYzMUIsSUFBSSxDQUFDMjFCLElBQUksQ0FBQyxHQUFHaitCLFNBQVMsQ0FBQ2krQixJQUFJLENBQUM7SUFDOUI7SUFFQSxPQUFPLENBQUMzMUIsSUFBSSxDQUFDeXdCLElBQUksQ0FBQyxVQUFVMTRCLE9BQU8sRUFBRTtNQUNuQyxPQUFPLEVBQUVBLE9BQU8sSUFBSSxPQUFPQSxPQUFPLENBQUM4a0IscUJBQXFCLEtBQUssVUFBVSxDQUFDO0lBQzFFLENBQUMsQ0FBQztFQUNKO0VBRUEsU0FBUytZLGVBQWVBLENBQUNDLGdCQUFnQixFQUFFO0lBQ3pDLElBQUlBLGdCQUFnQixLQUFLLEtBQUssQ0FBQyxFQUFFO01BQy9CQSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDdkI7SUFFQSxJQUFJQyxpQkFBaUIsR0FBR0QsZ0JBQWdCO01BQ3BDRSxxQkFBcUIsR0FBR0QsaUJBQWlCLENBQUNFLGdCQUFnQjtNQUMxREEsZ0JBQWdCLEdBQUdELHFCQUFxQixLQUFLLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBR0EscUJBQXFCO01BQ2hGRSxzQkFBc0IsR0FBR0gsaUJBQWlCLENBQUNJLGNBQWM7TUFDekRBLGNBQWMsR0FBR0Qsc0JBQXNCLEtBQUssS0FBSyxDQUFDLEdBQUdSLGVBQWUsR0FBR1Esc0JBQXNCO0lBQ2pHLE9BQU8sU0FBU0UsWUFBWUEsQ0FBQ2hZLFNBQVMsRUFBRUQsTUFBTSxFQUFFc0MsT0FBTyxFQUFFO01BQ3ZELElBQUlBLE9BQU8sS0FBSyxLQUFLLENBQUMsRUFBRTtRQUN0QkEsT0FBTyxHQUFHMFYsY0FBYztNQUMxQjtNQUVBLElBQUlsVyxLQUFLLEdBQUc7UUFDVnpCLFNBQVMsRUFBRSxRQUFRO1FBQ25Cd1csZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQnZVLE9BQU8sRUFBRXZsQixNQUFNLENBQUNrbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFc1YsZUFBZSxFQUFFUyxjQUFjLENBQUM7UUFDM0QvUSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCbEYsUUFBUSxFQUFFO1VBQ1I5QixTQUFTLEVBQUVBLFNBQVM7VUFDcEJELE1BQU0sRUFBRUE7UUFDVixDQUFDO1FBQ0Q3VSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ2Q2VyxNQUFNLEVBQUUsQ0FBQztNQUNYLENBQUM7TUFDRCxJQUFJa1csZ0JBQWdCLEdBQUcsRUFBRTtNQUN6QixJQUFJQyxXQUFXLEdBQUcsS0FBSztNQUN2QixJQUFJbnVCLFFBQVEsR0FBRztRQUNiOFgsS0FBSyxFQUFFQSxLQUFLO1FBQ1pzVyxVQUFVLEVBQUUsU0FBU0EsVUFBVUEsQ0FBQ0MsZ0JBQWdCLEVBQUU7VUFDaEQsSUFBSS9WLE9BQU8sR0FBRyxPQUFPK1YsZ0JBQWdCLEtBQUssVUFBVSxHQUFHQSxnQkFBZ0IsQ0FBQ3ZXLEtBQUssQ0FBQ1EsT0FBTyxDQUFDLEdBQUcrVixnQkFBZ0I7VUFDekdDLHNCQUFzQixFQUFFO1VBQ3hCeFcsS0FBSyxDQUFDUSxPQUFPLEdBQUd2bEIsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRStWLGNBQWMsRUFBRWxXLEtBQUssQ0FBQ1EsT0FBTyxFQUFFQSxPQUFPLENBQUM7VUFDekVSLEtBQUssQ0FBQ2tKLGFBQWEsR0FBRztZQUNwQi9LLFNBQVMsRUFBRXNCLFNBQVMsQ0FBQ3RCLFNBQVMsQ0FBQyxHQUFHNE0saUJBQWlCLENBQUM1TSxTQUFTLENBQUMsR0FBR0EsU0FBUyxDQUFDaVAsY0FBYyxHQUFHckMsaUJBQWlCLENBQUM1TSxTQUFTLENBQUNpUCxjQUFjLENBQUMsR0FBRyxFQUFFO1lBQzVJbFAsTUFBTSxFQUFFNk0saUJBQWlCLENBQUM3TSxNQUFNO1VBQ2xDLENBQUMsQ0FBQyxDQUFDO1VBQ0g7O1VBRUEsSUFBSTZXLGdCQUFnQixHQUFHRCxjQUFjLENBQUNPLFdBQVcsQ0FBQyxFQUFFLENBQUMvN0IsTUFBTSxDQUFDMDhCLGdCQUFnQixFQUFFaFcsS0FBSyxDQUFDUSxPQUFPLENBQUNnVSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7VUFFMUd4VSxLQUFLLENBQUMrVSxnQkFBZ0IsR0FBR0EsZ0JBQWdCLENBQUN2ckIsTUFBTSxDQUFDLFVBQVVpdEIsQ0FBQyxFQUFFO1lBQzVELE9BQU9BLENBQUMsQ0FBQ3pWLE9BQU87VUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7VUFFSjBWLGtCQUFrQixFQUFFO1VBQ3BCLE9BQU94dUIsUUFBUSxDQUFDa2hCLE1BQU0sRUFBRTtRQUMxQixDQUFDO1FBQ0Q7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBdU4sV0FBVyxFQUFFLFNBQVNBLFdBQVdBLENBQUEsRUFBRztVQUNsQyxJQUFJTixXQUFXLEVBQUU7WUFDZjtVQUNGO1VBRUEsSUFBSU8sZUFBZSxHQUFHNVcsS0FBSyxDQUFDQyxRQUFRO1lBQ2hDOUIsU0FBUyxHQUFHeVksZUFBZSxDQUFDelksU0FBUztZQUNyQ0QsTUFBTSxHQUFHMFksZUFBZSxDQUFDMVksTUFBTSxDQUFDLENBQUM7VUFDckM7O1VBRUEsSUFBSSxDQUFDd1gsZ0JBQWdCLENBQUN2WCxTQUFTLEVBQUVELE1BQU0sQ0FBQyxFQUFFO1lBRXhDO1VBQ0YsQ0FBQyxDQUFDOztVQUdGOEIsS0FBSyxDQUFDK0UsS0FBSyxHQUFHO1lBQ1o1RyxTQUFTLEVBQUVpVyxnQkFBZ0IsQ0FBQ2pXLFNBQVMsRUFBRThGLGVBQWUsQ0FBQy9GLE1BQU0sQ0FBQyxFQUFFOEIsS0FBSyxDQUFDUSxPQUFPLENBQUNDLFFBQVEsS0FBSyxPQUFPLENBQUM7WUFDbkd2QyxNQUFNLEVBQUUyRSxhQUFhLENBQUMzRSxNQUFNO1VBQzlCLENBQUMsQ0FBQyxDQUFDO1VBQ0g7VUFDQTtVQUNBO1VBQ0E7O1VBRUE4QixLQUFLLENBQUNvUSxLQUFLLEdBQUcsS0FBSztVQUNuQnBRLEtBQUssQ0FBQ3pCLFNBQVMsR0FBR3lCLEtBQUssQ0FBQ1EsT0FBTyxDQUFDakMsU0FBUyxDQUFDLENBQUM7VUFDM0M7VUFDQTtVQUNBOztVQUVBeUIsS0FBSyxDQUFDK1UsZ0JBQWdCLENBQUN0OEIsT0FBTyxDQUFDLFVBQVVrOEIsUUFBUSxFQUFFO1lBQ2pELE9BQU8zVSxLQUFLLENBQUNtRixhQUFhLENBQUN3UCxRQUFRLENBQUNwMUIsSUFBSSxDQUFDLEdBQUd0RSxNQUFNLENBQUNrbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFd1UsUUFBUSxDQUFDcGxCLElBQUksQ0FBQztVQUM5RSxDQUFDLENBQUM7VUFFRixLQUFLLElBQUluTyxLQUFLLEdBQUcsQ0FBQyxFQUFFQSxLQUFLLEdBQUc0ZSxLQUFLLENBQUMrVSxnQkFBZ0IsQ0FBQ2w4QixNQUFNLEVBQUV1SSxLQUFLLEVBQUUsRUFBRTtZQUVsRSxJQUFJNGUsS0FBSyxDQUFDb1EsS0FBSyxLQUFLLElBQUksRUFBRTtjQUN4QnBRLEtBQUssQ0FBQ29RLEtBQUssR0FBRyxLQUFLO2NBQ25CaHZCLEtBQUssR0FBRyxDQUFDLENBQUM7Y0FDVjtZQUNGO1lBRUEsSUFBSXkxQixxQkFBcUIsR0FBRzdXLEtBQUssQ0FBQytVLGdCQUFnQixDQUFDM3pCLEtBQUssQ0FBQztjQUNyRDFCLEVBQUUsR0FBR20zQixxQkFBcUIsQ0FBQ24zQixFQUFFO2NBQzdCbzNCLHNCQUFzQixHQUFHRCxxQkFBcUIsQ0FBQ3JXLE9BQU87Y0FDdERnTSxRQUFRLEdBQUdzSyxzQkFBc0IsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR0Esc0JBQXNCO2NBQzFFdjNCLElBQUksR0FBR3MzQixxQkFBcUIsQ0FBQ3QzQixJQUFJO1lBRXJDLElBQUksT0FBT0csRUFBRSxLQUFLLFVBQVUsRUFBRTtjQUM1QnNnQixLQUFLLEdBQUd0Z0IsRUFBRSxDQUFDO2dCQUNUc2dCLEtBQUssRUFBRUEsS0FBSztnQkFDWlEsT0FBTyxFQUFFZ00sUUFBUTtnQkFDakJqdEIsSUFBSSxFQUFFQSxJQUFJO2dCQUNWMkksUUFBUSxFQUFFQTtjQUNaLENBQUMsQ0FBQyxJQUFJOFgsS0FBSztZQUNiO1VBQ0Y7UUFDRixDQUFDO1FBQ0Q7UUFDQTtRQUNBb0osTUFBTSxFQUFFNEwsUUFBUSxDQUFDLFlBQVk7VUFDM0IsT0FBTyxJQUFJRSxPQUFPLENBQUMsVUFBVUMsT0FBTyxFQUFFO1lBQ3BDanRCLFFBQVEsQ0FBQ3l1QixXQUFXLEVBQUU7WUFDdEJ4QixPQUFPLENBQUNuVixLQUFLLENBQUM7VUFDaEIsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBQ0YrVyxPQUFPLEVBQUUsU0FBU0EsT0FBT0EsQ0FBQSxFQUFHO1VBQzFCUCxzQkFBc0IsRUFBRTtVQUN4QkgsV0FBVyxHQUFHLElBQUk7UUFDcEI7TUFDRixDQUFDO01BRUQsSUFBSSxDQUFDWCxnQkFBZ0IsQ0FBQ3ZYLFNBQVMsRUFBRUQsTUFBTSxDQUFDLEVBQUU7UUFFeEMsT0FBT2hXLFFBQVE7TUFDakI7TUFFQUEsUUFBUSxDQUFDb3VCLFVBQVUsQ0FBQzlWLE9BQU8sQ0FBQyxDQUFDNFUsSUFBSSxDQUFDLFVBQVVwVixLQUFLLEVBQUU7UUFDakQsSUFBSSxDQUFDcVcsV0FBVyxJQUFJN1YsT0FBTyxDQUFDd1csYUFBYSxFQUFFO1VBQ3pDeFcsT0FBTyxDQUFDd1csYUFBYSxDQUFDaFgsS0FBSyxDQUFDO1FBQzlCO01BQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNKO01BQ0E7TUFDQTtNQUNBOztNQUVBLFNBQVMwVyxrQkFBa0JBLENBQUEsRUFBRztRQUM1QjFXLEtBQUssQ0FBQytVLGdCQUFnQixDQUFDdDhCLE9BQU8sQ0FBQyxVQUFVa3ZCLEtBQUssRUFBRTtVQUM5QyxJQUFJcG9CLElBQUksR0FBR29vQixLQUFLLENBQUNwb0IsSUFBSTtZQUNqQjAzQixhQUFhLEdBQUd0UCxLQUFLLENBQUNuSCxPQUFPO1lBQzdCQSxPQUFPLEdBQUd5VyxhQUFhLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdBLGFBQWE7WUFDdkQvVixNQUFNLEdBQUd5RyxLQUFLLENBQUN6RyxNQUFNO1VBRXpCLElBQUksT0FBT0EsTUFBTSxLQUFLLFVBQVUsRUFBRTtZQUNoQyxJQUFJZ1csU0FBUyxHQUFHaFcsTUFBTSxDQUFDO2NBQ3JCbEIsS0FBSyxFQUFFQSxLQUFLO2NBQ1p6Z0IsSUFBSSxFQUFFQSxJQUFJO2NBQ1YySSxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJzWSxPQUFPLEVBQUVBO1lBQ1gsQ0FBQyxDQUFDO1lBRUYsSUFBSTJXLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFBLEVBQUcsQ0FBQyxDQUFDO1lBRWpDZixnQkFBZ0IsQ0FBQ24zQixJQUFJLENBQUNpNEIsU0FBUyxJQUFJQyxNQUFNLENBQUM7VUFDNUM7UUFDRixDQUFDLENBQUM7TUFDSjtNQUVBLFNBQVNYLHNCQUFzQkEsQ0FBQSxFQUFHO1FBQ2hDSixnQkFBZ0IsQ0FBQzM5QixPQUFPLENBQUMsVUFBVWlILEVBQUUsRUFBRTtVQUNyQyxPQUFPQSxFQUFFLEVBQUU7UUFDYixDQUFDLENBQUM7UUFDRjAyQixnQkFBZ0IsR0FBRyxFQUFFO01BQ3ZCO01BRUEsT0FBT2x1QixRQUFRO0lBQ2pCLENBQUM7RUFDSDtFQUNBLElBQUlrdkIsY0FBYyxHQUFHLGFBQWF4QixlQUFlLEVBQUUsQ0FBQyxDQUFDOztFQUVyRCxJQUFJeUIsa0JBQWtCLEdBQUcsQ0FBQ2hPLGNBQWMsRUFBRXFJLGVBQWUsRUFBRTlJLGVBQWUsRUFBRTdILGFBQWEsQ0FBQztFQUMxRixJQUFJdVcsY0FBYyxHQUFHLGFBQWExQixlQUFlLENBQUM7SUFDaERJLGdCQUFnQixFQUFFcUI7RUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7RUFFSixJQUFJckIsZ0JBQWdCLEdBQUcsQ0FBQzNNLGNBQWMsRUFBRXFJLGVBQWUsRUFBRTlJLGVBQWUsRUFBRTdILGFBQWEsRUFBRTBRLFFBQVEsRUFBRXBCLE1BQU0sRUFBRTJELGlCQUFpQixFQUFFeE4sT0FBTyxFQUFFMEssTUFBTSxDQUFDO0VBQzlJLElBQUlpRixZQUFZLEdBQUcsYUFBYVAsZUFBZSxDQUFDO0lBQzlDSSxnQkFBZ0IsRUFBRUE7RUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7RUFFSixJQUFNdUIsTUFBTSxHQUFHLGFBQWF0OEIsTUFBTSxDQUFDdThCLE1BQU0sRUFBQyxhQUFhdjhCLE1BQU0sQ0FBQzBNLGNBQWMsQ0FBQztJQUMzRTh2QixTQUFTLEVBQUUsSUFBSTtJQUNmM1ksU0FBUyxFQUFUQSxTQUFTO0lBQ1RILFNBQVMsRUFBVEEsU0FBUztJQUNUTSxVQUFVLEVBQVZBLFVBQVU7SUFDVmEsV0FBVyxFQUFFaUIsYUFBYTtJQUMxQkosS0FBSyxFQUFFNkYsT0FBTztJQUNkNUksSUFBSSxFQUFKQSxJQUFJO0lBQ0pDLGNBQWMsRUFBZEEsY0FBYztJQUNkZSxVQUFVLEVBQVZBLFVBQVU7SUFDVkgsVUFBVSxFQUFWQSxVQUFVO0lBQ1ZNLFdBQVcsRUFBWEEsV0FBVztJQUNYckIsTUFBTSxFQUFOQSxNQUFNO0lBQ05NLGVBQWUsRUFBZkEsZUFBZTtJQUNmdUssYUFBYSxFQUFFSyxlQUFlO0lBQzlCdU4sWUFBWSxFQUFaQSxZQUFZO0lBQ1p1QixnQkFBZ0IsRUFBRU4sY0FBYztJQUNoQ08sZ0JBQWdCLEVBQUVMLGNBQWM7SUFDaEMvSyxjQUFjLEVBQWRBLGNBQWM7SUFDZHhPLEdBQUcsRUFBSEEsR0FBRztJQUNIc0wsY0FBYyxFQUFkQSxjQUFjO0lBQ2RrRixJQUFJLEVBQUU4QixNQUFNO0lBQ1p2VSxJQUFJLEVBQUVvVixNQUFNO0lBQ1o3M0IsSUFBSSxFQUFKQSxJQUFJO0lBQ0p3bEIsSUFBSSxFQUFKQSxJQUFJO0lBQ0pLLGNBQWMsRUFBZEEsY0FBYztJQUNkaUgsTUFBTSxFQUFFc0wsUUFBUTtJQUNoQmpULFVBQVUsRUFBVkEsVUFBVTtJQUNWTixNQUFNLEVBQU5BLE1BQU07SUFDTjBYLGVBQWUsRUFBZkEsZUFBZTtJQUNmMVEsYUFBYSxFQUFFd00sZUFBZTtJQUM5QmYsZUFBZSxFQUFFcUQsaUJBQWlCO0lBQ2xDdFYsSUFBSSxFQUFKQSxJQUFJO0lBQ0pQLFNBQVMsRUFBVEEsU0FBUztJQUNUUixLQUFLLEVBQUxBLEtBQUs7SUFDTEcsS0FBSyxFQUFMQSxLQUFLO0lBQ0xMLEdBQUcsRUFBSEEsR0FBRztJQUNIVyxtQkFBbUIsRUFBbkJBLG1CQUFtQjtJQUNuQkgsUUFBUSxFQUFSQSxRQUFRO0lBQ1JlLEtBQUssRUFBTEE7RUFDRixDQUFDLEVBQUU0WSxNQUFNLENBQUNDLFdBQVcsRUFBRTtJQUFFaGdDLEtBQUssRUFBRTtFQUFTLENBQUMsQ0FBQyxDQUFDOztFQUU1QztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLElBQU1pZ0MsTUFBTSxHQUFHLFVBQVU7RUFDekIsSUFBTUMsVUFBVSxHQUFHLGFBQWE7RUFDaEMsSUFBTUMsV0FBVyxPQUFBMStCLE1BQUEsQ0FBT3krQixVQUFVLENBQUU7RUFDcEMsSUFBTUUsY0FBYyxHQUFHLFdBQVc7RUFDbEMsSUFBTUMsWUFBWSxHQUFHLFFBQVE7RUFDN0IsSUFBTUMsU0FBUyxHQUFHLEtBQUs7RUFDdkIsSUFBTUMsY0FBYyxHQUFHLFNBQVM7RUFDaEMsSUFBTUMsZ0JBQWdCLEdBQUcsV0FBVztFQUNwQyxJQUFNQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQzs7RUFFOUIsSUFBTUMsWUFBWSxVQUFBai9CLE1BQUEsQ0FBVTArQixXQUFXLENBQUU7RUFDekMsSUFBTVEsY0FBYyxZQUFBbC9CLE1BQUEsQ0FBWTArQixXQUFXLENBQUU7RUFDN0MsSUFBTVMsWUFBWSxVQUFBbi9CLE1BQUEsQ0FBVTArQixXQUFXLENBQUU7RUFDekMsSUFBTVUsYUFBYSxXQUFBcC9CLE1BQUEsQ0FBVzArQixXQUFXLENBQUU7RUFDM0MsSUFBTVcsc0JBQXNCLFdBQUFyL0IsTUFBQSxDQUFXMCtCLFdBQVcsRUFBQTErQixNQUFBLENBQUcyK0IsY0FBYyxDQUFFO0VBQ3JFLElBQU1XLHNCQUFzQixhQUFBdC9CLE1BQUEsQ0FBYTArQixXQUFXLEVBQUExK0IsTUFBQSxDQUFHMitCLGNBQWMsQ0FBRTtFQUN2RSxJQUFNWSxvQkFBb0IsV0FBQXYvQixNQUFBLENBQVcwK0IsV0FBVyxFQUFBMStCLE1BQUEsQ0FBRzIrQixjQUFjLENBQUU7RUFDbkUsSUFBTWEsaUJBQWlCLEdBQUcsTUFBTTtFQUNoQyxJQUFNQyxpQkFBaUIsR0FBRyxRQUFRO0VBQ2xDLElBQU1DLGtCQUFrQixHQUFHLFNBQVM7RUFDcEMsSUFBTUMsb0JBQW9CLEdBQUcsV0FBVztFQUN4QyxJQUFNQyx3QkFBd0IsR0FBRyxlQUFlO0VBQ2hELElBQU1DLDBCQUEwQixHQUFHLGlCQUFpQjtFQUNwRCxJQUFNQyxzQkFBc0IsR0FBRywyREFBMkQ7RUFDMUYsSUFBTUMsMEJBQTBCLE1BQUEvL0IsTUFBQSxDQUFNOC9CLHNCQUFzQixPQUFBOS9CLE1BQUEsQ0FBSXcvQixpQkFBaUIsQ0FBRTtFQUNuRixJQUFNUSxhQUFhLEdBQUcsZ0JBQWdCO0VBQ3RDLElBQU1DLGVBQWUsR0FBRyxTQUFTO0VBQ2pDLElBQU1DLG1CQUFtQixHQUFHLGFBQWE7RUFDekMsSUFBTUMsc0JBQXNCLEdBQUcsNkRBQTZEO0VBQzVGLElBQU1DLGFBQWEsR0FBR3g2QixLQUFLLEVBQUUsR0FBRyxTQUFTLEdBQUcsV0FBVztFQUN2RCxJQUFNeTZCLGdCQUFnQixHQUFHejZCLEtBQUssRUFBRSxHQUFHLFdBQVcsR0FBRyxTQUFTO0VBQzFELElBQU0wNkIsZ0JBQWdCLEdBQUcxNkIsS0FBSyxFQUFFLEdBQUcsWUFBWSxHQUFHLGNBQWM7RUFDaEUsSUFBTTI2QixtQkFBbUIsR0FBRzM2QixLQUFLLEVBQUUsR0FBRyxjQUFjLEdBQUcsWUFBWTtFQUNuRSxJQUFNNDZCLGVBQWUsR0FBRzU2QixLQUFLLEVBQUUsR0FBRyxZQUFZLEdBQUcsYUFBYTtFQUM5RCxJQUFNNjZCLGNBQWMsR0FBRzc2QixLQUFLLEVBQUUsR0FBRyxhQUFhLEdBQUcsWUFBWTtFQUM3RCxJQUFNODZCLG1CQUFtQixHQUFHLEtBQUs7RUFDakMsSUFBTUMsc0JBQXNCLEdBQUcsUUFBUTtFQUN2QyxJQUFNQyxTQUFTLEdBQUc7SUFDaEJDLFNBQVMsRUFBRSxJQUFJO0lBQ2Z0TyxRQUFRLEVBQUUsaUJBQWlCO0lBQzNCdU8sT0FBTyxFQUFFLFNBQVM7SUFDbEJqVSxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2RrVSxZQUFZLEVBQUUsSUFBSTtJQUNsQmxjLFNBQVMsRUFBRTtFQUNiLENBQUM7RUFDRCxJQUFNbWMsYUFBYSxHQUFHO0lBQ3BCSCxTQUFTLEVBQUUsa0JBQWtCO0lBQzdCdE8sUUFBUSxFQUFFLGtCQUFrQjtJQUM1QnVPLE9BQU8sRUFBRSxRQUFRO0lBQ2pCalUsTUFBTSxFQUFFLHlCQUF5QjtJQUNqQ2tVLFlBQVksRUFBRSx3QkFBd0I7SUFDdENsYyxTQUFTLEVBQUU7RUFDYixDQUFDOztFQUVEO0FBQ0Y7QUFDQTtFQUZFLElBSU1vYyxRQUFRLDBCQUFBQyxlQUFBO0lBQUFuakMsU0FBQSxDQUFBa2pDLFFBQUEsRUFBQUMsZUFBQTtJQUFBLElBQUFDLE9BQUEsR0FBQWxqQyxZQUFBLENBQUFnakMsUUFBQTtJQUNaLFNBQUFBLFNBQVl4aUMsT0FBTyxFQUFFaVMsTUFBTSxFQUFFO01BQUEsSUFBQTB3QixPQUFBO01BQUFsakMsZUFBQSxPQUFBK2lDLFFBQUE7TUFDM0JHLE9BQUEsR0FBQUQsT0FBQSxDQUFBci9CLElBQUEsT0FBTXJELE9BQU8sRUFBRWlTLE1BQU07TUFDckIwd0IsT0FBQSxDQUFLQyxPQUFPLEdBQUcsSUFBSTtNQUNuQkQsT0FBQSxDQUFLRSxPQUFPLEdBQUdGLE9BQUEsQ0FBS2h2QixRQUFRLENBQUNyTyxVQUFVLENBQUMsQ0FBQztNQUN6QztNQUNBcTlCLE9BQUEsQ0FBS0csS0FBSyxHQUFHanVCLGNBQWMsQ0FBQ2EsSUFBSSxDQUFDaXRCLE9BQUEsQ0FBS2h2QixRQUFRLEVBQUU0dEIsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUkxc0IsY0FBYyxDQUFDVSxJQUFJLENBQUNvdEIsT0FBQSxDQUFLaHZCLFFBQVEsRUFBRTR0QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTFzQixjQUFjLENBQUNHLE9BQU8sQ0FBQ3VzQixhQUFhLEVBQUVvQixPQUFBLENBQUtFLE9BQU8sQ0FBQztNQUNoTEYsT0FBQSxDQUFLSSxTQUFTLEdBQUdKLE9BQUEsQ0FBS0ssYUFBYSxFQUFFO01BQUMsT0FBQUwsT0FBQTtJQUN4Qzs7SUFFQTtJQUFBL2lDLFlBQUEsQ0FBQTRpQyxRQUFBO01BQUEzaUMsR0FBQTtNQUFBQyxLQUFBO01BV0E7TUFDQSxTQUFBcVksT0FBQSxFQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMyTCxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUNDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQ0MsSUFBSSxFQUFFO01BQ3BEO0lBQUM7TUFBQW5rQixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBa2tCLEtBQUEsRUFBTztRQUNMLElBQUl6ZSxVQUFVLENBQUMsSUFBSSxDQUFDb08sUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDbVEsUUFBUSxFQUFFLEVBQUU7VUFDaEQ7UUFDRjtRQUNBLElBQU1sWCxhQUFhLEdBQUc7VUFDcEJBLGFBQWEsRUFBRSxJQUFJLENBQUMrRztRQUN0QixDQUFDO1FBQ0QsSUFBTXN2QixTQUFTLEdBQUd0NEIsWUFBWSxDQUFDK0QsT0FBTyxDQUFDLElBQUksQ0FBQ2lGLFFBQVEsRUFBRStzQixZQUFZLEVBQUU5ekIsYUFBYSxDQUFDO1FBQ2xGLElBQUlxMkIsU0FBUyxDQUFDbjBCLGdCQUFnQixFQUFFO1VBQzlCO1FBQ0Y7UUFDQSxJQUFJLENBQUNvMEIsYUFBYSxFQUFFOztRQUVwQjtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUksY0FBYyxJQUFJMWlDLFFBQVEsQ0FBQ3dGLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQzY4QixPQUFPLENBQUN6OUIsT0FBTyxDQUFDcThCLG1CQUFtQixDQUFDLEVBQUU7VUFBQSxJQUFBMEIsS0FBQTtVQUFBLElBQUFDLFdBQUEsR0FBQW40QiwwQkFBQSxDQUN0RSxDQUFBazRCLEtBQUEsS0FBRSxFQUFDNWhDLE1BQU0sQ0FBQTdCLEtBQUEsQ0FBQXlqQyxLQUFBLEVBQUFoN0Isa0JBQUEsQ0FBSTNILFFBQVEsQ0FBQ2tHLElBQUksQ0FBQ3VPLFFBQVEsRUFBQztZQUFBb3VCLE9BQUE7VUFBQTtZQUExRCxLQUFBRCxXQUFBLENBQUFqNEIsQ0FBQSxNQUFBazRCLE9BQUEsR0FBQUQsV0FBQSxDQUFBaDRCLENBQUEsSUFBQUMsSUFBQSxHQUE0RDtjQUFBLElBQWpEckwsT0FBTyxHQUFBcWpDLE9BQUEsQ0FBQXZqQyxLQUFBO2NBQ2hCNkssWUFBWSxDQUFDK0MsRUFBRSxDQUFDMU4sT0FBTyxFQUFFLFdBQVcsRUFBRXFHLElBQUksQ0FBQztZQUM3QztVQUFDLFNBQUFrRixHQUFBO1lBQUE2M0IsV0FBQSxDQUFBNTNCLENBQUEsQ0FBQUQsR0FBQTtVQUFBO1lBQUE2M0IsV0FBQSxDQUFBMzNCLENBQUE7VUFBQTtRQUNIO1FBQ0EsSUFBSSxDQUFDa0ksUUFBUSxDQUFDMnZCLEtBQUssRUFBRTtRQUNyQixJQUFJLENBQUMzdkIsUUFBUSxDQUFDekMsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDNHhCLEtBQUssQ0FBQ3A5QixTQUFTLENBQUMrVSxHQUFHLENBQUNzbUIsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDcHRCLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQ3NtQixpQkFBaUIsQ0FBQztRQUM5Q3AyQixZQUFZLENBQUMrRCxPQUFPLENBQUMsSUFBSSxDQUFDaUYsUUFBUSxFQUFFZ3RCLGFBQWEsRUFBRS96QixhQUFhLENBQUM7TUFDbkU7SUFBQztNQUFBL00sR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWlrQixLQUFBLEVBQU87UUFDTCxJQUFJeGUsVUFBVSxDQUFDLElBQUksQ0FBQ29PLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDbVEsUUFBUSxFQUFFLEVBQUU7VUFDakQ7UUFDRjtRQUNBLElBQU1sWCxhQUFhLEdBQUc7VUFDcEJBLGFBQWEsRUFBRSxJQUFJLENBQUMrRztRQUN0QixDQUFDO1FBQ0QsSUFBSSxDQUFDNHZCLGFBQWEsQ0FBQzMyQixhQUFhLENBQUM7TUFDbkM7SUFBQztNQUFBL00sR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWlVLFFBQUEsRUFBVTtRQUNSLElBQUksSUFBSSxDQUFDNnVCLE9BQU8sRUFBRTtVQUNoQixJQUFJLENBQUNBLE9BQU8sQ0FBQzVELE9BQU8sRUFBRTtRQUN4QjtRQUNBM2YsSUFBQSxDQUFBQyxlQUFBLENBQUFrakIsUUFBQSxDQUFBci9CLFNBQUEsb0JBQUFFLElBQUE7TUFDRjtJQUFDO01BQUF4RCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBdXhCLE9BQUEsRUFBUztRQUNQLElBQUksQ0FBQzBSLFNBQVMsR0FBRyxJQUFJLENBQUNDLGFBQWEsRUFBRTtRQUNyQyxJQUFJLElBQUksQ0FBQ0osT0FBTyxFQUFFO1VBQ2hCLElBQUksQ0FBQ0EsT0FBTyxDQUFDdlIsTUFBTSxFQUFFO1FBQ3ZCO01BQ0Y7O01BRUE7SUFBQTtNQUFBeHhCLEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUF5akMsY0FBYzMyQixhQUFhLEVBQUU7UUFDM0IsSUFBTTQyQixTQUFTLEdBQUc3NEIsWUFBWSxDQUFDK0QsT0FBTyxDQUFDLElBQUksQ0FBQ2lGLFFBQVEsRUFBRTZzQixZQUFZLEVBQUU1ekIsYUFBYSxDQUFDO1FBQ2xGLElBQUk0MkIsU0FBUyxDQUFDMTBCLGdCQUFnQixFQUFFO1VBQzlCO1FBQ0Y7O1FBRUE7UUFDQTtRQUNBLElBQUksY0FBYyxJQUFJdE8sUUFBUSxDQUFDd0YsZUFBZSxFQUFFO1VBQUEsSUFBQXk5QixNQUFBO1VBQUEsSUFBQUMsV0FBQSxHQUFBejRCLDBCQUFBLENBQ3hCLENBQUF3NEIsTUFBQSxLQUFFLEVBQUNsaUMsTUFBTSxDQUFBN0IsS0FBQSxDQUFBK2pDLE1BQUEsRUFBQXQ3QixrQkFBQSxDQUFJM0gsUUFBUSxDQUFDa0csSUFBSSxDQUFDdU8sUUFBUSxFQUFDO1lBQUEwdUIsT0FBQTtVQUFBO1lBQTFELEtBQUFELFdBQUEsQ0FBQXY0QixDQUFBLE1BQUF3NEIsT0FBQSxHQUFBRCxXQUFBLENBQUF0NEIsQ0FBQSxJQUFBQyxJQUFBLEdBQTREO2NBQUEsSUFBakRyTCxPQUFPLEdBQUEyakMsT0FBQSxDQUFBN2pDLEtBQUE7Y0FDaEI2SyxZQUFZLENBQUNDLEdBQUcsQ0FBQzVLLE9BQU8sRUFBRSxXQUFXLEVBQUVxRyxJQUFJLENBQUM7WUFDOUM7VUFBQyxTQUFBa0YsR0FBQTtZQUFBbTRCLFdBQUEsQ0FBQWw0QixDQUFBLENBQUFELEdBQUE7VUFBQTtZQUFBbTRCLFdBQUEsQ0FBQWo0QixDQUFBO1VBQUE7UUFDSDtRQUNBLElBQUksSUFBSSxDQUFDbTNCLE9BQU8sRUFBRTtVQUNoQixJQUFJLENBQUNBLE9BQU8sQ0FBQzVELE9BQU8sRUFBRTtRQUN4QjtRQUNBLElBQUksQ0FBQzhELEtBQUssQ0FBQ3A5QixTQUFTLENBQUMrSyxNQUFNLENBQUNzd0IsaUJBQWlCLENBQUM7UUFDOUMsSUFBSSxDQUFDcHRCLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQytLLE1BQU0sQ0FBQ3N3QixpQkFBaUIsQ0FBQztRQUNqRCxJQUFJLENBQUNwdEIsUUFBUSxDQUFDekMsWUFBWSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUM7UUFDcERGLFdBQVcsQ0FBQ0csbUJBQW1CLENBQUMsSUFBSSxDQUFDMnhCLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDckRuNEIsWUFBWSxDQUFDK0QsT0FBTyxDQUFDLElBQUksQ0FBQ2lGLFFBQVEsRUFBRThzQixjQUFjLEVBQUU3ekIsYUFBYSxDQUFDO01BQ3BFO0lBQUM7TUFBQS9NLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFrUyxXQUFXQyxNQUFNLEVBQUU7UUFDakJBLE1BQU0sR0FBQW9OLElBQUEsQ0FBQUMsZUFBQSxDQUFBa2pCLFFBQUEsQ0FBQXIvQixTQUFBLHVCQUFBRSxJQUFBLE9BQW9CNE8sTUFBTSxDQUFDO1FBQ2pDLElBQUlyUSxPQUFBLENBQU9xUSxNQUFNLENBQUNtVSxTQUFTLE1BQUssUUFBUSxJQUFJLENBQUMxaEIsV0FBVyxDQUFDdU4sTUFBTSxDQUFDbVUsU0FBUyxDQUFDLElBQUksT0FBT25VLE1BQU0sQ0FBQ21VLFNBQVMsQ0FBQ3RCLHFCQUFxQixLQUFLLFVBQVUsRUFBRTtVQUMxSTtVQUNBLE1BQU0sSUFBSTNSLFNBQVMsSUFBQTVSLE1BQUEsQ0FBSXcrQixNQUFNLENBQUMzc0IsV0FBVyxFQUFFLDBHQUFpRztRQUM5STtRQUNBLE9BQU9uQixNQUFNO01BQ2Y7SUFBQztNQUFBcFMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW9qQyxjQUFBLEVBQWdCO1FBQ2QsSUFBSSxPQUFPMUQsTUFBTSxLQUFLLFdBQVcsRUFBRTtVQUNqQyxNQUFNLElBQUlyc0IsU0FBUyxDQUFDLCtEQUErRCxDQUFDO1FBQ3RGO1FBQ0EsSUFBSXl3QixnQkFBZ0IsR0FBRyxJQUFJLENBQUNqd0IsUUFBUTtRQUNwQyxJQUFJLElBQUksQ0FBQ0MsT0FBTyxDQUFDd1MsU0FBUyxLQUFLLFFBQVEsRUFBRTtVQUN2Q3dkLGdCQUFnQixHQUFHLElBQUksQ0FBQ2YsT0FBTztRQUNqQyxDQUFDLE1BQU0sSUFBSW4rQixXQUFXLENBQUMsSUFBSSxDQUFDa1AsT0FBTyxDQUFDd1MsU0FBUyxDQUFDLEVBQUU7VUFDOUN3ZCxnQkFBZ0IsR0FBRy8rQixVQUFVLENBQUMsSUFBSSxDQUFDK08sT0FBTyxDQUFDd1MsU0FBUyxDQUFDO1FBQ3ZELENBQUMsTUFBTSxJQUFJeGtCLE9BQUEsQ0FBTyxJQUFJLENBQUNnUyxPQUFPLENBQUN3UyxTQUFTLE1BQUssUUFBUSxFQUFFO1VBQ3JEd2QsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDaHdCLE9BQU8sQ0FBQ3dTLFNBQVM7UUFDM0M7UUFDQSxJQUFNa2MsWUFBWSxHQUFHLElBQUksQ0FBQ3VCLGdCQUFnQixFQUFFO1FBQzVDLElBQUksQ0FBQ2pCLE9BQU8sR0FBR3hFLFlBQVksQ0FBQ3dGLGdCQUFnQixFQUFFLElBQUksQ0FBQ2QsS0FBSyxFQUFFUixZQUFZLENBQUM7TUFDekU7SUFBQztNQUFBemlDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFna0IsU0FBQSxFQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNnZixLQUFLLENBQUNwOUIsU0FBUyxDQUFDQyxRQUFRLENBQUNvN0IsaUJBQWlCLENBQUM7TUFDekQ7SUFBQztNQUFBbGhDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFna0MsY0FBQSxFQUFnQjtRQUNkLElBQU1DLGNBQWMsR0FBRyxJQUFJLENBQUNsQixPQUFPO1FBQ25DLElBQUlrQixjQUFjLENBQUNyK0IsU0FBUyxDQUFDQyxRQUFRLENBQUNzN0Isa0JBQWtCLENBQUMsRUFBRTtVQUN6RCxPQUFPYyxlQUFlO1FBQ3hCO1FBQ0EsSUFBSWdDLGNBQWMsQ0FBQ3IrQixTQUFTLENBQUNDLFFBQVEsQ0FBQ3U3QixvQkFBb0IsQ0FBQyxFQUFFO1VBQzNELE9BQU9jLGNBQWM7UUFDdkI7UUFDQSxJQUFJK0IsY0FBYyxDQUFDcitCLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDdzdCLHdCQUF3QixDQUFDLEVBQUU7VUFDL0QsT0FBT2MsbUJBQW1CO1FBQzVCO1FBQ0EsSUFBSThCLGNBQWMsQ0FBQ3IrQixTQUFTLENBQUNDLFFBQVEsQ0FBQ3k3QiwwQkFBMEIsQ0FBQyxFQUFFO1VBQ2pFLE9BQU9jLHNCQUFzQjtRQUMvQjs7UUFFQTtRQUNBLElBQU04QixLQUFLLEdBQUdqZ0MsZ0JBQWdCLENBQUMsSUFBSSxDQUFDKytCLEtBQUssQ0FBQyxDQUFDNTlCLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDMFAsSUFBSSxFQUFFLEtBQUssS0FBSztRQUM3RixJQUFJbXZCLGNBQWMsQ0FBQ3IrQixTQUFTLENBQUNDLFFBQVEsQ0FBQ3E3QixpQkFBaUIsQ0FBQyxFQUFFO1VBQ3hELE9BQU9nRCxLQUFLLEdBQUdwQyxnQkFBZ0IsR0FBR0QsYUFBYTtRQUNqRDtRQUNBLE9BQU9xQyxLQUFLLEdBQUdsQyxtQkFBbUIsR0FBR0QsZ0JBQWdCO01BQ3ZEO0lBQUM7TUFBQWhpQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBa2pDLGNBQUEsRUFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ3J2QixRQUFRLENBQUN2TyxPQUFPLENBQUNvOEIsZUFBZSxDQUFDLEtBQUssSUFBSTtNQUN4RDtJQUFDO01BQUEzaEMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW1rQyxXQUFBLEVBQWE7UUFBQSxJQUFBQyxPQUFBO1FBQ1gsSUFDRTlWLE1BQU0sR0FDSixJQUFJLENBQUN4YSxPQUFPLENBRGR3YSxNQUFNO1FBRVIsSUFBSSxPQUFPQSxNQUFNLEtBQUssUUFBUSxFQUFFO1VBQzlCLE9BQU9BLE1BQU0sQ0FBQzlwQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUN3UixHQUFHLENBQUMsVUFBQWhXLEtBQUs7WUFBQSxPQUFJcUUsTUFBTSxDQUFDb2MsUUFBUSxDQUFDemdCLEtBQUssRUFBRSxFQUFFLENBQUM7VUFBQSxFQUFDO1FBQ25FO1FBQ0EsSUFBSSxPQUFPc3VCLE1BQU0sS0FBSyxVQUFVLEVBQUU7VUFDaEMsT0FBTyxVQUFBK1YsVUFBVTtZQUFBLE9BQUkvVixNQUFNLENBQUMrVixVQUFVLEVBQUVELE9BQUksQ0FBQ3Z3QixRQUFRLENBQUM7VUFBQTtRQUN4RDtRQUNBLE9BQU95YSxNQUFNO01BQ2Y7SUFBQztNQUFBdnVCLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUErakMsaUJBQUEsRUFBbUI7UUFDakIsSUFBTU8scUJBQXFCLEdBQUc7VUFDNUI1ZCxTQUFTLEVBQUUsSUFBSSxDQUFDc2QsYUFBYSxFQUFFO1VBQy9CckgsU0FBUyxFQUFFLENBQUM7WUFDVmoxQixJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCaWhCLE9BQU8sRUFBRTtjQUNQcUwsUUFBUSxFQUFFLElBQUksQ0FBQ2xnQixPQUFPLENBQUNrZ0I7WUFDekI7VUFDRixDQUFDLEVBQUU7WUFDRHRzQixJQUFJLEVBQUUsUUFBUTtZQUNkaWhCLE9BQU8sRUFBRTtjQUNQMkYsTUFBTSxFQUFFLElBQUksQ0FBQzZWLFVBQVU7WUFDekI7VUFDRixDQUFDO1FBQ0gsQ0FBQzs7UUFFRDtRQUNBLElBQUksSUFBSSxDQUFDbEIsU0FBUyxJQUFJLElBQUksQ0FBQ252QixPQUFPLENBQUN5dUIsT0FBTyxLQUFLLFFBQVEsRUFBRTtVQUN2RHJ4QixXQUFXLENBQUNDLGdCQUFnQixDQUFDLElBQUksQ0FBQzZ4QixLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7VUFDOURzQixxQkFBcUIsQ0FBQzNILFNBQVMsR0FBRyxDQUFDO1lBQ2pDajFCLElBQUksRUFBRSxhQUFhO1lBQ25CeWhCLE9BQU8sRUFBRTtVQUNYLENBQUMsQ0FBQztRQUNKO1FBQ0EsT0FBQTNXLGFBQUEsQ0FBQUEsYUFBQSxLQUNLOHhCLHFCQUFxQixHQUNyQnI4QixPQUFPLENBQUMsSUFBSSxDQUFDNkwsT0FBTyxDQUFDMHVCLFlBQVksRUFBRSxDQUFDOEIscUJBQXFCLENBQUMsQ0FBQztNQUVsRTtJQUFDO01BQUF2a0MsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXVrQyxnQkFBQUMsTUFBQSxFQUdHO1FBQUEsSUFGRHprQyxHQUFHLEdBQUF5a0MsTUFBQSxDQUFIemtDLEdBQUc7VUFDSCtJLE1BQU0sR0FBQTA3QixNQUFBLENBQU4xN0IsTUFBTTtRQUVOLElBQU1tVyxLQUFLLEdBQUdsSyxjQUFjLENBQUM5SSxJQUFJLENBQUMyMUIsc0JBQXNCLEVBQUUsSUFBSSxDQUFDb0IsS0FBSyxDQUFDLENBQUNyeEIsTUFBTSxDQUFDLFVBQUF6UixPQUFPO1VBQUEsT0FBSStFLFNBQVMsQ0FBQy9FLE9BQU8sQ0FBQztRQUFBLEVBQUM7UUFDM0csSUFBSSxDQUFDK2UsS0FBSyxDQUFDamUsTUFBTSxFQUFFO1VBQ2pCO1FBQ0Y7O1FBRUE7UUFDQTtRQUNBaUksb0JBQW9CLENBQUNnVyxLQUFLLEVBQUVuVyxNQUFNLEVBQUUvSSxHQUFHLEtBQUt5Z0MsZ0JBQWdCLEVBQUUsQ0FBQ3ZoQixLQUFLLENBQUN0UixRQUFRLENBQUM3RSxNQUFNLENBQUMsQ0FBQyxDQUFDMDZCLEtBQUssRUFBRTtNQUNoRzs7TUFFQTtJQUFBO01BQUF6akMsR0FBQTtNQUFBaVEsR0FBQSxFQWpNQSxTQUFBQSxJQUFBLEVBQXFCO1FBQ25CLE9BQU9xeUIsU0FBUztNQUNsQjtJQUFDO01BQUF0aUMsR0FBQTtNQUFBaVEsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBeUI7UUFDdkIsT0FBT3l5QixhQUFhO01BQ3RCO0lBQUM7TUFBQTFpQyxHQUFBO01BQUFpUSxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUFrQjtRQUNoQixPQUFPaXdCLE1BQU07TUFDZjtJQUFDO01BQUFsZ0MsR0FBQTtNQUFBQyxLQUFBLEVBMExELFNBQUE4SCxnQkFBdUJxSyxNQUFNLEVBQUU7UUFDN0IsT0FBTyxJQUFJLENBQUNzRixJQUFJLENBQUMsWUFBWTtVQUMzQixJQUFNQyxJQUFJLEdBQUdnckIsUUFBUSxDQUFDaHVCLG1CQUFtQixDQUFDLElBQUksRUFBRXZDLE1BQU0sQ0FBQztVQUN2RCxJQUFJLE9BQU9BLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUI7VUFDRjtVQUNBLElBQUksT0FBT3VGLElBQUksQ0FBQ3ZGLE1BQU0sQ0FBQyxLQUFLLFdBQVcsRUFBRTtZQUN2QyxNQUFNLElBQUlrQixTQUFTLHNCQUFBNVIsTUFBQSxDQUFxQjBRLE1BQU0sUUFBSTtVQUNwRDtVQUNBdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLEVBQUU7UUFDaEIsQ0FBQyxDQUFDO01BQ0o7SUFBQztNQUFBcFMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXlrQyxXQUFrQmg2QixLQUFLLEVBQUU7UUFDdkIsSUFBSUEsS0FBSyxDQUFDNk4sTUFBTSxLQUFLbW9CLGtCQUFrQixJQUFJaDJCLEtBQUssQ0FBQ00sSUFBSSxLQUFLLE9BQU8sSUFBSU4sS0FBSyxDQUFDMUssR0FBRyxLQUFLdWdDLFNBQVMsRUFBRTtVQUM1RjtRQUNGO1FBQ0EsSUFBTW9FLFdBQVcsR0FBRzN2QixjQUFjLENBQUM5SSxJQUFJLENBQUN1MUIsMEJBQTBCLENBQUM7UUFBQyxJQUFBbUQsV0FBQSxHQUFBeDVCLDBCQUFBLENBQy9DdTVCLFdBQVc7VUFBQUUsT0FBQTtRQUFBO1VBQWhDLEtBQUFELFdBQUEsQ0FBQXQ1QixDQUFBLE1BQUF1NUIsT0FBQSxHQUFBRCxXQUFBLENBQUFyNUIsQ0FBQSxJQUFBQyxJQUFBLEdBQWtDO1lBQUEsSUFBdkI4TSxNQUFNLEdBQUF1c0IsT0FBQSxDQUFBNWtDLEtBQUE7WUFDZixJQUFNUSxPQUFPLEdBQUdraUMsUUFBUSxDQUFDanVCLFdBQVcsQ0FBQzRELE1BQU0sQ0FBQztZQUM1QyxJQUFJLENBQUM3WCxPQUFPLElBQUlBLE9BQU8sQ0FBQ3NULE9BQU8sQ0FBQ3d1QixTQUFTLEtBQUssS0FBSyxFQUFFO2NBQ25EO1lBQ0Y7WUFDQSxJQUFNdUMsWUFBWSxHQUFHcDZCLEtBQUssQ0FBQ282QixZQUFZLEVBQUU7WUFDekMsSUFBTUMsWUFBWSxHQUFHRCxZQUFZLENBQUNsM0IsUUFBUSxDQUFDbk4sT0FBTyxDQUFDd2lDLEtBQUssQ0FBQztZQUN6RCxJQUFJNkIsWUFBWSxDQUFDbDNCLFFBQVEsQ0FBQ25OLE9BQU8sQ0FBQ3FULFFBQVEsQ0FBQyxJQUFJclQsT0FBTyxDQUFDc1QsT0FBTyxDQUFDd3VCLFNBQVMsS0FBSyxRQUFRLElBQUksQ0FBQ3dDLFlBQVksSUFBSXRrQyxPQUFPLENBQUNzVCxPQUFPLENBQUN3dUIsU0FBUyxLQUFLLFNBQVMsSUFBSXdDLFlBQVksRUFBRTtjQUNqSztZQUNGOztZQUVBO1lBQ0EsSUFBSXRrQyxPQUFPLENBQUN3aUMsS0FBSyxDQUFDbjlCLFFBQVEsQ0FBQzRFLEtBQUssQ0FBQzNCLE1BQU0sQ0FBQyxLQUFLMkIsS0FBSyxDQUFDTSxJQUFJLEtBQUssT0FBTyxJQUFJTixLQUFLLENBQUMxSyxHQUFHLEtBQUt1Z0MsU0FBUyxJQUFJLG9DQUFvQyxDQUFDbHRCLElBQUksQ0FBQzNJLEtBQUssQ0FBQzNCLE1BQU0sQ0FBQzROLE9BQU8sQ0FBQyxDQUFDLEVBQUU7Y0FDbEs7WUFDRjtZQUNBLElBQU01SixhQUFhLEdBQUc7Y0FDcEJBLGFBQWEsRUFBRXRNLE9BQU8sQ0FBQ3FUO1lBQ3pCLENBQUM7WUFDRCxJQUFJcEosS0FBSyxDQUFDTSxJQUFJLEtBQUssT0FBTyxFQUFFO2NBQzFCK0IsYUFBYSxDQUFDMkosVUFBVSxHQUFHaE0sS0FBSztZQUNsQztZQUNBakssT0FBTyxDQUFDaWpDLGFBQWEsQ0FBQzMyQixhQUFhLENBQUM7VUFDdEM7UUFBQyxTQUFBckIsR0FBQTtVQUFBazVCLFdBQUEsQ0FBQWo1QixDQUFBLENBQUFELEdBQUE7UUFBQTtVQUFBazVCLFdBQUEsQ0FBQWg1QixDQUFBO1FBQUE7TUFDSDtJQUFDO01BQUE1TCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBK2tDLHNCQUE2QnQ2QixLQUFLLEVBQUU7UUFDbEM7UUFDQTs7UUFFQSxJQUFNdTZCLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQzV4QixJQUFJLENBQUMzSSxLQUFLLENBQUMzQixNQUFNLENBQUM0TixPQUFPLENBQUM7UUFDNUQsSUFBTXV1QixhQUFhLEdBQUd4NkIsS0FBSyxDQUFDMUssR0FBRyxLQUFLc2dDLFlBQVk7UUFDaEQsSUFBTTZFLGVBQWUsR0FBRyxDQUFDM0UsY0FBYyxFQUFFQyxnQkFBZ0IsQ0FBQyxDQUFDN3lCLFFBQVEsQ0FBQ2xELEtBQUssQ0FBQzFLLEdBQUcsQ0FBQztRQUM5RSxJQUFJLENBQUNtbEMsZUFBZSxJQUFJLENBQUNELGFBQWEsRUFBRTtVQUN0QztRQUNGO1FBQ0EsSUFBSUQsT0FBTyxJQUFJLENBQUNDLGFBQWEsRUFBRTtVQUM3QjtRQUNGO1FBQ0F4NkIsS0FBSyxDQUFDNkUsY0FBYyxFQUFFOztRQUV0QjtRQUNBLElBQU02MUIsZUFBZSxHQUFHLElBQUksQ0FBQzd2QixPQUFPLENBQUNpc0Isc0JBQXNCLENBQUMsR0FBRyxJQUFJLEdBQUd4c0IsY0FBYyxDQUFDVSxJQUFJLENBQUMsSUFBSSxFQUFFOHJCLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUl4c0IsY0FBYyxDQUFDYSxJQUFJLENBQUMsSUFBSSxFQUFFMnJCLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUl4c0IsY0FBYyxDQUFDRyxPQUFPLENBQUNxc0Isc0JBQXNCLEVBQUU5MkIsS0FBSyxDQUFDRSxjQUFjLENBQUNuRixVQUFVLENBQUM7UUFDclEsSUFBTTZLLFFBQVEsR0FBR3F5QixRQUFRLENBQUNodUIsbUJBQW1CLENBQUN5d0IsZUFBZSxDQUFDO1FBQzlELElBQUlELGVBQWUsRUFBRTtVQUNuQno2QixLQUFLLENBQUMyNkIsZUFBZSxFQUFFO1VBQ3ZCLzBCLFFBQVEsQ0FBQzZULElBQUksRUFBRTtVQUNmN1QsUUFBUSxDQUFDazBCLGVBQWUsQ0FBQzk1QixLQUFLLENBQUM7VUFDL0I7UUFDRjtRQUNBLElBQUk0RixRQUFRLENBQUMyVCxRQUFRLEVBQUUsRUFBRTtVQUN2QjtVQUNBdlosS0FBSyxDQUFDMjZCLGVBQWUsRUFBRTtVQUN2Qi8wQixRQUFRLENBQUM0VCxJQUFJLEVBQUU7VUFDZmtoQixlQUFlLENBQUMzQixLQUFLLEVBQUU7UUFDekI7TUFDRjtJQUFDO0lBQUEsT0FBQWQsUUFBQTtFQUFBLEVBcFJvQmp2QixhQUFhO0VBdVJwQztBQUNGO0FBQ0E7RUFFRTVJLFlBQVksQ0FBQytDLEVBQUUsQ0FBQ2xOLFFBQVEsRUFBRXFnQyxzQkFBc0IsRUFBRVEsc0JBQXNCLEVBQUVtQixRQUFRLENBQUNxQyxxQkFBcUIsQ0FBQztFQUN6R2w2QixZQUFZLENBQUMrQyxFQUFFLENBQUNsTixRQUFRLEVBQUVxZ0Msc0JBQXNCLEVBQUVVLGFBQWEsRUFBRWlCLFFBQVEsQ0FBQ3FDLHFCQUFxQixDQUFDO0VBQ2hHbDZCLFlBQVksQ0FBQytDLEVBQUUsQ0FBQ2xOLFFBQVEsRUFBRW9nQyxzQkFBc0IsRUFBRTRCLFFBQVEsQ0FBQytCLFVBQVUsQ0FBQztFQUN0RTU1QixZQUFZLENBQUMrQyxFQUFFLENBQUNsTixRQUFRLEVBQUVzZ0Msb0JBQW9CLEVBQUUwQixRQUFRLENBQUMrQixVQUFVLENBQUM7RUFDcEU1NUIsWUFBWSxDQUFDK0MsRUFBRSxDQUFDbE4sUUFBUSxFQUFFb2dDLHNCQUFzQixFQUFFUyxzQkFBc0IsRUFBRSxVQUFVOTJCLEtBQUssRUFBRTtJQUN6RkEsS0FBSyxDQUFDNkUsY0FBYyxFQUFFO0lBQ3RCb3pCLFFBQVEsQ0FBQ2h1QixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzJELE1BQU0sRUFBRTtFQUM3QyxDQUFDLENBQUM7O0VBRUY7QUFDRjtBQUNBOztFQUVFOVEsa0JBQWtCLENBQUNtN0IsUUFBUSxDQUFDOztFQUU1QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLElBQU0yQyxzQkFBc0IsR0FBRyxtREFBbUQ7RUFDbEYsSUFBTUMsdUJBQXVCLEdBQUcsYUFBYTtFQUM3QyxJQUFNQyxnQkFBZ0IsR0FBRyxlQUFlO0VBQ3hDLElBQU1DLGVBQWUsR0FBRyxjQUFjOztFQUV0QztBQUNGO0FBQ0E7RUFGRSxJQUlNQyxlQUFlO0lBQ25CLFNBQUFBLGdCQUFBLEVBQWM7TUFBQTlsQyxlQUFBLE9BQUE4bEMsZUFBQTtNQUNaLElBQUksQ0FBQzV4QixRQUFRLEdBQUduVCxRQUFRLENBQUNrRyxJQUFJO0lBQy9COztJQUVBO0lBQUE5RyxZQUFBLENBQUEybEMsZUFBQTtNQUFBMWxDLEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUEwbEMsU0FBQSxFQUFXO1FBQ1Q7UUFDQSxJQUFNQyxhQUFhLEdBQUdqbEMsUUFBUSxDQUFDd0YsZUFBZSxDQUFDaW9CLFdBQVc7UUFDMUQsT0FBT3hxQixJQUFJLENBQUM2VyxHQUFHLENBQUM3WCxNQUFNLENBQUNpakMsVUFBVSxHQUFHRCxhQUFhLENBQUM7TUFDcEQ7SUFBQztNQUFBNWxDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFpa0IsS0FBQSxFQUFPO1FBQ0wsSUFBTXVHLEtBQUssR0FBRyxJQUFJLENBQUNrYixRQUFRLEVBQUU7UUFDN0IsSUFBSSxDQUFDRyxnQkFBZ0IsRUFBRTtRQUN2QjtRQUNBLElBQUksQ0FBQ0MscUJBQXFCLENBQUMsSUFBSSxDQUFDanlCLFFBQVEsRUFBRTB4QixnQkFBZ0IsRUFBRSxVQUFBUSxlQUFlO1VBQUEsT0FBSUEsZUFBZSxHQUFHdmIsS0FBSztRQUFBLEVBQUM7UUFDdkc7UUFDQSxJQUFJLENBQUNzYixxQkFBcUIsQ0FBQ1Qsc0JBQXNCLEVBQUVFLGdCQUFnQixFQUFFLFVBQUFRLGVBQWU7VUFBQSxPQUFJQSxlQUFlLEdBQUd2YixLQUFLO1FBQUEsRUFBQztRQUNoSCxJQUFJLENBQUNzYixxQkFBcUIsQ0FBQ1IsdUJBQXVCLEVBQUVFLGVBQWUsRUFBRSxVQUFBTyxlQUFlO1VBQUEsT0FBSUEsZUFBZSxHQUFHdmIsS0FBSztRQUFBLEVBQUM7TUFDbEg7SUFBQztNQUFBenFCLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF1NEIsTUFBQSxFQUFRO1FBQ04sSUFBSSxDQUFDeU4sdUJBQXVCLENBQUMsSUFBSSxDQUFDbnlCLFFBQVEsRUFBRSxVQUFVLENBQUM7UUFDdkQsSUFBSSxDQUFDbXlCLHVCQUF1QixDQUFDLElBQUksQ0FBQ255QixRQUFRLEVBQUUweEIsZ0JBQWdCLENBQUM7UUFDN0QsSUFBSSxDQUFDUyx1QkFBdUIsQ0FBQ1gsc0JBQXNCLEVBQUVFLGdCQUFnQixDQUFDO1FBQ3RFLElBQUksQ0FBQ1MsdUJBQXVCLENBQUNWLHVCQUF1QixFQUFFRSxlQUFlLENBQUM7TUFDeEU7SUFBQztNQUFBemxDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFpbUMsY0FBQSxFQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDUCxRQUFRLEVBQUUsR0FBRyxDQUFDO01BQzVCOztNQUVBO0lBQUE7TUFBQTNsQyxHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBNmxDLGlCQUFBLEVBQW1CO1FBQ2pCLElBQUksQ0FBQ0sscUJBQXFCLENBQUMsSUFBSSxDQUFDcnlCLFFBQVEsRUFBRSxVQUFVLENBQUM7UUFDckQsSUFBSSxDQUFDQSxRQUFRLENBQUN0UyxLQUFLLENBQUN1eEIsUUFBUSxHQUFHLFFBQVE7TUFDekM7SUFBQztNQUFBL3lCLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUE4bEMsc0JBQXNCcGpDLFFBQVEsRUFBRXlqQyxhQUFhLEVBQUVwL0IsUUFBUSxFQUFFO1FBQUEsSUFBQXEvQixPQUFBO1FBQ3ZELElBQU1DLGNBQWMsR0FBRyxJQUFJLENBQUNYLFFBQVEsRUFBRTtRQUN0QyxJQUFNWSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQW9CQSxDQUFHcG1DLE9BQU8sRUFBSTtVQUN0QyxJQUFJQSxPQUFPLEtBQUtrbUMsT0FBSSxDQUFDdnlCLFFBQVEsSUFBSWxSLE1BQU0sQ0FBQ2lqQyxVQUFVLEdBQUcxbEMsT0FBTyxDQUFDaXVCLFdBQVcsR0FBR2tZLGNBQWMsRUFBRTtZQUN6RjtVQUNGO1VBQ0FELE9BQUksQ0FBQ0YscUJBQXFCLENBQUNobUMsT0FBTyxFQUFFaW1DLGFBQWEsQ0FBQztVQUNsRCxJQUFNSixlQUFlLEdBQUdwakMsTUFBTSxDQUFDc0IsZ0JBQWdCLENBQUMvRCxPQUFPLENBQUMsQ0FBQ2tGLGdCQUFnQixDQUFDK2dDLGFBQWEsQ0FBQztVQUN4RmptQyxPQUFPLENBQUNxQixLQUFLLENBQUNnbEMsV0FBVyxDQUFDSixhQUFhLEtBQUExa0MsTUFBQSxDQUFLc0YsUUFBUSxDQUFDMUMsTUFBTSxDQUFDQyxVQUFVLENBQUN5aEMsZUFBZSxDQUFDLENBQUMsUUFBSztRQUMvRixDQUFDO1FBQ0QsSUFBSSxDQUFDUywwQkFBMEIsQ0FBQzlqQyxRQUFRLEVBQUU0akMsb0JBQW9CLENBQUM7TUFDakU7SUFBQztNQUFBdm1DLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFrbUMsc0JBQXNCaG1DLE9BQU8sRUFBRWltQyxhQUFhLEVBQUU7UUFDNUMsSUFBTU0sV0FBVyxHQUFHdm1DLE9BQU8sQ0FBQ3FCLEtBQUssQ0FBQzZELGdCQUFnQixDQUFDK2dDLGFBQWEsQ0FBQztRQUNqRSxJQUFJTSxXQUFXLEVBQUU7VUFDZnYxQixXQUFXLENBQUNDLGdCQUFnQixDQUFDalIsT0FBTyxFQUFFaW1DLGFBQWEsRUFBRU0sV0FBVyxDQUFDO1FBQ25FO01BQ0Y7SUFBQztNQUFBMW1DLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFnbUMsd0JBQXdCdGpDLFFBQVEsRUFBRXlqQyxhQUFhLEVBQUU7UUFDL0MsSUFBTUcsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBR3BtQyxPQUFPLEVBQUk7VUFDdEMsSUFBTUYsS0FBSyxHQUFHa1IsV0FBVyxDQUFDYyxnQkFBZ0IsQ0FBQzlSLE9BQU8sRUFBRWltQyxhQUFhLENBQUM7VUFDbEU7VUFDQSxJQUFJbm1DLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDbEJFLE9BQU8sQ0FBQ3FCLEtBQUssQ0FBQ21sQyxjQUFjLENBQUNQLGFBQWEsQ0FBQztZQUMzQztVQUNGO1VBQ0FqMUIsV0FBVyxDQUFDRyxtQkFBbUIsQ0FBQ25SLE9BQU8sRUFBRWltQyxhQUFhLENBQUM7VUFDdkRqbUMsT0FBTyxDQUFDcUIsS0FBSyxDQUFDZ2xDLFdBQVcsQ0FBQ0osYUFBYSxFQUFFbm1DLEtBQUssQ0FBQztRQUNqRCxDQUFDO1FBQ0QsSUFBSSxDQUFDd21DLDBCQUEwQixDQUFDOWpDLFFBQVEsRUFBRTRqQyxvQkFBb0IsQ0FBQztNQUNqRTtJQUFDO01BQUF2bUMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXdtQywyQkFBMkI5akMsUUFBUSxFQUFFaWtDLFFBQVEsRUFBRTtRQUM3QyxJQUFJL2hDLFdBQVcsQ0FBQ2xDLFFBQVEsQ0FBQyxFQUFFO1VBQ3pCaWtDLFFBQVEsQ0FBQ2prQyxRQUFRLENBQUM7VUFDbEI7UUFDRjtRQUFDLElBQUFra0MsV0FBQSxHQUFBejdCLDBCQUFBLENBQ2lCNEosY0FBYyxDQUFDOUksSUFBSSxDQUFDdkosUUFBUSxFQUFFLElBQUksQ0FBQ21SLFFBQVEsQ0FBQztVQUFBZ3pCLE9BQUE7UUFBQTtVQUE5RCxLQUFBRCxXQUFBLENBQUF2N0IsQ0FBQSxNQUFBdzdCLE9BQUEsR0FBQUQsV0FBQSxDQUFBdDdCLENBQUEsSUFBQUMsSUFBQSxHQUFnRTtZQUFBLElBQXJEdTdCLEdBQUcsR0FBQUQsT0FBQSxDQUFBN21DLEtBQUE7WUFDWjJtQyxRQUFRLENBQUNHLEdBQUcsQ0FBQztVQUNmO1FBQUMsU0FBQXI3QixHQUFBO1VBQUFtN0IsV0FBQSxDQUFBbDdCLENBQUEsQ0FBQUQsR0FBQTtRQUFBO1VBQUFtN0IsV0FBQSxDQUFBajdCLENBQUE7UUFBQTtNQUNIO0lBQUM7SUFBQSxPQUFBODVCLGVBQUE7RUFBQTtFQUdIO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUVFO0FBQ0Y7QUFDQTtFQUVFLElBQU1zQixNQUFNLEdBQUcsVUFBVTtFQUN6QixJQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0VBQ2hDLElBQU1DLGlCQUFpQixHQUFHLE1BQU07RUFDaEMsSUFBTUMsZUFBZSxtQkFBQXpsQyxNQUFBLENBQW1Cc2xDLE1BQU0sQ0FBRTtFQUNoRCxJQUFNSSxTQUFTLEdBQUc7SUFDaEJDLFNBQVMsRUFBRSxnQkFBZ0I7SUFDM0JDLGFBQWEsRUFBRSxJQUFJO0lBQ25CN3lCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCdlAsU0FBUyxFQUFFLElBQUk7SUFDZjtJQUNBcWlDLFdBQVcsRUFBRSxNQUFNLENBQUM7RUFDdEIsQ0FBQzs7RUFFRCxJQUFNQyxhQUFhLEdBQUc7SUFDcEJILFNBQVMsRUFBRSxRQUFRO0lBQ25CQyxhQUFhLEVBQUUsaUJBQWlCO0lBQ2hDN3lCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCdlAsU0FBUyxFQUFFLFNBQVM7SUFDcEJxaUMsV0FBVyxFQUFFO0VBQ2YsQ0FBQzs7RUFFRDtBQUNGO0FBQ0E7RUFGRSxJQUlNRSxRQUFRLDBCQUFBQyxRQUFBO0lBQUFqb0MsU0FBQSxDQUFBZ29DLFFBQUEsRUFBQUMsUUFBQTtJQUFBLElBQUFDLE9BQUEsR0FBQWhvQyxZQUFBLENBQUE4bkMsUUFBQTtJQUNaLFNBQUFBLFNBQVlyMUIsTUFBTSxFQUFFO01BQUEsSUFBQXcxQixPQUFBO01BQUFob0MsZUFBQSxPQUFBNm5DLFFBQUE7TUFDbEJHLE9BQUEsR0FBQUQsT0FBQSxDQUFBbmtDLElBQUE7TUFDQW9rQyxPQUFBLENBQUs3ekIsT0FBTyxHQUFHNnpCLE9BQUEsQ0FBS3oxQixVQUFVLENBQUNDLE1BQU0sQ0FBQztNQUN0Q3cxQixPQUFBLENBQUtDLFdBQVcsR0FBRyxLQUFLO01BQ3hCRCxPQUFBLENBQUs5ekIsUUFBUSxHQUFHLElBQUk7TUFBQyxPQUFBOHpCLE9BQUE7SUFDdkI7O0lBRUE7SUFBQTduQyxZQUFBLENBQUEwbkMsUUFBQTtNQUFBem5DLEdBQUE7TUFBQUMsS0FBQTtNQVdBO01BQ0EsU0FBQWtrQixLQUFLbmQsUUFBUSxFQUFFO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQytNLE9BQU8sQ0FBQzdPLFNBQVMsRUFBRTtVQUMzQmdELE9BQU8sQ0FBQ2xCLFFBQVEsQ0FBQztVQUNqQjtRQUNGO1FBQ0EsSUFBSSxDQUFDOGdDLE9BQU8sRUFBRTtRQUNkLElBQU0zbkMsT0FBTyxHQUFHLElBQUksQ0FBQzRuQyxXQUFXLEVBQUU7UUFDbEMsSUFBSSxJQUFJLENBQUNoMEIsT0FBTyxDQUFDVSxVQUFVLEVBQUU7VUFDM0JoTyxNQUFNLENBQUN0RyxPQUFPLENBQUM7UUFDakI7UUFDQUEsT0FBTyxDQUFDMEYsU0FBUyxDQUFDK1UsR0FBRyxDQUFDc3NCLGlCQUFpQixDQUFDO1FBQ3hDLElBQUksQ0FBQ2MsaUJBQWlCLENBQUMsWUFBTTtVQUMzQjkvQixPQUFPLENBQUNsQixRQUFRLENBQUM7UUFDbkIsQ0FBQyxDQUFDO01BQ0o7SUFBQztNQUFBaEgsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWlrQixLQUFLbGQsUUFBUSxFQUFFO1FBQUEsSUFBQWloQyxPQUFBO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQ2wwQixPQUFPLENBQUM3TyxTQUFTLEVBQUU7VUFDM0JnRCxPQUFPLENBQUNsQixRQUFRLENBQUM7VUFDakI7UUFDRjtRQUNBLElBQUksQ0FBQytnQyxXQUFXLEVBQUUsQ0FBQ2xpQyxTQUFTLENBQUMrSyxNQUFNLENBQUNzMkIsaUJBQWlCLENBQUM7UUFDdEQsSUFBSSxDQUFDYyxpQkFBaUIsQ0FBQyxZQUFNO1VBQzNCQyxPQUFJLENBQUMvekIsT0FBTyxFQUFFO1VBQ2RoTSxPQUFPLENBQUNsQixRQUFRLENBQUM7UUFDbkIsQ0FBQyxDQUFDO01BQ0o7SUFBQztNQUFBaEgsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWlVLFFBQUEsRUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMyekIsV0FBVyxFQUFFO1VBQ3JCO1FBQ0Y7UUFDQS84QixZQUFZLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMrSSxRQUFRLEVBQUVxekIsZUFBZSxDQUFDO1FBQ2hELElBQUksQ0FBQ3J6QixRQUFRLENBQUNsRCxNQUFNLEVBQUU7UUFDdEIsSUFBSSxDQUFDaTNCLFdBQVcsR0FBRyxLQUFLO01BQzFCOztNQUVBO0lBQUE7TUFBQTduQyxHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBOG5DLFlBQUEsRUFBYztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUNqMEIsUUFBUSxFQUFFO1VBQ2xCLElBQU1vMEIsUUFBUSxHQUFHdm5DLFFBQVEsQ0FBQ3duQyxhQUFhLENBQUMsS0FBSyxDQUFDO1VBQzlDRCxRQUFRLENBQUNiLFNBQVMsR0FBRyxJQUFJLENBQUN0ekIsT0FBTyxDQUFDc3pCLFNBQVM7VUFDM0MsSUFBSSxJQUFJLENBQUN0ekIsT0FBTyxDQUFDVSxVQUFVLEVBQUU7WUFDM0J5ekIsUUFBUSxDQUFDcmlDLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQ3FzQixpQkFBaUIsQ0FBQztVQUMzQztVQUNBLElBQUksQ0FBQ256QixRQUFRLEdBQUdvMEIsUUFBUTtRQUMxQjtRQUNBLE9BQU8sSUFBSSxDQUFDcDBCLFFBQVE7TUFDdEI7SUFBQztNQUFBOVQsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXFTLGtCQUFrQkYsTUFBTSxFQUFFO1FBQ3hCO1FBQ0FBLE1BQU0sQ0FBQ20xQixXQUFXLEdBQUd2aUMsVUFBVSxDQUFDb04sTUFBTSxDQUFDbTFCLFdBQVcsQ0FBQztRQUNuRCxPQUFPbjFCLE1BQU07TUFDZjtJQUFDO01BQUFwUyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBNm5DLFFBQUEsRUFBVTtRQUFBLElBQUFNLE9BQUE7UUFDUixJQUFJLElBQUksQ0FBQ1AsV0FBVyxFQUFFO1VBQ3BCO1FBQ0Y7UUFDQSxJQUFNMW5DLE9BQU8sR0FBRyxJQUFJLENBQUM0bkMsV0FBVyxFQUFFO1FBQ2xDLElBQUksQ0FBQ2gwQixPQUFPLENBQUN3ekIsV0FBVyxDQUFDYyxNQUFNLENBQUNsb0MsT0FBTyxDQUFDO1FBQ3hDMkssWUFBWSxDQUFDK0MsRUFBRSxDQUFDMU4sT0FBTyxFQUFFZ25DLGVBQWUsRUFBRSxZQUFNO1VBQzlDai9CLE9BQU8sQ0FBQ2tnQyxPQUFJLENBQUNyMEIsT0FBTyxDQUFDdXpCLGFBQWEsQ0FBQztRQUNyQyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUNPLFdBQVcsR0FBRyxJQUFJO01BQ3pCO0lBQUM7TUFBQTduQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBK25DLGtCQUFrQmhoQyxRQUFRLEVBQUU7UUFDMUJ1QixzQkFBc0IsQ0FBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMrZ0MsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDaDBCLE9BQU8sQ0FBQ1UsVUFBVSxDQUFDO01BQy9FO0lBQUM7TUFBQXpVLEdBQUE7TUFBQWlRLEdBQUEsRUE1RUQsU0FBQUEsSUFBQSxFQUFxQjtRQUNuQixPQUFPbTNCLFNBQVM7TUFDbEI7SUFBQztNQUFBcG5DLEdBQUE7TUFBQWlRLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQXlCO1FBQ3ZCLE9BQU91M0IsYUFBYTtNQUN0QjtJQUFDO01BQUF4bkMsR0FBQTtNQUFBaVEsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBa0I7UUFDaEIsT0FBTysyQixNQUFNO01BQ2Y7SUFBQztJQUFBLE9BQUFTLFFBQUE7RUFBQSxFQWpCb0J2MUIsTUFBTTtFQXdGN0I7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBRUU7QUFDRjtBQUNBO0VBRUUsSUFBTW8yQixNQUFNLEdBQUcsV0FBVztFQUMxQixJQUFNQyxVQUFVLEdBQUcsY0FBYztFQUNqQyxJQUFNQyxXQUFXLE9BQUE5bUMsTUFBQSxDQUFPNm1DLFVBQVUsQ0FBRTtFQUNwQyxJQUFNRSxlQUFlLGFBQUEvbUMsTUFBQSxDQUFhOG1DLFdBQVcsQ0FBRTtFQUMvQyxJQUFNRSxpQkFBaUIsaUJBQUFobkMsTUFBQSxDQUFpQjhtQyxXQUFXLENBQUU7RUFDckQsSUFBTUcsT0FBTyxHQUFHLEtBQUs7RUFDckIsSUFBTUMsZUFBZSxHQUFHLFNBQVM7RUFDakMsSUFBTUMsZ0JBQWdCLEdBQUcsVUFBVTtFQUNuQyxJQUFNQyxTQUFTLEdBQUc7SUFDaEJDLFNBQVMsRUFBRSxJQUFJO0lBQ2ZDLFdBQVcsRUFBRSxJQUFJLENBQUM7RUFDcEIsQ0FBQzs7RUFFRCxJQUFNQyxhQUFhLEdBQUc7SUFDcEJGLFNBQVMsRUFBRSxTQUFTO0lBQ3BCQyxXQUFXLEVBQUU7RUFDZixDQUFDOztFQUVEO0FBQ0Y7QUFDQTtFQUZFLElBSU1FLFNBQVMsMEJBQUFDLFFBQUE7SUFBQTFwQyxTQUFBLENBQUF5cEMsU0FBQSxFQUFBQyxRQUFBO0lBQUEsSUFBQUMsT0FBQSxHQUFBenBDLFlBQUEsQ0FBQXVwQyxTQUFBO0lBQ2IsU0FBQUEsVUFBWTkyQixNQUFNLEVBQUU7TUFBQSxJQUFBaTNCLE9BQUE7TUFBQXpwQyxlQUFBLE9BQUFzcEMsU0FBQTtNQUNsQkcsT0FBQSxHQUFBRCxPQUFBLENBQUE1bEMsSUFBQTtNQUNBNmxDLE9BQUEsQ0FBS3QxQixPQUFPLEdBQUdzMUIsT0FBQSxDQUFLbDNCLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDO01BQ3RDaTNCLE9BQUEsQ0FBS0MsU0FBUyxHQUFHLEtBQUs7TUFDdEJELE9BQUEsQ0FBS0Usb0JBQW9CLEdBQUcsSUFBSTtNQUFDLE9BQUFGLE9BQUE7SUFDbkM7O0lBRUE7SUFBQXRwQyxZQUFBLENBQUFtcEMsU0FBQTtNQUFBbHBDLEdBQUE7TUFBQUMsS0FBQTtNQVdBO01BQ0EsU0FBQXVwQyxTQUFBLEVBQVc7UUFBQSxJQUFBQyxPQUFBO1FBQ1QsSUFBSSxJQUFJLENBQUNILFNBQVMsRUFBRTtVQUNsQjtRQUNGO1FBQ0EsSUFBSSxJQUFJLENBQUN2MUIsT0FBTyxDQUFDZzFCLFNBQVMsRUFBRTtVQUMxQixJQUFJLENBQUNoMUIsT0FBTyxDQUFDaTFCLFdBQVcsQ0FBQ3ZGLEtBQUssRUFBRTtRQUNsQztRQUNBMzRCLFlBQVksQ0FBQ0MsR0FBRyxDQUFDcEssUUFBUSxFQUFFNm5DLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDekMxOUIsWUFBWSxDQUFDK0MsRUFBRSxDQUFDbE4sUUFBUSxFQUFFOG5DLGVBQWUsRUFBRSxVQUFBLzlCLEtBQUs7VUFBQSxPQUFJKytCLE9BQUksQ0FBQ0MsY0FBYyxDQUFDaC9CLEtBQUssQ0FBQztRQUFBLEVBQUM7UUFDL0VJLFlBQVksQ0FBQytDLEVBQUUsQ0FBQ2xOLFFBQVEsRUFBRStuQyxpQkFBaUIsRUFBRSxVQUFBaCtCLEtBQUs7VUFBQSxPQUFJKytCLE9BQUksQ0FBQ0UsY0FBYyxDQUFDai9CLEtBQUssQ0FBQztRQUFBLEVBQUM7UUFDakYsSUFBSSxDQUFDNCtCLFNBQVMsR0FBRyxJQUFJO01BQ3ZCO0lBQUM7TUFBQXRwQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBMnBDLFdBQUEsRUFBYTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUNOLFNBQVMsRUFBRTtVQUNuQjtRQUNGO1FBQ0EsSUFBSSxDQUFDQSxTQUFTLEdBQUcsS0FBSztRQUN0QngrQixZQUFZLENBQUNDLEdBQUcsQ0FBQ3BLLFFBQVEsRUFBRTZuQyxXQUFXLENBQUM7TUFDekM7O01BRUE7SUFBQTtNQUFBeG9DLEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUF5cEMsZUFBZWgvQixLQUFLLEVBQUU7UUFDcEIsSUFDRXMrQixXQUFXLEdBQ1QsSUFBSSxDQUFDajFCLE9BQU8sQ0FEZGkxQixXQUFXO1FBRWIsSUFBSXQrQixLQUFLLENBQUMzQixNQUFNLEtBQUtwSSxRQUFRLElBQUkrSixLQUFLLENBQUMzQixNQUFNLEtBQUtpZ0MsV0FBVyxJQUFJQSxXQUFXLENBQUNsakMsUUFBUSxDQUFDNEUsS0FBSyxDQUFDM0IsTUFBTSxDQUFDLEVBQUU7VUFDbkc7UUFDRjtRQUNBLElBQU1zZixRQUFRLEdBQUdyVCxjQUFjLENBQUNlLGlCQUFpQixDQUFDaXpCLFdBQVcsQ0FBQztRQUM5RCxJQUFJM2dCLFFBQVEsQ0FBQ3BuQixNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQ3pCK25DLFdBQVcsQ0FBQ3ZGLEtBQUssRUFBRTtRQUNyQixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM4RixvQkFBb0IsS0FBS1YsZ0JBQWdCLEVBQUU7VUFDekR4Z0IsUUFBUSxDQUFDQSxRQUFRLENBQUNwbkIsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDd2lDLEtBQUssRUFBRTtRQUN2QyxDQUFDLE1BQU07VUFDTHBiLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ29iLEtBQUssRUFBRTtRQUNyQjtNQUNGO0lBQUM7TUFBQXpqQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBMHBDLGVBQWVqL0IsS0FBSyxFQUFFO1FBQ3BCLElBQUlBLEtBQUssQ0FBQzFLLEdBQUcsS0FBSzJvQyxPQUFPLEVBQUU7VUFDekI7UUFDRjtRQUNBLElBQUksQ0FBQ1ksb0JBQW9CLEdBQUc3K0IsS0FBSyxDQUFDbS9CLFFBQVEsR0FBR2hCLGdCQUFnQixHQUFHRCxlQUFlO01BQ2pGO0lBQUM7TUFBQTVvQyxHQUFBO01BQUFpUSxHQUFBLEVBckRELFNBQUFBLElBQUEsRUFBcUI7UUFDbkIsT0FBTzY0QixTQUFTO01BQ2xCO0lBQUM7TUFBQTlvQyxHQUFBO01BQUFpUSxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUF5QjtRQUN2QixPQUFPZzVCLGFBQWE7TUFDdEI7SUFBQztNQUFBanBDLEdBQUE7TUFBQWlRLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQWtCO1FBQ2hCLE9BQU9xNEIsTUFBTTtNQUNmO0lBQUM7SUFBQSxPQUFBWSxTQUFBO0VBQUEsRUFqQnFCaDNCLE1BQU07RUFpRTlCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUVFO0FBQ0Y7QUFDQTtFQUVFLElBQU00M0IsTUFBTSxHQUFHLE9BQU87RUFDdEIsSUFBTUMsVUFBVSxHQUFHLFVBQVU7RUFDN0IsSUFBTUMsV0FBVyxPQUFBdG9DLE1BQUEsQ0FBT3FvQyxVQUFVLENBQUU7RUFDcEMsSUFBTUUsY0FBYyxHQUFHLFdBQVc7RUFDbEMsSUFBTUMsWUFBWSxHQUFHLFFBQVE7RUFDN0IsSUFBTUMsWUFBWSxVQUFBem9DLE1BQUEsQ0FBVXNvQyxXQUFXLENBQUU7RUFDekMsSUFBTUksc0JBQXNCLG1CQUFBMW9DLE1BQUEsQ0FBbUJzb0MsV0FBVyxDQUFFO0VBQzVELElBQU1LLGNBQWMsWUFBQTNvQyxNQUFBLENBQVlzb0MsV0FBVyxDQUFFO0VBQzdDLElBQU1NLFlBQVksVUFBQTVvQyxNQUFBLENBQVVzb0MsV0FBVyxDQUFFO0VBQ3pDLElBQU1PLGFBQWEsV0FBQTdvQyxNQUFBLENBQVdzb0MsV0FBVyxDQUFFO0VBQzNDLElBQU1RLGNBQWMsWUFBQTlvQyxNQUFBLENBQVlzb0MsV0FBVyxDQUFFO0VBQzdDLElBQU1TLG1CQUFtQixtQkFBQS9vQyxNQUFBLENBQW1Cc29DLFdBQVcsQ0FBRTtFQUN6RCxJQUFNVSx1QkFBdUIsdUJBQUFocEMsTUFBQSxDQUF1QnNvQyxXQUFXLENBQUU7RUFDakUsSUFBTVcsdUJBQXVCLHFCQUFBanBDLE1BQUEsQ0FBcUJzb0MsV0FBVyxDQUFFO0VBQy9ELElBQU1ZLHNCQUFzQixXQUFBbHBDLE1BQUEsQ0FBV3NvQyxXQUFXLEVBQUF0b0MsTUFBQSxDQUFHdW9DLGNBQWMsQ0FBRTtFQUNyRSxJQUFNWSxlQUFlLEdBQUcsWUFBWTtFQUNwQyxJQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0VBQ2hDLElBQU1DLGlCQUFpQixHQUFHLE1BQU07RUFDaEMsSUFBTUMsaUJBQWlCLEdBQUcsY0FBYztFQUN4QyxJQUFNQyxlQUFlLEdBQUcsYUFBYTtFQUNyQyxJQUFNQyxlQUFlLEdBQUcsZUFBZTtFQUN2QyxJQUFNQyxtQkFBbUIsR0FBRyxhQUFhO0VBQ3pDLElBQU1DLHNCQUFzQixHQUFHLDBCQUEwQjtFQUN6RCxJQUFNQyxTQUFTLEdBQUc7SUFDaEJuRCxRQUFRLEVBQUUsSUFBSTtJQUNkekUsS0FBSyxFQUFFLElBQUk7SUFDWHBtQixRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0QsSUFBTWl1QixhQUFhLEdBQUc7SUFDcEJwRCxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCekUsS0FBSyxFQUFFLFNBQVM7SUFDaEJwbUIsUUFBUSxFQUFFO0VBQ1osQ0FBQzs7RUFFRDtBQUNGO0FBQ0E7RUFGRSxJQUlNa3VCLEtBQUssMEJBQUFDLGVBQUE7SUFBQS9yQyxTQUFBLENBQUE4ckMsS0FBQSxFQUFBQyxlQUFBO0lBQUEsSUFBQUMsUUFBQSxHQUFBOXJDLFlBQUEsQ0FBQTRyQyxLQUFBO0lBQ1QsU0FBQUEsTUFBWXByQyxPQUFPLEVBQUVpUyxNQUFNLEVBQUU7TUFBQSxJQUFBczVCLE9BQUE7TUFBQTlyQyxlQUFBLE9BQUEyckMsS0FBQTtNQUMzQkcsT0FBQSxHQUFBRCxRQUFBLENBQUFqb0MsSUFBQSxPQUFNckQsT0FBTyxFQUFFaVMsTUFBTTtNQUNyQnM1QixPQUFBLENBQUtDLE9BQU8sR0FBRzMyQixjQUFjLENBQUNHLE9BQU8sQ0FBQysxQixlQUFlLEVBQUVRLE9BQUEsQ0FBSzUzQixRQUFRLENBQUM7TUFDckU0M0IsT0FBQSxDQUFLRSxTQUFTLEdBQUdGLE9BQUEsQ0FBS0csbUJBQW1CLEVBQUU7TUFDM0NILE9BQUEsQ0FBS0ksVUFBVSxHQUFHSixPQUFBLENBQUtLLG9CQUFvQixFQUFFO01BQzdDTCxPQUFBLENBQUt6bkIsUUFBUSxHQUFHLEtBQUs7TUFDckJ5bkIsT0FBQSxDQUFLbm9CLGdCQUFnQixHQUFHLEtBQUs7TUFDN0Jtb0IsT0FBQSxDQUFLTSxVQUFVLEdBQUcsSUFBSXRHLGVBQWUsRUFBRTtNQUN2Q2dHLE9BQUEsQ0FBS3J0QixrQkFBa0IsRUFBRTtNQUFDLE9BQUFxdEIsT0FBQTtJQUM1Qjs7SUFFQTtJQUFBM3JDLFlBQUEsQ0FBQXdyQyxLQUFBO01BQUF2ckMsR0FBQTtNQUFBQyxLQUFBO01BV0E7TUFDQSxTQUFBcVksT0FBT3ZMLGFBQWEsRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQ2tYLFFBQVEsR0FBRyxJQUFJLENBQUNDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQ0MsSUFBSSxDQUFDcFgsYUFBYSxDQUFDO01BQy9EO0lBQUM7TUFBQS9NLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFra0IsS0FBS3BYLGFBQWEsRUFBRTtRQUFBLElBQUFrL0IsT0FBQTtRQUNsQixJQUFJLElBQUksQ0FBQ2hvQixRQUFRLElBQUksSUFBSSxDQUFDVixnQkFBZ0IsRUFBRTtVQUMxQztRQUNGO1FBQ0EsSUFBTTZmLFNBQVMsR0FBR3Q0QixZQUFZLENBQUMrRCxPQUFPLENBQUMsSUFBSSxDQUFDaUYsUUFBUSxFQUFFdzJCLFlBQVksRUFBRTtVQUNsRXY5QixhQUFhLEVBQWJBO1FBQ0YsQ0FBQyxDQUFDO1FBQ0YsSUFBSXEyQixTQUFTLENBQUNuMEIsZ0JBQWdCLEVBQUU7VUFDOUI7UUFDRjtRQUNBLElBQUksQ0FBQ2dWLFFBQVEsR0FBRyxJQUFJO1FBQ3BCLElBQUksQ0FBQ1YsZ0JBQWdCLEdBQUcsSUFBSTtRQUM1QixJQUFJLENBQUN5b0IsVUFBVSxDQUFDOW5CLElBQUksRUFBRTtRQUN0QnZqQixRQUFRLENBQUNrRyxJQUFJLENBQUNoQixTQUFTLENBQUMrVSxHQUFHLENBQUNpd0IsZUFBZSxDQUFDO1FBQzVDLElBQUksQ0FBQ3FCLGFBQWEsRUFBRTtRQUNwQixJQUFJLENBQUNOLFNBQVMsQ0FBQ3puQixJQUFJLENBQUM7VUFBQSxPQUFNOG5CLE9BQUksQ0FBQ0UsWUFBWSxDQUFDcC9CLGFBQWEsQ0FBQztRQUFBLEVBQUM7TUFDN0Q7SUFBQztNQUFBL00sR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWlrQixLQUFBLEVBQU87UUFBQSxJQUFBa29CLE9BQUE7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDbm9CLFFBQVEsSUFBSSxJQUFJLENBQUNWLGdCQUFnQixFQUFFO1VBQzNDO1FBQ0Y7UUFDQSxJQUFNb2dCLFNBQVMsR0FBRzc0QixZQUFZLENBQUMrRCxPQUFPLENBQUMsSUFBSSxDQUFDaUYsUUFBUSxFQUFFcTJCLFlBQVksQ0FBQztRQUNuRSxJQUFJeEcsU0FBUyxDQUFDMTBCLGdCQUFnQixFQUFFO1VBQzlCO1FBQ0Y7UUFDQSxJQUFJLENBQUNnVixRQUFRLEdBQUcsS0FBSztRQUNyQixJQUFJLENBQUNWLGdCQUFnQixHQUFHLElBQUk7UUFDNUIsSUFBSSxDQUFDdW9CLFVBQVUsQ0FBQ2xDLFVBQVUsRUFBRTtRQUM1QixJQUFJLENBQUM5MUIsUUFBUSxDQUFDak8sU0FBUyxDQUFDK0ssTUFBTSxDQUFDbTZCLGlCQUFpQixDQUFDO1FBQ2pELElBQUksQ0FBQ3YyQixjQUFjLENBQUM7VUFBQSxPQUFNNDNCLE9BQUksQ0FBQ0MsVUFBVSxFQUFFO1FBQUEsR0FBRSxJQUFJLENBQUN2NEIsUUFBUSxFQUFFLElBQUksQ0FBQ3dOLFdBQVcsRUFBRSxDQUFDO01BQ2pGO0lBQUM7TUFBQXRoQixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBaVUsUUFBQSxFQUFVO1FBQ1IsU0FBQW80QixHQUFBLE1BQUFDLEtBQUEsR0FBMEIsQ0FBQzNwQyxNQUFNLEVBQUUsSUFBSSxDQUFDK29DLE9BQU8sQ0FBQyxFQUFBVyxHQUFBLEdBQUFDLEtBQUEsQ0FBQXRyQyxNQUFBLEVBQUFxckMsR0FBQSxJQUFFO1VBQTdDLElBQU1FLFdBQVcsR0FBQUQsS0FBQSxDQUFBRCxHQUFBO1VBQ3BCeGhDLFlBQVksQ0FBQ0MsR0FBRyxDQUFDeWhDLFdBQVcsRUFBRXhDLFdBQVcsQ0FBQztRQUM1QztRQUNBLElBQUksQ0FBQzRCLFNBQVMsQ0FBQzEzQixPQUFPLEVBQUU7UUFDeEIsSUFBSSxDQUFDNDNCLFVBQVUsQ0FBQ2xDLFVBQVUsRUFBRTtRQUM1QnBxQixJQUFBLENBQUFDLGVBQUEsQ0FBQThyQixLQUFBLENBQUFqb0MsU0FBQSxvQkFBQUUsSUFBQTtNQUNGO0lBQUM7TUFBQXhELEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF3c0MsYUFBQSxFQUFlO1FBQ2IsSUFBSSxDQUFDUCxhQUFhLEVBQUU7TUFDdEI7O01BRUE7SUFBQTtNQUFBbHNDLEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUE0ckMsb0JBQUEsRUFBc0I7UUFDcEIsT0FBTyxJQUFJcEUsUUFBUSxDQUFDO1VBQ2xCdmlDLFNBQVMsRUFBRWlJLE9BQU8sQ0FBQyxJQUFJLENBQUM0RyxPQUFPLENBQUNtMEIsUUFBUSxDQUFDO1VBQ3pDO1VBQ0F6ekIsVUFBVSxFQUFFLElBQUksQ0FBQzZNLFdBQVc7UUFDOUIsQ0FBQyxDQUFDO01BQ0o7SUFBQztNQUFBdGhCLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUE4ckMscUJBQUEsRUFBdUI7UUFDckIsT0FBTyxJQUFJN0MsU0FBUyxDQUFDO1VBQ25CRixXQUFXLEVBQUUsSUFBSSxDQUFDbDFCO1FBQ3BCLENBQUMsQ0FBQztNQUNKO0lBQUM7TUFBQTlULEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFrc0MsYUFBYXAvQixhQUFhLEVBQUU7UUFBQSxJQUFBMi9CLE9BQUE7UUFDMUI7UUFDQSxJQUFJLENBQUMvckMsUUFBUSxDQUFDa0csSUFBSSxDQUFDZixRQUFRLENBQUMsSUFBSSxDQUFDZ08sUUFBUSxDQUFDLEVBQUU7VUFDMUNuVCxRQUFRLENBQUNrRyxJQUFJLENBQUN3aEMsTUFBTSxDQUFDLElBQUksQ0FBQ3YwQixRQUFRLENBQUM7UUFDckM7UUFDQSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3RTLEtBQUssQ0FBQ2doQyxPQUFPLEdBQUcsT0FBTztRQUNyQyxJQUFJLENBQUMxdUIsUUFBUSxDQUFDdkMsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUN1QyxRQUFRLENBQUN6QyxZQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztRQUM5QyxJQUFJLENBQUN5QyxRQUFRLENBQUN6QyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUN5QyxRQUFRLENBQUNvZSxTQUFTLEdBQUcsQ0FBQztRQUMzQixJQUFNeWEsU0FBUyxHQUFHMzNCLGNBQWMsQ0FBQ0csT0FBTyxDQUFDZzJCLG1CQUFtQixFQUFFLElBQUksQ0FBQ1EsT0FBTyxDQUFDO1FBQzNFLElBQUlnQixTQUFTLEVBQUU7VUFDYkEsU0FBUyxDQUFDemEsU0FBUyxHQUFHLENBQUM7UUFDekI7UUFDQXpyQixNQUFNLENBQUMsSUFBSSxDQUFDcU4sUUFBUSxDQUFDO1FBQ3JCLElBQUksQ0FBQ0EsUUFBUSxDQUFDak8sU0FBUyxDQUFDK1UsR0FBRyxDQUFDbXdCLGlCQUFpQixDQUFDO1FBQzlDLElBQU02QixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7VUFDL0IsSUFBSUYsT0FBSSxDQUFDMzRCLE9BQU8sQ0FBQzB2QixLQUFLLEVBQUU7WUFDdEJpSixPQUFJLENBQUNaLFVBQVUsQ0FBQ3RDLFFBQVEsRUFBRTtVQUM1QjtVQUNBa0QsT0FBSSxDQUFDbnBCLGdCQUFnQixHQUFHLEtBQUs7VUFDN0J6WSxZQUFZLENBQUMrRCxPQUFPLENBQUM2OUIsT0FBSSxDQUFDNTRCLFFBQVEsRUFBRXkyQixhQUFhLEVBQUU7WUFDakR4OUIsYUFBYSxFQUFiQTtVQUNGLENBQUMsQ0FBQztRQUNKLENBQUM7UUFDRCxJQUFJLENBQUN5SCxjQUFjLENBQUNvNEIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQ3JxQixXQUFXLEVBQUUsQ0FBQztNQUMzRTtJQUFDO01BQUF0aEIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW9lLG1CQUFBLEVBQXFCO1FBQUEsSUFBQXd1QixPQUFBO1FBQ25CL2hDLFlBQVksQ0FBQytDLEVBQUUsQ0FBQyxJQUFJLENBQUNpRyxRQUFRLEVBQUU2MkIsdUJBQXVCLEVBQUUsVUFBQWpnQyxLQUFLLEVBQUk7VUFDL0QsSUFBSUEsS0FBSyxDQUFDMUssR0FBRyxLQUFLa3FDLFlBQVksRUFBRTtZQUM5QjtVQUNGO1VBQ0EsSUFBSTJDLE9BQUksQ0FBQzk0QixPQUFPLENBQUNzSixRQUFRLEVBQUU7WUFDekJ3dkIsT0FBSSxDQUFDM29CLElBQUksRUFBRTtZQUNYO1VBQ0Y7VUFDQTJvQixPQUFJLENBQUNDLDBCQUEwQixFQUFFO1FBQ25DLENBQUMsQ0FBQztRQUNGaGlDLFlBQVksQ0FBQytDLEVBQUUsQ0FBQ2pMLE1BQU0sRUFBRTRuQyxjQUFjLEVBQUUsWUFBTTtVQUM1QyxJQUFJcUMsT0FBSSxDQUFDNW9CLFFBQVEsSUFBSSxDQUFDNG9CLE9BQUksQ0FBQ3RwQixnQkFBZ0IsRUFBRTtZQUMzQ3NwQixPQUFJLENBQUNYLGFBQWEsRUFBRTtVQUN0QjtRQUNGLENBQUMsQ0FBQztRQUNGcGhDLFlBQVksQ0FBQytDLEVBQUUsQ0FBQyxJQUFJLENBQUNpRyxRQUFRLEVBQUU0MkIsdUJBQXVCLEVBQUUsVUFBQWhnQyxLQUFLLEVBQUk7VUFDL0Q7VUFDQUksWUFBWSxDQUFDZ0QsR0FBRyxDQUFDKytCLE9BQUksQ0FBQy80QixRQUFRLEVBQUUyMkIsbUJBQW1CLEVBQUUsVUFBQXNDLE1BQU0sRUFBSTtZQUM3RCxJQUFJRixPQUFJLENBQUMvNEIsUUFBUSxLQUFLcEosS0FBSyxDQUFDM0IsTUFBTSxJQUFJOGpDLE9BQUksQ0FBQy80QixRQUFRLEtBQUtpNUIsTUFBTSxDQUFDaGtDLE1BQU0sRUFBRTtjQUNyRTtZQUNGO1lBQ0EsSUFBSThqQyxPQUFJLENBQUM5NEIsT0FBTyxDQUFDbTBCLFFBQVEsS0FBSyxRQUFRLEVBQUU7Y0FDdEMyRSxPQUFJLENBQUNDLDBCQUEwQixFQUFFO2NBQ2pDO1lBQ0Y7WUFDQSxJQUFJRCxPQUFJLENBQUM5NEIsT0FBTyxDQUFDbTBCLFFBQVEsRUFBRTtjQUN6QjJFLE9BQUksQ0FBQzNvQixJQUFJLEVBQUU7WUFDYjtVQUNGLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztNQUNKO0lBQUM7TUFBQWxrQixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBb3NDLFdBQUEsRUFBYTtRQUFBLElBQUFXLE9BQUE7UUFDWCxJQUFJLENBQUNsNUIsUUFBUSxDQUFDdFMsS0FBSyxDQUFDZ2hDLE9BQU8sR0FBRyxNQUFNO1FBQ3BDLElBQUksQ0FBQzF1QixRQUFRLENBQUN6QyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUN5QyxRQUFRLENBQUN2QyxlQUFlLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQ3VDLFFBQVEsQ0FBQ3ZDLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDZ1MsZ0JBQWdCLEdBQUcsS0FBSztRQUM3QixJQUFJLENBQUNxb0IsU0FBUyxDQUFDMW5CLElBQUksQ0FBQyxZQUFNO1VBQ3hCdmpCLFFBQVEsQ0FBQ2tHLElBQUksQ0FBQ2hCLFNBQVMsQ0FBQytLLE1BQU0sQ0FBQ2k2QixlQUFlLENBQUM7VUFDL0NtQyxPQUFJLENBQUNDLGlCQUFpQixFQUFFO1VBQ3hCRCxPQUFJLENBQUNoQixVQUFVLENBQUN4VCxLQUFLLEVBQUU7VUFDdkIxdEIsWUFBWSxDQUFDK0QsT0FBTyxDQUFDbStCLE9BQUksQ0FBQ2w1QixRQUFRLEVBQUV1MkIsY0FBYyxDQUFDO1FBQ3JELENBQUMsQ0FBQztNQUNKO0lBQUM7TUFBQXJxQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBcWhCLFlBQUEsRUFBYztRQUNaLE9BQU8sSUFBSSxDQUFDeE4sUUFBUSxDQUFDak8sU0FBUyxDQUFDQyxRQUFRLENBQUNnbEMsaUJBQWlCLENBQUM7TUFDNUQ7SUFBQztNQUFBOXFDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUE2c0MsMkJBQUEsRUFBNkI7UUFBQSxJQUFBSSxPQUFBO1FBQzNCLElBQU12SixTQUFTLEdBQUc3NEIsWUFBWSxDQUFDK0QsT0FBTyxDQUFDLElBQUksQ0FBQ2lGLFFBQVEsRUFBRXMyQixzQkFBc0IsQ0FBQztRQUM3RSxJQUFJekcsU0FBUyxDQUFDMTBCLGdCQUFnQixFQUFFO1VBQzlCO1FBQ0Y7UUFDQSxJQUFNaytCLGtCQUFrQixHQUFHLElBQUksQ0FBQ3I1QixRQUFRLENBQUM4ZSxZQUFZLEdBQUdqeUIsUUFBUSxDQUFDd0YsZUFBZSxDQUFDZ29CLFlBQVk7UUFDN0YsSUFBTWlmLGdCQUFnQixHQUFHLElBQUksQ0FBQ3Q1QixRQUFRLENBQUN0UyxLQUFLLENBQUN5eEIsU0FBUztRQUN0RDtRQUNBLElBQUltYSxnQkFBZ0IsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDdDVCLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDa2xDLGlCQUFpQixDQUFDLEVBQUU7VUFDeEY7UUFDRjtRQUNBLElBQUksQ0FBQ21DLGtCQUFrQixFQUFFO1VBQ3ZCLElBQUksQ0FBQ3I1QixRQUFRLENBQUN0UyxLQUFLLENBQUN5eEIsU0FBUyxHQUFHLFFBQVE7UUFDMUM7UUFDQSxJQUFJLENBQUNuZixRQUFRLENBQUNqTyxTQUFTLENBQUMrVSxHQUFHLENBQUNvd0IsaUJBQWlCLENBQUM7UUFDOUMsSUFBSSxDQUFDeDJCLGNBQWMsQ0FBQyxZQUFNO1VBQ3hCMDRCLE9BQUksQ0FBQ3A1QixRQUFRLENBQUNqTyxTQUFTLENBQUMrSyxNQUFNLENBQUNvNkIsaUJBQWlCLENBQUM7VUFDakRrQyxPQUFJLENBQUMxNEIsY0FBYyxDQUFDLFlBQU07WUFDeEIwNEIsT0FBSSxDQUFDcDVCLFFBQVEsQ0FBQ3RTLEtBQUssQ0FBQ3l4QixTQUFTLEdBQUdtYSxnQkFBZ0I7VUFDbEQsQ0FBQyxFQUFFRixPQUFJLENBQUN2QixPQUFPLENBQUM7UUFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsT0FBTyxDQUFDO1FBQ2hCLElBQUksQ0FBQzczQixRQUFRLENBQUMydkIsS0FBSyxFQUFFO01BQ3ZCOztNQUVBO0FBQ0o7QUFDQTtJQUZJO01BQUF6akMsR0FBQTtNQUFBQyxLQUFBLEVBSUEsU0FBQWlzQyxjQUFBLEVBQWdCO1FBQ2QsSUFBTWlCLGtCQUFrQixHQUFHLElBQUksQ0FBQ3I1QixRQUFRLENBQUM4ZSxZQUFZLEdBQUdqeUIsUUFBUSxDQUFDd0YsZUFBZSxDQUFDZ29CLFlBQVk7UUFDN0YsSUFBTW1ZLGNBQWMsR0FBRyxJQUFJLENBQUMwRixVQUFVLENBQUNyRyxRQUFRLEVBQUU7UUFDakQsSUFBTTBILGlCQUFpQixHQUFHL0csY0FBYyxHQUFHLENBQUM7UUFDNUMsSUFBSStHLGlCQUFpQixJQUFJLENBQUNGLGtCQUFrQixFQUFFO1VBQzVDLElBQU1sNkIsUUFBUSxHQUFHM0wsS0FBSyxFQUFFLEdBQUcsYUFBYSxHQUFHLGNBQWM7VUFDekQsSUFBSSxDQUFDd00sUUFBUSxDQUFDdFMsS0FBSyxDQUFDeVIsUUFBUSxDQUFDLE1BQUF2UixNQUFBLENBQU00a0MsY0FBYyxPQUFJO1FBQ3ZEO1FBQ0EsSUFBSSxDQUFDK0csaUJBQWlCLElBQUlGLGtCQUFrQixFQUFFO1VBQzVDLElBQU1sNkIsU0FBUSxHQUFHM0wsS0FBSyxFQUFFLEdBQUcsY0FBYyxHQUFHLGFBQWE7VUFDekQsSUFBSSxDQUFDd00sUUFBUSxDQUFDdFMsS0FBSyxDQUFDeVIsU0FBUSxDQUFDLE1BQUF2UixNQUFBLENBQU00a0MsY0FBYyxPQUFJO1FBQ3ZEO01BQ0Y7SUFBQztNQUFBdG1DLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFndEMsa0JBQUEsRUFBb0I7UUFDbEIsSUFBSSxDQUFDbjVCLFFBQVEsQ0FBQ3RTLEtBQUssQ0FBQzhyQyxXQUFXLEdBQUcsRUFBRTtRQUNwQyxJQUFJLENBQUN4NUIsUUFBUSxDQUFDdFMsS0FBSyxDQUFDK3JDLFlBQVksR0FBRyxFQUFFO01BQ3ZDOztNQUVBO0lBQUE7TUFBQXZ0QyxHQUFBO01BQUFpUSxHQUFBLEVBL0xBLFNBQUFBLElBQUEsRUFBcUI7UUFDbkIsT0FBT283QixTQUFTO01BQ2xCO0lBQUM7TUFBQXJyQyxHQUFBO01BQUFpUSxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUF5QjtRQUN2QixPQUFPcTdCLGFBQWE7TUFDdEI7SUFBQztNQUFBdHJDLEdBQUE7TUFBQWlRLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQWtCO1FBQ2hCLE9BQU82NUIsTUFBTTtNQUNmO0lBQUM7TUFBQTlwQyxHQUFBO01BQUFDLEtBQUEsRUF3TEQsU0FBQThILGdCQUF1QnFLLE1BQU0sRUFBRXJGLGFBQWEsRUFBRTtRQUM1QyxPQUFPLElBQUksQ0FBQzJLLElBQUksQ0FBQyxZQUFZO1VBQzNCLElBQU1DLElBQUksR0FBRzR6QixLQUFLLENBQUM1MkIsbUJBQW1CLENBQUMsSUFBSSxFQUFFdkMsTUFBTSxDQUFDO1VBQ3BELElBQUksT0FBT0EsTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM5QjtVQUNGO1VBQ0EsSUFBSSxPQUFPdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQ3ZDLE1BQU0sSUFBSWtCLFNBQVMsc0JBQUE1UixNQUFBLENBQXFCMFEsTUFBTSxRQUFJO1VBQ3BEO1VBQ0F1RixJQUFJLENBQUN2RixNQUFNLENBQUMsQ0FBQ3JGLGFBQWEsQ0FBQztRQUM3QixDQUFDLENBQUM7TUFDSjtJQUFDO0lBQUEsT0FBQXcrQixLQUFBO0VBQUEsRUF4TmlCNzNCLGFBQWE7RUEyTmpDO0FBQ0Y7QUFDQTtFQUVFNUksWUFBWSxDQUFDK0MsRUFBRSxDQUFDbE4sUUFBUSxFQUFFaXFDLHNCQUFzQixFQUFFUSxzQkFBc0IsRUFBRSxVQUFVMWdDLEtBQUssRUFBRTtJQUFBLElBQUE4aUMsT0FBQTtJQUN6RixJQUFNemtDLE1BQU0sR0FBR2lNLGNBQWMsQ0FBQ3FCLHNCQUFzQixDQUFDLElBQUksQ0FBQztJQUMxRCxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDekksUUFBUSxDQUFDLElBQUksQ0FBQytJLE9BQU8sQ0FBQyxFQUFFO01BQ3hDak0sS0FBSyxDQUFDNkUsY0FBYyxFQUFFO0lBQ3hCO0lBQ0F6RSxZQUFZLENBQUNnRCxHQUFHLENBQUMvRSxNQUFNLEVBQUV1aEMsWUFBWSxFQUFFLFVBQUFsSCxTQUFTLEVBQUk7TUFDbEQsSUFBSUEsU0FBUyxDQUFDbjBCLGdCQUFnQixFQUFFO1FBQzlCO1FBQ0E7TUFDRjtNQUNBbkUsWUFBWSxDQUFDZ0QsR0FBRyxDQUFDL0UsTUFBTSxFQUFFc2hDLGNBQWMsRUFBRSxZQUFNO1FBQzdDLElBQUlubEMsU0FBUyxDQUFDc29DLE9BQUksQ0FBQyxFQUFFO1VBQ25CQSxPQUFJLENBQUMvSixLQUFLLEVBQUU7UUFDZDtNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQU1nSyxXQUFXLEdBQUd6NEIsY0FBYyxDQUFDRyxPQUFPLENBQUM4MUIsZUFBZSxDQUFDO0lBQzNELElBQUl3QyxXQUFXLEVBQUU7TUFDZmxDLEtBQUssQ0FBQzcyQixXQUFXLENBQUMrNEIsV0FBVyxDQUFDLENBQUN2cEIsSUFBSSxFQUFFO0lBQ3ZDO0lBQ0EsSUFBTXZNLElBQUksR0FBRzR6QixLQUFLLENBQUM1MkIsbUJBQW1CLENBQUM1TCxNQUFNLENBQUM7SUFDOUM0TyxJQUFJLENBQUNXLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFDbkIsQ0FBQyxDQUFDO0VBQ0YvQixvQkFBb0IsQ0FBQ2cxQixLQUFLLENBQUM7O0VBRTNCO0FBQ0Y7QUFDQTs7RUFFRS9qQyxrQkFBa0IsQ0FBQytqQyxLQUFLLENBQUM7O0VBRXpCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsSUFBTW1DLE1BQU0sR0FBRyxXQUFXO0VBQzFCLElBQU1DLFVBQVUsR0FBRyxjQUFjO0VBQ2pDLElBQU1DLFdBQVcsT0FBQWxzQyxNQUFBLENBQU9pc0MsVUFBVSxDQUFFO0VBQ3BDLElBQU1FLGNBQWMsR0FBRyxXQUFXO0VBQ2xDLElBQU1DLHFCQUFxQixVQUFBcHNDLE1BQUEsQ0FBVWtzQyxXQUFXLEVBQUFsc0MsTUFBQSxDQUFHbXNDLGNBQWMsQ0FBRTtFQUNuRSxJQUFNRSxVQUFVLEdBQUcsUUFBUTtFQUMzQixJQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0VBQ2hDLElBQU1DLG9CQUFvQixHQUFHLFNBQVM7RUFDdEMsSUFBTUMsaUJBQWlCLEdBQUcsUUFBUTtFQUNsQyxJQUFNQyxtQkFBbUIsR0FBRyxvQkFBb0I7RUFDaEQsSUFBTUMsYUFBYSxHQUFHLGlCQUFpQjtFQUN2QyxJQUFNQyxZQUFZLFVBQUEzc0MsTUFBQSxDQUFVa3NDLFdBQVcsQ0FBRTtFQUN6QyxJQUFNVSxhQUFhLFdBQUE1c0MsTUFBQSxDQUFXa3NDLFdBQVcsQ0FBRTtFQUMzQyxJQUFNVyxZQUFZLFVBQUE3c0MsTUFBQSxDQUFVa3NDLFdBQVcsQ0FBRTtFQUN6QyxJQUFNWSxvQkFBb0IsbUJBQUE5c0MsTUFBQSxDQUFtQmtzQyxXQUFXLENBQUU7RUFDMUQsSUFBTWEsY0FBYyxZQUFBL3NDLE1BQUEsQ0FBWWtzQyxXQUFXLENBQUU7RUFDN0MsSUFBTWMsWUFBWSxZQUFBaHRDLE1BQUEsQ0FBWWtzQyxXQUFXLENBQUU7RUFDM0MsSUFBTWUsc0JBQXNCLFdBQUFqdEMsTUFBQSxDQUFXa3NDLFdBQVcsRUFBQWxzQyxNQUFBLENBQUdtc0MsY0FBYyxDQUFFO0VBQ3JFLElBQU1lLHFCQUFxQixxQkFBQWx0QyxNQUFBLENBQXFCa3NDLFdBQVcsQ0FBRTtFQUM3RCxJQUFNaUIsc0JBQXNCLEdBQUcsOEJBQThCO0VBQzdELElBQU1DLFNBQVMsR0FBRztJQUNoQjVHLFFBQVEsRUFBRSxJQUFJO0lBQ2Q3cUIsUUFBUSxFQUFFLElBQUk7SUFDZDhULE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDRCxJQUFNNGQsYUFBYSxHQUFHO0lBQ3BCN0csUUFBUSxFQUFFLGtCQUFrQjtJQUM1QjdxQixRQUFRLEVBQUUsU0FBUztJQUNuQjhULE1BQU0sRUFBRTtFQUNWLENBQUM7O0VBRUQ7QUFDRjtBQUNBO0VBRkUsSUFJTTZkLFNBQVMsMEJBQUFDLGVBQUE7SUFBQXh2QyxTQUFBLENBQUF1dkMsU0FBQSxFQUFBQyxlQUFBO0lBQUEsSUFBQUMsUUFBQSxHQUFBdnZDLFlBQUEsQ0FBQXF2QyxTQUFBO0lBQ2IsU0FBQUEsVUFBWTd1QyxPQUFPLEVBQUVpUyxNQUFNLEVBQUU7TUFBQSxJQUFBKzhCLE9BQUE7TUFBQXZ2QyxlQUFBLE9BQUFvdkMsU0FBQTtNQUMzQkcsT0FBQSxHQUFBRCxRQUFBLENBQUExckMsSUFBQSxPQUFNckQsT0FBTyxFQUFFaVMsTUFBTTtNQUNyQis4QixPQUFBLENBQUtsckIsUUFBUSxHQUFHLEtBQUs7TUFDckJrckIsT0FBQSxDQUFLdkQsU0FBUyxHQUFHdUQsT0FBQSxDQUFLdEQsbUJBQW1CLEVBQUU7TUFDM0NzRCxPQUFBLENBQUtyRCxVQUFVLEdBQUdxRCxPQUFBLENBQUtwRCxvQkFBb0IsRUFBRTtNQUM3Q29ELE9BQUEsQ0FBSzl3QixrQkFBa0IsRUFBRTtNQUFDLE9BQUE4d0IsT0FBQTtJQUM1Qjs7SUFFQTtJQUFBcHZDLFlBQUEsQ0FBQWl2QyxTQUFBO01BQUFodkMsR0FBQTtNQUFBQyxLQUFBO01BV0E7TUFDQSxTQUFBcVksT0FBT3ZMLGFBQWEsRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQ2tYLFFBQVEsR0FBRyxJQUFJLENBQUNDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQ0MsSUFBSSxDQUFDcFgsYUFBYSxDQUFDO01BQy9EO0lBQUM7TUFBQS9NLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFra0IsS0FBS3BYLGFBQWEsRUFBRTtRQUFBLElBQUFxaUMsT0FBQTtRQUNsQixJQUFJLElBQUksQ0FBQ25yQixRQUFRLEVBQUU7VUFDakI7UUFDRjtRQUNBLElBQU1tZixTQUFTLEdBQUd0NEIsWUFBWSxDQUFDK0QsT0FBTyxDQUFDLElBQUksQ0FBQ2lGLFFBQVEsRUFBRXU2QixZQUFZLEVBQUU7VUFDbEV0aEMsYUFBYSxFQUFiQTtRQUNGLENBQUMsQ0FBQztRQUNGLElBQUlxMkIsU0FBUyxDQUFDbjBCLGdCQUFnQixFQUFFO1VBQzlCO1FBQ0Y7UUFDQSxJQUFJLENBQUNnVixRQUFRLEdBQUcsSUFBSTtRQUNwQixJQUFJLENBQUMybkIsU0FBUyxDQUFDem5CLElBQUksRUFBRTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDcFEsT0FBTyxDQUFDb2QsTUFBTSxFQUFFO1VBQ3hCLElBQUl1VSxlQUFlLEVBQUUsQ0FBQ3hoQixJQUFJLEVBQUU7UUFDOUI7UUFDQSxJQUFJLENBQUNwUSxRQUFRLENBQUN6QyxZQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztRQUM5QyxJQUFJLENBQUN5QyxRQUFRLENBQUN6QyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUN5QyxRQUFRLENBQUNqTyxTQUFTLENBQUMrVSxHQUFHLENBQUNxekIsb0JBQW9CLENBQUM7UUFDakQsSUFBTTVzQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBLEVBQVM7VUFDN0IsSUFBSSxDQUFDK3RCLE9BQUksQ0FBQ3I3QixPQUFPLENBQUNvZCxNQUFNLElBQUlpZSxPQUFJLENBQUNyN0IsT0FBTyxDQUFDbTBCLFFBQVEsRUFBRTtZQUNqRGtILE9BQUksQ0FBQ3RELFVBQVUsQ0FBQ3RDLFFBQVEsRUFBRTtVQUM1QjtVQUNBNEYsT0FBSSxDQUFDdDdCLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQ296QixpQkFBaUIsQ0FBQztVQUM5Q29CLE9BQUksQ0FBQ3Q3QixRQUFRLENBQUNqTyxTQUFTLENBQUMrSyxNQUFNLENBQUNxOUIsb0JBQW9CLENBQUM7VUFDcERuakMsWUFBWSxDQUFDK0QsT0FBTyxDQUFDdWdDLE9BQUksQ0FBQ3Q3QixRQUFRLEVBQUV3NkIsYUFBYSxFQUFFO1lBQ2pEdmhDLGFBQWEsRUFBYkE7VUFDRixDQUFDLENBQUM7UUFDSixDQUFDO1FBQ0QsSUFBSSxDQUFDeUgsY0FBYyxDQUFDNk0sZ0JBQWdCLEVBQUUsSUFBSSxDQUFDdk4sUUFBUSxFQUFFLElBQUksQ0FBQztNQUM1RDtJQUFDO01BQUE5VCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBaWtCLEtBQUEsRUFBTztRQUFBLElBQUFtckIsT0FBQTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUNwckIsUUFBUSxFQUFFO1VBQ2xCO1FBQ0Y7UUFDQSxJQUFNMGYsU0FBUyxHQUFHNzRCLFlBQVksQ0FBQytELE9BQU8sQ0FBQyxJQUFJLENBQUNpRixRQUFRLEVBQUV5NkIsWUFBWSxDQUFDO1FBQ25FLElBQUk1SyxTQUFTLENBQUMxMEIsZ0JBQWdCLEVBQUU7VUFDOUI7UUFDRjtRQUNBLElBQUksQ0FBQzY4QixVQUFVLENBQUNsQyxVQUFVLEVBQUU7UUFDNUIsSUFBSSxDQUFDOTFCLFFBQVEsQ0FBQ3c3QixJQUFJLEVBQUU7UUFDcEIsSUFBSSxDQUFDcnJCLFFBQVEsR0FBRyxLQUFLO1FBQ3JCLElBQUksQ0FBQ25RLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQ3N6QixpQkFBaUIsQ0FBQztRQUM5QyxJQUFJLENBQUN0QyxTQUFTLENBQUMxbkIsSUFBSSxFQUFFO1FBQ3JCLElBQU1xckIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFTO1VBQzdCRixPQUFJLENBQUN2N0IsUUFBUSxDQUFDak8sU0FBUyxDQUFDK0ssTUFBTSxDQUFDbzlCLGlCQUFpQixFQUFFRSxpQkFBaUIsQ0FBQztVQUNwRW1CLE9BQUksQ0FBQ3Y3QixRQUFRLENBQUN2QyxlQUFlLENBQUMsWUFBWSxDQUFDO1VBQzNDODlCLE9BQUksQ0FBQ3Y3QixRQUFRLENBQUN2QyxlQUFlLENBQUMsTUFBTSxDQUFDO1VBQ3JDLElBQUksQ0FBQzg5QixPQUFJLENBQUN0N0IsT0FBTyxDQUFDb2QsTUFBTSxFQUFFO1lBQ3hCLElBQUl1VSxlQUFlLEVBQUUsQ0FBQ2xOLEtBQUssRUFBRTtVQUMvQjtVQUNBMXRCLFlBQVksQ0FBQytELE9BQU8sQ0FBQ3dnQyxPQUFJLENBQUN2N0IsUUFBUSxFQUFFMjZCLGNBQWMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsSUFBSSxDQUFDajZCLGNBQWMsQ0FBQys2QixnQkFBZ0IsRUFBRSxJQUFJLENBQUN6N0IsUUFBUSxFQUFFLElBQUksQ0FBQztNQUM1RDtJQUFDO01BQUE5VCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBaVUsUUFBQSxFQUFVO1FBQ1IsSUFBSSxDQUFDMDNCLFNBQVMsQ0FBQzEzQixPQUFPLEVBQUU7UUFDeEIsSUFBSSxDQUFDNDNCLFVBQVUsQ0FBQ2xDLFVBQVUsRUFBRTtRQUM1QnBxQixJQUFBLENBQUFDLGVBQUEsQ0FBQXV2QixTQUFBLENBQUExckMsU0FBQSxvQkFBQUUsSUFBQTtNQUNGOztNQUVBO0lBQUE7TUFBQXhELEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUE0ckMsb0JBQUEsRUFBc0I7UUFBQSxJQUFBMkQsT0FBQTtRQUNwQixJQUFNbEksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7VUFDMUIsSUFBSWtJLE9BQUksQ0FBQ3o3QixPQUFPLENBQUNtMEIsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUN0Q3A5QixZQUFZLENBQUMrRCxPQUFPLENBQUMyZ0MsT0FBSSxDQUFDMTdCLFFBQVEsRUFBRTA2QixvQkFBb0IsQ0FBQztZQUN6RDtVQUNGO1VBQ0FnQixPQUFJLENBQUN0ckIsSUFBSSxFQUFFO1FBQ2IsQ0FBQzs7UUFFRDtRQUNBLElBQU1oZixTQUFTLEdBQUdpSSxPQUFPLENBQUMsSUFBSSxDQUFDNEcsT0FBTyxDQUFDbTBCLFFBQVEsQ0FBQztRQUNoRCxPQUFPLElBQUlULFFBQVEsQ0FBQztVQUNsQkosU0FBUyxFQUFFOEcsbUJBQW1CO1VBQzlCanBDLFNBQVMsRUFBVEEsU0FBUztVQUNUdVAsVUFBVSxFQUFFLElBQUk7VUFDaEI4eUIsV0FBVyxFQUFFLElBQUksQ0FBQ3p6QixRQUFRLENBQUNyTyxVQUFVO1VBQ3JDNmhDLGFBQWEsRUFBRXBpQyxTQUFTLEdBQUdvaUMsYUFBYSxHQUFHO1FBQzdDLENBQUMsQ0FBQztNQUNKO0lBQUM7TUFBQXRuQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBOHJDLHFCQUFBLEVBQXVCO1FBQ3JCLE9BQU8sSUFBSTdDLFNBQVMsQ0FBQztVQUNuQkYsV0FBVyxFQUFFLElBQUksQ0FBQ2wxQjtRQUNwQixDQUFDLENBQUM7TUFDSjtJQUFDO01BQUE5VCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBb2UsbUJBQUEsRUFBcUI7UUFBQSxJQUFBb3hCLE9BQUE7UUFDbkIza0MsWUFBWSxDQUFDK0MsRUFBRSxDQUFDLElBQUksQ0FBQ2lHLFFBQVEsRUFBRTg2QixxQkFBcUIsRUFBRSxVQUFBbGtDLEtBQUssRUFBSTtVQUM3RCxJQUFJQSxLQUFLLENBQUMxSyxHQUFHLEtBQUsrdEMsVUFBVSxFQUFFO1lBQzVCO1VBQ0Y7VUFDQSxJQUFJMEIsT0FBSSxDQUFDMTdCLE9BQU8sQ0FBQ3NKLFFBQVEsRUFBRTtZQUN6Qm95QixPQUFJLENBQUN2ckIsSUFBSSxFQUFFO1lBQ1g7VUFDRjtVQUNBcFosWUFBWSxDQUFDK0QsT0FBTyxDQUFDNGdDLE9BQUksQ0FBQzM3QixRQUFRLEVBQUUwNkIsb0JBQW9CLENBQUM7UUFDM0QsQ0FBQyxDQUFDO01BQ0o7O01BRUE7SUFBQTtNQUFBeHVDLEdBQUE7TUFBQWlRLEdBQUEsRUFoSEEsU0FBQUEsSUFBQSxFQUFxQjtRQUNuQixPQUFPNitCLFNBQVM7TUFDbEI7SUFBQztNQUFBOXVDLEdBQUE7TUFBQWlRLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQXlCO1FBQ3ZCLE9BQU84K0IsYUFBYTtNQUN0QjtJQUFDO01BQUEvdUMsR0FBQTtNQUFBaVEsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBa0I7UUFDaEIsT0FBT3k5QixNQUFNO01BQ2Y7SUFBQztNQUFBMXRDLEdBQUE7TUFBQUMsS0FBQSxFQXlHRCxTQUFBOEgsZ0JBQXVCcUssTUFBTSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxDQUFDc0YsSUFBSSxDQUFDLFlBQVk7VUFDM0IsSUFBTUMsSUFBSSxHQUFHcTNCLFNBQVMsQ0FBQ3I2QixtQkFBbUIsQ0FBQyxJQUFJLEVBQUV2QyxNQUFNLENBQUM7VUFDeEQsSUFBSSxPQUFPQSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCO1VBQ0Y7VUFDQSxJQUFJdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLEtBQUtoUCxTQUFTLElBQUlnUCxNQUFNLENBQUNqRSxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUlpRSxNQUFNLEtBQUssYUFBYSxFQUFFO1lBQ3BGLE1BQU0sSUFBSWtCLFNBQVMsc0JBQUE1UixNQUFBLENBQXFCMFEsTUFBTSxRQUFJO1VBQ3BEO1VBQ0F1RixJQUFJLENBQUN2RixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDcEIsQ0FBQyxDQUFDO01BQ0o7SUFBQztJQUFBLE9BQUE0OEIsU0FBQTtFQUFBLEVBdElxQnQ3QixhQUFhO0VBeUlyQztBQUNGO0FBQ0E7RUFFRTVJLFlBQVksQ0FBQytDLEVBQUUsQ0FBQ2xOLFFBQVEsRUFBRWd1QyxzQkFBc0IsRUFBRUUsc0JBQXNCLEVBQUUsVUFBVW5rQyxLQUFLLEVBQUU7SUFBQSxJQUFBZ2xDLE9BQUE7SUFDekYsSUFBTTNtQyxNQUFNLEdBQUdpTSxjQUFjLENBQUNxQixzQkFBc0IsQ0FBQyxJQUFJLENBQUM7SUFDMUQsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQ3pJLFFBQVEsQ0FBQyxJQUFJLENBQUMrSSxPQUFPLENBQUMsRUFBRTtNQUN4Q2pNLEtBQUssQ0FBQzZFLGNBQWMsRUFBRTtJQUN4QjtJQUNBLElBQUk3SixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDcEI7SUFDRjtJQUNBb0YsWUFBWSxDQUFDZ0QsR0FBRyxDQUFDL0UsTUFBTSxFQUFFMGxDLGNBQWMsRUFBRSxZQUFNO01BQzdDO01BQ0EsSUFBSXZwQyxTQUFTLENBQUN3cUMsT0FBSSxDQUFDLEVBQUU7UUFDbkJBLE9BQUksQ0FBQ2pNLEtBQUssRUFBRTtNQUNkO0lBQ0YsQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBTWdLLFdBQVcsR0FBR3o0QixjQUFjLENBQUNHLE9BQU8sQ0FBQ2k1QixhQUFhLENBQUM7SUFDekQsSUFBSVgsV0FBVyxJQUFJQSxXQUFXLEtBQUsxa0MsTUFBTSxFQUFFO01BQ3pDaW1DLFNBQVMsQ0FBQ3Q2QixXQUFXLENBQUMrNEIsV0FBVyxDQUFDLENBQUN2cEIsSUFBSSxFQUFFO0lBQzNDO0lBQ0EsSUFBTXZNLElBQUksR0FBR3EzQixTQUFTLENBQUNyNkIsbUJBQW1CLENBQUM1TCxNQUFNLENBQUM7SUFDbEQ0TyxJQUFJLENBQUNXLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFDbkIsQ0FBQyxDQUFDO0VBQ0Z4TixZQUFZLENBQUMrQyxFQUFFLENBQUNqTCxNQUFNLEVBQUVrckMscUJBQXFCLEVBQUUsWUFBTTtJQUFBLElBQUE2QixXQUFBLEdBQUF2a0MsMEJBQUEsQ0FDNUI0SixjQUFjLENBQUM5SSxJQUFJLENBQUNraUMsYUFBYSxDQUFDO01BQUF3QixPQUFBO0lBQUE7TUFBekQsS0FBQUQsV0FBQSxDQUFBcmtDLENBQUEsTUFBQXNrQyxPQUFBLEdBQUFELFdBQUEsQ0FBQXBrQyxDQUFBLElBQUFDLElBQUEsR0FBMkQ7UUFBQSxJQUFoRDdJLFFBQVEsR0FBQWl0QyxPQUFBLENBQUEzdkMsS0FBQTtRQUNqQit1QyxTQUFTLENBQUNyNkIsbUJBQW1CLENBQUNoUyxRQUFRLENBQUMsQ0FBQ3doQixJQUFJLEVBQUU7TUFDaEQ7SUFBQyxTQUFBelksR0FBQTtNQUFBaWtDLFdBQUEsQ0FBQWhrQyxDQUFBLENBQUFELEdBQUE7SUFBQTtNQUFBaWtDLFdBQUEsQ0FBQS9qQyxDQUFBO0lBQUE7RUFDSCxDQUFDLENBQUM7RUFDRmQsWUFBWSxDQUFDK0MsRUFBRSxDQUFDakwsTUFBTSxFQUFFOHJDLFlBQVksRUFBRSxZQUFNO0lBQUEsSUFBQW1CLFdBQUEsR0FBQXprQywwQkFBQSxDQUNwQjRKLGNBQWMsQ0FBQzlJLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQztNQUFBNGpDLE9BQUE7SUFBQTtNQUF6RixLQUFBRCxXQUFBLENBQUF2a0MsQ0FBQSxNQUFBd2tDLE9BQUEsR0FBQUQsV0FBQSxDQUFBdGtDLENBQUEsSUFBQUMsSUFBQSxHQUEyRjtRQUFBLElBQWhGckwsT0FBTyxHQUFBMnZDLE9BQUEsQ0FBQTd2QyxLQUFBO1FBQ2hCLElBQUlpRSxnQkFBZ0IsQ0FBQy9ELE9BQU8sQ0FBQyxDQUFDd29CLFFBQVEsS0FBSyxPQUFPLEVBQUU7VUFDbERxbUIsU0FBUyxDQUFDcjZCLG1CQUFtQixDQUFDeFUsT0FBTyxDQUFDLENBQUMrakIsSUFBSSxFQUFFO1FBQy9DO01BQ0Y7SUFBQyxTQUFBeFksR0FBQTtNQUFBbWtDLFdBQUEsQ0FBQWxrQyxDQUFBLENBQUFELEdBQUE7SUFBQTtNQUFBbWtDLFdBQUEsQ0FBQWprQyxDQUFBO0lBQUE7RUFDSCxDQUFDLENBQUM7RUFDRjJLLG9CQUFvQixDQUFDeTRCLFNBQVMsQ0FBQzs7RUFFL0I7QUFDRjtBQUNBOztFQUVFeG5DLGtCQUFrQixDQUFDd25DLFNBQVMsQ0FBQzs7RUFFN0I7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFLElBQU1lLGFBQWEsR0FBRyxJQUFJMWxDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztFQUNwSCxJQUFNMmxDLHNCQUFzQixHQUFHLGdCQUFnQjs7RUFFL0M7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUNFLElBQU1DLGdCQUFnQixHQUFHLGdFQUFnRTs7RUFFekY7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUNFLElBQU1DLGdCQUFnQixHQUFHLG9JQUFvSTtFQUM3SixJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJam5CLFNBQVMsRUFBRWtuQixvQkFBb0IsRUFBSztJQUM1RCxJQUFNQyxhQUFhLEdBQUdubkIsU0FBUyxDQUFDMUIsUUFBUSxDQUFDL2pCLFdBQVcsRUFBRTtJQUN0RCxJQUFJMnNDLG9CQUFvQixDQUFDeGlDLFFBQVEsQ0FBQ3lpQyxhQUFhLENBQUMsRUFBRTtNQUNoRCxJQUFJTixhQUFhLENBQUN0akMsR0FBRyxDQUFDNGpDLGFBQWEsQ0FBQyxFQUFFO1FBQ3BDLE9BQU9sakMsT0FBTyxDQUFDOGlDLGdCQUFnQixDQUFDNThCLElBQUksQ0FBQzZWLFNBQVMsQ0FBQ29uQixTQUFTLENBQUMsSUFBSUosZ0JBQWdCLENBQUM3OEIsSUFBSSxDQUFDNlYsU0FBUyxDQUFDb25CLFNBQVMsQ0FBQyxDQUFDO01BQzFHO01BQ0EsT0FBTyxJQUFJO0lBQ2I7O0lBRUE7SUFDQSxPQUFPRixvQkFBb0IsQ0FBQ3grQixNQUFNLENBQUMsVUFBQTIrQixjQUFjO01BQUEsT0FBSUEsY0FBYyxZQUFZbjlCLE1BQU07SUFBQSxFQUFDLENBQUN5bEIsSUFBSSxDQUFDLFVBQUEyWCxLQUFLO01BQUEsT0FBSUEsS0FBSyxDQUFDbjlCLElBQUksQ0FBQ2c5QixhQUFhLENBQUM7SUFBQSxFQUFDO0VBQ2pJLENBQUM7RUFDRCxJQUFNSSxnQkFBZ0IsR0FBRztJQUN2QjtJQUNBLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUVULHNCQUFzQixDQUFDO0lBQ25FelosQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQ3JDbWEsSUFBSSxFQUFFLEVBQUU7SUFDUmxhLENBQUMsRUFBRSxFQUFFO0lBQ0xtYSxFQUFFLEVBQUUsRUFBRTtJQUNOQyxHQUFHLEVBQUUsRUFBRTtJQUNQQyxJQUFJLEVBQUUsRUFBRTtJQUNSQyxHQUFHLEVBQUUsRUFBRTtJQUNQQyxFQUFFLEVBQUUsRUFBRTtJQUNOQyxFQUFFLEVBQUUsRUFBRTtJQUNOQyxFQUFFLEVBQUUsRUFBRTtJQUNOQyxFQUFFLEVBQUUsRUFBRTtJQUNOQyxFQUFFLEVBQUUsRUFBRTtJQUNOQyxFQUFFLEVBQUUsRUFBRTtJQUNOQyxFQUFFLEVBQUUsRUFBRTtJQUNOQyxFQUFFLEVBQUUsRUFBRTtJQUNOM1osQ0FBQyxFQUFFLEVBQUU7SUFDTDFYLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3pEc3hCLEVBQUUsRUFBRSxFQUFFO0lBQ05DLEVBQUUsRUFBRSxFQUFFO0lBQ05DLENBQUMsRUFBRSxFQUFFO0lBQ0xDLEdBQUcsRUFBRSxFQUFFO0lBQ1BwbUMsQ0FBQyxFQUFFLEVBQUU7SUFDTHFtQyxLQUFLLEVBQUUsRUFBRTtJQUNUQyxJQUFJLEVBQUUsRUFBRTtJQUNSQyxHQUFHLEVBQUUsRUFBRTtJQUNQQyxHQUFHLEVBQUUsRUFBRTtJQUNQQyxNQUFNLEVBQUUsRUFBRTtJQUNWQyxDQUFDLEVBQUUsRUFBRTtJQUNMQyxFQUFFLEVBQUU7RUFDTixDQUFDO0VBQ0QsU0FBU0MsWUFBWUEsQ0FBQ0MsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLGdCQUFnQixFQUFFO0lBQUEsSUFBQUMsTUFBQTtJQUM3RCxJQUFJLENBQUNILFVBQVUsQ0FBQ2x4QyxNQUFNLEVBQUU7TUFDdEIsT0FBT2t4QyxVQUFVO0lBQ25CO0lBQ0EsSUFBSUUsZ0JBQWdCLElBQUksT0FBT0EsZ0JBQWdCLEtBQUssVUFBVSxFQUFFO01BQzlELE9BQU9BLGdCQUFnQixDQUFDRixVQUFVLENBQUM7SUFDckM7SUFDQSxJQUFNSSxTQUFTLEdBQUcsSUFBSTN2QyxNQUFNLENBQUM0dkMsU0FBUyxFQUFFO0lBQ3hDLElBQU1DLGVBQWUsR0FBR0YsU0FBUyxDQUFDRyxlQUFlLENBQUNQLFVBQVUsRUFBRSxXQUFXLENBQUM7SUFDMUUsSUFBTTlwQixRQUFRLEdBQUcsQ0FBQWlxQixNQUFBLEtBQUUsRUFBQzV3QyxNQUFNLENBQUE3QixLQUFBLENBQUF5eUMsTUFBQSxFQUFBaHFDLGtCQUFBLENBQUltcUMsZUFBZSxDQUFDNXJDLElBQUksQ0FBQ2pHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFDO0lBQUMsSUFBQSt4QyxXQUFBLEdBQUF2bkMsMEJBQUEsQ0FDcERpZCxRQUFRO01BQUF1cUIsT0FBQTtJQUFBO01BQTlCLEtBQUFELFdBQUEsQ0FBQXJuQyxDQUFBLE1BQUFzbkMsT0FBQSxHQUFBRCxXQUFBLENBQUFwbkMsQ0FBQSxJQUFBQyxJQUFBLEdBQWdDO1FBQUEsSUFBQXFuQyxNQUFBO1FBQUEsSUFBckIxeUMsT0FBTyxHQUFBeXlDLE9BQUEsQ0FBQTN5QyxLQUFBO1FBQ2hCLElBQU02eUMsV0FBVyxHQUFHM3lDLE9BQU8sQ0FBQ3FuQixRQUFRLENBQUMvakIsV0FBVyxFQUFFO1FBQ2xELElBQUksQ0FBQ0osTUFBTSxDQUFDK0ssSUFBSSxDQUFDZ2tDLFNBQVMsQ0FBQyxDQUFDeGtDLFFBQVEsQ0FBQ2tsQyxXQUFXLENBQUMsRUFBRTtVQUNqRDN5QyxPQUFPLENBQUN5USxNQUFNLEVBQUU7VUFDaEI7UUFDRjtRQUNBLElBQU1taUMsYUFBYSxHQUFHLENBQUFGLE1BQUEsS0FBRSxFQUFDbnhDLE1BQU0sQ0FBQTdCLEtBQUEsQ0FBQWd6QyxNQUFBLEVBQUF2cUMsa0JBQUEsQ0FBSW5JLE9BQU8sQ0FBQ3NSLFVBQVUsRUFBQztRQUN0RCxJQUFNdWhDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQ3R4QyxNQUFNLENBQUMwd0MsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRUEsU0FBUyxDQUFDVSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFBQyxJQUFBRyxXQUFBLEdBQUE3bkMsMEJBQUEsQ0FDaEUybkMsYUFBYTtVQUFBRyxPQUFBO1FBQUE7VUFBckMsS0FBQUQsV0FBQSxDQUFBM25DLENBQUEsTUFBQTRuQyxPQUFBLEdBQUFELFdBQUEsQ0FBQTFuQyxDQUFBLElBQUFDLElBQUEsR0FBdUM7WUFBQSxJQUE1QjBkLFNBQVMsR0FBQWdxQixPQUFBLENBQUFqekMsS0FBQTtZQUNsQixJQUFJLENBQUNrd0MsZ0JBQWdCLENBQUNqbkIsU0FBUyxFQUFFOHBCLGlCQUFpQixDQUFDLEVBQUU7Y0FDbkQ3eUMsT0FBTyxDQUFDb1IsZUFBZSxDQUFDMlgsU0FBUyxDQUFDMUIsUUFBUSxDQUFDO1lBQzdDO1VBQ0Y7UUFBQyxTQUFBOWIsR0FBQTtVQUFBdW5DLFdBQUEsQ0FBQXRuQyxDQUFBLENBQUFELEdBQUE7UUFBQTtVQUFBdW5DLFdBQUEsQ0FBQXJuQyxDQUFBO1FBQUE7TUFDSDtJQUFDLFNBQUFGLEdBQUE7TUFBQWluQyxXQUFBLENBQUFobkMsQ0FBQSxDQUFBRCxHQUFBO0lBQUE7TUFBQWluQyxXQUFBLENBQUEvbUMsQ0FBQTtJQUFBO0lBQ0QsT0FBTzZtQyxlQUFlLENBQUM1ckMsSUFBSSxDQUFDc3NDLFNBQVM7RUFDdkM7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRSxJQUFNQyxNQUFNLEdBQUcsaUJBQWlCO0VBQ2hDLElBQU1DLFNBQVMsR0FBRztJQUNoQmpCLFNBQVMsRUFBRTNCLGdCQUFnQjtJQUMzQjZDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDWDtJQUNBQyxVQUFVLEVBQUUsRUFBRTtJQUNkamhCLElBQUksRUFBRSxLQUFLO0lBQ1hraEIsUUFBUSxFQUFFLElBQUk7SUFDZEMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDRCxJQUFNQyxhQUFhLEdBQUc7SUFDcEJ2QixTQUFTLEVBQUUsUUFBUTtJQUNuQmtCLE9BQU8sRUFBRSxRQUFRO0lBQ2pCQyxVQUFVLEVBQUUsbUJBQW1CO0lBQy9CamhCLElBQUksRUFBRSxTQUFTO0lBQ2ZraEIsUUFBUSxFQUFFLFNBQVM7SUFDbkJDLFVBQVUsRUFBRSxpQkFBaUI7SUFDN0JDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDRCxJQUFNRSxrQkFBa0IsR0FBRztJQUN6QkMsS0FBSyxFQUFFLGdDQUFnQztJQUN2Q2x4QyxRQUFRLEVBQUU7RUFDWixDQUFDOztFQUVEO0FBQ0Y7QUFDQTtFQUZFLElBSU1teEMsZUFBZSwwQkFBQUMsUUFBQTtJQUFBdDBDLFNBQUEsQ0FBQXEwQyxlQUFBLEVBQUFDLFFBQUE7SUFBQSxJQUFBQyxRQUFBLEdBQUFyMEMsWUFBQSxDQUFBbTBDLGVBQUE7SUFDbkIsU0FBQUEsZ0JBQVkxaEMsTUFBTSxFQUFFO01BQUEsSUFBQTZoQyxPQUFBO01BQUFyMEMsZUFBQSxPQUFBazBDLGVBQUE7TUFDbEJHLE9BQUEsR0FBQUQsUUFBQSxDQUFBeHdDLElBQUE7TUFDQXl3QyxPQUFBLENBQUtsZ0MsT0FBTyxHQUFHa2dDLE9BQUEsQ0FBSzloQyxVQUFVLENBQUNDLE1BQU0sQ0FBQztNQUFDLE9BQUE2aEMsT0FBQTtJQUN6Qzs7SUFFQTtJQUFBbDBDLFlBQUEsQ0FBQSt6QyxlQUFBO01BQUE5ekMsR0FBQTtNQUFBQyxLQUFBO01BV0E7TUFDQSxTQUFBaTBDLFdBQUEsRUFBYTtRQUFBLElBQUFDLE9BQUE7UUFDWCxPQUFPOXdDLE1BQU0sQ0FBQzRJLE1BQU0sQ0FBQyxJQUFJLENBQUM4SCxPQUFPLENBQUN1L0IsT0FBTyxDQUFDLENBQUNyOUIsR0FBRyxDQUFDLFVBQUE3RCxNQUFNO1VBQUEsT0FBSStoQyxPQUFJLENBQUNDLHdCQUF3QixDQUFDaGlDLE1BQU0sQ0FBQztRQUFBLEVBQUMsQ0FBQ1IsTUFBTSxDQUFDekUsT0FBTyxDQUFDO01BQ2pIO0lBQUM7TUFBQW5OLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFvMEMsV0FBQSxFQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNILFVBQVUsRUFBRSxDQUFDanpDLE1BQU0sR0FBRyxDQUFDO01BQ3JDO0lBQUM7TUFBQWpCLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFxMEMsY0FBY2hCLE9BQU8sRUFBRTtRQUNyQixJQUFJLENBQUNpQixhQUFhLENBQUNqQixPQUFPLENBQUM7UUFDM0IsSUFBSSxDQUFDdi9CLE9BQU8sQ0FBQ3UvQixPQUFPLEdBQUE3Z0MsYUFBQSxDQUFBQSxhQUFBLEtBQ2YsSUFBSSxDQUFDc0IsT0FBTyxDQUFDdS9CLE9BQU8sR0FDcEJBLE9BQU8sQ0FDWDtRQUNELE9BQU8sSUFBSTtNQUNiO0lBQUM7TUFBQXR6QyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBdTBDLE9BQUEsRUFBUztRQUNQLElBQU1DLGVBQWUsR0FBRzl6QyxRQUFRLENBQUN3bkMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNyRHNNLGVBQWUsQ0FBQ3RCLFNBQVMsR0FBRyxJQUFJLENBQUN1QixjQUFjLENBQUMsSUFBSSxDQUFDM2dDLE9BQU8sQ0FBQzIvQixRQUFRLENBQUM7UUFDdEUsU0FBQWlCLEdBQUEsTUFBQUMsZ0JBQUEsR0FBK0J2eEMsTUFBTSxDQUFDb0ssT0FBTyxDQUFDLElBQUksQ0FBQ3NHLE9BQU8sQ0FBQ3UvQixPQUFPLENBQUMsRUFBQXFCLEdBQUEsR0FBQUMsZ0JBQUEsQ0FBQTN6QyxNQUFBLEVBQUEwekMsR0FBQSxJQUFFO1VBQWhFLElBQUFFLG1CQUFBLEdBQUFob0MsY0FBQSxDQUFBK25DLGdCQUFBLENBQUFELEdBQUE7WUFBT2h5QyxRQUFRLEdBQUFreUMsbUJBQUE7WUFBRUMsSUFBSSxHQUFBRCxtQkFBQTtVQUN4QixJQUFJLENBQUNFLFdBQVcsQ0FBQ04sZUFBZSxFQUFFSyxJQUFJLEVBQUVueUMsUUFBUSxDQUFDO1FBQ25EO1FBQ0EsSUFBTSt3QyxRQUFRLEdBQUdlLGVBQWUsQ0FBQ3IvQixRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQU1tK0IsVUFBVSxHQUFHLElBQUksQ0FBQ2Esd0JBQXdCLENBQUMsSUFBSSxDQUFDcmdDLE9BQU8sQ0FBQ3cvQixVQUFVLENBQUM7UUFDekUsSUFBSUEsVUFBVSxFQUFFO1VBQUEsSUFBQXlCLG1CQUFBO1VBQ2QsQ0FBQUEsbUJBQUEsR0FBQXRCLFFBQVEsQ0FBQzd0QyxTQUFTLEVBQUMrVSxHQUFHLENBQUEvYSxLQUFBLENBQUFtMUMsbUJBQUEsRUFBQTFzQyxrQkFBQSxDQUFJaXJDLFVBQVUsQ0FBQzl1QyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUM7UUFDbEQ7UUFDQSxPQUFPaXZDLFFBQVE7TUFDakI7O01BRUE7SUFBQTtNQUFBMXpDLEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUFzUyxpQkFBaUJILE1BQU0sRUFBRTtRQUN2Qm9OLElBQUEsQ0FBQUMsZUFBQSxDQUFBcTBCLGVBQUEsQ0FBQXh3QyxTQUFBLDZCQUFBRSxJQUFBLE9BQXVCNE8sTUFBTTtRQUM3QixJQUFJLENBQUNtaUMsYUFBYSxDQUFDbmlDLE1BQU0sQ0FBQ2toQyxPQUFPLENBQUM7TUFDcEM7SUFBQztNQUFBdHpDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFzMEMsY0FBY1UsR0FBRyxFQUFFO1FBQ2pCLFNBQUFDLElBQUEsTUFBQUMsZ0JBQUEsR0FBa0M5eEMsTUFBTSxDQUFDb0ssT0FBTyxDQUFDd25DLEdBQUcsQ0FBQyxFQUFBQyxJQUFBLEdBQUFDLGdCQUFBLENBQUFsMEMsTUFBQSxFQUFBaTBDLElBQUEsSUFBRTtVQUFsRCxJQUFBRSxtQkFBQSxHQUFBdm9DLGNBQUEsQ0FBQXNvQyxnQkFBQSxDQUFBRCxJQUFBO1lBQU92eUMsUUFBUSxHQUFBeXlDLG1CQUFBO1lBQUU5QixPQUFPLEdBQUE4QixtQkFBQTtVQUMzQjUxQixJQUFBLENBQUFDLGVBQUEsQ0FBQXEwQixlQUFBLENBQUF4d0MsU0FBQSw2QkFBQUUsSUFBQSxPQUF1QjtZQUNyQmIsUUFBUSxFQUFSQSxRQUFRO1lBQ1JreEMsS0FBSyxFQUFFUDtVQUNULENBQUMsRUFBRU0sa0JBQWtCO1FBQ3ZCO01BQ0Y7SUFBQztNQUFBNXpDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUE4MEMsWUFBWXJCLFFBQVEsRUFBRUosT0FBTyxFQUFFM3dDLFFBQVEsRUFBRTtRQUN2QyxJQUFNMHlDLGVBQWUsR0FBR3JnQyxjQUFjLENBQUNHLE9BQU8sQ0FBQ3hTLFFBQVEsRUFBRSt3QyxRQUFRLENBQUM7UUFDbEUsSUFBSSxDQUFDMkIsZUFBZSxFQUFFO1VBQ3BCO1FBQ0Y7UUFDQS9CLE9BQU8sR0FBRyxJQUFJLENBQUNjLHdCQUF3QixDQUFDZCxPQUFPLENBQUM7UUFDaEQsSUFBSSxDQUFDQSxPQUFPLEVBQUU7VUFDWitCLGVBQWUsQ0FBQ3prQyxNQUFNLEVBQUU7VUFDeEI7UUFDRjtRQUNBLElBQUkvTCxXQUFXLENBQUN5dUMsT0FBTyxDQUFDLEVBQUU7VUFDeEIsSUFBSSxDQUFDZ0MscUJBQXFCLENBQUN0d0MsVUFBVSxDQUFDc3VDLE9BQU8sQ0FBQyxFQUFFK0IsZUFBZSxDQUFDO1VBQ2hFO1FBQ0Y7UUFDQSxJQUFJLElBQUksQ0FBQ3RoQyxPQUFPLENBQUN1ZSxJQUFJLEVBQUU7VUFDckIraUIsZUFBZSxDQUFDbEMsU0FBUyxHQUFHLElBQUksQ0FBQ3VCLGNBQWMsQ0FBQ3BCLE9BQU8sQ0FBQztVQUN4RDtRQUNGO1FBQ0ErQixlQUFlLENBQUNqMUMsV0FBVyxHQUFHa3pDLE9BQU87TUFDdkM7SUFBQztNQUFBdHpDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUF5MEMsZUFBZU8sR0FBRyxFQUFFO1FBQ2xCLE9BQU8sSUFBSSxDQUFDbGhDLE9BQU8sQ0FBQ3kvQixRQUFRLEdBQUd0QixZQUFZLENBQUMrQyxHQUFHLEVBQUUsSUFBSSxDQUFDbGhDLE9BQU8sQ0FBQ3ErQixTQUFTLEVBQUUsSUFBSSxDQUFDcitCLE9BQU8sQ0FBQzAvQixVQUFVLENBQUMsR0FBR3dCLEdBQUc7TUFDekc7SUFBQztNQUFBajFDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFtMEMseUJBQXlCYSxHQUFHLEVBQUU7UUFDNUIsT0FBTy9zQyxPQUFPLENBQUMrc0MsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDN0I7SUFBQztNQUFBajFDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFxMUMsc0JBQXNCbjFDLE9BQU8sRUFBRWsxQyxlQUFlLEVBQUU7UUFDOUMsSUFBSSxJQUFJLENBQUN0aEMsT0FBTyxDQUFDdWUsSUFBSSxFQUFFO1VBQ3JCK2lCLGVBQWUsQ0FBQ2xDLFNBQVMsR0FBRyxFQUFFO1VBQzlCa0MsZUFBZSxDQUFDaE4sTUFBTSxDQUFDbG9DLE9BQU8sQ0FBQztVQUMvQjtRQUNGO1FBQ0FrMUMsZUFBZSxDQUFDajFDLFdBQVcsR0FBR0QsT0FBTyxDQUFDQyxXQUFXO01BQ25EO0lBQUM7TUFBQUosR0FBQTtNQUFBaVEsR0FBQSxFQXJGRCxTQUFBQSxJQUFBLEVBQXFCO1FBQ25CLE9BQU9vakMsU0FBUztNQUNsQjtJQUFDO01BQUFyekMsR0FBQTtNQUFBaVEsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBeUI7UUFDdkIsT0FBTzBqQyxhQUFhO01BQ3RCO0lBQUM7TUFBQTN6QyxHQUFBO01BQUFpUSxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUFrQjtRQUNoQixPQUFPbWpDLE1BQU07TUFDZjtJQUFDO0lBQUEsT0FBQVUsZUFBQTtFQUFBLEVBZjJCNWhDLE1BQU07RUErRnBDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUVFO0FBQ0Y7QUFDQTtFQUVFLElBQU1xakMsTUFBTSxHQUFHLFNBQVM7RUFDeEIsSUFBTUMscUJBQXFCLEdBQUcsSUFBSW5yQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO0VBQzlFLElBQU1vckMsaUJBQWlCLEdBQUcsTUFBTTtFQUNoQyxJQUFNQyxnQkFBZ0IsR0FBRyxPQUFPO0VBQ2hDLElBQU1DLGlCQUFpQixHQUFHLE1BQU07RUFDaEMsSUFBTUMsc0JBQXNCLEdBQUcsZ0JBQWdCO0VBQy9DLElBQU1DLGNBQWMsT0FBQW4wQyxNQUFBLENBQU9nMEMsZ0JBQWdCLENBQUU7RUFDN0MsSUFBTUksZ0JBQWdCLEdBQUcsZUFBZTtFQUN4QyxJQUFNQyxhQUFhLEdBQUcsT0FBTztFQUM3QixJQUFNQyxhQUFhLEdBQUcsT0FBTztFQUM3QixJQUFNQyxhQUFhLEdBQUcsT0FBTztFQUM3QixJQUFNQyxjQUFjLEdBQUcsUUFBUTtFQUMvQixJQUFNQyxZQUFZLEdBQUcsTUFBTTtFQUMzQixJQUFNQyxjQUFjLEdBQUcsUUFBUTtFQUMvQixJQUFNQyxZQUFZLEdBQUcsTUFBTTtFQUMzQixJQUFNQyxhQUFhLEdBQUcsT0FBTztFQUM3QixJQUFNQyxjQUFjLEdBQUcsVUFBVTtFQUNqQyxJQUFNQyxhQUFhLEdBQUcsT0FBTztFQUM3QixJQUFNQyxlQUFlLEdBQUcsU0FBUztFQUNqQyxJQUFNQyxnQkFBZ0IsR0FBRyxVQUFVO0VBQ25DLElBQU1DLGdCQUFnQixHQUFHLFlBQVk7RUFDckMsSUFBTUMsZ0JBQWdCLEdBQUcsWUFBWTtFQUNyQyxJQUFNQyxhQUFhLEdBQUc7SUFDcEJDLElBQUksRUFBRSxNQUFNO0lBQ1pDLEdBQUcsRUFBRSxLQUFLO0lBQ1ZDLEtBQUssRUFBRTF2QyxLQUFLLEVBQUUsR0FBRyxNQUFNLEdBQUcsT0FBTztJQUNqQzJ2QyxNQUFNLEVBQUUsUUFBUTtJQUNoQkMsSUFBSSxFQUFFNXZDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRztFQUM1QixDQUFDO0VBQ0QsSUFBTTZ2QyxTQUFTLEdBQUc7SUFDaEIvRSxTQUFTLEVBQUUzQixnQkFBZ0I7SUFDM0IyRyxTQUFTLEVBQUUsSUFBSTtJQUNmbmpCLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0JuekIsU0FBUyxFQUFFLEtBQUs7SUFDaEJ1MkMsV0FBVyxFQUFFLEVBQUU7SUFDZkMsS0FBSyxFQUFFLENBQUM7SUFDUm5nQixrQkFBa0IsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztJQUN0RDdFLElBQUksRUFBRSxLQUFLO0lBQ1gvRCxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2Q1SCxTQUFTLEVBQUUsS0FBSztJQUNoQjhiLFlBQVksRUFBRSxJQUFJO0lBQ2xCK1EsUUFBUSxFQUFFLElBQUk7SUFDZEMsVUFBVSxFQUFFLElBQUk7SUFDaEI5d0MsUUFBUSxFQUFFLEtBQUs7SUFDZit3QyxRQUFRLEVBQUUsc0NBQXNDLEdBQUcsbUNBQW1DLEdBQUcsbUNBQW1DLEdBQUcsUUFBUTtJQUN2STZELEtBQUssRUFBRSxFQUFFO0lBQ1Qxb0MsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNELElBQU0yb0MsYUFBYSxHQUFHO0lBQ3BCcEYsU0FBUyxFQUFFLFFBQVE7SUFDbkJnRixTQUFTLEVBQUUsU0FBUztJQUNwQm5qQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCbnpCLFNBQVMsRUFBRSwwQkFBMEI7SUFDckN1MkMsV0FBVyxFQUFFLG1CQUFtQjtJQUNoQ0MsS0FBSyxFQUFFLGlCQUFpQjtJQUN4Qm5nQixrQkFBa0IsRUFBRSxPQUFPO0lBQzNCN0UsSUFBSSxFQUFFLFNBQVM7SUFDZi9ELE1BQU0sRUFBRSx5QkFBeUI7SUFDakM1SCxTQUFTLEVBQUUsbUJBQW1CO0lBQzlCOGIsWUFBWSxFQUFFLHdCQUF3QjtJQUN0QytRLFFBQVEsRUFBRSxTQUFTO0lBQ25CQyxVQUFVLEVBQUUsaUJBQWlCO0lBQzdCOXdDLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIrd0MsUUFBUSxFQUFFLFFBQVE7SUFDbEI2RCxLQUFLLEVBQUUsMkJBQTJCO0lBQ2xDMW9DLE9BQU8sRUFBRTtFQUNYLENBQUM7O0VBRUQ7QUFDRjtBQUNBO0VBRkUsSUFJTTRvQyxPQUFPLDBCQUFBQyxlQUFBO0lBQUFqNEMsU0FBQSxDQUFBZzRDLE9BQUEsRUFBQUMsZUFBQTtJQUFBLElBQUFDLFFBQUEsR0FBQWg0QyxZQUFBLENBQUE4M0MsT0FBQTtJQUNYLFNBQUFBLFFBQVl0M0MsT0FBTyxFQUFFaVMsTUFBTSxFQUFFO01BQUEsSUFBQXdsQyxPQUFBO01BQUFoNEMsZUFBQSxPQUFBNjNDLE9BQUE7TUFDM0IsSUFBSSxPQUFPOVgsTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxNQUFNLElBQUlyc0IsU0FBUyxDQUFDLDhEQUE4RCxDQUFDO01BQ3JGO01BQ0Fza0MsT0FBQSxHQUFBRCxRQUFBLENBQUFuMEMsSUFBQSxPQUFNckQsT0FBTyxFQUFFaVMsTUFBTTs7TUFFckI7TUFDQXdsQyxPQUFBLENBQUtDLFVBQVUsR0FBRyxJQUFJO01BQ3RCRCxPQUFBLENBQUtFLFFBQVEsR0FBRyxDQUFDO01BQ2pCRixPQUFBLENBQUtHLFVBQVUsR0FBRyxJQUFJO01BQ3RCSCxPQUFBLENBQUtJLGNBQWMsR0FBRyxDQUFDLENBQUM7TUFDeEJKLE9BQUEsQ0FBSzdVLE9BQU8sR0FBRyxJQUFJO01BQ25CNlUsT0FBQSxDQUFLSyxnQkFBZ0IsR0FBRyxJQUFJO01BQzVCTCxPQUFBLENBQUtNLFdBQVcsR0FBRyxJQUFJOztNQUV2QjtNQUNBTixPQUFBLENBQUtPLEdBQUcsR0FBRyxJQUFJO01BQ2ZQLE9BQUEsQ0FBS1EsYUFBYSxFQUFFO01BQ3BCLElBQUksQ0FBQ1IsT0FBQSxDQUFLN2pDLE9BQU8sQ0FBQ3BSLFFBQVEsRUFBRTtRQUMxQmkxQyxPQUFBLENBQUtTLFNBQVMsRUFBRTtNQUNsQjtNQUFDLE9BQUFULE9BQUE7SUFDSDs7SUFFQTtJQUFBNzNDLFlBQUEsQ0FBQTAzQyxPQUFBO01BQUF6M0MsR0FBQTtNQUFBQyxLQUFBO01BV0E7TUFDQSxTQUFBcTRDLE9BQUEsRUFBUztRQUNQLElBQUksQ0FBQ1QsVUFBVSxHQUFHLElBQUk7TUFDeEI7SUFBQztNQUFBNzNDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFzNEMsUUFBQSxFQUFVO1FBQ1IsSUFBSSxDQUFDVixVQUFVLEdBQUcsS0FBSztNQUN6QjtJQUFDO01BQUE3M0MsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXU0QyxjQUFBLEVBQWdCO1FBQ2QsSUFBSSxDQUFDWCxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUNBLFVBQVU7TUFDcEM7SUFBQztNQUFBNzNDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFxWSxPQUFBLEVBQVM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDdS9CLFVBQVUsRUFBRTtVQUNwQjtRQUNGO1FBQ0EsSUFBSSxDQUFDRyxjQUFjLENBQUNTLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQ1QsY0FBYyxDQUFDUyxLQUFLO1FBQ3RELElBQUksSUFBSSxDQUFDeDBCLFFBQVEsRUFBRSxFQUFFO1VBQ25CLElBQUksQ0FBQ3kwQixNQUFNLEVBQUU7VUFDYjtRQUNGO1FBQ0EsSUFBSSxDQUFDQyxNQUFNLEVBQUU7TUFDZjtJQUFDO01BQUEzNEMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWlVLFFBQUEsRUFBVTtRQUNSaU0sWUFBWSxDQUFDLElBQUksQ0FBQzIzQixRQUFRLENBQUM7UUFDM0JodEMsWUFBWSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDK0ksUUFBUSxDQUFDdk8sT0FBTyxDQUFDc3dDLGNBQWMsQ0FBQyxFQUFFQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUM4QyxpQkFBaUIsQ0FBQztRQUNqRyxJQUFJLElBQUksQ0FBQzlrQyxRQUFRLENBQUM3TixZQUFZLENBQUMsd0JBQXdCLENBQUMsRUFBRTtVQUN4RCxJQUFJLENBQUM2TixRQUFRLENBQUN6QyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ3lDLFFBQVEsQ0FBQzdOLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzNGO1FBQ0EsSUFBSSxDQUFDNHlDLGNBQWMsRUFBRTtRQUNyQnI1QixJQUFBLENBQUFDLGVBQUEsQ0FBQWc0QixPQUFBLENBQUFuMEMsU0FBQSxvQkFBQUUsSUFBQTtNQUNGO0lBQUM7TUFBQXhELEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFra0IsS0FBQSxFQUFPO1FBQUEsSUFBQTIwQixPQUFBO1FBQ0wsSUFBSSxJQUFJLENBQUNobEMsUUFBUSxDQUFDdFMsS0FBSyxDQUFDZ2hDLE9BQU8sS0FBSyxNQUFNLEVBQUU7VUFDMUMsTUFBTSxJQUFJaHZCLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQztRQUN4RDtRQUNBLElBQUksRUFBRSxJQUFJLENBQUN1bEMsY0FBYyxFQUFFLElBQUksSUFBSSxDQUFDbEIsVUFBVSxDQUFDLEVBQUU7VUFDL0M7UUFDRjtRQUNBLElBQU16VSxTQUFTLEdBQUd0NEIsWUFBWSxDQUFDK0QsT0FBTyxDQUFDLElBQUksQ0FBQ2lGLFFBQVEsRUFBRSxJQUFJLENBQUNwQixXQUFXLENBQUNrQyxTQUFTLENBQUN5aEMsWUFBWSxDQUFDLENBQUM7UUFDL0YsSUFBTTJDLFVBQVUsR0FBRzl5QyxjQUFjLENBQUMsSUFBSSxDQUFDNE4sUUFBUSxDQUFDO1FBQ2hELElBQU1tbEMsVUFBVSxHQUFHLENBQUNELFVBQVUsSUFBSSxJQUFJLENBQUNsbEMsUUFBUSxDQUFDNlQsYUFBYSxDQUFDeGhCLGVBQWUsRUFBRUwsUUFBUSxDQUFDLElBQUksQ0FBQ2dPLFFBQVEsQ0FBQztRQUN0RyxJQUFJc3ZCLFNBQVMsQ0FBQ24wQixnQkFBZ0IsSUFBSSxDQUFDZ3FDLFVBQVUsRUFBRTtVQUM3QztRQUNGOztRQUVBO1FBQ0EsSUFBSSxDQUFDSixjQUFjLEVBQUU7UUFDckIsSUFBTVYsR0FBRyxHQUFHLElBQUksQ0FBQ2UsY0FBYyxFQUFFO1FBQ2pDLElBQUksQ0FBQ3BsQyxRQUFRLENBQUN6QyxZQUFZLENBQUMsa0JBQWtCLEVBQUU4bUMsR0FBRyxDQUFDbHlDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUNFbkYsU0FBUyxHQUNQLElBQUksQ0FBQ2lULE9BQU8sQ0FEZGpULFNBQVM7UUFFWCxJQUFJLENBQUMsSUFBSSxDQUFDZ1QsUUFBUSxDQUFDNlQsYUFBYSxDQUFDeGhCLGVBQWUsQ0FBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQ3F5QyxHQUFHLENBQUMsRUFBRTtVQUNuRXIzQyxTQUFTLENBQUN1bkMsTUFBTSxDQUFDOFAsR0FBRyxDQUFDO1VBQ3JCcnRDLFlBQVksQ0FBQytELE9BQU8sQ0FBQyxJQUFJLENBQUNpRixRQUFRLEVBQUUsSUFBSSxDQUFDcEIsV0FBVyxDQUFDa0MsU0FBUyxDQUFDMmhDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pGO1FBQ0EsSUFBSSxDQUFDeFQsT0FBTyxHQUFHLElBQUksQ0FBQ00sYUFBYSxDQUFDOFUsR0FBRyxDQUFDO1FBQ3RDQSxHQUFHLENBQUN0eUMsU0FBUyxDQUFDK1UsR0FBRyxDQUFDKzZCLGlCQUFpQixDQUFDOztRQUVwQztRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUksY0FBYyxJQUFJaDFDLFFBQVEsQ0FBQ3dGLGVBQWUsRUFBRTtVQUFBLElBQUFnekMsTUFBQTtVQUFBLElBQUFDLFdBQUEsR0FBQWh1QywwQkFBQSxDQUN4QixDQUFBK3RDLE1BQUEsS0FBRSxFQUFDejNDLE1BQU0sQ0FBQTdCLEtBQUEsQ0FBQXM1QyxNQUFBLEVBQUE3d0Msa0JBQUEsQ0FBSTNILFFBQVEsQ0FBQ2tHLElBQUksQ0FBQ3VPLFFBQVEsRUFBQztZQUFBaWtDLE9BQUE7VUFBQTtZQUExRCxLQUFBRCxXQUFBLENBQUE5dEMsQ0FBQSxNQUFBK3RDLE9BQUEsR0FBQUQsV0FBQSxDQUFBN3RDLENBQUEsSUFBQUMsSUFBQSxHQUE0RDtjQUFBLElBQWpEckwsT0FBTyxHQUFBazVDLE9BQUEsQ0FBQXA1QyxLQUFBO2NBQ2hCNkssWUFBWSxDQUFDK0MsRUFBRSxDQUFDMU4sT0FBTyxFQUFFLFdBQVcsRUFBRXFHLElBQUksQ0FBQztZQUM3QztVQUFDLFNBQUFrRixHQUFBO1lBQUEwdEMsV0FBQSxDQUFBenRDLENBQUEsQ0FBQUQsR0FBQTtVQUFBO1lBQUEwdEMsV0FBQSxDQUFBeHRDLENBQUE7VUFBQTtRQUNIO1FBQ0EsSUFBTWlaLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7VUFDckIvWixZQUFZLENBQUMrRCxPQUFPLENBQUNpcUMsT0FBSSxDQUFDaGxDLFFBQVEsRUFBRWdsQyxPQUFJLENBQUNwbUMsV0FBVyxDQUFDa0MsU0FBUyxDQUFDMGhDLGFBQWEsQ0FBQyxDQUFDO1VBQzlFLElBQUl3QyxPQUFJLENBQUNmLFVBQVUsS0FBSyxLQUFLLEVBQUU7WUFDN0JlLE9BQUksQ0FBQ0osTUFBTSxFQUFFO1VBQ2Y7VUFDQUksT0FBSSxDQUFDZixVQUFVLEdBQUcsS0FBSztRQUN6QixDQUFDO1FBQ0QsSUFBSSxDQUFDdmpDLGNBQWMsQ0FBQ3FRLFFBQVEsRUFBRSxJQUFJLENBQUNzekIsR0FBRyxFQUFFLElBQUksQ0FBQzcyQixXQUFXLEVBQUUsQ0FBQztNQUM3RDtJQUFDO01BQUF0aEIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWlrQixLQUFBLEVBQU87UUFBQSxJQUFBbzFCLE9BQUE7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDcjFCLFFBQVEsRUFBRSxFQUFFO1VBQ3BCO1FBQ0Y7UUFDQSxJQUFNMGYsU0FBUyxHQUFHNzRCLFlBQVksQ0FBQytELE9BQU8sQ0FBQyxJQUFJLENBQUNpRixRQUFRLEVBQUUsSUFBSSxDQUFDcEIsV0FBVyxDQUFDa0MsU0FBUyxDQUFDdWhDLFlBQVksQ0FBQyxDQUFDO1FBQy9GLElBQUl4UyxTQUFTLENBQUMxMEIsZ0JBQWdCLEVBQUU7VUFDOUI7UUFDRjtRQUNBLElBQU1rcEMsR0FBRyxHQUFHLElBQUksQ0FBQ2UsY0FBYyxFQUFFO1FBQ2pDZixHQUFHLENBQUN0eUMsU0FBUyxDQUFDK0ssTUFBTSxDQUFDK2tDLGlCQUFpQixDQUFDOztRQUV2QztRQUNBO1FBQ0EsSUFBSSxjQUFjLElBQUloMUMsUUFBUSxDQUFDd0YsZUFBZSxFQUFFO1VBQUEsSUFBQW96QyxNQUFBO1VBQUEsSUFBQUMsV0FBQSxHQUFBcHVDLDBCQUFBLENBQ3hCLENBQUFtdUMsTUFBQSxLQUFFLEVBQUM3M0MsTUFBTSxDQUFBN0IsS0FBQSxDQUFBMDVDLE1BQUEsRUFBQWp4QyxrQkFBQSxDQUFJM0gsUUFBUSxDQUFDa0csSUFBSSxDQUFDdU8sUUFBUSxFQUFDO1lBQUFxa0MsT0FBQTtVQUFBO1lBQTFELEtBQUFELFdBQUEsQ0FBQWx1QyxDQUFBLE1BQUFtdUMsT0FBQSxHQUFBRCxXQUFBLENBQUFqdUMsQ0FBQSxJQUFBQyxJQUFBLEdBQTREO2NBQUEsSUFBakRyTCxPQUFPLEdBQUFzNUMsT0FBQSxDQUFBeDVDLEtBQUE7Y0FDaEI2SyxZQUFZLENBQUNDLEdBQUcsQ0FBQzVLLE9BQU8sRUFBRSxXQUFXLEVBQUVxRyxJQUFJLENBQUM7WUFDOUM7VUFBQyxTQUFBa0YsR0FBQTtZQUFBOHRDLFdBQUEsQ0FBQTd0QyxDQUFBLENBQUFELEdBQUE7VUFBQTtZQUFBOHRDLFdBQUEsQ0FBQTV0QyxDQUFBO1VBQUE7UUFDSDtRQUNBLElBQUksQ0FBQ29zQyxjQUFjLENBQUMvQixhQUFhLENBQUMsR0FBRyxLQUFLO1FBQzFDLElBQUksQ0FBQytCLGNBQWMsQ0FBQ2hDLGFBQWEsQ0FBQyxHQUFHLEtBQUs7UUFDMUMsSUFBSSxDQUFDZ0MsY0FBYyxDQUFDakMsYUFBYSxDQUFDLEdBQUcsS0FBSztRQUMxQyxJQUFJLENBQUNnQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUM7O1FBRXhCLElBQU1sekIsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztVQUNyQixJQUFJeTBCLE9BQUksQ0FBQ0ksb0JBQW9CLEVBQUUsRUFBRTtZQUMvQjtVQUNGO1VBQ0EsSUFBSSxDQUFDSixPQUFJLENBQUN2QixVQUFVLEVBQUU7WUFDcEJ1QixPQUFJLENBQUNULGNBQWMsRUFBRTtVQUN2QjtVQUNBUyxPQUFJLENBQUN4bEMsUUFBUSxDQUFDdkMsZUFBZSxDQUFDLGtCQUFrQixDQUFDO1VBQ2pEekcsWUFBWSxDQUFDK0QsT0FBTyxDQUFDeXFDLE9BQUksQ0FBQ3hsQyxRQUFRLEVBQUV3bEMsT0FBSSxDQUFDNW1DLFdBQVcsQ0FBQ2tDLFNBQVMsQ0FBQ3doQyxjQUFjLENBQUMsQ0FBQztRQUNqRixDQUFDO1FBQ0QsSUFBSSxDQUFDNWhDLGNBQWMsQ0FBQ3FRLFFBQVEsRUFBRSxJQUFJLENBQUNzekIsR0FBRyxFQUFFLElBQUksQ0FBQzcyQixXQUFXLEVBQUUsQ0FBQztNQUM3RDtJQUFDO01BQUF0aEIsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXV4QixPQUFBLEVBQVM7UUFDUCxJQUFJLElBQUksQ0FBQ3VSLE9BQU8sRUFBRTtVQUNoQixJQUFJLENBQUNBLE9BQU8sQ0FBQ3ZSLE1BQU0sRUFBRTtRQUN2QjtNQUNGOztNQUVBO0lBQUE7TUFBQXh4QixHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBODRDLGVBQUEsRUFBaUI7UUFDZixPQUFPNXJDLE9BQU8sQ0FBQyxJQUFJLENBQUN3c0MsU0FBUyxFQUFFLENBQUM7TUFDbEM7SUFBQztNQUFBMzVDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFpNUMsZUFBQSxFQUFpQjtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUNmLEdBQUcsRUFBRTtVQUNiLElBQUksQ0FBQ0EsR0FBRyxHQUFHLElBQUksQ0FBQ3lCLGlCQUFpQixDQUFDLElBQUksQ0FBQzFCLFdBQVcsSUFBSSxJQUFJLENBQUMyQixzQkFBc0IsRUFBRSxDQUFDO1FBQ3RGO1FBQ0EsT0FBTyxJQUFJLENBQUMxQixHQUFHO01BQ2pCO0lBQUM7TUFBQW40QyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBMjVDLGtCQUFrQnRHLE9BQU8sRUFBRTtRQUN6QixJQUFNNkUsR0FBRyxHQUFHLElBQUksQ0FBQzJCLG1CQUFtQixDQUFDeEcsT0FBTyxDQUFDLENBQUNrQixNQUFNLEVBQUU7O1FBRXREO1FBQ0EsSUFBSSxDQUFDMkQsR0FBRyxFQUFFO1VBQ1IsT0FBTyxJQUFJO1FBQ2I7UUFDQUEsR0FBRyxDQUFDdHlDLFNBQVMsQ0FBQytLLE1BQU0sQ0FBQzZrQyxpQkFBaUIsRUFBRUUsaUJBQWlCLENBQUM7UUFDMUQ7UUFDQXdDLEdBQUcsQ0FBQ3R5QyxTQUFTLENBQUMrVSxHQUFHLE9BQUFsWixNQUFBLENBQU8sSUFBSSxDQUFDZ1IsV0FBVyxDQUFDOUssSUFBSSxXQUFRO1FBQ3JELElBQU1teUMsS0FBSyxHQUFHcjJDLE1BQU0sQ0FBQyxJQUFJLENBQUNnUCxXQUFXLENBQUM5SyxJQUFJLENBQUMsQ0FBQ3JFLFFBQVEsRUFBRTtRQUN0RDQwQyxHQUFHLENBQUM5bUMsWUFBWSxDQUFDLElBQUksRUFBRTBvQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUN6NEIsV0FBVyxFQUFFLEVBQUU7VUFDdEI2MkIsR0FBRyxDQUFDdHlDLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQzY2QixpQkFBaUIsQ0FBQztRQUN0QztRQUNBLE9BQU8wQyxHQUFHO01BQ1o7SUFBQztNQUFBbjRDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUErNUMsV0FBVzFHLE9BQU8sRUFBRTtRQUNsQixJQUFJLENBQUM0RSxXQUFXLEdBQUc1RSxPQUFPO1FBQzFCLElBQUksSUFBSSxDQUFDcnZCLFFBQVEsRUFBRSxFQUFFO1VBQ25CLElBQUksQ0FBQzQwQixjQUFjLEVBQUU7VUFDckIsSUFBSSxDQUFDMTBCLElBQUksRUFBRTtRQUNiO01BQ0Y7SUFBQztNQUFBbmtCLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUE2NUMsb0JBQW9CeEcsT0FBTyxFQUFFO1FBQzNCLElBQUksSUFBSSxDQUFDMkUsZ0JBQWdCLEVBQUU7VUFDekIsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQzNELGFBQWEsQ0FBQ2hCLE9BQU8sQ0FBQztRQUM5QyxDQUFDLE1BQU07VUFDTCxJQUFJLENBQUMyRSxnQkFBZ0IsR0FBRyxJQUFJbkUsZUFBZSxDQUFBcmhDLGFBQUEsQ0FBQUEsYUFBQSxLQUN0QyxJQUFJLENBQUNzQixPQUFPO1lBQ2Y7WUFDQTtZQUNBdS9CLE9BQU8sRUFBUEEsT0FBTztZQUNQQyxVQUFVLEVBQUUsSUFBSSxDQUFDYSx3QkFBd0IsQ0FBQyxJQUFJLENBQUNyZ0MsT0FBTyxDQUFDc2pDLFdBQVc7VUFBQyxHQUNuRTtRQUNKO1FBQ0EsT0FBTyxJQUFJLENBQUNZLGdCQUFnQjtNQUM5QjtJQUFDO01BQUFqNEMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTQ1Qyx1QkFBQSxFQUF5QjtRQUN2QixPQUFBMzhCLGVBQUEsS0FDRzA0QixzQkFBc0IsRUFBRyxJQUFJLENBQUMrRCxTQUFTLEVBQUU7TUFFOUM7SUFBQztNQUFBMzVDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUEwNUMsVUFBQSxFQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUN2Rix3QkFBd0IsQ0FBQyxJQUFJLENBQUNyZ0MsT0FBTyxDQUFDd2pDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQ3pqQyxRQUFRLENBQUM3TixZQUFZLENBQUMsd0JBQXdCLENBQUM7TUFDbEg7O01BRUE7SUFBQTtNQUFBakcsR0FBQTtNQUFBQyxLQUFBLEVBQ0EsU0FBQWc2Qyw2QkFBNkJ2dkMsS0FBSyxFQUFFO1FBQ2xDLE9BQU8sSUFBSSxDQUFDZ0ksV0FBVyxDQUFDaUMsbUJBQW1CLENBQUNqSyxLQUFLLENBQUNFLGNBQWMsRUFBRSxJQUFJLENBQUNzdkMsa0JBQWtCLEVBQUUsQ0FBQztNQUM5RjtJQUFDO01BQUFsNkMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXFoQixZQUFBLEVBQWM7UUFDWixPQUFPLElBQUksQ0FBQ3ZOLE9BQU8sQ0FBQ3FqQyxTQUFTLElBQUksSUFBSSxDQUFDZSxHQUFHLElBQUksSUFBSSxDQUFDQSxHQUFHLENBQUN0eUMsU0FBUyxDQUFDQyxRQUFRLENBQUMydkMsaUJBQWlCLENBQUM7TUFDN0Y7SUFBQztNQUFBejFDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFna0IsU0FBQSxFQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNrMEIsR0FBRyxJQUFJLElBQUksQ0FBQ0EsR0FBRyxDQUFDdHlDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDNnZDLGlCQUFpQixDQUFDO01BQ25FO0lBQUM7TUFBQTMxQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBb2pDLGNBQWM4VSxHQUFHLEVBQUU7UUFDakIsSUFBTXh4QixTQUFTLEdBQUd6ZSxPQUFPLENBQUMsSUFBSSxDQUFDNkwsT0FBTyxDQUFDNFMsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFd3hCLEdBQUcsRUFBRSxJQUFJLENBQUNya0MsUUFBUSxDQUFDLENBQUM7UUFDN0UsSUFBTXFtQyxVQUFVLEdBQUd0RCxhQUFhLENBQUNsd0IsU0FBUyxDQUFDcFQsV0FBVyxFQUFFLENBQUM7UUFDekQsT0FBT2dyQixZQUFZLENBQUMsSUFBSSxDQUFDenFCLFFBQVEsRUFBRXFrQyxHQUFHLEVBQUUsSUFBSSxDQUFDblUsZ0JBQWdCLENBQUNtVyxVQUFVLENBQUMsQ0FBQztNQUM1RTtJQUFDO01BQUFuNkMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQW1rQyxXQUFBLEVBQWE7UUFBQSxJQUFBZ1csT0FBQTtRQUNYLElBQ0U3ckIsTUFBTSxHQUNKLElBQUksQ0FBQ3hhLE9BQU8sQ0FEZHdhLE1BQU07UUFFUixJQUFJLE9BQU9BLE1BQU0sS0FBSyxRQUFRLEVBQUU7VUFDOUIsT0FBT0EsTUFBTSxDQUFDOXBCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ3dSLEdBQUcsQ0FBQyxVQUFBaFcsS0FBSztZQUFBLE9BQUlxRSxNQUFNLENBQUNvYyxRQUFRLENBQUN6Z0IsS0FBSyxFQUFFLEVBQUUsQ0FBQztVQUFBLEVBQUM7UUFDbkU7UUFDQSxJQUFJLE9BQU9zdUIsTUFBTSxLQUFLLFVBQVUsRUFBRTtVQUNoQyxPQUFPLFVBQUErVixVQUFVO1lBQUEsT0FBSS9WLE1BQU0sQ0FBQytWLFVBQVUsRUFBRThWLE9BQUksQ0FBQ3RtQyxRQUFRLENBQUM7VUFBQTtRQUN4RDtRQUNBLE9BQU95YSxNQUFNO01BQ2Y7SUFBQztNQUFBdnVCLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFtMEMseUJBQXlCYSxHQUFHLEVBQUU7UUFDNUIsT0FBTy9zQyxPQUFPLENBQUMrc0MsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDbmhDLFFBQVEsQ0FBQyxDQUFDO01BQ3RDO0lBQUM7TUFBQTlULEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUErakMsaUJBQWlCbVcsVUFBVSxFQUFFO1FBQUEsSUFBQUUsT0FBQTtRQUMzQixJQUFNOVYscUJBQXFCLEdBQUc7VUFDNUI1ZCxTQUFTLEVBQUV3ekIsVUFBVTtVQUNyQnZkLFNBQVMsRUFBRSxDQUFDO1lBQ1ZqMUIsSUFBSSxFQUFFLE1BQU07WUFDWmloQixPQUFPLEVBQUU7Y0FDUHVPLGtCQUFrQixFQUFFLElBQUksQ0FBQ3BqQixPQUFPLENBQUNvakI7WUFDbkM7VUFDRixDQUFDLEVBQUU7WUFDRHh2QixJQUFJLEVBQUUsUUFBUTtZQUNkaWhCLE9BQU8sRUFBRTtjQUNQMkYsTUFBTSxFQUFFLElBQUksQ0FBQzZWLFVBQVU7WUFDekI7VUFDRixDQUFDLEVBQUU7WUFDRHo4QixJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCaWhCLE9BQU8sRUFBRTtjQUNQcUwsUUFBUSxFQUFFLElBQUksQ0FBQ2xnQixPQUFPLENBQUNrZ0I7WUFDekI7VUFDRixDQUFDLEVBQUU7WUFDRHRzQixJQUFJLEVBQUUsT0FBTztZQUNiaWhCLE9BQU8sRUFBRTtjQUNQem9CLE9BQU8sTUFBQXVCLE1BQUEsQ0FBTSxJQUFJLENBQUNnUixXQUFXLENBQUM5SyxJQUFJO1lBQ3BDO1VBQ0YsQ0FBQyxFQUFFO1lBQ0RELElBQUksRUFBRSxpQkFBaUI7WUFDdkJ5aEIsT0FBTyxFQUFFLElBQUk7WUFDYkMsS0FBSyxFQUFFLFlBQVk7WUFDbkJ2aEIsRUFBRSxFQUFFLFNBQUFBLEdBQUE2UCxJQUFJLEVBQUk7Y0FDVjtjQUNBO2NBQ0EwaUMsT0FBSSxDQUFDbkIsY0FBYyxFQUFFLENBQUM3bkMsWUFBWSxDQUFDLHVCQUF1QixFQUFFc0csSUFBSSxDQUFDeVEsS0FBSyxDQUFDekIsU0FBUyxDQUFDO1lBQ25GO1VBQ0YsQ0FBQztRQUNILENBQUM7UUFDRCxPQUFBbFUsYUFBQSxDQUFBQSxhQUFBLEtBQ0s4eEIscUJBQXFCLEdBQ3JCcjhCLE9BQU8sQ0FBQyxJQUFJLENBQUM2TCxPQUFPLENBQUMwdUIsWUFBWSxFQUFFLENBQUM4QixxQkFBcUIsQ0FBQyxDQUFDO01BRWxFO0lBQUM7TUFBQXZrQyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBbTRDLGNBQUEsRUFBZ0I7UUFBQSxJQUFBa0MsT0FBQTtRQUNkLElBQU1DLFFBQVEsR0FBRyxJQUFJLENBQUN4bUMsT0FBTyxDQUFDbEYsT0FBTyxDQUFDcEssS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUFDLElBQUErMUMsV0FBQSxHQUFBcHZDLDBCQUFBLENBQzNCbXZDLFFBQVE7VUFBQUUsT0FBQTtRQUFBO1VBQTlCLEtBQUFELFdBQUEsQ0FBQWx2QyxDQUFBLE1BQUFtdkMsT0FBQSxHQUFBRCxXQUFBLENBQUFqdkMsQ0FBQSxJQUFBQyxJQUFBLEdBQWdDO1lBQUEsSUFBckJxRCxPQUFPLEdBQUE0ckMsT0FBQSxDQUFBeDZDLEtBQUE7WUFDaEIsSUFBSTRPLE9BQU8sS0FBSyxPQUFPLEVBQUU7Y0FDdkIvRCxZQUFZLENBQUMrQyxFQUFFLENBQUMsSUFBSSxDQUFDaUcsUUFBUSxFQUFFLElBQUksQ0FBQ3BCLFdBQVcsQ0FBQ2tDLFNBQVMsQ0FBQzRoQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUN6aUMsT0FBTyxDQUFDcFIsUUFBUSxFQUFFLFVBQUErSCxLQUFLLEVBQUk7Z0JBQ3hHLElBQU1qSyxPQUFPLEdBQUc2NUMsT0FBSSxDQUFDTCw0QkFBNEIsQ0FBQ3Z2QyxLQUFLLENBQUM7Z0JBQ3hEakssT0FBTyxDQUFDNlgsTUFBTSxFQUFFO2NBQ2xCLENBQUMsQ0FBQztZQUNKLENBQUMsTUFBTSxJQUFJekosT0FBTyxLQUFLcW5DLGNBQWMsRUFBRTtjQUNyQyxJQUFNd0UsT0FBTyxHQUFHN3JDLE9BQU8sS0FBS2tuQyxhQUFhLEdBQUcsSUFBSSxDQUFDcmpDLFdBQVcsQ0FBQ2tDLFNBQVMsQ0FBQytoQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQ2prQyxXQUFXLENBQUNrQyxTQUFTLENBQUM2aEMsZUFBZSxDQUFDO2NBQ3RJLElBQU1rRSxRQUFRLEdBQUc5ckMsT0FBTyxLQUFLa25DLGFBQWEsR0FBRyxJQUFJLENBQUNyakMsV0FBVyxDQUFDa0MsU0FBUyxDQUFDZ2lDLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDbGtDLFdBQVcsQ0FBQ2tDLFNBQVMsQ0FBQzhoQyxnQkFBZ0IsQ0FBQztjQUN4STVyQyxZQUFZLENBQUMrQyxFQUFFLENBQUMsSUFBSSxDQUFDaUcsUUFBUSxFQUFFNG1DLE9BQU8sRUFBRSxJQUFJLENBQUMzbUMsT0FBTyxDQUFDcFIsUUFBUSxFQUFFLFVBQUErSCxLQUFLLEVBQUk7Z0JBQ3RFLElBQU1qSyxPQUFPLEdBQUc2NUMsT0FBSSxDQUFDTCw0QkFBNEIsQ0FBQ3Z2QyxLQUFLLENBQUM7Z0JBQ3hEakssT0FBTyxDQUFDdTNDLGNBQWMsQ0FBQ3R0QyxLQUFLLENBQUNNLElBQUksS0FBSyxTQUFTLEdBQUdnckMsYUFBYSxHQUFHRCxhQUFhLENBQUMsR0FBRyxJQUFJO2dCQUN2RnQxQyxPQUFPLENBQUNrNEMsTUFBTSxFQUFFO2NBQ2xCLENBQUMsQ0FBQztjQUNGN3RDLFlBQVksQ0FBQytDLEVBQUUsQ0FBQyxJQUFJLENBQUNpRyxRQUFRLEVBQUU2bUMsUUFBUSxFQUFFLElBQUksQ0FBQzVtQyxPQUFPLENBQUNwUixRQUFRLEVBQUUsVUFBQStILEtBQUssRUFBSTtnQkFDdkUsSUFBTWpLLE9BQU8sR0FBRzY1QyxPQUFJLENBQUNMLDRCQUE0QixDQUFDdnZDLEtBQUssQ0FBQztnQkFDeERqSyxPQUFPLENBQUN1M0MsY0FBYyxDQUFDdHRDLEtBQUssQ0FBQ00sSUFBSSxLQUFLLFVBQVUsR0FBR2dyQyxhQUFhLEdBQUdELGFBQWEsQ0FBQyxHQUFHdDFDLE9BQU8sQ0FBQ3FULFFBQVEsQ0FBQ2hPLFFBQVEsQ0FBQzRFLEtBQUssQ0FBQ3FDLGFBQWEsQ0FBQztnQkFDbEl0TSxPQUFPLENBQUNpNEMsTUFBTSxFQUFFO2NBQ2xCLENBQUMsQ0FBQztZQUNKO1VBQ0Y7UUFBQyxTQUFBaHRDLEdBQUE7VUFBQTh1QyxXQUFBLENBQUE3dUMsQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQTh1QyxXQUFBLENBQUE1dUMsQ0FBQTtRQUFBO1FBQ0QsSUFBSSxDQUFDZ3RDLGlCQUFpQixHQUFHLFlBQU07VUFDN0IsSUFBSTBCLE9BQUksQ0FBQ3htQyxRQUFRLEVBQUU7WUFDakJ3bUMsT0FBSSxDQUFDcDJCLElBQUksRUFBRTtVQUNiO1FBQ0YsQ0FBQztRQUNEcFosWUFBWSxDQUFDK0MsRUFBRSxDQUFDLElBQUksQ0FBQ2lHLFFBQVEsQ0FBQ3ZPLE9BQU8sQ0FBQ3N3QyxjQUFjLENBQUMsRUFBRUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDOEMsaUJBQWlCLENBQUM7TUFDbEc7SUFBQztNQUFBNTRDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFvNEMsVUFBQSxFQUFZO1FBQ1YsSUFBTWQsS0FBSyxHQUFHLElBQUksQ0FBQ3pqQyxRQUFRLENBQUM3TixZQUFZLENBQUMsT0FBTyxDQUFDO1FBQ2pELElBQUksQ0FBQ3N4QyxLQUFLLEVBQUU7VUFDVjtRQUNGO1FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQ3pqQyxRQUFRLENBQUM3TixZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM2TixRQUFRLENBQUMxVCxXQUFXLENBQUMyVSxJQUFJLEVBQUUsRUFBRTtVQUNsRixJQUFJLENBQUNqQixRQUFRLENBQUN6QyxZQUFZLENBQUMsWUFBWSxFQUFFa21DLEtBQUssQ0FBQztRQUNqRDtRQUNBLElBQUksQ0FBQ3pqQyxRQUFRLENBQUN6QyxZQUFZLENBQUMsd0JBQXdCLEVBQUVrbUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUN6akMsUUFBUSxDQUFDdkMsZUFBZSxDQUFDLE9BQU8sQ0FBQztNQUN4QztJQUFDO01BQUF2UixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBMDRDLE9BQUEsRUFBUztRQUFBLElBQUFpQyxPQUFBO1FBQ1AsSUFBSSxJQUFJLENBQUMzMkIsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDOHpCLFVBQVUsRUFBRTtVQUN0QyxJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJO1VBQ3RCO1FBQ0Y7UUFDQSxJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJO1FBQ3RCLElBQUksQ0FBQzhDLFdBQVcsQ0FBQyxZQUFNO1VBQ3JCLElBQUlELE9BQUksQ0FBQzdDLFVBQVUsRUFBRTtZQUNuQjZDLE9BQUksQ0FBQ3oyQixJQUFJLEVBQUU7VUFDYjtRQUNGLENBQUMsRUFBRSxJQUFJLENBQUNwUSxPQUFPLENBQUN1akMsS0FBSyxDQUFDbnpCLElBQUksQ0FBQztNQUM3QjtJQUFDO01BQUFua0IsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXk0QyxPQUFBLEVBQVM7UUFBQSxJQUFBb0MsT0FBQTtRQUNQLElBQUksSUFBSSxDQUFDcEIsb0JBQW9CLEVBQUUsRUFBRTtVQUMvQjtRQUNGO1FBQ0EsSUFBSSxDQUFDM0IsVUFBVSxHQUFHLEtBQUs7UUFDdkIsSUFBSSxDQUFDOEMsV0FBVyxDQUFDLFlBQU07VUFDckIsSUFBSSxDQUFDQyxPQUFJLENBQUMvQyxVQUFVLEVBQUU7WUFDcEIrQyxPQUFJLENBQUM1MkIsSUFBSSxFQUFFO1VBQ2I7UUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDblEsT0FBTyxDQUFDdWpDLEtBQUssQ0FBQ3B6QixJQUFJLENBQUM7TUFDN0I7SUFBQztNQUFBbGtCLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUE0NkMsWUFBWWh5QyxPQUFPLEVBQUVreUMsT0FBTyxFQUFFO1FBQzVCNTZCLFlBQVksQ0FBQyxJQUFJLENBQUMyM0IsUUFBUSxDQUFDO1FBQzNCLElBQUksQ0FBQ0EsUUFBUSxHQUFHN3VDLFVBQVUsQ0FBQ0osT0FBTyxFQUFFa3lDLE9BQU8sQ0FBQztNQUM5QztJQUFDO01BQUEvNkMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQXk1QyxxQkFBQSxFQUF1QjtRQUNyQixPQUFPcjJDLE1BQU0sQ0FBQzRJLE1BQU0sQ0FBQyxJQUFJLENBQUMrckMsY0FBYyxDQUFDLENBQUNwcUMsUUFBUSxDQUFDLElBQUksQ0FBQztNQUMxRDtJQUFDO01BQUE1TixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBa1MsV0FBV0MsTUFBTSxFQUFFO1FBQ2pCLElBQU00b0MsY0FBYyxHQUFHN3BDLFdBQVcsQ0FBQ0ssaUJBQWlCLENBQUMsSUFBSSxDQUFDc0MsUUFBUSxDQUFDO1FBQ25FLFNBQUFtbkMsSUFBQSxNQUFBQyxhQUFBLEdBQTRCNzNDLE1BQU0sQ0FBQytLLElBQUksQ0FBQzRzQyxjQUFjLENBQUMsRUFBQUMsSUFBQSxHQUFBQyxhQUFBLENBQUFqNkMsTUFBQSxFQUFBZzZDLElBQUEsSUFBRTtVQUFwRCxJQUFNRSxhQUFhLEdBQUFELGFBQUEsQ0FBQUQsSUFBQTtVQUN0QixJQUFJekYscUJBQXFCLENBQUMvb0MsR0FBRyxDQUFDMHVDLGFBQWEsQ0FBQyxFQUFFO1lBQzVDLE9BQU9ILGNBQWMsQ0FBQ0csYUFBYSxDQUFDO1VBQ3RDO1FBQ0Y7UUFDQS9vQyxNQUFNLEdBQUFLLGFBQUEsQ0FBQUEsYUFBQSxLQUNEdW9DLGNBQWMsR0FDYmo1QyxPQUFBLENBQU9xUSxNQUFNLE1BQUssUUFBUSxJQUFJQSxNQUFNLEdBQUdBLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FDdkQ7UUFDREEsTUFBTSxHQUFHLElBQUksQ0FBQ0MsZUFBZSxDQUFDRCxNQUFNLENBQUM7UUFDckNBLE1BQU0sR0FBRyxJQUFJLENBQUNFLGlCQUFpQixDQUFDRixNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDRyxnQkFBZ0IsQ0FBQ0gsTUFBTSxDQUFDO1FBQzdCLE9BQU9BLE1BQU07TUFDZjtJQUFDO01BQUFwUyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBcVMsa0JBQWtCRixNQUFNLEVBQUU7UUFDeEJBLE1BQU0sQ0FBQ3RSLFNBQVMsR0FBR3NSLE1BQU0sQ0FBQ3RSLFNBQVMsS0FBSyxLQUFLLEdBQUdILFFBQVEsQ0FBQ2tHLElBQUksR0FBRzdCLFVBQVUsQ0FBQ29OLE1BQU0sQ0FBQ3RSLFNBQVMsQ0FBQztRQUM1RixJQUFJLE9BQU9zUixNQUFNLENBQUNrbEMsS0FBSyxLQUFLLFFBQVEsRUFBRTtVQUNwQ2xsQyxNQUFNLENBQUNrbEMsS0FBSyxHQUFHO1lBQ2JuekIsSUFBSSxFQUFFL1IsTUFBTSxDQUFDa2xDLEtBQUs7WUFDbEJwekIsSUFBSSxFQUFFOVIsTUFBTSxDQUFDa2xDO1VBQ2YsQ0FBQztRQUNIO1FBQ0EsSUFBSSxPQUFPbGxDLE1BQU0sQ0FBQ21sQyxLQUFLLEtBQUssUUFBUSxFQUFFO1VBQ3BDbmxDLE1BQU0sQ0FBQ21sQyxLQUFLLEdBQUdubEMsTUFBTSxDQUFDbWxDLEtBQUssQ0FBQ2gwQyxRQUFRLEVBQUU7UUFDeEM7UUFDQSxJQUFJLE9BQU82TyxNQUFNLENBQUNraEMsT0FBTyxLQUFLLFFBQVEsRUFBRTtVQUN0Q2xoQyxNQUFNLENBQUNraEMsT0FBTyxHQUFHbGhDLE1BQU0sQ0FBQ2toQyxPQUFPLENBQUMvdkMsUUFBUSxFQUFFO1FBQzVDO1FBQ0EsT0FBTzZPLE1BQU07TUFDZjtJQUFDO01BQUFwUyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBaTZDLG1CQUFBLEVBQXFCO1FBQ25CLElBQU05bkMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNqQixTQUFBZ3BDLElBQUEsTUFBQUMsZ0JBQUEsR0FBMkJoNEMsTUFBTSxDQUFDb0ssT0FBTyxDQUFDLElBQUksQ0FBQ3NHLE9BQU8sQ0FBQyxFQUFBcW5DLElBQUEsR0FBQUMsZ0JBQUEsQ0FBQXA2QyxNQUFBLEVBQUFtNkMsSUFBQSxJQUFFO1VBQXBELElBQUFFLG1CQUFBLEdBQUF6dUMsY0FBQSxDQUFBd3VDLGdCQUFBLENBQUFELElBQUE7WUFBT3A3QyxHQUFHLEdBQUFzN0MsbUJBQUE7WUFBRXI3QyxLQUFLLEdBQUFxN0MsbUJBQUE7VUFDcEIsSUFBSSxJQUFJLENBQUM1b0MsV0FBVyxDQUFDQyxPQUFPLENBQUMzUyxHQUFHLENBQUMsS0FBS0MsS0FBSyxFQUFFO1lBQzNDbVMsTUFBTSxDQUFDcFMsR0FBRyxDQUFDLEdBQUdDLEtBQUs7VUFDckI7UUFDRjtRQUNBbVMsTUFBTSxDQUFDelAsUUFBUSxHQUFHLEtBQUs7UUFDdkJ5UCxNQUFNLENBQUN2RCxPQUFPLEdBQUcsUUFBUTs7UUFFekI7UUFDQTtRQUNBO1FBQ0EsT0FBT3VELE1BQU07TUFDZjtJQUFDO01BQUFwUyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBNDRDLGVBQUEsRUFBaUI7UUFDZixJQUFJLElBQUksQ0FBQzlWLE9BQU8sRUFBRTtVQUNoQixJQUFJLENBQUNBLE9BQU8sQ0FBQzVELE9BQU8sRUFBRTtVQUN0QixJQUFJLENBQUM0RCxPQUFPLEdBQUcsSUFBSTtRQUNyQjtRQUNBLElBQUksSUFBSSxDQUFDb1YsR0FBRyxFQUFFO1VBQ1osSUFBSSxDQUFDQSxHQUFHLENBQUN2bkMsTUFBTSxFQUFFO1VBQ2pCLElBQUksQ0FBQ3VuQyxHQUFHLEdBQUcsSUFBSTtRQUNqQjtNQUNGOztNQUVBO0lBQUE7TUFBQW40QyxHQUFBO01BQUFpUSxHQUFBLEVBOVhBLFNBQUFBLElBQUEsRUFBcUI7UUFDbkIsT0FBT2tuQyxTQUFTO01BQ2xCO0lBQUM7TUFBQW4zQyxHQUFBO01BQUFpUSxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUF5QjtRQUN2QixPQUFPdW5DLGFBQWE7TUFDdEI7SUFBQztNQUFBeDNDLEdBQUE7TUFBQWlRLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQWtCO1FBQ2hCLE9BQU9zbEMsTUFBTTtNQUNmO0lBQUM7TUFBQXYxQyxHQUFBO01BQUFDLEtBQUEsRUF1WEQsU0FBQThILGdCQUF1QnFLLE1BQU0sRUFBRTtRQUM3QixPQUFPLElBQUksQ0FBQ3NGLElBQUksQ0FBQyxZQUFZO1VBQzNCLElBQU1DLElBQUksR0FBRzgvQixPQUFPLENBQUM5aUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFdkMsTUFBTSxDQUFDO1VBQ3RELElBQUksT0FBT0EsTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM5QjtVQUNGO1VBQ0EsSUFBSSxPQUFPdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQ3ZDLE1BQU0sSUFBSWtCLFNBQVMsc0JBQUE1UixNQUFBLENBQXFCMFEsTUFBTSxRQUFJO1VBQ3BEO1VBQ0F1RixJQUFJLENBQUN2RixNQUFNLENBQUMsRUFBRTtRQUNoQixDQUFDLENBQUM7TUFDSjtJQUFDO0lBQUEsT0FBQXFsQyxPQUFBO0VBQUEsRUFuYW1CL2pDLGFBQWE7RUFzYW5DO0FBQ0Y7QUFDQTtFQUVFbE0sa0JBQWtCLENBQUNpd0MsT0FBTyxDQUFDOztFQUUzQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLElBQU04RCxNQUFNLEdBQUcsU0FBUztFQUN4QixJQUFNQyxjQUFjLEdBQUcsaUJBQWlCO0VBQ3hDLElBQU1DLGdCQUFnQixHQUFHLGVBQWU7RUFDeEMsSUFBTUMsU0FBUyxHQUFBanBDLGFBQUEsQ0FBQUEsYUFBQSxLQUNWZ2xDLE9BQU8sQ0FBQzlrQyxPQUFPO0lBQ2xCMmdDLE9BQU8sRUFBRSxFQUFFO0lBQ1gva0IsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNkNUgsU0FBUyxFQUFFLE9BQU87SUFDbEIrc0IsUUFBUSxFQUFFLHNDQUFzQyxHQUFHLG1DQUFtQyxHQUFHLGtDQUFrQyxHQUFHLGtDQUFrQyxHQUFHLFFBQVE7SUFDM0s3a0MsT0FBTyxFQUFFO0VBQU8sRUFDakI7RUFDRCxJQUFNOHNDLGFBQWEsR0FBQWxwQyxhQUFBLENBQUFBLGFBQUEsS0FDZGdsQyxPQUFPLENBQUM1a0MsV0FBVztJQUN0QnlnQyxPQUFPLEVBQUU7RUFBZ0MsRUFDMUM7O0VBRUQ7QUFDRjtBQUNBO0VBRkUsSUFJTXNJLE9BQU8sMEJBQUFDLFFBQUE7SUFBQXA4QyxTQUFBLENBQUFtOEMsT0FBQSxFQUFBQyxRQUFBO0lBQUEsSUFBQUMsUUFBQSxHQUFBbjhDLFlBQUEsQ0FBQWk4QyxPQUFBO0lBQUEsU0FBQUEsUUFBQTtNQUFBaDhDLGVBQUEsT0FBQWc4QyxPQUFBO01BQUEsT0FBQUUsUUFBQSxDQUFBajhDLEtBQUEsT0FBQUMsU0FBQTtJQUFBO0lBQUFDLFlBQUEsQ0FBQTY3QyxPQUFBO01BQUE1N0MsR0FBQTtNQUFBQyxLQUFBO01BWVg7TUFDQSxTQUFBODRDLGVBQUEsRUFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ1ksU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDb0MsV0FBVyxFQUFFO01BQy9DOztNQUVBO0lBQUE7TUFBQS83QyxHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBNDVDLHVCQUFBLEVBQXlCO1FBQUEsSUFBQW1DLE1BQUE7UUFDdkIsT0FBQUEsTUFBQSxPQUFBOStCLGVBQUEsQ0FBQTgrQixNQUFBLEVBQ0dSLGNBQWMsRUFBRyxJQUFJLENBQUM3QixTQUFTLEVBQUUsR0FBQXo4QixlQUFBLENBQUE4K0IsTUFBQSxFQUNqQ1AsZ0JBQWdCLEVBQUcsSUFBSSxDQUFDTSxXQUFXLEVBQUUsR0FBQUMsTUFBQTtNQUUxQztJQUFDO01BQUFoOEMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTg3QyxZQUFBLEVBQWM7UUFDWixPQUFPLElBQUksQ0FBQzNILHdCQUF3QixDQUFDLElBQUksQ0FBQ3JnQyxPQUFPLENBQUN1L0IsT0FBTyxDQUFDO01BQzVEOztNQUVBO0lBQUE7TUFBQXR6QyxHQUFBO01BQUFpUSxHQUFBO01BM0JBO01BQ0EsU0FBQUEsSUFBQSxFQUFxQjtRQUNuQixPQUFPeXJDLFNBQVM7TUFDbEI7SUFBQztNQUFBMTdDLEdBQUE7TUFBQWlRLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQXlCO1FBQ3ZCLE9BQU8wckMsYUFBYTtNQUN0QjtJQUFDO01BQUEzN0MsR0FBQTtNQUFBaVEsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBa0I7UUFDaEIsT0FBT3NyQyxNQUFNO01BQ2Y7SUFBQztNQUFBdjdDLEdBQUE7TUFBQUMsS0FBQSxFQW1CRCxTQUFBOEgsZ0JBQXVCcUssTUFBTSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxDQUFDc0YsSUFBSSxDQUFDLFlBQVk7VUFDM0IsSUFBTUMsSUFBSSxHQUFHaWtDLE9BQU8sQ0FBQ2puQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUV2QyxNQUFNLENBQUM7VUFDdEQsSUFBSSxPQUFPQSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCO1VBQ0Y7VUFDQSxJQUFJLE9BQU91RixJQUFJLENBQUN2RixNQUFNLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDdkMsTUFBTSxJQUFJa0IsU0FBUyxzQkFBQTVSLE1BQUEsQ0FBcUIwUSxNQUFNLFFBQUk7VUFDcEQ7VUFDQXVGLElBQUksQ0FBQ3ZGLE1BQU0sQ0FBQyxFQUFFO1FBQ2hCLENBQUMsQ0FBQztNQUNKO0lBQUM7SUFBQSxPQUFBd3BDLE9BQUE7RUFBQSxFQXhDbUJuRSxPQUFPO0VBMkM3QjtBQUNGO0FBQ0E7RUFFRWp3QyxrQkFBa0IsQ0FBQ28wQyxPQUFPLENBQUM7O0VBRTNCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsSUFBTUssTUFBTSxHQUFHLFdBQVc7RUFDMUIsSUFBTUMsVUFBVSxHQUFHLGNBQWM7RUFDakMsSUFBTUMsV0FBVyxPQUFBejZDLE1BQUEsQ0FBT3c2QyxVQUFVLENBQUU7RUFDcEMsSUFBTUUsWUFBWSxHQUFHLFdBQVc7RUFDaEMsSUFBTUMsY0FBYyxjQUFBMzZDLE1BQUEsQ0FBY3k2QyxXQUFXLENBQUU7RUFDL0MsSUFBTUcsV0FBVyxXQUFBNTZDLE1BQUEsQ0FBV3k2QyxXQUFXLENBQUU7RUFDekMsSUFBTUkscUJBQXFCLFVBQUE3NkMsTUFBQSxDQUFVeTZDLFdBQVcsRUFBQXo2QyxNQUFBLENBQUcwNkMsWUFBWSxDQUFFO0VBQ2pFLElBQU1JLHdCQUF3QixHQUFHLGVBQWU7RUFDaEQsSUFBTUMsbUJBQW1CLEdBQUcsUUFBUTtFQUNwQyxJQUFNQyxpQkFBaUIsR0FBRyx3QkFBd0I7RUFDbEQsSUFBTUMscUJBQXFCLEdBQUcsUUFBUTtFQUN0QyxJQUFNQyx1QkFBdUIsR0FBRyxtQkFBbUI7RUFDbkQsSUFBTUMsa0JBQWtCLEdBQUcsV0FBVztFQUN0QyxJQUFNQyxrQkFBa0IsR0FBRyxXQUFXO0VBQ3RDLElBQU1DLG1CQUFtQixHQUFHLGtCQUFrQjtFQUM5QyxJQUFNQyxtQkFBbUIsTUFBQXQ3QyxNQUFBLENBQU1tN0Msa0JBQWtCLFFBQUFuN0MsTUFBQSxDQUFLbzdDLGtCQUFrQixTQUFBcDdDLE1BQUEsQ0FBTW03QyxrQkFBa0IsUUFBQW43QyxNQUFBLENBQUtxN0MsbUJBQW1CLENBQUU7RUFDMUgsSUFBTUUsaUJBQWlCLEdBQUcsV0FBVztFQUNyQyxJQUFNQywwQkFBMEIsR0FBRyxrQkFBa0I7RUFDckQsSUFBTUMsU0FBUyxHQUFHO0lBQ2hCNXVCLE1BQU0sRUFBRSxJQUFJO0lBQ1o7SUFDQTZ1QixVQUFVLEVBQUUsY0FBYztJQUMxQkMsWUFBWSxFQUFFLEtBQUs7SUFDbkJ0MEMsTUFBTSxFQUFFLElBQUk7SUFDWnUwQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7RUFDekIsQ0FBQztFQUNELElBQU1DLGFBQWEsR0FBRztJQUNwQmh2QixNQUFNLEVBQUUsZUFBZTtJQUN2QjtJQUNBNnVCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCQyxZQUFZLEVBQUUsU0FBUztJQUN2QnQwQyxNQUFNLEVBQUUsU0FBUztJQUNqQnUwQyxTQUFTLEVBQUU7RUFDYixDQUFDOztFQUVEO0FBQ0Y7QUFDQTtFQUZFLElBSU1FLFNBQVMsMEJBQUFDLGVBQUE7SUFBQWgrQyxTQUFBLENBQUErOUMsU0FBQSxFQUFBQyxlQUFBO0lBQUEsSUFBQUMsUUFBQSxHQUFBLzlDLFlBQUEsQ0FBQTY5QyxTQUFBO0lBQ2IsU0FBQUEsVUFBWXI5QyxPQUFPLEVBQUVpUyxNQUFNLEVBQUU7TUFBQSxJQUFBdXJDLE9BQUE7TUFBQS85QyxlQUFBLE9BQUE0OUMsU0FBQTtNQUMzQkcsT0FBQSxHQUFBRCxRQUFBLENBQUFsNkMsSUFBQSxPQUFNckQsT0FBTyxFQUFFaVMsTUFBTTs7TUFFckI7TUFDQXVyQyxPQUFBLENBQUtDLFlBQVksR0FBRyxJQUFJenRDLEdBQUcsRUFBRTtNQUM3Qnd0QyxPQUFBLENBQUtFLG1CQUFtQixHQUFHLElBQUkxdEMsR0FBRyxFQUFFO01BQ3BDd3RDLE9BQUEsQ0FBS0csWUFBWSxHQUFHNTVDLGdCQUFnQixDQUFDeTVDLE9BQUEsQ0FBSzdwQyxRQUFRLENBQUMsQ0FBQ21mLFNBQVMsS0FBSyxTQUFTLEdBQUcsSUFBSSxHQUFHMHFCLE9BQUEsQ0FBSzdwQyxRQUFRO01BQ2xHNnBDLE9BQUEsQ0FBS0ksYUFBYSxHQUFHLElBQUk7TUFDekJKLE9BQUEsQ0FBS0ssU0FBUyxHQUFHLElBQUk7TUFDckJMLE9BQUEsQ0FBS00sbUJBQW1CLEdBQUc7UUFDekJDLGVBQWUsRUFBRSxDQUFDO1FBQ2xCQyxlQUFlLEVBQUU7TUFDbkIsQ0FBQztNQUNEUixPQUFBLENBQUtTLE9BQU8sRUFBRSxDQUFDLENBQUM7TUFBQSxPQUFBVCxPQUFBO0lBQ2xCOztJQUVBO0lBQUE1OUMsWUFBQSxDQUFBeTlDLFNBQUE7TUFBQXg5QyxHQUFBO01BQUFDLEtBQUE7TUFXQTtNQUNBLFNBQUFtK0MsUUFBQSxFQUFVO1FBQ1IsSUFBSSxDQUFDQyxnQ0FBZ0MsRUFBRTtRQUN2QyxJQUFJLENBQUNDLHdCQUF3QixFQUFFO1FBQy9CLElBQUksSUFBSSxDQUFDTixTQUFTLEVBQUU7VUFDbEIsSUFBSSxDQUFDQSxTQUFTLENBQUNPLFVBQVUsRUFBRTtRQUM3QixDQUFDLE1BQU07VUFDTCxJQUFJLENBQUNQLFNBQVMsR0FBRyxJQUFJLENBQUNRLGVBQWUsRUFBRTtRQUN6QztRQUFDLElBQUFDLFdBQUEsR0FBQXJ6QywwQkFBQSxDQUNxQixJQUFJLENBQUN5eUMsbUJBQW1CLENBQUM1eEMsTUFBTSxFQUFFO1VBQUF5eUMsT0FBQTtRQUFBO1VBQXZELEtBQUFELFdBQUEsQ0FBQW56QyxDQUFBLE1BQUFvekMsT0FBQSxHQUFBRCxXQUFBLENBQUFsekMsQ0FBQSxJQUFBQyxJQUFBLEdBQXlEO1lBQUEsSUFBOUNtekMsT0FBTyxHQUFBRCxPQUFBLENBQUF6K0MsS0FBQTtZQUNoQixJQUFJLENBQUMrOUMsU0FBUyxDQUFDWSxPQUFPLENBQUNELE9BQU8sQ0FBQztVQUNqQztRQUFDLFNBQUFqekMsR0FBQTtVQUFBK3lDLFdBQUEsQ0FBQTl5QyxDQUFBLENBQUFELEdBQUE7UUFBQTtVQUFBK3lDLFdBQUEsQ0FBQTd5QyxDQUFBO1FBQUE7TUFDSDtJQUFDO01BQUE1TCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBaVUsUUFBQSxFQUFVO1FBQ1IsSUFBSSxDQUFDOHBDLFNBQVMsQ0FBQ08sVUFBVSxFQUFFO1FBQzNCLytCLElBQUEsQ0FBQUMsZUFBQSxDQUFBKzlCLFNBQUEsQ0FBQWw2QyxTQUFBLG9CQUFBRSxJQUFBO01BQ0Y7O01BRUE7SUFBQTtNQUFBeEQsR0FBQTtNQUFBQyxLQUFBLEVBQ0EsU0FBQXFTLGtCQUFrQkYsTUFBTSxFQUFFO1FBQ3hCO1FBQ0FBLE1BQU0sQ0FBQ3JKLE1BQU0sR0FBRy9ELFVBQVUsQ0FBQ29OLE1BQU0sQ0FBQ3JKLE1BQU0sQ0FBQyxJQUFJcEksUUFBUSxDQUFDa0csSUFBSTs7UUFFMUQ7UUFDQXVMLE1BQU0sQ0FBQ2dyQyxVQUFVLEdBQUdockMsTUFBTSxDQUFDbWMsTUFBTSxNQUFBN3NCLE1BQUEsQ0FBTTBRLE1BQU0sQ0FBQ21jLE1BQU0sbUJBQWdCbmMsTUFBTSxDQUFDZ3JDLFVBQVU7UUFDckYsSUFBSSxPQUFPaHJDLE1BQU0sQ0FBQ2tyQyxTQUFTLEtBQUssUUFBUSxFQUFFO1VBQ3hDbHJDLE1BQU0sQ0FBQ2tyQyxTQUFTLEdBQUdsckMsTUFBTSxDQUFDa3JDLFNBQVMsQ0FBQzc0QyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUN3UixHQUFHLENBQUMsVUFBQWhXLEtBQUs7WUFBQSxPQUFJcUUsTUFBTSxDQUFDQyxVQUFVLENBQUN0RSxLQUFLLENBQUM7VUFBQSxFQUFDO1FBQ3ZGO1FBQ0EsT0FBT21TLE1BQU07TUFDZjtJQUFDO01BQUFwUyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBcStDLHlCQUFBLEVBQTJCO1FBQUEsSUFBQU8sT0FBQTtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDOXFDLE9BQU8sQ0FBQ3NwQyxZQUFZLEVBQUU7VUFDOUI7UUFDRjs7UUFFQTtRQUNBdnlDLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ2dKLE9BQU8sQ0FBQ2hMLE1BQU0sRUFBRXV6QyxXQUFXLENBQUM7UUFDbER4eEMsWUFBWSxDQUFDK0MsRUFBRSxDQUFDLElBQUksQ0FBQ2tHLE9BQU8sQ0FBQ2hMLE1BQU0sRUFBRXV6QyxXQUFXLEVBQUVLLHFCQUFxQixFQUFFLFVBQUFqeUMsS0FBSyxFQUFJO1VBQ2hGLElBQU1vMEMsaUJBQWlCLEdBQUdELE9BQUksQ0FBQ2hCLG1CQUFtQixDQUFDNXRDLEdBQUcsQ0FBQ3ZGLEtBQUssQ0FBQzNCLE1BQU0sQ0FBQzhvQixJQUFJLENBQUM7VUFDekUsSUFBSWl0QixpQkFBaUIsRUFBRTtZQUNyQnAwQyxLQUFLLENBQUM2RSxjQUFjLEVBQUU7WUFDdEIsSUFBTWpKLElBQUksR0FBR3U0QyxPQUFJLENBQUNmLFlBQVksSUFBSWw3QyxNQUFNO1lBQ3hDLElBQU04bkIsTUFBTSxHQUFHbzBCLGlCQUFpQixDQUFDOXpCLFNBQVMsR0FBRzZ6QixPQUFJLENBQUMvcUMsUUFBUSxDQUFDa1gsU0FBUztZQUNwRSxJQUFJMWtCLElBQUksQ0FBQ3k0QyxRQUFRLEVBQUU7Y0FDakJ6NEMsSUFBSSxDQUFDeTRDLFFBQVEsQ0FBQztnQkFDWmw1QixHQUFHLEVBQUU2RSxNQUFNO2dCQUNYczBCLFFBQVEsRUFBRTtjQUNaLENBQUMsQ0FBQztjQUNGO1lBQ0Y7O1lBRUE7WUFDQTE0QyxJQUFJLENBQUM0ckIsU0FBUyxHQUFHeEgsTUFBTTtVQUN6QjtRQUNGLENBQUMsQ0FBQztNQUNKO0lBQUM7TUFBQTFxQixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBdStDLGdCQUFBLEVBQWtCO1FBQUEsSUFBQVMsT0FBQTtRQUNoQixJQUFNcjJCLE9BQU8sR0FBRztVQUNkdGlCLElBQUksRUFBRSxJQUFJLENBQUN3M0MsWUFBWTtVQUN2QlIsU0FBUyxFQUFFLElBQUksQ0FBQ3ZwQyxPQUFPLENBQUN1cEMsU0FBUztVQUNqQ0YsVUFBVSxFQUFFLElBQUksQ0FBQ3JwQyxPQUFPLENBQUNxcEM7UUFDM0IsQ0FBQztRQUNELE9BQU8sSUFBSThCLG9CQUFvQixDQUFDLFVBQUF6eEMsT0FBTztVQUFBLE9BQUl3eEMsT0FBSSxDQUFDRSxpQkFBaUIsQ0FBQzF4QyxPQUFPLENBQUM7UUFBQSxHQUFFbWIsT0FBTyxDQUFDO01BQ3RGOztNQUVBO0lBQUE7TUFBQTVvQixHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBay9DLGtCQUFrQjF4QyxPQUFPLEVBQUU7UUFBQSxJQUFBMnhDLE9BQUE7UUFDekIsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFHeEwsS0FBSztVQUFBLE9BQUl1TCxPQUFJLENBQUN4QixZQUFZLENBQUMzdEMsR0FBRyxLQUFBdk8sTUFBQSxDQUFLbXlDLEtBQUssQ0FBQzlxQyxNQUFNLENBQUM5RixFQUFFLEVBQUc7UUFBQTtRQUMzRSxJQUFNdW1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFHcUssS0FBSyxFQUFJO1VBQ3hCdUwsT0FBSSxDQUFDbkIsbUJBQW1CLENBQUNDLGVBQWUsR0FBR3JLLEtBQUssQ0FBQzlxQyxNQUFNLENBQUNpaUIsU0FBUztVQUNqRW8wQixPQUFJLENBQUNFLFFBQVEsQ0FBQ0QsYUFBYSxDQUFDeEwsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNELElBQU1zSyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUNMLFlBQVksSUFBSW45QyxRQUFRLENBQUN3RixlQUFlLEVBQUUrckIsU0FBUztRQUNqRixJQUFNcXRCLGVBQWUsR0FBR3BCLGVBQWUsSUFBSSxJQUFJLENBQUNGLG1CQUFtQixDQUFDRSxlQUFlO1FBQ25GLElBQUksQ0FBQ0YsbUJBQW1CLENBQUNFLGVBQWUsR0FBR0EsZUFBZTtRQUFDLElBQUFxQixXQUFBLEdBQUFwMEMsMEJBQUEsQ0FDdkNxQyxPQUFPO1VBQUFneUMsT0FBQTtRQUFBO1VBQTNCLEtBQUFELFdBQUEsQ0FBQWwwQyxDQUFBLE1BQUFtMEMsT0FBQSxHQUFBRCxXQUFBLENBQUFqMEMsQ0FBQSxJQUFBQyxJQUFBLEdBQTZCO1lBQUEsSUFBbEJxb0MsS0FBSyxHQUFBNEwsT0FBQSxDQUFBeC9DLEtBQUE7WUFDZCxJQUFJLENBQUM0ekMsS0FBSyxDQUFDNkwsY0FBYyxFQUFFO2NBQ3pCLElBQUksQ0FBQzNCLGFBQWEsR0FBRyxJQUFJO2NBQ3pCLElBQUksQ0FBQzRCLGlCQUFpQixDQUFDTixhQUFhLENBQUN4TCxLQUFLLENBQUMsQ0FBQztjQUM1QztZQUNGO1lBQ0EsSUFBTStMLHdCQUF3QixHQUFHL0wsS0FBSyxDQUFDOXFDLE1BQU0sQ0FBQ2lpQixTQUFTLElBQUksSUFBSSxDQUFDaXpCLG1CQUFtQixDQUFDQyxlQUFlO1lBQ25HO1lBQ0EsSUFBSXFCLGVBQWUsSUFBSUssd0JBQXdCLEVBQUU7Y0FDL0NwVyxRQUFRLENBQUNxSyxLQUFLLENBQUM7Y0FDZjtjQUNBLElBQUksQ0FBQ3NLLGVBQWUsRUFBRTtnQkFDcEI7Y0FDRjtjQUNBO1lBQ0Y7O1lBRUE7WUFDQSxJQUFJLENBQUNvQixlQUFlLElBQUksQ0FBQ0ssd0JBQXdCLEVBQUU7Y0FDakRwVyxRQUFRLENBQUNxSyxLQUFLLENBQUM7WUFDakI7VUFDRjtRQUFDLFNBQUFub0MsR0FBQTtVQUFBOHpDLFdBQUEsQ0FBQTd6QyxDQUFBLENBQUFELEdBQUE7UUFBQTtVQUFBOHpDLFdBQUEsQ0FBQTV6QyxDQUFBO1FBQUE7TUFDSDtJQUFDO01BQUE1TCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBbytDLGlDQUFBLEVBQW1DO1FBQ2pDLElBQUksQ0FBQ1QsWUFBWSxHQUFHLElBQUl6dEMsR0FBRyxFQUFFO1FBQzdCLElBQUksQ0FBQzB0QyxtQkFBbUIsR0FBRyxJQUFJMXRDLEdBQUcsRUFBRTtRQUNwQyxJQUFNMHZDLFdBQVcsR0FBRzdxQyxjQUFjLENBQUM5SSxJQUFJLENBQUN5d0MscUJBQXFCLEVBQUUsSUFBSSxDQUFDNW9DLE9BQU8sQ0FBQ2hMLE1BQU0sQ0FBQztRQUFDLElBQUErMkMsV0FBQSxHQUFBMTBDLDBCQUFBLENBQy9EeTBDLFdBQVc7VUFBQUUsT0FBQTtRQUFBO1VBQWhDLEtBQUFELFdBQUEsQ0FBQXgwQyxDQUFBLE1BQUF5MEMsT0FBQSxHQUFBRCxXQUFBLENBQUF2MEMsQ0FBQSxJQUFBQyxJQUFBLEdBQWtDO1lBQUEsSUFBdkJ3MEMsTUFBTSxHQUFBRCxPQUFBLENBQUE5L0MsS0FBQTtZQUNmO1lBQ0EsSUFBSSxDQUFDKy9DLE1BQU0sQ0FBQ251QixJQUFJLElBQUluc0IsVUFBVSxDQUFDczZDLE1BQU0sQ0FBQyxFQUFFO2NBQ3RDO1lBQ0Y7WUFDQSxJQUFNbEIsaUJBQWlCLEdBQUc5cEMsY0FBYyxDQUFDRyxPQUFPLENBQUM2cUMsTUFBTSxDQUFDbnVCLElBQUksRUFBRSxJQUFJLENBQUMvZCxRQUFRLENBQUM7O1lBRTVFO1lBQ0EsSUFBSTVPLFNBQVMsQ0FBQzQ1QyxpQkFBaUIsQ0FBQyxFQUFFO2NBQ2hDLElBQUksQ0FBQ2xCLFlBQVksQ0FBQ3Z0QyxHQUFHLENBQUMydkMsTUFBTSxDQUFDbnVCLElBQUksRUFBRW11QixNQUFNLENBQUM7Y0FDMUMsSUFBSSxDQUFDbkMsbUJBQW1CLENBQUN4dEMsR0FBRyxDQUFDMnZDLE1BQU0sQ0FBQ251QixJQUFJLEVBQUVpdEIsaUJBQWlCLENBQUM7WUFDOUQ7VUFDRjtRQUFDLFNBQUFwekMsR0FBQTtVQUFBbzBDLFdBQUEsQ0FBQW4wQyxDQUFBLENBQUFELEdBQUE7UUFBQTtVQUFBbzBDLFdBQUEsQ0FBQWwwQyxDQUFBO1FBQUE7TUFDSDtJQUFDO01BQUE1TCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBcS9DLFNBQVN2MkMsTUFBTSxFQUFFO1FBQ2YsSUFBSSxJQUFJLENBQUNnMUMsYUFBYSxLQUFLaDFDLE1BQU0sRUFBRTtVQUNqQztRQUNGO1FBQ0EsSUFBSSxDQUFDNDJDLGlCQUFpQixDQUFDLElBQUksQ0FBQzVyQyxPQUFPLENBQUNoTCxNQUFNLENBQUM7UUFDM0MsSUFBSSxDQUFDZzFDLGFBQWEsR0FBR2gxQyxNQUFNO1FBQzNCQSxNQUFNLENBQUNsRCxTQUFTLENBQUMrVSxHQUFHLENBQUM2aEMsbUJBQW1CLENBQUM7UUFDekMsSUFBSSxDQUFDd0QsZ0JBQWdCLENBQUNsM0MsTUFBTSxDQUFDO1FBQzdCK0IsWUFBWSxDQUFDK0QsT0FBTyxDQUFDLElBQUksQ0FBQ2lGLFFBQVEsRUFBRXVvQyxjQUFjLEVBQUU7VUFDbER0dkMsYUFBYSxFQUFFaEU7UUFDakIsQ0FBQyxDQUFDO01BQ0o7SUFBQztNQUFBL0ksR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWdnRCxpQkFBaUJsM0MsTUFBTSxFQUFFO1FBQ3ZCO1FBQ0EsSUFBSUEsTUFBTSxDQUFDbEQsU0FBUyxDQUFDQyxRQUFRLENBQUMwMkMsd0JBQXdCLENBQUMsRUFBRTtVQUN2RHhuQyxjQUFjLENBQUNHLE9BQU8sQ0FBQytuQywwQkFBMEIsRUFBRW4wQyxNQUFNLENBQUN4RCxPQUFPLENBQUMwM0MsaUJBQWlCLENBQUMsQ0FBQyxDQUFDcDNDLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQzZoQyxtQkFBbUIsQ0FBQztVQUN4SDtRQUNGO1FBQUMsSUFBQXlELFdBQUEsR0FBQTkwQywwQkFBQSxDQUN1QjRKLGNBQWMsQ0FBQ1EsT0FBTyxDQUFDek0sTUFBTSxFQUFFNnpDLHVCQUF1QixDQUFDO1VBQUF1RCxPQUFBO1FBQUE7VUFBL0UsS0FBQUQsV0FBQSxDQUFBNTBDLENBQUEsTUFBQTYwQyxPQUFBLEdBQUFELFdBQUEsQ0FBQTMwQyxDQUFBLElBQUFDLElBQUEsR0FBaUY7WUFBQSxJQUF0RTQwQyxTQUFTLEdBQUFELE9BQUEsQ0FBQWxnRCxLQUFBO1lBQ2xCO1lBQ0E7WUFBQSxJQUFBb2dELFdBQUEsR0FBQWoxQywwQkFBQSxDQUNtQjRKLGNBQWMsQ0FBQ1UsSUFBSSxDQUFDMHFDLFNBQVMsRUFBRXBELG1CQUFtQixDQUFDO2NBQUFzRCxPQUFBO1lBQUE7Y0FBdEUsS0FBQUQsV0FBQSxDQUFBLzBDLENBQUEsTUFBQWcxQyxPQUFBLEdBQUFELFdBQUEsQ0FBQTkwQyxDQUFBLElBQUFDLElBQUEsR0FBd0U7Z0JBQUEsSUFBN0RzZSxJQUFJLEdBQUF3MkIsT0FBQSxDQUFBcmdELEtBQUE7Z0JBQ2I2cEIsSUFBSSxDQUFDamtCLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQzZoQyxtQkFBbUIsQ0FBQztjQUN6QztZQUFDLFNBQUEvd0MsR0FBQTtjQUFBMjBDLFdBQUEsQ0FBQTEwQyxDQUFBLENBQUFELEdBQUE7WUFBQTtjQUFBMjBDLFdBQUEsQ0FBQXowQyxDQUFBO1lBQUE7VUFDSDtRQUFDLFNBQUFGLEdBQUE7VUFBQXcwQyxXQUFBLENBQUF2MEMsQ0FBQSxDQUFBRCxHQUFBO1FBQUE7VUFBQXcwQyxXQUFBLENBQUF0MEMsQ0FBQTtRQUFBO01BQ0g7SUFBQztNQUFBNUwsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTAvQyxrQkFBa0IxOEIsTUFBTSxFQUFFO1FBQ3hCQSxNQUFNLENBQUNwZCxTQUFTLENBQUMrSyxNQUFNLENBQUM2ckMsbUJBQW1CLENBQUM7UUFDNUMsSUFBTThELFdBQVcsR0FBR3ZyQyxjQUFjLENBQUM5SSxJQUFJLElBQUF4SyxNQUFBLENBQUlpN0MscUJBQXFCLE9BQUFqN0MsTUFBQSxDQUFJKzZDLG1CQUFtQixHQUFJeDVCLE1BQU0sQ0FBQztRQUFDLElBQUF1OUIsV0FBQSxHQUFBcDFDLDBCQUFBLENBQ2hGbTFDLFdBQVc7VUFBQUUsT0FBQTtRQUFBO1VBQTlCLEtBQUFELFdBQUEsQ0FBQWwxQyxDQUFBLE1BQUFtMUMsT0FBQSxHQUFBRCxXQUFBLENBQUFqMUMsQ0FBQSxJQUFBQyxJQUFBLEdBQWdDO1lBQUEsSUFBckJrYyxJQUFJLEdBQUErNEIsT0FBQSxDQUFBeGdELEtBQUE7WUFDYnluQixJQUFJLENBQUM3aEIsU0FBUyxDQUFDK0ssTUFBTSxDQUFDNnJDLG1CQUFtQixDQUFDO1VBQzVDO1FBQUMsU0FBQS93QyxHQUFBO1VBQUE4MEMsV0FBQSxDQUFBNzBDLENBQUEsQ0FBQUQsR0FBQTtRQUFBO1VBQUE4MEMsV0FBQSxDQUFBNTBDLENBQUE7UUFBQTtNQUNIOztNQUVBO0lBQUE7TUFBQTVMLEdBQUE7TUFBQWlRLEdBQUEsRUFoS0EsU0FBQUEsSUFBQSxFQUFxQjtRQUNuQixPQUFPa3RDLFNBQVM7TUFDbEI7SUFBQztNQUFBbjlDLEdBQUE7TUFBQWlRLEdBQUEsRUFDRCxTQUFBQSxJQUFBLEVBQXlCO1FBQ3ZCLE9BQU9zdEMsYUFBYTtNQUN0QjtJQUFDO01BQUF2OUMsR0FBQTtNQUFBaVEsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBa0I7UUFDaEIsT0FBT2dzQyxNQUFNO01BQ2Y7SUFBQztNQUFBajhDLEdBQUE7TUFBQUMsS0FBQSxFQXlKRCxTQUFBOEgsZ0JBQXVCcUssTUFBTSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxDQUFDc0YsSUFBSSxDQUFDLFlBQVk7VUFDM0IsSUFBTUMsSUFBSSxHQUFHNmxDLFNBQVMsQ0FBQzdvQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUV2QyxNQUFNLENBQUM7VUFDeEQsSUFBSSxPQUFPQSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCO1VBQ0Y7VUFDQSxJQUFJdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLEtBQUtoUCxTQUFTLElBQUlnUCxNQUFNLENBQUNqRSxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUlpRSxNQUFNLEtBQUssYUFBYSxFQUFFO1lBQ3BGLE1BQU0sSUFBSWtCLFNBQVMsc0JBQUE1UixNQUFBLENBQXFCMFEsTUFBTSxRQUFJO1VBQ3BEO1VBQ0F1RixJQUFJLENBQUN2RixNQUFNLENBQUMsRUFBRTtRQUNoQixDQUFDLENBQUM7TUFDSjtJQUFDO0lBQUEsT0FBQW9yQyxTQUFBO0VBQUEsRUE5THFCOXBDLGFBQWE7RUFpTXJDO0FBQ0Y7QUFDQTtFQUVFNUksWUFBWSxDQUFDK0MsRUFBRSxDQUFDakwsTUFBTSxFQUFFMjVDLHFCQUFxQixFQUFFLFlBQU07SUFBQSxJQUFBbUUsV0FBQSxHQUFBdDFDLDBCQUFBLENBQ2pDNEosY0FBYyxDQUFDOUksSUFBSSxDQUFDd3dDLGlCQUFpQixDQUFDO01BQUFpRSxPQUFBO0lBQUE7TUFBeEQsS0FBQUQsV0FBQSxDQUFBcDFDLENBQUEsTUFBQXExQyxPQUFBLEdBQUFELFdBQUEsQ0FBQW4xQyxDQUFBLElBQUFDLElBQUEsR0FBMEQ7UUFBQSxJQUEvQ28xQyxHQUFHLEdBQUFELE9BQUEsQ0FBQTFnRCxLQUFBO1FBQ1p1OUMsU0FBUyxDQUFDN29DLG1CQUFtQixDQUFDaXNDLEdBQUcsQ0FBQztNQUNwQztJQUFDLFNBQUFsMUMsR0FBQTtNQUFBZzFDLFdBQUEsQ0FBQS8wQyxDQUFBLENBQUFELEdBQUE7SUFBQTtNQUFBZzFDLFdBQUEsQ0FBQTkwQyxDQUFBO0lBQUE7RUFDSCxDQUFDLENBQUM7O0VBRUY7QUFDRjtBQUNBOztFQUVFcEUsa0JBQWtCLENBQUNnMkMsU0FBUyxDQUFDOztFQUU3QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLElBQU1xRCxNQUFNLEdBQUcsS0FBSztFQUNwQixJQUFNQyxVQUFVLEdBQUcsUUFBUTtFQUMzQixJQUFNQyxXQUFXLE9BQUFyL0MsTUFBQSxDQUFPby9DLFVBQVUsQ0FBRTtFQUNwQyxJQUFNRSxZQUFZLFVBQUF0L0MsTUFBQSxDQUFVcS9DLFdBQVcsQ0FBRTtFQUN6QyxJQUFNRSxjQUFjLFlBQUF2L0MsTUFBQSxDQUFZcS9DLFdBQVcsQ0FBRTtFQUM3QyxJQUFNRyxZQUFZLFVBQUF4L0MsTUFBQSxDQUFVcS9DLFdBQVcsQ0FBRTtFQUN6QyxJQUFNSSxhQUFhLFdBQUF6L0MsTUFBQSxDQUFXcS9DLFdBQVcsQ0FBRTtFQUMzQyxJQUFNSyxvQkFBb0IsV0FBQTEvQyxNQUFBLENBQVdxL0MsV0FBVyxDQUFFO0VBQ2xELElBQU1NLGFBQWEsYUFBQTMvQyxNQUFBLENBQWFxL0MsV0FBVyxDQUFFO0VBQzdDLElBQU1PLG1CQUFtQixVQUFBNS9DLE1BQUEsQ0FBVXEvQyxXQUFXLENBQUU7RUFDaEQsSUFBTVEsY0FBYyxHQUFHLFdBQVc7RUFDbEMsSUFBTUMsZUFBZSxHQUFHLFlBQVk7RUFDcEMsSUFBTUMsWUFBWSxHQUFHLFNBQVM7RUFDOUIsSUFBTUMsY0FBYyxHQUFHLFdBQVc7RUFDbEMsSUFBTUMsaUJBQWlCLEdBQUcsUUFBUTtFQUNsQyxJQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0VBQ2hDLElBQU1DLGlCQUFpQixHQUFHLE1BQU07RUFDaEMsSUFBTUMsY0FBYyxHQUFHLFVBQVU7RUFDakMsSUFBTUMsd0JBQXdCLEdBQUcsa0JBQWtCO0VBQ25ELElBQU1DLHNCQUFzQixHQUFHLGdCQUFnQjtFQUMvQyxJQUFNQyw0QkFBNEIsR0FBRyx3QkFBd0I7RUFDN0QsSUFBTUMsa0JBQWtCLEdBQUcscUNBQXFDO0VBQ2hFLElBQU1DLGNBQWMsR0FBRyw2QkFBNkI7RUFDcEQsSUFBTUMsY0FBYyxlQUFBMWdELE1BQUEsQ0FBZXVnRCw0QkFBNEIsd0JBQUF2Z0QsTUFBQSxDQUFxQnVnRCw0QkFBNEIsc0JBQUF2Z0QsTUFBQSxDQUFpQnVnRCw0QkFBNEIsQ0FBRTtFQUMvSixJQUFNSSxvQkFBb0IsR0FBRywwRUFBMEUsQ0FBQyxDQUFDO0VBQ3pHLElBQU1DLG1CQUFtQixNQUFBNWdELE1BQUEsQ0FBTTBnRCxjQUFjLFFBQUExZ0QsTUFBQSxDQUFLMmdELG9CQUFvQixDQUFFO0VBQ3hFLElBQU1FLDJCQUEyQixPQUFBN2dELE1BQUEsQ0FBT2lnRCxpQkFBaUIsaUNBQUFqZ0QsTUFBQSxDQUE0QmlnRCxpQkFBaUIsa0NBQUFqZ0QsTUFBQSxDQUE2QmlnRCxpQkFBaUIsOEJBQXlCOztFQUU3SztBQUNGO0FBQ0E7RUFGRSxJQUlNYSxHQUFHLDBCQUFBQyxnQkFBQTtJQUFBaGpELFNBQUEsQ0FBQStpRCxHQUFBLEVBQUFDLGdCQUFBO0lBQUEsSUFBQUMsUUFBQSxHQUFBL2lELFlBQUEsQ0FBQTZpRCxHQUFBO0lBQ1AsU0FBQUEsSUFBWXJpRCxPQUFPLEVBQUU7TUFBQSxJQUFBd2lELE9BQUE7TUFBQS9pRCxlQUFBLE9BQUE0aUQsR0FBQTtNQUNuQkcsT0FBQSxHQUFBRCxRQUFBLENBQUFsL0MsSUFBQSxPQUFNckQsT0FBTztNQUNid2lELE9BQUEsQ0FBSzNmLE9BQU8sR0FBRzJmLE9BQUEsQ0FBSzd1QyxRQUFRLENBQUN2TyxPQUFPLENBQUMyOEMsa0JBQWtCLENBQUM7TUFDeEQsSUFBSSxDQUFDUyxPQUFBLENBQUszZixPQUFPLEVBQUU7UUFDakIsT0FBQW52QiwwQkFBQSxDQUFBOHVDLE9BQUE7UUFDQTtRQUNBO01BQ0Y7O01BRUE7TUFDQUEsT0FBQSxDQUFLQyxxQkFBcUIsQ0FBQ0QsT0FBQSxDQUFLM2YsT0FBTyxFQUFFMmYsT0FBQSxDQUFLRSxZQUFZLEVBQUUsQ0FBQztNQUM3RC8zQyxZQUFZLENBQUMrQyxFQUFFLENBQUM4MEMsT0FBQSxDQUFLN3VDLFFBQVEsRUFBRXV0QyxhQUFhLEVBQUUsVUFBQTMyQyxLQUFLO1FBQUEsT0FBSWk0QyxPQUFBLENBQUsvaUMsUUFBUSxDQUFDbFYsS0FBSyxDQUFDO01BQUEsRUFBQztNQUFDLE9BQUFpNEMsT0FBQTtJQUMvRTs7SUFFQTtJQUFBNWlELFlBQUEsQ0FBQXlpRCxHQUFBO01BQUF4aUQsR0FBQTtNQUFBQyxLQUFBO01BS0E7TUFDQSxTQUFBa2tCLEtBQUEsRUFBTztRQUNMO1FBQ0EsSUFBTTIrQixTQUFTLEdBQUcsSUFBSSxDQUFDaHZDLFFBQVE7UUFDL0IsSUFBSSxJQUFJLENBQUNpdkMsYUFBYSxDQUFDRCxTQUFTLENBQUMsRUFBRTtVQUNqQztRQUNGOztRQUVBO1FBQ0EsSUFBTUUsTUFBTSxHQUFHLElBQUksQ0FBQ0MsY0FBYyxFQUFFO1FBQ3BDLElBQU10ZixTQUFTLEdBQUdxZixNQUFNLEdBQUdsNEMsWUFBWSxDQUFDK0QsT0FBTyxDQUFDbTBDLE1BQU0sRUFBRWhDLFlBQVksRUFBRTtVQUNwRWowQyxhQUFhLEVBQUUrMUM7UUFDakIsQ0FBQyxDQUFDLEdBQUcsSUFBSTtRQUNULElBQU0xZixTQUFTLEdBQUd0NEIsWUFBWSxDQUFDK0QsT0FBTyxDQUFDaTBDLFNBQVMsRUFBRTVCLFlBQVksRUFBRTtVQUM5RG4wQyxhQUFhLEVBQUVpMkM7UUFDakIsQ0FBQyxDQUFDO1FBQ0YsSUFBSTVmLFNBQVMsQ0FBQ24wQixnQkFBZ0IsSUFBSTAwQixTQUFTLElBQUlBLFNBQVMsQ0FBQzEwQixnQkFBZ0IsRUFBRTtVQUN6RTtRQUNGO1FBQ0EsSUFBSSxDQUFDaTBDLFdBQVcsQ0FBQ0YsTUFBTSxFQUFFRixTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDSyxTQUFTLENBQUNMLFNBQVMsRUFBRUUsTUFBTSxDQUFDO01BQ25DOztNQUVBO0lBQUE7TUFBQWhqRCxHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBa2pELFVBQVVoakQsT0FBTyxFQUFFaWpELFdBQVcsRUFBRTtRQUFBLElBQUFDLE9BQUE7UUFDOUIsSUFBSSxDQUFDbGpELE9BQU8sRUFBRTtVQUNaO1FBQ0Y7UUFDQUEsT0FBTyxDQUFDMEYsU0FBUyxDQUFDK1UsR0FBRyxDQUFDK21DLGlCQUFpQixDQUFDO1FBQ3hDLElBQUksQ0FBQ3dCLFNBQVMsQ0FBQ251QyxjQUFjLENBQUNxQixzQkFBc0IsQ0FBQ2xXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFaEUsSUFBTTBrQixRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO1VBQ3JCLElBQUkxa0IsT0FBTyxDQUFDOEYsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUMxQzlGLE9BQU8sQ0FBQzBGLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQ2luQyxpQkFBaUIsQ0FBQztZQUN4QztVQUNGO1VBQ0ExaEQsT0FBTyxDQUFDb1IsZUFBZSxDQUFDLFVBQVUsQ0FBQztVQUNuQ3BSLE9BQU8sQ0FBQ2tSLFlBQVksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDO1VBQzNDZ3lDLE9BQUksQ0FBQ0MsZUFBZSxDQUFDbmpELE9BQU8sRUFBRSxJQUFJLENBQUM7VUFDbkMySyxZQUFZLENBQUMrRCxPQUFPLENBQUMxTyxPQUFPLEVBQUVnaEQsYUFBYSxFQUFFO1lBQzNDcDBDLGFBQWEsRUFBRXEyQztVQUNqQixDQUFDLENBQUM7UUFDSixDQUFDO1FBQ0QsSUFBSSxDQUFDNXVDLGNBQWMsQ0FBQ3FRLFFBQVEsRUFBRTFrQixPQUFPLEVBQUVBLE9BQU8sQ0FBQzBGLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDODdDLGlCQUFpQixDQUFDLENBQUM7TUFDdkY7SUFBQztNQUFBNWhELEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFpakQsWUFBWS9pRCxPQUFPLEVBQUVpakQsV0FBVyxFQUFFO1FBQUEsSUFBQUcsT0FBQTtRQUNoQyxJQUFJLENBQUNwakQsT0FBTyxFQUFFO1VBQ1o7UUFDRjtRQUNBQSxPQUFPLENBQUMwRixTQUFTLENBQUMrSyxNQUFNLENBQUMrd0MsaUJBQWlCLENBQUM7UUFDM0N4aEQsT0FBTyxDQUFDbXZDLElBQUksRUFBRTtRQUNkLElBQUksQ0FBQzRULFdBQVcsQ0FBQ2x1QyxjQUFjLENBQUNxQixzQkFBc0IsQ0FBQ2xXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFbEUsSUFBTTBrQixRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO1VBQ3JCLElBQUkxa0IsT0FBTyxDQUFDOEYsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUMxQzlGLE9BQU8sQ0FBQzBGLFNBQVMsQ0FBQytLLE1BQU0sQ0FBQ2l4QyxpQkFBaUIsQ0FBQztZQUMzQztVQUNGO1VBQ0ExaEQsT0FBTyxDQUFDa1IsWUFBWSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7VUFDNUNsUixPQUFPLENBQUNrUixZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztVQUN0Q2t5QyxPQUFJLENBQUNELGVBQWUsQ0FBQ25qRCxPQUFPLEVBQUUsS0FBSyxDQUFDO1VBQ3BDMkssWUFBWSxDQUFDK0QsT0FBTyxDQUFDMU8sT0FBTyxFQUFFOGdELGNBQWMsRUFBRTtZQUM1Q2wwQyxhQUFhLEVBQUVxMkM7VUFDakIsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUNELElBQUksQ0FBQzV1QyxjQUFjLENBQUNxUSxRQUFRLEVBQUUxa0IsT0FBTyxFQUFFQSxPQUFPLENBQUMwRixTQUFTLENBQUNDLFFBQVEsQ0FBQzg3QyxpQkFBaUIsQ0FBQyxDQUFDO01BQ3ZGO0lBQUM7TUFBQTVoRCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBMmYsU0FBU2xWLEtBQUssRUFBRTtRQUNkLElBQUksQ0FBQyxDQUFDNjJDLGNBQWMsRUFBRUMsZUFBZSxFQUFFQyxZQUFZLEVBQUVDLGNBQWMsQ0FBQyxDQUFDOXpDLFFBQVEsQ0FBQ2xELEtBQUssQ0FBQzFLLEdBQUcsQ0FBQyxFQUFFO1VBQ3hGO1FBQ0Y7UUFDQTBLLEtBQUssQ0FBQzI2QixlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCMzZCLEtBQUssQ0FBQzZFLGNBQWMsRUFBRTtRQUN0QixJQUFNcVIsTUFBTSxHQUFHLENBQUM0Z0MsZUFBZSxFQUFFRSxjQUFjLENBQUMsQ0FBQzl6QyxRQUFRLENBQUNsRCxLQUFLLENBQUMxSyxHQUFHLENBQUM7UUFDcEUsSUFBTXdqRCxpQkFBaUIsR0FBR3Q2QyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMyNUMsWUFBWSxFQUFFLENBQUNqeEMsTUFBTSxDQUFDLFVBQUF6UixPQUFPO1VBQUEsT0FBSSxDQUFDdUYsVUFBVSxDQUFDdkYsT0FBTyxDQUFDO1FBQUEsRUFBQyxFQUFFdUssS0FBSyxDQUFDM0IsTUFBTSxFQUFFNlgsTUFBTSxFQUFFLElBQUksQ0FBQztRQUN2SSxJQUFJNGlDLGlCQUFpQixFQUFFO1VBQ3JCQSxpQkFBaUIsQ0FBQy9mLEtBQUssQ0FBQztZQUN0QmdnQixhQUFhLEVBQUU7VUFDakIsQ0FBQyxDQUFDO1VBQ0ZqQixHQUFHLENBQUM3dEMsbUJBQW1CLENBQUM2dUMsaUJBQWlCLENBQUMsQ0FBQ3IvQixJQUFJLEVBQUU7UUFDbkQ7TUFDRjtJQUFDO01BQUFua0IsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTRpRCxhQUFBLEVBQWU7UUFDYjtRQUNBLE9BQU83dEMsY0FBYyxDQUFDOUksSUFBSSxDQUFDbzJDLG1CQUFtQixFQUFFLElBQUksQ0FBQ3RmLE9BQU8sQ0FBQztNQUMvRDtJQUFDO01BQUFoakMsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWdqRCxlQUFBLEVBQWlCO1FBQUEsSUFBQVMsT0FBQTtRQUNmLE9BQU8sSUFBSSxDQUFDYixZQUFZLEVBQUUsQ0FBQzMyQyxJQUFJLENBQUMsVUFBQW9KLEtBQUs7VUFBQSxPQUFJb3VDLE9BQUksQ0FBQ1gsYUFBYSxDQUFDenRDLEtBQUssQ0FBQztRQUFBLEVBQUMsSUFBSSxJQUFJO01BQzdFO0lBQUM7TUFBQXRWLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUEyaUQsc0JBQXNCMy9CLE1BQU0sRUFBRTdOLFFBQVEsRUFBRTtRQUN0QyxJQUFJLENBQUN1dUMsd0JBQXdCLENBQUMxZ0MsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7UUFBQyxJQUFBMmdDLFdBQUEsR0FBQXg0QywwQkFBQSxDQUNyQ2dLLFFBQVE7VUFBQXl1QyxPQUFBO1FBQUE7VUFBNUIsS0FBQUQsV0FBQSxDQUFBdDRDLENBQUEsTUFBQXU0QyxPQUFBLEdBQUFELFdBQUEsQ0FBQXI0QyxDQUFBLElBQUFDLElBQUEsR0FBOEI7WUFBQSxJQUFuQjhKLEtBQUssR0FBQXV1QyxPQUFBLENBQUE1akQsS0FBQTtZQUNkLElBQUksQ0FBQzZqRCw0QkFBNEIsQ0FBQ3h1QyxLQUFLLENBQUM7VUFDMUM7UUFBQyxTQUFBNUosR0FBQTtVQUFBazRDLFdBQUEsQ0FBQWo0QyxDQUFBLENBQUFELEdBQUE7UUFBQTtVQUFBazRDLFdBQUEsQ0FBQWg0QyxDQUFBO1FBQUE7TUFDSDtJQUFDO01BQUE1TCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBNmpELDZCQUE2Qnh1QyxLQUFLLEVBQUU7UUFDbENBLEtBQUssR0FBRyxJQUFJLENBQUN5dUMsZ0JBQWdCLENBQUN6dUMsS0FBSyxDQUFDO1FBQ3BDLElBQU0wdUMsUUFBUSxHQUFHLElBQUksQ0FBQ2pCLGFBQWEsQ0FBQ3p0QyxLQUFLLENBQUM7UUFDMUMsSUFBTTJ1QyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQzV1QyxLQUFLLENBQUM7UUFDOUNBLEtBQUssQ0FBQ2pFLFlBQVksQ0FBQyxlQUFlLEVBQUUyeUMsUUFBUSxDQUFDO1FBQzdDLElBQUlDLFNBQVMsS0FBSzN1QyxLQUFLLEVBQUU7VUFDdkIsSUFBSSxDQUFDcXVDLHdCQUF3QixDQUFDTSxTQUFTLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQztRQUNsRTtRQUNBLElBQUksQ0FBQ0QsUUFBUSxFQUFFO1VBQ2IxdUMsS0FBSyxDQUFDakUsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7UUFDdEM7UUFDQSxJQUFJLENBQUNzeUMsd0JBQXdCLENBQUNydUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7O1FBRW5EO1FBQ0EsSUFBSSxDQUFDNnVDLGtDQUFrQyxDQUFDN3VDLEtBQUssQ0FBQztNQUNoRDtJQUFDO01BQUF0VixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBa2tELG1DQUFtQzd1QyxLQUFLLEVBQUU7UUFDeEMsSUFBTXZNLE1BQU0sR0FBR2lNLGNBQWMsQ0FBQ3FCLHNCQUFzQixDQUFDZixLQUFLLENBQUM7UUFDM0QsSUFBSSxDQUFDdk0sTUFBTSxFQUFFO1VBQ1g7UUFDRjtRQUNBLElBQUksQ0FBQzQ2Qyx3QkFBd0IsQ0FBQzU2QyxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQztRQUN6RCxJQUFJdU0sS0FBSyxDQUFDclMsRUFBRSxFQUFFO1VBQ1osSUFBSSxDQUFDMGdELHdCQUF3QixDQUFDNTZDLE1BQU0sRUFBRSxpQkFBaUIsS0FBQXJILE1BQUEsQ0FBSzRULEtBQUssQ0FBQ3JTLEVBQUUsRUFBRztRQUN6RTtNQUNGO0lBQUM7TUFBQWpELEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFxakQsZ0JBQWdCbmpELE9BQU8sRUFBRWlrRCxJQUFJLEVBQUU7UUFDN0IsSUFBTUgsU0FBUyxHQUFHLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMvakQsT0FBTyxDQUFDO1FBQ2hELElBQUksQ0FBQzhqRCxTQUFTLENBQUNwK0MsU0FBUyxDQUFDQyxRQUFRLENBQUNnOEMsY0FBYyxDQUFDLEVBQUU7VUFDakQ7UUFDRjtRQUNBLElBQU14cEMsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUkzVixRQUFRLEVBQUUwa0MsU0FBUyxFQUFLO1VBQ3RDLElBQU1sbkMsT0FBTyxHQUFHNlUsY0FBYyxDQUFDRyxPQUFPLENBQUN4UyxRQUFRLEVBQUVzaEQsU0FBUyxDQUFDO1VBQzNELElBQUk5akQsT0FBTyxFQUFFO1lBQ1hBLE9BQU8sQ0FBQzBGLFNBQVMsQ0FBQ3lTLE1BQU0sQ0FBQyt1QixTQUFTLEVBQUUrYyxJQUFJLENBQUM7VUFDM0M7UUFDRixDQUFDO1FBQ0Q5ckMsTUFBTSxDQUFDeXBDLHdCQUF3QixFQUFFSixpQkFBaUIsQ0FBQztRQUNuRHJwQyxNQUFNLENBQUMwcEMsc0JBQXNCLEVBQUVILGlCQUFpQixDQUFDO1FBQ2pEb0MsU0FBUyxDQUFDNXlDLFlBQVksQ0FBQyxlQUFlLEVBQUUreUMsSUFBSSxDQUFDO01BQy9DO0lBQUM7TUFBQXBrRCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBMGpELHlCQUF5QnhqRCxPQUFPLEVBQUUrb0IsU0FBUyxFQUFFanBCLEtBQUssRUFBRTtRQUNsRCxJQUFJLENBQUNFLE9BQU8sQ0FBQzZGLFlBQVksQ0FBQ2tqQixTQUFTLENBQUMsRUFBRTtVQUNwQy9vQixPQUFPLENBQUNrUixZQUFZLENBQUM2WCxTQUFTLEVBQUVqcEIsS0FBSyxDQUFDO1FBQ3hDO01BQ0Y7SUFBQztNQUFBRCxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBOGlELGNBQWNuL0IsSUFBSSxFQUFFO1FBQ2xCLE9BQU9BLElBQUksQ0FBQy9kLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDNjdDLGlCQUFpQixDQUFDO01BQ25EOztNQUVBO0lBQUE7TUFBQTNoRCxHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBOGpELGlCQUFpQm5nQyxJQUFJLEVBQUU7UUFDckIsT0FBT0EsSUFBSSxDQUFDck8sT0FBTyxDQUFDK3NDLG1CQUFtQixDQUFDLEdBQUcxK0IsSUFBSSxHQUFHNU8sY0FBYyxDQUFDRyxPQUFPLENBQUNtdEMsbUJBQW1CLEVBQUUxK0IsSUFBSSxDQUFDO01BQ3JHOztNQUVBO0lBQUE7TUFBQTVqQixHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBaWtELGlCQUFpQnRnQyxJQUFJLEVBQUU7UUFDckIsT0FBT0EsSUFBSSxDQUFDcmUsT0FBTyxDQUFDNDhDLGNBQWMsQ0FBQyxJQUFJditCLElBQUk7TUFDN0M7O01BRUE7SUFBQTtNQUFBNWpCLEdBQUE7TUFBQWlRLEdBQUEsRUEvSkEsU0FBQUEsSUFBQSxFQUFrQjtRQUNoQixPQUFPNHdDLE1BQU07TUFDZjtJQUFDO01BQUE3Z0QsR0FBQTtNQUFBQyxLQUFBLEVBOEpELFNBQUE4SCxnQkFBdUJxSyxNQUFNLEVBQUU7UUFDN0IsT0FBTyxJQUFJLENBQUNzRixJQUFJLENBQUMsWUFBWTtVQUMzQixJQUFNQyxJQUFJLEdBQUc2cUMsR0FBRyxDQUFDN3RDLG1CQUFtQixDQUFDLElBQUksQ0FBQztVQUMxQyxJQUFJLE9BQU92QyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCO1VBQ0Y7VUFDQSxJQUFJdUYsSUFBSSxDQUFDdkYsTUFBTSxDQUFDLEtBQUtoUCxTQUFTLElBQUlnUCxNQUFNLENBQUNqRSxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUlpRSxNQUFNLEtBQUssYUFBYSxFQUFFO1lBQ3BGLE1BQU0sSUFBSWtCLFNBQVMsc0JBQUE1UixNQUFBLENBQXFCMFEsTUFBTSxRQUFJO1VBQ3BEO1VBQ0F1RixJQUFJLENBQUN2RixNQUFNLENBQUMsRUFBRTtRQUNoQixDQUFDLENBQUM7TUFDSjtJQUFDO0lBQUEsT0FBQW93QyxHQUFBO0VBQUEsRUEzTGU5dUMsYUFBYTtFQThML0I7QUFDRjtBQUNBO0VBRUU1SSxZQUFZLENBQUMrQyxFQUFFLENBQUNsTixRQUFRLEVBQUV5Z0Qsb0JBQW9CLEVBQUVpQixvQkFBb0IsRUFBRSxVQUFVMzNDLEtBQUssRUFBRTtJQUNyRixJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDa0QsUUFBUSxDQUFDLElBQUksQ0FBQytJLE9BQU8sQ0FBQyxFQUFFO01BQ3hDak0sS0FBSyxDQUFDNkUsY0FBYyxFQUFFO0lBQ3hCO0lBQ0EsSUFBSTdKLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUNwQjtJQUNGO0lBQ0E4OEMsR0FBRyxDQUFDN3RDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDd1AsSUFBSSxFQUFFO0VBQ3RDLENBQUMsQ0FBQzs7RUFFRjtBQUNGO0FBQ0E7RUFDRXJaLFlBQVksQ0FBQytDLEVBQUUsQ0FBQ2pMLE1BQU0sRUFBRTArQyxtQkFBbUIsRUFBRSxZQUFNO0lBQUEsSUFBQStDLFdBQUEsR0FBQWo1QywwQkFBQSxDQUMzQjRKLGNBQWMsQ0FBQzlJLElBQUksQ0FBQ3EyQywyQkFBMkIsQ0FBQztNQUFBK0IsT0FBQTtJQUFBO01BQXRFLEtBQUFELFdBQUEsQ0FBQS80QyxDQUFBLE1BQUFnNUMsT0FBQSxHQUFBRCxXQUFBLENBQUE5NEMsQ0FBQSxJQUFBQyxJQUFBLEdBQXdFO1FBQUEsSUFBN0RyTCxPQUFPLEdBQUFta0QsT0FBQSxDQUFBcmtELEtBQUE7UUFDaEJ1aUQsR0FBRyxDQUFDN3RDLG1CQUFtQixDQUFDeFUsT0FBTyxDQUFDO01BQ2xDO0lBQUMsU0FBQXVMLEdBQUE7TUFBQTI0QyxXQUFBLENBQUExNEMsQ0FBQSxDQUFBRCxHQUFBO0lBQUE7TUFBQTI0QyxXQUFBLENBQUF6NEMsQ0FBQTtJQUFBO0VBQ0gsQ0FBQyxDQUFDO0VBQ0Y7QUFDRjtBQUNBOztFQUVFcEUsa0JBQWtCLENBQUNnN0MsR0FBRyxDQUFDOztFQUV2QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLElBQU01NkMsSUFBSSxHQUFHLE9BQU87RUFDcEIsSUFBTW9NLFFBQVEsR0FBRyxVQUFVO0VBQzNCLElBQU1HLFNBQVMsT0FBQXpTLE1BQUEsQ0FBT3NTLFFBQVEsQ0FBRTtFQUNoQyxJQUFNdXdDLGVBQWUsZUFBQTdpRCxNQUFBLENBQWV5UyxTQUFTLENBQUU7RUFDL0MsSUFBTXF3QyxjQUFjLGNBQUE5aUQsTUFBQSxDQUFjeVMsU0FBUyxDQUFFO0VBQzdDLElBQU1zd0MsYUFBYSxhQUFBL2lELE1BQUEsQ0FBYXlTLFNBQVMsQ0FBRTtFQUMzQyxJQUFNdXdDLGNBQWMsY0FBQWhqRCxNQUFBLENBQWN5UyxTQUFTLENBQUU7RUFDN0MsSUFBTXd3QyxVQUFVLFVBQUFqakQsTUFBQSxDQUFVeVMsU0FBUyxDQUFFO0VBQ3JDLElBQU15d0MsWUFBWSxZQUFBbGpELE1BQUEsQ0FBWXlTLFNBQVMsQ0FBRTtFQUN6QyxJQUFNMHdDLFVBQVUsVUFBQW5qRCxNQUFBLENBQVV5UyxTQUFTLENBQUU7RUFDckMsSUFBTTJ3QyxXQUFXLFdBQUFwakQsTUFBQSxDQUFXeVMsU0FBUyxDQUFFO0VBQ3ZDLElBQU00d0MsZUFBZSxHQUFHLE1BQU07RUFDOUIsSUFBTUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0VBQ2hDLElBQU1DLGVBQWUsR0FBRyxNQUFNO0VBQzlCLElBQU1DLGtCQUFrQixHQUFHLFNBQVM7RUFDcEMsSUFBTXJ5QyxXQUFXLEdBQUc7SUFDbEJ1a0MsU0FBUyxFQUFFLFNBQVM7SUFDcEIrTixRQUFRLEVBQUUsU0FBUztJQUNuQjdOLEtBQUssRUFBRTtFQUNULENBQUM7RUFDRCxJQUFNM2tDLE9BQU8sR0FBRztJQUNkeWtDLFNBQVMsRUFBRSxJQUFJO0lBQ2YrTixRQUFRLEVBQUUsSUFBSTtJQUNkN04sS0FBSyxFQUFFO0VBQ1QsQ0FBQzs7RUFFRDtBQUNGO0FBQ0E7RUFGRSxJQUlNOE4sS0FBSywwQkFBQUMsZ0JBQUE7SUFBQTVsRCxTQUFBLENBQUEybEQsS0FBQSxFQUFBQyxnQkFBQTtJQUFBLElBQUFDLFFBQUEsR0FBQTNsRCxZQUFBLENBQUF5bEQsS0FBQTtJQUNULFNBQUFBLE1BQVlqbEQsT0FBTyxFQUFFaVMsTUFBTSxFQUFFO01BQUEsSUFBQW16QyxPQUFBO01BQUEzbEQsZUFBQSxPQUFBd2xELEtBQUE7TUFDM0JHLE9BQUEsR0FBQUQsUUFBQSxDQUFBOWhELElBQUEsT0FBTXJELE9BQU8sRUFBRWlTLE1BQU07TUFDckJtekMsT0FBQSxDQUFLek4sUUFBUSxHQUFHLElBQUk7TUFDcEJ5TixPQUFBLENBQUtDLG9CQUFvQixHQUFHLEtBQUs7TUFDakNELE9BQUEsQ0FBS0UsdUJBQXVCLEdBQUcsS0FBSztNQUNwQ0YsT0FBQSxDQUFLbk4sYUFBYSxFQUFFO01BQUMsT0FBQW1OLE9BQUE7SUFDdkI7O0lBRUE7SUFBQXhsRCxZQUFBLENBQUFxbEQsS0FBQTtNQUFBcGxELEdBQUE7TUFBQUMsS0FBQTtNQVdBO01BQ0EsU0FBQWtrQixLQUFBLEVBQU87UUFBQSxJQUFBdWhDLE9BQUE7UUFDTCxJQUFNdGlCLFNBQVMsR0FBR3Q0QixZQUFZLENBQUMrRCxPQUFPLENBQUMsSUFBSSxDQUFDaUYsUUFBUSxFQUFFK3dDLFVBQVUsQ0FBQztRQUNqRSxJQUFJemhCLFNBQVMsQ0FBQ24wQixnQkFBZ0IsRUFBRTtVQUM5QjtRQUNGO1FBQ0EsSUFBSSxDQUFDMDJDLGFBQWEsRUFBRTtRQUNwQixJQUFJLElBQUksQ0FBQzV4QyxPQUFPLENBQUNxakMsU0FBUyxFQUFFO1VBQzFCLElBQUksQ0FBQ3RqQyxRQUFRLENBQUNqTyxTQUFTLENBQUMrVSxHQUFHLENBQUNtcUMsZUFBZSxDQUFDO1FBQzlDO1FBQ0EsSUFBTWxnQyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO1VBQ3JCNmdDLE9BQUksQ0FBQzV4QyxRQUFRLENBQUNqTyxTQUFTLENBQUMrSyxNQUFNLENBQUNzMEMsa0JBQWtCLENBQUM7VUFDbERwNkMsWUFBWSxDQUFDK0QsT0FBTyxDQUFDNjJDLE9BQUksQ0FBQzV4QyxRQUFRLEVBQUVneEMsV0FBVyxDQUFDO1VBQ2hEWSxPQUFJLENBQUNFLGtCQUFrQixFQUFFO1FBQzNCLENBQUM7UUFDRCxJQUFJLENBQUM5eEMsUUFBUSxDQUFDak8sU0FBUyxDQUFDK0ssTUFBTSxDQUFDbzBDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDakR2K0MsTUFBTSxDQUFDLElBQUksQ0FBQ3FOLFFBQVEsQ0FBQztRQUNyQixJQUFJLENBQUNBLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQ3FxQyxlQUFlLEVBQUVDLGtCQUFrQixDQUFDO1FBQ2hFLElBQUksQ0FBQzF3QyxjQUFjLENBQUNxUSxRQUFRLEVBQUUsSUFBSSxDQUFDL1EsUUFBUSxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDcWpDLFNBQVMsQ0FBQztNQUN0RTtJQUFDO01BQUFwM0MsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQWlrQixLQUFBLEVBQU87UUFBQSxJQUFBMmhDLE9BQUE7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDQyxPQUFPLEVBQUUsRUFBRTtVQUNuQjtRQUNGO1FBQ0EsSUFBTW5pQixTQUFTLEdBQUc3NEIsWUFBWSxDQUFDK0QsT0FBTyxDQUFDLElBQUksQ0FBQ2lGLFFBQVEsRUFBRTZ3QyxVQUFVLENBQUM7UUFDakUsSUFBSWhoQixTQUFTLENBQUMxMEIsZ0JBQWdCLEVBQUU7VUFDOUI7UUFDRjtRQUNBLElBQU00VixRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO1VBQ3JCZ2hDLE9BQUksQ0FBQy94QyxRQUFRLENBQUNqTyxTQUFTLENBQUMrVSxHQUFHLENBQUNvcUMsZUFBZSxDQUFDLENBQUMsQ0FBQztVQUM5Q2EsT0FBSSxDQUFDL3hDLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQytLLE1BQU0sQ0FBQ3MwQyxrQkFBa0IsRUFBRUQsZUFBZSxDQUFDO1VBQ25FbjZDLFlBQVksQ0FBQytELE9BQU8sQ0FBQ2czQyxPQUFJLENBQUMveEMsUUFBUSxFQUFFOHdDLFlBQVksQ0FBQztRQUNuRCxDQUFDO1FBQ0QsSUFBSSxDQUFDOXdDLFFBQVEsQ0FBQ2pPLFNBQVMsQ0FBQytVLEdBQUcsQ0FBQ3NxQyxrQkFBa0IsQ0FBQztRQUMvQyxJQUFJLENBQUMxd0MsY0FBYyxDQUFDcVEsUUFBUSxFQUFFLElBQUksQ0FBQy9RLFFBQVEsRUFBRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ3FqQyxTQUFTLENBQUM7TUFDdEU7SUFBQztNQUFBcDNDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFpVSxRQUFBLEVBQVU7UUFDUixJQUFJLENBQUN5eEMsYUFBYSxFQUFFO1FBQ3BCLElBQUksSUFBSSxDQUFDRyxPQUFPLEVBQUUsRUFBRTtVQUNsQixJQUFJLENBQUNoeUMsUUFBUSxDQUFDak8sU0FBUyxDQUFDK0ssTUFBTSxDQUFDcTBDLGVBQWUsQ0FBQztRQUNqRDtRQUNBemxDLElBQUEsQ0FBQUMsZUFBQSxDQUFBMmxDLEtBQUEsQ0FBQTloRCxTQUFBLG9CQUFBRSxJQUFBO01BQ0Y7SUFBQztNQUFBeEQsR0FBQTtNQUFBQyxLQUFBLEVBQ0QsU0FBQTZsRCxRQUFBLEVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ2h5QyxRQUFRLENBQUNqTyxTQUFTLENBQUNDLFFBQVEsQ0FBQ20vQyxlQUFlLENBQUM7TUFDMUQ7O01BRUE7SUFBQTtNQUFBamxELEdBQUE7TUFBQUMsS0FBQSxFQUVBLFNBQUEybEQsbUJBQUEsRUFBcUI7UUFBQSxJQUFBRyxPQUFBO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUNoeUMsT0FBTyxDQUFDb3hDLFFBQVEsRUFBRTtVQUMxQjtRQUNGO1FBQ0EsSUFBSSxJQUFJLENBQUNLLG9CQUFvQixJQUFJLElBQUksQ0FBQ0MsdUJBQXVCLEVBQUU7VUFDN0Q7UUFDRjtRQUNBLElBQUksQ0FBQzNOLFFBQVEsR0FBRzd1QyxVQUFVLENBQUMsWUFBTTtVQUMvQjg4QyxPQUFJLENBQUM3aEMsSUFBSSxFQUFFO1FBQ2IsQ0FBQyxFQUFFLElBQUksQ0FBQ25RLE9BQU8sQ0FBQ3VqQyxLQUFLLENBQUM7TUFDeEI7SUFBQztNQUFBdDNDLEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUErbEQsZUFBZXQ3QyxLQUFLLEVBQUV1N0MsYUFBYSxFQUFFO1FBQ25DLFFBQVF2N0MsS0FBSyxDQUFDTSxJQUFJO1VBQ2hCLEtBQUssV0FBVztVQUNoQixLQUFLLFVBQVU7WUFDYjtjQUNFLElBQUksQ0FBQ3c2QyxvQkFBb0IsR0FBR1MsYUFBYTtjQUN6QztZQUNGO1VBQ0YsS0FBSyxTQUFTO1VBQ2QsS0FBSyxVQUFVO1lBQ2I7Y0FDRSxJQUFJLENBQUNSLHVCQUF1QixHQUFHUSxhQUFhO2NBQzVDO1lBQ0Y7UUFBQztRQUVMLElBQUlBLGFBQWEsRUFBRTtVQUNqQixJQUFJLENBQUNOLGFBQWEsRUFBRTtVQUNwQjtRQUNGO1FBQ0EsSUFBTTlrQyxXQUFXLEdBQUduVyxLQUFLLENBQUNxQyxhQUFhO1FBQ3ZDLElBQUksSUFBSSxDQUFDK0csUUFBUSxLQUFLK00sV0FBVyxJQUFJLElBQUksQ0FBQy9NLFFBQVEsQ0FBQ2hPLFFBQVEsQ0FBQythLFdBQVcsQ0FBQyxFQUFFO1VBQ3hFO1FBQ0Y7UUFDQSxJQUFJLENBQUMra0Msa0JBQWtCLEVBQUU7TUFDM0I7SUFBQztNQUFBNWxELEdBQUE7TUFBQUMsS0FBQSxFQUNELFNBQUFtNEMsY0FBQSxFQUFnQjtRQUFBLElBQUE4TixPQUFBO1FBQ2RwN0MsWUFBWSxDQUFDK0MsRUFBRSxDQUFDLElBQUksQ0FBQ2lHLFFBQVEsRUFBRXl3QyxlQUFlLEVBQUUsVUFBQTc1QyxLQUFLO1VBQUEsT0FBSXc3QyxPQUFJLENBQUNGLGNBQWMsQ0FBQ3Q3QyxLQUFLLEVBQUUsSUFBSSxDQUFDO1FBQUEsRUFBQztRQUMxRkksWUFBWSxDQUFDK0MsRUFBRSxDQUFDLElBQUksQ0FBQ2lHLFFBQVEsRUFBRTB3QyxjQUFjLEVBQUUsVUFBQTk1QyxLQUFLO1VBQUEsT0FBSXc3QyxPQUFJLENBQUNGLGNBQWMsQ0FBQ3Q3QyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQUEsRUFBQztRQUMxRkksWUFBWSxDQUFDK0MsRUFBRSxDQUFDLElBQUksQ0FBQ2lHLFFBQVEsRUFBRTJ3QyxhQUFhLEVBQUUsVUFBQS81QyxLQUFLO1VBQUEsT0FBSXc3QyxPQUFJLENBQUNGLGNBQWMsQ0FBQ3Q3QyxLQUFLLEVBQUUsSUFBSSxDQUFDO1FBQUEsRUFBQztRQUN4RkksWUFBWSxDQUFDK0MsRUFBRSxDQUFDLElBQUksQ0FBQ2lHLFFBQVEsRUFBRTR3QyxjQUFjLEVBQUUsVUFBQWg2QyxLQUFLO1VBQUEsT0FBSXc3QyxPQUFJLENBQUNGLGNBQWMsQ0FBQ3Q3QyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQUEsRUFBQztNQUM1RjtJQUFDO01BQUExSyxHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBMGxELGNBQUEsRUFBZ0I7UUFDZHhsQyxZQUFZLENBQUMsSUFBSSxDQUFDMjNCLFFBQVEsQ0FBQztRQUMzQixJQUFJLENBQUNBLFFBQVEsR0FBRyxJQUFJO01BQ3RCOztNQUVBO0lBQUE7TUFBQTkzQyxHQUFBO01BQUFpUSxHQUFBLEVBMUdBLFNBQUFBLElBQUEsRUFBcUI7UUFDbkIsT0FBTzBDLE9BQU87TUFDaEI7SUFBQztNQUFBM1MsR0FBQTtNQUFBaVEsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBeUI7UUFDdkIsT0FBTzRDLFdBQVc7TUFDcEI7SUFBQztNQUFBN1MsR0FBQTtNQUFBaVEsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBa0I7UUFDaEIsT0FBT3JJLElBQUk7TUFDYjtJQUFDO01BQUE1SCxHQUFBO01BQUFDLEtBQUEsRUFtR0QsU0FBQThILGdCQUF1QnFLLE1BQU0sRUFBRTtRQUM3QixPQUFPLElBQUksQ0FBQ3NGLElBQUksQ0FBQyxZQUFZO1VBQzNCLElBQU1DLElBQUksR0FBR3l0QyxLQUFLLENBQUN6d0MsbUJBQW1CLENBQUMsSUFBSSxFQUFFdkMsTUFBTSxDQUFDO1VBQ3BELElBQUksT0FBT0EsTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM5QixJQUFJLE9BQU91RixJQUFJLENBQUN2RixNQUFNLENBQUMsS0FBSyxXQUFXLEVBQUU7Y0FDdkMsTUFBTSxJQUFJa0IsU0FBUyxzQkFBQTVSLE1BQUEsQ0FBcUIwUSxNQUFNLFFBQUk7WUFDcEQ7WUFDQXVGLElBQUksQ0FBQ3ZGLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztVQUNwQjtRQUNGLENBQUMsQ0FBQztNQUNKO0lBQUM7SUFBQSxPQUFBZ3pDLEtBQUE7RUFBQSxFQS9IaUIxeEMsYUFBYTtFQWtJakM7QUFDRjtBQUNBO0VBRUU2QyxvQkFBb0IsQ0FBQzZ1QyxLQUFLLENBQUM7O0VBRTNCO0FBQ0Y7QUFDQTs7RUFFRTU5QyxrQkFBa0IsQ0FBQzQ5QyxLQUFLLENBQUM7O0VBRXpCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFLElBQU1lLFNBQVMsR0FBRztJQUNoQmh2QyxLQUFLLEVBQUxBLEtBQUs7SUFDTGdCLE1BQU0sRUFBTkEsTUFBTTtJQUNOd0YsUUFBUSxFQUFSQSxRQUFRO0lBQ1J3RixRQUFRLEVBQVJBLFFBQVE7SUFDUndmLFFBQVEsRUFBUkEsUUFBUTtJQUNSNEksS0FBSyxFQUFMQSxLQUFLO0lBQ0x5RCxTQUFTLEVBQVRBLFNBQVM7SUFDVDRNLE9BQU8sRUFBUEEsT0FBTztJQUNQNEIsU0FBUyxFQUFUQSxTQUFTO0lBQ1RnRixHQUFHLEVBQUhBLEdBQUc7SUFDSDRDLEtBQUssRUFBTEEsS0FBSztJQUNMM04sT0FBTyxFQUFQQTtFQUNGLENBQUM7RUFFRCxPQUFPME8sU0FBUztBQUVsQixDQUFDLENBQUU7Ozs7Ozs7Ozs7OztBQ3BwTUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2JsYWNramFjay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYm9vdHN0cmFwLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuLy8gaW1wb3J0IGJvb3RzdHJhcCBqc1xuaW1wb3J0ICcuL2pzL2Jvb3RzdHJhcC5idW5kbGUnO1xuXG4vLyBpbXBvcnQgb3duIGpzXG5pbXBvcnQgJy4vanMvYmxhY2tqYWNrJztcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiY29uc3QgY2FyZENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsYWNramFjay1jYXJkLWNvbnRhaW5lclwiKTtcbmNhcmRDb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICBjb25zdCBjYXJkcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmQtc3ByaXRlXCIpO1xuICAgIGNvbnN0IGFkZExlZnQgPSAxMDAgLyAoY2FyZHMubGVuZ3RoICsgMSk7XG4gICAgY29uc3Qgcm90YXRlID0gOCAvIChjYXJkcy5sZW5ndGggLSAxKTtcbiAgICBjb25zb2xlLmxvZyhyb3RhdGUpO1xuICAgIGxldCByb3RhdGVTdHlsZSA9IC00O1xuICAgIGxldCBjbGFzc0xlZnQgPSBhZGRMZWZ0O1xuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNhcmQuc3R5bGUubGVmdCA9IGAke2NsYXNzTGVmdH0lYDtcbiAgICAgICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC01MCUsIDApIHJvdGF0ZSgke3JvdGF0ZVN0eWxlfWRlZylgO1xuICAgICAgICBjbGFzc0xlZnQgKz0gYWRkTGVmdDtcbiAgICAgICAgcm90YXRlU3R5bGUgKz0gcm90YXRlO1xuICAgIH0pICBcbn0pIiwiLyohXG4gICogQm9vdHN0cmFwIHY1LjMuMC1hbHBoYTIgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMyBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuYm9vdHN0cmFwID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvaW5kZXguanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwO1xuICBjb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDA7XG4gIGNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJseSBlc2NhcGUgSURzIHNlbGVjdG9ycyB0byBoYW5kbGUgd2VpcmQgSURzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY29uc3QgcGFyc2VTZWxlY3RvciA9IHNlbGVjdG9yID0+IHtcbiAgICBpZiAoc2VsZWN0b3IgJiYgd2luZG93LkNTUyAmJiB3aW5kb3cuQ1NTLmVzY2FwZSkge1xuICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvciBuZWVkcyBlc2NhcGluZyB0byBoYW5kbGUgSURzIChodG1sNSspIGNvbnRhaW5pbmcgZm9yIGluc3RhbmNlIC9cbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZSgvIyhbXlxcc1wiIyddKykvZywgKG1hdGNoLCBpZCkgPT4gYCMke0NTUy5lc2NhcGUoaWQpfWApO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07XG5cbiAgLy8gU2hvdXQtb3V0IEFuZ3VzIENyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG4gIGNvbnN0IHRvVHlwZSA9IG9iamVjdCA9PiB7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGAke29iamVjdH1gO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBVdGlsIEFQSVxuICAgKi9cblxuICBjb25zdCBnZXRVSUQgPSBwcmVmaXggPT4ge1xuICAgIGRvIHtcbiAgICAgIHByZWZpeCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKTtcbiAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKTtcbiAgICByZXR1cm4gcHJlZml4O1xuICB9O1xuICBjb25zdCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgICBsZXQge1xuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgdHJhbnNpdGlvbkRlbGF5XG4gICAgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSk7XG5cbiAgICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gICAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXTtcbiAgICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXTtcbiAgICByZXR1cm4gKE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSO1xuICB9O1xuICBjb25zdCB0cmlnZ2VyVHJhbnNpdGlvbkVuZCA9IGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKTtcbiAgfTtcbiAgY29uc3QgaXNFbGVtZW50JDEgPSBvYmplY3QgPT4ge1xuICAgIGlmICghb2JqZWN0IHx8IHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9iamVjdCA9IG9iamVjdFswXTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgIT09ICd1bmRlZmluZWQnO1xuICB9O1xuICBjb25zdCBnZXRFbGVtZW50ID0gb2JqZWN0ID0+IHtcbiAgICAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdCBvciBhIG5vZGUgZWxlbWVudFxuICAgIGlmIChpc0VsZW1lbnQkMShvYmplY3QpKSB7XG4gICAgICByZXR1cm4gb2JqZWN0LmpxdWVyeSA/IG9iamVjdFswXSA6IG9iamVjdDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdzdHJpbmcnICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJzZVNlbGVjdG9yKG9iamVjdCkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgY29uc3QgaXNWaXNpYmxlID0gZWxlbWVudCA9PiB7XG4gICAgaWYgKCFpc0VsZW1lbnQkMShlbGVtZW50KSB8fCBlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRJc1Zpc2libGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ3Zpc2libGUnO1xuICAgIC8vIEhhbmRsZSBgZGV0YWlsc2AgZWxlbWVudCBhcyBpdHMgY29udGVudCBtYXkgZmFsc2llIGFwcGVhciB2aXNpYmxlIHdoZW4gaXQgaXMgY2xvc2VkXG4gICAgY29uc3QgY2xvc2VkRGV0YWlscyA9IGVsZW1lbnQuY2xvc2VzdCgnZGV0YWlsczpub3QoW29wZW5dKScpO1xuICAgIGlmICghY2xvc2VkRGV0YWlscykge1xuICAgICAgcmV0dXJuIGVsZW1lbnRJc1Zpc2libGU7XG4gICAgfVxuICAgIGlmIChjbG9zZWREZXRhaWxzICE9PSBlbGVtZW50KSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZWxlbWVudC5jbG9zZXN0KCdzdW1tYXJ5Jyk7XG4gICAgICBpZiAoc3VtbWFyeSAmJiBzdW1tYXJ5LnBhcmVudE5vZGUgIT09IGNsb3NlZERldGFpbHMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHN1bW1hcnkgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudElzVmlzaWJsZTtcbiAgfTtcbiAgY29uc3QgaXNEaXNhYmxlZCA9IGVsZW1lbnQgPT4ge1xuICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZWxlbWVudC5kaXNhYmxlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmRpc2FibGVkO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09ICdmYWxzZSc7XG4gIH07XG4gIGNvbnN0IGZpbmRTaGFkb3dSb290ID0gZWxlbWVudCA9PiB7XG4gICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG4gICAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbDtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICAgIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gIH07XG4gIGNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogVHJpY2sgdG8gcmVzdGFydCBhbiBlbGVtZW50J3MgYW5pbWF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB2b2lkXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly93d3cuY2hhcmlzdGhlby5pby9ibG9nLzIwMjEvMDIvcmVzdGFydC1hLWNzcy1hbmltYXRpb24td2l0aC1qYXZhc2NyaXB0LyNyZXN0YXJ0aW5nLWEtY3NzLWFuaW1hdGlvblxuICAgKi9cbiAgY29uc3QgcmVmbG93ID0gZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5vZmZzZXRIZWlnaHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gIH07XG5cbiAgY29uc3QgZ2V0alF1ZXJ5ID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cualF1ZXJ5ICYmICFkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS1icy1uby1qcXVlcnknKSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5qUXVlcnk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICBjb25zdCBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzID0gW107XG4gIGNvbnN0IG9uRE9NQ29udGVudExvYWRlZCA9IGNhbGxiYWNrID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAvLyBhZGQgbGlzdGVuZXIgb24gdGhlIGZpcnN0IGNhbGwgd2hlbiB0aGUgZG9jdW1lbnQgaXMgaW4gbG9hZGluZyBzdGF0ZVxuICAgICAgaWYgKCFET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGlzUlRMID0gKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCc7XG4gIGNvbnN0IGRlZmluZUpRdWVyeVBsdWdpbiA9IHBsdWdpbiA9PiB7XG4gICAgb25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCQpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHBsdWdpbi5OQU1FO1xuICAgICAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW25hbWVdO1xuICAgICAgICAkLmZuW25hbWVdID0gcGx1Z2luLmpRdWVyeUludGVyZmFjZTtcbiAgICAgICAgJC5mbltuYW1lXS5Db25zdHJ1Y3RvciA9IHBsdWdpbjtcbiAgICAgICAgJC5mbltuYW1lXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgICAgICQuZm5bbmFtZV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICAgICAgcmV0dXJuIHBsdWdpbi5qUXVlcnlJbnRlcmZhY2U7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGV4ZWN1dGUgPSAocG9zc2libGVDYWxsYmFjaywgYXJncyA9IFtdLCBkZWZhdWx0VmFsdWUgPSBwb3NzaWJsZUNhbGxiYWNrKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBwb3NzaWJsZUNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gcG9zc2libGVDYWxsYmFjayguLi5hcmdzKSA6IGRlZmF1bHRWYWx1ZTtcbiAgfTtcbiAgY29uc3QgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiA9IChjYWxsYmFjaywgdHJhbnNpdGlvbkVsZW1lbnQsIHdhaXRGb3JUcmFuc2l0aW9uID0gdHJ1ZSkgPT4ge1xuICAgIGlmICghd2FpdEZvclRyYW5zaXRpb24pIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkdXJhdGlvblBhZGRpbmcgPSA1O1xuICAgIGNvbnN0IGVtdWxhdGVkRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0cmFuc2l0aW9uRWxlbWVudCkgKyBkdXJhdGlvblBhZGRpbmc7XG4gICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGhhbmRsZXIgPSAoe1xuICAgICAgdGFyZ2V0XG4gICAgfSkgPT4ge1xuICAgICAgaWYgKHRhcmdldCAhPT0gdHJhbnNpdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgIHRyYW5zaXRpb25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpO1xuICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG4gICAgfTtcbiAgICB0cmFuc2l0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBoYW5kbGVyKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9LCBlbXVsYXRlZER1cmF0aW9uKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBwcmV2aW91cy9uZXh0IGVsZW1lbnQgb2YgYSBsaXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5fSBsaXN0ICAgIFRoZSBsaXN0IG9mIGVsZW1lbnRzXG4gICAqIEBwYXJhbSBhY3RpdmVFbGVtZW50ICAgVGhlIGFjdGl2ZSBlbGVtZW50XG4gICAqIEBwYXJhbSBzaG91bGRHZXROZXh0ICAgQ2hvb3NlIHRvIGdldCBuZXh0IG9yIHByZXZpb3VzIGVsZW1lbnRcbiAgICogQHBhcmFtIGlzQ3ljbGVBbGxvd2VkXG4gICAqIEByZXR1cm4ge0VsZW1lbnR8ZWxlbX0gVGhlIHByb3BlciBlbGVtZW50XG4gICAqL1xuICBjb25zdCBnZXROZXh0QWN0aXZlRWxlbWVudCA9IChsaXN0LCBhY3RpdmVFbGVtZW50LCBzaG91bGRHZXROZXh0LCBpc0N5Y2xlQWxsb3dlZCkgPT4ge1xuICAgIGNvbnN0IGxpc3RMZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgICBsZXQgaW5kZXggPSBsaXN0LmluZGV4T2YoYWN0aXZlRWxlbWVudCk7XG5cbiAgICAvLyBpZiB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgbGlzdCByZXR1cm4gYW4gZWxlbWVudFxuICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uIGFuZCBpZiBjeWNsZSBpcyBhbGxvd2VkXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuICFzaG91bGRHZXROZXh0ICYmIGlzQ3ljbGVBbGxvd2VkID8gbGlzdFtsaXN0TGVuZ3RoIC0gMV0gOiBsaXN0WzBdO1xuICAgIH1cbiAgICBpbmRleCArPSBzaG91bGRHZXROZXh0ID8gMSA6IC0xO1xuICAgIGlmIChpc0N5Y2xlQWxsb3dlZCkge1xuICAgICAgaW5kZXggPSAoaW5kZXggKyBsaXN0TGVuZ3RoKSAlIGxpc3RMZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBsaXN0W01hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBsaXN0TGVuZ3RoIC0gMSkpXTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGRvbS9ldmVudC1oYW5kbGVyLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qLztcbiAgY29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovO1xuICBjb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvO1xuICBjb25zdCBldmVudFJlZ2lzdHJ5ID0ge307IC8vIEV2ZW50cyBzdG9yYWdlXG4gIGxldCB1aWRFdmVudCA9IDE7XG4gIGNvbnN0IGN1c3RvbUV2ZW50cyA9IHtcbiAgICBtb3VzZWVudGVyOiAnbW91c2VvdmVyJyxcbiAgICBtb3VzZWxlYXZlOiAnbW91c2VvdXQnXG4gIH07XG4gIGNvbnN0IG5hdGl2ZUV2ZW50cyA9IG5ldyBTZXQoWydjbGljaycsICdkYmxjbGljaycsICdtb3VzZXVwJywgJ21vdXNlZG93bicsICdjb250ZXh0bWVudScsICdtb3VzZXdoZWVsJywgJ0RPTU1vdXNlU2Nyb2xsJywgJ21vdXNlb3ZlcicsICdtb3VzZW91dCcsICdtb3VzZW1vdmUnLCAnc2VsZWN0c3RhcnQnLCAnc2VsZWN0ZW5kJywgJ2tleWRvd24nLCAna2V5cHJlc3MnLCAna2V5dXAnLCAnb3JpZW50YXRpb25jaGFuZ2UnLCAndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnLCAncG9pbnRlcmRvd24nLCAncG9pbnRlcm1vdmUnLCAncG9pbnRlcnVwJywgJ3BvaW50ZXJsZWF2ZScsICdwb2ludGVyY2FuY2VsJywgJ2dlc3R1cmVzdGFydCcsICdnZXN0dXJlY2hhbmdlJywgJ2dlc3R1cmVlbmQnLCAnZm9jdXMnLCAnYmx1cicsICdjaGFuZ2UnLCAncmVzZXQnLCAnc2VsZWN0JywgJ3N1Ym1pdCcsICdmb2N1c2luJywgJ2ZvY3Vzb3V0JywgJ2xvYWQnLCAndW5sb2FkJywgJ2JlZm9yZXVubG9hZCcsICdyZXNpemUnLCAnbW92ZScsICdET01Db250ZW50TG9hZGVkJywgJ3JlYWR5c3RhdGVjaGFuZ2UnLCAnZXJyb3InLCAnYWJvcnQnLCAnc2Nyb2xsJ10pO1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIG1ldGhvZHNcbiAgICovXG5cbiAgZnVuY3Rpb24gbWFrZUV2ZW50VWlkKGVsZW1lbnQsIHVpZCkge1xuICAgIHJldHVybiB1aWQgJiYgYCR7dWlkfTo6JHt1aWRFdmVudCsrfWAgfHwgZWxlbWVudC51aWRFdmVudCB8fCB1aWRFdmVudCsrO1xuICB9XG4gIGZ1bmN0aW9uIGdldEVsZW1lbnRFdmVudHMoZWxlbWVudCkge1xuICAgIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChlbGVtZW50KTtcbiAgICBlbGVtZW50LnVpZEV2ZW50ID0gdWlkO1xuICAgIGV2ZW50UmVnaXN0cnlbdWlkXSA9IGV2ZW50UmVnaXN0cnlbdWlkXSB8fCB7fTtcbiAgICByZXR1cm4gZXZlbnRSZWdpc3RyeVt1aWRdO1xuICB9XG4gIGZ1bmN0aW9uIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgICAgaHlkcmF0ZU9iaihldmVudCwge1xuICAgICAgICBkZWxlZ2F0ZVRhcmdldDogZWxlbWVudFxuICAgICAgfSk7XG4gICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgW2V2ZW50XSk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBzZWxlY3RvciwgZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgZm9yIChsZXQge1xuICAgICAgICB0YXJnZXRcbiAgICAgIH0gPSBldmVudDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gdGhpczsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBkb21FbGVtZW50IG9mIGRvbUVsZW1lbnRzKSB7XG4gICAgICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IHRhcmdldCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh5ZHJhdGVPYmooZXZlbnQsIHtcbiAgICAgICAgICAgIGRlbGVnYXRlVGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgc2VsZWN0b3IsIGZuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRhcmdldCwgW2V2ZW50XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGZpbmRIYW5kbGVyKGV2ZW50cywgY2FsbGFibGUsIGRlbGVnYXRpb25TZWxlY3RvciA9IG51bGwpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhldmVudHMpLmZpbmQoZXZlbnQgPT4gZXZlbnQuY2FsbGFibGUgPT09IGNhbGxhYmxlICYmIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvciA9PT0gZGVsZWdhdGlvblNlbGVjdG9yKTtcbiAgfVxuICBmdW5jdGlvbiBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBjb25zdCBpc0RlbGVnYXRlZCA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJztcbiAgICAvLyB0b2RvOiB0b29sdGlwIHBhc3NlcyBgZmFsc2VgIGluc3RlYWQgb2Ygc2VsZWN0b3IsIHNvIHdlIG5lZWQgdG8gY2hlY2tcbiAgICBjb25zdCBjYWxsYWJsZSA9IGlzRGVsZWdhdGVkID8gZGVsZWdhdGlvbkZ1bmN0aW9uIDogaGFuZGxlciB8fCBkZWxlZ2F0aW9uRnVuY3Rpb247XG4gICAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudCk7XG4gICAgaWYgKCFuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudCkpIHtcbiAgICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50O1xuICAgIH1cbiAgICByZXR1cm4gW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XTtcbiAgfVxuICBmdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIG9uZU9mZikge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKTtcblxuICAgIC8vIGluIGNhc2Ugb2YgbW91c2VlbnRlciBvciBtb3VzZWxlYXZlIHdyYXAgdGhlIGhhbmRsZXIgd2l0aGluIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGl0cyBET00gcG9zaXRpb25cbiAgICAvLyB0aGlzIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gYmVpbmcgZGlzcGF0Y2hlZCB0aGUgc2FtZSB3YXkgYXMgbW91c2VvdmVyIG9yIG1vdXNlb3V0IGRvZXNcbiAgICBpZiAob3JpZ2luYWxUeXBlRXZlbnQgaW4gY3VzdG9tRXZlbnRzKSB7XG4gICAgICBjb25zdCB3cmFwRnVuY3Rpb24gPSBmbiA9PiB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgIWV2ZW50LmRlbGVnYXRlVGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIGNhbGxhYmxlID0gd3JhcEZ1bmN0aW9uKGNhbGxhYmxlKTtcbiAgICB9XG4gICAgY29uc3QgZXZlbnRzID0gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KTtcbiAgICBjb25zdCBoYW5kbGVycyA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IChldmVudHNbdHlwZUV2ZW50XSA9IHt9KTtcbiAgICBjb25zdCBwcmV2aW91c0Z1bmN0aW9uID0gZmluZEhhbmRsZXIoaGFuZGxlcnMsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKTtcbiAgICBpZiAocHJldmlvdXNGdW5jdGlvbikge1xuICAgICAgcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgPSBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiAmJiBvbmVPZmY7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChjYWxsYWJsZSwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKTtcbiAgICBjb25zdCBmbiA9IGlzRGVsZWdhdGVkID8gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgY2FsbGFibGUpIDogYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBjYWxsYWJsZSk7XG4gICAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbDtcbiAgICBmbi5jYWxsYWJsZSA9IGNhbGxhYmxlO1xuICAgIGZuLm9uZU9mZiA9IG9uZU9mZjtcbiAgICBmbi51aWRFdmVudCA9IHVpZDtcbiAgICBoYW5kbGVyc1t1aWRdID0gZm47XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIGlzRGVsZWdhdGVkKTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcbiAgICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpO1xuICAgIGlmICghZm4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSk7XG4gICAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xuICAgIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge307XG4gICAgZm9yIChjb25zdCBbaGFuZGxlcktleSwgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgICAgaWYgKGhhbmRsZXJLZXkuaW5jbHVkZXMobmFtZXNwYWNlKSkge1xuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2V0VHlwZUV2ZW50KGV2ZW50KSB7XG4gICAgLy8gYWxsb3cgdG8gZ2V0IHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gbmFtZXNwYWNlZCBldmVudHMgKCdjbGljay5icy5idXR0b24nIC0tPiAnY2xpY2snKVxuICAgIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpO1xuICAgIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50O1xuICB9XG4gIGNvbnN0IEV2ZW50SGFuZGxlciA9IHtcbiAgICBvbihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIGZhbHNlKTtcbiAgICB9LFxuICAgIG9uZShlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIHRydWUpO1xuICAgIH0sXG4gICAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pO1xuICAgICAgY29uc3QgaW5OYW1lc3BhY2UgPSB0eXBlRXZlbnQgIT09IG9yaWdpbmFsVHlwZUV2ZW50O1xuICAgICAgY29uc3QgZXZlbnRzID0gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KTtcbiAgICAgIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge307XG4gICAgICBjb25zdCBpc05hbWVzcGFjZSA9IG9yaWdpbmFsVHlwZUV2ZW50LnN0YXJ0c1dpdGgoJy4nKTtcbiAgICAgIGlmICh0eXBlb2YgY2FsbGFibGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFNpbXBsZXN0IGNhc2U6IGhhbmRsZXIgaXMgcGFzc2VkLCByZW1vdmUgdGhhdCBsaXN0ZW5lciBPTkxZLlxuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaXNOYW1lc3BhY2UpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50RXZlbnQgb2YgT2JqZWN0LmtleXMoZXZlbnRzKSkge1xuICAgICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IFtrZXlIYW5kbGVycywgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgICAgICBjb25zdCBoYW5kbGVyS2V5ID0ga2V5SGFuZGxlcnMucmVwbGFjZShzdHJpcFVpZFJlZ2V4LCAnJyk7XG4gICAgICAgIGlmICghaW5OYW1lc3BhY2UgfHwgb3JpZ2luYWxUeXBlRXZlbnQuaW5jbHVkZXMoaGFuZGxlcktleSkpIHtcbiAgICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdHJpZ2dlcihlbGVtZW50LCBldmVudCwgYXJncykge1xuICAgICAgaWYgKHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KCk7XG4gICAgICBjb25zdCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQoZXZlbnQpO1xuICAgICAgY29uc3QgaW5OYW1lc3BhY2UgPSBldmVudCAhPT0gdHlwZUV2ZW50O1xuICAgICAgbGV0IGpRdWVyeUV2ZW50ID0gbnVsbDtcbiAgICAgIGxldCBidWJibGVzID0gdHJ1ZTtcbiAgICAgIGxldCBuYXRpdmVEaXNwYXRjaCA9IHRydWU7XG4gICAgICBsZXQgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xuICAgICAgaWYgKGluTmFtZXNwYWNlICYmICQpIHtcbiAgICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKTtcbiAgICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGpRdWVyeUV2ZW50KTtcbiAgICAgICAgYnViYmxlcyA9ICFqUXVlcnlFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpO1xuICAgICAgICBuYXRpdmVEaXNwYXRjaCA9ICFqUXVlcnlFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpO1xuICAgICAgICBkZWZhdWx0UHJldmVudGVkID0galF1ZXJ5RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCk7XG4gICAgICB9XG4gICAgICBsZXQgZXZ0ID0gbmV3IEV2ZW50KGV2ZW50LCB7XG4gICAgICAgIGJ1YmJsZXMsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgZXZ0ID0gaHlkcmF0ZU9iaihldnQsIGFyZ3MpO1xuICAgICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAobmF0aXZlRGlzcGF0Y2gpIHtcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgalF1ZXJ5RXZlbnQpIHtcbiAgICAgICAgalF1ZXJ5RXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBldnQ7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBoeWRyYXRlT2JqKG9iaiwgbWV0YSA9IHt9KSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWV0YSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICB9IGNhdGNoIChfdW51c2VkKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgZG9tL2RhdGEuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgZWxlbWVudE1hcCA9IG5ldyBNYXAoKTtcbiAgY29uc3QgRGF0YSA9IHtcbiAgICBzZXQoZWxlbWVudCwga2V5LCBpbnN0YW5jZSkge1xuICAgICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50TWFwLnNldChlbGVtZW50LCBuZXcgTWFwKCkpO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KTtcblxuICAgICAgLy8gbWFrZSBpdCBjbGVhciB3ZSBvbmx5IHdhbnQgb25lIGluc3RhbmNlIHBlciBlbGVtZW50XG4gICAgICAvLyBjYW4gYmUgcmVtb3ZlZCBsYXRlciB3aGVuIG11bHRpcGxlIGtleS9pbnN0YW5jZXMgYXJlIGZpbmUgdG8gYmUgdXNlZFxuICAgICAgaWYgKCFpbnN0YW5jZU1hcC5oYXMoa2V5KSAmJiBpbnN0YW5jZU1hcC5zaXplICE9PSAwKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20oaW5zdGFuY2VNYXAua2V5cygpKVswXX0uYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluc3RhbmNlTWFwLnNldChrZXksIGluc3RhbmNlKTtcbiAgICB9LFxuICAgIGdldChlbGVtZW50LCBrZXkpIHtcbiAgICAgIGlmIChlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudE1hcC5nZXQoZWxlbWVudCkuZ2V0KGtleSkgfHwgbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgcmVtb3ZlKGVsZW1lbnQsIGtleSkge1xuICAgICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpO1xuICAgICAgaW5zdGFuY2VNYXAuZGVsZXRlKGtleSk7XG5cbiAgICAgIC8vIGZyZWUgdXAgZWxlbWVudCByZWZlcmVuY2VzIGlmIHRoZXJlIGFyZSBubyBpbnN0YW5jZXMgbGVmdCBmb3IgYW4gZWxlbWVudFxuICAgICAgaWYgKGluc3RhbmNlTWFwLnNpemUgPT09IDApIHtcbiAgICAgICAgZWxlbWVudE1hcC5kZWxldGUoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgZG9tL21hbmlwdWxhdG9yLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBmdW5jdGlvbiBub3JtYWxpemVEYXRhKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBOdW1iZXIodmFsdWUpLnRvU3RyaW5nKCkpIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgfSBjYXRjaCAoX3VudXNlZCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBub3JtYWxpemVEYXRhS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkucmVwbGFjZSgvW0EtWl0vZywgY2hyID0+IGAtJHtjaHIudG9Mb3dlckNhc2UoKX1gKTtcbiAgfVxuICBjb25zdCBNYW5pcHVsYXRvciA9IHtcbiAgICBzZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKTtcbiAgICB9LFxuICAgIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKTtcbiAgICB9LFxuICAgIGdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIHtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG4gICAgICBjb25zdCBic0tleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50LmRhdGFzZXQpLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ2JzJykgJiYgIWtleS5zdGFydHNXaXRoKCdic0NvbmZpZycpKTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGJzS2V5cykge1xuICAgICAgICBsZXQgcHVyZUtleSA9IGtleS5yZXBsYWNlKC9eYnMvLCAnJyk7XG4gICAgICAgIHB1cmVLZXkgPSBwdXJlS2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHVyZUtleS5zbGljZSgxLCBwdXJlS2V5Lmxlbmd0aCk7XG4gICAgICAgIGF0dHJpYnV0ZXNbcHVyZUtleV0gPSBub3JtYWxpemVEYXRhKGVsZW1lbnQuZGF0YXNldFtrZXldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH0sXG4gICAgZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVEYXRhKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL2NvbmZpZy5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgQ29uZmlnIHtcbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgc3RhdGljIG1ldGhvZCBcIk5BTUVcIiwgZm9yIGVhY2ggY29tcG9uZW50IScpO1xuICAgIH1cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnKTtcbiAgICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKTtcbiAgICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfbWVyZ2VDb25maWdPYmooY29uZmlnLCBlbGVtZW50KSB7XG4gICAgICBjb25zdCBqc29uQ29uZmlnID0gaXNFbGVtZW50JDEoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsICdjb25maWcnKSA6IHt9OyAvLyB0cnkgdG8gcGFyc2VcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgICAuLi4odHlwZW9mIGpzb25Db25maWcgPT09ICdvYmplY3QnID8ganNvbkNvbmZpZyA6IHt9KSxcbiAgICAgICAgLi4uKGlzRWxlbWVudCQxKGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkgOiB7fSksXG4gICAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgICAgfTtcbiAgICB9XG4gICAgX3R5cGVDaGVja0NvbmZpZyhjb25maWcsIGNvbmZpZ1R5cGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSkge1xuICAgICAgZm9yIChjb25zdCBbcHJvcGVydHksIGV4cGVjdGVkVHlwZXNdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZ1R5cGVzKSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV07XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IGlzRWxlbWVudCQxKHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke3RoaXMuY29uc3RydWN0b3IuTkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGJhc2UtY29tcG9uZW50LmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IFZFUlNJT04gPSAnNS4zLjAtYWxwaGEyJztcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBlbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KTtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgRGF0YS5zZXQodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIERhdGEucmVtb3ZlKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSk7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5TmFtZSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBfcXVldWVDYWxsYmFjayhjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZCA9IHRydWUpIHtcbiAgICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQpO1xuICAgIH1cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnLCB0aGlzLl9lbGVtZW50KTtcbiAgICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKTtcbiAgICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIERhdGEuZ2V0KGdldEVsZW1lbnQoZWxlbWVudCksIHRoaXMuREFUQV9LRVkpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCBjb25maWcgPSB7fSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoZWxlbWVudCkgfHwgbmV3IHRoaXMoZWxlbWVudCwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgICByZXR1cm4gYGJzLiR7dGhpcy5OQU1FfWA7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgICAgcmV0dXJuIGAuJHt0aGlzLkRBVEFfS0VZfWA7XG4gICAgfVxuICAgIHN0YXRpYyBldmVudE5hbWUobmFtZSkge1xuICAgICAgcmV0dXJuIGAke25hbWV9JHt0aGlzLkVWRU5UX0tFWX1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgZG9tL3NlbGVjdG9yLWVuZ2luZS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIGNvbnN0IGdldFNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0Jyk7XG4gICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgICBsZXQgaHJlZkF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cbiAgICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgICAvLyBzbyBldmVyeXRoaW5nIHN0YXJ0aW5nIHdpdGggYCNgIG9yIGAuYC4gSWYgYSBcInJlYWxcIiBVUkwgaXMgdXNlZCBhcyB0aGUgc2VsZWN0b3IsXG4gICAgICAvLyBgZG9jdW1lbnQucXVlcnlTZWxlY3RvcmAgd2lsbCByaWdodGZ1bGx5IGNvbXBsYWluIGl0IGlzIGludmFsaWQuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgICAgaWYgKCFocmVmQXR0cmlidXRlIHx8ICFocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBKdXN0IGluIGNhc2Ugc29tZSBDTVMgcHV0cyBvdXQgYSBmdWxsIFVSTCB3aXRoIHRoZSBhbmNob3IgYXBwZW5kZWRcbiAgICAgIGlmIChocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgIGhyZWZBdHRyaWJ1dGUgPSBgIyR7aHJlZkF0dHJpYnV0ZS5zcGxpdCgnIycpWzFdfWA7XG4gICAgICB9XG4gICAgICBzZWxlY3RvciA9IGhyZWZBdHRyaWJ1dGUgJiYgaHJlZkF0dHJpYnV0ZSAhPT0gJyMnID8gaHJlZkF0dHJpYnV0ZS50cmltKCkgOiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH07XG4gIGNvbnN0IFNlbGVjdG9yRW5naW5lID0ge1xuICAgIGZpbmQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoLi4uRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbC5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSk7XG4gICAgfSxcbiAgICBmaW5kT25lKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgICB9LFxuICAgIGNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KC4uLmVsZW1lbnQuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSk7XG4gICAgfSxcbiAgICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICBjb25zdCBwYXJlbnRzID0gW107XG4gICAgICBsZXQgYW5jZXN0b3IgPSBlbGVtZW50LnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKTtcbiAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgfSxcbiAgICBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICBsZXQgcHJldmlvdXMgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgICAgaWYgKHByZXZpb3VzLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIFtwcmV2aW91c107XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXMgPSBwcmV2aW91cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgLy8gVE9ETzogdGhpcyBpcyBub3cgdW51c2VkOyByZW1vdmUgbGF0ZXIgYWxvbmcgd2l0aCBwcmV2KClcbiAgICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgd2hpbGUgKG5leHQpIHtcbiAgICAgICAgaWYgKG5leHQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gW25leHRdO1xuICAgICAgICB9XG4gICAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuICAgIGZvY3VzYWJsZUNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGZvY3VzYWJsZXMgPSBbJ2EnLCAnYnV0dG9uJywgJ2lucHV0JywgJ3RleHRhcmVhJywgJ3NlbGVjdCcsICdkZXRhaWxzJywgJ1t0YWJpbmRleF0nLCAnW2NvbnRlbnRlZGl0YWJsZT1cInRydWVcIl0nXS5tYXAoc2VsZWN0b3IgPT4gYCR7c2VsZWN0b3J9Om5vdChbdGFiaW5kZXhePVwiLVwiXSlgKS5qb2luKCcsJyk7XG4gICAgICByZXR1cm4gdGhpcy5maW5kKGZvY3VzYWJsZXMsIGVsZW1lbnQpLmZpbHRlcihlbCA9PiAhaXNEaXNhYmxlZChlbCkgJiYgaXNWaXNpYmxlKGVsKSk7XG4gICAgfSxcbiAgICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICByZXR1cm4gc2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yKSA6IG51bGw7XG4gICAgfSxcbiAgICBnZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICByZXR1cm4gc2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKSA6IFtdO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIGNvbnN0IGVuYWJsZURpc21pc3NUcmlnZ2VyID0gKGNvbXBvbmVudCwgbWV0aG9kID0gJ2hpZGUnKSA9PiB7XG4gICAgY29uc3QgY2xpY2tFdmVudCA9IGBjbGljay5kaXNtaXNzJHtjb21wb25lbnQuRVZFTlRfS0VZfWA7XG4gICAgY29uc3QgbmFtZSA9IGNvbXBvbmVudC5OQU1FO1xuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgY2xpY2tFdmVudCwgYFtkYXRhLWJzLWRpc21pc3M9XCIke25hbWV9XCJdYCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpIHx8IHRoaXMuY2xvc2VzdChgLiR7bmFtZX1gKTtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50LmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KTtcblxuICAgICAgLy8gTWV0aG9kIGFyZ3VtZW50IGlzIGxlZnQsIGZvciBBbGVydCBhbmQgb25seSwgYXMgaXQgZG9lc24ndCBpbXBsZW1lbnQgdGhlICdoaWRlJyBtZXRob2RcbiAgICAgIGluc3RhbmNlW21ldGhvZF0oKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGFsZXJ0LmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkZiA9ICdhbGVydCc7XG4gIGNvbnN0IERBVEFfS0VZJGEgPSAnYnMuYWxlcnQnO1xuICBjb25zdCBFVkVOVF9LRVkkYiA9IGAuJHtEQVRBX0tFWSRhfWA7XG4gIGNvbnN0IEVWRU5UX0NMT1NFID0gYGNsb3NlJHtFVkVOVF9LRVkkYn1gO1xuICBjb25zdCBFVkVOVF9DTE9TRUQgPSBgY2xvc2VkJHtFVkVOVF9LRVkkYn1gO1xuICBjb25zdCBDTEFTU19OQU1FX0ZBREUkNSA9ICdmYWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDggPSAnc2hvdyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgQWxlcnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkZjtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBjbG9zZSgpIHtcbiAgICAgIGNvbnN0IGNsb3NlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTE9TRSk7XG4gICAgICBpZiAoY2xvc2VFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckOCk7XG4gICAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFJDUpO1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudCgpLCB0aGlzLl9lbGVtZW50LCBpc0FuaW1hdGVkKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2Rlc3Ryb3lFbGVtZW50KCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFRCk7XG4gICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBBbGVydC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgZW5hYmxlRGlzbWlzc1RyaWdnZXIoQWxlcnQsICdjbG9zZScpO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKEFsZXJ0KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGJ1dHRvbi5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJGUgPSAnYnV0dG9uJztcbiAgY29uc3QgREFUQV9LRVkkOSA9ICdicy5idXR0b24nO1xuICBjb25zdCBFVkVOVF9LRVkkYSA9IGAuJHtEQVRBX0tFWSQ5fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQ2ID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IENMQVNTX05BTUVfQUNUSVZFJDMgPSAnYWN0aXZlJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUkNSA9ICdbZGF0YS1icy10b2dnbGU9XCJidXR0b25cIl0nO1xuICBjb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSQ2ID0gYGNsaWNrJHtFVkVOVF9LRVkkYX0ke0RBVEFfQVBJX0tFWSQ2fWA7XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJGU7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgdG9nZ2xlKCkge1xuICAgICAgLy8gVG9nZ2xlIGNsYXNzIGFuZCBzeW5jIHRoZSBgYXJpYS1wcmVzc2VkYCBhdHRyaWJ1dGUgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBgLnRvZ2dsZSgpYCBtZXRob2RcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9BQ1RJVkUkMykpO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEJ1dHRvbi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpO1xuICAgICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ2LCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ1LCBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ1KTtcbiAgICBjb25zdCBkYXRhID0gQnV0dG9uLmdldE9yQ3JlYXRlSW5zdGFuY2UoYnV0dG9uKTtcbiAgICBkYXRhLnRvZ2dsZSgpO1xuICB9KTtcblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihCdXR0b24pO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9zd2lwZS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJGQgPSAnc3dpcGUnO1xuICBjb25zdCBFVkVOVF9LRVkkOSA9ICcuYnMuc3dpcGUnO1xuICBjb25zdCBFVkVOVF9UT1VDSFNUQVJUID0gYHRvdWNoc3RhcnQke0VWRU5UX0tFWSQ5fWA7XG4gIGNvbnN0IEVWRU5UX1RPVUNITU9WRSA9IGB0b3VjaG1vdmUke0VWRU5UX0tFWSQ5fWA7XG4gIGNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVkkOX1gO1xuICBjb25zdCBFVkVOVF9QT0lOVEVSRE9XTiA9IGBwb2ludGVyZG93biR7RVZFTlRfS0VZJDl9YDtcbiAgY29uc3QgRVZFTlRfUE9JTlRFUlVQID0gYHBvaW50ZXJ1cCR7RVZFTlRfS0VZJDl9YDtcbiAgY29uc3QgUE9JTlRFUl9UWVBFX1RPVUNIID0gJ3RvdWNoJztcbiAgY29uc3QgUE9JTlRFUl9UWVBFX1BFTiA9ICdwZW4nO1xuICBjb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCc7XG4gIGNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwO1xuICBjb25zdCBEZWZhdWx0JGMgPSB7XG4gICAgZW5kQ2FsbGJhY2s6IG51bGwsXG4gICAgbGVmdENhbGxiYWNrOiBudWxsLFxuICAgIHJpZ2h0Q2FsbGJhY2s6IG51bGxcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkYyA9IHtcbiAgICBlbmRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gICAgbGVmdENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgICByaWdodENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFN3aXBlIGV4dGVuZHMgQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIGlmICghZWxlbWVudCB8fCAhU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IDA7XG4gICAgICB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudCk7XG4gICAgICB0aGlzLl9pbml0RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JGM7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkYztcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkZDtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBkaXNwb3NlKCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkkOSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9zdGFydChldmVudCkge1xuICAgICAgaWYgKCF0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cykge1xuICAgICAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYO1xuICAgICAgfVxuICAgIH1cbiAgICBfZW5kKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuX2RlbHRhWDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2hhbmRsZVN3aXBlKCk7XG4gICAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5lbmRDYWxsYmFjayk7XG4gICAgfVxuICAgIF9tb3ZlKGV2ZW50KSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSA/IDAgOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLl9kZWx0YVg7XG4gICAgfVxuICAgIF9oYW5kbGVTd2lwZSgpIHtcbiAgICAgIGNvbnN0IGFic0RlbHRhWCA9IE1hdGguYWJzKHRoaXMuX2RlbHRhWCk7XG4gICAgICBpZiAoYWJzRGVsdGFYIDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YVggLyB0aGlzLl9kZWx0YVg7XG4gICAgICB0aGlzLl9kZWx0YVggPSAwO1xuICAgICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXhlY3V0ZShkaXJlY3Rpb24gPiAwID8gdGhpcy5fY29uZmlnLnJpZ2h0Q2FsbGJhY2sgOiB0aGlzLl9jb25maWcubGVmdENhbGxiYWNrKTtcbiAgICB9XG4gICAgX2luaXRFdmVudHMoKSB7XG4gICAgICBpZiAodGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJET1dOLCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpO1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUlVQLCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hTVEFSVCwgZXZlbnQgPT4gdGhpcy5fc3RhcnQoZXZlbnQpKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNITU9WRSwgZXZlbnQgPT4gdGhpcy5fbW92ZShldmVudCkpO1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hFTkQsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBfZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKTtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgaXNTdXBwb3J0ZWQoKSB7XG4gICAgICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBjYXJvdXNlbC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJGMgPSAnY2Fyb3VzZWwnO1xuICBjb25zdCBEQVRBX0tFWSQ4ID0gJ2JzLmNhcm91c2VsJztcbiAgY29uc3QgRVZFTlRfS0VZJDggPSBgLiR7REFUQV9LRVkkOH1gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkkNSA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBBUlJPV19MRUZUX0tFWSQxID0gJ0Fycm93TGVmdCc7XG4gIGNvbnN0IEFSUk9XX1JJR0hUX0tFWSQxID0gJ0Fycm93UmlnaHQnO1xuICBjb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwOyAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcblxuICBjb25zdCBPUkRFUl9ORVhUID0gJ25leHQnO1xuICBjb25zdCBPUkRFUl9QUkVWID0gJ3ByZXYnO1xuICBjb25zdCBESVJFQ1RJT05fTEVGVCA9ICdsZWZ0JztcbiAgY29uc3QgRElSRUNUSU9OX1JJR0hUID0gJ3JpZ2h0JztcbiAgY29uc3QgRVZFTlRfU0xJREUgPSBgc2xpZGUke0VWRU5UX0tFWSQ4fWA7XG4gIGNvbnN0IEVWRU5UX1NMSUQgPSBgc2xpZCR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfS0VZRE9XTiQxID0gYGtleWRvd24ke0VWRU5UX0tFWSQ4fWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFRU5URVIkMSA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVkkOH1gO1xuICBjb25zdCBFVkVOVF9NT1VTRUxFQVZFJDEgPSBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWSQ4fWA7XG4gIGNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkkMyA9IGBsb2FkJHtFVkVOVF9LRVkkOH0ke0RBVEFfQVBJX0tFWSQ1fWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDUgPSBgY2xpY2ske0VWRU5UX0tFWSQ4fSR7REFUQV9BUElfS0VZJDV9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCc7XG4gIGNvbnN0IENMQVNTX05BTUVfQUNUSVZFJDIgPSAnYWN0aXZlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TTElERSA9ICdzbGlkZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfRU5EID0gJ2Nhcm91c2VsLWl0ZW0tZW5kJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TVEFSVCA9ICdjYXJvdXNlbC1pdGVtLXN0YXJ0JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9ORVhUID0gJ2Nhcm91c2VsLWl0ZW0tbmV4dCc7XG4gIGNvbnN0IENMQVNTX05BTUVfUFJFViA9ICdjYXJvdXNlbC1pdGVtLXByZXYnO1xuICBjb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSc7XG4gIGNvbnN0IFNFTEVDVE9SX0lURU0gPSAnLmNhcm91c2VsLWl0ZW0nO1xuICBjb25zdCBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9IFNFTEVDVE9SX0FDVElWRSArIFNFTEVDVE9SX0lURU07XG4gIGNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZyc7XG4gIGNvbnN0IFNFTEVDVE9SX0lORElDQVRPUlMgPSAnLmNhcm91c2VsLWluZGljYXRvcnMnO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1NMSURFID0gJ1tkYXRhLWJzLXNsaWRlXSwgW2RhdGEtYnMtc2xpZGUtdG9dJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9SSURFID0gJ1tkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiXSc7XG4gIGNvbnN0IEtFWV9UT19ESVJFQ1RJT04gPSB7XG4gICAgW0FSUk9XX0xFRlRfS0VZJDFdOiBESVJFQ1RJT05fUklHSFQsXG4gICAgW0FSUk9XX1JJR0hUX0tFWSQxXTogRElSRUNUSU9OX0xFRlRcbiAgfTtcbiAgY29uc3QgRGVmYXVsdCRiID0ge1xuICAgIGludGVydmFsOiA1MDAwLFxuICAgIGtleWJvYXJkOiB0cnVlLFxuICAgIHBhdXNlOiAnaG92ZXInLFxuICAgIHJpZGU6IGZhbHNlLFxuICAgIHRvdWNoOiB0cnVlLFxuICAgIHdyYXA6IHRydWVcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkYiA9IHtcbiAgICBpbnRlcnZhbDogJyhudW1iZXJ8Ym9vbGVhbiknLFxuICAgIC8vIFRPRE86djYgcmVtb3ZlIGJvb2xlYW4gc3VwcG9ydFxuICAgIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gICAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgICByaWRlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAgdG91Y2g6ICdib29sZWFuJyxcbiAgICB3cmFwOiAnYm9vbGVhbidcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBDYXJvdXNlbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnRvdWNoVGltZW91dCA9IG51bGw7XG4gICAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG51bGw7XG4gICAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ESUNBVE9SUywgdGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yaWRlID09PSBDTEFTU19OQU1FX0NBUk9VU0VMKSB7XG4gICAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkYjtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSRiO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRjO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIG5leHQoKSB7XG4gICAgICB0aGlzLl9zbGlkZShPUkRFUl9ORVhUKTtcbiAgICB9XG4gICAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgICAgLy8gRklYTUUgVE9ETyB1c2UgYGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZWBcbiAgICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmIGlzVmlzaWJsZSh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJldigpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX1BSRVYpO1xuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jbGVhckludGVydmFsKCk7XG4gICAgfVxuICAgIGN5Y2xlKCkge1xuICAgICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpO1xuICAgICAgdGhpcy5fdXBkYXRlSW50ZXJ2YWwoKTtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5uZXh0V2hlblZpc2libGUoKSwgdGhpcy5fY29uZmlnLmludGVydmFsKTtcbiAgICB9XG4gICAgX21heWJlRW5hYmxlQ3ljbGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5yaWRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLmN5Y2xlKCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmN5Y2xlKCk7XG4gICAgfVxuICAgIHRvKGluZGV4KSB7XG4gICAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zKCk7XG4gICAgICBpZiAoaW5kZXggPiBpdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy50byhpbmRleCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9nZXRBY3RpdmUoKSk7XG4gICAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9yZGVyID0gaW5kZXggPiBhY3RpdmVJbmRleCA/IE9SREVSX05FWFQgOiBPUkRFUl9QUkVWO1xuICAgICAgdGhpcy5fc2xpZGUob3JkZXIsIGl0ZW1zW2luZGV4XSk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBpZiAodGhpcy5fc3dpcGVIZWxwZXIpIHtcbiAgICAgICAgdGhpcy5fc3dpcGVIZWxwZXIuZGlzcG9zZSgpO1xuICAgICAgfVxuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIGNvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSBjb25maWcuaW50ZXJ2YWw7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOJDEsIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRU5URVIkMSwgKCkgPT4gdGhpcy5wYXVzZSgpKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFTEVBVkUkMSwgKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb25maWcudG91Y2ggJiYgU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgZm9yIChjb25zdCBpbWcgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNX0lNRywgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGltZywgRVZFTlRfRFJBR19TVEFSVCwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBlbmRDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSAhPT0gJ2hvdmVyJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICBpZiAodGhpcy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHN3aXBlQ29uZmlnID0ge1xuICAgICAgICBsZWZ0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX0xFRlQpKSxcbiAgICAgICAgcmlnaHRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fUklHSFQpKSxcbiAgICAgICAgZW5kQ2FsbGJhY2s6IGVuZENhbGxCYWNrXG4gICAgICB9O1xuICAgICAgdGhpcy5fc3dpcGVIZWxwZXIgPSBuZXcgU3dpcGUodGhpcy5fZWxlbWVudCwgc3dpcGVDb25maWcpO1xuICAgIH1cbiAgICBfa2V5ZG93bihldmVudCkge1xuICAgICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IEtFWV9UT19ESVJFQ1RJT05bZXZlbnQua2V5XTtcbiAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbXMoKS5pbmRleE9mKGVsZW1lbnQpO1xuICAgIH1cbiAgICBfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChpbmRleCkge1xuICAgICAgaWYgKCF0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBhY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpO1xuICAgICAgYWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUkMik7XG4gICAgICBhY3RpdmVJbmRpY2F0b3IucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKTtcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoYFtkYXRhLWJzLXNsaWRlLXRvPVwiJHtpbmRleH1cIl1gLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCk7XG4gICAgICBpZiAobmV3QWN0aXZlSW5kaWNhdG9yKSB7XG4gICAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDIpO1xuICAgICAgICBuZXdBY3RpdmVJbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBfdXBkYXRlSW50ZXJ2YWwoKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fYWN0aXZlRWxlbWVudCB8fCB0aGlzLl9nZXRBY3RpdmUoKTtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBOdW1iZXIucGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaW50ZXJ2YWwnKSwgMTApO1xuICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gZWxlbWVudEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWw7XG4gICAgfVxuICAgIF9zbGlkZShvcmRlciwgZWxlbWVudCA9IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2dldEFjdGl2ZSgpO1xuICAgICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFQ7XG4gICAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQodGhpcy5fZ2V0SXRlbXMoKSwgYWN0aXZlRWxlbWVudCwgaXNOZXh0LCB0aGlzLl9jb25maWcud3JhcCk7XG4gICAgICBpZiAobmV4dEVsZW1lbnQgPT09IGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudCk7XG4gICAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSBldmVudE5hbWUgPT4ge1xuICAgICAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgZXZlbnROYW1lLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgICAgZGlyZWN0aW9uOiB0aGlzLl9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSxcbiAgICAgICAgICBmcm9tOiB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudCksXG4gICAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgc2xpZGVFdmVudCA9IHRyaWdnZXJFdmVudChFVkVOVF9TTElERSk7XG4gICAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICAgIC8vIHRvZG86IGNoYW5nZSB0ZXN0cyB0aGF0IHVzZSBlbXB0eSBkaXZzIHRvIGF2b2lkIHRoaXMgY2hlY2tcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNDeWNsaW5nID0gQm9vbGVhbih0aGlzLl9pbnRlcnZhbCk7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChuZXh0RWxlbWVudEluZGV4KTtcbiAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBuZXh0RWxlbWVudDtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9TVEFSVCA6IENMQVNTX05BTUVfRU5EO1xuICAgICAgY29uc3Qgb3JkZXJDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX05FWFQgOiBDTEFTU19OQU1FX1BSRVY7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKTtcbiAgICAgIHJlZmxvdyhuZXh0RWxlbWVudCk7XG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGRpcmVjdGlvbmFsQ2xhc3NOYW1lLCBvcmRlckNsYXNzTmFtZSk7XG4gICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMik7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSQyLCBvcmRlckNsYXNzTmFtZSwgZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdHJpZ2dlckV2ZW50KEVWRU5UX1NMSUQpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgYWN0aXZlRWxlbWVudCwgdGhpcy5faXNBbmltYXRlZCgpKTtcbiAgICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgICAgdGhpcy5jeWNsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBfaXNBbmltYXRlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NMSURFKTtcbiAgICB9XG4gICAgX2dldEFjdGl2ZSgpIHtcbiAgICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KTtcbiAgICB9XG4gICAgX2dldEl0ZW1zKCkge1xuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTSwgdGhpcy5fZWxlbWVudCk7XG4gICAgfVxuICAgIF9jbGVhckludGVydmFsKCkge1xuICAgICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIF9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikge1xuICAgICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9QUkVWIDogT1JERVJfTkVYVDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVY7XG4gICAgfVxuICAgIF9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSB7XG4gICAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fTEVGVCA6IERJUkVDVElPTl9SSUdIVDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgZGF0YS50byhjb25maWcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ1LCBTRUxFQ1RPUl9EQVRBX1NMSURFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpO1xuICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ0FST1VTRUwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2Fyb3VzZWwgPSBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldCk7XG4gICAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJyk7XG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIGNhcm91c2VsLnRvKHNsaWRlSW5kZXgpO1xuICAgICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUodGhpcywgJ3NsaWRlJykgPT09ICduZXh0Jykge1xuICAgICAgY2Fyb3VzZWwubmV4dCgpO1xuICAgICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2Fyb3VzZWwucHJldigpO1xuICAgIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKCk7XG4gIH0pO1xuICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJJDMsICgpID0+IHtcbiAgICBjb25zdCBjYXJvdXNlbHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfUklERSk7XG4gICAgZm9yIChjb25zdCBjYXJvdXNlbCBvZiBjYXJvdXNlbHMpIHtcbiAgICAgIENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UoY2Fyb3VzZWwpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oQ2Fyb3VzZWwpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgY29sbGFwc2UuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSRiID0gJ2NvbGxhcHNlJztcbiAgY29uc3QgREFUQV9LRVkkNyA9ICdicy5jb2xsYXBzZSc7XG4gIGNvbnN0IEVWRU5UX0tFWSQ3ID0gYC4ke0RBVEFfS0VZJDd9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZJDQgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgRVZFTlRfU0hPVyQ2ID0gYHNob3cke0VWRU5UX0tFWSQ3fWA7XG4gIGNvbnN0IEVWRU5UX1NIT1dOJDYgPSBgc2hvd24ke0VWRU5UX0tFWSQ3fWA7XG4gIGNvbnN0IEVWRU5UX0hJREUkNiA9IGBoaWRlJHtFVkVOVF9LRVkkN31gO1xuICBjb25zdCBFVkVOVF9ISURERU4kNiA9IGBoaWRkZW4ke0VWRU5UX0tFWSQ3fWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDQgPSBgY2xpY2ske0VWRU5UX0tFWSQ3fSR7REFUQV9BUElfS0VZJDR9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDcgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnO1xuICBjb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZyc7XG4gIGNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCc7XG4gIGNvbnN0IENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOID0gYDpzY29wZSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfWA7XG4gIGNvbnN0IENMQVNTX05BTUVfSE9SSVpPTlRBTCA9ICdjb2xsYXBzZS1ob3Jpem9udGFsJztcbiAgY29uc3QgV0lEVEggPSAnd2lkdGgnO1xuICBjb25zdCBIRUlHSFQgPSAnaGVpZ2h0JztcbiAgY29uc3QgU0VMRUNUT1JfQUNUSVZFUyA9ICcuY29sbGFwc2Uuc2hvdywgLmNvbGxhcHNlLmNvbGxhcHNpbmcnO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0ID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJdJztcbiAgY29uc3QgRGVmYXVsdCRhID0ge1xuICAgIHBhcmVudDogbnVsbCxcbiAgICB0b2dnbGU6IHRydWVcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkYSA9IHtcbiAgICBwYXJlbnQ6ICcobnVsbHxlbGVtZW50KScsXG4gICAgdG9nZ2xlOiAnYm9vbGVhbidcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBDb2xsYXBzZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gW107XG4gICAgICBjb25zdCB0b2dnbGVMaXN0ID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0KTtcbiAgICAgIGZvciAoY29uc3QgZWxlbSBvZiB0b2dnbGVMaXN0KSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3JFbmdpbmUuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKTtcbiAgICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpLmZpbHRlcihmb3VuZEVsZW1lbnQgPT4gZm91bmRFbGVtZW50ID09PSB0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2luaXRpYWxpemVDaGlsZHJlbigpO1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksIHRoaXMuX2lzU2hvd24oKSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCRhO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJGE7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJGI7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgdG9nZ2xlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCB0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGFjdGl2ZUNoaWxkcmVuID0gW107XG5cbiAgICAgIC8vIGZpbmQgYWN0aXZlIGNoaWxkcmVuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgICBhY3RpdmVDaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9BQ1RJVkVTKS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50KS5tYXAoZWxlbWVudCA9PiBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHtcbiAgICAgICAgICB0b2dnbGU6IGZhbHNlXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIGlmIChhY3RpdmVDaGlsZHJlbi5sZW5ndGggJiYgYWN0aXZlQ2hpbGRyZW5bMF0uX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVyQ2KTtcbiAgICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBhY3RpdmVJbnN0YW5jZSBvZiBhY3RpdmVDaGlsZHJlbikge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9XG4gICAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMDtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksIHRydWUpO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1ckNyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiQ2KTtcbiAgICAgIH07XG4gICAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpO1xuICAgICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWA7XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDYpO1xuICAgICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGA7XG4gICAgICByZWZsb3codGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1ckNyk7XG4gICAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlckFycmF5KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRyaWdnZXIpO1xuICAgICAgICBpZiAoZWxlbWVudCAmJiAhdGhpcy5faXNTaG93bihlbGVtZW50KSkge1xuICAgICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhbdHJpZ2dlcl0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOJDYpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSk7XG4gICAgfVxuICAgIF9pc1Nob3duKGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDcpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpOyAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlc1xuICAgICAgY29uZmlnLnBhcmVudCA9IGdldEVsZW1lbnQoY29uZmlnLnBhcmVudCk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfZ2V0RGltZW5zaW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfSE9SSVpPTlRBTCkgPyBXSURUSCA6IEhFSUdIVDtcbiAgICB9XG4gICAgX2luaXRpYWxpemVDaGlsZHJlbigpIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0KTtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaGlsZHJlbikge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhbZWxlbWVudF0sIHRoaXMuX2lzU2hvd24oc2VsZWN0ZWQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmQoQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4sIHRoaXMuX2NvbmZpZy5wYXJlbnQpO1xuICAgICAgLy8gcmVtb3ZlIGNoaWxkcmVuIGlmIGdyZWF0ZXIgZGVwdGhcbiAgICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCB0aGlzLl9jb25maWcucGFyZW50KS5maWx0ZXIoZWxlbWVudCA9PiAhY2hpbGRyZW4uaW5jbHVkZXMoZWxlbWVudCkpO1xuICAgIH1cbiAgICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRyaWdnZXJBcnJheSwgaXNPcGVuKSB7XG4gICAgICBpZiAoIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRyaWdnZXJBcnJheSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9DT0xMQVBTRUQsICFpc09wZW4pO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGlzT3Blbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIGNvbnN0IF9jb25maWcgPSB7fTtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNCwgU0VMRUNUT1JfREFUQV9UT0dHTEUkNCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnIHx8IGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IodGhpcykpIHtcbiAgICAgIENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwge1xuICAgICAgICB0b2dnbGU6IGZhbHNlXG4gICAgICB9KS50b2dnbGUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKENvbGxhcHNlKTtcblxuICB2YXIgdG9wID0gJ3RvcCc7XG4gIHZhciBib3R0b20gPSAnYm90dG9tJztcbiAgdmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbiAgdmFyIGxlZnQgPSAnbGVmdCc7XG4gIHZhciBhdXRvID0gJ2F1dG8nO1xuICB2YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbiAgdmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbiAgdmFyIGVuZCA9ICdlbmQnO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG4gIHZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG4gIHZhciBwb3BwZXIgPSAncG9wcGVyJztcbiAgdmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xuICB2YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG4gIH0sIFtdKTtcbiAgdmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xuICB9LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbiAgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG4gIHZhciByZWFkID0gJ3JlYWQnO1xuICB2YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbiAgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG4gIHZhciBtYWluID0gJ21haW4nO1xuICB2YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxuICB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuICB2YXIgd3JpdGUgPSAnd3JpdGUnO1xuICB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbiAgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdO1xuXG4gIGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG5cbiAgICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICAgIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAgIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gICAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xuICB9XG5cbiAgLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG4gIGZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgICAgLy8gZWZmZWN0aXZlIHdheSB0byBhcHBseSBzdHlsZXMgdG8gYW4gSFRNTEVsZW1lbnRcbiAgICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVmZmVjdCQyKF9yZWYyKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGU7XG4gICAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgICBwb3BwZXI6IHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgIG1hcmdpbjogJzAnXG4gICAgICB9LFxuICAgICAgYXJyb3c6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgIH0sXG4gICAgICByZWZlcmVuY2U6IHt9XG4gICAgfTtcbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICAgIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cblxuICAgICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSAnJztcbiAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgYXBwbHlTdHlsZXMkMSA9IHtcbiAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICd3cml0ZScsXG4gICAgZm46IGFwcGx5U3R5bGVzLFxuICAgIGVmZmVjdDogZWZmZWN0JDIsXG4gICAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIH1cblxuICB2YXIgbWF4ID0gTWF0aC5tYXg7XG4gIHZhciBtaW4gPSBNYXRoLm1pbjtcbiAgdmFyIHJvdW5kID0gTWF0aC5yb3VuZDtcblxuICBmdW5jdGlvbiBnZXRVQVN0cmluZygpIHtcbiAgICB2YXIgdWFEYXRhID0gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG5cbiAgICBpZiAodWFEYXRhICE9IG51bGwgJiYgdWFEYXRhLmJyYW5kcykge1xuICAgICAgcmV0dXJuIHVhRGF0YS5icmFuZHMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmJyYW5kICsgXCIvXCIgKyBpdGVtLnZlcnNpb247XG4gICAgICB9KS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xheW91dFZpZXdwb3J0KCkge1xuICAgIHJldHVybiAhL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChnZXRVQVN0cmluZygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUsIGlzRml4ZWRTdHJhdGVneSkge1xuICAgIGlmIChpbmNsdWRlU2NhbGUgPT09IHZvaWQgMCkge1xuICAgICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzRml4ZWRTdHJhdGVneSA9PT0gdm9pZCAwKSB7XG4gICAgICBpc0ZpeGVkU3RyYXRlZ3kgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHNjYWxlWCA9IDE7XG4gICAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgICBpZiAoaW5jbHVkZVNjYWxlICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIHNjYWxlWCA9IGVsZW1lbnQub2Zmc2V0V2lkdGggPiAwID8gcm91bmQoY2xpZW50UmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDEgOiAxO1xuICAgICAgc2NhbGVZID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgPiAwID8gcm91bmQoY2xpZW50UmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMSA6IDE7XG4gICAgfVxuXG4gICAgdmFyIF9yZWYgPSBpc0VsZW1lbnQoZWxlbWVudCkgPyBnZXRXaW5kb3coZWxlbWVudCkgOiB3aW5kb3csXG4gICAgICAgIHZpc3VhbFZpZXdwb3J0ID0gX3JlZi52aXN1YWxWaWV3cG9ydDtcblxuICAgIHZhciBhZGRWaXN1YWxPZmZzZXRzID0gIWlzTGF5b3V0Vmlld3BvcnQoKSAmJiBpc0ZpeGVkU3RyYXRlZ3k7XG4gICAgdmFyIHggPSAoY2xpZW50UmVjdC5sZWZ0ICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0IDogMCkpIC8gc2NhbGVYO1xuICAgIHZhciB5ID0gKGNsaWVudFJlY3QudG9wICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3AgOiAwKSkgLyBzY2FsZVk7XG4gICAgdmFyIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aCAvIHNjYWxlWDtcbiAgICB2YXIgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQgLyBzY2FsZVk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgdG9wOiB5LFxuICAgICAgcmlnaHQ6IHggKyB3aWR0aCxcbiAgICAgIGJvdHRvbTogeSArIGhlaWdodCxcbiAgICAgIGxlZnQ6IHgsXG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH07XG4gIH1cblxuICAvLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbiAgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gICAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxuICAgIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gICAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgICAgeTogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gICAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gICAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KSB7XG4gICAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgICBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgfSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuICAvLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcblxuXG4gIGZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gICAgdmFyIGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVQVN0cmluZygpKTtcbiAgICB2YXIgaXNJRSA9IC9UcmlkZW50L2kudGVzdChnZXRVQVN0cmluZygpKTtcblxuICAgIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpO1xuXG4gICAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGlzU2hhZG93Um9vdChjdXJyZW50Tm9kZSkpIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuaG9zdDtcbiAgICB9XG5cbiAgICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZSQxKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuICAvLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbiAgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gICAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUkMShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZSQxKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xuICB9XG5cbiAgZnVuY3Rpb24gd2l0aGluKG1pbiQxLCB2YWx1ZSwgbWF4JDEpIHtcbiAgICByZXR1cm4gbWF4KG1pbiQxLCBtaW4odmFsdWUsIG1heCQxKSk7XG4gIH1cbiAgZnVuY3Rpb24gd2l0aGluTWF4Q2xhbXAobWluLCB2YWx1ZSwgbWF4KSB7XG4gICAgdmFyIHYgPSB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KTtcbiAgICByZXR1cm4gdiA+IG1heCA/IG1heCA6IHY7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc2hNYXAsIGtleSkge1xuICAgICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgICByZXR1cm4gaGFzaE1hcDtcbiAgICB9LCB7fSk7XG4gIH1cblxuICB2YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gICAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgICB9KSkgOiBwYWRkaW5nO1xuICAgIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gICAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gICAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gICAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICAgIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICAgIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICAgIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAgIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICAgIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICAgIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICAgIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICAgIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICAgIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVmZmVjdCQxKF9yZWYyKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICAgIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gICAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gICAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IGFycm93JDEgPSB7XG4gICAgbmFtZTogJ2Fycm93JyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnbWFpbicsXG4gICAgZm46IGFycm93LFxuICAgIGVmZmVjdDogZWZmZWN0JDEsXG4gICAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICAgIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuICB9XG5cbiAgdmFyIHVuc2V0U2lkZXMgPSB7XG4gICAgdG9wOiAnYXV0bycsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBib3R0b206ICdhdXRvJyxcbiAgICBsZWZ0OiAnYXV0bydcbiAgfTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbiAgLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbiAgLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbiAgZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZikge1xuICAgIHZhciB4ID0gX3JlZi54LFxuICAgICAgICB5ID0gX3JlZi55O1xuICAgIHZhciB3aW4gPSB3aW5kb3c7XG4gICAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHJvdW5kKHggKiBkcHIpIC8gZHByIHx8IDAsXG4gICAgICB5OiByb3VuZCh5ICogZHByKSAvIGRwciB8fCAwXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICAgIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICAgIHZhcmlhdGlvbiA9IF9yZWYyLnZhcmlhdGlvbixcbiAgICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzLFxuICAgICAgICBpc0ZpeGVkID0gX3JlZjIuaXNGaXhlZDtcbiAgICB2YXIgX29mZnNldHMkeCA9IG9mZnNldHMueCxcbiAgICAgICAgeCA9IF9vZmZzZXRzJHggPT09IHZvaWQgMCA/IDAgOiBfb2Zmc2V0cyR4LFxuICAgICAgICBfb2Zmc2V0cyR5ID0gb2Zmc2V0cy55LFxuICAgICAgICB5ID0gX29mZnNldHMkeSA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHk7XG5cbiAgICB2YXIgX3JlZjMgPSB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfSkgOiB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH07XG5cbiAgICB4ID0gX3JlZjMueDtcbiAgICB5ID0gX3JlZjMueTtcbiAgICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgICB2YXIgc2lkZVggPSBsZWZ0O1xuICAgIHZhciBzaWRlWSA9IHRvcDtcbiAgICB2YXIgd2luID0gd2luZG93O1xuXG4gICAgaWYgKGFkYXB0aXZlKSB7XG4gICAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlJDEob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiYgcG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgICAgfVxuICAgICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCB8fCAocGxhY2VtZW50ID09PSBsZWZ0IHx8IHBsYWNlbWVudCA9PT0gcmlnaHQpICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICAgIHNpZGVZID0gYm90dG9tO1xuICAgICAgICB2YXIgb2Zmc2V0WSA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LmhlaWdodCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgICBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF07XG4gICAgICAgIHkgLT0gb2Zmc2V0WSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCAocGxhY2VtZW50ID09PSB0b3AgfHwgcGxhY2VtZW50ID09PSBib3R0b20pICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICAgIHNpZGVYID0gcmlnaHQ7XG4gICAgICAgIHZhciBvZmZzZXRYID0gaXNGaXhlZCAmJiBvZmZzZXRQYXJlbnQgPT09IHdpbiAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQud2lkdGggOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgICAgb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF07XG4gICAgICAgIHggLT0gb2Zmc2V0WCAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICAgIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gICAgdmFyIF9yZWY0ID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIoe1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9KSA6IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTtcblxuICAgIHggPSBfcmVmNC54O1xuICAgIHkgPSBfcmVmNC55O1xuXG4gICAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8PSAxID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjUpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmNS5zdGF0ZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWY1Lm9wdGlvbnM7XG4gICAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXG4gICAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgICAgdmFyaWF0aW9uOiBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KSxcbiAgICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb24sXG4gICAgICBpc0ZpeGVkOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnXG4gICAgfTtcblxuICAgIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgICB9KSkpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgICB9KSkpO1xuICAgIH1cblxuICAgIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgICB9KTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBjb21wdXRlU3R5bGVzJDEgPSB7XG4gICAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gICAgZm46IGNvbXB1dGVTdHlsZXMsXG4gICAgZGF0YToge31cbiAgfTtcblxuICB2YXIgcGFzc2l2ZSA9IHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH07XG5cbiAgZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gICAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gICAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICAgIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzaXplKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfVxuICAgIH07XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB7XG4gICAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnd3JpdGUnLFxuICAgIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICAgIGVmZmVjdDogZWZmZWN0LFxuICAgIGRhdGE6IHt9XG4gIH07XG5cbiAgdmFyIGhhc2gkMSA9IHtcbiAgICBsZWZ0OiAncmlnaHQnLFxuICAgIHJpZ2h0OiAnbGVmdCcsXG4gICAgYm90dG9tOiAndG9wJyxcbiAgICB0b3A6ICdib3R0b20nXG4gIH07XG4gIGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgICByZXR1cm4gaGFzaCQxW21hdGNoZWRdO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGhhc2ggPSB7XG4gICAgc3RhcnQ6ICdlbmQnLFxuICAgIGVuZDogJ3N0YXJ0J1xuICB9O1xuICBmdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICAgIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gICAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gICAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAgIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAgIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgICAvLyBhbnl3YXkuXG4gICAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICAgIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICAgIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICAgIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgICB2YXIgeCA9IDA7XG4gICAgdmFyIHkgPSAwO1xuXG4gICAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgICAgdmFyIGxheW91dFZpZXdwb3J0ID0gaXNMYXlvdXRWaWV3cG9ydCgpO1xuXG4gICAgICBpZiAobGF5b3V0Vmlld3BvcnQgfHwgIWxheW91dFZpZXdwb3J0ICYmIHN0cmF0ZWd5ID09PSAnZml4ZWQnKSB7XG4gICAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgICAgeTogeVxuICAgIH07XG4gIH1cblxuICAvLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbiAgZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gICAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICAgIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gICAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlJDEoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAgIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCksXG4gICAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gICAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICAgIGlmIChbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmRleE9mKGdldE5vZGVOYW1lKG5vZGUpKSA+PSAwKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG4gIH1cblxuICAvKlxuICBnaXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xuICB1bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xuICB0bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG4gIHJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4gICovXG5cbiAgZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICAgIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgICBsaXN0ID0gW107XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcbiAgICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gICAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gICAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgICAgbGVmdDogcmVjdC54LFxuICAgICAgdG9wOiByZWN0LnksXG4gICAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgZmFsc2UsIHN0cmF0ZWd5ID09PSAnZml4ZWQnKTtcbiAgICByZWN0LnRvcCA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gICAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICAgIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgICByZWN0LnkgPSByZWN0LnRvcDtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkge1xuICAgIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkpIDogaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbiAgfSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuICAvLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbiAgLy8gYGluaXRpYWxgXG5cblxuICBmdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICAgIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gICAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICAgIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgICB9KTtcbiAgfSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4gIC8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG4gIGZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSkge1xuICAgIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KTtcbiAgICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgICByZXR1cm4gYWNjUmVjdDtcbiAgICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkpO1xuICAgIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICAgIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICAgIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgICByZXR1cm4gY2xpcHBpbmdSZWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICAgIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICAgIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gICAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gICAgdmFyIG9mZnNldHM7XG5cbiAgICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICAgIGNhc2UgdG9wOlxuICAgICAgICBvZmZzZXRzID0ge1xuICAgICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBib3R0b206XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgcmlnaHQ6XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgICAgeTogY29tbW9uWVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBsZWZ0OlxuICAgICAgICBvZmZzZXRzID0ge1xuICAgICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgICB5OiBjb21tb25ZXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBvZmZzZXRzID0ge1xuICAgICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGVuZDpcbiAgICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRzO1xuICB9XG5cbiAgZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCxcbiAgICAgICAgX29wdGlvbnMkc3RyYXRlZ3kgPSBfb3B0aW9ucy5zdHJhdGVneSxcbiAgICAgICAgc3RyYXRlZ3kgPSBfb3B0aW9ucyRzdHJhdGVneSA9PT0gdm9pZCAwID8gc3RhdGUuc3RyYXRlZ3kgOiBfb3B0aW9ucyRzdHJhdGVneSxcbiAgICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gICAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICAgIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW2FsdEJvdW5kYXJ5ID8gYWx0Q29udGV4dCA6IGVsZW1lbnRDb250ZXh0XTtcbiAgICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSk7XG4gICAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qoc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlKTtcbiAgICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgfSk7XG4gICAgdmFyIHBvcHBlckNsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QsIHBvcHBlck9mZnNldHMpKTtcbiAgICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgICB2YXIgb3ZlcmZsb3dPZmZzZXRzID0ge1xuICAgICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICAgIGxlZnQ6IGNsaXBwaW5nQ2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudENsaWVudFJlY3QubGVmdCArIHBhZGRpbmdPYmplY3QubGVmdCxcbiAgICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgICB9O1xuICAgIHZhciBvZmZzZXREYXRhID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7IC8vIE9mZnNldHMgY2FuIGJlIGFwcGxpZWQgb25seSB0byB0aGUgcG9wcGVyIGVsZW1lbnRcblxuICAgIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgICBPYmplY3Qua2V5cyhvdmVyZmxvd09mZnNldHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgICAgb3ZlcmZsb3dPZmZzZXRzW2tleV0gKz0gb2Zmc2V0W2F4aXNdICogbXVsdGlwbHk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3ZlcmZsb3dPZmZzZXRzO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gcGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gICAgdmFyIHBsYWNlbWVudHMkMSA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICAgIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gICAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cyQxLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICAgIH0pO1xuXG4gICAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzJDE7XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICAgIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgICBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgPSBvcHRpb25zLmZhbGxiYWNrUGxhY2VtZW50cyxcbiAgICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGZsaXBWYXJpYXRpbyxcbiAgICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gICAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICAgIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpO1xuICAgIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gICAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICAgIHZhciBwbGFjZW1lbnRzID0gW3ByZWZlcnJlZFBsYWNlbWVudF0uY29uY2F0KGZhbGxiYWNrUGxhY2VtZW50cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICAgIGZsaXBWYXJpYXRpb25zOiBmbGlwVmFyaWF0aW9ucyxcbiAgICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICAgIH0pIDogcGxhY2VtZW50KTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gICAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gICAgdmFyIGNoZWNrc01hcCA9IG5ldyBNYXAoKTtcbiAgICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgICAgdmFyIGlzU3RhcnRWYXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gc3RhcnQ7XG4gICAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgICAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgICAgfSk7XG4gICAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgICAgbWFpblZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgICAgdmFyIGNoZWNrcyA9IFtdO1xuXG4gICAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICB9KSkge1xuICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gICAgfVxuXG4gICAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgICB2YXIgbnVtYmVyT2ZDaGVja3MgPSBmbGlwVmFyaWF0aW9ucyA/IDMgOiAxO1xuXG4gICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgICAgdmFyIGNoZWNrcyA9IGNoZWNrc01hcC5nZXQocGxhY2VtZW50KTtcblxuICAgICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBfaSA9IG51bWJlck9mQ2hlY2tzOyBfaSA+IDA7IF9pLS0pIHtcbiAgICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgICB9XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgZmxpcCQxID0ge1xuICAgIG5hbWU6ICdmbGlwJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnbWFpbicsXG4gICAgZm46IGZsaXAsXG4gICAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgICBkYXRhOiB7XG4gICAgICBfc2tpcDogZmFsc2VcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAgIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICAgIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICAgIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gICAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICAgIH0pO1xuICAgIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICAgIH0pO1xuICAgIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gICAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gICAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gICAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgICB9O1xuICAgIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJzogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgICB9KTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBoaWRlJDEgPSB7XG4gICAgbmFtZTogJ2hpZGUnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdtYWluJyxcbiAgICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICAgIGZuOiBoaWRlXG4gIH07XG5cbiAgZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0KSB7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gICAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gICAgdmFyIF9yZWYgPSB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gb2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICAgIH0pKSA6IG9mZnNldCxcbiAgICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuICAgICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gICAgZGlzdGFuY2UgPSAoZGlzdGFuY2UgfHwgMCkgKiBpbnZlcnREaXN0YW5jZTtcbiAgICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgICB4OiBkaXN0YW5jZSxcbiAgICAgIHk6IHNraWRkaW5nXG4gICAgfSA6IHtcbiAgICAgIHg6IHNraWRkaW5nLFxuICAgICAgeTogZGlzdGFuY2VcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICAgIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICAgIHkgPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueTtcblxuICAgIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG4gICAgfVxuXG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3Qgb2Zmc2V0JDEgPSB7XG4gICAgbmFtZTogJ29mZnNldCcsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ21haW4nLFxuICAgIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgICBmbjogb2Zmc2V0XG4gIH07XG5cbiAgZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAgIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gICAgfSk7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgcG9wcGVyT2Zmc2V0cyQxID0ge1xuICAgIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAncmVhZCcsXG4gICAgZm46IHBvcHBlck9mZnNldHMsXG4gICAgZGF0YToge31cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAgIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICAgIHRldGhlciA9IF9vcHRpb25zJHRldGhlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHRldGhlcixcbiAgICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gICAgfSk7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gICAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICAgIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICAgIHZhciBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICAgIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICAgIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICAgIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICAgIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gICAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICAgIHZhciBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0VmFsdWUgPT09ICdudW1iZXInID8ge1xuICAgICAgbWFpbkF4aXM6IHRldGhlck9mZnNldFZhbHVlLFxuICAgICAgYWx0QXhpczogdGV0aGVyT2Zmc2V0VmFsdWVcbiAgICB9IDogT2JqZWN0LmFzc2lnbih7XG4gICAgICBtYWluQXhpczogMCxcbiAgICAgIGFsdEF4aXM6IDBcbiAgICB9LCB0ZXRoZXJPZmZzZXRWYWx1ZSk7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyU3RhdGUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF0gOiBudWxsO1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuXG4gICAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQ7XG5cbiAgICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICAgIHZhciBtaW4kMSA9IG9mZnNldCArIG92ZXJmbG93W21haW5TaWRlXTtcbiAgICAgIHZhciBtYXgkMSA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XG4gICAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMFxuICAgICAgfTtcbiAgICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcbiAgICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgICAgdmFyIGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuICAgICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgICB2YXIgbWF4T2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gLXJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgKyBhZGRpdGl2ZSArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJCA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbbWFpbkF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkIDogMDtcbiAgICAgIHZhciB0ZXRoZXJNaW4gPSBvZmZzZXQgKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgICAgdmFyIHRldGhlck1heCA9IG9mZnNldCArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG4gICAgICB2YXIgcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1pbihtaW4kMSwgdGV0aGVyTWluKSA6IG1pbiQxLCBvZmZzZXQsIHRldGhlciA/IG1heChtYXgkMSwgdGV0aGVyTWF4KSA6IG1heCQxKTtcbiAgICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDI7XG5cbiAgICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICAgIHZhciBfbGVuID0gYWx0QXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICAgIHZhciBpc09yaWdpblNpZGUgPSBbdG9wLCBsZWZ0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAgICAgdmFyIF9vZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJDIgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW2FsdEF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkMiA6IDA7XG5cbiAgICAgIHZhciBfdGV0aGVyTWluID0gaXNPcmlnaW5TaWRlID8gX21pbiA6IF9vZmZzZXQgLSByZWZlcmVuY2VSZWN0W19sZW5dIC0gcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXM7XG5cbiAgICAgIHZhciBfdGV0aGVyTWF4ID0gaXNPcmlnaW5TaWRlID8gX29mZnNldCArIHJlZmVyZW5jZVJlY3RbX2xlbl0gKyBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcyA6IF9tYXg7XG5cbiAgICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gdGV0aGVyICYmIGlzT3JpZ2luU2lkZSA/IHdpdGhpbk1heENsYW1wKF90ZXRoZXJNaW4sIF9vZmZzZXQsIF90ZXRoZXJNYXgpIDogd2l0aGluKHRldGhlciA/IF90ZXRoZXJNaW4gOiBfbWluLCBfb2Zmc2V0LCB0ZXRoZXIgPyBfdGV0aGVyTWF4IDogX21heCk7XG5cbiAgICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICAgIH1cblxuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IHByZXZlbnRPdmVyZmxvdyQxID0ge1xuICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdtYWluJyxcbiAgICBmbjogcHJldmVudE92ZXJmbG93LFxuICAgIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudFNjYWxlZChlbGVtZW50KSB7XG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMTtcbiAgICB2YXIgc2NhbGVZID0gcm91bmQocmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMTtcbiAgICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbiAgfSAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4gIC8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuXG4gIGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICAgIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gICAgdmFyIG9mZnNldFBhcmVudElzU2NhbGVkID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGlzRWxlbWVudFNjYWxlZChvZmZzZXRQYXJlbnQpO1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50SXNTY2FsZWQsIGlzRml4ZWQpO1xuICAgIHZhciBzY3JvbGwgPSB7XG4gICAgICBzY3JvbGxMZWZ0OiAwLFxuICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgfTtcbiAgICB2YXIgb2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcblxuICAgIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCwgdHJ1ZSk7XG4gICAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gICAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gICAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICAgIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gICAgfVxuXG4gICAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gICAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gICAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgICB9KSk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgICB2YXIgcGVuZGluZztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGVuZGluZztcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gICAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSwgY3VycmVudC5kYXRhKVxuICAgICAgfSkgOiBjdXJyZW50O1xuICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICB9LCB7fSk7IC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgIG1vZGlmaWVyczogW10sXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbiAgfTtcblxuICBmdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICAgIHN0eWxlczoge31cbiAgICAgIH07XG4gICAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhzZXRPcHRpb25zQWN0aW9uKSB7XG4gICAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2V0T3B0aW9uc0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHNldE9wdGlvbnNBY3Rpb24oc3RhdGUub3B0aW9ucykgOiBzZXRPcHRpb25zQWN0aW9uO1xuICAgICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgICAgfSk7IC8vIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBtb2RpZmllcnMgc28gdGhhdCB0aGUgY29uc3VtZXIgd2lsbCBnZXQgd2FybmVkXG5cbiAgICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFN5bmMgdXBkYXRlIOKAkyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgICAgLy8gbG9naWMuXG4gICAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSDigJMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgICAvLyBvbmUuXG5cbiAgICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgICAgICAgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJG9wdGlvbnMsXG4gICAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdDtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG4gIHZhciBjcmVhdGVQb3BwZXIkMiA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG4gIHZhciBkZWZhdWx0TW9kaWZpZXJzJDEgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxXTtcbiAgdmFyIGNyZWF0ZVBvcHBlciQxID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gICAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVycyQxXG4gIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbiAgdmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxLCBvZmZzZXQkMSwgZmxpcCQxLCBwcmV2ZW50T3ZlcmZsb3ckMSwgYXJyb3ckMSwgaGlkZSQxXTtcbiAgdmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICAgIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbiAgfSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuICBjb25zdCBQb3BwZXIgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSgvKiNfX1BVUkVfXyovT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgYWZ0ZXJNYWluLFxuICAgIGFmdGVyUmVhZCxcbiAgICBhZnRlcldyaXRlLFxuICAgIGFwcGx5U3R5bGVzOiBhcHBseVN0eWxlcyQxLFxuICAgIGFycm93OiBhcnJvdyQxLFxuICAgIGF1dG8sXG4gICAgYmFzZVBsYWNlbWVudHMsXG4gICAgYmVmb3JlTWFpbixcbiAgICBiZWZvcmVSZWFkLFxuICAgIGJlZm9yZVdyaXRlLFxuICAgIGJvdHRvbSxcbiAgICBjbGlwcGluZ1BhcmVudHMsXG4gICAgY29tcHV0ZVN0eWxlczogY29tcHV0ZVN0eWxlcyQxLFxuICAgIGNyZWF0ZVBvcHBlcixcbiAgICBjcmVhdGVQb3BwZXJCYXNlOiBjcmVhdGVQb3BwZXIkMixcbiAgICBjcmVhdGVQb3BwZXJMaXRlOiBjcmVhdGVQb3BwZXIkMSxcbiAgICBkZXRlY3RPdmVyZmxvdyxcbiAgICBlbmQsXG4gICAgZXZlbnRMaXN0ZW5lcnMsXG4gICAgZmxpcDogZmxpcCQxLFxuICAgIGhpZGU6IGhpZGUkMSxcbiAgICBsZWZ0LFxuICAgIG1haW4sXG4gICAgbW9kaWZpZXJQaGFzZXMsXG4gICAgb2Zmc2V0OiBvZmZzZXQkMSxcbiAgICBwbGFjZW1lbnRzLFxuICAgIHBvcHBlcixcbiAgICBwb3BwZXJHZW5lcmF0b3IsXG4gICAgcG9wcGVyT2Zmc2V0czogcG9wcGVyT2Zmc2V0cyQxLFxuICAgIHByZXZlbnRPdmVyZmxvdzogcHJldmVudE92ZXJmbG93JDEsXG4gICAgcmVhZCxcbiAgICByZWZlcmVuY2UsXG4gICAgcmlnaHQsXG4gICAgc3RhcnQsXG4gICAgdG9wLFxuICAgIHZhcmlhdGlvblBsYWNlbWVudHMsXG4gICAgdmlld3BvcnQsXG4gICAgd3JpdGVcbiAgfSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KSk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBkcm9wZG93bi5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJGEgPSAnZHJvcGRvd24nO1xuICBjb25zdCBEQVRBX0tFWSQ2ID0gJ2JzLmRyb3Bkb3duJztcbiAgY29uc3QgRVZFTlRfS0VZJDYgPSBgLiR7REFUQV9LRVkkNn1gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkkMyA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBFU0NBUEVfS0VZJDIgPSAnRXNjYXBlJztcbiAgY29uc3QgVEFCX0tFWSQxID0gJ1RhYic7XG4gIGNvbnN0IEFSUk9XX1VQX0tFWSQxID0gJ0Fycm93VXAnO1xuICBjb25zdCBBUlJPV19ET1dOX0tFWSQxID0gJ0Fycm93RG93bic7XG4gIGNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDI7IC8vIE1vdXNlRXZlbnQuYnV0dG9uIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiwgdXN1YWxseSB0aGUgcmlnaHQgYnV0dG9uXG5cbiAgY29uc3QgRVZFTlRfSElERSQ1ID0gYGhpZGUke0VWRU5UX0tFWSQ2fWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQ1ID0gYGhpZGRlbiR7RVZFTlRfS0VZJDZ9YDtcbiAgY29uc3QgRVZFTlRfU0hPVyQ1ID0gYHNob3cke0VWRU5UX0tFWSQ2fWA7XG4gIGNvbnN0IEVWRU5UX1NIT1dOJDUgPSBgc2hvd24ke0VWRU5UX0tFWSQ2fWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDMgPSBgY2xpY2ske0VWRU5UX0tFWSQ2fSR7REFUQV9BUElfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSA9IGBrZXlkb3duJHtFVkVOVF9LRVkkNn0ke0RBVEFfQVBJX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0tFWVVQX0RBVEFfQVBJID0gYGtleXVwJHtFVkVOVF9LRVkkNn0ke0RBVEFfQVBJX0tFWSQzfWA7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQ2ID0gJ3Nob3cnO1xuICBjb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnO1xuICBjb25zdCBDTEFTU19OQU1FX0RST1BFTkQgPSAnZHJvcGVuZCc7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUFNUQVJUID0gJ2Ryb3BzdGFydCc7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUiA9ICdkcm9wdXAtY2VudGVyJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIgPSAnZHJvcGRvd24tY2VudGVyJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUkMyA9ICdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOID0gYCR7U0VMRUNUT1JfREFUQV9UT0dHTEUkM30uJHtDTEFTU19OQU1FX1NIT1ckNn1gO1xuICBjb25zdCBTRUxFQ1RPUl9NRU5VID0gJy5kcm9wZG93bi1tZW51JztcbiAgY29uc3QgU0VMRUNUT1JfTkFWQkFSID0gJy5uYXZiYXInO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2JztcbiAgY29uc3QgU0VMRUNUT1JfVklTSUJMRV9JVEVNUyA9ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSc7XG4gIGNvbnN0IFBMQUNFTUVOVF9UT1AgPSBpc1JUTCgpID8gJ3RvcC1lbmQnIDogJ3RvcC1zdGFydCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9UT1BFTkQgPSBpc1JUTCgpID8gJ3RvcC1zdGFydCcgOiAndG9wLWVuZCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9CT1RUT00gPSBpc1JUTCgpID8gJ2JvdHRvbS1lbmQnIDogJ2JvdHRvbS1zdGFydCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9CT1RUT01FTkQgPSBpc1JUTCgpID8gJ2JvdHRvbS1zdGFydCcgOiAnYm90dG9tLWVuZCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9SSUdIVCA9IGlzUlRMKCkgPyAnbGVmdC1zdGFydCcgOiAncmlnaHQtc3RhcnQnO1xuICBjb25zdCBQTEFDRU1FTlRfTEVGVCA9IGlzUlRMKCkgPyAncmlnaHQtc3RhcnQnIDogJ2xlZnQtc3RhcnQnO1xuICBjb25zdCBQTEFDRU1FTlRfVE9QQ0VOVEVSID0gJ3RvcCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9CT1RUT01DRU5URVIgPSAnYm90dG9tJztcbiAgY29uc3QgRGVmYXVsdCQ5ID0ge1xuICAgIGF1dG9DbG9zZTogdHJ1ZSxcbiAgICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gICAgZGlzcGxheTogJ2R5bmFtaWMnLFxuICAgIG9mZnNldDogWzAsIDJdLFxuICAgIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgICByZWZlcmVuY2U6ICd0b2dnbGUnXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDkgPSB7XG4gICAgYXV0b0Nsb3NlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gICAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50fG9iamVjdCknXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlOyAvLyBkcm9wZG93biB3cmFwcGVyXG4gICAgICAvLyB0b2RvOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjMvZm9ybXMvaW5wdXQtZ3JvdXAvXG4gICAgICB0aGlzLl9tZW51ID0gU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fCBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTUVOVSwgdGhpcy5fcGFyZW50KTtcbiAgICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKCk7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkOTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkYTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICB0b2dnbGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNTaG93bigpID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKTtcbiAgICB9XG4gICAgc2hvdygpIHtcbiAgICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8IHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9O1xuICAgICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVyQ1LCByZWxhdGVkVGFyZ2V0KTtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jcmVhdGVQb3BwZXIoKTtcblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgIXRoaXMuX3BhcmVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpKSB7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgdGhpcy5fbWVudS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQ2KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckNik7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiQ1LCByZWxhdGVkVGFyZ2V0KTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfTtcbiAgICAgIHRoaXMuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KTtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKTtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUkNSwgcmVsYXRlZFRhcmdldCk7XG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ2KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInKTtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiQ1LCByZWxhdGVkVGFyZ2V0KTtcbiAgICB9XG4gICAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IHN1cGVyLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudCQxKGNvbmZpZy5yZWZlcmVuY2UpICYmIHR5cGVvZiBjb25maWcucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBQb3BwZXIgdmlydHVhbCBlbGVtZW50cyByZXF1aXJlIGEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZFxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke05BTUUkYS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9jcmVhdGVQb3BwZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKTtcbiAgICAgIH1cbiAgICAgIGxldCByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fcGFyZW50O1xuICAgICAgfSBlbHNlIGlmIChpc0VsZW1lbnQkMSh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gZ2V0RWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlO1xuICAgICAgfVxuICAgICAgY29uc3QgcG9wcGVyQ29uZmlnID0gdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKCk7XG4gICAgICB0aGlzLl9wb3BwZXIgPSBjcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgcG9wcGVyQ29uZmlnKTtcbiAgICB9XG4gICAgX2lzU2hvd24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgIH1cbiAgICBfZ2V0UGxhY2VtZW50KCkge1xuICAgICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9wYXJlbnQ7XG4gICAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUEVORCkpIHtcbiAgICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVDtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICAgIHJldHVybiBQTEFDRU1FTlRfTEVGVDtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSKSkge1xuICAgICAgICByZXR1cm4gUExBQ0VNRU5UX1RPUENFTlRFUjtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIpKSB7XG4gICAgICAgIHJldHVybiBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICAgIGNvbnN0IGlzRW5kID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9tZW51KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJzLXBvc2l0aW9uJykudHJpbSgpID09PSAnZW5kJztcbiAgICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9UT1BFTkQgOiBQTEFDRU1FTlRfVE9QO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX0JPVFRPTUVORCA6IFBMQUNFTUVOVF9CT1RUT007XG4gICAgfVxuICAgIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUikgIT09IG51bGw7XG4gICAgfVxuICAgIF9nZXRPZmZzZXQoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG9mZnNldFxuICAgICAgfSA9IHRoaXMuX2NvbmZpZztcbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgfVxuICAgIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH07XG5cbiAgICAgIC8vIERpc2FibGUgUG9wcGVyIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheSBvciBEcm9wZG93biBpcyBpbiBOYXZiYXJcbiAgICAgIGlmICh0aGlzLl9pbk5hdmJhciB8fCB0aGlzLl9jb25maWcuZGlzcGxheSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ3N0YXRpYycpOyAvLyB0b2RvOnY2IHJlbW92ZVxuICAgICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuICAgICAgICAuLi5leGVjdXRlKHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcsIFtkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuICAgICAgfTtcbiAgICB9XG4gICAgX3NlbGVjdE1lbnVJdGVtKHtcbiAgICAgIGtleSxcbiAgICAgIHRhcmdldFxuICAgIH0pIHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TLCB0aGlzLl9tZW51KS5maWx0ZXIoZWxlbWVudCA9PiBpc1Zpc2libGUoZWxlbWVudCkpO1xuICAgICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiB0YXJnZXQgaXNuJ3QgaW5jbHVkZWQgaW4gaXRlbXMgKGUuZy4gd2hlbiBleHBhbmRpbmcgdGhlIGRyb3Bkb3duKVxuICAgICAgLy8gYWxsb3cgY3ljbGluZyB0byBnZXQgdGhlIGxhc3QgaXRlbSBpbiBjYXNlIGtleSBlcXVhbHMgQVJST1dfVVBfS0VZXG4gICAgICBnZXROZXh0QWN0aXZlRWxlbWVudChpdGVtcywgdGFyZ2V0LCBrZXkgPT09IEFSUk9XX0RPV05fS0VZJDEsICFpdGVtcy5pbmNsdWRlcyh0YXJnZXQpKS5mb2N1cygpO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNsZWFyTWVudXMoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5idXR0b24gPT09IFJJR0hUX01PVVNFX0JVVFRPTiB8fCBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSAhPT0gVEFCX0tFWSQxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wZW5Ub2dnbGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTik7XG4gICAgICBmb3IgKGNvbnN0IHRvZ2dsZSBvZiBvcGVuVG9nZ2xlcykge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gRHJvcGRvd24uZ2V0SW5zdGFuY2UodG9nZ2xlKTtcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgICAgIGNvbnN0IGlzTWVudVRhcmdldCA9IGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9tZW51KTtcbiAgICAgICAgaWYgKGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9lbGVtZW50KSB8fCBjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdvdXRzaWRlJyAmJiBpc01lbnVUYXJnZXQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRhYiBuYXZpZ2F0aW9uIHRocm91Z2ggdGhlIGRyb3Bkb3duIG1lbnUgb3IgZXZlbnRzIGZyb20gY29udGFpbmVkIGlucHV0cyBzaG91bGRuJ3QgY2xvc2UgdGhlIG1lbnVcbiAgICAgICAgaWYgKGNvbnRleHQuX21lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkkMSB8fCAvaW5wdXR8c2VsZWN0fG9wdGlvbnx0ZXh0YXJlYXxmb3JtL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBjb250ZXh0Ll9lbGVtZW50XG4gICAgICAgIH07XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAvLyBJZiBub3QgYW4gVVAgfCBET1dOIHwgRVNDQVBFIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYSAmJiBpZiBrZXkgaXMgb3RoZXIgdGhhbiBFU0NBUEUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuXG4gICAgICBjb25zdCBpc0lucHV0ID0gL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSk7XG4gICAgICBjb25zdCBpc0VzY2FwZUV2ZW50ID0gZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZJDI7XG4gICAgICBjb25zdCBpc1VwT3JEb3duRXZlbnQgPSBbQVJST1dfVVBfS0VZJDEsIEFSUk9XX0RPV05fS0VZJDFdLmluY2x1ZGVzKGV2ZW50LmtleSk7XG4gICAgICBpZiAoIWlzVXBPckRvd25FdmVudCAmJiAhaXNFc2NhcGVFdmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaXNJbnB1dCAmJiAhaXNFc2NhcGVFdmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyB0b2RvOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjMvZm9ybXMvaW5wdXQtZ3JvdXAvXG4gICAgICBjb25zdCBnZXRUb2dnbGVCdXR0b24gPSB0aGlzLm1hdGNoZXMoU0VMRUNUT1JfREFUQV9UT0dHTEUkMykgPyB0aGlzIDogU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzKVswXSB8fCBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMpWzBdIHx8IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfREFUQV9UT0dHTEUkMywgZXZlbnQuZGVsZWdhdGVUYXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UoZ2V0VG9nZ2xlQnV0dG9uKTtcbiAgICAgIGlmIChpc1VwT3JEb3duRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGluc3RhbmNlLnNob3coKTtcbiAgICAgICAgaW5zdGFuY2UuX3NlbGVjdE1lbnVJdGVtKGV2ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLl9pc1Nob3duKCkpIHtcbiAgICAgICAgLy8gZWxzZSBpcyBlc2NhcGUgYW5kIHdlIGNoZWNrIGlmIGl0IGlzIHNob3duXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgICAgIGdldFRvZ2dsZUJ1dHRvbi5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcik7XG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfTUVOVSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKTtcbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQzLCBEcm9wZG93bi5jbGVhck1lbnVzKTtcbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlVUF9EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cyk7XG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMywgU0VMRUNUT1JfREFUQV9UT0dHTEUkMywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnRvZ2dsZSgpO1xuICB9KTtcblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihEcm9wZG93bik7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL3Njcm9sbEJhci5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBTRUxFQ1RPUl9GSVhFRF9DT05URU5UID0gJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnO1xuICBjb25zdCBTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCA9ICcuc3RpY2t5LXRvcCc7XG4gIGNvbnN0IFBST1BFUlRZX1BBRERJTkcgPSAncGFkZGluZy1yaWdodCc7XG4gIGNvbnN0IFBST1BFUlRZX01BUkdJTiA9ICdtYXJnaW4tcmlnaHQnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFNjcm9sbEJhckhlbHBlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvaW5uZXJXaWR0aCN1c2FnZV9ub3Rlc1xuICAgICAgY29uc3QgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgIHJldHVybiBNYXRoLmFicyh3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50V2lkdGgpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgICB0aGlzLl9kaXNhYmxlT3ZlckZsb3coKTtcbiAgICAgIC8vIGdpdmUgcGFkZGluZyB0byBlbGVtZW50IHRvIGJhbGFuY2UgdGhlIGhpZGRlbiBzY3JvbGxiYXIgd2lkdGhcbiAgICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aCk7XG4gICAgICAvLyB0cmljazogV2UgYWRqdXN0IHBvc2l0aXZlIHBhZGRpbmdSaWdodCBhbmQgbmVnYXRpdmUgbWFyZ2luUmlnaHQgdG8gc3RpY2t5LXRvcCBlbGVtZW50cyB0byBrZWVwIHNob3dpbmcgZnVsbHdpZHRoXG4gICAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpO1xuICAgICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTiwgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSAtIHdpZHRoKTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpO1xuICAgICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HKTtcbiAgICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORyk7XG4gICAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4pO1xuICAgIH1cbiAgICBpc092ZXJmbG93aW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0V2lkdGgoKSA+IDA7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9kaXNhYmxlT3ZlckZsb3coKSB7XG4gICAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50LCAnb3ZlcmZsb3cnKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB9XG4gICAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5LCBjYWxsYmFjaykge1xuICAgICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fZWxlbWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCBgJHtjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKX1weGApO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKTtcbiAgICB9XG4gICAgX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpIHtcbiAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpO1xuICAgICAgaWYgKGFjdHVhbFZhbHVlKSB7XG4gICAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSwgYWN0dWFsVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSkge1xuICAgICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpO1xuICAgICAgICAvLyBXZSBvbmx5IHdhbnQgdG8gcmVtb3ZlIHRoZSBwcm9wZXJ0eSBpZiB0aGUgdmFsdWUgaXMgYG51bGxgOyB0aGUgdmFsdWUgY2FuIGFsc28gYmUgemVyb1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlUHJvcGVydHkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIHZhbHVlKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjayk7XG4gICAgfVxuICAgIF9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBjYWxsQmFjaykge1xuICAgICAgaWYgKGlzRWxlbWVudCQxKHNlbGVjdG9yKSkge1xuICAgICAgICBjYWxsQmFjayhzZWxlY3Rvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3Qgc2VsIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgIGNhbGxCYWNrKHNlbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL2JhY2tkcm9wLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkOSA9ICdiYWNrZHJvcCc7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQ0ID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckNSA9ICdzaG93JztcbiAgY29uc3QgRVZFTlRfTU9VU0VET1dOID0gYG1vdXNlZG93bi5icy4ke05BTUUkOX1gO1xuICBjb25zdCBEZWZhdWx0JDggPSB7XG4gICAgY2xhc3NOYW1lOiAnbW9kYWwtYmFja2Ryb3AnLFxuICAgIGNsaWNrQ2FsbGJhY2s6IG51bGwsXG4gICAgaXNBbmltYXRlZDogZmFsc2UsXG4gICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgIC8vIGlmIGZhbHNlLCB3ZSB1c2UgdGhlIGJhY2tkcm9wIGhlbHBlciB3aXRob3V0IGFkZGluZyBhbnkgZWxlbWVudCB0byB0aGUgZG9tXG4gICAgcm9vdEVsZW1lbnQ6ICdib2R5JyAvLyBnaXZlIHRoZSBjaG9pY2UgdG8gcGxhY2UgYmFja2Ryb3AgdW5kZXIgZGlmZmVyZW50IGVsZW1lbnRzXG4gIH07XG5cbiAgY29uc3QgRGVmYXVsdFR5cGUkOCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGNsaWNrQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICAgIGlzQW5pbWF0ZWQ6ICdib29sZWFuJyxcbiAgICBpc1Zpc2libGU6ICdib29sZWFuJyxcbiAgICByb290RWxlbWVudDogJyhlbGVtZW50fHN0cmluZyknXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgQmFja2Ryb3AgZXh0ZW5kcyBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDg7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkODtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkOTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBzaG93KGNhbGxiYWNrKSB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FwcGVuZCgpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKTtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICByZWZsb3coZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDUpO1xuICAgICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGhpZGUoY2FsbGJhY2spIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDUpO1xuICAgICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9nZXRFbGVtZW50KCkge1xuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9IHRoaXMuX2NvbmZpZy5jbGFzc05hbWU7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFJDQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBiYWNrZHJvcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICAgIH1cbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIC8vIHVzZSBnZXRFbGVtZW50KCkgd2l0aCB0aGUgZGVmYXVsdCBcImJvZHlcIiB0byBnZXQgYSBmcmVzaCBFbGVtZW50IG9uIGVhY2ggaW5zdGFudGlhdGlvblxuICAgICAgY29uZmlnLnJvb3RFbGVtZW50ID0gZ2V0RWxlbWVudChjb25maWcucm9vdEVsZW1lbnQpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX2FwcGVuZCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KCk7XG4gICAgICB0aGlzLl9jb25maWcucm9vdEVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsIEVWRU5UX01PVVNFRE9XTiwgKCkgPT4ge1xuICAgICAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5jbGlja0NhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5faXNBcHBlbmRlZCA9IHRydWU7XG4gICAgfVxuICAgIF9lbXVsYXRlQW5pbWF0aW9uKGNhbGxiYWNrKSB7XG4gICAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCB0aGlzLl9nZXRFbGVtZW50KCksIHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvZm9jdXN0cmFwLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkOCA9ICdmb2N1c3RyYXAnO1xuICBjb25zdCBEQVRBX0tFWSQ1ID0gJ2JzLmZvY3VzdHJhcCc7XG4gIGNvbnN0IEVWRU5UX0tFWSQ1ID0gYC4ke0RBVEFfS0VZJDV9YDtcbiAgY29uc3QgRVZFTlRfRk9DVVNJTiQyID0gYGZvY3VzaW4ke0VWRU5UX0tFWSQ1fWA7XG4gIGNvbnN0IEVWRU5UX0tFWURPV05fVEFCID0gYGtleWRvd24udGFiJHtFVkVOVF9LRVkkNX1gO1xuICBjb25zdCBUQUJfS0VZID0gJ1RhYic7XG4gIGNvbnN0IFRBQl9OQVZfRk9SV0FSRCA9ICdmb3J3YXJkJztcbiAgY29uc3QgVEFCX05BVl9CQUNLV0FSRCA9ICdiYWNrd2FyZCc7XG4gIGNvbnN0IERlZmF1bHQkNyA9IHtcbiAgICBhdXRvZm9jdXM6IHRydWUsXG4gICAgdHJhcEVsZW1lbnQ6IG51bGwgLy8gVGhlIGVsZW1lbnQgdG8gdHJhcCBmb2N1cyBpbnNpZGUgb2ZcbiAgfTtcblxuICBjb25zdCBEZWZhdWx0VHlwZSQ3ID0ge1xuICAgIGF1dG9mb2N1czogJ2Jvb2xlYW4nLFxuICAgIHRyYXBFbGVtZW50OiAnZWxlbWVudCdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBGb2N1c1RyYXAgZXh0ZW5kcyBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBudWxsO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ3O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDc7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDg7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLnRyYXBFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkkNSk7IC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOJDIsIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUZvY3VzaW4oZXZlbnQpKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9UQUIsIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUtleWRvd24oZXZlbnQpKTtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSQ1KTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2hhbmRsZUZvY3VzaW4oZXZlbnQpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdHJhcEVsZW1lbnRcbiAgICAgIH0gPSB0aGlzLl9jb25maWc7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBkb2N1bWVudCB8fCBldmVudC50YXJnZXQgPT09IHRyYXBFbGVtZW50IHx8IHRyYXBFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZWxlbWVudHMgPSBTZWxlY3RvckVuZ2luZS5mb2N1c2FibGVDaGlsZHJlbih0cmFwRWxlbWVudCk7XG4gICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRyYXBFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPT09IFRBQl9OQVZfQkFDS1dBUkQpIHtcbiAgICAgICAgZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRzWzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIF9oYW5kbGVLZXlkb3duKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5ICE9PSBUQUJfS0VZKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBldmVudC5zaGlmdEtleSA/IFRBQl9OQVZfQkFDS1dBUkQgOiBUQUJfTkFWX0ZPUldBUkQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBtb2RhbC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDcgPSAnbW9kYWwnO1xuICBjb25zdCBEQVRBX0tFWSQ0ID0gJ2JzLm1vZGFsJztcbiAgY29uc3QgRVZFTlRfS0VZJDQgPSBgLiR7REFUQV9LRVkkNH1gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkkMiA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBFU0NBUEVfS0VZJDEgPSAnRXNjYXBlJztcbiAgY29uc3QgRVZFTlRfSElERSQ0ID0gYGhpZGUke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEJDEgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOJDQgPSBgaGlkZGVuJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9TSE9XJDQgPSBgc2hvdyR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kNCA9IGBzaG93biR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfUkVTSVpFJDEgPSBgcmVzaXplJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MkMSA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDIgPSBgY2xpY2ske0VWRU5UX0tFWSQ0fSR7REFUQV9BUElfS0VZJDJ9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9PUEVOID0gJ21vZGFsLW9wZW4nO1xuICBjb25zdCBDTEFTU19OQU1FX0ZBREUkMyA9ICdmYWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDQgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX05BTUVfU1RBVElDID0gJ21vZGFsLXN0YXRpYyc7XG4gIGNvbnN0IE9QRU5fU0VMRUNUT1IkMSA9ICcubW9kYWwuc2hvdyc7XG4gIGNvbnN0IFNFTEVDVE9SX0RJQUxPRyA9ICcubW9kYWwtZGlhbG9nJztcbiAgY29uc3QgU0VMRUNUT1JfTU9EQUxfQk9EWSA9ICcubW9kYWwtYm9keSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFJDIgPSAnW2RhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIl0nO1xuICBjb25zdCBEZWZhdWx0JDYgPSB7XG4gICAgYmFja2Ryb3A6IHRydWUsXG4gICAgZm9jdXM6IHRydWUsXG4gICAga2V5Ym9hcmQ6IHRydWVcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkNiA9IHtcbiAgICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICAgIGZvY3VzOiAnYm9vbGVhbicsXG4gICAga2V5Ym9hcmQ6ICdib29sZWFuJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIE1vZGFsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5fZGlhbG9nID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9ESUFMT0csIHRoaXMuX2VsZW1lbnQpO1xuICAgICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKTtcbiAgICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKTtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2Nyb2xsQmFyID0gbmV3IFNjcm9sbEJhckhlbHBlcigpO1xuICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkNjtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ2O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQ3O1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpO1xuICAgIH1cbiAgICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XJDQsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSk7XG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNTaG93biA9IHRydWU7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fc2Nyb2xsQmFyLmhpZGUoKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pO1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKCk7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5zaG93KCgpID0+IHRoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSQ0KTtcbiAgICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckNCk7XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2hpZGVNb2RhbCgpLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgZm9yIChjb25zdCBodG1sRWxlbWVudCBvZiBbd2luZG93LCB0aGlzLl9kaWFsb2ddKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vZmYoaHRtbEVsZW1lbnQsIEVWRU5UX0tFWSQ0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuICAgIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuX2FkanVzdERpYWxvZygpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICAgIGlzVmlzaWJsZTogQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApLFxuICAgICAgICAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWUsXG4gICAgICAgIGlzQW5pbWF0ZWQ6IHRoaXMuX2lzQW5pbWF0ZWQoKVxuICAgICAgfSk7XG4gICAgfVxuICAgIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuICAgICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuICAgICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICAgIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICAvLyB0cnkgdG8gYXBwZW5kIGR5bmFtaWMgbW9kYWxcbiAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSk7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgIGNvbnN0IG1vZGFsQm9keSA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTU9EQUxfQk9EWSwgdGhpcy5fZGlhbG9nKTtcbiAgICAgIGlmIChtb2RhbEJvZHkpIHtcbiAgICAgICAgbW9kYWxCb2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICB9XG4gICAgICByZWZsb3codGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDQpO1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOJDQsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2sodHJhbnNpdGlvbkNvbXBsZXRlLCB0aGlzLl9kaWFsb2csIHRoaXMuX2lzQW5pbWF0ZWQoKSk7XG4gICAgfVxuICAgIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MkMSwgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZJDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCk7XG4gICAgICB9KTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSQxLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmICF0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgICB0aGlzLl9hZGp1c3REaWFsb2coKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgICAgLy8gYSBiYWQgdHJpY2sgdG8gc2VncmVnYXRlIGNsaWNrcyB0aGF0IG1heSBzdGFydCBpbnNpZGUgZGlhbG9nIGJ1dCBlbmQgb3V0c2lkZSwgYW5kIGF2b2lkIGxpc3RlbiB0byBzY3JvbGxiYXIgY2xpY2tzXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgZXZlbnQyID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0IHx8IHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50Mi50YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBfaGlkZU1vZGFsKCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpO1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX09QRU4pO1xuICAgICAgICB0aGlzLl9yZXNldEFkanVzdG1lbnRzKCk7XG4gICAgICAgIHRoaXMuX3Njcm9sbEJhci5yZXNldCgpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4kNCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFJDMpO1xuICAgIH1cbiAgICBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEJDEpO1xuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IGluaXRpYWxPdmVyZmxvd1kgPSB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WTtcbiAgICAgIC8vIHJldHVybiBpZiB0aGUgZm9sbG93aW5nIGJhY2tncm91bmQgdHJhbnNpdGlvbiBoYXNuJ3QgeWV0IGNvbXBsZXRlZFxuICAgICAgaWYgKGluaXRpYWxPdmVyZmxvd1kgPT09ICdoaWRkZW4nIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU1RBVElDKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU1RBVElDKTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TVEFUSUMpO1xuICAgICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9IGluaXRpYWxPdmVyZmxvd1k7XG4gICAgICAgIH0sIHRoaXMuX2RpYWxvZyk7XG4gICAgICB9LCB0aGlzLl9kaWFsb2cpO1xuICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gICAgICovXG5cbiAgICBfYWRqdXN0RGlhbG9nKCkge1xuICAgICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLl9zY3JvbGxCYXIuZ2V0V2lkdGgoKTtcbiAgICAgIGNvbnN0IGlzQm9keU92ZXJmbG93aW5nID0gc2Nyb2xsYmFyV2lkdGggPiAwO1xuICAgICAgaWYgKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcbiAgICAgIH1cbiAgICAgIGlmICghaXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gaXNSVEwoKSA/ICdwYWRkaW5nUmlnaHQnIDogJ3BhZGRpbmdMZWZ0JztcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XG4gICAgICB9XG4gICAgfVxuICAgIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDIsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7XG4gICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX1NIT1ckNCwgc2hvd0V2ZW50ID0+IHtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4kNCwgKCkgPT4ge1xuICAgICAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgbW9kYWwgdG9nZ2xlciB3aGlsZSBhbm90aGVyIG9uZSBpcyBvcGVuXG4gICAgY29uc3QgYWxyZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IkMSk7XG4gICAgaWYgKGFscmVhZHlPcGVuKSB7XG4gICAgICBNb2RhbC5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpO1xuICAgIGRhdGEudG9nZ2xlKHRoaXMpO1xuICB9KTtcbiAgZW5hYmxlRGlzbWlzc1RyaWdnZXIoTW9kYWwpO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKE1vZGFsKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIG9mZmNhbnZhcy5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDYgPSAnb2ZmY2FudmFzJztcbiAgY29uc3QgREFUQV9LRVkkMyA9ICdicy5vZmZjYW52YXMnO1xuICBjb25zdCBFVkVOVF9LRVkkMyA9IGAuJHtEQVRBX0tFWSQzfWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQxID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkkMiA9IGBsb2FkJHtFVkVOVF9LRVkkM30ke0RBVEFfQVBJX0tFWSQxfWA7XG4gIGNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDMgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPV0lORyQxID0gJ3Nob3dpbmcnO1xuICBjb25zdCBDTEFTU19OQU1FX0hJRElORyA9ICdoaWRpbmcnO1xuICBjb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QID0gJ29mZmNhbnZhcy1iYWNrZHJvcCc7XG4gIGNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm9mZmNhbnZhcy5zaG93JztcbiAgY29uc3QgRVZFTlRfU0hPVyQzID0gYHNob3cke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX1NIT1dOJDMgPSBgc2hvd24ke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0hJREUkMyA9IGBoaWRlJHtFVkVOVF9LRVkkM31gO1xuICBjb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVkkM31gO1xuICBjb25zdCBFVkVOVF9ISURERU4kMyA9IGBoaWRkZW4ke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDEgPSBgY2xpY2ske0VWRU5UX0tFWSQzfSR7REFUQV9BUElfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUkMSA9ICdbZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIl0nO1xuICBjb25zdCBEZWZhdWx0JDUgPSB7XG4gICAgYmFja2Ryb3A6IHRydWUsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgc2Nyb2xsOiBmYWxzZVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQ1ID0ge1xuICAgIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgICBzY3JvbGw6ICdib29sZWFuJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIE9mZmNhbnZhcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKCk7XG4gICAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKCk7XG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ1O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDY7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldCk7XG4gICAgfVxuICAgIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVyQzLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pO1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlO1xuICAgICAgdGhpcy5fYmFja2Ryb3Auc2hvdygpO1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5oaWRlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HJDEpO1xuICAgICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsIHx8IHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckMyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkckMSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOJDMsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSQzKTtcbiAgICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgdGhpcy5fZWxlbWVudC5ibHVyKCk7XG4gICAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURJTkcpO1xuICAgICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpO1xuICAgICAgY29uc3QgY29tcGxldGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQzLCBDTEFTU19OQU1FX0hJRElORyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG4gICAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiQzKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbGJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICAgIGNvbnN0IGNsaWNrQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH07XG5cbiAgICAgIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApO1xuICAgICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICAgIGNsYXNzTmFtZTogQ0xBU1NfTkFNRV9CQUNLRFJPUCxcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBpc0FuaW1hdGVkOiB0cnVlLFxuICAgICAgICByb290RWxlbWVudDogdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICBjbGlja0NhbGxiYWNrOiBpc1Zpc2libGUgPyBjbGlja0NhbGxiYWNrIDogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICAgIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuICAgICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuICAgICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDEsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDEsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7XG4gICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiQzLCAoKSA9PiB7XG4gICAgICAvLyBmb2N1cyBvbiB0cmlnZ2VyIHdoZW4gaXQgaXMgY2xvc2VkXG4gICAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgYSB0b2dnbGVyIG9mIGFuIG9mZmNhbnZhcywgd2hpbGUgYW5vdGhlciBpcyBvcGVuXG4gICAgY29uc3QgYWxyZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IpO1xuICAgIGlmIChhbHJlYWR5T3BlbiAmJiBhbHJlYWR5T3BlbiAhPT0gdGFyZ2V0KSB7XG4gICAgICBPZmZjYW52YXMuZ2V0SW5zdGFuY2UoYWxyZWFkeU9wZW4pLmhpZGUoKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldCk7XG4gICAgZGF0YS50b2dnbGUodGhpcyk7XG4gIH0pO1xuICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJJDIsICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoT1BFTl9TRUxFQ1RPUikpIHtcbiAgICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHNlbGVjdG9yKS5zaG93KCk7XG4gICAgfVxuICB9KTtcbiAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoJ1thcmlhLW1vZGFsXVtjbGFzcyo9c2hvd11bY2xhc3MqPW9mZmNhbnZhcy1dJykpIHtcbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBlbmFibGVEaXNtaXNzVHJpZ2dlcihPZmZjYW52YXMpO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKE9mZmNhbnZhcyk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL3Nhbml0aXplci5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgdXJpQXR0cmlidXRlcyA9IG5ldyBTZXQoWydiYWNrZ3JvdW5kJywgJ2NpdGUnLCAnaHJlZicsICdpdGVtdHlwZScsICdsb25nZGVzYycsICdwb3N0ZXInLCAnc3JjJywgJ3hsaW5rOmhyZWYnXSk7XG4gIGNvbnN0IEFSSUFfQVRUUklCVVRFX1BBVFRFUk4gPSAvXmFyaWEtW1xcdy1dKiQvaTtcblxuICAvKipcbiAgICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxuICAgKlxuICAgKiBTaG91dC1vdXQgdG8gQW5ndWxhciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvMTIuMi54L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gICAqL1xuICBjb25zdCBTQUZFX1VSTF9QQVRURVJOID0gL14oPzooPzpodHRwcz98bWFpbHRvfGZ0cHx0ZWx8ZmlsZXxzbXMpOnxbXiMmLzo/XSooPzpbIy8/XXwkKSkvaTtcblxuICAvKipcbiAgICogQSBwYXR0ZXJuIHRoYXQgbWF0Y2hlcyBzYWZlIGRhdGEgVVJMcy4gT25seSBtYXRjaGVzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gdHlwZXMuXG4gICAqXG4gICAqIFNob3V0LW91dCB0byBBbmd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi8xMi4yLngvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAgICovXG4gIGNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGE6KD86aW1hZ2VcXC8oPzpibXB8Z2lmfGpwZWd8anBnfHBuZ3x0aWZmfHdlYnApfHZpZGVvXFwvKD86bXBlZ3xtcDR8b2dnfHdlYm0pfGF1ZGlvXFwvKD86bXAzfG9nYXxvZ2d8b3B1cykpO2Jhc2U2NCxbXFxkKy9hLXpdKz0qJC9pO1xuICBjb25zdCBhbGxvd2VkQXR0cmlidXRlID0gKGF0dHJpYnV0ZSwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpID0+IHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICBpZiAodXJpQXR0cmlidXRlcy5oYXMoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oU0FGRV9VUkxfUEFUVEVSTi50ZXN0KGF0dHJpYnV0ZS5ub2RlVmFsdWUpIHx8IERBVEFfVVJMX1BBVFRFUk4udGVzdChhdHRyaWJ1dGUubm9kZVZhbHVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cbiAgICByZXR1cm4gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGF0dHJpYnV0ZVJlZ2V4ID0+IGF0dHJpYnV0ZVJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKS5zb21lKHJlZ2V4ID0+IHJlZ2V4LnRlc3QoYXR0cmlidXRlTmFtZSkpO1xuICB9O1xuICBjb25zdCBEZWZhdWx0QWxsb3dsaXN0ID0ge1xuICAgIC8vIEdsb2JhbCBhdHRyaWJ1dGVzIGFsbG93ZWQgb24gYW55IHN1cHBsaWVkIGVsZW1lbnQgYmVsb3cuXG4gICAgJyonOiBbJ2NsYXNzJywgJ2RpcicsICdpZCcsICdsYW5nJywgJ3JvbGUnLCBBUklBX0FUVFJJQlVURV9QQVRURVJOXSxcbiAgICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICAgIGFyZWE6IFtdLFxuICAgIGI6IFtdLFxuICAgIGJyOiBbXSxcbiAgICBjb2w6IFtdLFxuICAgIGNvZGU6IFtdLFxuICAgIGRpdjogW10sXG4gICAgZW06IFtdLFxuICAgIGhyOiBbXSxcbiAgICBoMTogW10sXG4gICAgaDI6IFtdLFxuICAgIGgzOiBbXSxcbiAgICBoNDogW10sXG4gICAgaDU6IFtdLFxuICAgIGg2OiBbXSxcbiAgICBpOiBbXSxcbiAgICBpbWc6IFsnc3JjJywgJ3NyY3NldCcsICdhbHQnLCAndGl0bGUnLCAnd2lkdGgnLCAnaGVpZ2h0J10sXG4gICAgbGk6IFtdLFxuICAgIG9sOiBbXSxcbiAgICBwOiBbXSxcbiAgICBwcmU6IFtdLFxuICAgIHM6IFtdLFxuICAgIHNtYWxsOiBbXSxcbiAgICBzcGFuOiBbXSxcbiAgICBzdWI6IFtdLFxuICAgIHN1cDogW10sXG4gICAgc3Ryb25nOiBbXSxcbiAgICB1OiBbXSxcbiAgICB1bDogW11cbiAgfTtcbiAgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIGFsbG93TGlzdCwgc2FuaXRpemVGdW5jdGlvbikge1xuICAgIGlmICghdW5zYWZlSHRtbC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB1bnNhZmVIdG1sO1xuICAgIH1cbiAgICBpZiAoc2FuaXRpemVGdW5jdGlvbiAmJiB0eXBlb2Ygc2FuaXRpemVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNhbml0aXplRnVuY3Rpb24odW5zYWZlSHRtbCk7XG4gICAgfVxuICAgIGNvbnN0IGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgY29uc3QgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJyk7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXS5jb25jYXQoLi4uY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKTtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnROYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFPYmplY3Qua2V5cyhhbGxvd0xpc3QpLmluY2x1ZGVzKGVsZW1lbnROYW1lKSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5jb25jYXQoLi4uZWxlbWVudC5hdHRyaWJ1dGVzKTtcbiAgICAgIGNvbnN0IGFsbG93ZWRBdHRyaWJ1dGVzID0gW10uY29uY2F0KGFsbG93TGlzdFsnKiddIHx8IFtdLCBhbGxvd0xpc3RbZWxlbWVudE5hbWVdIHx8IFtdKTtcbiAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZUxpc3QpIHtcbiAgICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlKGF0dHJpYnV0ZSwgYWxsb3dlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL3RlbXBsYXRlLWZhY3RvcnkuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQ1ID0gJ1RlbXBsYXRlRmFjdG9yeSc7XG4gIGNvbnN0IERlZmF1bHQkNCA9IHtcbiAgICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gICAgY29udGVudDoge30sXG4gICAgLy8geyBzZWxlY3RvciA6IHRleHQgLCAgc2VsZWN0b3IyIDogdGV4dDIgLCB9XG4gICAgZXh0cmFDbGFzczogJycsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgc2FuaXRpemU6IHRydWUsXG4gICAgc2FuaXRpemVGbjogbnVsbCxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PC9kaXY+J1xuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQ0ID0ge1xuICAgIGFsbG93TGlzdDogJ29iamVjdCcsXG4gICAgY29udGVudDogJ29iamVjdCcsXG4gICAgZXh0cmFDbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBodG1sOiAnYm9vbGVhbicsXG4gICAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgICB0ZW1wbGF0ZTogJ3N0cmluZydcbiAgfTtcbiAgY29uc3QgRGVmYXVsdENvbnRlbnRUeXBlID0ge1xuICAgIGVudHJ5OiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9ufG51bGwpJyxcbiAgICBzZWxlY3RvcjogJyhzdHJpbmd8ZWxlbWVudCknXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgVGVtcGxhdGVGYWN0b3J5IGV4dGVuZHMgQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkNDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ0O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQ1O1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGdldENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9jb25maWcuY29udGVudCkubWFwKGNvbmZpZyA9PiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihjb25maWcpKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgfVxuICAgIGhhc0NvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDb250ZW50KCkubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgY2hhbmdlQ29udGVudChjb250ZW50KSB7XG4gICAgICB0aGlzLl9jaGVja0NvbnRlbnQoY29udGVudCk7XG4gICAgICB0aGlzLl9jb25maWcuY29udGVudCA9IHtcbiAgICAgICAgLi4udGhpcy5fY29uZmlnLmNvbnRlbnQsXG4gICAgICAgIC4uLmNvbnRlbnRcbiAgICAgIH07XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9IdG1sKCkge1xuICAgICAgY29uc3QgdGVtcGxhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0ZW1wbGF0ZVdyYXBwZXIuaW5uZXJIVE1MID0gdGhpcy5fbWF5YmVTYW5pdGl6ZSh0aGlzLl9jb25maWcudGVtcGxhdGUpO1xuICAgICAgZm9yIChjb25zdCBbc2VsZWN0b3IsIHRleHRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KSkge1xuICAgICAgICB0aGlzLl9zZXRDb250ZW50KHRlbXBsYXRlV3JhcHBlciwgdGV4dCwgc2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgY29uc3QgdGVtcGxhdGUgPSB0ZW1wbGF0ZVdyYXBwZXIuY2hpbGRyZW5bMF07XG4gICAgICBjb25zdCBleHRyYUNsYXNzID0gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmV4dHJhQ2xhc3MpO1xuICAgICAgaWYgKGV4dHJhQ2xhc3MpIHtcbiAgICAgICAgdGVtcGxhdGUuY2xhc3NMaXN0LmFkZCguLi5leHRyYUNsYXNzLnNwbGl0KCcgJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZykge1xuICAgICAgc3VwZXIuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fY2hlY2tDb250ZW50KGNvbmZpZy5jb250ZW50KTtcbiAgICB9XG4gICAgX2NoZWNrQ29udGVudChhcmcpIHtcbiAgICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCBjb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhhcmcpKSB7XG4gICAgICAgIHN1cGVyLl90eXBlQ2hlY2tDb25maWcoe1xuICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgIGVudHJ5OiBjb250ZW50XG4gICAgICAgIH0sIERlZmF1bHRDb250ZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9zZXRDb250ZW50KHRlbXBsYXRlLCBjb250ZW50LCBzZWxlY3Rvcikge1xuICAgICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvciwgdGVtcGxhdGUpO1xuICAgICAgaWYgKCF0ZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29udGVudCA9IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGNvbnRlbnQpO1xuICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgIHRlbXBsYXRlRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGlzRWxlbWVudCQxKGNvbnRlbnQpKSB7XG4gICAgICAgIHRoaXMuX3B1dEVsZW1lbnRJblRlbXBsYXRlKGdldEVsZW1lbnQoY29udGVudCksIHRlbXBsYXRlRWxlbWVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fbWF5YmVTYW5pdGl6ZShjb250ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGVtcGxhdGVFbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICB9XG4gICAgX21heWJlU2FuaXRpemUoYXJnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNhbml0aXplID8gc2FuaXRpemVIdG1sKGFyZywgdGhpcy5fY29uZmlnLmFsbG93TGlzdCwgdGhpcy5fY29uZmlnLnNhbml0aXplRm4pIDogYXJnO1xuICAgIH1cbiAgICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gZXhlY3V0ZShhcmcsIFt0aGlzXSk7XG4gICAgfVxuICAgIF9wdXRFbGVtZW50SW5UZW1wbGF0ZShlbGVtZW50LCB0ZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRlbXBsYXRlRWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRlbXBsYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB0b29sdGlwLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkNCA9ICd0b29sdGlwJztcbiAgY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gbmV3IFNldChbJ3Nhbml0aXplJywgJ2FsbG93TGlzdCcsICdzYW5pdGl6ZUZuJ10pO1xuICBjb25zdCBDTEFTU19OQU1FX0ZBREUkMiA9ICdmYWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9NT0RBTCA9ICdtb2RhbCc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQyID0gJ3Nob3cnO1xuICBjb25zdCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSID0gJy50b29sdGlwLWlubmVyJztcbiAgY29uc3QgU0VMRUNUT1JfTU9EQUwgPSBgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gO1xuICBjb25zdCBFVkVOVF9NT0RBTF9ISURFID0gJ2hpZGUuYnMubW9kYWwnO1xuICBjb25zdCBUUklHR0VSX0hPVkVSID0gJ2hvdmVyJztcbiAgY29uc3QgVFJJR0dFUl9GT0NVUyA9ICdmb2N1cyc7XG4gIGNvbnN0IFRSSUdHRVJfQ0xJQ0sgPSAnY2xpY2snO1xuICBjb25zdCBUUklHR0VSX01BTlVBTCA9ICdtYW51YWwnO1xuICBjb25zdCBFVkVOVF9ISURFJDIgPSAnaGlkZSc7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQyID0gJ2hpZGRlbic7XG4gIGNvbnN0IEVWRU5UX1NIT1ckMiA9ICdzaG93JztcbiAgY29uc3QgRVZFTlRfU0hPV04kMiA9ICdzaG93bic7XG4gIGNvbnN0IEVWRU5UX0lOU0VSVEVEID0gJ2luc2VydGVkJztcbiAgY29uc3QgRVZFTlRfQ0xJQ0skMSA9ICdjbGljayc7XG4gIGNvbnN0IEVWRU5UX0ZPQ1VTSU4kMSA9ICdmb2N1c2luJztcbiAgY29uc3QgRVZFTlRfRk9DVVNPVVQkMSA9ICdmb2N1c291dCc7XG4gIGNvbnN0IEVWRU5UX01PVVNFRU5URVIgPSAnbW91c2VlbnRlcic7XG4gIGNvbnN0IEVWRU5UX01PVVNFTEVBVkUgPSAnbW91c2VsZWF2ZSc7XG4gIGNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gICAgQVVUTzogJ2F1dG8nLFxuICAgIFRPUDogJ3RvcCcsXG4gICAgUklHSFQ6IGlzUlRMKCkgPyAnbGVmdCcgOiAncmlnaHQnLFxuICAgIEJPVFRPTTogJ2JvdHRvbScsXG4gICAgTEVGVDogaXNSVEwoKSA/ICdyaWdodCcgOiAnbGVmdCdcbiAgfTtcbiAgY29uc3QgRGVmYXVsdCQzID0ge1xuICAgIGFsbG93TGlzdDogRGVmYXVsdEFsbG93bGlzdCxcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgY3VzdG9tQ2xhc3M6ICcnLFxuICAgIGRlbGF5OiAwLFxuICAgIGZhbGxiYWNrUGxhY2VtZW50czogWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBvZmZzZXQ6IFswLCAwXSxcbiAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgICBzYW5pdGl6ZTogdHJ1ZSxcbiAgICBzYW5pdGl6ZUZuOiBudWxsLFxuICAgIHNlbGVjdG9yOiBmYWxzZSxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICsgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PicgKyAnPC9kaXY+JyxcbiAgICB0aXRsZTogJycsXG4gICAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJ1xuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQzID0ge1xuICAgIGFsbG93TGlzdDogJ29iamVjdCcsXG4gICAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gICAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICAgIGN1c3RvbUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgICBmYWxsYmFja1BsYWNlbWVudHM6ICdhcnJheScsXG4gICAgaHRtbDogJ2Jvb2xlYW4nLFxuICAgIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBwbGFjZW1lbnQ6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gICAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgICB0aXRsZTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICAgIHRyaWdnZXI6ICdzdHJpbmcnXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgVG9vbHRpcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKTtcbiAgICAgIH1cbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG5cbiAgICAgIC8vIFByaXZhdGVcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gMDtcbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0ge307XG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5ID0gbnVsbDtcbiAgICAgIHRoaXMuX25ld0NvbnRlbnQgPSBudWxsO1xuXG4gICAgICAvLyBQcm90ZWN0ZWRcbiAgICAgIHRoaXMudGlwID0gbnVsbDtcbiAgICAgIHRoaXMuX3NldExpc3RlbmVycygpO1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5fZml4VGl0bGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkMztcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQzO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQ0O1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGVuYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGRpc2FibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWQ7XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhdGhpcy5fYWN0aXZlVHJpZ2dlci5jbGljaztcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fZW50ZXIoKTtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcik7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKTtcbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgc2hvdygpIHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJyk7XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLl9pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9TSE9XJDIpKTtcbiAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBmaW5kU2hhZG93Um9vdCh0aGlzLl9lbGVtZW50KTtcbiAgICAgIGNvbnN0IGlzSW5UaGVEb20gPSAoc2hhZG93Um9vdCB8fCB0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5jb250YWlucyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHRvZG8gdjYgcmVtb3ZlIHRoaXMgT1IgbWFrZSBpdCBvcHRpb25hbFxuICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuICAgICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXAuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29udGFpbmVyXG4gICAgICB9ID0gdGhpcy5fY29uZmlnO1xuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMudGlwKSkge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRpcCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0lOU0VSVEVEKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9wb3BwZXIgPSB0aGlzLl9jcmVhdGVQb3BwZXIodGlwKTtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQyKTtcblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9TSE9XTiQyKSk7XG4gICAgICAgIGlmICh0aGlzLl9pc0hvdmVyZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5fbGVhdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgdGhpcy5faXNBbmltYXRlZCgpKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0hJREUkMikpO1xuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRpcEVsZW1lbnQoKTtcbiAgICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQyKTtcblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gbnVsbDsgLy8gaXQgaXMgYSB0cmljayB0byBzdXBwb3J0IG1hbnVhbCB0cmlnZ2VyaW5nXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0hJRERFTiQyKSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIHRoaXMuX2lzQW5pbWF0ZWQoKSk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByb3RlY3RlZFxuICAgIF9pc1dpdGhDb250ZW50KCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fZ2V0VGl0bGUoKSk7XG4gICAgfVxuICAgIF9nZXRUaXBFbGVtZW50KCkge1xuICAgICAgaWYgKCF0aGlzLnRpcCkge1xuICAgICAgICB0aGlzLnRpcCA9IHRoaXMuX2NyZWF0ZVRpcEVsZW1lbnQodGhpcy5fbmV3Q29udGVudCB8fCB0aGlzLl9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy50aXA7XG4gICAgfVxuICAgIF9jcmVhdGVUaXBFbGVtZW50KGNvbnRlbnQpIHtcbiAgICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRlbXBsYXRlRmFjdG9yeShjb250ZW50KS50b0h0bWwoKTtcblxuICAgICAgLy8gdG9kbzogcmVtb3ZlIHRoaXMgY2hlY2sgb24gdjZcbiAgICAgIGlmICghdGlwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFJDIsIENMQVNTX05BTUVfU0hPVyQyKTtcbiAgICAgIC8vIHRvZG86IG9uIHY2IHRoZSBmb2xsb3dpbmcgY2FuIGJlIGFjaGlldmVkIHdpdGggQ1NTIG9ubHlcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKGBicy0ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXV0b2ApO1xuICAgICAgY29uc3QgdGlwSWQgPSBnZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKS50b1N0cmluZygpO1xuICAgICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZCk7XG4gICAgICBpZiAodGhpcy5faXNBbmltYXRlZCgpKSB7XG4gICAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSQyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aXA7XG4gICAgfVxuICAgIHNldENvbnRlbnQoY29udGVudCkge1xuICAgICAgdGhpcy5fbmV3Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKTtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICAgIF9nZXRUZW1wbGF0ZUZhY3RvcnkoY29udGVudCkge1xuICAgICAgaWYgKHRoaXMuX3RlbXBsYXRlRmFjdG9yeSkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkuY2hhbmdlQ29udGVudChjb250ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeSA9IG5ldyBUZW1wbGF0ZUZhY3Rvcnkoe1xuICAgICAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgICAgICAvLyB0aGUgYGNvbnRlbnRgIHZhciBoYXMgdG8gYmUgYWZ0ZXIgYHRoaXMuX2NvbmZpZ2BcbiAgICAgICAgICAvLyB0byBvdmVycmlkZSBjb25maWcuY29udGVudCBpbiBjYXNlIG9mIHBvcG92ZXJcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIGV4dHJhQ2xhc3M6IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzcylcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVGYWN0b3J5O1xuICAgIH1cbiAgICBfZ2V0Q29udGVudEZvclRlbXBsYXRlKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW1NFTEVDVE9SX1RPT0xUSVBfSU5ORVJdOiB0aGlzLl9nZXRUaXRsZSgpXG4gICAgICB9O1xuICAgIH1cbiAgICBfZ2V0VGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLnRpdGxlKSB8fCB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5nZXRPckNyZWF0ZUluc3RhbmNlKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKTtcbiAgICB9XG4gICAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLmFuaW1hdGlvbiB8fCB0aGlzLnRpcCAmJiB0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFJDIpO1xuICAgIH1cbiAgICBfaXNTaG93bigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpcCAmJiB0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuICAgIH1cbiAgICBfY3JlYXRlUG9wcGVyKHRpcCkge1xuICAgICAgY29uc3QgcGxhY2VtZW50ID0gZXhlY3V0ZSh0aGlzLl9jb25maWcucGxhY2VtZW50LCBbdGhpcywgdGlwLCB0aGlzLl9lbGVtZW50XSk7XG4gICAgICBjb25zdCBhdHRhY2htZW50ID0gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV07XG4gICAgICByZXR1cm4gY3JlYXRlUG9wcGVyKHRoaXMuX2VsZW1lbnQsIHRpcCwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpKTtcbiAgICB9XG4gICAgX2dldE9mZnNldCgpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9ID0gdGhpcy5fY29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCkpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9XG4gICAgX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIGV4ZWN1dGUoYXJnLCBbdGhpcy5fZWxlbWVudF0pO1xuICAgIH1cbiAgICBfZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogdGhpcy5fY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50c1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBlbGVtZW50OiBgLiR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hcnJvd2BcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAncHJlU2V0UGxhY2VtZW50JyxcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIHBoYXNlOiAnYmVmb3JlTWFpbicsXG4gICAgICAgICAgZm46IGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gUHJlLXNldCBQb3BwZXIncyBwbGFjZW1lbnQgYXR0cmlidXRlIGluIG9yZGVyIHRvIHJlYWQgdGhlIGFycm93IHNpemVzIHByb3Blcmx5LlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBQb3BwZXIgbWl4ZXMgdXAgdGhlIHdpZHRoIGFuZCBoZWlnaHQgZGltZW5zaW9ucyBzaW5jZSB0aGUgaW5pdGlhbCBhcnJvdyBzdHlsZSBpcyBmb3IgdG9wIHBsYWNlbWVudFxuICAgICAgICAgICAgdGhpcy5fZ2V0VGlwRWxlbWVudCgpLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3BwZXItcGxhY2VtZW50JywgZGF0YS5zdGF0ZS5wbGFjZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAgIC4uLmV4ZWN1dGUodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZywgW2RlZmF1bHRCc1BvcHBlckNvbmZpZ10pXG4gICAgICB9O1xuICAgIH1cbiAgICBfc2V0TGlzdGVuZXJzKCkge1xuICAgICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLl9jb25maWcudHJpZ2dlci5zcGxpdCgnICcpO1xuICAgICAgZm9yIChjb25zdCB0cmlnZ2VyIG9mIHRyaWdnZXJzKSB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0NMSUNLJDEpLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpO1xuICAgICAgICAgICAgY29udGV4dC50b2dnbGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICAgIGNvbnN0IGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID8gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VFTlRFUikgOiB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9GT0NVU0lOJDEpO1xuICAgICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/IHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX01PVVNFTEVBVkUpIDogdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfRk9DVVNPVVQkMSk7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50SW4sIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCk7XG4gICAgICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW2V2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXSA9IHRydWU7XG4gICAgICAgICAgICBjb250ZXh0Ll9lbnRlcigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudE91dCwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KTtcbiAgICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXSA9IGNvbnRleHQuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCk7XG4gICAgICAgICAgICBjb250ZXh0Ll9sZWF2ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9NT0RBTCksIEVWRU5UX01PREFMX0hJREUsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpO1xuICAgIH1cbiAgICBfZml4VGl0bGUoKSB7XG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgJiYgIXRoaXMuX2VsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGl0bGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnLCB0aXRsZSk7IC8vIERPIE5PVCBVU0UgSVQuIElzIG9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcbiAgICB9XG4gICAgX2VudGVyKCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24oKSB8fCB0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgdGhpcy5faXNIb3ZlcmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3NldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheS5zaG93KTtcbiAgICB9XG4gICAgX2xlYXZlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkuaGlkZSk7XG4gICAgfVxuICAgIF9zZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpO1xuICAgIH1cbiAgICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2FjdGl2ZVRyaWdnZXIpLmluY2x1ZGVzKHRydWUpO1xuICAgIH1cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIGZvciAoY29uc3QgZGF0YUF0dHJpYnV0ZSBvZiBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcykpIHtcbiAgICAgICAgaWYgKERJU0FMTE9XRURfQVRUUklCVVRFUy5oYXMoZGF0YUF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICBkZWxldGUgZGF0YUF0dHJpYnV0ZXNbZGF0YUF0dHJpYnV0ZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICAgIH07XG4gICAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpO1xuICAgICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpO1xuICAgICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZyk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIGNvbmZpZy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyID09PSBmYWxzZSA/IGRvY3VtZW50LmJvZHkgOiBnZXRFbGVtZW50KGNvbmZpZy5jb250YWluZXIpO1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgICBzaG93OiBjb25maWcuZGVsYXksXG4gICAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB7fTtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGNvbmZpZ1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbmZpZy5zZWxlY3RvciA9IGZhbHNlO1xuICAgICAgY29uZmlnLnRyaWdnZXIgPSAnbWFudWFsJztcblxuICAgICAgLy8gSW4gdGhlIGZ1dHVyZSBjYW4gYmUgcmVwbGFjZWQgd2l0aDpcbiAgICAgIC8vIGNvbnN0IGtleXNXaXRoRGlmZmVyZW50VmFsdWVzID0gT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnKS5maWx0ZXIoZW50cnkgPT4gdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2VudHJ5WzBdXSAhPT0gdGhpcy5fY29uZmlnW2VudHJ5WzBdXSlcbiAgICAgIC8vIGBPYmplY3QuZnJvbUVudHJpZXMoa2V5c1dpdGhEaWZmZXJlbnRWYWx1ZXMpYFxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX2Rpc3Bvc2VQb3BwZXIoKSB7XG4gICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50aXApIHtcbiAgICAgICAgdGhpcy50aXAucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMudGlwID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBUb29sdGlwLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihUb29sdGlwKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHBvcG92ZXIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQzID0gJ3BvcG92ZXInO1xuICBjb25zdCBTRUxFQ1RPUl9USVRMRSA9ICcucG9wb3Zlci1oZWFkZXInO1xuICBjb25zdCBTRUxFQ1RPUl9DT05URU5UID0gJy5wb3BvdmVyLWJvZHknO1xuICBjb25zdCBEZWZhdWx0JDIgPSB7XG4gICAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICAgIGNvbnRlbnQ6ICcnLFxuICAgIG9mZnNldDogWzAsIDhdLFxuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj4nICsgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93XCI+PC9kaXY+JyArICc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+JyArICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+JyArICc8L2Rpdj4nLFxuICAgIHRyaWdnZXI6ICdjbGljaydcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkMiA9IHtcbiAgICAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICAgIGNvbnRlbnQ6ICcobnVsbHxzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgUG9wb3ZlciBleHRlbmRzIFRvb2x0aXAge1xuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQyO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDI7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDM7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVzXG4gICAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbU0VMRUNUT1JfVElUTEVdOiB0aGlzLl9nZXRUaXRsZSgpLFxuICAgICAgICBbU0VMRUNUT1JfQ09OVEVOVF06IHRoaXMuX2dldENvbnRlbnQoKVxuICAgICAgfTtcbiAgICB9XG4gICAgX2dldENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmNvbnRlbnQpO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFBvcG92ZXIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKFBvcG92ZXIpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgc2Nyb2xsc3B5LmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkMiA9ICdzY3JvbGxzcHknO1xuICBjb25zdCBEQVRBX0tFWSQyID0gJ2JzLnNjcm9sbHNweSc7XG4gIGNvbnN0IEVWRU5UX0tFWSQyID0gYC4ke0RBVEFfS0VZJDJ9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVWRU5UX0FDVElWQVRFID0gYGFjdGl2YXRlJHtFVkVOVF9LRVkkMn1gO1xuICBjb25zdCBFVkVOVF9DTElDSyA9IGBjbGljayR7RVZFTlRfS0VZJDJ9YDtcbiAgY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSQxID0gYGxvYWQke0VWRU5UX0tFWSQyfSR7REFUQV9BUElfS0VZfWA7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUkMSA9ICdhY3RpdmUnO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nO1xuICBjb25zdCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MgPSAnW2hyZWZdJztcbiAgY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJztcbiAgY29uc3QgU0VMRUNUT1JfTkFWX0lURU1TID0gJy5uYXYtaXRlbSc7XG4gIGNvbnN0IFNFTEVDVE9SX0xJU1RfSVRFTVMgPSAnLmxpc3QtZ3JvdXAtaXRlbSc7XG4gIGNvbnN0IFNFTEVDVE9SX0xJTktfSVRFTVMgPSBgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX05BVl9JVEVNU30gPiAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gO1xuICBjb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nO1xuICBjb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUkMSA9ICcuZHJvcGRvd24tdG9nZ2xlJztcbiAgY29uc3QgRGVmYXVsdCQxID0ge1xuICAgIG9mZnNldDogbnVsbCxcbiAgICAvLyBUT0RPOiB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICAgIHJvb3RNYXJnaW46ICcwcHggMHB4IC0yNSUnLFxuICAgIHNtb290aFNjcm9sbDogZmFsc2UsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIHRocmVzaG9sZDogWzAuMSwgMC41LCAxXVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQxID0ge1xuICAgIG9mZnNldDogJyhudW1iZXJ8bnVsbCknLFxuICAgIC8vIFRPRE8gdjYgQGRlcHJlY2F0ZWQsIGtlZXAgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnNcbiAgICByb290TWFyZ2luOiAnc3RyaW5nJyxcbiAgICBzbW9vdGhTY3JvbGw6ICdib29sZWFuJyxcbiAgICB0YXJnZXQ6ICdlbGVtZW50JyxcbiAgICB0aHJlc2hvbGQ6ICdhcnJheSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBTY3JvbGxTcHkgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG5cbiAgICAgIC8vIHRoaXMuX2VsZW1lbnQgaXMgdGhlIG9ic2VydmFibGVzQ29udGFpbmVyIGFuZCBjb25maWcudGFyZ2V0IHRoZSBtZW51IGxpbmtzIHdyYXBwZXJcbiAgICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW1lbnQpLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnID8gbnVsbCA6IHRoaXMuX2VsZW1lbnQ7XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsO1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhID0ge1xuICAgICAgICB2aXNpYmxlRW50cnlUb3A6IDAsXG4gICAgICAgIHBhcmVudFNjcm9sbFRvcDogMFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVmcmVzaCgpOyAvLyBpbml0aWFsaXplXG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDE7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkMTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkMjtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICByZWZyZXNoKCkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpO1xuICAgICAgdGhpcy5fbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKTtcbiAgICAgIGlmICh0aGlzLl9vYnNlcnZlcikge1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IHRoaXMuX2dldE5ld09ic2VydmVyKCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHNlY3Rpb24gb2YgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnZhbHVlcygpKSB7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUoc2VjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgLy8gVE9ETzogb24gdjYgdGFyZ2V0IHNob3VsZCBiZSBnaXZlbiBleHBsaWNpdGx5ICYgcmVtb3ZlIHRoZSB7dGFyZ2V0OiAnc3MtdGFyZ2V0J30gY2FzZVxuICAgICAgY29uZmlnLnRhcmdldCA9IGdldEVsZW1lbnQoY29uZmlnLnRhcmdldCkgfHwgZG9jdW1lbnQuYm9keTtcblxuICAgICAgLy8gVE9ETzogdjYgT25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29ucy4gVXNlIHJvb3RNYXJnaW4gb25seVxuICAgICAgY29uZmlnLnJvb3RNYXJnaW4gPSBjb25maWcub2Zmc2V0ID8gYCR7Y29uZmlnLm9mZnNldH1weCAwcHggLTMwJWAgOiBjb25maWcucm9vdE1hcmdpbjtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLnRocmVzaG9sZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uZmlnLnRocmVzaG9sZCA9IGNvbmZpZy50aHJlc2hvbGQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNtb290aFNjcm9sbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHVucmVnaXN0ZXIgYW55IHByZXZpb3VzIGxpc3RlbmVyc1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSyk7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fY29uZmlnLnRhcmdldCwgRVZFTlRfQ0xJQ0ssIFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5nZXQoZXZlbnQudGFyZ2V0Lmhhc2gpO1xuICAgICAgICBpZiAob2JzZXJ2YWJsZVNlY3Rpb24pIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9yb290RWxlbWVudCB8fCB3aW5kb3c7XG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gb2JzZXJ2YWJsZVNlY3Rpb24ub2Zmc2V0VG9wIC0gdGhpcy5fZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgICAgaWYgKHJvb3Quc2Nyb2xsVG8pIHtcbiAgICAgICAgICAgIHJvb3Quc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICB0b3A6IGhlaWdodCxcbiAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDaHJvbWUgNjAgZG9lc24ndCBzdXBwb3J0IGBzY3JvbGxUb2BcbiAgICAgICAgICByb290LnNjcm9sbFRvcCA9IGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXROZXdPYnNlcnZlcigpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHJvb3Q6IHRoaXMuX3Jvb3RFbGVtZW50LFxuICAgICAgICB0aHJlc2hvbGQ6IHRoaXMuX2NvbmZpZy50aHJlc2hvbGQsXG4gICAgICAgIHJvb3RNYXJnaW46IHRoaXMuX2NvbmZpZy5yb290TWFyZ2luXG4gICAgICB9O1xuICAgICAgcmV0dXJuIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHRoaXMuX29ic2VydmVyQ2FsbGJhY2soZW50cmllcyksIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIFRoZSBsb2dpYyBvZiBzZWxlY3Rpb25cbiAgICBfb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSB7XG4gICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZW50cnkgPT4gdGhpcy5fdGFyZ2V0TGlua3MuZ2V0KGAjJHtlbnRyeS50YXJnZXQuaWR9YCk7XG4gICAgICBjb25zdCBhY3RpdmF0ZSA9IGVudHJ5ID0+IHtcbiAgICAgICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcCA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3A7XG4gICAgICAgIHRoaXMuX3Byb2Nlc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHBhcmVudFNjcm9sbFRvcCA9ICh0aGlzLl9yb290RWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLnNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IHVzZXJTY3JvbGxzRG93biA9IHBhcmVudFNjcm9sbFRvcCA+PSB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wO1xuICAgICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcCA9IHBhcmVudFNjcm9sbFRvcDtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICB0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRhcmdldEVsZW1lbnQoZW50cnkpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMgPSBlbnRyeS50YXJnZXQub2Zmc2V0VG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3A7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBzY3JvbGxpbmcgZG93biwgcGljayB0aGUgYmlnZ2VyIG9mZnNldFRvcFxuICAgICAgICBpZiAodXNlclNjcm9sbHNEb3duICYmIGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICAgIGFjdGl2YXRlKGVudHJ5KTtcbiAgICAgICAgICAvLyBpZiBwYXJlbnQgaXNuJ3Qgc2Nyb2xsZWQsIGxldCdzIGtlZXAgdGhlIGZpcnN0IHZpc2libGUgaXRlbSwgYnJlYWtpbmcgdGhlIGl0ZXJhdGlvblxuICAgICAgICAgIGlmICghcGFyZW50U2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyB1cCwgcGljayB0aGUgc21hbGxlc3Qgb2Zmc2V0VG9wXG4gICAgICAgIGlmICghdXNlclNjcm9sbHNEb3duICYmICFlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMpIHtcbiAgICAgICAgICBhY3RpdmF0ZShlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKSB7XG4gICAgICB0aGlzLl90YXJnZXRMaW5rcyA9IG5ldyBNYXAoKTtcbiAgICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgIGNvbnN0IHRhcmdldExpbmtzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9UQVJHRVRfTElOS1MsIHRoaXMuX2NvbmZpZy50YXJnZXQpO1xuICAgICAgZm9yIChjb25zdCBhbmNob3Igb2YgdGFyZ2V0TGlua3MpIHtcbiAgICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIGFuY2hvciBoYXMgYW4gaWQgYW5kIGlzIG5vdCBkaXNhYmxlZFxuICAgICAgICBpZiAoIWFuY2hvci5oYXNoIHx8IGlzRGlzYWJsZWQoYW5jaG9yKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShhbmNob3IuaGFzaCwgdGhpcy5fZWxlbWVudCk7XG5cbiAgICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIG9ic2VydmFibGVTZWN0aW9uIGV4aXN0cyAmIGlzIHZpc2libGVcbiAgICAgICAgaWYgKGlzVmlzaWJsZShvYnNlcnZhYmxlU2VjdGlvbikpIHtcbiAgICAgICAgICB0aGlzLl90YXJnZXRMaW5rcy5zZXQoYW5jaG9yLmhhc2gsIGFuY2hvcik7XG4gICAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnNldChhbmNob3IuaGFzaCwgb2JzZXJ2YWJsZVNlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIF9wcm9jZXNzKHRhcmdldCkge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGhpcy5fY29uZmlnLnRhcmdldCk7XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQxKTtcbiAgICAgIHRoaXMuX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpO1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQUNUSVZBVEUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGFyZ2V0XG4gICAgICB9KTtcbiAgICB9XG4gICAgX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpIHtcbiAgICAgIC8vIEFjdGl2YXRlIGRyb3Bkb3duIHBhcmVudHNcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUkMSwgdGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pKS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGxpc3RHcm91cCBvZiBTZWxlY3RvckVuZ2luZS5wYXJlbnRzKHRhcmdldCwgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApKSB7XG4gICAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGlua3MgcGFyZW50cyBhcyBhY3RpdmVcbiAgICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBTZWxlY3RvckVuZ2luZS5wcmV2KGxpc3RHcm91cCwgU0VMRUNUT1JfTElOS19JVEVNUykpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgX2NsZWFyQWN0aXZlQ2xhc3MocGFyZW50KSB7XG4gICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSQxKTtcbiAgICAgIGNvbnN0IGFjdGl2ZU5vZGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChgJHtTRUxFQ1RPUl9UQVJHRVRfTElOS1N9LiR7Q0xBU1NfTkFNRV9BQ1RJVkUkMX1gLCBwYXJlbnQpO1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIGFjdGl2ZU5vZGVzKSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSQxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJJDEsICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IHNweSBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfU1BZKSkge1xuICAgICAgU2Nyb2xsU3B5LmdldE9yQ3JlYXRlSW5zdGFuY2Uoc3B5KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKFNjcm9sbFNweSk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB0YWIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQxID0gJ3RhYic7XG4gIGNvbnN0IERBVEFfS0VZJDEgPSAnYnMudGFiJztcbiAgY29uc3QgRVZFTlRfS0VZJDEgPSBgLiR7REFUQV9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9ISURFJDEgPSBgaGlkZSR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOJDEgPSBgaGlkZGVuJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9TSE9XJDEgPSBgc2hvdyR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kMSA9IGBzaG93biR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnO1xuICBjb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCc7XG4gIGNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJztcbiAgY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9GQURFJDEgPSAnZmFkZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQxID0gJ3Nob3cnO1xuICBjb25zdCBDTEFTU19EUk9QRE9XTiA9ICdkcm9wZG93bic7XG4gIGNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJztcbiAgY29uc3QgU0VMRUNUT1JfRFJPUERPV05fTUVOVSA9ICcuZHJvcGRvd24tbWVudSc7XG4gIGNvbnN0IE5PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnOm5vdCguZHJvcGRvd24tdG9nZ2xlKSc7XG4gIGNvbnN0IFNFTEVDVE9SX1RBQl9QQU5FTCA9ICcubGlzdC1ncm91cCwgLm5hdiwgW3JvbGU9XCJ0YWJsaXN0XCJdJztcbiAgY29uc3QgU0VMRUNUT1JfT1VURVIgPSAnLm5hdi1pdGVtLCAubGlzdC1ncm91cC1pdGVtJztcbiAgY29uc3QgU0VMRUNUT1JfSU5ORVIgPSBgLm5hdi1saW5rJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgLmxpc3QtZ3JvdXAtaXRlbSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIFtyb2xlPVwidGFiXCJdJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfWA7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXSc7IC8vIHRvZG86djY6IGNvdWxkIGJlIG9ubHkgYHRhYmBcbiAgY29uc3QgU0VMRUNUT1JfSU5ORVJfRUxFTSA9IGAke1NFTEVDVE9SX0lOTkVSfSwgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1gO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUgPSBgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdYDtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBUYWIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICBzdXBlcihlbGVtZW50KTtcbiAgICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9UQUJfUEFORUwpO1xuICAgICAgaWYgKCF0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyB0b2RvOiBzaG91bGQgVGhyb3cgZXhjZXB0aW9uIG9uIHY2XG4gICAgICAgIC8vIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7ZWxlbWVudC5vdXRlckhUTUx9IGhhcyBub3QgYSB2YWxpZCBwYXJlbnQgJHtTRUxFQ1RPUl9JTk5FUl9FTEVNfWApXG4gICAgICB9XG5cbiAgICAgIC8vIFNldCB1cCBpbml0aWFsIGFyaWEgYXR0cmlidXRlc1xuICAgICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXModGhpcy5fcGFyZW50LCB0aGlzLl9nZXRDaGlsZHJlbigpKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDE7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgc2hvdygpIHtcbiAgICAgIC8vIFNob3dzIHRoaXMgZWxlbSBhbmQgZGVhY3RpdmF0ZSB0aGUgYWN0aXZlIHNpYmxpbmcgaWYgZXhpc3RzXG4gICAgICBjb25zdCBpbm5lckVsZW0gPSB0aGlzLl9lbGVtZW50O1xuICAgICAgaWYgKHRoaXMuX2VsZW1Jc0FjdGl2ZShpbm5lckVsZW0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU2VhcmNoIGZvciBhY3RpdmUgdGFiIG9uIHNhbWUgcGFyZW50IHRvIGRlYWN0aXZhdGUgaXRcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuX2dldEFjdGl2ZUVsZW0oKTtcbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IGFjdGl2ZSA/IEV2ZW50SGFuZGxlci50cmlnZ2VyKGFjdGl2ZSwgRVZFTlRfSElERSQxLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGlubmVyRWxlbVxuICAgICAgfSkgOiBudWxsO1xuICAgICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIoaW5uZXJFbGVtLCBFVkVOVF9TSE9XJDEsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogYWN0aXZlXG4gICAgICB9KTtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCBoaWRlRXZlbnQgJiYgaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fZGVhY3RpdmF0ZShhY3RpdmUsIGlubmVyRWxlbSk7XG4gICAgICB0aGlzLl9hY3RpdmF0ZShpbm5lckVsZW0sIGFjdGl2ZSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9hY3RpdmF0ZShlbGVtZW50LCByZWxhdGVkRWxlbSkge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgICB0aGlzLl9hY3RpdmF0ZShTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKTsgLy8gU2VhcmNoIGFuZCBhY3RpdmF0ZS9zaG93IHRoZSBwcm9wZXIgc2VjdGlvblxuXG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgIT09ICd0YWInKSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQxKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIHRydWUpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9TSE9XTiQxLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZEVsZW1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFJDEpKTtcbiAgICB9XG4gICAgX2RlYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpO1xuICAgICAgZWxlbWVudC5ibHVyKCk7XG4gICAgICB0aGlzLl9kZWFjdGl2YXRlKFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkpOyAvLyBTZWFyY2ggYW5kIGRlYWN0aXZhdGUgdGhlIHNob3duIHNlY3Rpb24gdG9vXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfSElEREVOJDEsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkMSkpO1xuICAgIH1cbiAgICBfa2V5ZG93bihldmVudCkge1xuICAgICAgaWYgKCFbQVJST1dfTEVGVF9LRVksIEFSUk9XX1JJR0hUX0tFWSwgQVJST1dfVVBfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gc3RvcFByb3BhZ2F0aW9uL3ByZXZlbnREZWZhdWx0IGJvdGggYWRkZWQgdG8gc3VwcG9ydCB1cC9kb3duIGtleXMgd2l0aG91dCBzY3JvbGxpbmcgdGhlIHBhZ2VcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBpc05leHQgPSBbQVJST1dfUklHSFRfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KTtcbiAgICAgIGNvbnN0IG5leHRBY3RpdmVFbGVtZW50ID0gZ2V0TmV4dEFjdGl2ZUVsZW1lbnQodGhpcy5fZ2V0Q2hpbGRyZW4oKS5maWx0ZXIoZWxlbWVudCA9PiAhaXNEaXNhYmxlZChlbGVtZW50KSksIGV2ZW50LnRhcmdldCwgaXNOZXh0LCB0cnVlKTtcbiAgICAgIGlmIChuZXh0QWN0aXZlRWxlbWVudCkge1xuICAgICAgICBuZXh0QWN0aXZlRWxlbWVudC5mb2N1cyh7XG4gICAgICAgICAgcHJldmVudFNjcm9sbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UobmV4dEFjdGl2ZUVsZW1lbnQpLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2dldENoaWxkcmVuKCkge1xuICAgICAgLy8gY29sbGVjdGlvbiBvZiBpbm5lciBlbGVtZW50c1xuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSU5ORVJfRUxFTSwgdGhpcy5fcGFyZW50KTtcbiAgICB9XG4gICAgX2dldEFjdGl2ZUVsZW0oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0Q2hpbGRyZW4oKS5maW5kKGNoaWxkID0+IHRoaXMuX2VsZW1Jc0FjdGl2ZShjaGlsZCkpIHx8IG51bGw7XG4gICAgfVxuICAgIF9zZXRJbml0aWFsQXR0cmlidXRlcyhwYXJlbnQsIGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhwYXJlbnQsICdyb2xlJywgJ3RhYmxpc3QnKTtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZChjaGlsZCkge1xuICAgICAgY2hpbGQgPSB0aGlzLl9nZXRJbm5lckVsZW1lbnQoY2hpbGQpO1xuICAgICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9lbGVtSXNBY3RpdmUoY2hpbGQpO1xuICAgICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGNoaWxkKTtcbiAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGlzQWN0aXZlKTtcbiAgICAgIGlmIChvdXRlckVsZW0gIT09IGNoaWxkKSB7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKG91dGVyRWxlbSwgJ3JvbGUnLCAncHJlc2VudGF0aW9uJyk7XG4gICAgICB9XG4gICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGNoaWxkLCAncm9sZScsICd0YWInKTtcblxuICAgICAgLy8gc2V0IGF0dHJpYnV0ZXMgdG8gdGhlIHJlbGF0ZWQgcGFuZWwgdG9vXG4gICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpO1xuICAgIH1cbiAgICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGNoaWxkKTtcbiAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ3JvbGUnLCAndGFicGFuZWwnKTtcbiAgICAgIGlmIChjaGlsZC5pZCkge1xuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0YXJnZXQsICdhcmlhLWxhYmVsbGVkYnknLCBgJHtjaGlsZC5pZH1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIG9wZW4pIHtcbiAgICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGlmICghb3V0ZXJFbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19EUk9QRE9XTikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdG9nZ2xlID0gKHNlbGVjdG9yLCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IsIG91dGVyRWxlbSk7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSwgb3Blbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCBDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fTUVOVSwgQ0xBU1NfTkFNRV9TSE9XJDEpO1xuICAgICAgb3V0ZXJFbGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIG9wZW4pO1xuICAgIH1cbiAgICBfc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBfZWxlbUlzQWN0aXZlKGVsZW0pIHtcbiAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgfVxuXG4gICAgLy8gVHJ5IHRvIGdldCB0aGUgaW5uZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1saW5rKVxuICAgIF9nZXRJbm5lckVsZW1lbnQoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW0ubWF0Y2hlcyhTRUxFQ1RPUl9JTk5FUl9FTEVNKSA/IGVsZW0gOiBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lOTkVSX0VMRU0sIGVsZW0pO1xuICAgIH1cblxuICAgIC8vIFRyeSB0byBnZXQgdGhlIG91dGVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtaXRlbSlcbiAgICBfZ2V0T3V0ZXJFbGVtZW50KGVsZW0pIHtcbiAgICAgIHJldHVybiBlbGVtLmNsb3Nlc3QoU0VMRUNUT1JfT1VURVIpIHx8IGVsZW07XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS5zaG93KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIG9uIGZvY3VzXG4gICAqL1xuICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFKSkge1xuICAgICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oVGFiKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHRvYXN0LmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgPSAndG9hc3QnO1xuICBjb25zdCBEQVRBX0tFWSA9ICdicy50b2FzdCc7XG4gIGNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gO1xuICBjb25zdCBFVkVOVF9NT1VTRU9WRVIgPSBgbW91c2VvdmVyJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfTU9VU0VPVVQgPSBgbW91c2VvdXQke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9GT0NVU09VVCA9IGBmb2N1c291dCR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9ISURFID0gJ2hpZGUnOyAvLyBAZGVwcmVjYXRlZCAtIGtlcHQgaGVyZSBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICBjb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJztcbiAgY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gICAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gICAgYXV0b2hpZGU6ICdib29sZWFuJyxcbiAgICBkZWxheTogJ251bWJlcidcbiAgfTtcbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgYXV0b2hpZGU6IHRydWUsXG4gICAgZGVsYXk6IDUwMDBcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBUb2FzdCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuICAgICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2V0TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBzaG93KCkge1xuICAgICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVyk7XG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KCk7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04pO1xuICAgICAgICB0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0hJREUpOyAvLyBAZGVwcmVjYXRlZFxuICAgICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVywgQ0xBU1NfTkFNRV9TSE9XSU5HKTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2NvbmZpZy5hbmltYXRpb24pO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKCF0aGlzLmlzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKTtcbiAgICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfSElERSk7IC8vIEBkZXByZWNhdGVkXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcsIENMQVNTX05BTUVfU0hPVyk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTik7XG4gICAgICB9O1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORyk7XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKTtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpO1xuICAgICAgaWYgKHRoaXMuaXNTaG93bigpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpO1xuICAgICAgfVxuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cbiAgICBpc1Nob3duKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVyk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuXG4gICAgX21heWJlU2NoZWR1bGVIaWRlKCkge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gfHwgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5KTtcbiAgICB9XG4gICAgX29uSW50ZXJhY3Rpb24oZXZlbnQsIGlzSW50ZXJhY3RpbmcpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlICdtb3VzZW92ZXInOlxuICAgICAgICBjYXNlICdtb3VzZW91dCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3Rpbmc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2ZvY3VzaW4nOlxuICAgICAgICBjYXNlICdmb2N1c291dCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3Rpbmc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNJbnRlcmFjdGluZykge1xuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV4dEVsZW1lbnQgPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQgPT09IG5leHRFbGVtZW50IHx8IHRoaXMuX2VsZW1lbnQuY29udGFpbnMobmV4dEVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKCk7XG4gICAgfVxuICAgIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVkVSLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSk7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSk7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpO1xuICAgIH1cbiAgICBfY2xlYXJUaW1lb3V0KCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gVG9hc3QuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyKFRvYXN0KTtcblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihUb2FzdCk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBpbmRleC51bWQuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICBjb25zdCBpbmRleF91bWQgPSB7XG4gICAgQWxlcnQsXG4gICAgQnV0dG9uLFxuICAgIENhcm91c2VsLFxuICAgIENvbGxhcHNlLFxuICAgIERyb3Bkb3duLFxuICAgIE1vZGFsLFxuICAgIE9mZmNhbnZhcyxcbiAgICBQb3BvdmVyLFxuICAgIFNjcm9sbFNweSxcbiAgICBUYWIsXG4gICAgVG9hc3QsXG4gICAgVG9vbHRpcFxuICB9O1xuXG4gIHJldHVybiBpbmRleF91bWQ7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb3RzdHJhcC5idW5kbGUuanMubWFwXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJjYXJkQ29udGFpbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjb250YWluZXIiLCJjYXJkcyIsImFkZExlZnQiLCJsZW5ndGgiLCJyb3RhdGUiLCJjb25zb2xlIiwibG9nIiwicm90YXRlU3R5bGUiLCJjbGFzc0xlZnQiLCJjYXJkIiwic3R5bGUiLCJsZWZ0IiwiY29uY2F0IiwidHJhbnNmb3JtIiwiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJfdHlwZW9mIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiZ2xvYmFsVGhpcyIsInNlbGYiLCJib290c3RyYXAiLCJfS0VZX1RPX0RJUkVDVElPTiIsIk1BWF9VSUQiLCJNSUxMSVNFQ09ORFNfTVVMVElQTElFUiIsIlRSQU5TSVRJT05fRU5EIiwicGFyc2VTZWxlY3RvciIsInNlbGVjdG9yIiwid2luZG93IiwiQ1NTIiwiZXNjYXBlIiwicmVwbGFjZSIsIm1hdGNoIiwiaWQiLCJ0b1R5cGUiLCJvYmplY3QiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJ0b0xvd2VyQ2FzZSIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldEVsZW1lbnRCeUlkIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJfd2luZG93JGdldENvbXB1dGVkU3QiLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJzcGxpdCIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiaXNFbGVtZW50JDEiLCJqcXVlcnkiLCJub2RlVHlwZSIsImdldEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaXNWaXNpYmxlIiwiZ2V0Q2xpZW50UmVjdHMiLCJlbGVtZW50SXNWaXNpYmxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImNsb3NlZERldGFpbHMiLCJjbG9zZXN0Iiwic3VtbWFyeSIsInBhcmVudE5vZGUiLCJpc0Rpc2FibGVkIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZGlzYWJsZWQiLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJmaW5kU2hhZG93Um9vdCIsImRvY3VtZW50RWxlbWVudCIsImF0dGFjaFNoYWRvdyIsImdldFJvb3ROb2RlIiwicm9vdCIsIlNoYWRvd1Jvb3QiLCJub29wIiwicmVmbG93Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0alF1ZXJ5IiwialF1ZXJ5IiwiYm9keSIsIkRPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MiLCJvbkRPTUNvbnRlbnRMb2FkZWQiLCJjYWxsYmFjayIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiX2kyIiwiX0RPTUNvbnRlbnRMb2FkZWRDYWxsIiwicHVzaCIsImlzUlRMIiwiZGlyIiwiZGVmaW5lSlF1ZXJ5UGx1Z2luIiwicGx1Z2luIiwiJCIsIm5hbWUiLCJOQU1FIiwiSlFVRVJZX05PX0NPTkZMSUNUIiwiZm4iLCJqUXVlcnlJbnRlcmZhY2UiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCJleGVjdXRlIiwicG9zc2libGVDYWxsYmFjayIsImFyZ3MiLCJkZWZhdWx0VmFsdWUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uIiwidHJhbnNpdGlvbkVsZW1lbnQiLCJ3YWl0Rm9yVHJhbnNpdGlvbiIsImR1cmF0aW9uUGFkZGluZyIsImVtdWxhdGVkRHVyYXRpb24iLCJjYWxsZWQiLCJoYW5kbGVyIiwiX3JlZjYiLCJ0YXJnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImdldE5leHRBY3RpdmVFbGVtZW50IiwibGlzdCIsImFjdGl2ZUVsZW1lbnQiLCJzaG91bGRHZXROZXh0IiwiaXNDeWNsZUFsbG93ZWQiLCJsaXN0TGVuZ3RoIiwiaW5kZXgiLCJpbmRleE9mIiwibWF4IiwibWluIiwibmFtZXNwYWNlUmVnZXgiLCJzdHJpcE5hbWVSZWdleCIsInN0cmlwVWlkUmVnZXgiLCJldmVudFJlZ2lzdHJ5IiwidWlkRXZlbnQiLCJjdXN0b21FdmVudHMiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm5hdGl2ZUV2ZW50cyIsIlNldCIsIm1ha2VFdmVudFVpZCIsInVpZCIsImdldEVsZW1lbnRFdmVudHMiLCJib290c3RyYXBIYW5kbGVyIiwiZXZlbnQiLCJoeWRyYXRlT2JqIiwiZGVsZWdhdGVUYXJnZXQiLCJvbmVPZmYiLCJFdmVudEhhbmRsZXIiLCJvZmYiLCJ0eXBlIiwiYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIiLCJkb21FbGVtZW50cyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJkb21FbGVtZW50IiwiZXJyIiwiZSIsImYiLCJmaW5kSGFuZGxlciIsImV2ZW50cyIsImNhbGxhYmxlIiwiZGVsZWdhdGlvblNlbGVjdG9yIiwidmFsdWVzIiwiZmluZCIsIm5vcm1hbGl6ZVBhcmFtZXRlcnMiLCJvcmlnaW5hbFR5cGVFdmVudCIsImRlbGVnYXRpb25GdW5jdGlvbiIsImlzRGVsZWdhdGVkIiwidHlwZUV2ZW50IiwiZ2V0VHlwZUV2ZW50IiwiaGFzIiwiYWRkSGFuZGxlciIsIl9ub3JtYWxpemVQYXJhbWV0ZXJzIiwiX25vcm1hbGl6ZVBhcmFtZXRlcnMyIiwiX3NsaWNlZFRvQXJyYXkiLCJ3cmFwRnVuY3Rpb24iLCJyZWxhdGVkVGFyZ2V0IiwiaGFuZGxlcnMiLCJwcmV2aW91c0Z1bmN0aW9uIiwicmVtb3ZlSGFuZGxlciIsIkJvb2xlYW4iLCJyZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMiLCJuYW1lc3BhY2UiLCJzdG9yZUVsZW1lbnRFdmVudCIsIl9pMyIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJoYW5kbGVyS2V5IiwiaW5jbHVkZXMiLCJvbiIsIm9uZSIsIl9ub3JtYWxpemVQYXJhbWV0ZXJzMyIsIl9ub3JtYWxpemVQYXJhbWV0ZXJzNCIsImluTmFtZXNwYWNlIiwiaXNOYW1lc3BhY2UiLCJzdGFydHNXaXRoIiwia2V5cyIsIl9pNCIsIl9PYmplY3Qka2V5cyIsImVsZW1lbnRFdmVudCIsInNsaWNlIiwiX2k1IiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJrZXlIYW5kbGVycyIsInRyaWdnZXIiLCJqUXVlcnlFdmVudCIsImJ1YmJsZXMiLCJuYXRpdmVEaXNwYXRjaCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZXZ0IiwiY2FuY2VsYWJsZSIsInByZXZlbnREZWZhdWx0Iiwib2JqIiwibWV0YSIsIl9sb29wMiIsIl9PYmplY3QkZW50cmllczMkX2kiLCJfT2JqZWN0JGVudHJpZXMzIiwiX2k2IiwiX3VudXNlZCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZ2V0IiwiZWxlbWVudE1hcCIsIk1hcCIsIkRhdGEiLCJzZXQiLCJpbnN0YW5jZSIsImluc3RhbmNlTWFwIiwic2l6ZSIsImVycm9yIiwiQXJyYXkiLCJmcm9tIiwicmVtb3ZlIiwibm9ybWFsaXplRGF0YSIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5vcm1hbGl6ZURhdGFLZXkiLCJjaHIiLCJNYW5pcHVsYXRvciIsInNldERhdGFBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVEYXRhQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZ2V0RGF0YUF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwiYnNLZXlzIiwiZGF0YXNldCIsImZpbHRlciIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJwdXJlS2V5IiwiY2hhckF0IiwiZ2V0RGF0YUF0dHJpYnV0ZSIsIkNvbmZpZyIsIl9nZXRDb25maWciLCJjb25maWciLCJfbWVyZ2VDb25maWdPYmoiLCJfY29uZmlnQWZ0ZXJNZXJnZSIsIl90eXBlQ2hlY2tDb25maWciLCJqc29uQ29uZmlnIiwiX29iamVjdFNwcmVhZCIsImNvbnN0cnVjdG9yIiwiRGVmYXVsdCIsImNvbmZpZ1R5cGVzIiwiRGVmYXVsdFR5cGUiLCJfaTciLCJfT2JqZWN0JGVudHJpZXM0IiwiX09iamVjdCRlbnRyaWVzNCRfaSIsInByb3BlcnR5IiwiZXhwZWN0ZWRUeXBlcyIsInZhbHVlVHlwZSIsIlJlZ0V4cCIsInRlc3QiLCJUeXBlRXJyb3IiLCJ0b1VwcGVyQ2FzZSIsIkVycm9yIiwiVkVSU0lPTiIsIkJhc2VDb21wb25lbnQiLCJfQ29uZmlnIiwiX3RoaXMiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9lbGVtZW50IiwiX2NvbmZpZyIsIkRBVEFfS0VZIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImRpc3Bvc2UiLCJFVkVOVF9LRVkiLCJfaXRlcmF0b3IzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIl9zdGVwMyIsInByb3BlcnR5TmFtZSIsIl9xdWV1ZUNhbGxiYWNrIiwiaXNBbmltYXRlZCIsImdldEluc3RhbmNlIiwiZ2V0T3JDcmVhdGVJbnN0YW5jZSIsImV2ZW50TmFtZSIsImdldFNlbGVjdG9yIiwiaHJlZkF0dHJpYnV0ZSIsInRyaW0iLCJTZWxlY3RvckVuZ2luZSIsIl9yZWY3IiwiRWxlbWVudCIsImZpbmRPbmUiLCJjaGlsZHJlbiIsIl9yZWY4IiwiY2hpbGQiLCJtYXRjaGVzIiwicGFyZW50cyIsImFuY2VzdG9yIiwicHJldiIsInByZXZpb3VzIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmb2N1c2FibGVDaGlsZHJlbiIsImZvY3VzYWJsZXMiLCJtYXAiLCJqb2luIiwiZWwiLCJnZXRTZWxlY3RvckZyb21FbGVtZW50IiwiZ2V0RWxlbWVudEZyb21TZWxlY3RvciIsImdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IiLCJlbmFibGVEaXNtaXNzVHJpZ2dlciIsImNvbXBvbmVudCIsIm1ldGhvZCIsImNsaWNrRXZlbnQiLCJ0YWdOYW1lIiwiTkFNRSRmIiwiREFUQV9LRVkkYSIsIkVWRU5UX0tFWSRiIiwiRVZFTlRfQ0xPU0UiLCJFVkVOVF9DTE9TRUQiLCJDTEFTU19OQU1FX0ZBREUkNSIsIkNMQVNTX05BTUVfU0hPVyQ4IiwiQWxlcnQiLCJfQmFzZUNvbXBvbmVudCIsIl9zdXBlcjIiLCJjbG9zZSIsIl90aGlzMiIsImNsb3NlRXZlbnQiLCJfZGVzdHJveUVsZW1lbnQiLCJlYWNoIiwiZGF0YSIsIk5BTUUkZSIsIkRBVEFfS0VZJDkiLCJFVkVOVF9LRVkkYSIsIkRBVEFfQVBJX0tFWSQ2IiwiQ0xBU1NfTkFNRV9BQ1RJVkUkMyIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFJDUiLCJFVkVOVF9DTElDS19EQVRBX0FQSSQ2IiwiQnV0dG9uIiwiX0Jhc2VDb21wb25lbnQyIiwiX3N1cGVyMyIsInRvZ2dsZSIsImJ1dHRvbiIsIk5BTUUkZCIsIkVWRU5UX0tFWSQ5IiwiRVZFTlRfVE9VQ0hTVEFSVCIsIkVWRU5UX1RPVUNITU9WRSIsIkVWRU5UX1RPVUNIRU5EIiwiRVZFTlRfUE9JTlRFUkRPV04iLCJFVkVOVF9QT0lOVEVSVVAiLCJQT0lOVEVSX1RZUEVfVE9VQ0giLCJQT0lOVEVSX1RZUEVfUEVOIiwiQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UIiwiU1dJUEVfVEhSRVNIT0xEIiwiRGVmYXVsdCRjIiwiZW5kQ2FsbGJhY2siLCJsZWZ0Q2FsbGJhY2siLCJyaWdodENhbGxiYWNrIiwiRGVmYXVsdFR5cGUkYyIsIlN3aXBlIiwiX0NvbmZpZzIiLCJfc3VwZXI0IiwiX3RoaXMzIiwiaXNTdXBwb3J0ZWQiLCJfZGVsdGFYIiwiX3N1cHBvcnRQb2ludGVyRXZlbnRzIiwiUG9pbnRlckV2ZW50IiwiX2luaXRFdmVudHMiLCJfc3RhcnQiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIl9ldmVudElzUG9pbnRlclBlblRvdWNoIiwiX2VuZCIsIl9oYW5kbGVTd2lwZSIsIl9tb3ZlIiwiYWJzRGVsdGFYIiwiYWJzIiwiZGlyZWN0aW9uIiwiX3RoaXM0IiwiYWRkIiwicG9pbnRlclR5cGUiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIk5BTUUkYyIsIkRBVEFfS0VZJDgiLCJFVkVOVF9LRVkkOCIsIkRBVEFfQVBJX0tFWSQ1IiwiQVJST1dfTEVGVF9LRVkkMSIsIkFSUk9XX1JJR0hUX0tFWSQxIiwiVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCIsIk9SREVSX05FWFQiLCJPUkRFUl9QUkVWIiwiRElSRUNUSU9OX0xFRlQiLCJESVJFQ1RJT05fUklHSFQiLCJFVkVOVF9TTElERSIsIkVWRU5UX1NMSUQiLCJFVkVOVF9LRVlET1dOJDEiLCJFVkVOVF9NT1VTRUVOVEVSJDEiLCJFVkVOVF9NT1VTRUxFQVZFJDEiLCJFVkVOVF9EUkFHX1NUQVJUIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSQzIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNSIsIkNMQVNTX05BTUVfQ0FST1VTRUwiLCJDTEFTU19OQU1FX0FDVElWRSQyIiwiQ0xBU1NfTkFNRV9TTElERSIsIkNMQVNTX05BTUVfRU5EIiwiQ0xBU1NfTkFNRV9TVEFSVCIsIkNMQVNTX05BTUVfTkVYVCIsIkNMQVNTX05BTUVfUFJFViIsIlNFTEVDVE9SX0FDVElWRSIsIlNFTEVDVE9SX0lURU0iLCJTRUxFQ1RPUl9BQ1RJVkVfSVRFTSIsIlNFTEVDVE9SX0lURU1fSU1HIiwiU0VMRUNUT1JfSU5ESUNBVE9SUyIsIlNFTEVDVE9SX0RBVEFfU0xJREUiLCJTRUxFQ1RPUl9EQVRBX1JJREUiLCJLRVlfVE9fRElSRUNUSU9OIiwiX2RlZmluZVByb3BlcnR5IiwiRGVmYXVsdCRiIiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInBhdXNlIiwicmlkZSIsInRvdWNoIiwid3JhcCIsIkRlZmF1bHRUeXBlJGIiLCJDYXJvdXNlbCIsIl9CYXNlQ29tcG9uZW50MyIsIl9zdXBlcjUiLCJfdGhpczUiLCJfaW50ZXJ2YWwiLCJfYWN0aXZlRWxlbWVudCIsIl9pc1NsaWRpbmciLCJ0b3VjaFRpbWVvdXQiLCJfc3dpcGVIZWxwZXIiLCJfaW5kaWNhdG9yc0VsZW1lbnQiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJjeWNsZSIsIl9zbGlkZSIsIm5leHRXaGVuVmlzaWJsZSIsImhpZGRlbiIsIl9jbGVhckludGVydmFsIiwiX3RoaXM2IiwiX3VwZGF0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJfbWF5YmVFbmFibGVDeWNsZSIsIl90aGlzNyIsInRvIiwiX3RoaXM4IiwiaXRlbXMiLCJfZ2V0SXRlbXMiLCJhY3RpdmVJbmRleCIsIl9nZXRJdGVtSW5kZXgiLCJfZ2V0QWN0aXZlIiwib3JkZXIiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwiZGVmYXVsdEludGVydmFsIiwiX3RoaXM5IiwiX2tleWRvd24iLCJfYWRkVG91Y2hFdmVudExpc3RlbmVycyIsIl90aGlzMTAiLCJfaXRlcmF0b3I0IiwiX3N0ZXA0IiwiaW1nIiwiZW5kQ2FsbEJhY2siLCJjbGVhclRpbWVvdXQiLCJzd2lwZUNvbmZpZyIsIl9kaXJlY3Rpb25Ub09yZGVyIiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJhY3RpdmVJbmRpY2F0b3IiLCJuZXdBY3RpdmVJbmRpY2F0b3IiLCJlbGVtZW50SW50ZXJ2YWwiLCJwYXJzZUludCIsIl90aGlzMTEiLCJpc05leHQiLCJuZXh0RWxlbWVudCIsIm5leHRFbGVtZW50SW5kZXgiLCJ0cmlnZ2VyRXZlbnQiLCJfb3JkZXJUb0RpcmVjdGlvbiIsInNsaWRlRXZlbnQiLCJpc0N5Y2xpbmciLCJkaXJlY3Rpb25hbENsYXNzTmFtZSIsIm9yZGVyQ2xhc3NOYW1lIiwiY29tcGxldGVDYWxsQmFjayIsIl9pc0FuaW1hdGVkIiwiY2xlYXJJbnRlcnZhbCIsImNhcm91c2VsIiwic2xpZGVJbmRleCIsImNhcm91c2VscyIsIl9pdGVyYXRvcjUiLCJfc3RlcDUiLCJOQU1FJGIiLCJEQVRBX0tFWSQ3IiwiRVZFTlRfS0VZJDciLCJEQVRBX0FQSV9LRVkkNCIsIkVWRU5UX1NIT1ckNiIsIkVWRU5UX1NIT1dOJDYiLCJFVkVOVF9ISURFJDYiLCJFVkVOVF9ISURERU4kNiIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJJDQiLCJDTEFTU19OQU1FX1NIT1ckNyIsIkNMQVNTX05BTUVfQ09MTEFQU0UiLCJDTEFTU19OQU1FX0NPTExBUFNJTkciLCJDTEFTU19OQU1FX0NPTExBUFNFRCIsIkNMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOIiwiQ0xBU1NfTkFNRV9IT1JJWk9OVEFMIiwiV0lEVEgiLCJIRUlHSFQiLCJTRUxFQ1RPUl9BQ1RJVkVTIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUkNCIsIkRlZmF1bHQkYSIsInBhcmVudCIsIkRlZmF1bHRUeXBlJGEiLCJDb2xsYXBzZSIsIl9CYXNlQ29tcG9uZW50NCIsIl9zdXBlcjYiLCJfdGhpczEyIiwiX2lzVHJhbnNpdGlvbmluZyIsIl90cmlnZ2VyQXJyYXkiLCJ0b2dnbGVMaXN0IiwiX2l0ZXJhdG9yNiIsIl9zdGVwNiIsImVsZW0iLCJmaWx0ZXJFbGVtZW50IiwiZm91bmRFbGVtZW50IiwiX2luaXRpYWxpemVDaGlsZHJlbiIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJfaXNTaG93biIsImhpZGUiLCJzaG93IiwiX3RoaXMxMyIsImFjdGl2ZUNoaWxkcmVuIiwiX2dldEZpcnN0TGV2ZWxDaGlsZHJlbiIsInN0YXJ0RXZlbnQiLCJfaXRlcmF0b3I3IiwiX3N0ZXA3IiwiYWN0aXZlSW5zdGFuY2UiLCJkaW1lbnNpb24iLCJfZ2V0RGltZW5zaW9uIiwiY29tcGxldGUiLCJjYXBpdGFsaXplZERpbWVuc2lvbiIsInNjcm9sbFNpemUiLCJfdGhpczE0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiX2l0ZXJhdG9yOCIsIl9zdGVwOCIsIl9pdGVyYXRvcjkiLCJfc3RlcDkiLCJzZWxlY3RlZCIsInRyaWdnZXJBcnJheSIsImlzT3BlbiIsIl9pdGVyYXRvcjEwIiwiX3N0ZXAxMCIsIl9pdGVyYXRvcjExIiwiX3N0ZXAxMSIsInRvcCIsImJvdHRvbSIsInJpZ2h0IiwiYXV0byIsImJhc2VQbGFjZW1lbnRzIiwic3RhcnQiLCJlbmQiLCJjbGlwcGluZ1BhcmVudHMiLCJ2aWV3cG9ydCIsInBvcHBlciIsInJlZmVyZW5jZSIsInZhcmlhdGlvblBsYWNlbWVudHMiLCJyZWR1Y2UiLCJhY2MiLCJwbGFjZW1lbnQiLCJwbGFjZW1lbnRzIiwiYmVmb3JlUmVhZCIsInJlYWQiLCJhZnRlclJlYWQiLCJiZWZvcmVNYWluIiwibWFpbiIsImFmdGVyTWFpbiIsImJlZm9yZVdyaXRlIiwid3JpdGUiLCJhZnRlcldyaXRlIiwibW9kaWZpZXJQaGFzZXMiLCJnZXROb2RlTmFtZSIsIm5vZGVOYW1lIiwiZ2V0V2luZG93Iiwibm9kZSIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsImlzRWxlbWVudCIsIk93bkVsZW1lbnQiLCJpc0hUTUxFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJpc1NoYWRvd1Jvb3QiLCJhcHBseVN0eWxlcyIsIl9yZWYiLCJzdGF0ZSIsImVsZW1lbnRzIiwic3R5bGVzIiwiYXNzaWduIiwiZWZmZWN0JDIiLCJfcmVmMiIsImluaXRpYWxTdHlsZXMiLCJwb3NpdGlvbiIsIm9wdGlvbnMiLCJzdHJhdGVneSIsIm1hcmdpbiIsImFycm93Iiwic3R5bGVQcm9wZXJ0aWVzIiwiaGFzT3duUHJvcGVydHkiLCJhdHRyaWJ1dGUiLCJhcHBseVN0eWxlcyQxIiwiZW5hYmxlZCIsInBoYXNlIiwiZWZmZWN0IiwicmVxdWlyZXMiLCJnZXRCYXNlUGxhY2VtZW50Iiwicm91bmQiLCJnZXRVQVN0cmluZyIsInVhRGF0YSIsInVzZXJBZ2VudERhdGEiLCJicmFuZHMiLCJpdGVtIiwiYnJhbmQiLCJ2ZXJzaW9uIiwidXNlckFnZW50IiwiaXNMYXlvdXRWaWV3cG9ydCIsImluY2x1ZGVTY2FsZSIsImlzRml4ZWRTdHJhdGVneSIsImNsaWVudFJlY3QiLCJzY2FsZVgiLCJzY2FsZVkiLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwidmlzdWFsVmlld3BvcnQiLCJhZGRWaXN1YWxPZmZzZXRzIiwieCIsIm9mZnNldExlZnQiLCJ5Iiwib2Zmc2V0VG9wIiwiZ2V0TGF5b3V0UmVjdCIsInJvb3ROb2RlIiwiaXNTYW1lTm9kZSIsImhvc3QiLCJnZXRDb21wdXRlZFN0eWxlJDEiLCJpc1RhYmxlRWxlbWVudCIsImdldERvY3VtZW50RWxlbWVudCIsImdldFBhcmVudE5vZGUiLCJhc3NpZ25lZFNsb3QiLCJnZXRUcnVlT2Zmc2V0UGFyZW50Iiwib2Zmc2V0UGFyZW50IiwiZ2V0Q29udGFpbmluZ0Jsb2NrIiwiaXNGaXJlZm94IiwiaXNJRSIsImVsZW1lbnRDc3MiLCJjdXJyZW50Tm9kZSIsImNzcyIsInBlcnNwZWN0aXZlIiwiY29udGFpbiIsIndpbGxDaGFuZ2UiLCJnZXRPZmZzZXRQYXJlbnQiLCJnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQiLCJ3aXRoaW4iLCJtaW4kMSIsIm1heCQxIiwid2l0aGluTWF4Q2xhbXAiLCJ2IiwiZ2V0RnJlc2hTaWRlT2JqZWN0IiwibWVyZ2VQYWRkaW5nT2JqZWN0IiwicGFkZGluZ09iamVjdCIsImV4cGFuZFRvSGFzaE1hcCIsImhhc2hNYXAiLCJ0b1BhZGRpbmdPYmplY3QiLCJwYWRkaW5nIiwicmVjdHMiLCJfc3RhdGUkbW9kaWZpZXJzRGF0YSQiLCJhcnJvd0VsZW1lbnQiLCJwb3BwZXJPZmZzZXRzIiwibW9kaWZpZXJzRGF0YSIsImJhc2VQbGFjZW1lbnQiLCJheGlzIiwiaXNWZXJ0aWNhbCIsImxlbiIsImFycm93UmVjdCIsIm1pblByb3AiLCJtYXhQcm9wIiwiZW5kRGlmZiIsInN0YXJ0RGlmZiIsImFycm93T2Zmc2V0UGFyZW50IiwiY2xpZW50U2l6ZSIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwiY2VudGVyVG9SZWZlcmVuY2UiLCJjZW50ZXIiLCJvZmZzZXQiLCJheGlzUHJvcCIsImNlbnRlck9mZnNldCIsImVmZmVjdCQxIiwiX29wdGlvbnMkZWxlbWVudCIsImFycm93JDEiLCJyZXF1aXJlc0lmRXhpc3RzIiwiZ2V0VmFyaWF0aW9uIiwidW5zZXRTaWRlcyIsInJvdW5kT2Zmc2V0c0J5RFBSIiwid2luIiwiZHByIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm1hcFRvU3R5bGVzIiwiX09iamVjdCRhc3NpZ24yIiwicG9wcGVyUmVjdCIsInZhcmlhdGlvbiIsIm9mZnNldHMiLCJncHVBY2NlbGVyYXRpb24iLCJhZGFwdGl2ZSIsInJvdW5kT2Zmc2V0cyIsImlzRml4ZWQiLCJfb2Zmc2V0cyR4IiwiX29mZnNldHMkeSIsIl9yZWYzIiwiaGFzWCIsImhhc1kiLCJzaWRlWCIsInNpZGVZIiwiaGVpZ2h0UHJvcCIsIndpZHRoUHJvcCIsIm9mZnNldFkiLCJvZmZzZXRYIiwiY29tbW9uU3R5bGVzIiwiX3JlZjQiLCJfT2JqZWN0JGFzc2lnbiIsImNvbXB1dGVTdHlsZXMiLCJfcmVmNSIsIl9vcHRpb25zJGdwdUFjY2VsZXJhdCIsIl9vcHRpb25zJGFkYXB0aXZlIiwiX29wdGlvbnMkcm91bmRPZmZzZXRzIiwiY29tcHV0ZVN0eWxlcyQxIiwicGFzc2l2ZSIsIl9vcHRpb25zJHNjcm9sbCIsInNjcm9sbCIsIl9vcHRpb25zJHJlc2l6ZSIsInJlc2l6ZSIsInNjcm9sbFBhcmVudHMiLCJzY3JvbGxQYXJlbnQiLCJ1cGRhdGUiLCJldmVudExpc3RlbmVycyIsImhhc2gkMSIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwibWF0Y2hlZCIsImhhc2giLCJnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCIsImdldFdpbmRvd1Njcm9sbCIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZ2V0V2luZG93U2Nyb2xsQmFyWCIsImdldFZpZXdwb3J0UmVjdCIsImh0bWwiLCJsYXlvdXRWaWV3cG9ydCIsImdldERvY3VtZW50UmVjdCIsIl9lbGVtZW50JG93bmVyRG9jdW1lbiIsIndpblNjcm9sbCIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0IiwiaXNTY3JvbGxQYXJlbnQiLCJfZ2V0Q29tcHV0ZWRTdHlsZSIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiZ2V0U2Nyb2xsUGFyZW50IiwibGlzdFNjcm9sbFBhcmVudHMiLCJpc0JvZHkiLCJ1cGRhdGVkTGlzdCIsInJlY3RUb0NsaWVudFJlY3QiLCJyZWN0IiwiZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUiLCJjbGlwcGluZ1BhcmVudCIsImdldENsaXBwaW5nUGFyZW50cyIsImNhbkVzY2FwZUNsaXBwaW5nIiwiY2xpcHBlckVsZW1lbnQiLCJnZXRDbGlwcGluZ1JlY3QiLCJib3VuZGFyeSIsInJvb3RCb3VuZGFyeSIsIm1haW5DbGlwcGluZ1BhcmVudHMiLCJmaXJzdENsaXBwaW5nUGFyZW50IiwiY2xpcHBpbmdSZWN0IiwiYWNjUmVjdCIsImNvbXB1dGVPZmZzZXRzIiwiY29tbW9uWCIsImNvbW1vblkiLCJtYWluQXhpcyIsImRldGVjdE92ZXJmbG93IiwiX29wdGlvbnMiLCJfb3B0aW9ucyRwbGFjZW1lbnQiLCJfb3B0aW9ucyRzdHJhdGVneSIsIl9vcHRpb25zJGJvdW5kYXJ5IiwiX29wdGlvbnMkcm9vdEJvdW5kYXJ5IiwiX29wdGlvbnMkZWxlbWVudENvbnRlIiwiZWxlbWVudENvbnRleHQiLCJfb3B0aW9ucyRhbHRCb3VuZGFyeSIsImFsdEJvdW5kYXJ5IiwiX29wdGlvbnMkcGFkZGluZyIsImFsdENvbnRleHQiLCJjbGlwcGluZ0NsaWVudFJlY3QiLCJjb250ZXh0RWxlbWVudCIsInJlZmVyZW5jZUNsaWVudFJlY3QiLCJwb3BwZXJDbGllbnRSZWN0IiwiZWxlbWVudENsaWVudFJlY3QiLCJvdmVyZmxvd09mZnNldHMiLCJvZmZzZXREYXRhIiwibXVsdGlwbHkiLCJjb21wdXRlQXV0b1BsYWNlbWVudCIsImZsaXBWYXJpYXRpb25zIiwiX29wdGlvbnMkYWxsb3dlZEF1dG9QIiwiYWxsb3dlZEF1dG9QbGFjZW1lbnRzIiwicGxhY2VtZW50cyQxIiwiYWxsb3dlZFBsYWNlbWVudHMiLCJvdmVyZmxvd3MiLCJzb3J0IiwiYSIsImIiLCJnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyIsIm9wcG9zaXRlUGxhY2VtZW50IiwiZmxpcCIsIl9za2lwIiwiX29wdGlvbnMkbWFpbkF4aXMiLCJjaGVja01haW5BeGlzIiwiX29wdGlvbnMkYWx0QXhpcyIsImFsdEF4aXMiLCJjaGVja0FsdEF4aXMiLCJzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMiLCJmYWxsYmFja1BsYWNlbWVudHMiLCJfb3B0aW9ucyRmbGlwVmFyaWF0aW8iLCJwcmVmZXJyZWRQbGFjZW1lbnQiLCJpc0Jhc2VQbGFjZW1lbnQiLCJyZWZlcmVuY2VSZWN0IiwiY2hlY2tzTWFwIiwibWFrZUZhbGxiYWNrQ2hlY2tzIiwiZmlyc3RGaXR0aW5nUGxhY2VtZW50IiwiaSIsIl9iYXNlUGxhY2VtZW50IiwiaXNTdGFydFZhcmlhdGlvbiIsIm1haW5WYXJpYXRpb25TaWRlIiwiYWx0VmFyaWF0aW9uU2lkZSIsImNoZWNrcyIsImV2ZXJ5IiwiY2hlY2siLCJudW1iZXJPZkNoZWNrcyIsIl9sb29wIiwiX2kiLCJmaXR0aW5nUGxhY2VtZW50IiwiX3JldCIsInJlc2V0IiwiZmxpcCQxIiwiZ2V0U2lkZU9mZnNldHMiLCJwcmV2ZW50ZWRPZmZzZXRzIiwiaXNBbnlTaWRlRnVsbHlDbGlwcGVkIiwic29tZSIsInNpZGUiLCJwcmV2ZW50T3ZlcmZsb3ciLCJyZWZlcmVuY2VPdmVyZmxvdyIsInBvcHBlckFsdE92ZXJmbG93IiwicmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzIiwicG9wcGVyRXNjYXBlT2Zmc2V0cyIsImlzUmVmZXJlbmNlSGlkZGVuIiwiaGFzUG9wcGVyRXNjYXBlZCIsImhpZGUkMSIsImRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZIiwiaW52ZXJ0RGlzdGFuY2UiLCJza2lkZGluZyIsImRpc3RhbmNlIiwiX29wdGlvbnMkb2Zmc2V0IiwiX2RhdGEkc3RhdGUkcGxhY2VtZW50Iiwib2Zmc2V0JDEiLCJwb3BwZXJPZmZzZXRzJDEiLCJnZXRBbHRBeGlzIiwiX29wdGlvbnMkdGV0aGVyIiwidGV0aGVyIiwiX29wdGlvbnMkdGV0aGVyT2Zmc2V0IiwidGV0aGVyT2Zmc2V0IiwidGV0aGVyT2Zmc2V0VmFsdWUiLCJub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUiLCJvZmZzZXRNb2RpZmllclN0YXRlIiwiX29mZnNldE1vZGlmaWVyU3RhdGUkIiwibWFpblNpZGUiLCJhbHRTaWRlIiwiYWRkaXRpdmUiLCJtaW5MZW4iLCJtYXhMZW4iLCJhcnJvd1BhZGRpbmdPYmplY3QiLCJhcnJvd1BhZGRpbmdNaW4iLCJhcnJvd1BhZGRpbmdNYXgiLCJhcnJvd0xlbiIsIm1pbk9mZnNldCIsIm1heE9mZnNldCIsImNsaWVudE9mZnNldCIsIm9mZnNldE1vZGlmaWVyVmFsdWUiLCJ0ZXRoZXJNaW4iLCJ0ZXRoZXJNYXgiLCJwcmV2ZW50ZWRPZmZzZXQiLCJfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIiwiX21haW5TaWRlIiwiX2FsdFNpZGUiLCJfb2Zmc2V0IiwiX2xlbiIsIl9taW4iLCJfbWF4IiwiaXNPcmlnaW5TaWRlIiwiX29mZnNldE1vZGlmaWVyVmFsdWUiLCJfdGV0aGVyTWluIiwiX3RldGhlck1heCIsIl9wcmV2ZW50ZWRPZmZzZXQiLCJwcmV2ZW50T3ZlcmZsb3ckMSIsImdldEhUTUxFbGVtZW50U2Nyb2xsIiwiZ2V0Tm9kZVNjcm9sbCIsImlzRWxlbWVudFNjYWxlZCIsImdldENvbXBvc2l0ZVJlY3QiLCJlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCIsImlzT2Zmc2V0UGFyZW50QW5FbGVtZW50Iiwib2Zmc2V0UGFyZW50SXNTY2FsZWQiLCJtb2RpZmllcnMiLCJ2aXNpdGVkIiwicmVzdWx0IiwibW9kaWZpZXIiLCJkZXAiLCJkZXBNb2RpZmllciIsIm9yZGVyTW9kaWZpZXJzIiwib3JkZXJlZE1vZGlmaWVycyIsImRlYm91bmNlIiwicGVuZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIm1lcmdlQnlOYW1lIiwibWVyZ2VkIiwiY3VycmVudCIsImV4aXN0aW5nIiwiREVGQVVMVF9PUFRJT05TIiwiYXJlVmFsaWRFbGVtZW50cyIsIl9rZXkiLCJwb3BwZXJHZW5lcmF0b3IiLCJnZW5lcmF0b3JPcHRpb25zIiwiX2dlbmVyYXRvck9wdGlvbnMiLCJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYiLCJkZWZhdWx0TW9kaWZpZXJzIiwiX2dlbmVyYXRvck9wdGlvbnMkZGVmMiIsImRlZmF1bHRPcHRpb25zIiwiY3JlYXRlUG9wcGVyIiwiZWZmZWN0Q2xlYW51cEZucyIsImlzRGVzdHJveWVkIiwic2V0T3B0aW9ucyIsInNldE9wdGlvbnNBY3Rpb24iLCJjbGVhbnVwTW9kaWZpZXJFZmZlY3RzIiwibSIsInJ1bk1vZGlmaWVyRWZmZWN0cyIsImZvcmNlVXBkYXRlIiwiX3N0YXRlJGVsZW1lbnRzIiwiX3N0YXRlJG9yZGVyZWRNb2RpZmllIiwiX3N0YXRlJG9yZGVyZWRNb2RpZmllMiIsImRlc3Ryb3kiLCJvbkZpcnN0VXBkYXRlIiwiX3JlZjMkb3B0aW9ucyIsImNsZWFudXBGbiIsIm5vb3BGbiIsImNyZWF0ZVBvcHBlciQyIiwiZGVmYXVsdE1vZGlmaWVycyQxIiwiY3JlYXRlUG9wcGVyJDEiLCJQb3BwZXIiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJjcmVhdGVQb3BwZXJCYXNlIiwiY3JlYXRlUG9wcGVyTGl0ZSIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiTkFNRSRhIiwiREFUQV9LRVkkNiIsIkVWRU5UX0tFWSQ2IiwiREFUQV9BUElfS0VZJDMiLCJFU0NBUEVfS0VZJDIiLCJUQUJfS0VZJDEiLCJBUlJPV19VUF9LRVkkMSIsIkFSUk9XX0RPV05fS0VZJDEiLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJFVkVOVF9ISURFJDUiLCJFVkVOVF9ISURERU4kNSIsIkVWRU5UX1NIT1ckNSIsIkVWRU5UX1NIT1dOJDUiLCJFVkVOVF9DTElDS19EQVRBX0FQSSQzIiwiRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSIsIkVWRU5UX0tFWVVQX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9TSE9XJDYiLCJDTEFTU19OQU1FX0RST1BVUCIsIkNMQVNTX05BTUVfRFJPUEVORCIsIkNMQVNTX05BTUVfRFJPUFNUQVJUIiwiQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSIiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04iLCJTRUxFQ1RPUl9NRU5VIiwiU0VMRUNUT1JfTkFWQkFSIiwiU0VMRUNUT1JfTkFWQkFSX05BViIsIlNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMiLCJQTEFDRU1FTlRfVE9QIiwiUExBQ0VNRU5UX1RPUEVORCIsIlBMQUNFTUVOVF9CT1RUT00iLCJQTEFDRU1FTlRfQk9UVE9NRU5EIiwiUExBQ0VNRU5UX1JJR0hUIiwiUExBQ0VNRU5UX0xFRlQiLCJQTEFDRU1FTlRfVE9QQ0VOVEVSIiwiUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiIsIkRlZmF1bHQkOSIsImF1dG9DbG9zZSIsImRpc3BsYXkiLCJwb3BwZXJDb25maWciLCJEZWZhdWx0VHlwZSQ5IiwiRHJvcGRvd24iLCJfQmFzZUNvbXBvbmVudDUiLCJfc3VwZXI3IiwiX3RoaXMxNSIsIl9wb3BwZXIiLCJfcGFyZW50IiwiX21lbnUiLCJfaW5OYXZiYXIiLCJfZGV0ZWN0TmF2YmFyIiwic2hvd0V2ZW50IiwiX2NyZWF0ZVBvcHBlciIsIl9yZWY5IiwiX2l0ZXJhdG9yMTIiLCJfc3RlcDEyIiwiZm9jdXMiLCJfY29tcGxldGVIaWRlIiwiaGlkZUV2ZW50IiwiX3JlZjEwIiwiX2l0ZXJhdG9yMTMiLCJfc3RlcDEzIiwicmVmZXJlbmNlRWxlbWVudCIsIl9nZXRQb3BwZXJDb25maWciLCJfZ2V0UGxhY2VtZW50IiwicGFyZW50RHJvcGRvd24iLCJpc0VuZCIsIl9nZXRPZmZzZXQiLCJfdGhpczE2IiwicG9wcGVyRGF0YSIsImRlZmF1bHRCc1BvcHBlckNvbmZpZyIsIl9zZWxlY3RNZW51SXRlbSIsIl9yZWYxMSIsImNsZWFyTWVudXMiLCJvcGVuVG9nZ2xlcyIsIl9pdGVyYXRvcjE0IiwiX3N0ZXAxNCIsImNvbXBvc2VkUGF0aCIsImlzTWVudVRhcmdldCIsImRhdGFBcGlLZXlkb3duSGFuZGxlciIsImlzSW5wdXQiLCJpc0VzY2FwZUV2ZW50IiwiaXNVcE9yRG93bkV2ZW50IiwiZ2V0VG9nZ2xlQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwiU0VMRUNUT1JfRklYRURfQ09OVEVOVCIsIlNFTEVDVE9SX1NUSUNLWV9DT05URU5UIiwiUFJPUEVSVFlfUEFERElORyIsIlBST1BFUlRZX01BUkdJTiIsIlNjcm9sbEJhckhlbHBlciIsImdldFdpZHRoIiwiZG9jdW1lbnRXaWR0aCIsImlubmVyV2lkdGgiLCJfZGlzYWJsZU92ZXJGbG93IiwiX3NldEVsZW1lbnRBdHRyaWJ1dGVzIiwiY2FsY3VsYXRlZFZhbHVlIiwiX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJpc092ZXJmbG93aW5nIiwiX3NhdmVJbml0aWFsQXR0cmlidXRlIiwic3R5bGVQcm9wZXJ0eSIsIl90aGlzMTciLCJzY3JvbGxiYXJXaWR0aCIsIm1hbmlwdWxhdGlvbkNhbGxCYWNrIiwic2V0UHJvcGVydHkiLCJfYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayIsImFjdHVhbFZhbHVlIiwicmVtb3ZlUHJvcGVydHkiLCJjYWxsQmFjayIsIl9pdGVyYXRvcjE1IiwiX3N0ZXAxNSIsInNlbCIsIk5BTUUkOSIsIkNMQVNTX05BTUVfRkFERSQ0IiwiQ0xBU1NfTkFNRV9TSE9XJDUiLCJFVkVOVF9NT1VTRURPV04iLCJEZWZhdWx0JDgiLCJjbGFzc05hbWUiLCJjbGlja0NhbGxiYWNrIiwicm9vdEVsZW1lbnQiLCJEZWZhdWx0VHlwZSQ4IiwiQmFja2Ryb3AiLCJfQ29uZmlnMyIsIl9zdXBlcjgiLCJfdGhpczE4IiwiX2lzQXBwZW5kZWQiLCJfYXBwZW5kIiwiX2dldEVsZW1lbnQiLCJfZW11bGF0ZUFuaW1hdGlvbiIsIl90aGlzMTkiLCJiYWNrZHJvcCIsImNyZWF0ZUVsZW1lbnQiLCJfdGhpczIwIiwiYXBwZW5kIiwiTkFNRSQ4IiwiREFUQV9LRVkkNSIsIkVWRU5UX0tFWSQ1IiwiRVZFTlRfRk9DVVNJTiQyIiwiRVZFTlRfS0VZRE9XTl9UQUIiLCJUQUJfS0VZIiwiVEFCX05BVl9GT1JXQVJEIiwiVEFCX05BVl9CQUNLV0FSRCIsIkRlZmF1bHQkNyIsImF1dG9mb2N1cyIsInRyYXBFbGVtZW50IiwiRGVmYXVsdFR5cGUkNyIsIkZvY3VzVHJhcCIsIl9Db25maWc0IiwiX3N1cGVyOSIsIl90aGlzMjEiLCJfaXNBY3RpdmUiLCJfbGFzdFRhYk5hdkRpcmVjdGlvbiIsImFjdGl2YXRlIiwiX3RoaXMyMiIsIl9oYW5kbGVGb2N1c2luIiwiX2hhbmRsZUtleWRvd24iLCJkZWFjdGl2YXRlIiwic2hpZnRLZXkiLCJOQU1FJDciLCJEQVRBX0tFWSQ0IiwiRVZFTlRfS0VZJDQiLCJEQVRBX0FQSV9LRVkkMiIsIkVTQ0FQRV9LRVkkMSIsIkVWRU5UX0hJREUkNCIsIkVWRU5UX0hJREVfUFJFVkVOVEVEJDEiLCJFVkVOVF9ISURERU4kNCIsIkVWRU5UX1NIT1ckNCIsIkVWRU5UX1NIT1dOJDQiLCJFVkVOVF9SRVNJWkUkMSIsIkVWRU5UX0NMSUNLX0RJU01JU1MiLCJFVkVOVF9NT1VTRURPV05fRElTTUlTUyIsIkVWRU5UX0tFWURPV05fRElTTUlTUyQxIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMiIsIkNMQVNTX05BTUVfT1BFTiIsIkNMQVNTX05BTUVfRkFERSQzIiwiQ0xBU1NfTkFNRV9TSE9XJDQiLCJDTEFTU19OQU1FX1NUQVRJQyIsIk9QRU5fU0VMRUNUT1IkMSIsIlNFTEVDVE9SX0RJQUxPRyIsIlNFTEVDVE9SX01PREFMX0JPRFkiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQyIiwiRGVmYXVsdCQ2IiwiRGVmYXVsdFR5cGUkNiIsIk1vZGFsIiwiX0Jhc2VDb21wb25lbnQ2IiwiX3N1cGVyMTAiLCJfdGhpczIzIiwiX2RpYWxvZyIsIl9iYWNrZHJvcCIsIl9pbml0aWFsaXplQmFja0Ryb3AiLCJfZm9jdXN0cmFwIiwiX2luaXRpYWxpemVGb2N1c1RyYXAiLCJfc2Nyb2xsQmFyIiwiX3RoaXMyNCIsIl9hZGp1c3REaWFsb2ciLCJfc2hvd0VsZW1lbnQiLCJfdGhpczI1IiwiX2hpZGVNb2RhbCIsIl9pOCIsIl9hcnIyIiwiaHRtbEVsZW1lbnQiLCJoYW5kbGVVcGRhdGUiLCJfdGhpczI2IiwibW9kYWxCb2R5IiwidHJhbnNpdGlvbkNvbXBsZXRlIiwiX3RoaXMyNyIsIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwiZXZlbnQyIiwiX3RoaXMyOCIsIl9yZXNldEFkanVzdG1lbnRzIiwiX3RoaXMyOSIsImlzTW9kYWxPdmVyZmxvd2luZyIsImluaXRpYWxPdmVyZmxvd1kiLCJpc0JvZHlPdmVyZmxvd2luZyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiX3RoaXMzMCIsImFscmVhZHlPcGVuIiwiTkFNRSQ2IiwiREFUQV9LRVkkMyIsIkVWRU5UX0tFWSQzIiwiREFUQV9BUElfS0VZJDEiLCJFVkVOVF9MT0FEX0RBVEFfQVBJJDIiLCJFU0NBUEVfS0VZIiwiQ0xBU1NfTkFNRV9TSE9XJDMiLCJDTEFTU19OQU1FX1NIT1dJTkckMSIsIkNMQVNTX05BTUVfSElESU5HIiwiQ0xBU1NfTkFNRV9CQUNLRFJPUCIsIk9QRU5fU0VMRUNUT1IiLCJFVkVOVF9TSE9XJDMiLCJFVkVOVF9TSE9XTiQzIiwiRVZFTlRfSElERSQzIiwiRVZFTlRfSElERV9QUkVWRU5URUQiLCJFVkVOVF9ISURERU4kMyIsIkVWRU5UX1JFU0laRSIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJJDEiLCJFVkVOVF9LRVlET1dOX0RJU01JU1MiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQxIiwiRGVmYXVsdCQ1IiwiRGVmYXVsdFR5cGUkNSIsIk9mZmNhbnZhcyIsIl9CYXNlQ29tcG9uZW50NyIsIl9zdXBlcjExIiwiX3RoaXMzMSIsIl90aGlzMzIiLCJfdGhpczMzIiwiYmx1ciIsImNvbXBsZXRlQ2FsbGJhY2siLCJfdGhpczM0IiwiX3RoaXMzNSIsIl90aGlzMzYiLCJfaXRlcmF0b3IxNiIsIl9zdGVwMTYiLCJfaXRlcmF0b3IxNyIsIl9zdGVwMTciLCJ1cmlBdHRyaWJ1dGVzIiwiQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwiYWxsb3dlZEF0dHJpYnV0ZSIsImFsbG93ZWRBdHRyaWJ1dGVMaXN0IiwiYXR0cmlidXRlTmFtZSIsIm5vZGVWYWx1ZSIsImF0dHJpYnV0ZVJlZ2V4IiwicmVnZXgiLCJEZWZhdWx0QWxsb3dsaXN0IiwiYXJlYSIsImJyIiwiY29sIiwiY29kZSIsImRpdiIsImVtIiwiaHIiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJsaSIsIm9sIiwicCIsInByZSIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsInNhbml0aXplSHRtbCIsInVuc2FmZUh0bWwiLCJhbGxvd0xpc3QiLCJzYW5pdGl6ZUZ1bmN0aW9uIiwiX3JlZjEyIiwiZG9tUGFyc2VyIiwiRE9NUGFyc2VyIiwiY3JlYXRlZERvY3VtZW50IiwicGFyc2VGcm9tU3RyaW5nIiwiX2l0ZXJhdG9yMTgiLCJfc3RlcDE4IiwiX3JlZjEzIiwiZWxlbWVudE5hbWUiLCJhdHRyaWJ1dGVMaXN0IiwiYWxsb3dlZEF0dHJpYnV0ZXMiLCJfaXRlcmF0b3IxOSIsIl9zdGVwMTkiLCJpbm5lckhUTUwiLCJOQU1FJDUiLCJEZWZhdWx0JDQiLCJjb250ZW50IiwiZXh0cmFDbGFzcyIsInNhbml0aXplIiwic2FuaXRpemVGbiIsInRlbXBsYXRlIiwiRGVmYXVsdFR5cGUkNCIsIkRlZmF1bHRDb250ZW50VHlwZSIsImVudHJ5IiwiVGVtcGxhdGVGYWN0b3J5IiwiX0NvbmZpZzUiLCJfc3VwZXIxMiIsIl90aGlzMzciLCJnZXRDb250ZW50IiwiX3RoaXMzOCIsIl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbiIsImhhc0NvbnRlbnQiLCJjaGFuZ2VDb250ZW50IiwiX2NoZWNrQ29udGVudCIsInRvSHRtbCIsInRlbXBsYXRlV3JhcHBlciIsIl9tYXliZVNhbml0aXplIiwiX2k5IiwiX09iamVjdCRlbnRyaWVzNSIsIl9PYmplY3QkZW50cmllczUkX2kiLCJ0ZXh0IiwiX3NldENvbnRlbnQiLCJfdGVtcGxhdGUkY2xhc3NMaXN0IiwiYXJnIiwiX2kxMCIsIl9PYmplY3QkZW50cmllczYiLCJfT2JqZWN0JGVudHJpZXM2JF9pIiwidGVtcGxhdGVFbGVtZW50IiwiX3B1dEVsZW1lbnRJblRlbXBsYXRlIiwiTkFNRSQ0IiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiQ0xBU1NfTkFNRV9GQURFJDIiLCJDTEFTU19OQU1FX01PREFMIiwiQ0xBU1NfTkFNRV9TSE9XJDIiLCJTRUxFQ1RPUl9UT09MVElQX0lOTkVSIiwiU0VMRUNUT1JfTU9EQUwiLCJFVkVOVF9NT0RBTF9ISURFIiwiVFJJR0dFUl9IT1ZFUiIsIlRSSUdHRVJfRk9DVVMiLCJUUklHR0VSX0NMSUNLIiwiVFJJR0dFUl9NQU5VQUwiLCJFVkVOVF9ISURFJDIiLCJFVkVOVF9ISURERU4kMiIsIkVWRU5UX1NIT1ckMiIsIkVWRU5UX1NIT1dOJDIiLCJFVkVOVF9JTlNFUlRFRCIsIkVWRU5UX0NMSUNLJDEiLCJFVkVOVF9GT0NVU0lOJDEiLCJFVkVOVF9GT0NVU09VVCQxIiwiRVZFTlRfTU9VU0VFTlRFUiIsIkVWRU5UX01PVVNFTEVBVkUiLCJBdHRhY2htZW50TWFwIiwiQVVUTyIsIlRPUCIsIlJJR0hUIiwiQk9UVE9NIiwiTEVGVCIsIkRlZmF1bHQkMyIsImFuaW1hdGlvbiIsImN1c3RvbUNsYXNzIiwiZGVsYXkiLCJ0aXRsZSIsIkRlZmF1bHRUeXBlJDMiLCJUb29sdGlwIiwiX0Jhc2VDb21wb25lbnQ4IiwiX3N1cGVyMTMiLCJfdGhpczM5IiwiX2lzRW5hYmxlZCIsIl90aW1lb3V0IiwiX2lzSG92ZXJlZCIsIl9hY3RpdmVUcmlnZ2VyIiwiX3RlbXBsYXRlRmFjdG9yeSIsIl9uZXdDb250ZW50IiwidGlwIiwiX3NldExpc3RlbmVycyIsIl9maXhUaXRsZSIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiY2xpY2siLCJfbGVhdmUiLCJfZW50ZXIiLCJfaGlkZU1vZGFsSGFuZGxlciIsIl9kaXNwb3NlUG9wcGVyIiwiX3RoaXM0MCIsIl9pc1dpdGhDb250ZW50Iiwic2hhZG93Um9vdCIsImlzSW5UaGVEb20iLCJfZ2V0VGlwRWxlbWVudCIsIl9yZWYxNCIsIl9pdGVyYXRvcjIwIiwiX3N0ZXAyMCIsIl90aGlzNDEiLCJfcmVmMTUiLCJfaXRlcmF0b3IyMSIsIl9zdGVwMjEiLCJfaXNXaXRoQWN0aXZlVHJpZ2dlciIsIl9nZXRUaXRsZSIsIl9jcmVhdGVUaXBFbGVtZW50IiwiX2dldENvbnRlbnRGb3JUZW1wbGF0ZSIsIl9nZXRUZW1wbGF0ZUZhY3RvcnkiLCJ0aXBJZCIsInNldENvbnRlbnQiLCJfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0IiwiX2dldERlbGVnYXRlQ29uZmlnIiwiYXR0YWNobWVudCIsIl90aGlzNDIiLCJfdGhpczQzIiwiX3RoaXM0NCIsInRyaWdnZXJzIiwiX2l0ZXJhdG9yMjIiLCJfc3RlcDIyIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX3RoaXM0NSIsIl9zZXRUaW1lb3V0IiwiX3RoaXM0NiIsInRpbWVvdXQiLCJkYXRhQXR0cmlidXRlcyIsIl9pMTEiLCJfT2JqZWN0JGtleXMyIiwiZGF0YUF0dHJpYnV0ZSIsIl9pMTIiLCJfT2JqZWN0JGVudHJpZXM3IiwiX09iamVjdCRlbnRyaWVzNyRfaSIsIk5BTUUkMyIsIlNFTEVDVE9SX1RJVExFIiwiU0VMRUNUT1JfQ09OVEVOVCIsIkRlZmF1bHQkMiIsIkRlZmF1bHRUeXBlJDIiLCJQb3BvdmVyIiwiX1Rvb2x0aXAiLCJfc3VwZXIxNCIsIl9nZXRDb250ZW50IiwiX3JlZjE3IiwiTkFNRSQyIiwiREFUQV9LRVkkMiIsIkVWRU5UX0tFWSQyIiwiREFUQV9BUElfS0VZIiwiRVZFTlRfQUNUSVZBVEUiLCJFVkVOVF9DTElDSyIsIkVWRU5UX0xPQURfREFUQV9BUEkkMSIsIkNMQVNTX05BTUVfRFJPUERPV05fSVRFTSIsIkNMQVNTX05BTUVfQUNUSVZFJDEiLCJTRUxFQ1RPUl9EQVRBX1NQWSIsIlNFTEVDVE9SX1RBUkdFVF9MSU5LUyIsIlNFTEVDVE9SX05BVl9MSVNUX0dST1VQIiwiU0VMRUNUT1JfTkFWX0xJTktTIiwiU0VMRUNUT1JfTkFWX0lURU1TIiwiU0VMRUNUT1JfTElTVF9JVEVNUyIsIlNFTEVDVE9SX0xJTktfSVRFTVMiLCJTRUxFQ1RPUl9EUk9QRE9XTiIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSQxIiwiRGVmYXVsdCQxIiwicm9vdE1hcmdpbiIsInNtb290aFNjcm9sbCIsInRocmVzaG9sZCIsIkRlZmF1bHRUeXBlJDEiLCJTY3JvbGxTcHkiLCJfQmFzZUNvbXBvbmVudDkiLCJfc3VwZXIxNSIsIl90aGlzNDciLCJfdGFyZ2V0TGlua3MiLCJfb2JzZXJ2YWJsZVNlY3Rpb25zIiwiX3Jvb3RFbGVtZW50IiwiX2FjdGl2ZVRhcmdldCIsIl9vYnNlcnZlciIsIl9wcmV2aW91c1Njcm9sbERhdGEiLCJ2aXNpYmxlRW50cnlUb3AiLCJwYXJlbnRTY3JvbGxUb3AiLCJyZWZyZXNoIiwiX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMiLCJfbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwiLCJkaXNjb25uZWN0IiwiX2dldE5ld09ic2VydmVyIiwiX2l0ZXJhdG9yMjMiLCJfc3RlcDIzIiwic2VjdGlvbiIsIm9ic2VydmUiLCJfdGhpczQ4Iiwib2JzZXJ2YWJsZVNlY3Rpb24iLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiX3RoaXM0OSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiX29ic2VydmVyQ2FsbGJhY2siLCJfdGhpczUwIiwidGFyZ2V0RWxlbWVudCIsIl9wcm9jZXNzIiwidXNlclNjcm9sbHNEb3duIiwiX2l0ZXJhdG9yMjQiLCJfc3RlcDI0IiwiaXNJbnRlcnNlY3RpbmciLCJfY2xlYXJBY3RpdmVDbGFzcyIsImVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyIsInRhcmdldExpbmtzIiwiX2l0ZXJhdG9yMjUiLCJfc3RlcDI1IiwiYW5jaG9yIiwiX2FjdGl2YXRlUGFyZW50cyIsIl9pdGVyYXRvcjI2IiwiX3N0ZXAyNiIsImxpc3RHcm91cCIsIl9pdGVyYXRvcjI3IiwiX3N0ZXAyNyIsImFjdGl2ZU5vZGVzIiwiX2l0ZXJhdG9yMjgiLCJfc3RlcDI4IiwiX2l0ZXJhdG9yMjkiLCJfc3RlcDI5Iiwic3B5IiwiTkFNRSQxIiwiREFUQV9LRVkkMSIsIkVWRU5UX0tFWSQxIiwiRVZFTlRfSElERSQxIiwiRVZFTlRfSElEREVOJDEiLCJFVkVOVF9TSE9XJDEiLCJFVkVOVF9TSE9XTiQxIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCJFVkVOVF9LRVlET1dOIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSIsIkFSUk9XX0xFRlRfS0VZIiwiQVJST1dfUklHSFRfS0VZIiwiQVJST1dfVVBfS0VZIiwiQVJST1dfRE9XTl9LRVkiLCJDTEFTU19OQU1FX0FDVElWRSIsIkNMQVNTX05BTUVfRkFERSQxIiwiQ0xBU1NfTkFNRV9TSE9XJDEiLCJDTEFTU19EUk9QRE9XTiIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsIlNFTEVDVE9SX0RST1BET1dOX01FTlUiLCJOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwiU0VMRUNUT1JfVEFCX1BBTkVMIiwiU0VMRUNUT1JfT1VURVIiLCJTRUxFQ1RPUl9JTk5FUiIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwiU0VMRUNUT1JfSU5ORVJfRUxFTSIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSIsIlRhYiIsIl9CYXNlQ29tcG9uZW50MTAiLCJfc3VwZXIxNiIsIl90aGlzNTEiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXMiLCJfZ2V0Q2hpbGRyZW4iLCJpbm5lckVsZW0iLCJfZWxlbUlzQWN0aXZlIiwiYWN0aXZlIiwiX2dldEFjdGl2ZUVsZW0iLCJfZGVhY3RpdmF0ZSIsIl9hY3RpdmF0ZSIsInJlbGF0ZWRFbGVtIiwiX3RoaXM1MiIsIl90b2dnbGVEcm9wRG93biIsIl90aGlzNTMiLCJuZXh0QWN0aXZlRWxlbWVudCIsInByZXZlbnRTY3JvbGwiLCJfdGhpczU0IiwiX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzIiwiX2l0ZXJhdG9yMzAiLCJfc3RlcDMwIiwiX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZCIsIl9nZXRJbm5lckVsZW1lbnQiLCJpc0FjdGl2ZSIsIm91dGVyRWxlbSIsIl9nZXRPdXRlckVsZW1lbnQiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsIiwib3BlbiIsIl9pdGVyYXRvcjMxIiwiX3N0ZXAzMSIsIkVWRU5UX01PVVNFT1ZFUiIsIkVWRU5UX01PVVNFT1VUIiwiRVZFTlRfRk9DVVNJTiIsIkVWRU5UX0ZPQ1VTT1VUIiwiRVZFTlRfSElERSIsIkVWRU5UX0hJRERFTiIsIkVWRU5UX1NIT1ciLCJFVkVOVF9TSE9XTiIsIkNMQVNTX05BTUVfRkFERSIsIkNMQVNTX05BTUVfSElERSIsIkNMQVNTX05BTUVfU0hPVyIsIkNMQVNTX05BTUVfU0hPV0lORyIsImF1dG9oaWRlIiwiVG9hc3QiLCJfQmFzZUNvbXBvbmVudDExIiwiX3N1cGVyMTciLCJfdGhpczU1IiwiX2hhc01vdXNlSW50ZXJhY3Rpb24iLCJfaGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiIsIl90aGlzNTYiLCJfY2xlYXJUaW1lb3V0IiwiX21heWJlU2NoZWR1bGVIaWRlIiwiX3RoaXM1NyIsImlzU2hvd24iLCJfdGhpczU4IiwiX29uSW50ZXJhY3Rpb24iLCJpc0ludGVyYWN0aW5nIiwiX3RoaXM1OSIsImluZGV4X3VtZCJdLCJzb3VyY2VSb290IjoiIn0=