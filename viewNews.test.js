/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const ViewNews = require('./viewNews');
const ModelNews = require('./modelNews');
const GuardianApi = require('./guardianApi');

require('jest-fetch-mock').enableFetchMocks()

jest.mock("./modelNews");
jest.mock("./guardianApi")

describe('#Views', ()=> {
  beforeEach(() => {
    ModelNews.mockClear();
    GuardianApi.mockClear();
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays the News on webpage', () =>{
    const mockModel = new ModelNews();
    
    mockModel.addNews.mockImplementation( () => [
      {"fields":{"headline":'this is a news' }},
      {"fields":{"headline":'this is a news as well'}}
    ])
    mockModel.getNews.mockImplementation( () => [
      {"fields":{"headline":'this is a news' }},
      {"fields":{"headline":'this is a news as well'}}
    ]);
    mockModel.addNews({"fields":{"headline":'this is a news' }});
    mockModel.addNews({"fields":{"headline":'this is a news as well'}});

    const viewNews = new ViewNews(mockModel);
    viewNews.displayNews();
    expect(mockModel.getNews).toHaveBeenCalledTimes(1);
    expect(document.querySelectorAll('.headline').length).toBe(2);

  });

  it('refreshes the News on webpage', () => {
    const mockModel = new ModelNews();
    
    mockModel.addNews.mockImplementation( () => [
      {"fields":{"headline":'this is a news' }},
      {"fields":{"headline":'this is a news as well'}}
    ])
    mockModel.getNews.mockImplementation( () => [
      {"fields":{"headline":'this is a news' }},
      {"fields":{"headline":'this is a news as well'}}
    ]);
    mockModel.addNews({"fields":{"headline":'this is a news' }});
    mockModel.addNews({"fields":{"headline":'this is a news as well'}});
    const viewNews = new ViewNews(mockModel);
    viewNews.displayNews();
    viewNews.displayNews();
    expect(document.querySelectorAll('.headline').length).toBe(2);
  });

  it('displays notes from API', () => {
    const mockModel = new ModelNews();
    const mockApi = new GuardianApi();
    const view = new ViewNews(mockModel, mockApi);
    mockModel.setNews.mockImplementation( () => [
      {"fields":{"headline":'this is a news' }}
    ])
    mockModel.getNews.mockImplementation( () => [
      {"fields":{"headline":'this is a news' }}
    ]);
    let searchText= view.inputEl.value;
    mockApi.loadHeadlines.mockImplementation(searchText,(callback) => callback ({
      "response":{ "results":[{"webUrl":'www.something'},{"fields":{"headline":'this is a news' }}] }
    }
    ));
    view.displayNewsFromApi();
    expect(document.querySelectorAll('.headline').length).toBe(1)
    expect(mockModel.setNews).toHaveBeenCalledTimes(1);

  });

  it('displays images from API', () =>{
    const mockModel = new ModelNews();
    const mockApi = new GuardianApi();
    const view = new ViewNews(mockModel, mockApi);

    mockModel.setNews.mockImplementation( () => [
      {"fields":{"headline":'this is a news' }}
    ])
    mockModel.getNews.mockImplementation( () => [
      {"fields":{"headline":'this is a news' }}
    ]);

    mockApi.loadHeadlines.mockImplementation("",(callback) => callback ({
      "response":{ "results":[{"webUrl":'www.something.com'},{"fields":{"headline":'this is a news', "thumbnail":'image.jpg'}}] }
    } 
    ));

    view.displayNewsFromApi();
    expect(document.querySelectorAll('.photo').length).toBe(1)
    expect(mockModel.setNews).toHaveBeenCalledTimes(1);
  });

  it('lets user search a topic for newws', () => {
    const mockModel = new ModelNews();
    const mockApi = new GuardianApi();
    const view = new ViewNews(mockModel, mockApi);

    mockModel.setNews.mockImplementation( () => [
      {"fields":{"headline":'this is a news' }}
    ])
    mockModel.getNews.mockImplementation( () => [
      {"fields":{"headline":'this is a news' }}
    ]);
    mockApi.loadHeadlines.mockImplementation("",(callback) => callback ({
      "response":{ "results":[{"webUrl":'www.something.com'},{"fields":{"headline":'this is a news', "thumbnail":'image.jpg'}}] }
    } 
    ));
    
    const inputEl = document.querySelector('#input-search');
    inputEl.value = 'AnyText';
    const searchButtonEl = document.querySelector('#search-button');
    
    searchButtonEl.click();
    
    

    expect(document.querySelectorAll('.headline').length).toBe(1)

  });
});