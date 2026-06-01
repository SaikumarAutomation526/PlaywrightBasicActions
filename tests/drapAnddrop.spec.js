const{test,expect}=require('@playwright/test');

test('drag and drop',async({page})=>{
await page.goto('https://jqueryui.com/droppable/?utm_source=chatgpt.com');
const source=await page.locator(".ui-draggable");
const desti=await page.locator(".ui-droppable");
//approach 1
// await source.hover();
// await page.mouse.down();
// await desti.hover();
// await page.mouse.up();

//approach 2
await source.dragTo(desti);

await page.waitForTimeout('1000');
});