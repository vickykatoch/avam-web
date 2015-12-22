/// <reference path="../../typings/tsd.d.ts" />
///<reference path="./avamMenu.controller.ts"/>

module avam.menu{
    export interface IGroupMenuItemScope extends ng.IScope{
        label: string;
		icon: string;
		isOpen: boolean;
		onToggleSubMenu(): void;
		closeMenu():void;
		setSubMenuPosition():void;
    }
    
    class AvamGroupMenuDirective implements ng.IDirective{
        static instance() : ng.IDirective{
			return new AvamGroupMenuDirective;
		}
		transclude=true;
		require = '^avamMenu';
		scope = {
			label:'@',
			icon: '@'
		};
		templateUrl = 'modules/avam-menu/avamGroupMenu.template.html';	
        link(scope : IGroupMenuItemScope , elem : ng.IAugmentedJQuery, attributes : ng.IAttributes,
            controller : IAvamMenuController) : void {
                scope.isOpen=false;
                
                scope.onToggleSubMenu = ():void=>{
						scope.isOpen=!scope.isOpen;
                        controller.setGroupMenuScope(scope);
                        scope.setSubMenuPosition();
					};
                 scope.closeMenu =():void=>{
                     scope.isOpen=false;
                 }
                 scope.setSubMenuPosition=():void=>{
                         var pos = elem.offset(), 
						 top = elem.parents('.avam-menu-panel').height();
                        $('.avam-sub-menu').css({ 'left': pos.left, 'top': top });
                 }
            }
    }
    
    
    angular.module("avam-menu").directive("avamGroupMenu", AvamGroupMenuDirective.instance);
}