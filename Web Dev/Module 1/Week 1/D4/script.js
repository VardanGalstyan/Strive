// M _ 1   D A Y  F O U R

// E X E R C I S E  O N E

const area = (l1, l2) => l1 * l2;

// E X E R C I S E  T W O

const crazySum = (l1, l2) => {
	if (l1 === l2) {
		return (l1 + l2) * 3;
	} else {
		return l1 + l2;
	}
};

// E X E R C I S E  T H R E E

const crazyDiff = (l1) => {
	if (l1 > 19) {
		return (l1 - 19) * 3;
	} else {
		return l1 - 19;
	}
};

// E X E R C I S E  F O U R

const boundary = (n) => ((n >= 20 && n <= 100) || n === 400 ? true : false);

// E X E R C I S E  F I V E

const strivify = (num) => (num !== "Strive" ? "Strive" + num : num);

// E X E R C I S E  S I X

const check3and7 = (n) =>
	n % 3 === 0
		? "Multiple of Three"
		: n % 7 === 0
		? "Multiple of Seven"
		: "Non of them are!";

console.log(check3and7(52));

// E X E R C I S E  S E V E N

const reverseString = (word) => word.split("").reverse("").join("");
console.log(reverseString("strive"));

// E X E R C I S E  E I G H T

const upperFirst = (word) => word.split("")[0].toUpperCase() + word.slice(1);
// const upperFirst = (word) => word.charAt.toUpperCase() + word.slice(1);

// E X E R C I S E  N I N E

const cutString = (word) => word.slice(1, -1);

// E X E R C I S E  T E N

const giveMeRandom = (num) => {
	let randomArray = [];

	for (x = 0; x < num; x++) {
		randomArray.push(Math.floor(Math.random() * 10));
	}

	return randomArray;
};

console.log(giveMeRandom(5));