// Make a function that looks through an array of objects (first argument) and 
// returns an array of all objects that have matching property and value pairs 
// (second argument). Each property and value pair of the source object has to
// be present in the object from the collection if it is to be included in the 
// returned array.

function where(collection, source) {
	var arr = [];
	var key = Object.keys(source);
	var count = 0;

	for(var i = 0; i < collection.length; i++) {
		var collectionKey = Object.keys(collection[i]);

		for (var j = 0; j < collectionKey.length; j++) {
			var collectionValue = collection[i][collectionKey[j]];

			if (collectionValue === source[collectionKey[j]]) {
				count++;
			}
		}
		if (count === key.length) {
			arr.push(collection[i]);
			count = 0;
		} else {
			count = 0;
		}

	}

	return arr;

}

where([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 });