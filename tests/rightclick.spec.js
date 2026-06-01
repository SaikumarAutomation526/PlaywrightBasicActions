const{test,expect}=require('@playwright/test');
test("right click ",async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html?utm_source=chatgpt.com");
    const rightButton=page.locator("//span[text()='right click me']");
    
    await rightButton.click({button:'right'});
    
    await page.waitForTimeout(5000);

})