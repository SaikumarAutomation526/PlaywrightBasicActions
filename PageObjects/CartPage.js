class CartPage{
    constructor(page){
      this.page=page;
      this.cartLink="#cartur";
      this.noOfProducts="//tbody[@id='tbodyid']/tr/td[2]";
      this.placeOrder="//button[text()='Place Order']";

    }
  async cart(){
    await this.page.locator(this.cartLink).click()
  }
   async checkProductInCart(productName){
    await this.page.waitForTimeout(2000);
    const productsInCart = this.page.locator(this.noOfProducts);

    const count = await productsInCart.count();
    for(let i = 0; i < count; i++){
        const text = await productsInCart.nth(i).textContent();
        console.log(text?.trim());
        if(productName === text?.trim()){
            return true;
        }
    }
    return false;  // Return false if product not found
    }
    }

    module.exports={CartPage};