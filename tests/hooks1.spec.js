const {test,expect}=require("@playwright/test");

test("Home page test",async({page})=>{
await page.goto("https://www.demoblaze.com/index.html");
await page.locator("#login2").click();
await page.locator("#loginusername").fill("pavanol");
await page.locator("#loginpassword").fill("test@123");
await page.locator("//button[text()='Log in']").click();
//home page
const products=await page.$$('.hrefch');
expect(products).toHaveLength(9);
// logout 
await page.locator("#logout2").click();
})

test("add product to cart",async({page})=>{
await page.goto("https://www.demoblaze.com/index.html");
await page.locator("#login2").click();
await page.locator("#loginusername").fill("pavanol");
await page.locator("#loginpassword").fill("test@123");
await page.locator("//button[text()='Log in']").click();
//add product
const products=await page.$$('.hrefch');
await page.locator("//a[text()='Samsung galaxy s6']").click();
await page.locator("//a[text()='Add to cart']").click();
await page.on("dialog",async dialog=>{
    await dialog.accept();
})
await page.locator("#logout2").click();
})