import { DonatePlatformPage } from './app.po';

describe('donate-platform App', () => {
  let page: DonatePlatformPage;

  beforeEach(() => {
    page = new DonatePlatformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
