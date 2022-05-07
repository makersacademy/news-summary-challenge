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
      'this is a news'
    ])
    mockModel.getNews.mockImplementation( () => [
      'this is a news'
    ]);
    mockModel.addNews('this is a news');
    const viewNews = new NewsModel(mockModel);
    viewNews.displayNews();
    expect(document.querySelectorAll('.news').length).toBe(1);

  });
});