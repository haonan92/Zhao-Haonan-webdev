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
            UserService.findUserById(userId)
                .then(function (response) {
                    console.log(response);
                    console.log(response.data);
                    vm.user=response.data;
                })

            //return all users for the database page
            UserService.allUsers()
                .success(function (newusers) {
                    if(newusers != '[]') {
                        vm.users = newusers;
                    }
                })
                .error(function () {

                });


        }
        init();




        function deleteUser(currentUserId) {
            console.log(currentUserId);
            UserService.deleteUser(currentUserId);
            init();
        }


        function updateUser() {
            UserService.updateUser(vm.user);

        }


    }
})();