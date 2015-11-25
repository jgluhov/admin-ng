module.exports = function() {

    this.Given(/^I visit the signin page$/, function () {
        browser.url('http://192.168.0.107:8080/#/login');
    });

    this.When(/^I set "([^"]*)" to "([^"]*)"$/, function (email, value) {
        browser.setValue('input[name="' + email + '"]', value);
    });

    this.When(/^I click "([^"]*)" button$/, function (buttonName) {
        browser.waitForExist("button=" + buttonName);
        browser.click("button=" + buttonName);
    });

    this.Then(/^I see an error message$/, function () {
        browser.waitForExist("div.error");
    });

}