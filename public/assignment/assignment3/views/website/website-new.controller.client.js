/**
 * Created by Haonan on 10/19/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService) {
        var vm = this;
        //why wid
        var websiteId = parseInt($routeParams.wid);
        vm.userId = parseInt($routeParams['uid']);
        vm.addNewWebsite = addNewWebsite;


        function init() {
            vm.websites = WebsiteService.findWebsitesForUser(vm.userId);
            vm.website = WebsiteService.findWebsiteById(websiteId);
        }
        init();

        function addNewWebsite(website) {
            console.log(website);
            website.uid = vm.userId;
            WebsiteService.createNewWebsite(website);
        }

    }
})();