(function webpackUniversalModuleDefinition(root, factory) {
	//Javascript Presentation Foundation
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"));
	//Javascript Presentation Foundation
	else if(typeof define === 'function' && define.amd)
		define(["knockout"], factory);
	//Javascript Presentation Foundation
	else if(typeof exports === 'object')
		exports["jpf"] = factory(require("knockout"));
	//Javascript Presentation Foundation
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

/***/ "./src/controls/audioRecorder/audioRecorder.ts":
/*!*****************************************************!*\
  !*** ./src/controls/audioRecorder/audioRecorder.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\audioRecorder\\\\audioRecorder.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/audioRecorder/audioRecorder.ts?");

/***/ }),

/***/ "./src/controls/button/button.ts":
/*!***************************************!*\
  !*** ./src/controls/button/button.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\button\\\\button.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/button/button.ts?");

/***/ }),

/***/ "./src/controls/button/imageButton.ts":
/*!********************************************!*\
  !*** ./src/controls/button/imageButton.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\button\\\\imageButton.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/button/imageButton.ts?");

/***/ }),

/***/ "./src/controls/button/imageToggleButton.ts":
/*!**************************************************!*\
  !*** ./src/controls/button/imageToggleButton.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\button\\\\imageToggleButton.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/button/imageToggleButton.ts?");

/***/ }),

/***/ "./src/controls/button/toggleButton.ts":
/*!*********************************************!*\
  !*** ./src/controls/button/toggleButton.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\button\\\\toggleButton.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/button/toggleButton.ts?");

/***/ }),

/***/ "./src/controls/div/div.ts":
/*!*********************************!*\
  !*** ./src/controls/div/div.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\div\\\\div.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/div/div.ts?");

/***/ }),

/***/ "./src/controls/hyperlink/hyperlink.ts":
/*!*********************************************!*\
  !*** ./src/controls/hyperlink/hyperlink.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\hyperlink\\\\hyperlink.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/hyperlink/hyperlink.ts?");

/***/ }),

/***/ "./src/controls/image/image.ts":
/*!*************************************!*\
  !*** ./src/controls/image/image.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\image\\\\image.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/image/image.ts?");

/***/ }),

/***/ "./src/controls/index.ts":
/*!*******************************!*\
  !*** ./src/controls/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./audioRecorder/audioRecorder */ \"./src/controls/audioRecorder/audioRecorder.ts\"));\r\n__export(__webpack_require__(/*! ./button/button */ \"./src/controls/button/button.ts\"));\r\n__export(__webpack_require__(/*! ./button/imageButton */ \"./src/controls/button/imageButton.ts\"));\r\n__export(__webpack_require__(/*! ./button/imageToggleButton */ \"./src/controls/button/imageToggleButton.ts\"));\r\n__export(__webpack_require__(/*! ./button/toggleButton */ \"./src/controls/button/toggleButton.ts\"));\r\n__export(__webpack_require__(/*! ./div/div */ \"./src/controls/div/div.ts\"));\r\n__export(__webpack_require__(/*! ./hyperlink/hyperlink */ \"./src/controls/hyperlink/hyperlink.ts\"));\r\n__export(__webpack_require__(/*! ./image/image */ \"./src/controls/image/image.ts\"));\r\n__export(__webpack_require__(/*! ./input/checkBox */ \"./src/controls/input/checkBox.ts\"));\r\n__export(__webpack_require__(/*! ./input/passwordBox */ \"./src/controls/input/passwordBox.ts\"));\r\n__export(__webpack_require__(/*! ./input/slider */ \"./src/controls/input/slider.ts\"));\r\n__export(__webpack_require__(/*! ./input/textBox */ \"./src/controls/input/textBox.ts\"));\r\n__export(__webpack_require__(/*! ./label/label */ \"./src/controls/label/label.ts\"));\r\n__export(__webpack_require__(/*! ./label/labeledControl */ \"./src/controls/label/labeledControl.ts\"));\r\n__export(__webpack_require__(/*! ./panel/stackPanel */ \"./src/controls/panel/stackPanel.ts\"));\r\n__export(__webpack_require__(/*! ./selectBox/selectBox */ \"./src/controls/selectBox/selectBox.ts\"));\r\n__export(__webpack_require__(/*! ./span/span */ \"./src/controls/span/span.ts\"));\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/index.ts?");

/***/ }),

/***/ "./src/controls/input/checkBox.ts":
/*!****************************************!*\
  !*** ./src/controls/input/checkBox.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\input\\\\checkBox.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/input/checkBox.ts?");

/***/ }),

