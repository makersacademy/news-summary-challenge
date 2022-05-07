/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NewsModel = require('./viewNews');
const ModelNews = require('./modelNews');

// require('jest-fetch-mock').enableFetchMocks()

jest.mock("./modelNews");

describe('#Views', ()=> {
  beforeEach(() => {
    ModelNews.mockClear();
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays the News on webpage', () =>{
    const mockModel = new ModelNews();
    
    mockModel.addNews.mockImplementation( () => [
      'this is a news',
      'this is a news as well'
    ])
    mockModel.getNews.mockImplementation( () => [
      'this is a news',
      'this is a news as well'
    ]);
    mockModel.addNews('this is a news');
    mockModel.addNews('this is a news as well');
    const viewNews = new NewsModel(mockModel);
    viewNews.displayNews();
    expect(mockModel.getNews).toHaveBeenCalledTimes(1);
    expect(document.querySelectorAll('.news').length).toBe(2);

  });

  it('refreshes the News on webpage', () => {
    const mockModel = new ModelNews();
    
    mockModel.addNews.mockImplementation( () => [
      'this is a news',
      'this is a news as well'
    ])
    mockModel.getNews.mockImplementation( () => [
      'this is a news',
      'this is a news as well'
    ]);
    mockModel.addNews('this is a news');
    mockModel.addNews('this is a news as well');
    const viewNews = new NewsModel(mockModel);
    viewNews.displayNews();
    viewNews.displayNews();
    expect(document.querySelectorAll('.news').length).toBe(2);
  });
});