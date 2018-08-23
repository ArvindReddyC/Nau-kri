const puppeteer = require('puppeteer');


let nau = async () =>{
const browser = await puppeteer.launch({timeout:300000,headless:false});
const page = await browser.newPage();
await page.goto('https://my.naukri.com/Profile/edit?id=&altresid',{timeout:300000});
var there  = await page.$("#usernameField");

var there2 = await page.$("#emailTxt");
if(there!=null)
{ await page.click("#usernameField");
   await page.keyboard.type("arvindchandrashekar@hotmail.com");

   await page.click("#passwordField");
   await page.keyboard.type("9019444140");

   await page.keyboard.press('Enter');
   await page.waitForNavigation()
    for(var i=0 ; i< 40 ; i++)
    {
    var test = await page.$("#root");
    var h = await test.$(".resumeHeadline");
    var j = await h.$(".widgetHead");
    var k = await j.$(".widgetTitle + span")
    await k.click();

    console.log("hello")
    
    await page.keyboard.press('Tab');
    await page.keyboard.type(".");
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter')
    console.log("Job Done");
   await page.waitFor(9000);
    }
}
else{
    await page.click("#emailTxt");
   await page.keyboard.type("arvindchandrashekar@hotmail.com");

   await page.click("#pwd1");
   await page.keyboard.type("9019444140");

   await page.keyboard.type('Enter');

}



}
nau();