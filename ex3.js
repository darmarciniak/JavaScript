let word = prompt("CrAzY tExT - Podaj słowo a my je przerobimy za 0 zł");
for (let i = 0; i < word.length; i++) {
	if (i % 2 === 0) {
		console.log(word[i].toUpperCase());
	} else if (i % 2 !== 0) {
		console.log(word[i].toLowerCase());
	} else {
		console.log("Błąd");
	}
}
