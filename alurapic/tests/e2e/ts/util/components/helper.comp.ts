import { browser } from "protractor";
import { ContentType } from 'jasmine-allure2-reporter';
import { allureReporter } from "../../protractor.conf";

export class Helper{
    public tiraPrint(){
        browser.waitForAngular();
        browser.takeScreenshot().then((png)=>{
            allureReporter.getInterface().createAttachment(
                'Screenshot',
                Buffer.from(png, 'base64'),
                ContentType.PNG);
        })
    }
}