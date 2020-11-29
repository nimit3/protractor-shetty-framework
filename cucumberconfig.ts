import {Config} from "protractor";
// An example configuration file
export let config: Config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
    //this is for linking the step defination
    cucumberOpts: {
      //we can use tagging here to run only some specific test cases from feature file
      tags: ["@smoke", "@AngularTesting"],
      // require step definitions
      require: [
        //path to step defination file
        './stepdefination/*js' // 
      ]
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    //which feature fileyou want to execute 
    specs: ['../feature/demo.feature']
  };