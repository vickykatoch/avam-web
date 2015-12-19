/// <reference path="../../typings/tsd.d.ts" />
var avam;
(function (avam) {
    var header;
    (function (header) {
        var AvamHeaderDirective = (function () {
            function AvamHeaderDirective() {
                this.scope = {
                    logo: '@',
                    title: '@',
                    subTitle: '@'
                };
                this.templateUrl = 'modules/avam-header/avamHeader.template.html';
            }
            AvamHeaderDirective.instance = function () {
                return new AvamHeaderDirective;
            };
            return AvamHeaderDirective;
        })();
        angular.module("avam-header").directive("avamHeader", AvamHeaderDirective.instance);
    })(header = avam.header || (avam.header = {}));
})(avam || (avam = {}));