/***/ "./src/controls/input/passwordBox.ts":
/*!*******************************************!*\
  !*** ./src/controls/input/passwordBox.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\input\\\\passwordBox.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/input/passwordBox.ts?");

/***/ }),

/***/ "./src/controls/input/slider.ts":
/*!**************************************!*\
  !*** ./src/controls/input/slider.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\input\\\\slider.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/input/slider.ts?");

/***/ }),

/***/ "./src/controls/input/textBox.ts":
/*!***************************************!*\
  !*** ./src/controls/input/textBox.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar inputElement_1 = __webpack_require__(/*! ../../framework/inputElement */ \"./src/framework/inputElement.ts\");\r\nvar TextBox = (function (_super) {\r\n    __extends(TextBox, _super);\r\n    function TextBox(options) {\r\n        var _this = _super.call(this, \"TextBox\", options) || this;\r\n        _this.inputType = \"text\";\r\n        _this.text = ko.unwrap(_this.options.text);\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            _this.element.onkeypress = function () {\r\n                if (_this.options.valueUpdateMode === \"OnKeyPress\") {\r\n                    _this.innerSetText(_this.element.value, false, true, true);\r\n                }\r\n            };\r\n            _this.element.onblur = function () {\r\n                if (_this.options.valueUpdateMode === \"OnLostFocus\") {\r\n                    _this.innerSetText(_this.element.value, false, true, true);\r\n                }\r\n            };\r\n            if (ko.isObservable(options.text)) {\r\n                options.text.subscribe(function (newValue) {\r\n                    _this.innerSetText(newValue, true, false, false);\r\n                });\r\n            }\r\n        };\r\n        return _this;\r\n    }\r\n    TextBox.prototype.innerSetText = function (text, setElement, triggerOnchange, setObservable) {\r\n        if (this.validateInput && !this.validateInput(text)) {\r\n            if (this.element) {\r\n                this.element.value = this.text;\r\n            }\r\n            return;\r\n        }\r\n        this.text = text;\r\n        if (setElement && this.element) {\r\n            this.element.value = text;\r\n        }\r\n        if (triggerOnchange && this.onchange) {\r\n            this.onchange(text);\r\n        }\r\n        if (setObservable && ko.isObservable(this.options.text)) {\r\n            this.options.text(text);\r\n        }\r\n    };\r\n    TextBox.prototype.getText = function () {\r\n        return this.text;\r\n    };\r\n    TextBox.prototype.setText = function (text, triggerChange) {\r\n        if (triggerChange === void 0) { triggerChange = false; }\r\n        this.innerSetText(text, true, triggerChange, false);\r\n    };\r\n    return TextBox;\r\n}(inputElement_1.InputElement));\r\nexports.TextBox = TextBox;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/input/textBox.ts?");

/***/ }),

/***/ "./src/controls/label/label.ts":
/*!*************************************!*\
  !*** ./src/controls/label/label.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\label\\\\label.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/label/label.ts?");

/***/ }),

/***/ "./src/controls/label/labeledControl.ts":
/*!**********************************************!*\
  !*** ./src/controls/label/labeledControl.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\label\\\\labeledControl.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/label/labeledControl.ts?");

/***/ }),

/***/ "./src/controls/panel/stackPanel.ts":
/*!******************************************!*\
  !*** ./src/controls/panel/stackPanel.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\panel\\\\stackPanel.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/panel/stackPanel.ts?");

/***/ }),

/***/ "./src/controls/selectBox/selectBox.ts":
/*!*********************************************!*\
  !*** ./src/controls/selectBox/selectBox.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\selectBox\\\\selectBox.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/selectBox/selectBox.ts?");

/***/ }),

/***/ "./src/controls/span/span.ts":
/*!***********************************!*\
  !*** ./src/controls/span/span.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\controls\\\\span\\\\span.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/controls/span/span.ts?");

/***/ }),

/***/ "./src/dialog/dialog.ts":
/*!******************************!*\
  !*** ./src/dialog/dialog.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\dialog\\\\dialog.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/dialog/dialog.ts?");

/***/ }),

