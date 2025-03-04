const inputTxt = document.getElementById("input");
const elementTxt = document.getElementById("elements");
const sumTxt = document.getElementById("sum");
const highTxt = document.getElementById("high");
const lowTxt = document.getElementById("low");

let arr = [];
let sum = 0;


function updateDisplay() {
    
    elementTxt.innerHTML = arr.join("<br>");

    
    sum = arr.reduce((acc, num) => acc + num, 0);
    sumTxt.innerHTML = sum;

    
    const highest = Math.max(...arr);
    highTxt.innerHTML = highest;

    
    const lowest = Math.min(...arr);
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
        alert("Please enter a valid number.");
    }
}


function clearEntries() {
    arr = []; 
    inputTxt.value = ""; 
    updateDisplay(); 
}
