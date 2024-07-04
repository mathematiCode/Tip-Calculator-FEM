// html elements to retrieve info from the user

let total = parseFloat(document.getElementById("total").value);
const fivePercent = document.getElementById("5-percent");
const tenPercent = document.getElementById("10-percent");
const fifteenPercent = document.getElementById("15-percent");
const twentyPercent = document.getElementById("20-percent");
const twentyFivePercent = document.getElementById("25-percent");
const customTip = document.getElementById("custom-tip");
const customDollarSign = document.getElementById("custom-dollar-sign");
const numPeopleError = document.getElementById("num-people-error");
const totalError = document.getElementById("total-error");
let numPeople = parseFloat(document.getElementById("num-people").value);

let tipPercent; 
let custom = false;
let isPossible = false;
let customTipAmount;

// html elements to display info to the user 
const tipAmount = document.getElementById("variable-tip-amount");
const totalAmount = document.getElementById("variable-total-amount");
const calculationError = document.getElementById("calculation-error-message");

// Setting initial values to display on load
tipAmount.innerHTML = "$0.00";
totalAmount.innerHTML = "$0.00";
document.getElementById("num-people").value = 1;



function calculateTip()  {  // Calculates the tip per person
    total = parseFloat(document.getElementById("total").value); // stores most up to date value for the total bill
    numPeople = parseFloat(document.getElementById("num-people").value); // stores the most up to date value for numPeople
    if (isPossible == false) { calculationError.style.display = "block"}
    else { calculationError.style.display = "none"};
    if (custom === "true" && numPeople>0) { // checks if the user selected a custom tip
        customTipAmount = parseFloat(customTip.value); 
         return customTipAmount / numPeople; // uses the tip as a $ amount not a percent
     };
    if (total >= 0  && tipPercent && numPeople) { // Checks if all inputs are truthy
        return (total * (tipPercent / 100) / numPeople); // uses the tipPercent as a percent
    }
    else return 0.00; // displays $0 if any inputs are falsey
};

function calculateTotal() { // Calculates the total per person
    if ((total >=  0 || (tipPercent && total) || customTipAmount) && numPeople>0) {
        if (total == 0) { return calculateTip()};
        return ((total/numPeople) + calculateTip()); 
    }
    else return 0.00; // displays $0 if any inputs are falsey or negative
}

// Event listeners that ensure that only one tip percent is selected at a time and updates the tip and total 
fivePercent.addEventListener("click", () => {
    isPossible = true; 
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false")); // Reverts formatting for all %'s 
    customTip.value = ""; // Clears custom input field
    fivePercent.setAttribute("selected", "true"); // Applies formatting to the selected button
    tipPercent=5; // Sets the percent so the tip and total are calculated correctly
    custom = "false"; // Ensures that calculateTip uses 5 as the % not a $ amount
    tipAmount.innerHTML = "$" + (calculateTip().toFixed(2)); // Updates the tip amount
    totalAmount.innerHTML = "$" + (calculateTotal().toFixed(2)); //Updates the total amount
});

tenPercent.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    customTip.value = "";
    customDollarSign.style.display = "none";
    tenPercent.setAttribute("selected", "true");
    tipPercent = 10;
    custom = "false";
    tipAmount.innerHTML = "$" + (calculateTip().toFixed(2)); // Updates the tip amount
    totalAmount.innerHTML = "$" + (calculateTotal().toFixed(2)); //Updates the total amount
});

fifteenPercent.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    customTip.value = "";
    customDollarSign.style.display = "none";
    fifteenPercent.setAttribute("selected", "true");
    tipPercent = 15;
    custom = "false";
    tipAmount.innerHTML = "$" + (calculateTip().toFixed(2)); // Updates the tip amount
    totalAmount.innerHTML = "$" + (calculateTotal().toFixed(2)); //Updates the total amount
});

