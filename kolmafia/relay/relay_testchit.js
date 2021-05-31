const {
	write,
	print,
	fileToBuffer,
	favoriteFamiliars,
} = require('kolmafia');

function addAll(arr, type, name)
{
	arr.push(name);
	arr.push('.all = [');
	arr.push(name);
	arr.push('["');
	arr.push(type.all().join('"], ' + name + '["'));
	arr.push('"]];\n');
}

function writeItems(arr)
{
	arr.push('var items = {\n');
	Item.all().forEach(function(it)
	{
		arr.push('\t["');
		arr.push(it.toString());
		arr.push('"]: {name:"');
		arr.push(it.toString());
		arr.push('"},\n');
	});
	arr.push('}\n');
	addAll(arr, Item, "items");
}

function writeFams(arr)
{
	arr.push('var fams = {\n');
	Familiar.all().forEach(function(fam)
	{
		arr.push('\t["');
		arr.push(fam.toString());
		arr.push('"]: {name:"');
		arr.push(fam.toString());
		arr.push('", image:"');
		arr.push(fam.image);
		arr.push('"},\n');
	});
	arr.push('}\n');
	addAll(arr, Familiar, "fams");
	// add favorites
	arr.push('fams.favorites = [fams["');
	for(fam in favoriteFamiliars())
	{
		arr.push(fam);
		arr.push('"], fams["');
	}
	arr.push('"]];\n')
}

function main()
{
	print("Doing stuff");
	let toInsert = [ '\n\t\t<script>\n' ];
	writeItems(toInsert);
	writeFams(toInsert);
	toInsert.push('\t\t</script>');
	let page = fileToBuffer('vuechit/index.html');
	let where = page.indexOf('</title>') + '</title>'.length;
	page = page.slice(0, where) + toInsert.join('') + page.slice(where);

	write(page);
}

module.exports.main = main;
