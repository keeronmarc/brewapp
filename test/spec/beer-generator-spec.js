/*global describe, it */
// 'use strict';
// (function () {
//     describe('Give it some context', function () {
//         describe('maybe a bit more context here', function () {
//             it('should run here few assertions', function () {

//             	expect(true).to.equal(true);
//             });
//         });
//     });
// })();

'use strict';
(function () {

	beforeEach(function() {
		beerStash.beers = [];
	})

	beerStash = new BeerCollection();

	describe('the BeerCollection constructor', function() {
		it('method add() should push a new beer into the beerStash.beers array', function() {

			beerStash.add(new Beer());
			expect(beerStash.beers).to.have.length(1);
		});
	});

	var beer = new Beer();

	describe('the Beer constructor', function() {
		it('should create a new beer with a sour property having a random value from 1 to 4', function() {

			var appropriateRange = false;
			if(beer.sour > 0 & beer.sour < 5) {
				appropriateRange = true;
			};
			expect(appropriateRange).to.equal(true);
		});

		it('should create a new beer with a name property that is a string', function() {

			expect(typeof(beer.name)).to.equal(typeof(" "));
		});
	});

	describe('the beerGenerator function', function() {
		it('should add the prescribed amount of beers to beerStash.beers', function() {

			beerGenerator(1000);
			expect(beerStash.beers).to.have.length(1000);
		});
	});
})();










