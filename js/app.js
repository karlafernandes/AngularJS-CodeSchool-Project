(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.products = gems;	
	});
	
	app.controller('GalleryController', function(){	
		this.current = 0;
		this.setCurrent = function(imageNumber){
			this.current = imageNumber || 0;
		};
	});	
	
	app.controller('PanelController', function(){
		this.tab = 1; 
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};		
	});	
	
	app.controller('ReviewController', function(){
		this.review = {}; 
	});
	
	var gems = [
	{
		name: "Dodecahedron",
		price: 7.99,
		description: "Hummm 12 sides <3",
		canPurchase: true,
		soldOut: true,
		images: ['images/12.png', 'images/12min.png', 'images/12min1.png'],
		reviews: [
		{
			stars: 5,
			body: 'I love this product!',
			author: 'me@google.com'	
		},{
			stars: 1,
			body: 'I think there are better options on the market.',
			author: 'she@google.com'	
		},]
	}, {
		name: 'Pentagonal Gem',
		price: 5.2,
		description: '5 sides still good :)',
		canPurchase: false,
		images: ['images/5.png', 'images/5min.png', 'images/5min1.png'],
		reviews: [
		{
			stars: 5,
			body: '<3 I love this product!',
			author: 'me@google.com'	
		},{
			stars: 1,
			body: 'Maybe, there are better options on the market.',
			author: 'she@google.com'	
		},]		
	}, {
		name: 'Simple Gem',
		price: 3,
		description: 'Unique detail hun :)',
		canPurchase: true,
		images: ['images/1.png', 'images/1min.png', 'images/1min1.png'],
		reviews: [
		{
			stars: 5,
			body: 'I want this product!',
			author: 'me@google.com'	
		},]		
	}, 
	]
})();