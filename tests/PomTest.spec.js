import{test,expect} from "@playwright/test";
import { LoginPage } from "../PageObjects/LoginPage";
import { HomePage } from "../PageObjects/HomePage";
const{CartPage}=require('../PageObjects/CartPage');

test("login using page object",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.goToPage();
    await loginPage.login("pavanol","test@123");
    const homePage=new HomePage(page);
     await page.waitForTimeout(1000);
    await homePage.addProductToCart('Samsung galaxy s6');
    const cart=new CartPage(page);
    cart.cart();
    await page.waitForTimeout(1000);
    const status =cart.checkProductInCart('Samsung galaxy s6');
    expect(await status).toBe(true);

});