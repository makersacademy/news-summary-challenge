const NewsModel = require('./newsModel.js')

describe('newsModel class', () => {
  describe('setArticles', () => {
    it('sets articles array', () => {
      const model = new NewsModel();
  
      articlesArr = ['article1', 'article2', 'article3']
  
      model.setArticles(articlesArr)
  
      expect(model.articles).toBe(articlesArr)
    })
  })

  describe('getArticles', () => {
    it('returns all articles', () => {
      const articles = [
        {webTitle: 'First title', webUrl: 'url.com/1', fields: {thumbnail: 'thumbnailurl.com/1'}},
        {webTitle: 'Second Title', webUrl: 'url.com/2', fields: {thumbnail: 'thumbnailurl.com/2'}},
        {webTitle: 'Third Title', webUrl: 'url.com/3', fields: {thumbnail: 'thumbnailurl.com/3'}}
      ]
      const model = new NewsModel(articles);
      expect(model.getArticles()).toEqual(articles)
    })
  })
})