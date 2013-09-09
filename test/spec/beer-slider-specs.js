'use strict';
(function () {
    describe('some slider-action', function () {
        describe('clicking forward button', function () {

        	beforeEach(function() {
				indent = 0;
				numberOfClicks = 0;
				clicksMax = 0;
        	});

            it('should remove class button-faded from backward-button', function () {
            	$('.foreward-button').click();
            	expect($('.backward-button').hasClass('button-faded')).to.equal(false);
            });

            it('should add 1 to the numberOfClicks variable', function () {
            	$('.foreward-button').click();
            	expect(numberOfClicks).to.equal(1);
            });

            it('should subtract 400 ', function () {
            	var indentVal = $('.slider-box').css( "left" );
            	$('.foreward-button').click();
            	expect(indentVal).to.equal(-400);
            });
        });
    });
})();
