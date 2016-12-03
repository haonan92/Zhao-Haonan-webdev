//Created by Haonan on 10/20/2016.

(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgeEditController", WidgeEditController);

    function WidgeEditController($routeParams, WidgetService, $location) {
        var vm = this;

        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];
        vm.pageId = $routeParams['pid'];
        vm.wigetId = $routeParams['wgid'];
        vm.updateWidget =updateWidget;
        vm.deleteWidget = deleteWidget;


        function init() {
            WidgetService.findWidgetbyId(vm.wigetId)
                .success(function (wig) {
                    if(wig != '0') {
                        vm.widget = wig;
                        vm.wigtype = wig.widgetType.toLowerCase();
                    }
                })
                .error(function () {

                });
        }

        init();


        function deleteWidget(wgid) {
            wgid = vm.widget._id;
            WidgetService.deleteWidget(wgid);
            alert("This Widget has been removed, click back to widget list")
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");

        }

        function updateWidget(currentwidget) {
            currentwidget = vm.widget;
            if(!currentwidget.name) {
                vm.error = "Widget name is required";
                return;
            }
            var updated = WidgetService.updateWidget(currentwidget);
            console.log(updated);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");

        }



    }
})();