var MyCtrl = function ($scope) {

    $scope.items = [
        {name: "Idiot IPA", price: 8.99, lastDrank: "2015-10-11"},
        {name: "Inversion IPA", price: 10.99, lastDrank: "2014-05-11"},
    ]

    $scope.pluralizer = {
        0: "No beers!",
        1: "Only one left!",
        other: "{} Beers in the fridge",
    }

    $scope.addBeer = function () {
        var newBeer = {name: $scope.name, price: $scope.price};
        $scope.items.push(newBeer);
    }

    $scope.removeItem = function (item) {
        if(confirm("Remove this beer - it's a good one!")){
            $scope.items.splice($scope.items.indexOf(item),1);
        }
    }
}

