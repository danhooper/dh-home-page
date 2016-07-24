import { DhHomePagePage } from './app.po';

describe('dh-home-page App', function() {
  let page: DhHomePagePage;

  beforeEach(() => {
    page = new DhHomePagePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dh-home-page works!');
  });
});
