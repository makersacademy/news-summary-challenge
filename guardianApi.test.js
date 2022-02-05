const GuardianApi = require('./GuardianApi'); 

require('jest-fetch-mock').enableMocks()

describe('Guardian api', () => {
  it('calls fetch and loads guardian api data', async () => {
    const api = new GuardianApi();
    fetch.mockResponseOnce(JSON.stringify({
      headline: 'Winter Olympics day one'
    }))

    api.getHeadlines('UK', (response) => {
      expect(response.headline).toBe('Winter Olympics day one');
    });
  });
});


// https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=471c3b91-05b6-4377-81e7-16d75aee68f7

