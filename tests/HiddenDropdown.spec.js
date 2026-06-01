const{test,expect}=require('@playwright/test');

test('assertions valiadtions',async({page})=>{
        
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'networkidle' });
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').fill('admin123');
    await page.locator('[type="submit"]').click();
    await page.locator("[href*='viewPimModule']").click();
    await page.waitForTimeout(3000);
    await page.locator("//label[text()='Job Title']/parent::div/following-sibling::div//div[text()='-- Select --']").click();
    const options=await page.$$("//div[@role='listbox']//span");
    for(let op of options){
        let jobTitle=await op.textContent();
        console.log(jobTitle);
        if(jobTitle.includes('QA Engineer')){
            await op.click();
        }
        
      
    }


//div[@role='listbox']//span
});