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
            findWidgetTypeById:findWidgetTypeById,
            sortItem: sortItem,
            selectFlickr:selectFlickr
        }
        return api;

        function selectFlickr(widgetId, photo) {
            var url = '/api/'+widgetId+'/flickr';
            var content = {photo: photo};
            console.log(content);
            return $http.put(url, content);

        }

        function sortItem(pageId, start, end){
            var url = '/page/'+pageId+'/widget?start=' + start + '&end=' + end;
            return $http.put(url);
        }

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



        function createWidget(widget) {
            return $http.post('/api/page/'+ widget.pageId + '/widget', widget);
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