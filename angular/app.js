let app = angular.module("app", ['ngRoute', 'angularCSS']);


app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/forms.html",

        })
        .when("/buttons", {
            templateUrl: "views/buttons.html"
        })
        .when("/inputs", {
            templateUrl: "views/inputs.html"
        })
        .when("/feedback", {
            templateUrl: "views/feedback.html"
        })
        .when("/forms", {
            templateUrl: "views/forms.html"
        });


// configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);

});
