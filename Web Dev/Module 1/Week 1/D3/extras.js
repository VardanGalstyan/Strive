// E X E R C I S E  O N E

let array = [1, 2, 3, 4, 5];

for (x = 0; x < array.length / 2; x++) {
	let temp = array[x];
	// console.log(temp);
	// console.log(array[x]);
	array[x] = array[array.length - x - 1];
	console.log(array[x]);
	array[array.length - x - 1] = temp;
}

console.log(array);

// E X E R C I S E  T W O

let MaxNumber = 0;

for (x = 0; x < array.length; x++) {
	if (MaxNumber < array[x]) {
		MaxNumber = array[x];
	}
}
// console.log(MaxNumber);

// E X E R C I S E  T H R E E

let MinNumber = Number.MAX_VALUE;

for (x = 0; x < array.length; x++) {
	if (MinNumber > array[x]) {
		MinNumber = array[x];
	}
}

// console.log(MinNumber);

// E X E R C I S E  F O U R

let evenNumbers = [];

for (x = 0; x < array.length; x++) {
	if (array[x] % 2 === 0) {
		evenNumbers.push(array[x]);
	}
}
// console.log(evenNumbers);

// E X E R C I S E  F I V E

let oddNumbers = [];

for (x = 0; x < array.length; x++) {
	if (array[x] % 2 !== 0) {
		oddNumbers.push(array[x]);
	}
}
// console.log(oddNumbers);

// E X E R C I S E  S I X

let aName = "Jomolungma";
let splitName = aName.split("");
let vowelsArray = [];

for (x = 0; x < splitName.length; x++) {
	if ("aeiouAEIOU".indexOf(splitName[x]) === -1) {
		vowelsArray.push(splitName[x]);
	}
}

let joinaName = vowelsArray.join("");
// console.log(joinaName);

// E X E R C I S E  S E V E N

let numerics = ["I", 5, 3, "dogs", 1, "cat"];
let Numerics = [];

for (x = 0; x < numerics.length; x++) {
	if (typeof numerics[x] === "number") {
		let additions = numerics[x] + 1;
		Numerics.push(additions);
	} else {
		Numerics.push(numerics[x]);
	}
}

for (x = 0; x < numerics.length; x++) {
	if (isNaN(numerics[x])) {
		Numerics.push(numerics[x]);
	} else {
		let additions = numerics[x] + 1;
		Numerics.push(additions);
	}
}

// E X E R C I S E  E I G H T

let newstring = "strive is great";
let splitnewstring = newstring.split(" ");
let stringlength = [];

for (x = 0; x < splitnewstring.length; x++) {
	stringlength.push(splitnewstring[x].length);
}
// console.log(stringlength);
