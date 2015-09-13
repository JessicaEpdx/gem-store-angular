(function(){
  var app = angular.module('reviews', [ ]);
  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review)
      this.review = {};
    }
  });

  app.directive('reviewForm', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/review-form.html'
    };
  });

})();
