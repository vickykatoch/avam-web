/// <reference path="../../typings/tsd.d.ts" />
///<reference path="./avamMenu.controller.ts"/>
var avam;
(function (avam) {
    var menu;
    (function (menu) {
        var AvamGroupMenuDirective = (function () {
            function AvamGroupMenuDirective() {
                this.transclude = true;
                this.require = '^avamMenu';
                this.scope = {
                    label: '@',
                    icon: '@'
                };
                this.templateUrl = 'modules/avam-menu/avamGroupMenu.template.html';
            }
            AvamGroupMenuDirective.instance = function () {
                return new AvamGroupMenuDirective;
            };
            AvamGroupMenuDirective.prototype.link = function (scope, elem, attributes, controller) {
                scope.isOpen = false;
                scope.onToggleSubMenu = function () {
                    scope.isOpen = !scope.isOpen;
                    controller.setGroupMenuScope(scope);
                    scope.setSubMenuPosition();
                };
                scope.closeMenu = function () {
                    scope.isOpen = false;
                };
                scope.setSubMenuPosition = function () {
                    var pos = elem.offset(), top = elem.parents('.avam-menu-panel').height();
                    $('.avam-sub-menu').css({ 'left': pos.left, 'top': top });
                };
            };
            return AvamGroupMenuDirective;
        })();
        angular.module("avam-menu").directive("avamGroupMenu", AvamGroupMenuDirective.instance);
    })(menu = avam.menu || (avam.menu = {}));
})(avam || (avam = {}));
