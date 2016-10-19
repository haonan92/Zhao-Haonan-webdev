(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService) {
        var vm = this;
        var websiteId = parseInt($routeParams.wid);
        vm.userId = parseInt($routeParams['uid']);


        function init() {
            vm.website = WebsiteService.findWebsiteById(websiteId);
            vm.websites = WebsiteService.findWebsitesForUser(vm.userId);

        }
        init();
    }
})();