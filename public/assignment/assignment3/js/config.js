/**
 * Created by Haonan on 10/12/2016.
 */
(function() {
    angular
        .module("WebAppMaker")
        .config(Config);        //configure the module
    function Config($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs:"model"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html"
            })
            .when("/user/:uid", {
                templateUrl: "views/user/profile.view.client.html",
                controller:"ProfileController",
                controllerAs:"model"
            })
            .when("/user/:uid/website", {
                templateUrl: "views/website/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid", {
                templateUrl: "views/website/website-edit.view.client.html",
                controller: "WebsiteEditController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/new", {
                templateUrl: "views/website/website-new.view.client.html"
            })
            .otherwise({
                redirectTo:"/login"
            }
            );
    }
})();