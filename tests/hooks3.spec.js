const {test,expect}=require("@playwright/test");

let page;

test.beforeAll(async ({browser})=>{
page=await browser.newPage();
await page.goto("https://www.demoblaze.com/index.html");
await page.locator("#login2").click();
await page.locator("#loginusername").fill("pavanol");
await page.locator("#loginpassword").fill("test@123");
await page.locator("//button[text()='Log in']").click();
})

test.afterAll(async ()=>{
await page.locator("#logout2").click();
})

test("Home page test",async()=>{

//home page
const products=await page.$$('.hrefch');
expect(products).toHaveLength(9);

})

test("add product to cart",async()=>{

//add product
const products=await page.$$('.hrefch');
await page.locator("//a[text()='Samsung galaxy s6']").click();
await page.locator("//a[text()='Add to cart']").click();
await page.on("dialog",async dialog=>{
    await dialog.accept();
})

})