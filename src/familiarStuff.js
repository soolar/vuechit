export default {
	showHaiku(fam) {
		let haikuWindow = window.open("desc_familiar.php?which=" + fam.id, "familiar", "height=200,width=400")
		if(haikuWindow.focus) {
			haikuWindow.focus()
		}
	},

	notes(fam, compact) {
		let res = "";
		if(fam.drop) {
			res += fam.dropsToday + "/" + fam.dropsLimit + " " + (fam.dropsLimit === 1 ? fam.drop.name : fam.drop.plural);
		}
		switch(fam.type) {
			case "Robortender": {
				let lepLev = 1;
				let roboDrinks = window.props._roboDrinks.split(",");
				for(let i = 0; i < roboDrinks.length; ++i) {
					let drink = roboDrinks[i];
					switch(drink) {
						case "literal grasshopper": res += ", +3 musc/com"; break;
						case "eighth plague": res += ", +5 musc/com"; break;
						case "double entendre": res += ", 0.5xFairy"; break;
						case "single entendre": res += ", 1xFairy"; break;
						case "Phlegethon": res += ", hot damage"; break;
						case "reverse Tantalus": res += ", hot damage!"; break;
						case "Siberian sunrise": res += ", cold damage"; break;
						case "elemental caipiroska": res += ", cold damage!"; break;
						case "mentholated wine": res += ", candy"; break;
						case "Feliz Navidad": res += ", candy!"; break;
						case "low tide martini": res += ", aquatic"; break;
						case "Bloody Nora": res += ", aquatic!"; break;
						case "shroomtini": res += ", +3 mox/com"; break;
						case "moreltini": res += ", +5 mox/com"; break;
						case "morning dew": res += ", mp"; break;
						case "hell in a bucket": res += ", mp!"; break;
						case "whiskey squeeze": res += ", junk"; break;
						case "Newark": res += ", junk!"; break;
						case "great old fashioned": res += ", spooky damage"; break;
						case "R'lyeh": res += ", spooky damage!"; break;
						case "Gnomish sagngria": res += ", phys damage"; break;
						case "Gnollish sangria": res += ", phys damage!"; break;
						case "vodka stinger": res += ", stench damage"; break;
						case "vodka barracuda": res += ", stench damage!"; break;
						case "extremely slippery nipple": res += ", hp"; break;
						case "Mysterious Island iced tea": res += ", hp!"; break;
						case "piscatini": lepLev = 1.5; break;
						case "drive-by shooting": lepLev = 2; break;
						case "Churchill": res += ", sleaze damage"; break;
						case "gunner's daughter": res += ", sleaze damage!"; break;
						case "soilzerac": res += ", +3 myst/com"; break;
						case "dirt julep": res += ", +5 myst/com"; break;
						case "London frog": res += ", 0.5xPotato"; break;
						case "Simepore slime": res += ", 1xPotato"; break;
						case "nothingtini": res += ", delevels"; break;
						case "Phil Collins": res += ", delevels!"; break;
					}
				}
				res = lepLev + "xLep" + res;
				break;
			}
			case "Frumious Bandersnatch": {
				let runawaysUsed = window.props._banderRunaways
				let runawaysAvailable = Math.floor((fam.weight + window.fams.weightAdjustment) / 5)
				res = 'Runaways: ' + runawaysUsed + '/' + runawaysAvailable
				if(!compact) {
					let knowOde = true // TODO: Check skills when they're... there
					let haveOde = true // TODO: Check effects when they're... there
					if(knowOde && !haveOde) {
						res += ' (<a class="change" title="cast 1 The Ode to Booze" href="#">Need Ode</a>)'
					}
					else if(haveOde) {
						res += ' (Ready!)'
					}
					else {
						res = '<s title="You Don\'t have access to Ode :(">' + res + ' (Need Ode)</s>'
					}
				}
				break;
			}
		}
		return (res === "") ? false : res;
	}
}
