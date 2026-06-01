const {test,expect}=require('@playwright/test');


test.beforeEach(async()=>{
    console.log("before each ...................")
})
test.describe("smoke resting @smoke",()=>{
test("grouping1 ",async()=>{
console.log("group1")
})
test("grouping2 ",async()=>{
 console.log("group2")
})
test("grouping3 ",async()=>{
console.log("group3")
})
test("grouping4 ",async()=>{
  console.log("group4")
})
})

test.describe("smoke resting @regression",()=>{
test("grouping5 ",async()=>{
  console.log("group1")
})
test("grouping6 ",async()=>{
console.log("group2")
})
test("grouping7 ",async()=>{
console.log("group3")
})
test("grouping8 ",async()=>{
console.log("group4")
})
});