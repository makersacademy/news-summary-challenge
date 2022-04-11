const GuardianNewsApi = require('./guardianNewsApi');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()
describe ('GuardianApi class', () => {
  it('it calls fetch and loads headlines', async () => {
    const api = new GuardianNewsApi();
    fetch.mockResponseOnce(JSON.stringify({
    headline: "learn react"
    }));
    api.getHeadlines((headlineData) =>{
      expect(headlineData.headline).toBe("learn react");
    })
  })
})