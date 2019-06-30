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
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar stackPanel_1 = __webpack_require__(/*! ../panel/stackPanel */ \"./src/controls/panel/stackPanel.ts\");\r\nvar toggleButton_1 = __webpack_require__(/*! ../buttons/toggleButton */ \"./src/controls/buttons/toggleButton.ts\");\r\nvar AudioRecorder = (function (_super) {\r\n    __extends(AudioRecorder, _super);\r\n    function AudioRecorder(options) {\r\n        var _this = _super.call(this, options) || this;\r\n        if (_this.options.startStopButtonOptions) {\r\n            _this.startStopButton = new toggleButton_1.ToggleButton(_this.options.startStopButtonOptions);\r\n        }\r\n        if (_this.options.pauseResumeButtonOptions) {\r\n            _this.pauseResumeButton = new toggleButton_1.ToggleButton(_this.options.pauseResumeButtonOptions);\r\n        }\r\n        return _this;\r\n    }\r\n    AudioRecorder.prototype.build = function () {\r\n        var _this = this;\r\n        if (!this.startStopButton) {\r\n            this.startStopButton = new toggleButton_1.ToggleButton({});\r\n        }\r\n        if (!this.pauseResumeButton) {\r\n            this.pauseResumeButton = new toggleButton_1.ToggleButton({});\r\n        }\r\n        this.startStopButton.options.selectedchanged = function (selected) {\r\n            if (selected) {\r\n                navigator.mediaDevices\r\n                    .getUserMedia({\r\n                    audio: true\r\n                })\r\n                    .then(function (mediaStream) {\r\n                    _this.mediaRecorder = new MediaRecorder(mediaStream);\r\n                    _this.mediaRecorder.start();\r\n                    var audioChunks = [];\r\n                    _this.mediaRecorder.addEventListener(\"dataavailable\", function (event) {\r\n                        audioChunks.push(event.data);\r\n                    });\r\n                    _this.mediaRecorder.addEventListener(\"stop\", function () {\r\n                        var audioBlob = new Blob(audioChunks);\r\n                        if (_this.options.onstop) {\r\n                            _this.options.onstop({\r\n                                blob: audioBlob,\r\n                                mimeType: _this.mediaRecorder.mimeType\r\n                            });\r\n                        }\r\n                    });\r\n                    if (_this.options.autoStopAfter) {\r\n                        setTimeout(function () {\r\n                            _this.mediaRecorder.stop();\r\n                        }, _this.options.autoStopAfter);\r\n                    }\r\n                });\r\n            }\r\n            else {\r\n                _this.mediaRecorder.stop();\r\n            }\r\n        };\r\n        this.pauseResumeButton.options.selectedchanged = function (selected) {\r\n            if (selected) {\r\n                _this.mediaRecorder.pause();\r\n            }\r\n            else {\r\n                _this.mediaRecorder.resume();\r\n            }\r\n        };\r\n        this.setChildren([this.startStopButton, this.pauseResumeButton]);\r\n        _super.prototype.build.call(this);\r\n    };\r\n    return AudioRecorder;\r\n}(stackPanel_1.StackPanel));\r\nexports.AudioRecorder = AudioRecorder;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/audioRecorder/audioRecorder.ts?");

/***/ }),

/***/ "./src/controls/buttons/button.ts":
/*!****************************************!*\
  !*** ./src/controls/buttons/button.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Button = (function (_super) {\r\n    __extends(Button, _super);\r\n    function Button(options) {\r\n        return _super.call(this, \"button\", \"Button\", options) || this;\r\n    }\r\n    Button.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        var content = this.options.content;\r\n        if (content instanceof uiElement_1.UiElement) {\r\n            this.element.appendChild(content.render());\r\n        }\r\n        else {\r\n            ko.applyBindingsToNode(this.element, { text: content });\r\n        }\r\n        if (this.options.disabled) {\r\n            ko.applyBindingsToNode(this.element, { attr: { disabled: this.options.disabled } });\r\n        }\r\n    };\r\n    return Button;\r\n}(uiElement_1.UiElement));\r\nexports.Button = Button;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/buttons/button.ts?");

/***/ }),

/***/ "./src/controls/buttons/imageButton.ts":
/*!*********************************************!*\
  !*** ./src/controls/buttons/imageButton.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar button_1 = __webpack_require__(/*! ./button */ \"./src/controls/buttons/button.ts\");\r\nvar image_1 = __webpack_require__(/*! ../image/image */ \"./src/controls/image/image.ts\");\r\nvar ImageButton = (function (_super) {\r\n    __extends(ImageButton, _super);\r\n    function ImageButton(options) {\r\n        return _super.call(this, \"button\", \"ImageButton\", options) || this;\r\n    }\r\n    ImageButton.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        var button = new button_1.Button(this.options.buttonOptions);\r\n        button.options.content = new image_1.Image(this.options.imageOptions);\r\n        this.element = button.render();\r\n    };\r\n    return ImageButton;\r\n}(uiElement_1.UiElement));\r\nexports.ImageButton = ImageButton;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/buttons/imageButton.ts?");

