
   describe('The bill with settings of factory functions' , function(){
    it('should be able to set a call' , function(){
        let SettingsBill = BillWithSettings();
        SettingsBill.SetCallCost(1.85);
        assert.equal(1.85,SettingsBill.getCallCost());
    
    });

    it('should be able to set a call' , function(){
        let SettingsBill2 = BillWithSettings();
        SettingsBill2.SetCallCost(2.75);
        assert.equal(2.75,SettingsBill2.getCallCost());
    });

    it('should be able to set a sms' , function(){
        let SettingsBill2 = BillWithSettings();
        SettingsBill2.SetSmsCost(0.75);
        assert.equal(0.75,SettingsBill2.getSmsCost());
    });

    it('should be able to set a call and sms' , function(){
        let SettingsBill= BillWithSettings();

        SettingsBill.SetCallCost(2.75);
        SettingsBill.SetSmsCost(0.75);

        assert.equal(2.75,SettingsBill.getCallCost());
        assert.equal(0.75,SettingsBill.getSmsCost());
    });


    it('should be able to set a call and sms' , function(){
        let SettingsBill2= BillWithSettings();

        SettingsBill2.SetCallCost(1.75);
        SettingsBill2.SetSmsCost(0.85);

        assert.equal(1.75,SettingsBill2.getCallCost());
        assert.equal(0.85,SettingsBill2.getSmsCost());
    });

    it('should be able to set a WarningLevel ' , function(){
        let SettingsBill= BillWithSettings();

        SettingsBill.SetWarningLevel(20);
       
        assert.equal(20,SettingsBill.getWarningLevel());
   
    });

    it('should be able to set a CriticalLevel ' , function(){
        let SettingsBill= BillWithSettings();

        SettingsBill.SetCriticalLevel(30);
       
        assert.equal(30,SettingsBill.getCriticalLevel());
   
    });
   
    it('should be able to set a Waring and CriticalLevel' , function(){
        let SettingsBill= BillWithSettings();

        SettingsBill.SetWarningLevel(15);
        SettingsBill.SetCriticalLevel(25);

        assert.equal(15,SettingsBill.getWarningLevel());
        assert.equal(25,SettingsBill.getCriticalLevel());
    });
    describe('Use Values' , function(){
        it('should be able to use the call set use' , function(){
            let SettingsBill = BillWithSettings();

            SettingsBill.SetCallCost(2.25);
            SettingsBill.SetSmsCost(0.85);
            
            SettingsBill.SetmakeCall();
            SettingsBill.SetmakeCall();
            SettingsBill.SetmakeCall();
        
               
            assert.equal(6.75,SettingsBill.getTotalCost());
            assert.equal(6.75,SettingsBill.getTotalCallCost());
            assert.equal(0.00,SettingsBill.getTotalSmsCost());
        });
    }); 
});