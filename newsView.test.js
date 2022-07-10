/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
const { runInThisContext } = require('vm');
 const NewsModel = require('./newsModel');
 const NewsView = require('./newsView');
 
 require('jest-fetch-mock').enableMocks()
  
  describe('newsView class', () => {
    beforeEach(() => {
      document.body.innerHTML = fs.readFileSync('./index.html');
    });

    it('displayHeadlines function creates a headline on the page', () => {
      const model = new NewsModel
      const view = new NewsView(model);

      model.addHeadline("Example Headline")
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
    it('displays the latest headlines from an external API', () => {
      const model = new NewsModel
      const fakeApi = {
        loadHeadlines: () => {
          model.setHeadlines([
            {
              "fields": {
                "headline": "A Live Headline"
              }
            },
            { 
              "fields": {
                "headline": "Another Live Headline"
            }} 
          ])
          view.displayHeadlines();
        }
      }
      const view = new NewsView(model,fakeApi);

      view.displayHeadlinesfromAPI()
      
      expect(document.body.querySelectorAll('div.headline').length).toEqual(2)
      expect(document.body.querySelectorAll('div.headline')[0].innerText).toEqual("A Live Headline")
    })
  })