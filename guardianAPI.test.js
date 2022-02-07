const GuardianAPI = require('./guardianAPI');

require('jest-fetch-mock').enableFetchMocks()

describe('Guardian class', () => {
    it('calls fetch and loads info', async () => {
        const api = new GuardianAPI();
        fetch.mockResponseOnce(JSON.stringify({
            webtitle: 'Test Title'
        }));
        api.getArticleInfo('Test Title', (responseInfo) => {
            expect(responseInfo.webtitle).toBe('Test Title');
        });
    });
})