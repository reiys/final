angular.module('App', [])

.controller('ImageLayout', ImageLayout)


function ImageLayout($scope, $http){
  $http.get('https://github.com/reiys/Website/blob/c95bb7f529ae4e85d0466ebdc9bb6301fc4c1326/gllry.json').success(function(imgs){
    $scope.imgs = imgs
  })
}
