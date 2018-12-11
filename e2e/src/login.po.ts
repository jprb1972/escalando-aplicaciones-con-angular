import { browser, by, element } from 'protractor';

export class LoginPage {
  selectors = {
    'title' : 'app-root h1',
    'email' : 'input[name="email"]',
    'password' : 'input[name="password"]',
    'selectGroup' : 'mat-select[name="group"]',
    'form': 'form',
    'button' : 'button[class="max-button mat-primary"]'
  };

  navigateToLogin() {
    return browser.get('/login');
  }

  setEmail(text) {
    element(by.css(this.selectors['email'])).sendKeys(text);
  }

  setPassword(text) {
    element(by.css(this.selectors['password'])).sendKeys(text);
  }

  selectGroupOptionLastValue() {
    element(by.css(this.selectors['selectGroup'])).click()
    .then(() => element.all(by.css('mat-option')).last().click());
  }

  logIn() {
    // element(by.css(this.selectors['button'])).click();
     element(by.css(this.selectors['form'])).submit();
  }



  getTitleText() {
    element(by.css(this.selectors['title'])).getText();
  }

}