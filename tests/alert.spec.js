const{test,expect}=require('@playwright/test')
test.skip("check box",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com');
    await page.locator('#alertBtn').click();
    page.on('dialog',async dialog=>{
    console.log(dialog.type());
    console.log(dialog.type())
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('alert');
    await dialog.accept();
    })
    await page.locator('#alertBtn').click();
    await page.waitForTimeout(5000);


});

test.skip("confirmation dialog alert with ok and cancel",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com');
    await page.locator('#alertBtn').click();
    page.on('dialog',async dialog=>{
    console.log(dialog.type());
    console.log(dialog.type())
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button!');
    await dialog.accept();
    })
    await page.locator('#confirmBtn').click();
    expect(await page.locator('#demo')).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);


});
test("confirmation dialog alert with entering  woth prompt",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com');

    page.on('dialog',async dialog=>{
    console.log(dialog.type());
    console.log(dialog.type())
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    expect(dialog.defaultValue()).toContain('Harry Potter');
    await dialog.accept();
    });

    await page.locator('#promptBtn').click();
    expect(await page.locator('#demo')).toHaveText('Hello Harry Potter! How are you today?');
    await page.waitForTimeout(5000);


});