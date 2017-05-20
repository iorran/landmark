import { LandmarkPage } from './app.po';

describe('landmark App', () => {
  let page: LandmarkPage;

  beforeEach(() => {
    page = new LandmarkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
