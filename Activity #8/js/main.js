/*!
* All Rights Reserved
* This software is proprietary information of
* Intelligent Sense
* Use is subject to license terms.
* Filename: main.js
*/


var app = angular.module('act#7', []);

app.controller('profilesCtrl', function($scope, $http) {

/*
* Author: Rodrigo Navarro Vargas
* Using the variable $http we make the call to get the data
*/
    $http(
      {
        method: "JSONP",
        url:"http://api.ht.fuseamplify.com/api/artist/top",
        params: {
          aggregate: true,
          callback: "JSON_CALLBACK"
        }
      })
    .success(function(response) {

      //Results are stored
      $scope.profiles = response;

      //Calls the funtion for the initials
      $scope.letters = getInitials();
    });

/*
* Author: Rodrigo Navarro Vargas
* Function that gets the initial letter of each profile.
* Input: none
* Output:
        *An array of initials sorted inorder.
*/
    var getInitials = function(){
      var initials = [];

      for (var index = 0; index < $scope.profiles.length; index++) {
        var profile = $scope.profiles[index];
        var initial = profile.name.substring(0,1);

        if (initials.indexOf(initial) === -1) {
          initials.push(initial);
        }
      }

    return initials.sort();
    }
});

/*
* Author: Rodrigo Navarro Vargas
* This is a custom filter, it is used for filtering
* results after a letter is touched.
* Inputs:
        *The list of full objects (default)
        *The initial that was touched
* Outputs:
        *A filtered list of the profiles that match the initial
*/
app.filter("filterProfiles", function(){
  return function(pProfiles, pInitial){
    var filtered = [];

    //First time around pProfiles and pInitial are undefined.
    var profiles = pProfiles || [];
    var initial = pInitial || "";

    //For All button
    if(initial===""){
      return profiles;
    }

    //For a specific initial
    for (var index = 0; index < profiles.length; index++){
      if(initial === profiles[index].name.substring(0,1)){
        filtered.push(profiles[index]);
      }
    }

    return filtered;
  }
})
