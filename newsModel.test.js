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
            // response:{
               results:[
                  {
                     id:"sport/blog/2022/feb/02/at-last-the-inventors-of-modern-skiing-have-something-to-cheer-dave-ryding",
                     type:"article",
                     sectionId:"sport",
                     sectionName:"Sport",
                     webPublicationDate:"2022-02-02T14:42:43Z",
                     webTitle:"TEST HEADLINE",
                     webUrl:"https://www.theguardian.com/sport/blog/2022/feb/02/at-last-the-inventors-of-modern-skiing-have-something-to-cheer-dave-ryding",
                     apiUrl:"https://content.guardianapis.com/sport/blog/2022/feb/02/at-last-the-inventors-of-modern-skiing-have-something-to-cheer-dave-ryding",
                     fields:{
                        headline:"TEST HEADLINE",
                        byline:"TEST JOURNALIST",
                        thumbnail:"https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg"
                     }}
                    ]
                }
            // }
        ))

        model.setArticles(mockResponse)

        expect(model.getArticles()).toEqual(["TEST HEADLINE"])
        done();
    })
})