var avam;
(function (avam) {
    var web;
    (function (web) {
        var HomeController = (function () {
            function HomeController() {
            }
            HomeController.prototype.show = function () {
                console.log('Showed');
            };
            return HomeController;
        })();
        web.HomeController = HomeController;
        angular.module('avamWeb').controller('HomeController', HomeController);
    })(web = avam.web || (avam.web = {}));
})(avam || (avam = {}));
