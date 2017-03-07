import { Proplan2Page } from './app.po';

describe('proplan2 App', function() {
  let page: Proplan2Page;

  beforeEach(() => {
    page = new Proplan2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