/***/ "./src/framework/inputElement.ts":
/*!***************************************!*\
  !*** ./src/framework/inputElement.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ./uiElement */ \"./src/framework/uiElement.ts\");\r\nvar InputElement = (function (_super) {\r\n    __extends(InputElement, _super);\r\n    function InputElement(elementType, options) {\r\n        var _this = _super.call(this, \"input\", elementType, options) || this;\r\n        if (options) {\r\n            _this.disabled = options.disabled;\r\n            _this.placeholder = options.placeholder;\r\n            _this.onchange = options.onchange;\r\n        }\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            var input = _this.element;\r\n            input.type = _this.inputType;\r\n            if (_this.placeholder) {\r\n                input.placeholder = _this.placeholder;\r\n            }\r\n            if (_this.disabled) {\r\n                ko.applyBindingsToNode(_this.element, { attr: { disabled: _this.disabled } });\r\n            }\r\n        };\r\n        return _this;\r\n    }\r\n    return InputElement;\r\n}(uiElement_1.UiElement));\r\nexports.InputElement = InputElement;\r\n\n\n//# sourceURL=webpack://jpf/./src/framework/inputElement.ts?");

/***/ }),

/***/ "./src/framework/uiChildrensElement.ts":
/*!*********************************************!*\
  !*** ./src/framework/uiChildrensElement.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\src\\\\framework\\\\uiChildrensElement.ts.\\n    at makeSourceMapAndFinish (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:78:15)\\n    at successLoader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:68:9)\\n    at Object.loader (C:\\\\Data\\\\GitHub\\\\jpf\\\\jpf\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack://jpf/./src/framework/uiChildrensElement.ts?");

/***/ }),

