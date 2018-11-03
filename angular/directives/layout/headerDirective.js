app.directive("ngHeader", function(){

    //Directive Definition Object
    return {
        templateUrl:"views/base/header.html",
        // replace: true //it replaces the directive to only html code
        restrict:  'AE',//restricts the directive use to: A = attribute, E = element, C = class, M = coMment
        scope: {
            //message: "=", //this matches a VARIABLE on message attribute
            // message: "@", //this matches an EXPRESSION on message attribute (you should use {{variable}} to match a variable)
        }
    };


});