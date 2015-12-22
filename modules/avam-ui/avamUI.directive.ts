/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./avamUI.controller.ts"/>
module avam.ui{
    
    class AvamUIDirective implements ng.IDirective{
        static instance() : ng.IDirective{
			return new AvamUIDirective;
		}
         scope = {
            logo : '@',
            title:'@',
            subTitle:'@'
        };
        transclude=true;
        templateUrl = 'modules/avam-ui/avamUI.template.html';
        controller = AvamUIController;
		controllerAs = "vm";
    } 
    
    angular.module("avam-ui").directive("avamUi", AvamUIDirective.instance);
}