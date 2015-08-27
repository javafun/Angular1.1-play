var ngMongo = angular.module("ngMongo", ["ngResource"]);

ngMongo.factory("Mongo", function ($resource) {
    return {
        database: $resource("/mongo-api/dbs")
    }
});


ngMongo.directive("deleteButton", Gova.Bootstrap.DeleteButton);

ngMongo.directive("addButton", Gova.Bootstrap.AddButton);

ngMongo.controller("ListCtrl", function ($scope, Mongo) {
    // http get returns a promise ...
    $scope.items = Mongo.database.query({}, isArray = true);

    $scope.addDb = function () {
        var dbName = $scope.newDbName;

        if (dbName) {
            var newDb = new Mongo.database({name: dbName});
            newDb.$save();
            $scope.items.push(newDb);

            // clear textbox
            $scope.newDbName = '';
        }
    }

    $scope.removeDb = function (db) {
        console.log(db);
        if (confirm("Delete this database? There's no undo...")) {
            db.$delete({name: db.name});
            $scope.items.splice($scope.items.indexOf(db), 1);
        }
    }
});



