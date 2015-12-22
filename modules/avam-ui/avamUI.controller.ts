/// <reference path="../../typings/tsd.d.ts" />

module avam.ui{
    
    export interface IAvamUIScope extends ng.IScope {
        vm: IAvamUIController;
    }
    export interface IAvamUIController{
        isVisible:boolean;
        canHide:boolean;
        toggleMenu():void;
    }
    
    export class AvamUIController implements IAvamUIController{
         public isVisible:boolean;
         public canHide:boolean;
         
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
			scope.$on('AVAM-MENU-VISIBILITY-CHANGED', (evt: ng.IAngularEvent,  data:any):void=>{
                if(this.canHide){
                    this.isVisible=data.isVisible;
                }
            });
            
			ngTimeout(():any=>{
				this.checkWidth();
				this.broadcastMenuState();
			},0);
             
         } //eoctor
         
         checkWidth():void{
			var width = Math.max($(this.ngWin).width(), this.ngWin.innerWidth);
			this.isVisible =  (width >= 768);
            this.canHide =  (width < 768);
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