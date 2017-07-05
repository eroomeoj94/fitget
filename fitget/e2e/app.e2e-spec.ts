import { FitgetPage } from './app.po';

describe('fitget App', () => {
  let page: FitgetPage;

  beforeEach(() => {
    page = new FitgetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
