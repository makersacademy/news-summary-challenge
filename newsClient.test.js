require("jest-fetch-mock").enableMocks();
const NewsClient = require('./newsClient');
const newsClient = new NewsClient;

describe('NewsClient', () => {
    it('fetches and loads the data', () => {
        fetch.mockResponseOnce(
            JSON.stringify({
                type: "article",
            })
        );
        newsClient.loadNews((data) => {
            expect(data.type).toStrictEqual("article")
        })
    })
})