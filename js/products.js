(function(){
	var app = angular.module('store-products', [ ]);
	app.directive('productTitle', function() {
		return {
			restrict: 'E', // type of directive Element
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productPanel', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.tab = 1; 
				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};		
			},
			controllerAs: 'panels'
		};		
	});

	app.directive("productSpecs", function() {
		return {
			restrict: 'A', // type of directive Attribute
			templateUrl: "product-specs.html"
		};
	});
})();