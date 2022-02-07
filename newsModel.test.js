const NewsModel = require('./newsModel')

describe ('newsModel', () => {
    it('starts with no headlone', () => {
        //arrange
        const newsModel = new NewsModel();
        //act
        expect(newsModel.getHeadlines()).toEqual([]);
    })

    it('adds headline', () => {
        const newsModel = new NewsModel();

        newsModel.addHeadline('Manchester Utd win the premier league!!!')

        expect(newsModel.getHeadlines()).toEqual(['Manchester Utd win the premier league!!!']);

    })

    it('resets the headlines', () => {
        const newsModel = new NewsModel();

        newsModel.addHeadline('Manchester Utd win the Premier League!!!')
        newsModel.addHeadline('Arsenal have been relegated!!!')

        newsModel.reset();

        expect(newsModel.getHeadlines()).toEqual([])
    })
})