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
        .when('/second', {
            templateUrl: 'views/second_page.html',
            controlleAs: 'secVm'
        })
        .when('/third', {
            templateUrl: 'views/third_page.html',
            controlleAs: 'trdVm'
        })
        .otherwise({
            redirectTo: '/'
        });
        
        
  });
  
})();
