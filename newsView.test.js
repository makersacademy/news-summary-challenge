/**
* @jest-environment jsdom
*/

const fs = require('fs');
const networkInterfaces = require('os');
const NewsView = require(`./newsView`);
  
describe ("News View", () => {
  it("displays headlines in the browser", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const newsModel = { 
      getNews() {
        return [{ 
        headline: 'test headline', 
        link: 'test.url', 
        image: 'test.png' 
        }, { 
        headline: 'test headline 2', 
        link: 'test2.url', 
        image: 'test2.png' 
        }]
      }
    };

    const newsView = new NewsView(newsModel);
  
    newsView.displayNews();
  
    expect(document.querySelectorAll('div.headline').length).toBe(2);
  });

  it("links to the articles", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const newsModel = { 
      getNews() {
        return [{ 
        headline: 'test headline', 
        link: 'test.url', 
        image: 'test.png' 
        }, { 
        headline: 'test headline 2', 
        link: 'test2.url', 
        image: 'test2.png' 
        }]
      }
    };
    const newsView = new NewsView(newsModel);
  
    newsView.displayNews();
    
    const headline = document.querySelector('div.headline');
    expect(headline.querySelectorAll('a').length).toBe(1);
  });

  it("displays images", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const newsModel = { 
      getNews: () => [{ 
        headline: 'Test headline', 
        link: 'test.url', 
        image: 'testimg.url'
      }],
    };
    const newsView = new NewsView(newsModel);
  
    newsView.displayNews();
    
    const headline = document.querySelector('div.headline');
    expect(headline.querySelectorAll('img').length).toBe(1);
  });

  it("has a search function", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const searchButton = document.querySelectorAll('#search-button');
    const searchInput = document.querySelectorAll('#search-input');

    expect(searchButton.length).toBe(1);
    expect(searchInput.length).toBe(1);
  })
});