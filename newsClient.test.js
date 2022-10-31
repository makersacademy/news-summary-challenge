const NewsClient = require('./newsClient');
const mockJsonGuardian = require('./guardianSearchWithThumbnails.json');
require('jest-fetch-mock').enableMocks();

describe('Client class', () => {
  it('calls fetch and loads data', (done) => {
    const newsClient = new NewsClient();

    fetch.mockResponse(JSON.stringify(mockJsonGuardian));

    newsClient.loadNews((returnedDataFromApi) => {
      expect(returnedDataFromApi).toEqual(mockJsonGuardian); // Asessing deep equality
      done();
    });
  });
});
