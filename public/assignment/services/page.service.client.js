(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService($http) {

        var api = {
            findAllPagesForWebsite:findAllPagesForWebsite,
            createPage:createPage,
            findPageById:findPageById,
            updatePage:updatePage,
            deletePage:deletePage
        };

        return api;


        
        function findPageById(pid) {
            var url = '/api/page/'+parseInt(pid);
            return $http.get(url);
        }


        //function find pages by website Id
        function findAllPagesForWebsite(wid) {
            var url = '/api/website/'+parseInt(wid)+'/page';
            return $http.get(url);
        }


        //fuction create new page
        function createPage(page) {
            var pg = {
                name:page.name,
                websiteId:page.websiteId
            }
            return $http.post('/api/website/'+page.websiteId+'/page', pg);
        }



        function deletePage(pid) {
            var url ="/api/page/" + pid;
            $http.delete(url);
        }


        function updatePage(page) {
            var url ="/api/page/"+ page._id;
            $http.put(url, page);
        }


    }
})();