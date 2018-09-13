var userConfig = require('./login-config.json');
var config 		 = require('./spec-config.json');
var env 	 		 = "dev";
var baseUrl  	 = config[env].url.protocol + "://" + config[env].url.domain;

describe('Automated Testing of NBA | Enterprise Portal', function() {

	beforeEach(function() {
		browser.get(baseUrl + '/#/signin');
		browser.sleep(5000);
	});

	it('should have a title', function() {
    expect(browser.getTitle()).toEqual('NBA | Enterprise Portal');
	});

  it('Should login user', function() {
		var userEmail = element(by.model('credentials.email'));
		var userPass 	= element(by.model('credentials.password'));
		var loginBtn 	= element(by.css('.btn-submit'));
		userEmail.sendKeys(userConfig[env].username);
		userPass.sendKeys(userConfig[env].password);
		loginBtn.click();

		browser.sleep(5000);
		expect(browser.getCurrentUrl()).toEqual(baseUrl + '/#/dashboard/partners/list');
	});

});