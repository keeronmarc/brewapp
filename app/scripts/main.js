function BeerCollection() {
	this.beers = [];
	this.add = function(beer) {
		this.beers.push(beer);
	}
}

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

function beerGenerator(numOfBeers) {
	var i;
	for(i = 1; i <= numOfBeers; i++) {
		beerStash.add(new Beer());
	};
};

beerStash = new BeerCollection()

var nouns = ['stout','pilsner','lager','ale','IPA','double','tripel',
'quadrupel','porter','strong ale','pale lager','dark lager','bitter','de garde'];

Adjectives:

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

pastTenseVerbs = ['brewed','crafted','consumed','made','produced'];



// var user = {
// 	overallRanking: ["sour", "salty", "sweet", "bitter"],
// 	sour:   1,
// 	bitter: 2,
// 	sweet:  3,
// 	salty:  4
// };
// var matches = [];
// var potentialMatches = beerStash.beers.slice();

// user.overallRanking.forEach(function(taste) {
// 	matches = [];
// 	potentialMatches.forEach(function(beer) {
// 		if(beer[taste] === user[taste]) {
// 			matches.push(beer);
// 		};
// 	})
// 	potentialMatches = matches.slice();
// });














