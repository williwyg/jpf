(function webpackUniversalModuleDefinition(root, factory) {
	//Control suite for JPF
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"));
	//Control suite for JPF
	else if(typeof define === 'function' && define.amd)
		define(["knockout"], factory);
	//Control suite for JPF
	else if(typeof exports === 'object')
		exports["jpf"] = factory(require("knockout"));
	//Control suite for JPF
	else
		root["jpf"] = factory(root["knockout"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_knockout__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/elements/anchor/anchor.ts":
/*!***************************************!*\
  !*** ./src/elements/anchor/anchor.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Anchor = (function (_super) {\r\n    __extends(Anchor, _super);\r\n    function Anchor(options) {\r\n        return _super.call(this, \"a\", \"Anchor\", options) || this;\r\n    }\r\n    Anchor.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        ko.applyBindingsToNode(this.element, {\r\n            text: this.options.text,\r\n            attr: {\r\n                href: this.options.href\r\n            }\r\n        });\r\n    };\r\n    return Anchor;\r\n}(uiElement_1.UiElement));\r\nexports.Anchor = Anchor;\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/anchor/anchor.ts?");

/***/ }),

/***/ "./src/elements/button/button.ts":
/*!***************************************!*\
  !*** ./src/elements/button/button.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Button = (function (_super) {\r\n    __extends(Button, _super);\r\n    function Button(options) {\r\n        return _super.call(this, \"button\", \"Button\", options) || this;\r\n    }\r\n    Button.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        var content = this.options.content;\r\n        if (content instanceof uiElement_1.UiElement) {\r\n            this.element.appendChild(content.render());\r\n        }\r\n        else {\r\n            ko.applyBindingsToNode(this.element, { text: content });\r\n        }\r\n        if (ko.unwrap(this.options.disabled)) {\r\n            ko.applyBindingsToNode(this.element, { attr: { disabled: this.options.disabled } });\r\n        }\r\n    };\r\n    return Button;\r\n}(uiElement_1.UiElement));\r\nexports.Button = Button;\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/button/button.ts?");

/***/ }),

/***/ "./src/elements/div/div.ts":
/*!*********************************!*\
  !*** ./src/elements/div/div.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Div = (function (_super) {\r\n    __extends(Div, _super);\r\n    function Div(options) {\r\n        return _super.call(this, \"div\", \"Div\", options) || this;\r\n    }\r\n    Div.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        if (this.options.text) {\r\n            if (this.options.isHtml) {\r\n                ko.applyBindingsToNode(this.element, { html: this.options.text });\r\n            }\r\n            else {\r\n                ko.applyBindingsToNode(this.element, { text: this.options.text });\r\n            }\r\n        }\r\n    };\r\n    return Div;\r\n}(uiElement_1.UiElement));\r\nexports.Div = Div;\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/div/div.ts?");

/***/ }),

/***/ "./src/elements/flexbox/flexbox.ts":
/*!*****************************************!*\
  !*** ./src/elements/flexbox/flexbox.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Flexbox = (function (_super) {\r\n    __extends(Flexbox, _super);\r\n    function Flexbox(options) {\r\n        var _this = _super.call(this, \"div\", \"Flexbox\", options) || this;\r\n        _this.setStyle({ display: \"flex\" }, true);\r\n        if (!_this.options.flexDirection) {\r\n            _this.options.flexDirection = \"row\";\r\n        }\r\n        if (!_this.options.flexWrap) {\r\n            _this.options.flexWrap = \"wrap\";\r\n        }\r\n        if (!_this.options.justifyContent) {\r\n            _this.options.justifyContent = \"flex-start\";\r\n        }\r\n        if (!_this.options.alignItems) {\r\n            _this.options.alignItems = \"flex-start\";\r\n        }\r\n        if (!_this.options.alignContent) {\r\n            _this.options.alignContent = \"flex-start\";\r\n        }\r\n        _this.setStyle({\r\n            flexDirection: _this.options.flexDirection,\r\n            flexWrap: _this.options.flexWrap,\r\n            justifyContent: _this.options.justifyContent,\r\n            alignItems: _this.options.alignItems,\r\n            alignContent: _this.options.alignContent\r\n        });\r\n        return _this;\r\n    }\r\n    return Flexbox;\r\n}(uiElement_1.UiElement));\r\nexports.Flexbox = Flexbox;\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/flexbox/flexbox.ts?");

/***/ }),

/***/ "./src/elements/image/image.ts":
/*!*************************************!*\
  !*** ./src/elements/image/image.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Image = (function (_super) {\r\n    __extends(Image, _super);\r\n    function Image(options) {\r\n        return _super.call(this, \"img\", \"Image\", options) || this;\r\n    }\r\n    Image.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        ko.applyBindingsToNode(this.element, {\r\n            attr: {\r\n                src: this.options.src,\r\n                alt: this.options.alt\r\n            }\r\n        });\r\n    };\r\n    return Image;\r\n}(uiElement_1.UiElement));\r\nexports.Image = Image;\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/image/image.ts?");

/***/ }),

