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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar stackPanel_1 = __webpack_require__(/*! ../panel/stackPanel */ \"./src/controls/panel/stackPanel.ts\");\r\nvar toggleButton_1 = __webpack_require__(/*! ../button/toggleButton */ \"./src/controls/button/toggleButton.ts\");\r\nvar AudioRecorder = (function (_super) {\r\n    __extends(AudioRecorder, _super);\r\n    function AudioRecorder(options) {\r\n        var _this = _super.call(this, options) || this;\r\n        if (_this.options.startStopButtonOptions) {\r\n            _this.startStopButton = new toggleButton_1.ToggleButton(_this.options.startStopButtonOptions);\r\n        }\r\n        if (_this.options.pauseResumeButtonOptions) {\r\n            _this.pauseResumeButton = new toggleButton_1.ToggleButton(_this.options.pauseResumeButtonOptions);\r\n        }\r\n        var superBuild = _this.build;\r\n        _this.build = function () {\r\n            if (!_this.startStopButton) {\r\n                _this.startStopButton = new toggleButton_1.ToggleButton({});\r\n            }\r\n            if (!_this.pauseResumeButton) {\r\n                _this.pauseResumeButton = new toggleButton_1.ToggleButton({});\r\n            }\r\n            _this.startStopButton.options.selectedchanged = function (selected) {\r\n                if (selected) {\r\n                    navigator.mediaDevices\r\n                        .getUserMedia({\r\n                        audio: true\r\n                    })\r\n                        .then(function (mediaStream) {\r\n                        _this.mediaRecorder = new MediaRecorder(mediaStream);\r\n                        _this.mediaRecorder.start();\r\n                        var audioChunks = [];\r\n                        _this.mediaRecorder.addEventListener(\"dataavailable\", function (event) {\r\n                            audioChunks.push(event.data);\r\n                        });\r\n                        _this.mediaRecorder.addEventListener(\"stop\", function () {\r\n                            var audioBlob = new Blob(audioChunks);\r\n                            if (_this.options.onstop) {\r\n                                _this.options.onstop({\r\n                                    blob: audioBlob,\r\n                                    mimeType: _this.mediaRecorder.mimeType\r\n                                });\r\n                            }\r\n                        });\r\n                        if (_this.options.autoStopAfter) {\r\n                            setTimeout(function () {\r\n                                _this.mediaRecorder.stop();\r\n                            }, _this.options.autoStopAfter);\r\n                        }\r\n                    });\r\n                }\r\n                else {\r\n                    _this.mediaRecorder.stop();\r\n                }\r\n            };\r\n            _this.pauseResumeButton.options.selectedchanged = function (selected) {\r\n                if (selected) {\r\n                    _this.mediaRecorder.pause();\r\n                }\r\n                else {\r\n                    _this.mediaRecorder.resume();\r\n                }\r\n            };\r\n            _this.setChildren([_this.startStopButton, _this.pauseResumeButton]);\r\n            superBuild();\r\n        };\r\n        return _this;\r\n    }\r\n    return AudioRecorder;\r\n}(stackPanel_1.StackPanel));\r\nexports.AudioRecorder = AudioRecorder;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/audioRecorder/audioRecorder.ts?");

/***/ }),

/***/ "./src/controls/button/button.ts":
/*!***************************************!*\
  !*** ./src/controls/button/button.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Button = (function (_super) {\r\n    __extends(Button, _super);\r\n    function Button(options) {\r\n        var _this = _super.call(this, \"button\", \"Button\", options) || this;\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            if (_this.options.content instanceof uiElement_1.UiElement) {\r\n                var frameworkElement = _this.options.content;\r\n                _this.element.appendChild(frameworkElement.render());\r\n            }\r\n            else {\r\n                ko.applyBindingsToNode(_this.element, { text: _this.options.content });\r\n            }\r\n            if (_this.options.disabled) {\r\n                ko.applyBindingsToNode(_this.element, { attr: { disabled: _this.options.disabled } });\r\n            }\r\n        };\r\n        return _this;\r\n    }\r\n    return Button;\r\n}(uiElement_1.UiElement));\r\nexports.Button = Button;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/button/button.ts?");

/***/ }),

