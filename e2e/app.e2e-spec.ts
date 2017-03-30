import { NgstockappPage } from './app.po';

describe('ngstockapp App', () => {
  let page: NgstockappPage;

  beforeEach(() => {
    page = new NgstockappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
