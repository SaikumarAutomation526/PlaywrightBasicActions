exports.HomePage=class HomePage{

    constructor(page){
        this.page=page;
        this.productLinks='//div[@class="card-block"]/h4/a';
        this.addToCartBtn="//a[text()='Add to cart']";
    }
   
    async addProductToCart(productName){
    const products= await this.page.locator(this.productLinks);
    await this.page.waitForTimeout(2000);
      const size=await products.count();
      console.log(size);
       for(let i=0;i<size;i++){
          let product= products.nth(i);
          let actualProductName=await product.textContent()
          if(productName===actualProductName?.trim()){
            console.log(actualProductName);
            await product.click();
            await this.page.waitForURL(/prod\.html/); 
            break;
          }
      }
      await this.page.locator(this.addToCartBtn).waitFor({ state: 'visible' });
       await this.page.locator(this.addToCartBtn).click();
      await this.page.on('dialog',async dialog=>{
        if(dialog.message().includes('added')){
          await dialog.accept();
        }
    })
 
    }
 
    
}