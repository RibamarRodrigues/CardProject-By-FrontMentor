let outNumber = document.querySelector("#out-number")
let outName = document.querySelector("#out-name")
let outMM = document.querySelector("#out-mm")
let outYY = document.querySelector("#out-yy")
let outCvc = document.querySelector("#out-cvc")
let errorName = document.querySelector(".error-name")
let errorNumber = document.querySelector(".error-number")
let errorDate = document.querySelector(".error-date")
let errorCvc = document.querySelector(".error-cvc")
let form = document.querySelector("form")
let infoScreen = document.querySelector(".infos-screen")
let completeScreen = document.querySelector(".complete-screen")


document.querySelector("#card-name").addEventListener("input", event =>{
    let cardName = event.target

    //Write and only 27 characters in input
    if (cardName.value.length > 27){
        cardName.value = cardName.value.substring(0, cardName.value.length - 1)  
    } else{
        outName.innerHTML = cardName.value
    }

    //Validation test
    if (cardName.validity.valid == false) {
        cardName.style.border = "2px solid hsl(0, 100%, 66%)"
        errorName.style.opacity = "1"
    } else {
        cardName.style.border = "2px solid hsl(278, 68%, 11%)"
        errorName.style.opacity = "0"
    }

    //Reset card name
    if (cardName.value == ""){
        outName.innerHTML = "Jane Appleseed"
    }
})

document.querySelector("#card-number").addEventListener("input", event=>{
    let numberCard = event.target

    //Write and only 16 numbers in input
    if (numberCard.value.length > 16){
        numberCard.value = numberCard.value.substring(0, numberCard.value.length - 1)  
    } else {
        outNumber.innerHTML = numberCard.value
    }

    //Validation test
    if (numberCard.validity.valid == false) {
        numberCard.style.border = "2px solid hsl(0, 100%, 66%)"
        errorNumber.style.opacity = "1"
    } else {
        numberCard.style.border = "2px solid hsl(278, 68%, 11%)"
        errorNumber.style.opacity = "0"
    }

    //Reset card name
    if (numberCard.value == ""){
        outNumber.innerHTML = "0000 0000 0000 0000"
    }
})

document.querySelector("#card-mm").addEventListener("input", event=>{
    let cardMM = event.target

    //Write and only 2 numbers in input
    if (cardMM.value.length > 2){
        cardMM.value = cardMM.value.substring(0, cardMM.value.length - 1)  
    } else{
        outMM.innerHTML = cardMM.value
    }

    //Validation test
    if (cardMM.validity.valid == false) {
        cardMM.style.border = "2px solid hsl(0, 100%, 66%)"
        errorDate.style.opacity = "1"
    } else {
        cardMM.style.border = "2px solid hsl(278, 68%, 11%)"
        errorDate.style.opacity = "0"
    }

    //Reset card name
    if (cardMM.value == ""){
        outMM.innerHTML = "00"
    }
})

document.querySelector("#card-yy").addEventListener("input", event=>{
    let cardYY = event.target

    //Write and only 2 or 4 numbers in input
    if (cardYY.value.length > 4){
        cardYY.value = cardYY.value.substring(0, cardYY.value.length - 1)  
    } else{
        outYY.innerHTML = cardYY.value
    }

    //Validation test
    if (cardYY.validity.valid == false) {
        cardYY.style.border = "2px solid hsl(0, 100%, 66%)"
        errorDate.style.opacity = "1"
    } else {
        cardYY.style.border = "2px solid hsl(278, 68%, 11%)"
        errorDate.style.opacity = "0"
    }

    //Reset card name
    if (cardYY.value == ""){
        outYY.innerHTML = "00"
    }
})

document.querySelector("#card-cvc").addEventListener("input", event=>{
    let cardCvc = event.target

    //Write and only 2 or 4 numbers in input
    if (cardCvc.value.length > 3){
        cardCvc.value = cardCvc.value.substring(0, cardCvc.value.length - 1)  
    } else{
        outCvc.innerHTML = cardCvc.value
    }

    //Validation test
    if (cardCvc.validity.valid == false) {
        cardCvc.style.border = "2px solid hsl(0, 100%, 66%)"
        errorCvc.style.opacity = "1"
    } else {
        cardCvc.style.border = "2px solid hsl(278, 68%, 11%)"
        errorCvc.style.opacity = "0"
    }

    //Reset card name
    if (cardCvc.value == ""){
        outCvc.innerHTML = "000"
    }
})

form.addEventListener("submit", (event)=>{
    event.preventDefault()

    infoScreen.classList.add("complete")
    completeScreen.classList.add("complete")
})

form.addEventListener("reset", (event)=>{
    event.preventDefault()

    document.location.reload(true);
})
