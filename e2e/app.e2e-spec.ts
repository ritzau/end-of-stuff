import { EndOfStuffPage } from './app.po';

describe('end-of-stuff App', () => {
  let page: EndOfStuffPage;

  beforeEach(() => {
    page = new EndOfStuffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
