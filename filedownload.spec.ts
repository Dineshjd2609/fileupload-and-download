import test from '@playwright/test'

test("Download File",async({page})=>{
await page.goto("https://www.leafground.com/file.xhtml")

const download=page.waitForEvent('download')
await page.click("[id='j_idt93:j_idt95']")
const fileDownload=await download

await fileDownload.saveAs("Data/"+fileDownload.suggestedFilename())


})