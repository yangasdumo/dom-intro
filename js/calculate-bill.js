//get a reference to the calculate button
const calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");
    var roundedBillTotal  = 0 
 function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringElement.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim().toLowerCase();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
      
    //round to two decimals
     roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
    n()
}
function n() {
          
    if ( roundedBillTotal > 30) {
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.add("danger");
    }

     else if (roundedBillTotal > 20  && roundedBillTotal  < 30 )  {
        billTotalElement.classList.remove("danger");
        billTotalElement.classList.add("warning")
    } else {
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.remove("danger");
    }        

    
}

calculateBtnElement.addEventListener('click', calculateBtnClicked);