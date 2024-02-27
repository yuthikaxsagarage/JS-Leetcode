function rodOffcut(lengths) {
	let rodsAtEachRound = [];
	let a = true;
	while (lengths.length > 0) {
		rodsAtEachRound.push(lengths.length);
		let min = Math.min.apply(Math, lengths);
		lengths = lengths.filter((len) => len != min);
		lengths = lengths.map((len) => len - min);
	}
	return rodsAtEachRound;
}
