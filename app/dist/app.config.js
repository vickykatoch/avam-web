var avam;
(function (avam) {
    var web;
    (function (web) {
        angular.module('avamWeb').config(['$stateProvider', '$urlRouterProvider', '$logProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $logProvider, $locationProvider) {
                $logProvider.debugEnabled(true);
                $locationProvider.html5Mode(true);
                return new web.RouteConfig($stateProvider, $urlRouterProvider);
            }
        ]);
    })(web = avam.web || (avam.web = {}));
})(avam || (avam = {}));
