const newsModel = require('./newsModel');

describe('allows you to see your news stories', () => {
    it('shows your notes', () => {
        const model = new newsModel();
        expect(model.getNews()).toEqual(null)
    })
})