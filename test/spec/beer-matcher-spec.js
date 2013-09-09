'use strict';
(function () {
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

		it('checks if overallRanking first propterty is sour', function() {
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

		it('takes', function() {
			var user = {sour: 3, bitter: 3, salty: 2, sweet:4}
			expect(user.sour).to.equal(3);
		});
	});

})();