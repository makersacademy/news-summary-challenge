/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NewsModel = require('./newsModel');
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
    it('displayHeadlines function creates multiple headlines on the page', () => {
      const model = new NewsModel;
      const view = new NewsView(model);

      model.addHeadline("Example Headline")
      model.addHeadline("Another Example Headline")

      view.displayHeadlines();
      expect(document.body.querySelectorAll('div.headline').length).toEqual(2)
      expect(document.body.querySelectorAll('div.headline')[0].innerText).toEqual("Example Headline")
      expect(document.body.querySelectorAll('div.headline')[1].innerText).toEqual("Another Example Headline")
    })
  })