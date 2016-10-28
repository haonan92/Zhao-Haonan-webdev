/**
 * Created by Haonan on 10/26/2016.
 */

module.exports = function (app) {
//    console.log("hello from web service server");

    var websites = [
        {_id: 1000, name: 'facebook.com', uid: 111},
        {_id: 2000, name: 'wikipedia.org', uid: 222},
        {_id: 3000, name: 'twitter.com', uid: 222}
    ];


    app.get('/api/webs/allwebs', allWebs);    //why I change it to api/user/alluser doesn;t work
    app.post('/api/user/:userId/website',createWebsite);
    app.get('/api/user/:userId/website', findWebsitesForUser);
    app.get('/api/website/:websiteId', findWebsiteById);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete('/api/website/:websiteId', removeWebsite);

    function removeWebsite(req, res) {
        console.log("hello from remove web");
        var wid = req.params.websiteId;
        for(var w in websites) {
            if(websites[w]._id == wid) {
                websites.splice(w,1);
            }
        }
        res.send(200);
    }



    function updateWebsite(req, res) {
        console.log("hello from updateWebsite");
        var web = req.body;
        console.log(web);
        var wid = parseInt(req.params.websiteId);
        for(var w in websites) {
            if(websites[w]._id == wid) {
                websites[w] = web;
            }
        }
        res.send(200); // ok successful
    }

    function findWebsiteById(req,res) {
        console.log("hello from find webby Id");
        var webid = req.params.websiteId;
        console.log(webid);                     //undefined
        for (var w in websites) {
            if (websites[w]._id === parseInt(webid)) {
                res.send(websites[w]);
                return;
            }
        }
        //if does not find
        res.send('0');
    }


    function findWebsitesForUser(req, res) {
        console.log("Hello from findallwebforuser");
        var uid = req.params.userId;
        var result = [];
        for(var w in websites) {
            if(websites[w].uid === parseInt(uid)) {
                result.push(websites[w]);
            }
        }
        res.send(result);
        return;
    }


    function createWebsite(req, res) {
        console.log("hello from createWeb");

        var website = req.body;
        website._id = (new Date()).getTime();
        console.log(website);
        websites.push(website);
        res.send(website);

    }

    //testing purpose
    function allWebs(req, res) {
        res.send(websites);

    }
}