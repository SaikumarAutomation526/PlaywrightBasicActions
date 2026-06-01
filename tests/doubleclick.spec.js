const{test,expect}=require('@playwright/test');
test("double click ",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com");
    const Button=page.locator("//button[text()='Copy Text']");
    
    await Button.dblclick();
    
    await page.waitForTimeout(5000);

})