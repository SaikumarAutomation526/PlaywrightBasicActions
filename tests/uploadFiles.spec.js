const{test,expect}=require('@playwright/test');
test("upload single files",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload?utm_source=chatgpt.com");
   await page.waitForSelector("#file-upload");
   await page.locator("#file-upload").setInputFiles("tests/files/test1.txt");
   await page.waitForTimeout(2000);
});
test("upload muliple files",async({page})=>{
   await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
   await page.waitForSelector("#filesToUpload");
   await page.locator("#filesToUpload").setInputFiles(["tests/files/test1.txt","tests/files/test2.txt"]);
   await page.waitForTimeout(3000);
    await page.locator("#filesToUpload").setInputFiles([]);
   await page.waitForTimeout(3000);
   
});