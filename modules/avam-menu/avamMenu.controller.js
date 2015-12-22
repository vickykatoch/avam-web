/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./avamGroupMenu.directive.ts"/>
var avam;
(function (avam) {
    var menu;
    (function (menu) {
        var AvamMenuController = (function () {
            function AvamMenuController(scope, rootScope) {
                var _this = this;
                this.scope = scope;
                this.rootScope = rootScope;
                $(document).click(function (evt) {
                    if ($(evt.target).parent().hasClass('avam-group-menu')) {
                        return;
                    }
                    scope.$apply(function () {
                        _this.rootScope.$broadcast('AVAM-MENU-VISIBILITY-CHANGED', {
                            isVisible: false,
                            target: evt.target
                        });
                    });
                });
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
            AvamMenuController.prototype.setRoute = function (route) {
                this.rootScope.$broadcast('AVAM-ROUTE-CHANGED', { route: route });
            };
            AvamMenuController.$inject = ['$scope', '$rootScope'];
            return AvamMenuController;
        })();
        menu.AvamMenuController = AvamMenuController;
    })(menu = avam.menu || (avam.menu = {}));
})(avam || (avam = {}));
