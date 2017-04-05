import { DhHomeUiPage } from './app.po';

describe('dh-home-ui App', () => {
  let page: DhHomeUiPage;

  beforeEach(() => {
    page = new DhHomeUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
