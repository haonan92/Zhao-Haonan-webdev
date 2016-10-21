//Created by Haonan on 10/20/2016.

(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgeEditController", WidgeEditController);

    function WidgeEditController($routeParams, WidgetService) {
        var vm = this;

        vm.userId = parseInt($routeParams['uid']);
        vm.websiteId = parseInt($routeParams['wid']);
        vm.pageId = parseInt($routeParams['pid']);
        vm.wigetId = parseInt($routeParams['wgid']);


        function inti() {
            vm.widget = WidgetService.findWidgetbyId(vm.wigetId);
            vm.wigtype = vm.widget.widgetType.toLowerCase();
        }

        inti();
    }
})();