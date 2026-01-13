import test, { expect } from '@playwright/test'
const urls = [
  'https://the-internet.herokuapp.com/upload',
  'https://the-internet.herokuapp.com/download'
]


test ("normal",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/upload")
await page.setInputFiles("[id='file-upload']","Data/screenshot (2).png")
await page.locator("#file-submit").click()  
})

test("download",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/download")
const download1=page.waitForEvent("download")
await page.click("//a[text()='examplefile.json']")
const fileDownload=await download1
await fileDownload.saveAs("Data/example.json")
await expect(page.locator("//a[text()='examplefile.json']")).toHaveText("examplefile.json")
await page.waitForTimeout(4000)
const download2=page.waitForEvent("download")
await page.click("//a[text()='example.json']")
const fileDownload1=await download2
await fileDownload1.saveAs("Data/example.json")
await expect(page.locator("//a[text()='example.json']")).toHaveText("example.json")
await page.waitForTimeout(3000)
const download3=page.waitForEvent("download")
await page.click("//a[text()='responseBodyMockExample.json']")
const fileDownload3=await download3
await fileDownload3.saveAs("Data/responseBodyMockExample.json")
await expect(page.locator("//a[text()='responseBodyMockExample.json']")).toHaveText("responseBodyMockExample.json")


})