/***/ "./src/controls/button/imageButton.ts":
/*!********************************************!*\
  !*** ./src/controls/button/imageButton.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar button_1 = __webpack_require__(/*! ./button */ \"./src/controls/button/button.ts\");\r\nvar image_1 = __webpack_require__(/*! ../image/image */ \"./src/controls/image/image.ts\");\r\nvar ImageButton = (function (_super) {\r\n    __extends(ImageButton, _super);\r\n    function ImageButton(options) {\r\n        var _this = _super.call(this, \"button\", \"ImageButton\", options) || this;\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            var button = new button_1.Button(_this.options.buttonOptions);\r\n            button.options.content = new image_1.Image(_this.options.imageOptions);\r\n            _this.element = button.render();\r\n        };\r\n        return _this;\r\n    }\r\n    return ImageButton;\r\n}(uiElement_1.UiElement));\r\nexports.ImageButton = ImageButton;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/button/imageButton.ts?");

/***/ }),

/***/ "./src/controls/button/imageToggleButton.ts":
/*!**************************************************!*\
  !*** ./src/controls/button/imageToggleButton.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar toggleButton_1 = __webpack_require__(/*! ./toggleButton */ \"./src/controls/button/toggleButton.ts\");\r\nvar image_1 = __webpack_require__(/*! ../image/image */ \"./src/controls/image/image.ts\");\r\nvar ImageToggleButton = (function (_super) {\r\n    __extends(ImageToggleButton, _super);\r\n    function ImageToggleButton(options) {\r\n        var _this = _super.call(this, \"button\", \"ImageButton\", options) || this;\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            var button = new toggleButton_1.ToggleButton(_this.options.toggleButtonOptions);\r\n            button.options.content = new image_1.Image(_this.options.imageOptions);\r\n            _this.element = button.render();\r\n        };\r\n        return _this;\r\n    }\r\n    return ImageToggleButton;\r\n}(uiElement_1.UiElement));\r\nexports.ImageToggleButton = ImageToggleButton;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/button/imageToggleButton.ts?");

/***/ }),

/***/ "./src/controls/button/toggleButton.ts":
/*!*********************************************!*\
  !*** ./src/controls/button/toggleButton.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar button_1 = __webpack_require__(/*! ./button */ \"./src/controls/button/button.ts\");\r\nvar ToggleButton = (function (_super) {\r\n    __extends(ToggleButton, _super);\r\n    function ToggleButton(options) {\r\n        var _this = _super.call(this, options) || this;\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            var styleNormal = window.getComputedStyle(_this.element);\r\n            _this.options.onclick = function () {\r\n                var newValue = !ko.unwrap(_this.options.selected);\r\n                if (ko.isObservable(_this.options.selected)) {\r\n                    _this.options.selected(newValue);\r\n                }\r\n                else {\r\n                    _this.options.selected = newValue;\r\n                }\r\n                if (newValue) {\r\n                    _this.deleteStyle(styleNormal);\r\n                    _this.setStyle(_this.options.styleSelected);\r\n                }\r\n                else {\r\n                    _this.deleteStyle(_this.options.styleSelected);\r\n                    _this.setStyle(styleNormal);\r\n                }\r\n                if (_this.options.selectedchanged) {\r\n                    _this.options.selectedchanged(newValue);\r\n                }\r\n            };\r\n        };\r\n        return _this;\r\n    }\r\n    return ToggleButton;\r\n}(button_1.Button));\r\nexports.ToggleButton = ToggleButton;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/button/toggleButton.ts?");

/***/ }),

/***/ "./src/controls/div/div.ts":
/*!*********************************!*\
  !*** ./src/controls/div/div.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiChildrensElement_1 = __webpack_require__(/*! ../../framework/uiChildrensElement */ \"./src/framework/uiChildrensElement.ts\");\r\nvar Div = (function (_super) {\r\n    __extends(Div, _super);\r\n    function Div(options) {\r\n        var _this = _super.call(this, \"div\", \"Div\", options) || this;\r\n        var superBuild = _this.build;\r\n        _this.build = function () {\r\n            superBuild();\r\n            if (_this.options.text) {\r\n                if (_this.options.isHtml) {\r\n                    ko.applyBindingsToNode(_this.element, { html: _this.options.text });\r\n                }\r\n                else {\r\n                    ko.applyBindingsToNode(_this.element, { text: _this.options.text });\r\n                }\r\n            }\r\n        };\r\n        return _this;\r\n    }\r\n    return Div;\r\n}(uiChildrensElement_1.UiChildrensElement));\r\nexports.Div = Div;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/div/div.ts?");

