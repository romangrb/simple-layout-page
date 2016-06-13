(function(){
  
  'use strict';
  
  angular
      .module('simpleLayoutPage')
      .controller('ListCtrl', ['$window', 'constant',
          
  function($window, c) {
    
    var self = this;
    
    this.tittle = c.H_LIST;

    //Slider with selection bar
    this.slider_visible_bar = {
        value: 10,
        options: {
            showSelectionBar: true
        }
    };
  
  }]);
          
})();