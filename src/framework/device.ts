import * as bla from "useragent";

var x = new bla();
x.

let platform = navigator.platform;
let userAgent = navigator.userAgent;

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
    return matchMedia('(pointer:fine)').matches || !!window.MouseEvent;
}

let platformsIos = {
    iPhone: true,
    iPad: true,
    iPod: true
};
let platformsWebOs = {
    webOs: true
}

let platformsAndroid = {
    Android: true
};
let platfomsWindows = {
    Win32: true
};

export var device =
{
    platform: platform,
    isIos: platformsIos[platform]||false,
    isAndroid: platformsAndroid[platform]||false,
    isWindows: platfomsWindows[platform]||false,
    isWebOs: platformsWebOs[platform]||false,
    supportsMouseEvents: supportsMouseEvents(),
    supportsTouchEvents: supportsTouchEvents(),
    isMobile : userAgent.indexOf("Mobi")>-1
}