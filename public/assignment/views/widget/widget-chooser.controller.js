//Created by Haonan on 10/20/2016.

(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgeChooserController", WidgeChooserController);

    function WidgeChooserController($routeParams, WidgetService, $location) {
        var vm = this;

        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];
        vm.pageId = $routeParams['pid'];
        vm.wigetId = $routeParams['wgid'];


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
            widget.pageId = pid;
            if(widget.widgetType == 'HEADER' && widget.size == null) {
                widget.size = 2;
            }
            if(widget.widgetType == 'TEXT') {
                widget.rows = 2;
            }
            WidgetService
                .createWidget(widget)
                .success(function (widget) {
                    console.log(widget);
                    console.log(widget._id);
                    $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + widget._id);

                })
                .error(function () {

                })
        }
    }
})();