/***/ }),

/***/ "./src/controls/buttons/imageToggleButton.ts":
/*!***************************************************!*\
  !*** ./src/controls/buttons/imageToggleButton.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar toggleButton_1 = __webpack_require__(/*! ./toggleButton */ \"./src/controls/buttons/toggleButton.ts\");\r\nvar image_1 = __webpack_require__(/*! ../image/image */ \"./src/controls/image/image.ts\");\r\nvar ImageToggleButton = (function (_super) {\r\n    __extends(ImageToggleButton, _super);\r\n    function ImageToggleButton(options) {\r\n        return _super.call(this, \"button\", \"ImageButton\", options) || this;\r\n    }\r\n    ImageToggleButton.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        var toggleButton = new toggleButton_1.ToggleButton(this.options.toggleButtonOptions);\r\n        toggleButton.options.content = new image_1.Image(this.options.imageOptions);\r\n        this.element = toggleButton.render();\r\n    };\r\n    return ImageToggleButton;\r\n}(uiElement_1.UiElement));\r\nexports.ImageToggleButton = ImageToggleButton;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/buttons/imageToggleButton.ts?");

/***/ }),

/***/ "./src/controls/buttons/toggleButton.ts":
/*!**********************************************!*\
  !*** ./src/controls/buttons/toggleButton.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar button_1 = __webpack_require__(/*! ./button */ \"./src/controls/buttons/button.ts\");\r\nvar eventListener_1 = __webpack_require__(/*! ../../framework/eventListener */ \"./src/framework/eventListener.ts\");\r\nvar ToggleButton = (function (_super) {\r\n    __extends(ToggleButton, _super);\r\n    function ToggleButton(options) {\r\n        return _super.call(this, options) || this;\r\n    }\r\n    ToggleButton.prototype.build = function () {\r\n        var _this = this;\r\n        _super.prototype.build.call(this);\r\n        var styleNormal = window.getComputedStyle(this.element);\r\n        this.element.addEventListener(\"click\", function (ev) { });\r\n        this.options.eventListeners = [\r\n            new eventListener_1.EventListener(\"click\", function () {\r\n                var newValue = !ko.unwrap(_this.options.selected);\r\n                if (ko.isObservable(_this.options.selected)) {\r\n                    _this.options.selected(newValue);\r\n                }\r\n                else {\r\n                    _this.options.selected = newValue;\r\n                }\r\n                if (newValue) {\r\n                    _this.deleteStyle(styleNormal);\r\n                    _this.setStyle(_this.options.styleSelected);\r\n                }\r\n                else {\r\n                    _this.deleteStyle(_this.options.styleSelected);\r\n                    _this.setStyle(styleNormal);\r\n                }\r\n                if (_this.options.selectedchanged) {\r\n                    _this.options.selectedchanged(newValue);\r\n                }\r\n            })\r\n        ];\r\n    };\r\n    return ToggleButton;\r\n}(button_1.Button));\r\nexports.ToggleButton = ToggleButton;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/buttons/toggleButton.ts?");

/***/ }),

/***/ "./src/controls/div/div.ts":
/*!*********************************!*\
  !*** ./src/controls/div/div.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiChildrensElement_1 = __webpack_require__(/*! ../../framework/uiChildrensElement */ \"./src/framework/uiChildrensElement.ts\");\r\nvar Div = (function (_super) {\r\n    __extends(Div, _super);\r\n    function Div(options) {\r\n        return _super.call(this, \"div\", \"Div\", options) || this;\r\n    }\r\n    Div.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        if (this.options.text) {\r\n            if (this.options.isHtml) {\r\n                ko.applyBindingsToNode(this.element, { html: this.options.text });\r\n            }\r\n            else {\r\n                ko.applyBindingsToNode(this.element, { text: this.options.text });\r\n            }\r\n        }\r\n    };\r\n    return Div;\r\n}(uiChildrensElement_1.UiChildrensElement));\r\nexports.Div = Div;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/div/div.ts?");

/***/ }),

/***/ "./src/controls/hyperlink/hyperlink.ts":
/*!*********************************************!*\
  !*** ./src/controls/hyperlink/hyperlink.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Hyperlink = (function (_super) {\r\n    __extends(Hyperlink, _super);\r\n    function Hyperlink(options) {\r\n        return _super.call(this, \"a\", \"Hyperlink\", options) || this;\r\n    }\r\n    Hyperlink.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        ko.applyBindingsToNode(this.element, {\r\n            text: this.options.text,\r\n            attr: {\r\n                href: this.options.href\r\n            }\r\n        });\r\n    };\r\n    return Hyperlink;\r\n}(uiElement_1.UiElement));\r\nexports.Hyperlink = Hyperlink;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/hyperlink/hyperlink.ts?");

/***/ }),

