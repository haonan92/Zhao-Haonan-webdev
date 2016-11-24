/**
 * Created by Haonan on 10/20/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, PageService, $location) {
        var vm = this;

        vm.websiteId = $routeParams.wid;
        vm.userId = $routeParams.uid;
        vm.userId = $routeParams.uid;
        vm.createPage = createPage;


        function createPage(page) {
            page.websiteId = vm.websiteId;
            PageService
                .createPage(page)
                .success(function (page) {
                    $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");

                })
                .error(function () {

                })

        }
    }
})();

