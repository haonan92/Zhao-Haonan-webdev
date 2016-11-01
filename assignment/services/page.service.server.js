/**
 * Created by Haonan on 10/26/2016.
 */


module.exports = function (app) {

    var pages = [
        { "_id": 111, "name": "Post 1", "websiteId": 1000, "description": "Lorem1" },
        { "_id": 222, "name": "Post 2", "websiteId": 1000, "description": "Lorem2" },
        { "_id": 333, "name": "Post 3", "websiteId": 1000, "description": "Lorem3" },
        { "_id": 444, "name": "Post 4", "websiteId": 1000, "description": "Lorem4" },
        { "_id": 555, "name": "Post 5", "websiteId": 2000, "description": "Lorem5" },
        { "_id": 666, "name": "Post 6", "websiteId": 2000, "description": "Lorem6" },
        { "_id": 777, "name": "Post 7", "websiteId": 2000, "description": "Lorem7" },
        { "_id": 888, "name": "Post 8", "websiteId": 2000, "description": "Lorem8" },
        { "_id": 999, "name": "Post 9", "websiteId": 3000, "description": "Lorem9" },
        { "_id": 121, "name": "Post 10", "websiteId": 3000, "description": "Lorem10" },
        { "_id": 122, "name": "Post 11", "websiteId": 3000, "description": "Lorem11" },
        { "_id": 113, "name": "Post 12", "websiteId": 3000, "description": "Lorem12" }

    ];


    app.post('/api/website/:websiteId/page', createPage);
    app.get('/api/pages/allpages', allPages);    //why I change it to api/user/alluser doesn;t work
    app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
    app.get('/api/page/:pageId', findPageById);
    app.put('/api/page/:pageId', updatePage);
    app.delete('/api/page/:pageId', deletePage);


    function deletePage(req, res) {
        console.log("hello from delete page");
        var pid = parseInt(req.params.pageId);
        for(var p in pages) {
            if(pages[p]._id == pid) {
                pages.splice(p,1);
            }
        }
        res.send(200);
    }



    function updatePage(req, res) {
        console.log("hello from updatePage");
        var updatedpage = req.body;
        console.log(updatedpage);
        var pid = parseInt(req.params.pageId);
        for(var p in pages) {
            if(pages[p]._id == pid) {
                pages[p] = updatedpage;
            }
        }
        res.send(200); // ok successful
    }


    function createPage(req, res) {
        console.log("hello from createpageqqqqqqqqqqqqqqq");
        var page = req.body;
        page._id = (new Date()).getTime();
        pages.push(page);
        res.send(page);
    }

    //finid page by id
    function findPageById(req,res) {
        console.log("hello from find page Id");
        var pid = parseInt(req.params.pageId);
        console.log(pid);                     //undefined
        for (var p in pages) {
            if (pages[p]._id === pid) {
                res.send(pages[p]);
                return;
            }
        }
        //if does not find
        res.send('0');
    }


    //findallPagesforwebsite
    function findAllPagesForWebsite(req, res) {
        console.log("Hello from find all page for website");
        var wid = req.params.websiteId;
        console.log(wid);
        var result = [];
        for(var p in pages) {
            if(pages[p].websiteId === parseInt(wid)) {
                result.push(pages[p]);
            }
        }
        res.send(result);
        return;
    }

    //testing purpose
    function allPages(req, res) {
        res.send(pages);


    }
}