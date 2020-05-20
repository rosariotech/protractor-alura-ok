import { Config } from 'protractor';
import { SpecReporter} from 'jasmine-spec-reporter';
import { JasmineAllureReporter, AllureRuntime, AllureConfig, } from 'jasmine-allure2-reporter';

var reportsPath: string = 'tests/e2e/allure-results';
export var allureReporter: JasmineAllureReporter = new JasmineAllureReporter(
    new AllureRuntime(
        new AllureConfig(reportsPath)
    ));

export const config: Config = {
    capabilities: {
        'browserName': 'chrome',
        chromeOptions:{
            args: [
                "--headless", "--disable-gpu", "--window-size=1920x1080", "--log-level=1",
                "--start-maximized"
            ]
            },
        shardTestFiles: true,
        maxInstances: 2,
    },
    directConnect: true,

    suites: {
        regression: [
            
        ],
        smoke: [
            './core/specs/login.spec.js'
        ],
    },

    baseUrl: 'http://localhost:4200/',
    params: {
       login:{
           user: "flavio",
           pass: "123"
       } 
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true,
        realTimeFailure: true,
        print: function () {}
    },
    onPrepare: () => {

        jasmine.getEnv().addReporter(exports.allureReporter);
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true,
                displayErrorMessages: true,
                displayFailed: true,
                displayDuration: true
            },
            summary: {
                displayStacktrace: true,
                displayErrorMessages: true,
                displaySuccessful: true,
                displayFailed: true,
                displayDuration: true
            },
            colors: {
                enabled: true
            }
        }))
    },   
};
