/// <reference path="../../typings/tsd.d.ts" />
module avam.header{
    
    class AvamHeaderDirective implements ng.IDirective{
        static instance() : ng.IDirective{
			return new AvamHeaderDirective;
		}
        scope = {
            logo : '@',
            title:'@',
            subTitle:'@'
        };
        templateUrl = 'modules/avam-header/avamHeader.template.html';
    } 
    
    angular.module("avam-header").directive("avamHeader", AvamHeaderDirective.instance);
}