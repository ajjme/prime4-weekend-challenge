let photoApp = angular.module('PhotoApp', []);

photoApp.controller('MainController', function($http) {
    let self = this;

    self.listArray = ['mirandas-dairy', 'zoo-gorilla', 'albania-cifteli', 'albania-view', 'mesa-temple', 'yellowstone'];
    self.photo = function() {
        $http.get('/photo')
        .then(function(response) {
            console.log(response);
            self.photosList = {};
            for (let i = 0; i < response.data.length; i++) {
                self.photosList[response.data[i].name] = response.data[i].likes;
                console.log('this is photoslst', self.photosList);
            }

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
                console.log('what is here', self.photosList[response.data[0].name]);
                self.updateLikes(imageName, self.photosList[response.data[0].name] + 1);
            })
            .catch(function(error){
                console.log('error', error);
            });
    }


    self.updateLikes = function (imageName, currentLikes) {
        const config = {
            data: {
                name: imageName,
                currentLikes: currentLikes
            }
        };
        console.log('in update', imageName, currentLikes);
        $http.put('/photo/likes', config)
            .then(function(response) {
                self.photosList[imageName] = currentLikes;
                console.log('response in PUT', response.data);
                console.log('photoslist', self.photosList);
            })
            .catch(function(error){
                console.log('error in PUT', error);
            });
    }
});