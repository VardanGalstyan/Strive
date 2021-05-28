        // --- Changin H1 title by pressing a button! --- //
        const myInputField = document.querySelector("#textChangerDiv input")
        const myHeaderH1 = document.querySelector("h1")
    
        const changeOnClick = () => {
            if(myInputField.value === ""){
              alert("Input is empty")
            } else {
              myHeaderH1.innerText = myInputField.value
            }

        }
        
        // ---- Adding a button to a each table ---Once the button is pressed the current target disappears//
        
        const addTableButton = document.querySelectorAll("#table tr td:last-child")
        const selectEachColumn = document.querySelectorAll("#table tr")
        const selectMyList = document.querySelector("#enrolledStudents ul")
        for(let i = 0; i<selectEachColumn.length-1; i++){
            const actionButtonPlus = document.createElement("button")
            actionButtonPlus.innerText = "+"
            actionButtonPlus.addEventListener("click", function(){
                const mynewList = document.createElement("li")
                mynewList.innerText = selectEachColumn[i + 1].innerText
                const myRemoveButton = document.createElement("button")
                myRemoveButton.innerText = "remove"
                myRemoveButton.addEventListener("click", function(event){
                    const toRemoveList = event.currentTarget.parentNode
                    toRemoveList.remove()
                    
                })
                selectMyList.appendChild(mynewList)
                mynewList.appendChild(myRemoveButton)
            })
            addTableButton[i].appendChild(actionButtonPlus)
        }

        // ----- add a submit form and when a button is pressed a table is added ---- //


