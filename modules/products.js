(function(){
  var app = angular.module('products', [ ]);
  app.directive('tabNavigation', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/tab-navigation.html'
    };
  });

  app.directive('photoPanel', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/photo-panel.html'
    };
  });
  app.directive('reviewPanel', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/review-panel.html'
    };
  });
  app.directive('descriptionPanel', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/description-panel.html'
    };
  });

  app.directive('panels', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/panels.html',
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
      templateUrl: 'views/product-catalog.html'
    };
  });
})();
