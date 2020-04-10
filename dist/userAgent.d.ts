export declare const userAgent: {
    browser: {
        isEdge: boolean;
        isInternetExplorer: boolean;
        isChrome: boolean;
        isFirefox: boolean;
        isAndroid: boolean;
    };
    os: {
        isIos: boolean;
        isAndroid: boolean;
        isWindows: boolean;
        version: string;
        majorVersion: number;
    };
    device: {
        type: string;
        isMobile: boolean;
        isTablet: boolean;
        isSmartTv: boolean;
        supportsMouseEvents: boolean;
        supportsTouchEvents: boolean;
    };
    engine: {
        isWebkit: boolean;
        isBlink: boolean;
        isGecko: boolean;
        isTrident: boolean;
    };
};
