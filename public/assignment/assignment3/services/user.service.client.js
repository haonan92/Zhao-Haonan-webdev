/**
 * Created by Haonan on 10/17/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);
    
    function UserService() {
        var users = [
            {username:"alice", password:"shit", _id:"123"},
            {username:"bob", password:"st" ,_id:"345"},
            {username:"char", password:"hd33t", _id :"443"},
            {username:"dan", password:"shg42", _id:"333"}
        ];

        var api = {
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById
        };
        return api;

        function findUserById(userId) {
            for(var u in users) {
                var user = users[u];
                if(user._id === userId) {
                    return user;
                }
            }
            return null;
        }


        function findUserByCredentials(username, password) {
            for(var u in users) {
                var user = users[u];
                if(user.username === username
                    && user.password === password) {
                    return user;
                }
            }
            return null;
        }
    }
})();