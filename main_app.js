(function(){
  
  'use strict';
    
  angular
      .module('layoutPage', ['ngRoute', 'ui.bootstrap-slider'])
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
