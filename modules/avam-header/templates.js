angular.module("avam-header").run(["$templateCache", function($templateCache) {$templateCache.put("modules/avam-header/avamHeader.template.html","<div class=\"avam-header-bar\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 avam-logo-area\">\n            <img ng-src=\"{{logo}}\" class=\"avam-logo\" />\n            <div class=\"avam-title-area\">\n                <p class=\"avam-title\">{{title}}</p>\n                <p class=\"avam-subtitle\">{{subTitle}}</p>\n            </div>\n              <button class=\"btn btn-sm btn-danger pull-right avam-menu-sm-btn\">\n                <i class=\"fa fa-bars fa-2x\"></i>\n            </button>\n        </div>\n        <div class=\"col-sm-6\">\n            <button class=\"btn btn-sm btn-danger pull-right avam-menu-btn\">\n                <i class=\"fa fa-bars fa-2x\"></i>\n            </button>\n        </div>\n    </div>\n</div>");}]);