(function(){
  var gems = [
    {
    name: 'Azurite'
    ,price: 2
    ,images:[
      'https://upload.wikimedia.org/wikipedia/commons/9/97/Azurite-Malachite-59275.jpg'
      ,"http://img.irocks.com/2014-updates/J14/J1479a.jpg"
      ,"http://www.russbehnke.com/pix/azurite.jpg"
    ]
    ,canPurchase: true
    ,description:'It is so pretty'
    ,soldOut: false
    ,reviews: [
      {stars: 3, body:"This was pretty cool but the pictures look better.", author:"Jennifer@gmail.com", createdOn: 1441904621812}
      ,{stars: 1, body:"WORST EVER.", author:"BugsyBoi@whatevs.com", createdOn: 1441904621812}
      ,{stars: 5, body:"I don't know what these people are talking about, it is GREAT.", author:"FranGonzo@aol.com", createdOn: 1441904621812}

    ]
    },
    {
    name: 'Black Crystal'
    ,price: 112.95
    ,images:
      ["http://40.media.tumblr.com/90f35cb0129ad6d07fbf1dfba0efca54/tumblr_mov4r366681s5jjtzo1_500.png"
        ,"http://www.thecrystalhealer.co.uk/WebRoot/Eclipse/Shops/thecrystalhealer/4818/EE43/1607/DE03/1355/5299/FE61/F90D/tourmaline_black.jpg"
      ]
    ,canPurchase: true
    ,description:'It is so shiny.'
    ,soldOut: false
    ,reviews: [
      {stars: 5, body:"My girlfriend loved it!!!", author:"JaysThaMan@gmail.com", createdOn: 1441904621812}
      ,{stars: 5, body:"Just beautiful, thanks.", author:"Ilovejay@highschool.com", createdOn: 1441904621812}
    ]
    }
  ];

  var app = angular.module('store', [ ]);
  app.controller('StoreController', function() {
    this.products = gems
  })
  app.controller('PanelController', function(){
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
  })
  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review)
      this.review = {};
    }
  })

  app.directive('reviewForm', function(){
    return{
      restrict: 'E',
      templateUrl: 'review-form.html'
    };
  });
  app.directive('tabNavigation', function(){
    return{
      restrict: 'E',
      templateUrl: 'tab-navigation.html'
    };
  });
  app.directive('descriptionPanel', function(){
    return{
      restrict: 'E',
      templateUrl: 'description-panel.html'
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
  app.directive('navbar', function(){
    return{
      restrict: 'E',
      templateUrl: 'navbar.html'
    };
  });
})();
