const inputTxt = document.getElementById("input");
const elementTxt = document.getElementById("elements");
const sumTxt = document.getElementById("sum");
const highTxt = document.getElementById("high");
const lowTxt = document.getElementById("low");

let arr = [];
let sum = 0;


function updateDisplay() {
    
    elementTxt.innerHTML = arr.join("<br>");


    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sumTxt.innerHTML = sum;


    let highest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }
    highTxt.innerHTML = highest;


    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    lowTxt.innerHTML = lowest;
}


function concatenate() {
    const inputValue = inputTxt.value.trim();
    
    
    if (inputValue !== "" && !isNaN(inputValue)) {
        const num = parseInt(inputValue);
        arr.push(num); 
        inputTxt.value = ""; 
        updateDisplay(); 
    } else {
        alert("invalid");
    }
}


function clearEntries() {
    arr = []; 
    inputTxt.value = ""; 
    updateDisplay(); 
}
