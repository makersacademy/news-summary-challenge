/**
 * @jest-environment jsdom
 */
 const fs = require('fs');
 const ViewNews = require('./viewNews');
 const ModelNews = require('./modelNews');

require('jest-fetch-mock').enableFetchMocks()

jest.mock("./modelNews");

describe('#View', () => {
  it('displays the News on webpage', () =>{
    document.body.innerHTML = fs.readFileSync('./index.html')
    
    const mockModel = new ModelNews();
    const viewNews = new ViewNews(mockModel);

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
 
    viewNews.displayNews();
    expect(mockModel.getNews).toHaveBeenCalledTimes(1);
    expect(document.querySelectorAll('div.headline').length).toBe(2);
  });
});