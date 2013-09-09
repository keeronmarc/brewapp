'use strict';
(function () {
    describe('some slider-action', function () {
        describe('clicking forward button', function () {

        	beforeEach(function() {
			    indent = 0;
			    numberOfClicks = 0;
			    clicksMax = 20;
        	});

            it('should remove class button-faded from backward-button', function () {
            	$('.foreward-button').click();
            	expect($('.backward-button').hasClass('button-faded')).to.equal(false);
            });

            it('should add 1 to the numberOfClicks variable', function () {
                clicksMax = 20;

                // $('.foreward-button').click();
                if(numberOfClicks < clicksMax) {
                    indent = indent - 400;
                    numberOfClicks += 1;
                    slideEitherDirection(); 
                };

            	expect(numberOfClicks).to.equal(1);
            });
        });
    });
})();