/***/ }),

/***/ "./src/controls/hyperlink/hyperlink.ts":
/*!*********************************************!*\
  !*** ./src/controls/hyperlink/hyperlink.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Hyperlink = (function (_super) {\r\n    __extends(Hyperlink, _super);\r\n    function Hyperlink(options) {\r\n        var _this = _super.call(this, \"a\", \"Hyperlink\", options) || this;\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            ko.applyBindingsToNode(_this.element, {\r\n                text: _this.options.text,\r\n                attr: {\r\n                    href: _this.options.href\r\n                }\r\n            });\r\n        };\r\n        return _this;\r\n    }\r\n    return Hyperlink;\r\n}(uiElement_1.UiElement));\r\nexports.Hyperlink = Hyperlink;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/hyperlink/hyperlink.ts?");

/***/ }),

/***/ "./src/controls/image/image.ts":
/*!*************************************!*\
  !*** ./src/controls/image/image.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Image = (function (_super) {\r\n    __extends(Image, _super);\r\n    function Image(options) {\r\n        var _this = _super.call(this, \"img\", \"Image\", options) || this;\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            ko.applyBindingsToNode(_this.element, {\r\n                attr: {\r\n                    src: _this.options.src,\r\n                    alt: _this.options.alt\r\n                }\r\n            });\r\n        };\r\n        return _this;\r\n    }\r\n    return Image;\r\n}(uiElement_1.UiElement));\r\nexports.Image = Image;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/image/image.ts?");

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar inputElement_1 = __webpack_require__(/*! ../../framework/inputElement */ \"./src/framework/inputElement.ts\");\r\nvar CheckBox = (function (_super) {\r\n    __extends(CheckBox, _super);\r\n    function CheckBox(options) {\r\n        var _this = _super.call(this, \"CheckBox\", options) || this;\r\n        _this.inputType = \"checkbox\";\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            var input = _this.element;\r\n            ko.applyBindingsToNode(input, { checked: _this.options.checked });\r\n            if (_this.options.scale) {\r\n                var scale = \"scale(\" + _this.options.scale + \")\";\r\n                _this.element.style[\"transform\"] = scale;\r\n                _this.element.style[\"WebkitTransform\"] = scale;\r\n                _this.element.style[\"msTransform\"] = scale;\r\n            }\r\n            _this.element.onchange = function () {\r\n                if (_this.options.onchange) {\r\n                    _this.options.onchange(input.checked);\r\n                }\r\n            };\r\n        };\r\n        return _this;\r\n    }\r\n    return CheckBox;\r\n}(inputElement_1.InputElement));\r\nexports.CheckBox = CheckBox;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/input/checkBox.ts?");

/***/ }),

/***/ "./src/controls/input/passwordBox.ts":
/*!*******************************************!*\
  !*** ./src/controls/input/passwordBox.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar textBox_1 = __webpack_require__(/*! ./textBox */ \"./src/controls/input/textBox.ts\");\r\nvar PasswordBox = (function (_super) {\r\n    __extends(PasswordBox, _super);\r\n    function PasswordBox(options) {\r\n        var _this = _super.call(this, options) || this;\r\n        _this.inputType = \"password\";\r\n        _this.options.elementType = \"PasswordBox\";\r\n        return _this;\r\n    }\r\n    return PasswordBox;\r\n}(textBox_1.TextBox));\r\nexports.PasswordBox = PasswordBox;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/input/passwordBox.ts?");

/***/ }),

/***/ "./src/controls/input/slider.ts":
/*!**************************************!*\
  !*** ./src/controls/input/slider.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar inputElement_1 = __webpack_require__(/*! ../../framework/inputElement */ \"./src/framework/inputElement.ts\");\r\nvar Slider = (function (_super) {\r\n    __extends(Slider, _super);\r\n    function Slider(options) {\r\n        var _this = _super.call(this, \"Slider\", options) || this;\r\n        _this.inputType = \"range\";\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            _this.element.setAttribute(\"min\", _this.options.min.toString());\r\n            _this.element.setAttribute(\"max\", _this.options.max.toString());\r\n            if (_this.options.step) {\r\n                _this.element.setAttribute(\"step\", _this.options.step.toString());\r\n            }\r\n            ko.applyBindingsToNode(_this.element, { value: _this.options.value });\r\n            _this.element.onchange = function () {\r\n                if (_this.options.onchange) {\r\n                    var input = _this.element;\r\n                    var value = Number(input.value);\r\n                    _this.options.onchange(value);\r\n                }\r\n            };\r\n        };\r\n        return _this;\r\n    }\r\n    return Slider;\r\n}(inputElement_1.InputElement));\r\nexports.Slider = Slider;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/input/slider.ts?");

