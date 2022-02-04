const ArticlesModel = require('../articlesModel')
const model = new ArticlesModel();
const apiArticles = [
  { headline: "How the arrest of a far-right militia leader signals a new chapter in the January 6 inquiry" }, 
  { headline: "Newcastle v Watford, Wolves v Southampton and more: football clockwatch live!" },
  { headline: "Covid cases have hit plateau in parts of UK, says top medical adviser" }
]

describe('ArticlesModel', () => {
  it('add a list of articles from an external resource', () => {
    model.setArticles(apiArticles)
    expect(model.articles.length).toBe(3)
    expect(model.articles[0].headline).toBe("How the arrest of a far-right militia leader signals a new chapter in the January 6 inquiry")
  })
})