/***/ "./src/elements/index.ts":
/*!*******************************!*\
  !*** ./src/elements/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Input = __webpack_require__(/*! ./input/index */ \"./src/elements/input/index.ts\");\r\nexports.Input = Input;\r\n__export(__webpack_require__(/*! ./anchor/anchor */ \"./src/elements/anchor/anchor.ts\"));\r\n__export(__webpack_require__(/*! ./button/button */ \"./src/elements/button/button.ts\"));\r\n__export(__webpack_require__(/*! ./div/div */ \"./src/elements/div/div.ts\"));\r\n__export(__webpack_require__(/*! ./flexbox/flexbox */ \"./src/elements/flexbox/flexbox.ts\"));\r\n__export(__webpack_require__(/*! ./image/image */ \"./src/elements/image/image.ts\"));\r\n__export(__webpack_require__(/*! ./label/label */ \"./src/elements/label/label.ts\"));\r\n__export(__webpack_require__(/*! ./select/select */ \"./src/elements/select/select.ts\"));\r\n__export(__webpack_require__(/*! ./span/span */ \"./src/elements/span/span.ts\"));\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/index.ts?");

/***/ }),

/***/ "./src/elements/input/checkbox/checkbox.ts":
/*!*************************************************!*\
  !*** ./src/elements/input/checkbox/checkbox.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar inputElement_1 = __webpack_require__(/*! ../inputElement */ \"./src/elements/input/inputElement.ts\");\r\nvar CheckBox = (function (_super) {\r\n    __extends(CheckBox, _super);\r\n    function CheckBox(options) {\r\n        var _this = _super.call(this, \"CheckBox\", \"checkbox\", options) || this;\r\n        var optionsChecked = _this.options.checked;\r\n        _this.innerChecked = ko.unwrap(optionsChecked);\r\n        if (ko.isObservable(optionsChecked)) {\r\n            _this.addSubscription(optionsChecked, function (newValue) {\r\n                _this.innerSetChecked(newValue, true, false, false);\r\n            });\r\n        }\r\n        return _this;\r\n    }\r\n    CheckBox.prototype.innerSetChecked = function (checked, setElement, triggerOnchange, setObservable) {\r\n        this.innerChecked = checked;\r\n        if (setElement && this.element) {\r\n            this.element.checked = checked;\r\n        }\r\n        if (triggerOnchange && this.options.onchange) {\r\n            this.options.onchange(checked);\r\n        }\r\n        if (setObservable) {\r\n            var optionsChecked = this.options.checked;\r\n            if (ko.isObservable(optionsChecked)) {\r\n                optionsChecked(checked);\r\n            }\r\n        }\r\n    };\r\n    CheckBox.prototype.build = function () {\r\n        var _this = this;\r\n        _super.prototype.build.call(this);\r\n        if (this.options.scale) {\r\n            var scale = \"scale(\" + this.options.scale + \")\";\r\n            this.setStyle({\r\n                transform: scale,\r\n                webKitTransform: scale,\r\n                msTransform: scale\r\n            });\r\n        }\r\n        this.addEventListener(\"change\", function () {\r\n            _this.innerSetChecked(_this.element.checked, false, true, true);\r\n        });\r\n    };\r\n    CheckBox.prototype.getChecked = function () {\r\n        return this.innerChecked;\r\n    };\r\n    CheckBox.prototype.setChecked = function (checked, triggerChange) {\r\n        if (triggerChange === void 0) { triggerChange = false; }\r\n        this.innerSetChecked(checked, true, triggerChange, true);\r\n    };\r\n    return CheckBox;\r\n}(inputElement_1.InputElement));\r\nexports.CheckBox = CheckBox;\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/input/checkbox/checkbox.ts?");

/***/ }),

/***/ "./src/elements/input/index.ts":
/*!*************************************!*\
  !*** ./src/elements/input/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./checkbox/checkbox */ \"./src/elements/input/checkbox/checkbox.ts\"));\r\n__export(__webpack_require__(/*! ./number/number */ \"./src/elements/input/number/number.ts\"));\r\n__export(__webpack_require__(/*! ./password/password */ \"./src/elements/input/password/password.ts\"));\r\n__export(__webpack_require__(/*! ./slider/slider */ \"./src/elements/input/slider/slider.ts\"));\r\n__export(__webpack_require__(/*! ./text/text */ \"./src/elements/input/text/text.ts\"));\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/input/index.ts?");

/***/ }),

