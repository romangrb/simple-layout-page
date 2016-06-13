(function(){
  
  'use strict';
    
  angular
      .module('structureMng', ['ngRoute'])
      .config(
  
  function($routeProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl: 'views/list.html',
            controlleAs: 'listVm'
        })
        .otherwise({
            redirectTo: '/'
        });
        
        
  });
  
})();
