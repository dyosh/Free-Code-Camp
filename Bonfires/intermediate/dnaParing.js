// The DNA strand is missing the pairing element. 
// Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

function pair(str) {
 	var dna = str.split("");
 	var pairedUp = [];

 	for(var i = 0; i < dna.length; i++) {
 		if (dna[i] === 'G') {
 			pairedUp.push(['G','C']);
 		} else if (dna[i] === 'A') {
 			pairedUp.push(['A','T']);
 		} else if (dna[i] === 'C') {
 			pairedUp.push(['C','G']);
 		} else if (dna[i] === 'T') {
 			pairedUp.push(['T','A']);
 		}
 	}

	return pairedUp;
}


pair("ATCGA");