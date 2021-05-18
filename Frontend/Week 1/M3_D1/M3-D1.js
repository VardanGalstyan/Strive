
//  E X E R C I S E   O N E
// Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.

const sumOfTwo = function(num1,num2){
    if(num1=num2){
        (num1+num2)*3
    }
}



// E X E R C I S E   T W O
//Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.

const ifFifthy = function(num1, num2){
    if(num1 === 50 || num2 === 50 || num1+num2 === 50){
        true
    } 
}



// E X E R C I S E   T H R E E
//Create a function to remove a character at the specified position of a given string and return the new string.

const removeCharacter = function (string, num){

    let spliter = string.split("")
    let splicer = spliter.splice(num,1)
    let joiner = spliter.join(" ")
    return joiner
}



// E X E R C I S E   F O U R
//Create a function to find the largest of three given integers.


const largestInteger = function(int1, int2, int3){
    let array = [int1, int2, int3]
   return Math.max(...array)

}


// E X E R C I S E   F I V E
//Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

const rangeNumbers = function(num1, num2){
    if((num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) || (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)){
        return true
    } else {
        return false
    }
}




// E X E R C I S E   S I X
// Create a function that creates and returns the specified number of copies of a given string (positive number).

const numberofCopies = function(str, num){
    let copies = []
    for (let i=0 ; i < num; i++){
        copies.push(str)
    }
    return copies
}


// E X E R C I S E   S E V E N
// Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.

const startsWithString = function(value){
 if(value.startsWith("Los") || value.startsWith("New")){
     return value
 } 
}



// E X E R C I S E   E I G H T
// Create a function to calculate the sum of three elements of a given array of integers of length 3.



const sumOfIntegers = function(array){
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}




// E X E R C I S E   N I N E
// Create a function to test whether an array of integers of length 2 contains 1 or a 3. 

const intContainer = function(list, num1, num2){
    if (list.includes(num1) || list.includes[num2]){
        return true
    } else {
        return false
    }
}



// E X E R C I S E   T E N
// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

const notincluded = function(list, num1, num2){
    if (list.includes(num1) || list.includes[num2]){
        return false
    } else {
        return true
    }
}

let array = ["hon", "pearl","gravity"]

// E X E R C I S E   E L E V E N
// Create a function to find the longest string from a given array of strings.

const longestString = function(list){
    let longest = []
    for(let i = 0; i<list.length; i++){
        longest.push(list[i].length)
    }    
    return Math.max(...longest)
}



// E X E R C I S E   T W E L V E 
// Create a function to find the types of a given angle.

// Types of angles:
//   Acute angle: An angle between 0 and 90 degrees.
//   Right angle: An 90 degree angle.
//   Obtuse angle: An angle between 90 and 180 degrees.
//   Straight angle: A 180 degree angle.


const typesOfAngle = function(num){
    
    if (num > 0 || num < 90) {
       return "Acute angle" 
    } else if (num === 90){
        return "Right angel"
    } else if (num>90 || num<180){
        return "Obtuse angle"
    } else if ( num === 180){
        return "Straight angle"
    }
    
}


// E X E R C I S E   T H I R T E E N
// Create a function to find the index of the greatest element of a given array of integers

const greatestIndex = function(list){
    return list.indexOf(Math.max(...list))

}




// E X E R C I S E   F O U R T E E N
// Create a function to get the largest even number from an array of integers.

const largestEvens = function(list){
    let array = []
    for(let i = 0; i<list.length; i++){
        if(list[i] % 2 === 0) {
            array.push(list[i])
        }
    }
    return Math.max(...array)

}


// E X E R C I S E   F i F T E E N
// Create a function to check from two given integers, whether one is positive and another one is negative.

const positiveNegative = function(num1, num2){
    if(num1 < 0 && num2 > 0 || num1 > 0 && num2<0){
        return true
    } else {
        return false
    }
}



// E X E R C I S E   S I X T E E N
// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

const upperCharMania = function(value){
    let lastvalue = value.substring(3).toUpperCase()
    let firstvalue = value.substring(0,3)
    let finalValue = firstvalue+lastvalue
    if (value.length <= 3){
        return value.toUpperCase()
    } else {
        return finalValue
    }
}


// E X E R C I S E   S E V E N T E E N
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

const twoDrunkIntegers = function(num1, num2){
    let sum = num1 + num2
    if(sum > 50 || sum < 80){
        return 65
    } else {
        return 80
    }
}



// E X E R C I S E   E I G H T E E N
// Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".


const convertToString = function(num, num2){
    let array = []
    for(let i=1; i <= num; i++){
        if(num%i == 0){
            array.push(i);
        }

    }
    if(array.includes(3)){
        return "Three"
    } else if(array.includes(4)){
        return "George"
    }
}



// E X E R C I S E   N I N E T E E N
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

const returnAcronym = function(string){
    let array = string.split(" ")
    let acronym = []
    for(let i = 0; i<array.length; i++){
        if(array[i].charAt(0) == array[i].toUpperCase().charAt(0)){
            acronym.push(array[i].charAt(0))
        }
    }
    return acronym.join("")
}
