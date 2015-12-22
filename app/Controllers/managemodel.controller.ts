/// <reference path="../../typings/tsd.d.ts" />
module avam.web{
     interface IManageModelController {
        show():void;
    }
    
    export class ManageModelController implements IManageModelController{
        
        constructor(){
            
        }
        show():void{
            console.log('Showed');
        }
        
    }
    
    angular.module('avamWeb').controller('ManageModelController', ManageModelController);
}