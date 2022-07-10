const NewsModel = require("./newsModel")

describe('NewsModel class', () => {
 it('adds a new headline', () => {
   const model = new NewsModel()

   model.addHeadline("Example Headline");

   expect(model.getHeadlines()).toEqual(["Example Headline"])
 })
})