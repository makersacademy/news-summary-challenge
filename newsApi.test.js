
require('jest-fetch-mock').enableMocks()
const NewsApi = require('./newsApi')


describe('Guardian article headlines', () => {
    it('calls fech and loads article headlines', async () => {
        const api = new NewsApi();
        fetch.mockResponseOnce(JSON.stringify({
           title: 'Burnley v Watford' 
        
        }))

        api.getNewsInfo('Burnley v Watford', (newsInfo) => {
            expect(newsInfo.title).toBe('Burnley v Watford');
        });
    });

});