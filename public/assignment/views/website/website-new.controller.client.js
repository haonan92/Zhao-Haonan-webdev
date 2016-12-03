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
        vm.userId = $routeParams.uid;

        vm.createWebsite = createWebsite;


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
                    console.log(webs);
                    if(webs != '[]') {
                        vm.websites = webs;
                    }
                })
                .error(function () {
                });
        }
        init();

        function createWebsite(website) {
            website.uid = vm.userId;

            if(!website.name) {
                vm.error = "Website name is required";
                return;
            }

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