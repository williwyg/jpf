import {UAParser} from "ua-parser-js";

const parser = new UAParser();
const result = parser.getResult();

function supportsTouchEvents(): boolean {
    if (("ontouchstart" in window)) {
        return true;
    }

    const prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
    const mq = (query) => window.matchMedia(query).matches;
    const queryString = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("");
    return mq(queryString);
}

function supportsMouseEvents(): boolean {
    return matchMedia('(pointer:fine)').matches;
}

export const userAgent = {
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
        isWebkit: result.engine.name === "WebKit", //Apple Safari
        isBlink: result.engine.name === "Blink", //Google Chrome, Microsoft Edge and Opera
        isGecko: result.engine.name === "Gecko", //Firefox
        isTrident: result.engine.name === "Trident" //Internet Explorer
    }
}