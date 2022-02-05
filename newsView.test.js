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

  it("links to the articles", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const NewsModel = { 
      getHeadlines: () => ['testing'],
      getLinks: () => ['https://www.testing.com/']
    };
    const newsView = new NewsView(NewsModel);
  
    newsView.displayNews();
  
    expect(document.querySelector('div.headline.href').toBe('https://www.testing.com/'));
  })
});