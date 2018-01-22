let photoApp = angular.module('PhotoApp', []);

photoApp.controller('MainController', function($http) {
    let self = this;


    self.photo = function() {
        $http.get('/photo')
        .then(function(response) {
            console.log(response);
            self.photosList = {};
            for (let i = 0; i < response.data.length; i++) {
                self.photosList[response.data[i].name] = response.data[i].likes;
                console.log(self.photosList);
            }
            self.photosList = response.data;

        })
        .catch(function(error) {
            console.log(error);
        });
    }
    self.photo();

    self.like = function (imageName) {
        const config = {
            params: {
                name: imageName
            }
        };
        console.log(imageName);
        $http.get('/photo/likes', config)
            .then(function(response) {
                console.log('response', response.data[0].likes);
                self.photosList[response.data[0].name] = response.data[0].likes;
                console.log('photoslist', self.photosList);
            })
            .catch(function(error){
                console.log('error', error);
            });
    }
});