/***/ }),

/***/ "./src/controls/input/textBox.ts":
/*!***************************************!*\
  !*** ./src/controls/input/textBox.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar inputElement_1 = __webpack_require__(/*! ../../framework/inputElement */ \"./src/framework/inputElement.ts\");\r\nvar TextBox = (function (_super) {\r\n    __extends(TextBox, _super);\r\n    function TextBox(options) {\r\n        var _this = _super.call(this, \"TextBox\", options) || this;\r\n        _this.inputType = \"text\";\r\n        _this.text = ko.unwrap(_this.options.text);\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            _this.element.onkeypress = function () {\r\n                if (_this.options.valueUpdateMode === \"OnKeyPress\") {\r\n                    _this.innerSetText(_this.element.value, false, true, true);\r\n                }\r\n            };\r\n            _this.element.onblur = function () {\r\n                if (_this.options.valueUpdateMode === \"OnLostFocus\") {\r\n                    _this.innerSetText(_this.element.value, false, true, true);\r\n                }\r\n            };\r\n            if (ko.isObservable(options.text)) {\r\n                options.text.subscribe(function (newValue) {\r\n                    _this.innerSetText(newValue, true, false, false);\r\n                });\r\n            }\r\n            if (_this.text) {\r\n                _this.element.value = _this.text;\r\n            }\r\n        };\r\n        return _this;\r\n    }\r\n    TextBox.prototype.innerSetText = function (text, setElement, triggerOnchange, setObservable) {\r\n        if (this.options.validateInput && !this.options.validateInput(text)) {\r\n            if (this.element) {\r\n                this.element.value = this.text;\r\n            }\r\n            return;\r\n        }\r\n        this.text = text;\r\n        if (setElement && this.element) {\r\n            this.element.value = text;\r\n        }\r\n        if (triggerOnchange && this.options.onchange) {\r\n            this.options.onchange(text);\r\n        }\r\n        if (setObservable && ko.isObservable(this.options.text)) {\r\n            this.options.text(text);\r\n        }\r\n    };\r\n    TextBox.prototype.getText = function () {\r\n        return this.text;\r\n    };\r\n    TextBox.prototype.setText = function (text, triggerChange) {\r\n        if (triggerChange === void 0) { triggerChange = false; }\r\n        this.innerSetText(text, true, triggerChange, false);\r\n    };\r\n    return TextBox;\r\n}(inputElement_1.InputElement));\r\nexports.TextBox = TextBox;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/input/textBox.ts?");

/***/ }),

/***/ "./src/controls/label/label.ts":
/*!*************************************!*\
  !*** ./src/controls/label/label.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Label = (function (_super) {\r\n    __extends(Label, _super);\r\n    function Label(options) {\r\n        var _this = _super.call(this, \"label\", \"Label\", options) || this;\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            ko.applyBindingsToNode(_this.element, {\r\n                text: _this.options.text,\r\n                attr: {\r\n                    for: _this.options.for\r\n                }\r\n            });\r\n        };\r\n        return _this;\r\n    }\r\n    return Label;\r\n}(uiElement_1.UiElement));\r\nexports.Label = Label;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/label/label.ts?");

/***/ }),

/***/ "./src/controls/label/labeledControl.ts":
/*!**********************************************!*\
  !*** ./src/controls/label/labeledControl.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar label_1 = __webpack_require__(/*! ./label */ \"./src/controls/label/label.ts\");\r\nvar stackPanel_1 = __webpack_require__(/*! ../panel/stackPanel */ \"./src/controls/panel/stackPanel.ts\");\r\nvar LabeledControl = (function (_super) {\r\n    __extends(LabeledControl, _super);\r\n    function LabeledControl(options) {\r\n        var _this = _super.call(this, options) || this;\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            _this.label = new label_1.Label(options.labelOptions);\r\n            if (!_this.options.style.alignItems) {\r\n                _this.setStyle({ alignItems: \"baseline\" });\r\n            }\r\n            _this.setChildren([_this.label, _this.options.control]);\r\n            buildSuper();\r\n        };\r\n        return _this;\r\n    }\r\n    return LabeledControl;\r\n}(stackPanel_1.StackPanel));\r\nexports.LabeledControl = LabeledControl;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/label/labeledControl.ts?");

