const NewsModel = require('./newsModel')

describe('newsModel class', () => {

  let model;
  beforeEach(() => {
    model = new NewsModel()
  })

  it ('initializes as an empty array of articles', () => {
    expect(model.getArticles()).toEqual([])
  })

  it ('adds an article object to the articles', () => {
    model.setArticles([{a:"a"}, {b:"b"}])
    expect(model.getArticles().length).toEqual(2)
  })

  it ('removes all articles from the array', () => {
    model.setArticles([{a:"a"}, {b:"b"}])
    model.reset()
    expect(model.getArticles()).toEqual([])
  })
})