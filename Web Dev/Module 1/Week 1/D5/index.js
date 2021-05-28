


const dice = function () {
	let num = Math.floor(Math.random() * 6);

	return num;
};

// E X E R C I S E   T W O
    
const whoIsBigger = function (num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
};

// E X E R C I S E   T H R E E

const splitMe = function (word) {
	word = word.split(" ");

	return word;
};

// E X E R C I S E   F O U R

const deleteOne = function (str, bool) {
    
	if (bool === true) {    
		return str = str.slice(1)
	} else {
		return str = str.slice(0, str.length - 1)
	}
};


// E X E R C I S E   F I V E

let task = ("I have 3 sisters and 2 brothers")

const onlyLetters = function(task){
    
    let newArray = []
    let splitter = task.split(" ")
    for(x = 0; x < splitter.length; x++){
        if(isNaN(splitter[x])){
            newArray.push(splitter[x])
        }      
    } let joiner = newArray.join(" ")
    
    return joiner

}


// E X E R C I S E   S I X



// E X E R C I S E   S E V E N

const	whatDayIsIt = function(){
	let day = new Date()
	x = day.getDay()
	let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
	return weekDays[x]
}


// E X E R C I S E   E I G H T

const rollTheDices = function(num){
	let values = {
	value: [],
	}

	let sum = 0

	for (x=0; x < num; x++){
		values.value.push(dice())
		
	}

	for (i=0; i < values.value.length; i++){
		sum  += values.value[i]
	}
	values.sums = sum

	return values
	
}

// E X E R C I S E   N I N E

// function getNumberOfDays(start) { // (m/d/year)
const howManyDays = function(date){
	const dateSince = new Date(date)
	const dateNow = new Date()
	
//     // One day in milliseconds
	const oneDay = 1000 * 60 * 60 * 24

//     // Calculating the time difference between two dates
	let diffInTime = dateNow.getTime() - dateSince.getTime()

//     // Calculating the no. of days between two dates
	let diffInDays = Math.round(diffInTime / oneDay)

	return diffInDays
}


// E X E R C I S E   T E N

const isTodayMyBirthday = function(date){

}

