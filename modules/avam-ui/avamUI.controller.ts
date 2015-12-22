/// <reference path="../../typings/tsd.d.ts" />

module avam.ui{
    
    export interface IAvamUIScope extends ng.IScope {
        vm: IAvamUIController;
    }
    export interface IAvamUIController{
        isVisible:boolean;
        toggleMenu():void;
    }
    
    export class AvamUIController implements IAvamUIController{
         public isVisible:boolean;
         
         static $inject =['$scope', '$rootScope', '$window','$timeout'];
         constructor(private scope: IAvamUIScope, private rootScope : ng.IRootScopeService,
                                private ngWin : ng.IWindowService, private ngTimeout : ng.ITimeoutService){
            
             $(window).on('resize.avam',(evt: JQueryEventObject, args:any[]):any=>{
                    this.scope.$apply(()=>{
                        this.checkWidth();
                        this.broadcastMenuState();
                    });
			 }); //eo$w
             scope.$on('destroy', function(){
				$(window).off('resize.avam');
			});
			
			ngTimeout(():any=>{
				this.checkWidth();
				this.broadcastMenuState();
			},0);
             
         } //eoctor
         
         checkWidth():void{
			var width = Math.max($(this.ngWin).width(), this.ngWin.innerWidth);
			this.isVisible= (width >= 768);
		}
		broadcastMenuState():void {
			this.rootScope.$broadcast('AVAM-MENU-VISIBILITY-CHANGED', {
				//show: this.isMenuVisible
			});
		}
        toggleMenu():void{
            this.isVisible=!this.isVisible;
        }
         
    }
    
}