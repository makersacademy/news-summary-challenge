

const NewsApi = require('./newsApi')
require('jest-fetch-mock').enableMocks()

describe('Guardian article headlines', () => {
    it('calls fech and loads article headlines', async () => {
        const api = new NewsApi();
        fetch.mockResponseOnce(JSON.stringify({
           webTitle: 'Burnley v Watford' 
        
        }))

        api.getNewsInfo('Burnley v Watford', (newsInfo) => {
            expect(newsInfo.webTitle).toEqual('Burnley v Watford');
        });
    });

});