twentyPercent.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    customTip.value = "";
    customDollarSign.style.display = "none";
    twentyPercent.setAttribute("selected", "true");
    tipPercent = 20;
    custom = "false";
    tipAmount.innerHTML = "$" + (calculateTip().toFixed(2)); // Updates the tip amount
    totalAmount.innerHTML = "$" + (calculateTotal().toFixed(2)); //Updates the total amount
});

twentyFivePercent.addEventListener("click", () => {
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    customTip.value = "";
    customDollarSign.style.display = "none";
    twentyFivePercent.setAttribute("selected", "true");
    tipPercent = 25;
    custom = "false";
    tipAmount.innerHTML = "$" + (calculateTip().toFixed(2)); // Updates the tip amount
    totalAmount.innerHTML = "$" + (calculateTotal().toFixed(2)); //Updates the total amount
});

// customTip.addEventListener("input", () => {
//     document.querySelectorAll('.percent[selected="true"]')
//     .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
//     customTip.setAttribute("selected","true");
//     custom = "true";
//     customTipAmount = parseFloat(customTip.value);
//     console.log("Custom TIp is " + customTipAmount);
//     tipAmount.innerHTML = "$" + (calculateTip().toFixed(2)); // Updates the tip amount
//     totalAmount.innerHTML = "$" + (calculateTotal().toFixed(2)); //Updates the total amount
// });


customTip.addEventListener("click", () => {  // deselects all percent buttons and selects custom button
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    customTip.setAttribute("selected","true");
    customDollarSign.style.display = "block";
});

customTip.addEventListener("input", () => {
    customTipAmount = parseFloat(customTip.value); // stores tip amount the user input
    if  (customTip.value < 0) { 
        isPossible = false;
        calculationError.style.display = "block";
        return; 
    }
    else {
        calculationError.style.display = "block";
        custom = "true"; // Ensures that the value stored is used as a $ amount not a percent 
        isPossible = true; 
        tipAmount.innerHTML = "$" + (calculateTip().toFixed(2)); // Updates the tip amount
        totalAmount.innerHTML = "$" + (calculateTotal().toFixed(2)); //Updates the total amount
    }
});


// These event listeners update outputs when any input is changed 

document.getElementById("total").addEventListener("input", () => {
    total = parseFloat(document.getElementById("total").value);
    if (total < 0) { 
        totalError.innerHTML = "Can't be negative";
        isPossible = false;
        calculationError.style.display = "block";
    }
    else {
     isPossible = true;
     calculationError.style.display = "none";
    totalError.innerHTML = "";
    tipAmount.innerHTML = "$" + (calculateTip().toFixed(2)); // Updates the tip amount
    totalAmount.innerHTML = "$" + (calculateTotal().toFixed(2)); //Updates the total amount
    }
});

document.getElementById("num-people").addEventListener("input", () => {
    numPeople = parseFloat(document.getElementById("num-people").value);
    if (numPeople < 0 ) {  
        numPeopleError.innerHTML = "Can't be negative"; 
        isPossible = false;
        calculationError.style.display = "block";
    }
   else if (numPeople == 0 ) { 
    numPeopleError.innerHTML = "Can't be 0";
    isPossible = false;
    calculationError.style.display = "block";

    }
   else  if (numPeople % 1  == 0) { 
    isPossible = true;
    numPeopleError.innerHTML = "";
    calculationError.style.display = "none";
    tipAmount.innerHTML = "$" + (calculateTip().toFixed(2)); // Updates the tip amount
    totalAmount.innerHTML = "$" + (calculateTotal().toFixed(2)); //Updates the total amount
   }
   else if (numPeople % 1 > 0) { // Checks if it is a decimal with by checking for a non-zero remainder. 
    numPeopleError.innerHTML = "Must be a whole number"; 
    calculationError.style.display = "block";
   }
});


// This resets all inputs and outputs when the reset button is clicked
document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("total").value = "0.00";
    document.getElementById("num-people").value = 1;
    document.querySelectorAll('.percent[selected="true"]')
    .forEach((currentItem) => currentItem.setAttribute("selected", "false"));
    customTip.value = "";
    tipAmount.innerHTML = "$0.00";
    totalAmount.innerHTML = "$0.00";
});



