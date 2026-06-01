const{test,expect}=require('@playwright/test')
test("handle dropdowns",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com');
    await page.locator("#country").selectOption({label:"India"});
    await page.locator("#country").selectOption('United Kingdom');
    await page.locator("#country").selectOption({value:'germany'});
     await page.locator("#country").selectOption({index:1});
    
     const options=await page.$$('#country option');
     let status=false;
     for(let opt of options){
     let value =await opt.textContent();
     if(value.includes('India')){
       status=true;
       break; 
     }
     }
     await expect(status).toBeTruthy();
    
      await page.waitForTimeout(3000);
     
})