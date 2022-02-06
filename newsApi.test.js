const NewsApi = require('./newsApi')



require('jest-fetch-mock').enableMocks()

describe('Guardian article headlines', () => {
    it('calls fetch and loads article headlines', async () => {
        const api = new NewsApi();
        fetch.mockResponseOnce(JSON.stringify({
           webTitle: 'Burnley v Watford' 
        
        }))

        api.getNewsInfo((headline) => {
            expect(headline.webTitle).toEqual('Burnley v Watford');
        });
    });

});