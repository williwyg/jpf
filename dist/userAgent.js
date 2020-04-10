"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ua_parser_js_1 = require("ua-parser-js");
const parser = new ua_parser_js_1.UAParser();
const result = parser.getResult();
function supportsTouchEvents() {
    if (("ontouchstart" in window)) {
        return true;
    }
    if (navigator.msMaxTouchPoints > 0) {
        return true;
    }
    const prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
    const mq = (query) => window.matchMedia(query).matches;
    const queryString = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("");
    return mq(queryString);
}
function supportsMouseEvents() {
    return matchMedia('(pointer:fine)').matches || !!window.MouseEvent;
}
exports.userAgent = {
    browser: {
        isEdge: result.browser.name === "Edge",
        isInternetExplorer: result.browser.name === "IE",
        isChrome: result.browser.name === "Chrome",
        isFirefox: result.browser.name === "Firefox",
        isAndroid: result.browser.name === "Android Browser"
    },
    os: {
        isIos: result.os.name === "iOS",
        isAndroid: result.os.name === "Android",
        isWindows: result.os.name === "Windows",
        version: result.os.version,
        majorVersion: Number(result.os.version.substring(0, 2))
    },
    device: {
        type: result.device.type,
        isMobile: result.device.type === "mobile",
        isTablet: result.device.type === "tablet",
        isSmartTv: result.device.type === "smarttv",
        supportsMouseEvents: supportsMouseEvents(),
        supportsTouchEvents: supportsTouchEvents()
    },
    engine: {
        isWebkit: result.engine.name === "WebKit",
        isBlink: result.engine.name === "Blink",
        isGecko: result.engine.name === "Gecko",
        isTrident: result.engine.name === "Trident"
    }
};
//# sourceMappingURL=userAgent.js.map