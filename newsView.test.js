
/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsView = require('./newsView');
const NewsModel = require('./newsModel');
require('jest-fetch-mock').enableMocks()
// jest.mock('./newsClient');


describe('tests NotesView', () => {

  // We can use the beforeEach() hook 
  // to set the jest `document` HTML before each test
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays the news stories', () => {
    // 1. Arrange - instantiate our View class
    const myModel = new NewsModel();
    const myView = new NewsView(myModel);
 
    myModel.setStoryData({ 
      webUrl: 'https://www.theguardian.com/australia-news/live/2023/feb/06/australia-politics-live-parliament-voice-anthony-albanese-peter-dutton-question-time-budget-cost-of-living-power-gas-prices-vic-nsw-qld', 
      fields: { 
        headline: 'Australia politics live: Penny Wong says government would ensure "sovereignty is protected" if spy balloon spotted', 
        thumbnail: 'https://media.guim.co.uk/627c7c7b33e63f6c18488bf04f9bc728d1284e3a/0_256_3840_2304/500.jpg',  
      }
    })
    myView.displayNews();
    console.log(myModel.getStoryData()[0].fields.headline);
    expect(document.querySelector('#story').textContent).toBe('Australia politics live: Penny Wong says government would ensure "sovereignty is protected" if spy balloon spotted');
  });
});