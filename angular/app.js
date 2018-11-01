let app = angular.module("app", ['ngRoute','angularCSS']);


app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/forms.html",

        })
        .when("/buttons", {
            templateUrl : "views/buttons.html"
        })
        .when("/inputs", {
            templateUrl : "views/inputs.html"
        })
        .when("/forms", {
            templateUrl : "views/forms.html"
        });
});