/***/ "./src/elements/input/inputElement.ts":
/*!********************************************!*\
  !*** ./src/elements/input/inputElement.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar InputElement = (function (_super) {\r\n    __extends(InputElement, _super);\r\n    function InputElement(elementType, inputType, options) {\r\n        var _this = _super.call(this, \"input\", elementType, options) || this;\r\n        _this.inputType = inputType;\r\n        return _this;\r\n    }\r\n    InputElement.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        this.element.type = this.inputType;\r\n        ko.applyBindingsToNode(this.element, {\r\n            attr: {\r\n                disabled: this.options.disabled,\r\n                placeholder: this.options.placeholder\r\n            }\r\n        });\r\n    };\r\n    return InputElement;\r\n}(uiElement_1.UiElement));\r\nexports.InputElement = InputElement;\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/input/inputElement.ts?");

/***/ }),

/***/ "./src/elements/input/number/number.ts":
/*!*********************************************!*\
  !*** ./src/elements/input/number/number.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar inputElement_1 = __webpack_require__(/*! ../inputElement */ \"./src/elements/input/inputElement.ts\");\r\nvar Number = (function (_super) {\r\n    __extends(Number, _super);\r\n    function Number(options, elementType, inputElementType) {\r\n        if (elementType === void 0) { elementType = \"InputNumber\"; }\r\n        if (inputElementType === void 0) { inputElementType = \"number\"; }\r\n        return _super.call(this, elementType, inputElementType, options) || this;\r\n    }\r\n    Number.prototype.innerSetValue = function (value, setElement, triggerOnchange, setObservable) {\r\n        if (this.options.checkValidity && !this.options.checkValidity(this.innerValue, value)) {\r\n            value = this.innerValue;\r\n            setElement = true;\r\n            triggerOnchange = false;\r\n        }\r\n        this.innerValue = value;\r\n        if (setElement && this.element) {\r\n            this.element.value = value.toString();\r\n        }\r\n        if (triggerOnchange && this.options.onchange) {\r\n            this.options.onchange(value);\r\n        }\r\n        if (setObservable) {\r\n            var optionsValue = this.options.value;\r\n            if (ko.isObservable(optionsValue)) {\r\n                optionsValue(value);\r\n            }\r\n        }\r\n    };\r\n    Number.prototype.build = function () {\r\n        var _this = this;\r\n        _super.prototype.build.call(this);\r\n        if (this.options.valueUpdateMode === \"OnInput\") {\r\n            this.element.addEventListener(\"input\", function () {\r\n                if (_this.element.checkValidity()) {\r\n                    _this.innerSetValue(parseFloat(_this.element.value), false, true, true);\r\n                }\r\n            });\r\n        }\r\n        else {\r\n            this.element.addEventListener(\"change\", function () {\r\n                if (_this.element.checkValidity()) {\r\n                    _this.innerSetValue(parseFloat(_this.element.value), false, true, true);\r\n                }\r\n            });\r\n        }\r\n        var value = this.options.value;\r\n        this.innerValue = ko.unwrap(value);\r\n        if (this.innerValue) {\r\n            this.element.value = this.innerValue.toString();\r\n        }\r\n        if (ko.isObservable(value)) {\r\n            this.addSubscription(value, function (newValue) {\r\n                _this.innerSetValue(newValue, true, false, false);\r\n            });\r\n        }\r\n    };\r\n    Number.prototype.getValue = function () {\r\n        return this.innerValue;\r\n    };\r\n    Number.prototype.setValue = function (value, triggerChange) {\r\n        if (triggerChange === void 0) { triggerChange = false; }\r\n        this.innerSetValue(value, true, triggerChange, true);\r\n    };\r\n    return Number;\r\n}(inputElement_1.InputElement));\r\nexports.Number = Number;\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/input/number/number.ts?");

/***/ }),

/***/ "./src/elements/input/password/password.ts":
/*!*************************************************!*\
  !*** ./src/elements/input/password/password.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar text_1 = __webpack_require__(/*! ../text/text */ \"./src/elements/input/text/text.ts\");\r\nvar Password = (function (_super) {\r\n    __extends(Password, _super);\r\n    function Password(options) {\r\n        return _super.call(this, options, \"PasswordBox\", \"password\") || this;\r\n    }\r\n    return Password;\r\n}(text_1.Text));\r\nexports.Password = Password;\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/input/password/password.ts?");

/***/ }),

