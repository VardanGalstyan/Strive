/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/
const giveMeRandom = (num) => {
	let randomArray = [];

	for (x = 0; x < num; x++) {
		randomArray.push(Math.floor(Math.random() * 10));
	}

	return randomArray;
};

const checkArray = (list) => {
	list = giveMeRandom(5);
	let totalSum = 0;
	for (x = 0; x < list.length; x++) {
		if (list[x] > 5) {
			totalSum += list[x];
		} else {
		}
	}
	return totalSum;
};

// console.log(checkArray());

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

let shoppingCart = [
	{
		price: 550,
		name: "John Nope",
		Id: 1,
		Quantity: 22,
	},
	{
		price: 310,
		name: "Ian Doe",
		Id: 2,
		Quantity: 29,
	},
	{
		price: 202,
		name: "Josh Doe",
		Id: 3,
		Quantity: 14,
	},
	{
		price: 600,
		name: "Jack Doe",
		Id: 4,
		Quantity: 36,
	},
];

const shippingCartTotal = (array) => {
	array = shoppingCart;
	let totalDue = 0;
	for (x = 0; x < array.length; x++) {
		totalDue += array[x].price;
	}
	return totalDue;
};

// console.log(shippingCartTotal());

/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

const addToShoppingCart = (items) => {
	items = shoppingCart;
	let totalItems = 0;
	let newObject = { Id: 5 };
	shoppingCart.push(newObject);
	for (x = 0; x < items.length; x++) {
		totalItems = items.length;
	}

	return totalItems;
};

// console.log(
// 	"A new Item is added the total Sum of Items in the array is",
// 	+addToShoppingCart()
// );

/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

const maxShoppingCart = (max) => {
	max = shoppingCart;
	let theMostExpesiveitem = 0;
	for (x = 0; x < max.length; x++) {
		if (max[x].price > theMostExpesiveitem) {
			theMostExpesiveitem = max[x].price;
		}
	}
	return theMostExpesiveitem;
};

// console.log(maxShoppingCart());

/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

const latestShoppingCart = (item) => {
	item = shoppingCart;
	let newArray = [];

	for (x = 0; x < item.length; x++) {
		newArray.push(item[x].Id);
	}

	return newArray.slice(-1);
};

// console.log(latestShoppingCart());

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

const loopUntil = (num) => {
	let newArray = [];
	for (i = 0; i < 3; i++) {
		let randomnum = Math.floor(Math.random() * 10);
		if (num < randomnum) {
			newArray.push(randomnum);
		} else {
			console.log("No Match sorry");
		}
	}
	return newArray;
};

// console.log(loopUntil(5));

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

let averageArray = [24, 25, 29, 12, "chocolate", 1, "milk"];

const avarage = (array) => {
	let newArray = [];
	array = averageArray;
	let sum = 0;
	for (x = 0; x < array.length; x++) {
		if (isNaN(array[x])) {
			console.log("Sorry! All the elements are string!");
		} else {
			newArray.push(array[x]);
		}
	}
	for (i = 0; i < newArray.length; i++) {
		sum += newArray[i];
	}
	return sum / 2;
};

// console.log(avarage());

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

let strings = ["sorry", "seems", "to", "be", "the", "hardest", "word"]

const logest = function(word){
	
	let splitwords = []
	let longeststring = 0
	word = strings
	for(x = 0; x < word.length; x++){
		splitwords.push(word[x].split(""))
		
	}
	for(i=0; i < splitwords.length; i++){
		if (splitwords[i].length > longeststring){
			longeststring = splitwords[i].length
		}
	}

	return longeststring
}

	// console.log("the longest string is " + logest());


/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/

const antispam = function(email){

	
	prefixArrow = []
	domainArrow = []


	email = "johndoew@gmail.com"
	let div = email.split("@")
	let prefix = div[1]
	let domain = div[0]

	for(x = 0; x < div[0].length && div[1].length; x++){
		prefixArrow.push(div[0][x])
		domainArrow.push(div[1][x])
	}

	if (prefixArrow.length(-1))	

	console.log(prefix);
	console.log(domain);
	console.log(div);
	console.log(prefixArrow);
	console.log(domainArrow);
}

console.log(antispam());

/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/


/* WRITE YOUR CODE HERE */

/* EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

/* WRITE YOUR CODE HERE */
