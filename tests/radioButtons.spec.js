const{test,expect}=require('@playwright/test');
test("input box",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com');
    const checked=await page.locator('#male').isChecked();
    if(!checked){
     const check= await page.locator('#male').check();
      await expect(await page.locator('#male')).toBeChecked();
    }
    await expect(await page.locator('#male').isChecked()).toBeTruthy();
    await expect(await page.locator('#female').isChecked()).toBeFalsy();
   await page.waitForTimeout(1000);
})