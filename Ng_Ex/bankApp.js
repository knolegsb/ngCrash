var app = angular.module("bankApp", []);

app.controller("balanceController", function ($scope) {
    $scope.users = [
        { "name": "Priscilla Smith", "balance": 1191 },
        { "name": "Jimmy Verde", "balance": 1923 },
        { "name": "Hugo Chang", "balance": 1289 }
    ];

    $scope.addNew = function (user) {
        alert("Add new called!");
        $scope.users.push(user);
    };

    //$scope.remove = function (index) {
    //    alert("Deleting index: " + index);
    //    $scope.users.splice(index, 1);
    //};
    $scope.remove = function (user) {
        var index = $scope.users.indexOf(user);
        alert("Deleting index: " + index);
        $scope.users.splice(index, 1);
    }

    $scope.edit = function (user) {
        $scope.current = user;
    };

    $scope.save = function (user) {
        $scope.current = {};
    }

    $scope.current = {};
});