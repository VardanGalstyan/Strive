const board = document.getElementById("table")
const array = []
const num = document.getElementById("number").value

const createBingoBoard = function(){
    
    for(let x = 0; x<76; x++){
        let newdiv = document.createElement("div")
        newdiv.classList.add("bingolist")
        newdiv.innerText = x+1
        board.appendChild(newdiv)
        array.push(x+1)
    }
}

const randomArray = function(array){
    const random = Math.floor(Math.random()*array.length)
    const randomNum = array.splice(random,1)
    return randomNum
}


const randomNumber = function(array){
    const random = randomArray(array)
    const text = document.querySelector("header h5")
    text.innerText = `The Random Number is ${random}`
    document.querySelectorAll(".bingolist")[random-1].style.backgroundColor = "red"
    
}   

const createUserBoard = function(){
    const usersBoard = document.getElementById("userboard")
    const inputValue = document.getElementById("number").value
    for (x=0; x<parseInt(inputValue); x++){
        const newPlayer = document.createElement("div")
        newPlayer.innerText = `Player ${parseInt(inputValue[x])}`
        newPlayer.classList.add("players")
            for(i=0; i<24; i++){
                let range = randomArray(array)
                newPlayer.innerHTML += `<div class='cell'>${range}</div>`
            }
        usersBoard.appendChild(newPlayer)
    }


}


window.onload = function (){
    createBingoBoard()
    const genButton = document.querySelector(".generate button")
    genButton.addEventListener("click", function(){
        randomNumber(array)
    })


};