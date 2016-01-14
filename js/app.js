(function(){
	var app = angular.module('store',[]);
	app.controller('StoreController', function(){
		this.product = gem;
	});
	
	var gem = {
		name: 'Dodecahedron',
		price: 7.99,
		description: 'bla bla bla',
	}
})();