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
	this.bitter = Math.floor(Math.random() * 4) + 1;
	this.salty = Math.floor(Math.random() * 4) + 1;
	this.sweet = Math.floor(Math.random() * 4) + 1;
	var adverb = adverbs[(Math.floor(Math.random() * adverbs.length))];
	var adjective = adjectives[(Math.floor(Math.random() * adjectives.length))];
	var noun = nouns[(Math.floor(Math.random() * nouns.length))];
	this.name = "the " + adverb + " " + adjective + " " + noun;
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
	sour:   4,
	bitter: 2,
	salty:  3,
	sweet:  3,
	// just setting the tastes to this array for use in the rank funciton
	overallRanking: ["sour", "bitter", "salty", "sweet"],
	rank: function() {
		// this will sort the users preferences and rank them
		// in order of favorite to least favorite based on
		// the rank they gave each taste
		this.overallRanking.sort(function(a, b) {
			return user[b] - user[a];
		});
	}
};

var matches = [];
user.overallRanking.forEach(function(taste) {
	beerStash.beers.forEach(function(beer) {
		beer.diff = beer.diff + (Math.abs(beer[taste] - user[taste]));
	});
});

beerStash.beers.forEach(function(beer) {
	if(beer.diff === 2) {
		if(user[(user.overallRanking[0])] === beer[(user.overallRanking[0])]) {
			matches.unshift(beer)
		}
		else {matches.push(beer)};
	};
});

beerStash.beers.forEach(function(beer) {
	if(beer.diff === 0) {
		matches.unshift(beer);
	};
});


// this will display all beers with there values compared to the users preference values
// just for testing purposes
// matches.forEach(function(beer) {
// 	user.overallRanking.forEach(function(taste) {
// 		console.log(taste + ": " + beer[taste] + " vs " + user[taste])
// 	});
// 	console.log(" ");
// });













