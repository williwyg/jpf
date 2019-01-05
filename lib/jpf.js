/******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/controls/hyperlink/hyperlink.ts":
/*!*********************************************!*\
  !*** ./src/controls/hyperlink/hyperlink.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ../../framework/index */ \"./src/framework/index.ts\");\r\nvar Hyperlink = (function (_super) {\r\n    __extends(Hyperlink, _super);\r\n    function Hyperlink(options) {\r\n        var _this = _super.call(this, \"a\", \"Hyperlink\", options) || this;\r\n        _this.setAttribute({ name: \"href\", value: _this.text });\r\n        return _this;\r\n    }\r\n    return Hyperlink;\r\n}(index_1.FrameworkElement));\r\nexports.Hyperlink = Hyperlink;\r\n\n\n//# sourceURL=webpack:///./src/controls/hyperlink/hyperlink.ts?");

/***/ }),

/***/ "./src/controls/index.ts":
/*!*******************************!*\
  !*** ./src/controls/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./hyperlink/hyperlink */ \"./src/controls/hyperlink/hyperlink.ts\"));\r\n__export(__webpack_require__(/*! ./span/span */ \"./src/controls/span/span.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/controls/index.ts?");

/***/ }),

/***/ "./src/controls/span/span.ts":
/*!***********************************!*\
  !*** ./src/controls/span/span.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ../../framework/index */ \"./src/framework/index.ts\");\r\nvar Span = (function (_super) {\r\n    __extends(Span, _super);\r\n    function Span(options) {\r\n        var _this = _super.call(this, \"span\", \"Span\", options) || this;\r\n        var build = _this.build;\r\n        _this.build = function () {\r\n            build();\r\n            ko.applyBindingsToNode(_this.element, { html: _this.text });\r\n        };\r\n        return _this;\r\n    }\r\n    return Span;\r\n}(index_1.FrameworkElement));\r\nexports.Span = Span;\r\n\n\n//# sourceURL=webpack:///./src/controls/span/span.ts?");

/***/ }),

