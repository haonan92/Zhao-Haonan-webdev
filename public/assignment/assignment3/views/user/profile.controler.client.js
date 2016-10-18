/**
 * Created by Haonan on 10/17/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);
    function ProfileController($routeParams, UserService) {
        var vm = this;

        //triple = does not work on my pc
        //var userId = parseInt($routeParams.uid);
        var userId = $routeParams.uid;
        var user = UserService.findUserById(userId);

        if(user != null) {
            console.log("found user");
            console.log(user);
        }
    }
})();