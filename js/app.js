(function(){
	var app = angular.module('store',[]);
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	var gems = [
	{
		name: "Dodecahedron",
		price: 7.99,
		description: "Hummm 12 sides <3",
		canPurchase: true,
		soldOut: true,
		images: ['images/12.png', 'images/12min.png', 'images/12min1.png']
	}, {
		name: 'Pentagonal Gem',
		price: 5.2,
		description: '5 sides still good :)',
		canPurchase: false,
		images: ['images/5.png', 'images/5min.png', 'images/5min1.png']
	}, {
		name: 'Simple Gem',
		price: 3,
		description: 'Unique detail hun :)',
		canPurchase: true,
		images: ['images/1.png', 'images/1min.png', 'images/1min1.png']	
	}, 
	]
})();