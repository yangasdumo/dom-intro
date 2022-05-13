
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

});