function BillWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;

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
        if (!hasReachedCriticalLevel())
            callCostTotal += theCallCost;
    }

    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }

    function getTotalCallCost() {
        return callCostTotal;
    }
    function getTotalSmsCost() {
        return smsCostTotal;
    }

    function sendSms() {
        if (!hasReachedCriticalLevel())
            smsCostTotal += theSmsCost;
    }

    function hasReachedCriticalLevel() {
        return getTotalCost() >= getCriticalLevel();
    }

    function totalClassName() {

        if (hasReachedCriticalLevel()) {
            return "critical"
        }
    
        if (getTotalCost() >= getWarningLevel()) {
            return "warning"
        }


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
        getTotalSmsCost,
        sendSms,
        totalClassName,
    }
}