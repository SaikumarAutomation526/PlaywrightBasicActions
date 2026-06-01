import {test,expect} from "@playwright/test";

test("page screenshot ",async({page})=>{
  await page.goto('https://demo.opencart.com/');
  await page.screenshot({path:"tests/screenshots/"+Date.now()+"image1.png"});
})

test("full page screenshot ",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com');
    await page.screenshot({path:"tests/screenshots/"+Date.now()+"fullpge.png",fullPage:true})
})

test.only("element screenshot ",async({page})=>{
      await page.goto('https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com');
    await page.locator('p.description').screenshot({path:"tests/screenshots/"+Date.now()+"elementScreenshot.png"})

})

