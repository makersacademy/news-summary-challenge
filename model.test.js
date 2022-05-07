const ModelNews = require('./modelNews');

describe('#Model-calss', () => {
  it('shows the news, if there is one', () => {
    const model = new ModelNews();
    expect(model.getNews()).toEqual([]);
  });
  it('sets the news from the news provided', () => {
    const model = new ModelNews();
    let news = "This is a news"
    model.addNews(news);
    expect(model.getNews()).toEqual(['This is a news']);
  });
  it('resets the news model', () => {
    const model = new ModelNews();
    let news = "This is a news"
    model.addNews(news);
    model.resetModel();
    expect(model.getNews()).toEqual([]);
  });
});