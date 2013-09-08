// How it works
// 1) User sorts favorite flavors for beer (out of 4) - form properties/values as object literal (my beer ranking)
// 2) User rates individual flavors for beer flavor (out of 4 scale) - form properties/values as object literal (flavor rating)
// 3) my_beer_ranking(flavor1:bitter ,flavor2:sour 1,flavor3: salty,flavor4:sweet) passed into an array (empty array initialized b/f) 
// 4) flavor rating(sour: 3, bitter: 1, salty:4, sweet: 3) passed into an array (empty array initialized b/f)  
// 5) Map-reduce fct takes (my_beer_ranking)


// 1) order they sort, pushed into this array
	var newBeers = [];
	var allbeers = listofbeers.slice();
	var userCriteria = {
			newUserRanking: ['sour', 'sweet', 'salty', 'bitter'],
			sour:4, 
			sweet:1, 
			salty:4, 
			bitter:4
		}
	
// specs 
// if newBeers, all
// verfiy usercriteria[newUserRanking]
// 

//cycles through 4 times, individually, runs to top 
	userCriteria.newUserRanking.forEach(function (taste) {
			//overall focus taste criteria 1-4 
			// search through all beers
			newBeers = [];
			allbeers.forEach(function (beer) {
				// individual beers represeted by beer
				if (beer[taste] === 3 & userCriteria[taste] >= 2) {
					newBeers.push(beer);
				}
				else if (beer[taste] === userCriteria[taste]) {
					newBeers.push(beer); 
				}
				// else if returns only the criteria you wanted
				// if (beer[taste] === userCriteria[taste]) {
				// 	newBeers.push(beer);
				// }
				// else  {
				// 	beer.diff = beer.diff + (Math.abs(beer[taste] - userCriteria[taste]))
				// 	// 2 - 1 = 1 gets the beer difference
				// }
			//push every beer into empty array
			})
			//runs through the second ranking at this point
			// loops through a 1000, and set var all beers
			var allbeers = newBeers.slice();
			//restarts newBeers to zero so that 
	});

beerStash.beers.forEach(function (beer) {
	if(beer.diff === 1) {
		newBeers.push(beer);
	}
}

//gives difference values for each beer and keeps track into var 
//







































