// jquery didn't have a patch so I made one
// $.patch = function (targetUrl, json, callback) {
// 	$.ajax({
// 	    url : targetUrl,
// 	    data : json,
// 	    type : 'PATCH',
// 	    complete : callback
// 	});
// }

var apiKey = '5cbccbe9';
var urlBase = 'https://hero-merge.herokuapp.com/' + apiKey + '/heroes';

window.onload = function() {
	loadHeroes();
}

function loadHeroes() {
	$.get(urlBase, parseHeroes);
}

function parseHeroes(JSONArray) {	
	var container = document.getElementById('superheroContainerDiv');
	container.innerHTML = '';
	var i = 0, j = 0;
	for (var index in JSONArray) {
		container.appendChild(buildHeroDiv(i, j, JSONArray[index]));
		i++;
		if (i > 3) {
			j++;
			i = 0;
		}
	}	
}

function buildHeroDiv (i, j, hero) {
	var result = document.createElement('div');
	result.className = 'superHeroDiv';
	result.onclick = onHeroDivClick;

	var name = document.createElement('span');
	name.innerHTML = hero.hero_name;
	name.className = 'superHeroNameSpan';
	result.appendChild(name);

	result.style.top = (40 * j) + "%";
	result.style.left = (25 * i) + "%";

	jQuery(result).hide();
	jQuery(result).fadeIn(150);

	return result;
}

function onNewHeroClick() {	
	$('#pageDiv').animate({
			'top':'-100%'
	}, 400, 'easeInOutExpo');
}

function onMergeHeroesClick() {
	$('#pageDiv').animate({
			'top':'-200%'
	}, 600, 'easeInOutExpo');
}

function onBackClick() {	
	$('#pageDiv').animate({
			'top':'0%'
	}, 400, 'easeInOutExpo');
}

var heroesSelectedCount = 0;
var lastHeroSelectedDiv;
function onHeroDivClick() {
	// this is selected, unselect it
	if (this.className.indexOf('selected') > -1) {
		heroesSelectedCount--;
		this.className = 'superHeroDiv';
	// this is unselected, select it
	} else {
		// select this always
		this.className = 'superHeroDiv selected';
		// if we already have 2 selected heroes, unselect the last one
		if (heroesSelectedCount == 2) 
			lastHeroSelectedDiv.className = 'superHeroDiv';
		lastHeroSelectedDiv = this;
		// keep track of how many heroes we have selected
		heroesSelectedCount = Math.min(heroesSelectedCount + 1, 2);
	}

	$('#mergeHeroesButton').prop("disabled", heroesSelectedCount != 2);
}

function onNewHeroSubmitClick() {
	var newHero = {};
	var attributes = {};
	var powers = [];
	var weaknesses = [];

	attributes["intelligence"] = $("#intelligenceInput").val();
	attributes["strength"] = $("#strengthInput").val();
	attributes["speed"] = $("#speedInput").val();
	attributes["durability"] = $("#durabilityInput").val();
	attributes["power"] = $("#powerInput").val();
	attributes["combat"] = $("#combatInput").val();

	// get powers
	var powerNodes = $('#newPowersDiv').children();
	powerNodes.each(function(index, entry) {
		powers.push(entry.innerHTML)
	});

	// get weaknesses
	var weaknessNodes = $('#newWeaknessesDiv').children();
	weaknessNodes.each(function(index, entry) {
		weaknesses.push(entry.innerHTML)
	});

	// assemble it all
	newHero["hero_name"] = $("#newNameInput").val();
	newHero["real_name"] = $("#newAlterEgoInput").val();
	newHero["gender"] = $("#newGenderForm").val();
	newHero["attributes"] = attributes;
	newHero["weaknesses"] = weaknesses;

	// send it along
	$.post(urlBase, newHero, loadHeroes);
}

function onNewPowerClick() {
	// get the value out of the characteristic input
	var power = $("#superCharacteristicInput").val();
	// make a new power div
	var powerDiv = buildCharacteristicDiv(power);
	// append to newPowersDiv
	$('#newPowersDiv').append(powerDiv);
}

function onNewWeaknessClick() {
	// get the value out of the characteristic input
	var power = $("#superCharacteristicInput").val();
	// make a new power div
	var powerDiv = buildCharacteristicDiv(power);
	// append to newPowersDiv
	$('#newWeaknessesDiv').append(powerDiv);
}

function buildCharacteristicDiv(power) {	
	var result = document.createElement('div');
	result.innerHTML = power;
	result.className = 'characteristic';
	result.style.color = '#ffffff';
	return result;
}

function submitHandler () {
	return false;
}