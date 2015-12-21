/// <reference path="../../typings/tsd.d.ts" />
module avam.menu{
    
    class AvamMenuDirective implements ng.IDirective{
        static instance() : ng.IDirective{
			return new AvamMenuDirective;
		}
        scope = {
            
        };
        templateUrl = 'modules/avam-menu/avamMenu.template.html';
    } 
    
    angular.module("avam-menu").directive("avamMenu", AvamMenuDirective.instance);
}