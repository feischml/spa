import { ClujSquashSpaPage } from './app.po';

describe('cluj-squash-spa App', () => {
  let page: ClujSquashSpaPage;

  beforeEach(() => {
    page = new ClujSquashSpaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
