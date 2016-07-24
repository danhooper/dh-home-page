export class DhHomePagePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dh-home-page-app h1')).getText();
  }
}
