const{test,expect,chromium}=require('@playwright/test');
test('handiling windows and tabs ',async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();
    const allpages=await context.pages();
    console.log("no of pages created ",allpages.length);

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle('OrangeHRM');
    await page2.goto("https://orangehrm.com/book-a-free-demo");
    await expect(page2).toHaveTitle('Book a Free HRMS Demo | HR Software | HRMS | OrangeHRM');


})
test.only('handiling multiple windows and tabs ',async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page1=await context.newPage();

    const allpages=await context.pages();
    console.log("no of pages created ",allpages.length);

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle('OrangeHRM');
    const [newPage] = await Promise.all([
    page1.waitForEvent('popup'),
    page1.locator("//a[text()='OrangeHRM, Inc']").click()  // or any link that opens new window
      ]);

    const newpage=await newPage;
    await expect(newpage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM');
    await newpage.close();

})