/***/ "./src/framework/frameworkElement.ts":
/*!*******************************************!*\
  !*** ./src/framework/frameworkElement.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar FrameworkElement = (function () {\r\n    function FrameworkElement(tagName, type, options) {\r\n        this.visible = ko.observable();\r\n        this.attributes = {};\r\n        this.selectable = true;\r\n        this.addControlToDataDictionary = false;\r\n        this.tagName = tagName;\r\n        this.type = type;\r\n        if (options) {\r\n            this.id = options.id;\r\n            if (options.type) {\r\n                this.type = options.type;\r\n            }\r\n            if (options.hasOwnProperty(\"visible\")) {\r\n                if (ko.isObservable(options.visible)) {\r\n                    this.visible = options.visible;\r\n                }\r\n                else {\r\n                    this.visible(options.visible);\r\n                }\r\n            }\r\n            this.className = options.className;\r\n            if (options.attributes) {\r\n                for (var _i = 0, _a = options.attributes; _i < _a.length; _i++) {\r\n                    var attribute = _a[_i];\r\n                    this.setAttribute(attribute);\r\n                }\r\n            }\r\n            if (options.style) {\r\n                this.style = options.style;\r\n            }\r\n        }\r\n    }\r\n    FrameworkElement.prototype.setVisibility = function (visible) {\r\n        if (this.element) {\r\n            if (visible) {\r\n                this.element.style.display = this.display;\r\n            }\r\n            else {\r\n                if (this.element.style.display !== \"none\") {\r\n                    this.display = this.element.style.display;\r\n                }\r\n                this.element.style.display = \"none\";\r\n            }\r\n        }\r\n    };\r\n    FrameworkElement.prototype.build = function () {\r\n        var _this = this;\r\n        var _a;\r\n        this.element.id = this.id;\r\n        if (this.type) {\r\n            this.element.attributes[\"type\"] = this.type;\r\n        }\r\n        var bindings = {\r\n            style: this.style,\r\n            attr: this.attributes\r\n        };\r\n        if (this.className) {\r\n            if (ko.isObservable(this.className)) {\r\n                bindings[\"css\"] = this.className;\r\n            }\r\n            else {\r\n                bindings[\"css\"] = (_a = {},\r\n                    _a[this.className] = true,\r\n                    _a);\r\n            }\r\n        }\r\n        ko.applyBindingsToNode(this.element, bindings);\r\n        if (this.selectable === false) {\r\n            this.element.onselectstart = function () {\r\n                return false;\r\n            };\r\n            this.element.style.userSelect = \"none\";\r\n            this.element.style[\"-webkit-user-select\"] = \"none\";\r\n            this.element.style[\"-moz-user-select\"] = \"none\";\r\n            this.element.style[\"-ms-user-select\"] = \"none\";\r\n        }\r\n        this.element.onclick = this.onclick;\r\n        this.element.oncontextmenu = this.oncontextmenu;\r\n        this.element.ondblclick = this.ondblclick;\r\n        this.element.onmousedown = this.onmousedown;\r\n        this.element.onmouseenter = this.onmouseenter;\r\n        this.element.onmouseleave = this.onmouseleave;\r\n        this.element.onmousemove = this.onmousemove;\r\n        this.element.onmouseout = this.onmouseout;\r\n        this.element.onmouseover = this.onmouseover;\r\n        this.element.onmouseup = this.onmouseup;\r\n        this.element.ontouchcancel = this.ontouchcancel;\r\n        this.element.ontouchend = this.ontouchend;\r\n        this.element.ontouchmove = this.ontouchmove;\r\n        this.element.ontouchstart = this.ontouchstart;\r\n        this.setVisibility(this.visible());\r\n        this.visible.subscribe(function (visible) {\r\n            _this.setVisibility(visible);\r\n        });\r\n        if (this.addControlToDataDictionary) {\r\n            if (!this.element.data) {\r\n                this.element.data = {};\r\n            }\r\n            this.element.data.frameworkElement = this;\r\n        }\r\n    };\r\n    FrameworkElement.prototype.render = function () {\r\n        if (this.element) {\r\n            throw \"This Framework element has already been rendered.\";\r\n        }\r\n        if (typeof this.build === \"function\") {\r\n            this.element = document.createElement(this.tagName);\r\n            this.build();\r\n            return this.element;\r\n        }\r\n        throw \"The build method of this FrameworkElement has not been defined\";\r\n    };\r\n    FrameworkElement.prototype.remove = function () {\r\n        if (this.element) {\r\n            if (this.element.remove) {\r\n                this.element.remove();\r\n            }\r\n            else {\r\n                this.element.parentElement.removeChild(this.element);\r\n            }\r\n            this.element = null;\r\n        }\r\n    };\r\n    FrameworkElement.prototype.getAttribute = function (attributeName) {\r\n        if (this.element) {\r\n            return this.element.getAttribute(attributeName);\r\n        }\r\n        else {\r\n            return ko.unwrap(this.attributes[attributeName]);\r\n        }\r\n    };\r\n    FrameworkElement.prototype.setAttribute = function (attribute) { throw new Error(\"Not implemented\"); };\r\n    FrameworkElement.prototype.deleteAttribute = function (attributeName) { throw new Error(\"Not implemented\"); };\r\n    FrameworkElement.prototype.getStyle = function (cssProperties) {\r\n        var style = {};\r\n        for (var _i = 0, cssProperties_1 = cssProperties; _i < cssProperties_1.length; _i++) {\r\n            var cssProperty = cssProperties_1[_i];\r\n            if (this.element) {\r\n                style[cssProperty] = this.element.style[cssProperty];\r\n            }\r\n            else {\r\n                style[cssProperty] = this.style[cssProperty];\r\n            }\r\n        }\r\n        return style;\r\n    };\r\n    FrameworkElement.prototype.setStyle = function (style, overwriteExisting) { throw new Error(\"Not implemented\"); };\r\n    FrameworkElement.prototype.deleteStyle = function (style) { throw new Error(\"Not implemented\"); };\r\n    return FrameworkElement;\r\n}());\r\nexports.FrameworkElement = FrameworkElement;\r\n\n\n//# sourceURL=webpack:///./src/framework/frameworkElement.ts?");

/***/ }),

/***/ "./src/framework/index.ts":
/*!********************************!*\
  !*** ./src/framework/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./frameworkElement */ \"./src/framework/frameworkElement.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/framework/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Framework = __webpack_require__(/*! ./framework/index */ \"./src/framework/index.ts\");\r\nexports.Framework = Framework;\r\nvar Controls = __webpack_require__(/*! ./controls/index */ \"./src/controls/index.ts\");\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });