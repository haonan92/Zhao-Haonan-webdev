/**
 * Created by Haonan on 10/26/2016.
 */


module.exports = function (app) {
//    console.log("hello from web service server");


    var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: __dirname+'/../../public/assignment/uploads'});

    var widgets = [
        { "_id": 123, "widgetType": "HEADER", "pageId": 555, "size": 2, "text": "GIZMODO"},
        { "_id": 234, "widgetType": "HEADER", "pageId": 555, "size": 4, "text": "Lorem ipsum"},
        { "_id": 345, "widgetType": "IMAGE", "pageId": 555, "width": 100,
            "url": "http://lorempixel.com/400/200/"},
        { "_id": 456, "widgetType": "HTML", "pageId": 555, "text": '<p>Watchmaker <a href="http://gizmodo.com/tag/mbf" rel="nofollow">MB&amp;F</a> isn’t as well-known as  Rolex or Timex, but that’s because the company’s unique creations—like a <a href="http://gizmodo.com/listen-to-an-18-000-tie-fighter-music-box-play-the-sta-1717444112" rel="nofollow">TIE Fighter-shaped music box</a> that plays the <em>Star Wars</em> theme—are made for die-hard collectors. Its latest creation is a <a href="https://www.mbandf.com/en/machines/co-creations/astrograph" target="_blank" rel="noopener">rocket-shaped pen inspired by the moon landing</a>, and I’m desperately trying to justify…<span class="read-more-placeholder"></span><span class="readmore-core-decorated"></span></p>'},
        { "_id": 567, "widgetType": "HEADER", "pageId": 555, "size": 4, "text": "Lorem ipsum"},
        { "_id": 678, "widgetType": "YOUTUBE", "pageId": 555, "width": 100,
            "url": "https://youtu.be/AM2Ivdi9c4E" },
        { "_id": 789, "widgetType": "HTML", "pageId": 555, "text": "<p>Lorem ipsum</p>"},


        { "_id": 111, "widgetType": "HEADER", "pageId": 666, "size": 2, "text": "Supreme"},
        { "_id": 222, "widgetType": "HEADER", "pageId": 666, "size": 4, "text": "Supreme Sold Out"},
        { "_id": 333, "widgetType": "IMAGE", "pageId": 666, "width": 100,
            "url": "http://lorempixel.com/400/200/"},
        { "_id": 444, "widgetType": "HTML", "pageId": 666, "text": "<p>Supreme</p>"},
        { "_id": 555, "widgetType": "HEADER", "pageId": 666, "size": 4, "text": "Lorem ipsum"},
        { "_id": 666, "widgetType": "YOUTUBE", "pageId": 666, "width": 100,
            "url": "https://youtu.be/PbsTo_JsoD0" },
        { "_id": 777, "widgetType": "HTML", "pageId": 666, "text": "<p>Supreme</p>"}

    ];


    app.get('/api/wigis/allwigis', allWigis);    //why I change it to api/user/alluser doesn;t work
    app.get('/api/page/:pageId/widget',findAllWidgetsForPage);
    app.get('/api/widget/:widgetId',findWidgetById);
    app.get('/api/wigitype/:widgetId',findWidgetTypeById);
    app.post('/api/page/:pageId/widget',createWidget)
    app.put('/api/widget/:widgetId', updateWidget);
    app.delete('/api/widget/:widgetId', deleteWidget);
    app.post ("/api/upload", upload.single('myFile'), uploadImage);
    app.put("/api/page/:pageId/widget", reorderWidget);

    function reorderWidget(req, res) {
        var pageId = req.params.pageId;
        var start = req.query["start"];
        var end = req.query["end"];
        if (start && end) {
            console.log(start + "    " + end);
            widgetModel
                .reorderWidget(start, end, pageId)
                .then(function (widgets) {
                    res.json(widgets);
                }, function (error) {
                    res.status(404).send(error);
                });
        }
        else {
            console.log("can't get start and end");
        }


    }



    function uploadImage(req, res) {
        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;
        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;
        //console.log(req.file);

            var originalname = myFile.originalname; // file name on user's computer
            var filename = myFile.filename;     // new file name in upload folder
            var path = myFile.path;         // full path of uploaded file
            var destination = myFile.destination;  // folder where file is saved to
            var size = myFile.size;
            var mimetype = myFile.mimetype;

            for (var w in widgets) {
                if (widgets[w]._id === parseInt(widgetId)) {
                    console.log("found!");
                    widgets[w].url = "/assignment/uploads/" + filename;
                }
            }
            //console.log(myFile);
            //res.send(200);
            res.redirect("/assignment/#/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
        }




    function deleteWidget(req, res) {
        var wigid = parseInt(req.params.widgetId);
        for(var w in widgets) {
            if(widgets[w]._id == wigid) {
                widgets.splice(w,1);
            }
        }
        res.send(200);

    }

    function updateWidget(req, res) {
        var updatedwidget = req.body;
        //console.log(updatedwidget);
        var wigid = parseInt(req.params.widgetId);
        //console.log(wigid);
        for(var w in widgets) {
            if(widgets[w]._id == wigid) {
                widgets[w] = updatedwidget;
            }
        }
        res.send(200); // ok successful
    }



    //function createWidget
    function createWidget(req, res) {
        var widget = req.body;
        //console.log(widget);
        widgets.push(widget);
        res.send(widget);

    }

    //function find wigi type for a widgit
    function findWidgetTypeById(req, res) {
        var wigid = parseInt(req.params.widgetId);
        //console.log(wigid);                     //undefined
        for (var w in widgets) {
            if (widgets[w]._id === wigid) {
                res.send(widgets[w].widgetType);
                return;
            }
        }
        //if does not find
        res.send('0');
    }


    //function find widget by id
    function findWidgetById(req, res) {
        var wigid = parseInt(req.params.widgetId);
        //console.log(wigid);                     //undefined
        for (var w in widgets) {
            if (widgets[w]._id === wigid) {
                res.send(widgets[w]);
                return;
            }
        }
        //if does not find
        res.send('0');
    }

    //function find all widgetse for page
    function findAllWidgetsForPage(req, res) {
        var pid = req.params.pageId;
        //console.log(pid);
        var result = [];
        for(var w in widgets) {
            if(widgets[w].pageId=== parseInt(pid)) {
                result.push(widgets[w]);
            }
        }
        res.send(result);
        return;
    }

    //testing purpose
    function allWigis(req, res) {
        res.send(widgets);

    }
}