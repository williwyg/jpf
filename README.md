# JPF   (Javascript Presentation Foundation)
Library for building Graphical User Interfaces for the web following the MVVM pattern similar to WPF for Windows. 
The base class "FrameworkElement" implements the fundamental binding mechanism that is needed to support the MVVM pattern.

# Goals of this library
When moving away from server-side rendering to client-side rendering I found myself going back in time if it comes to RAD support in tooling. 
If we compare this to rich-client development with for example WPF or server side rendering like old fashioned ASP.Net forms we have lost a lot of support in our tooling on the way. 
When working with the client-side rendering frameworks that are popular today I have learned that preventing me from making mistakes while writing my code is limited. 
I feel that defining a view in some sort of html text template enhanced with binding expressions is cumberome. 
The tooling support to make sure that the View with its binding expressions is in sink with its ViewModel is very limited. So the main goals for this library are:

1. **Support the MVVM design pattern**
1. **Eliminate the use of text based templating**
1. **Support binding expression checking at compile time** 
1. **Discover programming errors at compile time instead of runtime**
1. **Hide HTML complexity from the developer by providing a rich control set**