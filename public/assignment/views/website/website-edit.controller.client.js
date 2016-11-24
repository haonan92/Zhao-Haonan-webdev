(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService,$location) {
        var vm = this;
        var websiteId = $routeParams.wid;
        vm.userId = $routeParams.uid;
        vm.updateWebsite = updateWebsite;
        vm.removeWebsite = removeWebsite;
        function init() {

            var promise = WebsiteService.findWebsiteById(websiteId);
            promise
                .success(function (newwebsite) {
                    if(newwebsite != '0') {
                        vm.website = newwebsite;
                    }
                })
                .error(function () {

                });

            WebsiteService.findWebsitesForUser(vm.userId)
                .success(function (webs) {
                    if(webs != '[]') {
                        vm.websites = webs;
                    }
                })
                .error(function () {
                });
        }
        init();





        function updateWebsite() {
            WebsiteService.updateWebsite(vm.website);
            $location.url("/user/"+ vm.userId +"/website");

        }


        function removeWebsite(currentWebId) {
            WebsiteService.removeWebsite(currentWebId);
            $location.url("/user/"+ vm.userId +"/website");
        }

        
    }
})();