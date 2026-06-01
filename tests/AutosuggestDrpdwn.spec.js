const{test,expect}=require('@playwright/test');

test('assertions valiadtions',async({page})=>{
 await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
 await page.locator('#autocomplete').pressSequentially('Ind');
 await page.waitForSelector("#ui-id-1 li div");
 const options=await page.$$("#ui-id-1 li div");
 for(let op of options){
    const value=await op.textContent();
   console.log(value);
   if(value==='India'){
    await page.locator("//ul/li/div[text()='"+value+"']").click();
    break;
   }
 }

});