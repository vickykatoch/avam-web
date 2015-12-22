/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./avamGroupMenu.directive.ts"/>
var avam;
(function (avam) {
    var menu;
    (function (menu) {
        var AvamMenuController = (function () {
            function AvamMenuController(scope, rootScope) {
                this.scope = scope;
                this.rootScope = rootScope;
            }
            AvamMenuController.prototype.setActiveElement = function (elem) {
                this.activeElement = elem;
                this.rootScope.$broadcast('AVAM-MENU-VISIBILITY-CHANGED', { isVisible: false });
            };
            AvamMenuController.prototype.getActiveElement = function () {
                return this.activeElement;
            };
            AvamMenuController.prototype.setGroupMenuScope = function (groupMenuItemScope) {
                this.groupMenuScope = groupMenuItemScope;
            };
            AvamMenuController.$inject = ['$scope', '$rootScope'];
            return AvamMenuController;
        })();
        menu.AvamMenuController = AvamMenuController;
    })(menu = avam.menu || (avam.menu = {}));
})(avam || (avam = {}));
