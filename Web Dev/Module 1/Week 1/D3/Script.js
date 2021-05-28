// M _ 1   D A Y  T H R E E

// E X E R C I S E  O N E

let anewArray = [1, 2, 3, 4, 5];

// E X E R C I S E  T W O

let newObject = {
	Name: "Vardan",
	Surname: "Galstyan",
	Email: "Vardan.galstyan@aol.com",
	Age: "33",
};

// E X E R C I S E  T H R E E

newObject.drivingLicese = true;

// E X E R C I S E  F O U R

delete newObject.Age;

// E X E R C I S E  F I V E

let secondObject = Object.assign({}, newObject);
secondObject.Email = "vagl_7@yahoo.com";
console.log(newObject.Email === secondObject.Email);

// E X E R C I S E  S I X

let totalShoppingCart = 56;
let shipping = 10;
let totalCost;

totalShoppingCart >= 50
	? (totalCost = totalShoppingCart)
	: (totalCost = shipping + totalShoppingCart);

// E X E R C I S E  S E V E N

let blackFriday = 0.8;

totalShoppingCart >= 50
	? (totalCost = totalShoppingCart * blackFriday)
	: (totalCost = (shipping + totalShoppingCart) * blackFriday);

console.log(Math.floor(totalCost));

// E X E R C I S E  E I G H T

let car1 = {
	brand: "bmw",
	model: "x5",
	licensePlate: "15551",
};

let car2 = Object.assign({}, car1);
car2.licensePlate = "15552";
let car3 = Object.assign({}, car1);
car3.licensePlate = "15553";
let car4 = Object.assign({}, car1);
car4.licensePlate = "15554";
let car5 = Object.assign({}, car1);
car5.licensePlate = "15555";

console.log(car1, car2, car3, car4, car5);

// E X E R C I S E  N I N E

let carsForRent = [car1, car2, car3, car4, car5];

// E X E R C I S E  T E N

console.log(carsForRent.slice(1, 4));

// E X E R C I S E  E L E V E N

console.log(car1.brand, car1.licensePlate);
console.log(typeof car1.brand, typeof car1.licensePlate);

// E X E R C I S E  T W E L V E

let carsForSale = [car1, car2, car3];

// E X E R C I S E  T H I R T E E N

console.log(carsForSale);
