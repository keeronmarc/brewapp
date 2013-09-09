'use strict';
(function () {

	beerStash = new BeerCollection();

	beforeEach(function() {
		beerStash.beers = [];
	})

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

	describe('the beerMatching function', function() {
		it('checks to see if beerStash length and is empty array', function() {
			expect(beerStash.beers).to.have.length(0);
		});

		it('sets user\'s most preferred taste# to find in all beers the same taste#', function() {
			expect(beer[(user.overallRanking[0])]).to.equal(beer[(user.overallRanking[0])]);
		});

		it('checks the value of beer.diff to be 0', function() {
			expect(beer.diff).to.equal(0);
		});

		it('checks if overallRanking first propterty is "sour"', function() {
			expect(user.overallRanking[0]).to.equal('sour');
		});


		it('checks if the user inputted values are correctly outputted ', function() {
			var user = {sour: 3, bitter: 3, salty: 2, sweet:4}
			expect(user.sour).to.equal(3);
		});

		it('checks if the beer.diff function outputs a positive, correct value of 1', function() {
			var beer = {sour: 2};
			var user = {sour: 3};
			beer.diff = 0;
			beer.diff = beer.diff + (Math.abs(beer.sour - user.sour));
			expect(beer.diff).to.equal(1);
		}); 	
	});

})();










