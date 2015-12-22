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
