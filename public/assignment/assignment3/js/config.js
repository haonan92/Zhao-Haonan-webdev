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
                templateUrl: "user/login.view.client.html"
            })
            .when("/register", {
                templateUrl: "user/register.view.client.html"
            })
            .when("/profile", {
                templateUrl: "user/profile.view.client.html"
            })
            .when("/website", {
                templateUrl: "website/website-list.view.client.html"
            })
            .otherwise({
                redirectTo:"/login"
            }
            );
    }
})();