/***/ "./src/elements/input/slider/slider.ts":
/*!*********************************************!*\
  !*** ./src/elements/input/slider/slider.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar inputElement_1 = __webpack_require__(/*! ../inputElement */ \"./src/elements/input/inputElement.ts\");\r\nvar Slider = (function (_super) {\r\n    __extends(Slider, _super);\r\n    function Slider(options) {\r\n        return _super.call(this, \"Slider\", \"range\", options) || this;\r\n    }\r\n    Slider.prototype.build = function () {\r\n        var _this = this;\r\n        _super.prototype.build.call(this);\r\n        ko.applyBindingsToNode(this.element, {\r\n            value: this.options.value,\r\n            attr: {\r\n                min: this.options.min,\r\n                max: this.options.max,\r\n                step: this.options.step\r\n            }\r\n        });\r\n        this.element.onchange = function () {\r\n            if (_this.options.onchange) {\r\n                var input = _this.element;\r\n                var value = Number(input.value);\r\n                _this.options.onchange(value);\r\n            }\r\n        };\r\n    };\r\n    Slider.prototype.setMin = function (minValue) {\r\n        var min = this.options.min;\r\n        if (ko.isObservable(min)) {\r\n            min(minValue);\r\n        }\r\n        else {\r\n            if (this.element) {\r\n                if (minValue) {\r\n                    this.element.setAttribute(\"min\", minValue.toString());\r\n                }\r\n                else {\r\n                    this.element.removeAttribute(\"min\");\r\n                }\r\n            }\r\n        }\r\n    };\r\n    Slider.prototype.setMax = function (maxValue) {\r\n        var max = this.options.max;\r\n        if (ko.isObservable(max)) {\r\n            max(maxValue);\r\n        }\r\n        else {\r\n            if (this.element) {\r\n                if (maxValue) {\r\n                    this.element.setAttribute(\"max\", maxValue.toString());\r\n                }\r\n                else {\r\n                    this.element.removeAttribute(\"max\");\r\n                }\r\n            }\r\n        }\r\n    };\r\n    Slider.prototype.setStep = function (stepValue) {\r\n        var step = this.options.step;\r\n        if (ko.isObservable(step)) {\r\n            step(stepValue);\r\n        }\r\n        else {\r\n            if (this.element) {\r\n                if (stepValue) {\r\n                    this.element.setAttribute(\"max\", stepValue.toString());\r\n                }\r\n                else {\r\n                    this.element.removeAttribute(\"max\");\r\n                }\r\n            }\r\n        }\r\n    };\r\n    return Slider;\r\n}(inputElement_1.InputElement));\r\nexports.Slider = Slider;\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/input/slider/slider.ts?");

/***/ }),

/***/ "./src/elements/input/text/text.ts":
/*!*****************************************!*\
  !*** ./src/elements/input/text/text.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar inputElement_1 = __webpack_require__(/*! ../inputElement */ \"./src/elements/input/inputElement.ts\");\r\nvar Text = (function (_super) {\r\n    __extends(Text, _super);\r\n    function Text(options, elementType, inputElementType) {\r\n        if (elementType === void 0) { elementType = \"InputText\"; }\r\n        if (inputElementType === void 0) { inputElementType = \"text\"; }\r\n        var _this = _super.call(this, elementType, inputElementType, options) || this;\r\n        var optionsText = _this.options.text;\r\n        _this.internalText = ko.unwrap(optionsText);\r\n        if (ko.isObservable(optionsText)) {\r\n            optionsText.subscribe(function (newValue) {\r\n                _this.innerSetText(newValue, true, false, false);\r\n            });\r\n        }\r\n        return _this;\r\n    }\r\n    Text.prototype.innerSetText = function (text, setElement, triggerOnchange, setObservable) {\r\n        if (this.options.checkValidity && !this.options.checkValidity(this.internalText, text)) {\r\n            text = this.internalText;\r\n            setElement = true;\r\n            triggerOnchange = false;\r\n        }\r\n        this.internalText = text;\r\n        if (setElement && this.element) {\r\n            this.element.value = text;\r\n        }\r\n        if (triggerOnchange && this.options.onchange) {\r\n            this.options.onchange(text);\r\n        }\r\n        if (setObservable) {\r\n            var optionsText = this.options.text;\r\n            if (ko.isObservable(optionsText)) {\r\n                optionsText(text);\r\n            }\r\n        }\r\n    };\r\n    Text.prototype.build = function () {\r\n        var _this = this;\r\n        _super.prototype.build.call(this);\r\n        if (this.internalText) {\r\n            this.element.value = this.internalText;\r\n        }\r\n        if (this.options.valueUpdateMode === \"OnInput\") {\r\n            this.element.addEventListener(\"input\", function () {\r\n                _this.innerSetText(_this.element.value, false, true, true);\r\n            });\r\n        }\r\n        else {\r\n            this.element.addEventListener(\"change\", function () {\r\n                _this.innerSetText(_this.element.value, false, true, true);\r\n            });\r\n        }\r\n    };\r\n    Text.prototype.getText = function () {\r\n        return this.internalText;\r\n    };\r\n    Text.prototype.setText = function (text, triggerChange) {\r\n        if (triggerChange === void 0) { triggerChange = false; }\r\n        this.innerSetText(text, true, triggerChange, true);\r\n    };\r\n    return Text;\r\n}(inputElement_1.InputElement));\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/input/text/text.ts?");

/***/ }),

/***/ "./src/elements/label/label.ts":
/*!*************************************!*\
  !*** ./src/elements/label/label.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Label = (function (_super) {\r\n    __extends(Label, _super);\r\n    function Label(options) {\r\n        return _super.call(this, \"label\", \"Label\", options) || this;\r\n    }\r\n    Label.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        ko.applyBindingsToNode(this.element, {\r\n            text: this.options.text,\r\n            attr: {\r\n                for: this.options.for\r\n            }\r\n        });\r\n    };\r\n    return Label;\r\n}(uiElement_1.UiElement));\r\nexports.Label = Label;\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/label/label.ts?");

/***/ }),

