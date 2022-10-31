const NewsView = require('./newsView');
const NewsModel = require('./newsModel');
const NewsClient = require('./newsClient')
require('jest-fetch-mock').enableMocks()

describe('NewsClient', () => {
    it('calls fetch and loads data', (done) => {
            // 1. Instantiate the class
            const client = new NewsClient();
        
            fetch.mockResponseOnce(JSON.stringify({
              name: "Test",
              id: 200
            }));
        
            client.loadHeadlines((returnedDataFromApi) => {
              expect(returnedDataFromApi.name).toBe("Test");
              expect(returnedDataFromApi.id).toBe(200);
        
              done();
            });
    })
})