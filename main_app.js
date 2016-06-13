(function(){
  
  'use strict';
    
  angular
      .module('simpleLayoutPage', ['ngRoute', 'rzModule'])
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
