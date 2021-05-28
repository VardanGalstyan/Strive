const daysInThisMonth = () => {
     let now = new Date() 
     let lastDateofTheMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)
     let numberOfDays = lastDateofTheMonth.getDate()
     return numberOfDays
}

let appointments = []

const showAppointments = function(index){
    let appointmentsToShow = appointments[index]
    let appointmentList = document.getElementById("appointment-list")
        appointmentList.innerHTML = ""
    for(let i = 0; i < appointmentsToShow.length; i++){
        let listItem = document.createElement("li")
        listItem.innerText = appointmentsToShow[i]
        appointmentList.appendChild(listItem)
    }   

    document.getElementById("appointments").style.display = "block";
}

window.onload = function() {
    let numberOfDays = daysInThisMonth()

    let calendar = document.getElementById("calendar")
    for(let i=0; i<numberOfDays; i++){
        let cell = document.createElement("div")
        cell.classList.add("day")
        calendar.appendChild(cell)
        cell.innerHTML += `<h3>${i+1}</h3>`

        appointments[i] = []

        cell.onclick = function(event){
            let alreadySelectedElement = document.querySelector(".selected")

            if(alreadySelectedElement){
                alreadySelectedElement.classList.remove("selected")
            }

           event.currentTarget.classList.add("selected")
           let clickOnADayDiv = document.getElementById("meeting-day")
           clickOnADayDiv.innerText = i + 1

           let todayAppointments = appointments[i]
           if(todayAppointments.length > 0){
               showAppointments(i)
            } else {
                console.log("No events for today!");
                document.getElementById("appointments").style.display = "none"
            }

        }



    }

}

const saveMeeting = function(){
    let meetingDay = document.getElementById("meeting-day").innerText
    let meetingTime = document.getElementById("meeting-time").value
    let meetingName = document.getElementById("meeting-name").value

    let eventString = `${meetingTime}  ${meetingName}`
    let positionInAppointment = parseInt(meetingDay) - 1
    appointments[positionInAppointment].push(eventString)
    console.log(appointments);

    showAppointments(meetingDay - 1)
}