/***/ "./src/controls/image/image.ts":
/*!*************************************!*\
  !*** ./src/controls/image/image.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Image = (function (_super) {\r\n    __extends(Image, _super);\r\n    function Image(options) {\r\n        return _super.call(this, \"img\", \"Image\", options) || this;\r\n    }\r\n    Image.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        ko.applyBindingsToNode(this.element, {\r\n            attr: {\r\n                src: this.options.src,\r\n                alt: this.options.alt\r\n            }\r\n        });\r\n    };\r\n    return Image;\r\n}(uiElement_1.UiElement));\r\nexports.Image = Image;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/image/image.ts?");

/***/ }),

/***/ "./src/controls/index.ts":
/*!*******************************!*\
  !*** ./src/controls/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./audioRecorder/audioRecorder */ \"./src/controls/audioRecorder/audioRecorder.ts\"));\r\n__export(__webpack_require__(/*! ./buttons/button */ \"./src/controls/buttons/button.ts\"));\r\n__export(__webpack_require__(/*! ./buttons/imageButton */ \"./src/controls/buttons/imageButton.ts\"));\r\n__export(__webpack_require__(/*! ./buttons/imageToggleButton */ \"./src/controls/buttons/imageToggleButton.ts\"));\r\n__export(__webpack_require__(/*! ./buttons/toggleButton */ \"./src/controls/buttons/toggleButton.ts\"));\r\n__export(__webpack_require__(/*! ./div/div */ \"./src/controls/div/div.ts\"));\r\n__export(__webpack_require__(/*! ./hyperlink/hyperlink */ \"./src/controls/hyperlink/hyperlink.ts\"));\r\n__export(__webpack_require__(/*! ./image/image */ \"./src/controls/image/image.ts\"));\r\n__export(__webpack_require__(/*! ./input/checkbox */ \"./src/controls/input/checkbox.ts\"));\r\n__export(__webpack_require__(/*! ./input/password */ \"./src/controls/input/password.ts\"));\r\n__export(__webpack_require__(/*! ./input/select */ \"./src/controls/input/select.ts\"));\r\n__export(__webpack_require__(/*! ./input/slider */ \"./src/controls/input/slider.ts\"));\r\n__export(__webpack_require__(/*! ./input/text */ \"./src/controls/input/text.ts\"));\r\n__export(__webpack_require__(/*! ./label/label */ \"./src/controls/label/label.ts\"));\r\n__export(__webpack_require__(/*! ./label/labeledControl */ \"./src/controls/label/labeledControl.ts\"));\r\n__export(__webpack_require__(/*! ./panel/stackPanel */ \"./src/controls/panel/stackPanel.ts\"));\r\n__export(__webpack_require__(/*! ./span/span */ \"./src/controls/span/span.ts\"));\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/index.ts?");

/***/ }),

/***/ "./src/controls/input/checkbox.ts":
/*!****************************************!*\
  !*** ./src/controls/input/checkbox.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar inputElement_1 = __webpack_require__(/*! ../../framework/inputElement */ \"./src/framework/inputElement.ts\");\r\nvar CheckBox = (function (_super) {\r\n    __extends(CheckBox, _super);\r\n    function CheckBox(options) {\r\n        return _super.call(this, \"CheckBox\", \"checkbox\", options) || this;\r\n    }\r\n    CheckBox.prototype.build = function () {\r\n        var _this = this;\r\n        _super.prototype.build.call(this);\r\n        ko.applyBindingsToNode(this.element, { checked: this.options.checked });\r\n        if (this.options.scale) {\r\n            var scale = \"scale(\" + this.options.scale + \")\";\r\n            this.setStyle({\r\n                transform: scale,\r\n                WebKitTransform: scale,\r\n                msTransform: scale\r\n            });\r\n        }\r\n        this.addEventListener(\"change\", function () {\r\n            if (_this.options.onchange) {\r\n                var checkbox = _this.element;\r\n                _this.options.onchange(checkbox.checked);\r\n            }\r\n        });\r\n    };\r\n    return CheckBox;\r\n}(inputElement_1.InputElement));\r\nexports.CheckBox = CheckBox;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/input/checkbox.ts?");

/***/ }),

/***/ "./src/controls/input/password.ts":
/*!****************************************!*\
  !*** ./src/controls/input/password.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar text_1 = __webpack_require__(/*! ./text */ \"./src/controls/input/text.ts\");\r\nvar Password = (function (_super) {\r\n    __extends(Password, _super);\r\n    function Password(options) {\r\n        return _super.call(this, options, \"PasswordBox\", \"password\") || this;\r\n    }\r\n    return Password;\r\n}(text_1.Text));\r\nexports.Password = Password;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/input/password.ts?");

