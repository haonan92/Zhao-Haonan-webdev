(function(){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService($http) {


        var api = {
            findWebsitesForUser: findWebsitesForUser,
            findWebsiteById: findWebsiteById,
            createWebsite: createWebsite,
            updateWebsite:updateWebsite,
            removeWebsite:removeWebsite
        };
        return api;


        function createWebsite(website) {
            var newWeb = {
                name:website.name,
                uid:website.uid
            }
            return $http.post('/api/user/'+ newWeb.uid + '/website', newWeb);
        }

        function findWebsiteById(wid) {
            var url = '/api/website/'+wid;
            return $http.get(url);
        }

        function findWebsitesForUser(uid) {
            console.log("----------------FindWebsiteForUser----------------------")
            var url = '/api/user/'+uid+'/website';
            return $http.get(url);
        }



        function removeWebsite(wid) {
            var url ="/api/website/" + wid;
            $http.delete(url);
        }
        
        function updateWebsite(website) {
            var url ="/api/website/"+ website._id;
            $http.put(url, website);
        }

    }
})();