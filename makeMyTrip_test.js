Feature('makeMyTrip');

// module.exports.Element Element;


Scenario('Searching Fligts', async ({ I }) => {
    await I.amOnPage("https://www.makemytrip.com/flights/");
    await I.clearCookie();
    await I.wait("3");
    var elementPresent = await I.grabNumberOfVisibleElements("//*[@id='SW']/div[1]/div[1]/ul/li[3]/div[3]");
    if(elementPresent>0){
        await I.click("//*[contains(@class,'autopop__wrap makeFlex column defaultCursor')]");
    }
    await I.click("//*[@id=\"SW\"]//a[contains(@href,'flights')][contains(@class,'makeFlex')]");
    await I.click("//div[contains(@class,'fsw_inputBox searchCity inactiveWidget')]//label");
    await I.fillField("//*[@id=\"root\"]//input[contains(@placeholder,'From')]","Mumbai");
    await I.click("//*[@id=\"root\"]//p[contains(text(),'Mumbai,')]");
    await I.wait(2);
    //await I.click("//div[contains(@class,'fsw_inputBox searchToCity inactiveWidget')]//label");
    await I.fillField("//*[@id=\"root\"]//div//input[contains(@placeholder,'To')]","Delhi");
    await I.click("//*[@id='root']//li//p[contains(text(),'Delhi,')]");

});

Scenario('Date Validation', async ({I}) =>{
        //await I.click("//div[contains(@class,'fsw_inputBox dates inactiveWidget ')]//label");
         //var selectedDate = await I.grabValueFrom('//*[@id=\"root\"]//div[contains(@class,"DayPicker-Day--selected")]');
        // selectedDate = selectedDate.slice(4,15);
        // selectedDate = selectedDate.replace(' 2021',', 2021');
        // const parsedSelectedDate = new Date(Date.parse(selectedDate));
        // var currentDate = new Date();
        // // To calculate the time difference of two dates
        // var Difference_In_Time = parsedSelectedDate.getTime() - currentDate.getTime();
        // // To calculate the no. of days between two dates
        // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);


        // var checkSibilingPresent = "(//div[contains(@class,'DayPicker-Day--selected')]//preceding-sibling::div[contains(@class,'disabled')])"
        // var elementPresent = await Element.checkIfElementPresent(checkSibilingPresent);
        // if(elementPresent){
        //     await I.seeElementInDOM(elementPresent);
        // }
        // else{
        //     await I.seeElementInDOM("((//div[contains(@class,'DayPicker-Day--selected')]//parent::div[contains(@class,'DayPicker-Week')])//preceding-sibling::div[1]//div[7])[1]")
        // }
        
        await I.click("//*[@id=\"root\"]//div[contains(@class,'DayPicker-Day--selected')]");
        
        //await I.click("//*[@id='return']");
        await I.click("//*[@id=\"root\"]//div[contains(@class,'fsw_inputBox dates reDates inactiveWidget ')]");
        await I.click("//*[@id=\"root\"]//div[contains(@class,'DayPicker-Day--selected')][1]");

});

Scenario('Select Passengers', async ({I}) =>{
    await I.click("//*[contains(@data-cy,'travellerText')]");
    await I.click("//li[contains(@data-cy,'adults-2')]");
    await I.click("//li[contains(@data-cy,'children-1')]");
    await I.click("//li[contains(@data-cy,'infants-1')]");
    await I.click("//li[contains(@data-cy,'travelClass-2')]");
    await I.click("//button[contains(@class,'primaryBtn btnApply pushRight')]");
});

Scenario('Search Result Verification', async ({I})=>{
    await I.click("//a[contains(@class,'widgetSearchBtn')]");// add search xpath
    await I.seeTextEquals("Mumbai → New Delhi");
    await I.seeTextEquals("New Delhi → Mumbai");
})