/***/ }),

/***/ "./src/controls/input/select.ts":
/*!**************************************!*\
  !*** ./src/controls/input/select.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Select = (function (_super) {\r\n    __extends(Select, _super);\r\n    function Select(options) {\r\n        return _super.call(this, \"select\", \"Select\", options) || this;\r\n    }\r\n    Select.prototype.build = function () {\r\n        var _this = this;\r\n        _super.prototype.build.call(this);\r\n        ko.applyBindingsToNode(this.element, {\r\n            options: this.options.items,\r\n            optionsCaption: this.options.itemsCaption,\r\n            optionsText: this.options.itemsText,\r\n            optionsValue: this.options.itemsValue,\r\n            value: ko.unwrap(this.options.value)\r\n        });\r\n        var optionsValue = this.options.value;\r\n        if (ko.isObservable(optionsValue)) {\r\n            optionsValue.subscribe(function (newValue) {\r\n                _this.element.value = newValue;\r\n            });\r\n        }\r\n        this.addEventListener(\"change\", function () {\r\n            if (ko.isObservable(optionsValue)) {\r\n                optionsValue(_this.element.value);\r\n            }\r\n            if (_this.options.onchange) {\r\n                _this.options.onchange(_this.element.value);\r\n            }\r\n        });\r\n    };\r\n    return Select;\r\n}(uiElement_1.UiElement));\r\nexports.Select = Select;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/input/select.ts?");

/***/ }),

/***/ "./src/controls/input/slider.ts":
/*!**************************************!*\
  !*** ./src/controls/input/slider.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar inputElement_1 = __webpack_require__(/*! ../../framework/inputElement */ \"./src/framework/inputElement.ts\");\r\nvar Slider = (function (_super) {\r\n    __extends(Slider, _super);\r\n    function Slider(options) {\r\n        return _super.call(this, \"Slider\", \"range\", options) || this;\r\n    }\r\n    Slider.prototype.build = function () {\r\n        var _this = this;\r\n        _super.prototype.build.call(this);\r\n        this.element.setAttribute(\"min\", this.options.min.toString());\r\n        this.element.setAttribute(\"max\", this.options.max.toString());\r\n        if (this.options.step) {\r\n            this.element.setAttribute(\"step\", this.options.step.toString());\r\n        }\r\n        ko.applyBindingsToNode(this.element, { value: this.options.value });\r\n        this.element.onchange = function () {\r\n            if (_this.options.onchange) {\r\n                var input = _this.element;\r\n                var value = Number(input.value);\r\n                _this.options.onchange(value);\r\n            }\r\n        };\r\n    };\r\n    return Slider;\r\n}(inputElement_1.InputElement));\r\nexports.Slider = Slider;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/input/slider.ts?");

/***/ }),

/***/ "./src/controls/input/text.ts":
/*!************************************!*\
  !*** ./src/controls/input/text.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar inputElement_1 = __webpack_require__(/*! ../../framework/inputElement */ \"./src/framework/inputElement.ts\");\r\nvar Text = (function (_super) {\r\n    __extends(Text, _super);\r\n    function Text(options, elementType, inputElementType) {\r\n        if (elementType === void 0) { elementType = \"Text\"; }\r\n        if (inputElementType === void 0) { inputElementType = \"text\"; }\r\n        return _super.call(this, elementType, inputElementType, options) || this;\r\n    }\r\n    Text.prototype.build = function () {\r\n        var _this = this;\r\n        _super.prototype.build.call(this);\r\n        if (this.options.valueUpdateMode === \"OnInput\") {\r\n            this.element.addEventListener(\"input\", function () {\r\n                _this.innerSetText(_this.element.value, false, true, true);\r\n            });\r\n        }\r\n        else {\r\n            this.element.addEventListener(\"change\", function () {\r\n                _this.innerSetText(_this.element.value, false, true, true);\r\n            });\r\n        }\r\n        var text = this.options.text;\r\n        this.innerText = ko.unwrap(text);\r\n        if (this.innerText) {\r\n            this.element.value = this.innerText;\r\n        }\r\n        if (ko.isObservable(text)) {\r\n            text.subscribe(function (newValue) {\r\n                _this.innerSetText(newValue, true, false, false);\r\n            });\r\n        }\r\n    };\r\n    Text.prototype.innerSetText = function (text, setElement, triggerOnchange, setObservable) {\r\n        if (this.options.checkValidity && !this.options.checkValidity(this.innerText, text)) {\r\n            text = this.innerText;\r\n            setElement = true;\r\n            triggerOnchange = false;\r\n        }\r\n        this.innerText = text;\r\n        if (setElement && this.element) {\r\n            this.element.value = text;\r\n        }\r\n        if (triggerOnchange && this.options.onchange) {\r\n            this.options.onchange(text);\r\n        }\r\n        if (setObservable) {\r\n            var optionsText = this.options.text;\r\n            if (ko.isObservable(optionsText)) {\r\n                optionsText(text);\r\n            }\r\n        }\r\n    };\r\n    Text.prototype.getText = function () {\r\n        return this.innerText;\r\n    };\r\n    Text.prototype.setText = function (text, triggerChange) {\r\n        if (triggerChange === void 0) { triggerChange = false; }\r\n        this.innerSetText(text, true, triggerChange, true);\r\n    };\r\n    return Text;\r\n}(inputElement_1.InputElement));\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/input/text.ts?");

