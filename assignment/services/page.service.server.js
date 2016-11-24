/**
 * Created by Haonan on 10/26/2016.
 */


module.exports = function (app,model) {

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
        var pageId = req.params.pageId;
        model
            .pageModel
            .deletePage(pageId)
            .then(
                function(status){
                    res.sendStatus(200);
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }



    function updatePage(req, res) {
        var page = req.body;
        var pageId = req.params.pageId;
        model
            .pageModel
            .updatePage(pageId, page)
            .then(
                function(status){
                    res.sendStatus(200);
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }


    function createPage(req, res) {
        var page = req.body;
        var wid = req.params.websiteId;
        model
            .pageModel
            .createPage(wid, page)
            .then(
                function(newPage){
                    res.send(newPage);

                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    //finid page by id
    function findPageById(req,res) {
        var pageId = req.params.pageId;
        model
            .pageModel
            .findPageById(pageId)
            .then(
                function(page){
                    if(page){
                        res.send(page);
                    }
                    else{
                        res.send('0');
                    }
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }


    //findallPagesforwebsite
    function findAllPagesForWebsite(req, res) {
        var wid = req.params.websiteId;
        model
            .pageModel
            .findAllPagesForWebsite(wid)
            .then(
                function(pages){
                    if(pages){
                        res.json(pages);
                    }
                    else{
                        res.send('0');
                    }
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    //testing purpose
    function allPages(req, res) {
        res.send(pages);


    }
}