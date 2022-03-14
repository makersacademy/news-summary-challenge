/**
* @jest-environment jsdom
*/

import { readFileSync } from 'fs';
import { networkInterfaces } from 'os';
import NewsView from './newsView';
  
describe ("News View", () => {
  it("displays headlines in the browser", () => {
    document.body.innerHTML = readFileSync('./index.html');

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
    document.body.innerHTML = readFileSync('./index.html');
    
    const newsModel = { 
      getHeadlines: () => [1],
      getLinks: () => ['https://www.testing.com/'],
      getImages: () => []
    };
    const newsView = new NewsView(newsModel);
  
    newsView.displayNews();
    
    const headline = document.querySelector('div.headline');
    expect(headline.querySelectorAll('a').length).toBe(1);
  });

  it("displays images", () => {
    document.body.innerHTML = readFileSync('./index.html');
    
    const newsModel = { 
      getHeadlines: () => [1],
      getLinks: () => [],
      getImages: () => ['test.jpg']
    };
    const newsView = new NewsView(newsModel);
  
    newsView.displayNews();
    
    const headline = document.querySelector('div.headline');
    expect(headline.querySelectorAll('img').length).toBe(1);
  });

  it("has a search function", () => {
    document.body.innerHTML = readFileSync('./index.html');

    const searchButton = document.querySelectorAll('#search-button');
    const searchInput = document.querySelectorAll('#search-input');

    expect(searchButton.length).toBe(1);
    expect(searchInput.length).toBe(1);
  })
});