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
/* harmony import */ var _js_escapegame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/escapegame */ "./assets/js/escapegame.js");
/* harmony import */ var _js_escapegame__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_escapegame__WEBPACK_IMPORTED_MODULE_4__);
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
// Add style to big card container
var cardContainers = document.querySelectorAll(".blackjack-card-container");
cardContainers.forEach(function (container) {
  var cards = container.querySelectorAll(".card-sprite");
  var addLeft = 100 / (cards.length + 1);
  var rotate = 8 / (cards.length - 1);
  var rotateStyle = -4;
  var classLeft = addLeft;
  cards.forEach(function (card) {
    card.style.left = "".concat(classLeft, "%");
    card.style.transform = "translate(-50%, 0) rotate(".concat(rotateStyle, "deg)");
    classLeft += addLeft;
    rotateStyle += rotate;
  });
});

// Add style to small card container
var cardContainersMini = document.querySelectorAll(".blackjack-card-container-mini");
var miniBottomStyle = 10;
cardContainersMini.forEach(function (container) {
  var cards = container.querySelectorAll(".card-sprite");
  var addLeft = 100 / (cards.length + 1);
  var rotate = 12 / (cards.length - 1);
  var rotateStyle = cards.length > 1 ? -6 : 0;
  var classLeft = addLeft;
  container.style.bottom = "".concat(miniBottomStyle, "%");
  miniBottomStyle += 20;
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

/***/ "./assets/js/escapegame.js":
/*!*********************************!*\
  !*** ./assets/js/escapegame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
var container = document.getElementById("game-new-text");
var text = container.innerText;
var textArray;
var counter = 0;
var writingInterval;
container.innerText = "";
textArray = text.split(" ");
document.addEventListener('DOMContentLoaded', function () {
  writingInterval = setInterval(function () {
    container.innerText += ' ' + textArray[counter];
    counter++;
    if (counter === textArray.length) {
      clearInterval(writingInterval);
    }
  }, 50);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2JsYWNramFjay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYm9vdHN0cmFwLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXNjYXBlZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuLy8gaW1wb3J0IGJvb3RzdHJhcCBqc1xuaW1wb3J0ICcuL2pzL2Jvb3RzdHJhcC5idW5kbGUnO1xuXG4vLyBpbXBvcnQgb3duIGpzXG5pbXBvcnQgJy4vanMvYmxhY2tqYWNrJztcbmltcG9ydCAnLi9qcy9lc2NhcGVnYW1lJztcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gQWRkIHN0eWxlIHRvIGJpZyBjYXJkIGNvbnRhaW5lclxuY29uc3QgY2FyZENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsYWNramFjay1jYXJkLWNvbnRhaW5lclwiKTtcbmNhcmRDb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICBjb25zdCBjYXJkcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmQtc3ByaXRlXCIpO1xuICAgIGNvbnN0IGFkZExlZnQgPSAxMDAgLyAoY2FyZHMubGVuZ3RoICsgMSk7XG4gICAgY29uc3Qgcm90YXRlID0gOCAvIChjYXJkcy5sZW5ndGggLSAxKTtcbiAgICBsZXQgcm90YXRlU3R5bGUgPSAtNDtcbiAgICBsZXQgY2xhc3NMZWZ0ID0gYWRkTGVmdDtcblxuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNhcmQuc3R5bGUubGVmdCA9IGAke2NsYXNzTGVmdH0lYDtcbiAgICAgICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC01MCUsIDApIHJvdGF0ZSgke3JvdGF0ZVN0eWxlfWRlZylgO1xuICAgICAgICBjbGFzc0xlZnQgKz0gYWRkTGVmdDtcbiAgICAgICAgcm90YXRlU3R5bGUgKz0gcm90YXRlO1xuICAgIH0pICBcbn0pXG5cbi8vIEFkZCBzdHlsZSB0byBzbWFsbCBjYXJkIGNvbnRhaW5lclxuY29uc3QgY2FyZENvbnRhaW5lcnNNaW5pID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibGFja2phY2stY2FyZC1jb250YWluZXItbWluaVwiKTtcbmxldCBtaW5pQm90dG9tU3R5bGUgPSAxMDtcblxuY2FyZENvbnRhaW5lcnNNaW5pLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICBjb25zdCBjYXJkcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmQtc3ByaXRlXCIpO1xuICAgIGNvbnN0IGFkZExlZnQgPSAxMDAgLyAoY2FyZHMubGVuZ3RoICsgMSk7XG4gICAgY29uc3Qgcm90YXRlID0gMTIgLyAoY2FyZHMubGVuZ3RoIC0gMSk7XG4gICAgbGV0IHJvdGF0ZVN0eWxlID0gY2FyZHMubGVuZ3RoID4gMSA/IC02IDogMDtcbiAgICBsZXQgY2xhc3NMZWZ0ID0gYWRkTGVmdDtcblxuICAgIGNvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBgJHttaW5pQm90dG9tU3R5bGV9JWA7XG4gICAgbWluaUJvdHRvbVN0eWxlICs9IDIwO1xuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNhcmQuc3R5bGUubGVmdCA9IGAke2NsYXNzTGVmdH0lYDtcbiAgICAgICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC01MCUsIDApIHJvdGF0ZSgke3JvdGF0ZVN0eWxlfWRlZylgO1xuICAgICAgICBjbGFzc0xlZnQgKz0gYWRkTGVmdDtcbiAgICAgICAgcm90YXRlU3R5bGUgKz0gcm90YXRlO1xuICAgIH0pIFxufSkiLCIvKiFcbiAgKiBCb290c3RyYXAgdjUuMy4wLWFscGhhMiAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcbiAgKiBDb3B5cmlnaHQgMjAxMS0yMDIzIFRoZSBCb290c3RyYXAgQXV0aG9ycyAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2dyYXBocy9jb250cmlidXRvcnMpXG4gICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5ib290c3RyYXAgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9pbmRleC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTUFYX1VJRCA9IDEwMDAwMDA7XG4gIGNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMDtcbiAgY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCc7XG5cbiAgLyoqXG4gICAqIFByb3Blcmx5IGVzY2FwZSBJRHMgc2VsZWN0b3JzIHRvIGhhbmRsZSB3ZWlyZCBJRHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBjb25zdCBwYXJzZVNlbGVjdG9yID0gc2VsZWN0b3IgPT4ge1xuICAgIGlmIChzZWxlY3RvciAmJiB3aW5kb3cuQ1NTICYmIHdpbmRvdy5DU1MuZXNjYXBlKSB7XG4gICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIG5lZWRzIGVzY2FwaW5nIHRvIGhhbmRsZSBJRHMgKGh0bWw1KykgY29udGFpbmluZyBmb3IgaW5zdGFuY2UgL1xuICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC8jKFteXFxzXCIjJ10rKS9nLCAobWF0Y2gsIGlkKSA9PiBgIyR7Q1NTLmVzY2FwZShpZCl9YCk7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfTtcblxuICAvLyBTaG91dC1vdXQgQW5ndXMgQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbiAgY29uc3QgdG9UeXBlID0gb2JqZWN0ID0+IHtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYCR7b2JqZWN0fWA7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIFV0aWwgQVBJXG4gICAqL1xuXG4gIGNvbnN0IGdldFVJRCA9IHByZWZpeCA9PiB7XG4gICAgZG8ge1xuICAgICAgcHJlZml4ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpO1xuICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpO1xuICAgIHJldHVybiBwcmVmaXg7XG4gIH07XG4gIGNvbnN0IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICAgIGxldCB7XG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICB0cmFuc2l0aW9uRGVsYXlcbiAgICB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KTtcblxuICAgIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdO1xuICAgIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdO1xuICAgIHJldHVybiAoTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVI7XG4gIH07XG4gIGNvbnN0IHRyaWdnZXJUcmFuc2l0aW9uRW5kID0gZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChUUkFOU0lUSU9OX0VORCkpO1xuICB9O1xuICBjb25zdCBpc0VsZW1lbnQkMSA9IG9iamVjdCA9PiB7XG4gICAgaWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmplY3QuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgb2JqZWN0ID0gb2JqZWN0WzBdO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdC5ub2RlVHlwZSAhPT0gJ3VuZGVmaW5lZCc7XG4gIH07XG4gIGNvbnN0IGdldEVsZW1lbnQgPSBvYmplY3QgPT4ge1xuICAgIC8vIGl0J3MgYSBqUXVlcnkgb2JqZWN0IG9yIGEgbm9kZSBlbGVtZW50XG4gICAgaWYgKGlzRWxlbWVudCQxKG9iamVjdCkpIHtcbiAgICAgIHJldHVybiBvYmplY3QuanF1ZXJ5ID8gb2JqZWN0WzBdIDogb2JqZWN0O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ3N0cmluZycgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcnNlU2VsZWN0b3Iob2JqZWN0KSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICBjb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcbiAgICBpZiAoIWlzRWxlbWVudCQxKGVsZW1lbnQpIHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudElzVmlzaWJsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAndmlzaWJsZSc7XG4gICAgLy8gSGFuZGxlIGBkZXRhaWxzYCBlbGVtZW50IGFzIGl0cyBjb250ZW50IG1heSBmYWxzaWUgYXBwZWFyIHZpc2libGUgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICBjb25zdCBjbG9zZWREZXRhaWxzID0gZWxlbWVudC5jbG9zZXN0KCdkZXRhaWxzOm5vdChbb3Blbl0pJyk7XG4gICAgaWYgKCFjbG9zZWREZXRhaWxzKSB7XG4gICAgICByZXR1cm4gZWxlbWVudElzVmlzaWJsZTtcbiAgICB9XG4gICAgaWYgKGNsb3NlZERldGFpbHMgIT09IGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBlbGVtZW50LmNsb3Nlc3QoJ3N1bW1hcnknKTtcbiAgICAgIGlmIChzdW1tYXJ5ICYmIHN1bW1hcnkucGFyZW50Tm9kZSAhPT0gY2xvc2VkRGV0YWlscykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoc3VtbWFyeSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50SXNWaXNpYmxlO1xuICB9O1xuICBjb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudCA9PiB7XG4gICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50LmRpc2FibGVkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gJ2ZhbHNlJztcbiAgfTtcbiAgY29uc3QgZmluZFNoYWRvd1Jvb3QgPSBlbGVtZW50ID0+IHtcbiAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICAgIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcbiAgICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gICAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgfTtcbiAgY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBUcmljayB0byByZXN0YXJ0IGFuIGVsZW1lbnQncyBhbmltYXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICpcbiAgICogQHNlZSBodHRwczovL3d3dy5jaGFyaXN0aGVvLmlvL2Jsb2cvMjAyMS8wMi9yZXN0YXJ0LWEtY3NzLWFuaW1hdGlvbi13aXRoLWphdmFzY3JpcHQvI3Jlc3RhcnRpbmctYS1jc3MtYW5pbWF0aW9uXG4gICAqL1xuICBjb25zdCByZWZsb3cgPSBlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50Lm9mZnNldEhlaWdodDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgfTtcblxuICBjb25zdCBnZXRqUXVlcnkgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5qUXVlcnkgJiYgIWRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLWJzLW5vLWpxdWVyeScpKSB7XG4gICAgICByZXR1cm4gd2luZG93LmpRdWVyeTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIGNvbnN0IERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MgPSBbXTtcbiAgY29uc3Qgb25ET01Db250ZW50TG9hZGVkID0gY2FsbGJhY2sgPT4ge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgIC8vIGFkZCBsaXN0ZW5lciBvbiB0aGUgZmlyc3QgY2FsbCB3aGVuIHRoZSBkb2N1bWVudCBpcyBpbiBsb2FkaW5nIHN0YXRlXG4gICAgICBpZiAoIURPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaXNSVEwgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09PSAncnRsJztcbiAgY29uc3QgZGVmaW5lSlF1ZXJ5UGx1Z2luID0gcGx1Z2luID0+IHtcbiAgICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgICAgY29uc3QgJCA9IGdldGpRdWVyeSgpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoJCkge1xuICAgICAgICBjb25zdCBuYW1lID0gcGx1Z2luLk5BTUU7XG4gICAgICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bbmFtZV07XG4gICAgICAgICQuZm5bbmFtZV0gPSBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlO1xuICAgICAgICAkLmZuW25hbWVdLkNvbnN0cnVjdG9yID0gcGx1Z2luO1xuICAgICAgICAkLmZuW25hbWVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAgICAgJC5mbltuYW1lXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgICAgICByZXR1cm4gcGx1Z2luLmpRdWVyeUludGVyZmFjZTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgZXhlY3V0ZSA9IChwb3NzaWJsZUNhbGxiYWNrLCBhcmdzID0gW10sIGRlZmF1bHRWYWx1ZSA9IHBvc3NpYmxlQ2FsbGJhY2spID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHBvc3NpYmxlQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBwb3NzaWJsZUNhbGxiYWNrKC4uLmFyZ3MpIDogZGVmYXVsdFZhbHVlO1xuICB9O1xuICBjb25zdCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uID0gKGNhbGxiYWNrLCB0cmFuc2l0aW9uRWxlbWVudCwgd2FpdEZvclRyYW5zaXRpb24gPSB0cnVlKSA9PiB7XG4gICAgaWYgKCF3YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDU7XG4gICAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRyYW5zaXRpb25FbGVtZW50KSArIGR1cmF0aW9uUGFkZGluZztcbiAgICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gICAgY29uc3QgaGFuZGxlciA9ICh7XG4gICAgICB0YXJnZXRcbiAgICB9KSA9PiB7XG4gICAgICBpZiAodGFyZ2V0ICE9PSB0cmFuc2l0aW9uRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgdHJhbnNpdGlvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcik7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHRyYW5zaXRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0sIGVtdWxhdGVkRHVyYXRpb24pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHByZXZpb3VzL25leHQgZWxlbWVudCBvZiBhIGxpc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXl9IGxpc3QgICAgVGhlIGxpc3Qgb2YgZWxlbWVudHNcbiAgICogQHBhcmFtIGFjdGl2ZUVsZW1lbnQgICBUaGUgYWN0aXZlIGVsZW1lbnRcbiAgICogQHBhcmFtIHNob3VsZEdldE5leHQgICBDaG9vc2UgdG8gZ2V0IG5leHQgb3IgcHJldmlvdXMgZWxlbWVudFxuICAgKiBAcGFyYW0gaXNDeWNsZUFsbG93ZWRcbiAgICogQHJldHVybiB7RWxlbWVudHxlbGVtfSBUaGUgcHJvcGVyIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0IGdldE5leHRBY3RpdmVFbGVtZW50ID0gKGxpc3QsIGFjdGl2ZUVsZW1lbnQsIHNob3VsZEdldE5leHQsIGlzQ3ljbGVBbGxvd2VkKSA9PiB7XG4gICAgY29uc3QgbGlzdExlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpbmRleCA9IGxpc3QuaW5kZXhPZihhY3RpdmVFbGVtZW50KTtcblxuICAgIC8vIGlmIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0IGluIHRoZSBsaXN0IHJldHVybiBhbiBlbGVtZW50XG4gICAgLy8gZGVwZW5kaW5nIG9uIHRoZSBkaXJlY3Rpb24gYW5kIGlmIGN5Y2xlIGlzIGFsbG93ZWRcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gIXNob3VsZEdldE5leHQgJiYgaXNDeWNsZUFsbG93ZWQgPyBsaXN0W2xpc3RMZW5ndGggLSAxXSA6IGxpc3RbMF07XG4gICAgfVxuICAgIGluZGV4ICs9IHNob3VsZEdldE5leHQgPyAxIDogLTE7XG4gICAgaWYgKGlzQ3ljbGVBbGxvd2VkKSB7XG4gICAgICBpbmRleCA9IChpbmRleCArIGxpc3RMZW5ndGgpICUgbGlzdExlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RbTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGxpc3RMZW5ndGggLSAxKSldO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgbmFtZXNwYWNlUmVnZXggPSAvW14uXSooPz1cXC4uKilcXC58LiovO1xuICBjb25zdCBzdHJpcE5hbWVSZWdleCA9IC9cXC4uKi87XG4gIGNvbnN0IHN0cmlwVWlkUmVnZXggPSAvOjpcXGQrJC87XG4gIGNvbnN0IGV2ZW50UmVnaXN0cnkgPSB7fTsgLy8gRXZlbnRzIHN0b3JhZ2VcbiAgbGV0IHVpZEV2ZW50ID0gMTtcbiAgY29uc3QgY3VzdG9tRXZlbnRzID0ge1xuICAgIG1vdXNlZW50ZXI6ICdtb3VzZW92ZXInLFxuICAgIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbiAgfTtcbiAgY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ21vdXNldXAnLCAnbW91c2Vkb3duJywgJ2NvbnRleHRtZW51JywgJ21vdXNld2hlZWwnLCAnRE9NTW91c2VTY3JvbGwnLCAnbW91c2VvdmVyJywgJ21vdXNlb3V0JywgJ21vdXNlbW92ZScsICdzZWxlY3RzdGFydCcsICdzZWxlY3RlbmQnLCAna2V5ZG93bicsICdrZXlwcmVzcycsICdrZXl1cCcsICdvcmllbnRhdGlvbmNoYW5nZScsICd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcsICdwb2ludGVyZG93bicsICdwb2ludGVybW92ZScsICdwb2ludGVydXAnLCAncG9pbnRlcmxlYXZlJywgJ3BvaW50ZXJjYW5jZWwnLCAnZ2VzdHVyZXN0YXJ0JywgJ2dlc3R1cmVjaGFuZ2UnLCAnZ2VzdHVyZWVuZCcsICdmb2N1cycsICdibHVyJywgJ2NoYW5nZScsICdyZXNldCcsICdzZWxlY3QnLCAnc3VibWl0JywgJ2ZvY3VzaW4nLCAnZm9jdXNvdXQnLCAnbG9hZCcsICd1bmxvYWQnLCAnYmVmb3JldW5sb2FkJywgJ3Jlc2l6ZScsICdtb3ZlJywgJ0RPTUNvbnRlbnRMb2FkZWQnLCAncmVhZHlzdGF0ZWNoYW5nZScsICdlcnJvcicsICdhYm9ydCcsICdzY3JvbGwnXSk7XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgbWV0aG9kc1xuICAgKi9cblxuICBmdW5jdGlvbiBtYWtlRXZlbnRVaWQoZWxlbWVudCwgdWlkKSB7XG4gICAgcmV0dXJuIHVpZCAmJiBgJHt1aWR9Ojoke3VpZEV2ZW50Kyt9YCB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kys7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KSB7XG4gICAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQudWlkRXZlbnQgPSB1aWQ7XG4gICAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9O1xuICAgIHJldHVybiBldmVudFJlZ2lzdHJ5W3VpZF07XG4gIH1cbiAgZnVuY3Rpb24gYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICBoeWRyYXRlT2JqKGV2ZW50LCB7XG4gICAgICAgIGRlbGVnYXRlVGFyZ2V0OiBlbGVtZW50XG4gICAgICB9KTtcbiAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIHNlbGVjdG9yLCBmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICBmb3IgKGxldCB7XG4gICAgICAgIHRhcmdldFxuICAgICAgfSA9IGV2ZW50OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGRvbUVsZW1lbnQgb2YgZG9tRWxlbWVudHMpIHtcbiAgICAgICAgICBpZiAoZG9tRWxlbWVudCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHlkcmF0ZU9iaihldmVudCwge1xuICAgICAgICAgICAgZGVsZWdhdGVUYXJnZXQ6IHRhcmdldFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBzZWxlY3RvciwgZm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZmluZEhhbmRsZXIoZXZlbnRzLCBjYWxsYWJsZSwgZGVsZWdhdGlvblNlbGVjdG9yID0gbnVsbCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKGV2ZW50cykuZmluZChldmVudCA9PiBldmVudC5jYWxsYWJsZSA9PT0gY2FsbGFibGUgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpO1xuICB9XG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGNvbnN0IGlzRGVsZWdhdGVkID0gdHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnO1xuICAgIC8vIHRvZG86IHRvb2x0aXAgcGFzc2VzIGBmYWxzZWAgaW5zdGVhZCBvZiBzZWxlY3Rvciwgc28gd2UgbmVlZCB0byBjaGVja1xuICAgIGNvbnN0IGNhbGxhYmxlID0gaXNEZWxlZ2F0ZWQgPyBkZWxlZ2F0aW9uRnVuY3Rpb24gOiBoYW5kbGVyIHx8IGRlbGVnYXRpb25GdW5jdGlvbjtcbiAgICBsZXQgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KG9yaWdpbmFsVHlwZUV2ZW50KTtcbiAgICBpZiAoIW5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KSkge1xuICAgICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnQ7XG4gICAgfVxuICAgIHJldHVybiBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgb25lT2ZmKSB7XG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pO1xuXG4gICAgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAgIC8vIHRoaXMgcHJldmVudHMgdGhlIGhhbmRsZXIgZnJvbSBiZWluZyBkaXNwYXRjaGVkIHRoZSBzYW1lIHdheSBhcyBtb3VzZW92ZXIgb3IgbW91c2VvdXQgZG9lc1xuICAgIGlmIChvcmlnaW5hbFR5cGVFdmVudCBpbiBjdXN0b21FdmVudHMpIHtcbiAgICAgIGNvbnN0IHdyYXBGdW5jdGlvbiA9IGZuID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCB8fCBldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSBldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiAhZXZlbnQuZGVsZWdhdGVUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgY2FsbGFibGUgPSB3cmFwRnVuY3Rpb24oY2FsbGFibGUpO1xuICAgIH1cbiAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpO1xuICAgIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVFdmVudF0gfHwgKGV2ZW50c1t0eXBlRXZlbnRdID0ge30pO1xuICAgIGNvbnN0IHByZXZpb3VzRnVuY3Rpb24gPSBmaW5kSGFuZGxlcihoYW5kbGVycywgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpO1xuICAgIGlmIChwcmV2aW91c0Z1bmN0aW9uKSB7XG4gICAgICBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiA9IHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmICYmIG9uZU9mZjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGNhbGxhYmxlLCBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpO1xuICAgIGNvbnN0IGZuID0gaXNEZWxlZ2F0ZWQgPyBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjYWxsYWJsZSkgOiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGNhbGxhYmxlKTtcbiAgICBmbi5kZWxlZ2F0aW9uU2VsZWN0b3IgPSBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsO1xuICAgIGZuLmNhbGxhYmxlID0gY2FsbGFibGU7XG4gICAgZm4ub25lT2ZmID0gb25lT2ZmO1xuICAgIGZuLnVpZEV2ZW50ID0gdWlkO1xuICAgIGhhbmRsZXJzW3VpZF0gPSBmbjtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgaXNEZWxlZ2F0ZWQpO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICAgIGNvbnN0IGZuID0gZmluZEhhbmRsZXIoZXZlbnRzW3R5cGVFdmVudF0sIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcik7XG4gICAgaWYgKCFmbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgQm9vbGVhbihkZWxlZ2F0aW9uU2VsZWN0b3IpKTtcbiAgICBkZWxldGUgZXZlbnRzW3R5cGVFdmVudF1bZm4udWlkRXZlbnRdO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgbmFtZXNwYWNlKSB7XG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fTtcbiAgICBmb3IgKGNvbnN0IFtoYW5kbGVyS2V5LCBldmVudF0gb2YgT2JqZWN0LmVudHJpZXMoc3RvcmVFbGVtZW50RXZlbnQpKSB7XG4gICAgICBpZiAoaGFuZGxlcktleS5pbmNsdWRlcyhuYW1lc3BhY2UpKSB7XG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRUeXBlRXZlbnQoZXZlbnQpIHtcbiAgICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gICAgZXZlbnQgPSBldmVudC5yZXBsYWNlKHN0cmlwTmFtZVJlZ2V4LCAnJyk7XG4gICAgcmV0dXJuIGN1c3RvbUV2ZW50c1tldmVudF0gfHwgZXZlbnQ7XG4gIH1cbiAgY29uc3QgRXZlbnRIYW5kbGVyID0ge1xuICAgIG9uKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgZmFsc2UpO1xuICAgIH0sXG4gICAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgdHJ1ZSk7XG4gICAgfSxcbiAgICBvZmYoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbik7XG4gICAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnQ7XG4gICAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpO1xuICAgICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fTtcbiAgICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpO1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gU2ltcGxlc3QgY2FzZTogaGFuZGxlciBpcyBwYXNzZWQsIHJlbW92ZSB0aGF0IGxpc3RlbmVyIE9OTFkuXG4gICAgICAgIGlmICghT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpc05hbWVzcGFjZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnRFdmVudCBvZiBPYmplY3Qua2V5cyhldmVudHMpKSB7XG4gICAgICAgICAgcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgZWxlbWVudEV2ZW50LCBvcmlnaW5hbFR5cGVFdmVudC5zbGljZSgxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgW2tleUhhbmRsZXJzLCBldmVudF0gb2YgT2JqZWN0LmVudHJpZXMoc3RvcmVFbGVtZW50RXZlbnQpKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKTtcbiAgICAgICAgaWYgKCFpbk5hbWVzcGFjZSB8fCBvcmlnaW5hbFR5cGVFdmVudC5pbmNsdWRlcyhoYW5kbGVyS2V5KSkge1xuICAgICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0cmlnZ2VyKGVsZW1lbnQsIGV2ZW50LCBhcmdzKSB7XG4gICAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKTtcbiAgICAgIGNvbnN0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChldmVudCk7XG4gICAgICBjb25zdCBpbk5hbWVzcGFjZSA9IGV2ZW50ICE9PSB0eXBlRXZlbnQ7XG4gICAgICBsZXQgalF1ZXJ5RXZlbnQgPSBudWxsO1xuICAgICAgbGV0IGJ1YmJsZXMgPSB0cnVlO1xuICAgICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZTtcbiAgICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XG4gICAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xuICAgICAgICBqUXVlcnlFdmVudCA9ICQuRXZlbnQoZXZlbnQsIGFyZ3MpO1xuICAgICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpO1xuICAgICAgICBidWJibGVzID0gIWpRdWVyeUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCk7XG4gICAgICAgIG5hdGl2ZURpc3BhdGNoID0gIWpRdWVyeUV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCk7XG4gICAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcbiAgICAgIH1cbiAgICAgIGxldCBldnQgPSBuZXcgRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBldnQgPSBoeWRyYXRlT2JqKGV2dCwgYXJncyk7XG4gICAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgIH1cbiAgICAgIGlmIChldnQuZGVmYXVsdFByZXZlbnRlZCAmJiBqUXVlcnlFdmVudCkge1xuICAgICAgICBqUXVlcnlFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV2dDtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIGh5ZHJhdGVPYmoob2JqLCBtZXRhID0ge30pIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXRhKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBkb20vZGF0YS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpO1xuICBjb25zdCBEYXRhID0ge1xuICAgIHNldChlbGVtZW50LCBrZXksIGluc3RhbmNlKSB7XG4gICAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIGVsZW1lbnRNYXAuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpO1xuXG4gICAgICAvLyBtYWtlIGl0IGNsZWFyIHdlIG9ubHkgd2FudCBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnRcbiAgICAgIC8vIGNhbiBiZSByZW1vdmVkIGxhdGVyIHdoZW4gbXVsdGlwbGUga2V5L2luc3RhbmNlcyBhcmUgZmluZSB0byBiZSB1c2VkXG4gICAgICBpZiAoIWluc3RhbmNlTWFwLmhhcyhrZXkpICYmIGluc3RhbmNlTWFwLnNpemUgIT09IDApIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5lcnJvcihgQm9vdHN0cmFwIGRvZXNuJ3QgYWxsb3cgbW9yZSB0aGFuIG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudC4gQm91bmQgaW5zdGFuY2U6ICR7QXJyYXkuZnJvbShpbnN0YW5jZU1hcC5rZXlzKCkpWzBdfS5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5zdGFuY2VNYXAuc2V0KGtleSwgaW5zdGFuY2UpO1xuICAgIH0sXG4gICAgZ2V0KGVsZW1lbnQsIGtleSkge1xuICAgICAgaWYgKGVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50TWFwLmdldChlbGVtZW50KS5nZXQoa2V5KSB8fCBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICByZW1vdmUoZWxlbWVudCwga2V5KSB7XG4gICAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudCk7XG4gICAgICBpbnN0YW5jZU1hcC5kZWxldGUoa2V5KTtcblxuICAgICAgLy8gZnJlZSB1cCBlbGVtZW50IHJlZmVyZW5jZXMgaWYgdGhlcmUgYXJlIG5vIGluc3RhbmNlcyBsZWZ0IGZvciBhbiBlbGVtZW50XG4gICAgICBpZiAoaW5zdGFuY2VNYXAuc2l6ZSA9PT0gMCkge1xuICAgICAgICBlbGVtZW50TWFwLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBkb20vbWFuaXB1bGF0b3IuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IE51bWJlcih2YWx1ZSkudG9TdHJpbmcoKSkge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICB9IGNhdGNoIChfdW51c2VkKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleS5yZXBsYWNlKC9bQS1aXS9nLCBjaHIgPT4gYC0ke2Noci50b0xvd2VyQ2FzZSgpfWApO1xuICB9XG4gIGNvbnN0IE1hbmlwdWxhdG9yID0ge1xuICAgIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCwgdmFsdWUpO1xuICAgIH0sXG4gICAgcmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApO1xuICAgIH0sXG4gICAgZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgIGNvbnN0IGJzS2V5cyA9IE9iamVjdC5rZXlzKGVsZW1lbnQuZGF0YXNldCkuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnYnMnKSAmJiAha2V5LnN0YXJ0c1dpdGgoJ2JzQ29uZmlnJykpO1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgYnNLZXlzKSB7XG4gICAgICAgIGxldCBwdXJlS2V5ID0ga2V5LnJlcGxhY2UoL15icy8sICcnKTtcbiAgICAgICAgcHVyZUtleSA9IHB1cmVLZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwdXJlS2V5LnNsaWNlKDEsIHB1cmVLZXkubGVuZ3RoKTtcbiAgICAgICAgYXR0cmlidXRlc1twdXJlS2V5XSA9IG5vcm1hbGl6ZURhdGEoZWxlbWVudC5kYXRhc2V0W2tleV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfSxcbiAgICBnZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZURhdGEoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvY29uZmlnLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBDb25maWcge1xuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBzdGF0aWMgbWV0aG9kIFwiTkFNRVwiLCBmb3IgZWFjaCBjb21wb25lbnQhJyk7XG4gICAgfVxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpO1xuICAgICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpO1xuICAgICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZyk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9tZXJnZUNvbmZpZ09iaihjb25maWcsIGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGpzb25Db25maWcgPSBpc0VsZW1lbnQkMShlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgJ2NvbmZpZycpIDoge307IC8vIHRyeSB0byBwYXJzZVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAgIC4uLih0eXBlb2YganNvbkNvbmZpZyA9PT0gJ29iamVjdCcgPyBqc29uQ29uZmlnIDoge30pLFxuICAgICAgICAuLi4oaXNFbGVtZW50JDEoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSA6IHt9KSxcbiAgICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgICB9O1xuICAgIH1cbiAgICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZywgY29uZmlnVHlwZXMgPSB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKSB7XG4gICAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgZXhwZWN0ZWRUeXBlc10gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnVHlwZXMpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gaXNFbGVtZW50JDEodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgYmFzZS1jb21wb25lbnQuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgVkVSU0lPTiA9ICc1LjMuMC1hbHBoYTInO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIGVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICBEYXRhLnNldCh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBkaXNwb3NlKCkge1xuICAgICAgRGF0YS5yZW1vdmUodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSk7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKTtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHlOYW1lIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIF9xdWV1ZUNhbGxiYWNrKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkID0gdHJ1ZSkge1xuICAgICAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbihjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZCk7XG4gICAgfVxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcsIHRoaXMuX2VsZW1lbnQpO1xuICAgICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpO1xuICAgICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZyk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgICByZXR1cm4gRGF0YS5nZXQoZ2V0RWxlbWVudChlbGVtZW50KSwgdGhpcy5EQVRBX0tFWSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIGNvbmZpZyA9IHt9KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZShlbGVtZW50KSB8fCBuZXcgdGhpcyhlbGVtZW50LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGwpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICAgIHJldHVybiBgYnMuJHt0aGlzLk5BTUV9YDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgICByZXR1cm4gYC4ke3RoaXMuREFUQV9LRVl9YDtcbiAgICB9XG4gICAgc3RhdGljIGV2ZW50TmFtZShuYW1lKSB7XG4gICAgICByZXR1cm4gYCR7bmFtZX0ke3RoaXMuRVZFTlRfS0VZfWA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgY29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKTtcbiAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICAgIGxldCBocmVmQXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgICAgLy8gVGhlIG9ubHkgdmFsaWQgY29udGVudCB0aGF0IGNvdWxkIGRvdWJsZSBhcyBhIHNlbGVjdG9yIGFyZSBJRHMgb3IgY2xhc3NlcyxcbiAgICAgIC8vIHNvIGV2ZXJ5dGhpbmcgc3RhcnRpbmcgd2l0aCBgI2Agb3IgYC5gLiBJZiBhIFwicmVhbFwiIFVSTCBpcyB1c2VkIGFzIHRoZSBzZWxlY3RvcixcbiAgICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzMyMjczXG4gICAgICBpZiAoIWhyZWZBdHRyaWJ1dGUgfHwgIWhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcuJykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgICAgaWYgKGhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgaHJlZkF0dHJpYnV0ZSA9IGAjJHtocmVmQXR0cmlidXRlLnNwbGl0KCcjJylbMV19YDtcbiAgICAgIH1cbiAgICAgIHNlbGVjdG9yID0gaHJlZkF0dHJpYnV0ZSAmJiBocmVmQXR0cmlidXRlICE9PSAnIycgPyBocmVmQXR0cmlidXRlLnRyaW0oKSA6IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfTtcbiAgY29uc3QgU2VsZWN0b3JFbmdpbmUgPSB7XG4gICAgZmluZChzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdCguLi5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKTtcbiAgICB9LFxuICAgIGZpbmRPbmUoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xuICAgIH0sXG4gICAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbikuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKTtcbiAgICB9LFxuICAgIHBhcmVudHMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgIGxldCBhbmNlc3RvciA9IGVsZW1lbnQucGFyZW50Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgICBwYXJlbnRzLnB1c2goYW5jZXN0b3IpO1xuICAgICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyZW50cztcbiAgICB9LFxuICAgIHByZXYoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIGxldCBwcmV2aW91cyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgIHdoaWxlIChwcmV2aW91cykge1xuICAgICAgICBpZiAocHJldmlvdXMubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gW3ByZXZpb3VzXTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gW107XG4gICAgfSxcbiAgICAvLyBUT0RPOiB0aGlzIGlzIG5vdyB1bnVzZWQ7IHJlbW92ZSBsYXRlciBhbG9uZyB3aXRoIHByZXYoKVxuICAgIG5leHQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIGxldCBuZXh0ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB3aGlsZSAobmV4dCkge1xuICAgICAgICBpZiAobmV4dC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBbbmV4dF07XG4gICAgICAgIH1cbiAgICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgZm9jdXNhYmxlQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgICAgY29uc3QgZm9jdXNhYmxlcyA9IFsnYScsICdidXR0b24nLCAnaW5wdXQnLCAndGV4dGFyZWEnLCAnc2VsZWN0JywgJ2RldGFpbHMnLCAnW3RhYmluZGV4XScsICdbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSddLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn06bm90KFt0YWJpbmRleF49XCItXCJdKWApLmpvaW4oJywnKTtcbiAgICAgIHJldHVybiB0aGlzLmZpbmQoZm9jdXNhYmxlcywgZWxlbWVudCkuZmlsdGVyKGVsID0+ICFpc0Rpc2FibGVkKGVsKSAmJiBpc1Zpc2libGUoZWwpKTtcbiAgICB9LFxuICAgIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IpIDogbnVsbDtcbiAgICB9LFxuICAgIGdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpIDogW107XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgY29uc3QgZW5hYmxlRGlzbWlzc1RyaWdnZXIgPSAoY29tcG9uZW50LCBtZXRob2QgPSAnaGlkZScpID0+IHtcbiAgICBjb25zdCBjbGlja0V2ZW50ID0gYGNsaWNrLmRpc21pc3Mke2NvbXBvbmVudC5FVkVOVF9LRVl9YDtcbiAgICBjb25zdCBuYW1lID0gY29tcG9uZW50Lk5BTUU7XG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBjbGlja0V2ZW50LCBgW2RhdGEtYnMtZGlzbWlzcz1cIiR7bmFtZX1cIl1gLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcykgfHwgdGhpcy5jbG9zZXN0KGAuJHtuYW1lfWApO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpO1xuXG4gICAgICAvLyBNZXRob2QgYXJndW1lbnQgaXMgbGVmdCwgZm9yIEFsZXJ0IGFuZCBvbmx5LCBhcyBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgJ2hpZGUnIG1ldGhvZFxuICAgICAgaW5zdGFuY2VbbWV0aG9kXSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgYWxlcnQuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSRmID0gJ2FsZXJ0JztcbiAgY29uc3QgREFUQV9LRVkkYSA9ICdicy5hbGVydCc7XG4gIGNvbnN0IEVWRU5UX0tFWSRiID0gYC4ke0RBVEFfS0VZJGF9YDtcbiAgY29uc3QgRVZFTlRfQ0xPU0UgPSBgY2xvc2Uke0VWRU5UX0tFWSRifWA7XG4gIGNvbnN0IEVWRU5UX0NMT1NFRCA9IGBjbG9zZWQke0VWRU5UX0tFWSRifWA7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQ1ID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckOCA9ICdzaG93JztcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBBbGVydCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRmO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGNsb3NlKCkge1xuICAgICAgY29uc3QgY2xvc2VFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFKTtcbiAgICAgIGlmIChjbG9zZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ4KTtcbiAgICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkNSk7XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KCksIHRoaXMuX2VsZW1lbnQsIGlzQW5pbWF0ZWQpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfZGVzdHJveUVsZW1lbnQoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xPU0VEKTtcbiAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEFsZXJ0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBlbmFibGVEaXNtaXNzVHJpZ2dlcihBbGVydCwgJ2Nsb3NlJyk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oQWxlcnQpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgYnV0dG9uLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkZSA9ICdidXR0b24nO1xuICBjb25zdCBEQVRBX0tFWSQ5ID0gJ2JzLmJ1dHRvbic7XG4gIGNvbnN0IEVWRU5UX0tFWSRhID0gYC4ke0RBVEFfS0VZJDl9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZJDYgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUkMyA9ICdhY3RpdmUnO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ1ID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImJ1dHRvblwiXSc7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDYgPSBgY2xpY2ske0VWRU5UX0tFWSRhfSR7REFUQV9BUElfS0VZJDZ9YDtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkZTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICB0b2dnbGUoKSB7XG4gICAgICAvLyBUb2dnbGUgY2xhc3MgYW5kIHN5bmMgdGhlIGBhcmlhLXByZXNzZWRgIGF0dHJpYnV0ZSB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGAudG9nZ2xlKClgIG1ldGhvZFxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSQzKSk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gQnV0dG9uLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7XG4gICAgICAgIGlmIChjb25maWcgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDYsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDUsIGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RBVEFfVE9HR0xFJDUpO1xuICAgIGNvbnN0IGRhdGEgPSBCdXR0b24uZ2V0T3JDcmVhdGVJbnN0YW5jZShidXR0b24pO1xuICAgIGRhdGEudG9nZ2xlKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKEJ1dHRvbik7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL3N3aXBlLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkZCA9ICdzd2lwZSc7XG4gIGNvbnN0IEVWRU5UX0tFWSQ5ID0gJy5icy5zd2lwZSc7XG4gIGNvbnN0IEVWRU5UX1RPVUNIU1RBUlQgPSBgdG91Y2hzdGFydCR7RVZFTlRfS0VZJDl9YDtcbiAgY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZJDl9YDtcbiAgY29uc3QgRVZFTlRfVE9VQ0hFTkQgPSBgdG91Y2hlbmQke0VWRU5UX0tFWSQ5fWA7XG4gIGNvbnN0IEVWRU5UX1BPSU5URVJET1dOID0gYHBvaW50ZXJkb3duJHtFVkVOVF9LRVkkOX1gO1xuICBjb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVkkOX1gO1xuICBjb25zdCBQT0lOVEVSX1RZUEVfVE9VQ0ggPSAndG91Y2gnO1xuICBjb25zdCBQT0lOVEVSX1RZUEVfUEVOID0gJ3Blbic7XG4gIGNvbnN0IENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCA9ICdwb2ludGVyLWV2ZW50JztcbiAgY29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNDA7XG4gIGNvbnN0IERlZmF1bHQkYyA9IHtcbiAgICBlbmRDYWxsYmFjazogbnVsbCxcbiAgICBsZWZ0Q2FsbGJhY2s6IG51bGwsXG4gICAgcmlnaHRDYWxsYmFjazogbnVsbFxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSRjID0ge1xuICAgIGVuZENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgICBsZWZ0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICAgIHJpZ2h0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgU3dpcGUgZXh0ZW5kcyBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fZGVsdGFYID0gMDtcbiAgICAgIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50KTtcbiAgICAgIHRoaXMuX2luaXRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkYztcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSRjO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRkO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWSQ5KTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX3N0YXJ0KGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICB9XG4gICAgfVxuICAgIF9lbmQoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy5fZGVsdGFYO1xuICAgICAgfVxuICAgICAgdGhpcy5faGFuZGxlU3dpcGUoKTtcbiAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmVuZENhbGxiYWNrKTtcbiAgICB9XG4gICAgX21vdmUoZXZlbnQpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxID8gMCA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX2RlbHRhWDtcbiAgICB9XG4gICAgX2hhbmRsZVN3aXBlKCkge1xuICAgICAgY29uc3QgYWJzRGVsdGFYID0gTWF0aC5hYnModGhpcy5fZGVsdGFYKTtcbiAgICAgIGlmIChhYnNEZWx0YVggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRhWCAvIHRoaXMuX2RlbHRhWDtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IDA7XG4gICAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBleGVjdXRlKGRpcmVjdGlvbiA+IDAgPyB0aGlzLl9jb25maWcucmlnaHRDYWxsYmFjayA6IHRoaXMuX2NvbmZpZy5sZWZ0Q2FsbGJhY2spO1xuICAgIH1cbiAgICBfaW5pdEV2ZW50cygpIHtcbiAgICAgIGlmICh0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cykge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUkRPV04sIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpO1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiB0aGlzLl9tb3ZlKGV2ZW50KSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgJiYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfUEVOIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfVE9VQ0gpO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICAgIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGNhcm91c2VsLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkYyA9ICdjYXJvdXNlbCc7XG4gIGNvbnN0IERBVEFfS0VZJDggPSAnYnMuY2Fyb3VzZWwnO1xuICBjb25zdCBFVkVOVF9LRVkkOCA9IGAuJHtEQVRBX0tFWSQ4fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQ1ID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEFSUk9XX0xFRlRfS0VZJDEgPSAnQXJyb3dMZWZ0JztcbiAgY29uc3QgQVJST1dfUklHSFRfS0VZJDEgPSAnQXJyb3dSaWdodCc7XG4gIGNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDA7IC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuXG4gIGNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCc7XG4gIGNvbnN0IE9SREVSX1BSRVYgPSAncHJldic7XG4gIGNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnO1xuICBjb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnO1xuICBjb25zdCBFVkVOVF9TTElERSA9IGBzbGlkZSR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVkkOH1gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOJDEgPSBga2V5ZG93biR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfTU9VU0VFTlRFUiQxID0gYG1vdXNlZW50ZXIke0VWRU5UX0tFWSQ4fWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFTEVBVkUkMSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVkkOH1gO1xuICBjb25zdCBFVkVOVF9EUkFHX1NUQVJUID0gYGRyYWdzdGFydCR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSQzID0gYGxvYWQke0VWRU5UX0tFWSQ4fSR7REFUQV9BUElfS0VZJDV9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNSA9IGBjbGljayR7RVZFTlRfS0VZJDh9JHtEQVRBX0FQSV9LRVkkNX1gO1xuICBjb25zdCBDTEFTU19OQU1FX0NBUk9VU0VMID0gJ2Nhcm91c2VsJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUkMiA9ICdhY3RpdmUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NMSURFID0gJ3NsaWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9FTkQgPSAnY2Fyb3VzZWwtaXRlbS1lbmQnO1xuICBjb25zdCBDTEFTU19OQU1FX1NUQVJUID0gJ2Nhcm91c2VsLWl0ZW0tc3RhcnQnO1xuICBjb25zdCBDTEFTU19OQU1FX05FWFQgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9QUkVWID0gJ2Nhcm91c2VsLWl0ZW0tcHJldic7XG4gIGNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJztcbiAgY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSc7XG4gIGNvbnN0IFNFTEVDVE9SX0FDVElWRV9JVEVNID0gU0VMRUNUT1JfQUNUSVZFICsgU0VMRUNUT1JfSVRFTTtcbiAgY29uc3QgU0VMRUNUT1JfSVRFTV9JTUcgPSAnLmNhcm91c2VsLWl0ZW0gaW1nJztcbiAgY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycyc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfU0xJREUgPSAnW2RhdGEtYnMtc2xpZGVdLCBbZGF0YS1icy1zbGlkZS10b10nO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1JJREUgPSAnW2RhdGEtYnMtcmlkZT1cImNhcm91c2VsXCJdJztcbiAgY29uc3QgS0VZX1RPX0RJUkVDVElPTiA9IHtcbiAgICBbQVJST1dfTEVGVF9LRVkkMV06IERJUkVDVElPTl9SSUdIVCxcbiAgICBbQVJST1dfUklHSFRfS0VZJDFdOiBESVJFQ1RJT05fTEVGVFxuICB9O1xuICBjb25zdCBEZWZhdWx0JGIgPSB7XG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgcGF1c2U6ICdob3ZlcicsXG4gICAgcmlkZTogZmFsc2UsXG4gICAgdG91Y2g6IHRydWUsXG4gICAgd3JhcDogdHJ1ZVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSRiID0ge1xuICAgIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsXG4gICAgLy8gVE9ETzp2NiByZW1vdmUgYm9vbGVhbiBzdXBwb3J0XG4gICAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgICBwYXVzZTogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHJpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICB0b3VjaDogJ2Jvb2xlYW4nLFxuICAgIHdyYXA6ICdib29sZWFuJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbDtcbiAgICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbnVsbDtcbiAgICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTkRJQ0FUT1JTLCB0aGlzLl9lbGVtZW50KTtcbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnJpZGUgPT09IENMQVNTX05BTUVfQ0FST1VTRUwpIHtcbiAgICAgICAgdGhpcy5jeWNsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCRiO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJGI7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJGM7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgbmV4dCgpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX05FWFQpO1xuICAgIH1cbiAgICBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgICAvLyBGSVhNRSBUT0RPIHVzZSBgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlYFxuICAgICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBwcmV2KCkge1xuICAgICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVik7XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKTtcbiAgICB9XG4gICAgY3ljbGUoKSB7XG4gICAgICB0aGlzLl9jbGVhckludGVydmFsKCk7XG4gICAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLm5leHRXaGVuVmlzaWJsZSgpLCB0aGlzLl9jb25maWcuaW50ZXJ2YWwpO1xuICAgIH1cbiAgICBfbWF5YmVFbmFibGVDeWNsZSgpIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnJpZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMuY3ljbGUoKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICB9XG4gICAgdG8oaW5kZXgpIHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXMoKTtcbiAgICAgIGlmIChpbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2dldEFjdGl2ZSgpKTtcbiAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVY7XG4gICAgICB0aGlzLl9zbGlkZShvcmRlciwgaXRlbXNbaW5kZXhdKTtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIGlmICh0aGlzLl9zd2lwZUhlbHBlcikge1xuICAgICAgICB0aGlzLl9zd2lwZUhlbHBlci5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IGNvbmZpZy5pbnRlcnZhbDtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04kMSwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VFTlRFUiQxLCAoKSA9PiB0aGlzLnBhdXNlKCkpO1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSQxLCAoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCAmJiBTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBmb3IgKGNvbnN0IGltZyBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU1fSU1HLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub24oaW1nLCBFVkVOVF9EUkFHX1NUQVJULCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVuZENhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlICE9PSAnaG92ZXInKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgc3dpcGVDb25maWcgPSB7XG4gICAgICAgIGxlZnRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fTEVGVCkpLFxuICAgICAgICByaWdodENhbGxiYWNrOiAoKSA9PiB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKERJUkVDVElPTl9SSUdIVCkpLFxuICAgICAgICBlbmRDYWxsYmFjazogZW5kQ2FsbEJhY2tcbiAgICAgIH07XG4gICAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG5ldyBTd2lwZSh0aGlzLl9lbGVtZW50LCBzd2lwZUNvbmZpZyk7XG4gICAgfVxuICAgIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gS0VZX1RPX0RJUkVDVElPTltldmVudC5rZXldO1xuICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikpO1xuICAgICAgfVxuICAgIH1cbiAgICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRJdGVtcygpLmluZGV4T2YoZWxlbWVudCk7XG4gICAgfVxuICAgIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGluZGV4KSB7XG4gICAgICBpZiAoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCk7XG4gICAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSQyKTtcbiAgICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpO1xuICAgICAgY29uc3QgbmV3QWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShgW2RhdGEtYnMtc2xpZGUtdG89XCIke2luZGV4fVwiXWAsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KTtcbiAgICAgIGlmIChuZXdBY3RpdmVJbmRpY2F0b3IpIHtcbiAgICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMik7XG4gICAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICd0cnVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IHRoaXMuX2dldEFjdGl2ZSgpO1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMCk7XG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSBlbGVtZW50SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbDtcbiAgICB9XG4gICAgX3NsaWRlKG9yZGVyLCBlbGVtZW50ID0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZ2V0QWN0aXZlKCk7XG4gICAgICBjb25zdCBpc05leHQgPSBvcmRlciA9PT0gT1JERVJfTkVYVDtcbiAgICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCBnZXROZXh0QWN0aXZlRWxlbWVudCh0aGlzLl9nZXRJdGVtcygpLCBhY3RpdmVFbGVtZW50LCBpc05leHQsIHRoaXMuX2NvbmZpZy53cmFwKTtcbiAgICAgIGlmIChuZXh0RWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KTtcbiAgICAgIGNvbnN0IHRyaWdnZXJFdmVudCA9IGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIHJldHVybiBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBldmVudE5hbWUsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgICBkaXJlY3Rpb246IHRoaXMuX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpLFxuICAgICAgICAgIGZyb206IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KSxcbiAgICAgICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBjb25zdCBzbGlkZUV2ZW50ID0gdHJpZ2dlckV2ZW50KEVWRU5UX1NMSURFKTtcbiAgICAgIGlmIChzbGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgICAgLy8gdG9kbzogY2hhbmdlIHRlc3RzIHRoYXQgdXNlIGVtcHR5IGRpdnMgdG8gYXZvaWQgdGhpcyBjaGVja1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKTtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50SW5kZXgpO1xuICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50O1xuICAgICAgY29uc3QgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX1NUQVJUIDogQ0xBU1NfTkFNRV9FTkQ7XG4gICAgICBjb25zdCBvcmRlckNsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfTkVYVCA6IENMQVNTX05BTUVfUFJFVjtcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQob3JkZXJDbGFzc05hbWUpO1xuICAgICAgcmVmbG93KG5leHRFbGVtZW50KTtcbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKTtcbiAgICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZGlyZWN0aW9uYWxDbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKTtcbiAgICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQyKTtcbiAgICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDIsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJRCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuICAgICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgICB0aGlzLmN5Y2xlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIF9pc0FuaW1hdGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0xJREUpO1xuICAgIH1cbiAgICBfZ2V0QWN0aXZlKCkge1xuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpO1xuICAgIH1cbiAgICBfZ2V0SXRlbXMoKSB7XG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNLCB0aGlzLl9lbGVtZW50KTtcbiAgICB9XG4gICAgX2NsZWFySW50ZXJ2YWwoKSB7XG4gICAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSB7XG4gICAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVjtcbiAgICB9XG4gICAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9MRUZUIDogRElSRUNUSU9OX1JJR0hUO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX1JJR0hUIDogRElSRUNUSU9OX0xFRlQ7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBkYXRhLnRvKGNvbmZpZyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDUsIFNFTEVDVE9SX0RBVEFfU0xJREUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7XG4gICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjYXJvdXNlbCA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KTtcbiAgICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKTtcbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgY2Fyb3VzZWwudG8oc2xpZGVJbmRleCk7XG4gICAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZSh0aGlzLCAnc2xpZGUnKSA9PT0gJ25leHQnKSB7XG4gICAgICBjYXJvdXNlbC5uZXh0KCk7XG4gICAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYXJvdXNlbC5wcmV2KCk7XG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKTtcbiAgfSk7XG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEkkMywgKCkgPT4ge1xuICAgIGNvbnN0IGNhcm91c2VscyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKTtcbiAgICBmb3IgKGNvbnN0IGNhcm91c2VsIG9mIGNhcm91c2Vscykge1xuICAgICAgQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShjYXJvdXNlbCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbCk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBjb2xsYXBzZS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJGIgPSAnY29sbGFwc2UnO1xuICBjb25zdCBEQVRBX0tFWSQ3ID0gJ2JzLmNvbGxhcHNlJztcbiAgY29uc3QgRVZFTlRfS0VZJDcgPSBgLiR7REFUQV9LRVkkN31gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkkNCA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBFVkVOVF9TSE9XJDYgPSBgc2hvdyR7RVZFTlRfS0VZJDd9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kNiA9IGBzaG93biR7RVZFTlRfS0VZJDd9YDtcbiAgY29uc3QgRVZFTlRfSElERSQ2ID0gYGhpZGUke0VWRU5UX0tFWSQ3fWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQ2ID0gYGhpZGRlbiR7RVZFTlRfS0VZJDd9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNCA9IGBjbGljayR7RVZFTlRfS0VZJDd9JHtEQVRBX0FQSV9LRVkkNH1gO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckNyA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRSA9ICdjb2xsYXBzZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgPSAnY29sbGFwc2VkJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4gPSBgOnNjb3BlIC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9IC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9IT1JJWk9OVEFMID0gJ2NvbGxhcHNlLWhvcml6b250YWwnO1xuICBjb25zdCBXSURUSCA9ICd3aWR0aCc7XG4gIGNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnO1xuICBjb25zdCBTRUxFQ1RPUl9BQ1RJVkVTID0gJy5jb2xsYXBzZS5zaG93LCAuY29sbGFwc2UuY29sbGFwc2luZyc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nO1xuICBjb25zdCBEZWZhdWx0JGEgPSB7XG4gICAgcGFyZW50OiBudWxsLFxuICAgIHRvZ2dsZTogdHJ1ZVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSRhID0ge1xuICAgIHBhcmVudDogJyhudWxsfGVsZW1lbnQpJyxcbiAgICB0b2dnbGU6ICdib29sZWFuJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBbXTtcbiAgICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQpO1xuICAgICAgZm9yIChjb25zdCBlbGVtIG9mIHRvZ2dsZUxpc3QpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBTZWxlY3RvckVuZ2luZS5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pO1xuICAgICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikuZmlsdGVyKGZvdW5kRWxlbWVudCA9PiBmb3VuZEVsZW1lbnQgPT09IHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKCk7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JGE7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkYTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkYjtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8IHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXTtcblxuICAgICAgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICAgIGFjdGl2ZUNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0FDVElWRVMpLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpLm1hcChlbGVtZW50ID0+IENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwge1xuICAgICAgICAgIHRvZ2dsZTogZmFsc2VcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgaWYgKGFjdGl2ZUNoaWxkcmVuLmxlbmd0aCAmJiBhY3RpdmVDaGlsZHJlblswXS5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XJDYpO1xuICAgICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGFjdGl2ZUluc3RhbmNlIG9mIGFjdGl2ZUNoaWxkcmVuKSB7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwO1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSk7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVyQ3KTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOJDYpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSk7XG4gICAgICBjb25zdCBzY3JvbGxTaXplID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YDtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGA7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUkNik7XG4gICAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YDtcbiAgICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVyQ3KTtcbiAgICAgIGZvciAoY29uc3QgdHJpZ2dlciBvZiB0aGlzLl90cmlnZ2VyQXJyYXkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodHJpZ2dlcik7XG4gICAgICAgIGlmIChlbGVtZW50ICYmICF0aGlzLl9pc1Nob3duKGVsZW1lbnQpKSB7XG4gICAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFt0cmlnZ2VyXSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4kNik7XG4gICAgICB9O1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKTtcbiAgICB9XG4gICAgX2lzU2hvd24oZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckNyk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSk7IC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgICBjb25maWcucGFyZW50ID0gZ2V0RWxlbWVudChjb25maWcucGFyZW50KTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9nZXREaW1lbnNpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9IT1JJWk9OVEFMKSA/IFdJRFRIIDogSEVJR0hUO1xuICAgIH1cbiAgICBfaW5pdGlhbGl6ZUNoaWxkcmVuKCkge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQpO1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFtlbGVtZW50XSwgdGhpcy5faXNTaG93bihzZWxlY3RlZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIF9nZXRGaXJzdExldmVsQ2hpbGRyZW4oc2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gU2VsZWN0b3JFbmdpbmUuZmluZChDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiwgdGhpcy5fY29uZmlnLnBhcmVudCk7XG4gICAgICAvLyByZW1vdmUgY2hpbGRyZW4gaWYgZ3JlYXRlciBkZXB0aFxuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtZW50ID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtZW50KSk7XG4gICAgfVxuICAgIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICAgIGlmICghdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdHJpZ2dlckFycmF5KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3Blbik7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgY29uc3QgX2NvbmZpZyA9IHt9O1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ0LCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgfHwgZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3Rvcih0aGlzKSkge1xuICAgICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7XG4gICAgICAgIHRvZ2dsZTogZmFsc2VcbiAgICAgIH0pLnRvZ2dsZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpO1xuXG4gIHZhciB0b3AgPSAndG9wJztcbiAgdmFyIGJvdHRvbSA9ICdib3R0b20nO1xuICB2YXIgcmlnaHQgPSAncmlnaHQnO1xuICB2YXIgbGVmdCA9ICdsZWZ0JztcbiAgdmFyIGF1dG8gPSAnYXV0byc7XG4gIHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuICB2YXIgc3RhcnQgPSAnc3RhcnQnO1xuICB2YXIgZW5kID0gJ2VuZCc7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbiAgdmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcbiAgdmFyIHBvcHBlciA9ICdwb3BwZXInO1xuICB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG4gIHZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbiAgfSwgW10pO1xuICB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG4gIH0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxuICB2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbiAgdmFyIHJlYWQgPSAncmVhZCc7XG4gIHZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxuICB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbiAgdmFyIG1haW4gPSAnbWFpbic7XG4gIHZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG4gIHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG4gIHZhciB3cml0ZSA9ICd3cml0ZSc7XG4gIHZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xuICB2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07XG5cbiAgZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cblxuICAgIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICAgIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gICAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gICAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG4gIH1cblxuICAvLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cbiAgZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRmxvdyBkb2Vzbid0IHN1cHBvcnQgdG8gZXh0ZW5kIHRoaXMgcHJvcGVydHksIGJ1dCBpdCdzIHRoZSBtb3N0XG4gICAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZWZmZWN0JDIoX3JlZjIpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcbiAgICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICAgIHBvcHBlcjoge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgbWFyZ2luOiAnMCdcbiAgICAgIH0sXG4gICAgICBhcnJvdzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgfSxcbiAgICAgIHJlZmVyZW5jZToge31cbiAgICB9O1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gICAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcblxuICAgIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICAgIHZhciBzdHlsZSA9IHN0eWxlUHJvcGVydGllcy5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlLCBwcm9wZXJ0eSkge1xuICAgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfSwge30pOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBhcHBseVN0eWxlcyQxID0ge1xuICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ3dyaXRlJyxcbiAgICBmbjogYXBwbHlTdHlsZXMsXG4gICAgZWZmZWN0OiBlZmZlY3QkMixcbiAgICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgfVxuXG4gIHZhciBtYXggPSBNYXRoLm1heDtcbiAgdmFyIG1pbiA9IE1hdGgubWluO1xuICB2YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xuXG4gIGZ1bmN0aW9uIGdldFVBU3RyaW5nKCkge1xuICAgIHZhciB1YURhdGEgPSBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcblxuICAgIGlmICh1YURhdGEgIT0gbnVsbCAmJiB1YURhdGEuYnJhbmRzKSB7XG4gICAgICByZXR1cm4gdWFEYXRhLmJyYW5kcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uYnJhbmQgKyBcIi9cIiArIGl0ZW0udmVyc2lvbjtcbiAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTGF5b3V0Vmlld3BvcnQoKSB7XG4gICAgcmV0dXJuICEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSwgaXNGaXhlZFN0cmF0ZWd5KSB7XG4gICAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNGaXhlZFN0cmF0ZWd5ID09PSB2b2lkIDApIHtcbiAgICAgIGlzRml4ZWRTdHJhdGVneSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgc2NhbGVYID0gMTtcbiAgICB2YXIgc2NhbGVZID0gMTtcblxuICAgIGlmIChpbmNsdWRlU2NhbGUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgc2NhbGVYID0gZWxlbWVudC5vZmZzZXRXaWR0aCA+IDAgPyByb3VuZChjbGllbnRSZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMSA6IDE7XG4gICAgICBzY2FsZVkgPSBlbGVtZW50Lm9mZnNldEhlaWdodCA+IDAgPyByb3VuZChjbGllbnRSZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxIDogMTtcbiAgICB9XG5cbiAgICB2YXIgX3JlZiA9IGlzRWxlbWVudChlbGVtZW50KSA/IGdldFdpbmRvdyhlbGVtZW50KSA6IHdpbmRvdyxcbiAgICAgICAgdmlzdWFsVmlld3BvcnQgPSBfcmVmLnZpc3VhbFZpZXdwb3J0O1xuXG4gICAgdmFyIGFkZFZpc3VhbE9mZnNldHMgPSAhaXNMYXlvdXRWaWV3cG9ydCgpICYmIGlzRml4ZWRTdHJhdGVneTtcbiAgICB2YXIgeCA9IChjbGllbnRSZWN0LmxlZnQgKyAoYWRkVmlzdWFsT2Zmc2V0cyAmJiB2aXN1YWxWaWV3cG9ydCA/IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQgOiAwKSkgLyBzY2FsZVg7XG4gICAgdmFyIHkgPSAoY2xpZW50UmVjdC50b3AgKyAoYWRkVmlzdWFsT2Zmc2V0cyAmJiB2aXN1YWxWaWV3cG9ydCA/IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcCA6IDApKSAvIHNjYWxlWTtcbiAgICB2YXIgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoIC8gc2NhbGVYO1xuICAgIHZhciBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodCAvIHNjYWxlWTtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB0b3A6IHksXG4gICAgICByaWdodDogeCArIHdpZHRoLFxuICAgICAgYm90dG9tOiB5ICsgaGVpZ2h0LFxuICAgICAgbGVmdDogeCxcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTtcbiAgfVxuXG4gIC8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuICBmdW5jdGlvbiBnZXRMYXlvdXRSZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gICAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgICB9XG5cbiAgICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICAgIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzgzN1xuICAgIGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICB9IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG4gIC8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbiAgZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgICB2YXIgaXNGaXJlZm94ID0gL2ZpcmVmb3gvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuICAgIHZhciBpc0lFID0gL1RyaWRlbnQvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuXG4gICAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgLy8gSW4gSUUgOSwgMTAgYW5kIDExIGZpeGVkIGVsZW1lbnRzIGNvbnRhaW5pbmcgYmxvY2sgaXMgYWx3YXlzIGVzdGFibGlzaGVkIGJ5IHRoZSB2aWV3cG9ydFxuICAgICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCk7XG5cbiAgICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgICBpZiAoaXNTaGFkb3dSb290KGN1cnJlbnROb2RlKSkge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5ob3N0O1xuICAgIH1cblxuICAgIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlJDEoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4gIC8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuICBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAgIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZSQxKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlJDEob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG4gIH1cblxuICBmdW5jdGlvbiB3aXRoaW4obWluJDEsIHZhbHVlLCBtYXgkMSkge1xuICAgIHJldHVybiBtYXgobWluJDEsIG1pbih2YWx1ZSwgbWF4JDEpKTtcbiAgfVxuICBmdW5jdGlvbiB3aXRoaW5NYXhDbGFtcChtaW4sIHZhbHVlLCBtYXgpIHtcbiAgICB2YXIgdiA9IHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpO1xuICAgIHJldHVybiB2ID4gbWF4ID8gbWF4IDogdjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xuICAgIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBoYXNoTWFwO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIHZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICAgIH0pKSA6IHBhZGRpbmc7XG4gICAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICAgIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICAgIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gICAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gICAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gICAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gICAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gICAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gICAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gICAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gICAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gICAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWZmZWN0JDEoX3JlZjIpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gICAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgYXJyb3ckMSA9IHtcbiAgICBuYW1lOiAnYXJyb3cnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdtYWluJyxcbiAgICBmbjogYXJyb3csXG4gICAgZWZmZWN0OiBlZmZlY3QkMSxcbiAgICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gICAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG4gIH1cblxuICB2YXIgdW5zZXRTaWRlcyA9IHtcbiAgICB0b3A6ICdhdXRvJyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIGxlZnQ6ICdhdXRvJ1xuICB9OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuICAvLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuICAvLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuICBmdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gICAgdmFyIHggPSBfcmVmLngsXG4gICAgICAgIHkgPSBfcmVmLnk7XG4gICAgdmFyIHdpbiA9IHdpbmRvdztcbiAgICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogcm91bmQoeCAqIGRwcikgLyBkcHIgfHwgMCxcbiAgICAgIHk6IHJvdW5kKHkgKiBkcHIpIC8gZHByIHx8IDBcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gICAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgICAgdmFyaWF0aW9uID0gX3JlZjIudmFyaWF0aW9uLFxuICAgICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHMsXG4gICAgICAgIGlzRml4ZWQgPSBfcmVmMi5pc0ZpeGVkO1xuICAgIHZhciBfb2Zmc2V0cyR4ID0gb2Zmc2V0cy54LFxuICAgICAgICB4ID0gX29mZnNldHMkeCA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHgsXG4gICAgICAgIF9vZmZzZXRzJHkgPSBvZmZzZXRzLnksXG4gICAgICAgIHkgPSBfb2Zmc2V0cyR5ID09PSB2b2lkIDAgPyAwIDogX29mZnNldHMkeTtcblxuICAgIHZhciBfcmVmMyA9IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMoe1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9KSA6IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTtcblxuICAgIHggPSBfcmVmMy54O1xuICAgIHkgPSBfcmVmMy55O1xuICAgIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICAgIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICAgIHZhciBzaWRlWCA9IGxlZnQ7XG4gICAgdmFyIHNpZGVZID0gdG9wO1xuICAgIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgICBpZiAoYWRhcHRpdmUpIHtcbiAgICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUkMShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJyAmJiBwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJykge1xuICAgICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgICB9XG4gICAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wIHx8IChwbGFjZW1lbnQgPT09IGxlZnQgfHwgcGxhY2VtZW50ID09PSByaWdodCkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgICAgc2lkZVkgPSBib3R0b207XG4gICAgICAgIHZhciBvZmZzZXRZID0gaXNGaXhlZCAmJiBvZmZzZXRQYXJlbnQgPT09IHdpbiAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQuaGVpZ2h0IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICAgIG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXTtcbiAgICAgICAgeSAtPSBvZmZzZXRZIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0IHx8IChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgICAgc2lkZVggPSByaWdodDtcbiAgICAgICAgdmFyIG9mZnNldFggPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC53aWR0aCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgICBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXTtcbiAgICAgICAgeCAtPSBvZmZzZXRYIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcG9zaXRpb246IHBvc2l0aW9uXG4gICAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgICB2YXIgX3JlZjQgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUih7XG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH0pIDoge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9O1xuXG4gICAgeCA9IF9yZWY0Lng7XG4gICAgeSA9IF9yZWY0Lnk7XG5cbiAgICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDw9IDEgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNSkge1xuICAgIHZhciBzdGF0ZSA9IF9yZWY1LnN0YXRlLFxuICAgICAgICBvcHRpb25zID0gX3JlZjUub3B0aW9ucztcbiAgICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG5cbiAgICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgICB2YXJpYXRpb246IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpLFxuICAgICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGlzRml4ZWQ6IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCdcbiAgICB9O1xuXG4gICAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICAgIH0pO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IGNvbXB1dGVTdHlsZXMkMSA9IHtcbiAgICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgICBkYXRhOiB7fVxuICB9O1xuXG4gIHZhciBwYXNzaXZlID0ge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gICAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNpemUpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBldmVudExpc3RlbmVycyA9IHtcbiAgICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICd3cml0ZScsXG4gICAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gICAgZWZmZWN0OiBlZmZlY3QsXG4gICAgZGF0YToge31cbiAgfTtcblxuICB2YXIgaGFzaCQxID0ge1xuICAgIGxlZnQ6ICdyaWdodCcsXG4gICAgcmlnaHQ6ICdsZWZ0JyxcbiAgICBib3R0b206ICd0b3AnLFxuICAgIHRvcDogJ2JvdHRvbSdcbiAgfTtcbiAgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICAgIHJldHVybiBoYXNoJDFbbWF0Y2hlZF07XG4gICAgfSk7XG4gIH1cblxuICB2YXIgaGFzaCA9IHtcbiAgICBzdGFydDogJ2VuZCcsXG4gICAgZW5kOiAnc3RhcnQnXG4gIH07XG4gIGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gICAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICAgIHJldHVybiB7XG4gICAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gICAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAgIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAgIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gICAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAgIC8vIGFueXdheS5cbiAgICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAgIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gICAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICAgIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gICAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICAgIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICAgIHZhciB4ID0gMDtcbiAgICB2YXIgeSA9IDA7XG5cbiAgICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG4gICAgICB2YXIgbGF5b3V0Vmlld3BvcnQgPSBpc0xheW91dFZpZXdwb3J0KCk7XG5cbiAgICAgIGlmIChsYXlvdXRWaWV3cG9ydCB8fCAhbGF5b3V0Vmlld3BvcnQgJiYgc3RyYXRlZ3kgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgICB5OiB5XG4gICAgfTtcbiAgfVxuXG4gIC8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuICBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICAgIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICAgIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICAgIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gICAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICAgIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUkMShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gICAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICAgIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KSxcbiAgICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlKSB7XG4gICAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbiAgfVxuXG4gIC8qXG4gIGdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG4gIHVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG4gIHRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbiAgcmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiAgKi9cblxuICBmdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gICAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICAgIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICAgIGxpc3QgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICAgIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICAgIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICAgIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICAgIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgICBsZWZ0OiByZWN0LngsXG4gICAgICB0b3A6IHJlY3QueSxcbiAgICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBmYWxzZSwgc3RyYXRlZ3kgPT09ICdmaXhlZCcpO1xuICAgIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gICAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICAgIHJlY3QueSA9IHJlY3QudG9wO1xuICAgIHJldHVybiByZWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSB7XG4gICAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSkgOiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xuICB9IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4gIC8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuICAvLyBgaW5pdGlhbGBcblxuXG4gIGZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gICAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICAgIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICAgIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gICAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xuICAgIH0pO1xuICB9IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2ZcbiAgLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbiAgZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnksIHN0cmF0ZWd5KSB7XG4gICAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICAgIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICAgIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICAgIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpO1xuICAgICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICAgIHJldHVybiBhY2NSZWN0O1xuICAgIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSk7XG4gICAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gICAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICAgIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gICAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICAgIHJldHVybiBjbGlwcGluZ1JlY3Q7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gICAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gICAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICAgIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgICB2YXIgb2Zmc2V0cztcblxuICAgIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgICAgY2FzZSB0b3A6XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGJvdHRvbTpcbiAgICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSByaWdodDpcbiAgICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgICB5OiBjb21tb25ZXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGxlZnQ6XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICAgIHk6IGNvbW1vbllcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICAgIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgZW5kOlxuICAgICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldHM7XG4gIH1cblxuICBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgICBfb3B0aW9ucyRzdHJhdGVneSA9IF9vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgICBzdHJhdGVneSA9IF9vcHRpb25zJHN0cmF0ZWd5ID09PSB2b2lkIDAgPyBzdGF0ZS5zdHJhdGVneSA6IF9vcHRpb25zJHN0cmF0ZWd5LFxuICAgICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gICAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICAgIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICAgIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnksIHN0cmF0ZWd5KTtcbiAgICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChzdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2UpO1xuICAgIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgICAgZWxlbWVudDogcG9wcGVyUmVjdCxcbiAgICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgICB9KTtcbiAgICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICAgIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAgIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcblxuICAgIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICAgIGJvdHRvbTogZWxlbWVudENsaWVudFJlY3QuYm90dG9tIC0gY2xpcHBpbmdDbGllbnRSZWN0LmJvdHRvbSArIHBhZGRpbmdPYmplY3QuYm90dG9tLFxuICAgICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICAgIH07XG4gICAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gICAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgICAgdmFyIG9mZnNldCA9IG9mZnNldERhdGFbcGxhY2VtZW50XTtcbiAgICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgICAgdmFyIGF4aXMgPSBbdG9wLCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gJ3knIDogJ3gnO1xuICAgICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBwbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICAgIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgICB2YXIgcGxhY2VtZW50cyQxID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gICAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzJDEuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gICAgfSk7XG5cbiAgICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMTtcbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICAgIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICAgIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICAgIHJldHVybiBbZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG4gIH1cblxuICBmdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gICAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICAgIF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9IG9wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgICB2YXIgcHJlZmVycmVkUGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gICAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgICB2YXIgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBWYXJpYXRpb25zID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocHJlZmVycmVkUGxhY2VtZW50KSk7XG4gICAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgICAgfSkgOiBwbGFjZW1lbnQpO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICAgIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICAgIHZhciBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzWzBdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgICAgdmFyIF9iYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG4gICAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgICB9KTtcbiAgICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgICAgaWYgKHJlZmVyZW5jZVJlY3RbbGVuXSA+IHBvcHBlclJlY3RbbGVuXSkge1xuICAgICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFsdFZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W19iYXNlUGxhY2VtZW50XSA8PSAwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgICBjaGVja3MucHVzaChvdmVyZmxvd1ttYWluVmFyaWF0aW9uU2lkZV0gPD0gMCwgb3ZlcmZsb3dbYWx0VmFyaWF0aW9uU2lkZV0gPD0gMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgIH0pKSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgICAgbWFrZUZhbGxiYWNrQ2hlY2tzID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcbiAgICB9XG5cbiAgICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgICAvLyBgMmAgbWF5IGJlIGRlc2lyZWQgaW4gc29tZSBjYXNlcyDigJMgcmVzZWFyY2ggbGF0ZXJcbiAgICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICAgIHZhciBmaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50cy5maW5kKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrcy5zbGljZSgwLCBfaSkuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBmaXR0aW5nUGxhY2VtZW50O1xuICAgICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgICBpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGUucGxhY2VtZW50ICE9PSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgICAgc3RhdGUucmVzZXQgPSB0cnVlO1xuICAgIH1cbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBmbGlwJDEgPSB7XG4gICAgbmFtZTogJ2ZsaXAnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdtYWluJyxcbiAgICBmbjogZmxpcCxcbiAgICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICAgIGRhdGE6IHtcbiAgICAgIF9za2lwOiBmYWxzZVxuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICAgIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICAgIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gICAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gICAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gICAgfSk7XG4gICAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gICAgfSk7XG4gICAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICAgIH07XG4gICAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICAgIH0pO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IGhpZGUkMSA9IHtcbiAgICBuYW1lOiAnaGlkZScsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ21haW4nLFxuICAgIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG4gICAgZm46IGhpZGVcbiAgfTtcblxuICBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICB2YXIgaW52ZXJ0RGlzdGFuY2UgPSBbbGVmdCwgdG9wXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyAtMSA6IDE7XG5cbiAgICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgfSkpIDogb2Zmc2V0LFxuICAgICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICAgIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcbiAgICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICAgIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICAgIHg6IGRpc3RhbmNlLFxuICAgICAgeTogc2tpZGRpbmdcbiAgICB9IDoge1xuICAgICAgeDogc2tpZGRpbmcsXG4gICAgICB5OiBkaXN0YW5jZVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICAgIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgICAgb2Zmc2V0ID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gICAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICAgIHggPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueCxcbiAgICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gICAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCArPSB4O1xuICAgICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgICB9XG5cbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBvZmZzZXQkMSA9IHtcbiAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnbWFpbicsXG4gICAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICAgIGZuOiBvZmZzZXRcbiAgfTtcblxuICBmdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAgIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gICAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAgIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAgIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgICB9KTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBwb3BwZXJPZmZzZXRzJDEgPSB7XG4gICAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdyZWFkJyxcbiAgICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgICBkYXRhOiB7fVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICAgIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgICBfb3B0aW9ucyR0ZXRoZXIgPSBvcHRpb25zLnRldGhlcixcbiAgICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgICAgdGV0aGVyT2Zmc2V0ID0gX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkdGV0aGVyT2Zmc2V0O1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgICB9KTtcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gICAgdmFyIGlzQmFzZVBsYWNlbWVudCA9ICF2YXJpYXRpb247XG4gICAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICAgIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gICAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gICAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gICAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gICAgdmFyIHRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IHRldGhlck9mZnNldChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gICAgdmFyIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXRWYWx1ZSA9PT0gJ251bWJlcicgPyB7XG4gICAgICBtYWluQXhpczogdGV0aGVyT2Zmc2V0VmFsdWUsXG4gICAgICBhbHRBeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZVxuICAgIH0gOiBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1haW5BeGlzOiAwLFxuICAgICAgYWx0QXhpczogMFxuICAgIH0sIHRldGhlck9mZnNldFZhbHVlKTtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0ID8gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXRbc3RhdGUucGxhY2VtZW50XSA6IG51bGw7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG5cbiAgICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDtcblxuICAgICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgICAgdmFyIG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuICAgICAgdmFyIG1pbiQxID0gb2Zmc2V0ICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgICAgdmFyIG1heCQxID0gb2Zmc2V0IC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgICB2YXIgYWRkaXRpdmUgPSB0ZXRoZXIgPyAtcG9wcGVyUmVjdFtsZW5dIC8gMiA6IDA7XG4gICAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgICAvLyBvdXRzaWRlIHRoZSByZWZlcmVuY2UgYm91bmRzXG5cbiAgICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwXG4gICAgICB9O1xuICAgICAgdmFyIGFycm93UGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXSA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XG4gICAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXG4gICAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxuXG4gICAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtYXhMZW4gKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVttYWluQXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgOiAwO1xuICAgICAgdmFyIHRldGhlck1pbiA9IG9mZnNldCArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgICB2YXIgdGV0aGVyTWF4ID0gb2Zmc2V0ICsgbWF4T2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZTtcbiAgICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWluKG1pbiQxLCB0ZXRoZXJNaW4pIDogbWluJDEsIG9mZnNldCwgdGV0aGVyID8gbWF4KG1heCQxLCB0ZXRoZXJNYXgpIDogbWF4JDEpO1xuICAgICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkMjtcblxuICAgICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXG4gICAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICAgIHZhciBfb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1thbHRBeGlzXTtcblxuICAgICAgdmFyIF9sZW4gPSBhbHRBeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgICAgdmFyIGlzT3JpZ2luU2lkZSA9IFt0b3AsIGxlZnRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgICB2YXIgX29mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkMiA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbYWx0QXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIDogMDtcblxuICAgICAgdmFyIF90ZXRoZXJNaW4gPSBpc09yaWdpblNpZGUgPyBfbWluIDogX29mZnNldCAtIHJlZmVyZW5jZVJlY3RbX2xlbl0gLSBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcztcblxuICAgICAgdmFyIF90ZXRoZXJNYXggPSBpc09yaWdpblNpZGUgPyBfb2Zmc2V0ICsgcmVmZXJlbmNlUmVjdFtfbGVuXSArIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzIDogX21heDtcblxuICAgICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB0ZXRoZXIgJiYgaXNPcmlnaW5TaWRlID8gd2l0aGluTWF4Q2xhbXAoX3RldGhlck1pbiwgX29mZnNldCwgX3RldGhlck1heCkgOiB3aXRoaW4odGV0aGVyID8gX3RldGhlck1pbiA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IF90ZXRoZXJNYXggOiBfbWF4KTtcblxuICAgICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldCAtIF9vZmZzZXQ7XG4gICAgfVxuXG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgcHJldmVudE92ZXJmbG93JDEgPSB7XG4gICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ21haW4nLFxuICAgIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gICAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQpIHtcbiAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHNjYWxlWCA9IHJvdW5kKHJlY3Qud2lkdGgpIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxO1xuICAgIHZhciBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xuICAgIHJldHVybiBzY2FsZVggIT09IDEgfHwgc2NhbGVZICE9PSAxO1xuICB9IC8vIFJldHVybnMgdGhlIGNvbXBvc2l0ZSByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC5cbiAgLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5cbiAgZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gICAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgICAgaXNGaXhlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICAgIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnRJc1NjYWxlZCwgaXNGaXhlZCk7XG4gICAgdmFyIHNjcm9sbCA9IHtcbiAgICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgICBzY3JvbGxUb3A6IDBcbiAgICB9O1xuICAgIHZhciBvZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuXG4gICAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50LCB0cnVlKTtcbiAgICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gICAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gICAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgICB9XG5cbiAgICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICAgIH0pKTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICAgIHZhciBwZW5kaW5nO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwZW5kaW5nO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgICB9KSA6IGN1cnJlbnQ7XG4gICAgICByZXR1cm4gbWVyZ2VkO1xuICAgIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gbWVyZ2VkW2tleV07XG4gICAgfSk7XG4gIH1cblxuICB2YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgbW9kaWZpZXJzOiBbXSxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJ1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICAgIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgICB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgc3R5bGVzOiB7fVxuICAgICAgfTtcbiAgICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKHNldE9wdGlvbnNBY3Rpb24pIHtcbiAgICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzZXRPcHRpb25zQWN0aW9uID09PSAnZnVuY3Rpb24nID8gc2V0T3B0aW9uc0FjdGlvbihzdGF0ZS5vcHRpb25zKSA6IHNldE9wdGlvbnNBY3Rpb247XG4gICAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgICB9KTsgLy8gVmFsaWRhdGUgdGhlIHByb3ZpZGVkIG1vZGlmaWVycyBzbyB0aGF0IHRoZSBjb25zdW1lciB3aWxsIGdldCB3YXJuZWRcblxuICAgICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgICAvLyBsb2dpYy5cbiAgICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuXG4gICAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAgIC8vIG9uZS5cblxuICAgICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkb3B0aW9ucyxcbiAgICAgICAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0O1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cbiAgdmFyIGNyZWF0ZVBvcHBlciQyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbiAgdmFyIGRlZmF1bHRNb2RpZmllcnMkMSA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cyQxLCBjb21wdXRlU3R5bGVzJDEsIGFwcGx5U3R5bGVzJDFdO1xuICB2YXIgY3JlYXRlUG9wcGVyJDEgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzJDFcbiAgfSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuICB2YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cyQxLCBjb21wdXRlU3R5bGVzJDEsIGFwcGx5U3R5bGVzJDEsIG9mZnNldCQxLCBmbGlwJDEsIHByZXZlbnRPdmVyZmxvdyQxLCBhcnJvdyQxLCBoaWRlJDFdO1xuICB2YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gICAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xuICB9KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG4gIGNvbnN0IFBvcHBlciA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKC8qI19fUFVSRV9fKi9PYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBhZnRlck1haW4sXG4gICAgYWZ0ZXJSZWFkLFxuICAgIGFmdGVyV3JpdGUsXG4gICAgYXBwbHlTdHlsZXM6IGFwcGx5U3R5bGVzJDEsXG4gICAgYXJyb3c6IGFycm93JDEsXG4gICAgYXV0byxcbiAgICBiYXNlUGxhY2VtZW50cyxcbiAgICBiZWZvcmVNYWluLFxuICAgIGJlZm9yZVJlYWQsXG4gICAgYmVmb3JlV3JpdGUsXG4gICAgYm90dG9tLFxuICAgIGNsaXBwaW5nUGFyZW50cyxcbiAgICBjb21wdXRlU3R5bGVzOiBjb21wdXRlU3R5bGVzJDEsXG4gICAgY3JlYXRlUG9wcGVyLFxuICAgIGNyZWF0ZVBvcHBlckJhc2U6IGNyZWF0ZVBvcHBlciQyLFxuICAgIGNyZWF0ZVBvcHBlckxpdGU6IGNyZWF0ZVBvcHBlciQxLFxuICAgIGRldGVjdE92ZXJmbG93LFxuICAgIGVuZCxcbiAgICBldmVudExpc3RlbmVycyxcbiAgICBmbGlwOiBmbGlwJDEsXG4gICAgaGlkZTogaGlkZSQxLFxuICAgIGxlZnQsXG4gICAgbWFpbixcbiAgICBtb2RpZmllclBoYXNlcyxcbiAgICBvZmZzZXQ6IG9mZnNldCQxLFxuICAgIHBsYWNlbWVudHMsXG4gICAgcG9wcGVyLFxuICAgIHBvcHBlckdlbmVyYXRvcixcbiAgICBwb3BwZXJPZmZzZXRzOiBwb3BwZXJPZmZzZXRzJDEsXG4gICAgcHJldmVudE92ZXJmbG93OiBwcmV2ZW50T3ZlcmZsb3ckMSxcbiAgICByZWFkLFxuICAgIHJlZmVyZW5jZSxcbiAgICByaWdodCxcbiAgICBzdGFydCxcbiAgICB0b3AsXG4gICAgdmFyaWF0aW9uUGxhY2VtZW50cyxcbiAgICB2aWV3cG9ydCxcbiAgICB3cml0ZVxuICB9LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGRyb3Bkb3duLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkYSA9ICdkcm9wZG93bic7XG4gIGNvbnN0IERBVEFfS0VZJDYgPSAnYnMuZHJvcGRvd24nO1xuICBjb25zdCBFVkVOVF9LRVkkNiA9IGAuJHtEQVRBX0tFWSQ2fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQzID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVTQ0FQRV9LRVkkMiA9ICdFc2NhcGUnO1xuICBjb25zdCBUQUJfS0VZJDEgPSAnVGFiJztcbiAgY29uc3QgQVJST1dfVVBfS0VZJDEgPSAnQXJyb3dVcCc7XG4gIGNvbnN0IEFSUk9XX0RPV05fS0VZJDEgPSAnQXJyb3dEb3duJztcbiAgY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMjsgLy8gTW91c2VFdmVudC5idXR0b24gdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYnV0dG9uLCB1c3VhbGx5IHRoZSByaWdodCBidXR0b25cblxuICBjb25zdCBFVkVOVF9ISURFJDUgPSBgaGlkZSR7RVZFTlRfS0VZJDZ9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOJDUgPSBgaGlkZGVuJHtFVkVOVF9LRVkkNn1gO1xuICBjb25zdCBFVkVOVF9TSE9XJDUgPSBgc2hvdyR7RVZFTlRfS0VZJDZ9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kNSA9IGBzaG93biR7RVZFTlRfS0VZJDZ9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMyA9IGBjbGljayR7RVZFTlRfS0VZJDZ9JHtEQVRBX0FQSV9LRVkkM31gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWSQ2fSR7REFUQV9BUElfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfS0VZVVBfREFUQV9BUEkgPSBga2V5dXAke0VWRU5UX0tFWSQ2fSR7REFUQV9BUElfS0VZJDN9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDYgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUFVQID0gJ2Ryb3B1cCc7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUEVORCA9ICdkcm9wZW5kJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QU1RBUlQgPSAnZHJvcHN0YXJ0JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSID0gJ2Ryb3B1cC1jZW50ZXInO1xuICBjb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUiA9ICdkcm9wZG93bi1jZW50ZXInO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJdOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04gPSBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzfS4ke0NMQVNTX05BTUVfU0hPVyQ2fWA7XG4gIGNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZCQVIgPSAnLm5hdmJhcic7XG4gIGNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnO1xuICBjb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJztcbiAgY29uc3QgUExBQ0VNRU5UX1RPUCA9IGlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0JztcbiAgY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0JztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJztcbiAgY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9UT1BDRU5URVIgPSAndG9wJztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiA9ICdib3R0b20nO1xuICBjb25zdCBEZWZhdWx0JDkgPSB7XG4gICAgYXV0b0Nsb3NlOiB0cnVlLFxuICAgIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgICBkaXNwbGF5OiAnZHluYW1pYycsXG4gICAgb2Zmc2V0OiBbMCwgMl0sXG4gICAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICAgIHJlZmVyZW5jZTogJ3RvZ2dsZSdcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkOSA9IHtcbiAgICBhdXRvQ2xvc2U6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICAgIGRpc3BsYXk6ICdzdHJpbmcnLFxuICAgIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGU7IC8vIGRyb3Bkb3duIHdyYXBwZXJcbiAgICAgIC8vIHRvZG86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICAgIHRoaXMuX21lbnUgPSBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8IFNlbGVjdG9yRW5naW5lLnByZXYodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF0gfHwgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NRU5VLCB0aGlzLl9wYXJlbnQpO1xuICAgICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkOTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ5O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRhO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc1Nob3duKCkgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpO1xuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH07XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XJDUsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NyZWF0ZVBvcHBlcigpO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAhdGhpcy5fcGFyZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSX05BVikpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQ2KTtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOJDUsIHJlbGF0ZWRUYXJnZXQpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9O1xuICAgICAgdGhpcy5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpO1xuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSQ1LCByZWxhdGVkVGFyZ2V0KTtcbiAgICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckNik7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicpO1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOJDUsIHJlbGF0ZWRUYXJnZXQpO1xuICAgIH1cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gc3VwZXIuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50JDEoY29uZmlnLnJlZmVyZW5jZSkgJiYgdHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFBvcHBlciB2aXJ0dWFsIGVsZW1lbnRzIHJlcXVpcmUgYSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRSRhLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCJyZWZlcmVuY2VcIiBwcm92aWRlZCB0eXBlIFwib2JqZWN0XCIgd2l0aG91dCBhIHJlcXVpcmVkIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIgbWV0aG9kLmApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX2NyZWF0ZVBvcHBlcigpIHtcbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpO1xuICAgICAgfVxuICAgICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9wYXJlbnQ7XG4gICAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCQxKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBnZXRFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2U7XG4gICAgICB9XG4gICAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IGNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpO1xuICAgIH1cbiAgICBfaXNTaG93bigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckNik7XG4gICAgfVxuICAgIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgICBjb25zdCBwYXJlbnREcm9wZG93biA9IHRoaXMuX3BhcmVudDtcbiAgICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgICByZXR1cm4gUExBQ0VNRU5UX1JJR0hUO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BTVEFSVCkpIHtcbiAgICAgICAgcmV0dXJuIFBMQUNFTUVOVF9MRUZUO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUF9DRU5URVIpKSB7XG4gICAgICAgIHJldHVybiBQTEFDRU1FTlRfVE9QQ0VOVEVSO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUikpIHtcbiAgICAgICAgcmV0dXJuIFBMQUNFTUVOVF9CT1RUT01DRU5URVI7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIG5lZWQgdG8gdHJpbSB0aGUgdmFsdWUgYmVjYXVzZSBjdXN0b20gcHJvcGVydGllcyBjYW4gYWxzbyBpbmNsdWRlIHNwYWNlc1xuICAgICAgY29uc3QgaXNFbmQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX21lbnUpLmdldFByb3BlcnR5VmFsdWUoJy0tYnMtcG9zaXRpb24nKS50cmltKCkgPT09ICdlbmQnO1xuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUCkpIHtcbiAgICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX1RPUEVORCA6IFBMQUNFTUVOVF9UT1A7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfQk9UVE9NRU5EIDogUExBQ0VNRU5UX0JPVFRPTTtcbiAgICB9XG4gICAgX2RldGVjdE5hdmJhcigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSKSAhPT0gbnVsbDtcbiAgICB9XG4gICAgX2dldE9mZnNldCgpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9ID0gdGhpcy5fY29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCkpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9XG4gICAgX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgICAgbW9kaWZpZXJzOiBbe1xuICAgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfTtcblxuICAgICAgLy8gRGlzYWJsZSBQb3BwZXIgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5IG9yIERyb3Bkb3duIGlzIGluIE5hdmJhclxuICAgICAgaWYgKHRoaXMuX2luTmF2YmFyIHx8IHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJyk7IC8vIHRvZG86djYgcmVtb3ZlXG4gICAgICAgIGRlZmF1bHRCc1BvcHBlckNvbmZpZy5tb2RpZmllcnMgPSBbe1xuICAgICAgICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfV07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAgIC4uLmV4ZWN1dGUodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZywgW2RlZmF1bHRCc1BvcHBlckNvbmZpZ10pXG4gICAgICB9O1xuICAgIH1cbiAgICBfc2VsZWN0TWVudUl0ZW0oe1xuICAgICAga2V5LFxuICAgICAgdGFyZ2V0XG4gICAgfSkge1xuICAgICAgY29uc3QgaXRlbXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMsIHRoaXMuX21lbnUpLmZpbHRlcihlbGVtZW50ID0+IGlzVmlzaWJsZShlbGVtZW50KSk7XG4gICAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG4gICAgICAvLyBhbGxvdyBjeWNsaW5nIHRvIGdldCB0aGUgbGFzdCBpdGVtIGluIGNhc2Uga2V5IGVxdWFscyBBUlJPV19VUF9LRVlcbiAgICAgIGdldE5leHRBY3RpdmVFbGVtZW50KGl0ZW1zLCB0YXJnZXQsIGtleSA9PT0gQVJST1dfRE9XTl9LRVkkMSwgIWl0ZW1zLmluY2x1ZGVzKHRhcmdldCkpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgY2xlYXJNZW51cyhldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ICE9PSBUQUJfS0VZJDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3BlblRvZ2dsZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOKTtcbiAgICAgIGZvciAoY29uc3QgdG9nZ2xlIG9mIG9wZW5Ub2dnbGVzKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBEcm9wZG93bi5nZXRJbnN0YW5jZSh0b2dnbGUpO1xuICAgICAgICBpZiAoIWNvbnRleHQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgY29uc3QgaXNNZW51VGFyZ2V0ID0gY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX21lbnUpO1xuICAgICAgICBpZiAoY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX2VsZW1lbnQpIHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdpbnNpZGUnICYmICFpc01lbnVUYXJnZXQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ291dHNpZGUnICYmIGlzTWVudVRhcmdldCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFiIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgZHJvcGRvd24gbWVudSBvciBldmVudHMgZnJvbSBjb250YWluZWQgaW5wdXRzIHNob3VsZG4ndCBjbG9zZSB0aGUgbWVudVxuICAgICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmIChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSA9PT0gVEFCX0tFWSQxIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGNvbnRleHQuX2VsZW1lbnRcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudDtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0Ll9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIC8vIElmIG5vdCBhbiBVUCB8IERPV04gfCBFU0NBUEUga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAgIC8vIElmIGlucHV0L3RleHRhcmVhICYmIGlmIGtleSBpcyBvdGhlciB0aGFuIEVTQ0FQRSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG5cbiAgICAgIGNvbnN0IGlzSW5wdXQgPSAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKTtcbiAgICAgIGNvbnN0IGlzRXNjYXBlRXZlbnQgPSBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkkMjtcbiAgICAgIGNvbnN0IGlzVXBPckRvd25FdmVudCA9IFtBUlJPV19VUF9LRVkkMSwgQVJST1dfRE9XTl9LRVkkMV0uaW5jbHVkZXMoZXZlbnQua2V5KTtcbiAgICAgIGlmICghaXNVcE9yRG93bkV2ZW50ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpc0lucHV0ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIHRvZG86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICAgIGNvbnN0IGdldFRvZ2dsZUJ1dHRvbiA9IHRoaXMubWF0Y2hlcyhTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzKSA/IHRoaXMgOiBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMpWzBdIHx8IFNlbGVjdG9yRW5naW5lLm5leHQodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUkMylbMF0gfHwgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzLCBldmVudC5kZWxlZ2F0ZVRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24pO1xuICAgICAgaWYgKGlzVXBPckRvd25FdmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UuX2lzU2hvd24oKSkge1xuICAgICAgICAvLyBlbHNlIGlzIGVzY2FwZSBhbmQgd2UgY2hlY2sgaWYgaXQgaXMgc2hvd25cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICAgICAgZ2V0VG9nZ2xlQnV0dG9uLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUkMywgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKTtcbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpO1xuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDMsIERyb3Bkb3duLmNsZWFyTWVudXMpO1xuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKTtcbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykudG9nZ2xlKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvc2Nyb2xsQmFyLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCc7XG4gIGNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJztcbiAgY29uc3QgUFJPUEVSVFlfUEFERElORyA9ICdwYWRkaW5nLXJpZ2h0JztcbiAgY29uc3QgUFJPUEVSVFlfTUFSR0lOID0gJ21hcmdpbi1yaWdodCc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgU2Nyb2xsQmFySGVscGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGdldFdpZHRoKCkge1xuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9pbm5lcldpZHRoI3VzYWdlX25vdGVzXG4gICAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnRXaWR0aCk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgIHRoaXMuX2Rpc2FibGVPdmVyRmxvdygpO1xuICAgICAgLy8gZ2l2ZSBwYWRkaW5nIHRvIGVsZW1lbnQgdG8gYmFsYW5jZSB0aGUgaGlkZGVuIHNjcm9sbGJhciB3aWR0aFxuICAgICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKTtcbiAgICAgIC8vIHRyaWNrOiBXZSBhZGp1c3QgcG9zaXRpdmUgcGFkZGluZ1JpZ2h0IGFuZCBuZWdhdGl2ZSBtYXJnaW5SaWdodCB0byBzdGlja3ktdG9wIGVsZW1lbnRzIHRvIGtlZXAgc2hvd2luZyBmdWxsd2lkdGhcbiAgICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aCk7XG4gICAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlIC0gd2lkdGgpO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgJ292ZXJmbG93Jyk7XG4gICAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcpO1xuICAgICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCBQUk9QRVJUWV9QQURESU5HKTtcbiAgICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTik7XG4gICAgfVxuICAgIGlzT3ZlcmZsb3dpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRXaWR0aCgpID4gMDtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2Rpc2FibGVPdmVyRmxvdygpIHtcbiAgICAgIHRoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH1cbiAgICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHksIGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpO1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIGAke2NhbGxiYWNrKE51bWJlci5wYXJzZUZsb2F0KGNhbGN1bGF0ZWRWYWx1ZSkpfXB4YCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spO1xuICAgIH1cbiAgICBfc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSkge1xuICAgICAgY29uc3QgYWN0dWFsVmFsdWUgPSBlbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSk7XG4gICAgICBpZiAoYWN0dWFsVmFsdWUpIHtcbiAgICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5LCBhY3R1YWxWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5KSB7XG4gICAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSk7XG4gICAgICAgIC8vIFdlIG9ubHkgd2FudCB0byByZW1vdmUgdGhlIHByb3BlcnR5IGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGA7IHRoZSB2YWx1ZSBjYW4gYWxzbyBiZSB6ZXJvXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVQcm9wZXJ0eSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKTtcbiAgICB9XG4gICAgX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIGNhbGxCYWNrKSB7XG4gICAgICBpZiAoaXNFbGVtZW50JDEoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNhbGxCYWNrKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBzZWwgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgY2FsbEJhY2soc2VsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvYmFja2Ryb3AuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQ5ID0gJ2JhY2tkcm9wJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9GQURFJDQgPSAnZmFkZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQ1ID0gJ3Nob3cnO1xuICBjb25zdCBFVkVOVF9NT1VTRURPV04gPSBgbW91c2Vkb3duLmJzLiR7TkFNRSQ5fWA7XG4gIGNvbnN0IERlZmF1bHQkOCA9IHtcbiAgICBjbGFzc05hbWU6ICdtb2RhbC1iYWNrZHJvcCcsXG4gICAgY2xpY2tDYWxsYmFjazogbnVsbCxcbiAgICBpc0FuaW1hdGVkOiBmYWxzZSxcbiAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgLy8gaWYgZmFsc2UsIHdlIHVzZSB0aGUgYmFja2Ryb3AgaGVscGVyIHdpdGhvdXQgYWRkaW5nIGFueSBlbGVtZW50IHRvIHRoZSBkb21cbiAgICByb290RWxlbWVudDogJ2JvZHknIC8vIGdpdmUgdGhlIGNob2ljZSB0byBwbGFjZSBiYWNrZHJvcCB1bmRlciBkaWZmZXJlbnQgZWxlbWVudHNcbiAgfTtcblxuICBjb25zdCBEZWZhdWx0VHlwZSQ4ID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgY2xpY2tDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gICAgaXNBbmltYXRlZDogJ2Jvb2xlYW4nLFxuICAgIGlzVmlzaWJsZTogJ2Jvb2xlYW4nLFxuICAgIHJvb3RFbGVtZW50OiAnKGVsZW1lbnR8c3RyaW5nKSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBCYWNrZHJvcCBleHRlbmRzIENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkODtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ4O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQ5O1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHNob3coY2FsbGJhY2spIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXBwZW5kKCk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpO1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgIHJlZmxvdyhlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckNSk7XG4gICAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaGlkZShjYWxsYmFjaykge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckNSk7XG4gICAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV04pO1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2dldEVsZW1lbnQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NOYW1lID0gdGhpcy5fY29uZmlnLmNsYXNzTmFtZTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUkNCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGJhY2tkcm9wO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gICAgfVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgLy8gdXNlIGdldEVsZW1lbnQoKSB3aXRoIHRoZSBkZWZhdWx0IFwiYm9keVwiIHRvIGdldCBhIGZyZXNoIEVsZW1lbnQgb24gZWFjaCBpbnN0YW50aWF0aW9uXG4gICAgICBjb25maWcucm9vdEVsZW1lbnQgPSBnZXRFbGVtZW50KGNvbmZpZy5yb290RWxlbWVudCk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfYXBwZW5kKCkge1xuICAgICAgaWYgKHRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKTtcbiAgICAgIHRoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOLCAoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9pc0FwcGVuZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgX2VtdWxhdGVBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIHRoaXMuX2dldEVsZW1lbnQoKSwgdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9mb2N1c3RyYXAuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQ4ID0gJ2ZvY3VzdHJhcCc7XG4gIGNvbnN0IERBVEFfS0VZJDUgPSAnYnMuZm9jdXN0cmFwJztcbiAgY29uc3QgRVZFTlRfS0VZJDUgPSBgLiR7REFUQV9LRVkkNX1gO1xuICBjb25zdCBFVkVOVF9GT0NVU0lOJDIgPSBgZm9jdXNpbiR7RVZFTlRfS0VZJDV9YDtcbiAgY29uc3QgRVZFTlRfS0VZRE9XTl9UQUIgPSBga2V5ZG93bi50YWIke0VWRU5UX0tFWSQ1fWA7XG4gIGNvbnN0IFRBQl9LRVkgPSAnVGFiJztcbiAgY29uc3QgVEFCX05BVl9GT1JXQVJEID0gJ2ZvcndhcmQnO1xuICBjb25zdCBUQUJfTkFWX0JBQ0tXQVJEID0gJ2JhY2t3YXJkJztcbiAgY29uc3QgRGVmYXVsdCQ3ID0ge1xuICAgIGF1dG9mb2N1czogdHJ1ZSxcbiAgICB0cmFwRWxlbWVudDogbnVsbCAvLyBUaGUgZWxlbWVudCB0byB0cmFwIGZvY3VzIGluc2lkZSBvZlxuICB9O1xuXG4gIGNvbnN0IERlZmF1bHRUeXBlJDcgPSB7XG4gICAgYXV0b2ZvY3VzOiAnYm9vbGVhbicsXG4gICAgdHJhcEVsZW1lbnQ6ICdlbGVtZW50J1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIEZvY3VzVHJhcCBleHRlbmRzIENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDc7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkNztcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkODtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9mb2N1cykge1xuICAgICAgICB0aGlzLl9jb25maWcudHJhcEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSQ1KTsgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4kMiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlRm9jdXNpbihldmVudCkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX1RBQiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlS2V5ZG93bihldmVudCkpO1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZJDUpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfaGFuZGxlRm9jdXNpbihldmVudCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB0cmFwRWxlbWVudFxuICAgICAgfSA9IHRoaXMuX2NvbmZpZztcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGRvY3VtZW50IHx8IGV2ZW50LnRhcmdldCA9PT0gdHJhcEVsZW1lbnQgfHwgdHJhcEVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZvY3VzYWJsZUNoaWxkcmVuKHRyYXBFbGVtZW50KTtcbiAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdHJhcEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9PT0gVEFCX05BVl9CQUNLV0FSRCkge1xuICAgICAgICBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHNbMF0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2hhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXkgIT09IFRBQl9LRVkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9IGV2ZW50LnNoaWZ0S2V5ID8gVEFCX05BVl9CQUNLV0FSRCA6IFRBQl9OQVZfRk9SV0FSRDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIG1vZGFsLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkNyA9ICdtb2RhbCc7XG4gIGNvbnN0IERBVEFfS0VZJDQgPSAnYnMubW9kYWwnO1xuICBjb25zdCBFVkVOVF9LRVkkNCA9IGAuJHtEQVRBX0tFWSQ0fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQyID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVTQ0FQRV9LRVkkMSA9ICdFc2NhcGUnO1xuICBjb25zdCBFVkVOVF9ISURFJDQgPSBgaGlkZSR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQkMSA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9ISURERU4kNCA9IGBoaWRkZW4ke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX1NIT1ckNCA9IGBzaG93JHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9TSE9XTiQ0ID0gYHNob3duJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9SRVNJWkUkMSA9IGByZXNpemUke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MgPSBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyQxID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMiA9IGBjbGljayR7RVZFTlRfS0VZJDR9JHtEQVRBX0FQSV9LRVkkMn1gO1xuICBjb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtb3Blbic7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQzID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckNCA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TVEFUSUMgPSAnbW9kYWwtc3RhdGljJztcbiAgY29uc3QgT1BFTl9TRUxFQ1RPUiQxID0gJy5tb2RhbC5zaG93JztcbiAgY29uc3QgU0VMRUNUT1JfRElBTE9HID0gJy5tb2RhbC1kaWFsb2cnO1xuICBjb25zdCBTRUxFQ1RPUl9NT0RBTF9CT0RZID0gJy5tb2RhbC1ib2R5JztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUkMiA9ICdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXSc7XG4gIGNvbnN0IERlZmF1bHQkNiA9IHtcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBmb2N1czogdHJ1ZSxcbiAgICBrZXlib2FyZDogdHJ1ZVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQ2ID0ge1xuICAgIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAgZm9jdXM6ICdib29sZWFuJyxcbiAgICBrZXlib2FyZDogJ2Jvb2xlYW4nXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgTW9kYWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgdGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpO1xuICAgICAgdGhpcy5fZm9jdXN0cmFwID0gdGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpO1xuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9zY3JvbGxCYXIgPSBuZXcgU2Nyb2xsQmFySGVscGVyKCk7XG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ2O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDY7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDc7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldCk7XG4gICAgfVxuICAgIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1ckNCwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9KTtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICB0aGlzLl9zY3JvbGxCYXIuaGlkZSgpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfT1BFTik7XG4gICAgICB0aGlzLl9hZGp1c3REaWFsb2coKTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDQpO1xuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ0KTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5faGlkZU1vZGFsKCksIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2lzQW5pbWF0ZWQoKSk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBmb3IgKGNvbnN0IGh0bWxFbGVtZW50IG9mIFt3aW5kb3csIHRoaXMuX2RpYWxvZ10pIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihodG1sRWxlbWVudCwgRVZFTlRfS0VZJDQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgaGFuZGxlVXBkYXRlKCkge1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgICAgaXNWaXNpYmxlOiBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCksXG4gICAgICAgIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZSxcbiAgICAgICAgaXNBbmltYXRlZDogdGhpcy5faXNBbmltYXRlZCgpXG4gICAgICB9KTtcbiAgICB9XG4gICAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KTtcbiAgICB9XG4gICAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIC8vIHRyeSB0byBhcHBlbmQgZHluYW1pYyBtb2RhbFxuICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgY29uc3QgbW9kYWxCb2R5ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NT0RBTF9CT0RZLCB0aGlzLl9kaWFsb2cpO1xuICAgICAgaWYgKG1vZGFsQm9keSkge1xuICAgICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgIH1cbiAgICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckNCk7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04kNCwge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayh0cmFuc2l0aW9uQ29tcGxldGUsIHRoaXMuX2RpYWxvZywgdGhpcy5faXNBbmltYXRlZCgpKTtcbiAgICB9XG4gICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUyQxLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkkMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKTtcbiAgICAgIH0pO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFJDEsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgIXRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICAgIHRoaXMuX2FkanVzdERpYWxvZygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICAvLyBhIGJhZCB0cmljayB0byBzZWdyZWdhdGUgY2xpY2tzIHRoYXQgbWF5IHN0YXJ0IGluc2lkZSBkaWFsb2cgYnV0IGVuZCBvdXRzaWRlLCBhbmQgYXZvaWQgbGlzdGVuIHRvIHNjcm9sbGJhciBjbGlja3NcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBldmVudDIgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgfHwgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQyLnRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIF9oaWRlTW9kYWwoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJyk7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfT1BFTik7XG4gICAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsQmFyLnJlc2V0KCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiQ0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBfaXNBbmltYXRlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkMyk7XG4gICAgfVxuICAgIF90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkge1xuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQkMSk7XG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3QgaW5pdGlhbE92ZXJmbG93WSA9IHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZO1xuICAgICAgLy8gcmV0dXJuIGlmIHRoZSBmb2xsb3dpbmcgYmFja2dyb3VuZCB0cmFuc2l0aW9uIGhhc24ndCB5ZXQgY29tcGxldGVkXG4gICAgICBpZiAoaW5pdGlhbE92ZXJmbG93WSA9PT0gJ2hpZGRlbicgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TVEFUSUMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TVEFUSUMpO1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NUQVRJQyk7XG4gICAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gaW5pdGlhbE92ZXJmbG93WTtcbiAgICAgICAgfSwgdGhpcy5fZGlhbG9nKTtcbiAgICAgIH0sIHRoaXMuX2RpYWxvZyk7XG4gICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgICAgKi9cblxuICAgIF9hZGp1c3REaWFsb2coKSB7XG4gICAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuX3Njcm9sbEJhci5nZXRXaWR0aCgpO1xuICAgICAgY29uc3QgaXNCb2R5T3ZlcmZsb3dpbmcgPSBzY3JvbGxiYXJXaWR0aCA+IDA7XG4gICAgICBpZiAoaXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGlzUlRMKCkgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgICAgfVxuICAgICAgaWYgKCFpc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdSaWdodCcgOiAncGFkZGluZ0xlZnQnO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcbiAgICAgIH1cbiAgICB9XG4gICAgX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJyc7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMiwgU0VMRUNUT1JfREFUQV9UT0dHTEUkMiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKTtcbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfU0hPVyQ0LCBzaG93RXZlbnQgPT4ge1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiQ0LCAoKSA9PiB7XG4gICAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBtb2RhbCB0b2dnbGVyIHdoaWxlIGFub3RoZXIgb25lIGlzIG9wZW5cbiAgICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUiQxKTtcbiAgICBpZiAoYWxyZWFkeU9wZW4pIHtcbiAgICAgIE1vZGFsLmdldEluc3RhbmNlKGFscmVhZHlPcGVuKS5oaWRlKCk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldCk7XG4gICAgZGF0YS50b2dnbGUodGhpcyk7XG4gIH0pO1xuICBlbmFibGVEaXNtaXNzVHJpZ2dlcihNb2RhbCk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oTW9kYWwpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgb2ZmY2FudmFzLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkNiA9ICdvZmZjYW52YXMnO1xuICBjb25zdCBEQVRBX0tFWSQzID0gJ2JzLm9mZmNhbnZhcyc7XG4gIGNvbnN0IEVWRU5UX0tFWSQzID0gYC4ke0RBVEFfS0VZJDN9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZJDEgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSQyID0gYGxvYWQke0VWRU5UX0tFWSQzfSR7REFUQV9BUElfS0VZJDF9YDtcbiAgY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckMyA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HJDEgPSAnc2hvd2luZyc7XG4gIGNvbnN0IENMQVNTX05BTUVfSElESU5HID0gJ2hpZGluZyc7XG4gIGNvbnN0IENMQVNTX05BTUVfQkFDS0RST1AgPSAnb2ZmY2FudmFzLWJhY2tkcm9wJztcbiAgY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcub2ZmY2FudmFzLnNob3cnO1xuICBjb25zdCBFVkVOVF9TSE9XJDMgPSBgc2hvdyR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kMyA9IGBzaG93biR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfSElERSQzID0gYGhpZGUke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQzID0gYGhpZGRlbiR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMSA9IGBjbGljayR7RVZFTlRfS0VZJDN9JHtEQVRBX0FQSV9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVkkM31gO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQxID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXSc7XG4gIGNvbnN0IERlZmF1bHQkNSA9IHtcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICBzY3JvbGw6IGZhbHNlXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDUgPSB7XG4gICAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICAgIHNjcm9sbDogJ2Jvb2xlYW4nXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgT2ZmY2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKTtcbiAgICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKTtcbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkNTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkNjtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KTtcbiAgICB9XG4gICAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XJDMsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSk7XG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNTaG93biA9IHRydWU7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5zaG93KCk7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSk7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkckMSk7XG4gICAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwgfHwgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQzKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORyQxKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04kMywge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDMpO1xuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICB0aGlzLl9lbGVtZW50LmJsdXIoKTtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJRElORyk7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKCk7XG4gICAgICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDMsIENMQVNTX05BTUVfSElESU5HKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOJDMpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsYmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgICAgY29uc3QgY2xpY2tDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfTtcblxuICAgICAgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCk7XG4gICAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgICAgY2xhc3NOYW1lOiBDTEFTU19OQU1FX0JBQ0tEUk9QLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGlzQW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHJvb3RFbGVtZW50OiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgIGNsaWNrQ2FsbGJhY2s6IGlzVmlzaWJsZSA/IGNsaWNrQ2FsbGJhY2sgOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gICAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KTtcbiAgICB9XG4gICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMSwgU0VMRUNUT1JfREFUQV9UT0dHTEUkMSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKTtcbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfSElEREVOJDMsICgpID0+IHtcbiAgICAgIC8vIGZvY3VzIG9uIHRyaWdnZXIgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBhIHRvZ2dsZXIgb2YgYW4gb2ZmY2FudmFzLCB3aGlsZSBhbm90aGVyIGlzIG9wZW5cbiAgICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUik7XG4gICAgaWYgKGFscmVhZHlPcGVuICYmIGFscmVhZHlPcGVuICE9PSB0YXJnZXQpIHtcbiAgICAgIE9mZmNhbnZhcy5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KTtcbiAgICBkYXRhLnRvZ2dsZSh0aGlzKTtcbiAgfSk7XG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEkkMiwgKCkgPT4ge1xuICAgIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgU2VsZWN0b3JFbmdpbmUuZmluZChPUEVOX1NFTEVDVE9SKSkge1xuICAgICAgT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2Uoc2VsZWN0b3IpLnNob3coKTtcbiAgICB9XG4gIH0pO1xuICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZCgnW2FyaWEtbW9kYWxdW2NsYXNzKj1zaG93XVtjbGFzcyo9b2ZmY2FudmFzLV0nKSkge1xuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCkuaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyKE9mZmNhbnZhcyk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oT2ZmY2FudmFzKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvc2FuaXRpemVyLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCB1cmlBdHRyaWJ1dGVzID0gbmV3IFNldChbJ2JhY2tncm91bmQnLCAnY2l0ZScsICdocmVmJywgJ2l0ZW10eXBlJywgJ2xvbmdkZXNjJywgJ3Bvc3RlcicsICdzcmMnLCAneGxpbms6aHJlZiddKTtcbiAgY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pO1xuXG4gIC8qKlxuICAgKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIGEgY29tbW9ubHkgdXNlZnVsIHN1YnNldCBvZiBVUkxzIHRoYXQgYXJlIHNhZmUuXG4gICAqXG4gICAqIFNob3V0LW91dCB0byBBbmd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi8xMi4yLngvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAgICovXG4gIGNvbnN0IFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/Oig/Omh0dHBzP3xtYWlsdG98ZnRwfHRlbHxmaWxlfHNtcyk6fFteIyYvOj9dKig/OlsjLz9dfCQpKS9pO1xuXG4gIC8qKlxuICAgKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAgICpcbiAgICogU2hvdXQtb3V0IHRvIEFuZ3VsYXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzEyLjIueC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICAgKi9cbiAgY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFtcXGQrL2Etel0rPSokL2k7XG4gIGNvbnN0IGFsbG93ZWRBdHRyaWJ1dGUgPSAoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkgPT4ge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoYWxsb3dlZEF0dHJpYnV0ZUxpc3QuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgIGlmICh1cmlBdHRyaWJ1dGVzLmhhcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihTQUZFX1VSTF9QQVRURVJOLnRlc3QoYXR0cmlidXRlLm5vZGVWYWx1ZSkgfHwgREFUQV9VUkxfUEFUVEVSTi50ZXN0KGF0dHJpYnV0ZS5ub2RlVmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICAgIHJldHVybiBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoYXR0cmlidXRlUmVnZXggPT4gYXR0cmlidXRlUmVnZXggaW5zdGFuY2VvZiBSZWdFeHApLnNvbWUocmVnZXggPT4gcmVnZXgudGVzdChhdHRyaWJ1dGVOYW1lKSk7XG4gIH07XG4gIGNvbnN0IERlZmF1bHRBbGxvd2xpc3QgPSB7XG4gICAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICAgIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gICAgYXJlYTogW10sXG4gICAgYjogW10sXG4gICAgYnI6IFtdLFxuICAgIGNvbDogW10sXG4gICAgY29kZTogW10sXG4gICAgZGl2OiBbXSxcbiAgICBlbTogW10sXG4gICAgaHI6IFtdLFxuICAgIGgxOiBbXSxcbiAgICBoMjogW10sXG4gICAgaDM6IFtdLFxuICAgIGg0OiBbXSxcbiAgICBoNTogW10sXG4gICAgaDY6IFtdLFxuICAgIGk6IFtdLFxuICAgIGltZzogWydzcmMnLCAnc3Jjc2V0JywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgICBsaTogW10sXG4gICAgb2w6IFtdLFxuICAgIHA6IFtdLFxuICAgIHByZTogW10sXG4gICAgczogW10sXG4gICAgc21hbGw6IFtdLFxuICAgIHNwYW46IFtdLFxuICAgIHN1YjogW10sXG4gICAgc3VwOiBbXSxcbiAgICBzdHJvbmc6IFtdLFxuICAgIHU6IFtdLFxuICAgIHVsOiBbXVxuICB9O1xuICBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgYWxsb3dMaXN0LCBzYW5pdGl6ZUZ1bmN0aW9uKSB7XG4gICAgaWYgKCF1bnNhZmVIdG1sLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHVuc2FmZUh0bWw7XG4gICAgfVxuICAgIGlmIChzYW5pdGl6ZUZ1bmN0aW9uICYmIHR5cGVvZiBzYW5pdGl6ZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2FuaXRpemVGdW5jdGlvbih1bnNhZmVIdG1sKTtcbiAgICB9XG4gICAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKTtcbiAgICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKTtcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdLmNvbmNhdCguLi5jcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpO1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgY29uc3QgZWxlbWVudE5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKGFsbG93TGlzdCkuaW5jbHVkZXMoZWxlbWVudE5hbWUpKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdLmNvbmNhdCguLi5lbGVtZW50LmF0dHJpYnV0ZXMpO1xuICAgICAgY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoYWxsb3dMaXN0WycqJ10gfHwgW10sIGFsbG93TGlzdFtlbGVtZW50TmFtZV0gfHwgW10pO1xuICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlTGlzdCkge1xuICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlcykpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUw7XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvdGVtcGxhdGUtZmFjdG9yeS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDUgPSAnVGVtcGxhdGVGYWN0b3J5JztcbiAgY29uc3QgRGVmYXVsdCQ0ID0ge1xuICAgIGFsbG93TGlzdDogRGVmYXVsdEFsbG93bGlzdCxcbiAgICBjb250ZW50OiB7fSxcbiAgICAvLyB7IHNlbGVjdG9yIDogdGV4dCAsICBzZWxlY3RvcjIgOiB0ZXh0MiAsIH1cbiAgICBleHRyYUNsYXNzOiAnJyxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBzYW5pdGl6ZTogdHJ1ZSxcbiAgICBzYW5pdGl6ZUZuOiBudWxsLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48L2Rpdj4nXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDQgPSB7XG4gICAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgICBjb250ZW50OiAnb2JqZWN0JyxcbiAgICBleHRyYUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIGh0bWw6ICdib29sZWFuJyxcbiAgICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICAgIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICAgIHRlbXBsYXRlOiAnc3RyaW5nJ1xuICB9O1xuICBjb25zdCBEZWZhdWx0Q29udGVudFR5cGUgPSB7XG4gICAgZW50cnk6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb258bnVsbCknLFxuICAgIHNlbGVjdG9yOiAnKHN0cmluZ3xlbGVtZW50KSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBUZW1wbGF0ZUZhY3RvcnkgZXh0ZW5kcyBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ0O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDQ7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDU7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgZ2V0Q29udGVudCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KS5tYXAoY29uZmlnID0+IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGNvbmZpZykpLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG4gICAgaGFzQ29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldENvbnRlbnQoKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBjaGFuZ2VDb250ZW50KGNvbnRlbnQpIHtcbiAgICAgIHRoaXMuX2NoZWNrQ29udGVudChjb250ZW50KTtcbiAgICAgIHRoaXMuX2NvbmZpZy5jb250ZW50ID0ge1xuICAgICAgICAuLi50aGlzLl9jb25maWcuY29udGVudCxcbiAgICAgICAgLi4uY29udGVudFxuICAgICAgfTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b0h0bWwoKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRlbXBsYXRlV3JhcHBlci5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKHRoaXMuX2NvbmZpZy50ZW1wbGF0ZSk7XG4gICAgICBmb3IgKGNvbnN0IFtzZWxlY3RvciwgdGV4dF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnLmNvbnRlbnQpKSB7XG4gICAgICAgIHRoaXMuX3NldENvbnRlbnQodGVtcGxhdGVXcmFwcGVyLCB0ZXh0LCBzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRlbXBsYXRlV3JhcHBlci5jaGlsZHJlblswXTtcbiAgICAgIGNvbnN0IGV4dHJhQ2xhc3MgPSB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuZXh0cmFDbGFzcyk7XG4gICAgICBpZiAoZXh0cmFDbGFzcykge1xuICAgICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKC4uLmV4dHJhQ2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF90eXBlQ2hlY2tDb25maWcoY29uZmlnKSB7XG4gICAgICBzdXBlci5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl9jaGVja0NvbnRlbnQoY29uZmlnLmNvbnRlbnQpO1xuICAgIH1cbiAgICBfY2hlY2tDb250ZW50KGFyZykge1xuICAgICAgZm9yIChjb25zdCBbc2VsZWN0b3IsIGNvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGFyZykpIHtcbiAgICAgICAgc3VwZXIuX3R5cGVDaGVja0NvbmZpZyh7XG4gICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgZW50cnk6IGNvbnRlbnRcbiAgICAgICAgfSwgRGVmYXVsdENvbnRlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3NldENvbnRlbnQodGVtcGxhdGUsIGNvbnRlbnQsIHNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCB0ZW1wbGF0ZSk7XG4gICAgICBpZiAoIXRlbXBsYXRlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb250ZW50ID0gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oY29udGVudCk7XG4gICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgdGVtcGxhdGVFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaXNFbGVtZW50JDEoY29udGVudCkpIHtcbiAgICAgICAgdGhpcy5fcHV0RWxlbWVudEluVGVtcGxhdGUoZ2V0RWxlbWVudChjb250ZW50KSwgdGVtcGxhdGVFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKGNvbnRlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIH1cbiAgICBfbWF5YmVTYW5pdGl6ZShhcmcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25maWcuc2FuaXRpemUgPyBzYW5pdGl6ZUh0bWwoYXJnLCB0aGlzLl9jb25maWcuYWxsb3dMaXN0LCB0aGlzLl9jb25maWcuc2FuaXRpemVGbikgOiBhcmc7XG4gICAgfVxuICAgIF9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBleGVjdXRlKGFyZywgW3RoaXNdKTtcbiAgICB9XG4gICAgX3B1dEVsZW1lbnRJblRlbXBsYXRlKGVsZW1lbnQsIHRlbXBsYXRlRWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGVtcGxhdGVFbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGVtcGxhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHRvb2x0aXAuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQ0ID0gJ3Rvb2x0aXAnO1xuICBjb25zdCBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBuZXcgU2V0KFsnc2FuaXRpemUnLCAnYWxsb3dMaXN0JywgJ3Nhbml0aXplRm4nXSk7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQyID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX01PREFMID0gJ21vZGFsJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDIgPSAnc2hvdyc7XG4gIGNvbnN0IFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIgPSAnLnRvb2x0aXAtaW5uZXInO1xuICBjb25zdCBTRUxFQ1RPUl9NT0RBTCA9IGAuJHtDTEFTU19OQU1FX01PREFMfWA7XG4gIGNvbnN0IEVWRU5UX01PREFMX0hJREUgPSAnaGlkZS5icy5tb2RhbCc7XG4gIGNvbnN0IFRSSUdHRVJfSE9WRVIgPSAnaG92ZXInO1xuICBjb25zdCBUUklHR0VSX0ZPQ1VTID0gJ2ZvY3VzJztcbiAgY29uc3QgVFJJR0dFUl9DTElDSyA9ICdjbGljayc7XG4gIGNvbnN0IFRSSUdHRVJfTUFOVUFMID0gJ21hbnVhbCc7XG4gIGNvbnN0IEVWRU5UX0hJREUkMiA9ICdoaWRlJztcbiAgY29uc3QgRVZFTlRfSElEREVOJDIgPSAnaGlkZGVuJztcbiAgY29uc3QgRVZFTlRfU0hPVyQyID0gJ3Nob3cnO1xuICBjb25zdCBFVkVOVF9TSE9XTiQyID0gJ3Nob3duJztcbiAgY29uc3QgRVZFTlRfSU5TRVJURUQgPSAnaW5zZXJ0ZWQnO1xuICBjb25zdCBFVkVOVF9DTElDSyQxID0gJ2NsaWNrJztcbiAgY29uc3QgRVZFTlRfRk9DVVNJTiQxID0gJ2ZvY3VzaW4nO1xuICBjb25zdCBFVkVOVF9GT0NVU09VVCQxID0gJ2ZvY3Vzb3V0JztcbiAgY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9ICdtb3VzZWVudGVyJztcbiAgY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9ICdtb3VzZWxlYXZlJztcbiAgY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgICBBVVRPOiAnYXV0bycsXG4gICAgVE9QOiAndG9wJyxcbiAgICBSSUdIVDogaXNSVEwoKSA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gICAgQk9UVE9NOiAnYm90dG9tJyxcbiAgICBMRUZUOiBpc1JUTCgpID8gJ3JpZ2h0JyA6ICdsZWZ0J1xuICB9O1xuICBjb25zdCBEZWZhdWx0JDMgPSB7XG4gICAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gICAgY29udGFpbmVyOiBmYWxzZSxcbiAgICBjdXN0b21DbGFzczogJycsXG4gICAgZGVsYXk6IDAsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnRzOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLFxuICAgIGh0bWw6IGZhbHNlLFxuICAgIG9mZnNldDogWzAsIDBdLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICAgIHNhbml0aXplOiB0cnVlLFxuICAgIHNhbml0aXplRm46IG51bGwsXG4gICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+JyArICc8L2Rpdj4nLFxuICAgIHRpdGxlOiAnJyxcbiAgICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDMgPSB7XG4gICAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICAgIGNvbnRhaW5lcjogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gICAgY3VzdG9tQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgZGVsYXk6ICcobnVtYmVyfG9iamVjdCknLFxuICAgIGZhbGxiYWNrUGxhY2VtZW50czogJ2FycmF5JyxcbiAgICBodG1sOiAnYm9vbGVhbicsXG4gICAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICAgIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICAgIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gICAgdGVtcGxhdGU6ICdzdHJpbmcnLFxuICAgIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gICAgdHJpZ2dlcjogJ3N0cmluZydcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBUb29sdGlwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpO1xuICAgICAgfVxuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcblxuICAgICAgLy8gUHJpdmF0ZVxuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSAwO1xuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkgPSBudWxsO1xuICAgICAgdGhpcy5fbmV3Q29udGVudCA9IG51bGw7XG5cbiAgICAgIC8vIFByb3RlY3RlZFxuICAgICAgdGhpcy50aXAgPSBudWxsO1xuICAgICAgdGhpcy5fc2V0TGlzdGVuZXJzKCk7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9maXhUaXRsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQzO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDM7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDQ7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgZW5hYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0b2dnbGVFbmFibGVkKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZDtcbiAgICB9XG4gICAgdG9nZ2xlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICF0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrO1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICB0aGlzLl9sZWF2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9lbnRlcigpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTU9EQUwpLCBFVkVOVF9NT0RBTF9ISURFLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKTtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJykpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuX2lzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1ckMikpO1xuICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGZpbmRTaGFkb3dSb290KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgY29uc3QgaXNJblRoZURvbSA9IChzaGFkb3dSb290IHx8IHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gdG9kbyB2NiByZW1vdmUgdGhpcyBPUiBtYWtlIGl0IG9wdGlvbmFsXG4gICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKCk7XG4gICAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUaXBFbGVtZW50KCk7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcC5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb250YWluZXJcbiAgICAgIH0gPSB0aGlzLl9jb25maWc7XG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGlwKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSU5TRVJURUQpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BvcHBlciA9IHRoaXMuX2NyZWF0ZVBvcHBlcih0aXApO1xuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1dOJDIpKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLl9sZWF2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSElERSQyKSk7XG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfQ0xJQ0tdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfRk9DVVNdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfSE9WRVJdID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBudWxsOyAvLyBpdCBpcyBhIHRyaWNrIHRvIHN1cHBvcnQgbWFudWFsIHRyaWdnZXJpbmdcblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSElEREVOJDIpKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgdGhpcy5faXNBbmltYXRlZCgpKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLl9nZXRUaXRsZSgpKTtcbiAgICB9XG4gICAgX2dldFRpcEVsZW1lbnQoKSB7XG4gICAgICBpZiAoIXRoaXMudGlwKSB7XG4gICAgICAgIHRoaXMudGlwID0gdGhpcy5fY3JlYXRlVGlwRWxlbWVudCh0aGlzLl9uZXdDb250ZW50IHx8IHRoaXMuX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRpcDtcbiAgICB9XG4gICAgX2NyZWF0ZVRpcEVsZW1lbnQoY29udGVudCkge1xuICAgICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGVtcGxhdGVGYWN0b3J5KGNvbnRlbnQpLnRvSHRtbCgpO1xuXG4gICAgICAvLyB0b2RvOiByZW1vdmUgdGhpcyBjaGVjayBvbiB2NlxuICAgICAgaWYgKCF0aXApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUkMiwgQ0xBU1NfTkFNRV9TSE9XJDIpO1xuICAgICAgLy8gdG9kbzogb24gdjYgdGhlIGZvbGxvd2luZyBjYW4gYmUgYWNoaWV2ZWQgd2l0aCBDU1Mgb25seVxuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoYGJzLSR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hdXRvYCk7XG4gICAgICBjb25zdCB0aXBJZCA9IGdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpLnRvU3RyaW5nKCk7XG4gICAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKTtcbiAgICAgIGlmICh0aGlzLl9pc0FuaW1hdGVkKCkpIHtcbiAgICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFJDIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRpcDtcbiAgICB9XG4gICAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgICB0aGlzLl9uZXdDb250ZW50ID0gY29udGVudDtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2dldFRlbXBsYXRlRmFjdG9yeShjb250ZW50KSB7XG4gICAgICBpZiAodGhpcy5fdGVtcGxhdGVGYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeS5jaGFuZ2VDb250ZW50KGNvbnRlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5ID0gbmV3IFRlbXBsYXRlRmFjdG9yeSh7XG4gICAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAgIC8vIHRoZSBgY29udGVudGAgdmFyIGhhcyB0byBiZSBhZnRlciBgdGhpcy5fY29uZmlnYFxuICAgICAgICAgIC8vIHRvIG92ZXJyaWRlIGNvbmZpZy5jb250ZW50IGluIGNhc2Ugb2YgcG9wb3ZlclxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgZXh0cmFDbGFzczogdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmN1c3RvbUNsYXNzKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZUZhY3Rvcnk7XG4gICAgfVxuICAgIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbU0VMRUNUT1JfVE9PTFRJUF9JTk5FUl06IHRoaXMuX2dldFRpdGxlKClcbiAgICAgIH07XG4gICAgfVxuICAgIF9nZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcudGl0bGUpIHx8IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJyk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldE9yQ3JlYXRlSW5zdGFuY2UoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgIH1cbiAgICBfaXNBbmltYXRlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25maWcuYW5pbWF0aW9uIHx8IHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkMik7XG4gICAgfVxuICAgIF9pc1Nob3duKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckMik7XG4gICAgfVxuICAgIF9jcmVhdGVQb3BwZXIodGlwKSB7XG4gICAgICBjb25zdCBwbGFjZW1lbnQgPSBleGVjdXRlKHRoaXMuX2NvbmZpZy5wbGFjZW1lbnQsIFt0aGlzLCB0aXAsIHRoaXMuX2VsZW1lbnRdKTtcbiAgICAgIGNvbnN0IGF0dGFjaG1lbnQgPSBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXTtcbiAgICAgIHJldHVybiBjcmVhdGVQb3BwZXIodGhpcy5fZWxlbWVudCwgdGlwLCB0aGlzLl9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkpO1xuICAgIH1cbiAgICBfZ2V0T2Zmc2V0KCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBvZmZzZXRcbiAgICAgIH0gPSB0aGlzLl9jb25maWc7XG4gICAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VJbnQodmFsdWUsIDEwKSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH1cbiAgICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gZXhlY3V0ZShhcmcsIFt0aGlzLl9lbGVtZW50XSk7XG4gICAgfVxuICAgIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiB0aGlzLl9jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRzXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnYXJyb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGAuJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWFycm93YFxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdwcmVTZXRQbGFjZW1lbnQnLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGhhc2U6ICdiZWZvcmVNYWluJyxcbiAgICAgICAgICBmbjogZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBQcmUtc2V0IFBvcHBlcidzIHBsYWNlbWVudCBhdHRyaWJ1dGUgaW4gb3JkZXIgdG8gcmVhZCB0aGUgYXJyb3cgc2l6ZXMgcHJvcGVybHkuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIFBvcHBlciBtaXhlcyB1cCB0aGUgd2lkdGggYW5kIGhlaWdodCBkaW1lbnNpb25zIHNpbmNlIHRoZSBpbml0aWFsIGFycm93IHN0eWxlIGlzIGZvciB0b3AgcGxhY2VtZW50XG4gICAgICAgICAgICB0aGlzLl9nZXRUaXBFbGVtZW50KCkuc2V0QXR0cmlidXRlKCdkYXRhLXBvcHBlci1wbGFjZW1lbnQnLCBkYXRhLnN0YXRlLnBsYWNlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgICAgLi4uZXhlY3V0ZSh0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnLCBbZGVmYXVsdEJzUG9wcGVyQ29uZmlnXSlcbiAgICAgIH07XG4gICAgfVxuICAgIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuX2NvbmZpZy50cmlnZ2VyLnNwbGl0KCcgJyk7XG4gICAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdHJpZ2dlcnMpIHtcbiAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfQ0xJQ0skMSksIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCk7XG4gICAgICAgICAgICBjb250ZXh0LnRvZ2dsZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRSSUdHRVJfTUFOVUFMKSB7XG4gICAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgPyB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9NT1VTRUVOVEVSKSA6IHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTSU4kMSk7XG4gICAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID8gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VMRUFWRSkgOiB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9GT0NVU09VVCQxKTtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRJbiwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KTtcbiAgICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnRleHQuX2VudGVyKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50T3V0LCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpO1xuICAgICAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gY29udGV4dC5fZWxlbWVudC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnRleHQuX2xlYXZlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcik7XG4gICAgfVxuICAgIF9maXhUaXRsZSgpIHtcbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSAmJiAhdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aXRsZSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScsIHRpdGxlKTsgLy8gRE8gTk9UIFVTRSBJVC4gSXMgb25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xuICAgIH1cbiAgICBfZW50ZXIoKSB7XG4gICAgICBpZiAodGhpcy5faXNTaG93bigpIHx8IHRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICB0aGlzLl9pc0hvdmVyZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5LnNob3cpO1xuICAgIH1cbiAgICBfbGVhdmUoKSB7XG4gICAgICBpZiAodGhpcy5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheS5oaWRlKTtcbiAgICB9XG4gICAgX3NldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCk7XG4gICAgfVxuICAgIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fYWN0aXZlVHJpZ2dlcikuaW5jbHVkZXModHJ1ZSk7XG4gICAgfVxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25zdCBkYXRhQXR0cmlidXRlcyA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgZm9yIChjb25zdCBkYXRhQXR0cmlidXRlIG9mIE9iamVjdC5rZXlzKGRhdGFBdHRyaWJ1dGVzKSkge1xuICAgICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmhhcyhkYXRhQXR0cmlidXRlKSkge1xuICAgICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cmlidXRlXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uZmlnID0ge1xuICAgICAgICAuLi5kYXRhQXR0cmlidXRlcyxcbiAgICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgICAgfTtcbiAgICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZyk7XG4gICAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZyk7XG4gICAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgY29uZmlnLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlID8gZG9jdW1lbnQuYm9keSA6IGdldEVsZW1lbnQoY29uZmlnLmNvbnRhaW5lcik7XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHt9O1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnKSkge1xuICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgY29uZmlnW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uZmlnLnNlbGVjdG9yID0gZmFsc2U7XG4gICAgICBjb25maWcudHJpZ2dlciA9ICdtYW51YWwnO1xuXG4gICAgICAvLyBJbiB0aGUgZnV0dXJlIGNhbiBiZSByZXBsYWNlZCB3aXRoOlxuICAgICAgLy8gY29uc3Qga2V5c1dpdGhEaWZmZXJlbnRWYWx1ZXMgPSBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcpLmZpbHRlcihlbnRyeSA9PiB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRbZW50cnlbMF1dICE9PSB0aGlzLl9jb25maWdbZW50cnlbMF1dKVxuICAgICAgLy8gYE9iamVjdC5mcm9tRW50cmllcyhrZXlzV2l0aERpZmZlcmVudFZhbHVlcylgXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfZGlzcG9zZVBvcHBlcigpIHtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgICB0aGlzLnRpcC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy50aXAgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFRvb2x0aXAuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvb2x0aXApO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgcG9wb3Zlci5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDMgPSAncG9wb3Zlcic7XG4gIGNvbnN0IFNFTEVDVE9SX1RJVExFID0gJy5wb3BvdmVyLWhlYWRlcic7XG4gIGNvbnN0IFNFTEVDVE9SX0NPTlRFTlQgPSAnLnBvcG92ZXItYm9keSc7XG4gIGNvbnN0IERlZmF1bHQkMiA9IHtcbiAgICAuLi5Ub29sdGlwLkRlZmF1bHQsXG4gICAgY29udGVudDogJycsXG4gICAgb2Zmc2V0OiBbMCwgOF0sXG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48L2Rpdj4nICsgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICsgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj4nICsgJzwvZGl2PicsXG4gICAgdHJpZ2dlcjogJ2NsaWNrJ1xuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQyID0ge1xuICAgIC4uLlRvb2x0aXAuRGVmYXVsdFR5cGUsXG4gICAgY29udGVudDogJyhudWxsfHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDI7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkMjtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkMztcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZXNcbiAgICBfaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRUaXRsZSgpIHx8IHRoaXMuX2dldENvbnRlbnQoKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtTRUxFQ1RPUl9USVRMRV06IHRoaXMuX2dldFRpdGxlKCksXG4gICAgICAgIFtTRUxFQ1RPUl9DT05URU5UXTogdGhpcy5fZ2V0Q29udGVudCgpXG4gICAgICB9O1xuICAgIH1cbiAgICBfZ2V0Q29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY29udGVudCk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gUG9wb3Zlci5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oUG9wb3Zlcik7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBzY3JvbGxzcHkuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQyID0gJ3Njcm9sbHNweSc7XG4gIGNvbnN0IERBVEFfS0VZJDIgPSAnYnMuc2Nyb2xsc3B5JztcbiAgY29uc3QgRVZFTlRfS0VZJDIgPSBgLiR7REFUQV9LRVkkMn1gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBgYWN0aXZhdGUke0VWRU5UX0tFWSQyfWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLID0gYGNsaWNrJHtFVkVOVF9LRVkkMn1gO1xuICBjb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJJDEgPSBgbG9hZCR7RVZFTlRfS0VZJDJ9JHtEQVRBX0FQSV9LRVl9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNID0gJ2Ryb3Bkb3duLWl0ZW0nO1xuICBjb25zdCBDTEFTU19OQU1FX0FDVElWRSQxID0gJ2FjdGl2ZSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfU1BZID0gJ1tkYXRhLWJzLXNweT1cInNjcm9sbFwiXSc7XG4gIGNvbnN0IFNFTEVDVE9SX1RBUkdFVF9MSU5LUyA9ICdbaHJlZl0nO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCc7XG4gIGNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJztcbiAgY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJztcbiAgY29uc3QgU0VMRUNUT1JfTElOS19JVEVNUyA9IGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTkFWX0lURU1TfSA+ICR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9MSVNUX0lURU1TfWA7XG4gIGNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bic7XG4gIGNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSQxID0gJy5kcm9wZG93bi10b2dnbGUnO1xuICBjb25zdCBEZWZhdWx0JDEgPSB7XG4gICAgb2Zmc2V0OiBudWxsLFxuICAgIC8vIFRPRE86IHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gICAgcm9vdE1hcmdpbjogJzBweCAwcHggLTI1JScsXG4gICAgc21vb3RoU2Nyb2xsOiBmYWxzZSxcbiAgICB0YXJnZXQ6IG51bGwsXG4gICAgdGhyZXNob2xkOiBbMC4xLCAwLjUsIDFdXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDEgPSB7XG4gICAgb2Zmc2V0OiAnKG51bWJlcnxudWxsKScsXG4gICAgLy8gVE9ETyB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICAgIHJvb3RNYXJnaW46ICdzdHJpbmcnLFxuICAgIHNtb290aFNjcm9sbDogJ2Jvb2xlYW4nLFxuICAgIHRhcmdldDogJ2VsZW1lbnQnLFxuICAgIHRocmVzaG9sZDogJ2FycmF5J1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFNjcm9sbFNweSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcblxuICAgICAgLy8gdGhpcy5fZWxlbWVudCBpcyB0aGUgb2JzZXJ2YWJsZXNDb250YWluZXIgYW5kIGNvbmZpZy50YXJnZXQgdGhlIG1lbnUgbGlua3Mgd3JhcHBlclxuICAgICAgdGhpcy5fdGFyZ2V0TGlua3MgPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLl9yb290RWxlbWVudCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWxlbWVudCkub3ZlcmZsb3dZID09PSAndmlzaWJsZScgPyBudWxsIDogdGhpcy5fZWxlbWVudDtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGw7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEgPSB7XG4gICAgICAgIHZpc2libGVFbnRyeVRvcDogMCxcbiAgICAgICAgcGFyZW50U2Nyb2xsVG9wOiAwXG4gICAgICB9O1xuICAgICAgdGhpcy5yZWZyZXNoKCk7IC8vIGluaXRpYWxpemVcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkMTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQxO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQyO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHJlZnJlc2goKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKCk7XG4gICAgICB0aGlzLl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpO1xuICAgICAgaWYgKHRoaXMuX29ic2VydmVyKSB7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gdGhpcy5fZ2V0TmV3T2JzZXJ2ZXIoKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMudmFsdWVzKCkpIHtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgICAvLyBUT0RPOiBvbiB2NiB0YXJnZXQgc2hvdWxkIGJlIGdpdmVuIGV4cGxpY2l0bHkgJiByZW1vdmUgdGhlIHt0YXJnZXQ6ICdzcy10YXJnZXQnfSBjYXNlXG4gICAgICBjb25maWcudGFyZ2V0ID0gZ2V0RWxlbWVudChjb25maWcudGFyZ2V0KSB8fCBkb2N1bWVudC5ib2R5O1xuXG4gICAgICAvLyBUT0RPOiB2NiBPbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zLiBVc2Ugcm9vdE1hcmdpbiBvbmx5XG4gICAgICBjb25maWcucm9vdE1hcmdpbiA9IGNvbmZpZy5vZmZzZXQgPyBgJHtjb25maWcub2Zmc2V0fXB4IDBweCAtMzAlYCA6IGNvbmZpZy5yb290TWFyZ2luO1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcudGhyZXNob2xkID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25maWcudGhyZXNob2xkID0gY29uZmlnLnRocmVzaG9sZC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCkge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc21vb3RoU2Nyb2xsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gdW5yZWdpc3RlciBhbnkgcHJldmlvdXMgbGlzdGVuZXJzXG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSywgU0VMRUNUT1JfVEFSR0VUX0xJTktTLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLmdldChldmVudC50YXJnZXQuaGFzaCk7XG4gICAgICAgIGlmIChvYnNlcnZhYmxlU2VjdGlvbikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuX3Jvb3RFbGVtZW50IHx8IHdpbmRvdztcbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSBvYnNlcnZhYmxlU2VjdGlvbi5vZmZzZXRUb3AgLSB0aGlzLl9lbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgICAgICBpZiAocm9vdC5zY3JvbGxUbykge1xuICAgICAgICAgICAgcm9vdC5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgIHRvcDogaGVpZ2h0LFxuICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENocm9tZSA2MCBkb2Vzbid0IHN1cHBvcnQgYHNjcm9sbFRvYFxuICAgICAgICAgIHJvb3Quc2Nyb2xsVG9wID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgX2dldE5ld09ic2VydmVyKCkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgcm9vdDogdGhpcy5fcm9vdEVsZW1lbnQsXG4gICAgICAgIHRocmVzaG9sZDogdGhpcy5fY29uZmlnLnRocmVzaG9sZCxcbiAgICAgICAgcm9vdE1hcmdpbjogdGhpcy5fY29uZmlnLnJvb3RNYXJnaW5cbiAgICAgIH07XG4gICAgICByZXR1cm4gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4gdGhpcy5fb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gVGhlIGxvZ2ljIG9mIHNlbGVjdGlvblxuICAgIF9vYnNlcnZlckNhbGxiYWNrKGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlbnRyeSA9PiB0aGlzLl90YXJnZXRMaW5rcy5nZXQoYCMke2VudHJ5LnRhcmdldC5pZH1gKTtcbiAgICAgIGNvbnN0IGFjdGl2YXRlID0gZW50cnkgPT4ge1xuICAgICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcDtcbiAgICAgICAgdGhpcy5fcHJvY2Vzcyh0YXJnZXRFbGVtZW50KGVudHJ5KSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcGFyZW50U2Nyb2xsVG9wID0gKHRoaXMuX3Jvb3RFbGVtZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuc2Nyb2xsVG9wO1xuICAgICAgY29uc3QgdXNlclNjcm9sbHNEb3duID0gcGFyZW50U2Nyb2xsVG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3A7XG4gICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wID0gcGFyZW50U2Nyb2xsVG9wO1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsO1xuICAgICAgICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcDtcbiAgICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyBkb3duLCBwaWNrIHRoZSBiaWdnZXIgb2Zmc2V0VG9wXG4gICAgICAgIGlmICh1c2VyU2Nyb2xsc0Rvd24gJiYgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgICAgYWN0aXZhdGUoZW50cnkpO1xuICAgICAgICAgIC8vIGlmIHBhcmVudCBpc24ndCBzY3JvbGxlZCwgbGV0J3Mga2VlcCB0aGUgZmlyc3QgdmlzaWJsZSBpdGVtLCBicmVha2luZyB0aGUgaXRlcmF0aW9uXG4gICAgICAgICAgaWYgKCFwYXJlbnRTY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB3ZSBhcmUgc2Nyb2xsaW5nIHVwLCBwaWNrIHRoZSBzbWFsbGVzdCBvZmZzZXRUb3BcbiAgICAgICAgaWYgKCF1c2VyU2Nyb2xsc0Rvd24gJiYgIWVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICAgIGFjdGl2YXRlKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBfaW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpIHtcbiAgICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpO1xuICAgICAgY29uc3QgdGFyZ2V0TGlua3MgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgdGhpcy5fY29uZmlnLnRhcmdldCk7XG4gICAgICBmb3IgKGNvbnN0IGFuY2hvciBvZiB0YXJnZXRMaW5rcykge1xuICAgICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYW5jaG9yIGhhcyBhbiBpZCBhbmQgaXMgbm90IGRpc2FibGVkXG4gICAgICAgIGlmICghYW5jaG9yLmhhc2ggfHwgaXNEaXNhYmxlZChhbmNob3IpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZVNlY3Rpb24gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKGFuY2hvci5oYXNoLCB0aGlzLl9lbGVtZW50KTtcblxuICAgICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgb2JzZXJ2YWJsZVNlY3Rpb24gZXhpc3RzICYgaXMgdmlzaWJsZVxuICAgICAgICBpZiAoaXNWaXNpYmxlKG9ic2VydmFibGVTZWN0aW9uKSkge1xuICAgICAgICAgIHRoaXMuX3RhcmdldExpbmtzLnNldChhbmNob3IuaGFzaCwgYW5jaG9yKTtcbiAgICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuc2V0KGFuY2hvci5oYXNoLCBvYnNlcnZhYmxlU2VjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgX3Byb2Nlc3ModGFyZ2V0KSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0aGlzLl9jb25maWcudGFyZ2V0KTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldDtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgdGhpcy5fYWN0aXZhdGVQYXJlbnRzKHRhcmdldCk7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0YXJnZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBfYWN0aXZhdGVQYXJlbnRzKHRhcmdldCkge1xuICAgICAgLy8gQWN0aXZhdGUgZHJvcGRvd24gcGFyZW50c1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSQxLCB0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgbGlzdEdyb3VwIG9mIFNlbGVjdG9yRW5naW5lLnBhcmVudHModGFyZ2V0LCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCkpIHtcbiAgICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBTRUxFQ1RPUl9MSU5LX0lURU1TKSkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBfY2xlYXJBY3RpdmVDbGFzcyhwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgY29uc3QgYWN0aXZlTm9kZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKGAke1NFTEVDVE9SX1RBUkdFVF9MSU5LU30uJHtDTEFTU19OQU1FX0FDVElWRSQxfWAsIHBhcmVudCk7XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYWN0aXZlTm9kZXMpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEkkMSwgKCkgPT4ge1xuICAgIGZvciAoY29uc3Qgc3B5IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9TUFkpKSB7XG4gICAgICBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZShzcHkpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oU2Nyb2xsU3B5KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHRhYi5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDEgPSAndGFiJztcbiAgY29uc3QgREFUQV9LRVkkMSA9ICdicy50YWInO1xuICBjb25zdCBFVkVOVF9LRVkkMSA9IGAuJHtEQVRBX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX0hJREUkMSA9IGBoaWRlJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9ISURERU4kMSA9IGBoaWRkZW4ke0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX1NIT1ckMSA9IGBzaG93JHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9TSE9XTiQxID0gYHNob3duJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCc7XG4gIGNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0JztcbiAgY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnO1xuICBjb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nO1xuICBjb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnO1xuICBjb25zdCBDTEFTU19OQU1FX0ZBREUkMSA9ICdmYWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDEgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX0RST1BET1dOID0gJ2Ryb3Bkb3duJztcbiAgY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnO1xuICBjb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VID0gJy5kcm9wZG93bi1tZW51JztcbiAgY29uc3QgTk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICc6bm90KC5kcm9wZG93bi10b2dnbGUpJztcbiAgY29uc3QgU0VMRUNUT1JfVEFCX1BBTkVMID0gJy5saXN0LWdyb3VwLCAubmF2LCBbcm9sZT1cInRhYmxpc3RcIl0nO1xuICBjb25zdCBTRUxFQ1RPUl9PVVRFUiA9ICcubmF2LWl0ZW0sIC5saXN0LWdyb3VwLWl0ZW0nO1xuICBjb25zdCBTRUxFQ1RPUl9JTk5FUiA9IGAubmF2LWxpbmske05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCAubGlzdC1ncm91cC1pdGVtJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgW3JvbGU9XCJ0YWJcIl0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9YDtcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdJzsgLy8gdG9kbzp2NjogY291bGQgYmUgb25seSBgdGFiYFxuICBjb25zdCBTRUxFQ1RPUl9JTk5FUl9FTEVNID0gYCR7U0VMRUNUT1JfSU5ORVJ9LCAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfWA7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSA9IGAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl1gO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFRhYiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX1RBQl9QQU5FTCk7XG4gICAgICBpZiAoIXRoaXMuX3BhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIHRvZG86IHNob3VsZCBUaHJvdyBleGNlcHRpb24gb24gdjZcbiAgICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtlbGVtZW50Lm91dGVySFRNTH0gaGFzIG5vdCBhIHZhbGlkIHBhcmVudCAke1NFTEVDVE9SX0lOTkVSX0VMRU19YClcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHVwIGluaXRpYWwgYXJpYSBhdHRyaWJ1dGVzXG4gICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlcyh0aGlzLl9wYXJlbnQsIHRoaXMuX2dldENoaWxkcmVuKCkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkMTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBzaG93KCkge1xuICAgICAgLy8gU2hvd3MgdGhpcyBlbGVtIGFuZCBkZWFjdGl2YXRlIHRoZSBhY3RpdmUgc2libGluZyBpZiBleGlzdHNcbiAgICAgIGNvbnN0IGlubmVyRWxlbSA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5fZWxlbUlzQWN0aXZlKGlubmVyRWxlbSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWFyY2ggZm9yIGFjdGl2ZSB0YWIgb24gc2FtZSBwYXJlbnQgdG8gZGVhY3RpdmF0ZSBpdFxuICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5fZ2V0QWN0aXZlRWxlbSgpO1xuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gYWN0aXZlID8gRXZlbnRIYW5kbGVyLnRyaWdnZXIoYWN0aXZlLCBFVkVOVF9ISURFJDEsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogaW5uZXJFbGVtXG4gICAgICB9KSA6IG51bGw7XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcihpbm5lckVsZW0sIEVWRU5UX1NIT1ckMSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBhY3RpdmVcbiAgICAgIH0pO1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8IGhpZGVFdmVudCAmJiBoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9kZWFjdGl2YXRlKGFjdGl2ZSwgaW5uZXJFbGVtKTtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKGlubmVyRWxlbSwgYWN0aXZlKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2FjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkpOyAvLyBTZWFyY2ggYW5kIGFjdGl2YXRlL3Nob3cgdGhlIHByb3BlciBzZWN0aW9uXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX1NIT1dOJDEsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkMSkpO1xuICAgIH1cbiAgICBfZGVhY3RpdmF0ZShlbGVtZW50LCByZWxhdGVkRWxlbSkge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgICBlbGVtZW50LmJsdXIoKTtcbiAgICAgIHRoaXMuX2RlYWN0aXZhdGUoU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSk7IC8vIFNlYXJjaCBhbmQgZGVhY3RpdmF0ZSB0aGUgc2hvd24gc2VjdGlvbiB0b29cblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckMSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9ISURERU4kMSwge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRFbGVtXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQxKSk7XG4gICAgfVxuICAgIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgICBpZiAoIVtBUlJPV19MRUZUX0tFWSwgQVJST1dfUklHSFRfS0VZLCBBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBzdG9wUHJvcGFnYXRpb24vcHJldmVudERlZmF1bHQgYm90aCBhZGRlZCB0byBzdXBwb3J0IHVwL2Rvd24ga2V5cyB3aXRob3V0IHNjcm9sbGluZyB0aGUgcGFnZVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGlzTmV4dCA9IFtBUlJPV19SSUdIVF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpO1xuICAgICAgY29uc3QgbmV4dEFjdGl2ZUVsZW1lbnQgPSBnZXROZXh0QWN0aXZlRWxlbWVudCh0aGlzLl9nZXRDaGlsZHJlbigpLmZpbHRlcihlbGVtZW50ID0+ICFpc0Rpc2FibGVkKGVsZW1lbnQpKSwgZXZlbnQudGFyZ2V0LCBpc05leHQsIHRydWUpO1xuICAgICAgaWYgKG5leHRBY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIG5leHRBY3RpdmVFbGVtZW50LmZvY3VzKHtcbiAgICAgICAgICBwcmV2ZW50U2Nyb2xsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShuZXh0QWN0aXZlRWxlbWVudCkuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgICBfZ2V0Q2hpbGRyZW4oKSB7XG4gICAgICAvLyBjb2xsZWN0aW9uIG9mIGlubmVyIGVsZW1lbnRzXG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JTk5FUl9FTEVNLCB0aGlzLl9wYXJlbnQpO1xuICAgIH1cbiAgICBfZ2V0QWN0aXZlRWxlbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbmQoY2hpbGQgPT4gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKSkgfHwgbnVsbDtcbiAgICB9XG4gICAgX3NldEluaXRpYWxBdHRyaWJ1dGVzKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHBhcmVudCwgJ3JvbGUnLCAndGFibGlzdCcpO1xuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX2dldElubmVyRWxlbWVudChjaGlsZCk7XG4gICAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2VsZW1Jc0FjdGl2ZShjaGlsZCk7XG4gICAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoY2hpbGQpO1xuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgaXNBY3RpdmUpO1xuICAgICAgaWYgKG91dGVyRWxlbSAhPT0gY2hpbGQpIHtcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMob3V0ZXJFbGVtLCAncm9sZScsICdwcmVzZW50YXRpb24nKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoY2hpbGQsICdyb2xlJywgJ3RhYicpO1xuXG4gICAgICAvLyBzZXQgYXR0cmlidXRlcyB0byB0aGUgcmVsYXRlZCBwYW5lbCB0b29cbiAgICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbChjaGlsZCk7XG4gICAgfVxuICAgIF9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoY2hpbGQpO1xuICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAncm9sZScsICd0YWJwYW5lbCcpO1xuICAgICAgaWYgKGNoaWxkLmlkKSB7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ2FyaWEtbGFiZWxsZWRieScsIGAke2NoaWxkLmlkfWApO1xuICAgICAgfVxuICAgIH1cbiAgICBfdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgb3Blbikge1xuICAgICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgaWYgKCFvdXRlckVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX0RST1BET1dOKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0b2dnbGUgPSAoc2VsZWN0b3IsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3Rvciwgb3V0ZXJFbGVtKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lLCBvcGVuKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRvZ2dsZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICAgIHRvZ2dsZShTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VLCBDTEFTU19OQU1FX1NIT1ckMSk7XG4gICAgICBvdXRlckVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgb3Blbik7XG4gICAgfVxuICAgIF9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9lbGVtSXNBY3RpdmUoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICB9XG5cbiAgICAvLyBUcnkgdG8gZ2V0IHRoZSBpbm5lciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWxpbmspXG4gICAgX2dldElubmVyRWxlbWVudChlbGVtKSB7XG4gICAgICByZXR1cm4gZWxlbS5tYXRjaGVzKFNFTEVDVE9SX0lOTkVSX0VMRU0pID8gZWxlbSA6IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ORVJfRUxFTSwgZWxlbSk7XG4gICAgfVxuXG4gICAgLy8gVHJ5IHRvIGdldCB0aGUgb3V0ZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1pdGVtKVxuICAgIF9nZXRPdXRlckVsZW1lbnQoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW0uY2xvc2VzdChTRUxFQ1RPUl9PVVRFUikgfHwgZWxlbTtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnNob3coKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgb24gZm9jdXNcbiAgICovXG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUpKSB7XG4gICAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihUYWIpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdG9hc3QuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSA9ICd0b2FzdCc7XG4gIGNvbnN0IERBVEFfS0VZID0gJ2JzLnRvYXN0JztcbiAgY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFT1ZFUiA9IGBtb3VzZW92ZXIke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9NT1VTRU9VVCA9IGBtb3VzZW91dCR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0ZPQ1VTT1VUID0gYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX0hJREUgPSAnaGlkZSc7IC8vIEBkZXByZWNhdGVkIC0ga2VwdCBoZXJlIG9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HID0gJ3Nob3dpbmcnO1xuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICAgIGRlbGF5OiAnbnVtYmVyJ1xuICB9O1xuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICBhdXRvaGlkZTogdHJ1ZSxcbiAgICBkZWxheTogNTAwMFxuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFRvYXN0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gICAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHNob3coKSB7XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKTtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jbGVhclRpbWVvdXQoKTtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpO1xuICAgICAgfVxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTik7XG4gICAgICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfSElERSk7IC8vIEBkZXByZWNhdGVkXG4gICAgICByZWZsb3codGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XLCBDTEFTU19OQU1FX1NIT1dJTkcpO1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbik7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpO1xuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURFKTsgLy8gQGRlcHJlY2F0ZWRcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORywgQ0xBU1NfTkFNRV9TSE9XKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2NvbmZpZy5hbmltYXRpb24pO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KCk7XG4gICAgICBpZiAodGhpcy5pc1Nob3duKCkpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyk7XG4gICAgICB9XG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuICAgIGlzU2hvd24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG5cbiAgICBfbWF5YmVTY2hlZHVsZUhpZGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiB8fCB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpO1xuICAgIH1cbiAgICBfb25JbnRlcmFjdGlvbihldmVudCwgaXNJbnRlcmFjdGluZykge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XG4gICAgICAgIGNhc2UgJ21vdXNlb3V0JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnZm9jdXNpbic6XG4gICAgICAgIGNhc2UgJ2ZvY3Vzb3V0JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0ludGVyYWN0aW5nKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0RWxlbWVudCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudCA9PT0gbmV4dEVsZW1lbnQgfHwgdGhpcy5fZWxlbWVudC5jb250YWlucyhuZXh0RWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKTtcbiAgICB9XG4gICAgX3NldExpc3RlbmVycygpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRU9WRVIsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRU9VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSk7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSk7XG4gICAgfVxuICAgIF9jbGVhclRpbWVvdXQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBUb2FzdC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgZW5hYmxlRGlzbWlzc1RyaWdnZXIoVG9hc3QpO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvYXN0KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGluZGV4LnVtZC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIGNvbnN0IGluZGV4X3VtZCA9IHtcbiAgICBBbGVydCxcbiAgICBCdXR0b24sXG4gICAgQ2Fyb3VzZWwsXG4gICAgQ29sbGFwc2UsXG4gICAgRHJvcGRvd24sXG4gICAgTW9kYWwsXG4gICAgT2ZmY2FudmFzLFxuICAgIFBvcG92ZXIsXG4gICAgU2Nyb2xsU3B5LFxuICAgIFRhYixcbiAgICBUb2FzdCxcbiAgICBUb29sdGlwXG4gIH07XG5cbiAgcmV0dXJuIGluZGV4X3VtZDtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLmJ1bmRsZS5qcy5tYXBcbiIsImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1uZXctdGV4dFwiKTtcbmNvbnN0IHRleHQgPSBjb250YWluZXIuaW5uZXJUZXh0O1xubGV0IHRleHRBcnJheTtcbmxldCBjb3VudGVyID0gMDtcbmxldCB3cml0aW5nSW50ZXJ2YWw7XG5cbmNvbnRhaW5lci5pbm5lclRleHQgPSBcIlwiO1xudGV4dEFycmF5ID0gdGV4dC5zcGxpdChcIiBcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgd3JpdGluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuaW5uZXJUZXh0ICs9ICcgJyArIHRleHRBcnJheVtjb3VudGVyXTtcbiAgICAgICAgY291bnRlcisrO1xuXG4gICAgICAgIGlmIChjb3VudGVyID09PSB0ZXh0QXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHdyaXRpbmdJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9LCA1MCk7XG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJjYXJkQ29udGFpbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjb250YWluZXIiLCJjYXJkcyIsImFkZExlZnQiLCJsZW5ndGgiLCJyb3RhdGUiLCJyb3RhdGVTdHlsZSIsImNsYXNzTGVmdCIsImNhcmQiLCJzdHlsZSIsImxlZnQiLCJjb25jYXQiLCJ0cmFuc2Zvcm0iLCJjYXJkQ29udGFpbmVyc01pbmkiLCJtaW5pQm90dG9tU3R5bGUiLCJib3R0b20iLCJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIl90eXBlb2YiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJnbG9iYWxUaGlzIiwic2VsZiIsImJvb3RzdHJhcCIsIl9LRVlfVE9fRElSRUNUSU9OIiwiTUFYX1VJRCIsIk1JTExJU0VDT05EU19NVUxUSVBMSUVSIiwiVFJBTlNJVElPTl9FTkQiLCJwYXJzZVNlbGVjdG9yIiwic2VsZWN0b3IiLCJ3aW5kb3ciLCJDU1MiLCJlc2NhcGUiLCJyZXBsYWNlIiwibWF0Y2giLCJpZCIsInRvVHlwZSIsIm9iamVjdCIsInVuZGVmaW5lZCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInRvTG93ZXJDYXNlIiwiZ2V0VUlEIiwicHJlZml4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsIl93aW5kb3ckZ2V0Q29tcHV0ZWRTdCIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJmbG9hdFRyYW5zaXRpb25EZWxheSIsInNwbGl0IiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJpc0VsZW1lbnQkMSIsImpxdWVyeSIsIm5vZGVUeXBlIiwiZ2V0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpc1Zpc2libGUiLCJnZXRDbGllbnRSZWN0cyIsImVsZW1lbnRJc1Zpc2libGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiY2xvc2VkRGV0YWlscyIsImNsb3Nlc3QiLCJzdW1tYXJ5IiwicGFyZW50Tm9kZSIsImlzRGlzYWJsZWQiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkaXNhYmxlZCIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsImZpbmRTaGFkb3dSb290IiwiZG9jdW1lbnRFbGVtZW50IiwiYXR0YWNoU2hhZG93IiwiZ2V0Um9vdE5vZGUiLCJyb290IiwiU2hhZG93Um9vdCIsIm5vb3AiLCJyZWZsb3ciLCJvZmZzZXRIZWlnaHQiLCJnZXRqUXVlcnkiLCJqUXVlcnkiLCJib2R5IiwiRE9NQ29udGVudExvYWRlZENhbGxiYWNrcyIsIm9uRE9NQ29udGVudExvYWRlZCIsImNhbGxiYWNrIiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaTIiLCJfRE9NQ29udGVudExvYWRlZENhbGwiLCJwdXNoIiwiaXNSVEwiLCJkaXIiLCJkZWZpbmVKUXVlcnlQbHVnaW4iLCJwbHVnaW4iLCIkIiwibmFtZSIsIk5BTUUiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJmbiIsImpRdWVyeUludGVyZmFjZSIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsImV4ZWN1dGUiLCJwb3NzaWJsZUNhbGxiYWNrIiwiYXJncyIsImRlZmF1bHRWYWx1ZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImV4ZWN1dGVBZnRlclRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uRWxlbWVudCIsIndhaXRGb3JUcmFuc2l0aW9uIiwiZHVyYXRpb25QYWRkaW5nIiwiZW11bGF0ZWREdXJhdGlvbiIsImNhbGxlZCIsImhhbmRsZXIiLCJfcmVmNiIsInRhcmdldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiZ2V0TmV4dEFjdGl2ZUVsZW1lbnQiLCJsaXN0IiwiYWN0aXZlRWxlbWVudCIsInNob3VsZEdldE5leHQiLCJpc0N5Y2xlQWxsb3dlZCIsImxpc3RMZW5ndGgiLCJpbmRleCIsImluZGV4T2YiLCJtYXgiLCJtaW4iLCJuYW1lc3BhY2VSZWdleCIsInN0cmlwTmFtZVJlZ2V4Iiwic3RyaXBVaWRSZWdleCIsImV2ZW50UmVnaXN0cnkiLCJ1aWRFdmVudCIsImN1c3RvbUV2ZW50cyIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwibmF0aXZlRXZlbnRzIiwiU2V0IiwibWFrZUV2ZW50VWlkIiwidWlkIiwiZ2V0RWxlbWVudEV2ZW50cyIsImJvb3RzdHJhcEhhbmRsZXIiLCJldmVudCIsImh5ZHJhdGVPYmoiLCJkZWxlZ2F0ZVRhcmdldCIsIm9uZU9mZiIsIkV2ZW50SGFuZGxlciIsIm9mZiIsInR5cGUiLCJib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlciIsImRvbUVsZW1lbnRzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImRvbUVsZW1lbnQiLCJlcnIiLCJlIiwiZiIsImZpbmRIYW5kbGVyIiwiZXZlbnRzIiwiY2FsbGFibGUiLCJkZWxlZ2F0aW9uU2VsZWN0b3IiLCJ2YWx1ZXMiLCJmaW5kIiwibm9ybWFsaXplUGFyYW1ldGVycyIsIm9yaWdpbmFsVHlwZUV2ZW50IiwiZGVsZWdhdGlvbkZ1bmN0aW9uIiwiaXNEZWxlZ2F0ZWQiLCJ0eXBlRXZlbnQiLCJnZXRUeXBlRXZlbnQiLCJoYXMiLCJhZGRIYW5kbGVyIiwiX25vcm1hbGl6ZVBhcmFtZXRlcnMiLCJfbm9ybWFsaXplUGFyYW1ldGVyczIiLCJfc2xpY2VkVG9BcnJheSIsIndyYXBGdW5jdGlvbiIsInJlbGF0ZWRUYXJnZXQiLCJoYW5kbGVycyIsInByZXZpb3VzRnVuY3Rpb24iLCJyZW1vdmVIYW5kbGVyIiwiQm9vbGVhbiIsInJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyIsIm5hbWVzcGFjZSIsInN0b3JlRWxlbWVudEV2ZW50IiwiX2kzIiwiX09iamVjdCRlbnRyaWVzIiwiZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsImhhbmRsZXJLZXkiLCJpbmNsdWRlcyIsIm9uIiwib25lIiwiX25vcm1hbGl6ZVBhcmFtZXRlcnMzIiwiX25vcm1hbGl6ZVBhcmFtZXRlcnM0IiwiaW5OYW1lc3BhY2UiLCJpc05hbWVzcGFjZSIsInN0YXJ0c1dpdGgiLCJrZXlzIiwiX2k0IiwiX09iamVjdCRrZXlzIiwiZWxlbWVudEV2ZW50Iiwic2xpY2UiLCJfaTUiLCJfT2JqZWN0JGVudHJpZXMyIiwiX09iamVjdCRlbnRyaWVzMiRfaSIsImtleUhhbmRsZXJzIiwidHJpZ2dlciIsImpRdWVyeUV2ZW50IiwiYnViYmxlcyIsIm5hdGl2ZURpc3BhdGNoIiwiZGVmYXVsdFByZXZlbnRlZCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJldnQiLCJjYW5jZWxhYmxlIiwicHJldmVudERlZmF1bHQiLCJvYmoiLCJtZXRhIiwiX2xvb3AyIiwiX09iamVjdCRlbnRyaWVzMyRfaSIsIl9PYmplY3QkZW50cmllczMiLCJfaTYiLCJfdW51c2VkIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJnZXQiLCJlbGVtZW50TWFwIiwiTWFwIiwiRGF0YSIsInNldCIsImluc3RhbmNlIiwiaW5zdGFuY2VNYXAiLCJzaXplIiwiY29uc29sZSIsImVycm9yIiwiQXJyYXkiLCJmcm9tIiwicmVtb3ZlIiwibm9ybWFsaXplRGF0YSIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5vcm1hbGl6ZURhdGFLZXkiLCJjaHIiLCJNYW5pcHVsYXRvciIsInNldERhdGFBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVEYXRhQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZ2V0RGF0YUF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwiYnNLZXlzIiwiZGF0YXNldCIsImZpbHRlciIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJwdXJlS2V5IiwiY2hhckF0IiwiZ2V0RGF0YUF0dHJpYnV0ZSIsIkNvbmZpZyIsIl9nZXRDb25maWciLCJjb25maWciLCJfbWVyZ2VDb25maWdPYmoiLCJfY29uZmlnQWZ0ZXJNZXJnZSIsIl90eXBlQ2hlY2tDb25maWciLCJqc29uQ29uZmlnIiwiX29iamVjdFNwcmVhZCIsImNvbnN0cnVjdG9yIiwiRGVmYXVsdCIsImNvbmZpZ1R5cGVzIiwiRGVmYXVsdFR5cGUiLCJfaTciLCJfT2JqZWN0JGVudHJpZXM0IiwiX09iamVjdCRlbnRyaWVzNCRfaSIsInByb3BlcnR5IiwiZXhwZWN0ZWRUeXBlcyIsInZhbHVlVHlwZSIsIlJlZ0V4cCIsInRlc3QiLCJUeXBlRXJyb3IiLCJ0b1VwcGVyQ2FzZSIsIkVycm9yIiwiVkVSU0lPTiIsIkJhc2VDb21wb25lbnQiLCJfQ29uZmlnIiwiX3RoaXMiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9lbGVtZW50IiwiX2NvbmZpZyIsIkRBVEFfS0VZIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImRpc3Bvc2UiLCJFVkVOVF9LRVkiLCJfaXRlcmF0b3IzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIl9zdGVwMyIsInByb3BlcnR5TmFtZSIsIl9xdWV1ZUNhbGxiYWNrIiwiaXNBbmltYXRlZCIsImdldEluc3RhbmNlIiwiZ2V0T3JDcmVhdGVJbnN0YW5jZSIsImV2ZW50TmFtZSIsImdldFNlbGVjdG9yIiwiaHJlZkF0dHJpYnV0ZSIsInRyaW0iLCJTZWxlY3RvckVuZ2luZSIsIl9yZWY3IiwiRWxlbWVudCIsImZpbmRPbmUiLCJjaGlsZHJlbiIsIl9yZWY4IiwiY2hpbGQiLCJtYXRjaGVzIiwicGFyZW50cyIsImFuY2VzdG9yIiwicHJldiIsInByZXZpb3VzIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmb2N1c2FibGVDaGlsZHJlbiIsImZvY3VzYWJsZXMiLCJtYXAiLCJqb2luIiwiZWwiLCJnZXRTZWxlY3RvckZyb21FbGVtZW50IiwiZ2V0RWxlbWVudEZyb21TZWxlY3RvciIsImdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IiLCJlbmFibGVEaXNtaXNzVHJpZ2dlciIsImNvbXBvbmVudCIsIm1ldGhvZCIsImNsaWNrRXZlbnQiLCJ0YWdOYW1lIiwiTkFNRSRmIiwiREFUQV9LRVkkYSIsIkVWRU5UX0tFWSRiIiwiRVZFTlRfQ0xPU0UiLCJFVkVOVF9DTE9TRUQiLCJDTEFTU19OQU1FX0ZBREUkNSIsIkNMQVNTX05BTUVfU0hPVyQ4IiwiQWxlcnQiLCJfQmFzZUNvbXBvbmVudCIsIl9zdXBlcjIiLCJjbG9zZSIsIl90aGlzMiIsImNsb3NlRXZlbnQiLCJfZGVzdHJveUVsZW1lbnQiLCJlYWNoIiwiZGF0YSIsIk5BTUUkZSIsIkRBVEFfS0VZJDkiLCJFVkVOVF9LRVkkYSIsIkRBVEFfQVBJX0tFWSQ2IiwiQ0xBU1NfTkFNRV9BQ1RJVkUkMyIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFJDUiLCJFVkVOVF9DTElDS19EQVRBX0FQSSQ2IiwiQnV0dG9uIiwiX0Jhc2VDb21wb25lbnQyIiwiX3N1cGVyMyIsInRvZ2dsZSIsImJ1dHRvbiIsIk5BTUUkZCIsIkVWRU5UX0tFWSQ5IiwiRVZFTlRfVE9VQ0hTVEFSVCIsIkVWRU5UX1RPVUNITU9WRSIsIkVWRU5UX1RPVUNIRU5EIiwiRVZFTlRfUE9JTlRFUkRPV04iLCJFVkVOVF9QT0lOVEVSVVAiLCJQT0lOVEVSX1RZUEVfVE9VQ0giLCJQT0lOVEVSX1RZUEVfUEVOIiwiQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UIiwiU1dJUEVfVEhSRVNIT0xEIiwiRGVmYXVsdCRjIiwiZW5kQ2FsbGJhY2siLCJsZWZ0Q2FsbGJhY2siLCJyaWdodENhbGxiYWNrIiwiRGVmYXVsdFR5cGUkYyIsIlN3aXBlIiwiX0NvbmZpZzIiLCJfc3VwZXI0IiwiX3RoaXMzIiwiaXNTdXBwb3J0ZWQiLCJfZGVsdGFYIiwiX3N1cHBvcnRQb2ludGVyRXZlbnRzIiwiUG9pbnRlckV2ZW50IiwiX2luaXRFdmVudHMiLCJfc3RhcnQiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIl9ldmVudElzUG9pbnRlclBlblRvdWNoIiwiX2VuZCIsIl9oYW5kbGVTd2lwZSIsIl9tb3ZlIiwiYWJzRGVsdGFYIiwiYWJzIiwiZGlyZWN0aW9uIiwiX3RoaXM0IiwiYWRkIiwicG9pbnRlclR5cGUiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIk5BTUUkYyIsIkRBVEFfS0VZJDgiLCJFVkVOVF9LRVkkOCIsIkRBVEFfQVBJX0tFWSQ1IiwiQVJST1dfTEVGVF9LRVkkMSIsIkFSUk9XX1JJR0hUX0tFWSQxIiwiVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCIsIk9SREVSX05FWFQiLCJPUkRFUl9QUkVWIiwiRElSRUNUSU9OX0xFRlQiLCJESVJFQ1RJT05fUklHSFQiLCJFVkVOVF9TTElERSIsIkVWRU5UX1NMSUQiLCJFVkVOVF9LRVlET1dOJDEiLCJFVkVOVF9NT1VTRUVOVEVSJDEiLCJFVkVOVF9NT1VTRUxFQVZFJDEiLCJFVkVOVF9EUkFHX1NUQVJUIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSQzIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNSIsIkNMQVNTX05BTUVfQ0FST1VTRUwiLCJDTEFTU19OQU1FX0FDVElWRSQyIiwiQ0xBU1NfTkFNRV9TTElERSIsIkNMQVNTX05BTUVfRU5EIiwiQ0xBU1NfTkFNRV9TVEFSVCIsIkNMQVNTX05BTUVfTkVYVCIsIkNMQVNTX05BTUVfUFJFViIsIlNFTEVDVE9SX0FDVElWRSIsIlNFTEVDVE9SX0lURU0iLCJTRUxFQ1RPUl9BQ1RJVkVfSVRFTSIsIlNFTEVDVE9SX0lURU1fSU1HIiwiU0VMRUNUT1JfSU5ESUNBVE9SUyIsIlNFTEVDVE9SX0RBVEFfU0xJREUiLCJTRUxFQ1RPUl9EQVRBX1JJREUiLCJLRVlfVE9fRElSRUNUSU9OIiwiX2RlZmluZVByb3BlcnR5IiwiRGVmYXVsdCRiIiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInBhdXNlIiwicmlkZSIsInRvdWNoIiwid3JhcCIsIkRlZmF1bHRUeXBlJGIiLCJDYXJvdXNlbCIsIl9CYXNlQ29tcG9uZW50MyIsIl9zdXBlcjUiLCJfdGhpczUiLCJfaW50ZXJ2YWwiLCJfYWN0aXZlRWxlbWVudCIsIl9pc1NsaWRpbmciLCJ0b3VjaFRpbWVvdXQiLCJfc3dpcGVIZWxwZXIiLCJfaW5kaWNhdG9yc0VsZW1lbnQiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJjeWNsZSIsIl9zbGlkZSIsIm5leHRXaGVuVmlzaWJsZSIsImhpZGRlbiIsIl9jbGVhckludGVydmFsIiwiX3RoaXM2IiwiX3VwZGF0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJfbWF5YmVFbmFibGVDeWNsZSIsIl90aGlzNyIsInRvIiwiX3RoaXM4IiwiaXRlbXMiLCJfZ2V0SXRlbXMiLCJhY3RpdmVJbmRleCIsIl9nZXRJdGVtSW5kZXgiLCJfZ2V0QWN0aXZlIiwib3JkZXIiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwiZGVmYXVsdEludGVydmFsIiwiX3RoaXM5IiwiX2tleWRvd24iLCJfYWRkVG91Y2hFdmVudExpc3RlbmVycyIsIl90aGlzMTAiLCJfaXRlcmF0b3I0IiwiX3N0ZXA0IiwiaW1nIiwiZW5kQ2FsbEJhY2siLCJjbGVhclRpbWVvdXQiLCJzd2lwZUNvbmZpZyIsIl9kaXJlY3Rpb25Ub09yZGVyIiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJhY3RpdmVJbmRpY2F0b3IiLCJuZXdBY3RpdmVJbmRpY2F0b3IiLCJlbGVtZW50SW50ZXJ2YWwiLCJwYXJzZUludCIsIl90aGlzMTEiLCJpc05leHQiLCJuZXh0RWxlbWVudCIsIm5leHRFbGVtZW50SW5kZXgiLCJ0cmlnZ2VyRXZlbnQiLCJfb3JkZXJUb0RpcmVjdGlvbiIsInNsaWRlRXZlbnQiLCJpc0N5Y2xpbmciLCJkaXJlY3Rpb25hbENsYXNzTmFtZSIsIm9yZGVyQ2xhc3NOYW1lIiwiY29tcGxldGVDYWxsQmFjayIsIl9pc0FuaW1hdGVkIiwiY2xlYXJJbnRlcnZhbCIsImNhcm91c2VsIiwic2xpZGVJbmRleCIsImNhcm91c2VscyIsIl9pdGVyYXRvcjUiLCJfc3RlcDUiLCJOQU1FJGIiLCJEQVRBX0tFWSQ3IiwiRVZFTlRfS0VZJDciLCJEQVRBX0FQSV9LRVkkNCIsIkVWRU5UX1NIT1ckNiIsIkVWRU5UX1NIT1dOJDYiLCJFVkVOVF9ISURFJDYiLCJFVkVOVF9ISURERU4kNiIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJJDQiLCJDTEFTU19OQU1FX1NIT1ckNyIsIkNMQVNTX05BTUVfQ09MTEFQU0UiLCJDTEFTU19OQU1FX0NPTExBUFNJTkciLCJDTEFTU19OQU1FX0NPTExBUFNFRCIsIkNMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOIiwiQ0xBU1NfTkFNRV9IT1JJWk9OVEFMIiwiV0lEVEgiLCJIRUlHSFQiLCJTRUxFQ1RPUl9BQ1RJVkVTIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUkNCIsIkRlZmF1bHQkYSIsInBhcmVudCIsIkRlZmF1bHRUeXBlJGEiLCJDb2xsYXBzZSIsIl9CYXNlQ29tcG9uZW50NCIsIl9zdXBlcjYiLCJfdGhpczEyIiwiX2lzVHJhbnNpdGlvbmluZyIsIl90cmlnZ2VyQXJyYXkiLCJ0b2dnbGVMaXN0IiwiX2l0ZXJhdG9yNiIsIl9zdGVwNiIsImVsZW0iLCJmaWx0ZXJFbGVtZW50IiwiZm91bmRFbGVtZW50IiwiX2luaXRpYWxpemVDaGlsZHJlbiIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJfaXNTaG93biIsImhpZGUiLCJzaG93IiwiX3RoaXMxMyIsImFjdGl2ZUNoaWxkcmVuIiwiX2dldEZpcnN0TGV2ZWxDaGlsZHJlbiIsInN0YXJ0RXZlbnQiLCJfaXRlcmF0b3I3IiwiX3N0ZXA3IiwiYWN0aXZlSW5zdGFuY2UiLCJkaW1lbnNpb24iLCJfZ2V0RGltZW5zaW9uIiwiY29tcGxldGUiLCJjYXBpdGFsaXplZERpbWVuc2lvbiIsInNjcm9sbFNpemUiLCJfdGhpczE0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiX2l0ZXJhdG9yOCIsIl9zdGVwOCIsIl9pdGVyYXRvcjkiLCJfc3RlcDkiLCJzZWxlY3RlZCIsInRyaWdnZXJBcnJheSIsImlzT3BlbiIsIl9pdGVyYXRvcjEwIiwiX3N0ZXAxMCIsIl9pdGVyYXRvcjExIiwiX3N0ZXAxMSIsInRvcCIsInJpZ2h0IiwiYXV0byIsImJhc2VQbGFjZW1lbnRzIiwic3RhcnQiLCJlbmQiLCJjbGlwcGluZ1BhcmVudHMiLCJ2aWV3cG9ydCIsInBvcHBlciIsInJlZmVyZW5jZSIsInZhcmlhdGlvblBsYWNlbWVudHMiLCJyZWR1Y2UiLCJhY2MiLCJwbGFjZW1lbnQiLCJwbGFjZW1lbnRzIiwiYmVmb3JlUmVhZCIsInJlYWQiLCJhZnRlclJlYWQiLCJiZWZvcmVNYWluIiwibWFpbiIsImFmdGVyTWFpbiIsImJlZm9yZVdyaXRlIiwid3JpdGUiLCJhZnRlcldyaXRlIiwibW9kaWZpZXJQaGFzZXMiLCJnZXROb2RlTmFtZSIsIm5vZGVOYW1lIiwiZ2V0V2luZG93Iiwibm9kZSIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsImlzRWxlbWVudCIsIk93bkVsZW1lbnQiLCJpc0hUTUxFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJpc1NoYWRvd1Jvb3QiLCJhcHBseVN0eWxlcyIsIl9yZWYiLCJzdGF0ZSIsImVsZW1lbnRzIiwic3R5bGVzIiwiYXNzaWduIiwiZWZmZWN0JDIiLCJfcmVmMiIsImluaXRpYWxTdHlsZXMiLCJwb3NpdGlvbiIsIm9wdGlvbnMiLCJzdHJhdGVneSIsIm1hcmdpbiIsImFycm93Iiwic3R5bGVQcm9wZXJ0aWVzIiwiaGFzT3duUHJvcGVydHkiLCJhdHRyaWJ1dGUiLCJhcHBseVN0eWxlcyQxIiwiZW5hYmxlZCIsInBoYXNlIiwiZWZmZWN0IiwicmVxdWlyZXMiLCJnZXRCYXNlUGxhY2VtZW50Iiwicm91bmQiLCJnZXRVQVN0cmluZyIsInVhRGF0YSIsInVzZXJBZ2VudERhdGEiLCJicmFuZHMiLCJpdGVtIiwiYnJhbmQiLCJ2ZXJzaW9uIiwidXNlckFnZW50IiwiaXNMYXlvdXRWaWV3cG9ydCIsImluY2x1ZGVTY2FsZSIsImlzRml4ZWRTdHJhdGVneSIsImNsaWVudFJlY3QiLCJzY2FsZVgiLCJzY2FsZVkiLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwidmlzdWFsVmlld3BvcnQiLCJhZGRWaXN1YWxPZmZzZXRzIiwieCIsIm9mZnNldExlZnQiLCJ5Iiwib2Zmc2V0VG9wIiwiZ2V0TGF5b3V0UmVjdCIsInJvb3ROb2RlIiwiaXNTYW1lTm9kZSIsImhvc3QiLCJnZXRDb21wdXRlZFN0eWxlJDEiLCJpc1RhYmxlRWxlbWVudCIsImdldERvY3VtZW50RWxlbWVudCIsImdldFBhcmVudE5vZGUiLCJhc3NpZ25lZFNsb3QiLCJnZXRUcnVlT2Zmc2V0UGFyZW50Iiwib2Zmc2V0UGFyZW50IiwiZ2V0Q29udGFpbmluZ0Jsb2NrIiwiaXNGaXJlZm94IiwiaXNJRSIsImVsZW1lbnRDc3MiLCJjdXJyZW50Tm9kZSIsImNzcyIsInBlcnNwZWN0aXZlIiwiY29udGFpbiIsIndpbGxDaGFuZ2UiLCJnZXRPZmZzZXRQYXJlbnQiLCJnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQiLCJ3aXRoaW4iLCJtaW4kMSIsIm1heCQxIiwid2l0aGluTWF4Q2xhbXAiLCJ2IiwiZ2V0RnJlc2hTaWRlT2JqZWN0IiwibWVyZ2VQYWRkaW5nT2JqZWN0IiwicGFkZGluZ09iamVjdCIsImV4cGFuZFRvSGFzaE1hcCIsImhhc2hNYXAiLCJ0b1BhZGRpbmdPYmplY3QiLCJwYWRkaW5nIiwicmVjdHMiLCJfc3RhdGUkbW9kaWZpZXJzRGF0YSQiLCJhcnJvd0VsZW1lbnQiLCJwb3BwZXJPZmZzZXRzIiwibW9kaWZpZXJzRGF0YSIsImJhc2VQbGFjZW1lbnQiLCJheGlzIiwiaXNWZXJ0aWNhbCIsImxlbiIsImFycm93UmVjdCIsIm1pblByb3AiLCJtYXhQcm9wIiwiZW5kRGlmZiIsInN0YXJ0RGlmZiIsImFycm93T2Zmc2V0UGFyZW50IiwiY2xpZW50U2l6ZSIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwiY2VudGVyVG9SZWZlcmVuY2UiLCJjZW50ZXIiLCJvZmZzZXQiLCJheGlzUHJvcCIsImNlbnRlck9mZnNldCIsImVmZmVjdCQxIiwiX29wdGlvbnMkZWxlbWVudCIsImFycm93JDEiLCJyZXF1aXJlc0lmRXhpc3RzIiwiZ2V0VmFyaWF0aW9uIiwidW5zZXRTaWRlcyIsInJvdW5kT2Zmc2V0c0J5RFBSIiwid2luIiwiZHByIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm1hcFRvU3R5bGVzIiwiX09iamVjdCRhc3NpZ24yIiwicG9wcGVyUmVjdCIsInZhcmlhdGlvbiIsIm9mZnNldHMiLCJncHVBY2NlbGVyYXRpb24iLCJhZGFwdGl2ZSIsInJvdW5kT2Zmc2V0cyIsImlzRml4ZWQiLCJfb2Zmc2V0cyR4IiwiX29mZnNldHMkeSIsIl9yZWYzIiwiaGFzWCIsImhhc1kiLCJzaWRlWCIsInNpZGVZIiwiaGVpZ2h0UHJvcCIsIndpZHRoUHJvcCIsIm9mZnNldFkiLCJvZmZzZXRYIiwiY29tbW9uU3R5bGVzIiwiX3JlZjQiLCJfT2JqZWN0JGFzc2lnbiIsImNvbXB1dGVTdHlsZXMiLCJfcmVmNSIsIl9vcHRpb25zJGdwdUFjY2VsZXJhdCIsIl9vcHRpb25zJGFkYXB0aXZlIiwiX29wdGlvbnMkcm91bmRPZmZzZXRzIiwiY29tcHV0ZVN0eWxlcyQxIiwicGFzc2l2ZSIsIl9vcHRpb25zJHNjcm9sbCIsInNjcm9sbCIsIl9vcHRpb25zJHJlc2l6ZSIsInJlc2l6ZSIsInNjcm9sbFBhcmVudHMiLCJzY3JvbGxQYXJlbnQiLCJ1cGRhdGUiLCJldmVudExpc3RlbmVycyIsImhhc2gkMSIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwibWF0Y2hlZCIsImhhc2giLCJnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCIsImdldFdpbmRvd1Njcm9sbCIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZ2V0V2luZG93U2Nyb2xsQmFyWCIsImdldFZpZXdwb3J0UmVjdCIsImh0bWwiLCJsYXlvdXRWaWV3cG9ydCIsImdldERvY3VtZW50UmVjdCIsIl9lbGVtZW50JG93bmVyRG9jdW1lbiIsIndpblNjcm9sbCIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0IiwiaXNTY3JvbGxQYXJlbnQiLCJfZ2V0Q29tcHV0ZWRTdHlsZSIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiZ2V0U2Nyb2xsUGFyZW50IiwibGlzdFNjcm9sbFBhcmVudHMiLCJpc0JvZHkiLCJ1cGRhdGVkTGlzdCIsInJlY3RUb0NsaWVudFJlY3QiLCJyZWN0IiwiZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUiLCJjbGlwcGluZ1BhcmVudCIsImdldENsaXBwaW5nUGFyZW50cyIsImNhbkVzY2FwZUNsaXBwaW5nIiwiY2xpcHBlckVsZW1lbnQiLCJnZXRDbGlwcGluZ1JlY3QiLCJib3VuZGFyeSIsInJvb3RCb3VuZGFyeSIsIm1haW5DbGlwcGluZ1BhcmVudHMiLCJmaXJzdENsaXBwaW5nUGFyZW50IiwiY2xpcHBpbmdSZWN0IiwiYWNjUmVjdCIsImNvbXB1dGVPZmZzZXRzIiwiY29tbW9uWCIsImNvbW1vblkiLCJtYWluQXhpcyIsImRldGVjdE92ZXJmbG93IiwiX29wdGlvbnMiLCJfb3B0aW9ucyRwbGFjZW1lbnQiLCJfb3B0aW9ucyRzdHJhdGVneSIsIl9vcHRpb25zJGJvdW5kYXJ5IiwiX29wdGlvbnMkcm9vdEJvdW5kYXJ5IiwiX29wdGlvbnMkZWxlbWVudENvbnRlIiwiZWxlbWVudENvbnRleHQiLCJfb3B0aW9ucyRhbHRCb3VuZGFyeSIsImFsdEJvdW5kYXJ5IiwiX29wdGlvbnMkcGFkZGluZyIsImFsdENvbnRleHQiLCJjbGlwcGluZ0NsaWVudFJlY3QiLCJjb250ZXh0RWxlbWVudCIsInJlZmVyZW5jZUNsaWVudFJlY3QiLCJwb3BwZXJDbGllbnRSZWN0IiwiZWxlbWVudENsaWVudFJlY3QiLCJvdmVyZmxvd09mZnNldHMiLCJvZmZzZXREYXRhIiwibXVsdGlwbHkiLCJjb21wdXRlQXV0b1BsYWNlbWVudCIsImZsaXBWYXJpYXRpb25zIiwiX29wdGlvbnMkYWxsb3dlZEF1dG9QIiwiYWxsb3dlZEF1dG9QbGFjZW1lbnRzIiwicGxhY2VtZW50cyQxIiwiYWxsb3dlZFBsYWNlbWVudHMiLCJvdmVyZmxvd3MiLCJzb3J0IiwiYSIsImIiLCJnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyIsIm9wcG9zaXRlUGxhY2VtZW50IiwiZmxpcCIsIl9za2lwIiwiX29wdGlvbnMkbWFpbkF4aXMiLCJjaGVja01haW5BeGlzIiwiX29wdGlvbnMkYWx0QXhpcyIsImFsdEF4aXMiLCJjaGVja0FsdEF4aXMiLCJzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMiLCJmYWxsYmFja1BsYWNlbWVudHMiLCJfb3B0aW9ucyRmbGlwVmFyaWF0aW8iLCJwcmVmZXJyZWRQbGFjZW1lbnQiLCJpc0Jhc2VQbGFjZW1lbnQiLCJyZWZlcmVuY2VSZWN0IiwiY2hlY2tzTWFwIiwibWFrZUZhbGxiYWNrQ2hlY2tzIiwiZmlyc3RGaXR0aW5nUGxhY2VtZW50IiwiaSIsIl9iYXNlUGxhY2VtZW50IiwiaXNTdGFydFZhcmlhdGlvbiIsIm1haW5WYXJpYXRpb25TaWRlIiwiYWx0VmFyaWF0aW9uU2lkZSIsImNoZWNrcyIsImV2ZXJ5IiwiY2hlY2siLCJudW1iZXJPZkNoZWNrcyIsIl9sb29wIiwiX2kiLCJmaXR0aW5nUGxhY2VtZW50IiwiX3JldCIsInJlc2V0IiwiZmxpcCQxIiwiZ2V0U2lkZU9mZnNldHMiLCJwcmV2ZW50ZWRPZmZzZXRzIiwiaXNBbnlTaWRlRnVsbHlDbGlwcGVkIiwic29tZSIsInNpZGUiLCJwcmV2ZW50T3ZlcmZsb3ciLCJyZWZlcmVuY2VPdmVyZmxvdyIsInBvcHBlckFsdE92ZXJmbG93IiwicmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzIiwicG9wcGVyRXNjYXBlT2Zmc2V0cyIsImlzUmVmZXJlbmNlSGlkZGVuIiwiaGFzUG9wcGVyRXNjYXBlZCIsImhpZGUkMSIsImRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZIiwiaW52ZXJ0RGlzdGFuY2UiLCJza2lkZGluZyIsImRpc3RhbmNlIiwiX29wdGlvbnMkb2Zmc2V0IiwiX2RhdGEkc3RhdGUkcGxhY2VtZW50Iiwib2Zmc2V0JDEiLCJwb3BwZXJPZmZzZXRzJDEiLCJnZXRBbHRBeGlzIiwiX29wdGlvbnMkdGV0aGVyIiwidGV0aGVyIiwiX29wdGlvbnMkdGV0aGVyT2Zmc2V0IiwidGV0aGVyT2Zmc2V0IiwidGV0aGVyT2Zmc2V0VmFsdWUiLCJub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUiLCJvZmZzZXRNb2RpZmllclN0YXRlIiwiX29mZnNldE1vZGlmaWVyU3RhdGUkIiwibWFpblNpZGUiLCJhbHRTaWRlIiwiYWRkaXRpdmUiLCJtaW5MZW4iLCJtYXhMZW4iLCJhcnJvd1BhZGRpbmdPYmplY3QiLCJhcnJvd1BhZGRpbmdNaW4iLCJhcnJvd1BhZGRpbmdNYXgiLCJhcnJvd0xlbiIsIm1pbk9mZnNldCIsIm1heE9mZnNldCIsImNsaWVudE9mZnNldCIsIm9mZnNldE1vZGlmaWVyVmFsdWUiLCJ0ZXRoZXJNaW4iLCJ0ZXRoZXJNYXgiLCJwcmV2ZW50ZWRPZmZzZXQiLCJfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIiwiX21haW5TaWRlIiwiX2FsdFNpZGUiLCJfb2Zmc2V0IiwiX2xlbiIsIl9taW4iLCJfbWF4IiwiaXNPcmlnaW5TaWRlIiwiX29mZnNldE1vZGlmaWVyVmFsdWUiLCJfdGV0aGVyTWluIiwiX3RldGhlck1heCIsIl9wcmV2ZW50ZWRPZmZzZXQiLCJwcmV2ZW50T3ZlcmZsb3ckMSIsImdldEhUTUxFbGVtZW50U2Nyb2xsIiwiZ2V0Tm9kZVNjcm9sbCIsImlzRWxlbWVudFNjYWxlZCIsImdldENvbXBvc2l0ZVJlY3QiLCJlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCIsImlzT2Zmc2V0UGFyZW50QW5FbGVtZW50Iiwib2Zmc2V0UGFyZW50SXNTY2FsZWQiLCJtb2RpZmllcnMiLCJ2aXNpdGVkIiwicmVzdWx0IiwibW9kaWZpZXIiLCJkZXAiLCJkZXBNb2RpZmllciIsIm9yZGVyTW9kaWZpZXJzIiwib3JkZXJlZE1vZGlmaWVycyIsImRlYm91bmNlIiwicGVuZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIm1lcmdlQnlOYW1lIiwibWVyZ2VkIiwiY3VycmVudCIsImV4aXN0aW5nIiwiREVGQVVMVF9PUFRJT05TIiwiYXJlVmFsaWRFbGVtZW50cyIsIl9rZXkiLCJwb3BwZXJHZW5lcmF0b3IiLCJnZW5lcmF0b3JPcHRpb25zIiwiX2dlbmVyYXRvck9wdGlvbnMiLCJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYiLCJkZWZhdWx0TW9kaWZpZXJzIiwiX2dlbmVyYXRvck9wdGlvbnMkZGVmMiIsImRlZmF1bHRPcHRpb25zIiwiY3JlYXRlUG9wcGVyIiwiZWZmZWN0Q2xlYW51cEZucyIsImlzRGVzdHJveWVkIiwic2V0T3B0aW9ucyIsInNldE9wdGlvbnNBY3Rpb24iLCJjbGVhbnVwTW9kaWZpZXJFZmZlY3RzIiwibSIsInJ1bk1vZGlmaWVyRWZmZWN0cyIsImZvcmNlVXBkYXRlIiwiX3N0YXRlJGVsZW1lbnRzIiwiX3N0YXRlJG9yZGVyZWRNb2RpZmllIiwiX3N0YXRlJG9yZGVyZWRNb2RpZmllMiIsImRlc3Ryb3kiLCJvbkZpcnN0VXBkYXRlIiwiX3JlZjMkb3B0aW9ucyIsImNsZWFudXBGbiIsIm5vb3BGbiIsImNyZWF0ZVBvcHBlciQyIiwiZGVmYXVsdE1vZGlmaWVycyQxIiwiY3JlYXRlUG9wcGVyJDEiLCJQb3BwZXIiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJjcmVhdGVQb3BwZXJCYXNlIiwiY3JlYXRlUG9wcGVyTGl0ZSIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiTkFNRSRhIiwiREFUQV9LRVkkNiIsIkVWRU5UX0tFWSQ2IiwiREFUQV9BUElfS0VZJDMiLCJFU0NBUEVfS0VZJDIiLCJUQUJfS0VZJDEiLCJBUlJPV19VUF9LRVkkMSIsIkFSUk9XX0RPV05fS0VZJDEiLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJFVkVOVF9ISURFJDUiLCJFVkVOVF9ISURERU4kNSIsIkVWRU5UX1NIT1ckNSIsIkVWRU5UX1NIT1dOJDUiLCJFVkVOVF9DTElDS19EQVRBX0FQSSQzIiwiRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSIsIkVWRU5UX0tFWVVQX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9TSE9XJDYiLCJDTEFTU19OQU1FX0RST1BVUCIsIkNMQVNTX05BTUVfRFJPUEVORCIsIkNMQVNTX05BTUVfRFJPUFNUQVJUIiwiQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSIiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04iLCJTRUxFQ1RPUl9NRU5VIiwiU0VMRUNUT1JfTkFWQkFSIiwiU0VMRUNUT1JfTkFWQkFSX05BViIsIlNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMiLCJQTEFDRU1FTlRfVE9QIiwiUExBQ0VNRU5UX1RPUEVORCIsIlBMQUNFTUVOVF9CT1RUT00iLCJQTEFDRU1FTlRfQk9UVE9NRU5EIiwiUExBQ0VNRU5UX1JJR0hUIiwiUExBQ0VNRU5UX0xFRlQiLCJQTEFDRU1FTlRfVE9QQ0VOVEVSIiwiUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiIsIkRlZmF1bHQkOSIsImF1dG9DbG9zZSIsImRpc3BsYXkiLCJwb3BwZXJDb25maWciLCJEZWZhdWx0VHlwZSQ5IiwiRHJvcGRvd24iLCJfQmFzZUNvbXBvbmVudDUiLCJfc3VwZXI3IiwiX3RoaXMxNSIsIl9wb3BwZXIiLCJfcGFyZW50IiwiX21lbnUiLCJfaW5OYXZiYXIiLCJfZGV0ZWN0TmF2YmFyIiwic2hvd0V2ZW50IiwiX2NyZWF0ZVBvcHBlciIsIl9yZWY5IiwiX2l0ZXJhdG9yMTIiLCJfc3RlcDEyIiwiZm9jdXMiLCJfY29tcGxldGVIaWRlIiwiaGlkZUV2ZW50IiwiX3JlZjEwIiwiX2l0ZXJhdG9yMTMiLCJfc3RlcDEzIiwicmVmZXJlbmNlRWxlbWVudCIsIl9nZXRQb3BwZXJDb25maWciLCJfZ2V0UGxhY2VtZW50IiwicGFyZW50RHJvcGRvd24iLCJpc0VuZCIsIl9nZXRPZmZzZXQiLCJfdGhpczE2IiwicG9wcGVyRGF0YSIsImRlZmF1bHRCc1BvcHBlckNvbmZpZyIsIl9zZWxlY3RNZW51SXRlbSIsIl9yZWYxMSIsImNsZWFyTWVudXMiLCJvcGVuVG9nZ2xlcyIsIl9pdGVyYXRvcjE0IiwiX3N0ZXAxNCIsImNvbXBvc2VkUGF0aCIsImlzTWVudVRhcmdldCIsImRhdGFBcGlLZXlkb3duSGFuZGxlciIsImlzSW5wdXQiLCJpc0VzY2FwZUV2ZW50IiwiaXNVcE9yRG93bkV2ZW50IiwiZ2V0VG9nZ2xlQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwiU0VMRUNUT1JfRklYRURfQ09OVEVOVCIsIlNFTEVDVE9SX1NUSUNLWV9DT05URU5UIiwiUFJPUEVSVFlfUEFERElORyIsIlBST1BFUlRZX01BUkdJTiIsIlNjcm9sbEJhckhlbHBlciIsImdldFdpZHRoIiwiZG9jdW1lbnRXaWR0aCIsImlubmVyV2lkdGgiLCJfZGlzYWJsZU92ZXJGbG93IiwiX3NldEVsZW1lbnRBdHRyaWJ1dGVzIiwiY2FsY3VsYXRlZFZhbHVlIiwiX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJpc092ZXJmbG93aW5nIiwiX3NhdmVJbml0aWFsQXR0cmlidXRlIiwic3R5bGVQcm9wZXJ0eSIsIl90aGlzMTciLCJzY3JvbGxiYXJXaWR0aCIsIm1hbmlwdWxhdGlvbkNhbGxCYWNrIiwic2V0UHJvcGVydHkiLCJfYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayIsImFjdHVhbFZhbHVlIiwicmVtb3ZlUHJvcGVydHkiLCJjYWxsQmFjayIsIl9pdGVyYXRvcjE1IiwiX3N0ZXAxNSIsInNlbCIsIk5BTUUkOSIsIkNMQVNTX05BTUVfRkFERSQ0IiwiQ0xBU1NfTkFNRV9TSE9XJDUiLCJFVkVOVF9NT1VTRURPV04iLCJEZWZhdWx0JDgiLCJjbGFzc05hbWUiLCJjbGlja0NhbGxiYWNrIiwicm9vdEVsZW1lbnQiLCJEZWZhdWx0VHlwZSQ4IiwiQmFja2Ryb3AiLCJfQ29uZmlnMyIsIl9zdXBlcjgiLCJfdGhpczE4IiwiX2lzQXBwZW5kZWQiLCJfYXBwZW5kIiwiX2dldEVsZW1lbnQiLCJfZW11bGF0ZUFuaW1hdGlvbiIsIl90aGlzMTkiLCJiYWNrZHJvcCIsImNyZWF0ZUVsZW1lbnQiLCJfdGhpczIwIiwiYXBwZW5kIiwiTkFNRSQ4IiwiREFUQV9LRVkkNSIsIkVWRU5UX0tFWSQ1IiwiRVZFTlRfRk9DVVNJTiQyIiwiRVZFTlRfS0VZRE9XTl9UQUIiLCJUQUJfS0VZIiwiVEFCX05BVl9GT1JXQVJEIiwiVEFCX05BVl9CQUNLV0FSRCIsIkRlZmF1bHQkNyIsImF1dG9mb2N1cyIsInRyYXBFbGVtZW50IiwiRGVmYXVsdFR5cGUkNyIsIkZvY3VzVHJhcCIsIl9Db25maWc0IiwiX3N1cGVyOSIsIl90aGlzMjEiLCJfaXNBY3RpdmUiLCJfbGFzdFRhYk5hdkRpcmVjdGlvbiIsImFjdGl2YXRlIiwiX3RoaXMyMiIsIl9oYW5kbGVGb2N1c2luIiwiX2hhbmRsZUtleWRvd24iLCJkZWFjdGl2YXRlIiwic2hpZnRLZXkiLCJOQU1FJDciLCJEQVRBX0tFWSQ0IiwiRVZFTlRfS0VZJDQiLCJEQVRBX0FQSV9LRVkkMiIsIkVTQ0FQRV9LRVkkMSIsIkVWRU5UX0hJREUkNCIsIkVWRU5UX0hJREVfUFJFVkVOVEVEJDEiLCJFVkVOVF9ISURERU4kNCIsIkVWRU5UX1NIT1ckNCIsIkVWRU5UX1NIT1dOJDQiLCJFVkVOVF9SRVNJWkUkMSIsIkVWRU5UX0NMSUNLX0RJU01JU1MiLCJFVkVOVF9NT1VTRURPV05fRElTTUlTUyIsIkVWRU5UX0tFWURPV05fRElTTUlTUyQxIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMiIsIkNMQVNTX05BTUVfT1BFTiIsIkNMQVNTX05BTUVfRkFERSQzIiwiQ0xBU1NfTkFNRV9TSE9XJDQiLCJDTEFTU19OQU1FX1NUQVRJQyIsIk9QRU5fU0VMRUNUT1IkMSIsIlNFTEVDVE9SX0RJQUxPRyIsIlNFTEVDVE9SX01PREFMX0JPRFkiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQyIiwiRGVmYXVsdCQ2IiwiRGVmYXVsdFR5cGUkNiIsIk1vZGFsIiwiX0Jhc2VDb21wb25lbnQ2IiwiX3N1cGVyMTAiLCJfdGhpczIzIiwiX2RpYWxvZyIsIl9iYWNrZHJvcCIsIl9pbml0aWFsaXplQmFja0Ryb3AiLCJfZm9jdXN0cmFwIiwiX2luaXRpYWxpemVGb2N1c1RyYXAiLCJfc2Nyb2xsQmFyIiwiX3RoaXMyNCIsIl9hZGp1c3REaWFsb2ciLCJfc2hvd0VsZW1lbnQiLCJfdGhpczI1IiwiX2hpZGVNb2RhbCIsIl9pOCIsIl9hcnIyIiwiaHRtbEVsZW1lbnQiLCJoYW5kbGVVcGRhdGUiLCJfdGhpczI2IiwibW9kYWxCb2R5IiwidHJhbnNpdGlvbkNvbXBsZXRlIiwiX3RoaXMyNyIsIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwiZXZlbnQyIiwiX3RoaXMyOCIsIl9yZXNldEFkanVzdG1lbnRzIiwiX3RoaXMyOSIsImlzTW9kYWxPdmVyZmxvd2luZyIsImluaXRpYWxPdmVyZmxvd1kiLCJpc0JvZHlPdmVyZmxvd2luZyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiX3RoaXMzMCIsImFscmVhZHlPcGVuIiwiTkFNRSQ2IiwiREFUQV9LRVkkMyIsIkVWRU5UX0tFWSQzIiwiREFUQV9BUElfS0VZJDEiLCJFVkVOVF9MT0FEX0RBVEFfQVBJJDIiLCJFU0NBUEVfS0VZIiwiQ0xBU1NfTkFNRV9TSE9XJDMiLCJDTEFTU19OQU1FX1NIT1dJTkckMSIsIkNMQVNTX05BTUVfSElESU5HIiwiQ0xBU1NfTkFNRV9CQUNLRFJPUCIsIk9QRU5fU0VMRUNUT1IiLCJFVkVOVF9TSE9XJDMiLCJFVkVOVF9TSE9XTiQzIiwiRVZFTlRfSElERSQzIiwiRVZFTlRfSElERV9QUkVWRU5URUQiLCJFVkVOVF9ISURERU4kMyIsIkVWRU5UX1JFU0laRSIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJJDEiLCJFVkVOVF9LRVlET1dOX0RJU01JU1MiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQxIiwiRGVmYXVsdCQ1IiwiRGVmYXVsdFR5cGUkNSIsIk9mZmNhbnZhcyIsIl9CYXNlQ29tcG9uZW50NyIsIl9zdXBlcjExIiwiX3RoaXMzMSIsIl90aGlzMzIiLCJfdGhpczMzIiwiYmx1ciIsImNvbXBsZXRlQ2FsbGJhY2siLCJfdGhpczM0IiwiX3RoaXMzNSIsIl90aGlzMzYiLCJfaXRlcmF0b3IxNiIsIl9zdGVwMTYiLCJfaXRlcmF0b3IxNyIsIl9zdGVwMTciLCJ1cmlBdHRyaWJ1dGVzIiwiQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwiYWxsb3dlZEF0dHJpYnV0ZSIsImFsbG93ZWRBdHRyaWJ1dGVMaXN0IiwiYXR0cmlidXRlTmFtZSIsIm5vZGVWYWx1ZSIsImF0dHJpYnV0ZVJlZ2V4IiwicmVnZXgiLCJEZWZhdWx0QWxsb3dsaXN0IiwiYXJlYSIsImJyIiwiY29sIiwiY29kZSIsImRpdiIsImVtIiwiaHIiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJsaSIsIm9sIiwicCIsInByZSIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsInNhbml0aXplSHRtbCIsInVuc2FmZUh0bWwiLCJhbGxvd0xpc3QiLCJzYW5pdGl6ZUZ1bmN0aW9uIiwiX3JlZjEyIiwiZG9tUGFyc2VyIiwiRE9NUGFyc2VyIiwiY3JlYXRlZERvY3VtZW50IiwicGFyc2VGcm9tU3RyaW5nIiwiX2l0ZXJhdG9yMTgiLCJfc3RlcDE4IiwiX3JlZjEzIiwiZWxlbWVudE5hbWUiLCJhdHRyaWJ1dGVMaXN0IiwiYWxsb3dlZEF0dHJpYnV0ZXMiLCJfaXRlcmF0b3IxOSIsIl9zdGVwMTkiLCJpbm5lckhUTUwiLCJOQU1FJDUiLCJEZWZhdWx0JDQiLCJjb250ZW50IiwiZXh0cmFDbGFzcyIsInNhbml0aXplIiwic2FuaXRpemVGbiIsInRlbXBsYXRlIiwiRGVmYXVsdFR5cGUkNCIsIkRlZmF1bHRDb250ZW50VHlwZSIsImVudHJ5IiwiVGVtcGxhdGVGYWN0b3J5IiwiX0NvbmZpZzUiLCJfc3VwZXIxMiIsIl90aGlzMzciLCJnZXRDb250ZW50IiwiX3RoaXMzOCIsIl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbiIsImhhc0NvbnRlbnQiLCJjaGFuZ2VDb250ZW50IiwiX2NoZWNrQ29udGVudCIsInRvSHRtbCIsInRlbXBsYXRlV3JhcHBlciIsIl9tYXliZVNhbml0aXplIiwiX2k5IiwiX09iamVjdCRlbnRyaWVzNSIsIl9PYmplY3QkZW50cmllczUkX2kiLCJ0ZXh0IiwiX3NldENvbnRlbnQiLCJfdGVtcGxhdGUkY2xhc3NMaXN0IiwiYXJnIiwiX2kxMCIsIl9PYmplY3QkZW50cmllczYiLCJfT2JqZWN0JGVudHJpZXM2JF9pIiwidGVtcGxhdGVFbGVtZW50IiwiX3B1dEVsZW1lbnRJblRlbXBsYXRlIiwiTkFNRSQ0IiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiQ0xBU1NfTkFNRV9GQURFJDIiLCJDTEFTU19OQU1FX01PREFMIiwiQ0xBU1NfTkFNRV9TSE9XJDIiLCJTRUxFQ1RPUl9UT09MVElQX0lOTkVSIiwiU0VMRUNUT1JfTU9EQUwiLCJFVkVOVF9NT0RBTF9ISURFIiwiVFJJR0dFUl9IT1ZFUiIsIlRSSUdHRVJfRk9DVVMiLCJUUklHR0VSX0NMSUNLIiwiVFJJR0dFUl9NQU5VQUwiLCJFVkVOVF9ISURFJDIiLCJFVkVOVF9ISURERU4kMiIsIkVWRU5UX1NIT1ckMiIsIkVWRU5UX1NIT1dOJDIiLCJFVkVOVF9JTlNFUlRFRCIsIkVWRU5UX0NMSUNLJDEiLCJFVkVOVF9GT0NVU0lOJDEiLCJFVkVOVF9GT0NVU09VVCQxIiwiRVZFTlRfTU9VU0VFTlRFUiIsIkVWRU5UX01PVVNFTEVBVkUiLCJBdHRhY2htZW50TWFwIiwiQVVUTyIsIlRPUCIsIlJJR0hUIiwiQk9UVE9NIiwiTEVGVCIsIkRlZmF1bHQkMyIsImFuaW1hdGlvbiIsImN1c3RvbUNsYXNzIiwiZGVsYXkiLCJ0aXRsZSIsIkRlZmF1bHRUeXBlJDMiLCJUb29sdGlwIiwiX0Jhc2VDb21wb25lbnQ4IiwiX3N1cGVyMTMiLCJfdGhpczM5IiwiX2lzRW5hYmxlZCIsIl90aW1lb3V0IiwiX2lzSG92ZXJlZCIsIl9hY3RpdmVUcmlnZ2VyIiwiX3RlbXBsYXRlRmFjdG9yeSIsIl9uZXdDb250ZW50IiwidGlwIiwiX3NldExpc3RlbmVycyIsIl9maXhUaXRsZSIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiY2xpY2siLCJfbGVhdmUiLCJfZW50ZXIiLCJfaGlkZU1vZGFsSGFuZGxlciIsIl9kaXNwb3NlUG9wcGVyIiwiX3RoaXM0MCIsIl9pc1dpdGhDb250ZW50Iiwic2hhZG93Um9vdCIsImlzSW5UaGVEb20iLCJfZ2V0VGlwRWxlbWVudCIsIl9yZWYxNCIsIl9pdGVyYXRvcjIwIiwiX3N0ZXAyMCIsIl90aGlzNDEiLCJfcmVmMTUiLCJfaXRlcmF0b3IyMSIsIl9zdGVwMjEiLCJfaXNXaXRoQWN0aXZlVHJpZ2dlciIsIl9nZXRUaXRsZSIsIl9jcmVhdGVUaXBFbGVtZW50IiwiX2dldENvbnRlbnRGb3JUZW1wbGF0ZSIsIl9nZXRUZW1wbGF0ZUZhY3RvcnkiLCJ0aXBJZCIsInNldENvbnRlbnQiLCJfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0IiwiX2dldERlbGVnYXRlQ29uZmlnIiwiYXR0YWNobWVudCIsIl90aGlzNDIiLCJfdGhpczQzIiwiX3RoaXM0NCIsInRyaWdnZXJzIiwiX2l0ZXJhdG9yMjIiLCJfc3RlcDIyIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX3RoaXM0NSIsIl9zZXRUaW1lb3V0IiwiX3RoaXM0NiIsInRpbWVvdXQiLCJkYXRhQXR0cmlidXRlcyIsIl9pMTEiLCJfT2JqZWN0JGtleXMyIiwiZGF0YUF0dHJpYnV0ZSIsIl9pMTIiLCJfT2JqZWN0JGVudHJpZXM3IiwiX09iamVjdCRlbnRyaWVzNyRfaSIsIk5BTUUkMyIsIlNFTEVDVE9SX1RJVExFIiwiU0VMRUNUT1JfQ09OVEVOVCIsIkRlZmF1bHQkMiIsIkRlZmF1bHRUeXBlJDIiLCJQb3BvdmVyIiwiX1Rvb2x0aXAiLCJfc3VwZXIxNCIsIl9nZXRDb250ZW50IiwiX3JlZjE3IiwiTkFNRSQyIiwiREFUQV9LRVkkMiIsIkVWRU5UX0tFWSQyIiwiREFUQV9BUElfS0VZIiwiRVZFTlRfQUNUSVZBVEUiLCJFVkVOVF9DTElDSyIsIkVWRU5UX0xPQURfREFUQV9BUEkkMSIsIkNMQVNTX05BTUVfRFJPUERPV05fSVRFTSIsIkNMQVNTX05BTUVfQUNUSVZFJDEiLCJTRUxFQ1RPUl9EQVRBX1NQWSIsIlNFTEVDVE9SX1RBUkdFVF9MSU5LUyIsIlNFTEVDVE9SX05BVl9MSVNUX0dST1VQIiwiU0VMRUNUT1JfTkFWX0xJTktTIiwiU0VMRUNUT1JfTkFWX0lURU1TIiwiU0VMRUNUT1JfTElTVF9JVEVNUyIsIlNFTEVDVE9SX0xJTktfSVRFTVMiLCJTRUxFQ1RPUl9EUk9QRE9XTiIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSQxIiwiRGVmYXVsdCQxIiwicm9vdE1hcmdpbiIsInNtb290aFNjcm9sbCIsInRocmVzaG9sZCIsIkRlZmF1bHRUeXBlJDEiLCJTY3JvbGxTcHkiLCJfQmFzZUNvbXBvbmVudDkiLCJfc3VwZXIxNSIsIl90aGlzNDciLCJfdGFyZ2V0TGlua3MiLCJfb2JzZXJ2YWJsZVNlY3Rpb25zIiwiX3Jvb3RFbGVtZW50IiwiX2FjdGl2ZVRhcmdldCIsIl9vYnNlcnZlciIsIl9wcmV2aW91c1Njcm9sbERhdGEiLCJ2aXNpYmxlRW50cnlUb3AiLCJwYXJlbnRTY3JvbGxUb3AiLCJyZWZyZXNoIiwiX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMiLCJfbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwiLCJkaXNjb25uZWN0IiwiX2dldE5ld09ic2VydmVyIiwiX2l0ZXJhdG9yMjMiLCJfc3RlcDIzIiwic2VjdGlvbiIsIm9ic2VydmUiLCJfdGhpczQ4Iiwib2JzZXJ2YWJsZVNlY3Rpb24iLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiX3RoaXM0OSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiX29ic2VydmVyQ2FsbGJhY2siLCJfdGhpczUwIiwidGFyZ2V0RWxlbWVudCIsIl9wcm9jZXNzIiwidXNlclNjcm9sbHNEb3duIiwiX2l0ZXJhdG9yMjQiLCJfc3RlcDI0IiwiaXNJbnRlcnNlY3RpbmciLCJfY2xlYXJBY3RpdmVDbGFzcyIsImVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyIsInRhcmdldExpbmtzIiwiX2l0ZXJhdG9yMjUiLCJfc3RlcDI1IiwiYW5jaG9yIiwiX2FjdGl2YXRlUGFyZW50cyIsIl9pdGVyYXRvcjI2IiwiX3N0ZXAyNiIsImxpc3RHcm91cCIsIl9pdGVyYXRvcjI3IiwiX3N0ZXAyNyIsImFjdGl2ZU5vZGVzIiwiX2l0ZXJhdG9yMjgiLCJfc3RlcDI4IiwiX2l0ZXJhdG9yMjkiLCJfc3RlcDI5Iiwic3B5IiwiTkFNRSQxIiwiREFUQV9LRVkkMSIsIkVWRU5UX0tFWSQxIiwiRVZFTlRfSElERSQxIiwiRVZFTlRfSElEREVOJDEiLCJFVkVOVF9TSE9XJDEiLCJFVkVOVF9TSE9XTiQxIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCJFVkVOVF9LRVlET1dOIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSIsIkFSUk9XX0xFRlRfS0VZIiwiQVJST1dfUklHSFRfS0VZIiwiQVJST1dfVVBfS0VZIiwiQVJST1dfRE9XTl9LRVkiLCJDTEFTU19OQU1FX0FDVElWRSIsIkNMQVNTX05BTUVfRkFERSQxIiwiQ0xBU1NfTkFNRV9TSE9XJDEiLCJDTEFTU19EUk9QRE9XTiIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsIlNFTEVDVE9SX0RST1BET1dOX01FTlUiLCJOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwiU0VMRUNUT1JfVEFCX1BBTkVMIiwiU0VMRUNUT1JfT1VURVIiLCJTRUxFQ1RPUl9JTk5FUiIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwiU0VMRUNUT1JfSU5ORVJfRUxFTSIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSIsIlRhYiIsIl9CYXNlQ29tcG9uZW50MTAiLCJfc3VwZXIxNiIsIl90aGlzNTEiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXMiLCJfZ2V0Q2hpbGRyZW4iLCJpbm5lckVsZW0iLCJfZWxlbUlzQWN0aXZlIiwiYWN0aXZlIiwiX2dldEFjdGl2ZUVsZW0iLCJfZGVhY3RpdmF0ZSIsIl9hY3RpdmF0ZSIsInJlbGF0ZWRFbGVtIiwiX3RoaXM1MiIsIl90b2dnbGVEcm9wRG93biIsIl90aGlzNTMiLCJuZXh0QWN0aXZlRWxlbWVudCIsInByZXZlbnRTY3JvbGwiLCJfdGhpczU0IiwiX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzIiwiX2l0ZXJhdG9yMzAiLCJfc3RlcDMwIiwiX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZCIsIl9nZXRJbm5lckVsZW1lbnQiLCJpc0FjdGl2ZSIsIm91dGVyRWxlbSIsIl9nZXRPdXRlckVsZW1lbnQiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsIiwib3BlbiIsIl9pdGVyYXRvcjMxIiwiX3N0ZXAzMSIsIkVWRU5UX01PVVNFT1ZFUiIsIkVWRU5UX01PVVNFT1VUIiwiRVZFTlRfRk9DVVNJTiIsIkVWRU5UX0ZPQ1VTT1VUIiwiRVZFTlRfSElERSIsIkVWRU5UX0hJRERFTiIsIkVWRU5UX1NIT1ciLCJFVkVOVF9TSE9XTiIsIkNMQVNTX05BTUVfRkFERSIsIkNMQVNTX05BTUVfSElERSIsIkNMQVNTX05BTUVfU0hPVyIsIkNMQVNTX05BTUVfU0hPV0lORyIsImF1dG9oaWRlIiwiVG9hc3QiLCJfQmFzZUNvbXBvbmVudDExIiwiX3N1cGVyMTciLCJfdGhpczU1IiwiX2hhc01vdXNlSW50ZXJhY3Rpb24iLCJfaGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiIsIl90aGlzNTYiLCJfY2xlYXJUaW1lb3V0IiwiX21heWJlU2NoZWR1bGVIaWRlIiwiX3RoaXM1NyIsImlzU2hvd24iLCJfdGhpczU4IiwiX29uSW50ZXJhY3Rpb24iLCJpc0ludGVyYWN0aW5nIiwiX3RoaXM1OSIsImluZGV4X3VtZCIsImlubmVyVGV4dCIsInRleHRBcnJheSIsImNvdW50ZXIiLCJ3cml0aW5nSW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9