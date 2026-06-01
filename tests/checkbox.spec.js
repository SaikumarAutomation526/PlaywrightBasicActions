const{test,expect}=require('@playwright/test')
test("check box",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com');
    const sunday=page.locator('#sunday');
    const monday=page.locator('#monday');
    await sunday.check();
    await expect(await sunday).toBeChecked();
    await expect(await sunday.isChecked()).toBeTruthy();
  
    await sunday.uncheck();
    await expect(await monday).not.toBeChecked();
    await expect(await monday.isChecked()).toBeFalsy();
  // multiple chechboxes
  const chechBoxLocators=[
    "#sunday","#monday","#tuesday","#friday"
  ]
for(const loc of chechBoxLocators){
    await page.locator(loc).check();
    await expect(await page.locator(loc)).toBeChecked();
}
  await page.waitForTimeout(1000);
})