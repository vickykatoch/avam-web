var avam;
(function (avam) {
    var web;
    (function (web) {
        var ManageModelController = (function () {
            function ManageModelController() {
            }
            ManageModelController.prototype.show = function () {
                console.log('Showed');
            };
            return ManageModelController;
        })();
        web.ManageModelController = ManageModelController;
        angular.module('avamWeb').controller('ManageModelController', ManageModelController);
    })(web = avam.web || (avam.web = {}));
})(avam || (avam = {}));
