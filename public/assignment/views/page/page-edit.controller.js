/**
 * Created by Haonan on 10/19/2016.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, PageService, $location) {
        var vm = this;
        vm.userId = parseInt($routeParams.uid);
        vm.pageId = parseInt($routeParams.pid);
        vm.websiteId = parseInt($routeParams.wid);
        vm.updatePage = updatePage;
        vm.deletePage =deletePage;

        function init() {
            var promise = PageService.findPageById(vm.pageId);
            promise
                .success(function (pg) {
                    if(pg != '0') {
                        vm.page = pg;
                    }
                })
                .error(function () {

                });
        }
        return init();
        //svm.pages = PageService.findPageByWebsiteId(vm.websiteId);



        function deletePage(pid) {
            PageService.deletePage(pid);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
        }


        function updatePage(currentpage) {
            PageService.updatePage(currentpage);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
        }




    }
})();

