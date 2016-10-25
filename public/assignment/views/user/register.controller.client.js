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




        function init() {
            vm.users = UserService.allUsers();

        }
        init();

        function createUser(user) {
            UserService
                .createUser(user)
                .success(function (user) {
                    if(user.password != user.password2 || !user.password || !user.password2) {
                        vm.error = "Your passwords don't match";
                        return;
                    }

                    if(UserService.findUserByUsername(user.username) != null) {
                        vm.error = "Username exits, please change another one";
                        return;
                    }
                })
                .error(function () {
                    
                })
            

        }
    }
})();