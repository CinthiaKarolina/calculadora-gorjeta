let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let currentPercetage = 0

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

function receiveBillValue() {
    bill = billInput.valueAsNumber

    calculate()
}

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeopleValue)

function receiveNumberOfPeople() {
    numberOfPeople = numberOfPeopleInput.valueAsNumber

    calculate()
}

function receiveTipPercentage(value) {
    let buttonPercetage = document.querySelector()
}

function calculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        console.log("calcular")
    } else {
        console.log("ainda não é possivel calcular")
    }
}