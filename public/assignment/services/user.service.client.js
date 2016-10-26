/**
 * Created by Haonan on 10/17/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);
    
    function UserService($http) {

        var api = {
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById,
            createUser:createUser,
            findUserByUsername:findUserByUsername,
            allUsers:allUsers
            //updateUser:updateUser,
            //deleteUser:deleteUser

        };
        return api;


        function allUsers() {
            var url = '/api/users/alluser';
            return $http.get(url);
        }

        function findUserByUsername(username) {
            var url = '/api/user?username='+username;
            return $http.get(url);
        }

        function createUser(user) {
            var newuser = {
                username:user.username,
                password:user.password,
                password2:user.password2
            }
            return $http.post('/api/user', newuser);
            //users.push(user);
        }


        function findUserById(userId) {
            var url = '/api/user/'+userId;
            return $http.get(url);
        }


        function findUserByCredentials(username, password) {
            var url = '/api/user?username='+username+'&password='+password;
            return $http.get(url);
        }




        /////////////////////////////////////////////////////////////////

        /*
         function deleteUser(uid) {
         for (var u in users) {
         if(users[u]._id === uid) {
         users.splice(u, 1);
         }
         }
         }


         function updateUser(user) {
         for (var u in users) {
         if(users[u]._id === user._id) {
         users[u] = user;
         }
         }
         }
         */
    }
})();