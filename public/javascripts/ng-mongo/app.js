var ngMongo = angular.module("ngMongo", ["ngResource"]);

ngMongo.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "list-template.html",
            controller: "ListCtrl"
        })
        .when('/:database',{
            templateUrl:"list-template.html",
            controller: "ListCtrl"
        })

});


ngMongo.factory("Mongo", function ($resource) {
    return {
        database: $resource("/mongo-api/dbs"),
        collection: $resource("/mongo-api/:database")
    }
});

ngMongo.directive("deleteButton", Gova.Bootstrap.DeleteButton);

ngMongo.directive("addButton", Gova.Bootstrap.AddButton);

ngMongo.controller("ListCtrl", function ($scope,$routeParams ,Mongo) {

    var context = "database";

    if($routeParams.database) context = "collection";

    $scope.items = Mongo[context].query($routeParams);


    $scope.addItem = function () {
        var newItemName = $scope.newItemName;

        if (newItemName) {
            var newItem = new Mongo[context]({name: newItemName});
            newItem.$save($routeParams);
            $scope.items.push(newItem);

            // clear textbox
            $scope.newItemName = '';
        }
    }

    $scope.removeItem = function (item) {

        if (confirm("Delete this" + context + " There's no undo...")) {
            var param = {name: item.name};
            if($routeParams.database) param.datatabase = $routeParams.database;

            item.$delete(param);
            $scope.items.splice($scope.items.indexOf(item), 1);
        }
    }
});



