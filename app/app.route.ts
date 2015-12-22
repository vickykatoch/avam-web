/// <reference path="../typings/tsd.d.ts" />

module avam.web{
    export class RouteConfig {
        constructor(private $stateProvider: ng.ui.IStateProvider, 
                        private $urlRouterProvider: ng.ui.IUrlRouterProvider ){
            this.init();
            $urlRouterProvider.otherwise('/');
        }
        private init(): void{
            this.$stateProvider.state("home", <ng.ui.IState>
            {
                url: '/',
                templateUrl:'app/Views/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .state('managemodel',<ng.ui.IState>{
                url: '/manage-model',
                templateUrl:'app/Views/manage-model.html',
                controller: 'ManageModelController',
                controllerAs: 'mm'
            });
        }
    }
}