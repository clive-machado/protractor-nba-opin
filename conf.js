exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  SELENIUM_PROMISE_MANAGER : 1,
  multiCapabilities: [
  // {
  //   'browserName': 'firefox',
  //   'moz:firefoxOptions': {
  //     args: [ "--headless" ]
  //   }
  // },
  {
    'browserName': 'chrome',
    chromeOptions: {
      args: []
    }
  }]
}