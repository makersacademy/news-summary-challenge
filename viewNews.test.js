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
    
  });
});