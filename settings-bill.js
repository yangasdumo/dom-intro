function BillWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;

    function SetCallCost(callCost){
        theCallCost = callCost;
    }
    function getCallCost(){
        return theCallCost;
    }

    function SetSmsCost(smsCost){
        theSmsCost = smsCost;
    }
    function getSmsCost(){
        return theSmsCost;
    }

    return{
        SetCallCost ,
        getCallCost ,
        SetSmsCost,
        getSmsCost
    }
}