/***/ "./src/framework/uiElement.ts":
/*!************************************!*\
  !*** ./src/framework/uiElement.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar UiElement = (function () {\r\n    function UiElement(tagName, elementType, options) {\r\n        this.visible = ko.observable(true);\r\n        this.attributes = {};\r\n        this.options = {};\r\n        this.tagName = tagName;\r\n        if (options) {\r\n            this.options = options;\r\n        }\r\n        if (!this.options.elementType) {\r\n            this.options.elementType = elementType;\r\n        }\r\n        if (!this.options.addControlToDataDictionary) {\r\n            this.options.addControlToDataDictionary = false;\r\n        }\r\n    }\r\n    UiElement.prototype.setVisibility = function (visible) {\r\n        if (this.element) {\r\n            if (visible) {\r\n                this.element.style.display = this.display;\r\n            }\r\n            else {\r\n                if (this.element.style.display !== \"none\") {\r\n                    this.display = this.element.style.display;\r\n                }\r\n                this.element.style.display = \"none\";\r\n            }\r\n        }\r\n    };\r\n    UiElement.prototype.build = function () {\r\n        var _this = this;\r\n        var _a;\r\n        if (this.options.id) {\r\n            this.element.id = this.options.id;\r\n        }\r\n        if (this.options.elementType) {\r\n            this.setAttribute({\r\n                name: \"elementtype\",\r\n                value: this.options.elementType\r\n            });\r\n        }\r\n        var bindings = {\r\n            style: this.options.style,\r\n            attr: this.attributes\r\n        };\r\n        if (this.options.className) {\r\n            if (ko.isObservable(this.options.className)) {\r\n                bindings[\"css\"] = this.options.className;\r\n            }\r\n            else {\r\n                bindings[\"css\"] = (_a = {},\r\n                    _a[this.options.className] = true,\r\n                    _a);\r\n            }\r\n        }\r\n        ko.applyBindingsToNode(this.element, bindings);\r\n        if (this.options.selectable === false) {\r\n            this.element.onselectstart = function () {\r\n                return false;\r\n            };\r\n            this.element.style.userSelect = \"none\";\r\n            this.element.style[\"-webkit-user-select\"] = \"none\";\r\n            this.element.style[\"-moz-user-select\"] = \"none\";\r\n            this.element.style[\"-ms-user-select\"] = \"none\";\r\n        }\r\n        this.setVisibility(this.visible());\r\n        this.visible.subscribe(function (visible) {\r\n            _this.setVisibility(visible);\r\n        });\r\n        if (this.options.addControlToDataDictionary) {\r\n            if (!this.element.data) {\r\n                this.element.data = {};\r\n            }\r\n            this.element.data.frameworkElement = this;\r\n        }\r\n    };\r\n    UiElement.prototype.render = function () {\r\n        if (this.element) {\r\n            this.remove();\r\n        }\r\n        if (typeof this.build === \"function\") {\r\n            this.element = document.createElement(this.tagName);\r\n            this.build();\r\n            return this.element;\r\n        }\r\n        throw \"The build method of this FrameworkElement has not been defined\";\r\n    };\r\n    UiElement.prototype.remove = function () {\r\n        if (this.element) {\r\n            if (this.element.remove) {\r\n                this.element.remove();\r\n            }\r\n            else {\r\n                this.element.parentElement.removeChild(this.element);\r\n            }\r\n            this.element = null;\r\n        }\r\n    };\r\n    UiElement.prototype.getAttribute = function (attributeName) {\r\n        if (this.element) {\r\n            return this.element.getAttribute(attributeName);\r\n        }\r\n        else {\r\n            return ko.unwrap(this.attributes[attributeName]);\r\n        }\r\n    };\r\n    UiElement.prototype.setAttribute = function (attribute) {\r\n        var currentAttribute = this.attributes[attribute.name];\r\n        if (currentAttribute) {\r\n            if (ko.isObservable(currentAttribute)) {\r\n                currentAttribute(ko.unwrap(attribute.value));\r\n            }\r\n            else {\r\n                this.attributes[attribute.name] = attribute.value;\r\n            }\r\n        }\r\n        else {\r\n            this.attributes[attribute.name] = attribute.value;\r\n        }\r\n    };\r\n    UiElement.prototype.deleteAttribute = function (attributeName) {\r\n        if (this.attributes[attributeName]) {\r\n            delete this.attributes[attributeName];\r\n        }\r\n    };\r\n    UiElement.prototype.getStyle = function (cssProperties) {\r\n        var style = {};\r\n        for (var _i = 0, cssProperties_1 = cssProperties; _i < cssProperties_1.length; _i++) {\r\n            var cssProperty = cssProperties_1[_i];\r\n            if (this.element) {\r\n                style[cssProperty] = this.element.style[cssProperty];\r\n            }\r\n            else {\r\n                style[cssProperty] = this.options.style[cssProperty];\r\n            }\r\n        }\r\n        return style;\r\n    };\r\n    UiElement.prototype.setStyle = function (newStyle, overwriteExisting) {\r\n        if (!this.options.style) {\r\n            this.options.style = {};\r\n        }\r\n        for (var styleName in newStyle) {\r\n            if (this.options.style.hasOwnProperty(styleName)) {\r\n                if (!overwriteExisting) {\r\n                    continue;\r\n                }\r\n            }\r\n            var newValue = newStyle[styleName];\r\n            var currentValue = this.options.style[styleName];\r\n            if (currentValue && ko.isObservable(currentValue)) {\r\n                currentValue(ko.unwrap(newValue));\r\n            }\r\n            else {\r\n                this.options.style[styleName] = newValue;\r\n                if (this.element) {\r\n                    this.element[styleName] = newValue;\r\n                }\r\n            }\r\n        }\r\n    };\r\n    UiElement.prototype.deleteStyle = function (style) {\r\n        var styles;\r\n        if (style instanceof Array) {\r\n            styles = style;\r\n        }\r\n        else if (style instanceof Object) {\r\n            styles = Object.keys(style);\r\n        }\r\n        else {\r\n            styles = [style];\r\n        }\r\n        for (var cssProperty in styles) {\r\n            if (this.options.style && this.options.style.hasOwnProperty(cssProperty)) {\r\n                delete this.options.style[cssProperty];\r\n            }\r\n            if (this.element) {\r\n                this.element.style[cssProperty] = undefined;\r\n            }\r\n        }\r\n    };\r\n    return UiElement;\r\n}());\r\nexports.UiElement = UiElement;\r\n\n\n//# sourceURL=webpack://jpf/./src/framework/uiElement.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Controls = __webpack_require__(/*! ./controls/index */ \"./src/controls/index.ts\");\r\nexports.Controls = Controls;\r\nvar Types = __webpack_require__(/*! ./types/types */ \"./src/types/types.ts\");\r\nexports.Types = Types;\r\n__export(__webpack_require__(/*! ./dialog/dialog */ \"./src/dialog/dialog.ts\"));\r\n__export(__webpack_require__(/*! ./framework/inputElement */ \"./src/framework/inputElement.ts\"));\r\n__export(__webpack_require__(/*! ./framework/uiElement */ \"./src/framework/uiElement.ts\"));\r\n__export(__webpack_require__(/*! ./framework/uiChildrensElement */ \"./src/framework/uiChildrensElement.ts\"));\r\n\n\n//# sourceURL=webpack://jpf/./src/index.ts?");

/***/ }),

/***/ "./src/types/types.ts":
/*!****************************!*\
  !*** ./src/types/types.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n\n\n//# sourceURL=webpack://jpf/./src/types/types.ts?");

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