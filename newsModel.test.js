const NewsModel = require('./newsModel')
require('jest-fetch-mock').enableMocks()

describe('NewsModel', () => {

    it('instantiates the model and returns an empty articlesArray', () => {
        let model = new NewsModel()

        expect(model.getArticles()).toEqual([])
    })

    it('tests setArticles with a mock article object', (done) => {
        let model = new NewsModel()

        let mockResponse = fetch.mockResponse(JSON.stringify({
            fields:{
              headline:"TEST HEADLINE",
              byline:"by TEST JOURNALIST",
              thumbnail:"https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg"
           },
          }));

        model.setArticles(mockResponse)

        expect(model.getArticles()[0].headline).toEqual(["TEST HEADLINE"])
        done();
    })
})