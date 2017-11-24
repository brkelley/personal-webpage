import { PersonalWebpagePage } from './app.po';

describe('personal-webpage App', function() {
  let page: PersonalWebpagePage;

  beforeEach(() => {
  page = new PersonalWebpagePage();
  });

  it('should display message saying app works', () => {
  page.navigateTo();
  expect(page.getParagraphText()).toEqual('app works!');
  });
});