/***/ }),

/***/ "./src/controls/panel/stackPanel.ts":
/*!******************************************!*\
  !*** ./src/controls/panel/stackPanel.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar uiChildrensElement_1 = __webpack_require__(/*! ../../framework/uiChildrensElement */ \"./src/framework/uiChildrensElement.ts\");\r\nvar StackPanel = (function (_super) {\r\n    __extends(StackPanel, _super);\r\n    function StackPanel(options) {\r\n        var _this = _super.call(this, \"div\", \"StackPanel\", options) || this;\r\n        _this.setStyle({ display: \"flex\" }, true);\r\n        if (!_this.options.flexDirection) {\r\n            _this.options.flexDirection = \"row\";\r\n        }\r\n        if (!_this.options.flexWrap) {\r\n            _this.options.flexWrap = \"wrap\";\r\n        }\r\n        if (!_this.options.justifyContent) {\r\n            _this.options.justifyContent = \"flex-start\";\r\n        }\r\n        if (!_this.options.alignItems) {\r\n            _this.options.alignItems = \"flex-start\";\r\n        }\r\n        if (!_this.options.alignContent) {\r\n            _this.options.alignContent = \"flex-start\";\r\n        }\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            _this.setStyle({\r\n                flexDirection: _this.options.flexDirection,\r\n                flexWrap: _this.options.flexWrap,\r\n                justifyContent: _this.options.justifyContent,\r\n                alignItems: _this.options.alignItems,\r\n                alignContent: _this.options.alignContent\r\n            });\r\n            buildSuper();\r\n        };\r\n        return _this;\r\n    }\r\n    return StackPanel;\r\n}(uiChildrensElement_1.UiChildrensElement));\r\nexports.StackPanel = StackPanel;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/panel/stackPanel.ts?");

/***/ }),

/***/ "./src/controls/selectBox/selectBox.ts":
/*!*********************************************!*\
  !*** ./src/controls/selectBox/selectBox.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar SelectBox = (function (_super) {\r\n    __extends(SelectBox, _super);\r\n    function SelectBox(options) {\r\n        var _this = _super.call(this, \"select\", \"SelectBox\", options) || this;\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            var value;\r\n            if (ko.isObservable(_this.options.value)) {\r\n                value = _this.options.value;\r\n            }\r\n            else {\r\n                value = ko.observable(_this.options.value);\r\n            }\r\n            value.subscribe(function (newValue) {\r\n                if (_this.options.onchange) {\r\n                    _this.options.onchange(newValue);\r\n                }\r\n            });\r\n            ko.applyBindingsToNode(_this.element, {\r\n                options: _this.options,\r\n                optionsCaption: _this.options.optionsCaption,\r\n                optionsText: _this.options.optionsText,\r\n                optionsValue: _this.options.optionsValue,\r\n                value: value\r\n            });\r\n        };\r\n        return _this;\r\n    }\r\n    return SelectBox;\r\n}(uiElement_1.UiElement));\r\nexports.SelectBox = SelectBox;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/selectBox/selectBox.ts?");

/***/ }),

/***/ "./src/controls/span/span.ts":
/*!***********************************!*\
  !*** ./src/controls/span/span.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Span = (function (_super) {\r\n    __extends(Span, _super);\r\n    function Span(options) {\r\n        var _this = _super.call(this, \"span\", \"Span\", options) || this;\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            var bindings = {};\r\n            if (_this.options.isHtml) {\r\n                bindings.html = _this.options.text;\r\n            }\r\n            else {\r\n                bindings.text = _this.options.text;\r\n            }\r\n            ko.applyBindingsToNode(_this.element, bindings);\r\n        };\r\n        return _this;\r\n    }\r\n    return Span;\r\n}(uiElement_1.UiElement));\r\nexports.Span = Span;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/span/span.ts?");

/***/ }),

