/**
 * @jest-environment jsdom
 */

const NewsView = require('./newsView')
const NewsModel = require('./newsModel')
jest.mock('./newsModel')

const fs = require('fs');

describe('NewsView class', () => {
  describe('displayArticles', () => {
    it('displays all articles', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      
      const articles = [
        {webTitle: 'First title', webUrl: 'url.com/1', fields: {thumbnail: 'thumbnailurl.com/1'}},
        {webTitle: 'Second Title', webUrl: 'url.com/2', fields: {thumbnail: 'thumbnailurl.com/2'}},
        {webTitle: 'Third Title', webUrl: 'url.com/3', fields: {thumbnail: 'thumbnailurl.com/3'}}
      ]

      const model = new NewsModel(articles);
      model.getArticles = jest.fn(() => articles);
      
      const view = new NewsView(model);
      view.displayArticles();

      let websiteArticles = document.querySelectorAll('div.article')
    
      expect(websiteArticles.length).toEqual(3);
      
      // checking the headlines
      let websiteHeadlines = document.querySelectorAll('h1')
      for (let index = 0; index < articles.length; index++) {
        expect(websiteHeadlines[index].textContent).toEqual(articles[index].webTitle)
      }

      // checking images
      let websiteImages = document.querySelectorAll('img')
      for (let index = 0; index < websiteImages.length; index++) {
        expect(websiteImages[index].src).toEqual(expect.stringContaining(articles[index].fields.thumbnail)) 
      }
    })
  })
})