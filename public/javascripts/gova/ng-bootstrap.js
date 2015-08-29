var Gova = Gova || {};

Gova.Bootstrap = {};

Gova.Bootstrap.AddButton = function () {
    return{
        restrict:"E",
        replace: true,
        scope:{
            text: "@",
            action : "&"
        },
        template: "<button class='btn btn-success' ng-click='action()'><i class='icon icon-white icon-plus-sign'></i> {{text}}</button>"
    }
};

Gova.Bootstrap.DeleteButton = function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            text: "@", // The @ setting tells angular to peal the text attribute value from the attributes and set a variable named "text" on the scope
            action: "&" // The "&" setting tells angular to delegate whatever the setting is to the parent scope.
        },
        //link: function (scope, el, atts) {
        //    var buttonText = "<button class='btn btn-danger' ng-transclude> <i class='icon icon-remove icon-white'></i>"+ atts.text+ "</button>";
        //    el.html(buttonText);
        //    el.on("click",function(){
        //        scope.removeDb(scope.item);
        //    });
        //},
        template: "<button class='btn btn-danger' ng-click='action()'> <i class='icon icon-remove icon-white'></i>{{text}}</button>"
    }
};

Gova.Bootstrap.Breadcrumbs = function ($routeParams) {
    return {
        restrict: "E",
        controller: function ($scope) {
            var rootUrl = "#/";
            $scope.crumbs = [{url: "#", text: "Databases"}];
            var runningUrl = rootUrl;
            for (var param in $routeParams) {
                runningUrl += $routeParams[param];
                $scope.crumbs.push({url: runningUrl, text: $routeParams[param]});
            }

            $scope.notLast = function (crumb) {
                return crumb !== _.last($scope.crumbs);
            }
        },
        template: '<div class="row"> <div class="span12"> <ul class="breadcrumb"> <li ng-repeat="crumb in crumbs"><h3><a href="{{crumb.url}}">{{crumb.text}}</a> <span class="divder" ng-show="notLast(crumb)">&nbsp;/&nbsp;</span> </h3> </li> </ul> </div> </div>'
    }
}