/***/ "./src/dialog/dialog.ts":
/*!******************************!*\
  !*** ./src/dialog/dialog.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar uiElement_1 = __webpack_require__(/*! ../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar stackPanel_1 = __webpack_require__(/*! ../controls/panel/stackPanel */ \"./src/controls/panel/stackPanel.ts\");\r\nvar label_1 = __webpack_require__(/*! ../controls/label/label */ \"./src/controls/label/label.ts\");\r\nvar Dialog = (function () {\r\n    function Dialog(options) {\r\n        if (options) {\r\n        }\r\n    }\r\n    Dialog.prototype.open = function () {\r\n        var dialogContainer = new stackPanel_1.StackPanel({\r\n            flexDirection: \"column\",\r\n            style: {\r\n                position: \"fixed\",\r\n                margin: \"auto\",\r\n                left: 0,\r\n                right: 0,\r\n                bottom: 0,\r\n                top: 0\r\n            }\r\n        });\r\n        if (this.title) {\r\n            if (this.title instanceof uiElement_1.UiElement) {\r\n                dialogContainer.addChild(this.title);\r\n            }\r\n            else {\r\n                dialogContainer.addChild(new label_1.Label({ text: this.title }));\r\n            }\r\n        }\r\n        if (this.content) {\r\n            dialogContainer.addChild(this.content);\r\n        }\r\n        if (this.actions) {\r\n        }\r\n        document.appendChild(dialogContainer.render());\r\n    };\r\n    Dialog.prototype.close = function () {\r\n        if (this.element) {\r\n            if (this.element.remove) {\r\n                this.element.remove();\r\n            }\r\n            else {\r\n                this.element.parentElement.removeChild(this.element);\r\n            }\r\n        }\r\n    };\r\n    return Dialog;\r\n}());\r\nexports.Dialog = Dialog;\r\n\n\n//# sourceURL=webpack://jpf/./src/dialog/dialog.ts?");

/***/ }),

/***/ "./src/framework/inputElement.ts":
/*!***************************************!*\
  !*** ./src/framework/inputElement.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ./uiElement */ \"./src/framework/uiElement.ts\");\r\nvar InputElement = (function (_super) {\r\n    __extends(InputElement, _super);\r\n    function InputElement(elementType, options) {\r\n        var _this = _super.call(this, \"input\", elementType, options) || this;\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            var input = _this.element;\r\n            input.type = _this.inputType;\r\n            if (_this.options.placeholder) {\r\n                input.placeholder = _this.options.placeholder;\r\n            }\r\n            if (_this.options.disabled) {\r\n                ko.applyBindingsToNode(_this.element, { attr: { disabled: _this.options.disabled } });\r\n            }\r\n        };\r\n        return _this;\r\n    }\r\n    return InputElement;\r\n}(uiElement_1.UiElement));\r\nexports.InputElement = InputElement;\r\n\n\n//# sourceURL=webpack://jpf/./src/framework/inputElement.ts?");

/***/ }),

