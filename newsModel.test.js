const NewsModel = require('./newsModel')

describe('NewsModel', () => {

    it('instantiates the model and returns an empty articlesArray', () => {
        let model = new NewsModel()

        expect(model.getArticles()).toEqual([])
    })
})