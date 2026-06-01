const{test,expect}=require('@playwright/test');
test("input box",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com');
    const visable=await page.locator('#name').isVisible();
    const enable=await page.locator('#name').isEnabled();
    if(visable && enable){
       await page.locator('#name').fill("saikumar");
    }
    await page.waitForTimeout(1000);

})