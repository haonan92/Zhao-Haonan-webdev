/**
 * Created by Haonan on 10/17/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);
    
    function UserService($http) {
        var users = [
            {username:"alice", password:"qqqqq", _id:"111", first:"Alice", last:"wonderland", emailaddress:"aaa@gmail.com"},
            {username:"bob", password:"st" ,_id:"222", first:"bob", last:"delen", emailaddress:"bbb@gmail.com"},
            {username:"char", password:"123", _id :"333", first:"char", last:"wod", emailaddress:"bdb@gmail.com"},
            {username:"dan", password:"3435", _id:"444", first:"dan", last:"and", emailaddress:"ddd@gmail.com"}
        ];

        var api = {
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById,
            createUser:createUser,
            allUsers:allUsers,
            findUserByUsername:findUserByUsername,
            updateUser:updateUser,
            deleteUser:deleteUser

        };
        return api;

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

        function findUserByUsername(username) {
            for(var u in users) {
                var user = users[u];
                if(user.username === username) {
                    return user;
                }
            }
            return null;
        }

        /*
        function allUsers() {
            ;
        }
        */


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
    }
})();