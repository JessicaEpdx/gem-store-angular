(function(){
  var app = angular.module('products', [ ]);
  app.directive('tabNavigation', function(){
    return{
      restrict: 'E',
      templateUrl: 'tab-navigation.html'
    };
  });

  app.directive('photoPanel', function(){
    return{
      restrict: 'E',
      templateUrl: 'photo-panel.html'
    };
  });
  app.directive('reviewPanel', function(){
    return{
      restrict: 'E',
      templateUrl: 'review-panel.html'
    };
  });
  app.directive('descriptionPanel', function(){
    return{
      restrict: 'E',
      templateUrl: 'description-panel.html'
    };
  });

  app.directive('panels', function(){
    return{
      restrict: 'E',
      templateUrl: 'panels.html',
      controller: function(){
        this.tab = 1;
        this.hiddenForm = true;
        this.selectTab = function(setTab){
          this.tab = setTab;
        };
        this.isSelected = function(tab){
          return tab === this.tab
        };
        this.showForm = function(){
          this.hiddenForm = false;
        };
        this.hideForm = function(){
          console.log("panel")
          this.hiddenForm = true;
        };
      },
      controllerAs: 'panel'

    };
  });

  app.directive('productCatalog', function(){
    return{
      restrict: 'E',
      templateUrl: 'product-catalog.html'
    };
  });
})();
