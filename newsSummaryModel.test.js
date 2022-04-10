const NewsSummaryModel = require('./newsSummaryModel.js')

describe('NewsSummaryModel', () => {
  let newsModel;

  beforeEach(() => {
    newsModel = new NewsSummaryModel();
  })

  it('returns an empty array', () => {
    expect(newsModel.getNews()).toEqual([]);
  });

  it('should add a news in the news array', () => {
    newsModel.addNews('The latest news');
    expect(newsModel.getNews()).toEqual('The latest news');
  }); 

  it('resets the list of news to empty array', () => {
    newsModel.addNews('The latest news');
    newsModel.reset()
    expect(newsModel.getNews()).toEqual([]);
  }); 
});
