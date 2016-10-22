/**
 * Created by Haonan on 10/22/2016.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;
        vm.createUser = createUser;

        function createUser(user) {
            console.log("hello");
        }
    }
})();