//Created by Haonan on 10/20/2016.

(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgeChooserController", WidgeChooserController);

    function WidgeChooserController($routeParams, WidgetService, $location) {
        var vm = this;

        vm.userId = parseInt($routeParams['uid']);
        vm.websiteId = parseInt($routeParams['wid']);
        vm.pageId = parseInt($routeParams['pid']);
        vm.wigetId = parseInt($routeParams['wgid']);


        vm.createWidget = createWidget;


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
        }

        inti();



        function createWidget(pid, widget) {
            widget._id = (new Date()).getTime().toString();
            widget.pageId = pid;
            if(widget.widgetType == 'HEADER' && widget.size == null) {
                widget.size = 2;
            }
            WidgetService
                .createWidget(widget)
                .success(function () {
                    $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + widget._id);

                })
                .error(function () {

                })
        }
    }
})();