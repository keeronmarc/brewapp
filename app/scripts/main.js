var matches = [];
var indent = 0;
var numberOfClicks = 0;
var clicksMax = 0;

$(document).ready(function(){

	$('.modal-button').click(function(){
		$('.modal').addClass('hidden');
		$('.modal').hide();
		// $('.modal').addClass('hide');
	});

	$('.big-button-container').click(function(){
		$('.next-page').addClass('visible');
	});


// beer collection constructor
function BeerCollection() {
	this.beers = [];
	this.add = function(beer) {
		this.beers.push(beer);
	}
}

// beer constructor for random beers
function Beer() {
	this.sour = Math.floor(Math.random() * 4) + 1;
	// Math.floor(Math.random() * num)) gives you a random integer number between 0 and 
	// num, including 0, but not including num. So, it might give you 3
	this.bitter = Math.floor(Math.random() * 4) + 1;
	this.salty = Math.floor(Math.random() * 4) + 1;
	this.sweet = Math.floor(Math.random() * 4) + 1;
	var adverb = adverbs[(Math.floor(Math.random() * adverbs.length))];
	var adjective = adjectives[(Math.floor(Math.random() * adjectives.length))];
	var noun = nouns[(Math.floor(Math.random() * nouns.length))];
	this.name = "the " + adverb + " " + adjective + " " + noun;
	this.diff = 0;
}

// gengerate specified number of random beers
function beerGenerator(numOfBeers) {
	var i;
	for(i = 1; i <= numOfBeers; i++) {
		beerStash.add(new Beer());
	};
};

var nouns = ['stout','pilsner','lager','ale','IPA','double','tripel',
'quadrupel','porter','strong ale','pale lager','dark lager','bitter','de garde'];

var adjectives = ['acclaimed','adept','adored','aged','altruistic','amazing','ancient','austere',
'beloved','biodegradable','bogus','boring','bright','bubbly','carefree','celebrated','coarse',
'colorful','crafty','creepy','crooked','cuddly','cultured','dark','essential','exalted','exotic',
'decent','definitive','delectable','dimwitted','disgusting','dry','elegant','enlightened','adventurous',
'fabulous','fantastic','fickle','fine','flawless','genuine','glamorous','gregarious','ideal',
'idolized','illustrious','impeccable','incomparable','jaunty','jolly','jovial','joyful','joyous',
'jubilant','kaleidoscopic','legitimate','lovely','magnificent','moist','mysterious','notable',
'nutritious','old-fashioned','organic','outstanding','palatable','puzzling','quintessential',
'radiant','rare','rich','robust','salty','scholarly','scrawny','second-hand','serpentine',
'shabby','shady','shimmering','simplistic','slushy','sophisticated','sparkling','spectacular','spiffy',
'stimulating','stupendous','sweet','tame','tart','tempting','terrific','testy','thorough','beautiful',
'thorny','thunderous','timely','treasured','tremendous','trusty','truthful','turbulent','avaricious'];

var adverbs = ['abnormally','accidentally','amazingly','assuredly','astonishingly','beautifully','bitterly',
'blissfully','brilliantly','chiefly','colorfully','dastardly','delightfully','evenly','exceedingly',
'exceptionally','extremely','famously','genuinely','hauntingly','indubitably','ironically',
'irrefutably','magically','majestically','mysteriously','rarely','reponsibly','righteously','seldom',
'significantly','skillfully','subtly','tremendously','unanimously','valiantly','victoriously',
'vivaciously','widely','worthily','yearly','zealously','zestfully','zestily'];

// beer matching: a joe and keeron collaboration
user = {
	sour:   0,
	bitter: 0,
	salty:  0,
	sweet:  0,
	// just setting the tastes to this array for use in the rank funciton
	overallRanking: ["sour", "bitter", "salty", "sweet"],
	rank: function() {
		// this will sort the users preferences and rank them
		// in order of favorite to least favorite based on
		// the rank they gave each taste
		this.overallRanking.sort(function(a, b) {
			return user[b] - user[a];
		});
	},
	errorRank: function() {
		errorTaste = false;
		overallRanking.forEach(function (taste) {
			if (user[taste] === 0) {
				var errorTaste = true;
			}
		});
			console.log("error returns true");	
			return errorTaste;
	}
};

function beerDiff(user, allBeers) {
	user.overallRanking.forEach(function(taste) {
		allBeers.forEach(function(beer) {
			beer.diff = beer.diff + (Math.abs(beer[taste] - user[taste]));
		});
	});
	return allBeers;
};

function beerMatches(user, allBeers) {
	allBeers.forEach(function(beer) {
		if(beer.diff === 1) {
			if(user[(user.overallRanking[0])] === beer[(user.overallRanking[0])]) {
				matches.unshift(beer)
			}
			else {matches.push(beer)};
		};
	});

	allBeers.forEach(function(beer) {
		if(beer.diff === 0) {
			matches.unshift(beer);
		};
	});

	return matches
};

beerStash = new BeerCollection()

// beerMatches(user, beerDiff(user, beerStash.beers)).forEach(function(beer) {
// 	user.overallRanking.forEach(function(taste) {
// 		console.log(taste + ": " + beer[taste] + " vs " + user[taste])
// 	});
// 	console.log(" ");
// });

// beerStash = new BeerCollection()
// 	user.sour = Math.floor(Math.random() * 4) + 1;
// 	user.bitter = Math.floor(Math.random() * 4) + 1;
// 	user.salty = Math.floor(Math.random() * 4) + 1;
// 	user.sweet = Math.floor(Math.random() * 4) + 1;
// 	user.rank()
// 	beerGenerator(1000);

// function button_moves (taste,that) {
// 	$(taste).addClass('depress');
//  	$(taste).removeClass('active');
//  	$(that).addClass('active');
// }

function button_moves (taste, that) {
	$(taste).addClass('depress');
  	$(taste).removeClass('active');
  	$(that).addClass('active');
  	$(that).removeClass('depress');
}

// button interaction
$('.container-o-circles.sour').on("click", "a", function() {	
	button_moves('.sour a', this);
	var sourVal = $(this).text();
	user.sour = sourVal;
});


$('.container-o-circles.bitter').on("click", "a", function() {
	button_moves('.bitter a', this);
	var bitterVal = $(this).text();
	user.bitter = bitterVal;
});

$('.container-o-circles.salty').on("click", "a", function() {
	button_moves('.salty a', this);
	var saltyVal = $(this).text();
	user.salty = saltyVal;
});

$('.container-o-circles.sweet').on("click", "a", function() {
	button_moves('.sweet a', this);
	var sweetVal = $(this).text();
	user.sweet = sweetVal;
});

$('.circle-button.large').click(function() {
// // call keeron's error check
var checkrows = $('.container-o-circles a');
	if ($('.active').length < 4) {
		$('.errormsg').append('<p>You Might Want to Check Again!!!</p>');
		return false;
	}

	beerMatches(user, beerDiff(user, beerStash.beers));
	beerGenerator(1000);
	// user.rank() will rank users preferences base on value user chose
	user.rank();
	// the foundation of the program. searching through all beers for matches
	matches = beerMatches(user, beerDiff(user, beerStash.beers));
	// clicksMax is used when forward or back button is clicked
	clicksMax = matches.length - 1;
	// +1 to allow for display: inline-block extra margin madness
	var sliderWidth = (matches.length + 1) * 400;
	// sets width so that all beer matches can fit in div.slider-box
	$('.slider-box').css( "width", sliderWidth );
	// appends divs to .slider-box to display all the matches
	displayMatches();
});

// this will display all beers with there values compared to the users preference values
// just for testing purposes
// matches.forEach(function(beer) {
// 	user.overallRanking.forEach(function(taste) {
// 		console.log(taste + ": " + beer[taste] + " vs " + user[taste])
// 	});
// 	console.log(" ");
// });

function displayMatches() {
	// some crazy append actieeeeon
	matches.forEach(function(beer) {
		var beerBoxAndName = '<div class="beer-box"><span class="beer-name">' + beer.name + '</span>';
		var boxOPrefsAndFlavs = '<div class="box-o-preferences"><div class="flavor-box">';
		var tastes = '<span class="sour">sour:</span><span class="bitter">bitter:</span><span class="salty">salty:</span><span class="sweet">sweet:</span></div>';
		var flaverUser = '<div class="flavor-box user"><span class="sour">' + beer.sour + '</span><span class="bitter">' + beer.bitter + '</span><span class="salty">' + beer.salty + '</span><span class="sweet">' + beer.sweet + '</span></div></div>';
		var image = '<img class="bottle" src="images/bottle.png"></div>';
		$('.slider-box').append(beerBoxAndName + boxOPrefsAndFlavs + tastes + flaverUser + image);
	});
};

// forward and back buttons. this will allow clicking through array of matches.
// also dims out forward or back button if it is not meant to be clicked by user.
// uses a few variables declared at the top of main.js.
$('.foreward-button').click(function () {
	if(numberOfClicks < clicksMax) {
		indent = indent - 400;
		numberOfClicks += 1;
		$('.backward-button').removeClass('button-faded')
		$('.foreward-button').removeClass('button-faded')
		console.log(numberOfClicks);
		$('.slider-box').animate({'left': indent}, 200);  
	};
	if (numberOfClicks === clicksMax){
		$('.foreward-button').addClass('button-faded');
	}; 
});

$('.backward-button').click(function () {
	console.log('back');
	if (numberOfClicks !== 0) {
		indent = indent + 400;
		numberOfClicks -= 1;
		console.log(numberOfClicks);
		$('.backward-button').removeClass('button-faded')
		$('.foreward-button').removeClass('button-faded')
		$('.slider-box').animate({'left': indent}, 200); 
	};
	if (numberOfClicks === 0){
		$('.backward-button').addClass('button-faded')
	};      
});



}); 
