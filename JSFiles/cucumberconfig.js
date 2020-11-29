"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// An example configuration file
exports.config = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxnQ0FBZ0M7QUFDckIsUUFBQSxNQUFNLEdBQVc7SUFDeEIsNENBQTRDO0lBQzVDLG1EQUFtRDtJQUNuRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCx1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFDRCx5Q0FBeUM7SUFDekMsWUFBWSxFQUFFO1FBQ1osZ0ZBQWdGO1FBQ2hGLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQztRQUNuQywyQkFBMkI7UUFDM0IsT0FBTyxFQUFFO1lBQ1AsOEJBQThCO1lBQzlCLHNCQUFzQixDQUFDLEdBQUc7U0FDM0I7S0FDRjtJQUVELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4QyxLQUFLLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztDQUNuQyxDQUFDIn0=