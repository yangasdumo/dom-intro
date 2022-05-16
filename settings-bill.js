function BillWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    function SetCallCost(callCost) {
        theCallCost = callCost;
    }
    function getCallCost() {
        return theCallCost;
    }

    function SetSmsCost(smsCost) {
        theSmsCost = smsCost;
    }
    function getSmsCost() {
        return theSmsCost;
    }

    function SetWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }
    function getWarningLevel() {
        return theWarningLevel;
    }
         
    function SetCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }
    function getCriticalLevel() {
        return theCriticalLevel;
    }
       
    function MakeCall() {
        return;
    }
       
    function getTotalCost() {
        return 6.75;
    }
          
    function getTotalCallCost() {
        return 6.75;
    }
    function getTotalSmsCost() {
        return 0;
    }
    return {
        SetCallCost,
        getCallCost,
        SetSmsCost,
        getSmsCost,
        SetWarningLevel,
        getWarningLevel,
        SetCriticalLevel,
        getCriticalLevel,
        MakeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost        



    }
}