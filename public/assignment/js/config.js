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
                templateUrl: "views/user/register.view.client.html",
                controller:"RegisterController",
                controllerAs: "model",
            })

            .when('/facebook', {
                templateUrl: 'views/user/facebook.view.client.html',
                controller: 'ProfileController',
                controllerAs: 'profile',
                resolve: {
                    checkLogin: checkLogin
                }
            })

            .when("/user/:uid", {
                templateUrl: "views/user/profile.view.client.html",
                controller:"ProfileController",
                controllerAs:"model",
                resolve: {
                    checkLogin: checkLogin
                }
            })

            .when("/user/:uid/database", {
                templateUrl: "views/user/database.html",
                controller:"ProfileController",
                controllerAs:"model",
                resolve: {
                    checkLogin: checkLogin
                }
            })


            .when("/user/:uid/website", {
                templateUrl: "views/website/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })
            .when("/user/:uid/website/new", {
                templateUrl: "views/website/website-new.view.client.html",
                controller: "WebsiteNewController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })

            .when("/user/:uid/website/:wid", {
                templateUrl: "views/website/website-edit.view.client.html",
                controller: "WebsiteEditController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })


            .when("/user/:uid/website/:wid/page", {
                templateUrl: "views/page/page-list.view.client.html",
                controller: "PageListController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })



            .when("/user/:uid/website/:wid/page/new", {
                templateUrl: "views/page/page-new.view.client.html",
                controller: "PageNewController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })


            .when("/user/:uid/website/:wid/page/:pid", {
                templateUrl: "views/page/page-edit.view.client.html",
                controller: "PageEditController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })


            .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "views/widget/widget-list.view.client.html",
                controller: "WidgeListController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })

            .when("/user/:uid/website/:wid/page/:pid/widget/new", {
                templateUrl: "views/widget/widget-chooser.view.client.html",
                controller: "WidgeChooserController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })

            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid", {
                templateUrl: "views/widget/widget-edit.view.client.html",
                controller: "WidgeEditController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })

            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid/flicker", {
                templateUrl: 'views/widget/widget-flickr-search.view.client.html',
                controller:'FlickrController',
                controllerAs:"model"
            })
            .otherwise({
                redirectTo:"/login"
            });
        
        function checkLogin($q, UserService, $location, $rootScope) {
            var deferred = $q.defer();
            UserService
                .checkLogin()
                .success(
                    function (user) {
                        if(user != '0') {
                            $rootScope.currentUser = user;
                            deferred.resolve();
                        }
                        else {
                            $rootScope.currentUser = null;
                            deferred.reject();
                            $location.url("/login")
                        }
                    }
                );
            return deferred.promise;
        }
    }
})();