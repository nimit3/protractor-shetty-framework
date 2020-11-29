import { element, ElementFinder, by } from "protractor";

export class angular {
    angularLink: ElementFinder;
    searchBox: ElementFinder;

    constructor(){
        this.angularLink = element(by.linkText("angular.io"))
        this.searchBox = element(by.xpath("//input[@type='search']"));
    }

}