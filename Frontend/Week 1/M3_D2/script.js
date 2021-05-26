window.onload = () => {
    fetchResult();
    fetchResult1();
    fetchResult2(); 
}


const fetchResult = () => {
    fetch("http://www.splashbase.co/api/v1/images/latest")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        for (let i = 0; i < data.data.length; i++) {
            let result = data.data[i]
            const newCard = document.createElement("div")
            newCard.classList.add("card")
            document.querySelector(".container .row").appendChild(newCard)
            const img = document.createElement("img")
            img.classList.add("card-img-top")
            img.src = result.album.cover
            newCard.appendChild(img)

            const element = data.data[i];
            console.log(element);
            
        }
        
        
    })

    
        
}

const fetchResult1 = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth")
    .then(response => response.json())
    .then(data => {
       
        for (let i = 0; i < data.data.length; i++) {
            let result = data.data[i]
            const newCard = document.createElement("div")
            newCard.classList.add("card")
            document.querySelector(".container .row").appendChild(newCard)
            const img = document.createElement("img")
            img.classList.add("card-img-top")
            img.src = result.album.cover
            newCard.appendChild(img)

            const element = data.data[i];
            console.log(element);
            
        }
        
        
    })

    
        
}


const fetchResult2 = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        for (let i = 0; i < data.data.length; i++) {
            let result = data.data[i]
            const newCard = document.createElement("div")
            newCard.classList.add("card")
            document.querySelector(".container .row").appendChild(newCard)
            const img = document.createElement("img")
            img.classList.add("image-fluid")
            img.src = result.album.cover
            newCard.appendChild(img)

            const element = data.data[i];
            console.log(element);
            
        }
        
        
    })

    
        
}


