// get a reference to the sms or call radio buttons
const  buttons = document.querySelector(".radioBillAddBtn");
// get refences to all the settings fields
const  TypeWithSettings= document.querySelector(".callTotalSettings");
//get a reference to the add button
const  button = document.querySelector(".radioBillAddBtn");
//get a reference to the 'Update settings' buttonradioBillAddBtn
const updatebutton = document.querySelector(".updateSettings");


// create a variables that will keep track of all the settings
let callsCostSettings = 0;
let smsCostSettings= 0;
let warninglevel = 0;
let cricticallevel = 0;
// create a variables that will keep track of all three totals.
let call = 0;
let sms = 0;
let Total = 0;

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function settingsBill(){
    // get the value entered in the billType textfield
    var settingsBill = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var settingsBill= checkedRadioBtn.value
        // update the correct total
     if(settingsBill) {

     }

    }
}
checkedRadioBtn.addEventListener('click',settingsBill );