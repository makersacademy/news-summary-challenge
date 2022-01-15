require('jest-fetch-mock').enableMocks();
const NewsApi = require('./newsApi');
const NewsModel = require('./newsModel');
const model = new NewsModel;
const api = new NewsApi;


describe('News Model', () => {
  it('returns an array of news articles', async () => {

   fetch.mockResponseOnce(JSON.stringify({
     response: {
     results: [
       {
         webTitle: 'This is a mock title'
       }],}
   }));

  api.retrieveNewsData(news => {
     expect(model.getNews(news)).not.toBe(null);
    }
   )

      

  })
})