/***/ }),

/***/ "./src/controls/label/label.ts":
/*!*************************************!*\
  !*** ./src/controls/label/label.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Label = (function (_super) {\r\n    __extends(Label, _super);\r\n    function Label(options) {\r\n        return _super.call(this, \"label\", \"Label\", options) || this;\r\n    }\r\n    Label.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        ko.applyBindingsToNode(this.element, {\r\n            text: this.options.text,\r\n            attr: {\r\n                for: this.options.for\r\n            }\r\n        });\r\n    };\r\n    return Label;\r\n}(uiElement_1.UiElement));\r\nexports.Label = Label;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/label/label.ts?");

/***/ }),

/***/ "./src/controls/label/labeledControl.ts":
/*!**********************************************!*\
  !*** ./src/controls/label/labeledControl.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar label_1 = __webpack_require__(/*! ./label */ \"./src/controls/label/label.ts\");\r\nvar stackPanel_1 = __webpack_require__(/*! ../panel/stackPanel */ \"./src/controls/panel/stackPanel.ts\");\r\nvar LabeledControl = (function (_super) {\r\n    __extends(LabeledControl, _super);\r\n    function LabeledControl(options) {\r\n        return _super.call(this, options) || this;\r\n    }\r\n    LabeledControl.prototype.build = function () {\r\n        this.label = new label_1.Label(this.options.labelOptions);\r\n        if (!this.options.style.alignItems) {\r\n            this.setStyle({ alignItems: \"baseline\" });\r\n        }\r\n        this.setChildren([this.label, this.options.control]);\r\n        _super.prototype.build.call(this);\r\n    };\r\n    return LabeledControl;\r\n}(stackPanel_1.StackPanel));\r\nexports.LabeledControl = LabeledControl;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/label/labeledControl.ts?");

/***/ }),

/***/ "./src/controls/panel/stackPanel.ts":
/*!******************************************!*\
  !*** ./src/controls/panel/stackPanel.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar uiChildrensElement_1 = __webpack_require__(/*! ../../framework/uiChildrensElement */ \"./src/framework/uiChildrensElement.ts\");\r\nvar StackPanel = (function (_super) {\r\n    __extends(StackPanel, _super);\r\n    function StackPanel(options) {\r\n        var _this = _super.call(this, \"div\", \"StackPanel\", options) || this;\r\n        _this.setStyle({ display: \"flex\" }, true);\r\n        if (!_this.options.flexDirection) {\r\n            _this.options.flexDirection = \"row\";\r\n        }\r\n        if (!_this.options.flexWrap) {\r\n            _this.options.flexWrap = \"wrap\";\r\n        }\r\n        if (!_this.options.justifyContent) {\r\n            _this.options.justifyContent = \"flex-start\";\r\n        }\r\n        if (!_this.options.alignItems) {\r\n            _this.options.alignItems = \"flex-start\";\r\n        }\r\n        if (!_this.options.alignContent) {\r\n            _this.options.alignContent = \"flex-start\";\r\n        }\r\n        return _this;\r\n    }\r\n    StackPanel.prototype.build = function () {\r\n        this.setStyle({\r\n            flexDirection: this.options.flexDirection,\r\n            flexWrap: this.options.flexWrap,\r\n            justifyContent: this.options.justifyContent,\r\n            alignItems: this.options.alignItems,\r\n            alignContent: this.options.alignContent\r\n        });\r\n        _super.prototype.build.call(this);\r\n    };\r\n    return StackPanel;\r\n}(uiChildrensElement_1.UiChildrensElement));\r\nexports.StackPanel = StackPanel;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/panel/stackPanel.ts?");

/***/ }),

