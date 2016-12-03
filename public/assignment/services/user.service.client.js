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
            allUsers:allUsers,
            updateUser:updateUser,
            deleteUser:deleteUser,
            login:login,
            checkLogin:checkLogin,
            logout:logout,
            register:register

        };
        return api;



        function register(username, password) {
            var newuser = {
                username:username,
                password:password,
            }
            return $http.post('/api/register', newuser);
        }


        function logout() {
            return $http.post("/api/logout");
        }


        function checkLogin() {
            return $http.post("/api/checkLogin");
        }
        
        
        function login(username, password) {
            console.log("------from client login-----");
            var user = {
                username: username,
                password: password
            };
           return $http.post("/api/login", user);
        }


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


        function deleteUser(uid) {
            var url ="/api/user/" + uid;
            $http.delete(url);
        }

        function updateUser(user) {
            var url ="/api/user/" + user._id;
            $http.put(url, user);
        }

    }
})();