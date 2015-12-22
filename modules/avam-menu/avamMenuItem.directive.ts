/// <reference path="../../typings/tsd.d.ts" />
///<reference path="./avamMenu.controller.ts"/>

module avam.menu{
    interface IAttributes extends ng.IAttributes{
		label : string;
		icon: string;
		route:string;
	}
    interface IMenuItemScope extends ng.IScope{
		isActive(): boolean;
		isVertical():boolean;
	}
    
    class AvamMenuItemDirective implements ng.IDirective{
		static instance() : ng.IDirective{
			return new AvamMenuItemDirective;
		}
        require = '^avamMenu';
        
		scope = {
			label:'@',
			icon:'@',
			route:'@'
		};
		templateUrl = 'modules/avam-menu/avamMenuItem.template.html';	
        link(scope : IMenuItemScope, elem : ng.IAugmentedJQuery, attributes : IAttributes, 
				controller : IAvamMenuController) : void {	
                    scope.isActive= ():boolean=>{
				        return elem === controller.getActiveElement();
			         };          
                     elem.on('click',(evt:UIEvent):void=>{
                        scope.$apply(():void=>{
                            controller.setActiveElement(elem);                 
                            controller.setRoute(attributes.route);
                        });
                    });
                }
    }
    
    
    angular.module("avam-menu").directive("avamMenuItem", AvamMenuItemDirective.instance);
    
}