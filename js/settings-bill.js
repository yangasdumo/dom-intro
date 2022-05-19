// get a reference to the sms or call radio buttons
const callSettings = document.querySelector(".callTotalSettings");
const smsSettings = document.querySelector(".smsTotalSettings");
const total = document.querySelector(".totalSettings");
// get refences to all the settings fields
const calls = document.querySelector(".callCostSetting");
const sms = document.querySelector(".smsCostSetting");
const warninglevels = document.querySelector(".warningLevelSetting");
const criticallevels = document.querySelector(".criticalLevelSetting")
//get a reference to the add button
const buttons = document.querySelector(".typebutton");

//get a reference to the 'Update settings' buttonradioBillAddBtn
const updateSettings = document.querySelector(".updateSettings");


const settingsbill = BillWithSettings()

// // create a variables that will keep track of all the settings
// let callsCostSettings = 0;
// let smsCostSettings = 0;
// let warninglevel = 0;
// let criticallevel = 0;
// create a variables that will keep track of all three totals.
let callSet = 0;
let smsSet = 0;

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click', function () {
    settingsbill.setCallCost(Number(calls.value));
     settingsbill.setSmsCost(Number(sms.value));
    settingsbill.setWarningLevel(Number(warninglevels.value));
    settingsbill.setCriticalLevel(Number(criticallevels.value));

    addclass()

});
//add an event listener or when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function settingsBills() {
    console.log("works")
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (checkedRadioBtn) {
        var billItemTypeWithSettings = checkedRadioBtn.value.toLowerCase();
           
        // update the correct total
        if (billItemTypeWithSettings === "call") {
            settingsbill.MakeCall()
        }
        else if (billItemTypeWithSettings === "sms") {
            settingsbill.sendSms()
        }
        callSettings.innerHTML =settingsbill.getTotalCallCost().toFixed(2);
        smsSettings.innerHTML = settingsbill.getTotalSmsCost().toFixed(2);
        total.innerHTML = settingsbill.getTotalCost().toFixed(2);
                  
        addclass()
          
    }
}

function addclass(){
    total.classList.remove("warning");
    total.classList.remove("danger");

    total.classList.add(settingsbill.totalClassName())

}

buttons.addEventListener('click',settingsBills);