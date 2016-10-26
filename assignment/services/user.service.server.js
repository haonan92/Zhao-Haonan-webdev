/**
 * Created by Haonan on 10/25/2016.
 */
module.exports = function (app) {
        //   console.log("hello from user service server");

        //user list
        var users = [
            {username: "alice", password: "qqqqq", _id: 111, first: "Alice", last: "wonderland", emailaddress: "aaa@gmail.com"},
            {username: "bob", password: "st", _id: 222, first: "bob", last: "delen", emailaddress: "bbb@gmail.com"},
            {username: "char", password: "123", _id: 333, first: "char", last: "wod", emailaddress: "bdb@gmail.com"},
            {username: "dan", password: "3435", _id: 444, first: "dan", last: "and", emailaddress: "ddd@gmail.com"}
        ];

        app.get('/api/user', findUser);
        app.get('/api/user/:uid', findUserbyId);
        app.post('/api/user',createUser);
        app.get('/api/users/alluser', allUsers);    //why I change it to api/user/alluser doesn;t work

    function allUsers(req, res) {
        console.log("dddd");
    }


    function createUser(req, res) {
            var user = req.body;
            user._id = (new Date()).getTime();
            users.push(user);
            res.send(user);
        }



        function findUser(req, res) {
            var params = req.params;
            var query = req.query;
            if (query.password && query.username) {
                findUserByCredentials(req, res);
            }
            else if (query.username) {
                findUserByUsername(req, res);
            }
        }

        function findUserByUsername(req, res) {
            var username = req.query.username;
            for (var u in users) {
                if (users[u].username === username) {
                    res.send(users[u]);
                    return;
                }
            }
            //if does not find
            res.send('0');
        }


        function findUserByCredentials(req, res) {
            var username = req.query.username;
            var password = req.query.password;
            for (var u in users) {
                if (users[u].username === username &&
                    users[u].password === password) {
                    res.send(users[u]);
                    return;
                }
            }
            //if does not find
            res.send('0');
        }


        function findUserbyId(req, res) {
            var userId = req.params.uid;
            for (var u in users) {
                if (users[u]._id === parseInt(userId)) {
                    res.send(users[u]);
                    return;
                }
            }
            //if does not find
            res.send('0');
        }


}