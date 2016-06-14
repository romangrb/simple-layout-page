(function(){
  
  'use strict';
  
  angular
      .module('layoutPage')
      .controller('ListCtrl', ['$scope', 'constant',
          
  function($scope, c) {
    
    var self = this;
    
    this.tittle = c.H_LIST;
    
    this.sliderSq = {
      
      options : {
        min: 1,
        max: 5,
        value:3,
        step: 1,
        tooltip: 'show',
        handle: 'round',
        name : 'squereLine',
        orientation: 'horizontal',
        enabled: true,
        naturalarrowkeys: true,
        ngDisabled: false,
        prefix : 'm\xB2 ',
      },
      
      methods : {
        toSquere : function (value) {
          return self.sliderSq.options.prefix + value;
        },
        slide : function (value) {
          self.sliderSq.options.value = value;
          console.log(value);
        },
        getLabelBegin: function () {
          return self.sliderSq.options.prefix + self.sliderSq.options.min;
        },
        getLabelEnd: function () {
          return self.sliderSq.options.prefix + self.sliderSq.options.max;
        }
      },
      
    };
    
  }]);
          
})();