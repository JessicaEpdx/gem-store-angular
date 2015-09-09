(function(){
  var gem = { name: 'Azurite', price: 2.95, description:'It is so pretty' };
  var app = angular.module('store', [ ]);
  app.controller('StoreController', function() {
    this.product = gem
  })
})();
