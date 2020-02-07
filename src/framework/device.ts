
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


export var device =
{
    supportsMouseEvents: supportsMouseEvents(),
    supportsTouchEvents: supportsTouchEvents()
}