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
            if(user.password != user.password2 || !user.password || !user.password2) {
                vm.error = "Your passwords don't match";
                return;
            }

            var promise = UserService.findUserByUsername(user.username);
            promise
                .success(function(newuser){
                    if(newuser != '0') {
                        vm.error = "Username exits, please change another one";
                    }
                    else {
                    UserService
                        .createUser(user)
                        .success(function (user) {
                            $location.url("/user/" + user._id);

                        })
                        .error(function () {

                        })
                    }
                });


        }
    }
})();