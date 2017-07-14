console.log('JS Sourced');

//create app and link angular to it
var myApp = angular.module('myApp', []);
myApp.controller('OnloadController', function() {
  //declare a var equal to our controller to access it and use it
  var control = this;
  
  control.displayInfo = function(userName, userMessage) {
    var info = {userName: userName, userMessage: userMessage};
    console.log(info);
  };
});
