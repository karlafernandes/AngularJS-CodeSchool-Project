(function(){
	var app = angular.module('store',[]);
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	var gems = [
	{
		name: 'Dodecahedron',
		price: 7.99,
		description: 'Hummm 12 sides <3',
		canPurchase: true,
		soldOut: true
	}, {
		name: 'Pentagonal Gem',
		price: 5.99,
		description: '5 sides still good :)',
		canPurchase: false,
	}, {
		name: 'Simple Gem',
		price: 3.99,
		description: 'Unique detail hun :)',
		canPurchase: true,
	}, 
	]
})();