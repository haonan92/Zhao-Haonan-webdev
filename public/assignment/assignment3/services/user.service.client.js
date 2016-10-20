/**
 * Created by Haonan on 10/17/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);
    
    function UserService() {
        var users = [
            {username:"alice", password:"qqqqq", _id:"111", first:"Alice", last:"wonderland"},
            {username:"bob", password:"st" ,_id:"222", first:"bob", last:"delen"},
            {username:"char", password:"123", _id :"333", first:"char", last:"wod"},
            {username:"dan", password:"3435", _id:"444", first:"dan", last:"and"}
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