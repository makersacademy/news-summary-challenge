const NewsModel = require('./newsModel');

describe('NewsModel', () => {
    it('return a list of news', () => {
        const model = new NewsModel ();
        expect(model.getNews()).toEqual([]);
    });

})