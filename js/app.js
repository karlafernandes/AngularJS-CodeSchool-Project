(function(){
	var app = angular.module('store',['store-products']);
	/*
	$http({method:'GET',url:'js/products.json'});
	$http.get('js/products.json',{apiKey:''myApiKey});
	.sucess() / .error()

	app.controller('StoreController', ['$http','$log', function($http,$log){
		this.products = products.json;	
	} ]);	
	*/
	app.controller('StoreController', ['$http', function($http){
		var store = this;	
		store.products = [ ];
		
		$http.get('js/products.json').success(function(data){
		store.products = data;
		});
	}]);
	
	app.controller('GalleryController', function(){	
		this.current = 0;
		this.setCurrent = function(imageNumber){
			this.current = imageNumber || 0;
		};
	});	
	
	app.controller('ReviewController', function(){
		this.review = {}; 
		
		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {}; 
		};
	});
	
})();