// JS Arrays // Objs
// NOTE: Exercises array is defined at the end of this file!

const movies = [
	{
		Title: "The Lord of the Rings: The Fellowship of the Ring",
		Year: "2001",
		imdbID: "tt0120737",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
	},
	{
		Title: "The Lord of the Rings: The Return of the King",
		Year: "2003",
		imdbID: "tt0167260",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
	},
	{
		Title: "The Lord of the Rings: The Two Towers",
		Year: "2002",
		imdbID: "tt0167261",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
	},
	{
		Title: "Lord of War",
		Year: "2005",
		imdbID: "tt0399295",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
	},
	{
		Title: "Lords of Dogtown",
		Year: "2005",
		imdbID: "tt0355702",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
	},
	{
		Title: "The Lord of the Rings",
		Year: "1978",
		imdbID: "tt0077869",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
	},
	{
		Title: "Lord of the Flies",
		Year: "1990",
		imdbID: "tt0100054",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
	},
	{
		Title: "The Lords of Salem",
		Year: "2012",
		imdbID: "tt1731697",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
	},
	{
		Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
		Year: "1984",
		imdbID: "tt0087365",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
	},
	{
		Title: "Lord of the Flies",
		Year: "1963",
		imdbID: "tt0057261",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
	},
	{
		Title: "The Avengers",
		Year: "2012",
		imdbID: "tt0848228",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
	},
	{
		Title: "Avengers: Infinity War",
		Year: "2018",
		imdbID: "tt4154756",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
	},
	{
		Title: "Avengers: Age of Ultron",
		Year: "2015",
		imdbID: "tt2395427",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
	},
	{
		Title: "Avengers: Endgame",
		Year: "2019",
		imdbID: "tt4154796",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
	},
];

// E X E R C I S E   E L E V E N

const deleteProp = function (val1, val2) {
	let string = val2;
	return delete val1[string];
};

// E X E R C I S E   T W E L V E

const olderMovie = function () {
	let newArray = [];
	let min = Number.MAX_VALUE;
	for (x = 0; x < movies.length; x++) {
		newArray.push(movies[x].Year);
	}
	for (i = 0; i < newArray.length; i++) {
		if (newArray[i] < min) {
			min = newArray[i];
		}
	}

	return min;
};

// E X E R C I S E   T H I R T E E N

const countMovies = function () {
	let arrayOfMovies = [];
	for (x in movies) {
		arrayOfMovies.push(movies[x].Title);
	}
	return arrayOfMovies.length;
};

// E X E R C I S E   F O U R T E E N

const onlyTheTitles = function () {
	let arrayOfMovies = [];
	for (x in movies) {
		arrayOfMovies.push(movies[x].Title);
	}
	return arrayOfMovies;
};

// E X E R C I S E   F I V T E E N

const onlyInThisMillennium = function () {
	let millenialArray = [];
	for (x = 0; x < movies.length; x++) {
		if (movies[x].Year >= 2000) {
			millenialArray.push(movies[x].Title);
		}
	}
	return millenialArray;
};

// E X E R C I S E   S I X T E E N

const getMovieById = function (id) {
	let ids = [];
	for (x = 0; x < movies.length; x++) {
		if (id === movies[x].imdbID) ids.push(movies[x].Title);
	}
	return ids;
};

// E X E R C I S E   S I X T E E N

const sumAllTheYears = function () {
	let millenialArray = [];
	let sum = 0;
	for (x = 0; x < movies.length; x++) {
		sum += parseInt(movies[x].Year);
	}
	return sum;
};

// E X E R C I S E   E I G H T E E N

const searchByTitle = function (string) {
	let Titles = [];

	for (x = 0; x < movies.length; x++) {
		if (movies[x].Title.indexOf(string) !== -1) {
			Titles.push(movies[x]);
		}
	}

	return Titles;
};

// E X E R C I S E   T W E N T Y

const searchAndDivide = function (string) {
	let Obj = {
		match: [],
		unmatch: [],
	};

	for (x = 0; x < movies.length; x++) {
		if (movies[x].Title.indexOf(string) !== -1) {
			Obj.match += movies[x].Title;
		} else {
			Obj.unmatch += movies[x].Title;
		}
	}
	return Obj;
};

const removeIndex = function (num) {
	let x = movies.splice(num, 1);
	return movies;
};

// E X E R C I S E   T W E N T Y  O N E

const halfTree = function (num) {
	for (x = 0; x < num; x++) {
		let tree = ""

		for (i = 0; i <= x + 1; i++) {
			tree += "*"
		}
		console.log(tree);
	}
};

console.log(halfTree(4));

// E X E R C I S E   T W E N T Y  T W O

const tree = function(n){
	let newTree

	for (i = 1; i <= n; i++) {
		//Prints trailing spaces
		newTree = "*"

		// for (j = i; j < n + 1; j++) {
			
		// }

		//Prints the pyramid pattern
		for (j = 1; j <= 2 * i - 1; j++) {
			newTree += "*"
		}

		// console.log("<br>");
	}
	console.log(newTree);
}

console.log(tree(3));
	
// E X E R C I S E   T W E N T Y  T H R E E

function isPrime(num) {
	for (i = 2; i < num; i++) if (num % i === 0) return false;
	return num > 1;
}
