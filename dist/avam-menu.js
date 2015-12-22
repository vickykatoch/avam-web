/// <reference path="../../typings/tsd.d.ts" />
var avam;
(function (avam) {
    var menu;
    (function (menu) {
        angular.module('avam-menu', ["ngAnimate"]);
    })(menu = avam.menu || (avam.menu = {}));
})(avam || (avam = {}));

angular.module("avam-menu").run(["$templateCache", function($templateCache) {$templateCache.put("modules/avam-menu/avamGroupMenu.template.html","<li class=\"avam-group-menu\" ng-click=\"onToggleSubMenu()\">\n    <div class=\"avam-noselect\">\n		<i class=\"fa {{icon}} fa-2x avam-menu-icon\"></i>\n		{{label}}\n	</div>\n    <i class=\"fa fa-chevron-left avam-group-menu-indicator\"\n            ng-class=\"{\'fa-chevron-down\' : isOpen}\"></i>\n</li>\n<div ng-show=\"isOpen\" class=\"avam-sub-menu avam-fade-in-animation\">\n	<ul ng-transclude></ul>\n</div>");
$templateCache.put("modules/avam-menu/avamMenu.template.html","<div class=\"avam-menu-panel avam-menu-panel-flex\">\n    <ul class=\"avam-menu\" ng-transclude>\n    </ul>\n</div>");
$templateCache.put("modules/avam-menu/avamMenuItem.template.html","<li class=\"avam-selectable-item\" >\n	<div class=\"avam-noselect\">\n		<i class=\"fa {{icon}} fa-2x avam-menu-icon\"></i>\n		{{label}}\n	</div>\n	<i class=\"fa fa-caret-left fa-2x avam-menu-active-indicator\" \n		ng-if=\"isActive()\"></i>\n</li>");}]);
/// <reference path="../../typings/tsd.d.ts" />
///<reference path="./avamMenu.controller.ts"/>
var avam;
(function (avam) {
    var menu;
    (function (menu) {
        var AvamMenuItemDirective = (function () {
            function AvamMenuItemDirective() {
                this.require = '^avamMenu';
                this.scope = {
                    label: '@',
                    icon: '@',
                    route: '@'
                };
                this.templateUrl = 'modules/avam-menu/avamMenuItem.template.html';
            }
            AvamMenuItemDirective.instance = function () {
                return new AvamMenuItemDirective;
            };
            AvamMenuItemDirective.prototype.link = function (scope, elem, attributes, controller) {
                scope.isActive = function () {
                    return elem === controller.getActiveElement();
                };
                elem.on('click', function (evt) {
                    scope.$apply(function () {
                        controller.setActiveElement(elem);
                        //controller.setRoute(attributes.route);
                    });
                });
            };
            return AvamMenuItemDirective;
        })();
        angular.module("avam-menu").directive("avamMenuItem", AvamMenuItemDirective.instance);
    })(menu = avam.menu || (avam.menu = {}));
})(avam || (avam = {}));

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
            AvamMenuController.$inject = ['$scope', '$rootScope'];
            return AvamMenuController;
        })();
        menu.AvamMenuController = AvamMenuController;
    })(menu = avam.menu || (avam.menu = {}));
})(avam || (avam = {}));

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