/***/ "./src/elements/select/select.ts":
/*!***************************************!*\
  !*** ./src/elements/select/select.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Select = (function (_super) {\r\n    __extends(Select, _super);\r\n    function Select(options) {\r\n        return _super.call(this, \"select\", \"Select\", options) || this;\r\n    }\r\n    Select.prototype.build = function () {\r\n        var _this = this;\r\n        _super.prototype.build.call(this);\r\n        ko.applyBindingsToNode(this.element, {\r\n            options: this.options.items,\r\n        });\r\n        var optionsValue = this.options.selectedValue;\r\n        if (ko.isObservable(optionsValue)) {\r\n            optionsValue.subscribe(function (newValue) {\r\n                _this.element.value = newValue;\r\n            });\r\n        }\r\n        this.addEventListener(\"change\", function () {\r\n            if (ko.isObservable(optionsValue)) {\r\n                optionsValue(_this.element.value);\r\n            }\r\n            if (_this.options.onchange) {\r\n                _this.options.onchange(_this.element.value);\r\n            }\r\n        });\r\n    };\r\n    return Select;\r\n}(uiElement_1.UiElement));\r\nexports.Select = Select;\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/select/select.ts?");

/***/ }),

/***/ "./src/elements/span/span.ts":
/*!***********************************!*\
  !*** ./src/elements/span/span.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Span = (function (_super) {\r\n    __extends(Span, _super);\r\n    function Span(options) {\r\n        return _super.call(this, \"span\", \"Span\", options) || this;\r\n    }\r\n    Span.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        var bindings = {};\r\n        if (this.options.isHtml) {\r\n            bindings.html = this.options.text;\r\n        }\r\n        else {\r\n            bindings.text = this.options.text;\r\n        }\r\n        ko.applyBindingsToNode(this.element, bindings);\r\n    };\r\n    return Span;\r\n}(uiElement_1.UiElement));\r\nexports.Span = Span;\r\n\n\n//# sourceURL=webpack://jpf/./src/elements/span/span.ts?");

/***/ }),

/***/ "./src/framework/eventListener.ts":
/*!****************************************!*\
  !*** ./src/framework/eventListener.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar EventListener = (function () {\r\n    function EventListener(type, listener, options) {\r\n        this.type = type;\r\n        this.listener = listener;\r\n        this.options = options;\r\n    }\r\n    return EventListener;\r\n}());\r\nexports.EventListener = EventListener;\r\n\n\n//# sourceURL=webpack://jpf/./src/framework/eventListener.ts?");

/***/ }),

/***/ "./src/framework/types.ts":
/*!********************************!*\
  !*** ./src/framework/types.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n\n\n//# sourceURL=webpack://jpf/./src/framework/types.ts?");

/***/ }),

