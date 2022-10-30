const News = require('./newsModel');

describe('headlineModel', () => {
    it('returns list of empty headlines', () => {
        const news = new News();
        expect(news.getHeadlines().length).toBe(0);
    })
    it('adds headline', () => {
        const news = new News();
        expect(news.addHeadlines('BREAKING NEWS!'))
        expect(news.getHeadlines()).toEqual(['BREAKING NEWS!']);
        expect(news.getHeadlines().length).toBe(1);
    })
    it('clears all headlines', () => {
        const news = new News();
        expect(news.addHeadlines('BREAKING NEWS!'))
        news.clear()
        expect(news.getHeadlines().length).toBe(0);
    })
})