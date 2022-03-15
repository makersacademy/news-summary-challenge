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
    expect(document.querySelectorAll('div.headline')[0].textContent).toBe('test headline');
    expect(document.querySelectorAll('div.headline')[1].textContent).toBe('test headline 2')
  });

  it("links to the articles", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const newsModel = { 
      getNews() {
        return [{ 
        headline: 'test headline', 
        link: 'test.url', 
        image: 'test.png' 
        }]
      }
    };
    const newsView = new NewsView(newsModel);
  
    newsView.displayNews();
    
    const headline = document.querySelector('div.headline');
    expect(headline.querySelectorAll('a').length).toBe(1);
    expect(headline.querySelectorAll('a')[0].href).toBe('http://localhost/test.url');
  });

  it("displays images", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const newsModel = { 
      getNews: () => [{ 
        headline: 'Test headline', 
        link: 'test.url', 
        image: 'testing.url'
      }],
    };
    const newsView = new NewsView(newsModel);
  
    newsView.displayNews();
    
    const headline = document.querySelector('div.headline');
    expect(headline.querySelectorAll('img').length).toBe(1);
    expect(headline.querySelectorAll('img')[0].src).toBe('http://localhost/testing.url');
  });

  it("has a search function", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const newsModel = { 
      getNews: () => [{
      }],

      reset: () => {
      },

      addNews: () => {
      }
    };

    const mockedStories = [{ 
      webTitle: 'Extra, extra, read all about it! Test coverage exceeding 100%!!',
      webUrl: 'https://www.testing.com',
      fields: { thumbnail: 'testing.png' } 
    }];


    const mockApi = {
      getNews: (term, callback) => {
        callback(mockedStories)
      }
    }

    const newsView = new NewsView(newsModel, mockApi);

    const searchButton = document.querySelector('#search-button');
    const searchInput = document.querySelector('#search-input');

    searchInput.value = 'cats';
    searchButton.click();
  })
});