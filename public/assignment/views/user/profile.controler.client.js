/**
 * Created by Haonan on 10/17/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);
    function ProfileController($routeParams, UserService) {
        var vm = this;
        var userId = $routeParams.uid;
        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;


        function init() {
            var promise = UserService.findUserById(userId);
            promise
                .success(function (user) {
                    if(user != '0') {
                        vm.user = user;
                    }
                })
                .error(function () {

                });

        }
        init();


        function deleteUser(uid) {
            UserService.deleteUser(uid);
        }

        function updateUser(currentuser) {
            currentuser = vm.user;
            UserService.updateUser(user);
            console.log(currentuser);
            vm.success = "You have updated user!! Email:"+currentuser.emailaddress + "     Firstname: "+currentuser.first +"     Lastame:"+currentuser.last;
        }

    }
})();