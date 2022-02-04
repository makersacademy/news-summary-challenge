/**
* @jest-environment jsdom
*/

const fs = require('fs');
const NewsView = require('./newsView')
  
describe ("News View", () => {
  it("displays headlines in the browser", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const NewsModel = { 
      getHeadlines: () => ['testing', 'testing2']
    }
    const newsView = new NewsView(NewsModel);
  
    newsView.displayNews();
  
    expect(document.querySelectorAll('div.headline').length).toBe(2);
  });
});