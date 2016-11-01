/**
 * Created by Haonan on 10/20/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService($http) {

        var api = {
            findWidgetsForPage:findWidgetsForPage,
            findWidgetbyId:findWidgetbyId,
            createWidget:createWidget,
            updateWidget:updateWidget,
            deleteWidget:deleteWidget,
            findWidgetTypeById:findWidgetTypeById
        }
        return api;


        function findWidgetTypeById(wid) {
            var url = '/api/wigitype/'+wid;
            return $http.get(url);
        }



        function deleteWidget(wgid) {
            var url ="/api/widget/" + wgid;
            $http.delete(url);
        }


        function updateWidget(widget) {
            console.log("Widget To Update ", widget);
            var url ="/api/widget/"+widget._id;
            $http.put(url,widget);
        }



        function createWidget(pid) {
            return $http.post('/api/page/'+pid.pageId+'/widget', pid);



        }


        function findWidgetsForPage(pid) {
            var url = '/api/page/'+pid+'/widget';
            return $http.get(url);

        }


        function findWidgetbyId(wid) {
            var url = '/api/widget/'+ wid;
            return $http.get(url);
        }
    }
})();