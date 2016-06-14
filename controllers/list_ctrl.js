(function(){
  
  'use strict';
  
  angular
      .module('layoutPage')
      .controller('ListCtrl', ['$scope', 'constant',
          
  function($scope, c) {
    
    var self = this;
    
    this.initValues = {
      
        min: c.DFLT_SLIDER_MIN,
        max: c.DFLT_SLIDER_MAX,
        
        val : function(){
          return ~~((this.max + this.min) / 2);
        }
        
    };
    
    this.value = function(val){
      
      console.log(val);
      
    };
    
    this.sliderSq = {
      
        options : {
            min: self.initValues.min,
            max: self.initValues.max,
            value:self.initValues.val(),
            sliderValue:self.initValues.val(),
            step: c.DFLT_STEP,
            tooltip: 'show',
            handle: 'round',
            name : 'squereLine',
            orientation: 'horizontal',
            enabled: true,
            naturalarrowkeys: true,
            ngDisabled: false,
            suffix : 'm\xB2 ',
        },
        
        methods : {
            toSquere : function (value) {
              return value + self.sliderSq.options.suffix;
            },
            slide : function (value) {
              self.sliderSq.options.value = value;
              self.value(value);
            },
            getLabelBegin: function () {
              return self.sliderSq.options.min + self.sliderSq.options.suffix;
            },
            getLabelEnd: function () {
              return self.sliderSq.options.max + self.sliderSq.options.suffix;
            },
            setValue : function(value){
              self.sliderSq.options.sliderValue = value;
              self.value(value);
            }
        },
      
    };
    
  }]);
          
})();