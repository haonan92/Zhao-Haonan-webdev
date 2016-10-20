(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService() {
        var pages = [
            { "_id": "001", "name": "Post 1", "websiteId": 1000, "description": "Lorem1" },
            { "_id": "002", "name": "Post 2", "websiteId": 1000, "description": "Lorem2" },
            { "_id": "003", "name": "Post 3", "websiteId": 1000, "description": "Lorem3" },
            { "_id": "004", "name": "Post 4", "websiteId": 1000, "description": "Lorem4" },
            { "_id": "005", "name": "Post 5", "websiteId": 2000, "description": "Lorem5" },
            { "_id": "006", "name": "Post 6", "websiteId": 2000, "description": "Lorem6" },
            { "_id": "007", "name": "Post 7", "websiteId": 2000, "description": "Lorem7" },
            { "_id": "008", "name": "Post 8", "websiteId": 2000, "description": "Lorem8" },
            { "_id": "009", "name": "Post 9", "websiteId": 3000, "description": "Lorem9" },
            { "_id": "010", "name": "Post 10", "websiteId": 3000, "description": "Lorem10" },
            { "_id": "011", "name": "Post 11", "websiteId": 3000, "description": "Lorem11" },
            { "_id": "012", "name": "Post 12", "websiteId": 3000, "description": "Lorem12" }

        ];

        var api = {
            findPageByWebsiteId:findPageByWebsiteId
        };

        return api;
        function findPageByWebsiteId(wid) {
            var result = [];
            for(var p in pages) {
                if(pages[p].websiteId === wid) {
                    result.push(pages[p]);
                }
            }
            return result;
        }
    }
})();