import { NgrxGuestlistPage } from './app.po';

describe('ngrx-guestlist App', () => {
  let page: NgrxGuestlistPage;

  beforeEach(() => {
    page = new NgrxGuestlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
