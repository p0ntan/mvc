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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEIvdUMsS0FBSyxFQUFMQSxLQUFLO0lBQ0xnQixNQUFNLEVBQU5BLE1BQU07SUFDTndGLFFBQVEsRUFBUkEsUUFBUTtJQUNSd0YsUUFBUSxFQUFSQSxRQUFRO0lBQ1J1ZixRQUFRLEVBQVJBLFFBQVE7SUFDUjRJLEtBQUssRUFBTEEsS0FBSztJQUNMeUQsU0FBUyxFQUFUQSxTQUFTO0lBQ1Q0TSxPQUFPLEVBQVBBLE9BQU87SUFDUDRCLFNBQVMsRUFBVEEsU0FBUztJQUNUZ0YsR0FBRyxFQUFIQSxHQUFHO0lBQ0g0QyxLQUFLLEVBQUxBLEtBQUs7SUFDTDNOLE9BQU8sRUFBUEE7RUFDRixDQUFDO0VBRUQsT0FBTzBPLFNBQVM7QUFFbEIsQ0FBQyxDQUFFOzs7Ozs7Ozs7Ozs7QUNwcE1IIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ibGFja2phY2suanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Jvb3RzdHJhcC5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbi8vIGltcG9ydCBib290c3RyYXAganNcbmltcG9ydCAnLi9qcy9ib290c3RyYXAuYnVuZGxlJztcblxuLy8gaW1wb3J0IG93biBqc1xuaW1wb3J0ICcuL2pzL2JsYWNramFjayc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8vIEFkZCBzdHlsZSB0byBiaWcgY2FyZCBjb250YWluZXJcbmNvbnN0IGNhcmRDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibGFja2phY2stY2FyZC1jb250YWluZXJcIik7XG5jYXJkQ29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XG4gICAgY29uc3QgY2FyZHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkLXNwcml0ZVwiKTtcbiAgICBjb25zdCBhZGRMZWZ0ID0gMTAwIC8gKGNhcmRzLmxlbmd0aCArIDEpO1xuICAgIGNvbnN0IHJvdGF0ZSA9IDggLyAoY2FyZHMubGVuZ3RoIC0gMSk7XG4gICAgbGV0IHJvdGF0ZVN0eWxlID0gLTQ7XG4gICAgbGV0IGNsYXNzTGVmdCA9IGFkZExlZnQ7XG5cbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICBjYXJkLnN0eWxlLmxlZnQgPSBgJHtjbGFzc0xlZnR9JWA7XG4gICAgICAgIGNhcmQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgtNTAlLCAwKSByb3RhdGUoJHtyb3RhdGVTdHlsZX1kZWcpYDtcbiAgICAgICAgY2xhc3NMZWZ0ICs9IGFkZExlZnQ7XG4gICAgICAgIHJvdGF0ZVN0eWxlICs9IHJvdGF0ZTtcbiAgICB9KSAgXG59KVxuXG4vLyBBZGQgc3R5bGUgdG8gc21hbGwgY2FyZCBjb250YWluZXJcbmNvbnN0IGNhcmRDb250YWluZXJzTWluaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxhY2tqYWNrLWNhcmQtY29udGFpbmVyLW1pbmlcIik7XG5sZXQgbWluaUJvdHRvbVN0eWxlID0gMTA7XG5cbmNhcmRDb250YWluZXJzTWluaS5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XG4gICAgY29uc3QgY2FyZHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkLXNwcml0ZVwiKTtcbiAgICBjb25zdCBhZGRMZWZ0ID0gMTAwIC8gKGNhcmRzLmxlbmd0aCArIDEpO1xuICAgIGNvbnN0IHJvdGF0ZSA9IDEyIC8gKGNhcmRzLmxlbmd0aCAtIDEpO1xuICAgIGxldCByb3RhdGVTdHlsZSA9IGNhcmRzLmxlbmd0aCA+IDEgPyAtNiA6IDA7XG4gICAgbGV0IGNsYXNzTGVmdCA9IGFkZExlZnQ7XG5cbiAgICBjb250YWluZXIuc3R5bGUuYm90dG9tID0gYCR7bWluaUJvdHRvbVN0eWxlfSVgO1xuICAgIG1pbmlCb3R0b21TdHlsZSArPSAyMDtcbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICBjYXJkLnN0eWxlLmxlZnQgPSBgJHtjbGFzc0xlZnR9JWA7XG4gICAgICAgIGNhcmQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgtNTAlLCAwKSByb3RhdGUoJHtyb3RhdGVTdHlsZX1kZWcpYDtcbiAgICAgICAgY2xhc3NMZWZ0ICs9IGFkZExlZnQ7XG4gICAgICAgIHJvdGF0ZVN0eWxlICs9IHJvdGF0ZTtcbiAgICB9KSBcbn0pIiwiLyohXG4gICogQm9vdHN0cmFwIHY1LjMuMC1hbHBoYTIgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMyBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuYm9vdHN0cmFwID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvaW5kZXguanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwO1xuICBjb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDA7XG4gIGNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJseSBlc2NhcGUgSURzIHNlbGVjdG9ycyB0byBoYW5kbGUgd2VpcmQgSURzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY29uc3QgcGFyc2VTZWxlY3RvciA9IHNlbGVjdG9yID0+IHtcbiAgICBpZiAoc2VsZWN0b3IgJiYgd2luZG93LkNTUyAmJiB3aW5kb3cuQ1NTLmVzY2FwZSkge1xuICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvciBuZWVkcyBlc2NhcGluZyB0byBoYW5kbGUgSURzIChodG1sNSspIGNvbnRhaW5pbmcgZm9yIGluc3RhbmNlIC9cbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZSgvIyhbXlxcc1wiIyddKykvZywgKG1hdGNoLCBpZCkgPT4gYCMke0NTUy5lc2NhcGUoaWQpfWApO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07XG5cbiAgLy8gU2hvdXQtb3V0IEFuZ3VzIENyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG4gIGNvbnN0IHRvVHlwZSA9IG9iamVjdCA9PiB7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGAke29iamVjdH1gO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBVdGlsIEFQSVxuICAgKi9cblxuICBjb25zdCBnZXRVSUQgPSBwcmVmaXggPT4ge1xuICAgIGRvIHtcbiAgICAgIHByZWZpeCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKTtcbiAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKTtcbiAgICByZXR1cm4gcHJlZml4O1xuICB9O1xuICBjb25zdCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgICBsZXQge1xuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgdHJhbnNpdGlvbkRlbGF5XG4gICAgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSk7XG5cbiAgICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gICAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXTtcbiAgICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXTtcbiAgICByZXR1cm4gKE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSO1xuICB9O1xuICBjb25zdCB0cmlnZ2VyVHJhbnNpdGlvbkVuZCA9IGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKTtcbiAgfTtcbiAgY29uc3QgaXNFbGVtZW50JDEgPSBvYmplY3QgPT4ge1xuICAgIGlmICghb2JqZWN0IHx8IHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9iamVjdCA9IG9iamVjdFswXTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgIT09ICd1bmRlZmluZWQnO1xuICB9O1xuICBjb25zdCBnZXRFbGVtZW50ID0gb2JqZWN0ID0+IHtcbiAgICAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdCBvciBhIG5vZGUgZWxlbWVudFxuICAgIGlmIChpc0VsZW1lbnQkMShvYmplY3QpKSB7XG4gICAgICByZXR1cm4gb2JqZWN0LmpxdWVyeSA/IG9iamVjdFswXSA6IG9iamVjdDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdzdHJpbmcnICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJzZVNlbGVjdG9yKG9iamVjdCkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgY29uc3QgaXNWaXNpYmxlID0gZWxlbWVudCA9PiB7XG4gICAgaWYgKCFpc0VsZW1lbnQkMShlbGVtZW50KSB8fCBlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRJc1Zpc2libGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ3Zpc2libGUnO1xuICAgIC8vIEhhbmRsZSBgZGV0YWlsc2AgZWxlbWVudCBhcyBpdHMgY29udGVudCBtYXkgZmFsc2llIGFwcGVhciB2aXNpYmxlIHdoZW4gaXQgaXMgY2xvc2VkXG4gICAgY29uc3QgY2xvc2VkRGV0YWlscyA9IGVsZW1lbnQuY2xvc2VzdCgnZGV0YWlsczpub3QoW29wZW5dKScpO1xuICAgIGlmICghY2xvc2VkRGV0YWlscykge1xuICAgICAgcmV0dXJuIGVsZW1lbnRJc1Zpc2libGU7XG4gICAgfVxuICAgIGlmIChjbG9zZWREZXRhaWxzICE9PSBlbGVtZW50KSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZWxlbWVudC5jbG9zZXN0KCdzdW1tYXJ5Jyk7XG4gICAgICBpZiAoc3VtbWFyeSAmJiBzdW1tYXJ5LnBhcmVudE5vZGUgIT09IGNsb3NlZERldGFpbHMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHN1bW1hcnkgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudElzVmlzaWJsZTtcbiAgfTtcbiAgY29uc3QgaXNEaXNhYmxlZCA9IGVsZW1lbnQgPT4ge1xuICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZWxlbWVudC5kaXNhYmxlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmRpc2FibGVkO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09ICdmYWxzZSc7XG4gIH07XG4gIGNvbnN0IGZpbmRTaGFkb3dSb290ID0gZWxlbWVudCA9PiB7XG4gICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG4gICAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbDtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICAgIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gIH07XG4gIGNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogVHJpY2sgdG8gcmVzdGFydCBhbiBlbGVtZW50J3MgYW5pbWF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB2b2lkXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly93d3cuY2hhcmlzdGhlby5pby9ibG9nLzIwMjEvMDIvcmVzdGFydC1hLWNzcy1hbmltYXRpb24td2l0aC1qYXZhc2NyaXB0LyNyZXN0YXJ0aW5nLWEtY3NzLWFuaW1hdGlvblxuICAgKi9cbiAgY29uc3QgcmVmbG93ID0gZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5vZmZzZXRIZWlnaHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gIH07XG5cbiAgY29uc3QgZ2V0alF1ZXJ5ID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cualF1ZXJ5ICYmICFkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS1icy1uby1qcXVlcnknKSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5qUXVlcnk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICBjb25zdCBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzID0gW107XG4gIGNvbnN0IG9uRE9NQ29udGVudExvYWRlZCA9IGNhbGxiYWNrID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAvLyBhZGQgbGlzdGVuZXIgb24gdGhlIGZpcnN0IGNhbGwgd2hlbiB0aGUgZG9jdW1lbnQgaXMgaW4gbG9hZGluZyBzdGF0ZVxuICAgICAgaWYgKCFET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGlzUlRMID0gKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCc7XG4gIGNvbnN0IGRlZmluZUpRdWVyeVBsdWdpbiA9IHBsdWdpbiA9PiB7XG4gICAgb25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCQpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHBsdWdpbi5OQU1FO1xuICAgICAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW25hbWVdO1xuICAgICAgICAkLmZuW25hbWVdID0gcGx1Z2luLmpRdWVyeUludGVyZmFjZTtcbiAgICAgICAgJC5mbltuYW1lXS5Db25zdHJ1Y3RvciA9IHBsdWdpbjtcbiAgICAgICAgJC5mbltuYW1lXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgICAgICQuZm5bbmFtZV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICAgICAgcmV0dXJuIHBsdWdpbi5qUXVlcnlJbnRlcmZhY2U7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGV4ZWN1dGUgPSAocG9zc2libGVDYWxsYmFjaywgYXJncyA9IFtdLCBkZWZhdWx0VmFsdWUgPSBwb3NzaWJsZUNhbGxiYWNrKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBwb3NzaWJsZUNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gcG9zc2libGVDYWxsYmFjayguLi5hcmdzKSA6IGRlZmF1bHRWYWx1ZTtcbiAgfTtcbiAgY29uc3QgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiA9IChjYWxsYmFjaywgdHJhbnNpdGlvbkVsZW1lbnQsIHdhaXRGb3JUcmFuc2l0aW9uID0gdHJ1ZSkgPT4ge1xuICAgIGlmICghd2FpdEZvclRyYW5zaXRpb24pIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkdXJhdGlvblBhZGRpbmcgPSA1O1xuICAgIGNvbnN0IGVtdWxhdGVkRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0cmFuc2l0aW9uRWxlbWVudCkgKyBkdXJhdGlvblBhZGRpbmc7XG4gICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGhhbmRsZXIgPSAoe1xuICAgICAgdGFyZ2V0XG4gICAgfSkgPT4ge1xuICAgICAgaWYgKHRhcmdldCAhPT0gdHJhbnNpdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgIHRyYW5zaXRpb25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpO1xuICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG4gICAgfTtcbiAgICB0cmFuc2l0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBoYW5kbGVyKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9LCBlbXVsYXRlZER1cmF0aW9uKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBwcmV2aW91cy9uZXh0IGVsZW1lbnQgb2YgYSBsaXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5fSBsaXN0ICAgIFRoZSBsaXN0IG9mIGVsZW1lbnRzXG4gICAqIEBwYXJhbSBhY3RpdmVFbGVtZW50ICAgVGhlIGFjdGl2ZSBlbGVtZW50XG4gICAqIEBwYXJhbSBzaG91bGRHZXROZXh0ICAgQ2hvb3NlIHRvIGdldCBuZXh0IG9yIHByZXZpb3VzIGVsZW1lbnRcbiAgICogQHBhcmFtIGlzQ3ljbGVBbGxvd2VkXG4gICAqIEByZXR1cm4ge0VsZW1lbnR8ZWxlbX0gVGhlIHByb3BlciBlbGVtZW50XG4gICAqL1xuICBjb25zdCBnZXROZXh0QWN0aXZlRWxlbWVudCA9IChsaXN0LCBhY3RpdmVFbGVtZW50LCBzaG91bGRHZXROZXh0LCBpc0N5Y2xlQWxsb3dlZCkgPT4ge1xuICAgIGNvbnN0IGxpc3RMZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgICBsZXQgaW5kZXggPSBsaXN0LmluZGV4T2YoYWN0aXZlRWxlbWVudCk7XG5cbiAgICAvLyBpZiB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgbGlzdCByZXR1cm4gYW4gZWxlbWVudFxuICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uIGFuZCBpZiBjeWNsZSBpcyBhbGxvd2VkXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuICFzaG91bGRHZXROZXh0ICYmIGlzQ3ljbGVBbGxvd2VkID8gbGlzdFtsaXN0TGVuZ3RoIC0gMV0gOiBsaXN0WzBdO1xuICAgIH1cbiAgICBpbmRleCArPSBzaG91bGRHZXROZXh0ID8gMSA6IC0xO1xuICAgIGlmIChpc0N5Y2xlQWxsb3dlZCkge1xuICAgICAgaW5kZXggPSAoaW5kZXggKyBsaXN0TGVuZ3RoKSAlIGxpc3RMZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBsaXN0W01hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBsaXN0TGVuZ3RoIC0gMSkpXTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGRvbS9ldmVudC1oYW5kbGVyLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qLztcbiAgY29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovO1xuICBjb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvO1xuICBjb25zdCBldmVudFJlZ2lzdHJ5ID0ge307IC8vIEV2ZW50cyBzdG9yYWdlXG4gIGxldCB1aWRFdmVudCA9IDE7XG4gIGNvbnN0IGN1c3RvbUV2ZW50cyA9IHtcbiAgICBtb3VzZWVudGVyOiAnbW91c2VvdmVyJyxcbiAgICBtb3VzZWxlYXZlOiAnbW91c2VvdXQnXG4gIH07XG4gIGNvbnN0IG5hdGl2ZUV2ZW50cyA9IG5ldyBTZXQoWydjbGljaycsICdkYmxjbGljaycsICdtb3VzZXVwJywgJ21vdXNlZG93bicsICdjb250ZXh0bWVudScsICdtb3VzZXdoZWVsJywgJ0RPTU1vdXNlU2Nyb2xsJywgJ21vdXNlb3ZlcicsICdtb3VzZW91dCcsICdtb3VzZW1vdmUnLCAnc2VsZWN0c3RhcnQnLCAnc2VsZWN0ZW5kJywgJ2tleWRvd24nLCAna2V5cHJlc3MnLCAna2V5dXAnLCAnb3JpZW50YXRpb25jaGFuZ2UnLCAndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnLCAncG9pbnRlcmRvd24nLCAncG9pbnRlcm1vdmUnLCAncG9pbnRlcnVwJywgJ3BvaW50ZXJsZWF2ZScsICdwb2ludGVyY2FuY2VsJywgJ2dlc3R1cmVzdGFydCcsICdnZXN0dXJlY2hhbmdlJywgJ2dlc3R1cmVlbmQnLCAnZm9jdXMnLCAnYmx1cicsICdjaGFuZ2UnLCAncmVzZXQnLCAnc2VsZWN0JywgJ3N1Ym1pdCcsICdmb2N1c2luJywgJ2ZvY3Vzb3V0JywgJ2xvYWQnLCAndW5sb2FkJywgJ2JlZm9yZXVubG9hZCcsICdyZXNpemUnLCAnbW92ZScsICdET01Db250ZW50TG9hZGVkJywgJ3JlYWR5c3RhdGVjaGFuZ2UnLCAnZXJyb3InLCAnYWJvcnQnLCAnc2Nyb2xsJ10pO1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIG1ldGhvZHNcbiAgICovXG5cbiAgZnVuY3Rpb24gbWFrZUV2ZW50VWlkKGVsZW1lbnQsIHVpZCkge1xuICAgIHJldHVybiB1aWQgJiYgYCR7dWlkfTo6JHt1aWRFdmVudCsrfWAgfHwgZWxlbWVudC51aWRFdmVudCB8fCB1aWRFdmVudCsrO1xuICB9XG4gIGZ1bmN0aW9uIGdldEVsZW1lbnRFdmVudHMoZWxlbWVudCkge1xuICAgIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChlbGVtZW50KTtcbiAgICBlbGVtZW50LnVpZEV2ZW50ID0gdWlkO1xuICAgIGV2ZW50UmVnaXN0cnlbdWlkXSA9IGV2ZW50UmVnaXN0cnlbdWlkXSB8fCB7fTtcbiAgICByZXR1cm4gZXZlbnRSZWdpc3RyeVt1aWRdO1xuICB9XG4gIGZ1bmN0aW9uIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgICAgaHlkcmF0ZU9iaihldmVudCwge1xuICAgICAgICBkZWxlZ2F0ZVRhcmdldDogZWxlbWVudFxuICAgICAgfSk7XG4gICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgW2V2ZW50XSk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBzZWxlY3RvciwgZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgZm9yIChsZXQge1xuICAgICAgICB0YXJnZXRcbiAgICAgIH0gPSBldmVudDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gdGhpczsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBkb21FbGVtZW50IG9mIGRvbUVsZW1lbnRzKSB7XG4gICAgICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IHRhcmdldCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh5ZHJhdGVPYmooZXZlbnQsIHtcbiAgICAgICAgICAgIGRlbGVnYXRlVGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgc2VsZWN0b3IsIGZuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRhcmdldCwgW2V2ZW50XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGZpbmRIYW5kbGVyKGV2ZW50cywgY2FsbGFibGUsIGRlbGVnYXRpb25TZWxlY3RvciA9IG51bGwpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhldmVudHMpLmZpbmQoZXZlbnQgPT4gZXZlbnQuY2FsbGFibGUgPT09IGNhbGxhYmxlICYmIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvciA9PT0gZGVsZWdhdGlvblNlbGVjdG9yKTtcbiAgfVxuICBmdW5jdGlvbiBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBjb25zdCBpc0RlbGVnYXRlZCA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJztcbiAgICAvLyB0b2RvOiB0b29sdGlwIHBhc3NlcyBgZmFsc2VgIGluc3RlYWQgb2Ygc2VsZWN0b3IsIHNvIHdlIG5lZWQgdG8gY2hlY2tcbiAgICBjb25zdCBjYWxsYWJsZSA9IGlzRGVsZWdhdGVkID8gZGVsZWdhdGlvbkZ1bmN0aW9uIDogaGFuZGxlciB8fCBkZWxlZ2F0aW9uRnVuY3Rpb247XG4gICAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudCk7XG4gICAgaWYgKCFuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudCkpIHtcbiAgICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50O1xuICAgIH1cbiAgICByZXR1cm4gW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XTtcbiAgfVxuICBmdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIG9uZU9mZikge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKTtcblxuICAgIC8vIGluIGNhc2Ugb2YgbW91c2VlbnRlciBvciBtb3VzZWxlYXZlIHdyYXAgdGhlIGhhbmRsZXIgd2l0aGluIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGl0cyBET00gcG9zaXRpb25cbiAgICAvLyB0aGlzIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gYmVpbmcgZGlzcGF0Y2hlZCB0aGUgc2FtZSB3YXkgYXMgbW91c2VvdmVyIG9yIG1vdXNlb3V0IGRvZXNcbiAgICBpZiAob3JpZ2luYWxUeXBlRXZlbnQgaW4gY3VzdG9tRXZlbnRzKSB7XG4gICAgICBjb25zdCB3cmFwRnVuY3Rpb24gPSBmbiA9PiB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgIWV2ZW50LmRlbGVnYXRlVGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIGNhbGxhYmxlID0gd3JhcEZ1bmN0aW9uKGNhbGxhYmxlKTtcbiAgICB9XG4gICAgY29uc3QgZXZlbnRzID0gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KTtcbiAgICBjb25zdCBoYW5kbGVycyA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IChldmVudHNbdHlwZUV2ZW50XSA9IHt9KTtcbiAgICBjb25zdCBwcmV2aW91c0Z1bmN0aW9uID0gZmluZEhhbmRsZXIoaGFuZGxlcnMsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKTtcbiAgICBpZiAocHJldmlvdXNGdW5jdGlvbikge1xuICAgICAgcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgPSBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiAmJiBvbmVPZmY7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChjYWxsYWJsZSwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKTtcbiAgICBjb25zdCBmbiA9IGlzRGVsZWdhdGVkID8gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgY2FsbGFibGUpIDogYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBjYWxsYWJsZSk7XG4gICAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbDtcbiAgICBmbi5jYWxsYWJsZSA9IGNhbGxhYmxlO1xuICAgIGZuLm9uZU9mZiA9IG9uZU9mZjtcbiAgICBmbi51aWRFdmVudCA9IHVpZDtcbiAgICBoYW5kbGVyc1t1aWRdID0gZm47XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIGlzRGVsZWdhdGVkKTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcbiAgICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpO1xuICAgIGlmICghZm4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSk7XG4gICAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xuICAgIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge307XG4gICAgZm9yIChjb25zdCBbaGFuZGxlcktleSwgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgICAgaWYgKGhhbmRsZXJLZXkuaW5jbHVkZXMobmFtZXNwYWNlKSkge1xuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2V0VHlwZUV2ZW50KGV2ZW50KSB7XG4gICAgLy8gYWxsb3cgdG8gZ2V0IHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gbmFtZXNwYWNlZCBldmVudHMgKCdjbGljay5icy5idXR0b24nIC0tPiAnY2xpY2snKVxuICAgIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpO1xuICAgIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50O1xuICB9XG4gIGNvbnN0IEV2ZW50SGFuZGxlciA9IHtcbiAgICBvbihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIGZhbHNlKTtcbiAgICB9LFxuICAgIG9uZShlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIHRydWUpO1xuICAgIH0sXG4gICAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pO1xuICAgICAgY29uc3QgaW5OYW1lc3BhY2UgPSB0eXBlRXZlbnQgIT09IG9yaWdpbmFsVHlwZUV2ZW50O1xuICAgICAgY29uc3QgZXZlbnRzID0gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KTtcbiAgICAgIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge307XG4gICAgICBjb25zdCBpc05hbWVzcGFjZSA9IG9yaWdpbmFsVHlwZUV2ZW50LnN0YXJ0c1dpdGgoJy4nKTtcbiAgICAgIGlmICh0eXBlb2YgY2FsbGFibGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFNpbXBsZXN0IGNhc2U6IGhhbmRsZXIgaXMgcGFzc2VkLCByZW1vdmUgdGhhdCBsaXN0ZW5lciBPTkxZLlxuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaXNOYW1lc3BhY2UpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50RXZlbnQgb2YgT2JqZWN0LmtleXMoZXZlbnRzKSkge1xuICAgICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IFtrZXlIYW5kbGVycywgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgICAgICBjb25zdCBoYW5kbGVyS2V5ID0ga2V5SGFuZGxlcnMucmVwbGFjZShzdHJpcFVpZFJlZ2V4LCAnJyk7XG4gICAgICAgIGlmICghaW5OYW1lc3BhY2UgfHwgb3JpZ2luYWxUeXBlRXZlbnQuaW5jbHVkZXMoaGFuZGxlcktleSkpIHtcbiAgICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdHJpZ2dlcihlbGVtZW50LCBldmVudCwgYXJncykge1xuICAgICAgaWYgKHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KCk7XG4gICAgICBjb25zdCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQoZXZlbnQpO1xuICAgICAgY29uc3QgaW5OYW1lc3BhY2UgPSBldmVudCAhPT0gdHlwZUV2ZW50O1xuICAgICAgbGV0IGpRdWVyeUV2ZW50ID0gbnVsbDtcbiAgICAgIGxldCBidWJibGVzID0gdHJ1ZTtcbiAgICAgIGxldCBuYXRpdmVEaXNwYXRjaCA9IHRydWU7XG4gICAgICBsZXQgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xuICAgICAgaWYgKGluTmFtZXNwYWNlICYmICQpIHtcbiAgICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKTtcbiAgICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGpRdWVyeUV2ZW50KTtcbiAgICAgICAgYnViYmxlcyA9ICFqUXVlcnlFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpO1xuICAgICAgICBuYXRpdmVEaXNwYXRjaCA9ICFqUXVlcnlFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpO1xuICAgICAgICBkZWZhdWx0UHJldmVudGVkID0galF1ZXJ5RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCk7XG4gICAgICB9XG4gICAgICBsZXQgZXZ0ID0gbmV3IEV2ZW50KGV2ZW50LCB7XG4gICAgICAgIGJ1YmJsZXMsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgZXZ0ID0gaHlkcmF0ZU9iaihldnQsIGFyZ3MpO1xuICAgICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAobmF0aXZlRGlzcGF0Y2gpIHtcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgalF1ZXJ5RXZlbnQpIHtcbiAgICAgICAgalF1ZXJ5RXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBldnQ7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBoeWRyYXRlT2JqKG9iaiwgbWV0YSA9IHt9KSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWV0YSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICB9IGNhdGNoIChfdW51c2VkKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgZG9tL2RhdGEuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgZWxlbWVudE1hcCA9IG5ldyBNYXAoKTtcbiAgY29uc3QgRGF0YSA9IHtcbiAgICBzZXQoZWxlbWVudCwga2V5LCBpbnN0YW5jZSkge1xuICAgICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50TWFwLnNldChlbGVtZW50LCBuZXcgTWFwKCkpO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KTtcblxuICAgICAgLy8gbWFrZSBpdCBjbGVhciB3ZSBvbmx5IHdhbnQgb25lIGluc3RhbmNlIHBlciBlbGVtZW50XG4gICAgICAvLyBjYW4gYmUgcmVtb3ZlZCBsYXRlciB3aGVuIG11bHRpcGxlIGtleS9pbnN0YW5jZXMgYXJlIGZpbmUgdG8gYmUgdXNlZFxuICAgICAgaWYgKCFpbnN0YW5jZU1hcC5oYXMoa2V5KSAmJiBpbnN0YW5jZU1hcC5zaXplICE9PSAwKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20oaW5zdGFuY2VNYXAua2V5cygpKVswXX0uYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluc3RhbmNlTWFwLnNldChrZXksIGluc3RhbmNlKTtcbiAgICB9LFxuICAgIGdldChlbGVtZW50LCBrZXkpIHtcbiAgICAgIGlmIChlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudE1hcC5nZXQoZWxlbWVudCkuZ2V0KGtleSkgfHwgbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgcmVtb3ZlKGVsZW1lbnQsIGtleSkge1xuICAgICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpO1xuICAgICAgaW5zdGFuY2VNYXAuZGVsZXRlKGtleSk7XG5cbiAgICAgIC8vIGZyZWUgdXAgZWxlbWVudCByZWZlcmVuY2VzIGlmIHRoZXJlIGFyZSBubyBpbnN0YW5jZXMgbGVmdCBmb3IgYW4gZWxlbWVudFxuICAgICAgaWYgKGluc3RhbmNlTWFwLnNpemUgPT09IDApIHtcbiAgICAgICAgZWxlbWVudE1hcC5kZWxldGUoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgZG9tL21hbmlwdWxhdG9yLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBmdW5jdGlvbiBub3JtYWxpemVEYXRhKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBOdW1iZXIodmFsdWUpLnRvU3RyaW5nKCkpIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgfSBjYXRjaCAoX3VudXNlZCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBub3JtYWxpemVEYXRhS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkucmVwbGFjZSgvW0EtWl0vZywgY2hyID0+IGAtJHtjaHIudG9Mb3dlckNhc2UoKX1gKTtcbiAgfVxuICBjb25zdCBNYW5pcHVsYXRvciA9IHtcbiAgICBzZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKTtcbiAgICB9LFxuICAgIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKTtcbiAgICB9LFxuICAgIGdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIHtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG4gICAgICBjb25zdCBic0tleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50LmRhdGFzZXQpLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ2JzJykgJiYgIWtleS5zdGFydHNXaXRoKCdic0NvbmZpZycpKTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGJzS2V5cykge1xuICAgICAgICBsZXQgcHVyZUtleSA9IGtleS5yZXBsYWNlKC9eYnMvLCAnJyk7XG4gICAgICAgIHB1cmVLZXkgPSBwdXJlS2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHVyZUtleS5zbGljZSgxLCBwdXJlS2V5Lmxlbmd0aCk7XG4gICAgICAgIGF0dHJpYnV0ZXNbcHVyZUtleV0gPSBub3JtYWxpemVEYXRhKGVsZW1lbnQuZGF0YXNldFtrZXldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH0sXG4gICAgZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVEYXRhKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL2NvbmZpZy5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgQ29uZmlnIHtcbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgc3RhdGljIG1ldGhvZCBcIk5BTUVcIiwgZm9yIGVhY2ggY29tcG9uZW50IScpO1xuICAgIH1cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnKTtcbiAgICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKTtcbiAgICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfbWVyZ2VDb25maWdPYmooY29uZmlnLCBlbGVtZW50KSB7XG4gICAgICBjb25zdCBqc29uQ29uZmlnID0gaXNFbGVtZW50JDEoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsICdjb25maWcnKSA6IHt9OyAvLyB0cnkgdG8gcGFyc2VcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgICAuLi4odHlwZW9mIGpzb25Db25maWcgPT09ICdvYmplY3QnID8ganNvbkNvbmZpZyA6IHt9KSxcbiAgICAgICAgLi4uKGlzRWxlbWVudCQxKGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkgOiB7fSksXG4gICAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgICAgfTtcbiAgICB9XG4gICAgX3R5cGVDaGVja0NvbmZpZyhjb25maWcsIGNvbmZpZ1R5cGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSkge1xuICAgICAgZm9yIChjb25zdCBbcHJvcGVydHksIGV4cGVjdGVkVHlwZXNdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZ1R5cGVzKSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV07XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IGlzRWxlbWVudCQxKHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke3RoaXMuY29uc3RydWN0b3IuTkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGJhc2UtY29tcG9uZW50LmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IFZFUlNJT04gPSAnNS4zLjAtYWxwaGEyJztcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBlbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KTtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgRGF0YS5zZXQodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIERhdGEucmVtb3ZlKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSk7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5TmFtZSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBfcXVldWVDYWxsYmFjayhjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZCA9IHRydWUpIHtcbiAgICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQpO1xuICAgIH1cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnLCB0aGlzLl9lbGVtZW50KTtcbiAgICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKTtcbiAgICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIERhdGEuZ2V0KGdldEVsZW1lbnQoZWxlbWVudCksIHRoaXMuREFUQV9LRVkpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCBjb25maWcgPSB7fSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoZWxlbWVudCkgfHwgbmV3IHRoaXMoZWxlbWVudCwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgICByZXR1cm4gYGJzLiR7dGhpcy5OQU1FfWA7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgICAgcmV0dXJuIGAuJHt0aGlzLkRBVEFfS0VZfWA7XG4gICAgfVxuICAgIHN0YXRpYyBldmVudE5hbWUobmFtZSkge1xuICAgICAgcmV0dXJuIGAke25hbWV9JHt0aGlzLkVWRU5UX0tFWX1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgZG9tL3NlbGVjdG9yLWVuZ2luZS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIGNvbnN0IGdldFNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0Jyk7XG4gICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgICBsZXQgaHJlZkF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cbiAgICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgICAvLyBzbyBldmVyeXRoaW5nIHN0YXJ0aW5nIHdpdGggYCNgIG9yIGAuYC4gSWYgYSBcInJlYWxcIiBVUkwgaXMgdXNlZCBhcyB0aGUgc2VsZWN0b3IsXG4gICAgICAvLyBgZG9jdW1lbnQucXVlcnlTZWxlY3RvcmAgd2lsbCByaWdodGZ1bGx5IGNvbXBsYWluIGl0IGlzIGludmFsaWQuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgICAgaWYgKCFocmVmQXR0cmlidXRlIHx8ICFocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBKdXN0IGluIGNhc2Ugc29tZSBDTVMgcHV0cyBvdXQgYSBmdWxsIFVSTCB3aXRoIHRoZSBhbmNob3IgYXBwZW5kZWRcbiAgICAgIGlmIChocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgIGhyZWZBdHRyaWJ1dGUgPSBgIyR7aHJlZkF0dHJpYnV0ZS5zcGxpdCgnIycpWzFdfWA7XG4gICAgICB9XG4gICAgICBzZWxlY3RvciA9IGhyZWZBdHRyaWJ1dGUgJiYgaHJlZkF0dHJpYnV0ZSAhPT0gJyMnID8gaHJlZkF0dHJpYnV0ZS50cmltKCkgOiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH07XG4gIGNvbnN0IFNlbGVjdG9yRW5naW5lID0ge1xuICAgIGZpbmQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoLi4uRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbC5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSk7XG4gICAgfSxcbiAgICBmaW5kT25lKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgICB9LFxuICAgIGNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KC4uLmVsZW1lbnQuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSk7XG4gICAgfSxcbiAgICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICBjb25zdCBwYXJlbnRzID0gW107XG4gICAgICBsZXQgYW5jZXN0b3IgPSBlbGVtZW50LnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKTtcbiAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgfSxcbiAgICBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICBsZXQgcHJldmlvdXMgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgICAgaWYgKHByZXZpb3VzLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIFtwcmV2aW91c107XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXMgPSBwcmV2aW91cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgLy8gVE9ETzogdGhpcyBpcyBub3cgdW51c2VkOyByZW1vdmUgbGF0ZXIgYWxvbmcgd2l0aCBwcmV2KClcbiAgICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgd2hpbGUgKG5leHQpIHtcbiAgICAgICAgaWYgKG5leHQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gW25leHRdO1xuICAgICAgICB9XG4gICAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuICAgIGZvY3VzYWJsZUNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGZvY3VzYWJsZXMgPSBbJ2EnLCAnYnV0dG9uJywgJ2lucHV0JywgJ3RleHRhcmVhJywgJ3NlbGVjdCcsICdkZXRhaWxzJywgJ1t0YWJpbmRleF0nLCAnW2NvbnRlbnRlZGl0YWJsZT1cInRydWVcIl0nXS5tYXAoc2VsZWN0b3IgPT4gYCR7c2VsZWN0b3J9Om5vdChbdGFiaW5kZXhePVwiLVwiXSlgKS5qb2luKCcsJyk7XG4gICAgICByZXR1cm4gdGhpcy5maW5kKGZvY3VzYWJsZXMsIGVsZW1lbnQpLmZpbHRlcihlbCA9PiAhaXNEaXNhYmxlZChlbCkgJiYgaXNWaXNpYmxlKGVsKSk7XG4gICAgfSxcbiAgICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICByZXR1cm4gc2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yKSA6IG51bGw7XG4gICAgfSxcbiAgICBnZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICByZXR1cm4gc2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKSA6IFtdO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIGNvbnN0IGVuYWJsZURpc21pc3NUcmlnZ2VyID0gKGNvbXBvbmVudCwgbWV0aG9kID0gJ2hpZGUnKSA9PiB7XG4gICAgY29uc3QgY2xpY2tFdmVudCA9IGBjbGljay5kaXNtaXNzJHtjb21wb25lbnQuRVZFTlRfS0VZfWA7XG4gICAgY29uc3QgbmFtZSA9IGNvbXBvbmVudC5OQU1FO1xuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgY2xpY2tFdmVudCwgYFtkYXRhLWJzLWRpc21pc3M9XCIke25hbWV9XCJdYCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpIHx8IHRoaXMuY2xvc2VzdChgLiR7bmFtZX1gKTtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50LmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KTtcblxuICAgICAgLy8gTWV0aG9kIGFyZ3VtZW50IGlzIGxlZnQsIGZvciBBbGVydCBhbmQgb25seSwgYXMgaXQgZG9lc24ndCBpbXBsZW1lbnQgdGhlICdoaWRlJyBtZXRob2RcbiAgICAgIGluc3RhbmNlW21ldGhvZF0oKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGFsZXJ0LmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkZiA9ICdhbGVydCc7XG4gIGNvbnN0IERBVEFfS0VZJGEgPSAnYnMuYWxlcnQnO1xuICBjb25zdCBFVkVOVF9LRVkkYiA9IGAuJHtEQVRBX0tFWSRhfWA7XG4gIGNvbnN0IEVWRU5UX0NMT1NFID0gYGNsb3NlJHtFVkVOVF9LRVkkYn1gO1xuICBjb25zdCBFVkVOVF9DTE9TRUQgPSBgY2xvc2VkJHtFVkVOVF9LRVkkYn1gO1xuICBjb25zdCBDTEFTU19OQU1FX0ZBREUkNSA9ICdmYWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDggPSAnc2hvdyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgQWxlcnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkZjtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBjbG9zZSgpIHtcbiAgICAgIGNvbnN0IGNsb3NlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTE9TRSk7XG4gICAgICBpZiAoY2xvc2VFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckOCk7XG4gICAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFJDUpO1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudCgpLCB0aGlzLl9lbGVtZW50LCBpc0FuaW1hdGVkKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2Rlc3Ryb3lFbGVtZW50KCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFRCk7XG4gICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBBbGVydC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgZW5hYmxlRGlzbWlzc1RyaWdnZXIoQWxlcnQsICdjbG9zZScpO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKEFsZXJ0KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIGJ1dHRvbi5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJGUgPSAnYnV0dG9uJztcbiAgY29uc3QgREFUQV9LRVkkOSA9ICdicy5idXR0b24nO1xuICBjb25zdCBFVkVOVF9LRVkkYSA9IGAuJHtEQVRBX0tFWSQ5fWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQ2ID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IENMQVNTX05BTUVfQUNUSVZFJDMgPSAnYWN0aXZlJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUkNSA9ICdbZGF0YS1icy10b2dnbGU9XCJidXR0b25cIl0nO1xuICBjb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSQ2ID0gYGNsaWNrJHtFVkVOVF9LRVkkYX0ke0RBVEFfQVBJX0tFWSQ2fWA7XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJGU7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgdG9nZ2xlKCkge1xuICAgICAgLy8gVG9nZ2xlIGNsYXNzIGFuZCBzeW5jIHRoZSBgYXJpYS1wcmVzc2VkYCBhdHRyaWJ1dGUgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBgLnRvZ2dsZSgpYCBtZXRob2RcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9BQ1RJVkUkMykpO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEJ1dHRvbi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpO1xuICAgICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ2LCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ1LCBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ1KTtcbiAgICBjb25zdCBkYXRhID0gQnV0dG9uLmdldE9yQ3JlYXRlSW5zdGFuY2UoYnV0dG9uKTtcbiAgICBkYXRhLnRvZ2dsZSgpO1xuICB9KTtcblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihCdXR0b24pO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgdXRpbC9zd2lwZS5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJGQgPSAnc3dpcGUnO1xuICBjb25zdCBFVkVOVF9LRVkkOSA9ICcuYnMuc3dpcGUnO1xuICBjb25zdCBFVkVOVF9UT1VDSFNUQVJUID0gYHRvdWNoc3RhcnQke0VWRU5UX0tFWSQ5fWA7XG4gIGNvbnN0IEVWRU5UX1RPVUNITU9WRSA9IGB0b3VjaG1vdmUke0VWRU5UX0tFWSQ5fWA7XG4gIGNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVkkOX1gO1xuICBjb25zdCBFVkVOVF9QT0lOVEVSRE9XTiA9IGBwb2ludGVyZG93biR7RVZFTlRfS0VZJDl9YDtcbiAgY29uc3QgRVZFTlRfUE9JTlRFUlVQID0gYHBvaW50ZXJ1cCR7RVZFTlRfS0VZJDl9YDtcbiAgY29uc3QgUE9JTlRFUl9UWVBFX1RPVUNIID0gJ3RvdWNoJztcbiAgY29uc3QgUE9JTlRFUl9UWVBFX1BFTiA9ICdwZW4nO1xuICBjb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCc7XG4gIGNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwO1xuICBjb25zdCBEZWZhdWx0JGMgPSB7XG4gICAgZW5kQ2FsbGJhY2s6IG51bGwsXG4gICAgbGVmdENhbGxiYWNrOiBudWxsLFxuICAgIHJpZ2h0Q2FsbGJhY2s6IG51bGxcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkYyA9IHtcbiAgICBlbmRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gICAgbGVmdENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgICByaWdodENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFN3aXBlIGV4dGVuZHMgQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIGlmICghZWxlbWVudCB8fCAhU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IDA7XG4gICAgICB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudCk7XG4gICAgICB0aGlzLl9pbml0RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JGM7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkYztcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkZDtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBkaXNwb3NlKCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkkOSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9zdGFydChldmVudCkge1xuICAgICAgaWYgKCF0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cykge1xuICAgICAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYO1xuICAgICAgfVxuICAgIH1cbiAgICBfZW5kKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuX2RlbHRhWDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2hhbmRsZVN3aXBlKCk7XG4gICAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5lbmRDYWxsYmFjayk7XG4gICAgfVxuICAgIF9tb3ZlKGV2ZW50KSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSA/IDAgOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLl9kZWx0YVg7XG4gICAgfVxuICAgIF9oYW5kbGVTd2lwZSgpIHtcbiAgICAgIGNvbnN0IGFic0RlbHRhWCA9IE1hdGguYWJzKHRoaXMuX2RlbHRhWCk7XG4gICAgICBpZiAoYWJzRGVsdGFYIDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YVggLyB0aGlzLl9kZWx0YVg7XG4gICAgICB0aGlzLl9kZWx0YVggPSAwO1xuICAgICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXhlY3V0ZShkaXJlY3Rpb24gPiAwID8gdGhpcy5fY29uZmlnLnJpZ2h0Q2FsbGJhY2sgOiB0aGlzLl9jb25maWcubGVmdENhbGxiYWNrKTtcbiAgICB9XG4gICAgX2luaXRFdmVudHMoKSB7XG4gICAgICBpZiAodGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJET1dOLCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpO1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUlVQLCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hTVEFSVCwgZXZlbnQgPT4gdGhpcy5fc3RhcnQoZXZlbnQpKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNITU9WRSwgZXZlbnQgPT4gdGhpcy5fbW92ZShldmVudCkpO1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hFTkQsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBfZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKTtcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgaXNTdXBwb3J0ZWQoKSB7XG4gICAgICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBjYXJvdXNlbC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJGMgPSAnY2Fyb3VzZWwnO1xuICBjb25zdCBEQVRBX0tFWSQ4ID0gJ2JzLmNhcm91c2VsJztcbiAgY29uc3QgRVZFTlRfS0VZJDggPSBgLiR7REFUQV9LRVkkOH1gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkkNSA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBBUlJPV19MRUZUX0tFWSQxID0gJ0Fycm93TGVmdCc7XG4gIGNvbnN0IEFSUk9XX1JJR0hUX0tFWSQxID0gJ0Fycm93UmlnaHQnO1xuICBjb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwOyAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcblxuICBjb25zdCBPUkRFUl9ORVhUID0gJ25leHQnO1xuICBjb25zdCBPUkRFUl9QUkVWID0gJ3ByZXYnO1xuICBjb25zdCBESVJFQ1RJT05fTEVGVCA9ICdsZWZ0JztcbiAgY29uc3QgRElSRUNUSU9OX1JJR0hUID0gJ3JpZ2h0JztcbiAgY29uc3QgRVZFTlRfU0xJREUgPSBgc2xpZGUke0VWRU5UX0tFWSQ4fWA7XG4gIGNvbnN0IEVWRU5UX1NMSUQgPSBgc2xpZCR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfS0VZRE9XTiQxID0gYGtleWRvd24ke0VWRU5UX0tFWSQ4fWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFRU5URVIkMSA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVkkOH1gO1xuICBjb25zdCBFVkVOVF9NT1VTRUxFQVZFJDEgPSBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZJDh9YDtcbiAgY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWSQ4fWA7XG4gIGNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkkMyA9IGBsb2FkJHtFVkVOVF9LRVkkOH0ke0RBVEFfQVBJX0tFWSQ1fWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDUgPSBgY2xpY2ske0VWRU5UX0tFWSQ4fSR7REFUQV9BUElfS0VZJDV9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCc7XG4gIGNvbnN0IENMQVNTX05BTUVfQUNUSVZFJDIgPSAnYWN0aXZlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TTElERSA9ICdzbGlkZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfRU5EID0gJ2Nhcm91c2VsLWl0ZW0tZW5kJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TVEFSVCA9ICdjYXJvdXNlbC1pdGVtLXN0YXJ0JztcbiAgY29uc3QgQ0xBU1NfTkFNRV9ORVhUID0gJ2Nhcm91c2VsLWl0ZW0tbmV4dCc7XG4gIGNvbnN0IENMQVNTX05BTUVfUFJFViA9ICdjYXJvdXNlbC1pdGVtLXByZXYnO1xuICBjb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSc7XG4gIGNvbnN0IFNFTEVDVE9SX0lURU0gPSAnLmNhcm91c2VsLWl0ZW0nO1xuICBjb25zdCBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9IFNFTEVDVE9SX0FDVElWRSArIFNFTEVDVE9SX0lURU07XG4gIGNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZyc7XG4gIGNvbnN0IFNFTEVDVE9SX0lORElDQVRPUlMgPSAnLmNhcm91c2VsLWluZGljYXRvcnMnO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1NMSURFID0gJ1tkYXRhLWJzLXNsaWRlXSwgW2RhdGEtYnMtc2xpZGUtdG9dJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9SSURFID0gJ1tkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiXSc7XG4gIGNvbnN0IEtFWV9UT19ESVJFQ1RJT04gPSB7XG4gICAgW0FSUk9XX0xFRlRfS0VZJDFdOiBESVJFQ1RJT05fUklHSFQsXG4gICAgW0FSUk9XX1JJR0hUX0tFWSQxXTogRElSRUNUSU9OX0xFRlRcbiAgfTtcbiAgY29uc3QgRGVmYXVsdCRiID0ge1xuICAgIGludGVydmFsOiA1MDAwLFxuICAgIGtleWJvYXJkOiB0cnVlLFxuICAgIHBhdXNlOiAnaG92ZXInLFxuICAgIHJpZGU6IGZhbHNlLFxuICAgIHRvdWNoOiB0cnVlLFxuICAgIHdyYXA6IHRydWVcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkYiA9IHtcbiAgICBpbnRlcnZhbDogJyhudW1iZXJ8Ym9vbGVhbiknLFxuICAgIC8vIFRPRE86djYgcmVtb3ZlIGJvb2xlYW4gc3VwcG9ydFxuICAgIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gICAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgICByaWRlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAgdG91Y2g6ICdib29sZWFuJyxcbiAgICB3cmFwOiAnYm9vbGVhbidcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBDYXJvdXNlbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnRvdWNoVGltZW91dCA9IG51bGw7XG4gICAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG51bGw7XG4gICAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ESUNBVE9SUywgdGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yaWRlID09PSBDTEFTU19OQU1FX0NBUk9VU0VMKSB7XG4gICAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkYjtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSRiO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSRjO1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIG5leHQoKSB7XG4gICAgICB0aGlzLl9zbGlkZShPUkRFUl9ORVhUKTtcbiAgICB9XG4gICAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgICAgLy8gRklYTUUgVE9ETyB1c2UgYGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZWBcbiAgICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmIGlzVmlzaWJsZSh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJldigpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX1BSRVYpO1xuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jbGVhckludGVydmFsKCk7XG4gICAgfVxuICAgIGN5Y2xlKCkge1xuICAgICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpO1xuICAgICAgdGhpcy5fdXBkYXRlSW50ZXJ2YWwoKTtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5uZXh0V2hlblZpc2libGUoKSwgdGhpcy5fY29uZmlnLmludGVydmFsKTtcbiAgICB9XG4gICAgX21heWJlRW5hYmxlQ3ljbGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5yaWRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLmN5Y2xlKCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmN5Y2xlKCk7XG4gICAgfVxuICAgIHRvKGluZGV4KSB7XG4gICAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zKCk7XG4gICAgICBpZiAoaW5kZXggPiBpdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy50byhpbmRleCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9nZXRBY3RpdmUoKSk7XG4gICAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9yZGVyID0gaW5kZXggPiBhY3RpdmVJbmRleCA/IE9SREVSX05FWFQgOiBPUkRFUl9QUkVWO1xuICAgICAgdGhpcy5fc2xpZGUob3JkZXIsIGl0ZW1zW2luZGV4XSk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBpZiAodGhpcy5fc3dpcGVIZWxwZXIpIHtcbiAgICAgICAgdGhpcy5fc3dpcGVIZWxwZXIuZGlzcG9zZSgpO1xuICAgICAgfVxuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIGNvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSBjb25maWcuaW50ZXJ2YWw7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOJDEsIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRU5URVIkMSwgKCkgPT4gdGhpcy5wYXVzZSgpKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFTEVBVkUkMSwgKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb25maWcudG91Y2ggJiYgU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgZm9yIChjb25zdCBpbWcgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNX0lNRywgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGltZywgRVZFTlRfRFJBR19TVEFSVCwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBlbmRDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSAhPT0gJ2hvdmVyJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICBpZiAodGhpcy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHN3aXBlQ29uZmlnID0ge1xuICAgICAgICBsZWZ0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX0xFRlQpKSxcbiAgICAgICAgcmlnaHRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fUklHSFQpKSxcbiAgICAgICAgZW5kQ2FsbGJhY2s6IGVuZENhbGxCYWNrXG4gICAgICB9O1xuICAgICAgdGhpcy5fc3dpcGVIZWxwZXIgPSBuZXcgU3dpcGUodGhpcy5fZWxlbWVudCwgc3dpcGVDb25maWcpO1xuICAgIH1cbiAgICBfa2V5ZG93bihldmVudCkge1xuICAgICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IEtFWV9UT19ESVJFQ1RJT05bZXZlbnQua2V5XTtcbiAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbXMoKS5pbmRleE9mKGVsZW1lbnQpO1xuICAgIH1cbiAgICBfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChpbmRleCkge1xuICAgICAgaWYgKCF0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBhY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpO1xuICAgICAgYWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUkMik7XG4gICAgICBhY3RpdmVJbmRpY2F0b3IucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKTtcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoYFtkYXRhLWJzLXNsaWRlLXRvPVwiJHtpbmRleH1cIl1gLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCk7XG4gICAgICBpZiAobmV3QWN0aXZlSW5kaWNhdG9yKSB7XG4gICAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDIpO1xuICAgICAgICBuZXdBY3RpdmVJbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBfdXBkYXRlSW50ZXJ2YWwoKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fYWN0aXZlRWxlbWVudCB8fCB0aGlzLl9nZXRBY3RpdmUoKTtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBOdW1iZXIucGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaW50ZXJ2YWwnKSwgMTApO1xuICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gZWxlbWVudEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWw7XG4gICAgfVxuICAgIF9zbGlkZShvcmRlciwgZWxlbWVudCA9IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2dldEFjdGl2ZSgpO1xuICAgICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFQ7XG4gICAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQodGhpcy5fZ2V0SXRlbXMoKSwgYWN0aXZlRWxlbWVudCwgaXNOZXh0LCB0aGlzLl9jb25maWcud3JhcCk7XG4gICAgICBpZiAobmV4dEVsZW1lbnQgPT09IGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudCk7XG4gICAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSBldmVudE5hbWUgPT4ge1xuICAgICAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgZXZlbnROYW1lLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgICAgZGlyZWN0aW9uOiB0aGlzLl9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSxcbiAgICAgICAgICBmcm9tOiB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudCksXG4gICAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgc2xpZGVFdmVudCA9IHRyaWdnZXJFdmVudChFVkVOVF9TTElERSk7XG4gICAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICAgIC8vIHRvZG86IGNoYW5nZSB0ZXN0cyB0aGF0IHVzZSBlbXB0eSBkaXZzIHRvIGF2b2lkIHRoaXMgY2hlY2tcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNDeWNsaW5nID0gQm9vbGVhbih0aGlzLl9pbnRlcnZhbCk7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChuZXh0RWxlbWVudEluZGV4KTtcbiAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBuZXh0RWxlbWVudDtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9TVEFSVCA6IENMQVNTX05BTUVfRU5EO1xuICAgICAgY29uc3Qgb3JkZXJDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX05FWFQgOiBDTEFTU19OQU1FX1BSRVY7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKTtcbiAgICAgIHJlZmxvdyhuZXh0RWxlbWVudCk7XG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGRpcmVjdGlvbmFsQ2xhc3NOYW1lLCBvcmRlckNsYXNzTmFtZSk7XG4gICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMik7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSQyLCBvcmRlckNsYXNzTmFtZSwgZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdHJpZ2dlckV2ZW50KEVWRU5UX1NMSUQpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgYWN0aXZlRWxlbWVudCwgdGhpcy5faXNBbmltYXRlZCgpKTtcbiAgICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgICAgdGhpcy5jeWNsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBfaXNBbmltYXRlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NMSURFKTtcbiAgICB9XG4gICAgX2dldEFjdGl2ZSgpIHtcbiAgICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KTtcbiAgICB9XG4gICAgX2dldEl0ZW1zKCkge1xuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTSwgdGhpcy5fZWxlbWVudCk7XG4gICAgfVxuICAgIF9jbGVhckludGVydmFsKCkge1xuICAgICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIF9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikge1xuICAgICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9QUkVWIDogT1JERVJfTkVYVDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVY7XG4gICAgfVxuICAgIF9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSB7XG4gICAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fTEVGVCA6IERJUkVDVElPTl9SSUdIVDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgZGF0YS50byhjb25maWcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ1LCBTRUxFQ1RPUl9EQVRBX1NMSURFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpO1xuICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ0FST1VTRUwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2Fyb3VzZWwgPSBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldCk7XG4gICAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJyk7XG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIGNhcm91c2VsLnRvKHNsaWRlSW5kZXgpO1xuICAgICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUodGhpcywgJ3NsaWRlJykgPT09ICduZXh0Jykge1xuICAgICAgY2Fyb3VzZWwubmV4dCgpO1xuICAgICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2Fyb3VzZWwucHJldigpO1xuICAgIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKCk7XG4gIH0pO1xuICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJJDMsICgpID0+IHtcbiAgICBjb25zdCBjYXJvdXNlbHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfUklERSk7XG4gICAgZm9yIChjb25zdCBjYXJvdXNlbCBvZiBjYXJvdXNlbHMpIHtcbiAgICAgIENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UoY2Fyb3VzZWwpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oQ2Fyb3VzZWwpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgY29sbGFwc2UuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSRiID0gJ2NvbGxhcHNlJztcbiAgY29uc3QgREFUQV9LRVkkNyA9ICdicy5jb2xsYXBzZSc7XG4gIGNvbnN0IEVWRU5UX0tFWSQ3ID0gYC4ke0RBVEFfS0VZJDd9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZJDQgPSAnLmRhdGEtYXBpJztcbiAgY29uc3QgRVZFTlRfU0hPVyQ2ID0gYHNob3cke0VWRU5UX0tFWSQ3fWA7XG4gIGNvbnN0IEVWRU5UX1NIT1dOJDYgPSBgc2hvd24ke0VWRU5UX0tFWSQ3fWA7XG4gIGNvbnN0IEVWRU5UX0hJREUkNiA9IGBoaWRlJHtFVkVOVF9LRVkkN31gO1xuICBjb25zdCBFVkVOVF9ISURERU4kNiA9IGBoaWRkZW4ke0VWRU5UX0tFWSQ3fWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDQgPSBgY2xpY2ske0VWRU5UX0tFWSQ3fSR7REFUQV9BUElfS0VZJDR9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDcgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnO1xuICBjb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZyc7XG4gIGNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCc7XG4gIGNvbnN0IENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOID0gYDpzY29wZSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfWA7XG4gIGNvbnN0IENMQVNTX05BTUVfSE9SSVpPTlRBTCA9ICdjb2xsYXBzZS1ob3Jpem9udGFsJztcbiAgY29uc3QgV0lEVEggPSAnd2lkdGgnO1xuICBjb25zdCBIRUlHSFQgPSAnaGVpZ2h0JztcbiAgY29uc3QgU0VMRUNUT1JfQUNUSVZFUyA9ICcuY29sbGFwc2Uuc2hvdywgLmNvbGxhcHNlLmNvbGxhcHNpbmcnO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0ID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJdJztcbiAgY29uc3QgRGVmYXVsdCRhID0ge1xuICAgIHBhcmVudDogbnVsbCxcbiAgICB0b2dnbGU6IHRydWVcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkYSA9IHtcbiAgICBwYXJlbnQ6ICcobnVsbHxlbGVtZW50KScsXG4gICAgdG9nZ2xlOiAnYm9vbGVhbidcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBDb2xsYXBzZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gW107XG4gICAgICBjb25zdCB0b2dnbGVMaXN0ID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0KTtcbiAgICAgIGZvciAoY29uc3QgZWxlbSBvZiB0b2dnbGVMaXN0KSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3JFbmdpbmUuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKTtcbiAgICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpLmZpbHRlcihmb3VuZEVsZW1lbnQgPT4gZm91bmRFbGVtZW50ID09PSB0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2luaXRpYWxpemVDaGlsZHJlbigpO1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksIHRoaXMuX2lzU2hvd24oKSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCRhO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJGE7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJGI7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgdG9nZ2xlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCB0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGFjdGl2ZUNoaWxkcmVuID0gW107XG5cbiAgICAgIC8vIGZpbmQgYWN0aXZlIGNoaWxkcmVuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgICBhY3RpdmVDaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9BQ1RJVkVTKS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50KS5tYXAoZWxlbWVudCA9PiBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHtcbiAgICAgICAgICB0b2dnbGU6IGZhbHNlXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIGlmIChhY3RpdmVDaGlsZHJlbi5sZW5ndGggJiYgYWN0aXZlQ2hpbGRyZW5bMF0uX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVyQ2KTtcbiAgICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBhY3RpdmVJbnN0YW5jZSBvZiBhY3RpdmVDaGlsZHJlbikge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9XG4gICAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMDtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksIHRydWUpO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1ckNyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiQ2KTtcbiAgICAgIH07XG4gICAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpO1xuICAgICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWA7XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDYpO1xuICAgICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGA7XG4gICAgICByZWZsb3codGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1ckNyk7XG4gICAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlckFycmF5KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRyaWdnZXIpO1xuICAgICAgICBpZiAoZWxlbWVudCAmJiAhdGhpcy5faXNTaG93bihlbGVtZW50KSkge1xuICAgICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhbdHJpZ2dlcl0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOJDYpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSk7XG4gICAgfVxuICAgIF9pc1Nob3duKGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDcpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpOyAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlc1xuICAgICAgY29uZmlnLnBhcmVudCA9IGdldEVsZW1lbnQoY29uZmlnLnBhcmVudCk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfZ2V0RGltZW5zaW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfSE9SSVpPTlRBTCkgPyBXSURUSCA6IEhFSUdIVDtcbiAgICB9XG4gICAgX2luaXRpYWxpemVDaGlsZHJlbigpIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0KTtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaGlsZHJlbikge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhbZWxlbWVudF0sIHRoaXMuX2lzU2hvd24oc2VsZWN0ZWQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmQoQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4sIHRoaXMuX2NvbmZpZy5wYXJlbnQpO1xuICAgICAgLy8gcmVtb3ZlIGNoaWxkcmVuIGlmIGdyZWF0ZXIgZGVwdGhcbiAgICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCB0aGlzLl9jb25maWcucGFyZW50KS5maWx0ZXIoZWxlbWVudCA9PiAhY2hpbGRyZW4uaW5jbHVkZXMoZWxlbWVudCkpO1xuICAgIH1cbiAgICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRyaWdnZXJBcnJheSwgaXNPcGVuKSB7XG4gICAgICBpZiAoIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRyaWdnZXJBcnJheSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9DT0xMQVBTRUQsICFpc09wZW4pO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGlzT3Blbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIGNvbnN0IF9jb25maWcgPSB7fTtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNCwgU0VMRUNUT1JfREFUQV9UT0dHTEUkNCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnIHx8IGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IodGhpcykpIHtcbiAgICAgIENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwge1xuICAgICAgICB0b2dnbGU6IGZhbHNlXG4gICAgICB9KS50b2dnbGUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKENvbGxhcHNlKTtcblxuICB2YXIgdG9wID0gJ3RvcCc7XG4gIHZhciBib3R0b20gPSAnYm90dG9tJztcbiAgdmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbiAgdmFyIGxlZnQgPSAnbGVmdCc7XG4gIHZhciBhdXRvID0gJ2F1dG8nO1xuICB2YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbiAgdmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbiAgdmFyIGVuZCA9ICdlbmQnO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG4gIHZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG4gIHZhciBwb3BwZXIgPSAncG9wcGVyJztcbiAgdmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xuICB2YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG4gIH0sIFtdKTtcbiAgdmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xuICB9LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbiAgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG4gIHZhciByZWFkID0gJ3JlYWQnO1xuICB2YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbiAgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG4gIHZhciBtYWluID0gJ21haW4nO1xuICB2YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxuICB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuICB2YXIgd3JpdGUgPSAnd3JpdGUnO1xuICB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbiAgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdO1xuXG4gIGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG5cbiAgICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICAgIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAgIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gICAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xuICB9XG5cbiAgLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG4gIGZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgICAgLy8gZWZmZWN0aXZlIHdheSB0byBhcHBseSBzdHlsZXMgdG8gYW4gSFRNTEVsZW1lbnRcbiAgICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVmZmVjdCQyKF9yZWYyKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGU7XG4gICAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgICBwb3BwZXI6IHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgIG1hcmdpbjogJzAnXG4gICAgICB9LFxuICAgICAgYXJyb3c6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgIH0sXG4gICAgICByZWZlcmVuY2U6IHt9XG4gICAgfTtcbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICAgIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cblxuICAgICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSAnJztcbiAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgYXBwbHlTdHlsZXMkMSA9IHtcbiAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICd3cml0ZScsXG4gICAgZm46IGFwcGx5U3R5bGVzLFxuICAgIGVmZmVjdDogZWZmZWN0JDIsXG4gICAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIH1cblxuICB2YXIgbWF4ID0gTWF0aC5tYXg7XG4gIHZhciBtaW4gPSBNYXRoLm1pbjtcbiAgdmFyIHJvdW5kID0gTWF0aC5yb3VuZDtcblxuICBmdW5jdGlvbiBnZXRVQVN0cmluZygpIHtcbiAgICB2YXIgdWFEYXRhID0gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG5cbiAgICBpZiAodWFEYXRhICE9IG51bGwgJiYgdWFEYXRhLmJyYW5kcykge1xuICAgICAgcmV0dXJuIHVhRGF0YS5icmFuZHMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmJyYW5kICsgXCIvXCIgKyBpdGVtLnZlcnNpb247XG4gICAgICB9KS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xheW91dFZpZXdwb3J0KCkge1xuICAgIHJldHVybiAhL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChnZXRVQVN0cmluZygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUsIGlzRml4ZWRTdHJhdGVneSkge1xuICAgIGlmIChpbmNsdWRlU2NhbGUgPT09IHZvaWQgMCkge1xuICAgICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzRml4ZWRTdHJhdGVneSA9PT0gdm9pZCAwKSB7XG4gICAgICBpc0ZpeGVkU3RyYXRlZ3kgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHNjYWxlWCA9IDE7XG4gICAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgICBpZiAoaW5jbHVkZVNjYWxlICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIHNjYWxlWCA9IGVsZW1lbnQub2Zmc2V0V2lkdGggPiAwID8gcm91bmQoY2xpZW50UmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDEgOiAxO1xuICAgICAgc2NhbGVZID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgPiAwID8gcm91bmQoY2xpZW50UmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMSA6IDE7XG4gICAgfVxuXG4gICAgdmFyIF9yZWYgPSBpc0VsZW1lbnQoZWxlbWVudCkgPyBnZXRXaW5kb3coZWxlbWVudCkgOiB3aW5kb3csXG4gICAgICAgIHZpc3VhbFZpZXdwb3J0ID0gX3JlZi52aXN1YWxWaWV3cG9ydDtcblxuICAgIHZhciBhZGRWaXN1YWxPZmZzZXRzID0gIWlzTGF5b3V0Vmlld3BvcnQoKSAmJiBpc0ZpeGVkU3RyYXRlZ3k7XG4gICAgdmFyIHggPSAoY2xpZW50UmVjdC5sZWZ0ICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0IDogMCkpIC8gc2NhbGVYO1xuICAgIHZhciB5ID0gKGNsaWVudFJlY3QudG9wICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3AgOiAwKSkgLyBzY2FsZVk7XG4gICAgdmFyIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aCAvIHNjYWxlWDtcbiAgICB2YXIgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQgLyBzY2FsZVk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgdG9wOiB5LFxuICAgICAgcmlnaHQ6IHggKyB3aWR0aCxcbiAgICAgIGJvdHRvbTogeSArIGhlaWdodCxcbiAgICAgIGxlZnQ6IHgsXG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH07XG4gIH1cblxuICAvLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbiAgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gICAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxuICAgIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gICAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgICAgeTogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gICAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gICAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KSB7XG4gICAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgICBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgfSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuICAvLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcblxuXG4gIGZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gICAgdmFyIGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVQVN0cmluZygpKTtcbiAgICB2YXIgaXNJRSA9IC9UcmlkZW50L2kudGVzdChnZXRVQVN0cmluZygpKTtcblxuICAgIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpO1xuXG4gICAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGlzU2hhZG93Um9vdChjdXJyZW50Tm9kZSkpIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuaG9zdDtcbiAgICB9XG5cbiAgICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZSQxKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuICAvLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbiAgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gICAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUkMShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZSQxKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xuICB9XG5cbiAgZnVuY3Rpb24gd2l0aGluKG1pbiQxLCB2YWx1ZSwgbWF4JDEpIHtcbiAgICByZXR1cm4gbWF4KG1pbiQxLCBtaW4odmFsdWUsIG1heCQxKSk7XG4gIH1cbiAgZnVuY3Rpb24gd2l0aGluTWF4Q2xhbXAobWluLCB2YWx1ZSwgbWF4KSB7XG4gICAgdmFyIHYgPSB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KTtcbiAgICByZXR1cm4gdiA+IG1heCA/IG1heCA6IHY7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc2hNYXAsIGtleSkge1xuICAgICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgICByZXR1cm4gaGFzaE1hcDtcbiAgICB9LCB7fSk7XG4gIH1cblxuICB2YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gICAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgICB9KSkgOiBwYWRkaW5nO1xuICAgIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gICAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gICAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gICAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICAgIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICAgIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICAgIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAgIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICAgIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICAgIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICAgIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICAgIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICAgIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVmZmVjdCQxKF9yZWYyKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICAgIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gICAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gICAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IGFycm93JDEgPSB7XG4gICAgbmFtZTogJ2Fycm93JyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnbWFpbicsXG4gICAgZm46IGFycm93LFxuICAgIGVmZmVjdDogZWZmZWN0JDEsXG4gICAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICAgIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuICB9XG5cbiAgdmFyIHVuc2V0U2lkZXMgPSB7XG4gICAgdG9wOiAnYXV0bycsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBib3R0b206ICdhdXRvJyxcbiAgICBsZWZ0OiAnYXV0bydcbiAgfTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbiAgLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbiAgLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbiAgZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZikge1xuICAgIHZhciB4ID0gX3JlZi54LFxuICAgICAgICB5ID0gX3JlZi55O1xuICAgIHZhciB3aW4gPSB3aW5kb3c7XG4gICAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHJvdW5kKHggKiBkcHIpIC8gZHByIHx8IDAsXG4gICAgICB5OiByb3VuZCh5ICogZHByKSAvIGRwciB8fCAwXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICAgIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICAgIHZhcmlhdGlvbiA9IF9yZWYyLnZhcmlhdGlvbixcbiAgICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzLFxuICAgICAgICBpc0ZpeGVkID0gX3JlZjIuaXNGaXhlZDtcbiAgICB2YXIgX29mZnNldHMkeCA9IG9mZnNldHMueCxcbiAgICAgICAgeCA9IF9vZmZzZXRzJHggPT09IHZvaWQgMCA/IDAgOiBfb2Zmc2V0cyR4LFxuICAgICAgICBfb2Zmc2V0cyR5ID0gb2Zmc2V0cy55LFxuICAgICAgICB5ID0gX29mZnNldHMkeSA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHk7XG5cbiAgICB2YXIgX3JlZjMgPSB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfSkgOiB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH07XG5cbiAgICB4ID0gX3JlZjMueDtcbiAgICB5ID0gX3JlZjMueTtcbiAgICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgICB2YXIgc2lkZVggPSBsZWZ0O1xuICAgIHZhciBzaWRlWSA9IHRvcDtcbiAgICB2YXIgd2luID0gd2luZG93O1xuXG4gICAgaWYgKGFkYXB0aXZlKSB7XG4gICAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlJDEob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiYgcG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgICAgfVxuICAgICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCB8fCAocGxhY2VtZW50ID09PSBsZWZ0IHx8IHBsYWNlbWVudCA9PT0gcmlnaHQpICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICAgIHNpZGVZID0gYm90dG9tO1xuICAgICAgICB2YXIgb2Zmc2V0WSA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LmhlaWdodCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgICBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF07XG4gICAgICAgIHkgLT0gb2Zmc2V0WSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCAocGxhY2VtZW50ID09PSB0b3AgfHwgcGxhY2VtZW50ID09PSBib3R0b20pICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICAgIHNpZGVYID0gcmlnaHQ7XG4gICAgICAgIHZhciBvZmZzZXRYID0gaXNGaXhlZCAmJiBvZmZzZXRQYXJlbnQgPT09IHdpbiAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQud2lkdGggOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgICAgb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF07XG4gICAgICAgIHggLT0gb2Zmc2V0WCAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICAgIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gICAgdmFyIF9yZWY0ID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIoe1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9KSA6IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTtcblxuICAgIHggPSBfcmVmNC54O1xuICAgIHkgPSBfcmVmNC55O1xuXG4gICAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8PSAxID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjUpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmNS5zdGF0ZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWY1Lm9wdGlvbnM7XG4gICAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXG4gICAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgICAgdmFyaWF0aW9uOiBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KSxcbiAgICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb24sXG4gICAgICBpc0ZpeGVkOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnXG4gICAgfTtcblxuICAgIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgICB9KSkpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgICB9KSkpO1xuICAgIH1cblxuICAgIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgICB9KTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBjb21wdXRlU3R5bGVzJDEgPSB7XG4gICAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gICAgZm46IGNvbXB1dGVTdHlsZXMsXG4gICAgZGF0YToge31cbiAgfTtcblxuICB2YXIgcGFzc2l2ZSA9IHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH07XG5cbiAgZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gICAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gICAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICAgIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzaXplKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfVxuICAgIH07XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB7XG4gICAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnd3JpdGUnLFxuICAgIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICAgIGVmZmVjdDogZWZmZWN0LFxuICAgIGRhdGE6IHt9XG4gIH07XG5cbiAgdmFyIGhhc2gkMSA9IHtcbiAgICBsZWZ0OiAncmlnaHQnLFxuICAgIHJpZ2h0OiAnbGVmdCcsXG4gICAgYm90dG9tOiAndG9wJyxcbiAgICB0b3A6ICdib3R0b20nXG4gIH07XG4gIGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgICByZXR1cm4gaGFzaCQxW21hdGNoZWRdO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGhhc2ggPSB7XG4gICAgc3RhcnQ6ICdlbmQnLFxuICAgIGVuZDogJ3N0YXJ0J1xuICB9O1xuICBmdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICAgIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gICAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gICAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAgIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAgIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgICAvLyBhbnl3YXkuXG4gICAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICAgIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICAgIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICAgIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgICB2YXIgeCA9IDA7XG4gICAgdmFyIHkgPSAwO1xuXG4gICAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgICAgdmFyIGxheW91dFZpZXdwb3J0ID0gaXNMYXlvdXRWaWV3cG9ydCgpO1xuXG4gICAgICBpZiAobGF5b3V0Vmlld3BvcnQgfHwgIWxheW91dFZpZXdwb3J0ICYmIHN0cmF0ZWd5ID09PSAnZml4ZWQnKSB7XG4gICAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgICAgeTogeVxuICAgIH07XG4gIH1cblxuICAvLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbiAgZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gICAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICAgIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gICAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlJDEoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAgIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCksXG4gICAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gICAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICAgIGlmIChbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmRleE9mKGdldE5vZGVOYW1lKG5vZGUpKSA+PSAwKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG4gIH1cblxuICAvKlxuICBnaXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xuICB1bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xuICB0bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG4gIHJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4gICovXG5cbiAgZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICAgIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgICBsaXN0ID0gW107XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcbiAgICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gICAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gICAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgICAgbGVmdDogcmVjdC54LFxuICAgICAgdG9wOiByZWN0LnksXG4gICAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgZmFsc2UsIHN0cmF0ZWd5ID09PSAnZml4ZWQnKTtcbiAgICByZWN0LnRvcCA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gICAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICAgIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgICByZWN0LnkgPSByZWN0LnRvcDtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkge1xuICAgIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkpIDogaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbiAgfSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuICAvLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbiAgLy8gYGluaXRpYWxgXG5cblxuICBmdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICAgIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gICAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICAgIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgICB9KTtcbiAgfSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4gIC8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG4gIGZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSkge1xuICAgIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KTtcbiAgICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgICByZXR1cm4gYWNjUmVjdDtcbiAgICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkpO1xuICAgIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICAgIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICAgIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgICByZXR1cm4gY2xpcHBpbmdSZWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICAgIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICAgIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gICAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gICAgdmFyIG9mZnNldHM7XG5cbiAgICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICAgIGNhc2UgdG9wOlxuICAgICAgICBvZmZzZXRzID0ge1xuICAgICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBib3R0b206XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgcmlnaHQ6XG4gICAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgICAgeTogY29tbW9uWVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBsZWZ0OlxuICAgICAgICBvZmZzZXRzID0ge1xuICAgICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgICB5OiBjb21tb25ZXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBvZmZzZXRzID0ge1xuICAgICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGVuZDpcbiAgICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRzO1xuICB9XG5cbiAgZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCxcbiAgICAgICAgX29wdGlvbnMkc3RyYXRlZ3kgPSBfb3B0aW9ucy5zdHJhdGVneSxcbiAgICAgICAgc3RyYXRlZ3kgPSBfb3B0aW9ucyRzdHJhdGVneSA9PT0gdm9pZCAwID8gc3RhdGUuc3RyYXRlZ3kgOiBfb3B0aW9ucyRzdHJhdGVneSxcbiAgICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gICAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICAgIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW2FsdEJvdW5kYXJ5ID8gYWx0Q29udGV4dCA6IGVsZW1lbnRDb250ZXh0XTtcbiAgICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSk7XG4gICAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qoc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlKTtcbiAgICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgfSk7XG4gICAgdmFyIHBvcHBlckNsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QsIHBvcHBlck9mZnNldHMpKTtcbiAgICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgICB2YXIgb3ZlcmZsb3dPZmZzZXRzID0ge1xuICAgICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICAgIGxlZnQ6IGNsaXBwaW5nQ2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudENsaWVudFJlY3QubGVmdCArIHBhZGRpbmdPYmplY3QubGVmdCxcbiAgICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgICB9O1xuICAgIHZhciBvZmZzZXREYXRhID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7IC8vIE9mZnNldHMgY2FuIGJlIGFwcGxpZWQgb25seSB0byB0aGUgcG9wcGVyIGVsZW1lbnRcblxuICAgIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgICBPYmplY3Qua2V5cyhvdmVyZmxvd09mZnNldHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgICAgb3ZlcmZsb3dPZmZzZXRzW2tleV0gKz0gb2Zmc2V0W2F4aXNdICogbXVsdGlwbHk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3ZlcmZsb3dPZmZzZXRzO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gcGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gICAgdmFyIHBsYWNlbWVudHMkMSA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICAgIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gICAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cyQxLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICAgIH0pO1xuXG4gICAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzJDE7XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICAgIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgICBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgPSBvcHRpb25zLmZhbGxiYWNrUGxhY2VtZW50cyxcbiAgICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGZsaXBWYXJpYXRpbyxcbiAgICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gICAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICAgIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpO1xuICAgIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gICAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICAgIHZhciBwbGFjZW1lbnRzID0gW3ByZWZlcnJlZFBsYWNlbWVudF0uY29uY2F0KGZhbGxiYWNrUGxhY2VtZW50cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICAgIGZsaXBWYXJpYXRpb25zOiBmbGlwVmFyaWF0aW9ucyxcbiAgICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICAgIH0pIDogcGxhY2VtZW50KTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gICAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gICAgdmFyIGNoZWNrc01hcCA9IG5ldyBNYXAoKTtcbiAgICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgICAgdmFyIGlzU3RhcnRWYXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gc3RhcnQ7XG4gICAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgICAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgICAgfSk7XG4gICAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgICAgbWFpblZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgICAgdmFyIGNoZWNrcyA9IFtdO1xuXG4gICAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICB9KSkge1xuICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gICAgfVxuXG4gICAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgICB2YXIgbnVtYmVyT2ZDaGVja3MgPSBmbGlwVmFyaWF0aW9ucyA/IDMgOiAxO1xuXG4gICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgICAgdmFyIGNoZWNrcyA9IGNoZWNrc01hcC5nZXQocGxhY2VtZW50KTtcblxuICAgICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBfaSA9IG51bWJlck9mQ2hlY2tzOyBfaSA+IDA7IF9pLS0pIHtcbiAgICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgICB9XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgZmxpcCQxID0ge1xuICAgIG5hbWU6ICdmbGlwJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAnbWFpbicsXG4gICAgZm46IGZsaXAsXG4gICAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgICBkYXRhOiB7XG4gICAgICBfc2tpcDogZmFsc2VcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAgIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICAgIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICAgIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gICAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICAgIH0pO1xuICAgIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICAgIH0pO1xuICAgIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gICAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gICAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gICAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgICB9O1xuICAgIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJzogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgICB9KTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuICBjb25zdCBoaWRlJDEgPSB7XG4gICAgbmFtZTogJ2hpZGUnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdtYWluJyxcbiAgICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICAgIGZuOiBoaWRlXG4gIH07XG5cbiAgZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0KSB7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gICAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gICAgdmFyIF9yZWYgPSB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gb2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICAgIH0pKSA6IG9mZnNldCxcbiAgICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuICAgICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gICAgZGlzdGFuY2UgPSAoZGlzdGFuY2UgfHwgMCkgKiBpbnZlcnREaXN0YW5jZTtcbiAgICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgICB4OiBkaXN0YW5jZSxcbiAgICAgIHk6IHNraWRkaW5nXG4gICAgfSA6IHtcbiAgICAgIHg6IHNraWRkaW5nLFxuICAgICAgeTogZGlzdGFuY2VcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICAgIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICAgIHkgPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueTtcblxuICAgIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG4gICAgfVxuXG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3Qgb2Zmc2V0JDEgPSB7XG4gICAgbmFtZTogJ29mZnNldCcsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBwaGFzZTogJ21haW4nLFxuICAgIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgICBmbjogb2Zmc2V0XG4gIH07XG5cbiAgZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAgIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gICAgfSk7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbiAgY29uc3QgcG9wcGVyT2Zmc2V0cyQxID0ge1xuICAgIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHBoYXNlOiAncmVhZCcsXG4gICAgZm46IHBvcHBlck9mZnNldHMsXG4gICAgZGF0YToge31cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAgIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICAgIHRldGhlciA9IF9vcHRpb25zJHRldGhlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHRldGhlcixcbiAgICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gICAgfSk7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gICAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICAgIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICAgIHZhciBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICAgIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICAgIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICAgIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICAgIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gICAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICAgIHZhciBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0VmFsdWUgPT09ICdudW1iZXInID8ge1xuICAgICAgbWFpbkF4aXM6IHRldGhlck9mZnNldFZhbHVlLFxuICAgICAgYWx0QXhpczogdGV0aGVyT2Zmc2V0VmFsdWVcbiAgICB9IDogT2JqZWN0LmFzc2lnbih7XG4gICAgICBtYWluQXhpczogMCxcbiAgICAgIGFsdEF4aXM6IDBcbiAgICB9LCB0ZXRoZXJPZmZzZXRWYWx1ZSk7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyU3RhdGUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF0gOiBudWxsO1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuXG4gICAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQ7XG5cbiAgICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICAgIHZhciBtaW4kMSA9IG9mZnNldCArIG92ZXJmbG93W21haW5TaWRlXTtcbiAgICAgIHZhciBtYXgkMSA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XG4gICAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMFxuICAgICAgfTtcbiAgICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcbiAgICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgICAgdmFyIGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuICAgICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgICB2YXIgbWF4T2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gLXJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgKyBhZGRpdGl2ZSArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJCA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbbWFpbkF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkIDogMDtcbiAgICAgIHZhciB0ZXRoZXJNaW4gPSBvZmZzZXQgKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgICAgdmFyIHRldGhlck1heCA9IG9mZnNldCArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG4gICAgICB2YXIgcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1pbihtaW4kMSwgdGV0aGVyTWluKSA6IG1pbiQxLCBvZmZzZXQsIHRldGhlciA/IG1heChtYXgkMSwgdGV0aGVyTWF4KSA6IG1heCQxKTtcbiAgICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDI7XG5cbiAgICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICAgIHZhciBfbGVuID0gYWx0QXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICAgIHZhciBpc09yaWdpblNpZGUgPSBbdG9wLCBsZWZ0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAgICAgdmFyIF9vZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJDIgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW2FsdEF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkMiA6IDA7XG5cbiAgICAgIHZhciBfdGV0aGVyTWluID0gaXNPcmlnaW5TaWRlID8gX21pbiA6IF9vZmZzZXQgLSByZWZlcmVuY2VSZWN0W19sZW5dIC0gcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXM7XG5cbiAgICAgIHZhciBfdGV0aGVyTWF4ID0gaXNPcmlnaW5TaWRlID8gX29mZnNldCArIHJlZmVyZW5jZVJlY3RbX2xlbl0gKyBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcyA6IF9tYXg7XG5cbiAgICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gdGV0aGVyICYmIGlzT3JpZ2luU2lkZSA/IHdpdGhpbk1heENsYW1wKF90ZXRoZXJNaW4sIF9vZmZzZXQsIF90ZXRoZXJNYXgpIDogd2l0aGluKHRldGhlciA/IF90ZXRoZXJNaW4gOiBfbWluLCBfb2Zmc2V0LCB0ZXRoZXIgPyBfdGV0aGVyTWF4IDogX21heCk7XG5cbiAgICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICAgIH1cblxuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG4gIGNvbnN0IHByZXZlbnRPdmVyZmxvdyQxID0ge1xuICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcGhhc2U6ICdtYWluJyxcbiAgICBmbjogcHJldmVudE92ZXJmbG93LFxuICAgIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudFNjYWxlZChlbGVtZW50KSB7XG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMTtcbiAgICB2YXIgc2NhbGVZID0gcm91bmQocmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMTtcbiAgICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbiAgfSAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4gIC8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuXG4gIGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICAgIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gICAgdmFyIG9mZnNldFBhcmVudElzU2NhbGVkID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGlzRWxlbWVudFNjYWxlZChvZmZzZXRQYXJlbnQpO1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50SXNTY2FsZWQsIGlzRml4ZWQpO1xuICAgIHZhciBzY3JvbGwgPSB7XG4gICAgICBzY3JvbGxMZWZ0OiAwLFxuICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgfTtcbiAgICB2YXIgb2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcblxuICAgIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCwgdHJ1ZSk7XG4gICAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gICAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gICAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICAgIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gICAgfVxuXG4gICAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gICAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gICAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgICB9KSk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgICB2YXIgcGVuZGluZztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGVuZGluZztcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gICAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSwgY3VycmVudC5kYXRhKVxuICAgICAgfSkgOiBjdXJyZW50O1xuICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICB9LCB7fSk7IC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgIG1vZGlmaWVyczogW10sXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbiAgfTtcblxuICBmdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICAgIHN0eWxlczoge31cbiAgICAgIH07XG4gICAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhzZXRPcHRpb25zQWN0aW9uKSB7XG4gICAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2V0T3B0aW9uc0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHNldE9wdGlvbnNBY3Rpb24oc3RhdGUub3B0aW9ucykgOiBzZXRPcHRpb25zQWN0aW9uO1xuICAgICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgICAgfSk7IC8vIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBtb2RpZmllcnMgc28gdGhhdCB0aGUgY29uc3VtZXIgd2lsbCBnZXQgd2FybmVkXG5cbiAgICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFN5bmMgdXBkYXRlIOKAkyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgICAgLy8gbG9naWMuXG4gICAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSDigJMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgICAvLyBvbmUuXG5cbiAgICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgICAgICAgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJG9wdGlvbnMsXG4gICAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdDtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG4gIHZhciBjcmVhdGVQb3BwZXIkMiA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG4gIHZhciBkZWZhdWx0TW9kaWZpZXJzJDEgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxXTtcbiAgdmFyIGNyZWF0ZVBvcHBlciQxID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gICAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVycyQxXG4gIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbiAgdmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxLCBvZmZzZXQkMSwgZmxpcCQxLCBwcmV2ZW50T3ZlcmZsb3ckMSwgYXJyb3ckMSwgaGlkZSQxXTtcbiAgdmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICAgIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbiAgfSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuICBjb25zdCBQb3BwZXIgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSgvKiNfX1BVUkVfXyovT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgYWZ0ZXJNYWluLFxuICAgIGFmdGVyUmVhZCxcbiAgICBhZnRlcldyaXRlLFxuICAgIGFwcGx5U3R5bGVzOiBhcHBseVN0eWxlcyQxLFxuICAgIGFycm93OiBhcnJvdyQxLFxuICAgIGF1dG8sXG4gICAgYmFzZVBsYWNlbWVudHMsXG4gICAgYmVmb3JlTWFpbixcbiAgICBiZWZvcmVSZWFkLFxuICAgIGJlZm9yZVdyaXRlLFxuICAgIGJvdHRvbSxcbiAgICBjbGlwcGluZ1BhcmVudHMsXG4gICAgY29tcHV0ZVN0eWxlczogY29tcHV0ZVN0eWxlcyQxLFxuICAgIGNyZWF0ZVBvcHBlcixcbiAgICBjcmVhdGVQb3BwZXJCYXNlOiBjcmVhdGVQb3BwZXIkMixcbiAgICBjcmVhdGVQb3BwZXJMaXRlOiBjcmVhdGVQb3BwZXIkMSxcbiAgICBkZXRlY3RPdmVyZmxvdyxcbiAgICBlbmQsXG4gICAgZXZlbnRMaXN0ZW5lcnMsXG4gICAgZmxpcDogZmxpcCQxLFxuICAgIGhpZGU6IGhpZGUkMSxcbiAgICBsZWZ0LFxuICAgIG1haW4sXG4gICAgbW9kaWZpZXJQaGFzZXMsXG4gICAgb2Zmc2V0OiBvZmZzZXQkMSxcbiAgICBwbGFjZW1lbnRzLFxuICAgIHBvcHBlcixcbiAgICBwb3BwZXJHZW5lcmF0b3IsXG4gICAgcG9wcGVyT2Zmc2V0czogcG9wcGVyT2Zmc2V0cyQxLFxuICAgIHByZXZlbnRPdmVyZmxvdzogcHJldmVudE92ZXJmbG93JDEsXG4gICAgcmVhZCxcbiAgICByZWZlcmVuY2UsXG4gICAgcmlnaHQsXG4gICAgc3RhcnQsXG4gICAgdG9wLFxuICAgIHZhcmlhdGlvblBsYWNlbWVudHMsXG4gICAgdmlld3BvcnQsXG4gICAgd3JpdGVcbiAgfSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KSk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBkcm9wZG93bi5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJGEgPSAnZHJvcGRvd24nO1xuICBjb25zdCBEQVRBX0tFWSQ2ID0gJ2JzLmRyb3Bkb3duJztcbiAgY29uc3QgRVZFTlRfS0VZJDYgPSBgLiR7REFUQV9LRVkkNn1gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkkMyA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBFU0NBUEVfS0VZJDIgPSAnRXNjYXBlJztcbiAgY29uc3QgVEFCX0tFWSQxID0gJ1RhYic7XG4gIGNvbnN0IEFSUk9XX1VQX0tFWSQxID0gJ0Fycm93VXAnO1xuICBjb25zdCBBUlJPV19ET1dOX0tFWSQxID0gJ0Fycm93RG93bic7XG4gIGNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDI7IC8vIE1vdXNlRXZlbnQuYnV0dG9uIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiwgdXN1YWxseSB0aGUgcmlnaHQgYnV0dG9uXG5cbiAgY29uc3QgRVZFTlRfSElERSQ1ID0gYGhpZGUke0VWRU5UX0tFWSQ2fWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQ1ID0gYGhpZGRlbiR7RVZFTlRfS0VZJDZ9YDtcbiAgY29uc3QgRVZFTlRfU0hPVyQ1ID0gYHNob3cke0VWRU5UX0tFWSQ2fWA7XG4gIGNvbnN0IEVWRU5UX1NIT1dOJDUgPSBgc2hvd24ke0VWRU5UX0tFWSQ2fWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDMgPSBgY2xpY2ske0VWRU5UX0tFWSQ2fSR7REFUQV9BUElfS0VZJDN9YDtcbiAgY29uc3QgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSA9IGBrZXlkb3duJHtFVkVOVF9LRVkkNn0ke0RBVEFfQVBJX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0tFWVVQX0RBVEFfQVBJID0gYGtleXVwJHtFVkVOVF9LRVkkNn0ke0RBVEFfQVBJX0tFWSQzfWA7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQ2ID0gJ3Nob3cnO1xuICBjb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnO1xuICBjb25zdCBDTEFTU19OQU1FX0RST1BFTkQgPSAnZHJvcGVuZCc7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUFNUQVJUID0gJ2Ryb3BzdGFydCc7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUiA9ICdkcm9wdXAtY2VudGVyJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIgPSAnZHJvcGRvd24tY2VudGVyJztcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUkMyA9ICdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOID0gYCR7U0VMRUNUT1JfREFUQV9UT0dHTEUkM30uJHtDTEFTU19OQU1FX1NIT1ckNn1gO1xuICBjb25zdCBTRUxFQ1RPUl9NRU5VID0gJy5kcm9wZG93bi1tZW51JztcbiAgY29uc3QgU0VMRUNUT1JfTkFWQkFSID0gJy5uYXZiYXInO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2JztcbiAgY29uc3QgU0VMRUNUT1JfVklTSUJMRV9JVEVNUyA9ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSc7XG4gIGNvbnN0IFBMQUNFTUVOVF9UT1AgPSBpc1JUTCgpID8gJ3RvcC1lbmQnIDogJ3RvcC1zdGFydCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9UT1BFTkQgPSBpc1JUTCgpID8gJ3RvcC1zdGFydCcgOiAndG9wLWVuZCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9CT1RUT00gPSBpc1JUTCgpID8gJ2JvdHRvbS1lbmQnIDogJ2JvdHRvbS1zdGFydCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9CT1RUT01FTkQgPSBpc1JUTCgpID8gJ2JvdHRvbS1zdGFydCcgOiAnYm90dG9tLWVuZCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9SSUdIVCA9IGlzUlRMKCkgPyAnbGVmdC1zdGFydCcgOiAncmlnaHQtc3RhcnQnO1xuICBjb25zdCBQTEFDRU1FTlRfTEVGVCA9IGlzUlRMKCkgPyAncmlnaHQtc3RhcnQnIDogJ2xlZnQtc3RhcnQnO1xuICBjb25zdCBQTEFDRU1FTlRfVE9QQ0VOVEVSID0gJ3RvcCc7XG4gIGNvbnN0IFBMQUNFTUVOVF9CT1RUT01DRU5URVIgPSAnYm90dG9tJztcbiAgY29uc3QgRGVmYXVsdCQ5ID0ge1xuICAgIGF1dG9DbG9zZTogdHJ1ZSxcbiAgICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gICAgZGlzcGxheTogJ2R5bmFtaWMnLFxuICAgIG9mZnNldDogWzAsIDJdLFxuICAgIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgICByZWZlcmVuY2U6ICd0b2dnbGUnXG4gIH07XG4gIGNvbnN0IERlZmF1bHRUeXBlJDkgPSB7XG4gICAgYXV0b0Nsb3NlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gICAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50fG9iamVjdCknXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlOyAvLyBkcm9wZG93biB3cmFwcGVyXG4gICAgICAvLyB0b2RvOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjMvZm9ybXMvaW5wdXQtZ3JvdXAvXG4gICAgICB0aGlzLl9tZW51ID0gU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fCBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTUVOVSwgdGhpcy5fcGFyZW50KTtcbiAgICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKCk7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkOTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkYTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICB0b2dnbGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNTaG93bigpID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKTtcbiAgICB9XG4gICAgc2hvdygpIHtcbiAgICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8IHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9O1xuICAgICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVyQ1LCByZWxhdGVkVGFyZ2V0KTtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jcmVhdGVQb3BwZXIoKTtcblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgIXRoaXMuX3BhcmVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpKSB7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgdGhpcy5fbWVudS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQ2KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckNik7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiQ1LCByZWxhdGVkVGFyZ2V0KTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfTtcbiAgICAgIHRoaXMuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KTtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKTtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUkNSwgcmVsYXRlZFRhcmdldCk7XG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ2KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInKTtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiQ1LCByZWxhdGVkVGFyZ2V0KTtcbiAgICB9XG4gICAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IHN1cGVyLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudCQxKGNvbmZpZy5yZWZlcmVuY2UpICYmIHR5cGVvZiBjb25maWcucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBQb3BwZXIgdmlydHVhbCBlbGVtZW50cyByZXF1aXJlIGEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZFxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke05BTUUkYS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9jcmVhdGVQb3BwZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKTtcbiAgICAgIH1cbiAgICAgIGxldCByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fcGFyZW50O1xuICAgICAgfSBlbHNlIGlmIChpc0VsZW1lbnQkMSh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gZ2V0RWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlO1xuICAgICAgfVxuICAgICAgY29uc3QgcG9wcGVyQ29uZmlnID0gdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKCk7XG4gICAgICB0aGlzLl9wb3BwZXIgPSBjcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgcG9wcGVyQ29uZmlnKTtcbiAgICB9XG4gICAgX2lzU2hvd24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgIH1cbiAgICBfZ2V0UGxhY2VtZW50KCkge1xuICAgICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9wYXJlbnQ7XG4gICAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUEVORCkpIHtcbiAgICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVDtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICAgIHJldHVybiBQTEFDRU1FTlRfTEVGVDtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSKSkge1xuICAgICAgICByZXR1cm4gUExBQ0VNRU5UX1RPUENFTlRFUjtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIpKSB7XG4gICAgICAgIHJldHVybiBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICAgIGNvbnN0IGlzRW5kID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9tZW51KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJzLXBvc2l0aW9uJykudHJpbSgpID09PSAnZW5kJztcbiAgICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9UT1BFTkQgOiBQTEFDRU1FTlRfVE9QO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX0JPVFRPTUVORCA6IFBMQUNFTUVOVF9CT1RUT007XG4gICAgfVxuICAgIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUikgIT09IG51bGw7XG4gICAgfVxuICAgIF9nZXRPZmZzZXQoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG9mZnNldFxuICAgICAgfSA9IHRoaXMuX2NvbmZpZztcbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgfVxuICAgIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH07XG5cbiAgICAgIC8vIERpc2FibGUgUG9wcGVyIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheSBvciBEcm9wZG93biBpcyBpbiBOYXZiYXJcbiAgICAgIGlmICh0aGlzLl9pbk5hdmJhciB8fCB0aGlzLl9jb25maWcuZGlzcGxheSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ3N0YXRpYycpOyAvLyB0b2RvOnY2IHJlbW92ZVxuICAgICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuICAgICAgICAuLi5leGVjdXRlKHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcsIFtkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuICAgICAgfTtcbiAgICB9XG4gICAgX3NlbGVjdE1lbnVJdGVtKHtcbiAgICAgIGtleSxcbiAgICAgIHRhcmdldFxuICAgIH0pIHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TLCB0aGlzLl9tZW51KS5maWx0ZXIoZWxlbWVudCA9PiBpc1Zpc2libGUoZWxlbWVudCkpO1xuICAgICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiB0YXJnZXQgaXNuJ3QgaW5jbHVkZWQgaW4gaXRlbXMgKGUuZy4gd2hlbiBleHBhbmRpbmcgdGhlIGRyb3Bkb3duKVxuICAgICAgLy8gYWxsb3cgY3ljbGluZyB0byBnZXQgdGhlIGxhc3QgaXRlbSBpbiBjYXNlIGtleSBlcXVhbHMgQVJST1dfVVBfS0VZXG4gICAgICBnZXROZXh0QWN0aXZlRWxlbWVudChpdGVtcywgdGFyZ2V0LCBrZXkgPT09IEFSUk9XX0RPV05fS0VZJDEsICFpdGVtcy5pbmNsdWRlcyh0YXJnZXQpKS5mb2N1cygpO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNsZWFyTWVudXMoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5idXR0b24gPT09IFJJR0hUX01PVVNFX0JVVFRPTiB8fCBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSAhPT0gVEFCX0tFWSQxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wZW5Ub2dnbGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTik7XG4gICAgICBmb3IgKGNvbnN0IHRvZ2dsZSBvZiBvcGVuVG9nZ2xlcykge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gRHJvcGRvd24uZ2V0SW5zdGFuY2UodG9nZ2xlKTtcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgICAgIGNvbnN0IGlzTWVudVRhcmdldCA9IGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9tZW51KTtcbiAgICAgICAgaWYgKGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9lbGVtZW50KSB8fCBjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdvdXRzaWRlJyAmJiBpc01lbnVUYXJnZXQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRhYiBuYXZpZ2F0aW9uIHRocm91Z2ggdGhlIGRyb3Bkb3duIG1lbnUgb3IgZXZlbnRzIGZyb20gY29udGFpbmVkIGlucHV0cyBzaG91bGRuJ3QgY2xvc2UgdGhlIG1lbnVcbiAgICAgICAgaWYgKGNvbnRleHQuX21lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkkMSB8fCAvaW5wdXR8c2VsZWN0fG9wdGlvbnx0ZXh0YXJlYXxmb3JtL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBjb250ZXh0Ll9lbGVtZW50XG4gICAgICAgIH07XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAvLyBJZiBub3QgYW4gVVAgfCBET1dOIHwgRVNDQVBFIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYSAmJiBpZiBrZXkgaXMgb3RoZXIgdGhhbiBFU0NBUEUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuXG4gICAgICBjb25zdCBpc0lucHV0ID0gL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSk7XG4gICAgICBjb25zdCBpc0VzY2FwZUV2ZW50ID0gZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZJDI7XG4gICAgICBjb25zdCBpc1VwT3JEb3duRXZlbnQgPSBbQVJST1dfVVBfS0VZJDEsIEFSUk9XX0RPV05fS0VZJDFdLmluY2x1ZGVzKGV2ZW50LmtleSk7XG4gICAgICBpZiAoIWlzVXBPckRvd25FdmVudCAmJiAhaXNFc2NhcGVFdmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaXNJbnB1dCAmJiAhaXNFc2NhcGVFdmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyB0b2RvOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjMvZm9ybXMvaW5wdXQtZ3JvdXAvXG4gICAgICBjb25zdCBnZXRUb2dnbGVCdXR0b24gPSB0aGlzLm1hdGNoZXMoU0VMRUNUT1JfREFUQV9UT0dHTEUkMykgPyB0aGlzIDogU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzKVswXSB8fCBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMpWzBdIHx8IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfREFUQV9UT0dHTEUkMywgZXZlbnQuZGVsZWdhdGVUYXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UoZ2V0VG9nZ2xlQnV0dG9uKTtcbiAgICAgIGlmIChpc1VwT3JEb3duRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGluc3RhbmNlLnNob3coKTtcbiAgICAgICAgaW5zdGFuY2UuX3NlbGVjdE1lbnVJdGVtKGV2ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLl9pc1Nob3duKCkpIHtcbiAgICAgICAgLy8gZWxzZSBpcyBlc2NhcGUgYW5kIHdlIGNoZWNrIGlmIGl0IGlzIHNob3duXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgICAgIGdldFRvZ2dsZUJ1dHRvbi5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcik7XG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfTUVOVSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKTtcbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQzLCBEcm9wZG93bi5jbGVhck1lbnVzKTtcbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlVUF9EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cyk7XG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMywgU0VMRUNUT1JfREFUQV9UT0dHTEUkMywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnRvZ2dsZSgpO1xuICB9KTtcblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihEcm9wZG93bik7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL3Njcm9sbEJhci5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBTRUxFQ1RPUl9GSVhFRF9DT05URU5UID0gJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnO1xuICBjb25zdCBTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCA9ICcuc3RpY2t5LXRvcCc7XG4gIGNvbnN0IFBST1BFUlRZX1BBRERJTkcgPSAncGFkZGluZy1yaWdodCc7XG4gIGNvbnN0IFBST1BFUlRZX01BUkdJTiA9ICdtYXJnaW4tcmlnaHQnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIFNjcm9sbEJhckhlbHBlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvaW5uZXJXaWR0aCN1c2FnZV9ub3Rlc1xuICAgICAgY29uc3QgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgIHJldHVybiBNYXRoLmFicyh3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50V2lkdGgpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgICB0aGlzLl9kaXNhYmxlT3ZlckZsb3coKTtcbiAgICAgIC8vIGdpdmUgcGFkZGluZyB0byBlbGVtZW50IHRvIGJhbGFuY2UgdGhlIGhpZGRlbiBzY3JvbGxiYXIgd2lkdGhcbiAgICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aCk7XG4gICAgICAvLyB0cmljazogV2UgYWRqdXN0IHBvc2l0aXZlIHBhZGRpbmdSaWdodCBhbmQgbmVnYXRpdmUgbWFyZ2luUmlnaHQgdG8gc3RpY2t5LXRvcCBlbGVtZW50cyB0byBrZWVwIHNob3dpbmcgZnVsbHdpZHRoXG4gICAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpO1xuICAgICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTiwgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSAtIHdpZHRoKTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpO1xuICAgICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HKTtcbiAgICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORyk7XG4gICAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4pO1xuICAgIH1cbiAgICBpc092ZXJmbG93aW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0V2lkdGgoKSA+IDA7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9kaXNhYmxlT3ZlckZsb3coKSB7XG4gICAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50LCAnb3ZlcmZsb3cnKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB9XG4gICAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5LCBjYWxsYmFjaykge1xuICAgICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fZWxlbWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCBgJHtjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKX1weGApO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKTtcbiAgICB9XG4gICAgX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpIHtcbiAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpO1xuICAgICAgaWYgKGFjdHVhbFZhbHVlKSB7XG4gICAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSwgYWN0dWFsVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSkge1xuICAgICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpO1xuICAgICAgICAvLyBXZSBvbmx5IHdhbnQgdG8gcmVtb3ZlIHRoZSBwcm9wZXJ0eSBpZiB0aGUgdmFsdWUgaXMgYG51bGxgOyB0aGUgdmFsdWUgY2FuIGFsc28gYmUgemVyb1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlUHJvcGVydHkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIHZhbHVlKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjayk7XG4gICAgfVxuICAgIF9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBjYWxsQmFjaykge1xuICAgICAgaWYgKGlzRWxlbWVudCQxKHNlbGVjdG9yKSkge1xuICAgICAgICBjYWxsQmFjayhzZWxlY3Rvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3Qgc2VsIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgIGNhbGxCYWNrKHNlbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL2JhY2tkcm9wLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkOSA9ICdiYWNrZHJvcCc7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSQ0ID0gJ2ZhZGUnO1xuICBjb25zdCBDTEFTU19OQU1FX1NIT1ckNSA9ICdzaG93JztcbiAgY29uc3QgRVZFTlRfTU9VU0VET1dOID0gYG1vdXNlZG93bi5icy4ke05BTUUkOX1gO1xuICBjb25zdCBEZWZhdWx0JDggPSB7XG4gICAgY2xhc3NOYW1lOiAnbW9kYWwtYmFja2Ryb3AnLFxuICAgIGNsaWNrQ2FsbGJhY2s6IG51bGwsXG4gICAgaXNBbmltYXRlZDogZmFsc2UsXG4gICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgIC8vIGlmIGZhbHNlLCB3ZSB1c2UgdGhlIGJhY2tkcm9wIGhlbHBlciB3aXRob3V0IGFkZGluZyBhbnkgZWxlbWVudCB0byB0aGUgZG9tXG4gICAgcm9vdEVsZW1lbnQ6ICdib2R5JyAvLyBnaXZlIHRoZSBjaG9pY2UgdG8gcGxhY2UgYmFja2Ryb3AgdW5kZXIgZGlmZmVyZW50IGVsZW1lbnRzXG4gIH07XG5cbiAgY29uc3QgRGVmYXVsdFR5cGUkOCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGNsaWNrQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICAgIGlzQW5pbWF0ZWQ6ICdib29sZWFuJyxcbiAgICBpc1Zpc2libGU6ICdib29sZWFuJyxcbiAgICByb290RWxlbWVudDogJyhlbGVtZW50fHN0cmluZyknXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgQmFja2Ryb3AgZXh0ZW5kcyBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDg7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkODtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkOTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBzaG93KGNhbGxiYWNrKSB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FwcGVuZCgpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKTtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICByZWZsb3coZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDUpO1xuICAgICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGhpZGUoY2FsbGJhY2spIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDUpO1xuICAgICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgICBleGVjdXRlKGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9nZXRFbGVtZW50KCkge1xuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9IHRoaXMuX2NvbmZpZy5jbGFzc05hbWU7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFJDQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBiYWNrZHJvcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICAgIH1cbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIC8vIHVzZSBnZXRFbGVtZW50KCkgd2l0aCB0aGUgZGVmYXVsdCBcImJvZHlcIiB0byBnZXQgYSBmcmVzaCBFbGVtZW50IG9uIGVhY2ggaW5zdGFudGlhdGlvblxuICAgICAgY29uZmlnLnJvb3RFbGVtZW50ID0gZ2V0RWxlbWVudChjb25maWcucm9vdEVsZW1lbnQpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX2FwcGVuZCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KCk7XG4gICAgICB0aGlzLl9jb25maWcucm9vdEVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsIEVWRU5UX01PVVNFRE9XTiwgKCkgPT4ge1xuICAgICAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5jbGlja0NhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5faXNBcHBlbmRlZCA9IHRydWU7XG4gICAgfVxuICAgIF9lbXVsYXRlQW5pbWF0aW9uKGNhbGxiYWNrKSB7XG4gICAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCB0aGlzLl9nZXRFbGVtZW50KCksIHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHV0aWwvZm9jdXN0cmFwLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkOCA9ICdmb2N1c3RyYXAnO1xuICBjb25zdCBEQVRBX0tFWSQ1ID0gJ2JzLmZvY3VzdHJhcCc7XG4gIGNvbnN0IEVWRU5UX0tFWSQ1ID0gYC4ke0RBVEFfS0VZJDV9YDtcbiAgY29uc3QgRVZFTlRfRk9DVVNJTiQyID0gYGZvY3VzaW4ke0VWRU5UX0tFWSQ1fWA7XG4gIGNvbnN0IEVWRU5UX0tFWURPV05fVEFCID0gYGtleWRvd24udGFiJHtFVkVOVF9LRVkkNX1gO1xuICBjb25zdCBUQUJfS0VZID0gJ1RhYic7XG4gIGNvbnN0IFRBQl9OQVZfRk9SV0FSRCA9ICdmb3J3YXJkJztcbiAgY29uc3QgVEFCX05BVl9CQUNLV0FSRCA9ICdiYWNrd2FyZCc7XG4gIGNvbnN0IERlZmF1bHQkNyA9IHtcbiAgICBhdXRvZm9jdXM6IHRydWUsXG4gICAgdHJhcEVsZW1lbnQ6IG51bGwgLy8gVGhlIGVsZW1lbnQgdG8gdHJhcCBmb2N1cyBpbnNpZGUgb2ZcbiAgfTtcblxuICBjb25zdCBEZWZhdWx0VHlwZSQ3ID0ge1xuICAgIGF1dG9mb2N1czogJ2Jvb2xlYW4nLFxuICAgIHRyYXBFbGVtZW50OiAnZWxlbWVudCdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBGb2N1c1RyYXAgZXh0ZW5kcyBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBudWxsO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ3O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDc7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDg7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLnRyYXBFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkkNSk7IC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOJDIsIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUZvY3VzaW4oZXZlbnQpKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9UQUIsIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUtleWRvd24oZXZlbnQpKTtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSQ1KTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2hhbmRsZUZvY3VzaW4oZXZlbnQpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdHJhcEVsZW1lbnRcbiAgICAgIH0gPSB0aGlzLl9jb25maWc7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBkb2N1bWVudCB8fCBldmVudC50YXJnZXQgPT09IHRyYXBFbGVtZW50IHx8IHRyYXBFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZWxlbWVudHMgPSBTZWxlY3RvckVuZ2luZS5mb2N1c2FibGVDaGlsZHJlbih0cmFwRWxlbWVudCk7XG4gICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRyYXBFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPT09IFRBQl9OQVZfQkFDS1dBUkQpIHtcbiAgICAgICAgZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRzWzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIF9oYW5kbGVLZXlkb3duKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5ICE9PSBUQUJfS0VZKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBldmVudC5zaGlmdEtleSA/IFRBQl9OQVZfQkFDS1dBUkQgOiBUQUJfTkFWX0ZPUldBUkQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBtb2RhbC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDcgPSAnbW9kYWwnO1xuICBjb25zdCBEQVRBX0tFWSQ0ID0gJ2JzLm1vZGFsJztcbiAgY29uc3QgRVZFTlRfS0VZJDQgPSBgLiR7REFUQV9LRVkkNH1gO1xuICBjb25zdCBEQVRBX0FQSV9LRVkkMiA9ICcuZGF0YS1hcGknO1xuICBjb25zdCBFU0NBUEVfS0VZJDEgPSAnRXNjYXBlJztcbiAgY29uc3QgRVZFTlRfSElERSQ0ID0gYGhpZGUke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEJDEgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOJDQgPSBgaGlkZGVuJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9TSE9XJDQgPSBgc2hvdyR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kNCA9IGBzaG93biR7RVZFTlRfS0VZJDR9YDtcbiAgY29uc3QgRVZFTlRfUkVTSVpFJDEgPSBgcmVzaXplJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVkkNH1gO1xuICBjb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MkMSA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWSQ0fWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDIgPSBgY2xpY2ske0VWRU5UX0tFWSQ0fSR7REFUQV9BUElfS0VZJDJ9YDtcbiAgY29uc3QgQ0xBU1NfTkFNRV9PUEVOID0gJ21vZGFsLW9wZW4nO1xuICBjb25zdCBDTEFTU19OQU1FX0ZBREUkMyA9ICdmYWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDQgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX05BTUVfU1RBVElDID0gJ21vZGFsLXN0YXRpYyc7XG4gIGNvbnN0IE9QRU5fU0VMRUNUT1IkMSA9ICcubW9kYWwuc2hvdyc7XG4gIGNvbnN0IFNFTEVDVE9SX0RJQUxPRyA9ICcubW9kYWwtZGlhbG9nJztcbiAgY29uc3QgU0VMRUNUT1JfTU9EQUxfQk9EWSA9ICcubW9kYWwtYm9keSc7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFJDIgPSAnW2RhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIl0nO1xuICBjb25zdCBEZWZhdWx0JDYgPSB7XG4gICAgYmFja2Ryb3A6IHRydWUsXG4gICAgZm9jdXM6IHRydWUsXG4gICAga2V5Ym9hcmQ6IHRydWVcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkNiA9IHtcbiAgICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICAgIGZvY3VzOiAnYm9vbGVhbicsXG4gICAga2V5Ym9hcmQ6ICdib29sZWFuJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIE1vZGFsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuICAgICAgdGhpcy5fZGlhbG9nID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9ESUFMT0csIHRoaXMuX2VsZW1lbnQpO1xuICAgICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKTtcbiAgICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKTtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2Nyb2xsQmFyID0gbmV3IFNjcm9sbEJhckhlbHBlcigpO1xuICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkNjtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ2O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQ3O1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpO1xuICAgIH1cbiAgICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XJDQsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSk7XG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNTaG93biA9IHRydWU7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fc2Nyb2xsQmFyLmhpZGUoKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pO1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKCk7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5zaG93KCgpID0+IHRoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSQ0KTtcbiAgICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckNCk7XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2hpZGVNb2RhbCgpLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgZm9yIChjb25zdCBodG1sRWxlbWVudCBvZiBbd2luZG93LCB0aGlzLl9kaWFsb2ddKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vZmYoaHRtbEVsZW1lbnQsIEVWRU5UX0tFWSQ0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuICAgIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuX2FkanVzdERpYWxvZygpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICAgIGlzVmlzaWJsZTogQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApLFxuICAgICAgICAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWUsXG4gICAgICAgIGlzQW5pbWF0ZWQ6IHRoaXMuX2lzQW5pbWF0ZWQoKVxuICAgICAgfSk7XG4gICAgfVxuICAgIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuICAgICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuICAgICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICAgIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICAvLyB0cnkgdG8gYXBwZW5kIGR5bmFtaWMgbW9kYWxcbiAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSk7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgIGNvbnN0IG1vZGFsQm9keSA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTU9EQUxfQk9EWSwgdGhpcy5fZGlhbG9nKTtcbiAgICAgIGlmIChtb2RhbEJvZHkpIHtcbiAgICAgICAgbW9kYWxCb2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICB9XG4gICAgICByZWZsb3codGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDQpO1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOJDQsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2sodHJhbnNpdGlvbkNvbXBsZXRlLCB0aGlzLl9kaWFsb2csIHRoaXMuX2lzQW5pbWF0ZWQoKSk7XG4gICAgfVxuICAgIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MkMSwgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZJDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCk7XG4gICAgICB9KTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSQxLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmICF0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgICB0aGlzLl9hZGp1c3REaWFsb2coKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgICAgLy8gYSBiYWQgdHJpY2sgdG8gc2VncmVnYXRlIGNsaWNrcyB0aGF0IG1heSBzdGFydCBpbnNpZGUgZGlhbG9nIGJ1dCBlbmQgb3V0c2lkZSwgYW5kIGF2b2lkIGxpc3RlbiB0byBzY3JvbGxiYXIgY2xpY2tzXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgZXZlbnQyID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0IHx8IHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50Mi50YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBfaGlkZU1vZGFsKCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpO1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX09QRU4pO1xuICAgICAgICB0aGlzLl9yZXNldEFkanVzdG1lbnRzKCk7XG4gICAgICAgIHRoaXMuX3Njcm9sbEJhci5yZXNldCgpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4kNCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFJDMpO1xuICAgIH1cbiAgICBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEJDEpO1xuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IGluaXRpYWxPdmVyZmxvd1kgPSB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WTtcbiAgICAgIC8vIHJldHVybiBpZiB0aGUgZm9sbG93aW5nIGJhY2tncm91bmQgdHJhbnNpdGlvbiBoYXNuJ3QgeWV0IGNvbXBsZXRlZFxuICAgICAgaWYgKGluaXRpYWxPdmVyZmxvd1kgPT09ICdoaWRkZW4nIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU1RBVElDKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU1RBVElDKTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TVEFUSUMpO1xuICAgICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9IGluaXRpYWxPdmVyZmxvd1k7XG4gICAgICAgIH0sIHRoaXMuX2RpYWxvZyk7XG4gICAgICB9LCB0aGlzLl9kaWFsb2cpO1xuICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gICAgICovXG5cbiAgICBfYWRqdXN0RGlhbG9nKCkge1xuICAgICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLl9zY3JvbGxCYXIuZ2V0V2lkdGgoKTtcbiAgICAgIGNvbnN0IGlzQm9keU92ZXJmbG93aW5nID0gc2Nyb2xsYmFyV2lkdGggPiAwO1xuICAgICAgaWYgKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcbiAgICAgIH1cbiAgICAgIGlmICghaXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gaXNSVEwoKSA/ICdwYWRkaW5nUmlnaHQnIDogJ3BhZGRpbmdMZWZ0JztcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XG4gICAgICB9XG4gICAgfVxuICAgIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDIsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7XG4gICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX1NIT1ckNCwgc2hvd0V2ZW50ID0+IHtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4kNCwgKCkgPT4ge1xuICAgICAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgbW9kYWwgdG9nZ2xlciB3aGlsZSBhbm90aGVyIG9uZSBpcyBvcGVuXG4gICAgY29uc3QgYWxyZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IkMSk7XG4gICAgaWYgKGFscmVhZHlPcGVuKSB7XG4gICAgICBNb2RhbC5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpO1xuICAgIGRhdGEudG9nZ2xlKHRoaXMpO1xuICB9KTtcbiAgZW5hYmxlRGlzbWlzc1RyaWdnZXIoTW9kYWwpO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKE1vZGFsKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIG9mZmNhbnZhcy5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICBjb25zdCBOQU1FJDYgPSAnb2ZmY2FudmFzJztcbiAgY29uc3QgREFUQV9LRVkkMyA9ICdicy5vZmZjYW52YXMnO1xuICBjb25zdCBFVkVOVF9LRVkkMyA9IGAuJHtEQVRBX0tFWSQzfWA7XG4gIGNvbnN0IERBVEFfQVBJX0tFWSQxID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkkMiA9IGBsb2FkJHtFVkVOVF9LRVkkM30ke0RBVEFfQVBJX0tFWSQxfWA7XG4gIGNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9TSE9XJDMgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPV0lORyQxID0gJ3Nob3dpbmcnO1xuICBjb25zdCBDTEFTU19OQU1FX0hJRElORyA9ICdoaWRpbmcnO1xuICBjb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QID0gJ29mZmNhbnZhcy1iYWNrZHJvcCc7XG4gIGNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm9mZmNhbnZhcy5zaG93JztcbiAgY29uc3QgRVZFTlRfU0hPVyQzID0gYHNob3cke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX1NIT1dOJDMgPSBgc2hvd24ke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0hJREUkMyA9IGBoaWRlJHtFVkVOVF9LRVkkM31gO1xuICBjb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVkkM31gO1xuICBjb25zdCBFVkVOVF9ISURERU4kMyA9IGBoaWRkZW4ke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWSQzfWA7XG4gIGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDEgPSBgY2xpY2ske0VWRU5UX0tFWSQzfSR7REFUQV9BUElfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZJDN9YDtcbiAgY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUkMSA9ICdbZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIl0nO1xuICBjb25zdCBEZWZhdWx0JDUgPSB7XG4gICAgYmFja2Ryb3A6IHRydWUsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgc2Nyb2xsOiBmYWxzZVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQ1ID0ge1xuICAgIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgICBzY3JvbGw6ICdib29sZWFuJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIGNsYXNzIE9mZmNhbnZhcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKCk7XG4gICAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKCk7XG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ1O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDY7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldCk7XG4gICAgfVxuICAgIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVyQzLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pO1xuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlO1xuICAgICAgdGhpcy5fYmFja2Ryb3Auc2hvdygpO1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5oaWRlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HJDEpO1xuICAgICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsIHx8IHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckMyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkckMSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOJDMsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSQzKTtcbiAgICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgdGhpcy5fZWxlbWVudC5ibHVyKCk7XG4gICAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURJTkcpO1xuICAgICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpO1xuICAgICAgY29uc3QgY29tcGxldGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQzLCBDTEFTU19OQU1FX0hJRElORyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG4gICAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiQzKTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbGJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlXG4gICAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICAgIGNvbnN0IGNsaWNrQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH07XG5cbiAgICAgIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApO1xuICAgICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICAgIGNsYXNzTmFtZTogQ0xBU1NfTkFNRV9CQUNLRFJPUCxcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBpc0FuaW1hdGVkOiB0cnVlLFxuICAgICAgICByb290RWxlbWVudDogdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICBjbGlja0NhbGxiYWNrOiBpc1Zpc2libGUgPyBjbGlja0NhbGxiYWNrIDogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICAgIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuICAgICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuICAgICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDEsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDEsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7XG4gICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiQzLCAoKSA9PiB7XG4gICAgICAvLyBmb2N1cyBvbiB0cmlnZ2VyIHdoZW4gaXQgaXMgY2xvc2VkXG4gICAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgYSB0b2dnbGVyIG9mIGFuIG9mZmNhbnZhcywgd2hpbGUgYW5vdGhlciBpcyBvcGVuXG4gICAgY29uc3QgYWxyZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IpO1xuICAgIGlmIChhbHJlYWR5T3BlbiAmJiBhbHJlYWR5T3BlbiAhPT0gdGFyZ2V0KSB7XG4gICAgICBPZmZjYW52YXMuZ2V0SW5zdGFuY2UoYWxyZWFkeU9wZW4pLmhpZGUoKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldCk7XG4gICAgZGF0YS50b2dnbGUodGhpcyk7XG4gIH0pO1xuICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJJDIsICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoT1BFTl9TRUxFQ1RPUikpIHtcbiAgICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHNlbGVjdG9yKS5zaG93KCk7XG4gICAgfVxuICB9KTtcbiAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoJ1thcmlhLW1vZGFsXVtjbGFzcyo9c2hvd11bY2xhc3MqPW9mZmNhbnZhcy1dJykpIHtcbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBlbmFibGVEaXNtaXNzVHJpZ2dlcihPZmZjYW52YXMpO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKE9mZmNhbnZhcyk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL3Nhbml0aXplci5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgdXJpQXR0cmlidXRlcyA9IG5ldyBTZXQoWydiYWNrZ3JvdW5kJywgJ2NpdGUnLCAnaHJlZicsICdpdGVtdHlwZScsICdsb25nZGVzYycsICdwb3N0ZXInLCAnc3JjJywgJ3hsaW5rOmhyZWYnXSk7XG4gIGNvbnN0IEFSSUFfQVRUUklCVVRFX1BBVFRFUk4gPSAvXmFyaWEtW1xcdy1dKiQvaTtcblxuICAvKipcbiAgICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxuICAgKlxuICAgKiBTaG91dC1vdXQgdG8gQW5ndWxhciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvMTIuMi54L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gICAqL1xuICBjb25zdCBTQUZFX1VSTF9QQVRURVJOID0gL14oPzooPzpodHRwcz98bWFpbHRvfGZ0cHx0ZWx8ZmlsZXxzbXMpOnxbXiMmLzo/XSooPzpbIy8/XXwkKSkvaTtcblxuICAvKipcbiAgICogQSBwYXR0ZXJuIHRoYXQgbWF0Y2hlcyBzYWZlIGRhdGEgVVJMcy4gT25seSBtYXRjaGVzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gdHlwZXMuXG4gICAqXG4gICAqIFNob3V0LW91dCB0byBBbmd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi8xMi4yLngvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAgICovXG4gIGNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGE6KD86aW1hZ2VcXC8oPzpibXB8Z2lmfGpwZWd8anBnfHBuZ3x0aWZmfHdlYnApfHZpZGVvXFwvKD86bXBlZ3xtcDR8b2dnfHdlYm0pfGF1ZGlvXFwvKD86bXAzfG9nYXxvZ2d8b3B1cykpO2Jhc2U2NCxbXFxkKy9hLXpdKz0qJC9pO1xuICBjb25zdCBhbGxvd2VkQXR0cmlidXRlID0gKGF0dHJpYnV0ZSwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpID0+IHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICBpZiAodXJpQXR0cmlidXRlcy5oYXMoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oU0FGRV9VUkxfUEFUVEVSTi50ZXN0KGF0dHJpYnV0ZS5ub2RlVmFsdWUpIHx8IERBVEFfVVJMX1BBVFRFUk4udGVzdChhdHRyaWJ1dGUubm9kZVZhbHVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cbiAgICByZXR1cm4gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGF0dHJpYnV0ZVJlZ2V4ID0+IGF0dHJpYnV0ZVJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKS5zb21lKHJlZ2V4ID0+IHJlZ2V4LnRlc3QoYXR0cmlidXRlTmFtZSkpO1xuICB9O1xuICBjb25zdCBEZWZhdWx0QWxsb3dsaXN0ID0ge1xuICAgIC8vIEdsb2JhbCBhdHRyaWJ1dGVzIGFsbG93ZWQgb24gYW55IHN1cHBsaWVkIGVsZW1lbnQgYmVsb3cuXG4gICAgJyonOiBbJ2NsYXNzJywgJ2RpcicsICdpZCcsICdsYW5nJywgJ3JvbGUnLCBBUklBX0FUVFJJQlVURV9QQVRURVJOXSxcbiAgICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICAgIGFyZWE6IFtdLFxuICAgIGI6IFtdLFxuICAgIGJyOiBbXSxcbiAgICBjb2w6IFtdLFxuICAgIGNvZGU6IFtdLFxuICAgIGRpdjogW10sXG4gICAgZW06IFtdLFxuICAgIGhyOiBbXSxcbiAgICBoMTogW10sXG4gICAgaDI6IFtdLFxuICAgIGgzOiBbXSxcbiAgICBoNDogW10sXG4gICAgaDU6IFtdLFxuICAgIGg2OiBbXSxcbiAgICBpOiBbXSxcbiAgICBpbWc6IFsnc3JjJywgJ3NyY3NldCcsICdhbHQnLCAndGl0bGUnLCAnd2lkdGgnLCAnaGVpZ2h0J10sXG4gICAgbGk6IFtdLFxuICAgIG9sOiBbXSxcbiAgICBwOiBbXSxcbiAgICBwcmU6IFtdLFxuICAgIHM6IFtdLFxuICAgIHNtYWxsOiBbXSxcbiAgICBzcGFuOiBbXSxcbiAgICBzdWI6IFtdLFxuICAgIHN1cDogW10sXG4gICAgc3Ryb25nOiBbXSxcbiAgICB1OiBbXSxcbiAgICB1bDogW11cbiAgfTtcbiAgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIGFsbG93TGlzdCwgc2FuaXRpemVGdW5jdGlvbikge1xuICAgIGlmICghdW5zYWZlSHRtbC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB1bnNhZmVIdG1sO1xuICAgIH1cbiAgICBpZiAoc2FuaXRpemVGdW5jdGlvbiAmJiB0eXBlb2Ygc2FuaXRpemVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNhbml0aXplRnVuY3Rpb24odW5zYWZlSHRtbCk7XG4gICAgfVxuICAgIGNvbnN0IGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgY29uc3QgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJyk7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXS5jb25jYXQoLi4uY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKTtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnROYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFPYmplY3Qua2V5cyhhbGxvd0xpc3QpLmluY2x1ZGVzKGVsZW1lbnROYW1lKSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5jb25jYXQoLi4uZWxlbWVudC5hdHRyaWJ1dGVzKTtcbiAgICAgIGNvbnN0IGFsbG93ZWRBdHRyaWJ1dGVzID0gW10uY29uY2F0KGFsbG93TGlzdFsnKiddIHx8IFtdLCBhbGxvd0xpc3RbZWxlbWVudE5hbWVdIHx8IFtdKTtcbiAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZUxpc3QpIHtcbiAgICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlKGF0dHJpYnV0ZSwgYWxsb3dlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB1dGlsL3RlbXBsYXRlLWZhY3RvcnkuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQ1ID0gJ1RlbXBsYXRlRmFjdG9yeSc7XG4gIGNvbnN0IERlZmF1bHQkNCA9IHtcbiAgICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gICAgY29udGVudDoge30sXG4gICAgLy8geyBzZWxlY3RvciA6IHRleHQgLCAgc2VsZWN0b3IyIDogdGV4dDIgLCB9XG4gICAgZXh0cmFDbGFzczogJycsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgc2FuaXRpemU6IHRydWUsXG4gICAgc2FuaXRpemVGbjogbnVsbCxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PC9kaXY+J1xuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQ0ID0ge1xuICAgIGFsbG93TGlzdDogJ29iamVjdCcsXG4gICAgY29udGVudDogJ29iamVjdCcsXG4gICAgZXh0cmFDbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBodG1sOiAnYm9vbGVhbicsXG4gICAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgICB0ZW1wbGF0ZTogJ3N0cmluZydcbiAgfTtcbiAgY29uc3QgRGVmYXVsdENvbnRlbnRUeXBlID0ge1xuICAgIGVudHJ5OiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9ufG51bGwpJyxcbiAgICBzZWxlY3RvcjogJyhzdHJpbmd8ZWxlbWVudCknXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgVGVtcGxhdGVGYWN0b3J5IGV4dGVuZHMgQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkNDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ0O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQ1O1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGdldENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9jb25maWcuY29udGVudCkubWFwKGNvbmZpZyA9PiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihjb25maWcpKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgfVxuICAgIGhhc0NvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDb250ZW50KCkubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgY2hhbmdlQ29udGVudChjb250ZW50KSB7XG4gICAgICB0aGlzLl9jaGVja0NvbnRlbnQoY29udGVudCk7XG4gICAgICB0aGlzLl9jb25maWcuY29udGVudCA9IHtcbiAgICAgICAgLi4udGhpcy5fY29uZmlnLmNvbnRlbnQsXG4gICAgICAgIC4uLmNvbnRlbnRcbiAgICAgIH07XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9IdG1sKCkge1xuICAgICAgY29uc3QgdGVtcGxhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0ZW1wbGF0ZVdyYXBwZXIuaW5uZXJIVE1MID0gdGhpcy5fbWF5YmVTYW5pdGl6ZSh0aGlzLl9jb25maWcudGVtcGxhdGUpO1xuICAgICAgZm9yIChjb25zdCBbc2VsZWN0b3IsIHRleHRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KSkge1xuICAgICAgICB0aGlzLl9zZXRDb250ZW50KHRlbXBsYXRlV3JhcHBlciwgdGV4dCwgc2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgY29uc3QgdGVtcGxhdGUgPSB0ZW1wbGF0ZVdyYXBwZXIuY2hpbGRyZW5bMF07XG4gICAgICBjb25zdCBleHRyYUNsYXNzID0gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmV4dHJhQ2xhc3MpO1xuICAgICAgaWYgKGV4dHJhQ2xhc3MpIHtcbiAgICAgICAgdGVtcGxhdGUuY2xhc3NMaXN0LmFkZCguLi5leHRyYUNsYXNzLnNwbGl0KCcgJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZykge1xuICAgICAgc3VwZXIuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fY2hlY2tDb250ZW50KGNvbmZpZy5jb250ZW50KTtcbiAgICB9XG4gICAgX2NoZWNrQ29udGVudChhcmcpIHtcbiAgICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCBjb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhhcmcpKSB7XG4gICAgICAgIHN1cGVyLl90eXBlQ2hlY2tDb25maWcoe1xuICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgIGVudHJ5OiBjb250ZW50XG4gICAgICAgIH0sIERlZmF1bHRDb250ZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9zZXRDb250ZW50KHRlbXBsYXRlLCBjb250ZW50LCBzZWxlY3Rvcikge1xuICAgICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvciwgdGVtcGxhdGUpO1xuICAgICAgaWYgKCF0ZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29udGVudCA9IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGNvbnRlbnQpO1xuICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgIHRlbXBsYXRlRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGlzRWxlbWVudCQxKGNvbnRlbnQpKSB7XG4gICAgICAgIHRoaXMuX3B1dEVsZW1lbnRJblRlbXBsYXRlKGdldEVsZW1lbnQoY29udGVudCksIHRlbXBsYXRlRWxlbWVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fbWF5YmVTYW5pdGl6ZShjb250ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGVtcGxhdGVFbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICB9XG4gICAgX21heWJlU2FuaXRpemUoYXJnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNhbml0aXplID8gc2FuaXRpemVIdG1sKGFyZywgdGhpcy5fY29uZmlnLmFsbG93TGlzdCwgdGhpcy5fY29uZmlnLnNhbml0aXplRm4pIDogYXJnO1xuICAgIH1cbiAgICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gZXhlY3V0ZShhcmcsIFt0aGlzXSk7XG4gICAgfVxuICAgIF9wdXRFbGVtZW50SW5UZW1wbGF0ZShlbGVtZW50LCB0ZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRlbXBsYXRlRWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRlbXBsYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB0b29sdGlwLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkNCA9ICd0b29sdGlwJztcbiAgY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gbmV3IFNldChbJ3Nhbml0aXplJywgJ2FsbG93TGlzdCcsICdzYW5pdGl6ZUZuJ10pO1xuICBjb25zdCBDTEFTU19OQU1FX0ZBREUkMiA9ICdmYWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9NT0RBTCA9ICdtb2RhbCc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQyID0gJ3Nob3cnO1xuICBjb25zdCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSID0gJy50b29sdGlwLWlubmVyJztcbiAgY29uc3QgU0VMRUNUT1JfTU9EQUwgPSBgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gO1xuICBjb25zdCBFVkVOVF9NT0RBTF9ISURFID0gJ2hpZGUuYnMubW9kYWwnO1xuICBjb25zdCBUUklHR0VSX0hPVkVSID0gJ2hvdmVyJztcbiAgY29uc3QgVFJJR0dFUl9GT0NVUyA9ICdmb2N1cyc7XG4gIGNvbnN0IFRSSUdHRVJfQ0xJQ0sgPSAnY2xpY2snO1xuICBjb25zdCBUUklHR0VSX01BTlVBTCA9ICdtYW51YWwnO1xuICBjb25zdCBFVkVOVF9ISURFJDIgPSAnaGlkZSc7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiQyID0gJ2hpZGRlbic7XG4gIGNvbnN0IEVWRU5UX1NIT1ckMiA9ICdzaG93JztcbiAgY29uc3QgRVZFTlRfU0hPV04kMiA9ICdzaG93bic7XG4gIGNvbnN0IEVWRU5UX0lOU0VSVEVEID0gJ2luc2VydGVkJztcbiAgY29uc3QgRVZFTlRfQ0xJQ0skMSA9ICdjbGljayc7XG4gIGNvbnN0IEVWRU5UX0ZPQ1VTSU4kMSA9ICdmb2N1c2luJztcbiAgY29uc3QgRVZFTlRfRk9DVVNPVVQkMSA9ICdmb2N1c291dCc7XG4gIGNvbnN0IEVWRU5UX01PVVNFRU5URVIgPSAnbW91c2VlbnRlcic7XG4gIGNvbnN0IEVWRU5UX01PVVNFTEVBVkUgPSAnbW91c2VsZWF2ZSc7XG4gIGNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gICAgQVVUTzogJ2F1dG8nLFxuICAgIFRPUDogJ3RvcCcsXG4gICAgUklHSFQ6IGlzUlRMKCkgPyAnbGVmdCcgOiAncmlnaHQnLFxuICAgIEJPVFRPTTogJ2JvdHRvbScsXG4gICAgTEVGVDogaXNSVEwoKSA/ICdyaWdodCcgOiAnbGVmdCdcbiAgfTtcbiAgY29uc3QgRGVmYXVsdCQzID0ge1xuICAgIGFsbG93TGlzdDogRGVmYXVsdEFsbG93bGlzdCxcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgY3VzdG9tQ2xhc3M6ICcnLFxuICAgIGRlbGF5OiAwLFxuICAgIGZhbGxiYWNrUGxhY2VtZW50czogWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBvZmZzZXQ6IFswLCAwXSxcbiAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgICBzYW5pdGl6ZTogdHJ1ZSxcbiAgICBzYW5pdGl6ZUZuOiBudWxsLFxuICAgIHNlbGVjdG9yOiBmYWxzZSxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICsgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PicgKyAnPC9kaXY+JyxcbiAgICB0aXRsZTogJycsXG4gICAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJ1xuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQzID0ge1xuICAgIGFsbG93TGlzdDogJ29iamVjdCcsXG4gICAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gICAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICAgIGN1c3RvbUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgICBmYWxsYmFja1BsYWNlbWVudHM6ICdhcnJheScsXG4gICAgaHRtbDogJ2Jvb2xlYW4nLFxuICAgIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBwbGFjZW1lbnQ6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gICAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgICB0aXRsZTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICAgIHRyaWdnZXI6ICdzdHJpbmcnXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgVG9vbHRpcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKTtcbiAgICAgIH1cbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG5cbiAgICAgIC8vIFByaXZhdGVcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gMDtcbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0ge307XG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5ID0gbnVsbDtcbiAgICAgIHRoaXMuX25ld0NvbnRlbnQgPSBudWxsO1xuXG4gICAgICAvLyBQcm90ZWN0ZWRcbiAgICAgIHRoaXMudGlwID0gbnVsbDtcbiAgICAgIHRoaXMuX3NldExpc3RlbmVycygpO1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5fZml4VGl0bGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkMztcbiAgICB9XG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQzO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRSQ0O1xuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuICAgIGVuYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGRpc2FibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWQ7XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhdGhpcy5fYWN0aXZlVHJpZ2dlci5jbGljaztcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fZW50ZXIoKTtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcik7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKTtcbiAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgc2hvdygpIHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJyk7XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLl9pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9TSE9XJDIpKTtcbiAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBmaW5kU2hhZG93Um9vdCh0aGlzLl9lbGVtZW50KTtcbiAgICAgIGNvbnN0IGlzSW5UaGVEb20gPSAoc2hhZG93Um9vdCB8fCB0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5jb250YWlucyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHRvZG8gdjYgcmVtb3ZlIHRoaXMgT1IgbWFrZSBpdCBvcHRpb25hbFxuICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuICAgICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXAuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29udGFpbmVyXG4gICAgICB9ID0gdGhpcy5fY29uZmlnO1xuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMudGlwKSkge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRpcCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0lOU0VSVEVEKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9wb3BwZXIgPSB0aGlzLl9jcmVhdGVQb3BwZXIodGlwKTtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQyKTtcblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9TSE9XTiQyKSk7XG4gICAgICAgIGlmICh0aGlzLl9pc0hvdmVyZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5fbGVhdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgdGhpcy5faXNBbmltYXRlZCgpKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0hJREUkMikpO1xuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRpcEVsZW1lbnQoKTtcbiAgICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQyKTtcblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gbnVsbDsgLy8gaXQgaXMgYSB0cmljayB0byBzdXBwb3J0IG1hbnVhbCB0cmlnZ2VyaW5nXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0hJRERFTiQyKSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIHRoaXMuX2lzQW5pbWF0ZWQoKSk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByb3RlY3RlZFxuICAgIF9pc1dpdGhDb250ZW50KCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fZ2V0VGl0bGUoKSk7XG4gICAgfVxuICAgIF9nZXRUaXBFbGVtZW50KCkge1xuICAgICAgaWYgKCF0aGlzLnRpcCkge1xuICAgICAgICB0aGlzLnRpcCA9IHRoaXMuX2NyZWF0ZVRpcEVsZW1lbnQodGhpcy5fbmV3Q29udGVudCB8fCB0aGlzLl9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy50aXA7XG4gICAgfVxuICAgIF9jcmVhdGVUaXBFbGVtZW50KGNvbnRlbnQpIHtcbiAgICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRlbXBsYXRlRmFjdG9yeShjb250ZW50KS50b0h0bWwoKTtcblxuICAgICAgLy8gdG9kbzogcmVtb3ZlIHRoaXMgY2hlY2sgb24gdjZcbiAgICAgIGlmICghdGlwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFJDIsIENMQVNTX05BTUVfU0hPVyQyKTtcbiAgICAgIC8vIHRvZG86IG9uIHY2IHRoZSBmb2xsb3dpbmcgY2FuIGJlIGFjaGlldmVkIHdpdGggQ1NTIG9ubHlcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKGBicy0ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXV0b2ApO1xuICAgICAgY29uc3QgdGlwSWQgPSBnZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKS50b1N0cmluZygpO1xuICAgICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZCk7XG4gICAgICBpZiAodGhpcy5faXNBbmltYXRlZCgpKSB7XG4gICAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSQyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aXA7XG4gICAgfVxuICAgIHNldENvbnRlbnQoY29udGVudCkge1xuICAgICAgdGhpcy5fbmV3Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKTtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICAgIF9nZXRUZW1wbGF0ZUZhY3RvcnkoY29udGVudCkge1xuICAgICAgaWYgKHRoaXMuX3RlbXBsYXRlRmFjdG9yeSkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkuY2hhbmdlQ29udGVudChjb250ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeSA9IG5ldyBUZW1wbGF0ZUZhY3Rvcnkoe1xuICAgICAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgICAgICAvLyB0aGUgYGNvbnRlbnRgIHZhciBoYXMgdG8gYmUgYWZ0ZXIgYHRoaXMuX2NvbmZpZ2BcbiAgICAgICAgICAvLyB0byBvdmVycmlkZSBjb25maWcuY29udGVudCBpbiBjYXNlIG9mIHBvcG92ZXJcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIGV4dHJhQ2xhc3M6IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzcylcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVGYWN0b3J5O1xuICAgIH1cbiAgICBfZ2V0Q29udGVudEZvclRlbXBsYXRlKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW1NFTEVDVE9SX1RPT0xUSVBfSU5ORVJdOiB0aGlzLl9nZXRUaXRsZSgpXG4gICAgICB9O1xuICAgIH1cbiAgICBfZ2V0VGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLnRpdGxlKSB8fCB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcbiAgICBfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5nZXRPckNyZWF0ZUluc3RhbmNlKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKTtcbiAgICB9XG4gICAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLmFuaW1hdGlvbiB8fCB0aGlzLnRpcCAmJiB0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFJDIpO1xuICAgIH1cbiAgICBfaXNTaG93bigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpcCAmJiB0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuICAgIH1cbiAgICBfY3JlYXRlUG9wcGVyKHRpcCkge1xuICAgICAgY29uc3QgcGxhY2VtZW50ID0gZXhlY3V0ZSh0aGlzLl9jb25maWcucGxhY2VtZW50LCBbdGhpcywgdGlwLCB0aGlzLl9lbGVtZW50XSk7XG4gICAgICBjb25zdCBhdHRhY2htZW50ID0gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV07XG4gICAgICByZXR1cm4gY3JlYXRlUG9wcGVyKHRoaXMuX2VsZW1lbnQsIHRpcCwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpKTtcbiAgICB9XG4gICAgX2dldE9mZnNldCgpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9ID0gdGhpcy5fY29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCkpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9XG4gICAgX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIGV4ZWN1dGUoYXJnLCBbdGhpcy5fZWxlbWVudF0pO1xuICAgIH1cbiAgICBfZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogdGhpcy5fY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50c1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBlbGVtZW50OiBgLiR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hcnJvd2BcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAncHJlU2V0UGxhY2VtZW50JyxcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIHBoYXNlOiAnYmVmb3JlTWFpbicsXG4gICAgICAgICAgZm46IGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gUHJlLXNldCBQb3BwZXIncyBwbGFjZW1lbnQgYXR0cmlidXRlIGluIG9yZGVyIHRvIHJlYWQgdGhlIGFycm93IHNpemVzIHByb3Blcmx5LlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBQb3BwZXIgbWl4ZXMgdXAgdGhlIHdpZHRoIGFuZCBoZWlnaHQgZGltZW5zaW9ucyBzaW5jZSB0aGUgaW5pdGlhbCBhcnJvdyBzdHlsZSBpcyBmb3IgdG9wIHBsYWNlbWVudFxuICAgICAgICAgICAgdGhpcy5fZ2V0VGlwRWxlbWVudCgpLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3BwZXItcGxhY2VtZW50JywgZGF0YS5zdGF0ZS5wbGFjZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAgIC4uLmV4ZWN1dGUodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZywgW2RlZmF1bHRCc1BvcHBlckNvbmZpZ10pXG4gICAgICB9O1xuICAgIH1cbiAgICBfc2V0TGlzdGVuZXJzKCkge1xuICAgICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLl9jb25maWcudHJpZ2dlci5zcGxpdCgnICcpO1xuICAgICAgZm9yIChjb25zdCB0cmlnZ2VyIG9mIHRyaWdnZXJzKSB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0NMSUNLJDEpLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpO1xuICAgICAgICAgICAgY29udGV4dC50b2dnbGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICAgIGNvbnN0IGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID8gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VFTlRFUikgOiB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9GT0NVU0lOJDEpO1xuICAgICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/IHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX01PVVNFTEVBVkUpIDogdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfRk9DVVNPVVQkMSk7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50SW4sIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCk7XG4gICAgICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW2V2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXSA9IHRydWU7XG4gICAgICAgICAgICBjb250ZXh0Ll9lbnRlcigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudE91dCwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KTtcbiAgICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXSA9IGNvbnRleHQuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCk7XG4gICAgICAgICAgICBjb250ZXh0Ll9sZWF2ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9NT0RBTCksIEVWRU5UX01PREFMX0hJREUsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpO1xuICAgIH1cbiAgICBfZml4VGl0bGUoKSB7XG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgJiYgIXRoaXMuX2VsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGl0bGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnLCB0aXRsZSk7IC8vIERPIE5PVCBVU0UgSVQuIElzIG9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcbiAgICB9XG4gICAgX2VudGVyKCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24oKSB8fCB0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgdGhpcy5faXNIb3ZlcmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3NldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheS5zaG93KTtcbiAgICB9XG4gICAgX2xlYXZlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkuaGlkZSk7XG4gICAgfVxuICAgIF9zZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpO1xuICAgIH1cbiAgICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2FjdGl2ZVRyaWdnZXIpLmluY2x1ZGVzKHRydWUpO1xuICAgIH1cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIGZvciAoY29uc3QgZGF0YUF0dHJpYnV0ZSBvZiBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcykpIHtcbiAgICAgICAgaWYgKERJU0FMTE9XRURfQVRUUklCVVRFUy5oYXMoZGF0YUF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICBkZWxldGUgZGF0YUF0dHJpYnV0ZXNbZGF0YUF0dHJpYnV0ZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICAgIH07XG4gICAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpO1xuICAgICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpO1xuICAgICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZyk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAgIGNvbmZpZy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyID09PSBmYWxzZSA/IGRvY3VtZW50LmJvZHkgOiBnZXRFbGVtZW50KGNvbmZpZy5jb250YWluZXIpO1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgICBzaG93OiBjb25maWcuZGVsYXksXG4gICAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB7fTtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGNvbmZpZ1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbmZpZy5zZWxlY3RvciA9IGZhbHNlO1xuICAgICAgY29uZmlnLnRyaWdnZXIgPSAnbWFudWFsJztcblxuICAgICAgLy8gSW4gdGhlIGZ1dHVyZSBjYW4gYmUgcmVwbGFjZWQgd2l0aDpcbiAgICAgIC8vIGNvbnN0IGtleXNXaXRoRGlmZmVyZW50VmFsdWVzID0gT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnKS5maWx0ZXIoZW50cnkgPT4gdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2VudHJ5WzBdXSAhPT0gdGhpcy5fY29uZmlnW2VudHJ5WzBdXSlcbiAgICAgIC8vIGBPYmplY3QuZnJvbUVudHJpZXMoa2V5c1dpdGhEaWZmZXJlbnRWYWx1ZXMpYFxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgX2Rpc3Bvc2VQb3BwZXIoKSB7XG4gICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50aXApIHtcbiAgICAgICAgdGhpcy50aXAucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMudGlwID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBUb29sdGlwLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihUb29sdGlwKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHBvcG92ZXIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQzID0gJ3BvcG92ZXInO1xuICBjb25zdCBTRUxFQ1RPUl9USVRMRSA9ICcucG9wb3Zlci1oZWFkZXInO1xuICBjb25zdCBTRUxFQ1RPUl9DT05URU5UID0gJy5wb3BvdmVyLWJvZHknO1xuICBjb25zdCBEZWZhdWx0JDIgPSB7XG4gICAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICAgIGNvbnRlbnQ6ICcnLFxuICAgIG9mZnNldDogWzAsIDhdLFxuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj4nICsgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93XCI+PC9kaXY+JyArICc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+JyArICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+JyArICc8L2Rpdj4nLFxuICAgIHRyaWdnZXI6ICdjbGljaydcbiAgfTtcbiAgY29uc3QgRGVmYXVsdFR5cGUkMiA9IHtcbiAgICAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICAgIGNvbnRlbnQ6ICcobnVsbHxzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknXG4gIH07XG5cbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgY2xhc3MgUG9wb3ZlciBleHRlbmRzIFRvb2x0aXAge1xuICAgIC8vIEdldHRlcnNcbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQyO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDI7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDM7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVzXG4gICAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbU0VMRUNUT1JfVElUTEVdOiB0aGlzLl9nZXRUaXRsZSgpLFxuICAgICAgICBbU0VMRUNUT1JfQ09OVEVOVF06IHRoaXMuX2dldENvbnRlbnQoKVxuICAgICAgfTtcbiAgICB9XG4gICAgX2dldENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmNvbnRlbnQpO1xuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuICAgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFBvcG92ZXIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKFBvcG92ZXIpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgc2Nyb2xsc3B5LmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUkMiA9ICdzY3JvbGxzcHknO1xuICBjb25zdCBEQVRBX0tFWSQyID0gJ2JzLnNjcm9sbHNweSc7XG4gIGNvbnN0IEVWRU5UX0tFWSQyID0gYC4ke0RBVEFfS0VZJDJ9YDtcbiAgY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIGNvbnN0IEVWRU5UX0FDVElWQVRFID0gYGFjdGl2YXRlJHtFVkVOVF9LRVkkMn1gO1xuICBjb25zdCBFVkVOVF9DTElDSyA9IGBjbGljayR7RVZFTlRfS0VZJDJ9YDtcbiAgY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSQxID0gYGxvYWQke0VWRU5UX0tFWSQyfSR7REFUQV9BUElfS0VZfWA7XG4gIGNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUkMSA9ICdhY3RpdmUnO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nO1xuICBjb25zdCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MgPSAnW2hyZWZdJztcbiAgY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnO1xuICBjb25zdCBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJztcbiAgY29uc3QgU0VMRUNUT1JfTkFWX0lURU1TID0gJy5uYXYtaXRlbSc7XG4gIGNvbnN0IFNFTEVDVE9SX0xJU1RfSVRFTVMgPSAnLmxpc3QtZ3JvdXAtaXRlbSc7XG4gIGNvbnN0IFNFTEVDVE9SX0xJTktfSVRFTVMgPSBgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX05BVl9JVEVNU30gPiAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gO1xuICBjb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nO1xuICBjb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUkMSA9ICcuZHJvcGRvd24tdG9nZ2xlJztcbiAgY29uc3QgRGVmYXVsdCQxID0ge1xuICAgIG9mZnNldDogbnVsbCxcbiAgICAvLyBUT0RPOiB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICAgIHJvb3RNYXJnaW46ICcwcHggMHB4IC0yNSUnLFxuICAgIHNtb290aFNjcm9sbDogZmFsc2UsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIHRocmVzaG9sZDogWzAuMSwgMC41LCAxXVxuICB9O1xuICBjb25zdCBEZWZhdWx0VHlwZSQxID0ge1xuICAgIG9mZnNldDogJyhudW1iZXJ8bnVsbCknLFxuICAgIC8vIFRPRE8gdjYgQGRlcHJlY2F0ZWQsIGtlZXAgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnNcbiAgICByb290TWFyZ2luOiAnc3RyaW5nJyxcbiAgICBzbW9vdGhTY3JvbGw6ICdib29sZWFuJyxcbiAgICB0YXJnZXQ6ICdlbGVtZW50JyxcbiAgICB0aHJlc2hvbGQ6ICdhcnJheSdcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBTY3JvbGxTcHkgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG5cbiAgICAgIC8vIHRoaXMuX2VsZW1lbnQgaXMgdGhlIG9ic2VydmFibGVzQ29udGFpbmVyIGFuZCBjb25maWcudGFyZ2V0IHRoZSBtZW51IGxpbmtzIHdyYXBwZXJcbiAgICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW1lbnQpLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnID8gbnVsbCA6IHRoaXMuX2VsZW1lbnQ7XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsO1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhID0ge1xuICAgICAgICB2aXNpYmxlRW50cnlUb3A6IDAsXG4gICAgICAgIHBhcmVudFNjcm9sbFRvcDogMFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVmcmVzaCgpOyAvLyBpbml0aWFsaXplXG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDE7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkMTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUUkMjtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICByZWZyZXNoKCkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpO1xuICAgICAgdGhpcy5fbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKTtcbiAgICAgIGlmICh0aGlzLl9vYnNlcnZlcikge1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IHRoaXMuX2dldE5ld09ic2VydmVyKCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHNlY3Rpb24gb2YgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnZhbHVlcygpKSB7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUoc2VjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgICAgLy8gVE9ETzogb24gdjYgdGFyZ2V0IHNob3VsZCBiZSBnaXZlbiBleHBsaWNpdGx5ICYgcmVtb3ZlIHRoZSB7dGFyZ2V0OiAnc3MtdGFyZ2V0J30gY2FzZVxuICAgICAgY29uZmlnLnRhcmdldCA9IGdldEVsZW1lbnQoY29uZmlnLnRhcmdldCkgfHwgZG9jdW1lbnQuYm9keTtcblxuICAgICAgLy8gVE9ETzogdjYgT25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29ucy4gVXNlIHJvb3RNYXJnaW4gb25seVxuICAgICAgY29uZmlnLnJvb3RNYXJnaW4gPSBjb25maWcub2Zmc2V0ID8gYCR7Y29uZmlnLm9mZnNldH1weCAwcHggLTMwJWAgOiBjb25maWcucm9vdE1hcmdpbjtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLnRocmVzaG9sZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uZmlnLnRocmVzaG9sZCA9IGNvbmZpZy50aHJlc2hvbGQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIF9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpIHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNtb290aFNjcm9sbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHVucmVnaXN0ZXIgYW55IHByZXZpb3VzIGxpc3RlbmVyc1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSyk7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fY29uZmlnLnRhcmdldCwgRVZFTlRfQ0xJQ0ssIFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5nZXQoZXZlbnQudGFyZ2V0Lmhhc2gpO1xuICAgICAgICBpZiAob2JzZXJ2YWJsZVNlY3Rpb24pIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9yb290RWxlbWVudCB8fCB3aW5kb3c7XG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gb2JzZXJ2YWJsZVNlY3Rpb24ub2Zmc2V0VG9wIC0gdGhpcy5fZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgICAgaWYgKHJvb3Quc2Nyb2xsVG8pIHtcbiAgICAgICAgICAgIHJvb3Quc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICB0b3A6IGhlaWdodCxcbiAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDaHJvbWUgNjAgZG9lc24ndCBzdXBwb3J0IGBzY3JvbGxUb2BcbiAgICAgICAgICByb290LnNjcm9sbFRvcCA9IGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXROZXdPYnNlcnZlcigpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHJvb3Q6IHRoaXMuX3Jvb3RFbGVtZW50LFxuICAgICAgICB0aHJlc2hvbGQ6IHRoaXMuX2NvbmZpZy50aHJlc2hvbGQsXG4gICAgICAgIHJvb3RNYXJnaW46IHRoaXMuX2NvbmZpZy5yb290TWFyZ2luXG4gICAgICB9O1xuICAgICAgcmV0dXJuIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHRoaXMuX29ic2VydmVyQ2FsbGJhY2soZW50cmllcyksIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIFRoZSBsb2dpYyBvZiBzZWxlY3Rpb25cbiAgICBfb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSB7XG4gICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZW50cnkgPT4gdGhpcy5fdGFyZ2V0TGlua3MuZ2V0KGAjJHtlbnRyeS50YXJnZXQuaWR9YCk7XG4gICAgICBjb25zdCBhY3RpdmF0ZSA9IGVudHJ5ID0+IHtcbiAgICAgICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcCA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3A7XG4gICAgICAgIHRoaXMuX3Byb2Nlc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHBhcmVudFNjcm9sbFRvcCA9ICh0aGlzLl9yb290RWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLnNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IHVzZXJTY3JvbGxzRG93biA9IHBhcmVudFNjcm9sbFRvcCA+PSB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wO1xuICAgICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcCA9IHBhcmVudFNjcm9sbFRvcDtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICB0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRhcmdldEVsZW1lbnQoZW50cnkpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMgPSBlbnRyeS50YXJnZXQub2Zmc2V0VG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3A7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBzY3JvbGxpbmcgZG93biwgcGljayB0aGUgYmlnZ2VyIG9mZnNldFRvcFxuICAgICAgICBpZiAodXNlclNjcm9sbHNEb3duICYmIGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICAgIGFjdGl2YXRlKGVudHJ5KTtcbiAgICAgICAgICAvLyBpZiBwYXJlbnQgaXNuJ3Qgc2Nyb2xsZWQsIGxldCdzIGtlZXAgdGhlIGZpcnN0IHZpc2libGUgaXRlbSwgYnJlYWtpbmcgdGhlIGl0ZXJhdGlvblxuICAgICAgICAgIGlmICghcGFyZW50U2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyB1cCwgcGljayB0aGUgc21hbGxlc3Qgb2Zmc2V0VG9wXG4gICAgICAgIGlmICghdXNlclNjcm9sbHNEb3duICYmICFlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMpIHtcbiAgICAgICAgICBhY3RpdmF0ZShlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKSB7XG4gICAgICB0aGlzLl90YXJnZXRMaW5rcyA9IG5ldyBNYXAoKTtcbiAgICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgIGNvbnN0IHRhcmdldExpbmtzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9UQVJHRVRfTElOS1MsIHRoaXMuX2NvbmZpZy50YXJnZXQpO1xuICAgICAgZm9yIChjb25zdCBhbmNob3Igb2YgdGFyZ2V0TGlua3MpIHtcbiAgICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIGFuY2hvciBoYXMgYW4gaWQgYW5kIGlzIG5vdCBkaXNhYmxlZFxuICAgICAgICBpZiAoIWFuY2hvci5oYXNoIHx8IGlzRGlzYWJsZWQoYW5jaG9yKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShhbmNob3IuaGFzaCwgdGhpcy5fZWxlbWVudCk7XG5cbiAgICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIG9ic2VydmFibGVTZWN0aW9uIGV4aXN0cyAmIGlzIHZpc2libGVcbiAgICAgICAgaWYgKGlzVmlzaWJsZShvYnNlcnZhYmxlU2VjdGlvbikpIHtcbiAgICAgICAgICB0aGlzLl90YXJnZXRMaW5rcy5zZXQoYW5jaG9yLmhhc2gsIGFuY2hvcik7XG4gICAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnNldChhbmNob3IuaGFzaCwgb2JzZXJ2YWJsZVNlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIF9wcm9jZXNzKHRhcmdldCkge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGhpcy5fY29uZmlnLnRhcmdldCk7XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQxKTtcbiAgICAgIHRoaXMuX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpO1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQUNUSVZBVEUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGFyZ2V0XG4gICAgICB9KTtcbiAgICB9XG4gICAgX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpIHtcbiAgICAgIC8vIEFjdGl2YXRlIGRyb3Bkb3duIHBhcmVudHNcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUkMSwgdGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pKS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGxpc3RHcm91cCBvZiBTZWxlY3RvckVuZ2luZS5wYXJlbnRzKHRhcmdldCwgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApKSB7XG4gICAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGlua3MgcGFyZW50cyBhcyBhY3RpdmVcbiAgICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBTZWxlY3RvckVuZ2luZS5wcmV2KGxpc3RHcm91cCwgU0VMRUNUT1JfTElOS19JVEVNUykpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgX2NsZWFyQWN0aXZlQ2xhc3MocGFyZW50KSB7XG4gICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSQxKTtcbiAgICAgIGNvbnN0IGFjdGl2ZU5vZGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChgJHtTRUxFQ1RPUl9UQVJHRVRfTElOS1N9LiR7Q0xBU1NfTkFNRV9BQ1RJVkUkMX1gLCBwYXJlbnQpO1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIGFjdGl2ZU5vZGVzKSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSQxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcbiAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJJDEsICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IHNweSBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfU1BZKSkge1xuICAgICAgU2Nyb2xsU3B5LmdldE9yQ3JlYXRlSW5zdGFuY2Uoc3B5KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luKFNjcm9sbFNweSk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCB0YWIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgY29uc3QgTkFNRSQxID0gJ3RhYic7XG4gIGNvbnN0IERBVEFfS0VZJDEgPSAnYnMudGFiJztcbiAgY29uc3QgRVZFTlRfS0VZJDEgPSBgLiR7REFUQV9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9ISURFJDEgPSBgaGlkZSR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfSElEREVOJDEgPSBgaGlkZGVuJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBFVkVOVF9TSE9XJDEgPSBgc2hvdyR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfU0hPV04kMSA9IGBzaG93biR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWSQxfWA7XG4gIGNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZJDF9YDtcbiAgY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVkkMX1gO1xuICBjb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnO1xuICBjb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCc7XG4gIGNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJztcbiAgY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9GQURFJDEgPSAnZmFkZSc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPVyQxID0gJ3Nob3cnO1xuICBjb25zdCBDTEFTU19EUk9QRE9XTiA9ICdkcm9wZG93bic7XG4gIGNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJztcbiAgY29uc3QgU0VMRUNUT1JfRFJPUERPV05fTUVOVSA9ICcuZHJvcGRvd24tbWVudSc7XG4gIGNvbnN0IE5PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnOm5vdCguZHJvcGRvd24tdG9nZ2xlKSc7XG4gIGNvbnN0IFNFTEVDVE9SX1RBQl9QQU5FTCA9ICcubGlzdC1ncm91cCwgLm5hdiwgW3JvbGU9XCJ0YWJsaXN0XCJdJztcbiAgY29uc3QgU0VMRUNUT1JfT1VURVIgPSAnLm5hdi1pdGVtLCAubGlzdC1ncm91cC1pdGVtJztcbiAgY29uc3QgU0VMRUNUT1JfSU5ORVIgPSBgLm5hdi1saW5rJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgLmxpc3QtZ3JvdXAtaXRlbSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIFtyb2xlPVwidGFiXCJdJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfWA7XG4gIGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXSc7IC8vIHRvZG86djY6IGNvdWxkIGJlIG9ubHkgYHRhYmBcbiAgY29uc3QgU0VMRUNUT1JfSU5ORVJfRUxFTSA9IGAke1NFTEVDVE9SX0lOTkVSfSwgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1gO1xuICBjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUgPSBgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdYDtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBUYWIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICBzdXBlcihlbGVtZW50KTtcbiAgICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9UQUJfUEFORUwpO1xuICAgICAgaWYgKCF0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyB0b2RvOiBzaG91bGQgVGhyb3cgZXhjZXB0aW9uIG9uIHY2XG4gICAgICAgIC8vIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7ZWxlbWVudC5vdXRlckhUTUx9IGhhcyBub3QgYSB2YWxpZCBwYXJlbnQgJHtTRUxFQ1RPUl9JTk5FUl9FTEVNfWApXG4gICAgICB9XG5cbiAgICAgIC8vIFNldCB1cCBpbml0aWFsIGFyaWEgYXR0cmlidXRlc1xuICAgICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXModGhpcy5fcGFyZW50LCB0aGlzLl9nZXRDaGlsZHJlbigpKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FJDE7XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG4gICAgc2hvdygpIHtcbiAgICAgIC8vIFNob3dzIHRoaXMgZWxlbSBhbmQgZGVhY3RpdmF0ZSB0aGUgYWN0aXZlIHNpYmxpbmcgaWYgZXhpc3RzXG4gICAgICBjb25zdCBpbm5lckVsZW0gPSB0aGlzLl9lbGVtZW50O1xuICAgICAgaWYgKHRoaXMuX2VsZW1Jc0FjdGl2ZShpbm5lckVsZW0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU2VhcmNoIGZvciBhY3RpdmUgdGFiIG9uIHNhbWUgcGFyZW50IHRvIGRlYWN0aXZhdGUgaXRcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuX2dldEFjdGl2ZUVsZW0oKTtcbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IGFjdGl2ZSA/IEV2ZW50SGFuZGxlci50cmlnZ2VyKGFjdGl2ZSwgRVZFTlRfSElERSQxLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGlubmVyRWxlbVxuICAgICAgfSkgOiBudWxsO1xuICAgICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIoaW5uZXJFbGVtLCBFVkVOVF9TSE9XJDEsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogYWN0aXZlXG4gICAgICB9KTtcbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCBoaWRlRXZlbnQgJiYgaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fZGVhY3RpdmF0ZShhY3RpdmUsIGlubmVyRWxlbSk7XG4gICAgICB0aGlzLl9hY3RpdmF0ZShpbm5lckVsZW0sIGFjdGl2ZSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIF9hY3RpdmF0ZShlbGVtZW50LCByZWxhdGVkRWxlbSkge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgICB0aGlzLl9hY3RpdmF0ZShTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKTsgLy8gU2VhcmNoIGFuZCBhY3RpdmF0ZS9zaG93IHRoZSBwcm9wZXIgc2VjdGlvblxuXG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgIT09ICd0YWInKSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQxKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIHRydWUpO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9TSE9XTiQxLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZEVsZW1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFJDEpKTtcbiAgICB9XG4gICAgX2RlYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpO1xuICAgICAgZWxlbWVudC5ibHVyKCk7XG4gICAgICB0aGlzLl9kZWFjdGl2YXRlKFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkpOyAvLyBTZWFyY2ggYW5kIGRlYWN0aXZhdGUgdGhlIHNob3duIHNlY3Rpb24gdG9vXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfSElEREVOJDEsIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkMSkpO1xuICAgIH1cbiAgICBfa2V5ZG93bihldmVudCkge1xuICAgICAgaWYgKCFbQVJST1dfTEVGVF9LRVksIEFSUk9XX1JJR0hUX0tFWSwgQVJST1dfVVBfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gc3RvcFByb3BhZ2F0aW9uL3ByZXZlbnREZWZhdWx0IGJvdGggYWRkZWQgdG8gc3VwcG9ydCB1cC9kb3duIGtleXMgd2l0aG91dCBzY3JvbGxpbmcgdGhlIHBhZ2VcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBpc05leHQgPSBbQVJST1dfUklHSFRfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KTtcbiAgICAgIGNvbnN0IG5leHRBY3RpdmVFbGVtZW50ID0gZ2V0TmV4dEFjdGl2ZUVsZW1lbnQodGhpcy5fZ2V0Q2hpbGRyZW4oKS5maWx0ZXIoZWxlbWVudCA9PiAhaXNEaXNhYmxlZChlbGVtZW50KSksIGV2ZW50LnRhcmdldCwgaXNOZXh0LCB0cnVlKTtcbiAgICAgIGlmIChuZXh0QWN0aXZlRWxlbWVudCkge1xuICAgICAgICBuZXh0QWN0aXZlRWxlbWVudC5mb2N1cyh7XG4gICAgICAgICAgcHJldmVudFNjcm9sbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UobmV4dEFjdGl2ZUVsZW1lbnQpLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2dldENoaWxkcmVuKCkge1xuICAgICAgLy8gY29sbGVjdGlvbiBvZiBpbm5lciBlbGVtZW50c1xuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSU5ORVJfRUxFTSwgdGhpcy5fcGFyZW50KTtcbiAgICB9XG4gICAgX2dldEFjdGl2ZUVsZW0oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0Q2hpbGRyZW4oKS5maW5kKGNoaWxkID0+IHRoaXMuX2VsZW1Jc0FjdGl2ZShjaGlsZCkpIHx8IG51bGw7XG4gICAgfVxuICAgIF9zZXRJbml0aWFsQXR0cmlidXRlcyhwYXJlbnQsIGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhwYXJlbnQsICdyb2xlJywgJ3RhYmxpc3QnKTtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZChjaGlsZCkge1xuICAgICAgY2hpbGQgPSB0aGlzLl9nZXRJbm5lckVsZW1lbnQoY2hpbGQpO1xuICAgICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9lbGVtSXNBY3RpdmUoY2hpbGQpO1xuICAgICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGNoaWxkKTtcbiAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGlzQWN0aXZlKTtcbiAgICAgIGlmIChvdXRlckVsZW0gIT09IGNoaWxkKSB7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKG91dGVyRWxlbSwgJ3JvbGUnLCAncHJlc2VudGF0aW9uJyk7XG4gICAgICB9XG4gICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGNoaWxkLCAncm9sZScsICd0YWInKTtcblxuICAgICAgLy8gc2V0IGF0dHJpYnV0ZXMgdG8gdGhlIHJlbGF0ZWQgcGFuZWwgdG9vXG4gICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpO1xuICAgIH1cbiAgICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGNoaWxkKTtcbiAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ3JvbGUnLCAndGFicGFuZWwnKTtcbiAgICAgIGlmIChjaGlsZC5pZCkge1xuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0YXJnZXQsICdhcmlhLWxhYmVsbGVkYnknLCBgJHtjaGlsZC5pZH1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIG9wZW4pIHtcbiAgICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGlmICghb3V0ZXJFbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19EUk9QRE9XTikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdG9nZ2xlID0gKHNlbGVjdG9yLCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IsIG91dGVyRWxlbSk7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSwgb3Blbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCBDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fTUVOVSwgQ0xBU1NfTkFNRV9TSE9XJDEpO1xuICAgICAgb3V0ZXJFbGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIG9wZW4pO1xuICAgIH1cbiAgICBfc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBfZWxlbUlzQWN0aXZlKGVsZW0pIHtcbiAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgfVxuXG4gICAgLy8gVHJ5IHRvIGdldCB0aGUgaW5uZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1saW5rKVxuICAgIF9nZXRJbm5lckVsZW1lbnQoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW0ubWF0Y2hlcyhTRUxFQ1RPUl9JTk5FUl9FTEVNKSA/IGVsZW0gOiBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lOTkVSX0VMRU0sIGVsZW0pO1xuICAgIH1cblxuICAgIC8vIFRyeSB0byBnZXQgdGhlIG91dGVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtaXRlbSlcbiAgICBfZ2V0T3V0ZXJFbGVtZW50KGVsZW0pIHtcbiAgICAgIHJldHVybiBlbGVtLmNsb3Nlc3QoU0VMRUNUT1JfT1VURVIpIHx8IGVsZW07XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS5zaG93KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIG9uIGZvY3VzXG4gICAqL1xuICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFKSkge1xuICAgICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICBkZWZpbmVKUXVlcnlQbHVnaW4oVGFiKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwIHRvYXN0LmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgPSAndG9hc3QnO1xuICBjb25zdCBEQVRBX0tFWSA9ICdicy50b2FzdCc7XG4gIGNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gO1xuICBjb25zdCBFVkVOVF9NT1VTRU9WRVIgPSBgbW91c2VvdmVyJHtFVkVOVF9LRVl9YDtcbiAgY29uc3QgRVZFTlRfTU9VU0VPVVQgPSBgbW91c2VvdXQke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9GT0NVU09VVCA9IGBmb2N1c291dCR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gO1xuICBjb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWA7XG4gIGNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJztcbiAgY29uc3QgQ0xBU1NfTkFNRV9ISURFID0gJ2hpZGUnOyAvLyBAZGVwcmVjYXRlZCAtIGtlcHQgaGVyZSBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICBjb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdyc7XG4gIGNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJztcbiAgY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gICAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gICAgYXV0b2hpZGU6ICdib29sZWFuJyxcbiAgICBkZWxheTogJ251bWJlcidcbiAgfTtcbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgYXV0b2hpZGU6IHRydWUsXG4gICAgZGVsYXk6IDUwMDBcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgZGVmaW5pdGlvblxuICAgKi9cblxuICBjbGFzcyBUb2FzdCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuICAgICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2V0TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyc1xuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcbiAgICBzaG93KCkge1xuICAgICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVyk7XG4gICAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KCk7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04pO1xuICAgICAgICB0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0hJREUpOyAvLyBAZGVwcmVjYXRlZFxuICAgICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVywgQ0xBU1NfTkFNRV9TSE9XSU5HKTtcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2NvbmZpZy5hbmltYXRpb24pO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKCF0aGlzLmlzU2hvd24oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKTtcbiAgICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfSElERSk7IC8vIEBkZXByZWNhdGVkXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcsIENMQVNTX05BTUVfU0hPVyk7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTik7XG4gICAgICB9O1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORyk7XG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKTtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpO1xuICAgICAgaWYgKHRoaXMuaXNTaG93bigpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpO1xuICAgICAgfVxuICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cbiAgICBpc1Nob3duKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVyk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuXG4gICAgX21heWJlU2NoZWR1bGVIaWRlKCkge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gfHwgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5KTtcbiAgICB9XG4gICAgX29uSW50ZXJhY3Rpb24oZXZlbnQsIGlzSW50ZXJhY3RpbmcpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlICdtb3VzZW92ZXInOlxuICAgICAgICBjYXNlICdtb3VzZW91dCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3Rpbmc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2ZvY3VzaW4nOlxuICAgICAgICBjYXNlICdmb2N1c291dCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3Rpbmc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNJbnRlcmFjdGluZykge1xuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV4dEVsZW1lbnQgPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQgPT09IG5leHRFbGVtZW50IHx8IHRoaXMuX2VsZW1lbnQuY29udGFpbnMobmV4dEVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKCk7XG4gICAgfVxuICAgIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVkVSLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSk7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSk7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpO1xuICAgIH1cbiAgICBfY2xlYXJUaW1lb3V0KCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG4gICAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gVG9hc3QuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyKFRvYXN0KTtcblxuICAvKipcbiAgICogalF1ZXJ5XG4gICAqL1xuXG4gIGRlZmluZUpRdWVyeVBsdWdpbihUb2FzdCk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCBpbmRleC51bWQuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICBjb25zdCBpbmRleF91bWQgPSB7XG4gICAgQWxlcnQsXG4gICAgQnV0dG9uLFxuICAgIENhcm91c2VsLFxuICAgIENvbGxhcHNlLFxuICAgIERyb3Bkb3duLFxuICAgIE1vZGFsLFxuICAgIE9mZmNhbnZhcyxcbiAgICBQb3BvdmVyLFxuICAgIFNjcm9sbFNweSxcbiAgICBUYWIsXG4gICAgVG9hc3QsXG4gICAgVG9vbHRpcFxuICB9O1xuXG4gIHJldHVybiBpbmRleF91bWQ7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb3RzdHJhcC5idW5kbGUuanMubWFwXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJjYXJkQ29udGFpbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjb250YWluZXIiLCJjYXJkcyIsImFkZExlZnQiLCJsZW5ndGgiLCJyb3RhdGUiLCJyb3RhdGVTdHlsZSIsImNsYXNzTGVmdCIsImNhcmQiLCJzdHlsZSIsImxlZnQiLCJjb25jYXQiLCJ0cmFuc2Zvcm0iLCJjYXJkQ29udGFpbmVyc01pbmkiLCJtaW5pQm90dG9tU3R5bGUiLCJib3R0b20iLCJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIl90eXBlb2YiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJnbG9iYWxUaGlzIiwic2VsZiIsImJvb3RzdHJhcCIsIl9LRVlfVE9fRElSRUNUSU9OIiwiTUFYX1VJRCIsIk1JTExJU0VDT05EU19NVUxUSVBMSUVSIiwiVFJBTlNJVElPTl9FTkQiLCJwYXJzZVNlbGVjdG9yIiwic2VsZWN0b3IiLCJ3aW5kb3ciLCJDU1MiLCJlc2NhcGUiLCJyZXBsYWNlIiwibWF0Y2giLCJpZCIsInRvVHlwZSIsIm9iamVjdCIsInVuZGVmaW5lZCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInRvTG93ZXJDYXNlIiwiZ2V0VUlEIiwicHJlZml4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsIl93aW5kb3ckZ2V0Q29tcHV0ZWRTdCIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJmbG9hdFRyYW5zaXRpb25EZWxheSIsInNwbGl0IiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJpc0VsZW1lbnQkMSIsImpxdWVyeSIsIm5vZGVUeXBlIiwiZ2V0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpc1Zpc2libGUiLCJnZXRDbGllbnRSZWN0cyIsImVsZW1lbnRJc1Zpc2libGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiY2xvc2VkRGV0YWlscyIsImNsb3Nlc3QiLCJzdW1tYXJ5IiwicGFyZW50Tm9kZSIsImlzRGlzYWJsZWQiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkaXNhYmxlZCIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsImZpbmRTaGFkb3dSb290IiwiZG9jdW1lbnRFbGVtZW50IiwiYXR0YWNoU2hhZG93IiwiZ2V0Um9vdE5vZGUiLCJyb290IiwiU2hhZG93Um9vdCIsIm5vb3AiLCJyZWZsb3ciLCJvZmZzZXRIZWlnaHQiLCJnZXRqUXVlcnkiLCJqUXVlcnkiLCJib2R5IiwiRE9NQ29udGVudExvYWRlZENhbGxiYWNrcyIsIm9uRE9NQ29udGVudExvYWRlZCIsImNhbGxiYWNrIiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaTIiLCJfRE9NQ29udGVudExvYWRlZENhbGwiLCJwdXNoIiwiaXNSVEwiLCJkaXIiLCJkZWZpbmVKUXVlcnlQbHVnaW4iLCJwbHVnaW4iLCIkIiwibmFtZSIsIk5BTUUiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJmbiIsImpRdWVyeUludGVyZmFjZSIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsImV4ZWN1dGUiLCJwb3NzaWJsZUNhbGxiYWNrIiwiYXJncyIsImRlZmF1bHRWYWx1ZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImV4ZWN1dGVBZnRlclRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uRWxlbWVudCIsIndhaXRGb3JUcmFuc2l0aW9uIiwiZHVyYXRpb25QYWRkaW5nIiwiZW11bGF0ZWREdXJhdGlvbiIsImNhbGxlZCIsImhhbmRsZXIiLCJfcmVmNiIsInRhcmdldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiZ2V0TmV4dEFjdGl2ZUVsZW1lbnQiLCJsaXN0IiwiYWN0aXZlRWxlbWVudCIsInNob3VsZEdldE5leHQiLCJpc0N5Y2xlQWxsb3dlZCIsImxpc3RMZW5ndGgiLCJpbmRleCIsImluZGV4T2YiLCJtYXgiLCJtaW4iLCJuYW1lc3BhY2VSZWdleCIsInN0cmlwTmFtZVJlZ2V4Iiwic3RyaXBVaWRSZWdleCIsImV2ZW50UmVnaXN0cnkiLCJ1aWRFdmVudCIsImN1c3RvbUV2ZW50cyIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwibmF0aXZlRXZlbnRzIiwiU2V0IiwibWFrZUV2ZW50VWlkIiwidWlkIiwiZ2V0RWxlbWVudEV2ZW50cyIsImJvb3RzdHJhcEhhbmRsZXIiLCJldmVudCIsImh5ZHJhdGVPYmoiLCJkZWxlZ2F0ZVRhcmdldCIsIm9uZU9mZiIsIkV2ZW50SGFuZGxlciIsIm9mZiIsInR5cGUiLCJib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlciIsImRvbUVsZW1lbnRzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImRvbUVsZW1lbnQiLCJlcnIiLCJlIiwiZiIsImZpbmRIYW5kbGVyIiwiZXZlbnRzIiwiY2FsbGFibGUiLCJkZWxlZ2F0aW9uU2VsZWN0b3IiLCJ2YWx1ZXMiLCJmaW5kIiwibm9ybWFsaXplUGFyYW1ldGVycyIsIm9yaWdpbmFsVHlwZUV2ZW50IiwiZGVsZWdhdGlvbkZ1bmN0aW9uIiwiaXNEZWxlZ2F0ZWQiLCJ0eXBlRXZlbnQiLCJnZXRUeXBlRXZlbnQiLCJoYXMiLCJhZGRIYW5kbGVyIiwiX25vcm1hbGl6ZVBhcmFtZXRlcnMiLCJfbm9ybWFsaXplUGFyYW1ldGVyczIiLCJfc2xpY2VkVG9BcnJheSIsIndyYXBGdW5jdGlvbiIsInJlbGF0ZWRUYXJnZXQiLCJoYW5kbGVycyIsInByZXZpb3VzRnVuY3Rpb24iLCJyZW1vdmVIYW5kbGVyIiwiQm9vbGVhbiIsInJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyIsIm5hbWVzcGFjZSIsInN0b3JlRWxlbWVudEV2ZW50IiwiX2kzIiwiX09iamVjdCRlbnRyaWVzIiwiZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsImhhbmRsZXJLZXkiLCJpbmNsdWRlcyIsIm9uIiwib25lIiwiX25vcm1hbGl6ZVBhcmFtZXRlcnMzIiwiX25vcm1hbGl6ZVBhcmFtZXRlcnM0IiwiaW5OYW1lc3BhY2UiLCJpc05hbWVzcGFjZSIsInN0YXJ0c1dpdGgiLCJrZXlzIiwiX2k0IiwiX09iamVjdCRrZXlzIiwiZWxlbWVudEV2ZW50Iiwic2xpY2UiLCJfaTUiLCJfT2JqZWN0JGVudHJpZXMyIiwiX09iamVjdCRlbnRyaWVzMiRfaSIsImtleUhhbmRsZXJzIiwidHJpZ2dlciIsImpRdWVyeUV2ZW50IiwiYnViYmxlcyIsIm5hdGl2ZURpc3BhdGNoIiwiZGVmYXVsdFByZXZlbnRlZCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJldnQiLCJjYW5jZWxhYmxlIiwicHJldmVudERlZmF1bHQiLCJvYmoiLCJtZXRhIiwiX2xvb3AyIiwiX09iamVjdCRlbnRyaWVzMyRfaSIsIl9PYmplY3QkZW50cmllczMiLCJfaTYiLCJfdW51c2VkIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJnZXQiLCJlbGVtZW50TWFwIiwiTWFwIiwiRGF0YSIsInNldCIsImluc3RhbmNlIiwiaW5zdGFuY2VNYXAiLCJzaXplIiwiY29uc29sZSIsImVycm9yIiwiQXJyYXkiLCJmcm9tIiwicmVtb3ZlIiwibm9ybWFsaXplRGF0YSIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5vcm1hbGl6ZURhdGFLZXkiLCJjaHIiLCJNYW5pcHVsYXRvciIsInNldERhdGFBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVEYXRhQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZ2V0RGF0YUF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwiYnNLZXlzIiwiZGF0YXNldCIsImZpbHRlciIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJwdXJlS2V5IiwiY2hhckF0IiwiZ2V0RGF0YUF0dHJpYnV0ZSIsIkNvbmZpZyIsIl9nZXRDb25maWciLCJjb25maWciLCJfbWVyZ2VDb25maWdPYmoiLCJfY29uZmlnQWZ0ZXJNZXJnZSIsIl90eXBlQ2hlY2tDb25maWciLCJqc29uQ29uZmlnIiwiX29iamVjdFNwcmVhZCIsImNvbnN0cnVjdG9yIiwiRGVmYXVsdCIsImNvbmZpZ1R5cGVzIiwiRGVmYXVsdFR5cGUiLCJfaTciLCJfT2JqZWN0JGVudHJpZXM0IiwiX09iamVjdCRlbnRyaWVzNCRfaSIsInByb3BlcnR5IiwiZXhwZWN0ZWRUeXBlcyIsInZhbHVlVHlwZSIsIlJlZ0V4cCIsInRlc3QiLCJUeXBlRXJyb3IiLCJ0b1VwcGVyQ2FzZSIsIkVycm9yIiwiVkVSU0lPTiIsIkJhc2VDb21wb25lbnQiLCJfQ29uZmlnIiwiX3RoaXMiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9lbGVtZW50IiwiX2NvbmZpZyIsIkRBVEFfS0VZIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImRpc3Bvc2UiLCJFVkVOVF9LRVkiLCJfaXRlcmF0b3IzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIl9zdGVwMyIsInByb3BlcnR5TmFtZSIsIl9xdWV1ZUNhbGxiYWNrIiwiaXNBbmltYXRlZCIsImdldEluc3RhbmNlIiwiZ2V0T3JDcmVhdGVJbnN0YW5jZSIsImV2ZW50TmFtZSIsImdldFNlbGVjdG9yIiwiaHJlZkF0dHJpYnV0ZSIsInRyaW0iLCJTZWxlY3RvckVuZ2luZSIsIl9yZWY3IiwiRWxlbWVudCIsImZpbmRPbmUiLCJjaGlsZHJlbiIsIl9yZWY4IiwiY2hpbGQiLCJtYXRjaGVzIiwicGFyZW50cyIsImFuY2VzdG9yIiwicHJldiIsInByZXZpb3VzIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmb2N1c2FibGVDaGlsZHJlbiIsImZvY3VzYWJsZXMiLCJtYXAiLCJqb2luIiwiZWwiLCJnZXRTZWxlY3RvckZyb21FbGVtZW50IiwiZ2V0RWxlbWVudEZyb21TZWxlY3RvciIsImdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IiLCJlbmFibGVEaXNtaXNzVHJpZ2dlciIsImNvbXBvbmVudCIsIm1ldGhvZCIsImNsaWNrRXZlbnQiLCJ0YWdOYW1lIiwiTkFNRSRmIiwiREFUQV9LRVkkYSIsIkVWRU5UX0tFWSRiIiwiRVZFTlRfQ0xPU0UiLCJFVkVOVF9DTE9TRUQiLCJDTEFTU19OQU1FX0ZBREUkNSIsIkNMQVNTX05BTUVfU0hPVyQ4IiwiQWxlcnQiLCJfQmFzZUNvbXBvbmVudCIsIl9zdXBlcjIiLCJjbG9zZSIsIl90aGlzMiIsImNsb3NlRXZlbnQiLCJfZGVzdHJveUVsZW1lbnQiLCJlYWNoIiwiZGF0YSIsIk5BTUUkZSIsIkRBVEFfS0VZJDkiLCJFVkVOVF9LRVkkYSIsIkRBVEFfQVBJX0tFWSQ2IiwiQ0xBU1NfTkFNRV9BQ1RJVkUkMyIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFJDUiLCJFVkVOVF9DTElDS19EQVRBX0FQSSQ2IiwiQnV0dG9uIiwiX0Jhc2VDb21wb25lbnQyIiwiX3N1cGVyMyIsInRvZ2dsZSIsImJ1dHRvbiIsIk5BTUUkZCIsIkVWRU5UX0tFWSQ5IiwiRVZFTlRfVE9VQ0hTVEFSVCIsIkVWRU5UX1RPVUNITU9WRSIsIkVWRU5UX1RPVUNIRU5EIiwiRVZFTlRfUE9JTlRFUkRPV04iLCJFVkVOVF9QT0lOVEVSVVAiLCJQT0lOVEVSX1RZUEVfVE9VQ0giLCJQT0lOVEVSX1RZUEVfUEVOIiwiQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UIiwiU1dJUEVfVEhSRVNIT0xEIiwiRGVmYXVsdCRjIiwiZW5kQ2FsbGJhY2siLCJsZWZ0Q2FsbGJhY2siLCJyaWdodENhbGxiYWNrIiwiRGVmYXVsdFR5cGUkYyIsIlN3aXBlIiwiX0NvbmZpZzIiLCJfc3VwZXI0IiwiX3RoaXMzIiwiaXNTdXBwb3J0ZWQiLCJfZGVsdGFYIiwiX3N1cHBvcnRQb2ludGVyRXZlbnRzIiwiUG9pbnRlckV2ZW50IiwiX2luaXRFdmVudHMiLCJfc3RhcnQiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIl9ldmVudElzUG9pbnRlclBlblRvdWNoIiwiX2VuZCIsIl9oYW5kbGVTd2lwZSIsIl9tb3ZlIiwiYWJzRGVsdGFYIiwiYWJzIiwiZGlyZWN0aW9uIiwiX3RoaXM0IiwiYWRkIiwicG9pbnRlclR5cGUiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIk5BTUUkYyIsIkRBVEFfS0VZJDgiLCJFVkVOVF9LRVkkOCIsIkRBVEFfQVBJX0tFWSQ1IiwiQVJST1dfTEVGVF9LRVkkMSIsIkFSUk9XX1JJR0hUX0tFWSQxIiwiVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCIsIk9SREVSX05FWFQiLCJPUkRFUl9QUkVWIiwiRElSRUNUSU9OX0xFRlQiLCJESVJFQ1RJT05fUklHSFQiLCJFVkVOVF9TTElERSIsIkVWRU5UX1NMSUQiLCJFVkVOVF9LRVlET1dOJDEiLCJFVkVOVF9NT1VTRUVOVEVSJDEiLCJFVkVOVF9NT1VTRUxFQVZFJDEiLCJFVkVOVF9EUkFHX1NUQVJUIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSQzIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNSIsIkNMQVNTX05BTUVfQ0FST1VTRUwiLCJDTEFTU19OQU1FX0FDVElWRSQyIiwiQ0xBU1NfTkFNRV9TTElERSIsIkNMQVNTX05BTUVfRU5EIiwiQ0xBU1NfTkFNRV9TVEFSVCIsIkNMQVNTX05BTUVfTkVYVCIsIkNMQVNTX05BTUVfUFJFViIsIlNFTEVDVE9SX0FDVElWRSIsIlNFTEVDVE9SX0lURU0iLCJTRUxFQ1RPUl9BQ1RJVkVfSVRFTSIsIlNFTEVDVE9SX0lURU1fSU1HIiwiU0VMRUNUT1JfSU5ESUNBVE9SUyIsIlNFTEVDVE9SX0RBVEFfU0xJREUiLCJTRUxFQ1RPUl9EQVRBX1JJREUiLCJLRVlfVE9fRElSRUNUSU9OIiwiX2RlZmluZVByb3BlcnR5IiwiRGVmYXVsdCRiIiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInBhdXNlIiwicmlkZSIsInRvdWNoIiwid3JhcCIsIkRlZmF1bHRUeXBlJGIiLCJDYXJvdXNlbCIsIl9CYXNlQ29tcG9uZW50MyIsIl9zdXBlcjUiLCJfdGhpczUiLCJfaW50ZXJ2YWwiLCJfYWN0aXZlRWxlbWVudCIsIl9pc1NsaWRpbmciLCJ0b3VjaFRpbWVvdXQiLCJfc3dpcGVIZWxwZXIiLCJfaW5kaWNhdG9yc0VsZW1lbnQiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJjeWNsZSIsIl9zbGlkZSIsIm5leHRXaGVuVmlzaWJsZSIsImhpZGRlbiIsIl9jbGVhckludGVydmFsIiwiX3RoaXM2IiwiX3VwZGF0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJfbWF5YmVFbmFibGVDeWNsZSIsIl90aGlzNyIsInRvIiwiX3RoaXM4IiwiaXRlbXMiLCJfZ2V0SXRlbXMiLCJhY3RpdmVJbmRleCIsIl9nZXRJdGVtSW5kZXgiLCJfZ2V0QWN0aXZlIiwib3JkZXIiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwiZGVmYXVsdEludGVydmFsIiwiX3RoaXM5IiwiX2tleWRvd24iLCJfYWRkVG91Y2hFdmVudExpc3RlbmVycyIsIl90aGlzMTAiLCJfaXRlcmF0b3I0IiwiX3N0ZXA0IiwiaW1nIiwiZW5kQ2FsbEJhY2siLCJjbGVhclRpbWVvdXQiLCJzd2lwZUNvbmZpZyIsIl9kaXJlY3Rpb25Ub09yZGVyIiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJhY3RpdmVJbmRpY2F0b3IiLCJuZXdBY3RpdmVJbmRpY2F0b3IiLCJlbGVtZW50SW50ZXJ2YWwiLCJwYXJzZUludCIsIl90aGlzMTEiLCJpc05leHQiLCJuZXh0RWxlbWVudCIsIm5leHRFbGVtZW50SW5kZXgiLCJ0cmlnZ2VyRXZlbnQiLCJfb3JkZXJUb0RpcmVjdGlvbiIsInNsaWRlRXZlbnQiLCJpc0N5Y2xpbmciLCJkaXJlY3Rpb25hbENsYXNzTmFtZSIsIm9yZGVyQ2xhc3NOYW1lIiwiY29tcGxldGVDYWxsQmFjayIsIl9pc0FuaW1hdGVkIiwiY2xlYXJJbnRlcnZhbCIsImNhcm91c2VsIiwic2xpZGVJbmRleCIsImNhcm91c2VscyIsIl9pdGVyYXRvcjUiLCJfc3RlcDUiLCJOQU1FJGIiLCJEQVRBX0tFWSQ3IiwiRVZFTlRfS0VZJDciLCJEQVRBX0FQSV9LRVkkNCIsIkVWRU5UX1NIT1ckNiIsIkVWRU5UX1NIT1dOJDYiLCJFVkVOVF9ISURFJDYiLCJFVkVOVF9ISURERU4kNiIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJJDQiLCJDTEFTU19OQU1FX1NIT1ckNyIsIkNMQVNTX05BTUVfQ09MTEFQU0UiLCJDTEFTU19OQU1FX0NPTExBUFNJTkciLCJDTEFTU19OQU1FX0NPTExBUFNFRCIsIkNMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOIiwiQ0xBU1NfTkFNRV9IT1JJWk9OVEFMIiwiV0lEVEgiLCJIRUlHSFQiLCJTRUxFQ1RPUl9BQ1RJVkVTIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUkNCIsIkRlZmF1bHQkYSIsInBhcmVudCIsIkRlZmF1bHRUeXBlJGEiLCJDb2xsYXBzZSIsIl9CYXNlQ29tcG9uZW50NCIsIl9zdXBlcjYiLCJfdGhpczEyIiwiX2lzVHJhbnNpdGlvbmluZyIsIl90cmlnZ2VyQXJyYXkiLCJ0b2dnbGVMaXN0IiwiX2l0ZXJhdG9yNiIsIl9zdGVwNiIsImVsZW0iLCJmaWx0ZXJFbGVtZW50IiwiZm91bmRFbGVtZW50IiwiX2luaXRpYWxpemVDaGlsZHJlbiIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJfaXNTaG93biIsImhpZGUiLCJzaG93IiwiX3RoaXMxMyIsImFjdGl2ZUNoaWxkcmVuIiwiX2dldEZpcnN0TGV2ZWxDaGlsZHJlbiIsInN0YXJ0RXZlbnQiLCJfaXRlcmF0b3I3IiwiX3N0ZXA3IiwiYWN0aXZlSW5zdGFuY2UiLCJkaW1lbnNpb24iLCJfZ2V0RGltZW5zaW9uIiwiY29tcGxldGUiLCJjYXBpdGFsaXplZERpbWVuc2lvbiIsInNjcm9sbFNpemUiLCJfdGhpczE0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiX2l0ZXJhdG9yOCIsIl9zdGVwOCIsIl9pdGVyYXRvcjkiLCJfc3RlcDkiLCJzZWxlY3RlZCIsInRyaWdnZXJBcnJheSIsImlzT3BlbiIsIl9pdGVyYXRvcjEwIiwiX3N0ZXAxMCIsIl9pdGVyYXRvcjExIiwiX3N0ZXAxMSIsInRvcCIsInJpZ2h0IiwiYXV0byIsImJhc2VQbGFjZW1lbnRzIiwic3RhcnQiLCJlbmQiLCJjbGlwcGluZ1BhcmVudHMiLCJ2aWV3cG9ydCIsInBvcHBlciIsInJlZmVyZW5jZSIsInZhcmlhdGlvblBsYWNlbWVudHMiLCJyZWR1Y2UiLCJhY2MiLCJwbGFjZW1lbnQiLCJwbGFjZW1lbnRzIiwiYmVmb3JlUmVhZCIsInJlYWQiLCJhZnRlclJlYWQiLCJiZWZvcmVNYWluIiwibWFpbiIsImFmdGVyTWFpbiIsImJlZm9yZVdyaXRlIiwid3JpdGUiLCJhZnRlcldyaXRlIiwibW9kaWZpZXJQaGFzZXMiLCJnZXROb2RlTmFtZSIsIm5vZGVOYW1lIiwiZ2V0V2luZG93Iiwibm9kZSIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsImlzRWxlbWVudCIsIk93bkVsZW1lbnQiLCJpc0hUTUxFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJpc1NoYWRvd1Jvb3QiLCJhcHBseVN0eWxlcyIsIl9yZWYiLCJzdGF0ZSIsImVsZW1lbnRzIiwic3R5bGVzIiwiYXNzaWduIiwiZWZmZWN0JDIiLCJfcmVmMiIsImluaXRpYWxTdHlsZXMiLCJwb3NpdGlvbiIsIm9wdGlvbnMiLCJzdHJhdGVneSIsIm1hcmdpbiIsImFycm93Iiwic3R5bGVQcm9wZXJ0aWVzIiwiaGFzT3duUHJvcGVydHkiLCJhdHRyaWJ1dGUiLCJhcHBseVN0eWxlcyQxIiwiZW5hYmxlZCIsInBoYXNlIiwiZWZmZWN0IiwicmVxdWlyZXMiLCJnZXRCYXNlUGxhY2VtZW50Iiwicm91bmQiLCJnZXRVQVN0cmluZyIsInVhRGF0YSIsInVzZXJBZ2VudERhdGEiLCJicmFuZHMiLCJpdGVtIiwiYnJhbmQiLCJ2ZXJzaW9uIiwidXNlckFnZW50IiwiaXNMYXlvdXRWaWV3cG9ydCIsImluY2x1ZGVTY2FsZSIsImlzRml4ZWRTdHJhdGVneSIsImNsaWVudFJlY3QiLCJzY2FsZVgiLCJzY2FsZVkiLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwidmlzdWFsVmlld3BvcnQiLCJhZGRWaXN1YWxPZmZzZXRzIiwieCIsIm9mZnNldExlZnQiLCJ5Iiwib2Zmc2V0VG9wIiwiZ2V0TGF5b3V0UmVjdCIsInJvb3ROb2RlIiwiaXNTYW1lTm9kZSIsImhvc3QiLCJnZXRDb21wdXRlZFN0eWxlJDEiLCJpc1RhYmxlRWxlbWVudCIsImdldERvY3VtZW50RWxlbWVudCIsImdldFBhcmVudE5vZGUiLCJhc3NpZ25lZFNsb3QiLCJnZXRUcnVlT2Zmc2V0UGFyZW50Iiwib2Zmc2V0UGFyZW50IiwiZ2V0Q29udGFpbmluZ0Jsb2NrIiwiaXNGaXJlZm94IiwiaXNJRSIsImVsZW1lbnRDc3MiLCJjdXJyZW50Tm9kZSIsImNzcyIsInBlcnNwZWN0aXZlIiwiY29udGFpbiIsIndpbGxDaGFuZ2UiLCJnZXRPZmZzZXRQYXJlbnQiLCJnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQiLCJ3aXRoaW4iLCJtaW4kMSIsIm1heCQxIiwid2l0aGluTWF4Q2xhbXAiLCJ2IiwiZ2V0RnJlc2hTaWRlT2JqZWN0IiwibWVyZ2VQYWRkaW5nT2JqZWN0IiwicGFkZGluZ09iamVjdCIsImV4cGFuZFRvSGFzaE1hcCIsImhhc2hNYXAiLCJ0b1BhZGRpbmdPYmplY3QiLCJwYWRkaW5nIiwicmVjdHMiLCJfc3RhdGUkbW9kaWZpZXJzRGF0YSQiLCJhcnJvd0VsZW1lbnQiLCJwb3BwZXJPZmZzZXRzIiwibW9kaWZpZXJzRGF0YSIsImJhc2VQbGFjZW1lbnQiLCJheGlzIiwiaXNWZXJ0aWNhbCIsImxlbiIsImFycm93UmVjdCIsIm1pblByb3AiLCJtYXhQcm9wIiwiZW5kRGlmZiIsInN0YXJ0RGlmZiIsImFycm93T2Zmc2V0UGFyZW50IiwiY2xpZW50U2l6ZSIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwiY2VudGVyVG9SZWZlcmVuY2UiLCJjZW50ZXIiLCJvZmZzZXQiLCJheGlzUHJvcCIsImNlbnRlck9mZnNldCIsImVmZmVjdCQxIiwiX29wdGlvbnMkZWxlbWVudCIsImFycm93JDEiLCJyZXF1aXJlc0lmRXhpc3RzIiwiZ2V0VmFyaWF0aW9uIiwidW5zZXRTaWRlcyIsInJvdW5kT2Zmc2V0c0J5RFBSIiwid2luIiwiZHByIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm1hcFRvU3R5bGVzIiwiX09iamVjdCRhc3NpZ24yIiwicG9wcGVyUmVjdCIsInZhcmlhdGlvbiIsIm9mZnNldHMiLCJncHVBY2NlbGVyYXRpb24iLCJhZGFwdGl2ZSIsInJvdW5kT2Zmc2V0cyIsImlzRml4ZWQiLCJfb2Zmc2V0cyR4IiwiX29mZnNldHMkeSIsIl9yZWYzIiwiaGFzWCIsImhhc1kiLCJzaWRlWCIsInNpZGVZIiwiaGVpZ2h0UHJvcCIsIndpZHRoUHJvcCIsIm9mZnNldFkiLCJvZmZzZXRYIiwiY29tbW9uU3R5bGVzIiwiX3JlZjQiLCJfT2JqZWN0JGFzc2lnbiIsImNvbXB1dGVTdHlsZXMiLCJfcmVmNSIsIl9vcHRpb25zJGdwdUFjY2VsZXJhdCIsIl9vcHRpb25zJGFkYXB0aXZlIiwiX29wdGlvbnMkcm91bmRPZmZzZXRzIiwiY29tcHV0ZVN0eWxlcyQxIiwicGFzc2l2ZSIsIl9vcHRpb25zJHNjcm9sbCIsInNjcm9sbCIsIl9vcHRpb25zJHJlc2l6ZSIsInJlc2l6ZSIsInNjcm9sbFBhcmVudHMiLCJzY3JvbGxQYXJlbnQiLCJ1cGRhdGUiLCJldmVudExpc3RlbmVycyIsImhhc2gkMSIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwibWF0Y2hlZCIsImhhc2giLCJnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCIsImdldFdpbmRvd1Njcm9sbCIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZ2V0V2luZG93U2Nyb2xsQmFyWCIsImdldFZpZXdwb3J0UmVjdCIsImh0bWwiLCJsYXlvdXRWaWV3cG9ydCIsImdldERvY3VtZW50UmVjdCIsIl9lbGVtZW50JG93bmVyRG9jdW1lbiIsIndpblNjcm9sbCIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0IiwiaXNTY3JvbGxQYXJlbnQiLCJfZ2V0Q29tcHV0ZWRTdHlsZSIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiZ2V0U2Nyb2xsUGFyZW50IiwibGlzdFNjcm9sbFBhcmVudHMiLCJpc0JvZHkiLCJ1cGRhdGVkTGlzdCIsInJlY3RUb0NsaWVudFJlY3QiLCJyZWN0IiwiZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUiLCJjbGlwcGluZ1BhcmVudCIsImdldENsaXBwaW5nUGFyZW50cyIsImNhbkVzY2FwZUNsaXBwaW5nIiwiY2xpcHBlckVsZW1lbnQiLCJnZXRDbGlwcGluZ1JlY3QiLCJib3VuZGFyeSIsInJvb3RCb3VuZGFyeSIsIm1haW5DbGlwcGluZ1BhcmVudHMiLCJmaXJzdENsaXBwaW5nUGFyZW50IiwiY2xpcHBpbmdSZWN0IiwiYWNjUmVjdCIsImNvbXB1dGVPZmZzZXRzIiwiY29tbW9uWCIsImNvbW1vblkiLCJtYWluQXhpcyIsImRldGVjdE92ZXJmbG93IiwiX29wdGlvbnMiLCJfb3B0aW9ucyRwbGFjZW1lbnQiLCJfb3B0aW9ucyRzdHJhdGVneSIsIl9vcHRpb25zJGJvdW5kYXJ5IiwiX29wdGlvbnMkcm9vdEJvdW5kYXJ5IiwiX29wdGlvbnMkZWxlbWVudENvbnRlIiwiZWxlbWVudENvbnRleHQiLCJfb3B0aW9ucyRhbHRCb3VuZGFyeSIsImFsdEJvdW5kYXJ5IiwiX29wdGlvbnMkcGFkZGluZyIsImFsdENvbnRleHQiLCJjbGlwcGluZ0NsaWVudFJlY3QiLCJjb250ZXh0RWxlbWVudCIsInJlZmVyZW5jZUNsaWVudFJlY3QiLCJwb3BwZXJDbGllbnRSZWN0IiwiZWxlbWVudENsaWVudFJlY3QiLCJvdmVyZmxvd09mZnNldHMiLCJvZmZzZXREYXRhIiwibXVsdGlwbHkiLCJjb21wdXRlQXV0b1BsYWNlbWVudCIsImZsaXBWYXJpYXRpb25zIiwiX29wdGlvbnMkYWxsb3dlZEF1dG9QIiwiYWxsb3dlZEF1dG9QbGFjZW1lbnRzIiwicGxhY2VtZW50cyQxIiwiYWxsb3dlZFBsYWNlbWVudHMiLCJvdmVyZmxvd3MiLCJzb3J0IiwiYSIsImIiLCJnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyIsIm9wcG9zaXRlUGxhY2VtZW50IiwiZmxpcCIsIl9za2lwIiwiX29wdGlvbnMkbWFpbkF4aXMiLCJjaGVja01haW5BeGlzIiwiX29wdGlvbnMkYWx0QXhpcyIsImFsdEF4aXMiLCJjaGVja0FsdEF4aXMiLCJzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMiLCJmYWxsYmFja1BsYWNlbWVudHMiLCJfb3B0aW9ucyRmbGlwVmFyaWF0aW8iLCJwcmVmZXJyZWRQbGFjZW1lbnQiLCJpc0Jhc2VQbGFjZW1lbnQiLCJyZWZlcmVuY2VSZWN0IiwiY2hlY2tzTWFwIiwibWFrZUZhbGxiYWNrQ2hlY2tzIiwiZmlyc3RGaXR0aW5nUGxhY2VtZW50IiwiaSIsIl9iYXNlUGxhY2VtZW50IiwiaXNTdGFydFZhcmlhdGlvbiIsIm1haW5WYXJpYXRpb25TaWRlIiwiYWx0VmFyaWF0aW9uU2lkZSIsImNoZWNrcyIsImV2ZXJ5IiwiY2hlY2siLCJudW1iZXJPZkNoZWNrcyIsIl9sb29wIiwiX2kiLCJmaXR0aW5nUGxhY2VtZW50IiwiX3JldCIsInJlc2V0IiwiZmxpcCQxIiwiZ2V0U2lkZU9mZnNldHMiLCJwcmV2ZW50ZWRPZmZzZXRzIiwiaXNBbnlTaWRlRnVsbHlDbGlwcGVkIiwic29tZSIsInNpZGUiLCJwcmV2ZW50T3ZlcmZsb3ciLCJyZWZlcmVuY2VPdmVyZmxvdyIsInBvcHBlckFsdE92ZXJmbG93IiwicmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzIiwicG9wcGVyRXNjYXBlT2Zmc2V0cyIsImlzUmVmZXJlbmNlSGlkZGVuIiwiaGFzUG9wcGVyRXNjYXBlZCIsImhpZGUkMSIsImRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZIiwiaW52ZXJ0RGlzdGFuY2UiLCJza2lkZGluZyIsImRpc3RhbmNlIiwiX29wdGlvbnMkb2Zmc2V0IiwiX2RhdGEkc3RhdGUkcGxhY2VtZW50Iiwib2Zmc2V0JDEiLCJwb3BwZXJPZmZzZXRzJDEiLCJnZXRBbHRBeGlzIiwiX29wdGlvbnMkdGV0aGVyIiwidGV0aGVyIiwiX29wdGlvbnMkdGV0aGVyT2Zmc2V0IiwidGV0aGVyT2Zmc2V0IiwidGV0aGVyT2Zmc2V0VmFsdWUiLCJub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUiLCJvZmZzZXRNb2RpZmllclN0YXRlIiwiX29mZnNldE1vZGlmaWVyU3RhdGUkIiwibWFpblNpZGUiLCJhbHRTaWRlIiwiYWRkaXRpdmUiLCJtaW5MZW4iLCJtYXhMZW4iLCJhcnJvd1BhZGRpbmdPYmplY3QiLCJhcnJvd1BhZGRpbmdNaW4iLCJhcnJvd1BhZGRpbmdNYXgiLCJhcnJvd0xlbiIsIm1pbk9mZnNldCIsIm1heE9mZnNldCIsImNsaWVudE9mZnNldCIsIm9mZnNldE1vZGlmaWVyVmFsdWUiLCJ0ZXRoZXJNaW4iLCJ0ZXRoZXJNYXgiLCJwcmV2ZW50ZWRPZmZzZXQiLCJfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIiwiX21haW5TaWRlIiwiX2FsdFNpZGUiLCJfb2Zmc2V0IiwiX2xlbiIsIl9taW4iLCJfbWF4IiwiaXNPcmlnaW5TaWRlIiwiX29mZnNldE1vZGlmaWVyVmFsdWUiLCJfdGV0aGVyTWluIiwiX3RldGhlck1heCIsIl9wcmV2ZW50ZWRPZmZzZXQiLCJwcmV2ZW50T3ZlcmZsb3ckMSIsImdldEhUTUxFbGVtZW50U2Nyb2xsIiwiZ2V0Tm9kZVNjcm9sbCIsImlzRWxlbWVudFNjYWxlZCIsImdldENvbXBvc2l0ZVJlY3QiLCJlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCIsImlzT2Zmc2V0UGFyZW50QW5FbGVtZW50Iiwib2Zmc2V0UGFyZW50SXNTY2FsZWQiLCJtb2RpZmllcnMiLCJ2aXNpdGVkIiwicmVzdWx0IiwibW9kaWZpZXIiLCJkZXAiLCJkZXBNb2RpZmllciIsIm9yZGVyTW9kaWZpZXJzIiwib3JkZXJlZE1vZGlmaWVycyIsImRlYm91bmNlIiwicGVuZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIm1lcmdlQnlOYW1lIiwibWVyZ2VkIiwiY3VycmVudCIsImV4aXN0aW5nIiwiREVGQVVMVF9PUFRJT05TIiwiYXJlVmFsaWRFbGVtZW50cyIsIl9rZXkiLCJwb3BwZXJHZW5lcmF0b3IiLCJnZW5lcmF0b3JPcHRpb25zIiwiX2dlbmVyYXRvck9wdGlvbnMiLCJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYiLCJkZWZhdWx0TW9kaWZpZXJzIiwiX2dlbmVyYXRvck9wdGlvbnMkZGVmMiIsImRlZmF1bHRPcHRpb25zIiwiY3JlYXRlUG9wcGVyIiwiZWZmZWN0Q2xlYW51cEZucyIsImlzRGVzdHJveWVkIiwic2V0T3B0aW9ucyIsInNldE9wdGlvbnNBY3Rpb24iLCJjbGVhbnVwTW9kaWZpZXJFZmZlY3RzIiwibSIsInJ1bk1vZGlmaWVyRWZmZWN0cyIsImZvcmNlVXBkYXRlIiwiX3N0YXRlJGVsZW1lbnRzIiwiX3N0YXRlJG9yZGVyZWRNb2RpZmllIiwiX3N0YXRlJG9yZGVyZWRNb2RpZmllMiIsImRlc3Ryb3kiLCJvbkZpcnN0VXBkYXRlIiwiX3JlZjMkb3B0aW9ucyIsImNsZWFudXBGbiIsIm5vb3BGbiIsImNyZWF0ZVBvcHBlciQyIiwiZGVmYXVsdE1vZGlmaWVycyQxIiwiY3JlYXRlUG9wcGVyJDEiLCJQb3BwZXIiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJjcmVhdGVQb3BwZXJCYXNlIiwiY3JlYXRlUG9wcGVyTGl0ZSIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiTkFNRSRhIiwiREFUQV9LRVkkNiIsIkVWRU5UX0tFWSQ2IiwiREFUQV9BUElfS0VZJDMiLCJFU0NBUEVfS0VZJDIiLCJUQUJfS0VZJDEiLCJBUlJPV19VUF9LRVkkMSIsIkFSUk9XX0RPV05fS0VZJDEiLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJFVkVOVF9ISURFJDUiLCJFVkVOVF9ISURERU4kNSIsIkVWRU5UX1NIT1ckNSIsIkVWRU5UX1NIT1dOJDUiLCJFVkVOVF9DTElDS19EQVRBX0FQSSQzIiwiRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSIsIkVWRU5UX0tFWVVQX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9TSE9XJDYiLCJDTEFTU19OQU1FX0RST1BVUCIsIkNMQVNTX05BTUVfRFJPUEVORCIsIkNMQVNTX05BTUVfRFJPUFNUQVJUIiwiQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSIiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04iLCJTRUxFQ1RPUl9NRU5VIiwiU0VMRUNUT1JfTkFWQkFSIiwiU0VMRUNUT1JfTkFWQkFSX05BViIsIlNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMiLCJQTEFDRU1FTlRfVE9QIiwiUExBQ0VNRU5UX1RPUEVORCIsIlBMQUNFTUVOVF9CT1RUT00iLCJQTEFDRU1FTlRfQk9UVE9NRU5EIiwiUExBQ0VNRU5UX1JJR0hUIiwiUExBQ0VNRU5UX0xFRlQiLCJQTEFDRU1FTlRfVE9QQ0VOVEVSIiwiUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiIsIkRlZmF1bHQkOSIsImF1dG9DbG9zZSIsImRpc3BsYXkiLCJwb3BwZXJDb25maWciLCJEZWZhdWx0VHlwZSQ5IiwiRHJvcGRvd24iLCJfQmFzZUNvbXBvbmVudDUiLCJfc3VwZXI3IiwiX3RoaXMxNSIsIl9wb3BwZXIiLCJfcGFyZW50IiwiX21lbnUiLCJfaW5OYXZiYXIiLCJfZGV0ZWN0TmF2YmFyIiwic2hvd0V2ZW50IiwiX2NyZWF0ZVBvcHBlciIsIl9yZWY5IiwiX2l0ZXJhdG9yMTIiLCJfc3RlcDEyIiwiZm9jdXMiLCJfY29tcGxldGVIaWRlIiwiaGlkZUV2ZW50IiwiX3JlZjEwIiwiX2l0ZXJhdG9yMTMiLCJfc3RlcDEzIiwicmVmZXJlbmNlRWxlbWVudCIsIl9nZXRQb3BwZXJDb25maWciLCJfZ2V0UGxhY2VtZW50IiwicGFyZW50RHJvcGRvd24iLCJpc0VuZCIsIl9nZXRPZmZzZXQiLCJfdGhpczE2IiwicG9wcGVyRGF0YSIsImRlZmF1bHRCc1BvcHBlckNvbmZpZyIsIl9zZWxlY3RNZW51SXRlbSIsIl9yZWYxMSIsImNsZWFyTWVudXMiLCJvcGVuVG9nZ2xlcyIsIl9pdGVyYXRvcjE0IiwiX3N0ZXAxNCIsImNvbXBvc2VkUGF0aCIsImlzTWVudVRhcmdldCIsImRhdGFBcGlLZXlkb3duSGFuZGxlciIsImlzSW5wdXQiLCJpc0VzY2FwZUV2ZW50IiwiaXNVcE9yRG93bkV2ZW50IiwiZ2V0VG9nZ2xlQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwiU0VMRUNUT1JfRklYRURfQ09OVEVOVCIsIlNFTEVDVE9SX1NUSUNLWV9DT05URU5UIiwiUFJPUEVSVFlfUEFERElORyIsIlBST1BFUlRZX01BUkdJTiIsIlNjcm9sbEJhckhlbHBlciIsImdldFdpZHRoIiwiZG9jdW1lbnRXaWR0aCIsImlubmVyV2lkdGgiLCJfZGlzYWJsZU92ZXJGbG93IiwiX3NldEVsZW1lbnRBdHRyaWJ1dGVzIiwiY2FsY3VsYXRlZFZhbHVlIiwiX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJpc092ZXJmbG93aW5nIiwiX3NhdmVJbml0aWFsQXR0cmlidXRlIiwic3R5bGVQcm9wZXJ0eSIsIl90aGlzMTciLCJzY3JvbGxiYXJXaWR0aCIsIm1hbmlwdWxhdGlvbkNhbGxCYWNrIiwic2V0UHJvcGVydHkiLCJfYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayIsImFjdHVhbFZhbHVlIiwicmVtb3ZlUHJvcGVydHkiLCJjYWxsQmFjayIsIl9pdGVyYXRvcjE1IiwiX3N0ZXAxNSIsInNlbCIsIk5BTUUkOSIsIkNMQVNTX05BTUVfRkFERSQ0IiwiQ0xBU1NfTkFNRV9TSE9XJDUiLCJFVkVOVF9NT1VTRURPV04iLCJEZWZhdWx0JDgiLCJjbGFzc05hbWUiLCJjbGlja0NhbGxiYWNrIiwicm9vdEVsZW1lbnQiLCJEZWZhdWx0VHlwZSQ4IiwiQmFja2Ryb3AiLCJfQ29uZmlnMyIsIl9zdXBlcjgiLCJfdGhpczE4IiwiX2lzQXBwZW5kZWQiLCJfYXBwZW5kIiwiX2dldEVsZW1lbnQiLCJfZW11bGF0ZUFuaW1hdGlvbiIsIl90aGlzMTkiLCJiYWNrZHJvcCIsImNyZWF0ZUVsZW1lbnQiLCJfdGhpczIwIiwiYXBwZW5kIiwiTkFNRSQ4IiwiREFUQV9LRVkkNSIsIkVWRU5UX0tFWSQ1IiwiRVZFTlRfRk9DVVNJTiQyIiwiRVZFTlRfS0VZRE9XTl9UQUIiLCJUQUJfS0VZIiwiVEFCX05BVl9GT1JXQVJEIiwiVEFCX05BVl9CQUNLV0FSRCIsIkRlZmF1bHQkNyIsImF1dG9mb2N1cyIsInRyYXBFbGVtZW50IiwiRGVmYXVsdFR5cGUkNyIsIkZvY3VzVHJhcCIsIl9Db25maWc0IiwiX3N1cGVyOSIsIl90aGlzMjEiLCJfaXNBY3RpdmUiLCJfbGFzdFRhYk5hdkRpcmVjdGlvbiIsImFjdGl2YXRlIiwiX3RoaXMyMiIsIl9oYW5kbGVGb2N1c2luIiwiX2hhbmRsZUtleWRvd24iLCJkZWFjdGl2YXRlIiwic2hpZnRLZXkiLCJOQU1FJDciLCJEQVRBX0tFWSQ0IiwiRVZFTlRfS0VZJDQiLCJEQVRBX0FQSV9LRVkkMiIsIkVTQ0FQRV9LRVkkMSIsIkVWRU5UX0hJREUkNCIsIkVWRU5UX0hJREVfUFJFVkVOVEVEJDEiLCJFVkVOVF9ISURERU4kNCIsIkVWRU5UX1NIT1ckNCIsIkVWRU5UX1NIT1dOJDQiLCJFVkVOVF9SRVNJWkUkMSIsIkVWRU5UX0NMSUNLX0RJU01JU1MiLCJFVkVOVF9NT1VTRURPV05fRElTTUlTUyIsIkVWRU5UX0tFWURPV05fRElTTUlTUyQxIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMiIsIkNMQVNTX05BTUVfT1BFTiIsIkNMQVNTX05BTUVfRkFERSQzIiwiQ0xBU1NfTkFNRV9TSE9XJDQiLCJDTEFTU19OQU1FX1NUQVRJQyIsIk9QRU5fU0VMRUNUT1IkMSIsIlNFTEVDVE9SX0RJQUxPRyIsIlNFTEVDVE9SX01PREFMX0JPRFkiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQyIiwiRGVmYXVsdCQ2IiwiRGVmYXVsdFR5cGUkNiIsIk1vZGFsIiwiX0Jhc2VDb21wb25lbnQ2IiwiX3N1cGVyMTAiLCJfdGhpczIzIiwiX2RpYWxvZyIsIl9iYWNrZHJvcCIsIl9pbml0aWFsaXplQmFja0Ryb3AiLCJfZm9jdXN0cmFwIiwiX2luaXRpYWxpemVGb2N1c1RyYXAiLCJfc2Nyb2xsQmFyIiwiX3RoaXMyNCIsIl9hZGp1c3REaWFsb2ciLCJfc2hvd0VsZW1lbnQiLCJfdGhpczI1IiwiX2hpZGVNb2RhbCIsIl9pOCIsIl9hcnIyIiwiaHRtbEVsZW1lbnQiLCJoYW5kbGVVcGRhdGUiLCJfdGhpczI2IiwibW9kYWxCb2R5IiwidHJhbnNpdGlvbkNvbXBsZXRlIiwiX3RoaXMyNyIsIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwiZXZlbnQyIiwiX3RoaXMyOCIsIl9yZXNldEFkanVzdG1lbnRzIiwiX3RoaXMyOSIsImlzTW9kYWxPdmVyZmxvd2luZyIsImluaXRpYWxPdmVyZmxvd1kiLCJpc0JvZHlPdmVyZmxvd2luZyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiX3RoaXMzMCIsImFscmVhZHlPcGVuIiwiTkFNRSQ2IiwiREFUQV9LRVkkMyIsIkVWRU5UX0tFWSQzIiwiREFUQV9BUElfS0VZJDEiLCJFVkVOVF9MT0FEX0RBVEFfQVBJJDIiLCJFU0NBUEVfS0VZIiwiQ0xBU1NfTkFNRV9TSE9XJDMiLCJDTEFTU19OQU1FX1NIT1dJTkckMSIsIkNMQVNTX05BTUVfSElESU5HIiwiQ0xBU1NfTkFNRV9CQUNLRFJPUCIsIk9QRU5fU0VMRUNUT1IiLCJFVkVOVF9TSE9XJDMiLCJFVkVOVF9TSE9XTiQzIiwiRVZFTlRfSElERSQzIiwiRVZFTlRfSElERV9QUkVWRU5URUQiLCJFVkVOVF9ISURERU4kMyIsIkVWRU5UX1JFU0laRSIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJJDEiLCJFVkVOVF9LRVlET1dOX0RJU01JU1MiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSQxIiwiRGVmYXVsdCQ1IiwiRGVmYXVsdFR5cGUkNSIsIk9mZmNhbnZhcyIsIl9CYXNlQ29tcG9uZW50NyIsIl9zdXBlcjExIiwiX3RoaXMzMSIsIl90aGlzMzIiLCJfdGhpczMzIiwiYmx1ciIsImNvbXBsZXRlQ2FsbGJhY2siLCJfdGhpczM0IiwiX3RoaXMzNSIsIl90aGlzMzYiLCJfaXRlcmF0b3IxNiIsIl9zdGVwMTYiLCJfaXRlcmF0b3IxNyIsIl9zdGVwMTciLCJ1cmlBdHRyaWJ1dGVzIiwiQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwiYWxsb3dlZEF0dHJpYnV0ZSIsImFsbG93ZWRBdHRyaWJ1dGVMaXN0IiwiYXR0cmlidXRlTmFtZSIsIm5vZGVWYWx1ZSIsImF0dHJpYnV0ZVJlZ2V4IiwicmVnZXgiLCJEZWZhdWx0QWxsb3dsaXN0IiwiYXJlYSIsImJyIiwiY29sIiwiY29kZSIsImRpdiIsImVtIiwiaHIiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJsaSIsIm9sIiwicCIsInByZSIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsInNhbml0aXplSHRtbCIsInVuc2FmZUh0bWwiLCJhbGxvd0xpc3QiLCJzYW5pdGl6ZUZ1bmN0aW9uIiwiX3JlZjEyIiwiZG9tUGFyc2VyIiwiRE9NUGFyc2VyIiwiY3JlYXRlZERvY3VtZW50IiwicGFyc2VGcm9tU3RyaW5nIiwiX2l0ZXJhdG9yMTgiLCJfc3RlcDE4IiwiX3JlZjEzIiwiZWxlbWVudE5hbWUiLCJhdHRyaWJ1dGVMaXN0IiwiYWxsb3dlZEF0dHJpYnV0ZXMiLCJfaXRlcmF0b3IxOSIsIl9zdGVwMTkiLCJpbm5lckhUTUwiLCJOQU1FJDUiLCJEZWZhdWx0JDQiLCJjb250ZW50IiwiZXh0cmFDbGFzcyIsInNhbml0aXplIiwic2FuaXRpemVGbiIsInRlbXBsYXRlIiwiRGVmYXVsdFR5cGUkNCIsIkRlZmF1bHRDb250ZW50VHlwZSIsImVudHJ5IiwiVGVtcGxhdGVGYWN0b3J5IiwiX0NvbmZpZzUiLCJfc3VwZXIxMiIsIl90aGlzMzciLCJnZXRDb250ZW50IiwiX3RoaXMzOCIsIl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbiIsImhhc0NvbnRlbnQiLCJjaGFuZ2VDb250ZW50IiwiX2NoZWNrQ29udGVudCIsInRvSHRtbCIsInRlbXBsYXRlV3JhcHBlciIsIl9tYXliZVNhbml0aXplIiwiX2k5IiwiX09iamVjdCRlbnRyaWVzNSIsIl9PYmplY3QkZW50cmllczUkX2kiLCJ0ZXh0IiwiX3NldENvbnRlbnQiLCJfdGVtcGxhdGUkY2xhc3NMaXN0IiwiYXJnIiwiX2kxMCIsIl9PYmplY3QkZW50cmllczYiLCJfT2JqZWN0JGVudHJpZXM2JF9pIiwidGVtcGxhdGVFbGVtZW50IiwiX3B1dEVsZW1lbnRJblRlbXBsYXRlIiwiTkFNRSQ0IiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiQ0xBU1NfTkFNRV9GQURFJDIiLCJDTEFTU19OQU1FX01PREFMIiwiQ0xBU1NfTkFNRV9TSE9XJDIiLCJTRUxFQ1RPUl9UT09MVElQX0lOTkVSIiwiU0VMRUNUT1JfTU9EQUwiLCJFVkVOVF9NT0RBTF9ISURFIiwiVFJJR0dFUl9IT1ZFUiIsIlRSSUdHRVJfRk9DVVMiLCJUUklHR0VSX0NMSUNLIiwiVFJJR0dFUl9NQU5VQUwiLCJFVkVOVF9ISURFJDIiLCJFVkVOVF9ISURERU4kMiIsIkVWRU5UX1NIT1ckMiIsIkVWRU5UX1NIT1dOJDIiLCJFVkVOVF9JTlNFUlRFRCIsIkVWRU5UX0NMSUNLJDEiLCJFVkVOVF9GT0NVU0lOJDEiLCJFVkVOVF9GT0NVU09VVCQxIiwiRVZFTlRfTU9VU0VFTlRFUiIsIkVWRU5UX01PVVNFTEVBVkUiLCJBdHRhY2htZW50TWFwIiwiQVVUTyIsIlRPUCIsIlJJR0hUIiwiQk9UVE9NIiwiTEVGVCIsIkRlZmF1bHQkMyIsImFuaW1hdGlvbiIsImN1c3RvbUNsYXNzIiwiZGVsYXkiLCJ0aXRsZSIsIkRlZmF1bHRUeXBlJDMiLCJUb29sdGlwIiwiX0Jhc2VDb21wb25lbnQ4IiwiX3N1cGVyMTMiLCJfdGhpczM5IiwiX2lzRW5hYmxlZCIsIl90aW1lb3V0IiwiX2lzSG92ZXJlZCIsIl9hY3RpdmVUcmlnZ2VyIiwiX3RlbXBsYXRlRmFjdG9yeSIsIl9uZXdDb250ZW50IiwidGlwIiwiX3NldExpc3RlbmVycyIsIl9maXhUaXRsZSIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiY2xpY2siLCJfbGVhdmUiLCJfZW50ZXIiLCJfaGlkZU1vZGFsSGFuZGxlciIsIl9kaXNwb3NlUG9wcGVyIiwiX3RoaXM0MCIsIl9pc1dpdGhDb250ZW50Iiwic2hhZG93Um9vdCIsImlzSW5UaGVEb20iLCJfZ2V0VGlwRWxlbWVudCIsIl9yZWYxNCIsIl9pdGVyYXRvcjIwIiwiX3N0ZXAyMCIsIl90aGlzNDEiLCJfcmVmMTUiLCJfaXRlcmF0b3IyMSIsIl9zdGVwMjEiLCJfaXNXaXRoQWN0aXZlVHJpZ2dlciIsIl9nZXRUaXRsZSIsIl9jcmVhdGVUaXBFbGVtZW50IiwiX2dldENvbnRlbnRGb3JUZW1wbGF0ZSIsIl9nZXRUZW1wbGF0ZUZhY3RvcnkiLCJ0aXBJZCIsInNldENvbnRlbnQiLCJfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0IiwiX2dldERlbGVnYXRlQ29uZmlnIiwiYXR0YWNobWVudCIsIl90aGlzNDIiLCJfdGhpczQzIiwiX3RoaXM0NCIsInRyaWdnZXJzIiwiX2l0ZXJhdG9yMjIiLCJfc3RlcDIyIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX3RoaXM0NSIsIl9zZXRUaW1lb3V0IiwiX3RoaXM0NiIsInRpbWVvdXQiLCJkYXRhQXR0cmlidXRlcyIsIl9pMTEiLCJfT2JqZWN0JGtleXMyIiwiZGF0YUF0dHJpYnV0ZSIsIl9pMTIiLCJfT2JqZWN0JGVudHJpZXM3IiwiX09iamVjdCRlbnRyaWVzNyRfaSIsIk5BTUUkMyIsIlNFTEVDVE9SX1RJVExFIiwiU0VMRUNUT1JfQ09OVEVOVCIsIkRlZmF1bHQkMiIsIkRlZmF1bHRUeXBlJDIiLCJQb3BvdmVyIiwiX1Rvb2x0aXAiLCJfc3VwZXIxNCIsIl9nZXRDb250ZW50IiwiX3JlZjE3IiwiTkFNRSQyIiwiREFUQV9LRVkkMiIsIkVWRU5UX0tFWSQyIiwiREFUQV9BUElfS0VZIiwiRVZFTlRfQUNUSVZBVEUiLCJFVkVOVF9DTElDSyIsIkVWRU5UX0xPQURfREFUQV9BUEkkMSIsIkNMQVNTX05BTUVfRFJPUERPV05fSVRFTSIsIkNMQVNTX05BTUVfQUNUSVZFJDEiLCJTRUxFQ1RPUl9EQVRBX1NQWSIsIlNFTEVDVE9SX1RBUkdFVF9MSU5LUyIsIlNFTEVDVE9SX05BVl9MSVNUX0dST1VQIiwiU0VMRUNUT1JfTkFWX0xJTktTIiwiU0VMRUNUT1JfTkFWX0lURU1TIiwiU0VMRUNUT1JfTElTVF9JVEVNUyIsIlNFTEVDVE9SX0xJTktfSVRFTVMiLCJTRUxFQ1RPUl9EUk9QRE9XTiIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSQxIiwiRGVmYXVsdCQxIiwicm9vdE1hcmdpbiIsInNtb290aFNjcm9sbCIsInRocmVzaG9sZCIsIkRlZmF1bHRUeXBlJDEiLCJTY3JvbGxTcHkiLCJfQmFzZUNvbXBvbmVudDkiLCJfc3VwZXIxNSIsIl90aGlzNDciLCJfdGFyZ2V0TGlua3MiLCJfb2JzZXJ2YWJsZVNlY3Rpb25zIiwiX3Jvb3RFbGVtZW50IiwiX2FjdGl2ZVRhcmdldCIsIl9vYnNlcnZlciIsIl9wcmV2aW91c1Njcm9sbERhdGEiLCJ2aXNpYmxlRW50cnlUb3AiLCJwYXJlbnRTY3JvbGxUb3AiLCJyZWZyZXNoIiwiX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMiLCJfbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwiLCJkaXNjb25uZWN0IiwiX2dldE5ld09ic2VydmVyIiwiX2l0ZXJhdG9yMjMiLCJfc3RlcDIzIiwic2VjdGlvbiIsIm9ic2VydmUiLCJfdGhpczQ4Iiwib2JzZXJ2YWJsZVNlY3Rpb24iLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiX3RoaXM0OSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiX29ic2VydmVyQ2FsbGJhY2siLCJfdGhpczUwIiwidGFyZ2V0RWxlbWVudCIsIl9wcm9jZXNzIiwidXNlclNjcm9sbHNEb3duIiwiX2l0ZXJhdG9yMjQiLCJfc3RlcDI0IiwiaXNJbnRlcnNlY3RpbmciLCJfY2xlYXJBY3RpdmVDbGFzcyIsImVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyIsInRhcmdldExpbmtzIiwiX2l0ZXJhdG9yMjUiLCJfc3RlcDI1IiwiYW5jaG9yIiwiX2FjdGl2YXRlUGFyZW50cyIsIl9pdGVyYXRvcjI2IiwiX3N0ZXAyNiIsImxpc3RHcm91cCIsIl9pdGVyYXRvcjI3IiwiX3N0ZXAyNyIsImFjdGl2ZU5vZGVzIiwiX2l0ZXJhdG9yMjgiLCJfc3RlcDI4IiwiX2l0ZXJhdG9yMjkiLCJfc3RlcDI5Iiwic3B5IiwiTkFNRSQxIiwiREFUQV9LRVkkMSIsIkVWRU5UX0tFWSQxIiwiRVZFTlRfSElERSQxIiwiRVZFTlRfSElEREVOJDEiLCJFVkVOVF9TSE9XJDEiLCJFVkVOVF9TSE9XTiQxIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCJFVkVOVF9LRVlET1dOIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSIsIkFSUk9XX0xFRlRfS0VZIiwiQVJST1dfUklHSFRfS0VZIiwiQVJST1dfVVBfS0VZIiwiQVJST1dfRE9XTl9LRVkiLCJDTEFTU19OQU1FX0FDVElWRSIsIkNMQVNTX05BTUVfRkFERSQxIiwiQ0xBU1NfTkFNRV9TSE9XJDEiLCJDTEFTU19EUk9QRE9XTiIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsIlNFTEVDVE9SX0RST1BET1dOX01FTlUiLCJOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwiU0VMRUNUT1JfVEFCX1BBTkVMIiwiU0VMRUNUT1JfT1VURVIiLCJTRUxFQ1RPUl9JTk5FUiIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwiU0VMRUNUT1JfSU5ORVJfRUxFTSIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSIsIlRhYiIsIl9CYXNlQ29tcG9uZW50MTAiLCJfc3VwZXIxNiIsIl90aGlzNTEiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXMiLCJfZ2V0Q2hpbGRyZW4iLCJpbm5lckVsZW0iLCJfZWxlbUlzQWN0aXZlIiwiYWN0aXZlIiwiX2dldEFjdGl2ZUVsZW0iLCJfZGVhY3RpdmF0ZSIsIl9hY3RpdmF0ZSIsInJlbGF0ZWRFbGVtIiwiX3RoaXM1MiIsIl90b2dnbGVEcm9wRG93biIsIl90aGlzNTMiLCJuZXh0QWN0aXZlRWxlbWVudCIsInByZXZlbnRTY3JvbGwiLCJfdGhpczU0IiwiX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzIiwiX2l0ZXJhdG9yMzAiLCJfc3RlcDMwIiwiX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZCIsIl9nZXRJbm5lckVsZW1lbnQiLCJpc0FjdGl2ZSIsIm91dGVyRWxlbSIsIl9nZXRPdXRlckVsZW1lbnQiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsIiwib3BlbiIsIl9pdGVyYXRvcjMxIiwiX3N0ZXAzMSIsIkVWRU5UX01PVVNFT1ZFUiIsIkVWRU5UX01PVVNFT1VUIiwiRVZFTlRfRk9DVVNJTiIsIkVWRU5UX0ZPQ1VTT1VUIiwiRVZFTlRfSElERSIsIkVWRU5UX0hJRERFTiIsIkVWRU5UX1NIT1ciLCJFVkVOVF9TSE9XTiIsIkNMQVNTX05BTUVfRkFERSIsIkNMQVNTX05BTUVfSElERSIsIkNMQVNTX05BTUVfU0hPVyIsIkNMQVNTX05BTUVfU0hPV0lORyIsImF1dG9oaWRlIiwiVG9hc3QiLCJfQmFzZUNvbXBvbmVudDExIiwiX3N1cGVyMTciLCJfdGhpczU1IiwiX2hhc01vdXNlSW50ZXJhY3Rpb24iLCJfaGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiIsIl90aGlzNTYiLCJfY2xlYXJUaW1lb3V0IiwiX21heWJlU2NoZWR1bGVIaWRlIiwiX3RoaXM1NyIsImlzU2hvd24iLCJfdGhpczU4IiwiX29uSW50ZXJhY3Rpb24iLCJpc0ludGVyYWN0aW5nIiwiX3RoaXM1OSIsImluZGV4X3VtZCJdLCJzb3VyY2VSb290IjoiIn0=