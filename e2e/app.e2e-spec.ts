import { EHContactDirectoryPage } from './app.po';

describe('ehcontact-directory App', function() {
  let page: EHContactDirectoryPage;

  beforeEach(() => {
    page = new EHContactDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
