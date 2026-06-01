const{ test,expect}=require('@playwright/test');

test("frames",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/nested_frames");
//total frames
const noOfFrames=await page.frames();
console.log(noOfFrames.length);

// const frame1=await page.frame({url:'https://demoqa.com/sample.html'});
// const text1=await frame1.locator('#sampleHeading').textContent();
// console.log(text1);

const frame1=await page.frame('frame-left');
const test1=await frame1.locator('//body').textContent();
console.log(test1);


const frame2=await page.frameLocator('//frame[@name="frame-middle"]').locator('#content').textContent();


console.log(frame2);
})

