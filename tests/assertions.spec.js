const{test,expect}=require('@playwright/test');
test('assertions valiadtions',async({page})=>{
 await page.goto("https://demo.nopcommerce.com/register");
 await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
 await expect(page).toHaveTitle('nopCommerce demo store. Register');
 let title=await page.title();
 await expect(title).toContain("nopCommerce demo store. Register");
 console.log(title);
 const logo=await page.locator("//img[@alt='nopCommerce demo store']");
 await expect(logo).toBeVisible();
 const serachBox=await page.locator('#small-searchterms')
 await expect(serachBox).toBeEnabled();
 const radioBtn=page.locator('#gender-male');
 await radioBtn.check();
 await expect(radioBtn).toBeChecked();
 const selected =page.locator("#NewsLetterSubscriptions_0__IsActive");
 await expect(selected).toBeChecked();
 const attribute=page.locator("#register-button");
 await expect(attribute).toHaveAttribute('name','register-button');
await expect(await page.locator('#register-button')).toHaveText('Register');
await expect(await page.locator('#register-button')).toContainText('Regist');
const email=page.locator('#Email');
await email.fill("saikumar@gmail.com");
await expect(email).toHaveValue("saikumar@gmail.com")

})