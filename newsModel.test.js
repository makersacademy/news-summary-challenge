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
})