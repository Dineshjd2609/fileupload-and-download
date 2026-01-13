import test from '@playwright/test'

test("File upload with Input Tag",async({page})=>{

    await page.goto("https://www.leafground.com/file.xhtml")
    await page.setInputFiles("[id='j_idt88:j_idt89_input']","Data/PVRDYNAMCI.pdf")
})

test.only("File Upload with Event Listener",async({page})=>{

    await page.goto("https://www.leafground.com/file.xhtml")
    const fileUpload= page.waitForEvent('filechooser')
    await page.click("[id='j_idt88:j_idt89_input']")
    const fileChooser=await fileUpload

    //setfiles()
    await fileChooser.setFiles("Data/PVRDYNAMCI.pdf")

})