//Created by Haonan on 10/20/2016.

(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgeEditController", WidgeEditController);

    function WidgeEditController($routeParams, WidgetService, $location) {
        var vm = this;

        vm.userId = parseInt($routeParams['uid']);
        vm.websiteId = parseInt($routeParams['wid']);
        vm.pageId = parseInt($routeParams['pid']);
        vm.wigetId = parseInt($routeParams['wgid']);
        vm.updateWidget =updateWidget;
        vm.deleteWidget = deleteWidget;


        function inti() {
            var promise = WidgetService.findWidgetbyId(vm.wigetId);
            promise
                .success(function (wig) {
                    if(wig != '0') {
                        vm.widget = wig;
                    }
                })
                .error(function () {

                });

            WidgetService.findWidgetTypeById(vm.wigetId)
                .success(function (wtype) {
                    if(wtype != '0') {
                        vm.wigtype = wtype.toLowerCase();
                    }
                })
                .error(function () {

                });


            WidgetService.findWidgetsForPage(vm.pageId)
                .success(function (wigs) {
                    if(wigs != '[]') {
                        vm.widgets = wigs;
                    }
                })
                .error(function () {
                });


           // vm.widgets = WidgetService.findWidgetsForPage(vm.pageId);

        }

        inti();


        function deleteWidget(wgid) {
            wgid = vm.widget._id;
            WidgetService.deleteWidget(wgid);
            alert("This Widget has been removed, click back to widget list")
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");

        }

        function updateWidget(currentwidget) {
            currentwidget = vm.widget;
            var updated = WidgetService.updateWidget(currentwidget);
            console.log(updated);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");

        }



    }
})();