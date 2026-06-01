const{test,expect}=require('@playwright/test');
test("mouse actions",async({page})=>{
    await page.goto('https://gotranscript.com/text-compare');
    await page.locator("[name='text1']").type("welcome to automation");
    //Ctrl+A
    await page.keyboard.press('Control+A');
     //Ctrl+c
     await page.keyboard.press('Control+C');
     //Tab
     await page.keyboard.press('Tab');
    //Ctrl+v
     await page.keyboard.press('Control+v');
     
     await page.waitForTimeout(2000);
});