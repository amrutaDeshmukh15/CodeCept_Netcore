exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      port: 9515,
      restart: false,
      windowSize: '1920x1680',
      path:'/',
      desiredCapabilities: {
        chromeOptions: {
          //args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
        }
    }
  }
},
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Netcore',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}