/***/ "./src/controls/span/span.ts":
/*!***********************************!*\
  !*** ./src/controls/span/span.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ../../framework/uiElement */ \"./src/framework/uiElement.ts\");\r\nvar Span = (function (_super) {\r\n    __extends(Span, _super);\r\n    function Span(options) {\r\n        return _super.call(this, \"span\", \"Span\", options) || this;\r\n    }\r\n    Span.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        var bindings = {};\r\n        if (this.options.isHtml) {\r\n            bindings.html = this.options.text;\r\n        }\r\n        else {\r\n            bindings.text = this.options.text;\r\n        }\r\n        ko.applyBindingsToNode(this.element, bindings);\r\n    };\r\n    return Span;\r\n}(uiElement_1.UiElement));\r\nexports.Span = Span;\r\n\n\n//# sourceURL=webpack://jpf/./src/controls/span/span.ts?");

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

/***/ "./src/framework/eventListener.ts":
/*!****************************************!*\
  !*** ./src/framework/eventListener.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar EventListener = (function () {\r\n    function EventListener(type, listener, options) {\r\n        this.type = type;\r\n        this.listener = listener;\r\n        this.options = options;\r\n    }\r\n    return EventListener;\r\n}());\r\nexports.EventListener = EventListener;\r\n\n\n//# sourceURL=webpack://jpf/./src/framework/eventListener.ts?");

/***/ }),

/***/ "./src/framework/inputElement.ts":
/*!***************************************!*\
  !*** ./src/framework/inputElement.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ./uiElement */ \"./src/framework/uiElement.ts\");\r\nvar InputElement = (function (_super) {\r\n    __extends(InputElement, _super);\r\n    function InputElement(elementType, inputType, options) {\r\n        var _this = _super.call(this, \"input\", elementType, options) || this;\r\n        _this.inputType = inputType;\r\n        return _this;\r\n    }\r\n    InputElement.prototype.build = function () {\r\n        _super.prototype.build.call(this);\r\n        this.element.type = this.inputType;\r\n        if (this.options.placeholder) {\r\n            this.element.placeholder = this.options.placeholder;\r\n        }\r\n        if (this.options.disabled) {\r\n            ko.applyBindingsToNode(this.element, {\r\n                attr: {\r\n                    disabled: this.options.disabled\r\n                }\r\n            });\r\n        }\r\n    };\r\n    return InputElement;\r\n}(uiElement_1.UiElement));\r\nexports.InputElement = InputElement;\r\n\n\n//# sourceURL=webpack://jpf/./src/framework/inputElement.ts?");

/***/ }),

/***/ "./src/framework/uiChildrensElement.ts":
/*!*********************************************!*\
  !*** ./src/framework/uiChildrensElement.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar uiElement_1 = __webpack_require__(/*! ./uiElement */ \"./src/framework/uiElement.ts\");\r\nvar UiChildrensElement = (function (_super) {\r\n    __extends(UiChildrensElement, _super);\r\n    function UiChildrensElement(tagName, type, options) {\r\n        return _super.call(this, tagName, type, options) || this;\r\n    }\r\n    UiChildrensElement.prototype.build = function () {\r\n        var _this = this;\r\n        _super.prototype.build.call(this);\r\n        if (!this.options.children) {\r\n            this.options.children = [];\r\n        }\r\n        var children = this.options.children;\r\n        if (ko.isObservable(children)) {\r\n            children.subscribe(function () {\r\n                _this.renderItems();\r\n            });\r\n        }\r\n        this.renderItems();\r\n    };\r\n    UiChildrensElement.prototype.renderItems = function () {\r\n        if (this.element) {\r\n            while (this.element.firstChild) {\r\n                this.element.removeChild(this.element.firstChild);\r\n            }\r\n            var documentFragment = document.createDocumentFragment();\r\n            for (var _i = 0, _a = this.options.children; _i < _a.length; _i++) {\r\n                var child = _a[_i];\r\n                documentFragment.appendChild(child.render());\r\n            }\r\n            this.element.appendChild(documentFragment);\r\n        }\r\n    };\r\n    UiChildrensElement.prototype.getChildren = function () {\r\n        return this.options.children;\r\n    };\r\n    UiChildrensElement.prototype.setChildren = function (children) {\r\n        this.options.children = children;\r\n        this.renderItems();\r\n    };\r\n    UiChildrensElement.prototype.addChild = function (newItem, referenceItem) {\r\n        if (referenceItem) {\r\n            var index = this.options.children.indexOf(referenceItem);\r\n            if (index > -1) {\r\n                this.options.children.splice(index, 0, newItem);\r\n                if (this.element && referenceItem.element) {\r\n                    this.element.insertBefore(newItem.render(), referenceItem.element);\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            this.options.children.push(newItem);\r\n            if (this.element) {\r\n                this.element.appendChild(newItem.render());\r\n            }\r\n        }\r\n    };\r\n    UiChildrensElement.prototype.clear = function () {\r\n        var children = this.options.children;\r\n        if (ko.isObservable(children)) {\r\n            children([]);\r\n        }\r\n        else {\r\n            this.options.children = [];\r\n            if (this.element) {\r\n                while (this.element.firstChild) {\r\n                    this.element.removeChild(this.element.firstChild);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    UiChildrensElement.prototype.removeChild = function (element) {\r\n        var index = this.options.children.indexOf(element);\r\n        if (index > -1) {\r\n            this.options.children.splice(index, 1);\r\n            if (this.element) {\r\n                this.element.removeChild(this.element.children[index]);\r\n            }\r\n        }\r\n    };\r\n    return UiChildrensElement;\r\n}(uiElement_1.UiElement));\r\nexports.UiChildrensElement = UiChildrensElement;\r\n\n\n//# sourceURL=webpack://jpf/./src/framework/uiChildrensElement.ts?");

