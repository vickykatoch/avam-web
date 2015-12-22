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
            
            $(document).click((evt: JQueryEventObject):void=>{
                if ($(evt.target).parent().hasClass('avam-group-menu')){
							return;
						}	              
                        scope.$apply(()=>{
                            this.rootScope.$broadcast('AVAM-MENU-VISIBILITY-CHANGED',
                                {
                                    isVisible:false,
                                    target:evt.target
                                });
                        });
            });
        }
        
        setActiveElement(elem: ng.IAugmentedJQuery):void{
			this.activeElement=elem;
            this.rootScope.$broadcast('AVAM-MENU-VISIBILITY-CHANGED',{isVisible:false});
		}
		getActiveElement() : ng.IAugmentedJQuery{
			return this.activeElement;
		}
        setGroupMenuScope(groupMenuItemScope: IGroupMenuItemScope):void{
            this.groupMenuScope=groupMenuItemScope;
        }
    }
    
}