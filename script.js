// html elements to retrieve info from the user

const total = parseFloat(document.getElementById("total").value);
const fivePercent = document.getElementById("5-percent");
const tenPercent = document.getElementById("10-percent");
const fifteenPercent = document.getElementById("15-percent");
const twentyPercent = document.getElementById("20-percent");
const twentyFivePercent = document.getElementById("25-percent");
const customPercent = document.getElementById("custom-percent");
const numPeople = parseFloat(document.getElementById("num-people").value);

let tipPercent; 

// html elements to display info to the user 
const tipAmount = document.getElementById("variable-tip-amount");
const totalAmount = document.getElementById("variable-total-amount");

function findTipPercent() {
    

}







function calculateTip()  {
    if (total.value != 0 && tipPercent !=0 && numPeople.value != 0) {
         return  total.value * (tipPercent / 100) / numPeople.value;
    }
    else return null;
};

function calculateTotal() {
    return total * ((100+tipPercent)  /100) / numPeople;
}

total.addEventListener("change", () => {
    calculateTip();
});