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

// example name for a beer collection
beerStash = new BeerCollection()

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
var user = {
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
	var matches = [];
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


// button interaction
$('.circle.sour').on("click", "a", function() {
	$('.sour a').addClass('depress');
 	$(this).addClass('active');
	var sourVal = $(this).text();
	user.sour = sourVal;
});


$('.circle.bitter').on("click", "a", function() {
	var bitterVal = $(this).text();
	user.bitter = bitterVal;
});

$('.circle.salty').on("click", "a", function() {
	var saltyVal = $(this).text();
	user.salty = saltyVal;
});

$('.circle.sweet').on("click", "a", function() {
	var sweetVal = $(this).text();
	user.sweet = sweetVal;
});

$('.circle-button.large').click(function() {
// call keeron's error check
	beerMatches(user, beerDiff(user, beerStash.beers));
});


// this will display all beers with there values compared to the users preference values
// just for testing purposes
// matches.forEach(function(beer) {
// 	user.overallRanking.forEach(function(taste) {
// 		console.log(taste + ": " + beer[taste] + " vs " + user[taste])
// 	});
// 	console.log(" ");
// });














