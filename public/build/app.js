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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEIvdUMsS0FBSyxFQUFMQSxLQUFLO0lBQ0xnQixNQUFNLEVBQU5BLE1BQU07SUFDTndGLFFBQVEsRUFBUkEsUUFBUTtJQUNSd0YsUUFBUSxFQUFSQSxRQUFRO0lBQ1J1ZixRQUFRLEVBQVJBLFFBQVE7SUFDUjRJLEtBQUssRUFBTEEsS0FBSztJQUNMeUQsU0FBUyxFQUFUQSxTQUFTO0lBQ1Q0TSxPQUFPLEVBQVBBLE9BQU87SUFDUDRCLFNBQVMsRUFBVEEsU0FBUztJQUNUZ0YsR0FBRyxFQUFIQSxHQUFHO0lBQ0g0QyxLQUFLLEVBQUxBLEtBQUs7SUFDTDNOLE9BQU8sRUFBUEE7RUFDRixDQUFDO0VBRUQsT0FBTzBPLFNBQVM7QUFFbEIsQ0FBQyxDQUFFOzs7Ozs7Ozs7Ozs7QUNwcE1IIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ibGFja2phY2suanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Jvb3RzdHJhcC5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuLy8gaW1wb3J0IGJvb3RzdHJhcCBqc1xuaW1wb3J0ICcuL2pzL2Jvb3RzdHJhcC5idW5kbGUnO1xuXG4vLyBpbXBvcnQgb3duIGpzXG5pbXBvcnQgJy4vanMvYmxhY2tqYWNrJztcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gQWRkIHN0eWxlIHRvIGJpZyBjYXJkIGNvbnRhaW5lclxuY29uc3QgY2FyZENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsYWNramFjay1jYXJkLWNvbnRhaW5lclwiKTtcbmNhcmRDb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICBjb25zdCBjYXJkcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmQtc3ByaXRlXCIpO1xuICAgIGNvbnN0IGFkZExlZnQgPSAxMDAgLyAoY2FyZHMubGVuZ3RoICsgMSk7XG4gICAgY29uc3Qgcm90YXRlID0gOCAvIChjYXJkcy5sZW5ndGggLSAxKTtcbiAgICBsZXQgcm90YXRlU3R5bGUgPSAtNDtcbiAgICBsZXQgY2xhc3NMZWZ0ID0gYWRkTGVmdDtcblxuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNhcmQuc3R5bGUubGVmdCA9IGAke2NsYXNzTGVmdH0lYDtcbiAgICAgICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC01MCUsIDApIHJvdGF0ZSgke3JvdGF0ZVN0eWxlfWRlZylgO1xuICAgICAgICBjbGFzc0xlZnQgKz0gYWRkTGVmdDtcbiAgICAgICAgcm90YXRlU3R5bGUgKz0gcm90YXRlO1xuICAgIH0pICBcbn0pXG5cbi8vIEFkZCBzdHlsZSB0byBzbWFsbCBjYXJkIGNvbnRhaW5lclxuY29uc3QgY2FyZENvbnRhaW5lcnNNaW5pID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibGFja2phY2stY2FyZC1jb250YWluZXItbWluaVwiKTtcbmxldCBtaW5pQm90dG9tU3R5bGUgPSAxMDtcblxuY2FyZENvbnRhaW5lcnNNaW5pLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICBjb25zdCBjYXJkcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmQtc3ByaXRlXCIpO1xuICAgIGNvbnN0IGFkZExlZnQgPSAxMDAgLyAoY2FyZHMubGVuZ3RoICsgMSk7XG4gICAgY29uc3Qgcm90YXRlID0gMTIgLyAoY2FyZHMubGVuZ3RoIC0gMSk7XG4gICAgbGV0IHJvdGF0ZVN0eWxlID0gY2FyZHMubGVuZ3RoID4gMSA/IC02IDogMDtcbiAgICBsZXQgY2xhc3NMZWZ0ID0gYWRkTGVmdDtcblxuICAgIGNvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBgJHttaW5pQm90dG9tU3R5bGV9JWA7XG4gICAgbWluaUJvdHRvbVN0eWxlICs9IDIwO1xuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNhcmQuc3R5bGUubGVmdCA9IGAke2NsYXNzTGVmdH0lYDtcbiAgICAgICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC01MCUsIDApIHJvdGF0ZSgke3JvdGF0ZVN0eWxlfWRlZylgO1xuICAgICAgICBjbGFzc0xlZnQgKz0gYWRkTGVmdDtcbiAgICAgICAgcm90YXRlU3R5bGUgKz0gcm90YXRlO1xuICAgIH0pIFxufSkiLCIvKiFcbiAgKiBCb290c3RyYXAgdjUuMy4wLWFscGhhMiAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcbiAgKiBDb3B5cmlnaHQgMjAxMS0yMDIzIFRoZSBCb290c3RyYXAgQXV0aG9ycyAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2dyYXBocy9jb250cmlidXRvcnMpXG4gICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5ib290c3RyYXAgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9pbmRleC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTUFYX1VJRCA9IDEwMDAwMDA7XG4gIGNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMDtcbiAgY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCc7XG5cbiAgLyoqXG4gICAqIFByb3Blcmx5IGVzY2FwZSBJRHMgc2VsZWN0b3JzIHRvIGhhbmRsZSB3ZWlyZCBJRHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBjb25zdCBwYXJzZVNlbGVjdG9yID0gc2VsZWN0b3IgPT4ge1xuICAgIGlmIChzZWxlY3RvciAmJiB3aW5kb3cuQ1NTICYmIHdpbmRvdy5DU1MuZXNjYXBlKSB7XG4gICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIG5lZWRzIGVzY2FwaW5nIHRvIGhhbmRsZSBJRHMgKGh0bWw1KykgY29udGFpbmluZyBmb3IgaW5zdGFuY2UgL1xuICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC8jKFteXFxzXCIjJ10rKS9nLCAobWF0Y2gsIGlkKSA9PiBgIyR7Q1NTLmVzY2FwZShpZCl9YCk7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfTtcblxuICAvLyBTaG91dC1vdXQgQW5ndXMgQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbiAgY29uc3QgdG9UeXBlID0gb2JqZWN0ID0+IHtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYCR7b2JqZWN0fWA7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIFV0aWwgQVBJXG4gICAqL1xuXG4gIGNvbnN0IGdldFVJRCA9IHByZWZpeCA9PiB7XG4gICAgZG8ge1xuICAgICAgcHJlZml4ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpO1xuICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpO1xuICAgIHJldHVybiBwcmVmaXg7XG4gIH07XG4gIGNvbnN0IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICAgIGxldCB7XG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICB0cmFuc2l0aW9uRGVsYXlcbiAgICB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KTtcblxuICAgIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdO1xuICAgIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdO1xuICAgIHJldHVybiAoTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVI7XG4gIH07XG4gIGNvbnN0IHRyaWdnZXJUcmFuc2l0aW9uRW5kID0gZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChUUkFOU0lUSU9OX0VORCkpO1xuICB9O1xuICBjb25zdCBpc0VsZW1lbnQkMSA9IG9iamVjdCA9PiB7XG4gICAgaWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmplY3QuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgb2JqZWN0ID0gb2JqZWN0WzBdO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdC5ub2RlVHlwZSAhPT0gJ3VuZGVmaW5lZCc7XG4gIH07XG4gIGNvbnN0IGdldEVsZW1lbnQgPSBvYmplY3QgPT4ge1xuICAgIC8vIGl0J3MgYSBqUXVlcnkgb2JqZWN0IG9yIGEgbm9kZSBlbGVtZW50XG4gICAgaWYgKGlzRWxlbWVudCQxKG9iamVjdCkpIHtcbiAgICAgIHJldHVybiBvYmplY3QuanF1ZXJ5ID8gb2JqZWN0WzBdIDogb2JqZWN0O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ3N0cmluZycgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcnNlU2VsZWN0b3Iob2JqZWN0KSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICBjb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcbiAgICBpZiAoIWlzRWxlbWVudCQxKGVsZW1lbnQpIHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudElzVmlzaWJsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAndmlzaWJsZSc7XG4gICAgLy8gSGFuZGxlIGBkZXRhaWxzYCBlbGVtZW50IGFzIGl0cyBjb250ZW50IG1heSBmYWxzaWUgYXBwZWFyIHZpc2libGUgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICBjb25zdCBjbG9zZWREZXRhaWxzID0gZWxlbWVudC5jbG9zZXN0KCdkZXRhaWxzOm5vdChbb3Blbl0pJyk7XG4gICAgaWYgKCFjbG9zZWREZXRhaWxzKSB7XG4gICAgICByZXR1cm4gZWxlbWVudElzVmlzaWJsZTtcbiAgICB9XG4gICAgaWYgKGNsb3NlZERldGFpbHMgIT09IGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBlbGVtZW50LmNsb3Nlc3QoJ3N1bW1hcnknKTtcbiAgICAgIGlmIChzdW1tYXJ5ICYmIHN1bW1hcnkucGFyZW50Tm9kZSAhPT0gY2xvc2VkRGV0YWlscykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoc3VtbWFyeSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50SXNWaXNpYmxlO1xuICB9O1xuICBjb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudCA9PiB7XG4gICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50LmRpc2FibGVkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gJ2ZhbHNlJztcbiAgfTtcbiAgY29uc3QgZmluZFNoYWRvd1Jvb3QgPSBlbGVtZW50ID0+IHtcbiAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICAgIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcbiAgICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gICAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgfTtcbiAgY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBUcmljayB0byByZXN0YXJ0IGFuIGVsZW1lbnQncyBhbmltYXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICpcbiAgICogQHNlZSBodHRwczovL3d3dy5jaGFyaXN0aGVvLmlvL2Jsb2cvMjAyMS8wMi9yZXN0YXJ0LWEtY3NzLWFuaW1hdGlvbi13aXRoLWphdmFzY3JpcHQvI3Jlc3RhcnRpbmctYS1jc3MtYW5pbWF0aW9uXG4gICAqL1xuICBjb25zdCByZWZsb3cgPSBlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50Lm9mZnNldEhlaWdodDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgfTtcblxuICBjb25zdCBnZXRqUXVlcnkgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5qUXVlcnkgJiYgIWRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLWJzLW5vLWpxdWVyeScpKSB7XG4gICAgICByZXR1cm4gd2luZG93LmpRdWVyeTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIGNvbnN0IERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MgPSBbXTtcbiAgY29uc3Qgb25ET01Db250ZW50TG9hZGVkID0gY2FsbGJhY2sgPT4ge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgIC8vIGFkZCBsaXN0ZW5lciBvbiB0aGUgZmlyc3QgY2FsbCB3aGVuIHRoZSBkb2N1bWVudCBpcyBpbiBsb2FkaW5nIHN0YXRlXG4gICAgICBpZiAoIURPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaXNSVEwgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09PSAncnRsJztcbiAgY29uc3QgZGVmaW5lSlF1ZXJ5UGx1Z2luID0gcGx1Z2luID0+IHtcbiAgICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgICAgY29uc3QgJCA9IGdldGpRdWVyeSgpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoJCkge1xuICAgICAgICBjb25zdCBuYW1lID0gcGx1Z2luLk5BTUU7XG4gICAgICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bbmFtZV07XG4gICAgICAgICQuZm5bbmFtZV0gPSBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlO1xuICAgICAgICAkLmZuW25hbWVdLkNvbnN0cnVjdG9yID0gcGx1Z2luO1xuICAgICAgICAkLmZuW25hbWVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAgICAgJC5mbltuYW1lXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgICAgICByZXR1cm4gcGx1Z2luLmpRdWVyeUludGVyZmFjZTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgZXhlY3V0ZSA9IChwb3NzaWJsZUNhbGxiYWNrLCBhcmdzID0gW10sIGRlZmF1bHRWYWx1ZSA9IHBvc3NpYmxlQ2FsbGJhY2spID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHBvc3NpYmxlQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBwb3NzaWJsZUNhbGxiYWNrKC4uLmFyZ3MpIDogZGVmYXVsdFZhbHVlO1xuICB9O1xuICBjb25zdCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uID0gKGNhbGxiYWNrLCB0cmFuc2l0aW9uRWxlbWVudCwgd2FpdEZvclRyYW5zaXRpb24gPSB0cnVlKSA9PiB7XG4gICAgaWYgKCF3YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDU7XG4gICAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRyYW5zaXRpb25FbGVtZW50KSArIGR1cmF0aW9uUGFkZGluZztcbiAgICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gICAgY29uc3QgaGFuZGxlciA9ICh7XG4gICAgICB0YXJnZXRcbiAgICB9KSA9PiB7XG4gICAgICBpZiAodGFyZ2V0ICE9PSB0cmFuc2l0aW9uRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgdHJhbnNpdGlvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcik7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHRyYW5zaXRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0sIGVtdWxhdGVkRHVyYXRpb24pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHByZXZpb3VzL25leHQgZWxlbWVudCBvZiBhIGxpc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXl9IGxpc3QgICAgVGhlIGxpc3Qgb2YgZWxlbWVudHNcbiAgICogQHBhcmFtIGFjdGl2ZUVsZW1lbnQgICBUaGUgYWN0aXZlIGVsZW1lbnRcbiAgICogQHBhcmFtIHNob3VsZEdldE5leHQgICBDaG9vc2UgdG8gZ2V0IG5leHQgb3IgcHJldmlvdXMgZWxlbWVudFxuICAgKiBAcGFyYW0gaXNDeWNsZUFsbG93ZWRcbiAgICogQHJldHVybiB7RWxlbWVudHxlbGVtfSBUaGUgcHJvcGVyIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0IGdldE5leHRBY3RpdmVFbGVtZW50ID0gKGxpc3QsIGFjdGl2ZUVsZW1lbnQsIHNob3VsZEdldE5leHQsIGlzQ3ljbGVBbGxvd2VkKSA9PiB7XG4gICAgY29uc3QgbGlzdExlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpbmRleCA9IGxpc3QuaW5kZXhPZihhY3RpdmVFbGVtZW50KTtcblxuICAgIC8vIGlmIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0IGluIHRoZSBsaXN0IHJldHVybiBhbiBlbGVtZW50XG4gICAgLy8gZGVwZW5kaW5nIG9uIHRoZSBkaXJlY3Rpb24gYW5kIGlmIGN5Y2xlIGlzIGFsbG93ZWRcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gIXNob3VsZEdldE5leHQgJiYgaXNDeWNsZUFsbG93ZWQgPyBsaXN0W2xpc3RMZW5ndGggLSAxXSA6IGxpc3RbMF07XG4gICAgfVxuICAgIGluZGV4ICs9IHNob3VsZEdldE5leHQgPyAxIDogLTE7XG4gICAgaWYgKGlzQ3ljbGVBbGxvd2VkKSB7XG4gICAgICBpbmRleCA9IChpbmRleCArIGxpc3RMZW5ndGgpICUgbGlzdExlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RbTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGxpc3RMZW5ndGggLSAxKSldO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgbmFtZXNwYWNlUmVnZXggPSAvW14uXSooPz1cXC4uKilcXC58LiovO1xuICBjb25zdCBzdHJpcE5hbWVSZWdleCA9IC9cXC4uKi87XG4gIGNvbnN0IHN0cmlwVWlkUmVnZXggPSAvOjpcXGQrJC87XG4gIGNvbnN0IGV2ZW50UmVnaXN0cnkgPSB7fTsgLy8gRXZlbnRzIHN0b3JhZ2VcbiAgbGV0IHVpZEV2ZW50ID0gMTtcbiAgY29uc3QgY3VzdG9tRXZlbnRzID0ge1xuICAgIG1vdXNlZW50ZXI6ICdtb3VzZW92ZXInLFxuICAgIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbiAgfTtcbiAgY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ21vdXNldXAnLCAnbW91c2Vkb3duJywgJ2NvbnRleHRtZW51JywgJ21vdXNld2hlZWwnLCAnRE9NTW91c2VTY3JvbGwnLCAnbW91c2VvdmVyJywgJ21vdXNlb3V0JywgJ21vdXNlbW92ZScsICdzZWxlY3RzdGFydCcsICdzZWxlY3RlbmQnLCAna2V5ZG93bicsICdrZXlwcmVzcycsICdrZXl1cCcsICdvcmllbnRhdGlvbmNoYW5nZScsICd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcsICdwb2ludGVyZG93bicsICdwb2ludGVybW92ZScsICdwb2ludGVydXAnLCAncG9pbnRlcmxlYXZlJywgJ3BvaW50ZXJjYW5jZWwnLCAnZ2VzdHVyZXN0YXJ0JywgJ2dlc3R1cmVjaGFuZ2UnLCAnZ2VzdHVyZWVuZCcsICdmb2N1cycsICdibHVyJywgJ2NoYW5nZScsICdyZXNldCcsICdzZWxlY3QnLCAnc3VibWl0JywgJ2ZvY3VzaW4nLCAnZm9jdXNvdXQnLCAnbG9hZCcsICd1bmxvYWQnLCAnYmVmb3JldW5sb2FkJywgJ3Jlc2l6ZScsICdtb3ZlJywgJ0RPTUNvbnRlbnRMb2FkZWQnLCAncmVhZHlzdGF0ZWNoYW5nZScsICdlcnJvcicsICdhYm9ydCcsICdzY3JvbGwnXSk7XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgbWV0aG9kc1xuICAgKi9cblxuICBmdW5jdGlvbiBtYWtlRXZlbnRVaWQoZWxlbWVudCwgdWlkKSB7XG4gICAgcmV0dXJuIHVpZCAmJiBgJHt1aWR9Ojoke3VpZEV2ZW50Kyt9YCB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kys7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KSB7XG4gICAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQudWlkRXZlbnQgPSB1aWQ7XG4gICAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9O1xuICAgIHJldHVybiBldmVudFJlZ2lzdHJ5W3VpZF07XG4gIH1cbiAgZnVuY3Rpb24gYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICBoeWRyYXRlT2JqKGV2ZW50LCB7XG4gICAgICAgIGRlbGVnYXRlVGFyZ2V0OiBlbGVtZW50XG4gICAgICB9KTtcbiAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIHNlbGVjdG9yLCBmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICBmb3IgKGxldCB7XG4gICAgICAgIHRhcmdldFxuICAgICAgfSA9IGV2ZW50OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGRvbUVsZW1lbnQgb2YgZG9tRWxlbWVudHMpIHtcbiAgICAgICAgICBpZiAoZG9tRWxlbWVudCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHlkcmF0ZU9iaihldmVudCwge1xuICAgICAgICAgICAgZGVsZWdhdGVUYXJnZXQ6IHRhcmdldFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBzZWxlY3RvciwgZm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZmluZEhhbmRsZXIoZXZlbnRzLCBjYWxsYWJsZSwgZGVsZWdhdGlvblNlbGVjdG9yID0gbnVsbCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKGV2ZW50cykuZmluZChldmVudCA9PiBldmVudC5jYWxsYWJsZSA9PT0gY2FsbGFibGUgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpO1xuICB9XG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGNvbnN0IGlzRGVsZWdhdGVkID0gdHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnO1xuICAgIC8vIHRvZG86IHRvb2x0aXAgcGFzc2VzIGBmYWxzZWAgaW5zdGVhZCBvZiBzZWxlY3Rvciwgc28gd2UgbmVlZCB0byBjaGVja1xuICAgIGNvbnN0IGNhbGxhYmxlID0gaXNEZWxlZ2F0ZWQgPyBkZWxlZ2F0aW9uRnVuY3Rpb24gOiBoYW5kbGVyIHx8IGRlbGVnYXRpb25GdW5jdGlvbjtcbiAgICBsZXQgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KG9yaWdpbmFsVHlwZUV2ZW50KTtcbiAgICBpZiAoIW5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KSkge1xuICAgICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnQ7XG4gICAgfVxuICAgIHJldHVybiBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgb25lT2ZmKSB7XG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pO1xuXG4gICAgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAgIC8vIHRoaXMgcHJldmVudHMgdGhlIGhhbmRsZXIgZnJvbSBiZWluZyBkaXNwYXRjaGVkIHRoZSBzYW1lIHdheSBhcyBtb3VzZW92ZXIgb3IgbW91c2VvdXQgZG9lc1xuICAgIGlmIChvcmlnaW5hbFR5cGVFdmVudCBpbiBjdXN0b21FdmVudHMpIHtcbiAgICAgIGNvbnN0IHdyYXBGdW5jdGlvbiA9IGZuID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCB8fCBldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSBldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiAhZXZlbnQuZGVsZWdhdGVUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgY2FsbGFibGUgPSB3cmFwRnVuY3Rpb24oY2FsbGFibGUpO1xuICAgIH1cbiAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpO1xuICAgIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVFdmVudF0gfHwgKGV2ZW50c1t0eXBlRXZlbnRdID0ge30pO1xuICAgIGNvbnN0IHByZXZpb3VzRnVuY3Rpb24gPSBmaW5kSGFuZGxlcihoYW5kbGVycywgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpO1xuICAgIGlmIChwcmV2aW91c0Z1bmN0aW9uKSB7XG4gICAgICBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiA9IHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmICYmIG9uZU9mZjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGNhbGxhYmxlLCBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpO1xuICAgIGNvbnN0IGZuID0gaXNEZWxlZ2F0ZWQgPyBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjYWxsYWJsZSkgOiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGNhbGxhYmxlKTtcbiAgICBmbi5kZWxlZ2F0aW9uU2VsZWN0b3IgPSBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsO1xuICAgIGZuLmNhbGxhYmxlID0gY2FsbGFibGU7XG4gICAgZm4ub25lT2ZmID0gb25lT2ZmO1xuICAgIGZuLnVpZEV2ZW50ID0gdWlkO1xuICAgIGhhbmRsZXJzW3VpZF0gPSBmbjtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgaXNEZWxlZ2F0ZWQpO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICAgIGNvbnN0IGZuID0gZmluZEhhbmRsZXIoZXZlbnRzW3R5cGVFdmVudF0sIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcik7XG4gICAgaWYgKCFmbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgQm9vbGVhbihkZWxlZ2F0aW9uU2VsZWN0b3IpKTtcbiAgICBkZWxldGUgZXZlbnRzW3R5cGVFdmVudF1bZm4udWlkRXZlbnRdO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgbmFtZXNwYWNlKSB7XG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fTtcbiAgICBmb3IgKGNvbnN0IFtoYW5kbGVyS2V5LCBldmVudF0gb2YgT2JqZWN0LmVudHJpZXMoc3RvcmVFbGVtZW50RXZlbnQpKSB7XG4gICAgICBpZiAoaGFuZGxlcktleS5pbmNsdWRlcyhuYW1lc3BhY2UpKSB7XG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRUeXBlRXZlbnQoZXZlbnQpIHtcbiAgICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gICAgZXZlbnQgPSBldmVudC5yZXBsYWNlKHN0cmlwTmFtZVJlZ2V4LCAnJyk7XG4gICAgcmV0dXJuIGN1c3RvbUV2ZW50c1tldmVudF0gfHwgZXZlbnQ7XG4gIH1cbiAgY29uc3QgRXZlbnRIYW5kbGVyID0ge1xuICAgIG9uKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgZmFsc2UpO1xuICAgIH0sXG4gICAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgdHJ1ZSk7XG4gICAgfSxcbiAgICBvZmYoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbik7XG4gICAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnQ7XG4gICAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpO1xuICAgICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fTtcbiAgICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpO1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gU2ltcGxlc3QgY2FzZTogaGFuZGxlciBpcyBwYXNzZWQsIHJlbW92ZSB0aGF0IGxpc3RlbmVyIE9OTFkuXG4gICAgICAgIGlmICghT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpc05hbWVzcGFjZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnRFdmVudCBvZiBPYmplY3Qua2V5cyhldmVudHMpKSB7XG4gICAgICAgICAgcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgZWxlbWVudEV2ZW50LCBvcmlnaW5hbFR5cGVFdmVudC5zbGljZSgxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgW2tleUhhbmRsZXJzLCBldmVudF0gb2YgT2JqZWN0LmVudHJpZXMoc3RvcmVFbGVtZW50RXZlbnQpKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKTtcbiAgICAgICAgaWYgKCFpbk5hbWVzcGFjZSB8fCBvcmlnaW5hbFR5cGVFdmVudC5pbmNsdWRlcyhoYW5kbGVyS2V5KSkge1xuICAgICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0cmlnZ2VyKGVsZW1lbnQsIGV2ZW50LCBhcmdzKSB7XG4gICAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKTtcbiAgICAgIGNvbnN0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChldmVudCk7XG4gICAgICBjb25zdCBpbk5hbWVzcGFjZSA9IGV2ZW50ICE9PSB0eXBlRXZlbnQ7XG4gICAgICBsZXQgalF1ZXJ5RXZlbnQgPSBudWxsO1xuICAgICAgbGV0IGJ1YmJsZXMgPSB0cnVlO1xuICAgICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZTtcbiAgICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XG4gICAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xuICAgICAgICBqUXVlcnlFdmVudCA9ICQuRXZlbnQoZXZlbnQsIGFyZ3MpO1xuICAgICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpO1xuICAgICAgICBidWJibGVzID0gIWpRdWVyeUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCk7XG4gICAgICAgIG5hdGl2ZURpc3BhdGNoID0gIWpRdWVyeUV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCk7XG4gICAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcbiAgICAgIH1cbiAgICAgIGxldCBldnQgPSBuZXcgRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBldnQgPSBoeWRyYXRlT2JqKGV2dCwgYXJncyk7XG4gICAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgIH1cbiAgICAgIGlmIChldnQuZGVmYXVsdFByZXZlbnRlZCAmJiBqUXVlcnlFdmVudCkge1xuICAgICAgICBqUXVlcnlFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV2dDtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIGh5ZHJhdGVPYmoob2JqLCBtZXRhID0ge30pIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXRhKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBkb20vZGF0YS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpO1xuICBjb25zdCBEYXRhID0ge1xuICAgIHNldChlbGVtZW50LCBrZXksIGluc3RhbmNlKSB7XG4gICAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIGVsZW1lbnRNYXAuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpO1xuXG4gICAgICAvLyBtYWtlIGl0IGNsZWFyIHdlIG9ubHkgd2FudCBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnRcbiAgICAgIC8vIGNhbiBiZSByZW1vdmVkIGxhdGVyIHdoZW4gbXVsdGlwbGUga2V5L2luc3RhbmNlcyBhcmUgZmluZSB0byBiZSB1c2VkXG4gICAgICBpZiAoIWluc3RhbmNlTWFwLmhhcyhrZXkpICYmIGluc3RhbmNlTWFwLnNpemUgIT09IDApIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5lcnJvcihgQm9vdHN0cmFwIGRvZXNuJ3QgYWxsb3cgbW9yZSB0aGFuIG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudC4gQm91bmQgaW5zdGFuY2U6ICR7QXJyYXkuZnJvbShpbnN0YW5jZU1hcC5rZXlzKCkpWzBdfS5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5zdGFuY2VNYXAuc2V0KGtleSwgaW5zdGFuY2UpO1xuICAgIH0sXG4gICAgZ2V0KGVsZW1lbnQsIGtleSkge1xuICAgICAgaWYgKGVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50TWFwLmdldChlbGVtZW50KS5nZXQoa2V5KSB8fCBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICByZW1vdmUoZWxlbWVudCwga2V5KSB7XG4gICAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudCk7XG4gICAgICBpbnN0YW5jZU1hcC5kZWxldGUoa2V5KTtcblxuICAgICAgLy8gZnJlZSB1cCBlbGVtZW50IHJlZmVyZW5jZXMgaWYgdGhlcmUgYXJlIG5vIGluc3RhbmNlcyBsZWZ0IGZvciBhbiBlbGVtZW50XG4gICAgICBpZiAoaW5zdGFuY2VNYXAuc2l6ZSA9PT0gMCkge1xuICAgICAgICBlbGVtZW50TWFwLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBkb20vbWFuaXB1bGF0b3IuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IE51bWJlcih2YWx1ZSkudG9TdHJpbmcoKSkge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICB9IGNhdGNoIChfdW51c2VkKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleS5yZXBsYWNlKC9bQS1aXS9nLCBjaHIgPT4gYC0ke2Noci50b0xvd2VyQ2FzZSgpfWApO1xuICB9XG4gIGNvbnN0IE1hbmlwdWxhdG9yID0ge1xuICAgIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCwgdmFsdWUpO1xuICAgIH0sXG4gICAgcmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApO1xuICAgIH0sXG4gICAgZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgIGNvbnN0IGJzS2V5cyA9IE9iamVjdC5rZXlzKGVsZW1lbnQuZGF0YXNldCkuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnYnMnKSAmJiAha2V5LnN0YXJ0c1dpdGgoJ2JzQ29uZmlnJykpO1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgYnNLZXlzKSB7XG4gICAgICAgIGxldCBwdXJlS2V5ID0ga2V5LnJlcGxhY2UoL15icy8sICcnKTtcbiAgICAgICAgcHVyZUtleSA9IHB1cmVLZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwdXJlS2V5LnNsaWNlKDEsIHB1cmVLZXkubGVuZ3RoKTtcbiAgICAgICAgYXR0cmlidXRlc1twdXJlS2V5XSA9IG5vcm1hbGl6ZURhdGEoZWxlbWVudC5kYXRhc2V0W2tleV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfSxcbiAgICBnZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZURhdGEoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvY29uZmlnLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBDb25maWcge1xuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBzdGF0aWMgbWV0aG9kIFwiTkFNRVwiLCBmb3IgZWFjaCBjb21wb25lbnQhJyk7XG4gICAgfVxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpO1xuICAgICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpO1xuICAgICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZyk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9tZXJnZUNvbmZpZ09iaihjb25maWcsIGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGpzb25Db25maWcgPSBpc0VsZW1lbnQkMShlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgJ2NvbmZpZycpIDoge307IC8vIHRyeSB0byBwYXJzZVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAgIC4uLih0eXBlb2YganNvbkNvbmZpZyA9PT0gJ29iamVjdCcgPyBqc29uQ29uZmlnIDoge30pLFxuICAgICAgICAuLi4oaXNFbGVtZW50JDEoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSA6IHt9KSxcbiAgICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgICB9O1xuICAgIH1cbiAgICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZywgY29uZmlnVHlwZXMgPSB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKSB7XG4gICAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgZXhwZWN0ZWRUeXBlc10gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnVHlwZXMpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gaXNFbGVtZW50JDEodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgYmFzZS1jb21wb25lbnQuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgVkVSU0lPTiA9ICc1LjMuMC1hbHBoYTInO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIGVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICBEYXRhLnNldCh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBkaXNwb3NlKCkge1xuICAgICAgRGF0YS5yZW1vdmUodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSk7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKTtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHlOYW1lIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIF9xdWV1ZUNhbGxiYWNrKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkID0gdHJ1ZSkge1xuICAgICAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbihjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZCk7XG4gICAgfVxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcsIHRoaXMuX2VsZW1lbnQpO1xuICAgICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpO1xuICAgICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZyk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgICByZXR1cm4gRGF0YS5nZXQoZ2V0RWxlbWVudChlbGVtZW50KSwgdGhpcy5EQVRBX0tFWSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIGNvbmZpZyA9IHt9KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZShlbGVtZW50KSB8fCBuZXcgdGhpcyhlbGVtZW50LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGwpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICAgIHJldHVybiBgYnMuJHt0aGlzLk5BTUV9YDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgICByZXR1cm4gYC4ke3RoaXMuREFUQV9LRVl9YDtcbiAgICB9XG4gICAgc3RhdGljIGV2ZW50TmFtZShuYW1lKSB7XG4gICAgICByZXR1cm4gYCR7bmFtZX0ke3RoaXMuRVZFTlRfS0VZfWA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgY29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKTtcbiAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICAgIGxldCBocmVmQXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgICAgLy8gVGhlIG9ubHkgdmFsaWQgY29udGVudCB0aGF0IGNvdWxkIGRvdWJsZSBhcyBhIHNlbGVjdG9yIGFyZSBJRHMgb3IgY2xhc3NlcyxcbiAgICAgIC8vIHNvIGV2ZXJ5dGhpbmcgc3RhcnRpbmcgd2l0aCBgI2Agb3IgYC5gLiBJZiBhIFwicmVhbFwiIFVSTCBpcyB1c2VkIGFzIHRoZSBzZWxlY3RvcixcbiAgICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzMyMjczXG4gICAgICBpZiAoIWhyZWZBdHRyaWJ1dGUgfHwgIWhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcuJykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgICAgaWYgKGhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgaHJlZkF0dHJpYnV0ZSA9IGAjJHtocmVmQXR0cmlidXRlLnNwbGl0KCcjJylbMV19YDtcbiAgICAgIH1cbiAgICAgIHNlbGVjdG9yID0gaHJlZkF0dHJpYnV0ZSAmJiBocmVmQXR0cmlidXRlICE9PSAnIycgPyBocmVmQXR0cmlidXRlLnRyaW0oKSA6IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfTtcbiAgY29uc3QgU2VsZWN0b3JFbmdpbmUgPSB7XG4gICAgZmluZChzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdCguLi5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKTtcbiAgICB9LFxuICAgIGZpbmRPbmUoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xuICAgIH0sXG4gICAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbikuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKTtcbiAgICB9LFxuICAgIHBhcmVudHMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgIGxldCBhbmNlc3RvciA9IGVsZW1lbnQucGFyZW50Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgICBwYXJlbnRzLnB1c2goYW5jZXN0b3IpO1xuICAgICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyZW50cztcbiAgICB9LFxuICAgIHByZXYoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIGxldCBwcmV2aW91cyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgIHdoaWxlIChwcmV2aW91cykge1xuICAgICAgICBpZiAocHJldmlvdXMubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gW3ByZXZpb3VzXTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gW107XG4gICAgfSxcbiAgICAvLyBUT0RPOiB0aGlzIGlzIG5vdyB1bnVzZWQ7IHJlbW92ZSBsYXRlciBhbG9uZyB3aXRoIHByZXYoKVxuICAgIG5leHQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIGxldCBuZXh0ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB3aGlsZSAobmV4dCkge1xuICAgICAgICBpZiAobmV4dC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBbbmV4dF07XG4gICAgICAgIH1cbiAgICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgZm9jdXNhYmxlQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgICAgY29uc3QgZm9jdXNhYmxlcyA9IFsnYScsICdidXR0b24nLCAnaW5wdXQnLCAndGV4dGFyZWEnLCAnc2VsZWN0JywgJ2RldGFpbHMnLCAnW3RhYmluZGV4XScsICdbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSddLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn06bm90KFt0YWJpbmRleF49XCItXCJdKWApLmpvaW4oJywnKTtcbiAgICAgIHJldHVybiB0aGlzLmZpbmQoZm9jdXNhYmxlcywgZWxlbWVudCkuZmlsdGVyKGVsID0+ICFpc0Rpc2FibGVkKGVsKSAmJiBpc1Zpc2libGUoZWwpKTtcbiAgICB9LFxuICAgIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IpIDogbnVsbDtcbiAgICB9LFxuICAgIGdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpIDogW107XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgY29uc3QgZW5hYmxlRGlzbWlzc1RyaWdnZXIgPSAoY29tcG9uZW50LCBtZXRob2QgPSAnaGlkZScpID0+IHtcbiAgICBjb25zdCBjbGlja0V2ZW50ID0gYGNsaWNrLmRpc21pc3Mke2NvbXBvbmVudC5FVkVOVF9LRVl9YDtcbiAgICBjb25zdCBuYW1lID0gY29tcG9uZW50Lk5BTUU7XG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBjbGlja0V2ZW50LCBgW2RhdGEtYnMtZGlzbWlzcz1cIiR7bmFtZX1cIl1gLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcykgfHwgdGhpcy5jbG9zZXN0KGAuJHtuYW1lfWApO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpO1xuXG4gICAgICAvLyBNZXRob2QgYXJndW1lbnQgaXMgbGVmdCwgZm9yIEFsZXJ0IGFuZCBvbmx5LCBhcyBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgJ2hpZGUnIG1ldGhvZFxuICAgICAgaW5zdGFuY2VbbWV0aG9kXSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgYWxlcnQuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSRmID0gJ2FsZXJ0JztcbiAgY29uc3QgREFUQV9LRVkkYSA9ICdicy5hbGVydCc7XG4gIGNvbnN0IEVWRU5UX0tFWSRiID0gYC4ke0RBVEFfS0VZJGF9YDtcbiAgY29uc3QgRVZFTlRfQ0xPU0UgPSBgY2xvc2Uke0VWRU5UX0tFWSRifWA7XG4gIGNvbnN0IEVWRU5UX0NMT1NFRCA9IGBjbG9zZWQke0VWRU5UX0tFWSRifWA7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQ1ID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckOCA9ICdzaG93JztcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBBbGVydCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRmO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGNsb3NlKCkge1xuICAgICAgY29uc3QgY2xvc2VFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFKTtcbiAgICAgIGlmIChjbG9zZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ4KTtcbiAgICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkNSk7XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KCksIHRoaXMuX2VsZW1lbnQsIGlzQW5pbWF0ZWQpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfZGVzdHJveUVsZW1lbnQoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xPU0VEKTtcbiAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEFsZXJ0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBlbmFibGVEaXNtaXNzVHJpZ2dlcihBbGVydCwgJ2Nsb3NlJyk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oQWxlcnQpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgYnV0dG9uLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkZSA9ICdidXR0b24nO1xuICBjb25zdCBEQVRBX0tFWSQ5ID0gJ2JzLmJ1dHRvbic7XG4gIGNvbnN0IEVWRU5UX0tFWSRhID0gYC4ke0RBVEFfS0VZJDl9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZJDYgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUkMyA9ICdhY3RpdmUnO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ1ID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImJ1dHRvblwiXSc7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDYgPSBgY2xpY2ske0VWRU5UX0tFWSRhfSR7REFUQV9BUElfS0VZJDZ9YDtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkZTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICB0b2dnbGUoKSB7XG4gICAgICAvLyBUb2dnbGUgY2xhc3MgYW5kIHN5bmMgdGhlIGBhcmlhLXByZXNzZWRgIGF0dHJpYnV0ZSB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGAudG9nZ2xlKClgIG1ldGhvZFxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSQzKSk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gQnV0dG9uLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7XG4gICAgICAgIGlmIChjb25maWcgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDYsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDUsIGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RBVEFfVE9HR0xFJDUpO1xuICAgIGNvbnN0IGRhdGEgPSBCdXR0b24uZ2V0T3JDcmVhdGVJbnN0YW5jZShidXR0b24pO1xuICAgIGRhdGEudG9nZ2xlKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKEJ1dHRvbik7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL3N3aXBlLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkZCA9ICdzd2lwZSc7XG4gIGNvbnN0IEVWRU5UX0tFWSQ5ID0gJy5icy5zd2lwZSc7XG4gIGNvbnN0IEVWRU5UX1RPVUNIU1RBUlQgPSBgdG91Y2hzdGFydCR7RVZFTlRfS0VZJDl9YDtcbiAgY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZJDl9YDtcbiAgY29uc3QgRVZFTlRfVE9VQ0hFTkQgPSBgdG91Y2hlbmQke0VWRU5UX0tFWSQ5fWA7XG4gIGNvbnN0IEVWRU5UX1BPSU5URVJET1dOID0gYHBvaW50ZXJkb3duJHtFVkVOVF9LRVkkOX1gO1xuICBjb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVkkOX1gO1xuICBjb25zdCBQT0lOVEVSX1RZUEVfVE9VQ0ggPSAndG91Y2gnO1xuICBjb25zdCBQT0lOVEVSX1RZUEVfUEVOID0gJ3Blbic7XG4gIGNvbnN0IENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCA9ICdwb2ludGVyLWV2ZW50JztcbiAgY29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNDA7XG4gIGNvbnN0IERlZmF1bHQkYyA9IHtcbiAgICBlbmRDYWxsYmFjazogbnVsbCxcbiAgICBsZWZ0Q2FsbGJhY2s6IG51bGwsXG4gICAgcmlnaHRDYWxsYmFjazogbnVsbFxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSRjID0ge1xuICAgIGVuZENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgICBsZWZ0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICAgIHJpZ2h0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgU3dpcGUgZXh0ZW5kcyBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fZGVsdGFYID0gMDtcbiAgICAgIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50KTtcbiAgICAgIHRoaXMuX2luaXRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkYztcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSRjO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRkO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWSQ5KTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX3N0YXJ0KGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICB9XG4gICAgfVxuICAgIF9lbmQoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy5fZGVsdGFYO1xuICAgICAgfVxuICAgICAgdGhpcy5faGFuZGxlU3dpcGUoKTtcbiAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmVuZENhbGxiYWNrKTtcbiAgICB9XG4gICAgX21vdmUoZXZlbnQpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxID8gMCA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX2RlbHRhWDtcbiAgICB9XG4gICAgX2hhbmRsZVN3aXBlKCkge1xuICAgICAgY29uc3QgYWJzRGVsdGFYID0gTWF0aC5hYnModGhpcy5fZGVsdGFYKTtcbiAgICAgIGlmIChhYnNEZWx0YVggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRhWCAvIHRoaXMuX2RlbHRhWDtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IDA7XG4gICAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBleGVjdXRlKGRpcmVjdGlvbiA+IDAgPyB0aGlzLl9jb25maWcucmlnaHRDYWxsYmFjayA6IHRoaXMuX2NvbmZpZy5sZWZ0Q2FsbGJhY2spO1xuICAgIH1cbiAgICBfaW5pdEV2ZW50cygpIHtcbiAgICAgIGlmICh0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cykge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUkRPV04sIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpO1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiB0aGlzLl9tb3ZlKGV2ZW50KSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgJiYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfUEVOIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfVE9VQ0gpO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICAgIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGNhcm91c2VsLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkYyA9ICdjYXJvdXNlbCc7XG4gIGNvbnN0IERBVEFfS0VZJDggPSAnYnMuY2Fyb3VzZWwnO1xuICBjb25zdCBFVkVOVF9LRVkkOCA9IGAuJHtEQVRBX0tFWSQ4fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQ1ID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEFSUk9XX0xFRlRfS0VZJDEgPSAnQXJyb3dMZWZ0JztcbiAgY29uc3QgQVJST1dfUklHSFRfS0VZJDEgPSAnQXJyb3dSaWdodCc7XG4gIGNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDA7IC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuXG4gIGNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCc7XG4gIGNvbnN0IE9SREVSX1BSRVYgPSAncHJldic7XG4gIGNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnO1xuICBjb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnO1xuICBjb25zdCBFVkVOVF9TTElERSA9IGBzbGlkZSR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVkkOH1gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOJDEgPSBga2V5ZG93biR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfTU9VU0VFTlRFUiQxID0gYG1vdXNlZW50ZXIke0VWRU5UX0tFWSQ4fWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFTEVBVkUkMSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVkkOH1gO1xuICBjb25zdCBFVkVOVF9EUkFHX1NUQVJUID0gYGRyYWdzdGFydCR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSQzID0gYGxvYWQke0VWRU5UX0tFWSQ4fSR7REFUQV9BUElfS0VZJDV9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNSA9IGBjbGljayR7RVZFTlRfS0VZJDh9JHtEQVRBX0FQSV9LRVkkNX1gO1xuICBjb25zdCBDTEFTU19OQU1FX0NBUk9VU0VMID0gJ2Nhcm91c2VsJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUkMiA9ICdhY3RpdmUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NMSURFID0gJ3NsaWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9FTkQgPSAnY2Fyb3VzZWwtaXRlbS1lbmQnO1xuICBjb25zdCBDTEFTU19OQU1FX1NUQVJUID0gJ2Nhcm91c2VsLWl0ZW0tc3RhcnQnO1xuICBjb25zdCBDTEFTU19OQU1FX05FWFQgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9QUkVWID0gJ2Nhcm91c2VsLWl0ZW0tcHJldic7XG4gIGNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJztcbiAgY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSc7XG4gIGNvbnN0IFNFTEVDVE9SX0FDVElWRV9JVEVNID0gU0VMRUNUT1JfQUNUSVZFICsgU0VMRUNUT1JfSVRFTTtcbiAgY29uc3QgU0VMRUNUT1JfSVRFTV9JTUcgPSAnLmNhcm91c2VsLWl0ZW0gaW1nJztcbiAgY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycyc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfU0xJREUgPSAnW2RhdGEtYnMtc2xpZGVdLCBbZGF0YS1icy1zbGlkZS10b10nO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1JJREUgPSAnW2RhdGEtYnMtcmlkZT1cImNhcm91c2VsXCJdJztcbiAgY29uc3QgS0VZX1RPX0RJUkVDVElPTiA9IHtcbiAgICBbQVJST1dfTEVGVF9LRVkkMV06IERJUkVDVElPTl9SSUdIVCxcbiAgICBbQVJST1dfUklHSFRfS0VZJDFdOiBESVJFQ1RJT05fTEVGVFxuICB9O1xuICBjb25zdCBEZWZhdWx0JGIgPSB7XG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgcGF1c2U6ICdob3ZlcicsXG4gICAgcmlkZTogZmFsc2UsXG4gICAgdG91Y2g6IHRydWUsXG4gICAgd3JhcDogdHJ1ZVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSRiID0ge1xuICAgIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsXG4gICAgLy8gVE9ETzp2NiByZW1vdmUgYm9vbGVhbiBzdXBwb3J0XG4gICAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgICBwYXVzZTogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHJpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICB0b3VjaDogJ2Jvb2xlYW4nLFxuICAgIHdyYXA6ICdib29sZWFuJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbDtcbiAgICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbnVsbDtcbiAgICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTkRJQ0FUT1JTLCB0aGlzLl9lbGVtZW50KTtcbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnJpZGUgPT09IENMQVNTX05BTUVfQ0FST1VTRUwpIHtcbiAgICAgICAgdGhpcy5jeWNsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCRiO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJGI7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJGM7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgbmV4dCgpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX05FWFQpO1xuICAgIH1cbiAgICBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgICAvLyBGSVhNRSBUT0RPIHVzZSBgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlYFxuICAgICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBwcmV2KCkge1xuICAgICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVik7XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKTtcbiAgICB9XG4gICAgY3ljbGUoKSB7XG4gICAgICB0aGlzLl9jbGVhckludGVydmFsKCk7XG4gICAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLm5leHRXaGVuVmlzaWJsZSgpLCB0aGlzLl9jb25maWcuaW50ZXJ2YWwpO1xuICAgIH1cbiAgICBfbWF5YmVFbmFibGVDeWNsZSgpIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnJpZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMuY3ljbGUoKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICB9XG4gICAgdG8oaW5kZXgpIHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXMoKTtcbiAgICAgIGlmIChpbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2dldEFjdGl2ZSgpKTtcbiAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVY7XG4gICAgICB0aGlzLl9zbGlkZShvcmRlciwgaXRlbXNbaW5kZXhdKTtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIGlmICh0aGlzLl9zd2lwZUhlbHBlcikge1xuICAgICAgICB0aGlzLl9zd2lwZUhlbHBlci5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IGNvbmZpZy5pbnRlcnZhbDtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04kMSwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VFTlRFUiQxLCAoKSA9PiB0aGlzLnBhdXNlKCkpO1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSQxLCAoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCAmJiBTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBmb3IgKGNvbnN0IGltZyBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU1fSU1HLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub24oaW1nLCBFVkVOVF9EUkFHX1NUQVJULCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVuZENhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlICE9PSAnaG92ZXInKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgc3dpcGVDb25maWcgPSB7XG4gICAgICAgIGxlZnRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fTEVGVCkpLFxuICAgICAgICByaWdodENhbGxiYWNrOiAoKSA9PiB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKERJUkVDVElPTl9SSUdIVCkpLFxuICAgICAgICBlbmRDYWxsYmFjazogZW5kQ2FsbEJhY2tcbiAgICAgIH07XG4gICAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG5ldyBTd2lwZSh0aGlzLl9lbGVtZW50LCBzd2lwZUNvbmZpZyk7XG4gICAgfVxuICAgIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gS0VZX1RPX0RJUkVDVElPTltldmVudC5rZXldO1xuICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikpO1xuICAgICAgfVxuICAgIH1cbiAgICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRJdGVtcygpLmluZGV4T2YoZWxlbWVudCk7XG4gICAgfVxuICAgIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGluZGV4KSB7XG4gICAgICBpZiAoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCk7XG4gICAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSQyKTtcbiAgICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpO1xuICAgICAgY29uc3QgbmV3QWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShgW2RhdGEtYnMtc2xpZGUtdG89XCIke2luZGV4fVwiXWAsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KTtcbiAgICAgIGlmIChuZXdBY3RpdmVJbmRpY2F0b3IpIHtcbiAgICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMik7XG4gICAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICd0cnVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IHRoaXMuX2dldEFjdGl2ZSgpO1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMCk7XG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSBlbGVtZW50SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbDtcbiAgICB9XG4gICAgX3NsaWRlKG9yZGVyLCBlbGVtZW50ID0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZ2V0QWN0aXZlKCk7XG4gICAgICBjb25zdCBpc05leHQgPSBvcmRlciA9PT0gT1JERVJfTkVYVDtcbiAgICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCBnZXROZXh0QWN0aXZlRWxlbWVudCh0aGlzLl9nZXRJdGVtcygpLCBhY3RpdmVFbGVtZW50LCBpc05leHQsIHRoaXMuX2NvbmZpZy53cmFwKTtcbiAgICAgIGlmIChuZXh0RWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KTtcbiAgICAgIGNvbnN0IHRyaWdnZXJFdmVudCA9IGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIHJldHVybiBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBldmVudE5hbWUsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgICBkaXJlY3Rpb246IHRoaXMuX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpLFxuICAgICAgICAgIGZyb206IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KSxcbiAgICAgICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBjb25zdCBzbGlkZUV2ZW50ID0gdHJpZ2dlckV2ZW50KEVWRU5UX1NMSURFKTtcbiAgICAgIGlmIChzbGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgICAgLy8gdG9kbzogY2hhbmdlIHRlc3RzIHRoYXQgdXNlIGVtcHR5IGRpdnMgdG8gYXZvaWQgdGhpcyBjaGVja1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKTtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50SW5kZXgpO1xuICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50O1xuICAgICAgY29uc3QgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX1NUQVJUIDogQ0xBU1NfTkFNRV9FTkQ7XG4gICAgICBjb25zdCBvcmRlckNsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfTkVYVCA6IENMQVNTX05BTUVfUFJFVjtcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQob3JkZXJDbGFzc05hbWUpO1xuICAgICAgcmVmbG93KG5leHRFbGVtZW50KTtcbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKTtcbiAgICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZGlyZWN0aW9uYWxDbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKTtcbiAgICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQyKTtcbiAgICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDIsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJRCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuICAgICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgICB0aGlzLmN5Y2xlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIF9pc0FuaW1hdGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0xJREUpO1xuICAgIH1cbiAgICBfZ2V0QWN0aXZlKCkge1xuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpO1xuICAgIH1cbiAgICBfZ2V0SXRlbXMoKSB7XG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNLCB0aGlzLl9lbGVtZW50KTtcbiAgICB9XG4gICAgX2NsZWFySW50ZXJ2YWwoKSB7XG4gICAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSB7XG4gICAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVjtcbiAgICB9XG4gICAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9MRUZUIDogRElSRUNUSU9OX1JJR0hUO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX1JJR0hUIDogRElSRUNUSU9OX0xFRlQ7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBkYXRhLnRvKGNvbmZpZyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDUsIFNFTEVDVE9SX0RBVEFfU0xJREUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7XG4gICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjYXJvdXNlbCA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KTtcbiAgICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKTtcbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgY2Fyb3VzZWwudG8oc2xpZGVJbmRleCk7XG4gICAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZSh0aGlzLCAnc2xpZGUnKSA9PT0gJ25leHQnKSB7XG4gICAgICBjYXJvdXNlbC5uZXh0KCk7XG4gICAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYXJvdXNlbC5wcmV2KCk7XG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKTtcbiAgfSk7XG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEkkMywgKCkgPT4ge1xuICAgIGNvbnN0IGNhcm91c2VscyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKTtcbiAgICBmb3IgKGNvbnN0IGNhcm91c2VsIG9mIGNhcm91c2Vscykge1xuICAgICAgQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShjYXJvdXNlbCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbCk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBjb2xsYXBzZS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJGIgPSAnY29sbGFwc2UnO1xuICBjb25zdCBEQVRBX0tFWSQ3ID0gJ2JzLmNvbGxhcHNlJztcbiAgY29uc3QgRVZFTlRfS0VZJDcgPSBgLiR7REFUQV9LRVkkN31gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkkNCA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBFVkVOVF9TSE9XJDYgPSBgc2hvdyR7RVZFTlRfS0VZJDd9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kNiA9IGBzaG93biR7RVZFTlRfS0VZJDd9YDtcbiAgY29uc3QgRVZFTlRfSElERSQ2ID0gYGhpZGUke0VWRU5UX0tFWSQ3fWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQ2ID0gYGhpZGRlbiR7RVZFTlRfS0VZJDd9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNCA9IGBjbGljayR7RVZFTlRfS0VZJDd9JHtEQVRBX0FQSV9LRVkkNH1gO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckNyA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRSA9ICdjb2xsYXBzZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgPSAnY29sbGFwc2VkJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4gPSBgOnNjb3BlIC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9IC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9IT1JJWk9OVEFMID0gJ2NvbGxhcHNlLWhvcml6b250YWwnO1xuICBjb25zdCBXSURUSCA9ICd3aWR0aCc7XG4gIGNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnO1xuICBjb25zdCBTRUxFQ1RPUl9BQ1RJVkVTID0gJy5jb2xsYXBzZS5zaG93LCAuY29sbGFwc2UuY29sbGFwc2luZyc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nO1xuICBjb25zdCBEZWZhdWx0JGEgPSB7XG4gICAgcGFyZW50OiBudWxsLFxuICAgIHRvZ2dsZTogdHJ1ZVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSRhID0ge1xuICAgIHBhcmVudDogJyhudWxsfGVsZW1lbnQpJyxcbiAgICB0b2dnbGU6ICdib29sZWFuJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBbXTtcbiAgICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQpO1xuICAgICAgZm9yIChjb25zdCBlbGVtIG9mIHRvZ2dsZUxpc3QpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBTZWxlY3RvckVuZ2luZS5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pO1xuICAgICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikuZmlsdGVyKGZvdW5kRWxlbWVudCA9PiBmb3VuZEVsZW1lbnQgPT09IHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKCk7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JGE7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkYTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkYjtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8IHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXTtcblxuICAgICAgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICAgIGFjdGl2ZUNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0FDVElWRVMpLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpLm1hcChlbGVtZW50ID0+IENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwge1xuICAgICAgICAgIHRvZ2dsZTogZmFsc2VcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgaWYgKGFjdGl2ZUNoaWxkcmVuLmxlbmd0aCAmJiBhY3RpdmVDaGlsZHJlblswXS5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XJDYpO1xuICAgICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGFjdGl2ZUluc3RhbmNlIG9mIGFjdGl2ZUNoaWxkcmVuKSB7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwO1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSk7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVyQ3KTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOJDYpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSk7XG4gICAgICBjb25zdCBzY3JvbGxTaXplID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YDtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGA7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUkNik7XG4gICAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YDtcbiAgICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVyQ3KTtcbiAgICAgIGZvciAoY29uc3QgdHJpZ2dlciBvZiB0aGlzLl90cmlnZ2VyQXJyYXkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodHJpZ2dlcik7XG4gICAgICAgIGlmIChlbGVtZW50ICYmICF0aGlzLl9pc1Nob3duKGVsZW1lbnQpKSB7XG4gICAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFt0cmlnZ2VyXSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4kNik7XG4gICAgICB9O1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKTtcbiAgICB9XG4gICAgX2lzU2hvd24oZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckNyk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSk7IC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgICBjb25maWcucGFyZW50ID0gZ2V0RWxlbWVudChjb25maWcucGFyZW50KTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9nZXREaW1lbnNpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9IT1JJWk9OVEFMKSA/IFdJRFRIIDogSEVJR0hUO1xuICAgIH1cbiAgICBfaW5pdGlhbGl6ZUNoaWxkcmVuKCkge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQpO1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFtlbGVtZW50XSwgdGhpcy5faXNTaG93bihzZWxlY3RlZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIF9nZXRGaXJzdExldmVsQ2hpbGRyZW4oc2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gU2VsZWN0b3JFbmdpbmUuZmluZChDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiwgdGhpcy5fY29uZmlnLnBhcmVudCk7XG4gICAgICAvLyByZW1vdmUgY2hpbGRyZW4gaWYgZ3JlYXRlciBkZXB0aFxuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtZW50ID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtZW50KSk7XG4gICAgfVxuICAgIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICAgIGlmICghdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdHJpZ2dlckFycmF5KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3Blbik7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgY29uc3QgX2NvbmZpZyA9IHt9O1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ0LCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgfHwgZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3Rvcih0aGlzKSkge1xuICAgICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7XG4gICAgICAgIHRvZ2dsZTogZmFsc2VcbiAgICAgIH0pLnRvZ2dsZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpO1xuXG4gIHZhciB0b3AgPSAndG9wJztcbiAgdmFyIGJvdHRvbSA9ICdib3R0b20nO1xuICB2YXIgcmlnaHQgPSAncmlnaHQnO1xuICB2YXIgbGVmdCA9ICdsZWZ0JztcbiAgdmFyIGF1dG8gPSAnYXV0byc7XG4gIHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuICB2YXIgc3RhcnQgPSAnc3RhcnQnO1xuICB2YXIgZW5kID0gJ2VuZCc7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbiAgdmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcbiAgdmFyIHBvcHBlciA9ICdwb3BwZXInO1xuICB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG4gIHZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbiAgfSwgW10pO1xuICB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG4gIH0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxuICB2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbiAgdmFyIHJlYWQgPSAncmVhZCc7XG4gIHZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxuICB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbiAgdmFyIG1haW4gPSAnbWFpbic7XG4gIHZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG4gIHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG4gIHZhciB3cml0ZSA9ICd3cml0ZSc7XG4gIHZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xuICB2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07XG5cbiAgZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cblxuICAgIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICAgIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gICAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gICAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG4gIH1cblxuICAvLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cbiAgZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRmxvdyBkb2Vzbid0IHN1cHBvcnQgdG8gZXh0ZW5kIHRoaXMgcHJvcGVydHksIGJ1dCBpdCdzIHRoZSBtb3N0XG4gICAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZWZmZWN0JDIoX3JlZjIpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcbiAgICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICAgIHBvcHBlcjoge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgbWFyZ2luOiAnMCdcbiAgICAgIH0sXG4gICAgICBhcnJvdzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgfSxcbiAgICAgIHJlZmVyZW5jZToge31cbiAgICB9O1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gICAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcblxuICAgIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICAgIHZhciBzdHlsZSA9IHN0eWxlUHJvcGVydGllcy5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlLCBwcm9wZXJ0eSkge1xuICAgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfSwge30pOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBhcHBseVN0eWxlcyQxID0ge1xuICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ3dyaXRlJyxcbiAgICBmbjogYXBwbHlTdHlsZXMsXG4gICAgZWZmZWN0OiBlZmZlY3QkMixcbiAgICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgfVxuXG4gIHZhciBtYXggPSBNYXRoLm1heDtcbiAgdmFyIG1pbiA9IE1hdGgubWluO1xuICB2YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xuXG4gIGZ1bmN0aW9uIGdldFVBU3RyaW5nKCkge1xuICAgIHZhciB1YURhdGEgPSBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcblxuICAgIGlmICh1YURhdGEgIT0gbnVsbCAmJiB1YURhdGEuYnJhbmRzKSB7XG4gICAgICByZXR1cm4gdWFEYXRhLmJyYW5kcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uYnJhbmQgKyBcIi9cIiArIGl0ZW0udmVyc2lvbjtcbiAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTGF5b3V0Vmlld3BvcnQoKSB7XG4gICAgcmV0dXJuICEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSwgaXNGaXhlZFN0cmF0ZWd5KSB7XG4gICAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNGaXhlZFN0cmF0ZWd5ID09PSB2b2lkIDApIHtcbiAgICAgIGlzRml4ZWRTdHJhdGVneSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgc2NhbGVYID0gMTtcbiAgICB2YXIgc2NhbGVZID0gMTtcblxuICAgIGlmIChpbmNsdWRlU2NhbGUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgc2NhbGVYID0gZWxlbWVudC5vZmZzZXRXaWR0aCA+IDAgPyByb3VuZChjbGllbnRSZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMSA6IDE7XG4gICAgICBzY2FsZVkgPSBlbGVtZW50Lm9mZnNldEhlaWdodCA+IDAgPyByb3VuZChjbGllbnRSZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxIDogMTtcbiAgICB9XG5cbiAgICB2YXIgX3JlZiA9IGlzRWxlbWVudChlbGVtZW50KSA/IGdldFdpbmRvdyhlbGVtZW50KSA6IHdpbmRvdyxcbiAgICAgICAgdmlzdWFsVmlld3BvcnQgPSBfcmVmLnZpc3VhbFZpZXdwb3J0O1xuXG4gICAgdmFyIGFkZFZpc3VhbE9mZnNldHMgPSAhaXNMYXlvdXRWaWV3cG9ydCgpICYmIGlzRml4ZWRTdHJhdGVneTtcbiAgICB2YXIgeCA9IChjbGllbnRSZWN0LmxlZnQgKyAoYWRkVmlzdWFsT2Zmc2V0cyAmJiB2aXN1YWxWaWV3cG9ydCA/IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQgOiAwKSkgLyBzY2FsZVg7XG4gICAgdmFyIHkgPSAoY2xpZW50UmVjdC50b3AgKyAoYWRkVmlzdWFsT2Zmc2V0cyAmJiB2aXN1YWxWaWV3cG9ydCA/IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcCA6IDApKSAvIHNjYWxlWTtcbiAgICB2YXIgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoIC8gc2NhbGVYO1xuICAgIHZhciBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodCAvIHNjYWxlWTtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB0b3A6IHksXG4gICAgICByaWdodDogeCArIHdpZHRoLFxuICAgICAgYm90dG9tOiB5ICsgaGVpZ2h0LFxuICAgICAgbGVmdDogeCxcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTtcbiAgfVxuXG4gIC8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuICBmdW5jdGlvbiBnZXRMYXlvdXRSZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gICAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgICB9XG5cbiAgICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICAgIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzgzN1xuICAgIGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICB9IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG4gIC8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbiAgZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgICB2YXIgaXNGaXJlZm94ID0gL2ZpcmVmb3gvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuICAgIHZhciBpc0lFID0gL1RyaWRlbnQvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuXG4gICAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgLy8gSW4gSUUgOSwgMTAgYW5kIDExIGZpeGVkIGVsZW1lbnRzIGNvbnRhaW5pbmcgYmxvY2sgaXMgYWx3YXlzIGVzdGFibGlzaGVkIGJ5IHRoZSB2aWV3cG9ydFxuICAgICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCk7XG5cbiAgICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgICBpZiAoaXNTaGFkb3dSb290KGN1cnJlbnROb2RlKSkge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5ob3N0O1xuICAgIH1cblxuICAgIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlJDEoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4gIC8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuICBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAgIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZSQxKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlJDEob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG4gIH1cblxuICBmdW5jdGlvbiB3aXRoaW4obWluJDEsIHZhbHVlLCBtYXgkMSkge1xuICAgIHJldHVybiBtYXgobWluJDEsIG1pbih2YWx1ZSwgbWF4JDEpKTtcbiAgfVxuICBmdW5jdGlvbiB3aXRoaW5NYXhDbGFtcChtaW4sIHZhbHVlLCBtYXgpIHtcbiAgICB2YXIgdiA9IHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpO1xuICAgIHJldHVybiB2ID4gbWF4ID8gbWF4IDogdjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xuICAgIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBoYXNoTWFwO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIHZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICAgIH0pKSA6IHBhZGRpbmc7XG4gICAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICAgIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICAgIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gICAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gICAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gICAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gICAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gICAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gICAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gICAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gICAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gICAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWZmZWN0JDEoX3JlZjIpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gICAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgYXJyb3ckMSA9IHtcbiAgICBuYW1lOiAnYXJyb3cnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdtYWluJyxcbiAgICBmbjogYXJyb3csXG4gICAgZWZmZWN0OiBlZmZlY3QkMSxcbiAgICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gICAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG4gIH1cblxuICB2YXIgdW5zZXRTaWRlcyA9IHtcbiAgICB0b3A6ICdhdXRvJyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIGxlZnQ6ICdhdXRvJ1xuICB9OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuICAvLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuICAvLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuICBmdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gICAgdmFyIHggPSBfcmVmLngsXG4gICAgICAgIHkgPSBfcmVmLnk7XG4gICAgdmFyIHdpbiA9IHdpbmRvdztcbiAgICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogcm91bmQoeCAqIGRwcikgLyBkcHIgfHwgMCxcbiAgICAgIHk6IHJvdW5kKHkgKiBkcHIpIC8gZHByIHx8IDBcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gICAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgICAgdmFyaWF0aW9uID0gX3JlZjIudmFyaWF0aW9uLFxuICAgICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHMsXG4gICAgICAgIGlzRml4ZWQgPSBfcmVmMi5pc0ZpeGVkO1xuICAgIHZhciBfb2Zmc2V0cyR4ID0gb2Zmc2V0cy54LFxuICAgICAgICB4ID0gX29mZnNldHMkeCA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHgsXG4gICAgICAgIF9vZmZzZXRzJHkgPSBvZmZzZXRzLnksXG4gICAgICAgIHkgPSBfb2Zmc2V0cyR5ID09PSB2b2lkIDAgPyAwIDogX29mZnNldHMkeTtcblxuICAgIHZhciBfcmVmMyA9IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMoe1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9KSA6IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTtcblxuICAgIHggPSBfcmVmMy54O1xuICAgIHkgPSBfcmVmMy55O1xuICAgIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICAgIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICAgIHZhciBzaWRlWCA9IGxlZnQ7XG4gICAgdmFyIHNpZGVZID0gdG9wO1xuICAgIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgICBpZiAoYWRhcHRpdmUpIHtcbiAgICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUkMShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJyAmJiBwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJykge1xuICAgICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgICB9XG4gICAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wIHx8IChwbGFjZW1lbnQgPT09IGxlZnQgfHwgcGxhY2VtZW50ID09PSByaWdodCkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgICAgc2lkZVkgPSBib3R0b207XG4gICAgICAgIHZhciBvZmZzZXRZID0gaXNGaXhlZCAmJiBvZmZzZXRQYXJlbnQgPT09IHdpbiAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQuaGVpZ2h0IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICAgIG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXTtcbiAgICAgICAgeSAtPSBvZmZzZXRZIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0IHx8IChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgICAgc2lkZVggPSByaWdodDtcbiAgICAgICAgdmFyIG9mZnNldFggPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC53aWR0aCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgICBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXTtcbiAgICAgICAgeCAtPSBvZmZzZXRYIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcG9zaXRpb246IHBvc2l0aW9uXG4gICAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgICB2YXIgX3JlZjQgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUih7XG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH0pIDoge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9O1xuXG4gICAgeCA9IF9yZWY0Lng7XG4gICAgeSA9IF9yZWY0Lnk7XG5cbiAgICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDw9IDEgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNSkge1xuICAgIHZhciBzdGF0ZSA9IF9yZWY1LnN0YXRlLFxuICAgICAgICBvcHRpb25zID0gX3JlZjUub3B0aW9ucztcbiAgICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG5cbiAgICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgICB2YXJpYXRpb246IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpLFxuICAgICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGlzRml4ZWQ6IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCdcbiAgICB9O1xuXG4gICAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICAgIH0pO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IGNvbXB1dGVTdHlsZXMkMSA9IHtcbiAgICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgICBkYXRhOiB7fVxuICB9O1xuXG4gIHZhciBwYXNzaXZlID0ge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gICAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNpemUpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBldmVudExpc3RlbmVycyA9IHtcbiAgICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICd3cml0ZScsXG4gICAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gICAgZWZmZWN0OiBlZmZlY3QsXG4gICAgZGF0YToge31cbiAgfTtcblxuICB2YXIgaGFzaCQxID0ge1xuICAgIGxlZnQ6ICdyaWdodCcsXG4gICAgcmlnaHQ6ICdsZWZ0JyxcbiAgICBib3R0b206ICd0b3AnLFxuICAgIHRvcDogJ2JvdHRvbSdcbiAgfTtcbiAgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICAgIHJldHVybiBoYXNoJDFbbWF0Y2hlZF07XG4gICAgfSk7XG4gIH1cblxuICB2YXIgaGFzaCA9IHtcbiAgICBzdGFydDogJ2VuZCcsXG4gICAgZW5kOiAnc3RhcnQnXG4gIH07XG4gIGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gICAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICAgIHJldHVybiB7XG4gICAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gICAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAgIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAgIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gICAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAgIC8vIGFueXdheS5cbiAgICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAgIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gICAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICAgIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gICAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICAgIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICAgIHZhciB4ID0gMDtcbiAgICB2YXIgeSA9IDA7XG5cbiAgICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG4gICAgICB2YXIgbGF5b3V0Vmlld3BvcnQgPSBpc0xheW91dFZpZXdwb3J0KCk7XG5cbiAgICAgIGlmIChsYXlvdXRWaWV3cG9ydCB8fCAhbGF5b3V0Vmlld3BvcnQgJiYgc3RyYXRlZ3kgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgICB5OiB5XG4gICAgfTtcbiAgfVxuXG4gIC8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuICBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICAgIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICAgIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICAgIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gICAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICAgIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUkMShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gICAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICAgIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KSxcbiAgICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlKSB7XG4gICAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbiAgfVxuXG4gIC8qXG4gIGdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG4gIHVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG4gIHRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbiAgcmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiAgKi9cblxuICBmdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gICAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICAgIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICAgIGxpc3QgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICAgIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICAgIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICAgIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICAgIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgICBsZWZ0OiByZWN0LngsXG4gICAgICB0b3A6IHJlY3QueSxcbiAgICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBmYWxzZSwgc3RyYXRlZ3kgPT09ICdmaXhlZCcpO1xuICAgIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gICAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICAgIHJlY3QueSA9IHJlY3QudG9wO1xuICAgIHJldHVybiByZWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSB7XG4gICAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSkgOiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xuICB9IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4gIC8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuICAvLyBgaW5pdGlhbGBcblxuXG4gIGZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gICAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICAgIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICAgIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gICAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xuICAgIH0pO1xuICB9IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2ZcbiAgLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbiAgZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnksIHN0cmF0ZWd5KSB7XG4gICAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICAgIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICAgIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICAgIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpO1xuICAgICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICAgIHJldHVybiBhY2NSZWN0O1xuICAgIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSk7XG4gICAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gICAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICAgIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gICAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICAgIHJldHVybiBjbGlwcGluZ1JlY3Q7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gICAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gICAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICAgIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgICB2YXIgb2Zmc2V0cztcblxuICAgIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgICAgY2FzZSB0b3A6XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGJvdHRvbTpcbiAgICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSByaWdodDpcbiAgICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgICB5OiBjb21tb25ZXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGxlZnQ6XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICAgIHk6IGNvbW1vbllcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICAgIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgZW5kOlxuICAgICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldHM7XG4gIH1cblxuICBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgICBfb3B0aW9ucyRzdHJhdGVneSA9IF9vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgICBzdHJhdGVneSA9IF9vcHRpb25zJHN0cmF0ZWd5ID09PSB2b2lkIDAgPyBzdGF0ZS5zdHJhdGVneSA6IF9vcHRpb25zJHN0cmF0ZWd5LFxuICAgICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gICAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICAgIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICAgIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnksIHN0cmF0ZWd5KTtcbiAgICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChzdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2UpO1xuICAgIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgICAgZWxlbWVudDogcG9wcGVyUmVjdCxcbiAgICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgICB9KTtcbiAgICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICAgIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAgIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcblxuICAgIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICAgIGJvdHRvbTogZWxlbWVudENsaWVudFJlY3QuYm90dG9tIC0gY2xpcHBpbmdDbGllbnRSZWN0LmJvdHRvbSArIHBhZGRpbmdPYmplY3QuYm90dG9tLFxuICAgICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICAgIH07XG4gICAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gICAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgICAgdmFyIG9mZnNldCA9IG9mZnNldERhdGFbcGxhY2VtZW50XTtcbiAgICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgICAgdmFyIGF4aXMgPSBbdG9wLCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gJ3knIDogJ3gnO1xuICAgICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBwbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICAgIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgICB2YXIgcGxhY2VtZW50cyQxID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gICAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzJDEuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gICAgfSk7XG5cbiAgICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMTtcbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICAgIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICAgIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICAgIHJldHVybiBbZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG4gIH1cblxuICBmdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gICAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICAgIF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9IG9wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgICB2YXIgcHJlZmVycmVkUGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gICAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgICB2YXIgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBWYXJpYXRpb25zID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocHJlZmVycmVkUGxhY2VtZW50KSk7XG4gICAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgICAgfSkgOiBwbGFjZW1lbnQpO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICAgIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICAgIHZhciBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzWzBdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgICAgdmFyIF9iYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG4gICAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgICB9KTtcbiAgICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgICAgaWYgKHJlZmVyZW5jZVJlY3RbbGVuXSA+IHBvcHBlclJlY3RbbGVuXSkge1xuICAgICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFsdFZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W19iYXNlUGxhY2VtZW50XSA8PSAwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgICBjaGVja3MucHVzaChvdmVyZmxvd1ttYWluVmFyaWF0aW9uU2lkZV0gPD0gMCwgb3ZlcmZsb3dbYWx0VmFyaWF0aW9uU2lkZV0gPD0gMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgIH0pKSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgICAgbWFrZUZhbGxiYWNrQ2hlY2tzID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcbiAgICB9XG5cbiAgICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgICAvLyBgMmAgbWF5IGJlIGRlc2lyZWQgaW4gc29tZSBjYXNlcyDigJMgcmVzZWFyY2ggbGF0ZXJcbiAgICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICAgIHZhciBmaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50cy5maW5kKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrcy5zbGljZSgwLCBfaSkuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBmaXR0aW5nUGxhY2VtZW50O1xuICAgICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgICBpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGUucGxhY2VtZW50ICE9PSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgICAgc3RhdGUucmVzZXQgPSB0cnVlO1xuICAgIH1cbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBmbGlwJDEgPSB7XG4gICAgbmFtZTogJ2ZsaXAnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdtYWluJyxcbiAgICBmbjogZmxpcCxcbiAgICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICAgIGRhdGE6IHtcbiAgICAgIF9za2lwOiBmYWxzZVxuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICAgIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICAgIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gICAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gICAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gICAgfSk7XG4gICAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gICAgfSk7XG4gICAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICAgIH07XG4gICAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICAgIH0pO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IGhpZGUkMSA9IHtcbiAgICBuYW1lOiAnaGlkZScsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ21haW4nLFxuICAgIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG4gICAgZm46IGhpZGVcbiAgfTtcblxuICBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICB2YXIgaW52ZXJ0RGlzdGFuY2UgPSBbbGVmdCwgdG9wXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyAtMSA6IDE7XG5cbiAgICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgfSkpIDogb2Zmc2V0LFxuICAgICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICAgIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcbiAgICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICAgIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICAgIHg6IGRpc3RhbmNlLFxuICAgICAgeTogc2tpZGRpbmdcbiAgICB9IDoge1xuICAgICAgeDogc2tpZGRpbmcsXG4gICAgICB5OiBkaXN0YW5jZVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICAgIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgICAgb2Zmc2V0ID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gICAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICAgIHggPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueCxcbiAgICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gICAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCArPSB4O1xuICAgICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgICB9XG5cbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBvZmZzZXQkMSA9IHtcbiAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnbWFpbicsXG4gICAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICAgIGZuOiBvZmZzZXRcbiAgfTtcblxuICBmdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAgIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gICAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAgIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAgIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgICB9KTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBwb3BwZXJPZmZzZXRzJDEgPSB7XG4gICAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdyZWFkJyxcbiAgICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgICBkYXRhOiB7fVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICAgIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgICBfb3B0aW9ucyR0ZXRoZXIgPSBvcHRpb25zLnRldGhlcixcbiAgICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgICAgdGV0aGVyT2Zmc2V0ID0gX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkdGV0aGVyT2Zmc2V0O1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgICB9KTtcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gICAgdmFyIGlzQmFzZVBsYWNlbWVudCA9ICF2YXJpYXRpb247XG4gICAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICAgIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gICAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gICAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gICAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gICAgdmFyIHRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IHRldGhlck9mZnNldChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gICAgdmFyIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXRWYWx1ZSA9PT0gJ251bWJlcicgPyB7XG4gICAgICBtYWluQXhpczogdGV0aGVyT2Zmc2V0VmFsdWUsXG4gICAgICBhbHRBeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZVxuICAgIH0gOiBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1haW5BeGlzOiAwLFxuICAgICAgYWx0QXhpczogMFxuICAgIH0sIHRldGhlck9mZnNldFZhbHVlKTtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0ID8gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXRbc3RhdGUucGxhY2VtZW50XSA6IG51bGw7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG5cbiAgICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDtcblxuICAgICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgICAgdmFyIG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuICAgICAgdmFyIG1pbiQxID0gb2Zmc2V0ICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgICAgdmFyIG1heCQxID0gb2Zmc2V0IC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgICB2YXIgYWRkaXRpdmUgPSB0ZXRoZXIgPyAtcG9wcGVyUmVjdFtsZW5dIC8gMiA6IDA7XG4gICAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgICAvLyBvdXRzaWRlIHRoZSByZWZlcmVuY2UgYm91bmRzXG5cbiAgICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwXG4gICAgICB9O1xuICAgICAgdmFyIGFycm93UGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXSA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XG4gICAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXG4gICAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxuXG4gICAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtYXhMZW4gKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVttYWluQXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgOiAwO1xuICAgICAgdmFyIHRldGhlck1pbiA9IG9mZnNldCArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgICB2YXIgdGV0aGVyTWF4ID0gb2Zmc2V0ICsgbWF4T2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZTtcbiAgICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWluKG1pbiQxLCB0ZXRoZXJNaW4pIDogbWluJDEsIG9mZnNldCwgdGV0aGVyID8gbWF4KG1heCQxLCB0ZXRoZXJNYXgpIDogbWF4JDEpO1xuICAgICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkMjtcblxuICAgICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXG4gICAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICAgIHZhciBfb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1thbHRBeGlzXTtcblxuICAgICAgdmFyIF9sZW4gPSBhbHRBeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgICAgdmFyIGlzT3JpZ2luU2lkZSA9IFt0b3AsIGxlZnRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgICB2YXIgX29mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkMiA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbYWx0QXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIDogMDtcblxuICAgICAgdmFyIF90ZXRoZXJNaW4gPSBpc09yaWdpblNpZGUgPyBfbWluIDogX29mZnNldCAtIHJlZmVyZW5jZVJlY3RbX2xlbl0gLSBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcztcblxuICAgICAgdmFyIF90ZXRoZXJNYXggPSBpc09yaWdpblNpZGUgPyBfb2Zmc2V0ICsgcmVmZXJlbmNlUmVjdFtfbGVuXSArIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzIDogX21heDtcblxuICAgICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB0ZXRoZXIgJiYgaXNPcmlnaW5TaWRlID8gd2l0aGluTWF4Q2xhbXAoX3RldGhlck1pbiwgX29mZnNldCwgX3RldGhlck1heCkgOiB3aXRoaW4odGV0aGVyID8gX3RldGhlck1pbiA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IF90ZXRoZXJNYXggOiBfbWF4KTtcblxuICAgICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldCAtIF9vZmZzZXQ7XG4gICAgfVxuXG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgcHJldmVudE92ZXJmbG93JDEgPSB7XG4gICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ21haW4nLFxuICAgIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gICAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQpIHtcbiAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHNjYWxlWCA9IHJvdW5kKHJlY3Qud2lkdGgpIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxO1xuICAgIHZhciBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xuICAgIHJldHVybiBzY2FsZVggIT09IDEgfHwgc2NhbGVZICE9PSAxO1xuICB9IC8vIFJldHVybnMgdGhlIGNvbXBvc2l0ZSByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC5cbiAgLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5cbiAgZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gICAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgICAgaXNGaXhlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICAgIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnRJc1NjYWxlZCwgaXNGaXhlZCk7XG4gICAgdmFyIHNjcm9sbCA9IHtcbiAgICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgICBzY3JvbGxUb3A6IDBcbiAgICB9O1xuICAgIHZhciBvZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuXG4gICAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50LCB0cnVlKTtcbiAgICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gICAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gICAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgICB9XG5cbiAgICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICAgIH0pKTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICAgIHZhciBwZW5kaW5nO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwZW5kaW5nO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgICB9KSA6IGN1cnJlbnQ7XG4gICAgICByZXR1cm4gbWVyZ2VkO1xuICAgIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gbWVyZ2VkW2tleV07XG4gICAgfSk7XG4gIH1cblxuICB2YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgbW9kaWZpZXJzOiBbXSxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJ1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICAgIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgICB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgc3R5bGVzOiB7fVxuICAgICAgfTtcbiAgICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKHNldE9wdGlvbnNBY3Rpb24pIHtcbiAgICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzZXRPcHRpb25zQWN0aW9uID09PSAnZnVuY3Rpb24nID8gc2V0T3B0aW9uc0FjdGlvbihzdGF0ZS5vcHRpb25zKSA6IHNldE9wdGlvbnNBY3Rpb247XG4gICAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgICB9KTsgLy8gVmFsaWRhdGUgdGhlIHByb3ZpZGVkIG1vZGlmaWVycyBzbyB0aGF0IHRoZSBjb25zdW1lciB3aWxsIGdldCB3YXJuZWRcblxuICAgICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgICAvLyBsb2dpYy5cbiAgICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuXG4gICAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAgIC8vIG9uZS5cblxuICAgICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkb3B0aW9ucyxcbiAgICAgICAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0O1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cbiAgdmFyIGNyZWF0ZVBvcHBlciQyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbiAgdmFyIGRlZmF1bHRNb2RpZmllcnMkMSA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cyQxLCBjb21wdXRlU3R5bGVzJDEsIGFwcGx5U3R5bGVzJDFdO1xuICB2YXIgY3JlYXRlUG9wcGVyJDEgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzJDFcbiAgfSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuICB2YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cyQxLCBjb21wdXRlU3R5bGVzJDEsIGFwcGx5U3R5bGVzJDEsIG9mZnNldCQxLCBmbGlwJDEsIHByZXZlbnRPdmVyZmxvdyQxLCBhcnJvdyQxLCBoaWRlJDFdO1xuICB2YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gICAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xuICB9KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG4gIGNvbnN0IFBvcHBlciA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKC8qI19fUFVSRV9fKi9PYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBhZnRlck1haW4sXG4gICAgYWZ0ZXJSZWFkLFxuICAgIGFmdGVyV3JpdGUsXG4gICAgYXBwbHlTdHlsZXM6IGFwcGx5U3R5bGVzJDEsXG4gICAgYXJyb3c6IGFycm93JDEsXG4gICAgYXV0byxcbiAgICBiYXNlUGxhY2VtZW50cyxcbiAgICBiZWZvcmVNYWluLFxuICAgIGJlZm9yZVJlYWQsXG4gICAgYmVmb3JlV3JpdGUsXG4gICAgYm90dG9tLFxuICAgIGNsaXBwaW5nUGFyZW50cyxcbiAgICBjb21wdXRlU3R5bGVzOiBjb21wdXRlU3R5bGVzJDEsXG4gICAgY3JlYXRlUG9wcGVyLFxuICAgIGNyZWF0ZVBvcHBlckJhc2U6IGNyZWF0ZVBvcHBlciQyLFxuICAgIGNyZWF0ZVBvcHBlckxpdGU6IGNyZWF0ZVBvcHBlciQxLFxuICAgIGRldGVjdE92ZXJmbG93LFxuICAgIGVuZCxcbiAgICBldmVudExpc3RlbmVycyxcbiAgICBmbGlwOiBmbGlwJDEsXG4gICAgaGlkZTogaGlkZSQxLFxuICAgIGxlZnQsXG4gICAgbWFpbixcbiAgICBtb2RpZmllclBoYXNlcyxcbiAgICBvZmZzZXQ6IG9mZnNldCQxLFxuICAgIHBsYWNlbWVudHMsXG4gICAgcG9wcGVyLFxuICAgIHBvcHBlckdlbmVyYXRvcixcbiAgICBwb3BwZXJPZmZzZXRzOiBwb3BwZXJPZmZzZXRzJDEsXG4gICAgcHJldmVudE92ZXJmbG93OiBwcmV2ZW50T3ZlcmZsb3ckMSxcbiAgICByZWFkLFxuICAgIHJlZmVyZW5jZSxcbiAgICByaWdodCxcbiAgICBzdGFydCxcbiAgICB0b3AsXG4gICAgdmFyaWF0aW9uUGxhY2VtZW50cyxcbiAgICB2aWV3cG9ydCxcbiAgICB3cml0ZVxuICB9LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGRyb3Bkb3duLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkYSA9ICdkcm9wZG93bic7XG4gIGNvbnN0IERBVEFfS0VZJDYgPSAnYnMuZHJvcGRvd24nO1xuICBjb25zdCBFVkVOVF9LRVkkNiA9IGAuJHtEQVRBX0tFWSQ2fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQzID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVTQ0FQRV9LRVkkMiA9ICdFc2NhcGUnO1xuICBjb25zdCBUQUJfS0VZJDEgPSAnVGFiJztcbiAgY29uc3QgQVJST1dfVVBfS0VZJDEgPSAnQXJyb3dVcCc7XG4gIGNvbnN0IEFSUk9XX0RPV05fS0VZJDEgPSAnQXJyb3dEb3duJztcbiAgY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMjsgLy8gTW91c2VFdmVudC5idXR0b24gdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYnV0dG9uLCB1c3VhbGx5IHRoZSByaWdodCBidXR0b25cblxuICBjb25zdCBFVkVOVF9ISURFJDUgPSBgaGlkZSR7RVZFTlRfS0VZJDZ9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOJDUgPSBgaGlkZGVuJHtFVkVOVF9LRVkkNn1gO1xuICBjb25zdCBFVkVOVF9TSE9XJDUgPSBgc2hvdyR7RVZFTlRfS0VZJDZ9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kNSA9IGBzaG93biR7RVZFTlRfS0VZJDZ9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMyA9IGBjbGljayR7RVZFTlRfS0VZJDZ9JHtEQVRBX0FQSV9LRVkkM31gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWSQ2fSR7REFUQV9BUElfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfS0VZVVBfREFUQV9BUEkgPSBga2V5dXAke0VWRU5UX0tFWSQ2fSR7REFUQV9BUElfS0VZJDN9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDYgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUFVQID0gJ2Ryb3B1cCc7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUEVORCA9ICdkcm9wZW5kJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QU1RBUlQgPSAnZHJvcHN0YXJ0JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSID0gJ2Ryb3B1cC1jZW50ZXInO1xuICBjb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUiA9ICdkcm9wZG93bi1jZW50ZXInO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJdOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04gPSBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzfS4ke0NMQVNTX05BTUVfU0hPVyQ2fWA7XG4gIGNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZCQVIgPSAnLm5hdmJhcic7XG4gIGNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnO1xuICBjb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJztcbiAgY29uc3QgUExBQ0VNRU5UX1RPUCA9IGlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0JztcbiAgY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0JztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJztcbiAgY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9UT1BDRU5URVIgPSAndG9wJztcbiAgY29uc3QgUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiA9ICdib3R0b20nO1xuICBjb25zdCBEZWZhdWx0JDkgPSB7XG4gICAgYXV0b0Nsb3NlOiB0cnVlLFxuICAgIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgICBkaXNwbGF5OiAnZHluYW1pYycsXG4gICAgb2Zmc2V0OiBbMCwgMl0sXG4gICAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICAgIHJlZmVyZW5jZTogJ3RvZ2dsZSdcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkOSA9IHtcbiAgICBhdXRvQ2xvc2U6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICAgIGRpc3BsYXk6ICdzdHJpbmcnLFxuICAgIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGU7IC8vIGRyb3Bkb3duIHdyYXBwZXJcbiAgICAgIC8vIHRvZG86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICAgIHRoaXMuX21lbnUgPSBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8IFNlbGVjdG9yRW5naW5lLnByZXYodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF0gfHwgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NRU5VLCB0aGlzLl9wYXJlbnQpO1xuICAgICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkOTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ5O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRhO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc1Nob3duKCkgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpO1xuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH07XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XJDUsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NyZWF0ZVBvcHBlcigpO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAhdGhpcy5fcGFyZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSX05BVikpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQ2KTtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOJDUsIHJlbGF0ZWRUYXJnZXQpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9O1xuICAgICAgdGhpcy5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpO1xuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSQ1LCByZWxhdGVkVGFyZ2V0KTtcbiAgICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckNik7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicpO1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOJDUsIHJlbGF0ZWRUYXJnZXQpO1xuICAgIH1cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gc3VwZXIuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50JDEoY29uZmlnLnJlZmVyZW5jZSkgJiYgdHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFBvcHBlciB2aXJ0dWFsIGVsZW1lbnRzIHJlcXVpcmUgYSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRSRhLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCJyZWZlcmVuY2VcIiBwcm92aWRlZCB0eXBlIFwib2JqZWN0XCIgd2l0aG91dCBhIHJlcXVpcmVkIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIgbWV0aG9kLmApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX2NyZWF0ZVBvcHBlcigpIHtcbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpO1xuICAgICAgfVxuICAgICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9wYXJlbnQ7XG4gICAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCQxKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBnZXRFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2U7XG4gICAgICB9XG4gICAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IGNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpO1xuICAgIH1cbiAgICBfaXNTaG93bigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckNik7XG4gICAgfVxuICAgIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgICBjb25zdCBwYXJlbnREcm9wZG93biA9IHRoaXMuX3BhcmVudDtcbiAgICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgICByZXR1cm4gUExBQ0VNRU5UX1JJR0hUO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BTVEFSVCkpIHtcbiAgICAgICAgcmV0dXJuIFBMQUNFTUVOVF9MRUZUO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUF9DRU5URVIpKSB7XG4gICAgICAgIHJldHVybiBQTEFDRU1FTlRfVE9QQ0VOVEVSO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUikpIHtcbiAgICAgICAgcmV0dXJuIFBMQUNFTUVOVF9CT1RUT01DRU5URVI7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIG5lZWQgdG8gdHJpbSB0aGUgdmFsdWUgYmVjYXVzZSBjdXN0b20gcHJvcGVydGllcyBjYW4gYWxzbyBpbmNsdWRlIHNwYWNlc1xuICAgICAgY29uc3QgaXNFbmQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX21lbnUpLmdldFByb3BlcnR5VmFsdWUoJy0tYnMtcG9zaXRpb24nKS50cmltKCkgPT09ICdlbmQnO1xuICAgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUCkpIHtcbiAgICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX1RPUEVORCA6IFBMQUNFTUVOVF9UT1A7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfQk9UVE9NRU5EIDogUExBQ0VNRU5UX0JPVFRPTTtcbiAgICB9XG4gICAgX2RldGVjdE5hdmJhcigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSKSAhPT0gbnVsbDtcbiAgICB9XG4gICAgX2dldE9mZnNldCgpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9ID0gdGhpcy5fY29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCkpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9XG4gICAgX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgICAgbW9kaWZpZXJzOiBbe1xuICAgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfTtcblxuICAgICAgLy8gRGlzYWJsZSBQb3BwZXIgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5IG9yIERyb3Bkb3duIGlzIGluIE5hdmJhclxuICAgICAgaWYgKHRoaXMuX2luTmF2YmFyIHx8IHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJyk7IC8vIHRvZG86djYgcmVtb3ZlXG4gICAgICAgIGRlZmF1bHRCc1BvcHBlckNvbmZpZy5tb2RpZmllcnMgPSBbe1xuICAgICAgICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfV07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAgIC4uLmV4ZWN1dGUodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZywgW2RlZmF1bHRCc1BvcHBlckNvbmZpZ10pXG4gICAgICB9O1xuICAgIH1cbiAgICBfc2VsZWN0TWVudUl0ZW0oe1xuICAgICAga2V5LFxuICAgICAgdGFyZ2V0XG4gICAgfSkge1xuICAgICAgY29uc3QgaXRlbXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMsIHRoaXMuX21lbnUpLmZpbHRlcihlbGVtZW50ID0+IGlzVmlzaWJsZShlbGVtZW50KSk7XG4gICAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG4gICAgICAvLyBhbGxvdyBjeWNsaW5nIHRvIGdldCB0aGUgbGFzdCBpdGVtIGluIGNhc2Uga2V5IGVxdWFscyBBUlJPV19VUF9LRVlcbiAgICAgIGdldE5leHRBY3RpdmVFbGVtZW50KGl0ZW1zLCB0YXJnZXQsIGtleSA9PT0gQVJST1dfRE9XTl9LRVkkMSwgIWl0ZW1zLmluY2x1ZGVzKHRhcmdldCkpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgY2xlYXJNZW51cyhldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ICE9PSBUQUJfS0VZJDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3BlblRvZ2dsZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOKTtcbiAgICAgIGZvciAoY29uc3QgdG9nZ2xlIG9mIG9wZW5Ub2dnbGVzKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBEcm9wZG93bi5nZXRJbnN0YW5jZSh0b2dnbGUpO1xuICAgICAgICBpZiAoIWNvbnRleHQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgY29uc3QgaXNNZW51VGFyZ2V0ID0gY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX21lbnUpO1xuICAgICAgICBpZiAoY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX2VsZW1lbnQpIHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdpbnNpZGUnICYmICFpc01lbnVUYXJnZXQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ291dHNpZGUnICYmIGlzTWVudVRhcmdldCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFiIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgZHJvcGRvd24gbWVudSBvciBldmVudHMgZnJvbSBjb250YWluZWQgaW5wdXRzIHNob3VsZG4ndCBjbG9zZSB0aGUgbWVudVxuICAgICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmIChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSA9PT0gVEFCX0tFWSQxIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGNvbnRleHQuX2VsZW1lbnRcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudDtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0Ll9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIC8vIElmIG5vdCBhbiBVUCB8IERPV04gfCBFU0NBUEUga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAgIC8vIElmIGlucHV0L3RleHRhcmVhICYmIGlmIGtleSBpcyBvdGhlciB0aGFuIEVTQ0FQRSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG5cbiAgICAgIGNvbnN0IGlzSW5wdXQgPSAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKTtcbiAgICAgIGNvbnN0IGlzRXNjYXBlRXZlbnQgPSBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkkMjtcbiAgICAgIGNvbnN0IGlzVXBPckRvd25FdmVudCA9IFtBUlJPV19VUF9LRVkkMSwgQVJST1dfRE9XTl9LRVkkMV0uaW5jbHVkZXMoZXZlbnQua2V5KTtcbiAgICAgIGlmICghaXNVcE9yRG93bkV2ZW50ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpc0lucHV0ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIHRvZG86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICAgIGNvbnN0IGdldFRvZ2dsZUJ1dHRvbiA9IHRoaXMubWF0Y2hlcyhTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzKSA/IHRoaXMgOiBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMpWzBdIHx8IFNlbGVjdG9yRW5naW5lLm5leHQodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUkMylbMF0gfHwgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzLCBldmVudC5kZWxlZ2F0ZVRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24pO1xuICAgICAgaWYgKGlzVXBPckRvd25FdmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UuX2lzU2hvd24oKSkge1xuICAgICAgICAvLyBlbHNlIGlzIGVzY2FwZSBhbmQgd2UgY2hlY2sgaWYgaXQgaXMgc2hvd25cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICAgICAgZ2V0VG9nZ2xlQnV0dG9uLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUkMywgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKTtcbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpO1xuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDMsIERyb3Bkb3duLmNsZWFyTWVudXMpO1xuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKTtcbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykudG9nZ2xlKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvc2Nyb2xsQmFyLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCc7XG4gIGNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJztcbiAgY29uc3QgUFJPUEVSVFlfUEFERElORyA9ICdwYWRkaW5nLXJpZ2h0JztcbiAgY29uc3QgUFJPUEVSVFlfTUFSR0lOID0gJ21hcmdpbi1yaWdodCc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgU2Nyb2xsQmFySGVscGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGdldFdpZHRoKCkge1xuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9pbm5lcldpZHRoI3VzYWdlX25vdGVzXG4gICAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnRXaWR0aCk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgIHRoaXMuX2Rpc2FibGVPdmVyRmxvdygpO1xuICAgICAgLy8gZ2l2ZSBwYWRkaW5nIHRvIGVsZW1lbnQgdG8gYmFsYW5jZSB0aGUgaGlkZGVuIHNjcm9sbGJhciB3aWR0aFxuICAgICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKTtcbiAgICAgIC8vIHRyaWNrOiBXZSBhZGp1c3QgcG9zaXRpdmUgcGFkZGluZ1JpZ2h0IGFuZCBuZWdhdGl2ZSBtYXJnaW5SaWdodCB0byBzdGlja3ktdG9wIGVsZW1lbnRzIHRvIGtlZXAgc2hvd2luZyBmdWxsd2lkdGhcbiAgICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aCk7XG4gICAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlIC0gd2lkdGgpO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgJ292ZXJmbG93Jyk7XG4gICAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcpO1xuICAgICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCBQUk9QRVJUWV9QQURESU5HKTtcbiAgICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTik7XG4gICAgfVxuICAgIGlzT3ZlcmZsb3dpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRXaWR0aCgpID4gMDtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2Rpc2FibGVPdmVyRmxvdygpIHtcbiAgICAgIHRoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH1cbiAgICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHksIGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpO1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIGAke2NhbGxiYWNrKE51bWJlci5wYXJzZUZsb2F0KGNhbGN1bGF0ZWRWYWx1ZSkpfXB4YCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spO1xuICAgIH1cbiAgICBfc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSkge1xuICAgICAgY29uc3QgYWN0dWFsVmFsdWUgPSBlbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSk7XG4gICAgICBpZiAoYWN0dWFsVmFsdWUpIHtcbiAgICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5LCBhY3R1YWxWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5KSB7XG4gICAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSk7XG4gICAgICAgIC8vIFdlIG9ubHkgd2FudCB0byByZW1vdmUgdGhlIHByb3BlcnR5IGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGA7IHRoZSB2YWx1ZSBjYW4gYWxzbyBiZSB6ZXJvXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVQcm9wZXJ0eSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKTtcbiAgICB9XG4gICAgX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIGNhbGxCYWNrKSB7XG4gICAgICBpZiAoaXNFbGVtZW50JDEoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNhbGxCYWNrKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBzZWwgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgY2FsbEJhY2soc2VsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvYmFja2Ryb3AuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQ5ID0gJ2JhY2tkcm9wJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9GQURFJDQgPSAnZmFkZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQ1ID0gJ3Nob3cnO1xuICBjb25zdCBFVkVOVF9NT1VTRURPV04gPSBgbW91c2Vkb3duLmJzLiR7TkFNRSQ5fWA7XG4gIGNvbnN0IERlZmF1bHQkOCA9IHtcbiAgICBjbGFzc05hbWU6ICdtb2RhbC1iYWNrZHJvcCcsXG4gICAgY2xpY2tDYWxsYmFjazogbnVsbCxcbiAgICBpc0FuaW1hdGVkOiBmYWxzZSxcbiAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgLy8gaWYgZmFsc2UsIHdlIHVzZSB0aGUgYmFja2Ryb3AgaGVscGVyIHdpdGhvdXQgYWRkaW5nIGFueSBlbGVtZW50IHRvIHRoZSBkb21cbiAgICByb290RWxlbWVudDogJ2JvZHknIC8vIGdpdmUgdGhlIGNob2ljZSB0byBwbGFjZSBiYWNrZHJvcCB1bmRlciBkaWZmZXJlbnQgZWxlbWVudHNcbiAgfTtcblxuICBjb25zdCBEZWZhdWx0VHlwZSQ4ID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgY2xpY2tDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gICAgaXNBbmltYXRlZDogJ2Jvb2xlYW4nLFxuICAgIGlzVmlzaWJsZTogJ2Jvb2xlYW4nLFxuICAgIHJvb3RFbGVtZW50OiAnKGVsZW1lbnR8c3RyaW5nKSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBCYWNrZHJvcCBleHRlbmRzIENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkODtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ4O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQ5O1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHNob3coY2FsbGJhY2spIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXBwZW5kKCk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpO1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgIHJlZmxvdyhlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckNSk7XG4gICAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaGlkZShjYWxsYmFjaykge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckNSk7XG4gICAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV04pO1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2dldEVsZW1lbnQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NOYW1lID0gdGhpcy5fY29uZmlnLmNsYXNzTmFtZTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUkNCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGJhY2tkcm9wO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gICAgfVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgLy8gdXNlIGdldEVsZW1lbnQoKSB3aXRoIHRoZSBkZWZhdWx0IFwiYm9keVwiIHRvIGdldCBhIGZyZXNoIEVsZW1lbnQgb24gZWFjaCBpbnN0YW50aWF0aW9uXG4gICAgICBjb25maWcucm9vdEVsZW1lbnQgPSBnZXRFbGVtZW50KGNvbmZpZy5yb290RWxlbWVudCk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfYXBwZW5kKCkge1xuICAgICAgaWYgKHRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKTtcbiAgICAgIHRoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOLCAoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9pc0FwcGVuZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgX2VtdWxhdGVBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIHRoaXMuX2dldEVsZW1lbnQoKSwgdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9mb2N1c3RyYXAuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQ4ID0gJ2ZvY3VzdHJhcCc7XG4gIGNvbnN0IERBVEFfS0VZJDUgPSAnYnMuZm9jdXN0cmFwJztcbiAgY29uc3QgRVZFTlRfS0VZJDUgPSBgLiR7REFUQV9LRVkkNX1gO1xuICBjb25zdCBFVkVOVF9GT0NVU0lOJDIgPSBgZm9jdXNpbiR7RVZFTlRfS0VZJDV9YDtcbiAgY29uc3QgRVZFTlRfS0VZRE9XTl9UQUIgPSBga2V5ZG93bi50YWIke0VWRU5UX0tFWSQ1fWA7XG4gIGNvbnN0IFRBQl9LRVkgPSAnVGFiJztcbiAgY29uc3QgVEFCX05BVl9GT1JXQVJEID0gJ2ZvcndhcmQnO1xuICBjb25zdCBUQUJfTkFWX0JBQ0tXQVJEID0gJ2JhY2t3YXJkJztcbiAgY29uc3QgRGVmYXVsdCQ3ID0ge1xuICAgIGF1dG9mb2N1czogdHJ1ZSxcbiAgICB0cmFwRWxlbWVudDogbnVsbCAvLyBUaGUgZWxlbWVudCB0byB0cmFwIGZvY3VzIGluc2lkZSBvZlxuICB9O1xuXG4gIGNvbnN0IERlZmF1bHRUeXBlJDcgPSB7XG4gICAgYXV0b2ZvY3VzOiAnYm9vbGVhbicsXG4gICAgdHJhcEVsZW1lbnQ6ICdlbGVtZW50J1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIEZvY3VzVHJhcCBleHRlbmRzIENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDc7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkNztcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkODtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9mb2N1cykge1xuICAgICAgICB0aGlzLl9jb25maWcudHJhcEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSQ1KTsgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4kMiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlRm9jdXNpbihldmVudCkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX1RBQiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlS2V5ZG93bihldmVudCkpO1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZJDUpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfaGFuZGxlRm9jdXNpbihldmVudCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB0cmFwRWxlbWVudFxuICAgICAgfSA9IHRoaXMuX2NvbmZpZztcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGRvY3VtZW50IHx8IGV2ZW50LnRhcmdldCA9PT0gdHJhcEVsZW1lbnQgfHwgdHJhcEVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZvY3VzYWJsZUNoaWxkcmVuKHRyYXBFbGVtZW50KTtcbiAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdHJhcEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9PT0gVEFCX05BVl9CQUNLV0FSRCkge1xuICAgICAgICBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHNbMF0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2hhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXkgIT09IFRBQl9LRVkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9IGV2ZW50LnNoaWZ0S2V5ID8gVEFCX05BVl9CQUNLV0FSRCA6IFRBQl9OQVZfRk9SV0FSRDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIG1vZGFsLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkNyA9ICdtb2RhbCc7XG4gIGNvbnN0IERBVEFfS0VZJDQgPSAnYnMubW9kYWwnO1xuICBjb25zdCBFVkVOVF9LRVkkNCA9IGAuJHtEQVRBX0tFWSQ0fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQyID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVTQ0FQRV9LRVkkMSA9ICdFc2NhcGUnO1xuICBjb25zdCBFVkVOVF9ISURFJDQgPSBgaGlkZSR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQkMSA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9ISURERU4kNCA9IGBoaWRkZW4ke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX1NIT1ckNCA9IGBzaG93JHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9TSE9XTiQ0ID0gYHNob3duJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9SRVNJWkUkMSA9IGByZXNpemUke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MgPSBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyQxID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMiA9IGBjbGljayR7RVZFTlRfS0VZJDR9JHtEQVRBX0FQSV9LRVkkMn1gO1xuICBjb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtb3Blbic7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQzID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckNCA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TVEFUSUMgPSAnbW9kYWwtc3RhdGljJztcbiAgY29uc3QgT1BFTl9TRUxFQ1RPUiQxID0gJy5tb2RhbC5zaG93JztcbiAgY29uc3QgU0VMRUNUT1JfRElBTE9HID0gJy5tb2RhbC1kaWFsb2cnO1xuICBjb25zdCBTRUxFQ1RPUl9NT0RBTF9CT0RZID0gJy5tb2RhbC1ib2R5JztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUkMiA9ICdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXSc7XG4gIGNvbnN0IERlZmF1bHQkNiA9IHtcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBmb2N1czogdHJ1ZSxcbiAgICBrZXlib2FyZDogdHJ1ZVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQ2ID0ge1xuICAgIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAgZm9jdXM6ICdib29sZWFuJyxcbiAgICBrZXlib2FyZDogJ2Jvb2xlYW4nXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgTW9kYWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgdGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpO1xuICAgICAgdGhpcy5fZm9jdXN0cmFwID0gdGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpO1xuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9zY3JvbGxCYXIgPSBuZXcgU2Nyb2xsQmFySGVscGVyKCk7XG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ2O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDY7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDc7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldCk7XG4gICAgfVxuICAgIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1ckNCwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9KTtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICB0aGlzLl9zY3JvbGxCYXIuaGlkZSgpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfT1BFTik7XG4gICAgICB0aGlzLl9hZGp1c3REaWFsb2coKTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDQpO1xuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ0KTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5faGlkZU1vZGFsKCksIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2lzQW5pbWF0ZWQoKSk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBmb3IgKGNvbnN0IGh0bWxFbGVtZW50IG9mIFt3aW5kb3csIHRoaXMuX2RpYWxvZ10pIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihodG1sRWxlbWVudCwgRVZFTlRfS0VZJDQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgaGFuZGxlVXBkYXRlKCkge1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgICAgaXNWaXNpYmxlOiBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCksXG4gICAgICAgIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZSxcbiAgICAgICAgaXNBbmltYXRlZDogdGhpcy5faXNBbmltYXRlZCgpXG4gICAgICB9KTtcbiAgICB9XG4gICAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KTtcbiAgICB9XG4gICAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIC8vIHRyeSB0byBhcHBlbmQgZHluYW1pYyBtb2RhbFxuICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgY29uc3QgbW9kYWxCb2R5ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NT0RBTF9CT0RZLCB0aGlzLl9kaWFsb2cpO1xuICAgICAgaWYgKG1vZGFsQm9keSkge1xuICAgICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgIH1cbiAgICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckNCk7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04kNCwge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayh0cmFuc2l0aW9uQ29tcGxldGUsIHRoaXMuX2RpYWxvZywgdGhpcy5faXNBbmltYXRlZCgpKTtcbiAgICB9XG4gICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUyQxLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkkMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKTtcbiAgICAgIH0pO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFJDEsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgIXRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICAgIHRoaXMuX2FkanVzdERpYWxvZygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICAvLyBhIGJhZCB0cmljayB0byBzZWdyZWdhdGUgY2xpY2tzIHRoYXQgbWF5IHN0YXJ0IGluc2lkZSBkaWFsb2cgYnV0IGVuZCBvdXRzaWRlLCBhbmQgYXZvaWQgbGlzdGVuIHRvIHNjcm9sbGJhciBjbGlja3NcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBldmVudDIgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgfHwgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQyLnRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIF9oaWRlTW9kYWwoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJyk7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfT1BFTik7XG4gICAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsQmFyLnJlc2V0KCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiQ0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBfaXNBbmltYXRlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkMyk7XG4gICAgfVxuICAgIF90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkge1xuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQkMSk7XG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3QgaW5pdGlhbE92ZXJmbG93WSA9IHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZO1xuICAgICAgLy8gcmV0dXJuIGlmIHRoZSBmb2xsb3dpbmcgYmFja2dyb3VuZCB0cmFuc2l0aW9uIGhhc24ndCB5ZXQgY29tcGxldGVkXG4gICAgICBpZiAoaW5pdGlhbE92ZXJmbG93WSA9PT0gJ2hpZGRlbicgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TVEFUSUMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TVEFUSUMpO1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NUQVRJQyk7XG4gICAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gaW5pdGlhbE92ZXJmbG93WTtcbiAgICAgICAgfSwgdGhpcy5fZGlhbG9nKTtcbiAgICAgIH0sIHRoaXMuX2RpYWxvZyk7XG4gICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgICAgKi9cblxuICAgIF9hZGp1c3REaWFsb2coKSB7XG4gICAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuX3Njcm9sbEJhci5nZXRXaWR0aCgpO1xuICAgICAgY29uc3QgaXNCb2R5T3ZlcmZsb3dpbmcgPSBzY3JvbGxiYXJXaWR0aCA+IDA7XG4gICAgICBpZiAoaXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGlzUlRMKCkgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgICAgfVxuICAgICAgaWYgKCFpc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdSaWdodCcgOiAncGFkZGluZ0xlZnQnO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcbiAgICAgIH1cbiAgICB9XG4gICAgX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJyc7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMiwgU0VMRUNUT1JfREFUQV9UT0dHTEUkMiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKTtcbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfU0hPVyQ0LCBzaG93RXZlbnQgPT4ge1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiQ0LCAoKSA9PiB7XG4gICAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBtb2RhbCB0b2dnbGVyIHdoaWxlIGFub3RoZXIgb25lIGlzIG9wZW5cbiAgICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUiQxKTtcbiAgICBpZiAoYWxyZWFkeU9wZW4pIHtcbiAgICAgIE1vZGFsLmdldEluc3RhbmNlKGFscmVhZHlPcGVuKS5oaWRlKCk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldCk7XG4gICAgZGF0YS50b2dnbGUodGhpcyk7XG4gIH0pO1xuICBlbmFibGVEaXNtaXNzVHJpZ2dlcihNb2RhbCk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oTW9kYWwpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgb2ZmY2FudmFzLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkNiA9ICdvZmZjYW52YXMnO1xuICBjb25zdCBEQVRBX0tFWSQzID0gJ2JzLm9mZmNhbnZhcyc7XG4gIGNvbnN0IEVWRU5UX0tFWSQzID0gYC4ke0RBVEFfS0VZJDN9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZJDEgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSQyID0gYGxvYWQke0VWRU5UX0tFWSQzfSR7REFUQV9BUElfS0VZJDF9YDtcbiAgY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckMyA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HJDEgPSAnc2hvd2luZyc7XG4gIGNvbnN0IENMQVNTX05BTUVfSElESU5HID0gJ2hpZGluZyc7XG4gIGNvbnN0IENMQVNTX05BTUVfQkFDS0RST1AgPSAnb2ZmY2FudmFzLWJhY2tkcm9wJztcbiAgY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcub2ZmY2FudmFzLnNob3cnO1xuICBjb25zdCBFVkVOVF9TSE9XJDMgPSBgc2hvdyR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kMyA9IGBzaG93biR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfSElERSQzID0gYGhpZGUke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQzID0gYGhpZGRlbiR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMSA9IGBjbGljayR7RVZFTlRfS0VZJDN9JHtEQVRBX0FQSV9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVkkM31gO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQxID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXSc7XG4gIGNvbnN0IERlZmF1bHQkNSA9IHtcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICBzY3JvbGw6IGZhbHNlXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDUgPSB7XG4gICAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICAgIHNjcm9sbDogJ2Jvb2xlYW4nXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgT2ZmY2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKTtcbiAgICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKTtcbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkNTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkNjtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KTtcbiAgICB9XG4gICAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XJDMsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSk7XG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNTaG93biA9IHRydWU7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5zaG93KCk7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSk7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkckMSk7XG4gICAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwgfHwgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQzKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORyQxKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04kMywge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDMpO1xuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICB0aGlzLl9lbGVtZW50LmJsdXIoKTtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJRElORyk7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKCk7XG4gICAgICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDMsIENMQVNTX05BTUVfSElESU5HKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOJDMpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsYmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgICAgY29uc3QgY2xpY2tDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfTtcblxuICAgICAgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCk7XG4gICAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgICAgY2xhc3NOYW1lOiBDTEFTU19OQU1FX0JBQ0tEUk9QLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGlzQW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHJvb3RFbGVtZW50OiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgIGNsaWNrQ2FsbGJhY2s6IGlzVmlzaWJsZSA/IGNsaWNrQ2FsbGJhY2sgOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gICAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KTtcbiAgICB9XG4gICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMSwgU0VMRUNUT1JfREFUQV9UT0dHTEUkMSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKTtcbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfSElEREVOJDMsICgpID0+IHtcbiAgICAgIC8vIGZvY3VzIG9uIHRyaWdnZXIgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBhIHRvZ2dsZXIgb2YgYW4gb2ZmY2FudmFzLCB3aGlsZSBhbm90aGVyIGlzIG9wZW5cbiAgICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUik7XG4gICAgaWYgKGFscmVhZHlPcGVuICYmIGFscmVhZHlPcGVuICE9PSB0YXJnZXQpIHtcbiAgICAgIE9mZmNhbnZhcy5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KTtcbiAgICBkYXRhLnRvZ2dsZSh0aGlzKTtcbiAgfSk7XG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEkkMiwgKCkgPT4ge1xuICAgIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgU2VsZWN0b3JFbmdpbmUuZmluZChPUEVOX1NFTEVDVE9SKSkge1xuICAgICAgT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2Uoc2VsZWN0b3IpLnNob3coKTtcbiAgICB9XG4gIH0pO1xuICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZCgnW2FyaWEtbW9kYWxdW2NsYXNzKj1zaG93XVtjbGFzcyo9b2ZmY2FudmFzLV0nKSkge1xuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCkuaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyKE9mZmNhbnZhcyk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oT2ZmY2FudmFzKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvc2FuaXRpemVyLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCB1cmlBdHRyaWJ1dGVzID0gbmV3IFNldChbJ2JhY2tncm91bmQnLCAnY2l0ZScsICdocmVmJywgJ2l0ZW10eXBlJywgJ2xvbmdkZXNjJywgJ3Bvc3RlcicsICdzcmMnLCAneGxpbms6aHJlZiddKTtcbiAgY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pO1xuXG4gIC8qKlxuICAgKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIGEgY29tbW9ubHkgdXNlZnVsIHN1YnNldCBvZiBVUkxzIHRoYXQgYXJlIHNhZmUuXG4gICAqXG4gICAqIFNob3V0LW91dCB0byBBbmd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi8xMi4yLngvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAgICovXG4gIGNvbnN0IFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/Oig/Omh0dHBzP3xtYWlsdG98ZnRwfHRlbHxmaWxlfHNtcyk6fFteIyYvOj9dKig/OlsjLz9dfCQpKS9pO1xuXG4gIC8qKlxuICAgKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAgICpcbiAgICogU2hvdXQtb3V0IHRvIEFuZ3VsYXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzEyLjIueC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICAgKi9cbiAgY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFtcXGQrL2Etel0rPSokL2k7XG4gIGNvbnN0IGFsbG93ZWRBdHRyaWJ1dGUgPSAoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkgPT4ge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoYWxsb3dlZEF0dHJpYnV0ZUxpc3QuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgIGlmICh1cmlBdHRyaWJ1dGVzLmhhcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihTQUZFX1VSTF9QQVRURVJOLnRlc3QoYXR0cmlidXRlLm5vZGVWYWx1ZSkgfHwgREFUQV9VUkxfUEFUVEVSTi50ZXN0KGF0dHJpYnV0ZS5ub2RlVmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICAgIHJldHVybiBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoYXR0cmlidXRlUmVnZXggPT4gYXR0cmlidXRlUmVnZXggaW5zdGFuY2VvZiBSZWdFeHApLnNvbWUocmVnZXggPT4gcmVnZXgudGVzdChhdHRyaWJ1dGVOYW1lKSk7XG4gIH07XG4gIGNvbnN0IERlZmF1bHRBbGxvd2xpc3QgPSB7XG4gICAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICAgIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gICAgYXJlYTogW10sXG4gICAgYjogW10sXG4gICAgYnI6IFtdLFxuICAgIGNvbDogW10sXG4gICAgY29kZTogW10sXG4gICAgZGl2OiBbXSxcbiAgICBlbTogW10sXG4gICAgaHI6IFtdLFxuICAgIGgxOiBbXSxcbiAgICBoMjogW10sXG4gICAgaDM6IFtdLFxuICAgIGg0OiBbXSxcbiAgICBoNTogW10sXG4gICAgaDY6IFtdLFxuICAgIGk6IFtdLFxuICAgIGltZzogWydzcmMnLCAnc3Jjc2V0JywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgICBsaTogW10sXG4gICAgb2w6IFtdLFxuICAgIHA6IFtdLFxuICAgIHByZTogW10sXG4gICAgczogW10sXG4gICAgc21hbGw6IFtdLFxuICAgIHNwYW46IFtdLFxuICAgIHN1YjogW10sXG4gICAgc3VwOiBbXSxcbiAgICBzdHJvbmc6IFtdLFxuICAgIHU6IFtdLFxuICAgIHVsOiBbXVxuICB9O1xuICBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgYWxsb3dMaXN0LCBzYW5pdGl6ZUZ1bmN0aW9uKSB7XG4gICAgaWYgKCF1bnNhZmVIdG1sLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHVuc2FmZUh0bWw7XG4gICAgfVxuICAgIGlmIChzYW5pdGl6ZUZ1bmN0aW9uICYmIHR5cGVvZiBzYW5pdGl6ZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2FuaXRpemVGdW5jdGlvbih1bnNhZmVIdG1sKTtcbiAgICB9XG4gICAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKTtcbiAgICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKTtcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdLmNvbmNhdCguLi5jcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpO1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgY29uc3QgZWxlbWVudE5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKGFsbG93TGlzdCkuaW5jbHVkZXMoZWxlbWVudE5hbWUpKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdLmNvbmNhdCguLi5lbGVtZW50LmF0dHJpYnV0ZXMpO1xuICAgICAgY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoYWxsb3dMaXN0WycqJ10gfHwgW10sIGFsbG93TGlzdFtlbGVtZW50TmFtZV0gfHwgW10pO1xuICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlTGlzdCkge1xuICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlcykpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUw7XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvdGVtcGxhdGUtZmFjdG9yeS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDUgPSAnVGVtcGxhdGVGYWN0b3J5JztcbiAgY29uc3QgRGVmYXVsdCQ0ID0ge1xuICAgIGFsbG93TGlzdDogRGVmYXVsdEFsbG93bGlzdCxcbiAgICBjb250ZW50OiB7fSxcbiAgICAvLyB7IHNlbGVjdG9yIDogdGV4dCAsICBzZWxlY3RvcjIgOiB0ZXh0MiAsIH1cbiAgICBleHRyYUNsYXNzOiAnJyxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBzYW5pdGl6ZTogdHJ1ZSxcbiAgICBzYW5pdGl6ZUZuOiBudWxsLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48L2Rpdj4nXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDQgPSB7XG4gICAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgICBjb250ZW50OiAnb2JqZWN0JyxcbiAgICBleHRyYUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIGh0bWw6ICdib29sZWFuJyxcbiAgICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICAgIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICAgIHRlbXBsYXRlOiAnc3RyaW5nJ1xuICB9O1xuICBjb25zdCBEZWZhdWx0Q29udGVudFR5cGUgPSB7XG4gICAgZW50cnk6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb258bnVsbCknLFxuICAgIHNlbGVjdG9yOiAnKHN0cmluZ3xlbGVtZW50KSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBUZW1wbGF0ZUZhY3RvcnkgZXh0ZW5kcyBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ0O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDQ7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDU7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgZ2V0Q29udGVudCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KS5tYXAoY29uZmlnID0+IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGNvbmZpZykpLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG4gICAgaGFzQ29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldENvbnRlbnQoKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBjaGFuZ2VDb250ZW50KGNvbnRlbnQpIHtcbiAgICAgIHRoaXMuX2NoZWNrQ29udGVudChjb250ZW50KTtcbiAgICAgIHRoaXMuX2NvbmZpZy5jb250ZW50ID0ge1xuICAgICAgICAuLi50aGlzLl9jb25maWcuY29udGVudCxcbiAgICAgICAgLi4uY29udGVudFxuICAgICAgfTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b0h0bWwoKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRlbXBsYXRlV3JhcHBlci5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKHRoaXMuX2NvbmZpZy50ZW1wbGF0ZSk7XG4gICAgICBmb3IgKGNvbnN0IFtzZWxlY3RvciwgdGV4dF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnLmNvbnRlbnQpKSB7XG4gICAgICAgIHRoaXMuX3NldENvbnRlbnQodGVtcGxhdGVXcmFwcGVyLCB0ZXh0LCBzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRlbXBsYXRlV3JhcHBlci5jaGlsZHJlblswXTtcbiAgICAgIGNvbnN0IGV4dHJhQ2xhc3MgPSB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuZXh0cmFDbGFzcyk7XG4gICAgICBpZiAoZXh0cmFDbGFzcykge1xuICAgICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKC4uLmV4dHJhQ2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF90eXBlQ2hlY2tDb25maWcoY29uZmlnKSB7XG4gICAgICBzdXBlci5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl9jaGVja0NvbnRlbnQoY29uZmlnLmNvbnRlbnQpO1xuICAgIH1cbiAgICBfY2hlY2tDb250ZW50KGFyZykge1xuICAgICAgZm9yIChjb25zdCBbc2VsZWN0b3IsIGNvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGFyZykpIHtcbiAgICAgICAgc3VwZXIuX3R5cGVDaGVja0NvbmZpZyh7XG4gICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgZW50cnk6IGNvbnRlbnRcbiAgICAgICAgfSwgRGVmYXVsdENvbnRlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3NldENvbnRlbnQodGVtcGxhdGUsIGNvbnRlbnQsIHNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCB0ZW1wbGF0ZSk7XG4gICAgICBpZiAoIXRlbXBsYXRlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb250ZW50ID0gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oY29udGVudCk7XG4gICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgdGVtcGxhdGVFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaXNFbGVtZW50JDEoY29udGVudCkpIHtcbiAgICAgICAgdGhpcy5fcHV0RWxlbWVudEluVGVtcGxhdGUoZ2V0RWxlbWVudChjb250ZW50KSwgdGVtcGxhdGVFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKGNvbnRlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIH1cbiAgICBfbWF5YmVTYW5pdGl6ZShhcmcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25maWcuc2FuaXRpemUgPyBzYW5pdGl6ZUh0bWwoYXJnLCB0aGlzLl9jb25maWcuYWxsb3dMaXN0LCB0aGlzLl9jb25maWcuc2FuaXRpemVGbikgOiBhcmc7XG4gICAgfVxuICAgIF9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBleGVjdXRlKGFyZywgW3RoaXNdKTtcbiAgICB9XG4gICAgX3B1dEVsZW1lbnRJblRlbXBsYXRlKGVsZW1lbnQsIHRlbXBsYXRlRWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGVtcGxhdGVFbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGVtcGxhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHRvb2x0aXAuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQ0ID0gJ3Rvb2x0aXAnO1xuICBjb25zdCBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBuZXcgU2V0KFsnc2FuaXRpemUnLCAnYWxsb3dMaXN0JywgJ3Nhbml0aXplRm4nXSk7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQyID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX01PREFMID0gJ21vZGFsJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDIgPSAnc2hvdyc7XG4gIGNvbnN0IFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIgPSAnLnRvb2x0aXAtaW5uZXInO1xuICBjb25zdCBTRUxFQ1RPUl9NT0RBTCA9IGAuJHtDTEFTU19OQU1FX01PREFMfWA7XG4gIGNvbnN0IEVWRU5UX01PREFMX0hJREUgPSAnaGlkZS5icy5tb2RhbCc7XG4gIGNvbnN0IFRSSUdHRVJfSE9WRVIgPSAnaG92ZXInO1xuICBjb25zdCBUUklHR0VSX0ZPQ1VTID0gJ2ZvY3VzJztcbiAgY29uc3QgVFJJR0dFUl9DTElDSyA9ICdjbGljayc7XG4gIGNvbnN0IFRSSUdHRVJfTUFOVUFMID0gJ21hbnVhbCc7XG4gIGNvbnN0IEVWRU5UX0hJREUkMiA9ICdoaWRlJztcbiAgY29uc3QgRVZFTlRfSElEREVOJDIgPSAnaGlkZGVuJztcbiAgY29uc3QgRVZFTlRfU0hPVyQyID0gJ3Nob3cnO1xuICBjb25zdCBFVkVOVF9TSE9XTiQyID0gJ3Nob3duJztcbiAgY29uc3QgRVZFTlRfSU5TRVJURUQgPSAnaW5zZXJ0ZWQnO1xuICBjb25zdCBFVkVOVF9DTElDSyQxID0gJ2NsaWNrJztcbiAgY29uc3QgRVZFTlRfRk9DVVNJTiQxID0gJ2ZvY3VzaW4nO1xuICBjb25zdCBFVkVOVF9GT0NVU09VVCQxID0gJ2ZvY3Vzb3V0JztcbiAgY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9ICdtb3VzZWVudGVyJztcbiAgY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9ICdtb3VzZWxlYXZlJztcbiAgY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgICBBVVRPOiAnYXV0bycsXG4gICAgVE9QOiAndG9wJyxcbiAgICBSSUdIVDogaXNSVEwoKSA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gICAgQk9UVE9NOiAnYm90dG9tJyxcbiAgICBMRUZUOiBpc1JUTCgpID8gJ3JpZ2h0JyA6ICdsZWZ0J1xuICB9O1xuICBjb25zdCBEZWZhdWx0JDMgPSB7XG4gICAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gICAgY29udGFpbmVyOiBmYWxzZSxcbiAgICBjdXN0b21DbGFzczogJycsXG4gICAgZGVsYXk6IDAsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnRzOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLFxuICAgIGh0bWw6IGZhbHNlLFxuICAgIG9mZnNldDogWzAsIDBdLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICAgIHNhbml0aXplOiB0cnVlLFxuICAgIHNhbml0aXplRm46IG51bGwsXG4gICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+JyArICc8L2Rpdj4nLFxuICAgIHRpdGxlOiAnJyxcbiAgICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDMgPSB7XG4gICAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICAgIGNvbnRhaW5lcjogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gICAgY3VzdG9tQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgZGVsYXk6ICcobnVtYmVyfG9iamVjdCknLFxuICAgIGZhbGxiYWNrUGxhY2VtZW50czogJ2FycmF5JyxcbiAgICBodG1sOiAnYm9vbGVhbicsXG4gICAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICAgIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICAgIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gICAgdGVtcGxhdGU6ICdzdHJpbmcnLFxuICAgIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gICAgdHJpZ2dlcjogJ3N0cmluZydcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBUb29sdGlwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpO1xuICAgICAgfVxuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcblxuICAgICAgLy8gUHJpdmF0ZVxuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSAwO1xuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkgPSBudWxsO1xuICAgICAgdGhpcy5fbmV3Q29udGVudCA9IG51bGw7XG5cbiAgICAgIC8vIFByb3RlY3RlZFxuICAgICAgdGhpcy50aXAgPSBudWxsO1xuICAgICAgdGhpcy5fc2V0TGlzdGVuZXJzKCk7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9maXhUaXRsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQzO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDM7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDQ7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgZW5hYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0b2dnbGVFbmFibGVkKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZDtcbiAgICB9XG4gICAgdG9nZ2xlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICF0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrO1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICB0aGlzLl9sZWF2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9lbnRlcigpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTU9EQUwpLCBFVkVOVF9NT0RBTF9ISURFLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKTtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJykpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuX2lzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1ckMikpO1xuICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGZpbmRTaGFkb3dSb290KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgY29uc3QgaXNJblRoZURvbSA9IChzaGFkb3dSb290IHx8IHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gdG9kbyB2NiByZW1vdmUgdGhpcyBPUiBtYWtlIGl0IG9wdGlvbmFsXG4gICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKCk7XG4gICAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUaXBFbGVtZW50KCk7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcC5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb250YWluZXJcbiAgICAgIH0gPSB0aGlzLl9jb25maWc7XG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGlwKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSU5TRVJURUQpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BvcHBlciA9IHRoaXMuX2NyZWF0ZVBvcHBlcih0aXApO1xuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1dOJDIpKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLl9sZWF2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSElERSQyKSk7XG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfQ0xJQ0tdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfRk9DVVNdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfSE9WRVJdID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBudWxsOyAvLyBpdCBpcyBhIHRyaWNrIHRvIHN1cHBvcnQgbWFudWFsIHRyaWdnZXJpbmdcblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSElEREVOJDIpKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgdGhpcy5faXNBbmltYXRlZCgpKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLl9nZXRUaXRsZSgpKTtcbiAgICB9XG4gICAgX2dldFRpcEVsZW1lbnQoKSB7XG4gICAgICBpZiAoIXRoaXMudGlwKSB7XG4gICAgICAgIHRoaXMudGlwID0gdGhpcy5fY3JlYXRlVGlwRWxlbWVudCh0aGlzLl9uZXdDb250ZW50IHx8IHRoaXMuX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRpcDtcbiAgICB9XG4gICAgX2NyZWF0ZVRpcEVsZW1lbnQoY29udGVudCkge1xuICAgICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGVtcGxhdGVGYWN0b3J5KGNvbnRlbnQpLnRvSHRtbCgpO1xuXG4gICAgICAvLyB0b2RvOiByZW1vdmUgdGhpcyBjaGVjayBvbiB2NlxuICAgICAgaWYgKCF0aXApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUkMiwgQ0xBU1NfTkFNRV9TSE9XJDIpO1xuICAgICAgLy8gdG9kbzogb24gdjYgdGhlIGZvbGxvd2luZyBjYW4gYmUgYWNoaWV2ZWQgd2l0aCBDU1Mgb25seVxuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoYGJzLSR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hdXRvYCk7XG4gICAgICBjb25zdCB0aXBJZCA9IGdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpLnRvU3RyaW5nKCk7XG4gICAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKTtcbiAgICAgIGlmICh0aGlzLl9pc0FuaW1hdGVkKCkpIHtcbiAgICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFJDIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRpcDtcbiAgICB9XG4gICAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgICB0aGlzLl9uZXdDb250ZW50ID0gY29udGVudDtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2dldFRlbXBsYXRlRmFjdG9yeShjb250ZW50KSB7XG4gICAgICBpZiAodGhpcy5fdGVtcGxhdGVGYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeS5jaGFuZ2VDb250ZW50KGNvbnRlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5ID0gbmV3IFRlbXBsYXRlRmFjdG9yeSh7XG4gICAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAgIC8vIHRoZSBgY29udGVudGAgdmFyIGhhcyB0byBiZSBhZnRlciBgdGhpcy5fY29uZmlnYFxuICAgICAgICAgIC8vIHRvIG92ZXJyaWRlIGNvbmZpZy5jb250ZW50IGluIGNhc2Ugb2YgcG9wb3ZlclxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgZXh0cmFDbGFzczogdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmN1c3RvbUNsYXNzKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZUZhY3Rvcnk7XG4gICAgfVxuICAgIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbU0VMRUNUT1JfVE9PTFRJUF9JTk5FUl06IHRoaXMuX2dldFRpdGxlKClcbiAgICAgIH07XG4gICAgfVxuICAgIF9nZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcudGl0bGUpIHx8IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJyk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldE9yQ3JlYXRlSW5zdGFuY2UoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgIH1cbiAgICBfaXNBbmltYXRlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25maWcuYW5pbWF0aW9uIHx8IHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkMik7XG4gICAgfVxuICAgIF9pc1Nob3duKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckMik7XG4gICAgfVxuICAgIF9jcmVhdGVQb3BwZXIodGlwKSB7XG4gICAgICBjb25zdCBwbGFjZW1lbnQgPSBleGVjdXRlKHRoaXMuX2NvbmZpZy5wbGFjZW1lbnQsIFt0aGlzLCB0aXAsIHRoaXMuX2VsZW1lbnRdKTtcbiAgICAgIGNvbnN0IGF0dGFjaG1lbnQgPSBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXTtcbiAgICAgIHJldHVybiBjcmVhdGVQb3BwZXIodGhpcy5fZWxlbWVudCwgdGlwLCB0aGlzLl9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkpO1xuICAgIH1cbiAgICBfZ2V0T2Zmc2V0KCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBvZmZzZXRcbiAgICAgIH0gPSB0aGlzLl9jb25maWc7XG4gICAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VJbnQodmFsdWUsIDEwKSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH1cbiAgICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gZXhlY3V0ZShhcmcsIFt0aGlzLl9lbGVtZW50XSk7XG4gICAgfVxuICAgIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiB0aGlzLl9jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRzXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnYXJyb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGAuJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWFycm93YFxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdwcmVTZXRQbGFjZW1lbnQnLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGhhc2U6ICdiZWZvcmVNYWluJyxcbiAgICAgICAgICBmbjogZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBQcmUtc2V0IFBvcHBlcidzIHBsYWNlbWVudCBhdHRyaWJ1dGUgaW4gb3JkZXIgdG8gcmVhZCB0aGUgYXJyb3cgc2l6ZXMgcHJvcGVybHkuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIFBvcHBlciBtaXhlcyB1cCB0aGUgd2lkdGggYW5kIGhlaWdodCBkaW1lbnNpb25zIHNpbmNlIHRoZSBpbml0aWFsIGFycm93IHN0eWxlIGlzIGZvciB0b3AgcGxhY2VtZW50XG4gICAgICAgICAgICB0aGlzLl9nZXRUaXBFbGVtZW50KCkuc2V0QXR0cmlidXRlKCdkYXRhLXBvcHBlci1wbGFjZW1lbnQnLCBkYXRhLnN0YXRlLnBsYWNlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgICAgLi4uZXhlY3V0ZSh0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnLCBbZGVmYXVsdEJzUG9wcGVyQ29uZmlnXSlcbiAgICAgIH07XG4gICAgfVxuICAgIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuX2NvbmZpZy50cmlnZ2VyLnNwbGl0KCcgJyk7XG4gICAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdHJpZ2dlcnMpIHtcbiAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfQ0xJQ0skMSksIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCk7XG4gICAgICAgICAgICBjb250ZXh0LnRvZ2dsZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRSSUdHRVJfTUFOVUFMKSB7XG4gICAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgPyB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9NT1VTRUVOVEVSKSA6IHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTSU4kMSk7XG4gICAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID8gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VMRUFWRSkgOiB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9GT0NVU09VVCQxKTtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRJbiwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KTtcbiAgICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnRleHQuX2VudGVyKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50T3V0LCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpO1xuICAgICAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gY29udGV4dC5fZWxlbWVudC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnRleHQuX2xlYXZlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcik7XG4gICAgfVxuICAgIF9maXhUaXRsZSgpIHtcbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSAmJiAhdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aXRsZSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScsIHRpdGxlKTsgLy8gRE8gTk9UIFVTRSBJVC4gSXMgb25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xuICAgIH1cbiAgICBfZW50ZXIoKSB7XG4gICAgICBpZiAodGhpcy5faXNTaG93bigpIHx8IHRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICB0aGlzLl9pc0hvdmVyZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5LnNob3cpO1xuICAgIH1cbiAgICBfbGVhdmUoKSB7XG4gICAgICBpZiAodGhpcy5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheS5oaWRlKTtcbiAgICB9XG4gICAgX3NldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCk7XG4gICAgfVxuICAgIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fYWN0aXZlVHJpZ2dlcikuaW5jbHVkZXModHJ1ZSk7XG4gICAgfVxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25zdCBkYXRhQXR0cmlidXRlcyA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgZm9yIChjb25zdCBkYXRhQXR0cmlidXRlIG9mIE9iamVjdC5rZXlzKGRhdGFBdHRyaWJ1dGVzKSkge1xuICAgICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmhhcyhkYXRhQXR0cmlidXRlKSkge1xuICAgICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cmlidXRlXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uZmlnID0ge1xuICAgICAgICAuLi5kYXRhQXR0cmlidXRlcyxcbiAgICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgICAgfTtcbiAgICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZyk7XG4gICAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZyk7XG4gICAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgY29uZmlnLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlID8gZG9jdW1lbnQuYm9keSA6IGdldEVsZW1lbnQoY29uZmlnLmNvbnRhaW5lcik7XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHt9O1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnKSkge1xuICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgY29uZmlnW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uZmlnLnNlbGVjdG9yID0gZmFsc2U7XG4gICAgICBjb25maWcudHJpZ2dlciA9ICdtYW51YWwnO1xuXG4gICAgICAvLyBJbiB0aGUgZnV0dXJlIGNhbiBiZSByZXBsYWNlZCB3aXRoOlxuICAgICAgLy8gY29uc3Qga2V5c1dpdGhEaWZmZXJlbnRWYWx1ZXMgPSBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcpLmZpbHRlcihlbnRyeSA9PiB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRbZW50cnlbMF1dICE9PSB0aGlzLl9jb25maWdbZW50cnlbMF1dKVxuICAgICAgLy8gYE9iamVjdC5mcm9tRW50cmllcyhrZXlzV2l0aERpZmZlcmVudFZhbHVlcylgXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfZGlzcG9zZVBvcHBlcigpIHtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgICB0aGlzLnRpcC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy50aXAgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFRvb2x0aXAuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvb2x0aXApO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgcG9wb3Zlci5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDMgPSAncG9wb3Zlcic7XG4gIGNvbnN0IFNFTEVDVE9SX1RJVExFID0gJy5wb3BvdmVyLWhlYWRlcic7XG4gIGNvbnN0IFNFTEVDVE9SX0NPTlRFTlQgPSAnLnBvcG92ZXItYm9keSc7XG4gIGNvbnN0IERlZmF1bHQkMiA9IHtcbiAgICAuLi5Ub29sdGlwLkRlZmF1bHQsXG4gICAgY29udGVudDogJycsXG4gICAgb2Zmc2V0OiBbMCwgOF0sXG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48L2Rpdj4nICsgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICsgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj4nICsgJzwvZGl2PicsXG4gICAgdHJpZ2dlcjogJ2NsaWNrJ1xuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQyID0ge1xuICAgIC4uLlRvb2x0aXAuRGVmYXVsdFR5cGUsXG4gICAgY29udGVudDogJyhudWxsfHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDI7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkMjtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkMztcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZXNcbiAgICBfaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRUaXRsZSgpIHx8IHRoaXMuX2dldENvbnRlbnQoKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtTRUxFQ1RPUl9USVRMRV06IHRoaXMuX2dldFRpdGxlKCksXG4gICAgICAgIFtTRUxFQ1RPUl9DT05URU5UXTogdGhpcy5fZ2V0Q29udGVudCgpXG4gICAgICB9O1xuICAgIH1cbiAgICBfZ2V0Q29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY29udGVudCk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gUG9wb3Zlci5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oUG9wb3Zlcik7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBzY3JvbGxzcHkuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQyID0gJ3Njcm9sbHNweSc7XG4gIGNvbnN0IERBVEFfS0VZJDIgPSAnYnMuc2Nyb2xsc3B5JztcbiAgY29uc3QgRVZFTlRfS0VZJDIgPSBgLiR7REFUQV9LRVkkMn1gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBgYWN0aXZhdGUke0VWRU5UX0tFWSQyfWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLID0gYGNsaWNrJHtFVkVOVF9LRVkkMn1gO1xuICBjb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJJDEgPSBgbG9hZCR7RVZFTlRfS0VZJDJ9JHtEQVRBX0FQSV9LRVl9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNID0gJ2Ryb3Bkb3duLWl0ZW0nO1xuICBjb25zdCBDTEFTU19OQU1FX0FDVElWRSQxID0gJ2FjdGl2ZSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfU1BZID0gJ1tkYXRhLWJzLXNweT1cInNjcm9sbFwiXSc7XG4gIGNvbnN0IFNFTEVDVE9SX1RBUkdFVF9MSU5LUyA9ICdbaHJlZl0nO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCc7XG4gIGNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJztcbiAgY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJztcbiAgY29uc3QgU0VMRUNUT1JfTElOS19JVEVNUyA9IGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTkFWX0lURU1TfSA+ICR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9MSVNUX0lURU1TfWA7XG4gIGNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bic7XG4gIGNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSQxID0gJy5kcm9wZG93bi10b2dnbGUnO1xuICBjb25zdCBEZWZhdWx0JDEgPSB7XG4gICAgb2Zmc2V0OiBudWxsLFxuICAgIC8vIFRPRE86IHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gICAgcm9vdE1hcmdpbjogJzBweCAwcHggLTI1JScsXG4gICAgc21vb3RoU2Nyb2xsOiBmYWxzZSxcbiAgICB0YXJnZXQ6IG51bGwsXG4gICAgdGhyZXNob2xkOiBbMC4xLCAwLjUsIDFdXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDEgPSB7XG4gICAgb2Zmc2V0OiAnKG51bWJlcnxudWxsKScsXG4gICAgLy8gVE9ETyB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICAgIHJvb3RNYXJnaW46ICdzdHJpbmcnLFxuICAgIHNtb290aFNjcm9sbDogJ2Jvb2xlYW4nLFxuICAgIHRhcmdldDogJ2VsZW1lbnQnLFxuICAgIHRocmVzaG9sZDogJ2FycmF5J1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFNjcm9sbFNweSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcblxuICAgICAgLy8gdGhpcy5fZWxlbWVudCBpcyB0aGUgb2JzZXJ2YWJsZXNDb250YWluZXIgYW5kIGNvbmZpZy50YXJnZXQgdGhlIG1lbnUgbGlua3Mgd3JhcHBlclxuICAgICAgdGhpcy5fdGFyZ2V0TGlua3MgPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLl9yb290RWxlbWVudCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWxlbWVudCkub3ZlcmZsb3dZID09PSAndmlzaWJsZScgPyBudWxsIDogdGhpcy5fZWxlbWVudDtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGw7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEgPSB7XG4gICAgICAgIHZpc2libGVFbnRyeVRvcDogMCxcbiAgICAgICAgcGFyZW50U2Nyb2xsVG9wOiAwXG4gICAgICB9O1xuICAgICAgdGhpcy5yZWZyZXNoKCk7IC8vIGluaXRpYWxpemVcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkMTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQxO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQyO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHJlZnJlc2goKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKCk7XG4gICAgICB0aGlzLl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpO1xuICAgICAgaWYgKHRoaXMuX29ic2VydmVyKSB7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gdGhpcy5fZ2V0TmV3T2JzZXJ2ZXIoKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMudmFsdWVzKCkpIHtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgICAvLyBUT0RPOiBvbiB2NiB0YXJnZXQgc2hvdWxkIGJlIGdpdmVuIGV4cGxpY2l0bHkgJiByZW1vdmUgdGhlIHt0YXJnZXQ6ICdzcy10YXJnZXQnfSBjYXNlXG4gICAgICBjb25maWcudGFyZ2V0ID0gZ2V0RWxlbWVudChjb25maWcudGFyZ2V0KSB8fCBkb2N1bWVudC5ib2R5O1xuXG4gICAgICAvLyBUT0RPOiB2NiBPbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zLiBVc2Ugcm9vdE1hcmdpbiBvbmx5XG4gICAgICBjb25maWcucm9vdE1hcmdpbiA9IGNvbmZpZy5vZmZzZXQgPyBgJHtjb25maWcub2Zmc2V0fXB4IDBweCAtMzAlYCA6IGNvbmZpZy5yb290TWFyZ2luO1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcudGhyZXNob2xkID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25maWcudGhyZXNob2xkID0gY29uZmlnLnRocmVzaG9sZC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCkge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc21vb3RoU2Nyb2xsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gdW5yZWdpc3RlciBhbnkgcHJldmlvdXMgbGlzdGVuZXJzXG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSywgU0VMRUNUT1JfVEFSR0VUX0xJTktTLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLmdldChldmVudC50YXJnZXQuaGFzaCk7XG4gICAgICAgIGlmIChvYnNlcnZhYmxlU2VjdGlvbikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuX3Jvb3RFbGVtZW50IHx8IHdpbmRvdztcbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSBvYnNlcnZhYmxlU2VjdGlvbi5vZmZzZXRUb3AgLSB0aGlzLl9lbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgICAgICBpZiAocm9vdC5zY3JvbGxUbykge1xuICAgICAgICAgICAgcm9vdC5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgIHRvcDogaGVpZ2h0LFxuICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENocm9tZSA2MCBkb2Vzbid0IHN1cHBvcnQgYHNjcm9sbFRvYFxuICAgICAgICAgIHJvb3Quc2Nyb2xsVG9wID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgX2dldE5ld09ic2VydmVyKCkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgcm9vdDogdGhpcy5fcm9vdEVsZW1lbnQsXG4gICAgICAgIHRocmVzaG9sZDogdGhpcy5fY29uZmlnLnRocmVzaG9sZCxcbiAgICAgICAgcm9vdE1hcmdpbjogdGhpcy5fY29uZmlnLnJvb3RNYXJnaW5cbiAgICAgIH07XG4gICAgICByZXR1cm4gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4gdGhpcy5fb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gVGhlIGxvZ2ljIG9mIHNlbGVjdGlvblxuICAgIF9vYnNlcnZlckNhbGxiYWNrKGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlbnRyeSA9PiB0aGlzLl90YXJnZXRMaW5rcy5nZXQoYCMke2VudHJ5LnRhcmdldC5pZH1gKTtcbiAgICAgIGNvbnN0IGFjdGl2YXRlID0gZW50cnkgPT4ge1xuICAgICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcDtcbiAgICAgICAgdGhpcy5fcHJvY2Vzcyh0YXJnZXRFbGVtZW50KGVudHJ5KSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcGFyZW50U2Nyb2xsVG9wID0gKHRoaXMuX3Jvb3RFbGVtZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuc2Nyb2xsVG9wO1xuICAgICAgY29uc3QgdXNlclNjcm9sbHNEb3duID0gcGFyZW50U2Nyb2xsVG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3A7XG4gICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wID0gcGFyZW50U2Nyb2xsVG9wO1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsO1xuICAgICAgICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcDtcbiAgICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyBkb3duLCBwaWNrIHRoZSBiaWdnZXIgb2Zmc2V0VG9wXG4gICAgICAgIGlmICh1c2VyU2Nyb2xsc0Rvd24gJiYgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgICAgYWN0aXZhdGUoZW50cnkpO1xuICAgICAgICAgIC8vIGlmIHBhcmVudCBpc24ndCBzY3JvbGxlZCwgbGV0J3Mga2VlcCB0aGUgZmlyc3QgdmlzaWJsZSBpdGVtLCBicmVha2luZyB0aGUgaXRlcmF0aW9uXG4gICAgICAgICAgaWYgKCFwYXJlbnRTY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB3ZSBhcmUgc2Nyb2xsaW5nIHVwLCBwaWNrIHRoZSBzbWFsbGVzdCBvZmZzZXRUb3BcbiAgICAgICAgaWYgKCF1c2VyU2Nyb2xsc0Rvd24gJiYgIWVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICAgIGFjdGl2YXRlKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBfaW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpIHtcbiAgICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpO1xuICAgICAgY29uc3QgdGFyZ2V0TGlua3MgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgdGhpcy5fY29uZmlnLnRhcmdldCk7XG4gICAgICBmb3IgKGNvbnN0IGFuY2hvciBvZiB0YXJnZXRMaW5rcykge1xuICAgICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYW5jaG9yIGhhcyBhbiBpZCBhbmQgaXMgbm90IGRpc2FibGVkXG4gICAgICAgIGlmICghYW5jaG9yLmhhc2ggfHwgaXNEaXNhYmxlZChhbmNob3IpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZVNlY3Rpb24gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKGFuY2hvci5oYXNoLCB0aGlzLl9lbGVtZW50KTtcblxuICAgICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgb2JzZXJ2YWJsZVNlY3Rpb24gZXhpc3RzICYgaXMgdmlzaWJsZVxuICAgICAgICBpZiAoaXNWaXNpYmxlKG9ic2VydmFibGVTZWN0aW9uKSkge1xuICAgICAgICAgIHRoaXMuX3RhcmdldExpbmtzLnNldChhbmNob3IuaGFzaCwgYW5jaG9yKTtcbiAgICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuc2V0KGFuY2hvci5oYXNoLCBvYnNlcnZhYmxlU2VjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgX3Byb2Nlc3ModGFyZ2V0KSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0aGlzLl9jb25maWcudGFyZ2V0KTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldDtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgdGhpcy5fYWN0aXZhdGVQYXJlbnRzKHRhcmdldCk7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0YXJnZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBfYWN0aXZhdGVQYXJlbnRzKHRhcmdldCkge1xuICAgICAgLy8gQWN0aXZhdGUgZHJvcGRvd24gcGFyZW50c1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSQxLCB0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgbGlzdEdyb3VwIG9mIFNlbGVjdG9yRW5naW5lLnBhcmVudHModGFyZ2V0LCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCkpIHtcbiAgICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBTRUxFQ1RPUl9MSU5LX0lURU1TKSkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBfY2xlYXJBY3RpdmVDbGFzcyhwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgY29uc3QgYWN0aXZlTm9kZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKGAke1NFTEVDVE9SX1RBUkdFVF9MSU5LU30uJHtDTEFTU19OQU1FX0FDVElWRSQxfWAsIHBhcmVudCk7XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYWN0aXZlTm9kZXMpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEkkMSwgKCkgPT4ge1xuICAgIGZvciAoY29uc3Qgc3B5IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9TUFkpKSB7XG4gICAgICBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZShzcHkpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oU2Nyb2xsU3B5KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHRhYi5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDEgPSAndGFiJztcbiAgY29uc3QgREFUQV9LRVkkMSA9ICdicy50YWInO1xuICBjb25zdCBFVkVOVF9LRVkkMSA9IGAuJHtEQVRBX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX0hJREUkMSA9IGBoaWRlJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9ISURERU4kMSA9IGBoaWRkZW4ke0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX1NIT1ckMSA9IGBzaG93JHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9TSE9XTiQxID0gYHNob3duJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCc7XG4gIGNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0JztcbiAgY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnO1xuICBjb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nO1xuICBjb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnO1xuICBjb25zdCBDTEFTU19OQU1FX0ZBREUkMSA9ICdmYWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDEgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX0RST1BET1dOID0gJ2Ryb3Bkb3duJztcbiAgY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnO1xuICBjb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VID0gJy5kcm9wZG93bi1tZW51JztcbiAgY29uc3QgTk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICc6bm90KC5kcm9wZG93bi10b2dnbGUpJztcbiAgY29uc3QgU0VMRUNUT1JfVEFCX1BBTkVMID0gJy5saXN0LWdyb3VwLCAubmF2LCBbcm9sZT1cInRhYmxpc3RcIl0nO1xuICBjb25zdCBTRUxFQ1RPUl9PVVRFUiA9ICcubmF2LWl0ZW0sIC5saXN0LWdyb3VwLWl0ZW0nO1xuICBjb25zdCBTRUxFQ1RPUl9JTk5FUiA9IGAubmF2LWxpbmske05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCAubGlzdC1ncm91cC1pdGVtJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgW3JvbGU9XCJ0YWJcIl0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9YDtcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdJzsgLy8gdG9kbzp2NjogY291bGQgYmUgb25seSBgdGFiYFxuICBjb25zdCBTRUxFQ1RPUl9JTk5FUl9FTEVNID0gYCR7U0VMRUNUT1JfSU5ORVJ9LCAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfWA7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSA9IGAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl1gO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFRhYiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX1RBQl9QQU5FTCk7XG4gICAgICBpZiAoIXRoaXMuX3BhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIHRvZG86IHNob3VsZCBUaHJvdyBleGNlcHRpb24gb24gdjZcbiAgICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtlbGVtZW50Lm91dGVySFRNTH0gaGFzIG5vdCBhIHZhbGlkIHBhcmVudCAke1NFTEVDVE9SX0lOTkVSX0VMRU19YClcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHVwIGluaXRpYWwgYXJpYSBhdHRyaWJ1dGVzXG4gICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlcyh0aGlzLl9wYXJlbnQsIHRoaXMuX2dldENoaWxkcmVuKCkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkMTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBzaG93KCkge1xuICAgICAgLy8gU2hvd3MgdGhpcyBlbGVtIGFuZCBkZWFjdGl2YXRlIHRoZSBhY3RpdmUgc2libGluZyBpZiBleGlzdHNcbiAgICAgIGNvbnN0IGlubmVyRWxlbSA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5fZWxlbUlzQWN0aXZlKGlubmVyRWxlbSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWFyY2ggZm9yIGFjdGl2ZSB0YWIgb24gc2FtZSBwYXJlbnQgdG8gZGVhY3RpdmF0ZSBpdFxuICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5fZ2V0QWN0aXZlRWxlbSgpO1xuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gYWN0aXZlID8gRXZlbnRIYW5kbGVyLnRyaWdnZXIoYWN0aXZlLCBFVkVOVF9ISURFJDEsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogaW5uZXJFbGVtXG4gICAgICB9KSA6IG51bGw7XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcihpbm5lckVsZW0sIEVWRU5UX1NIT1ckMSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBhY3RpdmVcbiAgICAgIH0pO1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8IGhpZGVFdmVudCAmJiBoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9kZWFjdGl2YXRlKGFjdGl2ZSwgaW5uZXJFbGVtKTtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKGlubmVyRWxlbSwgYWN0aXZlKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2FjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkpOyAvLyBTZWFyY2ggYW5kIGFjdGl2YXRlL3Nob3cgdGhlIHByb3BlciBzZWN0aW9uXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX1NIT1dOJDEsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkMSkpO1xuICAgIH1cbiAgICBfZGVhY3RpdmF0ZShlbGVtZW50LCByZWxhdGVkRWxlbSkge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgICBlbGVtZW50LmJsdXIoKTtcbiAgICAgIHRoaXMuX2RlYWN0aXZhdGUoU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSk7IC8vIFNlYXJjaCBhbmQgZGVhY3RpdmF0ZSB0aGUgc2hvd24gc2VjdGlvbiB0b29cblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckMSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9ISURERU4kMSwge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRFbGVtXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQxKSk7XG4gICAgfVxuICAgIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgICBpZiAoIVtBUlJPV19MRUZUX0tFWSwgQVJST1dfUklHSFRfS0VZLCBBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBzdG9wUHJvcGFnYXRpb24vcHJldmVudERlZmF1bHQgYm90aCBhZGRlZCB0byBzdXBwb3J0IHVwL2Rvd24ga2V5cyB3aXRob3V0IHNjcm9sbGluZyB0aGUgcGFnZVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGlzTmV4dCA9IFtBUlJPV19SSUdIVF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpO1xuICAgICAgY29uc3QgbmV4dEFjdGl2ZUVsZW1lbnQgPSBnZXROZXh0QWN0aXZlRWxlbWVudCh0aGlzLl9nZXRDaGlsZHJlbigpLmZpbHRlcihlbGVtZW50ID0+ICFpc0Rpc2FibGVkKGVsZW1lbnQpKSwgZXZlbnQudGFyZ2V0LCBpc05leHQsIHRydWUpO1xuICAgICAgaWYgKG5leHRBY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIG5leHRBY3RpdmVFbGVtZW50LmZvY3VzKHtcbiAgICAgICAgICBwcmV2ZW50U2Nyb2xsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShuZXh0QWN0aXZlRWxlbWVudCkuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgICBfZ2V0Q2hpbGRyZW4oKSB7XG4gICAgICAvLyBjb2xsZWN0aW9uIG9mIGlubmVyIGVsZW1lbnRzXG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JTk5FUl9FTEVNLCB0aGlzLl9wYXJlbnQpO1xuICAgIH1cbiAgICBfZ2V0QWN0aXZlRWxlbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbmQoY2hpbGQgPT4gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKSkgfHwgbnVsbDtcbiAgICB9XG4gICAgX3NldEluaXRpYWxBdHRyaWJ1dGVzKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHBhcmVudCwgJ3JvbGUnLCAndGFibGlzdCcpO1xuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX2dldElubmVyRWxlbWVudChjaGlsZCk7XG4gICAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2VsZW1Jc0FjdGl2ZShjaGlsZCk7XG4gICAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoY2hpbGQpO1xuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgaXNBY3RpdmUpO1xuICAgICAgaWYgKG91dGVyRWxlbSAhPT0gY2hpbGQpIHtcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMob3V0ZXJFbGVtLCAncm9sZScsICdwcmVzZW50YXRpb24nKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoY2hpbGQsICdyb2xlJywgJ3RhYicpO1xuXG4gICAgICAvLyBzZXQgYXR0cmlidXRlcyB0byB0aGUgcmVsYXRlZCBwYW5lbCB0b29cbiAgICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbChjaGlsZCk7XG4gICAgfVxuICAgIF9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoY2hpbGQpO1xuICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAncm9sZScsICd0YWJwYW5lbCcpO1xuICAgICAgaWYgKGNoaWxkLmlkKSB7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ2FyaWEtbGFiZWxsZWRieScsIGAke2NoaWxkLmlkfWApO1xuICAgICAgfVxuICAgIH1cbiAgICBfdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgb3Blbikge1xuICAgICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgaWYgKCFvdXRlckVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX0RST1BET1dOKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0b2dnbGUgPSAoc2VsZWN0b3IsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3Rvciwgb3V0ZXJFbGVtKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lLCBvcGVuKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRvZ2dsZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICAgIHRvZ2dsZShTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VLCBDTEFTU19OQU1FX1NIT1ckMSk7XG4gICAgICBvdXRlckVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgb3Blbik7XG4gICAgfVxuICAgIF9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9lbGVtSXNBY3RpdmUoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICB9XG5cbiAgICAvLyBUcnkgdG8gZ2V0IHRoZSBpbm5lciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWxpbmspXG4gICAgX2dldElubmVyRWxlbWVudChlbGVtKSB7XG4gICAgICByZXR1cm4gZWxlbS5tYXRjaGVzKFNFTEVDVE9SX0lOTkVSX0VMRU0pID8gZWxlbSA6IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ORVJfRUxFTSwgZWxlbSk7XG4gICAgfVxuXG4gICAgLy8gVHJ5IHRvIGdldCB0aGUgb3V0ZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1pdGVtKVxuICAgIF9nZXRPdXRlckVsZW1lbnQoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW0uY2xvc2VzdChTRUxFQ1RPUl9PVVRFUikgfHwgZWxlbTtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnNob3coKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgb24gZm9jdXNcbiAgICovXG4gIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUpKSB7XG4gICAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihUYWIpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdG9hc3QuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSA9ICd0b2FzdCc7XG4gIGNvbnN0IERBVEFfS0VZID0gJ2JzLnRvYXN0JztcbiAgY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFT1ZFUiA9IGBtb3VzZW92ZXIke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9NT1VTRU9VVCA9IGBtb3VzZW91dCR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0ZPQ1VTT1VUID0gYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX0hJREUgPSAnaGlkZSc7IC8vIEBkZXByZWNhdGVkIC0ga2VwdCBoZXJlIG9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HID0gJ3Nob3dpbmcnO1xuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICAgIGRlbGF5OiAnbnVtYmVyJ1xuICB9O1xuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICBhdXRvaGlkZTogdHJ1ZSxcbiAgICBkZWxheTogNTAwMFxuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFRvYXN0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gICAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHNob3coKSB7XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKTtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jbGVhclRpbWVvdXQoKTtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpO1xuICAgICAgfVxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTik7XG4gICAgICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfSElERSk7IC8vIEBkZXByZWNhdGVkXG4gICAgICByZWZsb3codGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XLCBDTEFTU19OQU1FX1NIT1dJTkcpO1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbik7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpO1xuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURFKTsgLy8gQGRlcHJlY2F0ZWRcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORywgQ0xBU1NfTkFNRV9TSE9XKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2NvbmZpZy5hbmltYXRpb24pO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KCk7XG4gICAgICBpZiAodGhpcy5pc1Nob3duKCkpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyk7XG4gICAgICB9XG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuICAgIGlzU2hvd24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG5cbiAgICBfbWF5YmVTY2hlZHVsZUhpZGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiB8fCB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpO1xuICAgIH1cbiAgICBfb25JbnRlcmFjdGlvbihldmVudCwgaXNJbnRlcmFjdGluZykge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XG4gICAgICAgIGNhc2UgJ21vdXNlb3V0JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnZm9jdXNpbic6XG4gICAgICAgIGNhc2UgJ2ZvY3Vzb3V0JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0ludGVyYWN0aW5nKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0RWxlbWVudCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudCA9PT0gbmV4dEVsZW1lbnQgfHwgdGhpcy5fZWxlbWVudC5jb250YWlucyhuZXh0RWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKTtcbiAgICB9XG4gICAgX3NldExpc3RlbmVycygpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRU9WRVIsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRU9VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSk7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSk7XG4gICAgfVxuICAgIF9jbGVhclRpbWVvdXQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBUb2FzdC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgZW5hYmxlRGlzbWlzc1RyaWdnZXIoVG9hc3QpO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvYXN0KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGluZGV4LnVtZC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIGNvbnN0IGluZGV4X3VtZCA9IHtcbiAgICBBbGVydCxcbiAgICBCdXR0b24sXG4gICAgQ2Fyb3VzZWwsXG4gICAgQ29sbGFwc2UsXG4gICAgRHJvcGRvd24sXG4gICAgTW9kYWwsXG4gICAgT2ZmY2FudmFzLFxuICAgIFBvcG92ZXIsXG4gICAgU2Nyb2xsU3B5LFxuICAgIFRhYixcbiAgICBUb2FzdCxcbiAgICBUb29sdGlwXG4gIH07XG5cbiAgcmV0dXJuIGluZGV4X3VtZDtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLmJ1bmRsZS5qcy5tYXBcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiZGVmYXVsdCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImNhcmRDb250YWluZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNvbnRhaW5lciIsImNhcmRzIiwiYWRkTGVmdCIsImxlbmd0aCIsInJvdGF0ZSIsInJvdGF0ZVN0eWxlIiwiY2xhc3NMZWZ0IiwiY2FyZCIsInN0eWxlIiwibGVmdCIsImNvbmNhdCIsInRyYW5zZm9ybSIsImNhcmRDb250YWluZXJzTWluaSIsIm1pbmlCb3R0b21TdHlsZSIsImJvdHRvbSIsImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwiX3R5cGVvZiIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsImdsb2JhbFRoaXMiLCJzZWxmIiwiYm9vdHN0cmFwIiwiX0tFWV9UT19ESVJFQ1RJT04iLCJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJUUkFOU0lUSU9OX0VORCIsInBhcnNlU2VsZWN0b3IiLCJzZWxlY3RvciIsIndpbmRvdyIsIkNTUyIsImVzY2FwZSIsInJlcGxhY2UiLCJtYXRjaCIsImlkIiwidG9UeXBlIiwib2JqZWN0IiwidW5kZWZpbmVkIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwidG9Mb3dlckNhc2UiLCJnZXRVSUQiLCJwcmVmaXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsImdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50IiwiX3dpbmRvdyRnZXRDb21wdXRlZFN0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25EZWxheSIsImZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsImZsb2F0VHJhbnNpdGlvbkRlbGF5Iiwic3BsaXQiLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImlzRWxlbWVudCQxIiwianF1ZXJ5Iiwibm9kZVR5cGUiLCJnZXRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImlzVmlzaWJsZSIsImdldENsaWVudFJlY3RzIiwiZWxlbWVudElzVmlzaWJsZSIsImdldFByb3BlcnR5VmFsdWUiLCJjbG9zZWREZXRhaWxzIiwiY2xvc2VzdCIsInN1bW1hcnkiLCJwYXJlbnROb2RlIiwiaXNEaXNhYmxlZCIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImRpc2FibGVkIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiZmluZFNoYWRvd1Jvb3QiLCJkb2N1bWVudEVsZW1lbnQiLCJhdHRhY2hTaGFkb3ciLCJnZXRSb290Tm9kZSIsInJvb3QiLCJTaGFkb3dSb290Iiwibm9vcCIsInJlZmxvdyIsIm9mZnNldEhlaWdodCIsImdldGpRdWVyeSIsImpRdWVyeSIsImJvZHkiLCJET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzIiwib25ET01Db250ZW50TG9hZGVkIiwiY2FsbGJhY2siLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9pMiIsIl9ET01Db250ZW50TG9hZGVkQ2FsbCIsInB1c2giLCJpc1JUTCIsImRpciIsImRlZmluZUpRdWVyeVBsdWdpbiIsInBsdWdpbiIsIiQiLCJuYW1lIiwiTkFNRSIsIkpRVUVSWV9OT19DT05GTElDVCIsImZuIiwialF1ZXJ5SW50ZXJmYWNlIiwiQ29uc3RydWN0b3IiLCJub0NvbmZsaWN0IiwiZXhlY3V0ZSIsInBvc3NpYmxlQ2FsbGJhY2siLCJhcmdzIiwiZGVmYXVsdFZhbHVlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiIsInRyYW5zaXRpb25FbGVtZW50Iiwid2FpdEZvclRyYW5zaXRpb24iLCJkdXJhdGlvblBhZGRpbmciLCJlbXVsYXRlZER1cmF0aW9uIiwiY2FsbGVkIiwiaGFuZGxlciIsIl9yZWY2IiwidGFyZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJnZXROZXh0QWN0aXZlRWxlbWVudCIsImxpc3QiLCJhY3RpdmVFbGVtZW50Iiwic2hvdWxkR2V0TmV4dCIsImlzQ3ljbGVBbGxvd2VkIiwibGlzdExlbmd0aCIsImluZGV4IiwiaW5kZXhPZiIsIm1heCIsIm1pbiIsIm5hbWVzcGFjZVJlZ2V4Iiwic3RyaXBOYW1lUmVnZXgiLCJzdHJpcFVpZFJlZ2V4IiwiZXZlbnRSZWdpc3RyeSIsInVpZEV2ZW50IiwiY3VzdG9tRXZlbnRzIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJuYXRpdmVFdmVudHMiLCJTZXQiLCJtYWtlRXZlbnRVaWQiLCJ1aWQiLCJnZXRFbGVtZW50RXZlbnRzIiwiYm9vdHN0cmFwSGFuZGxlciIsImV2ZW50IiwiaHlkcmF0ZU9iaiIsImRlbGVnYXRlVGFyZ2V0Iiwib25lT2ZmIiwiRXZlbnRIYW5kbGVyIiwib2ZmIiwidHlwZSIsImJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyIiwiZG9tRWxlbWVudHMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiZG9tRWxlbWVudCIsImVyciIsImUiLCJmIiwiZmluZEhhbmRsZXIiLCJldmVudHMiLCJjYWxsYWJsZSIsImRlbGVnYXRpb25TZWxlY3RvciIsInZhbHVlcyIsImZpbmQiLCJub3JtYWxpemVQYXJhbWV0ZXJzIiwib3JpZ2luYWxUeXBlRXZlbnQiLCJkZWxlZ2F0aW9uRnVuY3Rpb24iLCJpc0RlbGVnYXRlZCIsInR5cGVFdmVudCIsImdldFR5cGVFdmVudCIsImhhcyIsImFkZEhhbmRsZXIiLCJfbm9ybWFsaXplUGFyYW1ldGVycyIsIl9ub3JtYWxpemVQYXJhbWV0ZXJzMiIsIl9zbGljZWRUb0FycmF5Iiwid3JhcEZ1bmN0aW9uIiwicmVsYXRlZFRhcmdldCIsImhhbmRsZXJzIiwicHJldmlvdXNGdW5jdGlvbiIsInJlbW92ZUhhbmRsZXIiLCJCb29sZWFuIiwicmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzIiwibmFtZXNwYWNlIiwic3RvcmVFbGVtZW50RXZlbnQiLCJfaTMiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiaGFuZGxlcktleSIsImluY2x1ZGVzIiwib24iLCJvbmUiLCJfbm9ybWFsaXplUGFyYW1ldGVyczMiLCJfbm9ybWFsaXplUGFyYW1ldGVyczQiLCJpbk5hbWVzcGFjZSIsImlzTmFtZXNwYWNlIiwic3RhcnRzV2l0aCIsImtleXMiLCJfaTQiLCJfT2JqZWN0JGtleXMiLCJlbGVtZW50RXZlbnQiLCJzbGljZSIsIl9pNSIsIl9PYmplY3QkZW50cmllczIiLCJfT2JqZWN0JGVudHJpZXMyJF9pIiwia2V5SGFuZGxlcnMiLCJ0cmlnZ2VyIiwialF1ZXJ5RXZlbnQiLCJidWJibGVzIiwibmF0aXZlRGlzcGF0Y2giLCJkZWZhdWx0UHJldmVudGVkIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCIsImlzRGVmYXVsdFByZXZlbnRlZCIsImV2dCIsImNhbmNlbGFibGUiLCJwcmV2ZW50RGVmYXVsdCIsIm9iaiIsIm1ldGEiLCJfbG9vcDIiLCJfT2JqZWN0JGVudHJpZXMzJF9pIiwiX09iamVjdCRlbnRyaWVzMyIsIl9pNiIsIl91bnVzZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImdldCIsImVsZW1lbnRNYXAiLCJNYXAiLCJEYXRhIiwic2V0IiwiaW5zdGFuY2UiLCJpbnN0YW5jZU1hcCIsInNpemUiLCJjb25zb2xlIiwiZXJyb3IiLCJBcnJheSIsImZyb20iLCJyZW1vdmUiLCJub3JtYWxpemVEYXRhIiwiSlNPTiIsInBhcnNlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwibm9ybWFsaXplRGF0YUtleSIsImNociIsIk1hbmlwdWxhdG9yIiwic2V0RGF0YUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZURhdGFBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJnZXREYXRhQXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJic0tleXMiLCJkYXRhc2V0IiwiZmlsdGVyIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInB1cmVLZXkiLCJjaGFyQXQiLCJnZXREYXRhQXR0cmlidXRlIiwiQ29uZmlnIiwiX2dldENvbmZpZyIsImNvbmZpZyIsIl9tZXJnZUNvbmZpZ09iaiIsIl9jb25maWdBZnRlck1lcmdlIiwiX3R5cGVDaGVja0NvbmZpZyIsImpzb25Db25maWciLCJfb2JqZWN0U3ByZWFkIiwiY29uc3RydWN0b3IiLCJEZWZhdWx0IiwiY29uZmlnVHlwZXMiLCJEZWZhdWx0VHlwZSIsIl9pNyIsIl9PYmplY3QkZW50cmllczQiLCJfT2JqZWN0JGVudHJpZXM0JF9pIiwicHJvcGVydHkiLCJleHBlY3RlZFR5cGVzIiwidmFsdWVUeXBlIiwiUmVnRXhwIiwidGVzdCIsIlR5cGVFcnJvciIsInRvVXBwZXJDYXNlIiwiRXJyb3IiLCJWRVJTSU9OIiwiQmFzZUNvbXBvbmVudCIsIl9Db25maWciLCJfdGhpcyIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2VsZW1lbnQiLCJfY29uZmlnIiwiREFUQV9LRVkiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiZGlzcG9zZSIsIkVWRU5UX0tFWSIsIl9pdGVyYXRvcjMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiX3N0ZXAzIiwicHJvcGVydHlOYW1lIiwiX3F1ZXVlQ2FsbGJhY2siLCJpc0FuaW1hdGVkIiwiZ2V0SW5zdGFuY2UiLCJnZXRPckNyZWF0ZUluc3RhbmNlIiwiZXZlbnROYW1lIiwiZ2V0U2VsZWN0b3IiLCJocmVmQXR0cmlidXRlIiwidHJpbSIsIlNlbGVjdG9yRW5naW5lIiwiX3JlZjciLCJFbGVtZW50IiwiZmluZE9uZSIsImNoaWxkcmVuIiwiX3JlZjgiLCJjaGlsZCIsIm1hdGNoZXMiLCJwYXJlbnRzIiwiYW5jZXN0b3IiLCJwcmV2IiwicHJldmlvdXMiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsImZvY3VzYWJsZUNoaWxkcmVuIiwiZm9jdXNhYmxlcyIsIm1hcCIsImpvaW4iLCJlbCIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJnZXRFbGVtZW50RnJvbVNlbGVjdG9yIiwiZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3RvciIsImVuYWJsZURpc21pc3NUcmlnZ2VyIiwiY29tcG9uZW50IiwibWV0aG9kIiwiY2xpY2tFdmVudCIsInRhZ05hbWUiLCJOQU1FJGYiLCJEQVRBX0tFWSRhIiwiRVZFTlRfS0VZJGIiLCJFVkVOVF9DTE9TRSIsIkVWRU5UX0NMT1NFRCIsIkNMQVNTX05BTUVfRkFERSQ1IiwiQ0xBU1NfTkFNRV9TSE9XJDgiLCJBbGVydCIsIl9CYXNlQ29tcG9uZW50IiwiX3N1cGVyMiIsImNsb3NlIiwiX3RoaXMyIiwiY2xvc2VFdmVudCIsIl9kZXN0cm95RWxlbWVudCIsImVhY2giLCJkYXRhIiwiTkFNRSRlIiwiREFUQV9LRVkkOSIsIkVWRU5UX0tFWSRhIiwiREFUQV9BUElfS0VZJDYiLCJDTEFTU19OQU1FX0FDVElWRSQzIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUkNSIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJJDYiLCJCdXR0b24iLCJfQmFzZUNvbXBvbmVudDIiLCJfc3VwZXIzIiwidG9nZ2xlIiwiYnV0dG9uIiwiTkFNRSRkIiwiRVZFTlRfS0VZJDkiLCJFVkVOVF9UT1VDSFNUQVJUIiwiRVZFTlRfVE9VQ0hNT1ZFIiwiRVZFTlRfVE9VQ0hFTkQiLCJFVkVOVF9QT0lOVEVSRE9XTiIsIkVWRU5UX1BPSU5URVJVUCIsIlBPSU5URVJfVFlQRV9UT1VDSCIsIlBPSU5URVJfVFlQRV9QRU4iLCJDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQiLCJTV0lQRV9USFJFU0hPTEQiLCJEZWZhdWx0JGMiLCJlbmRDYWxsYmFjayIsImxlZnRDYWxsYmFjayIsInJpZ2h0Q2FsbGJhY2siLCJEZWZhdWx0VHlwZSRjIiwiU3dpcGUiLCJfQ29uZmlnMiIsIl9zdXBlcjQiLCJfdGhpczMiLCJpc1N1cHBvcnRlZCIsIl9kZWx0YVgiLCJfc3VwcG9ydFBvaW50ZXJFdmVudHMiLCJQb2ludGVyRXZlbnQiLCJfaW5pdEV2ZW50cyIsIl9zdGFydCIsInRvdWNoZXMiLCJjbGllbnRYIiwiX2V2ZW50SXNQb2ludGVyUGVuVG91Y2giLCJfZW5kIiwiX2hhbmRsZVN3aXBlIiwiX21vdmUiLCJhYnNEZWx0YVgiLCJhYnMiLCJkaXJlY3Rpb24iLCJfdGhpczQiLCJhZGQiLCJwb2ludGVyVHlwZSIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwiTkFNRSRjIiwiREFUQV9LRVkkOCIsIkVWRU5UX0tFWSQ4IiwiREFUQV9BUElfS0VZJDUiLCJBUlJPV19MRUZUX0tFWSQxIiwiQVJST1dfUklHSFRfS0VZJDEiLCJUT1VDSEVWRU5UX0NPTVBBVF9XQUlUIiwiT1JERVJfTkVYVCIsIk9SREVSX1BSRVYiLCJESVJFQ1RJT05fTEVGVCIsIkRJUkVDVElPTl9SSUdIVCIsIkVWRU5UX1NMSURFIiwiRVZFTlRfU0xJRCIsIkVWRU5UX0tFWURPV04kMSIsIkVWRU5UX01PVVNFRU5URVIkMSIsIkVWRU5UX01PVVNFTEVBVkUkMSIsIkVWRU5UX0RSQUdfU1RBUlQiLCJFVkVOVF9MT0FEX0RBVEFfQVBJJDMiLCJFVkVOVF9DTElDS19EQVRBX0FQSSQ1IiwiQ0xBU1NfTkFNRV9DQVJPVVNFTCIsIkNMQVNTX05BTUVfQUNUSVZFJDIiLCJDTEFTU19OQU1FX1NMSURFIiwiQ0xBU1NfTkFNRV9FTkQiLCJDTEFTU19OQU1FX1NUQVJUIiwiQ0xBU1NfTkFNRV9ORVhUIiwiQ0xBU1NfTkFNRV9QUkVWIiwiU0VMRUNUT1JfQUNUSVZFIiwiU0VMRUNUT1JfSVRFTSIsIlNFTEVDVE9SX0FDVElWRV9JVEVNIiwiU0VMRUNUT1JfSVRFTV9JTUciLCJTRUxFQ1RPUl9JTkRJQ0FUT1JTIiwiU0VMRUNUT1JfREFUQV9TTElERSIsIlNFTEVDVE9SX0RBVEFfUklERSIsIktFWV9UT19ESVJFQ1RJT04iLCJfZGVmaW5lUHJvcGVydHkiLCJEZWZhdWx0JGIiLCJpbnRlcnZhbCIsImtleWJvYXJkIiwicGF1c2UiLCJyaWRlIiwidG91Y2giLCJ3cmFwIiwiRGVmYXVsdFR5cGUkYiIsIkNhcm91c2VsIiwiX0Jhc2VDb21wb25lbnQzIiwiX3N1cGVyNSIsIl90aGlzNSIsIl9pbnRlcnZhbCIsIl9hY3RpdmVFbGVtZW50IiwiX2lzU2xpZGluZyIsInRvdWNoVGltZW91dCIsIl9zd2lwZUhlbHBlciIsIl9pbmRpY2F0b3JzRWxlbWVudCIsIl9hZGRFdmVudExpc3RlbmVycyIsImN5Y2xlIiwiX3NsaWRlIiwibmV4dFdoZW5WaXNpYmxlIiwiaGlkZGVuIiwiX2NsZWFySW50ZXJ2YWwiLCJfdGhpczYiLCJfdXBkYXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIl9tYXliZUVuYWJsZUN5Y2xlIiwiX3RoaXM3IiwidG8iLCJfdGhpczgiLCJpdGVtcyIsIl9nZXRJdGVtcyIsImFjdGl2ZUluZGV4IiwiX2dldEl0ZW1JbmRleCIsIl9nZXRBY3RpdmUiLCJvcmRlciIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJkZWZhdWx0SW50ZXJ2YWwiLCJfdGhpczkiLCJfa2V5ZG93biIsIl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzIiwiX3RoaXMxMCIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJpbWciLCJlbmRDYWxsQmFjayIsImNsZWFyVGltZW91dCIsInN3aXBlQ29uZmlnIiwiX2RpcmVjdGlvblRvT3JkZXIiLCJfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudCIsImFjdGl2ZUluZGljYXRvciIsIm5ld0FjdGl2ZUluZGljYXRvciIsImVsZW1lbnRJbnRlcnZhbCIsInBhcnNlSW50IiwiX3RoaXMxMSIsImlzTmV4dCIsIm5leHRFbGVtZW50IiwibmV4dEVsZW1lbnRJbmRleCIsInRyaWdnZXJFdmVudCIsIl9vcmRlclRvRGlyZWN0aW9uIiwic2xpZGVFdmVudCIsImlzQ3ljbGluZyIsImRpcmVjdGlvbmFsQ2xhc3NOYW1lIiwib3JkZXJDbGFzc05hbWUiLCJjb21wbGV0ZUNhbGxCYWNrIiwiX2lzQW5pbWF0ZWQiLCJjbGVhckludGVydmFsIiwiY2Fyb3VzZWwiLCJzbGlkZUluZGV4IiwiY2Fyb3VzZWxzIiwiX2l0ZXJhdG9yNSIsIl9zdGVwNSIsIk5BTUUkYiIsIkRBVEFfS0VZJDciLCJFVkVOVF9LRVkkNyIsIkRBVEFfQVBJX0tFWSQ0IiwiRVZFTlRfU0hPVyQ2IiwiRVZFTlRfU0hPV04kNiIsIkVWRU5UX0hJREUkNiIsIkVWRU5UX0hJRERFTiQ2IiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNCIsIkNMQVNTX05BTUVfU0hPVyQ3IiwiQ0xBU1NfTkFNRV9DT0xMQVBTRSIsIkNMQVNTX05BTUVfQ09MTEFQU0lORyIsIkNMQVNTX05BTUVfQ09MTEFQU0VEIiwiQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4iLCJDTEFTU19OQU1FX0hPUklaT05UQUwiLCJXSURUSCIsIkhFSUdIVCIsIlNFTEVDVE9SX0FDVElWRVMiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0IiwiRGVmYXVsdCRhIiwicGFyZW50IiwiRGVmYXVsdFR5cGUkYSIsIkNvbGxhcHNlIiwiX0Jhc2VDb21wb25lbnQ0IiwiX3N1cGVyNiIsIl90aGlzMTIiLCJfaXNUcmFuc2l0aW9uaW5nIiwiX3RyaWdnZXJBcnJheSIsInRvZ2dsZUxpc3QiLCJfaXRlcmF0b3I2IiwiX3N0ZXA2IiwiZWxlbSIsImZpbHRlckVsZW1lbnQiLCJmb3VuZEVsZW1lbnQiLCJfaW5pdGlhbGl6ZUNoaWxkcmVuIiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsIl9pc1Nob3duIiwiaGlkZSIsInNob3ciLCJfdGhpczEzIiwiYWN0aXZlQ2hpbGRyZW4iLCJfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuIiwic3RhcnRFdmVudCIsIl9pdGVyYXRvcjciLCJfc3RlcDciLCJhY3RpdmVJbnN0YW5jZSIsImRpbWVuc2lvbiIsIl9nZXREaW1lbnNpb24iLCJjb21wbGV0ZSIsImNhcGl0YWxpemVkRGltZW5zaW9uIiwic2Nyb2xsU2l6ZSIsIl90aGlzMTQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJfaXRlcmF0b3I4IiwiX3N0ZXA4IiwiX2l0ZXJhdG9yOSIsIl9zdGVwOSIsInNlbGVjdGVkIiwidHJpZ2dlckFycmF5IiwiaXNPcGVuIiwiX2l0ZXJhdG9yMTAiLCJfc3RlcDEwIiwiX2l0ZXJhdG9yMTEiLCJfc3RlcDExIiwidG9wIiwicmlnaHQiLCJhdXRvIiwiYmFzZVBsYWNlbWVudHMiLCJzdGFydCIsImVuZCIsImNsaXBwaW5nUGFyZW50cyIsInZpZXdwb3J0IiwicG9wcGVyIiwicmVmZXJlbmNlIiwidmFyaWF0aW9uUGxhY2VtZW50cyIsInJlZHVjZSIsImFjYyIsInBsYWNlbWVudCIsInBsYWNlbWVudHMiLCJiZWZvcmVSZWFkIiwicmVhZCIsImFmdGVyUmVhZCIsImJlZm9yZU1haW4iLCJtYWluIiwiYWZ0ZXJNYWluIiwiYmVmb3JlV3JpdGUiLCJ3cml0ZSIsImFmdGVyV3JpdGUiLCJtb2RpZmllclBoYXNlcyIsImdldE5vZGVOYW1lIiwibm9kZU5hbWUiLCJnZXRXaW5kb3ciLCJub2RlIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiaXNFbGVtZW50IiwiT3duRWxlbWVudCIsImlzSFRNTEVsZW1lbnQiLCJIVE1MRWxlbWVudCIsImlzU2hhZG93Um9vdCIsImFwcGx5U3R5bGVzIiwiX3JlZiIsInN0YXRlIiwiZWxlbWVudHMiLCJzdHlsZXMiLCJhc3NpZ24iLCJlZmZlY3QkMiIsIl9yZWYyIiwiaW5pdGlhbFN0eWxlcyIsInBvc2l0aW9uIiwib3B0aW9ucyIsInN0cmF0ZWd5IiwibWFyZ2luIiwiYXJyb3ciLCJzdHlsZVByb3BlcnRpZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImF0dHJpYnV0ZSIsImFwcGx5U3R5bGVzJDEiLCJlbmFibGVkIiwicGhhc2UiLCJlZmZlY3QiLCJyZXF1aXJlcyIsImdldEJhc2VQbGFjZW1lbnQiLCJyb3VuZCIsImdldFVBU3RyaW5nIiwidWFEYXRhIiwidXNlckFnZW50RGF0YSIsImJyYW5kcyIsIml0ZW0iLCJicmFuZCIsInZlcnNpb24iLCJ1c2VyQWdlbnQiLCJpc0xheW91dFZpZXdwb3J0IiwiaW5jbHVkZVNjYWxlIiwiaXNGaXhlZFN0cmF0ZWd5IiwiY2xpZW50UmVjdCIsInNjYWxlWCIsInNjYWxlWSIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJ2aXN1YWxWaWV3cG9ydCIsImFkZFZpc3VhbE9mZnNldHMiLCJ4Iiwib2Zmc2V0TGVmdCIsInkiLCJvZmZzZXRUb3AiLCJnZXRMYXlvdXRSZWN0Iiwicm9vdE5vZGUiLCJpc1NhbWVOb2RlIiwiaG9zdCIsImdldENvbXB1dGVkU3R5bGUkMSIsImlzVGFibGVFbGVtZW50IiwiZ2V0RG9jdW1lbnRFbGVtZW50IiwiZ2V0UGFyZW50Tm9kZSIsImFzc2lnbmVkU2xvdCIsImdldFRydWVPZmZzZXRQYXJlbnQiLCJvZmZzZXRQYXJlbnQiLCJnZXRDb250YWluaW5nQmxvY2siLCJpc0ZpcmVmb3giLCJpc0lFIiwiZWxlbWVudENzcyIsImN1cnJlbnROb2RlIiwiY3NzIiwicGVyc3BlY3RpdmUiLCJjb250YWluIiwid2lsbENoYW5nZSIsImdldE9mZnNldFBhcmVudCIsImdldE1haW5BeGlzRnJvbVBsYWNlbWVudCIsIndpdGhpbiIsIm1pbiQxIiwibWF4JDEiLCJ3aXRoaW5NYXhDbGFtcCIsInYiLCJnZXRGcmVzaFNpZGVPYmplY3QiLCJtZXJnZVBhZGRpbmdPYmplY3QiLCJwYWRkaW5nT2JqZWN0IiwiZXhwYW5kVG9IYXNoTWFwIiwiaGFzaE1hcCIsInRvUGFkZGluZ09iamVjdCIsInBhZGRpbmciLCJyZWN0cyIsIl9zdGF0ZSRtb2RpZmllcnNEYXRhJCIsImFycm93RWxlbWVudCIsInBvcHBlck9mZnNldHMiLCJtb2RpZmllcnNEYXRhIiwiYmFzZVBsYWNlbWVudCIsImF4aXMiLCJpc1ZlcnRpY2FsIiwibGVuIiwiYXJyb3dSZWN0IiwibWluUHJvcCIsIm1heFByb3AiLCJlbmREaWZmIiwic3RhcnREaWZmIiwiYXJyb3dPZmZzZXRQYXJlbnQiLCJjbGllbnRTaXplIiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJjZW50ZXJUb1JlZmVyZW5jZSIsImNlbnRlciIsIm9mZnNldCIsImF4aXNQcm9wIiwiY2VudGVyT2Zmc2V0IiwiZWZmZWN0JDEiLCJfb3B0aW9ucyRlbGVtZW50IiwiYXJyb3ckMSIsInJlcXVpcmVzSWZFeGlzdHMiLCJnZXRWYXJpYXRpb24iLCJ1bnNldFNpZGVzIiwicm91bmRPZmZzZXRzQnlEUFIiLCJ3aW4iLCJkcHIiLCJkZXZpY2VQaXhlbFJhdGlvIiwibWFwVG9TdHlsZXMiLCJfT2JqZWN0JGFzc2lnbjIiLCJwb3BwZXJSZWN0IiwidmFyaWF0aW9uIiwib2Zmc2V0cyIsImdwdUFjY2VsZXJhdGlvbiIsImFkYXB0aXZlIiwicm91bmRPZmZzZXRzIiwiaXNGaXhlZCIsIl9vZmZzZXRzJHgiLCJfb2Zmc2V0cyR5IiwiX3JlZjMiLCJoYXNYIiwiaGFzWSIsInNpZGVYIiwic2lkZVkiLCJoZWlnaHRQcm9wIiwid2lkdGhQcm9wIiwib2Zmc2V0WSIsIm9mZnNldFgiLCJjb21tb25TdHlsZXMiLCJfcmVmNCIsIl9PYmplY3QkYXNzaWduIiwiY29tcHV0ZVN0eWxlcyIsIl9yZWY1IiwiX29wdGlvbnMkZ3B1QWNjZWxlcmF0IiwiX29wdGlvbnMkYWRhcHRpdmUiLCJfb3B0aW9ucyRyb3VuZE9mZnNldHMiLCJjb21wdXRlU3R5bGVzJDEiLCJwYXNzaXZlIiwiX29wdGlvbnMkc2Nyb2xsIiwic2Nyb2xsIiwiX29wdGlvbnMkcmVzaXplIiwicmVzaXplIiwic2Nyb2xsUGFyZW50cyIsInNjcm9sbFBhcmVudCIsInVwZGF0ZSIsImV2ZW50TGlzdGVuZXJzIiwiaGFzaCQxIiwiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCJtYXRjaGVkIiwiaGFzaCIsImdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IiwiZ2V0V2luZG93U2Nyb2xsIiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJnZXRXaW5kb3dTY3JvbGxCYXJYIiwiZ2V0Vmlld3BvcnRSZWN0IiwiaHRtbCIsImxheW91dFZpZXdwb3J0IiwiZ2V0RG9jdW1lbnRSZWN0IiwiX2VsZW1lbnQkb3duZXJEb2N1bWVuIiwid2luU2Nyb2xsIiwic2Nyb2xsV2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJpc1Njcm9sbFBhcmVudCIsIl9nZXRDb21wdXRlZFN0eWxlIiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJnZXRTY3JvbGxQYXJlbnQiLCJsaXN0U2Nyb2xsUGFyZW50cyIsImlzQm9keSIsInVwZGF0ZWRMaXN0IiwicmVjdFRvQ2xpZW50UmVjdCIsInJlY3QiLCJnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZSIsImNsaXBwaW5nUGFyZW50IiwiZ2V0Q2xpcHBpbmdQYXJlbnRzIiwiY2FuRXNjYXBlQ2xpcHBpbmciLCJjbGlwcGVyRWxlbWVudCIsImdldENsaXBwaW5nUmVjdCIsImJvdW5kYXJ5Iiwicm9vdEJvdW5kYXJ5IiwibWFpbkNsaXBwaW5nUGFyZW50cyIsImZpcnN0Q2xpcHBpbmdQYXJlbnQiLCJjbGlwcGluZ1JlY3QiLCJhY2NSZWN0IiwiY29tcHV0ZU9mZnNldHMiLCJjb21tb25YIiwiY29tbW9uWSIsIm1haW5BeGlzIiwiZGV0ZWN0T3ZlcmZsb3ciLCJfb3B0aW9ucyIsIl9vcHRpb25zJHBsYWNlbWVudCIsIl9vcHRpb25zJHN0cmF0ZWd5IiwiX29wdGlvbnMkYm91bmRhcnkiLCJfb3B0aW9ucyRyb290Qm91bmRhcnkiLCJfb3B0aW9ucyRlbGVtZW50Q29udGUiLCJlbGVtZW50Q29udGV4dCIsIl9vcHRpb25zJGFsdEJvdW5kYXJ5IiwiYWx0Qm91bmRhcnkiLCJfb3B0aW9ucyRwYWRkaW5nIiwiYWx0Q29udGV4dCIsImNsaXBwaW5nQ2xpZW50UmVjdCIsImNvbnRleHRFbGVtZW50IiwicmVmZXJlbmNlQ2xpZW50UmVjdCIsInBvcHBlckNsaWVudFJlY3QiLCJlbGVtZW50Q2xpZW50UmVjdCIsIm92ZXJmbG93T2Zmc2V0cyIsIm9mZnNldERhdGEiLCJtdWx0aXBseSIsImNvbXB1dGVBdXRvUGxhY2VtZW50IiwiZmxpcFZhcmlhdGlvbnMiLCJfb3B0aW9ucyRhbGxvd2VkQXV0b1AiLCJhbGxvd2VkQXV0b1BsYWNlbWVudHMiLCJwbGFjZW1lbnRzJDEiLCJhbGxvd2VkUGxhY2VtZW50cyIsIm92ZXJmbG93cyIsInNvcnQiLCJhIiwiYiIsImdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzIiwib3Bwb3NpdGVQbGFjZW1lbnQiLCJmbGlwIiwiX3NraXAiLCJfb3B0aW9ucyRtYWluQXhpcyIsImNoZWNrTWFpbkF4aXMiLCJfb3B0aW9ucyRhbHRBeGlzIiwiYWx0QXhpcyIsImNoZWNrQWx0QXhpcyIsInNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyIsImZhbGxiYWNrUGxhY2VtZW50cyIsIl9vcHRpb25zJGZsaXBWYXJpYXRpbyIsInByZWZlcnJlZFBsYWNlbWVudCIsImlzQmFzZVBsYWNlbWVudCIsInJlZmVyZW5jZVJlY3QiLCJjaGVja3NNYXAiLCJtYWtlRmFsbGJhY2tDaGVja3MiLCJmaXJzdEZpdHRpbmdQbGFjZW1lbnQiLCJpIiwiX2Jhc2VQbGFjZW1lbnQiLCJpc1N0YXJ0VmFyaWF0aW9uIiwibWFpblZhcmlhdGlvblNpZGUiLCJhbHRWYXJpYXRpb25TaWRlIiwiY2hlY2tzIiwiZXZlcnkiLCJjaGVjayIsIm51bWJlck9mQ2hlY2tzIiwiX2xvb3AiLCJfaSIsImZpdHRpbmdQbGFjZW1lbnQiLCJfcmV0IiwicmVzZXQiLCJmbGlwJDEiLCJnZXRTaWRlT2Zmc2V0cyIsInByZXZlbnRlZE9mZnNldHMiLCJpc0FueVNpZGVGdWxseUNsaXBwZWQiLCJzb21lIiwic2lkZSIsInByZXZlbnRPdmVyZmxvdyIsInJlZmVyZW5jZU92ZXJmbG93IiwicG9wcGVyQWx0T3ZlcmZsb3ciLCJyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMiLCJwb3BwZXJFc2NhcGVPZmZzZXRzIiwiaXNSZWZlcmVuY2VIaWRkZW4iLCJoYXNQb3BwZXJFc2NhcGVkIiwiaGlkZSQxIiwiZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkiLCJpbnZlcnREaXN0YW5jZSIsInNraWRkaW5nIiwiZGlzdGFuY2UiLCJfb3B0aW9ucyRvZmZzZXQiLCJfZGF0YSRzdGF0ZSRwbGFjZW1lbnQiLCJvZmZzZXQkMSIsInBvcHBlck9mZnNldHMkMSIsImdldEFsdEF4aXMiLCJfb3B0aW9ucyR0ZXRoZXIiLCJ0ZXRoZXIiLCJfb3B0aW9ucyR0ZXRoZXJPZmZzZXQiLCJ0ZXRoZXJPZmZzZXQiLCJ0ZXRoZXJPZmZzZXRWYWx1ZSIsIm5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZSIsIm9mZnNldE1vZGlmaWVyU3RhdGUiLCJfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQiLCJtYWluU2lkZSIsImFsdFNpZGUiLCJhZGRpdGl2ZSIsIm1pbkxlbiIsIm1heExlbiIsImFycm93UGFkZGluZ09iamVjdCIsImFycm93UGFkZGluZ01pbiIsImFycm93UGFkZGluZ01heCIsImFycm93TGVuIiwibWluT2Zmc2V0IiwibWF4T2Zmc2V0IiwiY2xpZW50T2Zmc2V0Iiwib2Zmc2V0TW9kaWZpZXJWYWx1ZSIsInRldGhlck1pbiIsInRldGhlck1heCIsInByZXZlbnRlZE9mZnNldCIsIl9vZmZzZXRNb2RpZmllclN0YXRlJDIiLCJfbWFpblNpZGUiLCJfYWx0U2lkZSIsIl9vZmZzZXQiLCJfbGVuIiwiX21pbiIsIl9tYXgiLCJpc09yaWdpblNpZGUiLCJfb2Zmc2V0TW9kaWZpZXJWYWx1ZSIsIl90ZXRoZXJNaW4iLCJfdGV0aGVyTWF4IiwiX3ByZXZlbnRlZE9mZnNldCIsInByZXZlbnRPdmVyZmxvdyQxIiwiZ2V0SFRNTEVsZW1lbnRTY3JvbGwiLCJnZXROb2RlU2Nyb2xsIiwiaXNFbGVtZW50U2NhbGVkIiwiZ2V0Q29tcG9zaXRlUmVjdCIsImVsZW1lbnRPclZpcnR1YWxFbGVtZW50IiwiaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQiLCJvZmZzZXRQYXJlbnRJc1NjYWxlZCIsIm1vZGlmaWVycyIsInZpc2l0ZWQiLCJyZXN1bHQiLCJtb2RpZmllciIsImRlcCIsImRlcE1vZGlmaWVyIiwib3JkZXJNb2RpZmllcnMiLCJvcmRlcmVkTW9kaWZpZXJzIiwiZGVib3VuY2UiLCJwZW5kaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwibWVyZ2VCeU5hbWUiLCJtZXJnZWQiLCJjdXJyZW50IiwiZXhpc3RpbmciLCJERUZBVUxUX09QVElPTlMiLCJhcmVWYWxpZEVsZW1lbnRzIiwiX2tleSIsInBvcHBlckdlbmVyYXRvciIsImdlbmVyYXRvck9wdGlvbnMiLCJfZ2VuZXJhdG9yT3B0aW9ucyIsIl9nZW5lcmF0b3JPcHRpb25zJGRlZiIsImRlZmF1bHRNb2RpZmllcnMiLCJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyIiwiZGVmYXVsdE9wdGlvbnMiLCJjcmVhdGVQb3BwZXIiLCJlZmZlY3RDbGVhbnVwRm5zIiwiaXNEZXN0cm95ZWQiLCJzZXRPcHRpb25zIiwic2V0T3B0aW9uc0FjdGlvbiIsImNsZWFudXBNb2RpZmllckVmZmVjdHMiLCJtIiwicnVuTW9kaWZpZXJFZmZlY3RzIiwiZm9yY2VVcGRhdGUiLCJfc3RhdGUkZWxlbWVudHMiLCJfc3RhdGUkb3JkZXJlZE1vZGlmaWUiLCJfc3RhdGUkb3JkZXJlZE1vZGlmaWUyIiwiZGVzdHJveSIsIm9uRmlyc3RVcGRhdGUiLCJfcmVmMyRvcHRpb25zIiwiY2xlYW51cEZuIiwibm9vcEZuIiwiY3JlYXRlUG9wcGVyJDIiLCJkZWZhdWx0TW9kaWZpZXJzJDEiLCJjcmVhdGVQb3BwZXIkMSIsIlBvcHBlciIsImZyZWV6ZSIsIl9fcHJvdG9fXyIsImNyZWF0ZVBvcHBlckJhc2UiLCJjcmVhdGVQb3BwZXJMaXRlIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJOQU1FJGEiLCJEQVRBX0tFWSQ2IiwiRVZFTlRfS0VZJDYiLCJEQVRBX0FQSV9LRVkkMyIsIkVTQ0FQRV9LRVkkMiIsIlRBQl9LRVkkMSIsIkFSUk9XX1VQX0tFWSQxIiwiQVJST1dfRE9XTl9LRVkkMSIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIkVWRU5UX0hJREUkNSIsIkVWRU5UX0hJRERFTiQ1IiwiRVZFTlRfU0hPVyQ1IiwiRVZFTlRfU0hPV04kNSIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJJDMiLCJFVkVOVF9LRVlET1dOX0RBVEFfQVBJIiwiRVZFTlRfS0VZVVBfREFUQV9BUEkiLCJDTEFTU19OQU1FX1NIT1ckNiIsIkNMQVNTX05BTUVfRFJPUFVQIiwiQ0xBU1NfTkFNRV9EUk9QRU5EIiwiQ0xBU1NfTkFNRV9EUk9QU1RBUlQiLCJDTEFTU19OQU1FX0RST1BVUF9DRU5URVIiLCJDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUiIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFJDMiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTiIsIlNFTEVDVE9SX01FTlUiLCJTRUxFQ1RPUl9OQVZCQVIiLCJTRUxFQ1RPUl9OQVZCQVJfTkFWIiwiU0VMRUNUT1JfVklTSUJMRV9JVEVNUyIsIlBMQUNFTUVOVF9UT1AiLCJQTEFDRU1FTlRfVE9QRU5EIiwiUExBQ0VNRU5UX0JPVFRPTSIsIlBMQUNFTUVOVF9CT1RUT01FTkQiLCJQTEFDRU1FTlRfUklHSFQiLCJQTEFDRU1FTlRfTEVGVCIsIlBMQUNFTUVOVF9UT1BDRU5URVIiLCJQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSIiwiRGVmYXVsdCQ5IiwiYXV0b0Nsb3NlIiwiZGlzcGxheSIsInBvcHBlckNvbmZpZyIsIkRlZmF1bHRUeXBlJDkiLCJEcm9wZG93biIsIl9CYXNlQ29tcG9uZW50NSIsIl9zdXBlcjciLCJfdGhpczE1IiwiX3BvcHBlciIsIl9wYXJlbnQiLCJfbWVudSIsIl9pbk5hdmJhciIsIl9kZXRlY3ROYXZiYXIiLCJzaG93RXZlbnQiLCJfY3JlYXRlUG9wcGVyIiwiX3JlZjkiLCJfaXRlcmF0b3IxMiIsIl9zdGVwMTIiLCJmb2N1cyIsIl9jb21wbGV0ZUhpZGUiLCJoaWRlRXZlbnQiLCJfcmVmMTAiLCJfaXRlcmF0b3IxMyIsIl9zdGVwMTMiLCJyZWZlcmVuY2VFbGVtZW50IiwiX2dldFBvcHBlckNvbmZpZyIsIl9nZXRQbGFjZW1lbnQiLCJwYXJlbnREcm9wZG93biIsImlzRW5kIiwiX2dldE9mZnNldCIsIl90aGlzMTYiLCJwb3BwZXJEYXRhIiwiZGVmYXVsdEJzUG9wcGVyQ29uZmlnIiwiX3NlbGVjdE1lbnVJdGVtIiwiX3JlZjExIiwiY2xlYXJNZW51cyIsIm9wZW5Ub2dnbGVzIiwiX2l0ZXJhdG9yMTQiLCJfc3RlcDE0IiwiY29tcG9zZWRQYXRoIiwiaXNNZW51VGFyZ2V0IiwiZGF0YUFwaUtleWRvd25IYW5kbGVyIiwiaXNJbnB1dCIsImlzRXNjYXBlRXZlbnQiLCJpc1VwT3JEb3duRXZlbnQiLCJnZXRUb2dnbGVCdXR0b24iLCJzdG9wUHJvcGFnYXRpb24iLCJTRUxFQ1RPUl9GSVhFRF9DT05URU5UIiwiU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQiLCJQUk9QRVJUWV9QQURESU5HIiwiUFJPUEVSVFlfTUFSR0lOIiwiU2Nyb2xsQmFySGVscGVyIiwiZ2V0V2lkdGgiLCJkb2N1bWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsIl9kaXNhYmxlT3ZlckZsb3ciLCJfc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJjYWxjdWxhdGVkVmFsdWUiLCJfcmVzZXRFbGVtZW50QXR0cmlidXRlcyIsImlzT3ZlcmZsb3dpbmciLCJfc2F2ZUluaXRpYWxBdHRyaWJ1dGUiLCJzdHlsZVByb3BlcnR5IiwiX3RoaXMxNyIsInNjcm9sbGJhcldpZHRoIiwibWFuaXB1bGF0aW9uQ2FsbEJhY2siLCJzZXRQcm9wZXJ0eSIsIl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrIiwiYWN0dWFsVmFsdWUiLCJyZW1vdmVQcm9wZXJ0eSIsImNhbGxCYWNrIiwiX2l0ZXJhdG9yMTUiLCJfc3RlcDE1Iiwic2VsIiwiTkFNRSQ5IiwiQ0xBU1NfTkFNRV9GQURFJDQiLCJDTEFTU19OQU1FX1NIT1ckNSIsIkVWRU5UX01PVVNFRE9XTiIsIkRlZmF1bHQkOCIsImNsYXNzTmFtZSIsImNsaWNrQ2FsbGJhY2siLCJyb290RWxlbWVudCIsIkRlZmF1bHRUeXBlJDgiLCJCYWNrZHJvcCIsIl9Db25maWczIiwiX3N1cGVyOCIsIl90aGlzMTgiLCJfaXNBcHBlbmRlZCIsIl9hcHBlbmQiLCJfZ2V0RWxlbWVudCIsIl9lbXVsYXRlQW5pbWF0aW9uIiwiX3RoaXMxOSIsImJhY2tkcm9wIiwiY3JlYXRlRWxlbWVudCIsIl90aGlzMjAiLCJhcHBlbmQiLCJOQU1FJDgiLCJEQVRBX0tFWSQ1IiwiRVZFTlRfS0VZJDUiLCJFVkVOVF9GT0NVU0lOJDIiLCJFVkVOVF9LRVlET1dOX1RBQiIsIlRBQl9LRVkiLCJUQUJfTkFWX0ZPUldBUkQiLCJUQUJfTkFWX0JBQ0tXQVJEIiwiRGVmYXVsdCQ3IiwiYXV0b2ZvY3VzIiwidHJhcEVsZW1lbnQiLCJEZWZhdWx0VHlwZSQ3IiwiRm9jdXNUcmFwIiwiX0NvbmZpZzQiLCJfc3VwZXI5IiwiX3RoaXMyMSIsIl9pc0FjdGl2ZSIsIl9sYXN0VGFiTmF2RGlyZWN0aW9uIiwiYWN0aXZhdGUiLCJfdGhpczIyIiwiX2hhbmRsZUZvY3VzaW4iLCJfaGFuZGxlS2V5ZG93biIsImRlYWN0aXZhdGUiLCJzaGlmdEtleSIsIk5BTUUkNyIsIkRBVEFfS0VZJDQiLCJFVkVOVF9LRVkkNCIsIkRBVEFfQVBJX0tFWSQyIiwiRVNDQVBFX0tFWSQxIiwiRVZFTlRfSElERSQ0IiwiRVZFTlRfSElERV9QUkVWRU5URUQkMSIsIkVWRU5UX0hJRERFTiQ0IiwiRVZFTlRfU0hPVyQ0IiwiRVZFTlRfU0hPV04kNCIsIkVWRU5UX1JFU0laRSQxIiwiRVZFTlRfQ0xJQ0tfRElTTUlTUyIsIkVWRU5UX01PVVNFRE9XTl9ESVNNSVNTIiwiRVZFTlRfS0VZRE9XTl9ESVNNSVNTJDEiLCJFVkVOVF9DTElDS19EQVRBX0FQSSQyIiwiQ0xBU1NfTkFNRV9PUEVOIiwiQ0xBU1NfTkFNRV9GQURFJDMiLCJDTEFTU19OQU1FX1NIT1ckNCIsIkNMQVNTX05BTUVfU1RBVElDIiwiT1BFTl9TRUxFQ1RPUiQxIiwiU0VMRUNUT1JfRElBTE9HIiwiU0VMRUNUT1JfTU9EQUxfQk9EWSIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFJDIiLCJEZWZhdWx0JDYiLCJEZWZhdWx0VHlwZSQ2IiwiTW9kYWwiLCJfQmFzZUNvbXBvbmVudDYiLCJfc3VwZXIxMCIsIl90aGlzMjMiLCJfZGlhbG9nIiwiX2JhY2tkcm9wIiwiX2luaXRpYWxpemVCYWNrRHJvcCIsIl9mb2N1c3RyYXAiLCJfaW5pdGlhbGl6ZUZvY3VzVHJhcCIsIl9zY3JvbGxCYXIiLCJfdGhpczI0IiwiX2FkanVzdERpYWxvZyIsIl9zaG93RWxlbWVudCIsIl90aGlzMjUiLCJfaGlkZU1vZGFsIiwiX2k4IiwiX2FycjIiLCJodG1sRWxlbWVudCIsImhhbmRsZVVwZGF0ZSIsIl90aGlzMjYiLCJtb2RhbEJvZHkiLCJ0cmFuc2l0aW9uQ29tcGxldGUiLCJfdGhpczI3IiwiX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24iLCJldmVudDIiLCJfdGhpczI4IiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJfdGhpczI5IiwiaXNNb2RhbE92ZXJmbG93aW5nIiwiaW5pdGlhbE92ZXJmbG93WSIsImlzQm9keU92ZXJmbG93aW5nIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJfdGhpczMwIiwiYWxyZWFkeU9wZW4iLCJOQU1FJDYiLCJEQVRBX0tFWSQzIiwiRVZFTlRfS0VZJDMiLCJEQVRBX0FQSV9LRVkkMSIsIkVWRU5UX0xPQURfREFUQV9BUEkkMiIsIkVTQ0FQRV9LRVkiLCJDTEFTU19OQU1FX1NIT1ckMyIsIkNMQVNTX05BTUVfU0hPV0lORyQxIiwiQ0xBU1NfTkFNRV9ISURJTkciLCJDTEFTU19OQU1FX0JBQ0tEUk9QIiwiT1BFTl9TRUxFQ1RPUiIsIkVWRU5UX1NIT1ckMyIsIkVWRU5UX1NIT1dOJDMiLCJFVkVOVF9ISURFJDMiLCJFVkVOVF9ISURFX1BSRVZFTlRFRCIsIkVWRU5UX0hJRERFTiQzIiwiRVZFTlRfUkVTSVpFIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMSIsIkVWRU5UX0tFWURPV05fRElTTUlTUyIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFJDEiLCJEZWZhdWx0JDUiLCJEZWZhdWx0VHlwZSQ1IiwiT2ZmY2FudmFzIiwiX0Jhc2VDb21wb25lbnQ3IiwiX3N1cGVyMTEiLCJfdGhpczMxIiwiX3RoaXMzMiIsIl90aGlzMzMiLCJibHVyIiwiY29tcGxldGVDYWxsYmFjayIsIl90aGlzMzQiLCJfdGhpczM1IiwiX3RoaXMzNiIsIl9pdGVyYXRvcjE2IiwiX3N0ZXAxNiIsIl9pdGVyYXRvcjE3IiwiX3N0ZXAxNyIsInVyaUF0dHJpYnV0ZXMiLCJBUklBX0FUVFJJQlVURV9QQVRURVJOIiwiU0FGRV9VUkxfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJhbGxvd2VkQXR0cmlidXRlIiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJhdHRyaWJ1dGVOYW1lIiwibm9kZVZhbHVlIiwiYXR0cmlidXRlUmVnZXgiLCJyZWdleCIsIkRlZmF1bHRBbGxvd2xpc3QiLCJhcmVhIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImxpIiwib2wiLCJwIiwicHJlIiwic21hbGwiLCJzcGFuIiwic3ViIiwic3VwIiwic3Ryb25nIiwidSIsInVsIiwic2FuaXRpemVIdG1sIiwidW5zYWZlSHRtbCIsImFsbG93TGlzdCIsInNhbml0aXplRnVuY3Rpb24iLCJfcmVmMTIiLCJkb21QYXJzZXIiLCJET01QYXJzZXIiLCJjcmVhdGVkRG9jdW1lbnQiLCJwYXJzZUZyb21TdHJpbmciLCJfaXRlcmF0b3IxOCIsIl9zdGVwMTgiLCJfcmVmMTMiLCJlbGVtZW50TmFtZSIsImF0dHJpYnV0ZUxpc3QiLCJhbGxvd2VkQXR0cmlidXRlcyIsIl9pdGVyYXRvcjE5IiwiX3N0ZXAxOSIsImlubmVySFRNTCIsIk5BTUUkNSIsIkRlZmF1bHQkNCIsImNvbnRlbnQiLCJleHRyYUNsYXNzIiwic2FuaXRpemUiLCJzYW5pdGl6ZUZuIiwidGVtcGxhdGUiLCJEZWZhdWx0VHlwZSQ0IiwiRGVmYXVsdENvbnRlbnRUeXBlIiwiZW50cnkiLCJUZW1wbGF0ZUZhY3RvcnkiLCJfQ29uZmlnNSIsIl9zdXBlcjEyIiwiX3RoaXMzNyIsImdldENvbnRlbnQiLCJfdGhpczM4IiwiX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uIiwiaGFzQ29udGVudCIsImNoYW5nZUNvbnRlbnQiLCJfY2hlY2tDb250ZW50IiwidG9IdG1sIiwidGVtcGxhdGVXcmFwcGVyIiwiX21heWJlU2FuaXRpemUiLCJfaTkiLCJfT2JqZWN0JGVudHJpZXM1IiwiX09iamVjdCRlbnRyaWVzNSRfaSIsInRleHQiLCJfc2V0Q29udGVudCIsIl90ZW1wbGF0ZSRjbGFzc0xpc3QiLCJhcmciLCJfaTEwIiwiX09iamVjdCRlbnRyaWVzNiIsIl9PYmplY3QkZW50cmllczYkX2kiLCJ0ZW1wbGF0ZUVsZW1lbnQiLCJfcHV0RWxlbWVudEluVGVtcGxhdGUiLCJOQU1FJDQiLCJESVNBTExPV0VEX0FUVFJJQlVURVMiLCJDTEFTU19OQU1FX0ZBREUkMiIsIkNMQVNTX05BTUVfTU9EQUwiLCJDTEFTU19OQU1FX1NIT1ckMiIsIlNFTEVDVE9SX1RPT0xUSVBfSU5ORVIiLCJTRUxFQ1RPUl9NT0RBTCIsIkVWRU5UX01PREFMX0hJREUiLCJUUklHR0VSX0hPVkVSIiwiVFJJR0dFUl9GT0NVUyIsIlRSSUdHRVJfQ0xJQ0siLCJUUklHR0VSX01BTlVBTCIsIkVWRU5UX0hJREUkMiIsIkVWRU5UX0hJRERFTiQyIiwiRVZFTlRfU0hPVyQyIiwiRVZFTlRfU0hPV04kMiIsIkVWRU5UX0lOU0VSVEVEIiwiRVZFTlRfQ0xJQ0skMSIsIkVWRU5UX0ZPQ1VTSU4kMSIsIkVWRU5UX0ZPQ1VTT1VUJDEiLCJFVkVOVF9NT1VTRUVOVEVSIiwiRVZFTlRfTU9VU0VMRUFWRSIsIkF0dGFjaG1lbnRNYXAiLCJBVVRPIiwiVE9QIiwiUklHSFQiLCJCT1RUT00iLCJMRUZUIiwiRGVmYXVsdCQzIiwiYW5pbWF0aW9uIiwiY3VzdG9tQ2xhc3MiLCJkZWxheSIsInRpdGxlIiwiRGVmYXVsdFR5cGUkMyIsIlRvb2x0aXAiLCJfQmFzZUNvbXBvbmVudDgiLCJfc3VwZXIxMyIsIl90aGlzMzkiLCJfaXNFbmFibGVkIiwiX3RpbWVvdXQiLCJfaXNIb3ZlcmVkIiwiX2FjdGl2ZVRyaWdnZXIiLCJfdGVtcGxhdGVGYWN0b3J5IiwiX25ld0NvbnRlbnQiLCJ0aXAiLCJfc2V0TGlzdGVuZXJzIiwiX2ZpeFRpdGxlIiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJjbGljayIsIl9sZWF2ZSIsIl9lbnRlciIsIl9oaWRlTW9kYWxIYW5kbGVyIiwiX2Rpc3Bvc2VQb3BwZXIiLCJfdGhpczQwIiwiX2lzV2l0aENvbnRlbnQiLCJzaGFkb3dSb290IiwiaXNJblRoZURvbSIsIl9nZXRUaXBFbGVtZW50IiwiX3JlZjE0IiwiX2l0ZXJhdG9yMjAiLCJfc3RlcDIwIiwiX3RoaXM0MSIsIl9yZWYxNSIsIl9pdGVyYXRvcjIxIiwiX3N0ZXAyMSIsIl9pc1dpdGhBY3RpdmVUcmlnZ2VyIiwiX2dldFRpdGxlIiwiX2NyZWF0ZVRpcEVsZW1lbnQiLCJfZ2V0Q29udGVudEZvclRlbXBsYXRlIiwiX2dldFRlbXBsYXRlRmFjdG9yeSIsInRpcElkIiwic2V0Q29udGVudCIsIl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQiLCJfZ2V0RGVsZWdhdGVDb25maWciLCJhdHRhY2htZW50IiwiX3RoaXM0MiIsIl90aGlzNDMiLCJfdGhpczQ0IiwidHJpZ2dlcnMiLCJfaXRlcmF0b3IyMiIsIl9zdGVwMjIiLCJldmVudEluIiwiZXZlbnRPdXQiLCJfdGhpczQ1IiwiX3NldFRpbWVvdXQiLCJfdGhpczQ2IiwidGltZW91dCIsImRhdGFBdHRyaWJ1dGVzIiwiX2kxMSIsIl9PYmplY3Qka2V5czIiLCJkYXRhQXR0cmlidXRlIiwiX2kxMiIsIl9PYmplY3QkZW50cmllczciLCJfT2JqZWN0JGVudHJpZXM3JF9pIiwiTkFNRSQzIiwiU0VMRUNUT1JfVElUTEUiLCJTRUxFQ1RPUl9DT05URU5UIiwiRGVmYXVsdCQyIiwiRGVmYXVsdFR5cGUkMiIsIlBvcG92ZXIiLCJfVG9vbHRpcCIsIl9zdXBlcjE0IiwiX2dldENvbnRlbnQiLCJfcmVmMTciLCJOQU1FJDIiLCJEQVRBX0tFWSQyIiwiRVZFTlRfS0VZJDIiLCJEQVRBX0FQSV9LRVkiLCJFVkVOVF9BQ1RJVkFURSIsIkVWRU5UX0NMSUNLIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSQxIiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNIiwiQ0xBU1NfTkFNRV9BQ1RJVkUkMSIsIlNFTEVDVE9SX0RBVEFfU1BZIiwiU0VMRUNUT1JfVEFSR0VUX0xJTktTIiwiU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAiLCJTRUxFQ1RPUl9OQVZfTElOS1MiLCJTRUxFQ1RPUl9OQVZfSVRFTVMiLCJTRUxFQ1RPUl9MSVNUX0lURU1TIiwiU0VMRUNUT1JfTElOS19JVEVNUyIsIlNFTEVDVE9SX0RST1BET1dOIiwiU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFJDEiLCJEZWZhdWx0JDEiLCJyb290TWFyZ2luIiwic21vb3RoU2Nyb2xsIiwidGhyZXNob2xkIiwiRGVmYXVsdFR5cGUkMSIsIlNjcm9sbFNweSIsIl9CYXNlQ29tcG9uZW50OSIsIl9zdXBlcjE1IiwiX3RoaXM0NyIsIl90YXJnZXRMaW5rcyIsIl9vYnNlcnZhYmxlU2VjdGlvbnMiLCJfcm9vdEVsZW1lbnQiLCJfYWN0aXZlVGFyZ2V0IiwiX29ic2VydmVyIiwiX3ByZXZpb3VzU2Nyb2xsRGF0YSIsInZpc2libGVFbnRyeVRvcCIsInBhcmVudFNjcm9sbFRvcCIsInJlZnJlc2giLCJfaW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcyIsIl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCIsImRpc2Nvbm5lY3QiLCJfZ2V0TmV3T2JzZXJ2ZXIiLCJfaXRlcmF0b3IyMyIsIl9zdGVwMjMiLCJzZWN0aW9uIiwib2JzZXJ2ZSIsIl90aGlzNDgiLCJvYnNlcnZhYmxlU2VjdGlvbiIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJfdGhpczQ5IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJfb2JzZXJ2ZXJDYWxsYmFjayIsIl90aGlzNTAiLCJ0YXJnZXRFbGVtZW50IiwiX3Byb2Nlc3MiLCJ1c2VyU2Nyb2xsc0Rvd24iLCJfaXRlcmF0b3IyNCIsIl9zdGVwMjQiLCJpc0ludGVyc2VjdGluZyIsIl9jbGVhckFjdGl2ZUNsYXNzIiwiZW50cnlJc0xvd2VyVGhhblByZXZpb3VzIiwidGFyZ2V0TGlua3MiLCJfaXRlcmF0b3IyNSIsIl9zdGVwMjUiLCJhbmNob3IiLCJfYWN0aXZhdGVQYXJlbnRzIiwiX2l0ZXJhdG9yMjYiLCJfc3RlcDI2IiwibGlzdEdyb3VwIiwiX2l0ZXJhdG9yMjciLCJfc3RlcDI3IiwiYWN0aXZlTm9kZXMiLCJfaXRlcmF0b3IyOCIsIl9zdGVwMjgiLCJfaXRlcmF0b3IyOSIsIl9zdGVwMjkiLCJzcHkiLCJOQU1FJDEiLCJEQVRBX0tFWSQxIiwiRVZFTlRfS0VZJDEiLCJFVkVOVF9ISURFJDEiLCJFVkVOVF9ISURERU4kMSIsIkVWRU5UX1NIT1ckMSIsIkVWRU5UX1NIT1dOJDEiLCJFVkVOVF9DTElDS19EQVRBX0FQSSIsIkVWRU5UX0tFWURPV04iLCJFVkVOVF9MT0FEX0RBVEFfQVBJIiwiQVJST1dfTEVGVF9LRVkiLCJBUlJPV19SSUdIVF9LRVkiLCJBUlJPV19VUF9LRVkiLCJBUlJPV19ET1dOX0tFWSIsIkNMQVNTX05BTUVfQUNUSVZFIiwiQ0xBU1NfTkFNRV9GQURFJDEiLCJDTEFTU19OQU1FX1NIT1ckMSIsIkNMQVNTX0RST1BET1dOIiwiU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwiU0VMRUNUT1JfRFJPUERPV05fTUVOVSIsIk5PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUiLCJTRUxFQ1RPUl9UQUJfUEFORUwiLCJTRUxFQ1RPUl9PVVRFUiIsIlNFTEVDVE9SX0lOTkVSIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCJTRUxFQ1RPUl9JTk5FUl9FTEVNIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFIiwiVGFiIiwiX0Jhc2VDb21wb25lbnQxMCIsIl9zdXBlcjE2IiwiX3RoaXM1MSIsIl9zZXRJbml0aWFsQXR0cmlidXRlcyIsIl9nZXRDaGlsZHJlbiIsImlubmVyRWxlbSIsIl9lbGVtSXNBY3RpdmUiLCJhY3RpdmUiLCJfZ2V0QWN0aXZlRWxlbSIsIl9kZWFjdGl2YXRlIiwiX2FjdGl2YXRlIiwicmVsYXRlZEVsZW0iLCJfdGhpczUyIiwiX3RvZ2dsZURyb3BEb3duIiwiX3RoaXM1MyIsIm5leHRBY3RpdmVFbGVtZW50IiwicHJldmVudFNjcm9sbCIsIl90aGlzNTQiLCJfc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMiLCJfaXRlcmF0b3IzMCIsIl9zdGVwMzAiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkIiwiX2dldElubmVyRWxlbWVudCIsImlzQWN0aXZlIiwib3V0ZXJFbGVtIiwiX2dldE91dGVyRWxlbWVudCIsIl9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwiLCJvcGVuIiwiX2l0ZXJhdG9yMzEiLCJfc3RlcDMxIiwiRVZFTlRfTU9VU0VPVkVSIiwiRVZFTlRfTU9VU0VPVVQiLCJFVkVOVF9GT0NVU0lOIiwiRVZFTlRfRk9DVVNPVVQiLCJFVkVOVF9ISURFIiwiRVZFTlRfSElEREVOIiwiRVZFTlRfU0hPVyIsIkVWRU5UX1NIT1dOIiwiQ0xBU1NfTkFNRV9GQURFIiwiQ0xBU1NfTkFNRV9ISURFIiwiQ0xBU1NfTkFNRV9TSE9XIiwiQ0xBU1NfTkFNRV9TSE9XSU5HIiwiYXV0b2hpZGUiLCJUb2FzdCIsIl9CYXNlQ29tcG9uZW50MTEiLCJfc3VwZXIxNyIsIl90aGlzNTUiLCJfaGFzTW91c2VJbnRlcmFjdGlvbiIsIl9oYXNLZXlib2FyZEludGVyYWN0aW9uIiwiX3RoaXM1NiIsIl9jbGVhclRpbWVvdXQiLCJfbWF5YmVTY2hlZHVsZUhpZGUiLCJfdGhpczU3IiwiaXNTaG93biIsIl90aGlzNTgiLCJfb25JbnRlcmFjdGlvbiIsImlzSW50ZXJhY3RpbmciLCJfdGhpczU5IiwiaW5kZXhfdW1kIl0sInNvdXJjZVJvb3QiOiIifQ==