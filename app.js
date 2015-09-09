(function(){
  var gems = [
    {
    name: 'Azurite'
    ,price: 2
    ,image:'https://upload.wikimedia.org/wikipedia/commons/9/97/Azurite-Malachite-59275.jpg'
    ,canPurchase: true
    ,description:'It is so pretty'
    ,soldOut: false
    },
    {
    name: 'Black Crystal'
    ,price: 112.95
    ,image:"http://40.media.tumblr.com/90f35cb0129ad6d07fbf1dfba0efca54/tumblr_mov4r366681s5jjtzo1_500.png"
    ,canPurchase: true
    ,description:'It is so shiny.'
    ,soldOut: false
    }
  ];

  var app = angular.module('store', [ ]);
  app.controller('StoreController', function() {
    this.products = gems
  })
  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    }

    this.isSelected = function(tab){
      return tab === this.tab
    }
  })
})();
