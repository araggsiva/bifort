var upApp = angular.module('upApp', []);
    // Controller function and passing $http service and $scope var.
    upApp.controller('upController', function($scope, $http) {

    	$scope.uploadFile = function(files) {


    var fd = new FormData();
    //Take the first selected file
    fd.append("file", files[0]);

    $http.post('upload.php', fd, {
        withCredentials: true,
        headers: {'Content-Type': undefined },
        transformRequest: angular.identity
    }).success(function(fd) {
    	alert("image uploaded successfully");
            //console.log(fd);
            $("#display").html(fd);
        }).error(function(data) {
            alert("error");
        });


};


});