import { Given, Then, When, } from "cucumber";
import { format } from "path";
import {browser, by, element} from 'protractor';
import {angular} from "../pageObjects/angular";
import chai from "chai";

let ang = new angular();
let expect = chai.expect;

    Given('I will visit {string} website', async (string) => {
        await browser.get(string);
        await browser.manage().window().maximize();
    });

    When('I click on the link', async () =>  {
       await ang.angularLink.click();

    });

    
    When('you will navigate to new angular page', async () =>  {
        await console.log("navigated successfully!")

    });

    Then('you will enter {string} word in search box', async (string) => {
        await ang.searchBox.sendKeys(string)
        let title = "Angular";
        let title1 = await browser.getTitle()
        expect(title).to.equal(title1);
      });