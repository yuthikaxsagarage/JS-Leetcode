let steps;
let path = "UDDDUDUU";

let pathArray = path.split("");

let arrayM = [];
pathArray.map((x) => {
	if (x === "U") {
		arrayM.push(1);
	} else {
		arrayM.push(-1);
	}
});
let x = 0;
let y = 0;
let xx = [0];
let valleys = [];

for (i = 0; i < arrayM.length; i++) {
	x = x + arrayM[i];
	xx.push(x);
}

for (i = 0; i < xx.length; i++) {
	if (xx[i] == 0 && xx[i - 1] == -1) {
		valleys.push(1);
	}
}

console.log(valleys.length);
