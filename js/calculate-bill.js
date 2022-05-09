
const calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");

function totalPhoneBill(total) {
    // logic goes herefunction totalPhoneBill(total){
    var callList = total.split(',')
    var call = []
    var sms = []

    for (var i = 0; i < callList.length; i++) {
        let newCallList = callList[i].trim();

        if (newCallList.includes('SMS')) {
            sms.push(newCallList)
        } else if
            (newCallList.includes("CALL")){
            call.push(newCallList)
        }
    }


    var totalCall = call.length;
    var totalSms = sms.length;
    var a = totalCall * 2.75
    var b = totalSms * 0.75
    var c = a + b
    return c.toFixed(2)
}
function calculateBtnClicked() {

    // get the string entered in the textArea
    var billString = billStringElement.value;
    var validateCaps = billString.toUpperCase()
    //round to two decimals
    var roundedBillTotal = totalPhoneBill(validateCaps);
    billTotalElement.innerHTML = roundedBillTotal;

    if (roundedBillTotal > 30) {
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.add("danger");
    }

    else if (roundedBillTotal > 20) {
        billTotalElement.classList.add("warning")
    }
}

calculateBtnElement.addEventListener('click', calculateBtnClicked);