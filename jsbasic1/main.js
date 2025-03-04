const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt1 = document.getElementById("sum");
const resultTxt2 = document.getElementById("dif");
const resultTxt3 = document.getElementById("pro");
const resultTxt4 = document.getElementById("quo");

let sum = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt1.innerHTML = sum;

        dif = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        resultTxt2.innerHTML = dif;

        pro = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt3.innerHTML = pro;

        quo = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt4.innerHTML = quo;
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt1.innerHTML = "";
    resultTxt2.innerHTML = "";
    resultTxt3.innerHTML = "";
    resultTxt4.innerHTML = "";

    sum = 0;
    dif = 0;
    pro = 0;
    quo = 0;

}

