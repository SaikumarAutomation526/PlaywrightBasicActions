const{test,expect}=require('@playwright/test');
test("mouse hover action ",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/?utm_source=chatgpt.com");
    const mouseHover=await page.locator('#mousehover');
    
    await mouseHover.hover();
    
    await page.waitForTimeout(5000);

})