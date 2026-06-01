const{test,expect}=require('@playwright/test')
test("handle dropdowns",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com');
    await page.locator("#colors").selectOption(['Red','Blue','Green']);
    await page.waitForTimeout(2000);
    // check number of options in dropdown 
    const options=await page.locator("#colors option");
    await expect(options).toHaveCount(7);

    // check number of options in dropdown using java script array 
     const optionsJS=await page.$$("#colors option");
      console.log(optionsJS.length);
      await expect(optionsJS.length).toBe(7);

      //print the all the values of options
    const optionsJS1=await page.locator("#colors").textContent();
    await expect(optionsJS1.includes('Blue')).toBeTruthy();
    for(let colour of optionsJS1){
        console.log(colour);
    }



});