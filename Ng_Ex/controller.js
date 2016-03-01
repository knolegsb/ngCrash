var app = angular.module("ageGuesser", []);

app.controller("ageController",function ($scope) {
    $scope.fullName = "Brad Green";
    $scope.age = Math.floor((Math.random() * 10) + 20);
    $scope.retryAge = function () {
        $scope.age = Math.floor((Math.random() * 20) + 20);
    }
})

//function ageController($scope) {
//    $scope.fullName = "Brad Green";
//}