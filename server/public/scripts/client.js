console.log('JS Sourced');

//create app and link angular to it
var myApp = angular.module('myApp', []);
myApp.controller('LoadController', function() {
  //declare a var equal to our controller to access it and use it
  var control = this;
  control.userArray = [];
  control.displayInfo = function(userName, userMessage) {
    // first approach...
    // control.info = {userName: userName, userMessage: userMessage};

    //second approach
    var info = {userName: userName, userMessage: userMessage};
    console.log(info);
    control.userArray.push(info);
    console.log(control.userArray);
  };
});
