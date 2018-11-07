let app = angular.module("app", ['ngRoute', 'angularCSS']);


app.config(function ($routeProvider) {
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
        .when("/checkboxradio", {
            templateUrl: "views/checkbox-and-radio.html"
        })
        .when("/forms", {
            templateUrl: "views/forms.html"
        });




});
