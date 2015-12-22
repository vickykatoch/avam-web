/// <reference path="../../typings/tsd.d.ts" />
module avam.web{
    interface IHomeController {
        show():void;
    }
    
    export class HomeController implements IHomeController{
        
        constructor(){
            
        }
        show():void{
            console.log('Showed');
        }
    }
    
    angular.module('avamWeb').controller('HomeController', HomeController);
    
}