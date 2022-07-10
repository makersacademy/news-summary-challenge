/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
//  const NewsModel = require('./newsModel');
 const NewsView = require('./newsView');
 
 require('jest-fetch-mock').enableMocks()
  
  describe('newsView class', () => {
    beforeEach(() => {
      document.body.innerHTML = fs.readFileSync('./index.html');
    });

    it('displayHeadlines function creates a headline on the page', () => {
      const view = new NewsView;

      view.displayHeadlines();

      expect(document.body.querySelectorAll('div.headline').length).toBeGreaterThan(0)
      expect(document.body.querySelectorAll('div.headline')[0].innerText).toEqual("Example Headline")
    })
  })