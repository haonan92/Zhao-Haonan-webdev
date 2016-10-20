/**
 * Created by Haonan on 10/19/2016.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.websiteId = parseInt($routeParams.wid);
        vm.userId = parseInt($routeParams.uid);

        vm.pages = PageService.findPageByWebsiteId(vm.websiteId);


    }
})();

