/**
 * Created by Haonan on 11/23/2016.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("FlickrService", FlickrService);

    //I use professor's keys
    var key = "8ce912aa7642ee64767e30bd13575d98";
    var secret = "957cd22dfae64bb0";
    var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT&callback=JSON_CALLBACK";

    function FlickrService($http){
        var service = {
            searchPhotos : searchPhotos
        };

        return service;

        function searchPhotos(searchText){
            var url = urlBase
                .replace("API_KEY", key)
                .replace("TEXT", searchText);
            console.log("start");
            console.log(url);
            console.log("end");

            return $http.get(url);
        }
    }


})();