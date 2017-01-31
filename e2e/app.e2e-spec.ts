import { VoiceRecognationPage } from './app.po';

describe('voice-recognation App', function() {
  let page: VoiceRecognationPage;

  beforeEach(() => {
    page = new VoiceRecognationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
