/**
 * Created by Haonan on 10/19/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location) {
        var vm = this;
        //why wid
        var websiteId = parseInt($routeParams.wid);
        vm.userId = parseInt($routeParams['uid']);
        vm.createWebsite = createWebsite;


        function init() {
            vm.websites = WebsiteService.findWebsitesForUser(vm.userId);
            vm.website = WebsiteService.findWebsiteById(websiteId);
        }
        init();

        function createWebsite(website) {
            website.uid = vm.userId;
            WebsiteService
            .createWebsite(website)
                .success(function (website) {
                    $location.url("/user/"+ vm.userId +"/website");

                })
                .error(function () {

                })
        }

    }
})();