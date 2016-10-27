(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;

        vm.userId = $routeParams.uid;


        function init() {
            WebsiteService.findWebsitesForUser(vm.userId)
                .success(function (webs) {
                    if(webs != '[]') {
                        vm.websites = webs;
                    }
                })
                .error(function () {
                });

        }
        init();
    }
})();