/**
* @jest-environment jsdom
*/

const fs = require('fs');
const NewsView = require('./newsView')
  
describe ("News View", () => {
  it("displays headlines in the browser", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const newsModel = { 
      getHeadlines: () => ['testing', 'testing 2'],
      getLinks: () => [],
      getImages: () => []
    }
    const newsView = new NewsView(newsModel);
  
    newsView.displayNews();
  
    expect(document.querySelectorAll('div.headline').length).toBe(2);
  });

  it("links to the articles", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const newsModel = { 
      getHeadlines: () => [1, 2],
      getLinks: () => ['https://www.testing.com/', 'https://www.testing2.com'],
      getImages: () => []
    };
    const newsView = new NewsView(newsModel);
  
    newsView.displayNews();
    console.log(document.querySelectorAll('div.headline'))
  
    expect(document.querySelectorAll('div.headline.href').length).toBe(2);
  });

  it("displays images", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const newsModel = { 
      getHeadlines: () => [1, 2],
      getLinks: () => [],
      getImages: () => ['test.jpg', 'test2.jpg']
    };
    const newsView = new NewsView(newsModel);
  
    newsView.displayNews();
    console.log(document.querySelectorAll('div.headline').text());
  
    expect(document.querySelectorAll('div.headline.img').length).toBe(2);
  });
});