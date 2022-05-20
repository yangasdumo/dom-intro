// get a reference to the textbox where the bill type is to be entered
const textBoxElement = document.querySelector(".billTypeText");
//get a reference to the add button
const addBtnElement = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");

var totalBill = 0;
var callsTotals = 0;
var smsTotals = 0;
//create a variable that will keep track of the total bill
callsTotalElem.innerHTML = callsTotals.toFixed(2);
smsTotalElem.innerHTML = smsTotals.toFixed(2);
totalCostElem.innerHTML = totalBill.toFixed(2);

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = textBoxElement.value.trim();
    var validateCaps = billTypeEntered.toUpperCase()
    // update the correct total
    if (validateCaps === "CALL"){
        callsTotals += 2.75
    }
    else if (validateCaps === "SMS"){
        smsTotals += 0.75;
    }
   
    //update the totals that is displayed on the screen.
      
    // var roundedBillTotal = totalPhoneBill(validateCaps);
    
    callsTotalElem.innerHTML = callsTotals.toFixed(2);
    smsTotalElem.innerHTML = smsTotals.toFixed(2);
    totalBill = callsTotals + smsTotals;
    totalCostElem.innerHTML = totalBill.toFixed(2);
    
         
    if (totalBill >= 50){
        totalCostElem.classList.add("danger");
    }
    else if (totalBill >= 30){
        totalCostElem.classList.add("warning");
    }
      
}

addBtnElement.addEventListener('click', textBillTotal);

