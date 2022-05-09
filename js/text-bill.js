// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const textBoxElement = document.querySelector(".billTypeText");
const addBtnElement = document.querySelector(".addToBillBtn");
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");

// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button
var totalBill = 0;
var callsTotal = 0;
var smsTotal = 0;
//create a variable that will keep track of the total bill
callsTotalElem.innerHTML = callsTotal.toFixed(2);
smsTotalElem.innerHTML = smsTotal.toFixed(2);
totalCostElem.innerHTML = totalBill.toFixed(2);

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = textBoxElement.value.trim();
    var validateCaps = billTypeEntered.toUpperCase()
    // update the correct total
    if (validateCaps === "CALL"){
        callsTotal += 2.75
    }
    else if (validateCaps === "SMS"){
        smsTotal += 0.75;
    }
   
    //update the totals that is displayed on the screen.
   
    // var roundedBillTotal = totalPhoneBill(validateCaps);

    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    totalBill = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalBill.toFixed(2);


    if (totalBill >= 50){
        totalCostElem.classList.add("danger");
    }
    else if (totalBill >= 30){
        totalCostElem.classList.add("warning");
    }

}

addBtnElement.addEventListener('click', textBillTotal);

