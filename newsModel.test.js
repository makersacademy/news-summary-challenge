const NewsModel = require('./newsModel')

describe('NewsMOdel', () => {
    it('returns a list of empty news', () => {
        const newNews = new NewsModel();
        expect(newNews.getNews()).toEqual([]);
    });
    
})