/***/ }),

/***/ "./src/framework/uiElement.ts":
/*!************************************!*\
  !*** ./src/framework/uiElement.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ \"knockout\");\r\nvar eventListener_1 = __webpack_require__(/*! ./eventListener */ \"./src/framework/eventListener.ts\");\r\nvar UiElement = (function () {\r\n    function UiElement(tagName, elementType, options) {\r\n        this.visible = ko.observable(true);\r\n        this.attributes = {};\r\n        this.options = {};\r\n        if (!options) {\r\n            options = {};\r\n        }\r\n        this.tagName = tagName;\r\n        this.options = options;\r\n        if (!this.options.elementType) {\r\n            this.options.elementType = elementType;\r\n        }\r\n        if (!this.options.addControlToDataDictionary) {\r\n            this.options.addControlToDataDictionary = false;\r\n        }\r\n    }\r\n    UiElement.prototype.setVisibility = function (visible) {\r\n        if (this.element) {\r\n            if (visible) {\r\n                this.element.style.display = this.display;\r\n            }\r\n            else {\r\n                if (this.element.style.display !== \"none\") {\r\n                    this.display = this.element.style.display;\r\n                }\r\n                this.element.style.display = \"none\";\r\n            }\r\n        }\r\n    };\r\n    UiElement.prototype.build = function () {\r\n        var _this = this;\r\n        var _a;\r\n        if (this.options.id) {\r\n            this.element.id = this.options.id;\r\n        }\r\n        if (this.options.elementType) {\r\n            this.setAttribute(\"elementtype\", this.options.elementType);\r\n        }\r\n        var bindings = {\r\n            style: this.options.style,\r\n            attr: this.attributes\r\n        };\r\n        if (this.options.className) {\r\n            if (ko.isObservable(this.options.className)) {\r\n                bindings[\"css\"] = this.options.className;\r\n            }\r\n            else {\r\n                bindings[\"css\"] = (_a = {},\r\n                    _a[this.options.className] = true,\r\n                    _a);\r\n            }\r\n        }\r\n        ko.applyBindingsToNode(this.element, bindings);\r\n        if (this.options.selectable === false) {\r\n            this.element.addEventListener(\"selectstart\", function () { return false; });\r\n            this.element.style.userSelect = \"none\";\r\n            this.element.style[\"-webkit-user-select\"] = \"none\";\r\n            this.element.style[\"-moz-user-select\"] = \"none\";\r\n            this.element.style[\"-ms-user-select\"] = \"none\";\r\n        }\r\n        this.setVisibility(this.visible());\r\n        this.visible.subscribe(function (visible) {\r\n            _this.setVisibility(visible);\r\n        });\r\n        if (this.options.addControlToDataDictionary) {\r\n            if (!this.element.data) {\r\n                this.element.data = {};\r\n            }\r\n            this.element.data.frameworkElement = this;\r\n        }\r\n    };\r\n    UiElement.prototype.render = function () {\r\n        var _this = this;\r\n        if (this.element) {\r\n            this.remove();\r\n        }\r\n        if (typeof this.build === \"function\") {\r\n            this.element = document.createElement(this.tagName);\r\n            this.build();\r\n            if (this.options.eventListeners) {\r\n                var _loop_1 = function (eventListener) {\r\n                    this_1.element.addEventListener(eventListener.type, function (event) {\r\n                        eventListener.listener.call(null, event, _this);\r\n                    });\r\n                };\r\n                var this_1 = this;\r\n                for (var _i = 0, _a = this.options.eventListeners; _i < _a.length; _i++) {\r\n                    var eventListener = _a[_i];\r\n                    _loop_1(eventListener);\r\n                }\r\n            }\r\n            return this.element;\r\n        }\r\n        throw \"The build method of this FrameworkElement has not been defined\";\r\n    };\r\n    UiElement.prototype.remove = function () {\r\n        if (this.element) {\r\n            if (this.element.remove) {\r\n                this.element.remove();\r\n            }\r\n            else {\r\n                this.element.parentElement.removeChild(this.element);\r\n            }\r\n            this.element = null;\r\n        }\r\n    };\r\n    UiElement.prototype.getAttribute = function (attributeName) {\r\n        if (this.element) {\r\n            return this.element.getAttribute(attributeName);\r\n        }\r\n        else {\r\n            return ko.unwrap(this.attributes[attributeName]);\r\n        }\r\n    };\r\n    UiElement.prototype.setAttribute = function (name, value) {\r\n        var _a;\r\n        var currentAttribute = this.attributes[name];\r\n        var applyBindings = false;\r\n        if (currentAttribute) {\r\n            if (ko.isObservable(currentAttribute)) {\r\n                currentAttribute(ko.unwrap(value));\r\n            }\r\n            else {\r\n                this.attributes[name] = value;\r\n                applyBindings = true;\r\n            }\r\n        }\r\n        else {\r\n            this.attributes[name] = value;\r\n            applyBindings = true;\r\n        }\r\n        if (applyBindings && this.element) {\r\n            ko.applyBindingsToNode(this.element, { attr: (_a = {}, _a[name] = value, _a) });\r\n        }\r\n    };\r\n    UiElement.prototype.deleteAttribute = function (attributeName) {\r\n        if (this.attributes[attributeName]) {\r\n            delete this.attributes[attributeName];\r\n        }\r\n    };\r\n    UiElement.prototype.getStyle = function (cssProperties) {\r\n        var style = {};\r\n        for (var _i = 0, cssProperties_1 = cssProperties; _i < cssProperties_1.length; _i++) {\r\n            var cssProperty = cssProperties_1[_i];\r\n            if (this.element) {\r\n                style[cssProperty] = this.element.style[cssProperty];\r\n            }\r\n            else {\r\n                style[cssProperty] = this.options.style[cssProperty];\r\n            }\r\n        }\r\n        return style;\r\n    };\r\n    UiElement.prototype.setStyle = function (newStyle, overwriteExisting) {\r\n        if (!this.options.style) {\r\n            this.options.style = {};\r\n        }\r\n        for (var styleName in newStyle) {\r\n            if (this.options.style.hasOwnProperty(styleName)) {\r\n                if (!overwriteExisting) {\r\n                    continue;\r\n                }\r\n            }\r\n            var newValue = newStyle[styleName];\r\n            var currentValue = this.options.style[styleName];\r\n            if (currentValue && ko.isObservable(currentValue)) {\r\n                currentValue(ko.unwrap(newValue));\r\n            }\r\n            else {\r\n                this.options.style[styleName] = newValue;\r\n                if (this.element) {\r\n                    this.element[styleName] = newValue;\r\n                }\r\n            }\r\n        }\r\n    };\r\n    UiElement.prototype.deleteStyle = function (style) {\r\n        var styles;\r\n        if (style instanceof Array) {\r\n            styles = style;\r\n        }\r\n        else if (style instanceof Object) {\r\n            styles = Object.keys(style);\r\n        }\r\n        else {\r\n            styles = [style];\r\n        }\r\n        for (var cssProperty in styles) {\r\n            if (this.options.style && this.options.style.hasOwnProperty(cssProperty)) {\r\n                delete this.options.style[cssProperty];\r\n            }\r\n            if (this.element) {\r\n                this.element.style[cssProperty] = undefined;\r\n            }\r\n        }\r\n    };\r\n    UiElement.prototype.addEventListener = function (type, listener, options) {\r\n        if (!this.options.eventListeners) {\r\n            this.options.eventListeners = new Array();\r\n        }\r\n        this.options.eventListeners.push(new eventListener_1.EventListener(type, listener, options));\r\n    };\r\n    return UiElement;\r\n}());\r\nexports.UiElement = UiElement;\r\n\n\n//# sourceURL=webpack://jpf/./src/framework/uiElement.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Controls = __webpack_require__(/*! ./controls/index */ \"./src/controls/index.ts\");\r\nexports.Controls = Controls;\r\nvar Types = __webpack_require__(/*! ./types/types */ \"./src/types/types.ts\");\r\nexports.Types = Types;\r\n__export(__webpack_require__(/*! ./dialog/dialog */ \"./src/dialog/dialog.ts\"));\r\n__export(__webpack_require__(/*! ./framework/eventListener */ \"./src/framework/eventListener.ts\"));\r\n__export(__webpack_require__(/*! ./framework/inputElement */ \"./src/framework/inputElement.ts\"));\r\n__export(__webpack_require__(/*! ./framework/uiElement */ \"./src/framework/uiElement.ts\"));\r\n__export(__webpack_require__(/*! ./framework/uiChildrensElement */ \"./src/framework/uiChildrensElement.ts\"));\r\n\n\n//# sourceURL=webpack://jpf/./src/index.ts?");

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