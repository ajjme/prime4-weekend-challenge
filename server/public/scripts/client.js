let photoApp = angular.module('PhotoApp', []);

photoApp.controller('MainController', function($http) {
    let self = this;
    self.photo = function() {
        $http.get('/photo')
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
    self.photo();
});