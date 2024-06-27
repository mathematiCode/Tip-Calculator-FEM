// html elements to retrieve info from the user

let total = parseFloat(document.getElementById("total").value);
const fivePercent = document.getElementById("5-percent");
const tenPercent = document.getElementById("10-percent");
const fifteenPercent = document.getElementById("15-percent");
const twentyPercent = document.getElementById("20-percent");
const twentyFivePercent = document.getElementById("25-percent");
const customTip = document.getElementById("custom-tip");
let numPeople = parseFloat(document.getElementById("num-people").value);

let tipPercent; 
let custom = "false";

// html elements to display info to the user 
const tipAmount = document.getElementById("variable-tip-amount");
const totalAmount = document.getElementById("variable-total-amount");

fivePercent.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    fivePercent.setAttribute("selected", "true");
    tipPercent=5;
    custom = "false";
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});

tenPercent.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    tenPercent.setAttribute("selected", "true");
    tipPercent = 10;
    custom = "false";
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});

fifteenPercent.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    fifteenPercent.setAttribute("selected", "true");
    tipPercent = 15;
    custom = "false";
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});

twentyPercent.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    twentyPercent.setAttribute("selected", "true");
    tipPercent = 20;
    custom = "false";
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});

twentyFivePercent.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    twentyFivePercent.setAttribute("selected", "true");
    tipPercent = 25;
    custom = "false";
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});

customTip.addEventListener("change", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    customTip.setAttribute("selected","true");
    custom = "true";
    customTipAmount = parseFloat(customTip.value);
    console.log("Custom TIp is " + customTipAmount);
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});


customTip.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    customTip.setAttribute("selected","true");
    custom = "true";
    customTipAmount = parseFloat(customTip.value);
    console.log("Custom TIp is " + customTipAmount);
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});





function calculateTip()  {
    total = parseFloat(document.getElementById("total").value);
    numPeople = parseFloat(document.getElementById("num-people").value);
    if (custom === "true") {
        customTipAmount = parseFloat(customTip.value);
         return customTipAmount / numPeople;
        };
    console.log("custom is false");
    console.log("CalculateTip is Running");
    if (total  && tipPercent && numPeople) {
        console.log(total);
        console.log(tipPercent);
        console.log(numPeople);
        console.log("if statement was true");
        console.log(total * (tipPercent / 100) / numPeople);
        return Math.round(total * (tipPercent / 100) / numPeople * 100)/100;
    }
    else return null;
};

function calculateTotal() {
    return Math.round(((total/numPeople) + calculateTip())*100)/100; 
}

document.getElementById("total").addEventListener("change", () => {
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});

document.getElementById("num-people").addEventListener("change", () => {
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});
