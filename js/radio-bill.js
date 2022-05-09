// get a reference to the sms or call radio buttons
const textBoxElement = document.querySelector(".billTypeText");
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");
//get a reference to the add button
const textTotalAddBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep trac var callsTotal = 0;
 var callsTotal = 0;
var smsTotal = 0;
var TotalCost =0;
// these variables are global and defined outside of the Add button event listener.

// the event listener is declared below here

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
 


textTotalAddBtn.addEventListener('click', textBillTotal);