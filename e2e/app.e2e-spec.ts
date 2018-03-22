import { BackendlessExamplePage } from './app.po';

describe('backendless-example App', () => {
  let page: BackendlessExamplePage;

  beforeEach(() => {
    page = new BackendlessExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
