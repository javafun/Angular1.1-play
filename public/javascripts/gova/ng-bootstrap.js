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
