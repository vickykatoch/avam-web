/// <reference path="../../typings/tsd.d.ts" />
///<reference path="./avamMenu.controller.ts"/>
var avam;
(function (avam) {
    var menu;
    (function (menu) {
        var AvamMenuDirective = (function () {
            function AvamMenuDirective() {
                this.scope = {};
                this.transclude = true;
                this.templateUrl = 'modules/avam-menu/avamMenu.template.html';
                this.controller = menu.AvamMenuController;
                this.controllerAs = "vm";
            }
            AvamMenuDirective.instance = function () {
                return new AvamMenuDirective;
            };
            return AvamMenuDirective;
        })();
        angular.module("avam-menu").directive("avamMenu", AvamMenuDirective.instance);
    })(menu = avam.menu || (avam.menu = {}));
})(avam || (avam = {}));
