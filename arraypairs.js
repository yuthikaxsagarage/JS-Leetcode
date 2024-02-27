const items = [0, 1, 0, 1, 1, 1, 1, 2, 3, 5, 5, 6, 8];

const count = items.reduce(
	(accumulator, item) => {
		return {
			...accumulator,
			[item]: (accumulator[item] || 0) + 1,
		};
	},
	{} // initial value for the accumulator
);

let y = 0;
Object.values(count).map((item) => {
	if (item === 1) {
		return;
	}
	if (item % 2 == 0) {
		const x = item / 2;
		y = y + x;
		console.log(x);
	}
	if (item % 2 == 1) {
		const a = parseInt(item / 2);
		y = y + a;
	}
});

console.log(count);
console.log(y);