/***/ "./src/framework/uiElement.ts":
/*!************************************!*\
  !*** ./src/framework/uiElement.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar eventListener_1 = __webpack_require__(/*! ./eventListener */ \"./src/framework/eventListener.ts\");\r\nvar UiElement = (function () {\r\n    function UiElement(tagName, elementType, options) {\r\n        var _this = this;\r\n        this.style = {};\r\n        this.innerTextIsHtml = false;\r\n        this.children = new Array();\r\n        this.knockoutSubscriptions = Array();\r\n        this.visible = true;\r\n        this.attributes = {};\r\n        this.tagName = tagName;\r\n        this.options = options || {};\r\n        if (!this.options.elementType) {\r\n            this.options.elementType = elementType;\r\n        }\r\n        if (this.options.innerText) {\r\n            var innerText = this.options.innerText;\r\n            this.innerText = ko.unwrap(innerText);\r\n            if (ko.isObservable(innerText)) {\r\n                innerText.subscribe(function (newValue) {\r\n                    if (_this.innerTextIsHtml) {\r\n                        setInterval(newValue);\r\n                    }\r\n                    else {\r\n                        _this.setInnerText(newValue);\r\n                    }\r\n                });\r\n            }\r\n        }\r\n        if (this.options.attributes) {\r\n            this.options.attributes.forEach(function (attribute) {\r\n                _this.attributes[attribute.name] = ko.unwrap(attribute.value);\r\n                if (ko.isObservable(attribute.value)) {\r\n                    attribute.value.subscribe(function (newValue) {\r\n                        _this.setAttribute(attribute.name, newValue);\r\n                    });\r\n                }\r\n            });\r\n        }\r\n        if (this.options.children) {\r\n            var children = this.options.children;\r\n            this.children = ko.unwrap(children);\r\n            if (ko.isObservable(children)) {\r\n                children.subscribe(function (newChildren) {\r\n                    _this.setChildren(newChildren);\r\n                });\r\n            }\r\n        }\r\n        if (this.options.style) {\r\n            var _loop_1 = function (styleProperty) {\r\n                var styleValue = this_1.options.style[styleProperty];\r\n                this_1.style[styleProperty] = ko.unwrap(styleValue);\r\n                if (ko.isObservable(styleValue)) {\r\n                    this_1.addSubscription(styleValue, function (newValue) {\r\n                        var _a;\r\n                        _this.setStyle((_a = {}, _a[styleProperty] = newValue, _a));\r\n                    });\r\n                }\r\n            };\r\n            var this_1 = this;\r\n            for (var styleProperty in Object.keys(this.options.style)) {\r\n                _loop_1(styleProperty);\r\n            }\r\n        }\r\n    }\r\n    UiElement.prototype.initializeMutationObserver = function () {\r\n        var _this = this;\r\n        if (this.knockoutSubscriptions.length > 0 || this.options.mutationObserverCallback)\r\n            if (!this.mutationObserver) {\r\n                this.mutationObserver = new MutationObserver(function (mutations, observer) {\r\n                    mutations.forEach(function (mutation) {\r\n                        if (mutation.removedNodes) {\r\n                            mutation.removedNodes.forEach(function (removedNode) {\r\n                                if (removedNode === _this.element) {\r\n                                    for (var _i = 0, _a = _this.knockoutSubscriptions; _i < _a.length; _i++) {\r\n                                        var knockoutSubscription = _a[_i];\r\n                                        knockoutSubscription.dispose();\r\n                                    }\r\n                                }\r\n                            });\r\n                        }\r\n                    });\r\n                    if (_this.options.mutationObserverCallback) {\r\n                        _this.options.mutationObserverCallback(mutations, observer);\r\n                    }\r\n                });\r\n                this.mutationObserver.observe(this.element, {\r\n                    attributes: true,\r\n                    attributeOldValue: true\r\n                });\r\n            }\r\n    };\r\n    UiElement.prototype.build = function () {\r\n        var _a;\r\n        var _this = this;\r\n        if (this.options.id) {\r\n            this.element.id = this.options.id;\r\n        }\r\n        if (this.options.elementType) {\r\n            this.setAttribute(\"elementtype\", this.options.elementType);\r\n        }\r\n        var bindings = {\r\n            style: this.style,\r\n            attr: this.attributes,\r\n        };\r\n        if (this.innerText) {\r\n            if (this.innerTextIsHtml) {\r\n                bindings[\"html\"] = this.innerText;\r\n            }\r\n            else {\r\n                bindings[\"text\"] = this.innerText;\r\n            }\r\n        }\r\n        if (this.options.className) {\r\n            if (ko.isObservable(this.options.className)) {\r\n                bindings[\"css\"] = this.options.className;\r\n            }\r\n            else {\r\n                bindings[\"css\"] = (_a = {},\r\n                    _a[this.options.className] = true,\r\n                    _a);\r\n            }\r\n        }\r\n        ko.applyBindingsToNode(this.element, bindings);\r\n        if (this.options.selectable === false) {\r\n            this.element.addEventListener(\"selectstart\", function () { return false; });\r\n            this.element.style.userSelect = \"none\";\r\n            this.element.style[\"-webkit-user-select\"] = \"none\";\r\n            this.element.style[\"-moz-user-select\"] = \"none\";\r\n            this.element.style[\"-ms-user-select\"] = \"none\";\r\n        }\r\n        if (this.children) {\r\n            for (var _i = 0, _b = this.children; _i < _b.length; _i++) {\r\n                var child = _b[_i];\r\n                this.element.appendChild(child.render());\r\n            }\r\n        }\r\n        this.setVisibility(this.visible);\r\n        var visible = this.options.visible;\r\n        if (ko.isObservable(visible)) {\r\n            visible.subscribe(function (visible) {\r\n                _this.setVisibility(visible);\r\n            });\r\n        }\r\n        if (this.options.addControlToDataDictionary) {\r\n            if (!this.element.data) {\r\n                this.element.data = {};\r\n            }\r\n            this.element.data.uiElement = this;\r\n        }\r\n    };\r\n    UiElement.prototype.addSubscription = function (observable, callback) {\r\n        this.knockoutSubscriptions.push(observable.subscribe(callback));\r\n    };\r\n    UiElement.prototype.render = function () {\r\n        var _this = this;\r\n        if (this.element) {\r\n            this.remove();\r\n        }\r\n        if (typeof this.build === \"function\") {\r\n            this.element = document.createElement(this.tagName);\r\n            this.build();\r\n            if (this.options.eventListeners) {\r\n                this.options.eventListeners.forEach(function (eventListener) {\r\n                    _this.element.addEventListener(eventListener.type, function (event) {\r\n                        if (event instanceof KeyboardEvent) {\r\n                            var options = eventListener.options;\r\n                            if (options.altKey && !event.altKey) {\r\n                                return;\r\n                            }\r\n                            if (options.shiftKey && !event.shiftKey) {\r\n                                return;\r\n                            }\r\n                            if (options.ctrlKey && !event.ctrlKey) {\r\n                                return;\r\n                            }\r\n                            if (options.eventKey && options.eventKey !== event.key) {\r\n                                return;\r\n                            }\r\n                        }\r\n                        eventListener.listener.call(_this, event);\r\n                    });\r\n                });\r\n            }\r\n            this.initializeMutationObserver();\r\n            return this.element;\r\n        }\r\n        throw \"The build method of this FrameworkElement has not been defined\";\r\n    };\r\n    UiElement.prototype.refresh = function () { };\r\n    UiElement.prototype.remove = function () {\r\n        if (this.element) {\r\n            if (this.element.remove) {\r\n                this.element.remove();\r\n            }\r\n            else {\r\n                this.element.parentElement.removeChild(this.element);\r\n            }\r\n            this.element = null;\r\n        }\r\n    };\r\n    UiElement.prototype.handleMessage = function (message) { };\r\n    UiElement.prototype.getElement = function () {\r\n        return this.element;\r\n    };\r\n    UiElement.prototype.getAttribute = function (attributeName) {\r\n        if (this.element) {\r\n            return this.element.getAttribute(attributeName);\r\n        }\r\n        else {\r\n            return ko.unwrap(this.attributes[attributeName]);\r\n        }\r\n    };\r\n    UiElement.prototype.setAttribute = function (name, value) {\r\n        var _a;\r\n        var currentAttribute = this.attributes[name];\r\n        var applyBindings = false;\r\n        if (currentAttribute) {\r\n            if (ko.isObservable(currentAttribute)) {\r\n                currentAttribute(ko.unwrap(value));\r\n            }\r\n            else {\r\n                this.attributes[name] = value;\r\n                applyBindings = true;\r\n            }\r\n        }\r\n        else {\r\n            this.attributes[name] = value;\r\n            applyBindings = true;\r\n        }\r\n        if (applyBindings && this.element) {\r\n            ko.applyBindingsToNode(this.element, { attr: (_a = {}, _a[name] = value, _a) });\r\n        }\r\n    };\r\n    UiElement.prototype.deleteAttribute = function (attributeName) {\r\n        if (this.attributes[attributeName]) {\r\n            delete this.attributes[attributeName];\r\n        }\r\n    };\r\n    UiElement.prototype.getStyle = function () {\r\n        var cssProperties = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            cssProperties[_i] = arguments[_i];\r\n        }\r\n        var style = {};\r\n        for (var _a = 0, cssProperties_1 = cssProperties; _a < cssProperties_1.length; _a++) {\r\n            var cssProperty = cssProperties_1[_a];\r\n            if (this.style[cssProperty]) {\r\n                style[cssProperty] = this.style[cssProperty];\r\n            }\r\n            else if (this.element) {\r\n                style[cssProperty] = this.element.style[cssProperty];\r\n            }\r\n        }\r\n        return style;\r\n    };\r\n    UiElement.prototype.getStyleValue = function (cssProperty) {\r\n        if (this.style[cssProperty]) {\r\n            return this.style[cssProperty];\r\n        }\r\n        else if (this.element) {\r\n            return this.element.style[cssProperty];\r\n        }\r\n        return null;\r\n    };\r\n    UiElement.prototype.setStyle = function (newStyle, overwriteExisting) {\r\n        var _this = this;\r\n        if (newStyle) {\r\n            Object.keys(newStyle).forEach(function (key) {\r\n                if (_this.style.hasOwnProperty(key)) {\r\n                    if (!overwriteExisting) {\r\n                        return;\r\n                    }\r\n                }\r\n                var newValue = newStyle[key];\r\n                var currentValue = _this.style[key];\r\n                if (currentValue && ko.isObservable(currentValue)) {\r\n                    currentValue(ko.unwrap(newValue));\r\n                }\r\n                else {\r\n                    _this.style[key] = newValue;\r\n                    if (_this.element) {\r\n                        _this.element.style[key] = newValue;\r\n                    }\r\n                }\r\n            });\r\n        }\r\n    };\r\n    UiElement.prototype.setStyleNonStandard = function (name, value, overwriteExisting) {\r\n        var _a;\r\n        this.setStyle((_a = {}, _a[name] = value, _a), overwriteExisting);\r\n    };\r\n    UiElement.prototype.deleteStyle = function (style) {\r\n        var styles;\r\n        if (style instanceof Array) {\r\n            styles = style;\r\n        }\r\n        else if (style instanceof Object) {\r\n            styles = Object.keys(style);\r\n        }\r\n        else {\r\n            styles = [style];\r\n        }\r\n        for (var _i = 0, styles_1 = styles; _i < styles_1.length; _i++) {\r\n            var cssProperty = styles_1[_i];\r\n            if (this.style && this.style.hasOwnProperty(cssProperty)) {\r\n                delete this.style[cssProperty];\r\n            }\r\n            if (this.element) {\r\n                this.element.style[cssProperty] = undefined;\r\n            }\r\n        }\r\n    };\r\n    UiElement.prototype.setVisibility = function (visible) {\r\n        if (this.element) {\r\n            if (visible) {\r\n                this.element.style.display = this.display;\r\n            }\r\n            else {\r\n                if (this.element.style.display !== \"none\") {\r\n                    this.display = this.element.style.display;\r\n                }\r\n                this.element.style.display = \"none\";\r\n            }\r\n        }\r\n    };\r\n    UiElement.prototype.addEventListener = function (type, listener, options) {\r\n        if (!this.options.eventListeners) {\r\n            this.options.eventListeners = new Array();\r\n        }\r\n        this.options.eventListeners.push(new eventListener_1.EventListener(type, listener, options));\r\n    };\r\n    UiElement.prototype.getChildren = function () {\r\n        return this.children;\r\n    };\r\n    UiElement.prototype.setChildren = function (children, replace) {\r\n        var _a;\r\n        if (replace === void 0) { replace = true; }\r\n        if (!children) {\r\n            children = [];\r\n        }\r\n        if (replace) {\r\n            this.children = children;\r\n            if (this.element) {\r\n                while (this.element.firstChild) {\r\n                    this.element.removeChild(this.element.firstChild);\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            (_a = this.children).push.apply(_a, children);\r\n        }\r\n        if (this.element) {\r\n            if (children.length > 0) {\r\n                var documentFragment = document.createDocumentFragment();\r\n                for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {\r\n                    var child = children_1[_i];\r\n                    documentFragment.appendChild(child.render());\r\n                }\r\n                this.element.appendChild(documentFragment);\r\n            }\r\n        }\r\n    };\r\n    UiElement.prototype.addChild = function (newChild, referenceChild) {\r\n        if (referenceChild) {\r\n            var index = this.children.indexOf(referenceChild);\r\n            if (index > -1) {\r\n                this.children.splice(index, 0, newChild);\r\n                if (this.element && referenceChild.getElement()) {\r\n                    this.element.insertBefore(newChild.render(), referenceChild.getElement());\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            this.children.push(newChild);\r\n            if (this.element) {\r\n                this.element.appendChild(newChild.render());\r\n            }\r\n        }\r\n    };\r\n    UiElement.prototype.removeChild = function (element) {\r\n        var index = this.children.indexOf(element);\r\n        if (index > -1) {\r\n            this.children.splice(index, 1);\r\n            if (this.element) {\r\n                this.element.removeChild(this.element.children[index]);\r\n            }\r\n        }\r\n    };\r\n    UiElement.prototype.empty = function () {\r\n        this.children = [];\r\n        if (this.element) {\r\n            while (this.element.firstChild) {\r\n                this.element.removeChild(this.element.firstChild);\r\n            }\r\n        }\r\n    };\r\n    UiElement.prototype.focus = function (options) {\r\n        if (this.element) {\r\n            this.element.focus(options);\r\n        }\r\n    };\r\n    UiElement.prototype.focusPreviousSibling = function (options) {\r\n        if (this.element && this.element.previousElementSibling && this.element.nextSibling instanceof HTMLElement) {\r\n            this.element.nextSibling.focus(options);\r\n        }\r\n    };\r\n    UiElement.prototype.focusNextSibling = function (options) {\r\n        if (this.element && this.element.previousElementSibling && this.element.nextSibling instanceof HTMLElement) {\r\n            this.element.nextSibling.focus(options);\r\n        }\r\n    };\r\n    UiElement.prototype.setInnerText = function (innerText) {\r\n        this.innerText = innerText;\r\n        if (this.element) {\r\n            this.element.innerText = innerText;\r\n        }\r\n    };\r\n    UiElement.prototype.setInnerHtml = function (innerHtml) {\r\n        this.innerText = innerHtml;\r\n        if (this.element) {\r\n            this.element.innerHTML = innerHtml;\r\n        }\r\n    };\r\n    return UiElement;\r\n}());\r\nexports.UiElement = UiElement;\r\n\n\n//# sourceURL=webpack://jpf/./src/framework/uiElement.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Elements = __webpack_require__(/*! ./elements/index */ \"./src/elements/index.ts\");\r\nexports.Elements = Elements;\r\nvar Types = __webpack_require__(/*! ./framework/types */ \"./src/framework/types.ts\");\r\nexports.Types = Types;\r\n__export(__webpack_require__(/*! ./framework/eventListener */ \"./src/framework/eventListener.ts\"));\r\n__export(__webpack_require__(/*! ./framework/uiElement */ \"./src/framework/uiElement.ts\"));\r\n\n\n//# sourceURL=webpack://jpf/./src/index.ts?");

/***/ }),

/***/ "knockout":
/*!***************************!*\
  !*** external "knockout" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_knockout__;\n\n//# sourceURL=webpack://jpf/external_%22knockout%22?");

/***/ })

/******/ });
});