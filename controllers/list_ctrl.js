(function(){
  
  'use strict';
  
  angular
      .module('structureMng')
      .controller('ListCtrl', ['$scope', 'constant',
          
  function($scope, c) {
    
    var self = this;
    
    this.tittle = c.H_LIST;
    
  }]);
          
})();