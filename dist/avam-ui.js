/// <reference path="../../typings/tsd.d.ts" />
var avam;
(function (avam) {
    var ui;
    (function (ui) {
        angular.module('avam-ui', ['avam-menu']);
    })(ui = avam.ui || (avam.ui = {}));
})(avam || (avam = {}));

angular.module("avam-ui").run(["$templateCache", function($templateCache) {$templateCache.put("modules/avam-ui/avamUI.template.html","<div class=\"avam-ui\">\n    <div class=\"avam-header-bar\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 avam-logo-area\">\n                <img ng-src=\"{{logo}}\" class=\"avam-logo\" />\n                <div class=\"avam-title-area\">\n                    <p class=\"avam-title\">{{title}}</p>\n                    <p class=\"avam-subtitle\">{{subTitle}}</p>\n                </div>\n                    <button class=\"btn btn-sm btn-danger pull-right avam-menu-btn\" ng-click=\"vm.toggleMenu()\">\n                    <i class=\"fa fa-bars fa-2x\"></i>\n                </button>\n            </div>\n            <div class=\"col-sm-6\">\n                <!--<button class=\"btn btn-sm btn-danger pull-right avam-menu-btn\">\n                    <i class=\"fa fa-bars fa-2x\"></i>\n                </button>-->\n            </div>\n        </div>\n    </div>\n    <div class=\"avam-menu-panel avam-menu-panel-flex dynamic-height\"\n            ng-class=\"{\'avam-menu-panel-vs\' : !vm.isVisible}\">\n        <ng-transclude></ng-transclude>\n    </div>\n    <div class=\"view-area dynamic-height\">\n        <h1>One</h1>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n        \n        <h1>Two</h1>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n        <h1>Three</h1>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n        \n        <h1>Four</h1>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n    </div>\n    \n    <div class=\"avam-footer\">\n    </div>\n</div>");}]);
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./avamUI.controller.ts"/>
var avam;
(function (avam) {
    var ui;
    (function (ui) {
        var AvamUIDirective = (function () {
            function AvamUIDirective() {
                this.scope = {
                    logo: '@',
                    title: '@',
                    subTitle: '@'
                };
                this.transclude = true;
                this.templateUrl = 'modules/avam-ui/avamUI.template.html';
                this.controller = ui.AvamUIController;
                this.controllerAs = "vm";
            }
            AvamUIDirective.instance = function () {
                return new AvamUIDirective;
            };
            return AvamUIDirective;
        })();
        angular.module("avam-ui").directive("avamUi", AvamUIDirective.instance);
    })(ui = avam.ui || (avam.ui = {}));
})(avam || (avam = {}));

/// <reference path="../../typings/tsd.d.ts" />
var avam;
(function (avam) {
    var ui;
    (function (ui) {
        var AvamUIController = (function () {
            function AvamUIController(scope, rootScope, ngWin, ngTimeout) {
                var _this = this;
                this.scope = scope;
                this.rootScope = rootScope;
                this.ngWin = ngWin;
                this.ngTimeout = ngTimeout;
                $(window).on('resize.avam', function (evt, args) {
                    _this.scope.$apply(function () {
                        _this.checkWidth();
                        _this.setViewAreaHeight();
                        _this.broadcastMenuState();
                    });
                }); //eo$w
                scope.$on('destroy', function () {
                    $(window).off('resize.avam');
                });
                scope.$on('AVAM-MENU-VISIBILITY-CHANGED', function (evt, data) {
                    if (_this.canHide) {
                        if (data.target) {
                            var isTrue = $(data.target).hasClass('avam-menu-btn') || $(data.target).parent().hasClass('avam-menu-btn');
                            if (!isTrue)
                                _this.isVisible = data.isVisible;
                        }
                        else {
                            _this.isVisible = data.isVisible;
                        }
                    }
                });
                ngTimeout(function () {
                    _this.checkWidth();
                    _this.setViewAreaHeight();
                    _this.broadcastMenuState();
                }, 0);
            } //eoctor
            AvamUIController.prototype.checkWidth = function () {
                var width = Math.max($(this.ngWin).width(), this.ngWin.innerWidth);
                this.isVisible = (width >= 768);
                this.canHide = (width < 768);
            };
            AvamUIController.prototype.broadcastMenuState = function () {
                // this.rootScope.$broadcast('AVAM-MENU-VISIBILITY-CHANGED', {
                // 	//show: this.isMenuVisible
                // });
            };
            AvamUIController.prototype.toggleMenu = function () {
                this.isVisible = !this.isVisible;
            };
            AvamUIController.prototype.setViewAreaHeight = function () {
                var totalHeight = Math.max($(this.ngWin).height(), this.ngWin.innerHeight);
                var headerHeight = $('.avam-header-bar').outerHeight();
                var footerHeight = $('.avam-footer').outerHeight();
                totalHeight = totalHeight - (headerHeight + footerHeight);
                $('.dynamic-height').css({ 'height': totalHeight });
            };
            AvamUIController.$inject = ['$scope', '$rootScope', '$window', '$timeout'];
            return AvamUIController;
        })();
        ui.AvamUIController = AvamUIController;
    })(ui = avam.ui || (avam.ui = {}));
})(avam || (avam = {}));
