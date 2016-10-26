(function(){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService($http) {
        var websites = [
            {_id: 1000, name: 'facebook.com', uid: 111},
            {_id: 2000, name: 'wikipedia.org', uid: 222},
            {_id: 3000, name: 'twitter.com', uid: 222}
        ];

        var api = {
            findWebsitesForUser: findWebsitesForUser,
            findWebsiteById: findWebsiteById,
            createWebsite: createWebsite,
            updateWebsite:updateWebsite,
            removeWebsite:removeWebsite
        };
        return api;


        function createWebsite(website) {
            var newweb = {
                name:website.name,
                uid:website.uid
            }
            return $http.post('/api/user/newweb.uid/website', newweb);
        }

        function findWebsiteById(wid) {
            var url = '/api/website/:wid';
            return $http.get(url);
        }

        function findWebsitesForUser(uid) {
            var url = '/api/user/'+uid+'/website';
            return $http.get(url);
        }



        function removeWebsite(wid) {
            for (var w in websites) {
                if(websites[w]._id === wid) {
                    websites.splice(w, 1);
                }
            }
        }
        
        function updateWebsite(website) {
            for (var w in websites) {
                if(websites[w]._id === website._id) {
                    websites[w] = website;
                }
            }
        }

    }
})();