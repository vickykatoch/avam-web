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
                        _this.broadcastMenuState();
                    });
                }); //eo$w
                scope.$on('destroy', function () {
                    $(window).off('resize.avam');
                });
                scope.$on('AVAM-MENU-VISIBILITY-CHANGED', function (evt, data) {
                    if (_this.canHide) {
                        _this.isVisible = data.isVisible;
                    }
                });
                ngTimeout(function () {
                    _this.checkWidth();
                    _this.broadcastMenuState();
                }, 0);
            } //eoctor
            AvamUIController.prototype.checkWidth = function () {
                var width = Math.max($(this.ngWin).width(), this.ngWin.innerWidth);
                this.isVisible = (width >= 768);
                this.canHide = (width < 768);
            };
            AvamUIController.prototype.broadcastMenuState = function () {
                this.rootScope.$broadcast('AVAM-MENU-VISIBILITY-CHANGED', {});
            };
            AvamUIController.prototype.toggleMenu = function () {
                this.isVisible = !this.isVisible;
            };
            AvamUIController.$inject = ['$scope', '$rootScope', '$window', '$timeout'];
            return AvamUIController;
        })();
        ui.AvamUIController = AvamUIController;
    })(ui = avam.ui || (avam.ui = {}));
})(avam || (avam = {}));
