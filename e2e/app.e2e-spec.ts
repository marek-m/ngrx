import { NgrxProjectPage } from './app.po';

describe('ngrx-project App', () => {
  let page: NgrxProjectPage;

  beforeEach(() => {
    page = new NgrxProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
