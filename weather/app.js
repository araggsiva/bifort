var app=angular.module('weather', []);
app.factory('weatherService', ['$http', '$q', function ($http, $q){
      function getWeather (ss) {
        var deferred = $q.defer();
        $http.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20location%3D%22' + ss + '%22&format=json&diagnostics=true&callback=')
          .success(function(data){
            deferred.resolve(data.query.results.channel);
          })
          .error(function(err){
            console.log('Error');
            deferred.reject(err);
          });
        return deferred.promise;
      }
      
      return {
        getWeather: getWeather
      };
    }]);



app.controller('weatherController', ['$scope', 'weatherService', function($scope, weatherService) {
      function fetchWeather(ss) {
        weatherService.getWeather(ss).then(function(data){
          $scope.place = data;
        }); 
      }
      
      fetchWeather('84105');
            $scope.findWeather = function(ss) {
        $scope.place = '';
        fetchWeather(ss);
      };

    }]);
