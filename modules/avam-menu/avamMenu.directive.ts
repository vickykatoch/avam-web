/// <reference path="../../typings/tsd.d.ts" />
///<reference path="./avamMenu.controller.ts"/>
module avam.menu{
    
    class AvamMenuDirective implements ng.IDirective{
        static instance() : ng.IDirective{
			return new AvamMenuDirective;
		}
        scope = {
            
        };
        transclude=true;
        templateUrl = 'modules/avam-menu/avamMenu.template.html';
        controller = AvamMenuController;
		controllerAs = "vm";
    } 
    
    angular.module("avam-menu").directive("avamMenu", AvamMenuDirective.instance);
}