require("jest-fetch-mick").enableMocks();
const NewsClient = require('./newsClient');

describe('NewsClient', () => {
    it('fetches and loads the data', () => {
        fetch.mockResponseOnce(
            JSON.stringify({
                
            })
        )
    })
})