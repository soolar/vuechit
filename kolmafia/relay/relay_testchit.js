const {
	write,
	print,
	fileToBuffer,
	favoriteFamiliars,
	toInt,
	haveFamiliar,
	isUnrestricted,
	myBjornedFamiliar,
	myEnthronedFamiliar,
	myFamiliar,
	weightAdjustment,
	equippedItem,
	visitUrl,
	myPath,
	familiarWeight,
} = require('kolmafia');

var pageSource;

function addAll(arr, type, name)
{
	arr.push(name);
	arr.push('.all = [');
	arr.push(name);
	arr.push('["');
	arr.push(type.all().join('"], ' + name + '["'));
	arr.push('"]];\n');
}

function addField(arr, name, val, last, noQuotes)
{
	const type = typeof(val);
	if(type != "string" && type != "number" && type != "boolean")
	{
		print("Bad type: " + type + " for " + name, "red");
	}
	arr.push(name);
	arr.push(': ');
	if(type == "string" && !noQuotes)
	{
		arr.push('"');
	}
	arr.push(val.toString());
	if(type == "string" && !noQuotes)
	{
		arr.push('"');
	}
	if(!last)
	{
		arr.push(', ');
	}
}

function writeItems(arr)
{
	arr.push('var items = {\n');
	Item.all().forEach(function(it)
	{
		arr.push('\t["' + it + '"]: {');
		addField(arr, "name", it.toString());
		addField(arr, "image", it.image, true);
		arr.push('},\n');
	});
	arr.push('}\n');
	addAll(arr, Item, "items");
	arr.push('items.equipped = {');
	const equipSlots = ["hat", "back", "shirt", "weapon", "offhand", "pants", "acc1", "acc2", "acc3", "familiar"];
	for(let i = 0; i < equipSlots.length; ++i)
	{
		let slot = equipSlots[i];
		addField(arr, slot, 'items["' + equippedItem(Slot.get(slot)) + '"]', i == equipSlots.length - 1, true);
	}
	arr.push('}\n');
}

function writeFams(arr)
{
	arr.push('var fams = {\n');
	Familiar.all().forEach(function(fam)
	{
		arr.push('\t["' + fam + '"]: {');
		addField(arr, "type", fam.toString());
		addField(arr, "image", fam.image);
		addField(arr, "id", toInt(fam));
		addField(arr, "name", fam.name);
		addField(arr, "experience", fam.experience);
		addField(arr, "weight", familiarWeight(fam));
		addField(arr, "dropName", fam.dropName);
		addField(arr, "owned", haveFamiliar(fam));
		addField(arr, "unrestricted", isUnrestricted(fam), true);
		arr.push('},\n');
	});
	arr.push('}\n');
	addAll(arr, Familiar, "fams");
	// add favorites
	arr.push('fams.favorites = [');
	for(fam in favoriteFamiliars())
	{
		arr.push('fams["' + fam + '"],');
	}
	arr.push('];\nfams.active = fams["' + myFamiliar() + '"];\n');
	arr.push('fams.bjorned = fams["' + myBjornedFamiliar() + '"];\n');
	arr.push('fams.enthroned = fams["' + myEnthronedFamiliar() + '"];\n')
	arr.push('fams.weightAdjustment = ' + weightAdjustment() + ';\n');

	// Mafia doesn't track familiar name in QT
	if(myPath() == "Quantum Terrarium")
	{
		let re = /<a target=mainpane href="familiar.php" class="familiarpick"><b><font size=2>(.+?)<\/a><\/b>/;
		let res = re.exec(pageSource);
		if(res)
		{
			arr.push('fams.active.name = "' + res[1] + '";\n');
		}
	}
}

function main()
{
	print("Doing stuff");
	pageSource = visitUrl("charpane.php", false);
	let toInsert = [ '\n\t\t<script>\n' ];
	writeItems(toInsert);
	writeFams(toInsert);
	toInsert.push('\t\t</script>');
	let page = fileToBuffer('vuechit/index.html');
	let where = page.indexOf('</title>') + '</title>'.length;
	print("You want me to join an array with " + toInsert.length + " elements?!");
	page = page.slice(0, where) + toInsert.join('') + page.slice(where);

	write(page);
}

module.exports.main = main;
