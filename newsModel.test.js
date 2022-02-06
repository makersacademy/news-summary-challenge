const NewsModel = require('./newsModel')

describe('News model class', () => {

  it('starts with no hedlines', () => {
    const news = new NewsModel();
    expect(news.getHeadlines()).toEqual([]);
  })

describe('#addHeadline', () => {
  it('adds a headline to the headlines array', () => {
    const model = new NewsModel();
    model.addHeadline("Headline1");
    expect(model.getHeadlines()).toEqual(['Headline1'])
  })
})

describe('#setHeadlines', () => {
  it('populates this.headlines array', () => {
    const model = new NewsModel();

    const headlines = [ 
      {webTitle: "headline1"},
      {webTitle: "headline2"},
      {webTitle: "headline3"} 
    ]

    model.setHeadlines(headlines)
    expect(model.getHeadlines()).toEqual(headlines)
  })
})
  
})