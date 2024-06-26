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
    let custom = "false";
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});

tenPercent.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    tenPercent.setAttribute("selected", "true");
    tipPercent = 10;
    let custom = "false";
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});

fifteenPercent.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    fifteenPercent.setAttribute("selected", "true");
    tipPercent = 15;
    let custom = "false";
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});

twentyPercent.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    twentyPercent.setAttribute("selected", "true");
    tipPercent = 20;
    let custom = "false";
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});

twentyFivePercent.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    twentyFivePercent.setAttribute("selected", "true");
    tipPercent = 25;
    let custom = "false";
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});

customTip.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    customTip.setAttribute("selected","true");
    custom = "true";
});





function calculateTip()  {
    total = parseFloat(document.getElementById("total").value);
    numPeople = parseFloat(document.getElementById("num-people").value);
    if (custom === "true") {return custom / numPeople };
    console.log("CalculateTip is Running");
    if (total != 0 && tipPercent !=0 && numPeople != 0) {
        console.log(total);
        console.log(tipPercent);
        console.log(numPeople);
        console.log("if statement was true");
        console.log(total * (tipPercent / 100) / numPeople);
        return  total * (tipPercent / 100) / numPeople;
    }
    else return null;
};

function calculateTotal() {
    return (total + calculateTip() ) / numPeople;
}

document.getElementById("total").addEventListener("change", () => {
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});

document.getElementById("num-people").addEventListener("change", () => {
    tipAmount.innerHTML = "$" + calculateTip();
    totalAmount.innerHTML = "$" + calculateTotal();
});