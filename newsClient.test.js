const NewsClient = require('./newsClient')

require('jest-fetch-mock').enableMocks()

describe('NewsClient class', () => {
    it('calls fetch and loads data', (done) => {
      
      const newsClient = new NewsClient();
  
     
      fetch.mockResponseOnce(JSON.stringify({
        news: "UK news",
      }));

     newsClient.loadNews((returnedDataFromApi) => {
            expect(returnedDataFromApi.news).toBe( "UK news");
     
     done();
    });
});
});