/***/ "./src/framework/uiChildrensElement.ts":
/*!*********************************************!*\
  !*** ./src/framework/uiChildrensElement.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ./uiElement */ \"./src/framework/uiElement.ts\");\r\nvar UiChildrensElement = (function (_super) {\r\n    __extends(UiChildrensElement, _super);\r\n    function UiChildrensElement(tagName, type, options) {\r\n        var _this = _super.call(this, tagName, type, options) || this;\r\n        _this.renderItems = function () {\r\n            if (_this.element) {\r\n                while (_this.element.firstChild) {\r\n                    _this.element.removeChild(_this.element.firstChild);\r\n                }\r\n                var documentFragment = document.createDocumentFragment();\r\n                for (var _i = 0, _a = _this.children; _i < _a.length; _i++) {\r\n                    var child = _a[_i];\r\n                    documentFragment.appendChild(child.render());\r\n                }\r\n                _this.element.appendChild(documentFragment);\r\n            }\r\n        };\r\n        _this.children = [];\r\n        _this.getChildren = function () {\r\n            return _this.children;\r\n        };\r\n        _this.setChildren = function (children) {\r\n            _this.children = children;\r\n            _this.renderItems();\r\n        };\r\n        _this.addChild = function (newItem, referenceItem) {\r\n            if (referenceItem) {\r\n                var index = _this.children.indexOf(referenceItem);\r\n                if (index > -1) {\r\n                    _this.children.splice(index, 0, newItem);\r\n                    if (_this.element && referenceItem.element) {\r\n                        _this.element.insertBefore(newItem.render(), referenceItem.element);\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                _this.children.push(newItem);\r\n                if (_this.element) {\r\n                    _this.element.appendChild(newItem.render());\r\n                }\r\n            }\r\n        };\r\n        _this.clear = function () {\r\n            if (ko.isObservable(_this.children)) {\r\n                _this.children([]);\r\n            }\r\n            else {\r\n                _this.children = [];\r\n                if (_this.element) {\r\n                    while (_this.element.firstChild) {\r\n                        _this.element.removeChild(_this.element.firstChild);\r\n                    }\r\n                }\r\n            }\r\n        };\r\n        _this.removeChild = function (element) {\r\n            var index = _this.children.indexOf(element);\r\n            if (index > -1) {\r\n                _this.children.splice(index, 1);\r\n                if (_this.element) {\r\n                    _this.element.removeChild(_this.element.children[index]);\r\n                }\r\n            }\r\n        };\r\n        if (options) {\r\n            _this.children = options.children;\r\n        }\r\n        var buildSuper = _this.build;\r\n        _this.build = function () {\r\n            buildSuper();\r\n            if (!_this.children) {\r\n                _this.children = [];\r\n            }\r\n            if (ko.isObservable(_this.children)) {\r\n                _this.children.subscribe(function () {\r\n                    _this.renderItems();\r\n                });\r\n            }\r\n            _this.renderItems();\r\n        };\r\n        return _this;\r\n    }\r\n    return UiChildrensElement;\r\n}(uiElement_1.UiElement));\r\nexports.UiChildrensElement = UiChildrensElement;\r\n\n\n//# sourceURL=webpack://jpf/./src/framework/uiChildrensElement.ts?");

/***/ }),

