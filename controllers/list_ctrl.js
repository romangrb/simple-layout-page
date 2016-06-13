(function(){
  
  'use strict';
  
  angular
      .module('structureMng')
      .controller('ListCtrl', ['$window', 'constant',
          
  function($window, c) {
    
    var self = this;
    
    this.tittle = c.H_LIST;

    this.save = function(coll){
      
      var status = {
        type:0, 
        obj:{
          
        }
      },
        callback = function (status){ 
          $window.location.href= "#/";    
      };
            
    };
  
  }]);
          
})();