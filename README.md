# JPF   (Javascript Presentation Foundation)
Library for building Graphical User Interfaces for the web following the MVVM pattern similar to WPF for Windows. 
The base class "FrameworkElement" implements the fundamental binding mechanism that is needed to support the MVVM pattern.

# Including in the browser
If you intend to use this library directly in a browser and are not using UMD/AMD then there is a compiled version in the ~/dist folder. It is already bundled/minified and contains the necessary dependencies and polyfills (mainly for ES6 features such as Promises).

If you are using UMD/AMD and/or you already have included an ES6 polyfill (such as babel-polyfill.js) then you can include the UMD packaged version of the file from the ~/lib folder.