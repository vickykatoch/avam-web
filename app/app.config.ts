/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./app.route.ts" />
module avam.web{
    
    angular.module('avamWeb').config(['$stateProvider','$urlRouterProvider','$logProvider','$locationProvider',
            ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider,
            $logProvider: ng.ILogProvider, $locationProvider: ng.ILocationProvider) =>{
                $logProvider.debugEnabled(true);
                $locationProvider.html5Mode(true);
                return new RouteConfig($stateProvider, $urlRouterProvider);
            }
    ]);
}