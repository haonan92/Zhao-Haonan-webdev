/**
 * Created by Haonan on 10/25/2016.
 */

// create a node js module
module.exports = function (app) {
    require("./services/user.service.server.js")(app);
    require("./services/website.service.server.js")(app);
    require("./services/page.service.server.js")(app);
    require("./services/widget.service.server")(app);


    //testing purpose
    //console.log("hello from app js");
};