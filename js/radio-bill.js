// get a reference to the sms or call radio buttons
const billItemType = document.querySelector(".billItemTypeRadio");
const callsTotalElem1 = document.querySelector(".callTotalTwo");
const smsTotalElem1 = document.querySelector(".smsTotalTwo");
const totalCostElem1 = document.querySelector(".totalTwo");
//get a reference to the add button
const checkedRadioBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep trac var callsTotal = 0;
var callsTotal = 0;
var smsTotal = 0;
var TotalCost = 0;
// these variables are global and defined outside of the Add button event listener.

// the event listener is declared below here

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

callsTotalElem.innerHTML = callsTotal.toFixed(2);
smsTotalElem.innerHTML = smsTotal.toFixed(2);
totalCostElem.innerHTML = totalBill.toFixed(2);

function billItem() {
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
        // update the correct total
        if (billItemType === "call") {
            callsTotal += 2.75
        }
        else if (billItemType === "sms") {
            smsTotal += 0.75;
        }

        //update the totals that is displayed on the screen.

        // var roundedBillTotal = totalPhoneBill(validateCaps);

        callsTotalElem1.innerHTML = callsTotal.toFixed(2);       
        smsTotalElem1.innerHTML = smsTotal.toFixed(2);
        totalBill = callsTotal + smsTotal;
        totalCostElem1.innerHTML = totalBill.toFixed(2);

        if (totalBill >= 50) {
            totalCostElem1.classList.add("danger");
        }
        else if (totalBill >= 30) {
            totalCostElem1.classList.add("warning");
        }
    }
}
checkedRadioBtn.addEventListener('click', billItem);