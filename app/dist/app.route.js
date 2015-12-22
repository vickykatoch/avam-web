var avam;
(function (avam) {
    var web;
    (function (web) {
        var RouteConfig = (function () {
            function RouteConfig($stateProvider, $urlRouterProvider) {
                this.$stateProvider = $stateProvider;
                this.$urlRouterProvider = $urlRouterProvider;
                this.init();
                $urlRouterProvider.otherwise('/');
            }
            RouteConfig.prototype.init = function () {
                this.$stateProvider.state("home", {
                    url: '/',
                    templateUrl: 'app/Views/home.html',
                    controller: 'HomeController',
                    controllerAs: 'home'
                })
                    .state('managemodel', {
                    url: '/manage-model',
                    templateUrl: 'app/Views/manage-model.html',
                    controller: 'ManageModelController',
                    controllerAs: 'mm'
                });
            };
            return RouteConfig;
        })();
        web.RouteConfig = RouteConfig;
    })(web = avam.web || (avam.web = {}));
})(avam || (avam = {}));
