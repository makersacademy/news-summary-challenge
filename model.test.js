const ModelNews = require('./modelNews');

describe('#Model Class', () => {
  it('show the news', () => {
    const model = new ModelNews();
    expect(model.getNews()).toEqual([])
  });

  it('adds news to an array', () => {
    const model = new ModelNews();
    let news = 'The latest news'
    model.addNews(news)
    expect(model.getNews()).toEqual(['The latest news'])
  })

  it('resets the news model and removes everything in the array', () => {
    const model = new ModelNews();
    let news = 'The latest news'
    model.addNews(news)
    model.resetNews()
    expect(model.getNews().length).toEqual(0)
  })
})