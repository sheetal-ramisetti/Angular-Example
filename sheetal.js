/**
 * Created by sheet on 09/25/2016.
 */
angular.module("sheetalDemo", [])
    .controller("sheetalController", function($scope, $http) {

        //Initialization
        $scope.firstName = 'firstName';
        $scope.lastName = 'lastName';
        $scope.limitToModel = '';
        $scope.limitToData = [];

        $http.get('http://api.icndb.com/categories')
            .then(function(response) {
                $scope.limitToData = response.data.value
            });

        //Methods

        $scope.submit = function() {
            $url = 'http://api.icndb.com/jokes/random?firstName=' + $scope.firstName + '&lastName=' + $scope.lastName
            if ($scope.limitToModel != '') {
                $url = $url + '&limitTo=[' + $scope.limitToModel + ']'
            }
            $http.get($url)
                .then(function (response) {
                $scope.greeting = response.data
            });
        };
    });
