const{test,expect}=require('@playwright/test')
test("handle dropdowns",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com');
   const table= await page.locator('#productTable');
    const coloumns=await table.locator('thead tr th');
    console.log(await coloumns.count());
    const rows =await table.locator('tbody tr');
    console.log(await rows.count());
 // particular check box 
//  const matchedRow=rows.filter({
//     has: page.locator('td'),
//     hasText:'Smartwatch'
//  })
// matchedRow.locator('input').check();


// selectProducts(rows,page,'Tablet');
// selectProducts(rows,page,'Smartphone')



// print all the product details using for loop

for(let i=0;i<await rows.count();i++){
    const row=rows.nth(i);
    const tds=row.locator('td');
    for(let j=0;j<tds.count()-1;j++){
      console.log(await tds.nth(j).textContent());

    }
}
await page.waitForTimeout(2000);
});

async function selectProducts(rows,page,name){
const matchedRow=rows.filter({
    has: page.locator('td'),
    hasText:name
 })
await matchedRow.locator('input').check();


}