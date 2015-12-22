/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./avamGroupMenu.directive.ts"/>
module avam.menu{
    export interface IAvamMenuScope extends ng.IScope{
		vm: IAvamMenuController;		
	}
    export interface IAvamMenuController {
        setActiveElement(elem: ng.IAugmentedJQuery):void;
        getActiveElement() : ng.IAugmentedJQuery;	
        setGroupMenuScope(groupMenuItemScope: IGroupMenuItemScope):void;
    }
    
    export class AvamMenuController implements IAvamMenuController{
        private activeElement:ng.IAugmentedJQuery;
        private groupMenuScope: IGroupMenuItemScope;
        static $inject =['$scope', '$rootScope'];
        constructor(private scope : IAvamMenuScope, private rootScope: ng.IRootScopeService){
            
        }
        
        setActiveElement(elem: ng.IAugmentedJQuery):void{
			this.activeElement=elem;
		}
		getActiveElement() : ng.IAugmentedJQuery{
			return this.activeElement;
		}
        setGroupMenuScope(groupMenuItemScope: IGroupMenuItemScope):void{
            this.groupMenuScope=groupMenuItemScope;
        }
    }
    
}