var app = angular.module('filterApp', []);

app.controller('httpController', function ($scope, $http) {
    $http.get('http://jsonplaceholder.typicode.com/posts')    
        .success(function (result) {
            $scope.posts = result;
        });

    $scope.handleChange = function (postingId) {
        $http.get('http://jsonplaceholder.typicode.com/comments?postId=' + postingId)
            .success(function (postcomments) {
                $scope.comments = postcomments;
            });
        //alert("Post has changed! " + postingId);
    };
});