var avam;
(function (avam) {
    var web;
    (function (web) {
        angular.module("avamWeb", ['ui.router', 'avam-ui']);
    })(web = avam.web || (avam.web = {}));
})(avam || (avam = {}));
