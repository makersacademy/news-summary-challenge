require('jest-fetch-mock').enableMocks();
const GuardianApi = require('../guardianApi');

describe('Guardian Api', () => {
  it('loads a list of articles', async () => {
    const api = new GuardianApi();
    fetch.mockResponseOnce(JSON.stringify({
      response: {
        results: [
          {
            apiUrl: "https://content.guardianapis.com/world/2022/jan/14/stewart-rhodes-oath-keepers-january-6-us-capitol-attack",
            fields: {
              headline: "How the arrest of a far-right militia leader signals a new chapter in the January 6 inquiry"
            }
          }
        ]
      }
    }));

    api.loadArticles(articles => {
      expect(articles[0].apiUrl).toBe("https://content.guardianapis.com/world/2022/jan/14/stewart-rhodes-oath-keepers-january-6-us-capitol-attack");
    });
  });

});
