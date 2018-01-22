let photoApp = angular.module('PhotoApp', []);

photoApp.controller('MainController', function($http) {
    let self = this;

    self.toggleReason = function(photoObject) {
        if (photoObject.showReason) {
            photoObject.showReason = false;
        } else {
            photoObject.showReason = true;
        }
    }

    self.listArray = [];
    self.photo = function() {
        $http.get('/photo')
            .then(function(response) {
                self.photosList = {};
                for (let i = 0; i < response.data.length; i++) {
                    let currentItem = response.data[i];
                    self.listArray.push({
                        name: currentItem.name,
                        reason: currentItem.reason,
                        showReason: false
                    });
                    self.photosList[currentItem.name] = currentItem.likes;
                }

            })
            .catch(function(error) {
                console.log('error getting photos', error);
            });
    }
    self.photo();

    self.like = function (imageName) {
        const config = {
            params: {
                name: imageName
            }
        };
        $http.get('/photo/likes', config)
            .then(function(response) {
                let currentItem = response.data[0];
                self.photosList[currentItem.name] = currentItem.likes;
                self.updateLikes(imageName, self.photosList[currentItem.name] + 1);
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
        $http.put('/photo/likes', config)
            .then(function(response) {
                self.photosList[imageName] = currentLikes;
            })
            .catch(function(error){
                console.log('error in PUT', error);
            });
    }
});