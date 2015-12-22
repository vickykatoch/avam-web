/// <reference path="../../typings/tsd.d.ts" />
var avam;
(function (avam) {
    var ui;
    (function (ui) {
        angular.module('avam-ui', ['ui.router', 'avam-menu']);
    })(ui = avam.ui || (avam.ui = {}));
})(avam || (avam = {}));
