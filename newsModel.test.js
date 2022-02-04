const NewsModel = require('./newsModel')

describe('News model class', () => {

  it('starts with no hedlines', () => {
    const news = new NewsModel();
    expect(news.getHeadlines()).toEqual([]);
  })

describe('addHeadline', () => {
  it('adds a headline to the headlines array', () => {
    const news = new NewsModel();
    news.addHeadline("Headline1");
    expect(news.getHeadlines()).toEqual(['Headline1'])
  })
})
  
})