/***/ "./src/framework/uiElement.ts":
/*!************************************!*\
  !*** ./src/framework/uiElement.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar UiElement = (function () {\r\n    function UiElement(tagName, elementType, options) {\r\n        var _this = this;\r\n        this.build = function () {\r\n            var _a;\r\n            if (_this.options.id) {\r\n                _this.element.id = _this.options.id;\r\n            }\r\n            if (_this.options.elementType) {\r\n                _this.setAttribute({\r\n                    name: \"elementtype\",\r\n                    value: _this.options.elementType\r\n                });\r\n            }\r\n            var bindings = {\r\n                style: _this.options.style,\r\n                attr: _this.attributes\r\n            };\r\n            if (_this.options.className) {\r\n                if (ko.isObservable(_this.options.className)) {\r\n                    bindings[\"css\"] = _this.options.className;\r\n                }\r\n                else {\r\n                    bindings[\"css\"] = (_a = {},\r\n                        _a[_this.options.className] = true,\r\n                        _a);\r\n                }\r\n            }\r\n            ko.applyBindingsToNode(_this.element, bindings);\r\n            if (_this.options.selectable === false) {\r\n                _this.element.onselectstart = function () {\r\n                    return false;\r\n                };\r\n                _this.element.style.userSelect = \"none\";\r\n                _this.element.style[\"-webkit-user-select\"] = \"none\";\r\n                _this.element.style[\"-moz-user-select\"] = \"none\";\r\n                _this.element.style[\"-ms-user-select\"] = \"none\";\r\n            }\r\n            _this.setVisibility(_this.visible());\r\n            _this.visible.subscribe(function (visible) {\r\n                _this.setVisibility(visible);\r\n            });\r\n            if (_this.options.addControlToDataDictionary) {\r\n                if (!_this.element.data) {\r\n                    _this.element.data = {};\r\n                }\r\n                _this.element.data.frameworkElement = _this;\r\n            }\r\n        };\r\n        this.render = function () {\r\n            if (_this.element) {\r\n                _this.remove();\r\n            }\r\n            if (typeof _this.build === \"function\") {\r\n                _this.element = document.createElement(_this.tagName);\r\n                _this.build();\r\n                return _this.element;\r\n            }\r\n            throw \"The build method of this FrameworkElement has not been defined\";\r\n        };\r\n        this.visible = ko.observable(true);\r\n        this.attributes = {};\r\n        this.options = {};\r\n        this.tagName = tagName;\r\n        if (options) {\r\n            this.options = options;\r\n        }\r\n        if (!this.options.elementType) {\r\n            this.options.elementType = elementType;\r\n        }\r\n        if (!this.options.addControlToDataDictionary) {\r\n            this.options.addControlToDataDictionary = false;\r\n        }\r\n    }\r\n    UiElement.prototype.setVisibility = function (visible) {\r\n        if (this.element) {\r\n            if (visible) {\r\n                this.element.style.display = this.display;\r\n            }\r\n            else {\r\n                if (this.element.style.display !== \"none\") {\r\n                    this.display = this.element.style.display;\r\n                }\r\n                this.element.style.display = \"none\";\r\n            }\r\n        }\r\n    };\r\n    UiElement.prototype.remove = function () {\r\n        if (this.element) {\r\n            if (this.element.remove) {\r\n                this.element.remove();\r\n            }\r\n            else {\r\n                this.element.parentElement.removeChild(this.element);\r\n            }\r\n            this.element = null;\r\n        }\r\n    };\r\n    UiElement.prototype.getAttribute = function (attributeName) {\r\n        if (this.element) {\r\n            return this.element.getAttribute(attributeName);\r\n        }\r\n        else {\r\n            return ko.unwrap(this.attributes[attributeName]);\r\n        }\r\n    };\r\n    UiElement.prototype.setAttribute = function (attribute) {\r\n        var currentAttribute = this.attributes[attribute.name];\r\n        if (currentAttribute) {\r\n            if (ko.isObservable(currentAttribute)) {\r\n                currentAttribute(ko.unwrap(attribute.value));\r\n            }\r\n            else {\r\n                this.attributes[attribute.name] = attribute.value;\r\n            }\r\n        }\r\n        else {\r\n            this.attributes[attribute.name] = attribute.value;\r\n        }\r\n    };\r\n    UiElement.prototype.deleteAttribute = function (attributeName) {\r\n        if (this.attributes[attributeName]) {\r\n            delete this.attributes[attributeName];\r\n        }\r\n    };\r\n    UiElement.prototype.getStyle = function (cssProperties) {\r\n        var style = {};\r\n        for (var _i = 0, cssProperties_1 = cssProperties; _i < cssProperties_1.length; _i++) {\r\n            var cssProperty = cssProperties_1[_i];\r\n            if (this.element) {\r\n                style[cssProperty] = this.element.style[cssProperty];\r\n            }\r\n            else {\r\n                style[cssProperty] = this.options.style[cssProperty];\r\n            }\r\n        }\r\n        return style;\r\n    };\r\n    UiElement.prototype.setStyle = function (newStyle, overwriteExisting) {\r\n        if (!this.options.style) {\r\n            this.options.style = {};\r\n        }\r\n        for (var styleName in newStyle) {\r\n            if (this.options.style.hasOwnProperty(styleName)) {\r\n                if (!overwriteExisting) {\r\n                    continue;\r\n                }\r\n            }\r\n            var newValue = newStyle[styleName];\r\n            var currentValue = this.options.style[styleName];\r\n            if (currentValue && ko.isObservable(currentValue)) {\r\n                currentValue(ko.unwrap(newValue));\r\n            }\r\n            else {\r\n                this.options.style[styleName] = newValue;\r\n                if (this.element) {\r\n                    this.element[styleName] = newValue;\r\n                }\r\n            }\r\n        }\r\n    };\r\n    UiElement.prototype.deleteStyle = function (style) {\r\n        var styles;\r\n        if (style instanceof Array) {\r\n            styles = style;\r\n        }\r\n        else if (style instanceof Object) {\r\n            styles = Object.keys(style);\r\n        }\r\n        else {\r\n            styles = [style];\r\n        }\r\n        for (var cssProperty in styles) {\r\n            if (this.options.style && this.options.style.hasOwnProperty(cssProperty)) {\r\n                delete this.options.style[cssProperty];\r\n            }\r\n            if (this.element) {\r\n                this.element.style[cssProperty] = undefined;\r\n            }\r\n        }\r\n    };\r\n    return UiElement;\r\n}());\r\nexports.UiElement = UiElement;\r\n\n\n//# sourceURL=webpack://jpf/./src/framework/uiElement.ts?");

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