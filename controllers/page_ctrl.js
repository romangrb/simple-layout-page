(function(){
  
  'use strict';
  
  angular
      .module('layoutPage')
      .controller('PageCtrl', ['$scope', 'constant',
          
  function($scope, c) {
    
    var self = this;
    
    this.pages = {
      1 : false,
      2 : false,
      3 : false
    },
    
    this.activeTittle = function(name){
      
      angular.forEach(self.pages, function(value, key) {
        self.pages[key] = (name!=key) ? false : true;
      });
    };
    
  }]);
          
})();