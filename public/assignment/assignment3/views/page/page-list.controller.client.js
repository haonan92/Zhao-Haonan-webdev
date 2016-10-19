/**
 * Created by Haonan on 10/19/2016.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams) {
        var vm = this;
       // var websiteId = parseInt($routeParams.wid);
        //vm.userId = parseInt($routeParams['uid']);
        console.log("dddd");

        //function init() {
         //   vm.website = WebsiteService.findWebsiteById(websiteId);
       // }
        //init();
    }
})();

