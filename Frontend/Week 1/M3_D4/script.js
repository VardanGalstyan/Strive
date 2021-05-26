window.onload =() => {
    loadImages()
    myNewList("myCartList", myCardList)
}



const myCardList = []

const myNewList = function(parent, arrays){
    const ParentUList = document.querySelector("#parent")
    arrays.forEach(array => {
        ParentUList.innerHTML += `<li>${array}</li>`
    } )
    
}



const addtoList = function(event){
    const myEvent = event.target
    const currentCard = myEvent.closest(".card")
    myCardList.push(currentCard)
    currentCard.remove()
    console.log(myCardList);
}






const loadImages = () => {
    fetch("https://striveschool-api.herokuapp.com/books ")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const myBooks = data
        const bookCard = document.querySelector("main .row")
        myBooks.forEach(book => {
            bookCard.innerHTML += 
            `<div class="card m-3" style="width: 18rem;">
            <img src="${book.img}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
            <h6 class="card-text p-3">
            ${book.title}
            </h6>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  id = "addtoCard"
                  class="btn btn-sm btn-outline-secondary add-card"
                >
                  add Card
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary "
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">id: ${book.price}</small>
            </div>
          </div>
         </div>`
        })
        
        
    })
    .then(()=> {
        const addCardButton = document.querySelectorAll(".add-card")
        addCardButton.forEach(button =>{
            button.addEventListener("click", function(event){
            addtoList(event)})
        })
})
}


