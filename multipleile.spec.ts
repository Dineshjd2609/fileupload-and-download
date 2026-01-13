import test from '@playwright/test'
test("Multiple File Upload",async({page})=>{
    await page.goto("https://www.leafground.com/file.xhtml")
    const multipleFilepage=page.locator("[id='j_idt97:j_idt98_input']")
await multipleFilepage.setInputFiles(["Data/TestLeaf Logo.png","Data/screenshot (2).png"])

await page.waitForTimeout(3000) 
})