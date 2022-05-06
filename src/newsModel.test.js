const newsModel = require('./newsModel')

describe('newsModel', () => {
  it('checks that const variable is an instance of newsModel', () => {
    const news = new newsModel();
    expect(news).toBeInstanceOf(newsModel);
  })
  it('checks that getNews returns an array', () => {
    const news = new newsModel();
    expect(news.getNews()).toEqual([]);
  })
  it('adds a string to the news variable', () => {
    const news = new newsModel();
    news.addNews("Elon Musk buys twitter")
    expect(news.getNews()).toEqual(['Elon Musk buys twitter']);
  })
})