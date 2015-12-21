/// <reference path="../../typings/tsd.d.ts" />
var avam;
(function (avam) {
    var menu;
    (function (menu) {
        var AvamMenuDirective = (function () {
            function AvamMenuDirective() {
                this.scope = {};
                this.templateUrl = 'modules/avam-menu/avamMenu.template.html';
            }
            AvamMenuDirective.instance = function () {
                return new AvamMenuDirective;
            };
            return AvamMenuDirective;
        })();
        angular.module("avam-menu").directive("avamMenu", AvamMenuDirective.instance);
    })(menu = avam.menu || (avam.menu = {}));
})(avam || (avam = {}));
