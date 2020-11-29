import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
const { async } = require("q");
const { compare } = require("semver");
import {angular} from "./pageObjects/angular";

describe("basics command", () => {
  it("test case 1", async () => {
    // browser.waitForAngularEnabled(false);
    await browser.get("https://angularjs.org");
    await browser.manage().window().maximize();
    //making object
    let angularObject =  new angular();
    await angularObject.angularLink.click();
    await angularObject.searchBox.sendKeys("hello");
    browser.sleep(3333)
    

  });
});
